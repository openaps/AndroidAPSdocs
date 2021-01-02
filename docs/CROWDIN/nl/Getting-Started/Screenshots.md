# AndroidAPS screenshots

## Overzicht-scherm

![Overzicht-scherm V2.7](../images/Home2020_Homescreen.png)

Dit is het eerste scherm dat je ziet wanneer je AndroidAPS opent en je vindt er de meeste dingen die je dagelijks nodig hebt.

### Sectie A - Tabbladen

* Schakel tussen de verschillende AndroidAPS-tabbladen door erop te tikken.
* Je kunt overigens ook van het ene naar het andere tabblad gaan door je huidige scherm naar links of rechts te swipen.
* Je kunt in de [Configurator](../Configuration/Config-Builder#tabblad-of-hamburger-menu) zelf bepalen welke onderdelen van AAPS worden weergegeven als tabbladen.

### Sectie B - Profiel & streefdoel

#### Huidig profiel

![Resterende duur profiel wissel](../images/Home2020_ProfileSwitch.png)

* Jouw actieve profiel wordt links weergegeven.
* Druk kort op de profielnaam om jouw profielgegevens te bekijken
* Houd de profielnaam lang ingedrukt om [ te wisselen tussen verschillende profielen](../Usage/Profiles#profiel-wissel).
* Als je had gekozen voor een profiel wissel met een beperkte tijdsduur, dan wordt de resterende tijd (in minuten) tussen haakjes weergegeven.

#### Streefdoel

![Resterende duur tijdelijk streefdoel](../images/Home2020_TT.png)

* Het huidige bloedglucose streefdoel wordt weergegeven aan de rechterkant.
* Druk kort op het streefdoel om een [tijdelijk streefdoel](../Usage/temptarget.md) in te stellen.
* Als je een tijdelijk streefdoel hebt ingesteld, dan wordt de balk geel en wordt de resterende tijd (in minuten) tussen haakjes weergegeven.

#### Weergave van dynamisch aangepast streefdoel

![Weergave van dynamisch aangepast streefdoel](../images/Home2020_DynamicTargetAdjustment.png)

* AAPS kan jouw streefdoel dynamisch aanpassen op basis van jouw insulinegevoeligheid (geldt alleen als je het SMB-algoritme hebt gekozen).
* Schakel hiervoor één of meerdere van de [volgende opties](../Configuration/Preferences#openaps-smb-instellingen) in: 
   * "Gevoeligheid verhoogt het doel" 
   * "Resistentie verlaagt het doel" 
* Als AAPS gevoeligheid of resistentie detecteert, zal het streefdoel dat in jouw profiel is ingesteld, worden aangepast. 
* Bij een dynamisch aangepast streefdoel kleurt de balk groen.

### Sectie C - BG & loop status

#### Huidige bloedglucose

* Laatste bloedglucosewaarde van jouw CGM staat aan de linkerkant.
* De kleur van de BG-waarde geeft aan of je binnen of buiten de [door jou ingestelde range](../Configuration/Preferences#bereik-voor-visualisatie) zit. 
   * groen = in range
   * rood = eronder
   * geel = erboven
* In het midden zie je het aantal minuten sinds de laatste CGM meting en ook het verschil tov de laatste meting, tov 15 minuten geleden en tov 40 minuten geleden.

#### Loop status

![Loop status](../images/Home2020_LoopStatus.png)

* Een pictogram geeft de status van de loop weer:
   
   * groene cirkel = closed loop modus ingeschakeld
   * groene cirkel met stippellijn = [stop voor laag](../Usage/Objectives#doel-6-starten-in-closed-loop-met-bescherming-tegen-lage-bg) modus
   * rode cirkel = loop uitgeschakeld (zonder eindtijd), je krijgt je normale basaal
   * gele cirkel = loop uitgeschakeld (tijdelijk onderbroken - resterende tijd wordt weergegeven onder het pictogram), je krijgt je normale basaal
   * grijze cirkel = pomp losgekoppeld (tijdelijk - de resterende tijd wordt weergegeven onder het pictogram), de pomp geeft geen insuline af
   * oranje cirkel = super bolus afgegeven - resterende tijd wordt weergegeven onder het pictogram
   * blauwe cirkel met stippellijn = open loop

* Druk kort of lang op het pictogram om te schakelen naar een andere loop-modus (Open, Closed, Stop Bij Laag of Uitschakelen), je kunt dit ook doen vóórdat de resterende tijd van een bepaalde modus afloopt, om de loop weer in te schakelen.
   
   * Als je kort drukt op het loop-pictogram, moet je je keuze bevestigen in het dialoogvenster.
   
   ![Loop-statusmenu](../images/Home2020_Loop_Dialog.png)

### Sectie D - IOB, COB, BR en AS

![Sectie D](../images/Home2020_TBR.png)

* Injectiespuit: insuline aan boord (IOB) - hoeveelheid actieve insuline in jouw lichaam
   
   * De nog werkzame insuline (IOB) staat op nul als de loop in de afgelopen tijd jouw ingestelde basaalstand heeft afgegeven en er geen insuline meer over is van een eerdere bolus. 
   * IOB zal negatief zijn, als je afgelopen tijd lagere tijdelijke basaalstanden hebt gehad.
   * Druk op het pictogram om jouw IOB uitgesplitst te zien tussen bolus en basale insuline

* Graan: [koolhydraten aan boord (COB)](../Usage/COB-calculation.rst) -nog niet opgenomen koolhydraten die je eerder hebt gegeten -> dit pictogram flikkert als koolhydraten nodig zijn om een hypo te voorkomen

* Paarse lijn: huidige basaalstand (ookwel BR, Basaal Ratio genoemd) - het pictogram verandert van vorm als gevolg van tijdelijke veranderingen in basaalstand (als hij plat is, staat jouw basaal op 100%) 
   * Druk op het pictogram om meer details te zien over jouw normale basaal en eventuele tijdelijke basaal (inclusief de resterende tijdsduur)
* Pijltjes omhoog & naar beneden: autosens. Een kruis naast het pictogram geeft aan dat [autosens](../Usage/Open-APS-features#gevoeligheidsdetectie-autosens) is uitgeschakeld. De waarde wordt altijd weergegeven onder het pictogram (ter info, maakt niet uit of het is ingeschakeld of uitgeschakeld)

#### Koolhydraten benodigd

![Koolhydraten benodigd](../images/Home2020_CarbsRequired.png)

* Wanneer het algoritme denkt dat je extra koolhydraten nodig hebt om te voorkomen dat je een hypo krijgt, zal hij een waarschuwing geven.
* Dit is het geval wanneer het algoritme denkt dat een tijdelijke basaal van 0 (nul) niet voldoende zal zijn.
* De berekening achter de waarschuwing voor benodigde koolhydraten is veel geavanceerder dan de berekening achter de bolus calculator. De bolus calculator houdt alleen rekening met jouw profiel instellingen, icm COB/IOB. De koolhydraat waarschuwing houdt ook rekening met de voorspelde BG. Daarom kan het gebeuren dat je een koolhydraten waarschuwing krijgt, terwijl de boluscalculator geen ontbrekende koolhydraten toont.
* * 'Koolydraten nodig' meldingen kunnen worden gepusht naar Nightscout als je dat wenst, dan zal er een notitie worden gemaakt en naar Nightscout gestuurd.

### Sectie E - Statusindicatoren

![Sectie E](../images/Home2020_StatusLights.png)

* Statusindicatoren geven een visuele waarschuwing voor 
   * Infuus leeftijd
   * Insuline leeftijd (aantal dagen dat reservoir wordt gebruikt)
   * Reservoir niveau (eenheden)
   * Sensor Leeftijd
   * Leeftijd en batterlijniveau (%)
* Als de drempelwaarde voor waarschuwing wordt overschreden, worden de waarden in geel weergegeven.
* Als de drempelwaarde voor alarm wordt overschreden, worden de waarden in rood weergegeven.
* De instellingen zijn te vinden in [Instellingen](../Configuration/Preferences#statusindicatoren).

### Sectie F - Hoofdgrafiek

![Sectie F](../images/Home2020_MainGraph.png)

* Grafiek toont je bloedglucosewaardes (BG) zoals ze worden gelezen door je glucosesensor / CGM. 
* Notities die je via het Acties tabblad hebt gemaakt, zoals kalibraties dmv vingerprik, infuuswissel, profiel wissel etc worden in deze grafiek weergegeven. 
* Houd de grafiek lang ingedrukt om de tijdsschaal aan te passen. Je kunt kiezen om de afgelopen 6, 12, 18 of 24 uur te laten zien.
* Het groene gebied weerspiegelt je doelbereik. Je kunt dit zelf instellen in [Instellingen](../Configuration/Preferences#bereik-voor-visualisatie).
* Blauwe driehoekjes geven [SMB](../Usage/Open-APS-features#super-micro-bolus-smb) weer, indien je SMB hebt ingeschakeld in de [Instellingen](../Configuration/Preferences#openaps-smb-instellingen).
* Optionele informatie (zie ook hieronder):
   
   * Voorspellingslijnen
   * Basalen
   * Activiteit - insuline activiteit lijn

#### Optionele informatie laten weergeven

* Klik op de driehoek aan de rechterkant van de hoofdgrafiek om te selecteren welke informatie in de hoofdgrafiek zal worden weergegeven.
* Voor de hoofdgrafiek zijn alleen de drie opties boven de regel "\---\---- Grafiek 1 \---\----" beschikbaar.
   
   ![Hoofdgrafiek instelling](../images/Home2020_MainGraphSetting.png)

#### Voorspellingslijnen

* ** Oranje ** lijn: [COB](../Usage/COB-calculation.rst) (kleur wordt gebruikt om COB en koolhydraten weer te geven)
   
   Deze voorspellingslijn laat zien waar jouw BG (niet COB zelf!) heengaat op basis van je huidige pomp instellingen, en ervan uitgaande dat de afwijkingen door koolhydraat absorptie constant blijven. Deze lijn wordt alleen getoond als je COB hebt.

* ** Donker blauwe ** lijn: IOB (kleur wordt gebruikt om IOB en insuline weer te geven)
   
   Deze voorspellingslijn laat zien waar jouw BG heengaat, alleen rekening houdend met de insuline die je aan boord hebt. Alsof je wel insuline hebt gebolusd maar vervolgens geen koolhydraten hebt gegeten.

* **Licht blauwe** lijn: zero-temp (voorspelde BG als tijdelijke basaalstand op 0% zou worden ingesteld)
   
   Deze voorspellingslijn is vergelijkbaar met IOB, maar gaat ervan uit dat er geen insuline meer wordt afgegeven door jouw pomp (0% TBR vanaf nu).

* **Donker gele** lijn: [UAM](../Configuration/Sensitivity-detection-and-COB#gevoeligheid-oref1) (un-announced meals, onaangekondigde maaltijden)
   
   Onaangekondigde maaltijden (Un Announced Meals) - het algoritme heeft een aanzienlijke toename van je glucosewaardes gedetecteerd. Bijvoorbeeld door maaltijden, adrenaline of andere invloeden. Deze voorspellingslijn is vergelijkbaar met de oranje COB lijn, maar veronderstelt dat de afwijkingen met een constante snelheid zullen afnemen (dmv het doortrekken van de huidige afnamesnelheid van de afwijkingen).

Bovenstaande voorspellingslijnen rekenen met verschillende (extreme) scenario's. Meestal eindigt je werkelijke bloedglucose curve ergens in het midden van deze lijnen, of dicht bij de lijn die aannames maakt die het meest lijken op jouw situatie van dat moment.

#### Basalen

* De **ononderbroken blauwe** lijn is de basale insuline die jouw pomp afgegeven heeft, inclusief eventuele tijdelijke basaalstanden (TBRs) die jouw pomp heeft afgegeven.
* De **gestippelde blauwe** lijn is de basaal uit jouw profiel, de basaal die je krijgt als AAPS geen tijdelijke basaalstanden (TBRs) instelt.
* Wanneer AAPS jouw standaard basaalstand afgeeft, dan wordt het gebied onder de grafiek in donkerblauw weergegeven.
* Wanneer AAPS een aangepaste (hoger of lager) basaalstand afgeeft, dan wordt het gebied onder de grafiek in lichtblauw weergegeven.

#### Activiteit

* De ** dunne gele ** lijn is de insuline activiteit. 
* Het is gebaseerd op de verwachte daling in BG, alleen veroorzaakt door de aanwezige insuline, alsof er geen andere invloeden (zoals koolhydraten) aanwezig zijn.

### Sectie G - aanvullende grafieken

* Je kunt maximaal vier extra grafieken laten weergeven onder de hoofdgrafiek.
* Klik aan de rechterkant van de hoofdgrafiek op het [driehoekje](../Getting-Started/Screenshots#optionele-informatie-weergeven) om de instellingen voor extra grafieken te openen.

![Instellingen extra grafieken](../images/Home2020_AdditionalGraphSetting.png)

* Om een extra grafiek te laten weergeven, zet je een vinje links van de naam (bijv. \---\---- grafiek 1 \---\----).

#### Absolute insuline

* Actieve insuline inclusief bolussen **en basaal**.

#### insuline aan boord (IOB)

* Toont de insuline aan boord (= actieve insuline in jouw lichaam). Dit is inclusief insuline afkomstig van bolussen en tijdelijke basaalstanden (**minus de ingestelde basaalstanden uit jouw profiel**).
* Als er gedurende de DIA geen [SMBs](../Usage/Open-APS-features#super-micro-bolus-smb), geen bolussen en geen TBR zouden zijn geweest, dan zou dit nul zijn.
* IOB kan negatief zijn als je geen insuline meer aan boord hebt van een voorafgaande bolus en je voor een langere tijd een laag (of zelfs nul) tijdelijk basaal hebt gekregen.
* Hoe snel jouw IOB afneemt hangt af van je [DIA en insuline profiel instellingen](../Configuration/Config-Builder#lokaal-profiel-aanbevolen). 

#### Koolhydraten aan boord (COB)

* Toont de koolhydraten aan boord (= actieve, nog niet opgenomen koolhydraten in jouw lichaam). 
* Hoe snel de COB afneemt, hangt af van de werkelijke BG stijging/daling die het algoritme detecteert tov de verwachte BG. 
* Als hij een hogere koolhydraat-absorptie detecteert dan verwacht, dan zal hij insuline afgegeven en zal de IOB toenemen (e.e.a. is afhankelijk van jouw veiligheidsinstellingen). 

#### Afwijkingen

* **GRIJZE** balken zijn een afwijking door koolhydraten. 
* **GROEN** is wanneer de BG hoger is dan het algoritme verwacht. Hoe meer groene balken je ziet, hoe hoger jouw resistentie in [Autosens](../Usage/Open-APS-features#gevoeligheidsdetectie-autosens) zal zijn (AS > 100%).
* **ROOD** is wanneer de BG lager is dan het algoritme verwacht. Hoe meer rode balken je ziet, hoe hoger jouw insulinegevoeligheid in [Autosens](../Usage/Open-APS-features#gevoeligheidsdetectie-autosens) zal zijn (AS < 100%)
* **GELE** balken is een afwijking vanwege UAM.
* **ZWARTE** balken betekent dat de afwijkingen heel klein zijn, te klein om te worden meegenomen voor het berekenen van de insulinegevoeligheid.

#### Gevoeligheid

* Toont de gevoeligheid die [Autosens](../Usage/Open-APS-features#gevoeligheidsdetectie-autosens) heeft gedetecteerd. 
* Berekent veranderingen aan jouw insuline gevoeligheid veroorzaakt door sporten, hormonen, etc.

#### Activiteit

* Insuline activiteit (gele lijn): Toont de insuine activiteit, berekend aan de hand van het door jou gekozen insuline-profiel (het wordt niet afgeleid van IOB). 
* De waarde is hoger wanneer het werkingsprofiel van jouw insuline dichter bij zijn piektijd zit.
* Wanneer de IOB afneemt dan wordt de waarde negatief. 

#### Richtingscoëfficiënt afwijking

* Interne waarde gebruikt door algoritme.

### Sectie H - Knoppen

![Overzichtscherm knoppen](../images/Home2020_Buttons.png)

* Knoppen voor insuline, koolhydraten en Calculator zijn altijd zichtbaar. 
* Andere knoppen moeten worden ingesteld in [Instellingen](../Configuration/Preferences#knoppen).

#### Insuline

![Insuline knop](../images/Home2020_ButtonInsulin.png)

* Om een bepaalde hoeveelheid insuline te geven zonder gebruik te maken van de [bolus calculator](../Getting-Started/Screenhots#bolus-calculator).
* Ook kun je dmv een vinkje in één moeite jouw [eet binnenkort tijdelijk streefdoel](../Configuration/Preferences#standaard-tijdelijke-streefdoelen) aanzetten.
* Als je niet wilt dat de pomp insuline gaat afgeven (omdat je met de pen bijspuit) kun je dit dmv een vinkje aangeven in dit scherm. Zo kun je AAPS laten weten dat je insuline hebt genomen.

#### Koolhydraten

![Koolhydraten knop](../images/Home2020_ButtonCarbs.png)

* Om koolhydraten in te voeren zonder erbij te bolussen.
* Verschillende [vooraf ingestelde tijdelijke streefdoelen](../Configuration/Preferences#standaard-tijdelijke-streefdoelen) kun je in één moeite aangezetten dmv een vinkje.
* Tijdverschuiving: Wanneer ga je/heb je de koolhydraten gegeten (in minuten).
* Tijdsuur: Te gebruiken voor ["vertraagde koolhydraten"](../Usage/Extended-Carbs.rst) (eCarbs)
* Gebruik de knoppen om het aantal koolhydraten snel in te voeren. Typen in het veld kan ook.
* Notities zullen worden geüpload naar Nightscout - afhankelijk van je instellingen voor [NS client](../Configuration/Preferences#ns-client).

#### Boluscalculator

* Zie [details hieronder](../Configuration/Screenhots#bolus-calculator)

#### Kalibraties

* Stuurt een kalibratie naar xDrip+ of opent het Dexcom calibratie venster.
* Moet worden geactiveerd in [Instellingen](../Configuration/Preferences#knoppen).

#### CGM

* Opent xDrip+.
* Met de Terug knop keer je terug naar AAPS.
* Moet worden geactiveerd in [Instellingen](../Configuration/Preferences#knoppen).

#### Vaste maaltijd

* Vul eenvoudig de hoeveelheid koolhydraten in en stel berekeningen in.
* Moet worden geactiveerd in [Instellingen](../Configuration/Preferences#knoppen).

## Bolus calculator

![Bolus wizard](../images/Home2020_BolusWizard.png)

Wanneer je wilt bolussen voor een maaltijd, dan doe je dat meestal via dit scherm.

### Sectie I

* Het BG veld is normaalgesproken al ingevuld, dit is jouw meest recente CGM waarde. Wanneer jouw CGM het niet doet, dan is dit veld leeg. 
* In het Koolhydraten veld voer je de hoeveelheid koolhydraten (in grammen) in die je wilt gaan eten. NB: Wanneer je gewend bent om 'broodwaarden' oid te gebruiken, zul je dus eerst naar grammen moeten omrekenen. 
* Het CORR-veld kun je gebruiken als je om wat voor reden dan ook de einddosis wilt aanpassen.
* In het KH tijdsduur veld kun je een pre-bolus tijd invoeren, dwz dat er tijd tussen bolussen en eten zit. Je kunt ook een negatieve waarde in dit veld invullen als je bolust na je maaltijd.

### Sectie J

* Bij een SUPER BOLUS wordt de basale insuline voor de komende twee uur toegevoegd aan de maaltijdbolus, gevolgd door een tijdelijke basaalstand van nul voor de komende twee uur om te compenseren voor de extra insuline. 
* Hiermee wordt de insuline 'naar voren gehaald', zodat je een minder hoge glucosepiek zult hebben na de maaltijd.
* Voor details [diabetesnet.com](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/).

### Sectie K

* Toont de berekende bolus. 
* Wanneer je al meer insuline aan boord (IOB) hebt dan de berekende bolus, dan zal hier alleen de ontbrekende hoeveelheid koolhydraten te zien zijn.
* Notities zullen worden geüpload naar Nightscout - afhankelijk van je instellingen voor [NS client](../Configuration/Preferences#ns-client).

### Sectie L

* Details van de bolusberekening.
* Je kunt variabelen uitschakelen die je niet wilt laten meenemen in de berekening, maar meestal zul je hier niets van aanpassen.
* Om veiligheidsredenen moet de **TT-box handmatig worden aangevinkt** als je wilt dat de bolus wordt berekend op basis van een tijdelijk streefdoel.

#### Combinaties van COB en IOB en hun betekenis

* Om veiligheidsredenen kan de IOB niet uitgevinkt worden wanneer COB is aangevinkt, omdat je het risico zou kunnen lopen dat je te veel insuline krijgt. Dit omdat AAPS de eerder afgegeven IOB dan niet zou meeneemen in de berekening.
* Wanneer je COB en IOB hebt aangevinkt, dan worden meegenomen: koolhydraten die nog niet zijn opgenomen en waarvoor nog geen insuline is afgegeven + alle insuline die eerder is afgegeven (dit zijn zowel tijdelijke basaalstanden als SMB).
* Wanneer je IOB aanvinkt en COB niet, dan loop je het risico om te weinig insuline te krijgen. Want AAPS houdt wel rekening met insuline die eerder is afgegeven maar niet met koolhydraten die nog moeten worden opgenomen. Dan kun je een melding "Te weinig ... g" krijgen (ontbrekende koolhydraten).
* Wanneer je een bolus wilt geven voor **extra koolhydraten**, vlak na een maaltijdbolus (bijv. je neemt toch wél een nagerecht) dan kan het verstandig zijn om **alle vinkjes weg te halen**. Dat komt omdat er hierboven steeds wordt gesproken over 'koolhydraten die nog niet zijn opgenomen'. Zo kort na je maaltijdbolus zijn de koolhydraten van je hoofdgerecht waarschijnlijk nog niet opgenomen, en dus komt op dat moment de hoeveelheid IOB niet overeen met de hoeveelheid COB. Door alle vinkjes uit te zetten, berekent AAPS de nieuwe bolus met alleen de koolhydraten uit je nagerecht.

#### Verkeerde COB-detectie

![Langzame koolhydraat absorptie](../images/Calculator_SlowCarbAbsorbtion.png)

* Als je de waarschuwing hierboven ziet na het gebruik van de boluswizard, dan heeft AndroidAPS vastgesteld dat de berekende COB-waarde misschien onjuist is. 
* Dit betekent dat, als je weer wilt bolussen en je hebt nog COB van een vorige maaltijd, je moet uitkijken voor overdosering! 
* Zie voor meer informatie de [COB Berekening](../Usage/COB-calculation#detectie-van-verkeerde-cob-waarden) pagina.

## Insuline curve

![Insuline curve](../images/Screenshot_insulin_profile.png)

* Dit toont het activiteitsprofiel van de insuline die je hebt geselecteerd in de [configurator](../Configuration/Config-Builder#insuline). 
* De PAARSE lijn laat zien hoeveel insuline er nog over is na een injectie, je ziet hoe die steeds verder afneemt als de tijd voorbijgaat. De BLAUWE lijn laat zien hoe actief de insuline is.
* Hier zie je ook hoe lang de insuline nog doorwerkt, dat kan langer zijn dan je eerder dacht / gehoord hebt. 
* Wanneer je eerder een insulinepomp hebt gebruikt, ben je waarschijnlijk gewend om in te stellen dat de activiteit van de insuline ongeveer 3,5 uur is. 
* Alleen, wanneer je gaat loopen dan is de langere activiteit (ook al is deze activiteit maar heel weinig aan het einde) weldegelijk belangrijk om mee te laten nemen in berekeningen. Omdat al deze kleine beetjes zich gaan optellen, door de vele recursieve berekeningen die het AAPS algoritme doet.

Meer uitleg over de verschillende soorten insuline, hun werkingsprofielen en waarom dit allemaal belangrijk is, staat in dit artikel: [Understanding the New IOB Curves Based on Exponential Activity Curves](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves).

En meer hierover staat in dit uitstekende blog: [Why we are regularly wrong in the duration of insulin action (DIA) times we use, and why it matters…](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

En nog meer in: [Exponential Insulin Curves + Fiasp](http://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Pompstatus

![Pompstatus](../images/Screenshot_PumpStatus.png)

* Allerlei informatie over de pomp status. De weergegeven informatie is afhankelijk van jouw pompmodel.
* Zie de [pompen pagina](../Hardware/pumps.rst) voor details.

## Care Portal

De Careportal had dezelfde functies als wat je in Nightscout ziet wanneer je daar op het "+" symbool klikt. Je kon de Careportal gebruiken om dingen in te noteren.

### Koolhydraat-berekening bekijken

![Bekijk koolhydraten berekening op behandelings tab](../images/Screenshots_TreatCalc.png)

* Als je de [Bolus calculator](../Getting-Started/Screenshots#bolus-calculator) hebt gebruikt om insuline dosering te berekenen, kun je deze berekening later terugkijken op het tabblad Behandelingen.
* Druk simpelweg op de groene Calc link. (Afhankelijk van welke pomp je gebruikt kan het zijn dat insuline en koolhydraten op één regel worden weergegeven in Behandelingen.)

### Koolhydraten correctie

![Behandeling in 1 of 2 regels](../images/Treatment_1or2_lines.png)

De Behandelingen tab kan worden gebruikt om foutieve koolhydraat-invoer te corrigeren, bijvoorbeeld als je de hoeveelheid koolhydraten hebt onderschat, of juist minder hebt gegeten dan gepland.

1. Bekijk en onthoud de werkelijke COB en IOB op Overzichtscherm.
2. Afhankelijk van de pomp op het behandelingen-tabblad kunnen koolhydraten samen met insuline op één regel staan, of als een aparte regel (dit laatste is zo bij de DanaRS).
3. Verwijder de regel met de foutieve koolhydraten-invoer.
4. Controleer op het Overzicht scherm of de koolhydraten inderdaad zijn verwijderd, het aantal COB zou moeten zijn aangepast.
5. Doe hetzelfde voor de IOB als er slechts één regel is op het Behandelingen-tabblad voor koolhydraten en insuline.
   
   -> Als koolhydraten per ongeluk niet waren verwijderd maar je voegt vervolgens wel extra koolhydraten toe zoals uitgelegd bij 6., zal COB te hoog zijn en dat kan leiden tot een te hoge dosis insuline. Let dus op wat er gebeurt!

6. Voer de juiste hoeveelheid koolhydraten in via de koolhydraten knop op het Overzichtscherm, zorg ervoor dat je het tijdstip aanpast naar het moment dat de koolhydraten daadwerkelijk zijn gegeten.

7. Als er op jouw Behandelingen-tabblad één regel wordt gebruikt voor koolhydraten en insuline, moet je ook de hoeveelheid insuline weer toevoegen. Doe dit via de insuline knop op het Overzichtscherm en zorg er ook hierbij voor dat je het tijdstip aanpast naar het moment dat de insuline was toegediend. Controleer tenslotte op het Overzichtscherm of de IOB is meeveranderd.

## Loop, AMA / SMB

* Deze tabbladen tonen details over de berekeningen van het algoritme en waarom AAPS doet wat het doet.
* Berekeningen worden telkens gedaan als het systeem een nieuwe meting van de CGM binnenkrijgt.
* Zie voor meer details [APS sectie op de configurator pagina](../Configuration/Config-Builder#aps).

## Profiel

![Profiel](../images/Screenshots_Profile.png)

* Het profiel bevat informatie over jouw individuele diabetesinstellingen:
   
   * DIA (Duur van Insuline Activiteit)
   * KH ratio: is de koolhydraatratio - het aantal grammen koolhydraten waarvoor jij één eenheid insuline nodig hebt
   * ISF: Insuline gevoeligheidsfactor (Insulin Sensitivity Factor in het Engels)
   * Basaal
   * Streefdoel: bloedglucosewaarde waar AAPS naar moet streven

* Je kunt een [lokaal profiel](../Configuration/Config-Builder#lokaal-profiel-aanbevolen) gebruiken dat op je smartphone bewerkt kan worden, of een [Nightscout profiel](../Configuration/Config-Builder#ns-profiel) dat op je NS pagina bewerkt moet worden en daarna naar je telefoon moet worden overgebracht. 

## Behandelingen

Geschiedenis van de volgende behandelingen:

* Bolus & koolhydraten-> met optie voor het [verwijderen van items](../Getting-Started/Screenshots#koolhydraten-correctie) om foutieve informatie weg te halen
* [Vertraagde bolus](../Usage/Extended-Carbs#id1)
* Tijdelijke basaalstand (Temporary Basal Rate)
* [Tijdelijk streefdoel](../Usage/temptarget.md)
* [Profiel wissel](../Usage/Profiles.md)
* [Careportal](../Usage/CPbefore26#careportal-discontinued) - hier vind je notities terug die zijn ingevoerd via het Acties tabblad of via het notities veld in dialoogvensters

## BG bron - xDrip, Dexcom App (aangepast)...

![BG Bron tabblad - hier xDrip](../images/Screenshots_BGSource.png)

* Afhankelijk van de BG bron die je gebruikt, heeft dit tabblad de bijbehorende naam.
* Toont geschiedenis van CGM metingen en heeft de optie om foutieve metingen te verwijderen (bijv. compressie laag).

## NSClient

![NSClient](../images/Screenshots_NSClient.png)

* Hier wordt de status van de verbinding met jouw Nightscout-site weergegeven.
* De instellingen zijn te vinden in [NSClient instellingen](../Configuration/Preferences#nsclient). Je kunt het bijbehorende gedeelte openen door op het tandwiel aan de rechterbovenzijde van het scherm te klikken.
* Voor het oplossen van problemen zie deze [pagina](../Usage/Troubleshooting-NSClient.md).