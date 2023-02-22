# Freestyle Libre 3

Das Freestyle Libre 3 System kann gefährliche Blutzuckerwerte automatisch melden. Der Libre3 Sensor sendet jede Minute den aktuellen Blutzuckerwert an einen Empfänger (Lesegerät oder Smartphone). Der Receiver löst nötigenfalls einen Alarm aus. Mit Hilfe der Juggluco-App kann der Sensor nach dem Start übernommen und an Xdrip+, AndroidAPS oder Libreview angeschlossen werden. So können die Blutzuckerwerte direkt übertragen werden. Es ist sogar möglich, ältere Daten aus dem Speicher des Sensors zu empfangen (zwei Stunden minütliche Glukose und zwei Wochen einmal pro 5 Minuten Verlaufsdaten), die an Juggluco gesendet werden.

Der Sensor kann im Bereich von -40 mg/dl bis +20 mg/dl (-2.2 mmol/l bis +1.1 mmol/l) kalibriert werden, um die Differenz zwischen blutiger Messung und den Sensorwerten anzupassen.

## Aktuelle Einschränkungen

- Wenn du ein gerootetes System hast, musst du das Rooten verstecken. Hier finden Sie Anweisungen dazu: [Link](https://www.reddit.com/r/Freestylelibre/comments/s22vlr/comment/hw2p4th/?utm_source=share&utm_medium=web2x&context=3).

  (Es gibt mehrere Apps um herauszufinden, ob das Smartphone gerootet ist, eine davon ist z.B. [Root Checker App](https://play.google.com/store/apps/details?id=com.joeykrim.rootcheck))

- Die Juggluco App unterstützt nur Englisch, Niederländisch und Italienisch.

### Schritt 1: Herunterladen und Einrichten der gepatchten LibreLink-App

Installieren die Libre 3 App aus dem Playstore und öffne sie. Klicken Sie auf dem Startbildschirm auf Anmelden. Die Registrierung mit Deinem Libreview-Konto ist obligatorisch - wenn Du noch keins hast, kannst Du es erstellen.

```{image} ../images/libre3/1.jpg
:alt: Libre3 Startbildschirm
```

```{image} ../images/libre3/2.jpg
:alt: Libreview-Anmeldung
```

Bitte akzeptiere Abbott's Nutzungsbedingungen. Der letzte Punkt ist optional und kann auch abgelehnt werden.

```{image} ../images/libre3/4.jpg
:alt: Libre 3 Term
```

```{image} ../images/libre3/5.jpg
:alt: Libre 3 Term
```

```{image} ../images/libre3/6.jpg
:alt: Libre 3 Term
```

Passen Sie die App Schritt für Schritt Ihren Bedürfnissen an. Wenn Sie diese Meldung zum Deaktivieren der Batterieoptimierung sehen, tippen Sie auf "Erlauben".

```{image} ../images/libre3/10.jpg
:alt: Libre 3 Batterieoptimierung
```

Nach dem Einrichten der Libre 3 App können Sie Ihren ersten Sensor bereits aktivieren. Scannen Sie dazu den angezeigten Sensor und warten Sie darauf, dass sich der Sensor innerhalb der nächsten 60 Minuten aufwärmt.

```{image} ../images/libre3/12.jpg
:alt: Aktiviere Libre 3 Sensor
```

### Schritt 2: Libre 3 App stoppen

Nachdem der Sensor erfolgreich gestartet wurde und der erste Sensorwert sichtbar ist, kannst Du fortfahren. Öffnen Sie nun die Einstellungen und wählen Sie die Menüoption für "Apps".

```{image} ../images/libre3/13.jpg
:alt: App-Einstellungen
```

Du suchst dann nach der Libre 3 App. Sobald Du sie gefunden hast, tippe auf sie.

```{image} ../images/libre3/14.jpg
:alt: Libre 3 App-Einstellungen
```

Tippe nun auf "Stop" oder "Stop erzwingen". Die genaue Schaltfläche kann je nach Android-Version variieren.

```{image} ../images/libre3/15.jpg
:alt: Exit Libre 3
```

Wenn es eine andere Anfrage gibt, kannst Du diese mit "OK" bestätigen.

```{image} ../images/libre3/16.jpg
:alt: Exit Libre 3
```

### Schritt 3: Installiere und richte Juggluco ein

Jetzt & die Juggluco App von [hier herunterladen (link)](https://github.com/maheini/FreeStyle-Libre-3-patch/raw/main/Juggluco-solution/versions/latest/Juggluco.apk) oder [hier (Spiegel)](http://jkaltes.byethost16.com/Juggluco/download.html) (Version 4.0.1 oder höher). Mit Hilfe dieser App können die Blutzuckermessungen direkt an Xdrip und AndroidAPS gesendet werden. Zu diesem Zweck wird der aktive Sensor (der bei Libreview registriert ist) innerhalb von Juggluco verwendet. Dies erklärt auch, warum ein Libreview-Konto obligatorisch ist.

Nach der Installation von Juggluco können mehrere Nachrichten angezeigt werden. Erlaube Juggluco Geräte in der Nähe zu finden, zu suchen und zu verbinden.

```{image} ../images/libre3/17.jpg
:alt: Erlaube Juggluco-Verbindungen
```

Eine Anfrage zum Deaktivieren der Batterieoptimierung könnte ebenfalls erscheinen. Tippe auf "Erlauben". Dies ist wichtig, um die App im Hintergrund laufen zu lassen.

```{image} ../images/libre3/18.jpg
:alt: Batterieoptimierung deaktivieren
```

Tippe auf OK, wenn Juggluco eingeführt wird.

```{image} ../images/libre3/19.jpg
:alt: Batterieoptimierung deaktivieren
```

Jetzt siehst Du den Juggluco Home-Bildschirm. Klicke auf den leeren Raum in der oberen linken Hälfte. Hier siehst Du die ungefähre Position.

```{image} ../images/libre3/20.jpg
:alt: Juggluco-Menü öffnen
```

Dieses Menü wird geöffnet. Hier kannst Du "Einstellungen" auswählen.

```{image} ../images/libre3/21.jpg
:alt: Juggluco Menu
```

Diese Seite wird dann angezeigt. In der Auswahl "1." hast Du zwei Möglichkeiten:

1. "An xDrip senden" -> Mit dieser Einstellung werden die Blutzuckerwerte an xDrip gesendet. Wähle als Empfänger in xDrip "Libre2 patched" oder "Libre 2 (patched app)" aus.
2. "xDrip Broadcast" -> Mit dieser Einstellung werden die minütlichen Blutzuckerwerte direkt an AndroidAPS gesendet. Die Blutzuckerquelle muss innerhalb von AndroidAPS auf "xDrip+" gesetzt werden.

Um den Sensor zu starten, wählen Sie "2." das Kontrollkästchen "Libreview".

```{image} ../images/libre3/22.jpg
:alt: Juggluco Einstellungen
```

Im nächsten Bildschirm musst du deine Login-Daten für Libreview eingeben. Es muss der Account sein, mit dem der Sensor aktiviert wurde. Dann klicke auf "Account-ID erhalten".

```{image} ../images/libre3/23.jpg
:alt: Libreview verbinden
```

Wenn alles gut ging, sollte nun eine mehrstellige Zahl unterhalb der Schaltfläche "Daten erneut senden" angezeigt werden. Dieser Vorgang kann einige Zeit dauern - falls die Nummer noch nicht erscheint, überprüfen Sie Ihre Internetverbindung und versuche die vorherigen Schritte erneut.

**Hinweis:** Wenn Du Blutzuckerwerte in LibreView hochladen möchtest, kannst Du die Checkbox "An Libreview senden" aktivieren.

```{image} ../images/libre3/24.jpg
:alt: Libreview prüfen
```

Jetzt ist es an der Zeit, den Sensor neu zu starten! Gehe zurück zum Juggluco Startbildschirm und scanne deinen zuvor aktivierten Sensor. Der Sensor startet und kann wieder eine Aufwärmphase von 60 Minuten eingehen. Nach den 60 Minuten sollten die Messwerte auf dem Juggluco Startbildschirm sichtbar sein.

```{image} ../images/libre3/25.jpg
:alt: Libreview prüfen
```

Fertig, das ist es! Wenn die Lesungen nicht sichtbar sind, findest Du weitere Informationen im Abschnitt "Erlebnisse und Fehlerbehebung".

### Step 4: xDrip einrichten

Die Blutzuckerwerte werden von der xDrip + App auf dem Smartphone empfangen.

- Falls noch nicht geschehen lade die xDrip+ App [hier](https://github.com/NightscoutFoundation/xDrip/releases) herunter und installiere eine der neuesten nightly Builts auf Deinem Smartphone.
- In xDrip+ als Datenquelle „Libre2 (patched App)“ auswählen
- die Batterieoptimierung deaktivieren und Hintergrundaktivität für die xDrip+ App erlauben
- Ggf. unter Less Common Settings->Extra Logging Settings->Extra tags for logging „BgReading:d,xdrip libre_receiver:v“ eintragen. Damit werden evtl. Fehlermeldungen protokolliert.
- In xDrip+ gehe zu Einstellungen > Inter-App Einstellungen > Lokaler Broadcast und wähle AN.
- In xDrip+ gehe zu Einstellungen > Inter-App Einstellungen > Behandlungen annehmen und wähle AUS.
- Um in AndroidAPS (ab Version 2.5) CGM-Werte von xDrip+ zu empfangen, stelle in den Einstellungen > Interapp Einstellungen > Identifiziere Empfänger auf info.nightscout.androidaps ein)
- Falls du mit AndroidAPS kalibrieren willst, dann gehe in xDrip+ zu Einstellungen > Inter-App Einstellungen > Accept Calibrations und wähle AN. Du solltest auch die Optionen in Einstellungen > Erweiterte Einstellungen > Erweiterte Kalibrierung kontrollieren.

```{image} ../images/Libre2_Tags.png
:alt: xDrip+ LibreLink Fehlerprotokoll
```

### Schritt 5: Sensor in xDrip starten

In xDrip+ den Sensor dann mit „Start Sensor“ und „nicht heute“ starten. Es ist nicht notwendig, das Mobiltelefon auf den Sensor zu halten. Tatsächlich startet "Start Sensor" physisch keinen Libre 3 Sensor oder interagiert auch nicht mit ihnen. Damit soll xDrip+ einfach nur mitgeteilt werden, dass ein neuer Sensor Blutzuckerwerte liefert. Wenn verfügbar, gib zwei blutige Messwerte für die Anfangskalibrierung ein. Nun sollten die Blutzuckerte alle 5 Minuten in xDrip+ angezeigt werden. Übersprungene Werte, weil Du zum Beispiel zu weit von Deinem Telefon entfernt warst, werden nicht nachgefüllt.

Warte mindestens 15-20 Minuten, wenn noch keine Daten vorhanden sind.

Nach einem Sensorwechsel erkennt xDrip+ den neuen Sensor automatisch und löscht alle Kalibrierungsdaten. Du kannst nach der Aktivierung blutig messen und eine neue erste Kalibrierung erfassen.

### Step 6: Konfiguriere AndroidAPS

- In AndroidAPS gehe zum Config Builder -> BG Source und aktiviere "xDrip+"
- Wenn AndroidAPS keine BG-Werte erhält, wenn sich das Telefon im Flugmodus befindet, verwende "Empfänger identifizieren"

Wenn Du den Libre 3 als BZ-Quelle nutzt, stehen die Funktionen 'Enable SMB always' und 'Enable SMB after carbs' nicht zur Verfügung. Die BZ-Werte des Libre 3 sind für einen sicheren Einsatz dieser Funktionen nicht glatt genug.

### Zur Libre App von Juggluco zurück wechseln

Es ist möglich, als Empfänger von Juggluco auf die Libre 3 App zurückzuwechseln. Die folgenden Schritte sind notwendig:

1. Libre 3 App neu installieren (oder Daten in den Einstellungen löschen)
2. Richten Sie die Libre 3 App mit dem Libreview-Konto ein, mit dem der Sensor aktiviert wurde.
3. Stoppe die Juggluco-App in den Einstellungen, ähnlich der Libre 3-App in den Anweisungen.
4. Klicken Sie im Menü Libre 3 auf "Start Sensor", wählen Sie "Ja", "Weiter" und scannen Ihren Sensor.
5. Die 60-minütige Aufwärmphase sollte dann beginnen. Dies ist nach jeder Änderung notwendig und kann nicht übersprungen werden.

### Erfahrungen und Troubleshooting

#### Zwingend erforderliche Einstellungen für den erfolgreichen Sensorstart:

- NFC und Bluetooth aktiviert
- Speicherberechtigung und Standortfreigabe
- Standortdienst aktiviert
- Automatische Zeiteinstellung und Zeitzonenwechsel

Beachte bitte, dass der Standortdienst ein zentraler Baustein ist. Dies ist nicht die Berechtigung für die App-Position, die auch festgelegt werden muss!

#### Fehlerbehebung Libre3 keine Messwerte

- die Standortfreigabe von Android ist nicht erteilt - bitte in den Systemeinstellungen freigeben
- automatische Zeitzone und Uhrzeit nicht gesetzt - bitte entsprechend die Einstellungen ändern
- Bluetooth ist ausgeschaltet - bitte einschalten¨
- Stelle sicher, dass der Libre 3 Sensor nicht mit einem anderen Gerät verbunden ist.

#### Fehlerbehebung Libre3 ohne Messwerte

- Überprüfe, ob die Libre 3 App gestoppt ist.
- Scanne den Libre 3 Sensor innerhalb der Juggluco App erneut
- Stelle sicher, dass der Sensor mit dem aktuellen Libreview-Konto aktiviert wurde
- Prüfe, ob eine Sensornummer in Juggluco sichtbar ist
- Der Sensor ist normalerweise innerhalb von 3 Minuten mit dem Smartphone verbunden, es kann aber auch länger dauern.
- Wenn die Bluetooth-Verbindung nicht hergestellt werden kann, starte das Smartphone neu.
- Stelle sicher, dass der Libre 3 Sensor nicht mit einem anderen Gerät verbunden ist.

#### Fehlerbehebung Blutzuckermessungen werden nicht in Libreview hochgeladen

- Überprüfe deine Internetverbindung
- Stelle sicher, dass Juggluco Blutzuckermessungen erhält
- Stelle sicher, dass das Kontrollkästchen "An Libreview senden" in Juggluco->Einstellungen->Libreview aktiviert ist

#### Weitere Hilfe

Original Anweisungen: [jkaltes Website](http://jkaltes.byethost16.com/Juggluco/libre3/)

Zusätzliches Github Repository: [Github Link](https://github.com/maheini/FreeStyle-Libre-3-patch)
