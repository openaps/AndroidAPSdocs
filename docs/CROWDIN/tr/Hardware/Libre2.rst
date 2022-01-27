Freestyle Libre 2
**************************************************

Freestyle Libre 2 sistemi, tehlikeli kan şekeri düzeylerini otomatik olarak bildirebilir. Libre2 Sensörü, mevcut kan şekeri seviyesini her dakika bir alıcıya (okuyucu veya akıllı telefon) gönderir. Alıcı, gerekirse bir alarmı tetikler. Yamalı bir LibreLink uygulaması ve xDrip+ uygulaması ile kan şekeri seviyenizi akıllı telefonunuzda sürekli olarak alabilir ve görüntüleyebilirsiniz. 

Sensör, glikometre ölçümleri ve sensör okumaları arasındaki farkları ayarlamak için -40 mg/dl ila +20 mg/dl (-2,2 mmol/l ila +1,1 mmol/l) aralığında kalibre edilebilir.

KŞ okumaları, Libre1'deki gibi bir BT vericisi kullanılarak da yapılabilir.

Önemli not: Bu, Freestyle 2 sensörünün ABD versiyonuyla çalışmaz! ABD versiyonu bir telefona değil, yalnızca bir okuyucuya bağlanabilir.

Adım 1: Kendi yamalı LibreLink-Uygulamanızı oluşturun
==================================================

Yasal nedenlerle, yama işlemini kendiniz yapmanız gerekir. İlgili bağlantıları bulmak için arama motorlarını kullanın. Esas olarak iki çeşidi vardır: Önerilen izlemeyi önlemek için tüm internet trafiğini engelleyen orijinal yamalı uygulamadır. Diğer varyant, doktorunuzun ihtiyaç duyabileceği LibreView'u destekler.

Orijinal uygulama yerine yamalı uygulama yüklenmelidir. Onunla başlatılan bir sonraki sensör, mevcut KŞ değerlerini Bluetooth aracılığıyla akıllı telefonunuzda çalışan xDrip+ uygulamasına iletecektir.

Önemli: Olası sorunları önlemek için orijinal uygulamayı NFC özellikli bir akıllı telefona yüklemek ve kaldırmak yardımcı olabilir. NFC etkinleştirilmelidir. Bu ekstra güç gerektirmez. Ardından yamalı uygulamayı yükleyin. 

Yama uygulanmış uygulama, ön plan yetkilendirme bildirimi ile tanımlanabilir. Ön plan yetkilendirme hizmeti, bu hizmeti kullanmayan orijinal uygulamaya kıyasla bağlantı kararlılığını artırır.

.. image:: ../images/Libre2_ForegroundServiceNotification.png
  :alt: LibreLink Ön Plan Hizmeti

Diğer göstergeler, Linux penguen logosu üç nokta menüsü -> Bilgi veya yamalı uygulamanın yazı tipi olabilir. Bu kriterler, seçtiğiniz uygulama kaynağına bağlı olarak isteğe bağlıdır.

.. image:: ../images/LibreLinkPatchedCheck.png
  :alt: LibreLink Font Kontrolü

NFC'nin etkinleştirildiğinden emin olun, yamalı uygulama için bellek ve konum iznini etkinleştirin, otomatik saat ve saat dilimini etkinleştirin ve yamalı uygulamada en az bir alarm ayarlayın. 

Şimdi, sadece sensörü tarayarak yamalı uygulama ile Libre2 sensörünü başlatın. Tüm ayarların doğru yapıldığından emin olun.

Başarılı sensör başlatma için zorunlu ayarlar: 

* NFC etkin / BT etkin
* hafıza ve konum izni etkin 
* konum hizmeti etkin
* otomatik saat ve saat dilimi ayarı
* yamalı uygulamada en az bir alarm ayarlayın

Konum hizmetinin merkezi bir ayar olduğunu lütfen unutmayın. Bu, ayrıca ayarlanması gereken uygulama konumu izni değildir!

.. image:: ../images/Libre2_AppPermissionsAndLocation.png
  :alt: LibreLink izinleri hafıza ve konum
  
  
