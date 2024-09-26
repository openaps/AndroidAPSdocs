# Dexcom G7 和 ONE+


## 基本準備

值得注意的是，與 G6 相比，G7 和 ONE+ 系統在應用程式和讀取器中都不會平滑值。 更多詳細資訊請參閱 [這裡](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app)。

![G7 英文](../images/6fe30b84-227a-4bae-a9a5-527cee341dbf.png)

```{admonition} [Smoothing method](../Usage/Smoothing-Blood-Glucose-Data)
:class: warning
**Exponential Smoothing** **MUST** be enabled for meaningful use of the G7 / ONE+ values.  
```

## 1.  修補版 Dexcom G7 應用程式 (DiAKEM)

**Note: AAPS 3.2.0.0 or higher is required! Not available for ONE+.**

### 安裝新的修補版 G7 應用程式並啟動傳感器

A patched Dexcom G7 app (DiAKEM) gives access to the Dexcom G7 data. This is not the BYODA app as this app can not receive G7 data at the moment.

Uninstall the original Dexcom app if you used it before (A running sensor session can be continued - note the sensor code before removal of the app!)

Download and install the patched.apk [here](https://github.com/authorgambel/g7/releases).

Enter sensor code in the patched app.

Follow the general recommendations for CGM hygiene and sensor placement found [here](../Hardware/GeneralCGMRecommendation.md).

After the warm-up phase, the values are displayed as usual in the G7 app.

### 在 AAPS 中進行配置

For the configuration in AAPS
- 在 [ConfigBuilder 的血糖來源](../Configuration/Config-Builder.md#bg-source) 中選擇 'BYODA' - 即便這不是 BYODA 應用程式！

- 如果 AAPS 無法接收任何資料，請切換到其他血糖來源，然後再切回 'BYODA' 以調用查詢以批准 AAPS 和 BYODA 之間的資料交換。

## 2. xDrip+（直接連接至 G7 或 ONE+）

- 請參閱這裡的說明：[Xdrip+ G7](https://navid200.github.io/xDrip/docs/Dexcom/G7.html)
- 在 [ConfigBuilder 的血糖來源](../Configuration/Config-Builder.md#bg-source) 中選擇 xDrip+。

- 根據 xDrip+ 設定頁面上的解釋來調整 xDrip+ 設定 [xDrip+ 設定](../Configuration/xdrip.md)

## 3. xDrip+（伴侶模式）

-   下載並安裝 xDrip+：[xDrip](https://github.com/NightscoutFoundation/xDrip)
- 在 xDrip+ 中必須選擇「伴侶應用程式」作為資料來源，並在進階設定 > 藍牙設定 > 啟用「伴侶藍牙」。
-   在 [ConfigBuilder 的血糖來源](../Configuration/Config-Builder.md#bg-source) 中選擇 xDrip+。

-   根據 xDrip+ 設定頁面上的解釋來調整 xDrip+ 設定 [xDrip+ 設定](../Configuration/xdrip.md) 
