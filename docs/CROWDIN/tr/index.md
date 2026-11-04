# AAPS dokümantasyonuna hoş geldiniz

![image](./images/basic-outline-of-AAPS.png)

```{admonition} Latest Release
:class: note

31 Ekim 2026: 4.0.0 sürümü yayınlandı. Yenilikleri görmek için [Sürüm notları](#latestrelease) sayfasına bakın ve güncellemek için [güncelleme kılavuzundaki](./Maintenance/UpdateToNewVersion.md) talimatları izleyin.

```

Android APS (**AAPS**), insüline bağımlı diyabetle yaşayan kişiler için açık kaynaklı bir uygulamadır. Android akıllı telefonlarda çalışan bir yapay pankreas sistemidir (APS). **AAPS** bir OpenAPS yazılım algoritması kullanır ve gerçek bir pankreasın yaptığını yapmayı amaçlar: otomatik insülin dozlaması ile kan şekeri düzeylerini sağlıklı sınırlar içinde tutmak. **AAPS**'i kullanmak için **üç** uyumlu cihaza ihtiyacınız vardır: **(1)** bir Android telefon, **(2)** bir sürekli glikoz monitörü (CGM) ve **(3)** FDA/CE onaylı bir insülin pompası. Ayrıca **AAPS**'i uzaktan kontrol etmek, verilerinizi paylaşmak ve bir raporlama sunucusunda saklamak için **(4)** bulut hizmetleri ve **(5)** bir akıllı saat ekleyebilirsiniz.

Bu dokümantasyon, **AAPS**'in nasıl kurulacağını ve kullanılacağını açıklar. **AAPS** dokümantasyonunda soldaki menüyü (ve kullanışlı **dokümantasyonda arama** işlevini) veya bu sayfanın altındaki [dizini](#index-aaps-documentation-index) kullanarak gezinebilirsiniz.

## AAPS dokümantasyonuna genel bakış ("Dokümanlar")

