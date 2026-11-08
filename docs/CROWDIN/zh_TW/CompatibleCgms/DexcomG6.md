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
- You can also use xDrip as a companion app of the official Dexcom app, but you might experience delays in BG readings. To read the Dexcom app notifications without xDrip, as a trusted data source, use the [Notification Reader](#DexcomG6-notification-reader).
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
## If using G6 or ONE with the Notification Reader

The official Dexcom G6 or ONE app stays connected to the transmitter. **AAPS** reads the glucose value directly from the notification of the Dexcom app, without any other app in between.

```{admonition} Trusted data source
:class: note
Readings from the Dexcom G6 and ONE apps are a [trusted BG data source](#GettingStarted-TrustedBGSource): SMBs can be allowed all the time.
```

Compared to BYODA or xDrip, the Notification Reader has limits:

- **No trend arrow** and **no backfill**: readings missed while the phone was off or out of range are lost.
- Each reading gets the time the notification appeared, not the exact time of the sensor reading.
- Only values between 40 and 405 mg/dL (2.2 and 22.5 mmol/L) are read. "LOW" and "HIGH" are not read.

### Set up the Dexcom app

-   Keep the Dexcom app installed and connected to the transmitter.
-   Make sure the Dexcom app shows the current glucose value in its notification. 通知必須保持顯示：請勿將通知設為靜音或隱藏。
-   Use the same glucose units (mg/dL or mmol/L) in the Dexcom app as in **AAPS**. Otherwise **AAPS** cannot read the value.

### 在 AAPS 中進行配置

-   Select **Notification Reader** in [**Configuration → BG Source**](#Config-Builder-bg-source) and confirm the switch.

    ![BG Source: Notification Reader selected](../images/NotificationReader_BgSource.png)

-   Back on the main screen, **AAPS** shows **Permissions Required**. Next to **Notification Access**, tap **Grant**.

    ![Permissions Required: Notification Access](../images/NotificationReader_Permissions.png)

-   Android opens its notification access list (its name depends on your Android version, for example *Notification read, reply & control*). Select **AAPS**, turn on **Allow notification access** and confirm with **Allow**.

    ![Android asks to allow notification access for AAPS](../images/NotificationReader_AllowDialog.png)

    Android warns that **AAPS** could read all your notifications. **AAPS** only reads the notifications of supported CGM apps and ignores all others.

    ![Notification access allowed for AAPS](../images/NotificationReader_AccessOn.png)

-   If **Allow notification access** is greyed out (*Controlled by Restricted Setting*), Android blocks it because **AAPS** was not installed from the Play Store. Open the **AAPS** app info (long press the **AAPS** icon > **App info**), tap the three dots menu at the top right and select **Allow restricted settings**. 接著返回通知存取權畫面，並允許存取。
-   Readings appear in **AAPS** when the Dexcom app shows a new value.

```{warning}
If the Dexcom app notification shows more than one glucose number, or none, **AAPS** skips that notification.
```


(DexcomG6-troubleshooting-g6)=
## G6 和 ONE 問題排除

### Dexcom G6/ONE 特定問題排除

-   向下滾動至[**問題排除**](https://navid200.github.io/xDrip/docs/Dexcom_page.html)。

### 一般問題排除

可以在[這裡](#general-cgm-troubleshooting)找到一般 CGM 的問題排除。

### 新的傳輸器與正在運作的傳感器

如果你在傳感器會話期間更換了傳輸器，你可以嘗試取下傳輸器而不損壞傳感器底座。你可以在[這裡](https://navid200.github.io/xDrip/docs/Remove-transmitter.html)找到相關影片。如果你選擇[這種解決方案](https://youtu.be/tx-kTsrkNUM)，你必須小心避免使用膠帶時[損壞傳感器接觸點](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html)。
