Dexcom G6
**************************************************
Önce temel bilgiler
==================================================

* Genel CGM hijyenini ve sensör ayar önerisini `buradan <../Hardware/GeneralCGMRecommendation.html>`__ takib edebilirsiniz.
* 2018 sonbaharından/sonundan sonra üretilen G6 vericileri için lütfen 'en son xDrip+ sürümlerinden <https://github.com/NightscoutFoundation/xDrip/releases>' birini kullandığınızdan emin olun. Bu vericiler yeni bir firmware yazılımına sahiptir ve xDrip+'ın en son kararlı sürümü (2019/01/10) bununla istenildiği gibi çalışmaz.

Dexcom G6 ile kapalı döngü hakkında genel bilgiler
==================================================

Açık olan şu ki, G6'yı kullanmak, başlangıçta düşünülenden biraz daha karmaşık olabilir. Güvenli bir şekilde kullanmak için dikkat edilmesi gereken birkaç nokta vardır: 

* xDrip+ veya Spike'ta yerel verileri kalibrasyon koduyla kullanıyorsanız, yapılacak en güvenli şey, sensörün "önleyici yeniden başlatılmasına" izin vermemektir.
* Önleyici yeniden başlatma kullanmanız gerekiyorsa, değişikliği gözlemleyebileceğiniz ve gerekirse kalibre edebileceğiniz günün bir saatinde yaptığınızdan emin olun. 
* Sensörleri yeniden başlatıyorsanız, en güvenli sonuçlar için 11. ve 12. günlerde fabrika kalibrasyonu olmadan yapın ya da kalibrasyona hazır olduğunuzdan ve sapmaları göz önünde bulundurduğunuzdan ve gerekirse kalibrasyon ile düzeltebildiğinizden emin olun.
* Fabrika kalibrasyonu ile "Pre-soaking" ön ısınma denilen sensörü daha önce verici olmadan doku sıvısına "alışacak" şekilde yerleştirmek, muhtemelen glikoz değerlerinde sapmalara yol açar. 'pre-soak' ön ısınma yapıyorsanız, en iyi sonuçları almak için muhtemelen sensörü kalibre etmeniz gerekecektir.
* Meydana gelebilecek değişiklikler konusunda dikkatli değilseniz, fabrikada kalibre edilmemiş moda dönmek ve sistemi bir G5 gibi kullanmak daha iyi olabilir.

Bu önerilerin ayrıntıları ve nedenleri hakkında daha fazla bilgi edinmek için Tim Street tarafından yayınlanan <a href="https://www.diabettech.com">www.diabettech.com</a> adresindeki <a href="https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/">makalenin tamamını</a> okuyun.

xDrip+ ile Dexcom G6 kullanıyorsanız
==================================================
* Dexcom G6 vericisi, Dexcom alıcısına (veya alternatif olarak t:slim pompasına) ve telefonunuzdaki bir uygulamaya aynı anda bağlanabilir.
* xDrip+'ı alıcı olarak kullanmadan önce Dexcom uygulamasını telefonunuzdan kaldırın. **xDrip+ ve Dexcom uygulamasını vericiye aynı anda bağlayamazsınız!**
* Clarity'ye ihtiyacınız varsa ve xDrip alarmlarından yararlanmak istiyorsanız, `BYODA <../Hardware/Dexcom G6.html#if-using-g6-with-build-your-own-dexcom-app>`_ kullanarak yerel yayınla xDrip+'ı kurun.
* Henüz kurulmadıysa, `xDrip+ <https://github.com/NightscoutFoundation/xDrip>`_ dosyasını indirin ve `xDrip+ ayarlar sayfasındaki <../Configuration/xdrip.html>`_ talimatlarını izleyin.
* Konfigürasyon ayarlarında (AndroidAPS'deki ayarda) xDrip+'ı seçin.
* xDrip+'daki ayarları `xDrip+ ayarlar sayfasına <../Configuration/xdrip.html>`__ göre yapın
* Telefon uçak modundayken AAPS KŞ değerleri almıyorsa, 'xDrip+ ayarlar sayfasında <../Configuration/xdrip.html>'__ açıklandığı gibi 'Alıcıyı tanımla'yı kullanın.

If using G6 with Build Your Own Dexcom App
==================================================
* As of December 2020 `Build Your Own Dexcom App <https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0>`_ (BYODA) also supports local broadcast to AAPS and/or xDrip+ (not for G5 sensors!)
* This app lets you use your Dexcom G6 with any Android smartphone.
* Uninstall the original Dexcom app or patched Dexcom app if you used one of those previously.
* Install downloaded apk
* Enter sensor code and transmitter serial no. in patched app.
* In phone settings go to apps > Dexcom G6 > permissions > additional permissions and press 'Access Dexcom app'.
* After short time BYODA should pick-up transmitter signal. (If not you will have to stop sensor and start new one.)

Settings for AndroidAPS
--------------------------------------------------
* Select 'Dexcom App (patched)' in config builder.
* If you don't receive any values select any other data source, then re-select 'Dexcom App (patched)' to trigger the demand for permissions to establish the connection between AAPS and BYODA-broadcast.

Settings for xDrip+
--------------------------------------------------
* Select '640G/Eversense' as data source.
* Command 'start sensor' must be performed in xDrip+ in order to receive values. This will not affect your current sensor controlled by Build Your Own Dexcom App.
   
Troubleshooting G6
==================================================
Dexcom G6 specific troubleshooting
--------------------------------------------------
* Transmitters with serial no. starting with 80 or 81 need at least last stable xDrip+ version from May 2019 or a newer nightly build.
* Transmitters with serial no. starting with 8G need at least nightly build from July 25th, 2019 or newer.
* xDrip+ and Dexcom app cannot be connected with the transmitter at the same time.
* Wait at least 15 min. between stopping and starting a sensor.
* Do not rewind back time of insertion. Answer question "Did you insert it today?" always with "Yes, today".
* Do not enable "restart sensors" while setting a new sensor
* Do not start new sensor before the following information is shown in Classic Status Page -> G5/G6 status -> PhoneServiceState:

  * Transmitter serial starting with 80 or 81: "Got data hh:mm" (i.e. "Got data 19:04")
  * Transmitter serial starting with 8G or 8H: "Got glucose hh:mm" (i.e. "Got glucose 19:04") or "Got no raw hh:mm" (i.e. "Got now raw 19:04")

.. image:: ../images/xDrip_Dexcom_PhoneServiceState.png
  :alt: xDrip+ PhoneServiceState

General troubleshooting
--------------------------------------------------
General Troubleshoothing for CGMs can be found `here <./GeneralCGMRecommendation.html#troubleshooting>`__.

New transmitter with running sensor
--------------------------------------------------
If you happen to change transmitter during a running sensor session you might try to remove the transmitter without damaging the sensor mount. Bu konu hakkında video şu adreste bulunabilir `https://youtu.be/tx-kTsrkNUM <https://youtu.be/tx-kTsrkNUM>`_.
