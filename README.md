# Pokopia Companion 🟡

Sistema di guida interattiva per **Pokémon Pokopia** (Nintendo Switch 2): roadmap passo-passo,
looting per area, farming & cucina, Habitat Dex e "correzione del tiro" tramite screenshot
analizzati in sessioni Claude Code, con notifiche dei prossimi passi su Telegram.

## Come si usa

### 1. La web app (guida interattiva)

Apri `web/index.html` nel browser (funziona anche in doppio clic da file locale) oppure
attiva GitHub Pages sulla cartella `web/`.

- **🧭 Guida** — roadmap in 6 fasi (inclusa la Fase 6 del DLC Fondale Bolleblub) con "prossimi
  passi consigliati": gli step si spuntano e i successivi si sbloccano in base ai prerequisiti.
- **🗺️ Aree & Loot** — le 6 aree (5 base + Fondale Bolleblub) con main quest, personaggi chiave,
  tabella looting e tips.
- **🏞️ Habitat** — Habitat Dex con ricette/materiali, ricerca, filtri e checklist "costruito".
- **🌱 Farming & Cucina** — colture, stazioni di cucina, economia Life Coins e loop giornaliero.
- **💾 Stato** — rank, mosse imparate, export/import JSON, sync con `progress.json` della repo.

Il progresso è in `localStorage` del browser; con **Esporta/Importa** lo porti tra dispositivi.

### 2. Correzione del tiro via screenshot

1. Fai gli screenshot su Switch 2 (rank, Habitat Dex, menu mosse, inventario, quest…).
2. Apri una sessione **Claude Code** su questa repo e carica gli screen.
3. La skill `pokopia-screenshot` li interpreta e:
   - aggiorna `progress/progress.json` (fonte di verità),
   - corregge/arricchisce la knowledge base (`data/*.json`, campi `verified`),
   - rigenera la web app (`npm run build`) e pusha,
   - risponde con i prossimi 3–5 passi.
4. Il push fa scattare il workflow **Pokopia Guide**, che invia i prossimi passi su **Telegram**.

### 3. Da terminale

```bash
npm run next     # stampa i prossimi passi consigliati
npm run build    # rigenera web/data.js dai JSON
npm run check    # sintassi + validazione dati (id, prerequisiti, riferimenti)
```

## Setup

1. **Secrets GitHub** (per le notifiche Telegram): `TELEGRAM_BOT_TOKEN` e `TELEGRAM_CHAT_ID`
   in *Settings → Secrets and variables → Actions*.
2. Nessuna dipendenza npm: servono solo Node ≥ 20 (fetch nativo).
3. (Opzionale) GitHub Pages: *Settings → Pages*, deploy dalla cartella `web/`.

## Struttura

```
├── data/            # Knowledge base curata (aree, habitat, farming, mosse, economia, roadmap)
├── progress/        # progress.json: lo stato della TUA partita
├── src/             # engine.js (suggerimenti), build-data.js (bundle), next-steps.js (CLI/Telegram)
│   └── lib/         # telegram.js, http.js, logger.js (invio notifiche)
├── web/             # Web app statica (index.html + app.js + style.css + data.js generato)
├── .claude/skills/  # Skill 'pokopia-screenshot' per l'analisi degli screenshot
└── .github/         # Workflow 'Pokopia Guide' (prossimi passi su Telegram a ogni push del progresso)
```

## Note sui dati

- La knowledge base è curata da fonti pubbliche (Game8, Nintendo Life, Serebii, wiki di settore).
- Ogni dato ha un flag `verified`: `false` = da confermare in gioco. Gli screenshot che carichi
  sono la fonte di verità e promuovono i dati a `verified: true`.
- L'Habitat Dex del gioco conta **213 habitat** base + **36 del DLC Fondale Bolleblub**
  (Pass di espansione — Parte 1, uscito il 5 agosto 2026 con l'update gratuito 2.0.0):
  il catalogo qui parte dai principali e cresce con le tue scoperte.
