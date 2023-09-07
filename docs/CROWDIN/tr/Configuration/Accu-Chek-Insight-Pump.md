# Accu-Chek Insight Pompa

**Bu yazılım bir DIY (Kendin Yap) çözümünün parçasıdır ve bir ürün değildir, ancak nasıl kullanılacağı da dahil olmak üzere sistemi okumanızı, öğrenmenizi ve anlamanızı gerektirir. Tüm diyabet yönetimini sizin için yapan bir şey değildir, ancak gerekli zamanı ayırmaya istekliyseniz diyabetinizi ve yaşam kalitenizi iyileştirmenize izin verir. Acele etmeyin, ancak öğrenmek için kendinize zaman tanıyın. Yazılımla yaptıklarınızdan yalnızca siz sorumlusunuz.**

* * *

## ***UYARI:** Geçmişte **SightRemote** ile Insight kullanıyorsanız, lütfen **en yeni AAPS sürümüne güncelleyin** ve **SightRemote'u kaldırın**.*

## Donanım ve yazılım gereksinimleri

* Roche Accu-Chek Insight pompası (herhangi bir donanım yazılımı olabilir, hepsi çalışır)

Not: AAPS, verileri her zaman **pompadaki ilk bazal oran profiline** yazar.

* Bir Android telefon (Temelde her Android sürümü Insight ile çalışır, ancak AndroidAPS'yi çalıştırmak için hangi Android sürümünün gerekli olduğunu [Modül](module-phone) sayfasında kontrol edin.)
* Telefonunuzda yüklü olan AndroidAPS uygulaması

## Kurulum

* Insight pompası aynı anda yalnızca bir cihaza bağlanmalıdır. Insight uzaktan kumandasını (ölçüm cihazı) daha önce kullandıysanız, cihazı pompanızın eşleştirilmiş cihazlar listesinden çıkarmalısınız: Menü > Ayarlar > İletişim > Cihazı kaldır
    
    ![Screenshot of Remove Meter Insight](../images/Insight_RemoveMeter.png)

* AndroidAPS uygulamasının [Konfigürasyon ayarları](../Configuration/Config-Builder) bölümünün, pompa kısmında Accu-Chek Insight'ı seçin
    
    ![Screenshot of Config Builder Insight](../images/Insight_ConfigBuilder_AAPS3_0.jpg)

* Insight ayarlarını açmak için dişli çarka dokunun.

* Ayarlarda, ekranın üst kısmındaki 'Insight eşleştirme' ye dokunun. Yakındaki tüm bluetooth cihazlarının bir listesini görmelisiniz (sol altta).
* Insight pompasında Menü > Ayarlar > İletişim > Cihaz Ekle'ye gidin. Pompa, takip eden ekranda (sağ altta) pompanın seri numarasını gösterecektir.
    
    ![Screenshot of Insight Pairing 1](../images/Insight_Pairing1.png)

* Telefonunuza geri dönerek, bluetooth cihazları listesindeki pompa seri numarasına dokunun. Ardından onaylamak için Eşleştir'e dokunun.
    
    ![Screenshot of Insight Pairing 2](../images/Insight_Pairing2.png)

* Hem pompada hem de telefonda bir kod görüntülenir. Kodların her iki cihazda da aynı olduğunu kontrol edin ve hem pompada hem de telefonda onaylayın.
    
    ![Screenshot of Insight Pairing 3](../images/Insight_Pairing3.png)

* Başardınız! Pompanızı AndroidAPS ile başarılı bir şekilde eşleştirdiğiniz için arkanıza yaslanın.
    
    ![Screenshot of Insight Pairing 4](../images/Insight_Pairing4.png)

* Her şeyin yolunda olduğunu kontrol etmek için, AndroidAPS'de Konfigürasyon ayarlarına geri dönün ve Insight Pump'ın yanındaki dişli çarka dokunarak Insight ayarlarına girin, ardından Insight Pairing'e dokunun, pompa hakkında bazı bilgiler göreceksiniz.
    
    ![Screenshot of Insight Pairing Information](../images/Insight_PairingInformation.png)

Not: Pompa ile telefon arasında kalıcı bir bağlantı olmayacaktır. Yalnızca gerektiği zaman bir bağlantı kurulacaktır (yani geçici bazal hızın ayarlanması, bolus verilmesi, pompa geçmişinin okunması...). Aksi takdirde telefonun ve pompanın pili çok hızlı bitecektir.

(Accu-Chek-Insight-Pump-settings-in-aaps)=

## AAPS ayarları

**Not : Nightscout ile 'senkronizasyon etkinleştirilmiş' olsa bile, Insight pompasıyla Otomatik Ayar kullanmak istiyorsanız 'Her zaman bazal mutlak değerleri kullan' seçeneğini kullanmak artık (yalnızca AAPS v2.7.0 ve üzeri sürümlerde) mümkündür.** (AAPS'de [Tercihler > NSClient > Gelişmiş Ayarlar](Preferences-advanced-settings-nsclient)'a gidin).

![Screenshot of Insight Settings](../images/Insight_settings.png)

AndroidAPS'deki Insight ayarlarında aşağıdaki seçenekleri etkinleştirebilirsiniz:

* "Rezervuar değişikliklerini günlüğe kaydet": Bu, pompada "kanül dolumu" programını çalıştırdığınızda bir insülin kartuşu değişikliğini otomatik olarak kaydeder.

* "Tüp değişikliklerini günlüğe kaydet": Bu, pompada "tüp doldurma" programını çalıştırdığınızda AndroidAPS veritabanına bir not ekler.

* "Set değişikliğini günlüğe kaydet": Bu, pompada "kanül doldurma" programını çalıştırdığınızda AndroidAPS veritabanına bir not ekler. **Not: Bir set değişikliği, Autosens'i de sıfırlar.**

* "Pil değişikliklerini günlüğe kaydet": Bu, pompaya yeni bir pil taktığınızda pil değişikliğini kaydeder.

* "Çalışma modu değişikliklerini günlüğe kaydet": Bu, pompayı her başlattığınızda, durdurduğunuzda veya duraklattığınızda AndroidAPS veritabanına bir not ekler.

* "Günlük uyarıları": Bu, pompa bir uyarı verdiğinde AndroidAPS veritabanına bir not kaydeder (hatırlatıcılar, bolus ve GBO iptali hariç - bunlar kaydedilmez).

* "GBO öykünmesini etkinleştir": Insight pompası yalnızca %250'ye kadar geçici bazal oranları (GBO'lar) verebilir. Bu kısıtlamayı aşmak için, %250'den fazla bir GBO talep ederseniz, GBO emülasyonu pompaya ekstra insülin için bir yayma bolus verme talimatı verecektir.
    
    **Not: Aynı anda birden fazla yayma bolus hatalara neden olabileceğinden, bir seferde yalnızca bir yayma bolus kullanın.**

