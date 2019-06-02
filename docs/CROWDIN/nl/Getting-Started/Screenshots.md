# Screenshots

## Overzicht-scherm

![Overzicht-scherm V2.1](../images/Screenshot_Home_screen_V2_1.png)

Dit is het eerste scherm dat je ziet wanneer je AndroidAPS opent en je vindt er de meeste dingen die je dagelijks nodig hebt.

**Sectie A:** Hiermee kun je navigeren tussen de verschillende AndroidAPS modules, door naar links of rechts te vegen.

**Sectie B:** Hier zie je de status van de loop, die je hier ook kunt veranderen (de closed loop deactiveren, onderbreken etc). Je huidige profiel is zichtbaar en jouw streefdoel. Je kunt hier ook een (tijdelijke) profielswitch en tijdelijk streefdoel instellen. Aanpassingen maak je door een veld lang ingedrukt te houden. Houd bijvoorbeeld de grijze knop rechtsboven met streefdoel ("110" in screenshot) lang ingedrukt om een tijdelijk streefdoel in te stellen.

**Sectie C:** Hier zie je de laatste glucosewaarde van jouw CGM, en hoe lang geleden deze gemeten was. Ook de verandering in de afgelopen 15 en 40 minuten, jouw actuele basaalstand - inclusief eventuele tijdelijke basaalstand (TBR, temporary basal rate), de nog werkzame insuline (IOB, insulin on board) en hoeveelheid koolhydraten (COB, carbs on board).

De optionele [statusindicatoren](../Configuration/Preferences.md) (CAN | INS | RES | SEN | BAT) geeft een visuele waarschuwing voor laag reservoir, batterij bijna leeg, en infuuswissel.

De nog werkzame insuline (IOB) staat op nul als de loop in de afgelopen tijd jouw ingestelde basaalstand heeft afgegeven en er geen insuline meer over is van een eerdere bolus. De getallen binnen de haakjes is hoeveel insuline er nog werkzaam is van een eerdere bolus, en hoeveel verschil er zit tussen de door jou ingestelde basaalstanden en de tijdelijke basaalstanden (TBRs, temporary basal rates) die AndroidAPS heeft gegeven. Dat tweede getal zal negatief zijn, als je afgelopen tijd lagere tijdelijke basaalstanden hebt gehad.

**Sectie D:** Klik op de pijl aan de rechterkant van het scherm in sectie D om te selecteren welke informatie je wilt zien op de grafieken eronder.

**Sectie E:** De grafiek met jouw bloedglucosewaardes (BG) van jouw sensor. Je ziet ook notificaties van bijvoorbeld calibraties en ingevoerde koolhydraten. Houd de grafiek lang ingedrukt om de tijdsduur aan te passen. Je kunt kiezen om de afgelopen 6, 8, 12, 18 of 24 uur te laten zien.

De verlengde lijnen zijn de voorspelde BG waardes en trends - wanneer je die hebt aangevinkt.

    * Oranje lijn: COB (kleur wordt over het algemeen gebruikt voor COB en koolhydraten)
    * Donkerblauwe lijn: IOB (kleur wordt over het algemeen gebruikt voor IOB en insuline)
    * Lichtblauwe lijn: zero-temp
    * Donkergele lijn: UAM
    

Deze lijnen laten voorspellingen zien aan de hand van verschillende scenario's. Eentje waarbij rekening wordt gehouden met de huidige absorptie van koolhydraten (COB). Eentje waarbij alleen met insuline rekening wordt gehouden (IOB). Eentje die laat zien wat er gebeurt als er vanaf nu een tijdelijke basaalstand van nul (zero-temp) wordt gegeven zonder verder rekening te houden met BG afwijkingen. En eentje waarbij het systeem een BG stijging heeft opgemerkt en ervan uitgaat dat je koolhydraten hebt gegeten zonder die ingevoerd te hebben (UAM, unannounced meal).

De grafiek eronder, met de blauwe lijnen zijn de basaalstanden. De blauwe stippellijn is de basaal die jij zelf had ingesteld, zonder tijdelijke basaalstanden (TBRs) van AndroidAPS. De ononderbroken blauwe lijn is de basaal die de pomp heeft afgegeven (en dus inclusief eventuele TBRs).

