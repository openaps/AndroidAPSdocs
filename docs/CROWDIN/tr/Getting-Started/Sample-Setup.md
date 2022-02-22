# Örnek kurulum: Samsung S7, Dana RS, Dexcom G6 ve Sony Smartwatch

![Örnek kurulum](../images/SampleSetup.png)

## Açıklama

Bu kurulumda, döngünün kontrol merkezi olarak Samsung Galaxy S7 akıllı telefon kullanılıyor. Biraz değiştirilmiş Dexcom Uygulaması, Dexcom G6 CGM'den glikoz değerlerini okur. AndroidAPS, Koreli üretici SOOIL'in Dana RS insülin pompasını bluetooth üzerinden kontrol etmek için kullanır. Başka bir cihaza gerek yoktur.

Dexcom Uygulaması yalnızca sınırlı uyarı seçenekleri sunduğundan, açık kaynak uygulaması xDrip+ yalnızca yüksek ve düşük alarmları değil, aynı zamanda bireysel gereksinimlere göre ek uyarıları da tanımlamak için kullanılır.

İsteğe bağlı olarak, glikoz ve AndroidAPS değerlerini bileğinizde görüntülemek için bir Android wear akıllı saati kullanılabilir (bu örnek kurulumda Sony Smartwatch 3 (SWR50) kullanılmakta). Saat AndroidAPS'i kontrol etmek için bile kullanılabilir (örn. gizlice bir yemek bolusu ayarlamak).

Sistem çevrimdışı olarak çalışır. Bu operasyon için akıllı telefonun internete veya mobil bağlantıya gerek olmadığı anlamına gelir.

Bununla birlikte, bir veri bağlantısı kurulduğunda veriler otomatik olarak "bulutta" Nightscout'a yüklenir. Bunu yaparak, doktor ziyareti için kapsamlı raporlar sağlayabilir veya mevcut değerleri istediğiniz zaman aile üyeleriyle paylaşabilirsiniz. Farklı Nightscout raporlarından yararlanmak için yalnızca (önceden tanımlanmış) bir Wi-Fi bağlantısı kullanırken Nightscout'a veri göndermek de mümkündür.

## Gerekli bileşenler

1. Samsung Galaxy S7
    
    * Alternatifler: AndroidAPS için [test edilen telefonların ve saatlerin listesine](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit) bakın

