# OpenAPS özellikleri

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

## Süper Mikro Bolus (SMB)

'Süper mikro bolus'un kısaltması olan SMB, Oref1 algoritmasındaki en son OpenAPS özelliğidir (2018'den itibaren). AMA'nın aksine SMB, glikoz seviyelerini kontrol etmek için geçici bazal oranları kullanmaz, esas olarak **küçük süper mikroboluslar** kullanır. AMA'nın geçici bir bazal oranı kullanarak 1.0 Ü insülin ekleyeceği durumlarda, SMB birkaç süper mikrobolus **5 dakikalık aralıklarla** küçük adımlarla iletir, örn. 0.4 Ü, 0.3 Ü, 0.2 Ü ve 0.1 Ü. Aynı zamanda (güvenlik nedenleriyle) aşırı dozu önlemek için (**'sıfır-geçici'**) gerçek bazal oran belirli bir süre için 0 Ü/saate ayarlanır. Bu, sistemin kan şekerini AMA'daki geçici bazal hız artışından daha hızlı ayarlamasını sağlar.

SMB sayesinde temelde düşük karbonhidratlı öğünlerin planlanan karbonhidrat miktarını sisteme bildirmek ve gerisini AAPS'e bırakmak yeterli olabilir. Bununla birlikte, daha fazla yemek zirvelere yol açabilir, çünkü ön-bolus mümkün değildir. Veya gerekirse ön bolus ile karbonhidratları **sadece kısmen** kaplayan bir **başlangıç bolusu** verirsiniz (ör. tahmini miktarın 2/3'ü) ve geri kalanı SMB'nin vermesini beklersiniz.

SMB özelliği bazı güvenlik mekanizmalarını içerir:

1. En büyük tek SMB dozu, sadece aşağıdakilerin en küçük değeri olabilir:
    
    * "SMB'yi sınırlamak için maksimum bazal dakika" içinde ayarlanan süre için geçerli bazal oranına (otoduyarlılık tarafından ayarlanan) karşılık gelen değer, örn. sonraki 30 dakika için bazal miktar veya
    * şu anda gerekli olan insülin miktarının yarısı veya
    * ayarlarda maxIOB değerinizin kalan kısmı.

2. Muhtemelen genellikle düşük geçici bazal oranları ("düşük geçici" olarak adlandırılır) veya 0 Ü/s'de geçici bazal oranları ("sıfır-geçici bazal " olarak adlandırılır) fark edeceksiniz. Bu güvenlik nedenleriyle tasarım gereğidir ve profil doğru ayarlanmışsa olumsuz bir etkisi yoktur. IOB eğrisi, geçici bazal oranların seyrinden daha anlamlıdır.

3. Glikozun seyrini tahmin etmek için ek hesaplamalar, örn. UAM tarafından (bildirilmemiş öğünler). Kullanıcıdan manuel karbonhidrat girişi olmasa bile UAM, yemekler, adrenalin veya diğer etkiler nedeniyle glikoz seviyelerinde önemli bir artışı otomatik olarak algılayabilir ve bunu SMB ile ayarlamaya çalışabilir. Güvenilir olması için bu aynı zamanda tam tersi şekilde çalışır ve glikozda beklenmedik bir şekilde hızlı bir düşüş meydana gelirse SMB'yi daha erken durdurabilir. Bu nedenle UAM, SMB'de her zaman aktif olmalıdır.

**SMB'yi kullanmak için [görev 9](../Usage/Objectives#objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)'a başlamış olmalısınız.**

