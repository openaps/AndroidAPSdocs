Görevler
**************************************************

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
* Work through the `Preferences <../Configuration/Preferences.html>`__ to set up for you.
* Manually enact at least 20 of the temporary basal rate suggestions over a period of 7 days; input them to your pump and confirm in AndroidAPS that you have accepted them.  Ensure this data shows in AndroidAPS and Nightscout.
* Enable `temp targets <../Usage/temptarget.html>`_ if necessary. Use hypo temp targets to prevent that the system will correct too strong because of a raising blood glucose after a hypo. 

Reduce number of notifications
--------------------------------------------------
* To reduce the Number of decisions to be made while in Open Loop set wide target range like 90 - 150 mg/dl or 5,0 - 8,5 mmol/l.
* You might even want to wider upper limit (or disable Open Loop) at night. 
* In Preferences you can set a minimum percentage for suggestion of basal rate change.

  .. image:: ../images/OpenLoop_MinimalRequestChange2.png
    :alt: Open Loop minimal request change
     
* Also, you do not need to act every 5 minutes on all suggestions...

Objective 5: Understanding your open loop, including its temp basal recommendations
====================================================================================================
* Start to understand the thinking behind the temp basal recommendations by looking at the `determine basal logic <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html>`_ and both the `forecast line in AndroidAPS homescreen <../Getting-Started/Screenshots.html#prediction-lines>`_/Nightscout and the summary of outputs from the calculations in your OpenAPS tab.
 
You will want to set your target higher than usual until you are confident in the calculations and settings.  System allows

* a low target to be a minimum of 4 mmol (72 mg/dl) or maximum of 10 mmol (180 mg/dl) 
* a high target to be a minimum of 5 mmol (90 mg/dl) and maximum of 15 mmol (225 mg/dl)
* a temporary target as a single value can be anywhere in the range of 4 mmol to 15 mmol (72 mg/dl to 225 mg/dl)

The target is the value that calculations are based on, and not the same as where you aim to keep your blood glucose values within.  If your target is very wide (say, 3 or more mmol [50 mg/dl or more] wide), you will often find little AAPS action. This is because blood glucose is eventually predicted to be somewhere in that wide range and therefore not many fluctuating temporary basal rates are suggested. 

You may want to experiment with adjusting your targets to be a closer together range (say, 1 or less mmol [20 mg/dl or less] wide) and observe how the behavior of your system changes as a result.  

You can view a wider range (green lines) on the graph for the values you aim to keep your blood glucose within by entering different values in `Preferences <../Configuration/Preferences.html>`__ > Range for Visualisation.
 
.. image:: ../images/sign_stop.png
  :alt: Stop sign

Stop here if you are open looping with a virtual pump - do not click Verify at the end of this objective.
------------------------------------------------------------------------------------------------------------------------------------------------------

.. image:: ../images/blank.png
  :alt: blank

Görev 6: Düşük KŞ'de Duraklatma ile döngüyü kapatmaya başlamak
====================================================================================================
.. image:: ../images/sign_warning.png
  :alt: Warning sign
  
Kapalı döngü, düşük glikoz duraklatma ile sınırlı olduğundan, görev 6'daki yüksek kş değerlerini düzeltmeyecektir. High bg values have to be corrected manually by you!
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
* Select Closed Loop either from `Preferences <../Configuration/Preferences.html>`__ or by pressing and holding the Open Loop button in the top left of the home screen.
* Set your target range slightly higher than you usually aim for, just to be safe.
* Watch  how temporary basals are active by viewing the blue basal text on the homescreen or the blue basal render on the homescreen graph.
* Ensure your settings have supported AndroidAPS to avoid having to treat a low glucose over a period of 5 days.  If you are still having frequent or severe low glucose episodes then consider refining your DIA, basal, ISF and carb ratios.
* You don't have to change your settings. During objective 6 maxIOB setting is internally set to zero automatically. This override will be reversed when moving to objective 7.
* Sistem, maxIOB ayarlarınızı sıfır olarak geçersiz kılar; bu kan şekeri düşüyorsa sizin için bazali azaltabileceği anlamına gelir, ancak kan şekeri yükseliyorsa, yalnızca bazal IOB negatifse (önceki Düşük Glikoz Duraklatmadan) bazal artacaktır. Aksi takdirde bazal oranlar seçtiğiniz profille aynı kalacaktır.  

  .. image:: ../images/Objective6_negIOB.png
    :alt: Example negative IOB

* If your basal IOB is negative (see screenshot above) a TBR > 100% can be issued also in objective 6.
* You may temporarily experience spikes following treated hypos without the ability to increase basal on the rebound.

