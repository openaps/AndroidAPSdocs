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

로컬 프로파일은 [설정 내보내기](../Usage/ExportImportSettings.rst)의 항목입니다. 따라서 안전한 저장공간에 백업이 되어 있는지 확인해야합니다.

![Local Profile settings](../images/LocalProfile_Settings.png)

버튼:

* 초록색 십자 모양 버튼: 추가하기
* 빨간색 가위자 모양 버튼: 삭제하기
* 파란색 화살표 모양 버튼: 복제하기

프로파일에서 무언가를 변경할 경우, 올바른 프로파일에서 편집 중인지 반드시 확인해야 합니다. 프로파일 탭에서는 사용 중인 실제 프로파일이 항상 보여지는 것은 아닙니다. - 예를 들어, 홈 스크린에서 프로파일 탭을 사용하여 프로파일을 변경한 경우, 이들 사이에 연동이 안되기 때문에 프로파일 탭에서 실제로 보여지는 프로파일과 다를 수 있습니다.

#### 프로파일 변경 사항을 복제하기

프로파일 변경 기능으로 새로운 로컬 프로파일을 쉽게 만들 수 있습니다. 이 경우 새로운 로컬 프로파일에 시간 이동과 비율 변경을 적용하게 됩니다.

1. 관리 탭으로 이동하기
2. '프로파일 변경'을 선택하기
3. "복제하기"를 누르기
4. 로컬 프로파일 (LP) 탭 또는 ≡ 메뉴에서 새로운 로컬 프로파일을 편집할 수 있습니다.

![프로파일 변경 사항을 복제하기](../images/LocalProfile_ClonePS.png)

Nightscout 프로파일에서 로컬 프로파일로 전환하려면, NS 프로파일의 프로파일 변경을 선택한 뒤 앞서 설명한 것처럼 프로파일 변경 사항을 복제합니다.

#### 로컬 프로파일을 Nightscout에 업로드하기

로컬 프로파일을 Nightscout에 업로드할 수도 있습니다. NS Client 환경 설정에서 적용할 수 있습니다.

![Upload local profile to NS](../images/LocalProfile_UploadNS2.png)

장점:

* 프로파일 세팅 변경을 위해 인터넷 연결이 필요하지 않음.
* 프로파일을 폰에서 직접 변경 가능.
* 프로파일 변경에서 새 프로파일을 만들 수 있음
* 로컬 프로파일을 Nightscout에 업로드 할 수 있음

단점:

* 없음

### NS 프로파일

