# OpenAPS의 기능

## Autosens

* Autosens는 혈당 편차 (플러스/마이너스/중립)을 관찰하는 알고리즘입니다.
* 이 기능은 혈당 편차에 근거하여 사용자가 얼마나 인슐린에 민감한지, 저항성을 띄는지를 파악할 것입니다.
* **OpenAPS**에서 Oref 구현은 24시간, 8시간 동안의 데이터를 조합하여 실행됩니다. 두 가지 데이터 중 민감도가 더 높은 것을 사용합니다.
* AndroidAPS는 8시간 (UAM을 사용하기 위한 경우) 또는 사용자 옵션으로서 24시간으로만 실행 가능합니다.
* 캐뉼라를 변경하거나 프로파일을 변경하면 autosens 비율이 0%로 재설정됩니다.
* Autosens는 basal 및 ISF를 조정합니다 (즉, 프로파일 변경이 수행하는 것과 비슷함).
* 연장된 기간 동안 계속 탄수화물을 섭취하면, 섭취한 탄수화물은 혈당값 증분 계산으로부터 제외됨으로써 이 기간동안 autosens는 덜 효과적일 것입니다.

## Super Micro Bolus (SMB)

'수퍼 마이크로 볼루스 (super micro bolus)'의 줄임말인 SMB는 Oref1 알고리즘에서 사용하는 OpenAPS의 최신 기능(2018년부터 사용됨)입니다. AMA와 다르게, SMB는 혈당 수치를 조절하기 위해 임시 basal 양을 사용하지 않고, **작은 양의 super microbolus**를 주로 사용합니다. AMA에서 임시 basal 양을 사용하여 1.0 IU 인슐린을 추가할 때, SMB에서는 0.4 IU, 0.3 IU, 0.2 IU, 0.1 IU처럼 작은 용량의 super microbolus를 **5분 마다** 주입합니다. 동시에 (안전상의 이유로) 과주입을 방지하기 위해 실제 basal 양은 해당 기간 동안 0 IU/h로 설정됩니다 (**'zero-temping'**). AMA에서 임시 basal 양을 증가시키는 것보다 이 방법을 통해 시스템이 빠르게 혈당을 조절할 수 있습니다.

고마운 SMB 덕분에, 기본적으로 저탄수화물 식사에서는 다른 것은 AAPS에 맡기고, 식사 예정된 탄수화물 양을 시스템에 입력하는 것으로 충분할 수 있습니다. 그러나 이 경우 식전 주입이 가능하지 않기 때문에 식후 피크가 높을 수 있습니다. 또는 식전 주입이 필요하다면 탄수화물의 **일부**(예를 들어, 예상 양의 2/3 정도)를 커버하는 **시작 bolus**를 주입하고, SMB가 나머지 부분을 담당하게 할 수 있습니다.

SMB 기능에는 몇 가지 안전 메커니즘이 있습니다:

1. 다음 값들 중 최소 용량이 SMB 단독으로 사용할 수 있는 최대 인슐린 용량입니다:
    
    * "SMB 제한을 위한 최대 시간"으로 설정된 시간 동안의 (autosens에 의해 조정된) 현재 basal 양에 따른 값, 즉, 다음 30분 동안의 basal 총량,
    * 또는, 현재 필요한 인슐린의 양의 절반
    * 또는, 설정의 maxIOB 값에서 남아있는 양

2. 종종 낮은 임시 basal 양 (low temps) 또는 0 U/h 임시 basal 양(zero-temps)를 자주 보게 될 것입니다. 이는 안전상의 이유로 설계되었으며 프로파일이 올바르게 설정된 경우에는 부정적인 영향을 미치지 않습니다. 임시 basal 양의 추이보다 IOB 곡선이 더 큰 의미를 갖습니다.

