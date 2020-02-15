# 구성 관리자

세팅 설정에 따라 화면 위쪽의 탭 또는 ≡ 버튼에서 구성 관리자 메뉴에 들어갈 수 있습니다.

![구성 관리자 열기](../images/ConfBuild_Open.png)

구성 관리자 (Conf) 탭에서 AndroidAPS의 선택 사항들을 설정 할 수 있습니다. 좌측의 박스 (A) 를 체크하면 사용하고자 하는 기능을 활성화 할 수 있습니다. 우측의 박스 (C) 를 체크하면 이 기능을 탭 (E) 메뉴로 볼 수 있습니다. 우측 박스를 체크하지 않은 경우, 이 기능을 사용하기 위해 화면 좌측 상단에 있는 ≡ 버튼 (D) 를 이용할 수 있습니다.

추가 세팅을 할 수 있는 기능들에는 톱니바퀴 버튼 (B) 이 있고, 이 버튼을 클릭하면 특정 세팅들을 할 수 있는 설정 메뉴로 연결됩니다.

**초기 설정:** AAPS 2.0 버전부터는 설정 마법사가 AndroidAPS 설정 과정을 도와줍니다. 이를 사용하려면 화면 우측 상단의 점 3개 메뉴 (F) 의 '설치 마법사'를 선택해주십시오.

![구성 관리자 박스와 톱니바퀴 버튼](../images/ConfBuild_ConfigBuilder.png)

## 탭 또는 ≡ 버튼

눈 모양 기호 아래의 선택란을 사용하여 해당 프로그램을 여는 방법을 결정할 수 있습니다.

![탭 또는 ≡ 버튼](../images/ConfBuild_TabOrHH.png)

## 프로파일

사용하기 원하는 basal 프로파일을 선택합니다. 설정에 대한 더 많은 정보를 확인하려면 [프로파일](../Usage/Profiles.md) 페이지를 방문하세요.

### 로컬 프로파일 (권장사항)

로컬 프로파일은 폰에 수동으로 입력된 basal 프로파일을 사용합니다. 로컬 프로파일을 선택하면, 필요 시 펌프에서 읽어들인 프로파일 데이터를 변경할 수 있는 새로운 탭 메뉴가 AAPS에 생성됩니다. 프로파일 변경 시, 펌프의 프로파일 1에 변경 내용이 저장됩니다. 인터넷 연결에 영향을 받지 않으므로 로컬 프로파일 사용이 권장됩니다.

장점:

* 프로파일 세팅 변경을 위해 인터넷 연결이 필요하지 않음.
* 프로파일을 폰에서 직접 변경 가능.

단점:

* 하나의 프로파일만 설정 가능.

### NS 프로파일

