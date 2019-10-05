# xDrip+ Einstellungen

Wenn Du es nicht bereits eingerichtet hast, lade [xDrip+](https://github.com/NightscoutFoundation/xDrip) herunter.

G6 Transmitter, die nach Herbst / Ende 2018 (z.B. Seriennummer beginnt mit 80 oder 81) benötigen mindestens [xDrip+ Master vom 18.05.2019](https://jamorham.github.io/#xdrip-plus).

Falls die Seriennummer Deines G6 Transmitters mit 8G... startet verwende [nightly build vom 28.07.2019 oder später](https://github.com/NightscoutFoundation/xDrip/releases).

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

### Identify receiver

* Bei einigen Anwendern kam es zu Problemen im Flugmodus. AAPS empfing keine BZ-Werte con xdrip+. Go to Settings > Inter-app settings > Identify receiver and enter `info.nightscout.androidaps`.
   
   ![xDrip+ Basic Inter-App Einstellungen Identifiziere Empfänger](../images/xDrip_InterApp_NS.png)

## xDrip+ mit Dexcom G6

### xDrip+ version depending on G6 transmitter serial no.

G6 Transmitter, die nach Herbst / Ende 2018 (z.B. Seriennummer beginnt mit 80 oder 81) benötigen mindestens [xDrip+ Master vom 18.05.2019](https://jamorham.github.io/#xdrip-plus).

Falls die Seriennummer Deines G6 Transmitters mit 8G... startet verwende [nightly build vom 28.07.2019 oder später](https://github.com/NightscoutFoundation/xDrip/releases).

### Dexcom specific settings

* Open G5/G6 Debug Settings -> Hamburger Menu (top left of homescreen) -> Settings -> G5/G6 Debug Settings ![Open xDrip+ Settings](../images/xDrip_Dexcom_SettingsCall.png)

* Enable the following settings
   
   * `Use the OB1 Collector`
   * `Native Algorithm` (important if you want to use SMB)
   * `G6 support`
   * `Allow OB1 unbonding`
   * `Allow OB1 initiate bonding`
* All other options should be disabled
* Adjust battery warning level to 280 (bottom of G5/G6 Debug Settings)
   
   ![xDrip+ G5/G6 Debug Settings](../images/xDrip_Dexcom_DebugSettings.png)

### Preemptive restarts not recommended

**Falls die Seriennummer Deines Dexcom G6 transmitters mit 8G beginnt können reemptive restarts nicht genutzt werden und ggf. sogar den Sensor unbenutztbar machen!**

Die automatische Verlängerung von Dexcom G6 Sensoren (`preemtive restarts`) werden nicht empfohlen, da dies zu Sprüngen in den BZ-Werten nach dem eustart am 9. Tag führen kann.

![xDrip+ Sprünge nach Preemptive Restart](../images/xDrip_Dexcom_PreemptiveJump.png)

Die Nutzung des G6 kann vielleicht etwas komplexer sein, als zunächst vermutet. Mache Dir die folgenden Punkte bewusst, um das System sicher zu nutzen:

* If you are using the native data with the calibration code in xDrip+ or Spike, the safest thing to do is not allow preemptive restarts of the sensor.
* If you must use preemptive restarts, then make sure you insert at a time of day where you can observe the change and calibrate if necessary. 
* If you are restarting sensors, either do it without the factory calibration for safest results on days 11 and 12, or ensure you are ready to calibrate and keep an eye on variation.
* Pre-soaking of the G6 with factory calibration is likely to give variation in results. Falls Du mit "pre-soaking" arbeitest, wirst Du wahrscheinlich besser Ergebnisse erzielen, wenn Du den Sensor kalibrierst.
* If you aren’t being observant about the changes that may be taking place, it may be better to revert to non-factory-calibrated mode and use the system like a G5.

Mehr zu den Details und Gründen für diese Empfehlungen findest Du im [kompletten Artikel](http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) (englisch) von Tim Street auf seiner Seite [www.diabettech.com](http://www.diabettech.com).

### Connect G6 transmitter for the first time

**Für den zweiten und alle weiteren Transmitter siehe [Transmitterlaufzeit verlängern](../Configuration/xdrip#extend-transmitter-life) weiter unten.**

G6 Transmitter, die nach Herbst / Ende 2018 (z.B. Seriennummer beginnt mit 80 oder 81) benötigen mindestens [xDrip+ Master vom 18.05.2019](https://jamorham.github.io/#xdrip-plus).

Falls die Seriennummer Deines G6 Transmitters mit 8G... startet verwende [nightly build vom 28.07.2019 oder später](https://github.com/NightscoutFoundation/xDrip/releases).

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

-> Falls die Seriennummer Deines Transmitters -nicht mit 8G beginnt und die Zeitangabe auch nach einigen Minuten fehlt, musst Du den Sensor stoppen und erneut starten.

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

* So far life cannot be extended for transmitters whos serial no. starts with 8G.
* To prevent difficulties starting sensors it is highly recommended to extend transmitter life before day 100 of first usage.
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

G6 Transmitter, die nach Herbst / Ende 2018 (z.B. Seriennummer beginnt mit 80 oder 81) benötigen mindestens [xDrip+ Master vom 18.05.2019](https://jamorham.github.io/#xdrip-plus).

Falls die Seriennummer Deines G6 Transmitters mit 8G... startet verwende [nightly build vom 28.07.2019 oder später](https://github.com/NightscoutFoundation/xDrip/releases).

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

* Forget device in smartphone’s BT settings (Will be shown as Dexcom?? whereas ?? are the last two digits of the transmitter serial no.)

* Remove transmitter (and sensor if replacing sensor)
* Long press the red xDrip+ blood drop icon on the main screen to enable the `Source Wizard Button`.
* Use the Source Wizard Button which ensures default settings including OB1 & Native Mode 
   * This guides you through the initial set up.
   * You will need your transmitter serial number if this is the first time you've used it.
* Put in serial number of new transmitter. Be careful not to confuse 0 (zero) and O (capital letter o).
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

* In master dated 2019/05/18 and the latest nightly builds the sensor code is shown in system status (Hamburger menu top left on homescreen).
* Swipe left once to see second screen.
   
   ![xDrip+ Retrieve Dexcom Sensor Code2](../images/xDrip_Dexcom_SensorCode2.png)

* Dexcom sensor code can also be found in xDrip+ logs.

* Tap 3 dot menu (top right side on homescreen)
* Select `View Event Logs` and search for "code"
   
   ![xDrip+ Retrieve Dexcom Sensor Code](../images/xDrip_Dexcom_SensorCode.png)

## Fehlerbehebung Dexcom G5/G6 und xDrip+

### Problem connecting transmitter

* Transmitter must be shown in your smartphone's bluetooth settings.
* Transmitter will be shown as Dexcom?? whereas ?? represent the last two digits of your transmitter serial no. (i.e. DexcomHY).
* Open system status in xDrip+ (hamburger menue on top left side of home screen).
* Check if your transmitter is shown on first status page ('classic status page').
* If not: Delete device from your smartphone's bluetooth settings and restart collector.
* Wait about 5 min. until Dexcom transmitter reconnects automatically.

### Problem when starting new sensor

* Native sensor is marked as "FAILED: Sensor Failed Start"
* Sensor stoppen
* Restart your phone
* Start sensor with code 0000 (four times zero)
* Wait 15 minutes
* Sensor stoppen
* Start sensor with "real" code (printed on the adhesive protector)

Überprüfe in den xDrip+ Logs, ob xDrip+ beginnt, mit "Duration: 1 minute" (und so weiter) zu zählen. Nur in den xdrip+ Logs kannst Du frühzeitig feststellen, ob xdrip+ einen Sensor gestoppt hat. Der letzte Status wird unten auf dem Startbildschirm nicht immer korrekt angezeigt.

## xDrip+ mit Freestyle Libre

### Libre specific settings

* Open Bluetooth Settings -> Hamburger Menu (top left of homescreen) -> Settings -> scroll down -> Less common settings -> Bluetooth Settings
   
   ![xDrip+ Libre Bluetooth Settings 1](../images/xDrip_Libre_BTSettings1.png)

* Enable the following settings
   
   * `Turn Bluetooth on` 
   * `Use scanning`
   * `Always discover services`

* All other options should be disabled
   
   ![xDrip+ Libre Bluetooth Settings 2](../images/xDrip_Libre_BTSettings2.png)

### Connect Libre Transmitter & start sensor

![xDrip+ Start Libre Transmitter & Sensor 1](../images/xDrip_Libre_Transmitter01.png)

![xDrip+ Start Libre Transmitter & Sensor 2](../images/xDrip_Libre_Transmitter02.png)

![xDrip+ Start Libre Transmitter & Sensor 3](../images/xDrip_Libre_Transmitter03.png)