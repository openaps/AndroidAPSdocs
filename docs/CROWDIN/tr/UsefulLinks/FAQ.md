# Döngü kullanıcıları için SSS

SSS'ye soru ekleme: Bu [talimatları](../SupportingAaps/HowToEditTheDocs.md) izleyin

## General

### Can I just download the AAPS installation file?

Hayır. AAPS için indirilebilir bir apk dosyası yoktur. Uygulamayı kendiniz [oluşturmanız](../SettingUpAaps/BuildingAaps.md) gerekir. Nedeni ise:

AAPS, pompanızı kontrol etmek ve insülin vermek için kullanılır. Avrupa'daki mevcut düzenlemelere göre IIa veya IIb olarak sınıflandırılan tüm sistemler, çeşitli çalışmalar ve imzalar gerektiren düzenleyici onay (CE işareti) gerektiren tıbbi cihazlardır. Düzenlenmemiş bir cihazı dağıtmak yasa dışıdır. Dünyanın başka yerlerinde de benzer düzenlemeler var.

Bu düzenleme (bir şey karşılığında para almak anlamında) sadece satışla sınırlı olmayıp, her türlü dağıtım (hatta ücretsiz dağıtma) için de geçerlidir. Kendiniz için bir tıbbi cihaz oluşturmak, uygulamayı bu düzenlemeler dahilinde kullanmanın tek yoludur.

Bu yüzden apk'ler mevcut değildir.

(FAQ-how-to-begin)=

### How to begin?

[AAPS ile başlamaya hazırlık](../Getting-Started/PreparingForAaps.md) sayfasıyla başlayın: bu sayfa aşağıdaki her şeyi daha ayrıntılı anlatır.

Her şeyden önce, **döngülenebilir donanım bileşenleri almanız** gerekir:

