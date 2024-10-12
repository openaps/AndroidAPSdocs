# OpenAPS özellikleri

(Open-APS-features-autosens)=

## Otoduyarlılık

* Otoduyarlılık, kan şekeri sapmalarına (pozitif/negatif/nötr) bakan bir algoritmadır.
* Bu sapmalara dayanarak sizin ne kadar hassas/dirençli olduğunuzu anlamaya çalışacaktır.
* **OpenAPS**'deki oref uygulaması, 24 ve 8 saatlik veri kombinasyonunu çalıştırır. Hangisi hassas ise onu kullanır.
* AAPS 2.7'den önceki sürümlerde, kullanıcının manuel olarak 8 veya 24 saat arasında seçim yapması gerekiyordu.
* AAPS 2.7'den itibaren AAPS'deki Autosens, duyarlılığı hesaplamak için 24 ve 8 saatlik bir pencere arasında geçiş yapacaktır. Hangisinin daha hassas olduğunu kendi seçecektir. 
* Kullanıcılar oref1'den geldiyse, 24 veya 8 saatlik hassasiyetin değişmesi nedeniyle muhtemelen sistemin değişikliklere karşı daha az dinamik olabileceğini fark edeceklerdir.
* Bir kanül değiştirme veya bir profilin değiştirilmesi, Otoduyarlılık oranını tekrar %100'e sıfırlayacaktır (süreli yüzdelik bir profil değişimi, otomatik algılamayı sıfırlamaz).
* Otoduyarlılık, bazal ve İDF'nizi ayarlar (yani, bir Profil kaydırmanın yaptığını taklit eder).
* Uzun bir süre boyunca sürekli olarak karbonhidrat tüketilirse, karbonhidratlar KŞ delta hesaplamalarına dahil edilmediğinden, otoduyarlılık bu süre boyunca daha az etkili olacaktır.

(Open-APS-features-super-micro-bolus-smb)=

## Süper Mikro Bolus (SMB)

