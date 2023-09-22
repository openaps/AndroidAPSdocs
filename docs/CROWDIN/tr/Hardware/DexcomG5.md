# Dexcom G5

## G5'i xdrip+ ile kullanıyorsanız

-   Henüz kurulmadıysa [xdrip](https://github.com/NightscoutFoundation/xDrip)'i indirin ve nightcout'taki talimatları izleyin ([G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support).
-   xdrip'te Ayarlar > Yerel-Uygulama ayarlarına gidin ve > Verileri Yerel Olarak Yayınlayını AÇIK'ı seçin.
-   xdrip'te Ayarlar > Uygulamalar arası ayarlar > Tedavileri Kabul Et'e gidin ve KAPALI'yı seçin.
-   If you want to be able to use AAPS to calibrate then in xdrip go to Settings > Interapp Compatibility > Accept Calibrations and select ON. Ayarlar > Daha Az Ortak Ayarlar> Gelişmiş Kalibrasyon Ayarları'ndaki seçenekleri de gözden geçirmek isteyebilirsiniz.
-   Select xdrip in ConfigBuilder (setting in AAPS).
-   AAPS, telefon uçak modundayken KŞ değerlerini almıyorsa, [xDrip+ ayarlar sayfasında](../Configuration/xdrip.md) açıklandığı gibi 'Alıcıyı tanımla'yı kullanın.

## Yamalı Dexcom uygulamasıyla G5 kullanıyorsanız

-   APK'yi buradan <https://github.com/dexcomapp/dexcomapp> indirin ve ihtiyaçlarınıza uyan sürümü seçin (mg/dl veya mmol/l sürümü, G5).

    -   Folder 2.3 is for users of AAPS 2.3, folder 2.4 for users of AAPS 2.5.
    -   Bilgisayarınızda <https://play.google.com/store/search?q=dexcom%20g5> bağlantısını açın. Bölge URL'de görünecektir.

    ![Dexcom G5 URL'sindeki Bölge](../images/DexcomG5regionURL.PNG)

-   Eğer daha önce yapmadıysanız sensörü durdurun ve orijinal Dexcom uygulamasını kaldırın.

-   İndirilen apk'yı yükleyin

-   Sensörü başlatın

-   Select Dexcom App (patched) in ConfigBuilder (setting in AAPS).

-   Yerel yayın yoluyla xDrip alarmlarını kullanmak istiyorsanız: xDrip'te hamburger menüsü > ayarlar > donanım veri kaynağı > 640G /EverSense.
