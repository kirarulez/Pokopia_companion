/* Pokopia Companion — logica UI (vanilla JS, nessuna dipendenza).
   Dati in window.POKOPIA (generato da pokopia/src/build-data.js).
   Progresso in localStorage; import/export JSON; sync da progress.json della repo. */
(function () {
  'use strict';
  var D = window.POKOPIA;
  if (!D) {
    document.querySelector('main').innerHTML =
      '<div class="card"><h2>Dati mancanti</h2><p>Genera <code>data.js</code> con <code>npm run pokopia:build</code>.</p></div>';
    return;
  }

  var LS_KEY = 'pokopia-progress-v1';
  var TAG_ICON = { quest: '🎯', loot: '🎒', farm: '🌱', habitat: '🏞️', build: '🔨', mossa: '✨', economia: '🪙', rank: '🏅' };
  var RANKS = ['Nessuno (inizio partita)', 'Great Rank', 'Ultra Rank', 'Master Rank'];

  // ---------- Stato ----------
  function seedFromRepo() {
    var p = D.progress || {};
    return {
      updatedAt: p.updatedAt || new Date().toISOString(),
      trainerRank: p.trainerRank || RANKS[0],
      stepsDone: (p.stepsDone || []).slice(),
      habitatsBuilt: (p.habitatsBuilt || []).slice(),
      movesLearned: (p.movesLearned || []).slice()
    };
  }
  function loadState() {
    try {
      var raw = localStorage.getItem(LS_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) { /* localStorage non disponibile: stato in memoria */ }
    return seedFromRepo();
  }
  function save() {
    state.updatedAt = new Date().toISOString();
    try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch (e) { /* ok */ }
    renderAll();
  }
  var state = loadState();

  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function has(arr, id) { return arr.indexOf(id) !== -1; }
  function toggle(arr, id) {
    var i = arr.indexOf(id);
    if (i === -1) arr.push(id); else arr.splice(i, 1);
  }

  // ---------- Engine (copia speculare di pokopia/src/engine.js) ----------
  function nextSteps(limit) {
    var done = state.stepsDone;
    var out = [];
    for (var i = 0; i < D.roadmap.steps.length; i++) {
      var s = D.roadmap.steps[i];
      if (has(done, s.id)) continue;
      var ok = (s.prereqs || []).every(function (p) { return has(done, p); });
      if (ok) { out.push(s); if (out.length >= limit) break; }
    }
    return out;
  }
  function completion() {
    var total = D.roadmap.steps.length;
    var n = D.roadmap.steps.filter(function (s) { return has(state.stepsDone, s.id); }).length;
    return { done: n, total: total, pct: total ? Math.round((n / total) * 100) : 0 };
  }
  function phaseById(id) {
    return D.roadmap.phases.filter(function (p) { return p.id === id; })[0];
  }

  function tagBadges(tags) {
    return (tags || []).map(function (t) {
      return '<span class="badge">' + (TAG_ICON[t] || '') + ' ' + esc(t) + '</span>';
    }).join('');
  }
  function vBadge(v) {
    return v ? '<span class="badge v">verificato</span>' : '<span class="badge nv">da confermare</span>';
  }

  // ---------- Tab: Guida ----------
  function renderGuida() {
    var el = document.getElementById('tab-guida');
    var stat = completion();
    var next = nextSteps(5);
    var html = '';

    html += '<div class="card next"><h2>⭐ Prossimi passi consigliati</h2>';
    if (!next.length) {
      html += '<p>Roadmap completata! 🎉 Resta il completamento libero (Habitat Dex, Pokédex).</p>';
    } else {
      html += '<ul>' + next.map(function (s) {
        var ph = phaseById(s.phase);
        return '<li><b>' + esc(s.title) + '</b> ' + tagBadges(s.tags) +
          '<div class="muted">' + esc(s.detail) + ' · <i>' + esc(ph ? ph.title : '') + '</i></div></li>';
      }).join('') + '</ul>';
    }
    html += '<div class="progressbar"><div style="width:' + stat.pct + '%"></div></div>';
    html += '<div class="muted">' + stat.done + '/' + stat.total + ' step completati (' + stat.pct + '%)</div></div>';

    D.roadmap.phases.forEach(function (ph) {
      var steps = D.roadmap.steps.filter(function (s) { return s.phase === ph.id; });
      var doneN = steps.filter(function (s) { return has(state.stepsDone, s.id); }).length;
      html += '<div class="card"><h2>' + esc(ph.title) + ' <span class="badge">' + doneN + '/' + steps.length + '</span></h2>';
      html += '<p class="muted">' + esc(ph.goal) + '</p>';
      steps.forEach(function (s) {
        var done = has(state.stepsDone, s.id);
        var unlocked = (s.prereqs || []).every(function (p) { return has(state.stepsDone, p); });
        html += '<div class="step ' + (done ? 'done' : '') + (!done && !unlocked ? ' locked' : '') + '">';
        html += '<input type="checkbox" data-step="' + s.id + '" ' + (done ? 'checked' : '') + '>';
        html += '<div><div class="title">' + esc(s.title) + ' ' + tagBadges(s.tags) + '</div>';
        html += '<div class="detail">' + esc(s.detail);
        if (!done && !unlocked) html += ' <i>(prima: ' + s.prereqs.join(', ') + ')</i>';
        html += '</div></div></div>';
      });
      html += '</div>';
    });
    el.innerHTML = html;
    el.querySelectorAll('input[data-step]').forEach(function (cb) {
      cb.addEventListener('change', function () { toggle(state.stepsDone, cb.getAttribute('data-step')); save(); });
    });
  }

  // ---------- Tab: Aree & Loot ----------
  function renderAree() {
    var el = document.getElementById('tab-aree');
    var html = '';
    D.areas.areas.forEach(function (a) {
      var repo = (D.progress.areas || {})[a.id] || {};
      html += '<div class="card"><h2>' + esc(a.name) + ' <span class="badge">' + esc(a.nameIt) + '</span>';
      if (repo.unlocked) html += ' <span class="badge v">sbloccata</span>';
      html += '</h2>';
      var unlockTxt = [a.unlock.rank ? a.unlock.rank + ' Rank' : null, a.unlock.note].filter(Boolean).join(' — ') || 'dall\'inizio';
      html += '<p class="muted">' + esc(a.kantoBase) + ' · Sblocco: ' + esc(unlockTxt) + '</p>';
      html += '<h3>🎯 Main quest: ' + esc(a.mainQuest.title) + '</h3>';
      html += '<ul>' + a.mainQuest.requirements.map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') + '</ul>';
      html += '<p class="muted">Ricompensa: ' + esc(a.mainQuest.reward) + '</p>';
      if (a.npcs.length) {
        html += '<h3>🤝 Personaggi chiave</h3><ul>' + a.npcs.map(function (n) {
          return '<li><b>' + esc(n.name) + '</b> — ' + esc(n.role) + '</li>';
        }).join('') + '</ul>';
      }
      if (a.loot.length) {
        html += '<h3>🎒 Looting</h3><div class="tablewrap"><table><tr><th>Risorsa</th><th>Dove</th><th>Come</th><th></th></tr>';
        a.loot.forEach(function (l) {
          html += '<tr><td><b>' + esc(l.item) + '</b></td><td>' + esc(l.where) + '</td><td>' + esc(l.method) + '</td><td>' + vBadge(l.verified) + '</td></tr>';
        });
        html += '</table></div>';
      }
      if (a.tips.length) {
        html += '<h3>💡 Tips</h3><ul>' + a.tips.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>';
      }
      html += '</div>';
    });
    el.innerHTML = html;
  }

  // ---------- Tab: Habitat ----------
  var habFilter = { q: '', cat: '', onlyTodo: false };
  function renderHabitat() {
    var el = document.getElementById('tab-habitat');
    var cats = [];
    D.habitats.habitats.forEach(function (h) { if (cats.indexOf(h.category) === -1) cats.push(h.category); });
    var built = D.habitats.habitats.filter(function (h) { return has(state.habitatsBuilt, h.id); }).length;

    var html = '<div class="card"><h2>🏞️ Habitat Dex <span class="badge">' + built + '/' + D.habitats.habitats.length +
      ' costruiti · ' + D.habitats.totalInGame + ' nel gioco</span></h2>';
    html += '<p class="muted">' + esc(D.habitats._schema) + '</p>';
    html += '<div class="filters">' +
      '<input id="hab-q" placeholder="Cerca habitat o Pokémon attirato…" value="' + esc(habFilter.q) + '">' +
      '<select id="hab-cat"><option value="">Tutte le categorie</option>' +
      cats.map(function (c) { return '<option ' + (habFilter.cat === c ? 'selected' : '') + '>' + esc(c) + '</option>'; }).join('') +
      '</select>' +
      '<label><input type="checkbox" id="hab-todo" ' + (habFilter.onlyTodo ? 'checked' : '') + '> solo da costruire</label>' +
      '</div>';

    D.habitats.habitats.forEach(function (h) {
      var isBuilt = has(state.habitatsBuilt, h.id);
      var text = (h.name + ' ' + h.nameIt + ' ' + (h.attracts || []).join(' ')).toLowerCase();
      if (habFilter.q && text.indexOf(habFilter.q.toLowerCase()) === -1) return;
      if (habFilter.cat && h.category !== habFilter.cat) return;
      if (habFilter.onlyTodo && isBuilt) return;
      html += '<div class="step ' + (isBuilt ? 'done' : '') + '">';
      html += '<input type="checkbox" data-hab="' + h.id + '" ' + (isBuilt ? 'checked' : '') + '>';
      html += '<div><div class="title">' + esc(h.name) + ' <span class="badge">' + esc(h.nameIt) + '</span>' +
        '<span class="badge">' + esc(h.category) + '</span>' + vBadge(h.verified) + '</div>';
      html += '<div class="detail">';
      if (h.materials) {
        html += '🧱 ' + h.materials.map(function (m) {
          return m.qty + '× ' + esc(m.item) + (m.note ? ' (' + esc(m.note) + ')' : '');
        }).join(', ') + '<br>';
      } else {
        html += '🧱 <i>Ricetta da scoprire (aggiorna con uno screenshot)</i><br>';
      }
      html += '🐾 Attira: ' + esc((h.attracts || []).join(', ') || '—');
      if (h.notes) html += '<br>📌 ' + esc(h.notes);
      html += '</div></div></div>';
    });
    html += '</div>';
    el.innerHTML = html;

    el.querySelectorAll('input[data-hab]').forEach(function (cb) {
      cb.addEventListener('change', function () { toggle(state.habitatsBuilt, cb.getAttribute('data-hab')); save(); });
    });
    document.getElementById('hab-q').addEventListener('input', function (e) {
      habFilter.q = e.target.value;
      renderHabitat();
      var q = document.getElementById('hab-q');
      q.focus(); q.setSelectionRange(q.value.length, q.value.length);
    });
    document.getElementById('hab-cat').addEventListener('change', function (e) { habFilter.cat = e.target.value; renderHabitat(); });
    document.getElementById('hab-todo').addEventListener('change', function (e) { habFilter.onlyTodo = e.target.checked; renderHabitat(); });
  }

  // ---------- Tab: Farming & Cucina ----------
  function renderFarming() {
    var el = document.getElementById('tab-farming');
    var F = D.farming, E = D.economy;
    var html = '<div class="card"><h2>🌱 Basi del farming</h2><ul>' +
      F.farmingBasics.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ul></div>';

    html += '<div class="card"><h2>🌾 Colture</h2><div class="tablewrap"><table>' +
      '<tr><th>Coltura</th><th>Sblocco</th><th>Semi</th><th>Richiede</th><th>Usi</th><th></th></tr>';
    F.crops.forEach(function (c) {
      html += '<tr><td><b>' + esc(c.nameIt) + '</b><br><span class="muted">' + esc(c.name) + '</span></td>' +
        '<td>' + esc(c.unlock) + '</td>' +
        '<td>' + esc(c.seeds.source) + (c.seeds.cost !== '—' ? '<br><b>' + esc(c.seeds.cost) + '</b>' : '') + '</td>' +
        '<td>' + c.needs.map(esc).join(', ') + '</td>' +
        '<td>' + c.usedFor.map(esc).join('; ') + '</td>' +
        '<td>' + vBadge(c.verified) + '</td></tr>';
    });
    html += '</table></div></div>';

    html += '<div class="card"><h2>🍳 Stazioni di cucina</h2><div class="tablewrap"><table>' +
      '<tr><th>Stazione</th><th>Produce</th><th>Ingrediente base</th><th>Requisiti</th></tr>';
    F.cookingStations.forEach(function (s) {
      html += '<tr><td><b>' + esc(s.nameIt) + '</b><br><span class="muted">' + esc(s.name) + '</span></td>' +
        '<td>' + esc(s.makes) + '</td><td>' + esc(s.baseIngredient) + '</td><td>' + esc(s.requires) + '</td></tr>';
    });
    html += '</table></div><h3>A cosa serve cucinare</h3><ul>' +
      F.cookingUses.map(function (u) { return '<li>' + esc(u) + '</li>'; }).join('') + '</ul></div>';

    html += '<div class="card"><h2>🪙 Economia: ' + esc(E.currency) + '</h2>' +
      '<h3>Come guadagnare</h3><ul>' + E.earnMethods.map(function (m) {
        return '<li><b>' + esc(m.method) + '</b> — ' + esc(m.note) + '</li>';
      }).join('') + '</ul>' +
      '<h3>PC Shop — acquisti prioritari</h3><ul>' + E.pcShop.priorityBuys.map(function (b) {
        return '<li><b>' + esc(b.item) + '</b> — ' + esc(b.why) + '</li>';
      }).join('') + '</ul>' +
      '<p class="muted">' + esc(E.pcShop.rotation) + ' · ' + esc(E.buildings.note) + '</p>' +
      '<h3>🔁 Loop giornaliero consigliato</h3><ol>' + E.dailyLoop.map(function (d) {
        return '<li>' + esc(d) + '</li>';
      }).join('') + '</ol></div>';

    el.innerHTML = html;
  }

  // ---------- Tab: Tips & Tricks ----------
  function renderTips() {
    var el = document.getElementById('tab-tips');
    if (!el || !D.tips) return;
    var html = '<div class="card"><h2>💡 Tips &amp; Tricks</h2>' +
      '<p class="muted">' + esc(D.tips._schema) + '</p></div>';
    D.tips.categories.forEach(function (cat) {
      html += '<div class="card"><h2>' + esc(cat.title) + '</h2><ul>';
      cat.tips.forEach(function (t) {
        html += '<li>' + esc(t.text) +
          ' <span class="muted">— ' + esc(t.source) + '</span> ' + vBadge(t.verified) + '</li>';
      });
      html += '</ul></div>';
    });
    el.innerHTML = html;
  }

  // ---------- Tab: Progetti ----------
  var SOURCE_ICON = { guida: '📖', video: '🎬', screenshot: '🖼️' };
  function renderProgetti() {
    var el = document.getElementById('tab-progetti');
    if (!el || !D.projects) return;
    var html = '<div class="card"><h2>🏗️ Progetti &amp; ispirazione</h2>' +
      '<p class="muted">' + esc(D.projects._schema) + '</p></div>';
    D.projects.categories.forEach(function (cat) {
      var projs = D.projects.projects.filter(function (p) { return p.category === cat.id; });
      if (!projs.length) return;
      html += '<div class="card"><h2>' + esc(cat.title) + '</h2>';
      projs.forEach(function (p) {
        html += '<div class="step"><div style="width:100%">';
        html += '<div class="title">' + esc(p.name) + ' ' + vBadge(p.verified) + '</div>';
        html += '<div class="detail">' + esc(p.description) + '<br>';
        if (p.materials) {
          html += '🧱 ' + p.materials.map(function (m) {
            return m.qty + '× ' + esc(m.item) + (m.note ? ' (' + esc(m.note) + ')' : '');
          }).join(', ') + '<br>';
        }
        if (p.steps) {
          html += '<ol>' + p.steps.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ol>';
        }
        html += (p.sources || []).map(function (s) {
          return (SOURCE_ICON[s.type] || '🔗') + ' <a href="' + esc(s.url).replace(/"/g, '&quot;') +
            '" target="_blank" rel="noopener">' + esc(s.label) + '</a>';
        }).join('<br>');
        html += '</div></div></div>';
      });
      html += '</div>';
    });
    el.innerHTML = html;
  }

  // ---------- Tab: Stato ----------
  function renderStato() {
    var el = document.getElementById('tab-stato');
    var stat = completion();
    var html = '<div class="card stato"><h2>💾 Il tuo stato</h2>' +
      '<p>Rank: <select id="rank-sel">' + RANKS.map(function (r) {
        return '<option ' + (state.trainerRank === r ? 'selected' : '') + '>' + esc(r) + '</option>';
      }).join('') + '</select></p>' +
      '<p class="muted">Ultimo aggiornamento locale: ' + esc(state.updatedAt) +
      '<br>progress.json della repo: ' + esc(D.progress.updatedAt) + '</p>' +
      '<p>' + stat.done + '/' + stat.total + ' step · ' + state.habitatsBuilt.length + ' habitat costruiti · ' +
      state.movesLearned.length + '/' + D.moves.totalInGame + ' mosse</p>' +
      '<button class="action" id="btn-export">⬇️ Esporta JSON</button>' +
      '<button class="action secondary" id="btn-import">⬆️ Importa JSON</button>' +
      '<button class="action secondary" id="btn-sync">🔄 Applica progress.json della repo</button>' +
      '<button class="action danger" id="btn-reset">🗑️ Azzera</button>' +
      '<input type="file" id="file-import" accept="application/json" style="display:none">' +
      '<p class="muted">Esporta il JSON e incollalo/caricalo in una sessione Claude Code insieme agli screenshot per far aggiornare la guida.</p></div>';

    html += '<div class="card"><h2>✨ Mosse imparate</h2>';
    D.moves.moves.forEach(function (m) {
      var learned = has(state.movesLearned, m.id);
      html += '<div class="step ' + (learned ? 'done' : '') + '">' +
        '<input type="checkbox" data-move="' + m.id + '" ' + (learned ? 'checked' : '') + '>' +
        '<div><div class="title">' + esc(m.name) + ' <span class="badge">' + esc(m.nameIt) + '</span>' + vBadge(m.verified) + '</div>' +
        '<div class="detail">👨‍🏫 ' + esc(m.teacher || '—') + ' · ' + esc(m.howTo) + '<br>🛠️ ' + esc(m.use) + '</div></div></div>';
    });
    html += '<p class="muted">' + esc(D.moves.note) + '</p></div>';
    el.innerHTML = html;

    el.querySelectorAll('input[data-move]').forEach(function (cb) {
      cb.addEventListener('change', function () { toggle(state.movesLearned, cb.getAttribute('data-move')); save(); });
    });
    document.getElementById('rank-sel').addEventListener('change', function (e) { state.trainerRank = e.target.value; save(); });
    document.getElementById('btn-export').addEventListener('click', function () {
      var blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'pokopia-progress-export.json';
      a.click();
      URL.revokeObjectURL(a.href);
    });
    document.getElementById('btn-import').addEventListener('click', function () {
      document.getElementById('file-import').click();
    });
    document.getElementById('file-import').addEventListener('change', function (e) {
      var f = e.target.files[0];
      if (!f) return;
      var r = new FileReader();
      r.onload = function () {
        try {
          var imp = JSON.parse(r.result);
          state.trainerRank = imp.trainerRank || state.trainerRank;
          state.stepsDone = imp.stepsDone || state.stepsDone;
          state.habitatsBuilt = imp.habitatsBuilt || state.habitatsBuilt;
          state.movesLearned = imp.movesLearned || state.movesLearned;
          save();
        } catch (err) { alert('JSON non valido: ' + err.message); }
      };
      r.readAsText(f);
    });
    document.getElementById('btn-sync').addEventListener('click', function () {
      var p = seedFromRepo();
      // Unione: non si perde nulla di ciò che hai spuntato localmente.
      p.stepsDone.forEach(function (id) { if (!has(state.stepsDone, id)) state.stepsDone.push(id); });
      p.habitatsBuilt.forEach(function (id) { if (!has(state.habitatsBuilt, id)) state.habitatsBuilt.push(id); });
      p.movesLearned.forEach(function (id) { if (!has(state.movesLearned, id)) state.movesLearned.push(id); });
      if (RANKS.indexOf(p.trainerRank) > RANKS.indexOf(state.trainerRank)) state.trainerRank = p.trainerRank;
      save();
    });
    document.getElementById('btn-reset').addEventListener('click', function () {
      if (confirm('Azzerare tutto il progresso locale?')) {
        state = { updatedAt: new Date().toISOString(), trainerRank: RANKS[0], stepsDone: [], habitatsBuilt: [], movesLearned: [] };
        save();
      }
    });
  }

  // ---------- Shell ----------
  function renderRank() {
    var stat = completion();
    document.getElementById('rankbox').innerHTML =
      'Allenatore: <b>' + esc(D.progress.player || 'player') + '</b><br>' +
      esc(state.trainerRank) + ' · roadmap ' + stat.pct + '%';
  }
  function renderAll() {
    renderRank();
    renderGuida();
    renderAree();
    renderFarming();
    renderTips();
    renderProgetti();
    renderStato();
    renderHabitat();
  }

  document.getElementById('tabs').addEventListener('click', function (e) {
    var btn = e.target.closest('button');
    if (!btn) return;
    document.querySelectorAll('.tabs button').forEach(function (b) { b.classList.remove('active'); });
    btn.classList.add('active');
    document.querySelectorAll('.tab').forEach(function (t) { t.classList.remove('active'); });
    document.getElementById('tab-' + btn.getAttribute('data-tab')).classList.add('active');
  });

  renderAll();
})();
