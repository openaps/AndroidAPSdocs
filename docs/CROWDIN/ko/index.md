# AAPS 문서에 오신 것을 환영합니다

![이미지](./images/basic-outline-of-AAPS.png)

```{admonition} Latest Release
:class: note

2026년 10월 31일: 버전 4.0.0이 출시되었습니다. [릴리스 노트](#latestrelease)에서 새로운 내용을 확인하고, [업데이트 안내](./Maintenance/UpdateToNewVersion.md)에 따라 업데이트하십시오.

```

Android APS (**AAPS**)는 인슐린 의존성 당뇨병을 가진 사람들을 위한 오픈 소스 앱입니다. Android 스마트폰에서 실행되는 인공 췌장 시스템(APS)입니다. **AAPS**는 OpenAPS 소프트웨어 알고리즘을 사용하며, 실제 췌장처럼 자동 인슐린 주입으로 혈당 수치를 건강한 범위 안에 유지하는 것을 목표로 합니다. **AAPS**를 사용하려면 호환되는 장치 **세 가지**가 필요합니다: **(1)** Android 휴대폰, **(2)** 연속 혈당 측정기(CGM), **(3)** FDA/CE 승인 인슐린 펌프. 또한 **(4)** **AAPS**를 원격으로 제어하고, 데이터를 공유하고, 리포팅 서버에 저장하는 클라우드 서비스와 **(5)** 스마트워치를 추가할 수 있습니다.

이 문서는 **AAPS**를 설정하고 사용하는 방법을 설명합니다. **AAPS** 문서는 왼쪽 메뉴(및 편리한 **문서 검색** 기능)를 사용하거나, 이 페이지 하단의 [목차](#index-aaps-documentation-index)를 사용하여 탐색할 수 있습니다.

## AAPS 문서("The docs") 개요

**1) 시작하기** 섹션의 [APS와 AAPS 소개](Getting-Started/Introduction.md)에서는 인공 췌장 시스템(APS)이 무엇을 하도록 설계되었는지 일반적인 개념을 설명합니다. 루프의 일반적인 배경, **AAPS**를 개발한 이유, **AAPS**와 다른 시스템의 비교, 그리고 안전에 대해 설명합니다. 의료진과 **AAPS**에 대해 이야기하는 방법을 제안하고, **AAPS** 앱을 그냥 내려받지 않고 직접 빌드해야 하는 이유를 설명하며, 일반적인 **AAPS** 시스템의 연결 구성을 보여 줍니다. 또한 접근성과 **AAPS**로 도움을 받을 수 있는 사람에 대해서도 다룹니다.

[AAPS 시작 준비하기](./Getting-Started/PreparingForAaps.md)에서는 안전 고려 사항과, **AAPS**와 호환되는 휴대폰, CGM(연속 혈당 측정기), 인슐린 펌프에 대해 더 자세히 설명합니다. 앞으로 거칠 과정의 개요를 보여 주고, **AAPS**의 모든 기능을 사용하기까지 걸리는 대략적인 기간을 알려 줍니다. 이 섹션은 **AAPS** 시스템을 최대한 빠르고 효율적으로 갖출 수 있도록 기술적인 준비를 도와줍니다. 하위 섹션 [호환 CGM](./Getting-Started/CompatiblesCgms.md)에서는 CGM 설정을 최적화하는 방법과 가장 좋은 평활화 옵션을 설명합니다.

이제 과정을 충분히 이해했으므로 **AAPS** 루프를 갖추기 시작할 수 있습니다.

