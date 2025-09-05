# Freestyle Libre 1

要將你的 Libre 用作 CGM，每 5 分鐘獲取一次新的血糖值，而無需掃描傳感器，你需要購買一個 NFC 到藍牙橋接器（基於已過時的[LimiTTer](https://github.com/JoernL/LimiTTer) 項目的商用設備）。

```{admonition} Libre 2, Libre 1 US and Libre Pro
:class: warning
驗證橋接和你想要使用的應用程式是否與你的傳感器相容。  
```

市場上有幾款橋接器可供選擇：

-   [MiaoMiao 讀取器](https://www.miaomiao.cool/)（版本 1、2 或 3），也可在 AliExpress 上購買。
-   [Blucon Nightrider](https://www.ambrosiasys.com/our-products/blucon/)（請注意，最新的韌體版本可能與所有應用程式不相容，供應商應用程式不會向 AAPS 廣播資料）。
-   [Bubble（或 Bubble Mini）](https://www.bubblesmartreader.com/)，來自歐洲供應商（[Bubblan](https://www.bubblan.org/)，[BubbleShop](https://bubbleshop.eu/)），或適用於俄羅斯用戶[點擊此處](https://vk.com/saharmonitor/)。 也可在 AliExpress 上購買。
-   適用於俄羅斯用戶的 Atom。

過去曾有使用特定手錶的案例，例如 Sony Smartwatch 3 (SWR50)，該手錶內建可啟用的 NFC 晶片，能夠用來作為 NFC 收集器。 不過，上面提到的客製化 NFC 轉藍牙橋接器提供了一個更簡單的解決方案，大部分想要使用 Libre 1（非美國版）當作 CGM 的人，都會選擇這種方式。

-   Sony Smartwatch 3（SWR50）<https://github.com/pimpimmi/LibreAlarm/wiki/>

目前來看，使用 Libre 1 作為血糖來源時，無法在 SMB 算法中啟用「始終啟用 SMB」和「在用餐後啟用 SMB」。 Libre 1 的血糖值不夠平滑，無法安全使用。 請參見 [平滑血糖資料](../CompatibleCgms/SmoothingBloodGlucoseData.md) 獲得更多 詳情。

## 1. 使用 xDrip+

-   xDrip+ 支援 MiaoMiao、Bubble、Blucon、Atom 和 LibreAlarm。
-   除非你需要最新功能，否則可以安全下載[最新 APK（穩定版）](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)，在這種情況下，你應該使用最新的[Nightly Snapshot](https://github.com/NightscoutFoundation/xDrip/releases)。
-   按照[xDrip+ 設定頁面](../CompatibleCgms/xDrip.md)上的設置說明進行操作。
-    你還需要適用於 Libre 1 US（和 Libre 2 EU）的OOP2。
-   在[ConfigBuilder 的血糖來源](#Config-Builder-bg-source)中選擇 xDrip+。

(libre1-using-glimp)=
## 2. 使用 Glimp

-   Glimp 支援 Miaomiao、Blucon 和 Bubble 用於 Libre 1 和 Libre 2 EU。
-   你需要 Glimp 版本 4.15.57 或更新版本。 舊版本不支援。
-   安裝 [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia)。
-   在 [ConfigBuilder 的血糖來源](#Config-Builder-bg-source) 中選擇 Glimp。

(libre1-using-tomato)=
## 3. 使用 Tomato

- Tomato 是 Miaomiao 的官方應用程式。
- 安裝 [Tomato](http://tomato.cool/#download_page) 並按照廠商的[說明](http://tomato.cool/how-to-broadcast-data-to-android-aps/tips/)操作。
- 在[ConfigBuilder，BG 來源](#Config-Builder-bg-source)中選擇 Tomato。

## 4. 使用 Diabox

- Diabox 是 Bubble 的官方應用程式。
- 安裝 [Diabox](https://t.me/s/DiaboxApp)。 在設定中，進入「整合」，啟用「與其他應用程式共享資料」。

![Diabox](../images/Diabox.png)

- 在[ConfigBuilder 的血糖來源](#Config-Builder-bg-source)中選擇 xDrip+。
