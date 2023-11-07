# Görevler

AAPS has a series of Objectives that need to be completed to walk you through the features and settings of safe looping.  Yukarıdaki bölümlerde ayrıntıları verilen her şeyi doğru bir şekilde yapılandırdığınızdan ve sisteminizin ne yaptığını ve neden ona güvenebileceğinizi anladığınızdan emin olurlar.

**Telefonları yükseltiyorsanız** görevlerde ilerlemenizi sürdürmek için [ayarlarınızı dışa aktarabilirsiniz](../Usage/ExportImportSettings.md). Yalnızca hedeflerdeki ilerlemeniz değil, aynı zamanda maksimum bolus gibi güvenlik ayarlarınız da kaydedilecektir. Ayarlarınızı dışa ve içe aktarmazsanız, görevlere baştan başlamanız gerekecektir.  Her ihtimale karşı sık sık [ayarlarınızı yedeklemeniz](../Usage/ExportImportSettings.html) iyi bir fikirdir.

Görevlere geri dönmek istiyorsanız [aşağıdaki açıklamaya](Objectives-go-back-in-objectives) bakın.

## Görev 1: Görselleştirme ve izleme ayarları, bazal ve oranlarını analize etme

- Kurulumunuz için doğru kan şekeri kaynağını seçin.  Daha fazla bilgi için [KŞ Kaynağı](../Configuration/BG-Source.md)na bakın.
- Select the right Pump in ConfigBuilder (select Virtual Pump if you are using a pump model with no AAPS driver for looping) to ensure your pump status can communicate with AAPS.
- If using DanaR pump then ensure you have followed [DanaR Insulin Pump](../Configuration/DanaR-Insulin-Pump.md) instructions to ensure the link between pump and AAPS.
- You need to establish a data repository/reporting platform to complete this objective. That can be accomplished with either Nightscout or Tidepool (or both). Follow instructions at the [Nightscout](../Installing-AndroidAPS/Nightscout.md) or [Tidepool](../Installing-AndroidAPS/Tidepool.md) page for instructions.
- NSClientteki URL'nin sonunda **/api/v1/ OLMADAN** yazılması gerektiğini unutmayın - [Tercihler'deki NSClient ayarları](Preferences-nsclient)'na bakın.

*You may need to wait for the next blood glucose reading to arrive before AAPS will recognise it.*

## Objective 2: Learn how to control AAPS

- Perform several actions in AAPS as described in this objective.

- Tek tek görevlere ulaşmak için turuncu renkli "Henüz tamamlanmadı" metnine tıklayın.

- Henüz belirli bir eyleme aşina değilseniz, size rehberlik edecek bağlantılar sağlanacaktır.

  ```{image} ../images/Objective2_V2_5.png
  :alt: Screenshot Görev 2
  ```

(Objectives-objective-3-prove-your-knowledge)=
## Görev 3: Bilginizi kanıtlayın

- Pass a multiple-choice exam testing your AAPS knowledge.

- Soru ve cevap seçeneklerinin bulunduğu sayfaya erişmek için turuncu renkli "Henüz tamamlanmadı" yazısına tıklayın.

  ```{image} ../images/Objective3_V2_5.png
  :alt: Screenshot Görev 3
  ```

- Henüz doğru cevaplardan emin değilseniz, size rehberlik edecek bağlantılar sağlanacaktır.

- Görev 3 için sorular, AAPS 2.8'den itibaren anadili İngilizce olan kişiler tarafından tamamen yeniden yazılmıştır. Yenileri aynı temel konuları ve birkaç yeni konuyu kapsar.

- Bu yeni sorular, önceki sürümlerde 3. görev başarıyla tamamlamış olsanız bile, bazı cevaplanmayan sorulara yol açacaktır.

- Cevaplanmamış sorular, yalnızca yeni bir göreve başlarsanız sizi etkileyecektir. Başka bir deyişle: Tüm görevleri zaten tamamladıysanız, daha sonra AAPS işlevlerini kaybetmeden bekleyebilir ve yeni soruları yanıtlayabilirsiniz.