.. image:: ../images/Libre2_DateTimeAlarms.png
  :alt: otomatik saat ve saat dilimi + alarm ayarları  

Sensör, başlatıldığı cihazı hatırlar. Yalnızca bu cihaz gelecekte alarm alabilir.

Sensöre ilk bağlantı kurulumu kritiktir. LibreLink uygulaması, sensörle her 30 saniyede bir kablosuz bağlantı kurmaya çalışır. Bir veya daha fazla zorunlu ayar eksikse, bunların ayarlanması gerekir. Bunu yapmak için zaman sınırınız yok. Sensör sürekli olarak bağlantı kurmaya çalışır. Birkaç saat sürse bile. Sabırlı olun ve sensörü değiştirmeyi düşünmeden önce farklı ayarlar deneyin.

LibreLink'in başlangıç ekranının sol üst köşesinde kırmızı bir ünlem işareti ("!") gördüğünüz sürece, bağlantı yoktur veya LibreLink'in alarm sinyali vermesini engelleyen başka bir ayar yoktur. Lütfen sesin etkin olup olmadığını ve her türlü uygulama engelleme bildiriminin devre dışı bırakılıp bırakılmadığını kontrol edin. Ünlem işareti kaybolduğunda bağlantı kurulmalı ve akıllı telefona kan şekeri değerleri gönderilmelidir. Bu en fazla 5 dakika içerisinde gerçekleşmelidir.

.. image:: ../images/Libre2_ExclamationMark.png
  :alt: LibreLink bağlantı yok
  
Ünlem işareti kalıyorsa veya bir hata mesajı alıyorsanız, bunun birkaç nedeni olabilir:

- Android konum hizmeti verilmedi - lütfen sistem ayarlarında etkinleştirin
- Otomatik saat ve saat dilimi ayarlanmadı - lütfen ayarları uygun şekilde değiştirin
- Alarmları etkinleştirin - LibreLink'te üç alarmdan en az biri etkinleştirilmelidir
- Bluetooth kapalı - lütfen açın
- Ses engellenmiş
- Uygulama bildirimleri engellenmiş
- Kilit ekranı bildirimleri engellenmiş 
- LOT numarası 'K' ile başlayan 8 basamaklı Libre 2 sensörünüz hatalı. Bunu sensörün sarı ambalajının üzerinde basılı olarak bulabilirsiniz. Bu sensörler bluetooth üzerinde çalışmadıkları için değiştirilmeleri gerekiyor.

Telefonu yeniden başlatmak yardımcı olabilir, bunu birkaç kez yapmanız gerekebilir. Bağlantı kurulur kurulmaz kırmızı ünlem işareti kaybolur ve en önemli adım aşılmış olur. Sistem ayarlarına bağlı olarak ünlem işareti kalabilir ancak yine de okumalar alabilirsiniz. Her iki durumda da sıkıntı yok endişelenmeyin. Sensör ve telefon artık bağlı, her dakikada bir kan şekeri değeri iletiliyor.

.. image:: ../images/Libre2_Connected.png
  :alt: LibreLink bağlantısı kuruldu
  
Nadir durumlarda, bluetooth önbelleğini boşaltma ve/veya sistem menüsü aracılığıyla tüm ağ bağlantılarını sıfırlama yardımcı olabilir. Bu, uygun bir bluetooth bağlantısı kurmaya yardımcı olabilecek tüm bağlı bluetooth cihazlarını kaldırır. Bu prosedür, yamalı LibreLink uygulaması tarafından başlatılan sensör hatırlandığından kaydedilir. Burada ek bir şey yapılması gerekmez. Yamalı uygulamanın sensöre bağlanmasını bekleyin.

Başarılı bir bağlantıdan sonra gerekirse akıllı telefon ayarları değiştirilebilir. Bu önerilmez, ancak güç tasarruf modunu açmak isteyebilirsiniz. Konum servisi kapatılabilir, ses seviyesi sıfırlanabilir veya alarmlar tekrar kapatılabilir. Kan şekeri seviyeleri yine de aktarılır.