* "Manuel bolus iletiminde titreşimleri devre dışı bırak": Bu, bir manuel bolus (veya yayma bolus) iletirken Insight pompasının titreşimlerini devre dışı bırakır. Bu ayar yalnızca Insight üretici yazılımının (3.x) en son sürümüyle kullanılabilir.

* "Otomatik bolus iletiminde titreşimleri devre dışı bırak": Bu, otomatik bolus (SMB veya GBO emülasyonlu geçici bazal) iletirken Insight pompasının titreşimlerini devre dışı bırakır. Bu ayar yalnızca Insight üretici yazılımının (3.x) en son sürümüyle kullanılabilir.

* "Kurtarma süresi": Bu, AndroidAPS'nin başarısız bir bağlantı girişiminden sonra tekrar denemeden önce ne kadar bekleyeceğini tanımlar. 0 ila 20 saniye arasında seçim yapabilirsiniz. Bağlantı sorunları yaşıyorsanız, daha uzun bir bekleme süresi seçin.   
      
    Örnek min. kurtarma süresi = 5 ve maks. kurtarma süresi = 20   
      
    bağlantı yok -> **5** saniye bekleyin.   
    yeniden dene -> bağlantı yok -> **6** saniye bekleyin.   
    yeniden dene -> bağlantı yok -> **7** saniye bekleyin.   
    yeniden dene -> bağlantı yok -> **8** saniye bekleyin.   
    ...   
    yeniden dene -> bağlantı yok -> **20** saniye bekleyin.   
    yeniden dene -> bağlantı yok -> **20** saniye bekleyin.   
    ...

