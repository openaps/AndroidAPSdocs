# Filteren van bloed glucose waardes

Als de BG data van jouw sensor veel ruis heeft of 'springerig' is, dan zou het kunnen dat AAPS een verkeerde dosis insuline geeft, wat dan weer kan zorgen voor hoge of lage BG. Om deze reden is het belangrijk om de closed loop uit te schakelen totdat het probleem met de sensor is opgelost. Afhankelijk van jouw CGM kunnen dit soort problemen liggen aan jouw sensor instellingen, aan de sensor zelf, of aan de plaats waar je de sensor draagt. Om dit op te lossen moet je wellicht jouw CGM-sensor vervangen. Sommige functies in AndroidAPS, zoals 'Activeer SMB altijd' en 'Gebruik SMB met koolhydraten' kunnen alleen worden gebruikt wanneer je een goed gefilterde BG bron hebt.

## Dexcom sensors

### Build Your Own Dexcom App

When using [BYODA](../Hardware/DexcomG6#if-using-g6-with-build-your-own-dexcom-app) your BG data is smooth and consistent. Furthermore you can take advantage of Dexcom back-smoothing. There are no restrictions in using SMB.

### xDrip+ with Dexcom G5 or G6

Wanneer je in xDrip+ de optie 'OB1 collector in native mode' hebt aangevinkt dan zijn jouw gegevens vloeiend en consistent genoeg. Met deze optie zijn er geen beperkingen in het gebruik van SMB. De reden hierachter is dat in de 'Native mode' xDrip+ het algoritme van de Dexcom zender gebruikt. Hierbij stuurt de zender ook informatie over 'ruis' mee, en heb je dus dezelfde waardes als wanneer je de Aangepaste Dexcom app zou gebruiken. Wanneer je de optie 'OB1 collector in native mode' niet hebt aangevinkt, dan gebruikt xDrip+ een eigen xDrip algoritme, waarbij je beperkt bent in het gebruik van SMB.

### Dexcom G5 App (patched)

When using Dexcom G5 App (patched) your BG data is smooth and consistent. There are no restrictions in using SMB.

## Freestyle Libre sensors

### xDrip+ with Freestyle Libre

When using xDrip+ as your data source for Freestyle Libre values until now you cannot activate 'Enable SMB always' and 'Enable SMB after carbs' within SMB because the BG values are not smooth enough. Except this, there are a couple of things you can do to help reduce noise in the data.

**Smooth Sensor Noise.** In xDrip+ Settings > xDrip+ Display Settings ensure that Smooth Sensor Noise is turned on. This attempts to apply smoothing to noisy data.

**Smooth Sensor Noise (Ultrasensitive).** If you are still seeing noisy data in xDrip+ you can apply more aggressive smoothing using the Smooth Sensor Noise (Ultrasensitive) setting. This will attempt to apply smoothing even on very low levels of detected noise. To do this, first enable [engineering mode](Enabling-Engineering-Mode-in-xDrip.md) in xDrip+. Then navigate to Settings > xDrip+ Display Settings and turn on Smooth Sensor Noise (Ultrasensitive).