Ancak bir sonraki sensör başlatılırken tüm ayarlar yeniden yapılmalıdır!

Açıklama: Yamalı uygulama, bir bağlantıyı etkinleştirmek için bir saat ısınmadan sonra belirlenen zorunlu ayarlara ihtiyaç duyar. 14 günlük çalışma süresi içinde bunlara ihtiyaç yoktur. Çoğu durumda, bir sensörü başlatmakla ilgili sorunlarınız olduğunda, konum hizmeti kapatılmıştır. Android telefonlarda, bağlanmak için uygun bluetooth prosedürü(!) gereklidir. Lütfen Google'ın Android dokümantasyonuna bakın.

14 gün boyunca, NFC ile tarama için orijinal LibreLink uygulamasını çalıştıran bir veya daha fazla NFC özellikli akıllı telefonu (okuyucu cihazı değil!) paralel olarak kullanabilirsiniz. Bunu başlatmak için herhangi bir zaman sınırlaması yoktur. Örneğin, 5. gün ya da sonrasına bir paralel telefon kullanabilirsiniz. Paralel telefon(lar) kan şekeri değerlerini Abbott Cloud'a (LibreView) yükleyebilir. LibreView, diyabet ekibiniz için raporlar oluşturabilir. Buna ihtiyacı olan birçok ebeveyn olduğunu biliyoruz. 

İzlemeyi önlemek için orijinal yamalı uygulamanın **internet bağlantısı** olmadığını lütfen unutmayın.

Ancak, etkin internet erişimi ile LibreView'ı destekleyen yamalı uygulamanın bir çeşidi vardır. Lütfen verilerinizin buluta aktarıldığını unutmayın. Ancak diadoc aracınız ve raporlama zinciriniz o zaman tam olarak desteklenir. Bu varyantla, çalışan bir sensörün alarmlarını, sensörü başlatmamış farklı bir cihaza taşımak da mümkündür. Google'dan diyabetle ilgili Alman forumlarında bunun nasıl yapılabileceğini araştırabilirsiniz.


2. Adım: xDrip+ uygulamasını kurun ve yapılandırın
==================================================

Kan şekeri değerleri akıllı telefonda xDrip+ uygulaması tarafından alınır. 

* Henüz kurmadıysanız, xDrip+ uygulamasını indirin ve `buradan <https://github.com/NightscoutFoundation/xDrip/releases>`_ en son derlemelerden birini yükleyin.
* xDrip+'da veri kaynağı olarak "Libre2 (Yamalı uyg)" öğesini seçin
* Gerekirse, Gelişmiş Ayarlar->Ekstra Günlük Ayarları->Günlük için ekstra etiketler altında "BgReading:d,xdrip libre_receiver:v" girin. Bu, sorun giderme için ek hata mesajlarını günlüğe kaydeder.
* xDrip+'da Ayarlar > Uyg.lar-arası ayarlar > Verileri Yerel Olarak Yayınla'ya gidin ve AÇ'ı seçin.
* xDrip+'da Ayarlar > Uyg.lar-arası ayarlar > Tedaviyi Kabul Et'e gidin ve KAPALI'yı seçin.
* AAPS'nin xDrip+'tan kan şekeri düzeylerini (sürüm 2.5.x ve üstü) almasını sağlamak için lütfen `Ayarlar > Uyg.lar-arası ayarlar > Alıcıyı Tanımla "info.nightscout.androidaps" öğesini ayarlayın <../Configuration/xdrip.html#identify-receiver> `_
* AndroidAPS'i kalibre etmek için kullanmak istiyorsanız, xdrip'te Ayarlar > Uyg.lar-arası ayarlar > Kalibrasyonları Kabul Et'e gidin ve AÇIK'ı seçin.  Ayarlar > Gelişmiş Ayarlar > Gelişmiş Kalibrasyon Ayarları'ndaki seçenekleri de gözden geçirmek isteyebilirsiniz.

.. image:: ../images/Libre2_Tags.png
  :alt: xDrip LibreLink oturum açma

Adım 3: Sensörü başlatın
==================================================

xDrip'te sensörü "Sensörü başlat" ve "bugün değil" ile başlatın. 

