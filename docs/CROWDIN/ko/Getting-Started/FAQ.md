# Loop 사용자를 위한 FAQ

FAQ에 질문 추가하기: 다음 [설명](../make-a-PR.md)을 따르세요

# 일반

## AndroidAPS 설치 파일을 다운로드 할 수 있습니까?

아니오. AndroidAPS apk 파일을 다운받을 수 없습니다. 본인 스스로 파일을 [빌드](../Installing-AndroidAPS/Building-APK.md)해야만 합니다. 그 이유는 다음과 같습니다:

AndroidAPS 는 인슐린펌프를 제어하고 인슐린을 주입하는 기기입니다. 유럽에의 현제 법률 규정에 따르면 Class IIa 혹은 Class IIb 단계의 의료기기는 많은 연구와 검증을 요하는 규제승인(CE마크)를 획득하여야 합니다. 허가 받지 않은 기기를 배포하는 행위는 불법입니다. 세계의 다른 지역에서도 마찬가지로 비슷한 규제가 존재합니다.

이 규정은 (금전적인 대가에 대한 의미로서) 판매하는 것에만 적용되는 것이 아닙니다. 다른 어떠한 종유의 (금전적인 대가 없는) 배포에도 역시 적용됩니다. 본인 스스로 이 장치를 빌드하는 것이 이러한 규제에 영향을 받지 않을 유일한 방법입니다.

이것이 APK 파일 다운로드를 할 수 없는 이유입니다.

## 어떻게 시작해야 합니까?

우선, **Loop가능한 하드웨어 장치들**이 필요로 합니다:

* [지원되는 인슐린펌프](Pump-Choices.md), 
* [안드로이드 스마트폰](Phones.md) (아이폰은 AndroidAPS에서 지원하지 않습니다 - 아이폰을 사용하려면 Loop를 알아보세요 [iOS Loop](https://loopkit.github.io/loopdocs/)) 
* [연속혈당측정기](../Configuration/BG-Source.rst). 

두번째로, **본인의 하드웨어를 설정해야 합니다**. [단계별 튜토리얼 설정 예시를 확인해 보세요](Sample-Setup.md).

세번째로, **소프트웨어 요소들을 설정하여야 합니다**: AndroidAPS 와 CGM/FGM 소스.

네번째로, **관리 요인에 대해 확인하기 위하여 OpenAPS 참조 설계에 관한 공부를하고이해하여야 합니다**. Closed Loop를 하기 위해 가장 기본적으로 요구되는 사항은, 당신의 Basal양과 탄수화물 비율(carb ratio)가 정확해야한다는 점입니다. Closed Loop의 모든 제안들은 당신 필요한 Basal 적정하다고 가정하고 계산됩니다. 따라서 모든 혈당 피크와 저점은 (운동, 스트레스 등) 다른 일시적인 요인들의 결과이며, 인슐린의 일시적인 조절로 관리가 가능하다고 가정합니다. 안전을 위해, Closed Loop가 조절을 하는데 제한이 있습니다. ([OpenAPS Reference Design](https://openaps.org/reference-design/)에서 최대 허용 임시Basal 양을 확인해보세요.) 이것은 당신이 잘못 설정된 Basal양을 바로잡는 용도로 Loop를 사용해서는 안된다는 것을 의미합니다. 예를 들면, 만약 당신이 식사전에 저혈당에 자주 노출된다면 Basal양을 조정할 필요한 것일 수도 있습니다. Autotune</ 0>을 사용하면, 많은 양의 데이터를 기반으로 Basal 및 ISF 조정이 필요한지 혹은 탄수화물 비율(carb ratio)이 변경될 필요가 있는지를 알 수 있습니다. 혹은 [전통적인 방법](http://integrateddiabetes.com/basal-testing/)을 통해서 당신의 Basal량을 테스트하고 설정할 수도 있습니다.</p> 

## Loop를 위한 실질적인 조언들

### 비밀번호 보호

설정이 쉽게 변경되길 원치 않는다면 설정에 암호를 걸어 보호할 수 있습니다. 설정에서 "설정 비밀번호"를 선택하여 원하는 비밀번호를 입력하면 됩니다. 그 이후로는 설정에 들어갈때마다 비밀번호를 물어볼것입니다. 비밀번호 삭제를 원하면 "설정 비밀번호"를 선택한 후 모든 글자를 삭제하세요.

### 안드로이드 웨어 스마트워치

Bolus를 주입하거나 설정을 변경하기 위해 안드로이드 워치앱을 사용할 계획이라면 AndroidAPS의 알림이 차단되지않은 것을 확인하여야 합니다. 알림을 통하여 확인할 수 있습니다.

### 펌프 일시중지

샤워/목욕/수영/운동 등을 위해 펌프를 분리한다면. 그 기간동안 인슐린이 주입되지 않았다는 것을 AndroidAPS에게 알려 올바른 IOB를 유지시켜야합니다.

* 홈 화면의 상단의 'Closed loop' (또는 'Open Loop') 버튼을 길게 누릅니다. 
* **'X분(시간) 동안 펌프 일시중지'**을 선택합니다
* 이는 해당 시간동안 Basal을 0으로 설정할 것입니다.
* 일시중지를 위한 최소시간은 펌프에서 설정될 수 있는 최소시간의 임시Basal 시간으로 인한 것입니다. 따라서 짧은 기간 동안 연결을 끊으려면 펌프에 사용 가능한 가장 짧은 기간을 선택하십시오. 그런 다음 아래 설명에 따라 펌프를 수동으로 다시 연결하십시오.
* 'Closed Loop' (또는 'Open Loop') 버튼이 '연결 끊어짐(xx분)'으로 남은시간과 함께 변경되고 버튼의 색상도 붉은색으로 변합니다.
* AAPS가 선택된 시간이후 자동으로 재연결되게 되고 Closed Loop 역시 자동으로 다시 작동됩니다.
    
    ![펌프 일시중지](../images/PumpDisconnect.png)

* 선택된 시간이 너무 길다면 수동으로 재연결 할 수 있습니다.

* 붉은색의 '연결 끊어짐(xx분)' 버튼을 길게 누릅니다.
* '펌프 재연결'을 선택하세요
    
    ![Reconnect pump](../images/PumpReconnect.png)

### 단 하나의 CGM 혈당값을 기반으로 판단하는 것이 아닙니다.

안전상의 이유로, CGM에서 들어오는 하나의 혈당값뿐만 아니라 평균 혈당 증분까지 기반으로 하여 판단하게 됩니다. 따라서 센서에서 일부 혈당이 누락되면 AndroidAPS가 필요한 새 데이터를 수집한 다음를 Loop를 다시 시작하는 데 시간이 걸릴 수 있습니다.

### 추가 참고자료

Loop를 사용하는데 있어서 실질적으로 필요한 사항에 대해 이해하는데 도움이 될만한 좋은 팁들이 있는 여러 블로그들이 있습니다.

* [설정 미세 조정하기](http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM
* [왜 DIA가 중요한가요?](http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM
* [식사후 혈당의 Spike(급등락) 제어하기](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
* [호르몬과 Autosens](http://seemycgm.com/2017/06/06/hormones-2/) See my CGM

## What emergency equipment is recommended to take with me?

First of all, you have to take the same emergency equipment with you like every other T1D with insulin pump therapy. As looping with AndroidAPS, it is strongly recommended to have the following additional equipment with or near to you:

* Battery pack for the energy of your smartphone, wear and (maybe) BT reader
* Backup in the cloud (Dropbox, Google Drive...) of the apps you use like: your latest AndroidAPS-APK and your key store password, AndroidAPS settings file, xDrip settings file, patched Dexcom app, ...
* Pump batteries

## How to safely attach the CGM/FGM?

You can tape it: There are getting sold pre-perforated 'overpatches' for common CGM systems (ask Google or ebay). Some loopers use the cheaper standard kinesiology tape or rocktape.

You can fix it: There are getting sold upper arm bracelets that fix the CGM/FGM with a rubber band (ask Google or ebay).

# AndroidAPS settings

The following list aims to help you optimize settings. It may be best to start at the top and work to the bottom. Aim to get one setting right before changing another. Work in small steps rather than making large changes at once. You can use [Autotune](https://autotuneweb.azurewebsites.net/) to guide your thinking, although it should not be followed blindly: it may not work well for you or in all circumstances. Note that settings interact with one another - you can have 'wrong' settings that work well together in some circumstances (e.g. if a too-high basal happens to be at the same time as a too-high CR) but do not in others. This means that you need to consider all the settings and check they work together in a variety of circumstances.

## Duration of insulin activity (DIA)

### Description & testing

The length of time that insulin decays to zero.

This is quite often set too short. Most people will want at least 5 hours, potentially 6 or 7.

### Impact

Too short DIA can lead to low BGs. And vice-versa.

If DIA is too short, AAPS thinks too early that your previous bolus is all consumed, and, at still elevated glucose, will give you more. (Actually, it does not wait that long, but predicts what would happen, and keeps adding insulin). This essentially creates ‘insulin stacking’ that AAPS is unaware of.

Example of a too-short DIA is a high BG followed by AAPS over-correcting and giving a low BG.

## Basal rate schedule (U/h)

### Description & testing

The amount of insulin in a given hour time block to maintain BG at a stable level.

Test your basal rates by suspending loop, fasting, waiting for say 5 hours after food, and seeing how BG changes. Repeat a few times.

If BG is dropping, basal rate is too high. And vice-versa.

### Impact

Too high basal rate can lead to low BGs. And vice-versa.

AAPS ‘baselines’ against the default basal rate. If basal rate is too high, a ‘zero temp’ will count as a bigger negative IOB than it should. This will lead to AAPS giving more subsequent corrections than it should to bring IOB ultimately to zero.

So, a basal rate too high will create low BGs both with the default rate, but also some hours hence as AAPS corrects to target.

Conversely a basal rate too low can lead to high BGs, and a failure to bring levels down to target.

## Insulin sensitivity factor (ISF) (mmol/l/U or mg/dl/U)

### Description & testing

The drop in BG expected from dosing 1U of insulin.

Assuming correct basal, you can test this by suspending loop, checking IOB is zero, and taking a few glucose tablets to get to a stable ‘high’ level.

Then take an estimated amount of insulin (as per current 1/ISF) to get to your target BG.

Be careful as this is quite often set too low. Too low means 1 U will drop BG faster than expected.

### Impact

**Lower ISF** (i.e. 40 instead of 50) = more aggressive / stronger leading to a bigger drop in BGs for each unit of insulin. If too low, this can lead to low BGs.

**Higher ISF** (i.e. 45 instead of 35) = less aggressive / weaker leading to a smaller drop in BGs for each unit of insulin. If too high, this can lead to high BGs.

**Example:**

* BG is 190 mg/dl (10,5 mmol) and target is 100 mg/dl (5,6 mmol). 
* So, you want correction of 90 mg/dl (= 190 - 110).
* ISF = 30 -> 90 / 30 = 3 units of insulin
* ISF = 45 -> 90 / 45 = 2 units of insulin

An ISF that is too low (not uncommon) can result in ‘over corrections’, because AAPS thinks it needs more insulin to correct a high BG than it actually does. This can lead to ‘roller coaster’ BGs (esp. when fasting). In this circumstance you need to increase your ISF. This will mean AAPS gives smaller correction doses, and this will avoid over-correcting a high BG resulting in a low BG.

Conversely, an ISF set too high can result in under-corrections, meaning your BG remains above target – particularly noticeable overnight.

## Insulin to carb ratio (IC) (g/U)

### Description & testing

The grams of carbohydrate for each unit of insulin.

Some people also use I:C as abbreviation instead of IC or talk about carb ratio (CR).

Assuming correct basal, you can test by checking IOB is zero and that you are in-range, eating exactly known carbs, and take an estimated amount of insulin based on current insulin to carb ratio. Best is to eat food your normally eat at that time of day and count its carbs precisely.

> **NOTE:**
> 
> In some European countries bread units were used for determination of how much insulin is needed for food. At the beginning 1 bread unit equaled 12g of carbs, later some changed to 10g of carbs.
> 
> In this model the amount of carbs was fixed and the amount of insulin was variable. ("How much insulin is needed to cover one bread unit?")
> 
> When using IC the amount of insulin is fixed and the amount of carbs is variable. ("How many g of carbs can be covered by one unit of insulin?")
> 
> Example:
> 
> Bread unit facor (BU = 12g carbs): 2,4 -> You need 2,4 units of insulin when you eat one bread unit.
> 
> Corresponding IC: 12 / 2,4 = 5,2 -> 5,2g carbs can be covered with one unit of insulin.
> 
> Conversion tables are available online i.e. [here](https://www.mylife-diabetescare.com/files/media/03_Documents/11_Software/FAS/SOF_FAS_App_KI-Verha%CC%88ltnis_MSTR-DE-AT-CH.pdf).

### Impact

**Lower IC** = less food per unit, i.e. you are getting more insulin for a fixed amount of carbs. Can also be called ‘more aggressive’.

**Higher IC** = more food per unit, i.e. you are getting less insulin for a fixed amount of carbs. Can also be called ‘less aggressive’.

If after meal has digested and IOB has returned to zero, your BG remains higher than before food, chances are IC is too large. Conversely if your BG is lower than before food, IC is too small.

# APS algorithm

## Why does it show "dia:3" in the "OPENAPS AMA"-tab even though I have a different DIA in my profile?

![AMA 3h](../images/Screenshot_AMA3h.png)

In AMA, DIA actually doesn't mean the 'duration of insulin acting'. It is a parameter, which used to be connected to the DIA. Now, it means, 'in which time should the correction be finished'. It has nothing to do with the calculation of the IOB. In OpenAPS SMB, there is no need for this parameter anymore.

## 프로파일

### Why using min. 5h DIA (insulin end time) instead of 2-3h?

Well explained in [this article](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/). Don't forget to `ACTIVATE PROFILE` after changing your DIA.

### What causes the loop to frequently lower my BG to hypoglycemic values without COB?

First of all, check your basal rate and make a no-carb basal rate test. If it is correct, this behavior is typically caused by a too low ISF. A too low ISF looks typically like this:

![ISF too low](../images/isf.jpg)

### What causes high postprandial peaks in closed loop?

First of all, check your basal rate and make a no-carb basal rate test. If it is correct and your BG is falling to your target after carbs are fully absorbed, try to set an 'eating soon' temp target in AndroidAPS some time before the meal or think about an appropriate prebolus time with your endocrinologist. If your BG is too high after the meal and still too high after carbs are fully absorbed, think about decreasing your IC with your endocrinologist. If your BG is too high while COB and too low after carbs are fully absorbed, think about increasing your IC and an appropriate prebolus time with your endocrinologist.

# Other settings

## Nightscout settings

### AndroidAPS NSClient says 'not allowed' and does not upload data. What can I do?

In NSClient check 'Connection settings'. Maybe you actually are not in an allowed WLAN or you have activated 'Only if charging' and your charging cable is not attached.

## CGM settings

### Why does AndroidAPS say 'BG source doesn't support advanced filtering'?

If you do use another CGM/FGM than Dexcom G5 or G6 in xDrip native mode, you'll get this alert in AndroidAPS OpenAPS-tab. See [Smoothing blood glucose data](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) for more details.

## 펌프

### Where to place the pump?

There are innumerable possibilities to place the pump. It does not matter if you are looping or not.

### Batteries

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

### Changing reservoirs and cannulas

The change of cartridge cannot be done via AndroidAPS but must be carried out as before directly via the pump.

* Long press on "Open Loop"/"Closed Loop" on the Home tab of AndroidAPS and select 'Suspend Loop for 1h'
* Now disconnect the pump and change the reservoir as per pump instructions.
* Once reconnected to the pump continue the loop by long pressing on 'Suspended (X m)'.

The change of a canula however does not use the "prime infusion set" function of the pump, but fills the infusion set and/or canula using a bolus which does not appear in the bolus history. This means it does not interrupt a currently running temporary basal rate. On the Actions (Act) tab, use the PRIME/FILL button to set the amount of insulin needed to fill the infusion set and start the priming. If the amount is not enough, repeat filling. You can set default amount buttons in the Preferences > Other > Fill/Prime standard insulin amounts. See the instruction booklet in your canula box for how many units should be primed depending on needle length and tubing length.

## Wallpaper

You can find the AndroidAPS wallpaper for your phone on the [phones page](../Getting-Started/Phones#phone-background).

## Daily usage

### Hygiene

#### What to do when taking a shower or bath?

You can remove the pump while taking a shower or bath. For this short period of time you'll usually won't need it. But you should tell it to AAPS so that the IOB calculations are right.

See [description above](../Getting-Started/FAQ#disconnect-pump).

### Work

Depending on the kind of your job, maybe you use different treatment factors on workdays. As a looper you should think of a [profile switch](../Usage/Profiles.md) for your estimated working day (e.g. more than 100% for 8h when sitting around or less than 100% when you are active), a high or low temporary target or a [time shift of your profile](../Usage/Profiles#time-shift) when standing up much earlier or later than regular. If you are using [Nightscout profiles](../Configuration/Config-Builder#ns-profile), you can also create a second profile (e.g. 'home' and 'workday') and do a daily profile switch to the profile you actually need.

## Leisure activities

### Sports

You have to rework your old sports habits from pre-loop times. If you simply consume one or more sports carbs as before, the closed loop system will recognize them and correct them accordingly.

So, you would have more carbohydrates on board, but at the same time the loop would counteract and release insulin.

When looping you should try these steps:

* Make a [profile switch](../Usage/Profiles.md) < 100%.
* Set an [activity temp target](../Usage/temptarget#activity-temp-target) above your standard target.
* If you are using SMB make sure ["Enable SMB with high temp targets"](../Usage/Open-APS-features#enable-smb-with-high-temp-targets) and ["Enable SMB always"](../Usage/Open-APS-features#enable-smb-always) are disabled.

Pre- and postprocessing of these settings is important. Make the changes in time before sport and consider the effect of muscle filling.

If you do sports regularly at the same time (i.e. sports class in your gym) you can consider using [automation](../Usage/Automation.rst) for profile switch and TT. Location based automation might also be an idea but makes preprocessing more difficult.

The percentage of the profile switch, the value for your activity temp target and best time for the changes are individual. Start on the safe side if you are looking for the right value for you (start with lower percentage and higher TT).

### Sex

You can remove the pump to be 'free', but you should tell it to AAPS so that the IOB calculations are right.

See [description above](../Getting-Started/FAQ#disconnect-pump).

### Drinking alcohol

Drinking alcohol is risky in closed loop mode as the algorithm cannot predict the alcohol influenced BG correctly. You have to check out your own method for treating this using the following functions in AndroidAPS:

* Deactivating closed loop mode and treating the diabetes manually or
* setting high temp targets and deactivating UAM to avoid the loop increasing IOB due to an unattended meal or
* do a profile switch to noticeably less than 100% 

When drinking alcohol, you always have to have an eye on your CGM to manually avoid a hypoglycemia by eating carbs.

### Sleeping

#### How can I loop during the night without mobile and WIFI radiation?

Many users turn the phone into airplane mode at night. If you want the loop to support you when you are sleeping, proceed as follows (this will only work with a local BG-source such as xDrip+ or patched Dexcom app, it will NOT work if you get the BG-readings via Nightscout):

1. Turn on airplane mode in your mobile.
2. Wait until the airplane mode is active.
3. Turn on Bluetooth.

You are not receiving calls now, nor are you connected to the internet. But the loop is still running.

Some people have discovered problems with local broadcast (AAPS not receiving BG values from xDrip+) when phone is in airplane mode. Go to Settings > Inter-app settings > Identify receiver and enter `info.nightscout.androidaps`.

![xDrip+ Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

### Travelling

#### How to deal with time zone changes?

With Dana R and Dana R Korean you don't have to do anything. For other pumps see [time zone travelling](../Usage/Timezone-traveling.md) page for more details.

## Medical topics

### Hospitalization

If you want to share some information about AndroidAPS and DIY looping with your clinicians, you can print out the [guide to AndroidAPS for clinicians](../Resources/clinician-guide-to-AndroidAPS.md).

### Medical appointment with your endocrinologist

#### Reporting

You can either show your Nightscout reports (https://YOUR-NS-SITE.com/report) or check [Nightscout Reporter](https://nightscout-reporter.zreptil.de/).