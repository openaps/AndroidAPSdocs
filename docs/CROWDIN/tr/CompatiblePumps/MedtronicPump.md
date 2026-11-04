# Medtronic Pompaları

AAPS sürücüsü, G ile biten (530G, 600 serisi [630G, 640G, 670G], 700 serisi [770G, 780G] vb.) tüm modellerde ve daha yeni modellerde çalışmaz.

Aşağıdaki model ve üretici yazılımı kombinasyonları uyumludur:

- 512/712 (herhangi bir üretici yazılımı sürümü)
- 515/715 (herhangi bir üretici yazılımı sürümü)
- 522/722 (herhangi bir üretici yazılımı sürümü)
- 523/723 (üretici yazılımı 2.4A veya altı)
- 554/754 AB sürümü (üretici yazılımı 2.6A veya altı)
- 554/754 Kanada sürümü (üretici yazılımı 2.7A veya altı)

Pompalardaki üretici yazılımını nasıl kontrol edeceğinizi [OpenAPS dokümantasyonunda](https://openaps.readthedocs.io/en/latest/docs/Gear%20Up/pump.html#how-to-check-pump-firmware-check-for-absence-of-pc-connect) veya [LoopDocs](https://loopkit.github.io/loopdocs/build/step3/#medtronic-pump-firmware) sayfasında bulabilirsiniz.

    {contents} İçindekiler
    :depth: 1
    :local: true

## AAPS ile pompa özellikleri

* **AAPS** ile iletişim kurmak için RileyLink uyumlu bir cihaz gerektirir.
* Yaz saati (DST) ve saat dilimi değişiklikleri otomatik olarak yönetilir.

## Donanım ve yazılım gereksinimleri

- **Telefon:** Medtronic sürücüsü, Bluetooth bağlantılarını destekleyen herhangi bir android telefonla çalışmalıdır. **ÖNEMLİ: Telefon üreticilerinin Bluetooth uygulamaları değişebileceği için her bir telefon modelinin davranış biçimi farklı olabilir. Örneğin, bazı telefonlar Bluetooth'u etkinleştirmeyi/devre dışı bırakmayı farklı şekilde ele alacaktır. Bu durum, AAPS'in Rileylink türü cihazınıza yeniden bağlanması gerektiğinde kullanıcı deneyimini etkileyebilir.**
- **RileyLink uyumlu cihaz:** Android telefonlar, iletişimi sağlayan ayrı bir cihaz olmadan Medtronic pompalarla iletişim kuramaz. Bu cihaz, Bluetooth aracılığıyla telefonunuzla ve uyumlu bir radyo bağlantısı aracılığıyla pompanızla bağlantı kuracaktır. Bu tür ilk cihaza Rileylink adı verildi, ancak artık ek işlevsellik sunabilen başka seçenekler de mevcuttur.
    
    - Rileylink'i [getrileylink.org](https://getrileylink.org/product/rileylink916) adresinde bulabilirsiniz.
    - Orangelink'i [getrileylink.org](https://getrileylink.org/product/orangelink) adresinde bulabilirsiniz
    - Emalink'i (birkaç model seçeneğiyle) [github.com](https://github.com/sks01/EmaLink) adresinde bulabilirsiniz
    - Gnarl (Kendin yap araçlarına ihtiyacınız olacak) detaylar için [github.com](https://github.com/ecc1/gnarl) adresine başvurabilirsiniz.

Çeşitli Rileylink uyumlu cihazların karşılaştırma tablosunu [getrileylink.org](https://getrileylink.org/rileylink-compatible-hardware-comparison-chart) adresinde bulabilirsiniz

(MedtronicPump-configuration-of-the-pump)=

## Pompa Konfigürasyonu

AAPS'in komutları uzaktan gönderebilmesi için pompada aşağıdaki ayarlar yapılmalıdır. Medtronic 715'te değişikliği yapmak için gerekli adımlar, her ayar için parantez içinde gösterilmiştir. Adımlar, pompa tipine ve/veya üretici yazılımı sürümüne göre değişebilir.

- **Pompada uzak modu etkinleştirin** (Pompada Act düğmesine basın ve Utilities -> Remote Options menüsüne gidin, On seçeneğini seçin ve sonraki ekranda Add ID ile 111111 gibi rastgele bir kimlik ekleyin). Pompanın uzaktan iletişim beklemesi için Remote ID listesinde en az bir ID olmalıdır.
- **Maks Bazal'ı ayarlayın** (Pompada Act düğmesine basın, Basal ve ardından Max Basal Rate menüsüne gidin) Örnek olarak, bu değeri maksimum standart bazal oranınızın dört katına ayarlamak %400 geçici bazal oranına izin verir. Pompa tarafından izin verilen maksimum değer saatte 34,9 ünitedir.
- **Maks Bolus'u ayarlayın** (Pompada Act düğmesine basın, Bolus ve ardından Max Bolus menüsüne gidin) Bu, pompanın kabul edeceği en büyük bolustur. Pompa tarafından izin verilen maksimum değer 25'tir.
- **Profili Standard olarak ayarlayın**. (Pompada Act düğmesine basın, Basal ve ardından Select Patterns menüsüne gidin) AAPS farklı profilleri telefonunuzda yöneteceği için pompada yalnızca bir profil gerekir. Başka bazal modeli gerekli değildir.
- **Geçici Bazal Oranı türünü ayarlayın** (Pompada Act düğmesine basın, Basal ve ardından Temp Basal Type menüsüne gidin). Absolute'u seçin (Percent'i değil).

## Telefon/AAPS'te Medtronic konfigürasyonu

- **RileyLink uyumlu cihazı telefonunuzun Bluetooth menüsünden eşleştirmeyin.** Telefonunuzun Bluetooth menüsünden eşleştirirseniz, aşağıdaki talimatları uyguladığınızda AAPS Rileylink uyumlu cihazınızı göremez.
- Telefonunuzda otomatik ekran döndürmeyi devre dışı bırakın. Belirli cihazlarda otomatik ekran döndürme, Bluetooth oturumlarının yeniden başlamasına neden olur ve bu da Medtronic pompanız için sorunlara neden olabilir. 
- Medtronic pompanızı AAPS'te yapılandırmanın iki yolu vardır:

1. Yeni bir kurulumun parçası olarak kurulum sihirbazını kullanma
2. **Konfigürasyon** > **Pompa** bölümünde **Medtronic** seçilerek
    
    ![Medtronic eklentisiyle Konfigürasyon > Pompa](../images/v4/Configuration/configuration_pump_list_3.png)
    
    Seçildikten sonra **Medtronic** kartında iki düğme görünür: **Ayarlar** ve **Eklentiyi aç**:
    
    ![Konfigürasyon > Pompa bölümünde seçilmiş Medtronic eklentisi](../images/v4/Pumps/medtronic_enabled.png)
    
    **Ayarlar**, Medtronic sürücüsünün ayarlarını açar:
    
    ![Medtronic sürücü ayarları](../images/v4/Pumps/medtronic_settings.png)
    
    **Eklentiyi aç** (veya **Yönet** > **Pompa**) Medtronic pompa ekranını açar. Pompa eşleştirilmeden önce ekran şöyle görünür:
    
    ![Eşleştirmeden önce Medtronic pompa ekranı](../images/v4/Pumps/medtronic_pump_screen.png)

Medtronic pompanızı kurulum sihirbazıyla yapılandırırken Bluetooth sorunları nedeniyle (ör. pompaya başarıyla bağlanamıyorsunuz) kurulumu tamamlayamayabilirsiniz. Böyle bir durumda, yapılandırmayı tamamlamak ve 2. seçeneği kullanarak daha fazla sorun giderebilmek için ilk önce sanal pompa seçeneğini seçmelisiniz.

AAPS'i Medtronic pompanızla çalışacak şekilde kurarken **Ayarlar** bölümünde aşağıdaki öğeleri ayarlamanız gerekir (yukarıdaki ayarlar resmine bakın):

- **Pompa Seri Numarası**: Pompanızın arkasında yer alır ve SN ile başlar. Yalnızca gösterilen 6 rakamı, hiçbir harf olmadan girmelisiniz (ör. 123456).
- **Pompa Tipi**: Kullandığınız pompa modeli (ör. 522). 
- **Pompa Frekansı**: Pompanızın ilk dağıtıldığı yere bağlı olarak iki seçenek vardır. Hangi seçeneği seçeceğinizden emin değilseniz [SSS](#MedtronicPump-faq) bölümüne bakın: 
    - ABD & Kanada için kullanılan frekans 916 MHz'dir
    - Dünya geneli için kullanılan frekans 868 MHz'dir
- **Pompadaki Maks Bazal (Ü/sa)**: Bunun, pompanızda ayarlanan değerle eşleşmesi gerekir (yukarıdaki pompa konfigürasyonuna bakın). Bu ayar da dikkatle seçilmelidir, çünkü AAPS'in bazal oranınız üzerinden ne kadar insülin verebileceğini belirler. Bu değer maksimum geçici bazal oranını etkin bir şekilde ayarlayacaktır. Örnek olarak, bu değeri maksimum standart bazal oranınızın dört katına ayarlamak %400 Geçici Bazal Oranına izin verir. Pompa tarafından izin verilen maksimum değer saatte 34,9 ünitedir.
- **Pompadaki Maks Bolus (Ü)** (bir saat içinde): Bunun, pompanızda ayarlanan değerle eşleşmesi gerekir (yukarıdaki pompa konfigürasyonuna bakın). Bu ayar dikkatle düşünülmelidir, çünkü AAPS'in ayarlayabileceği en büyük bolusu belirler.
- **Bolus göndermeden önceki bekleme süresi (sn)**: Bolus verildikten sonra, komut gerçekten pompaya gönderilmeden önce geçen saniye sayısı. Bu süre, bir bolus komutunun yanlışlıkla gönderilmesi durumunda kullanıcının bolusu iptal etmesine olanak tanır. AAPS üzerinden başlatılmış bir bolusu iptal etmek mümkün değildir. Halihazırda başlamış bir bolusu iptal etmenin tek yolu, pompayı manuel olarak askıya almak ve ardından devam ettirmektir.
- **Medtronic Kodlama**: Medtronic kodlamasının nerede yapılacağını belirler (donanımda veya yazılımda). Donanım kodlamasının seçilmesi (Rileylink uyumlu cihaz tarafından gerçekleştirilir) tercih edilir çünkü bu daha az veri gönderilmesine neden olur. Yazılım kodlamasını seçmek (yani kodlamayı AAPS'in yapması), sık bağlantı kopmaları görülürse yardımcı olabilir. Rileylink cihazlarında üretici yazılımı sürümü 0.x ise bu ayar yok sayılır.
- **Pil Türü (Güç Görünümü)**: Kalan pil gücü seviyesini doğru bir şekilde belirlemek için kullanımda olan AAA pil tipini seçmelisiniz. Basit görünüm dışında bir değer seçildiğinde AAPS, hesaplanan kalan pil yüzdesini ve voltu gösterir. Aşağıdaki seçenekler mevcuttur:
    
    - Seçilmedi (Basit görünüm)
    - Alkali (Genişletilmiş görünüm)
    - Lityum (Genişletilmiş görünüm)
    - NiZn (Genişletilmiş görünüm)
    - NiMH (Genişletilmiş görünüm)
- **Taramayı Kullan**: Rileylink uyumlu cihazlarınıza bağlanmadan önce Bluetooth taramasını etkinleştirir. Bu seçenek cihazla bağlantınızın güvenilirliğini artırabilir.

- **OrangeLink/EmaLink/DiaLink tarafından bildirilen pil seviyesini göster**: Bu özellik yalnızca EmaLink veya OrangeLink gibi daha yeni link cihazlarında desteklenir. Değer, Medtronic pompa ekranında **RileyLink Pili** olarak gösterilir.
- **Nötr geçici bazalları ayarla**: Varsayılan olarak Medtronic pompalar, geçici bazal oranı etkinken her saat başı bip sesi çıkarır. Bu seçeneği etkinleştirmek, bip sesini önlemek için saat başında geçici bazalı kesintiye uğratır ve böylece duyulan bip sayısını azaltmaya yardımcı olabilir.

(pairing-your-rileylink-compatible-device)=

### RileyLink uyumlu cihazınızı eşleştirme

RileyLink uyumlu cihazınız telefonunuzun Bluetooth menüsünden değil, Medtronic pompa ekranından eşleştirilir:

- Pompa ekranını açın (**Yönet** > **Pompa** veya **Konfigürasyon** > **Pompa** bölümündeki Medtronic kartında **Eklentiyi aç**).
- **RileyLink'i Eşleştir** düğmesine dokunun. **AAPS** yakındaki RileyLink uyumlu cihazları tarar.
- Listede cihazınıza dokunun. **RileyLink başarıyla eşleştirildi** mesajı görününce **Tamam** düğmesine dokunun.

## Medtronic pompa ekranı

Medtronic pompa ekranını açmak için **Yönet** > **Pompa** bölümüne gidin. Pompa ekranı, güncel pompa durum bilgilerini ve Medtronic'e özel bazı eylemleri gösterir (yukarıdaki pompa ekranı resmine bakın).

- **RileyLink Durumu**: Telefonunuz ve Rileylink uyumlu cihaz arasındaki bağlantının mevcut durumu. Bu satır her zaman "Bağlandı" olarak görünmelidir. Diğer herhangi bir durum, kullanıcı müdahalesini gerektirebilir. 
- **RileyLink Pili**: EmaLink veya OrangeLink cihazınızın mevcut pil seviyesi. Yalnızca Medtronic ayarlarında **OrangeLink/EmaLink/DiaLink tarafından bildirilen pil seviyesini göster** etkinse gösterilir.
- **Pompa Durumu**: Pompa bağlantısının mevcut durumu. Pompa sürekli bağlı olmayacağından, burada genellikle uyku simgesi görünecektir. Başka olası durumlar da vardır: AAPS bir komut göndermeye çalışırken "Uyanıyor" veya "Saati al", "GBO ayarla" gibi diğer olası pompa komutları.
- **Pil**: Medtronic ayarlarında **Pil Türü (Güç Görünümü)** için seçilen değere göre pil durumunu gösterir.
- **Son bağlantı**: Son başarılı pompa bağlantısının ne kadar önce olduğu.
- **Son bolus**: Son başarılı bolusun ne kadar önce verildiği.
- **Temel Bazal Oranı**: Aktif Profilinizde şu anda pompada çalışan temel bazal orandır.
- **Geçici Bazal**: Şu anda iletilen geçici bazal; saatte 0 ünite de olabilir.
- **Rezervuar**: Rezervuarda ne kadar insülin olduğunu gösterir (en az saatte bir güncellenir).
- **Hatalar**: Sorun varsa hata dizesi (çoğunlukla yapılandırmada hata olup olmadığını gösterir).

Ekranın altında şu düğmeler vardır:

- **Yenile**: Pompanın mevcut durumunu yenilemek içindir. Bu buton komple veri yenilediğinden (geçmişi al, zamanı al/ayarla, profil al, pil durumunu al, vb.) yalnızca bağlantı uzun bir süre boyunca kopmuşsa kullanılmalıdır.
- **RileyLink'i Eşleştir**: RileyLink uyumlu cihazınızı bulur ve eşleştirir ([yukarıya](#pairing-your-rileylink-compatible-device) bakın).
- **Pompa geçmişi**: Pompa geçmişini gösterir ([aşağıya](#MedtronicPump-pump-history) bakın).
- **RL İstatistikleri**: RL istatistiklerini gösterir ([aşağıya](#MedtronicPump-rl-status-rileylink-status) bakın).
- **Uyan ve Ayarla** ve **RileyLink'i Sıfırla**: Aşağıdaki [Eylemler](#medtronic-actions) bölümüne bakın.
- **Bolus Bloğunu Temizle**: Yalnızca bir bolustan sonra kısa bir süre, **AAPS** pompanın bolusu bitirmesini beklerken gösterilir. Bu düğmeye dokunmak bu beklemeyi sonlandırır.

(MedtronicPump-pump-history)=

## Pompa geçmişi

![Filtre düğmeleriyle pompa geçmişi ekranı](../images/Medtronic03.png)

Pompa geçmişi her 5 dakikada bir alınır ve yerel olarak saklanır. Yalnızca 24 saatlik geçmiş değerler depolanır. Bu, gerektiğinde pompanın davranışını kolayca görmenizi sağlar. Yalnızca AAPS ile ilgili öğeler saklanır; AAPS ile ilgisi olmayan konfigürasyon işlevleri kaydedilmez.

Açmak için pompa ekranında **Pompa geçmişi** düğmesine dokunun. Varsayılan olarak **Tümü** seçilidir. Yalnızca bir tür kaydı göstermek için üstteki filtre düğmelerinden birine (örneğin **Boluslar**, **Bazallar** veya **Alarmlar**) dokunun.

(MedtronicPump-rl-status-rileylink-status)=

## RL Durumu (RileyLink Durumu)

![RileyLink Durumu - Ayarları](../images/Medtronic04.png) ![RileyLink Durumu - Geçmişi](../images/Medtronic05.png)

RL Durumu iletişim kutusunda iki sekme bulunur:

- **Ayarlar**: RileyLink uyumlu cihazla ilgili ayarları gösterir: Yapılandırılmış Adres, Bağlı Cihaz, Bağlantı Durumu, Bağlantı Hatası ve RileyLink üretici yazılımı sürümleri. Cihaz Tipi her zaman Medtronic Pompa, Model kullandığınız model, Seri numarası konfigüre edilmiş seri numarası, Pompa Frekansı hangi frekansı kullandığınızı gösterir. Son Frekans en son kullanılan frekanstır.
- **Geçmiş**: İletişim geçmişini gösterir. RileyLink satırları, RileyLink için durum değişikliklerini, Medtronic satırları ise pompaya hangi komutların gönderildiğini gösterir.

(medtronic-actions)=

## Eylemler

Medtronic sürücüsü kullanıldığında pompa ekranında (**Yönet** > **Pompa**) iki ek eylem vardır:

- **Uyan ve Ayarla** - AAPS uzun bir süre pompanıza bağlanamadıysa (her 5 dakikada bir bağlanmalıdır), ayarlamayı (tune-up) elle başlatabilirsiniz. Bu buton pompanız tarafından kullanılan tüm olası radyo frekanslarını arayarak pompanızla iletişim kurmaya çalışacaktır. Bağlantı başarılı olursa, başarılı frekans varsayılan olarak ayarlanır. Ayarlama sürerken pompa ekranındaki RileyLink durumu bunu gösterir. Ayarlama başarısız olursa (örneğin pompa menzil dışında olduğu için), **AAPS** yaklaşık her 10 dakikada bir kendiliğinden tekrar dener.
- **RileyLink'i Sıfırla** - RileyLink uyumlu cihazınızı sıfırlarsanız, cihazın yeniden yapılandırılabilmesi için (frekans ayarı, frekans tipi ayarı, kodlama yapılandırması) bu eylemi kullanmanız gerekebilir.

## Önemli notlar

### NS konfigürasyonunda özel dikkat gerekir

AAPS senkronizasyon için seri numarasını kullanır ve seri numarası NS'de görünür. Eski Medtronic pompaların seri numarasını bilen biri pompayı uzaktan kontrol edebilir. Bu nedenle pompanızın seri numarası (SN) dışarı sızmasın diye NS sitenizi güvenli hale getirmeye özellikle dikkat edin. Bkz. https://nightscout.github.io/nightscout/security/

### OpenAPS users

OpenAPS kullanıcıları şunu bilmelidir: Medtronic ile AAPS, OpenAPS'ten tamamen farklı bir yaklaşım kullanır. AAPS kullanırken pompayla etkileşimin ana yolu telefonunuzdur. Normal kullanımda pompa menüsünü kullanmanız gereken tek zaman büyük olasılıkla rezervuar değiştirmektir. This is very different when using OpenAPS where at least some of a bolus is usually delivered via the quick bolus buttons. Pompa elle bolus vermek için kullanılırken AAPS aynı anda bolus vermeye çalışırsa sorunlar olabilir. Bu gibi durumlarda sorunları önlemeye çalışan kontroller vardır, ancak yine de mümkünse bundan kaçınılmalıdır.

### Günlükler

Medtronic pompanızın çalışmasıyla ilgili sorun gidermeniz gerekirse ekranın sol üst köşesindeki menü simgesini seçin, Bakım'ı ve ardından Günlük ayarları'nı seçin. For troubleshooting any Medtronic issues Pump, PumpComm, PumpBTComm should be checked.

### Medtronic CGM

Medtronic CGM şu anda DESTEKLENMİYOR.

### Manual use of pump

You should avoid manually bolusing or setting TBRs on your pump. Bu tür tüm komutlar AAPS üzerinden gönderilmelidir. In the event manual commands are used there must be a delay of at least 3 minutes between them in order to reduce the risk of any issues.

### Saat dilimi değişiklikleri ve DST (yaz saati) veya Medtronic pompa ve AAPS ile seyahat

AAPS saat dilimi değişikliklerini otomatik olarak algılar ve telefonunuz yeni saate geçtiğinde pompanın saatini günceller.

Doğuya seyahat etmek, mevcut saate saat eklemeniz anlamına gelir (ör. GMT+0'dan GMT+2'ye). Bu herhangi bir soruna yol açmaz, çünkü çakışma olmaz (ör. aynı saati iki kez yaşamak mümkün olmaz). Batıya seyahat ise sorunlara yol açabilir, çünkü fiilen zamanda geriye gidersiniz; bu da yanlış AİNS verilerine neden olabilir.

Batıya seyahatte görülen sorunlar geliştiriciler tarafından biliniyor ve olası bir çözüm üzerinde çalışılıyor. See https://github.com/andyrozman/RileyLinkAAPS/issues/145 for more detail. For now, please be aware that this issue may occur and carefully monitor when changing time zones.

### GNARL tamamen uyumlu bir Rileylink uyumlu cihaz mı?

GNARL kodu, AAPS'teki Medtronic sürücüsünün kullandığı tüm işlevleri tam olarak destekler; yani tamamen uyumludur. Bunun ek çalışma gerektirdiğini unutmayın: uyumlu donanımı bulmanız ve ardından GNARL kodunu cihaza yüklemeniz gerekir.

**Yazılımcının notu:** Lütfen GNARL yazılımının hâlâ deneysel olduğunu, az test edildiğini ve RileyLink kadar güvenli kabul edilmemesi gerektiğini unutmayın.

(MedtronicPump-faq)=

## SSS

(MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump)=

### RileyLink ve/veya pompa bağlantısını kaybedersem ne yapmalıyım?

There are a number of options to try and resolve connectivity issues.

- Yukarıda anlatıldığı gibi pompa ekranında (**Yönet** > **Pompa**) **Uyan ve Ayarla** düğmesine dokunun.
- Telefonunuzda Bluetooth'u devre dışı bırakın, 10 saniye bekleyin ve ardından tekrar etkinleştirin. Bu işlem Rileylink cihazını telefona yeniden bağlanmaya zorlayacaktır.
- Rileylink cihazını sıfırlayın. Ardından pompa ekranında (**Yönet** > **Pompa**) **RileyLink'i Sıfırla** düğmesine dokunmalısınız.
- Diğer yöntemler işe yaramadığında, bazı kullanıcılar bağlantıyı yeniden kurmak için aşağıdaki adımları etkili bulmuştur: 
    1. Telefonunuzu yeniden başlatın
    2. *Telefon yeniden başlatılırken* Rileylink cihazınızı yeniden başlatın
    3. AAPS'i açın ve bağlantının yeniden kurulmasını bekleyin

### Pompamın hangi frekansı kullandığını nasıl anlarım?

![Pump Model](../images/Medtronic06.png)

On the back of the pump you will find a line detailing your model number along with a special 3 letter code. The first two letters determine the frequency type and the last one determines color. Here are possible values for Frequency:

- NA - Kuzey Amerika (frekans seçiminde "ABD & Kanada (916 MHz)" seçeneğini seçmeniz gerekir)
- CA - Kanada (frekans seçiminde "ABD & Kanada (916 MHz)" seçeneğini seçmeniz gerekir)
- WW - Dünya geneli (frekans seçiminde "Dünya geneli (868 Mhz)" seçeneğini seçmeniz gerekir)

(MedtronicPump-pump-unreachable)=

### "Pompaya ulaşılamıyor" hatası nasıl düzeltilir

Bazı Medtronic pompalar, bir **AAPS** güncellemesinden sonra "Pompaya ulaşılamıyor" hatası bildirir. Düzeltmek için kodlama türünü değiştirin:

1. **Konfigürasyon** > **Pompa** bölümüne gidin ve **Medtronic** kartında **Ayarlar** düğmesine dokunun.
2. **Medtronic Kodlama** ayarını **Donanım 4b6b Kodlama** olarak değiştirin.

## Nereden yardım alabilirsiniz?

Medtronic sürücüsünün geliştirilmesi topluluk tarafından **gönüllülük** esasına göre yapılır. Yardım istemeden önce lütfen:

1. Özelliğin nasıl çalışması gerektiğini doğrulamak için bu dokümantasyonun ilgili bölümünü **okuyun**.
2. [Discord](https://discord.gg/4fQUWHZ4Mw)'daki *#AAPS* kanalında veya diğer [topluluk kanallarından](../GettingHelp/WhereCanIGetHelp.md) birinde **sorun**.
3. [Mevcut sorunlar](https://github.com/nightscout/AndroidAPS/issues) arasında arama yaparak **bir hata bildirin**; sizinki listede yoksa [yeni bir sorun (issue)](https://github.com/nightscout/AndroidAPS/issues) açın ve [günlük dosyalarınızı](../GettingHelp/AccessingLogFiles.md) ekleyin.

Yardım isterken telefonunuzun markasını ve modelini, Android sürümünü, **AAPS** sürümünü ve sorunun sade bir açıklamasını (ne değişti, en son ne zaman çalıştı) ekleyin.