Aslında bu, herhangi bir Libre2 sensörünü fiziksel olarak başlatmaz (sensörü ya kendi cihazı ya da nfc özellikli bi telefon ve librelink uygulaması ile başlatmanız gerekir.) Bu sadece xDrip+'ın yeni bir sensörün kan şekeri seviyelerini ilettiğini anlamak içindir. Varsa, ilk kalibrasyon için iki ölçümlü glikometre değeri girin. Şimdi kan şekeri değerleri her 5 dakikada bir xDrip+'da görüntülenmelidir. Atlanan değerler, ör. telefonunuzdan çok uzakta olduğunuz zamanlar için, doldurulmayabilr.

Bir sensör değişikliğinden sonra xDrip+ yeni sensörü otomatik olarak algılar ve tüm kalibrasyon verilerini siler. Aktivasyondan sonra kanlı KŞ'nizi kontrol edebilir ve yeni bir başlangıç kalibrasyonu yapabilirsiniz.

Adım 4: AndroidAPS'i yapılandırın (döngü için)
==================================================
* AndroidAPS'de Konfigürasyon ayarları > KŞ Kaynağı'na gidin ve 'xDrip+' seçeneğini işaretleyin 
* Telefon uçak modundayken AndroidAPS KŞ değerlerini almıyorsa, 'xDrip+ ayarlar sayfasında <../Configuration/xdrip.html#identify-receiver>'_ açıklandığı gibi 'Alıcıyı tanımla'yı kullanın.

Halihazırda, Libre 2'i KŞ kaynağı olarak kullanıyorsanız, SMB algoritmasında "SMB'yi her zaman etkinleştir" ve "Karbonhidrattan sonra SMB'yi etkinleştir"i işaretleyemezsiniz. Libre 2'in KŞ değerleri, bu seçenekleri güvenle kullanmak için yeterince düzgün değildir. Daha fazla ayrıntı için `Kan şekeri verilerini yumuşatma <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html>`_ bölümüne bakın.

Deneyimler ve Sorun Giderme
==================================================

Bağlantı
--------------------------------------------------
Bağlantı son derecede iyi. Huawei cep telefonları hariç, mevcut tüm akıllı telefonlar iyi çalışıyor gibi görünüyor. Bağlantı kaybı durumunda yeniden bağlanma oranı harika görünüyor. Cep telefonu sensörün karşısındaki cepteyse veya dışarıdaysanız bağlantı kopabilir. Bahçe ile uğraşırken, telefonu sensörlü taraftaki cebe koyarım. Bluetooth'un yansımalar üzerinden yayıldığı odalarda herhangi bir sorun yaşanmamalıdır. Bağlantı sorunlarınız varsa lütfen başka bir telefonda test edin. Sensörü dahili BT anteni aşağı bakacak şekilde ayarlamak da yardımcı olabilir. Sensörü ayarlarken aplikatör üzerindeki yarık aşağıyı göstermelidir.

Değer yumuşatma ve ham değerler
--------------------------------------------------
Teknik olarak mevcut kan şekeri değeri her dakika xDrip+'a iletilir. Ağırlıklı ortalama bir filtre, son 25 dakika boyunca düzleştirilmiş bir değer hesaplar. Bu döngü için zorunludur. Eğriler pürüzsüz görünüyor ve döngü sonuçları harika. Alarmların dayandığı ham değerler biraz daha oynak olabilir, ancak okuyucunun gösterdiği değerlere karşılık gelir. Ayrıca hızlı değişimlere zamanında tepki verebilmek için ham değerler xDrip+ grafiğinde görüntülenebilir. Lütfen Xdrip+'ta Ayarlar > Gelişmiş Ayarlar > Libre2 için Gelişmiş Ayarlar > "Ham değerleri göster" ve "Sensör Bilgilerini göster"i açın. Daha sonra ham değerler grafikte küçük beyaz noktalar olarak görüntülenir ve sistem menüsünde ek sensör bilgileri bulunur.

