# Üçüncü taraf Android Automate Uygulaması ile otomasyon

**This article has been written before AAPS version 2.5. There is an [automation plugin in AAPS](../DailyLifeWithAaps/Automations.md) itself with AAPS version 2.5. For some, this here might be still useful, but should only be used by advanced users.**

As AAPS is a hybrid closed loop system, some user interaction is necessary though (e.g. tell the loop that you are walking, eating soon, lying on the sofa...). Frequent manual user inputs can be automated via external tools like Automate or IFTTT to extend the recent AAPS functionality.

## Android Otomatikleştirme Uygulaması

Ücretsiz Android™ uygulaması Automate, akıllı telefonunuzdaki çeşitli görevleri otomatikleştirmenize olanak sağlar. Akış şemaları ile otomasyonlarınızı oluşturun, cihazınızın Bluetooth, Wi-Fi, NFC gibi ayarları otomatik olarak değiştirmesini sağlayın veya bulunduğunuz yere, günün saatine veya diğer herhangi bir “olay tetikleyicisine” göre SMS, e-posta gönderme gibi işlemleri gerçekleştirin. Cihazınızdaki hemen hemen her şeyi otomatikleştirebilirsiniz, Tasker ve Locale için yapılmış eklentileri bile destekler.

Bu aracı kullanarak diyabetinizi çeşitli koşullara göre otomatik olarak tedavi etmek için iş akışlarını 'eğer bu (if this..) şeklinde kolayca oluşturabilirsiniz... ve bu... bunu değil... o zaman şunu yap... ve şu...'. Konfigüre edebileceğiniz binlerce olasılık vardır.

Until now it is **necessary to loop via Nightscout Profile**, as Automate executes the commands via HTTP-request directly in your nightscout website that subsequently syncs it to your AAPS app.

**Offline looping (direct communication between Automate and AAPS app) is not supported yet**, but technologically possible. Belki ileride bir çözüm bulunur. Bunu yapmanın bir yolunu bulduysanız, lütfen bunu bu belgelere ekleyin veya bir geliştiriciyle iletişime geçin.

### Temel gereksinimler

#### Automate Uygulaması

Download Android Automate in Google Play Store or at <https://llamalab.com/automate/> and install it on your smartphone where AAPS runs.

Otomatikleştir'de, ekranın sol üst kısmındaki hamburger menüsüne dokunun > Ayarlar > 'Sistem başlangıcında çalıştır' seçeneğini işaretleyin. Bu sistem başlangıcında iş akışlarınızı otomatik olarak çalıştıracaktır.

![Automate HTTP isteği](../images/automate-app2.png)

#### AAPS

In AAPS, tap on 3 dots menu on the upper right screen and go to Preferences > NSClient > Connection settings > Uncheck 'Use WiFi connection only' and 'Only if charging' as the automated treating does only work when AAPS has an actual nightscout connection.

![Nightscout bağlantı tercihleri](../images/automate-aaps1.jpg)

In AAPS, tap on 3 dots menu on the upper right screen and go to Preferences > NSClient > Advanced Settings > Uncheck 'NS upload only (disabled sync)' and 'No upload to NS'.

