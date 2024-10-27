(Troubleshooting-NSClient-troubleshooting-nsclient)=

# NSClient'te Sorun Giderme

NSClient, Nightscout ile istikrarlı iletişime güvenir. Kararsız bir bağlantı, senkronizasyon hatalarına ve yüksek veri kullanımına yol açar.

Nightscout'ta kimse sizi takip etmiyorsa, pil ömründen tasarruf etmek için NSClient'i duraklatmayı seçebilir veya NSClient'i yalnızca Wi-Fi ve/veya şarj sırasında bağlanacak şekilde kurmayı seçebilirsiniz.

* Kararsız bir bağlantı nasıl tespit edilir?

AAPS'de NSClient sekmesine gidin ve günlüğü izleyin. Beklenen davranış, her ~30 saniyede bir PING almak ve neredeyse hiç yeniden bağlantı mesajı almamaktır. Çok sayıda yeniden bağlantı bildirimi görüyorsanız, bir sorun var demektir.

AAPS sürüm 2.0'dan bu yana, böyle bir davranış algılandığında, NSClient 15 dakika duraklatılır ve GİRİŞ ekranında "NSClient arızası" mesajı görüntülenir.

* Yeniden başlat

İlk adım olarak denemeniz gereken şey, sorunun kalıcı olup olmadığını görmek için Nightscout ve ardından telefon olmak üzere her ikisini de yeniden başlatmaktır.

Nightscout'unuz Heroku'da barındırılıyorsa, Nightscout'u şu şekilde yeniden başlatabilirsiniz: Heroku'da oturum açarak, nightcout uygulamanızın adına tıklayın, 'More' menüsüne ve ardından 'Restart all dynos'a tıklayın.

Diğer host'lar için lütfen host kılavuzlarına bakın.

* Telefon sorunları

Android, telefonunuzu uyku moduna geçirebilir. Her zaman arka planda çalışmasına izin vermek için telefonunuzun güç seçeneklerinde AAPS için bir istisna olup olmadığını kontrol edin.

Güçlü ağ sinyali konumundayken NSClient'i tekrar kontrol edin.

Başka bir telefon deneyin.

* Nightscout

Siteniz Azure'da barındırılıyorsa, birçok kişi Heroku'ya taşındıktan sonra bağlantı sorunlarının düzeldiğini fark etti.

Azure'daki bağlantı sorunlarına geçici bir çözüm, Uygulama ayarları HTTP protokolünü 2.0 olarak ve Websockets'i ON olarak ayarlamaktır.

* Nightscout'tan KŞ okunamıyor

AAPS, Nightscout'a doğru şekilde bağlanırsa, ancak BG N/A olarak görüntüleniyorsa, NSCLIENT sekmesine gidin, sağ üstteki 3 noktalı menüye basın, NSClient Tercihleri -> Senkronizasyon'a tıklayın ve "CGM verilerini al/doldur" seçeneğini açın.

* Hala hata alıyorsanız...

Veritabanınızın boyutunu MongoDB'de (veya nightcout'taki veritabanı boyutu eklentisi aracılığıyla) kontrol edin. MongoDB'de ücretsiz katmanı kullanıyorsanız, 496MB'ın dolu olduğu ve temizlenmesi gerektiği anlamına gelir. [Veritabanınızın boyutunu kontrol etmek ve verileri temizlemek için bu Nightscout talimatlarını izleyin](https://nightscout.github.io/troubleshoot/troublehoot/#database-full).

Veritabanınızdaki verileri temizlemeden önce, henüz kurmadıysanız, AAPS verilerinizi Open Humans projesine (araştırma için) bağışlamayı düşünebilirsiniz. The instructions are on the [OpenHumans configuration page](../SupportingAaps/OpenHumans.md).