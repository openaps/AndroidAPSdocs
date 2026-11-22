# xDrip settings

If not already set up, download and install the latest xDrip release from the [xDrip releases page](https://github.com/NightscoutFoundation/xDrip/releases).

Disable battery optimization and allow background activity for the xDrip app.

## Osnovne postavke za sve CGM i FGM sustave

### Onemogućite prijenos u Nightscout

You shouldn't let any other app upload data (blood glucose and treatments) to Nightscout.

→ Hamburger Menu (1) → Settings (2) → Cloud Upload (3) → Nightscout Sync (REST-API) (4) → Switch **OFF** `Enabled` (5)

![xDrip Basic Settings 1](../images/xDrip_Basic1.png)

#### Onemogućite automatsku kalibraciju i tretmane

Make sure `Automatic Calibration` (7) is deactivated. If the checkbox for `Automatic Calibration` is checked, activate `Download treatments` (6) once, then remove the checkbox for `Automatic Calibration` and deactivate `Download treatments` again.

![xDrip Basic Settings 2](../images/xDrip_Basic2.png)

Tap `Extra Options`(8)

    {admonition} Safety warning
    :class: warning
    You must deactivate "Upload treatments" from xDrip, otherwise treatments can be doubled in AAPS leading to false COB and IOB.

Deactivate `Upload treatments`(9) and make sure you will **NOT** use `Back-fill data` (11).

Option `Alert on failures` should also be deactivated (10). Otherwise you will get an alarm every 5 minutes in case Wi-Fi/mobile network issues or if the server is not available.

![xDrip Basic Settings 3](../images/xDrip_Basic3.png)

### **Inter-app Settings** (emitiranje)

If you use AAPS, you must activate broadcasting in xDrip's Inter-App settings so the data is forwarded to AAPS.

→ Hamburger Menu (1) → Settings (2) → Inter-app settings (3) → Broadcast locally **ON** (4)

In order for the values to be identical in AAPS with respect to xDrip, you should activate `Send the displayed glucose value` (5).

Enable Compatible Broadcast (6).

![xDrip Basic Settings 4](../images/xDrip_Basic4.png)

If you have also activated `Accept treatments` in xDrip and `Enable broadcasts to xDrip` in AAPS xDrip plugin, then xDrip will receive insulin, carbs and basal rate information from AAPS.

If you enable `Accept Calibrations`, xDrip will use the calibrations from AAPS. Be careful when you use this feature with Dexcom sensors: read [this](https://navid200.github.io/xDrip/docs/Calibrate-G6.html) first.

Remember to disable Import Sounds to avoid xDrip making a ringtone every time AAPS sends a basal/profile change.

![xDrip Basic Settings 5](../images/xDrip_Basic5.png)

(xdrip-identify-receiver)=

#### Identify receiver (identifikacija prijemnika)

- If you discover problems with local broadcast (AAPS not receiving BG values from xDrip) go to → Hamburger Menu (1) Settings (2) → Inter-app settings (3) → Identify receiver (7) and enter `info.nightscout.androidaps` for AAPS build (if you are using PumpControl build, please enter `info.nightscout.aapspumpcontrol` instead!!).
- Pazite: automatsko ispravljanje ponekad mijenja i u veliko slovo. **Morate koristiti samo mala slova** kada upisujete `info.nightscout.androidaps` (ili `info.nightscout.aapspumpcontrol` za PumpControl). Capital I would prevent the App from receiving BG values from xDrip.
    
    ![xDrip Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

## Use AAPS to calibrate in xDrip

- If you want to be able to use AAPS to calibrate then in xDrip go to Settings → Interapp Compatibility → Accept Calibrations and select ON. 
- Možda ćete htjeti pregledati i opcije u Settings → Less Common Settings → Advanced Calibration Settings.

## Dexcom sensors

Everything related to the Dexcom sensor and transmitter themselves (starting, stopping, replacing, calibrating, troubleshooting) is documented and kept up to date in the [xDrip Dexcom documentation](https://navid200.github.io/xDrip/docs/Dexcom_page.html). Follow those instructions for the sensor; the settings connecting xDrip to **AAPS** (described above on this page) are the only AAPS-specific part.

### Dexcom G6 i ONE

- Set up xDrip following the [recommended settings](https://navid200.github.io/xDrip/docs/G6-Recommended-Settings.html).
- Odašiljači Dexcom G6 i ONE mogu istodobno biti povezani s Dexcomovim prijemnikom (ili umjesto njega s pumpom t:slim) i s jednom aplikacijom na vašem telefonu.
- When using xDrip as receiver uninstall the Dexcom app first. **You cannot connect xDrip and the Dexcom app with the transmitter at the same time!**
- If you need Clarity and want to profit from xDrip features, use the [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) with local broadcast to xDrip, or use xDrip as a Companion app receiving notifications from the official Dexcom app (with possible delays in BG readings).

#### Sensor restarts

- xDrip always uses the transmitter's [native algorithm](https://navid200.github.io/xDrip/docs/Native-Algorithm.html) with current transmitters; there is no reason to disable it.
- [Preemptive restarts](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) only function on old transmitters (firmware 1.6.5.25 or earlier), where they are needed to prevent the sensor stopping after 10 days. Recent (Firefly) transmitters ignore them.
- Restarting a sensor on a Firefly transmitter requires [removing the transmitter](https://navid200.github.io/xDrip/docs/Remove-transmitter.html) and readings can be significantly in error after the restart, which is dangerous when looping: read [Restart a sensor](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html) in full and [calibrate carefully](https://navid200.github.io/xDrip/docs/Calibrate-after-G6Restart.html).

(xdrip-connect-g6-transmitter-for-the-first-time)=

#### Start, stop and replace sensors

Follow the instructions:

- [Start a G6 or ONE transmitter](https://navid200.github.io/xDrip/docs/Starting-G6.html)
- [Stop and start a G6 or ONE sensor](https://navid200.github.io/xDrip/docs/Dexcom/StartG6Sensor.html)
- [Remove the transmitter from a sensor](https://navid200.github.io/xDrip/docs/Remove-transmitter.html)
- [Transmitter lifetime](https://navid200.github.io/xDrip/docs/Transmitter-lifetime.html) can only be extended ([hard reset](https://navid200.github.io/xDrip/docs/Hard-Reset.html)) on rebatteried or modified transmitters, not on Firefly.

(xdrip-replace-transmitter)=

#### Replace a transmitter

- Turn the original Dexcom receiver off (if used) and do not turn it back on before xDrip shows readings.
- Forget the device in xDrip (System Status → Forget Device) AND in the smartphone's Bluetooth settings (shown as DexcomXX where XX are the last two digits of the transmitter serial number).
- Keep the old transmitter out of Bluetooth range to prevent reconnection.
- Then follow [Start a G6 or ONE transmitter](https://navid200.github.io/xDrip/docs/Starting-G6.html).

### Dexcom G7, ONE+ i Stelo

- Follow the [G7, ONE+ and Stelo instructions](https://navid200.github.io/xDrip/docs/Dexcom/G7.html) (a recent xDrip release is required — see the linked page).
- See also the [Dexcom G7, ONE+ and Stelo page](../CompatibleCgms/DexcomG7.md) for the available setups with **AAPS**.

(xdrip-troubleshooting-dexcom-g5-g6-and-xdrip)=

### Troubleshooting Dexcom and xDrip

- [G6/ONE connectivity troubleshooting](https://navid200.github.io/xDrip/docs/Connectivity-troubleshoot.html)
- [G7/ONE+/Stelo troubleshooting](https://navid200.github.io/xDrip/docs/Dexcom/G7_Troubleshooting.html)
- [Problem when starting a new sensor](https://navid200.github.io/xDrip/docs/Dexcom/SensorFailedStart.html)
- Full list: see **Troubleshooting** on the [xDrip Dexcom page](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

## Libre 1

- Setup your NFC to Bluetooth bridge in xDrip
    
    → Hamburger izbornik (1) → Settings (2) → Less common settings (3) → Bluetooth Settings (4)

- U Bluetooth Settings označite kućice točno kao na snimkama zaslona ispod (5)
    
    - Onemogućite watchdogove jer će resetirati Bluetooth telefona i prekinuti vezu s pumpom.
    
    ![xDrip Libre Bluetooth Settings 1](../images/xDrip_Libre_BTSettings1.png)

- Možete pokušati omogućiti sljedeće postavke (7)
    
    - Korištenje skeniranja
    - Trust Auto-Connect
    - Use Background Scans

- Ako lako gubite vezu s mostom ili se veza teško ponovno uspostavlja, **ONEMOGUĆITE IH** (8).
    
    ![xDrip Libre Bluetooth Settings 2](../images/xDrip_Libre_BTSettings2.png)

- Sve ostale opcije ostavite onemogućene, osim ako znate zašto ih želite omogućiti.
    
    ![xDrip Libre Bluetooth Settings 3](../images/xDrip_Libre_BTSettings3.png)

### Razina baterije pametnog čitača Libre

- Razina baterije mostova kao što su MiaoMiao i Bubble može se prikazati u AAPS-u (ne za Blucon).
- Pojedinosti možete pronaći na [stranici sa snimkama zaslona](#screens-sensor-level-battery).

### Spojite Libre odašiljač i pokrenite senzor

- Ako to vaš senzor zahtijeva (Libre 2 EU i Libre 1 US), instalirajte najnoviji out of process algoritam.

- Your sensor must be already started using the vendor app or the reader (xDrip cannot start or stop Libre sensors).

- Postavite izvor podataka na Libre Bluetooth.
    
    → Hamburger izbornik (1) → Settings (2) → odaberite Libre Bluetooth u Hardware Data source (3)
    
    ![xDrip Start Libre Transmitter & Sensor 1](../images/xDrip_Libre_Transmitter01.png)

- Skenirajte Bluetooth i spojite most.
    
    → Hamburger izbornik (1) → Scan Bluetooth (2) → Scan (3)
    
    - If xDrip can't find the bridge, make sure it's not connected to the vendor app. Put it in charge and reset it.
    
    ![xDrip Start Libre Transmitter & Sensor 2](../images/xDrip_Libre_Transmitter02.png)

- Start the sensor in xDrip.
    
        {admonition} Sigurnosno upozorenje
        :class: warning
        Ne koristite podatke senzora prije kraja jednosatnog zagrijavanja: vrijednosti mogu biti iznimno visoke i uzrokovati pogrešne odluke u AAPS-u.
    
    → Hamburger izbornik (1) → Start sensor (2) → Start sensor (3) → Postavite točno vrijeme kada ste ga pokrenuli čitačem ili aplikacijom proizvođača. Ako ga niste pokrenuli danas, odgovorite „Not Today“ (4).

![xDrip: pokretanje odašiljača Libre & senzora 3](../images/xDrip_Libre_Transmitter03.png)

(xdrip-libre2-patched-app)=

## Prepravljena aplikacija za Libre 2

- Postavite izvor podataka na prepravljenu aplikaciju za Libre.
    
    → Hamburger izbornik (1) → Settings (2) → odaberite Libre (patched App) u Hardware Data source (3)
    
    ![xDrip Libre Patched app 1](../images/xDrip_Libre_Patched01.png)

- Možete dodati `BgReading:d,xdrip libre_receiver:v` pod Less Common Settings->Extra Logging Settings->Extra tags for logging. Tako će se bilježiti dodatne poruke o pogreškama za rješavanje problema.

![Bilježenje LibreLinka u xDripu](../images/Libre2_Tags.png)