## Görev 4: Bir Açık döngüye başlamak

- Tercihler'den veya ana ekranın sol üst köşesindeki Döngü düğmesini basılı tutarak Döngü Aç'ı seçin.
- Ayarlarınız için [Tercihler](../Configuration/Preferences.md) üzerinde çalışın.
- Manually enact at least 20 of the temporary basal rate suggestions over a period of 7 days; input them to your pump and confirm in AAPS that you have accepted them.  Ensure this data shows in AAPS and Nightscout.
- Gerekirse [geçici hedefleri](../Usage/temptarget.md) etkinleştirin. Bir hipodan sonra yükselen kan şekeri nedeniyle sistemin çok güçlü düzeltme yapmasını önlemek için hipo geçici hedeflerini kullanın.

### Bildirim sayısını azaltın

- Açık Döngüdeyken alınacak karar sayısını azaltmak için 90 - 150 mg/dl veya 5,0 - 8,5 mmol/l gibi geniş bir hedef aralığı belirleyin.

- Hatta geceleri üst sınırı genişletmek (veya Açık Döngüyü devre dışı bırakmak) isteyebilirsiniz.

- Tercihler'de bazal oran değişikliği önerisi için bir minimum yüzde belirleyebilirsiniz.

  ```{image} ../images/OpenLoop_MinimalRequestChange2.png
  :alt: Açık Döngü minimum istek değişikliği
  ```

- Ayrıca her öneriye her 5 dakikada bir cevap vermek zorunda da değilsiniz...

## Görev 5: Geçici bazal önerileri de dahil olmak üzere açık döngünüzü anlamak

- Start to understand the thinking behind the temp basal recommendations by looking at the [determine basal logic](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html) and both the [forecast line in AAPS homescreen](Screenshots-prediction-lines)/Nightscout and the summary of outputs from the calculations in your OpenAPS tab.

Hesaplamalardan ve ayarlardan emin olana kadar hedefinizi normalden daha yükseğe koymak isteyeceksiniz.  Sistem izin verdiğince

- düşük hedef için minimum 4 mmol (72 mg/dl) veya maksimum 10 mmol (180 mg/dl) olacak şekilde
- yüksek hedef için minimum 5 mmol (90 mg/dl) veya maksimum 15 mmol (225 mg/dl) olacak şekilde
- tek bir değer olacak şekilde geçici bir hedef, 4 mmol ila 15 mmol (72 mg/dl ila 225 mg/dl) aralığında herhangi bir yerde olabilir

Hedef hesaplamaların dayandığı değerdir ve kan şekeri değerlerinizi içinde tutmayı amaçladığınız değerle aynı değildir.  Hedefiniz çok genişse (diyelim ki 3 veya daha fazla mmol \[50 mg/dl veya daha fazla\]), genellikle çok az AAPS etkisi bulacaksınız. Bunun nedeni, kan şekerinin eninde sonunda bu geniş aralıkta bir yerde olacağı tahmin edilmesidir ve bu nedenle çok fazla dalgalı geçici bazal hız önerilmemektedir.

Hedeflerinizi birbirine daha yakın bir aralık (diyelim ki 1 veya daha az mmol \[20 mg/dl veya daha az\]) olacak şekilde ayarlamayı deneyebilir ve sonuç olarak sisteminizin davranışının nasıl değiştiğini gözlemleyebilirsiniz.

[Tercihler](../Configuration/Preferences.md)'de > Görselleştirme Aralığına farklı değerler girerek kan şekerinizi içinde tutmayı amaçladığınız değerler için grafik üzerinde daha geniş bir aralık (yeşil çizgiler) görüntüleyebilirsiniz.

```{image} ../images/sign_stop.png
:alt: Dur işareti
```

### Sanal bir pompa ile açık döngü yapıyorsanız burada durun - bu hedefin sonunda sakın Doğrula'ya tıklamayın.

```{image} ../images/blank.png
:alt: boş
```

(Objectives-objective-6-starting-to-close-the-loop-with-low-glucose-suspend)=
## Görev 6: Düşük KŞ'de Duraklatma ile döngüyü kapatmaya başlamak

