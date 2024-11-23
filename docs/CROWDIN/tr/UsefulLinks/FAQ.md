# Döngü kullanıcıları için SSS

How to add questions to the FAQ: Follow the these [instructions](../SupportingAaps/HowToEditTheDocs.md)

## General

### Can I just download the AAPS installation file?

Hayır. AAPS için indirilebilir bir apk dosyası yoktur. You have to [build](../SettingUpAaps/BuildingAaps.md) it yourself. Nedeni ise:

AAPS, pompanızı kontrol etmek ve insülin vermek için kullanılır. Avrupa'daki mevcut düzenlemelere göre IIa veya IIb olarak sınıflandırılan tüm sistemler, çeşitli çalışmalar ve imzalar gerektiren düzenleyici onay (CE işareti) gerektiren tıbbi cihazlardır. Düzenlenmemiş bir cihazı dağıtmak yasa dışıdır. Dünyanın başka yerlerinde de benzer düzenlemeler var.

Bu düzenleme (bir şey karşılığında para almak anlamında) sadece satışla sınırlı olmayıp, her türlü dağıtım (hatta ücretsiz dağıtma) için de geçerlidir. Kendiniz için bir tıbbi cihaz oluşturmak, uygulamayı bu düzenlemeler dahilinde kullanmanın tek yoludur.

Bu yüzden apk'ler mevcut değildir.

(FAQ-how-to-begin)=

### How to begin?

Her şeyden önce, **döngülenebilir donanım bileşenleri almanız** gerekir:

- A [supported insulin pump](../Getting-Started/CompatiblePumps.md), 
- an [Android smartphone](../Getting-Started/Phones.md) (Apple iOS is not supported by AAPS - you can check [iOS Loop](https://loopkit.github.io/loopdocs/)) and
- a [continuous glucose monitoring system](../Getting-Started/CompatiblesCgms.md). 

Secondly, you have to **setup your software components**: [AAPS](../SettingUpAaps/BuildingAaps.md), [CGM/FGM source](../Getting-Started/CompatiblesCgms.md) and a [reporting server](../SettingUpAaps/SettingUpTheReportingServer.md).

Thirdly, you have to learn and **understand the OpenAPS reference design to check your treatment factors**. The founding principle of closed looping is that your [basal rate and carb ratio](../SettingUpAaps/YourAapsProfile.md) are accurate. Tüm öneriler, temel ihtiyaçlarınızın karşılandığını ve gördüğünüz herhangi bir tepe veya dip noktasının, bu nedenle bazı tek seferlik ayarlamalar (egzersiz, stres vb.) gerektiren diğer faktörlerin bir sonucu olduğunu varsayar. Kapalı döngünün güvenlik için yapabileceği ayarlamalar sınırlandırılmıştır ([OpenAPS Referans Tasarımında](https://openaps.org/reference-design/) izin verilen maksimum geçici bazal oranına bakın), bu izin verilen dozun temeldeki yanlış bir bazalı düzeltmek için boşa harcamak istemediğiniz anlamına gelir. Örneğin, yemekten önce genellikle düşük seviyeniz varsa, muhtemelen bazal oranınızın ayarlanması gerekir. You can use [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig) to consider a large pool of data to suggest whether and how basals and/or ISF need to be adjusted, and also whether carb ratio needs to be changed. Or you can test and set your basal the [old-fashioned way](https://integrateddiabetes.com/basal-testing/).

### What practicalities of looping do I have?

#### Password protection

Tercihlerinizin kolayca değiştirilmesini istemiyorsanız, tercihler menüsünden "ayarlar için şifre" seçeneğini seçerek tercihler menüsüne şifre korumalı yapabilir ve seçtiğiniz şifreyi yazabilirsiniz. Tercihler menüsüne bir sonraki girişinizde, daha ileri gitmeden önce bu şifreyi isteyecektir. Daha sonra şifre seçeneğini kaldırmak isterseniz, "ayarlar için şifre" bölümüne gidin ve metni silin.

#### Android Wear Smartwatches

Ayarları bolus yapmak veya değiştirmek için android wear uygulamasını kullanmayı planlıyorsanız, AAPS'den gelen bildirimlerin engellenmediğinden emin olmanız gerekir. Eylemin onayı bildirim yoluyla gelir.

(FAQ-disconnect-pump)=

#### Disconnect pump

Duş almak, banyo yapmak, yüzmek, spor yapmak veya diğer etkinlikler için pompanızı çıkarırsanız, AAPS'e AİNS'i doğru tutmak için insülin verilmediğini bildirmelisiniz.

The pump can be disconnected using the Loop Status icon on the [AAPS Home Screen](#AapsScreens-loop-status).

#### Recommendations not only based on one single CGM reading

Güvenlik için yapılan öneriler bir CGM okumasına değil, ortalama deltaya dayanmaktadır. Bu nedenle, bazı okumaları kaçırırsanız, AAPS'in tekrar döngüye girmesi, verileri geri aldıktan sonra biraz zaman alabilir.

#### Further readings

Döngü yapmanın pratikliğini anlamanıza yardımcı olacak iyi ipuçları içeren birkaç blog var:

- [İnce Ayarlar](https://seemycgm.com/2017/10/29/fine-tuning-settings/) CGM'ime bakın
- [DIA neden önemlidir](https://seemycgm.com/2017/08/09/why-dia-matters/) CGM'ime bakın
- [Öğün ani artışlarını sınırlama](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
- [Hormonlar ve Otoduyarlılık](https://seemycgm.com/2017/06/06/hormones-2/) CGM'ime bakın

### What emergency equipment is recommended to take with me?

İnsülin pompası tedavisi olan diğer tüm T1D'ler gibi aynı acil durum ekipmanına sahip olmalısınız. AAPS ile döngü kurarken, yanınızda veya yakınında aşağıdaki ek ekipmanın bulunması şiddetle tavsiye edilir:

- Akıllı telefonunuzu, saatinizi ve (gerekirse) BT okuyucusunu veya Link cihazını şarj etmek için pil takımı ve kablolar
- Pompa pilleri
- Current [apk](../SettingUpAaps/BuildingAaps.md) and [preferences files](../Maintenance/ExportImportSettings.md) for AAPS and any other apps you use (e.g. xDrip+, BYO Dexcom) both locally and in the cloud (Dropbox, Google Drive).

### How can I safely and securely attach the CGM/FGM?

Bantlayabilirsiniz. Yaygın CGM sistemleri için önceden delinmiş birkaç çeşit sensör bantları mevcuttur. (Google, eBay veya Amazon'da arama yapın). Bazı looper'lar daha ucuz standart kinesiyoloji bandı veya tıbbi rulo bant kullanır.

Siz bunu düzeltebilirsiniz. CGM/FGM'yi bir bantla sabitleyen üst kol bilezikleri de satın alabilirsiniz (Google, eBay veya Amazon'da arama yapın).

## APS algorithm

### Why does it show "dia:3" in the "OPENAPS AMA"-tab even though I have a different DIA in my profile?

![AMA 3h](../images/Screenshot_AMA3h.png)

AMA algoritmasında, İES aslında 'insülin etkisinin süresi' anlamına gelmez. Eskiden İES'ine bağlanan bir parametreydi. Şimdi ise 'düzeltme bolusunun ne zaman biteceği' anlamına geliyor. AİNS'in hesaplanmasıyla ilgisi yoktur. OpenAPS SMB'de artık bu parametreye gerek yoktur.

## Other settings

### Nightscout settings

#### AAPSClient says 'not allowed' and does not upload data. What can I do?

In AAPSClient check 'Connection settings'. Belki de aslında izin verilen bir WLAN'da değilsiniz veya 'Yalnızca şarj oluyorsa' seçeneğini etkinleştirdiniz ve şarj kablonuz bağlı değil.

### CGM settings

#### Why does AAPS say 'BG source doesn't support advanced filtering'?

xDrip yerel modunda Dexcom G5 veya G6'dan başka bir CGM/FGM kullanırsanız, bu uyarıyı AAPS OpenAPS sekmesinde alırsınız. See [Smoothing blood glucose data](../CompatibleCgms/SmoothingBloodGlucoseData.md) for more details.

### Pump

#### Where to place the pump?

Pompayı yerleştirmek için sayısız olasılık vardır. Döngü yapıp yapmadığınız önemli değildir.

#### Batteries

Döngü, pompa pilini normal kullanımdan daha hızlı azaltabilir, çünkü sistem bluetooth aracılığıyla manuel bir kullanıcıdan çok daha fazla etkileşime girer. O zaman iletişim zorlaştığı için pili %25 oranında değiştirmek en iyisidir. Nightscout sitenizdeki PUMP_WARN_BATT_P değişkenini kullanarak pompa pili için uyarı alarmları ayarlayabilirsiniz. Pil ömrünü artırmanın püf noktaları şunları içerir:

- LCD'nin açık kaldığı süreyi azaltın (pompa ayarları menüsünde)
- arka ışığın açık kalma süresini kısaltın (pompa ayarları menüsünde)
- titreşim yerine bir bip sesiyle bildirim ayarlarını seçin (pompa ayarları menüsünden)
- yeniden doldurmak için yalnızca pompadaki düğmelere basın, tüm geçmişi, pil seviyesini ve rezervuar hacmini görüntülemek için AAPS'i kullanın.
- AAPS uygulaması, bazı telefonlarda enerji tasarrufu veya boş RAM için genellikle kapatılabilir. AAPS her başlatmada yeniden başlatıldığında, pompaya bir Bluetooth bağlantısı kurar ve mevcut bazal oranı ve bolus geçmişini yeniden okur. Bu pil tüketir. Bunun olup olmadığını görmek için Tercihler > NSClient'e gidin ve 'Uygulama başlangıcını NS'ye kaydet' seçeneğini etkinleştirin. Nightscout, AAPS'nin her yeniden başlatılmasında, sorunu izlemeyi kolaylaştıran bir etkinlik alacaktır. Bunu azaltmak için, uygulamanın güç monitörünün kapatmasını durdurmak için telefonun pil ayarlarında AAPS uygulamasını beyaz listeye ekleyin.
    
    Örneğin, Android Pie çalıştıran bir Samsung telefonda beyaz listeye almak için:
    
    - Ayarlar -> Cihaz Bakımı -> Pil'e gidin 
    - AAPS'i bulana kadar kaydırın ve seçin
    - "Uygulamayı uyku moduna geçir" seçimini kaldırın
    - AYRICA Ayarlar -> Uygulamalar -> seçeneğine gidin (ekranın sağ üst köşesindeki üç daire sembolü) "özel erişim" seçeneğini seçin -> Pil kullanımını optimize edin
    - AAPS'e gidin ve seçili olmadığından emin olun.

- üretim sürecinden kalan balmumu veya yağ izi kalmadığından emin olmak için pil kutuplarını alkolle temizleyin.

- for [Dana R/RS pumps](../CompatiblePumps/DanaRS-Insulin-Pump.md) the startup procedure draws a high current across the battery to purposefully break the passivation film (prevents loss of energy whilst in storage) but it doesn't always work to break it 100%. Pili ekranda %100 görünene kadar 2-3 kez çıkarıp yeniden takın veya pil anahtarını kullanarak pili kısa bir süre için her iki terminale birden uygulayarak takmadan önce kısa devre yapın.
- see also more tips for [particular types of battery](#Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)

#### Changing reservoirs and cannulas

Kartuş değişimi AAPS üzerinden yapılamaz, ancak daha önce olduğu gibi doğrudan pompa üzerinden yapılmalıdır.

- AAPS'in Ana Sayfa sekmesindeki "Açık Döngü"/"Kapalı Döngü" üzerine uzun basın ve 'Döngüyü 1 saat Askıya Al' seçeneğini seçin
- Şimdi pompayı ayırın ve hazneyi pompa talimatlarına göre değiştirin.
- Ayrıca doğrudan pompa üzerinde hortum ve kanül doldurma işlemi yapılabilir. In this case use [PRIME/FILL button](#screens-action-tab) in the actions tab just to record the change.
- Pompaya yeniden bağlandıktan sonra, 'Askıya Alındı (X m)' üzerine uzun basarak döngüye devam edin.

Ancak bir kanülün değiştirilmesi, pompanın "prime infüzyon seti" işlevini kullanmaz, ancak infüzyon setini ve/veya kanülü bolus geçmişinde görünmeyen bir bolus kullanarak doldurur. Bu şu anda çalışmakta olan geçici bir bazal oranını kesintiye uğratmadığı anlamına gelir. On the Actions (Act) tab, use the [PRIME/FILL button](#screens-action-tab) to set the amount of insulin needed to fill the infusion set and start the priming. Miktar yeterli değilse, doldurmayı tekrarlayın. Varsayılan miktar düğmelerini Tercihler > Diğer > Standart insülin miktarlarını Hazırla/Doldur bölümünden ayarlayabilirsiniz. İğne uzunluğuna ve hortum uzunluğuna bağlı olarak kaç ünitenin doldurulması gerektiğini öğrenmek için kanül kutunuzdaki talimat kitapçığına bakın.

### Wallpaper

You can find the AAPS wallpaper for your phone on the [phones page](#Phones-phone-wallpaper).

### Daily usage

#### Hygiene

##### What to do when taking a shower or bath?

Duş veya banyo yaparken pompayı çıkarabilirsiniz. Bu kısa süre için buna ihtiyacınız olmayabilir, ancak AİNS hesaplamalarının doğru olması için AAPS'e bağlantınızın kesildiğini söylemelisiniz. See [description above](#FAQ-disconnect-pump).

#### Work

İşinize bağlı olarak, iş günlerinde farklı tedavi faktörleri kullanmayı tercih edebilirsiniz. As a looper you should consider a [profile switch](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) for your typical working day. Örneğin, daha az zorlu bir işiniz varsa (örneğin, masada oturmak) %100'den yüksek bir profile veya tüm gün aktif ve ayaktaysanız %100'den az bir profile geçebilirsiniz. You could also consider a high or low temporary target or a [time shift of your profile](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) when working much earlier or later than regular, of if you work different shifts. Ayrıca ikinci bir profil (ör. "ev" ve "iş günü") oluşturabilir ve ihtiyacınız olan profile günlük profil geçişi yapabilirsiniz.

### Leisure activities

(FAQ-sports)=

#### Sports

Döngü öncesi zamanlardan kalma eski spor alışkanlıklarınızı yeniden çalışmanız gerekiyor. Daha önce olduğu gibi sadece bir veya daha fazla spor karbonhidratı tüketirseniz, kapalı döngü sistemi bunları tanıyacak ve uygun şekilde düzeltecektir.

Böylece daha fazla aktif karbonhidrat olurdu, ancak aynı zamanda döngü, insülini verir ve etkisiz hale getirirdi.

Döngü yaparken şu adımları denemelisiniz:

- Make a [profile switch](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) < 100%.
- Set an [activity temp target](#TempTargets-activity-temp-target) above your standard target.
- If you are using SMB make sure ["Enable SMB with high temp targets"](#Open-APS-features-enable-smb-with-high-temp-targets) and ["Enable SMB always"](#Open-APS-features-enable-smb-always) are disabled.

Bu ayarlar için önce ve sonra çalıştırma önemlidir. Değişiklikleri spordan önce zamanında yapın ve kas dolgusunun etkisini göz önünde bulundurun.

If you do sports regularly at the same time (i.e. sports class in your gym) you can consider using [automation](../DailyLifeWithAaps/Automations.md) for profile switch and TT. Konum tabanlı otomasyon da bir fikir olabilir ancak ön işlemeyi zorlaştırır.

Profil değişikliğinin yüzdesi, aktivite geçici hedefinizin değeri ve değişiklikler için en iyi zaman bireyseldir. Sizin için doğru değeri arıyorsanız güvenli taraftan başlayın (daha düşük yüzde ve daha yüksek GH ile başlayın).

#### Sex

Pompayı 'özgür' olabilmek için kaldırabilirsiniz, ancak AAPS'e AİNS hesaplamalarının doğru olması için söylemelisiniz. See [description above](#FAQ-disconnect-pump).

#### Drinking alcohol

Algoritma alkolden etkilenen KŞ'yi doğru bir şekilde tahmin edemediği için kapalı döngü modunda alkol içmek risklidir. AAPS'de aşağıdaki işlevleri kullanarak bunu tedavi etmek için kendi yönteminizi kontrol etmeniz gerekir:

- Kapalı döngü modunun devre dışı bırakılması ve diyabetin manuel olarak tedavi edilmesi veya
- gözetimsiz bir yemek nedeniyle döngüyü artıran AİNS'i önlemek için yüksek geçici hedefleri belirlemek ve bildirilmeyen Öğünleri (UAM)'yi devre dışı bırakmak veya
- % 100'den belirgin şekilde daha az bir profil geçişi yapın 

Alkol içerken, karbonhidrat yiyerek hipoglisemiyi manuel olarak önlemek için CGM'nize her zaman göz kulak olmalısınız.

#### Sleeping

##### How can I loop during the night without mobile and WIFI radiation?

Birçok kullanıcı geceleri telefonu uçak moduna alıyor. If you want the loop to support you when you are sleeping, proceed as follows (this will only work with a local BG-source such as xDrip+ or ['Build your own Dexcom App'](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app), it will NOT work if you get the BG-readings via Nightscout):

1. Cep telefonunuzda uçak modunu açın.
2. Uçak modu aktif olana kadar bekleyin.
3. Bluetooth'u açın.

Şu anda arama almıyorsunuz ve internete bağlı değilsiniz. Ama döngü hala çalışıyor.

Bazı kişiler, telefon uçak modundayken yerel yayınla (AAPS xDrip+'tan KŞ değerleri almıyor) ile ilgili sorunlar keşfetti. Ayarlar > Uygulamalar arası ayarlar > Alıcıyı tanımla'ya gidin ve `info.nightscout.androidaps` girin.

![xDrip+ Temel Uyg.-Arası Ayarlar Alıcıyı tanımlayın](../images/xDrip_InterApp_NS.png)

#### Travelling

##### How to deal with time zone changes?

Dana R ve Dana R Korean ile hiçbir şey yapmanıza gerek yok. For other pumps see [time zone travelling](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) page for more details.

### Medical topics

#### Hospitalization

If you want to share some information about AAPS and DIY looping with your clinicians, you can print out the [guide to AAPS for clinicians](../UsefulLinks/ClinicianGuideToAaps.md).

#### Medical appointment with your endocrinologist

##### Reporting

Nightscout raporlarınızı (https://YOUR-NS-SITE.com/report) gösterebilir veya [Nightscout Reporter](https://nightscout-reporter.zreptil.de/)'ı kontrol edebilirsiniz.

## Frequent questions on Discord and their answers...

### My problem is not listed here.

[Yardım almak için bilgi.](../GettingHelp/WhereCanIGetHelp.md)

### My problem is not listed here but I found the solution

[Yardım almak için bilgi.](../GettingHelp/WhereCanIGetHelp.md)

**Çözümünüzü bu listeye eklememizi bize hatırlatın!**

### AAPS stops everyday around the same time.

Google Play Protect'i durdurun. "Temizleme" uygulamalarını (yani CCleaner vb.) kontrol edin ve bunları kaldırın. AAPS / 3 nokta menüsü / Hakkında / tüm pil optimizasyonlarını durdurmak için "Uygulamayı arka planda çalışmaya devam et" bağlantısını izleyin.

### How to organize my backups ?

Ayarları çok düzenli olarak dışa aktarın: her pod değişikliğinden sonra, profilinizi değiştirdikten sonra, bir görevi doğruladığınızda, pompanızı değiştirirseniz… Hiçbir şey değişmese bile ayda bir dışa aktarın. Birkaç eski dışa aktarma dosyasını saklayın.

Bir internet sürücüsüne kopyalayın (Dropbox, Google vb.): Telefonunuza uygulama yüklemek için kullandığınız tüm apk'ler (AAPS, xDrip, BYODA, Yamalı LibreLink…) ve tüm uygulamalarınızdan dışa aktarılan ayar dosyaları.

### I have problems, errors building the app.

Lütfen

- check [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio) for typical errors and
- [adım adım izlenecek yol](https://docs.google.com/document/d/1oc7aG0qrIMvK57unMqPEOoLt-J8UT1mxTKdTAxm8-po) ile ilgili ipuçları.

### I'm stuck on an objective and need help.

Soru ve cevapları ekran görüntüsü alın. Discord AAPS kanalına yapıştırın. Hangi seçenekleri seçtiğinizi (veya seçmediğinizi) ve nedenini söylemeyi unutmayın. İpuçları ve yardım alacaksınız ancak yanıtları bulmanız gerekecek.

### How to reset the password in AAPS v2.8.x ?

Hamburger menüsünü açın, Yapılandırma sihirbazını başlatın ve sorulduğunda yeni şifreyi girin. Şifre aşamasından sonra sihirbazdan çıkabilirsiniz.

### How to reset the password in AAPS v3.x

You find the documentation [here](#Update3_0-reset-master-password).

### My link/pump/pod is unresponsive (RL/OL/EmaLink…)

Bazı telefonlarda (RL/OL/Emalink...) Bluetooth bağlantısı kesilir.

Bazı cihazların da yanıt vermeyen bağlantıları da vardır (AAPS, bağlı olduklarını ancak bağlantıların pompaya ulaşamadığını veya komuta edemediğini söylüyor.)

Tüm bu parçaların birlikte çalışmasını sağlamanın en kolay yolu şudur: 1/ AAPS'den Cihazı Silin (RL, OL, Emalink) 2/ Cihazı Kapatın 3/ AAPS 3 nokta menü, AAPS'den çıkın 4/ AAPS simgesine uzun basın, Android menüsü, uygulama AAPS hakkında bilgi, AAPS'yi durdurmaya zorla ve ardından Önbelleği sil (Ana belleği silmeyin!) Nadiren bazı telefonların burada yeniden başlatılması gerekebilir. Yeniden başlatmadan deneyebilirsiniz. 5/Cihazı açın 6/AAPS'i Başlatın 7/Pod sekmesi, 3 noktalı menü, cihazı arayın ve bağlayın

### Build error: file name too long

Derlemeye çalışırken dosya adının çok uzun olduğunu belirten bir hata alıyorum. Muhtemel çözümler: Kaynaklarınızı sürücünüzün kök dizinine daha yakın bir dizine taşıyın (ör. "c:\src\AndroidAPS-EROS").

Android Studio'dan: Projeyi açıp GitHub'dan çektikten sonra "Gradle"ın senkronizasyon ve indekslemenin yapıldığından emin olun. Bir Yeniden Proje yapmadan önce Temiz bir Proje yürütün. Execute File->Invalidate Caches ardından Android Studio'yu tekrar başlatın.

### Alert: Running dev version. Closed loop is disabled

AAPS "geliştirici modunda" çalışmıyor. AAPS şu mesajı gösterir: "dev sürümü çalışıyor. Kapalı döngü devre dışı".

AAPS'in "geliştirici modunda" çalıştığından emin olun: "AAPS/extra" konumuna "engineering_mode" adlı bir dosya yerleştirin. Herhangi bir dosya, doğru şekilde adlandırıldığı sürece iş görür. Dosyayı bulması ve "geliştirici moduna" geçmesi için AAPS'i yeniden başlattığınızdan emin olun.

İpucu: Mevcut bir günlük dosyasının bir kopyasını alın ve onu "engineering_mode" olarak yeniden adlandırın (not: dosya uzantısı olmayacak).

### Where can I find settings files?

Ayarlar dosyaları telefonunuzun dahili deposunda "/AAPS/preferences" dizininde saklanacaktır. UYARI: Parolanızı kesinlikle kaybetmeyin çünkü onsuz şifreli bir ayar dosyasını içe aktaramazsınız!

### How to configure battery savings?

Güç Yönetiminin doğru şekilde yapılandırılması, telefonunuzun işletim sisteminin, telefonunuz kullanılmadığında AAPS'i ve ilgili uygulama ve hizmetleri askıya almaması için önemlidir. Doğru yapılandırılmazsa, AAPS işini yapamaz ve/veya sensör için bluetooth bağlantıları ve Rileylink (RL) kapatılarak "pompa bağlantısı kesildi" uyarılarına ve iletişim hatalarına neden olabilir. Telefonda, ayarlar->Uygulamalar'a gidin ve aşağıdakiler için pil tasarrufunu devre dışı bırakın: AAPS xDrip veya BYODA/Dexcom uygulaması Bluetooth sistem uygulaması (önce sistem uygulamalarını görüntülemeyi seçmeniz gerekebilir) Alternatif olarak, telefondaki tüm pil tasarruflarını tamamen devre dışı bırakın. Sonuç olarak piliniz daha hızlı bitebilir ancak bu, soruna pil tasarrufunun neden olup olmadığını anlamanın bir yoludur. Pil tasarrufunun uygulanma şekli büyük ölçüde telefonun markasına, modeline ve/veya işletim sistemi sürümüne bağlıdır. Bu nedenle, kurulumunuz için pil tasarrufunu doğru şekilde ayarlamak için bu dokümanda talimat vermek neredeyse imkansızdır. Hangi ayarların sizin için en iyi sonucu verdiğini deneyin. Ek bilgi için ayrıca bkz. Uygulamamı devre dışı bırakma

### Pump unreachable alerts several times a day or at night.

Telefonunuz AAPS hizmetlerini veya bluetooth'u askıya alarak RL ile bağlantısını kaybetmesine neden olabilir (bkz. pil tasarrufu) Sağ üst taraftaki üç noktalı menüye gidip Tercihler->Yerel Uyarılar->Pompa ulaşılamaz eşiği [dk] öğesini seçerek ulaşılamaz uyarıları 120 dakikaya kadar yapılandırmayı düşünün.

### Where can I delete treatments in AAPS v3 ?

3 nokta menüsü, tedavileri seçin, ardından silmek istediğiniz tedavinin ana başlığını seçin.

### Configuring and Using the AAPSClient remote app

AAPS can be monitored and controlled remotely via the AAPSClient app and optionally via the associated Wear app running on Android Wear watches. Note that the AAPSClient (remote) app is distinct from the NSClient configuration in AAPS, and the AAPSClient (remote) Wear app is distinct from the AAPS Wear app--for clarity the remote apps will be referred to as 'AAPSClient remote' and 'AAPS remote Wear' apps.

To enable AAPSClient remote functionality you must: 1) Install the AAPSClient remote app (the version should match the version of AAPS being used) 2) Run the AAPSClient remote app and proceed through the configuration wizard to grant required permissions and configure access to your Nightscout site. 3) At this point you may want to disable some of the Alarm options, and/or advanced settings which log the start of the AAPSClient remote app to your Nightscout site. Once this is done, AAPSClient remote will download Profile data from your Nightscout site, the 'Overview' tab will display CGM data and some AAPS data, but but may not display graph data, and will indicate that a profile isn't yet set. 4) Profili etkinleştirmek için:

- AAPS > NSClient > Seçenekler'de uzaktan profil senkronizasyonunu etkinleştirin
- Activate the profile in NSClient remote > Profile After doing so, the profile will be set, and AAPSClient remote should display all data from AAPS. İpucu: Grafik hala eksikse, bir güncellemeyi tetiklemek için grafik ayarlarını değiştirmeyi deneyin. 5) To enable remote control by the AAPSClient, selectively enable the aspects of AAPS (Profile changes, Temp Targets, Carbs, etc.) that you would like to be able to control remotely via AAPS > NSClient > Options . Once these changes are made, you'll be able to remotely control AAPS via either Nightscout or AAPSClient remote.

If you'd like to monitor/control AAPS via the AAPSClient remote Wear App, you'll need both AAPSClient remote and the associated Wear app to be installed. To compile the AAPSClient remote Wear app, follow the standard instructions for installing/configuring the AAPS wear app, except when compiling it, choose the AAPSClient variant.

### I have a red triangle / AAPS won't enable closed loop / Loops stays in LGS / I have a yellow triangle

Kırmızı ve sarı üçgenler, AAPS v3'te bir güvenlik özelliğidir.

Kırmızı üçgen, yinelenen KŞ'niz olduğu ve AAPS'in deltaları tam olarak hesaplayamadığı anlamına gelir. Döngüyü kapalı yapamazsınız. Kırmızı üçgeni temizlemek için, kopyalanan her kan şekeri değerinizi silmeniz gerekir. BYODA veya xDRIP sekmesine gidin, silmek istediğiniz satırlardan birine uzun basın, çift satırlardan birini işaretleyin (veya AAPS sürümünüze bağlı olarak 3 nokta menüsü ve sil komutu ile). Çok fazla çift KŞ varsa AAPS veritabanını sıfırlamanız gerekebilir. Bu durumda, istatistikleri, AİNS, AKRB, seçilen profili de kaybedersiniz.

Sorunun olası kaynağı: xDrip ve/veya NS geri döngülü KŞ girdileridir.

Sarı üçgen, her bir KŞ okuması arasında kararsız gecikme anlamına gelir. Her 5 dakikada bir düzenli olarak KŞ bilgisi alamıyorsunuz veya eksik KŞ bilgisi alıyorsunuz. Bu genellikle bir Libre sensör sorunudur. G6 vericisini değiştirdiğinizde de olabilir. Sarı üçgen G6 verici değişikliği ile ilgiliyse, birkaç saat sonra (yaklaşık 24 saat) kendi kendine kaybolacaktır. Libre sensör kullanıyorsanız, sarı üçgen kalacaktır. Kapalı Döngü yapılabilir ve düzgün çalışır.

### Can I move an active DASH Pod to other hardware?

Bu mümkündür. Yalnız taşımanın "desteklenmediği" ve "denenmediği" için bazı risklerin olduğunu unutmayın. Taşıma prosedürünü Pod'unuzun süresi dolmak üzereyken denemek en iyisidir, böylece işler ters gittiğinde fazla bir şey kaybetmezsiniz.

AAPS ve DASH eşleşmesindeki pompa "durumu" (MAC adresini içerir) kritiktir

### Procedure I follow in this:

1) DASH pompasını askıya alın. Bu komut DASH bağlantıyı kaybettiğinde çalışan veya sıraya alınmış komutların etkin olmamasını sağlar. 2) Bluetoothu devre dışı bırakmak için telefonu uçak moduna alın. (aynı zamanda WiFi ve Mobil veri için) Bu şekilde AAPS ve DASH'ın iletişim kuramaması garanti edilir. 3) Ayarları dışa aktarın (DASH durumunu içerir) 4) Telefondan yeni dışa aktarılan ayar dosyasını kopyalayın (uçak modunda olduğu ve bunu değiştirmek istemediğimiz için en kolay yol USB kablosu kullanmaktır) 5) Ayarlar dosyasını taşımak istediğiniz telefona kopyalayın. 6) Yeni telefonda AAPS ayarlarını içe aktarın. 7) Pod'u gördüğünü doğrulamak için DASH sekmesini kontrol edin. 8) Askıya almayı kaldırın. 9) DASH sekmesini kontrol edin ve Pod ile iletişim kurduğunu onaylayın (yenile düğmesini kullanın)

Tebrikler: başardın!

*Bekleyin!* Hala aynı DASH'a yeniden bağlanabilen bir telefona sahipsiniz:

1) Eski telefonda "devre dışı bırak"ı seçin. Bu güvenlidir çünkü telefonun, Pod'u fiilen devre dışı bırakmak için DASH ile iletişim kurmasının hiçbir yolu yoktur (çünkü hala uçak modunda) 2) Devre dışı bırakma bir iletişim hatasına neden olur - (beklenen birşey). 3) AAPS, Pod'u "İptal Etme" seçeneği sunana kadar birkaç kez "tekrar dene" düğmesine basın.

İptal edildiğinde, AAPS'in "Etkin Pod Yok" bildirdiğini doğrulayın. Artık uçak modundan güvenle çıkabilirsiniz.

### How do I import settings from earlier versions of AAPS into AAPS v3 ?

Yalnızca AAPS v2.8x veya v3.x kullanılarak dışa aktarılan ayarları AAPS v3'te içe aktarabilirsiniz. AAPS'in v2.8x'ten daha eski bir sürümünü kullanıyorsanız veya v2.8x'ten daha eski dışa aktarma ayarlarını kullanmanız gerekiyorsa, önce AAPS v2.8'i yüklemeniz gerekir. v2.x'in eski ayarlarını v2.8'e aktarın. Her şeyin yolunda olduğunu kontrol ettikten sonra ayarları v2.8'den dışa aktarabilirsiniz. AAPS v3'ü yükleyin ve v2.8 ayarlarını v3'e aktarın.

v2.8 ve v3'ü oluşturmak için Androidstudio'da aynı anahtarı kullanırsanız, ayarları içe aktarmanız bile gerekmez. v2.8 üzerinden v3 yükleyebilirsiniz.

Bazı yeni görevler eklendi. Onları doğrulamanız gerekecek.