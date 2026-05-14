const LOGIN_EVENTS_KEY = "loginEvents";
const MAX_LOGIN_EVENTS = 20;

function parseEvents() {
  if (typeof window === "undefined") return [];

  try {
    return JSON.parse(localStorage.getItem(LOGIN_EVENTS_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveEvents(events) {
  if (typeof window === "undefined") return;
  localStorage.setItem(
    LOGIN_EVENTS_KEY,
    JSON.stringify(events.slice(0, MAX_LOGIN_EVENTS)),
  );
}

export function addLoginEvent(user) {
  if (
    !user ||
    (user.role !== "student" && user.role !== "teacher") ||
    typeof window === "undefined"
  )
    return;

  const events = parseEvents();
  const newEvent = {
    id: `${user.role}-login-${user.id}-${Date.now()}`,
    userId: user.id,
    userName: user.name,
    role: user.role,
    timestamp: new Date().toISOString(),
  };

  saveEvents([newEvent, ...events]);
  return newEvent;
}

export function getLoginEvents(limit = MAX_LOGIN_EVENTS) {
  if (typeof window === "undefined") return [];

  const events = parseEvents().filter(
    (event) => event.role === "student" || event.role === "teacher",
  );
  return events
    .sort((a, b) => b.timestamp.localeCompare(a.timestamp))
    .slice(0, limit);
}

export function getStudentLoginEvents(...args) {
  return getLoginEvents(...args).filter((event) => event.role === "student");
}
