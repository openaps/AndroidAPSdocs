# xDrip+ Einstellungen

Wenn Du es nicht bereits eingerichtet hast, lade [xDrip+](https://github.com/NightscoutFoundation/xDrip) herunter.

For G6 transmitters manufactured after fall/end of 2018 (i.e. serial no. starting with 80 or 81) please make sure to use at least the [master dated 2019/05/18](https://jamorham.github.io/#xdrip-plus).

If your Dexcom G6 transmitter's serial no. is starting with 8G... try [nightly build 2019/07/28 or later](https://github.com/NightscoutFoundation/xDrip/releases).

## Grundsätzliche Einstellungen für alle CGM & FGM-Systeme

* Stelle sicher, dass Du die Base URL korrekt eingibst - inkl. **S** am Ende von http**s**:// (nicht http://).
   
   z.B. https://API_SECRET@your-app-name.herokuapp.com/api/v1/
   
   -> Hamburger Menü (oben links auf dem Starbildschirm) -> Einstellungen-> Cloud Upload-> API Upload (REST) -> Basis-URL

* Deaktiviere `Automatic Calibration` Falls die Checkbox für `Automatic Calibration` ausgewählt ist, aktiviere `Download data` einmalig, entferne dann den Haken in der Checkbox für `Automatic Calibration` und deaktiviere `Download data` wieder. Sonst werden die Behandlungen (Insulin & Kohlenhydrate) doppelt in Nightscout eingetragen.

* Tippe auf `Extra Options`.
* Deaktiviere `Upload treatments` und `Back-fill data`.
* Die Option `Alert on failures` sollte ebenfalls deaktiviert sein. Andernfalls erhälst Du alle 5 Minuten einen Alarm, falls das WLAN / Mobilfunknetz zu schlecht oder der Server nicht verfügbar ist.
   
   ![xDrip+ Grundeinstellungen 1](../images/xDrip_Basic1.png)
   
   ![xDrip+ Grundeinstellungen 2](../images/xDrip_Basic2.png)

* **InterApp-Einstellungen** (Broadcast) Wenn Du planst, AndroidAPS zu nutzen und die Daten an AndroidAPS weiterzugeben, musst Du den sogenannten 'Broadcast' in xDrip+ in den Inter-App Einstellungen einschalten.

* Damit die Werte überseinstimmen, solltest Du `Sende den angezeigten Glukosewert` aktivieren.
* Wenn Du zusätzlich `Behandlungen annehmen` und in AndroidAPS den Brodcast aktivierst, dann wird xDrip+ Insulinmengen, Kohlenhydrate und Basalrateninformationen aus AndroidAPS erhalten und kann so z.B. niedrige Werte vorhersagen. 
   
   ![xDrip+ Grundeinstellungen 3](../images/xDrip_Basic3.png)

* Bei einigen Anwendern kam es zu Problemen im Flugmodus. AAPS empfing keine BZ-Werte con xdrip+. Go to Settings > Inter-app settings > Identify receiver and enter `info.nightscout.androidaps`.
   
   ![xDrip+ Basic Inter-App Einstellungen Identifiziere Empfänger](../images/xDrip_InterApp_NS.png)

## xDrip+ mit Dexcom G6

### xDrip+ version depending on G6 transmitter serial no.

For G6 transmitters manufactured after fall/end of 2018 (i.e. serial no. starting with 80 or 81) please make sure to use at least the [master dated 2019/05/18](https://jamorham.github.io/#xdrip-plus).

If your Dexcom G6 transmitter's serial no. is starting with 8G... try [nightly build 2019/07/28 or later](https://github.com/NightscoutFoundation/xDrip/releases).

### Dexcom specific settings

* Öffne G5 Debug Einstellungen (gilt auch für Dexcom G6!) -> Hamburger Menü (oben links auf dem Homescreen) -> Einstellungen -> G5 Debug Einstellungen ![xDrip+ Einstellungen öffnen](../images/xDrip_Dexcom_SettingsCall.png)

* Aktiviere die folgenden Einstellungen:
   
   * `Use the OB1 Collector`
   * `Native Algorithm` (wichtig, wenn Du SMB benutzen willst)
   * `G6 support`
   * `Allow OB1 unbonding`
   * `Allow OB1 initiate bonding`
* Alle anderen Optionen sollten deaktiviert werden.
* Passe die Warnschwelle für die Batterie ('Adjust battery warning level') auf 280 an. (Du findest diese ganz unten in der Liste der G5/G6 Debug Settings.)
   
   ![xDrip+ G5 Debugeinstellungen](../images/xDrip_Dexcom_DebugSettings.png)

### Preemptive restarts not recommended

The automatic extension of Dexcom sensors (`preemtive restarts`) is not recommended as this might lead to “jumps” in BG values on day 9 after restart.

![xDrip+ Jump after Preemptive Restart](../images/xDrip_Dexcom_PreemptiveJump.png)

Die Nutzung des G6 kann vielleicht etwas komplexer sein, als zunächst vermutet. Mache Dir die folgenden Punkte bewusst, um das System sicher zu nutzen:

* Wenn Du mit nativen Daten und dem Kalibrierungscode in xDrip+ oder Spike arbeitest, ist es am sichersten, auf den "preemptive" Neustart des Sensors zu verzichten.
* Falls Du den "preemptive restart" verwendest, stelle sicher, dass dieser zu einer Tageszeit erfolgt, zu der Du die Änderungen verfolgen und ggf. durch eine Kalibrierung eingreifen kannst. 
* Falls Du Sensoren verlängerst, verzichte aus Sicherheitsgründen entweder auf die Werkskalibrierung an Tag 11 und 12 oder stelle sicher, dass Du die Abweichungen im Auge hast und evtl. durch Kalibrierung korrigieren kannst.
* Das sogenannte "Pre-soaking" (Sensor früher ohne Transmitter setzen, damit er sich an die Gewebsflüssigkeit "gewöhnt") mit Werkskalibrierung führt wahrscheinlich zu Abweichungen in den Glukosewerten. Falls Du mit "pre-soaking" arbeitest, wirst Du wahrscheinlich besser Ergebnisse erzielen, wenn Du den Sensor kalibrierst.
* Wenn Du nicht auf die Abweichungen, die stattfinden können, achten willst, wäre es evtl. besser bei der Verlängerung auf die Werkskalibrierung zu verzichten und das System wie den G5 (mit "Pflichtkalibrierung") zu nutzen.

To learn more about the details and reasons for these recommendations read the [complete article](http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) published by Tim Street at [www.diabettech.com](http://www.diabettech.com).

### Connect G6 transmitter for the first time

**For second and following transmitters see [Extend transmitter life](../Configuration/xdrip#extend-transmitter-life) below.**

For G6 transmitters manufactured after fall/end of 2018 (i.e. serial no. starting with 80 or 81) please make sure to use at least the [master dated 2019/05/18](https://jamorham.github.io/#xdrip-plus).

If your Dexcom G6 transmitter's serial no. is starting with 8G... try [nightly build 2019/07/28 or later](https://github.com/NightscoutFoundation/xDrip/releases).

* Schalte den Original Dexcom Empfänger aus (falls Du diesen verwendet).
* Long press the red xDrip+ blood drop icon on the main screen to enable the `Source Wizard Button`.
* Use the Source Wizard Button which ensures default settings including OB1 & Native Mode 
   * This guides you through the initial set up.
   * you will need your transmitter serial number if this is the first time you've used it.

* Put in serial number of new transmitter (on the transmitter packaging or on the back of the transmitter). Be careful not to confuse 0 (zero) and O (capital letter o).
   
   ![xDrip+ Dexcom Transmitter Serial No](../images/xDrip_Dexcom_TransmitterSN.png)

* Insert new sensor (only if replacing)

* Put transmitter into sensor
* **Wait 15 minutes** before starting sensor so xDrip can initialize communication with the new transmitter
* Start sensor (only if replacing)
   
   -> Near the bottom of the screen `Warm Up x,x hours left` must be displayed after a few minutes.

-> If your transmitter serial no. does not start with 8G and there is no time specification after a few minutes stop and restart the sensor.

* Restart collector (system status - if not replacing sensor}
* Do not turn original Dexcom receiver (if used) back on before xDrip+ shows first readings.
* Long press the red xDrip+ blood drop icon on the main screen to disable the `Source Wizard Button`.
   
   ![xDrip+ Dexcom Transmitter 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ Dexcom Transmitter 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ Dexcom Transmitter 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ Dexcom Transmitter 4](../images/xDrip_Dexcom_Transmitter04.png)

### Transmitter battery status

* Battery status can be controlled in system status (Hamburger menu top left on homescreen)
* Swipe left once to see second screen. ![xDrip+ First Transmitter 4](../images/xDrip_Dexcom_Battery.png)

* The exact values when the transmitter “dies” due to empty battery are not known. The following information was posted online after the transmitter “died”: Transmitter days: 151 Voltage A: 297 Voltage B: 260 Resistance: 2391

### Extend transmitter life

* Running sensor session will be stopped when extending transmitter life. So extend before sensor change or be aware that there will be a new 2 h warm-up phase.
* Switch to the `engineering mode`: 
   * tap on the character on the right of the xDrip+ start screen that represents a syringe
   * then tap on the microphone icon in the lower right corner
   * In the text box that opens type "enable engineering mode" 
   * click "Done"
   * If Google Speak engine is enabled, you can also speak the voice command: "enable engineering mode". 
* Go to the G5 debug settings and check `OB1 collector`.
* Use the voice command: “hard reset transmitter”
* The voice command will be executed with the next data receipt of the transmitter
* Look at the system status (Hamburger menu -> system status) and see what happens
* If you see a message "Phone Service State: Hard Reset maybe failed" on second system status screen just start the sensor and this message should go away.
   
   ![xDrip+ Hard Reset maybe failed](../images/xDrip_HardResetMaybeFailed.png)

* Transmitter days will be set to 0 after successful extension and start of sensor.

### Replace transmitter

For G6 transmitters manufactured after fall/end of 2018 (i.e. serial no. starting with 80 or 81) please make sure to use at least the [master dated 2019/05/18](https://jamorham.github.io/#xdrip-plus).

If your Dexcom G6 transmitter's serial no. is starting with 8G... try [nightly build 2019/07/28 or later](https://github.com/NightscoutFoundation/xDrip/releases).

* Schalte den Original Dexcom Empfänger aus (falls Du diesen verwendet).
* Stop sensor (only if replacing sensor)
   
   Stelle sicher, dass er tatsächlich gestoppt ist.
   
   Schaue auf dem zweiten "G5/G6 Status" Bildschirm nach `Queue Items` (etwa in der Mitte) - dort wird `(1) Stop Sensor` oder ähnlich angezeigt.
   
   Warte, bis diese Meldung verschwindet. Erfahrungsgemäß dauert dies einige Minuten.
   
   -> To remove transmitter without stopping sensor see this video <https://youtu.be/AAhBVsc6NZo>.
   
   ![xDrip+ Stop Dexcom Sensor 1](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Stop Dexcom Sensor 2](../images/xDrip_Dexcom_StopSensor2.png)

* Forget device (in system status)
   
   ![xDrip+ Forget Device](../images/xDrip_Dexcom_ForgetDevice.png)

* Forget device in smartphone’s BT settings (Will be shown as DexcomXX whereas XX are the last two digits of the transmitter serial no.)

* Remove transmitter (and sensor if replacing sensor)
* Long press the red xDrip+ blood drop icon on the main screen to enable the `Source Wizard Button`.
* Use the Source Wizard Button which ensures default settings including OB1 & Native Mode 
   * This guides you through the initial set up.
   * You will need your transmitter serial number if this is the first time you've used it.
* Put in serial number of new transmitter.
* Insert new sensor (only if replacing).
* Put transmitter into sensor
* Start sensor (only if replacing)
   
   **It is recommended to wait approx. 15 minutes between stopping and starting the new sensor (until `Sensor Status: Stopped` is shown on second system status screen).**

* Restart collector (system status - if not replacing sensor}

* Do not turn original Dexcom receiver (if used) back on before xDrip+ shows first readings.
* Long press the red xDrip+ blood drop icon on the main screen to disable the `Source Wizard Button`.
   
   ![xDrip+ Dexcom Transmitter 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ Dexcom Transmitter 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ Dexcom Transmitter 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ Dexcom Transmitter 4](../images/xDrip_Dexcom_Transmitter04.png)

### New Sensor

* Schalte den Original Dexcom Empfänger aus (falls Du diesen verwendet).
* Stop sensor if necessary
   
   Stelle sicher, dass er tatsächlich gestoppt ist.
   
   Schaue auf dem zweiten "G5/G6 Status" Bildschirm nach `Queue Items` (etwa in der Mitte) - dort wird `(1) Stop Sensor` oder ähnlich angezeigt.
   
   Warte, bis diese Meldung verschwindet. Erfahrungsgemäß dauert dies einige Minuten.
   
   ![xDrip+ Stop Dexcom Sensor 1](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Stop Dexcom Sensor 2](../images/xDrip_Dexcom_StopSensor2.png)

* Clean contacts (transmitter backside) with alcohol and let air-dry.

* In case you use this function disable `Restart Sensor` and `Preemptive restarts` (Hamburger menu -> Settings -> G5/G6 Debug Settings). If you miss this step and have these functions enabled the new sensor will not start properly.
   
   ![xDrip+ Preemptive Restart](../images/xDrip_Dexcom_Restart.png)

* Start Sensor
   
   **It is recommended to wait approx. 15 minutes between stopping and starting the new sensor (until `Sensor Status: Stopped` is shown on second system status screen).**

* Set time inserted
   
   * To use G6 Native mode you must wait for the 2 hour warm up (i.e insertion time is now).
   * If you are using the xDrip+ algorithm then you can set a time more than 2 hours ago to avoid warm up. Readings may be very erratic. Therefore this is not recommended.
* Enter Sensor code (on the peel-off foil of the sensor) 
   * Keep code for further reference (i.e. new start after transmitter had to be removed)
   * Code can also be found in [xDrip+ logs](../Configuration/xdrip#retrieve-sensor-code): Click 3-dots-menu on xDrip+ homescreen and choose `View Event Logs`.
* No calibration is needed if you use G6 in "native mode". xDrip+ will show readings automatically after 2 hour warm-up.
* Do not turn original Dexcom Receiver (if used) back on before xDrip+ shows first readings.
   
   ![xDrip+ Start Dexcom Sensor 1](../images/xDrip_Dexcom_SensorStart01.png)
   
   ![xDrip+ Start Dexcom Sensor 2](../images/xDrip_Dexcom_SensorStart02.png)

### Retrieve sensor code

* In latest nightly builds the sensor code is shown in system status (Hamburger menu top left on homescreen).
* Swipe left once to see second screen.
   
   ![xDrip+ Retrieve Dexcom Sensor Code2](../images/xDrip_Dexcom_SensorCode2.png)

* Dexcom sensor code can also be found in xDrip+ logs.

* Tap 3 dot menu (top right side on homescreen)
* Select `View Event Logs` and search for "code"
   
   ![xDrip+ Retrieve Dexcom Sensor Code](../images/xDrip_Dexcom_SensorCode.png)

## Troubleshooting Dexcom G6 and xDrip+

### Problem connecting transmitter

* Transmitter must be shown in your smartphone's bluetooth settings.
* Transmitter will be shown as Dexcom?? whereas ?? represent the last two digits of your transmitter serial no. (i.e. DexcomHY).
* Open system status in xDrip+ (hamburger menue on top left side of home screen).
* Check if your transmitter is shown on first status page ('classic status page').
* If not: Delete device from your smartphone's bluetooth settings.
* Wait about 5 min. until Dexcom transmitter reconnects automatically.

### Problem when starting new sensor

* Native sensor is marked as "FAILED: Sensor Failed Start"
* Sensor stoppen
* Restart your phone
* Start sensor with code 0000 (four times zero)
* Wait 15 minutes
* Sensor stoppen
* Start sensor with "real" code (printed on the adhesive protector)

Check in xDrip+ logs if xDrip+ starts counting "Duration: 1 minute" (and so on). Only in the xdrip+ logs you can detect at an early stage whether xdrip+ has stopped a sensor. Latest status is not always shown correctly on bottom of startscreen.

## xDrip+ & Freestyle Libre

### Libre specific settings

* Open Bluetooth Settings -> Hamburger Menu (top left of homescreen) -> Settings -> scroll down -> Less common settings -> Bluetooth Settings
   
   ![xDrip+ Libre Bluetooth Settings 1](../images/xDrip_Libre_BTSettings1.png)

* Aktiviere die folgenden Einstellungen:
   
   * `Turn Bluetooth on` 
   * `Use scanning`
   * `Always discover services`

* Alle anderen Optionen sollten deaktiviert werden.
   
   ![xDrip+ Libre Bluetooth Settings 2](../images/xDrip_Libre_BTSettings2.png)

### Connect Libre Transmitter & start sensor

![xDrip+ Start Libre Transmitter & Sensor 1](../images/xDrip_Libre_Transmitter01.png)

![xDrip+ Start Libre Transmitter & Sensor 2](../images/xDrip_Libre_Transmitter02.png)

![xDrip+ Start Libre Transmitter & Sensor 3](../images/xDrip_Libre_Transmitter03.png)