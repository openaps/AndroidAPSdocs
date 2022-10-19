Freestyle Libre 3
**************************************************

Freestyle Libre 3 sistemi, tehlikeli kan şekeri düzeylerini otomatik olarak bildirebilir. Libre3 Sensörü, mevcut kan şekeri seviyesini her dakika bir alıcıya (okuyucu veya akıllı telefon) gönderir. Alıcı, gerekirse bir alarmı tetikler. Değiştirilmiş bir LibreLink uygulaması, Juggluco uygulaması ve xDrip+ uygulaması ile kan şekeri seviyenizi akıllı telefonunuzda sürekli olarak alabilir ve görüntüleyebilirsiniz. Sensör belleğinden daha eski verileri almak bile mümkündür ( iki saatlik, dakikalık glikoz ve iki haftada bir 5 dakikalık geçmiş verileri). Bu Juggluco'ya gönderilir.

Sensör, glikometre ölçümleri ve sensör okumaları arasındaki farkları ayarlamak için -40 mg/dl ila +20 mg/dl (-2,2 mmol/l ila +1,1 mmol/l) aralığında kalibre edilebilir.

Mevcut sınırlamalar
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  Bu çözümün Freestyle Libre 3 sensörlerinin ABD versiyonuyla çalışıp çalışmadığı şu anda doğrulanmadı!
- Uygulama sadece arm64 sistemleri (64 bit sistemler) için çalışacaktır. Çoğu modern telefon desteklenir. Emin değilseniz, yamayı yüklemeyi ve uygulamayı başlatmayı deneyin.
-  If you have a rooted system, you need to cover the root. Here you got some instructions: `link <https://www.reddit.com/r/Freestylelibre/comments/s22vlr/comment/hw2p4th/?utm_source=share&utm_medium=web2x&context=3>`_.
- Juggluco (libre3 okumalarını almak için gerekli uygulama) yalnızca İngilizce, Felemenkçe ve İtalyanca dillerini desteklemektedir. Yamalı Libre3 uygulaması şunları destekler: ar, de, es, fr, hi, in, it, ja, ko, my, nl, pt, ru, th, tr ve vi.

Adım 1: Yamalı LibreLink-App'i indirin ve kurun
==================================================

Yamalı .apk dosyasını `buradan indirin <https://github.com/maheini/FreeStyle-Libre-3-patch/raw/main/Patched%20Apk/Libre%203_v3.3.0_apkfab.com.apk>`_ veya ` buradan <https://apkfab.com/libre-3/com.freestylelibre3.app.de/apk?h=142cfbb2e0b1f10cd280408b10c5a5127e46e00e78d7775dae382529921487e9>`_ ve telefonunuza yükleyin.

Uygulamayı telefonunuza başarıyla yükledikten sonra uygulamayı açın. Aşağıdaki gibi bir uyarı görürseniz, görmezden gelebilirsiniz. (Uygulama herhangi bir AB sensörüyle çalışıyor)

.. image:: ../images/libre3/step_1.jpg
   :alt: LibreLink uyarısı

“Hesap Oluştur” ekranındaysanız, LibreView hesabı oluşturma seçeneğiniz vardır. Bir sensörü farklı bir uygulamayla yeniden etkinleştirme olanağına sahip olduğunuz için bu iyi bir seçenek olabilir. Ayrıca KŞ verilerini LibreView ile paylaşmanıza da olanak tanır. Beğenmediysen sağ üstteki "Atla"ya bas.

.. image:: ../images/libre3/step_2.jpg
   :alt: LibreView hesabı

Lütfen bu ekranda Ölçü Biriminizi seçin. Daha sonra da değiştirebilirsiniz.

.. image:: ../images/libre3/step_3.jpg
   :alt: Ölçü Birimi seçimi

"Pil optimizasyonunu yoksay mı?" diye soran bir Pop-up'ınız varsa, "İZİN VER" seçeneğini tıklayın. Bu Libre3 uygulamasının arka planda çalışmasını sağlar.

.. image:: ../images/libre3/step_4.jpg
   :alt: Pil optimizasyonlarını devre dışı bırak

Şimdi Libre3 uygulamasını kurmuş olmalısınız. Juggluco bağlantısı ile devam edelim

Adım 2: Libre3'ü Juggluco ile bağlayın
==================================================

Libre3 kenar çubuğunu açın ve Juggluco'yu seçin.

.. image:: ../images/libre3/step_5.jpg
   :alt: Juggluco menüsü

