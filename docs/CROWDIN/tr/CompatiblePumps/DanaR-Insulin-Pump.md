# DanaR

*Bu talimatlar, bir DanaR'ınız varsa uygulamayı ve pompanızı yapılandırmak içindir. Bunun yerine 2017'de çıkan DanaRS pompanız varsa [DanaRS İnsülin Pompası](./DanaRS-Insulin-Pump.md) sayfasına bakın.*

## AAPS ile pompa özellikleri

* Ek bir iletişim cihazı olmadan, telefonunuzun yerleşik Bluetooth'u üzerinden **AAPS** ile iletişim kurar.
* Pompa kendi geçmişini kullanmadığı için saat dilimi ve yaz saati (DST) değişiklikleri özel bir işlem gerektirmez.

## Kurulum

* Pompada Ana Menü > Ayarlar > Kullanıcı Seçeneği'ne gidin
* "8. Extended Bolus" seçeneğini açın

![DanaR pompa](../images/danar1.png)

* Ana Menü > Ayarlar > Keşif'e gidin
* Telefon ayarlarında Bluetooth'a gidin, yakındaki cihazları tarayın, DanaR seri numaranızı seçin ve şifrenizi girin (Eşleştirme şifresi 0000'dır). Taramada DanaR görünmüyorsa telefonu yeniden başlatın ve DanaR pilini çıkarın, değiştirin ve bu iki adımı yeniden deneyin.

* **AAPS**'te sol üst köşedeki **menüyü** (☰) açın, **Konfigürasyon** > **Pompa** bölümüne gidin ve sahip olduğunuz DanaR türünü seçin (**DanaR**, **DanaR Kore** veya **DanaRv2**).
  
  ![DanaR eklentileriyle Konfigürasyon > Pompa](../images/v4/Configuration/configuration_pump_list_1.png)

* Pompa ekranını açın: DanaR kartında **Eklentiyi aç** düğmesine dokunun (veya **Yönet** > **Pompa** bölümüne gidin).

* **Eşleştirme** düğmesine dokunun. Eşleştirme ekranında: 
  * Pompa parolanızı **Pompa Şifresi** alanına girin (varsayılan parola 1234'tür).
  * **Eşleştirilmiş cihazı seçin** altında DanaR seri numaranıza dokunun. Liste boşsa **Bluetooth ayarlarını aç** düğmesine dokunun ve önce pompayı telefonunuzla eşleştirin (yukarıdaki adıma bakın). **AAPS**'e geri döndüğünüzde pompa listede görünür. Görünmezse yenile simgesine dokunun.
  * **Eşleştirme** düğmesine dokunun. **AAPS** pompaya bağlanır ve parolayı kontrol eder.
* Sürücü ayarlarını değiştirmek için **Konfigürasyon** > **Pompa** içindeki DanaR kartında **Ayarlar** düğmesine dokunun: 
  * **Bolus hızı** (DanaR ve DanaRv2): Varsayılan bolus hızını değiştirin (12 sn/Ü, 30 sn/Ü veya 60 sn/Ü).
  * **>%200 için yayma bolus kullanın** (DanaR ve DanaR Kore): **AAPS**'in %200'ün üzerinde bir bazal orana izin vermesini istiyorsanız bunu etkinleştirin. Bunun, yemek için yayma bolus kullanırken yüksek GBO'larla döngü yapamayacağınız anlamına geldiğini unutmayın.
* Pompadaki bazal adımını 0,01 Ü/sa olarak ayarlayın
* Pompadaki bolus adımını 0,1 Ü olarak ayarlayın. **AAPS** bolus adımını pompadan okur ve her bolus için kullanır.
* Pompada yayma bolusları etkinleştir

## Dana R pompasıyla farklı zaman diliminde seyahat

Saat dilimleri arasında seyahat hakkında bilgi için [Pompalarla saat dilimi değiştirerek seyahat](#timezone-traveling-danarv2-danars) bölümüne bakın.

## Nereden yardım alabilirsiniz?

DanaR sürücüsünün geliştirilmesi topluluk tarafından **gönüllü** olarak yapılır. Yardım istemeden önce lütfen:

1. Özelliğin nasıl çalışması gerektiğini doğrulamak için bu dokümantasyonun ilgili bölümünü **okuyun**.
2. [Discord](https://discord.gg/4fQUWHZ4Mw)'daki *#AAPS* kanalında veya diğer [topluluk kanallarından](../GettingHelp/WhereCanIGetHelp.md) birinde **sorun**.
3. [Mevcut sorunlar](https://github.com/nightscout/AndroidAPS/issues) arasında arama yaparak **bir hata bildirin**; sizinki listede yoksa [yeni bir sorun (issue)](https://github.com/nightscout/AndroidAPS/issues) açın ve [günlük dosyalarınızı](../GettingHelp/AccessingLogFiles.md) ekleyin.

Yardım isterken telefonunuzun markasını ve modelini, Android sürümünü, **AAPS** sürümünü ve sorunun sade bir açıklamasını (ne değişti, en son ne zaman çalıştı) ekleyin.