**2) 앱 빌드** 섹션에서는 **AAPS** 앱을 그냥 내려받지 않고 직접 빌드해야 하는 이유를 설명하고, [AAPS 빌드](./SettingUpAaps/BuildingAaps.md)(브라우저, Android Studio 또는 명령줄 사용) 과정과 빌드한 앱을 휴대폰으로 옮겨 설치하는 과정을 단계별로 안내합니다. 이 섹션은 빌드와 백업을 보관할 [AAPS 전용 Google 계정](./UsefulLinks/DedicatedGoogleAccountForAaps.md)을 만드는 선택 단계로 시작합니다. 또한 [Android 개발자 인증](#android-developer-verification)도 설명합니다. 이는 Google이 2026년 9월부터 적용하는 변경 사항으로, 직접 빌드한 앱을 설치하는 방법에 영향을 줍니다.

**3) 리포팅 서버 설정하기** 섹션에서는 데이터를 검토하고 공유할 수 있도록 리포팅 서버(Nightscout 또는 Tidepool)를 고르는 방법과 [리포팅 서버 설정하기](./SettingUpAaps/SettingUpTheReportingServer.md)를 다룹니다.

**4) [AAPS 구성하기](./SettingUpAaps/SetupWizard.md)** 섹션에서는 설정 마법사로 **AAPS** 앱을 설정하고, CGM 앱 및 실제 또는 가상 인슐린 펌프와 연결하고, **AAPS**를 리포팅 서버와 연결하는 방법을 다룹니다. 그다음 안전하고 신중하게 속도를 맞춘 단계별 과정을 통해 **AAPS**로 할 수 있는 모든 것을 배웁니다. 이 과정은 흔히 다음 "목표"라고 부르는 다음 단계로 넘어가기 전에, 본인(또는 자녀)이 모든 수준과 메뉴 구성을 충분히 익히고 편하게 다룰 수 있도록 합니다. 앱의 고급 옵션을 사용할 만큼 경험이 쌓일 때까지 이렇게 계속 진행합니다. 이 목표들은 **AAPS**의 기능을 단계적으로 더 많이 사용할 수 있게 하고, 개방 루프에서 폐쇄 루프로 전환하도록 특별히 설계되었습니다.

**5) [AAPS와 함께하는 일상](./DailyLifeWithAaps/AapsScreens.md)** 섹션에서는 **AAPS**를 사용하고 (원하는 대로 설정하는) 데 도움이 되는 **AAPS** 주요 기능을 다룹니다. 여기에는 화면 이해, 활성 탄수화물(COB), 민감도, DynamicISF, 프로파일 전환, 임시 목표, 확장 탄수화물(eCarbs), 자동화, 그리고 이력 브라우저와 통계를 이용한 [데이터 검토](./Maintenance/Reviewing.md)가 포함됩니다. 또한 여러 종류의 식사 관리, 캐뉼라와 센서 교체, 스마트폰 업데이트, 서머타임 변경, [AAPS와 함께 여행하기](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md), 운동처럼 자주 묻는 주제도 다룹니다. 자주 묻는 질문과 답변은 문제 해결 섹션에 있습니다.

**6) [AAPS 원격 기능](./RemoteFeatures/RemoteControl.md)** 섹션은 **AAPS**의 큰 강점을 보여 줍니다. **AAPS**에 원격으로 명령을 보내거나 데이터만 팔로우하는 방법은 매우 다양합니다. 이는 미성년자를 위해 **AAPS**를 사용하려는 보호자에게도 유용하고, 휴대폰에서만이 아니라 더 편하게(워치, 자동차 _등_에서) 혈당(및 다른 수치)을 모니터링하고 싶거나 가까운 사람도 데이터를 볼 수 있기를 원하는 성인 당뇨인에게도 똑같이 유용합니다. 이 섹션에서는 Android Auto를 사용하여 자동차에서 혈당 수치를 보는 방법도 안내합니다.

**7) [Wear OS 스마트워치](./WearOS/BuildingAapsWearOS.md)** 섹션에서는 Android **Wear OS** 스마트워치를 전용 **AAPS** 워치 페이스 또는 사용자 지정 워치 페이스와 함께, 휴대폰의 원격 제어 장치나 단순한 표시 장치로 사용하는 정보와 절차를 제공합니다.