**1) Başlarken** bölümünde [APS ve AAPS'e giriş](Getting-Started/Introduction.md), bir yapay pankreas sisteminin (APS) ne yapmak için tasarlandığına dair genel kavramı açıklar. Genel olarak döngü kullanımının arka planını, **AAPS**'in neden geliştirildiğini anlatır, **AAPS**'i diğer sistemlerle karşılaştırır ve güvenlik konusunu ele alır. Klinik ekibinizle **AAPS** hakkında nasıl konuşabileceğiniz konusunda öneriler verir, **AAPS** uygulamasını neden sadece indirmek yerine kendiniz oluşturmanız gerektiğini açıklar ve tipik bir **AAPS** sisteminin bağlantılarına genel bir bakış sunar. Ayrıca erişilebilirliği ve **AAPS**'ten kimlerin yararlanabileceğini de ele alır.

[AAPS ile başlamaya hazırlık](./Getting-Started/PreparingForAaps.md), güvenlikle ilgili konular ve **AAPS** ile uyumlu telefonlar, CGM'ler (Sürekli Glikoz Monitörleri) ve insülin pompaları hakkında daha fazla bilgi verir. İzleyeceğiniz sürece genel bir bakış sunar ve **AAPS**'in tüm işlevlerini kullanabilmeniz için gereken yaklaşık süreyi verir. Bu bölüm, **AAPS** kurulumunuzu olabildiğince hızlı ve verimli bir şekilde bir araya getirmeniz için sizi teknik olarak hazırlar. [Uyumlu CGM'ler](./Getting-Started/CompatiblesCgms.md) alt bölümü, CGM kurulumunuzu nasıl en iyi hale getireceğinizi ve hangi yumuşatma seçeneklerinin en iyi olduğunu açıklar.

Artık süreci iyi anladığınıza göre **AAPS** döngünüzü kurmaya başlayabilirsiniz.

**2) Uygulamayı oluşturma** bölümü, **AAPS** uygulamasını neden sadece indirmek yerine kendiniz oluşturmanız gerektiğini açıklar ve sizi adım adım [AAPS'i oluşturma](./SettingUpAaps/BuildingAaps.md) (tarayıcı, Android Studio veya komut satırı ile) ve ardından uygulamayı telefonunuza aktarma ve yükleme sürecinden geçirir. Bölüm, isteğe bağlı bir adımla başlar: oluşturduğunuz uygulamaları ve yedeklerinizi saklamak için [ayrı bir Google hesabı](./UsefulLinks/DedicatedGoogleAccountForAaps.md) açmak. Ayrıca [Android geliştirici doğrulamasını](#android-developer-verification) da açıklar. Bu, Google'ın Eylül 2026'dan itibaren kullanıma sunduğu ve kendi oluşturduğunuz uygulamaların nasıl yüklendiğini etkileyen bir değişikliktir.

**3) Raporlama sunucusunu kurma** bölümü, verilerinizi inceleyip paylaşabilmeniz için raporlama sunucunuzu (Nightscout veya Tidepool) seçmeyi ve [raporlama sunucusunu kurmayı](./SettingUpAaps/SettingUpTheReportingServer.md) anlatır.

**4) [AAPS'i yapılandırma](./SettingUpAaps/SetupWizard.md)** bölümü, **AAPS** uygulamasını Kurulum Sihirbazı ile kurmayı, uygulamayı CGM uygulamanıza ve gerçek ya da sanal bir insülin pompasına bağlamayı ve **AAPS**'i raporlama sunucunuza bağlamayı anlatır. Ardından güvenli, dikkatle ayarlanmış, adım adım bir süreçle **AAPS**'in yapabildiği her şeyi öğrenirsiniz. Bu süreç, bir sonraki aşamaya, yani genellikle bir sonraki "Görev" olarak adlandırılan aşamaya geçmeden önce, sizin (veya çocuğunuzun) tüm farklı seviyeleri ve menü ayarlarını iyice tanımanızı ve rahatça kullanmanızı sağlar. Uygulamadaki daha gelişmiş seçenekleri kullanmaya başlamak için yeterli deneyime sahip olana kadar bu şekilde ilerlemeye devam edersiniz. Bu Görevler, **AAPS**'in daha fazla özelliğini adım adım açmak ve Açık Döngü'den Kapalı Döngü'ye geçmek için özel olarak tasarlanmıştır.

**5) [AAPS ile günlük yaşam](./DailyLifeWithAaps/AapsScreens.md)** bölümü, **AAPS**'i kullanmanıza (ve kendinize göre ayarlamanıza) yardımcı olmak için **AAPS**'in temel özelliklerini anlatır. Buna ekranları anlamak, aktif karbonhidrat (AKRB), duyarlılık, Dinamik İDF, profil değişimi, geçici hedefler, yayma karbonhidratlar (veya yKarb), otomasyonlar ve [verilerinizi](./Maintenance/Reviewing.md) geçmiş tarayıcısında ve istatistiklerde inceleme dahildir. Ayrıca farklı öğün türlerinin nasıl yönetileceği, kanül ve sensör değişimleri, akıllı telefon güncellemeleri, yaz saati değişiklikleri, [AAPS ile seyahat](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) ve spor gibi sık karşılaşılan konuları da ele alır. Sık sorulan sorular ve yanıtları sorun giderme bölümündedir.

**6) [AAPS'in uzaktan özellikleri](./RemoteFeatures/RemoteControl.md)** bölümü, **AAPS**'in gerçek bir güçlü yönünü öne çıkarır. **AAPS**'e uzaktan komut göndermek veya sadece verilerini takip etmek için çok sayıda seçenek vardır. Bu, **AAPS**'i çocuklar için kullanmak isteyen bakıcılar için de, şekerlerini (ve diğer değerleri) sadece telefonda değil daha rahat bir şekilde (saatte, arabada _vb._) izlemek isteyen veya yakınlarının da verileri izlemesini isteyen diyabetli yetişkinler için de aynı derecede yararlıdır. Bu bölüm ayrıca glikoz değerlerini arabada görebilmeniz için Android Auto kullanımını da anlatır.

**7) [Wear OS akıllı saatler](./WearOS/BuildingAapsWearOS.md)** bölümü, bir Android **Wear OS** akıllı saati özel **AAPS** saat arayüzleri veya özel saat arayüzleri ile, telefonunuz için uzaktan kumanda olarak veya sadece bir gösterge olarak kullanmak için bilgi ve yöntemler verir.


