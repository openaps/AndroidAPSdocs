# AAPS dokümantasyonuna hoş geldiniz

![image](./images/basic-outline-of-AAPS.png)

AAPS, android akıllı telefonlarında yapay pankreas sistemi (APS) görevi gören, insüline bağımlı diyabetle yaşayan kişiler için açık kaynak kodlu bir uygulamadır. It uses an openAPS software algorithm which aims to do what a living pancreas does: keeping blood sugar levels within healthy limits by using automated insulin dosing (AID). Additionally, you need a supported and FDA/CE approved insulin pump, and a continuous glucose meter.

Interested? Read more about AAPS in the [introduction](introduction.md).

```{warning}
** ÖNEMLİ GÜVENLİK BİLDİRİMİ **

Bu dokümantasyonda anlatılan AAPS güvenlik özelliklerinin temeli, sisteminizi oluşturmak için kullanılan donanımın güvenlik özellikleri üzerine kurulmuştur. Kapalı döngü kullanımı ile otomatik insülin dozlama için yalnızca test edilmiş, tam işlevli FDA veya CE onaylı insülin pompası ve CGM kullanmanız kritik derecede önemlidir. Bu bileşenlerin donanımında veya yazılımında yapılan değişiklikler, beklenmeyen insülin iletimine ve dolayısıyla kullanıcı için önemli risklere yol açabilir. Bir AAPS sistemi oluşturmak veya çalıştırmak için bozulmuş, değiştirilmiş veya kendi kendine yapılmış insülin pompaları veya CGM alıcıları bulursanız veya size teklif edilirse *kesinlikle kullanmayın*.

Ek olarak, sadece orijinal aksesuarların kullanılması da bir o kadar önemlidir. Yerleştirme yardımcıları, kanüller ve rezervuarlar, pompanız veya CGM ile kullanım için üretici tarafından onaylanmalıdır. Test edilmemiş veya modifiye edilmiş aksesuarların kullanılması, CGM Sisteminin yanlış olmasına ve insülin iletim hatalarına neden olabilir. Yanlış dozda insülin çok tehlikelidir. Test edilmemiş veya modifiye edilmiş aksesuarlar kullanarak hayatınız ile oynamayın.

Son olarak, SGLT-2 inhibitörlerini (gliflozinler) kan şekeri düzeylerini inanılmaz derecede düşürdükleri için bu programla beraber bu ilaçları kullanmamalısınız.  Kan Şekerini artırmak için bazal oranları düşüren bir sistemle kombinasyon tehlikelidir. Çünkü gliflozin nedeniyle Kan Şekerindeki bu artış gerçekleşmeyebilir ve tehlikeli bir insülin eksikliği durumu meydana gelerek ketoasidoza sebep olabilir.
```

```{note}
**Sorumluluk Reddi ve Uyarı**

- Burada açıklanan tüm bilgiler, düşünce ve kodlar yalnızca bilgilendirme ve eğitim amaçlıdır. Nightscout şu anda HIPAA gizlilik uyumluluğu için herhangi bir girişimde bulunmamaktadır. Nightscout ve AAPS'i kendi sorumluluğunuzda kullanın. Tıbbi kararlar almak için bilgileri veya kodu kullanmayın.
- github.com'dan alınan kodun kullanımı herhangi bir garanti veya resmi destek içermez. Ayrıntılar için lütfen bu deponun LİSANSINI gözden geçirin.
- Tüm ürün ve şirket adları, ticari markalar, hizmet markaları, tescilli ticari markalar ve tescilli hizmet markaları ilgili sahiplerinin mülkiyetindedir. Kullanımları bilgi amaçlıdır ve onlar tarafından herhangi bir bağlantı veya onay anlamına gelmez.

Lütfen unutmayın - bu projenin [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/) veya [Medtronic](https://www.medtronic.com/) ile hiçbir ilişkisi yoktur ve bunlar tarafından desteklenmemektedir.
```

## Dokümantasyon nasıl okunur?

Dokümantasyonun bu alt başlığını özellikle Kendin-Yap-APS (Yapay-Pankreas-Sistemleri) kavramına yeni başlayanlar için en önemli olduğunu düşündüğümüz bilgilerle nasıl tanışacaklarını en iyi şekilde göstermek için, özellikle AAPS yolculuğunuza ilk başladığınızda belirlenen "sınırların" arkasındaki nedenleri anlamak açısından derledik. Bu güvenlik sınırları, yeni kullanıcıların AAPS'yi ilk kez kurmayı, oluşturmayı ve ardından başarılı bir şekilde döngü yapmayı öğrenirken yanlışlıkla yapmaları muhtemel olan hataların gözlemlenmesiyle uzun yıllar boyunca geliştirilmiştir. Kullanıcılar sistemi kullanmaya başlamak için o kadar heyecanlılar ki, çoğu zaman oturup bu dokümantasyondaki bilgileri tam olarak anlamak için gereken zamanı ayırmayı unutuyorlar. Hepimiz bu aşamalardan geçtik!

