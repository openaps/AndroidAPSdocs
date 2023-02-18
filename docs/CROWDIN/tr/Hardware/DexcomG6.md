# Dexcom G6

## Önce temel bilgiler

-   [Burada](../Hardware/GeneralCGMRecommendation.md) olduğu gibi genel hijyen ve CGM sensör ayar tavsiyesine uyun.
-   2018 sonbahar/sonu sonra üretilen G6 vericileri için lütfen [en son gecelik derleme xDrip+ sürümlerinden](https://github.com/NightscoutFoundation/xDrip/releases) birini kullandığınızdan emin olun. Bu vericiler yeni bir firmware yazılımına sahiptir ve xDrip+'ın en son kararlı sürümü (2019/01/10) bununla istenildiği gibi çalışmaz.

## Dexcom G6 ile kapalı döngü hakkında genel bilgiler

Açık olan şu ki, G6'yı kullanmak, başlangıçta düşünülenden biraz daha karmaşık olabilir. Güvenli bir şekilde kullanmak için dikkat edilmesi gereken birkaç nokta vardır:

-   xDrip+ veya Spike'ta yerel verileri kalibrasyon koduyla kullanıyorsanız, yapılacak en güvenli şey, sensörün "önleyici yeniden başlatılmasına" izin vermemektir.
-   Önleyici yeniden başlatma kullanmanız gerekiyorsa, değişikliği gözlemleyebileceğiniz ve gerekirse kalibre edebileceğiniz günün bir saatinde yaptığınızdan emin olun.
-   Sensörleri yeniden başlatıyorsanız, en güvenli sonuçlar için 11. ve 12. günlerde fabrika kalibrasyonu olmadan yapın ya da kalibrasyona hazır olduğunuzdan ve sapmaları göz önünde bulundurduğunuzdan ve gerekirse kalibrasyon ile düzeltebildiğinizden emin olun.
-   Fabrika kalibrasyonu ile "Pre-soaking" ön ısınma denilen sensörü daha önce verici olmadan doku sıvısına "alışacak" şekilde yerleştirmek, muhtemelen glikoz değerlerinde sapmalara yol açar. 'pre-soak' ön ısınma yapıyorsanız, en iyi sonuçları almak için muhtemelen sensörü kalibre etmeniz gerekecektir.
-   Meydana gelebilecek değişiklikler konusunda dikkatli değilseniz, fabrikada kalibre edilmemiş moda dönmek ve sistemi bir G5 gibi kullanmak daha iyi olabilir.

Bu önerilerin ayrıntıları ve nedenleri hakkında daha fazla bilgi edinmek için Tim Street tarafından yayınlanan [www.diabettech.com](https://www.diabettech.com) adresindeki [makalenin tamamını](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) okuyun.

## xDrip+ ile Dexcom G6 kullanıyorsanız

-   Dexcom G6 vericisi, Dexcom alıcısına (veya alternatif olarak t:slim pompasına) ve telefonunuzdaki bir uygulamaya aynı anda bağlanabilir.
-   xDrip+'ı alıcı olarak kullanmadan önce Dexcom uygulamasını telefonunuzdan kaldırın. **xDrip+ ve Dexcom uygulamasını vericiye aynı anda bağlayamazsınız!**
-   If you need Clarity and want to profit from xDrip+ alarms use the [BYODA](DexcomG6-if-using-g6-with-build-your-own-dexcom-app) with local broadcast to xDrip+.
-   Henüz kurulmadıysa [xDrip+](https://github.com/NightscoutFoundation/xDrip)'i indirin ve [xDrip+ ayarlar sayfasındaki](../Configuration/xdrip.md) talimatları izleyin.
-   Konfigürasyon ayarlarında (AndroidAPS'deki ayarda) xDrip+'ı seçin.
-   [xDrip+ ayarlar sayfasına](../Configuration/xdrip.md) göre xDrip+'daki ayarları yapın
-   AAPS, telefon uçak modundayken KŞ değerlerini almıyorsa, [xDrip+ ayarlar sayfasında](../Configuration/xdrip.md) açıklandığı gibi 'Alıcıyı tanımla'yı kullanın.

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## Kendi Dexcom Uygulamanızı Oluşturun ile G6 kullanıyorsanız

-   Aralık 2020 tarihi itibariyle [Kendi Dexcom App kurmak](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0) (BYODA) ayrıca AAPS ve/veya xDrip+'a yerel yayını da destekler ( G5 sensörleri için gecerli değil!)
-   Bu uygulama, Dexcom G6'nızı herhangi bir Android akıllı telefonla kullanmanızı sağlar.
-   Daha önce bunlardan birini kullandıysanız, orijinal Dexcom uygulamasını veya yamalı Dexcom uygulamasını kaldırın.
-   İndirilen apk'yı yükleyin
-   Yamalı uygulamada sensör kodunu ve verici seri numarasını girin.
-   Telefon ayarlarından uygulamalara gidin > Dexcom G6 > izinler > ek izinler ve 'Dexcom uygulamasına eriş' düğmesine basın.
-   Kısa bir süre sonra BYODA verici sinyalini almalıdır. (eğer değilse sensörü durdurmanız ve yenisini başlatmanız gerekecektir.)

### AndroidAPS ayarları

-   Konfigürasyon ayarları'nda 'Dexcom Uygulaması (yamalı)' seçin.
-   Herhangi bir değer almazsanız, başka bir veri kaynağı seçin, ardından AAPS ve BYODA yayını arasında bağlantı kurmak için izin talebini tetiklemek için 'Dexcom Uygulaması (yamalı)' öğesini yeniden seçin.

### xDrip+ için ayarlar

-   Veri kaynağı olarak '640G/Everses'i seçin.
-   Değerlerin alınabilmesi için xDrip+'da 'sensörü başlat' komutu gerçekleştirilmelidir. Bu Kendi Dexcom Uygulamanızı Oluşturun tarafından kontrol edilen mevcut sensörünüzü etkilemeyecektir.


(DexcomG6-troubleshooting-g6)=
## Sorun giderme G6

### Dexcom G6'ya özel sorun giderme

-   80 veya 81 ile başlayan seri nolu vericiler için en az Mayıs 2019'daki kararlı xDrip+ sürümü veya daha yeni gecelik derlemeye ihtiyaç duyar.
-   8G seri no ile başlayan vericiler için en az  25 Temmuz 2019 veya daha yeni sürüm gereklidir.
-   xDrip+ ve Dexcom uygulaması vericiye aynı anda bağlanamaz.
-   Sensörü durdurmak ve başlatmak arasında en az 15 dk bekleyin.
-   Başlatma ​​zamanını geriye almayın. "Sensörü bugün mü eklediniz?" sorusunu her zaman "Evet, bugün" şeklinde yanıtlayın.
-   Yeni bir sensör ayarlarken "sensörleri yeniden başlat" özelliğini etkinleştirmeyin
-   Aşağıdaki bilgiler ekranda gösterilmeden yeni sensörü çalıştırmayın. Klasik Durum Sayfası -> G5/G6 durumu -> TelefonHizmetDurumu:
    -   80 veya 81 seri no ile başlayan verici için: "Got data ss:dd" (i.e. "Got data 19:04")
    -   8G veya 8H ile başlayan verici serisi: "Glikoz var ss:dd" (örneğin, "Glikoz 19:04 var") veya "Ham yok ss:dd" (örneğin, "Şimdi ham var 19:04")

![xDrip+ PhoneServiceState](../images/xDrip_Dexcom_PhoneServiceState.png)

### Genel sorun giderme

General Troubleshoothing for CGMs can be found [here](./GeneralCGMRecommendation.html#troubleshooting).

### Çalışan sensörle yeni verici

If you happen to change transmitter during a running sensor session you might try to remove the transmitter without damaging the sensor mount. A video can be found at <https://youtu.be/tx-kTsrkNUM>.
