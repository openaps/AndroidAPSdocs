# xDrip+ Instellingen

Als je het nog niet had, download dan [xDrip+](https://github.com/NightscoutFoundation/xDrip)

Voor G6 zenders die na herfst/eind 2018 zijn geproduceerd, zorg dat je een van de nieuwste ['nightly build' xDrip+](https://github.com/NightscoutFoundation/xDrip/releases) versies hebt. Deze zenders hebben een nieuwe firmware en de nieuwste stabiele versie van xDrip+ (2019/01/10) werkt daar niet mee.

**Op dit moment zijn er problemen met de zogenaamde 'nightly builds' versies die na 2019/05/21 die steeds om G6 kalibratie vragen. Mocht je hier last van hebben, probeer dan een versie van voor die datum.**

## Basisinstellingen voor alle CGM-systemen & FGM

* Zorg ervoor dat je de Basis URL correct instelt, inclusief **S** aan het einde van http**s**:/// (niet http:/)
   
   bijv. https://API_SECRET@jouwzelfgekozennaam.herokuapp.com/api/v1/
   
   -> Hamburger Menu (linkerbovenhoek van het beginscherm) -> Settings-> Cloud Upload-> Nightscout Sync (REST-API) > Base URL

* Deactiveer `Automatic calibration` Als de checkbox voor `Automatic calibration` is aangevinkt, activeer `Download data` eenmaal, verwijder dan de checkbox voor `Automatic calibration` en deactiveer `Download data` opnieuw, anders zullen de behandelingen (insuline & koolhydraten) twee keer worden geüpload naar Nightscout.

* Tik op `Extra Options`
* Deactiveer `Upload treatments` en `Backfill data`
* Optie `Alert on failures` moet ook gedeactiveerd worden. Anders krijg je elke 5 minuten een alarm als je wifi/mobiel netwerk te slecht is of de server niet beschikbaar is.
   
   ![xDrip+ Basis Instellingen 1](../images/xDrip_Basic1.png)
   
   ![xDrip+ Basis Instellingen 2](../images/xDrip_Basic2.png)

* **InterApp-Settings** (Broadcast) Als je AndroidAPS gaat gebruiken dan moet je de glucosegegevens laten doorsturen van xDrip+ naar AndroidAPS. Daarvoor moet je "Local Broadcast" activeren in de Inter-App instellingen van xDrip+.

* Om de doorgestuurde waarden in AAPS te laten overeenkomen met wat je in xDrip+ ziet, moet je `Send the displayed glucose value` (Stuur de weergegeven glucose waarde door) activeren.
* Als je `Accept treatments` in xDrip+ en "Activeer locaal delen" in AndroidAPS hebt geactiveerd, dan zal xDrip+ insuline, koolhydraten en basaal informatie ontvangen van AndroidAPS en daarmee hypo's etc. beter voorspellen.
   
   ![xDrip+ Basis Instellingen 3](../images/xDrip_Basic3.png)

## Dexcom G6 met xDrip+

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

Het wordt aangeraden om de automatische herstart optie van Dexcom sensoren (`pre-emptive restarts`) niet te gebruiken, omdat dit kan leiden tot een "sprong” in de BG waarden op dag 9, wanneer hij de herstart uitvoert.

![xDrip+ sprong na automatische herstart](../images/xDrip_Dexcom_PreemptiveJump.png)

Het gebruik van de is G6 misschien wat complexer dan het op het eerste gezicht lijkt. Om de G6 veilig te gebruiken, moet je rekening houden met het volgende:

* Wanneer je het "Native" algoritme gebruikt in combinatie met de kalibratiecode in xDrip of Spike, is het veiligste om de optie "Pre-emptive restart" (voortijdige herstart) niet te gebruiken.
* Als je er wel voor kiest om Pre-emptive restarts te gebruiken, zorg dan dat je de sensor start op een moment van de dag dat je tijd kunt vrijmaken om te zien wat er gebeurt tijdens de herstart. Zodat je kunt kalibreren als je ziet dat dat nodig is (je ziet een 'sprong' in je glucosegrafiek). 
* Als je jouw sensoren herstart, dan zul je dat moeten doen A) zonder gebruik te maken van de kalibratiecode voor de veiligste resultaten op dagen 11 en 12, of B) ervoor te zorgen dat je jouw sensorgrafiek in de gaten kunt houden en bereid bent om te kalibreren.
* Het zogenaamde "Pre-soaking" (de sensor alvast inbrengen, waarna je nog wacht met starten) van de G6 met kalibratiecode zal hoogstwaarschijnlijk leiden tot onnauwkeurigheden in je glucosewaardes na starten. Omdat het algoritme van de G6 rekent op weefselbeschadiging na inbrengen, terwijl je met Pre-soaken niet dezelfde mate van weefselbeschadiging zult hebben op het moment dat je de sensor start. Wanneer je Pre-soakt is het waarschijnlijk het beste om de sensor te kalibreren.
* Als je om welke reden ook niet in staat bent om op te letten wat er gebeurt tijdens een herstart / na een Pre-soak, dan kun je beter de kalibratiecode niet gebruiken, en jouw sensor gebruiken met kalibraties, net als bij de G5.

