- - -
tocdepth: 1
- - -

# 文件更新與變更

## 2026年10月

- [使用 AAPS Builder 透過瀏覽器建置](#aaps-builder)：建置流程第 8 版，現由 AAPS 開發人員在 [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder) 儲存庫中維護。設定流程少了一個步驟：[設定頁面](#aaps-builder-setup)的[步驟 1](#aaps-builder-step1)會將該儲存庫複製為您的私人儲存庫，並預先加入建置流程，因此不需要再自行新增流程。從現在起，每次建置時，您的儲存庫都會執行 AAPS 開發人員發布的最新建置流程版本，無須您手動變更（但仍不會自動建置）。建置本身沒有變更，您現有的儲存庫也會繼續正常運作。如要取得這些自動更新，請依照[更新 AAPS](#aaps-builder-updates)中的說明，替換一次 `.github/workflows/build.yml`。您的 `KEYSTORE_SET` 密鑰不需要變更。現在可以直接在設定頁面透過手機或電腦使用選擇性的 [Google Drive 步驟](#aaps-builder-google-drive)，不需要準備檔案 @psonnera
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

- [3.4](#version3400) 版發佈與文件更新彙總（嚮導、電腦建置版本、組態建置工具）
- CGM 清單更新。已移除 Dexcom G5、Tomato、Glimp。
- [部位輪替介面](#Aapsscreens-site-rotation)
- [運行模式](#AapsScreens-running-mode)
- [自動調整](../AdvancedOptions/Autotune.md)

## 2025年12月

- [設定檔微調](../GettingHelp/ProfileTuning.md)（由 @robrub 提供）

## 2025年10月

- DiaKEM：伺服器升級後，新安裝無法運作 @psonnera
- 移除了 Libre 2 修補版應用程式（已淘汰）： 該版本無法與新傳感器搭配使用 @psonnera
- 重新設計 Omnipod DASH 頁面 @XiTatiON

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

```{dropdown} Older updates (2019 to 2022)
**February 2022**

- [BG quality warning sign](#aaps-screens-bg-warning-sign) @tanja
- [Medtronic pump update](../CompatiblePumps/MedtronicPump.md) @dottedfingertips
- [Necessary checks after update to AAPS 3.0](Update3_0.md) @tanja
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) @Freloner @robertrub @vanelsberg
- Update docs for AAPS 3.0 (partly) @xJoe
- [Wear OS for AAPS 3.0](../WearOS/WearOsSmartwatch.md) @peterleimbach

**January 2022**

- [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md) - update @tanja

**December 2021**

- [Building the APK](../SettingUpAaps/BuildingAaps.md) - update Android Studio Arctic Fox | 2020.3.1 @tanja
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) information added @MilosKozak

**November 2021**

- Best practices for calibrating a Libre 2 sensor
- [ISF](../UsefulLinks/FAQ.md) reformulation of impact
- Update [troubleshooting Android studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- Removed patched [Dexcom](../CompatibleCgms/DexcomG6.md) app as it is obsolete

**October 2021**

- [Release notes](ReleaseNotes.md) AAPS 3.0 beta

**September 2021**

- Recommended computer specification to [build AAPS app](#Building-APK-recommended-specification-of-computer-for-building-apk-file)

**June 2021**

- [Watchface sideload](../WearOS/WearOsSmartwatch.md)

**April 2021**

- List of [communication devices](#CompatiblePumps-additional-communication-device) for Omnipod and Medtronic pumps
- AAPS predictions in [Nightscout](#Nightscout-manual-nightscout-setup)

**March 2021**

- Dev communication moved from gitter to [discord](https://discord.gg/4fQUWHZ4Mw)

**February 2021**

- New navigation bar and [language switch](../NavigateDoc/ChangeLanguageVersion.md)

**January 2021**

- [Action tab](#screens-action-tab) - more details on page 'AAPS screens'
- Dexcom G6 with [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)
- Libre smart reader [battery level](#screens-sensor-level-battery)
- [Objectives](#objectives-objective3) - new questions
- Other [new AAPS 2.8.0 functions](#Releasenotes-version-2-8-0)

**December 2020**

- [Libre 2](../CompatibleCgms/Libre2.md) - patched app does not work with US sensors
- [OpenAPS hard-coded limits](#Open-APS-features-overview-of-hard-coded-limits)
- Sony Smartwatch 3 Manual Installation of Google Play Service

**October 2020**

- Accu-Chek Combo - update [time adjustment daylight savings time](#time-adjustment-daylight-savings-time-dst)
- Accu-Chek Insight - Option to [upload absolute values](#Accu-Chek-Insight-Pump-settings-in-aaps)
- Logs - more details about [folder location](../GettingHelp/AccessingLogFiles.md)
- Omnipod Eros - status update
- [SMS commands - time sync](../RemoteFeatures/SMSCommands.md)

**September 2020**

- Major update for new AAPS version 2.7
- For details see the [release notes](#Releasenotes-version-2-7-0)

**June 2020**

- Libre 2 - more details patched Libre Link app & use of Bluetooth transmitters
- [Time zone traveling](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) with Libre 2

**May 2020**

- [Extended bolus only for Dana + Insight pumps](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Insight deactivate vibration](#Accu-Chek-Insight-Pump-vibration) (firmware 3.x only)
- [Minimal request rate](#Preferences-minimal-request-change) to reduce number of notifications in open loop mode
- Patched Libre Link app - check if correctly patched
- [Prediction lines](#aaps-screens-prediction-lines) - more details

**April 2020**

- Backdate insulin (i.e. given by syringe)
- Android 6 support will be discontinued in next master version

**March 2020**

- [Build apk with Android Studio 3.6.1](../SettingUpAaps/BuildingAaps.md)
- [DanaRS with firmware v3](../CompatiblePumps/DanaRS-Insulin-Pump.md) **cannot currently be used with AAPS!**
- [Extended bolus and switch to open loop](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Update apk with Android Studio 3.6.1](../Maintenance/UpdateToNewVersion.md)

**February 2020**

- Automation caveats
- [Autosens](#Open-APS-features-autosens) - short explanation
- Careportal alternatives
- [Extended bolus](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) feature - closed loop will be disabled
- New [Local Profile plugin](../SettingUpAaps/ConfigBuilder.md)
- Sample Setup - update Dexcom G6
- [Version 2.6.0](#Releasenotes-version-2-6-0) - major new features
- [Wear complications](../WearOS/WearOsSmartwatch.md)

**January 2020**

- [Manual carb correction](#screens-bolus-carbs) for faulty carb entries
- [Image size](../SupportingAaps/HowToEditTheDocs.md) when editing docs

**December 2019**

- [Android Auto](../RemoteFeatures/AndroidAuto.md) - setup with screenshots
- [Accu-Chek Insight & Autotune](#Accu-Chek-Insight-Pump-settings-in-aaps) - workaround for usage
- [Glimp](#Config-Builder-bg-source) - version 4.15.57 and newer supported
- [Watchfaces](../WearOS/WearOsSmartwatch.md) - major update, way more details
- [Watchface complications](#Watchfaces-complications) - use your favorite watchface with AAPS data

**November 2019**

- [Automation - deactivate when disabling loop](../DailyLifeWithAaps/Automations.md)
- [Dexcom G6 replace transmitter update](#xdrip-replace-transmitter)
- [Extended bolus - why they do not work in a loop context](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [FAQ - sports](#FAQ-sports)
- [Homescreen - lines on graph](#aaps-screens-main-graph)
- [Insight - Disable absolute values in NS Client](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Medtronic pump - possible double entries](../CompatiblePumps/MedtronicPump.md)
- [New Freestyle Libre 2 tutorial](../CompatibleCgms/Libre2.md)
- [Profile switch with percentage - example](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
- [SMS commands update](../RemoteFeatures/SMSCommands.md)
- [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- [Troubleshooting - link collection](../GettingHelp/GeneralTroubleshooting.md)
- Update - quick walk-through for experienced users
- Docs - update [edit](#edit-the-docs-code-syntax) and [translation](#translations-translation-of-the-documentation).

**October 2019**

- [AAPS version 2.5](#Releasenotes-version-2-5-0) updates (especially on [update page](../Maintenance/UpdateToNewVersion.md))
- [Accu-Chek Insight - log options](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [COB calculation on separate page](../DailyLifeWithAaps/CobCalculation.md)
- [COB - wrong COB value detection](#CobCalculation-detection-of-wrong-cob-values)
- [Dexcom G6 specific troubleshooting](#DexcomG6-troubleshooting-g6)
- [Objectives update version 2.5](../SettingUpAaps/CompletingTheObjectives.md)
- [Preferences update](../SettingUpAaps/Preferences.md)
- [SGLT-2 inhibitors - do not use when looping](#PreparingForAaps-no-sglt-2-inhibitors)
- [SMS Commands Troubleshooting](#SMSCommands-troubleshooting)
- [xDrip - update G6 transmitter replacement](#xdrip-replace-transmitter)

**September 2019**

- [Automate](../DailyLifeWithAaps/Automations.md)
- [Bolus calculator](#AapsScreens-wrong-cob-detection) - slow carb absorption
- [Nightscout security](#Nightscout-security-considerations)
- [Profile timeshift](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) (more details)
- [Remote monitoring](../RemoteFeatures/RemoteMonitoring.md)
- [What is a closed loop system?](#Introduction-what-does-hybrid-closed-loop-mean)

**August 2019**

- Dexcom G6 patched app region
- [Dexcom G6 new transmitter](#xdrip-connect-g6-transmitter-for-the-first-time) ("firefly" / 8G...)
- What do I need? - new structure & additional information
- New structure
```
