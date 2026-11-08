# 루프 사용자를 위한 FAQ

FAQ에 질문을 추가하는 방법: 이 [안내](../SupportingAaps/HowToEditTheDocs.md)를 따르십시오

## 일반

### AAPS 설치 파일을 그냥 다운로드할 수 있습니까?

아니요. AAPS는 다운로드할 수 있는 apk 파일이 없습니다. 직접 [빌드](../SettingUpAaps/BuildingAaps.md)해야 합니다. 그 이유는 다음과 같습니다:

AAPS는 펌프를 제어하고 인슐린을 주입하는 데 사용됩니다. 현재 유럽 규정에 따르면 IIa 또는 IIb 등급으로 분류되는 모든 시스템은 의료기기이며, 규제 승인(CE 마크)이 필요합니다. 이 승인에는 여러 연구와 승인 절차가 필요합니다. 허가 받지 않은 기기를 배포하는 행위는 불법입니다. 세계의 다른 지역에서도 마찬가지로 비슷한 규제가 존재합니다.

이 규정은 판매(무언가에 대해 돈을 받는 것)에만 적용되지 않고, 모든 배포(무료로 나누어 주는 것도 포함)에 적용됩니다. 이 규정 안에서 앱을 사용하는 유일한 방법은 자신을 위해 의료기기를 직접 만드는 것입니다.

이것이 APK 파일 다운로드를 할 수 없는 이유입니다.

(FAQ-how-to-begin)=

### 어떻게 시작합니까?

[AAPS 시작 준비하기](../Getting-Started/PreparingForAaps.md)부터 시작하십시오: 아래의 모든 내용을 더 자세히 안내합니다.

먼저 **루프에 사용할 수 있는 하드웨어 구성 요소**가 있어야 합니다:

* [지원되는 인슐린 펌프](../Getting-Started/CompatiblePumps.md), 
* [Android 스마트폰](../Getting-Started/Phones.md)(AAPS는 Apple iOS를 지원하지 않습니다. [iOS Loop](https://loopkit.github.io/loopdocs/)를 확인해 보십시오) 그리고
* [연속 혈당 측정 시스템](../Getting-Started/CompatiblesCgms.md). 

둘째, **소프트웨어 구성 요소를 설정**해야 합니다: [AAPS](../SettingUpAaps/BuildingAaps.md), [CGM/FGM 소스](../Getting-Started/CompatiblesCgms.md), [리포팅 서버](../SettingUpAaps/SettingUpTheReportingServer.md).

셋째, **치료 계수를 확인하기 위해 OpenAPS 참조 설계를 배우고 이해**해야 합니다. 폐쇄 루프의 기본 원칙은 [기저 주입량과 탄수화물 비율](../SettingUpAaps/YourAapsProfile.md)이 정확하다는 것입니다. 모든 권장 사항은 기저 필요량이 맞게 설정되어 있고, 보이는 혈당의 최고점이나 최저점은 다른 요인(운동, 스트레스 등) 때문이며 그래서 일회성 조정이 필요하다는 가정을 바탕으로 합니다. 폐쇄 루프가 안전을 위해 할 수 있는 조정은 제한되어 있습니다([OpenAPS Reference Design](https://openaps.org/reference-design/)의 최대 허용 임시 기저 주입량 참조). 따라서 허용된 투여량을 잘못된 기본 기저를 보정하는 데 낭비하면 안 됩니다. 예를 들어 식사가 다가올 때 자주 낮은 임시 기저가 걸린다면, 기저를 조정해야 할 가능성이 높습니다. [Autotune](#autotune-how-autotune-calculates-adjustments)을 사용하면 많은 데이터를 바탕으로 기저 및/또는 ISF를 조정해야 하는지, 어떻게 조정해야 하는지, 그리고 탄수화물 비율을 바꿔야 하는지 제안을 받을 수 있습니다. 또는 [전통적인 방법](https://integrateddiabetes.com/basal-testing/)으로 기저를 테스트하고 설정할 수 있습니다.

### 루프를 사용할 때 실제로 알아야 할 점은 무엇입니까?

#### Password protection

설정을 쉽게 바꾸지 못하게 하려면 비밀번호, PIN 또는 휴대폰의 생체 인증(지문, 얼굴)으로 보호할 수 있습니다. **설정** > **보안** > **설정 보안**을 열고 보호 방식을 선택하십시오. 같은 곳에서 앱 전체 또는 볼러스만 보호할 수도 있습니다. 자세한 내용은 [설정 보안](#Preferences-settings-protection)을 참조하십시오.

#### Android Wear 스마트워치

AAPS 워치 앱으로 볼러스를 주입하거나 설정을 바꾸는 경우, 모든 요청은 워치에서 확인해야 합니다: 요청을 보내면 워치에 요약과 **확인** 버튼이 표시됩니다. [Wear OS 스마트워치로 AAPS 사용하기](../RemoteFeatures/RemoteControlWearOS.md)를 참조하십시오.

(FAQ-disconnect-pump)=

#### 펌프 연결 해제

샤워, 목욕, 수영, 운동 또는 다른 활동을 위해 펌프를 빼는 경우, IOB를 정확하게 유지하려면 인슐린이 주입되지 않는다는 것을 AAPS에 알려야 합니다.

AAPS 메인 화면의 [루프 아이콘](#AapsScreens-loop-status)으로 펌프 연결을 해제할 수 있습니다: 아이콘을 누르고 필요한 시간과 함께 **펌프 연결 해제**를 선택하십시오. 활동이 예정보다 길어지면 아이콘을 다시 누르고 새 시간을 선택하십시오: 먼저 다시 연결할 필요는 없습니다. 오랫동안 연결을 해제할 때 인슐린 부족을 피하는 방법은 [샤워나 활동을 위해 펌프 연결 해제하기](#pumps-cannulas-disconnecting)를 참조하십시오.

#### 권장 사항은 CGM 측정값 하나만을 기준으로 하지 않습니다

안전을 위해 권장 사항은 CGM 측정값 하나가 아니라 평균 증분을 기준으로 합니다. 그래서 측정값을 일부 놓치면, 데이터가 다시 들어온 뒤 AAPS가 다시 루프를 시작하기까지 시간이 걸릴 수 있습니다.

#### 더 읽을거리

루프의 실제 사용을 이해하는 데 도움이 되는 좋은 팁을 담은 블로그가 여러 개 있습니다. 그중 일부는 더 이상 온라인에 없습니다: 아래에서 "보관된 사본"으로 표시된 링크는 Internet Archive에 저장된 사본을 엽니다.

    * [Fine-tuning Settings](https://web.archive.org/web/20171029031305/http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM (보관된 사본)
    * [Why DIA matters](https://web.archive.org/web/20231130035027/http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM (보관된 사본)
    * [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
    * [Hormones and autosens](https://web.archive.org/web/20170902081839/http://seemycgm.com/2017/06/06/hormones-2/) See my CGM (보관된 사본)
    

(what-emergency-equipment-is-recommended-to-take-with-me)= (FAQ-emergency-equipment)=

### 어떤 응급 장비를 가지고 다니는 것이 좋습니까?

인슐린 펌프 치료를 하는 다른 제1형 당뇨병(T1D) 환자와 같은 응급 장비를 가지고 다녀야 합니다. AAPS로 루프를 사용할 때는 다음 추가 장비를 몸에 지니거나 가까이에 두는 것을 강력히 권장합니다:

* 스마트폰, 워치, (필요한 경우) BT 리더기 또는 Link 장치를 충전할 보조 배터리와 케이블
* Pump batteries
* 휴대폰과 클라우드(예: Google Drive, Dropbox)에 있는 백업에 접근할 수 있어야 다른 휴대폰에 AAPS를 다시 설정할 수 있습니다([백업 만들기와 복원하기](../Maintenance/ExportImportSettings.md) 참조): 
  * AAPS와 사용하는 다른 앱(예: xDrip, Juggluco, BYODA)의 현재 [apk](../SettingUpAaps/BuildingAaps.md),
  * 키 저장소 파일(apk를 빌드할 때 만든 파일)과 그 비밀번호,
  * AAPS와 다른 앱의 최신 설정 내보내기 파일,
  * your **AAPS** master password: you cannot import the settings file without it. If you forgot it, see [How to reset the master password?](#FAQ-reset-master-password)

(FAQ-organize-backups)=

#### 백업은 어떻게 관리합니까?

설정을 아주 자주 내보내십시오: Pod나 레저버를 교체할 때마다, 프로파일을 수정한 뒤, 목표를 완료했을 때, 펌프를 바꿀 때… 아무것도 바뀌지 않아도 한 달에 한 번은 내보내십시오. 이전 내보내기 파일을 여러 개 보관하십시오.

**AAPS**가 이 일을 대신할 수 있습니다: 설정을 자동으로 내보내고(예: Pod를 교체할 때마다 [자동화](#ExportImportSettings-Automating-Settings-Export) 사용) 내보낸 파일을 클라우드 디렉터리(Google Drive)에 바로 저장할 수 있습니다. [백업 만들기와 복원하기](../Maintenance/ExportImportSettings.md)를 참조하십시오.

### CGM/FGM을 어떻게 안전하고 단단하게 붙일 수 있습니까?

테이프로 붙일 수 있습니다. 일반적인 CGM 시스템용으로 구멍이 미리 뚫린 '오버패치'가 여러 가지 있습니다(Google, eBay 또는 Amazon에서 검색하십시오). 일부 루프 사용자는 더 저렴한 일반 키네시올로지 테이프나 락테이프(rocktape)를 사용합니다.

고정할 수 있습니다. CGM/FGM을 밴드로 고정하는 위팔용 밴드를 구입할 수도 있습니다(Google, eBay 또는 Amazon에서 검색하십시오).

## APS algorithm

### 프로파일의 DIA가 다른데도 OpenAPS AMA에 "dia: 3"이 표시되는 이유는 무엇입니까?

**구성** > **APS**에서 **OpenAPS AMA**를 선택하면, **플러그인 열기**에 알고리즘에 보낸 데이터가 표시됩니다. 그 **프로파일** 섹션에서 `dia`는 항상 3.0 이하입니다:

![프로파일 데이터에 dia 3.0이 표시된 OpenAPS AMA 플러그인 화면](../images/screens/openaps_ama_plugin.png)

AMA에서 DIA는 실제로 '인슐린 작용 시간'을 뜻하지 않습니다. 예전에 DIA와 연결되어 있던 매개변수입니다. 지금은 '교정이 몇 시간 안에 끝나야 하는가'를 뜻합니다. IOB 계산과는 아무 관계가 없습니다. OpenAPS SMB에서는 이 매개변수가 더 이상 필요하지 않습니다.

## Other settings

### Nightscout settings

(FAQ-nsclient-blocked)=

#### AAPSClient(또는 AAPS)가 데이터를 업로드하지 않습니다: "…에 의해 차단됨". 무엇을 할 수 있습니까?

NSClient 상태에 데이터를 보내지 않는 이유가 표시됩니다:

* **연결 옵션에 의해 차단됨**: 연결 설정이 현재 연결을 허용하지 않습니다. 예를 들어 모바일 데이터를 사용 중인데 Wi-Fi만 허용되어 있거나, 허용된 Wi-Fi 네트워크(SSID) 중 하나에 연결되어 있지 않은 경우입니다.
* **충전 옵션에 의해 차단됨**: 연결 설정이 휴대폰을 충전하는 동안에만(또는 배터리 사용 중에만) 동기화를 허용하는데, 지금은 그 상태가 아닙니다.
* **연결 없음**: 휴대폰이 인터넷에 연결되어 있지 않습니다.

[NSClient 연결 설정](#Preferences-nsclient)을 확인하십시오: **모바일 데이터 사용**, **로밍 사용**, **WiFi 사용**, **WiFi SSID**, **배터리 사용 중 동기화**, **충전 중 동기화**.

### CGM settings

(FAQ-advanced-filtering)=

#### AAPS에 "현재 혈당 출처가 고급 필터링을 지원하지 않으므로 '항상 SMB 활성화'와 '탄수화물 후 SMB 활성화'가 비활성화됩니다"라고 표시되는 이유는 무엇입니까?

**항상 SMB 활성화**와 **탄수화물 후 SMB 활성화**는 [신뢰할 수 있는 혈당 데이터 소스](#GettingStarted-TrustedBGSource)에서만 사용할 수 있습니다: 측정값이 어느 센서에서 오는지 **AAPS**에 알려 줄 수 있는 센서와 CGM 앱입니다. 다른 혈당 출처를 사용하면 **AAPS**는 이 두 옵션을 끄고 이 메시지를 표시합니다. 신뢰할 수 있는 소스 목록을 확인하고, 내 센서가 목록에 있다면 그 센서에 표시된 CGM 앱 중 하나를 사용하는지 확인하십시오. [혈당 데이터 평활화](../CompatibleCgms/SmoothingBloodGlucoseData.md)도 참조하십시오.

### Pump

#### Batteries

루프는 일반 사용보다 펌프 배터리를 더 빨리 소모할 수 있습니다. 시스템이 수동 사용자보다 훨씬 자주 블루투스로 통신하기 때문입니다. 배터리 잔량이 25%가 되면 교체하는 것이 가장 좋습니다. 그때부터 통신이 어려워지기 때문입니다. Nightscout 사이트에서 PUMP_WARN_BATT_P 변수를 사용하여 펌프 배터리 경고 알람을 설정할 수 있습니다. 배터리 수명을 늘리는 요령은 다음과 같습니다:

* LCD가 켜져 있는 시간을 줄입니다(펌프 설정 메뉴에서).
* 백라이트가 켜져 있는 시간을 줄입니다(펌프 설정 메뉴에서).
* 알림 설정을 진동 대신 삐 소리로 선택합니다(펌프 설정 메뉴에서).
* 펌프 버튼은 다시 채울 때만 누르고, 모든 이력, 배터리 잔량, 레저버 양은 AAPS에서 확인하십시오.
* 일부 휴대폰에서는 에너지를 아끼거나 RAM을 비우기 위해 AAPS 앱이 자주 종료될 수 있습니다. AAPS는 시작할 때마다 다시 초기화되며, 이때 펌프와 블루투스 연결을 맺고 현재 기저 주입량과 볼러스 이력을 다시 읽습니다. 이것은 배터리를 소모합니다. 이런 일이 일어나는지 보려면 NSClient **고급 설정**에서 **앱 시작 이벤트 기록**을 켜십시오: AAPS가 다시 시작될 때마다 Nightscout에 이벤트가 기록되므로 문제를 쉽게 추적할 수 있습니다. 이런 일을 줄이려면 휴대폰이 AAPS를 종료하지 않도록 AAPS의 배터리 최적화를 끄십시오: 아래의 [배터리 절약](#FAQ-battery-savings)을 참조하십시오.
* 배터리 단자를 알코올 솜으로 닦아 제조 과정에서 남은 왁스/기름이 없도록 합니다.
* [Dana R/RS 펌프](../CompatiblePumps/DanaRS-Insulin-Pump.md)는 시작 과정에서 배터리에 높은 전류를 흘려 부동태 피막(보관 중 에너지 손실을 막는 막)을 일부러 깨뜨리지만, 항상 100% 깨뜨리지는 못합니다. 화면에 100%가 표시될 때까지 배터리를 2~3번 뺐다가 다시 넣거나, 넣기 전에 배터리 키를 두 단자에 아주 잠깐 대어 배터리를 짧게 단락시킵니다.
* [특정 배터리 종류](#Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)에 대한 추가 팁도 참조하십시오

#### 레저버와 캐뉼라 교체

레저버는 펌프에서 직접 교체해야 하며, 그다음 교체 기록이 **AAPS**에 저장됩니다. 단계별 [펌프 레저버와 캐뉼라 교체 안내](#pumps-cannulas-changing-reservoir-and-cannula)를 따르십시오.

### Wallpaper

휴대폰용 AAPS 배경화면은 [스마트폰 페이지](#Phones-phone-wallpaper)에서 찾을 수 있습니다.

### 일상 사용

아래의 많은 상황은 한 번만 [장면](#scenes)으로 준비해 두면 됩니다: 한 번 탭으로 프로파일, 임시 목표, 기타 설정을 바꾸는 프리셋입니다. **AAPS**는 *운동*, *수면*, *음주*, *목욕* 같은 기본 템플릿을 제공합니다.

#### Hygiene

(what-to-do-when-taking-a-shower-or-bath)=

##### 샤워나 목욕을 할 때는 어떻게 합니까?

샤워나 목욕을 할 때 펌프를 뺄 수 있습니다. 이 짧은 시간 동안은 펌프가 필요하지 않을 수 있지만, IOB 계산이 정확하도록 연결을 해제했다는 것을 AAPS에 알려야 합니다. [위의 설명](#FAQ-disconnect-pump)을 참조하십시오. *목욕* [장면](#scenes) 템플릿이 이 일을 대신합니다.

#### 직장

직업에 따라 근무일에는 다른 치료 계수를 사용할 수도 있습니다. 루프 사용자는 평소 근무일에 맞춰 [프로파일 전환](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)을 고려해야 합니다. 예를 들어 몸을 덜 쓰는 일(예: 책상에 앉아서 하는 일)을 한다면 100%보다 높은 프로파일로, 하루 종일 서서 움직인다면 100%보다 낮은 프로파일로 전환할 수 있습니다. 평소보다 훨씬 이르거나 늦게 일하거나 교대 근무를 한다면, 높거나 낮은 임시 목표 또는 [프로파일 시간 이동](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile)도 고려할 수 있습니다. 두 번째 프로파일(예: '집'과 '근무일')을 만들어 매일 실제로 필요한 프로파일로 프로파일 전환을 하거나, 근무일 설정을 [장면](#scenes)으로 저장할 수도 있습니다.

### Leisure activities

(FAQ-sports)=

#### 운동

루프를 시작하기 전의 운동 습관을 다시 조정해야 합니다. 예전처럼 운동용 탄수화물을 한 번 이상 그냥 먹으면, 폐쇄 루프 시스템이 그것을 인식하고 그에 맞게 보정합니다.

그러면 몸속에 탄수화물이 더 많아지지만, 동시에 루프가 이에 대응하여 인슐린을 주입합니다.

루프를 사용할 때는 다음 단계를 시도해 보십시오:

* [프로파일 전환](#ProfileSwitch-change-percentage)을 100% 미만으로 하십시오: 메인 화면에서 프로파일 이름을 누르고, 둥근 **▶** 버튼을 누른 다음 **퍼센트**와 **기간**을 설정하십시오.
* [활동 임시 목표](#TempTargets-activity-temp-target)를 평소 목표보다 높게 설정하십시오. 퍼센트를 100 % 미만으로 하고 기간을 설정하면, 같은 **활성화** 화면에 두 가지를 한 번에 시작하는 **임시 목표 / 활동** 스위치가 나타납니다.
* SMB를 사용한다면 ["높은 임시 목표에서 SMB 활성화"](#Open-APS-features-enable-smb-with-high-temp-targets)와 ["항상 SMB 활성화"](#Open-APS-features-enable-smb-always)가 꺼져 있는지 확인하십시오.

이 설정은 운동 전 준비와 운동 후 처리가 중요합니다. 운동 전에 시간 여유를 두고 변경하고, 근육에 글리코겐이 다시 채워지는 효과를 고려하십시오.

*운동*과 *운동 후 밤* [장면](#scenes) 템플릿에 이 설정이 묶여 있으므로 한 번 탭으로 시작할 수 있습니다. 정기적으로 같은 시간에 운동한다면(예: 헬스장 운동 수업) [자동화](../DailyLifeWithAaps/Automations.md)로 프로파일 전환과 임시 목표, 또는 장면을 시작하는 것을 고려할 수 있습니다. 위치 기반 자동화도 방법이 될 수 있지만, 사전 준비가 더 어려워집니다.

프로파일 전환의 퍼센트, 활동 임시 목표 값, 변경하기 가장 좋은 시간은 사람마다 다릅니다. 나에게 맞는 값을 찾을 때는 안전한 쪽에서 시작하십시오(낮은 퍼센트와 높은 임시 목표로 시작).

#### 성생활

'자유'롭게 지내기 위해 펌프를 뺄 수 있지만, IOB 계산이 정확하도록 AAPS에 알려야 합니다. [위의 설명](#FAQ-disconnect-pump)을 참조하십시오.

#### Drinking alcohol

알고리즘이 알코올의 영향을 받은 혈당을 올바르게 예측할 수 없으므로, 폐쇄 루프 모드에서 음주는 위험합니다. AAPS의 다음 기능을 사용하여 나에게 맞는 대처 방법을 직접 찾아야 합니다:

* 폐쇄 루프 모드를 비활성화하고 당뇨병을 수동으로 관리하거나
* 높은 임시 목표를 설정하고 UAM을 비활성화하여, 알리지 않은 식사 때문에 루프가 IOB를 늘리는 것을 막거나
* 100%보다 눈에 띄게 낮게 [프로파일 전환](#ProfileSwitch-change-percentage)을 합니다 

*음주* [장면](#scenes) 템플릿은 나만의 방법에 맞게 바꿀 수 있는 시작점입니다.

음주할 때는 항상 CGM을 지켜보고, 필요하면 탄수화물을 먹어 저혈당을 직접 막아야 합니다.

#### Sleeping

##### 모바일 신호와 Wi-Fi 전파 없이 밤에 루프를 사용하려면 어떻게 합니까?

많은 사용자가 밤에 휴대폰을 비행기 모드로 전환합니다. 잘 때도 루프의 도움을 받으려면 다음과 같이 하십시오(CGM 앱이 AAPS와 같은 휴대폰에서 실행될 때만 작동합니다. 예: xDrip, Juggluco, BYODA. Nightscout를 통해 혈당 값을 받는 경우에는 작동하지 않습니다):

1. 휴대폰에서 비행기 모드를 켭니다.
2. 비행기 모드가 켜질 때까지 기다립니다.
3. 블루투스를 켭니다.

이제 전화를 받지 않고 인터넷에도 연결되지 않습니다. 하지만 루프는 계속 작동합니다.

일부 사용자는 휴대폰이 비행기 모드일 때 로컬 브로드캐스트에 문제가 있었습니다(AAPS가 xDrip에서 혈당 값을 받지 못함). xDrip에서 Settings > Inter-app settings > Identify receiver로 이동하여 `info.nightscout.androidaps`를 입력하십시오.

![xDrip Basic Inter-app Settings Identify receiver 화면](../images/xDrip_InterApp_NS.png)

밤에 다른 설정(예: 더 높은 목표)을 원한다면 *수면* [장면](#scenes) 템플릿이 좋은 시작점입니다.

#### 여행

##### 시간대 변경은 어떻게 처리합니까?

Dana R과 Dana R Korean에서는 아무것도 할 필요가 없습니다. 다른 펌프는 [시간대 변경과 서머타임](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) 페이지에서 자세한 내용을 확인하십시오.

### Medical topics

#### Hospitalization

AAPS와 DIY 루프에 대한 정보를 담당 의료진과 공유하고 싶다면 [임상의를 위한 AAPS 일반 소개와 가이드](../UsefulLinks/ClinicianGuideToAaps.md)를 인쇄할 수 있습니다.

#### 내분비내과 의사 진료

##### Reporting

Nightscout 보고서(https://YOUR-NS-SITE.com/report)를 보여 주거나 [Nightscout Reporter](https://nightscout-reporter.zreptil.de/)를 확인하십시오.

## Discord에서 자주 묻는 질문과 답변...

### 내 문제가 여기에 없습니다.

[어디에서 도움을 받을 수 있습니까?](../GettingHelp/WhereCanIGetHelp.md)를 참조하십시오. 스스로 해결 방법을 찾았다면 **이 목록에 추가하도록 알려 주십시오!**

### 빌드와 설치

(FAQ-build-errors)=

#### 앱을 빌드할 때 문제나 오류가 있습니다.

**AAPS**를 빌드하는 방법에 맞는 문제 해결 페이지를 확인하십시오([AAPS 빌드](../SettingUpAaps/BuildingAaps.md) 참조):

* 브라우저로 빌드: [브라우저 빌드: 문제 해결](#aaps-ci-troubleshooting),
* Android Studio로 빌드: [Android Studio 문제 해결](../GettingHelp/TroubleshootingAndroidStudio.md).

(FAQ-build-error-file-name-too-long)=

#### 빌드 오류: file name too long

이 오류는 Android Studio로 빌드할 때 생길 수 있습니다: 파일 이름이 너무 길다는 오류와 함께 빌드가 멈춥니다. 가능한 해결 방법: 소스를 드라이브의 루트 디렉터리에 더 가까운 디렉터리로 옮기십시오(예: "C:\src\AndroidAPS").

Android Studio에서: 프로젝트를 열고 GitHub에서 pull한 뒤 "Gradle"의 동기화(sync)와 인덱싱이 끝났는지 확인하십시오. Rebuild Project를 하기 전에 Build->Clean Project를 실행하십시오. File->Invalidate Caches를 실행하고 Android Studio를 다시 시작하십시오.

(FAQ-running-dev-version)=

#### 경고: 개발 버전을 실행하고 있습니다. 폐쇄 루프가 비활성화되었습니다

엔지니어링 모드 없이 개발(dev) 버전을 실행하면 **AAPS**가 이 메시지를 표시합니다: dev 버전에서는 폐쇄 루프가 엔지니어링 모드에서만 작동합니다.

dev 버전은 실제 루프용이 아니라 테스트용입니다: 계속하기 전에 [개발 브랜치](../AdvancedOptions/DevBranch.md)를 읽으십시오.

엔지니어링 모드를 켜려면:

1. AAPS 디렉터리(설정 마법사에서 선택한 폴더)의 `extra` 하위 폴더(보통 `AAPS/extra`)에 `engineering_mode`라는 이름의 파일을 넣으십시오. 이름만 올바르면 어떤 파일이든 괜찮습니다.
2. **AAPS**를 다시 시작하여 파일을 인식하게 하십시오.

힌트: 기존 로그 파일을 복사하고 이름을 "engineering_mode"로 바꾸십시오(주의: 파일 확장자 없음!).

### Objectives

#### 목표에서 막혀서 도움이 필요합니다.

먼저 [목표 완료하기](../SettingUpAaps/CompletingTheObjectives.md)를 읽으십시오. 그래도 막혀 있다면 질문과 답의 화면을 캡처하여 Discord AAPS 채널에 올리십시오. 어떤 옵션을 선택했는지(또는 선택하지 않았는지)와 그 이유를 꼭 알려 주십시오. 힌트와 도움은 받을 수 있지만, 답은 직접 찾아야 합니다.

### 설정, 비밀번호와 백업

(FAQ-reset-master-password)=

#### 마스터 비밀번호는 어떻게 초기화합니까?

마스터 비밀번호를 잊었다면 펌프 일련번호로 초기화할 수 있습니다:

1. AAPS 디렉터리의 `extra` 하위 폴더(보통 `AAPS/extra`)에 `PasswordReset`이라는 빈 파일(파일 확장자 없음)을 만드십시오.
2. **AAPS**를 다시 시작하십시오. 펌프가 연결되어 있어야 합니다: **AAPS**에 "펌프를 기다리는 중…"이 표시되고, 30초 안에 펌프 일련번호를 읽어야 합니다.
  
  To restart, quit **AAPS** with **menu** (☰) > **Exit**, then open it again. **AAPS** only looks for the file when it starts from scratch. Closing the screen or swiping the app away is not enough, because **AAPS** keeps running in the background. If "Waiting for pump…" does not appear, use **Force stop** in the Android **App info** of **AAPS**, or restart your phone. Installing your current **AAPS** apk again over the installed app also works: it keeps your settings.

3. **AAPS**에 "비밀번호가 설정되었습니다!"가 표시됩니다: 이제 마스터 비밀번호는 **펌프 일련번호**입니다. `PasswordReset` 파일은 자동으로 삭제됩니다.

4. **설정** > **보안** > **마스터 비밀번호**를 열고 새 비밀번호를 설정하십시오.

제시간에 펌프에 연결되지 않으면 아무것도 바뀌지 않습니다: 펌프 연결을 확인하고 다시 시도하십시오.

이것은 마스터 비밀번호만 초기화합니다. 설정, 애플리케이션 또는 볼러스 비밀번호나 PIN은 초기화되지 않지만, 그 대신 언제든지 마스터 비밀번호를 사용할 수 있습니다.

    {admonition} 이전 설정 파일
    :class: warning
    이전 마스터 비밀번호로 내보낸 설정 파일은 그 이전 비밀번호로만 가져올 수 있습니다.

(FAQ-where-are-settings-files)=

#### 설정 파일은 어디에 있습니까?

설정 파일은 [설정 마법사](#SetupWizard-StoragePermission)에서 선택한 AAPS 디렉터리의 `preferences` 하위 폴더에 저장됩니다(예: `/internal storage/AAPS/preferences`). 클라우드 디렉터리(Google Drive)를 설정했다면 내보낸 파일을 그곳에도 저장할 수 있습니다. [백업 만들기와 복원하기](../Maintenance/ExportImportSettings.md)를 참조하십시오.

경고: 비밀번호를 잃어버리지 않도록 주의하십시오. 비밀번호가 없으면 암호화된 설정 파일을 가져올 수 없습니다!

(FAQ-import-settings-earlier-versions)=

#### 이전 버전 AAPS의 설정을 AAPS v3 또는 v4로 어떻게 가져옵니까?

(AAPS v3 또는 v4에서) 가져올 수 있는 설정은 AAPS v2.8x 이상에서 내보낸 설정뿐입니다. v2.8x보다 오래된 AAPS 버전을 사용했거나 v2.8x보다 오래된 설정 내보내기 파일을 사용해야 한다면, 먼저 AAPS v2.8을 설치해야 합니다. v2.x의 이전 설정을 v2.8에서 가져오십시오. 모든 것이 정상인지 확인한 뒤 v2.8에서 설정을 내보낼 수 있습니다. 현재 AAPS 버전을 설치하고 v2.8 설정을 가져오십시오.

이전 버전과 새 버전을 같은 키로 빌드하면 설정을 가져올 필요조차 없습니다. 새 버전을 이전 버전 위에 설치할 수 있습니다.

새로운 목표가 몇 가지 추가되었습니다. 그 목표들을 완료해야 합니다.

(FAQ-delete-treatments)=

#### 처치는 어디에서 삭제할 수 있습니까?

**메뉴**(☰)를 열고 **처치 이력**을 선택하십시오. 항목을 길게 눌러 선택하고, 필요하면 다른 항목도 누른 다음 **휴지통** 아이콘을 누르고 확인하십시오. [처치 이력](#aaps-screens-treatments)을 참조하십시오.

### 휴대폰과 연결 문제

(FAQ-aaps-stops)=

#### AAPS가 매일 거의 같은 시간에 멈춥니다.

* 일부 휴대폰에서는 Google Play Protect가 매일 아침 **AAPS**를 종료할 수 있습니다. 이런 일이 생기면 Google Play 옵션으로 가서 **Google Play Protect**를 끄십시오.
* "청소" 앱(예: CCleaner 등)이 있는지 확인하고 삭제하십시오.
* **AAPS**의 모든 배터리 최적화를 끄십시오(아래의 [배터리 절약](#FAQ-battery-savings) 참조).

(FAQ-battery-savings)=

#### 배터리 절약은 어떻게 설정합니까?

사용하지 않을 때 휴대폰이 **AAPS**와 관련 앱(CGM 앱, 블루투스)을 일시 중지할 수 있습니다. 그러면 **AAPS**가 제 일을 할 수 없고, 센서와 펌프(또는 RileyLink)와의 블루투스 연결이 끊어져 "펌프에 연결할 수 없음" 경고와 통신 오류가 생길 수 있습니다.

**AAPS**, CGM 앱(예: xDrip), 블루투스 시스템 앱의 배터리 최적화를 끄십시오. 방법은 휴대폰 브랜드, 모델, Android 버전에 따라 다릅니다:

* Pixel, Samsung, Huawei 휴대폰은 [배터리 최적화](#generaltroubleshooting-android-related-issues)를 참조하십시오,
* **AAPS**에서 **메뉴**(☰) > **정보**를 열고 **앱이 종료되지 않게 하려면?**을 누르거나, 다른 브랜드는 [Don't kill my app](https://dontkillmyapp.com/) 사이트를 방문하십시오.

배터리 절약이 문제의 원인인지 확실하지 않다면 휴대폰의 모든 배터리 절약 기능을 잠시 끌 수 있습니다: 배터리는 더 빨리 닳지만, 문제가 사라지는지 빨리 알 수 있습니다.

(FAQ-pump-unreachable-alerts)=

#### 하루에 여러 번 또는 밤에 펌프 연결 불가 경고가 나옵니다.

휴대폰이 **AAPS**나 블루투스까지 일시 중지하여 펌프나 RileyLink와의 연결이 끊어질 수 있습니다(위의 [배터리 절약](#FAQ-battery-savings) 참조).

경고가 울리는 시점을 바꿀 수도 있습니다: 메인 화면 오른쪽 위의 **설정**(톱니바퀴) 아이콘을 누른 다음 **로컬 알림** > **펌프 연결 불가 기준값**(30~300분)을 선택하십시오. 펌프 페이지를 확인하십시오: 일부 페이지는 값을 권장합니다. 예: [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md)는 120분.

(FAQ-link-unresponsive)=

#### Link/펌프/Pod가 응답하지 않습니다(RL/OL/EmaLink…)

일부 휴대폰에서는 Link(RL/OL/EmaLink)와의 Bluetooth 연결이 끊어집니다.

일부는 Link가 응답하지 않습니다(AAPS는 연결되었다고 표시하지만 Link가 펌프에 닿지 못하거나 펌프에 명령을 보내지 못합니다).

먼저 펌프 화면의 **RileyLink 초기화** 버튼을 사용해 보십시오(펌프 페이지 참조: [Medtronic](#MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump), [Omnipod Eros](#OmnipodEros-reset-rileylink-config-notes)). 그래도 안 되면 이 모든 부품이 함께 작동하게 하는 가장 쉬운 방법은 다음과 같습니다:

1. Link의 전원을 끕니다.
2. **AAPS**를 종료합니다(**메뉴**(☰) > **종료**).
3. **AAPS** 아이콘을 길게 누르고 Android **App info**(앱 정보)를 연 다음 **Force stop**(강제 종료)을 누르고, **Storage**(저장공간) > **Clear cache**(캐시 지우기)를 누릅니다(저장공간/데이터는 절대 지우지 마십시오!).
4. 드물게 일부 휴대폰은 이 단계에서 재부팅이 필요할 수 있습니다. 재부팅 없이 시도해 볼 수 있습니다.
5. Link의 전원을 켭니다.
6. **AAPS**를 시작합니다.
7. 펌프 화면에서 **RileyLink 페어링**을 누르고 Link를 다시 선택합니다.

### 원격 제어

(FAQ-aapsclient)=

#### AAPSClient 원격 앱 구성 및 사용

**AAPSClient**는 보호자가 **AAPS**를 원격으로 팔로우하고 제어할 수 있게 하는 별도의 앱입니다. **AAPS** v4부터 AAPSClient에서 **AAPS**를 제어하려면 두 앱 사이에 한 번 페어링해야 합니다. 참조:

* [AAPSClient 앱](#aapsclient-app): 설치, 첫 시작, 페어링,
* [마스터 ↔ 클라이언트 제어](#client-master-control): 무엇을 제어할 수 있는지와 페어링 방식,
* [스마트워치에서 AAPSClient 사용](#remotecontrol-smartwatches).

(FAQ-hardened-mode)=

#### Nightscout 웹사이트에서 입력한 처치가 적용되지 않습니다

그것은 [강화 모드](#client-master-control-hardened-mode)입니다. 클라이언트 제어가 켜져 있는 동안 — 간단 모드에서는 항상 — **AAPS**는 페어링된 클라이언트에서 온 변경만 받고, Nightscout 웹사이트나 다른 앱에서 온 변경은 받지 않습니다. 대신 페어링된 **AAPSClient**에서 입력하십시오.

### 알림과 경고

#### 빨간 경고 배지(빨간 삼각형)가 있습니다 / AAPS가 폐쇄 루프를 활성화하지 않습니다 / 루프가 LGS에 머뭅니다 / 노란 삼각형이 있었습니다

혈당 출처 바로가기의 빨간 경고 배지는 AAPS의 보안 기능입니다. 자세한 설명은 [혈당 경고 표시](#aaps-screens-bg-warning-sign)를 참조하십시오.

하단 바의 혈당 출처 바로가기에 있는 빨간 경고 배지(이전 버전의 빨간 삼각형)는 중복 혈당 값이 있어 AAPS가 증분을 정확하게 계산할 수 없다는 뜻입니다. 폐쇄 루프가 **저혈당 주입 정지** 모드로 바뀝니다: 저혈당을 막기 위해 기저를 줄이거나 멈추는 기능은 계속하지만, 교정 인슐린은 주지 않습니다. 경고를 없애려면 중복된 값마다 혈당 값 하나를 삭제해야 합니다. 바로가기를 눌러 [혈당 출처 화면](#aaps-screens-bg-source)을 여십시오: 중복 값은 빨간색으로 강조 표시됩니다. 삭제할 줄 하나를 길게 누르고, 중복된 줄마다 하나씩 체크한 다음 휴지통 아이콘을 누르십시오. 중복 혈당 값이 너무 많으면 AAPS 데이터베이스를 초기화해야 할 수도 있습니다. 이 경우 통계, IOB, COB, 선택한 프로파일도 잃게 됩니다.

경고가 사라져도 AAPS는 스스로 **폐쇄 루프**로 돌아가지 않습니다. 메인 화면의 루프 아이콘을 누르고 다시 **폐쇄 루프**를 선택하십시오.

문제의 가능한 원인: xDrip 및/또는 NS의 혈당 백필(backfill).

이전 버전의 노란 삼각형은 혈당 측정값 사이의 간격이 불안정하다는 뜻이었습니다(혈당 값이 5분마다 규칙적으로 들어오지 않거나 빠진 값이 있음). Libre를 사용하거나 G6 트랜스미터를 교체한 뒤에 자주 생깁니다. **AAPS** 4는 더 이상 이것을 표시하지 않습니다: 백그라운드에서 값을 다시 계산하므로 루프가 올바르게 작동합니다.

### Omnipod DASH

(FAQ-move-dash-pod)=

#### 활성 DASH Pod를 다른 휴대폰으로 옮길 수 있습니까?

Pod 상태는 내보낸 설정에 포함되므로, 옮기기 직전에 설정을 내보내고 다른 휴대폰에서 가져오면 활성 Pod를 다른 휴대폰으로 옮길 수 있습니다. 이것은 공식적으로 지원되지 않으며 Pod를 잃을 위험이 있습니다: 가능하면 Pod가 곧 만료될 때 시도하십시오.

먼저 다음 섹션을 읽으십시오:

* Omnipod DASH 페이지의 [설정 내보내기와 가져오기](#omnipod-dash-export-import), 그리고 [튜브 없는 펌프](#ExportImportSettings-tubeless-pumps): 새 휴대폰에서 **펌프 설정도 교체**를 체크하고, 지금 착용하고 있는 Pod를 사용하는 동안 내보낸 파일을 사용하십시오,
* 나중에 이전 휴대폰에서 Pod를 제거하려면 [Pod 폐기하기](#omnipod-dash-discard-pod)를 읽으십시오. Pod가 폐기될 때까지 이전 휴대폰을 비행기 모드로 두십시오. 그래야 두 휴대폰이 동시에 Pod와 통신하지 않습니다.