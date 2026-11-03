# Accu-Chek Insight

**Bu yazılım bir DIY (Kendin Yap) yapay pankreas çözümünün parçasıdır ve bir ürün değildir, ancak nasıl kullanılacağı da dahil olmak üzere sistemi SİZİN okumanızı, öğrenmenizi ve anlamanızı gerektirir. Tüm diyabet yönetiminizi sizin yerinize yapan bir şey değildir, ancak diyabetinizi ve yaşam kalitenizi iyileştirmenize yardımcı olur, yeter ki gereken zamanı ayırmaya istekli olun. Acele etmeyin, öğrenmek için kendinize zaman tanıyın. Bununla yaptıklarınızdan yalnızca siz sorumlusunuz.**

```{admonition} Accu-Chek Insight kullanımdan kalkıyor :class: note

Roche, diyabet ürünlerini Accu-Chek SmartGuide CGM üzerinde yoğunlaştırmak için insülin pompası pazarından çekiliyor. Roche, hem Accu-Chek Combo hem de Accu-Chek Insight pompalarının satışının sona erdiğini duyurdu; kalan Accu-Chek Solo mikro pompası da aşamalı olarak kaldırılıyor (Almanya'da son teslimatlar 2025 sonunda). Bu değişiklik bölge bölge uygulanıyor; Almanya'da başladı, diğer Avrupa pazarlarının da izlemesi bekleniyor. Insight desteği zaten sona ermiş olarak listeleniyor (bkz. [Artık satılmayan pompalar](./Future-possible-Pump-Drivers.md)). Bu pompaya güveniyorsanız, desteklenen bir pompaya geçişi önceden planlayın.

    <br />```{note}
    **AAPS**'in yerleşik bir Insight sürücüsü olmadan önce Insight, ayrı bir uygulama olan [SightRemote](https://github.com/TebbeUbben/SightRemote) ile kontrol ediliyordu. SightRemote artık gerekli değildir ve bakımı yapılmamaktadır: O günlerden kalma bir kurulumunuz varsa onu kaldırın ve bunun yerine **AAPS**'in güncel bir sürümünü kullanın.
    