NS 프로파일은 Nightscout 사이트 저장된 프로파일들을 사용합니다. (https://[yournightscoutsiteaddress]/profile). 여러 프로파일들 중에 하나를 활성화하기 위해 [프로파일 변경](../Usage/Profiles.md) 메뉴를 사용할 수 있고, AndroidAPS가 제대로 동작하지 않을 경우를 대비하여 선택된 프로파일이 펌프에서 저장됩니다. 이것은 Nightscout에서 다양한 프로파일들을 쉽게 만들 수 있도록 합니다 (예를 들어, 직장용, 가정용, 운동용, 휴가용 등등). 스마트폰이 인터넷에 연결되어 있다면, Nightscout에서 프로파일을 작성하고 "저장" 버튼을 누른 후 프로파일이 바로 AAPS로 전송될 것입니다. 인터넷 연결 또는 Nightscout 연결이 없어도, AAPS와 Nightscout가 동기화한 프로파일은 AAPS에서 사용할 수 있습니다.

Nightscout의 프로파일 활성화를 위해서는 **프로파일 변경**을 해주셔야 합니다. AAPS 홈 화면 상단의 현재 프로파일 (옅은 파란색의 "Open/Closed Loop" 필드와 진한 파란색 목표 필드 사이에 있는 회색 필드) 를 길게 누른 후 > 프로파일 변경 > 프로파일 선택 > 확인. 프로파일 변경 후 AAPS는 선택된 프로파일을 펌프에 기록함으로써, 긴급 상황에서 AAPS 없이도 사용 가능하고 계속 작동 되도록 합니다.

장점:

* 다양한 프로파일 설정 가능.
* 컴퓨터 또는 태블릿을 통해 쉽게 편집 가능.

단점:

* 프로파일 설정에 대해 로컬 변경 사항이 없음.
* 프로파일을 폰에서 직접 변경할 수 없음.

### Simple 프로파일

DIA, IC, ISF, Basal 양 및 목표 범위에 대해 단 하나의 시간 설정이 있는 간단한 프로파일 (즉, 하루동안 basal 양 변경 없음). 24 시간 동안 동일한 혈당 관련 요인을 가지고 있지 않는 한 테스트 목적으로 사용될 가능성이 높습니다. "간단한 프로파일" 을 선택하면, AAPS에 프로파일 데이터를 입력 할 수있는 새 탭이 생성됩니다.

## 인슐린

사용하고 있는 인슐린 곡선을 선택하시기 바랍니다. '초속효성 Oref', 초-초속효성 Oref' 및 '사용자 정의 Oref' 옵션 모두 지수 모형입니다. 자세한 내용은 [OpenAPS 문서](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves)에 나와 있으며, DIA 및 피크 시간에 따라 곡선이 달라집니다.

DIA는 사람마다 다릅니다. 그러므로 스스로 시험해봐야 합니다. 단, 이 값은 항상 5시간 이상입니다. [이 페이지](../Getting-Started/Screenshots#insulin-profile)의 인슐린 프로파일 섹션에서 이에 대한 자세한 내용을 읽을 수 있습니다.

초속효성과 초-초속효성의 경우, DIA만 사용자가 직접 조정할 수 있으며 피크 시간은 고정되어 있습니다. 사용자 정의형을 사용하면 DIA와 피크 시간을 모두 조정할 수 있고, 이는 이러한 설정 효과를 이해하고 있는 상급 사용자만 사용해야 합니다.

[ 인슐린 곡선 그래프 ](../Getting-Started/Screenshots#insulin-profile) 는 다른 곡선을 이해하는 데 도움이 됩니다. 탭으로 표시되도록 설정하거나 ≡ 버튼을 눌러 확인할 수 있습니다.

### 초속효성 Oref

* 휴마로그, 노보로그, 노보래피드에 권장됨.
* DIA = 최소 5.0시간
* 최대. 피크 타임 = 주사 후 75분 (고정된 값으로 조정할 수 없음)

### 초-초속효성 Oref

* 피아스프에 권장됩니다.
* DIA = 최소 5시간
* 최대. 피크 타임 = 주사 후 55분 (고정된 값으로 조정할 수 없음)

0.0xx 단위가 유효할지라도, 대부분 많은 사람들이 3-4 시간이 지나면 임상적으로 피아스프의 효과를 느끼지 못합니다. 그러나 이 잔여량은 운동 중 같은 때에는 여전히 효과가 남아있을 수 있습니다. 그러므로 AndroidAPS는 DIA를 최소 5시간으로 설정합니다.

![구성 관리자 초속효성 Oref](../images/ConfBuild_UltraRapidOref.png)

### 사용자 지정 피크 Oref

"사용자 지정 피크" 프로파일에서는 개별적으로 피크 시간을 입력할 수 있습니다. 프로파일에서 DIA를 더 높게 설정하지 않을 경우 DIA는 자동으로 5시간으로 설정됩니다.

이 프로파일은 품질 보증되지 않은 인슐린 또는 다른 종류의 인슐린들을 혼합하여 사용하는 경우 권장됩니다.

## 혈당정보

사용하고 있는 혈당 소스를 선택하십시오. - 설정에 대한 더 많은 정보를 확인하려면 [혈당 소스](BG-Source.rst) 페이지를 방문하세요.

* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* NSClient 혈당
* [미니메드 640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de) - 4.15.57 및 최신 버전만 지원됨.
* [덱스콤 앱 (패치용) ](https://github.com/dexcomapp/dexcomapp/) - xdrip+ 알람을 사용하고 싶은 경우 '혈당 데이터를 xdrip+로 보내기' 선택.
    
    ![구성 관리자 혈당 소스](../images/ConfBuild_BGSource.png)

* [Poctech](http://www.poctechcorp.com/en/contents/268/5682.html)

## 펌프

사용하고 있는 펌프를 선택하시기 바랍니다.

* [다나 R](DanaR-Insulin-Pump.md)
* 다나 R 한국어 (국내용 Dana R 펌프)
* 다나 Rv2 (펌웨어 업그레이드가 된 다나 R 펌프)
* [다나 RS](DanaRS-Insulin-Pump.md)
* [아큐첵 콤보 펌프](Accu-Chek-Combo-Pump.md) (추가적인 설치가 필요함)
* 다회주사요법 (다회주사요법 시행 중 AAPS의 제안을 받는 경우)
* 가상 펌프 (기기가 없는 경우 AAPS 제안만 가능한 open loop으로 사용)

다나 펌프에서 필요한 경우 **고급 설정**의 BT 워치독을 활성화하십시오. 이 기능을 활성화 시, 펌프에 연결이 불가능 할 때 1초 동안 블루투스가 꺼지게 됩니다. 이것은 블루투스 스택이 멈추는 일부 폰에서 도움이 될 수 있습니다.

## 민감도 감지

민감도 감지 유형을 선택하시기 바랍니다. 이 기능은 사용자가 평소보다 인슐린에 더 민감하게 반응하는 것 (또는 반대로 저항성을 나타내는 것) 을 인식하면, 기존의 데이터를 분석하여 민감도를 조정하게 됩니다. 민감도 Oref0 알고리즘에 관한 상세정보는 [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#auto-sensitivity-mode)에서 확인할 수 있습니다.

홈 화면에서 SEN을 선택하고 흰색 선을 참고하여, 사용자의 민감도를 확인할 수 있습니다. Note, you need to be in [Objective 8](../Usage/Objectives#objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens) in order to use Sensitivity Detection/[Autosens](../Usage/Open-APS-features.html#autosens).

### 탄수화물 흡수 설정

만약 SMB와 함께 Oref1을 사용하고 있다면, **min_5m_carbimpact**를 반드시 8로 변경해야 합니다. CGM 측정값 사이에 시간 간격이 있는 경우, 또는 신체 활동을 통해 (사용되지 않았다면) AAPS가 COB를 감쇠시켰을 혈당 상승을 "모두 소모해 버린 경우"에만 이 값이 이용된다. 탄수화물 흡수가 혈액 반응에 근거하여 역학적으로 계산이 되지 않는 경우에는 탄수화물에 기본 감쇠값을 입력합니다. 기본적으로, 이것은 안전 장치라고 생각하면 됩니다.

## APS

치료요법 조정을 위하여 원하는 APS 알고리즘을 선택하십시오. OpenAPS(OAPS) 탭에서 선택된 알고리즘의 활성화된 상세 정보를 확인할 수 있습니다.

* OpenAPS MA (식사 보조 장치, 2016년도 알고리즘)
* OpenAPS AMA (상급 식사 보조 장치, 2017년도 알고리즘)  
    OpenAPS AMA에 대한 자세한 내용은 [OpenAPS 문서](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama)에서 확인할 수 있습니다. 간단하게 장점을 설명하면, 사용자가 탄수화물을 정확하게 기입했을 경우 식사 bolus를 주입 후 시스템이 좀 더 신속하게 임시 basal을 높일 수 있다는 것입니다.  
    OpenAPS AMA를 사용하기 위해서는 [목표 9](../Usage/Objectives#objective-9-enabling-additional-oref0-features-for-daytime-use-such-as-advanced-meal-assist-ama)를 수행하고 있어야 합니다.
* [OpenAPS SMB](../Usage/Open-APS-features.md)(super micro bolus, 상급 사용자를 위한 가장 최신 알고리즘)  
    OpenAPS SMB를 사용하기 위해서는 [목표 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)을 수행하고 있어야 하며, min_5m_carbimpact를 8로 설정해야 합니다. 구성 관리자 > 민감도 감지 > 민감도 Oref1 설정.

## Loop

AAPS 자동 제어의 허용 여부를 정의합니다.

### Open Loop

AAPS는 이용 가능한 모든 데이터들 (IOB, COB, BG...) 를 계속해서 평가하고, 필요 시 치료요법을 어떻게 조정할 것인지에 대한 제안을 합니다. 제안은 (closed loop에서처럼) 자동으로 실행되는 것이 아니며, 펌프에 수동으로 직접 입력하거나 AAPS의 버튼을 사용해서 호환 가능한 펌프 (Dana R/RS 또는 아큐첵 콤보) 에 수동으로 입력해야 합니다. 이 옵션은 AndroidAPS가 어떻게 작동하는지 알기 위해 사용하거나, 지원되지 않는 펌프에서 사용될 수 있습니다.

### Closed Loop

AAPS는 이용 가능한 모든 데이터 (IOB, COB, BG...) 를 계속해서 평가하고, 필요 시 자동으로 (즉, 사용자의 추가 개입 없이) 처치를 조정하여 (예를 들어, bolus 주입, 임시 basal 양, 저혈당 방지하기 위한 인슐린 주입 중단 등) 설정된 목표 범위 또는 값에 도달할 수 있게 합니다. Closed Loop은 다양한 안전 제한치 내에서 작동하며, 이는 개별적으로 설정할 수 있습니다. Closed Loop은 [목표 6](../Usage/Objectives#objective-6-starting-to-close-the-loop-with-low-glucose-suspend) 또는 그 이상의 단계를 수행하고 있으며, 지원되는 펌프를 사용할 때만 가능합니다.

## 목표 (학습 프로그램)

AndroidAPS에는 단계적으로 수행해야 하는 몇 가지 목표가 있습니다. 이것은 closed loop 시스템을 설정하는 과정에서 당신을 안전하게 안내할 것입니다. 모든 것을 올바르게 설정하고, 시스템이 정확히 무엇을 수행하는지 이해하는 것을 확실하게 하는 과정입니다. 이것이 사용자가 시스템을 신뢰할 수 있는 유일한 방법입니다.

정기적으로 (목표의 진행 과정을 포함한) [설정 내보내기](../Usage/ExportImportSettings.rst)를 해야 합니다. 나중에 스마트폰을 교체해야 하는 경우 (새 제품, 디스플레이 손상 등), 해당 설정들을 쉽게 가져올 수 있습니다.

더 많은 정보를 확인하려면 [목표](../Usage/Objectives.rst) 페이지를 방문하세요.

## 관리

관리 (Treat) 탭을 통해 nightscout에 업로드 된 처방을 확인할 수 있습니다. 입력된 정보를 수정 또는 삭제하기를 원할 경우 (예를 들어, 예상된 탄수화물 섭취량보다 적게 식사한 경우), 케어포털 (CP) 탭에서 '삭제'를 선택하고 새로운 값 (필요 시 시간 변경)을 입력하기 바랍니다.

## 일반

### 개요

대부분의 실행을 위한 버튼 및 현재 loop의 상태를 보여줍니다 (상세정보는 [홈 화면 섹션](../Getting-Started/Screenshots.md) 참고). 톱니바퀴 버튼을 클릭하여 설정에 접근할 수 있습니다.

#### 화면을 켜진 상태로 유지

'화면을 켜진 상태로 유지' 옵션은 Android 화면을 항상 켜진 채로 있게 할 것입니다. 이는 프레젠테이션 등에서 유용합니다. 하지만 배터리 전력을 많이 소모하게 됩니다. 따라서 스마트폰을 충전기 케이블에 연결하는 것이 좋습니다.

#### 버튼

홈 화면에 표시될 단추를 설정하십시오.

* 관리
* 계산기
* 인슐린
* 탄수화물
* CGM (xDrip+ 열기)
* 보정

인슐린과 탄수화물에 대한 단축키를 설정할 수 있고, 처치 기록에서의 노트 영역 표시 여부도 설정할 수 있습니다.

#### 빠른 마법사 설정

(Bolus를 위한 탄수화물과 계산 방법 정한) 표준 식사 버튼을 만들어 홈 화면에 표시할 수 있습니다. 자주 먹는 표준 식사에 사용하십시오. 각각의 식사들에 맞춰 시간대를 지정해두면, 시간에 따라 적절한 표준 식사 단추가 홈 화면에 나타나게 됩니다.

참고: 지정된 시간 범위를 벗어나는 경우나 빠른 마법사 버튼에서 설정한 탄수화물 양을 허용하기에 충분한 IOB가 이미 있는 경우에는 버튼이 나타나지 않습니다.

![빠른 마법사 버튼](../images/ConfBuild_QuickWizard.png)

#### 고급 설정

마법사에서 Super bolus 기능을 가능하게 합니다. 주의해서 사용해야 하며, 실제로 무엇을 수행하는지 알기 전까지 사용하지 마십시오. 기본적으로, 다음 2시간 동안의 basal을 bolus에 더하여 주입하고, 0% 임시 basal을 2시간 동안 활성화시킵니다. **AAPS loop 기능을 사용할 수 없으므로 주의하여 사용합니다! SMB를 사용하는 경우 ["SMB 제한을 위한 최대 basal 시간"](../Usage/Open-APS-features#max-minutes-of-basal-to-limit-smb-to)의 설정만큼 AAPS loop 기능을 사용할 수 없고, SMB를 사용하지 않는 경우 loop 기능을 2시간 동안 사용할 수 없습니다.** Super bolus에 대한 [상세정보](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus)가 나와있습니다.

### 실행

일반 기능들의 빠른 실행 버튼:

* 프로파일 변경 (설정에 대한 더 많은 정보는 [프로파일 페이지](../Usage/Profiles.md)에서 확인).
* 임시 목표
* 임시 basal 설정 / 취소 basal양
* 확장 bolus (다나 R/RS 또는 콤보 펌프만 가능)
* 교체 / 채움 (펌프에서 지원될 경우 [다나 R/RS, 콤보, 인사이트])
* 이력 브라우저
* TDD (일 총량 = 하루 bolus + 하루 basal)

일부 의사들은 - 특히, 새로 펌프를 사용하는 사람들에게 - basal-bolus 비율을 50:50으로 적용합니다. 따라서, 비율은 TDD/2 * TBB (total base basal = 24시간 동안 basal 양의 합) 으로 계산됩니다. 다른 의사들은 TDD의 32%에서 37% 정도를 TBB로 선호합니다. 이러한 경험에 따른 대부분의 규칙들은 실질적으로 제한된 유효성을 보입니다. 참고: 우리의 당뇨병 관리는 모두 다릅니다!

![실행 탭](../images/ConfBuild_ConfBuild_Actions.png)

### 케어포털

케어포털 (CP) 탭에서 현재 센서, 인슐린, 캐뉼라, 펌프 배터리 상태를 보여주고, 특정 관리 내용을 기록할 수 있습니다.

참고: 케어포털을 통해 인슐린(즉, 식사 bolus, 교정 bolus...)를 입력하면 **실제 인슐린은 주입되지 않습니다.**

케어포털에 입력된 탄수화물(즉, 탄수화물 교정)은 COB 계산에 사용됩니다.

![케어포털 탭](../images/ConfBuild_CarePortal.png)

### SMS Communicator

SMS를 통해 일부 AndroidAPS 기능을 보호자가 원격으로 조정할 수 있습니다. 설정에 대한 더 많은 정보는 [SMS Commands](../Children/SMS-Commands.rst)에서 확인할 수 있습니다.

### 음식

Nightscout에서 미리 설정한 음식 정보를 사용할 수 있도록 합니다. 설정에 대한 더 많은 정보는 [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods)에서 확인할 수 있습니다.

참고: AndroidAPS 계산기에서는 입력 항목들을 사용할 수 없습니다. (보기 전용)

### 워치

Android Wear watch를 사용하여 AAPS를 모니터하고 제어합니다 ([Watchfaces 페이지](../Configuration/Watchfaces.md) 참고). Watch로 입력한 bolus를 계산할 때 어떤 변수들(즉, 15분 추이, COB...)을 고려할 것인지 설정할 수 있습니다(톱니바퀴 버튼).

Watch에서 bolus 주입 등을 하려면, "Wear 설정"에서 "Watch로부터 컨트롤하기"를 사용합니다.

![Wear 설정](../images/ConfBuild_Wear.png)

Wear 탭 또는 ≡ 버튼(화면의 왼쪽 상단, 탭이 표시되지 않을 경우) 에서 다음을 수행할 수 있습니다.

* 모든 데이터 다시 보내기. Watch가 얼마 동안 연결되어 있지 않아서 정보를 watch에 보내고 싶은 경우에 도움이 됨.
* 폰에서 직접 watch 설정을 실행함.

### xDrip 상태표시라인 (watch)

xDrip+의 watchface에 loop 정보를 표시합니다 (AAPS/[AAPSv2 watchface](../Configuration/Watchfaces.md)를 사용하고 있지 않은 경우).

### 연속 알림

현재의 혈당값, 증분, 활성 TBR%, 활성 basal 양(u/h) 및 프로파일, IOB (bolus IOB, basal IOB) 의 요약을 폰의 알림창 또는 잠금 화면에서 보여줍니다.

![AAPS 위젯](../images/ConfBuild_Widget.png)

### NS Client

AndroidAPS와 Nightscout의 설정을 동기화합니다.

만약 **앱 시작을 NS에 기록하기**를 활성화하면, 실행 시 매번 AndroidAPS가 Nightscout에 보일 것입니다. 앱의 문제(즉, AAPS가 배터리 최적화 제외 안됨)을 찾기에 유용할 수 있으나, 입력 사항이 Nightscout 그래프에 범람할 수 있습니다.

#### 알람 옵션

AndroidAPS 알람을 활성화/비활성화 시킵니다.

![알람 옵션](../images/ConfBuild_NSClient_Alarms.png)

#### 연결 설정

오프라인 loop, 로밍 사용 안함...

특정 WiFi 네트워크만 사용하려면, 해당 **WiFi SSID**를 입력할 수 있습니다. 각각의 SSID를 세미콜론으로 구분할 수 있습니다. 모든 SSID를 삭제하려면 필드에 아무것도 입력하지 않습니다.

![Nightscout 연결 설정](../images/ConfBuild_ConnectionSettings.png)

#### 고급 설정

* Nightscout에서 누락된 혈당 자동 채움
* 에러 발생 시 알림 생성 에러 발생에 대한 nightscout 알림과 로컬 경고(관리 섹션의 케어포털에서도 확인 가능) 을 생성.
* xDrip+ 같은 다른 앱들에 대해 로컬 전송을 활성화 함.
* NS 업로드만 하기 (동기화 안됨)
* NS에 업로드하지 않기
* 항상 basal 절대값 사용하기 -> [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html)을 적절히 사용하려면 활성화되어야 함.

![Nightscout 고급 설정](../images/ConfBuild_NSClient_Advanced.png)

### 정비

로그의 수와 이메일. 일반적으로 변경은 필요하지 않음.

### 구성 관리자

≡ 버튼 대신 구성 관리자를 탭에서 사용합니다.