(generaltroubleshooting)=

# Troubleshooting

**무언가 작동하지 않으면 여기에서 시작하십시오.** 문제 해결 정보는 문서의 여러 페이지에 나뉘어 있습니다. 이 페이지는 그 정보를 한곳에 모읍니다. 가장 흔한 문제를 해결하도록 돕는 링크를 주제별로 정리한 모음입니다.

아래에서 답을 찾지 못하면 다음도 확인하십시오:

* 자주 묻는 질문의 답은 [FAQ](../UsefulLinks/FAQ.md),
* 루프는 작동하지만 혈당 조절을 개선해야 한다면 [프로파일 조정 가이드](ProfileTuning.md).

```{admonition} Still stuck?
:class: tip
어떤 링크로도 문제가 해결되지 않으면 [어디에서 도움을 받을 수 있습니까?](WhereCanIGetHelp.md)를 보고 커뮤니티(Facebook, Discord)에 질문하거나, [로그파일](AccessingLogFiles.md)을 개발자에게 보내십시오.
```

---

(generaltroubleshooting-aaps-app)=

## AAPS 앱

### 빌드와 업데이트

* 빌드가 실패하면 [빌드가 실패하는 경우](#building-aaps-troubleshooting)를 보십시오. 각 빌드 방법의 문제 해결 섹션이 정리되어 있습니다:
  * [AAPS Builder](#aaps-builder-troubleshooting)
  * [브라우저 빌드](#aaps-ci-troubleshooting)
  * [Android Studio](TroubleshootingAndroidStudio.md)
* 키 저장소를 잃어버렸거나 새 키 저장소를 쓰는 경우: [AAPS 재설치](#reinstall-aaps)
* **AAPS** 업데이트: [AAPS Builder 사용](#aaps-builder-updates), [브라우저 빌드(fork) 사용](#update-browser-build-troubleshooting), [Android Studio 사용](#update-computer-build-troubleshooting)

### 설치

* [Google Play 프로텍트 경고](#transferring-installing-play-protect-warning): 앱이 안전하지 않다고 표시됩니다.
* 확인되지 않은 개발자에 대한 메시지와 함께 설치가 **차단됨**: 무료 설치 방법은 [Android 개발자 인증](#android-developer-verification)을 보십시오.

### 설정

* [프로파일: "기저 주입량이 현재 펌프와 맞지 않아 활성화할 수 없습니다"](#your-aaps-profile-basal-not-compatible)
* [펌프: "다른 펌프에서 데이터가 오고 있습니다"](#config-builder-wrong-pump-data)
* [Nightscout 클라이언트](TroubleshootingNsClient.md)
* 시작할 때 **"AAPS 설정을 읽을 수 없습니다"**: 설정은 Android가 **AAPS**를 위해 보관하는 키로 암호화되어 있는데, 예를 들어 휴대폰의 키 저장소가 초기화된 후에는 그 키로 설정을 더 이상 열 수 없습니다. 이 화면이 표시되는 동안 **AAPS**는 실행되지 않으며 펌프를 제어하지 않습니다. **재시도**를 누르십시오: **AAPS**를 닫고 다시 시작합니다. 그래도 해결되지 않으면 휴대폰을 다시 시작하십시오. **새로 시작**은 다른 방법이 모두 소용없을 때만 사용하십시오: 읽을 수 없는 설정 파일을 따로 보관하고(이름을 바꾸어 보관함) 빈 설정으로 **AAPS**를 시작합니다. 그런 다음 마지막 [설정 내보내기](../Maintenance/ExportImportSettings.md) 파일을 가져오십시오.

### 사용

* [잘못된 탄수화물 값 (느린 탄수화물 흡수)](#CobCalculation-detection-of-wrong-cob-values)
* [자동화](#automations-troubleshooting)
* [완전 폐쇄 루프](#full-closed-loop-troubleshooting)

---

(generaltroubleshooting-bluetooth-related-issues)=


## 블루투스 관련 문제

블루투스 연결의 알려진 문제, 펌프/Pod 연결 끊김, 활성화 및 연결 문제는 [블루투스 문제 해결](../GettingHelp/BluetoothTroubleshooting.md)을 참조하십시오.

---

(generaltroubleshooting-android-related-issues)=

## Android 관련 문제

### 배터리 최적화

**AAPS**는 휴대폰에 맞는 설정을 찾도록 도울 수 있습니다: **메뉴** (☰) > **정보**를 열고 **앱이 종료되지 않게 하려면?**을 누르십시오. [Don't kill my app](https://dontkillmyapp.com/) 사이트에서 휴대폰 제조사에 맞는 안내가 열립니다. [설정 마법사](#setup-wizard-bluetooth-battery-optimisation)도 **AAPS**와 Bluetooth의 배터리 최적화를 끄도록 요청합니다.

Android에는 기본으로 켜져 있는 배터리 절약 설정이 있습니다. 이 설정은 시스템 작동에 꼭 필요하지 않은 앱을 자동으로 일시 중지합니다. 항상 실행될 필요가 없는 앱이 배터리를 덜 쓰게 하기 위한 것입니다.

이 설정이 켜져 있으면 **AAPS**와 **xDrip** 같은 다른 보조 앱에 문제가 생길 가능성이 매우 높습니다.

**AAPS**와 다른 보조 앱이 항상 활성 상태로 남도록 배터리 최적화를 꺼 두는 것이 중요합니다.

휴대폰 모델과 제조사에 따라 이 설정을 꺼야 하는 위치가 여러 곳일 수 있습니다.

***참고:** 휴대폰에 이 옵션이 있으면 아래 단계에 따라 Bluetooth 서비스의 배터리 최적화를 끄십시오. 같은 단계로 **AAPS**와 다른 앱의 배터리 최적화도 끌 수 있습니다. 다만 스크린샷은 Bluetooth 서비스에 대해서만 보여 줍니다.*

#### Pixel 휴대폰 (기본 Android)

* Android 설정으로 가서 "Apps"(애플리케이션)를 선택하십시오.

  ![Android 설정¦앱](../images/troubleshooting/pixel/01_androidsettings.png)

* "See all apps"(모든 앱 보기)를 선택하십시오

  ![모든 앱 보기](../images/troubleshooting/pixel/02_apps.png)

* 오른쪽 메뉴에서 "Show system"(시스템 앱 표시)을 선택하십시오.

  ![시스템 앱 표시](../images/troubleshooting/pixel/03_allapps.png)

* 이제 "Bluetooth" 앱을 찾아서 선택하십시오.

  ![Bluetooth 앱](../images/troubleshooting/pixel/03_bluetooth.png)

* "App battery usage"(앱 배터리 사용량)를 누르고 "Unrestricted"(제한 없음)를 선택하십시오(일부 이전 Android 버전에서는 "Not optimized"(최적화되지 않음)라고 합니다).

  ![BT 배터리 최적화](../images/troubleshooting/pixel/04_btunrestricted.png)


#### Samsung 휴대폰

* Android 설정으로 가서 "Apps"(애플리케이션)를 선택하십시오

* 정렬 방식을 바꾸는 것으로 보이는 아이콘(1)에서 "Show system apps"(시스템 앱 표시)(2)를 선택하십시오.

  ![앱 필터](../images/troubleshooting/samsung/Samsung01_Apps.png)

  ![시스템 앱 표시](../images/troubleshooting/samsung/Samsung02_ShowSystemApps.png)

* 이제 Bluetooth 앱을 찾아서 선택하여 설정을 여십시오.

  ![Bluetooth 앱](../images/troubleshooting/samsung/Samsung03_BtApp.png)

* "battery"(배터리)를 선택하십시오.

  ![Battery](../images/troubleshooting/samsung/Samsung04_Battery.png)

* "Unrestricted"(제한 없음)로 설정하십시오(일부 이전 Android 버전에서는 "Not optimized"(최적화되지 않음)라고 합니다).

  ![제한 없음](../images/troubleshooting/samsung/Samsung05_NotOptimized.png)

#### Huawei 휴대폰

[Huawei Bluetooth 및 배터리 최적화](../CompatiblePhones/Huawei.md) 가이드를 보십시오

---

(generaltroubleshooting-cgm)=

## 연속 혈당 측정기(CGM)

CGM의 알려진 문제와 해결 방법에 대한 유용한 링크입니다.

* [일반](#general-cgm-troubleshooting)
* [Dexcom G6](#DexcomG6-troubleshooting-g6)
* [Minimal Looper를 사용하는 Libre 2](#minimallooper-troubleshooting)
* [Libre 3](#libre3-experiences-and-troubleshooting)
* [xDrip - CGM 데이터 없음](#xdrip-identify-receiver)
* [xDrip - Dexcom 문제 해결](#xdrip-troubleshooting-dexcom-g5-g6-and-xdrip)

---

(generaltroubleshooting-pumps)=

## Pumps

펌프의 알려진 문제와 해결 방법에 대한 유용한 링크입니다

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

## 스마트폰

휴대폰의 알려진 문제와 해결 방법에 대한 유용한 링크입니다

* [테스트된 휴대폰과 장치 구성 목록](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true)
* [Jelly](../CompatiblePhones/Jelly.md)
* [Huawei Bluetooth 및 배터리 최적화](../CompatiblePhones/Huawei.md)

---

(generaltroubleshooting-remote-control)=

## 원격 제어

* [AAPSClient와 원격 제어 (페어링, 명령이 수신되지 않음)](#client-master-control-troubleshooting)
* ['Nightscout 액세스 토큰' 문제](#remotecontrol-nightscout-access-token)
* [SMS 명령](#SMSCommands-troubleshooting)
* [Android Auto](#android-auto-troubleshooting)

---

(generaltroubleshooting-smartwatches)=

## 스마트워치

스마트워치의 알려진 문제와 해결 방법에 대한 유용한 링크입니다

* [워치 앱 문제 해결](#Watchfaces-troubleshooting-the-wear-app)
* [워치와 휴대폰이 통신하지 않음](#wear-os-watch-phone-communication)
* [Wear OS 5](#wear-os-5-troubleshooting)
* [워치 앱 빌드](#building-aaps-wear-os-troubleshooting)
