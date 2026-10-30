# 循環使用者常見問題解答 (FAQ)

How to add questions to the FAQ: Follow these [instructions](../SupportingAaps/HowToEditTheDocs.md)

## 一般問題

### 我可以直接下載 AAPS 的安裝檔嗎？

不行。 AAPS 沒有可下載的 apk 檔案。你必須[自己建立](../SettingUpAaps/BuildingAaps.md)它。原因如下：

AAPS 用來控制你的幫浦並提供胰島素。根據歐洲現行法規，所有歸類為 IIa 或 IIb 類的系統都是需要法規批准的醫療設備（需要 CE 標誌），這需要各種研究和簽字確認。分發未經批准的設備是非法的。在世界其他地區也有類似的法規。

該法規不僅限於銷售（即獲得金錢），還適用於任何形式的分發（即使是免費的）。自行建置醫療設備是符合這些法規的唯一方式。

這就是為什麼 apk 檔案無法提供下載的原因。

(FAQ-how-to-begin)=

### 如何開始？

Start with [Preparing to start with AAPS](../Getting-Started/PreparingForAaps.md): it walks you through everything below in more detail.

首先，你需要**獲取可循環的硬體元件**：

* 一個[支援的胰島素幫浦](../Getting-Started/CompatiblePumps.md)， 
* 一部[Android 智慧型手機](../Getting-Started/Phones.md)（Apple iOS 未被 AAPS 支援 - 你可以查看[iOS Loop](https://loopkit.github.io/loopdocs/)）以及
* 一個[持續監測血糖系統](../Getting-Started/CompatiblesCgms.md)。 

接著，你需要**設置你的軟體組件**：[AAPS](../SettingUpAaps/BuildingAaps.md)、[CGM/FGM 資源](../Getting-Started/CompatiblesCgms.md)和[報告伺服器](../SettingUpAaps/SettingUpTheReportingServer.md)。

第三，你需要學習並**了解 OpenAPS 參考設計，以檢查你的治療因素**。閉環循環的基本原則是你的[基礎率和碳水化合物比例](../SettingUpAaps/YourAapsProfile.md)是正確的。所有建議都假設你的基礎需求已得到滿足，任何峰值或谷底的變化是由其他因素引起的，因此需要一些一次性的調整（如運動、壓力等）。閉環系統為安全所做的調整是有限的（請參閱[OpenAPS 參考設計](https://openaps.org/reference-design/)中的允許最大臨時基礎率），這意味著你不希望浪費這些劑量來修正錯誤的基礎率。例如，如果你經常在用餐前臨時降低基礎率，那麼很可能需要調整你的基礎率。 You can use [Autotune](#autotune-how-autotune-calculates-adjustments) to consider a large pool of data to suggest whether and how basals and/or ISF need to be adjusted, and also whether carb ratio needs to be changed. 或者你可以以[傳統方式](https://integrateddiabetes.com/basal-testing/)測試並設置你的基礎率。

### 我有哪些實際的循環考量？

#### 密碼保護

If you don't want your settings to be easily changed, you can protect them with a password, a PIN or your phone's biometric authentication (fingerprint, face). Open **Settings** > **Protection** > **Settings protection** and choose the type of protection. You can also protect the whole app or only boluses in the same place. See [Settings protection](#Preferences-settings-protection) for details.

#### Android Wear 智慧型手錶

If you use the AAPS watch app to bolus or change settings, every request has to be confirmed on the watch: after you send it, the watch shows a summary with a **CONFIRM** button. See [Remote control from a Wear OS watch](../RemoteFeatures/RemoteControlWearOS.md).

(FAQ-disconnect-pump)=

#### 中斷幫浦連線

如果你因淋浴、沐浴、游泳、運動或其他活動而取下幫浦，你必須讓 AAPS 知道未輸送胰島素，以保持 IOB 的正確性。

The pump can be disconnected using the [loop icon](#AapsScreens-loop-status) on the AAPS main screen: press it and select **Disconnect pump** with the duration you need. If the activity takes longer than planned, press the icon again and pick a new duration: you don't need to reconnect first. See [Disconnecting the pump for showering or activity](#pumps-cannulas-disconnecting) for how to avoid a lack of insulin during long disconnections.

#### 建議不是僅基於單一 CGM 讀取值

為了安全起見，建議是基於平均變化，而非單一 CGM 讀取值。因此，如果你錯過了一些讀取值，可能需要一段時間在恢復資料後，AAPS 才會重新啟動循環。

#### 進一步的讀取值

There are several blogs with good tips to help you understand the practicalities of looping. Some of them are no longer online: the links below marked "archived copy" open a saved copy on the Internet Archive.

    * [Fine-tuning Settings](https://web.archive.org/web/20171029031305/http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM (archived copy)
    * [Why DIA matters](https://web.archive.org/web/20231130035027/http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM (archived copy)
    * [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
    * [Hormones and autosens](https://web.archive.org/web/20170902081839/http://seemycgm.com/2017/06/06/hormones-2/) See my CGM (archived copy)
    

(what-emergency-equipment-is-recommended-to-take-with-me)= (FAQ-emergency-equipment)=

### 推薦隨身攜帶的應急設備有哪些？

你必須攜帶與其他使用胰島素幫浦療法的 1 型糖尿病患者相同的應急設備。當使用 AAPS 進行循環時，強烈建議隨身攜帶或將以下額外設備放在身邊：

* 用於為智慧型手機、手錶和（如有需要）BT 閱讀器或 Link 設備充電的行動電源和充電線
* 幫浦電池
* Access to your backups, both on the phone and in the cloud (e.g. Google Drive, Dropbox), so that you can set up AAPS again on another phone (see [Creating and restoring back-ups](../Maintenance/ExportImportSettings.md)): 
  * the current [apk](../SettingUpAaps/BuildingAaps.md) of AAPS and of any other apps you use (e.g. xDrip, Juggluco, BYODA).
  * your keystore file (from building the apk) and its password,
  * your latest settings export files from AAPS and your other apps,
  * your **AAPS** master password: you cannot import the settings file without it.

(FAQ-organize-backups)=

#### How to organize my backups?

Export settings very regularly: after each pod or reservoir change, after modifying your profile, when you have validated an objective, if you change your pump… Even if nothing changes, export once a month. 保留幾個舊的匯出文件。

**AAPS** can do this for you: it can export your settings automatically (for example with an [Automation](#ExportImportSettings-Automating-Settings-Export) after each pod change) and save the export directly to a cloud folder (Google Drive). See [Creating and restoring back-ups](../Maintenance/ExportImportSettings.md).

### 如何安全、牢固地安裝 CGM/FGM？

你可以使用膠布固定。市面上有多種常見 CGM 系統的預穿孔“防護貼片”（可搜索 Google、eBay 或 Amazon）。一些循環使用者會使用更便宜的標準運動貼布或 Rocktape。

你可以固定他。你還可以購買上臂護腕，用於透過帶子固定 CGM/FGM（可搜索 Google、eBay 或 Amazon）。

## APS 演算法

### Why does OpenAPS AMA show "dia: 3" even though I have a different DIA in my profile?

With **OpenAPS AMA** selected in **Configuration** > **APS**, **Open plugin** shows the data sent to the algorithm. In its **Profile** section, `dia` is always 3.0 or less:

![OpenAPS AMA plugin screen with dia 3.0 in the profile data](../images/screens/openaps_ama_plugin.png)

在 AMA 中，DIA 並不代表“胰島素作用的持續時間”。這是一個參數，曾經與 DIA 相關。現在，他的意思是“修正應在多長時間內完成”。他與 IOB 的計算無關。在 OpenAPS SMB 中，不再需要這個參數。

## 其他設置

### Nightscout 設置

(FAQ-nsclient-blocked)=

#### AAPSClient (or AAPS) does not upload data: "Blocked by…". 我該怎麼做？

The NSClient status shows why no data is sent:

* **Blocked by connectivity options**: the connection settings do not allow the current connection. For example, you are on cellular data but only Wi-Fi is allowed, or you are not on one of the allowed Wi-Fi networks (SSIDs).
* **Blocked by charging options**: the connection settings only allow syncing while the phone is charging (or only on battery), and this is not the case right now.
* **No connectivity**: the phone has no internet connection.

Check the [NSClient connection settings](#Preferences-nsclient): **Use cellular data**, **Use roaming**, **Use WiFi**, **WiFi SSID**, **Sync on battery** and **Sync while charging**.

### CGM 設置

(FAQ-advanced-filtering)=

#### Why does AAPS say 'SMB always and after carbs disabled because active BG source doesn't support advanced filtering'?

**Enable SMB always** and **Enable SMB after carbs** can only be used with a [trusted BG data source](#GettingStarted-TrustedBGSource): a sensor and CGM app that can tell **AAPS** which sensor the readings come from. With any other BG source, **AAPS** switches these two options off and shows this message. Check the list of trusted sources and, if your sensor is listed, make sure you use one of the CGM apps shown for it. See also [Smoothing blood glucose data](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### 幫浦

#### 電池

Looping can reduce the pump battery faster than normal use because the system interacts through Bluetooth far more than a manual user does. 最好在電池電量降至 25% 時更換，因為這時通訊變得困難。你可以使用 Nightscout 網站中的 PUMP_WARN_BATT_P 變數設置幫浦電池的警告提示。延長電池壽命的小技巧包括：

* 減少 LCD 顯示時間（在幫浦設置選單中）
* 減少背光時間（在幫浦設置選單中）
* 將通知設置為嗶聲而非震動（在幫浦設置選單中）
* 只按下幫浦按鈕重新載入，使用 AAPS 檢視所有歷史紀錄、電池電量和儲液罐容量。
* 在某些手機上，AAPS 應用可能會經常被關閉以節省電力或釋放 RAM。每次啟動時，AAPS 都會重新建立與幫浦的藍牙連線，並重新讀取目前的基礎率和注射歷史紀錄。這會消耗電池。 To see if this is happening, enable **Log app start event** in the NSClient **Advanced settings**: Nightscout will receive an event at every restart of AAPS, which makes it easy to track the issue. To reduce this happening, turn off battery optimization for AAPS so that the phone stops closing it down: see [battery savings](#FAQ-battery-savings) below.
* 使用酒精擦拭電池端子，確保沒有殘留的製造蠟/油脂。
* for [Dana R/RS pumps](../CompatiblePumps/DanaRS-Insulin-Pump.md) the startup procedure draws a high current across the battery to purposefully break the passivation film (prevents loss of energy while in storage) but it doesn't always work to break it 100%. 你可以將電池取出並重新插入 2-3 次，直到螢幕上顯示 100% 為止，或者使用電池鑰匙短暫短路電池，將兩個端子接觸一瞬間。
* 另見[特定類型電池的更多提示](#Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)

#### 更換儲液罐和插管

The reservoir must be changed directly on the pump, then the change is recorded in **AAPS**. Follow the step-by-step [guide for changing the pump reservoir and cannula](#pumps-cannulas-changing-reservoir-and-cannula).

### 桌布

你可以在 [手機頁面](#Phones-phone-wallpaper) 找到適合你手機的 AAPS 桌布。

### 日常使用

Many of the situations below can be prepared once as a [scene](#scenes): a preset that switches profile, temp target and other settings with one tap. **AAPS** offers ready-made templates, for example *Exercise*, *Sleep*, *Alcohol* or *Bathing*.

#### 衛生

(what-to-do-when-taking-a-shower-or-bath)=

##### 淋浴或洗澡時該怎麼做？

淋浴或洗澡時，你可以取下幫浦。在這短時間內，你可能不需要幫浦，但你應該告訴 AAPS 你已經中斷了連線，以確保 IOB 計算正確。請參見[上方描述](#FAQ-disconnect-pump)。 The *Bathing* [scene](#scenes) template does this for you.

#### 工作

根據你的工作，你可能會選擇在工作日使用不同的治療因素。作為循環使用者，你應該考慮在你的典型工作日進行[設定檔切換](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)。例如，如果你的工作要求較低（例如坐在辦公桌前），你可以切換到高於 100% 的設定檔；如果你一整天都在活動，可以切換到低於 100% 的設定檔。如果你經常工作時間比正常時間早或晚，或者輪班工作，你也可以考慮設置高或低臨時目標，或進行[設定檔的時間調整](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile)。 You can also create a second profile (e.g. 'home' and 'workday') and do a daily profile switch to the profile you actually need, or save your workday settings as a [scene](#scenes).

### 休閒活動

(FAQ-sports)=

#### 運動

你需要重新調整循環之前的運動習慣。如果你像以前一樣攝取運動碳水化合物，閉環系統會識別並相應地進行修正。

這樣，你體內會有更多碳水化合物，但同時循環會應對並釋放胰島素。

進行循環時，你應該嘗試以下步驟：

* Make a [profile switch](#ProfileSwitch-change-percentage) < 100%: tap the profile name on the main screen, tap the round **▶** button, then set **Percentage** and **Duration**.
* 設置一個[活動臨時目標](#TempTargets-activity-temp-target)高於你的標準目標。 With a percentage below 100 % and a duration, the same **Activate** screen offers a **Temporary target / Activity** switch that starts both at once.
* 如果你正在使用 SMB，請確保[“啟用高臨時目標的 SMB”](#Open-APS-features-enable-smb-with-high-temp-targets)和[“始終啟用 SMB”](#Open-APS-features-enable-smb-always)已停用。

這些設置的預處理和後處理非常重要。在運動前及時進行更改，並考慮肌肉補充能量後的影響。

The *Exercise* and *Post-exercise Night* [scene](#scenes) templates bundle these settings, so you can start them with one tap. If you do sports regularly at the same time (i.e. sports class in your gym) you can consider using [automation](../DailyLifeWithAaps/Automations.md) to start the profile switch and TT, or the scene. 基於位置的自動化也可能是一個不錯的做法，但會讓前置處理變得更複雜。

設定檔切換的百分比、運動臨時目標的值以及最佳的更改時間都是個人化的。如果你正在尋找適合你的值，請從安全的一面開始（從較低的百分比和較高的臨時目標開始）。

#### 性行為

你可以取下幫浦以獲得“自由”，但你應該告訴 AAPS 這樣 IOB 計算才能正確。請參見[上方描述](#FAQ-disconnect-pump)。

#### 飲酒

在閉環模式下飲酒是有風險的，因為演算法無法正確預測受酒精影響的血糖。你需要檢查自己的方法，並使用 AAPS 中的以下功能來進行處理：

* 停用閉環模式，並手動處理糖尿病或
* 設置高臨時目標並停用 UAM 以避免由於未注意到的餐食而增加 IOB 或
* do a [profile switch](#ProfileSwitch-change-percentage) to noticeably less than 100% 

The *Alcohol* [scene](#scenes) template is a starting point you can adapt to your own method.

飲酒時，你必須時刻關注你的 CGM，並手動透過攝取碳水化合物避免低血糖的發生。

#### 睡眠

##### How can I loop during the night without mobile and Wi-Fi radiation?

許多使用者在夜間將手機切換到飛航模式。 If you want the loop to support you when you are sleeping, proceed as follows (this will only work if your CGM app runs on the same phone as AAPS, such as xDrip, Juggluco or BYODA; it will NOT work if you get the BG-readings via Nightscout):

1. 打開手機的飛航模式。
2. 等待飛航模式生效。
3. 打開藍牙。

現在你不會接聽電話，也無法連線網路。但循環仍在運作。

Some people have discovered problems with local broadcast (AAPS not receiving BG values from xDrip) when phone is in airplane mode. In xDrip, go to Settings > Inter-app settings > Identify receiver and enter `info.nightscout.androidaps`.

![xDrip Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

If you want different settings at night (for example a higher target), the *Sleep* [scene](#scenes) template is a good starting point.

#### Traveling

##### 如何應對時區變更？

使用 Dana R 和 Dana R Korean 時，你不需要做任何操作。 For other pumps see [time zone traveling](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) page for more details.

### 醫療話題

#### 住院

如果你想與臨床醫師分享一些有關 AAPS 和 DIY 循環的資訊，你可以列印[給臨床醫師的 AAPS 指南](../UsefulLinks/ClinicianGuideToAaps.md)。

#### 與內分泌科醫生的醫療約診

##### 報告

你可以展示你的 Nightscout 報告 (https://YOUR-NS-SITE.com/report) 或查看[Nightscout Reporter](https://nightscout-reporter.zreptil.de/)。

## Discord 上的常見問題及其解答...

### 我的問題不在這裡列出。

See [where to get help](../GettingHelp/WhereCanIGetHelp.md). If you found the solution yourself, **remind us to add it to this list!**

### Building and installing

(FAQ-build-errors)=

#### 我在建置應用程式時遇到問題和錯誤。

Please check the troubleshooting page for the way you build **AAPS** (see [Building AAPS](../SettingUpAaps/BuildingAaps.md)):

* building with a browser: [Browser build: troubleshooting](#aaps-ci-troubleshooting),
* building with Android Studio: [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md).

(FAQ-build-error-file-name-too-long)=

#### 建置錯誤：檔名過長

This error can happen when building with Android Studio: the build stops with an error stating the file name is too long. Possible solutions: Move your sources to a directory closer to the root directory of your drive (e.g. "C:\src\AndroidAPS").

在 Android Studio 中：確保在開啟專案並從 GitHub 拉取後，"Gradle" 已經同步並完成索引。執行 Build->Clean Project 之前，請先進行 Rebuild Project。執行 File->Invalidate Caches 並重新啟動 Android Studio。

(FAQ-running-dev-version)=

#### 警告：運作開發版本。閉環模式已停用

**AAPS** shows this message when you run a development (dev) version without engineering mode: in a dev version, closed loop only works in engineering mode.

The dev version is meant for testing, not for actual looping: read [Development branch](../AdvancedOptions/DevBranch.md) before going further.

To turn on engineering mode:

1. Place a file named `engineering_mode` in the `extra` subfolder of your AAPS directory (the folder you chose in the setup wizard, usually `AAPS/extra`). 任何文件都可以，只要命名正確即可。
2. Restart **AAPS** so that it finds the file.

提示：複製現有日誌文件並將其重命名為 "engineering_mode"（注意：無文件擴展名！）。

### 目標

#### 我在目標上卡住了，需要幫助。

First read [Completing the Objectives](../SettingUpAaps/CompletingTheObjectives.md). If you are still stuck, screen capture the question and answers and post them on the Discord AAPS channel. 別忘了說明你選擇了哪些選項（或未選擇），以及為什麼。你會得到提示和幫助，但你需要找到答案。

### Settings, passwords and backups

(FAQ-reset-master-password)=

#### How to reset the master password?

If you forgot your master password, you can reset it to your pump's serial number:

1. Create an empty file named `PasswordReset` (no file extension) in the `extra` subfolder of your AAPS directory (usually `AAPS/extra`).
2. Restart **AAPS**. Your pump must be connected: **AAPS** shows "Waiting for pump…" and needs to read the pump serial number within 30 seconds.
3. **AAPS** shows "Password set!": your master password is now your **pump serial number**. The `PasswordReset` file is deleted automatically.
4. Open **Settings** > **Protection** > **Master password** and set a new password.

If the pump is not reached in time, nothing changes: check the pump connection and try again.

This only resets the master password. A settings, application or bolus password or PIN is not reset, but you can always use the master password instead of them.

    {admonition} Old settings files
    :class: warning
    Settings files exported with the old master password can only be imported with that old password.

(FAQ-where-are-settings-files)=

#### 在哪裡可以找到設定文件？

Settings files are stored in the `preferences` subfolder of the AAPS directory you chose in the [setup wizard](#SetupWizard-StoragePermission) (for example `/internal storage/AAPS/preferences`). If you set up a cloud folder (Google Drive), your exports can also be saved there. See [Creating and restoring back-ups](../Maintenance/ExportImportSettings.md).

警告：確保不要遺失密碼，否則你將無法匯入加密的設定文件！

(FAQ-import-settings-earlier-versions)=

#### How do I import settings from earlier versions of AAPS into AAPS v3 or v4 ?

You can only import settings (in AAPS v3 or v4) that were exported using AAPS v2.8x or later. If you were using a version of AAPS older than v2.8x or you need to use setting exports older than v2.8x, then you need to install AAPS v2.8 first. Import the older settings of v2.x in v2.8. After checking that all is OK, you can export settings from v2.8. Install the current AAPS version and import v2.8 settings in it.

If you use the same key to build the old and the new version, you won't even have to import settings. You can install the new version over the old one.

有一些新的目標加入。你需要驗證他們。

(FAQ-delete-treatments)=

#### Where can I delete treatments?

Open the **menu** (☰) and select **Treatments history**. Long press an entry to select it, tap more entries if needed, then tap the **trash can** icon and confirm. See [Treatments history](#aaps-screens-treatments).

### Phone and connection problems

(FAQ-aaps-stops)=

#### AAPS 每天在同一時間停止運作。

* Google Play Protect may shut down **AAPS** every morning on some phones. If this happens, go to the Google Play options and disable **Google Play Protect**.
* 檢查是否有“清理”應用程式（如 CCleaner 等），並將其卸載。
* Turn off all battery optimizations for **AAPS** (see [battery savings](#FAQ-battery-savings) below).

(FAQ-battery-savings)=

#### 如何配置省電設置？

Your phone may suspend **AAPS** and related apps (CGM app, Bluetooth) when you are not using it. **AAPS** then cannot do its work, and Bluetooth connections to the sensor and pump (or RileyLink) may be shut down, causing "pump unreachable" alerts and communication errors.

Turn off battery optimization for **AAPS**, your CGM app (e.g. xDrip) and the Bluetooth system app. The way to do this depends on the phone's brand, model and Android version:

* see [Battery optimization](#generaltroubleshooting-android-related-issues) for Pixel, Samsung and Huawei phones,
* in **AAPS**, open the **menu** (☰) > **About** and tap **Don't kill my app?**, or visit [Don't kill my app](https://dontkillmyapp.com/) for other brands.

If you are not sure that battery savings cause your problem, you can temporarily turn off all battery savings on the phone: your battery will drain faster, but you will quickly see if the problem goes away.

(FAQ-pump-unreachable-alerts)=

#### 一天或夜間多次出現幫浦無法使用警報。

Your phone may be suspending **AAPS** or even Bluetooth, causing it to lose the connection to the pump or RileyLink (see [battery savings](#FAQ-battery-savings) above).

You can also change when the alert is raised: press the **Settings** (gear) icon on the top right of the main screen, then select **Local alerts** > **Pump unreachable threshold** (30 to 300 minutes). Check your pump's page: some recommend a value, e.g. 120 minutes for [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md).

(FAQ-link-unresponsive)=

#### 我的 Link/幫浦/Pod 沒有反應（RL/OL/EmaLink...）

某些手機與連線設備（RL/OL/EmaL…）之間會出現藍牙斷線的情況。

有些連線設備無法回應（AAPS 顯示已連線，但連線設備無法到達或指令幫浦）。

First try the **Reset RileyLink** button on the pump screen (see your pump's page: [Medtronic](#MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump), [Omnipod Eros](#OmnipodEros-reset-rileylink-config-notes)). If this does not help, the easiest way to get all these parts working together is:

1. Power off the Link.
2. Quit **AAPS** (**menu** (☰) > **Exit**).
3. Long press the **AAPS** icon, open the Android **App info**, tap **Force stop**, then **Storage** > **Clear cache** (do NOT clear storage/data!).
4. Rarely some phones may need a reboot here. 你可以嘗試不重啟。
5. Power on the Link.
6. Start **AAPS**.
7. On the pump screen, tap **Pair RileyLink** and select your Link again.

### 遠端控制

(FAQ-aapsclient)=

#### 配置和使用 AAPSClient 遠端應用程式

**AAPSClient** is a separate app that lets a caregiver follow and control **AAPS** remotely. Since **AAPS** v4, controlling **AAPS** from AAPSClient needs a one-time pairing between the two apps. See:

* [The AAPSClient app](#aapsclient-app): installing, first start and pairing,
* [Master ↔ Client control](#client-master-control): what can be controlled and how pairing works,
* [AAPSClient on a smartwatch](#remotecontrol-smartwatches).

(FAQ-hardened-mode)=

#### Treatments I enter on the Nightscout website are not applied

That is [hardened mode](#client-master-control-hardened-mode). While client control is on — always in Simple Mode — **AAPS** takes changes only from paired clients, not from the Nightscout website or other apps. Enter them on a paired **AAPSClient** instead.

### Alerts and warnings

#### I have a red warning badge (red triangle) / AAPS won't enable closed loop / Loop stays in LGS / I had a yellow triangle

The red warning badge on the BG source shortcut is a security feature in AAPS. See [BG warning sign](#aaps-screens-bg-warning-sign) for the full explanation.

A red warning badge on the BG source shortcut in the bottom bar (the red triangle of older versions) means that you have duplicate BGs and AAPS can't calculate precisely the deltas. A closed loop is switched to **Low Glucose Suspend** mode: it still reduces or suspends your basal to protect you against lows, but it gives no correction insulin. You need to delete one BG of each duplicated value in order to clear the warning. Tap the shortcut to open your [BG source screen](#aaps-screens-bg-source): the duplicate is highlighted in red. Long press one line you want to delete, check one of each lines that are doubled and tap the trash icon. 如果重複的血糖資料過多，你可能需要重置 AAPS 資料庫。在這種情況下，你將會失去統計資料、IOB、COB 和選定的設定檔。

Once the warning is gone, AAPS does not go back to **Closed Loop** by itself. Press the loop icon on the main screen and select **Closed Loop** again.

問題的可能來源：xDrip 和/或 Nightscout 回填血糖資料。

The yellow triangle of older versions meant unstable delay between each BG reading (BGs not received every 5 min regularly, or missing BGs), which often happens with Libre or after a G6 transmitter change. **AAPS** 4 no longer shows it: it recalculates the values in the background and the loop works correctly.

### Omnipod DASH

(FAQ-move-dash-pod)=

#### Can I move an active DASH Pod to another phone?

The Pod state is included in the exported settings, so an active Pod can be moved to another phone by exporting the settings right before the move and importing them on the other phone. This is not officially supported and there is a risk of losing the Pod: if possible, try it when your Pod is about to expire.

Read these sections first:

* [Export and import settings](#omnipod-dash-export-import) on the Omnipod DASH page, and [Tubeless pumps](#ExportImportSettings-tubeless-pumps): on the new phone, tick **Also replace pump settings** and use a file exported during the Pod you are wearing now,
* [Discarding a pod](#omnipod-dash-discard-pod), to remove the Pod from the old phone afterwards. Keep the old phone in airplane mode until the Pod is discarded, so that both phones never talk to the Pod.