# xDrip

Hvis xDrip ikke allerede er satt opp, laster du ned og installerer den nyeste xDrip-versjonen fra [siden med xDrip-utgivelser](https://github.com/NightscoutFoundation/xDrip/releases).

Deaktiver batterioptimalisering og tillat bakgrunnsaktivitet for xDrip-appen.

## Grunninnstillinger for alle CGM- og FGM-systemer

### Deaktiver opplasting til Nightscout

Du bør ikke la noen annen app laste opp data (blodsukker og behandlinger) til Nightscout.

→ Hamburger Menu (menyen ☰) (1) → Settings (2) → Cloud Upload (3) -> Nightscout Sync (REST-API)(4) → Slå **AV** `Enabled` (5)

![xDrip grunninnstillinger 1](../images/xDrip_Basic1.png)

#### Deaktiver automatisk kalibrering og behandlinger

Pass på at `Automatic Calibration` (7) er deaktivert. Hvis avkrysningsboksen for `Automatic Calibration` er krysset av, aktiverer du `Download treatments` (6) én gang, fjerner så avkrysningen for `Automatic Calibration` og deaktiverer `Download treatments` igjen.

![xDrip grunninnstillinger 2](../images/xDrip_Basic2.png)

Trykk på `Extra Options`(8)

    {admonition} Sikkerhetsadvarsel
    :class: warning
    Du må deaktivere «Upload treatments» i xDrip. Ellers kan behandlinger bli registrert dobbelt i AAPS, og det gir feil COB og IOB.

Deaktiver `Upload treatments`(9), og pass på at du **IKKE** bruker `Back-fill data` (11).

Valget `Alert on failures` bør også deaktiveres (10). Ellers får du en alarm hvert 5. minutt ved problemer med Wi-Fi/mobilnett, eller hvis serveren ikke er tilgjengelig.

![xDrip grunninnstillinger 3](../images/xDrip_Basic3.png)

### **Inter-app Settings** (kringkasting mellom apper)

Hvis du skal bruke AAPS, og dataene skal sendes videre til AAPS, må du aktivere kringkasting i xDrip under Inter-app settings.

→ Hamburger Menu (1) → Settings (2) → Inter-app settings (3) → Broadcast locally **PÅ** (4)

For at verdiene i AAPS skal være identiske med dem i xDrip, bør du aktivere `Send the displayed glucose value` (5).

Aktiver Compatible Broadcast (6).

![xDrip grunninnstillinger 4](../images/xDrip_Basic4.png)

Hvis du også har aktivert `Accept treatments` i xDrip og `Aktiver sending til xDrip+` i xDrip-pluginen i AAPS, vil xDrip motta informasjon om insulin, karbohydrater og basaldose fra AAPS.

Hvis du aktiverer `Accept Calibrations`, bruker xDrip kalibreringene fra AAPS. Vær forsiktig når du bruker denne funksjonen med Dexcom-sensorer: les [dette](https://navid200.github.io/xDrip/docs/Calibrate-G6.html) først.

Husk å deaktivere Import Sounds, så xDrip ikke spiller en ringetone hver gang AAPS sender et basal-/profilbytte.

![xDrip grunninnstillinger 5](../images/xDrip_Basic5.png)

(xdrip-identify-receiver)=

#### Identify receiver (identifiser mottaker)

- Hvis du får problemer med lokal kringkasting (AAPS mottar ikke BS-verdier fra xDrip), går du til → Hamburger Menu (1) Settings (2) → Inter-app settings (3) → Identify receiver (7) og skriver inn `info.nightscout.androidaps` for AAPS-bygget (bruker du PumpControl-bygget, skriver du inn `info.nightscout.aapspumpcontrol` i stedet!!).
- Vær oppmerksom: Autokorrektur kan noen ganger endre i til stor bokstav. Du **må bare bruke små bokstaver** når du skriver `info.nightscout.androidaps` (eller `info.nightscout.aapspumpcontrol` for PumpControl). Stor I gjør at appen ikke mottar BS-verdier fra xDrip.
    
    ![xDrip Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

## Bruke AAPS til å kalibrere i xDrip

- Hvis du vil kunne bruke AAPS til å kalibrere, går du i xDrip til Settings → Interapp Compatibility → Accept Calibrations og velger ON. 
- Du bør også se gjennom valgene under Settings → Less Common Settings → Advanced Calibration Settings.

## Dexcom-sensorer

Alt som gjelder selve Dexcom-sensoren og -senderen (starte, stoppe, bytte, kalibrere, feilsøke) er dokumentert og holdes oppdatert i [xDrips Dexcom-dokumentasjon](https://navid200.github.io/xDrip/docs/Dexcom_page.html). Følg de instruksjonene for sensoren; innstillingene som kobler xDrip til **AAPS** (beskrevet ovenfor på denne siden) er den eneste AAPS-spesifikke delen.

### Dexcom G6 og ONE

- Sett opp xDrip etter de [anbefalte innstillingene](https://navid200.github.io/xDrip/docs/G6-Recommended-Settings.html).
- Senderne til Dexcom G6 og ONE kan være koblet til Dexcom-mottakeren (eller alternativt t:slim-pumpen) og én app på telefonen din samtidig.
- Når du bruker xDrip som mottaker, må du avinstallere Dexcom-appen først. **Du kan ikke koble både xDrip og Dexcom-appen til senderen samtidig!**
- Hvis du trenger Clarity og vil ha nytte av funksjonene i xDrip, kan du bruke [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) med lokal kringkasting til xDrip, eller bruke xDrip som en hjelpeapp som mottar varsler fra den offisielle Dexcom-appen (med mulige forsinkelser i BS-målingene).

#### Omstart av sensor

- xDrip bruker alltid senderens [innebygde algoritme](https://navid200.github.io/xDrip/docs/Native-Algorithm.html) med nyere sendere; det er ingen grunn til å slå den av.
- [Forebyggende omstart («preemptive restart»)](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) virker bare på gamle sendere (fastvare 1.6.5.25 eller eldre), der den trengs for å hindre at sensoren stopper etter 10 dager. Nyere sendere (Firefly) ignorerer den.
- Omstart av en sensor på en Firefly-sender krever at du [fjerner senderen](https://navid200.github.io/xDrip/docs/Remove-transmitter.html), og målingene kan ha store feil etter omstarten. Det er farlig når du looper: les [Restart a sensor (omstart av sensor)](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html) i sin helhet og [kalibrer forsiktig](https://navid200.github.io/xDrip/docs/Calibrate-after-G6Restart.html).

(xdrip-connect-g6-transmitter-for-the-first-time)=

#### Starte, stoppe og bytte sensorer

Følg instruksjonene:

- [Starte en G6- eller ONE-sender](https://navid200.github.io/xDrip/docs/Starting-G6.html)
- [Stoppe og starte en G6- eller ONE-sensor](https://navid200.github.io/xDrip/docs/Dexcom/StartG6Sensor.html)
- [Fjerne senderen fra en sensor](https://navid200.github.io/xDrip/docs/Remove-transmitter.html)
- [Senderens levetid](https://navid200.github.io/xDrip/docs/Transmitter-lifetime.html) kan bare forlenges ([hard reset](https://navid200.github.io/xDrip/docs/Hard-Reset.html)) på sendere med byttet batteri eller modifiserte sendere, ikke på Firefly.

(xdrip-replace-transmitter)=

#### Bytte en sender

- Slå av den originale Dexcom-mottakeren (hvis du bruker den), og ikke slå den på igjen før xDrip viser målinger.
- Glem enheten i xDrip (System Status → Forget Device) OG i Bluetooth-innstillingene på telefonen (vises som DexcomXX, der XX er de to siste sifrene i senderens serienummer).
- Hold den gamle senderen utenfor Bluetooth-rekkevidde, så den ikke kobler til igjen.
- Følg deretter [Starte en G6- eller ONE-sender](https://navid200.github.io/xDrip/docs/Starting-G6.html).

### Dexcom G7, ONE+ og Stelo

- Følg [instruksjonene for G7, ONE+ og Stelo](https://navid200.github.io/xDrip/docs/Dexcom/G7.html) (en nyere xDrip-versjon kreves — se den lenkede siden).
- Se også [siden om Dexcom G7, ONE+ og Stelo](../CompatibleCgms/DexcomG7.md) for oppsettene som er tilgjengelige med **AAPS**.

(xdrip-troubleshooting-dexcom-g5-g6-and-xdrip)=

### Feilsøking av Dexcom og xDrip

- [Feilsøking av G6/ONE-tilkobling](https://navid200.github.io/xDrip/docs/Connectivity-troubleshoot.html)
- [Feilsøking av G7/ONE+/Stelo](https://navid200.github.io/xDrip/docs/Dexcom/G7_Troubleshooting.html)
- [Problem ved start av ny sensor](https://navid200.github.io/xDrip/docs/Dexcom/SensorFailedStart.html)
- Full liste: se **Troubleshooting** på [xDrips Dexcom-side](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

## Libre 1

- Sette opp NFC-til-Bluetooth-senderen din i xDrip
    
    → Hamburger Menu (1) → Settings (2) → Less common settings (3) → Bluetooth Settings (4)

- Under Bluetooth Settings setter du avkrysningsboksene nøyaktig som på skjermbildene nedenfor (5)
    
    - Deaktiver «watchdogs», siden de tilbakestiller Bluetooth på telefonen og bryter forbindelsen til pumpen din.
    
    ![xDrip Libre Bluetooth-innstillinger 1](../images/xDrip_Libre_BTSettings1.png)

- Du kan prøve å aktivere disse innstillingene (7)
    
    - Bruke skanning
    - Trust Auto-Connect
    - Use Background Scans

- Hvis du lett mister forbindelsen til senderen, eller har problemer med å få den tilbake, **DEAKTIVER DEM** (8).
    
    ![xDrip Libre Bluetooth-innstillinger 2](../images/xDrip_Libre_BTSettings2.png)

- La alle andre valg være deaktivert, med mindre du vet hvorfor du vil aktivere dem.
    
    ![xDrip Libre Bluetooth-innstillinger 3](../images/xDrip_Libre_BTSettings3.png)

### Batterinivå for Libre-senderen

- Batterinivået til sendere som MiaoMiao og Bubble kan vises i AAPS (ikke Blucon).
- Du finner detaljer på [siden med skjermbilder](#screens-sensor-level-battery).

### Koble til Libre-senderen og start sensoren

- Hvis sensoren din krever det (Libre 2 EU og Libre 1 US), installerer du den nyeste «out of process»-algoritmen (OOP).

- Sensoren din må allerede være startet med produsentens app eller leseren (xDrip kan ikke starte eller stoppe Libre-sensorer).

- Sett datakilden til Libre Bluetooth.
    
    → Hamburger Menu (1) → Settings (2) → Velg Libre Bluetooth under Hardware Data source (3)
    
    ![xDrip start Libre-sender og sensor 1](../images/xDrip_Libre_Transmitter01.png)

- Skann Bluetooth og koble til senderen.
    
    → Hamburger Menu (1) → Scan Bluetooth (2) → Scan (3)
    
    - Hvis xDrip ikke finner senderen, må du passe på at den ikke er koblet til produsentens app. Sett den til lading og tilbakestill den.
    
    ![xDrip start Libre-sender og sensor 2](../images/xDrip_Libre_Transmitter02.png)

- Start sensoren i xDrip.
    
        {admonition} Sikkerhetsadvarsel
        :class: warning
        Ikke bruk sensordata før oppvarmingstiden på én time er over: verdiene kan være ekstremt høye og føre til feil avgjørelser i AAPS.
    
    → Hamburger Menu (1) → Start sensor (2) → Start sensor (3) → Sett det nøyaktige tidspunktet da du startet sensoren med leseren eller produsentens app. Hvis du ikke startet den i dag, svarer du «Not Today» (4).

![xDrip start Libre-sender og sensor 3](../images/xDrip_Libre_Transmitter03.png)

(xdrip-libre2-patched-app)=

## Modifisert Libre 2-app («patched app»)

- Sett datakilden til Libre (patched App), den modifiserte appen.
    
    → Hamburger Menu (1) → Settings (2) → Velg Libre (patched App) under Hardware Data source (3)
    
    ![xDrip Libre modifisert app 1](../images/xDrip_Libre_Patched01.png)

- Du kan legge til `BgReading:d,xdrip libre_receiver:v` under Less Common Settings->Extra Logging Settings->Extra tags for logging. Da logges flere feilmeldinger som hjelper ved feilsøking.

![xDrip LibreLink-logging](../images/Libre2_Tags.png)