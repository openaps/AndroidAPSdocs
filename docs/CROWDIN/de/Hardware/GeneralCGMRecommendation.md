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

(troubleshooting)=
## Problembehandlung

### Verbindungsprobleme

Bluetooth connection may be disturbed by other nearby Bluetooth devices such as blood glucose meters, headsets, tablets or kitchen devices such as microwave ovens or ceramic hobs. In this case xdrip does not display any BG values. When bluetooth connection is restabilised the data is backfilled.

### Sensorfehler

If recurring sensor errors occur try selecting a different body site to set your sensor. The sensor thread should not come into contact with blood.

Often a "Sensor Error" can be corrected by immediate drinking and massage around the sensor!

### Springende Werte

You might try to change settings for noise blocking in xdrip (Settings - Inter-App Settings - Noise Blocking) i.e. "Block Very High noise and worse". See also [Smoothing BG data](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

### Negatives Sensor-Alter

![Negative sensor age](../images/Troubleshooting_SensorAge.png)

This occurs if there is either a double "CGM Sensor Insert" entry in [actions tab / menu](../Configuration/Config-Builder.md#actions) or a sensor insert with wrong date. Go to treatments tab \> careportal and delete the wrong entry.