**8) [AAPS'in bakımı](./Maintenance/ExportImportSettings.md)** bölümü, ayarlarınızı nasıl dışa aktaracağınızı ve yedekleyeceğinizi (telefonunuzu kaybederseniz veya bozarsanız çok önemlidir) anlatır, en son sürüm notlarını verir, **AAPS**'i nasıl güncelleyeceğinizi ayrıntılı olarak anlatır ve bir sürümün kullanım ömrü sona erdiğinde ne olduğunu açıklar. Her yıl bir yeni sürüm ve 2-3 zorunlu güncelleme bekleyebilirsiniz. Tüm yazılımlarda olduğu gibi bu güncellemeleri yapmanız gerekir, çünkü küçük hatalar giderilir ve **AAPS** iyileştirilir. Sık sorulan konuları içeren, "güncelleme" için ayrı bir sorun giderme bölümü vardır.

**9) [Yardım ve sorun giderme](GettingHelp/WhereCanIGetHelp.md)** bölümü, **AAPS** ile ilgili genel yardım bulabileceğiniz en iyi yerlere sizi yönlendirir. Bir şey çalışmadığında başvuracağınız tek yer burasıdır: [Sorun giderme](GettingHelp/GeneralTroubleshooting.md) merkezi en sık görülen sorunların çözümlerini konulara göre toplar ve [SSS](UsefulLinks/FAQ.md) sık sorulan soruları yanıtlar. Bu çok önemlidir, çünkü böylece başkalarıyla olabildiğince hızlı iletişim kurabilir, sorularınızı netleştirebilir ve sık görülen sorunları çözebilirsiniz. Pek çok kişi **AAPS**'i zaten başarıyla kullanıyor, ancak herkesin bir noktada kendi başına çözemediği bir sorusu olur. Kullanıcı sayısı çok fazla olduğu için sorulara genellikle çok hızlı, çoğu zaman sadece birkaç saat içinde yanıt verilir. Yardım istemekten çekinmeyin, aptalca soru diye bir şey yoktur! Herhangi bir deneyim düzeyindeki tüm kullanıcıları, güvenli bir şekilde çalışmaya başlamalarına yardımcı olmak için gerekli olduğunu düşündükleri kadar çok soru sormaya teşvik ediyoruz. Bu bölüm, **AAPS** ve **AAPSClient** (yardımcı takip uygulaması) için genel sorun giderme bilgilerini içerir. Ayrıca **AAPS** ile ilgili teknik bir sorunun incelenmesi gerektiğini düşünüyorsanız, **AAPS** verilerinizi (günlük dosyalarını) inceleme için geliştiricilere nasıl göndereceğinizi açıklar.

**10)** bölümü **[AAPS'in gelişmiş seçenekleri](./AdvancedOptions/FullClosedLoop.md)** konusunu ele alır: örneğin **AAPS**'i hibrit kapalı döngü (öğünler için bolus _vb._) olarak kullanmaktan tam kapalı döngüye (bolus yok) nasıl geçileceği, [profilinize nasıl ince ayar yapılacağı](./GettingHelp/ProfileTuning.md) ve OtoAyar'ın nasıl kullanılacağı. Ayrıca geliştirme ve mühendislik modlarını ayrıntılı olarak anlatır. Çoğu kullanıcı bu seçeneklere bakmadan ana sürüm, yani "Master" **AAPS** sürümü ile çok iyi idare eder. Bu bölüm, kontrolü zaten iyi olan ve kurulumunu daha da iyileştirmek isteyen kullanıcılar içindir.

**11) [AAPS'i nasıl destekleyebilirsiniz](SupportingAaps/HowCanIHelp.md)** bölümünde bu projeyi destekleyebilmeniz için bilgi veriyoruz. Para, ekipman veya uzmanlık bağışlayabilirsiniz. Dokümantasyonda kendiniz değişiklik önerebilir veya yapabilir, [dokümantasyonun çevirisine](SupportingAaps/Translations.md) yardım edebilir ve Open Humans projesi aracılığıyla verilerinizi paylaşabilirsiniz.

**12) Kaynaklar** bölümü, arşivlenmiş veya ek dokümantasyon içerir. Buna **AAPS** gibi açık kaynaklı yapay pankreas teknolojisine ilgi gösteren [klinisyenler](UsefulLinks/ClinicianGuideToAaps.md) veya bu bilgileri klinisyenleriyle paylaşmak isteyen hastalar için bir alt bölüm de dahildir. Bu konu girişte de ele alınmıştır. Bu bölümde diyabet ve döngü ile ilgili daha fazla kaynak ve bilgi de bulunur. Bu bölümde, **AAPS** genelinde kullanılan kısaltmaların (veya kısa adların) listesi olan [Sözlük](./UsefulLinks/Glossary.md) de bulunur. Örneğin İDF veya GH gibi terimlerin ne anlama geldiğini burada bulabilirsiniz.


 ### **AAPS** ile başlamak mı istiyorsunuz? **AAPS** hakkında daha fazla bilgiyi [APS ve AAPS'e giriş](Getting-Started/Introduction.md) sayfasında okuyun.

