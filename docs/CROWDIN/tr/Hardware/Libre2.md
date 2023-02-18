# Freestyle Libre 2

Freestyle Libre 2 sistemi, tehlikeli kan şekeri düzeylerini otomatik olarak bildirebilir. Libre2 Sensörü, mevcut kan şekeri seviyesini her dakika bir alıcıya (okuyucu veya akıllı telefon) gönderir. Alıcı, gerekirse bir alarmı tetikler. Yamalı bir LibreLink uygulaması ve xDrip+ uygulaması ile kan şekeri seviyenizi akıllı telefonunuzda sürekli olarak alabilir ve görüntüleyebilirsiniz.

Sensör, glikometre ölçümleri ve sensör okumaları arasındaki farkları ayarlamak için -40 mg/dl ila +20 mg/dl (-2,2 mmol/l ila +1,1 mmol/l) aralığında kalibre edilebilir.

KŞ okumaları, Libre1'deki gibi bir BT vericisi kullanılarak da yapılabilir.

Önemli not: Bu, Freestyle 2 sensörünün ABD versiyonuyla çalışmaz! ABD versiyonu bir telefona değil, yalnızca bir okuyucuya bağlanabilir.

## Adım 1: Kendi yamalı LibreLink-Uygulamanızı oluşturun

Yasal nedenlerle, yama işlemini kendiniz yapmanız gerekir. İlgili bağlantıları bulmak için arama motorlarını kullanın. Esas olarak iki çeşidi vardır: Önerilen izlemeyi önlemek için tüm internet trafiğini engelleyen orijinal yamalı uygulamadır. Diğer varyant, doktorunuzun ihtiyaç duyabileceği LibreView'u destekler.

Orijinal uygulama yerine yamalı uygulama yüklenmelidir. Onunla başlatılan bir sonraki sensör, mevcut KŞ değerlerini Bluetooth aracılığıyla akıllı telefonunuzda çalışan xDrip+ uygulamasına iletecektir.

Önemli: Olası sorunları önlemek için orijinal uygulamayı NFC özellikli bir akıllı telefona yüklemek ve kaldırmak yardımcı olabilir. NFC etkinleştirilmelidir. Bu ekstra güç gerektirmez. Ardından yamalı uygulamayı yükleyin.

Yama uygulanmış uygulama, ön plan yetkilendirme bildirimi ile tanımlanabilir. Ön plan yetkilendirme hizmeti, bu hizmeti kullanmayan orijinal uygulamaya kıyasla bağlantı kararlılığını artırır.

![LibreLink Ön Plan Hizmeti](../images/Libre2_ForegroundServiceNotification.png)

Diğer göstergeler, Linux penguen logosu üç nokta menüsü -> Bilgi veya yamalı uygulamanın yazı tipi olabilir. Bu kriterler, seçtiğiniz uygulama kaynağına bağlı olarak isteğe bağlıdır.

![LibreLink Font Kontrolü](../images/LibreLinkPatchedCheck.png)

NFC'nin etkinleştirildiğinden emin olun, yamalı uygulama için bellek ve konum iznini etkinleştirin, otomatik saat ve saat dilimini etkinleştirin ve yamalı uygulamada en az bir alarm ayarlayın.

Şimdi, sadece sensörü tarayarak yamalı uygulama ile Libre2 sensörünü başlatın. Tüm ayarların doğru yapıldığından emin olun.

Başarılı sensör başlatma için zorunlu ayarlar:

-   NFC etkin / BT etkin
-   hafıza ve konum izni etkin
-   konum hizmeti etkin
-   otomatik saat ve saat dilimi ayarı
-   yamalı uygulamada en az bir alarm ayarlayın

Konum hizmetinin merkezi bir ayar olduğunu lütfen unutmayın. Bu, ayrıca ayarlanması gereken uygulama konumu izni değildir!

![LibreLink izinleri hafıza & konum](../images/Libre2_AppPermissionsAndLocation.png)

![otomatik saat ve saat dilimi + alarm ayarları](../images/Libre2_DateTimeAlarms.png)

Sensör, başlatıldığı cihazı hatırlar. Yalnızca bu cihaz gelecekte alarm alabilir.

