# xDrip+ Einstellungen

Lade - sofern noch nicht geschehen - [xDrip+](https://jamorham.github.io/#xdrip-plus) herunter.

Deaktiviere die Akku-Optimierung und lasse die Hintergrundaktivität für xDrip+ zu.

Du kannst die [neueste (stabile) APK](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk) einfach herunterladen. Wenn Du allerdings die allerneuesten Funktionalitäten oder neue, sich noch in der Integrationsphase befindliche, Sensoren verwenden möchtest, dann musst Du die Version [Nightly Snapshot](https://github.com/NightscoutFoundation/xDrip/releases) nutzen.

## Grundsätzliche Einstellungen für alle CGM & FGM-Systeme

### Nightscout Upload ausschalten

Ab der AAPS-Version 3.2, sollte neben AAPS keine andere App Daten (Glukosewerte und Behandlungsdaten) zu Nightscout hochladen.

→ Hamburger Menü (1) → Einstellungen (2) → Cloud Upload (3) → API Upload (REST)(4) → Switch **AUS** `ausgewählt` (5)

![xDrip+ Grundeinstellungen 1](../images/xDrip_Basic1.png)

#### Automatische Kalibrierung und Behandlungen ausschalten

Solltest Du eine ältere AAPS-Version (vor 3.2) nutzen, deaktiviere `Automatische Kalibrierung` (7). Sollte die Option `Automatische Kalibrierung` angehakt sein, aktiviere `Behandlungen herunterladen` (6) einmalig. Danach deaktiviere sowohl `Automatische Kalibrierung` als auch `Behandlungen herunterladen` wieder.

![xDrip+ Grundeinstellungen 2](../images/xDrip_Basic2.png)

Tippe auf `Zusätzliche Optionen` (8)

    {admonition} Sicherheitshinweis
    :class: warning
    Die Option "Behandlungen hochladen" muss in xDrip+ deaktiviert werden, da ansonsten in AAPS doppelte Einträge erzeugt werden, die wiederum zu falschen COB und IOB-Werten führen.

Deaktiviere `Behandlungen hochladen` (9) und nutze **auf keinen Fall** die Funktion `Back-fill Daten` (11).

Die Option `Alarm bei Fehlern` sollte ebenfalls deaktiviert sein (10). Bei WLAN bzw. Mobilfunk-Problemen oder wenn der Server nicht erreichbar ist, erhältst Du sonst alle 5 Minuten einen Alarm.

![xDrip+ Grundeinstellungen 3](../images/xDrip_Basic3.png)

### **Inter-App Einstellungen** (Broadcast)

Wenn Du AAPS nutzt und die Daten an z.B. AAPS weitergereicht werden sollen, musst Du den sogenannten 'Broadcast' in xDrip+ in den Inter-App Einstellungen einschalten.

→ Hamburger Menü (1) → Einstellungen (2) → Inter-App Einstellunge (3) → Lokaler Broadcast **AN** (4)

Damit die Werte in AAPS und in xDrip+ übereinstimmen, solltest Du `Sende den angezeigten Glukosewert` (5) aktivieren.

Aktiviere 'Kompatible Broadcasts' (6).

![xDrip+ Grundeinstellungen 4](../images/xDrip_Basic4.png)

Wenn Du in xDrip+ `Behandlungen annehmen` und in AAPS `Aktiviere Broadcasts zu xDrip+` im xDrip+ Plugin aktiviert hast, wird xDrip+ Insulin, Kohlenhydrate und Basalrateninformationen von AAPS erhalten.

Ist `Akzeptiere Kalbibrierungen` eingeschaltet, wird xDrip+ die Kalibrierungen von AAPS verwenden. Beim Nutzen der Funktionalität mit Dexcom Sensoren ist Vorsicht geboten: Lies vorher bitte [dies](https://navid200.github.io/xDrip/docs/Calibrate-G6.html).

Schalte "Audio importieren" aus, damit Du nicht bei jeder Basalraten-Änderung oder jedem durch AAPS ausgelösten Profilwechseln ein Benachrichtigungston erhältst.

![xDrip+ Grundeinstellungen 5](../images/xDrip_Basic5.png)

(xdrip-identify-receiver)=

#### Identifiziere Empfänger

- Sollte es Probleme mit der lokalen Übertragung der Werte (AAPS empfängt z.B. keine Glukosewerte aus xDrip+) geben, gehe zu → Hamburger Menue (1) Einstellungen (2) → Inter-App Einstellungen (3) → Identifiziere Empfänger (7) und gib dort `info.nightscout.androidaps` ein, wenn Du die AAPS Vollversion nutzt. Nutzt Du die PumpControl-Version, trage dort bitte den Wert `info.nightscout.aapspumpcontrol` ein.
- Achtung: Die Auto-Korrektur neigt manchmal dazu, das i von info in einen Großbuchstaben zu ändern. Du **darfst nur Kleinbuchstaben** verwenden, wenn Du `info.nightscout.androidaps` (oder `info.nightscout.aapspumpcontrol` für PumpControl eingibst), da die Groß-/Kleinschreibung beachtet wird. Mit einem groß geschriebenen 'I' kann AAPS keine Glukose-Werte aus xDrip+ empfangen.
    
    ![xDrip+ Basic Inter-App Einstellungen Identifiziere Empfänger](../images/xDrip_InterApp_NS.png)

## Nutze AAPS, um in xDrip+ zu kalibrieren

- Möchtest Du AAPS zur Kalibrierung nutzen, gehe in xDrip+ zu den Einstellungen → Inter-App Einstellungen → Akzeptiere Kalibrierungen und wähle AN aus. 
- You may also want to review the options in Settings → Less Common Settings → Advanced Calibration Settings. Du solltest auch die Optionen in Einstellungen → Erweiterte Einstellungen → Erweiterte Kalibrierung kontrollieren.

## Dexcom G6

- Der Dexcom G6-Transmitter kann gleichzeitig mit einem Dexcom-Empfänger (oder alternativ mit der t:slim-Pumpe) und einer App auf dem Handy verbunden werden.
- Wenn Du xDrip+ zum Empfang der CGM-Daten verwendest, deinstalliere zuerst die Dexcom App. **Du kannst xDrip+ und die Dexcom App nicht gleichzeitig mit dem Transmitter verbinden!**
- Möchtest Du Clarity nutzen und gleichzeitig von den xDrip+ Funktionalitäten profitieren, kannst Du die [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) mit einem lokalen Broadcast zu xDrip+ nutzen. Alternativ kannst Du xDrip+ als Companion-App, die die Benachrichtigungen der offiziellen Dexcom App erhält, verwenden.

### xDrip+ Version abhängig von der G6 Transmitter Seriennummer

- Alle nach Herbst bzw. nach Ende 2018 hergestellten G6-Transmitter heißen "Firefly". Sie erlauben keinen Neustart des Sensors ohne das [Entfernen des Transmitters](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). Sie übermitteln keine Rohdaten. Es wird empfohlen, die aktuelle Version des [Nightly Snapshot](https://github.com/NightscoutFoundation/xDrip/releases) zu nutzen.
- Alte überarbeitete und modifizierte Transmitter ermöglichen eine Verlängerung der Sensorlaufzeit und auch Sensorneustarts. Sie können auch Rohdaten übermitteln. Du kannst die [neueste APK (stable)](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk) verwenden.

### Dexcom-spezifische Einstellungen

- Folge [diesen Anweisungen](https://navid200.github.io/xDrip/docs/G6-Recommended-Settings.html), um xDrip+ einzurichten.

### Preemptive restarts werden nicht empfohlen

**Nur überarbeitete oder modifizierte Dexcom-Transmitter: [Preemptive restarts](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) können nicht mit den Standard-Transmittern genutzt werden und beenden die Sensorsitzung vollständig: Um den Sensor neu zu starten, muss der [Transmitter entfernt werden](https://navid200.github.io/xDrip/docs/Remove-transmitter.html).**

Die automatische Verlängerung von Dexcom G6 Sensoren (`preemptive restarts`) wird nicht empfohlen, da dies zu Sprüngen in den BZ-Werten nach dem Neustart am 9. Tag führen kann.

![xDrip+ Sprünge nach Preemptive Restart](../images/xDrip_Dexcom_PreemptiveJump.png)

Mache Dir die folgenden Punkte bewusst, um das System sicher zu nutzen:

- Wenn Du mit nativen Daten und dem Kalibrierungscode in xDrip+ oder Spike arbeitest, ist es am sichersten, auf den "preemptive" Neustart des Sensors zu verzichten.
- Falls Du den "preemptive restart" verwendest, stelle sicher, dass dieser zu einer Tageszeit erfolgt, zu der Du die Änderungen verfolgen und ggf. durch eine Kalibrierung eingreifen kannst. 
- Falls Du Sensoren verlängerst, verzichte aus Sicherheitsgründen entweder auf die Werkskalibrierung an Tag 11 und 12 oder stelle sicher, dass Du die Abweichungen im Auge hast und evtl. durch Kalibrierung korrigieren kannst.
- Das sogenannte "Pre-soaking" (Sensor früher ohne Transmitter setzen, damit er sich an die Gewebsflüssigkeit "gewöhnt") mit Werkskalibrierung führt wahrscheinlich zu Abweichungen in den Glukosewerten. Falls Du mit "pre-soaking" arbeitest, wirst Du wahrscheinlich besser Ergebnisse erzielen, wenn Du den Sensor kalibrierst.
- Wenn Du nicht auf die Abweichungen, die stattfinden können, achten willst, wäre es evtl. besser bei der Verlängerung auf die Werkskalibrierung zu verzichten und das System wie den G5 (mit "Pflichtkalibrierung") zu nutzen.

Mehr zu den Details und Gründen für diese Empfehlungen findest Du im [kompletten Artikel](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) (englisch) von Tim Street auf seiner Seite [www.diabettech.com](https://www.diabettech.com).

(xdrip-connect-g6-transmitter-for-the-first-time)=

### G6 Transmitter das erste Mal verbinden

**Für den zweiten und alle weiteren Transmitter siehe [Transmitterlaufzeit verlängern](#xdrip-extend-transmitter-life) weiter unten.**

Nutze [diese Anleitung](https://navid200.github.io/xDrip/docs/Starting-G6.html).

(xdrip-transmitter-battery-status)=

### Transmitter-Batteriestatus

- Der Batteriestatus kann im Systemstatus geprüft werden  
    → Hamburger Menü (1) → Systemstatus (2) → Bist Du in der "Classic Status Page"-Ansicht (3) wische zur Seite (4), um zur → G5/G6/G7 Status Ansicht zu kommen.

![xDrip+ System status](../images/xDrip_Dexcom_Battery.png)

- Weitere Informationen findest Du [hier](https://navid200.github.io/xDrip/docs/Battery-condition.html).

(xdrip-extend-transmitter-life)=

### Transmitterlaufzeit verlängern

- Die [Laufzeit](https://navid200.github.io/xDrip/docs/Transmitter-lifetime.html) von Firefly-Transmittern kann nicht verlängert werden: Nur überarbeitete oder modifizierte Transmitter können verlängert werden.
- Nutze für Nicht-Firefly-Transmitter [diese Anleitung](https://navid200.github.io/xDrip/docs/Hard-Reset.html).

(xdrip-replace-transmitter)=

### Transmitter ersetzen

- Schalte den Original Dexcom Empfänger aus (falls Du diesen verwendet).
- [Sensor stoppen](https://navid200.github.io/xDrip/docs/Dexcom/StartG6Sensor.html) (nur wenn der Sensor ersetzt wird).

- Gerät in den Bluetooth-Einstellungen von xDrip+ UND des Smartphones löschen (wird als Dexcom?? angezeigt, dabei steht ?? für die letzten beiden Ziffern der Seriennummer des Transmitters  
    → Hamburger Menü (1) → Systemstatus (2) → Bist Du nicht in der „Classic Status Page“-Ansicht (3) wische zur Seite (4), um zur richtigen Ansicht zu wechseln → tippe dann auf „Gerät löschen“ (5).

![xDrip+ System status](../images/xDrip_Dexcom_StopSensor.png)

- Entferne den Transmitter (und den Sensor, wenn diesen auch wechselst). Eine Anleitung zum Wechsel des Transmitters ohne den Sensor zu stoppen findest Du [hier](https://navid200.github.io/xDrip/docs/Remove-transmitter.html) oder unter <https://youtu.be/AAhBVsc6NZo>.
- Lege den alten Transmitter weit weg, um eine erneute Verbindung zu verhindern. Eine Mikrowelle bildet dafür einen hervorragenden Faraday'schen Käfig - ziehe aber den Stromstecker um 100% sicher zu sein, dass die Mikrowelle nicht versehentlich eingeschaltet wird.
- Nutze [diese Anleitung](https://navid200.github.io/xDrip/docs/Starting-G6.html).
- Falls Du den Dexcom Empfänger nutzt, schalte diesen nicht ein, bevor xDrip+ die ersten BZ-Werte anzeigt.

### Neuer Sensor

- Schalte den Original Dexcom Empfänger aus (falls Du diesen verwendet).
- Stoppe den Sensor, so wie es [hier beschrieben](https://navid200.github.io/xDrip/docs/Dexcom/StartG6Sensor.html) ist.

- Setze und starte den neuen Sensor, so wie es [hier beschrieben](https://navid200.github.io/xDrip/docs/Starting-G6.html) ist.

(xdrip-retrieve-sensor-code)=

### Sensorcode in den Logs finden

→ Hamburger Menü (1) → Systemstatus (2) → Wenn Du in der "Classic Status Page"-Ansicht bist (3) wische zur Seite (4), um zur → G5/G6/G7 Status Ansicht zu gelangen → Sensorcode.

![xDrip+ Dexcom Sensorcode ermitteln (Status Bildschirm)](../images/xDrip_Dexcom_SensorCode2.png)

(xdrip-troubleshooting-dexcom-g5-g6-and-xdrip)=

### Fehlerbehebung Dexcom G5/G6 und xDrip+

#### Problem beim Verbinden mit dem Transmitter

Nutze [diese Anleitung](https://navid200.github.io/xDrip/docs/Connectivity-troubleshoot.html).

#### Probleme beim Starten eines neuen Sensors

Nutze [diese Anleitung](https://navid200.github.io/xDrip/docs/Dexcom/SensorFailedStart.html).

## Libre 1

- Einrichten der NFC zu Bluetooth Bridge in xDrip+
    
    → Hamburger Menü (1) → Einstellungen (2) → Erweiterte Einstellungen (3) → Bluetootheinstellungen (4)

- Setze in den Bluetootheinstellungen die Haken genauso, wie es im Screenshot unten gezeigt ist (5)
    
    - Deaktiviere die "Watchdogs", da diese die Bluetooth-Verbindung Deines Smartphones zurücksetzen und damit die Verbindung zur Insulinpumpe unterbrechen.
    
    ![xDrip+ Libre Bluetooth Einstellungen 1](../images/xDrip_Libre_BTSettings1.png)

- Du kannst versuchen, die folgenden Einstellungen (7) zu aktivieren
    
    - Verwende Scannen
    - Vertraue Auto-Wiederverbindung
    - Scan im Hintergrund ausführen

- Wenn Du die Verbindung zur Bluethooth-Bridge leicht verlieren solltest oder es Probleme mit dem erneuten Verbindungsaufbau geben sollte, **DEAKTIVIERE DIESE** (8).
    
    ![xDrip+ Libre Bluetooth Einstellungen 2](../images/xDrip_Libre_BTSettings2.png)

- Lass alle anderen Optionen abgeschaltet, außer Du hast einen konkreten Grund diese zu aktivieren.
    
    ![xDrip+ Libre Bluetooth Einstellungen 3](../images/xDrip_Libre_BTSettings3.png)

### Batteriestand Libre Smart Reader

- Der Batteriestand von Bluethooth-Bridges (wie z.B. MiaoMiao oder Bubble) kann in AAPS angezeigt werden (nicht möglich beim BluCon).
- Details findest Du auf der [Screenshots-Seite](#screens-sensor-level-battery).

### Libre Transmitter verbinden und Sensor starten

- If your sensor requires it (Libre 2 EU and Libre 1 US) install the latest out of process algorithm.

- Dein Sensor muss mit der Hersteller-App oder dem Lesegerät gestartet worden sein (xDrip+ kann Libre-Sensoren nicht starten oder stoppen).

- Wähle Libre Bluetooth als Datenquelle.
    
    → Hamburger Menü (1) → Einstellungen (2) → Wähle Libre Bluetooth als Datenquelle aus (3)
    
    ![xDrip+ Start Libre Transmitter & Sensor 1](../images/xDrip_Libre_Transmitter01.png)

- Starte die Bluethooth-Suche und verbinde die Bridge.
    
    → Hamburger Menü (1) → Bluetooth scannen (2) → Scannen (3)
    
    - Sollte xDrip+ die Bridge nicht finden, prüfe, dass diese nicht mit der Hersteller-App verbunden ist. Lade sie auf und setze sie zurück (reset).
    
    ![xDrip+ Start Libre Transmitter & Sensor 2](../images/xDrip_Libre_Transmitter02.png)

- Starte den Sensor in xDrip+.
    
        {admonition} Sicherheitshinweis
        :class: warning
        Sensorwerte innerhalb der einstündigen Aufwärmphase sind nicht brauchbar: Die Werte können extrem zu hoch angezeigt werden und in AAPS zu falschen Entscheidungen führen.
    
    → Hamburger Menü (1) → Sensor starten (2) → Sensor starten (3) → Vermerke den genauen Zeitpunkt an dem der Sensor durch die Hersteller-App oder das Lesegerät gestartet wurde. Wurde der Sensor nicht heute gestartet, wähle "NICHT HEUTE" aus (4).

![xDrip+ Start Libre Transmitter & Sensor 3](../images/xDrip_Libre_Transmitter03.png)

(xdrip-libre2-patched-app)=

## Libre 2 (gepatchte App)

- Wähle "Libre (patched app)" als Datenquelle aus.
    
    → Hamburger Menü (1) → Einstellungen (2) → Wähle Libre (patched app) als Datenquelle aus (3)
    
    ![xDrip+ Libre Patched app 1](../images/xDrip_Libre_Patched01.png)

- Du kannst unter → Hamburger Menü → Einstellungen → Erweiterte Einstellungen → Extra-Logging-Einstellungen → Zusätzliche Tags für die Protokollierung `BgReading:d,xdrip libre_receiver:v` hinzufügen. Damit werden evtl. Fehlermeldungen protokolliert.

![xDrip+ LibreLink logging](../images/Libre2_Tags.png)