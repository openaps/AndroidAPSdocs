# Glättung der Blut-Glukose-Daten

Wenn die BZ-Daten Sprünge haben oder verrauscht sind, kann es dazu kommen, dass AndroidAPS das Insulin falsch dosiert. Zu hohe oder zu niedrige BZ-Werte können die Folge sein. Daher ist es wichtig, den Loop zu pausieren, bis die Probleme beseitigt sind. Abhängig von Deinem CGM-System können solche Probleme durch die CGM-Konfiguration oder Probleme mit dem Sensor oder der Einsetzstelle entstehen. Ggf. musst Du einen neuen Sensor setzen, um den Fehler zu beheben. Einige Funktionen wie 'SMB immer aktivieren' und 'Aktiviere SMB nach Mahlzeiten' können daher nur mit einer BZ-Quelle verwendet, die die Glukosedaten ausreichend glättet.

## Dexcom G5 App (gepatched)

Wenn du die Dexcom G5 App (gepatched) verwendest, dann sind deine BZ-Daten glatt und konsistent. Es gibt keine Einschränkungen bei der Verwendung des SMB.

## xDrip+ mit Dexcom G5

Ausreichend glatte Daten werden nur geliefert, wenn du den xDrip+ G5 "OB1 Collector im nativen Modus" verwendest.

## xDrip+ mit Freestyle Libre

Wenn du xDrip+ als Datenquelle für Freestyle Libre nutzt, dann kannst du bis jetzt beim SMB "Verwende SMB immer" und "Verwende SMB nach Kohlenhydraten" nicht aktivieren, weil die BZ-Werte nicht glatt genug sind. Abgesehen davon gibt es aber ein paar Dinge, die du tun kannst, um Rauschen in den Daten zu reduzieren.

**Smooth Sensor Noise.** In den xDrip+ Einstellungen > xDrip+ Anzeigeeinstellungen muss "Smooth Sensor Noise" aktiviert sein. Dadurch wird versucht, verrauschte Daten zu glätten.

**Smooth sensor noise (Ultrasensitive).** Wenn du weiterhin verrauschte Werte in xDrip+ hast, dann kannst du sie noch aggressiver glätten, indem du die Einstellung "Smooth Sensor Noise (ultrasensitiv)" verwendest. Das wird auch dann eine Rauschglättung auslösen, wenn nur geringes Rauschen erkannt wird. Dafür musst Du zuerst den Entwicklermodus in xDrip+ aktivieren. Gehe dann zu Einstellungen > xDrip+ Anzeigeeinstellungen und aktiviere "Smooth Sensor Noise (ultrasensitiv)".