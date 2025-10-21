# Freestyle Libre 1

To use your Libre as a CGM that is getting new BG values every 5 minutes without having to scan the sensor, you need to buy an NFC to Bluetooth bridge (commercially available devices, based on the obsolete [LimiTTer](https://github.com/JoernL/LimiTTer) project).

```{admonition} Libre 2, Libre 1 US and Libre Pro
:class: warning
Verify the bridge and the app you want to use are compatible with your sensor.  
```

Several bridges are available on the market:

-   [MiaoMiao Reader](https://www.miaomiao.cool/) (version 1, 2 or 3) also available on AliExpress.
-   [Blucon Nightrider](https://www.ambrosiasys.com/our-products/blucon/) (mind recent firmware versions might not be compatible with all apps, the vendor app does not broadcast data to AAPS)
-   [Bubble (or Bubble Mini)](https://www.bubblesmartreader.com/) from European vendors ([Bubblan](https://www.bubblan.org/), [BubbleShop](https://bubbleshop.eu/)) or for Russian users [here](https://vk.com/saharmonitor/). Also available on AliExpress.
-   Atom for Russian users.

Historically it is possible to use a specific watch, the Sony Smartwatch 3 (SWR50) which has an NFC chip that can be enabled and used as an NFC collector. However the custom NFC to Bluetooth bridges listed above offer a less complex solution and would be used by the majority of those wanting to use their Libre 1 (non-US) as a CGM.

-   Sony Smartwatch 3 (SWR50) <https://github.com/pimpimmi/LibreAlarm/wiki/>

As it currently stands, if using Libre 1 as BG source you cannot activate ‘Enable SMB always’ and ‘Enable SMB after carbs’ within the SMB algorithm. The BG values of Libre 1 are not smooth enough to use it safely. See [Smoothing blood glucose data](../CompatibleCgms/SmoothingBloodGlucoseData.md) for more details.

## 1. Using xDrip+

-   xDrip+ supports Miaomiao, Bubble, Blucon, Atom and LibreAlarm.
-   You can safely download the [latest APK (stable)](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk) unless you need recent features, in which case you should use the latest [Nightly Snapshot](https://github.com/NightscoutFoundation/xDrip/releases).
-   Follow setup instructions on [xDrip+ settings page](../CompatibleCgms/xDrip.md).
-    You also need OOP2 for Libre 1 US (and Libre 2 EU).
-   Select xDrip+ in [ConfigBuilder, BG Source](#Config-Builder-bg-source).

(libre1-using-glimp)=
## 2. Using Glimp

-   Glimp supports Miaomiao, Blucon and Bubble for Libre 1 and Libre 2 EU.
-   You will need Glimp version 4.15.57 or newer. Older versions are not supported.
-   Install [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia).
-   Select Glimp in in [ConfigBuilder, BG Source.](#Config-Builder-bg-source)

(libre1-using-tomato)=
## 3. Using Tomato

- Tomato is the vendor app for Miaomiao.
- Install [Tomato](http://tomato.cool/#download_page) and follow the vendor [instructions](http://tomato.cool/how-to-broadcast-data-to-android-aps/tips/).
- Select Tomato in [ConfigBuilder, BG Source](#Config-Builder-bg-source).

## 4. Using Diabox

- Diabox is the vendor app for Bubble.
- Install [Diabox](https://t.me/s/DiaboxApp). In Settings, Integration, enable Share data with other apps.

![Diabox](../images/Diabox.png)

- Select xDrip+ in [ConfigBuilder, BG Source](#Config-Builder-bg-source).