Lees het [volledige artikel](http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) (Engelstalig) van Tim Street voor meer achtergrondinformatie en de redenen achter deze aanbevelingen.

### G6-zender voor de eerste keer verbinden

**Voor het resetten van een zender zie [Zender resetten](../Configuration/xdrip#extend-transmitter-life) verderop. Verderop staat ook beschreven hoe je een zender moet vervangen.**

* Voor G6 zenders die na herfst/eind 2018 zijn geproduceerd, zorg dat je een van de nieuwste ['nightly build' xDrip+](https://github.com/NightscoutFoundation/xDrip/releases) versies hebt. Deze zenders hebben een nieuwe firmware en de nieuwste stabiele versie van xDrip+ (2019/01/10) werkt daar niet mee.
* Zet originele Dexcom ontvanger uit (indien je die gebruikt).
* Houdt het rode xDrip+ bloeddruppel-icoon op het hoofdscherm lang ingedrukt om de `Source Wizard knop` in beeld te krijgen.
* Gebruik de Source Wizard knop, om de standaardinstellingen in te stellen, inclusief OB1 & Native Mode 
   * Deze wizard helpt je stap voor stap door de initiële instellingen.
   * Het serienummer van je zender heb je hierbij nodig

* Het serienummer van een nieuwe zender vind je op de doos van de zender, en ook op de achterkant van de zender zelf.
   
   ![xDrip+ Dexcom zender-serienummer](../images/xDrip_Dexcom_TransmitterSN.png)

* Als je van plan was je sensor te vervangen, doe dit dan nu.

* Plaats zender in de sensor
* Start sensor (alleen indien je hem net hebt vervangen) -> Ergens onderaan het scherm hoort nu `Warm Up x,x hours left` te verschijnen. -> Als hij na een paar minuten nog geen tijdsspecificatie laat zien, moet je de sensor stoppen en weer starten.
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

* De exacte waarden wanneer de zender ermee stopt omdat zijn batterij leeg is, is niet precies te zeggen. Iemand heeft de volgende informatie online geplaatst nadat zijn zender ermee stopte: Transmitter days: 151 Voltage A: 297 Voltage B: 260 Resistance: 2391

### Zender resetten

* De actieve sensor sessie zal worden gestopt bij het resetten van de zender. Dat betekent dat je daarna weer de 2 uur opwarm-fase zult moeten uitzitten. Plan je zender reset dus gelijktijdig met een sensorwissel, of doe het op een moment dat het geen probleem is om 2 uur geen gegevens te hebben.
* Schakel de `engineering mode` in: 
   * tik op het injectiespuit-icoontje aan de rechterkant van het xDrip+ startscherm
   * houdt het microfoon-icoontje rechtsonder lang ingedrukt
   * In het tekstveld typ je in "enable engineering mode" (zonder de aanhalingstekens) 
   * klik op "OK"
   * Als je Google Speak engine hebt ingeschakeld, dan kun je ook kort op het microfoon-icoontje tikken en daarna de opdracht inspreken: "enable engineering mode". Het liefst in accentloos Engels;) 
* Ga naar de G5 debug instellingen en zorg dat `OB1 collector` ingeschakeld is.
* Geef via het microfoon-icoontje weer de spraakopdracht (op dezelfde manier als hierboven): “hard reset transmitter”
* De opdracht om de zender te resetten zal worden verstuurd bij de eerstvolgende keer dat jouw telefoon contact heeft met de zender
* Kijk vervolgens naar de systeemstatus (Hamburger menu > system status) en zie wat er gebeurt. Het kan even duren voordat de zender heeft terug gecommuniceerd naar je telefoon dat hij succesvol is gereset.
* Als je een bericht ziet "Phone Service State: Hard Reset maybe failed" op het tweede systeemstatusscherm, start dan gewoon de sensor en dit bericht zou moeten verdwijnen.
   
   ![xDrip+ Hard Reset mogelijk mislukt](../images/xDrip_HardResetMaybeFailed.png)

* Transmitter days (ouderdom zender, in dagen) zal worden ingesteld op 0 nadat je succesvol de zender hebt gereset en weer een sensor hebt gestart.

### Zender vervangen

Voor G6 zenders die na herfst/eind 2018 zijn geproduceerd, zorg dat je een van de nieuwste ['nightly build' xDrip+](https://github.com/NightscoutFoundation/xDrip/releases) versies hebt. Deze zenders hebben een nieuwe firmware en de nieuwste stabiele versie van xDrip+ (2019/01/10) werkt daar niet mee.

* Zet originele Dexcom ontvanger uit (indien je die gebruikt).
* Stop sensor (alleen als je van plan was om je sensor te vervangen)
   
   Controleer of de zender ook echt is gestopt:
   
   Op het tweede "G5/G6 Status" scherm, kijk naar `Queue Items` ongeveer halverwege het scherm - daar moet iets staan dat lijkt op `(1) Stop Sensor`
   
   Wacht tot deze melding verdwijnt - dit gebeurt meestal binnen een paar minuten.
   
   -> Om de zender eruit te halen terwijl je de zender op je huid laat zitten, zie deze video <https://youtu.be/AAhBVsc6NZo>.
   
   ![xDrip+ Stop Dexcom Sensor 1](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Stop Dexcom Sensor 2](../images/xDrip_Dexcom_StopSensor2.png)

* Ga naar het eerste System Status scherm en tik op <0>Forget Device<0> (Apparaat vergeten)
   
   ![xDrip+ Vergeet apparaat](../images/xDrip_Dexcom_ForgetDevice.png)

* Ga naar de Bluetooth instellingen van jouw telefoon en selecteer de Dexcom zender (hij heet DexcomXX, waarbij XX de laatste 2 tekens van het zender-serienummer zijn). Kies ervoor om de Dexcom zender te vergeten, hij staat daarna niet meer tussen jouw gekoppelde apparaten.

* Verwijder zender (en als je de sensor ging vervangen, ook de sensor)
* Houdt het rode xDrip+ bloeddruppel-icoon op het hoofdscherm lang ingedrukt om de `Source Wizard knop` in beeld te krijgen.
* Gebruik de Source Wizard knop, om de standaardinstellingen in te stellen, inclusief OB1 & Native Mode 
   * Deze wizard helpt je stap voor stap door de initiële instellingen.
   * Het serienummer van je zender heb je hierbij nodig.
* Zet serienummer van nieuwe zender in.
* Als je ook je sensor ging vervangen, plaatst dan nu de nieuwe sensor.
* Plaats zender in de sensor
* Start sensor (alleen indien je zojuist een nieuwe sensor hebt geplaatst)
   
   **Het wordt aanbevolen om 15 minuten te wachten tussen het stoppen en starten van de nieuwe sensor (tot `Sensor Status: Stopped` wordt weergegeven op het tweede System Status scherm).**

* Indien je de sensor niet zojuist hebt vervangen: ga naar System Status en klik op de knop 'Restart collector'.

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
   
   **Het wordt aanbevolen om 15 minuten te wachten tussen het stoppen en starten van de nieuwe sensor (tot `Sensor Status: Stopped` wordt weergegeven op het tweede System Status scherm).**

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

* In de laatste 'nightly builds' versie wordt de sensor code weergegeven in de Systeemstatus (via Hamburger menu linksboven op het homescreen).
* Veeg (swipe) één keer naar links om het juiste scherm te zien.
   
   ![xDrip+ Haal Dexcom Sensor Code op2](../images/xDrip_Dexcom_SensorCode2.png)

* De Dexcom sensor code kun je ook terugvinden in xDrip+ logs (geld ook voor oudere versies van xDrip+).

* Tik op de 3 stipjes in rechterbovenhoek van het beginscherm
* Selecteer `View Events Log` en zoek naar "code". Gebruik eventueel de zoekfunctie (via het vergrootglas-icoontje).
   
   ![xDrip+ Haal Dexcom Sensor Code op](../images/xDrip_Dexcom_SensorCode.png)

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