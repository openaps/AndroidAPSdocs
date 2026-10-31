(quickwizards)=
# QuickWizards (bolus met één tik)

Een **QuickWizard** is een opgeslagen knop voor een maaltijd of situatie die vaak terugkomt. Je gebruikt hem met één tik. De knop bevat een vaste hoeveelheid **koolhydraten** (en hoe je daarvoor doseert). Zo geef je een bolus — of voer je alleen koolhydraten in — met één tik en een bevestiging. Je hoeft dus niet elke keer de volledige boluscalculator te openen.

```{contents} Table of contents
:depth: 2
:local: true
```

---

## QuickWizards openen

Open het scherm **Beheren** (navigatie onderaan) en kies **QuickWizard** (*“QuickWizard-instellingen beheren”*).

---

## QuickWizards beheren

Je QuickWizards staan in een **carrousel van kaarten waar je doorheen kunt vegen** (elke kaart toont de knoptekst, de koolhydraten en het geldige tijdsbereik). De editor eronder stelt de **gekozen** QuickWizard in. De actiebalk onderaan heeft **➕ toevoegen**, **⧉ dupliceren**, **🗑️ verwijderen** en een **▶**-knop om de gekozen QuickWizard uit te voeren.

![De QuickWizard-editor — modus, koolhydraten, koolhydraten tijdstip en geldig tijdsbereik](../images/v4/QuickWizard/quickwizard_editor.png)

De belangrijkste velden van de editor zijn:

- **Knop tekst** — de tekst die op de knop staat.
- **Koolhydraten** en **Koolhydraten tijdstip** — de hoeveelheid koolhydraten en hoeveel later (of eerder) ze worden ingevoerd.
- **Geldig tijdsbereik** — zie [Geldigheid](#quickwizard_validity).
- **Calculator opties** en **Apparaatkeuze** — zie hieronder.

---

## De drie modi

De keuze bovenaan de editor — **Wizard / Insuline / Koolhydraten** — bepaalt **wat de knop doet** als je erop tikt:

- **Wizard** — voert de volledige **boluscalculator** uit voor de ingestelde koolhydraten. Hij gebruikt je huidige **BG, IOB, COB en trend** (volgens de *Calculator opties* hieronder). Hij geeft de *berekende* bolus en slaat de koolhydraten op. Dit is de klassieke QuickWizard.
- **Insuline** — geeft een **vaste hoeveelheid insuline die je vooraf instelt** — zonder berekening.
- **Koolhydraten** — slaat **alleen de ingestelde koolhydraten** op, **zonder bolus**.

---

## Calculator opties (Wizard-modus)

Bij een knop in **Wizard**-modus kies je welke gegevens de berekening gebruikt:

- **Gebruik BG**, **Gebruik COB**, **Gebruik IOB** (met *Alleen positieve IOB*), **Gebruik trend** (*Alles / Alleen positief / Alleen negatief*), **Gebruik tijdelijk streefdoel**, **Gebruik alarm**.
- **Bolus percentage** — maakt de berekende bolus groter of kleiner.
- **Voeg eCarbs toe** — plant ook vertraagde koolhydraten (eCarbs) in.

![Calculator opties, Bolus percentage en Apparaatkeuze](../images/v4/QuickWizard/quickwizard_options.png)

---

## Geldigheid — wanneer de knop verschijnt

(quickwizard_validity)= Het **Geldig tijdsbereik** (*Van / Tot*) bepaalt **wanneer** een QuickWizard zichtbaar is en gebruikt kan worden. Een knop die bijvoorbeeld op **06:00–10:00** staat, verschijnt alleen 's ochtends. Zo staat een QuickWizard voor het *ontbijt* bij het avondeten niet in de weg op je scherm (en tik je er niet per ongeluk op). Buiten dit tijdsvenster is de knop verborgen in het scherm **Behandelingen** en in de [QuickLaunch-werkbalk](QuickLaunch.md). Een knop in de werkbalk wordt niet verwijderd: hij komt terug als het tijdsvenster weer begint.

Als het geldige tijdsbereik korter is dan 4 uur, is de knop na gebruik ook 30 minuten verborgen. Zo voer je dezelfde maaltijd niet per ongeluk twee keer in.

---

## Waar je hem gebruikt

De schakelaars bij **Apparaatkeuze** bepalen waar elke QuickWizard verschijnt:

- **Weergeven op telefoon** — hij verschijnt in het **scherm [Behandelingen](../Maintenance/V4Changes.md)** (met de berekende dosis direct op de knop). Een QuickWizard die op de telefoon zichtbaar is, kun je ook **als snelknop op het overzicht vastzetten**: open *Configureer QuickLaunch* (het ⚙ op de [QuickLaunch](QuickLaunch.md)-werkbalk) en voeg hem toe uit de categorie **Quick Wizard**.
- **Weergeven op smartwatch** — hij verschijnt op de **QuickWizard-tegel van Wear OS** (veeg naar de tegel in de tegelcarrousel van je horloge en tik op een knop om hem uit te voeren — net als bij de [Scène-tegel](#scenes-from-watch)).

```{admonition} Don't see Device Selection?
:class: note
Het onderdeel **Apparaatkeuze** verschijnt alleen in de editor als de plugin **Wear** aan staat en de instelling **Bediening via smartwatch** aan staat. Zonder deze instelling verschijnt elke QuickWizard gewoon op de telefoon.
```

Op de telefoon staan de QuickWizards bovenaan het onderste scherm **Behandelingen**:

![QuickWizards (bovenaan) in het geopende scherm Behandelingen](../images/v4/QuickWizard/quickwizard_in_treatments.png)

…en als snelknop op het overzicht:

![Een QuickWizard-snelknop op het overzicht](../images/v4/QuickWizard/quickwizard_overview.png)

![De QuickWizard-tegel op een Wear OS-horloge](../images/v4/QuickWizard/quickwizard_watch_tile.png)

Een gekoppelde **client** (**AAPSClient**) kan ook een QuickWizard starten — de **master** berekent en geeft hem (zie [Master ↔ Client besturing](../RemoteFeatures/ClientMasterControl.md)).

Waar je hem ook start: als je op een QuickWizard tikt, zie je altijd eerst een **bevestiging** (de bevestiging van de master, als je hem start vanaf een client of horloge). Pas daarna wordt er iets gegeven.

Een QuickWizard wordt geweigerd als de dosis boven je max bolus ligt, of als de koolhydraten of eCarbs boven je max koolhydraten liggen (bijvoorbeeld nadat je de limiet lager hebt gezet). Als de koolhydraten boven de limiet liggen, is de knop in het scherm **Behandelingen** uitgeschakeld. Pas de QuickWizard of de limiet aan.

---

## Toevoegen en verwijderen

- **➕ Toevoegen** — maak een nieuwe QuickWizard.
- **⧉ Dupliceren** — kopieer er een als beginpunt.
- **🗑️ Verwijderen** — verwijder er een.

Met twee of meer QuickWizards kun je ook hun volgorde in de carrousel veranderen: tik op het pictogram **Herschikken** (⇅) in de bovenste balk, verplaats de middelste kaart met de **◀ / ▶ verplaatsknoppen** en bevestig met **✓**. (De knoppen zien er hetzelfde uit als bij [het herschikken van profielen](ProfileSwitch-ProfilePercentage.md).)

QuickWizards horen bij de gesynchroniseerde configuratie. Ze worden dus gedeeld tussen je master en de gekoppelde clients.

---


<!-- =====================================================================
     Screenshots captured from a real master device:
       - quickwizard_editor.png   (Manage → QuickWizard: carousel, mode, carbs, carb time, valid time range)
       - quickwizard_options.png  (Calculator Options, Bolus percentage, Device Selection)
       - quickwizard_overview.png (the QuickWizard quick-action button on the overview)
       - quickwizard_watch_tile.png (the Wear OS QuickWizard tile)
     No QuickWizard was actually run (no bolus delivered).
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
