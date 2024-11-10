---
orphan: true
---

# Dexcom G7 and ONE+


##   Fundamental in advance

Noteworthy is the fact that the G7 and ONE+ systems, compared to the G6, do not smooth the values, neither in the app, nor in the reader. More details about this [here](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app).

![G7 english](../images/6fe30b84-227a-4bae-a9a5-527cee341dbf.png)

```{admonition} [Smoothing method](../CompatibleCgms/SmoothingBloodGlucoseData.md)
:class: warning
**Average Smoothing or Exponential Smoothing** **MUST** be enabled for meaningful use of the G7 / ONE+ values.  
```

## 1. xDrip+ (direct connection to G7 or ONE+)

- Follow the instructions here: [Xdrip+ G7](https://navid200.github.io/xDrip/docs/Dexcom/G7.html)
- Select  xDrip+ in [ConfigBuilder, BG Source](#Config-Builder-bg-source).

- Adjust the xDrip+ settings according to the explanations on the xDrip+ settings page  [xDrip+ settings](../CompatibleCgms/xDrip.md)

## 2.  Patched Dexcom G7 App (DiaKEM)

**Note: AAPS 3.2.0.0 or higher is required! Not available for ONE+.**

### Install a new patched (!) G7 app and start the sensor

A patched Dexcom G7 app (DiaKEM) gives access to the Dexcom G7 data. This is not the BYODA app as this app can not receive G7 data at the moment.

- Uninstall the original Dexcom app if you used it before (A running sensor session can be continued - note the sensor code before removal of the app!)

- Download and install the patched.apk [here](https://github.com/authorgambel/g7/releases) or [here](https://github.com/emmatovar27/dexcom-g7-apk-patcher/releases).

- Enter sensor code in the patched app.

- Follow the general recommendations for CGM hygiene and sensor placement found [here](../CompatibleCgms/GeneralCGMRecommendation.md).

- After the warm-up phase, the values are displayed as usual in the G7 app.

### Configuration in AAPS

- Select 'BYODA' in in [ConfigBuilder, BG Source](#Config-Builder-bg-source) - even if it is not the BYODA app!

- If AAPS does not receive any values, switch to another BG source and then back to 'BYODA' to invoke the query for approving data exchange between AAPS and BYODA.

## 3. xDrip+ (companion mode) 

-   Download and install xDrip+: [xDrip](https://github.com/NightscoutFoundation/xDrip) 
- As data source in xDrip+ "Companion App" must be selected and under Advanced Settings > Bluetooth Settings > "Companion Bluetooth" must be enabled.
-   Select  xDrip+ in in [ConfigBuilder, BG Source](#Config-Builder-bg-source).

-   Adjust the xDrip+ settings according to the explanations on the xDrip+ settings page  [xDrip+ settings](../CompatibleCgms/xDrip.md) 