```{contents} İçindekiler :depth: 1 :local: true

    <br />## AAPS ile pompanın özellikleri
    
    * Ek bir iletişim cihazı olmadan, telefonunuzun yerleşik Bluetooth'u üzerinden **AAPS** ile iletişim kurar.
    * Yaz saati (DST) ve saat dilimi değişikliklerini otomatik olarak yönetir.
    
    ## Donanım ve yazılım gereksinimleri
    
    * Bir Roche Accu-Chek Insight pompası (tüm üretici yazılımı sürümleri çalışır)
    
    Not: AAPS verileri her zaman **pompadaki ilk bazal oranı profiline** yazar.
    
    * Android 12 veya daha yeni bir sürümü çalıştıran bir Android telefon (bkz. [Telefonlar](../Getting-Started/Phones.md))
    * Telefonunuzda yüklü AAPS uygulaması
    
    ## Kurulum
    
    * Insight pompası aynı anda yalnızca bir cihaza bağlı olmalıdır. Daha önce Insight uzaktan kumandasını (ölçüm cihazı) kullandıysanız, ölçüm cihazını pompanızın eşleştirilmiş cihazlar listesinden kaldırmanız gerekir: **Menu** > **Settings** > **Communication** > **Remove device** (pompa menüsü).
    
       ![Screenshot of Remove Meter Insight](../images/Insight_RemoveMeter.png)
    
    * [Konfigürasyon > Pompa](#Config-Builder-pump) bölümünde **Accu-Chek Insight** kartını seçin. Aynı anda yalnızca bir pompa etkin olabilir.
    
       ![Configuration > Pump with the Accu-Chek Insight plugin](../images/v4/Configuration/configuration_pump_list_1.png)
    
       Seçildikten sonra **Accu-Chek Insight** kartında iki düğme görünür: **Ayarlar** ve **Eklentiyi aç**:
    
       ![The Accu-Chek Insight plugin selected in Configuration > Pump](../images/v4/Pumps/accu_chek_insight_enabled.png)
    
       **Ayarlar**, Accu-Chek Insight sürücüsünün ayarlarını açar (bkz. [AAPS'teki ayarlar](#Accu-Chek-Insight-Pump-settings-in-aaps)).
    
       **Eklentiyi aç** (veya **Yönet → Pompa**), Accu-Chek Insight pompa ekranını açar. Pompa eşleştirilmeden önce ekran şöyle görünür:
    
       ![Accu-Chek Insight pump screen before pairing](../images/v4/Pumps/accu_chek_insight_pump_screen.png)
    
    (accu-chek-insight-pairing)=
    ### Eşleştirme
    
    * Pompa ekranında **Insight eşleştirme** düğmesine dokunun. Eşleştirme sihirbazı açılır ve yakındaki Bluetooth cihazlarını arar (aşağıdaki resmin üst kısmı).
    * Insight pompasında **Menu** > **Settings** > **Communication** > **Add Device** yolunu izleyin. Pompa, pompanın seri numarasıyla birlikte aşağıdaki ekranı gösterir (aşağıdaki resmin alt kısmı).
    
       ![Screenshot of Insight Pairing 1](../images/Insight_Pairing1.png)
    
    * Telefonunuza dönün ve Bluetooth cihazları listesinde pompanın seri numarasına dokunun. Android eşleştirmeyi onaylamanızı isterse **Eşle** düğmesine dokunun.
    
       ![Screenshot of Insight Pairing 2](../images/Insight_Pairing2.png)
    
    * Pompa ve telefon bir kod gösterir. Kodların iki cihazda da aynı olduğunu kontrol edin. Pompada onaylayın ve telefonda **Evet** düğmesine dokunun. (Kodlar uyuşmuyorsa **Hayır** düğmesine dokunun.)
    
       ![Screenshot of Insight Pairing 3](../images/Insight_Pairing3.png)
    
    * Telefonda **Eşleştirme tamamlandı** yazısı görünür. Pompa ekranına dönmek için **Çıkış** düğmesine dokunun.
    
       ![Screenshot of Insight Pairing 4](../images/Insight_Pairing4.png)
    
    * Her şeyin yolunda olduğunu kontrol etmek için pompa ekranına bakın (**Yönet → Pompa**). Pompa eşleştirildikten sonra ekranda pompa ile ilgili bilgiler görünür, örneğin **Seri numarası**, **Üretim tarihi**, **Yayın yazılım sürümü** ve **Bluetooth adresi**.
    
       ![Screenshot of Insight Pairing Information](../images/Insight_PairingInformation.png)
    
       ```{admonition} Eski ekran görüntüsü
       :class: note
       İlk resmin üst kısmı dışında, yukarıdaki eşleştirme ekran görüntüleri daha eski bir **AAPS** sürümünden alınmıştır ve **AAPS** 4'te farklı görünebilir.
       ```
    
    * Eşleştirmeyi kaldırmak için pompa ekranında **Eşleşmeyi Kaldır** düğmesine dokunun ve **Eşleştirme bilgileri sıfırlansın mı?** sorusunu onaylayın. Ardından **Insight eşleştirme** düğmesi yeniden görünür.
    
    Not: Pompa ile telefon arasında sürekli bir bağlantı yoktur. **AAPS** yalnızca gerektiğinde bağlanır (örneğin geçici bazal oranı ayarlamak, bolus vermek veya pompa geçmişini okumak için). Aksi halde telefonun ve pompanın pilleri çok hızlı biterdi.
    
    (Accu-Chek-Insight-Pump-settings-in-aaps)=
    ## AAPS'teki ayarlar
    
    Ayarları **Konfigürasyon** > **Pompa** içindeki **Accu-Chek Insight** kartında bulunan **Ayarlar** ile veya pompa ekranının sağ üst köşesindeki dişli simgesiyle açın.
    
    ![Accu-Chek Insight driver settings](../images/v4/Pumps/accu_chek_insight_settings.png)
    
    **AAPS**'teki Insight ayarlarında aşağıdaki seçenekleri etkinleştirebilirsiniz:
    
    * **Rezervuar değişimini kayıt altına al**: Pompada kartuşu değiştirdiğinizde insülin kartuşu değişimini otomatik olarak kaydeder.
    
    * **Hortum değişimlerini kaydet**: Pompada "tube filling" (hortumu doldurma) programını çalıştırdığınızda **AAPS** veritabanına bir not ekler.
    
    * **İnfüzyon değişimini kayıt altına al**: Pompada "cannula filling" (kanülü doldurma) programını çalıştırdığınızda **AAPS** veritabanına bir not ekler. **Not: Kanül değişimi Otoduyarlılık'ı da sıfırlar.**
    
    * **Pil değişimlerini kaydet**: Pompaya yeni bir pil taktığınızda pil değişimini kaydeder.
    
    * **Çalışma modu değişikliklerini günlüğe kaydet**: Pompayı başlattığınızda, durdurduğunuzda veya duraklattığınızda **AAPS** veritabanına bir not ekler.
    
    * **Uyarıları kaydet**: Pompa bir uyarı verdiğinde **AAPS** veritabanına bir not ekler (hatırlatmalar, bolus iptali ve GBO iptali kaydedilmez).
    
    * **GBO emülasyonunu etkinleştir**: Insight pompası geçici bazal oranlarını (GBO) yalnızca %250'ye kadar ayarlayabilir. Bu sınırı aşmak için, %250'den yüksek bir GBO istendiğinde GBO emülasyonu pompaya ek insülini yayma bolus olarak vermesini söyler.
    
      **Not: Aynı anda yalnızca bir yayma bolus kullanın. Aynı anda birden fazla yayma bolus hatalara neden olabilir.**
    
    * **Manuel bolus iletiminde titreşimleri devre dışı bırakın**: Insight pompası manuel bir bolus (veya yayma bolus) verirken titreşmez. Yalnızca Insight üretici yazılımı 3.x ile kullanılabilir.
    
    * **Otomatik bolus iletiminde titreşimleri devre dışı bırakın**: Insight pompası otomatik bir bolus (SMB veya GBO emülasyonlu geçici bazal) verirken titreşmez. Yalnızca Insight üretici yazılımı 3.x ile kullanılabilir.
    
    * **Min. kurtarma süresi [sn]** ve **Maks. kurtarma süresi [sn]**: Başarısız bir bağlantı denemesinden sonra **AAPS**'in yeniden denemeden önce ne kadar beklediği. 0 ila 20 saniye arasında seçim yapabilirsiniz. Bağlantı sorunlarınız varsa daha uzun bir bekleme süresi seçin.
        <br><br>Örnek: min. kurtarma süresi = 5 ve maks. kurtarma süresi = 20
        <br><br>bağlantı yok -> <b>5</b> sn bekle.
          <br>  yeniden dene -> bağlantı yok -> <b>6</b> sn bekle.
          <br>  yeniden dene -> bağlantı yok -> <b>7</b> sn bekle.
          <br>  yeniden dene -> bağlantı yok -> <b>8</b> sn bekle.
          <br>...
          <br>yeniden dene -> bağlantı yok -> <b>20</b> sn bekle.
          <br>yeniden dene -> bağlantı yok -> <b>20</b> sn bekle.
          <br>...
    
    * **Bağlantı kesme gecikmesi [sn]**: Bir işlem bittikten sonra **AAPS**'in pompayla bağlantıyı kesmeden önce ne kadar (saniye olarak) beklediği. 0 ila 15 saniye arasında seçim yapabilirsiniz. Varsayılan değer 5 saniyedir.
    
    Pompanın durdurulduğu süreler için **AAPS** %0'lık bir geçici bazal oranı kaydeder.
    
    ### Pompa ekranı
    
    Accu-Chek Insight pompa ekranı (**Yönet → Pompa**) pompanın güncel durumunu gösterir, örneğin **Durum**, **Son bağlantı**, **Çalışma Modu**, **Pil**, **Rezervuar seviyesi**, bugünün günlük toplam dozları (**GTD Bolus**, **GTD Bazal**), bazal oranları ve son bolus. Pompa eşleştirildikten sonra şu düğmeler bulunur:
    
    * **Yenile**: Pompa durumunu yeniler.
    * **GBO bitti bildirimini etkinleştir (pompa ayarlarında)** / **GBO bitti bildirimini devre dışı bırak (pompa ayarlarında)**: Standart bir Insight pompası bir GBO bittiğinde alarm verir. Bu düğme, yapılandırma yazılımına gerek kalmadan bu alarmı açar veya kapatır.
    * **Eşleşmeyi Kaldır**: Pompayla eşleştirmeyi kaldırır (bkz. [Eşleştirme](#accu-chek-insight-pairing)).
    
    ![Screenshot of Insight Status](../images/Insight_Status2.png)
    
    ```{admonition} Eski ekran görüntüsü
    :class: note
    Yukarıdaki ekran görüntüsü daha eski bir **AAPS** sürümünden alınmıştır. **AAPS** 4'te pompa ekranı farklı görünür ve ayrıca bir **Eşleşmeyi Kaldır** düğmesi vardır.
    

