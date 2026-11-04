# Genel CGM önerileri

## CGM hijyeni

Whichever CGM system you are using, if you are going to use blood based calibration, then there are some very clear rules you should apply, whether or not you are using DIY CGM software or the official apps.

-   Ellerin ve kitin temiz olduğundan emin olun.
-   Düz oklu bir dizi nokta gördüğünüzde kalibre etmeye çalışın (genellikle 15-30 dakika yeterlidir)
-   Glikoz seviyeleri yukarı veya aşağı hareket ederken kalibrasyon yapmaktan kaçının.
-   “Yeterli” sayıda kalibrasyon yapın: Resmi uygulamalar sizden günde bir veya iki kez kontrol yapmanızı ister. DIY sistemlerde bu uyarıyı almayabilirsiniz; kalibrasyon yapmadan devam ederken dikkatli olmalısınız.
-   Kalibrasyon gerektirmeyen veya kalibrasyona izin vermeyen sensörlerde en az günde bir kez gerçek kan şekerinizi kontrol edin. AAPS, sensör ölçümleriniz ne kadar güvenilirse o kadar güvenlidir.
-   Mümkünse, bazı kalibrasyonları daha düşük bir aralıkta (4-5mmol/L veya 72-90mg/dL) ve bazılarını biraz daha yüksek bir seviyede (7-9mmol/L veya 126-160mg/dL) yapın; bu, nokta/eğim kalibrasyonu için daha iyi bir aralık sağlar.

## Sensörü yerleştirme (G6)

When setting sensor, it is recommended not to press the inserter too firmly in order to avoid bleeding. Sensör kontakları kanla temas etmemelidir.

After setting the sensor, the transmitter can be clicked into the sensor holder. Dikkat! Önce kare tarafı yerine oturtun, sonra yuvarlak tarafa bastırın.

(general-cgm-troubleshooting)=
## Troubleshooting

### Bağlantı problemleri

Bluetooth bağlantısı, kan şekeri ölçüm cihazları, kulaklıklar, tabletler gibi yakındaki diğer Bluetooth cihazları veya mikrodalga fırın, seramik ocak gibi mutfak cihazları tarafından bozulabilir. Bu durumda xDrip hiçbir KŞ değeri göstermez. Bluetooth bağlantısı yeniden kurulduğunda eksik veriler doldurulur (backfill).

### Sensör Hataları

If recurring sensor errors occur try selecting a different body site to set your sensor. Sensör kontakları kanla temas etmemelidir.

Bir "Sensör Hatası" çoğu zaman hemen su içerek ve sensörün çevresine masaj yaparak düzeltilebilir!

### Atlamalı değerler

xDrip'te gürültü engelleme ayarlarını değiştirmeyi deneyebilirsiniz (Settings - Inter-App Settings - Noise Blocking), örneğin "Block Very High noise and worse". Ayrıca bakın: [Kan şekeri verilerini yumuşatma](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Negatif Sensör Yaşı

![Genişletilmiş durum panelinin Sensör satırında sensör yaşı](../images/main/main_status_row_expanded.png)

Sensör yaşı, ana ekrandaki durum panelinin **Sensör** satırında gösterilir (genişletmek için ok simgesine dokunun). Negatif yaş, ya çift bir "Sensör yerleştirme" [careportal kaydı](#aaps-screens-careportal) ya da tarihi yanlış bir sensör yerleştirme kaydı varsa oluşur. **Tedavi geçmişi** (☰ menüsü) ekranını açın, **Careportal** sekmesini seçin ve yanlış kaydı silin.
