# Genel CGM önerileri

## CGM hijyeni

Hangi CGM sistemini kullanırsanız kullanın, eğer kan bazlı kalibrasyon yapacaksanız, DIY CGM yazılımını veya resmi uygulamaları kullansanız da kullanmasanız da uygulamanız gereken çok net kurallar vardır.

-   Ellerin ve kitin temiz olduğundan emin olun.
-   Düz bir dizi ölçüm noktanız olduğunda kalibre etmeye çalışın (15-30 dakika genellikle yeterlidir)
-   Glikoz seviyeleri yukarı veya aşağı hareket ederken kalibrasyon yapmaktan kaçının.
-   * "Yeterli" kalibrasyon yapın - resmi uygulamalarda, günde bir veya iki kez kontrol yapmanız istenir. Kendin Yap sistemlerde yapmayabilirsiniz ancak kalibrasyon yapmadan devam etme konusunda dikkatli olmalısınız.
-   Mümkünse, bazı okumalarınızı daha düşük bir aralıkta (4-5mmol/l veya 72-90mg/dl) ve bazılarını biraz daha yüksek bir seviyede (7-9mmol/l veya 126-160mg/dl) olarak kalibre edin. bu, nokta/eğim kalibrasyonu için daha iyi bir aralık sağlar.

## Sensör Ayarlama (G6)

Sensörü ayarlarken, kanamayı önlemek için aplikatöre çok fazla bastırmamanız önerilir. Sensör teli kanla temas etmemelidir.

Sensör yerleştirildikten sonra, verici sensör üzerindeki tutucusuna takılabilir. Dikkat! Önce sensörün kare tarafını yerleştirip ardından yuvarlak tarafa bastırın.

(troubleshooting)=
## Sorun giderme

### Bağlantı problemleri

Bluetooth connection may be disturbed by other nearby Bluetooth devices such as blood glucose meters, headsets, tablets or kitchen devices such as microwave ovens or ceramic hobs. In this case xdrip does not display any BG values. When bluetooth connection is restabilised the data is backfilled.

### Sensör Hataları

If recurring sensor errors occur try selecting a different body site to set your sensor. The sensor thread should not come into contact with blood.

Often a "Sensor Error" can be corrected by immediate drinking and massage around the sensor!

### Atlamalı değerler

You might try to change settings for noise blocking in xdrip (Settings - Inter-App Settings - Noise Blocking) i.e. "Block Very High noise and worse". See also [Smoothing BG data](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

### Negatif Sensör Yaşı

![Negative sensor age](../images/Troubleshooting_SensorAge.png)

This occurs if there is either a double "CGM Sensor Insert" entry in [actions tab / menu](../Configuration/Config-Builder.md#actions) or a sensor insert with wrong date. Go to treatments tab \> careportal and delete the wrong entry.