```{admonition} SAFETY NOTICE
:class: danger
**AAPS**'in güvenliği, donanımınızın (telefon, pompa, CGM) güvenlik özelliklerine dayanır. Yalnızca tam olarak çalışan, FDA/CE onaylı bir insülin pompası ve CGM kullanın. Bozuk, değiştirilmiş veya kendi yaptığınız insülin pompalarını ya da CGM alıcılarını kullanmayın. Yalnızca üreticinin pompanız ve CGM'niz ile kullanım için onayladığı orijinal sarf malzemelerini (yerleştiriciler, kanüller ve insülin rezervuarları) kullanın. Test edilmemiş veya değiştirilmiş sarf malzemeleri kullanmak ölçüm hatalarına ve insülin dozlama hatalarına yol açabilir. Bu, kullanıcı için ciddi bir risktir. 

SGLT-2 inhibitörleri (gliflozinler) kullanıyorsanız **AAPS**'i kullanmayın, çünkü bu ilaçlar kan şekeri düzeylerini düşürür. Azalan insülin verilmesi nedeniyle diyabetik ketoasidoz (DKA) riskini ve düşen kan şekeri düzeyleri nedeniyle hipoglisemi riskini artırırsınız. 
```

```{admonition} Disclaimer
:class: note

- Burada anlatılan tüm bilgiler ve kodlar yalnızca bilgi ve eğitim amaçlıdır. [Nightscout](https://nightscout.github.io/) ve **AAPS**'i kullanma riski size aittir. Bilgileri veya kodu tıbbi kararlar vermek için kullanmayın. Nightscout şu anda HIPAA gizlilik uyumluluğu için herhangi bir girişimde bulunmamaktadır. 
- Use of code from github.com is without warranty or formal support of any kind. Ayrıntılar için lütfen bu deponun LICENSE dosyasını okuyun.
- All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. Bu adlar yalnızca bilgi vermek için kullanılır. Bu, onlarla herhangi bir bağlantımız olduğu veya onların bizi desteklediği anlamına gelmez.

**AAPS**'in şu şirketlerle hiçbir bağlantısı yoktur ve bu şirketler tarafından desteklenmez: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/), [Medtronic](https://www.medtronic.com/), [Diaconn](https://www.diaconn.com/en/index.html), [EOFlow](http://www.eoflow.com/), [MicroTech Medical (Equil)](https://www.microtechmd.com/), [Medtrum](https://www.medtrum.com/), [Senseonics (Eversense)](https://www.senseonics.com/), [i-SENS (CareSens)](https://i-sens.com/), [POCTech](https://poctechcorp.com/en/), [Ottai](https://ottai.com/) veya [Syai](https://www.syai.com/).

```

(index-aaps-documentation-index)=

## AAPS dokümantasyon dizini

```{toctree}
:caption: Using this documentation
:titlesonly:

Change language and version <./NavigateDoc/ChangeLanguageVersion.md>
Search the documentation <./NavigateDoc/SearchDoc.md>
Documentation updates <./Maintenance/DocumentationUpdate.md>
```
```{toctree}
:caption: 1) Başlarken

APS ve AAPS'e giriş <./Getting-Started/Introduction.md>
AAPS ile başlamaya hazırlık <./Getting-Started/PreparingForAaps.md>
Bileşenlere Genel Bakış <./Getting-Started/ComponentOverview.md>
- Uyumlu pompalar <./Getting-Started/CompatiblePumps.md>
- Uyumlu CGM'ler <./Getting-Started/CompatiblesCgms.md>
- Telefonlar  <./Getting-Started/Phones.md>
- Akıllı saatler ve AAPS  <./Getting-Started/Watches.md>
```

