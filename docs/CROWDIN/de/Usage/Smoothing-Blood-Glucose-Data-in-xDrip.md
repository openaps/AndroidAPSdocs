# Glättung der Blut-Glukose-Daten

Wenn die BZ-Daten Sprünge haben oder verrauscht sind, kann es dazu kommen, dass AndroidAPS das Insulin falsch dosiert. Zu hohe oder zu niedrige BZ-Werte können die Folge sein. Daher ist es wichtig, den Loop zu pausieren, bis die Probleme beseitigt sind. Abhängig von Deinem CGM-System können solche Probleme durch die CGM-Konfiguration oder Probleme mit dem Sensor oder der Einsetzstelle entstehen. Ggf. musst Du einen neuen Sensor setzen, um den Fehler zu beheben. Einige Funktionen wie 'SMB immer aktivieren' und 'Aktiviere SMB nach Mahlzeiten' können daher nur mit einer BZ-Quelle verwendet, die die Glukosedaten ausreichend glättet.

## Dexcom sensors

### Build Your Own Dexcom App

When using [BYODA](../Hardware/DexcomG6.html#if-using-g6-with-build-your-own-dexcom-app) your BG data is smooth and consistent. Furthermore you can take advantage of Dexcom back-smoothing. There are no restrictions in using SMB.

### xDrip+ with Dexcom G5 or G6

Ausreichend glatte Daten werden nur geliefert, wenn du den xDrip+ G5 "OB1 Collector im nativen Modus" verwendest.

### Dexcom G5 App (patched)

When using Dexcom G5 App (patched) your BG data is smooth and consistent. There are no restrictions in using SMB.

## Freestyle Libre sensors

### xDrip+ with Freestyle Libre

When using xDrip+ as your data source for Freestyle Libre values until now you cannot activate 'Enable SMB always' and 'Enable SMB after carbs' within SMB because the BG values are not smooth enough. Except this, there are a couple of things you can do to help reduce noise in the data.

**Smooth Sensor Noise.** In xDrip+ Settings > xDrip+ Display Settings ensure that Smooth Sensor Noise is turned on. This attempts to apply smoothing to noisy data.

**Smooth Sensor Noise (Ultrasensitive).** If you are still seeing noisy data in xDrip+ you can apply more aggressive smoothing using the Smooth Sensor Noise (Ultrasensitive) setting. This will attempt to apply smoothing even on very low levels of detected noise. To do this, first enable [engineering mode](Enabling-Engineering-Mode-in-xDrip.md) in xDrip+. Then navigate to Settings > xDrip+ Display Settings and turn on Smooth Sensor Noise (Ultrasensitive).