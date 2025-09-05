# Dexcom G7 和 ONE+


## 基本準備

值得注意的是，與 G6 相比，G7 和 ONE+ 系統在應用程式和讀取器中都不會平滑值。 更多詳細資訊請參閱 [這裡](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app)。

![G7 英文](../images/6fe30b84-227a-4bae-a9a5-527cee341dbf.png)

```{admonition} Smoothing method 
請閱讀 [平滑方法](../CompatibleCgms/SmoothingBloodGlucoseData.md) 建議，以用於 Dexcom G7/ONE+/Stelo
```

## 1. xDrip+（直接連接至 G7 或 ONE+）

- 請遵循這裡的指示：[xDrip+ G7](https://navid200.github.io/xDrip/docs/Dexcom/G7.html)
- 在 [組態建置工具 的血糖來源](#Config-Builder-bg-source) 中選擇 xDrip+。

- 根據 xDrip+ 設定頁面上的解釋來調整 xDrip+ 設定 [xDrip+ 設定](../CompatibleCgms/xDrip.md)

## 2.  修補版 Dexcom G7 應用程式 (DiaKEM)

**注意：需要 AAPS 3.2.0.0 或更高版本！ 不適用於 ONE+。**

### 安裝新的修補版 G7 應用程式並啟動傳感器

修補版 Dexcom G7 應用程式 (DiaKEM) 可查看 Dexcom G7 資料。 這不是 BYODA 應用程式，因為該應用程式目前無法接收 G7 資料。

- 如果之前有使用過原Dexcom應用程式，請將其解除安裝（如果傳感器正在運作，可以繼續使用傳感器，請在移除應用程式前記下傳感器代碼！）

- 從 [這裡](https://github.com/authorgambel/g7/releases)下載並安裝修補版.apk。

- 在修補版應用程式中輸入傳感器代碼。

- 請遵循一般 CGM 衛生規範和傳感器安裝位置的建議，詳情請參閱[此處](../CompatibleCgms/GeneralCGMRecommendation.md)。

- 浸潤階段結束後，資料會顯示在 G7 應用程式中。

### 在 AAPS 中進行配置

- 在 [組態建置工具 的血糖來源](#Config-Builder-bg-source) 中選擇 'BYODA' - 即便這不是 BYODA 應用程式！

- 如果 AAPS 無法接收任何資料，請切換到其他血糖來源，然後再切回 'BYODA' 以調用查詢以批准 AAPS 和 BYODA 之間的資料交換。

## 3. xDrip+（companion - 夥伴模式）

-   下載並安裝 xDrip+：[xDrip](https://github.com/NightscoutFoundation/xDrip)
- 在 xDrip+ 中必須選擇「夥伴應用程式」作為資料來源，並在進階設定 > 藍牙設定 > 啟用「夥伴藍牙」。
-   在 [組態建置工具的血糖來源](#Config-Builder-bg-source) 中選擇 xDrip+。

-   根據 xDrip+ 設定頁面上的解釋來調整 xDrip+ 設定 [xDrip+ 設定](../CompatibleCgms/xDrip.md)

## 4. Juggluco

需要版本 9.0 以上

- 停用之前連接到傳感器的應用程式：卸載應用程式或使用「強制停止」。 在應用程式設定中停用「附近設備」權限。 限制應用程式的電池使用。

- 在藍牙設定中忘記傳感器：在 Android 設定中，找到已配對設備中的傳感器並選擇「忘記」。 Dexcom G7 傳感器名稱以 DXCM 開頭。

- 避免其他傳感器造成的干擾：將舊的 Dexcom 傳感器保持在藍牙範圍之外。

- 將 G7 傳感器連接到 Juggluco：打開 Juggluco → 左側選單 → 照片。 掃描 G7 傳感器應用裝置上的資料矩陣。 等待最多 5 分鐘，讓 Juggluco 找到傳感器。

- 配對要求：同意將傳感器與 Juggluco 配對。 確保配對期間螢幕未被鎖定。 如果配對失敗，請等待 5 分鐘再試。

- 例外：Wear OS 手錶可以在不按同意按鈕的情況下配對。
