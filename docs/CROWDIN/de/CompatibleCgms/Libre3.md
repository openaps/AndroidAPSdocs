# **Freestyle Libre 3** und 3+

Der Freestyle Libre 3 (FSL3) benötigt ein besonderes Setup, um Glukosewerte in AAPS verfügbar zu machen. Es gibt zwei Wege die Werte des Freestyle Libre 3 (FSL3) in AAPS verfügbar zu machen.

![FL3](../images/d912c1d3-06d2-4b58-ad7c-025ca1980fae.jpeg)

Um das zu beheben, wird in den unten beschriebenen Methoden Juggluco als separate App eingesetzt. Juggluco reicht die minütlichen unveränderten Daten (Rohdaten) des Sensors an xDrip+ oder AAPS weiter. Neu gesetzte Sensoren können entweder mit der Libre 3 App oder direkt in Juggluco gestartet werden. Die Anleitung unten beschreibt, wie ein Sensor mit der Juggluco-App gestartet werden kann. Wenn der Sensor mit einem eingeloggten Libreview-Konto gestartet wurde, ist es auch möglich, zwischen Juggluco und der Libre 3 App als Empfänger zu wechseln.

Wenn der Sensor mit der Libre 3 App gestartet wird, können Deine Daten über Juggluco und LibreView z. B. mit Deinem Diabetes-Team geteilt werden.

Der Sensor kann in xDrip+ im Bereich von -40 mg/dl bis +20 mg/dl (-2.2 mmol/l bis +1.1 mmol/l) kalibriert werden. Damit kannst Du die Differenz zwischen einer blutigen Messung und den Sensorwerten anpassen.

## Methode 1: Direkte Nutzung der minütlich übertragenen Sensorwerte
AAPS ist auf „Sensorwerte alle 5 Minuten“ ausgelegt. Die Verarbeitung von minütlichen Werten bringt in einzelnen Situationen daher Einschränkungen mit sich.

