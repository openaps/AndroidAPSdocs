# Gliukozės kraujyje duomenų išlyginimas

Jei KG duomenys šokinėjantys/triukšmingi, AAPS gali neteisingai dozuoti insuliną, kas sąlygotų žemą arba aukštą KG. Dėl šios priežasties yra svarbu atjungti ciklą, kol problema bus išspręsta. Priklausomai nuo jūsų NGJ tokie dalykai gali kilti dėl NGJ konfigūravimo arba jutiklio problemų, puslapio sutrikimų. Jums gali tekti pakeisti savo NGJ jutiklį, kad išsprętumėte tai. Kai kurios funkcijos, pavyzdžiui, "Įjungti SMB visada" ir "Įjungti SMB po angliavandenių" gali būti naudojami tik su geru KG šaltinio filtravimu.

## Dexcom sensors

### Build Your Own Dexcom App

When using [BYODA](../Hardware/DexcomG6#if-using-g6-with-build-your-own-dexcom-app) your BG data is smooth and consistent. Furthermore you can take advantage of Dexcom back-smoothing. There are no restrictions in using SMB.

### xDrip+ with Dexcom G5 or G6

Pakankamai sklandūs duomenys ir siunčiami tik tada, kai naudojate xDrip+ G5 "OB1 kolektorius natyviu režimu".

### Dexcom G5 App (patched)

When using Dexcom G5 App (patched) your BG data is smooth and consistent. There are no restrictions in using SMB.

## Freestyle Libre sensors

### xDrip+ with Freestyle Libre

When using xDrip+ as your data source for Freestyle Libre values until now you cannot activate 'Enable SMB always' and 'Enable SMB after carbs' within SMB because the BG values are not smooth enough. Except this, there are a couple of things you can do to help reduce noise in the data.

**Smooth Sensor Noise.** In xDrip+ Settings > xDrip+ Display Settings ensure that Smooth Sensor Noise is turned on. This attempts to apply smoothing to noisy data.

**Smooth Sensor Noise (Ultrasensitive).** If you are still seeing noisy data in xDrip+ you can apply more aggressive smoothing using the Smooth Sensor Noise (Ultrasensitive) setting. This will attempt to apply smoothing even on very low levels of detected noise. To do this, first enable [engineering mode](Enabling-Engineering-Mode-in-xDrip.md) in xDrip+. Then navigate to Settings > xDrip+ Display Settings and turn on Smooth Sensor Noise (Ultrasensitive).