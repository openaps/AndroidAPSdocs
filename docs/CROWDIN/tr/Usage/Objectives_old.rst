Android APS 2.8.2.1 itibariyle görevler
**************************************************
Bu, Android APS Görevlerinin en son sürümü değil.  Bu sayfa, sürüm 3.0'dan önce yürürlükte olan görevleri detaylandırır.  Android'in daha eski bir sürümünü kullanan herkes (ör. Android 9) öncesi ve Android APS 2.8.2.1 sürümü bu sayfaya başvurmalıdır.  

Geçerli görevler kümesi için lütfen `bu sayfaya <../Usage/Objectives.html>`_ bakın.

AndroidAPS, güvenli döngü özellikleri ve ayarlarında size yol göstermek için tamamlanması gereken bir dizi Görevlere sahiptir.  Yukarıdaki bölümlerde ayrıntıları verilen her şeyi doğru bir şekilde yapılandırdığınızdan ve sisteminizin ne yaptığını ve neden ona güvenebileceğinizi anladığınızdan emin olurlar.

**Telefonları yükseltiyorsanız**, görevlerde ilerlemenizi sürdürmek için `ayarlarınızı dışa aktarabilirsiniz <../Usage/ExportImportSettings.html>`_. Yalnızca görevlerdeki ilerlemeniz kaydedilmeyecek, aynı zamanda maksimum bolus vb. güvenlik ayarlarınız da kaydedilecektir.  Ayarlarınızı dışa ve içe aktarmazsanız, görevlere en baştan başlamanız gerekir.  Her ihtimale karşı `ayarlarınızı sıklıkla yedeklemek <../Usage/ExportImportSettings.html>`_ iyi bir fikirdir.

Görevlere geri dönmek istiyorsanız, `aşağıdaki açıklamaya bakın <../Usage/Objectives.html#görevlere-geri-dönme>`_.
 
