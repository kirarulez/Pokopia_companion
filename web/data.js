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
        "nameIt": "Costa Uggiolina",
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
        "id": "bubbly-basin",
        "name": "Bubbly Basin",
        "nameIt": "Fondale Bolleblub",
        "kantoBase": "Città sottomarina semi-sommersa — nuova città del Pass di espansione Parte 1 (DLC, 5 agosto 2026)",
        "unlock": {
          "rank": null,
          "note": "DLC 'Pass di espansione — Parte 1' + aggiornamento gratuito 2.0.0. Servono Jump (Magikarp), Surf (Lapras) e Dive (Manaphy); poi Popplio, davanti al Pokémon Center di Bleak Beach, indica il cancello sottomarino a OVEST"
        },
        "mainQuest": {
          "title": "Riporta in vita la città sommersa con Popplio e Corsola",
          "requirements": [
            "Impara Surf da Lapras: compare con la richiesta di Piplup attiva e chiede di ripulire 80 tile di fango",
            "Impara Sub (Dive) da Manaphy: dopo la richiesta 'Aumenta il livello di vivibilità generale!' alla Costa Uggiolina, Tangrowth indica un'isola a nord-ovest — portagli 5 Seaweed",
            "Parla con Popplio al Pokémon Center di Bleak Beach e apri il cancello sottomarino a ovest",
            "Completa la catena di richieste di Corsola (bolle di Mudkip → angurie con Corphish → Carvanha)",
            "Important Request di Popplio: 'Build the Beautiful Building' (Shiny Pearl + Ocean Door + Seashell Fencing + 15 Pokémon aiutanti)",
            "Ricostruisci il Pokémon Center del Fondale",
            "Porta il Fondale a Environment Level 3 e avvia la richiesta del Sea Temple (Tempio del Mare)"
          ],
          "reward": "36 nuovi habitat, 50 nuovi Pokémon esclusivi, blocchi galleggianti, arredi e costumi marini"
        },
        "npcs": [
          {
            "name": "Popplio",
            "role": "Guida del DLC: ti registra nel Pokédex e indica il cancello sottomarino"
          },
          {
            "name": "Manaphy",
            "role": "Insegna Dive — svenuto sull'isola a nord-ovest di Bleak Beach (porta 5 Seaweed)"
          },
          {
            "name": "Corsola",
            "role": "Quest giver principale della catena del Fondale"
          },
          {
            "name": "Mudkip",
            "role": "Spara bolle (cura piante e angurie) — sblocca il Frullatore con la quest 'Smoothie Making'"
          },
          {
            "name": "Corphish",
            "role": "Avvia la coltivazione delle angurie"
          },
          {
            "name": "Carvanha",
            "role": "Taglia le angurie a fette — attirato dall'habitat con alghe e Netting"
          },
          {
            "name": "Sharpedo",
            "role": "Attirato dal Chimney Rocks Dig Site — ha la specialità esclusiva Lucidatura (Scrub): pulisce le Grubby Pearl"
          },
          {
            "name": "Totodile",
            "role": "Sul ponte a nord: dopo qualche gioco al parco aiuta per il Beautiful Building (serve un Pokémon con specialità Generate per la macchina sparabolle)"
          }
        ],
        "loot": [
          {
            "item": "Seabed Tall Grass (Erba Alta del Fondale)",
            "where": "Fondali dell'area",
            "method": "Raccolta — il materiale più riusato dagli habitat del DLC",
            "verified": false
          },
          {
            "item": "Seafloor Flowers (Fiori del Fondale)",
            "where": "Fondali dell'area",
            "method": "Raccolta",
            "verified": false
          },
          {
            "item": "Lush Seaweed (Alga Rigogliosa)",
            "where": "Zone di alghe",
            "method": "Raccolta",
            "verified": false
          },
          {
            "item": "Colorful Coral (Corallo Colorato)",
            "where": "Barriere coralline",
            "method": "Raccolta",
            "verified": false
          },
          {
            "item": "Sea Grape (Uva di Mare)",
            "where": "Fondali dell'area",
            "method": "Raccolta — ingrediente smoothie",
            "verified": false
          },
          {
            "item": "Watermelon (Anguria)",
            "where": "Coltivazione con Corphish + bolle di Mudkip",
            "method": "Farming — Carvanha le taglia a fette per la cucina",
            "verified": true
          },
          {
            "item": "Buoyant Blocks (Blocchi Galleggianti)",
            "where": "Materiale da costruzione esclusivo del DLC",
            "method": "Crafting/progressione — fluttuano a quote diverse per costruzioni 3D subacquee",
            "verified": true
          },
          {
            "item": "Bottled Ship (Veliero in Bottiglia)",
            "where": "Da trovare/craftare",
            "method": "Serve per più habitat del DLC",
            "verified": false
          },
          {
            "item": "Decorative Poké Balls (Great/Heal/Dive/Net)",
            "where": "Da trovare/craftare nell'area",
            "method": "Servono per il Mermaid's Gym (Starmie)",
            "verified": false
          },
          {
            "item": "Grubby Pearl (Perla Sporca)",
            "where": "Soprattutto nelle grotte, a volte in zone sabbiose",
            "method": "Raccolta — dalle a un Pokémon con Lucidatura (Scrub, es. Sharpedo) per ottenere Shiny Pearl",
            "verified": false
          },
          {
            "item": "Sea Glass Fragments (Frammenti di Vetro di Mare)",
            "where": "Fondali dell'area",
            "method": "Raccolta — servono per la Furnace del Fondale (15 Iron Ore + 5 frammenti)",
            "verified": false
          }
        ],
        "tips": [
          "Prima di entrare conviene chiudere la main quest di Bleak Beach: la catena Lapras→Manaphy si aggancia a quelle richieste.",
          "Nuovo sistema di elettricità subacquea e macchine sparabolle per pulire il fango: cerca i Pokémon con le specialità giuste.",
          "Gli smoothie (base 2 fette di anguria) potenziano Surf e Dive: sblocca presto il Frullatore con Mudkip.",
          "Con i Buoyant Blocks puoi costruire strutture sospese a diverse altezze: sfrutta la terza dimensione.",
          "Il deposito condiviso funziona tramite i Portal Pod (arrivati gratis col DLC): quello che metti in un pod si ritira da qualsiasi altro pod, in ogni regione.",
          "Col Pass di espansione ricevi anche i progetti per blocchi e rotoli con motivo a tutto Ditto, più costumi inediti per Ditto."
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
    "_schema": "Habitat Dex di Pokopia — 213 nel gioco base + 36 del DLC Fondale Bolleblub (numerati D1-001…D1-036, categoria 'fondale'). Questo è il set curato: si estende man mano con gli screenshot delle tue scoperte (tracce dei Pokémon). 'materials': null = ricetta da scoprire. 'verified': false = dato da confermare in gioco.",
    "totalInGame": 249,
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
      },
      {
        "id": "seabed-tall-grass",
        "name": "Seabed Tall Grass",
        "nameIt": "Erba Alta del Fondale",
        "category": "fondale",
        "materials": null,
        "attracts": [
          "Mudkip",
          "Pokémon comuni del fondale"
        ],
        "areaHint": "bubbly-basin",
        "priority": 3,
        "notes": "DLC Fondale Bolleblub. Richiede Seabed Tall Grass (quantità da confermare): è il materiale più riusato del set — serve anche per gli habitat D1-002 e D1-008. Mudkip sblocca bolle e Frullatore.",
        "verified": false
      },
      {
        "id": "fluffy-relaxation",
        "name": "Fluffy Relaxation",
        "nameIt": "Relax Soffice",
        "category": "fondale",
        "materials": null,
        "attracts": [
          "Mudkip"
        ],
        "areaHint": "bubbly-basin",
        "priority": 4,
        "notes": "DLC. Alternativa alla Seabed Tall Grass per attirare Mudkip.",
        "verified": false
      },
      {
        "id": "coral-swaying-flower-field",
        "name": "Coral Swaying Flower Field",
        "nameIt": "Campo Fiorito tra i Coralli",
        "category": "fondale",
        "materials": [
          {
            "item": "Colorful Coral",
            "qty": 1
          },
          {
            "item": "Seafloor Flowers",
            "qty": 4
          }
        ],
        "attracts": [
          "Mareanie"
        ],
        "areaHint": "bubbly-basin",
        "priority": 4,
        "notes": "DLC Fondale Bolleblub.",
        "verified": false
      },
      {
        "id": "seaweed-netting",
        "name": "Seaweed & Netting",
        "nameIt": "Alghe e Rete",
        "category": "fondale",
        "materials": null,
        "attracts": [
          "Carvanha"
        ],
        "areaHint": "bubbly-basin",
        "priority": 4,
        "notes": "DLC. Richiede Lush Seaweed + Netting: la Netting si crafta con Vine Rope e Twine. Carvanha taglia le angurie a fette.",
        "verified": false
      },
      {
        "id": "chimney-rocks-dig-site",
        "name": "Chimney Rocks Dig Site",
        "nameIt": "Sito di Scavo dei Camini Rocciosi",
        "category": "fondale",
        "materials": [
          {
            "item": "Chimney Rocks",
            "qty": 1,
            "note": "quantità da confermare"
          },
          {
            "item": "Wheelbarrow",
            "qty": 1
          },
          {
            "item": "Excavation Tools",
            "qty": 1
          },
          {
            "item": "Traffic Cone",
            "qty": 1
          }
        ],
        "attracts": [
          "Sharpedo"
        ],
        "areaHint": "bubbly-basin",
        "priority": 5,
        "notes": "DLC. Gli oggetti si trovano nella piazza della città sommersa. Sharpedo ha la specialità esclusiva Lucidatura (Scrub): pulisce le Grubby Pearl trasformandole in Shiny Pearl per gli edifici.",
        "verified": false
      },
      {
        "id": "mermaids-gym",
        "name": "Mermaid's Gym",
        "nameIt": "Palestra della Sirena",
        "category": "fondale",
        "materials": [
          {
            "item": "Pedestal",
            "qty": 6
          },
          {
            "item": "Decorative Great Ball",
            "qty": 1
          },
          {
            "item": "Decorative Heal Ball",
            "qty": 1
          },
          {
            "item": "Decorative Dive Ball",
            "qty": 1
          },
          {
            "item": "Decorative Net Ball",
            "qty": 1
          }
        ],
        "attracts": [
          "Starmie"
        ],
        "areaHint": "bubbly-basin",
        "priority": 6,
        "notes": "DLC. Uno degli habitat più elaborati del set: vanno recuperate le 4 Poké Ball decorative.",
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
      "Fertilizzante e sprinkler ottimizzano le farm avanzate (setup end-game).",
      "Nel Fondale Bolleblub (DLC) si coltiva sott'acqua: le piante crescono con le bolle dei Pokémon con specialità Acqua (es. Mudkip)."
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
      },
      {
        "id": "watermelon",
        "name": "Watermelon",
        "nameIt": "Anguria",
        "unlock": "Fondale Bolleblub (DLC): parla con Corphish per avviare la coltivazione",
        "seeds": {
          "source": "Catena di richieste di Corphish nel Fondale",
          "cost": "—"
        },
        "needs": [
          "Bolle di Mudkip (specialità Acqua) sulle piantine",
          "Corphish per farle maturare",
          "Carvanha per tagliarle a fette"
        ],
        "usedFor": [
          "Watermelon Slices: base di tutti e 6 gli smoothie del DLC",
          "Le 10 nuove ricette del Fondale"
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
      },
      {
        "id": "blender",
        "name": "Blender",
        "nameIt": "Frullatore (DLC)",
        "makes": "Smoothie — potenziano Surf e Dive",
        "baseIngredient": "Watermelon Slices (2 fette di anguria)",
        "requires": "Fondale Bolleblub: sblocca Mudkip, arriva alla quest 'Smoothie Making' e crafta il Frullatore con 2 Pokémetal",
        "verified": false
      }
    ],
    "cookingUses": [
      "Ripristino PP: il cibo è la risorsa pratica per chi usa spesso le mosse (esplorazione, costruzione, raccolta).",
      "Comfort dei Pokémon: dai da mangiare per alzare il Comfort Level.",
      "Preferenze di gusto: ogni Pokémon ha sapori preferiti — il piatto giusto dà più comfort.",
      "Ingredienti comuni: bacche, raccolti, funghi e materiali naturali trovati esplorando.",
      "DLC Fondale Bolleblub: 10 nuove ricette — 6 smoothie (base 2 fette di anguria) + insalata, zuppa, pane e hamburger steak marini.",
      "Smoothie noti: Anguria (3 fette, Neutro), Leppa (2 fette + 1 baccaleppa, Dolce), Uva di Mare (2 fette + 1 Sea Grape, Secco), Soda Rinfrescante (1 fetta + 1 baccacedro + 1 Soda Pop, Aspro), Parfait al Caffè (1 fetta + 1 Moomoo Milk Coffee + 1 Simple Bread, Amaro)."
    ]
  },
  "moves": {
    "_schema": "Mosse/trasformazioni di Ditto in Pokopia. Il gioco base ne conta 14; l'update 2.0.0 aggiunge Dive (15). Inhale è l'abilità base di Ditto, disponibile da subito (probabilmente fuori dal conteggio del menu mosse). Si imparano dai Pokémon incontrati, spesso dopo una richiesta. 'verified': false = insegnante/procedura da confermare con screenshot.",
    "totalInGame": 15,
    "moves": [
      {
        "id": "inhale",
        "name": "Inhale",
        "nameIt": "Aspira",
        "teacher": null,
        "howTo": "Abilità base di Ditto, disponibile da subito — tieni premuto Y",
        "use": "Aspira risorse sparse (legno, pietra, bacche): il looting di base. Trucco community: 10+ oggetti in un colpo = bonus 1.5×",
        "verified": true
      },
      {
        "id": "water-gun",
        "name": "Water Gun",
        "nameIt": "Pistolacqua",
        "teacher": "Squirtle",
        "howTo": "Primo potere della storia: lo impari dallo Squirtle svenuto nella Withered Wasteland (tutorial)",
        "use": "Innaffiare colture, pulire fango/sporco, riempire d'acqua",
        "verified": true
      },
      {
        "id": "leafage",
        "name": "Leafage",
        "nameIt": "Fogliame",
        "teacher": "Bulbasaur",
        "howTo": "Withered Wasteland: costruisci l'habitat Erba Alta (4 Tall Grass) per attirare Bulbasaur, poi completa la sua richiesta (innaffia 10 chiazze d'erba secca)",
        "use": "Fa crescere l'erba alta sui terreni adatti — fondamentale per creare habitat ovunque",
        "verified": false
      },
      {
        "id": "cut",
        "name": "Cut",
        "nameIt": "Taglio",
        "teacher": "Scyther",
        "howTo": "Withered Wasteland: si impara da Scyther, in una quest combinata con Hitmonchan (che insegna Rock Smash)",
        "use": "Taglia tronchi ed erba. La versione potenziata apre anche le reti metalliche (es. tunnel delle Railway Track)",
        "verified": true
      },
      {
        "id": "rock-smash",
        "name": "Rock Smash",
        "nameIt": "Spaccaroccia",
        "teacher": "Hitmonchan",
        "howTo": "Withered Wasteland: quest combinata con Scyther (Cut)",
        "use": "Spacca rocce e macigni per liberare aree e raccogliere pietra",
        "verified": false
      },
      {
        "id": "rototiller",
        "name": "Rototiller",
        "nameIt": "Aratura",
        "teacher": "Drilbur",
        "howTo": "Parla con Drilbur nel letto del fiume secco a EST della Central Plaza (Withered Wasteland)",
        "use": "Ara il terreno: sblocca l'intero sistema farming",
        "verified": true
      },
      {
        "id": "jump",
        "name": "Jump",
        "nameIt": "Salto",
        "teacher": "Magikarp",
        "howTo": "Si impara da Magikarp nella Withered Wasteland — prerequisito della catena che porta al Fondale Bolleblub",
        "use": "Salta ostacoli e dislivelli",
        "verified": false
      },
      {
        "id": "surf",
        "name": "Surf",
        "nameIt": "Surf",
        "teacher": "Lapras",
        "howTo": "Lapras compare a Bleak Beach con la richiesta di Piplup attiva: ripulisci 80 tile di fango e riparlagli",
        "use": "Nuota veloce in superficie. Con la 2.0.0 è potenziato: più velocità e rompe i blocchi. Gli smoothie lo potenziano ulteriormente",
        "verified": false
      },
      {
        "id": "camouflage",
        "name": "Camouflage",
        "nameIt": "Camuffamento",
        "teacher": "Zorua",
        "howTo": "Bleak Beach: porta a termine la missione di Zorua",
        "use": "Ditto si trasforma in un oggetto: perfetto per osservare i Pokémon da vicino senza disturbarli",
        "verified": false
      },
      {
        "id": "suck",
        "name": "Suck Up Liquids",
        "nameIt": "Risucchio",
        "teacher": "Wooper",
        "howTo": "Bleak Beach: trova Wooper dopo un po' di progressi nell'area",
        "use": "Aspira l'acqua e la sposta da un punto all'altro (terraforming idrico)",
        "verified": false
      },
      {
        "id": "rollout",
        "name": "Rollout",
        "nameIt": "Rotolamento",
        "teacher": "Graveler",
        "howTo": "Rocky Ridges: si impara da Graveler",
        "use": "Distrugge il terreno rotolando: il re del terraforming veloce — sbloccalo appena puoi",
        "verified": false
      },
      {
        "id": "strength",
        "name": "Strength",
        "nameIt": "Forza",
        "teacher": "Machoke",
        "howTo": "Rocky Ridges: si impara da un Machoke in un campo di allenamento erboso",
        "use": "Sposta grandi massi e blocchi pesanti",
        "verified": false
      },
      {
        "id": "glide",
        "name": "Glide",
        "nameIt": "Planata",
        "teacher": "Dragonite",
        "howTo": "Si impara da Dragonite a Sparkling Skylands",
        "use": "Plana tra dirupi e isole fluttuanti: da lì in poi uno dei modi principali di spostarsi",
        "verified": true
      },
      {
        "id": "waterfall",
        "name": "Waterfall",
        "nameIt": "Cascata",
        "teacher": "Gyarados",
        "howTo": "Sparkling Skylands: Gyarados è nascosto SOTTO le cascate dell'area",
        "use": "Risali le cascate a nuoto — ricorda che ogni cascata nasconde una grotta",
        "verified": false
      },
      {
        "id": "magnet-rise",
        "name": "Magnet Rise",
        "nameIt": "Magnetascesa",
        "teacher": "Magnemite",
        "howTo": "Post-game (dopo i titoli di coda): costruisci l'habitat 'deposito di fabbrica' di Magnemite",
        "use": "Levitazione magnetica: la trasformazione finale e più potente del gioco",
        "verified": false
      },
      {
        "id": "dive",
        "name": "Dive",
        "nameIt": "Sub",
        "teacher": "Manaphy",
        "howTo": "Aggiunto con l'update gratuito 2.0.0: dopo Surf, Tangrowth indica un'isola a nord-ovest — Manaphy chiede 5 Seaweed (abbondanti a Bleak Beach)",
        "use": "Respira e costruisci sott'acqua, interagisci coi Pokémon marini. Indispensabile per il cancello del Fondale Bolleblub",
        "verified": false
      }
    ],
    "note": "Censimento COMPLETO delle 14 trasformazioni del gioco base + Dive (2.0.0) + Inhale (abilità base). Ordine ≈ di sblocco: Withered Wasteland (Water Gun, Leafage, Cut, Rock Smash, Rototiller, Jump) → Bleak Beach (Surf, Camouflage, Suck Up Liquids) → Rocky Ridges (Rollout, Strength) → Sparkling Skylands (Glide, Waterfall) → post-game (Magnet Rise). Gli insegnanti 'da confermare' si verificano con gli screenshot del menu mosse."
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
      },
      {
        "method": "Valutazione Lost Relics",
        "note": "Con l'update 2.0.0 si valutano in lotti fino a 10 alla volta: niente più dialoghi ripetuti",
        "verified": false
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
      "note": "I kit-casa comprati al PC Shop si piazzano come progetti (blueprint): i Pokémon li costruiscono in TEMPO REALE con i materiali forniti. Progetti piccoli = poche ore; edifici grandi = quasi un giorno reale. Deposito CONDIVISO tra le città tramite i Portal Pod (arrivati gratis col DLC): 140 stack accessibili da qualsiasi pod, in stile Ender Chest — piazzane uno per regione.",
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
  "tips": {
    "_schema": "Tips & Tricks curati da fonti community e guide (hamy.xyz, Nintendo Life, Polygon, Reddit r/Pokopia, GameFAQs, PokopiaCenter, TheGamer…). 'verified': false = meccanica riportata dalla community, da confermare in gioco. 'source': fonte principale del tip.",
    "categories": [
      {
        "id": "primi-passi",
        "title": "🚀 Primi passi",
        "tips": [
          {
            "text": "Puoi avere fino a 5 Pokémon al seguito, non 1 o 2 come sembra all'inizio: porta sempre una squadra completa per costruire ed esplorare.",
            "source": "Polygon",
            "verified": true
          },
          {
            "text": "I follower più utili nelle prime ore hanno le specialità Search (Dowsing Machine: trova oggetti sepolti) e Storage.",
            "source": "Polygon",
            "verified": false
          },
          {
            "text": "La prima città serve a imparare le meccaniche, non a essere il tuo capolavoro: gli upgrade successivi rendono costruzione e terraforming molto più veloci. Non perfezionare troppo presto.",
            "source": "Polygon",
            "verified": true
          },
          {
            "text": "Costruisci habitat DI CONTINUO: sono facili — un ciuffo d'erba, qualche fiore o una canna da pesca vicino all'acqua bastano. Ogni spazio libero è un habitat potenziale.",
            "source": "Polygon / Nintendo Life",
            "verified": true
          },
          {
            "text": "Sblocca Rollout appena possibile: è il re del terraforming veloce, distrugge il terreno molto più in fretta delle alternative.",
            "source": "GameFAQs / PokémonGOHub",
            "verified": false
          }
        ]
      },
      {
        "id": "energia-pp",
        "title": "⚡ Energia & PP",
        "tips": [
          {
            "text": "Le bacche ripristinano PP all'istante: scuoti qualche albero e tieni SEMPRE una scorta nella borsa.",
            "source": "Polygon",
            "verified": true
          },
          {
            "text": "Riposare su letti e sedie recupera PP gradualmente (i letti sono più veloci delle sedie).",
            "source": "GameFAQs",
            "verified": false
          },
          {
            "text": "Il cibo cucinato ripristina TUTTI i PP e dà un bonus alla mossa: cucina sempre prima di una grossa sessione di costruzione.",
            "source": "GameFAQs / PokopiaCenter",
            "verified": true
          }
        ]
      },
      {
        "id": "costruzione",
        "title": "🔨 Costruzione & crafting",
        "tips": [
          {
            "text": "Piazza un box di stoccaggio accanto al banco da lavoro: i materiali nel box si usano direttamente nel crafting. Si possono collegare fino a 4 box grandi allo stesso banco.",
            "source": "Polygon / TheGamer",
            "verified": false
          },
          {
            "text": "Coda di crafting: seleziona la stessa ricetta più volte per accodare fino a 5 pezzi che si producono back-to-back.",
            "source": "PokopiaCenter",
            "verified": false
          },
          {
            "text": "Tieni premuto A mentre piazzi i blocchi per posarli in fila continua, molto più veloce che uno alla volta.",
            "source": "PokopiaCenter",
            "verified": false
          },
          {
            "text": "Ogni progetto con blueprint richiede almeno un Pokémon con specialità Build (es. Timburr/Gurdurr): fattene amico uno presto per mulini, cottage e strutture grandi.",
            "source": "Nintendo Life",
            "verified": true
          },
          {
            "text": "Usa le scale con giudizio nelle zone molto trafficate e sfrutta case modulari annidate per layout compatti.",
            "source": "hamy.xyz",
            "verified": false
          }
        ]
      },
      {
        "id": "pokemon-comfort",
        "title": "🤝 Pokémon, comfort & amicizia",
        "tips": [
          {
            "text": "Le richieste dei Pokémon sono la via più rapida per alzare il comfort: dai loro sempre priorità.",
            "source": "Reddit r/Pokopia",
            "verified": true
          },
          {
            "text": "Arredi e decorazioni che il singolo Pokémon AMA alzano il comfort più in fretta di quelli generici.",
            "source": "Reddit r/Pokopia",
            "verified": false
          },
          {
            "text": "Controlli il comfort chiedendolo direttamente al Pokémon oppure dalla Happiness Overview sul PC del Pokémon Center.",
            "source": "Reddit r/Pokopia",
            "verified": false
          },
          {
            "text": "Ogni Pokémon ha sapori preferiti: il piatto giusto dà molto più comfort dello stesso piatto 'sbagliato'.",
            "source": "Nintendo Life",
            "verified": true
          }
        ]
      },
      {
        "id": "automazione",
        "title": "🤖 Automazione & farm end-game",
        "tips": [
          {
            "text": "Community Box: i Pokémon amici ci depositano materiali automaticamente mentre girano per l'area. Più amici ci sono in zona, più in fretta si riempie.",
            "source": "TheGamer",
            "verified": false
          },
          {
            "text": "Loop AFK: Pokémon con specialità Litter lasciano cadere oggetti → un Gather li raccoglie → finiscono nella Community Box. Il trio copre il farming passivo.",
            "source": "hamy.xyz",
            "verified": false
          },
          {
            "text": "Honey farm automatica: pianta esattamente 4 fiori selvatici in quadrato stretto per attirare un Combee (Litter) che molla barattoli di miele; aggiungi un Gather nella stessa aiuola per la raccolta a zero sforzo.",
            "source": "Nerdschalk",
            "verified": false
          },
          {
            "text": "Sistema i Pokémon vicino al posto di lavoro: Grow accanto alle colture, Burn accanto alle fornaci con le materie prime, Crush accanto ai mixer.",
            "source": "hamy.xyz",
            "verified": false
          },
          {
            "text": "Lo sprinkler pesca acqua fino a 5 blocchi di distanza e innaffia a rombo: griglie 3×3 di sprinkler + frutteti di bacche sono il setup end-game per le colture.",
            "source": "hamy.xyz / GAMES.GG",
            "verified": false
          },
          {
            "text": "Dream Islands: con le Dream Island Dolls farmi in fretta materiali di un tipo specifico — usale quando un progetto chiede quantità enormi di una sola risorsa.",
            "source": "Nintendo Life",
            "verified": false
          }
        ]
      },
      {
        "id": "segreti",
        "title": "🔍 Segreti & meccaniche nascoste",
        "tips": [
          {
            "text": "Inhale ha un moltiplicatore nascosto: aspirando 10+ oggetti in un solo colpo ottieni un bonus 1.5× su tutto il raccolto. Ammassa prima, aspira poi.",
            "source": "PokopiaCenter",
            "verified": false
          },
          {
            "text": "Ogni cascata nasconde una grotta (tradizione Pokémon): dentro trovi Poké Ball luminose con ricette rare e a volte habitat di specie non comuni.",
            "source": "PokopiaCenter / GameFAQs",
            "verified": false
          },
          {
            "text": "I muri con una texture leggermente diversa (crepe accennate) si rompono con qualsiasi strumento da scavo: dietro ci sono tunnel scorciatoia, vene di risorse o stanzette col tesoro.",
            "source": "PokopiaCenter",
            "verified": false
          },
          {
            "text": "Le PC Challenges vanno RISCOSSE al PC: completa e passa a riscuotere ogni giorno, il reset è alle 5:00.",
            "source": "GameFAQs",
            "verified": true
          }
        ]
      },
      {
        "id": "dlc",
        "title": "🌊 Fondale Bolleblub (DLC) & update 2.0.0",
        "tips": [
          {
            "text": "Prepara gli smoothie appena sblocchi il Frullatore: potenziano Surf e Dive e rendono l'esplorazione subacquea molto più rapida.",
            "source": "GameSpot / Destructoid",
            "verified": false
          },
          {
            "text": "Con i Buoyant Blocks costruisci su più quote: pensa la città sommersa in verticale, non in pianta.",
            "source": "Nintendo (annuncio ufficiale)",
            "verified": true
          },
          {
            "text": "Crafta i Portal Pod (gratis col DLC) e piazzane uno in OGNI regione: 140 stack condivisi accessibili da qualsiasi pod, stile Ender Chest — mai più viaggi per i materiali.",
            "source": "GamesRadar / Destructoid",
            "verified": false
          },
          {
            "text": "Nuova specialità esclusiva Lucidatura (Scrub, es. Sharpedo): raccogli le Grubby Pearl nelle grotte e zone sabbiose e falle pulire — le Shiny Pearl servono per gli edifici del Fondale.",
            "source": "Game8 / VGC",
            "verified": false
          },
          {
            "text": "Seabed Tall Grass è il materiale più riusato dagli habitat del DLC (serve per D1-001, 002 e 008): fanne scorta appena entri.",
            "source": "GAMES.GG / Game8",
            "verified": false
          }
        ]
      }
    ]
  },
  "projects": {
    "_schema": "Progetti di ispirazione per le città: farming, edifici, trasporti, showcase. 'materials': null = lista da completare (screenshot o fonte). 'steps': guida passo-passo quando nota. 'sources': link a guide con screenshot e video YouTube. 'verified': false = da confermare in gioco.",
    "categories": [
      {
        "id": "farming",
        "title": "🌾 Farming & automazione"
      },
      {
        "id": "edifici",
        "title": "🏠 Edifici & energia"
      },
      {
        "id": "trasporti",
        "title": "🚃 Trasporti"
      },
      {
        "id": "ispirazione",
        "title": "🎨 Città & ispirazione"
      }
    ],
    "projects": [
      {
        "id": "honey-farm",
        "name": "Honey Farm automatica (Combee)",
        "category": "farming",
        "description": "Farm di miele a zero sforzo: un quadrato di fiori attira un Combee con specialità Litter che lascia cadere barattoli di miele; un Pokémon Gather li raccoglie per te.",
        "materials": [
          {
            "item": "Fiori selvatici",
            "qty": 4,
            "note": "in quadrato stretto 2×2"
          }
        ],
        "steps": [
          "Pianta esattamente 4 fiori selvatici in un quadrato stretto",
          "Aspetta che l'aiuola attiri un Combee (specialità Litter): mollerà barattoli di miele a terra",
          "Invita nella stessa aiuola un Pokémon con specialità Gather: raccoglie il miele automaticamente",
          "Opzionale: piazza vicino una Community Box per il deposito automatico"
        ],
        "sources": [
          {
            "label": "Nerdschalk — Top 5 automation farm builds (con screenshot)",
            "url": "https://nerdschalk.com/top-5-automation-farm-builds-for-crops-iron-honey-and-more-in-pokemon-pokopia/",
            "type": "guida"
          },
          {
            "label": "GAMES.GG — Best automatic honey farm setups",
            "url": "https://games.gg/pokemon-pokopia/guides/pokemon-pokopia-best-automatic-honey-farm-setups/",
            "type": "guida"
          }
        ],
        "verified": false
      },
      {
        "id": "sprinkler-grid",
        "name": "Griglia sprinkler 3×3 + frutteto di bacche",
        "category": "farming",
        "description": "Il setup colture end-game: gli sprinkler pescano acqua fino a 5 blocchi di distanza e innaffiano a rombo. Griglie 3×3 affiancate + frutteto di bacche a bordo campo.",
        "materials": [
          {
            "item": "Sprinkler",
            "qty": 1,
            "note": "per ogni rombo di terreno arato"
          },
          {
            "item": "Fonte d'acqua",
            "qty": 1,
            "note": "entro 5 blocchi dallo sprinkler"
          }
        ],
        "steps": [
          "Ara un campo e piazza la fonte d'acqua",
          "Posiziona lo sprinkler entro 5 blocchi dall'acqua: copre un'area a rombo",
          "Ripeti in griglia 3×3 per coprire l'intero campo senza buchi",
          "Cintura di alberi di bacche sul perimetro e un Pokémon Grow alloggiato accanto alle colture"
        ],
        "sources": [
          {
            "label": "HAMY — Pokopia endgame setup (layout consigliati)",
            "url": "https://hamy.xyz/blog/2026-03_pokopia-endgame-setup",
            "type": "guida"
          },
          {
            "label": "GAMES.GG — Berry tree & sprinkler automation layouts (con schemi)",
            "url": "https://games.gg/pokemon-pokopia/guides/pokemon-pokopia-berry-tree-sprinkler-crop-automation-layouts/",
            "type": "guida"
          },
          {
            "label": "PokopiaCenter — Farming guide 2026",
            "url": "https://pokopia.center/posts/pokopia-farming-guide-complete-2026/",
            "type": "guida"
          }
        ],
        "verified": false
      },
      {
        "id": "iron-brick-farm",
        "name": "Fattoria automatica di ferro e mattoni",
        "category": "farming",
        "description": "Fonderia semi-automatica: la fornace dentro la casa/habitat di un Pokémon con specialità Burn (Charmander & co.) fonde da sola ogni volta che il Pokémon è a casa.",
        "materials": [
          {
            "item": "Smelting Furnace",
            "qty": 1
          },
          {
            "item": "Iron Ore",
            "qty": 1,
            "note": "da Rocky Ridges o Dream Islands (scorta continua)"
          }
        ],
        "steps": [
          "Costruisci la fornace DENTRO la casa/habitat di un Pokémon con specialità Burn",
          "Riempila di minerale: il Pokémon fonde automaticamente quando è a casa",
          "Puoi ritirare i lingotti pronti anche a lavorazione in corso",
          "Replica lo schema con i mixer e i Pokémon Crush per mattoni e cemento"
        ],
        "sources": [
          {
            "label": "GameRant — How to get and use Iron Ingot",
            "url": "https://gamerant.com/pokemon-pokopia-how-get-iron-ore-ingot-use/",
            "type": "guida"
          },
          {
            "label": "Dexerto — Iron Ore e Iron Ingots",
            "url": "https://www.dexerto.com/wikis/pokopia/how-to-get-iron-ore-and-iron-ingots-in-pokopia/",
            "type": "guida"
          },
          {
            "label": "YouTube — Auto Iron & Brick Farm Guide That Saves Hours",
            "url": "https://www.youtube.com/watch?v=yXmXogmTn5k",
            "type": "video"
          }
        ],
        "verified": false
      },
      {
        "id": "afk-community-box",
        "name": "Farm AFK: Litter → Gather → Community Box",
        "category": "farming",
        "description": "Il loop di raccolta passiva: i Pokémon Litter lasciano cadere oggetti, i Gather li raccolgono e li depositano nella Community Box. Più amici nell'area, più veloce il riempimento.",
        "materials": [
          {
            "item": "Community Box",
            "qty": 1,
            "note": "craftabile; una per area produttiva"
          }
        ],
        "steps": [
          "Crafta e piazza una Community Box nella zona di produzione",
          "Attira/alloggia Pokémon con specialità Litter (producono oggetti a terra)",
          "Aggiungi un Pokémon Gather nella stessa zona: raccoglie e deposita nella box",
          "Le specialità di lavorazione (Burn, Crush, Recycle) possono pescare i materiali direttamente dalla box"
        ],
        "sources": [
          {
            "label": "HAMY — Endgame walkthrough (schema litter→gather→box)",
            "url": "https://hamy.xyz/blog/2026-03_pokopia-endgame-setup",
            "type": "guida"
          },
          {
            "label": "YouTube — Community Box, Gathering & AFK farms",
            "url": "https://www.youtube.com/watch?v=lvMu4UBuO1U",
            "type": "video"
          },
          {
            "label": "TheGamer — Pro tips (4 box collegabili al banco)",
            "url": "https://www.thegamer.com/pokemon-pokopia-pro-tips-tricks/",
            "type": "guida"
          }
        ],
        "verified": false
      },
      {
        "id": "dream-islands-farming",
        "name": "Dream Islands: farming mirato di materiali",
        "category": "farming",
        "description": "Le Dream Island Dolls aprono isole dei sogni dove un singolo tipo di materiale abbonda: il modo migliore per fare scorta di Iron Ore e risorse specifiche in grandi quantità.",
        "materials": [
          {
            "item": "Dream Island Doll",
            "qty": 1,
            "note": "es. Clefairy Doll: trovala e mostrala a Drifloon"
          }
        ],
        "steps": [
          "Trova una Doll (es. Clefairy Doll) esplorando",
          "Mostrala a Drifloon per aprire la Dream Island corrispondente",
          "Farma il materiale abbondante dell'isola e torna quando serve"
        ],
        "sources": [
          {
            "label": "Nintendo Life — Guida hub (sezione Dream Islands)",
            "url": "https://www.nintendolife.com/guides/pokemon-pokopia-walkthrough-all-pokemon-abilities-building-tips-and-tricks",
            "type": "guida"
          },
          {
            "label": "GameRant — Iron Ore su Dream Islands",
            "url": "https://gamerant.com/pokemon-pokopia-how-get-iron-ore-ingot-use/",
            "type": "guida"
          }
        ],
        "verified": false
      },
      {
        "id": "windmill",
        "name": "Mulino a vento (Windmill Kit)",
        "category": "edifici",
        "description": "Generatore eolico: trasforma il vento in tanta energia. Con i pali della luce colleghi la corrente dal mulino agli oggetti da alimentare.",
        "materials": null,
        "steps": [
          "Sblocca il kit progredendo nella storia di Bleak Beach (poi in vendita al PC Shop; capita anche nei Glowing Spots)",
          "Piazza il blueprint e fornisci i materiali richiesti dal kit",
          "Serve almeno un Pokémon con specialità Build (Timburr/Gurdurr) nel cantiere",
          "Collega il mulino agli apparecchi con gli utility poles"
        ],
        "sources": [
          {
            "label": "Game8 — How to get Windmill Kits",
            "url": "https://game8.co/games/Pokemon-Pokopia/archives/591373",
            "type": "guida"
          },
          {
            "label": "Serebii — Windmill kit (scheda con materiali)",
            "url": "https://www.serebii.net/pokemonpokopia/build/windmillkit.shtml",
            "type": "guida"
          },
          {
            "label": "Pokopia Habitats — Windmill, how to build (con screenshot)",
            "url": "https://pokopiahabitats.com/building/windmill",
            "type": "guida"
          }
        ],
        "verified": false
      },
      {
        "id": "building-kits",
        "name": "Building Kits: i 50 kit di costruzione",
        "category": "edifici",
        "description": "I kit sono blueprint prefabbricati (case, edifici pubblici, strutture energetiche, impianti speciali): fornisci materiali e operai Pokémon e la struttura si costruisce da sola in tempo reale. I database linkati hanno la lista materiali di OGNI kit.",
        "materials": null,
        "steps": [
          "Compra i kit al PC Shop (stock a rotazione) o trovali nei Glowing Spots",
          "Piazza il blueprint dove vuoi la struttura",
          "Consegna i materiali richiesti e assegna un Pokémon Build",
          "Attendi la costruzione in tempo reale (edifici grandi ≈ un giorno)"
        ],
        "sources": [
          {
            "label": "Pokopia Guide — All 50 construction kits & materials (liste complete)",
            "url": "https://pokopiaguide.com/habitat/construction-kits",
            "type": "guida"
          },
          {
            "label": "Game8 — List of all Kits",
            "url": "https://game8.co/games/Pokemon-Pokopia/archives/586481",
            "type": "guida"
          },
          {
            "label": "Serebii — Building & kits database",
            "url": "https://www.serebii.net/pokemonpokopia/building.shtml",
            "type": "guida"
          },
          {
            "label": "The Games Wiki — Building Kits guide",
            "url": "https://thegameswiki.com/pokopia/wiki/building-kits-guide",
            "type": "guida"
          }
        ],
        "verified": false
      },
      {
        "id": "house-designs",
        "name": "17+ idee di design per case",
        "category": "edifici",
        "description": "Raccolte fotografiche di case della community: stili giapponesi con lanterne rosse e tegole, cottage, ville — da copiare o remixare.",
        "materials": null,
        "steps": null,
        "sources": [
          {
            "label": "FZINE — 17 Pokopia house design ideas (gallery di screenshot)",
            "url": "https://www.fzine.com/culture/pokopia-house-build-ideas",
            "type": "screenshot"
          },
          {
            "label": "Game8 — How to build houses and structures",
            "url": "https://game8.co/games/Pokemon-Pokopia/archives/584771",
            "type": "guida"
          },
          {
            "label": "Pokopia Guide — Building techniques (tutte le tecniche)",
            "url": "https://pokopiaguide.com/guides/building-techniques",
            "type": "guida"
          }
        ],
        "verified": false
      },
      {
        "id": "beautiful-building",
        "name": "Beautiful Building (Fondale Bolleblub, DLC)",
        "category": "edifici",
        "description": "La Important Request di Popplio nel Fondale Bolleblub: completa i materiali del kit che Popplio ha piazzato e raduna 15 Pokémon aiutanti, alcuni dei quali collaborano solo dopo una richiesta dedicata (es. Totodile sul ponte a nord, dopo qualche gioco al parco e una macchina sparabolle da attivare con la specialità Generate).",
        "materials": [
          {
            "item": "Shiny Pearl",
            "qty": 1,
            "note": "fai pulire le Grubby Pearl (grotte/zone sabbiose) a un Pokémon con Lucidatura/Scrub, es. Sharpedo"
          },
          {
            "item": "Ocean Door",
            "qty": 1,
            "note": "ricetta reperibile in zona"
          },
          {
            "item": "Seashell Fencing",
            "qty": 1,
            "note": "ricetta reperibile in zona"
          }
        ],
        "steps": [
          "Avvia la Important Request 'Build the Beautiful Building' da Popplio",
          "Procurati Shiny Pearl (via Scrub), Ocean Door e Seashell Fencing",
          "Convinci i 15 Pokémon indicati: alcuni richiedono mini-quest dedicate prima di aiutare",
          "Lascia che la squadra costruisca l'edificio"
        ],
        "sources": [
          {
            "label": "Nintendo Life — Beautiful Building & Pokémon Center walkthrough",
            "url": "https://www.nintendolife.com/guides/pokemon-pokopia-bubbly-basin-walkthrough-build-the-beautiful-building",
            "type": "guida"
          },
          {
            "label": "Game8 — Build the Beautiful Building walkthrough",
            "url": "https://game8.co/games/Pokemon-Pokopia/archives/614463",
            "type": "guida"
          }
        ],
        "verified": false
      },
      {
        "id": "basin-generators",
        "name": "Generatori del Fondale: Furnace, Windmill, Waterwheel (DLC)",
        "category": "edifici",
        "description": "I tre kit generatore documentati per il Fondale Bolleblub, cuore del nuovo sistema di elettricità subacquea (alimenta sparabolle e lampioni con i Pokémon elettrici).",
        "materials": [
          {
            "item": "Furnace: Iron Ore",
            "qty": 15,
            "note": "+ 5 Sea Glass Fragments"
          },
          {
            "item": "Windmill: Lumber",
            "qty": 5,
            "note": "+ 5 Twine"
          },
          {
            "item": "Waterwheel: Lumber",
            "qty": 15,
            "note": "+ 5 Rocks"
          }
        ],
        "steps": null,
        "sources": [
          {
            "label": "GameFAQs — Bubbly Basin building kit details (liste materiali)",
            "url": "https://gamefaqs.gamespot.com/switch-2/665508-pokemon-pokopia-bubbly-basin/faqs/82556/building-kit-details",
            "type": "guida"
          },
          {
            "label": "Serebii — Bubbly Basin locations",
            "url": "https://www.serebii.net/pokemonpokopia/locations/bubblybasin.shtml",
            "type": "guida"
          }
        ],
        "verified": false
      },
      {
        "id": "submarine-kit",
        "name": "Submarine Kit — l'edificio di Sharpedo (DLC)",
        "category": "edifici",
        "description": "Il sottomarino/edificio a tema Sharpedo del Fondale Bolleblub: si costruisce con Corphish in una sala con piscina della città sommersa, nell'ambito della storia del Beautiful Building. Corphish dà le informazioni su Sharpedo, Mareanie quelle su Cloyster.",
        "materials": null,
        "steps": null,
        "sources": [
          {
            "label": "GameRant — Help Corphish build the Sharpedo Building",
            "url": "https://gamerant.com/pokopia-sharpedo-building-kit-location/",
            "type": "guida"
          },
          {
            "label": "GamePretty — Bubbly Basin DLC guide (Sharpedo)",
            "url": "https://gamepretty.com/pokemon-pokopia-bubbly-basin-dlc-guide-dive-area-gate-sharpedo-habitat-construction-key-quests-new-pokemon-and-ect/",
            "type": "guida"
          }
        ],
        "verified": false
      },
      {
        "id": "portal-pod",
        "name": "Portal Pod: deposito collegato tra le regioni",
        "category": "trasporti",
        "description": "Lo 'zaino interdimensionale' arrivato gratis col DLC: 140 stack di oggetti accessibili da QUALSIASI Portal Pod, in stile Ender Chest. Quello che depositi in un pod lo ritiri da ogni altro pod, in qualunque regione — la vera soluzione alla logistica dei materiali.",
        "materials": null,
        "steps": [
          "Recupera la ricetta del Portal Pod (vedi guida GamesRadar)",
          "Crafta un pod e piazzane uno in ogni regione in cui lavori",
          "Deposita i materiali in un pod qualsiasi: li ritrovi in tutti gli altri"
        ],
        "sources": [
          {
            "label": "GamesRadar — How to get the Portal Pod recipe",
            "url": "https://www.gamesradar.com/games/pokemon/pokopia-portal-pod-recipe/",
            "type": "guida"
          },
          {
            "label": "TheGamer — Where to get more Portal Pods",
            "url": "https://www.thegamer.com/pokemon-pokopia-bubbly-basin-portal-pod-location-build-use-guide/",
            "type": "guida"
          },
          {
            "label": "Destructoid — How to find and use Portal Pods",
            "url": "https://www.destructoid.com/how-to-find-and-use-portal-pod-in-pokopia/",
            "type": "guida"
          }
        ],
        "verified": false
      },
      {
        "id": "railway-minecart",
        "name": "Ferrovia + carrello (Handcar/Minecart)",
        "category": "trasporti",
        "description": "Il sistema di trasporto su rotaia: binari craftabili e carrelli su cui salgono anche i tuoi Pokémon (fino a 6 a bordo nei video della community!).",
        "materials": [
          {
            "item": "Railway Track",
            "qty": 1,
            "note": "craft al Workbench; scorta nella Poké Ball GIALLA nel tunnel al centro della mappa (serve Cut potenziato per la rete metallica)"
          },
          {
            "item": "Handcar/Minecart",
            "qty": 1,
            "note": "craft al Workbench"
          }
        ],
        "steps": [
          "Sblocca Cut potenziato per superare la rete metallica del tunnel centrale",
          "Recupera le Railway Track nella Poké Ball gialla (o craftale al banco)",
          "Stendi il tracciato tra le zone che vuoi collegare (occhio alle pendenze)",
          "Crafta il carrello, piazzalo sui binari e sali: i Pokémon al seguito salgono con te"
        ],
        "sources": [
          {
            "label": "Game8 — How to get Railway Tracks",
            "url": "https://game8.co/games/Pokemon-Pokopia/archives/587238",
            "type": "guida"
          },
          {
            "label": "YouTube — How to make Minecarts (HandCars)",
            "url": "https://www.youtube.com/watch?v=ljIlLF9-Zj4",
            "type": "video"
          },
          {
            "label": "YouTube — Ride the handcar with your Pokémon friends",
            "url": "https://www.youtube.com/watch?v=BQp52xpJVqY",
            "type": "video"
          },
          {
            "label": "YouTube — Train track + 6 Pokémon in minecart (Rocky Ridges)",
            "url": "https://www.youtube.com/watch?v=QqHt5Vt7hoA",
            "type": "video"
          }
        ],
        "verified": false
      },
      {
        "id": "skyscraper-city",
        "name": "Metropoli: grattacieli e appartamenti",
        "category": "ispirazione",
        "description": "Speed build di una grande città con grattacielo, palazzine di appartamenti e persino un konbini 7/11: habitat urbani in verticale.",
        "materials": null,
        "steps": null,
        "sources": [
          {
            "label": "YouTube — Building a huge city: skyscraper & apartments (speed build)",
            "url": "https://www.youtube.com/watch?v=zTFCEIFJMgU",
            "type": "video"
          },
          {
            "label": "YouTube — Huge city parte 3: 7/11, apartments & more",
            "url": "https://www.youtube.com/watch?v=eG9g1Fwg2ak",
            "type": "video"
          }
        ],
        "verified": false
      },
      {
        "id": "forest-town",
        "name": "Quartiere nel bosco (estetica naturale)",
        "category": "ispirazione",
        "description": "Speed build di un vicinato immerso nella foresta, con materiali naturali e percorsi organici: l'opposto della metropoli, perfetto per le aree verdi.",
        "materials": null,
        "steps": null,
        "sources": [
          {
            "label": "YouTube — Forest town neighborhood, natural aesthetic (speed build)",
            "url": "https://www.youtube.com/watch?v=JHFNYz8NUZc",
            "type": "video"
          }
        ],
        "verified": false
      },
      {
        "id": "community-showcase",
        "name": "Showcase della community: navi pirata, fari, città sotterranee",
        "category": "ispirazione",
        "description": "Le raccolte dei build più spettacolari: palestra di Vermilion City ricreata, nave pirata completa di ancora e vele, faro su isolotto, villaggio sugli alberi con cascate e mulini, ramen shop giapponesi, stazioni ferroviarie e città sotterranee.",
        "materials": null,
        "steps": null,
        "sources": [
          {
            "label": "GameSpot — The best Pokopia builds we've seen (con screenshot)",
            "url": "https://www.gamespot.com/articles/the-best-pokemon-pokopia-builds/1100-6538965/",
            "type": "screenshot"
          },
          {
            "label": "TheGamer — The coolest town designs (con screenshot)",
            "url": "https://www.thegamer.com/pokemon-pokopia-creative-town-builds-community-houses/",
            "type": "screenshot"
          },
          {
            "label": "YouTube — 8 amazing builds: haunted mansions, farms & more",
            "url": "https://www.youtube.com/watch?v=7mnOUEO8WdE",
            "type": "video"
          }
        ],
        "verified": false
      },
      {
        "id": "build-tutorials",
        "name": "Tutorial di costruzione con lista materiali",
        "category": "ispirazione",
        "description": "Playlist e video di tecnica pura: tutorial passo-passo che includono la lista dei materiali di ogni build, più consigli di design generali per migliorare qualsiasi città.",
        "materials": null,
        "steps": null,
        "sources": [
          {
            "label": "YouTube — Playlist 'Build Ideas & Tutorials ✿ Materials List Included'",
            "url": "https://www.youtube.com/playlist?list=PLzTi8sLfTs895h-9Fhlm9xpJUIL-rS_vP",
            "type": "video"
          },
          {
            "label": "YouTube — Design tips & build ideas you should know",
            "url": "https://www.youtube.com/watch?v=qqZ3TNA91AM",
            "type": "video"
          },
          {
            "label": "YouTube — You can design BETTER in Pokopia: easy tips",
            "url": "https://www.youtube.com/watch?v=BSzj9XqFnw0",
            "type": "video"
          }
        ],
        "verified": false
      }
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
      },
      {
        "id": "p6",
        "title": "Fase 6 — Sotto il mare (Fondale Bolleblub, DLC)",
        "goal": "Pass di espansione Parte 1: Surf+Dive, la città sommersa a Environment Level 3 e i 36 habitat subacquei"
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
        "title": "Habitat Dex: scopri i 213 habitat base (+36 col DLC)",
        "detail": "Segui le tracce dei Pokémon, sperimenta combinazioni di materiali e spunta il catalogo nella tab Habitat. Il Fondale Bolleblub aggiunge gli habitat D1-001…D1-036."
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
      },
      {
        "id": "db-01",
        "phase": "p6",
        "area": "bubbly-basin",
        "tags": [
          "quest"
        ],
        "prereqs": [
          "ww-12"
        ],
        "title": "Installa l'update 2.0.0 e il Pass di espansione — Parte 1",
        "detail": "L'aggiornamento gratuito 2.0.0 porta Dive, Surf potenziato e il deposito condiviso; il DLC a pagamento (5 agosto 2026) sblocca il Fondale Bolleblub."
      },
      {
        "id": "db-02",
        "phase": "p6",
        "area": "bleak-beach",
        "tags": [
          "mossa"
        ],
        "prereqs": [
          "db-01",
          "bb-02"
        ],
        "title": "Fai comparire Lapras e impara Surf",
        "detail": "Con la richiesta di Piplup attiva, Lapras compare a Bleak Beach: ripulisci 80 tile di fango e riparlagli per imparare Surf."
      },
      {
        "id": "db-03",
        "phase": "p6",
        "area": "bleak-beach",
        "tags": [
          "mossa"
        ],
        "prereqs": [
          "db-02"
        ],
        "title": "Aiuta Manaphy sull'isola a nord-ovest e impara Dive",
        "detail": "Tangrowth segnala una nuova isola a NORD-OVEST: Manaphy è svenuto sulla spiaggia e chiede 5 Seaweed (abbondanti a Bleak Beach)."
      },
      {
        "id": "db-04",
        "phase": "p6",
        "area": "bleak-beach",
        "tags": [
          "quest"
        ],
        "prereqs": [
          "db-03"
        ],
        "title": "Parla con Popplio davanti al Pokémon Center di Bleak Beach",
        "detail": "Popplio si registra nel Pokédex e indica il cancello sottomarino a OVEST che porta alla città sommersa."
      },
      {
        "id": "db-05",
        "phase": "p6",
        "area": "bubbly-basin",
        "tags": [
          "quest"
        ],
        "prereqs": [
          "db-04"
        ],
        "title": "Apri il cancello sottomarino ed entra nel Fondale Bolleblub",
        "detail": "Immergiti con Dive a ovest di Bleak Beach: benvenuto nella città semi-sommersa del DLC."
      },
      {
        "id": "db-06",
        "phase": "p6",
        "area": "bubbly-basin",
        "tags": [
          "quest"
        ],
        "prereqs": [
          "db-05"
        ],
        "title": "Incontra Corsola e avvia la catena di richieste",
        "detail": "Corsola è il quest giver principale: per prima cosa chiede un Pokémon sparabolle (Mudkip) per far crescere le piante subacquee."
      },
      {
        "id": "db-07",
        "phase": "p6",
        "area": "bubbly-basin",
        "tags": [
          "habitat"
        ],
        "prereqs": [
          "db-06"
        ],
        "title": "Costruisci la Seabed Tall Grass → Mudkip",
        "detail": "L'Erba Alta del Fondale (o l'habitat Fluffy Relaxation) attira Mudkip: le sue bolle curano piante e angurie."
      },
      {
        "id": "db-08",
        "phase": "p6",
        "area": "bubbly-basin",
        "tags": [
          "farm"
        ],
        "prereqs": [
          "db-07"
        ],
        "title": "Coltiva le angurie con Corphish e le bolle di Mudkip",
        "detail": "Parla con Corphish per piantare le angurie, falle curare dalle bolle di Mudkip e guida Corphish sui campi per farle maturare."
      },
      {
        "id": "db-09",
        "phase": "p6",
        "area": "bubbly-basin",
        "tags": [
          "habitat",
          "farm"
        ],
        "prereqs": [
          "db-08"
        ],
        "title": "Crafta la Netting e attira Carvanha",
        "detail": "La Netting si crea con Vine Rope + Twine; con l'habitat Alghe e Rete arriva Carvanha, che taglia le angurie a fette per la cucina."
      },
      {
        "id": "db-10",
        "phase": "p6",
        "area": "bubbly-basin",
        "tags": [
          "build",
          "farm"
        ],
        "prereqs": [
          "db-09"
        ],
        "title": "Sblocca il Frullatore e prepara gli smoothie",
        "detail": "Quest 'Smoothie Making' di Mudkip → Frullatore (2 Pokémetal). Gli smoothie (base 2 fette di anguria) potenziano Surf e Dive."
      },
      {
        "id": "db-11",
        "phase": "p6",
        "area": "bubbly-basin",
        "tags": [
          "habitat"
        ],
        "prereqs": [
          "db-05"
        ],
        "title": "Chimney Rocks Dig Site → Sharpedo",
        "detail": "Recupera Wheelbarrow, Excavation Tools e Traffic Cone nella piazza della città e costruisci il sito di scavo tra i camini rocciosi."
      },
      {
        "id": "db-12",
        "phase": "p6",
        "area": "bubbly-basin",
        "tags": [
          "habitat"
        ],
        "prereqs": [
          "db-05"
        ],
        "title": "Mermaid's Gym → Starmie",
        "detail": "Servono 6 Pedestal e le Poké Ball decorative Great, Heal, Dive e Net: uno degli habitat più elaborati del DLC."
      },
      {
        "id": "db-13",
        "phase": "p6",
        "area": "bubbly-basin",
        "tags": [
          "quest",
          "rank"
        ],
        "prereqs": [
          "db-06"
        ],
        "title": "Porta il Fondale a Environment Level 3",
        "detail": "Nuovi habitat, comfort dei residenti e richieste completate alzano il livello della città sommersa."
      },
      {
        "id": "db-14",
        "phase": "p6",
        "area": "bubbly-basin",
        "tags": [
          "quest"
        ],
        "prereqs": [
          "db-13"
        ],
        "title": "Avvia la richiesta del Sea Temple (Tempio del Mare)",
        "detail": "Il traguardo della storia del DLC: si sblocca con la città a Environment Level 3."
      },
      {
        "id": "db-15",
        "phase": "p6",
        "area": "bubbly-basin",
        "tags": [
          "habitat"
        ],
        "prereqs": [
          "db-05"
        ],
        "title": "Habitat Dex del Fondale: 36 habitat, 50 Pokémon",
        "detail": "Tutti esclusivi dell'area (nessuno spawn incrociato con l'isola): da Totodile a Golisopod, con i Buoyant Blocks per costruire in 3D."
      },
      {
        "id": "db-16",
        "phase": "p6",
        "area": "bubbly-basin",
        "tags": [
          "loot"
        ],
        "prereqs": [
          "db-11"
        ],
        "title": "Lucidatura (Scrub): trasforma le Grubby Pearl in Shiny Pearl",
        "detail": "Raccogli le Grubby Pearl (grotte e zone sabbiose) e dalle a Sharpedo o a un altro Pokémon con la specialità esclusiva Lucidatura: le Shiny Pearl servono per gli edifici del Fondale."
      },
      {
        "id": "db-17",
        "phase": "p6",
        "area": "bubbly-basin",
        "tags": [
          "build",
          "quest"
        ],
        "prereqs": [
          "db-16"
        ],
        "title": "Important Request: 'Build the Beautiful Building'",
        "detail": "Kit di Popplio: Shiny Pearl + Ocean Door + Seashell Fencing, più 15 Pokémon aiutanti (alcuni con mini-quest dedicate, es. Totodile sul ponte a nord e la macchina sparabolle da attivare con Generate)."
      },
      {
        "id": "db-18",
        "phase": "p6",
        "area": "bubbly-basin",
        "tags": [
          "build",
          "quest"
        ],
        "prereqs": [
          "db-06"
        ],
        "title": "Ricostruisci il Pokémon Center del Fondale",
        "detail": "Insieme al Beautiful Building e all'Environment Level è uno degli obiettivi principali della città sommersa."
      },
      {
        "id": "db-19",
        "phase": "p6",
        "area": "bubbly-basin",
        "tags": [
          "economia",
          "build"
        ],
        "prereqs": [
          "db-05"
        ],
        "title": "Crafta i Portal Pod e collega i depositi delle regioni",
        "detail": "140 stack accessibili da qualsiasi pod (stile Ender Chest): piazzane uno in ogni regione in cui lavori e dimentica i viaggi per i materiali."
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
      "bubbly-basin": {
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
