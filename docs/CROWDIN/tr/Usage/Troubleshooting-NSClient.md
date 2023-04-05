(Troubleshooting-NSClient-troubleshooting-nsclient)=

# NSClient'te Sorun Giderme

NSClient, Nightscout ile istikrarlı iletişime güvenir. Kararsız bir bağlantı, senkronizasyon hatalarına ve yüksek veri kullanımına yol açar.

Nightscout'ta kimse sizi takip etmiyorsa, pil ömründen tasarruf etmek için NSClient'i duraklatmayı seçebilir veya NSClient'i yalnızca Wi-Fi ve/veya şarj sırasında bağlanacak şekilde kurmayı seçebilirsiniz.

* Kararsız bir bağlantı nasıl tespit edilir?

AAPS'de NSClient sekmesine gidin ve günlüğü izleyin. Beklenen davranış, her ~30 saniyede bir PING almak ve neredeyse hiç yeniden bağlantı mesajı almamaktır. Çok sayıda yeniden bağlantı bildirimi görüyorsanız, bir sorun var demektir.

Since AAPS version 2.0, when such behavior is detected, NSClient is paused for 15 minutes and the message "NSClient malfunction" is displayed on the main Overview screen.

* Yeniden başlat

İlk adım olarak denemeniz gereken şey, sorunun kalıcı olup olmadığını görmek için Nightscout ve ardından telefon olmak üzere her ikisini de yeniden başlatmaktır.

Nightscout'unuz Heroku'da barındırılıyorsa, Nightscout'u şu şekilde yeniden başlatabilirsiniz: Heroku'da oturum açarak, nightcout uygulamanızın adına tıklayın, 'More' menüsüne ve ardından 'Restart all dynos'a tıklayın.

Diğer host'lar için lütfen host kılavuzlarına bakın.

* Telefon sorunları

Android, telefonunuzu uyku moduna geçirebilir. Check if you have an exception for AAPS in your phones power options to allow it to run in the background all the time.

Güçlü ağ sinyali konumundayken NSClient'i tekrar kontrol edin.

Başka bir telefon deneyin.

* Nightscout

Siteniz Azure'da barındırılıyorsa, birçok kişi Heroku'ya taşındıktan sonra bağlantı sorunlarının düzeldiğini fark etti.

Azure'daki bağlantı sorunlarına geçici bir çözüm, Uygulama ayarları HTTP protokolünü 2.0 olarak ve Websockets'i ON olarak ayarlamaktır.

* No BG reading from Nightscout

If AAPS connects to Nightscout correctly but does BG displays as N/A. Go to NSCLIENT tab, press the 3 dot menu top right, Click NSClient Preferences -> Synchronization turn on "Receive/backfill CGM data".

* If you still get an error...

Check the size of your database in MongoDB (or via the database size plugin in nightscout). If you are using the free tier in MongoDB, 496MB means it is full and needs to be cleaned up. [Follow these Nightscout instructions for checking the size of your database and clearing out data](https://nightscout.github.io/troubleshoot/troublehoot/#database-full).

Before clearing data from your database and if you haven't already set it up, you should consider donating your AAPS data to the Open Humans project (for research). The instructions are on the [OpenHumans configuration page](../Configuration/OpenHumans).