Kan şekeri hızlı hareket ettiğinde ham değerler çok faydalıdır. Noktalar daha atlamalı olsa bile, doğru tedavi kararlarını vermek için düzleştirilmiş çizgiyi kullanarak eğilimi çok daha iyi saptarsınız.

.. image:: ../images/Libre2_RawValues.png
  :alt: xDrip+ gelişmiş ayarlar Libre 2 ve ham değerler

Sensör çalışma zamanı
--------------------------------------------------
Sensör çalışma süresi 14 gün olarak sabitlenmiştir. Libre1'deki 12 ekstra saat artık mevcut değil. xDrip+, başlangıç zamanı gibi sistem menüsünde Libre2 için Gelişmiş Ayarlar > "Sensör Bilgilerini Göster"i etkinleştirdikten sonra ek sensör bilgilerini gösterir. Kalan sensör süresi, yamalı LibreLink uygulamasında da görülebilir. Ya ana ekranda kalan gün sayısı olarak ya da "Yeni sensör bulundu" altındaki üç noktalı menü->Yardım->Olay günlüğü altında sensör başlangıç zamanı olarak görebilirsiniz.

.. image:: ../images/Libre2_Starttime.png
  :alt: Libre 2 başlangıç zamanı

Yeni sensör
--------------------------------------------------
Anında sensör değişimi gerçekleştirmek için: Aktivasyondan kısa bir süre önce yeni sensör ayarlayın. xDrip+ eski sensörden daha fazla veri alamadığı zaman, yamalı uygulama ile yeni sensörü başlatın. Bir saat sonra xDrip+'ta yeni değerler otomatik olarak görünmelidir. 

Değilse, lütfen telefon ayarlarını kontrol edin ve ilk başlatmada olduğu gibi devam edin. Zaman sınırınız yok. Doğru ayarları bulmaya çalışın. Farklı kombinasyonları denemeden önce sensörü hemen değiştirmenize gerek yok. Sensörler sağlamdır ve kalıcı olarak bir bağlantı kurmaya çalışır. Lütfen acele etmeyin. Çoğu durumda, daha önce değiştirdiğiniz bir ayar şimdi sorunlara neden oluyor. 

Başarılı okumalardan sonra lütfen xDrip'te "Sensör Durdurma" ve "Yalnızca kalibrasyonu sil"i seçin. Bunu, xDrip+ için yeni bir sensörün kan şekeri seviyelerini ayarlamak ve eski kalibrasyonların artık geçerli olmadığı ve bu nedenle silinmeleri gerektiği için yaparız. Burada Libre2 sensörü ile fiziksel bir etkileşim yapılmaz! Sensörü xDrip+'da başlatmanız gerekmez.

.. image:: ../images/Libre2_GapNewSensor.png
  :alt: Libre 2 sensörünü değiştirirken xDrip+'ta eksik veri

Kalibrasyon
--------------------------------------------------
Libre2'yi -40 mg/dl ila +20 mg/dL [-2,2 mmol/l ila +1,1 mmol/l] ile kalibre edebilirsiniz. Libre2, Libe1'e kıyasla çok daha doğru olduğu için eğimi değiştiremezsiniz. Lütfen yeni bir sensör yerleştirdikten sonra glikometre ile parmaktan ölçüm yapın. Kan ölçümlerinde büyük farklılıklar olabileceği bilinmektedir. Güvenilir olması için her 24 - 48 saatte bir kalibre edin. Ölçümler sensörün bitimine kadar doğrudur ve Libre1'de olduğu gibi titreme yapmaz. Ancak sensör tamamen kapandıysa bu değişmeyecektir. Sensör derhal değiştirilmelidir.

Olası kontroller
--------------------------------------------------
Libre2 sensörleri, hatalı sensör değerlerini tespit etmek için uygunluk kontrolleri içerir. Sensör kol üzerinde hareket ettiğinde veya hafifçe kaldırıldığında değerler dalgalanmaya başlayabilir. Libre2 sensörü daha sonra güvenlik nedenleriyle kapanacaktır. Ne yazık ki, Uygulama ile tarama yapılırken ek kontroller yapılır. Sensör iyi durumda olsa bile uygulama sensörü devre dışı bırakabilir. Şu anda dahili test çok katı. Taramayı (kendi uygulaması ile) tamamen durdurdum ve o zamandan beri bir hata yaşamadım.

