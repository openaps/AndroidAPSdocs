# Loop 사용자를 위한 FAQ

FAQ에 질문 추가하기: 다음 [설명](../make-a-PR.md)을 따르세요

# 포괄적인 정보

## AndroidAPS 설치 파일을 다운로드 할 수 있습니까?

아니오. AndroidAPS apk 파일을 다운받을 수 없습니다. 본인 스스로 파일을 [빌드](../Installing-AndroidAPS/Building-APK.md)해야만 합니다. 그 이유는 다음과 같습니다:

AndroidAPS 는 인슐린펌프를 제어하고 인슐린을 주입하는 기기입니다. Under current regulations in Europe, all systems classed as IIa or IIb are medical devices that require regulatory approval (a CE mark) which needs various studies and sign offs. 허가 받지 않은 기기를 배포하는 행위는 불법입니다. 세계의 다른 지역에서도 마찬가지로 비슷한 규제가 존재합니다.

This regulation is not restricted just to sales (in the meaning of getting money for something) but applies to any distribution (even giving away for free). Building a medical device for yourself is the only way to use the app within these regulations.

이것이 APK 파일 다운로드를 할 수 없는 이유입니다.

## 어떻게 시작해야 합니까?

우선, **Loop가능한 하드웨어 장치들**이 필요로 합니다:

