# AndroidAPS screenshots

## Overzicht-scherm

![Overzicht-scherm V2.5](../images/Screenshot_Home_screen_V2_5_1.png)

Dit is het eerste scherm dat je ziet wanneer je AndroidAPS opent en je vindt er de meeste dingen die je dagelijks nodig hebt.

### Sectie A

* Hiermee kun je navigeren tussen de verschillende AndroidAPS modules, door naar links of rechts te vegen

### Sectie B

* Hier zie je de status van de loop, die je hier ook kunt veranderen (de closed loop deactiveren, onderbreken etc).
* Je huidige profiel. Je kunt hier ook een (tijdelijke) [profielwissel](../Usage/Profiles.md) instellen.
* Je huidige bloedglucose streefdoel. Je kunt hier ook een [tijdelijk streefdoel](../Usage/temptarget.md) instellen.

Aanpassingen maak je door een veld lang ingedrukt te houden. Houd bijvoorbeeld de grijze knop rechtsboven met streefdoel ("100" in screenshot) lang ingedrukt om een tijdelijk streefdoel in te stellen.

### Sectie C

* Laatste bloedglucose waarde van jouw CGM
* Hoe lang geleden werd bloedglucose uitgelezen
* Gemiddelde verandering in de laatste 15 en 40 minuten
* Huidige basaalstand, inclusief een eventueel tijdelijke basaal stand (TBR) geprogrammeerd door het systeem
* Insuline aan boord (IOB)
* koolhydraten aan boord (Carbs On Board, COB)

