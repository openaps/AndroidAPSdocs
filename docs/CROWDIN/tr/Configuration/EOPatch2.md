# EOPatch2 Kullanım Kılavuzu

**AndroidAPS 3.2 (sonraki sürüm) için planlandı ancak taahhüt edilmedi!**

EOPatch pompası, NovoRapid veya Humalog gibi hızlı etkili U-100 tipi insülin kullanımını gerektirir. Doktorunuzun reçetesine göre sizin için uygun olan hızlı etkili bir insülin kullanın ve reçete edilen dozu enjekte edin.

EOpatch kullanılırken en küçük enjekte edilebilir insülin dozu 0,05 ünitedir. Bu nedenle, bazal Profili minimum 0,05 Ü/sa veya 0,05 Ü/saatin katları olacak şekilde daha yüksek bir değere ayarlanmalıdır. Aksi taktirde Profildeki tahmini toplam infüzyon miktarı ile pompadaki gerçek infüzyon miktarı arasında bir hata olabilir. Aynı şekilde, bolus da minimum infuzyon miktarı 0,05 Ü olarak ayarlanmalıdır.

## Pompa Kurulumu
1. AndroidAPS ana ekranında sol üst köşedeki hamburger menüsüne tıklayın ve Konfigürasyon ayarları'na gidin.
1. Pompa bölümünde 'EOPatch2'yi seçin.
1. Ana ekrana dönmek için Geri tuşuna basın.


![Bild1](../images/EOPatch/Bild1.png) ![Bild2](../images/EOPatch/Bild2.png)

## Ayarlar
EOPATCH2 sekmesine gitmek için ana ekranın üst kısmındaki EOPATCH2'yi seçin.

Sağ üst köşedeki üç noktaya tıklayarak EOPatch2 Tercihleri menüsünü seçin.

EOPatch2 Tercihler menüsü, 3 tür bildirim ayarlamak için bir menü sunar.

### Düşük rezervuar Uyarısı
EOPatch2 kullanırken rezervuarda kalan insülin miktarı ayarlanan değere veya altına ulaştığında bir uyarı verir. 5 ünitelik artışlarla 10 ila 50Ü arasında ayarlanabilir.

### Pompa Süre Sonu Hatırlatıcısı
Bu, mevcut pompanın sona ermesinden önce kalan süreyi size bildirmek için bir hatırlatmadır. 1 saatlik artışlarla 1 ila 24 saat arasında ayarlanabilir. İlk ayar değeri 4 saattir.

### Pompa sesli Hatırlatıcılar
Bu, bazal enjeksiyon dışındaki enjeksiyonlar için bir hatırlatma işlevidir. (Yayma) bir bolus enjeksiyonu veya geçici bir bazal enjeksiyonu kullanıyorsanız, patch, enjeksiyon başladığında ve enjeksiyon tamamlandığında bir uyarı sesi çıkarır. İlk ayar değeri Kapalı'dır.

![Bild3](../images/EOPatch/Bild3.png)

## Pompa Bağlantısı

### Patch bağlantı ekranına git

Ana ekranın üst kısmındaki EOPATCH2'yi seçin ve sol alttaki PATCH ETKİNLEŞTİRME butonuna tıklayın.

![Bild4](../images/EOPatch/Bild4.png)

### Pompa Bağlantısı
Şırınga iğnesini flasterdeki insülin girişine sokun ve ardından insülini enjekte etmek için pistonu yavaşça itin. 80Ü'dan fazla İnsülin doldurulduğunda, patch bir açılış sesi verir ve açılır. Zil sesini onayladıktan sonra, ekrandaki EŞLEŞTİRMEYİ BAŞLAT düğmesine tıklayın.

[Warning]

- Talimat verilene kadar iğne hareket kolunu çevirmeyin. Aksi takdirde enjeksiyon veya güvenlik kontrollerinde ciddi sorunlara neden olabilir.
- Patch rezervuarına enjekte edilebilecek insülin miktarı 80~200Ü'dir. Başlangıçta Patch rezervuarına 80Ü'den daha az insülin enjekte ederseniz Patch çalışmayacaktır.
- Konulacak insülini buzdolabından önceden alın ve 15-30 dakika oda sıcaklığında bekletin. Enjekte edilecek insülinin sıcaklığı en az 10°C olmalıdır.

