(generaltroubleshooting)=

# **問題排除**

你可以在許多 wiki 頁面上找到問題排除的資訊。 本頁面彙整多個連結，協助你針對各類已知問題找到解決方式所需的資訊。

額外的有用資訊也可能在[FAQ](../UsefulLinks/FAQ.md)中提供。

---

(generaltroubleshooting-aaps-app)=

## **AAPS 應用程式**

### **建立 & 更新**

* [遺失的密鑰庫](#troubleshooting_androidstudio-lost-keystore)
* [問題排除 AndroidStudio](TroubleshootingAndroidStudio)

### **安裝中**

你可能會看到一個 Google Play Protect 警告，表示該應用程式不安全，是為了舊版 Android 而建置，並且不包含最新的隱私防護。

忽略：更多詳細資訊，仍然安裝。

![Google Play Protect 警告](../images/troubleshooting/InstallGPP.png)

### **設定**
* 設定檔

  ![錯誤：基礎率未對齊到整點](../images/Screen_DifferentPump.png)

* [幫浦 - 來自不同幫浦的資料](#update30-failure-message-data-from-different-pump)

  ![錯誤訊息：來自不同幫浦的資料](../images/BasalNotAlignedToHours2.png)

* [Nightscout 用戶端](../GettingHelp/TroubleshootingNsClient.md)

### **使用說明**
* [碳水化合物值錯誤](#CobCalculation-detection-of-wrong-cob-values)

   ![錯誤：碳水化合物吸收速度過慢](../images/Calculator_SlowCarbAbsorption.png)

* [SMS 指令](#SMSCommands-troubleshooting)

---

(generaltroubleshooting-bluetooth-related-issues)=


## **藍牙相關問題**

若遇到藍牙連線、幫浦 / Pods 中斷，或註冊與連線等已知問題，請參閱 [藍牙疑難排解](../GettingHelp/BluetoothTroubleshooting.md)

---

(generaltroubleshooting-android-related-issues)=

## **Android 相關問題**

### **電池優化**

Android 已實作預設啟用的省電設定。 這些設定會自動暫停/中止對系統運作非必需的應用程式，以降低不需要隨時執行的 App 的電量消耗。

啟用後，很可能會對 **AAPS** 與其他支援的應用程式（如 **xDrip+**）造成問題。

為確保 **AAPS** 與其他支援的應用程式能夠隨時保持運作，請務必停用電池優化。

依你的手機品牌與型號，可能需要在多個位置停用這項設定。

***注意：**若你的手機提供此選項，請依下列步驟為藍牙服務停用電池優化；相同步驟也可用於 **AAPS** 與其他應用程式，但螢幕擷取畫面僅示範如何為藍牙服務操作。*

#### **Pixel 手機（原生 Android）**

* 前往 Android 設定，選取「應用程式」。

  ![Android 設定¦應用程式](../images/troubleshooting/pixel/01_androidsettings.png)

* 選擇「查看所有應用程式」

  ![查看所有應用程式](../images/troubleshooting/pixel/02_apps.png)

* 在右側的選單中，選擇「顯示系統應用程式」。

  ![顯示系統應用程式](../images/troubleshooting/pixel/03_allapps.png)

* 現在搜尋並選擇「藍牙」應用程式。

  ![藍牙應用程式](../images/troubleshooting/pixel/03_bluetooth.png)

* 點擊「應用程式電池使用情況」並選擇「未優化」。

  ![藍牙電池優化](../images/troubleshooting/pixel/04_btunrestricted.png)


#### **Samsung 手機**

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

#### **華為手機**

請參閱此指南：[Huawei 藍牙與電池優化](../CompatiblePhones/Huawei.md)

---

(generaltroubleshooting-cgm)=

## **連續式血糖監測（CGM）**

針對 CGM 的已知問題與解決步驟的實用連結。

* [一般問題](#general-cgm-troubleshooting)
* [Dexcom G6](#DexcomG6-troubleshooting-g6)
* [Libre 3](#libre3-experiences-and-troubleshooting)
* [xDrip - 無 CGM 資料](#xdrip-identify-receiver)
* [xDrip - Dexcom 問題排除](#xdrip-troubleshooting-dexcom-g5-g6-and-xdrip)

---

(generaltroubleshooting-pumps)=

## **幫浦**

針對幫浦的已知問題與解決步驟的實用連結

* [DanaRS](#DanaRS-Insulin-Pump-dana-rs-specific-errors)
* [Accu-Chek Combo 總覽](../CompatiblePumps/Accu-Chek-Combo-Tips-for-Basic-usage.md)
* [Accu-Chek Insight](#Accu-Chek-Insight-Pump-insight-specific-errors)
* [Medtronic + RileyLink](#MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump)

---

(generaltroubleshooting-phones)=

## **手機**

針對手機的已知問題與解決步驟的實用連結

* [已測試的手機與裝置設定清單](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true)
* [Jelly](../CompatiblePhones/Jelly.md)
* [華為藍牙 & 電池優化](../CompatiblePhones/Huawei.md)

(generaltroubleshooting-smartwatches)=

## 智慧型手錶

針對智慧型手錶的已知問題與解決步驟的實用連結

* [問題排除 Wear 應用程式](#Watchfaces-troubleshooting-the-wear-app)
