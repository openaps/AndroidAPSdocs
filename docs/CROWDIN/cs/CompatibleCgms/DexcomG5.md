# Dexcom G5

## If using G5 with xDrip+

-   You can safely download the [latest APK (stable)](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk) unless you want specific newly developed features.
-   Setup xDrip+ with G5 following [these instructions](https://navid200.github.io/xDrip/docs/G5-Recommended-Settings.html).
-   Setup xDrip+ reading the [xDrip+ settings page](../CompatibleCgms/xDrip.md) .
-   Select xDrip+ in [ConfigBuilder, BG Source](#Config-Builder-bg-source).

## Používáte-li G5 s upravenou Dexcom aplikací

```{admonition} Legacy apps
:class: warning
These apps are not compatible with recent Android versions.  
```

-   Download the apk from <https://github.com/dexcomapp/dexcomapp>, and choose the version that fits your needs (mg/dl or mmol/l version, G5).

    -   Folder 2.4 was for users of AAPS 2.5 and above.
    -   Open <https://play.google.com/store/search?q=dexcom%20g5> on your computer. Region bude viditelný v adrese URL.

    ![Region v URL adrese Dexcom G5](../images/DexcomG5regionURL.PNG)

-   Force stop and uninstall the original Dexcom app, if not already done.

-   Nainstalujte stažený apk

-   Spusťte senzor

- Select Dexcom App (patched) in in [ConfigBuilder, BG Source](#Config-Builder-bg-source).

-   If you want to use xDrip+ alarms via local broadcast: in xDrip+ hamburger menu > settings > hardware data source > 640G /EverSense.
