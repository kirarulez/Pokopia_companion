// Calcola i prossimi passi consigliati dal progresso attuale e li stampa.
// Con --telegram invia il riepilogo via bot (riusa la lib del tracker: env
// TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID, DRY_RUN=1 per stampare senza inviare).
// Uso: node src/next-steps.js [--telegram] [--limit=N]
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { nextSteps, completion } from './engine.js';
import { sendTelegram, escapeHtml } from './lib/telegram.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SEND = process.argv.includes('--telegram');
const limitArg = process.argv.find((a) => a.startsWith('--limit='));
const LIMIT = limitArg ? Math.max(1, parseInt(limitArg.split('=')[1], 10) || 5) : 5;

const roadmap = JSON.parse(readFileSync(join(ROOT, 'data/roadmap.json'), 'utf8'));
const progress = JSON.parse(readFileSync(join(ROOT, 'progress/progress.json'), 'utf8'));

const steps = nextSteps(roadmap, progress.stepsDone, LIMIT);
const stat = completion(roadmap, progress.stepsDone);

const TAG_ICON = { quest: '🎯', loot: '🎒', farm: '🌱', habitat: '🏞️', build: '🔨', mossa: '✨', economia: '🪙', rank: '🏅' };

let text = `<b>🎮 Pokopia — prossimi passi</b>\n`;
text += `Rank: <b>${escapeHtml(progress.trainerRank)}</b> · Roadmap: ${stat.done}/${stat.total} (${stat.pct}%)\n\n`;
if (!steps.length) {
  text += 'Roadmap completata! 🎉 Resta il completamento libero (Habitat Dex, Pokédex).';
} else {
  steps.forEach(({ step, phase }, i) => {
    const icons = (step.tags || []).map((t) => TAG_ICON[t] || '').join('');
    text += `${i + 1}. ${icons} <b>${escapeHtml(step.title)}</b>\n`;
    text += `   ${escapeHtml(step.detail)}\n`;
    text += `   <i>${escapeHtml(phase ? phase.title : '')}</i>\n\n`;
  });
}

if (SEND) {
  await sendTelegram(text.trim());
} else {
  // Stampa in chiaro (senza tag HTML) per uso da terminale.
  console.log(text.replace(/<[^>]+>/g, '').trim());
}