## Pompadaki ayarlar

Pompadaki alarmları aşağıdaki gibi yapılandırın:

* Menü > Ayarlar > Cihaz ayarları > Mod ayarları > Sessiz > Sinyal > Ses
* Menü > Ayarlar > Cihaz ayarları > Mod ayarları > Sessiz > Ses > 0 (tüm çubukları kaldırın)
* Menü > Modlar > Sinyal modu > Sessiz

Bu, pompadaki tüm alarmları susturur ve bir alarmın sizin için önemli olup olmadığına AAPS karar verir. AAPS bir alarmı onaylamazsa alarmın sesi artar (önce bip sesi, sonra titreşim).

(Accu-Chek-Insight-Pump-vibration)=

### Titreşim

Pompanızın üretici yazılımı sürümüne bağlı olarak Insight, her bolus verildiğinde kısa bir süre titrer (örneğin AAPS bir SMB verdiğinde veya GBO emülasyonu bir yayma bolus verdiğinde).

* Firmware 1.x: Tasarımda titreşim yok.
* Firmware 2.x: Titreşim devre dışı bırakılamaz.
* Üretici yazılımı 3.x: AAPS bolusu sessiz verir.

Donanım yazılımı sürümünü menüde bulabilirsiniz.

## Pil değiştirme