Objective 7: Tuning the closed loop, raising max IOB above 0 and gradually lowering BG targets
====================================================================================================
* Raise your 'Maximum total IOB OpenAPS can’t go over' (in OpenAPS called 'max-iob') above 0 over a period of 1 day, the default recommendation is "average mealbolus + 3x max daily basal"(for SMB algorithm) or "3x max daily basal" (for older AMA algorithm) but you should slowly work up to this until you know your settings work for you (max daily basal = the maximum hourly value in any time segment of the day).

  Bu öneri bir başlangıç noktası olarak görülmelidir. 3x'e ayarladıysanız ve sizi sert ve hızlı şekilde düşürüyorsa, o sayıyı düşürün. Eğer çok dirençliyseniz, her seferinde çok az yükseltin.

  .. image:: ../images/MaxDailyBasal2.png
    :alt: maks günlük bazal

* Döngü modellerinize ne kadar IOB uyduğundan emin olduktan sonra hedeflerinizi istediğiniz seviyeye indirin.


Görev 8: Gerekirse bazalleri ve oranları ayarlayın ve ardından otoduyarlılığı etkinleştirin
====================================================================================================
* Bazallerinizin doğruluğunu kontrol etmek veya geleneksel bir bazal testi yapmak için `Otoayar <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html>`_ özelliğini bir defaya mahsus olarak kullanabilirsiniz.
* 7 günlük bir süre boyunca `Otoduyarlılık <../Usage/Open-APS-features.html>`_ özelliğini etkinleştirin ve ana ekran grafiğindeki beyaz çizginin, insülin duyarlılığınızın bir sonucu olarak egzersiz veya hormonlar vb. durumlarda nasıl yükseldiğini veya düştüğünü göstermesini izleyin. ve AndroidAPS'nin bazalları ve/veya hedefleri buna göre nasıl ayarladığını OpenAPS rapor sekmesinde izleyin.

*Daha önce yapmadıysanız, * `bu forumdan <https://bit.ly/nowlooping>`_ * kendin yap DIY döngü yazılımınız olarak AndroidAPS'yi günlüğe kaydetmeyi unutmayın.*


Görev 9: Süper mikro bolus (SMB) gibi gündüz kullanımı için ek oref1 özelliklerinin etkinleştirilmesi
====================================================================================================
* Bu wiki'deki `SMB bölümünü <../Usage/Open-APS-features.html#super-micro-bolus-smb>`_ ve openAPSdocs <https://openaps.readthedocs içindeki `oref1 bölümünü okumalısınız. io/en/latest/docs/Customize-Iterate/oref1.html>`_ SMB'nin nasıl çalıştığını, özellikle (zero-temping) uygulamasının ardındaki fikri anlamak için.
* O zaman SMB'ların sorunsuz çalışmasını sağlamak için `maxIOB yükseltmeniz <../Usage/Open-APS-features.html#maximum-total-iob-openaps-cant-go-over-openaps-max-iob>`_ gerekir. maxIOB artık yalnızca eklenmiş bazal değil, tüm IOB'leri içeriyor. Yani bir öğün için 8 Ü bolus verilirse ve maksIOB 7 Ü ise, IOB 7 Ü'nin altına düşene kadar hiçbir SMB iletilmez. İyi bir başlangıç maksIOB = ortalama yemek bolusu + 3x maks günlük bazaldir (maks günlük bazal = günün herhangi bir zaman diliminde maksimum saatlik değer - bir örnek için `Görev 7'ye bakın <../Usage/Objectives.html#objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets>`_)
* absorpsiyon ayarlarındaki min_5m_carbimpact varsayılanı, AMA'dan SMB'ye giderken 3'ten 8'e değiştirildi. AMA'dan SMB'ye yükseltme yapıyorsanız, bunu manuel olarak değiştirmeniz gerekir.


Görev 10: Otomasyon
====================================================================================================
* `Otomasyon <../Usage/Automation.html>`_ kullanmak için görev 10'a başlamanız gerekir.
* `<../Usage/Objectives.html#objective-3-prove-your-knowledge>`_ sınav dahil tüm göevleri tamamladığınızdan emin olun.
* Önceki görevleri tamamlamak, halihazırda tamamladığınız diğer görevleri etkilemeyecektir. Tüm tamamlanmış görevler korunacaktır!


Görevlere geri dön
====================================================================================================
Herhangi bir nedenle görevlere geri dönmek istiyorsanız, bunu "Komple tamamlandı" seçeneğine tıklayarak yapabilirsiniz.

.. image:: ../images/Objective_ClearFinished.png
  :alt: Görevlere geri dön

3.0 sürümünden önceki Android APS'deki görevler
====================================================================================================
Android APS 3.0 yayınlandığında bir hedef kaldırıldı.  Daha eski Android yazılımı (yani sürüm 9'dan önceki) kullanan Android APS sürüm 2.8.2.1 kullanıcıları, "buradan <../Usage/Objectives_old.html>". bulunabilecek daha eski bir hedef seti kullanacaklardır.
