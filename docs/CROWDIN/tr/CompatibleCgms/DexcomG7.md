# Dexcom G7, ONE+ ve Stelo


## Ön Bilgi

Önemli bir nokta: G7, ONE+ ve Stelo sistemleri, G6'dan farklı olarak değerleri yumuşatmaz: ne uygulamada ne de okuyucuda. Bununla ilgili daha fazla ayrıntıya [buradan](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app) ulaşabilirsiniz.

```{admonition} Smoothing method 
Dexcom G7/ONE+/Stelo için önerilen [yumuşatma yöntemini](../CompatibleCgms/SmoothingBloodGlucoseData.md) okuyun
```

## 1. xDrip (G7, ONE+ veya Stelo'ya doğrudan bağlantı)

- xDrip sensöre kendisi bağlanır: Dexcom uygulamasını kaldırın, çünkü sensöre yalnızca bir uygulama bağlanabilir. Dexcom uygulamasını tutmak için bunun yerine [xDrip Companion App](#DexcomG7-xdrip-companion-app) kullanın.
- Buradaki talimatları izleyin: [xDrip G7, ONE+ ve Stelo](https://navid200.github.io/xDrip/docs/Dexcom/G7.html). Güncel bir xDrip sürümü gereklidir; en düşük sürüm için bağlantıdaki sayfaya bakın.
- [**Konfigürasyon → KŞ kaynağı**](#Config-Builder-bg-source) içinde xDrip'i seçin.

- xDrip ayarlarını, xDrip ayarları sayfasındaki açıklamalara göre yapın: [xDrip ayarları](../CompatibleCgms/xDrip.md).

## 2. Build Your Own Dexcom App (yalnızca G7)

```{admonition} Old app version
:class: warning
Dexcom BYODA artık uygulamanın çok eski bir sürümüdür ve güncellenemez. ONE+ veya Stelo için kullanılamaz.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA), AAPS'e yerel yayını destekler

-   Bu uygulama, Dexcom G7'nizi herhangi bir Android akıllı telefonla kullanmanızı sağlar.
-   Orijinal Dexcom uygulamasını kaldırın
-   İndirilen apk'yı yükleyin
-   Yamalı uygulamaya sensör kodunu girin
-   Kısa bir süre sonra BYODA sensör sinyalini almalıdır.

(DexcomG7-xdrip-companion-app)=

## 3. xDrip Companion App (G7, ONE+ ve Stelo)

Resmi Dexcom uygulaması sensöre bağlı kalır. xDrip, glikoz değerlerini Dexcom uygulamasının bildirimlerinden okur ve **AAPS**'e gönderir.

```{admonition} Not a trusted data source
:class: note
**AAPS**, Companion App modundaki xDrip'i [güvenilir bir KŞ veri kaynağı](#GettingStarted-TrustedBGSource) olarak kabul etmez: SMB'lere her zaman izin verilmez.
```

### Dexcom uygulamasının bildirimlerini okuma

- Dexcom uygulamasını yüklü ve sensöre bağlı tutun. Bildirimleri görünür kalmalıdır: Onları sessize almayın veya gizlemeyin.
- [xDrip](https://github.com/NightscoutFoundation/xDrip)'i indirin ve yükleyin. xDrip'te Dexcom uygulamasındaki ile aynı glikoz birimlerini kullanın.
- xDrip'te **Settings** > **Hardware Data Source** bölümüne gidin ve **Companion App** seçeneğini seçin.

  ![xDrip Hardware Data Source: Companion App](../images/xDrip_Companion_DataSource.png)

- xDrip bildirimleri okumak için izin ister. **OK** düğmesine dokunun, ardından listede **xDrip**'i seçin ve **Bildirim erişimine izin ver** seçeneğini açın.

  ![Bildirim erişimi listesi](../images/xDrip_Companion_NotificationAccess1.png)

- **Bildirim erişimine izin ver** gri görünüyorsa (*Kısıtlanmış ayar tarafından kontrol ediliyor*), xDrip Play Store'dan yüklenmediği için Android bunu engeller:

  ![Kısıtlanmış ayar tarafından kontrol edilen bildirim erişimi](../images/xDrip_Companion_Restricted.png)

  xDrip uygulama bilgilerini açın (xDrip simgesine uzun basın > **Uygulama bilgileri**), sağ üstteki üç nokta menüsüne dokunun ve **Kısıtlanmış ayarlara izin ver** seçeneğini seçin. Sonra bildirim erişimi ekranına geri dönün ve izin verin.

  ![Uygulama bilgileri: Kısıtlanmış ayarlara izin ver](../images/xDrip_Companion_AllowRestricted.png)

  ![xDrip için bildirim erişimine izin verildi](../images/xDrip_Companion_NotificationAccess2.png)

- Dexcom uygulaması yeni bir değer gösterdiğinde ölçümler xDrip'te görünür. Hiçbir şey görünmezse xDrip'te bir sensör başlatmanız gerekebilir: Bunun gerçek sensöre hiçbir etkisi yoktur. Stelo bu modda 15 dakikada bir ölçüm verir.

### Companion Bluetooth (G7)

Dexcom uygulaması bir G7 sensörüne bağlıyken xDrip, sensörün Bluetooth üzerinden Dexcom uygulamasına gönderdiği ölçümleri de dinleyebilir. xDrip sensörle eşleşmez ve sensör kodunu girmeniz gerekmez: Kontrol Dexcom uygulamasında kalır.

**Companion Bluetooth** ile xDrip, bildirimin göründüğü zaman yerine her ölçümün tam zamanını ve eğilimini sensörden alır ve telefon menzil dışındayken oluşan boşlukları doldurur (backfill).

- xDrip'te **Settings** > **Less common settings** > **Bluetooth Settings** bölümüne gidin ve **Companion Bluetooth** seçeneğini açın.

  ![xDrip Bluetooth Settings: Companion Bluetooth](../images/xDrip_Companion_Bluetooth.png)

- Bu, her telefonda ve her Android sürümünde çalışmaz. Sorun görürseniz kapatın.
- Telefonun Bluetooth listesinde hâlâ eski bir Dexcom sensörü varsa xDrip yanlış sensörü dinleyebilir: Android'de **Ayarlar** > **Bağlı cihazlar** bölümünde artık kullanmadığınız sensörleri unutun.
- Companion Bluetooth, G7 için yapılmıştır. ONE+ ve Stelo ile bildirimlere güvenin.

### AAPS'te yapılandırma

- [**Konfigürasyon → KŞ kaynağı**](#Config-Builder-bg-source) içinde xDrip'i seçin.
- xDrip ayarlarını, xDrip ayarları sayfasındaki açıklamalara göre yapın: [xDrip ayarları](../CompatibleCgms/xDrip.md).

## 4. Juggluco (G7 ve ONE+)

Sürüm 9.0 veya üstü gereklidir

- Daha önce sensöre bağlı olan uygulamayı devre dışı bırakın: Uygulamayı kaldırın veya "Durmaya zorla" seçeneğini kullanın. Uygulama ayarlarında "Yakındaki cihazlar" iznini kapatın. Uygulamanın pil kullanımını kısıtlayın.

- Sensörü Bluetooth ayarlarında unutun: Android ayarlarında sensörü eşlenmiş cihazlar arasında bulun ve "Unut" seçeneğini seçin. Dexcom G7 sensör adları DXCM ile başlar.

- Diğer sensörlerin parazitinden kaçının: Eski Dexcom sensörlerini Bluetooth menzilinin dışında tutun.

- G7 sensörünü Juggluco'ya bağlayın: Juggluco'yu açın → Sol menü → Photo. G7 sensörünün aplikatöründeki veri matrisini (data matrix) tarayın. Juggluco'nun sensörü bulması için 5 dakikaya kadar bekleyin.

- Eşleştirme koşulları: Sensörün Juggluco ile eşleştirilmesini onaylayın. Eşleştirme sırasında ekranın kilitli olmadığından emin olun. Eşleştirme başarısız olursa yeniden denemeden önce 5 dakika bekleyin.

- İstisna: Wear OS saatler, onay düğmesine basmadan eşleşebilir.