"Her şeyi oku" yaklaşımı değerlidir ve kesinlikle doğrudur. Bununla birlikte, yeni gelenlerin, bir kerede anlamaları beklenen yeni bilgi hacmi ve çeşitliliği karşısında hızla bunalmaları olasıdır! Dolayısıyla bu sonraki birkaç alt başlık, kendi seçtiğiniz kurulumu mümkün olduğunca az aksaklıkla başarılı bir şekilde yürütmek için gerekli olan bilginin en önemli temellerini ortaya koymayı amaçlamaktadır. Yeni kullanıcılar, sistemin henüz aşina olmadıkları yönleriyle karşılaştıklarında bu kılavuza başvurabilirler; ve gerektiğinde daha derinlemesine bilgi bulmak için dokümantasyonda nereye gideceklerini kendilerine hatırlatılacak. AAPS'in yeteneklerini önceden belirlemek de önemlidir, çünkü bazen belgeleri okurken bazı gerekli araçların şu anda kullanılamadığını keşfetmek hayal kırıklığı yaratabilir (bazı ülkelerde diğer ülkelere kıyasla hangi tür insülin pompalarının veya CGM'lerin bulunduğu değişiklik gösterir) veya basitçe ilk varsayıldığından daha az/farklı işlevsellik sunar. Son olarak, bu dokümantasyondaki deneyimle ilgili birçok yönün yalnızca AAPS'i gerçek zamanlı olarak kullanmaya başladığınızda uygun hale geldiğini kabul etmek önemlidir. Sadece kuralları okuyarak bir sporu mükemmel bir şekilde oynamayı öğrenmek neredeyse imkansız olduğu gibi, önce AAPS'i güvenli bir şekilde çalıştırma kurallarının temellerini öğrenmenin ve ardından AAPS ile döngü adımlarında gezinirken bu kuralların en iyi nasıl uygulanacağını öğrenmeye zaman ayırmanın bir kombinasyonunu gerektirir.

[ Başlarken](Getting-Started/Safety-first.md) alt başlığı, yapay bir pankreas sisteminin ne yapmak üzere tasarlandığına ilişkin genel konsepti anlamak için mutlaka okunmalıdır; ve özellikle AAPS kullanıcıları için uygundur.

[Neye ihtiyacım var?](Module/module.md) alt başlığı, AAPS ile kullanılabilen CGM'leri (Sürekli Glikoz İzleme) ve insülin pompalarını belirtir. Bu alt bölümün anlaşılması önemlidir, böylece AAPS sisteminiz ilk seferde doğru şekilde kurulabilir ve oluşturulabilir ve gerçek anlamda iyi çalışır.

[Yardım için nereye gitmeli?](Where-To-Go-For-Help/Connect-with-other-users.html) alt başlığı, AAPS deneyim seviyenize bağlı olarak yardım bulabileceğiniz gidilecek en iyi yerlere yönlendirilmenize yardımcı olacaktır. Bu, özellikle başlangıçta kendinizi dışlanmış hissetmemeniz ve başkalarıyla olabildiğince çabuk iletişim kurabilmeniz, soruları netleştirebilmeniz ve olağan tuzakları olabildiğince çabuk çözebilmeniz için çok önemlidir. Deneyimler, birçok insanın halihazırda AAPS'i başarıyla kullandığını gösteriyor, ancak herkesin bir noktada kendi başlarına çözemeyecekleri bir sorunu var. Ancak güzel olan şu ki, çok sayıda kullanıcı nedeniyle, sorulara yanıt verme süreleri genellikle çok hızlıdır, genellikle yalnızca birkaç saattir. Aptalca soru diye bir şey olmadığı için yardım istemekten çekinmeyin! Herhangi bir deneyim düzeyindeki tüm kullanıcıları, güvenli bir şekilde çalışmaya başlamalarına yardımcı olmak için gerekli olduğunu düşündükleri kadar çok soru sormaya teşvik ediyoruz. Sadece deneyin lütfen.

[Sözlük](Getting-Started/Glossary.md) alt başlığında, AAPS'de kullanılan kısaltmaların (veya kısa adların) bir listesini derledik. Örneğin, İDF veya GH terimlerinin daha yaygın (daha uzun) terimlerinin ne anlama geldiğini öğrenmek için bu sayfaya gidilir.

