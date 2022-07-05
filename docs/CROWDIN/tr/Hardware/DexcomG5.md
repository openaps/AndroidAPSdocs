# Dexcom G5

## G5'i xdrip+ ile kullanıyorsanız

-   Henüz kurulmadıysa [xdrip](https://github.com/NightscoutFoundation/xDrip)'i indirin ve nightcout'taki talimatları izleyin ([G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support).
-   xdrip'te Ayarlar > Yerel-Uygulama ayarlarına gidin ve > Verileri Yerel Olarak Yayınlayını AÇIK'ı seçin.
-   xdrip'te Ayarlar > Uygulamalar arası ayarlar > Tedavileri Kabul Et'e gidin ve KAPALI'yı seçin.
-   Kalibre etmek için AndroidAPS'yi kullanabilmek istiyorsanız, xdrip'te Ayarlar > Uygulamalar Arası Uyumluluğu > Kalibrasyonları Kabul Et'e gidin ve AÇIK'ı seçin. Ayarlar > Daha Az Ortak Ayarlar> Gelişmiş Kalibrasyon Ayarları'ndaki seçenekleri de gözden geçirmek isteyebilirsiniz.
-   Konfigürasyon Ayarları'nda xdrip'i seçin (AndroidAPS'deki ayar).
-   AAPS, telefon uçak modundayken KŞ değerlerini almıyorsa, [xDrip+ ayarlar sayfasında](../Configuration/xdrip.md) açıklandığı gibi 'Alıcıyı tanımla'yı kullanın.

## Yamalı Dexcom uygulamasıyla G5 kullanıyorsanız

-   Download the apk from <https://github.com/dexcomapp/dexcomapp>, and choose the version that fits your needs (mg/dl or mmol/l version, G5).

    -   Folder 2.3 is for users of AndroidAPS 2.3, folder 2.4 for users of AAPS 2.5.
    -   Open <https://play.google.com/store/search?q=dexcom%20g5> on your computer. Bölge URL'de görünecektir.

    ![Region in Dexcom G5 URL](../images/DexcomG5regionURL.PNG)

-   Stop sensor and uninstall the original Dexcom app, if not already done.

-   İndirilen apk'yı yükleyin

-   Start sensor

-   Select Dexcom App (patched) in ConfigBuilder (setting in AndroidAPS).

-   If you want to use xDrip alarms via local broadcast: in xDrip hamburger menu > settings > hardware data source > 640G /EverSense.
