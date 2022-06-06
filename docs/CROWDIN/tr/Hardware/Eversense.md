# Eversense kullanıcıları için

Eversense'i AndroidAPS ile kullanmanın en kolay yolu, ABD dışı için modifiye edilmiş [Eversense uygulamasını](https://github.com/BernhardRo/Esel/blob/master/apk/Eversense_CGM_v1.0.410-patched.apk) yüklemektir (öncelikle orijinalini telefonunuzdan kaldırın).

**Uyarı: Eski uygulamayı kaldırdığınızda, bir haftadan eski yerel geçmiş verileriniz kaybolacak!**

Sonunda verilerinizi AndroidAPS'e almayı başardınız, [ESEL](https://github.com/BernhardRo/Esel/blob/master/apk/esel.apk) yüklemelisiniz ve ESEL'de "AAPS ve xDrip'e Gönder"i etkinleştirmeniz gerekir ve ardından AndroidAPS [Konfigürasyon ayarları](../Configuration/Config-Builder.md) içinde KŞ kaynağı olarak "MM640g" etkinleştirmeniz gerekir. Eversense'den gelen KŞ verileri bazen gürültülü olabileceğinden, ESEL'de "Smooth Data"yı etkinleştirmek önemlidir; bu AAPS'de "Basit delta yerine her zaman kısa ortalama delta kullan"ı etkinleştirmekten daha iyidir.

ABD için olanı ve diğerleri ile birlikte xDrip'i bir Eversense ile kullanma talimatı da dahil olmak üzere tüm APK'ları [burada](https://github.com/BernhardRo/Esel/tree/master/apk) bulabilirsiniz.
