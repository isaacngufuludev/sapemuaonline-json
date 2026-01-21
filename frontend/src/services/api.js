import { toast } from "react-toastify";
import { API_URL } from "../utils/constants.js";

/* =========================
   GET – buscar dados
========================= */
export async function get(endpoint) {
  const res = await fetch(`${API_URL}/${endpoint}`);

  if (!res.ok) {
    toast.error("Erro ao buscar dados");
  }

  return res.json();
}

/* =========================
   POST – criar novo registo
========================= */
export async function post(endpoint, data) {
  const res = await fetch(`${API_URL}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    toast.error("Erro ao criar registo");
  }

  return res.json();
}

/* =========================
   PATCH – editar parcialmente
========================= */
export async function patch(endpoint, id, data) {
  const res = await fetch(`${API_URL}/${endpoint}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Erro ao atualizar registo");
  }

  return res.json();
}

/* =========================
   DELETE – remover registo
========================= */
export async function remove(endpoint, id) {
  const res = await fetch(`${API_URL}/${endpoint}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Erro ao remover registo");
  }

  return true;
}
