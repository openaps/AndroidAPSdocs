# Belangrijkste functies van AAPS

## Loopmodus

De loopstatus wordt op het hoofdscherm getoond met een van de iconen hieronder.

**AAPS** heeft meerdere loopmodi, zoals Closed loop (1), Stop bij laag (LGS - 2) en Open loop (3).

Zie [AAPS-schermen > Het hoofdscherm > Loopstatus](#AapsScreens-loop-status) voor uitleg over het kiezen van de loopmodus en over de andere iconen in de afbeelding (4 tot 6).

![Loop status](../images/Home2020_LoopStatus.png)

(KeyAapsFeatures-OpenLoop)=

### Open loop

**AAPS** beoordeelt steeds alle beschikbare gegevens (IOB, COB, BG...) en doet behandelvoorstellen (tijdelijke basaalstanden) om je therapie zo nodig aan te passen.

De voorstellen worden niet automatisch uitgevoerd (zoals in de gesloten loop). De gebruiker moet de voorstellen zelf in de pomp invoeren (bij een virtuele pomp), of met een knop uitvoeren als **AAPS** met een echte pomp is verbonden.

Als **AAPS** een voorstel heeft, verschijnt er onderaan het hoofdscherm in de navigatie een item **Loop** met een badge. Druk erop om het voorstel ("Accepteer nieuw tijdelijk basaal") te lezen, met de hoeveelheid, de duur en de reden. Druk dan op **Uitvoeren** om het uit te voeren:

![Voorstel in de open loop met de knop Uitvoeren](../images/screens/loop_tab.png)

Een voorstel is maar een paar minuten geldig. Als het ouder is dan ongeveer 9 minuten, of als de loop intussen is onderbroken of de pomp is losgekoppeld, weigert **AAPS** het voorstel en wordt er niets naar de pomp gestuurd (*"Deze suggestie is te oud. Er is niets naar de pomp gestuurd. Wacht op de volgende."*). Wacht op het volgende voorstel.

Deze optie is om te leren hoe **AAPS** werkt, of als je een pomp gebruikt die niet wordt ondersteund. Wat je hier ook kiest, je blijft in de Open loop tot het einde van **[Doel 5](#objectives-objective5)**.

(KeyAapsFeatures-LGS)=

### Stop bij laag (LGS)

In deze modus wordt [maxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over) op nul gezet.

Dit betekent dat **AAPS** de basaal voor je kan verlagen als de bloedglucose daalt. Maar als de bloedglucose stijgt, wordt er niet automatisch gecorrigeerd. Je basaalstanden blijven zoals ze zijn ingesteld in je huidige **Profiel**. Alleen als de IOB negatief is (door een eerdere Stop bij laag) wordt er extra insuline gegeven om de **BG** te verlagen.

Deze modus is beschikbaar vanaf **[Doel 6](#objectives-objective6)**.

Je kunt deze modus zelf kiezen, maar **AAPS** kan er ook zelf naar overschakelen: zolang je bezig bent met **[Doel 6](#objectives-objective6)**, en altijd als het dubbele BG-waarden ziet (zie [BG-waarschuwingsteken](#aaps-screens-bg-warning-sign)).

(KeyAapsFeatures-ClosedLoop)=

### Closed loop

**AAPS** beoordeelt steeds alle beschikbare gegevens (IOB, COB, BG...) en past de behandeling zo nodig automatisch aan (*dus* zonder dat jij iets hoeft te doen) om het ingestelde [streefbereik of de streefwaarde](#profile-glucose-targets) te bereiken (bolus geven, tijdelijke basaalstand, insuline uitzetten om een hypo te voorkomen enz.).

De Closed loop werkt binnen veel veiligheidslimieten, die je zelf kunt instellen.

Closed loop is alleen mogelijk als je bij **[Doel 7](#objectives-objective7)** of hoger bent en een ondersteunde pomp gebruikt.

(autosens)= (Open-APS-features-autosens)=

## Autosens

- Autosens is een algoritme dat kijkt naar afwijkingen in de bloedglucose (positief/negatief/neutraal).
- Op basis van deze afwijkingen, bepaalt het algoritme hoe insulinegevoelig/resistent je bent.
- De oref-implementatie in **OpenAPS** gebruikt een combinatie van 24 en 8 uur aan gegevens. Het systeem gebruikt de periode die het meest gevoelig is.
- Als je voorheen oref1 gebruikte, zul je waarschijnlijk merken dat het systeem minder dynamisch omgaat met veranderingen, als gevolg van het gebruiken van 24 ofwel 8 uur.
- Een canulewissel of een profielwissel zet de Autosens-ratio terug naar 100% (een procentuele profielwissel met een duur zet Autosens niet terug).
- Autosens past je basaal en ISF aan (dus het doet hetzelfde als een profielwissel).
- Als je lange tijd achter elkaar koolhydraten eet, werkt Autosens in die periode minder goed, omdat koolhydraten niet worden meegenomen in de berekening van de **BG**-delta.
- De afwijkingen worden omgezet in een **gevoeligheidsratio** (een percentage): een ratio onder 100% betekent dat AAPS denkt dat je gevoeliger bent voor insuline dan je **Profiel** aanneemt (dus verlaagt het de effectieve basaal en verhoogt het de ISF-waarde), en een ratio boven 100% betekent dat je resistenter bent (dus verhoogt het de basaal en verlaagt het de ISF-waarde).
- Standaard blijft deze ratio tussen 0,7 (70%, gevoeliger) en 1,2 (120%, resistenter), zodat een reeks ongewone gegevens je dosering niet te ver van je **Profiel** kan brengen. Deze grenzen kun je aanpassen in de geavanceerde instellingen van Gevoeligheid detectie.
- Autosens en [Autotune](../AdvancedOptions/Autotune.md) lossen hetzelfde probleem op, maar op een andere tijdschaal: Autosens stuurt je *actuele* dosering van minuut tot minuut een beetje bij op basis van de laatste 8–24 uur, terwijl Autotune je *Profiel* zelf langzaam aanpast op basis van weken aan gegevens. Het is normaal en verwacht dat je beide gebruikt: ze vullen elkaar aan en doen niet hetzelfde werk.

*Een volledige technische uitleg van het Autosens-algoritme vind je in de [Autosens-documentatie van OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).*

(Open-APS-features-super-micro-bolus-smb)=

## Super Micro Bolus (SMB)

**SMB**, de afkorting van **Super micro bolus**, is een functie van OpenAPS uit 2018, onderdeel van het Oref1-algoritme. Anders dan **AMA** gebruikt **SMB** geen tijdelijke basaalstanden om de glucose te regelen, maar vooral **kleine super micro bolussen**. Waar **AMA** 1,0 E insuline extra zou geven met een tijdelijke basaalstand, geeft **SMB** meerdere super micro bolussen in kleine stappen met **tussenpozen van 5 minuten**, bijvoorbeeld 0,4 E, 0,3 E, 0,2 E en 0,1 E. Tegelijk wordt (om veiligheidsredenen) de basaalstand voor een bepaalde tijd op 0 E/u gezet om een overdosis te voorkomen (**'zero-temping'**). Zo kan het systeem de bloedglucose sneller bijsturen dan met de verhoging van de tijdelijke basaalstand bij **AMA**.

Dankzij SMB kan het bij maaltijden met alleen "langzame" koolhydraten genoeg zijn om het systeem de geplande hoeveelheid koolhydraten door te geven en de rest aan **AAPS** over te laten. Dit kan wel leiden tot hogere pieken na de maaltijd (postprandiaal), omdat vooraf bolussen (pre-bolus) niet mogelijk is. Of je kunt, zo nodig met een pre-bolus, een **startbolus** geven die de koolhydraten **maar voor een deel** dekt (bijvoorbeeld 2/3 van de geschatte hoeveelheid), en **SMB** de rest van de insuline laten geven.

![SMBs on the IOB graph](../images/SMBs.png)

SMB's worden in de [IOB-grafiek](#aaps-screens-iob) getoond als blauwe driehoekjes. [Houd](#aaps-screens-graph-press-and-hold) de grafiek op een driehoekje ingedrukt om te zien hoeveel insuline er is gegeven, of gebruik de [Behandelingen geschiedenis](#aaps-screens-treatments).

De functies van **SMB** hebben een aantal veiligheidsmechanismen:

1. **Grootste enkele SMB-dosis**  
  De grootste enkele SMB-dosis kan alleen de kleinste waarde zijn van:
  
        * de waarde die hoort bij de huidige basaalstand (zoals aangepast door Autosens) voor de duur die is ingesteld bij "Aantal minuten basale insuline waarop SMB’s worden begrensd", bijvoorbeeld de basale hoeveelheid voor de komende 30 minuten, of
        * de helft van de insuline die op dit moment nodig is, of
        * het resterende deel van je maxIOB-waarde in de instellingen.
      

2. **Lage tijdelijke basaalstanden**  
  Lage tijdelijke basaalstanden ('low temps') of tijdelijke basaalstanden van 0 E/u ('zero-temps') worden bij **SMB** vaker gebruikt. Dit is zo bedoeld om veiligheidsredenen en heeft geen nadelige gevolgen als het **Profiel** goed is ingesteld. In de hoofdgrafiek zegt de IOB-curve (dunne gele lijn) meer dan het verloop van de tijdelijke basaalstanden.

3. **Onaangekondigde maaltijden**  
  Extra berekeningen om het verloop van de glucose te voorspellen, bijvoorbeeld door **UAM** (un-announced meals, onaangekondigde maaltijden). Ook zonder dat je zelf koolhydraten invoert, kan **UAM** automatisch een flinke stijging van de glucose door maaltijden, adrenaline of andere oorzaken herkennen en die proberen bij te sturen met **SMB**. Andersom werkt dit ook: om veilig te kunnen werken zal het systeem eerder stoppen met het geven van SMB als het merkt dat jouw glucosewaarde plotseling daalt. Daarom moet je UAM altijd ingeschakeld hebben wanneer je SMB gebruikt.

SMB beslist niet zelf dat er insuline nodig is. Het gebruikt dezelfde gecombineerde BG-voorspellingen (eventual BG, zero-temp, COB, UAM) die worden beschreven in [hoe AAPS voorspellingen omzet in een doseerbeslissing](#aaps-screens-how-predictions-become-a-dosing-decision). SMB en zero-temping zijn gewoon de twee middelen die AAPS gebruikt om die beslissing uit te voeren.

**Je moet met [doel 9](#objectives-objective9) begonnen zijn om SMB te gebruiken.**

Zie ook de [oref1/SMB-documentatie van OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb) voor de volledige technische uitleg, of [Tims uitleg over SMB](https://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/), geschreven voor de community.

De instellingen voor OpenAPS SMB staan hieronder beschreven.

(Open-APS-features-max-u-h-a-temp-basal-can-be-set-to)=

### Maximale basaalstand

Deze veiligheidsinstelling bepaalt de maximale tijdelijke basaalstand die je insulinepomp mag geven. Het wordt ook **max-basal** genoemd.

Dit getal wordt weergegeven in eenheden per uur (E/u). Stel dit in op een verstandige waarde. Een goede aanbeveling voor deze instelling is:

**MAX-BASAL = HOOGSTE BASAALSTAND x 4**

Als de hoogste basaalstand in je profiel bijvoorbeeld 0,5 E/u is, kun je dat vermenigvuldigen met 4. Je krijgt dan een waarde van 2 E/u.

**AAPS** beperkt deze waarde met een 'harde limiet' volgens [Instellingen > Veiligheid > Leeftijd patiënt](#preferences-patient-type). De harde limieten zijn:

- Kind: 2
- Tiener: 5
- Volwassene: 10
- Insuline-resistente volwassene: 12
- Zwangere: 25

*Zie ook het [overzicht van harde limieten](#Open-APS-features-overview-of-hard-coded-limits).*

(Open-APS-features-maximum-total-iob-openaps-cant-go-over)=

### Max IOB for SMB

Deze waarde bepaalt de maximale **Insulin on Board** (IOB van basaal en bolus) waar **AAPS** onder blijft in de gesloten loop. Deze waarde wordt ook **maxIOB** genoemd.

Als de huidige IOB (bijvoorbeeld na een maaltijd bolus) hoger is dan de door jou ingestelde waarde voor max-IOB, stopt het systeem met insuline geven totdat de IOB onder deze waarde zakt.

Een goede startwaarde voor deze instelling is:

      max-IOB = gemiddelde maaltijdbolus + 3x jouw hoogste basaalstand
    

Wees voorzichtig en geduldig als je je **max-IOB** aanpast. Dit is voor iedereen anders en kan ook afhangen van je gemiddelde totale dagdosis (TDD).

**AAPS** beperkt deze waarde met een 'harde limiet' volgens [Instellingen > Veiligheid > Leeftijd patiënt](#preferences-patient-type). De harde limieten zijn:

- Kind: 7
- Tiener: 13
- Volwassene: 22
- Insuline-resistente volwassene: 30
- Zwangere: 70

*Zie ook het [overzicht van harde limieten](#Open-APS-features-overview-of-hard-coded-limits).*

Let op: met **SMB** wordt de **max-IOB** anders berekend dan bij AMA. Bij **AMA** is maxIOB een veiligheidsinstelling voor de basale **IOB**, bij SMB telt ook de bolus-IOB mee.

### Gebruik dynamische gevoeligheid

Dit is de functie [DynamicISF](../DailyLifeWithAaps/DynamicISF.md). Als deze aan staat, komen er nieuwe instellingen beschikbaar. De instellingen worden uitgelegd op de pagina [DynamicISF](#dyn-isf-preferences).

### Gebruik Autosens

Dit is de functie [Autosens](#Open-APS-features-autosens). Met DynamicISF kun je Autosens niet gebruiken, omdat het twee verschillende algoritmes zijn die dezelfde waarde (gevoeligheid) aanpassen.

Autosens kijkt naar afwijkingen in de bloedglucose (positief/negatief/neutraal). Op basis van deze afwijkingen kijkt AAPS of je gevoeliger (of, juist ongevoeliger) bent voor insuline, en zal vervolgens jouw basaalstanden en ISF aanpassen.

Als deze aan staat, komen er nieuwe instellingen beschikbaar.

#### Gevoeligheid verhoogt streefdoel

Als deze optie aan staat, kan de gevoeligheidsdetectie (Autosens) het streefdoel verhogen als er gevoeligheid wordt gezien (onder 100%). Je streefdoel wordt dan verhoogd met het percentage van de gemeten gevoeligheid.

Als het streefdoel is aangepast door de gevoeligheidsdetectie, wordt het op je hoofdscherm met een groene achtergrond getoond.

![Streefdoel gewijzigd door autosens](../images/Home2020_DynamicTargetAdjustment.png)

Deze instelling is beschikbaar als "Gebruik dynamische gevoeligheid" of "Gebruik Autosens" aan staat.

#### Resistentie verlaagt streefdoel

Als deze optie aan staat, kan de gevoeligheidsdetectie (Autosens) het streefdoel verlagen als er resistentie wordt gezien (boven 100%). Je streefdoel wordt dan verlaagd met het percentage van de gemeten resistentie.

Deze instelling is beschikbaar als "Gebruik dynamische gevoeligheid" of "Gebruik Autosens" aan staat.

### SMB toestaan

Zet dit aan om SMB te gebruiken. Als dit uit staat, worden er geen **SMB's** gegeven.

Als deze aan staat, komen er nieuwe instellingen beschikbaar.

(Open-APS-features-enable-smb-with-high-temp-targets)=

#### SMB toestaan bij hoog tijdelijk streefdoel

Als deze instelling aan staat, worden **SMB's** nog steeds gegeven, ook als de gebruiker een hoog **Tijdelijk streefdoel** heeft gekozen (dat is 100 mg/dl of 5,6 mmol/l en hoger, los van het streefdoel in het **Profiel**). Wees voorzichtig als je dit aanzet: **SMB's** kunnen te agressief worden als je instellingen niet goed zijn afgesteld of als je **Profiel** vaak verandert (bijvoorbeeld bij kinderen).

Als deze instelling uit staat, zet een hoog **Tijdelijk streefdoel** de **SMB's** uit. Als deze optie bijvoorbeeld uit staat, kun je **SMB's** uitschakelen met een **Tijdelijk streefdoel** van 100 mg/dl of 5,6 mmol/l en hoger. Deze optie schakelt **SMB's** ook uit, welke andere voorwaarde SMB ook probeert aan te zetten. Uitzondering is een laag **Tijdelijk streefdoel** zoals **Eet Binnenkort** (of elk **Tijdelijk streefdoel** van 98 mg/dl of 5,4 mmol/l en lager): dan kunnen nog wel **SMB's** gegeven worden om de **BG** naar het streefdoel te brengen.

Deze instelling zet **SMB** niet zelf aan. Met een hoog tijdelijk streefdoel wordt **SMB** alleen gegeven als een van de andere instellingen hieronder (bijvoorbeeld **SMB altijd toestaan** of **SMB toestaan bij COB**) het ook toestaat.

(Open-APS-features-enable-smb-always)=

#### SMB altijd toestaan

Als deze instelling aan staat, is SMB altijd actief (los van COB, tijdelijke streefdoelen of bolussen). Als deze instelling aan staat, hebben de andere SMB-instellingen hieronder geen effect. Maar als **SMB toestaan bij hoog tijdelijk streefdoel** uit staat en er een hoog tijdelijk streefdoel is ingesteld, worden SMB's uitgeschakeld.

Deze instelling is alleen beschikbaar als **AAPS** ziet dat je een [betrouwbare BG-bron](#GettingStarted-TrustedBGSource) met geavanceerde filtering gebruikt. FreeStyle Libre 1 geldt niet als betrouwbare bron, omdat bij een sensorfout oude BG-waarden eindeloos herhaald kunnen worden.

Door ruis in de gegevens kan **AAPS** denken dat de BG heel snel stijgt, en dan onnodige SMB's geven. Meer informatie over ruis en het vloeiend maken van gegevens vind je [hier](../CompatibleCgms/SmoothingBloodGlucoseData.md).

#### SMB toestaan bij COB

Als deze instelling aan staat, is SMB actief als de COB groter is dan 0.

Deze instelling is niet zichtbaar als "SMB altijd toestaan" aan staat.

#### SMB toestaan bij laag tijdelijk streefdoel

Als deze instelling aan staat, is SMB actief als er een tijdelijk streefdoel is ingesteld (eet binnenkort, activiteit, hypo, aangepast). Als deze instelling aan staat, maar **SMB toestaan bij hoog tijdelijk streefdoel** uit staat, is SMB actief bij een laag tijdelijk streefdoel (98 mg/dl of 5,4 mmol/l en lager), maar uitgeschakeld bij een hoog tijdelijk streefdoel.

Deze instelling is niet zichtbaar als "SMB altijd toestaan" aan staat.

#### SMB toestaan na koolhydraten

Als dit aan staat, is SMB actief tot 6 uur nadat koolhydraten zijn ingevoerd, ook als de COB al 0 is.

Om veiligheidsredenen is deze instelling alleen beschikbaar als **AAPS** ziet dat je een betrouwbare BG-bron gebruikt. Ze is niet zichtbaar als "SMB altijd toestaan" aan staat.

Deze instelling is alleen beschikbaar als **AAPS** ziet dat je een [betrouwbare BG-bron](#GettingStarted-TrustedBGSource) met geavanceerde filtering gebruikt. FreeStyle Libre 1 geldt niet als betrouwbare bron, omdat bij een sensorfout oude BG-waarden eindeloos herhaald kunnen worden.

Door ruis in de gegevens kan **AAPS** denken dat de BG heel snel stijgt, en dan onnodige SMB's geven. Meer informatie over ruis en het vloeiend maken van gegevens vind je [hier](../CompatibleCgms/SmoothingBloodGlucoseData.md).  
Deze instelling is niet zichtbaar als "SMB altijd toestaan" aan staat.

#### SMB interval

Deze functie beperkt hoe vaak SMB's gegeven worden. Deze waarde bepaalt de minimale tijd tussen twee SMB's. Let op: de loop draait elke keer dat er een glucosewaarde binnenkomt (meestal elke 5 minuten). Subtract 2 minutes to give loop additional time to complete. Wil je bijvoorbeeld dat er bij elke loop-ronde een SMB gegeven kan worden, stel dit dan in op 3 minuten.

Standaardwaarde: 3 min.

(Open-APS-features-max-minutes-of-basal-to-limit-smb-to)=

#### Aantal minuten basale insuline waarop SMB’s worden begrensd

Dit is een belangrijke veiligheidsinstelling. Deze waarde bepaalt hoeveel SMB kan worden gegeven op basis van de hoeveelheid basale insuline binnen een bepaalde tijd, wanneer het gedekt is door COBs.

Hoe groter deze waarde, hoe agressiever SMB kan zijn. Begin met de standaardwaarde van 30 minuten. Verhoog de waarde na enige ervaring in stappen van 15 minuten en kijk wat het effect is bij meerdere maaltijden.

We raden aan de waarde niet hoger dan 90 minuten te zetten. Anders kan het algoritme een dalende BG misschien niet meer opvangen met een basaal van 0 E/u ('zero-temp'). Stel ook alarmen in, vooral als je nieuwe instellingen nog aan het testen bent, zodat je ruim voor een hypo gewaarschuwd wordt.

Standaardwaarde: 30 min.

#### Aantal minuten basale insuline waarop SMB’s worden begrensd bij UAM

Met deze instelling kun je de sterkte van SMB aanpassen tijdens UAM, als er geen koolhydraten meer zijn.

Standaardwaarde: hetzelfde als **Aantal minuten basale insuline waarop SMB’s worden begrensd**.

This setting is only visible if "Enable SMB" and "Enable UAM" are switched on.

(enable-uam)=

### Activeer UAM

Als deze optie is ingeschakeld, herkent het SMB-algoritme onaangekondigde maaltijden (UnAnnounced Meals). Dit helpt als je vergeet je koolhydraten aan **AAPS** door te geven, als je koolhydraten verkeerd schat en de ingevoerde hoeveelheid niet klopt, of als een maaltijd met veel vet en eiwit langer duurt dan verwacht. Zonder ingevoerde koolhydraten kan UAM een snelle glucosestijging door koolhydraten, adrenaline enz. herkennen en die proberen bij te sturen met SMB's. Dit werkt ook andersom: bij een snelle daling van de glucose kan het SMB's eerder stoppen.

**Daarom moet UAM altijd aan staan als je SMB gebruikt.**

(key-aaps-features-minimal-carbs-required-for-suggestion)=

### Minimum benodigde koolhydraten

Minimaal aantal gram koolhydraten om een melding met koolhydratenadvies te tonen. Als het algoritme ziet dat er koolhydraten nodig zijn, stelt het voor om extra koolhydraten te eten. Je krijgt dan een melding die je 5, 15 of 30 minuten kunt uitstellen (snoozen).

Meldingen 'koolhydraten nodig' kunnen naar Nightscout worden gestuurd als je dat wilt. Dan wordt er een mededeling getoond en verstuurd.

De benodigde koolhydraten worden in elk geval getoond in het COB-gedeelte op je hoofdscherm.

![Benodigde koolhydraten tonen op het hoofdscherm](../images/main/main_screen_carbs_required.png)

### Geavanceerde instellingen

Voor alle instellingen (ook die hier niet worden besproken), zie de [documentatie van OpenAPS over voorkeuren en veiligheidsinstellingen](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).

**Always use short average delta instead of simple delta** If you enable this feature, **AAPS** uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. Zo werkt **AAPS** stabieler met gegevensbronnen met veel ruis, zoals xDrip en Libre.

**Maximum op basis van profiel** Dit is een belangrijke veiligheidslimiet. De standaardinstelling (die je waarschijnlijk niet zult hoeven aanpassen) is 3. Dit betekent dat **AAPS** nooit een tijdelijke basaalstand mag instellen die hoger is dan 3x de hoogste basaalstand per uur in de pomp en/of het profiel van de gebruiker. Voorbeeld: als je hoogste basaalstand 1,0 E/u is en deze factor 3 is, dan kan **AAPS** een tijdelijke basaalstand van maximaal 3,0 E/u instellen (= 3 x 1,0 E/u).

Standaardwaarde: 3 (verander dit alleen als het echt nodig is en je weet wat je doet)

**Maximum op basis van actuele basaal** Dit is nog een belangrijke veiligheidslimiet. De standaardinstelling (die je waarschijnlijk ook niet hoeft aan te passen) is 4. Dit betekent dat **AAPS** nooit een tijdelijke basaalstand mag instellen die hoger is dan 4x de huidige basaalstand per uur in de pomp en/of het profiel van de gebruiker.

Standaardwaarde: 4 (verander dit alleen als het echt nodig is en je weet wat je doet)

* * *

(Open-APS-features-auto-isf)=

## Auto ISF

**Auto ISF** is een **experimenteel** algoritme voor gevorderde gebruikers. Het is gebaseerd op OpenAPS SMB en voegt regels toe die de insulinegevoeligheidsfactor (ISF) sterker of zwakker maken, afhankelijk van hoe je glucose zich gedraagt.

Het is een ontwikkelfunctie: je kunt het alleen aanzetten in een [dev-build](../AdvancedOptions/DevBranch.md) met **Engineering modus** aan. In een gewone release-build blijft het altijd uit en wordt het daarom niet getoond in **Configuratie → APS**. Het afronden van de [Doelen](../SettingUpAaps/CompletingTheObjectives.md) maakt het niet beschikbaar.

Als je het hebt gekozen, bevatten de **Instellingen** de instellingen van OpenAPS SMB plus een groep **AutoISF instellingen**:

- **AutoISF Inschakelen**: zet de ISF-aanpassingen aan. Zonder deze instelling werkt het algoritme zoals OpenAPS SMB.
- **AutoISF min** en **AutoISF max**: hoe zwak en hoe sterk de ISF mag worden, op dezelfde manier als de grenzen van Autosens. Met de standaardwaarde 1,0 staat het effect uit.
- **Wegingsfactoren**: elke factor stuurt één regel aan, en de standaardwaarde 0,0 zet de regel uit. 
  - als de glucose **sneller stijgt**, wordt de ISF sterker (meer insuline);
  - als de glucose **afremt**, wordt de ISF zwakker (minder insuline);
  - als de glucose **onder het streefdoel** is, wordt de ISF zwakker;
  - als de glucose **boven het streefdoel** is, wordt de ISF sterker;
  - een factor voor **na de maaltijd** en een factor voor de **duur** werken na maaltijden en als de glucose lang hoog blijft.
- **SMB-toedieningsratio** (met een minimum, een maximum en een BG-bereik): welk deel van de benodigde insuline als SMB gegeven mag worden.
- **SMB max range extension**: by what factor the usual SMB size limit ([max minutes of basal](#Open-APS-features-max-minutes-of-basal-to-limit-smb-to), 30 minutes by default) may be exceeded. De standaardwaarde 1 verandert niets; tot 5 is mogelijk. Verhoog deze experimentele waarde langzaam en voorzichtig.
- **IOB drempelpercentage**: het percentage van de max IOB waarboven SMB's worden uitgeschakeld.

    {admonition} Alleen voor ervaren gebruikers
    :class: danger
    Met de standaardwaarden verandert Auto ISF niets. Elke waarde die je verhoogt, maakt **AAPS** agressiever. Verander één waarde tegelijk, in kleine stappen, en kijk een aantal dagen naar het resultaat. Wees heel voorzichtig met een **AutoISF max** boven 2,5.

(Open-APS-features-advanced-meal-assist-ama)=

## Advanced Meal Assist (AMA)

AMA, de afkorting van "advanced meal assist", is een functie van OpenAPS uit 2017 (oref0). Met OpenAPS Advanced Meal Assist (AMA) kan het systeem na een maaltijdbolus sneller een hoge tijdelijke basaalstand geven, als je je koolhydraten betrouwbaar invoert.

Meer informatie vind je in de [OpenAPS-documentatie](https://newer-docs.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

### Maximale basaalstand (OpenAPS "max-basal")

Deze veiligheidsinstelling zorgt dat **AAPS** nooit een gevaarlijk hoge basaalstand kan geven en beperkt de tijdelijke basaalstand tot x E/u. Stel dit in op een verstandige waarde. Een goede aanbeveling is om de hoogste basaalstand van jouw profiel te vermenigvuldigen met 4, of ten minste met 3. Bijvoorbeeld, als de hoogste basaalstand in jouw profiel 1,0 E/u is dan kun je dat vermenigvuldigen met 4. Je krijgt dan een waarde van 4 E/u, dus stel je "4" in bij deze veiligheidsinstelling.

Je kunt niet elke waarde kiezen: om veiligheidsredenen is er een 'harde limiet', die afhangt van de leeftijd van de patiënt. De 'harde limiet' voor max-IOB is lager bij AMA dan bij SMB. Voor kinderen is deze waarde het laagst, voor insuline-resistente volwassenen het hoogst.

De vaste parameters in **AAPS** zijn:

- Kind: 2
- Tiener: 5
- Volwassene: 10
- Insuline-resistente volwassene: 12
- Zwangere: 25

*Zie ook het [overzicht van harde limieten](#Open-APS-features-overview-of-hard-coded-limits).*

### Max IOB for AMA

This parameter limits the maximum of basal IOB where **AAPS** still works. Als de IOB hoger is, wordt er geen extra basale insuline meer gegeven totdat de waarde van basaal IOB weer onder de limiet ligt.

The default value is 2, but you should raise this parameter slowly to see how much it affects you and which value fits best. It is different for everyone and also depends on the average total daily dose (TDD). For safety reason, there is a limit, which depends on the patient age. De 'harde limiet' voor max-IOB is lager bij AMA dan bij SMB.

- Kind: 3
- Tiener: 5
- Volwassene: 7
- Insuline-resistente volwassene: 12
- Zwangere: 25

*Zie ook het [overzicht van harde limieten](#Open-APS-features-overview-of-hard-coded-limits).*

### Gebruik Autosens (AMA)

Hier kies je of je de [gevoeligheidsdetectie](../DailyLifeWithAaps/SensitivityDetectionAndCob.md) Autosens wilt gebruiken of niet.

### Autosens past doelen aan

Als deze optie aan staat, kan Autosens ook de streefdoelen aanpassen (naast basaal en ISF). Zo werkt **AAPS** meer of minder 'agressief'. Jouw streefdoel kan hierdoor wellicht sneller bereikt worden.

### Geavanceerde instellingen

- Normaal hoef je de instellingen in dit scherm niet te veranderen!
- Wil je ze toch veranderen, zorg dan dat je begrijpt wat je doet. Zie alle instellingen in de [documentatie van OpenAPS over voorkeuren en veiligheidsinstellingen](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).

**Always use short average delta instead of simple delta** If you enable this feature, **AAPS** uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. Zo werkt **AAPS** stabieler met gegevensbronnen met veel ruis, zoals xDrip en Libre.

**Maximum op basis van profiel** Dit is een belangrijke veiligheidslimiet. De standaardinstelling (die je waarschijnlijk niet zult hoeven aanpassen) is 3. Dit betekent dat **AAPS** nooit een tijdelijke basaalstand mag instellen die hoger is dan 3x de hoogste basaalstand per uur in de pomp van de gebruiker. Voorbeeld: als je hoogste basaalstand 1,0 E/u is en deze factor 3 is, dan kan **AAPS** een tijdelijke basaalstand van maximaal 3,0 E/u instellen (= 3 x 1,0 E/u).

Standaardwaarde: 3 (verander dit alleen als het echt nodig is en je weet wat je doet)

**Maximum op basis van actuele basaal** Dit is nog een belangrijke veiligheidslimiet. De standaardinstelling (die je waarschijnlijk ook niet hoeft aan te passen) is 4. Dit betekent dat **AAPS** nooit een tijdelijke basaalstand mag instellen die hoger is dan 4x de huidige basaalstand per uur in de pomp van de gebruiker.

Standaardwaarde: 4 (verander dit alleen als het echt nodig is en je weet wat je doet)

**DIA-deler voor bolus-snooze** De functie “bolus snooze” werkt na een maaltijdbolus. **AAPS** zet na een maaltijd geen lage tijdelijke basaalstanden gedurende de DIA gedeeld door de “bolus snooze”-parameter. De standaardwaarde is 2. Bij een DIA van 5 uur duurt de “bolus snooze” dus 5 uur : 2 = 2,5 uur.

Standaardwaarde: 2

* * *

(Open-APS-features-overview-of-hard-coded-limits)=

## Overzicht van harde limieten

|            | Kind | Tiener | Volwassene | Insuline-resistente volwassene | Zwangere |
| ---------- | ---- | ------ | ---------- | ------------------------------ | -------- |
| MAXBOLUS   | 5    | 10     | 17         | 25                             | 60       |
| MINDIA     | 5    | 5      | 5          | 5                              | 5        |
| MAXDIA     | 9    | 9      | 9          | 9                              | 10       |
| MINIC      | 2    | 2      | 2          | 2                              | 0,3      |
| MAXIC      | 100  | 100    | 100        | 100                            | 100      |
| MAXIOB_AMA | 3    | 5      | 7          | 12                             | 25       |
| MAXIOB_SMB | 7    | 13     | 22         | 30                             | 70       |
| MAXBASAL   | 2    | 5      | 10         | 12                             | 25       |