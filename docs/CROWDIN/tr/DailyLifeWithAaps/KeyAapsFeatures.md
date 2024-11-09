# OpenAPS özellikleri

(Open-APS-features-autosens)=

## Otoduyarlılık

- Autosens is an algorithm which looks at blood glucose deviations (positive/negative/neutral).
- Bu sapmalara dayanarak sizin ne kadar hassas/dirençli olduğunuzu anlamaya çalışacaktır.
- **OpenAPS**'deki oref uygulaması, 24 ve 8 saatlik veri kombinasyonunu çalıştırır. Hangisi hassas ise onu kullanır.
- In versions prior to **AAPS 2.7**, the user had to choose between 8 or 24 hours manually.
- From **AAPS 2.7** on Autosens in **AAPS** will switch between a 24 and 8 hours window for calculating sensitivity. It will pick whichever one is more sensitive. 
- Kullanıcılar oref1'den geldiyse, 24 veya 8 saatlik hassasiyetin değişmesi nedeniyle muhtemelen sistemin değişikliklere karşı daha az dinamik olabileceğini fark edeceklerdir.
- Bir kanül değiştirme veya bir profilin değiştirilmesi, Otoduyarlılık oranını tekrar %100'e sıfırlayacaktır (süreli yüzdelik bir profil değişimi, otomatik algılamayı sıfırlamaz).
- Otoduyarlılık, bazal ve İDF'nizi ayarlar (yani, bir Profil kaydırmanın yaptığını taklit eder).
- If continuously eating carbs over an extended period, Autosens will be less effective during that period as carbs are excluded from **BG** delta calculations.

(Open-APS-features-super-micro-bolus-smb)=

## Süper Mikro Bolus (SMB)

**SMB**, the shortform of **Super micro bolus**, is an OpenAPS feature introduced from 2018 onwards, within the Oref1 algorithm. In contrast to **AMA**, **SMB** does not use temporary basal rates to control glucose levels, but mainly **small super micro boluses**. In situations where **AMA** would add 1.0 IU insulin using a temporary basal rate, **SMB** delivers several super micro boluses in small steps at **5 minute intervals**, e.g. 0.4 IU, 0.3 IU, 0.2 IU and 0.1 IU. Aynı zamanda (güvenlik nedenleriyle) aşırı dozu önlemek için (**'sıfır-geçici'**) gerçek bazal oran belirli bir süre için 0 Ü/saate ayarlanır. This allows the system to adjust the blood glucose faster than with the temporary basal rate increase in **AMA**.

Thanks to SMB, it may be sufficient for meals containing only "slow" carbs to inform the system of the planned amount of carbohydrate and leave the rest to **AAPS**. However, this may lead to higher postprandial (post-meal) peaks because pre-bolusing isn’t possible. Or you can give, if necessary with pre-bolusing, a **start bolus**, which **only partly** covers the carbohydrates (e.g. 2/3 of the estimated amount) and let **SMB** deliver the rest of the insulin.

![SMBs on main graph](../images/SMBs.png)

