(extended-carbs-ecarbs)=
# Yayma karbonhidratlar / "yKarb"

## yKarb nedir ve ne zaman faydalıdır?

Düzenli bir pompa tedavisinde yayma boluslar, kan şekerini insülinin etkisinden daha uzun sürede artıran yağlı veya başka türlü yavaş emilen yemeklerle baş etmenin iyi bir yoludur. Bununla birlikte bir döngü sistemi kullanıyorsanız uzatılmış boluslar o kadar anlamlı değildir (ve teknik zorluklar yaratır), çünkü yayma bolus temelde sabit bir yüksek geçici bazal hızdır, bu da döngü mantığına aykırıdır, çünkü bazal hızı dinamik olarak ayarlanır. For details see [extended bolus](../Usage/Extended-Carbs.md#why-extended-boluses-won-t-work-in-a-closed-loop-environment) below.

Döngü kullansanız da bu tip yemeklerle başetme ihtiyacı hala vardır. Bu nedenle, sürüm 2.0'dan itibaren AndroidAPS, yayma karbonhidratları veya yKarb'ları destekler.

yKarb, birkaç saat içinde parçalanan karbonhidratlardır. Yağ/protein içerikli olmayan standart öğünler için, karbonhidratları önden girmek (ve gerekirse ilk bolusu azaltmak) genellikle çok erken insülin verilmesini önlemek için yeterlidir.  Ancak, tam karbonhidrat girişinin SMB etkisiyle çok fazla AİNS ile sonuçlandığı daha yavaş emilen yemekler için, yKarb, karbonhidratların (ve diğer makrobesinler için girdiğiniz karbonhidrat eşdeğerlerinin) nasıl emildiğini ve kan şekerini nasıl etkilediğini daha doğru bir şekilde simüle etmek için kullanılabilir. Bu bilgi ile döngü, dinamik yayma bolus olarak görülebilen bu karbonhidratlarla başa çıkmak için SMB'leri daha kademeli olarak yönetebilir (Normalde döngü SMB'ler olmadan da çalışmalıdır, ancak muhtemelen etkisi daha az olacaktır).

**Note:** eCarbs aren't limited to fatty / protein heavy meals: they can be also be used to help in any situation where there are influences that increase the blood sugar, e.g. other medication like corticosteroids.

## yKarb kullanmanın mekaniği

To enter eCarbs, set a duration in the *Carbs* dialog on the overview tab, the total carbs and optionally a time shift (*numbers below are just examples, you will need to try your own values to arrive at satisfactory glucose response for your use-cases*):

```{image} ../images/eCarbs_Dialog.png
:alt: Karbonhidrat girişi
```

Genel bakış (Giriş) sekmesindeki yKarb, gelecekte karbonhidratları gösteren AKRB alanındaki parantez içindeki karbonhidratları not edin:

```{image} ../images/eCarbs_Graph.png
:alt: Grafikteki yKarb
```

Gelecekteki karbonhidrat girişleri, tedavi sekmesinde koyu turuncu renktedir:

```{image} ../images/eCarbs_Treatment.png
:alt: Tedavi sekmesinde gelecekteki yKarb
```

______________________________________________________________________

A way to handle fat and protein with that feature is described here: [https://adriansloop.blogspot.com/2018/04/page-margin-0.html](https://adriansloop.blogspot.com/2018/04/page-margin-0.html)

______________________________________________________________________

## Önerilen kurulum, örnek senaryo ve önemli notlar

The recommended setup is to use the OpenAPS SMB APS plugin, with SMBs enabled as well as the *Enable SMB with COB* preference being enabled.

A scenario e.g. for a Pizza might be to give a (partial) bolus up front via the *calculator* and then use the *carbs* button to enter the remaining carbs for a duration of 4-6 hours, starting after 1 or 2 hours.

**Important notes:** You'll need to try out and see which concrete values work for you of course. You might also carefully adjust the setting *max minutes of basal to limit SMB to* to make the algorithm more or less aggressive. Düşük karbonhidratlı, yüksek yağlı/proteinli öğünlerde, manuel bolus olmadan yalnızca yKarb kullanmak yeterli olabilir (yukarıdaki blog gönderisine bakın). yKarb oluşturulduğunda, girdileri yinelemeyi ve iyileştirmeyi kolaylaştırmak için tüm girdileri belgelemek için bir Careportal notu da oluşturulur.

(extended-bolus-and-why-they-wont-work-in-closed-loop-environment)=
## Yayma bolus ve neden kapalı döngü ortamında çalışmaz?

Yukarıda belirtildiği gibi, yayma veya çoklu yayma boluslar, kapalı döngü ortamında gerçekten çalışmaz. [See below](../Usage/Extended-Carbs.md#why-extended-boluses-won-t-work-in-a-closed-loop-environment) for details

(extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)=
### Yayma bolus ve açık döngüye geçiş - yalnızca Dana ve Insight pompası

Bazı insanlar, özel gıdaları alıştıkları şekilde tedavi uygulamak istedikleri için, yine de AAPS'de yayma bolus kullanmak istiyorlardı.

Bu nedenle 2.6 sürümünden itibaren Dana ve Insight pompa kullanıcıları için yayma bolus seçeneği vardır.

- Kapalı döngü otomatik olarak durdurulacak ve yayma bolus çalıştığı süre boyunca açık döngü moduna geçecektir.
- Bolus units, remaining and total time will be shown on homescreen.
- On Insight pump extended bolus is *not available* if [TBR emulation](../Configuration/Accu-Chek-Insight-Pump.md#settings-in-aaps) is used.

```{image} ../images/ExtendedBolus2_6.png
:alt: AAPS 2.6'da yayma bolus
```

(why-extended-boluses-won-t-work-in-a-closed-loop-environment)=
### Yayma boluslar neden kapalı döngü ortamında çalışmaz?

1. Şimdi döngü 1,55Ü/s teslim edileceğini belirler. Bunun yayma bir bolus olarak mı yoksa GBO olarak mı iletildiği, algoritma için önemli değildir. Aslında, bazı pompalar yayma bolusu kullanır. O zaman ne olmalı? Most pump drivers then stop the extended bolus -> You didn't even need to start it.

2. Girdi olarak yayma bolus yaptıysanız, modelde ne olması gerekir?

   1. Bazal oran ile birlikte nötr olarak kabul edilmeli ve döngüye devam mı edilmeli? O zaman, örneğin, düşük yaşarsanız ve tüm "nötr" insülin alınırsa, döngü de bolusu azaltabilmelidir?
   2. Yayma bolus basitçe eklenmeli mi? Yani döngünün devam etmesine izin verilmeli mi? En kötü hipoda bile mi? Bunun çok iyi olduğunu düşünmüyorum: Bir hipo öngörülüyor ama önlenmemeli mi?

3. Yayma bolusun oluşturduğu AİNS, algoritmanın bir sonraki çalışmasında yani 5 dakika sonra eklenir. Buna göre, döngü daha az bazal verecektir. So not much changes... except that the possibility of hypo avoidance is taken.