**Sectie F:** De weergave kun je aanpassen met de opties uit sectie D. In dit screenshot zie je de insuline aan boord (IOB), de gevoeligheid en de afwijkingen. GRIJZE balken zijn een afwijking door koolhydraten. GROEN is wanneer de BG hoger is dan het algoritme verwacht, en ROOD is wanneer de BG lager is dan het algoritme verwacht.

**Sectie G:** Met deze knoppen kun je een bolus geven (zonder de calculator te gebruiken), de boluscalculator gebruiken, of een BG calibratie (met vingerprik) toevoegen.

## Boluscalcuator

![Boluscalculator](../images/Screenshot_Bolus_calculator.png)

Wanneer je wilt bolussen voor een maaltijd, dan doe je dat meestal via dit scherm.

**Sectie A:** Hier voer je de gegevens in die de boluscalculator zal gebruiken. Het BG veld is normaalgesproken al ingevuld, dit is jouw meest recente CGM waarde. Wanneer jouw CGM het niet doet, dan is dit veld leeg. In het Koolhydraten veld voer je de hoeveelheid koolhydraten (in grammen) in die je wilt gaan eten. NB: Wanneer je gewend bent om 'broodwaarden' oid te gebruiken, zul je dus eerst naar grammen moeten omrekenen. Het Correctie veld kun je gebruiken als je om wat voor reden dan ook de einddosis wilt aanpassen. In het KH tijdsduur veld kun je een pre-bolus tijd invoeren, dwz dat er tijd tussen bolussen en eten zit. Je kunt ook een negatieve waarde in dit veld invullen als je bolust na je maaltijd.

Bij een SUPER BOLUS wordt de basale insuline voor de komende twee uur toegevoegd aan de maaltijdbolus, gevolgd door een tijdelijke basaalstand van nul voor de komende twee uur om te compenseren voor de extra insuline. Hiermee wordt de insuline 'naar voren gehaald', zodat je een minder hoge glucosepiek zult hebben na de maaltijd.

**Sectie B:** toont de berekende bolus. Wanneer je al meer insuline aan boord (IOB) hebt dan de berekende bolus, dan zal hier alleen de ontbrekende hoeveelheid koolhydraten te zien zijn.

**Sectie C:** hier zie je de verschillende variabelen die zijn gebruikt voor het berekenen van de bolus. Je kunt variabelen uitschakelen die je niet wilt laten meenemen in de berekening, maar meestal zul je hier niets van aanpassen.

<b>Combinaties van COB en IOB en hun betekenis</b>

<ul>
    <li>Wanneer je COB en IOB hebt aangevinkt, dan worden meegenomen: koolhydraten die nog niet zijn opgenomen en waarvoor nog geen insuline is genomen + alle insuline die eerder is afgegeven (dit zijn zowel tijdelijke basaalstanden als SMB).</li>
    <li>Wanneer je COB aanvinkt en IOB niet, dan loop je het risico om teveel insuline te krijgen omdat AAPS geen rekening houdt met de hoeveelheid insuline die eerder is afgegeven. </li>
    <li>Wanneer je IOB aanvinkt en COB niet, dan loop je het risico om te weinig insuline te krijgen. Want AAPS houdt wel rekening met insuline die eerder is afgegeven maar niet met koolhydraten die nog moeten worden opgenomen. Dan kun je een melding "Te weinig ... g" krijgen (ontbrekende koolhydraten).
</ul>

Wanneer je een bolus wilt geven voor extra koolhydraten, vlak na een maaltijdbolus (bijv. je neemt toch wél een nagerecht) dan kan het verstandig zijn om alle vinkjes weg te halen. Dat komt omdat er hierboven steeds wordt gesproken over 'koolhydraten die nog niet zijn opgenomen'. Zo kort na je maaltijdbolus zijn de koolhydraten van je hoofdgerecht waarschijnlijk nog niet opgenomen, en dus komt op dat moment de hoeveelheid IOB niet overeen met de hoeveelheid COB. Door alle vinkjes uit te zetten, berekent AAPS de nieuwe bolus met alleen de koolhydraten uit je nagerecht.

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

![Care Portal](../images/Screenshot_care_portal.png)

