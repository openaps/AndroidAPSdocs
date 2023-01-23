# Görevler

AndroidAPS, güvenli döngü özellikleri ve ayarlarında size yol göstermek için tamamlanması gereken bir dizi Görevlere sahiptir.  Yukarıdaki bölümlerde ayrıntıları verilen her şeyi doğru bir şekilde yapılandırdığınızdan ve sisteminizin ne yaptığını ve neden ona güvenebileceğinizi anladığınızdan emin olurlar.

**Telefonları yükseltiyorsanız**, görevlerde ilerlemenizi sürdürmek için [ayarlarınızı dışa aktarabilirsiniz](../Usage/ExportImportSettings.md). Yalnızca görevlerdeki ilerlemeniz kaydedilmeyecek, aynı zamanda maksimum bolus vb. güvenlik ayarlarınız da kaydedilecektir.  Ayarlarınızı dışa ve içe aktarmazsanız, görevlere en baştan başlamanız gerekir.  Her ihtimale karşı [ayarlarınızı sıklıkla yedeklemek](../Usage/ExportImportSettings.html) iyi bir fikirdir.

Görevlere geri dönmek istiyorsanız, [aşağıdaki açıklamaya bakın](../Usage/Objectives#görevlere-geri-dönme).

## Görev 1: Görselleştirme ve izleme ayarları, bazal ve oranlarını analize etme

- Kurulumunuz için doğru kan şekeri kaynağını seçin.  Daha fazla bilgi için [KŞ Kaynağı](../Configuration/BG-Source.md) bölümüne bakın.
- Pompa durumunuzun AndroidAPS ile iletişim kurabilmesini sağlamak için Konfrigasyon Ayarlarında doğru Pompayı seçin (döngü için AndroidAPS sürücüsü olmayan bir pompa modeli kullanıyorsanız Sanal Pompa'yı seçin).
- DanaR pompa kullanıyorsanız, pompa ile AndroidAPS arasındaki bağlantıyı sağlamak için [DanaR İnsülin Pompası](../Configuration/DanaR-Insulin-Pump.md) talimatlarını uyguladığınızdan emin olun.
- Nightscout'un bu verileri alıp görüntüleyebildiğinden emin olmak için [Nightscout](../Installing-AndroidAPS/Nightscout.md) sayfasındaki talimatları izleyin.
- NSClient'teki URL'nin sonunda **/api/v1/** kısmı OLMADAN olması gerektiğini unutmayın - [Tercihler'deki NSClient ayarlarına bakın](../Configuration/Preferences#nsclient).

*AndroidAPS'in tanıması için bir sonraki kan şekeri ölçümünün gelmesini beklemeniz gerekebilir.*

## Görev 2: AndroidAPS'yi nasıl kontrol edeceğinizi öğrenin

- Bu görevde açıklandığı gibi AndroidAPS'de çeşitli eylemler gerçekleştirin.

- Tek tek görevlere ulaşmak için turuncu renkli "Henüz tamamlanmadı" metnine tıklayın.

- Henüz belirli bir eyleme aşina değilseniz, size rehberlik edecek bağlantılar sağlanacaktır.

  ```{image} ../images/Objective2_V2_5.png
  :alt: "Screenshot G\xF6rev 2"
  ```

## Görev 3: Bilginizi kanıtlayın

- Çeşitli AndroidAPS ve kapalı döngü konularında çok seçmeli soruları yanıtlayın.

- Soru ve cevap seçeneklerinin bulunduğu sayfaya erişmek için turuncu renkli "Henüz tamamlanmadı" yazısına tıklayın.

  ```{image} ../images/Objective3_V2_5.png
  :alt: "Screenshot G\xF6rev 3"
  ```

- Henüz doğru cevaplardan emin değilseniz, size rehberlik edecek bağlantılar sağlanacaktır.

- Görev 3 için sorular, AAPS 2.8'den itibaren anadili İngilizce olan kişiler tarafından tamamen yeniden yazılmıştır. Yenileri aynı temel konuları ve birkaç yeni konuyu kapsar.

- Bu yeni sorular, önceki sürümlerde 3. görev başarıyla tamamlamış olsanız bile, bazı cevaplanmayan sorulara yol açacaktır.

- Cevaplanmamış sorular, yalnızca yeni bir göreve başlarsanız sizi etkileyecektir. Başka bir deyişle: Tüm görevleri zaten tamamladıysanız, daha sonra AAPS işlevlerini kaybetmeden bekleyebilir ve yeni soruları yanıtlayabilirsiniz.

## Görev 4: Bir Açık döngüye başlamak

- Tercihler'den veya ana ekranın sol üst köşesindeki Döngü düğmesini basılı tutarak Döngü Aç'ı seçin.
- AndroidAPS'yi ihtiyaçlarınıza göre özelleştirmek için [Tercihler](../Configuration/Preferences.md) üzerinden çalışın.
- 7 günlük bir süre boyunca geçici bazal oran önerilerinin en az 20'sini manuel olarak yürürlüğe koyun; bunları pompanıza girin ve AndroidAPS'de kabul ettiğinizi onaylayın.  Bu verilerin AndroidAPS ve Nightscout'ta gösterildiğinden emin olun.
- Gerekirse [geçici hedefleri](../Usage/temptarget.md) etkinleştirin. Bir hipodan sonra yükselen kan şekeri nedeniyle sistemin çok güçlü düzeltme yapmasını önlemek için hipo geçici hedeflerini kullanın.

### Bildirim sayısını azaltın

- Açık Döngüdeyken alınacak karar sayısını azaltmak için 90 - 150 mg/dl veya 5,0 - 8,5 mmol/l gibi geniş bir hedef aralığı belirleyin.

- Hatta geceleri üst sınırı genişletmek (veya Açık Döngüyü devre dışı bırakmak) isteyebilirsiniz.

- Tercihler'de bazal oran değişikliği önerisi için bir minimum yüzde belirleyebilirsiniz.

  ```{image} ../images/OpenLoop_MinimalRequestChange2.png
  :alt: "A\xE7\u0131k D\xF6ng\xFC minimum istek de\u011Fi\u015Fikli\u011Fi"
  ```

- Ayrıca her öneriye her 5 dakikada bir cevap vermek zorunda da değilsiniz...

## Görev 5: Geçici bazal önerileri de dahil olmak üzere açık döngünüzü anlamak

- Geçici bazal önerilerin ardındaki düşünceyi, aşağıdakilere bakarak anlamaya başlayın 'Temel mantığı belirleme \<<https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html>>'\_ ve hem 'AndroidAPS ana ekranındaki tahmin satırına \<../Getting-Started/Screenshots#prediction-lines>' \_/Nightscout ve OpenAPS sekmenizdeki hesaplamalardan elde edilen çıktıların özeti.

Hesaplamalardan ve ayarlardan emin olana kadar hedefinizi normalden daha yükseğe koymak isteyeceksiniz.  Sistem izin verdiğince

- düşük hedef için minimum 4 mmol (72 mg/dl) veya maksimum 10 mmol (180 mg/dl) olacak şekilde
- yüksek hedef için minimum 5 mmol (90 mg/dl) veya maksimum 15 mmol (225 mg/dl) olacak şekilde
- tek bir değer olacak şekilde geçici bir hedef, 4 mmol ila 15 mmol (72 mg/dl ila 225 mg/dl) aralığında herhangi bir yerde olabilir

Hedef hesaplamaların dayandığı değerdir ve kan şekeri değerlerinizi içinde tutmayı amaçladığınız değerle aynı değildir.  Hedefiniz çok genişse (örneğin, 3 veya daha fazla mmol \[50 mg/dl veya daha fazla\] genişlik), genellikle çok az AAPS eylemi bulacaksınız. Bunun nedeni, kan şekerinin eninde sonunda bu geniş aralıkta bir yerde olacağı tahmin edilmesidir ve bu nedenle çok fazla dalgalı geçici bazal hız önerilmemektedir.

Hedeflerinizi birbirine daha yakın bir aralıkta (örneğin 1 veya daha az mmol \[20 mg/dl veya daha az\] genişlikte) olacak şekilde ayarlamayı deneyebilir ve sonuç olarak sisteminizin davranışının nasıl değiştiğini gözlemleyebilirsiniz.

Görselleştirme Aralığı'na farklı değerler buradan [Tercihler](../Configuration/Preferences.md) > girerek kan şekerinizi tutmayı amaçladığınız değerler için grafikte daha geniş bir aralık (yeşil çizgiler) görüntüleyebilirsiniz.

```{image} ../images/sign_stop.png
:alt: "Dur i\u015Fareti"
```

### Sanal bir pompa ile açık döngü yapıyorsanız burada durun - bu hedefin sonunda sakın Doğrula'ya tıklamayın.

```{image} ../images/blank.png
:alt: "bo\u015F"
```

## Görev 6: Düşük KŞ'de Duraklatma ile döngüyü kapatmaya başlamak

```{image} ../images/sign_warning.png
:alt: "Uyar\u0131 i\u015Fareti"
```

### Closed loop will not correct high BG values in objective 6 as it is limited to low glucose suspend. High BG values have to be corrected manually by you!

- Prerequisite: You need a good profile (basal, ISF, IC) already working in AndroidAPS to start with Loop in Low Glucose Suspend mode. Otherwise you can run in a hypo which you have to manually correct. This will help you a lot to avoid having to treat a low glucose over a period of 5 days. **If you are still having frequent or severe low glucose episodes then consider refining your DIA, basal, ISF and carb ratios and do NOT start objective 6 at this time.**
- You don't have to change your settings now. During objective 6, the maxIOB setting is internally set to zero automatically. **This override will be reversed when moving to objective 7.**
- The system will override your maxIOB settings to zero, which means if blood glucose is dropping it can reduce basal for you. If blood glucose is rising then it will only increase basal if the basal IOB is negative from a previous Low Glucose Suspend. Otherwise basal rates will remain the same as your selected profile. **That means that you have to manually handle high values with insulin corrections.**
- If your basal IOB is negative (see screenshot below) a TBR > 100% can be issued also in objective 6.

```{image} ../images/Objective6_negIOB.png
:alt: "\xD6rnek negatif A\u0130NS"
```

- Set your target range slightly higher than you usually aim for, just to be safe and have a bit more scurity buffer.
- Enable 'Low Glucose Suspend' mode either by by pressing and holding the Loop icon at the top right corner of the home screen and selecting the Loop - LGS mode icon.
- Watch how temporary basals are active by viewing the blue basal text on the homescreen or the blue basal render on the homescreen graph.
- Tedavi edilen hipoları takiben, geri tepmede bazal artırma yeteneği olmadan geçici olarak ani artışlar yaşayabilirsiniz.

## Objective 7: Tuning the closed loop, raising maxIOB above 0 and gradually lowering BG targets

- Select 'Closed Loop' either from [Preferences](../Configuration/Preferences.md) or by pressing and holding the Loop icon at the top right corner of the home screen, over a period of 1 day.

- Raise your 'Maximum total IOB OpenAPS can’t go over' (in OpenAPS called 'max-iob') above 0. The default recommendation is "average mealbolus + 3x max daily basal" (for the SMB algorithm) or "3x max daily basal" (for the older AMA algorithm) but you should slowly work up to this until you know your settings work for you (max daily basal = the maximum hourly value in any time segment of the day).

  Bu öneri bir başlangıç noktası olarak görülmelidir. If you set to the 3x and you are seeing moves that push you too hard and fast then lower that number. If you are very resistant, raise it very little at a time.

  ```{image} ../images/MaxDailyBasal2.png
  :alt: "maks g\xFCnl\xFCk bazal"
  ```

- Once confident on how much IOB suits your looping patterns, then reduce your targets to your desired level.

## Görev 8: Gerekirse bazalleri ve oranları ayarlayın ve ardından otoduyarlılığı etkinleştirin

- Bazallerinizin doğruluğunu kontrol etmek veya geleneksel bir bazal testi yapmak için [Otoayar](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) özelliğini bir defaya mahsus olarak kullanabilirsiniz.
- 7 günlük bir süre boyunca [Otoduyarlılık](../Usage/Open-APS-features.md) özelliğini etkinleştirin ve ana ekran grafiğindeki beyaz çizginin, insülin duyarlılığınızın bir sonucu olarak egzersiz veya hormonlar vb. durumlarda nasıl yükseldiğini veya düştüğünü göstermesini izleyin. ve AndroidAPS'nin bazalları ve/veya hedefleri buna göre nasıl ayarladığını OpenAPS rapor sekmesinde izleyin.

*Daha önce yapmadıysanız, * \`bu forumdan \<https://bit.ly/nowlooping>\`\_ * kendin yap DIY döngü yazılımınız olarak AndroidAPS'yi günlüğe kaydetmeyi unutmayın.*

## Görev 9: Süper mikro bolus (SMB) gibi gündüz kullanımı için ek oref1 özelliklerinin etkinleştirilmesi

- Bu wiki'deki [SMB bölümünü](../Usage/Open-APS-features#super-micro-bolus-smb) ve openAPSdocs \<<https://openaps.readthedocs> içindeki [oref1 bölümünü okumalısınız. io/en/latest/docs/Customize-Iterate/oref1.html>] SMB'nin nasıl çalıştığını, özellikle (zero-temping) uygulamasının ardındaki fikri anlamak için.
- O zaman SMB'ların sorunsuz çalışmasını sağlamak için [maxAİNS yükseltmeniz](../Usage/Open-APS-features#maximum-total-iob-openaps-cant-go-over-openaps-max-iob) gerekir. maxAİNS artık yalnızca eklenmiş bazal değil, tüm AİNS'leri içeriyor. Yani bir öğün için 8 Ü bolus verilirse ve maksAİNS 7 Ü ise, IOB 7 Ü'nin altına düşene kadar hiçbir SMB iletilmez. İyi bir başlangıç maksAİNS = ortalama yemek bolusu + 3x maks günlük bazaldir (maks günlük bazal = günün herhangi bir zaman diliminde maksimum saatlik değer - bir örnek için [Görev 7'ye bakın](../Usage/Objectives.md#objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets))
- absorpsiyon ayarlarındaki min_5m_carbimpact varsayılanı, AMA'dan SMB'ye giderken 3'ten 8'e değiştirildi. AMA'dan SMB'ye yükseltme yapıyorsanız, bunu manuel olarak değiştirmeniz gerekir.

## Görev 10: Otomasyon

- [Otomasyon](../Usage/Automation.md) kullanmak için görev 10'a başlamanız gerekir.
- [../Usage/Objectives#objective-3-prove-your-knowledge](../Usage/Objectives.md#objective-3-prove-your-knowledge) sınav dahil tüm göevleri tamamladığınızdan emin olun.
- Önceki görevleri tamamlamak, halihazırda tamamladığınız diğer görevleri etkilemeyecektir. Tüm tamamlanmış görevler korunacaktır!

## Görevlere geri dön

Herhangi bir nedenle görevlere geri dönmek istiyorsanız, bunu "Komple tamamlandı" seçeneğine tıklayarak yapabilirsiniz.

```{image} ../images/Objective_ClearFinished.png
:alt: "G\xF6revlere geri d\xF6n"
```

## 3.0 sürümünden önceki Android APS'deki görevler

Android APS 3.0 yayınlandığında bir hedef kaldırıldı.  Daha eski Android yazılımı (yani sürüm 9'dan önceki) kullanan Android APS sürüm 2.8.2.1 kullanıcıları, "buradan \<../Usage/Objectives_old.md>". bulunabilecek daha eski bir hedef seti kullanacaklardır.
