# 文件更新與變更

## 2026年10月

- [Browser build with AAPS Builder](#aaps-builder): build workflow version 8, now maintained by the AAPS developers in the [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder) repository. Setting up is one step shorter: [step 1](#aaps-builder-step1) of the [setup page](#aaps-builder-setup) creates your private repository as a copy of that repository, with the build workflow already in it, so there is no workflow to add any more. From now on the build steps are updated for you: your repository runs the version released by the AAPS developers at every build, without any change on your side (and still no automatic build). The build itself does not change, and your existing repository keeps working. To get these automatic updates, replace your `.github/workflows/build.yml` once as explained in [Updating AAPS](#aaps-builder-updates). Your `KEYSTORE_SET` secret stays as it is. The optional [Google Drive step](#aaps-builder-google-drive) now works on the setup page itself, on a phone or a computer: no preparation file needed @psonnera
- [智慧型手錶與 AAPS](#watches-external-companion-apps)：「**Samsung Tizen**」章節已更名為「**外部伴隨應用程式**」，並列出可讀取**AAPS**廣播的應用程式（WatchDrip+、GlucoDataHandler、G-Watch）。 [WatchDrip+](#watches-xiaomi-amazfit) 0.5 及更新版本可不透過 xDrip+，直接連線至**AAPS**：新增設定步驟，並在[設定](#external-companion-apps)、[Wear OS](../WearOS/WearOsSmartwatch.md)和[遠端監控](../RemoteFeatures/RemoteMonitoring.md)中提供摘要。 Bluejay 手錶：GTS 已停產，並更新目前的機型 @psonnera
- [使用 AAPS Builder 的瀏覽器建置](#aaps-builder)：建置工作流程第 6 版。建置步驟現在使用由審核的精確版本（GitHub 的工具與建置機器），而且當錯誤的文字被貼到 `KEYSTORE_SET` 機密時，建置流程會清楚說明問題。[設定頁面](#aaps-builder-setup)現已納入文件並完成翻譯，會檢查您的 GitHub 使用者名稱，也提供更清楚的說明，協助您處理密鑰、「找不到頁面」（404）及 GitHub 應用程式相關問題。如果你的 `.github/workflows/build.yml` 顯示第 5 版或更早，請依 [更新 AAPS](#aaps-builder-updates) 中的說明進行替換 @psonnera
- [AAPS 網頁安裝程式](#web-installer)現已成為文件頁面，並與其他頁面一樣完成翻譯。舊網址仍可使用 @psonnera
- [使用 AAPS Builder 在瀏覽器中建置](#aaps-builder)：建置工作流程第 3 版新增 `aapsclient3Release` 變體（**AAPSClient3**，適用於 AAPS 4.0 及更新版本）。如要建置此版本，請依照[更新 AAPS](#aaps-builder-updates)中的說明，替換您的 `.github/workflows/build.yml` @psonnera
- [Dexcom G7](../CompatibleCgms/DexcomG7.md)：已移除修改版 Dexcom G7 應用程式（DiaKEM），此應用程式已無法用於全新安裝 @psonnera
- [使用 AAPS Builder 的瀏覽器建置](#aaps-builder)：建置工作流程第 2 版。已移除每週自動建置功能（不再排程、不再使用 `AUTO_BUILD` / `AUTO_VARIANT` 變數，也不再使用 `built/…` 標籤）：每次建置都由您自行啟動，並選擇版本和變體；工作流程只有讀取您存放庫的權限。如果您的 `.github/workflows/build.yml` 中標示版本 1，請依照[更新 AAPS](#aaps-builder-updates)中的說明替換檔案。已為每個步驟新增螢幕截圖 @psonnera
- [使用 AAPS Builder 在瀏覽器中建置](#aaps-builder)：建置工作流程現已納入本文件。不再提供範本存放庫：您需要建立空白的私人存放庫，並從設定頁面新增工作流程（新的步驟 2）。工作流程不再檢查外部存放庫是否有更新。如果您是使用先前的範本建立存放庫，請依照[更新 AAPS](#aaps-builder-updates)中的說明，將 `.github/workflows/build.yml` 替換為設定頁面提供的工作流程 @psonnera
- 新增頁面：[使用 AAPS Builder 在瀏覽器中建置](#aaps-builder)。透過本網站上的設定頁面，直接使用 Android 手機建置 AAPS，不需要準備檔案。此頁面取代了瀏覽器建置的 Android 操作說明（已移除 File Manager Plus 相關頁面）。 AAPS Builder 由 @dio99 建立，文件由 @psonnera 撰寫

## 2026年8月

- [傳輸及安裝 AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md)：將 *Android 開發人員驗證*頁面整併至安裝指南，新增[網頁安裝程式](#android-developer-verification-web)（直接從瀏覽器安裝 APK，不需通過驗證）及無線 ADB @psonnera

## 2026 年 7 月

- [簡介](../Getting-Started/Introduction.md)：APS 章節的準確性審查。修正 Frontiers 引用的標題和連結，將其重新定位為背景資料，而非現行市場指南；更新雙荷爾蒙和全自動閉環的說明；釐清控制器不一定是手機 App；移除商業品牌名稱和未經來源證實的使用者人數；並修正 OS-AID 的全名為 *開源自動胰島素輸注* @psonnera
- [詞彙表](../UsefulLinks/Glossary.md)：新增 **AID**、**FCL**、**HCL** 和 **OS-AID** 詞條，並從 **APS** 和 **閉環** 加入交叉連結 @psonnera
- 新增頁面 [Android 開發人員驗證](#android-developer-verification)：說明 Google 即將實施的驗證要求對安裝自行建置 App 的影響，以及免費安裝方式（ADB、進階流程、有限發佈帳號）@psonnera

## 2026年6月

- [瀏覽器建置](#browser-build)：已重構為決策優先的多頁流程（Fork → 金鑰庫選項 1／選項 2，且每個裝置有專屬頁面 → Google Drive → 建置 → 疑難排解）；移除了巢狀分頁，並將安裝 File Manager Plus 設為醒目的步驟 @psonnera
- [簡介](../Getting-Started/Introduction.md)：將術語從 *DIY* 改為 *OS-AID*（開源自動胰島素輸注），新增 Trio 和 Stelo，並更新幫浦／CGM 相容性表格 @tmhastings

## 2026年3月

- [新增 CLI 建置選項](../SettingUpAaps/CLIBuild.md) @je-l
- 將 *Computer Build* 重新命名為 *Android Studio Build*。保留檔案名稱以用於 URL。

## 2025年1月

- [3.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.4.0.0) release and documentation update roll-up (Wizard, Computer build versions, Config Builder)
- CGM 清單更新。已移除 Dexcom G5、Tomato、Glimp。
- [部位輪替介面](#Aapsscreens-site-rotation)
- [運行模式](#AapsScreens-running-mode)
- [自動調整](../AdvancedOptions/Autotune.md)

## 2025年12月

- [設定檔微調](../GettingHelp/ProfileTuning.md)（由 @robrub 提供）

## 2025年10月

- DiaKEM：伺服器升級後，新安裝無法運作 @psonnera
- 移除了 Libre 2 修補版應用程式（已淘汰）： 該版本無法與新傳感器搭配使用 @psonnera
- Reworked Omnipod Dash page @XiTatiON

## 2025年8月

- 已更新版本和 Android Studio 的前置需求
- 新增 [3.3.2.1](#version3321) 版本，移除 Android 16 參考 (已修正)
- 新增 [瀏覽器版](#browser-build) @Angus

## 2025年5月

- 新增 [3.2.0.4 升級頁面](#update-aaps-3204) @psonnera

## 2025年1月

- 快速嚮導[長按功能](#Preferences-quick-wizard) @emilise
- [DynamicISF](../DailyLifeWithAaps/DynamicISF.md) 頁面改寫 @emilise

## 2024年12月

- 文件 [3.3版](#version3300) @emilise

## 2024年11月

- 更新 [你的 AAPS 配置](../SettingUpAaps/YourAapsProfile.md) @emilise
- 重新整理 [Wear OS 智慧型手錶](../WearOS/BuildingAapsWearOS.md)內容 @psonnera

## 2024年10月

- 多個頁面的更新：
  - [需要多長時間](#preparing-how-long-will-it-take)、[組件總覽](../Getting-Started/ComponentOverview.md)、[完成目標](../SettingUpAaps/CompletingTheObjectives.md)、[你的 AAPS 個人檔案](../SettingUpAaps/YourAapsProfile.md)、[組態建置工具](../SettingUpAaps/ConfigBuilder.md)及[偏好設定](../SettingUpAaps/Preferences.md)、[AAPS螢幕](../DailyLifeWithAaps/AapsScreens.md) @emilise
  - [COB計算](../DailyLifeWithAaps/CobCalculation.md)、[動態ISF](../DailyLifeWithAaps/DynamicISF.md) @UnderCliffe10
- [Android Studio Ladybug的建立指導](../SettingUpAaps/BuildingAaps.md) @tanja
- 技術工作（文件部署流程、檔案整理等）@psonnera & @emilise

***

2022年3月到2024年9月的歷史紀錄遺失

隨著 3.2 的重製，一些過時的信息已被移除。你可以在之前的文件版本中找到它：

AAPS 3.1 文件可在 [這裡](https://androidaps.readthedocs.io/en/3.1/index.html) 獲得。

***

## 2022年2月

- [血糖質量警告標誌](#aaps-screens-bg-warning-sign) @tanja
- [美敦力藥量更新](../CompatiblePumps/MedtronicPump.md) @dottedfingertips
- [更新到 AAPS 3.0 後的必要檢查](Update3_0.md) @tanja
- [Omnipod Dash](../CompatiblePumps/OmnipodDASH.md) @Freloner @robertrub @vanelsberg
- 更新 AAPS 3.0 的文件（部分）@xJoe
- [AAPS 3.0 的 Wear OS](../WearOS/WearOsSmartwatch.md) @peterleimbach

## 2022年1月

- [問題排除 Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md) - 更新 @tanja

## 2021年12月

- [建立 APK](../SettingUpAaps/BuildingAaps.md) - 更新 Android Studio Arctic Fox | 2020.3.1 @tanja
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) 資訊已新增 @MilosKozak

## 2021年11月

- 校正 Libre 2 傳感器 的最佳方法
- [ISF](../UsefulLinks/FAQ.md) 影響的重新表述
- 更新[Android Studio問題排除](../GettingHelp/TroubleshootingAndroidStudio.md)
- 移除已修補的[Dexcom](../CompatibleCgms/DexcomG6.md)應用程式，因為它已過時

## 2021年10月

- [發行說明](ReleaseNotes.md) AAPS 3.0 beta

## 2021年9月

- 建議的電腦規格以[建立 AAPS 應用程式](#Building-APK-recommended-specification-of-computer-for-building-apk-file)

## 2021年6月

- [Watchface 側載](../WearOS/WearOsSmartwatch.md)

## 2021年4月

- Omnipod 和美敦力藥量的[通訊設備](#CompatiblePumps-additional-communication-device)列表
- AAPS 在[Nightscout](#Nightscout-manual-nightscout-setup)中的預測

## 2021年3月

- 開發者交流從 gitter 移至[discord](https://discord.gg/4fQUWHZ4Mw)

## 2021年2月

- 新的導覽列和[語系切換](../NavigateDoc/ChangeLanguageVersion.md)

## 2021年1月

- [行動選單](#screens-action-tab) - 'AAPS螢幕'頁面上的更多細節
- Dexcom G6 與[自建Dexcom應用](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)
- Libre智慧讀取器[電池電量](#screens-sensor-level-battery)
- [目標](#objectives-objective3) - 新問題
- Other [new AAPS 2.8.0 functions](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.0)

## 2020年12月

- [Libre 2](../CompatibleCgms/Libre2.md) - 已修補的應用不適用於美國傳感器
- [OpenAPS 硬編碼限制](#Open-APS-features-overview-of-hard-coded-limits)
- Sony Smartwatch 3 Google Play服務的手動安裝

## 2020年10月

- Accu-Chek Combo - 更新[日光節約時間的時間調整](#time-adjustment-daylight-savings-time-dst)
- Accu-Chek Insight - 選項以[上傳絕對值](#Accu-Chek-Insight-Pump-settings-in-aaps)
- 日誌 - 有關[資料夾位置](../GettingHelp/AccessingLogFiles.md)的更多詳細資訊
- Omnipod Eros - 狀態更新
- [SMS 指令 - 時間同步](../RemoteFeatures/SMSCommands.md)

## 2020年9月

- AAPS 2.7 版的大更新
- For details see the [release notes](https://github.com/nightscout/AndroidAPS/releases/tag/2.7.0)

## 2020年6月

- Libre 2：更多關於修改版 LibreLink App 和使用藍牙發射器的資訊
- 搭配 Libre 2 進行[時區旅行](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md)

## 2020年5月

- [延長注射僅適用於 Dana 和 Insight 幫浦](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Insight 停用震動](#Accu-Chek-Insight-Pump-vibration)（韌體 3.x 僅限）
- [最小請求率](#Preferences-minimal-request-change) 以減少開放迴路模式中的通知數量
- 已修補的 Libre Link 應用 - 檢查是否已正確修補
- [預測線](#aaps-screens-prediction-lines) - 更多細節

## 2020年4月

- 回溯胰島素（即由注射器給予）
- 下個主版本將不再支援 Android 6

## 2020年3月

- [使用 Android Studio 3.6.1 建置 APK](../SettingUpAaps/BuildingAaps.md)
- [DanaRS 與韌體 v3](../CompatiblePumps/DanaRS-Insulin-Pump.md) **目前無法用於 AAPS！**
- [延長注射並切換到開環](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [使用 Android Studio 3.6.1 更新 APK](../Maintenance/UpdateToNewVersion.md)

## 2020年2月

- 自動化警告
- [自動感應](#Open-APS-features-autosens) - 簡短說明
- 護理入口替代方案
- [延長注射](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) 功能 - 將停用關閉循環
- 新增[本機設定外掛](../SettingUpAaps/ConfigBuilder.md)
- 範本設定 - 更新 Dexcom G6
- [Version 2.6.0](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-260) - major new features
- [Wear OS 複雜功能](../WearOS/WearOsSmartwatch.md)

## 2020年1月

- [手動碳水化合物修正](#screens-bolus-carbs) 用於錯誤的碳水化合物項目
- [編輯文件](../SupportingAaps/HowToEditTheDocs.md) 時的圖片大小

## 2019年12月

- [Android Auto](../RemoteFeatures/AndroidAuto.md) - 附上截圖的設定
- [Accu-Chek Insight 與自動調整](#Accu-Chek-Insight-Pump-settings-in-aaps) - 使用的替代方案
- [Glimp](#Config-Builder-bg-source) - 支援版本 4.15.57 及更新版本
- [錶盤](../WearOS/WearOsSmartwatch.md) - 重大的更新，更多詳細資訊
- [錶盤小工具](#Watchfaces-complications) - 使用你最喜愛的錶盤與 AAPS 資料

## 2019年11月

- [自動化 - 在停用閉環時停用](../DailyLifeWithAaps/Automations.md)
- [Dexcom G6 傳感器更換更新](#xdrip-replace-transmitter)
- [延長注射 - 為何他們在閉環上下文中無法運作](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [常見問題解答 - 運動](#FAQ-sports)
- [主螢幕 - 圖表上的線條](#aaps-screens-main-graph)
- [Insight - 在 NS 客戶端中停用絕對值](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Medtronic 幫浦 - 可能的重複項目](../CompatiblePumps/MedtronicPump.md)
- [新的 Freestyle Libre 2 教程](../CompatibleCgms/Libre2.md)
- [帶百分比的設定檔切換 - 示例](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
- [SMS 指令更新](../RemoteFeatures/SMSCommands.md)
- [問題排除 Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- [問題排除 - 連結集合](../GettingHelp/GeneralTroubleshooting.md)
- 更新 - 供有經驗用戶的快速指導
- 文件 - 更新[編輯](#edit-the-docs-code-syntax)和[翻譯](#translations-translation-of-the-documentation).

## 2019年10月

- [AAPS version 2.5](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-250) updates (especially on [update page](../Maintenance/UpdateToNewVersion.md))
- [Accu-Chek Insight - 日誌選項](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [COB 計算在單獨頁面上](../DailyLifeWithAaps/CobCalculation.md)
- [COB - 錯誤 COB 值偵測](#CobCalculation-detection-of-wrong-cob-values)
- [Dexcom G6 特定問題排除](#DexcomG6-troubleshooting-g6)
- [2.5 版的目標更新](../SettingUpAaps/CompletingTheObjectives.md)
- [偏好設定更新](../SettingUpAaps/Preferences.md)
- [SGLT-2 抑制劑 - 閉環時請勿使用](#PreparingForAaps-no-sglt-2-inhibitors)
- [SMS 指令問題排除](#SMSCommands-troubleshooting)
- [xDrip - 更新 G6 傳感器更換](#xdrip-replace-transmitter)

## 2019年9月

- [Automate](../DailyLifeWithAaps/Automations.md)
- [注射計算器](#AapsScreens-wrong-cob-detection) - 緩慢的碳水吸收
- [Nightscout 安全性](#Nightscout-security-considerations)
- [設定檔時差](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile)（更多詳細資訊）
- [遠端監控](../RemoteFeatures/RemoteMonitoring.md)
- [什麼是閉環系統？](#Introduction-what-does-hybrid-closed-loop-mean)

## 2019年8月

- Dexcom G6 修補應用的區域設置
- [Dexcom G6 新發射器](#xdrip-connect-g6-transmitter-for-the-first-time)（"火蟲" / 8G...）
- 我需要什麼？ - 新結構與附加資訊
- 新結構
