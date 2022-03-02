# Vyhlazování zarušených dat glykémií

Pokud glykémie poskakují, může AAPS nesprávně poslat dávku inzulinu vedoucí k vysoké nebo nízké glykémii. Z tohoto důvodu je důležité deaktivovat smyčku, dokud se problém nevyřeší. V závislosti na Vašem CGM mohou být tyto problémy způsobeny konfigurací CGM nebo problémy se senzorem/umístěním. You may need to replace your CGM sensor to resolve this. Některé funkce, jako je "Vždy povolit SMB" a "Povolit SMB po jídle" lze použít pouze s filtrovaným zdrojem glykémií.

## Dexcom sensors

### Build Your Own Dexcom App

When using [BYODA](../Hardware/DexcomG6#if-using-g6-with-build-your-own-dexcom-app) your BG data is smooth and consistent. Furthermore you can take advantage of Dexcom back-smoothing. There are no restrictions in using SMB.

### xDrip+ with Dexcom G5 or G6

Smooth enough data is only delivered if you use xDrip+ G5 'OB1 collector in native mode'.

### Dexcom G5 App (patched)

When using Dexcom G5 App (patched) your BG data is smooth and consistent. There are no restrictions in using SMB.

## Freestyle Libre sensors

### xDrip+ with Freestyle Libre

When using xDrip+ as your data source for Freestyle Libre values until now you cannot activate 'Enable SMB always' and 'Enable SMB after carbs' within SMB because the BG values are not smooth enough. Except this, there are a couple of things you can do to help reduce noise in the data.

**Smooth Sensor Noise.** In xDrip+ Settings > xDrip+ Display Settings ensure that Smooth Sensor Noise is turned on. This attempts to apply smoothing to noisy data.

**Smooth Sensor Noise (Ultrasensitive).** If you are still seeing noisy data in xDrip+ you can apply more aggressive smoothing using the Smooth Sensor Noise (Ultrasensitive) setting. This will attempt to apply smoothing even on very low levels of detected noise. To do this, first enable [engineering mode](Enabling-Engineering-Mode-in-xDrip.md) in xDrip+. Then navigate to Settings > xDrip+ Display Settings and turn on Smooth Sensor Noise (Ultrasensitive).