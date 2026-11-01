(generaltroubleshooting)=

# 問題排除

**遇到問題時，請從這裡開始。**文件中的許多頁面都提供疑難排解資訊。本頁彙整了這些資訊，依主題整理成一份連結清單，協助您解決最常見的問題。

如果您在下方找不到答案，也可以查看：

* [常見問題](../UsefulLinks/FAQ.md)，尋找常見問題的解答；以及
* [設定檔調整指南](ProfileTuning.md)，如果循環系統有在運作，但您仍需要改善血糖控制情況。

```{admonition} Still stuck?
:class: tip
如果這些連結都無法解決您的問題，請參閱 [哪裡可以取得協助](WhereCanIGetHelp.md)，向社群（Facebook、Discord）求助，或將您的[記錄檔](AccessingLogFiles.md)傳送給開發人員。
```

---

(generaltroubleshooting-aaps-app)=

## AAPS 應用程式

### 建立 & 更新

* 如果建置失敗，請參閱 [建置失敗時的處理方式](#building-aaps-troubleshooting)：此頁面列出各種建置方式的疑難排解章節：
  * [AAPS Builder](#aaps-builder-troubleshooting)
  * [瀏覽器建置](#aaps-ci-troubleshooting)
  * [Android Studio](TroubleshootingAndroidStudio.md)
* 金鑰儲存庫遺失，或需要使用新的金鑰儲存庫：[重新安裝 AAPS](#reinstall-aaps)
* 更新 **AAPS**：使用 [AAPS Builder](#aaps-builder-updates)、使用 [瀏覽器建置（分支版本）](#update-browser-build-troubleshooting)，或使用 [Android Studio](#update-computer-build-troubleshooting)

### 安裝中

* [Google Play Protect 警告](#transferring-installing-play-protect-warning)：系統回報此應用程式不安全。
* 安裝時出現關於未經驗證開發人員的訊息，導致安裝**遭到封鎖**：請參閱 [Android 開發人員驗證](#android-developer-verification)，瞭解免費的安裝方式。

### 設定

* [設定檔：「基礎率與目前的幫浦不相容」](#your-aaps-profile-basal-not-compatible)
* [幫浦：「資料來自不同的幫浦」](#config-builder-wrong-pump-data)
* [Nightscout 用戶端](TroubleshootingNsClient.md)
* **"AAPS settings cannot be read"** at start: the settings are encrypted with a key that Android keeps for **AAPS**, and that key does not open them any more, for example after the key store of the phone was reset. While this screen is shown, **AAPS** is not running and does not control the pump. Tap **Retry**: it closes and restarts **AAPS**. If that does not help, restart the phone. Use **Start fresh** only when nothing else helps: it sets the unreadable settings file aside (it is renamed and kept) and starts **AAPS** with empty settings. Then import your last [settings export](../Maintenance/ExportImportSettings.md).

### 使用說明

* [碳水化合物數值錯誤（碳水化合物吸收緩慢）](#CobCalculation-detection-of-wrong-cob-values)
* [自動化](#automations-troubleshooting)
* [全自動閉環](#full-closed-loop-troubleshooting)

---

(generaltroubleshooting-bluetooth-related-issues)=


## 藍牙相關問題

若遇到藍牙連線、幫浦 / Pods 中斷，或註冊與連線等已知問題，請參閱 [藍牙疑難排解](../GettingHelp/BluetoothTroubleshooting.md)

---

(generaltroubleshooting-android-related-issues)=

## Android 相關問題

### 電池優化

**AAPS** 可以協助您找出適合手機的設定：開啟**選單**（☰）> **關於**，然後點選 **Don't kill my app?**。系統會開啟 [Don't kill my app](https://dontkillmyapp.com/) 網站上適用於您手機品牌的操作說明。[設定嚮導](#setup-wizard-bluetooth-battery-optimisation)也會要求您關閉 **AAPS** 和藍牙的電池最佳化功能。

Android 已實作預設啟用的省電設定。這些設定會自動暫停/中止對系統運作非必需的應用程式，以降低不需要隨時執行的 App 的電量消耗。

啟用這項功能後，很可能會導致 **AAPS** 和其他支援的應用程式（例如 **xDrip**）發生問題。

為確保 **AAPS** 與其他支援的應用程式能夠隨時保持運作，請務必停用電池優化。

依你的手機品牌與型號，可能需要在多個位置停用這項設定。

***注意：**若你的手機提供此選項，請依下列步驟為藍牙服務停用電池優化；相同步驟也可用於 **AAPS** 與其他應用程式，但螢幕擷取畫面僅示範如何為藍牙服務操作。*

#### Pixel 手機（原生 Android）

* 前往 Android 設定，選取「應用程式」。

  ![Android 設定¦應用程式](../images/troubleshooting/pixel/01_androidsettings.png)

* 選擇「查看所有應用程式」

  ![查看所有應用程式](../images/troubleshooting/pixel/02_apps.png)

* 在右側的選單中，選擇「顯示系統應用程式」。

  ![顯示系統應用程式](../images/troubleshooting/pixel/03_allapps.png)

* 現在搜尋並選擇「藍牙」應用程式。

  ![藍牙應用程式](../images/troubleshooting/pixel/03_bluetooth.png)

* 點選「應用程式電池用量」，然後選取「不受限制」（部分舊版 Android 稱為「未最佳化」）。

  ![藍牙電池優化](../images/troubleshooting/pixel/04_btunrestricted.png)


#### Samsung 手機

* 進入 Android 設定，選擇「應用程式」

* 在圖示上（1）選擇變更排序演算法，然後選擇「顯示系統應用程式」（2）。

  ![應用程式篩選器](../images/troubleshooting/samsung/Samsung01_Apps.png)

  ![顯示系統應用程式](../images/troubleshooting/samsung/Samsung02_ShowSystemApps.png)

* 接著搜尋藍牙應用程式並點選，查看其設定。

  ![藍牙應用程式](../images/troubleshooting/samsung/Samsung03_BtApp.png)

* 選擇「電池」。

  ![電池](../images/troubleshooting/samsung/Samsung04_Battery.png)

* 將其設為「不受限制」（部分舊版 Android 稱為「未最佳化」）。

  ![不受限制](../images/troubleshooting/samsung/Samsung05_NotOptimized.png)

#### 華為手機

請參閱這份指南：[Huawei 藍牙與電池最佳化](../CompatiblePhones/Huawei.md)

---

(generaltroubleshooting-cgm)=

## 連續血糖監測儀（CGM）

針對 CGM 的已知問題與解決步驟的實用連結。

* [一般問題](#general-cgm-troubleshooting)
* [Dexcom G6](#DexcomG6-troubleshooting-g6)
* [搭配 Minimal Looper 使用 Libre 2](#minimallooper-troubleshooting)
* [Libre 3](#libre3-experiences-and-troubleshooting)
* [xDrip - 無 CGM 資料](#xdrip-identify-receiver)
* [xDrip - Dexcom 問題排除](#xdrip-troubleshooting-dexcom-g5-g6-and-xdrip)

---

(generaltroubleshooting-pumps)=

## 幫浦

針對幫浦的已知問題與解決步驟的實用連結

* [Accu-Chek Combo](#combov2-tips-for-basic-usage)
* [Accu-Chek Insight](#Accu-Chek-Insight-Pump-insight-specific-errors)
* [CareLevo](#carelevo-alarms-and-notifications)
* [DanaRS](#DanaRS-Insulin-Pump-dana-rs-specific-errors)
* [Diaconn G8](#diaconn-g8-bluetooth-troubleshooting)
* [EOPatch2](#eopatch2-alarms-and-warnings)
* [Medtronic + RileyLink](#MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump)
* [Medtrum Nano](#medtrum-nano-troubleshooting)
* [Omnipod DASH](#omnipod-dash-troubleshooting)
* [Omnipod Eros](#OmnipodEros-troubleshooting)

---

(generaltroubleshooting-phones)=

## 手機

針對手機的已知問題與解決步驟的實用連結

* [已測試的手機與裝置設定清單](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true)
* [Jelly](../CompatiblePhones/Jelly.md)
* [Huawei 藍牙與電池最佳化](../CompatiblePhones/Huawei.md)

---

(generaltroubleshooting-remote-control)=

## 遠端控制

* [AAPSClient 與遠端控制（配對、未收到指令）](#client-master-control-troubleshooting)
* [「Nightscout 存取權杖」相關問題](#remotecontrol-nightscout-access-token)
* [SMS 指令](#SMSCommands-troubleshooting)
* [Android Auto](#android-auto-troubleshooting)

---

(generaltroubleshooting-smartwatches)=

## 智慧型手錶

針對智慧型手錶的已知問題與解決步驟的實用連結

* [問題排除 Wear 應用程式](#Watchfaces-troubleshooting-the-wear-app)
* [手錶與手機無法通訊](#wear-os-watch-phone-communication)
* [Wear OS 5](#wear-os-5-troubleshooting)
* [建置 Wear 應用程式](#building-aaps-wear-os-troubleshooting)
