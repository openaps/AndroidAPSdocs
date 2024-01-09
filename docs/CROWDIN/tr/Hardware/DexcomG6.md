# Dexcom G6

## Ön Bilgi

-   Follow general CGM hygiene and setting sensor recommendation [here](../Hardware/GeneralCGMRecommendation.md).

## Dexcom G6 ile kapalı döngü hakkında genel bilgiler

Güvenli bir şekilde kullanmak için dikkat edilmesi gereken birkaç nokta vardır:

-   If you are using a rebatteried or modded transmitter with xDrip+, the safest thing to do is **disable** preemptive restarts of the sensor that are anyway not needed for xDrip+.
-   Fabrika kalibrasyonu ile "Pre-soaking" ön ısınma denilen sensörü daha önce verici olmadan doku sıvısına "alışacak" şekilde yerleştirmek, muhtemelen glikoz değerlerinde sapmalara yol açar. 'pre-soak' ön ısınma yapıyorsanız, en iyi sonuçları almak için muhtemelen sensörü kalibre etmeniz gerekecektir.

To learn more about the details and reasons for these recommendations read the [complete article](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) published by Tim Street at [www.diabettech.com](https://www.diabettech.com).

## xDrip+ ile Dexcom G6 kullanıyorsanız

-   Dexcom G6 vericisi, Dexcom alıcısına (veya alternatif olarak t:slim pompasına) ve telefonunuzdaki bir uygulamaya aynı anda bağlanabilir.
-   xDrip+'ı alıcı olarak kullanmadan önce Dexcom uygulamasını telefonunuzdan kaldırın. **You cannot connect xDrip+ and Dexcom app with the transmitter at the same time!**
-   If you need Clarity and want to profit from xDrip+ alarms use the [BYODA](DexcomG6-if-using-g6-with-build-your-own-dexcom-app) with local broadcast to xDrip+.
-   If not already set up, download [xDrip+](https://github.com/NightscoutFoundation/xDrip) and follow the instructions on [xDrip+ settings page](../Configuration/xdrip.md).
-   Select xDrip+ in ConfigBuilder (setting in AAPS).
-   Adjust settings in xDrip+ according to [xDrip+ settings page](../Configuration/xdrip.md)
-   If AAPS does not receive BG values when phone is in airplane mode use 'Identify receiver' as describe on [xDrip+ settings page](../Configuration/xdrip.md).

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## Kendi Dexcom Uygulamanızı Oluşturun ile G6 kullanıyorsanız

-   As of December 2020 [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0) (BYODA) also supports local broadcast to AAPS and/or xDrip+ (not for G5/ONE/G7 sensors!)
-   Bu uygulama, Dexcom G6'nızı herhangi bir Android akıllı telefonla kullanmanızı sağlar.
-   Uninstall the original Dexcom app or patched Dexcom app if you used one of those previously (**do not stop** the currently running sensor)
-   İndirilen apk'yı yükleyin
-   Yamalı uygulamada sensör kodunu ve verici seri numarasını girin.
-   In phone settings go to apps > Dexcom G6 > permissions > additional permissions and press 'Access Dexcom app'.
-   Kısa bir süre sonra BYODA verici sinyalini almalıdır.

### Settings for AAPS

-   Konfigürasyon ayarları'nda 'Dexcom Uygulaması (yamalı)' seçin.
-   If you don't receive any values select any other data source, then re-select 'Dexcom App (patched)' to trigger the demand for permissions to establish the connection between AAPS and BYODA-broadcast.

### xDrip+ için ayarlar

-   Veri kaynağı olarak '640G/Everses'i seçin.
-   Command 'start sensor' must be performed in xDrip+ in order to receive values. This will not affect your current sensor controlled by Build Your Own Dexcom App.


(DexcomG6-troubleshooting-g6)=
## Sorun giderme G6

### Dexcom G6'ya özel sorun giderme

-   Scroll down to **Troubleshooting** [here](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Genel sorun giderme

General Troubleshooting for CGMs can be found [here](./GeneralCGMRecommendation.md#troubleshooting).

### Çalışan sensörle yeni verici

If you happen to change transmitter during a running sensor session you might try to remove the transmitter without damaging the sensor mount. A video can be found at <https://youtu.be/tx-kTsrkNUM> and [here](https://navid200.github.io/xDrip/docs/Remove-transmitter.html).
