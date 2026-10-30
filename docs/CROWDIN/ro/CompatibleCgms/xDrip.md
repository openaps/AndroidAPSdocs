# xDrip settings

If not already set up, download and install the latest xDrip release from the [xDrip releases page](https://github.com/NightscoutFoundation/xDrip/releases).

Disable battery optimization and allow background activity for the xDrip app.

## Setari de baza pentru toate sistemele CGM & FGM

### Dezactivează încărcarea datelor în Nightscout

You shouldn't let any other app upload data (blood glucose and treatments) to Nightscout.

→ Meniu Hamburger (1) → Setări (2) → Cloud Upload (3) -> Nightscout Sync (REST-API)(4) → Comutați **OFF** `Activat` (5)

![xDrip Basic Settings 1](../images/xDrip_Basic1.png)

#### Dezactivează calibrarea automată și tratamentele

Make sure `Automatic Calibration` (7) is deactivated. If the checkbox for `Automatic Calibration` is checked, activate `Download treatments` (6) once, then remove the checkbox for `Automatic Calibration` and deactivate `Download treatments` again.

![xDrip Basic Settings 2](../images/xDrip_Basic2.png)

Tap `Extra Options`(8)

    {admonition} Safety warning
    :class: warning
    You must deactivate "Upload treatments" from xDrip, otherwise treatments can be doubled in AAPS leading to false COB and IOB.

Deactivate `Upload treatments`(9) and make sure you will **NOT** use `Back-fill data` (11).

Option `Alert on failures` should also be deactivated (10). Otherwise you will get an alarm every 5 minutes in case Wi-Fi/mobile network issues or if the server is not available.

![xDrip Basic Settings 3](../images/xDrip_Basic3.png)

### **Setări între aplicații** (Broadcast)

If you are going to use AAPS and the data should be forwarded to i.e. AAPS you have to activate broadcasting in xDrip in Inter-App settings.

→ Hamburger Menu (1) → Settings (2) → Inter-app settings (3) → Broadcast locally **ON** (4)

In order for the values to be identical in AAPS with respect to xDrip, you should activate `Send the displayed glucose value` (5).

Enable Compatible Broadcast (6).

![xDrip Basic Settings 4](../images/xDrip_Basic4.png)

If you have also activated `Accept treatments` in xDrip and `Enable broadcasts to xDrip` in AAPS xDrip plugin, then xDrip will receive insulin, carbs and basal rate information from AAPS.

If you enable `Accept Calibrations`, xDrip will use the calibrations from AAPS. Be careful when you use this feature with Dexcom sensors: read [this](https://navid200.github.io/xDrip/docs/Calibrate-G6.html) first.

Remember to disable Import Sounds to avoid xDrip making a ringtone every time AAPS sends a basal/profile change.

![xDrip Basic Settings 5](../images/xDrip_Basic5.png)

(xdrip-identify-receiver)=

#### Identificare receptor

- If you discover problems with local broadcast (AAPS not receiving BG values from xDrip) go to → Hamburger Menu (1) Settings (2) → Inter-app settings (3) → Identify receiver (7) and enter `info.nightscout.androidaps` for AAPS build (if you are using PumpControl build, please enter `info.nightscout.aapspumpcontrol` instead!!).
- Atenție: Auto-corectarea tinde uneori să schimbe litera i în majuscula I. **Trebuie să utilizați doar litere mici** când tastați `info.nightscout.androidaps` (sau `info.nightscout.aapspumpcontrol` pentru PumpControl). Capital I would prevent the App from receiving BG values from xDrip.
    
    ![xDrip Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

## Use AAPS to calibrate in xDrip

- If you want to be able to use AAPS to calibrate then in xDrip go to Settings → Interapp Compatibility → Accept Calibrations and select ON. 
- S-ar putea să doriți de asemenea să revizuiți opțiunile din Setări → Setări mai puțin obișnuite → Setări avansate de calibrare.

## Senzorii Dexcom

Everything related to the Dexcom sensor and transmitter themselves (starting, stopping, replacing, calibrating, troubleshooting) is documented and kept up to date in the [xDrip Dexcom documentation](https://navid200.github.io/xDrip/docs/Dexcom_page.html). Follow those instructions for the sensor; the settings connecting xDrip to **AAPS** (described above on this page) are the only AAPS-specific part.

### Dexcom G6 și ONE

- Set up xDrip following the [recommended settings](https://navid200.github.io/xDrip/docs/G6-Recommended-Settings.html).
- Transmițătorii G6 și ONE pot fi conectați simultan la receptorul Dexcom (sau alternativ la pompa t:slim) și la o aplicație de pe telefonul dumneavoastră.
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
- Forget the device in xDrip (System Status → Forget Device) AND in the smartphone's Bluetooth settings (shown as Dexcom?? where ?? are the last two digits of the transmitter serial number).
- Keep the old transmitter out of Bluetooth range to prevent reconnection.
- Then follow [Start a G6 or ONE transmitter](https://navid200.github.io/xDrip/docs/Starting-G6.html).

### Dexcom G7, ONE+ and Stelo

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
    
    → Meniu Hamburger (1) → Setări (2) → Setări mai puțin frecvente (3) → Setări Bluetooth (4)

- În setările Bluetooth setați casetele de selectare exact ca în capturile de ecran de mai jos (5)
    
    - Dezactivați mecanismele watchdogs deoarece vor reseta Bluetooth din telefon și vor întrerupe conexiunea cu pompa.
    
    ![xDrip Libre Bluetooth Settings 1](../images/xDrip_Libre_BTSettings1.png)

- Puteți încerca să activați următoarele setări (7)
    
    - Folosește scanarea
    - Permiteți autoconectarea
    - Utilizați scanările în fundal

- Dacă pierdeți cu ușurință conexiunea la punte sau întâmpinați dificultăți la recuperarea conexiunii, **DEZACTIVAȚI-LE** (8).
    
    ![xDrip Libre Bluetooth Settings 2](../images/xDrip_Libre_BTSettings2.png)

- Lăsați toate celelalte opțiuni dezactivate dacă nu știți de ce doriți să le activați.
    
    ![xDrip Libre Bluetooth Settings 3](../images/xDrip_Libre_BTSettings3.png)

### Nivel baterie de la transmițătorul Libre

- Nivelul bateriei punților precum MiaoMiao și Bubble poate fi afișat în AAPS (nu Blucon).
- Detalii pot fi găsite pe pagina [capturi de ecran](#screens-sensor-level-battery).

### Conectează Transmiterul Libre& pornește senzorul

- Dacă senzorul dumneavoastră solicită acest lucru (Libre 2 EU și Libre 1 US) instalați cel mai recent algoritm în afara procesului.

- Your sensor must be already started using the vendor app or the reader (xDrip cannot start or stop Libre sensors).

- Setați sursa de date pe Libre Bluetooth.
    
    → Meniu Hamburger (1) → Setări (2) → Selectați Bluetooth Libre în sursa de date hardware (3)
    
    ![xDrip Start Libre Transmitter & Sensor 1](../images/xDrip_Libre_Transmitter01.png)

- Scanați Bluetooth și conectați puntea.
    
    → Meniu Hamburger (1) → Scanare Bluetooth (2) → Scanare (3)
    
    - If xDrip can't find the bridge, make sure it's not connected to the vendor app. Put it in charge and reset it.
    
    ![xDrip Start Libre Transmitter & Sensor 2](../images/xDrip_Libre_Transmitter02.png)

- Start the sensor in xDrip.
    
        {admonition} Avertisment de siguranță
        :class: avertizare
        Nu utilizați datele senzorului înainte ca încălzirea de o oră să se termine: valorile pot fi extrem de mari și pot cauza decizii greșite în AAPS.
    
    → Hamburger Meniu (1) → Pornire senzor (2) → Pornire senzor (3) → Setează ora exactă la care l-ai pornit cu cititorul sau cu aplicația oficială. Dacă nu l-ați pornit astăzi, răspundeți "Nu astăzi" (4).

![xDrip Start Libre Transmitter & Sensor 3](../images/xDrip_Libre_Transmitter03.png)

(xdrip-libre2-patched-app) =

## Aplicație Libre 2 modificată

- Setați sursa de date la aplicația Libre modificată.
    
    → Meniu Hamburger (1) → Setări (2) → Selectați Libre (aplicație modificată) în sursă de date hardware (3)
    
    ![xDrip Libre Patched app 1](../images/xDrip_Libre_Patched01.png)

- Puteți adăuga `BgReading:d,xdrip libre_receiver:v` sub Setări mai puțin comune>Setări suplimentare de jurnalizare->Etichete suplimentare pentru jurnalizare. Aceasta va înregistra mesaje de eroare suplimentare pentru a depana problema.

![xDrip LibreLink logging](../images/Libre2_Tags.png)