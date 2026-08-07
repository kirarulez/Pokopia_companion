// Invio messaggi Telegram via Bot API. Legge token e chat id dalle env
// (TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID), tipicamente GitHub Secrets.
import { httpGet } from './http.js';
import { log } from './logger.js';

const TOKEN = process.env.TELEGRAM_BOT_TOKEN || '';
const CHAT_ID = process.env.TELEGRAM_CHAT_ID || '';
const DRY_RUN = process.env.DRY_RUN === '1';

export function telegramConfigured() {
  return Boolean(TOKEN && CHAT_ID);
}

/** Escape dei caratteri riservati per parse_mode HTML. */
export function escapeHtml(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Invia un messaggio. In DRY_RUN o senza credenziali stampa a video invece di inviare.
 * Telegram limita a ~4096 char: spezziamo in chunk.
 */
export async function sendTelegram(text) {
  if (DRY_RUN || !telegramConfigured()) {
    if (!telegramConfigured() && !DRY_RUN) {
      log.warn('Telegram non configurato (TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID mancanti). Stampo a video:');
    }
    console.log('\n----- MESSAGGIO TELEGRAM (non inviato) -----\n' + text + '\n--------------------------------------------\n');
    return { sent: false };
  }

  const chunks = splitChunks(text, 3800);
  for (const chunk of chunks) {
    const url =
      `https://api.telegram.org/bot${TOKEN}/sendMessage` +
      `?chat_id=${encodeURIComponent(CHAT_ID)}` +
      `&parse_mode=HTML&disable_web_page_preview=false` +
      `&text=${encodeURIComponent(chunk)}`;
    const res = await httpGet(url, { accept: 'application/json' });
    if (!res.ok) {
      const body = await res.text().catch(() => '');
      throw new Error(`Telegram sendMessage HTTP ${res.status}: ${body.slice(0, 300)}`);
    }
  }
  log.ok(`Telegram: inviato messaggio (${chunks.length} parte/i).`);
  return { sent: true };
}

function splitChunks(text, max) {
  if (text.length <= max) return [text];
  const out = [];
  const lines = text.split('\n');
  let cur = '';
  for (const line of lines) {
    if ((cur + '\n' + line).length > max) {
      if (cur) out.push(cur);
      cur = line;
    } else {
      cur = cur ? cur + '\n' + line : line;
    }
  }
  if (cur) out.push(cur);
  return out;
}
