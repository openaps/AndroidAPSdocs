# xDrip+ Einstellungen

If not already set up then download [xDrip+](https://github.com/NightscoutFoundation/xDrip)

Nutze für G6 Transmitter, die nach Mitte / Ende 2018 hergestellt wurden, eine der aktuellen <1>nightly build xDrip+ Versionen</1>. Diese Transmitter haben eine neue Firmware und die letzte stabile Version von xDrip+ vom 10.01.2019 kann mit diesen noch nicht korrekt umgehen.

## Grundsätzliche Einstellungen für alle CGM & FGM-Systeme

* Make sure to set Base URL correctly including **S** at the end of http**s**:// (not http://)
   
   z.B. https://API_SECRET@your-app-name.herokuapp.com/api/v1/
   
   -> Hamburger Menü (oben links auf dem Starbildschirm) -> Einstellungen-> Cloud Upload-> API Upload (REST) -> Basis-URL

* Deactivate `Automatic Calibration` If the checkbox for `Automatic Calibration` is checked, activate `Download data` once, then remove the checkbox for `Automatic Calibration` and deactivate `Download data` again, otherwise the treatments (insulin & carbs) will be added twice to Nightscout.

* Tap `Extra Options`
* Deactivate `Upload treatments` and `Back-fill data`
* Option `Alert on failures` should also be deactivated. Andernfalls erhälst Du alle 5 Minuten einen Alarm, falls das WLAN / Mobilfunknetz zu schlecht oder der Server nicht verfügbar ist.
   
   ![xDrip+ Grundeinstellungen 1](../images/xDrip_Basic1.png)
   
   ![xDrip+ Grundeinstellungen 2](../images/xDrip_Basic2.png)

* **InterApp-Einstellungen** (Broadcast) Wenn Du planst, AndroidAPS zu nutzen und die Daten an AndroidAPS weiterzugeben, musst Du den sogenannten 'Broadcast' in xDrip+ in den Inter-App Einstellungen einschalten.

* In order for the values to be equal, you should activate `Send the displayed glucose value`.
* If you have also activated `Accept treatments` and broadcasting in AndroidAPS, then xDrip+ will receive insulin, carbs and basal rate information from AndroidAPS and can estimate the hypo prediction etc. 
   
   ![xDrip+ Grundeinstellungen 3](../images/xDrip_Basic3.png)

## xDrip+ & Dexcom G6

### Dexcom-spezifische Einstellungen

* Öffne G5 Debug Einstellungen (gilt auch für Dexcom G6!) -> Hamburger Menü (oben links auf dem Homescreen) -> Einstellungen -> G5 Debug Einstellungen ![xDrip+ Einstellungen öffnen](../images/xDrip_Dexcom_SettingsCall.png)

* Aktiviere die folgenden Einstellungen:
   
   * `Use the OB1 Collector`
   * `Native Algorithm` (important if you want to use SMB)
   * `G6 support`
   * `Allow OB1 unbonding`
   * `Allow OB1 initiate bonding`
* Alle anderen Optionen sollten deaktiviert werden.
* Passe die Warnschwelle für die Batterie ('Adjust battery warning level') auf 280 an. (Du findest diese ganz unten in der Liste der G5/G6 Debug Settings.)
   
   ![xDrip+ G5 Debugeinstellungen](../images/xDrip_Dexcom_DebugSettings.png)

### Preemptive restarts werden nicht empfohlen

The automatic extension of Dexcom sensors (`preemtive restarts`) is not recommended as this might lead to “jumps” in BG values on day 9 after restart.

    ![xDrip+ Jump after Preemptive Restart](../images/xDrip_Dexcom_PreemptiveJump.png)
    

Die Nutzung des G6 kann vielleicht etwas komplexer sein, als zunächst vermutet. Mache Dir die folgenden Punkte bewusst, um das System sicher zu nutzen:

* If you are using the native data with the calibration code in xDrip+ or Spike, the safest thing to do is not allow preemptive restarts of the sensor.
* Falls Du den "preemptive restart" verwendest, stelle sicher, dass dieser zu einer Tageszeit erfolgt, zu der Du die Änderungen verfolgen und ggf. durch eine Kalibrierung eingreifen kannst. 
* Falls Du Sensoren verlängerst, verzichte aus Sicherheitsgründen entweder auf die Werkskalibrierung an Tag 11 und 12 oder stelle sicher, dass Du die Abweichungen im Auge hast und evtl. durch Kalibrierung korrigieren kannst.
* Das sogenannte "Pre-soaking" (Sensor früher ohne Transmitter setzen, damit er sich an die Gewebsflüssigkeit "gewöhnt") mit Werkskalibrierung führt wahrscheinlich zu Abweichungen in den Glukosewerten. Falls Du mit "pre-soaking" arbeitest, wirst Du wahrscheinlich besser Ergebnisse erzielen, wenn Du den Sensor kalibrierst.
* Wenn Du nicht auf die Abweichungen, die stattfinden können, achten willst, wäre es evtl. besser bei der Verlängerung auf die Werkskalibrierung zu verzichten und das System wie den G5 (mit "Pflichtkalibrierung") zu nutzen.

Mehr zu den Details und Gründen für diese Empfehlungen findest Du im [kompletten Artikel](http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) (englisch) von Tim Street auf seiner Seite [www.diabettech.com](http://www.diabettech.com).

### G6 Transmitter das erste Mal verbinden

**For second and following transmitters see [Extend transmitter life](../Configuration/xdrip#extend-transmitter-life) below.**

* Nutze für G6 Transmitter, die nach Mitte / Ende 2018 hergestellt wurden, eine der aktuellen <1>nightly build xDrip+ Versionen</1>. Diese Transmitter haben eine neue Firmware und die letzte stabile Version von xDrip+ vom 10.01.2019 kann mit diesen noch nicht korrekt umgehen.
* Schalten Sie den Original Dexcom Empfänger aus (falls Du diesen verwendet).
* Long press the red xDrip+ blood drop icon on the main screen to enable the `Source Wizard Button`.
* Benutze den Source Wizard Button. Damit wird sicher gestellt, dass Du die Standardeinstellungen inkl. OB1 & Native Mode verwendest. 
   * Du wirst durch die Grundeinstellungen geführt.
   * you will need your transmitter serial number if this is the first time you've used it.

* Gib die Seriennummer des Transmitters, die Du auf der Transmitter-Verpackung und auf der Rückseite des Transmitters findest, ein.
   
   ![xDrip+ Dexcom Transmitter Seriennummer](../images/xDrip_Dexcom_TransmitterSN.png)

* Setze den neuen Sensor (außer Du tauscht den Transmitter während einer laufenden Sensorsitzung).

* Klicke den Transmitter in die Halterung auf dem Sensorpflaster ein.
* Start sensor (only if replacing) -> Near the bottom of the screen `Warm Up x,x hours left` must be displayed after a few minutes. -> If there is no time specification after a few minutes stop and restart the sensor.
* Starte den Datensammler neu (im Systemstatus und nur, wenn Du den Sensor neu gesetzt hast).
* Falls Du den Dexcom Empfänger nutzt, schalte diesen nicht ein, bevor xDrip+ die ersten BZ-Werte anzeigt.
* Long press the red xDrip+ blood drop icon on the main screen to disable the `Source Wizard Button`.
   
   ![xDrip+ Dexcom Transmitter 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ Dexcom Transmitter 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ Dexcom Transmitter 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ Dexcom Transmitter 4](../images/xDrip_Dexcom_Transmitter04.png)

### Transmitter-Batteriestatus

* Battery status can be controlled in system status (Hamburger menu top left on homescreen)
* Wische nach links, um den zweiten Status-Bildschirm zu sehen.![xDrip+ Erster Transmitter](../images/xDrip_Dexcom_Battery.png)

* Die genauen Werte, nach denen der Transmitter aufgrund niedrigem Batteriestand ausfällt, sind nicht bekannt. Die folgenden Informationen wurden von einem User gepostet, nachdem sich der Transmitter abgeschaltet hatte: Transmitter days: 151 Voltage A: 297 Voltage B: 260 Resistance: 2391

### Transmitterlaufzeit verlängern

* Switch to the `engineering mode`: 
   * Klicke auf das Spritzen-Symbol rechts auf dem xDrip+ Startbildschirm.
   * Klicke dann auf das Mikrophon-Symbol in der unteren rechten Ecke.
   * Gib in das Textfeld, das geöffnet wird, "enable engineering mode" ein und klicken auf OK. 
   * Klicke auf "Done".
   * Falls Du die Google Speak engine nutzt, kannst Du auch das Sprachkommando "enable engineering mode" nutzen. 
* Go to the G5 debug settings and check `OB1 collector`.
* Benutze den Sprachbefehl: “hard reset transmitter”
* Beim nächsten Dateneingang vom Transmitter wird der Reset durchgeführt.
* Beobachte im Systemstatus (Hamburgermenü links oben -> Systemstatus) was passiert.

### Transmitter ersetzen

Nutze für G6 Transmitter, die nach Mitte / Ende 2018 hergestellt wurden, eine der aktuellen <1>nightly build xDrip+ Versionen</1>. Diese Transmitter haben eine neue Firmware und die letzte stabile Version von xDrip+ vom 10.01.2019 kann mit diesen noch nicht korrekt umgehen.

* Schalte den Original Dexcom Empfänger aus (falls Du diesen verwendet).
* Stop sensor (only if replacing sensor)
   
   Ensure it really is stopped:
   
   On the second "G5/G6 Status" screen look at `Queue Items` about half way down - It may say something like `(1) Stop Sensor`
   
   Wait until this goes - usually within a few minutes.
   
   -> To remove transmitter without stopping sensor see this video <https://youtu.be/AAhBVsc6NZo>.
   
   ![xDrip+ Stop Dexcom Sensor 1](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Stop Dexcom Sensor 2](../images/xDrip_Dexcom_StopSensor2.png)

* Wähle im Systemstatus "Gerät löschen".
   
   ![xDrip+ Gerät löschen](../images/xDrip_Dexcom_ForgetDevice.png)

* Forget device in smartphone’s BT settings (Will be shown as DexcomXX whereas XX are the last two digits of the transmitter serial no.)

* Entferne den Transmitter (und den Sensor, falls Du auch diesen wechselst).
* Long press the red xDrip+ blood drop icon on the main screen to enable the `Source Wizard Button`.
* Benutze den Source Wizard Button. Damit wird sicher gestellt, dass Du die Standardeinstellungen inkl. OB1 & Native Mode verwendest. 
   * Du wirst durch die Grundeinstellungen geführt.
   * You will need your transmitter serial number if this is the first time you've used it.
* Gib die Seriennnummer des neuen Transmitters ein.
* Insert new sensor (only if replacing).
* Klicke den Transmitter in die Halterung auf dem Sensorpflaster ein.
* Start sensor (only if replacing)
   
   **It is recommended to wait approx. 15 minutes between stopping and starting the new sensor (until `Sensor Status: Stopped` is shown on second system status screen).**

* Starte den Datensammler neu (im Systemstatus und nur, wenn Du den Sensor neu gesetzt hast).

* Falls Du den Dexcom Empfänger nutzt, schalte diesen nicht ein, bevor xDrip+ die ersten BZ-Werte anzeigt.
* Long press the red xDrip+ blood drop icon on the main screen to disable the `Source Wizard Button`.
   
   ![xDrip+ Dexcom Transmitter 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ Dexcom Transmitter 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ Dexcom Transmitter 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ Dexcom Transmitter 4](../images/xDrip_Dexcom_Transmitter04.png)

### Neuer Sensor

* Schalte den Original Dexcom Empfänger aus (falls Du diesen verwendet).
* Stop sensor if necessary
   
   Ensure it really is stopped:
   
   On the second "G5/G6 Status" screen look at `Queue Items` about half way down - It may say something like `(1) Stop Sensor`
   
   Wait until this goes - usually within a few minutes.
   
   ![xDrip+ Stop Dexcom Sensor 1](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Stop Dexcom Sensor 2](../images/xDrip_Dexcom_StopSensor2.png)

* Reinige die Kontakte (Transmitter-Rückseite) mit Alkohol und lasse sie an der Luft trocknen.

* In case you use this function disable `Restart Sensor` and `Preemptive restarts` (Hamburger menu -> Settings -> G5/G6 Debug Settings). Wenn Du diese Funktionen nicht deaktivierst, wird der neue Sensor nicht richtig starten.
   
   ![xDrip+ Preemptive Restart](../images/xDrip_Dexcom_Restart.png)

* Start Sensor
   
   **It is recommended to wait approx. 15 minutes between stopping and starting the new sensor (until `Sensor Status: Stopped` is shown on second system status screen).**

* Set time inserted
   
   * Um den G6 im "native mode" zu nutzen, musst Du die 2-Stunden-Aufwärmzeit abwarten.
   * Wenn Du den xDrip+ Algorithmus verwendest, kannst Du eine Setzzeit von mehr als zwei Stunden in der Vergangenheit setzen, um die Aufwärmphase zu umgehen. Die angeziegten Werte können dann aber recht fehlerhaft sein. Deshalb wird dies nicht empfohlen.
* Gib den Sensorcode ein. Diesen findest Du auf der Abdeckfolie des Sensorpflasters. 
   * Bewahre diesen Code für künftige Nutzung auf (z.B. für einen Neustart nach Tausch des Transmitters).
   * Code can also be found in [xDrip+ logs](../Configuration/xdrip#retrieve-sensor-code): Click 3-dots-menu on xDrip+ homescreen and choose `View Event Logs`.
* Kalibrierungen sind nicht notwendig, wenn Du den G6 im "native mode" verwendest. xDrip+ wird nach der zweistündigen Aufwärmphase automatisch die erste BZ-Werte anzeigen.
* Falls Du den Dexcom Empfänger nutzt, schalte diesen nicht ein, bevor xDrip+ die ersten BZ-Werte anzeigt.
   
   ![xDrip+ Sensor starten 1](../images/xDrip_Dexcom_SensorStart01.png)
   
   ![xDrip+ Sensor starten 2](../images/xDrip_Dexcom_SensorStart02.png)

### Sensorcode in den Logs finden

* Der Dexcom Sensorcode findet sich in den xDrip+ Logs.
* Tippe auf das 3-Punkte-Menü (oben rechts auf dem Homescreen).
* Select `View Event Logs` and search for "code"
   
   ![xDrip+ Dexcom Sensorcode ermitteln](../images/xDrip_Dexcom_SensorCode.png)

## xDrip+ mit Freestyle Libre

### Libre-spezifische Einstellungen

* Öffne die Bluetooth Einstellungen -> Hamburger Menü (oben links auf dem Startbildschirm) -> Einstellungen -> scrolle nach unten -> Erweiterte Einstellungen -> Bluetootheinstellungen
   
   ![xDrip+ Libre Bluetooth Einstellungen 1](../images/xDrip_Libre_BTSettings1.png)

* Aktiviere die folgenden Einstellungen:
   
   * `Turn Bluetooth on` 
   * `Use scanning`
   * `Always discover services`

* Alle anderen Optionen sollten deaktiviert werden.
   
   ![xDrip+ Libre Bluetooth Einstellungen 2](../images/xDrip_Libre_BTSettings2.png)

### Libre Transmitter verbinden und Sensor starten

    ![xDrip+ Start Libre Transmitter & Sensor 1](../images/xDrip_Libre_Transmitter01.png)
    
    ![xDrip+ Start Libre Transmitter & Sensor 2](../images/xDrip_Libre_Transmitter02.png)
    
    ![xDrip+ Start Libre Transmitter & Sensor 3](../images/xDrip_Libre_Transmitter03.png)