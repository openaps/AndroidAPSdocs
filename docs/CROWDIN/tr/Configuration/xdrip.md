# xDrip+ ayarları

Henüz kurulu değilse [xDrip+](https://jamorham.github.io/#xdrip-plus)'ı indirin.

**Bu dokümantasyon yalnızca Android telefonlara yüklü xDrip+ içindir.** Orjinal Android xDrip+ ile hiçbir ilgisi olmayan "iOS için xDrip" uygulaması da mevcuttur.

2018 sonbaharı/sonundan sonra üretilen G6 vericileri için (yani seri no. 80 veya 81 ile başlayanlar) [ana](https://jamorham.github.io/#xdrip-plus) sürümünü kullanabilirsiniz.

Dexcom G6 vericinizin seri numarası 8G...,8H veya 8J ile başlıyorsa [latest nightly build derlemelerinden](https://github.com/NightscoutFoundation/xDrip/releases) birini kullanabilirsiniz.

Telefonunuz Android 10 çalıştırıyorsa ve xDrip+ ana sürüm ile ilgili sorun yaşıyorsanız [nightly build 2019/12/31 veya sonrasını](https://github.com/NightscoutFoundation/xDrip/releases) deneyin.

## Tüm CGM & FGM sistemleri için temel ayarlar

* Temel URL'yi doğru ayarladığınızdan emin olun. ( http**s**:// sonunda **S** dahil olmak üzere "http:// şeklinde değil")
   
   örn. https://API_SECRET@your-app-name.herokuapp.com/api/v1/
   
   -> Hamburger Menüsü (ana ekranın sol üst kısmı) -> Ayarlar-> Buluta Yükleme-> Nightscout Senkronizasyonu (REST-API) -> Temel URL

* `Otomatik Kalibrasyon`'u devre dışı bırakın `Otomatik Kalibrasyon` onay kutusu işaretliyse, `Verileri indir` öğesini bir kez etkinleştirin, ardından `Otomatik Kalibrasyon` onay kutusunu kaldırın ve `Verileri indir` öğesini devre dışı bırakın, aksi takdirde tedaviler (insülin & karbonhidratlar) Nightscout'a iki kez eklenecektir.

* `Ek Seçenekler`'e dokunun

* `Tedavileri yükle` ve `Verileri geri doldur` seçeneğini devre dışı bırakın.
   
   **Güvenlik uyarısı : xDrip+'tan "Tedavileri yükle" seçeneğini devre dışı bırakmalısınız, aksi takdirde tedaviler AAPS'de iki katına çıkarak yanlış COB (aktif karbonhidrat) ve IOB (aktif insülin) hesaplanmasına neden olabilir.**

* `Hatalarda uyarı ver` seçeneği de devre dışı bırakılmalıdır. Aksi takdirde, wifi/mobil ağın çok kötü olması veya sunucunun müsait olmaması durumunda her 5 dakikada bir alarm alırsınız.
   
   ![xDrip+ Basic Settings 1](../images/xDrip_Basic1.png)
   
   ![xDrip+ Basic Settings 2](../images/xDrip_Basic2.png)

* **Ugy.lar-arası ayarlar** (Yayın) AndroidAPS kullanacaksanız ve veriler AndroidAPS'e iletilecekse, Uygulamalar Arası ayarlarda xDrip+'da yayını etkinleştirmeniz gerekir.

* Değerlerin eşit olması için `Ekranda Görünen Glikoz Değerini Gönder` seçeneğini etkinleştirmelisiniz.

* AndroidAPS'de `Tedavileri kabul et` ve "Yerel olarak yayınla"yı da etkinleştirdiyseniz, xDrip+ AndroidAPS'den insülin, karbonhidrat ve bazal oran bilgilerini alır ve hipo tahminini vb. tahmin edebilir. Bu daha doğrudur.
   
   ![xDrip+ Basic Settings 3](../images/xDrip_Basic3.png)

### Alıcı tanımlama

* Yerel yayınla ilgili sorunlar bulrsanız (AAPS, xDrip+'dan KŞ değerleri almıyor) Ayarlar > Uygulamalar arası ayarlar > Alıcıyı tanımlama'ya gidin ve `info.nightscout.androidaps` girin.
* Lütfen Dikkat: Otomatik düzeltme bazen i'yi büyük harfe çevirme eğilimindedir. `info.nightscout.androidaps` yazarken **yalnızca küçük harf kullanmalısınız**. I büyük harf olursa, APPS xDrip+'dan KŞ değerlerini alamaz.
   
   ![xDrip+ Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

## xDrip+ & Dexcom G6

* Dexcom G6 vericisi, Dexcom alıcısına (veya alternatif olarak t:slim pompasına) ve telefonunuzdaki bir uygulamaya aynı anda bağlanabilir.
* xDrip+'ı alıcı olarak kullanmadan önce Dexcom uygulamasını telefonunuzdan kaldırın. **xDrip+ ve Dexcom uygulamasını vericiye aynı anda bağlayamazsınız!**
* Dexcom clarity uygulamasını kullanıyorsanız ve xDrip+ alarmlarından yararlanmak istiyorsanız xDrip+'ta yerel yayın ile [Kendi Dexcom Uygulamanızı Oluşturun (BYODA)](../Hardware/DexcomG6#if-using-g6-with-build-your-own-dexcom-app) kullanın.

### G6 verici seri numarasına bağlı xDrip+ sürümü

* 2018 sonbaharı/sonundan sonra üretilen G6 vericileri için (yani seri no. 80 veya 81 ile başlayanlar) [master "ana sürüm"](https://jamorham.github.io/#xdrip-plus) kullanabilirsiniz. 
* Dexcom G6 vericinizin seri numarası 8G, 8H veya 8J ile başlıyorsa [2019/07/28 veya daha üst sürümü](https://github.com/NightscoutFoundation/xDrip/releases) deneyin.

### Dexcom'a özel ayarlar

* G5/G6 Hata Ayıklama Ayarlarını Açın -> Hamburger Menüsü (ana ekranın sol üst köşesinde) -> Ayarlar -> G5/G6 Hata Ayıklama Ayarları ![Open xDrip+ Settings](../images/xDrip_Dexcom_SettingsCall.png)

* Aşağıdaki ayarları etkinleştirin
   
   * `OB1 Toplayıcıyı kullanın`
   * `Yerel Algoritma` (SMB kullanmak istiyorsanız önemlidir)
   * `G6 Desteği`
   * `OB1 bağlantısını kes`
   * `OB1 bağlantısına izin ver`
* Diğer tüm seçenekler devre dışı bırakılmalıdır
* Pil uyarı seviyesini 280'e ayarlayın (G5/G6 Hata Ayıklama Ayarlarının alt kısmı)
   
   ![xDrip+ G5/G6 Debug Settings](../images/xDrip_Dexcom_DebugSettings.png)

### "Önleyici yeniden başlatma" önerilmez

**8G, 8H veya 8J ile başlıyan Dexcom verici numaralarında, önleyici yeniden başlatmalar çalışmıyor ve sensörü tamamen kullanılmaz hale getirebilir!**

Dexcom sensörlerinde otomatik olarak süre uzatma (`önleyici yeniden başlatma`), yeniden başlatmanın ardından 9. günde KŞ değerlerinde "atlamalara" yol açabileceğinden önerilmez.

![xDrip+ Jump after Preemptive Restart](../images/xDrip_Dexcom_PreemptiveJump.png)

Açık olan şu ki, G6'yı kullanmak, başlangıçta düşünülenden biraz daha karmaşık olabilir. Güvenli bir şekilde kullanmak için dikkat edilmesi gereken birkaç nokta vardır:

* xDrip+ veya Spike'ta yerel verileri kalibrasyon koduyla kullanıyorsanız, yapılacak en güvenli şey, sensörün "önleyici yeniden başlatılmasına" izin vermemektir.
* Önleyici yeniden başlatma kullanmanız gerekiyorsa, değişikliği gözlemleyebileceğiniz ve gerekirse kalibre edebileceğiniz günün bir saatinde yaptığınızdan emin olun. 
* Sensörleri yeniden başlatıyorsanız, en güvenli sonuçlar için 11. ve 12. günlerde fabrika kalibrasyonu olmadan yapın ya da kalibrasyona hazır olduğunuzdan ve sapmaları göz önünde bulundurduğunuzdan ve gerekirse kalibrasyon ile düzeltebildiğinizden emin olun.
* Fabrika kalibrasyonu ile "Pre-soaking" ön ısınma denilen sensörü daha önce verici olmadan doku sıvısına "alışacak" şekilde yerleştirmek, muhtemelen glikoz değerlerinde sapmalara yol açar. 'pre-soak' ön ısınma yapıyorsanız, en iyi sonuçları almak için muhtemelen sensörü kalibre etmeniz gerekecektir.
* Meydana gelebilecek değişiklikler konusunda dikkatli değilseniz, fabrikada kalibre edilmemiş moda dönmek ve sistemi bir G5 gibi kullanmak daha iyi olabilir.

Bu önerilerin ayrıntıları ve nedenleri hakkında daha fazla bilgi edinmek için Tim Street tarafından yayınlanan [www.diabettech.com](https://www.diabettech.com) adresindeki [makalenin tamamını](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) okuyun.

### G6 vericisine ilk kez bağlanma

**İkinci ve sonraki vericiler için aşağıdaki [Verici ömrünü uzatma](#extend-transmitter-life) konusuna bakın.**

2018 sonbaharı/sonundan sonra üretilen G6 vericileri için (yani seri no. 80 veya 81 ile başlayanlar) [master "ana sürüm"](https://jamorham.github.io/#xdrip-plus) kullanabilirsiniz.

Dexcom G6 vericinizin seri numarası 8G, 8H veya 8J ile başlıyorsa [2019/07/28 veya daha üst sürümü](https://github.com/NightscoutFoundation/xDrip/releases) deneyin.

* Orijinal Dexcom alıcısını kapatın (kullanılıyorsa).
* `Kaynak Sihirbazı Butonunu` etkinleştirmek için ana ekrandaki kırmızı xDrip kan damlası simgesine uzun basın.
* OB1& Yerel Mod dahil varsayılan ayarları otomatik kuran Kaynak Sihirbazı Düğmesini kullanın 
   * Bu sihirbaz ilk kurulumda size rehberlik eder.
   * İlk kez kullanıyorsanız, vericinizin seri numarasına ihtiyacınız olacaktır.

* Yeni vericinin seri numarasını girin (verici paketinin üzerinde veya vericinin arkasında). `0` (sıfır) ve `O` (büyük harf O)'yu karıştırmamaya dikkat edin.
   
   ![xDrip+ Dexcom Transmitter Serial No](../images/xDrip_Dexcom_TransmitterSN.png)

* Yeni sensör takın (değiştiriyorsanız)

* Vericiyi sensöre yerleştirin
* "DexcomXX" ile eşleştirmeyi isteyen "XX"in verici seri numarasının son iki karakteri olduğu bir mesaj gelirse, kabul edin ("eşleştir"e dokunun)
* Sistem Durumu -> Klasik Durum Sayfası -> G5/G6 durumu -> PhoneServiceState'de aşağıdaki bilgiler gösterilmeden yeni sensör başlatmayın:
   
   * 80 veya 81 ile başlayan vericilerde: "Veri var ss:dd" (ör "Veri var 19:04")
   * 8G, 8H veya 8J ile başlayan vericilerde: "Glikoz ss:dd" (örn. "Got glucose 19:04") veya "Got no raw ss:dd" (örn. "Got no raw 19:04")
   
   ![xDrip+ PhoneServiceState](../images/xDrip_Dexcom_PhoneServiceState.png)

* Sensörü başlat (değiştiriyorsanız)
   
   -> Ekranın alt kısmına yakın bir yerde, birkaç dakika sonra `Isınma x,x saat kaldı` görüntülenmelidir.

-> Vericinizin seri numarası 8G, 8H veya 8J ile başlamıyorsa ve herhangi bir zaman bildirimi yoksa, birkaç dakika sonra sensörü durdurup yeniden başlatın.

* Toplayıcıyı yeniden başlatın (sistem durumu - sensörü değiştirmediyseniz)
* xDrip+ ilk okumaları göstermeden önce orijinal Dexcom alıcısını (kullanılıyorsa) açmayın.
* `Kaynak Sihirbazı Butonunu` devre dışı bırakmak için ana ekrandaki kırmızı xDrip kan damlası simgesine uzun basın.
   
   ![xDrip+ Dexcom Transmitter 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ Dexcom Transmitter 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ Dexcom Transmitter 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ Dexcom Transmitter 4](../images/xDrip_Dexcom_Transmitter04.png)

### Verici pil durumu

* Verici pil durumu sistem durumunda kontrol edilebilir (Ana ekranda sol üstte Hamburger menüsü)
* İkinci ekranı görmek için bir kez sola kaydırın. ![xDrip+ First Transmitter 4](../images/xDrip_Dexcom_Battery.png)

* Vericinin pil bitmesi nedeniyle "kullanım dışı kaldığı" kesin değerler bilinmemektedir. Verici “kullanım dışı” kaldıktan sonra aşağıdaki bilgiler çevrimiçi olarak yayınlandı:
   
   * Gönderi 1: Verici günleri: 151 / Voltaj A: 297 / Voltaj B: 260 / Direnç: 2391
   * Gönderi 2: Verici günleri: 249 / Voltaj A: 275 (hata anında)

### Verici ömrünü uzatın

* Şimdiye kadar 8G, 8H veya 8J seri nosu ile başlayan vericilerin ömrü uzatılamamıştır. Aynı durum 81 seri nosu ile başlayıp yazılımı 1.6.5.27 olan vericiler için de geçerlidir. (bkz. xDrip+ Sistem Durumu - G5/G6 durumu [ekran görüntüsü](../Configuration/xdrip#transmitter-battery-status)nde gösterildiği gibi).
* Sensörlerin başlatılmasındaki zorlukları önlemek için verici ömrünün 100. gününden önce uzatılması şiddetle tavsiye edilir.
* 81 seri no ile başlayan ve yazılımı 1.6.5.**27**olan bir verici 100. günden sonra yalnızca [mühendislik modu](../Usage/Enabling-Engineering-Mode-in-xDrip) açılır ve 'yerel mod' devre dışı bırakılır ise süre uzatma mümkündür (hamburger menüsü -> ayarlar -> G5/G6 hata ayıklama ayarları -> yerel algoritma) çünkü verici hard reset mümkün DEĞİLDİR.
* Verici ömrü uzatılırken çalışan sensör oturumu durdurulacaktır. Bu nedenle vericiyi sensör değişiminden önce uzatın ve 2 saatlik yeni bir ısınma aşaması olacağını unutmayın.
* Sensörü hamburger menüsü aracılığıyla manuel olarak durdurun.
* `mühendislik moduna` geçin: 
   * şırıngayı temsil eden xDrip başlangıç ekranının sağ üstündeki karaktere dokunun
   * ardından sağ alt köşedeki mikrofon simgesine uzun dokunun
   * Açılan metin kutusuna "enable engineering mode" yazın 
   * "tamam" ı tıklayın
   * Google Konuşma motoru etkinse (ingilizce), sesli komutu da ingilizce olarak söyleyebilirsiniz: "enable engineering mode". 
* G5 hata ayıklama ayarlarına gidin ve `OB1 toplayıcısını kullan` öğesinin etkinleştirildiğinden emin olun.
* "hard reset transmitter" sesli komutunu kullanın.
* Vericinin bir sonraki veri alımıyla birlikte sesli komut yürütülecektir.
* Sistem durumuna bakarak (Hamburger menüsü -> sistem durumu) verici durumunu takip edin.
* Yaklaşık 10 dk. sonra 'Classic Status Page' sayfasına geçip (sağa kaydırın) ve 'Toplayıcıyı yeniden başlat'ı tıklayın. Bu, yeni bir sensör başlatmaya gerek kalmadan sensör günlerini 0'a ayarlayacaktır.
* Alternative: If you see a message "Phone Service State: Hard Reset maybe failed" on second system status screen just start the sensor and this message should go away.
   
   ![xDrip+ Hard Reset maybe failed](../images/xDrip_HardResetMaybeFailed.png)

* Transmitter days will be set to 0 after successful extension and start of sensor.

### Replace transmitter

2018 sonbaharı/sonundan sonra üretilen G6 vericileri için (yani seri no. 80 veya 81 ile başlayanlar) [master "ana sürüm"](https://jamorham.github.io/#xdrip-plus) kullanabilirsiniz.

Dexcom G6 vericinizin seri numarası is starting with 8G, 8H or 8Juse one of the [latest nightly builds](https://github.com/NightscoutFoundation/xDrip/releases).

* Orijinal Dexcom alıcısını kapatın (kullanılıyorsa).
* Stop sensor (only if replacing sensor)
   
   Ensure it really is stopped:
   
   On the second "G5/G6 Status" screen look at `Queue Items` about halfway down - It may say something like `(1) Stop Sensor`
   
   Wait until this goes - usually within a few minutes. Sensor Status must be "Stopped" (see screenshot).
   
   -> To remove transmitter without stopping sensor see this video <https://youtu.be/AAhBVsc6NZo>.
   
   ![xDrip+ Stop Dexcom Sensor 1](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Stop Dexcom Sensor 2](../images/xDrip_Dexcom_StopSensor2.png)

* Forget device in xDrip+ system status AND in smartphone’s BT settings (Will be shown as Dexcom?? whereas ?? are the last two digits of the transmitter serial no.)
   
   ![xDrip+ Forget Device](../images/xDrip_Dexcom_ForgetDevice.png)

* Remove transmitter (and sensor if replacing sensor)

* Put the old transmitter far away to prevent reconnection. A microwave is a perfect Faraday shield for this - but unplug power cord to be 100% no one is turning the microwave on.
* `Kaynak Sihirbazı Butonunu` etkinleştirmek için ana ekrandaki kırmızı xDrip kan damlası simgesine uzun basın.
* OB1& Yerel Mod dahil varsayılan ayarları otomatik kuran Kaynak Sihirbazı Düğmesini kullanın 
   * Bu sihirbaz ilk kurulumda size rehberlik eder.
   * You will need your transmitter serial number if this is the first time you've used it.
* Put in serial number of new transmitter. Be careful not to confuse 0 (zero) and O (capital letter o).
* Insert new sensor (only if replacing).
* Put transmitter into sensor - **Do not start sensor immediately!**
* New "Firefly Transmitters" (serial no. starting with 8G, 8H or 8J) can only be used in native mode.
* The following options must not be activated for new "Firefly Transmitters" (serial no. starting with 8G, 8H or 8J):
   
   * Preemptive Restart (disable!)
   * Restart sensor (disable!)
   * Fallback to xDrip+ (disable!)
   
   ![Settings for Firefly transmitters](../images/xDrip_Dexcom_FireflySettings.png)

* Check in Classic Status Page -> G5/G6 status -> PhoneServiceState if one of the following information is displayed:
   
   * Transmitter serial starting with 80 or 81: "Got data hh:mm" (i.e. "Got data 19:04")
   * Transmitter serial starting with 8G, 8H or 8J: "Got glucose hh:mm" (i.e. "Got glucose 19:04") or "Got no raw hh:mm" (i.e. "Got now raw 19:04")
   
   ![xDrip+ PhoneServiceState](../images/xDrip_Dexcom_PhoneServiceState.png)

* Wait 15 minutes as the transmitter should communicate several times with xDrip before new sensor is started. Battery data will be shown below Firmware information.
   
   ![Firefly transmitter battery data](../images/xDrip_Dexcom_FireflyBattery.png)

* Start sensor and DO NOT BACKDATE! Always select "Yes, today"!

* Restart collector (system status - if not replacing sensor)
* xDrip+ ilk okumaları göstermeden önce orijinal Dexcom alıcısını (kullanılıyorsa) açmayın.
* `Kaynak Sihirbazı Butonunu` devre dışı bırakmak için ana ekrandaki kırmızı xDrip kan damlası simgesine uzun basın.
   
   ![xDrip+ Dexcom Transmitter 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ Dexcom Transmitter 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ Dexcom Transmitter 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ Dexcom Transmitter 4](../images/xDrip_Dexcom_Transmitter04.png)

### New Sensor

* Orijinal Dexcom alıcısını kapatın (kullanılıyorsa).
* Stop sensor if necessary
   
   Ensure it really is stopped:
   
   On the second "G5/G6 Status" screen look at `Queue Items` about halfway down - It may say something like `(1) Stop Sensor`
   
   Wait until this goes - usually within a few minutes.
   
   ![xDrip+ Stop Dexcom Sensor 1](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Stop Dexcom Sensor 2](../images/xDrip_Dexcom_StopSensor2.png)

* Clean contacts (transmitter backside) with alcohol and let air-dry.

* In case you use this function disable `Restart Sensor` and `Preemptive restarts` (Hamburger menu -> Settings -> G5/G6 Debug Settings). If you miss this step and have these functions enabled the new sensor will not start properly.
   
   ![xDrip+ Preemptive Restart](../images/xDrip_Dexcom_Restart.png)

* Start Sensor
   
   **For new Firefly transmitters** (serial no. starting with 8G, 8H or 8J) **it is mandatory, for all other transmitters it is recommended to wait approx. 15 minutes between stopping and starting the new sensor (until `Sensor Status: Stopped` is shown on second system status screen). DO NOT BACKDATE!**

* Set time inserted
   
   * To use G6 Native mode you must wait for the 2 hour warm up (i.e insertion time is now).
   * If you are using the xDrip+ algorithm then you can set a time more than 2 hours ago to avoid warm up. Readings may be very erratic. Therefore, this is not recommended.
* Enter Sensor code (on the peel-off foil of the sensor) 
   * Keep code for further reference (i.e. new start after transmitter had to be removed)
   * Code can also be found in [xDrip+ logs](../Configuration/xdrip#retrieve-sensor-code): Click 3-dots-menu on xDrip+ homescreen and choose `View Event Logs`.
* No calibration is needed if you use G6 in "native mode". xDrip+ will show readings automatically after 2 hour warm-up.
* Do not turn original Dexcom Receiver (if used) back on before xDrip+ shows first readings.
   
   ![xDrip+ Start Dexcom Sensor 1](../images/xDrip_Dexcom_SensorStart01.png)
   
   ![xDrip+ Start Dexcom Sensor 2](../images/xDrip_Dexcom_SensorStart02.png)

### Retrieve sensor code

* In master dated 2019/05/18 and the latest nightly builds the sensor code is shown in system status (Hamburger menu top left on homescreen).
* Swipe left once to see second screen.
   
   ![xDrip+ Retrieve Dexcom Sensor Code2](../images/xDrip_Dexcom_SensorCode2.png)

* Dexcom sensor code can also be found in xDrip+ logs.

* Tap 3 dot menu (top right side on homescreen)
* Select `View Event Logs` and search for "code"
   
   ![xDrip+ Retrieve Dexcom Sensor Code](../images/xDrip_Dexcom_SensorCode.png)

## Troubleshooting Dexcom G5/G6 and xDrip+

### Problem connecting transmitter

* Transmitter must be shown in your smartphone's bluetooth settings.
* Transmitter will be shown as Dexcom?? whereas ?? represent the last two digits of your transmitter serial no. (i.e. DexcomHY).
* Open system status in xDrip+ (hamburger menu on top left side of home screen).
* Check if your transmitter is shown on first status page ('classic status page').
* If not: Delete device from your smartphone's bluetooth settings and restart collector.
* Wait about 5 min. until Dexcom transmitter reconnects automatically.

### Problem when starting new sensor

Please note that the following method might likely not work if your Dexcom G6 transmitter's serial no. is starting with 8G, 8H or 8J.

* Native sensor is marked as "FAILED: Sensor Failed Start"
* Stop sensor
* Restart your phone
* Start sensor with code 0000 (four times zero)
* Wait 15 minutes
* Stop sensor
* Start sensor with "real" code (printed on the adhesive protector)

Check in xDrip+ logs if xDrip+ starts counting "Duration: 1 minute" (and so on). Only in the xDrip+ logs you can detect at an early stage whether xdrip+ has stopped a sensor. Latest status is not always shown correctly on bottom of startscreen.

## xDrip+ & Freestyle Libre

### Libre specific settings

* Open Bluetooth Settings -> Hamburger Menu (top left of homescreen) -> Settings -> scroll down -> Less common settings -> Bluetooth Settings
   
   ![xDrip+ Libre Bluetooth Settings 1](../images/xDrip_Libre_BTSettings1.png)

* Aşağıdaki ayarları etkinleştirin
   
   * `Turn Bluetooth on` 
   * `Use scanning`
   * `Always discover services`

* Diğer tüm seçenekler devre dışı bırakılmalıdır
   
   ![xDrip+ Libre Bluetooth Settings 2](../images/xDrip_Libre_BTSettings2.png)

### Libre smart reader battery level

* Battery level of smart readers such as MiaoMiao 2 can be displayed in AAPS.
* Details can be found on [screenshots page](../Getting-Started/Screenshots#sensor-level-battery).

### Connect Libre Transmitter & start sensor

![xDrip+ Start Libre Transmitter & Sensor 1](../images/xDrip_Libre_Transmitter01.png)

![xDrip+ Start Libre Transmitter & Sensor 2](../images/xDrip_Libre_Transmitter02.png)

![xDrip+ Start Libre Transmitter & Sensor 3](../images/xDrip_Libre_Transmitter03.png)