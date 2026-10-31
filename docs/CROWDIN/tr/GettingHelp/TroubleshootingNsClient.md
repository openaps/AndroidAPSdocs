(Troubleshooting-NSClient-troubleshooting-nsclient)=

# NSClient'te Sorun Giderme

NSClient, Nightscout ile istikrarlı iletişime güvenir. Kararsız bir bağlantı, senkronizasyon hatalarına ve yüksek veri kullanımına yol açar.

Nightscout'ta kimse sizi takip etmiyorsa, pil ömründen tasarruf etmek için NSClient'i duraklatmayı seçebilir veya NSClient'i yalnızca Wi-Fi ve/veya şarj sırasında bağlanacak şekilde kurmayı seçebilirsiniz.

* Kararsız bir bağlantı nasıl tespit edilir?

Open the NSClient screen (**Configuration** > **Communication** > **NSClientV3** > **Open plugin**) and watch the **Status** and the log. With websockets enabled, the status should stay "connected", with almost no reconnection messages in the log. Çok sayıda yeniden bağlantı bildirimi görüyorsanız, bir sorun var demektir.

* Yeniden başlat

As a first step, restart Nightscout and then your phone to see if the issue is permanent.

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

If **AAPS** connects to Nightscout correctly but BG displays as N/A: in the [NSClientV3 settings](#Preferences-nsclient), open **Synchronization** and turn on **Receive CGM data from NS**. This option is hidden while client control is on ([hardened mode](#client-master-control-hardened-mode)); in that case check that **NSClient BG** is selected in **Configuration** → **BG Source**.

* Hala hata alıyorsanız...

Veritabanınızın boyutunu MongoDB'de (veya nightcout'taki veritabanı boyutu eklentisi aracılığıyla) kontrol edin. MongoDB'de ücretsiz katmanı kullanıyorsanız, 496MB'ın dolu olduğu ve temizlenmesi gerektiği anlamına gelir. [Veritabanınızın boyutunu kontrol etmek ve verileri temizlemek için bu Nightscout talimatlarını izleyin](https://nightscout.github.io/troubleshoot/troublehoot/#database-full).

Veritabanınızdaki verileri temizlemeden önce, henüz kurmadıysanız, AAPS verilerinizi Open Humans projesine (araştırma için) bağışlamayı düşünebilirsiniz. The instructions are on the [OpenHumans configuration page](../SupportingAaps/OpenHumans.md).