NS 프로파일은 Nightscout 사이트 저장된 프로파일들을 사용합니다 (https://[yournightscoutsiteaddress]/profile). 여러 프로파일들 중에 하나를 선택하기 위해서는 '프로파일 변경' 메뉴를 사용할 수 있고 AndroidAPS가 제대로 동작하지 않을 경우 현재 선택된 프로파일이 펌프에서 동작합니다. 이것은 Nightscout에서 다양한 프로파일들을 쉽게 만들 수 있도록 합니다 (예를 들어 직장에서, 가정에서, 운동할때, 휴가를 보낼 시 등등) 스마트폰이 인터넷에 연결되어 있으면, "저장" 버튼을 누른 뒤 얼마되지 않아 저장된 프로파일들이 AAPS로 전송될 것입니다. 인터넷 연결이 안된 상태나 NightScout과 연결되지 않은 상태에 설정하더라도, 한 번 동기화되면 NightScout의 프로파일을 AAPS에서 사용할 수 있습니다.

NightScout에서 프로파일을 활성화하기 위해서는 **프로파일 변경**을 해주셔야 합니다. AAPS 홈스크린 상단에서 현재 프로파일 (밝은 파란색의 "Open / Closed Loop" 영역과 진한 파란색의 "목표" 영역 사이의 회색 영역)을 길게 누르기 > 프로파일 변경 > 프로파일 선택 > 확인. 프로파일 변경 후 AAPS는 선택된 프로파일을 펌프에 기록함으로써 긴급 상황에서 AAPS 없이도 사용 가능하여 끊기지 않고 실행되게 합니다.

장점:

* 다양한 프로파일 설정 가능
* 컴퓨터 또는 태블릿을 통해 쉽게 편집 가능

단점:

* 프로파일 설정에 대한 로컬 변경 사항 없음
* 프로파일을 폰에서 직접 변경할 수 없음

## 인슐린

사용하고 있는 인슐린 그래프를 선택하시기 바랍니다. '초속형성 Oref', 초-초속형성 Oref' 및 '사용자 지정 피크 Oref' 옵션은 모두 지수 모형입니다. 자세한 내용은 [OpenAPS 문서](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves)에 나와 있으며, DIA 및 피크 시간에 따라 곡선이 달라집니다.

DIA는 사람마다 다릅니다. 따라서 스스로 시험해봐야 합니다. 단, 이 값은 반드시 5시간 이상이 되어야합니다. [이 페이지](../Getting-Started/Screenshots#insulin-profile)의 인슐린 프로파일 섹션에서 더 자세한 내용을 확인할 수 있습니다.

초속형과 초-초속형의 경우, DIA만 사용자가 직접 조정할 수 있으며 피크 시간은 정해져 있습니다. 지속형은 DIA와 피크 시간을 모두 조정할 수 있으며, 이러한 설정의 효과를 알고있는 상급 사용자만 사용해야합니다.

[인슐린 곡선 그래프](../Getting-Started/Screenshots#insulin-profile)는 다른 곡선들을 이해하는 데 도움이 됩니다. 체크박스를 활성화하여 탭으로 표시되도록 설정할 수 있으며, 그렇지 않은 경우에는 ≡ 메뉴에서 확인할 수 있습니다.

### 초속효성 Oref

* 휴마로그, 노보로그, 노보래피드에 권장됨
* DIA = 최소 5시간
* 최대 피크 타임 = 주사 후 75분 (고정된 값으로 조정할 수 없음)

### 초-초속효성 Oref

* 피아스프에 권장됨
* DIA = 최소 5시간
* 최대 피크 타임 = 주사 후 55분 (고정된 값으로 조정할 수 없음)

많은 사람들이 실제로 사용해보면, 0.0xx 단위가 유효하더라도 주사 후 3-4시간이 지나면 눈에 띄는 피아스프의 효과는 거의 없습니다. 하지만 이 잔여량으로도 운동과 같은 상황에서는 효과가 나타날 수 있습니다. 그러므로 AndroidAPS는 DIA를 최소 5시간으로 설정합니다.

![Config Builder Ultra-Rapid Oref](../images/ConfBuild_UltraRapidOref.png)

### 사용자 지정 피크 Oref

"사용자 지정 피크 Oref" 프로파일에서는 개개인별로 피크타임을 입력할 수 있습니다. 프로파일에서 DIA를 더 높게 설정하지 않은 경우 자동으로 5시간으로 설정됩니다.

이 프로파일은 품질 보증이 되지 않은 인슐린 또는 다른 인슐린들을 혼합해서 사용하는 경우 권장됩니다.

## 혈당 출처

사용하고 있는 혈당 출처를 선택하세요 - 더 많은 설정 정보를 [혈당 출처](BG-Source.rst) 페이지에서 확인할 수 있습니다.

* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* NSClient 혈당
* [미니메드640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de) - 4.15.57 및 최신 버전만 지원됨
* [덱스콤 앱 (패치용)](https://github.com/dexcomapp/dexcomapp/) - xDrip+ 알람을 사용하고 싶은 경우 '혈당 데이터를 xDrip+로 보내기' 선택.
    
    ![Config Builder BG source](../images/ConfBuild_BGSource.png)

* [Poctech](http://www.poctechcorp.com/en/contents/268/5682.html)

## 펌프

사용하고 있는 펌프를 선택하시기 바랍니다.

* [다나 R](DanaR-Insulin-Pump.md)
* 다나 R 한국어 (국내용 다나 R 펌프)
* 다나 Rv2 (펌웨어 업그레이드 다나 R 펌프)
* [다나 RS](DanaRS-Insulin-Pump.md)
* [아큐첵 콤보 펌프](Accu-Chek-Combo-Pump.md) (추가적인 설치가 필요함)
* 다회주사요법 (다회주사요법 시행 중 AAPS의 제안을 받는 경우)
* 가상 펌프 (기기가 없는 경우 open loop으로 사용 - AAPS 제안만 가능)

다나 펌프에서 필요한 경우 **고급 설정**의 BT 워치독(블루투스 감시장치)를 활성화하십시오. 이 기능을 활성화 시, 펌프 연결이 끊기면 1초 동안 블루투스를 끄게 됩니다. 이것은 블루투스 스택이 멈추는 일부 전화에서 도움이 될 수 있습니다.

## 민감도 감지

민감도 감지 유형을 선택하시기 바랍니다. 이 기능은 사용자가 평소보다 인슐린에 더 민감하게 반응하는 것 (또는 반대로 저항성을 나타내는 것)을 인식하면, 기존의 데이터를 분석하여 민감도를 조정하게 됩니다. 민감도 Oref0 알고리즘에 관한 상세정보는 [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#auto-sensitivity-mode)에서 확인할 수 있습니다.

홈 화면에서 SEN을 선택하고 흰색 선을 참고하여, 사용자의 민감도를 확인할 수 있습니다. [목표 8](../Usage/Objectives#objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens)을 수행하고 있어야 자동으로 인슐린 주입양을 조절해주는 민감도 감지/[autosens](../Usage/Open-APS-features.html#autosens)를 사용할 수 있습니다. 해당 목표에 도달하기 전에는 사용자의 그래프에서 Autosens 백분율 / 선으로 표시되어 정보 제공의 역할만 합니다.

### Absorption settings

만약 Oref1과 SMB를 사용하고 계시다면 반드시 **min_5m_carbimpact**를 8로 변경하셔야 합니다. 이 값은 CGM 혈당 값에 차이가 있는 경우 혹은 AAPS가 COB를 감쇠하도록 하는 혈당 상승을 신체활동으로 통해 "모두 소모한 경우"에만 이용됩니다. [탄수화물 흡수](../Usage/COB-calculation.rst)가 사용자의 혈액 반응에 따라 역학적으로 계산되지 않을 경우에는 탄수화물에 기본 감쇠값을 이용합니다. 기본적으로, 이것은 안전 장치라고 생각하면 됩니다.

## APS

관리 조정을 위해 원하는 APS 알고리즘을 선택하세요 OpenAPS(OAPS) 탭에서 선택된 알고리즘의 활성화된 정보를 확인할 수 있습니다.

* OpenAPS MA (식사 보조 장치, 2016년도 알고리즘)
* OpenAPS AMA (상급 식사 보조 장치, 2017년도 알고리즘)  
    OpenAPS AMA에 대한 자세한 내용은 [OpenAPS 문서](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama)에서 확인할 수 있습니다. 간단하게 장점을 설명하면, 사용자가 탄수화물을 정확하게 기입했을 경우 식사 bolus를 주입 후 시스템이 좀 더 신속하게 임시 basal을 높일 수 있다는 것입니다.  
    OpenAPS AMA를 사용하기 위해서는 [목표 9](../Usage/Objectives#objective-9-enabling-additional-oref0-features-for-daytime-use-such-as-advanced-meal-assist-ama)를 수행하고 있어야 합니다.
* [OpenAPS SMB](../Usage/Open-APS-features.md)(super micro bolus, 상급 사용자를 위한 가장 최신 알고리즘)  
    OpenAPS SMB를 사용하기 위해서는 [목표 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)을 수행하고 있어야 하며, min_5m_carbimpact를 8로 설정해야 합니다. (구성 관리자 > 민감도 감지 > 민감도 Oref1 설정)

## Loop

AAPS 자동 제어의 허용 여부를 설정합니다.

### Open Loop

AAPS는 이용 가능한 모든 데이터들 (IOB, COB, BG...) 를 계속해서 평가하고, 필요 시 처치를 어떻게 조정할 것인지에 대한 관리 제안을 합니다. 제안은 (closed loop에서처럼) 자동으로 실행되는 것이 아니며, 사용자가 수동으로 펌프에 직접 또는 호환 가능한 펌프(Dana R/RS 또는 아큐첵 콤보)의 경우 AAPS의 버튼을 사용해서 입력해야 합니다. 이 옵션은 AndroidAPS가 어떻게 작동하는지 알기 위해 사용하거나, 지원되지 않는 펌프에서 사용할 수 있습니다.

### Closed Loop

AAPS는 이용 가능한 모든 데이터(IOB, COB, BG...)를 계속해서 평가하고, 필요 시 자동으로 (즉, 사용자의 추가 개입 없이) 처치를 조정하여 (예를 들어, bolus 주입, 임시 basal 양, 저혈당 방지하기 위한 인슐린 주입 중단 등) 설정된 목표 범위 또는 값에 도달할 수 있게 합니다. Closed Loop은 다양한 안전 제한치 내에서 작동하며, 이는 개별적으로 설정할 수 있습니다. [목표 6](../Usage/Objectives#objective-6-starting-to-close-the-loop-with-low-glucose-suspend) 또는 그 이상의 단계를 수행하고 있고, 지원되는 펌프를 사용하는 경우에만 Closed Loop이 가능합니다.

## 목표 (학습 프로그램)

AndroidAPS에는 단계적으로 수행해야 하는 몇 가지 목표가 있습니다. 이는 closed loop 시스템을 설정하는 과정에서 사용자를 안전하게 안내해줄 것입니다. 사용자가 모든 것을 올바르게 설정하고, 시스템이 정확히 무엇을 수행하는지 이해하는 것을 확실하게 하는 과정입니다. 이것은 사용자가 시스템을 신뢰할 수 있는 유일한 방법입니다.

정기적으로 (목표의 진행 과정을 포함한) [설정 내보내기](../Usage/ExportImportSettings.rst)를 해야 합니다. 나중에 스마트폰을 교체해야 하는 경우 (새 제품, 디스플레이 손상 등), 해당 설정들을 쉽게 가져올 수 있습니다.

더 많은 정보를 확인하려면 [목표](../Usage/Objectives.rst) 페이지를 방문하세요.

## 관리

관리(Treat)탭에서 nightscout에 업로드 된 처치들을 확인할 수 있습니다. 입력된 정보를 수정 또는 삭제하려면 (예를 들어, 예상한 것보다 탄수화물 섭취량이 적은 경우), 'Remove'를 선택 후 [홈 화면의 탄수화물 버튼](../Getting-Started/Screenshots.md#carb-correction)을 이용하여 새로운 값 (필요 시 시간도 변경)을 입력할 수 있습니다.

## 일반

### 개요

대부분의 실행을 위한 버튼 및 현재 loop의 상태를 보여줍니다 (상세정보는 [홈 화면 섹션](../Getting-Started/Screenshots.md) 참고). 톱니바퀴 버튼을 클릭하여 설정에 접근할 수 있습니다.

#### 화면을 켜진 상태로 유지

'화면을 켜진 상태로 유지' 옵션은 화면이 항상 켜진 채로 있도록 Android를 강제할 것입니다. 이는 프레젠테이션 등에서 유용합니다. 하지만 배터리 전력을 많이 소모하게 됩니다. 따라서 스마트폰을 충전기 케이블에 연결하는 것이 좋습니다.

#### 버튼

홈 화면에 표시될 단추를 설정하십시오.

* 관리
* 계산기
* 인슐린
* Carbs
* CGM (xDrip+ 열기)
* 보정

인슐린과 탄수화물에 대한 단축키를 설정할 수 있고, 관리 기록에서 노트 영역의 표시 여부도 설정할 수 있습니다.

#### 빠른 마법사 설정

(Bolus를 위한 탄수화물 양과 계산 방법을 선택해둔) 표준 식사 버튼을 만들어 홈 화면에 표시할 수 있습니다. 자주 먹는 표준 식사에 사용하십시오. 각각의 식사들에 시간대를 지정해두면, 시간에 따라 적절한 표준 식사 단추가 홈 화면에 나타나게 됩니다.

참고: 지정된 시간 범위를 벗어나는 경우 또는 빠른 마법사 버튼에서 설정한 탄수화물 양을 허용하기에 충분한 IOB가 이미 있는 경우에는 버튼이 나타나지 않습니다.

![QuickWizard button](../images/ConfBuild_QuickWizard.png)

#### 고급 설정

마법사에서 Super bolus 기능을 가능하게 합니다. 주의해서 사용해야 하며, 실제로 무엇을 수행하는지 알기 전까지 사용하지 마십시오. 기본적으로, 다음 2시간 동안의 basal을 bolus에 더하여 주입하고, 0% 임시 basal을 2시간 동안 활성화시킵니다. **AAPS loop 기능을 사용할 수 없으므로 주의하여 사용합니다! SMB를 사용하는 경우 ["SMB 제한을 위한 최대 basal 시간"](../Usage/Open-APS-features#max-minutes-of-basal-to-limit-smb-to)의 설정만큼 AAPS loop 기능을 사용할 수 없고, SMB를 사용하지 않는 경우 loop 기능을 2시간 동안 사용할 수 없습니다.** Super bolus에 대한 [상세정보](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus)가 나와있습니다.

### 실행

일반 기능들의 빠른 실행 버튼:

* 프로파일 변경 (설정에 대한 더 많은 정보는 [프로파일 페이지](../Usage/Profiles.md)에서 확인).
* 임시 목표
* 임시 basal 설정 / 취소 basal 양
* 확장 bolus (다나 R/RS 또는 콤보 펌프만 가능)
* 특정 관리 항목에 대한 기록
    
    * 혈당 체크
    * 프라임 /채우기 - 펌프 위치 변경 및 프라임 기록 (펌프에서 시행되지 않은 경우)
    * CGM 센서 삽입
    * 펌프 배터리 교체
    * 노트
    * 운동
* 현재 센서, 인슐린, 캐뉼라 및 펌프 배터리 수명 확인
* 이력 브라우저
* TDD (일 총량 = 하루 bolus + 하루 basal)

일부 의사들은 - 특히, 새로 펌프를 사용하는 사람들에게 - basal-bolus 비율을 50:50으로 적용합니다. Therefore ratio is calculated as TDD / 2 * TBB (Total base basal = sum of basal rate within 24 hours). 다른 의사들은 TBB가 TDD의 32%에서 37% 범위에 있는 것을 선호합니다. 이러한 경험에 따른 대부분의 규칙들은 실질적으로 제한된 유효성을 보입니다. 참고: 당뇨병 관리는 개인별로 다릅니다!

![Actions tab](../images/ConfBuild_ConfBuild_Actions_b.png)

### SMS 통신기

SMS를 통해 일부 AndroidAPS 기능을 보호자가 원격으로 조정할 수 있습니다. 설정에 대한 더 많은 정보는 [SMS Commands](../Children/SMS-Commands.rst)에서 확인할 수 있습니다.

### 음식

Nightscout에서 미리 설정한 음식 정보를 사용할 수 있도록 합니다. 설정에 대한 더 많은 정보는 [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods)에서 확인할 수 있습니다.

참고: AndroidAPS 계산기에서는 입력 항목들을 사용할 수 없습니다. (보기 전용)

### 워치

Android Wear watch를 사용하여 AAPS를 모니터하고 제어합니다 ([Watchfaces 페이지](../Configuration/Watchfaces.md) 참고). Watch로 주입할 bolus를 계산할 때 어떤 변수들(즉, 15분 추이, COB...)를 고려할 것인지 (톱니바퀴 버튼에서) 설정할 수 있습니다.

Watch에서 bolus 주입 등을 하려면, "Wear 설정"에서 "Watch로부터 컨트롤하기"를 활성화합니다.

![Wear settings](../images/ConfBuild_Wear.png)

Wear 탭 또는 ≡ 버튼(화면의 왼쪽 상단, 탭이 표시되지 않을 경우) 에서 다음을 수행할 수 있습니다.

* 모든 데이터 다시 보내기. Watch와의 연결이 얼마 동안 끊긴 경우 watch에 정보를 보내고 싶을 때 도움이 됨.
* 폰에서 직접 watch 설정을 실행함.

### xDrip 상태표시라인 (워치)

xDrip+의 watchface에 loop 정보를 표시합니다 (AAPS/[AAPSv2 watchface](../Configuration/Watchfaces.md)를 사용하고 있지 않은 경우).

### 상시 알림

현재의 혈당값, 증분, 활성 TBR%, 활성 basal 양(u/h) 및 프로파일, IOB (bolus IOB, basal IOB로 세분화 함)의 요약을 폰의 알림창 또는 잠금 화면에서 보여줍니다.

![AAPS widget](../images/ConfBuild_Widget.png)

### NS Client

AndroidAPS의 설정을 Nightscout과 동기화합니다.

만약 **앱 시작을 NS에 기록하기**를 활성화하면, 실행할 때마다 AndroidAPS가 Nightscout에 나타날 것입니다. 앱의 문제 (즉, AAPS가 배터리 최적화 제외 안됨)을 찾기에 유용할 수 있으나, 입력 사항이 Nightscout 그래프에 범람할 수 있습니다.

#### 알람 옵션

AndroidAPS 알람을 활성화/비활성화 시킵니다.

![알람 옵션](../images/ConfBuild_NSClient_Alarms.png)

#### 연결 설정

오프라인 loop, 로밍 사용 안함...

특정 WiFi 네트워크만 사용하려면, 해당 **WiFi SSID**를 입력할 수 있습니다. Several SSIDs can be separated by semicolon. To delete all SSIDs enter a blank space in the field.

![Nightscout connection settings](../images/ConfBuild_ConnectionSettings.png)

#### 고급 설정

* Auto backfill missing BGs from Nightscout
* Create announcement from errors Create Nightscout announcement for error dialogs and local alerts (also viewable in careportal in treatments section)
* Enable local broadcast to other apps like xDrip+
* NS upload only (sync disabled)
* No upload to NS
* Always use basal absolute values -> Must be activated if you want to use [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) properly.

![Nightscout advanced settings](../images/ConfBuild_NSClient_Advanced.png)

### Maintenance

Email and number of logs to be send. Normally no change necessary.

### 구성 관리자

Use tab for config builder instead of hamburger menu.