3. 혈당 추이를 예측하기 위한 부가적인 계산, 즉, UAM (un-announced meals, 입력되지 않은 음식 섭취). 사용자로부터 수동으로 탄수화물 섭취가 입력되지 않은 경우에도, 식사/아드레날린 또는 다른 영향들에 의해 상당히 상승한 혈당 수준을 UAM이 자동으로 검출할 수 있습니다. SMB를 사용하여 이러한 혈당 상승을 조절해볼 수 있습니다. 안전 측면에서 이는 반대로 작동하며, 예상치 못한 혈당의 급격한 감소가 발생하는 경우 SMB를 일찍 중단할 수 있습니다. 이것이 SMB 사용 시 UAM이 항상 활성화되어야 하는 이유입니다.

**SMB를 사용하기 위해서는 [목표 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)을 시행 중이어야 합니다.**

참고: [Oref1 SMB에 대한 OpenAPS 문서](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html)와 [SMB에 대한 Tim의 정보](http://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/).

### 임시 Basal의 Max U/h을 (OpenAPS "max-basal")로 설정할 수 있습니다.

이러한 안전 설정은 인슐린 펌프가 주입할 수 있는 최대의 임시 basal 양을 결정합니다. 이 값은 펌프와 AAPS에서 동일해야 하며, 설정된 basal 양 중 제일 높은 값의 3배 이상이어야 합니다.

예시:

사용자의 basal 프로파일에서 하루 중 가장 높은 basal 양이 1.00 U/h인 경우입니다. 이 경우 max basal 양으로 3U/h이 추천됩니다.

하지만 사용자가 아무 값이나 선택할 수 있는 것은 아닙니다. 설정에서 선택된 환자의 연령에 따라 이 값은 AAPS에 의해 '엄격한 한계(hard limit)'로 제한됩니다. 허용되는 가장 낮은 값은 어린이를 위한 것이며, 가장 높은 값은 인슐린 저항성이 있는 성인들을 위한 것 입니다.

AndroidAPS는 다음과 같이 값을 제한합니다:

* 어린이: 2
* 청소년: 5
* 성인: 10
* 인슐린 저항성이 있는 성인: 12

### OpenAPS가 주입할 수 있는 최대 basal IOB (OpenAPS "max-iob")

이 값은 closed loop 모드에서 실행되는 AAPS가 고려해야하는 maxIOB를 결정합니다. If the current IOB (e.g. after a meal bolus) is above the defined value, the loop stops dosing insulin until the IOB limit is below the given value.

Using the OpenAPS SMB, max-IOB is calculated differently than in OpenAPS AMA. In AMA, maxIOB was just a safety-parameter for basal IOB, while in SMB-mode, it also includes bolus IOB. A good start is

    maxIOB = average mealbolus + 3x max daily basal
    

Be careful and patient and only change the settings step by step. It is different for anyone and also depends on the average total daily dose (TDD). For safety reason, there is a limit, which depends on the patient age . The 'hard limit' for maxIOB is higher than in AMA.

* Child: 3
* Teenage: 7
* Adult: 12
* Insulin resistant adult: 25

See also [OpenAPS documentation for SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-smb).

### Enable AMA Autosense

Here, you can choose if you want to use the [sensitivity detection](../Configuration/Sensitivity-detection-and-COB.md) 'autosense' or not.

### Enable SMB

Here you can enable or completely disable SMB feature.

### Enable SMB with COB

SMB is working when there is COB active.

### Enable SMB with temp targets

SMB is working when there is a low or high temporary target active (eating soon, activity, hypo, custom)

### Enable SMB with high temp targets

SMB is working when there is a high temporary target active (activity, hypo). This option can limit other SMB Settings, i.e. if ‘SMB with temp targets’ is enabled and ‘SMB with high temp targets’ is deactivated, SMB just works with low and not with high temp targets. It is the same for enabled SMB with COB: if 'SMB with high temp target' is deactivated, there is no SMB with high temp target even if COB is active.

### Enable SMB always

SMB is working always (independent of COB, temp targets or boluses). For safety reasons, this option is just possibly for BG sources with a nice filtering system for noisy data. For now, it just works with a Dexcom G5, if using the Dexcom App (patched) or “native mode” in xDrip+. If a BG value has a too large deviation, the G5 doesn’t send it and waits for the next value in 5 minutes.

For other CGM/FGM like Freestyle Libre, ‘SMB always’ is deactivated until xDrip+ has a better noise smoothing plugin. You can find more [here](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

### Enable SMB after carbs

SMB is working for 6h after carbohydrates , even if COB is at 0. For safety reasons, this option is just possibly for BG sources with a nice filtering system for noisy data. For now, it just works with a Dexcom G5, if using the Dexcom App (patched) or “native mode” in xDrip+. If a BG value has a too large deviation, the G5 doesn’t send it and waits for the next value in 5 minutes.

For other CGM/FGM like Freestyle Libre, 'SMB always' is deactivated until xDrip+ has a better noise smoothing plugin. You can find [more information here](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

### Max minutes of basal to limit SMB to

This is an important safety setting. This value determines how much SMB can be given based on the amount of basal insulin in a given time, when it is covered by COBs.

This makes the SMB more aggressive. For the beginning, you should start with the default value of 30 minutes. After some experience, you can increase the value with 15 minutes steps and watch how these changes are affecting.

It is recommended not to set the value higher than 90 minutes, as this would lead to a point where the algorithm might not be able to adjust a decreasing BG with 0 IE/h basal ('zero-temp'). You should also set alarms, especially if you are still testing new settings, which warns you before running into hypos.

Default value: 30 min.

### Enable UAM

With this option enabled, the SMB algorithm can recognize unannounced meals. This is helpful, if you forget to tell AndroidAPS about your carbs or estimate your carbs wrong and the amount of entered carbs is wrong or if a meal with lots of fat and protein has a longer duration than expected. Without any carb entry, UAM can recognize fast glucose increasments caused by carbs, adrenaline, etc, and tries to adjust it with SMBs. This also works the opposite way: if there is a fast glucose decreasement, it can stop SMBs earlier.

**Therefore, UAM should always be activated when using SMB.**

### High temp-target raises sensitivity

If you have this option enabled, the insulin sensitivity will be increased while having a temporary target over 100 mg/dl or 5.6 mmol/l. This means, the ISF will rise while IC and basal will decrease.

### Low temp-target lowers sensitivity

If you have this option enabled, the insulin sensitivity will be decreased while having a temporary target lower than 100 mg/dl or 5.6 mmol/l. This means, the ISF will decrease while IC and basal will rise.

### Advanced Settings

**Always use short average delta instead of simple data** If you enable this feature, AndroidAPS uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps AndroidAPS to work more steady with noisy data sources like xDrip+ and Libre.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. This means that AndroidAPS will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then AndroidAPS can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know, what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that AndroidAPS will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump.

Default value: 4 (shouldn’t be changed unless you really need to and know, what you are doing)

* * *

## Advanced Meal Assist (AMA)

AMA, the shortform of "advanced meal assist" is an OpenAPS feature from 2017 (oref0). OpenAPS Advanced Meal Assist (AMA) allows the system to high-temp more quickly after a meal bolus if you enter carbs reliably.

**You will need to have started [objective 9](../Usage/Objectives#objective-9-enabling-additional-oref0-features-for-daytime-use-such-as-advanced-meal-assist-ama) to use this feature**

You can find more information in the [OpenAPS documentation](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

### Max U/hr a Temp Basal can be set to (OpenAPS "max-basal")

This safety setting helps AndroidAPS from ever being capable of giving a dangerously high basal rate and limits the temp basal rate to x U/h. 이것을 설정할 때에는 합리적으로 설정하는 것이 좋습니다. A good recommendation is to take the highest basal rate in your profile and multiply it by 4 and at least 3. For example, if the highest basal rate in your profile is 1.0 U/h you could multiply that by 4 to get a value of 4 U/h and set the 4 as your safety parameter.

You cannot chose any value: For safety reason, there is a 'hard limit', which depends on the patient age. The 'hard limit' for maxIOB is lower in AMA than in SMB. For children, the value is the lowest while for insulin resistant adults, it is the biggest.

The hardcoded parameters in AndroidAPS are:

* 어린이: 2
* 청소년: 5
* 성인: 10
* Insulin resistant adult: 12

### Maximum basal IOB OpenAPS can deliver \[U\] (OpenAPS "max-iob")

This parameter limits the maximum of basal IOB where AndroidAPS still works. If the IOB is higher, it stops giving additional basal insulin until the basal IOB is under the limit.

The default value is 2, but you should be rise this parameter slowly to see how much it affects you and which value fits best. It is different for anyone and also depends on the average total daily dose (TDD). For safety reason, there is a limit, which depends on the patient age . The 'hard limit' for maxIOB is lower in AMA than in SMB.

* Child: 3
* 청소년: 5
* Adult: 7
* Insulin resistant adult: 12

### Enable AMA Autosense

Here, you can chose, if you want to use the [sensitivity detection](../Configuration/Sensitivity-detection-and-COB.md) autosense or not.

### Autosense adjust temp targets too

If you have this option enabled, autosense can adjust targets (next to basal, ISF and IC), too. This lets AndroidAPS work more 'aggressive' or not. The actual target might be reached faster with this.

### Advanced Settings

**Always use short average delta instead of simple data** If you enable this feature, AndroidAPS uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps AndroidAPS to work more steady with noisy data sources like xDrip+ and Libre.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. This means that AndroidAPS will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then AndroidAPS can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know, what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that AndroidAPS will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump.

Default value: 4 (shouldn’t be changed unless you really need to and know, what you are doing)

**Bolus snooze dia divisor** The feature “bolus snooze” works after a meal bolus. AAPS doesn’t set low temporary basal rates after a meal in the period of the DIA divided by the “bolus snooze”-parameter. The default value is 2. That means with a DIA of 5h, the “bolus snooze” would be 5h : 2 = 2.5h long.

Default value: 2

* * *

## Meal Assist (MA)

### Max U/hr a Temp Basal can be set to (OpenAPS "max-basal")

This safety setting helps AndroidAPS from ever being capable of giving a dangerously high basal rate and limits the temp basal rate to x U/h. 이것을 설정할 때에는 합리적으로 설정하는 것이 좋습니다. A good recommendation is to take the highest basal rate in your profile and multiply it by 4 and at least 3. For example, if the highest basal rate in your profile is 1.0 U/h you could multiply that by 4 to get a value of 4 U/h and set the 4 as your safety parameter.

You cannot chose any value: For safety reason, there is a 'hard limit', which depends on the patient age. The 'hard limit' for maxIOB is lower in MA than in SMB. For children, the value is the lowest while for insulin resistant adults, it is the biggest.

The hardcoded parameters in AndroidAPS are:

* 어린이: 2
* 청소년: 5
* 성인: 10
* Insulin resistant adult: 12

### Maximum basal IOB OpenAPS can deliver \[U\] (OpenAPS "max-iob")

This parameter limits the maximum of basal IOB where AndroidAPS still works. If the IOB is higher, it stops giving additional basal insulin until the basal IOB is under the limit.

The default value is 2, but you should be rise this parameter slowly to see how much it affects you and which value fits best. It is different for anyone and also depends on the average total daily dose (TDD). For safety reason, there is a limit, which depends on the patient age . The 'hard limit' for maxIOB is lower in MA than in SMB.

* Child: 3
* 청소년: 5
* Adult: 7
* Insulin resistant adult: 12

### Advanced Settings

**Always use short average delta instead of simple data** If you enable this feature, AndroidAPS uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps AndroidAPS to work more steady with noisy data sources like xDrip+ and Libre.

**Bolus snooze dia divisor** The feature “bolus snooze” works after a meal bolus. AAPS doesn’t set low temporary basal rates after a meal in the period of the DIA divided by the “bolus snooze”-parameter. The default value is 2.That means with a DIA of 5h, the “bolus snooze” would be 5h : 2 = 2.5h long.

Default value: 2