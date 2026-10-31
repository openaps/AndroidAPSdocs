# Pompen en canules

## Infusiesets wisselen: insulinereservoirs en canules

De werkwijze hieronder is alleen voor pompen met slang. Ze geldt niet voor patchpompen zoals Omnipod, Medtrum Nano, Accu-Chek Solo enz. Dit wordt soms een "setwissel" genoemd. Een "volledige" setwissel is inclusief het insulinereservoir en de canule, een "gedeeltelijke" setwissel is alleen de canule wisselen.

Patchpompen vullen en ontluchten zichzelf in hun eigen activatiewizard, en hun canule zit al in het lichaam. **AAPS** biedt voor deze pompen geen ontluchten aan: **Prime/Vul** staat niet in het menu **Beheren** en niet in QuickLaunch. Zie de pagina van je pomp in [Compatibele pompen](../Getting-Started/CompatiblePumps.md).

Een ampul/reservoir fysiek wisselen kan niet via **AAPS** en moet direct op de pomp gebeuren. Als dit klaar is, moet je het met de hand vastleggen in **AAPS**.

(pumps-cannulas-changing-reservoir-and-cannula)=
### Handleiding voor het wisselen van zowel het pompreservoir als de canule

1. Koppel de pomp af in **AAPS**: druk op het [loop-pictogram](#AapsScreens-loop-status) op het hoofdscherm en kies **Verbreek verbinding met de pomp** voor 1 uur. Het pictogram verandert in een grijze stekker. Dit betekent dat de pomp is afgekoppeld.

2. Wissel het insulinereservoir fysiek: koppel je pomp fysiek af van je lichaam en wissel het reservoir/de ampul en de canule volgens de instructies van de fabrikant.

3. Vul en ontlucht de slang en de canule: dit kan direct op de pomp. Zorg dat er geen luchtbellen in de slang zitten.

4. Breng de nieuwe canule aan op je lichaam. Als de canule is ingebracht en de naald is verwijderd, zit er nog een kleine luchtruimte in de aangesloten canule. Ook die moet ontlucht worden. Om dit vast te leggen in **AAPS** en de canule te ontluchten: open **Prime/Vul** (in het uitgeklapte statuspaneel op het hoofdscherm, in het menu **Beheren**, of als [QuickLaunch](QuickLaunch.md)-knop) en vink **Markeer een infuuswissel in NS** en/of **Markeer een insuline ampul wissel in NS** aan om de wissel vast te leggen. Druk nu op de standaard hoeveelheid om de canule te ontluchten (meestal rond 0,3 E, maar controleer of deze waarde klopt voor jouw canule) en kies **OK**. Lees de samenvatting en bevestig het ontluchten door op **OK** te tikken.

   ![Prime/Vul in het menu Beheren bij een pomp met slang](../images/v4/Screens/manage_sheet_tube_pump.png)


5. Koppel de pomp weer aan in **AAPS**: druk op het grijze stekker-pictogram en kies **Pomp opnieuw verbinden** om verder te loopen.

### Nuttige informatie over het wisselen van insuline/canule

* Als je een infuuswissel vastlegt, wordt Autosens teruggezet naar 100%. Het zet ook de bijbehorende statuslampjes en leeftijden van canule/insuline op het **AAPS**-hoofdscherm terug.

* Je kunt de standaard hoeveelheden voor het ontluchten instellen/aanpassen in de instellingen voor **Prime/Vul** — typ "prime" in de zoekbalk op het hoofdscherm om ze te openen (zie [Instellingen](../SettingUpAaps/Preferences.md)). Kijk in de bijsluiter in de doos met canules hoeveel eenheden (afhankelijk van de lengte van de naald en van de slang) je nodig hebt om je canule te ontluchten.

* Insuline die met de ontluchtfunctie is gegeven, telt **AAPS** niet mee bij het berekenen van de actieve insuline (IOB). In de [Behandelingen geschiedenis](#aaps-screens-treatments) staat ze als "Prime".

* Insuline die als bolus vanaf de pomp is gegeven terwijl de pomp was afgekoppeld, telt **AAPS** ook niet mee. Heb je toevallig een bolus direct op de pomp gegeven terwijl **AAPS** was afgekoppeld, dan kun je deze insuline na het weer aankoppelen vastleggen (zonder hem als bolus te geven) in het venster **Insuline** (zie [Gegeven insuline vastleggen zonder echt een bolus te geven](#pumps-cannulas-announce-insulin) hieronder).

### Problemen met canule, infusieplaats, slang en/of pomp

Weet je zeker dat je een tijd lang geen insuline hebt gekregen, terwijl **AAPS** dat wel heeft vastgelegd, en weet je precies wanneer het probleem begon (_bijv._ je haalt de canule eruit en ziet dat hij bij het inbrengen geknikt is), dan kun je dit corrigeren in **AAPS**. Weet wel dat de insuline misschien toch is gegeven, maar om een of andere reden langzaam werkt.

```{admonition} Caution - Risk of Hypoglycemia
:class: danger
Verwijder insulinetoediening alleen met UITERSTE voorzichtigheid uit **AAPS**, voor het geval de insuline _toch_ gegeven is, en houd je BG de volgende 24 uur goed in de gaten.
```

Om bolussen en SMB's te verwijderen waarvan je weet dat ze niet zijn gegeven, open je het **menu** (☰), kies je [Behandelingen geschiedenis](#aaps-screens-treatments) en verwijder je op het tabblad **Koolhydraten en bolus** voorzichtig de vastgelegde bolussen vanaf het moment dat het probleem begon. Dit corrigeert de waarde van de "actieve insuline" (IOB), die belangrijk is voor de berekeningen van **AAPS**; als je nu teruggaat naar het hoofdscherm, zie je dat de IOB lager is. Let op: je kunt basale insuline die volgens de berekening van **AAPS** is gegeven niet verwijderen, dus **AAPS** houdt daar nog steeds rekening mee.

Bij minder duidelijke problemen met de insulinetoediening, _bijv._ lekkage, verstopping of insuline die langs de canule terugloopt, waarbij je niet weet wanneer het probleem begon of denkt dat een deel van de insuline wel is gegeven, moet je voorzichtig zijn. Je kunt deze problemen merken doordat je de insuline "ruikt", een natte pleister ziet, hoge glucosewaarden hebt of een alarm krijgt. Omdat je nooit weet hoeveel insuline in je huid is terechtgekomen (die na een tijdje kan gaan werken), is het moeilijk om te bepalen hoeveel insuline je van de huidige waarde van de "actieve insuline" (IOB) moet aftrekken. Eén strategie is om het loopen 5 uur te pauzeren (of de werkingsduur van jouw insuline) nadat je het probleem met de insulinetoediening hebt opgelost, en daarna weer verder te loopen. Zo klopt de IOB als je weer gaat loopen.

(pumps-cannulas-disconnecting)=
## De pomp afkoppelen om te douchen of te sporten

Als je je pomp afkoppelt om te douchen, in bad te gaan, te zwemmen, voor contactsporten of andere activiteiten, moet je **AAPS** laten weten dat er geen insuline wordt gegeven, zodat de IOB juist blijft. Je kunt de pomp afkoppelen met het [loop-pictogram](#AapsScreens-loop-status) op het hoofdscherm: druk erop en kies **Verbreek verbinding met de pomp** met de tijdsduur die je nodig hebt. Duurt de activiteit langer dan gepland, open dan hetzelfde venster opnieuw en kies een nieuwe tijdsduur onder **Verbreek verbinding met de pomp**: de afkoppeling wordt verlengd en de nieuwe tijdsduur begint vanaf nu. Je hoeft de pomp niet eerst weer aan te koppelen.

Je krijgt geen insuline zolang de pomp is afgekoppeld. Koppel de pomp daarom elke twee uur weer aan om de gemiste basaal in te halen. Je kunt dit doen door de pomp aan te sluiten, de gemiste basaal (_bijv._ van de laatste twee uur) als bolus te geven en daarna weer af te koppelen. Dit helpt om een ernstig tekort aan insuline te voorkomen, dat kan leiden tot diabetische ketoacidose (DKA). Als het lastig is om de pomp tijdens de activiteit weer aan te sluiten (de plek van de canule zit bijvoorbeeld onder een wetsuit _enz._), overweeg dan een injectie met een pen. Deze injectie met de hand kun je vastleggen in **AAPS**. Dat hoeft niet op het moment van de injectie (schrijf alleen de tijd van de injectie op), want je kunt de insuline vastleggen en de tijd terugzetten naar het echte tijdstip als je de pomp weer aankoppelt.

(pumps-cannulas-announce-insulin)=
## Gegeven insuline vastleggen zonder echt een bolus te geven

Om insuline vast te leggen die je met de pomp gaf terwijl **AAPS** was afgekoppeld, of met een pen: open het [venster Insuline](#aaps-screens-buttons-insulin) (**Behandelingen** in de onderste navigatie, of een QuickLaunch-knop), vul de hoeveelheid in eenheden in en zet **Bolus wordt alleen geregistreerd** aan. Een rij **Tijd** (ingesteld op **Nu**) laat je dan de echte tijd van de injectie vastleggen: je kunt deze negeren als de injectie net is gegeven. Is de bolus al een tijdje geleden gegeven, gebruik dan **-** om de tijd terug te zetten (_bijv._ -30 min), of open de rij met het pijltje om de precieze datum en tijd te kiezen. **AAPS** houdt dan rekening met de werkingsduur van de insuline en berekent hoeveel insuline er nog in het lichaam actief is.

Als je **AAPS** als verzorger gebruikt, kun je de pomp heel gemakkelijk op afstand afkoppelen (en weer aankoppelen) met een [SMS-commando](../RemoteFeatures/SMSCommands.md), bijvoorbeeld "pump disconnect 120" en "pump connect 120". De tijdsduur voor afkoppelen op afstand is 1–120 min (in dit voorbeeld 120 minuten). Dit is erg handig als je moeilijk bij de **AAPS**-telefoon kunt, bijvoorbeeld als hij in een pompriem zit van een kind dat naar het zwembad rent, of als een tiener hem goed bewaakt (of gebruikt).

## De pomp weer aankoppelen na het sporten

Na een lange afkoppeling (1 - 2 uur) berekent **AAPS** vaak dat je nu een negatieve IOB hebt. Als je de pomp weer aankoppelt, kun je, afhankelijk van je voorkeur, je huidige glucosewaarde, geplande maaltijd of volgende activiteit, kiezen uit:

a) Koppel de pomp gewoon weer aan in **AAPS** (van grijs naar groen, voor gesloten loop) en laat **AAPS** zelf weer insuline geven

_of_

b) Wil je agressiever zijn (je gaat bijvoorbeeld richting een hyperglykemie), dan kun je de [Bolus wizard](#aaps-screens-bolus-wizard) openen en een bolus geven voor nul koolhydraten. Zo geef je de berekende gemiste insuline meteen als bolus.

Welke strategie je kiest, is heel persoonlijk. Je vindt het beste uit wat bij je past door het te proberen.


(Aapsscreens-site-rotation)=
## Site rotatie

**Beheren → Site rotatie** opent het venster Site rotatie in de weergavemodus:

- Met de twee knoppen bovenaan (canule-pictogram en sensor-pictogram) kun je alleen de plekken van de canule tonen, alleen de plekken van de sensor, of beide
- Alle gebeurtenissen voor het wisselen van canule en sensor van de afgelopen 45 dagen zijn beschikbaar.
- Klik op een gebied, of op een regel in de lijst hieronder, om de lijst te filteren op alleen de regels in het gekozen gebied. Het gekozen gebied wordt lichtgroen gemarkeerd.
- Tik op het **potlood**-pictogram naast een regel om de bewerkweergave te openen en de locatie, pijl of notitie aan te passen

![Weergavemodus](../images/SiteRotation/ViewMode.png)

- Het **tandwiel**-pictogram (rechtsboven) opent de instellingen: **Gebruikersprofiel voor plaatsingslocaties** opent een venster waarin je **Man**, **Vrouw** of **Kind** kiest, en met de schakelaars **Plaatsingslocatie pomp beheren** en **Plaatsingslocatie sensor beheren** kies je welke plekken je beheert.

![Instellingen](../images/SiteRotation/Settings.png)

![Venster Gebruikersprofiel voor plaatsingslocaties](../images/SiteRotation/Type.png)

*Let op: deze instelling bepaalt of het venster Site rotatie (bewerkmodus) automatisch opent als er een nieuwe regel wordt gemaakt met de knop "Prime/Vul" of de CGM-knop "Sensor ingebracht"*

- Heb je de canule direct op de pomp gewisseld, open dan de weergavemodus en bewerk de nieuwe regel om de locatie en pijl te kiezen

In de bewerkmodus kies je de locatie, pijl en notitie voor de gekozen regel:

- De regel die je bewerkt, staat onder de afbeeldingen van het lichaam, met het pictogram van het type (canule of sensor)
- Voorkant en achterkant staan naast elkaar: tik op het gebied waar je hem hebt geplaatst
- Als een gebied is gekozen (groen gemarkeerd), zie je in de lijst hieronder alle regels van de afgelopen 45 dagen op deze plek

![Bewerkmodus](../images/SiteRotation/EditMode.png)

- Je kunt een pijl toevoegen (niet verplicht) door op het pijl-pictogram rechts van de regel te tikken: in het venster **Kies pijl** geef je een preciezere plek aan of de richting van de pod

![Positie](../images/SiteRotation/EditModeSub.png)

- Je kunt ook een **Notitie** toevoegen over de gekozen plek
- Tik op het **opslaan**-pictogram (rechtsboven) om de plek vast te leggen

Filteren kan op de afbeelding, of door op een gebeurtenis in de lijst te klikken Om het filter weg te halen, klik je op de afbeelding buiten de gebieden

![Filteren](../images/SiteRotation/Filtering.png)