* A [supported insulin pump](./Pump-Choices.md), 
* [안드로이드 스마트폰](Phones.md) (아이폰은 AndroidAPS에서 지원하지 않습니다 - 아이폰을 사용하려면 Loop를 알아보세요 [iOS Loop](https://loopkit.github.io/loopdocs/)) 
* [연속혈당측정기](../Configuration/BG-Source.rst). 

두번째로, **본인의 하드웨어를 설정해야 합니다**. [단계별 튜토리얼 설정 예시를 확인해 보세요](Sample-Setup.md).

세번째로, **소프트웨어 요소들을 설정하여야 합니다**: AndroidAPS 와 CGM/FGM 소스.

네번째로, **관리 요인에 대해 확인하기 위하여 OpenAPS 참조 설계에 관한 공부를하고이해하여야 합니다**. Closed Loop를 하기 위해 가장 기본적으로 요구되는 사항은, 당신의 Basal양과 탄수화물 비율(carb ratio)가 정확해야한다는 점입니다. Closed Loop의 모든 제안들은 당신 필요한 Basal 적정하다고 가정하고 계산됩니다. 따라서 모든 혈당 피크와 저점은 (운동, 스트레스 등) 다른 일시적인 요인들의 결과이며, 인슐린의 일시적인 조절로 관리가 가능하다고 가정합니다. 안전을 위해, Closed Loop가 조절을 하는데 제한이 있습니다. ([OpenAPS Reference Design](https://openaps.org/reference-design/)에서 최대 허용 임시Basal 양을 확인해보세요.) 이것은 당신이 잘못 설정된 Basal양을 바로잡는 용도로 Loop를 사용해서는 안된다는 것을 의미합니다. 예를 들면, 만약 당신이 식사전에 저혈당에 자주 노출된다면 Basal양을 조정할 필요한 것일 수도 있습니다. You can use [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig) to consider a large pool of data to suggest whether and how basals and/or ISF need to be adjusted, and also whether carb ratio needs to be changed. Or you can test and set your basal the [old fashioned way](https://integrateddiabetes.com/basal-testing/).

## Loop를 위한 실질적인 조언들

### 비밀번호 보호

설정이 쉽게 변경되길 원치 않는다면 설정에 암호를 걸어 보호할 수 있습니다. 설정에서 "설정 비밀번호"를 선택하여 원하는 비밀번호를 입력하면 됩니다. 그 이후로는 설정에 들어갈때마다 비밀번호를 물어볼것입니다. 비밀번호 삭제를 원하면 "설정 비밀번호"를 선택한 후 모든 글자를 삭제하세요.

### 안드로이드 웨어 스마트워치

Bolus를 주입하거나 설정을 변경하기 위해 안드로이드 워치앱을 사용할 계획이라면 AndroidAPS의 알림이 차단되지않은 것을 확인하여야 합니다. 알림을 통하여 확인할 수 있습니다.

### 펌프 일시중지

If you take your pump off for showering, bathing, swimming, sports or other activities you must let AndroidAPS know that no insulin is delivered to keep IOB correct.

The pump can be disconnected using the Loop Status icon on the [AndroidAPS Home Screen](./Screenshots.md#loop-status).

### 단 하나의 CGM 혈당값을 기반으로 판단하는 것이 아닙니다.

For safety, recommendations made are based on not one CGM reading but the average delta. Therefore, if you miss some readings it may take a while after getting data back before AndroidAPS kicks in looping again.

### 추가 참고자료

There are several blogs with good tips to help you understand the practicalities of looping:

* [Fine-tuning Settings](https://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM
* [Why DIA matters](https://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM
* [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
* [Hormones and autosens](https://seemycgm.com/2017/06/06/hormones-2/) See my CGM

## 어떤 응급 장비가 준비되어 있어야 하나요?

You have to have the same emergency equipment with you like every other T1D with insulin pump therapy. When looping with AndroidAPS it is strongly recommended to have the following additional equipment with or near to you:

* Battery pack and cables to charge your smartphone, watch and (if needed) BT reader or Link device
* Pump batteries
* Current [apk](../Installing-AndroidAPS/Building-APK.md) and [preferences files](../Usage/ExportImportSettings.rst) for AndroidAPS and any other apps you use (e.g. xDrip+, BYO Dexcom) both locally and in the cloud (Dropbox, Google Drive).

## How can I safely and securely attach the CGM/FGM?

You can tape it. There are several pre-perforated 'overpatches' for common CGM systems available (search Google, eBay or Amazon). Some loopers use the cheaper standard kinesiology tape or rocktape.

You can fix it. You can also purchase upper arm bracelets that fix the CGM/FGM with a band (search Google, eBay or Amazon).

# AndroidAPS 설정

The following list aims to help you optimize settings. It may be best to start at the top and work to the bottom. Aim to get one setting right before changing another. Work in small steps rather than making large changes at once. You can use [Autotune](https://autotuneweb.azurewebsites.net/) to guide your thinking, although it should not be followed blindly: it may not work well for you or in all circumstances. Note that settings interact with one another - you can have 'wrong' settings that work well together in some circumstances (e.g. if a too-high basal happens to be at the same time as a too-high CR) but do not in others. This means that you need to consider all the settings and check they work together in a variety of circumstances.

## 인슐린 활동 기간(Duration of insulin activity : DIA)

### 설명 & 테스트

The length of time that insulin decays to zero.

This is quite often set too short. Most people will want at least 5 hours, potentially 6 or 7.

### 영향

Too short DIA can lead to low BGs. 그리고 반대의 경우도 마찬가지입니다.

If DIA is too short, AAPS thinks too early that your previous bolus is all consumed, and, at still elevated glucose, will give you more. (Actually, it does not wait that long, but predicts what would happen, and keeps adding insulin). This essentially creates ‘insulin stacking’ that AAPS is unaware of.

Example of a too-short DIA is a high BG followed by AAPS over-correcting and giving a low BG.

## Basal 양 설정(U/h)

### 설명 & 테스트

The amount of insulin in a given hour time block to maintain BG at a stable level.

Test your basal rates by suspending loop, fasting, waiting for say 5 hours after food, and seeing how BG changes. Repeat a few times.

If BG is dropping, basal rate is too high. 그리고 반대의 경우도 마찬가지입니다.

### 영향

Too high basal rate can lead to low BGs. 그리고 반대의 경우도 마찬가지입니다.

AAPS ‘baselines’ against the default basal rate. If basal rate is too high, a ‘zero temp’ will count as a bigger negative IOB than it should. This will lead to AAPS giving more subsequent corrections than it should to bring IOB ultimately to zero.

So, a basal rate too high will create low BGs both with the default rate, but also some hours hence as AAPS corrects to target.

Conversely a basal rate too low can lead to high BGs, and a failure to bring levels down to target.

## 인슐린 민감도(ISF) (mmol/l/U 또는 mg/dl/U)

### 설명 & 테스트

The drop in BG expected from dosing 1U of insulin.

Assuming correct basal, you can test this by suspending loop, checking IOB is zero, and taking a few glucose tablets to get to a stable ‘high’ level.

Then take an estimated amount of insulin (as per current 1/ISF) to get to your target BG.

Be careful as this is quite often set too low. Too low means 1 U will drop BG faster than expected.

### 영향

**Lower ISF** (i.e. 40 instead of 50) meaning insulin drops your BG less per unit. This leads to a more aggressive / stronger correction from the loop with **more insulin**. If the ISF is too low, this can lead to low BGs.

**Higher ISF** (i.e. 45 instead of 35) meaning insulin drops your BG more per unit. This leads to a less aggressive / weaker correction from the loop with **less insulin**. If the ISF is too high, this can lead to high BGs.

**예시:**

* BG is 190 mg/dl (10,5 mmol) and target is 100 mg/dl (5,6 mmol). 
* So, you want correction of 90 mg/dl (= 190 - 110).
* ISF = 30 -> 90 / 30 = 3 units of insulin
* ISF = 45 -> 90 / 45 = 2 units of insulin

An ISF that is too low (not uncommon) can result in ‘over corrections’, because AAPS thinks it needs more insulin to correct a high BG than it actually does. This can lead to ‘roller coaster’ BGs (esp. when fasting). In this circumstance you need to increase your ISF. This will mean AAPS gives smaller correction doses, and this will avoid over-correcting a high BG resulting in a low BG.

Conversely, an ISF set too high can result in under-corrections, meaning your BG remains above target – particularly noticeable overnight.

## 인슐린-탄수화물 비(IC) (g/U)

### 설명 & 테스트

The grams of carbohydrate for each unit of insulin.

Some people also use I:C as abbreviation instead of IC or talk about carb ratio (CR).

Assuming correct basal, you can test by checking IOB is zero and that you are in-range, eating exactly known carbs, and take an estimated amount of insulin based on current insulin to carb ratio. Best is to eat food your normally eat at that time of day and count its carbs precisely.

> **참고:**
> 
> 일부 유럽 국가들에서는 얼마나 많은 인슐린이 필요한지 결정하기 위해 빵 단위(bread units)를 사용합니다. At the beginning 1 bread unit equal to 12g of carbs, later some changed to 10g of carbs.
> 
> 이 빵단위 모델에서는 탄수화물의 양은 고정되어있고 인슐린의 양이 가변적입니다. ("1 빵단위(bread unit)를 처리하기 위해 얼마나 많은 인슐린이 필요합니까?")
> 
> 반대로 IC를 사용할땐 인슐린 양이 고정되어 있고 탄수화물 양이 가변적입니다. ("1유닛의 인슐린이 얼마나 많은 탄수화물(g)을 처리할 수 있습니까?")
> 
> 예:
> 
> Bread unit factor (BU = 12g carbs): 2,4 U/BU -> You need 2,4 units of insulin when you eat one bread unit.
> 
> Corresponding IC: 12g / 2,4 U = 5,0 g/U -> 5,0g carbs can be covered with one unit of insulin.
> 
> BU factor 2,4 U / 12g ===> IC = 12g / 2,4 U = 5,0 g/U
> 
> Conversion tables are available online i.e. [here](https://www.mylife-diabetescare.com/files/media/03_Documents/11_Software/FAS/SOF_FAS_App_KI-Verha%CC%88ltnis_MSTR-DE-AT-CH.pdf).

### 영향

**Lower IC** = less food per unit, i.e. you are getting more insulin for a fixed amount of carbs. Can also be called ‘more aggressive’.

**Higher IC** = more food per unit, i.e. you are getting less insulin for a fixed amount of carbs. Can also be called ‘less aggressive’.

If after meal has digested and IOB has returned to zero, your BG remains higher than before food, chances are IC is too large. Conversely if your BG is lower than before food, IC is too small.

# APS 알고리즘

## 프로파일의 설정엔 다른 DIA가 설정이 되어있음에도 불구하고 왜 "OPENAPS-AMA" 탭에서는 "dia:3"으로 표시되나요?

![AMA 3h](../images/Screenshot_AMA3h.png)

In AMA, DIA actually doesn't mean the 'duration of insulin acting'. It is a parameter, which used to be connected to the DIA. Now, it means, 'in which time should the correction be finished'. It has nothing to do with the calculation of the IOB. In OpenAPS SMB, there is no need for this parameter any longer.

## 프로파일

### DIA (인슐린 활동 시간)을 2-3시간 대신 최소 5시간 이상을 사용하는 이유가 무엇입니까?

Well explained in [this article](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/). Don't forget to `ACTIVATE PROFILE` after changing your DIA.

### 무엇 때문에 나의 혈당이 COB 없이 자주 저혈당이 발생하게 합니까?

First of all, check your basal rate and make a no-carb basal rate test. If it is correct, this behavior is typically caused by a too low ISF. A too low ISF looks typically like this:

![ISF too low](../images/isf.jpg)

### Closed Loop에서 높은 식후 피크의 원인은 무엇입니까?

First of all, check your basal rate and make a no-carb basal rate test. If it is correct and your BG is falling to your target after carbs are fully absorbed, try to set an 'eating soon' temp target in AndroidAPS some time before the meal or think about an appropriate prebolus time with your endocrinologist. If your BG is too high after the meal and still too high after carbs are fully absorbed, think about decreasing your IC with your endocrinologist. If your BG is too high while COB and too low after carbs are fully absorbed, think about increasing your IC and an appropriate prebolus time with your endocrinologist.

# 기타 설정

## Nightscout 설정

### AndroidAPS NSClient가 '허가 되지 않았다'라 표시되며 데이터를 업로드하지 않습니다. 어떻게 해야 하나요?

In NSClient check 'Connection settings'. Maybe you actually are not in an allowed WLAN or you have activated 'Only if charging' and your charging cable is not attached.

## CGM 설정

### 왜 AndroidAPS에서 '혈당 소스가 고급 필터링을 지원하지 않는다'라고 표시되나요?

If you do use another CGM/FGM than Dexcom G5 or G6 in xDrip native mode, you'll get this alert in AndroidAPS OpenAPS-tab. See [Smoothing blood glucose data](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) for more details.

## 펌프

### 펌프를 어디에 착용해야합니까?

There are innumerable possibilities to place the pump. It does not matter if you are looping or not.

### 배터리

Looping can reduce the pump battery faster than normal use because the system interacts through bluetooth far more than a manual user does. It is best to change battery at 25% as communication becomes challenging then. You can set warning alarms for pump battery by using the PUMP_WARN_BATT_P variable in your Nightscout site. Tricks to increase battery life include:

* reduce the length of time the LCD stays on (within pump settings menu)
* reduce the length of time the backlight stays on (within pump settings menu)
* select notification settings to a beep rather than vibrate (within pump settings menu)
* only press the buttons on the pump to reload, use AndroidAPS to view all history, battery level and reservoir volume.
* AndroidAPS app may often be closed to save energy or free RAM on some phones. When AndroidAPS is reinitialized at each startup it establishes a Bluetooth connection to the pump, and re-reads the current basal rate and bolus history. This consumes battery. To see if this is happening, go to Preferences > NSClient and enable 'Log app start to NS'. Nightscout will receive an event at every restart of AndroidAPS, which makes it easy to track the issue. To reduce this happening, whitelist AndroidAPS app in the phone battery settings to stop the app power monitor closing it down.
    
    For example, to whitelist on a Samsung phone running Android Pie:
    
    * Go to Settings -> Device Care -> Battery 
    * Scroll until you find AndroidAPS and select it 
    * De-select "Put app to sleep"
    * ALSO go to Settings -> Apps -> (Three circle symbol in the top-right of the screen) select "special access" -> Optimize battery usage
    * Scroll to AndroidAPS and make sure it is de-selected.

* clean battery terminals with alcohol wipe to ensure no manufacturing wax/grease remains.

* for [Dana R/RS pumps](../Configuration/DanaRS-Insulin-Pump.md) the startup procedure draws a high current across the battery to purposefully break the passivation film (prevents loss of energy whilst in storage) but it doesn't always work to break it 100%. Either remove and reinsert battery 2-3 times until it does show 100% on screen, or use battery key to briefly short circuit battery before insertion by applying to both terminals for a split second.
* see also more tips for [particular types of battery](../Usage/Accu-Chek-Combo-Tips-for-Basic-usage#battery-type-and-causes-of-short-battery-life)

### 주사기 및 캐뉼라 교체

The change of cartridge cannot be done via AndroidAPS but must be carried out as before directly via the pump.

* Long press on "Open Loop"/"Closed Loop" on the Home tab of AndroidAPS and select 'Suspend Loop for 1h'
* Now disconnect the pump and change the reservoir as per pump instructions.
* Also priming and filling tube and cannula can be done directly on the pump. In this case use [PRIME/FILL button](../Usage/CPbefore26#pump) in the actions tab just to record the change.
* Once reconnected to the pump continue the loop by long pressing on 'Suspended (X m)'.

The change of a cannula however does not use the "prime infusion set" function of the pump, but fills the infusion set and/or cannula using a bolus which does not appear in the bolus history. This means it does not interrupt a currently running temporary basal rate. On the Actions (Act) tab, use the [PRIME/FILL button](../Usage/CPbefore26#pump) to set the amount of insulin needed to fill the infusion set and start the priming. If the amount is not enough, repeat filling. You can set default amount buttons in the Preferences > Other > Fill/Prime standard insulin amounts. See the instruction booklet in your cannula box for how many units should be primed depending on needle length and tubing length.

## 배경화면

You can find the AndroidAPS wallpaper for your phone on the [phones page](../Getting-Started/Phones#phone-background).

## 일상생활

### 위생

#### 샤워나 목욕시 어떻게 하나요?

You can remove the pump while taking a shower or bath. For this short period of time you may not need it, but you should tell AAPS that you've disconnected so that the IOB calculations are correct. See [description above](../Getting-Started/FAQ#disconnect-pump).

### 업무

Depending on your job, you may choose to use different treatment factors on workdays. As a looper you should consider a [profile switch](../Usage/Profiles.md) for your typical working day. For example, you may switch to a profile higher than 100% if you have a less demanding job (e.g. sitting at a desk), or less than 100% if you are active and on your feet all day. You could also consider a high or low temporary target or a [time shift of your profile](../Usage/Profiles#time-shift) when working much earlier or later than regular, of if you work different shifts. You can also create a second profile (e.g. 'home' and 'workday') and do a daily profile switch to the profile you actually need.

## 여가 활동

### 스포츠

Loop를 사용하기 전이 가졌던 오랜 운동 습관들을 고쳐야합니다. 운동시 예전과 같이 탄수화물을 섭취한다면, Closed Loop가 이를 인식하고 교정하려고 할 것입니다.

따라서 당신의 체내에 탄수화물이 더 많이 있게될 것이지만, 동시에 Loop가 이에 대응하고 인슐린을 주입하게 됩니다.

Loop시 아래 단계를 시도해보아야 합니다:

* Make a [profile switch](../Usage/Profiles.md) < 100%.
* Set an [activity temp target](../Usage/temptarget#activity-temp-target) above your standard target.
* If you are using SMB make sure ["Enable SMB with high temp targets"](../Usage/Open-APS-features#enable-smb-with-high-temp-targets) and ["Enable SMB always"](../Usage/Open-APS-features#enable-smb-always) are disabled.

Pre- and post-processing of these settings is important. 운동 전 미리 이러한 설정을 변경하고, 근력운동이 주는 영향도 고려하세요.

같은 시간에 운동을 규칙적으로 한다면 (예: 운동 수업 등) 프로파일변경이나 임시목표를 설정하기 위해서 [자동화](../Usage/Automation.rst) 기능을 사용하는 것을 고려해봄직합니다. 위치 기반 자동화도 좋은 생각일 수 있지만 사전처리를 더 어렵게 할 수 있습니다.

프로파일 변경의 퍼센트, 활동 임시 목표 설정 그리고 변경하는 최고의 시간은 모두 개개인에 따라 다릅니다. 당신에게 적합한 설정값을 찾을때 우선 보수적으로 시작하세요 (낮은 퍼센트의 프로파일 변경과 높은 임시목표로 시작해보세요).

### 성교

You can remove the pump to be 'free', but you should tell AndroidAPS so that the IOB calculations are correct. See [description above](../Getting-Started/FAQ#disconnect-pump).

### 음주

Drinking alcohol is risky in closed loop mode as the algorithm cannot predict the alcohol influenced BG correctly. You have to check out your own method for treating this using the following functions in AndroidAPS:

* Deactivating closed loop mode and treating the diabetes manually or
* setting high temp targets and deactivating UAM to avoid the loop increasing IOB due to an unattended meal or
* do a profile switch to noticeably less than 100% 

When drinking alcohol, you always have to have an eye on your CGM to manually avoid a hypoglycemia by eating carbs.

### 수면

#### 전화통화 및 WIFI 사용 없이 야간에 Loop를 어떻게 작동할 수 있습니까?

Many users turn the phone into airplane mode at night. If you want the loop to support you when you are sleeping, proceed as follows (this will only work with a local BG-source such as xDrip+ or ['Build your own Dexcom App'](../Hardware/DexcomG6#if-using-g6-with-build-your-own-dexcom-app), it will NOT work if you get the BG-readings via Nightscout):

1. 폰에서 비행기모드를 작동합니다.
2. 비행기모드 활성화될때까지 기다립니다.
3. 블루투스를 켭니다.

You are not receiving calls now, nor are you connected to the internet. But the loop is still running.

Some people have discovered problems with local broadcast (AAPS not receiving BG values from xDrip+) when phone is in airplane mode. Go to Settings > Inter-app settings > Identify receiver and enter `info.nightscout.androidaps`.

![xDrip+ Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

### 여행

#### 시간대를 변경하는 방법은 무엇입니까?

With Dana R and Dana R Korean you don't have to do anything. For other pumps see [time zone travelling](../Usage/Timezone-traveling.md) page for more details.

## 의료 관련 주제

### 입원

If you want to share some information about AndroidAPS and DIY looping with your clinicians, you can print out the [guide to AndroidAPS for clinicians](../Resources/clinician-guide-to-AndroidAPS.md).

### 내분비과 의사와의 진료 예약

#### 보고서

You can either show your Nightscout reports (https://YOUR-NS-SITE.com/report) or check [Nightscout Reporter](https://nightscout-reporter.zreptil.de/).