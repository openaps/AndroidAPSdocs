# 問題排除

你可以在許多 wiki 頁面上找到問題排除的資訊。 此頁面是幫助你找到解決問題資訊的鏈接集合。

額外的有用資訊也可能在[FAQ](../UsefulLinks/FAQ.md)中提供。

## AAPS 應用程式

### 建立 & 更新

* [遺失的密鑰庫](TroubleshootingAndroidStudio#lost-keystore)
* [問題排除 AndroidStudio](TroubleshootingAndroidStudio)

### 設定
* [設定檔](Profiles-troubleshooting-profile-errors)

  ![錯誤：基礎率未對齊到整點](../images/Screen_DifferentPump.png)

* [幫浦 - 來自不同幫浦的資料](../Maintenance/Update3_0.md#failure-message-data-from-different-pump)

  ![錯誤訊息：來自不同幫浦的資料](../images/BasalNotAlignedToHours2.png)

* [Nightscout 用戶端](../GettingHelp/TroubleshootingNsClient.md)

### 使用說明
* [碳水化合物值錯誤](../DailyLifeWithAaps/CobCalculation.md#detection-of-wrong-cob-values)

   ![錯誤：碳水化合物吸收速度過慢](../images/Calculator_SlowCarbAbsorption.png)

* [SMS 指令](../RemoteFeatures/SMSCommands.md#troubleshooting)

### 頻繁的藍牙連線問題

這可能會發生在各種幫浦上。 除了將 AAPS 排除在任何電池優化之外，你還可以將系統的藍牙應用程式排除在電池優化之外。 這在某些情況下有幫助。 根據你使用的手機，你會以不同方式找到藍牙應用程式。

這裡是一些如何在特定 Android 手機上找到他們的範例。


#### Pixel 手機（原生 Android）

* 進入 Android 設定，選擇「應用程式」。

  ![Android 設定¦應用程式](../images/troubleshooting/pixel/01_androidsettings.png)

* 選擇「查看所有應用程式」

  ![查看所有應用程式](../images/troubleshooting/pixel/02_apps.png)

* 在右側的選單中，選擇「顯示系統應用程式」。

  ![顯示系統應用程式](../images/troubleshooting/pixel/03_allapps.png)

* 現在搜尋並選擇「藍牙」應用程式。

  ![藍牙應用程式](../images/troubleshooting/pixel/03_bluetooth.png)

* 點擊「應用程式電池使用情況」並選擇「未優化」。

  ![藍牙電池優化](../images/troubleshooting/pixel/04_btunrestricted.png)


#### Samsung 手機

* 進入 Android 設定，選擇「應用程式」

* 在圖示上（1）選擇變更排序演算法，然後選擇「顯示系統應用程式」（2）。

  ![應用程式篩選器](../images/troubleshooting/samsung/Samsung01_Apps.png)

  ![顯示系統應用程式](../images/troubleshooting/samsung/Samsung02_ShowSystemApps.png)

* 現在搜尋藍牙應用程式並選擇他來查看其設定。

  ![藍牙應用程式](../images/troubleshooting/samsung/Samsung03_BtApp.png)

* 選擇「電池」。

  ![電池](../images/troubleshooting/samsung/Samsung04_Battery.png)

* 將其設為「未優化」。

  ![未優化](../images/troubleshooting/samsung/Samsung05_NotOptimized.png)


## CGM

* [一般問題](../CompatibleCgms/GeneralCGMRecommendation.md#troubleshooting)
* [Dexcom G6](../CompatibleCgms/DexcomG6.md#troubleshooting-g6-and-one)
* [Libre 3](../CompatibleCgms/Libre3.md#experiences-and-troubleshooting)
* [Libre 2](../CompatibleCgms/Libre2.md#experiences-and-troubleshooting)
* [xDrip - 無 CGM 資料](../CompatibleCgms/xDrip.md#identify-receiver)
* [xDrip - Dexcom 問題排除](../CompatibleCgms/xDrip.md#troubleshooting-dexcom-g5g6-and-xdrip)

## 幫浦

* [DanaRS](../CompatiblePumps/DanaRS-Insulin-Pump.md#dana-rs-specific-errors)
* [Accu-Chek Combo 總覽](../CompatiblePumps/Accu-Chek-Combo-Tips-for-Basic-usage.md)
* [Accu-Chek Combo + Ruffy](../CompatiblePumps/Accu-Chek-Combo-Pump.md#why-pairing-with-the-pump-does-not-work-with-the-app-ruffy)
* [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md#insight-specific-errors)
* [Medtronic + RileyLink](../CompatiblePumps/MedtronicPump.md#what-to-do-if-i-loose-connection-to-rileylink-andor-pump)

## 手機

* [Jelly](../CompatiblePhones/Jelly.md)
* [華為藍牙 & 電池優化](../CompatiblePhones/Huawei.md)

## 智慧型手錶

* [問題排除 Wear 應用程式](../UsefulLinks/WearOsSmartwatch.md#troubleshooting-the-wear-app)
* [Sony Smartwatch 3](../UsefulLinks/SonySW3.md)