**8) [AAPS 정비](./Maintenance/ExportImportSettings.md)** 섹션에서는 설정을 내보내고 백업하는 방법(휴대폰을 잃어버리거나 고장 난 경우를 대비해 매우 중요합니다), 최신 버전 노트, **AAPS** 업데이트 방법, 그리고 버전의 지원이 종료되면 어떻게 되는지를 다룹니다. 1년에 새 버전 1개와 필수 업데이트 2~3개가 나온다고 예상할 수 있습니다. 모든 소프트웨어와 마찬가지로 이 업데이트는 반드시 해야 합니다. 업데이트로 작은 버그가 수정되고 **AAPS**가 개선됩니다. 자주 묻는 내용을 모은 "업데이트" 전용 문제 해결 섹션이 있습니다.

**9) [도움말 및 문제 해결](GettingHelp/WhereCanIGetHelp.md)** 섹션은 **AAPS**에 대한 일반적인 도움을 받을 수 있는 가장 좋은 곳을 안내합니다. 무언가 작동하지 않을 때는 이곳을 찾으십시오. [문제 해결](GettingHelp/GeneralTroubleshooting.md) 허브에는 가장 흔한 문제의 해결 방법이 주제별로 모여 있고, [FAQ](UsefulLinks/FAQ.md)에서는 자주 묻는 질문에 답합니다. 이는 다른 사람들과 최대한 빨리 연락하여 질문을 해결하고 흔히 겪는 문제를 풀 수 있도록 하기 위해 매우 중요합니다. 이미 많은 사람들이 **AAPS**를 성공적으로 사용하고 있지만, 누구나 언젠가는 혼자 해결할 수 없는 질문이 생깁니다. 사용자가 많기 때문에 질문에 대한 답변은 보통 매우 빠르며, 대개 몇 시간 안에 받을 수 있습니다. 도움을 요청하는 것을 걱정하지 마십시오. 어리석은 질문이란 없습니다! 경험 수준과 관계없이 모든 사용자는 안전하게 시작하고 사용하는 데 필요한 만큼 얼마든지 질문하시기 바랍니다. 이 섹션에는 **AAPS**와 **AAPSClient**(함께 사용하는 팔로우 앱)의 일반적인 문제 해결 방법이 있습니다. 또한 **AAPS**의 기술적인 문제를 살펴봐야 한다고 생각되면 **AAPS** 데이터(로그 파일)를 개발자에게 보내 조사를 요청하는 방법도 설명합니다.

**10)** 섹션은 **[AAPS 고급 옵션](./AdvancedOptions/FullClosedLoop.md)**을 다룹니다. 예를 들어 **AAPS**를 하이브리드 폐쇄 루프(식사 볼러스 _등_)에서 완전 폐쇄 루프(볼러스 없음)로 전환하는 방법, [프로파일 조정](./GettingHelp/ProfileTuning.md)과 Autotune 사용 방법, 그리고 개발 및 엔지니어링 모드에 대해 자세히 설명합니다. 대부분의 사용자는 이러한 옵션을 살펴보지 않고도 기본 버전, 즉 "Master" **AAPS** 버전으로 충분히 잘 사용합니다. 이 섹션은 이미 혈당 조절이 잘 되고 있으며 설정을 더 개선하려는 사용자를 위한 것입니다.

**11) [AAPS를 지원하는 방법](SupportingAaps/HowCanIHelp.md)** 섹션에서는 이 프로젝트를 지원할 수 있도록 정보를 제공합니다. 돈, 장비 또는 전문 지식을 기부할 수 있습니다. 문서를 직접 수정하거나 수정을 제안할 수 있고, [문서 번역](SupportingAaps/Translations.md)을 돕거나 Open Humans 프로젝트를 통해 데이터를 제공할 수 있습니다.

