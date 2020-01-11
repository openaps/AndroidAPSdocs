# Lissage des données de glycémie

If BG data is jumpy/noisy, AAPS may dose insulin incorrectly resulting in high or low BG. For this reason it’s important to disable the loop until the problem is resolved. Depending on your CGM such issues may be due to the CGM’s configuration or sensor problems/site issues. Some features like 'Enable SMB always' and 'Enable SMB after carbs' can only be used with a nice-filtering BG source.

## Application Dexcom G5 (patchée)

Lorsque vous utilisez l'application Dexcom G5 (patchée) vos données de glycémie sont lisses et cohérentes. Il n'y a aucune restriction à utiliser les SMB.

## xDrip+ avec Dexcom G5

Smooth enough data is only delivered if you use xDrip+ G5 'OB1 collector in native mode'.

## XDrip+ avec Freestyle Libre

When using xDrip+ as your data source for Freestyle Libre values until now you cannot activate 'Enable SMB always' and 'Enable SMB after carbs' within SMB because the BG values are not smooth enough. Except this, there are a couple of things you can do to help reduce noise in the data.

**Smooth Sensor Noise.** In xDrip+ Settings > xDrip+ Display Settings ensure that Smooth Sensor Noise is turned on. This attempts to apply smoothing to noisy data.

**Smooth Sensor Noise (Ultrasensitive).** If you are still seeing noisy data in xDrip+ you can apply more aggressive smoothing using the Smooth Sensor Noise (Ultrasensitive) setting. This will attempt to apply smoothing even on very low levels of detected noise. To do this, first [enable engineering mode in xDrip+](https://github.com/MilosKozak/AndroidAPS/wiki/Enabling-Engineering-Mode-in-xDrip). Then navigate to Settings > xDrip+ Display Settings and turn on Smooth Sensor Noise (Ultrasensitive).