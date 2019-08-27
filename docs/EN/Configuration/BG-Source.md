**General CGM recommendations**

**CGM hygiene**

Whichever CGM system you are using, if you are going to use blood based calibration, then there are some very clear rules you should apply, whether or not you are using DIY CGM software or the official apps. 

* Make sure hands and kit are clean.
* Try to calibrate when you have a series of dots with a flat arrow (15-30 minutes is usually enough)
* Avoid calibrating when glucose levels are moving up or down. 
* Do “enough” calibrations – on official apps, you will be prompted for once or twice per day checks. On DIY systems you may not be, and should be careful about continuing without calibrations.
* If it all possible, calibrate with some of your readings in a lower range (4-5mmol/l or 72-90mg/dl) and some at a slightly higher level (7-9mmol/l or 126-160mg/dl) as this provides a better range for the point/slope calibration.

# BG source

## Smoothing blood glucose
AAPS works best when the blood glucose data it receives is smooth and consistent. Some features like 'Enable SMB always' and 'Enable SMB after carbs' can only be used with a nice-filtering BG source. 

### Dexcom G5 App (patched)
When using Dexcom G5 App (patched) your BG data is smooth and consistent. There are no restrictions in using SMB.

### xDrip+ with Dexcom G5
Smooth enough data is only delivered if you use xDrip G5 'OB1 collector in native mode'.

### xDrip+ with Freestyle Libre
When using xDrip+ as your data source for Freestyle Libre values until now you cannot activate 'Enable SMB always' and 'Enable SMB after carbs' within SMB because the BG values are not smooth enough. Except this, there are a couple of things you can do to help reduce noise in the data.

**Smooth Sensor Noise.** In xDrip+ Settings > xDrip+ Display Settings ensure that Smooth Sensor Noise is turned on. This attempts to apply smoothing to noisy data.

**Smooth Sensor Noise (Ultrasensitive).** If you are still seeing noisy data in xDrip+ you can apply more aggressive smoothing using the Smooth Sensor Noise (Ultrasensitive) setting. This will attempt to apply smoothing even on very low levels of detected noise. To do this, first [enable engineering mode in xDrip+](../Enabling-Engineering-Mode-in-xDrip.md). Then navigate to Settings > xDrip+ Display Settings and turn on Smooth Sensor Noise (Ultrasensitive).


