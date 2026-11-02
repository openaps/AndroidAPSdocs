# Je gegevens bekijken

## Historie bekijken in AAPS

**AAPS** bewaart je hele geschiedenis (**BG**, behandelingen, basaal, streefwaarden, **Profiel wissel**, …) in een lokale database op de telefoon. Deze database zit niet in de [export van de instellingen](../Maintenance/ExportImportSettings.md). Je kunt hem in **AAPS** zelf bekijken met **Historie bekijken** en het scherm **Statistieken**, die hieronder worden beschreven. Voor overzichten en rapporten over een lange periode upload je je gegevens naar [Nightscout](../SettingUpAaps/Nightscout.md) of [Tidepool](../SettingUpAaps/Tidepool.md).

De geschiedenis van **AAPS** kun je bekijken in **Historie bekijken**: open het **menu** (☰) en kies **Historie bekijken**.

![Historie bekijken](../images/v4/Screens/history_browser.png)

- Tik op de **datumkaart** om de dag te kiezen die je wilt bekijken.
- De grafieken openen uitgezoomd en tonen de **hele gekozen dag**. Knijp met twee vingers om in te zoomen op een deel ervan.
- Gebruik de pijlen **<** en **>** om een dag terug of vooruit te gaan, en **Nu** om terug te gaan naar de huidige dag.
- De grafieken tonen dezelfde gegevens als de grafieken op het hoofdscherm (BG, behandelingen, basaal, IOB, COB, activiteit, afwijkingen...).

(reviewing-statistics)=
## AAPS-statistieken

**AAPS** geeft eenvoudige statistieken om je waarden te volgen.