See [here](#juggluco-to-aaps).


## Methode 2: Umwandlung in xDrip+ der minütlichen Messwerte in 5-Minuten-Werte
Juggluco wird dabei genutzt, die minütlich vorliegenden Sensorrohdaten an xDrip+ zur Glättung auf 5-Minutenintervalle zu übergeben, und von dort aus an AAPS weiterzureichen.

### Schritt 1: Juggluco einrichten
Lade die Juggluco-App [hier](https://www.juggluco.nl/Juggluco/download.html) herunter und installiere sie. Befolge die [Anweisungen](https://www.juggluco.nl/Juggluco/libre3/)

Stelle sicher, dass die Glukosewerte an xDrip+ gesendet werden: In den Juggluco Einstellungen, kannst Du Juggluco so konfigurieren, dass Glukosewerte an andere Apps weitergereicht werden. Juggluco kann auf drei Arten Werte weiterreichen: Der **gepatchte Libre Broadcast** wurde ursprünglich von der gepatchten Librelink App verwendet und kann genutzt werden, um Glukosewerte an xDrip+ zu senden

### Schritt 2: xDrip+ einrichten

Die Glukosewerte werden von der xDrip+ App auf dem Deinem Smartphone empfangen.

- Wenn es nicht bereits installiert ist, dann lade [xDrip+ ](https://github.com/NightscoutFoundation/xDrip) herunter und folge den Anweisungen in den [xDrip+ Einstellungen](../CompatibleCgms/xDrip.md).
- Wähle in den xDrip+ Einstellungen "Libre (patched App)“ aus.
- Ggf. unter "Erweiterte Einstellungen" Extra Logging-Einstellungen Zusätzliche Tags für die Protokollierung „BgReading:d,xdrip libre_receiver:v“ eintragen. Damit werden zusätzliche Meldungen für eine leichtere Fehlerbehebung gespeichert.

![xDrip+ LibreLink logging](../images/Libre2_Tags.png)

- Technisch wird alle Minute der aktuelle Blutzucker-Wert an xDrip+ übertragen. Daraus wird standardmäßig mit einem gewichteten Mittel über die letzten 25 Minuten ein geglätteter Wert errechnet. Du kannst die Zeitspanne im NFC-Scan-Funktionen-Menü ändern.

  → Hamburger-Menü → Einstellungen → NFC-Scan-Funktionen → Libre3-Daten glätten, wenn Methode xxx verwendet wird

  ![xDrip+ advanced settings Libre 2 & Rohdaten](../images/xDrip_Libre3_Smooth.png)



### Schritt 3: Sensor in xDrip starten

In xDrip+ den Sensor dann mit „Start Sensor“ und „nicht heute“ starten. Es ist nicht notwendig, das Mobiltelefon auf den Sensor zu halten. Tatsächlich startet "Start Sensor" physisch keinen Libre 3 Sensor oder interagiert auch nicht mit ihnen. Damit soll xDrip+ einfach nur mitgeteilt werden, dass ein neuer Sensor Blutzuckerwerte liefert. Wenn verfügbar, gib zwei blutige Messwerte für die Anfangskalibrierung ein. Nun sollten die Blutzuckerte alle 5 Minuten in xDrip+ angezeigt werden. Übersprungene Werte, weil Du zum Beispiel zu weit von Deinem Telefon entfernt warst, werden nicht nachgefüllt.

Warte mindestens 15-20 Minuten, wenn noch keine Daten vorhanden sind.

Nach einem Sensorwechsel erkennt xDrip+ den neuen Sensor automatisch und löscht alle Kalibrierungsdaten. Du kannst nach der Aktivierung blutig messen und eine neue erste Kalibrierung erfassen.

### Schritt 4: AndroidAPS konfigurieren

- See [here](#juggluco-to-xdrip) and come back.

- Wenn sich das Smartphone im Flugmodus befindet und AAPS keine Glukosewerte erhält, verwende "Empfänger identifizieren"
- Turn off Smoothing (done in xDrip+ already)

## Sensorwechsel

1. Öffne Juggluco und notiere Dir die Seriennummer des laufenden Sensors.

![Libre Seriennummer](../images/libre3/step_13.jpg)

2. Scanne jetzt Deinen neuen Sensor per NFC Deines Smartphones. Juggluco zeigt eine Benachrichtigung an, wenn der Prozess erfolgreich gestartet wurde.
3. Wenn Du den alten Sensor deaktivieren möchtest, öffne das Juggluco-Menü, indem Du in der oberen linken Ecke des Bildschirms in den leeren Bereich tippst.
4. Wähle den abgelaufenen Sensor aus und tippe auf „Beenden“

![Sensorsitzung beenden](../images/libre3/step_14.jpg)

Hinweis: Wenn zwei Sensoren aktiv sind, sendet Juggluco den zuletzt empfangenen Wert an xDrip+. Sollten die Sensoren nicht kalibriert sein und ähnliche Glukose werte messen, können verrauschte Werte an xDrip+ gesendet werden. Solltest Du den falschen Sensor gestoppt haben, kannst Du ihn wieder aktivieren, indem Du die Schritte ab Schritt 2 wiederholst.

## Sensor zwischen Libre 3 und Juggluco App wechseln

Wenn der Sensor mit einem eingeloggten Libreview-Konto gestartet wurde, ist es auch möglich, zwischen Juggluco und der Libre 3 App als Empfänger zu wechseln. Dies erfordert folgende Schritte:

1. Installiere die Libre 3 App aus dem Google Play Store
2. Richten Sie die Libre 3 App mit dem Libreview-Konto ein, mit dem der Sensor aktiviert wurde.
3. Beende die Juggluco App in den Android-Einstellungen (Stopp erzwingen).
4. Klicken Sie im Menü Libre 3 auf "Start Sensor", wählen Sie "Ja", "Weiter" und scannen Ihren Sensor.
5. Nach einigen Minuten sollten die Glukosewerte in der Libre 3 App angezeigt werden.

Um von der Libre 3 App zu Juggluco zu wechseln, musst Du die Libre 3 App über Android-Einstellungen erzwingen und mit Schritt 1 & 2 fortfahren.

(libre3-experiences-and-troubleshooting)=
## Erfahrungen und Troubleshooting

### Fehlerbehebung Libre 3 -> Juggluco-Verbindung

- Achte, darauf, dass Du die neueste Version der Juggluco App verwendest
- Überprüfe Deine Einstellungen wie es hier in der Anleitung beschrieben ist
- Es kann vorkommen, dass Du den Stopp der Libre 3 App und der Juggluco App erzwingen und anschließend einen Neustart durchführen musst.
- Schalte Bluetooth aus und danach wieder ein
- Warte einen Moment oder versuche Juggluco zu schließen
- Ältere Versionen von Juggluco (vor 2.9.6) senden keine Daten des Libre 3 Sensors an verbundene Geräte (z.B. Juggluco auf WearOS) nach. Unter Umständen hilft es, in der gepatchten Libre 3 App auf "Daten erneut senden" (Juggluco-Menü) zu tippen.

### Weitere Hilfe

Original Anweisungen: [jkaltes Website](https://www.juggluco.nl/Juggluco/libre3/)

Zusätzliches Github Repository: [Github Link](https://github.com/maheini/FreeStyle-Libre-3-patch)