**12) 참고 자료** 섹션에는 보관된 문서와 추가 문서가 있습니다. 여기에는 **AAPS** 같은 오픈 소스 인공 췌장 기술에 관심을 보인 [임상의](UsefulLinks/ClinicianGuideToAaps.md)나, 이러한 정보를 담당 의료진과 공유하려는 환자를 위한 하위 섹션도 있습니다. 이 주제는 소개에서도 다룹니다. 더 많은 당뇨병 및 루프 관련 참고 자료와 정보도 이 섹션에 있습니다. 여기에는 **AAPS** 전체에서 쓰이는 약어(또는 줄임말) 목록인 [용어](./UsefulLinks/Glossary.md)도 있습니다. 예를 들어 ISF나 TT 같은 용어가 무엇을 뜻하는지 알고 싶을 때 이곳을 찾으면 됩니다.


 ### **AAPS** 시작에 관심이 있으십니까? [APS와 AAPS 소개](Getting-Started/Introduction.md)에서 **AAPS**에 대해 더 읽어 보십시오.

```{admonition} SAFETY NOTICE
:class: danger
**AAPS**의 안전성은 하드웨어(휴대폰, 펌프, CGM)의 안전 기능에 달려 있습니다. 완전히 정상 작동하는 FDA/CE 승인 인슐린 펌프와 CGM만 사용하십시오. 고장 났거나, 개조했거나, 직접 만든 인슐린 펌프나 CGM 수신기를 사용하지 마십시오. 제조사가 해당 펌프와 CGM에 사용하도록 승인한 정품 소모품(삽입기, 캐뉼라, 인슐린 레저버)만 사용하십시오. 검증되지 않았거나 개조한 소모품을 사용하면 부정확한 작동과 인슐린 주입 오류가 생길 수 있으며, 사용자에게 큰 위험이 됩니다. 

SGLT-2 억제제(글리플로진)를 복용하는 경우 **AAPS**를 사용하지 마십시오. 이 약은 혈당 수치를 낮추기 때문입니다. 인슐린 주입이 줄어 당뇨병성 케톤산증(DKA)의 위험이 커지고, 혈당 수치가 낮아져 저혈당의 위험이 커집니다. 
```

```{admonition} Disclaimer
:class: note

- 여기에 설명된 모든 정보와 코드는 정보 제공 및 교육 목적으로만 제공됩니다. [Nightscout](https://nightscout.github.io/)와 **AAPS**는 본인 책임하에 사용하십시오. 이 정보나 코드를 의료적 결정을 내리는 데 사용하지 마십시오. Nightscout은 현재 HIPAA 개인 정보 보호 준수 규약을 따르지 않습니다. 
- github.com의 코드는 어떠한 종류의 보증이나 공식 지원도 없이 사용됩니다. 자세한 내용은 이 저장소의 LICENSE를 참고하십시오.
- All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. 그것들을 사용한 것은 정보를 제공하기 위한 목적이며, 그들과의 제휴 또는 보증을 의미하지는 않습니다.

**AAPS**는 다음 회사와 아무런 관계가 없으며, 이들 회사의 보증도 받지 않습니다: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/), [Medtronic](https://www.medtronic.com/), [Diaconn](https://www.diaconn.com/en/index.html), [EOFlow](http://www.eoflow.com/), [MicroTech Medical (Equil)](https://www.microtechmd.com/), [Medtrum](https://www.medtrum.com/), [Senseonics (Eversense)](https://www.senseonics.com/), [i-SENS (CareSens)](https://i-sens.com/), [POCTech](https://poctechcorp.com/en/), [Ottai](https://ottai.com/), [Syai](https://www.syai.com/).

```

(index-aaps-documentation-index)=

## AAPS 문서 목차

```{toctree}
:caption: Using this documentation
:titlesonly:

Change language and version <./NavigateDoc/ChangeLanguageVersion.md>
Search the documentation <./NavigateDoc/SearchDoc.md>
Documentation updates <./Maintenance/DocumentationUpdate.md>
```
```{toctree}
:caption: 1) 시작하기

APS와 AAPS 소개 <./Getting-Started/Introduction.md>
AAPS 시작 준비하기 <./Getting-Started/PreparingForAaps.md>
구성 요소 개요 <./Getting-Started/ComponentOverview.md>
- 호환 펌프 <./Getting-Started/CompatiblePumps.md>
- 호환 CGM <./Getting-Started/CompatiblesCgms.md>
- 스마트폰 <./Getting-Started/Phones.md>
- 스마트워치와 AAPS <./Getting-Started/Watches.md>
```