```{toctree}
:caption: 2) Uygulamayı oluşturma

AAPS için ayrı bir Google hesabı (isteğe bağlı) <./UsefulLinks/DedicatedGoogleAccountForAaps.md>
AAPS'i oluşturma <./SettingUpAaps/BuildingAaps.md>
- Tarayıcı ile oluşturma <./SettingUpAaps/BrowserBuild.md>
- Android Studio ile oluşturma <./SettingUpAaps/ComputerBuild.md>
- Komut satırı ile oluşturma talimatları <./SettingUpAaps/CLIBuild.md>
AAPS'i akıllı telefonunuza aktarma ve yükleme <./SettingUpAaps/TransferringAndInstallingAaps.md>
```
```{toctree}
:caption: 3) Raporlama sunucusunu kurma

Raporlama sunucusunu kurma <./SettingUpAaps/SettingUpTheReportingServer.md>
- Nightscout <./SettingUpAaps/Nightscout.md>
- Tidepool <./SettingUpAaps/Tidepool.md>
```
```{toctree}
:caption: 4) AAPS'i yapılandırma

AAPS Kurulum Sihirbazı <./SettingUpAaps/SetupWizard.md>
AAPS profiliniz <./SettingUpAaps/YourAapsProfile.md>
AAPS yapılandırmanızda değişiklik yapma <./SettingUpAaps/ChangeAapsConfiguration.md>
- Konfigürasyon (Config Builder) <./SettingUpAaps/ConfigBuilder.md>
- Ayarlar <./SettingUpAaps/Preferences.md>
Görevleri tamamlama <./SettingUpAaps/CompletingTheObjectives.md>
```

```{toctree}
:caption: 5) AAPS ile günlük yaşam

AAPS ekranları <./DailyLifeWithAaps/AapsScreens.md>
AAPS'in temel özellikleri <./DailyLifeWithAaps/KeyAapsFeatures.md>
AKRB hesaplaması <./DailyLifeWithAaps/CobCalculation.md>
Duyarlılık algılama <./DailyLifeWithAaps/SensitivityDetectionAndCob.md>
Dinamik İDF (DynISF) <./DailyLifeWithAaps/DynamicISF.md>
Profil değişimi ve profil yüzdesi <./DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md>
Geçici-Hedefler <./DailyLifeWithAaps/TempTargets.md>
Yayma karbonhidratlar / "yKarb" <./DailyLifeWithAaps/ExtendedCarbs.md>
Hızlı Asistanlar (tek dokunuşla bolus) <./DailyLifeWithAaps/QuickWizards.md>
Senaryolar (duruma göre ön ayarlar) <./DailyLifeWithAaps/Scenes.md>
Otomasyon <./DailyLifeWithAaps/Automations.md>
Hızlı Başlatma (genel bakış ekranındaki hızlı işlem araç çubuğu) <./DailyLifeWithAaps/QuickLaunch.md>
Ana ekran widget'ları <./DailyLifeWithAaps/Widgets.md>
Yiyecek (yiyecek veritabanınız) <./DailyLifeWithAaps/Food.md>
Genel arama <./DailyLifeWithAaps/GlobalSearch.md>
Verilerinizi inceleme <./Maintenance/Reviewing.md>
Çocuklar için AAPS <./DailyLifeWithAaps/AapsForChildren.md>
Pompalar ve kanüller <./DailyLifeWithAaps/PumpsAndCannulas.md>
Saat dilimi değişikliği ve yaz saati uygulaması <./DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md>

```

