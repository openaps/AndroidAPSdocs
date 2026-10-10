# Dexcom G7, ONE+ and Stelo


##   Fundamental in advance

Noteworthy is the fact that the G7, ONE+ and Stelo systems, compared to the G6, do not smooth the values, neither in the app, nor in the reader. More details about this [here](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app).

```{admonition} Smoothing method 
Read [Smoothing method](../CompatibleCgms/SmoothingBloodGlucoseData.md) suggestions to use for Dexcom G7/ONE+/Stelo
```

## 1. xDrip (direct connection to G7, ONE+ or Stelo)

- This is the only supported setup for the Stelo.
- Follow the instructions here: [xDrip G7, ONE+ and Stelo](https://navid200.github.io/xDrip/docs/Dexcom/G7.html). A recent xDrip release is required — see the linked page for the minimum version.
- Select  xDrip in [ConfigBuilder, BG Source](#Config-Builder-bg-source).

- Adjust the xDrip settings according to the explanations on the xDrip settings page  [xDrip settings](../CompatibleCgms/xDrip.md)

## 2. Build Your Own Dexcom App (G7 only)

```{admonition} Old app version
:class: warning
Dexcom BYODA is now a very old version of the app and cannot be updated. Not available for ONE+ or Stelo.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) supports local broadcast to AAPS

-   This app lets you use your Dexcom G7 with any Android smartphone.
-   Uninstall the original Dexcom app
-   Install the downloaded apk
-   Enter sensor code in patched app
-   After short time BYODA should pick-up transmitter signal

## 3. xDrip (companion mode) 

-   Download and install xDrip: [xDrip](https://github.com/NightscoutFoundation/xDrip) 
- As data source in xDrip "Companion App" must be selected and under Advanced Settings > Bluetooth Settings > "Companion Bluetooth" must be enabled.
-   Select  xDrip in in [ConfigBuilder, BG Source](#Config-Builder-bg-source).

-   Adjust the xDrip settings according to the explanations on the xDrip settings page  [xDrip settings](../CompatibleCgms/xDrip.md)

## 4. Juggluco (G7 and ONE+)

Version 9.0+ required

- Disable the app previously connected to the sensor: Uninstall the app or use "Force Stop." Disable "Nearby Devices" permission in app settings. Restrict the app's battery usage.
  
- Forget the sensor in Bluetooth settings: In Android settings, find the sensor in bonded devices and select "Forget." Dexcom G7 sensor names start with DXCM.
  
- Avoid interference from other sensors: Keep old Dexcom sensors out of Bluetooth range.

- Connect the G7 sensor to Juggluco: Open Juggluco → Left menu → Photo. Scan the data matrix on the G7 sensor's applicator. Wait up to 5 minutes for Juggluco to find the sensor.

- Pairing requirements: Agree to pair the sensor with Juggluco. Ensure the screen isn’t locked during pairing. If pairing fails, wait 5 minutes before trying again.

- Exception: Wear OS watches can bond without pressing an agree button.
