(generaltroubleshooting)=

# 問題排除

**Start here when something is not working.** Troubleshooting information lives on many pages across the documentation. This page brings it together: it is a single collection of links, sorted by topic, to help you solve the most common problems.

If you do not find your answer below, also check:

* the [FAQ](../UsefulLinks/FAQ.md) for answers to frequent questions, and
* the [Profile tuning guide](ProfileTuning.md) if your loop runs but your glucose control needs improving.

```{admonition} Still stuck?
:class: tip
If none of the links solve your problem, see [Where can I get help](WhereCanIGetHelp.md) to ask the community (Facebook, Discord), or send your [log files](AccessingLogFiles.md) to the developers.
```

---

(generaltroubleshooting-aaps-app)=

## AAPS 應用程式

### 建立 & 更新

* If the build fails, see [If the build fails](#building-aaps-troubleshooting): it lists the troubleshooting section for each build method:
  * [AAPS Builder](#aaps-builder-troubleshooting)
  * [瀏覽器建置](#aaps-ci-troubleshooting)
  * [Android Studio](TroubleshootingAndroidStudio.md)
* Lost keystore, or new keystore: [Reinstalling AAPS](#reinstall-aaps)
* Updating **AAPS**: [with AAPS Builder](#aaps-builder-updates), [with a browser build (fork)](#update-browser-build-troubleshooting), [with Android Studio](#update-computer-build-troubleshooting)

### 安裝中

* [Google Play Protect warning](#transferring-installing-play-protect-warning): the app is reported as unsafe.
* Installation **blocked** with a message about an unverified developer: see [Android developer verification](#android-developer-verification) for the free installation methods.

### 設定

* [Profile: "Basal rate is not compatible with the current pump"](#your-aaps-profile-basal-not-compatible)
* [Pump: "Data is coming from different pump"](#config-builder-wrong-pump-data)
* [Nightscout Client](TroubleshootingNsClient.md)

### Usage

* [Wrong carb values (slow carbs absorption)](#CobCalculation-detection-of-wrong-cob-values)
* [Automations](#automations-troubleshooting)
* [Full closed loop](#full-closed-loop-troubleshooting)

---

(generaltroubleshooting-bluetooth-related-issues)=


## 藍牙相關問題

若遇到藍牙連線、幫浦 / Pods 中斷，或註冊與連線等已知問題，請參閱 [藍牙疑難排解](../GettingHelp/BluetoothTroubleshooting.md)

---

(generaltroubleshooting-android-related-issues)=

## Android Related Issues

### Battery optimization

**AAPS** can help you find the right settings for your phone: open the **menu** (☰) > **About** and tap **Don't kill my app?**. It opens the instructions for your phone brand on [Don't kill my app](https://dontkillmyapp.com/). The [setup wizard](#setup-wizard-bluetooth-battery-optimisation) also asks you to turn off battery optimization for **AAPS** and Bluetooth.

Android 已實作預設啟用的省電設定。這些設定會自動暫停/中止對系統運作非必需的應用程式，以降低不需要隨時執行的 App 的電量消耗。

When this is enabled, it will very likely cause issue for **AAPS** and other supporting apps like **xDrip**.

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

* Click the "App battery usage" and select "Unrestricted" (called "Not optimized" on some older Android versions).

  ![藍牙電池優化](../images/troubleshooting/pixel/04_btunrestricted.png)


#### Samsung 手機

* 進入 Android 設定，選擇「應用程式」

* 在圖示上（1）選擇變更排序演算法，然後選擇「顯示系統應用程式」（2）。

  ![應用程式篩選器](../images/troubleshooting/samsung/Samsung01_Apps.png)

  ![顯示系統應用程式](../images/troubleshooting/samsung/Samsung02_ShowSystemApps.png)

* Now search the Bluetooth app and select it to see its settings.

  ![藍牙應用程式](../images/troubleshooting/samsung/Samsung03_BtApp.png)

* 選擇「電池」。

  ![電池](../images/troubleshooting/samsung/Samsung04_Battery.png)

* Set it to "Unrestricted" (called "Not optimized" on some older Android versions).

  ![Unrestricted](../images/troubleshooting/samsung/Samsung05_NotOptimized.png)

#### 華為手機

See this guide for [Huawei Bluetooth & battery optimization](../CompatiblePhones/Huawei.md)

---

(generaltroubleshooting-cgm)=

## 連續血糖監測儀（CGM）

針對 CGM 的已知問題與解決步驟的實用連結。

* [一般問題](#general-cgm-troubleshooting)
* [Dexcom G6](#DexcomG6-troubleshooting-g6)
* [Libre 2 with Minimal Looper](#minimallooper-troubleshooting)
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
* [Huawei Bluetooth & battery optimization](../CompatiblePhones/Huawei.md)

---

(generaltroubleshooting-remote-control)=

## 遠端控制

* [AAPSClient and remote control (pairing, commands not received)](#client-master-control-troubleshooting)
* ['Nightscout access token' issues](#remotecontrol-nightscout-access-token)
* [SMS 指令](#SMSCommands-troubleshooting)
* [Android Auto](#android-auto-troubleshooting)

---

(generaltroubleshooting-smartwatches)=

## 智慧型手錶

針對智慧型手錶的已知問題與解決步驟的實用連結

* [問題排除 Wear 應用程式](#Watchfaces-troubleshooting-the-wear-app)
* [Watch and phone do not communicate](#wear-os-watch-phone-communication)
* [Wear OS 5](#wear-os-5-troubleshooting)
* [Building the Wear app](#building-aaps-wear-os-troubleshooting)
