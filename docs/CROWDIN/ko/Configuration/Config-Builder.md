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

You can view your sensitivity on the homescreen by selecting SEN and watching the white line. [목표 8](../Usage/Objectives#objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens)을 수행하고 있어야 자동으로 인슐린 주입양을 조절해주는 민감도 감지/[autosens](../Usage/Open-APS-features.html#autosens)를 사용할 수 있습니다. 해당 목표에 도달하기 전에는 사용자의 그래프에서 Autosens 백분율 / 선으로 표시되어 정보 제공의 역할만 합니다.

### Absorption settings

만약 Oref1과 SMB를 사용하고 계시다면 반드시 **min_5m_carbimpact**를 8로 변경하셔야 합니다. 이 값은 CGM 혈당 값에 차이가 있는 경우 혹은 AAPS가 COB를 감쇠하도록 하는 혈당 상승을 신체활동으로 통해 "모두 소모한 경우"에만 이용됩니다. [탄수화물 흡수](../Usage/COB-calculation.rst)가 사용자의 혈액 반응에 따라 역학적으로 계산되지 않을 경우에는 탄수화물에 기본 감쇠값을 이용합니다. 기본적으로, 이것은 안전 장치라고 생각하면 됩니다.

## APS

치료 조정을 위해 원하는 APS 알고리즘을 선택하세요 OpenAPS(OAPS) 탭에서 선택된 알고리즘의 활성화된 정보를 확인할 수 있습니다.

* OpenAPS MA (식사 보조 장치, 2016년도 알고리즘)
* OpenAPS AMA (상급 식사 보조 장치, 2017년도 알고리즘)  
    OpenAPS AMA에 대한 자세한 내용은 [OpenAPS 문서](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama)에서 확인할 수 있습니다. 간단하게 장점을 설명하면, 사용자가 탄수화물을 정확하게 기입했을 경우 식사 bolus를 주입 후 시스템이 좀 더 신속하게 임시 basal을 높일 수 있다는 것입니다.  
    OpenAPS AMA를 사용하기 위해서는 [목표 9](../Usage/Objectives#objective-9-enabling-additional-oref0-features-for-daytime-use-such-as-advanced-meal-assist-ama)를 수행하고 있어야 합니다.
* [OpenAPS SMB](../Usage/Open-APS-features.md)(super micro bolus, 상급 사용자를 위한 가장 최신 알고리즘)  
    OpenAPS SMB를 사용하기 위해서는 [목표 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)을 수행하고 있어야 하며, min_5m_carbimpact를 8로 설정해야 합니다. (구성 관리자 > 민감도 감지 > 민감도 Oref1 설정)

## Loop

AAPS 자동 제어의 허용 여부를 설정합니다.

### Open Loop

AAPS는 이용 가능한 모든 데이터들 (IOB, COB, BG...) 를 계속해서 평가하고, 필요 시 인슐린 주입을 어떻게 조정할 것인지에 대한 처치 제안을 합니다. The suggestions will not be executed automatically (as in closed loop) have to be entered manually into the pump or by using a button in case you are using a compatible pump (Dana R/RS or Accu Chek Combo). This option is for getting to know how AndroidAPS works or if you are using an unsupported pump.

### Closed Loop

AAPS continuously evaluates all available data (IOB, COB, BG...) and automatically adjusts the treatment if necessary (i.e. without further intervention by you) to reach the set target range or value (bolus delivery, temporary basal rate, insulin switch-off to avoid hypo etc.). The Closed Loop works within numerous safety limits, which you can be set individually. Closed Loop is only possible if you are in [Objective 6](../Usage/Objectives#objective-6-starting-to-close-the-loop-with-low-glucose-suspend) or higher and use a supported pump.

## 목표 (학습 프로그램)

AndroidAPS has a number of objectives that you have to fulfill step by step. This should guide you safely through setting up a closed loop system. It guarantees that you have set everything up correctly and understand what the system does exactly. This is the only way you can trust the system.

You should [export your settings](../Usage/ExportImportSettings.rst) (including progress of the objectives) on a regularly basis. In case you have to replace your smartphone later (new purchase, display damage etc.) you can simply import those settings.

See [Objectives](../Usage/Objectives.rst) page for more information.

## 관리

If you view the Treatments (Treat) tab, you can see the treatments that have been uploaded to nightscout. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the [carbs button on the home screen](../Getting-Started/Screenshots.md#carb-correction).

## 일반

### 개요

Displays the current state of your loop and buttons for most common actions (see [section The Homescreen](../Getting-Started/Screenshots.md) for details). Settings can be accessed by clicking the cog wheel.

#### Keep screen on

Option 'Keep screen on' will force Android to keep the screen on at all times. This is useful for presentations etc. But it consumes a lot of battery power. Therefore, it is recommended to connect the smartphone to a charger cable.

#### Buttons

Define which Buttons are shown on the home screen.

* 관리
* 계산기
* 인슐린
* Carbs
* CGM (opens xDrip+)
* Calibration

Furthermore, you can set shortcuts for insulin and carb increments and decide whether the notes field should be shown in treatment dialogues.

#### QuickWizard settings

Create a button for a certain standard meal (carbs and calculation method for the bolus) which will be displayed on the home screen. Use for standard meals frequently eaten. If different times are specified for the different meals you will always have the appropriate standard meal button on the home screen, depending on the time of day.

Note: Button will not be visible if outside the specified time range or if you have enough IOB to cover the carbs defined in the QuickWizard button.

![QuickWizard button](../images/ConfBuild_QuickWizard.png)

#### Advanced settings

Enable super bolus functionality in wizard. Use with caution and do not enable until you learn what it really does. Basically, the basal for the next two hours is added to the bolus and a two hour zero-temp activated. **AAPS looping functions will be disabled - so use with care! If you use SMB AAPS looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](../Usage/Open-APS-features#max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

### 실행

Some buttons to quickly access common features:

* Profiles Switch (see [Profiles page](../Usage/Profiles.md) for more setup information)
* Temporary targets
* Set / cancel temp. basal양
* Extended bolus (DanaR/RS or Combo pump only)
* Record for any specific care entries
    
    * BG check
    * Prime / fill - record pump site change and prime (if not done on pump)
    * CGM sensor insert
    * Pump battery change
    * Note
    * Exercise
* View the current sensor, insulin, canula and pump battery ages
* History browser
* TDD (Total daily dose = bolus + basal per day)

Some doctors use - especially for new pumpers - a basal-bolus-ratio of 50:50. Therefore ratio is calculated as TDD / 2 * TBB (Total base basal = sum of basal rate within 24 hours). Others prefer range of 32% to 37% of TDD for TBB. Like most of these rules-of-thumb it is of limited real validity. Note: Your diabetes may vary!

![Actions tab](../images/ConfBuild_ConfBuild_Actions_b.png)

### SMS Communicator

Allows remote caregivers to control some AndroidAPS features via SMS, see [SMS Commands](../Children/SMS-Commands.rst) for more setup information.

### Food

Displays the food presets defined in the Nightscout food database, see [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) for more setup information.

Note: Entries cannot be used in the AndroidAPS calculator. (View only)

### Wear

Monitor and control AAPS using your Android Wear watch (see [page Watchfaces](../Configuration/Watchfaces.md)). Use settings (cog wheel) to define which variables should be considered when calculating bolus given though your watch (i.e. 15min trend, COB...).

If you want to bolus etc. "Wear 설정"에서 "Watch로부터 컨트롤하기"를 사용합니다.

![Wear settings](../images/ConfBuild_Wear.png)

Through Wear tab or hamburger menu (top left of screen, if tab is not displayed) you can

* Resend all data. Might be helpful if watch was not connected for some time and you want to push the information to the watch.
* Open settings on your watch directly from your phone.

### xDrip Statusline (watch)

Display loop information on your xDrip+ watchface (if you are not using AAPS/[AAPSv2 watchface](../Configuration/Watchfaces.md)

### Ongoing Notification

Displays a summary of current BG, delta, active TBR%, active basal u/h and profile, IOB and split into bolus IOB and basal IOB on the phones's dropdown screen and phone's lock screen.

![AAPS widget](../images/ConfBuild_Widget.png)

### NS Client

Setup sync of your AndroidAPS data with Nightscout.

If **Log app start to NS** is activated each AndroidAPS will be visible in Nightscout. Might be useful to detect problems with the app (i.e. battery optimization not disabled for AAPS) but can flood the Nightscout graph with entries.

#### Alarm options

Activate/deactivate AndroidAPS alarms

![Alarm options](../images/ConfBuild_NSClient_Alarms.png)

#### Connection settings

Offline looping, disable roaming...

If you want to use only a specific WiFi network you can enter its **WiFi SSID **. Several SSIDs can be separated by semicolon. To delete all SSIDs enter a blank space in the field.

![Nightscout connection settings](../images/ConfBuild_ConnectionSettings.png)

#### Advanced settings

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