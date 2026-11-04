- - -
tocdepth: 1
- - -

# 문서 업데이트 및 변경 사항

## 2026년 10월

- [AAPS Builder로 브라우저 빌드](#aaps-builder): 빌드 워크플로 버전 8. 이제 AAPS 개발자들이 [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder) 저장소에서 관리합니다. 설정이 한 단계 짧아졌습니다: [설정 페이지](#aaps-builder-setup)의 [1단계](#aaps-builder-step1)에서 비공개 저장소를 그 저장소의 복사본으로 만듭니다. 빌드 워크플로가 이미 들어 있으므로 더 이상 워크플로를 추가할 필요가 없습니다. 이제부터 빌드 단계는 자동으로 업데이트됩니다: 사용자의 저장소는 빌드할 때마다 AAPS 개발자들이 배포한 버전을 실행하며, 사용자가 바꿀 것은 없습니다 (자동 빌드는 여전히 없습니다). 빌드 자체는 바뀌지 않으며, 기존 저장소도 계속 작동합니다. 이 자동 업데이트를 받으려면 [AAPS 업데이트](#aaps-builder-updates)의 설명대로 `.github/workflows/build.yml`을 한 번 교체하십시오. `KEYSTORE_SET` secret은 그대로 둡니다. 선택 사항인 [Google Drive 단계](#aaps-builder-google-drive)가 이제 휴대폰이나 컴퓨터의 설정 페이지에서 바로 작동합니다: 준비 파일이 필요 없습니다 @psonnera
- [스마트워치와 AAPS](#watches-external-companion-apps): **Samsung Tizen** 섹션이 **외부 연동 앱**으로 바뀌고, **AAPS** 브로드캐스트를 읽는 앱(WatchDrip+, GlucoDataHandler, G-Watch)을 소개합니다. [WatchDrip+](#watches-xiaomi-amazfit) 0.5 이상은 xDrip+ 없이 **AAPS**에 직접 연결됩니다: 설정 단계를 추가했고, [구성](#external-companion-apps), [Wear OS](../WearOS/WearOsSmartwatch.md), [원격 모니터링](../RemoteFeatures/RemoteMonitoring.md)에도 요약했습니다. Bluejay 워치: GTS 단종, 현재 모델 업데이트 @psonnera
- [AAPS Builder로 브라우저 빌드](#aaps-builder): 빌드 워크플로 버전 6. 이제 빌드 단계는 검토된 정확한 버전의 GitHub 도구와 빌드 머신을 사용합니다. 그리고 `KEYSTORE_SET` secret에 잘못된 텍스트를 붙여 넣으면 빌드가 이를 분명하게 설명합니다. [설정 페이지](#aaps-builder-setup)가 이제 문서의 일부이며 번역됩니다. GitHub 사용자 이름을 확인하고, secret, "Page not found"(404), GitHub 앱에 대한 도움말이 더 분명해졌습니다. `.github/workflows/build.yml`에 버전 5 이하로 적혀 있으면 [AAPS 업데이트](#aaps-builder-updates)의 설명대로 이 파일을 교체하십시오 @psonnera
- [AAPS 웹 설치 프로그램](#web-installer): 이제 다른 페이지처럼 번역되는 문서 페이지입니다. 이전 주소도 계속 작동합니다 @psonnera
- [AAPS Builder로 브라우저 빌드](#aaps-builder): 빌드 워크플로 버전 3에서 `aapsclient3Release` 변형(**AAPSClient3**, AAPS 4.0 이상)이 추가되었습니다. 이를 빌드하려면 [AAPS 업데이트](#aaps-builder-updates)의 설명대로 `.github/workflows/build.yml`을 교체하십시오 @psonnera
- [Dexcom G7](../CompatibleCgms/DexcomG7.md): 새로 설치하면 더 이상 작동하지 않는 패치된 Dexcom G7 앱(DiaKEM) 삭제 @psonnera
- [AAPS Builder로 브라우저 빌드](#aaps-builder): 빌드 워크플로 버전 2. 자동 주간 빌드가 없어졌습니다 (일정 없음, `AUTO_BUILD` / `AUTO_VARIANT` 변수 없음, `built/…` 태그 없음): 모든 빌드는 사용자가 직접 시작하고 버전과 변형도 사용자가 선택합니다. 워크플로는 사용자의 저장소에 대해 읽기 권한만 가집니다. `.github/workflows/build.yml`에 버전 1로 적혀 있으면 [AAPS 업데이트](#aaps-builder-updates)의 설명대로 이 파일을 교체하십시오. 모든 단계에 스크린샷 추가 @psonnera
- [AAPS Builder로 브라우저 빌드](#aaps-builder): 빌드 워크플로가 이제 이 문서의 일부입니다. 템플릿 저장소가 없습니다: 비어 있는 비공개 저장소를 만들고 설정 페이지에서 워크플로를 추가합니다 (새 2단계). 워크플로는 더 이상 외부 저장소에서 업데이트를 확인하지 않습니다. 이전 템플릿으로 저장소를 만들었다면 [AAPS 업데이트](#aaps-builder-updates)의 설명대로 `.github/workflows/build.yml`을 설정 페이지의 워크플로로 교체하십시오 @psonnera
- 새 페이지 [AAPS Builder로 브라우저 빌드](#aaps-builder): 이 사이트에 있는 설정 페이지로 Android 휴대폰에서 AAPS를 빌드합니다. 자동 주간 빌드가 있고 준비 파일이 필요 없습니다. 이 페이지가 브라우저 빌드의 Android 설명을 대신합니다 (File Manager Plus 페이지 삭제). AAPS Builder 제작 @dio99, 문서 @psonnera

## 2026년 8월

- [AAPS 전송 및 설치](../SettingUpAaps/TransferringAndInstallingAaps.md): *Android 개발자 인증* 페이지를 설치 안내에 합치고, [웹 설치 프로그램](#android-developer-verification-web)(브라우저에서 바로 APK 설치, 인증 대상 아님)과 무선 ADB를 추가했습니다 @psonnera

## 2026년 7월

- [APS와 AAPS 소개](../Getting-Started/Introduction.md): APS 섹션의 정확성 검토. Frontiers 인용 제목과 링크를 고치고, 현재 시장 안내가 아니라 배경 자료로 소개했습니다. 이중 호르몬과 완전 폐쇄 루프에 대한 설명을 업데이트하고, 컨트롤러가 항상 휴대폰 앱은 아니라는 점을 분명히 했습니다. 상업 브랜드 이름과 출처 없는 사용자 수를 삭제하고, OS-AID를 *Open-Source Automated Insulin Delivery*로 고쳤습니다 @psonnera
- [용어](../UsefulLinks/Glossary.md): **AID**, **FCL**, **HCL**, **OS-AID** 항목을 추가하고, **APS**와 **Closed Loop**에서 서로 링크했습니다 @psonnera
- 새 페이지 [Android 개발자 인증](#android-developer-verification): 곧 시행될 Google의 인증 요건이 직접 빌드한 앱의 설치에 미치는 영향과 무료 설치 방법 (ADB, 고급 절차, 제한된 배포 계정) @psonnera

## 2026년 6월

- [브라우저 빌드](#browser-build): 먼저 결정하는 여러 페이지 흐름으로 재구성 (Fork → 키 저장소 옵션 1/옵션 2, 기기마다 별도 페이지 → Google Drive → 빌드 → 문제 해결). 중첩 탭을 없애고 File Manager Plus 설치를 눈에 잘 띄는 단계로 만듦 @psonnera
- [APS와 AAPS 소개](../Getting-Started/Introduction.md): 용어를 *DIY*에서 *OS-AID*(Open-Source Automated Insulin Delivery)로 바꾸고, Trio와 Stelo를 추가하고, 펌프/CGM 호환 표를 업데이트했습니다 @tmhastings

## 2026년 3월

- [명령줄 빌드 옵션 추가](../SettingUpAaps/CLIBuild.md) @je-l
- *Computer Build*의 이름을 *Android Studio Build*로 변경. URL을 위해 파일 이름을 그대로 유지.

## 2025년 1월

- [3.4](#version3400) 릴리스 및 문서 업데이트 모음 (마법사, 컴퓨터 빌드 버전, 구성)
- CGM 목록 업데이트. Dexcom G5, Tomato, Glimp 삭제.
- [위치 순환 UI](#Aapsscreens-site-rotation)
- [실행 모드](#AapsScreens-running-mode)
- [Autotune](../AdvancedOptions/Autotune.md)

## 2025년 12월

- @robrub의 [프로파일 조정](../GettingHelp/ProfileTuning.md)

## 2025년 10월

- DiaKEM: 서버 업그레이드 후 새로 설치하면 작동하지 않음 @psonnera
- Libre 2 패치된 앱 삭제 (더 이상 쓰이지 않음): 새 센서와 작동하지 않음 @psonnera
- Omnipod DASH 페이지 다시 작성 @XiTatiON

## 2025년 8월

- 버전과 Android Studio 사전 요구 사항 업데이트
- [3.3.2.1](#version3321) 릴리스 추가, Android 16 관련 내용 삭제 (수정됨)
- [브라우저 빌드](#browser-build) 추가 @Angus

## 2025년 5월

- [3.2.0.4 업그레이드 페이지](#update-aaps-3204) 추가 @psonnera

## 2025년 1월

- 빠른 마법사 [길게 누르기 기능](#Preferences-quick-wizard) @emilise
- [DynamicISF](../DailyLifeWithAaps/DynamicISF.md) 페이지 다시 작성 @emilise

## 2024년 12월

- [3.3 버전](#version3300) 문서 @emilise

## 2024년 11월

- [AAPS 프로파일](../SettingUpAaps/YourAapsProfile.md) 업데이트 @emilise
- [Wear OS 스마트워치](../WearOS/BuildingAapsWearOS.md) 내용 재구성 @psonnera

## 2024년 10월

- 여러 페이지 업데이트:
  - [얼마나 걸립니까?](#preparing-how-long-will-it-take), [구성 요소 개요](../Getting-Started/ComponentOverview.md), [목표 완료하기](../SettingUpAaps/CompletingTheObjectives.md), [AAPS 프로파일](../SettingUpAaps/YourAapsProfile.md), [구성](../SettingUpAaps/ConfigBuilder.md) 및 [설정](../SettingUpAaps/Preferences.md), [AAPS 화면](../DailyLifeWithAaps/AapsScreens.md) @emilise
  - [COB 계산](../DailyLifeWithAaps/CobCalculation.md), [동적 ISF](../DailyLifeWithAaps/DynamicISF.md) @UnderCliffe10
- [Android Studio Ladybug 빌드 방법](../SettingUpAaps/BuildingAaps.md) @tanja
- 기술 작업 (문서 배포 과정, 파일 구성 등) @psonnera & @emilise

***

2022년 3월부터 2024년 9월까지의 이력 없음

3.2 개편과 함께 더 이상 필요 없는 일부 정보가 삭제되었습니다. 이전 문서 버전에서 찾을 수 있습니다:

AAPS 3.1 문서는 [여기](https://androidaps.readthedocs.io/en/3.1/index.html)에 있습니다.

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