Görev 1: Görselleştirme ve izleme ayarları, bazal ve oranlarını analize etme
====================================================================================================
* Kurulumunuz için doğru kan şekeri kaynağını seçin.  Daha fazla bilgi için `KŞ Kaynağı <../Configuration/BG-Source.html>`_ bölümüne bakın.
* Pompa durumunuzun AndroidAPS ile iletişim kurabilmesini sağlamak için Konfrigasyon Ayarlarında doğru Pompayı seçin (döngü için AndroidAPS sürücüsü olmayan bir pompa modeli kullanıyorsanız Sanal Pompa'yı seçin).  
* DanaR pompa kullanıyorsanız, pompa ile AndroidAPS arasındaki bağlantıyı sağlamak için `DanaR İnsülin Pompası <../Configuration/DanaR-Insulin-Pump.html>`_ talimatlarını uyguladığınızdan emin olun.
* Nightscout'un bu verileri alıp görüntüleyebildiğinden emin olmak için `Nightscout <../Installing-AndroidAPS/Nightscout.html>`_ sayfasındaki talimatları izleyin.
* NSClient'teki URL'nin sonunda **/api/v1/** kısmı OLMADAN olması gerektiğini unutmayın - `Tercihler'deki NSClient ayarlarına bakın <../Configuration/Preferences.html#nsclient>`__.

*AndroidAPS'in tanıması için bir sonraki kan şekeri ölçümünün gelmesini beklemeniz gerekebilir.*

Görev 2: AndroidAPS'yi nasıl kontrol edeceğinizi öğrenin
==================================================
* Bu görevde açıklandığı gibi AndroidAPS'de çeşitli eylemler gerçekleştirin.
* Tek tek görevlere ulaşmak için turuncu renkli "Henüz tamamlanmadı" metnine tıklayın.
* Henüz belirli bir eyleme aşina değilseniz, size rehberlik edecek bağlantılar sağlanacaktır.

  .. image:: ../images/Objective2_V2_5.png
    :alt: Screenshot Görev 2

Görev 3: Bilginizi kanıtlayın
==================================================
* Çeşitli AndroidAPS ve kapalı döngü konularında çok seçmeli soruları yanıtlayın.
* Soru ve cevap seçeneklerinin bulunduğu sayfaya erişmek için turuncu renkli "Henüz tamamlanmadı" yazısına tıklayın.

  .. image:: ../images/Objective3_V2_5.png
    :alt: Screenshot Görev 3

* Henüz doğru cevaplardan emin değilseniz, size rehberlik edecek bağlantılar sağlanacaktır.
* Görev 3 için sorular, AAPS 2.8'den itibaren anadili İngilizce olan kişiler tarafından tamamen yeniden yazılmıştır. Yenileri aynı temel konuları ve birkaç yeni konuyu kapsar.
* Bu yeni sorular, önceki sürümlerde 3. görev başarıyla tamamlamış olsanız bile, bazı cevaplanmayan sorulara yol açacaktır.
* Cevaplanmamış sorular, yalnızca yeni bir göreve başlarsanız sizi etkileyecektir. Başka bir deyişle: Tüm görevleri zaten tamamladıysanız, daha sonra AAPS işlevlerini kaybetmeden bekleyebilir ve yeni soruları yanıtlayabilirsiniz.

Görev 4: Bir Açık döngüye başlamak
==================================================
* Tercihler'den veya ana ekranın sol üst köşesindeki Döngü düğmesini basılı tutarak Döngü Aç'ı seçin.
* AndroidAPS'yi ihtiyaçlarınıza göre özelleştirmek için `Tercihler <../Configuration/Preferences.html>`__ üzerinden çalışın.
* 7 günlük bir süre boyunca geçici bazal oran önerilerinin en az 20'sini manuel olarak yürürlüğe koyun; bunları pompanıza girin ve AndroidAPS'de kabul ettiğinizi onaylayın.  Bu verilerin AndroidAPS ve Nightscout'ta gösterildiğinden emin olun.
* Gerekirse `geçici hedefleri <../Usage/temptarget.html>`_ etkinleştirin. Bir hipodan sonra yükselen kan şekeri nedeniyle sistemin çok güçlü düzeltme yapmasını önlemek için hipo geçici hedeflerini kullanın. 

Bildirim sayısını azaltın
--------------------------------------------------
* Açık Döngüdeyken alınacak karar sayısını azaltmak için 90 - 150 mg/dl veya 5,0 - 8,5 mmol/l gibi geniş bir hedef aralığı belirleyin.
* Hatta geceleri üst sınırı genişletmek (veya Açık Döngüyü devre dışı bırakmak) isteyebilirsiniz. 
* Tercihler'de bazal oran değişikliği önerisi için bir minimum yüzde belirleyebilirsiniz.

  .. image:: ../images/OpenLoop_MinimalRequestChange2.png
    :alt: Açık Döngü minimum istek değişikliği
     
* Ayrıca her öneriye her 5 dakikada bir cevap vermek zorunda da değilsiniz...

Görev 5: Geçici bazal önerileri de dahil olmak üzere açık döngünüzü anlamak
====================================================================================================
* Geçici bazal önerilerin ardındaki düşünceyi, aşağıdakilere bakarak anlamaya başlayın 'Temel mantığı belirleme <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html>'_ ve hem 'AndroidAPS ana ekranındaki tahmin satırına <../Getting-Started/Screenshots.html#prediction-lines>' _/Nightscout ve OpenAPS sekmenizdeki hesaplamalardan elde edilen çıktıların özeti.
 
Hesaplamalardan ve ayarlardan emin olana kadar hedefinizi normalden daha yükseğe koymak isteyeceksiniz.  Sistem izin verdiğince

* düşük hedef için minimum 4 mmol (72 mg/dl) veya maksimum 10 mmol (180 mg/dl) olacak şekilde 
* yüksek hedef için minimum 5 mmol (90 mg/dl) veya maksimum 15 mmol (225 mg/dl) olacak şekilde
* tek bir değer olacak şekilde geçici bir hedef, 4 mmol ila 15 mmol (72 mg/dl ila 225 mg/dl) aralığında herhangi bir yerde olabilir

Hedef hesaplamaların dayandığı değerdir ve kan şekeri değerlerinizi içinde tutmayı amaçladığınız değerle aynı değildir.  Hedefiniz çok genişse (örneğin, 3 veya daha fazla mmol [50 mg/dl veya daha fazla] genişlik), genellikle çok az AAPS eylemi bulacaksınız. Bunun nedeni, kan şekerinin eninde sonunda bu geniş aralıkta bir yerde olacağı tahmin edilmesidir ve bu nedenle çok fazla dalgalı geçici bazal hız önerilmemektedir. 

Hedeflerinizi birbirine daha yakın bir aralıkta (örneğin 1 veya daha az mmol [20 mg/dl veya daha az] genişlikte) olacak şekilde ayarlamayı deneyebilir ve sonuç olarak sisteminizin davranışının nasıl değiştiğini gözlemleyebilirsiniz.  

Görselleştirme Aralığı'na farklı değerler buradan `Tercihler <../Configuration/Preferences.html>`__ > girerek kan şekerinizi tutmayı amaçladığınız değerler için grafikte daha geniş bir aralık (yeşil çizgiler) görüntüleyebilirsiniz.
 
.. image:: ../images/sign_stop.png
  :alt: Dur işareti

Sanal bir pompa ile açık döngü yapıyorsanız burada durun - bu hedefin sonunda sakın Doğrula'ya tıklamayın.
------------------------------------------------------------------------------------------------------------------------------------------------------

.. image:: ../images/blank.png
  :alt: boş

Görev 6: Düşük KŞ'de Duraklatma ile döngüyü kapatmaya başlamak
====================================================================================================
.. image:: ../images/sign_warning.png
  :alt: Uyarı işareti
  
Kapalı döngü, düşük glikoz duraklatma ile sınırlı olduğundan, görev 6'daki yüksek kş değerlerini düzeltmeyecektir. Yüksek kş değerleri sizin tarafınızdan manuel olarak düzeltilmelidir!
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
* `Tercihler <../Configuration/Preferences.html>`__ içinden veya ana ekranın sol üst köşesindeki Açık Döngü düğmesini basılı tutarak Kapalı Döngü'yü seçin.
* Güvende olmak için hedef aralığınızı genellikle hedeflediğinizden biraz daha yükseğe ayarlayın.
* Ana ekranda mavi bazal metnini veya ana ekran grafiğinde mavi bazal oluşturmayı görüntüleyerek geçici bazallerin nasıl aktif olduğunu izleyin.
* 5 günlük bir süre boyunca düşük glikozu tedavi etmekten kaçınmak için ayarlarınızın AndroidAPS'yi desteklediğinden emin olun.  Hala sık veya şiddetli düşük glikoz atakları yaşıyorsanız, DIA, bazal, ISF ve karbonhidrat oranlarınızı iyileştirmeyi düşünün.
* Ayarlarınızı değiştirmeniz gerekmez. Görev 6 sırasında maxAİNS ayarı dahili olarak otomatik olarak sıfıra ayarlanır. Görev 7'ye geçildiğinde bu geçersiz kılma tersine çevrilecektir.
* Sistem, maxAİNS ayarlarınızı sıfır olarak geçersiz kılar; bu kan şekeri düşüyorsa sizin için bazali azaltabileceği anlamına gelir, ancak kan şekeri yükseliyorsa, yalnızca bazal AİNS negatifse (önceki Düşük Glikoz Duraklatmadan) bazal artacaktır. Aksi takdirde bazal oranlar seçtiğiniz profille aynı kalacaktır.  

  .. image:: ../images/Objective6_negIOB.png
    :alt: Örnek negatif AİNS

* Bazal AİNS'niz negatifse (üstteki ekran görüntüsüne bakın) görev 6'da da bir GBO > %100 verilebilir.
* Tedavi edilen hipoları takiben, geri tepmede bazal artırma yeteneği olmadan geçici olarak ani artışlar yaşayabilirsiniz.

Görev 7: Kapalı döngüyü ayarlamak, maksimum AİNS'i 0'ın üzerine çıkarmak ve KŞ hedeflerini kademeli olarak düşürmek
====================================================================================================
* 'Maksimum toplam Aktif İnsülin (AİNS) değerinizi OpenAPS aşamaz' (OpenAPS'de 'maks-ains' olarak adlandırılır) değerini 1 günlük bir süre boyunca 0'ın üzerine yükseltin, varsayılan öneri "ortalama yemek bolusu + 3x maksimum günlük bazal" (SMB algoritması için) veya "3x maks günlük bazal" (daha eski AMA algoritması için) Ancak ayarların sizde nasıl tepki verdiğini bilene kadar bu değeri yavaş yavaş yükseltmelisiniz. (maks günlük bazal = günün herhangi bir zaman dilimindeki maksimum saatlik değer).

  Bu öneri bir başlangıç noktası olarak görülmelidir. 3x'e ayarladıysanız ve sizi sert ve hızlı şekilde düşürüyorsa, o sayıyı düşürün. Eğer çok dirençliyseniz, her seferinde çok az yükseltin.

  .. image:: ../images/MaxDailyBasal2.png
    :alt: maks günlük bazal

* Döngü modellerinize ne kadar AİNS uyduğundan emin olduktan sonra hedeflerinizi istediğiniz seviyeye indirin.


Görev 8: Gerekirse bazalleri ve oranları ayarlayın ve ardından otoduyarlılığı etkinleştirin
====================================================================================================
* Bazallerinizin doğruluğunu kontrol etmek veya geleneksel bir bazal testi yapmak için `Otoayar <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html>`_ özelliğini bir defaya mahsus olarak kullanabilirsiniz.
* 7 günlük bir süre boyunca `Otoduyarlılık <../Usage/Open-APS-features.html>`_ özelliğini etkinleştirin ve ana ekran grafiğindeki beyaz çizginin, insülin duyarlılığınızın bir sonucu olarak egzersiz veya hormonlar vb. durumlarda nasıl yükseldiğini veya düştüğünü göstermesini izleyin. ve AndroidAPS'nin bazalları ve/veya hedefleri buna göre nasıl ayarladığını OpenAPS rapor sekmesinde izleyin.

*Daha önce yapmadıysanız, * `bu forumdan <https://bit.ly/nowlooping>`_ * kendin yap DIY döngü yazılımınız olarak AndroidAPS'yi günlüğe kaydetmeyi unutmayın.*


Görev 9: Gündüz kullanımı için ek özellikleri deneyin ve kapalı döngü sisteminize güvenin
====================================================================================================
* AAPS sürüm 2.7'den önce öğün desteği (MA), AAPS için temel algoritmaydı ve görev 8'i tamamlamak, 'gelişmiş öğün desteğini (AMA) <../Usage/Open-APS-features.html#advanced-meal-assist-ama>`__etkinleştirmek için gerekliydi.
* 'Gelişmiş yemek yardımı (AMA) <../Usage/Open-APS-features.html#advanced-meal-assist-ama>'__, AAPS sürüm 2.7'den itibaren standart algoritma olduğundan, takip eden 28 günü henüz kullanmadığınız özellikleri denemek için kullanın ve kapalı döngü sisteminize daha fazla güvenin.


Görev 10: Süper mikro bolus (SMB) gibi gündüz kullanımı için ek oref1 özelliklerinin etkinleştirilmesi
====================================================================================================
* Bu wiki'deki `SMB bölümünü <../Usage/Open-APS-features.html#super-micro-bolus-smb>`_ ve openAPSdocs <https://openaps.readthedocs içindeki `oref1 bölümünü okumalısınız. io/en/latest/docs/Customize-Iterate/oref1.html>`_ SMB'nin nasıl çalıştığını, özellikle (zero-temping) uygulamasının ardındaki fikri anlamak için.
* O zaman SMB'ların sorunsuz çalışmasını sağlamak için `maxAİNS yükseltmeniz <../Usage/Open-APS-features.html#maximum-total-iob-openaps-cant-go-over-openaps-max-iob>`_ gerekir. maxAİNS artık yalnızca eklenmiş bazal değil, tüm AİNS'leri içeriyor. Yani bir öğün için 8 Ü bolus verilirse ve maksAİNS 7 Ü ise, IOB 7 Ü'nin altına düşene kadar hiçbir SMB iletilmez. İyi bir başlangıç maksAİNS = ortalama yemek bolusu + 3x maks günlük bazaldir (maks günlük bazal = günün herhangi bir zaman diliminde maksimum saatlik değer - bir örnek için `Görev 7'ye bakın <../Usage/Objectives.html#objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets>`_)
* absorpsiyon ayarlarındaki min_5m_carbimpact varsayılanı, AMA'dan SMB'ye giderken 3'ten 8'e değiştirildi. AMA'dan SMB'ye yükseltme yapıyorsanız, bunu manuel olarak değiştirmeniz gerekir.


Görev 11: Otomasyon
====================================================================================================
* `Otomasyonu <../Usage/Automation.html>`_ kullanabilmek için görev 11'e başlamanız gerekir.
* `<../Usage/Objectives.html#objective-3-prove-your-knowledge>`_ sınav dahil tüm göevleri tamamladığınızdan emin olun.
* Önceki görevleri tamamlamak, halihazırda tamamladığınız diğer görevleri etkilemeyecektir. Tüm tamamlanmış görevler korunacaktır!


Görevlere geri dön
====================================================================================================
Herhangi bir nedenle görevlere geri dönmek istiyorsanız, bunu "Komple tamamlandı" seçeneğine tıklayarak yapabilirsiniz.

.. image:: ../images/Objective_ClearFinished.png
  :alt: Görevlere geri dön