Çocukları için AAPS oluşturmak isteyen ebeveynlere [Çocuklar için AndroidAPS](Children/Children.md) alt başlığını öneriyoruz. Çünkü burada çocuğunuzun AAPS uygulamasının yetişkinlere kıyasla daha kapsamlı bir güvenlik profilinin yanısıra, uzaktan kontrol etmek için gerekli ekstra adımları öğrenmek için özel olarak hazırlanmış daha gelişmiş bilgiler bulacaksınız. Çocuklarınızı destekleyebilmeli ve başarılı olmanıza yardımcı olmak için AAPS'in sunduğu tüm gelişmiş kavramları anlayabilmelisiniz.

Artık AAPS'in kullandığı kavramları sağlam bir şekilde anladığınıza, APS'nizi oluşturmada gerekli araçlar için nereye gideceğinizi bildiğinize ve acil bir durumda nereden yardım alacağınıza aşina olduğunuza göre, artık uygulamayı oluşturmaya başlamanın tam zamanı! [AAPS nasıl kurulur?](Installing-AAPS/Building-APK.md) alt başlığı size bunu ayrıntılı olarak gösterir. Gereksinimler geçmişte kurmuş olabileceğiniz herhangi bir şeyden çok farklı olduğundan, uygulamayı ilk birkaç kez oluştururken talimatları adım adım uygulamanızı öneririz, böylece tüm yönergeler tam olarak izlendiğinde uygulama oluşturma sürecinin nasıl davranması gerektiğine dair daha güçlü bir fikir sahibi olursunuz. Lütfen zaman ayırmayı unutmayın. Daha sonra, uygulamayı yeni bir sürüm için yeniden oluşturduğunuzda bu süreç daha hızlı olacaktır. Bu şekilde, diğer yüklemelerinizde çok fazla adımın dışına çıkmadan bir şeylerin planlandığı gibi gitmediğini fark etme şansınız daha yüksek olacaktır. Anahtar deposu dosyanızı (uygulamanızı imzalamak için kullanılan .jks dosyası) güvenli bir yere kaydetmeniz önemlidir, böylece her yeni AAPS güncellenmiş sürüm oluşturmanız istendiğinde her zaman aynı anahtar deposu dosyasını ve parolayı kullanabilirsiniz. Bu dosya, uygulamanın her yeni sürümünün, uygulamanın önceki sürümlerinde kendisine sağladığınız tüm bilgileri "hatırlamasını" ve böylece güncellemelerin olabildiğince sorunsuz gitmesini sağlayan anahtardır. Ortalama olarak, yılda bir yeni sürüm ve 2-3 gerekli güncelleme olacağını varsayabilirsiniz. Bu sayı deneyime dayanmaktadır ve değişebilir. Ama en azından size ne olabileceği konusunda genel bir bilgi vermek istiyoruz. Güncellenmiş AAPS uygulama sürümlerini oluşturma konusunda daha deneyimli olduğunuzda, güncellenmiş bir uygulama oluşturmak için gereken tüm adımlar ortalama olarak yalnızca 15-30 dakika sürer. Ancak, bu adımlar her zaman yeni kullanıcılar tarafından sezgisel olarak bilinmediğinden, başlangıçta oldukça dik bir öğrenme eğrisi olabilir! Bu nedenle, güncelleme sürecini tamamlamadan önce topluluktan biraz yardım alarak yarım gün veya tam bir gün sürdüğünü fark ederseniz sinirlenmeyin. Çok sinirli veya sabırsız olduğunuzu fark ederseniz, kısa bir ara verin ve çoğu zaman bir veya iki blok etrafında bir gezintiden sonra soruna yeniden denemenin daha iyi olduğunu göreceksiniz. Ayrıca, SSS bölümünde yer alan ilk birkaç güncellemede ortaya çıkması muhtemel tipik hataların çoğuna ilişkin bir soru ve yanıt listesi hazırladık; yanı sıra "Sorun Giderme" alt başlığında "AAPS nasıl kurulur?" kısmı da ek bilgi sağlar.

[Bileşen Kurulumu](Configuration/BG-Source.md) alt başlığı, çeşitli farklı bileşen parçalarının her birinin AAPS'e nasıl düzgün bir şekilde entegre edileceğini ve aynı zamanda mümkün olduğunca birlikte sorunsuz çalışacak şekilde nasıl kurulacağını açıklar. All components are listed under the separate sections: CGM/FGM, xDrip Settings, Pumps, Phones, Nightscout setup, and Smartwatches. The sensor (BG) values and control of the insulin pump are particularly important information to understand. [Yapılandırma](Configuration/BG-Source.md) alt başlığı, AAPS'de kullanılacak en iyi pompa yapılandırmalarını açıklar.

