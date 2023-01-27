# Freestyle Libre 1

Libre'nizi her 5 dakikada bir yeni KŞ değerleri alan bir CGM olarak kullanmak için öncelikle aşağıdaki gibi bir NFC - Bluetooth adaptörü satın almanız gerekir:

-   MiaoMiao Okuyucu (sürüm 1 veya 2) <https://www.miaomiao.cool/>
-   Blucon Nightrider <https://www.ambrosiasys.com/our-products/blucon/>
-   Bubble <https://bubbleshop.eu/> veya Rus kullanıcılar için <https://vk.com/saharmonitor/>

Ek olarak, NFC çipine sahip Sony Smartwatch 3 saatini, NFC toplayıcı olarak kullanmak da mümkündür. Bununla birlikte, yukarıda listelenen özel NFC - Bluetooth adaptörleri daha az karmaşıktır ve Libre 1'lerini CGM olarak kullanmak isteyenlerin çoğunluğu tarafından kullanılılır.

-   Sony Smartwatch 3 (SWR50) <https://github.com/pimpimmi/LibreAlarm/wiki/>

Halihazırda, Libre 1'i KŞ kaynağı olarak kullanıyorsanız, SMB algoritmasında "SMB'yi her zaman etkinleştir" ve "Karbonhidrattan sonra SMB'yi etkinleştir"i işaretleyemezsiniz. Libre 1'in KŞ değerleri, bu seçenekleri güvenle kullanmak için yeterince düzgün değildir. Daha fazla ayrıntı için [Kan şekeri verilerini düzeltme](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) konusuna bakın.

## xDrip+ kullanılıyorsa

-   Henüz kurmadıysanız, xDrip+'ı indirin ve [LimiTTEer](https://github.com/JoernL/LimiTTer) veya [Libre Alarm](https://github.com/pimpimmi/LibreAlarm/wiki) ile ilgili talimatları izleyin.
-   xdrip'te Ayarlar > Yerel-Uygulama ayarlarına gidin ve > Verileri Yerel Olarak Yayınlayını AÇIK seçin.
-   xDrip+'da Ayarlar > Uyg.lar-arası ayarlar > Tedaviyi Kabul Et'e gidin ve KAPALI'yı seçin.
-   Kalibre etmek için AndroidAPS'yi kullanabilmek istiyorsanız, xdrip'te Ayarlar > Uygulamalar Arası Uyumluluğu > Kalibrasyonları Kabul Et'e gidin ve  AÇIK'ı seçin. Ayarlar > Daha Az Ortak Ayarlar> Gelişmiş Kalibrasyon Ayarları'ndaki seçenekleri de gözden geçirmek isteyebilirsiniz.
-   Konfigürasyon ayarlarında (AndroidAPS'deki ayarda) xDrip+'ı seçin.
-   Ekran görüntülü xDrip+ ayarları için [xDrip+ ayarlarına bakın](../Configuration/xdrip.md). Temel xDrip ayarları ve Freestyle Libre xDrip ayarları için bir bölüm mevcuttur.
-   AAPS, telefon uçak modundayken KŞ değerlerini almıyorsa, [xDrip+ ayarlar sayfasında](../Configuration/xdrip.md) açıklandığı gibi 'Alıcıyı tanımla'yı kullanın.

## Glimp kullanıyorsanız

-   Glimp sürüm 4.15.57 veya daha yenisine ihtiyacınız olacak. Daha eski sürümler desteklenmez.
-   Henüz kurulmadıysa, Glimp'i indirin ve [Nightscout](https://nightscout.github.io/uploader/setup/#glimp) üzerindeki talimatları izleyin.
-   Konfigürasyon ayarlarında Glimp'i seçin (AndroidAPS'de).
