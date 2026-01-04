# Freestyle libre 1

To use your Libre as a CGM that is getting new BG values every 5 minutes without having to scan the sensor, you need to buy an NFC to Bluetooth bridge (commercially available devices, based on the obsolete [LimiTTer](https://github.com/JoernL/LimiTTer) project).

```{admonition} Libre 2, Libre 1 US and Libre Pro
:class: warning
Verify the bridge and the app you want to use are compatible with your sensor.  
```

Some bridges are still available on the market:

-   [MiaoMiao Reader](https://www.miaomiao.cool/) (version 1, 2 or 3) also available on AliExpress.
-   [Bubble / Mini / Nano](https://www.bubblesmartreader.com/) from European vendors ([BubbleShop](https://bubbleshop.eu/)) or for Russian users [here](https://vk.com/saharmonitor/). Also available on AliExpress.
-   Atom for Russian users.

## 1. Using xDrip+

-   xDrip+ supports Miaomiao, Bubble, Blucon, Atom and LibreAlarm.
-   You can safely download the [latest APK (stable)](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk) unless you need recent features, in which case you should use the latest [Nightly Snapshot](https://github.com/NightscoutFoundation/xDrip/releases).
-   Follow setup instructions on [xDrip+ settings page](../CompatibleCgms/xDrip.md).
-    You also need OOP2 for Libre 1 US (and Libre 2 EU).
-   Select xDrip+ in [ConfigBuilder, BG Source](#Config-Builder-bg-source).

## 2. Using Diabox

- Diabox is the vendor app for Bubble.
- Install [Diabox](https://t.me/s/DiaboxApp). In Settings, Integration, enable Share data with other apps.

![Diabox](../images/Diabox.png)

- Select xDrip+ in [ConfigBuilder, BG Source](#Config-Builder-bg-source).