Wat je hier ziet, is hetzelfde als wat je in Nightscout ziet wanneer je daar op het "+" symbool klikt. Je kunt dit gebruiken om notities te maken. Deze knoppen, zoals infuus wissel of insuline ampul wissel, spreken voor zich. LET OP! Met deze knoppen stuur je je pomp niet aan. Dus als je via de Care Portal een bolus toevoegt, dan krijg je alleen een notitie van de bolus op je Nightscout grafiek. De pomp zelf zal géén bolus geven. Wel zal deze insuline worden meegenomen in de IOB berekening, handig wanneer je AAPS wilt laten weten dat je met de pen hebt bijgespoten.

## Loop, MA, AMA, SMB

Je hoeft je hier meestal niet druk om te maken. Je ziet hier de resultaten terug van wat het OpenAPS algoritme heeft berekend, iedere keer wanneer het systeem een nieuwe waarde krijgt van je CGM. Dit wordt ergens anders verder beschreven.

## Profiel

![Profiel](../images/Screenshot_profile.png)

AndroidAPS kan werken met verschillende soorten profielen. Een veelgebruikte optie is - zoals hier weergegeven - een Nightscout profiel, waarbij het profiel via de ingebouwde Nightscout client wordt gedownload en hier is weergegeven in alleen-lezen modus. Als je iets wilt veranderen aan dit profiel, dan moet je dit doen in de Nightscout omgeving en daarna via "Activeer Profiel" in AndroidAPS het veranderde profiel weer downloaden. Gegevens zoals bijv. je basaalstanden worden dan automatisch ook naar je pomp gestuurd.

**DIA:** betekent werkingsduur van je insuline (Duration of Insulin Action), zie hierboven het stuk over insuline curve.

**KH ratio:** is de koolhydraatratio - het aantal grammen koolhydraten waarvoor jij één eenheid insuline nodig hebt. In dit voorbeeldprofiel zijn er verschillende koolhydraatratio's ingesteld voor verschillende tijden van de dag.

**ISF:** is de insuline gevoeligheidsfactor (Insulin Sensitivity Factor) - de hoeveelheid die jouw bloedglucose zal dalen na het geven van één eenheid insuline, waarbij wordt aangenomen dat alle andere variabelen hetzelfde blijven.

**Basaal:** het in de pomp voorgeprogrammeerde basaalprofiel.

**Streefdoel:** zijn de glucosewaardes waar AndroidAPS steeds probeert binnen te blijven. Je kunt verschillende waardes instellen voor verschillende tijden van de dag als je dat wilt. En je kunt daarnaast een onderste en bovenste streefwaarde instellen, zodat het systeem alleen ingrijpt wanneer je buiten die streefwaardes komt. Bedenk wel dat wanneer je dat doet, dat het systeem pas later ingrijpt en dat je waardes dus minder stabiel zullen zijn.

## Behandelingen, xDrip, NSClient

Hier kun je de geschiedenis terugkijken van behandelingen (bolussen en koolhydraten), xDrip gegevens en Nightscout loggegevens die via de ingebouwde Nightscout client worden verzonden. Normaalgesproken hoef je hier niet naar op te kijken, tenzij er ergens een probleem is.

## Configurator

![Configurator](../images/Screenshot_config_builder.png)

Op deze plek kun je jouw systeem instellen. In dit screenshot bestaat het systeem uit een Combo pomp, een Dexcom G5 CGM die zijn waardes doorgeeft via xDrip+, de insuline is NovoRapid met een Oref profiel en alle gegevens worden geupload naar Nightscout.

Als er in de kolom aan de rechterkant een vinkje staat, dan betekent dit dat die module wordt weergegeven als een tabje in de bovenste regel (zie sectie A in het screenshot met het Overzicht-scherm). Tikken op het tandwiel-symbooltje aan de rechterkant brengt je naar een scherm met verdere instellingen voor die module, als die er zijn.

## Instellingen en voorkeuren

In de rechterbovenhoek zie je drie stipjes onder elkaar staan. Als je daarop tikt, kun je verder klikken naar verschillende opties, en ook Instellingen. Zo kun je met het Historiek venster jouw grafieken van vorige dagen terugkijken. Of de app handmatig Afsluiten als hij is vastgelopen. De instellingen worden ergens anders in de wiki verder beschreven.