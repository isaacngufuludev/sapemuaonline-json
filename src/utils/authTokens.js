export function generateToken() {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();

  const bytes = new Uint8Array(32);
  globalThis.crypto.getRandomValues(bytes);

  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join(
    "",
  );
}

export function createFirstAccessData() {
  return {
    firstAccessToken: generateToken(),
    firstAccessExpires: new Date(Date.now() + 30 * 60 * 1000).toISOString(),
    isActive: false,
  };
}
