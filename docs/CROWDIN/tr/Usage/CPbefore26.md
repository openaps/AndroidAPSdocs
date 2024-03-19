# Bakım portalı (sonlandırıldı)

Bakım portalı, Nightscout ekranınızda göreceğiniz fonksiyonları, kayıtlarınıza not eklemenizi sağlayan “+” sembolü altına kopyalamıştır. Ancak bakım portalı, pompaya herhangi bir komut vermiyor! Dolayısıyla, bu ekran kullanılarak bir bolus eklendiyse, bunu Nightscout kaydınıza not eder, pompaya bolus iletimi talimatı verilmez. Bu birçok yanlış anlaşılmaya neden oldu.

Başlangıçta bakımportalı çevrimdışı destek eklemek için kullanılan kod, AAPS'in geliştirilmesiyle uyumlu değildi ve daha fazla kodlamayı engelliyordu. **Bu nedenle, AAPS sürüm 2.6'da bakım portalının kaldırılmasına karar verildi.**

Bakım portalının çoğu işlevi hala eylemlerde veya başlangıç ekranında bulunabilir. Eylemlere, eylemler sekmesinden veya hamburger menüsü aracılığıyla [Konfigürasyon ayarları](../Configuration/Config-Builder.md) içindeki ayarlarınızdan erişilebilir.

Bu sayfa, daha önce bakım portalında mevcut olan işlevleri nerede bulabileceğinizi gösterecektir.

## Etkinlik & geri bildirim

```{image} ../images/Careportal_25_26_1_IIb.png
:alt: Bakım Portalı etkinliği & geri bildirim
```

- Yaş bilgisi işlemler sekmesine / menüsüne taşındı.
- KŞ kontrolü işlemler sekmesine / menüsüne taşındı.
- Geçici hedef, işlemler sekmesine / menüsüne taşındı.
- Egzersiz artık mevcut değildir, ancak bolus vermek gibi bir eylem gerçekleştirirken diyalog kutusundaki not alanını kullanabilirsiniz ([Bu sayfadaki karbonhidratlar & bolus](CPbefore26-carbs-bolus) bölümündeki ekran görüntülerine bakabilirsiniz).

(CPbefore26-carbs-bolus)=

## Karbonhidratlar & bolus

```{image} ../images/Careportal_25_26_2_IIa.png
:alt: Bakım Portalı karbonhidrat & bolus
```

- Bir bolusu not etmek için - ne için olursa olsun ister atıştırmalık ister öğün veya düzeltme için - ana ekrandaki insülin düğmesini kullanın ** ve "Bolus Yapma, sadece kaydedin"i işaretlediğinizden emin olun!**

- Geçmiş insülin seçeneği - yani şırıngayla verilen insülini kaydetmeyi unuttuysanız - yalnızca "Bolus yapma, yalnızca kaydet" onay kutusu işaretliyse kullanılabilir.

  ```{image} ../images/Careportal_25_26_5.png
  :alt: İnsülin düğmesi aracılığıyla insülinin tarihini geri alın
  ```

- Karbonhidrat düzeltmesi için ana ekrandaki karbonhidrat düğmesini kullanın.

- Geçici bazal oranları işlemler sekmesi/menüsündeki buton ile başlatılıp durdurulabilir. Geçici bir bazal oranı ayarlandığında düğmenin "GEÇİCİ BAZAL" yerine "İPTAL x%" olarak değiştiğini lütfen unutmayın.

## CGM & OpenAPS

```{image} ../images/Careportal_25_26_3_IIa.png
:alt: Bakım Portalı CGM & OpenAPS
```

- CGM sensör eki artık eylemler sekmesinde / menüsünde bulunabilir.
- Bu bölümdeki diğer tüm işlevler kaldırılmıştır. Bolus vermek gibi bir eylem gerçekleştirirken diyalog kutusundaki not alanını kullanabilirsiniz ([Bu sayfadaki karbonhidratlar & bolus](CPbefore26-carbs-bolus) bölümündeki ekran görüntülerine bakabilirsiniz).

## Pompa

```{image} ../images/Careportal_25_26_4_IIb.png
:alt: Bakım Portalı Pompa
```

- İşlemler sekmesi/menüsündeki "hazırla/doldur" butonunu kullanarak pompa yeri ve insülin rezervuarı değişimine ulaşılabilir.
- Profil değiştirme işlemler sekmesine / menüsüne taşındı.
- Pompa pil değişimi işlemler sekmesi / menüsüne taşındı.