Juggluco menüsünde, "Port"un 7117 olarak ayarlandığından emin olun ve alttaki "Bağlantı Ekle"ye tıklayın.

.. image:: ../images/libre3/step_6.jpg
   :alt: Juggluco'ya genel bakış

Şimdi aşağıdaki resme göre her şeyi doldurun:

.. image:: ../images/libre3/step_7.jpg
   :alt: Libre Juggluco kurulumu

Bitirdiyseniz, ayarlarınızı onaylamak için “Kaydet”e tıklayın. Harika, şimdi Libre3 uygulamasını kapatabilirsiniz!

3. Adım: Juggluco'yu Kurun
==================================================

`Juggluco uygulamasını indirin ve yükleyin
GooglePlay <https://play.google.com/store/apps/details?id=tk.glucodata&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1>`_.

Şimdi uygulamayı açalım. Aşağıdaki ekran ile karşılaşacaksınız. “Sensörsüz” düğmesine tıklamanız yeterlidir.

.. image:: ../images/libre3/step_8.jpg
   :alt: Juggluco karşılama ekranı

Bundan sonra kısa bir tanıtım metni alırsınız. "Tamam"ı tıklayın.

.. image:: ../images/libre3/step_9.jpg
   :alt: Juggluco tanıtım ekranı

Tamam, Juggluco'yu kuralım! Uygulamanın kendisi en iyi Arayüze sahip değil, ancak çok kullanışlı bir uygulama. Ayarları açmak için sol üst ekranda herhangi bir yere tıklayın. Şimdi bu menüyü aşağıda görmelisiniz. “Ayarlar”ı seçin.

.. image:: ../images/libre3/step_10.jpg
   :alt: Juggluco ayarları menüsü

Ayarlar içinde, xDrip ile veri bağlantısını yapılandırabilirsiniz. "xDrip'e Gönder"e tıklayın ve "Tamam"a basın.

.. image:: ../images/libre3/step_11.jpg
   :alt: Juggluco ayarları

Juggluco uygulamasında sol üst ortadaki kısma basın. Yeni bir menü açılmalıdır. Please select “Mirror”.

.. image:: ../images/libre3/step_12.jpg
   :alt: Juggluco connection menu

You should see this screen. Please check the port settings on the top right corner, which should be set to "8795" and after that, tap on "Add Connection". (Keep in mind, within the Juggluco app the ports are switched) 

.. image:: ../images/libre3/step_13.jpg
   :alt: Juggluco connection screen

Now let’s fill in all the settings as shown below and your password according to your Libre3 password. If you did that - press “Save” to confirm.

.. image:: ../images/libre3/step_14.jpg
   :alt: Juggluco connection settings

Well done! You can now try to press the “Sync” button within the previous menu. After some time, Juggluco should receive the blood glucose values automatically from Libre3 app.

Now start the Libre3 sensor with the patched app by simply scanning the sensor. Tüm ayarların doğru yapıldığından emin olun. You can use a sensor that was already used with the original Libre3 app if you specify the same LibreView account name. You have to press "Start New Sensor" and  scan the sensor. If you want to go back to the unpatched Libre 3 app, you have to do the same.

Başarılı sensör başlatma için zorunlu ayarlar:

-  NFC etkin / BT etkin
-  memory and location permission enabled
-  location service enabled
-  automatic time and time zone setting
-  set at least one alarm in the patched app

Konum hizmetinin merkezi bir ayar olduğunu lütfen unutmayın. Bu, ayrıca ayarlanması gereken uygulama konumu izni değildir!

Step 4: Finally set up xDrip
==================================================

Kan şekeri değerleri akıllı telefonda xDrip+ uygulaması tarafından alınır. 

* Henüz kurmadıysanız, xDrip+ uygulamasını indirin ve `buradan <https://github.com/NightscoutFoundation/xDrip/releases>`_ en son derlemelerden birini yükleyin.
* xDrip+'da veri kaynağı olarak "Libre2 (Yamalı uyg)" öğesini seçin
* Gerekirse, Gelişmiş Ayarlar->Ekstra Günlük Ayarları->Günlük için ekstra etiketler altında "BgReading:d,xdrip libre_receiver:v" girin. Bu, sorun giderme için ek hata mesajlarını günlüğe kaydeder.
* xDrip+'da Ayarlar > Uyg.lar-arası ayarlar > Verileri Yerel Olarak Yayınla'ya gidin ve AÇ'ı seçin.
* xDrip+'da Ayarlar > Uyg.lar-arası ayarlar > Tedaviyi Kabul Et'e gidin ve KAPALI'yı seçin.
* AAPS'nin xDrip+'tan kan şekeri düzeylerini (sürüm 2.5.x ve üstü) almasını sağlamak için lütfen `Ayarlar > Uyg.lar-arası ayarlar > Alıcıyı Tanımla "info.nightscout.androidaps" öğesini ayarlayın <../Configuration/xdrip.html#identify-receiver> `_
* AndroidAPS'i kalibre etmek için kullanmak istiyorsanız, xdrip'te Ayarlar > Uyg.lar-arası ayarlar > Kalibrasyonları Kabul Et'e gidin ve AÇIK'ı seçin.  Ayarlar > Daha Az Ortak Ayarlar > Gelişmiş Kalibrasyon Ayarları'ndaki seçeneklerini de gözden geçirmek isteyebilirsiniz.

