# Dexcom G6 和 ONE

## 基本事項

-   遵循一般 CGM 衛生和傳感器設定建議，[點擊此處](../CompatibleCgms/GeneralCGMRecommendation.md)了解更多。

## 使用 G6 和 ONE 的循環一般提示

- 最近的傳輸器稱為 Firefly。傳感器無法在不移除傳輸器的情況下重新啟動，傳輸器本身也無法重置，並且他們也不會生成原始資料。

- 如果你正在重新啟動傳感器，請確保你已準備好進行校準並密切注意變化。

- G6/ONE 預浸泡使用工廠校準可能會導致結果變異。如果你進行預先浸泡，為獲得最佳結果，你可能需要校正傳感器。

請閱讀 Tim Street 發表的[文章](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/)以了解更多，該文章發佈於[www.diabettech.com](https://www.diabettech.com)。

## 如果使用 G6 或 ONE 與 xDrip

- 如果尚未設定，請下載 [xDrip](https://github.com/NightscoutFoundation/xDrip)，並依照 [xDrip 設定頁面](../CompatibleCgms/xDrip.md)調整設定。
- 在 [**組態設定 → 血糖來源**](#Config-Builder-bg-source)中選擇 xDrip。
- Dexcom G6 和 ONE 傳送器可以同時連接到 Dexcom 接收器（或替代的 t:slim 幫浦）以及你手機上的一個應用程式。
- 使用 xDrip 作為接收器時，請先解除安裝 Dexcom App。**您無法同時使用發射器連線至 xDrip 和 Dexcom App！**
- 如果您需要 Clarity，並想使用 xDrip 的警示功能，請使用 [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)（僅適用於 G6），並透過本機廣播傳送至 xDrip。
- 您也可以將 xDrip 作為官方 Dexcom 應用程式的輔助應用程式，但可能會遇到血糖讀取值延遲的情況。若要在不使用 xDrip 的情況下，將 Dexcom 應用程式通知作為可信任的資料來源讀取，請使用[通知讀取器](#DexcomG6-notification-reader)。
- 目前的發射器搭配 xDrip 時，一律使用發射器的[原生演算法](https://navid200.github.io/xDrip/docs/Native-Algorithm.html)，因此沒有理由停用它。[預先重新啟動](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html)僅適用於舊型發射器（韌體版本 1.6.5.25 或更早），這些發射器需要此功能來避免感測器在使用 10 天後停止運作；較新的 Firefly 發射器則會忽略此功能。嘗試重新啟動前，請先參閱[重新啟動感測器](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html)。
- 關於感測器和發射器本身的所有資訊，請參閱 [xDrip Dexcom 頁面](https://navid200.github.io/xDrip/docs/Dexcom_page.html)。

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## 如果使用 G6 配合自製 Dexcom 應用程式

```{admonition} Old app version
:class: warning
Dexcom BYODA 現在是非常舊的應用程式版本，且無法更新。
```

-   [自行建立 Dexcom 應用程式](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750)（BYODA）支援本地廣播到 AAPS 和／或 xDrip

-   此應用程式允許你將 Dexcom G6 與任何 Android 智慧型手機一起使用。
-   如果你之前使用過原版或修改過的 Dexcom 應用程式，請卸載他們（**不要停止**目前運作的傳感器）。
-   安裝下載的 apk
-   在修補版應用程式中輸入傳感器代碼和傳輸器序列號。
-   在手機設定中，前往應用程式 > Dexcom G6 > 權限 > 其他權限並按下「存取 Dexcom 應用程式」。
-   稍候片刻，BYODA 應該就會接收到發射器訊號。

### AAPS 設定

-   請在 [**組態設定 → 血糖來源**](#Config-Builder-bg-source)中選取 **BYODA**。

-   如果沒有收到任何讀取值，請先選取其他資料來源，再重新選取 **BYODA**，以觸發權限要求， 讓 AAPS 和 BYODA 廣播建立連線。

### xDrip 設定

-   選擇「640G/Eversense」作為資料來源。
-   若要接收讀取值，必須在 xDrip 中執行「啟動感測器」指令。這不會影響你的目前傳感器，他仍由自製 Dexcom 應用程式控制。

(DexcomG6-notification-reader)=
## 使用 G6 或 ONE 搭配通知讀取器

官方 Dexcom G6 或 ONE App 會持續與發射器保持連線。 **AAPS** 會直接從 Dexcom App 的通知中讀取血糖值，不需要透過其他 App。

```{admonition} Trusted data source
:class: note
Dexcom G6 和 ONE App 的讀取值是[可信任的血糖資料來源](#GettingStarted-TrustedBGSource)：可以一直允許微量注射。
```

與 BYODA 或 xDrip 相比，通知讀取器有以下限制：

- **沒有趨勢箭頭**，也**無法補回資料**：手機關機或超出範圍期間錯過的讀取值會遺失。
- 每筆讀取值的時間都是通知出現的時間，而非感測器讀取值的確切時間。
- 只會讀取介於 40 至 405 mg/dL（2.2 至 22.5 mmol/L）之間的數值。不會讀取「LOW」和「HIGH」。

### 設定 Dexcom App

-   讓 Dexcom App 保持安裝狀態，並與發射器保持連線。
-   確認 Dexcom App 的通知中顯示目前的血糖值。通知必須保持顯示：請勿將通知設為靜音或隱藏。
-   Dexcom App 使用的血糖單位（mg/dL 或 mmol/L）必須與 **AAPS** 相同。否則 **AAPS** 無法讀取該數值。

### 在 AAPS 中進行配置

-   在 [**組態建置工具 → 血糖來源**](#Config-Builder-bg-source)中選取 **通知讀取器**，並確認切換開關。

    ![血糖來源：已選取通知讀取器](../images/NotificationReader_BgSource.png)

-   返回主畫面後，**AAPS** 會顯示 **需要權限**。在 **通知存取權**旁，點選 **授予**。

    ![需要權限：通知存取權](../images/NotificationReader_Permissions.png)

-   Android 會開啟通知存取權清單（名稱依 Android 版本而異，例如 *讀取、回覆及控制通知*）。選取 **AAPS**，開啟 **允許通知存取權**，並點選 **允許**確認。

    ![Android 詢問是否允許 AAPS 存取通知](../images/NotificationReader_AllowDialog.png)

    Android 會警告 **AAPS** 可能讀取您的所有通知。 **AAPS** 只會讀取支援的 CGM App 通知，並忽略其他所有通知。

    ![已允許 AAPS 存取通知](../images/NotificationReader_AccessOn.png)

-   如果 **允許通知存取權**呈現灰色，無法選取（*受限設定控制*），表示 Android 封鎖了此功能，因為 **AAPS** 並非從 Play 商店安裝。 Open the **AAPS** app info (long press the **AAPS** icon > **App info**), tap the three dots menu at the top right and select **Allow restricted settings**. 接著返回通知存取權畫面，並允許存取。
-   Dexcom App 顯示新數值時，讀取值就會出現在 **AAPS** 中。

```{warning}
如果 Dexcom App 通知中顯示多個或沒有血糖數值，**AAPS** 就會略過該通知。
```


(DexcomG6-troubleshooting-g6)=
## G6 和 ONE 問題排除

### Dexcom G6/ONE 特定問題排除

-   向下滾動至[**問題排除**](https://navid200.github.io/xDrip/docs/Dexcom_page.html)。

### 一般問題排除

可以在[這裡](#general-cgm-troubleshooting)找到一般 CGM 的問題排除。

### 新的傳輸器與正在運作的傳感器

如果你在傳感器會話期間更換了傳輸器，你可以嘗試取下傳輸器而不損壞傳感器底座。你可以在[這裡](https://navid200.github.io/xDrip/docs/Remove-transmitter.html)找到相關影片。如果你選擇[這種解決方案](https://youtu.be/tx-kTsrkNUM)，你必須小心避免使用膠帶時[損壞傳感器接觸點](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html)。