```{image} ../images/sign_warning.png
:alt: Uyarı işareti
```

### Kapalı döngü, düşük glikoz duraklatma ile sınırlı olduğundan, görev 6'daki yüksek KŞ değerlerini düzeltmeyecektir. Yüksek KŞ değerleri sizin tarafınızdan manuel olarak düzeltilmelidir!

- Prerequisite: You need a good profile (basal, ISF, IC) already working in AAPS to start with Loop in Low Glucose Suspend mode. Aksi takdirde, kendinizi manuel olarak düzeltmeniz gereken bir hipoda bulabilirsiniz. Bu seçenek, hipodan 5 gün boyunca kaçınmanıza yardımcı olacaktır. **Hala sık veya şiddetli düşük glikoz atakları yaşıyorsanız, İES, bazal, İDF ve karbonhidrat oranlarınızı iyileştirmeyi, düzeltmeyi düşünün ve şu anda 6. görevle BAŞLAMAYIN.**
- Ayarlarınızı şimdi değiştirmenize gerek yok. Görev 6 sırasında maxAİNS ayarı dahili olarak otomatik sıfıra ayarlanır. **Bu geçersiz kılma, görev 7'ye geçildiğinde tersine çevrilecektir.**
- Sistem, maxAİNS ayarınızı sıfır olarak geçersiz kılar; bu, kan şekerinin düşmesi durumunda sizin için bazalı düşürebileceği anlamına gelir. Kan şekeri yükseliyorsa, yalnızca bazal AİNS önceki bir Düşük Glikoz Askıya Alma işlemine göre negatifse bazal artacaktır. Aksi takdirde, bazal oranlar seçtiğiniz profille aynı kalacaktır. **Bu, yüksek KŞ değerleriyle insülin düzeltmeleri yaparak manuel başa çıkmanız gerektiği anlamına gelir.**
- Bazal AİNS negatifse (aşağıdaki ekran görüntüsüne bakın) Görev 6'da da bir GBO > %100 verilebilir.

```{image} ../images/Objective6_negIOB.png
:alt: Örnek negatif AİNS
```

- Güvende olmak ve daha fazla koruma tamponuna sahip olmak için hedef aralığınızı genellikle biraz daha yüksek tutun.
- Ana ekranın sağ üst köşesindeki Döngü simgesini basılı tutarak ve Döngü - LGS modu simgesini seçerek 'Düşük Glikoz Askıya Alma' modunu etkinleştirin.
- Ana ekrandaki mavi bazal metnini veya ana ekran grafiğindeki mavi bazal oluşumunu görüntüleyerek geçici bazalların aktivitesini izleyin.
- Bazal artırma yeteneği olmadan tedavi edilen hipoları takiben geçici olarak ani artışlar yaşayabilirsiniz.

(Objectives-objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets)=
## Görev 7: Kapalı döngüyü ayarlamak, maksimum AİNS'i 0'ın üzerine çıkarmak ve KŞ hedeflerini kademeli olarak düşürmek

- [Tercihler](../Configuration/Preferences.md)'den veya ana ekranın sağ üst köşesindeki Döngü simgesine basılı tutarak 1 gün için 'Kapalı Döngü'yü seçin.

- 'Maksimum toplam AİNS OpenAPS'i aşamaz' (OpenAPS'de 'max-iob' olarak adlandırılır) değerinizi 0'ın üzerine çıkarın. Varsayılan öneri "ortalama yemek bolusu + 3x maksimum günlük bazal" (SMB algoritması için) veya "3x maksimum günlük bazal" (eski AMA algoritması için) şeklindedir. Ancak ayarların sizde nasıl tepki verdiğini anlayana kadar bu değeri yavaş yavaş yükseltmelisiniz.( maks günlük bazal = günün herhangi bir zaman diliminde maksimum saatlik değer).

  Bu öneri bir başlangıç noktası olarak görülmelidir. 3x'e ayarladıysanız ve sizi sert ve hızlı şekilde düşürüyorsa, o sayıyı düşürün. Eğer çok dirençliyseniz, her seferinde çok az yükseltin.

  ```{image} ../images/MaxDailyBasal2.png
  :alt: maks günlük bazal
  ```