Ayrıca bkz: [oref1 SMB için OpenAPS dokümantasyonu](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) ve [Tim'in SMB'lerle ilgili bilgileri](https: //www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/).

### Maks Ü/s geçici bazal (OpenAPS “maks-bazal”) nasıl ayarlanabilir

Bu güvenlik ayarı, insülin pompasının iletebileceği maksimum geçici bazal oranını belirler. Değer, pompada ve AAPS'de aynı olmalı ve ayarlanan en yüksek tek bazal oranın en az 3 katı olmalıdır.

Örnek kullanım:

Bazal profilinizin gün içindeki en yüksek bazal oranı 1,00 Ü/s olsun. Öyleyse, en az 3 Ü/s'lik bir maksimum bazal değer önerilir.

Ancak istediğiniz herhangi bir değer seçemezsiniz. AAPS, ayarlar altında seçmiş olduğunuz hasta yaşına göre bazı değerleri 'sabit limit' olarak sınırlar. İzin verilen en düşük değer çocuklar için ve en yüksek değer de insülin direnci olan yetişkinler içindir.

AndroidAPS, değeri aşağıdaki gibi sınırlar:

* Çocuk: 2
* Genç: 5
* Yetişkin: 10
* İnsüline dirençli yetişkin: 12
* Hamile: 25

*Ayrıca [sabit kodlanmış limitlere genel bakış](../Usage/Open-APS-features#overview-of-hard-coded-limits) konusuna bakın.*

### OpenAPS Maksimum toplam Aktif insülin'i geçemez (OpenAPS "maks-iob")

Kapalı döngü modunda çalışan AAPS tarafından hangi maksIOB değerinin dikkate alınması gerektiğini belirler. Mevcut IOB (örneğin bir yemek bolusundan sonra) tanımlanan değerin üzerindeyse, döngü IOB limiti verilen değerin altına düşene kadar insülin dozlamayı durdurur.

OpenAPS SMB kullanılarak hesaplanan max-IOB, OpenAPS AMA'dakinden farklıdır. AMA'da maxIOB, bazal IOB için yalnızca bir güvenlik parametresiyken, SMB modunda bolus IOB'u da içerir. İyi bir başlangıç

    maksIOB = ortalama öğün yemeği + 3x maksimum günlük bazal olacaktır
    

Dikkatli ve sabırlı olun ve ayarlarınızı adım adım değiştirin. Bu ayarlar herkes için farklıdır ve ayrıca ortalama günlük toplam doza (GTD) bağlıdır. Güvenlik nedeniyle, hastanın yaşına bağlı olarak bir sınır vardır. maksIOB sabit limiti, [AMA](../Usage/Open-APS-features#max-u-hr-a-temp-basal-can-be-set-to-openaps-max-basal)'dan daha yüksektir.

* Çocuk: 3
* Genç: 7
* Yetişkin: 12
* İnsüline dirençli yetişkin: 25
* Hamile: 40

*Ayrıca [sabit kodlanmış limitlere genel bakış](../Usage/Open-APS-features#overview-of-hard-coded-limits) konusuna bakın.*

Ayrıca [SMB için OpenAPS dokümantasyonuna](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb) bakın.

### AMA Otoduyarlılığı Etkinleştirme

[Duyarlılık algılaması](../Configuration/Sensitivity-detection-and-COB.md) kısmında 'otoduyarlılık' özelliğini kullanmak isteyip istemediğinizi seçebilirsiniz.

### SMB (Super Mikro Bolus) etkinleştir

Burada SMB özelliğini etkinleştirebilir veya tamamen devre dışı bırakabilirsiniz.

### SMB'yi COB ile etkinleştir

COB aktif olduğunda SMB çalışır.

### Geçici hedeflerle SMB'yi etkinleştir

SMB, düşük veya yüksek bir geçici hedef etkin olduğunda çalışır (yakında öğün, aktivite, hipo, özel)

### Yüksek geçici hedeflerle SMB'yi etkinleştir

SMB, yüksek bir geçici hedef etkin (aktivite, hipo) olduğunda çalışır. Bu seçenek diğer SMB ayarlarını sınırlayabilir, yani 'geçici hedeflerle SMB' etkinse ve 'yüksek geçici hedeflerle SMB' devre dışı bırakılırsa, SMB sadece düşük geçici hedeflerle çalışır. COB ile etkin SMB de aynıdır: Eğer 'yüksek geçici hedeflerle SMB' devre dışı bırakılırsa, COB olsa bile yüksek geçici hedefte SMB verilmeyecektir.

### SMB'yi her zaman etkinleştir

SMB her zaman çalışır (COB'dan, geçici hedeflerden veya boluslardan bağımsız). Güvenlik nedenleriyle, bu seçenek gürültülü veriler için güzel bir filtreleme sistemine sahip olan KŞ kaynakları içindir. Şimdilik yalnızca Dexcom G5 veya G6 kullanıyorsanız ['Kendi Dexcom uygulamanı yap (Byoda)'](../Hardware/DexcomG6#if-using-g6-with-build-your-own-dexcom-app) ile veya xDrip+'da "yerel mod" etkin olarak çalışır. Bir KŞ değerinin çok büyük bir sapması varsa, G5/G6 bunu göndermez ve 5 dakika sonra bir sonraki değeri bekler.

Freestyle Libre gibi diğer CGM/FGM için, xDrip+ daha iyi bir gürültü yumuşatma eklentisine sahip olana kadar 'SMB her zaman' devre dışı bırakılır. Daha fazla bilgiyi [burada](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) bulabilirsiniz.

### Yemeklerden sonra SMB'yi etkinleştir

SMB, COB 0 olsa bile karbonhidrat alındıktan 6 saat süreyle çalışır. Güvenlik nedenleriyle, bu seçenek gürültülü veriler için güzel bir filtreleme sistemine sahip olan KŞ kaynakları içindir. Şimdilik yalnızca Dexcom G5 veya G6 kullanıyorsanız ['Kendi Dexcom uygulamanı yap (Byoda)'](../Hardware/DexcomG6#if-using-g6-with-build-your-own-dexcom-app) ile veya xDrip+'da "yerel mod" etkin olarak çalışır. Bir KŞ değerinin çok büyük bir sapması varsa, G5/G6 bunu göndermez ve 5 dakika sonra bir sonraki değeri bekler.

Freestyle Libre gibi diğer CGM/FGM için, 'Karbonhidrattan sonra SMB'yi etkinleştir', xDrip+ daha iyi bir gürültü yumuşatma eklentisine sahip olana kadar devre dışı bırakılır. Daha fazla bilgiyi [burada](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) bulabilirsiniz.

### SMB'yi sınırlamak için maksimum bazal dakika

Bu önemli bir güvenlik ayarıdır. Bu değer, belirli bir zaman aralığında verilen bazal insülin miktarına göre aktif karbonhidratları (COB) kapsayacak ne kadar SMB verilebileceğini belirler.

Bu, SMB'yi daha agresif hale getirir. Başlangıç için, varsayılan değer olan 30 dakika ile başlamalısınız. Biraz deneyimden sonra 15 dakikalık adımlarla değeri artırabilir ve bu değişikliklerin nasıl etkilediğini izleyebilirsiniz.

Değerin 90 dakikadan daha yüksek ayarlanmaması önerilir, çünkü bu, algoritmanın 0 IE/s bazal ('sıfır-geçici') ile azalan bir KŞ'ni ayarlayamayacağı bir zamana ulaşabilir. Ayrıca, özellikle hala yeni ayarları test ediyorsanız, sizi hipolara girmeden önce uyaran alarmlar kurmalısınız.

Varsayılan değer: 30 dak.

### UAM etkinleştir

Bu seçenek etkinleştirildiğinde, SMB algoritması habersiz öğünleri algılayabilir. AndroidAPS'e karbonhidratlarınızı yamayı unutursanız veya karbonhidratlarınızı yanlış tahmin ederseniz ve girilen karbonhidrat miktarı yanlışsa veya çok miktarda yağ ve protein içeren bir öğün beklenenden daha uzun sürerse bu yararlıdır. Herhangi bir karbonhidrat girişi olmadan, UAM karbonhidrat, adrenalin vb. kaynaklı hızlı glikoz artışlarını algılayabilir ve SMB'ler ile ayarlamaya çalışır. Bu aynı zamanda tam tersi şekilde de çalışır: hızlı bir glikoz düşüşü varsa, SMB'leri daha erken durdurabilir.

**Bu nedenle, SMB kullanılırken UAM her zaman etkinleştirilmelidir.**

### Yüksek geçici hedefler duyarlılığı artırır

Bu seçeneği etkinleştirdiyseniz, 100 mg/dl veya 5,6 mmol/l üzerinde geçici bir hedefe sahipken insülin duyarlılığı artırılacaktır. Bu, IC ve bazal azalırken İDF'nin yükseleceği anlamına gelir.

### Düşük geçici hedefler duyarlılığı azaltır

Bu seçeneği etkinleştirirseniz, geçici bir hedef 100 mg/dl veya 5.6 mmol/l'den düşükken insülin duyarlılığı azalacaktır. Bu, IC ve bazal yükselirken İDF'nin azalacağı anlamına gelir.

### Gelişmiş Ayarlar

**Basit veriler yerine her zaman kısa ortalama delta kullan** Bu özelliği etkinleştirirseniz, AndroidAPS, genellikle son üç değerin ortalaması olan son 15 dakikadaki kısa ortalama delta/kan şekerini kullanır. Bu, AndroidAPS'in xDrip+ ve Libre gibi gürültülü veri kaynaklarıyla daha istikrarlı çalışmasına yardımcı olur.

**Maks günlük güvenlik çarpanı** Bu, önemli bir güvenlik limitidir. Varsayılan ayar (farklı bir ayar gerektirmez) 3'tür. Bu, AndroidAPS'in bir kullanıcının pompasında programlanan en yüksek saatlik bazal oranın 3 katından daha fazla olan geçici bir bazal oranı kabul etmeyeceği anlamına gelir. Örnek: En yüksek bazal oranınız 1,0 Ü/s ve maksimum günlük güvenlik çarpanı 3 ise, AndroidAPS maksimum geçici bazal oranı 3,0 Ü/s (= 3 x 1,0 U/sa) ayarlayabilir.

Varsayılan değer: 3 (Gerçekten ne yaptığınızı bilmiyor ve ihtiyaç duymuyorsanız değiştmeyin.)

**Mevcut Bazal güvenlik çarpanı** Bu, başka bir önemli güvenlik limitidir. Varsayılan ayar (farklı bir ayar gerektirmez) 4'tür. This means that AndroidAPS will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump.

Default value: 4 (shouldn’t be changed unless you really need to and know, what you are doing)

* * *

## Advanced Meal Assist (AMA)

AMA, the short form of "advanced meal assist" is an OpenAPS feature from 2017 (oref0). OpenAPS Advanced Meal Assist (AMA) allows the system to high-temp more quickly after a meal bolus if you enter carbs reliably.

You can find more information in the [OpenAPS documentation](https://newer-docs.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

### Max U/hr a Temp Basal can be set to (OpenAPS "max-basal")

This safety setting helps AndroidAPS from ever being capable of giving a dangerously high basal rate and limits the temp basal rate to x U/h. Mantıklı bir değer ayarlamanız önerilir. A good recommendation is to take the highest basal rate in your profile and multiply it by 4 and at least 3. For example, if the highest basal rate in your profile is 1.0 U/h you could multiply that by 4 to get a value of 4 U/h and set the 4 as your safety parameter.

You cannot chose any value: For safety reason, there is a 'hard limit', which depends on the patient age. The 'hard limit' for maxIOB is lower in AMA than in SMB. For children, the value is the lowest while for insulin resistant adults, it is the biggest.

The hardcoded parameters in AndroidAPS are:

* Çocuk: 2
* Genç: 5
* Yetişkin: 10
* Insulin resistant adult: 12
* Hamile: 25

*Ayrıca [sabit kodlanmış limitlere genel bakış](../Usage/Open-APS-features#overview-of-hard-coded-limits) konusuna bakın.*

### Maximum basal IOB OpenAPS can deliver \[U\] (OpenAPS "max-iob")

This parameter limits the maximum of basal IOB where AndroidAPS still works. If the IOB is higher, it stops giving additional basal insulin until the basal IOB is under the limit.

The default value is 2, but you should be rise this parameter slowly to see how much it affects you and which value fits best. Bu ayarlar herkes için farklıdır ve ayrıca ortalama günlük toplam doza (GTD) bağlıdır. Güvenlik nedeniyle, hastanın yaşına bağlı olarak bir sınır vardır. The 'hard limit' for maxIOB is lower in AMA than in SMB.

* Çocuk: 3
* Genç: 5
* Adult: 7
* Insulin resistant adult: 12
* Hamile: 25

*Ayrıca [sabit kodlanmış limitlere genel bakış](../Usage/Open-APS-features#overview-of-hard-coded-limits) konusuna bakın.*

### AMA Otoduyarlılığı Etkinleştirme

Here, you can chose, if you want to use the [sensitivity detection](../Configuration/Sensitivity-detection-and-COB.md) autosens or not.

### Autosens adjust temp targets too

If you have this option enabled, autosens can adjust targets (next to basal and ISF), too. This lets AndroidAPS work more 'aggressive' or not. The actual target might be reached faster with this.

### Gelişmiş Ayarlar

**Basit veriler yerine her zaman kısa ortalama delta kullan** Bu özelliği etkinleştirirseniz, AndroidAPS, genellikle son üç değerin ortalaması olan son 15 dakikadaki kısa ortalama delta/kan şekerini kullanır. Bu, AndroidAPS'in xDrip+ ve Libre gibi gürültülü veri kaynaklarıyla daha istikrarlı çalışmasına yardımcı olur.

**Maks günlük güvenlik çarpanı** Bu, önemli bir güvenlik limitidir. Varsayılan ayar (farklı bir ayar gerektirmez) 3'tür. Bu, AndroidAPS'in bir kullanıcının pompasında programlanan en yüksek saatlik bazal oranın 3 katından daha fazla olan geçici bir bazal oranı kabul etmeyeceği anlamına gelir. Örnek: En yüksek bazal oranınız 1,0 Ü/s ve maksimum günlük güvenlik çarpanı 3 ise, AndroidAPS maksimum geçici bazal oranı 3,0 Ü/s (= 3 x 1,0 U/sa) ayarlayabilir.

Varsayılan değer: 3 (Gerçekten ne yaptığınızı bilmiyor ve ihtiyaç duymuyorsanız değiştmeyin.)

**Mevcut Bazal güvenlik çarpanı** Bu, başka bir önemli güvenlik limitidir. Varsayılan ayar (farklı bir ayar gerektirmez) 4'tür. This means that AndroidAPS will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump.

Default value: 4 (shouldn’t be changed unless you really need to and know, what you are doing)

**Bolus snooze dia divisor** The feature “bolus snooze” works after a meal bolus. AAPS doesn’t set low temporary basal rates after a meal in the period of the DIA divided by the “bolus snooze”-parameter. The default value is 2. That means with a DIA of 5h, the “bolus snooze” would be 5h : 2 = 2.5h long.

Varsayılan değer: 2

## Kodlanmış limitlere genel bakış

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