```{toctree}
:caption: 2) 앱 빌드

AAPS 전용 Google 계정(선택 사항) <./UsefulLinks/DedicatedGoogleAccountForAaps.md>
AAPS 빌드 <./SettingUpAaps/BuildingAaps.md>
- 브라우저 빌드 <./SettingUpAaps/BrowserBuild.md>
- Android Studio 빌드 <./SettingUpAaps/ComputerBuild.md>
- 명령줄 빌드 안내 <./SettingUpAaps/CLIBuild.md>
AAPS를 스마트폰으로 옮기고 설치하기 <./SettingUpAaps/TransferringAndInstallingAaps.md>
```
```{toctree}
:caption: 3) 리포팅 서버 설정하기

리포팅 서버 설정하기 <./SettingUpAaps/SettingUpTheReportingServer.md>
- Nightscout <./SettingUpAaps/Nightscout.md>
- Tidepool <./SettingUpAaps/Tidepool.md>
```
```{toctree}
:caption: 4) AAPS 구성하기

AAPS 설정 마법사 <./SettingUpAaps/SetupWizard.md>
AAPS 프로파일 <./SettingUpAaps/YourAapsProfile.md>
AAPS 구성 변경하기 <./SettingUpAaps/ChangeAapsConfiguration.md>
- 구성 (구성 관리자) <./SettingUpAaps/ConfigBuilder.md>
- 설정 <./SettingUpAaps/Preferences.md>
목표 완료하기 <./SettingUpAaps/CompletingTheObjectives.md>
```

```{toctree}
:caption: 5) AAPS와 함께하는 일상

AAPS 화면 <./DailyLifeWithAaps/AapsScreens.md>
AAPS 주요 기능 <./DailyLifeWithAaps/KeyAapsFeatures.md>
COB 계산 <./DailyLifeWithAaps/CobCalculation.md>
민감도 감지 <./DailyLifeWithAaps/SensitivityDetectionAndCob.md>
동적 ISF (DynISF) <./DailyLifeWithAaps/DynamicISF.md>
프로파일 전환과 프로파일 퍼센트 <./DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md>
임시 목표 <./DailyLifeWithAaps/TempTargets.md>
확장 탄수화물 / "eCarbs" <./DailyLifeWithAaps/ExtendedCarbs.md>
빠른 마법사 (한 번 탭으로 볼러스) <./DailyLifeWithAaps/QuickWizards.md>
장면 (상황별 프리셋) <./DailyLifeWithAaps/Scenes.md>
자동화 <./DailyLifeWithAaps/Automations.md>
QuickLaunch (개요 화면의 빠른 작업 툴바) <./DailyLifeWithAaps/QuickLaunch.md>
홈 화면 위젯 <./DailyLifeWithAaps/Widgets.md>
음식 (음식 데이터베이스) <./DailyLifeWithAaps/Food.md>
전체 검색 <./DailyLifeWithAaps/GlobalSearch.md>
데이터 검토 <./Maintenance/Reviewing.md>
어린이를 위한 AAPS <./DailyLifeWithAaps/AapsForChildren.md>
펌프와 캐뉼라 <./DailyLifeWithAaps/PumpsAndCannulas.md>
시간대 변경과 서머타임 <./DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md>

```

