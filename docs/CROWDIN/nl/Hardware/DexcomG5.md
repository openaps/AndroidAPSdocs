# Dexcom G5

## Dexcom G5 met xDrip+

-   You can safely download the [latest APK (stable)](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk) unless you want specific newly developed features.
-   Setup xDrip+ with G5 following [these instructions](https://navid200.github.io/xDrip/docs/G5-Recommended-Settings.html).
-   Setup xDrip+ reading the [xDrip+ settings page](../Configuration/xdrip.md) .
-   Select xDrip+ in [ConfigBuilder, BG Source](../Configuration/Config-Builder.md#bg-source).

## G5 met aangepaste Dexcom G5 app

```{admonition} Legacy apps
:class: warning
These apps are not compatible with recent Android versions.  
```

-   Download the apk from <https://github.com/dexcomapp/dexcomapp>, and choose the version that fits your needs (mg/dl or mmol/l version, G5).

    -   Folder 2.4 was for users of AAPS 2.5 and above.
    -   Open <https://play.google.com/store/search?q=dexcom%20g5> on your computer. Regio wordt weergegeven in URL.

    ![Region in Dexcom G5 URL](../images/DexcomG5regionURL.PNG)

-   Force stop and uninstall the original Dexcom app, if not already done.

-   Install downloaded apk

-   Start sensor

- Select Dexcom App (patched) in in [ConfigBuilder, BG Source](../Configuration/Config-Builder.md#bg-source).

-   If you want to use xDrip alarms via local broadcast: in xDrip hamburger menu > settings > hardware data source > 640G /EverSense.
