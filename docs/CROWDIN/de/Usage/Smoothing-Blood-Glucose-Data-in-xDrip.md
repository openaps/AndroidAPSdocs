(Smoothing-Blood-Glucose-Data-in-xDrip-smoothing-blood-glucose-data)=

# Glättung der Blut-Glukose-Daten

Wenn die BZ-Daten Sprünge haben oder verrauscht sind, kann es dazu kommen, dass AndroidAPS das Insulin falsch dosiert. Zu hohe oder zu niedrige BZ-Werte können die Folge sein. Daher ist es wichtig, den Loop zu pausieren, bis die Probleme beseitigt sind. Abhängig von Deinem CGM-System können solche Probleme durch die CGM-Konfiguration oder Probleme mit dem Sensor oder der Einsetzstelle entstehen. Ggf. musst Du einen neuen Sensor setzen, um den Fehler zu beheben.

Einige CGM-Systeme haben interne Algorithmen, um die Qualität der Messwerten zu erkennen. AndroidAPS kann diese Informationen nutzen und (bei unzuverlässigen Werten) SMBs aussetzen. Für die CGMs, die diese Informationen nicht übermitteln, werden die Funktionen 'Aktiviere SMB immer' und 'Aktiviere SMB nach Mahlzeiten' aus Sicherheitsgründen deaktiviert.

## Dexcom-Sensoren

### Build your own Dexcom App

Wird [BYODA](DexcomG6-if-using-g6-with-build-your-own-dexcom-app) genutzt, sind die Glukose-Daten stimmig und geglättet. Außerdem kannst Du die rückwirkende Glättung von Dexcom nutzen. Da die Qualität der Messwerte an AAPS übermittelt wird, können SMBs ohne Einschränkungen genutzt werden.

### xDrip+ mit Dexcom G6 oder Dexcom ONE

Die Qualität der Messwerte und geglättete Glukosewerte werden an AAPS nur im [nativen Modus](https://navid200.github.io/xDrip/docs/Native-Algorithm) übermittelt. Im nativen Modus können SMBs ohne Einschränkungen genutzt werden.

### Dexcom G6 oder Dexcom ONE mit xDrip+ Companion App

Die Qualität der Messwerte wird nicht an AAPS übermittelt. Die Funktionen 'Aktiviere SMB immer' und 'Aktiviere SMB nach Mahlzeiten' sind deaktiviert und können nicht genutzt werden.

## Freestyle Libre Sensoren

### xDrip+ mit FreeStyle Libre

Keines der FreeStyle Libre Systeme (FSL1, FSL2 oder FSL3) sendet Informationen über die Qualität der Messwerte. Deswegen sind die Funktionen 'Aktiviere SMB immer' und 'Aktiviere SMB nach Mahlzeiten' bei der Nutzung mit allen FreeStyle Libre Systemen deaktiviert.

Darüber hinaus haben viele Leute berichtet, dass der FreeStyle Libre oft verrauschte (springende) Werte erzeugt. In xDrip+ gibt es ein paar Optionen die Abhilfe schaffen können:

**Smooth Sensor Noise.** In den xDrip+ Einstellungen > xDrip+ Anzeigeeinstellungen muss "Smooth Sensor Noise" aktiviert sein. Es wird dann versucht, übertragene verrauschte Werte zu glätten.

**Smooth sensor noise (Ultrasensitive).** Wenn Du weiterhin verrauschte Werte in xDrip+ hast, dann kannst Du sie noch aggressiver glätten, indem Du die Einstellung Smooth Sensor Noise (Ultrasensitiv) verwendest. Das wird auch dann eine Rauschglättung auslösen, wenn nur geringes Rauschen erkannt wird. Dazu musst du zuerst den [engineering mode](Enabling-Engineering-Mode-in-xDrip.md) in xDrip+ aktivieren. Gehe dann zu Einstellungen > xDrip+ Anzeigeeinstellungen und aktivieren Smooth Sensor Noise (Ultrasensitiv).