# Работа с Freestyle Libre 1

To use your Libre as a CGM that is getting new BG values every 5 minutes without having to scan the sensor, you need to buy an NFC to Bluetooth bridge (commercially available devices, based on the obsolete [LimiTTer](https://github.com/JoernL/LimiTTer) project).

:::{admonition} Libre 1 US and Libre Pro :class: warning Verify the bridge you want to use is compatible with the sensor  
:::

Several bridges are available on the market:

-   [MiaoMiao Reader](https://www.miaomiao.cool/) (version 1, 2 or 3) also available on AliExpress.
-   [Blucon Nightrider](https://www.ambrosiasys.com/our-products/blucon/) (mind recent firmware versions might not be compatible with all apps, the vendor app does not broadcast data to AAPS)
-   [Bubble (or Bubble Mini)](https://www.bubblesmartreader.com/) from European vendors ([Bubblan](https://www.bubblan.org/), [BubbleShop](https://bubbleshop.eu/)) or for Russian users [here](https://vk.com/saharmonitor/). Also available on AliExpress.
-   Atom for Russian users.

Historically it is possible to use a specific watch, the Sony Smartwatch 3 (SWR50) which has an NFC chip that can be enabled and used as an NFC collector. However the custom NFC to Bluetooth bridges listed above offer a less complex solution and would be used by the majority of those wanting to use their Libre 1 (non-US) as a CGM.

-   Sony Smartwatch 3 (SWR50)  <https://github.com/pimpimmi/LibreAlarm/wiki/>

В настоящее время, если Libre 1 используется в качестве источника ГК, невозможно активировать «Включать SMB всегда» и «Включить SMB после приема углеводов». Значения ГК Libre 1 недостаточно сглажены для безопасного пользования. Подробнее см [Сглаживание данных ГК](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

## 1. Using xDrip+

-   xDrip+ supports Miaomiao, Bubble, Blucon, Atom and LibreAlarm.
-   Download and install [xDrip+](https://github.com/NightscoutFoundation/xDrip/releases). You also need [OOP2](https://drive.google.com/file/d/1f1VHW2I8w7Xe3kSQqdaY3kihPLs47ILS/view) for Libre 1 US.
-   В xdrip, перейдите в настройки > настройки интеграции с приложениями > трансляция данных локально и выберите Включить (ON).
-   В xdrip+ перейдите в настройки > интеграция с приложениями > принимать терапию и выберите ВЫКЛ (OFF).
-   If you want to be able to use AAPS to calibrate, then in xDrip+ go to Settings > Interapp Compatibility > Accept Calibrations and select ON. Возможно вы также захотите рассмотреть варианты в настройках >> менее распространенные параметры >> дополнительные параметры калибровки.
-   Select xDrip+ for BG Source in ConfigBuilder (setting in AAPS).
-   Для настройки xDrip+ со снимками экрана перейдите на [страницу настроек xDrip+](../Configuration/xdrip.md). Там есть раздел базовых настроек xDrip+ и параметров Freestyle Libre.
-   If AAPS does not receive BG values when phone is in airplane mode, use 'Identify receiver' as described in the [xDrip+ settings page](../Configuration/xdrip.md).

## 2. Using Glimp

-   Glimp supports Miaomiao, Blucon and Bubble.
-   Вам понадобится Glimp версии 4.15.57 или выше. Более старые версии не поддерживаются.
-   Install [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia).
-   Select Glimp for BG Source in ConfigBuilder (setting in AAPS).

## 3. Using Tomato

- Tomato is the vendor app for Miaomiao.
- Install [Tomato](http://tomato.cool/#download_page) and follow the vendor [instructions](http://tomato.cool/how-to-broadcast-data-to-android-aps/tips/).
- Select Tomato for BG Source in ConfigBuilder (setting in AAPS).

## 4. Using Diabox

- Diabox is the vendor app for Bubble.
- Install [Diabox](https://t.me/s/DiaboxApp). In Settings, Integration, enable Share data with other apps.

- Select xDrip+ for BG Source in ConfigBuilder (setting in AAPS).
