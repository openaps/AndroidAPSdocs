# Obecná doporučení ohledně CGM

## Opatření při používání CGM

Ať už používáte jakýkoliv systém CGM, pokud chcete kalibrovat z krve, je třeba dodržovat několik velmi jednoduchých pravidel, a to bez ohledu, zda používáte nebo nepoužíváte DIY software CGM nebo oficiální aplikace.

-   Ujistěte se, že máte čisté ruce i používaná zařízení.
-   Snažte se kalibrovat tehdy, když je vaše glykémie stabilní (rovná křivka po dobu 15–30 minut je obvykle dostatečná)
-   Nekalibrujte, pokud se vaše glykémie pohybuje (stoupá nebo klesá).
-   Do “enough” calibrations – on official apps, you will be prompted for once or twice per day checks. On DIY systems you may not be, and should be careful about continuing without calibrations.
-   For sensors not requiring or not allowing calibration, check at least daily real blood sugar. AAPS will be as safe as your sensor readings are reliable.
-   If it all possible, calibrate with some of your readings in a lower range (4-5mmol/l or 72-90mg/dl) and some at a slightly higher level (7-9mmol/l or 126-160mg/dl) as this provides a better range for the point/slope calibration.

## Nastavení senzoru (G6)

When setting sensor, it is recommended not to press the inserter too firmly in order to avoid bleeding. The sensor contacts should not come into contact with blood.

After setting the sensor, the transmitter can be clicked into the sensor holder. Pozor! First click in the square side and then press down the round side.

(GeneralCGMRecommendation-troubleshooting)=
## Řešení problémů

### Problém s připojením

Bluetooth connection may be disturbed by other nearby Bluetooth devices such as blood glucose meters, headsets, tablets or kitchen devices such as microwave ovens or ceramic hobs. In this case xdrip does not display any BG values. When bluetooth connection is restabilised the data is backfilled.

### Chyby senzorů

If recurring sensor errors occur try selecting a different body site to set your sensor. The sensor contacts should not come into contact with blood.

Often a "Sensor Error" can be corrected by immediate drinking and massage around the sensor!

### Skákající hodnoty

You might try to change settings for noise blocking in xdrip (Settings - Inter-App Settings - Noise Blocking) i.e. "Block Very High noise and worse". See also [Smoothing BG data](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

### Záporné stáří senzoru

![Negative sensor age](../images/Troubleshooting_SensorAge.png)

This occurs if there is either a double "CGM Sensor Insert" entry in [actions tab / menu](Config-Builder-actions) or a sensor insert with wrong date. Go to treatments tab \> careportal and delete the wrong entry.