![Bild5](../images/EOPatch/Bild5.png)

### pompa eşleştirme
Patch eşleştirme ekranı görüntülenecek ve eşleştirme otomatik olarak denenecektir. İletişim başarılı olursa, Bluetooth eşleştirme isteği bildirimi görünür. Tamam'a tıklayın ve Bluetooth eşleştirme talebi bildirimi, kimlik doğrulama koduyla birlikte ikinci kez göründüğünde tekrar Tamam'ı seçin.

[Warning]

- Eşleştirme için patch ve akıllı telefon birbirinden 30 cm uzakta olmalıdır.
- Patch önyüklemesi tamamlandıktan sonra, eşleştirme tamamlanana kadar patch her 3 dakikada bir bip sesi çıkaracaktır.
- Patch başladıktan sonra, patch uygulamasının 60 dakika içinde uygulama üzerinden tamamlanması gerekir. Uygulama 60 dakika içinde tamamlanamıyorsa patch atılmalıdır.

![Bild6](../images/EOPatch/Bild6.png) ![Bild7](../images/EOPatch/Bild7.png) ![Bild8](../images/EOPatch/Bild8.png)


### Patch hazırlığı
Patch yapışkan bandını çıkardıktan sonra iğnenin dışarı çıkıp çıkmadığını kontrol edin. Patch ile ilgili herhangi bir sorun yoksa, İLERİ'ye tıklayın.

![Bild9](../images/EOPatch/Bild9.png)

### Patch yerleştirme
İnsülin, deri altı yağ içeren ancak az sayıda sinir veya kan damarı olan bir noktaya enjekte edilmelidir, bu nedenle Patch takma yeri olarak karın, kol veya uyluğun kullanılması önerilir. Bir Patch infüzyon bölgesi seçin ve konumu dezenfekte ettikten sonra pompayı yerleştirin.

[Warning]

- Pompanın cilde tamamen yapışması için pompa bandının vücuda yapıştırılan tarafını eşit şekilde düzleştirdiğinizden emin olun.
- Pompa tamamen yapışmazsa, pompa ile cilt arasına hava girebilir ve bu da pompanın yapışma gücünü ve su geçirmezlik etkisini zayıflatabilir.

![Bild10](../images/EOPatch/Bild10.png)

### Güvenlik Kontrolü
Yerleştirme işlemi tamamlandığında, Güvenlik Kontrolünü Başlat'a dokunun. Güvenlik kontrolü tamamlandığında, pompa bir kez bip sesi çıkaracaktır.

[Warning]

- Güvenli kullanım için, güvenlik kontrolü tamamlanana kadar iğne hareket kolunu çevirmeyin.

![Bild11](../images/EOPatch/Bild11.png) ![Bild12](../images/EOPatch/Bild12.png)


### Inserting the needle
İğne, pompanın çevresinden tutularak ve iğne hareket kolu kolun yukarı yönünde 100°'den fazla döndürülerek sokulur. İğne doğru şekilde takıldığında bir uyarı sesi duyulur. Kolu serbest bırakmak için iğne hareket kolunu saat yönünde daha fazla çevirin. İLERİ'YE basın.

[Caution]

- Zil çalmadan bir sonraki adıma geçerseniz, bir iğne yerleştirme hatası uyarısı görünecektir.

## Pompanın çıkarılması
İnsülin seviyesinin düşük olması, kullanım süresinin dolması ve kusurlu olması durumunda pompa (EOPatch) değiştirilmelidir. Her pompa için önerilen kullanım süresi, pompayı başlattıktan sonra 84 saattir.

### Pompanın çıkarılması
Ana ekranın üst kısmında EOPATCH2'yi seçin ve alttaki POMPAYI AYIR/DEĞİŞTİR butonuna tıklayın. Bir sonraki ekranda, POMPAYI ÇIKAR butonuna tıklayın. Bir kez daha onaylamak için bir iletişim kutusu görünür ve POMPAYI ÇIKAR butonunu seçerseniz, imha işlemi tamamlanır.