Bunu özellikle önemli bir alt bölüm olan [AAPS Kullanımı](Getting-Started/Screenshots.md) takip eder. Uygulama içinde mevcut olan daha gelişmiş seçenekleri kullanmaya başlamak için yeterli deneyime sahip olana kadar, güvenli ve dikkatli bir şekilde kalibre edilmiş adım adım aşamalı bir süreç aracılığıyla AAPS'in sunduğu özelliklerin tam kullanımına yavaş yavaş tanıştırılırsınız. Bu aşamaların her biri genellikle bir sonraki görev olarak adlandırılır. Siz/çocuğunuz, bir sonraki aşamadan mezun olmadan önce tüm farklı düzeylerde ve menü yapılandırmalarında gezinebilirsiniz. Bu Görevler, AAPS'in özelliklerini kademeli olarak ortaya çıkaracak ve Açık Döngüden Kapalı Döngüye geçiş yapacak şekilde özel olarak tasarlanmıştır.

Bu başlıktan sonra AAPS kullanılırken yılda iki kez gerçekleşecek olan yaz saati uygulaması değişiklikleri sırasında zaman dilimlerinin kesişmesiyle nasıl başa çıkılacağı hakkında bilgileri içeren [Genel İpuçları](Usage/Timezone-traveling.md) içeren bir alt başlık vardır.

AAPS gibi açık kaynak kodlu yapay pankreas teknolojisine ilgi duyduğunu ifade eden veya bu tür bilgileri klinisyenleriyle paylaşmak isteyen hastalar için [klinisyenler](Resources/clinician-guide-to-AAPS.md) alt başlığı mevcuttur.

Son olarak, [Nasıl yardımcı olurum?](make-a-PR.md) alt başlığında, dokümantasyonda küçük veya büyük değişiklikleri önerebilmeniz ve dokümantasyon üzerinde bizimle birlikte çalışabilmeniz için size bilgi veriyoruz. Ayrıca [dokümantasyon çevirisi](translations.md) için desteğe ihtiyacımız var. Bu arada, diğer kullanıcılardan gelen soruları yanıtlarken ilgili dokümantasyona bağlantılar (veya bağlantıların nasıl gönderileceğini bilmiyorsanız dokümantasyon içinde bağlantıların nerede bulunduğuna dair ekran görüntüleri) sağlamanız da herkes için çok yararlı olacaktır. Bu şekilde, diğer kullanıcılar da gelecekte aynı tür sorulara yanıt bulmaya çalışırsa, doğru bilgiler kolayca yeniden bulunabilir.

```{toctree}
:caption: Dili değiştir

Dili değiştir <./changelanguage.md>

```

```{toctree}
:caption: Home

Introduction <./introduction.md>

```

```{toctree}
:caption: Getting started

Preparing <preparing.md>

Docs updates & changes <./Getting-Started/WikiUpdate.md>

```

```{toctree}
:caption: Setting up AAPS

Setting up the reporting server <./Installing-AndroidAPS/setting-up-the-reporting-server.md>
Building AAPS <./Installing-AndroidAPS/building-AAPS.md>
Transferring and Installing AAPS <./Installing-AndroidAPS/Transferring-and-installing-AAPS.md>
Setup Wizard<./Installing-AndroidAPS/setup-wizard.md>
Change AAPS configuration<./Installing-AndroidAPS/change-configuration.md>
Completing the objectives <./Usage/completing-the-objectives.md>
```

```{toctree}
:caption: Remote control and following

Remote control <remote-control.md>
Following-only <following-only.md>

```

```{toctree}
:caption: Advanced Setting up APPS

Release notes <./Installing-AndroidAPS/Releasenotes.md>

Update to a new version or branch <./Installing-AndroidAPS/Update-to-new-version.md>

Dev branch <./Installing-AndroidAPS/Dev_branch.md>

Dedicated Google account for AAPS (optional)<./Installing-AndroidAPS/Dedicated-Google-account-for-AAPS.md>

```

```{toctree}
:caption: Tam Kapalı Döngü

Tam Kapalı Döngü <./Usage/FullClosedLoop.md>

```

(index-component-setup)=

```{toctree}
:caption: Component Setup

CGM/FGM <./Configuration/BG-Source.md>

xDrip Settings <./Configuration/xdrip.md>

Pump choices <./Getting-Started/Pump-Choices.md>

Phones <./Hardware/Phoneconfig.md>

Smartwatch  <./Hardware/Smartwatch.md>

```

