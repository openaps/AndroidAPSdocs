# 용어

**AAPS** = AndroidAPS는 Android 앱의 이름입니다.

**AAPSClient** = 보호자를 위한 팔로워 앱입니다. 팔로워 휴대폰에서 사용자의 **Nightscout** 사이트를 통해 사용자의 **AAPS**를 팔로우하며, **AAPS** 휴대폰과 페어링하면 원격으로 제어합니다. **NSClient**와 혼동하지 마십시오. 자세한 정보 → [위키 - 'AAPSClient 앱'](../RemoteFeatures/AapsClient.md) 및 [마스터 ↔ 클라이언트 제어](#client-master-control).

**인슐린 활동 (Activity)** = 인슐린 활동으로, IOB가 줄어드는 속도를 나타냅니다. [위키 - 'DIA'](#Config-Builder-insulin-dia) 및 관련된 **BGI**를 참고하십시오.

**AID** = Automated Insulin Delivery(자동 인슐린 주입). **CGM** 데이터를 사용해 인슐린 주입을 자동으로 조정하는 시스템을 가리키며, 임상 현장과 연구에서 일반적으로 쓰는 용어입니다. **APS**와 **폐쇄 루프**는 같은 뜻입니다 → **OS-AID**도 참고하십시오.

**APS** = Artificial Pancreas System(인공췌장 시스템) → **AID**도 참고하십시오.

**AMA** = Advanced Meal Assist(고급 식사 지원). 식사 볼러스 후 **AAPS**가 사용자의 기저를 더 적극적으로 높일 수 있게 하는 알고리즘입니다. 자세한 정보 → [위키 - '고급 식사 지원 (AMA)'](#Open-APS-features-advanced-meal-assist-ama).

**조정 계수 (Adjustment Factor)** = **DynamicISF**에서 사용하며, 사용자의 **설정**에서 1%와 300% 사이로 정하는 값입니다. 이 값은 **TDD** 값에 곱하는 배수로 작용합니다. [위키 - DynamicISF 조정 계수](#dyn-isf-adjustment-factor)를 참고하십시오

**Android Auto** = **AAPS**를 포함한 Android 스마트폰의 일부 기능을 자동차 화면에 표시하는 시스템입니다. 자세한 정보 → [위키 - 'Android Auto'](../RemoteFeatures/AndroidAuto.md).

**APK** = Android application Package(Android 애플리케이션 패키지). 소프트웨어 설치 파일입니다. 자세한 정보 → [위키 - 'APK 빌드'](../SettingUpAaps/BuildingAaps.md).

**Autosens** = 24시간 및 8시간 기간 등을 기준으로 인슐린 민감도를 계산하는 기능입니다. 자세한 정보 → [DIABETTECH - **Autosens**](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Azure** = **Nightscout** 웹 앱을 호스팅하는 클라우드 컴퓨팅 플랫폼입니다 → **Nightscout**도 참고하십시오.

**BAT** = 펌프 배터리가 부족할 때 켜지는 상태 등이며, **AAPS** 메인 화면의 상태 표시줄에 표시됩니다 → **CAN** / **RES** / **SEN**도 참고하십시오.

**BG** = blood glucose(혈당).

**BGI** = blood glucose impact(혈당 영향). 인슐린 활동만으로 **BG**가 오르거나 내려'야 하는' 정도입니다.

**혈당 출처 (BG source)** = 혈당 데이터의 출처를 구성하는 AAPS 설정입니다. [위키 - 혈당 출처](#Config-Builder-bg-source)를 참고하십시오

**브리지 (Bridge)** = **FGM**을 **CGM**으로 바꾸어 주는 추가 장치입니다.

**BR** = Basal Rate(기저 주입량). **BG**를 안정된 수준으로 유지하기 위해 정해진 시간대에 주입하는 인슐린의 양입니다. → **IC** / **ISF**도 참고하십시오.

**BYODA** = Build Your Own Dexcom App(직접 빌드하는 Dexcom 앱). Dexcom G6 센서 데이터를 읽기 위해 사용자가 직접 Dexcom 앱을 만드는 방법입니다.

**CAGE** = Cannula AGE(캐뉼라 사용 기간). 사용자의 **프라임/채우기** 케어포털 항목을 바탕으로 **AAPS** 메인 화면과 Nightscout에 표시됩니다 → **Nightscout**도 참고하십시오.

**CAN** = 캐뉼라 교체 시기가 지났을 때 켜지는 상태 등이며, **AAPS** 메인 화면의 상태 표시줄에 표시됩니다 → **BAT** / **RES** / **SEN**도 참고하십시오.

**CGM** = Continuous Glucose Monitor(연속 혈당 측정기) → **FGM**도 참고하십시오.

**폐쇄 루프 (Closed Loop)** = 사용자의 승인 없이 **AAPS** 알고리즘과 사용자의 **프로파일** 설정에 따라 기저 주입을 자동으로 조정하는 시스템입니다. 자세한 정보 → [위키 - '폐쇄 루프'](#KeyAapsFeatures-ClosedLoop), **HCL** / **FCL**도 참고하십시오.

**COB** = Carbs On Board(활성 탄수화물). 현재 사용자의 몸에서 아직 소화되고 있는 탄수화물의 양입니다 → IOB도 참고하십시오.

**CSF** = Carbs Sensitivity Factor(탄수화물 민감도 계수). 즉, 탄수화물 1g이 흡수될 때 사용자의 **BG**가 얼마나 오르는지를 나타냅니다.

**DIA** = Duration of Insulin Action(인슐린 작용 시간). 자세한 정보 → [위키 - 'DIA'](#Config-Builder-insulin-dia), 그리고 → [DIABETTECH - 'DIA'](https://www.diabettech.com/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)도 참고하십시오.

**DST** = Daylight Saving Time(서머타임). [위키 - 시간대 변경과 서머타임](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md)을 참고하십시오.

**동적 ISF (Dynamic ISF, DynISF)** = 사용자의 **TDD**와 **BG**에 따라 인슐린 민감도 계수(**ISF**)를 동적으로 조정하는 **AAPS** 기능입니다.

**eCarbs** = extended Carbs(확장 탄수화물). 여러 시간에 걸쳐 나눈 탄수화물입니다(예: 지방/단백질을 고려할 때). 이렇게 하면 **AAPS**가 확장 볼러스처럼 인슐린을 나누어 줄 수 있습니다. 자세한 정보 → [위키 - '확장 탄수화물'](../DailyLifeWithAaps/ExtendedCarbs.md)

**FCL** = Full Closed Loop(완전 폐쇄 루프). 식사 때 사용자의 입력이 필요 없는 루프입니다. 탄수화물을 계산하지 않고 식사 볼러스도 하지 않습니다. 자세한 정보 → [위키 - '완전 폐쇄 루프'](../AdvancedOptions/FullClosedLoop.md), **HCL**도 참고하십시오.

**FGM** = Flash Glucose Monitor(플래시 혈당 측정기). 예: Abbott Freestyle Libre. 자세한 정보 → [위키 - '혈당 출처'](#Config-Builder-bg-source), 'CGM'도 참고하십시오.

**git** = **AAPS** 소스 코드를 저장하고 내려받는 데 쓰는 도구입니다.

**GitHub** = **AAPS** 소스 코드와 그 버전 관리(파일 변경을 추적하고, 특히 팀 작업을 조율하는 일)를 호스팅하는 웹 서비스이며, 앱을 빌드할 수도 있습니다. **APK** 업데이트에도 필요합니다. 자세한 정보 → [위키 - 'APK 업데이트'](../Maintenance/UpdateToNewVersion.md).

**Glimp** = Freestyle Libre의 값을 수집하는 앱입니다.

**HCL (Hybrid Closed Loop, 하이브리드 폐쇄 루프)** = 식사 사이의 인슐린 주입은 자동으로 하지만, 식사 볼러스는 사용자가 직접 해야 하는 루프입니다. **AAPS**를 포함하여 일상에서 쓰는 거의 모든 시스템은 하이브리드 폐쇄 루프입니다 → **FCL** / **폐쇄 루프**도 참고하십시오.

**IC (I:C, ICR, CR, carb ratio)** = Insulin to Carb ratio(인슐린 대 탄수화물 비율). 약어는 반대 뜻처럼 보이지만, 관례상 단위는 g/U입니다.

**IOB** = Insulin On Board(활성 인슐린). 사용자의 몸에서 작용하고 있는 인슐린입니다. [위키 - 활성 인슐린](#aaps-screens-iob)을 참고하십시오

**ISF** = Insulin Sensitivity Factor(인슐린 민감도 계수). 인슐린 1 U로 예상되는 BG 감소량입니다. 단위는 mg/dL/U 또는 mmol/L/U입니다. 변환하지 않으면 두 단위의 값은 같지 않습니다!

**키 저장소 (Keystore, JKS)** = Java Key Store. **AAPS** 빌드(및 다시 빌드)에 필요한 개인 개발자 인증서와 키가 저장되는 암호화된 파일입니다.

**LGS** = Low Glucose Suspend(저혈당 주입 정지). [위키 - 저혈당 주입 정지](#KeyAapsFeatures-LGS)를 참고하십시오

**LineageOS** = 스마트폰 등을 위한 무료 오픈 소스 운영 체제입니다. Accu-Chek Combo를 사용한다면 [위키 - Combo 펌프](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)를 참고하십시오.

**로그 파일 (Log files)** = 사용자의 동작을 기록한 **AAPS**의 기록입니다(문제 해결과 디버깅에 유용합니다). 자세한 정보 → [위키 - '로그 파일'](../GettingHelp/AccessingLogFiles.md).

**maxIOB** = 최대 총 IOB. **AAPS**가 사용자의 설정보다 많은 인슐린을 주입하지 않도록 막는 안전 기능입니다. 자세한 정보 → [위키 - 'OpenAPS가 넘을 수 없는 최대 총 IOB'](#Open-APS-features-maximum-total-iob-openaps-cant-go-over).

**min_5m_carbimpact** = 사용자의 혈당 반응으로 탄수화물 흡수를 판단할 수 없을 때, 기본 탄수화물 감소량을 계산하는 안전 기능입니다. 자세한 정보 → [위키 - 'min_5m_carbimpact'](#Preferences-min_5m_carbimpact).

**Nightscout** = **CGM** 데이터에 접근하고 보고서를 만드는 오픈 소스 프로젝트입니다. 사용자의 **AAPS** 데이터를 모으는 중심 데이터 허브이며, 예상 HbA1c, 범위 내 시간(time in range), 백분위 차트를 이용한 데이터 패턴 찾기 등 사용자의 과거 **Nightscout** 데이터를 볼 수 있는 보고서를 만들 수 있습니다.

**Nightscout** → **Nightscout Reporter**도 참고하십시오. 자녀의 당뇨병 관리를 지켜보는 부모에게 특히 유용합니다.

**Nightscout Reporter Tool** = Nightscout 웹 앱 데이터로 PDF 보고서를 만드는 도구입니다. Facebook의 'Nightscout Reporter', 'NS Reporter'를 참고하십시오.

**NSClient** (**NSClientV3**) = **Nightscout**와 데이터를 동기화하는 **AAPS** 플러그인입니다(**구성** → **통신**). 팔로워 앱인 **AAPSClient**와는 다릅니다. 자세한 정보 → [위키 - 'NSClient'](#Preferences-nsclient).

**OpenAPS** = Open Artificial Pancreas System(오픈 인공췌장 시스템). AAPS의 이전 프로젝트이자 기반입니다.

**개방 루프 시스템 (Open Loop system)** = 조정을 추천만 하고, 실행은 사용자가 **AAPS**에서 직접 해야 하는 **AAPS** 기능입니다. 자세한 정보 → [위키 - '개방 루프'](#KeyAapsFeatures-OpenLoop).

**Oref0 / Oref1** = 민감도 감지 및 "reference design implementation version 0/1"(참조 설계 구현 버전 0/1). OpenAPS의 핵심 알고리즘입니다. 자세한 정보 → [위키 - '민감도 감지'](../DailyLifeWithAaps/SensitivityDetectionAndCob.md).

**OS-AID** = Open-Source Automated Insulin Delivery(오픈 소스 자동 인슐린 주입). **AAPS**, **OpenAPS**, Loop, Trio처럼 오픈 소스 소프트웨어로 만든 **AID** 시스템입니다. 이 시스템들은 보건 기관(FDA, NHS 등)의 공식 승인을 받지 않았습니다 → **AID**도 참고하십시오.

**피크 시간 (Peak time)** = 주입한 인슐린의 효과가 가장 큰 시간입니다. 자세한 정보 → [위키 - '인슐린 작용 시간(DIA)과 피크'](#Config-Builder-insulin-dia).

**PH** = Pump History(펌프 이력). **AAPS**의 처치 이력에서 볼 수 있습니다. 메인 화면 왼쪽 위의 **메뉴**(☰)를 열고 **처치**를 선택하십시오.

**예측 (Predictions)** = 여러 계산을 바탕으로 한 미래 **BG** 예측입니다. 자세한 정보 → [위키 - '예측선'](#aaps-screens-prediction-lines).

**프로파일 (Profile)** = 사용자의 기본 치료 설정입니다(기저 주입량, **DIA**, **IC**, **ISF**, **BG** 목표). **AAPS**는 **AAPS**에서 만든 프로파일만 사용합니다(**관리** → **프로파일**). 하지만 **Nightscout** **프로파일**을 **AAPS**로 복사(동기화)할 수 있습니다. 자세한 정보 → [위키 - 'AAPS 프로파일'](../SettingUpAaps/YourAapsProfile.md).

**프로파일 전환 (Profile switch)** = 사용자의 **프로파일**을 **AAPS**에 저장된 다른 **프로파일**로 (일시적으로) 바꾸는 것입니다.

**프로파일 퍼센트 (Profile Percentage)** = 선택한 기간 동안 사용자의 **프로파일**에 적용하는 (일시적인) 퍼센트 증가 또는 감소입니다.

**RES** = 레저버 교체 시기가 지났을 때 켜지는 상태 등이며, **AAPS** 메인 화면의 상태 표시줄에 표시됩니다 → **BAT** / **CAN** / **SEN**도 참고하십시오.

**RileyLink** = Bluetooth Low Energy(BLE)를 916MHz(오래된 Medtronic 펌프용) 또는 433MHz(Omnipod Eros 펌프용) 무선 통신으로 연결해 주는 오픈 소스 하드웨어 장치입니다.

**SAGE** = sensor age(센서 사용 기간). 사용자의 **센서 삽입** 케어포털 항목을 바탕으로 **AAPS** 메인 화면과 **Nightscout**에 표시됩니다 → **Nightscout**도 참고하십시오.

**SEN** = 센서 교체 시기가 지났을 때 켜지는 상태 등이며, **AAPS** 메인 화면의 상태 표시줄에 표시됩니다 → **BAT** / **CAN** / **RES**도 참고하십시오.

**민감도 감지 (Sensitivity detection)** = 운동, 호르몬 등으로 달라지는 인슐린 민감도를 계산하는 기능입니다. → [DIABETTECH - 'Autosens'](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/)도 참고하십시오.

**센서 노이즈 (Sensor noise)** = **CGM** 수치가 불안정하여 **BG** 값이 "튀는" 상태를 말합니다. 자세한 정보 → [위키 - '혈당 데이터 평활화'](../CompatibleCgms/SmoothingBloodGlucoseData.md).

**SMB** = Super Micro Bolus(슈퍼 마이크로 볼러스). **BG**를 조정하기 위해 인슐린을 더 빨리 주입하는 **AAPS** 기능입니다. 자세한 정보 → [위키 - '**SMB**'](#Open-APS-features-super-micro-bolus-smb), **UAM**도 참고하십시오.

**슈퍼 볼러스 (Super bolus)** = **BG**를 더 빨리 조정하기 위해 기저 인슐린을 볼러스 인슐린으로 옮기는 것입니다.

**TBB** = total base basal(총 기본 기저, 24시간 동안의 기저 주입량 합계) → **TBR** / **TDD**도 참고하십시오.

**TBR** = temporary basal rate(임시 기저 주입량) → **TBB** / **TDD**도 참고하십시오.

**TDD** = total daily dose(총 일일 용량, 하루 동안의 볼러스 + 기저) → **TBB** / **TBR**도 참고하십시오.

**TT** = temporary target(임시 목표): 식사나 운동 등을 위해 사용자의 **혈당** 목표(범위)를 일시적으로 높이거나 낮추는 것입니다. 자세한 정보 → [위키 - '임시 목표'](../DailyLifeWithAaps/TempTargets.md).

**UAM** = unannounced meals(미입력 식사). 식사, 아드레날린 또는 다른 영향으로 **BG**가 크게 오르는 것을 감지하고, 이에 맞추어 조정하려고 합니다. 자세한 정보 → [위키 - 'UAM'](#enable-uam), **SMB**도 참고하십시오.

**가상 펌프 (Virtual pump)** = 사용자가 **AAPS** 기능을 시험해 볼 수 있게 하거나, **AAPS** 드라이버가 없는 펌프 모델을 쓰는 PWD(당뇨병이 있는 사람)가 **AAPS**를 개방 루프로 사용할 수 있게 하는 **AAPS** 기능입니다 → **개방 루프**도 참고하십시오.

**배경 화면 (Wallpaper)** = **AAPS** 배경 이미지입니다. 스마트폰 페이지를 참고하십시오.

**xDrip** = **CGM** 시스템의 값을 읽는 오픈 소스 소프트웨어입니다.

**0 임시 기저 (Zero-temp)** = 0%인 임시 기저 주입량입니다(기저 인슐린을 주입하지 않음).

→ [OpenAPS 문서](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)도 참고하십시오