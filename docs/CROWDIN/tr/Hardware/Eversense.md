# Eversense kullanıcıları için

The easiest way to use Eversense with AAPS is to install the EU or US modified [Eversense app](https://cr4ck3d3v3r53n53.club/) (and uninstall the original one first).

**Uyarı: Eski uygulamayı kaldırdığınızda, bir haftadan eski yerel geçmiş verileriniz kaybolacak!**

To finally get your data to AAPS, you need to install [ESEL](https://github.com/BernhardRo/Esel/releases) and enable "Send to AAPS and xDrip" in ESEL and "MM640g" as BG source in the [Configuration Builder](../Configuration/Config-Builder.md) in AAPS. Eversense'den gelen KŞ verileri bazen gürültülü olabileceğinden, ESEL'de "Smooth Data"yı etkinleştirmiş olmak iyidir; bu AAPS'de "Basit delta yerine her zaman kısa ortalama delta kullan"ı etkinleştirmekten daha iyidir.

xDrip'i Eversense ile kullanma talimatını [burada](https://github.com/BernhardRo/Esel/tree/master/apk) bulabilirsiniz.