De meeste waarden zijn gebaseerd op de [aanbevelingen](https://diabetesjournals.org/care/article/46/Supplement_1/S97/148053/6-Glycemic-Targets-Standards-of-Care-in-Diabetes) van de ADA uit 2023.

Om ze te openen, open je het **menu** (☰) en kies je **Statistieken**.

![Menu met Statistieken](../images/Maintenance/statistics.png)

Het scherm **Statistieken** heeft vier tabbladen: **Insuline**, **Tijd binnen bereik (TIR)**, **Glucose** en **Cyclus**. Tik op een tabblad, of veeg naar links of rechts om tussen de tabbladen te wisselen.

(reviewing-tdd)=
### Tabblad Insuline: Totale Dagelijkse Dosis

De kaart **Totale Dagelijkse Dosis** toont één regel per dag voor de vorige dagen (tot een week) waarvoor **AAPS** insulinegegevens heeft, daarna hun **Gemiddelde** en dan **Vandaag** tot nu toe. Direct na het installeren van **AAPS** wordt alleen **Vandaag** getoond. De kolommen zijn:

- **Basaal**: alleen basaal.
- **Bolus**: de som van bolussen en SMB's.
- **TDD Totaal**: de totale dagelijkse dosis insuline (**TDD**), de som van de bolus- en basale insuline die op die dag is toegediend.
- **Koolhydraten**: ingevoerde koolhydraten en eCarbs.

Het deel **TDD** wordt berekend als je de pagina opent. De berekening duurt een paar seconden. Tik op **Herberekenen** om het opnieuw te berekenen.

![Statistieken: het tabblad Insuline met de Totale Dagelijkse Dosis](../images/Maintenance/statistics2.png)

De **TDD** is je bolus- plus basale insuline per dag. Sommige artsen gebruiken - vooral bij mensen die net met een pomp beginnen - een verhouding basaal/bolus van 50:50: de totale basale dosis (**TBB**, de som van je basaalstanden over 24 uur) is dan ongeveer de helft van de TDD. Anderen kiezen liever een TBB van 32% tot 37% van de TDD.

Zoals de meeste vuistregels is ook deze maar beperkt bruikbaar. Jouw diabetes kan anders zijn!

### Tabblad Tijd binnen bereik

Tijd binnen bereik (**TIR**): 70-180 mg/dl of 3,9-10 mmol/l.

**TIR**-informatie is beschikbaar voor 7 en 30 dagen, afhankelijk van hoeveel gegevens er in de **AAPS**-database staan.

Hieronder staan statistieken voor Tijd binnen nauw bereik (TITR), 70-140 mg/dl of 3,9-7,8 mmol/l (het scherm toont dit bereik als 70-141).

**Bespreek je streefwaarden met je endocrinoloog**

Jouw diabetes kan anders zijn. Bespreek alle voorgestelde streefwaarden met je endocrinoloog of je medisch team. If used correctly, AAPS’ statistics can be an effective tool to follow __BG__ trends and monitor progress.

![Statistieken](../images/Maintenance/statistics3.png)

Daaronder toont de kaart **Dexcom TIR** uitgebreide **TIR**-statistieken over 14 dagen.

**SD**: standaarddeviatie, een [maat](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3125941/) voor de schommeling van je BG (hoe hoger, hoe slechter).

HbA1c: een schatting van het geglyceerde hemoglobine, berekend uit het gemiddelde van de CGM-metingen. Dit is een indicatieve waarde. Die kan afwijken van een HbA1c-bloedtest.

![Statistieken](../images/Maintenance/statistics4.png)

(reviewing-statistics-agp)=
### Tabblad Glucose: Ambulant Glucose Profiel (AGP)

Het **Ambulant Glucose Profiel** (**AGP**) laat zien hoe je glucose meestal verloopt over de dag. Kies de periode met de knoppen bovenaan: **Vandaag**, **24u**, **7d**, **30d** of **90d**.

- **De grafiek**: één dag, van middernacht tot middernacht. De lijn is de **Mediaan** (de helft van je metingen op dat uur was lager, de helft was hoger). Daaromheen bevat één band de middelste helft van je metingen (**25–75%**) en een bredere band de meeste metingen (**10–90%**). Een smalle band betekent dat je glucose op dat uur van dag tot dag ongeveer gelijk is. Stippellijnen tonen je **LAAG grens**, 140 mg/dl (7,8 mmol/l) en je **HOOG grens**.
- **Glycemisch overzicht**: de tijd binnen je bereik, binnen het nauwe bereik (70–140 mg/dl of 3,9–7,8 mmol/l), boven je bereik en eronder, daarna je **Gemiddeld** en **Mediaan** glucose. Je bereik is de **LAAG grens** en **HOOG grens** die zijn ingesteld bij [Bereik voor visualisatie](#Preferences-range-for-visualization).
- **eA1c** en **GMI**: twee schattingen van de HbA1c, berekend uit je CGM-metingen. Net als de HbA1c hierboven kunnen ze afwijken van je HbA1c-bloedtesten.
- **SD** (standaarddeviatie) en **CV** (variatiecoëfficiënt): hoeveel je glucose schommelt. Een lagere waarde betekent een stabielere glucose.
- **Dagen**: hoeveel dagen met CGM-gegevens zijn gebruikt.

![Statistieken: het tabblad Glucose met de AGP-grafiek](../images/Maintenance/statistics_agp.png) ![Statistieken: Glycemisch overzicht en glucosewaarden](../images/Maintenance/statistics_agp2.png)

Onder het AGP tekent de kaart **Glucose Pentagon (CGP)** vijf maten van je glucose van de laatste 14 dagen als een vijfhoek. Een kleinere vijfhoek betekent een betere glucoseregeling.

![Statistieken: het Glucose Pentagon](../images/Maintenance/statistics_cgp.png)

### Tabblad Cyclus: TDD-cycluspatroon

**TDD-cycluspatroon** legt je dagelijkse insulinetotalen in cycli van 28 dagen over elkaar, zodat je terugkerende patronen kunt zien. Elke cyclus wordt getekend als een lijn (**Individuele cycli**), samen met hun gemiddelde.

- **Onbewerkte TDD** / **Opgeschoond TDD**: kies de totale dagelijkse dosis zoals toegediend, of de TDD min de insuline voor koolhydraten.
- **Cyclus verschuiving**: verschuift het begin van de cyclus (0 tot 27 dagen).

Er zijn minstens 56 dagen aan gegevens (2 cycli) nodig. Met minder gegevens toont de kaart **Niet genoeg gegevens (minstens 56 dagen nodig voor 2 cycli)**. Het patroon wordt pas berekend als je het tabblad **Cyclus** opent, omdat het de gegevens van 168 dagen leest.

(aaps-screens-treatments)=
## Behandelingen geschiedenis

Open het **menu** (☰) linksboven op het hoofdscherm en kies **Behandelingen geschiedenis**. Hier kun je de geschiedenis van de volgende behandelingen bekijken en wijzigen, elk op een eigen tabblad (veeg over de rij met tabbladen om ze allemaal te zien):

* Koolhydraten en bolus
* [Vertraagde bolus](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
* Tijdelijk basaal
* [Tijdelijk streefdoel](../DailyLifeWithAaps/TempTargets.md)
* [Profiel wissel](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
* Careportal: notities en careportal-invoer
* Bedrijfsmodus: geschiedenis van de loop-status
* Gebruikersinvoer: andere notities die niet naar Nightscout worden gestuurd

Aan het einde van elke regel tonen kleine pictogrammen waar de gegevens vandaan komen of naartoe zijn gestuurd:
* Pictogram **Nightscout** (het Nightscout-logo): de gegevens komen uit Nightscout of zijn in Nightscout opgeslagen
* Pictogram **Pomp**: de gegevens komen uit de pompgeschiedenis (ze zijn door de pomp verwerkt)
* Pictogram **Prullenbak**: de invoer is verwijderd (dit wordt alleen getoond als je verwijderde invoer laat zien met het **oog**-pictogram rechtsboven)

(screens-bolus-carbs)=
### Koolhydraten en bolus

![Koolhydraten & bolus](../images/TreatmentsView1.png)

Op dit tabblad zie je het logboek van bolussen en koolhydraten. Bij elke bolus (regel **1**) staat de resterende IOB van die bolus naast de hoeveelheid insuline. De bolus kan komen van:
* Meal (manually entered through the Insulin, Quick Wizard or Bolus Wizard buttons)
* SMB, als je de SMB-functie gebruikt

De ingevoerde koolhydraten (regel **2**) worden getoond met hun hoeveelheid in grammen.

Als je de [Bolus wizard](#aaps-screens-bolus-wizard) hebt gebruikt om de insulinedosis te berekenen, kun je op de tekst "Calc" in de bolusregel drukken. Dan zie je hoe de bolus is berekend.

Afhankelijk van de gebruikte pomp worden insuline en koolhydraten in één regel getoond, of in meerdere regels: één voor de details van de berekening, één voor de koolhydraten en één voor de bolus zelf.

De Behandelingen geschiedenis kun je gebruiken om verkeerd ingevoerde koolhydraten te corrigeren (_bijv._ als je de koolhydraten te hoog of te laag hebt geschat). Je kunt een bestaande invoer niet bewerken. Volg daarom deze stappen:

1. Controleer en onthoud de huidige COB en IOB op het hoofdscherm.
2. Afhankelijk van de pomp worden koolhydraten samen met insuline in één regel getoond of als aparte invoer (bijv. bij de Dana RS).
3. Verwijder de invoer met de verkeerde hoeveelheid koolhydraten: druk op het prullenbak-pictogram, kies de regels die je wilt verwijderen en druk nog een keer op het prullenbak-pictogram om te bevestigen.
4. Controleer of de koolhydraten echt verwijderd zijn door opnieuw de COB op het hoofdscherm te bekijken.
5. Doe hetzelfde voor IOB als er maar één regel is met koolhydraten en insuline samen.

   → Als de koolhydraten niet zijn verwijderd zoals bedoeld, en je voegt extra koolhydraten toe zoals hier uitgelegd (6.), dan is de COB te hoog. Dat kan leiden tot te veel insuline.

6. Voer de juiste hoeveelheid koolhydraten opnieuw in (**Behandelingen → Koolhydraten** in de navigatie onderaan, of een [QuickLaunch](#quicklaunch)-knop **Koolhydraten**) en zorg dat je de juiste tijd van de gebeurtenis instelt.
7. Als er maar één regel is met koolhydraten en insuline samen, moet je ook de hoeveelheid insuline invoeren. Zorg dat je de juiste tijd van de gebeurtenis instelt en controleer de IOB op het hoofdscherm nadat je de nieuwe invoer hebt bevestigd.

### Tijdelijk basaal

![Tijdelijk basaal](../images/TreatmentsView2.png)

De **tijdelijke basaalstanden** die de loop heeft ingesteld, worden hier getoond. Als een invoer nog invloed heeft op de IOB, staat die informatie naast de basaalstand (regel **1**). Dit kan zijn:
* Positieve IOB als de tijdelijke basaal hoger was dan die in het profiel
* Negatieve IOB bij een tijdelijke basaal van nul (zoals in regel **1**) of als de tijdelijke basaal lager was dan die in het profiel

Deleting the entries only affects your reports in Nightscout and will probably distort your real IOB - it is not recommended.

On the left of a line, a red S means “Suspend”: it happens when basal is not currently delivered. Dit is normaal, bijvoorbeeld tijdens het wisselen van een pod.

### Tijdelijk streefdoel

![Tijdelijk streefdoel](../images/TreatmentsView3.png)

Hier zie je de geschiedenis van tijdelijke streefdoelen.

### Profiel wissel

![Profiel wissel](../images/TreatmentsView4.png)

Hier zie je de geschiedenis van profielwissels. Je kunt bij elke profielwissel meerdere regels zien: regel **1**, opgeslagen in zowel NS als de pompgeschiedenis, is de echte wissel. Regel **2**, opgeslagen in Nightscout maar niet in de pompgeschiedenis, is het verzoek voor een profielwissel door de gebruiker.

Het verwijderen van invoer verandert alleen je rapporten in Nightscout en verandert nooit het huidige profiel.

Met de knop **Dupliceren** in regel **2** kun je een kopie maken van een **Profiel wissel**. Zie [Je AAPS-profiel > Je profielen beheren](#your-aaps-profile-clone-profile-switch) voor meer informatie.

### Careportal

![Careportal](../images/TreatmentsView5.png)

Dit tabblad toont alle notities en careportal-invoer die in Nightscout zijn opgeslagen.

(AapsScreens-running-mode)= (aaps-screens-running-mode)=
### Bedrijfsmodus

![Bedrijfsmodus](../images/TreatmentsView6.png)

This tab shows the history of [loop status](#AapsScreens-loop-status) changes: open, closed, LGS, suspend, disconnect.

### Gebruikersinvoer

![Gebruikersinvoer](../images/screens/treatments_user_entry.png)

Dit tabblad toont de acties in **AAPS** die de gebruiker of een **Automatisering** heeft gedaan (wijzigingen van de loop-modus, profielwissels, behandelingen, export van instellingen...). Deze invoer wordt niet naar Nightscout gestuurd.

------

## Wat is het verschil tussen Nightscout en Tidepool?

Nightscout kan de gegevens van **AAPS** voor je opslaan en heeft veel [rapportages](https://nightscout.github.io/nightscout/reports/).

Tidepool laat je je [gegevens bekijken](https://www.tidepool.org/viewing-your-data) en je kunt ze [eenvoudig delen met je diabetesteam](https://www.tidepool.org/providers/how-it-works#tidepool-data-platform).