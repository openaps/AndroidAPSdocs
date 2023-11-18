# Dexcom G7


## Ön Bilgi

2022 baharında Dexcom G7 CE sertifikasını aldı ve '22 Ekim'in sonunda satılmaya başladı.

G7 sisteminin G6 ile karşılaştırıldığında ne uygulamada ne de okuyucuda değerleri düzgünleştirmemesi dikkat çekicidir. Bununla ilgili daha fazla ayrıntıya [buradan](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app) ulaşabilirsiniz. Sonuç olarak, AAPS'de mantıklı bir şekilde kullanabilmek için değerlerin yumuşatılması gerekir.

![G7 english](../images/6fe30b84-227a-4bae-a9a5-527cee341dbf.png)

## 1.  Patched Dexcom G7 App (DiAKEM)

**Note: AAPS 3.2.0.0 or higher is required!**

### Yeni yamalı (!) bir G7 uygulaması kurun ve sensörü başlatın

A patched Dexcom G7 app (DiAKEM) gives acess to the Dexcom G7 data. Bu uygulama şu anda G7 verilerini alamadığından, BYODA uygulaması değildir.

Daha önce kullandıysanız orijinal Dexcom uygulamasını kaldırın (Çalışmakta olan bir sensör oturumuna devam edilebilir - uygulamayı kaldırmadan önce sensör kodunu not edin!)

patched.apk dosyasını [buradan](https://github.com/authorgambel/g7/releases) indirip yükleyin.

Yamalı uygulamada sensör kodunu girin.

[Burada](../Hardware/GeneralCGMRecommendation.md) bulunan CGM hijyeni ve sensör yerleşimi için genel önerileri uygulayın.

Isınma aşamasından sonra, değerler her zamanki gibi G7 uygulamasında görüntülenir.

### Configuration in AAPS

AAPS'deki yapılandırma için
- Konfigürasyon ayarlarında 'BYODA'yı seçin - (şimdilik BYODA uygulaması olmasa bile!)
- AAPS herhangi bir değer almazsa, başka bir KŞ kaynağına geçin ve ardından AAPS ile BYODA arasındaki veri alışverişini onaylama sorgusunu başlatmak için 'BYODA'ya geri dönün.

Glikoz değerlerinin yumuşatılması, Konfigürasyon ayarlarında "Ortalama yumuşatma" veya "Üstsel yumuşatma" eklentisi etkinleştirilerek gerçekleştirilir. Devre dışı bırakmak için "Yumuşatma Yok" seçeneğini seçin. "Üstsel yumuşatma" daha agresiftir ve en yeni Glikoz Değerini yeniden yazar, ancak yoğun gürültüyle başa çıkmada iyidir. "Ortalama yumuşatma", BYODA G6'daki geri düzeltmeye çok benzer ve yalnızca geçmiş değerleri yeniden yazar fakat mevcut değer değildir ve bu nedenle daha hızlı yanıt süresine sahiptir.

** Üstel Yumuşatma ** G7 değerlerinin anlamlı kullanımı için **ETKİN** olmalıdır.

## 2. Xdrip+ (direct connection to G7)

- Follow the instructions here: [Xdrip+ G7](https://navid200.github.io/xDrip/docs/Dexcom/G7.html)
- AAPS'de > Yapılandırma > KŞ kaynağı > xDrip+. Ayarları [xDrip+ ayarları](../Configuration/xdrip.md) sayfasındaki açıklamalara göre düzenleyin.

## 3. Xdrip+ (tamamlayıcı mod)

-   Xdrip+'ı indirin ve kurun: [xdrip](https://github.com/NightscoutFoundation/xDrip)
- Xdrip'te veri kaynağı olarak "Companion App" seçilmeli ve Gelişmiş Ayarlar altında > Bluetooth Ayarları> "Companion Bluetooth" etkinleştirilmelidir.
- AAPS'de > Yapılandırma > KŞ kaynağı > xDrip+. Ayarları [xDrip+ ayarları](../Configuration/xdrip.md) sayfasındaki açıklamalara göre düzenleyin. 