Döngü kullanırken Insight'ın pil ömrü 10 ile 14 gün arasındadır, en fazla 20 gündür. Bunu bildiren kullanıcı Energizer lityum pil kullanıyor.

Insight pompası, çıkarılabilir pili değiştirirken saat gibi temel işlevleri çalışır durumda tutmak için küçük bir dahili pile sahiptir. Pilin değiştirilmesi çok uzun sürerse, bu dahili pilin gücü tükenebilir. Saat sıfırlanırsa yeni bir pil taktıktan sonra yeni bir saat ve tarih girmeniz istenecektir. Bu olursa, doğru zaman belirlenemediği için AAPS'teki pil değişiminden önceki tüm kayıtlar artık hesaplamalara dahil edilmez.

(Accu-Chek-Insight-Pump-insight-specific-errors)=

## Spesifik Insight hataları

### Yayma Bolus

Aynı anda birden fazla yayma bolus hatalara neden olabileceğinden, bir seferde yalnızca bir yayma bolus kullanın.

### Zaman aşımı (Time out)

Bazen Insight pompası, **AAPS** bağlantıyı kurarken yanıt vermez. **AAPS** bu durumda "El sıkışma sırasında zaman aşımı - Bluetooth'u sıfırla" bildirimini gösterir.

![Insight Reset Bluetooth](../images/Insight_ResetBT.png)

Bu olursa, Bluetooth'u pompada VE telefonda yaklaşık 10 saniyeliğine kapatın, sonra yeniden açın.

## Insight pompasıyla zaman dilimlerini geçme

Saat dilimleri arasında seyahat hakkında bilgi için [Pompalarla saat dilimi değiştirerek seyahat](#timezone-traveling-insight) bölümüne bakın.

## Nereden yardım alabilirsiniz?

Insight sürücüsünün geliştirilmesi topluluk tarafından **gönüllü** olarak yapılır. Yardım istemeden önce lütfen:

1. Özelliğin nasıl çalışması gerektiğini doğrulamak için bu dokümantasyonun ilgili bölümünü **okuyun**.
2. [Discord](https://discord.gg/4fQUWHZ4Mw)'daki *#AAPS* kanalında veya diğer [topluluk kanallarından](../GettingHelp/WhereCanIGetHelp.md) birinde **sorun**.
3. [Mevcut sorunlar](https://github.com/nightscout/AndroidAPS/issues) arasında arama yaparak **bir hata bildirin**; sizinki listede yoksa [yeni bir sorun (issue)](https://github.com/nightscout/AndroidAPS/issues) açın ve [günlük dosyalarınızı](../GettingHelp/AccessingLogFiles.md) ekleyin.

Yardım isterken telefonunuzun markasını ve modelini, Android sürümünü, **AAPS** sürümünü ve sorunun sade bir açıklamasını (ne değişti, en son ne zaman çalıştı) ekleyin.