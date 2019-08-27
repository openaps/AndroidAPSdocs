# xDrip+ Einstellungen

Wenn Du es nicht bereits eingerichtet hast, lade [xDrip+](https://github.com/NightscoutFoundation/xDrip) herunter.

Nutze für G6 Transmitter, die nach Mitte / Ende 2018 hergestellt wurden, eine der aktuellen <1>nightly build xDrip+ Versionen</1>. Diese Transmitter haben eine neue Firmware und die letzte stabile Version von xDrip+ vom 10.01.2019 kann mit diesen noch nicht korrekt umgehen. Falls die Seriennummer Deines Dexcom G6 transmitters mit 8G... beginnt versuche die Nightly Build vom 28.07.2019 oder später.

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

Die automatische Verlängerung von Dexcom G6 Sensoren (`preemtive restarts`) werden nicht empfohlen, da dies zu Sprüngen in den BZ-Werten nach dem eustart am 9. Tag führen kann.

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

* Nutze für G6 Transmitter, die nach Mitte / Ende 2018 hergestellt wurden, eine der aktuellen <1>nightly build xDrip+ Versionen</1>. Diese Transmitter haben eine neue Firmware und die letzte stabile Version von xDrip+ vom 10.01.2019 kann mit diesen noch nicht korrekt umgehen.
* Schalten Sie den Original Dexcom Empfänger aus (falls Du diesen verwendet).
* Drücke auf der Startseite lang auf den roten Blutstropfen des xDrip+ Logos, um den `Source Wizard Button` zu aktivieren.
* Benutze den Source Wizard Button. Damit wird sicher gestellt, dass Du die Standardeinstellungen inkl. OB1 & Native Mode verwendest. 
   * Du wirst durch die Grundeinstellungen geführt.
   * Wenn Du den Transmitter zum ersten Mal verbindest, benötigst Du die Transmitter-Seriennummer.

* Gib die Seriennummer des Transmitters, die Du auf der Transmitter-Verpackung und auf der Rückseite des Transmitters findest, ein.
   
   ![xDrip+ Dexcom Transmitter Seriennummer](../images/xDrip_Dexcom_TransmitterSN.png)

* Setze den neuen Sensor (außer Du tauscht den Transmitter während einer laufenden Sensorsitzung).

* Klicke den Transmitter in die Halterung auf dem Sensorpflaster ein.
* Starte den Sensor (außer Du tauscht den Transmitter während einer laufenden Sensorsitzung) -> Am unteren Bildschirmrand nach einigen Minuten wird `Warm Up x,x Stunden left` angezeigt. -> Falls die Zeitangabe auch nach einigen Minuten fehlt, musst Du den Sensor stoppen und erneut starten.
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

* Die genauen Werte, nach denen der Transmitter aufgrund niedrigem Batteriestand ausfällt, sind nicht bekannt. Die folgenden Informationen wurden von einem User gepostet, nachdem sich der Transmitter abgeschaltet hatte: Transmitter days: 151 Voltage A: 297 Voltage B: 260 Resistance: 2391

### Transmitterlaufzeit verlängern

* Eine laufende Sensorsitzung wird gestoppt, wenn Du die Transmitterlaufzeit verlängerst. Verlängere daher bei einem Sensorwechsel oder sei Dir bewusst, dass nach der Verlängerung eine neue zweistündige Warm-Up-Phase des Sensors beginnt.
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
* Wenn aud dem zweiten Statusbildschirm der Hinweis "Phone Service State: Hard Reset maybe failed" angezeigt wird, kannst Du trotzdem einfach den Sensor starten. Danach sollte diese Meldung verschwinden.
   
   ![xDrip+ Hard Reset maybe failed](../images/xDrip_HardResetMaybeFailed.png)

* Die "Transmitter days" werden nach erfolgreicher Verlängerung und Start des Sensors auf 0 zurückgesetzt.

### Transmitter ersetzen

Nutze für G6 Transmitter, die nach Mitte / Ende 2018 hergestellt wurden, eine der aktuellen <1>nightly build xDrip+ Versionen</1>. Diese Transmitter haben eine neue Firmware und die letzte stabile Version von xDrip+ vom 10.01.2019 kann mit diesen noch nicht korrekt umgehen.

* Schalte den Original Dexcom Empfänger aus (falls Du diesen verwendet).
* Stoppe den Sensor (außer Du tauscht den Transmitter während einer laufenden Sensorsitzung).
   
   Stelle sicher, dass er tatsächlich gestoppt ist.
   
   Schaue auf dem zweiten "G5/G6 Status" Bildschirm nach `Queue Items` (etwa in der Mitte) - dort wird `(1) Stop Sensor` oder ähnlich angezeigt.
   
   Warte, bis diese Meldung verschwindet. Erfahrungsgemäß dauert dies einige Minuten.
   
   -> Eine Videoanleitung zum Wechsel des Transmitters ohne den Sensor zu stoppen findest Du unter <https://youtu.be/AAhBVsc6NZo>.
   
   ![xDrip+ Dexcom Sensor 1 stoppen](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Dexcom Sensor 2 stoppen](../images/xDrip_Dexcom_StopSensor2.png)

* Wähle im Systemstatus "Gerät löschen".
   
   ![xDrip+ Gerät löschen](../images/xDrip_Dexcom_ForgetDevice.png)

* Entferne die Bluetooth Verbindung zum Transmitter in den Einstellungen Deines Smartphones. Dieser wird als 'DexcomXX' angezeigt. Dabei steht XX für die letzten beiden Stellen der Seriennummer des Transmitters.

* Entferne den Transmitter (und den Sensor, falls Du auch diesen wechselst).
* Drücke auf der Startseite lang auf den roten Blutstropfen des xDrip+ Logos, um den `Source Wizard Button` zu aktivieren.
* Benutze den Source Wizard Button. Damit wird sicher gestellt, dass Du die Standardeinstellungen inkl. OB1 & Native Mode verwendest. 
   * Du wirst durch die Grundeinstellungen geführt.
   * Wenn Du den Transmitter zum ersten Mal verbindest, benötigst Du die Transmitter-Seriennummer.
* Gib die Seriennnummer des neuen Transmitters ein.
* Setze den neuen Sensor (außer Du tauscht den Transmitter während einer laufenden Sensorsitzung).
* Klicke den Transmitter in die Halterung auf dem Sensorpflaster ein.
* Starte den neuen Sensor (außer Du tauscht den Transmitter während einer laufenden Sensorsitzung).
   
   **Es wird empfohlen, ca. 15 Minuten zwischen dem Stoppen des alten Sensors und dem Start des neuen Sensors zu warten (bis `Sensor Status: Stopped` auf dem zweiten Statusbildschirm angezeigt wird).**

* Starte den Datensammler neu (im Systemstatus und nur, wenn Du den Sensor neu gesetzt hast).

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
   
   Schaue auf dem zweiten "G5/G6 Status" Bildschirm nach `Queue Items` (etwa in der Mitte) - dort wird `(1) Stop Sensor` oder ähnlich angezeigt.
   
   Warte, bis diese Meldung verschwindet. Erfahrungsgemäß dauert dies einige Minuten.
   
   ![xDrip+ Dexcom Sensor 1 stoppen](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Dexcom Sensor 2 stoppen](../images/xDrip_Dexcom_StopSensor2.png)

* Reinige die Kontakte (Transmitter-Rückseite) mit Alkohol und lasse sie an der Luft trocknen.

* Falls Du diese Funktionen verwendest: Deaktiviere `Restart Sensor` und `Preemptive restarts` (Hamburger Menü -> Einstellungen -> G5 Debugeinstellungen). Wenn Du diese Funktionen nicht deaktivierst, wird der neue Sensor nicht richtig starten.
   
   ![xDrip+ Preemptive Restart](../images/xDrip_Dexcom_Restart.png)

* Starte den Sensor
   
   **Es wird empfohlen, ca. 15 Minuten zwischen dem Stoppen des alten Sensors und dem Start des neuen Sensors zu warten (bis `Sensor Status: Stopped` auf dem zweiten Statusbildschirm angezeigt wird).**

* Gib die Zeit an, zu der der Sensor gesetzt wurde.
   
   * Um den G6 im "native mode" zu nutzen, musst Du die 2-Stunden-Aufwärmzeit abwarten.
   * Wenn Du den xDrip+ Algorithmus verwendest, kannst Du eine Setzzeit von mehr als zwei Stunden in der Vergangenheit setzen, um die Aufwärmphase zu umgehen. Die angeziegten Werte können dann aber recht fehlerhaft sein. Deshalb wird dies nicht empfohlen.
* Gib den Sensorcode ein. Diesen findest Du auf der Abdeckfolie des Sensorpflasters. 
   * Bewahre diesen Code für künftige Nutzung auf (z.B. für einen Neustart nach Tausch des Transmitters).
   * Der Code ist auch in den [xDrip+ Logs](../Configuration/xdrip#retrieve-sensor-code) zu finden: Klicke auf das 3-Punkte-Menü rechts oben auf dem xDrip+ Startbildschirm und wähle `Log anzeigen`.
* Kalibrierungen sind nicht notwendig, wenn Du den G6 im "native mode" verwendest. xDrip+ wird nach der zweistündigen Aufwärmphase automatisch die erste BZ-Werte anzeigen.
* Falls Du den Dexcom Empfänger nutzt, schalte diesen nicht ein, bevor xDrip+ die ersten BZ-Werte anzeigt.
   
   ![xDrip+ Sensor starten 1](../images/xDrip_Dexcom_SensorStart01.png)
   
   ![xDrip+ Sensor starten 2](../images/xDrip_Dexcom_SensorStart02.png)

### Sensorcode in den Logs finden

* Wenn Du einen der letzten Nightly Builds verwendest, wird der Sensorcode im Systemstatus angezeigt (Hamburger Menü links oben auf dem Startbildschirm).
* Wische nach links, um den zweiten Status-Bildschirm zu sehen.
   
   ![xDrip+ Dexcom Sensorcode ermitteln (Status Bildschirm)](../images/xDrip_Dexcom_SensorCode2.png)

* Der Dexcom Sensorcode findet sich auch in den xDrip+ Logs.

* Tippe auf das 3-Punkte-Menü (oben rechts auf dem Homescreen).
* Wähle `Log anzeigen` und suche nach "code".
   
   ![xDrip+ Dexcom Sensorcode ermitteln (Log Files)](../images/xDrip_Dexcom_SensorCode.png)

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