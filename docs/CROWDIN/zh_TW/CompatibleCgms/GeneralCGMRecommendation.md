- - -
orphan: true
- - -

# 一般 CGM 建議

## CGM 衛生

Whichever CGM system you are using, if you are going to use blood based calibration, then there are some very clear rules you should apply, whether or not you are using DIY CGM software or the official apps.

-   確保手和設備清潔。
-   Try to calibrate when you have a series of dots with a flat arrow (15-30 minutes is usually enough)
-   避免在血糖數值上升或下降時進行校準。
-   Do “enough” calibrations – on official apps, you will be prompted for once or twice per day checks. On DIY systems you may not be, and should be careful about continuing without calibrations.
-   對於不需要或不允許校準的傳感器，至少每天檢查一次實際的血糖值。 AAPS 的安全性取決於你的傳感器讀取值的可靠性。
-   If it all possible, calibrate with some of your readings in a lower range (4-5mmol/l or 72-90mg/dl) and some at a slightly higher level (7-9mmol/l or 126-160mg/dl) as this provides a better range for the point/slope calibration.

## 設置傳感器（G6）

When setting sensor, it is recommended not to press the inserter too firmly in order to avoid bleeding. The sensor contacts should not come into contact with blood.

After setting the sensor, the transmitter can be clicked into the sensor holder. 警告！ First click in the square side and then press down the round side.

(general-cgm-troubleshooting)=
## 問題排除

### 連線問題

Bluetooth connection may be disturbed by other nearby Bluetooth devices such as blood glucose meters, headsets, tablets or kitchen devices such as microwave ovens or ceramic hobs. In this case xDrip+ does not display any BG values. When Bluetooth connection is re-established the data is backfilled.

### 傳感器錯誤

If recurring sensor errors occur try selecting a different body site to set your sensor. The sensor contacts should not come into contact with blood.

Often a "Sensor Error" can be corrected by immediate drinking and massage around the sensor!

### 跳動的數值

You might try to change settings for noise blocking in xDrip+ (Settings - Inter-App Settings - Noise Blocking) i.e. "Block Very High noise and worse". 另請參見 [平滑血糖資料](../CompatibleCgms/SmoothingBloodGlucoseData.md)。

### 負傳感器年齡

![負傳感器年齡](../images/Troubleshooting_SensorAge.png)

This occurs if there is either a double "CGM Sensor Insert" entry in [actions tab / menu](#screens-action-tab) or a sensor insert with wrong date. Go to treatments tab \> careportal and delete the wrong entry.
