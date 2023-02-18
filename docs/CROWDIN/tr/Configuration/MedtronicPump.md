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

- **Telefon:** Medtronic sürücüsü, Bluetooth bağlantılarını destekleyen herhangi bir android telefonla çalışmalıdır. **ÖNEMLİ: Telefon üreticilerinin Bluetooth uygulamaları değişebileceği için her bir telefon modelinin davranış biçimi farklı olabilir. Örneğin, bazı telefonlar Bluetooth'u etkinleştirmeyi/devre dışı bırakmayı farklı şekilde ele alacaktır. Bu, AndroidAPS'in Rileylink cihazına yeniden bağlanması gerektiğinde kullanıcı deneyimini etkileyebilir.**
- **RileyLink Uyumlu Cihaz:** Android telefonlar, iletişimi yönetmek için ayrı bir cihaz olmadan Medtronic pompalarıyla iletişim kuramaz. Bu cihaz, Bluetooth aracılığıyla telefonunuzla ve uyumlu bir radyo bağlantısı aracılığıyla pompanızla bağlantı kuracaktır. Bu tür ilk cihaza Rileylink adı verildi, ancak artık ek işlevsellik sunabilen başka seçenekler de mevcuttur.
    
    - Rileylink'i [getrileylink.org](https://getrileylink.org/product/rileylink916) adresinde bulabilirsiniz.
    - Orangelink, [getrileylink.org](https://getrileylink.org/product/orangelink) adresinde
    - Emalink (birkaç model opsiyonuyla) [github.com](https://github.com/sks01/EmaLink) adresinde
    - Gnarl (Kendin yap araçlarına ihtiyacınız olacak) detaylar için [github.com](https://github.com/ecc1/gnarl) adresine başvurabilirsiniz.

Çeşitli Rileylink uyumlu cihazlar için karşılaştırma tablosunu [getrileylink.org](https://getrileylink.org/rileylink- Compatible-hardware-comparison-chart) adresinde bulabilirsiniz.

(MedtronicPump-configuration-of-the-pump)=

## Pompa Konfigürasyonu

The following settings should be configured on the pump in order for AndroidAPS to remotely send commands. The steps necessary to make each change on a Medtronic 715 are shown in brackets for each setting. The exact steps may vary based on pump type and/or firmware version.

- **Pompada uzak modu etkinleştir** Pompada Act'ye basın ve Yardımcı Programlar (Utilities) -> Uzak Seçenekler'e (Remote Options) gidin, Açık'ı (ON) seçin ve sonraki ekranda Kimlik Ekle'yi (Add ID) yapın ve 1111111 gibi herhangi bir rastgele kimlik ekleyin. Pompanın uzaktan iletişim beklemesi için Remote ID listesinde en az bir ID olmalıdır.
- **Maks Bazal Ayarla** (Pompada Act'e basın ve Bazal'a gidin ve ardından Maks Bazal Oranı seçin) Örnek olarak, bu değeri maksimum standart bazal oranınızın dört katına ayarlamak %400 Geçici Bazal Oranına izin verir. Pompa tarafından izin verilen maksimum değer saatte 34,9 ünitedir.
- **Maks Bolus Ayarla** (Pompada sırasıyla Act ve Bolus'a basın ve ardından Maks Bolus'u seçin) Buradaki değer pompanın kabul edeceği en büyük bolustur. Pompa tarafından izin verilen maksimum değer 25'tir.
- **Profili Standart olarak ayarlayın**. (Pompada Act'ye basın ve Bazal'a gidin ve ardından bazal modelinizi seçin) AndroidAPS telefonunuzdaki farklı profilleri yöneteceğinden pompanın yalnızca bir profile ihtiyacı olacaktır. Başka bazal modeli gerekli değildir.
- **Geçici Bazal Oranı türünü ayarlayın** (Pompada ACT'ye basın ve Bazal'a ve ardından Geçici Bazal Türü'ne gidin). Mutlak'ı (Absolute) seçin (Yüzdeyi değil).

## Telefonun/AndroidAPS'in Medtronic Yapılandırması

- **RileyLink uyumlu cihazı telefonunuzdaki Bluetooth menüsüyle eşleştirmeyin.** Telefonunuzdaki Bluetooth menüsü aracılığıyla eşleştirme, aşağıdaki talimatları uygularken AndroidAPS'in Rileylink Uyumlu cihazınızı görmesini engeller. 
- Telefonunuzda otomatik ekran döndürmeyi devre dışı bırakın. Belirli cihazlarda otomatik ekran döndürme, Bluetooth oturumlarının yeniden başlamasına neden olur ve bu da Medtronic pompanız için sorunlara neden olabilir. 
- AndroidAPS'de Medtronic pompanızı yapılandırmanın iki yolu vardır: 

1. Yeni bir kurulumun parçası olarak kurulum sihirbazını kullanma
2. Konfigürasyon Ayarları'nda pompa seçimi sekmesinde Medtronic seçeneğinin yanındaki dişli simgesini tıklayarak

When configuring your Medtronic pump with the setup wizard it is possible that you will be prevented from completing setup because of Bluetooth issues (e.g. you cannot succesfully connect to the pump). Should this happen you should select the virtual pump option in order to complete the configuration and allow for further troubleshooting by using option 2.

![Medtronic Settings](../images/Medtronic01a.png)

While setting up AndroidAPS to work with your medtronic pump you need to set following items: (see picture above)

- **Pompa Seri Numarası**: Pompanızın arkasında yer alır ve SN ile başlar. Alfabetik karakterler olmadan yalnızca görünen 6 rakamı girmelisiniz (ör. 123456).
- **Pompa Tipi**: Kullandığınız pompa modeli (ör. 522). 
- **Pompa Frekansı**: Pompanızın ilk dağıtıldığı yere bağlı olarak iki seçenek vardır. Please check the [FAQ](MedtronicPump-faq) if you are unsure which option to select): 
    - ABD & Kanada için (NA-CA) kullanılan frekans 916 Mhz
    - Dünya çapında (WW) kullanılan frekans 868 Mhz'dir.
- **Pompadaki Maks Bazal (Ü/s)**: Bunun, pompanızda ayarlanan değerle eşleşmesi gerekir (yukarıdaki pompa konfigürasyonuna bakın). Bu ayar AndroidAPS'in bazal oranınız aracılığıyla ne kadar insülin iletebileceğini belirleyeceğinden dikkatli bir şekilde seçilmelidir. Bu değer maksimum geçici bazal oranını etkin bir şekilde ayarlayacaktır. Örnek olarak, bu değeri maksimum standart bazal oranınızın dört katına ayarlamak %400 Geçici Bazal Oranına izin verir. Pompa tarafından izin verilen maksimum değer saatte 34,9 ünitedir.
- **Pompadaki Maks Bolus (Ü)** (bir saat içinde): Bunun, pompanızda ayarlanan değerle eşleşmesi gerekir (yukarıdaki pompa konfigürasyonuna bakın). Bu ayar AndroidAPS'in bir seferde ne kadar bolus insülin iletebileceğini belirlediğinden dikkatlice düşünülmelidir.
- **Bolus göndermeden önceki bekleme süresi (sn)**: Bolus verildikten sonra, komut gerçekten pompaya gönderilmeden önce geçen saniye sayısı. Bu süre, bir bolus komutunun yanlışlıkla gönderilmesi durumunda kullanıcının bolusu iptal etmesine olanak tanır. AndroidAPS üzerinden başlatılan bir bolusu iptal etmek mümkün değildir. Halihazırda başlamış bir bolusu iptal etmenin tek yolu, pompayı manuel olarak askıya almak ve ardından devam ettirmektir.
- **Medtronic Kodlama**: Medtronic kodlamasının gerçekleştirilip gerçekleştirilmediğini belirler. Donanım kodlamasının seçilmesi (Rileylink uyumlu cihaz tarafından gerçekleştirilir) tercih edilir çünkü bu daha az veri gönderilmesine neden olur. Yazılım kodlamasının seçilmesi (AndroidAPS tarafından gerçekleştirilir), sık bağlantı kesilmesi durumunda yardımcı olabilir. Rileylink cihazlarında yazılım sürümü 0.x ise bu ayar yok sayılır.
- **Pil Türü (Güç Görünümü)**: Kalan pil gücü seviyesini doğru bir şekilde belirlemek için kullanımda olan AAA pil tipini seçmelisiniz. Basit görünüm dışında bir değer seçildiğinde, AndroidAPS hesaplanan pil yüzdesi seviyesini ve voltajı görüntüler. Aşağıdaki seçenekler mevcuttur:
    
    - Seçilmedi (Basit görünüm)
    - Alkali (Genişletilmiş görünüm)
    - Lityum (Genişletilmiş görünüm)
    - NiZn (Genişletilmiş görünüm)
    - NiMH (Genişletilmiş görünüm)
- **Bolus/Tedavilerde Hata Ayıklama**: Gereksinimlere göre Açın veya Kapatın.

- **RileyLink Yapılandırması**: Bu seçenek, Rileylink uyumlu cihazınızı bulmanızı ve eşleştirmenizi sağlar. Bu yapılandırma yardımıyla, yakındaki Rileylink uyumlu cihazları ve sinyal gücünü görüp seçebilirsiniz.
- **Taramayı Kullan** Rileylink Uyumlu cihazlarınızla bağlantı kurmadan önce Bluetooth taramasını etkinleştirir. Bu seçenek cihazla bağlantınızın güvenilirliğini artırabilir.
- **OrangeLink/EmaLink/DiaLink tarafından bildirilen pil düzeyini göster** Bu özellik yalnızca EmaLink veya OrangeLink gibi daha yeni cihazlarda desteklenir. Değerler, AnroidAPS'deki Medtronic sekmesinde gösterilecektir. 
- **Sık kullanılan Geçici Bazalları ayarla** Varsayılan olarak Medtronic pompaları, geçici bir bazal oranın etkin olduğu saatte bip sesi çıkarır. Bu seçeneğin etkinleştirilmesi, bip sesini bastırmak için saat değişiminde geçici bir bazal kesintiye uğratılarak duyulan bip sayısının azaltılmasına yardımcı olabilir.

## MEDTRONIC (MDT) Sekmesi

![MDT Tab](../images/Medtronic02.png) When AndroidAPS is configured to use a Medtronic pump a MDT tab will be shown in the list of tabs at the top of the screen. This tab displays the current pump status information along with some Medtronic specific actions.

- **RileyLink Durumu**: Telefonunuz ve Rileylink uyumlu cihaz arasındaki bağlantının mevcut durumu. Bu satır her zaman "Bağlı" olarak görünmelidir. Diğer herhangi bir durum, kullanıcı müdahalesini gerektirebilir. 
- **RileyLink Pili**: EmaLink veya OrangeLink cihazınızın mevcut pil seviyesi. Medtronic Pompa Yapılandırma menüsünde "OrangeLink/EmaLink/DiaLink cihazı tarafından bildirilen pil seviyesini göster" seçimine bağlıdır.
- **Pompa Durumu**: Pompa bağlantısının mevcut durumu. Pompa sürekli bağlı olmayacağından, burada genellikle uyku simgesi görünecektir. "Uyanıyor" da dahil olmak üzere AndroidAPS bir komut iletmeye çalışırken "Saat Alınıyor", "GBO Ayarla" gibi diğer olası pompa komutlarını da burada bulabilirsiniz. 
- **Pil**: Medtronic Pompa Yapılandırma menüsünde Pil Tipi (Güç Görünümü) için seçilen değere göre pil durumunu gösterir. 
- **Son bağlantı**: Son başarılı pompa bağlantısının ne kadar önce gerçekleştiği.
- **Son Bolus**: Son başarılı bolusun ne kadar süre önce verildiği.
- **Temel Bazal Oranı**: Aktif Profilinizde şu anda pompada çalışan temel bazal orandır.
- **Geçici Bazal**: Şu anda saatte 0 ünite de olabilen teslim edilen geçici bazal.
- **Rezervuar**: Rezervuarda ne kadar insülin olduğu gösterir.(saatte bir güncellenir).
- **Hatalar**: Sorun varsa hata dizesi (çoğunlukla yapılandırmada hata olup olmadığını gösterir).

At the bottom of the screen there are three buttons:

- **Yenile**: Pompanın mevcut durumunu yenilemek içindir. Bu buton komple veri yenilediğinden (geçmişi al, zamanı al/ayarla, profil al, pil durumunu al, vb.) yalnızca bağlantı uzun bir süre boyunca kopmuşsa kullanılmalıdır.
- **Pump History**: Shows pump history (see [below](MedtronicPump-pump-history))
- **RL Stats**: Show RL Stats (see [below](MedtronicPump-rl-status-rileylink-status))

(MedtronicPump-pump-history)=

## Pompa geçmişi

![Pump History Dialog](../images/Medtronic03.png)

Pump history is retrieved every 5 minutes and stored locally. Only the previous 24 hours worth of history is stored. The allows for a convinient way to see pump behaviour should that be required. The only items stored are those relevenant to AndroidAPS and will not inlcude a configuration function that has no relevance.

(MedtronicPump-rl-status-rileylink-status)=

## RL Durumu (RileyLink Durumu)

![RileyLink Status - Settings](../images/Medtronic04.png) ![RileyLink Status - History](../images/Medtronic05.png)

The RL Status dialog has two tabs:

- **Ayarlar**: RileyLink ile ilgili ayarları gösterir: Yapılandırılmış Adres, Bağlı Cihaz, Bağlantı Durumu, Bağlantı Hatası ve RileyLink yazılımı sürümleri. Cihaz Tipi her zaman Medtronic Pompa, Model kullandığınız model, Seri numarası konfigüre edilmiş seri numarası, Pompa Frekansı hangi frekansı kullandığınızı gösterir. Son Frekans en son kullanılan frekanstır.
- **Geçmiş**: İletişim geçmişini gösterir. RileyLink satırları, RileyLink için durum değişikliklerini, Medtronic satırları ise pompaya hangi komutların gönderildiğini gösterir.

## Eylemler

When the Medtronic driver is used, two additional actions are added to Actions Tab:

- **Uyan ve Ayarla** - AndroidAPS'in pompanıza uzun bir süre boyunca bağlanmaması durumunda (5 dakikada bir bağlanmalıdır) bu buton ile zorlayabilirsiniz. Bu buton pompanız tarafından kullanılan tüm olası radyo frekanslarını arayarak pompanızla iletişim kurmaya çalışacaktır. Başarılı bir bağlantı yapılması durumunda, başarılı frekans varsayılan olarak ayarlanacaktır. 
- **RileyLink Yapılandırmasını Sıfırla** - RileyLink uyumlu cihazınızı sıfırlarsanız, cihazın yeniden yapılandırılabilmesi için bu eylemi kullanmanız gerekebilir (frekans ayarı, frekans tipi ayarı, yapılandırılmış kodlama).

## Önemli notlar

### OpenAPS kullanıcıları

OpenAPS users should note that AndroidAPS with Medtronic uses a completely different approach than OpenAPS. Using AndroidAPS the primary method of interacting with th pump is via your phone. In normal use cases it is likely that the only time it is required to use the pump menu is when changing resevoirs. This is very different when using OpenAPS where at least some of a bolus is usually delivered via the quick bolus buttons. In the event the pump is used to manually deliver a bolus there can be issues if AndroidAPS attempts to deliver one at the same time. There are checks to try and prevent issues in such cases but this should still be avoided where possible.

### Log kayıtları

In the event you need to troubleshoot your Medtronic pump function select the menu icon in the upper left corner of the screen, select Maintainance and Log Settings. For troubleshooting any Medtronic issues Pump, PumpComm, PumpBTComm should be checked.

### Medtronic CGM

Medtronic CGM is currently NOT supported.

### Pompanın manuel kullanımı

You should avoid manually bolusing or setting TBRs on your pump. All such commands should be sent via AndroidAPS. In the event manual commands are used there must be a delay of at least 3 minutes between them in order to reduce the risk of any issues.

### Saat dilimi değişiklikleri ve DST (Yaz Saati Uygulaması) veya Medtronic Pompa ve AndroidAPS ile Seyahat

AndroidAPS will automatically detect Timezone changes and will update the Pump's time when your phone switches to the new time.

Travelling east means you are going to be adding hours to the current time (ex. from GMT+0 to GMT+2) will not result in any issues as there will be no overlap (e.g. it won't be possible to have the same hour twice). Travelling west however can result in issues as you are effectively going back in time which can result in incorrect IOB data.

The issues seen when travelling west are known to the developers and work on a possible solution is ongoing. See https://github.com/andyrozman/RileyLinkAAPS/issues/145 for more detail. For now, please be aware that this issue may occur and carefully monitor when changing time zones.

### Bir GNARL, tam uyumlu Rileylink ile karşılaştırılabilir bir cihaz mıdır?

The GNARL code fully supports all of the functions used by the Medtronic driver in AndroidAPS which means it is fully compatible. It is important to note that this will require addtional work as you will have to source compatible hardware and then load the GNARL code on to the device.

**Note from author:** Please note that the GNARL software is still experimental and lightly tested, and should not be considered as safe to use as a RileyLink.

(MedtronicPump-faq)=

## SSS

(MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump)=

### RileyLink ve/veya pompa ile bağlantımı kaybedersem ne yapmalıyım?

There are a number of options to try and resolve connectivity issues.

- Yukarıda ayrıntılı olarak açıklandığı gibi EYLEM sekmesindeki "Uyan ve Ayarla" butonunu kullanın.
- Telefonunuzda Bluetooth'u devre dışı bırakın, 10 saniye bekleyin ve ardından tekrar etkinleştirin. Bu işlem Rileylink cihazını telefona yeniden bağlanmaya zorlayacaktır.
- Rileylink cihazını sıfırlayın. Ardından EYLEM sekmesindeki "Rileylink Yapılandırmasını Sıfırla" butonunu kullanmanız gerekir.
- Kullanıcılar, diğer yöntemlerin olmadığı durumlarda tekrar bağlantı için aşağıdaki adımların etkili olduğunu bulmuşlardır: 
    1. Telefonunuzu yeniden başlatın
    2. *Telefon yeniden başlatılırken* Rileylink cihazınızı yeniden başlatın
    3. AndroidAPS'i açın ve bağlantının geri yüklenmesine izin verin

### Pompamın hangi Frekansı kullandığını nasıl belirleyebilirim?

![Pump Model](../images/Medtronic06.png)

On the back of the pump you will find a line detailing your model number along with a special 3 letter code. The first two letters determine the frequency type and the last one determines color. Here are possible values for Frequency:

- NA - Kuzey Amerika (frekans seçiminde "ABD ve Kanada (916 MHz)" seçeneğini seçmeniz gerekir)
- CA - Kanada (frekans seçiminde "ABD ve Kanada (916 MHz)" seçeneğini seçmeniz gerekir)
- WW - Dünya Çapında (frekans seçiminde "Dünya Çapında (868 Mhz)" seçmeniz gerekir)