De optionele [statusindicatoren](../Configuration/Preferences#statusindicatoren) (CAN | INS | RES | SEN | BAT) geeft een visuele waarschuwing voor laag reservoir, batterij bijna leeg, en infuuswissel.

De nog werkzame insuline (IOB) staat op nul als de loop in de afgelopen tijd jouw ingestelde basaalstand heeft afgegeven en er geen insuline meer over is van een eerdere bolus. De getallen binnen de haakjes is hoeveel insuline er nog werkzaam is van een eerdere bolus, en hoeveel verschil er zit tussen de door jou ingestelde basaalstanden en de tijdelijke basaalstanden (TBRs, temporary basal rates) die AndroidAPS heeft gegeven. Dat tweede getal zal negatief zijn, als je afgelopen tijd lagere tijdelijke basaalstanden hebt gehad.

### Sectie D

Klik op de pijl aan de rechterkant van het scherm in sectie D om te selecteren welke informatie je wilt zien op de grafieken eronder.

### Sectie E

De grafiek met jouw bloedglucosewaardes (BG) van jouw sensor. Je ziet ook notificaties van bijvoorbeld calibraties en ingevoerde koolhydraten.

Houd de grafiek lang ingedrukt om de tijdsduur aan te passen. Je kunt kiezen om de afgelopen 6, 8, 12, 18 of 24 uur te laten zien.

De verlengde lijnen zijn de voorspelde BG waardes en trends - wanneer je die hebt aangevinkt.

* ** Oranje ** lijn: [COB](../Usage/COB-calculation.rst) (kleur wordt gebruikt om COB en koolhydraten weer te geven)
   
   Deze voorspellingslijn laat zien waar jouw BG (niet COB zelf!) heengaat op basis van je huidige pomp instellingen, en ervan uitgaande dat de afwijkingen door koolhydraat absorptie constant blijven. Deze lijn wordt alleen getoond als je COB hebt.

* ** Donker blauwe ** lijn: IOB (kleur wordt gebruikt om IOB en insuline weer te geven)
   
   Deze voorspellingslijn laat zien waar jouw BG heengaat, alleen rekening houdend met de insuline die je aan boord hebt. Alsof je wel insuline hebt gebolusd maar vervolgens geen koolhydraten hebt gegeten.

* **Licht blauwe** lijn: zero-temp (voorspelde BG als tijdelijke basaalstand op 0% zou worden ingesteld)
   
   Deze voorspellingslijn is vergelijkbaar met IOB, maar gaat ervan uit dat er geen insuline meer wordt afgegeven door jouw pomp (0% TBR vanaf nu).

* **Donker gele** lijn: [UAM](../Configuration/Sensitivity-detection-and-COB#gevoeligheid-oref1) (un-announced meals, onaangekondigde maaltijden)
   
   Onaangekondigde maaltijden (Un Announced Meals) - het algoritme heeft een aanzienlijke toename van je glucosewaardes gedetecteerd. Bijvoorbeeld door maaltijden, adrenaline of andere invloeden. Deze voorspellingslijn is vergelijkbaar met de oranje COB lijn, maar veronderstelt dat de afwijkingen met een constante snelheid zullen afnemen (dmv het doortrekken van de huidige afnamesnelheid van de afwijkingen).

Bovenstaande voorspellingslijnen rekenen met verschillende (extreme) scenario's. Meestal eindigt je werkelijke bloedglucose curve ergens in het midden van deze lijnen, of dicht bij de lijn die aannames maakt die het meest lijken op jouw situatie van dat moment.

De grafiek eronder, met de blauwe lijnen zijn de basaalstanden. De **ononderbroken blauwe** lijn is de basale insuline die jouw pomp afgegeven heeft, inclusief eventuele tijdelijke basaalstanden (TBRs) die jouw pomp heeft afgegeven. De **blauwe stippellijn** is de basaal die jij zelf had ingesteld, zonder tijdelijke basaalstanden (TBRs) van AndroidAPS.

De ** dunne gele ** lijn is de insuline activiteit. Het is gebaseerd op de verwachte daling in BG, alleen veroorzaakt door de aanwezige insuline, alsof er geen andere invloeden (zoals koolhydraten) aanwezig zijn.

### Sectie F

De weergave kun je aanpassen met de opties uit sectie D.

* **IOB, Insulin On Board** (blauw): geeft aan hoeveel insuline je aan boord hebt. Als er geen TBRs, SMB's en geen overblijfsels van bolussen zouden zijn, dan ligt deze lijn op nul. Hoe snel de IOB afneemt, hangt af van je instellingen voor DIA en insulineprofiel. 
* ** COB, Carbs On Board ** (oranje): geeft aan hoeveel koolhydraten je aan boord hebt. Hoe snel de COB afneemt, hangt af van de werkelijke BG stijging/daling die het algoritme detecteert tov de verwachte BG. Als hij een hogere koolhydraat-absorptie detecteert dan verwacht, dan zal hij insuline afgegeven en zal de IOB toenemen (e.e.a. is afhankelijk van jouw veiligheidsinstellingen). 
* **Afwijkingen**: 
   * **GRIJZE** balken zijn een afwijking door koolhydraten. 
   * **GROEN** is wanneer de BG hoger is dan het algoritme verwacht. 
   * **ROOD** is wanneer de BG lager is dan het algoritme verwacht.
* **Gevoeligheid** (witte lijn): Toont de gevoeligheid die [Autosens](../Usage/Open-APS-features#gevoeligheidsdetectie_autosens) gedetecteerd heeft. Berekent veranderingen aan jouw insuline gevoeligheid veroorzaakt door sporten, hormonen, etc.
* ** Insuline activiteit ** (gele lijn): Toont de insuine activiteit, berekend aan de hand van het door jou gekozen insuline-profiel (het wordt niet afgeleid van IOB). De waarde is hoger wanneer het werkingsprofiel van jouw insuline dichter bij zijn piektijd zit. Wanneer de IOB afneemt dan wordt de waarde negatief. 

### Sectie G

Met deze knoppen kun je een bolus geven (zonder de bolus calculator te gebruiken), of een BG calibratie (met vingerprik) toevoegen. Je kunt hier ook een Vaste Maaltijd-knop laten weergeven als je dat hebt ingesteld in de [ Configurator](../Configuration/Config-Builder#vaste-maaltijd-instellingen).

## Boluscalcuator

![Boluscalculator](../images/Screenshot_Bolus_calculator.png)

Wanneer je wilt bolussen voor een maaltijd, dan doe je dat meestal via dit scherm.

### Section H

Hier voer je de gegevens in die de boluscalculator zal gebruiken. Het BG veld is normaalgesproken al ingevuld, dit is jouw meest recente CGM waarde. Wanneer jouw CGM het niet doet, dan is dit veld leeg. In het Koolhydraten veld voer je de hoeveelheid koolhydraten (in grammen) in die je wilt gaan eten. NB: Wanneer je gewend bent om 'broodwaarden' oid te gebruiken, zul je dus eerst naar grammen moeten omrekenen. Het Correctie veld kun je gebruiken als je om wat voor reden dan ook de einddosis wilt aanpassen. In het KH tijdsduur veld kun je een pre-bolus tijd invoeren, dwz dat er tijd tussen bolussen en eten zit. Je kunt ook een negatieve waarde in dit veld invullen als je bolust na je maaltijd.

Bij een SUPER BOLUS wordt de basale insuline voor de komende twee uur toegevoegd aan de maaltijdbolus, gevolgd door een tijdelijke basaalstand van nul voor de komende twee uur om te compenseren voor de extra insuline. Hiermee wordt de insuline 'naar voren gehaald', zodat je een minder hoge glucosepiek zult hebben na de maaltijd.

### Section I

Toont de berekende bolus. Wanneer je al meer insuline aan boord (IOB) hebt dan de berekende bolus, dan zal hier alleen de ontbrekende hoeveelheid koolhydraten te zien zijn.

### Section J

Hier zie je de verschillende variabelen die zijn gebruikt voor het berekenen van de bolus. Je kunt variabelen uitschakelen die je niet wilt laten meenemen in de berekening, maar meestal zul je hier niets van aanpassen.

### Combinaties van COB en IOB en hun betekenis

<ul>
    <li>Wanneer je COB en IOB hebt aangevinkt, dan worden meegenomen: koolhydraten die nog niet zijn opgenomen en waarvoor nog geen insuline is genomen + alle insuline die eerder is afgegeven (dit zijn zowel tijdelijke basaalstanden als SMB).</li>
    <li>Wanneer je COB aanvinkt en IOB niet, dan loop je het risico om teveel insuline te krijgen omdat AAPS geen rekening houdt met de hoeveelheid insuline die eerder is afgegeven. </li>
    <li>Wanneer je IOB aanvinkt en COB niet, dan loop je het risico om te weinig insuline te krijgen. Want AAPS houdt wel rekening met insuline die eerder is afgegeven maar niet met koolhydraten die nog moeten worden opgenomen. Dan kun je een melding "Te weinig ... g" krijgen (ontbrekende koolhydraten).
</ul>

Wanneer je een bolus wilt geven voor extra koolhydraten, vlak na een maaltijdbolus (bijv. je neemt toch wél een nagerecht) dan kan het verstandig zijn om alle vinkjes weg te halen. Dat komt omdat er hierboven steeds wordt gesproken over 'koolhydraten die nog niet zijn opgenomen'. Zo kort na je maaltijdbolus zijn de koolhydraten van je hoofdgerecht waarschijnlijk nog niet opgenomen, en dus komt op dat moment de hoeveelheid IOB niet overeen met de hoeveelheid COB. Door alle vinkjes uit te zetten, berekent AAPS de nieuwe bolus met alleen de koolhydraten uit je nagerecht.

### Verkeerde COB-detectie

![Langzame koolhydraat absorptie](../images/Calculator_SlowCarbAbsorbtion.png)

Als je de waarschuwing hierboven ziet na het gebruik van de boluswizard, dan heeft AndroidAPS vastgesteld dat de berekende COB-waarde misschien onjuist is. Dit betekent dat, als je weer wilt bolussen en je hebt nog COB van een vorige maaltijd, je moet uitkijken voor overdosering! Zie voor meer informatie de [COB Berekening](../Usage/COB-calculation#detectie-van-verkeerde-cob-waarden) pagina.

## Insuline curve

![Insuline curve](../images/Screenshot_insulin_profile.png)

Dit is het werkingsprofiel van de door jou gekozen insuline. De PAARSE lijn laat zien hoeveel insuline er nog over is na een injectie, je ziet hoe die steeds verder afneemt als de tijd voorbijgaat. De BLAUWE lijn laat zien hoe actief de insuline is.

Normaal gesproken gebruik je een van de Oref profielen. Het is belangrijk om op te merken hoe lang het duurt voordat de activiteit van de insuline helemaal is opgehouden. Wanneer je eerder een insulinepomp hebt gebruikt, ben je waarschijnlijk gewend om in te stellen dat de activiteit van de insuline ongeveer 3,5 uur is. Alleen, wanneer je gaat loopen dan is de langere activiteit (ook al is deze activiteit maar heel weinig aan het einde) weldegelijk belangrijk om mee te laten nemen in berekeningen. Omdat al deze kleine beetjes zich gaan optellen, door de vele recursieve berekeningen die het AAPS algoritme doet.

Meer uitleg over de verschillende soorten insuline, hun werkingsprofielen en waarom dit allemaal belangrijk is, staat in dit artikel: [Understanding the New IOB Curves Based on Exponential Activity Curves](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves).

En meer hierover staat in dit uitstekende blog: [Why we are regularly wrong in the duration of insulin action (DIA) times we use, and why it matters…](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

En nog meer in: [Exponential Insulin Curves + Fiasp](http://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Pompstatus

![Pompstatus](../images/Screenshot_pump_Combo.png)

Hier zie je de status van je insulinepomp - in dit geval een Accu-Check Combo. De informatie die je ziet spreekt voor zich. Via een druk op de HISTORIEK knop kun je alle informatie uit je pomp geschiedenis terugzien, inclusief je basaalprofiel. Maar onthoud dat er maar 1 basaalprofiel wordt gebruikt in de Combo pomp.

## Care Portal

De Careportal had dezelfde functies als wat je in Nightscout ziet wanneer je daar op het "+" symbool klikt. Je kon de Careportal gebruiken om dingen in te noteren.

### Koolhydraten correctie

De Behandelingen tab kan worden gebruikt om foutieve koolhydraat-invoer te corrigeren, bijvoorbeeld als je de hoeveelheid koolhydraten hebt onderschat, of juist minder hebt gegeten dan gepland.

1. Bekijk en onthoud de werkelijke COB en IOB op Overzichtscherm.
2. Afhankelijk van de pomp op het behandelingen-tabblad kunnen koolhydraten samen met insuline op één regel staan, of als een aparte regel (dit laatste is zo bij de DanaRS).
   
   ![Behandeling in 1 of 2 regels](../images/Treatment_1or2_lines.png)

3. Verwijder de regel met de foutieve koolhydraten-invoer.

4. Controleer op het Overzicht scherm of de koolhydraten inderdaad zijn verwijderd, het aantal COB zou moeten zijn aangepast.
5. Doe hetzelfde voor de IOB als er slechts één regel is op het Behandelingen-tabblad voor koolhydraten en insuline.
   
   -> Als koolhydraten per ongeluk niet waren verwijderd maar je voegt vervolgens wel extra koolhydraten toe zoals uitgelegd bij 6., zal COB te hoog zijn en dat kan leiden tot een te hoge dosis insuline. Let dus op wat er gebeurt!

6. Voer de juiste hoeveelheid koolhydraten in via de koolhydraten knop op het Overzichtscherm, zorg ervoor dat je het tijdstip aanpast naar het moment dat de koolhydraten daadwerkelijk zijn gegeten.

7. Als er op jouw Behandelingen-tabblad één regel wordt gebruikt voor koolhydraten en insuline, moet je ook de hoeveelheid insuline weer toevoegen. Doe dit via de insuline knop op het Overzichtscherm en zorg er ook hierbij voor dat je het tijdstip aanpast naar het moment dat de insuline was toegediend. Controleer tenslotte op het Overzichtscherm of de IOB is meeveranderd.

## Loop, MA, AMA, SMB

Je hoeft je hier meestal niet druk om te maken. Je ziet hier de resultaten terug van wat het OpenAPS algoritme heeft berekend, iedere keer wanneer het systeem een nieuwe waarde krijgt van je CGM. Dit wordt ergens anders verder beschreven.

## Profiel

![Profiel](../images/Screenshot_profile.png)

AndroidAPS kan werken met verschillende soorten profielen. Een veelgebruikte optie is - zoals hier weergegeven - een Nightscout profiel, waarbij het profiel via de ingebouwde Nightscout client wordt gedownload en hier is weergegeven in alleen-lezen modus. Als je iets wilt veranderen, dan doe je dit vanuit de Nightscout-gebruikersinterface en doe je daarna een [Profiel wissel](../Usage/Profiles.md) in de AndroidAPS app om de wijzigingen te activeren. Gegevens zoals bijv. je basaalstanden worden dan automatisch ook naar je pomp gestuurd.

**DIA:** betekent werkingsduur van je insuline (Duration of Insulin Action), zie hierboven het stuk over insuline curve.

**KH ratio:** is de koolhydraatratio - het aantal grammen koolhydraten waarvoor jij één eenheid insuline nodig hebt. In dit voorbeeldprofiel zijn er verschillende koolhydraatratio's ingesteld voor verschillende tijden van de dag.

**ISF:** is de insuline gevoeligheidsfactor (Insulin Sensitivity Factor) - de hoeveelheid die jouw bloedglucose zal dalen na het geven van één eenheid insuline, waarbij wordt aangenomen dat alle andere variabelen hetzelfde blijven.

**Basaal:** het in de pomp voorgeprogrammeerde basaalprofiel.

**Streefdoel:** zijn de glucosewaardes waar AndroidAPS steeds probeert binnen te blijven. Je kunt verschillende waardes instellen voor verschillende tijden van de dag als je dat wilt. En je kunt daarnaast een onderste en bovenste streefwaarde instellen, zodat het systeem alleen ingrijpt wanneer je buiten die streefwaardes komt. Bedenk wel dat wanneer je dat doet, dat het systeem pas later ingrijpt en dat je waardes dus minder stabiel zullen zijn.

## Behandelingen, xDrip, NSClient

Hier kun je de geschiedenis terugkijken van behandelingen (bolussen en koolhydraten), xDrip gegevens en Nightscout loggegevens die via de ingebouwde Nightscout client worden verzonden. Normaalgesproken hoef je hier niet naar op te kijken, tenzij er ergens een probleem is.

## Configurator

![Configurator](../images/Screenshot_config_builder.png)

Op deze plek kun je jouw AndroidAPS systeem instellen. In dit screenshot bestaat het systeem uit een Combo pomp, een Dexcom G5 CGM die zijn waardes doorgeeft via xDrip+, de insuline is NovoRapid met een Oref profiel en alle gegevens worden geupload naar Nightscout.

Als er in de kolom aan de rechterkant een vinkje staat, dan betekent dit dat die module wordt weergegeven als een tabje in de bovenste regel (zie sectie A in het screenshot met het Overzicht-scherm). Tikken op het tandwiel-symbooltje aan de rechterkant brengt je naar een scherm met verdere instellingen voor die module, als die er zijn.

## Instellingen en voorkeuren

In de rechterbovenhoek zie je drie stipjes onder elkaar staan. Als je hier op drukt, kom je bij de instellingen van de app, geschiedenisbrowser, setup-wizard, informatie over de app (zoals versie nummer), en de Afsluiten-knop AAPS om af te sluiten.