Be aware of the [security issues](#Nightscout-security-considerations) that might occur and be very careful if you are using an [Insight pump](#Accu-Chek-Insight-Pump-settings-in-aaps).

![Nightscout indirme tercihleri](../images/automate-aaps2.jpg)

### İş akışı örnekleri

#### Örnek 1: Aktivite (örneğin yürüme veya koşma) algılanırsa, yüksek bir GH ayarlayın. Ve aktivite biterse, 20 dakika bekleyin ve ardından GH'i iptal edin

Bu iş akışı, aktivite davranışını algılayan akıllı telefon sensörlerini (pedometre, yerçekimi sensörü...) dinleyecektir. Yürüme, koşma veya bisiklete binme gibi yakın zamanda bir etkinlik mevcutsa, Otomatikleştirme, kullanıcı tarafından belirlenen süre için kullanıcı tarafından belirlenen yüksek bir geçici hedef belirleyecektir. Aktivite sona ererse, akıllı telefonunuz bunu algılar, 20 dakika bekleyin ve ardından hedefi normal profil değerine geri ayarlayın.

Otomatikleştirme komut dosyasını <https://llamalab.com/automate/community/flows/27808> indirin.

Düzenleme kalemine dokunarak askıyı düzenleyin > Akış çizelgesi

![Automate sling](../images/automate-app3.png)

İş akışını isteklerinize göre aşağıdaki gibi özelleştirin:

![Automate sling](../images/automate-app6.png)

1. = Yüksek GH ayarla
2. = Aktivitenin bitiminden 20 dakika sonra normal hedefe geri dönün

1 ![Automate sling](../images/automate-app1.png)

2 ![Automate sling](../images/automate-app5.png)

İstek URL'si: /api/v1/treats.json ile biten NS-URL'niz (ör. https://my-cgm.herokuapp.com/api/v1/treats.json)

İçerik talebi:

* targetTop / targetBottom: Yüksek GH değeri (üst ve alt aynı değer olmalıdır)
* süre: Yüksek GH'inin süresi (bir süre sonra etkinlik devam etmedikçe normal profil hedefine geri döner). 
* secret: API SHA1 hash'ınız. Bu sizin API anahtarınız DEĞİLDİR! API anahtarınızı <http://www.sha1-online.com/> adresinde SHA1 biçimine dönüştürebilirsiniz

Kaydet: 'Bitti'ye ve kancaya dokunun

Askıyı başlat: Oynat düğmesine dokunun

#### Örnek 2: xDrip+ bir KŞ yüksek alarmı uyarırsa, o zaman ... için düşük bir GH ayarlayın. dakika.

Bu iş akışı, xDrip+ bildirim kanalını dinleyecektir. Kullanıcı tarafından belirlenen bir xDrip+ yüksek KŞ uyarısı tetiklenirse, Otomatikleştirme, kullanıcı tarafından belirlenen süre için kullanıcı tarafından belirlenen bir düşük geçici hedef ayarlar. Bir süre sonra, başka bir olası uyarı, düşük GH'in süresini uzatacaktır.

##### xDrip+

İlk olarak, xDrip+'a aşağıdaki gibi bir KŞ yüksek uyarısı eklemelisiniz:

![xDrip+ uyarı ayarları](../images/automate-xdrip1.png)

Uyarı adı: (Dikkat edin!) Bu ad, tetikleyiciyi ateşlemek için gereklidir. Açık olmalı ve diğer uyarı adlarına benzememelidir. Örnek: '80alarm' yanında '180alarm' bulunmamalıdır.

Eşik: Yüksek alarmı tetiklemesi gereken KŞ değeri.

Varsayılan Erteleme: Düşük GH'iniz için ayarlamayı planladığınız süreyi buraya girin, çünkü uyarı tekrar gelir ve belki de düşük GH'in süresini uzatır.

![xDrip+ uyarı ayarları](../images/automate-xdrip2.png)

##### Automate

İkinci olarak, Automate komut dosyasını <https://llamalab.com/automate/community/flows/27809> indirin.

Düzenleme kalemine dokunarak askıyı düzenleyin > Akış çizelgesi

![Automate sling](../images/automate-app3.png)

İş akışını isteklerinize göre aşağıdaki gibi özelleştirin:

'Bildirim yayınlandı mı?' tetikleyiciyi başlatmak için 'TITLE' öğesini, tetikleyiciyi tetiklemesi gereken xDrip+ uyarınızın adına ayarlamanız ve bu addan önce ve sonra bir * değişkeni eklemeniz gerekir.

![Automate sling](../images/automate-app7.png)

![Automate sling](../images/automate-app4.png)

İstek URL'si: /api/v1/treats.json ile biten NS-URL'niz (ör. https://my-cgm.herokuapp.com/api/v1/treats.json)

İçerik talebi:

* targetTop / targetBottom: Düşük GH değeri (üst ve alt aynı değer olmalıdır)
* süre: Düşük GH'in süresi (bir süre sonra normal profil hedefine geri döner). xDrip+ uyarısı 'Standart erteleme' ile aynı süreyi kullanmanız önerilir
* secret: API SHA1 karmanız. Bu sizin API anahtarınız DEĞİLDİR! API anahtarınızı <http://www.sha1-online.com/> adresinde SHA1 biçimine dönüştürebilirsiniz

Kaydet: 'Bitti'ye ve kancaya dokunun

Askıyı başlat: Oynat düğmesine dokunun

#### Örnek 3: Sizin tarafınızdan eklenecek!!!

Please add further workflows by uploading .flo file to Automate community (under the keyword 'Nightscout') and describe it here by doing [Pull Request on AndroidAPSDocs repository](../SupportingAaps/HowToEditTheDocs.md).

## Eğer buysa, o zaman (IFTTT)

PR ile bir Howto eklemekten çekinmeyin...