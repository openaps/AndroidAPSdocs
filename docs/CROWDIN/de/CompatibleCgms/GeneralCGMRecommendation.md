- - -
orphan: true
- - -

# Allgemeine CGM-Empfehlungen

## CGM "Hygiene"

Whichever CGM system you are using, if you are going to use blood based calibration, then there are some very clear rules you should apply, whether or not you are using DIY CGM software or the official apps.

-   Hände und Geräte müssen sauber sein.
-   Try to calibrate when you have a series of dots with a flat arrow (15-30 minutes is usually enough)
-   Vermeide die Kalibrierung, wenn der Glukoselevel steigt oder fällt.
-   Do “enough” calibrations – on official apps, you will be prompted for once or twice per day checks. On DIY systems you may not be, and should be careful about continuing without calibrations.
-   Überprüfe Deinen echten Glukosewert mindestens einmal am Tag, wenn Du Sensoren nutzt, die keine Kalibrierung benötigen oder zulassen. AAPS ist nur so sicher, wie Deine Sensorwerte verlässlich sind.
-   If it all possible, calibrate with some of your readings in a lower range (4-5mmol/l or 72-90mg/dl) and some at a slightly higher level (7-9mmol/l or 126-160mg/dl) as this provides a better range for the point/slope calibration.

## Sensor setzen (Dexcom G6)

When setting sensor, it is recommended not to press the inserter too firmly in order to avoid bleeding. The sensor contacts should not come into contact with blood.

After setting the sensor, the transmitter can be clicked into the sensor holder. Achtung! First click in the square side and then press down the round side.

(general-cgm-troubleshooting)=
## Problembehandlung

### Verbindungsprobleme

Bluetooth connection may be disturbed by other nearby Bluetooth devices such as blood glucose meters, headsets, tablets or kitchen devices such as microwave ovens or ceramic hobs. In this case xDrip+ does not display any BG values. When Bluetooth connection is re-established the data is backfilled.

### Sensorfehler

If recurring sensor errors occur try selecting a different body site to set your sensor. The sensor contacts should not come into contact with blood.

Often a "Sensor Error" can be corrected by immediate drinking and massage around the sensor!

### Springende Werte

You might try to change settings for noise blocking in xDrip+ (Settings - Inter-App Settings - Noise Blocking) i.e. "Block Very High noise and worse". See also [Smoothing BG data](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Negatives Sensor-Alter

![Negatives Sensor-Alter](../images/Troubleshooting_SensorAge.png)

This occurs if there is either a double "CGM Sensor Insert" entry in [actions tab / menu](#screens-action-tab) or a sensor insert with wrong date. Go to treatments tab \> careportal and delete the wrong entry.
