# xDrip-Einstellungen

Falls noch nicht geschehen, lade die neueste xDrip-Version von der [xDrip-Releases-Seite](https://github.com/NightscoutFoundation/xDrip/releases) herunter und installiere sie.

Deaktiviere die Akku-Optimierung und erlaube die Hintergrundaktivität für die xDrip-App.

## Grundsätzliche Einstellungen für alle CGM & FGM-Systeme

### Nightscout Upload ausschalten

Neben AAPS sollte keine andere App Daten (Glukosewerte und Behandlungen) zu Nightscout hochladen.

→ Hamburger Menü (1) → Einstellungen (2) → Cloud Upload (3) → Nightscout Sync (REST-API) (4) → Schalte `Aktiviert` (5) **AUS**

![xDrip Basic Settings 1](../images/xDrip_Basic1.png)

#### Automatische Kalibrierung und Behandlungen ausschalten

Stelle sicher, dass `Automatische Kalibrierung` (7) deaktiviert ist. Ist das Kontrollkästchen `Automatische Kalibrierung` aktiviert, aktiviere einmal `Behandlungen herunterladen` (6), entferne dann den Haken bei `Automatische Kalibrierung` und deaktiviere `Behandlungen herunterladen` wieder.

![xDrip Basic Settings 2](../images/xDrip_Basic2.png)

Tippe auf `Zusätzliche Optionen` (8)

    {admonition} Sicherheitshinweis
    :class: warning
    Du musst „Behandlungen hochladen“ in xDrip deaktivieren, da Behandlungen sonst in AAPS doppelt erscheinen können, was zu falschen COB- und IOB-Werten führt.

Deaktiviere `Behandlungen hochladen` (9) und nutze **auf keinen Fall** die Funktion `Back-fill Daten` (11).

Die Option `Alarm bei Fehlern` sollte ebenfalls deaktiviert sein (10). Bei WLAN bzw. Mobilfunk-Problemen oder wenn der Server nicht erreichbar ist, erhältst Du sonst alle 5 Minuten einen Alarm.

![xDrip Basic Settings 3](../images/xDrip_Basic3.png)

### **Inter-App Einstellungen** (Broadcast)

Wenn Du AAPS nutzt, musst Du in den Inter-App Einstellungen von xDrip den Broadcast aktivieren, damit die Daten an AAPS weitergeleitet werden.

→ Hamburger Menü (1) → Einstellungen (2) → Inter-App Einstellunge (3) → Lokaler Broadcast **AN** (4)

Damit die Werte in AAPS und in xDrip übereinstimmen, solltest Du `Sende den angezeigten Glukosewert` (5) aktivieren.

Aktiviere „Kompatible Broadcasts“ (6).

![xDrip Basic Settings 4](../images/xDrip_Basic4.png)

Wenn Du außerdem in xDrip `Behandlungen annehmen` und im xDrip+-Modul von AAPS `Aktiviere Broadcasts zu xDrip+` aktiviert hast, erhält xDrip von AAPS Informationen zu Insulin, Kohlenhydraten und Basalrate.

Wenn Du `Akzeptiere Kalibrierungen` aktivierst, verwendet xDrip die Kalibrierungen aus AAPS. Beim Nutzen der Funktionalität mit Dexcom Sensoren ist Vorsicht geboten: Lies vorher bitte [dies](https://navid200.github.io/xDrip/docs/Calibrate-G6.html).

Denk daran, „Audio importieren“ auszuschalten, damit xDrip nicht jedes Mal einen Ton abspielt, wenn AAPS eine Basal- oder Profiländerung sendet.

![xDrip Basic Settings 5](../images/xDrip_Basic5.png)

(xdrip-identify-receiver)=

#### Identifiziere Empfänger

- Wenn es Probleme mit dem lokalen Broadcast gibt (AAPS empfängt keine Glukosewerte von xDrip), gehe zu → Hamburger Menü (1) Einstellungen (2) → Inter-App Einstellungen (3) → Identifiziere Empfänger (7) und gib für den AAPS-Build `info.nightscout.androidaps` ein (nutzt Du den PumpControl-Build, gib stattdessen `info.nightscout.aapspumpcontrol` ein!).
- Achtung: Die Auto-Korrektur neigt manchmal dazu, das i von info in einen Großbuchstaben zu ändern. Du **darfst nur Kleinbuchstaben** verwenden, wenn Du `info.nightscout.androidaps` (oder `info.nightscout.aapspumpcontrol` für PumpControl eingibst), da die Groß-/Kleinschreibung beachtet wird. Mit einem großen „I“ kann die App keine Glukosewerte von xDrip empfangen.
    
    ![xDrip Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

## AAPS zum Kalibrieren in xDrip nutzen

- Wenn Du AAPS zum Kalibrieren nutzen möchtest, gehe in xDrip zu Einstellungen → Inter-App Einstellungen → Akzeptiere Kalibrierungen und wähle AN. 
- You may also want to review the options in Settings → Less Common Settings → Advanced Calibration Settings. Du solltest auch die Optionen in Einstellungen → Erweiterte Einstellungen → Erweiterte Kalibrierung kontrollieren.

## Dexcom-Sensoren

Alles, was den Dexcom-Sensor und -Transmitter selbst betrifft (Starten, Stoppen, Ersetzen, Kalibrieren, Fehlerbehebung), ist in der [xDrip-Dexcom-Dokumentation](https://navid200.github.io/xDrip/docs/Dexcom_page.html) beschrieben und wird dort aktuell gehalten. Folge für den Sensor diesen Anweisungen; nur die Einstellungen, die xDrip mit **AAPS** verbinden (oben auf dieser Seite beschrieben), sind AAPS-spezifisch.

### Dexcom G6 und ONE

- Richte xDrip nach den [empfohlenen Einstellungen](https://navid200.github.io/xDrip/docs/G6-Recommended-Settings.html) ein.
- Der Dexcom G6- und ONE-Transmitter können gleichzeitig mit einem Dexcom-Empfänger (oder alternativ mit der t:slim-Pumpe) und einer App auf dem Smartphone verbunden werden.
- Wenn Du xDrip als Empfänger verwendest, deinstalliere zuerst die Dexcom-App. **Du kannst xDrip und die Dexcom-App nicht gleichzeitig mit dem Transmitter verbinden!**
- Wenn Du Clarity brauchst und trotzdem von den xDrip-Funktionen profitieren möchtest, nutze die [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) mit lokalem Broadcast an xDrip, oder verwende xDrip als Companion-App, die die Benachrichtigungen der offiziellen Dexcom-App empfängt (dabei können die Glukosewerte verzögert ankommen).

#### Sensor-Neustarts

- Mit aktuellen Transmittern verwendet xDrip immer den [nativen Algorithmus](https://navid200.github.io/xDrip/docs/Native-Algorithm.html) des Transmitters; es gibt keinen Grund, ihn zu deaktivieren.
- [Vorbeugende Neustarts](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) funktionieren nur bei alten Transmittern (Firmware 1.6.5.25 oder älter), bei denen sie nötig sind, damit der Sensor nicht nach 10 Tagen stoppt. Neuere (Firefly-)Transmitter ignorieren sie.
- Für einen Sensor-Neustart mit einem Firefly-Transmitter musst Du [den Transmitter entfernen](https://navid200.github.io/xDrip/docs/Remove-transmitter.html), und nach dem Neustart können die Werte deutlich falsch sein, was beim Loopen gefährlich ist: Lies [Restart a sensor](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html) vollständig und [kalibriere sorgfältig](https://navid200.github.io/xDrip/docs/Calibrate-after-G6Restart.html).

(xdrip-connect-g6-transmitter-for-the-first-time)=

#### Sensoren starten, stoppen und ersetzen

Folge den Anweisungen:

- [Einen G6- oder ONE-Transmitter starten](https://navid200.github.io/xDrip/docs/Starting-G6.html)
- [Einen G6- oder ONE-Sensor stoppen und starten](https://navid200.github.io/xDrip/docs/Dexcom/StartG6Sensor.html)
- [Den Transmitter von einem Sensor entfernen](https://navid200.github.io/xDrip/docs/Remove-transmitter.html)
- Die [Laufzeit des Transmitters](https://navid200.github.io/xDrip/docs/Transmitter-lifetime.html) lässt sich nur bei Transmittern mit getauschter Batterie oder modifizierten Transmittern verlängern ([Hard Reset](https://navid200.github.io/xDrip/docs/Hard-Reset.html)), nicht bei Firefly.

(xdrip-replace-transmitter)=

#### Transmitter ersetzen

- Schalte den originalen Dexcom-Empfänger aus (falls Du ihn nutzt) und schalte ihn erst wieder ein, wenn xDrip Werte anzeigt.
- Entferne das Gerät in xDrip (Systemstatus → Gerät löschen) UND in den Bluetooth-Einstellungen des Smartphones (dort als DexcomXX angezeigt, wobei XX die letzten beiden Ziffern der Transmitter-Seriennummer sind).
- Halte den alten Transmitter außerhalb der Bluetooth-Reichweite, damit er sich nicht wieder verbindet.
- Folge dann [Start a G6 or ONE transmitter](https://navid200.github.io/xDrip/docs/Starting-G6.html).

### Dexcom G7, ONE+ und Stelo

- Folge der [Anleitung für G7, ONE+ und Stelo](https://navid200.github.io/xDrip/docs/Dexcom/G7.html) (eine aktuelle xDrip-Version ist nötig, siehe verlinkte Seite).
- Auf der Seite [Dexcom G7, ONE+ und Stelo](../CompatibleCgms/DexcomG7.md) findest Du außerdem die möglichen Konfigurationen mit **AAPS**.

(xdrip-troubleshooting-dexcom-g5-g6-and-xdrip)=

### Fehlerbehebung Dexcom und xDrip

- [Fehlerbehebung bei Verbindungsproblemen G6/ONE](https://navid200.github.io/xDrip/docs/Connectivity-troubleshoot.html)
- [Fehlerbehebung G7/ONE+/Stelo](https://navid200.github.io/xDrip/docs/Dexcom/G7_Troubleshooting.html)
- [Probleme beim Starten eines neuen Sensors](https://navid200.github.io/xDrip/docs/Dexcom/SensorFailedStart.html)
- Die vollständige Liste findest Du unter **Troubleshooting** auf der [xDrip-Dexcom-Seite](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

## Libre 1

- Einrichten der NFC zu Bluetooth Bridge in xDrip
    
    → Hamburger Menü (1) → Einstellungen (2) → Erweiterte Einstellungen (3) → Bluetootheinstellungen (4)

- Setze in den Bluetootheinstellungen die Haken genauso, wie es im Screenshot unten gezeigt ist (5)
    
    - Deaktiviere die "Watchdogs", da diese die Bluetooth-Verbindung Deines Smartphones zurücksetzen und damit die Verbindung zur Insulinpumpe unterbrechen.
    
    ![xDrip Libre Bluetooth Settings 1](../images/xDrip_Libre_BTSettings1.png)

- Du kannst versuchen, die folgenden Einstellungen (7) zu aktivieren
    
    - Verwende Scannen
    - Vertraue Auto-Wiederverbindung
    - Scan im Hintergrund ausführen

- Wenn Du die Verbindung zur Bluethooth-Bridge leicht verlieren solltest oder es Probleme mit dem erneuten Verbindungsaufbau geben sollte, **DEAKTIVIERE DIESE** (8).
    
    ![xDrip Libre Bluetooth Settings 2](../images/xDrip_Libre_BTSettings2.png)

- Lass alle anderen Optionen abgeschaltet, außer Du hast einen konkreten Grund diese zu aktivieren.
    
    ![xDrip Libre Bluetooth Settings 3](../images/xDrip_Libre_BTSettings3.png)

### Batteriestand Libre Smart Reader

- Der Batteriestand von Bluethooth-Bridges (wie z.B. MiaoMiao oder Bubble) kann in AAPS angezeigt werden (nicht möglich beim BluCon).
- Details findest Du auf der [Screenshots-Seite](#screens-sensor-level-battery).

### Libre Transmitter verbinden und Sensor starten

- Wenn Dein Sensor (Libre 2 EU und Libre 1 US) es erfordert, installiere den neuesten Verarbeitungsalgorithmus.

- Dein Sensor muss bereits mit der Hersteller-App oder dem Lesegerät gestartet worden sein (xDrip kann Libre-Sensoren nicht starten oder stoppen).

- Wähle Libre Bluetooth als Datenquelle.
    
    → Hamburger Menü (1) → Einstellungen (2) → Wähle Libre Bluetooth als Datenquelle aus (3)
    
    ![xDrip Start Libre Transmitter & Sensor 1](../images/xDrip_Libre_Transmitter01.png)

- Starte die Bluethooth-Suche und verbinde die Bridge.
    
    → Hamburger Menü (1) → Bluetooth scannen (2) → Scannen (3)
    
    - Wenn xDrip die Bridge nicht findet, stelle sicher, dass sie nicht mit der Hersteller-App verbunden ist. Lade sie auf und setze sie zurück.
    
    ![xDrip Start Libre Transmitter & Sensor 2](../images/xDrip_Libre_Transmitter02.png)

- Starte den Sensor in xDrip.
    
        {admonition} Sicherheitshinweis
        :class: warning
        Sensorwerte innerhalb der einstündigen Aufwärmphase sind nicht brauchbar: Die Werte können extrem zu hoch angezeigt werden und in AAPS zu falschen Entscheidungen führen.
    
    → Hamburger Menü (1) → Sensor starten (2) → Sensor starten (3) → Vermerke den genauen Zeitpunkt an dem der Sensor durch die Hersteller-App oder das Lesegerät gestartet wurde. Wurde der Sensor nicht heute gestartet, wähle "NICHT HEUTE" aus (4).

![xDrip Start Libre Transmitter & Sensor 3](../images/xDrip_Libre_Transmitter03.png)

(xdrip-libre2-patched-app)=

## Libre 2 (gepatchte App)

- Wähle "Libre (patched app)" als Datenquelle aus.
    
    → Hamburger Menü (1) → Einstellungen (2) → Wähle Libre (patched app) als Datenquelle aus (3)
    
    ![xDrip Libre Patched app 1](../images/xDrip_Libre_Patched01.png)

- Du kannst unter → Hamburger Menü → Einstellungen → Erweiterte Einstellungen → Extra-Logging-Einstellungen → Zusätzliche Tags für die Protokollierung `BgReading:d,xdrip libre_receiver:v` hinzufügen. Damit werden evtl. Fehlermeldungen protokolliert.

![xDrip LibreLink logging](../images/Libre2_Tags.png)