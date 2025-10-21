(Extended-Carbs-extended-carbs-ecarbs)=
# Yayma karbonhidratlar / "yKarb"

## yKarb nedir ve ne zaman faydalıdır?

Düzenli bir pompa tedavisinde yayma boluslar, kan şekerini insülinin etkisinden daha uzun sürede artıran yağlı veya başka türlü yavaş emilen yemeklerle baş etmenin iyi bir yoludur. Bununla birlikte bir döngü sistemi kullanıyorsanız uzatılmış boluslar o kadar anlamlı değildir (ve teknik zorluklar yaratır), çünkü yayma bolus temelde sabit bir yüksek geçici bazal hızdır, bu da döngü mantığına aykırıdır, çünkü bazal hızı dinamik olarak ayarlanır. For details see [extended bolus](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment) below.

Döngü kullansanız da bu tip yemeklerle başetme ihtiyacı hala vardır. Which is why AAPS as of version 2.0 supports so called extended carbs or eCarbs.

yKarb, birkaç saat içinde parçalanan karbonhidratlardır. Yağ/protein içerikli olmayan standart öğünler için, karbonhidratları önden girmek (ve gerekirse ilk bolusu azaltmak) genellikle çok erken insülin verilmesini önlemek için yeterlidir.  Ancak, tam karbonhidrat girişinin SMB etkisiyle çok fazla AİNS ile sonuçlandığı daha yavaş emilen yemekler için, yKarb, karbonhidratların (ve diğer makrobesinler için girdiğiniz karbonhidrat eşdeğerlerinin) nasıl emildiğini ve kan şekerini nasıl etkilediğini daha doğru bir şekilde simüle etmek için kullanılabilir. Bu bilgi ile döngü, dinamik yayma bolus olarak görülebilen bu karbonhidratlarla başa çıkmak için SMB'leri daha kademeli olarak yönetebilir (Normalde döngü SMB'ler olmadan da çalışmalıdır, ancak muhtemelen etkisi daha az olacaktır).

**Not:** yKarb, yağlı / protein ağırlıklı yemeklerle sınırlı değildir: kan şekerini artıran etkilerin olduğu herhangi bir durumda yardımcı olmak için de kullanılabilirler, örn.

## yKarb kullanmanın mekaniği

yKarb girmek için, genel bakış (Giriş) sekmesindeki *Karbonhidrat* iletişim kutusunda bir süre, toplam karbonhidrat ve isteğe bağlı olarak bir zaman kayması ayarlayın (*aşağıdaki sayılar sadece örnektir, kullanım durumlarınız için tatmin edici glikoz yanıtına ulaşmak için kendi değerlerinizi denemeniz gerekecektir*):

![Enter carbs](../images/eCarbs_Dialog.png)

Genel bakış (Giriş) sekmesindeki yKarb, gelecekte karbonhidratları gösteren AKRB alanındaki parantez içindeki karbonhidratları not edin:

![eCarbs in graph](../images/eCarbs_Graph.png)

______________________________________________________________________

Aşağıdaki linkte özellikle yağ ve proteini işlemenin bir yolu açıklanmaktadır: [https://adriansloop.blogspot.com/2018/04/page-margin-0.html](https://adriansloop.blogspot.com/2018/04/page-margin-0.html)

______________________________________________________________________

## Önerilen kurulum, örnek senaryo ve önemli notlar

Önerilen kurulum, SMB'ler etkinken ve *AKRB ile SMB'yi Etkinleştir* tercihi etkinken OpenAPS SMB APS eklentisini kullanmaktır.

Bir Pizza için, *hesap makinesi* aracılığıyla önden (kısmi) bir bolus vermek ve ardından 1 veya 2 saat sonra başlamak üzere 4-6 saat süreyle *karbonhidrat* butonunu kullanarak kalan karbonhidratları girmek olabilir.

**Önemli notlar:** Elbette sizin için hangi somut değerlerin işe yaradığını denemeniz ve görmeniz gerekecek. Algoritmayı daha fazla veya daha az agresif hale getirmek için *SMB'yi sınırlamak için maksimum bazal dakika* ayarını dikkatli bir şekilde ayarlayabilirsiniz. Düşük karbonhidratlı, yüksek yağlı/proteinli öğünlerde, manuel bolus olmadan yalnızca yKarb kullanmak yeterli olabilir (yukarıdaki blog gönderisine bakın). yKarb oluşturulduğunda, girdileri yinelemeyi ve iyileştirmeyi kolaylaştırmak için tüm girdileri belgelemek için bir Careportal notu da oluşturulur.

(extended-bolus-and-why-they-wont-work-in-closed-loop-environment)=
## Yayma bolus ve neden kapalı döngü ortamında çalışmaz?

Yukarıda belirtildiği gibi, yayma veya çoklu yayma boluslar, kapalı döngü ortamında gerçekten çalışmaz. [See below](#why-extended-boluses-wont-work-in-a-closed-loop-environment) for details

(Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)=
### Yayma bolus ve açık döngüye geçiş - yalnızca Dana ve Insight pompası

Bazı insanlar, özel gıdaları alıştıkları şekilde tedavi uygulamak istedikleri için, yine de AAPS'de yayma bolus kullanmak istiyorlardı.

Bu nedenle 2.6 sürümünden itibaren Dana ve Insight pompa kullanıcıları için yayma bolus seçeneği vardır.

- Kapalı döngü otomatik olarak durdurulacak ve yayma bolus çalıştığı süre boyunca açık döngü moduna geçecektir.
- Kalan Bolus ve toplam süre ana ekranda gösterilecektir.
- On Insight pump extended bolus is *not available* if [TBR emulation](#Accu-Chek-Insight-Pump-settings-in-aaps) is used.

![Extended bolus in AAPS 2.6](../images/ExtendedBolus2_6.png)

(why-extended-boluses-won-t-work-in-a-closed-loop-environment)=
### Yayma boluslar neden kapalı döngü ortamında çalışmaz?

1. Şimdi döngü 1,55Ü/s teslim edileceğini belirler. Bunun yayma bir bolus olarak mı yoksa GBO olarak mı iletildiği, algoritma için önemli değildir. Aslında, bazı pompalar yayma bolusu kullanır. O zaman ne olmalı? Çoğu pompa sürücüsü daha sonra yayma bolusu durdurur -> Başlatmanıza bile gerek yoktur.

2. Girdi olarak yayma bolus yaptıysanız, modelde ne olması gerekir?

   1. Bazal oran ile birlikte nötr olarak kabul edilmeli ve döngüye devam mı edilmeli? O zaman, örneğin, düşük yaşarsanız ve tüm "nötr" insülin alınırsa, döngü de bolusu azaltabilmelidir?
   2. Yayma bolus basitçe eklenmeli mi? Yani döngünün devam etmesine izin verilmeli mi? En kötü hipoda bile mi? Bunun çok iyi olduğunu düşünmüyorum: Bir hipo öngörülüyor ama önlenmemeli mi?

3. Yayma bolusun oluşturduğu AİNS, algoritmanın bir sonraki çalışmasında yani 5 dakika sonra eklenir. Buna göre, döngü daha az bazal verecektir. Yani fazla bir değişiklik yok... hipodan kaçınma olasılığı dışında.
