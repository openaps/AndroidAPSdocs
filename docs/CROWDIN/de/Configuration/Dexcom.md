# Dexcom G6

## Grundsätzliches vorab

* Folge den allgemeinen Empfehlungen zur ["CGM Hygiene"](../Configuration/BG-Source#cgm-hygiene).
* [Spzifische Hinweise zum Dexcom G6 und DIY Systemen](../Configuration/BG-Source#dexcom-g6-diy-systems) *Nutze für G6 Transmitter, die nach Mitte / Ende 2018 hergestellt wurden, eine der aktuellen [nightly build xDrip+ Versionen](https://github.com/NightscoutFoundation/xDrip/releases). Diese Transmitter haben eine neue Firmware und die letzte stabile Version von xDrip+ vom 10.01.2019 kann mit diesen noch nicht korrekt umgehen.

## Sensor setzen

Beim Setzen des Sensors darf die Setzhilfe nicht zu stark auf die Haut gedrückt werden, um Blutungen zu vermeiden. Der Sensorfaden sollte nicht mit Blut in Kontakt kommen.

Nach dem Setzen des Sensors wird der Transmitter in den Halter auf dem Sensorpflaster eingeklickt. Achtung! Zuerst auf der rechteckigen Seite einführen und danach auf der runden Seite nach unten Drücken bis der Transmitter mit einem Klick einrastet.

## Problembehandlung

### Verbindungsprobleme

Die Bluetooth-Verbindung kann durch andere Bluetooth-Geräte, die sich in der Nähe befinden, gestört werden, Solche Geräte können Blutzuckermessgeräte, Headsets, Tablets (iPad...) aber auch Küchengeräte wie Mikrowellen oder Cerankochfelder sein. In diesem Fall zeigt xdrip keine BZ-Werte an. Die Daten werden nachgetragen, so bald die Bluetooth-Verbindung wieder hergestellt wurde.

### Sensorfehler

Wenn Sensorfehler wiederholt auftreten, probiere den Sensor an einer anderen Körperstelle zu setzen. Der Sensorfaden sollte nicht mit Blut in Kontakt kommen.

Oftmals kann ein Sensorfehler durch sofortiges Trinken und "Massage" an der Sensorsetzstelle beseitigt werden.

### Springende Werte

Versuche, die Einstellungen zum "noise blocking" in xDrip (Einstellungen -> Inter-App Einstellungen -> Verrauschungsunterdrückung) zu ändern, z.B. "Block Very High noise and worse". Siehe auch die Informationen zur [Glättung von BZ-Daten](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

### Neuer Transmitter bei laufendem Sensor

Falls Du einen Transmitter bei einer laufenden Sensorsitzung wechseln musst, kannst Du versuchen, den Transmitter zu tauschen, ohne die Transmitterhalterung zu beschädigen. Eine Videoanleitung findest Du unter <https://youtu.be/AAhBVsc6NZo>.