Sensöre ilk bağlantı kurulumu kritiktir. LibreLink uygulaması, sensörle her 30 saniyede bir kablosuz bağlantı kurmaya çalışır. Bir veya daha fazla zorunlu ayar eksikse, bunların ayarlanması gerekir. Bunu yapmak için zaman sınırınız yok. Sensör sürekli olarak bağlantı kurmaya çalışır. Birkaç saat sürse bile. Sabırlı olun ve sensörü değiştirmeyi düşünmeden önce farklı ayarlar deneyin.

LibreLink'in başlangıç ekranının sol üst köşesinde kırmızı bir ünlem işareti ("!") gördüğünüz sürece, bağlantı yoktur veya LibreLink'in alarm sinyali vermesini engelleyen başka bir ayar yoktur. Lütfen sesin etkin olup olmadığını ve her türlü uygulama engelleme bildiriminin devre dışı bırakılıp bırakılmadığını kontrol edin. Ünlem işareti kaybolduğunda bağlantı kurulmalı ve akıllı telefona kan şekeri değerleri gönderilmelidir. Bu en fazla 5 dakika içerisinde gerçekleşmelidir.

![LibreLink bağlantı yok](../images/Libre2_ExclamationMark.png)

Ünlem işareti kalıyorsa veya bir hata mesajı alıyorsanız, bunun birkaç nedeni olabilir:

-   Android konum hizmeti verilmedi - lütfen sistem ayarlarında etkinleştirin
-   Otomatik saat ve saat dilimi ayarlanmadı - lütfen ayarları uygun şekilde değiştirin
-   Alarmları etkinleştirin - LibreLink'te üç alarmdan en az biri etkinleştirilmelidir
-   Bluetooth kapalı - lütfen açın
-   Ses engellenmiş
-   Uygulama bildirimleri engellenmiş
-   Kilit ekranı bildirimleri engellenmiş
-   LOT numarası 'K' ile başlayan 8 basamaklı Libre 2 sensörünüz hatalı. Bunu sensörün sarı ambalajının üzerinde basılı olarak bulabilirsiniz. Bu sensörler bluetooth üzerinde çalışmadıkları için değiştirilmeleri gerekiyor.

Telefonu yeniden başlatmak yardımcı olabilir, bunu birkaç kez yapmanız gerekebilir. Bağlantı kurulur kurulmaz kırmızı ünlem işareti kaybolur ve en önemli adım aşılmış olur. Sistem ayarlarına bağlı olarak ünlem işareti kalabilir ancak yine de okumalar alabilirsiniz. Her iki durumda da sıkıntı yok endişelenmeyin. Sensör ve telefon artık bağlı, her dakikada bir kan şekeri değeri iletiliyor.

![LibreLink bağlantısı kuruldu](../images/Libre2_Connected.png)

Nadir durumlarda, bluetooth önbelleğini boşaltma ve/veya sistem menüsü aracılığıyla tüm ağ bağlantılarını sıfırlama yardımcı olabilir. Bu, uygun bir bluetooth bağlantısı kurmaya yardımcı olabilecek tüm bağlı bluetooth cihazlarını kaldırır. Bu prosedür, yamalı LibreLink uygulaması tarafından başlatılan sensör hatırlandığından kaydedilir. Burada ek bir şey yapılması gerekmez. Yamalı uygulamanın sensöre bağlanmasını bekleyin.

Başarılı bir bağlantıdan sonra gerekirse akıllı telefon ayarları değiştirilebilir. Bu önerilmez, ancak güç tasarruf modunu açmak isteyebilirsiniz. Konum servisi kapatılabilir, ses seviyesi sıfırlanabilir veya alarmlar tekrar kapatılabilir. Kan şekeri seviyeleri yine de aktarılır.

Ancak bir sonraki sensör başlatılırken tüm ayarlar yeniden yapılmalıdır!

Açıklama: Yamalı uygulama, bir bağlantıyı etkinleştirmek için bir saat ısınmadan sonra belirlenen zorunlu ayarlara ihtiyaç duyar. 14 günlük çalışma süresi içinde bunlara ihtiyaç yoktur. Çoğu durumda, bir sensörü başlatmakla ilgili sorunlarınız olduğunda, konum hizmeti kapatılmıştır. Android telefonlarda, bağlanmak için uygun bluetooth prosedürü(!) gereklidir. Lütfen Google'ın Android dokümantasyonuna bakın.