* "Bağlantıyı kesme gecikmesi": Bu, bir işlem tamamlandıktan sonra AndroidAPS'nin pompa bağlantısını kesmek için ne kadar (saniye olarak) bekleyeceğini tanımlar. Varsayılan değer 5 saniyedir.

Pompanın durdurulduğu süreler için AAPS %0 geçici bazal oranı kaydeder.

AndroidAPS'de Accu-Chek Insight sekmesi, pompanın mevcut durumunu gösterir ve iki düğmesi vardır:

* "Yenile": Pompa durumunu yeniler
* "Bildirim üzerinden GBO'yu Etkinleştir/Devre Dışı Bırak": Standart bir Insight pompası, bir GBO bittiğinde bir alarm verir. Bu düğme, yapılandırma yazılımına ihtiyaç duymadan bu alarmı etkinleştirmenizi veya devre dışı bırakmanızı sağlar.
    
    ![Screenshot of Insight Status](../images/Insight_Status2.png)

## Pompadaki ayarlar

Pompadaki alarmları aşağıdaki gibi yapılandırın:

* Menü > Ayarlar > Cihaz ayarları > Mod ayarları > Sessiz > Sinyal > Ses
* Menü > Ayarlar > Cihaz ayarları > Mod ayarları > Sessiz > Ses > 0 (tüm çubukları kaldırın)
* Menü > Modlar > Sinyal modu > Sessiz

Bu, pompadan gelen tüm alarmları susturarak AndroidAPS'in bir alarmın sizinle ilgili olup olmadığına karar vermesine olanak tanır. AndroidAPS bir alarmı kabul etmezse, ses seviyesi artacaktır (önce bip, sonra titreşim).

(Accu-Chek-Insight-Pump-vibration)=

### Titreşim

Pompanızın donanım yazılımı sürümüne bağlı olarak, Insight her bolus verildiğinde kısa bir süre titrer (örneğin, AndroidAPS bir SMB yayınladığında veya GBO emülasyonu yayma bir bolus gönderdiğinde).

* Firmware 1.x: Tasarımda titreşim yok.
* Firmware 2.x: Titreşim devre dışı bırakılamaz.
* Firmware 3.x: AndroidAPS, bolus'u sessizce gönderir. (minimum [versiyon 2.6.1.4](Releasenotes-version-2-6-1-4))

Donanım yazılımı sürümünü menüde bulabilirsiniz.

## Pil değiştirme

Döngü sırasında Insight için pil ömrü 10 ila 14 gün maks. 20 gündür. Energizer lityum pil kullanan kullanıcılar bunu bildirmişlerdir.

Insight pompası, çıkarılabilir pili değiştirirken saat gibi temel işlevleri çalışır durumda tutmak için küçük bir dahili pile sahiptir. Pilin değiştirilmesi çok uzun sürerse, bu dahili pilin gücü tükenebilir. Saat sıfırlanırsa yeni bir pil taktıktan sonra yeni bir saat ve tarih girmeniz istenecektir. Böyle bir durumda, pil değişimi öncesindeki AndroidAPS'deki tüm girişler, doğru zaman doğru bir şekilde tanımlanamayacağından artık hesaplamalara dahil edilmeyecektir.

(Accu-Chek-Insight-Pump-insight-specific-errors)=

## Spesifik Insight hataları

### Yayma Bolus

Aynı anda birden fazla yayma bolus hatalara neden olabileceğinden, bir seferde yalnızca bir yayma bolus kullanın.

### Zaman aşımı (Time out)

Bazen Insight pompası bağlantı kurulumu sırasında yanıt vermeyebilir. Bu durumda AAPS şu mesajı görüntüler: "El sıkışma sırasında zaman aşımı - bluetooth'u sıfırla".

![Insight Reset Bluetooth](../images/Insight_ResetBT.png)

Bu durumda, pomp ve akıllı telefondaki bluetooth'u yaklaşık 10 saniye kapatın ve ardından tekrar açın.

## Insight pompasıyla zaman dilimlerini geçme

Saat dilimleri arasında seyahat hakkında bilgi için [Pompayla seyahat ederken saat dilimleri](Timezone-traveling-insight) bölümüne bakın.