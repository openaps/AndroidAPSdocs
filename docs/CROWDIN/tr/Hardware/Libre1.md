# Freestyle Libre 1

To use your Libre as a CGM that is getting new BG values every 5 minutes without having to scan the sensor, you need to buy an NFC to Bluetooth bridge (commercially available devices, based on the obsolete [LimiTTer](https://github.com/JoernL/LimiTTer) project).

:::{admonition} Libre 1 US and Libre Pro :class: warning Verify the bridge you want to use is compatible with the sensor  
:::

Several bridges are available on the market:

-   [MiaoMiao Reader](https://www.miaomiao.cool/) (version 1, 2 or 3) also available on AliExpress.
-   [Blucon Nightrider](https://www.ambrosiasys.com/our-products/blucon/) (mind recent firmware versions might not be compatible with all apps, the vendor app does not broadcast data to AAPS)
-   [Bubble (or Bubble Mini)](https://www.bubblesmartreader.com/) from European vendors ([Bubblan](https://www.bubblan.org/), [BubbleShop](https://bubbleshop.eu/)) or for Russian users [here](https://vk.com/saharmonitor/). Also available on AliExpress.
-   Atom for Russian users.

Historically it is possible to use a specific watch, the Sony Smartwatch 3 (SWR50) which has an NFC chip that can be enabled and used as an NFC collector. However the custom NFC to Bluetooth bridges listed above offer a less complex solution and would be used by the majority of those wanting to use their Libre 1 (non-US) as a CGM.

-   Sony Smartwatch 3 (SWR50) <https://github.com/pimpimmi/LibreAlarm/wiki/>

Halihazırda, Libre 1'i KŞ kaynağı olarak kullanıyorsanız, SMB algoritmasında "SMB'yi her zaman etkinleştir" ve "Karbonhidrattan sonra SMB'yi etkinleştir"i işaretleyemezsiniz. Libre 1'in KŞ değerleri, bu seçenekleri güvenle kullanmak için yeterince düzgün değildir. Daha fazla ayrıntı için [Kan şekeri verilerini düzeltme](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) konusuna bakın.

## 1. Using xDrip+

-   xDrip+ supports Miaomiao, Bubble, Blucon, Atom and LibreAlarm.
-   Download and install [xDrip+](https://github.com/NightscoutFoundation/xDrip/releases). You also need [OOP2](https://drive.google.com/file/d/1f1VHW2I8w7Xe3kSQqdaY3kihPLs47ILS/view) for Libre 1 US.
-   xdrip'te Ayarlar > Yerel-Uygulama ayarlarına gidin ve > Verileri Yerel Olarak Yayınlayını AÇIK seçin.
-   xDrip+'da Ayarlar > Uyg.lar-arası ayarlar > Tedaviyi Kabul Et'e gidin ve KAPALI'yı seçin.
-   If you want to be able to use AAPS to calibrate, then in xDrip+ go to Settings > Interapp Compatibility > Accept Calibrations and select ON. Ayarlar > Daha Az Ortak Ayarlar> Gelişmiş Kalibrasyon Ayarları'ndaki seçenekleri de gözden geçirmek isteyebilirsiniz.
-   Select xDrip+ for BG Source in ConfigBuilder (setting in AAPS).
-   Ekran görüntülü xDrip+ ayarları için [xDrip+ ayarlarına bakın](../Configuration/xdrip.md). Temel xDrip ayarları ve Freestyle Libre xDrip ayarları için bir bölüm mevcuttur.
-   If AAPS does not receive BG values when phone is in airplane mode, use 'Identify receiver' as described in the [xDrip+ settings page](../Configuration/xdrip.md).

## 2. Using Glimp

-   Glimp supports Miaomiao, Blucon and Bubble.
-   Glimp sürüm 4.15.57 veya daha yenisine ihtiyacınız olacak. Daha eski sürümler desteklenmez.
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
