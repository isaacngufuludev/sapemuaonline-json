const SYSTEM_EVENTS_KEY = "systemEvents";
const MAX_SYSTEM_EVENTS = 20;

function parseEvents() {
  if (typeof window === "undefined") return [];

  try {
    return JSON.parse(localStorage.getItem(SYSTEM_EVENTS_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveEvents(events) {
  if (typeof window === "undefined") return;
  localStorage.setItem(
    SYSTEM_EVENTS_KEY,
    JSON.stringify(events.slice(0, MAX_SYSTEM_EVENTS)),
  );
}

function notifySystemEventsChanged() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event("system-events-changed"));
}

export function addSystemEvent({ entity, action, type, status = "success" }) {
  if (!entity || !action || typeof window === "undefined") return;

  const events = parseEvents();
  const newEvent = {
    id: `system-event-${entity}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    entity,
    action,
    type,
    status,
    timestamp: new Date().toISOString(),
  };

  saveEvents([newEvent, ...events]);
  notifySystemEventsChanged();
  return newEvent;
}

export function getSystemEvents(limit = MAX_SYSTEM_EVENTS) {
  if (typeof window === "undefined") return [];

  return parseEvents()
    .sort((a, b) => b.timestamp.localeCompare(a.timestamp))
    .slice(0, limit);
}
