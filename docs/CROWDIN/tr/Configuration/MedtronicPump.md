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

## Pompa Konfigürasyonu

AndroidAPS'in uzaktan komut gönderebilmesi için pompada aşağıdaki ayarların yapılandırılması gerekir. Medtronic 715'te değişikliği yapmak için gerekli adımlar, her ayar için parantez içinde gösterilmiştir. Adımlar, pompa tipine ve/veya pompa yazılım sürümüne göre değişebilir.

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

Medtronic pompanızı kurulum sihirbazıyla yapılandırırken, Bluetooth sorunları nedeniyle kurulumu tamamlamanız engellenebilir (örn. pompaya başarılı bir şekilde bağlanamayabilirsiniz.) Böyle bir durumda, yapılandırmayı tamamlamak ve 2. seçeneği kullanarak daha fazla sorun giderebilmek için ilk önce sanal pompa seçeneğini seçmelisiniz.

![Medtronic Ayarları](../images/Medtronic01a.png)

AndroidAPS'i medtronic pompanızla çalışacak şekilde ayarlarken aşağıdaki öğeleri ayarlamanız gerekir: (yukarıdaki resme bakın)

- **Pompa Seri Numarası**: Pompanızın arkasında yer alır ve SN ile başlar. Alfabetik karakterler olmadan yalnızca görünen 6 rakamı girmelisiniz (ör. 123456).
- **Pompa Tipi**: Kullandığınız pompa modeli (ör. 522). 
- **Pompa Frekansı**: Pompanızın ilk dağıtıldığı yere bağlı olarak iki seçenek vardır. Hangi seçeneği seçeceğinizden emin değilseniz lütfen [SSS](../Configuration/MedtronicPump#faq)'i kontrol edin): 
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

![MDT Sekmesi](../images/Medtronic02.png) AndroidAPS, bir Medtronic pompası kullanacak şekilde yapılandırıldığında, ekranın üst kısmında bir MDT sekmesi gösterilecektir. Bu sekme, Medtronic'e özgü bazı eylemlerle birlikte mevcut pompa durumu bilgilerini görüntüler.

- **RileyLink Durumu**: Telefonunuz ve Rileylink uyumlu cihaz arasındaki bağlantının mevcut durumu. Bu satır her zaman "Bağlı" olarak görünmelidir. Diğer herhangi bir durum, kullanıcı müdahalesini gerektirebilir. 
- **RileyLink Battery**: The current battery level of your EmaLink or OrangeLink device. Dependent on selecting "Show battery level reported by OrangeLink/EmaLink/DiaLink device" in the Medtronic Pump Configuration menu.
- **Pump Status**: The current status of the pump connection. As the pump will not be constantly connected this will primarily show the sleep icon. There are a number of possible other status including "Waking Up" when AndroidAPS is trying to issue a command or other possible pump commands such as "Get Time", "Set TBR", etc. 
- **Battery**: Shows battery status based on the value chosen for Battery Type (Power View) in the Medtronic Pump Configuration menu. 
- **Last connection**: How long ago the last succesful pump connection happened.
- **Last Bolus**: How long ago the last succesful bolus was delivered.
- **Base Basal Rate**: This is the base basal rate that runs on pump at this hour in your active Profile.
- **Temp basal**: Temp basal currently being delivered which can be 0 units per hour.
- **Rezervuar**: Rezervuarda ne kadar insülin olduğu gösterir.(saatte bir güncellenir).
- **Hatalar**: Sorun varsa hata dizesi (çoğunlukla yapılandırmada hata olup olmadığını gösterir).

At the bottom of the screen there are three buttons:

- **Refresh** is for refreshing the current status of the pump. This should only be used if the connection was lost for a sustained period as this will require a full data refresh (retrieve history, get/set time, get profile, get battery status, etc).
- **Pump History**: Shows pump history (see [below](../Configuration/MedtronicPump#pump-history))
- **RL Stats**: Show RL Stats (see [below](../Configuration/MedtronicPump#rl-status-rileylink-status))

## Pompa geçmişi

![Pompa Geçmişi İletişim Kutusu](../images/Medtronic03.png)

Pompa geçmişi her 5 dakikada bir alınır ve yerel olarak saklanır. Only the previous 24 hours worth of history is stored. The allows for a convinient way to see pump behaviour should that be required. The only items stored are those relevenant to AndroidAPS and will not inlcude a configuration function that has no relevance.

## RL Durumu (RileyLink Durumu)

![RileyLink Durumu - Ayarları](../images/Medtronic04.png) ![RileyLink Durumu - Geçmişi](../images/Medtronic05.png)

The RL Status dialog has two tabs:

- **Settings**: Shows settings about the RileyLink compatible device: Configured Address, Connected Device, Connection Status, Connection Error and RileyLink Firmware versions. Cihaz Tipi her zaman Medtronic Pompa, Model kullandığınız model, Seri numarası konfigüre edilmiş seri numarası, Pompa Frekansı hangi frekansı kullandığınızı gösterir. Son Frekans en son kullanılan frekanstır.
- **Geçmiş**: İletişim geçmişini gösterir. RileyLink satırları, RileyLink için durum değişikliklerini, Medtronic satırları ise pompaya hangi komutların gönderildiğini gösterir.

## Eylemler

When the Medtronic driver is used, two additional actions are added to Actions Tab:

- **Wake and Tune Up** - In the event that AndroidAPS hasn't connected to your pump for a sustained period (it should connect every 5 minutes), you can force a Tune Up. This will try to contact your pump, by searching all of the possible radio frequencies used by your pump. In the event a succesful connection is made the succesful frequency will be set as the default. 
- **Reset RileyLink Config** - If you reset your RileyLink compatible device you may need to use this action so that device can be reconfigured (frequency set, frequency type set, encoding configured).

## Önemli notlar

### OpenAPS kullanıcıları

OpenAPS users should note that AndroidAPS with Medtronic uses a completely different approach than OpenAPS. Using AndroidAPS the primary method of interacting with th pump is via your phone. In normal use cases it is likely that the only time it is required to use the pump menu is when changing resevoirs. This is very different when using OpenAPS where at least some of a bolus is usually delivered via the quick bolus buttons. In the event the pump is used to manually deliver a bolus there can be issues if AndroidAPS attempts to deliver one at the same time. There are checks to try and prevent issues in such cases but this should still be avoided where possible.

### Log kayıtları

In the event you need to troubleshoot your Medtronic pump function select the menu icon in the upper left corner of the screen, select Maintainance and Log Settings. For troubleshooting any Medtronic issues Pump, PumpComm, PumpBTComm should be checked.

### Medtronic CGM

Medtronic CGM is currently NOT supported.

### Manual use of pump

You should avoid manually bolusing or setting TBRs on your pump. All such commands should be sent via AndroidAPS. In the event manual commands are used there must be a delay of at least 3 minutes between them in order to reduce the risk of any issues.

### Timezone changes and DST (Daylight Saving Time) or Traveling with Medtronic Pump and AndroidAPS

AndroidAPS will automatically detect Timezone changes and will update the Pump's time when your phone switches to the new time.

Travelling east means you are going to be adding hours to the current time (ex. from GMT+0 to GMT+2) will not result in any issues as there will be no overlap (e.g. it won't be possible to have the same hour twice). Travelling west however can result in issues as you are effectively going back in time which can result in incorrect IOB data.

The issues seen when travelling west are known to the developers and work on a possible solution is ongoing. See https://github.com/andyrozman/RileyLinkAAPS/issues/145 for more detail. For now, please be aware that this issue may occur and carefully monitor when changing time zones.

### Is a GNARL a fully compatible Rileylink combatible device?

The GNARL code fully supports all of the functions used by the Medtronic driver in AndroidAPS which means it is fully compatible. It is important to note that this will require addtional work as you will have to source compatible hardware and then load the GNARL code on to the device.

**Note from author:** Please note that the GNARL software is still experimental and lightly tested, and should not be considered as safe to use as a RileyLink.

## FAQ

### What to do if I loose connection to RileyLink and/or pump?

There are a number of options to try and resolve connectivity issues.

- Use the "Wake Up and Tune" button in the ACT tab as detailed above.
- Disable Bluetooth on your phone, wait 10 seconds and then enable it again. This will force the Rileylink device to reconnect to the phone.
- Reset the Rileylink device. You must then use the "Reset Rileylink Config" button in the ACT tab.
- Other users have found the following steps to be effective in restoring connectivity when other methods have not: 
    1. Restart the phone
    2. *While* the phone is restarting restart the Rileylink device
    3. Open AndroidAPS and allow the connection to restore

### Pompamın hangi Frekansı kullandığını nasıl belirleyebilirim?

![Pompa Modeli](../images/Medtronic06.png)

Pompanın arkasında, 3 harfli özel bir kodla birlikte model numaranızın ayrıntılarını veren bir satır bulacaksınız. İlk iki harf frekans tipini, son harf ise rengi belirler. Frekans için olası değerler şunlardır:

- NA - Kuzey Amerika (frekans seçiminde "ABD ve Kanada (916 MHz)" seçeneğini seçmeniz gerekir)
- CA - Kanada (frekans seçiminde "ABD ve Kanada (916 MHz)" seçeneğini seçmeniz gerekir)
- WW - Dünya Çapında (frekans seçiminde "Dünya Çapında (868 Mhz)" seçmeniz gerekir)