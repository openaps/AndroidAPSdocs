# xDrip+ Einstellungen

Wenn Du es nicht bereits eingerichtet hast, lade [xDrip+](https://github.com/NightscoutFoundation/xDrip) herunter.

G6 Transmitter, die nach Herbst / Ende 2018 (z.B. Seriennummer beginnt mit 80 oder 81) benötigen mindestens [xDrip+ Master vom 18.05.2019](https://jamorham.github.io/#xdrip-plus).

Falls die Seriennummer Deines G6 Transmitters mit 8G... startet or 8H... use one of the [latest nightly builds](https://github.com/NightscoutFoundation/xDrip/releases).

## Grundsätzliche Einstellungen für alle CGM & FGM-Systeme

* Stelle sicher, dass Du die Base URL korrekt eingibst - inkl. **S** am Ende von http**s**:// (nicht http://).
   
   z.B. https://API_SECRET@your-app-name.herokuapp.com/api/v1/
   
   -> Hamburger Menü (oben links auf dem Starbildschirm) -> Einstellungen-> Cloud Upload-> API Upload (REST) -> Basis-URL

* Deaktiviere `Automatic Calibration` Falls die Checkbox für `Automatic Calibration` ausgewählt ist, aktiviere `Download data` einmalig, entferne dann den Haken in der Checkbox für `Automatic Calibration` und deaktiviere `Download data` wieder. Sonst werden die Behandlungen (Insulin & Kohlenhydrate) doppelt in Nightscout eingetragen.

* Tippe auf `Extra Options`.
* Deaktiviere `Upload treatments` und `Back-fill data`.
* Die Option `Alert on failures` sollte ebenfalls deaktiviert sein. Andernfalls erhältst Du alle 5 Minuten einen Alarm, falls das WLAN / Mobilfunknetz zu schlecht oder der Server nicht verfügbar ist.
   
   ![xDrip+ Grundeinstellungen 1](../images/xDrip_Basic1.png)
   
   ![xDrip+ Grundeinstellungen 2](../images/xDrip_Basic2.png)

* **InterApp-Einstellungen** (Broadcast) Wenn Du planst, AndroidAPS zu nutzen und die Daten an AndroidAPS weiterzugeben, musst Du den sogenannten 'Broadcast' in xDrip+ in den Inter-App Einstellungen einschalten.

* Damit die Werte übereinstimmen, solltest Du `Sende den angezeigten Glukosewert` aktivieren.
* Wenn Du zusätzlich `Behandlungen annehmen` und in AndroidAPS den Brodcast aktivierst, dann wird xDrip+ Insulinmengen, Kohlenhydrate und Basalrateninformationen aus AndroidAPS erhalten und kann so z.B. niedrige Werte vorhersagen. 
   
   ![xDrip+ Grundeinstellungen 3](../images/xDrip_Basic3.png)

### Identifiziere Empfänger

* Bei einigen Anwendern kam es zu Problemen im Flugmodus. AAPS empfing keine BZ-Werte von xDrip+. Gehe zu Einstellungen > Inter-App Einstellungen > Identifiziere Empfänger und gebe `info.nightscout.androidaps` ein.
   
   ![xDrip+ Basic Inter-App Einstellungen Identifiziere Empfänger](../images/xDrip_InterApp_NS.png)

## xDrip+ mit Dexcom G6

### xDrip+ Version abhängig von der G6 Transmitter Seriennummer

G6 Transmitter, die nach Herbst / Ende 2018 (z.B. Seriennummer beginnt mit 80 oder 81) benötigen mindestens [xDrip+ Master vom 18.05.2019](https://jamorham.github.io/#xdrip-plus).

Falls die Seriennummer Deines G6 Transmitters is starting with 8G or 8H try [nightly build 2019/07/28 or later](https://github.com/NightscoutFoundation/xDrip/releases).

### Dexcom-spezifische Einstellungen

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

### Preemptive restarts werden nicht empfohlen

**Falls die Seriennummer Deines Dexcom G6 Transmitters is starting with 8G or 8H preemptive restarts do not work and might kill the sensor completely!**

The automatic extension of Dexcom sensors (`preemptive restarts`) is not recommended as this might lead to “jumps” in BG values on day 9 after restart.

![xDrip+ Sprünge nach Preemptive Restart](../images/xDrip_Dexcom_PreemptiveJump.png)

Die Nutzung des G6 kann vielleicht etwas komplexer sein, als zunächst vermutet. Mache Dir die folgenden Punkte bewusst, um das System sicher zu nutzen:

* Wenn Du mit nativen Daten und dem Kalibrierungscode in xDrip+ oder Spike arbeitest, ist es am sichersten, auf den "preemptive" Neustart des Sensors zu verzichten.
* Falls Du den "preemptive restart" verwendest, stelle sicher, dass dieser zu einer Tageszeit erfolgt, zu der Du die Änderungen verfolgen und ggf. durch eine Kalibrierung eingreifen kannst. 
* Falls Du Sensoren verlängerst, verzichte aus Sicherheitsgründen entweder auf die Werkskalibrierung an Tag 11 und 12 oder stelle sicher, dass Du die Abweichungen im Auge hast und evtl. durch Kalibrierung korrigieren kannst.
* Das sogenannte "Pre-soaking" (Sensor früher ohne Transmitter setzen, damit er sich an die Gewebsflüssigkeit "gewöhnt") mit Werkskalibrierung führt wahrscheinlich zu Abweichungen in den Glukosewerten. Falls Du mit "pre-soaking" arbeitest, wirst Du wahrscheinlich besser Ergebnisse erzielen, wenn Du den Sensor kalibrierst.
* Wenn Du nicht auf die Abweichungen, die stattfinden können, achten willst, wäre es evtl. besser bei der Verlängerung auf die Werkskalibrierung zu verzichten und das System wie den G5 (mit "Pflichtkalibrierung") zu nutzen.

Mehr zu den Details und Gründen für diese Empfehlungen findest Du im [kompletten Artikel](http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) (englisch) von Tim Street auf seiner Seite [www.diabettech.com](http://www.diabettech.com).

### G6 Transmitter das erste Mal verbinden

**Für den zweiten und alle weiteren Transmitter siehe [Transmitterlaufzeit verlängern](../Configuration/xdrip#extend-transmitter-life) weiter unten.**

G6 Transmitter, die nach Herbst / Ende 2018 (z.B. Seriennummer beginnt mit 80 oder 81) benötigen mindestens [xDrip+ Master vom 18.05.2019](https://jamorham.github.io/#xdrip-plus).

Falls die Seriennummer Deines G6 Transmitters is starting with 8G or 8H try [nightly build 2019/07/28 or later](https://github.com/NightscoutFoundation/xDrip/releases).

* Schalte den Original Dexcom Empfänger aus (falls Du diesen verwendet).
* Drücke auf der Startseite lang auf den roten Blutstropfen des xDrip+ Logos, um den `Source Wizard Button` zu aktivieren.
* Benutze den Source Wizard Button. Damit wird sicher gestellt, dass Du die Standardeinstellungen inkl. OB1 & Native Mode verwendest. 
   * Du wirst durch die Grundeinstellungen geführt.
   * Wenn Du den Transmitter zum ersten Mal verbindest, benötigst Du die Transmitter-Seriennummer.

* Gib die Seriennummer des Transmitters, die Du auf der Transmitter-Verpackung und auf der Rückseite des Transmitters findest, ein. Achte darauf, 0 (Null) und O (Großbuchstabe o) korrekt auseinander zu halten.
   
   ![xDrip+ Dexcom Transmitter Seriennummer](../images/xDrip_Dexcom_TransmitterSN.png)

* Setze den neuen Sensor (außer Du tauscht den Transmitter während einer laufenden Sensorsitzung).

* Klicke den Transmitter in die Halterung auf dem Sensorpflaster ein.
* * Starte den neuen Sensor NICHT bevor eine der folgenden Informationen auf der Classic Status Page -> G5/G6 status -> PhoneServiceState angezeigt wird:
   
   * Transmitter Seriennummer beginnt mit 80 oder 81: "Got data hh:mm" (z.B. "Got data 19:04")
   * Transmitter Seriennummer beginnt mit 8G oder 8H: "Got glucose hh:mm" (z.B. "Got glucose 19:04") oder "Got no raw hh:mm" (z.B. "Got now raw 19:04")
   
   ![xDrip PhoneServiceState](../images/xDrip_Dexcom_PhoneServiceState.png)

* Starte den neuen Sensor (außer Du tauscht den Transmitter während einer laufenden Sensorsitzung).
   
   -> Am unteren Bildschirmrand nach einigen Minuten wird `Warm Up x,x Stunden left` angezeigt.

-> Falls die Seriennummer Deines Transmitters does not start with 8G or 8H and there is no time specification after a few minutes stop and restart the sensor.

* Starte den Datensammler neu (im Systemstatus und nur, wenn Du den Sensor neu gesetzt hast).
* Falls Du den Dexcom Empfänger nutzt, schalte diesen nicht ein, bevor xDrip+ die ersten BZ-Werte anzeigt.
* Drücke auf der Startseite lang auf den roten Blutstropfen des xDrip+ Logos, um den `Source Wizard Button` zu deaktivieren.
   
   ![xDrip+ Dexcom Transmitter 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ Dexcom Transmitter 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ Dexcom Transmitter 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ Dexcom Transmitter 4](../images/xDrip_Dexcom_Transmitter04.png)

### Transmitter-Batteriestatus

* Der Batteriestatus kann im Systemstatus (Hamburgermenü links oben auf dem Startbildschirm) überwacht werden.
* Wische nach links, um den zweiten Status-Bildschirm zu sehen.![xDrip+ Erster Transmitter](../images/xDrip_Dexcom_Battery.png)

* Die genauen Werte, nach denen der Transmitter aufgrund niedrigem Batteriestand ausfällt, sind nicht bekannt. Die folgende Informationen wurde online gepostet, nachdem der Transmitter die Arbeit endgültig eingestellt hatte:
   
   * Posting 1: Laufzeit: 151 Tage / Voltage A: 297 / Voltage B: 260 / Resistance: 2391
   * Posting 2: Laufzeit: 249 Tage / Voltage A: 275 (bei Auftritt des Fehlers)

### Transmitterlaufzeit verlängern

* Bisher kann die Laufzeit von Transmittern, deren Seriennummer starts with 8G or 8H.
* Um Schwierigkeiten beim Start von Sensoren zu vermeiden, wird dringend empfohlen, den Transmitter vor Ablauf des 100. Tags der ersten Nutzung zu verlängern.
* Eine laufende Sensorsitzung wird gestoppt, wenn Du die Transmitterlaufzeit verlängerst. So, extend before sensor change or be aware that there will be a new 2 h warm-up phase.
* Wechsle in den `engineering mode`: 
   * Klicke auf das Spritzen-Symbol rechts auf dem xDrip+ Startbildschirm.
   * Klicke dann auf das Mikrophon-Symbol in der unteren rechten Ecke.
   * Gib in das Textfeld, das geöffnet wird, "enable engineering mode" ein und klicken auf OK. 
   * Klicke auf "Done".
   * Falls Du die Google Speak engine nutzt, kannst Du auch das Sprachkommando "enable engineering mode" nutzen. 
* Wechsle zu den G5 Debugeinstellungen und prüfe den `OB1 collector`.
* Benutze den Sprachbefehl: “hard reset transmitter”
* Beim nächsten Dateneingang vom Transmitter wird der Reset durchgeführt.
* Beobachte im Systemstatus (Hamburgermenü links oben -> Systemstatus) was passiert.
* Wenn auf dem zweiten Statusbildschirm der Hinweis "Phone Service State: Hard Reset maybe failed" angezeigt wird, kannst Du trotzdem einfach den Sensor starten. Danach sollte diese Meldung verschwinden.
   
   ![xDrip+ Hard Reset maybe failed](../images/xDrip_HardResetMaybeFailed.png)

* Die "Transmitter days" werden nach erfolgreicher Verlängerung und Start des Sensors auf 0 zurückgesetzt.

### Transmitter ersetzen

G6 Transmitter, die nach Herbst / Ende 2018 (z.B. Seriennummer beginnt mit 80 oder 81) benötigen mindestens [xDrip+ Master vom 18.05.2019](https://jamorham.github.io/#xdrip-plus).

Falls die Seriennummer Deines G6 Transmitters is starting with 8G or 8H use one of the [latest nightly builds](https://github.com/NightscoutFoundation/xDrip/releases).

* Schalte den Original Dexcom Empfänger aus (falls Du diesen verwendet).
* Stoppe den Sensor (außer Du tauscht den Transmitter während einer laufenden Sensorsitzung).
   
   Stelle sicher, dass er tatsächlich gestoppt ist.
   
   On the second "G5/G6 Status" screen look at `Queue Items` about halfway down - It may say something like `(1) Stop Sensor`
   
   Warte, bis diese Meldung verschwindet. Erfahrungsgemäß dauert dies einige Minuten. Sensor Status must be "Stopped" (see screenshot).
   
   -> Eine Videoanleitung zum Wechsel des Transmitters ohne den Sensor zu stoppen findest Du unter <https://youtu.be/AAhBVsc6NZo>.
   
   ![xDrip+ Dexcom Sensor 1 stoppen](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Dexcom Sensor 2 stoppen](../images/xDrip_Dexcom_StopSensor2.png)

* Forget device in xDrip system status AND in smartphone’s BT settings (Will be shown as Dexcom?? dabei steht ?? are the last two digits of the transmitter serial no.)
   
   ![xDrip+ Gerät löschen](../images/xDrip_Dexcom_ForgetDevice.png)

* Remove transmitter (and sensor if replacing sensor)

* Put the old transmitter far away to prevent reconnection. A microwave is a perfect Faraday shield for this - but unplug power cord to be 100% no one is turning the microwave on.
* Drücke auf der Startseite lang auf den roten Blutstropfen des xDrip+ Logos, um den `Source Wizard Button` zu aktivieren.
* Benutze den Source Wizard Button. Damit wird sicher gestellt, dass Du die Standardeinstellungen inkl. OB1 & Native Mode verwendest. 
   * Du wirst durch die Grundeinstellungen geführt.
   * Wenn Du den Transmitter zum ersten Mal verbindest, benötigst Du die Transmitter-Seriennummer.
* Gib die Seriennummer des neuen Transmitters ein. Achte darauf, 0 (Null) und O (Großbuchstabe o) korrekt auseinander zu halten.
* Setze den neuen Sensor (außer Du tauscht den Transmitter während einer laufenden Sensorsitzung).
* Put transmitter into sensor - **Do not start sensor immediately!**
* New "Firefly Transmitters" (serial no. starting with 8G or 8H) can only be used in native mode.
* The following options must not be activated for new "Firefly Transmitters" (serial no. starting with 8G or 8H):
   
   * Preemptive Restart (disable!)
   * Restart sensor (disable!)
   * Fallback to xDrip (disable!)
   
   ![Settings for Firefly transmitters](../images/xDrip_Dexcom_FireflySettings.png)

* Check in Classic Status Page -> G5/G6 status -> PhoneServiceState if one of the following informations is displayed:
   
   * Transmitter Seriennummer beginnt mit 80 oder 81: "Got data hh:mm" (z.B. "Got data 19:04")
   * Transmitter Seriennummer beginnt mit 8G oder 8H: "Got glucose hh:mm" (z.B. "Got glucose 19:04") oder "Got no raw hh:mm" (z.B. "Got now raw 19:04")
   
   ![xDrip PhoneServiceState](../images/xDrip_Dexcom_PhoneServiceState.png)

* Wait 15 minutes as the transmitter should communicate several times with xDrip before new sensor is started. Battery data will be shown below Firmware information.
   
   ![Firefly transmitter battery data](../images/xDrip_Dexcom_FireflyBattery.png)

* Start sensor and DO NOT BACKDATE! Always select "Yes, today"!

* Restart collector (system status - if not replacing sensor)
* Falls Du den Dexcom Empfänger nutzt, schalte diesen nicht ein, bevor xDrip+ die ersten BZ-Werte anzeigt.
* Drücke auf der Startseite lang auf den roten Blutstropfen des xDrip+ Logos, um den `Source Wizard Button` zu deaktivieren.
   
   ![xDrip+ Dexcom Transmitter 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ Dexcom Transmitter 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ Dexcom Transmitter 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ Dexcom Transmitter 4](../images/xDrip_Dexcom_Transmitter04.png)

### Neuer Sensor

* Schalte den Original Dexcom Empfänger aus (falls Du diesen verwendet).
* Stoppe den alten Sensor - falls erforderlich.
   
   Stelle sicher, dass er tatsächlich gestoppt ist.
   
   On the second "G5/G6 Status" screen look at `Queue Items` about halfway down - It may say something like `(1) Stop Sensor`
   
   Warte, bis diese Meldung verschwindet. Erfahrungsgemäß dauert dies einige Minuten.
   
   ![xDrip+ Dexcom Sensor 1 stoppen](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Dexcom Sensor 2 stoppen](../images/xDrip_Dexcom_StopSensor2.png)

* Reinige die Kontakte (Transmitter-Rückseite) mit Alkohol und lasse sie an der Luft trocknen.

* Falls Du diese Funktionen verwendest: Deaktiviere `Restart Sensor` und `Preemptive restarts` (Hamburger Menü -> Einstellungen -> G5 Debugeinstellungen). Wenn Du diese Funktionen nicht deaktivierst, wird der neue Sensor nicht richtig starten.
   
   ![xDrip+ Preemptive Restart](../images/xDrip_Dexcom_Restart.png)

* Starte den Sensor
   
   **For new Firefly transmitters** (serial no. starting with 8G or 8H) **it is mandatory, for all other transmitters it is recommended to wait approx. 15 minutes between stopping and starting the new sensor (until `Sensor Status: Stopped` is shown on second system status screen). DO NOT BACKDATE!**

* Gib die Zeit an, zu der der Sensor gesetzt wurde
   
   * Um den G6 im "native mode" zu nutzen, musst Du die 2-Stunden-Aufwärmzeit abwarten.
   * Wenn Du den xDrip+ Algorithmus verwendest, kannst Du eine Setzzeit von mehr als zwei Stunden in der Vergangenheit setzen, um die Aufwärmphase zu umgehen. Die angezeigten Werte können dann aber recht fehlerhaft sein. Therefore, this is not recommended.
* Gib den Sensorcode ein. Diesen findest Du auf der Abdeckfolie des Sensorpflasters. 
   * Bewahre diesen Code für künftige Nutzung auf (z.B. für einen Neustart nach Tausch des Transmitters).
   * Der Code ist auch in den [xDrip+ Logs](../Configuration/xdrip#retrieve-sensor-code) zu finden: Klicke auf das 3-Punkte-Menü rechts oben auf dem xDrip+ Startbildschirm und wähle `Log anzeigen`.
* Kalibrierungen sind nicht notwendig, wenn Du den G6 im "native mode" verwendest. xDrip+ wird nach der zweistündigen Aufwärmphase automatisch die erste BZ-Werte anzeigen.
* Falls Du den Dexcom Empfänger nutzt, schalte diesen nicht ein, bevor xDrip+ die ersten BZ-Werte anzeigt.
   
   ![xDrip+ Sensor starten 1](../images/xDrip_Dexcom_SensorStart01.png)
   
   ![xDrip+ Sensor starten 2](../images/xDrip_Dexcom_SensorStart02.png)

### Sensorcode in den Logs finden

* Wenn Du den Master vom 18.05.2019 oder einen der letzten Nightly Builds verwendest, wird der Sensorcode im Systemstatus angezeigt (Hamburger Menü links oben auf dem Startbildschirm).
* Wische nach links, um den zweiten Status-Bildschirm zu sehen.
   
   ![xDrip+ Dexcom Sensorcode ermitteln (Status Bildschirm)](../images/xDrip_Dexcom_SensorCode2.png)

* Der Dexcom Sensorcode findet sich auch in den xDrip+ Logs.

* Tippe auf das 3-Punkte-Menü (oben rechts auf dem Homescreen).
* Wähle `Log anzeigen` und suche nach "code".
   
   ![xDrip+ Dexcom Sensorcode ermitteln](../images/xDrip_Dexcom_SensorCode.png)

## Fehlerbehebung Dexcom G5/G6 und xDrip+

### Problem beim Verbinden mit dem Transmitter

* Der Transmitter muss in den Bluetooth-Einstellungen Deines Smartphones angezeigt werden.
* Transmitter wird als Dexcom?? angezeigt, dabei steht ?? für die letzten beiden Zeichen der Seriennummer Deines Transmitters (z.B. DexcomHY).
* Open system status in xDrip+ (hamburger menu on top left side of home screen).
* Überprüfe, ob der Transmitter auf der ersten Statusseite angezeigt wird ('classic status page').
* Wenn nicht: Lösche den Transmitter aus den Bluetooth-Einstellungen Deines Smartphones und starte den Datensammler neu.
* Warte etwa 5 Minuten bis der Transmitter wieder automatisch verbunden wird.

### Probleme beim Starten eines neuen Sensors

Bitte beachte, dass die folgende Methode evtl. nicht funktioniert, wenn die Seriennummer Deines Transmitters is starting with 8G or 8H.

* Im 'native mode' wird der Sensor als "FAILED: Sensor Failed Start" gekennzeichnet.
* Sensor stoppen
* Starte dein Smartphone neu
* Starte den Sensor mit Code 0000 (viermal Null)
* Warte 15 Minuten
* Sensor stoppen
* Starte den Sensor mit dem "tatsächlichen" Code, den Du auf dem Schutzpapier des Pflasters findest.

Überprüfe in den xDrip+ Logs, ob xDrip+ beginnt, mit "Duration: 1 minute" (und so weiter) zu zählen. Nur in den xdrip+ Logs kannst Du frühzeitig feststellen, ob xdrip+ einen Sensor gestoppt hat. Der letzte Status wird unten auf dem Startbildschirm nicht immer korrekt angezeigt.

## xDrip+ mit Freestyle Libre

### Libre-spezifische Einstellungen

* Öffne die Bluetooth Einstellungen -> Hamburger Menü (oben links auf dem Startbildschirm) -> Einstellungen -> scrolle nach unten -> Erweiterte Einstellungen -> Bluetootheinstellungen
   
   ![xDrip+ Libre Bluetooth Einstellungen 1](../images/xDrip_Libre_BTSettings1.png)

* Aktiviere die folgenden Einstellungen:
   
   * `Schalte Bluetooth ein` 
   * `Verwende Scannen`
   * `Dienste immer ermitteln`

* Alle anderen Optionen sollten deaktiviert werden.
   
   ![xDrip+ Libre Bluetooth Einstellungen 2](../images/xDrip_Libre_BTSettings2.png)

### Libre Transmitter verbinden und Sensor starten

![xDrip+ Start Libre Transmitter & Sensor 1](../images/xDrip_Libre_Transmitter01.png)

![xDrip+ Start Libre Transmitter & Sensor 2](../images/xDrip_Libre_Transmitter02.png)

![xDrip+ Start Libre Transmitter & Sensor 3](../images/xDrip_Libre_Transmitter03.png)