# Dexcom G6

## Les bases en premier

-   Follow general CGM hygiene and setting sensor recommendation [here](../Hardware/GeneralCGMRecommendation.md).
-   For G6 transmitters manufactured after fall/end of 2018 please make sure to use one of the [latest nightly built xDrip+ versions](https://github.com/NightscoutFoundation/xDrip/releases). Those transmitters have a new firmware and latest stable version of xDrip+ (2019/01/10) cannot deal with it.

## Conseils généraux pour boucler avec un G6

What’s clear is that using the G6 is perhaps a little more complex than it as first suggests. To use it safely, there are a few points to be aware of:

-   If you are using the native data with the calibration code in xDrip+ or Spike, the safest thing to do is not allow preemptive restarts of the sensor.
-   If you must use preemptive restarts, then make sure you insert at a time of day where you can observe the change and calibrate if necessary.
-   If you are restarting sensors, either do it without the factory calibration for safest results on days 11 and 12, or ensure you are ready to calibrate and keep an eye on variation.
-   Pre-soaking of the G6 with factory calibration is likely to give variation in results. If you do pre-soak, then to get best results, you will probably need to calibrate the sensor.
-   If you aren’t being observant about the changes that may be taking place, it may be better to revert to non-factory-calibrated mode and use the system like a G5.

To learn more about the details and reasons for these recommendations read the [complete article](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) published by Tim Street at [www.diabettech.com](https://www.diabettech.com).

## Si vous utilisez le G6 avec xdrip+

-   The Dexcom G6 transmitter can simultaneously be connected to the Dexcom receiver (or alternatively the t:slim pump) and one app on your phone.
-   Lorsque vous utilisez xDrip+ comme récepteur, désinstallez d'abord l'application Dexcom. **You cannot connect xDrip+ and Dexcom app with the transmitter at the same time!**
-   If you need Clarity and want to profit from xDrip+ alarms use the [BYODA](../Hardware/DexcomG6#if-using-g6-with-build-your-own-dexcom-app) with local broadcast to xDrip+.
-   If not already set up then download [xDrip+](https://github.com/NightscoutFoundation/xDrip) and follow instructions on [xDrip+ settings page](../Configuration/xdrip.md).
-   Sélectionnez xDrip dans la Configuration (dans AndroidAPS).
-   Adjust settings in xDrip+ according to [xDrip+ settings page](../Configuration/xdrip.md)
-   If AAPS does not receive BG values when phone is in airplane mode use 'Identify receiver' as describe on [xDrip+ settings page](../Configuration/xdrip.md).

## Si vous utilisez G6 avec votre propre application Dexcom

-   As of December 2020 [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0) (BYODA) also supports local broadcast to AAPS and/or xDrip+ (not for G5 sensors!)
-   Cette application vous permet d'utiliser votre Dexcom G6 avec n'importe quel smartphone Android.
-   Uninstall the original Dexcom app or patched Dexcom app if you used one of those previously.
-   Installer l'APK téléchargé
-   Enter sensor code and transmitter serial no. in patched app.
-   In phone settings go to apps > Dexcom G6 > permissions > additional permissions and press 'Access Dexcom app'.
-   Après une courte période BYODA devrait recevoir le signal du transmetteur. (If not you will have to stop sensor and start new one.)

### Paramètres pour AndroidAPS

-   Sélectionnez 'App Dexcom (patchée)' dans la Configuration.
-   If you don't receive any values select any other data source, then re-select 'Dexcom App (patched)' to trigger the demand for permissions to establish the connection between AAPS and BYODA-broadcast.

### Paramètres pour xDrip+

-   Sélectionnez '640G / Eversense' comme source de données.
-   Command 'start sensor' must be performed in xDrip+ in order to receive values. This will not affect your current sensor controlled by Build Your Own Dexcom App.

## Dépannage G6

### Dépannages spécifiques à Dexcom G6

-   Transmitters with serial no. starting with 80 or 81 need at least last stable xDrip+ version from May 2019 or a newer nightly build.
-   Transmitters with serial no. starting with 8G need at least nightly build from July 25th, 2019 or newer.
-   xDrip+ and Dexcom app cannot be connected with the transmitter at the same time.
-   Wait at least 15 min. between stopping and starting a sensor.
-   N'antidatez jamais l'heure de l'insertion. Answer question "Did you insert it today?" always with "Yes, today".
-   Ne pas activer "redémarrer capteurs" lorsque vous configurez un nouveau capteur
-   Do not start new sensor before the following information is shown in Classic Status Page -> G5/G6 status -> PhoneServiceState:
    -   Transmitter serial starting with 80 or 81: "Got data hh:mm" (i.e. "Got data 19:04")
    -   Transmitter serial starting with 8G or 8H: "Got glucose hh:mm" (i.e. "Got glucose 19:04") or "Got no raw hh:mm" (i.e. "Got now raw 19:04")

![xDrip+ PhoneServiceState](../images/xDrip_Dexcom_PhoneServiceState.png)

### Dépannage général

General Troubleshoothing for CGMs can be found [here](./GeneralCGMRecommendation#troubleshooting).

### Nouvel émetteur avec capteur en cours

If you happen to change transmitter during a running sensor session you might try to remove the transmitter without damaging the sensor mount. A video can be found at <https://youtu.be/tx-kTsrkNUM>.