Zaman diliminde seyahat
--------------------------------------------------
Diğer `zaman dilimlerine <../Usage/Timezone-traveling.html>`_ seyahatte döngü için iki strateji vardır: 

Bunlar, 

1. Akıllı telefon saatini değiştirmeden bırakın ve bazal profili değiştirin (akıllı telefon uçuş modunda) veya 
2. Pompa geçmişini silin ve akıllı telefon saatini yerel saatle değiştirin. 

Yöntem 1 seyahat ettiğiniz yerde yeni bir Libre2 sensörü ayarlamak zorunda olmadığınız sürece harikadır. Şüpheniz varsa veya özellikle seyahatiniz daha uzun sürecekse yöntem 2'yi seçin. Yeni bir sensör ayarlarsanız, otomatik saat dilimi ayarlanmalıdır, bu nedenle 1. yöntem uygun olmaz. Eğer başka bir yere seyahat ettiyseniz, lütfen bu kontrolleri seyahat esnasında ya da daha önce yapın, aksi takdirde hızlı bir şekilde problemlerle karşılaşabilirsiniz.

Deneyimler
--------------------------------------------------
Sonuçta, piyasadaki en küçük CGM sistemlerinden biridir. Küçük, verici gerekmez ve çoğunlukla dalgalanmalar olmadan doğru değerlere ulaşırsınız. Yaklaşık 12 saatlik alıştırma aşamasından sonra, sapmalar tipik olarak 30 mg/dl'den (1,7 mmol/l), 10 mg/dl'ye (0,6 mmol/l) düşer. En iyi sonuçlar kolun arka kısmında alınır, vücudun diğer noktalarında dikkatli olun! Islatma için bir gün önceden yeni bir sensör yerleştirmenize gerek yok. Bu, sensörün iç seviyeleme mekanizmasını bozar.

Zaman zaman kan değerlerinden yanlış ölçen kötü sensörler var gibi görünüyor. Bu şekilde kalırsa bu sensörler derhal değiştirilmelidir.

Sensör cilt üzerinde biraz hareket ederse veya bir şekilde kaldırılırsa bu kötü sonuçlara neden olabilir. Dokuya oturan filament dokudan biraz dışarı çıkar ve o zaman sensör farklı sonuçlar ölçecektir. Büyük olasılıkla, xDrip+'da atlama değerler göreceksiniz. Ya da KŞ değerleri farklı olacaktır. Lütfen en kısa sürede sensörü değiştirin! Yanlış KŞ değerleri alıyorsunuz.

Bluetooth verici ve OOP kullanma
==================================================

Bluetooth vericisi, Libre2 ile en son xDrip sürümü ve Libre2 OOP uygulaması ile kullanılabilir. Libre 1'de olduğu gibi her 5 dakikada bir kan şekeri ölçümleri alabilirsiniz. Açıklama için lütfen miaomiao web sitesine bakın. Bu, Bubble cihazıyla ve gelecekte diğer verici cihazlarıyla da çalışacaktır. Bluconun da çalışması gerekir, ancak henüz test edilmemiştir.

Eski Libre1 verici cihazları, Libre2 OOP ile kullanılamaz. Düzgün çalışması için daha yeni bir sürümle değiştirilmeleri veya bir ürün yazılımı yükseltmesine sahip olmaları gerekir. En yeni bellenime sahip MM1 ne yazık ki henüz çalışmıyor - şu anda temel neden aranıyor.

Libre2 OOP, NFC taraması yoluyla orijinal okuyucu veya LibreLink uygulaması ile aynı KŞ okumalarını oluşturuyor. Libre 2 ile AAPS, belirli atlamaları önlemek için 25 dakikalık bir yumuşatma yapar. OOP, son 5 dakikanın ortalaması ile her 5 dakikada bir okuma üretir. Bu nedenle, KŞ okumaları o kadar düzgün değildir, ancak orijinal okuyucu cihazla eşleşir ve "gerçek" KŞ okumalarını daha hızlı takip eder. OOP ile döngü yapmaya çalışırsanız, lütfen xDrip+'daki tüm yumuşatma ayarlarını etkinleştirin.