```{toctree}
:caption: 6) AAPS 원격 기능

원격 모니터링 <./RemoteFeatures/RemoteMonitoring.md>
AAPS 팔로우하기 (AAPS 시스템과 상호 작용 없음) <./RemoteFeatures/FollowingOnly.md>
Android Auto <./RemoteFeatures/AndroidAuto.md>
AAPS 원격 제어 <./RemoteFeatures/RemoteControl.md>
AAPSClient 앱 <./RemoteFeatures/AapsClient.md>
마스터 ↔ 클라이언트 제어 (서명된 원격 제어) <./RemoteFeatures/ClientMasterControl.md>
SMS 명령 <./RemoteFeatures/SMSCommands.md>

```
```{toctree}
:caption: 7) Wear OS 스마트워치

Wear AAPS 앱 빌드 <./WearOS/BuildingAapsWearOS.md>
Wear OS 워치에 AAPS 설정하기 <./WearOS/WearOsSmartwatch.md>
Wear OS 스마트워치로 AAPS 사용하기 <./RemoteFeatures/RemoteControlWearOS.md>
사용자 지정 워치 페이스 참조 문서 <./ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md>
사용자 지정 워치 페이스 교환 사이트 <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: 8) AAPS 정비

백업 만들기와 복원하기 <./Maintenance/ExportImportSettings.md>
릴리스 노트 <./Maintenance/ReleaseNotes.md>
AAPS v4의 변경 사항 <./Maintenance/V4Changes.md>
새 버전 또는 브랜치로 업데이트 <./Maintenance/UpdateToNewVersion.md>
- 브라우저로 업데이트 (fork) <./Maintenance/UpdateBrowserBuild.md>
- Android Studio로 업데이트 <./Maintenance/UpdateComputerBuild.md>
지원 종료 <./Maintenance/EndOfLife.md>

```

```{toctree}
:caption: 9) 도움말 및 문제 해결

어디에서 도움을 받을 수 있습니까? <./GettingHelp/WhereCanIGetHelp.md>
문제 해결 <./GettingHelp/GeneralTroubleshooting.md>
- 블루투스 관련 문제 <./GettingHelp/BluetoothTroubleshooting.md>
- NSClient 문제 해결 <./GettingHelp/TroubleshootingNsClient.md>
- Android Studio 문제 해결 <./GettingHelp/TroubleshootingAndroidStudio.md>
- 브라우저 빌드: 문제 해결 <./GettingHelp/BrowserBuildTroubleshooting.md>
- 새 키 저장소로 AAPS 재설치하기 <./GettingHelp/ReinstallAaps.md>
- 로그파일 접근하기 <./GettingHelp/AccessingLogFiles.md>
루프 사용자를 위한 FAQ <./UsefulLinks/FAQ.md>
```

```{toctree}
:caption: 10) AAPS 고급 옵션

완전 폐쇄 루프 <./AdvancedOptions/FullClosedLoop.md>
AAPS 프로파일 조정 <./GettingHelp/ProfileTuning.md>
Autotune 플러그인 사용 방법 <./AdvancedOptions/Autotune.md>
인슐린 농도 <./AdvancedOptions/InsulinConcentration.md>
개발 브랜치 <./AdvancedOptions/DevBranch.md>
브라우저 빌드: 커밋 cherry-pick 하기 <./AdvancedOptions/BrowserBuildCherryPick.md>

```
```{toctree}
:caption: 11) AAPS를 지원하는 방법

AAPS를 돕는 방법 <./SupportingAaps/HowCanIHelp.md>
문서 편집 방법 <./SupportingAaps/HowToEditTheDocs.md>
AAPS 앱 또는 문서의 문자열을 번역하는 방법 <./SupportingAaps/Translations.md>
앱과 문서의 번역 상태 <./SupportingAaps/StateOfTranslations.md>
Open Humans 업로더 <./SupportingAaps/OpenHumans.md>

```
```{toctree}
:caption: 12) 참고 자료

용어 <./UsefulLinks/Glossary.md>
시작하기 전에 읽어 두면 좋은 자료 <./UsefulLinks/BackgroundReading.md>
임상의를 위한 AAPS 일반 소개와 가이드 <./UsefulLinks/ClinicianGuideToAaps.md>
```
