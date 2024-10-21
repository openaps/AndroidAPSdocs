# Bakım portalı (sonlandırıldı)

Bakım portalı, Nightscout ekranınızda göreceğiniz fonksiyonları, kayıtlarınıza not eklemenizi sağlayan “+” sembolü altına kopyalamıştır. Ancak bakım portalı, pompaya herhangi bir komut vermiyor! Dolayısıyla, bu ekran kullanılarak bir bolus eklendiyse, bunu Nightscout kaydınıza not eder, pompaya bolus iletimi talimatı verilmez. Bu birçok yanlış anlaşılmaya neden oldu.

Başlangıçta bakımportalı çevrimdışı destek eklemek için kullanılan kod, AAPS'in geliştirilmesiyle uyumlu değildi ve daha fazla kodlamayı engelliyordu. **Bu nedenle, AAPS sürüm 2.6'da bakım portalının kaldırılmasına karar verildi.**

Bakım portalının çoğu işlevi hala eylemlerde veya başlangıç ekranında bulunabilir. The actions can be reached either via actions tab or hamburger menu - depending on your settings in [config builder](../SettingUpAaps/ConfigBuilder.md).

Bu sayfa, daha önce bakım portalında mevcut olan işlevleri nerede bulabileceğinizi gösterecektir.

## Etkinlik & geri bildirim

![Careportal activity & feedback](../images/Careportal_25_26_1_IIb.png)

- Yaş bilgisi işlemler sekmesine / menüsüne taşındı.
- KŞ kontrolü işlemler sekmesine / menüsüne taşındı.
- Geçici hedef, işlemler sekmesine / menüsüne taşındı.
- Exercise is no longer available, but you can use the note field in the dialogue box when performing an action like giving bolus etc. (see screenshot in section [carbs & bolus](#carbs--bolus) on this page).

(CPbefore26-carbs-bolus)=

## Karbonhidratlar & bolus

![Careportal carbs & bolus](../images/Careportal_25_26_2_IIa.png)

- Bir bolusu not etmek için - ne için olursa olsun ister atıştırmalık ister öğün veya düzeltme için - ana ekrandaki insülin düğmesini kullanın ** ve "Bolus Yapma, sadece kaydedin"i işaretlediğinizden emin olun!**

- Geçmiş insülin seçeneği - yani şırıngayla verilen insülini kaydetmeyi unuttuysanız - yalnızca "Bolus yapma, yalnızca kaydet" onay kutusu işaretliyse kullanılabilir.

  ![Backdate insulin via insulin button](../images/Careportal_25_26_5.png)

- Karbonhidrat düzeltmesi için ana ekrandaki karbonhidrat düğmesini kullanın.

- Geçici bazal oranları işlemler sekmesi/menüsündeki buton ile başlatılıp durdurulabilir. Geçici bir bazal oranı ayarlandığında düğmenin "GEÇİCİ BAZAL" yerine "İPTAL x%" olarak değiştiğini lütfen unutmayın.

## CGM & OpenAPS

![Careportal CGM & OpenAPS](../images/Careportal_25_26_3_IIa.png)

- CGM sensör eki artık eylemler sekmesinde / menüsünde bulunabilir.
- Bu bölümdeki diğer tüm işlevler kaldırılmıştır. You can use the note field in the dialogue box when performing an action like giving bolus etc. (see screenshot in section [carbs & bolus](#carbs--bolus) on this page).

## Pump

![Careportal Pump](../images/Careportal_25_26_4_IIb.png)

- İşlemler sekmesi/menüsündeki "hazırla/doldur" butonunu kullanarak pompa yeri ve insülin rezervuarı değişimine ulaşılabilir.
- Profil değiştirme işlemler sekmesine / menüsüne taşındı.
- Pompa pil değişimi işlemler sekmesi / menüsüne taşındı.
