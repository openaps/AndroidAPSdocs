# Dexcom G6 ve ONE

## Ön Bilgi

-   Genel CGM hijyeni ve sensör yerleştirme önerilerini [buradan](../CompatibleCgms/GeneralCGMRecommendation.md) uygulayın.

## G6 ve ONE ile döngü için genel ipuçları

- Yeni vericilerin adı Firefly'dır. Sensörler verici çıkarılmadan yeniden başlatılamaz, verici de sıfırlanamaz. Ayrıca bu vericiler ham veri üretmez.

- Sensörleri yeniden başlatıyorsanız kalibrasyon yapmaya hazır olun ve değerlerdeki farklılıkları izleyin.

- G6/ONE sensörü fabrika kalibrasyonuyla önceden ıslatmak (pre-soak) büyük olasılıkla sonuçlarda farklılıklara yol açar. 'pre-soak' ön ısınma yapıyorsanız, en iyi sonuçları almak için muhtemelen sensörü kalibre etmeniz gerekecektir.

Daha fazlasını Tim Street'in [www.diabettech.com](https://www.diabettech.com) sitesinde yayımladığı [makalede](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) okuyun.

## G6 veya ONE'ı xDrip ile kullanıyorsanız

- Henüz kurmadıysanız [xDrip](https://github.com/NightscoutFoundation/xDrip)'i indirin ve ayarlarını [xDrip ayarları sayfasına](../CompatibleCgms/xDrip.md) göre yapın.
- [**Konfigürasyon → KŞ kaynağı**](#Config-Builder-bg-source) içinde xDrip'i seçin.
- Dexcom G6 ve ONE vericileri aynı anda Dexcom alıcısına (veya t:slim pompaya) ve telefonunuzdaki bir uygulamaya bağlanabilir.
- xDrip'i alıcı olarak kullanırken önce Dexcom uygulamasını kaldırın. **xDrip'i ve Dexcom uygulamasını aynı anda vericiye bağlayamazsınız!**
- Clarity'ye ihtiyacınız varsa ve xDrip alarmlarından yararlanmak istiyorsanız, xDrip'e yerel yayın ile [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)'yı (yalnızca G6) kullanın.
- You can also use xDrip as a companion app of the official Dexcom app, but you might experience delays in BG readings. To read the Dexcom app notifications without xDrip, as a trusted data source, use the [Notification Reader](#DexcomG6-notification-reader).
- xDrip, güncel vericilerde her zaman vericinin [yerleşik algoritmasını](https://navid200.github.io/xDrip/docs/Native-Algorithm.html) kullanır; bunu kapatmak için bir neden yoktur. [Önleyici yeniden başlatmalar](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) yalnızca eski vericilerde (ürün yazılımı 1.6.5.25 veya daha eski) çalışır; bu vericilerde sensörün 10 gün sonra durmasını önlemek için gereklidir. Yeni (Firefly) vericiler bunları yok sayar. Herhangi bir yeniden başlatmayı denemeden önce [Restart a sensor](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html) sayfasına bakın.
- Sensörün ve vericinin kendisiyle ilgili her şey [xDrip Dexcom sayfasında](https://navid200.github.io/xDrip/docs/Dexcom_page.html) anlatılmıştır.

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## G6'yı Build Your Own Dexcom App ile kullanıyorsanız

```{admonition} Old app version
:class: warning
Dexcom BYODA artık uygulamanın çok eski bir sürümüdür ve güncellenemez.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA), AAPS'e ve/veya xDrip'e yerel yayını destekler

-   Bu uygulama, Dexcom G6'nızı herhangi bir Android akıllı telefonla kullanmanızı sağlar.
-   Daha önce orijinal Dexcom uygulamasını veya yamalı Dexcom uygulamasını kullandıysanız onu kaldırın (şu anda çalışan sensörü **durdurmayın**)
-   İndirilen apk'yı yükleyin
-   Yamalı uygulamada sensör kodunu ve verici seri numarasını girin.
-   Telefon ayarlarında apps > Dexcom G6 > permissions > additional permissions bölümüne gidin ve 'Access Dexcom app' seçeneğine basın.
-   Kısa bir süre sonra BYODA verici sinyalini almalıdır.

### AAPS ayarları

-   [**Konfigürasyon → KŞ kaynağı**](#Config-Builder-bg-source) içinde **BYODA**'yı seçin.

-   Hiç değer almıyorsanız başka bir veri kaynağı seçin, sonra AAPS ile BYODA yayını arasındaki bağlantıyı kurmak üzere izin isteğini tetiklemek için **BYODA**'yı yeniden seçin.

### xDrip ayarları

-   Veri kaynağı olarak '640G/Eversense' seçeneğini seçin.
-   Değer almak için xDrip'te 'start sensor' komutu çalıştırılmalıdır. Bu, Build Your Own Dexcom App tarafından kontrol edilen mevcut sensörünüzü etkilemez.

(DexcomG6-notification-reader)=
## If using G6 or ONE with the Notification Reader

The official Dexcom G6 or ONE app stays connected to the transmitter. **AAPS** reads the glucose value directly from the notification of the Dexcom app, without any other app in between.

```{admonition} Trusted data source
:class: note
Readings from the Dexcom G6 and ONE apps are a [trusted BG data source](#GettingStarted-TrustedBGSource): SMBs can be allowed all the time.
```

Compared to BYODA or xDrip, the Notification Reader has limits:

- **No trend arrow** and **no backfill**: readings missed while the phone was off or out of range are lost.
- Each reading gets the time the notification appeared, not the exact time of the sensor reading.
- Only values between 40 and 405 mg/dL (2.2 and 22.5 mmol/L) are read. "LOW" and "HIGH" are not read.

### Set up the Dexcom app

-   Keep the Dexcom app installed and connected to the transmitter.
-   Make sure the Dexcom app shows the current glucose value in its notification. Bildirimleri görünür kalmalıdır: Onları sessize almayın veya gizlemeyin.
-   Use the same glucose units (mg/dL or mmol/L) in the Dexcom app as in **AAPS**. Otherwise **AAPS** cannot read the value.

### AAPS'te yapılandırma

-   Select **Notification Reader** in [**Configuration → BG Source**](#Config-Builder-bg-source) and confirm the switch.

    ![BG Source: Notification Reader selected](../images/NotificationReader_BgSource.png)

-   Back on the main screen, **AAPS** shows **Permissions Required**. Next to **Notification Access**, tap **Grant**.

    ![Permissions Required: Notification Access](../images/NotificationReader_Permissions.png)

-   Android opens its notification access list (its name depends on your Android version, for example *Notification read, reply & control*). Select **AAPS**, turn on **Allow notification access** and confirm with **Allow**.

    ![Android asks to allow notification access for AAPS](../images/NotificationReader_AllowDialog.png)

    Android warns that **AAPS** could read all your notifications. **AAPS** only reads the notifications of supported CGM apps and ignores all others.

    ![Notification access allowed for AAPS](../images/NotificationReader_AccessOn.png)

-   If **Allow notification access** is greyed out (*Controlled by Restricted Setting*), Android blocks it because **AAPS** was not installed from the Play Store. Open the **AAPS** app info (long press the **AAPS** icon > **App info**), tap the three dots menu at the top right and select **Allow restricted settings**. Sonra bildirim erişimi ekranına geri dönün ve izin verin.
-   Readings appear in **AAPS** when the Dexcom app shows a new value.

```{warning}
If the Dexcom app notification shows more than one glucose number, or none, **AAPS** skips that notification.
```


(DexcomG6-troubleshooting-g6)=
## G6 ve ONE sorun giderme

### Dexcom G6/ONE'a özel sorun giderme

-   [Buradaki](https://navid200.github.io/xDrip/docs/Dexcom_page.html) sayfada aşağı kaydırarak **Troubleshooting** bölümüne gelin.

### Genel sorun giderme

CGM'ler için genel sorun giderme bilgilerini [burada](#general-cgm-troubleshooting) bulabilirsiniz.

### Çalışan sensörle yeni verici

If you happen to change transmitter during a running sensor session you might try to remove the transmitter without damaging the sensor mount. Bir videoyu [burada](https://navid200.github.io/xDrip/docs/Remove-transmitter.html) bulabilirsiniz. Bunun yerine [bu çözümü](https://youtu.be/tx-kTsrkNUM) seçerseniz, şerit ile [sensör kontaklarına zarar vermemek](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html) için dikkatli olmalısınız.