'Süper mikro bolus'un kısaltması olan SMB, Oref1 algoritmasındaki en son OpenAPS özelliğidir (2018'den itibaren). AMA'nın aksine SMB, glikoz seviyelerini kontrol etmek için geçici bazal oranları kullanmaz, esas olarak **küçük süper mikroboluslar** kullanır. AMA'nın geçici bir bazal oranı kullanarak 1.0 Ü insülin ekleyeceği durumlarda, SMB birkaç süper mikrobolus **5 dakikalık aralıklarla** küçük adımlarla iletir, örn. 0.4 Ü, 0.3 Ü, 0.2 Ü ve 0.1 Ü. Aynı zamanda (güvenlik nedenleriyle) aşırı dozu önlemek için (**'sıfır-geçici'**) gerçek bazal oran belirli bir süre için 0 Ü/saate ayarlanır. Bu, sistemin kan şekerini AMA'daki geçici bazal hız artışından daha hızlı ayarlamasını sağlar.

Thanks to SMB, it may be sufficient for meals containing only "slow" carbs to inform the system of the planned amount of carbohydrate and leave the rest to AAPS. However, this may lead to higher postprandial (post-meal) peaks because pre-bolusing isn’t possible. Or you can give, if necessary with pre-bolusing, a **start bolus**, which **only partly** covers the carbohydrates (e.g. 2/3 of the estimated amount) and let SMB provide the rest.

SMB özelliği bazı güvenlik mekanizmalarını içerir:

1. En büyük tek SMB dozu, sadece aşağıdakilerin en küçük değeri olabilir:
    
    * "SMB'yi sınırlamak için maksimum bazal dakika" içinde ayarlanan süre için geçerli bazal oranına (otoduyarlılık tarafından ayarlanan) karşılık gelen değer, örn. sonraki 30 dakika için bazal miktar veya
    * şu anda gerekli olan insülin miktarının yarısı veya
    * ayarlarda maxIOB değerinizin kalan kısmı.

2. Muhtemelen genellikle düşük geçici bazal oranları ("düşük geçici" olarak adlandırılır) veya 0 Ü/s'de geçici bazal oranları ("sıfır-geçici bazal " olarak adlandırılır) fark edeceksiniz. This is by design for safety reasons and has no negative effects if the profile is set correctly. AİNS eğrisi, geçici bazal oranların seyrinden daha anlamlıdır.

3. Glikozun seyrini tahmin etmek için ek hesaplamalar, örn. UAM tarafından (bildirilmemiş öğünler). Kullanıcıdan manuel karbonhidrat girişi olmasa bile UAM, yemekler, adrenalin veya diğer etkiler nedeniyle glikoz seviyelerinde önemli bir artışı otomatik olarak algılayabilir ve bunu SMB ile ayarlamaya çalışabilir. Güvenilir olması için bu aynı zamanda tam tersi şekilde çalışır ve glikozda beklenmedik bir şekilde hızlı bir düşüş meydana gelirse SMB'yi daha erken durdurabilir. Bu nedenle UAM, SMB'de her zaman aktif olmalıdır.

**SMB'yi kullanmak için [görev 9](Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)'a başlamış olmalısınız.**

Ayrıca bkz: [oref1 SMB için OpenAPS dokümantasyonu](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) ve [Tim'in SMB'lerle ilgili bilgileri](https: //www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/).

(Open-APS-features-max-u-h-a-temp-basal-can-be-set-to-openaps-max-basal)=

### Maks Ü/s geçici bazal (OpenAPS “maks-bazal”) nasıl ayarlanabilir

Bu güvenlik ayarı, insülin pompasının iletebileceği maksimum geçici bazal oranını belirler. Değer, pompada ve AAPS'de aynı olmalı ve ayarlanan en yüksek tek bazal oranın en az 3 katı olmalıdır.

Örnek kullanım:

Bazal profilinizin gün içindeki en yüksek bazal oranı 1,00 Ü/s olsun. Öyleyse, en az 3 Ü/s'lik bir maksimum bazal değer önerilir.

AAPS limits the value as a 'hard limit' according to the patients age you have selected under settings.

AAPS limits the value as follows:

* Çocuk: 2
* Genç: 5
* Yetişkin: 10
* İnsüline dirençli yetişkin: 12
* Hamile: 25

*Ayrıca [sabit kodlanmış limitlere genel bakış](Open-APS-features-overview-of-hard-coded-limits) konusuna bakın.*

(Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob)=

### OpenAPS Maksimum toplam Aktif insülin'i geçemez (OpenAPS "maks-ains")

This value determines the maxIOB that AAPS will remain under while running in closed loop mode. Mevcut AİNS (örneğin bir yemek bolusundan sonra) tanımlanan değerin üzerindeyse, döngü AİNS limiti verilen değerin altına düşene kadar insülin dozlamayı durdurur.

OpenAPS SMB kullanılarak hesaplanan max-AİNS, OpenAPS AMA'dakinden farklıdır. AMA'da maxIOB, bazal AİNS için yalnızca bir güvenlik parametresiyken, SMB modunda bolus AİNS'i de içerir. İyi bir başlangıç

    maksIAİNS= ortalama öğün yemeği + 3x maksimum günlük bazal olacaktır
    

Dikkatli ve sabırlı olun ve ayarlarınızı adım adım değiştirin. It is different for everyone and can also depend on the average total daily dose (TDD). Güvenlik nedeniyle, hastanın yaşına bağlı olarak bir sınır vardır. maksAİNS sabit limiti, [AMA](Open-APS-features-max-u-hr-a-temp-basal-can-be-set-to-openaps-max-basal)'dan daha yüksektir.

* Çocuk: 3
* Genç: 7
* Yetişkin: 12
* İnsüline dirençli yetişkin: 25
* Hamile: 40

*Ayrıca [sabit kodlanmış limitlere genel bakış](Open-APS-features-overview-of-hard-coded-limits) konusuna bakın.*

Ayrıca [SMB için OpenAPS dokümantasyonuna](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb) bakın.

### AMA Otoduyarlılığı Etkinleştirme

[Duyarlılık algılaması](../Configuration/Sensitivity-detection-and-COB.md) kısmında 'otoduyarlılık' özelliğini kullanmak isteyip istemediğinizi seçebilirsiniz.

(Open-APS-features-enable-smb)=

### SMB (Super Mikro Bolus) etkinleştir

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

### Yemeklerden sonra SMB'yi etkinleştir

If enabled, SMB is enabled for 6h after carbohydrates are announced, even if COB has reached 0. For safety reasons, this option is only available for BG sources with a nice filtering system for noisy data. Currently it is only an available option with a Dexcom G5 or G6 if using the ['Build your own Dexcom App'](DexcomG6-if-using-g6-with-build-your-own-dexcom-app) or “native mode” in xDrip+. If a BG value has too large of a deviation, the G5/G6 doesn’t send it and waits for the next value in 5 minutes.

For other CGM/FGM like Freestyle Libre, 'Enable SMB after carbs' is deactivated until xDrip+ has a better noise smoothing plugin. You can find [more information here](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

### How frequently SMBs will be given in min

This feature limits the frequency of SMBs. This value determines the minimum time between SMBs. Note that the loop runs every time a glucose value comes in (generally 5 minutes). Subtract 2 minute to give loop additional time to complete. E.g if you want SMB to be given every loop run, set this to 3 minutes.

Default value: 3 min.

(Open-APS-features-max-minutes-of-basal-to-limit-smb-to)=

### SMB'yi sınırlamak için maksimum bazal dakika

This is an important safety setting. This value determines how much SMB can be given based on the amount of basal insulin in a given time, when it is covered by COBs.

Making this value larger allows the SMB to be more aggressive. You should start with the default value of 30 minutes. After some experience, increase the value in 15 minutes increments and observe the effects over multiple meals.

It is recommended not to set the value higher than 90 minutes, as this would lead to a point where the algorithm might not be able to accommodate a decreasing BG with 0 U/h basal ('zero-temp'). You should also set alarms, especially if you are still testing new settings, which will warn you well before a hypo.

Default value: 30 min.

### UAM etkinleştir

With this option enabled, the SMB algorithm can recognize unannounced meals. This is helpful if you forget to tell AAPS about your carbs or estimate your carbs wrong and the amount of entered carbs is wrong or if a meal with lots of fat and protein has a longer duration than expected. Without any carb entry, UAM can recognize fast glucose increasements caused by carbs, adrenaline, etc., and tries to adjust it with SMBs. This also works the opposite way: if there is a fast glucose decrease, it can stop SMBs earlier.

**Therefore, UAM should always be activated when using SMB.**

### Sensitivity raises target

If this option is enabled, the sensitivity detection (autosens) can raise the target when sensitivity is detected (below 100%). In this case your target will be raised by the percentage of the detected sensitivity.

### Resistance lowers target

If this option is enabled, the sensitivity detection (autosens) can lower the target when resistance is detected (above 100%). In this case your target will be lowered by the percentage of the detected resistance.

### Yüksek geçici hedefler duyarlılığı artırır

If you have this option enabled, the insulin sensitivity will be increased while having a temporary target above 100 mg/dl or 5.6 mmol/l. This means, the ISF will rise while IC and basal will decrease. This will effectively make AAPS less aggressive when you set a high temp target.

### Düşük geçici hedefler duyarlılığı azaltır

If you have this option enabled, the insulin sensitivity will be decreased while having a temporary target lower than 100 mg/dl or 5.6 mmol/l. This means, the ISF will decrease while IC and basal will rise. This will effectively make AAPS more aggressive when you set a low temp target.

### Gelişmiş Ayarlar

**Always use short average delta instead of simple data** If you enable this feature, AAPS uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps AAPS to be steadier with noisy data sources like xDrip+ and Libre.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. This means that AAPS will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump and/or profile. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then AAPS can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that AAPS will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump and/or profile.

Default value: 4 (shouldn’t be changed unless you really need to and know what you are doing)

* * *

(Open-APS-features-advanced-meal-assist-ama)=

## Gelişmiş Yemek Yardımı (AMA)

AMA, the short form of "advanced meal assist" is an OpenAPS feature from 2017 (oref0). OpenAPS Advanced Meal Assist (AMA) allows the system to high-temp more quickly after a meal bolus if you enter carbs reliably.

You can find more information in the [OpenAPS documentation](https://newer-docs.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

(Open-APS-features-max-u-hr-a-temp-basal-can-be-set-to-openaps-max-basal)=

### Maks Ü/s geçici bazal (OpenAPS “maks-bazal”) nasıl ayarlanabilir

This safety setting helps AAPS from ever being capable of giving a dangerously high basal rate and limits the temp basal rate to x U/h. It is advised to set this to something sensible. A good recommendation is to take the highest basal rate in your profile and multiply it by 4 and at least 3. For example, if the highest basal rate in your profile is 1.0 U/h you could multiply that by 4 to get a value of 4 U/h and set the 4 as your safety parameter.

You cannot chose any value: For safety reason, there is a 'hard limit', which depends on the patient age. The 'hard limit' for maxIOB is lower in AMA than in SMB. For children, the value is the lowest while for insulin resistant adults, it is the biggest.

The hardcoded parameters in AAPS are:

* Çocuk: 2
* Genç: 5
* Yetişkin: 10
* İnsüline dirençli yetişkin: 12
* Hamile: 25

*Ayrıca [sabit kodlanmış limitlere genel bakış](Open-APS-features-overview-of-hard-coded-limits) konusuna bakın.*

### OpenAPS'in gönderebileceği maksimum bazal AİNS \[U\] (OpenAPS "maks-AİNS")

Bu parametre, AAPS'in çalışacağı maksimum aktif insüline göre bazalı sınırlar. Aktif insülin yüksekse, maks aktif insülin limitin altına düşene kadar ek bazal insülin vermeyi durdurur.

Varsayılan değer 2'dir, ancak sizi ne kadar etkilediğini ve hangi değerin en uygun olduğunu görmek için bu parametreyi yavaşça yükseltmelisiniz. Bu ayarlar herkes için farklıdır ve ayrıca ortalama günlük toplam doza (GTD) bağlıdır. Güvenlik nedeniyle, hastanın yaşına bağlı olarak bir sınır vardır. The 'hard limit' for maxIOB is lower in AMA than in SMB.

* Çocuk: 3
* Genç: 5
* Yetişkin: 7
* İnsüline dirençli yetişkin: 12
* Hamile: 25

*Ayrıca [sabit kodlanmış limitlere genel bakış](Open-APS-features-overview-of-hard-coded-limits) konusuna bakın.*

### AMA Otoduyarlılığı Etkinleştirme

[Duyarlılık algılaması](../Configuration/Sensitivity-detection-and-COB.md) kısmında 'otoduyarlılık' özelliğini kullanmak isteyip istemediğinizi seçebilirsiniz.

### Otoduyarlılık geçici hedefleri de ayarlar

Bu seçeneği etkinleştirdiyseniz, otoduyarlılık hedefleri de ayarlayabilir (bazal ve İDF'nin yanında). AAPS'in daha 'agresif' çalışıp çalışmayacağına izin verir. Bununla asıl KŞ hedefine daha hızlı ulaşılabilir.

### Gelişmiş Ayarlar

**Always use short average delta instead of simple data** If you enable this feature, AAPS uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. Bu, AAPS'in xDrip+ ve Libre gibi gürültülü veri kaynaklarıyla daha istikrarlı çalışmasına yardımcı olur.

**Max daily safety multiplier** This is an important safety limit. The default setting (which is unlikely to need adjusting) is 3. Bu, AAPS'in bir kullanıcının pompasında programlanan en yüksek saatlik bazal oranın 3 katından daha fazla olan geçici bir bazal oranı kabul etmeyeceği anlamına gelir. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then AAPS can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Varsayılan değer: 3 (Gerçekten ne yaptığınızı bilmiyor ve ihtiyaç duymuyorsanız değiştmeyin.)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. Bu, AAPS'in bir kullanıcının pompasında programlanan mevcut saatlik bazal oranın 4 katından daha fazla geçici bir bazal oranı ayarlamasına izin verilmeyeceği anlamına gelir.

Varsayılan değer: 4 (Gerçekten ne yaptığınızı bilmiyor ve ihtiyaç duymuyorsanız değiştmeyin.)

**Bolus erteleme ies böleni** Bolus erteleme özelliği, yemek bolusaundan sonra çalışır. AAPS, "bolus erteleme" parametresine bölünen İES döneminde bir yemekten sonra düşük geçici bazal oranları belirlemez. Varsayılan değer 2'dir. Bu, 5 saatlik bir İES ile "bolus ertelemenin" 5s : 2 = 2.5s uzunluğunda olacağı anlamına gelir.

Varsayılan değer: 2

* * *

(Open-APS-features-overview-of-hard-coded-limits)=

## Overview of hard-coded limits

<table border="1">
  
<thead>
  <tr>
    <th width="200"></th>
    <th width="75">Çocuk</th>
    <th width="75">Genç</th>
    <th width="75">Yetişkin</th>
    <th width="75">Yetişkin İnsülin direnci</th>
    <th width="75">Hamile</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>MAKSBOLUS</td>
    <td>5,0</td>
    <td>10,0</td>
    <td>17,0</td>
    <td>25,0</td>
    <td>60,0</td>
  </tr>
  <tr>
    <td>MİNİES</td>
    <td>5,0</td>
    <td>5,0</td>
    <td>5,0</td>
    <td>5,0</td>
    <td>5,0</td>
  </tr>
  <tr>
    <td>MAKSİES</td>
    <td>9,0</td>
    <td>9,0</td>
    <td>9,0</td>
    <td>9,0</td>
    <td>10,0</td>
  </tr>
  <tr>
    <td>MİNIC</td>
    <td>2,0</td>
    <td>2,0</td>
    <td>2,0</td>
    <td>2,0</td>
    <td>0,3</td>
  </tr>
  <tr>
    <td>MAKSIC</td>
    <td>100,0</td>
    <td>100,0</td>
    <td>100,0</td>
    <td>100,0</td>
    <td>100,0</td>
  </tr>
  <tr>
    <td>MAKSAİNS_AMA</td>
    <td>3,0</td>
    <td>5,0</td>
    <td>7,0</td>
    <td>12,0</td>
    <td>25,0</td>
  </tr>
  <tr>
    <td>MAKSAİNS_SMB</td>
    <td>7,0</td>
    <td>13,0</td>
    <td>22,0</td>
    <td>30,0</td>
    <td>70,0</td>
  </tr>
  <tr>
    <td>MAKSBAZAL</td>
    <td>2,0</td>
    <td>5,0</td>
    <td>10,0</td>
    <td>12,0</td>
    <td>25,0</td>
  </tr>
</tbody>
</table>