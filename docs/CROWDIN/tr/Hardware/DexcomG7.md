# Dexcom G7

```{admonition} Only available in dev branch
:class: not

Bu özellik yalnızca dev (geliştirici) sürümünde mevcuttur, master'da mevcut değildir.

Lütfen uyarılara dikkat edin ve [dev sürümü oluşturma](../Installing-AndroidAPS/Dev_branch.md) bölümündeki talimatları izleyin.

```

## Önce Temel

2022 baharında Dexcom G7 CE sertifikasını aldı ve '22 Ekim'in sonunda satılmaya başladı.

G7 sisteminin G6 ile karşılaştırıldığında ne uygulamada ne de okuyucuda değerleri düzgünleştirmemesi dikkat çekicidir. Bununla ilgili daha fazla ayrıntıya [buradan](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and -follow-app) ulaşabilirsiniz. Sonuç olarak, AAPS'de mantıklı bir şekilde kullanabilmek için değerlerin yumuşatılması gerekir.

**iki** olasılık vardır (02/'23 itibarıyla).

![DexcomG7.md](../images/DexcomG7.png)

## 1.  Yamalı Dexcom G7 Uygulaması

### Yeni yamalı (!) bir G7 uygulaması kurun ve sensörü başlatın

Yamalı bir Dexcom G7 uygulaması, Dexcom G7 verilerine erişim sağlar. Bu uygulama şu anda G7 verilerini alamadığından, BYODA uygulaması değildir.

Daha önce kullandıysanız orijinal Dexcom uygulamasını kaldırın (Çalışmakta olan bir sensör oturumuna devam edilebilir - uygulamayı kaldırmadan önce sensör kodunu not edin!)

patched.apk dosyasını [buradan](https://github.com/authorgambel/g7/releases) indirip yükleyin.

Yamalı uygulamada sensör kodunu girin.

[Burada](../Hardware/GeneralCGMRecommendation.md) bulunan CGM hijyeni ve sensör yerleşimi için genel önerileri uygulayın.

Isınma aşamasından sonra, değerler her zamanki gibi G7 uygulamasında görüntülenir.

### geliştirici (dev) sürümünde yeni bir imzalı APK oluşturun

AAPS'de G7 Uygulamasından değerleri alabilmek ve alınan değerleri yumuşatmak için bir değişiklik gereklidir.

Bu nedenle, resmi geliştirici sürümü için imzalı yeni bir APK oluşturun ve cep telefonunuza yükleyin.

AAPS'deki yapılandırma için
- Konfigürasyon ayarlarında 'BYODA'yı seçin - (şimdilik BYODA uygulaması olmasa bile!)
- AAPS herhangi bir değer almazsa, başka bir KŞ kaynağına geçin ve ardından AAPS ile BYODA arasındaki veri alışverişini onaylama sorgusunu başlatmak için 'BYODA'ya geri dönün.

Glikoz değerlerinin yumuşatılması, Konfigürasyon ayarlarında "Ortalama yumuşatma" veya "Üstsel yumuşatma" eklentisi etkinleştirilerek gerçekleştirilir. Devre dışı bırakmak için "Yumuşatma Yok" seçeneğini seçin. "Üstsel yumuşatma" daha agresiftir ve en yeni Glikoz Değerini yeniden yazar, ancak yoğun gürültüyle başa çıkmada iyidir. "Ortalama yumuşatma", BYODA G6'daki geri düzeltmeye çok benzer ve yalnızca geçmiş değerleri yeniden yazar fakat mevcut değer değildir ve bu nedenle daha hızlı yanıt süresine sahiptir.

** Üstel Yumuşatma ** G7 değerlerinin anlamlı kullanımı için **ETKİN** olmalıdır.

## 2. Xdrip+ (tamamlayıcı mod)

-   Xdrip+'ı indirin ve kurun: [xdrip](https://github.com/NightscoutFoundation/xDrip)
- Xdrip'te veri kaynağı olarak "Companion App" seçilmeli ve Gelişmiş Ayarlar altında > Bluetooth Ayarları> "Companion Bluetooth" etkinleştirilmelidir.
- AAPS'de > Yapılandırma > KŞ kaynağı > xDrip+. Ayarları [xDrip+ ayarları](../Configuration/xdrip.md) sayfasındaki açıklamalara göre düzenleyin. 
