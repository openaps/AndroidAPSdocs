# Freestyle Libre 2 ve 2+

Freestyle Libre 2 sensörü artık resmi uygulamayla bile gerçek bir CGM'dir. Yine de LibreLink, AAPS'e veri gönderemez. Sensörü AAPS ile kullanmanın birkaç yolu vardır.

## 1. Bluetooth köprüsü ve OOP kullanın

Bluetooth vericiler, Libre 2 (EU) veya 2+ (EU) ve bir out of process algorithm (OOP) uygulamasıyla kullanılabilir. [Libre 1](./Libre1.md) ile olduğu gibi her 5 dakikada bir kan şekeri değeri alabilirsiniz.

Kullanmak istediğiniz köprünün ve uygulamanın sensörünüzle ve xDrip ile uyumlu olduğunu kontrol edin.

Libre2 OOP ([buradan](#Libre2_OOP2) bulabilirsiniz), orijinal okuyucuyla aynı KŞ değerlerini üretir. Libre 2 ile AAPS, bazı sıçramaları önlemek için 10 ila 25 dakikalık bir yumuşatma yapar. Aşağıdaki [Değer yumuşatma & ham değerler](#libre2-value-smoothing-raw-values) bölümüne bakın. OOP generates readings every 5 minutes with the average of the last 5 minutes. Bu nedenle KŞ ölçümleri o kadar düzgün değildir, ancak orijinal okuyucu cihazla aynıdır ve "gerçek" KŞ değerlerini daha hızlı takip eder. OOP ile döngü kullanmak istiyorsanız lütfen xDrip'teki tüm yumuşatma ayarlarını açın.

Bluetooth verici kullanmak için bazı iyi nedenler vardır:

-   Çeşitli OOP2 kalibrasyon stratejileri seçebilirsiniz (1): "no calibration" ile okuyucu değerlerini kullanabilir, "calibrate based on raw" ile sensörü bir Libre 1 gibi kalibre edebilir ya da "calibrate based on glucose" ile okuyucuya benzer değerleri kalibre edebilirsiniz.  
  OOP1'in kapalı kaldığından emin olun (2).

    → Hamburger Menu → Settings → Less common settings → Other misc. options

![OOP2 kalibrasyonu](../images/Libre2_OOP2Calibration.png)

-   Libre 2 sensörü, Libre 1 gibi 14,5 gün kullanılabilir
-   8 saatlik geriye dönük doldurma (backfilling) tam olarak desteklenir

Not: Verici, LibreLink uygulamasıyla aynı anda, onu etkilemeden kullanılabilir.

### Sensörü başlatın

- → Hamburger Menu (1) → Start sensor (2) → Start sensor (3) → "Not Today" yanıtını verin (4).

![xDrip Start Libre Transmitter & Sensor 3](../images/xDrip_Libre_Transmitter03.png)

Bu işlem hiçbir Libre2 sensörünü fiziksel olarak başlatmaz ve hiçbir şekilde sensörlerle etkileşime girmez. Bu yalnızca xDrip'e, yeni bir sensörün kan şekeri değerleri gönderdiğini bildirir. Varsa, ilk kalibrasyon için kandan ölçülmüş iki değer girin. Artık kan şekeri değerleri xDrip'te her 5 dakikada bir gösterilmelidir. Atlanan değerler, ör. telefonunuzdan çok uzakta olduğunuz için, sonradan doldurulmaz.

Sensör değişiminden sonra xDrip yeni sensörü otomatik olarak algılar ve tüm kalibrasyon verilerini siler. Aktivasyondan sonra kan şekerinizi kontrol edip yeni bir ilk kalibrasyon yapabilirsiniz.

### AAPS'i yapılandırın (yalnızca döngü için)

-   **AAPS**'te sol üst köşedeki **menüyü** (☰) açın, **Konfigürasyon** > **KŞ kaynağı** bölümüne gidin ve **xDrip+** seçin

![xDrip+ KŞ seçili olan Konfigürasyon > KŞ kaynağı](../images/v4/Configuration/configuration_bg_source.png)

-   Telefon uçak modundayken AAPS KŞ değerlerini almıyorsa, [xDrip ayarları sayfasında](#xdrip-identify-receiver) anlatıldığı gibi 'Identify receiver' ayarını kullanın.

## 2. xDrip doğrudan bağlantısını kullanın

```{admonition} Libre 2 EU only
:class: warning
xDrip, Libre 2 US ve AUS ile doğrudan bağlantıyı desteklemez.
Yalnızca Libre 2 ve 2+ **EU** modelleri.
```

- Orijinal belgeler artık kullanılmayan bir OOP2  sürümüne bağlantı verdiği için, xDrip'i kurmak için [bu talimatları](./Libre2MinimalL00per.md) izleyin.
- [xDrip ayarları sayfasındaki](../CompatibleCgms/xDrip.md) kurulum talimatlarını izleyin.

-   [Konfigürasyon > KŞ kaynağı](#Config-Builder-bg-source) içinde xDrip+ seçin.

(libre2-value-smoothing-raw-values)=

### Değer yumuşatma & ham değerler

Teknik olarak güncel kan şekeri değeri her dakika xDrip'e iletilir. Ağırlıklı ortalama filtresi, varsayılan olarak son 25 dakika için yumuşatılmış bir değer hesaplar. Bu süreyi NFC Scan features menüsünde değiştirebilirsiniz.

→ Hamburger menu → Settings → NFC Scan features → Smooth libre 3 data when using xxx method

![xDrip Libre 2 gelişmiş ayarları & ham değerler](../images/xDrip_Libre3_Smooth.png)

Bu döngü için zorunludur. Eğriler düzgün görünür ve döngü sonuçları çok iyidir. Alarmların dayandığı ham değerler biraz daha oynaktır, ancak okuyucunun da gösterdiği değerlere karşılık gelir. Ayrıca hızlı değişikliklere zamanında tepki verebilmek için ham değerler xDrip grafiğinde gösterilebilir. Lütfen Less Common Settings \> Advanced Settings for Libre2 \> "show Raw values" ve "show Sensors Infos" seçeneklerini açın. Ham değerler ayrıca küçük beyaz noktalar olarak gösterilir ve ek sensör bilgileri sistem menüsünde bulunur.

Kan şekeri hızlı hareket ettiğinde ham değerler çok faydalıdır. Noktalar daha çok zıplasa da, doğru tedavi kararları vermek için eğilimi düzleştirilmiş çizgiye göre çok daha iyi görürsünüz.

→ Hamburger menu → Settings → Less common settings → Advanced settings for Libre 2

![xDrip Libre 2 gelişmiş ayarları & ham değerler](../images/Libre2_RawValues.png)



#### Kalibrasyon

Libre2'yi **-40 mg/dL ile +20 mg/dL \[-2,2 mmol/L ile +1,1 mmol/L\] arasında bir sapma (offset)** ile kalibre edebilirsiniz (intercept). Eğim (slope) değiştirilemez. Lütfen yeni bir sensör taktıktan sonra parmaktan kan ölçümü ile kontrol edin; sensörün takıldıktan sonraki ilk 12 saatte doğru olmayabileceğini unutmayın. Kan ölçümleriyle büyük farklar olabileceği için her 24 saatte bir kontrol edin ve gerekirse kalibre edin. Sensör birkaç gün sonra tamamen yanlış değerler gösteriyorsa, değiştirilmelidir.

## 3. Diabox kullanın

- [Diabox](https://www.bubblesmartreader.com/_files/ugd/6afd37_f183eabd4fbd44fcac4b1926a79b094f.pdf)'ı kurun. Settings, Integration içinde Share data with other apps seçeneğini açın.

![Diabox](../images/Diabox.png)

- [Konfigürasyon > KŞ kaynağı](#Config-Builder-bg-source) içinde xDrip+ seçin.

## 4. Juggluco kullanın

[Buraya](./Juggluco.md) bakın.