.. image:: ../images/Libre2_Tags.jpg
  :alt: xDrip LibreLink oturum açma

Adım 5: Sensörü xDrip içinde başlatın
==================================================

xDrip'te sensörü "Sensörü başlat" ve "bugün değil" ile başlatın. 

Aslında bu, herhangi bir Libre2 sensörünü fiziksel olarak başlatmaz (sensörü ya kendi cihazı ya da nfc özellikli bi telefon ve librelink uygulaması ile başlatmanız gerekir.) Bu sadece xDrip+'ın yeni bir sensörün kan şekeri seviyelerini ilettiğini anlamak içindir. Varsa, ilk kalibrasyon için iki ölçümlü glikometre değeri girin. Şimdi kan şekeri değerleri her 5 dakikada bir xDrip+'da görüntülenmelidir. Atlanan değerler, ör. telefonunuzdan çok uzakta olduğunuz zamanlar için, doldurulmayabilr.

Bir sensör değişikliğinden sonra xDrip+ yeni sensörü otomatik olarak algılar ve tüm kalibrasyon verilerini siler. Aktivasyondan sonra kanlı KŞ'nizi kontrol edebilir ve yeni bir başlangıç kalibrasyonu yapabilirsiniz.

Adım 6: AndroidAPS'i yapılandırın (döngü için)
==================================================

* AndroidAPS'de Konfigürasyon ayarları > KŞ Kaynağı'na gidin ve 'xDrip+' seçeneğini işaretleyin 
* Telefon uçak modundayken AndroidAPS KŞ değerlerini almıyorsa, 'xDrip+ ayarlar sayfasında <../Configuration/xdrip.html#identify-receiver>'_ açıklandığı gibi 'Alıcıyı tanımla'yı kullanın.

Halihazırda, Libre 2'i KŞ kaynağı olarak kullanıyorsanız, SMB algoritmasında "SMB'yi her zaman etkinleştir" ve "Karbonhidrattan sonra SMB'yi etkinleştir"i işaretleyemezsiniz. Libre 2'in KŞ değerleri, bu seçenekleri güvenle kullanmak için yeterince düzgün değildir. Daha fazla ayrıntı için `Kan şekeri verilerini yumuşatma <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html>`_ bölümüne bakın.

Deneyimler ve Sorun Giderme
==================================================

Sorun Giderme Libre3'de okuma yok
--------------------------------------------------

-  Android location service is not granted - please enable it in the system settings
-  automatic time and time zone not set - please change the settings accordingly
-  Bluetooth is switched off - please switch on

Sorun Giderme Libre3 -> Juggluco bağlantısı
--------------------------------------------------

-  Libre3'ün herhangi bir okuma alıp almadığından emin olun
-  Ayarlarınızı ve şifrenizi tekrar kontrol edin
- Libre3 içinde “Sync” ->Juggluco ve “Sync” ve “Reinit” Juggluco->Mirror düğmesine tıklayın
- Bazen her şeyi yapılandırdıktan sonra Libre3'ü kapatmaya zorlamanız ve yeniden başlatmanız gerekebilir.
- Bir süre bekleyin veya Juggluco'yu zorla kapatmaya çalışın
-  Older versions of Juggluco (below 2.9.6) will not send back-filled data from the Libre3 sensor to connected devices (for example Juggluco on WearOS.) It is possible that you have to press "Resend Data" on within the patched Libre 3 app (Juggluco menu) for this.

Daha fazla yardım
--------------------------------------------------

Orijinal talimatlar: `jkaltes web sitesi <http://jkaltes.byethost16.com/Juggluco/libre3/>`_

Ek Github deposu: `Github bağlantısı <https://github.com/maheini/FreeStyle-Libre-3-patch>`_