2. [DanaRS](http://www.sooil.com/eng/product/)
    
    * Alternatifler: 
    * [Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md)
    * [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md)
    * [DanaR](../Configuration/DanaR-Insulin-Pump.md)
    * [Bazı eski Medtronic pompaları (ilave olarak gerekli: RileyLink/Gnarl donanımı, bluetooth düşük enerjili Android Telefon / BLE-chipset)](../Configuration/MedtronicPump.md)
    * Gelecekte başka pompalar da mevcut olabilir, ayrıntılar için [gelecekteki olası pompa sürücülerine](Future-possible-Pump-Drivers.md) bakın.

3. [Dexcom G6](https://dexcom.com)
    
    * Alternatifler: olası [KŞ kaynaklarının](../Configuration/BG-Source.rst) listesine bakın

4. İsteğe bağlı: Sony Smartwatch 3 (SWR50)
    
    * Alternatifler: Tüm [Google Wear OS ile](https://wearos.google.com/intl/de_de/#find-your-watch) saatler iyi çalışmalıdır, ayrıntılar için AndroidAPS için [test edilen telefonlar ve saatler listesine](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit) bakın (OS Android Wear olmalıdır)

## Nightscout kurulumu

Ayrıntılı [Nightscout kurulumu](../Installing-AndroidAPS/Nightscout.md)'na bakın

## Bilgisayar kurulumu

Ücretsiz olarak kullanılabilen AAPS açık kaynak kodundan bir Android uygulaması oluşturabilmek için bilgisayarınızda veya dizüstü bilgisayarınızda (Windows, Mac, Linux) Android Studio'ya ihtiyacınız vardır. [APK'yı oluşturma](../Installing-AndroidAPS/Building-APK.md) bölümünde ayrıntılı bir talimat bulunabilir.

Yazılım, bilgisayarınıza yüklendikten sonra birçok ek veri indirdiğinden, Android Studio'yu kurarken lütfen sabırlı olun.

## Akıllı telefon kurulumu

![Akıllı telefon](../images/SampleSetupSmartphone.png)

### Akıllı telefon donanım yazılımını kontrol edin

* Menü > Ayarlar > Telefon bilgisi > Yazılım bilgisi: En az "Android Sürümü 8.0" (Android 8.0.0 sürümüne kadar başarıyla test edilmiştir Oreo - Samsung Experience Sürüm 9.0) 
* Donanım yazılımı güncellemesi için: menü > Tercihler > yazılım güncellemesi

### Bilinmeyen kaynaklardan uygulama yüklemeye izin ver

Menü > Ayarlar > Cihaz güvenliği > Bilinmeyen kaynaklar > sağa kaydır (= etkin)

Güvenlik nedeniyle, burada açıklanan tüm uygulamaların yüklenmesi tamamlandıktan sonra bu ayar tekrar devre dışı bırakılmalıdır.

### Bluetooth'u Etkinleştir

1. Menü > Ayarlar > Bağlantılar > Bluetooth > sağa kaydır (= etkin)
2. Menü > Ayarlar > Bağlantılar > Konum > sağa kaydır (= etkin)

Bluetooth'un düzgün çalışması için konum servisleri ("GPS") etkinleştirilmelidir.

### Dexcom Uygulamasını yükleyin (değiştirilmiş sürüm)

![Yamalı Dexcom Uygulaması](../images/SampleSetupDexApp.png)

Google Play Store'daki orijinal Dexcom uygulaması, değerleri diğer uygulamalara yayınlamadığından çalışmayacaktır. Bu nedenle, topluluk tarafından biraz değiştirilmiş bir sürüm gereklidir. Yalnızca bu değiştirilmiş Dexcom uygulaması AAPS ile iletişim kurabilir. Ek olarak, değiştirilmiş Dexcom Uygulaması, yalnızca [Dexcom'un uyumluluk listesindeki](https://www.dexcom.com/dexcom-international-complete) değil, tüm Android akıllı telefonlarla kullanılabilir.

Bunu yapmak için akıllı telefonunuzda aşağıdaki adımları uygulayın:

1. Orijinal Dexcom uygulaması zaten yüklüyse: 
    * Sensörü durdurun
    * Menü > Ayarlar > Uygulamalar > Dexcom G6 Mobile > Kaldır yoluyla uygulamayı kaldırın
2. [BYODA Dexcom uygulamasını](../Hardware/DexcomG6#if-using-g6-with-build-your-own-dexcom-app) indirin ve yükleyin
3. Değiştirilmiş Dexcom G6 uygulamasını başlatın, sensörü verilen talimatlara göre etkinleştirin/kalibre edin ve ısınma aşaması bitene kadar bekleyin.
4. Değiştirilen Dexcom uygulaması glikoz değerini gösterdiğinde, uyarıları (ekranın sol üst tarafındaki hamburger menüsü) aşağıdaki gibi ayarlayın: 
    * Acil düşük `55mg/dl` / `3.1mmol/l` (devre dışı bırakılamaz)
    * Düşük `KAPALI`
    * Yüksek `KAPALI`
    * Artış oranı `KAPALI`
    * Düşme oranı `KAPALI`
    * Sinyal kaybı `KAPALI`

## AndroidAPS'i yükleyin

1. [APK'yı oluşturmak](../Installing-AndroidAPS/Building-APK#generate-signed-apk) için talimatları izleyin
2. Oluşturulan APK'yı telefonunuza [aktarın](../Installing-AndroidAPS/Building-APK#transfer-apk-to-smartphone)
3. Kurulum yardımcısını kullanarak veya manuel olarak ihtiyaçlarınıza göre [AndroidAPS'i yapılandırın](../Configuration/Config-Builder.md)
4. Bu örnek kurulumda yardımcıyı kullandık

* KŞ kaynağı: `Dexcom G6 Uygulaması (yamalı)` -- çarkı tıklayın ve `KŞ verilerini NS'ye yükle` ve `KŞ verilerini xDrip+'a gönder`'i etkinleştirin (bkz. [KŞ kaynağı](../Configuration/BG-Source.rst))

![G5 Settings](../images/SampleSetupG5Settings.png)

* NS İstemcisi etkinleştirildi (bkz. [Nightscout kurulumu](../Installing-AndroidAPS/Nightscout.md))

## xDrip+'ı yükleyin

xDrip+ is another mature open source app that offers countless possibilities. In this setup, contrary to what the developers first wrote the app for, xDrip+ is not used to collect glucose data from the Dexcom G6, but only to output alarms and to display the current glucose value including the curve on the Android home screen in the widget. With xDrip+ the alarms can be set much more individually than with the Dexcom software, AAPS or Nightscout (no limitation in the selection of sounds, different alarms depending on day/night time etc.).

1. Akıllı telefonunuzla xDrip+'ın en son kararlı APK sürümünü indirin <https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk> - Google Play Store'daki sürümü değil!
2. İndirilen APK dosyasını seçerek xDrip+'ı yükleyin.
3. xDrip+'ı başlatın ve aşağıdaki ayarları yapın (sol üstte hamburger menüsü) 
    * Ayarlar > Alarmlar ve Uyarılar > Glikoz Seviyesi Uyarı Listesi > İhtiyaçlarınıza göre Uyarı Oluştur (yüksek ve düşük).
    * Mevcut alarmlar, alarma uzun basılarak değiştirilebilir.
    * Ayarlar > Alarmlar ve Uyarılar > Kalibrasyon Uyarıları: devre dışı (değiştirilmiş Dexcom uygulaması aracılığıyla hatırlatılır)
    * Ayarlar > Donanım Veri Kaynağı > 640G/EverSense
    * Ayarlar > Uygulamalar arası ayarlar > Kalibrasyonları Kabul Et > `AÇIK`
    * Menü > Sensörü Başlat (Formalitedir ve çalışan G6 sensörüyle bir ilgisi yoktur. Bu gereklidir, aksi takdirde düzenli olarak bir hata mesajı görünecektir.) 

For more information about xDrip+, see here [BG source page](../Configuration/BG-Source.rst).

### Alarm kurulum örneği

The "Urgent low alarm" (below 55 mg/dl resp. 3,1 mmol) is a standard alarm from the modified Dexcom app that cannot be disabled.

![xDrip alarms](../images/SampleSetupxDripWarning.png)

Tip for meetings / church visits / cinema etc..:

If "Do not disturb" mode is activated in the Samsung Galaxy S7 (Menu > Settings > Sounds and vibration > Do not disturb: slider to right side (= active)), the phone only vibrates during urgent low alarm and does not issue an acoustic warning. For the other alarms set up via xDrip+ you can select whether the silent mode should be ignored (acoustic sound played) or not.

## Güç tasarrufu seçeneğini devre dışı bırakma

On your Samsung Galaxy S7 go to Menu > Settings > Device Maintenance > Battery > Unmonitored Apps > + Add apps: Select the apps AndroidAPS, Dexcom G6 Mobile, xDrip+ and Android Wear (if smartwatch is used) one after the other

## İsteğe bağlı: Sony Smartwatch 3'ü (SWR50) kurun

With an Android Wear smartwatch life with diabetes can be made even more inconspicuous. The watch can be used to display the current glucose level, the status of the loop etc. on the wrist. Saat AndroidAPS'i kontrol etmek için bile kullanılabilir (örn. gizlice bir yemek bolusu ayarlamak). To do this, double tap the CGM value of the AAPSv2 watchface. The SWR50 usually runs for a full day until the battery needs to be recharged (same charger as the Samsung Galaxy S7: microUSB).

![Akıllı saat](../images/SampleSetupSmartwatch.png)

Details about the information displayed on the watchface can be found [here](../Configuration/Watchfaces.md).

* Google Play Store aracılığıyla akıllı telefonunuza "Android Wear" uygulamasını yükleyin ve oradaki talimatlara göre akıllı saati bağlayın.
* AAPS'de hamburger menüsü (sol üst köşe) > Konfigürasyon ayarları > Genel (listenin altında) > Wear > sol tarafta etkinleştir'i ve ayar çarkını seçin > Saat ayarları'nı tıklayın ve `Saat tarafından kontrol`'ü etkinleştirin
* Akıllı saatinizde: Saat yüzünü değiştirmek için ekrana uzun basın ve `AAPSv2` öğesini seçin
* Gerekirse her iki cihazı da bir kez yeniden başlatın.

## Pompa Ayarları

see [Dana RS pump](../Configuration/DanaRS-Insulin-Pump.md)