# Freestyle Libre 1

要將您的 Libre 用作 CGM，每 5 分鐘獲取一次新的血糖值，而無需掃描傳感器，您需要購買一個 NFC 到藍牙橋接器（基於已過時的[LimiTTer](https://github.com/JoernL/LimiTTer) 項目的商用設備）。

```{admonition} Libre 2, Libre 1 US and Libre Pro
:class: warning
Verify the bridge and the app you want to use are compatible with your sensor.  
```

Several bridges are available on the market:

-   [MiaoMiao 讀取器](https://www.miaomiao.cool/)（版本 1、2 或 3），也可在 AliExpress 上購買。
-   [Blucon Nightrider](https://www.ambrosiasys.com/our-products/blucon/)（請注意，最新的韌體版本可能與所有應用程式不相容，供應商應用程式不會向 AAPS 廣播資料）。
-   [Bubble（或 Bubble Mini）](https://www.bubblesmartreader.com/)，來自歐洲供應商（[Bubblan](https://www.bubblan.org/)，[BubbleShop](https://bubbleshop.eu/)），或適用於俄羅斯用戶[點擊此處](https://vk.com/saharmonitor/)。 也可在 AliExpress 上購買。
-   適用於俄羅斯用戶的 Atom。

Historically it is possible to use a specific watch, the Sony Smartwatch 3 (SWR50) which has an NFC chip that can be enabled and used as an NFC collector. However the custom NFC to Bluetooth bridges listed above offer a less complex solution and would be used by the majority of those wanting to use their Libre 1 (non-US) as a CGM.

-   Sony Smartwatch 3（SWR50）<https://github.com/pimpimmi/LibreAlarm/wiki/>

As it currently stands, if using Libre 1 as BG source you cannot activate ‘Enable SMB always’ and ‘Enable SMB after carbs’ within the SMB algorithm. The BG values of Libre 1 are not smooth enough to use it safely. See [Smoothing blood glucose data](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) for more details.

## 1. 使用 xDrip+

-   xDrip+ 支援 MiaoMiao、Bubble、Blucon、Atom 和 LibreAlarm。
-   除非您需要最新功能，否則可以安全下載[最新 APK（穩定版）](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)，在這種情況下，您應該使用最新的[Nightly Snapshot](https://github.com/NightscoutFoundation/xDrip/releases)。
-   按照[xDrip+ 設定頁面](../Configuration/xdrip.md)上的設置說明進行操作。
-    您還需要適用於 Libre 1 US（和 Libre 2 EU）的[OOP2](https://drive.google.com/file/d/1f1VHW2I8w7Xe3kSQqdaY3kihPLs47ILS/view)。
-   在[組態建置工具的血糖來源](../Configuration/Config-Builder.md#bg-source)中選擇 xDrip+。

## 2. 使用 Glimp

-   Glimp 支援 Miaomiao、Blucon 和 Bubble 用於 Libre 1 和 Libre 2 EU。
-   您需要 Glimp 版本 4.15.57 或更新版本。 舊版本不支援。
-   安裝 [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia)。
-   在 [ConfigBuilder 的血糖來源](../Configuration/Config-Builder.md#bg-source) 中選擇 Glimp。

## 3. 使用 Tomato

- Tomato 是 Miaomiao 的官方應用程式。
- 安裝 [Tomato](http://tomato.cool/#download_page) 並按照廠商的[說明](http://tomato.cool/how-to-broadcast-data-to-android-aps/tips/)操作。
- 在 [ConfigBuilder 的血糖來源](../Configuration/Config-Builder.md#bg-source) 中選擇 Tomato。

## 4. 使用 Diabox

- Diabox 是 Bubble 的官方應用程式。
- 安裝 [Diabox](https://t.me/s/DiaboxApp)。 在設定中，進入「整合」，啟用「與其他應用程式共享資料」。

![Diabox](../images/Diabox.png)

- 在[組態建置工具的血糖來源](../Configuration/Config-Builder.md#bg-source)中選擇 xDrip+。
