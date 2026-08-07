# Pokopia Companion — istruzioni per Claude Code

## Flusso di lavoro git (regola del proprietario della repo)

Al termine di OGNI sviluppo:

1. Committa e pusha sul branch di lavoro dedicato (mai direttamente su `main`).
2. Apri sempre la pull request verso `main`.
3. **Mergia subito la pull request su `main`** senza attendere conferma:
   l'utente ha autorizzato in modo permanente il merge automatico a fine sviluppo.
4. Dopo il merge, riparti sempre dal branch riallineato da `origin/main`.

## Convenzioni della knowledge base

- I dati di gioco stanno in `data/*.json`; `progress/progress.json` è lo stato
  della partita dell'utente (fonte di verità: i suoi screenshot).
- Ogni dato ha un flag `verified`: `false` = ricavato da fonti pubbliche e da
  confermare in gioco; diventa `true` solo con la conferma via screenshot
  (skill `pokopia-screenshot`).
- Dopo ogni modifica ai dati: `npm run check` (validazione) e `npm run build`
  (rigenera `web/data.js`, da committare insieme ai sorgenti).
