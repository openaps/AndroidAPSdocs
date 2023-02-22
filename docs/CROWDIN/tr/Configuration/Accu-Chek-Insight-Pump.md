# Accu-Chek Insight Pompa

**Bu yazılım bir DIY (Kendin Yap) çözümünün parçasıdır ve bir ürün değildir, ancak nasıl kullanılacağı da dahil olmak üzere sistemi okumanızı, öğrenmenizi ve anlamanızı gerektirir. Tüm diyabet yönetimini sizin için yapan bir şey değildir, ancak gerekli zamanı ayırmaya istekliyseniz diyabetinizi ve yaşam kalitenizi iyileştirmenize izin verir. Acele etmeyin, ancak öğrenmek için kendinize zaman tanıyın. Yazılımla yaptıklarınızdan yalnızca siz sorumlusunuz.**

* * *

## ***UYARI:** Geçmişte **SightRemote** ile Insight kullanıyorsanız, lütfen **en yeni AAPS sürümüne güncelleyin** ve **SightRemote'u kaldırın**.*

## Donanım ve yazılım gereksinimleri

* Roche Accu-Chek Insight pompası (herhangi bir donanım yazılımı olabilir, hepsi çalışır)

Not: AAPS, verileri her zaman **pompadaki ilk bazal oran profiline** yazar.

* An Android phone (Basically every Android version would work with Insight, but check on the [Module](../Module/module.md#phone) page which Android version is required to run AndroidAPS.)
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

(settings-in-aaps)=

## AAPS ayarları

**Note : It is now possible (only with AAPS v2.7.0 and above) to use ‘Always use basal absolute values’ if you want to use Autotune with Insight pump, even if 'sync is enabled' with Nightscout.** (In AAPS go to [Preferences > NSClient > Advanced Settings](../Configuration/Preferences.md#advanced-settings-nsclient)).

![Screenshot of Insight Settings](../images/Insight_settings.png)

In the Insight settings in AndroidAPS you can enable the following options:

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

For periods when pump was stopped AAPS will log a temp. basal rate with 0%.

In AndroidAPS, the Accu-Chek Insight tab shows the current status of the pump and has two buttons:

* "Yenile": Pompa durumunu yeniler
* "Bildirim üzerinden GBO'yu Etkinleştir/Devre Dışı Bırak": Standart bir Insight pompası, bir GBO bittiğinde bir alarm verir. Bu düğme, yapılandırma yazılımına ihtiyaç duymadan bu alarmı etkinleştirmenizi veya devre dışı bırakmanızı sağlar.
    
    ![Screenshot of Insight Status](../images/Insight_Status2.png)

## Pompadaki ayarlar

Configure alarms in the pump as follows:

* Menü > Ayarlar > Cihaz ayarları > Mod ayarları > Sessiz > Sinyal > Ses
* Menü > Ayarlar > Cihaz ayarları > Mod ayarları > Sessiz > Ses > 0 (tüm çubukları kaldırın)
* Menü > Modlar > Sinyal modu > Sessiz

This will silence all alarms from the pump, allowing AndroidAPS to decide if an alarm is relevant to you. If AndroidAPS does not acknowledge an alarm, its volume will increase (first beep, then vibration).

(vibration)=

### Titreşim

Depending on the firmware version of your pump, the Insight will vibrate briefly every time a bolus is delivered (for example, when AndroidAPS issues an SMB or TBR emulation delivers an extended bolus).

* Firmware 1.x: Tasarımda titreşim yok.
* Firmware 2.x: Titreşim devre dışı bırakılamaz.
* Firmware 3.x: AndroidAPS, bolus'u sessizce gönderir. (minimum [version 2.6.1.4](../Installing-AndroidAPS/Releasenotes.md#version-2-6-1-4))

Firmware version can be found in the menu.

## Pil değiştirme

Battery life for Insight when looping range from 10 to 14 days, max. 20 days. The user reporting this is using Energizer lithium batteries.

The Insight pump has a small internal battery to keep essential functions like the clock running while you are changing the removable battery. If changing the battery takes too long, this internal battery may run out of power, the clock will reset, and you will be asked to enter a new time and date after inserting a new battery. If this happens, all entries in AndroidAPS prior to the battery change will no longer be included in calculations as the correct time cannot be identified properly.

(insight-specific-errors)=

## Spesifik Insight hataları

### Yayma Bolus

Just use one extended bolus at a time as multiple extended boluses at the same time might cause errors.

### Zaman aşımı (Time out)

Sometimes it might happen that the Insight pump does not answer during connection setup. In this case AAPS will display the following message: "Timeout during handshake - reset bluetooth".

![Insight Reset Bluetooth](../images/Insight_ResetBT.png)

In this case turn off bluetooth on pump AND smartphone for about 10 seconds and then turn it back on.

## Insight pompasıyla zaman dilimlerini geçme

For information on traveling across time zones see section [Timezone traveling with pumps](../Usage/Timezone-traveling.md#insight).