Droplet vericisi de Libre2 ile çalışıyor ancak bunun yerine bir internet hizmeti kullanıyor. Please refer to FB or a search engine to get further information. The MM2 with the tomato app also seems to use an internet service. For both devices you have to take care to have a proper internet connection to get your BG readings.

Even if the patched LibreLink app approach is smart there may be some reasons to use a bluetooth transmitter:

* the BG readings are identical to the reader results
* the Libre2 sensor can be used 14.5 days as with the Libre1 before 
* 8 hours Backfilling is fully supported.
* get BG readings during the one hour startup time of a new sensor

Remark: The transmitter can be used in parallel to the LibreLink app. It doesn't disturb the patched LibreLink app operation.

Remark #2: The OOP algorithm cannot be calibrated yet. This will be changed in the future.


Best practices for calibrating a libre 2 sensor
==================================================

To get the best results when calibrating a libre 2 sensor there are some “rules” you should follow.
They apply independently of the software combination (e.g. patched libre-app, oop2, …) that is used to handle the libre 2 values.

1.	The most important rule is to only calibrate the sensor when you have a flat bg level for at least 15 minutes. The delta between the last three readings should not exceed 10 mg/dl (over 15min not between each reading). As the libre 2 does not measure your blood glucose level but your flesh glucose level there is some time lag especially when bg level is rising or falling. This time lag can lead to way too large calibration offsets in unfavourable situations even if the bg level rise / fall is not that much. So whenever possible avoid to calibrate on rising or falling edges.  -> If you have to add a calibration when you do not have a flat bg level (e.g. when starting a new sensor) it is recommended to remove that calibration(s) as soon as possible and add a new one when in flat bg levels. 
2.	Actually this one is automatically taken into account when following rule 1 but to be sure: When doing comparison measurements your bg level should also be flat for about 15min. Do not compare when rising or falling. Important: You still shall do blood glucose measurements whenever you desire, just don’t use the results for calibration when rising or falling!
3.	As calibrating the sensor in flat levels is a very good starting point it is also strongly recommended to calibrate the sensor only within your desired target range like 70 mg/dl to 160 mg/dl. The libre 2 is not optimized to work over a huge range like 50 mg/dl to 350 mg/dl (at least not in a linear manner), so try to only calibrate when within your desired range. -> Simply accept that values outside your calibration range will not perfectly match blood glucose levels.
4.	Do not calibrate too often. Calibrating the sensor very often mostly leads to worse results. When the sensor delivers good results in flat conditions just don’t add any new calibration as it does not have any -useful- effect. It should be sufficient to recheck the status every 3-5 days (of course also in flat conditions). 
5.	Avoid calibration when not required. This might sound silly but it is not recommended to add a new calibration if the blood glucose to flesh glucose level difference is only ±10 mg/dl (e.g. blood glucose level: 95, Libre sensor 100 -> do NOT add the 9l, blood glucose level: 95, Libre sensor 115 -> add the 95 to be taken into account for the calibration) 

Some general  notes:
After activating a new sensor and at the sensor’s end of life it does make sense to do comparison measurements more often than 3-5 days as stated in rule nr. 4. For new and old sensors it is more likely that the raw values change and a re-calibration is required.  
From time to time it happens that a sensor does not provide valid values. Most likely the sensor value is way to low compared to the actual blood glucose level (e.g. sensor: 50 mg/dl, bg: 130 mg/dl) even after calibrating. If this is the case the sensor cannot be calibrated to report useful results. E.g. when using the patched libre app one can add an offset of maximal +20 mg/dl. When it happens to you that the sensor does provides way too low values, don’t hesitate to replace it as it will not get better.
Even if it might be a defective sensor, when seeing sensors that do provide way too low values very often, try to use different areas to place your sensor. Even in the official area (upper arm) there might be some locations where the sensors just do not provide valid values. This is some kind of trial end error to find areas that work for you.  

