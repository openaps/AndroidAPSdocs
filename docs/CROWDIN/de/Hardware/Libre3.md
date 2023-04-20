# Freestyle Libre 3

Das Freestyle Libre 3 System kann gefährliche Blutzuckerwerte automatisch melden. Der Libre3 Sensor sendet jede Minute den aktuellen Blutzuckerwert an einen Empfänger (Lesegerät oder Smartphone). Der Receiver löst nötigenfalls einen Alarm aus. With the help of the Juggluco app ([Link](https://www.juggluco.nl/Juggluco/mgdL/index.html)), you can start the sensor directly and connect it to Xdrip+, AAPS or Libreview. In this way, the blood sugar minute values can be transmitted directly. Es ist sogar möglich, ältere Daten aus dem Speicher des Sensors zu empfangen (zwei Stunden minütliche Glukose und zwei Wochen einmal pro 5 Minuten Verlaufsdaten), die an Juggluco gesendet werden.

You don't need the Libre3 app anymore. you can use it side by side with Juggluco, be sure to force shut the Libre 3 app before you use Juggluco.

If you use Xdrip+, the sensor can also be calibrated in the range of -40 mg/dl to +20 mg/dl (-2.2 mmol/l to +1.1 mmol/l) to compensate for differences between the bloody reading and the sensor readings.


### Step 1: Install & set up Juggluco

Now download & install the Juggluco App from here ([link](https://www.juggluco.nl/Juggluco/download.html)). With the help of this app, the blood sugar readings can be sent directly to Xdrip and AAPS. Zu diesem Zweck wird der aktive Sensor (der bei Libreview registriert ist) innerhalb von Juggluco verwendet. Dies erklärt auch, warum ein Libreview-Konto obligatorisch ist.

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
2. "xDrip broadcast" -> With this setting, the minutely blood sugar reading are sent directly to AAPS. The blood glucose source must be set to "xDrip+" within AAPS.

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

### Step 2: Set up xDrip

Die Blutzuckerwerte werden von der xDrip + App auf dem Smartphone empfangen.

- Falls noch nicht geschehen lade die xDrip+ App [hier](https://github.com/NightscoutFoundation/xDrip/releases) herunter und installiere eine der neuesten nightly Builts auf Deinem Smartphone.
- In xDrip+ als Datenquelle „Libre2 (patched App)“ auswählen
- die Batterieoptimierung deaktivieren und Hintergrundaktivität für die xDrip+ App erlauben
- Ggf. unter Less Common Settings->Extra Logging Settings->Extra tags for logging „BgReading:d,xdrip libre_receiver:v“ eintragen. Damit werden evtl. Fehlermeldungen protokolliert.
- In xDrip+ gehe zu Einstellungen > Inter-App Einstellungen > Lokaler Broadcast und wähle AN.
- In xDrip+ gehe zu Einstellungen > Inter-App Einstellungen > Behandlungen annehmen und wähle AUS.
- Um in AndroidAPS (ab Version 2.5) CGM-Werte von xDrip+ zu empfangen, stelle in den Einstellungen > Interapp Einstellungen > Identifiziere Empfänger auf info.nightscout.androidaps ein)
- If you want to be able to use AAPS to calibrate then in xDrip+ go to Settings -> Interapp Compatibility -> Accept Calibrations and select ON. Du solltest auch die Optionen in Einstellungen > Erweiterte Einstellungen > Erweiterte Kalibrierung kontrollieren.

```{image} ../images/Libre2_Tags.png
:alt: xDrip+ LibreLink Fehlerprotokoll
```

### Step 3: Start sensor within xDrip

In xDrip+ den Sensor dann mit „Start Sensor“ und „nicht heute“ starten. Es ist nicht notwendig, das Mobiltelefon auf den Sensor zu halten. Tatsächlich startet "Start Sensor" physisch keinen Libre 3 Sensor oder interagiert auch nicht mit ihnen. Damit soll xDrip+ einfach nur mitgeteilt werden, dass ein neuer Sensor Blutzuckerwerte liefert. Wenn verfügbar, gib zwei blutige Messwerte für die Anfangskalibrierung ein. Nun sollten die Blutzuckerte alle 5 Minuten in xDrip+ angezeigt werden. Übersprungene Werte, weil Du zum Beispiel zu weit von Deinem Telefon entfernt warst, werden nicht nachgefüllt.

Warte mindestens 15-20 Minuten, wenn noch keine Daten vorhanden sind.

Nach einem Sensorwechsel erkennt xDrip+ den neuen Sensor automatisch und löscht alle Kalibrierungsdaten. Du kannst nach der Aktivierung blutig messen und eine neue erste Kalibrierung erfassen.

### Step 4: Configure AAPS

- In AAPS go to Config Builder -> BG Source and check "xDrip+"
- If AAPS does not receive BG values when phone is in airplane mode, use "Identify receiver"

Wenn Du den Libre 3 als BZ-Quelle nutzt, stehen die Funktionen 'Enable SMB always' und 'Enable SMB after carbs' nicht zur Verfügung. Die BZ-Werte des Libre 3 sind für einen sicheren Einsatz dieser Funktionen nicht glatt genug.

### Zur Libre App von Juggluco zurück wechseln

Es ist möglich, als Empfänger von Juggluco auf die Libre 3 App zurückzuwechseln. Die folgenden Schritte sind notwendig:

1. Libre 3 App neu installieren (oder Daten in den Einstellungen löschen)
2. Richten Sie die Libre 3 App mit dem Libreview-Konto ein, mit dem der Sensor aktiviert wurde.
3. Stoppe die Juggluco-App in den Einstellungen, ähnlich der Libre 3-App in den Anweisungen.
4. Klicken Sie im Menü Libre 3 auf "Start Sensor", wählen Sie "Ja", "Weiter" und scannen Ihren Sensor.
5. Die 60-minütige Aufwärmphase sollte dann beginnen. Dies ist nach jeder Änderung notwendig und kann nicht übersprungen werden.


### Missing FL3 values in Androidaps

Some Freestyle Libre 3 sensors send their minute glucose values not every minute (60s), but send them at slightly different times. (58s, 59s, or 61s, 62s). Juggluco gets the new glucose value directly from the sensor at whatever time they occure and broadcasts them. If you need Xdrip+ to calibrate or smooth the values and want them to be broadcasted to AAPS afterwards, there is a problem.

There is a sanity check in Xdrip+ that prevents broadcasting values that are below a certain threshold - in this case 60s.

This can lead to AndroidAPS not getting minute values from Xdrip!
```{image} https://camo.githubusercontent.com/72863950f3062716319362ba087877134d23fa9566c81e7ea6af266056dc5e1c/68747470733a2f2f696e73756c696e636c75622e64652f636f72652f696e6465782e7068703f6174746163686d656e742f32303136302d30356466383031392d343435642d343338652d383233362d3665396231633762333438622d6a7065672f
:alt: xDrip+ not broadcasting FL3 readings to AAPS.
```
To always get the values to AAPS, you have to use this Xdrip+ version: ([link](https://github.com/blaqone/xDrip))

(Libre3-experiences-and-troubleshooting)=
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
