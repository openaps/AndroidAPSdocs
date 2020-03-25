# xDrip+ Instellingen

Als je het nog niet had, download dan [xDrip+](https://jamorham.github.io/#xdrip-plus).

**Deze documentatie geldt alleen over de Android versie van xDrip+.** Er is ook een iOS app die xDrip heet, maar die heeft niets te maken met de originele xDrip+ app voor Android.

Voor G6-zenders met een productie datum na het najaar van 2018 (d.w.z. serie nr. beginnend met 80 of 81) kunt je de [master](https://jamorham.github.io/#xdrip-plus) versie gebruiken.

Als je een Dexcom G6 gebruikt en het serienummer van jouw sensor begint met 8G..., 8H... of 8J... gebruik dan een van de [meest recente 'nightly builds'](https://github.com/NightscoutFoundation/xDrip/releases).

Als jouw telefoon draait op Android 10 en je hebt problemen met jouw xDrip+ master-versie probeer [nightly build 2019/12/31 of later](https://github.com/NightscoutFoundation/xDrip/releases).

## Basisinstellingen voor alle CGM-systemen & FSL

* Zorg ervoor dat je de Basis URL correct instelt, inclusief **S** aan het einde van http**s**:/// (niet http:/)
   
   bijv. https://API_SECRET@jouwzelfgekozennaam.herokuapp.com/api/v1/
   
   -> Hamburger Menu (linkerbovenhoek van het beginscherm) -> Settings-> Cloud Upload-> Nightscout Sync (REST-API) > Base URL

* Deactiveer `Automatic calibration` Als de checkbox voor `Automatic calibration` is aangevinkt, activeer `Download data` eenmaal, verwijder dan de checkbox voor `Automatic calibration` en deactiveer `Download data` opnieuw, anders zullen de behandelingen (insuline & koolhydraten) twee keer worden geüpload naar Nightscout.

* Tik op `Extra Options`

* Deactiveer `Upload treatments` en `Backfill data`.
   
   **Waarschuwing: Je moet "Upload behandelingen / Upload treatments" uitschakelen in xDrip, anders kunnen de behandelingen dubbel in AAPS terecht komen, wat leidt tot foutieve COB en IOB!**

* Optie `Alert on failures` moet ook gedeactiveerd worden. Anders krijg je elke 5 minuten een alarm als je wifi/mobiel netwerk te slecht is of de server niet beschikbaar is.
   
   ![xDrip+ Basis Instellingen 1](../images/xDrip_Basic1.png)
   
   ![xDrip+ Basis Instellingen 2](../images/xDrip_Basic2.png)

* **InterApp-Settings** (Broadcast) Als je AndroidAPS gaat gebruiken dan moet je de glucosegegevens laten doorsturen van xDrip+ naar AndroidAPS. Daarvoor moet je "Local Broadcast" activeren in de Inter-App instellingen van xDrip+.

* Om de doorgestuurde waarden in AAPS te laten overeenkomen met wat je in xDrip+ ziet, moet je `Send the displayed glucose value` (Stuur de weergegeven glucose waarde door) activeren.

* Als je `Accept treatments` in xDrip+ en "Activeer locaal delen" in AndroidAPS hebt geactiveerd, dan zal xDrip+ insuline, koolhydraten en basaal informatie ontvangen van AndroidAPS en daarmee hypo's etc. beter voorspellen.
   
   ![xDrip+ Basis Instellingen 3](../images/xDrip_Basic3.png)

### Identificeer ontvanger (Identify receiver)

* Als je problemen hebt met de 'local broadcast' (AAPS ontvangt geen BG waarden van xDrip+), ga dan naar Instellingen > Inter-app instellingen > Identify receiver en voer in: `info.nightscout.androidaps`
* Let op: Auto-correct past soms de beginletter aan naar een hoofdletter. Zorg dat er **alleen kleine letters** worden gebruikt bij het intypen van `info.nightscout.androidaps` Staat er toch een hoofdletter, dan zal AAPS nog steeds geen BG waardes ontvangen van xDrip+.
   
   ![xDrip + Basic Inter-app Instellingen Ontvanger identificeren](../images/xDrip_InterApp_NS.png)

## Dexcom G6 met xDrip+

* De Dexcom G6 zender kan gelijktijdig worden gekoppeld aan de Dexcom ontvanger (of als alternatief de t:slim pomp) en een app op je telefoon.
* Als je jouw Dexcom wilt koppelen aan de xDrip+ app dan zul je dus eerst de Dexcom app moeten verwijderen (of: pas het zender-nummer in de Dexcom app aan naar een onzingetal zodat Dexcom niet probeert aan de zender te koppelen). **Je kunt de xDrip+ app en de Dexcom app niet gelijktijdig koppelen aan een zender.**
* Als je Clarity wilt gebruiken maar je wilt ook de uitgebreidere alarm-opties van xDrip+ gebruiken, dan kun je de [Aangepaste Dexcom app](../Hardware/DexcomG6#if-using-g6-with-patched-dexcom-app) op je telefoon zetten (en die verbinden met de zender) en ook de xDrip+ app op je telefoon zetten (kies als hardware data source voor 640G/Eversense). Op deze manier stuurt de aangepaste Dexcom app jouw waardes lokaal door "local broadcast" naar xDrip+.

### xDrip+ versie afhankelijk van G6-zendernummer

* Voor G6-zenders met een productie datum na het najaar van 2018 (d.w.z. serie nr. beginnend met 80 of 81) kunt je de [master](https://jamorham.github.io/#xdrip-plus) versie gebruiken. 
* Als je een Dexcom G6 gebruikt en het serienummer van jouw sensor begint met 8G, 8H of 8J probeer de ['nightly build' van 2019/07/28 of later](https://github.com/NightscoutFoundation/xDrip/releases).

### Specifieke instellingen voor Dexcom

* Open G5/G6 Debug Instellingen -> Hamburger Menu (linkerbovenhoek van het beginscherm) -> Instellingen -> G5/G6 Debug Instellingen ![Open xDrip+ instellingen](../images/xDrip_Dexcom_SettingsCall.png)

* De volgende opties inschakelen:
   
   * `Use the OB1 Collector`
   * `Native Algorithm` (belangrijk als je SMB wilt gebruiken)
   * `G6 support`
   * `Allow OB1 unbonding`
   * `Allow OB1 initiate bonding`
* Alle andere opties moeten worden uitgeschakeld
* Batterij waarschuwingsniveau aanpassen naar 280 (onderaan de G5/G6 Debug instellingen)
   
   ![xDrip+ G5/G6 Debug instellingen](../images/xDrip_Dexcom_DebugSettings.png)

### Pre-emptive restarts niet aanbevolen

**With Dexcom transmitters who's serial no. dat begint met 8G, 8H of 8J dan zullen 'preemptive restarts' (automatische herstarts) niet werken en deze optie kan de zender volledig stukmaken!**

Het wordt sowieso niet aangeraden om de automatische herstart optie voor Dexcom G6 sensoren (`pre-emptive restarts`) te gebruiken, omdat dit kan leiden tot een "sprong” in de BG waarden op dag 9, wanneer hij de herstart uitvoert.

![xDrip+ sprong na automatische herstart](../images/xDrip_Dexcom_PreemptiveJump.png)

Het gebruik van de is G6 misschien wat complexer dan het op het eerste gezicht lijkt. Om de G6 veilig te gebruiken, moet je rekening houden met het volgende:

* Wanneer je het "Native" algoritme gebruikt in combinatie met de kalibratiecode in xDrip of Spike, is het veiligste om de optie "Pre-emptive restart" (voortijdige herstart) niet te gebruiken.
* Als je er wel voor kiest om Pre-emptive restarts te gebruiken, zorg dan dat je de sensor start op een moment van de dag dat je tijd kunt vrijmaken om te zien wat er gebeurt tijdens de herstart. Zodat je kunt kalibreren als je ziet dat dat nodig is (je ziet een 'sprong' in je glucosegrafiek). 
* Als je jouw sensoren herstart, dan zul je dat moeten doen A) zonder gebruik te maken van de kalibratiecode voor de veiligste resultaten op dagen 11 en 12, of B) ervoor te zorgen dat je jouw sensorgrafiek in de gaten kunt houden en bereid bent om te kalibreren.
* Het zogenaamde "Pre-soaking" (de sensor alvast inbrengen, waarna je nog wacht met starten) van de G6 met kalibratiecode zal hoogstwaarschijnlijk leiden tot onnauwkeurigheden in je glucosewaardes na starten. Omdat het algoritme van de G6 rekent op weefselbeschadiging na inbrengen, terwijl je met Pre-soaken niet dezelfde mate van weefselbeschadiging zult hebben op het moment dat je de sensor start. Wanneer je Pre-soakt is het waarschijnlijk het beste om de sensor te kalibreren.
* Als je om welke reden ook niet in staat bent om op te letten wat er gebeurt tijdens een herstart / na een Pre-soak, dan kun je beter de kalibratiecode niet gebruiken, en jouw sensor gebruiken met kalibraties, net als bij de G5.

Lees het [volledige artikel](http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) (Engelstalig) van Tim Street voor meer achtergrondinformatie en de redenen achter deze aanbevelingen.

### G6-zender voor de eerste keer verbinden

**Voor de tweede en volgende zender zie [Zender resetten](../Configuration/xdrip#extend-transmitter-life) hieronder.**

Voor G6-zenders met een productie datum na het najaar van 2018 (d.w.z. serie nr. beginnend met 80 of 81) kun je de [master](https://jamorham.github.io/#xdrip-plus) versie gebruiken.

Als je een Dexcom G6 gebruikt en het serienummer van jouw sensor begint met 8G, 8H of 8J probeer de ['nightly build' van 2019/07/28 of later](https://github.com/NightscoutFoundation/xDrip/releases).

* Zet originele Dexcom ontvanger uit (indien je die gebruikt).
* Houdt het rode xDrip+ bloeddruppel-icoon op het hoofdscherm lang ingedrukt om de `Source Wizard knop` in beeld te krijgen.
* Gebruik de Source Wizard knop, om de standaardinstellingen in te stellen, inclusief OB1 & Native Mode 
   * Deze wizard helpt je stap voor stap door de initiële instellingen.
   * Het serienummer van je zender heb je hierbij nodig

* Het serienummer van een nieuwe zender vind je op de doos van de zender, en ook op de achterkant van de zender zelf. Let erop dat je een 0 (nul) en O (hoofdletter o) niet met elkaar verwart.
   
   ![xDrip+ Dexcom zender-serienummer](../images/xDrip_Dexcom_TransmitterSN.png)

* Als je van plan was je sensor te vervangen, doe dit dan nu.

* Plaats zender in de sensor
* Start geen nieuwe sensor voordat de volgende informatie wordt weergegeven in Classic Status Page-> G5/G6 status-> PhoneServiceState:
   
   * Zendernummer beginnend met 80 of 81: "Got data hh:mm" (bijvoorbeeld "Got data 19:04")
   * Zendernummer beginnnend met 8G, 8H of 8J: "Got glucose hh:mm" (bijvoorbeeld "Got glucose 19:04") of "Got no raw hh:mm" (bijvoorbeeld "Got no raw 19:04")
   
   ![xDrip+ PhoneServiceState](../images/xDrip_Dexcom_PhoneServiceState.png)

* Start sensor (alleen indien je zojuist een nieuwe sensor hebt geplaatst)
   
   -> Ergens onderaan het scherm hoort na enkele minuten `Warm Up x,x hours left` te verschijnen.

-> Als je zendernummer niet begint met 8G, 8H of 8J én hij laat na een paar minuten nog geen tijdsspecificatie zien, dan moet je de sensor stoppen en weer starten.

* Indien je de sensor niet zojuist hebt vervangen: ga naar het Hamburgermenu > System status > klik op de knop 'Restart collector'.
* Zet de originele Dexcom ontvanger (indien je die gebruikt) niet terug aan voordat xDrip+ de eerste meetwaardes toont.
* Houdt het rode xDrip+ bloeddruppel-icoon op het hoofdscherm lang ingedrukt om de `Source Wizard knop` weer te laten verdwijnen.
   
   ![xDrip+ Dexcom zender 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ Dexcom zender 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ Dexcom zender 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ Dexcom zender 4](../images/xDrip_Dexcom_Transmitter04.png)

### Zender Batterij Status

* Via het Hamburgermenu > System Status kun je de status van de zender batterij (Transmitter battery) zien.
* Veeg (swipe) één keer naar links om het tweede scherm te zien.![xDrip+ eerste zender 4](../images/xDrip_Dexcom_Battery.png)

* De exacte waarden wanneer de zender ermee stopt omdat zijn batterij leeg is, is niet precies te zeggen. De volgende getallen komen van een paar gebruikers die hun waardes doorgaven vlak voordat hun zender ermee stopte:
   
   * Gebruiker 1: Transmitter days (Zender dagen): 151 / Voltage A: 297 / Voltage B: 260 / Resistance (Weerstand): 2391
   * Gebruiker 2: Transmitter days (Zender dagen): 249 / Voltage A: 275 (op het moment van stoppen)

### Zender resetten

* So far life cannot be extended for transmitters who's serial no. begint met 8G, 8H of 8J. Onderstaande instructies werken dus helaas niet voor deze zenders, wel voor oudere modellen. Same is true for transmitters with serial no. starting with 81 and firmware 1.6.5.**27** (see xDrip+ System Status - G5/G6 status as shown in [screenshot above](../Configuration/xdrip#transmitter-battery-status)).
* Het wordt aangeraden om de zender te resetten vóórdat hij 100 dagen in gebruik is. Dit om problemen met het starten van sensoren te voorkomen.
* Use of transmitters serial no. starting with 81 and firmware 1.6.5.**27** beyond day 100 is only possible if 'engineering mode' is turned on and 'native mode' is deactivated (hamburger menu -> settings -> G5/G6 debug settings -> native algorithm) because a transmitter hard reset is NOT possible.
* Running sensor session will be stopped when extending transmitter life. So, extend before sensor change or be aware that there will be a new 2 h warm-up phase.
* Stop sensor manually via hamburger menu.
* Switch to the `engineering mode`: 
   * tap on the character on the right of the xDrip+ start screen that represents a syringe
   * then tap on the microphone icon in the lower right corner
   * In the text box that opens type "enable engineering mode" 
   * click "Done"
   * If Google Speak engine is enabled, you can also speak the voice command: "enable engineering mode". 
* Go to the G5 debug settings and make sure `Use the OB1 collector` is enabled.
* Use the voice command: “hard reset transmitter”
* The voice command will be executed with the next data receipt of the transmitter
* Look at the system status (Hamburger menu -> system status) and see what happens
* After approx. 10 min. you can switch to 'Classic Status Page' (swipe right) and click 'Restart collector'. This will set sensor days to 0 without the need to start a new sensor.
* Alternative: If you see a message "Phone Service State: Hard Reset maybe failed" on second system status screen just start the sensor and this message should go away.
   
   ![xDrip+ Hard Reset maybe failed](../images/xDrip_HardResetMaybeFailed.png)

* Transmitter days will be set to 0 after successful extension and start of sensor.

### Zender vervangen

Voor G6-zenders met een productie datum na het najaar van 2018 (d.w.z. serie nr. beginnend met 80 of 81) kunt je de [master](https://jamorham.github.io/#xdrip-plus) versie gebruiken.

Als je een Dexcom G6 gebruikt en het serienummer van jouw sensor is starting with 8G, 8H or 8Juse one of the [latest nightly builds](https://github.com/NightscoutFoundation/xDrip/releases).

* Zet originele Dexcom ontvanger uit (indien je die gebruikt).
* Stop sensor (alleen als je van plan was om je sensor te vervangen)
   
   Controleer of de zender ook echt is gestopt:
   
   Op het tweede "G5/G6 Status" scherm, kijk naar `Queue Items` ongeveer halverwege het scherm - daar moet iets staan dat lijkt op `(1) Stop Sensor`
   
   Wacht tot deze melding verdwijnt - dit gebeurt meestal binnen een paar minuten. Sensor Status moet "Stopped" (Gestopt) zijn, zie screenshot.
   
   -> Om de zender eruit te halen terwijl je de zender op je huid laat zitten, zie deze video <https://youtu.be/AAhBVsc6NZo>.
   
   ![xDrip+ Stop Dexcom Sensor 1](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Stop Dexcom Sensor 2](../images/xDrip_Dexcom_StopSensor2.png)

* Forget device in xDrip+ system status AND in smartphone’s BT settings (Will be shown as Dexcom?? De Dexcom zender staat als Dexcom?? bij jouw gekoppelde Bluetooth apparaten, waarbij de ?? de laatste twee cijfers/letters zijn van jouw Dexcom zender.
   
   ![xDrip+ Vergeet apparaat](../images/xDrip_Dexcom_ForgetDevice.png)

* Verwijder zender (en als je de sensor ging vervangen, ook de sensor)

* Zorg dat de oude zender niet weer probeert te koppelen. Een blikken trommeltje of magnetron is een perfecte 'kooi van Faraday' hiervoor, maar zorg dat niemand de magnetron aanzet met jouw zender erin! Je kunt de zender ook meegeven aan een gezinslid die hem meeneemt naar school/werk of ergens anders ver weg.
* Houdt het rode xDrip+ bloeddruppel-icoon op het hoofdscherm lang ingedrukt om de `Source Wizard knop` in beeld te krijgen.
* Gebruik de Source Wizard knop, om de standaardinstellingen in te stellen, inclusief OB1 & Native Mode 
   * Deze wizard helpt je stap voor stap door de initiële instellingen.
   * Het serienummer van je zender heb je hierbij nodig.
* Zet serienummer van nieuwe zender in. Let erop dat je een 0 (nul) en O (hoofdletter o) niet met elkaar verwart.
* Als je ook je sensor ging vervangen, plaatst dan nu de nieuwe sensor.
* Klik de zender in de sensor maar **start de sensor nog niet!**
* Nieuwe "Firefly" zenders (serienr. starting with 8G, 8H or 8J) can only be used in native mode.
* De volgende opties mogen niet worden geactiveerd voor nieuwe "Firefly" zender (serienr. starting with 8G, 8H or 8J):
   
   * Preemptive restart (Vroegtijdig herstarten) ->uitschakelen!
   * Restart sensor (Sensor herstarten) ->uitschakelen!
   * Fallback to xDrip+ (disable!)
   
   ![Instellingen voor Firefly zenders](../images/xDrip_Dexcom_FireflySettings.png)

* Check in Classic Status Page -> G5/G6 status -> PhoneServiceState if one of the following information is displayed:
   
   * Zendernummer beginnend met 80 of 81: "Got data hh:mm" (bijvoorbeeld "Got data 19:04")
   * Zendernummer beginnnend met 8G, 8H of 8J: "Got glucose hh:mm" (bijvoorbeeld "Got glucose 19:04") of "Got no raw hh:mm" (bijvoorbeeld "Got no raw 19:04")
   
   ![xDrip+ PhoneServiceState](../images/xDrip_Dexcom_PhoneServiceState.png)

* Wacht 15 minuten, omdat de zender meerdere malen moet communiceren met xDrip voordat de nieuwe sensor wordt gestart. De batterij gegevens worden weergegeven onder Firmware informatie.
   
   ![Batterijgegevens voor Firefly-zender](../images/xDrip_Dexcom_FireflyBattery.png)

* Start de sensor en doe GEEN BACKDATE (dateer niet in het verleden)! Kies altijd "Yes, today!" (Ja, vandaag!)

* Indien je de sensor niet zojuist hebt vervangen: ga naar het Hamburgermenu > System status > klik op de knop 'Restart collector'.
* Zet de originele Dexcom ontvanger (indien je die gebruikt) niet terug aan voordat xDrip+ de eerste meetwaardes toont.
* Houdt het rode xDrip+ bloeddruppel-icoon op het hoofdscherm lang ingedrukt om de `Source Wizard knop` weer te laten verdwijnen.
   
   ![xDrip+ Dexcom zender 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ Dexcom zender 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ Dexcom zender 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ Dexcom zender 4](../images/xDrip_Dexcom_Transmitter04.png)

### Sensor vervangen

* Zet originele Dexcom ontvanger uit (indien je die gebruikt).
* Stop sensor indien hij nog liep
   
   Controleer of de zender ook echt is gestopt:
   
   Op het tweede "G5/G6 Status" scherm, kijk naar `Queue Items` ongeveer halverwege het scherm - daar moet iets staan dat lijkt op `(1) Stop Sensor`
   
   Wacht tot deze melding verdwijnt - dit gebeurt meestal binnen een paar minuten.
   
   ![xDrip+ Stop Dexcom Sensor 1](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Stop Dexcom Sensor 2](../images/xDrip_Dexcom_StopSensor2.png)

* Maak contacten (op de achterkant van zender) schoon met alcohol en laat drogen aan de lucht.

* In het geval je deze functie gebruikt schakel je `Restart Sensor` en `Preemptive Restarts` (Hamburger menu -> Settings-> G5/G6 Debug Settings) allebei uit. Als je deze stap overslaat en deze functies ingeschakeld laat staan, zal de nieuwe sensor niet goed beginnen.
   
   ![xDrip+ automatische herstart](../images/xDrip_Dexcom_Restart.png)

* Start Sensor
   
   ** Voor nieuwe Firefly-zenders ** (serienr. starting with 8G, 8H or 8J) **it is mandatory, for all other transmitters it is recommended to wait approx. 15 minutes between stopping and starting the new sensor (until `Sensor Status: Stopped` is shown on second system status screen). en geef GEEN datum in het verleden op!**

* Stel tijd in dat de sensor was ingebracht (time inserted)
   
   * Om G6 Native mode te gebruiken moet je wachten tot het 2 uur opwarmen voorbij is (dat wil zeggen je moet invullen dat de sensor nu is ingebracht: Now inserted).
   * Als je het xDrip+ algoritme gebruikt, kun je een tijdstip ingeven van meer dan 2 uur geleden om de opwarmtijd over te slaan. Metingen kunnen daardoor zeer onbetrouwbaar worden. Daarom wordt dit niet aanbevolen.
* Voer Sensor code in (die staat op de papieren achterkant van de sensorverpakking) 
   * Bewaar deze code voor als je hem later nog nodig hebt (bijv. nieuwe start van de sensor nadat de zender moest worden verwijderd)
   * De code kun je ook terugvinden in de [xDrip+ logs](../Configuration/xdrip#retrieve-sensor-code): Klik op 3 stipjes in rechterbovenhoek van xDrip+ homescreen en kies `View Events Log`.
* Als je de G6 in "Native mode" gebruikt, hoef je geen kalibratie in te voeren. xDrip+ zal de automatisch waardes gaan weergeven na de 2 uur opwarmtijd.
* Zet de originele Dexcom ontvanger (indien je die gebruikt) niet terug aan voordat xDrip+ de eerste meetwaardes toont.
   
   ![xDrip+ Start Dexcom Sensor 1](../images/xDrip_Dexcom_SensorStart01.png)
   
   ![xDrip+ Start Dexcom Sensor 2](../images/xDrip_Dexcom_SensorStart02.png)

### Sensorcode terugvinden

* In de master versie van 2019/05/18 en in de laatste 'nightly builds' versies wordt de sensor code weergegeven in de Systeemstatus (via Hamburger menu linksboven op het homescreen).
* Veeg (swipe) één keer naar links om het juiste scherm te zien.
   
   ![xDrip+ Haal Dexcom Sensor Code op2](../images/xDrip_Dexcom_SensorCode2.png)

* De Dexcom sensor code kun je ook terugvinden in xDrip+ logs (geld ook voor oudere versies van xDrip+).

* Tik op de 3 stipjes in rechterbovenhoek van het beginscherm
* Selecteer `View Events Log` en zoek naar "code". Gebruik eventueel de zoekfunctie (via het vergrootglas-icoontje).
   
   ![xDrip+ Haal Dexcom Sensor Code op](../images/xDrip_Dexcom_SensorCode.png)

## Probleemoplossing Dexcom G5/G6 en xDrip+

### Probleem bij verbinden met de zender

* De zender moet worden weergegeven in de bluetooth-instellingen van jouw smartphone. Ga naar Instellingen-> Bluetooth-> en kijk bij Gekoppelde apparaten
* Zender wordt getoond als Dexcom?? Waarbij de ?? de laatste twee cijfers/letters zijn van jouw Dexcom zender. (bijvoorbeeld DexcomHY).
* Open de Systeemstatus in xDrip + (hamburgermenu aan de linkerzijde van het home-scherm).
* Controleer of de zender op de eerste statuspagina 'classic status page' (klassieke statuspagina) wordt afgebeeld.
* Zo niet: Verwijder apparaat uit de bluetooth-instellingen van je smartphone en herstart de collector (knop Restart Collector).
* Wacht ongeveer 5 minuten totdat de Dexcom zender automatisch opnieuw verbindt.

### Probleem bij het starten van nieuwe sensor

Houd er rekening mee dat de volgende methode waarschijnlijk niet werkt als jouw Dexcom G6 zender serienummer is starting with 8G, 8H or 8J.

* In Systeem status wordt sensor weergegeven als "FAILED: Sensor failed start"
* Sensor stoppen
* Herstart je telefoon
* Start sensor met code 0000 (viermaal nul)
* Wacht 15 minuten
* Sensor stoppen
* Start sensor met "echte" code (staat op de papieren achterlaag van de pleister)

Controleer in xDrip+ logs of xDrip+ begint met het tellen van de duur "Duration: 1 minute" (en ga zo maar door). Only in the xDrip+ logs you can detect at an early stage whether xdrip+ has stopped a sensor. De nieuwste status wordt niet altijd correct weergegeven onderaan het startscherm.

## Freestyle Libre met xDrip+

### Specifieke instellingen voor Libre

* Open Bluetooth-instellingen in xDrip+ -> Hamburger Menu (linkerbovenhoek van beginscherm) -> Settings -> scroll naar beneden -> Less common settings -> Bluetooth Settings
   
   ![xDrip+ Libre Bluetooth-instellingen 1](../images/xDrip_Libre_BTSettings1.png)

* De volgende opties inschakelen:
   
   * `Turn Bluetooth on` 
   * `Use scanning`
   * `Always discover services`

* Alle andere opties moeten worden uitgeschakeld
   
   ![xDrip+ Libre Bluetooth-instellingen 2](../images/xDrip_Libre_BTSettings2.png)

### Verbind Libre zender & start sensor

![xDrip+ Start Libre Transmitter & Sensor 1](../images/xDrip_Libre_Transmitter01.png)

![xDrip+ Start Libre Transmitter & Sensor 2](../images/xDrip_Libre_Transmitter02.png)

![xDrip+ Start Libre Transmitter & Sensor 3](../images/xDrip_Libre_Transmitter03.png)