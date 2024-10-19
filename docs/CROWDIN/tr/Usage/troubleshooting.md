# Sorun giderme

Sorun giderme bilgilerini viki'deki birçok sayfada bulabilirsiniz. Bu sayfa, sorununuzu çözecek bilgileri bulmanıza yardımcı olacak bir bağlantılar topluluğudur.

Additional useful information might also be available in the [FAQ](../Getting-Started/FAQ.md).

## AAPS app

### Yapım & güncelleme

* [Kayıp keystore](../Installing-AndroidAPS/troubleshooting_androidstudio.md#lost-keystore)
* [Android Studio'da Sorun Giderme](../Installing-AndroidAPS/troubleshooting_androidstudio.md)

### Ayarlar
* [Profil](Profiles-troubleshooting-profile-errors)

  ![Hata: Bazal saatlere göre ayarlanamadı](../images/Screen_DifferentPump.png)

* [Pompa - farklı pompadan alınan veriler](../Installing-AndroidAPS/update3_0.md#failure-message-data-from-different-pump)

  ![Hata mesajı: Farklı pompadan gelen veriler](../images/BasalNotAlignedToHours2.png)

* [Nightscout Client](../Usage/Troubleshooting-NSClient.md)

### Kullanım
* [Yanlış karbonhidrat değerleri](../Usage/COB-calculation.md#detection-of-wrong-cob-values)

   ![Hata: Yavaş karbonhidrat emilimi](../images/Calculator_SlowCarbAbsorption.png)

* [SMS Komutları](../Children/SMS-Commands.md#troubleshooting)

### Sık bluetooth bağlantı sorunları

Bu, çeşitli pompalarda olabilir. AAPS'i pil optimizasyonunun dışında tutmanın yanı sıra, sistem bluetooth uygulamasını da pil optimizasyonunun dışında tutabilirsiniz. Bu, bazı durumlarda yardımcı olabilir. Kullandığınız telefona bağlı olarak, bluetooth ayarları farklı olacaktır.

Bunları belirli android telefonlarda nasıl bulacağınıza dair örnekler aşağıda verilmiştir.


#### Pixel telefonlar (stok android)

* Android ayarlarına gidin, "Uygulamalar" ı seçin.

  ![Android Ayarları¦Uygulamalar](../images/troubleshooting/pixel/01_androidsettings.png)

* "Tüm uygulamaları gör" seçeneğini seçin

  ![Tüm uygulamaları göster](../images/troubleshooting/pixel/02_apps.png)

* Sağdaki menüden "Sistemi göster" uygulamalarını seçin.

  ![Sistem uygulamalarını göster](../images/troubleshooting/pixel/03_allapps.png)

* Şimdi "Bluetooth" uygulamasını arayın ve seçin.

  ![Bluetooth uyg.](../images/troubleshooting/pixel/03_bluetooth.png)

* "Uygulama pil kullanımı"na tıklayın ve "Optimize edilmedi"yi seçin.

  ![BT Pil optimizasyonu](../images/troubleshooting/pixel/04_btunrestricted.png)


#### Samsung telefonlar

* Android ayarlarına gidin, "Uygulamalar" ı seçin

* Sıralama algoritmasını değiştiren simgede (1), "Sistem uygulamalarını göster"i (2) seçin.

  ![Uyg. Filtresi](../images/troubleshooting/samsung/Samsung01_Apps.png)

  ![Sistem uygulamalarını göster](../images/troubleshooting/samsung/Samsung02_ShowSystemApps.png)

* Şimdi bluetooth uygulamasını arayın ve ayarları görmek için seçin.

  ![Bluetooth Uyg.](../images/troubleshooting/samsung/Samsung03_BtApp.png)

* "Pil"i seçin

  ![Pil](../images/troubleshooting/samsung/Samsung04_Battery.png)

* "Optimize edilmedi" olarak ayarlayın

  ![Optimize edilmedi](../images/troubleshooting/samsung/Samsung05_NotOptimized.png)


## CGM

* [Genel](../CompatibleCgms/GeneralCGMRecommendation.md#troubleshooting)
* [Dexcom G6](../CompatibleCgms/DexcomG6.md#troubleshooting-g6-and-one)
* [Libre 3](../CompatibleCgms/Libre3.md#experiences-and-troubleshooting)
* [Libre 2](../CompatibleCgms/Libre2.md#experiences-and-troubleshooting)
* [xDrip - CGM verisi yok](../CompatibleCgms/xDrip.md#identify-receiver)
* [xDrip - Dexcom sorun giderme](../CompatibleCgms/xDrip.md#troubleshooting-dexcom-g5g6-and-xdrip)

## Pompalar

* [DanaRS](../CompatiblePumps/DanaRS-Insulin-Pump.md#dana-rs-specific-errors)
* [Accu-Chek Combo genel](../Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md)
* [Accu-Chek Combo + Ruffy](../CompatiblePumps/Accu-Chek-Combo-Pump.md#why-pairing-with-the-pump-does-not-work-with-the-app-ruffy)
* [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md#insight-specific-errors)
* [Medtronic + RileyLink](../CompatiblePumps/MedtronicPump.md#what-to-do-if-i-loose-connection-to-rileylink-andor-pump)

## Telefonlar

* [Jelly](../CompatiblePhones/Jelly.md)
* [Huawei bluetooth & pil optimizasyonu](../CompatiblePhones/Huawei.md)

## Akıllı saatler

* [Wear uygulamasında sorun giderme](../Configuration/Watchfaces.md#troubleshooting-the-wear-app)
* [Sony Smartwatch 3](../Usage/SonySW3.md)
