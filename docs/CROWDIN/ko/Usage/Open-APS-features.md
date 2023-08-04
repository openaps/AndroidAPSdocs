# OpenAPS의 기능

(Open-APS-features-autosens)=

## Autosens

* Autosens는 혈당 편차 (플러스/마이너스/중립)을 관찰하는 알고리즘입니다.
* 이 기능은 혈당 편차에 근거하여 사용자가 얼마나 인슐린에 민감한지, 저항성을 띄는지를 파악할 것입니다.
* **OpenAPS**에서 Oref 구현은 24시간, 8시간 동안의 데이터를 조합하여 실행됩니다. 두 가지 데이터 중 민감도가 더 높은 것을 사용합니다.
* AAPS 2.7 이전의 버전에서는 사용자가 수동으로 8시간 또는 24시간 중 선택해야 했습니다.
* AAPS 2.7부터는 민감도를 계산하기 위해 AAPS의 Autosens가 8시간과 24시간 사이에서 전환하게 됩니다. 이는 둘 중 더 민감한 것을 선택할 것입니다. 
* 사용자가 oref1을 사용했을 경우, 8시간 또는 24시간의 민감도 변경으로 인하여 시스템이 변화에 덜 역동적임을 인지할 수 있을 것입니다.
* Changing a cannula or changing a profile will reset Autosens ratio back to 100% (a percentual profile switch with duration won't reset autosens).
* Autosens adjusts your basal and ISF (i.e.: mimicking what a Profile shift does).
* If continuously eating carbs over an extended period, autosens will be less effective during that period as carbs are excluded from BG delta calculations.

(Open-APS-features-super-micro-bolus-smb)=

## Super Micro Bolus (SMB)

SMB, the shortform of 'super micro bolus', is the latest OpenAPS feature (from 2018) within the Oref1 algorithm. In contrast to AMA, SMB does not use temporary basal rates to control glucose levels, but mainly **small super microboluses**. In situations where AMA would add 1.0 IU insulin using a temporary basal rate, SMB delivers several super microboluses in small steps at **5 minute intervals**, e.g. 0.4 IU, 0.3 IU, 0.2 IU and 0.1 IU. At the same time (for safety reasons) the actual basal rate is set to 0 IU/h for a certain period to prevent overdose (**'zero-temping'**). This allows the system adjust the blood glucose faster than with the temporary basal rate increase in AMA.

Thanks to SMB, it may be sufficient for meals containing only "slow" carbs to inform the system of the planned amount of carbohydrate and leave the rest to AAPS. However, this may lead to higher postprandial (post-meal) peaks because pre-bolusing isn’t possible. Or you can give, if necessary with pre-bolusing, a **start bolus**, which **only partly** covers the carbohydrates (e.g. 2/3 of the estimated amount) and let SMB provide the rest.

The SMB feature contains some safety mechanisms:

1. 다음 값들 중 최소 용량이 SMB 단독으로 사용할 수 있는 최대 인슐린 용량입니다:
    
    * "SMB 제한을 위한 최대 시간"으로 설정된 시간 동안의 (autosens에 의해 조정된) 현재 basal 양에 따른 값, 즉, 다음 30분 동안의 basal 총량,
    * 또는, 현재 필요한 인슐린의 양의 절반
    * 또는, 설정의 maxIOB 값에서 남아있는 양

2. 종종 낮은 임시 basal 양 (low temps) 또는 0 U/h 임시 basal 양(zero-temps)를 자주 보게 될 것입니다. This is by design for safety reasons and has no negative effects if the profile is set correctly. 임시 basal 양의 추이보다 IOB 곡선이 더 큰 의미를 갖습니다.

3. 혈당 추이를 예측하기 위한 부가적인 계산, 즉, UAM (un-announced meals, 입력되지 않은 음식 섭취). 사용자로부터 수동으로 탄수화물 섭취가 입력되지 않은 경우에도, 식사/아드레날린 또는 다른 영향들에 의해 상당히 상승한 혈당 수준을 UAM이 자동으로 검출할 수 있습니다. SMB를 사용하여 이러한 혈당 상승을 조절해볼 수 있습니다. 안전 측면에서 이는 반대로 작동하며, 예상치 못한 혈당의 급격한 감소가 발생하는 경우 SMB를 일찍 중단할 수 있습니다. 이것이 SMB 사용 시 UAM이 항상 활성화되어야 하는 이유입니다.

**You must have started [objective 9](Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) to use SMB.**

See also: [OpenAPS documentation for oref1 SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) and [Tim's info on SMB](https://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/).

(Open-APS-features-max-u-h-a-temp-basal-can-be-set-to-openaps-max-basal)=

### 임시 Basal의 Max U/h을 (OpenAPS "max-basal")로 설정할 수 있습니다.

This safety setting determines the maximum temporary basal rate the insulin pump may deliver. The value should be the same in the pump and in AAPS and should be at least 3 times the highest single basal rate set.

Example:

Your basal profile’s highest basal rate during the day is 1.00 U/h. Then a max-basal value of at least 3 U/h is recommended.

AAPS limits the value as a 'hard limit' according to the patients age you have selected under settings.

AAPS limits the value as follows:

* 어린이: 2
* Teenager: 5
* 성인: 10
* 인슐린 저항성이 있는 성인: 12
* Pregnant: 25

*See also [overview of hard-coded limits](Open-APS-features-overview-of-hard-coded-limits).*

(Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob)=

### OpenAPS가 주입할 수 있는 최대 basal IOB (OpenAPS "max-iob")

This value determines the maxIOB that AAPS will remain under while running in closed loop mode. If the current IOB (e.g. after a meal bolus) is above the defined value, the loop stops dosing insulin until the IOB limit is below the given value.

Using the OpenAPS SMB, max-IOB is calculated differently than in OpenAPS AMA. In AMA, maxIOB was just a safety-parameter for basal IOB, while in SMB-mode, it also includes bolus IOB. A good start is

    maxIOB = 평균 식사 bolus + 하루 최대 basal의 3배 양
    

Be careful and patient and only change the settings step by step. It is different for everyone and can also depend on the average total daily dose (TDD). For safety reason, there is a limit, which depends on the patient age . The 'hard limit' for maxIOB is higher than in [AMA](Open-APS-features-max-u-hr-a-temp-basal-can-be-set-to-openaps-max-basal).

* Child: 3
* Teenager: 7
* Adult: 12
* Insulin resistant adult: 25
* Pregnant: 40

*See also [overview of hard-coded limits](Open-APS-features-overview-of-hard-coded-limits).*

See also [OpenAPS documentation for SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb).

### Enable AMA Autosens

Here, you can choose if you want to use the [sensitivity detection](../Configuration/Sensitivity-detection-and-COB.md) 'autosens' or not.

(Open-APS-features-enable-smb)=

### SMB를 사용하기

Enable this to use SMB functionality. If disabled, no SMBs will be given.

### Enable SMB with high temp targets

If this setting is enabled, SMB will be allowed, but not necessarily enabled, when there is a high temporary target active (defined as anything above 100mg/dl regardless of profile target). This option is intended to be used to disable SMBs when the setting is disabled. For example, if this option is disabled, SMBs can be disabled by setting a temp target above 100mg/dl. This option will also disable SMB regardless of what other condition is trying to enable SMB.

If this setting is enabled, SMB will only be enabled with a high temp target if Enable SMB with temp targets is also enabled.

(Open-APS-features-enable-smb-always)=

### Enable SMB always

If this setting is enabled, SMB is enabled always (independent of COB, temp targets or boluses). If this setting is enabled, the rest of the enable settings below will have no effect. However, if “Enable SMB with high temp targets” is disabled and a high temp target is set SMBs will be disabled. For safety reasons, this option is only available for BG sources with a good filtering system for noisy data. Currently it is only an available option with a Dexcom G5 or G6, if using the ['Build your own Dexcom App'](DexcomG6-if-using-g6-with-build-your-own-dexcom-app) or “native mode” in xDrip+. If a BG value has too large of a deviation, the G5/G6 doesn’t send it and waits for the next value in 5 minutes.

For other CGM/FGM like Freestyle Libre, ‘SMB always’ is deactivated until xDrip+ has a better noise smoothing plugin. You can find more [here](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

### Enable SMB with COB

If this setting is enabled, SMB is enabled when the COB is greater than 0.

### Enable SMB with temp targets

If this setting is enabled, SMB is enabled when there is any temp target set (eating soon, activity, hypo, custom). If this setting is enabled but "Enable SMB with high temp targets" is disabled, SMB will be enabled when a low temp target is set (below 100mg/dl) but disabled when a high temp target is set.

### Enable SMB after carbs

If enabled, SMB is enabled for 6h after carbohydrates are announced, even if COB has reached 0. For safety reasons, this option is only available for BG sources with a nice filtering system for noisy data. Currently it is only an available option with a Dexcom G5 or G6 if using the ['Build your own Dexcom App'](DexcomG6-if-using-g6-with-build-your-own-dexcom-app) or “native mode” in xDrip+. If a BG value has too large of a deviation, the G5/G6 doesn’t send it and waits for the next value in 5 minutes.

For other CGM/FGM like Freestyle Libre, 'Enable SMB after carbs' is deactivated until xDrip+ has a better noise smoothing plugin. You can find [more information here](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

(Open-APS-features-max-minutes-of-basal-to-limit-smb-to)=

### Max minutes of basal to limit SMB to

This is an important safety setting. This value determines how much SMB can be given based on the amount of basal insulin in a given time, when it is covered by COBs.

Making this value larger allows the SMB to be more aggressive. You should start with the default value of 30 minutes. After some experience, increase the value in 15 minutes increments and observe the effects over multiple meals.

It is recommended not to set the value higher than 90 minutes, as this would lead to a point where the algorithm might not be able to accommodate a decreasing BG with 0 U/h basal ('zero-temp'). You should also set alarms, especially if you are still testing new settings, which will warn you well before a hypo.

Default value: 30 min.

### Enable UAM

With this option enabled, the SMB algorithm can recognize unannounced meals. This is helpful if you forget to tell AAPS about your carbs or estimate your carbs wrong and the amount of entered carbs is wrong or if a meal with lots of fat and protein has a longer duration than expected. Without any carb entry, UAM can recognize fast glucose increasements caused by carbs, adrenaline, etc., and tries to adjust it with SMBs. This also works the opposite way: if there is a fast glucose decrease, it can stop SMBs earlier.

**Therefore, UAM should always be activated when using SMB.**

### High temp-target raises sensitivity

If you have this option enabled, the insulin sensitivity will be increased while having a temporary target above 100 mg/dl or 5.6 mmol/l. This means, the ISF will rise while IC and basal will decrease. This will effectively make AAPS less aggressive when you set a high temp target.

### Low temp-target lowers sensitivity

If you have this option enabled, the insulin sensitivity will be decreased while having a temporary target lower than 100 mg/dl or 5.6 mmol/l. This means, the ISF will decrease while IC and basal will rise. This will effectively make AAPS more aggressive when you set a low temp target.

### Advanced Settings

**Always use short average delta instead of simple data** If you enable this feature, AAPS uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps AAPS to be steadier with noisy data sources like xDrip+ and Libre.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. This means that AAPS will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump and/or profile. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then AAPS can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that AAPS will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump and/or profile.

Default value: 4 (shouldn’t be changed unless you really need to and know what you are doing)

* * *

(Open-APS-features-advanced-meal-assist-ama)=

## Advanced Meal Assist (AMA)

AMA, the short form of "advanced meal assist" is an OpenAPS feature from 2017 (oref0). OpenAPS Advanced Meal Assist (AMA) allows the system to high-temp more quickly after a meal bolus if you enter carbs reliably.

You can find more information in the [OpenAPS documentation](https://newer-docs.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

(Open-APS-features-max-u-hr-a-temp-basal-can-be-set-to-openaps-max-basal)=

### Max U/hr a Temp Basal can be set to (OpenAPS "max-basal")

This safety setting helps AAPS from ever being capable of giving a dangerously high basal rate and limits the temp basal rate to x U/h. It is advised to set this to something sensible. A good recommendation is to take the highest basal rate in your profile and multiply it by 4 and at least 3. For example, if the highest basal rate in your profile is 1.0 U/h you could multiply that by 4 to get a value of 4 U/h and set the 4 as your safety parameter.

You cannot chose any value: For safety reason, there is a 'hard limit', which depends on the patient age. The 'hard limit' for maxIOB is lower in AMA than in SMB. For children, the value is the lowest while for insulin resistant adults, it is the biggest.

The hardcoded parameters in AAPS are:

* 어린이: 2
* Teenager: 5
* 성인: 10
* Insulin resistant adult: 12
* Pregnant: 25

*See also [overview of hard-coded limits](Open-APS-features-overview-of-hard-coded-limits).*

### Maximum basal IOB OpenAPS can deliver \[U\] (OpenAPS "max-iob")

This parameter limits the maximum of basal IOB where AAPS still works. If the IOB is higher, it stops giving additional basal insulin until the basal IOB is under the limit.

The default value is 2, but you should be rise this parameter slowly to see how much it affects you and which value fits best. It is different for anyone and also depends on the average total daily dose (TDD). For safety reason, there is a limit, which depends on the patient age . The 'hard limit' for maxIOB is lower in AMA than in SMB.

* Child: 3
* Teenager: 5
* Adult: 7
* Insulin resistant adult: 12
* Pregnant: 25

*See also [overview of hard-coded limits](Open-APS-features-overview-of-hard-coded-limits).*

### Enable AMA Autosens

Here, you can chose, if you want to use the [sensitivity detection](../Configuration/Sensitivity-detection-and-COB.md) autosens or not.

### Autosens adjust temp targets too

If you have this option enabled, autosens can adjust targets (next to basal and ISF), too. This lets AAPS work more 'aggressive' or not. The actual target might be reached faster with this.

### Advanced Settings

**Always use short average delta instead of simple data** If you enable this feature, AAPS uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps AAPS to work more steady with noisy data sources like xDrip+ and Libre.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. This means that AAPS will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then AAPS can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know, what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that AAPS will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump.

Default value: 4 (shouldn’t be changed unless you really need to and know, what you are doing)

**Bolus snooze dia divisor** The feature “bolus snooze” works after a meal bolus. AAPS doesn’t set low temporary basal rates after a meal in the period of the DIA divided by the “bolus snooze”-parameter. The default value is 2. That means with a DIA of 5h, the “bolus snooze” would be 5h : 2 = 2.5h long.

Default value: 2

(Open-APS-features-overview-of-hard-coded-limits)=

## Overview of hard-coded limits

<table border="1">
  
<thead>
  <tr>
    <th width="200"></th>
    <th width="75">Child</th>
    <th width="75">Teenager</th>
    <th width="75">Adult</th>
    <th width="75">Insulin resistant adult</th>
    <th width="75">Pregnant</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>MAXBOLUS</td>
    <td>5,0</td>
    <td>10,0</td>
    <td>17,0</td>
    <td>25,0</td>
    <td>60,0</td>
  </tr>
  <tr>
    <td>MINDIA</td>
    <td>5,0</td>
    <td>5,0</td>
    <td>5,0</td>
    <td>5,0</td>
    <td>5,0</td>
  </tr>
  <tr>
    <td>MAXDIA</td>
    <td>7,0</td>
    <td>7,0</td>
    <td>7,0</td>
    <td>7,0</td>
    <td>10,0</td>
  </tr>
  <tr>
    <td>MINIC</td>
    <td>2,0</td>
    <td>2,0</td>
    <td>2,0</td>
    <td>2,0</td>
    <td>0,3</td>
  </tr>
  <tr>
    <td>MAXIC</td>
    <td>100,0</td>
    <td>100,0</td>
    <td>100,0</td>
    <td>100,0</td>
    <td>100,0</td>
  </tr>
  <tr>
    <td>MAXIOB_AMA</td>
    <td>3,0</td>
    <td>5,0</td>
    <td>7,0</td>
    <td>12,0</td>
    <td>25,0</td>
  </tr>
  <tr>
    <td>MAXIOB_SMB</td>
    <td>7,0</td>
    <td>13,0</td>
    <td>22,0</td>
    <td>30,0</td>
    <td>70,0</td>
  </tr>
  <tr>
    <td>MAXBASAL</td>
    <td>2,0</td>
    <td>5,0</td>
    <td>10,0</td>
    <td>12,0</td>
    <td>25,0</td>
  </tr>
</tbody>
</table>