14 gün boyunca, NFC ile tarama için orijinal LibreLink uygulamasını çalıştıran bir veya daha fazla NFC özellikli akıllı telefonu (okuyucu cihazı değil!) paralel olarak kullanabilirsiniz. Bunu başlatmak için herhangi bir zaman sınırlaması yoktur. Örneğin, 5. gün ya da sonrasına bir paralel telefon kullanabilirsiniz. Paralel telefon(lar) kan şekeri değerlerini Abbott Cloud'a (LibreView) yükleyebilir. LibreView, diyabet ekibiniz için raporlar oluşturabilir. Buna ihtiyacı olan birçok ebeveyn olduğunu biliyoruz.

İzlemeyi önlemek için orijinal yamalı uygulamanın **internet bağlantısı** olmadığını lütfen unutmayın.

Ancak, etkin internet erişimi ile LibreView'ı destekleyen yamalı uygulamanın bir çeşidi vardır. Lütfen verilerinizin buluta aktarıldığını unutmayın. Ancak diadoc aracınız ve raporlama zinciriniz o zaman tam olarak desteklenir. Bu varyantla, çalışan bir sensörün alarmlarını, sensörü başlatmamış farklı bir cihaza taşımak da mümkündür. Google'dan diyabetle ilgili Alman forumlarında bunun nasıl yapılabileceğini araştırabilirsiniz.

## 2. Adım: xDrip+ uygulamasını kurun ve yapılandırın

Kan şekeri değerleri akıllı telefonda xDrip+ uygulaması tarafından alınır.

