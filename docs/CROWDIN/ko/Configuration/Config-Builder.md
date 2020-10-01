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

![로컬 프로파일 설정](../images/LocalProfile_Settings.png)

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

로컬 프로파일을 Nightscout에 업로드할 수도 있습니다. The settings can be found in [NSClient preferences](../Configuration/Preferences#nsclient).

![로컬 프로파일을 NS에 업로드하기](../images/LocalProfile_UploadNS2.png)

장점:

* 프로파일 세팅 변경을 위해 인터넷 연결이 필요하지 않음.
* 프로파일을 폰에서 직접 변경 가능.
* 프로파일 변경에서 새 프로파일을 만들 수 있음
* 로컬 프로파일을 Nightscout에 업로드 할 수 있음

단점:

* 없음

### Profile helper

Profile helper offers two functions:

1. Find a profile for kids
2. Compare two profiles or profile switches in order to clone a new profile

Details are explained on the separate [profile helper page](../Configuration/profilehelper.rst).

### NS Profile

NS Profile uses the profiles you have saved on your Nightscout site (https://[yournightscoutsiteaddress]/profile). You can use the [Profile Switch](../Usage/Profiles.md) to change which of those profiles is active, this writes the profile to the pump in case of AndroidAPS failure. This allows you to easily create multiple profiles in Nightscout (i.e.. work, home, sports, holidays, etc.). Shortly after clicking on "Save" they will be transferred to AAPS if your smartphone is online. Even without an Internet connection or without a connection to Nightscout, the Nightscout profiles are available in AAPS once they have been synchronized.

Do a **profile switch** to activate a profile from Nightscout. Press and hold the current profile in the AAPS homescreen at the top (grey field between the light blue "Open/Closed Loop" field and the dark blue target area field) > Profile switch > Select profile > OK. AAPS also writes the selected profile into the pump after the profile change, so that it is available without AAPS in an emergency and continues to run.

장점:

* 다양한 프로파일 설정 가능
* 컴퓨터 또는 태블릿을 통해 쉽게 편집 가능

단점:

* 프로파일 설정에 대한 로컬 변경 사항 없음
* 프로파일을 폰에서 직접 변경할 수 없음

## 인슐린

Select the type of insulin curve you are using. The options 'Rapid-Acting Oref', Ultra-Rapid Oref' and 'Free-Peak Oref' all have an exponential shape. More information is listed in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves), the curves will vary based on the DIA and the time to peak.

The DIA is not the same for each person. That's why you have to test it for yourself. But it must always be at least 5 hours. You can read more about that in the Insulin Profile section of [this](../Getting-Started/Screenshots#insulin-profile) page.

For Rapid-Acting and Ultra-Rapid, the DIA is the only variable you can adjust by yourself, the time to peak is fixed. Free-Peak allows you to adjust both the DIA and the time to peak, and must only be used by advanced users who know the effects of these settings.

The [insulin curve graph](../Getting-Started/Screenshots#insulin-profile) helps you to understand the different curves. You can view it by enabling the tickbox to show it as a tab, otherwise it will be in the hamburger menu.

### Rapid-Acting Oref

* 휴마로그, 노보로그, 노보래피드에 권장됨
* DIA = 최소 5시간
* 최대 피크 타임 = 주사 후 75분 (고정된 값으로 조정할 수 없음)

### Ultra-Rapid Oref

* 피아스프에 권장됨
* DIA = 최소 5시간
* 최대 피크 타임 = 주사 후 55분 (고정된 값으로 조정할 수 없음)

For a lot of people there is practically no noticeable effect of FIASP after 3-4 hours any more, even if 0.0xx units are available as a rule then. This residual amount can still be noticeable during sports, for example. Therefore, AndroidAPS uses minimum 5h as DIA.

![Config Builder Ultra-Rapid Oref](../images/ConfBuild_UltraRapidOref.png)

### Free Peak Oref

With the "Free Peak 0ref" profile you can individually enter the peak time. The DIA is automatically set to 5 hours if it is not specified higher in the profile.

This effect profile is recommended if an unbacked insulin or a mixture of different insulins is used.

## 혈당 출처

Select the blood glucose source you are using - see [BG Source](BG-Source.rst) page for more setup information.

* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* NSClient 혈당
* [미니메드640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de) - 4.15.57 및 최신 버전만 지원됨
* [덱스콤 앱 (패치용)](https://github.com/dexcomapp/dexcomapp/) - xDrip+ 알람을 사용하고 싶은 경우 '혈당 데이터를 xDrip+로 보내기' 선택.
    
    ![구성 관리자 혈당 출처](../images/ConfBuild_BGSource.png)

* [Poctech](http://www.poctechcorp.com/en/contents/268/5682.html)

* [Tomato App](http://tomato.cool/) for MiaoMiao device
* Random BG: Generates random BG data (Demo mode only)

## 펌프

Select the pump you are using.

* [다나 R](DanaR-Insulin-Pump.md)
* 다나 R 한국어 (국내용 다나 R 펌프)
* Dana Rv2 (DanaR pump with unofficial firmware upgrade)
* [다나 RS](DanaRS-Insulin-Pump.md)
* [Accu Chek Insight](Accu-Chek-Insight-Pump.md)
* [Accu Chek Combo](Accu-Chek-Combo-Pump.md) (requires ruffy installation)
* [Medtronic](MedtronicPump.md)
* MDI (receive AAPS suggestions for your multiple daily injections therapy)
* Virtual pump (open loop for pump which don't have any driver yet - AAPS suggestions only)

For dana pumps, use **Advanced settings** to activate BT watchdog if necessary. It switches off bluetooth for one second if no connection to the pump is possible. This may help on some phones where the bluetooth stack freezes.

[Password for Dana RS pump](..Configuration/DanaRS-Insulin-Pump.md) must be entered correctly. Password was not checked in previous versions.

## 민감도 감지

Select the type of sensitivity detection. For more details of different designs please [read on here](../Configuration/Sensitivity-detection-and-COB.md). This will analyze historical data on the go and make adjustments if it recognizes that you are reacting more sensitively (or conversely, more resistant) to insulin than usual. More details about the Sensitivity algorithm can be read in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#auto-sensitivity-mode).

You can view your sensitivity on the homescreen by selecting SEN and watching the white line. Note, you need to be in [Objective 8](../Usage/Objectives#objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens) in order to let Sensitivity Detection/[Autosens](../Usage/Open-APS-features.html#autosens) automatically adjust the amount of insulin delivered. Before reaching that objective, the Autosens percentage / the line in your graph is displayed for information only.

### Absorption settings

If you use Oref1 with SMB you must change **min_5m_carbimpact** to 8. The value is only used during gaps in CGM readings or when physical activity "uses up" all the blood glucose rise that would otherwise cause AAPS to decay COB. At times when [carb absorption](../Usage/COB-calculation.rst) can't be dynamically worked out based on your bloods reactions it inserts a default decay to your carbs. Basically, it is a failsafe.

## APS

Select the desired APS algorithm for therapy adjustments. You can view the active detail of the chosen algorithm in the OpenAPS(OAPS) tab.

* OpenAPS AMA (advanced meal assist, state of the algorithm in 2017)  
    More detail about OpenAPS AMA can be found in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama). In simple terms the benefits are after you give yourself a meal bolus the system can high-temp more quickly IF you enter carbs reliably. 
* [OpenAPS SMB](../Usage/Open-APS-features.md) (super micro bolus, most recent algorithm for advanced users)  
    Note you need to be in [Objective 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) in order to use OpenAPS SMB and min_5m_carbimpact must be set to 8 in Config builder > Sensitivity detection > Sensitivity Oref1 settings.

## Loop

* Switch between Open Loop, Closed Loop and Low Glucose Suspend (LGS).

![Config builder - loop mode](../images/ConfigBuilder_LoopLGS.png)

### Open Loop

* AAPS continuously evaluates all available data (IOB, COB, BG...) and makes treatment suggestions on how to adjust your therapy if necessary. 
* The suggestions will not be executed automatically (as in closed loop) have to be entered manually into the pump or by using a button in case you are using a compatible pump (Dana R/RS or Accu Chek Combo). 
* This option is for getting to know how AndroidAPS works or if you are using an unsupported pump.

### Closed Loop

* AAPS continuously evaluates all available data (IOB, COB, BG...) and automatically adjusts the treatment if necessary (i.e. without further intervention by you) to reach the set target range or value (bolus delivery, temporary basal rate, insulin switch-off to avoid hypo etc.). 
* The Closed Loop works within numerous safety limits, which you can be set individually.
* Closed Loop is only possible if you are in [Objective 6](../Usage/Objectives#objective-6-starting-to-close-the-loop-with-low-glucose-suspend) or higher and use a supported pump.
* Please note: In closed loop mode a single target instead of target range (i.e. 5,5 mmol or 100 mg/dl instead of 5,0 - 7,0 mmol or 90 - 125 mg/dl) is recommended.

### Low Glucose Suspend (LGS)

* maxIOB is set to zero
* This means if blood glucose is dropping it can reduce basal for you.
* But if blood glucose is rising no automatic correction will be made. Your basal rates will remain the same as your selected profile.
* Only if basal IOB is negative (from a previous Low Glucose Suspend) additional insulin will be given to lower BG.

### Minimal request change

* When using open loop you will receive notifications every time AAPS recommends to adjust basal rate. 
* To reduce number of notifications you can either use a wider bg target range or increase percentage of the minimal request rate.
* This defines the relative change required to trigger a notification.

## 목표 (학습 프로그램)

AndroidAPS has a leraning program (objectives) that you have to fulfill step by step. This should guide you safely through setting up a closed loop system. It guarantees that you have set everything up correctly and understand what the system does exactly. This is the only way you can trust the system.

You should [export your settings](../Usage/ExportImportSettings.rst) (including progress of the objectives) on a regularly basis. In case you have to replace your smartphone later (new purchase, display damage etc.) you can simply import those settings.

See [Objectives](../Usage/Objectives.rst) page for more information.

## 관리

If you view the Treatments (Treat) tab, you can see the treatments that have been uploaded to nightscout. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the [carbs button on the home screen](../Getting-Started/Screenshots.md#carb-correction).

## 포괄적인 정보

### 개요

Displays the current state of your loop and buttons for most common actions (see [section The Homescreen](../Getting-Started/Screenshots.md) for details). Settings can be accessed by clicking the cog wheel.

#### 화면을 켜진 상태로 유지

Option 'Keep screen on' will force Android to keep the screen on at all times. This is useful for presentations etc. But it consumes a lot of battery power. Therefore, it is recommended to connect the smartphone to a charger cable.

#### 버튼

Define which Buttons are shown on the home screen.

* 관리
* 계산기
* 인슐린
* Carbs
* CGM (opens xDrip+)
* 보정

Furthermore, you can set shortcuts for insulin and carb increments and decide whether the notes field should be shown in treatment dialogues.

#### 빠른 마법사 설정

Create a button for a certain standard meal (carbs and calculation method for the bolus) which will be displayed on the home screen. Use for standard meals frequently eaten. If different times are specified for the different meals you will always have the appropriate standard meal button on the home screen, depending on the time of day.

Note: Button will not be visible if outside the specified time range or if you have enough IOB to cover the carbs defined in the QuickWizard button.

![QuickWizard button](../images/ConfBuild_QuickWizard.png)

#### Default Temp-Targets

Choose default temp-targets (duration and target). Preset values are:

* eating soon: target 72 mg/dl / 4.0 mmol/l, duration 45 min
* activity: target 140 mg/dl / 7.8 mmol/l, duration 90 min
* hypo: target 125 mg/dl / 6.9 mmol/l, duration 45 min

#### Fill/Prime standard insulin amounts

Choose the default amounts of the three buttons in fill/prime dialogue, depending on the length of your catheter.

#### Range of visualization

Choose the high and low marks for the BG-graph on AndroidAPS overview and smart watch. It is only the visualization, not the target range for your BG. Example: 70 - 180 mg/dl or 3.9 - 10 mmol/l

#### Shorten tab titles

Choose wether the tab titles in AndroidAPS are long (e.g. ACTIONS, LOCAL PROFILE, AUTOMATION) or short (e.g. ACT, LP, AUTO)

#### Show notes field in treatment dialogs

Choose if you want to have a notes field when entering treatments or not.

#### Status lights

Choose if you want to have [status lights](../Configuration/Preferences#status-lights) on overview for canula age, insulin age, sensor age, battery age, reservoir level or battery level. When warning level is reached, the color of the status light will switch to yellow. Critical age will show up in red.

#### Advanced settings

**Deliver this part of bolus wizard result**: When using SMB, many people do not meal-bolus 100% of needed insulin, but only a part of it (e.g. 75 %) and let the SMB with UAM (unattended meal detection) do the rest. In this setting, you can choose a default value for the percenteage the bolus wizard should calculate with. If this setting is 75 % and you had to bolus 10u, the bolus wizard will propose a meal bolus of only 7.5 units.

**Enable super bolus functionality in wizard** (It is different from *super micro bolus*!): Use with caution and do not enable until you learn what it really does. Basically, the basal for the next two hours is added to the bolus and a two hour zero-temp activated. **AAPS looping functions will be disabled - so use with care! If you use SMB AAPS looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](../Usage/Open-APS-features#max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

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

### Automation

User defined automation tasks ('if-then-else'). Please [read on here](../Usage/Automation.rst).

### SMS 통신기

Allows remote caregivers to control some AndroidAPS features via SMS, see [SMS Commands](../Children/SMS-Commands.rst) for more setup information.

### Food

Displays the food presets defined in the Nightscout food database, see [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) for more setup information.

Note: Entries cannot be used in the AndroidAPS calculator. (View only)

### Wear

Monitor and control AAPS using your Android Wear watch (see [page Watchfaces](../Configuration/Watchfaces.md)). Use settings (cog wheel) to define which variables should be considered when calculating bolus given though your watch (i.e. 15min trend, COB...).

Watch에서 bolus 주입 등을 하려면, "Wear 설정"에서 "Watch로부터 컨트롤하기"를 사용합니다.

![Wear settings](../images/ConfBuild_Wear.png)

Through Wear tab or hamburger menu (top left of screen, if tab is not displayed) you can

* Resend all data. Might be helpful if watch was not connected for some time and you want to push the information to the watch.
* Open settings on your watch directly from your phone.

### xDrip Statusline (watch)

Display loop information on your xDrip+ watchface (if you are not using AAPS/[AAPSv2 watchface](../Configuration/Watchfaces.md)

### NSClient

* Setup sync of your AndroidAPS data with Nightscout.
* Settings in [preferences](../Configuration/Preferences#nsclient) can be opened by clicking the cog wheel.

### 정비

Email and number of logs to be send. Normally no change necessary.

### 구성 관리자

Use tab for config builder instead of hamburger menu.