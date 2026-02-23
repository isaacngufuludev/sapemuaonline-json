import { toast } from "react-toastify";
import { API_URL } from "../utils/constants.js";

const GET_CACHE_TTL_MS = 60_000;
const getCache = new Map();
const inFlightGetRequests = new Map();

function normalizeEndpoint(endpoint = "") {
  return String(endpoint).replace(/^\/+|\/+$/g, "");
}

export function clearGetCache() {
  getCache.clear();
}

export function invalidateGetCacheByPrefix(prefix) {
  const normalizedPrefix = normalizeEndpoint(prefix);
  if (!normalizedPrefix) return;

  for (const key of getCache.keys()) {
    if (key === normalizedPrefix || key.startsWith(`${normalizedPrefix}/`)) {
      getCache.delete(key);
    }
  }
}

/* =========================
   GET – buscar dados
========================= */
export async function get(endpoint, options = {}) {
  const normalizedEndpoint = normalizeEndpoint(endpoint);
  const { forceFresh = false, cacheTtlMs = GET_CACHE_TTL_MS } = options;
  const now = Date.now();
  const cached = getCache.get(normalizedEndpoint);

  if (
    !forceFresh &&
    cached &&
    (cacheTtlMs <= 0 || now - cached.timestamp < cacheTtlMs)
  ) {
    return cached.data;
  }

  if (!forceFresh && inFlightGetRequests.has(normalizedEndpoint)) {
    return inFlightGetRequests.get(normalizedEndpoint);
  }

  const requestPromise = (async () => {
    const res = await fetch(`${API_URL}/${normalizedEndpoint}`);

    if (!res.ok) {
      toast.error("Erro ao buscar dados");
    }

    const data = await res.json();
    getCache.set(normalizedEndpoint, { data, timestamp: Date.now() });
    return data;
  })();

  inFlightGetRequests.set(normalizedEndpoint, requestPromise);

  try {
    return await requestPromise;
  } finally {
    inFlightGetRequests.delete(normalizedEndpoint);
  }
}

/* =========================
   POST – criar novo registo
========================= */
export async function post(endpoint, data) {
  const normalizedEndpoint = normalizeEndpoint(endpoint);
  const res = await fetch(`${API_URL}/${normalizedEndpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    toast.error("Erro ao criar registo");
  }

  clearGetCache();
  return res.json();
}

/* =========================
   PATCH – editar parcialmente
========================= */
export async function patch(endpoint, id, data) {
  const normalizedEndpoint = normalizeEndpoint(endpoint);
  const res = await fetch(`${API_URL}/${normalizedEndpoint}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    toast.error("Erro ao atualizar registo");
  }

  clearGetCache();
  return res.json();
}

/* =========================
   DELETE – remover registo
========================= */
export async function remove(endpoint, id) {
  // turmes/sdfsdsdf
  const normalizedEndpoint = normalizeEndpoint(endpoint);
  const res = await fetch(`${API_URL}/${normalizedEndpoint}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    toast.error("Erro ao remover registo");
  }

  clearGetCache();
  return true;
}
