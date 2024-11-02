# Genel CGM önerileri

## CGM hijyeni

Hangi CGM sistemini kullanırsanız kullanın, eğer kan bazlı kalibrasyon yapacaksanız, DIY CGM yazılımını veya resmi uygulamaları kullansanız da kullanmasanız da uygulamanız gereken çok net kurallar vardır.

-   Ellerin ve kitin temiz olduğundan emin olun.
-   Düz bir dizi ölçüm noktanız olduğunda kalibre etmeye çalışın (15-30 dakika genellikle yeterlidir)
-   Glikoz seviyeleri yukarı veya aşağı hareket ederken kalibrasyon yapmaktan kaçının.
-   * "Yeterli" kalibrasyon yapın - resmi uygulamalarda, günde bir veya iki kez kontrol yapmanız istenir. Kendin Yap sistemlerde yapmayabilirsiniz ancak kalibrasyon yapmadan devam etme konusunda dikkatli olmalısınız.
-   For sensors not requiring or not allowing calibration, check at least daily real blood sugar. AAPS will be as safe as your sensor readings are reliable.
-   Mümkünse, bazı okumalarınızı daha düşük bir aralıkta (4-5mmol/l veya 72-90mg/dl) ve bazılarını biraz daha yüksek bir seviyede (7-9mmol/l veya 126-160mg/dl) olarak kalibre edin. bu, nokta/eğim kalibrasyonu için daha iyi bir aralık sağlar.

## Sensör Ayarlama (G6)

Sensörü ayarlarken, kanamayı önlemek için aplikatöre çok fazla bastırmamanız önerilir. The sensor contacts should not come into contact with blood.

Sensör yerleştirildikten sonra, verici sensör üzerindeki tutucusuna takılabilir. Dikkat! Önce sensörün kare tarafını yerleştirip ardından yuvarlak tarafa bastırın.

(general-cgm-troubleshooting)=
## Troubleshooting

### Bağlantı problemleri

Bluetooth bağlantısı, kan şekeri ölçüm cihazları, kulaklıklar, tabletler gibi yakındaki diğer bluetooth cihazları veya mikrodalga fırınlar veya seramik ocaklar gibi mutfak cihazları tarafından bozulabilir. Bu durumda xdrip herhangi bir KŞ değeri göstermez. Bluetooth bağlantısı stabil olduğunda veriler yeniden gelmeye başlar.

### Sensör Hataları

Yinelenen sensör hataları meydana gelirse, sensörünüzü yerleştirmek için farklı bir vücut bölgesi seçmeyi deneyin. The sensor contacts should not come into contact with blood.

Genellikle bir "Sensör Hatası", hemen su içerek (dehidrasyon) ve sensörün etrafına masaj yaparak düzeltilebilir!

### Atlamalı değerler

Gürültü engelleme ayarlarını xdrip'te (Ayarlar - Gelişmiş Ayarlar - Gürültü Engelleme) değiştirmeyi deneyebilirsiniz. Örn". See also [Smoothing BG data](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Negatif Sensör Yaşı

![Negatif sensör yaşı](../images/Troubleshooting_SensorAge.png)

This occurs if there is either a double "CGM Sensor Insert" entry in [actions tab / menu](#screens-action-tab) or a sensor insert with wrong date. Tedaviler sekmesine gidin ve \> bakımportalında yanlış girişi silin.
