# Medtronic Pompaları

**>>>> Medtronic pompa sürücüsü, AndroidAPS'in 2.5 (ana) sürümüne dahil edilmiştir. Durum böyleyken, Medtronic sürücüsü yine de beta yazılımı olarak kabul edilmelidir. Lütfen yalnızca deneyimli bir kullanıcıysanız kurulum yapın. Şu anda hala çift Bolus sorunuyla mücadele ediyoruz (Tedavilerde IOB hesaplaması yapan 2 bolus alıyoruz (bu hatayı yaşıyorsanız, lütfen Medtronic yapılandırmasında Çift Bolus Günlüğünü etkinleştirin ve gönderim sağlayın)) gelecek sürümde bu sorun düzeltilecektir. <<<<**

* * *

Yalnızca eski Medtronic pompalarıyla çalışır (ayrıntılar için aşağıya bakın). Medtronic 640G, 670G veya 780G ile çalışmaz.

* * *

Medtronic sürücüsünü kullanmaya başladıysanız, lütfen kendinizi bu [listeye](https://docs.google.com/spreadsheets/d/16XIjviXe8b-12PrB6brGubNFuAEsFZr10pjLt_SpSFQ/edit) ekleyin. Bu dosya sadece bu sürücü için hangi telefonların iyi olduğunu ve hangilerinin doğru çalışmadığını (veya kötü olduğunu) görebilmemiz içindir. Tabloda "BT yeniden başlatma" adlı bir sütun mevcuttur. Bu seçenek telefonunuzun zaman zaman gerçekleşen, pompa artık bağlanamadığında kullanılabilen BT etkinleştirme/devre dışı bırakma özelliğini destekleyip desteklemediğini kontrol etmek içindir. Başka bir sorun fark ederseniz, lütfen bunu tabloda Yorumlar sütununa yazın.

* * *

## Donanım ve yazılım gereksinimleri

- **Telefon:** Medtronic sürücüsü, BLE'yi destekleyen bir telefonla çalışmalıdır. **ÖNEMLİ: Sürücü tüm telefonlarda düzgün çalışırken, Bluetooth'un etkinleştirilmesi/devre dışı bırakılması çalışmaz (bu, RileyLink ile bağlantınız koptuğunda ve sistem otomatik olarak kurtarılamadığında gereklidir ve zaman zaman olabilir). Bu yüzden Android 7.0 - 8.1'e sahip bir cihaz edinmeniz gerekiyor, en kötü senaryoda telefonunuza LinegaeOS 15.1'i (15.1 veya daha düşük gerekli) kurabilirsiniz. Android 9 ile ilgili sorunu araştırıyoruz, ancak şu ana kadar bir çözüm bulamadık (bazı modellerde çalışıyor, diğerlerinde çalışmıyor gibi görünüyor. Bazen de çalışmayanlarda ara sıra çalışabiliyor.)**
- Pompanızla iletişim için, telefondan gelen BT komutlarını pompanın anlayacağı RF komutlarına dönüştüren ek bir cihaza ihtiyacınız vardır. Ek iletişim cihazlarının [listesini burada bulabilirsiniz.](../Module/module#additional-communication-device) Aygıtın kararlı yazılım sürümünde olması gerekiyor. Eski modeller üretici yazılımı 0.9 iken (eski sürümler düzgün çalışmayabilir) daha yeni modeller 2.2 olabilmektedir. (RL sitesinde yükseltme seçenekleri vardır). Bu konuda farklı bir deneyim yapmak istiyorsanız, bir çeşit RileyLink klonu olan Gnarl'ı da([buradan](https://github.com/ecc1/gnarl)) deneyebilirsiniz. 
- **Pompa:** Sürücü yalnızca aşağıdaki modeller ve pompa yazılımı sürümleriyle çalışır: 
    - 512/712
    - 515/715
    - 522/722
    - 523/723 (pompa yazılımı 2.4A veya altı)
    - 554/754 AB sürümü (pompa yazılımı 2.6A veya altı)
    - 554/754 Kanada sürümü (pompa yazılımı 2.7A veya altı)
- Pompa yazılımı kontrolü için [OpenAPS dokümantasyonu](https://openaps.readthedocs.io/en/latest/docs/Gear%20Up/pump.html#how-to-check-pump-firmware-check-for-absence içinde açıklanmıştır -of-pc-connect) ve [LoopDocs](https://loopkit.github.io/loopdocs/build/step3/#medtronic-pump-firmware).

## Pompa Konfigürasyonu

- **Pompa'da uzaktan kontrol modunu etkinleştir** (Araçlar -> Uzaktan kontrol Seçenekleri, Evet'i seçin ve sonraki ekranda Kimlik Ekle'yi seçin ve sahte kimlik ekleyin (örn. 111111). Bu Uzak Kullanıcılar listesinde en az bir kullanıcının bulunması gerekiyor. Bu seçenekler farklı pompa modellerinde farklı görünebilir. Bu adım önemlidir, çünkü ayarladığınızda pompa uzaktan iletişim için frekansı daha sık dinler.
- **Maks Bazal'ı** Pompanızda "STD profilinizdeki maksimum bazal girişinizde" ayarlayın * 4 (maks. %400 Geçici Bazal Oranı istiyorsanız). Bu sayı 35'in altında olmalıdır (pompadan da görebilirsiniz).
- **Maks Bolus'u ayarlayın** (maks. 25)
- **STD profili ayarlayın** Bu kullanacağımız tek profil olacak. Devre dışı da bırakabilirsiniz.
- **Geçici Bazal Oran tipini ayarlayın** Mutlak olacak (Yüzde değil)

## Telefon/AndroidAPS Konfigürasyonu

- **RileyLink'i Telefonunuzla eşleştirmeyin.** RileyLink'inizi telefonunuzun bluetooth ayarlarından eşleştirdiyseniz, AndroidAPS onu yapılandırma ayarlarında bulamaz.
- Telefonunuzda Otomatik Döndür'ü devre dışı bırakın (bazı cihazlarda Otomatik döndürme, BT oturumlarını yeniden başlatır, bu bizim istediğimiz bir şey değil).
- Pompayı AndroidAPS'de iki şekilde yapılandırabilirsiniz: 

1. Sihirbaz Kullanımı (yeni kurulumda)
2. Doğrudan Konfigürasyon ayarları sekmesinde (Medtronic sürücüsündeki Dişli simgesi)

Yeni kurulum yaparsanız, doğrudan sihirbaza yönlendirileceksiniz. Bazen BT bağlantınız tam olarak çalışmıyorsa (pompaya bağlanamıyorsa) yapılandırmayı tamamlayamayabilirsiniz. Böyle bir durumda sanal pompayı seçerek, sihirbaz tamamlandıktan sonra pompa algılamayı atlayarak 2. seçeneğe geçebilirsiniz.

![MDT Ayarları](../images/Medtronic01a.png)

Aşağıdaki öğeleri ayarlamanız gerekir: (yukarıdaki resme bakın)

- **Pompa Seri Numarası**: Bunu pompanın arkasında, SN kısmında bulabilirsiniz. Sadece seri no daki 6 numaraya ihtiyacımız var.
- **Pompa Tipi**: Sahip olduğunuz pompa tipi (ör. 522). 
- **Pompa Frekansı**: Medtronic pompasının pompa frekansına göre iki versiyonu üretilmiştir. (pompanızın hangi frekansı kullandığından emin değilseniz, [SSS](../Configuration/MedtronicPump#faq) bölümüne bakın): 
    - ABD & Kanada için (NA-CA) kullanılan frekans 916 Mhz
    - Dünya çapında (WW) kullanılan frekans 868 Mhz'dir.
- **Pompadaki Maks Bolus (Ü)** (bir saat içinde): Bu, pompadakiyle aynı şekilde ayarlanmalıdır. Bolus yapabileceğiniz insülin miktarını sınırlar. Bu değeri aşarsanız, Bolus giremezsiniz ve hata verir. Kullanılabilecek maksimum değer 25'tir. Doz aşımına uğramamak için lütfen burada kendiniz için doğru değeri ayarlayınız.
- **Pompadaki Maks Bazal (Ü/s)**: Bu, pompadakiyle aynı şekilde ayarlanmalıdır. Bir saat içinde ne kadar bazal alabileceğinizi belirler. Örneğin, maksimum GBO'nun %500'e ayarlanmasını istiyorsanız ve günlük bazal şablonunuzda en yüksek değer 1,5 Ü/s ise, Maks Bazal'ı en az 7,5Ü/s'e ayarlamanız gerekir. Bu ayar yanlışsa (örneğin, bazal şablonunuzdaki değerlerden biri bunu aşarsa) pompa hata verir.
- **Bolus göndermeden önceki bekleme süresi (sn)**: Bolus pompaya gönderilmeden önceki bekleme süresidir. (min.5sn) Fikrinizi değiştirirseniz bu süre içerisinde iptal edebilirsiniz. Bolus gönderilirken iptal etme pompa tarafından desteklenmez (gönderme sırasında bolusu durdurmak istiyorsanız, pompadan askıya almanız ve ardından devam etmeniz gerekir).
- **Medtronic Kodlama**: Bu, Medtronic cihazlarının yaptığı 4b6b kodlamasının AndroidAPS'de mi yoksa RileyLink'te mi yapılacağını belirleyen ayardır. 2.x yazılımlı bir RileyLink'iniz varsa, varsayılan değer Donanım kodlamasını kullanmak olacaktır (= RileyLink tarafından yapılır), 0.x rileylink yazılımı varsa bu ayar yok sayılır.
- **Pil Türü (Güç Görünümü)**: Pompanızdaki pil gücünü görmek istiyorsanız, kullandığınız pil türünü (şu anda desteklenen Lityum veya Alkalin) seçmeniz gerekir. Bu şekilde ekranda hesaplanan yüzdeyi ve pil voltajını görebileceksiniz.
- **RileyLink Yapılandırması**: Bu, RileyLink/GNARL cihazınızı bulacak ve programla eşleşmesini sağlayacaktır.
- **Sık kullanılan Geçici Bazalları ayarla** Medtronic pompalarının saatte bir bip sesi çıkarmasını önlemeye yardımcı olabilecek bir seçenektir. Etkinleştirilirse, bip sesini önlemek için saat sonunda geçici bazal iptal edilir.

## MEDTRONIC (MDT) Sekmesi

![MDT Sekmesi](../images/Medtronic02.png)

Pompa sekmesinde, pompaların (ve bağlantıların) mevcut durumunu gösteren birkaç satır görebilirsiniz.

- **RileyLink Durumu**: RileyLink bağlantısının durumunu gösterir. Telefon her zaman RileyLink'e bağlı olmalıdır.
- **Pompa Durumu**: Pompa bağlantısının durumunu gösterir. Bunun birkaç değeri olabilir, ancak çoğunlukla uyku simgesini görürsünüz. (pompa bağlantısı aktif değilken) Komut yürütülürken "Uyanıyor", AAPS'in pompanızla bağlantı kurmaya çalışması veya pompada çalışıyor olabilecek herhangi bir komutun açıklamasını (ör.: Zaman Al, GBO Ayarla, vb.) görebilirsiniz.
- **Pil**: Yapılandırmanıza bağlı olarak pil durumunu gösterir. Pilin boş veya dolu olduğunu (pil kritik %20'lik eşiğin altındaysa kırmızı) veya yüzde ve voltajı gösteren basit bir simge olabilir.
- **Son bağlantı**: Pompaya son başarılı bağlantının olduğu zaman.
- **Son Bolus**: Son bolusun verildiği zamanı gösterir.
- **Temel Bazal Oranı**: Pompada o anda çalışan temel bazal oranını gösterir.
- **Geçici bazal**: Çalışan veya boş geçici bazalı gösterir.
- **Rezervuar**: Rezervuarda ne kadar insülin olduğu gösterir.(saatte bir güncellenir).
- **Hatalar**: Sorun varsa hata dizesi (çoğunlukla yapılandırmada hata olup olmadığını gösterir).

Aşağıda 3 butonumuz var:

- **Yenile** Mevcut pompa durumunu yenilemek içindir. Bu işlem, pompa hakkındaki verileri yenileyeceğinden (geçmişi al, zamanı al/ayarla, profil al, pil durumunu al, vb.) yalnızca bağlantı uzun süre kesildiğinde kullanılmalıdır.
- **Pompa Geçmişi**: Pompa geçmişini gösterir ([aşağı](../Configuration/MedtronicPump#pump-history)'ya bakın)
- **RL İstatistikleri**: RL İstatistiklerini Göster ([aşağı](../Configuration/MedtronicPump#rl-status-rileylink-status)'ya bakın)

## Pompa geçmişi

![Pompa Geçmişi İletişim Kutusu](../images/Medtronic03.png)

Pompa geçmişi her 5 dakikada bir alınır ve yerel olarak saklanır. Geçmiş yalnızca son 24 saat için tutulur, bu nedenle yenileri eklendiğinde eski girişler kaldırılır. Bu, pompa geçmişini görmenin basit bir yoludur (pompadaki bazı girişler, alakalı olmadıkları için görüntülenmeyebilir - örneğin, AndroidAPS tarafından kullanılmayan işlevlerin yapılandırılması).

## RL Durumu (RileyLink Durumu)

![RileyLink Durumu - Ayarları](../images/Medtronic04.png) ![RileyLink Durumu - Geçmişi](../images/Medtronic05.png)

İki sekmesi vardır:

- **Ayarlar**: RileyLink ile ilgili ayarları gösterir: Yapılandırılmış Adres, Bağlı Cihaz, Bağlantı Durumu, Bağlantı Hatası ve RileyLink yazılımı sürümleri. Cihaz Tipi her zaman Medtronic Pompa, Model kullandığınız model, Seri numarası konfigüre edilmiş seri numarası, Pompa Frekansı hangi frekansı kullandığınızı gösterir. Son Frekans en son kullanılan frekanstır.
- **Geçmiş**: İletişim geçmişini gösterir. RileyLink satırları, RileyLink için durum değişikliklerini, Medtronic satırları ise pompaya hangi komutların gönderildiğini gösterir.

## Eylemler

Medtronic sürücüsü seçildiğinde, Eylemler sekmesine 3 olası buton görebilirsiniz:

- **Uyan ve Ayarla** - AndroidAPS'in bir süredir pompanızla iletişim kurmadığını görürseniz (5 dakikada bir iletişime geçmelidir), Ayarlamayı zorlayabilirsiniz. Bu, Pompa ile iletişim kurulabilecek tüm alt frekansları arayarak pompanızla iletişim kurmaya çalışacaktır. Bir tane bulursa, onu varsayılan frekansınız olarak ayarlayacaktır. 
- **RileyLink Yapılandırmasını Sıfırla** - RileyLink/GNARL aygıtınınızı sıfırlarsanız, cihazın yeniden yapılandırılabilmesi için bu eylemi kullanmanız gerekir. (frekans ayarı, frekans tipi ayarı, kodlama yapılandırması)
- **Bolus Bloğunu Temizle** - Bolus'u başlattığınızda, pompaya herhangi bir komut verilmesini önleyen Bolus Bloğu'nu ayarlarız. Pompanızı askıya alır ve devam ettirirseniz (bolusu iptal etmek için), ardından o bloğu kaldırabilirsiniz. Bu seçenek yalnızca bolus gönderilirken vardır... 

## Önemli notlar

### OpenAPS kullanıcıları

AndroidAPS'i kullanmaya başladığınızda, birincil denetleyici AndroidAPS'dir ve tüm komutlar bu uygulamadan geçmelidir. Bolus gönderme pompa üzerinden değil AAPS üzerinden yapılmalıdır. Pompada yapılan herhangi bir işlem AAPS tarafından algılanmaktadır, ancak bundan kaçınmalısınız (Pompa geçmişi ve AAPS geçmiş senkronizasyonu ile ilgili tüm sorunları düzelttik, ancak özellikle pompa kurulumu AAPS kullanımı için yapılandırılmamışsa ufak problemler yaşayabilirsiniz). AndroidAPS'i pompamla kullanmaya başladığımdan beri, rezervuarı ve seti değiştirmem gerektiği zamanlar dışında pompaya dokunmadım. Özellikle çocuklu aileler pompa tuş kilitlerini aktive ederek AndroidAPS'i bu şekilde kullanmalıdır.

### Log kayıtları

Medtronic sürücüsü yeni olduğu için, ortaya çıkacak sorunları ayıklayıp düzeltebilmemiz için günlüğe kaydetmeyi etkinleştirmeniz gerekir. Sol üst köşedeki hamburger simgesine tıklayın, Bakım ve ardından Günlük Ayarları'nı seçin. Pump, PumpComm, PumpBTComm seçenekleri işaretlenmelidir.

### RileyLink/GNARL

RileyLink veya GNARL'ı yeniden başlattığınızda, ya yeni TuneUp ("Uyan ve Ayarla" eylemi) yapmanız ya da iletişim parametrelerini yeniden göndermeniz ("RileyLink Yapılandırmasını Sıfırla" eylemi) gerekir, aksi takdirde iletişim başarısız olur.

### CGM kullanımı

Medtronic CGM (SGİ) sensörleri şu anda DESTEKLENMEMEKTEDİR.

### Pompanın manuel kullanımı

Tedavi işlemlerini pompanızdan manuel olarak yapmaktan kaçınmalısınız. Tüm komutlar (bolus, GBO) AndroidAPS üzerinden olmalıdır. Ancak bir şekilde pompa üzerinden elle giriş yapmak zorunda kalırsanız, 3 dakika geçmeden yeni giriş YAPMAYIN. (herhangi bir nedenle 2 sefer bolus yapacaksanız, ilkinden en az 3 dakika sonra ikincisi gönderilmelidir.)

## Saat dilimi değişiklikleri ve DST (Yaz Saati Uygulaması) veya Medtronic Pompa ve AndroidAPS ile Seyahat

Hatırlanması gereken önemli şey, seyahat ederken döngüyü asla devre dışı bırakmamanız gerektiğidir (CGM'niz çevrimdışı modda olmadıkça). AAPS, Saat Dilimi değişikliklerini otomatik olarak algılayacak ve Telefondaki saat değiştiğinde, saati değiştirmesi için Pompaya komut gönderecektir.

Eğer Doğu'ya seyahat ederseniz ve ZD'niz saat ekleyerek değişirse (ör. GMT+0'dan GMT+2'ye kadar, pompa geçmişinde sorun olmayacak ve endişelenmenize gerek yok... ancak Batı'ya seyahat ederseniz ve saat çıkararak ZD'niz değişirse (GMT+2'den GMT-0'a), o zaman senkronizasyon biraz şüpheli olabilir. Açıkça bu, önümüzdeki x saat boyunca dikkatli olmanız gerektiği anlamına gelir, çünkü aktif insülin miktarınız biraz tuhaf olabilir.

Bu sorunun farkındayız ve şimdiden olası çözümü araştırıyoruz (bkz. https://github.com/andyrozman/RileyLinkAAPS/issues/145), ancak şimdilik seyahat ederken bu bilgiyi aklınızda bulundurun.

## SSS

### RileyLink/GNARL'ın gücünü görebilir miyim?

Hayır. Şu anda bu cihazların hiçbiri bunu desteklemiyor ve muhtemelen gelecekte de olmayacak.

### GNARL, RileyLink'in yerini alıyor mu?

Evet. GNARL'ın yazılımcısı, Medtronic sürücüsü tarafından kullanılan tüm işlevleri ekledi. Tüm Medtronic iletişimini destekler (Haziran/2019). GNARL, Omnipod iletişimi için kullanılamaz. GNARL'ın dezavantajı, onu kendiniz inşa etmeniz ve uyumlu bir donanım sürümüne sahip olmanız gerektiğidir.

**Yazılımcı notu:** Lütfen GNARL yazılımının hala deneysel olduğunu, az test edildiğini ve RileyLink kadar güvenli olarak değerlendirilmemesi gerektiğini unutmayın.

### RileyLink veya GNARL'ı nereden temin edebilirim?

Daha önce de belirtildiği gibi, cihazları buradan alabilirsiniz:

- RileyLink Cihazını buradan alabilirsiniz - [getrileylink.org](https://getrileylink.org/).
- GNARL - Buradan bilgi alabilirsiniz, ancak cihazın başka bir yerden sipariş edilmesi gerekiyor ([github.com/ecc1/gnarl](https://github.com/ecc1/gnarl)).

### RileyLink ve/veya pompa ile bağlantımı kaybedersem ne yapmalıyım?

1. "Uyan ve Ayarla" eylemini çalıştırın, bu, pompa ile iletişim kurmak için doğru frekansı bulmaya çalışacaktır.
2. Bluetooth'u devre dışı bırakın, 10 saniye bekleyin ve tekrar etkinleştirin. Bluetooth RileyLink'e yeniden bağlanmaya çalışacaktır.
3. RileyLink'i sıfırlayın, bunu yaptıktan sonra "RileyLink Yapılandırmasını Sıfırla" eylemini çalıştırmayı unutmayın.
4. 2. ve 3. adımları birlikte deneyin.
5. RileyLink'i sıfırlayın ve telefonu yeniden başlatın.

### Pompamın hangi Frekansı kullandığını nasıl belirleyebilirim?

![Pompa Modeli](../images/Medtronic06.png)

Pompanızın arka tarafında, sağ taraftaki ilk satırda 3 harfli özel kod göreceksiniz. İlk iki harf frekans tipini, son harf ise rengi belirler. Frekans için olası değerler şunlardır:

- NA - Kuzey Amerika (frekans seçiminde "ABD ve Kanada (916 MHz)" seçeneğini seçmeniz gerekir)
- CA - Kanada (frekans seçiminde "ABD ve Kanada (916 MHz)" seçeneğini seçmeniz gerekir)
- WW - Dünya Çapında (frekans seçiminde "Dünya Çapında (868 Mhz)" seçmeniz gerekir)