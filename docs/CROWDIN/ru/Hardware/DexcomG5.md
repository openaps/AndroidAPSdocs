# Работа с Dexcom G5

## При использовании G5 с xdrip+

-   You can safely download the [latest APK (stable)](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk) unless you want specific newly developed features.
-   Setup xDrip+ with G5 following [these instructions](https://navid200.github.io/xDrip/docs/G5-Recommended-Settings.html).
-   Setup xDrip+ reading the [xDrip+ settings page](../Configuration/xdrip.md) .
-   Select xDrip+ in [ConfigBuilder, BG Source](../Configuration/Config-Builder.md#bg-source).

## При пользовании G5 с помощью модифицированного приложения Dexcom

:::{admonition} Legacy apps :class: warning These apps are not compatible with recent Android versions.  
:::

-   Download the apk from <https://github.com/dexcomapp/dexcomapp>, and choose the version that fits your needs (mg/dl or mmol/l version, G5).

    -   Folder 2.4 was for users of AAPS 2.5 and above.
    -   Open <https://play.google.com/store/search?q=dexcom%20g5> on your computer. Регион будет виден в URL.

    ![Регион в URL Dexcom G5](изображение:../images/DexcomG5regionURL.PNG)

-   Force stop and uninstall the original Dexcom app, if not already done.

-   Установите загруженное приложение

-   Запустите сенсор

- Select Dexcom App (patched) in in [ConfigBuilder, BG Source](../Configuration/Config-Builder.md#bg-source).

-   Если хотите использовать xDrip-оповещения через локальную трансляцию: в сэндвич-меню xDrip >> настройки> > источник данных ГК>> 640G /EverSense.