![Bild13](../images/EOPatch/Bild13.png) ![Bild14](../images/EOPatch/Bild14.png) ![Bild15](../images/EOPatch/Bild15.png) ![Bild16](../images/EOPatch/Bild16.png)

## İnsülin İletimini Askıya Alma ve Devam Ettirme
Suspending insulin delivery also cancels both extended bolus and temporary basal. When resuming insulin delivery, the canceled extended bolus and temporary basal will not be resumed. And when insulin delivery is suspended, the patch will give a sound every 15 minutes.

### Suspending insulin delivery
Select EOPATCH2 at the top of the home screen and click the SUSPEND button at the bottom right. When you select CONFIRM in the confirmation box, a time selection box appears. If you select the CONFIRM button after selecting the time, the insulin delivery will be suspended for the set amount of time.

![Bild17](../images/EOPatch/Bild17.png) ![Bild18](../images/EOPatch/Bild18.png) ![Bild19](../images/EOPatch/Bild19.png)


### Resuming insulin delivery
Select EOPATCH2 at the top of the home screen and click the RESUME button at the bottom right. Insulin delivery will resume by selecting CONFIRM in the confirmation dialog box.

![Bild20](../images/EOPatch/Bild20.png) ![Bild21](../images/EOPatch/Bild21.png)

## Alarms/Warnings

### Alarm

Alarms are issued for emergency situations of the highest priority and require immediate action. The alarm signal does not disappear or time out until it is acknowledged. An alarm occurs when there is a problem with the patch being used, so there may be cases where the patch in use needs to be discarded and replaced with a new patch. The warning is displayed as a dialog box and switching to another screen is not possible until processing is completed.

![Bild22](../images/EOPatch/Bild22.png) ![Bild23](../images/EOPatch/Bild23.png)

Farklı alarm türleri aşağıda açıklanmıştır.

| Alarmlar                         | Explanation                                                                                                                                                                                                         |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Rezervuar boş                    | Patch rezervuarında insülin bittiğinde belirir.                                                                                                                                                                     |
| Patch süresi doldu               | Patch kullanım süresi dolduğunda ve başka insülin enjeksiyonu mümkün olmadığında belirir.                                                                                                                           |
| Tıkanma                          | Patch insülin girişi tıkalı göründüğünde ortaya çıkar.                                                                                                                                                              |
| Açılma kendi kendine test hatası | Patch, önyükleme sonrası kendi kendini sınama işlemi sırasında beklenmeyen bir hata bulduğunda belirir.                                                                                                             |
| Inappropriate temperature        | Occurs when the patch is outside the normal operating temperature range during patch application and use. To deal with this alarm, move the patch to an  appropriate operating temperature (4.4 to 37°C) condition. |
| İğne yerleştirme Hatası          | Occurs when needle insertion is not normal during the patch application process. Check that the needle insertion edge of the patch and the needle activation button are in a straight line.                         |
| Patch battery Error              | Occurs just before the patch’s internal battery runs out and powers off.                                                                                                                                            |
| Patch activation Error           | Occurs when the app fails to complete the patching process within 60 minutes after the patch is booted.                                                                                                             |
| Patch Error                      | Occurs when the patch encounters an unexpected error while applying and using the patch.                                                                                                                            |

### Warning

A warning occurs in a medium or low-priority situation. When a warning occurs, it is displayed as a notification in the Overview screen.

![Bild24](../images/EOPatch/Bild24.png)

The different types of warnings are explained below.

| Warnings                     | Explanation                                                                                                                           |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| End of insulin suspend       | Occurs when the time set by the user has elapsed after the insulin infusion suspension has been completed.                            |
| Low reservoir                | Occurs when the remaining amount of insulin in the patch is below the set amount.                                                     |
| Patch operating life expired | Occurs when the patch usage period is over.                                                                                           |
| Patch will expire soon       | Occurs 1 hour before the patch must be discarded.                                                                                     |
| Incomplete Patch activation  | Occurs when more than 3 minutes have elapsed due to an interruption during patch application in the stage after pairing is completed. |
| Patch battery low            | Occurs when the patch's battery is low.                                                                                               |

