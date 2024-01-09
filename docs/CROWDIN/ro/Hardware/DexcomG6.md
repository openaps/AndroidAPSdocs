# Dexcom G6

## Elemente de bază

-   Follow general CGM hygiene and setting sensor recommendation [here](../Hardware/GeneralCGMRecommendation.md).

## Sugestii generale pentru buclă cu G6

To use it safely, there are a few points to be aware of:

-   If you are using a rebatteried or modded transmitter with xDrip+, the safest thing to do is **disable** preemptive restarts of the sensor that are anyway not needed for xDrip+.
-   Pre-soaking of the G6 with factory calibration is likely to give variation in results. If you do pre-soak, then to get best results, you will probably need to calibrate the sensor.

To learn more about the details and reasons for these recommendations read the [complete article](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) published by Tim Street at [www.diabettech.com](https://www.diabettech.com).

## Dacă utilizaţi G6 cu xDrip+

-   The Dexcom G6 transmitter can simultaneously be connected to the Dexcom receiver (or alternatively the t:slim pump) and one app on your phone.
-   When using xDrip+ as receiver uninstall Dexcom app first. **You cannot connect xDrip+ and Dexcom app with the transmitter at the same time!**
-   If you need Clarity and want to profit from xDrip+ alarms use the [BYODA](DexcomG6-if-using-g6-with-build-your-own-dexcom-app) with local broadcast to xDrip+.
-   If not already set up, download [xDrip+](https://github.com/NightscoutFoundation/xDrip) and follow the instructions on [xDrip+ settings page](../Configuration/xdrip.md).
-   Select xDrip+ in ConfigBuilder (setting in AAPS).
-   Adjust settings in xDrip+ according to [xDrip+ settings page](../Configuration/xdrip.md)
-   If AAPS does not receive BG values when phone is in airplane mode use 'Identify receiver' as describe on [xDrip+ settings page](../Configuration/xdrip.md).

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## Dacă utilizaţi G6 cu construită cu Build Your Own Dexcom App

-   As of December 2020 [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0) (BYODA) also supports local broadcast to AAPS and/or xDrip+ (not for G5/ONE/G7 sensors!)
-   This app lets you use your Dexcom G6 with any Android smartphone.
-   Uninstall the original Dexcom app or patched Dexcom app if you used one of those previously (**do not stop** the currently running sensor)
-   Install downloaded apk
-   Enter sensor code and transmitter serial no. in patched app.
-   In phone settings go to apps > Dexcom G6 > permissions > additional permissions and press 'Access Dexcom app'.
-   After short time BYODA should pick-up transmitter signal.

### Settings for AAPS

-   Select 'Dexcom App (patched)' in config builder.
-   If you don't receive any values select any other data source, then re-select 'Dexcom App (patched)' to trigger the demand for permissions to establish the connection between AAPS and BYODA-broadcast.

### Setări pentru xDrip+

-   Select '640G/Eversense' as data source.
-   Command 'start sensor' must be performed in xDrip+ in order to receive values. This will not affect your current sensor controlled by Build Your Own Dexcom App.


(DexcomG6-troubleshooting-g6)=
## Depanare G6

### Depanarea specifică Dexcom G6

-   Scroll down to **Troubleshooting** [here](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### General troubleshooting

General Troubleshooting for CGMs can be found [here](./GeneralCGMRecommendation.md#troubleshooting).

### Transmiţător nou cu senzor în funcțiune

If you happen to change transmitter during a running sensor session you might try to remove the transmitter without damaging the sensor mount. A video can be found at <https://youtu.be/tx-kTsrkNUM> and [here](https://navid200.github.io/xDrip/docs/Remove-transmitter.html).
