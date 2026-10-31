(quicklaunch)=
# QuickLaunch (snelactiebalk op het overzicht)

**QuickLaunch** is de kleine **snelactiebalk** onderaan het **AAPS**-overzicht, net boven de onderste navigatie. Het is een rij knoppen met één tik die je zelf kunt aanpassen: jij kiest welke acties erin staan en in welke volgorde. Zo is wat je het vaakst doet altijd maar één tik verwijderd op het hoofdscherm.

```{contents} Table of contents
:depth: 2
:local: true
```

![De QuickLaunch-balk op het overzicht](../images/v4/QuickLaunch/quicklaunch_toolbar.png)

---

## De balk gebruiken

De balk staat op het **overzicht**, tussen de grafieken en de onderste navigatie:

![De QuickLaunch-balk op zijn plek op het overzicht](../images/v4/QuickLaunch/quicklaunch_overview.png)

- **Tik** op een pictogram om de actie uit te voeren — precies alsof je die vanuit het normale scherm had geopend (een bolus of behandeling toont eerst nog steeds de gewone bevestiging).
- **Druk lang** op een pictogram om een **tooltip** te zien met de naam van de actie en een korte beschrijving.
- Voeg je **meer knoppen toe dan er passen** op het scherm, dan gaan de extra knoppen naar een **overloopmenu** (de knop **⋮** aan het einde van de balk).
- Elk pictogram houdt de **kleur** van zijn actie (bijv. insuline, koolhydraten, tijdelijk streefdoel), zodat je het meteen herkent.

```{admonition} The toolbar is always there
:class: note
De laatste knop is altijd **Configureer QuickLaunch** (het **⚙️** tandwiel). Deze knop kun je niet verwijderen, zodat je het configuratiescherm altijd direct vanuit de balk kunt openen. Standaard heeft de balk maar twee knoppen — de **Bolus wizard** en dit tandwiel.
```

---

## QuickLaunch configureren

Tik op het **⚙️** tandwiel op de balk (of open **[Configuratie](../SettingUpAaps/ConfigBuilder.md) → … → Configureer QuickLaunch**) om het scherm **Configureer QuickLaunch** te openen (*“Snelactieknoppen op het overzicht aanpassen”*).

![Configureer QuickLaunch — Geselecteerde acties, en daaronder de catalogus met acties om toe te voegen](../images/v4/QuickLaunch/quicklaunch_config.png)

Het scherm heeft twee delen:

- **Geselecteerde acties** (bovenaan) — de knoppen die nu op je balk staan, in de volgorde van de balk.
- Een **catalogus** daaronder — elke actie die je kunt toevoegen, gegroepeerd per categorie. Elke regel in de catalogus heeft een knop **➕** om hem toe te voegen.

### Geselecteerde acties — herschikken, bewerken, verwijderen

Elke geselecteerde actie heeft:

