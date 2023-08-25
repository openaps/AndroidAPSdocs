# Allgemeine CGM-Empfehlungen

## CGM "Hygiene"

Welches CGM-System Du auch immer verwendest, wenn Du blutbasierte Kalibrierung verwenden willst dann gibt es einige sehr klare Regeln, die Du anwenden solltest, unabhängig davon ob Du DIY CGM oder die offiziellen Apps verwendest oder nicht.

-   Hände und Geräte müssen sauber sein.
-   Kalibriere immer dann, wenn Du stabile Werte hast (Messwerte auf einem Niveau und waagerechter Pfeil). In der Regel reicht ein Zeitraum von 15 - 30 Minuten aus.
-   Vermeide die Kalibrierung, wenn der Glukoselevel steigt oder fällt.
-   Kalibriere "ausreichend" oft. Die offiziellen Apps fordern Dich ein oder zwei Mal pro Tag zum blutigen Test auf. Bei DIY Systemen ist das evtl. nicht der Fall und Du solltest vorsichtig sein, ohne die empfohlenen Kalibrierungen zu arbeiten.
-   Falls möglich, kalibriere mal mit Werten im niedrigen Bereich (72 - 90 mg/dl bzw. 4 - 5 mmol) und mal im erhöhten Bereich (126 - 160 mg/dl bzw. 7 - 9 mmol).  Dies führt zu besseren Ergebnissen, da sich die Kalibrierungsgerade leichter durch zwei entferntere Punkte legen lässt.

## Sensor setzen (Dexcom G6)

Beim Setzen des Sensors darf die Setzhilfe nicht zu stark auf die Haut gedrückt werden, um Blutungen zu vermeiden. Der Sensorfaden sollte nicht mit Blut in Kontakt kommen.

Nach dem Setzen des Sensors wird der Transmitter in den Halter auf dem Sensorpflaster eingeklickt. Achtung! Zuerst auf der rechteckigen Seite einführen und danach auf der runden Seite nach unten Drücken bis der Transmitter mit einem Klick einrastet.

(GeneralCGMRecommendation-troubleshooting)=
## Problembehandlung

### Verbindungsprobleme

Die Bluetooth-Verbindung kann durch andere Bluetooth-Geräte, die sich in der Nähe befinden, gestört werden, Solche Geräte können Blutzuckermessgeräte, Headsets, Tablets (iPad...) aber auch Küchengeräte wie Mikrowellen oder Cerankochfelder sein. In diesem Fall zeigt xDrip keine BZ-Werte an. Die Daten werden nachgetragen, sobald die Bluetooth-Verbindung wieder hergestellt wurde.

### Sensorfehler

Wenn Sensorfehler wiederholt auftreten, probiere den Sensor an einer anderen Körperstelle zu setzen. Der Sensorfaden sollte nicht mit Blut in Kontakt kommen.

Oftmals kann ein Sensorfehler durch sofortiges Trinken und "Massage" an der Sensorsetzstelle beseitigt werden.

### Springende Werte

Versuche, die Einstellungen zum "noise blocking" in xDrip (Einstellungen -> Inter-App Einstellungen -> Verrauschungsunterdrückung) zu ändern, z.B. "Block Very High noise and worse". Siehe auch die Informationen zur [Glättung von BZ-Daten](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

### Negatives Sensor-Alter

![Negatives Sensor-Alter](../images/Troubleshooting_SensorAge.png)

Dies tritt dann auf, wenn im [Aktionen Tab / Menü](Config-Builder-actions) ein doppelter Eintrag "CGM-Sensor gesetzt" oder bei einem einzelnen Eintrag ein falsches Datum verwendet wurde. Wechsle zur Registerkarte "Behandlungen" > "Careportal" und lösche den falschen Eintrag.
