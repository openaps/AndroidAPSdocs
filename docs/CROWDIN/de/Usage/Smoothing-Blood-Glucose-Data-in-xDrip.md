# Glättung der Blut-Glukose-Daten

If BG data is jumpy/noisy, AAPS may dose insulin incorrectly resulting in high or low BG. For this reason it’s important to disable the loop until the problem is resolved. Depending on your CGM such issues may be due to the CGM’s configuration or sensor problems/site issues. Some features like 'Enable SMB always' and 'Enable SMB after carbs' can only be used with a nice-filtering BG source.

## Dexcom G5 App (gepatched)

Wenn du die Dexcom G5 App (gepatched) verwendest, dann sind deine BZ-Daten glatt und konsistent. Es gibt keine Einschränkungen bei der Verwendung des SMB.

## xDrip+ mit Dexcom G5

Ausreichend glatte Daten werden nur geliefert, wenn du den xDrip G5 "OB1 Collector im nativen Modus" verwendest.

## xDrip+ mit Freestyle Libre

Wenn du xDrip+ als Datenquelle für Freestyle Libre nutzt, dann kannst du bis jetzt beim SMB "Verwende SMB immer" und "Verwende SMB nach Kohlenhydraten" nicht aktivieren, weil die BZ-Werte nicht glatt genug sind. Abgesehen davon gibt es aber ein paar Dinge, die du tun kannst, um Rauschen in den Daten zu reduzieren.

**Smooth Sensor Noise.** In den xDrip+ Einstellungen > xDrip+ Anzeigeeinstellungen muss "Smooth Sensor Noise" aktiviert sein. Dadurch wird versucht, verrauschte Daten zu glätten.

**Smooth sensor noise (Ultrasensitive).** Wenn du weiterhin verrauschte Werte in xDrip+ hast, dann kannst du sie noch aggressiver glätten, indem du die Einstellung "Smooth Sensor Noise (ultrasensitiv)" verwendest. Das wird auch dann eine Rauschglättung auslösen, wenn nur geringes Rauschen erkannt wird. Dazu musst du zuerst [den Entwickler-Modus in xDrip+ aktivieren](https://github.com/MilosKozak/AndroidAPS/wiki/Enabling-Engineering-Mode-in-xDrip). Gehe dann zu Einstellungen > xDrip+ Anzeigeeinstellungen und aktiviere "Smooth Sensor Noise (ultrasensitiv)".