- Döngü modellerinize ne kadar AİNS uyduğundan emin olduktan sonra hedeflerinizi istediğiniz seviyeye indirin.

(Objectives-objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens)=
## Görev 8: Gerekirse bazalleri ve oranları ayarlayın ve ardından otoduyarlılığı etkinleştirin

- Bazallarınızın doğruluğunu kontrol etmek veya geleneksel bir bazal testi yapmak için [otoayarı](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) bir defaya mahsus olarak kullanabilirsiniz.
- Enable [autosens](../Usage/Open-APS-features.md) over a period of 7 days and watch the white line on the homescreen graph show how your sensitivity to insulin may be rising or falling as a result of exercise or hormones etc. and keep an eye in the OpenAPS report tab how AAPS is adjusting the basals and/or targets accordingly.

*Don’t forget to record your looping in* [this form](https://bit.ly/nowlooping) *logging AAPS as your type of DIY loop software, if you have not already done so.*

(Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)=
## Görev 9: Süper mikro bolus (SMB) gibi gündüz kullanımı için ek oref1 özelliklerinin etkinleştirilmesi

- SMB'nin nasıl çalıştığını, özellikle de sıfır-geçici ardındaki fikri anlamak için [bu wiki'deki SMB bölümünü](Open-APS-features-super-micro-bolus-smb) ve [openAPSdocs'taki oref1 bölümünü](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) okumalısınız.
- Daha sonra, SMB'lerin düzgün çalışmasını sağlamak için [maxAİNS'i artırmanız](Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob) gerekir. maxAİNS artık yalnızca eklenmiş bazal değil, tüm AİNS'leri içeriyor. Yani bir öğün için 8 Ü bolus verilirse ve maksAİNS 7 Ü ise, AİNS 7 Ü'nin altına düşene kadar hiçbir SMB iletilmez. İyi bir başlangıç maksAİNS = ortalama yemek bolusu + 3x maks günlük bazaldir (maks günlük bazal = günün herhangi bir zaman diliminde maksimum saatlik değer - bir örnek için [Görev 7'ye](Objectives-objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets) bakın)
- absorpsiyon ayarlarındaki min_5m_carbimpact varsayılanı, AMA'dan SMB'ye giderken 3'ten 8'e değiştirildi. AMA'dan SMB'ye yükseltme yapıyorsanız, bunu manuel olarak değiştirmeniz gerekir.

(Objectives-objective-10-automation)=
## Görev 10: Otomasyon

- [Otomasyon](../Usage/Automation.md)u kullanabilmek için 10. göreve başlamanız gerekir.
- [Görevler-görev-3-bilgini-kanıtla](Objectives#objective-3-prove-your-knowledge) sınavı dahil tüm görevleri tamamladığınızdan emin olun.
- Önceki görevleri tamamlamak, halihazırda tamamladığınız diğer görevleri etkilemeyecektir. Tüm tamamlanmış görevler korunacaktır!

(Objectives-objective-11-DynamicISF)=
## Objective 11: Additional Features such as DynamicISF

- You have to start objective 11 to be able to use [DynamicISF](../Usage/Open-APS-features.md)

(Objectives-go-back-in-objectives)=
## Görevlere geri dön

Herhangi bir nedenle görevlere geri dönmek istiyorsanız, bunu "Komple tamamlandı" seçeneğine tıklayarak yapabilirsiniz.

```{image} ../images/Objective_ClearFinished.png
:alt: Görevlere geri dön
```

## 3.0 sürümünden önceki Android APS'deki görevler

Android APS 3.0 yayınlandığında bir hedef kaldırıldı.  Android APS sürüm 2.8.2.1'in eski Android yazılımı (yani sürüm 9'dan önceki) kullanıcıları [burada](../Usage/Objectives_old.md) bulunabilecek daha eski bir görev seti kullanıyor olacak.
