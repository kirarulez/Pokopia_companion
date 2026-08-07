// Engine dei suggerimenti: dato roadmap + progresso, calcola i prossimi passi
// eseguibili (non fatti, con tutti i prerequisiti soddisfatti), in ordine di guida.
// Usato da next-steps.js (Node); la web app ne contiene una copia speculare in app.js.

/**
 * @param {object} roadmap - contenuto di roadmap.json
 * @param {string[]} stepsDone - id degli step completati
 * @param {number} limit - quanti suggerimenti restituire
 * @returns {Array<{step: object, phase: object}>}
 */
export function nextSteps(roadmap, stepsDone, limit = 5) {
  const done = new Set(stepsDone || []);
  const phases = new Map(roadmap.phases.map((p) => [p.id, p]));
  const out = [];
  for (const step of roadmap.steps) {
    if (done.has(step.id)) continue;
    if ((step.prereqs || []).every((p) => done.has(p))) {
      out.push({ step, phase: phases.get(step.phase) });
      if (out.length >= limit) break;
    }
  }
  return out;
}

/** Percentuale di completamento della roadmap. */
export function completion(roadmap, stepsDone) {
  const done = new Set(stepsDone || []);
  const total = roadmap.steps.length;
  const count = roadmap.steps.filter((s) => done.has(s.id)).length;
  return { done: count, total, pct: total ? Math.round((count / total) * 100) : 0 };
}

/** Valida la coerenza della roadmap: id unici e prereqs esistenti. */
export function validateRoadmap(roadmap) {
  const errors = [];
  const ids = new Set();
  for (const s of roadmap.steps) {
    if (ids.has(s.id)) errors.push(`step duplicato: ${s.id}`);
    ids.add(s.id);
  }
  for (const s of roadmap.steps) {
    for (const p of s.prereqs || []) {
      if (!ids.has(p)) errors.push(`step ${s.id}: prereq inesistente '${p}'`);
    }
    if (!roadmap.phases.some((ph) => ph.id === s.phase)) {
      errors.push(`step ${s.id}: fase inesistente '${s.phase}'`);
    }
  }
  return errors;
}
