// FILE GENERATO da src/build-data.js — non modificare a mano.
// Rigenera con: npm run build
window.POKOPIA = {
  "areas": {
    "_schema": "Aree di Pokémon Pokopia. 'verified': false = dato da confermare con screenshot di gioco.",
    "areas": [
      {
        "id": "withered-wasteland",
        "name": "Withered Wasteland",
        "nameIt": "Landa Appassita",
        "kantoBase": "Rovine di una località classica di Kanto (zona di partenza)",
        "unlock": {
          "rank": null,
          "note": "Disponibile dall'inizio del gioco"
        },
        "mainQuest": {
          "title": "Restaura la landa e ricostruisci il Pokémon Center",
          "requirements": [
            "Completare 2 Important Request",
            "Ricostruire il Pokémon Center",
            "Alzare l'Environment Level dell'area"
          ],
          "reward": "Great Rank → sblocca Bleak Beach e Rocky Ridges"
        },
        "npcs": [
          {
            "name": "Professor Tangrowth",
            "role": "Guida iniziale e tutorial"
          },
          {
            "name": "Squirtle",
            "role": "Insegna Water Gun (lo trovi svenuto a inizio storia)"
          },
          {
            "name": "Drilbur",
            "role": "Insegna Rototiller — letto del fiume secco a EST della plaza"
          }
        ],
        "loot": [
          {
            "item": "Wood (Legno)",
            "where": "Central Plaza e rovine sparse",
            "method": "Inhale (tieni premuto Y)",
            "verified": true
          },
          {
            "item": "Stone (Pietra)",
            "where": "Central Plaza e rovine sparse",
            "method": "Inhale",
            "verified": true
          },
          {
            "item": "Berries (Bacche)",
            "where": "Cespugli e terreno della plaza",
            "method": "Inhale / raccolta",
            "verified": true
          },
          {
            "item": "Tall Grass (Erba Alta)",
            "where": "Campi secchi dell'area di partenza",
            "method": "Raccolta — servono 4 unità per il primo habitat",
            "verified": true
          },
          {
            "item": "Bean Seeds (Semi di Fagiolo)",
            "where": "PC Shop del Pokémon Center",
            "method": "Acquisto: 50 Life Coins per 5 sacchetti",
            "verified": true
          },
          {
            "item": "Clay (Argilla)",
            "where": "Vicino al letto del fiume",
            "method": "Scavo con Rototiller",
            "verified": false
          }
        ],
        "tips": [
          "Aspira TUTTO con Inhale nella Central Plaza appena arrivi: alimenta i primi craft.",
          "Vai da Drilbur presto: Rototiller sblocca l'intero sistema farming.",
          "Il primo habitat da costruire è Erba Alta: bastano 4 Tall Grass."
        ]
      },
      {
        "id": "bleak-beach",
        "name": "Bleak Beach",
        "nameIt": "Spiaggia Cupa",
        "kantoBase": "Rovine di Vermilion City (porto, spiaggia e faro al buio)",
        "unlock": {
          "rank": "Great",
          "note": "Si sblocca completando la main quest della Withered Wasteland"
        },
        "mainQuest": {
          "title": "Brighten Things Up — riporta l'elettricità e sveglia Mosslax",
          "requirements": [
            "Ripulire il fango dalla casa di Meowth (bolle di Piplup + Water Gun)",
            "Accendere i 3 lampioni + lampione del cancello (Pawmi/Pawmo/Mareep)",
            "Ripristinare l'elettricità della città",
            "Accumulare 100 Bloom Points per svegliare Mosslax"
          ],
          "reward": "Avanzamento verso Ultra Rank"
        },
        "npcs": [
          {
            "name": "Meowth",
            "role": "Quest giver principale dell'area"
          },
          {
            "name": "Piplup",
            "role": "Attirato dall'habitat Hydrated Yellow Tall Grass — aiuta con le bolle"
          },
          {
            "name": "Pawmi",
            "role": "Attirato dal Breezy Flower Bed — accende i lampioni"
          },
          {
            "name": "Mosslax",
            "role": "Snorlax muschioso addormentato: serve 100 Bloom Points"
          }
        ],
        "loot": [
          {
            "item": "Sand (Sabbia)",
            "where": "Spiaggia",
            "method": "Inhale / scavo",
            "verified": false
          },
          {
            "item": "Tomato Seeds (Semi di Pomodoro)",
            "where": "PC Shop, dopo aver alzato l'Environment Level di Bleak Beach",
            "method": "Acquisto: 40 Life Coins per 5 sacchetti (i pomodori richiedono Water Gun)",
            "verified": true
          },
          {
            "item": "Fresh Water (Acqua Fresca)",
            "where": "Fonti d'acqua dell'area",
            "method": "Raccolta — base per le zuppe",
            "verified": false
          },
          {
            "item": "Shells / materiali marini",
            "where": "Bagnasciuga",
            "method": "Raccolta",
            "verified": false
          }
        ],
        "tips": [
          "Costruisci subito Hydrated Yellow Tall Grass per Piplup e Breezy Flower Bed per Pawmi: sono i due sblocchi chiave della quest.",
          "Se hai già Mareep o Pawmo, puoi usarli al posto di Pawmi per i lampioni."
        ]
      },
      {
        "id": "rocky-ridges",
        "name": "Rocky Ridges",
        "nameIt": "Creste Rocciose",
        "kantoBase": "Zona montuosa in rovina",
        "unlock": {
          "rank": "Great",
          "note": "Si sblocca completando la main quest della Withered Wasteland (insieme a Bleak Beach)"
        },
        "mainQuest": {
          "title": "Aiuta Chef Dente e riporta la musica con DJ Rotom",
          "requirements": [
            "Incontrare Chef Dente (Greedent cuoco) e sbloccare la cucina avanzata",
            "Trovare DJ Rotom (Radio Rotom) che alza il mood dell'area",
            "Completare le richieste principali dell'area"
          ],
          "reward": "Avanzamento verso Ultra Rank"
        },
        "npcs": [
          {
            "name": "Chef Dente",
            "role": "Greedent cuoco — hub del sistema cucina"
          },
          {
            "name": "DJ Rotom",
            "role": "Radio Rotom — aumenta il mood/comfort dell'area"
          }
        ],
        "loot": [
          {
            "item": "Wheat (Grano)",
            "where": "Regali dei Pokémon, Poké Ball rosse, spruzzi d'acqua",
            "method": "Raccolta / interazione — ingrediente base del pane",
            "verified": true
          },
          {
            "item": "Stone / minerali",
            "where": "Pareti rocciose",
            "method": "Scavo/estrazione",
            "verified": false
          },
          {
            "item": "Mushrooms (Funghi)",
            "where": "Zone umide e grotte",
            "method": "Raccolta — ingrediente cucina",
            "verified": false
          }
        ],
        "tips": [
          "Il grano NON si compra all'inizio: tienilo d'occhio nei regali dei Pokémon e nelle Poké Ball rosse.",
          "Quest'area è il momento giusto per costruire tutte le stazioni di cucina."
        ]
      },
      {
        "id": "sparkling-skylands",
        "name": "Sparkling Skylands",
        "nameIt": "Cieli Scintillanti",
        "kantoBase": "Rovine del Celadon Department Store (isole fluttuanti)",
        "unlock": {
          "rank": "Ultra",
          "note": "Serve l'Ultra Rank: completa le main quest di tutte e 3 le altre aree"
        },
        "mainQuest": {
          "title": "Rebuild the Huge Building — ricostruisci il grattacielo con Tinkmaster",
          "requirements": [
            "Raccogliere Limestone nelle zone designate",
            "Costruire l'habitat Construction-Site Generator → attira Conkeldurr",
            "Costruire il Concrete Mixer vicino all'acqua (2 Iron Ingots)",
            "Produrre 6 Concrete e consegnarli a Tinkmaster",
            "Completare i 3 piani del grattacielo"
          ],
          "reward": "Sul tetto: Master Ball + incontro con Mewtwo → Master Rank"
        },
        "npcs": [
          {
            "name": "Dragonite",
            "role": "Insegna Glide (planata tra le isole e i dirupi)"
          },
          {
            "name": "Tinkmaster",
            "role": "Tinkaton ingegnere — guida la ricostruzione del grattacielo"
          },
          {
            "name": "Conkeldurr",
            "role": "Attirato dal Construction-Site Generator — aiuta a produrre Concrete"
          },
          {
            "name": "Mewtwo",
            "role": "Leggendario sul tetto del grattacielo completato"
          }
        ],
        "loot": [
          {
            "item": "Limestone (Calcare)",
            "where": "Zone designate dell'area",
            "method": "Estrazione — serve per il Concrete",
            "verified": true
          },
          {
            "item": "Iron Ingot (Lingotto di Ferro)",
            "where": "Da minerale di ferro lavorato",
            "method": "Crafting — ne servono 2 per il Concrete Mixer",
            "verified": false
          },
          {
            "item": "Concrete (Cemento)",
            "where": "Concrete Mixer (con l'aiuto di Conkeldurr)",
            "method": "Produzione — ne servono 6 per Tinkmaster",
            "verified": true
          }
        ],
        "tips": [
          "Impara Glide da Dragonite appena arrivi: cambia completamente l'esplorazione.",
          "Costruisci il Concrete Mixer VICINO all'acqua, altrimenti non funziona."
        ]
      },
      {
        "id": "palette-town",
        "name": "Palette Town",
        "nameIt": "Palette Town (sandbox)",
        "kantoBase": "Omaggio a Pallet Town — zona creativa",
        "unlock": {
          "rank": null,
          "note": "Disponibile dall'inizio; è la zona sandbox/multiplayer"
        },
        "mainQuest": {
          "title": "Nessuna main quest: costruzione libera",
          "requirements": [
            "Terraforming e costruzione senza vincoli di terreno",
            "Cloud Islands: co-op di costruzione fino a 4 giocatori"
          ],
          "reward": "Spazio creativo condiviso"
        },
        "npcs": [],
        "loot": [],
        "tips": [
          "Usala come banco di prova per i layout degli habitat prima di costruirli nelle aree principali."
        ]
      }
    ]
  },
  "habitats": {
    "_schema": "Habitat Dex di Pokopia — nel gioco ce ne sono 213 documentati. Questo è il set iniziale curato: si estende man mano con gli screenshot delle tue scoperte (tracce dei Pokémon). 'materials': null = ricetta da scoprire. 'verified': false = dato da confermare in gioco.",
    "totalInGame": 213,
    "habitats": [
      {
        "id": "tall-grass",
        "name": "Tall Grass",
        "nameIt": "Erba Alta",
        "category": "erba",
        "materials": [
          {
            "item": "Tall Grass",
            "qty": 4
          }
        ],
        "attracts": [
          "Pokémon comuni di prato delle prime ore"
        ],
        "areaHint": "withered-wasteland",
        "priority": 1,
        "notes": "Il PRIMO habitat da costruire in assoluto: materiali facilissimi da trovare nell'area di partenza.",
        "verified": true
      },
      {
        "id": "tall-grass-water",
        "name": "Tall Grass with Water",
        "nameIt": "Erba Alta con Acqua",
        "category": "erba",
        "materials": [
          {
            "item": "Tall Grass",
            "qty": 4
          },
          {
            "item": "Water (tile)",
            "qty": 2,
            "note": "adiacenti all'erba"
          }
        ],
        "attracts": [
          "Pokémon di prato/acqua"
        ],
        "areaHint": "withered-wasteland",
        "priority": 2,
        "notes": "Variante dell'Erba Alta con 2 tile d'acqua a fianco.",
        "verified": true
      },
      {
        "id": "hydrated-yellow-tall-grass",
        "name": "Hydrated Yellow Tall Grass",
        "nameIt": "Erba Alta Gialla Idratata",
        "category": "erba",
        "materials": null,
        "attracts": [
          "Piplup"
        ],
        "areaHint": "bleak-beach",
        "priority": 3,
        "notes": "Necessario per la main quest di Bleak Beach: Piplup aiuta a pulire il fango con le bolle.",
        "verified": false
      },
      {
        "id": "breezy-flower-bed",
        "name": "Breezy Flower Bed",
        "nameIt": "Aiuola Ventilata",
        "category": "fiori",
        "materials": null,
        "attracts": [
          "Pawmi"
        ],
        "areaHint": "bleak-beach",
        "priority": 3,
        "notes": "Necessario per la main quest di Bleak Beach: Pawmi accende i lampioni.",
        "verified": false
      },
      {
        "id": "flower-field",
        "name": "Flower Field",
        "nameIt": "Campo di Fiori",
        "category": "fiori",
        "materials": [
          {
            "item": "Wood Planks",
            "qty": 20
          },
          {
            "item": "Flowers (misti)",
            "qty": 25
          },
          {
            "item": "Tall Grass",
            "qty": 10
          },
          {
            "item": "Honey",
            "qty": 5
          }
        ],
        "attracts": [
          "Pokémon insetto/fata da prato fiorito"
        ],
        "areaHint": null,
        "priority": 4,
        "notes": "",
        "verified": false
      },
      {
        "id": "stone-water-habitat",
        "name": "Stone & Water Habitat",
        "nameIt": "Habitat Acqua e Pietra",
        "category": "acqua",
        "materials": [
          {
            "item": "Stone Bricks",
            "qty": 20
          },
          {
            "item": "Clay",
            "qty": 15
          },
          {
            "item": "Water Blocks",
            "qty": 10
          },
          {
            "item": "Sand",
            "qty": 5
          }
        ],
        "attracts": [
          "Pokémon acquatici"
        ],
        "areaHint": "bleak-beach",
        "priority": 4,
        "notes": "",
        "verified": false
      },
      {
        "id": "pond",
        "name": "Pond",
        "nameIt": "Stagno",
        "category": "acqua",
        "materials": [
          {
            "item": "Wood Planks",
            "qty": 20
          },
          {
            "item": "Clay",
            "qty": 15
          },
          {
            "item": "Water Blocks",
            "qty": 10
          },
          {
            "item": "Tall Grass",
            "qty": 10
          }
        ],
        "attracts": [
          "Pokémon semi-acquatici"
        ],
        "areaHint": null,
        "priority": 4,
        "notes": "",
        "verified": false
      },
      {
        "id": "vegetable-field",
        "name": "Vegetable Field",
        "nameIt": "Orto",
        "category": "farm",
        "materials": null,
        "attracts": [
          "Pokémon attratti dalle coltivazioni"
        ],
        "areaHint": "withered-wasteland",
        "priority": 3,
        "notes": "Legato al farming: i raccolti (fagioli/pomodori/grano) contano per gli habitat agricoli.",
        "verified": false
      },
      {
        "id": "construction-site-generator",
        "name": "Construction-Site Generator",
        "nameIt": "Generatore da Cantiere",
        "category": "urbano",
        "materials": null,
        "attracts": [
          "Conkeldurr"
        ],
        "areaHint": "sparkling-skylands",
        "priority": 5,
        "notes": "Necessario per la main quest di Sparkling Skylands (catena del Concrete).",
        "verified": false
      },
      {
        "id": "campsite",
        "name": "Campsite",
        "nameIt": "Campeggio",
        "category": "urbano",
        "materials": null,
        "attracts": [
          "Pokémon 'da campeggio'"
        ],
        "areaHint": null,
        "priority": 6,
        "notes": "Molti habitat avanzati usano requisiti jolly tipo 'Seat (any)' o 'Bed (any)': qualsiasi oggetto della categoria vale.",
        "verified": false
      }
    ]
  },
  "farming": {
    "_schema": "Sistema farming e cucina di Pokopia. 'verified': false = da confermare con screenshot.",
    "farmingBasics": [
      "Il farming si sblocca imparando Rototiller da Drilbur (letto del fiume a est nella Withered Wasteland).",
      "Ciclo: ara il terreno con Rototiller → pianta i semi → innaffia con Water Gun → raccogli.",
      "I raccolti servono per la cucina e per gli habitat 'orto' (vegetable field).",
      "Fertilizzante e sprinkler ottimizzano le farm avanzate (setup end-game)."
    ],
    "crops": [
      {
        "id": "bean",
        "name": "Beans",
        "nameIt": "Fagioli",
        "unlock": "Primo raccolto disponibile (Withered Wasteland)",
        "seeds": {
          "source": "PC Shop del Pokémon Center",
          "cost": "50 Life Coins per 5 sacchetti"
        },
        "needs": [
          "Rototiller",
          "acqua"
        ],
        "usedFor": [
          "Hamburger Steak (ingrediente base)",
          "habitat orto"
        ],
        "verified": true
      },
      {
        "id": "tomato",
        "name": "Tomatoes",
        "nameIt": "Pomodori",
        "unlock": "Dopo aver alzato l'Environment Level di Bleak Beach",
        "seeds": {
          "source": "PC Shop",
          "cost": "40 Life Coins per 5 sacchetti"
        },
        "needs": [
          "Rototiller",
          "Water Gun (obbligatorio per crescere)"
        ],
        "usedFor": [
          "Ricette con pomodoro",
          "habitat orto"
        ],
        "verified": true
      },
      {
        "id": "wheat",
        "name": "Wheat",
        "nameIt": "Grano",
        "unlock": "Rocky Ridges",
        "seeds": {
          "source": "Regali dei Pokémon, Poké Ball rosse, spruzzi d'acqua (NON in vendita all'inizio)",
          "cost": "—"
        },
        "needs": [
          "Rototiller",
          "acqua"
        ],
        "usedFor": [
          "Pane (ingrediente base di tutte le ricette da forno)"
        ],
        "verified": true
      },
      {
        "id": "duckweed",
        "name": "Duckweed",
        "nameIt": "Lenticchia d'acqua",
        "unlock": "Coltura acquatica",
        "seeds": {
          "source": "Da confermare",
          "cost": "—"
        },
        "needs": [
          "acqua"
        ],
        "usedFor": [
          "Ricette/habitat acquatici"
        ],
        "verified": false
      }
    ],
    "cookingStations": [
      {
        "id": "chopping-board",
        "name": "Chopping Board",
        "nameIt": "Tagliere",
        "makes": "Insalate",
        "baseIngredient": "Leaf (Foglia)",
        "requires": "Solo il tagliere",
        "verified": true
      },
      {
        "id": "cooking-pot",
        "name": "Cooking Pot + Stove",
        "nameIt": "Pentola + Fornello",
        "makes": "Zuppe",
        "baseIngredient": "Fresh Water (Acqua Fresca)",
        "requires": "Pentola posizionata su un fornello",
        "verified": true
      },
      {
        "id": "bread-oven",
        "name": "Bread Oven",
        "nameIt": "Forno per il Pane",
        "makes": "Pane e derivati",
        "baseIngredient": "Wheat (Grano)",
        "requires": "Forno ACCESO per funzionare",
        "verified": true
      },
      {
        "id": "frying-pan",
        "name": "Frying Pan + Stove",
        "nameIt": "Padella + Fornello",
        "makes": "Hamburger Steak",
        "baseIngredient": "Beans (Fagioli)",
        "requires": "Padella posizionata su un fornello",
        "verified": true
      }
    ],
    "cookingUses": [
      "Ripristino PP: il cibo è la risorsa pratica per chi usa spesso le mosse (esplorazione, costruzione, raccolta).",
      "Comfort dei Pokémon: dai da mangiare per alzare il Comfort Level.",
      "Preferenze di gusto: ogni Pokémon ha sapori preferiti — il piatto giusto dà più comfort.",
      "Ingredienti comuni: bacche, raccolti, funghi e materiali naturali trovati esplorando."
    ]
  },
  "moves": {
    "_schema": "Le 14 mosse/trasformazioni di Ditto in Pokopia. Si imparano dai Pokémon incontrati (a volte dopo una richiesta). Le voci con 'verified': false o teacher null vanno completate con gli screenshot.",
    "totalInGame": 14,
    "moves": [
      {
        "id": "inhale",
        "name": "Inhale",
        "nameIt": "Aspira",
        "teacher": null,
        "howTo": "Disponibile da subito — tieni premuto Y",
        "use": "Aspira risorse sparse (legno, pietra, bacche): il looting di base",
        "verified": true
      },
      {
        "id": "water-gun",
        "name": "Water Gun",
        "nameIt": "Pistolacqua",
        "teacher": "Squirtle",
        "howTo": "Primo potere della storia: lo impari dallo Squirtle svenuto nella Withered Wasteland",
        "use": "Innaffiare colture, pulire fango/sporco, riempire d'acqua",
        "verified": true
      },
      {
        "id": "rototiller",
        "name": "Rototiller",
        "nameIt": "Aratura",
        "teacher": "Drilbur",
        "howTo": "Parla con Drilbur nel letto del fiume secco a EST della Central Plaza",
        "use": "Ara il terreno: sblocca l'intero sistema farming",
        "verified": true
      },
      {
        "id": "cut",
        "name": "Cut",
        "nameIt": "Taglio",
        "teacher": "Scyther",
        "howTo": "Si impara da Scyther",
        "use": "Taglia tronchi ed erba",
        "verified": true
      },
      {
        "id": "suck",
        "name": "Suck",
        "nameIt": "Risucchio",
        "teacher": null,
        "howTo": "Da confermare",
        "use": "Sposta l'acqua da un punto all'altro (terraforming idrico)",
        "verified": false
      },
      {
        "id": "glide",
        "name": "Glide",
        "nameIt": "Planata",
        "teacher": "Dragonite",
        "howTo": "Si impara da Dragonite a Sparkling Skylands",
        "use": "Plana tra dirupi e isole fluttuanti",
        "verified": true
      }
    ],
    "note": "Mancano ~8 mosse al censimento: si aggiungono man mano che le sblocchi (screenshot del menu mosse)."
  },
  "economy": {
    "_schema": "Economia di Pokopia: Life Coins, PC Shop, loop giornaliero.",
    "currency": "Life Coins",
    "earnMethods": [
      {
        "method": "PC Challenges (anche giornaliere)",
        "note": "Fonte principale. Vanno RISCOSSE al PC dopo il completamento. Le giornaliere si rinnovano alle 5:00.",
        "verified": true
      },
      {
        "method": "Stamp Rally",
        "note": "Sistema a timbri con ricompense in Life Coins",
        "verified": true
      },
      {
        "method": "Vendita oggetti",
        "note": "Vendi surplus di materiali e raccolti",
        "verified": true
      },
      {
        "method": "Alzare l'Environment Level",
        "note": "Sblocca Challenge aggiuntive (comfort, amicizie, case, richieste)",
        "verified": true
      }
    ],
    "pcShop": {
      "where": "PC del Pokémon Center",
      "sells": [
        "Mobili",
        "Ricette",
        "Semi",
        "Kit di costruzione (case prefabbricate)"
      ],
      "rotation": "Stock a rotazione: si rinnova al reset giornaliero (5:00)",
      "priorityBuys": [
        {
          "item": "Packing Tips",
          "why": "Upgrade inventario: il migliore acquisto early-game",
          "verified": true
        },
        {
          "item": "Handy Bag",
          "why": "Upgrade inventario: seconda priorità",
          "verified": true
        },
        {
          "item": "Bean Seeds",
          "why": "50 LC per 5 sacchetti: avvia il farming",
          "verified": true
        }
      ]
    },
    "buildings": {
      "note": "I kit-casa comprati al PC Shop si piazzano come progetti (blueprint): i Pokémon li costruiscono in TEMPO REALE con i materiali forniti. Progetti piccoli = poche ore; edifici grandi = quasi un giorno reale.",
      "verified": true
    },
    "dailyLoop": [
      "Riscuoti le PC Challenges giornaliere (reset 5:00)",
      "Controlla lo stock a rotazione del PC Shop",
      "Innaffia le colture e raccogli i campi pronti",
      "Dai da mangiare ai Pokémon per il comfort",
      "Avvia un progetto di costruzione prima di chiudere: procede in tempo reale"
    ]
  },
  "roadmap": {
    "_schema": "Guida passo-passo. Ogni step: id univoco, phase, area, tags, prereqs (id di step da completare prima). L'engine suggerisce i primi step non fatti con prerequisiti soddisfatti.",
    "phases": [
      {
        "id": "p1",
        "title": "Fase 1 — Fondamenta (Withered Wasteland)",
        "goal": "Imparare le meccaniche base e raggiungere il Great Rank"
      },
      {
        "id": "p2",
        "title": "Fase 2 — Luce sulla costa (Bleak Beach)",
        "goal": "Riportare l'elettricità e svegliare Mosslax"
      },
      {
        "id": "p3",
        "title": "Fase 3 — Cucina e musica (Rocky Ridges)",
        "goal": "Sbloccare la cucina completa e chiudere l'area"
      },
      {
        "id": "p4",
        "title": "Fase 4 — Verso il cielo (Sparkling Skylands)",
        "goal": "Ultra Rank, il grattacielo e Mewtwo"
      },
      {
        "id": "p5",
        "title": "Fase 5 — Completamento e creatività",
        "goal": "Habitat Dex, Pokédex e Palette Town"
      }
    ],
    "steps": [
      {
        "id": "ww-01",
        "phase": "p1",
        "area": "withered-wasteland",
        "tags": [
          "quest"
        ],
        "prereqs": [],
        "title": "Crea il personaggio e parla con il Professor Tangrowth",
        "detail": "Tutorial iniziale: personalizza il tuo Ditto umano e segui Tangrowth."
      },
      {
        "id": "ww-02",
        "phase": "p1",
        "area": "withered-wasteland",
        "tags": [
          "quest"
        ],
        "prereqs": [
          "ww-01"
        ],
        "title": "Recupera il Pokédex dalla carriola",
        "detail": "Interagisci con il punto dorato luccicante sulla carriola: il Pokédex è l'hub delle richieste."
      },
      {
        "id": "ww-03",
        "phase": "p1",
        "area": "withered-wasteland",
        "tags": [
          "quest",
          "mossa"
        ],
        "prereqs": [
          "ww-02"
        ],
        "title": "Incontra Squirtle e impara Water Gun",
        "detail": "Segui Tangrowth fino al punto panoramico e scendi le scale: trovi Squirtle svenuto."
      },
      {
        "id": "ww-04",
        "phase": "p1",
        "area": "withered-wasteland",
        "tags": [
          "loot"
        ],
        "prereqs": [
          "ww-03"
        ],
        "title": "Saccheggia la Central Plaza con Inhale",
        "detail": "Tieni premuto Y e aspira TUTTO: Wood, Stone, Berries. Alimenta i primi craft."
      },
      {
        "id": "ww-05",
        "phase": "p1",
        "area": "withered-wasteland",
        "tags": [
          "habitat"
        ],
        "prereqs": [
          "ww-04"
        ],
        "title": "Costruisci il primo habitat: Erba Alta",
        "detail": "Servono solo 4 Tall Grass, facilissime da trovare nell'area di partenza."
      },
      {
        "id": "ww-06",
        "phase": "p1",
        "area": "withered-wasteland",
        "tags": [
          "mossa"
        ],
        "prereqs": [
          "ww-04"
        ],
        "title": "Trova Drilbur e impara Rototiller",
        "detail": "Vai a EST della plaza fino al letto del fiume secco: Drilbur scava vicino a un gruppo di rocce. Rototiller sblocca il farming."
      },
      {
        "id": "ww-07",
        "phase": "p1",
        "area": "withered-wasteland",
        "tags": [
          "farm"
        ],
        "prereqs": [
          "ww-06"
        ],
        "title": "Avvia la prima farm di Fagioli",
        "detail": "Compra Bean Seeds al PC Shop (50 LC / 5 sacchetti), ara con Rototiller, innaffia con Water Gun."
      },
      {
        "id": "ww-08",
        "phase": "p1",
        "area": "withered-wasteland",
        "tags": [
          "build",
          "quest"
        ],
        "prereqs": [
          "ww-05"
        ],
        "title": "Ricostruisci il Pokémon Center",
        "detail": "Richiesto per la progressione dell'area. Fornisci i materiali e lascia lavorare i Pokémon (tempo reale)."
      },
      {
        "id": "ww-09",
        "phase": "p1",
        "area": "withered-wasteland",
        "tags": [
          "economia"
        ],
        "prereqs": [
          "ww-08"
        ],
        "title": "Attiva il loop giornaliero delle PC Challenges",
        "detail": "Riscuoti le Challenge al PC (reset 5:00): è la fonte principale di Life Coins."
      },
      {
        "id": "ww-10",
        "phase": "p1",
        "area": "withered-wasteland",
        "tags": [
          "economia"
        ],
        "prereqs": [
          "ww-09"
        ],
        "title": "Acquisti prioritari: Packing Tips e Handy Bag",
        "detail": "Gli upgrade di inventario sono i migliori primi acquisti al PC Shop."
      },
      {
        "id": "ww-11",
        "phase": "p1",
        "area": "withered-wasteland",
        "tags": [
          "quest"
        ],
        "prereqs": [
          "ww-08"
        ],
        "title": "Completa le 2 Important Request dell'area",
        "detail": "Le trovi nel Pokédex. Insieme al Pokémon Center e all'Environment Level sono il gate di progressione."
      },
      {
        "id": "ww-12",
        "phase": "p1",
        "area": "withered-wasteland",
        "tags": [
          "quest",
          "rank"
        ],
        "prereqs": [
          "ww-11"
        ],
        "title": "Alza l'Environment Level e ottieni il Great Rank",
        "detail": "Più habitat + comfort + restauro = Environment Level. Il Great Rank sblocca Bleak Beach e Rocky Ridges."
      },
      {
        "id": "bb-01",
        "phase": "p2",
        "area": "bleak-beach",
        "tags": [
          "quest"
        ],
        "prereqs": [
          "ww-12"
        ],
        "title": "Entra a Bleak Beach e incontra Meowth",
        "detail": "Rovine di Vermilion City al buio: Meowth è il quest giver dell'area."
      },
      {
        "id": "bb-02",
        "phase": "p2",
        "area": "bleak-beach",
        "tags": [
          "habitat"
        ],
        "prereqs": [
          "bb-01"
        ],
        "title": "Costruisci Hydrated Yellow Tall Grass → Piplup",
        "detail": "L'habitat attira Piplup, indispensabile per la quest del fango."
      },
      {
        "id": "bb-03",
        "phase": "p2",
        "area": "bleak-beach",
        "tags": [
          "quest"
        ],
        "prereqs": [
          "bb-02"
        ],
        "title": "Pulisci il fango dalla casa di Meowth",
        "detail": "Fai spruzzare le bolle a Piplup sul fango e lavalo via con Water Gun."
      },
      {
        "id": "bb-04",
        "phase": "p2",
        "area": "bleak-beach",
        "tags": [
          "habitat"
        ],
        "prereqs": [
          "bb-01"
        ],
        "title": "Costruisci Breezy Flower Bed → Pawmi",
        "detail": "L'habitat attira Pawmi, che sa accendere i lampioni."
      },
      {
        "id": "bb-05",
        "phase": "p2",
        "area": "bleak-beach",
        "tags": [
          "quest"
        ],
        "prereqs": [
          "bb-04"
        ],
        "title": "Accendi i 3 lampioni + il lampione del cancello",
        "detail": "Usa Pawmi (o Pawmo/Mareep se già amici) sui lampioni indicati da Meowth."
      },
      {
        "id": "bb-06",
        "phase": "p2",
        "area": "bleak-beach",
        "tags": [
          "quest"
        ],
        "prereqs": [
          "bb-03",
          "bb-05"
        ],
        "title": "Ripristina l'elettricità della città",
        "detail": "Completa la catena 'Brighten Things Up' per illuminare il porto."
      },
      {
        "id": "bb-07",
        "phase": "p2",
        "area": "bleak-beach",
        "tags": [
          "quest"
        ],
        "prereqs": [
          "bb-06"
        ],
        "title": "Accumula 100 Bloom Points e sveglia Mosslax",
        "detail": "Restaura l'area (habitat, fiori, comfort) fino a 100 Bloom Points."
      },
      {
        "id": "bb-08",
        "phase": "p2",
        "area": "bleak-beach",
        "tags": [
          "farm"
        ],
        "prereqs": [
          "bb-01"
        ],
        "title": "Sblocca e coltiva i Pomodori",
        "detail": "Alza l'Environment Level di Bleak Beach, poi compra Tomato Seeds (40 LC / 5). Richiedono Water Gun."
      },
      {
        "id": "rr-01",
        "phase": "p3",
        "area": "rocky-ridges",
        "tags": [
          "quest"
        ],
        "prereqs": [
          "ww-12"
        ],
        "title": "Esplora Rocky Ridges e incontra Chef Dente",
        "detail": "Il Greedent cuoco è l'hub del sistema cucina avanzato."
      },
      {
        "id": "rr-02",
        "phase": "p3",
        "area": "rocky-ridges",
        "tags": [
          "quest"
        ],
        "prereqs": [
          "rr-01"
        ],
        "title": "Trova DJ Rotom",
        "detail": "Il Radio Rotom alza il mood dell'area: cercalo e attivalo."
      },
      {
        "id": "rr-03",
        "phase": "p3",
        "area": "rocky-ridges",
        "tags": [
          "loot",
          "farm"
        ],
        "prereqs": [
          "rr-01"
        ],
        "title": "Procurati il Grano",
        "detail": "Regali dei Pokémon, Poké Ball rosse e spruzzi d'acqua: niente shop per ora. È la base del pane."
      },
      {
        "id": "rr-04",
        "phase": "p3",
        "area": "rocky-ridges",
        "tags": [
          "build"
        ],
        "prereqs": [
          "rr-01"
        ],
        "title": "Costruisci tutte le stazioni di cucina",
        "detail": "Tagliere (insalate), Pentola+Fornello (zuppe), Forno del Pane (acceso!), Padella+Fornello (hamburger steak)."
      },
      {
        "id": "rr-05",
        "phase": "p3",
        "area": "rocky-ridges",
        "tags": [
          "farm"
        ],
        "prereqs": [
          "rr-03",
          "rr-04"
        ],
        "title": "Cucina le 4 categorie base",
        "detail": "Insalata (base Leaf), Zuppa (base Fresh Water), Pane (base Wheat), Hamburger Steak (base Beans). Il cibo ripristina PP e alza il comfort."
      },
      {
        "id": "rr-06",
        "phase": "p3",
        "area": "rocky-ridges",
        "tags": [
          "quest",
          "rank"
        ],
        "prereqs": [
          "rr-02",
          "rr-05"
        ],
        "title": "Completa la main quest di Rocky Ridges",
        "detail": "Chiudi le richieste principali dell'area: con tutte e 3 le aree fatte arriva l'Ultra Rank."
      },
      {
        "id": "ss-01",
        "phase": "p4",
        "area": "sparkling-skylands",
        "tags": [
          "quest",
          "rank"
        ],
        "prereqs": [
          "bb-07",
          "rr-06"
        ],
        "title": "Ottieni l'Ultra Rank ed entra a Sparkling Skylands",
        "detail": "Serve la main quest completata in tutte e 3 le aree precedenti."
      },
      {
        "id": "ss-02",
        "phase": "p4",
        "area": "sparkling-skylands",
        "tags": [
          "mossa"
        ],
        "prereqs": [
          "ss-01"
        ],
        "title": "Impara Glide da Dragonite",
        "detail": "Prima cosa da fare nell'area: la planata cambia l'esplorazione tra le isole."
      },
      {
        "id": "ss-03",
        "phase": "p4",
        "area": "sparkling-skylands",
        "tags": [
          "quest"
        ],
        "prereqs": [
          "ss-01"
        ],
        "title": "Parla con Tinkmaster: 'Rebuild the Huge Building'",
        "detail": "La Tinkaton ingegnere ti chiede 6 Concrete per iniziare la ricostruzione del grattacielo."
      },
      {
        "id": "ss-04",
        "phase": "p4",
        "area": "sparkling-skylands",
        "tags": [
          "loot"
        ],
        "prereqs": [
          "ss-03"
        ],
        "title": "Raccogli Limestone nelle zone designate",
        "detail": "Il calcare è l'ingrediente del Concrete."
      },
      {
        "id": "ss-05",
        "phase": "p4",
        "area": "sparkling-skylands",
        "tags": [
          "habitat"
        ],
        "prereqs": [
          "ss-03"
        ],
        "title": "Costruisci il Construction-Site Generator → Conkeldurr",
        "detail": "L'habitat attira Conkeldurr, che ti dà la ricetta del Concrete Mixer e aiuta in produzione."
      },
      {
        "id": "ss-06",
        "phase": "p4",
        "area": "sparkling-skylands",
        "tags": [
          "build"
        ],
        "prereqs": [
          "ss-05"
        ],
        "title": "Costruisci il Concrete Mixer VICINO all'acqua",
        "detail": "Servono 2 Iron Ingots. La vicinanza all'acqua è obbligatoria."
      },
      {
        "id": "ss-07",
        "phase": "p4",
        "area": "sparkling-skylands",
        "tags": [
          "build",
          "quest"
        ],
        "prereqs": [
          "ss-04",
          "ss-06"
        ],
        "title": "Produci 6 Concrete e consegnali a Tinkmaster",
        "detail": "Con l'aiuto di Conkeldurr al mixer."
      },
      {
        "id": "ss-08",
        "phase": "p4",
        "area": "sparkling-skylands",
        "tags": [
          "build",
          "quest"
        ],
        "prereqs": [
          "ss-07"
        ],
        "title": "Completa i 3 piani del grattacielo",
        "detail": "Ricostruzione piano per piano dell'ex Celadon Department Store, guidata da Tinkmaster."
      },
      {
        "id": "ss-09",
        "phase": "p4",
        "area": "sparkling-skylands",
        "tags": [
          "quest",
          "rank"
        ],
        "prereqs": [
          "ss-08"
        ],
        "title": "Tetto: Master Ball e Mewtwo → Master Rank",
        "detail": "Prendi l'ascensore fino in cima: sul tetto trovi la Master Ball e incontri Mewtwo."
      },
      {
        "id": "comp-01",
        "phase": "p5",
        "area": null,
        "tags": [
          "habitat"
        ],
        "prereqs": [
          "ww-12"
        ],
        "title": "Habitat Dex: scopri i 213 habitat",
        "detail": "Segui le tracce dei Pokémon, sperimenta combinazioni di materiali e spunta il catalogo nella tab Habitat."
      },
      {
        "id": "comp-02",
        "phase": "p5",
        "area": null,
        "tags": [
          "quest"
        ],
        "prereqs": [
          "ss-09"
        ],
        "title": "Completa il Pokédex di Pokopia",
        "detail": "Ogni habitat attira specie diverse: incrocia il catalogo habitat con le specie mancanti."
      },
      {
        "id": "comp-03",
        "phase": "p5",
        "area": null,
        "tags": [
          "farm"
        ],
        "prereqs": [
          "rr-06"
        ],
        "title": "Ottimizza le farm: fertilizzante + sprinkler",
        "detail": "Setup avanzato dei campi per rese massime e comfort dei Pokémon a regime."
      },
      {
        "id": "pt-01",
        "phase": "p5",
        "area": "palette-town",
        "tags": [
          "build"
        ],
        "prereqs": [
          "ww-05"
        ],
        "title": "Palette Town: costruzione libera",
        "detail": "Sandbox senza vincoli di terreno: usala come banco di prova per i layout."
      },
      {
        "id": "pt-02",
        "phase": "p5",
        "area": "palette-town",
        "tags": [
          "build"
        ],
        "prereqs": [
          "pt-01"
        ],
        "title": "Cloud Islands: co-op fino a 4 giocatori",
        "detail": "La zona multiplayer condivisa per costruire con gli amici."
      }
    ]
  },
  "progress": {
    "_schema": "Stato della partita. Aggiornato dalla skill 'pokopia-screenshot' (analisi screenshot in sessione Claude Code) o a mano. La web app lo incorpora al build e permette import/export.",
    "player": "marcone",
    "updatedAt": "2026-08-07T00:00:00Z",
    "trainerRank": "Nessuno (inizio partita)",
    "currentArea": "withered-wasteland",
    "areas": {
      "withered-wasteland": {
        "unlocked": true,
        "envLevel": 0,
        "mainQuestDone": false
      },
      "bleak-beach": {
        "unlocked": false,
        "envLevel": 0,
        "mainQuestDone": false
      },
      "rocky-ridges": {
        "unlocked": false,
        "envLevel": 0,
        "mainQuestDone": false
      },
      "sparkling-skylands": {
        "unlocked": false,
        "envLevel": 0,
        "mainQuestDone": false
      },
      "palette-town": {
        "unlocked": true,
        "envLevel": 0,
        "mainQuestDone": false
      }
    },
    "lifeCoins": null,
    "stepsDone": [],
    "habitatsBuilt": [],
    "movesLearned": [
      "inhale"
    ],
    "inventoryNotes": [],
    "screenshotLog": []
  }
};
