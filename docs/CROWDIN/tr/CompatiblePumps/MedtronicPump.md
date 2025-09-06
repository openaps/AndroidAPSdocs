# Medtronic Pompaları

AAPS sürücüsü, G ile biten (530G, 600 serisi [630G, 640G, 670G], 700 serisi [770G, 780G] vb.) tüm modellerde ve daha yeni modellerde çalışmaz.

Aşağıdaki modeli ve yazılımı belirtilen pompa kombinasyonları uyumludur:

- 512/712 (herhangi bir pompa yazılımı sürümü)
- 515/715 (herhangi bir pompa yazılımı sürümü)
- 522/722 (herhangi bir pompa yazılımı sürümü)
- 523/723 (pompa yazılımı 2.4A veya altı)
- 554/754 AB sürümü (pompa yazılımı 2.6A veya altı)
- 554/754 Kanada sürümü (pompa yazılımı 2.7A veya altı)

[OpenAPS dokümantasyonu](https://openaps.readthedocs.io/en/latest/docs/Gear%20Up/pump.html#how-to-check-pump-firmware-check-for-absence-of-pc-connect) veya [Döngü Dokümantasyonunda](https://loopkit.github.io/loopdocs/build/step3/#medtronic-pump-firmware) pompalardaki yazılım versiyonunu nasıl öğreneceğinizi bulabilirsiniz.

## Donanım ve yazılım gereksinimleri

- **Telefon:** Medtronic sürücüsü, Bluetooth bağlantılarını destekleyen herhangi bir android telefonla çalışmalıdır. **ÖNEMLİ: Telefon üreticilerinin Bluetooth uygulamaları değişebileceği için her bir telefon modelinin davranış biçimi farklı olabilir. Örneğin, bazı telefonlar Bluetooth'u etkinleştirmeyi/devre dışı bırakmayı farklı şekilde ele alacaktır. This can impact the user experience when AAPS needs to reconnect to your Rileylink type device.**
- **RileyLink Compatible Device:** Android phones cannot communicate to Medtronic pumps without a separate device to handle communications. Bu cihaz, Bluetooth aracılığıyla telefonunuzla ve uyumlu bir radyo bağlantısı aracılığıyla pompanızla bağlantı kuracaktır. Bu tür ilk cihaza Rileylink adı verildi, ancak artık ek işlevsellik sunabilen başka seçenekler de mevcuttur.
    
    - Rileylink'i [getrileylink.org](https://getrileylink.org/product/rileylink916) adresinde bulabilirsiniz.
    - Orangelink, [getrileylink.org](https://getrileylink.org/product/orangelink) adresinde
    - Emalink (birkaç model opsiyonuyla) [github.com](https://github.com/sks01/EmaLink) adresinde
    - Gnarl (Kendin yap araçlarına ihtiyacınız olacak) detaylar için [github.com](https://github.com/ecc1/gnarl) adresine başvurabilirsiniz.

A comparison chart for the various Rileylink compatible devices can be found at [getrileylink.org](https://getrileylink.org/rileylink-compatible-hardware-comparison-chart)

(MedtronicPump-configuration-of-the-pump)=

## Pompa Konfigürasyonu

The following settings should be configured on the pump in order for AAPS to remotely send commands. Medtronic 715'te değişikliği yapmak için gerekli adımlar, her ayar için parantez içinde gösterilmiştir. Adımlar, pompa tipine ve/veya pompa yazılım sürümüne göre değişebilir.

- **Pompada uzak modu etkinleştir** Pompada Act'ye basın ve Yardımcı Programlar (Utilities) -> Uzak Seçenekler'e (Remote Options) gidin, Açık'ı (ON) seçin ve sonraki ekranda Kimlik Ekle'yi (Add ID) yapın ve 1111111 gibi herhangi bir rastgele kimlik ekleyin. Pompanın uzaktan iletişim beklemesi için Remote ID listesinde en az bir ID olmalıdır.
- **Maks Bazal Ayarla** (Pompada Act'e basın ve Bazal'a gidin ve ardından Maks Bazal Oranı seçin) Örnek olarak, bu değeri maksimum standart bazal oranınızın dört katına ayarlamak %400 Geçici Bazal Oranına izin verir. Pompa tarafından izin verilen maksimum değer saatte 34,9 ünitedir.
- **Maks Bolus Ayarla** (Pompada sırasıyla Act ve Bolus'a basın ve ardından Maks Bolus'u seçin) Buradaki değer pompanın kabul edeceği en büyük bolustur. Pompa tarafından izin verilen maksimum değer 25'tir.
- **Profili Standart olarak ayarlayın**. (On the pump press Act and go to Basal and then Select Patterns) The pump will only need one profile as AAPS will manage different profiles on your phone. Başka bazal modeli gerekli değildir.
- **Geçici Bazal Oranı türünü ayarlayın** (Pompada ACT'ye basın ve Bazal'a ve ardından Geçici Bazal Türü'ne gidin). Mutlak'ı (Absolute) seçin (Yüzdeyi değil).

## Medtronic Configuration of Phone/AAPS

- **Do not pair RileyLink compatible device with the Bluetooth menu on your phone.** Pairing via the Bluetooth menu on your phone will stop AAPS from seeing your Rileylink Compatible device when you follow the instructions below.
- Telefonunuzda otomatik ekran döndürmeyi devre dışı bırakın. Belirli cihazlarda otomatik ekran döndürme, Bluetooth oturumlarının yeniden başlamasına neden olur ve bu da Medtronic pompanız için sorunlara neden olabilir. 
- There are two ways to configure your Medtronic pump in AAPS:

1. Yeni bir kurulumun parçası olarak kurulum sihirbazını kullanma
2. Konfigürasyon Ayarları'nda pompa seçimi sekmesinde Medtronic seçeneğinin yanındaki dişli simgesini tıklayarak

When configuring your Medtronic pump with the setup wizard it is possible that you will be prevented from completing setup because of Bluetooth issues (e.g. you cannot successfully connect to the pump). Böyle bir durumda, yapılandırmayı tamamlamak ve 2. seçeneği kullanarak daha fazla sorun giderebilmek için ilk önce sanal pompa seçeneğini seçmelisiniz.

![Medtronic Ayarları](../images/Medtronic01a.png)

While setting up AAPS to work with your medtronic pump you need to set following items: (see picture above)

- **Pompa Seri Numarası**: Pompanızın arkasında yer alır ve SN ile başlar. You should only enter the 6 numbers shown without any alphabetic characters (e.g. 123456).
- **Pompa Tipi**: Kullandığınız pompa modeli (ör. 522). 
- **Pompa Frekansı**: Pompanızın ilk dağıtıldığı yere bağlı olarak iki seçenek vardır. Please check the [FAQ](#MedtronicPump-faq) if you are unsure which option to select): 
    - ABD & Kanada için (NA-CA) kullanılan frekans 916 Mhz
    - Dünya çapında (WW) kullanılan frekans 868 Mhz'dir.
- **Pompadaki Maks Bazal (Ü/s)**: Bunun, pompanızda ayarlanan değerle eşleşmesi gerekir (yukarıdaki pompa konfigürasyonuna bakın). Again this setting must be carefully selected as it will determine how much AAPS can deliver via your basal rate. Bu değer maksimum geçici bazal oranını etkin bir şekilde ayarlayacaktır. Örnek olarak, bu değeri maksimum standart bazal oranınızın dört katına ayarlamak %400 Geçici Bazal Oranına izin verir. Pompa tarafından izin verilen maksimum değer saatte 34,9 ünitedir.
- **Pompadaki Maks Bolus (Ü)** (bir saat içinde): Bunun, pompanızda ayarlanan değerle eşleşmesi gerekir (yukarıdaki pompa konfigürasyonuna bakın). This setting should be carefully considered as it determines how large a bolus AAPS can ever set.
- **Bolus göndermeden önceki bekleme süresi (sn)**: Bolus verildikten sonra, komut gerçekten pompaya gönderilmeden önce geçen saniye sayısı. Bu süre, bir bolus komutunun yanlışlıkla gönderilmesi durumunda kullanıcının bolusu iptal etmesine olanak tanır. It is not possible to cancel a bolus that has started via AAPS. Halihazırda başlamış bir bolusu iptal etmenin tek yolu, pompayı manuel olarak askıya almak ve ardından devam ettirmektir.
- **Medtronic Kodlama**: Medtronic kodlamasının gerçekleştirilip gerçekleştirilmediğini belirler. Donanım kodlamasının seçilmesi (Rileylink uyumlu cihaz tarafından gerçekleştirilir) tercih edilir çünkü bu daha az veri gönderilmesine neden olur. Selecting Software encoding (i.e. carried out by AAPS) can help in the event frequent disconnects are seen. Rileylink cihazlarında yazılım sürümü 0.x ise bu ayar yok sayılır.
- **Pil Türü (Güç Görünümü)**: Kalan pil gücü seviyesini doğru bir şekilde belirlemek için kullanımda olan AAA pil tipini seçmelisiniz. When a value other than simple view is selected AAPS will display the remaining calculated battery percentage level and volts. Aşağıdaki seçenekler mevcuttur:
    
    - Seçilmedi (Basit görünüm)
    - Alkali (Genişletilmiş görünüm)
    - Lityum (Genişletilmiş görünüm)
    - NiZn (Genişletilmiş görünüm)
    - NiMH (Genişletilmiş görünüm)
- **Bolus/Tedavilerde Hata Ayıklama**: Gereksinimlere göre Açın veya Kapatın.

- **RileyLink Yapılandırması**: Bu seçenek, Rileylink uyumlu cihazınızı bulmanızı ve eşleştirmenizi sağlar. Bu yapılandırma yardımıyla, yakındaki Rileylink uyumlu cihazları ve sinyal gücünü görüp seçebilirsiniz.
- **Taramayı Kullan** Rileylink Uyumlu cihazlarınızla bağlantı kurmadan önce Bluetooth taramasını etkinleştirir. Bu seçenek cihazla bağlantınızın güvenilirliğini artırabilir.
- **OrangeLink/EmaLink/DiaLink tarafından bildirilen pil düzeyini göster** Bu özellik yalnızca EmaLink veya OrangeLink gibi daha yeni cihazlarda desteklenir. Değerler, AnroidAPS'deki Medtronic sekmesinde gösterilecektir. 
- **Sık kullanılan Geçici Bazalları ayarla** Varsayılan olarak Medtronic pompaları, geçici bir bazal oranın etkin olduğu saatte bip sesi çıkarır. Enabling this option can help reduce the number of beeps heard by interrupting a temporary basal at the hour change in order to suppress the beep.

## MEDTRONIC (MDT) Sekmesi

![MDT Sekmesi](../images/Medtronic02.png) When AAPS is configured to use a Medtronic pump a MDT tab will be shown in the list of tabs at the top of the screen. Bu sekme, Medtronic'e özgü bazı eylemlerle birlikte mevcut pompa durumu bilgilerini görüntüler.

- **RileyLink Durumu**: Telefonunuz ve Rileylink uyumlu cihaz arasındaki bağlantının mevcut durumu. Bu satır her zaman "Bağlı" olarak görünmelidir. Diğer herhangi bir durum, kullanıcı müdahalesini gerektirebilir. 
- **RileyLink Pili**: EmaLink veya OrangeLink cihazınızın mevcut pil seviyesi. Medtronic Pompa Yapılandırma menüsünde "OrangeLink/EmaLink/DiaLink cihazı tarafından bildirilen pil seviyesini göster" seçimine bağlıdır.
- **Pompa Durumu**: Pompa bağlantısının mevcut durumu. Pompa sürekli bağlı olmayacağından, burada genellikle uyku simgesi görünecektir. There are a number of possible other status including "Waking Up" when AAPS is trying to issue a command or other possible pump commands such as "Get Time", "Set TBR", etc.
- **Pil**: Medtronic Pompa Yapılandırma menüsünde Pil Tipi (Güç Görünümü) için seçilen değere göre pil durumunu gösterir. 
- **Last connection**: How long ago the last successful pump connection happened.
- **Last Bolus**: How long ago the last successful bolus was delivered.
- **Temel Bazal Oranı**: Aktif Profilinizde şu anda pompada çalışan temel bazal orandır.
- **Geçici Bazal**: Şu anda saatte 0 ünite de olabilen teslim edilen geçici bazal.
- **Rezervuar**: Rezervuarda ne kadar insülin olduğu gösterir.(saatte bir güncellenir).
- **Hatalar**: Sorun varsa hata dizesi (çoğunlukla yapılandırmada hata olup olmadığını gösterir).

Ekranın altında üç buton vardır:

- **Yenile**: Pompanın mevcut durumunu yenilemek içindir. Bu buton komple veri yenilediğinden (geçmişi al, zamanı al/ayarla, profil al, pil durumunu al, vb.) yalnızca bağlantı uzun bir süre boyunca kopmuşsa kullanılmalıdır.
- **Pump History**: Shows pump history (see [below](#MedtronicPump-pump-history))
- **RL Stats**: Show RL Stats (see [below](#MedtronicPump-rl-status-rileylink-status))

(MedtronicPump-pump-history)=

## Pompa geçmişi

![Pompa Geçmişi İletişim Kutusu](../images/Medtronic03.png)

Pompa geçmişi her 5 dakikada bir alınır ve yerel olarak saklanır. Yalnızca 24 saatlik geçmiş değerler depolanır. The allows for a convenient way to see pump behaviour should that be required. The only items stored are those relevenant to AAPS and will not include a configuration function that has no relevance.

(MedtronicPump-rl-status-rileylink-status)=

## RL Durumu (RileyLink Durumu)

![RileyLink Durumu - Ayarları](../images/Medtronic04.png) ![RileyLink Durumu - Geçmişi](../images/Medtronic05.png)

RL Durumu iletişim kutusunda iki sekme bulunur:

- **Ayarlar**: RileyLink ile ilgili ayarları gösterir: Yapılandırılmış Adres, Bağlı Cihaz, Bağlantı Durumu, Bağlantı Hatası ve RileyLink yazılımı sürümleri. Cihaz Tipi her zaman Medtronic Pompa, Model kullandığınız model, Seri numarası konfigüre edilmiş seri numarası, Pompa Frekansı hangi frekansı kullandığınızı gösterir. Son Frekans en son kullanılan frekanstır.
- **Geçmiş**: İletişim geçmişini gösterir. RileyLink satırları, RileyLink için durum değişikliklerini, Medtronic satırları ise pompaya hangi komutların gönderildiğini gösterir.

## Eylemler

Medtronic sürücüsü kullanıldığında, Eylemler Sekmesine iki buton eklenir:

- **Wake and Tune Up** - In the event that AAPS hasn't connected to your pump for a sustained period (it should connect every 5 minutes), you can force a Tune Up. Bu buton pompanız tarafından kullanılan tüm olası radyo frekanslarını arayarak pompanızla iletişim kurmaya çalışacaktır. In the event a successful connection is made the successful frequency will be set as the default.
- **RileyLink Yapılandırmasını Sıfırla** - RileyLink uyumlu cihazınızı sıfırlarsanız, cihazın yeniden yapılandırılabilmesi için bu eylemi kullanmanız gerekebilir (frekans ayarı, frekans tipi ayarı, yapılandırılmış kodlama).

## Önemli notlar

### Special attention in NS configuration needed

AAPS is using serial number for synchronization and serial number is exposed to NS. Because knowledge of serial number of old Medtronic pump can be used to control the pump remotely take special care to hardening NS site preventing leakage of SN of your pump. See https://nightscout.github.io/nightscout/security/

### OpenAPS users

OpenAPS users should note that AAPS with Medtronic uses a completely different approach than OpenAPS. Using AAPS the primary method of interacting with th pump is via your phone. In normal use cases it is likely that the only time it is required to use the pump menu is when changing resevoirs. This is very different when using OpenAPS where at least some of a bolus is usually delivered via the quick bolus buttons. In the event the pump is used to manually deliver a bolus there can be issues if AAPS attempts to deliver one at the same time. There are checks to try and prevent issues in such cases but this should still be avoided where possible.

### Logging

In the event you need to troubleshoot your Medtronic pump function select the menu icon in the upper left corner of the screen, select Maintenance and Log Settings. For troubleshooting any Medtronic issues Pump, PumpComm, PumpBTComm should be checked.

### Medtronic CGM

Medtronic CGM is currently NOT supported.

### Manual use of pump

You should avoid manually bolusing or setting TBRs on your pump. All such commands should be sent via AAPS. In the event manual commands are used there must be a delay of at least 3 minutes between them in order to reduce the risk of any issues.

### Timezone changes and DST (Daylight Saving Time) or Traveling with Medtronic Pump and AAPS

AAPS will automatically detect Timezone changes and will update the Pump's time when your phone switches to the new time.

Travelling east means you are going to be adding hours to the current time (ex. from GMT+0 to GMT+2) will not result in any issues as there will be no overlap (e.g. it won't be possible to have the same hour twice). Travelling west however can result in issues as you are effectively going back in time which can result in incorrect IOB data.

The issues seen when travelling west are known to the developers and work on a possible solution is ongoing. See https://github.com/andyrozman/RileyLinkAAPS/issues/145 for more detail. For now, please be aware that this issue may occur and carefully monitor when changing time zones.

### Is a GNARL a fully compatible Rileylink compatible device?

The GNARL code fully supports all of the functions used by the Medtronic driver in AAPS which means it is fully compatible. It is important to note that this will require additional work as you will have to source compatible hardware and then load the GNARL code on to the device.

**Note from author:** Please note that the GNARL software is still experimental and lightly tested, and should not be considered as safe to use as a RileyLink.

(MedtronicPump-faq)=

## SSS

(MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump)=

### What to do if I loose connection to RileyLink and/or pump?

There are a number of options to try and resolve connectivity issues.

- Yukarıda ayrıntılı olarak açıklandığı gibi EYLEM sekmesindeki "Uyan ve Ayarla" butonunu kullanın.
- Telefonunuzda Bluetooth'u devre dışı bırakın, 10 saniye bekleyin ve ardından tekrar etkinleştirin. Bu işlem Rileylink cihazını telefona yeniden bağlanmaya zorlayacaktır.
- Rileylink cihazını sıfırlayın. Ardından EYLEM sekmesindeki "Rileylink Yapılandırmasını Sıfırla" butonunu kullanmanız gerekir.
- Kullanıcılar, diğer yöntemlerin olmadığı durumlarda tekrar bağlantı için aşağıdaki adımların etkili olduğunu bulmuşlardır: 
    1. Telefonunuzu yeniden başlatın
    2. *Telefon yeniden başlatılırken* Rileylink cihazınızı yeniden başlatın
    3. Open AAPS and allow the connection to restore

### How to determine what Frequency my pump uses

![Pump Model](../images/Medtronic06.png)

On the back of the pump you will find a line detailing your model number along with a special 3 letter code. The first two letters determine the frequency type and the last one determines color. Here are possible values for Frequency:

- NA - Kuzey Amerika (frekans seçiminde "ABD ve Kanada (916 MHz)" seçeneğini seçmeniz gerekir)
- CA - Kanada (frekans seçiminde "ABD ve Kanada (916 MHz)" seçeneğini seçmeniz gerekir)
- WW - Dünya Çapında (frekans seçiminde "Dünya Çapında (868 Mhz)" seçmeniz gerekir)