* [Desteklenen bir insülin pompası](../Getting-Started/CompatiblePumps.md), 
* bir [Android akıllı telefon](../Getting-Started/Phones.md) (Apple iOS, AAPS tarafından desteklenmez - [iOS Loop](https://loopkit.github.io/loopdocs/)'a bakabilirsiniz) ve
* bir [sürekli glikoz izleme sistemi](../Getting-Started/CompatiblesCgms.md). 

İkinci olarak, **yazılım bileşenlerinizi kurmanız** gerekir: [AAPS](../SettingUpAaps/BuildingAaps.md), [CGM/FGM kaynağı](../Getting-Started/CompatiblesCgms.md) ve bir [raporlama sunucusu](../SettingUpAaps/SettingUpTheReportingServer.md).

Üçüncü olarak, **tedavi faktörlerinizi kontrol etmek için OpenAPS referans tasarımını öğrenmeli ve anlamalısınız**. Kapalı döngünün temel ilkesi, [bazal oranınızın ve karbonhidrat oranınızın](../SettingUpAaps/YourAapsProfile.md) doğru olmasıdır. Tüm öneriler, bazal ihtiyaçlarınızın karşılandığını ve gördüğünüz yükselme ya da düşüşlerin başka etkenlerden (egzersiz, stres vb.) kaynaklandığını, bu yüzden tek seferlik ayarlamalar gerektirdiğini varsayar. Kapalı döngünün güvenlik için yapabileceği ayarlamalar sınırlandırılmıştır ([OpenAPS Referans Tasarımı](https://openaps.org/reference-design/)'nda izin verilen en yüksek geçici bazal oranına bakın). Bu yüzden izin verilen dozu, yanlış ayarlanmış temel bir bazalı düzeltmek için harcamak istemezsiniz. Örneğin öğün saatine yaklaşırken sık sık düşük geçici bazal görüyorsanız, muhtemelen bazalınızın ayarlanması gerekir. [OtoAyar](#autotune-how-autotune-calculates-adjustments) ile çok sayıda veriyi değerlendirebilirsiniz: OtoAyar, bazalların ve/veya İDF'nin ayarlanması gerekip gerekmediğini ve nasıl ayarlanacağını, ayrıca karbonhidrat oranının değişmesi gerekip gerekmediğini önerir. Ya da bazalınızı [eski usulle](https://integrateddiabetes.com/basal-testing/) test edip ayarlayabilirsiniz.

### Döngü kullanımında hangi pratik konular var?

#### Password protection

Ayarlarınızın kolayca değiştirilmesini istemiyorsanız, onları bir parola, bir PIN veya telefonunuzun biyometrik kimlik doğrulaması (parmak izi, yüz) ile koruyabilirsiniz. **Ayarlar** > **Koruma** > **Ayar koruması**'nı açın ve koruma türünü seçin. Aynı yerde uygulamanın tamamını veya yalnızca bolusları da koruyabilirsiniz. Ayrıntılar için [Ayar koruması](#Preferences-settings-protection) bölümüne bakın.

#### Android Wear akıllı saatler

Bolus vermek veya ayarları değiştirmek için AAPS saat uygulamasını kullanıyorsanız, her isteğin saatte onaylanması gerekir: isteği gönderdikten sonra saat, **ONAYLA** düğmesi olan bir özet gösterir. [Wear OS akıllı saatiniz üzerinden AAPS'in kullanımı](../RemoteFeatures/RemoteControlWearOS.md) sayfasına bakın.

(FAQ-disconnect-pump)=

#### Pompa bağlantısını kesme

Duş almak, banyo yapmak, yüzmek, spor yapmak veya diğer etkinlikler için pompanızı çıkarırsanız, AAPS'e AİNS'i doğru tutmak için insülin verilmediğini bildirmelisiniz.

Pompanın bağlantısı, AAPS ana ekranındaki [döngü simgesi](#AapsScreens-loop-status) ile kesilebilir: simgeye basın ve ihtiyacınız olan süreyle **Pompa bağlantısını kes**'i seçin. Etkinlik planlanandan uzun sürerse simgeye tekrar basın ve yeni bir süre seçin: önce yeniden bağlanmanız gerekmez. Uzun süreli bağlantı kesintilerinde insülin eksikliğini nasıl önleyeceğinizi öğrenmek için [Duş veya etkinlik için pompanın bağlantısını kesme](#pumps-cannulas-disconnecting) bölümüne bakın.

#### Öneriler tek bir CGM değerine dayanmaz

Güvenlik için yapılan öneriler bir CGM okumasına değil, ortalama deltaya dayanmaktadır. Bu nedenle, bazı okumaları kaçırırsanız, AAPS'in tekrar döngüye girmesi, verileri geri aldıktan sonra biraz zaman alabilir.

#### Ek okumalar

Döngünün pratik yönlerini anlamanıza yardımcı olacak iyi ipuçları içeren birkaç blog var. Bunların bazıları artık çevrimiçi değil: aşağıda "arşiv kopyası" olarak işaretlenen bağlantılar, Internet Archive'da kayıtlı bir kopyayı açar.

    * [Fine-tuning Settings](https://web.archive.org/web/20171029031305/http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM (arşiv kopyası)
    * [Why DIA matters](https://web.archive.org/web/20231130035027/http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM (arşiv kopyası)
    * [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
    * [Hormones and autosens](https://web.archive.org/web/20170902081839/http://seemycgm.com/2017/06/06/hormones-2/) See my CGM (arşiv kopyası)
    

(what-emergency-equipment-is-recommended-to-take-with-me)= (FAQ-emergency-equipment)=

### Yanımda hangi acil durum ekipmanını bulundurmam önerilir?

İnsülin pompası tedavisi olan diğer tüm T1D'ler gibi aynı acil durum ekipmanına sahip olmalısınız. AAPS ile döngü kurarken, yanınızda veya yakınında aşağıdaki ek ekipmanın bulunması şiddetle tavsiye edilir:

* Akıllı telefonunuzu, saatinizi ve (gerekirse) BT okuyucusunu veya Link cihazını şarj etmek için pil takımı ve kablolar
* Pompa pilleri
* Hem telefondaki hem de buluttaki (ör. Google Drive, Dropbox) yedeklerinize erişim; böylece AAPS'i başka bir telefonda yeniden kurabilirsiniz (bkz. [Yedek oluşturma ve geri yükleme](../Maintenance/ExportImportSettings.md)): 
  * AAPS'in ve kullandığınız diğer uygulamaların (ör. xDrip, Juggluco, BYODA) güncel [apk](../SettingUpAaps/BuildingAaps.md) dosyası.
  * anahtar deposu (keystore) dosyanız (apk'yi oluştururken kullanılan) ve parolası,
  * AAPS'ten ve diğer uygulamalarınızdan en son dışa aktardığınız ayar dosyaları,
  * your **AAPS** master password: you cannot import the settings file without it. If you forgot it, see [How to reset the master password?](#FAQ-reset-master-password)

(FAQ-organize-backups)=

#### Yedeklerimi nasıl düzenlemeliyim?

Ayarları çok düzenli olarak dışa aktarın: her pod veya rezervuar değişiminden sonra, profilinizi değiştirdikten sonra, bir görevi tamamladığınızda, pompanızı değiştirirseniz… Hiçbir şey değişmese bile ayda bir kez dışa aktarın. Birkaç eski dışa aktarma dosyasını saklayın.

**AAPS** bunu sizin için yapabilir: ayarlarınızı otomatik olarak dışa aktarabilir (örneğin her pod değişiminden sonra bir [Otomasyon](#ExportImportSettings-Automating-Settings-Export) ile) ve dışa aktarılan dosyayı doğrudan bir bulut klasörüne (Google Drive) kaydedebilir. Bkz. [Yedek oluşturma ve geri yükleme](../Maintenance/ExportImportSettings.md).

### CGM/FGM'yi güvenli ve sağlam bir şekilde nasıl sabitleyebilirim?

Bantlayabilirsiniz. Yaygın CGM sistemleri için önceden delinmiş birkaç çeşit sensör bantları mevcuttur. (Google, eBay veya Amazon'da arama yapın). Bazı döngü kullanıcıları daha ucuz standart kinesiyoloji bandı veya rocktape kullanır.

Sabitleyebilirsiniz. CGM/FGM'yi bir bantla sabitleyen üst kol bilezikleri de satın alabilirsiniz (Google, eBay veya Amazon'da arama yapın).

## APS algorithm

### Profilimde farklı bir İES olmasına rağmen OpenAPS AMA neden "dia: 3" gösteriyor?

**Konfigürasyon** > **APS (YPS)** içinde **OpenAPS AMA** seçiliyken, **Eklentiyi aç** algoritmaya gönderilen verileri gösterir. Bu ekranın **Profil** bölümünde `dia` her zaman 3.0 veya daha azdır:

![Profil verilerinde dia 3.0 gösteren OpenAPS AMA eklenti ekranı](../images/screens/openaps_ama_plugin.png)

AMA algoritmasında, İES aslında 'insülin etkisinin süresi' anlamına gelmez. Eskiden İES'e bağlı olan bir parametredir. Şimdi ise 'düzeltme bolusunun ne zaman biteceği' anlamına geliyor. AİNS'in hesaplanmasıyla ilgisi yoktur. OpenAPS SMB'de artık bu parametreye gerek yoktur.

## Other settings

### Nightscout settings

(FAQ-nsclient-blocked)=

#### AAPSClient (veya AAPS) veri yüklemiyor: "… tarafından engellendi". Ne yapabilirim?

NSClient durumu, neden veri gönderilmediğini gösterir:

* **Bağlantı seçenekleri tarafından engellendi**: bağlantı ayarları mevcut bağlantıya izin vermiyor. Örneğin hücresel veri kullanıyorsunuz ama yalnızca Wi-Fi'ye izin verilmiş, ya da izin verilen Wi-Fi ağlarından (SSID'ler) birine bağlı değilsiniz.
* **Şarj seçenekleri tarafından engellendi**: bağlantı ayarları senkronizasyona yalnızca telefon şarj olurken (veya yalnızca pildeyken) izin veriyor ve şu anda durum bu değil.
* **Bağlantı yok**: telefonun internet bağlantısı yok.

[NSClient bağlantı ayarlarını](#Preferences-nsclient) kontrol edin: **Hücresel veri kullan**, **Roaming kullan**, **WiFi kullan**, **WiFi SSID**, **Pildeyken senk. yap** ve **Şarj olurken senk. yap**.

### CGM settings

(FAQ-advanced-filtering)=

#### AAPS neden 'Aktif KŞ kaynağı gelişmiş filtrelemeyi desteklemediği için SMB (Super Micro Bolus) her zaman ve karbonhidratlardan sonra devre dışı bırakıldı' diyor?

**SMB'yi her zaman etkinleştir** ve **Karbonhidratlardan sonra SMB'yi etkinleştir** yalnızca [güvenilir bir KŞ veri kaynağı](#GettingStarted-TrustedBGSource) ile kullanılabilir: **AAPS**'e değerlerin hangi sensörden geldiğini bildirebilen bir sensör ve CGM uygulaması. Diğer tüm KŞ kaynaklarında **AAPS** bu iki seçeneği kapatır ve bu mesajı gösterir. Güvenilir kaynaklar listesini kontrol edin. Sensörünüz listede varsa, onun için gösterilen CGM uygulamalarından birini kullandığınızdan emin olun. Ayrıca bkz. [Kan şekeri verilerini yumuşatma](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Pump

#### Batteries

Döngü, pompa pilini normal kullanımdan daha hızlı tüketebilir, çünkü sistem Bluetooth üzerinden elle kullanan birinden çok daha fazla iletişim kurar. İletişim zorlaştığı için pili %25'e düştüğünde değiştirmek en iyisidir. Nightscout sitenizdeki PUMP_WARN_BATT_P değişkenini kullanarak pompa pili için uyarı alarmları ayarlayabilirsiniz. Pil ömrünü artırmanın püf noktaları şunları içerir:

* LCD'nin açık kaldığı süreyi azaltın (pompa ayarları menüsünde)
* arka ışığın açık kalma süresini kısaltın (pompa ayarları menüsünde)
* titreşim yerine bir bip sesiyle bildirim ayarlarını seçin (pompa ayarları menüsünden)
* yeniden doldurmak için yalnızca pompadaki düğmelere basın, tüm geçmişi, pil seviyesini ve rezervuar hacmini görüntülemek için AAPS'i kullanın.
* AAPS uygulaması bazı telefonlarda enerji tasarrufu için veya RAM'i boşaltmak için sık sık kapatılabilir. AAPS her başlatmada yeniden başlatıldığında, pompaya bir Bluetooth bağlantısı kurar ve mevcut bazal oranı ve bolus geçmişini yeniden okur. Bu pil tüketir. Bunun olup olmadığını görmek için NSClient **Gelişmiş Ayarlar** bölümünde **Uygulama başlatma olayını günlüğe kaydet**'i açın: Nightscout, AAPS her yeniden başladığında bir olay alır; bu da sorunu takip etmeyi kolaylaştırır. Bunun daha az olması için AAPS'in pil optimizasyonunu kapatın, böylece telefon onu kapatmayı bırakır: aşağıdaki [pil tasarrufu](#FAQ-battery-savings) bölümüne bakın.
* üretim sürecinden kalan balmumu veya yağ izi kalmadığından emin olmak için pil kutuplarını alkolle temizleyin.
* [Dana R/RS pompaları](../CompatiblePumps/DanaRS-Insulin-Pump.md) için başlatma işlemi, pasivasyon filmini (depolama sırasında enerji kaybını önler) bilerek kırmak için pilden yüksek akım çeker, ancak bu her zaman filmi %100 kırmaz. Pili ekranda %100 görünene kadar 2-3 kez çıkarıp yeniden takın veya pil anahtarını kullanarak pili kısa bir süre için her iki terminale birden uygulayarak takmadan önce kısa devre yapın.
* [belirli pil türleri](#Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life) için daha fazla ipucuna da bakın

#### Rezervuarları ve kanülleri değiştirme

Rezervuar doğrudan pompada değiştirilir, ardından değişiklik **AAPS**'e kaydedilir. Adım adım [pompa rezervuarı ve kanül değiştirme kılavuzunu](#pumps-cannulas-changing-reservoir-and-cannula) izleyin.

### Duvar kağıdı

Telefonunuz için AAPS duvar kağıdını [Telefonlar sayfasında](#Phones-phone-wallpaper) bulabilirsiniz.

### Daily usage

Aşağıdaki durumların çoğu bir kez [senaryo](#scenes) olarak hazırlanabilir: senaryo, profili, geçici hedefi ve diğer ayarları tek dokunuşla değiştiren bir ön ayardır. **AAPS** hazır şablonlar sunar, örneğin *Egzersiz*, *Uyku*, *Alkol* veya *Banyo yapma*.

#### Hygiene

(what-to-do-when-taking-a-shower-or-bath)=

##### What to do when taking a shower or bath?

Duş veya banyo yaparken pompayı çıkarabilirsiniz. Bu kısa süre için buna ihtiyacınız olmayabilir, ancak AİNS hesaplamalarının doğru olması için AAPS'e bağlantınızın kesildiğini söylemelisiniz. [Yukarıdaki açıklamaya](#FAQ-disconnect-pump) bakın. *Banyo yapma* [senaryo](#scenes) şablonu bunu sizin için yapar.

#### Work

İşinize bağlı olarak, iş günlerinde farklı tedavi faktörleri kullanmayı tercih edebilirsiniz. Bir döngü kullanıcısı olarak, tipik bir iş gününüz için bir [profil değişimi](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) yapmayı düşünmelisiniz. Örneğin, daha az zorlu bir işiniz varsa (örneğin, masada oturmak) %100'den yüksek bir profile veya tüm gün aktif ve ayaktaysanız %100'den az bir profile geçebilirsiniz. Normalden çok daha erken veya geç çalışıyorsanız ya da farklı vardiyalarda çalışıyorsanız, yüksek veya düşük bir geçici hedef ya da [profilinizde zaman kaydırma](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) da düşünebilirsiniz. İkinci bir profil de oluşturabilirsiniz (ör. 'ev' ve 'iş günü') ve her gün gerçekten ihtiyacınız olan profile profil değişimi yapabilir ya da iş günü ayarlarınızı bir [senaryo](#scenes) olarak kaydedebilirsiniz.

### Leisure activities

(FAQ-sports)=

#### Spor

Döngü öncesi dönemden kalan spor alışkanlıklarınızı gözden geçirmeniz gerekir. Daha önce olduğu gibi sadece bir veya daha fazla spor karbonhidratı tüketirseniz, kapalı döngü sistemi bunları tanıyacak ve uygun şekilde düzeltecektir.

Böylece daha fazla aktif karbonhidratınız olur, ama aynı zamanda döngü buna karşı koyar ve insülin verir.

Döngü yaparken şu adımları denemelisiniz:

* %100'ün altında bir [profil değişimi](#ProfileSwitch-change-percentage) yapın: ana ekranda profil adına dokunun, yuvarlak **▶** düğmesine dokunun, sonra **Yüzde** ve **Süre** değerlerini ayarlayın.
* Standart hedefinizin üzerinde bir [aktivite geçici hedefi](#TempTargets-activity-temp-target) ayarlayın. Yüzde %100'ün altındaysa ve bir süre ayarlıysa, aynı **Etkinleştir** ekranı ikisini birden başlatan bir **Geçici hedef / Aktivite** anahtarı sunar.
* SMB kullanıyorsanız ["Yüksek geçici hedefte SMB'yi etkinleştir"](#Open-APS-features-enable-smb-with-high-temp-targets) ve ["SMB'yi her zaman etkinleştir"](#Open-APS-features-enable-smb-always) ayarlarının kapalı olduğundan emin olun.

Bu ayarlarda önceden ve sonradan hazırlık önemlidir. Değişiklikleri spordan önce zamanında yapın ve kasların yeniden dolmasının (glikojen depoları) etkisini göz önünde bulundurun.

*Egzersiz* ve *Egzersiz Sonrası Gece* [senaryo](#scenes) şablonları bu ayarları bir araya getirir, böylece onları tek dokunuşla başlatabilirsiniz. Düzenli olarak aynı saatte spor yapıyorsanız (ör. spor salonunuzdaki bir ders), profil değişimini ve GH'yi ya da senaryoyu başlatmak için [otomasyon](../DailyLifeWithAaps/Automations.md) kullanmayı düşünebilirsiniz. Konuma dayalı otomasyon da bir fikir olabilir, ancak önceden hazırlığı zorlaştırır.

Profil değişiminin yüzdesi, aktivite geçici hedefinizin değeri ve değişiklikler için en iyi zaman kişiden kişiye değişir. Sizin için doğru değeri arıyorsanız güvenli taraftan başlayın (daha düşük yüzde ve daha yüksek GH ile başlayın).

#### Sex

Pompayı 'özgür' olabilmek için kaldırabilirsiniz, ancak AAPS'e AİNS hesaplamalarının doğru olması için söylemelisiniz. [Yukarıdaki açıklamaya](#FAQ-disconnect-pump) bakın.

#### Drinking alcohol

Algoritma alkolden etkilenen KŞ'yi doğru bir şekilde tahmin edemediği için kapalı döngü modunda alkol içmek risklidir. Bunu yönetmek için AAPS'teki aşağıdaki işlevlerle kendi yönteminizi denemeniz gerekir:

* Kapalı döngü modunun devre dışı bırakılması ve diyabetin manuel olarak tedavi edilmesi veya
* yüksek geçici hedefler ayarlayıp UAM'yi (bildirilmemiş öğünler) kapatarak döngünün bildirilmemiş bir öğün yüzünden AİNS'i artırmasını önlemek veya
* belirgin şekilde %100'ün altında bir [profil değişimi](#ProfileSwitch-change-percentage) yapmak 

*Alkol* [senaryo](#scenes) şablonu, kendi yönteminize uyarlayabileceğiniz bir başlangıç noktasıdır.

Alkol içerken, karbonhidrat yiyerek hipoglisemiyi manuel olarak önlemek için CGM'nize her zaman göz kulak olmalısınız.

#### Uyku

##### Geceleri mobil ve Wi-Fi radyasyonu olmadan nasıl döngü kullanabilirim?

Birçok kullanıcı geceleri telefonu uçak moduna alıyor. Uyurken döngünün size destek olmasını istiyorsanız şöyle ilerleyin (bu yalnızca CGM uygulamanız AAPS ile aynı telefonda çalışıyorsa işe yarar, örneğin xDrip, Juggluco veya BYODA; KŞ değerlerini Nightscout üzerinden alıyorsanız İŞE YARAMAZ):

1. Cep telefonunuzda uçak modunu açın.
2. Uçak modu aktif olana kadar bekleyin.
3. Bluetooth'u açın.

Şu anda arama almıyorsunuz ve internete bağlı değilsiniz. Ama döngü hâlâ çalışıyor.

Bazı kişiler, telefon uçak modundayken yerel yayın (local broadcast) ile ilgili sorunlar yaşamıştır (AAPS, xDrip'ten KŞ değerlerini almaz). xDrip'te Settings > Inter-app settings > Identify receiver yolunu açın ve `info.nightscout.androidaps` girin.

![xDrip Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

Geceleri farklı ayarlar istiyorsanız (örneğin daha yüksek bir hedef), *Uyku* [senaryo](#scenes) şablonu iyi bir başlangıç noktasıdır.

#### Seyahat

##### How to deal with time zone changes?

Dana R ve Dana R Korean ile hiçbir şey yapmanıza gerek yok. Diğer pompalar için daha fazla ayrıntıyı [Saat dilimi değişikliği ve yaz saati uygulaması](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) sayfasında bulabilirsiniz.

### Medical topics

#### Hospitalization

AAPS ve kendin yap (DIY) döngü hakkında klinisyenlerinizle bilgi paylaşmak isterseniz, [Klinisyenler İçin – AAPS'e Genel Giriş ve Kılavuz](../UsefulLinks/ClinicianGuideToAaps.md) belgesini yazdırabilirsiniz.

#### Endokrinoloğunuzla randevu

##### Reporting

Nightscout raporlarınızı (https://YOUR-NS-SITE.com/report) gösterebilir veya [Nightscout Reporter](https://nightscout-reporter.zreptil.de/)'ı kontrol edebilirsiniz.

## Frequent questions on Discord and their answers...

### Sorunum burada listelenmemiş.

Bkz. [Nereden yardım alabilirim?](../GettingHelp/WhereCanIGetHelp.md) Çözümü kendiniz bulduysanız, **bunu bu listeye eklememizi bize hatırlatın!**

### Oluşturma ve yükleme

(FAQ-build-errors)=

#### I have problems, errors building the app.

Lütfen **AAPS**'i oluşturma yönteminize uygun sorun giderme sayfasına bakın (bkz. [AAPS'i oluşturma](../SettingUpAaps/BuildingAaps.md)):

* tarayıcı ile oluşturma: [Tarayıcı ile oluşturma: sorun giderme](#aaps-ci-troubleshooting),
* Android Studio ile oluşturma: [Android Studio'da Sorun Giderme](../GettingHelp/TroubleshootingAndroidStudio.md).

(FAQ-build-error-file-name-too-long)=

#### Build error: file name too long

Bu hata Android Studio ile oluştururken görülebilir: oluşturma, dosya adının çok uzun olduğunu belirten bir hatayla durur. Olası çözümler: Kaynak dosyalarınızı sürücünüzün kök dizinine daha yakın bir dizine taşıyın (ör. "C:\src\AndroidAPS").

Android Studio'dan: Projeyi açıp GitHub'dan çektikten sonra "Gradle"ın senkronizasyonu ve dizinlemeyi bitirdiğinden emin olun. Rebuild Project yapmadan önce Build->Clean Project çalıştırın. File->Invalidate Caches and Restart ile Android Studio'yu yeniden başlatın.

(FAQ-running-dev-version)=

#### Uyarı: Geliştirici sürümü çalışıyor. Kapalı Döngü devre dışı

Mühendislik modu olmadan bir geliştirme (dev) sürümü çalıştırdığınızda **AAPS** bu mesajı gösterir: dev sürümünde kapalı döngü yalnızca mühendislik modunda çalışır.

Dev sürümü test içindir, gerçek döngü kullanımı için değildir: devam etmeden önce [Geliştirme dalı](../AdvancedOptions/DevBranch.md) sayfasını okuyun.

Mühendislik modunu açmak için:

1. AAPS dizininizin `extra` alt klasörüne `engineering_mode` adlı bir dosya koyun (kurulum sihirbazında seçtiğiniz klasör, genellikle `AAPS/extra`). Herhangi bir dosya, doğru şekilde adlandırıldığı sürece iş görür.
2. Dosyayı bulması için **AAPS**'i yeniden başlatın.

İpucu: Mevcut bir günlük dosyasının bir kopyasını alın ve onu "engineering_mode" olarak yeniden adlandırın (not: dosya uzantısı olmayacak).

### Objectives

#### I'm stuck on an objective and need help.

Önce [Görevleri tamamlama](../SettingUpAaps/CompletingTheObjectives.md) sayfasını okuyun. Hâlâ takıldıysanız, soruların ve yanıtların ekran görüntüsünü alın ve Discord AAPS kanalında paylaşın. Hangi seçenekleri seçtiğinizi (veya seçmediğinizi) ve nedenini söylemeyi unutmayın. İpuçları ve yardım alacaksınız ancak yanıtları bulmanız gerekecek.

### Ayarlar, parolalar ve yedekler

(FAQ-reset-master-password)=

#### Ana parola nasıl sıfırlanır?

Ana parolanızı unuttuysanız, onu pompanızın seri numarasına sıfırlayabilirsiniz:

1. AAPS dizininizin `extra` alt klasöründe (genellikle `AAPS/extra`) `PasswordReset` adlı boş bir dosya (dosya uzantısı olmadan) oluşturun.
2. **AAPS**'i yeniden başlatın. Pompanız bağlı olmalıdır: **AAPS** "Pompa bekleniyor…" gösterir ve pompa seri numarasını 30 saniye içinde okuması gerekir.
  
  To restart, quit **AAPS** with **menu** (☰) > **Exit**, then open it again. **AAPS** only looks for the file when it starts from scratch. Closing the screen or swiping the app away is not enough, because **AAPS** keeps running in the background. If "Waiting for pump…" does not appear, use **Force stop** in the Android **App info** of **AAPS**, or restart your phone. Installing your current **AAPS** apk again over the installed app also works: it keeps your settings.

3. **AAPS** "Parola belirlendi!" gösterir: ana parolanız artık **pompa seri numaranızdır**. `PasswordReset` dosyası otomatik olarak silinir.

4. **Ayarlar** > **Koruma** > **Ana parola**'yı açın ve yeni bir parola belirleyin.

Pompaya zamanında ulaşılamazsa hiçbir şey değişmez: pompa bağlantısını kontrol edin ve tekrar deneyin.

Bu yalnızca ana parolayı sıfırlar. Ayar, uygulama veya bolus parolası ya da PIN'i sıfırlanmaz, ancak bunların yerine her zaman ana parolayı kullanabilirsiniz.

    {admonition} Eski ayar dosyaları
    :class: warning
    Eski ana parolayla dışa aktarılan ayar dosyaları yalnızca o eski parolayla içe aktarılabilir.

(FAQ-where-are-settings-files)=

#### Where can I find settings files?

Ayar dosyaları, [kurulum sihirbazında](#SetupWizard-StoragePermission) seçtiğiniz AAPS dizininin `preferences` alt klasöründe saklanır (örneğin `/internal storage/AAPS/preferences`). Bir bulut klasörü (Google Drive) ayarladıysanız, dışa aktarılan dosyalarınız oraya da kaydedilebilir. Bkz. [Yedek oluşturma ve geri yükleme](../Maintenance/ExportImportSettings.md).

UYARI: Parolanızı kesinlikle kaybetmeyin çünkü onsuz şifreli bir ayar dosyasını içe aktaramazsınız!

(FAQ-import-settings-earlier-versions)=

#### Önceki AAPS sürümlerinden ayarları AAPS v3 veya v4'e nasıl içe aktarırım?

(AAPS v3 veya v4'te) yalnızca AAPS v2.8x veya sonraki bir sürümle dışa aktarılmış ayarları içe aktarabilirsiniz. v2.8x'ten eski bir AAPS sürümü kullanıyorduysanız veya v2.8x'ten eski ayar dosyalarını kullanmanız gerekiyorsa, önce AAPS v2.8'i yüklemeniz gerekir. v2.x'in eski ayarlarını v2.8'e içe aktarın. Her şeyin yolunda olduğunu kontrol ettikten sonra ayarları v2.8'den dışa aktarabilirsiniz. Güncel AAPS sürümünü yükleyin ve v2.8 ayarlarını ona içe aktarın.

Eski ve yeni sürümü oluşturmak için aynı anahtarı kullanırsanız, ayarları içe aktarmanız bile gerekmez. Yeni sürümü eskisinin üzerine yükleyebilirsiniz.

Bazı yeni görevler eklendi. Onları doğrulamanız gerekecek.

(FAQ-delete-treatments)=

#### Tedavileri nerede silebilirim?

**Menüyü** (☰) açın ve **Tedavi geçmişi**'ni seçin. Seçmek için bir girişe uzun basın, gerekirse başka girişlere de dokunun, sonra **çöp kutusu** simgesine dokunun ve onaylayın. Bkz. [Tedavi geçmişi](#aaps-screens-treatments).

### Telefon ve bağlantı sorunları

(FAQ-aaps-stops)=

#### AAPS her gün aşağı yukarı aynı saatte duruyor.

* Bazı telefonlarda Google Play Protect **AAPS**'i her sabah kapatabilir. Bu olursa, Google Play seçeneklerine gidin ve **Google Play Protect**'i kapatın.
* "Temizleme" uygulamalarını (yani CCleaner vb.) kontrol edin ve bunları kaldırın.
* **AAPS** için tüm pil optimizasyonlarını kapatın (aşağıdaki [pil tasarrufu](#FAQ-battery-savings) bölümüne bakın).

(FAQ-battery-savings)=

#### Pil tasarrufu nasıl ayarlanır?

Telefonunuz, siz kullanmadığınızda **AAPS**'i ve ilgili uygulamaları (CGM uygulaması, Bluetooth) askıya alabilir. Bu durumda **AAPS** işini yapamaz ve sensör ile pompaya (veya RileyLink'e) olan Bluetooth bağlantıları kapanabilir; bu da "pompaya ulaşılamıyor" uyarılarına ve iletişim hatalarına yol açar.

**AAPS**, CGM uygulamanız (ör. xDrip) ve Bluetooth sistem uygulaması için pil optimizasyonunu kapatın. Bunun yolu telefonun markasına, modeline ve Android sürümüne bağlıdır:

* Pixel, Samsung ve Huawei telefonlar için [Pil optimizasyonu](#generaltroubleshooting-android-related-issues) bölümüne bakın,
* diğer markalar için **AAPS**'te **menü** (☰) > **Hakkında**'yı açın ve **Uygulamamı kapatma?**'ya dokunun ya da [Don't kill my app](https://dontkillmyapp.com/) sitesini ziyaret edin.

Sorununuza pil tasarrufunun neden olduğundan emin değilseniz, telefondaki tüm pil tasarruflarını geçici olarak kapatabilirsiniz: piliniz daha hızlı biter, ama sorunun geçip geçmediğini hızlıca görürsünüz.

(FAQ-pump-unreachable-alerts)=

#### Günde birkaç kez veya geceleri "Pompaya ulaşılamıyor" uyarıları.

Telefonunuz **AAPS**'i, hatta Bluetooth'u askıya alıyor olabilir; bu da pompa veya RileyLink ile bağlantının kopmasına neden olur (yukarıdaki [pil tasarrufu](#FAQ-battery-savings) bölümüne bakın).

Uyarının ne zaman verileceğini de değiştirebilirsiniz: ana ekranın sağ üstündeki **Ayarlar** (dişli) simgesine basın, sonra **Yerel uyarılar** > **Pompa ulaşılamaz eşiği**'ni seçin (30 ile 300 dakika arası). Pompanızın sayfasına bakın: bazı sayfalar bir değer önerir, ör. [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) için 120 dakika.

(FAQ-link-unresponsive)=

#### Link cihazım/pompam/pod'um yanıt vermiyor (RL/OL/EmaLink…)

Bazı telefonlarda Link cihazlarıyla (RL/OL/EmaLink) Bluetooth bağlantısı kopar.

Bazı cihazların da yanıt vermeyen bağlantıları da vardır (AAPS, bağlı olduklarını ancak bağlantıların pompaya ulaşamadığını veya komuta edemediğini söylüyor).

Önce pompa ekranındaki **RileyLink'i Sıfırla** düğmesini deneyin (pompanızın sayfasına bakın: [Medtronic](#MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump), [Omnipod Eros](#OmnipodEros-reset-rileylink-config-notes)). Bu işe yaramazsa, tüm bu parçaları birlikte çalıştırmanın en kolay yolu şudur:

1. Link cihazını kapatın.
2. **AAPS**'ten çıkın (**menü** (☰) > **Çıkış**).
3. **AAPS** simgesine uzun basın, Android **App info** (Uygulama bilgileri) ekranını açın, **Force stop** (Durmaya zorla) düğmesine, ardından **Storage** (Depolama) > **Clear cache** (Önbelleği temizle) öğesine dokunun (depolama alanını/verileri TEMİZLEMEYİN!).
4. Nadiren bazı telefonların bu noktada yeniden başlatılması gerekebilir. Yeniden başlatmadan deneyebilirsiniz.
5. Link cihazını açın.
6. **AAPS**'i başlatın.
7. Pompa ekranında **RileyLink'i Eşleştir**'e dokunun ve Link cihazınızı yeniden seçin.

### Uzaktan kontrol

(FAQ-aapsclient)=

#### AAPSClient uzaktan kontrol uygulamasını yapılandırma ve kullanma

**AAPSClient**, bir bakım verenin **AAPS**'i uzaktan izlemesini ve kontrol etmesini sağlayan ayrı bir uygulamadır. **AAPS** v4'ten beri, **AAPS**'i AAPSClient'tan kontrol etmek için iki uygulama arasında tek seferlik bir eşleştirme gerekir. Bkz.:

* [AAPSClient uygulaması](#aapsclient-app): yükleme, ilk başlatma ve eşleştirme,
* [Ana birim ↔ İstemci kontrolü](#client-master-control): neyin kontrol edilebildiği ve eşleştirmenin nasıl çalıştığı,
* [Akıllı saatte AAPSClient](#remotecontrol-smartwatches).

(FAQ-hardened-mode)=

#### Nightscout web sitesinde girdiğim tedaviler uygulanmıyor

Bunun nedeni [güçlendirilmiş mod](#client-master-control-hardened-mode). İstemci kontrolü açıkken (Basit modda her zaman açıktır) **AAPS** değişiklikleri yalnızca eşleştirilmiş istemcilerden alır; Nightscout web sitesinden veya diğer uygulamalardan almaz. Bunun yerine tedavileri eşleştirilmiş bir **AAPSClient**'ta girin.

### Alarmlar ve uyarılar

#### Kırmızı bir uyarı rozetim (kırmızı üçgen) var / AAPS kapalı döngüyü etkinleştirmiyor / Döngü LGS'de kalıyor / Sarı bir üçgenim vardı

KŞ kaynağı kısayolundaki kırmızı uyarı rozeti, AAPS'teki bir güvenlik özelliğidir. Ayrıntılı açıklama için [KŞ uyarı işareti](#aaps-screens-bg-warning-sign) bölümüne bakın.

Alt çubuktaki KŞ kaynağı kısayolunda kırmızı bir uyarı rozeti (eski sürümlerdeki kırmızı üçgen), yinelenen KŞ değerleriniz olduğu ve AAPS'in deltaları doğru hesaplayamadığı anlamına gelir. Kapalı döngü **Düşük Glikoz Duraklatma (LGS)** moduna geçer: sizi düşük şekere karşı korumak için bazalınızı yine azaltır veya durdurur, ama düzeltme insülini vermez. Uyarıyı kaldırmak için yinelenen her değerden bir KŞ'yi silmeniz gerekir. [KŞ kaynağı ekranınızı](#aaps-screens-bg-source) açmak için kısayola dokunun: yinelenen değer kırmızıyla vurgulanır. Silmek istediğiniz bir satıra uzun basın, iki kez görünen her satırdan birini işaretleyin ve çöp kutusu simgesine dokunun. Çok fazla çift KŞ varsa AAPS veritabanını sıfırlamanız gerekebilir. Bu durumda istatistikleri, AİNS'i, AKRB'yi ve seçili profili de kaybedersiniz.

Uyarı kalktıktan sonra AAPS kendiliğinden **Kapalı Döngü**'ye geri dönmez. Ana ekrandaki döngü simgesine basın ve yeniden **Kapalı Döngü**'yü seçin.

Sorunun olası kaynağı: xDrip ve/veya NS'nin KŞ değerlerini geriye dönük doldurması (backfill).

Eski sürümlerdeki sarı üçgen, KŞ okumaları arasındaki sürenin düzensiz olduğu anlamına geliyordu (KŞ değerleri düzenli olarak 5 dakikada bir gelmiyor veya bazı KŞ değerleri eksik); bu genellikle Libre ile veya bir G6 verici değişiminden sonra olur. **AAPS** 4 artık bunu göstermez: değerleri arka planda yeniden hesaplar ve döngü doğru çalışır.

### Omnipod DASH

(FAQ-move-dash-pod)=

#### Aktif bir DASH Pod'unu başka bir telefona taşıyabilir miyim?

Pod durumu dışa aktarılan ayarlara dahildir. Bu yüzden aktif bir Pod başka bir telefona taşınabilir: taşımadan hemen önce ayarları dışa aktarın ve diğer telefonda içe aktarın. Bu resmi olarak desteklenmez ve Pod'u kaybetme riski vardır: mümkünse Pod'unuzun süresi dolmak üzereyken deneyin.

Önce şu bölümleri okuyun:

* Omnipod DASH sayfasındaki [Ayarları dışa ve içe aktarma](#omnipod-dash-export-import) ve [Hortumsuz pompalar](#ExportImportSettings-tubeless-pumps): yeni telefonda **Pompa ayarlarını da değiştir**'i işaretleyin ve şu anda taktığınız Pod takılıyken dışa aktarılmış bir dosya kullanın,
* Pod'u daha sonra eski telefondan kaldırmak için [Pod'u çıkarma](#omnipod-dash-discard-pod). Pod çıkarılana kadar eski telefonu uçak modunda tutun; böylece iki telefon hiçbir zaman Pod ile aynı anda iletişim kurmaz.