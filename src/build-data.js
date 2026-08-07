// Bundla la knowledge base (data/*.json) e il progresso (progress/progress.json)
// in web/data.js, così la web app funziona anche aperta da file:// (niente fetch).
// Uso: node src/build-data.js [--verify]  (--verify: valida senza scrivere)
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateRoadmap } from './engine.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const VERIFY_ONLY = process.argv.includes('--verify');

function loadJson(rel) {
  const path = join(ROOT, rel);
  try {
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch (e) {
    console.error(`ERRORE: ${rel} non valido: ${e.message}`);
    process.exit(1);
  }
}

const data = {
  areas: loadJson('data/areas.json'),
  habitats: loadJson('data/habitats.json'),
  farming: loadJson('data/farming.json'),
  moves: loadJson('data/moves.json'),
  economy: loadJson('data/economy.json'),
  tips: loadJson('data/tips.json'),
  projects: loadJson('data/projects.json'),
  roadmap: loadJson('data/roadmap.json'),
  progress: loadJson('progress/progress.json'),
};

const errors = validateRoadmap(data.roadmap);
const knownSteps = new Set(data.roadmap.steps.map((s) => s.id));
for (const id of data.progress.stepsDone || []) {
  if (!knownSteps.has(id)) errors.push(`progress.stepsDone contiene uno step inesistente: '${id}'`);
}
if (errors.length) {
  console.error('Validazione fallita:\n - ' + errors.join('\n - '));
  process.exit(1);
}
console.log(`Dati OK: ${data.roadmap.steps.length} step, ${data.habitats.habitats.length} habitat, ${data.areas.areas.length} aree.`);

if (!VERIFY_ONLY) {
  const out =
    '// FILE GENERATO da src/build-data.js — non modificare a mano.\n' +
    '// Rigenera con: npm run build\n' +
    'window.POKOPIA = ' + JSON.stringify(data, null, 2) + ';\n';
  writeFileSync(join(ROOT, 'web/data.js'), out);
  console.log('Scritto web/data.js');
}
