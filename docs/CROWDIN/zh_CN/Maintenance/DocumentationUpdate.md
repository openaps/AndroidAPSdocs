# 文档更新与变更

## 2025年1月

- 快速向导[长按功能](#Preferences-quick-wizard) 由@emilise添加
- [DynamicISF](../DailyLifeWithAaps/DynamicISF.md)页面已由@emilise重构

## 2024年12月

- [3.3 版本](#version3300)的文档 @emilise

## 2024年11月

- [您的AAPS个人资料](../SettingUpAaps/YourAapsProfile.md)更新 @emilise
- [Wear OS智能手表](../WearOS/BuildingAapsWearOS.md)内容重组 @psonnerat

## 2024年10月

- 多个页面更新：
  - [需要多长时间](#preparing-how-long-will-it-take)、[组件概览](../DailyLifeWithAaps/CobCalculation.md)、[完成目标](../SettingUpAaps/CompletingTheObjectives.md)、[您的AAPS个人资料](../SettingUpAaps/YourAapsProfile.md)、[配置构建器](../SettingUpAaps/ConfigBuilder.md)与[偏好设置](../SettingUpAaps/Preferences.md)、[AAPS屏幕](../DailyLifeWithAaps/AapsScreens.md) @emilise
  - [活性碳水化合物计算](../DailyLifeWithAaps/CobCalculation.md)、[动态ISF](../DailyLifeWithAaps/DynamicISF.md) @UnderCliffe10
- [Android Studio Ladybug的构建说明](../SettingUpAaps/BuildingAaps.md) @tanja
- 技术工作（文档部署流程、文件组织等）@psonnerat & @emilise

***

（注：缺失2022年3月至2024年9月的历史记录）

伴随3.2版本的重新设计，一些过时信息已被移除。 您可以在旧版文档中找到这些信息：

AAPS 3.1版文档[在此处](https://androidaps.readthedocs.io/en/3.1/index.html)可查阅。

***

## 2022年2月

- [血糖质量警告标志](#aaps-screens-bg-warning-sign) @tanja
- [美敦力泵更新](../CompatiblePumps/MedtronicPump.md) @dottedfingertips
- [更新至AAPS 3.0后的必要检查](Update3_0.md) @tanja
- [Omnipod Dash](../CompatiblePumps/OmnipodDASH.md) @Freloner @robertrub @vanelsberg
- AAPS 3.0文档部分更新 @xJoe
- [AAPS 3.0的Wear OS智能手表](../WearOS/WearOsSmartwatch.md) @peterleimbach

## 2022年1月

- [Android Studio故障排除](../GettingHelp/TroubleshootingAndroidStudio)更新 @tanja

## 2021年12月

- [构建APK](../SettingUpAaps/BuildingAaps.md)更新：Android Studio Arctic Fox | 2020.3.1 @tanja
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md)信息添加 @MilosKozak

## 2021年11月

- [Libre 2传感器](#Libre2-best-practices-for-calibrating-a-libre-2-sensor)的最佳校准实践
- [ISF](../UsefulLinks/FAQ.md)影响表述的修改
- 更新[Android Studio故障排除](../GettingHelp/TroubleshootingAndroidStudio)
- 移除已废弃的Dexcom补丁应用

## 2021年10月

- [发行说明](ReleaseNotes.md)AAPS 3.0 beta版

## 2021年9月

- [构建AAPS应用](#Building-APK-recommended-specification-of-computer-for-building-apk-file)的推荐电脑配置

## 2021年6月

- [智能手表表盘侧载](../WearOS/WearOsSmartwatch.md)

## 2021年4月

- Omnipod和Medtronic泵的[通讯设备](#CompatiblePumps-additional-communication-device)列表
- AAPS在[Nightscout](#Nightscout-manual-nightscout-setup)中的预测

## 2021年3月

- Dev communication moved from gitter to [discord](https://discord.gg/4fQUWHZ4Mw)

## February 2021

- New navigation bar and [language switch](../NavigateDoc/ChangeLanguage.md)

## January 2021

- [Action tab](#screens-action-tab) - more details on page 'AAPS screens'
- Dexcom G6 with [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)
- Libre smart reader [battery level](#screens-sensor-level-battery)
- [Objectives](#objectives-objective3) - new questions
- Other [new AAPS 2.8.0 functions](#Releasenotes-version-2-8-0)

## December 2020

- [Libre 2](../CompatibleCgms/Libre2.md) - patched app does not work with US sensors
- [OpenAPS hard-coded limits](#Open-APS-features-overview-of-hard-coded-limits)
- Sony Smartwatch 3 Manual Installation of Google Play Service

## October 2020

- Accu-Chek Combo - update [time adjustment daylight savings time](#time-adjustment-daylight-savings-time-dst)
- Accu-Chek Insight - Option to [upload absolute values](#Accu-Chek-Insight-Pump-settings-in-aaps)
- Logs - more details about [folder location](../GettingHelp/AccessingLogFiles.md)
- Omnipod Eros - status update
- [SMS commands - time sync](../RemoteFeatures/SMSCommands.md)

## September 2020

- Major update for new AAPS version 2.7
- For details see `release notes <Releasenotes-version-2-7-0>`

## June 2020

- [Libre 2](../CompatibleCgms/Libre2.md) - more details patched Libre Link app & use of bluetooth transmitters
- [Time zone travelling](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) with Libre 2

## May 2020

- [Extended bolus only for Dana + Insight pumps](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Insight deactivate vibration](#Accu-Chek-Insight-Pump-vibration) (firmware 3.x only)
- [Minimal request rate](#Preferences-minimal-request-change) to reduce number of notifications in open loop mode
- [Patched Libre Link app](#libre2-patched-librelink-app-with-xdrip) - check if correctly patched
- [Prediction lines](#aaps-screens-prediction-lines) - more details

## April 2020

- Backdate insulin (i.e. given by syringe)
- Android 6 support will be discontinued in next master version

## March 2020

- [Build apk with Android Studio 3.6.1](../SettingUpAaps/BuildingAaps.md)
- [DanaRS with firmware v3](../CompatiblePumps/DanaRS-Insulin-Pump.md) **cannot currently be used with AAPS!**
- [Extended bolus and switch to open loop](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Update apk with Android Studio 3.6.1](../Maintenance/UpdateToNewVersion)

## February 2020

- Automation caveats
- [Autosens](#Open-APS-features-autosens) - short explanation
- Careportal alternatives
- [Extended bolus](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) feature - closed loop will be disabled
- New [Local Profile plugin](../SettingUpAaps/ConfigBuilder.md)
- Sample Setup - update Dexcom G6
- [Version 2.6.0](#Releasenotes-version-2-6-0) - major new features
- [Wear complications](../WearOS/WearOsSmartwatch.md)

## January 2020

- [Manual carb correction](#screens-bolus-carbs) for faulty carb entries
- [Image size](../SupportingAaps/HowToEditTheDocs.md) when editing docs

## December 2019

- [Android auto](../RemoteFeatures/AndroidAuto.md) - setup with screenshots
- [Accu-Chek Insight & Autotune](#Accu-Chek-Insight-Pump-settings-in-aaps) - workaround for usage
- [Glimp](#Config-Builder-bg-source) - version 4.15.57 and newer supported
- [Watchfaces](../WearOS/WearOsSmartwatch.md) - major update, way more details
- [Watchface complications](#Watchfaces-complications) - use your favorite watchface with AAPS data

## November 2019

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
- [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio)
- [Troubleshooting - link collection](../GettingHelp/GeneralTroubleshooting.md)
- Update - quick walk-through for experienced users
- Docs - update [edit](#edit-the-docs-code-syntax) and [translation](#translations-translation-of-the-documentation).

## October 2019

- [AAPS version 2.5](#Releasenotes-version-2-5-0) updates (especially on [update page](../Maintenance/UpdateToNewVersion.md))
- [AccuChek Insight - log options](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [COB calculation on separate page](../DailyLifeWithAaps/CobCalculation.md)
- [COB - wrong COB value detection](#CobCalculation-detection-of-wrong-cob-values)
- [Dexcom G6 specific troubleshooting](#DexcomG6-troubleshooting-g6)
- [Objectives update version 2.5](../SettingUpAaps/CompletingTheObjectives.md)
- [Preferences update](../SettingUpAaps/Preferences.md)
- [SGLT-2 inhibitors - do not use when looping](#PreparingForAaps-no-sglt-2-inhibitors)
- [SMS Commands Troubleshooting](#SMSCommands-troubleshooting)
- [xDrip - update G6 transmitter replacement](#xdrip-replace-transmitter)

## September 2019

- [Automate](../DailyLifeWithAaps/Automations.md)
- [Bolus calculator](#AapsScreens-wrong-cob-detection) - slow carb absorption
- [Nightscout security](#Nightscout-security-considerations)
- [Profile timeshift](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) (more details)
- [Remote monitoring](../RemoteFeatures/RemoteMonitoring.md)
- [What is a closed loop system?](#Introduction-what-does-hybrid-closed-loop-mean)

## August 2019

- Dexcom G6 patched app region
- [Dexcom G6 new transmitter](#xdrip-connect-g6-transmitter-for-the-first-time) ("firefly" / 8G...)
- What do I need? - new structure & additional information
- New structure