- een **⠿ sleepgreep** — druk en sleep om de knoppen te **herschikken** (de volgorde hier is de volgorde op de balk),
- een knop **−** — **verwijdert** hem van de balk,
- en alleen bij een **Profiel**-snelkoppeling een knop **✏️** om het percentage/de tijdsduur te bewerken (zie [Profiel-snelkoppelingen](#profile-shortcuts)).

Wijzigingen werken **meteen** — er is geen aparte knop *Opslaan*. Een toegevoegde actie komt aan het einde van de balk; herschik hem vanaf daar.

---

## De categorieën van acties

De catalogus groepeert alles wat je kunt toevoegen in de volgende categorieën, in deze volgorde. Categorieën die niets te bieden hebben (je hebt bijv. geen scènes) worden gewoon niet getoond.

### Behandeling

De dagelijkse vensters voor behandelingen en CGM:

- **Insuline** — geef met de hand een bolus.
- **Koolhydraten** — leg koolhydraten vast zonder insuline.
- **Bolus wizard** — open de boluscalculator.
- **Behandeling** — leg insuline en koolhydraten samen vast.
- **CGM** — open je CGM-app (bijv. xDrip).
- **Kalibratie** — kalibreer de CGM-sensor.

### Care Portal

De Careportal-gebeurtenissen en het vastleggen van onderhoud aan apparaten:

- **BG Controle**, **Notitie**, **Sport**, **Vraag**, **Mededeling**,
- **Sensor ingebracht**, **Pomp bat. wissel**, **Infuus wissel**, **Prime/Vul**, **Site rotatie**.

**Prime/Vul** en **Pomp bat. wissel** worden alleen aangeboden als je pomp ze gebruikt. Patchpompen vullen zich bijvoorbeeld en wisselen de batterij in hun eigen activatiestappen, dus deze regels worden voor die pompen niet getoond (net als in het menu **Beheren**).

![De categorie Care Portal in de catalogus](../images/v4/QuickLaunch/quicklaunch_categories_2.png)

Dit zijn dezelfde regels die je anders via de menu's **[Behandelingen](#v4changes-treatments)** en **[Beheren](#v4changes-manage)** bereikt — QuickLaunch zet alleen de regels die jij gebruikt op het overzicht.

### Beheren

De schermen van het menu **[Beheren](#v4changes-manage)**, in dezelfde volgorde, zodat je het scherm dat je het meest gebruikt vanaf de balk kunt openen:

- **Profiel**, **Insuline instellingen** (insulineconfiguraties beheren en activeren — met opzet anders genoemd dan **Insuline**, omdat die knop een bolus geeft), **Tijdelijk streefdoel**, **QuickWizard**, **Scènes**, **Automatisering**, **Voeding**,
- **Bedrijfsmodus** — de loop sluiten of openen, hem pauzeren, of de pomp afkoppelen,
- **Geautoriseerde clients** — alleen op een master of een gekoppelde client.

Deze knoppen openen het scherm; ze starten zelf niets. Wil je een scène of een QuickWizard met één tik starten, voeg die dan toe vanuit de categorie **Scènes** of **Quick Wizard** hieronder.

![De categorie Beheren in de catalogus](../images/v4/QuickLaunch/quicklaunch_categories_manage.png) ![De categorie Beheren, vervolg](../images/v4/QuickLaunch/quicklaunch_categories_manage_2.png)

### Quick Wizard

Elk van je **[QuickWizard](QuickWizards.md)**-voorinstellingen kan als knop worden toegevoegd, zodat een maaltijd die vaak terugkomt maar één tik van het overzicht verwijderd is. De knop draagt de naam van de voorinstelling en toont de hoeveelheid koolhydraten/insuline; als je erop tikt, start de QuickWizard met de gewone bevestiging.

QuickWizards die alleen op het horloge worden getoond, worden niet aangeboden. Een QuickWizard-knop op de balk volgt dezelfde regels als in het menu **Behandelingen**: hij is verborgen buiten zijn [geldige tijdsperiode](#quickwizard_validity) en een korte tijd na gebruik. Hij blijft in de configuratie van je balk staan en komt terug als de QuickWizard weer gebruikt kan worden.

### Scènes

Elke ingeschakelde **[scène](Scenes.md)** kan als knop worden toegevoegd. Als je erop tikt, wordt om bevestiging gevraagd en daarna wordt de scène geactiveerd (dezelfde groep acties die je ook vanuit het scherm Scènes krijgt). Deze categorie verschijnt alleen als je minstens één scène hebt.

De tooltip en de catalogus tonen dezelfde samenvatting als **Beheren → Scènes**, bijvoorbeeld *"3 acties, 2 h → Cooldown"*, waarbij de naam na de pijl de volgende scène is.

### Automatisering

Je **gebruikersactie**-regels van automatisering (de regels die je met de hand start) kunnen als knoppen worden toegevoegd. Als je op een knop tikt, wordt om bevestiging gevraagd en daarna worden de acties van die regel uitgevoerd.

```{admonition} Automation buttons run on the master
:class: note
Automatisering wordt uitgevoerd op de **master**, dus snelkoppelingen voor automatisering worden alleen op de master aangeboden en uitgevoerd. Ze zijn niet beschikbaar op een gekoppelde **[client](../RemoteFeatures/ClientMasterControl.md)**.
```

### Voorinstellingen tijdelijke streefwaarden

Elk van je voorinstellingen voor **[Tijdelijk streefdoel](TempTargets.md)** kan als knop worden toegevoegd (de naam, het streefdoel en de tijdsduur worden getoond, bijvoorbeeld *"Eet Binnenkort — 5,0 mmol/l, 45 min"*). Als je erop tikt, wordt om bevestiging gevraagd en daarna start dat tijdelijke streefdoel.

![De dynamische categorieën — Quick Wizard en Voorinstellingen tijdelijke streefwaarden (Scènes en Automatisering verschijnen als je die hebt)](../images/v4/QuickLaunch/quicklaunch_dynamic.png)

(profile-shortcuts)=
### Profiel

Elk **[profiel](ProfileSwitch-ProfilePercentage.md)** kan worden toegevoegd als **snelkoppeling** die met één tik een **profiel wissel** uitvoert. Anders dan de meeste snelkoppelingen heeft een Profiel-snelkoppeling een eigen **percentage** en **tijdsduur**, die je na het toevoegen instelt met de knop **✏️**:

- **Percentage** (30–250%, in stappen van 5%) — schaalt het profiel als het wordt toegepast. 100% gebruikt het zoals het is.
- **Tijdsduur** (0–10080 min, dat is tot 7 dagen, in stappen van 10 min) — hoe lang de wissel duurt. **0 = Permanent** (tot je opnieuw wisselt).

![Profiel-snelkoppelingen en categorieën van plugins in de catalogus](../images/v4/QuickLaunch/quicklaunch_categories.png)

Zo kun je meerdere knoppen hebben voor **hetzelfde** profiel met een andere sterkte — bijvoorbeeld *“Profiel 100%”* en *“Profiel 70% voor 2 uur”* — en elk ervan met één tik toepassen. (Je kunt hetzelfde profiel meer dan eens toevoegen met andere instellingen.)

### Plugins

![Snelkoppelingen naar plugins in de catalogus](../images/v4/QuickLaunch/quicklaunch_categories_6.png)

Tot slot kan elke **ingeschakelde plugin** met een eigen scherm worden toegevoegd als snelkoppeling om dat scherm direct te openen. Deze zijn gegroepeerd per type plugin — **Pomp**, **BG bron**, **APS**, **Loop**, **Gevoeligheid detectie**, **Vloeiend maken**, **Kalibratie**, **Beperkingen**, **Communicatie** en **Algemeen** — zodat je bijvoorbeeld vanaf het overzicht direct naar het scherm van je pomp of loop kunt gaan.

---

## QuickLaunch en Master/Client

Anders dan de meeste instellingen wordt de **QuickLaunch-balk per apparaat ingesteld** — hij wordt **lokaal opgeslagen en niet gesynchroniseerd** tussen je master en gekoppelde clients, dus elk apparaat houdt zijn eigen knoppen. (Hij *wordt* wel meegenomen in een **back-up/export** van de instellingen, dus een herstel zet hem terug op hetzelfde apparaat.)

Wat elk apparaat op zijn balk kan zetten, hangt nog steeds af van wat het heeft: QuickWizards, scènes, voorinstellingen voor tijdelijke streefdoelen en profielen worden allemaal gesynchroniseerd, dus de catalogus van een client biedt dezelfde items — je kiest ze alleen per apparaat. Een paar details om te weten:

- Knoppen waarvan het doel niet meer bestaat (een verwijderde QuickWizard, scène of voorinstelling, een uitgeschakelde regel) worden **automatisch overgeslagen**.
- Snelkoppelingen voor **Automatisering** worden alleen op de **master** aangeboden en uitgevoerd (automatisering wordt uitgevoerd op de master). Knoppen voor scènes, QuickWizards, tijdelijke streefdoelen en profielen zijn beschikbaar op een client.
- Als je op een client op een knop tikt die op de master moet worden uitgevoerd (een bolus, tijdelijk streefdoel, profiel wissel of scène), dan voert de **master** dit uit en maakt hij de bevestiging. Zie [Master ↔ Client besturing](../RemoteFeatures/ClientMasterControl.md).

---


<!-- =====================================================================
     Screenshots captured from a real master device:
       - quicklaunch_toolbar.png    (cropped close-up of the overview toolbar pill)
       - quicklaunch_overview.png   (full overview showing the toolbar in place)
       - quicklaunch_config.png     (Configure QuickLaunch: Selected actions + Treatment + start of Manage)
       - quicklaunch_dynamic.png    (catalog: Quick Wizard / Scenes / Automation / Temp Target Presets)
       - quicklaunch_categories.png (catalog: Profile shortcuts + plugin categories)
     No QuickLaunch action was actually run (nothing delivered; only scrolled).
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