```{toctree}
:caption: AAPS Usage

AAPS screens <./Getting-Started/Screenshots.md>

OpenAPS features <./Usage/Open-APS-features.md>

Dynamic ISF <./Usage/DynamicISF.md>

COB calculation <./Usage/COB-calculation.md>

Sensitivity detection <./Configuration/Sensitivity-detection-and-COB.md>

Profile switch <./Usage/Profiles.md>

Temp-targets <./Usage/temptarget.md>

Extended carbs <./Usage/Extended-Carbs.md>

Automation <./Usage/Automation.md>

Autotune (dev only) <./Usage/autotune.md>

Careportal (discontinued) <./Usage/CPbefore26.md>

Open Humans Uploader <./Configuration/OpenHumans.md>

Automation with 3rd party apps <./Usage/automationwithapp.md>

Android auto <./Usage/Android-auto.md>

Custom Watchface reference document <./Usage/Custom_Watchface_Reference.md>

Exchange Site Custom Watchfaces <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: Genel İpuçları

Pompalarla saat dilimlerini aşmak <./Usage/Timezone-traveling.md>

Günlük dosyalarına erişim <./Usage/Accessing-logfiles.md>

Temel kullanım için Accu-Chek Combo ipuçları <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md>

Ayarları Dışa/İçe Aktarma <./Usage/ExportImportSettings.md>

xDrip mühendislik modu <./Usage/Enabling-Engineering-Mode-in-xDrip.md>

```

```{toctree}
:caption: Sorun Giderme

Sorun Giderme <./Usage/troubleshooting.md>

Nightscout client <./Usage/Troubleshooting-NSClient.md>

```

```{toctree}
:caption: SSS

SSS <./Getting-Started/FAQ.md>
```

```{toctree}
:caption: Sözlük

Sözlük <./Getting-Started/Glossary.md>
```

```{toctree}
:caption: Yardım için nereye gitmeli?

Başlamadan önce okumanız gereken yararlı kaynaklar <./Where-To-Go-For-Help/Background-reading.md>

Yardım için nereye gitmeli <./Where-To-Go-For-Help/Connect-with-other-users.md>

Doküman güncellemeleri & değişiklikler <./Getting-Started/WikiUpdate.md>

```

```{toctree}
:caption: Klinisyenler için

Klinisyenler için <./Resources/clinician-guide-to-AndroidAPS.md>
```

```{toctree}
:caption: How to help

How to help <./Getting-Started/How-can-I-help.md>

How to translate the app and docs <./translations.md>

How to edit the docs <./make-a-PR.md>

State of translations <./Administration/stateTranslations.md>

```

```{toctree}
:caption: Legacy

Hints and Checks after update to AAPS 3.0<./Installing-AndroidAPS/update3_0.md>

Checks after update to AAPS 2.7 <./Installing-AndroidAPS/update2_7.md>

```

```{toctree}
:caption: Sandbox

Sandbox <./Sandbox/sandbox1.md>
Crowdin Test <./Sandbox/crowdintest.md>
Image Scaling <./Sandbox/imagescaling.md>

```

```{note}
**Sorumluluk Reddi ve Uyarı**

- Burada açıklanan tüm bilgiler, düşünce ve kodlar yalnızca bilgilendirme ve eğitim amaçlıdır. Nightscout şu anda HIPAA gizlilik uyumluluğu için herhangi bir girişimde bulunmamaktadır. Nightscout ve AAPS'i kendi sorumluluğunuzda kullanın. Tıbbi kararlar almak için bilgileri veya kodu kullanmayın.
- github.com'dan alınan kodun kullanımı herhangi bir garanti veya resmi destek içermez. Ayrıntılar için lütfen bu deponun LİSANSINI gözden geçirin.
- Tüm ürün ve şirket adları, ticari markalar, hizmet markaları, tescilli ticari markalar ve tescilli hizmet markaları ilgili sahiplerinin mülkiyetindedir. Kullanımları bilgi amaçlıdır ve onlar tarafından herhangi bir bağlantı veya onay anlamına gelmez.

Lütfen unutmayın - bu projenin aşağıdaki markalar ile hiçbir ilişkisi yoktur ve bunlar tarafından desteklenmemektedir. [SOOIL](<https://www.sooil.com/eng/>), [Dexcom](<https://www.dexcom.com/>), [Accu-Chek, Roche Diabetes Care](<https://www.accu-chek.com/>) veya [Medtronic](<https://www.medtronic.com/>)

```
