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

Kendi Dexcom Uygulamanızı Oluşturun ile G6 kullanıyorsanız
==================================================
* Aralık 2020 tarihi itibariyle `Kendi Dexcom Uygulamanızı Oluşturmak için <https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0>` _ (BYODA) ayrıca AAPS ve/veya xDrip+'a yerel yayını da destekler (G5 sensörleri için gecerli değil!)
* Bu uygulama, Dexcom G6'nızı herhangi bir Android akıllı telefonla kullanmanızı sağlar.
* Daha önce bunlardan birini kullandıysanız, orijinal Dexcom uygulamasını veya yamalı Dexcom uygulamasını kaldırın.
* İndirilen apk'yı yükleyin
* Sensör kodunu ve verici seri numarasını girin. yamalı uygulamada.
* Telefon ayarlarında uygulamalar > Dexcom G6 > izinler > ek izinlere gidin ve 'Dexcom uygulamasına eriş'e basın.
* Kısa bir süre sonra BYODA verici sinyalini almalıdır. (Aksi takdirde sensörü durdurmanız ve yenisini başlatmanız gerekecektir.)

AndroidAPS ayarları
--------------------------------------------------
* Konfigürasyon ayarları'nda 'Dexcom Uygulaması (yamalı)' seçeneğini seçin.
* Herhangi bir değer almazsanız, başka bir veri kaynağı seçin, ardından AAPS ve BYODA yayını arasında bağlantı kurmak için izin talebini tetiklemek için 'Dexcom Uygulaması (yamalı)' öğesini yeniden seçin.

xDrip+ için ayarlar
--------------------------------------------------
* Veri kaynağı olarak '640G/Everses'i seçin.
* Değerlerin alınabilmesi için xDrip+'da 'sensörü başlat' komutu gerçekleştirilmelidir. Bu Kendi Dexcom Uygulamanızı Oluşturun tarafından kontrol edilen mevcut sensörünüzü etkilemeyecektir.
   
Sorun giderme G6
==================================================
Dexcom G6'ya özel sorun giderme
--------------------------------------------------
* Seri nolu vericiler. 80 veya 81 ile başlayan vericiler, en azından Mayıs 2019'dan itibaren en son kararlı xDrip+ sürümüne veya daha yeni bir sürüme ihtiyaç duyar.
* Seri nolu vericiler. 8G ile başlayanlarda, 25 Temmuz 2019 veya daha yeni bir sürüm olması gerekir.
* xDrip+ ve Dexcom uygulaması vericiye aynı anda bağlanamaz.
* En az 15 dakika beklenmelidir. sensörü durdurmak ve başlatmak arasında süre.
* Başlangıç ​​zamanını geriye atmayın. "Sensörü bugün mü eklediniz?" sorusunu yanıtlayın. Her zaman "Evet, bugün" şeklinde.
* Yeni bir sensör ayarlarken "sensörleri yeniden başlat" özelliğini etkinleştirmeyin
* Klasik Durum Sayfası -> G5/G6 durumu -> PhoneServiceState'de aşağıdaki bilgiler gösterilmeden yeni sensör başlatmayın:

  * 80 veya 81 ile başlayan verici seri nolarında: "ss:dd'de veri var" (ör. "19:04'te veri var")
  * 8G veya 8H ile başlayan serili vericilerde: "Glikoz ss:dd'da alındı" (ör. "19:04'da glikoz alındı") veya "Ham yok hh:mm" (ör. "Ham 19:04'de alındı")

.. image:: ../images/xDrip_Dexcom_PhoneServiceState.png
  :alt: xDrip+ PhoneServiceState

Genel sorun giderme
--------------------------------------------------
CGM'ler için Genel Sorun Giderme `burada <./GeneralCGMRecommendation.html#troubleshooting>`__ bulunabilir.

Çalışan sensörle yeni verici
--------------------------------------------------
Çalışan bir sensör oturumu sırasında vericiyi değiştirirseniz, sensör yuvasına zarar vermeden vericiyi çıkarmayı deneyebilirsiniz. Bu konu hakkında video şu adreste bulunabilir `https://youtu.be/tx-kTsrkNUM <https://youtu.be/tx-kTsrkNUM>`_.
