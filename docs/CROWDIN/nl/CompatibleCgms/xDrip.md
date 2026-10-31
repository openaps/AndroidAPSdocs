# xDrip-instellingen

Als dat nog niet gedaan is: download en installeer de nieuwste xDrip-versie van de [xDrip releases-pagina](https://github.com/NightscoutFoundation/xDrip/releases).

Zet batterijoptimalisatie uit en sta activiteit op de achtergrond toe voor de xDrip-app.

## Basisinstellingen voor alle CGM-systemen & FSL

### Nightscout-upload uitzetten

Laat geen andere app gegevens (bloedglucose en behandelingen) naar Nightscout uploaden.

→ Hamburger Menu (1) → Settings (2) → Cloud Upload (3) -> Nightscout Sync (REST-API)(4) → zet `Enabled` **UIT** (5)

![xDrip basisinstellingen 1](../images/xDrip_Basic1.png)

#### Automatische kalibratie en behandelingen uitzetten

Zorg dat `Automatic Calibration` (7) uit staat. Is het vinkje bij `Automatic Calibration` aangezet? Zet dan één keer `Download treatments` (6) aan, haal daarna het vinkje bij `Automatic Calibration` weg en zet `Download treatments` weer uit.

![xDrip basisinstellingen 2](../images/xDrip_Basic2.png)

Tik op `Extra Options`(8)

    {admonition} Veiligheidswaarschuwing
    :class: warning
    Je moet "Upload treatments" in xDrip uitzetten. Anders kunnen behandelingen dubbel in AAPS komen. Dat geeft een verkeerde COB en IOB.

Zet `Upload treatments`(9) uit en zorg dat je `Back-fill data` (11) **NIET** gebruikt.

Ook de optie `Alert on failures` moet uit staan (10). Anders krijg je elke 5 minuten een alarm bij problemen met wifi of het mobiele netwerk, of als de server niet beschikbaar is.

![xDrip basisinstellingen 3](../images/xDrip_Basic3.png)

### **Inter-app Settings** (Broadcast)

Als je AAPS gaat gebruiken en de gegevens naar bijvoorbeeld AAPS moeten worden doorgestuurd, moet je in xDrip broadcasting aanzetten in Inter-App settings.

→ Hamburger Menu (1) → Settings (2) → Inter-app settings (3) → Broadcast locally **AAN** (4)

Zet `Send the displayed glucose value` (5) aan. Dan zijn de waarden in AAPS hetzelfde als in xDrip.

Zet Compatible Broadcast aan (6).

![xDrip basisinstellingen 4](../images/xDrip_Basic4.png)

Heb je ook `Accept treatments` in xDrip aangezet en `Enable broadcasts to xDrip` (Activeer uitzendingen naar xDrip+) in de xDrip-plugin van AAPS? Dan krijgt xDrip informatie over insuline, koolhydraten en basaal van AAPS.

Zet je `Accept Calibrations` aan, dan gebruikt xDrip de kalibraties uit AAPS. Wees voorzichtig als je deze functie gebruikt met Dexcom-sensoren: lees eerst [dit](https://navid200.github.io/xDrip/docs/Calibrate-G6.html).

Vergeet niet Import Sounds uit te zetten. Anders maakt xDrip een geluid elke keer als AAPS een wijziging van basaal of profiel stuurt.

![xDrip basisinstellingen 5](../images/xDrip_Basic5.png)

(xdrip-identify-receiver)=

#### Identificeer ontvanger (Identify receiver)

- Krijgt AAPS geen BG-waarden van xDrip (probleem met local broadcast)? Ga dan naar → Hamburger Menu (1) Settings (2) → Inter-app settings (3) → Identify receiver (7) en vul `info.nightscout.androidaps` in voor de AAPS-build (gebruik je de PumpControl-build, vul dan `info.nightscout.aapspumpcontrol` in!!).
- Let op: Auto-correct past soms de beginletter aan naar een hoofdletter. Je **moet alleen kleine letters gebruiken** als je `info.nightscout.androidaps` typt (of `info.nightscout.aapspumpcontrol` voor PumpControl). Met een hoofdletter I krijgt de app geen BG-waarden van xDrip.
    
    ![xDrip Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

## AAPS gebruiken om te kalibreren in xDrip

- Wil je AAPS kunnen gebruiken om te kalibreren? Ga dan in xDrip naar Settings → Interapp Compatibility → Accept Calibrations en kies ON. 
- Je kunt ook de opties bekijken in Settings → Less Common Settings → Advanced Calibration Settings.

## Dexcom-sensoren

Alles over de Dexcom-sensor en -zender zelf (starten, stoppen, vervangen, kalibreren, problemen oplossen) staat in de [xDrip Dexcom-documentatie](https://navid200.github.io/xDrip/docs/Dexcom_page.html) en wordt daar bijgehouden. Volg die instructies voor de sensor. Alleen de instellingen die xDrip met **AAPS** verbinden (hierboven op deze pagina beschreven) zijn specifiek voor AAPS.

### Dexcom G6 en ONE

- Stel xDrip in volgens de [aanbevolen instellingen](https://navid200.github.io/xDrip/docs/G6-Recommended-Settings.html).
- De zenders van de Dexcom G6 en ONE kunnen tegelijk verbonden zijn met de Dexcom-ontvanger (of de t:slim-pomp) en met één app op je telefoon.
- Als je xDrip als ontvanger gebruikt, verwijder dan eerst de Dexcom-app. **Je kunt xDrip en de Dexcom-app niet tegelijk met de zender verbinden!**
- Heb je Clarity nodig en wil je ook de functies van xDrip gebruiken? Gebruik dan de [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) met local broadcast naar xDrip. Of gebruik xDrip als Companion app die meldingen ontvangt van de officiële Dexcom-app (BG-waarden kunnen dan vertraagd zijn).

#### Sensor herstarten

- Met de huidige zenders gebruikt xDrip altijd het [eigen algoritme van de zender](https://navid200.github.io/xDrip/docs/Native-Algorithm.html); er is geen reden om dit uit te zetten.
- [Preemptive restarts](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) werken alleen op oude zenders (firmware 1.6.5.25 of ouder). Daar zijn ze nodig om te voorkomen dat de sensor na 10 dagen stopt. Nieuwe (Firefly) zenders negeren ze.
- Om een sensor op een Firefly-zender te herstarten moet je [de zender verwijderen](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). Na de herstart kunnen de metingen flink fout zijn. Dat is gevaarlijk tijdens het loopen: lees [Restart a sensor](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html) helemaal en [kalibreer zorgvuldig](https://navid200.github.io/xDrip/docs/Calibrate-after-G6Restart.html).

(xdrip-connect-g6-transmitter-for-the-first-time)=

#### Sensoren starten, stoppen en vervangen

Volg de instructies:

- [Een G6- of ONE-zender starten](https://navid200.github.io/xDrip/docs/Starting-G6.html)
- [Een G6- of ONE-sensor stoppen en starten](https://navid200.github.io/xDrip/docs/Dexcom/StartG6Sensor.html)
- [De zender van een sensor verwijderen](https://navid200.github.io/xDrip/docs/Remove-transmitter.html)
- De [levensduur van de zender](https://navid200.github.io/xDrip/docs/Transmitter-lifetime.html) kan alleen worden verlengd ([hard reset](https://navid200.github.io/xDrip/docs/Hard-Reset.html)) bij zenders met een nieuwe batterij of aangepaste zenders, niet bij Firefly.

(xdrip-replace-transmitter)=

#### Een zender vervangen

- Zet de originele Dexcom-ontvanger uit (als je die gebruikt) en zet hem niet weer aan voordat xDrip waarden toont.
- Vergeet het apparaat in xDrip (System Status → Forget Device) EN in de Bluetooth-instellingen van de telefoon (daar staat het als DexcomXX, waarbij XX de laatste twee cijfers van het serienummer van de zender zijn).
- Houd de oude zender buiten Bluetooth-bereik, zodat hij niet opnieuw verbindt.
- Volg daarna [Een G6- of ONE-zender starten](https://navid200.github.io/xDrip/docs/Starting-G6.html).

### Dexcom G7, ONE+ en Stelo

- Volg de [instructies voor G7, ONE+ en Stelo](https://navid200.github.io/xDrip/docs/Dexcom/G7.html) (een recente xDrip-versie is nodig, zie de gelinkte pagina).
- Zie ook de [pagina over Dexcom G7, ONE+ en Stelo](../CompatibleCgms/DexcomG7.md) voor de mogelijke opstellingen met **AAPS**.

(xdrip-troubleshooting-dexcom-g5-g6-and-xdrip)=

### Problemen oplossen bij Dexcom en xDrip

- [Verbindingsproblemen oplossen bij G6/ONE](https://navid200.github.io/xDrip/docs/Connectivity-troubleshoot.html)
- [Problemen oplossen bij G7/ONE+/Stelo](https://navid200.github.io/xDrip/docs/Dexcom/G7_Troubleshooting.html)
- [Probleem bij het starten van een nieuwe sensor](https://navid200.github.io/xDrip/docs/Dexcom/SensorFailedStart.html)
- Volledige lijst: zie **Troubleshooting** op de [xDrip Dexcom-pagina](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

## Libre 1

- Je NFC-naar-Bluetooth-bridge instellen in xDrip
    
    → Hamburger Menu (1) → Settings (2) → Less common settings (3) → Bluetooth Settings (4)

- Zet in Bluetooth Settings de vinkjes precies zoals in de schermafbeeldingen hieronder (5)
    
    - Zet watchdogs uit. Die resetten de Bluetooth van de telefoon en verbreken de verbinding met je pomp.
    
    ![xDrip Libre Bluetooth-instellingen 1](../images/xDrip_Libre_BTSettings1.png)

- Je kunt proberen de volgende instellingen aan te zetten (7)
    
    - Use scanning
    - Trust Auto-Connect
    - Use Background Scans

- Verlies je vaak de verbinding met de bridge, of komt de verbinding moeilijk terug? **ZET ZE DAN UIT** (8).
    
    ![xDrip Libre Bluetooth-instellingen 2](../images/xDrip_Libre_BTSettings2.png)

- Laat alle andere opties uit, tenzij je weet waarom je ze aan wilt zetten.
    
    ![xDrip Libre Bluetooth-instellingen 3](../images/xDrip_Libre_BTSettings3.png)

### Batterijniveau van opzetapparaatje voor FSL

- Het batterijniveau van bridges zoals MiaoMiao en Bubble kan in AAPS worden getoond (niet van Blucon).
- Details staan op de [pagina met schermafbeeldingen](#screens-sensor-level-battery).

### Verbind Libre opzetapparaatje & start sensor

- Als je sensor het nodig heeft (Libre 2 EU en Libre 1 US), installeer dan het nieuwste out of process algorithm.

- Je sensor moet al gestart zijn met de app van de fabrikant of met de reader (xDrip kan Libre-sensoren niet starten of stoppen).

- Zet de gegevensbron op Libre Bluetooth.
    
    → Hamburger Menu (1) → Settings (2) → kies Libre Bluetooth in Hardware Data source (3)
    
    ![xDrip Libre-zender & sensor starten 1](../images/xDrip_Libre_Transmitter01.png)

- Scan Bluetooth en verbind de bridge.
    
    → Hamburger Menu (1) → Scan Bluetooth (2) → Scan (3)
    
    - Vindt xDrip de bridge niet? Zorg dan dat hij niet met de app van de fabrikant verbonden is. Laad hem op en reset hem.
    
    ![xDrip Libre-zender & sensor starten 2](../images/xDrip_Libre_Transmitter02.png)

- Start de sensor in xDrip.
    
        {admonition} Veiligheidswaarschuwing
        :class: warning
        Gebruik geen sensorgegevens voordat de opwarmtijd van één uur voorbij is: de waarden kunnen extreem hoog zijn en kunnen tot verkeerde beslissingen in AAPS leiden.
    
    → Hamburger Menu (1) → Start sensor (2) → Start sensor (3) → Stel de precieze tijd in waarop je de sensor hebt gestart met de reader of de app van de fabrikant. Heb je hem niet vandaag gestart, antwoord dan "Not Today" (4).

![xDrip Libre-zender & sensor starten 3](../images/xDrip_Libre_Transmitter03.png)

(xdrip-libre2-patched-app)=

## Libre 2 patched app

- Zet de gegevensbron op Libre patched app.
    
    → Hamburger Menu (1) → Settings (2) → kies Libre (patched App) in Hardware Data source (3)
    
    ![xDrip Libre patched app 1](../images/xDrip_Libre_Patched01.png)

- Je kunt `BgReading:d,xdrip libre_receiver:v` toevoegen onder Less Common Settings->Extra Logging Settings->Extra tags for logging. Dit logt extra foutmeldingen voor het oplossen van problemen.

![xDrip LibreLink-logging](../images/Libre2_Tags.png)