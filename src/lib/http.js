// Wrapper fetch con User-Agent da browser, timeout e retry con backoff.
// Usa il global fetch di Node 20+ (nessuna dipendenza esterna).
import { log } from './logger.js';

const DEFAULT_UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Esegue una richiesta HTTP con retry.
 * @param {string} url
 * @param {object} [opts] - { headers, timeoutMs, retries, accept }
 * @returns {Promise<Response>}
 */
export async function httpGet(url, opts = {}) {
  const {
    headers = {},
    timeoutMs = 20000,
    retries = 3,
    accept = 'text/html,application/xhtml+xml,application/json;q=0.9,*/*;q=0.8',
  } = opts;

  let lastErr;
  for (let attempt = 0; attempt <= retries; attempt++) {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), timeoutMs);
    try {
      const res = await fetch(url, {
        signal: ctrl.signal,
        redirect: 'follow',
        headers: {
          'User-Agent': DEFAULT_UA,
          Accept: accept,
          'Accept-Language': 'it-IT,it;q=0.9,en;q=0.8',
          ...headers,
        },
      });
      clearTimeout(t);
      // 429/5xx -> retry; altri codici li lasciamo gestire al chiamante
      if ((res.status === 429 || res.status >= 500) && attempt < retries) {
        const wait = 1000 * Math.pow(2, attempt);
        log.warn(`HTTP ${res.status} su ${url} — retry tra ${wait}ms`);
        await sleep(wait);
        continue;
      }
      return res;
    } catch (err) {
      clearTimeout(t);
      lastErr = err;
      if (attempt < retries) {
        const wait = 1000 * Math.pow(2, attempt);
        log.warn(`Errore fetch ${url} (${err.name}: ${err.message}) — retry tra ${wait}ms`);
        await sleep(wait);
      }
    }
  }
  throw lastErr || new Error(`Fetch fallito: ${url}`);
}

/** GET che restituisce testo (o lancia se non OK). */
export async function getText(url, opts = {}) {
  const res = await httpGet(url, opts);
  if (!res.ok) throw new Error(`HTTP ${res.status} su ${url}`);
  return res.text();
}

/** GET che restituisce JSON (o lancia se non OK / non JSON). */
export async function getJson(url, opts = {}) {
  const res = await httpGet(url, { accept: 'application/json,*/*;q=0.8', ...opts });
  if (!res.ok) throw new Error(`HTTP ${res.status} su ${url}`);
  return res.json();
}
