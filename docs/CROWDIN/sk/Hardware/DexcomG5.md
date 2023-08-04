# Dexcom G5

## If using G5 with xdrip+

-   If not already set up then download [xdrip](https://github.com/NightscoutFoundation/xDrip) and follow instructions on nightscout ([G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support).
-   In xdrip go to Settings > Inter-app settings > Broadcast Data Locally and select ON.
-   In xdrip go to Settings > Inter-app settings > Accept Treatments and select OFF.
-   If you want to be able to use AndroidAPS to calibrate then in xdrip go to Settings > Interapp Compatibility > Accept Calibrations and select ON. You may also want to review the options in Settings > Less Common Settings > Advanced Calibration Settings.
-   Select xdrip in ConfigBuilder (setting in AndroidAPS).
-   If AAPS does not receive BG values when phone is in airplane mode use 'Identify receiver' as describe on [xDrip+ settings page](../Configuration/xdrip.md) .

## If using G5 with patched Dexcom app

-   Download the apk from <https://github.com/dexcomapp/dexcomapp>, and choose the version that fits your needs (mg/dl or mmol/l version, G5).

    -   Folder 2.3 is for users of AndroidAPS 2.3, folder 2.4 for users of AAPS 2.5.
    -   Open <https://play.google.com/store/search?q=dexcom%20g5> on your computer. Region will be visible in URL.

    ![Region in Dexcom G5 URL](../images/DexcomG5regionURL.PNG)

-   Stop sensor and uninstall the original Dexcom app, if not already done.

-   Install downloaded apk

-   Start sensor

-   Select Dexcom App (patched) in ConfigBuilder (setting in AndroidAPS).

-   If you want to use xDrip alarms via local broadcast: in xDrip hamburger menu > settings > hardware data source > 640G /EverSense.
