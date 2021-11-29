# Lissage des données de glycémie

Si les glycémies sont instables/bruitées, AAPS peut mal doser la quantité d'insuline, entraînant des hyper ou hypo. Pour cette raison, il est important de désactiver la boucle jusqu'à ce que le problème soit résolu. Selon votre MGC, de tels problèmes peuvent être dus à la configuration de la MGC ou à des problèmes de capteur ou de site. Vous devrez peut-être remplacer votre capteur MGC pour résoudre ce problème. Certaines fonctionnalités comme 'Activer en permanence les SMB' et 'Activer SMB après injection de glucides' ne peuvent être utilisées qu'avec une source de glycémie bien filtrée.

## Dexcom sensors

### Build Your Own Dexcom App

When using [BYODA](../Hardware/DexcomG6.html#if-using-g6-with-build-your-own-dexcom-app) your BG data is smooth and consistent. Furthermore you can take advantage of Dexcom back-smoothing. There are no restrictions in using SMB.

### xDrip+ with Dexcom G5 or G6

Les glycémies ne sont suffisament lissées avec XDrip+ et G5 que si vous utilisez 'OB1 collector in native mode'.

### Dexcom G5 App (patched)

When using Dexcom G5 App (patched) your BG data is smooth and consistent. There are no restrictions in using SMB.

## Freestyle Libre sensors

### xDrip+ with Freestyle Libre

When using xDrip+ as your data source for Freestyle Libre values until now you cannot activate 'Enable SMB always' and 'Enable SMB after carbs' within SMB because the BG values are not smooth enough. Except this, there are a couple of things you can do to help reduce noise in the data.

**Smooth Sensor Noise.** In xDrip+ Settings > xDrip+ Display Settings ensure that Smooth Sensor Noise is turned on. This attempts to apply smoothing to noisy data.

**Smooth Sensor Noise (Ultrasensitive).** If you are still seeing noisy data in xDrip+ you can apply more aggressive smoothing using the Smooth Sensor Noise (Ultrasensitive) setting. This will attempt to apply smoothing even on very low levels of detected noise. To do this, first enable [engineering mode](Enabling-Engineering-Mode-in-xDrip.md) in xDrip+. Then navigate to Settings > xDrip+ Display Settings and turn on Smooth Sensor Noise (Ultrasensitive).