-   Henüz kurmadıysanız, xDrip+ uygulamasını indirin ve [buradan](https://github.com/NightscoutFoundation/xDrip/releases) en son derlemelerden birini yükleyin.
-   xDrip+'da veri kaynağı olarak "Libre2 yamalı" ya da "Libre 2 (yamalı Uygulama)"yı seçin
-   Gerekirse, Gelişmiş Ayarlar-> Ekstra Günlük Ayarları-> Günlük için ekstra etiketler altında "BgReading:d,xdrip libre_receiver:v" girin. Bu, sorun giderme için ek hata mesajlarını günlüğe kaydeder.
-   xdrip'te Ayarlar > Yerel-Uygulama ayarlarına gidin ve > Verileri Yerel Olarak Yayınlayını AÇIK seçin.
-   xDrip+'da Ayarlar > Uyg.lar-arası ayarlar > Tedaviyi Kabul Et'e gidin ve KAPALI'yı seçin.
-   to enable AAPS to receive blood sugar levels (version 2.5.x and later) from xDrip+ please set [Settings > Interapp Settings > Identify Receiver "info.nightscout.androidaps"](xdrip-identify-receiver)
-   Kalibre etmek için AndroidAPS'yi kullanabilmek istiyorsanız, xdrip'te Ayarlar > Uygulamalar Arası Uyumluluğu > Kalibrasyonları Kabul Et'e gidin ve  AÇIK'ı seçin. Ayarlar > Daha Az Ortak Ayarlar> Gelişmiş Kalibrasyon Ayarları'ndaki seçenekleri de gözden geçirmek isteyebilirsiniz.

![xDrip LibreLink oturum açma](../images/Libre2_Tags.png)

## Adım 3: Sensörü başlatın

xDrip'te sensörü "Sensörü başlat" ve "bugün değil" ile başlatın.

Aslında bu, herhangi bir Libre2 sensörünü fiziksel olarak başlatmaz (sensörü ya kendi cihazı ya da nfc özellikli bi telefon ve librelink uygulaması ile başlatmanız gerekir.) Bu sadece xDrip+'ın yeni bir sensörün kan şekeri seviyelerini ilettiğini anlamak içindir. Varsa, ilk kalibrasyon için iki ölçümlü glikometre değeri girin. Şimdi kan şekeri değerleri her 5 dakikada bir xDrip+'da görüntülenmelidir. Atlanan değerler, ör. telefonunuzdan çok uzakta olduğunuz zamanlar için, doldurulmayabilr.

Bir sensör değişikliğinden sonra xDrip+ yeni sensörü otomatik olarak algılar ve tüm kalibrasyon verilerini siler. Aktivasyondan sonra kanlı KŞ'nizi kontrol edebilir ve yeni bir başlangıç kalibrasyonu yapabilirsiniz.

## Adım 4: AndroidAPS'i yapılandırın (döngü için)

-   AndroidAPS'de Konfigürasyon ayarları > KŞ Kaynağı'na gidin ve 'xDrip+' seçeneğini işaretleyin
-   If AndroidAPS does not receive BG values when phone is in airplane mode, use 'Identify receiver' as describe on [xDrip+ settings page](xdrip-identify-receiver).

Halihazırda, Libre 2'i KŞ kaynağı olarak kullanıyorsanız, SMB algoritmasında "SMB'yi her zaman etkinleştir" ve "Karbonhidrattan sonra SMB'yi etkinleştir"i işaretleyemezsiniz. Libre 2'in KŞ değerleri, bu seçenekleri güvenle kullanmak için yeterince düzgün değildir. Daha fazla ayrıntı için [Kan şekeri verilerini yumuşatma](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) konusuna bakın.

(Libre2-experiences-and-troubleshooting)=
## Deneyimler ve Sorun Giderme

### Bağlantı

The connectivity is extraordinarily good. With the exception of Huawei mobile phones, all current smartphones seem to work well. The reconnect rate in case of connection loss is phenomenal. The connection can break off if the mobile phone is in the pocket opposite the sensor or if you are outdoors. When I am gardening, I use to wear my phone on the sensor side of my body. In rooms, where Bluetooth spreads over reflections, no problems should occur. If you have connectivity problems please test another phone. It may also help to set the sensor with the internal BT antenna pointing down. The slit on the applicator must be pointing down when setting the sensor.

### Değer yumuşatma & ham değerler

Technically, the current blood sugar value is transmitted to xDrip+ every minute. A weighted average filter calculates a smoothed value over the last 25 minutes. This is mandatory for looping. The curves look smooth and the loop results are great. The raw values on which the alarms are based jitter a little more, but correspond to the values that the reader also displays. In addition, the raw values can be displayed in the xDrip+ graph in order to be able to react in time to rapid changes. Please switch on Less Common Settings \> Advanced Settings for Libre2 \> "show Raw values" and "show Sensors Infos". Then the raw values are additionally displayed as small white dots and additional sensor info is available in the system menu.

The raw values are very helpful when the blood sugar is moving fast. Even if the dots are jumpier you would detect the tendency much better as using the smoothed line to make proper therapy decisions.

![xDrip+ advanced settings Libre 2 & raw values](../images/Libre2_RawValues.png)

### Sensör çalışma zamanı

The sensor runtime is fixed to 14 days. The 12 extra hours of Libre1 no longer exist. xDrip+ shows additional sensor information after enabling Advanced Settings for Libre2 \> "show Sensors Infos" in the system menu like the starting time. The remaining sensor time can also be seen in the patched LibreLink app. Either in the main screen as remaining days display or as the sensor start time in the three-point menu->Help->Event log under "New sensor found".

![Libre 2 start time](../images/Libre2_Starttime.png)

### Yeni sensör

A sensor exchange takes place on-the-fly: Set new sensor shortly before activation. As soon as xDrip+ receives no more data from the old sensor, start the new sensor with the patched app. After one hour new values should appear automatically in xDrip+.

If not, please check the phone settings and proceed as with the first start. You have no time limit. Try to find the correct settings. No need to immediately replace the sensor before you tried different combinations. The sensors are robust and try permanently to establish a connection. Please take your time. In most cases you accidentally changed one setting which causes now problems.

Once successful please select "Sensor Stop" and "Delete calibration only" in xDrip. This indicates for xDrip+ that a new sensor is releasing blood sugar levels and the old calibrations are no longer valid and therefore have to be deleted. No real interaction is done with the Libre2 sensor here! You do not need to start the sensor in xDrip+.

![xDrip+ missing data when changing Libre 2 sensor](../images/Libre2_GapNewSensor.png)

### Kalibrasyon

You can calibrate the Libre2 with an offset of -40 mg/dl to +20 mg/dL \[-2,2 mmol/l to +1,1 mmol/l\] (intercept). The slope isn't changeable as the Libre2 is much more accurate compared to the Libe1. Please check by fingerpricking early after setting a new sensor. It is known that there can arise big differences to the blood measurements. To be on the safe side, calibrate every 24 - 48 hours. The values are accurate up to the end of the sensor and do not jitter as with the Libre1. However, if the sensor is completely off, this will not change. The sensor should then be replaced immediately.

### Olası kontroller

The Libre2 sensors contain plausibility checks to detect bad sensor values. As soon as the sensor moves on the arm or is lifted slightly, the values may start to fluctuate. The Libre2 sensor will then shut down for safety reasons. Unfortunately, when scanning with the App, additional checks are made. The app can deactivate the sensor even though the sensor is OK. Currently the internal test is too strict. I have completely stopped scanning and haven't had a failure since then.

### Zaman diliminde seyahat

In other [time zones](../Usage/Timezone-traveling.md) there are two strategies for looping:

Either

1.  Akıllı telefon saatini değiştirmeden bırakın ve bazal profili değiştirin (akıllı telefon uçuş modunda) veya
2.  Pompa geçmişini silin ve akıllı telefon saatini yerel saatle değiştirin.

Method 1. is great as long as you don't have to set a new Libre2 sensor on-site. If in doubt, choose method 2., especially if the trip takes longer. If you set a new sensor, the automatic time zone must be set, so method 1. would be disturbed. Please check before, if you are somewhere else, you can run otherwise fast into problems.

### Deneyimler

Altogether it is one of the smallest CGM systems on the market. Small, no transmitter necessary and mostly very accurate values without fluctuations. After approx. 12 hours running-in phase with deviations of up to 30 mg/dl (1,7 mmol/l)the deviations are typical smaller than 10 mg/dl (0,6 mmol/l). Best results at the rear orbital arm, other setting points with caution! No need to set a new sensor one day ahead for soaking. That would disturb the internal levelling mechanism.

There seem to be bad sensors from time to time, which are far away from the blood values. It stays that way. These should be immediately replaced.

If the sensor moved a little bit on the skin or is lifted somehow this can cause bad results. The filament which sits in the tissue is a little bit pulled out of the tissue and will measure different results then. Mostly probably you will see jumping values in xDrip+. Or the difference to the bloody values change. Please replace the sensor immediately! The results are inaccurate now.

## Bluetooth verici ve OOP kullanma

Bluetooth transmitter can be used with the Libre2 with the latest xDrip+ nightlys and the Libre2 OOP app. You can receive blood sugar readings every 5 minutes as well as with the Libre1. Please refer to the miaomiao website to find a description. This will also work with the Bubble device and in the future with other transmitter devices. The blucon should work but has not been tested yet.

Old Libre1 transmitter devices cannot be used with the Libre2 OOP. They need to be replaced with a newer version or have a firmware upgrade for proper operation. MM1 with newest firmware is unfortunately not working yet - searching for root cause is currently ongoing.

The Libre2 OOP is creating the same BG readings as with the original reader or the LibreLink app via NFC scan. AAPS with Libre2 do a 25 minutes smoothing to avoid certain jumps. OOP generates readings every 5 minutes with the average of the last 5 minutes. Therefore the BG readings are not that smooth but match the original reader device and faster follow the "real" BG readings. If you try to loop with OOP please enable all smoothing settings in xDrip+.

The Droplet transmitter is working with Libre2 also but uses an internet service instead. Please refer to FB or a search engine to get further information. The MM2 with the tomato app also seems to use an internet service. For both devices you have to take care to have a proper internet connection to get your BG readings.

Even if the patched LibreLink app approach is smart there may be some reasons to use a bluetooth transmitter:

-   KŞ okumaları kendi okuyucusu ile aynıdır
-   Libre2 sensörü, daha önce Libre1'de olduğu gibi 14.5 gün kullanılabilir
-   8 saatlik geriye dönük ölçümler eklenir.
-   Yeni bir sensörün bir saatlik başlatma süresi boyunca KŞ okumaları alınabilir.

Remark: The transmitter can be used in parallel to the LibreLink app. It doesn't disturb the patched LibreLink app operation.

Remark #2: The OOP algorithm cannot be calibrated yet. This will be changed in the future.

# Libre 2 sensörünü kalibre etmek için en iyi yöntemler

To get the best results when calibrating a libre 2 sensor there are some “rules” you should follow. They apply independently of the software combination (e.g. patched libre-app, oop2, …) that is used to handle the libre 2 values.

1.  En önemli kural, sensörü yalnızca en az 15 dakika boyunca düz bir KŞ seviyeniz olduğunda kalibre etmektir. Son üç okuma arasındaki delta 10 mg/dl'yi geçmemelidir (her okuma arasında 15 dakikadan fazla olmamalıdır). Libre 2, kan şekeri seviyenizi değil, deri altı glikoz seviyenizi ölçtüğünden, özellikle kan şekeri seviyesi yükselirken veya düşerken biraz gecikme olur. Bu zaman gecikmesi, KŞ seviyesi yükselme/düşüş o kadar fazla olmasa bile, elverişsiz durumlarda çok büyük kalibrasyon farklarına yol açabilir. Bu nedenle, mümkün olduğunca, yükselen veya düşen durumlarda kalibrasyon yapmaktan kaçının. ->Düz bir KŞ seviyeniz olmadığında bir kalibrasyon eklemeniz gerekiyorsa (örn. yeni bir sensör başlatırken) bu kalibrasyonu/kalibrasyonları mümkün olan en kısa sürede kaldırmanız ve düz KŞ seviyelerindeyken yeni bir tane eklemeniz önerilir.
2.  Aslında bu, kural 1'in bir benzeridir ve otomatik olarak dikkate alınması gerekir, ancak emin olmak için: Karşılaştırma ölçümleri yaparken (parmaktan glikometre ile) KŞ seviyeniz yaklaşık 15 dakika boyunca düz olmalıdır. Yükselirken veya düşerken karşılaştırma yapmayın. Önemli: Yine de şüpheye düştüğünüz zamanlarda kan şekeri ölçümleri yapacaksınız, sadece yükselirken veya düşerken sonuçları kalibrasyon için kullanmayın!
3.  Sensörü düz KŞ seviyelerinde kalibre etmek çok iyi bir başlangıç noktası olduğundan, sensörü yalnızca 70 mg/dl ila 160 mg/dl gibi istediğiniz hedef aralığında kalibre etmeniz şiddetle tavsiye edilir. Libre 2, 50 mg/dl ila 350 mg/dl (en azından doğrusal bir şekilde değil) gibi çok büyük bir aralıkta çalışacak şekilde optimize edilmemiştir, bu nedenle yalnızca hedef aralığınız dahilinde kalibre etmeye çalışın. -> Hedef aralığınızın dışındaki kalibrasyon değerlerinin kan şekeri seviyelerine tam olarak uymayacağını kabul edin.
4.  Çok sık kalibrasyon yapmayın. Sensörü çok sık kalibre etmek daha kötü sonuçlara yol açar. Sensör düz KŞ koşullarında iyi sonuçlar verdiğinde, herhangi bir -yararlı- etkisi olmadığı için yeni kalibrasyon eklemeyin. Her 3-5 günde bir durumu tekrar kontrol etmek yeterli olmalıdır (elbette düz KŞ koşullarında).
5.  Gerekli olmadığında kalibrasyondan kaçının. Bu size saçma gelebilir ancak kan şekeri ile deri altı glikoz seviyesi farkı sadece ±10 mg/dl ise (örn. kan şekeri seviyesi: 95, Libre sensörü 100 --> 9mg/DL'yi EKLEMEYİN, kan şekeri seviyesi: 95, Libre sensörü 115 --> kalibrasyon için dikkate alınacak 95'i ekleyin)

Some general notes: After activating a new sensor and at the sensor’s end of life it does make sense to do comparison measurements more often than 3-5 days as stated in rule nr. 4. For new and old sensors it is more likely that the raw values change and a re-calibration is required. From time to time it happens that a sensor does not provide valid values. Most likely the sensor value is way to low compared to the actual blood glucose level (e.g. sensor: 50 mg/dl, bg: 130 mg/dl) even after calibrating. If this is the case the sensor cannot be calibrated to report useful results. E.g. when using the patched libre app one can add an offset of maximal +20 mg/dl. When it happens to you that the sensor does provides way too low values, don’t hesitate to replace it as it will not get better. Even if it might be a defective sensor, when seeing sensors that do provide way too low values very often, try to use different areas to place your sensor. Even in the official area (upper arm) there might be some locations where the sensors just do not provide valid values. This is some kind of trial end error to find areas that work for you.
