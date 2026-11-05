(Troubleshooting-NSClient-troubleshooting-nsclient)=

# NSClient'te Sorun Giderme

NSClient, Nightscout ile istikrarlı iletişime güvenir. Kararsız bir bağlantı, senkronizasyon hatalarına ve yüksek veri kullanımına yol açar.

Nightscout'ta kimse sizi takip etmiyorsa, pil ömründen tasarruf etmek için NSClient'i duraklatmayı seçebilir veya NSClient'i yalnızca Wi-Fi ve/veya şarj sırasında bağlanacak şekilde kurmayı seçebilirsiniz.

* Kararsız bir bağlantı nasıl tespit edilir?

NSClient ekranını açın (**Konfigürasyon** > **İletişim** > **NSClientV3** > **Eklentiyi aç**) ve **Durum** alanını ve günlüğü izleyin. Websockets etkinken durum "Bağlandı" olarak kalmalı ve günlükte neredeyse hiç yeniden bağlantı mesajı olmamalıdır. Çok sayıda yeniden bağlantı bildirimi görüyorsanız, bir sorun var demektir.

* Yeniden başlat

İlk adım olarak, sorunun kalıcı olup olmadığını görmek için önce Nightscout'u, sonra telefonunuzu yeniden başlatın.

Nightscout'unuz Heroku'da barındırılıyorsa, Nightscout'u şu şekilde yeniden başlatabilirsiniz: Heroku'da oturum açın, nightscout uygulamanızın adına tıklayın, 'More' menüsüne ve ardından 'Restart all dynos'a tıklayın.

Diğer host'lar için lütfen host kılavuzlarına bakın.

* Telefon sorunları

Android, telefonunuzu uyku moduna geçirebilir. Her zaman arka planda çalışmasına izin vermek için telefonunuzun güç seçeneklerinde AAPS için bir istisna olup olmadığını kontrol edin.

Güçlü ağ sinyali konumundayken NSClient'i tekrar kontrol edin.

Başka bir telefon deneyin.

* Nightscout

Siteniz Azure'da barındırılıyorsa, birçok kişi Heroku'ya taşındıktan sonra bağlantı sorunlarının düzeldiğini fark etti.

Azure'daki bağlantı sorunlarına geçici bir çözüm: Uygulama ayarlarında (Application settings) HTTP protokolünü 2.0, Websockets'i de ON olarak ayarlayın

    {admonition} Remote control needs websockets
    :class: important
    Websockets are **mandatory** for remote control from **AAPSClient**, on both phones. If the websocket connection keeps dropping, remote control does not work. Data synchronization still works, but more slowly. Your Nightscout host must support websockets.

* Nightscout'tan KŞ okunamıyor

**AAPS** Nightscout'a doğru bağlanıyor ama KŞ N/A olarak görünüyorsa: [NSClientV3 ayarlarında](#Preferences-nsclient) **Senkronizasyon** bölümünü açın ve **NS'den CGM verilerini al** seçeneğini açın. İstemci kontrolü açıkken ([güçlendirilmiş mod](#client-master-control-hardened-mode)) bu seçenek gizlenir; bu durumda **Konfigürasyon** → **KŞ kaynağı** içinde **NSClient KŞ** seçili olduğunu kontrol edin.

* Hâlâ hata alıyorsanız...

Veritabanınızın boyutunu MongoDB'de (veya nightscout'taki veritabanı boyutu eklentisi ile) kontrol edin. MongoDB'de ücretsiz katmanı kullanıyorsanız, 496MB veritabanının dolu olduğu ve temizlenmesi gerektiği anlamına gelir. [Veritabanınızın boyutunu kontrol etmek ve verileri temizlemek için bu Nightscout talimatlarını izleyin](https://nightscout.github.io/troubleshoot/troubleshoot/#database-full).

Veritabanınızdaki verileri temizlemeden önce, henüz kurmadıysanız, AAPS verilerinizi Open Humans projesine (araştırma için) bağışlamayı düşünebilirsiniz. Talimatlar [OpenHumans yapılandırma sayfasındadır](../SupportingAaps/OpenHumans.md).