# Freestyle Libre 1

要將你的 Libre 用作 CGM，每 5 分鐘獲取一次新的血糖值，而無需掃描傳感器，你需要購買一個 NFC 到藍牙橋接器（基於已過時的[LimiTTer](https://github.com/JoernL/LimiTTer) 項目的商用設備）。

```{admonition} Libre 2, Libre 1 US and Libre Pro
:class: warning
驗證橋接和你想要使用的應用程式是否與你的傳感器相容。  
```

市面上仍有一些橋接器可購買：

-   [MiaoMiao 讀取器](https://www.miaomiao.cool/)（版本 1、2 或 3），也可在 AliExpress 上購買。
-   [Bubble / Mini / Nano](https://www.bubblesmartreader.com/) 來自歐洲供應商（[BubbleShop](https://bubbleshop.eu/)），或俄羅斯用戶請見 [此處](https://vk.com/saharmonitor/)。 也可在 AliExpress 上購買。
-   適用於俄羅斯用戶的 Atom。

## 1. 使用 xDrip+

-   xDrip+ 支援 MiaoMiao、Bubble、Blucon、Atom 和 LibreAlarm。
-   除非你需要最新功能，否則可以安全下載[最新 APK（穩定版）](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)，在這種情況下，你應該使用最新的[Nightly Snapshot](https://github.com/NightscoutFoundation/xDrip/releases)。
-   按照[xDrip+ 設定頁面](../CompatibleCgms/xDrip.md)上的設置說明進行操作。
-    你還需要適用於 Libre 1 US（和 Libre 2 EU）的OOP2。
-   在[ConfigBuilder 的血糖來源](#Config-Builder-bg-source)中選擇 xDrip+。

## 2. 使用 Diabox

- Diabox 是 Bubble 的官方應用程式。
- 安裝 [Diabox](https://t.me/s/DiaboxApp)。 在設定中，進入「整合」，啟用「與其他應用程式共享資料」。

![Diabox](../images/Diabox.png)

- 在[ConfigBuilder 的血糖來源](#Config-Builder-bg-source)中選擇 xDrip+。
