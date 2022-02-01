Freestyle Libre 1
**************************************************

Libre'nizi her 5 dakikada bir yeni KŞ değerleri alan bir CGM olarak kullanmak için öncelikle aşağıdaki gibi bir NFC - Bluetooth adaptörü satın almanız gerekir:

* MiaoMiao Okuyucu (sürüm 1 veya 2) `https://www.miaomiao.cool/ <https://www.miaomiao.cool/>`_
* Blucon Nightrider `https://www.ambrosiasys.com/our-products/blucon/ <https://www.ambrosiasys.com/our-products/blucon/>`_
* Bubble `https://bubbleshop.eu/ <https://bubbleshop.eu/>`_ veya Rus kullanıcılar için `https://vk.com/saharmonitor/ <https://vk.com/saharmonitor/> `_  

Ek olarak, NFC çipine sahip Sony Smartwatch 3 saatini, NFC toplayıcı olarak kullanmak da mümkündür. Bununla birlikte, yukarıda listelenen özel NFC - Bluetooth adaptörleri daha az karmaşıktır ve Libre 1'lerini CGM olarak kullanmak isteyenlerin çoğunluğu tarafından kullanılılır.

* Sony Smartwatch 3 (SWR50) `https://github.com/pimpimmi/LibreAlarm/wiki/ <https://github.com/pimpimmi/LibreAlarm/wiki/>`_

Halihazırda, Libre 1'i KŞ kaynağı olarak kullanıyorsanız, SMB algoritmasında "SMB'yi her zaman etkinleştir" ve "Karbonhidrattan sonra SMB'yi etkinleştir"i işaretleyemezsiniz. Libre 1'in KŞ değerleri, bu seçenekleri güvenle kullanmak için yeterince düzgün değildir. Daha fazla ayrıntı için `Kan şekeri verilerini yumuşatma <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html>`_ bölümüne bakın.

xDrip+ kullanılıyorsa
==================================================
* Henüz kurmadıysanız, xDrip+'ı indirin ve `LimiTTEer <https://github.com/JoernL/LimiTTer>`_ veya `Libre Alarm <https://github.com/pimpimmi/LibreAlarm/wiki>` _. ile ilgili talimatları izleyin.
* xDrip+'da Ayarlar > Uyg.lar-arası ayarlar > Verileri Yerel Olarak Yayınla'ya gidin ve AÇ'ı seçin.
* xDrip+'da Ayarlar > Uyg.lar-arası ayarlar > Tedaviyi Kabul Et'e gidin ve KAPALI'yı seçin.
* AndroidAPS'i kalibre etmek için kullanmak istiyorsanız, xdrip'te Ayarlar > Uyg.lar-arası ayarlar > Kalibrasyonları Kabul Et'e gidin ve AÇIK'ı seçin.  Ayarlar > Gelişmiş Ayarlar > Gelişmiş Kalibrasyon Ayarları'ndaki seçenekleri de gözden geçirmek isteyebilirsiniz.
* Konfigürasyon ayarlarında (AndroidAPS'de) xDrip+'ı seçin.
* Ekran görüntülü xDrip+ ayarları için `xDrip+ ayarlar sayfasına <../Configuration/xdrip.html>`__ bakın. Temel xDrip ayarları ve Freestyle Libre xDrip ayarları için bir bölüm mevcuttur.
* Telefon uçak modundayken AAPS KŞ değerlerini almıyorsa, 'xDrip+ ayarlar sayfasında <../Configuration/xdrip.html>'_ açıklandığı gibi 'Alıcıyı tanımla'yı kullanın.

Glimp kullanıyorsanız
==================================================
* Glimp sürüm 4.15.57 veya daha yenisine ihtiyacınız olacak. Daha eski sürümler desteklenmez.
* Henüz kurulmadıysa, Glimp'i indirin ve `Nightscout <https://nightscout.github.io/uploader/setup/#glimp>`_ üzerindeki talimatları izleyin.
* Konfigürasyon ayarlarında Glimp'i seçin (AndroidAPS'de).
