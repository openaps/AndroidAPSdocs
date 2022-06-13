Yayma karbonhidratlar / "yCarbs"
**************************************************
yCarb nedir ve ne zaman faydalıdır?
==================================================
Düzenli bir pompa tedavisinde yayma boluslar, kan şekerini insülinin etkisinden daha uzun sürede artıran yağlı veya başka türlü yavaş emilen yemeklerle baş etmenin iyi bir yoludur. Bununla birlikte bir döngü sistemi kullanıyorsanız uzatılmış boluslar o kadar anlamlı değildir (ve teknik zorluklar yaratır), çünkü yayma bolus temelde sabit bir yüksek geçici bazal hızdır, bu da döngü mantığına aykırıdır, çünkü bazal hızı dinamik olarak ayarlanır. Ayrıntılar için aşağıdaki 'yayma bolus <../Usage/Extended-Carbs.html#why-extended-boluses-won-t-work-in-a-closed-loop-environment>'__ bölümüne bakın.

Döngü kullansanız da bu tip yemeklerle başetme ihtiyacı hala vardır. Bu nedenle, sürüm 2.0'dan itibaren AndroidAPS, yayma karbonhidratları veya yKarb'ları destekler.

yKarb, birkaç saat içinde parçalanan karbonhidratlardır. Yağ/protein içerikli olmayan standart öğünler için, karbonhidratları önden girmek (ve gerekirse ilk bolusu azaltmak) genellikle çok erken insülin verilmesini önlemek için yeterlidir.  Ancak, tam karbonhidrat girişinin SMB etkisiyle çok fazla IOB ile sonuçlandığı daha yavaş emilen yemekler için, eCarbs, karbonhidratların (ve diğer makrobesinler için girdiğiniz karbonhidrat eşdeğerlerinin) nasıl emildiğini ve kan şekerini nasıl etkilediğini daha doğru bir şekilde simüle etmek için kullanılabilir. Bu bilgi ile döngü, dinamik yayma bolus olarak görülebilen bu karbonhidratlarla başa çıkmak için SMB'leri daha kademeli olarak yönetebilir (Normalde döngü SMB'ler olmadan da çalışmalıdır, ancak muhtemelen etkisi daha az olacaktır).

**Not:** yKarb, yağlı / protein ağırlıklı yemeklerle sınırlı değildir: kan şekerini artıran etkilerin olduğu herhangi bir durumda yardımcı olmak için de kullanılabilirler, örn. kortikosteroidler gibi diğer ilaçlar.

yKarb kullanmanın mekaniği
==================================================
yKarb girmek için, genel bakış (Giriş) sekmesindeki *Karbonhidrat* iletişim kutusunda bir süre, toplam karbonhidrat ve isteğe bağlı olarak bir zaman kayması ayarlayın (*aşağıdaki sayılar sadece örnektir, kullanım durumlarınız için tatmin edici glikoz yanıtına ulaşmak için kendi değerlerinizi denemeniz gerekecektir*):

.. image:: ../images/eCarbs_Dialog.png
  :alt: Karbonhidrat girişi

Genel bakış (Giriş) sekmesindeki yKarb, gelecekte karbonhidratları gösteren COB alanındaki parantez içindeki karbonhidratları not edin:

.. image:: ../images/eCarbs_Graph.png
  :alt: Grafikteki yKarb

Gelecekteki karbonhidrat girişleri, tedavi sekmesinde koyu turuncu renktedir:

.. image:: ../images/eCarbs_Treatment.png
  :alt: Tedavi sekmesinde gelecekteki yKarb


-----

Aşağıdaki linkte özellikle yağ ve proteini işlemenin bir yolu açıklanmaktadır: `https://adriansloop.blogspot.com/2018/04/page-margin-0.html <https://adriansloop.blogspot.com/2018/04 /page-margin-0.html>`_

-----

Önerilen kurulum, örnek senaryo ve önemli notlar
=====================================================================
Önerilen kurulum, SMB'ler etkinken ve *COB ile SMB'yi Etkinleştir* tercihi etkinken OpenAPS SMB APS eklentisini kullanmaktır.

Bir senaryo ör. Bir Pizza için, *hesap makinesi* aracılığıyla önden (kısmi) bir bolus vermek ve ardından 1 veya 2 saat sonra başlamak üzere 4-6 saat süreyle *karbonhidrat* düğmesini kullanarak kalan karbonhidratları girmek olabilir. 

**Önemli notlar:** Elbette sizin için hangi somut değerlerin işe yaradığını denemeniz ve görmeniz gerekecek. Algoritmayı daha fazla veya daha az agresif hale getirmek için *SMB'yi sınırlamak için maksimum bazal dakika* ayarını dikkatli bir şekilde ayarlayabilirsiniz.
Düşük karbonhidratlı, yüksek yağlı/proteinli öğünlerde, manuel bolus olmadan yalnızca yKarb kullanmak yeterli olabilir (yukarıdaki blog gönderisine bakın). yKarb oluşturulduğunda, girdileri yinelemeyi ve iyileştirmeyi kolaylaştırmak için tüm girdileri belgelemek için bir Careportal notu da oluşturulur.

Yayma bolus ve neden kapalı döngü ortamında çalışmaz?
=====================================================================
Yukarıda belirtildiği gibi, yayma veya çoklu yayma boluslar, kapalı döngü ortamında gerçekten çalışmaz. `Ayrıntılar için aşağıya bakın <../Usage/Extended-Carbs.html#why-extended-boluses-won-t-work-in-a-closed-loop-environment>`_

Yayma bolus ve açık döngüye geçiş - yalnızca Dana ve Insight pompası
-----------------------------------------------------------------------------
Bazı insanlar, özel gıdaları alıştıkları şekilde tedavi uygulamak istedikleri için, yine de AAPS'de yayma bolus kullanmak istiyorlardı. 

Bu nedenle 2.6 sürümünden itibaren Dana ve Insight pompa kullanıcıları için yayma bolus seçeneği vardır. 

* Kapalı döngü, yayma bolus çalıştığı süre boyunca otomatik olarak durdurulacak ve açık döngü moduna geçecektir. 
* Kalan Bolus ve toplam süre ana ekranda gösterilecektir.
* Insight pompasında `GBO emülasyonu <../Configuration/Accu-Chek-Insight-Pump.html#settings-in-aaps>`_ kullanılıyorsa yayma bolus *mevcut değildir*. 

.. image:: ../images/ExtendedBolus2_6.png
  :alt: AAPS 2.6'da yayma bolus

Yayma boluslar neden kapalı döngü ortamında çalışmaz?
----------------------------------------------------------------------------------------------------
1. Şimdi döngü 1,55Ü/s teslim edileceğini belirler. Bunun yayma bir bolus olarak mı yoksa GBO olarak mı iletildiği, algoritma için önemli değildir. Aslında, bazı pompalar yayma bolusu kullanır. What should happen then? Most pump drivers then stop the extended bolus -> You didn't even need to start it.
2. If you had the extended bolus as input, what should happen in the model?

   1. Should it be considered neutral together with the BR and looped on it? Then the loop should also be able to reduce the bolus if, for example, you get too low and all the "neutral" insulin is taken away?
   2. Should the extended bolus simply be added? So the loop should simply be allowed to continue? Even in the worst hypo? I don't think this is so good: A hypo is foreseen but it must not be prevented?
   
3. The IOB that the extended bolus builds up materializes after 5 minutes at the next run. Accordingly, the loop would give less basal. So not much changes... except that the possibility of hypo avoidance is taken.
