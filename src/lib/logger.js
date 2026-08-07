// Logger minimale con timestamp. Nessuna dipendenza.
const ts = () => new Date().toISOString().replace('T', ' ').slice(0, 19);

export const log = {
  info: (...a) => console.log(`[${ts()}] `, ...a),
  warn: (...a) => console.warn(`[${ts()}] ⚠️ `, ...a),
  error: (...a) => console.error(`[${ts()}] ❌ `, ...a),
  ok: (...a) => console.log(`[${ts()}] ✅ `, ...a),
};