SMBs are shown on the main graph with blue triangles. Tap on the triangle to see how much insulin was delivered, or use the [Treatments tab](#aaps-screens-treatments).

**SMB's** features contain some safety mechanisms:

1. **Largest single SMB dose**  
    The largest single SMB dose can only be the smallest value of:
    
    - "SMB'yi sınırlamak için maksimum bazal dakika" içinde ayarlanan süre için geçerli bazal oranına (otoduyarlılık tarafından ayarlanan) karşılık gelen değer, örn. sonraki 30 dakika için bazal miktar veya
    - şu anda gerekli olan insülin miktarının yarısı veya
    - ayarlarda maxIOB değerinizin kalan kısmı.

2. **Low temp basal rates**  
    Low temporary basal rates (called 'low temps') or temporary basal rates at 0 U/h (called 'zero-temps') are activated more in **SMB**. This is by design for safety reasons and has no negative effects if the **Profile** is set correctly. On the main graph, the IOB curve (yellow thin line) is more meaningful than the course of the temporary basal rates.

3. **Un-Announced Meals**  
    Additional calculations to predict the course of glucose, e.g. by **UAM** (un-announced meals). Even without manual carbohydrate input from the user, **UAM** can automatically detect a significant increase in glucose levels due to meals, adrenaline or other influences and try to adjust this with **SMB**. Güvenilir olması için bu aynı zamanda tam tersi şekilde çalışır ve glikozda beklenmedik bir şekilde hızlı bir düşüş meydana gelirse SMB'yi daha erken durdurabilir. Bu nedenle UAM, SMB'de her zaman aktif olmalıdır.

**You must have started [objective 9](#objectives-objective9) to use SMB.**

See also :

- [OpenAPS documentation for SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb).
- [OpenAPS documentation for oref1 SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html)
- [Tim's info on SMB](https://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/).

The settings for OpenAPS SMB are described below.

(Open-APS-features-max-u-h-a-temp-basal-can-be-set-to)=

### Max U/h a temp basal can be set to

Bu güvenlik ayarı, insülin pompasının iletebileceği maksimum geçici bazal oranını belirler. It is also known as **max-basal**.

Değer, ünite/saat (Ü/s) cinsinden ölçülür. It is advised to set this to something sensible. A good recommendation for setting this parameter is:

    max-basal = highest basal rate x 4
    

Örneğin, profilinizdeki en yüksek bazal oran 0,5 Ü/s ise, bunu 4 ile çarparak maks geçici bazal için 2 Ü/s değerini elde edersiniz.

**AAPS** limits this value as a 'hard limit' according to [Preferences > Treatments safety > Patient Type](#preferences-patient-type). The hard limits are as follows:

- Çocuk: 2
- Genç: 5
- Yetişkin: 10
- İnsüline dirençli yetişkin: 12
- Hamile: 25

*See also [overview of hard-coded limits](#overview-of-hard-coded-limits).*

(Open-APS-features-maximum-total-iob-openaps-cant-go-over)=

### Maximum total IOB OpenAPS can’t go over

This value determines the maximum **Insulin on Board** (basal and bolus IOB) that **AAPS** will remain under while running in closed loop mode. It is also known as **maxIOB**.

Mevcut AİNS (örneğin bir yemek bolusundan sonra) tanımlanan değerin üzerindeyse, döngü AİNS limiti verilen değerin altına düşene kadar insülin dozlamayı durdurur.

A good start for setting this parameter is:

    maksIAİNS= ortalama öğün yemeği + 3x maksimum günlük bazal olacaktır
    

Be careful and patient when adjusting your **max-IOB**. It is different for everyone and can also depend on the average total daily dose (TDD).

**AAPS** limits this value as a 'hard limit' according to [Preferences > Treatments safety > Patient Type](#preferences-patient-type). The hard limits are as follows:

- Çocuk: 3
- Genç: 7
- Yetişkin: 12
- İnsüline dirençli yetişkin: 25
- Hamile: 40

*See also [overview of hard-coded limits](#overview-of-hard-coded-limits).*

Note : When using **SMB**, the **max-IOB** is calculated differently than in AMA. In **AMA**, maxIOB is a safety-parameter for basal **IOB**, while in SMB-mode, it also includes bolus IOB.

Ayrıca [SMB için OpenAPS dokümantasyonuna](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb) bakın.

### Enable Autosens

[Autosens](#autosens) looks at blood glucose deviations (positive/negative/neutral). Bu sapmalara göre sizin ne kadar duyarlı/dirençli olduğunuzu anlamaya çalışacak ve bu sapmalara göre bazal hızı ve IDF'yi ayarlayacaktır.

### SMB (Super Mikro Bolus) etkinleştir

Enable this to use SMB functionality. If disabled, no **SMBs** will be given.

(Open-APS-features-enable-smb-with-high-temp-targets)=

### Enable SMB with high temp targets

If this setting is enabled, **SMBs** will still be delivered even if the user has selected a high **Temp Target** (defined as anything above 100mg/dL or 5.6mmol/l, regardless of **Profile** target). This option is intended to be used to disable SMBs when the setting is disabled. For example, if this option is disabled, **SMBs** can be disabled by setting a **Temp Target** above 100mg/dL or 5.6mmol/l. This option will also disable **SMBs** regardless of what other condition is trying to enable SMB.

If this setting is enabled, **SMB** will only be enabled with a high temp target if **Enable SMB with temp targets** is also enabled.

(Open-APS-features-enable-smb-always)=

### Enable SMB always

If this setting is enabled, SMB is enabled always enabled(independent of COB, temp targets or boluses). If this setting is enabled, the rest of the enable settings below will have no effect. However, if **Enable SMB with high temp targets** is disabled and a high temp target is set, SMBs will be disabled.

For safety reasons, this option is only available for BG sources with a good filtering system for noisy data.

- Currently, it is only available with a Dexcom G5 or G6, if using the [Build your own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) or “[native mode](#smoothing-xdrip-dexcom-g6)” in xDrip+. If a BG value has too large of a deviation, the G5/G6 doesn’t send it and waits for the next value 5 minutes later.
- For other CGM/FGM like Freestyle Libre, **SMB always** is deactivated until there is a better noise smoothing plugin. 
- You can find more [here](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Enable SMB with COB

If this setting is enabled, SMB is enabled when the COB is greater than 0.

### Enable SMB with temp targets

If this setting is enabled, SMB is enabled when there is any temp target set (eating soon, activity, hypo, custom). If this setting is enabled but **Enable SMB with high temp targets** is disabled, SMB will be enabled when a low temp target is set (below 100mg/dL or 5.6mmol/l) but disabled when a high temp target is set.

### Yemeklerden sonra SMB'yi etkinleştir

If enabled, SMB is enabled for 6h after carbohydrates are announced, even if COB has reached 0.

For safety reasons, this option is only available for BG sources with a good filtering system for noisy data.

- Currently, it is only available with a Dexcom G5 or G6, if using the [Build your own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) or “[native mode](#smoothing-xdrip-dexcom-g6)” in xDrip+. If a BG value has too large of a deviation, the G5/G6 doesn’t send it and waits for the next value 5 minutes later.
- For other CGM/FGM like Freestyle Libre, **SMB always** is deactivated until there is a better noise smoothing plugin.
- You can find more [here](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### How frequently SMBs will be given in min

This feature limits the frequency of SMBs. This value determines the minimum time between SMBs. Note that the loop runs every time a glucose value comes in (generally 5 minutes). Subtract 2 minute to give loop additional time to complete. E.g. if you want SMB to be given every loop run, set this to 3 minutes.

Default value: 3 min.

(Open-APS-features-max-minutes-of-basal-to-limit-smb-to)=

### SMB'yi sınırlamak için maksimum bazal dakika

This is an important safety setting. This value determines how much SMB can be given based on the amount of basal insulin in a given time, when it is covered by COBs.

Making this value larger allows the SMB to be more aggressive. You should start with the default value of 30 minutes. After some experience, increase the value in 15 minutes increments and observe the effects over multiple meals.

It is recommended not to set the value higher than 90 minutes, as this would lead to a point where the algorithm might not be able to accommodate a decreasing BG with 0 U/h basal ('zero-temp'). You should also set alarms, especially if you are still testing new settings, which will warn you well before a hypo.

Default value: 30 min.

### UAM etkinleştir

With this option enabled, the SMB algorithm can recognize unannounced meals. This is helpful if you forget to tell **AAPS** about your carbs or estimate your carbs wrong and the amount of entered carbs is wrong or if a meal with lots of fat and protein has a longer duration than expected. Without any carb entry, UAM can recognize fast glucose increase caused by carbs, adrenaline, etc., and tries to adjust it with SMBs. This also works the opposite way: if there is a fast glucose decrease, it can stop SMBs earlier.

**Therefore, UAM should always be activated when using SMB.**

### Sensitivity raises target

If this option is enabled, the sensitivity detection (autosens) can raise the target when sensitivity is detected (below 100%). In this case your target will be raised by the percentage of the detected sensitivity.

If the target is modified due to sensitivity detection, it will be displayed with a green background on your home screen.

![Target modified by autosens](../images/Home2020_DynamicTargetAdjustment.png)

### Resistance lowers target

If this option is enabled, the sensitivity detection (autosens) can lower the target when resistance is detected (above 100%). In this case your target will be lowered by the percentage of the detected resistance.

### Yüksek geçici hedefler duyarlılığı artırır

If you have this option enabled, the insulin sensitivity will be increased while having a temporary target above 100 mg/dl or 5.6 mmol/l. This means, the ISF will rise while IC and basal will decrease. This will effectively make **AAPS** less aggressive when you set a high temp target.

### Düşük geçici hedefler duyarlılığı azaltır

If you have this option enabled, the insulin sensitivity will be decreased while having a temporary target lower than 100 mg/dl or 5.6 mmol/l. This means, the ISF will decrease while IC and basal will rise. This will effectively make **AAPS** more aggressive when you set a low temp target.

(key-aaps-features-minimal-carbs-required-for-suggestion)=

### Minimal carbs required for suggestion

Minimum grams of carbs to display a carbs suggestion alert. Referans tasarım karbonhidrat gerektirdiğini tespit ettiğinde ek karbonhidrat önerilecektir. Bu durumda 5, 15 veya 30 dakika ertelenebilecek bir bildirim alacaksınız.

İstenirse karbonhidrat ihtiyacı bildirimleri Nightscout'a iletilebilir, bu durumda bir anons gösterilir ve yayınlanır.

In any case, the required carbs will be displayed in the COB section on your home screen.

![Display carbs required on home screen](../images/Pref2020_CarbsRequired.png)

### Gelişmiş Ayarlar

You can read more here : [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).

**Always use short average delta instead of simple data** If you enable this feature, **AAPS** uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps **AAPS** to be steadier with noisy data sources like xDrip+ and Libre.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump and/or profile. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then **AAPS** can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump and/or profile.

Default value: 4 (shouldn’t be changed unless you really need to and know what you are doing)

* * *

(Open-APS-features-advanced-meal-assist-ama)=

## Gelişmiş Yemek Yardımı (AMA)

AMA, the short form of "advanced meal assist" is an OpenAPS feature from 2017 (oref0). OpenAPS Advanced Meal Assist (AMA) allows the system to high-temp more quickly after a meal bolus if you enter carbs reliably.

You can find more information in the [OpenAPS documentation](https://newer-docs.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

### Maks Ü/s geçici bazal (OpenAPS “maks-bazal”) nasıl ayarlanabilir

This safety setting helps **AAPS** from ever being capable of giving a dangerously high basal rate and limits the temp basal rate to x U/h. It is advised to set this to something sensible. A good recommendation is to take the highest basal rate in your profile and multiply it by 4 and at least 3. For example, if the highest basal rate in your profile is 1.0 U/h you could multiply that by 4 to get a value of 4 U/h and set the 4 as your safety parameter.

You cannot choose any value: For safety reason, there is a 'hard limit', which depends on the patient age. The 'hard limit' for maxIOB is lower in AMA than in SMB. For children, the value is the lowest while for insulin resistant adults, it is the biggest.

The hardcoded parameters in **AAPS** are:

- Çocuk: 2
- Genç: 5
- Yetişkin: 10
- İnsüline dirençli yetişkin: 12
- Hamile: 25

*See also [overview of hard-coded limits](#overview-of-hard-coded-limits).*

### OpenAPS'in gönderebileceği maksimum bazal AİNS \[U\] (OpenAPS "maks-AİNS")

This parameter limits the maximum of basal IOB where **AAPS** still works. Aktif insülin yüksekse, maks aktif insülin limitin altına düşene kadar ek bazal insülin vermeyi durdurur.

The default value is 2, but you should rise this parameter slowly to see how much it affects you and which value fits best. Bu ayarlar herkes için farklıdır ve ayrıca ortalama günlük toplam doza (GTD) bağlıdır. Güvenlik nedeniyle, hastanın yaşına bağlı olarak bir sınır vardır. The 'hard limit' for maxIOB is lower in AMA than in SMB.

- Çocuk: 3
- Genç: 5
- Yetişkin: 7
- İnsüline dirençli yetişkin: 12
- Hamile: 25

*See also [overview of hard-coded limits](#overview-of-hard-coded-limits).*

### AMA Otoduyarlılığı Etkinleştirme

Here, you can choose, if you want to use the [sensitivity detection](../DailyLifeWithAaps/SensitivityDetectionAndCob.md) autosens or not.

### Otoduyarlılık geçici hedefleri de ayarlar

Bu seçeneği etkinleştirdiyseniz, otoduyarlılık hedefleri de ayarlayabilir (bazal ve İDF'nin yanında). This lets **AAPS** work more 'aggressive' or not. Bununla asıl KŞ hedefine daha hızlı ulaşılabilir.

### Gelişmiş Ayarlar

- Normalde bu diyalogdaki ayarları değiştirmeniz gerekmez!
- Yine de bunları değiştirmek isterseniz ne yaptığınızı anlamak için, [OpenAPS dokümantasyonundaki](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#) ayrıntıları okuduğunuzdan emin olun.

**Always use short average delta instead of simple data** If you enable this feature, **AAPS** uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps **AAPS** to work more steady with noisy data sources like xDrip+ and Libre.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then **AAPS** can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump.

Default value: 4 (shouldn’t be changed unless you really need to and know what you are doing)

**Bolus erteleme ies böleni** Bolus erteleme özelliği, yemek bolusaundan sonra çalışır. **AAPS** doesn’t set low temporary basal rates after a meal in the period of the DIA divided by the “bolus snooze”-parameter. Varsayılan değer 2'dir. Bu, 5 saatlik bir İES ile "bolus ertelemenin" 5s : 2 = 2.5s uzunluğunda olacağı anlamına gelir.

Varsayılan değer: 2

* * *

(Open-APS-features-overview-of-hard-coded-limits)=

## Overview of hard-coded limits

|              | Çocuk | Genç  | Yetişkin | Yetişkin İnsülin direnci | Hamile |
| ------------ | ----- | ----- | -------- | ------------------------ | ------ |
| MAKSBOLUS    | 5,0   | 10,0  | 17,0     | 25,0                     | 60,0   |
| MİNİES       | 5,0   | 5,0   | 5,0      | 5,0                      | 5,0    |
| MAKSİES      | 9,0   | 9,0   | 9,0      | 9,0                      | 10,0   |
| MİNIC        | 2,0   | 2,0   | 2,0      | 2,0                      | 0,3    |
| MAKSIC       | 100,0 | 100,0 | 100,0    | 100,0                    | 100,0  |
| MAKSAİNS_AMA | 3,0   | 5,0   | 7,0      | 12,0                     | 25,0   |
| MAKSAİNS_SMB | 7,0   | 13,0  | 22,0     | 30,0                     | 70,0   |
| MAKSBAZAL    | 2,0   | 5,0   | 10,0     | 12,0                     | 25,0   |