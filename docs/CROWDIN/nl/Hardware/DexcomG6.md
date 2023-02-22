# Dexcom G6

## Algemeen

-   Follow general CGM hygiene and setting sensor recommendation [here](../Hardware/GeneralCGMRecommendation.md).
-   For G6 transmitters manufactured after fall/end of 2018 please make sure to use one of the [latest nightly built xDrip+ versions](https://github.com/NightscoutFoundation/xDrip/releases). Those transmitters have a new firmware and latest stable version of xDrip+ (2019/01/10) cannot deal with it.

## Algemene tips voor loopen met G6

What’s clear is that using the G6 is perhaps a little more complex than it as first suggests. To use it safely, there are a few points to be aware of:

-   If you are using the native data with the calibration code in xDrip+ or Spike, the safest thing to do is not allow preemptive restarts of the sensor.
-   If you must use preemptive restarts, then make sure you insert at a time of day where you can observe the change and calibrate if necessary.
-   If you are restarting sensors, either do it without the factory calibration for safest results on days 11 and 12, or ensure you are ready to calibrate and keep an eye on variation.
-   Pre-soaking of the G6 with factory calibration is likely to give variation in results. If you do pre-soak, then to get best results, you will probably need to calibrate the sensor.
-   If you aren’t being observant about the changes that may be taking place, it may be better to revert to non-factory-calibrated mode and use the system like a G5.

To learn more about the details and reasons for these recommendations read the [complete article](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) published by Tim Street at [www.diabettech.com](https://www.diabettech.com).

## Dexcom G6 met xDrip+

-   The Dexcom G6 transmitter can simultaneously be connected to the Dexcom receiver (or alternatively the t:slim pump) and one app on your phone.
-   Als je jouw Dexcom wilt koppelen aan de xDrip+ app dan zul je dus eerst de Dexcom app moeten verwijderen (of: pas het zender-nummer in de Dexcom app aan naar een onzingetal zodat Dexcom niet probeert aan de zender te koppelen). **You cannot connect xDrip+ and Dexcom app with the transmitter at the same time!**
-   If you need Clarity and want to profit from xDrip+ alarms use the [BYODA](../Hardware/DexcomG6.md#if-using-g6-with-build-your-own-dexcom-app) with local broadcast to xDrip+.
-   If not already set up then download [xDrip+](https://github.com/NightscoutFoundation/xDrip) and follow instructions on [xDrip+ settings page](../Configuration/xdrip.md).
-   Select xDrip+ in ConfigBuilder (setting in AndroidAPS).
-   Adjust settings in xDrip+ according to [xDrip+ settings page](../Configuration/xdrip.md)
-   If AAPS does not receive BG values when phone is in airplane mode use 'Identify receiver' as describe on [xDrip+ settings page](../Configuration/xdrip.md).

(if-using-g6-with-build-your-own-dexcom-app)=
## Wanneer je de G6 gebruikt met de Bouw Je Eigen Dexcom App

-   As of December 2020 [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0) (BYODA) also supports local broadcast to AAPS and/or xDrip+ (not for G5 sensors!)
-   This app lets you use your Dexcom G6 with any Android smartphone.
-   Uninstall the original Dexcom app or patched Dexcom app if you used one of those previously.
-   Install downloaded apk
-   Enter sensor code and transmitter serial no. in patched app.
-   In phone settings go to apps > Dexcom G6 > permissions > additional permissions and press 'Access Dexcom app'.
-   After short time BYODA should pick-up transmitter signal. (If not you will have to stop sensor and start new one.)

### Instellingen voor AndroidAPS

-   Select 'Dexcom App (patched)' in config builder.
-   If you don't receive any values select any other data source, then re-select 'Dexcom App (patched)' to trigger the demand for permissions to establish the connection between AAPS and BYODA-broadcast.

### Instellingen voor xDrip+

-   Select '640G/Eversense' as data source.
-   Command 'start sensor' must be performed in xDrip+ in order to receive values. This will not affect your current sensor controlled by Build Your Own Dexcom App.

## Problemen oplossen

### Dexcom G6 specifieke probleemoplossing

-   Transmitters with serial no. starting with 80 or 81 need at least last stable xDrip+ version from May 2019 or a newer nightly build.
-   Transmitters with serial no. starting with 8G need at least nightly build from July 25th, 2019 or newer.
-   xDrip+ and Dexcom app cannot be connected with the transmitter at the same time.
-   Wait at least 15 min. between stopping and starting a sensor.
-   Do not rewind back time of insertion. Answer question "Did you insert it today?" always with "Yes, today".
-   Do not enable "restart sensors" while setting a new sensor
-   Do not start new sensor before the following information is shown in Classic Status Page -> G5/G6 status -> PhoneServiceState:
    -   Transmitter serial starting with 80 or 81: "Got data hh:mm" (i.e. "Got data 19:04")
    -   Transmitter serial starting with 8G or 8H: "Got glucose hh:mm" (i.e. "Got glucose 19:04") or "Got no raw hh:mm" (i.e. "Got now raw 19:04")

![xDrip PhoneServiceState](../images/xDrip_Dexcom_PhoneServiceState.png)

### General troubleshooting

General Troubleshoothing for CGMs can be found [here](./GeneralCGMRecommendation.html#troubleshooting).

### Nieuwe zender met lopende sensor

If you happen to change transmitter during a running sensor session you might try to remove the transmitter without damaging the sensor mount. A video can be found at <https://youtu.be/tx-kTsrkNUM>.