```{toctree}
:caption: 6) AAPS'in uzaktan özellikleri

Uzaktan İzleme <./RemoteFeatures/RemoteMonitoring.md>
AAPS'i takip etme (AAPS sistemiyle etkileşim olmadan) <./RemoteFeatures/FollowingOnly.md>
Android Auto <./RemoteFeatures/AndroidAuto.md>
AAPS'in uzaktan kontrolü <./RemoteFeatures/RemoteControl.md>
AAPSClient uygulaması <./RemoteFeatures/AapsClient.md>
Ana birim ↔ İstemci kontrolü (imzalı uzaktan kumanda) <./RemoteFeatures/ClientMasterControl.md>
SMS Komutları <./RemoteFeatures/SMSCommands.md>

```
```{toctree}
:caption: 7) Wear OS akıllı saatler

Wear AAPS uygulamasını oluşturma <./WearOS/BuildingAapsWearOS.md>
Wear OS saatinizde AAPS kurulumu <./WearOS/WearOsSmartwatch.md>
Wear OS akıllı saatiniz üzerinden AAPS'in kullanımı <./RemoteFeatures/RemoteControlWearOS.md>
Özel Saat Arayüzü Başvuru Belgesi <./ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md>
Özel saat arayüzleri için paylaşım sayfası <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: 8) AAPS'in bakımı

Yedek oluşturma ve geri yükleme <./Maintenance/ExportImportSettings.md>
Sürüm notları <./Maintenance/ReleaseNotes.md>
AAPS v4'te neler değişti <./Maintenance/V4Changes.md>
Yeni bir sürüme veya dala güncelleme <./Maintenance/UpdateToNewVersion.md>
- Tarayıcı ile güncelleme (fork) <./Maintenance/UpdateBrowserBuild.md>
- Android Studio ile güncelleme <./Maintenance/UpdateComputerBuild.md>
Kullanım ömrünün sonu <./Maintenance/EndOfLife.md>

```

```{toctree}
:caption: 9) Yardım ve sorun giderme

Nereden yardım alabilirim? <./GettingHelp/WhereCanIGetHelp.md>
Sorun giderme <./GettingHelp/GeneralTroubleshooting.md>
- Bluetooth ile ilgili sorunlar <./GettingHelp/BluetoothTroubleshooting.md>
- NSClient'te Sorun Giderme <./GettingHelp/TroubleshootingNsClient.md>
- Android Studio'da Sorun Giderme <./GettingHelp/TroubleshootingAndroidStudio.md>
- Tarayıcı ile oluşturma: sorun giderme <./GettingHelp/BrowserBuildTroubleshooting.md>
- Yeni bir anahtar deposuyla AAPS'i yeniden yükleme <./GettingHelp/ReinstallAaps.md>
- Günlük dosyalarına erişim <./GettingHelp/AccessingLogFiles.md>
Döngü kullanıcıları için SSS <./UsefulLinks/FAQ.md>
```

```{toctree}
:caption: 10) AAPS'in gelişmiş seçenekleri

Tam Kapalı Döngü <./AdvancedOptions/FullClosedLoop.md>
AAPS profilinde ince ayar <./GettingHelp/ProfileTuning.md>
OtoAyar eklentisi nasıl kullanılır? <./AdvancedOptions/Autotune.md>
İnsülin Konsantrasyonu <./AdvancedOptions/InsulinConcentration.md>
Geliştirme dalı <./AdvancedOptions/DevBranch.md>
Tarayıcı ile oluşturma: bir commit'i cherry-pick ile ekleme <./AdvancedOptions/BrowserBuildCherryPick.md>

```
```{toctree}
:caption: 11) AAPS'i nasıl destekleyebilirsiniz

AAPS'e nasıl katkıda bulunurum? <./SupportingAaps/HowCanIHelp.md>
Dokümanlar nasıl düzenlenir <./SupportingAaps/HowToEditTheDocs.md>
AAPS uygulaması veya dokümantasyon için dizeler nasıl çevrilir <./SupportingAaps/Translations.md>
uygulama ve dokümantasyonun çeviri durumu <./SupportingAaps/StateOfTranslations.md>
Open Humans Uploader <./SupportingAaps/OpenHumans.md>

```
```{toctree}
:caption: 12) Kaynaklar

Sözlük <./UsefulLinks/Glossary.md>
Başlamadan önce okumak için faydalı kaynaklar <./UsefulLinks/BackgroundReading.md>
Klinisyenler İçin – AAPS'e Genel Giriş ve Kılavuz <./UsefulLinks/ClinicianGuideToAaps.md>
```
