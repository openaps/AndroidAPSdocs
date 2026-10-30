# Dexcom G6 和 ONE

## 基本事項

-   遵循一般 CGM 衛生和傳感器設定建議，[點擊此處](../CompatibleCgms/GeneralCGMRecommendation.md)了解更多。

## 使用 G6 和 ONE 的循環一般提示

- 最近的傳輸器稱為 Firefly。傳感器無法在不移除傳輸器的情況下重新啟動，傳輸器本身也無法重置，並且他們也不會生成原始資料。

- 如果你正在重新啟動傳感器，請確保你已準備好進行校準並密切注意變化。

- G6/ONE 預浸泡使用工廠校準可能會導致結果變異。如果你進行預先浸泡，為獲得最佳結果，你可能需要校正傳感器。

請閱讀 Tim Street 發表的[文章](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/)以了解更多，該文章發佈於[www.diabettech.com](https://www.diabettech.com)。

## If using G6 or ONE with xDrip

- If not already set up, download [xDrip](https://github.com/NightscoutFoundation/xDrip) and adjust its settings following the [xDrip settings page](../CompatibleCgms/xDrip.md).
- Select xDrip in [**Configuration → BG Source**](#Config-Builder-bg-source).
- Dexcom G6 和 ONE 傳送器可以同時連接到 Dexcom 接收器（或替代的 t:slim 幫浦）以及你手機上的一個應用程式。
- When using xDrip as receiver uninstall the Dexcom app first. **You cannot connect xDrip and Dexcom app with the transmitter at the same time!**
- If you need Clarity and want to profit from xDrip alarms use the [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) (only G6) with local broadcast to xDrip.
- You can also use xDrip as a companion app of the official Dexcom app, but you might experience delays in BG readings.
- xDrip always uses the transmitter's [native algorithm](https://navid200.github.io/xDrip/docs/Native-Algorithm.html) with current transmitters; there is no reason to disable it. [Preemptive restarts](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) only function on old transmitters (firmware 1.6.5.25 or earlier), where they are needed to prevent the sensor stopping after 10 days; recent (Firefly) transmitters ignore them. See [Restart a sensor](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html) before attempting any restart.
- Everything related to the sensor and transmitter themselves is documented on the [xDrip Dexcom page](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## 如果使用 G6 配合自製 Dexcom 應用程式

```{admonition} Old app version
:class: warning
Dexcom BYODA 現在是非常舊的應用程式版本，且無法更新。
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) supports local broadcast to AAPS and/or xDrip

-   此應用程式允許你將 Dexcom G6 與任何 Android 智慧型手機一起使用。
-   如果你之前使用過原版或修改過的 Dexcom 應用程式，請卸載他們（**不要停止**目前運作的傳感器）。
-   安裝下載的 apk
-   在修補版應用程式中輸入傳感器代碼和傳輸器序列號。
-   在手機設定中，前往應用程式 > Dexcom G6 > 權限 > 其他權限並按下「存取 Dexcom 應用程式」。
-   短時間後，BYODA 應該會收到傳輸器訊號。

### AAPS 設定

-   Select **BYODA** in [**Configuration → BG Source**](#Config-Builder-bg-source).

-   If you don't receive any values select any other data source, then re-select **BYODA** to trigger the demand for permissions to establish the connection between AAPS and BYODA-broadcast.

### Settings for xDrip

-   選擇「640G/Eversense」作為資料來源。
-   Command 'start sensor' must be performed in xDrip in order to receive values. 這不會影響你的目前傳感器，他仍由自製 Dexcom 應用程式控制。


(DexcomG6-troubleshooting-g6)=
## G6 和 ONE 問題排除

### Dexcom G6/ONE 特定問題排除

-   向下滾動至[**問題排除**](https://navid200.github.io/xDrip/docs/Dexcom_page.html)。

### 一般問題排除

可以在[這裡](#general-cgm-troubleshooting)找到一般 CGM 的問題排除。

### 新的傳輸器與正在運作的傳感器

如果你在傳感器會話期間更換了傳輸器，你可以嘗試取下傳輸器而不損壞傳感器底座。你可以在[這裡](https://navid200.github.io/xDrip/docs/Remove-transmitter.html)找到相關影片。如果你選擇[這種解決方案](https://youtu.be/tx-kTsrkNUM)，你必須小心避免使用膠帶時[損壞傳感器接觸點](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html)。
