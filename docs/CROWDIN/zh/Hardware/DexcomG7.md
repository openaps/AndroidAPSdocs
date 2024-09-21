# Dexcom G7


## 基本準備

Dexcom G7 在 2022 年春季獲得 CE 證書，並於 2022 年 10 月底開始銷售。

值得注意的是，與 G6 相比，G7 系統不會平滑資料，無論是在應用程式中還是在讀取器中。 更多詳細資訊請參閱 [這裡](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app)。

![G7 英文](../images/6fe30b84-227a-4bae-a9a5-527cee341dbf.png)

:::{admonition} [平滑方法](../Usage/Smoothing-Blood-Glucose-Data)
:class: warning **指數平滑** **必須** 啟用才能有意義地使用 G7 的數值。  
:::

## 1.  修補版 Dexcom G7 應用程式 (DiAKEM)

**注意：需要 AAPS 3.2.0.0 或更高版本！**

### 安裝新的修補版 G7 應用程式並啟動傳感器

修補版 Dexcom G7 應用程式 (DiAKEM) 可查看 Dexcom G7 資料。 這不是 BYODA 應用程式，因為該應用程式目前無法接收 G7 資料。

如果您之前使用了原始的 Dexcom 應用程式，請卸載它（正在運作的傳感器會話可以繼續 - 卸載應用程式前請記下傳感器代碼！）

從 [這裡](https://github.com/authorgambel/g7/releases)下載並安裝修補版.apk。

在修補版應用程式中輸入傳感器代碼。

請遵循 [這裡](../Hardware/GeneralCGMRecommendation.md) 提供的 CGM 衛生和傳感器安裝的一般建議。

預熱階段結束後，資料將如常顯示在 G7 應用程式中。

### 在 AAPS 中進行配置

AAPS 中的配置步驟
- 在 [ConfigBuilder 的血糖來源](../Configuration/Config-Builder.md#bg-source) 中選擇 'BYODA' - 即便這不是 BYODA 應用程式！

- 如果 AAPS 無法接收任何資料，請切換到其他血糖來源，然後再切回 'BYODA' 以調用查詢以批准 AAPS 和 BYODA 之間的資料交換。

## 2. xDrip+（直接連線到 G7）

- 請參閱這裡的說明：[Xdrip+ G7](https://navid200.github.io/xDrip/docs/Dexcom/G7.html)
- 在 [ConfigBuilder 的血糖來源](../Configuration/Config-Builder.md#bg-source) 中選擇 xDrip+。

- 根據 xDrip+ 設定頁面上的解釋來調整 xDrip+ 設定 [xDrip+ 設定](../Configuration/xdrip.md)

## 3. xDrip+（伴侶模式）

-   下載並安裝 xDrip+：[xDrip](https://github.com/NightscoutFoundation/xDrip)
- 在 xDrip+ 中必須選擇「伴侶應用程式」作為資料來源，並在進階設定 > 藍牙設定 > 啟用「伴侶藍牙」。
-   在 [ConfigBuilder 的血糖來源](../Configuration/Config-Builder.md#bg-source) 中選擇 xDrip+。

-   根據 xDrip+ 設定頁面上的解釋來調整 xDrip+ 設定 [xDrip+ 設定](../Configuration/xdrip.md) 
