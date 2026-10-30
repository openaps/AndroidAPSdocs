# **Freestyle Libre 3** und 3+

Der Freestyle Libre 3 (FSL3) benötigt ein besonderes Setup, um Glukosewerte in AAPS verfügbar zu machen. Es gibt zwei Wege die Werte des Freestyle Libre 3 (FSL3) in AAPS verfügbar zu machen.

![FL3](../images/d912c1d3-06d2-4b58-ad7c-025ca1980fae.jpeg)

Um das zu beheben, wird in den unten beschriebenen Methoden Juggluco als separate App eingesetzt. It uses Juggluco to receive raw, 1-minute interval data from the sensor which is then passed to xDrip or AAPS. Neu gesetzte Sensoren können entweder mit der Libre 3 App oder direkt in Juggluco gestartet werden. Die Anleitung unten beschreibt, wie ein Sensor mit der Juggluco-App gestartet werden kann. Wenn der Sensor mit einem eingeloggten Libreview-Konto gestartet wurde, ist es auch möglich, zwischen Juggluco und der Libre 3 App als Empfänger zu wechseln.

Wenn der Sensor mit der Libre 3 App gestartet wird, können Deine Daten über Juggluco und LibreView z. B. mit Deinem Diabetes-Team geteilt werden.

Within xDrip the sensor can be calibrated in the range of -40 mg/dL to +20 mg/dL (-2.2 mmol/L to +1.1 mmol/L) to compensate for differences between a manual meter reading and the sensor readings.

## Methode 1: Direkte Nutzung der minütlich übertragenen Sensorwerte
**AAPS** is tailored for 5-minute readings. Die Verarbeitung von minütlichen Werten bringt in einzelnen Situationen daher Einschränkungen mit sich.

Schaue [hier](#juggluco-to-aaps) nach.


## Methode 2: Umwandlung in xDrip+ der minütlichen Messwerte in 5-Minuten-Werte
This method uses Juggluco to receive raw, 1-minute interval data from the sensor which is then passed to xDrip to be smoothed into 5-minute interval data to be passed to AAPS.

### Schritt 1: Juggluco einrichten
Lade die Juggluco-App [hier](https://www.juggluco.nl/Juggluco/download.html) herunter und installiere sie. Befolge die [Anweisungen](https://www.juggluco.nl/Juggluco/libre3/)

Make sure you send the glucose values to xDrip: In Juggluco's settings you can configure Juggluco to send its glucose value to other apps. Juggluco can send three types of such broadcasts: The **Patched Libre broadcast** was originally used by the patched Librelink app and can be used to send glucose values to xDrip

### Schritt 2: xDrip+ einrichten

The blood glucose values are received by the xDrip app on the smartphone.

- If not already set up then download [xDrip](https://github.com/NightscoutFoundation/xDrip) and follow the instructions on [xDrip settings page](../CompatibleCgms/xDrip.md).
- In xDrip select "Libre2 (patched app)" as data source.
- Ggf. unter "Erweiterte Einstellungen" Extra Logging-Einstellungen Zusätzliche Tags für die Protokollierung „BgReading:d,xdrip libre_receiver:v“ eintragen. Damit werden zusätzliche Meldungen für eine leichtere Fehlerbehebung gespeichert.

![xDrip LibreLink logging](../images/Libre2_Tags.png)

- Technically, the current blood sugar value is transmitted to xDrip every minute. Daraus wird standardmäßig mit einem gewichteten Mittel über die letzten 25 Minuten ein geglätteter Wert errechnet. Du kannst die Zeitspanne im NFC-Scan-Funktionen-Menü ändern.

  → Hamburger-Menü → Einstellungen → NFC-Scan-Funktionen → Libre3-Daten glätten, wenn Methode xxx verwendet wird

  ![xDrip advanced settings Libre 2 & raw values](../images/xDrip_Libre3_Smooth.png)



### Schritt 3: Sensor in xDrip starten

In xDrip start the sensor with "Start Sensor" and "not today". Es ist nicht notwendig, das Mobiltelefon auf den Sensor zu halten. Tatsächlich startet "Start Sensor" physisch keinen Libre 3 Sensor oder interagiert auch nicht mit ihnen. This is simply to indicate xDrip that a new sensor is delivering blood sugar levels. Wenn verfügbar, gib zwei blutige Messwerte für die Anfangskalibrierung ein. Now the blood glucose values should be displayed in xDrip every 5 minutes. Übersprungene Werte, weil Du zum Beispiel zu weit von Deinem Telefon entfernt warst, werden nicht nachgefüllt.

Warte mindestens 15-20 Minuten, wenn noch keine Daten vorhanden sind.

After a sensor change xDrip will automatically detect the new sensor and will delete all calibration data. Du kannst nach der Aktivierung blutig messen und eine neue erste Kalibrierung erfassen.

### Step 4: Configure AAPS

- Lies [diesen Abschnitt](#juggluco-to-xdrip) und komme dann hierhin zurück.

- If **AAPS** does not receive BG values when phone is in airplane mode, use "Identify receiver"
- Turn off Smoothing (done in xDrip already)

## Sensorwechsel

1. Öffne Juggluco und notiere Dir die Seriennummer des laufenden Sensors.

![Libre Seriennummer](../images/libre3/step_13.jpg)

2. Scanne jetzt Deinen neuen Sensor per NFC Deines Smartphones. Juggluco zeigt eine Benachrichtigung an, wenn der Prozess erfolgreich gestartet wurde.
3. Wenn Du den alten Sensor deaktivieren möchtest, öffne das Juggluco-Menü, indem Du in der oberen linken Ecke des Bildschirms in den leeren Bereich tippst.
4. Wähle den abgelaufenen Sensor aus und tippe auf „Beenden“

![Sensorsitzung beenden](../images/libre3/step_14.jpg)

Note: When two sensors are active Juggluco will send the most recent value from either sensor to xDrip. If the sensors are not calibrated and reading BG similarly, this may result in jumpy BG values being reported to xDrip. Solltest Du den falschen Sensor gestoppt haben, kannst Du ihn wieder aktivieren, indem Du die Schritte ab Schritt 2 wiederholst.

## Sensor zwischen Libre 3 und Juggluco App wechseln

Wenn der Sensor mit einem eingeloggten Libreview-Konto gestartet wurde, ist es auch möglich, zwischen Juggluco und der Libre 3 App als Empfänger zu wechseln. Dies erfordert folgende Schritte:

1. Installiere die Libre 3 App aus dem Google Play Store
2. Richte die Libre 3 App mit dem Libreview-Konto ein, mit dem der Sensor aktiviert wurde.
3. Beende die Juggluco App in den Android-Einstellungen (Stopp erzwingen).
4. Klicke im Menü Libre 3 auf „Start Sensor“, wähle „Ja“, „Weiter“ und scanne Deinen Sensor.
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
