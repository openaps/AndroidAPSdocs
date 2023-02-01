AndroidAPS dokümantasyonuna hoş geldiniz
***************************************

.. image:: images/modules-female.png
  :alt: Components

AndroidAPS, android akıllı telefonlarında yapay pankreas sistemi (APS) görevi gören, insüline bağımlı diyabetle yaşayan kişiler için açık kaynak kodlu bir uygulamadır. Ana kompanentler ile amacı, farklı openAPS yazılım algoritmaları kullanarak canlı bir pankreasın yaptığı gibi otomatik insülin dozlama (AID) yaparak kan şekeri seviyelerini sağlıklı sınırlar içinde tutmaktır. Ek olarak, yazılımın desteklediği ve FDA/CE onaylı bir insülin pompasına ve sürekli şeker ölçüm cihazına ihtiyacınız olacaktır. 

Uygulama kendi kendine öğrenen yapay zeka KULLANMAZ. Bunun yerine, AndroidAPS'in hesaplamaları, kullanıcının tedavi profiline manuel olarak koyduğu bireysel dozaj algoritmasına ve karbonhidrat alımına dayanır, ancak bunlar güvenlik nedenleriyle sistem tarafından doğrulanır. 

Uygulama Google Play'de bulunmaz - yasal nedenlerle onu kaynak koddan kendiniz oluşturmanız gerekir.

Dokümantasyon nasıl okunur?
==============================

Dokümantasyonun bu alt başlığını özellikle Kendin-Yap-APS (Yapay-Pankreas-Sistemleri) kavramına yeni başlayanlar için en önemli olduğunu düşündüğümüz bilgilerle nasıl tanışacaklarını en iyi şekilde göstermek için, özellikle AAPS yolculuğunuza ilk başladığınızda belirlenen "sınırların" arkasındaki nedenleri anlamak açısından derledik. Bu güvenlik sınırları, yeni kullanıcıların AndroidAPS'yi ilk kez kurmayı, oluşturmayı ve ardından başarılı bir şekilde döngü yapmayı öğrenirken yanlışlıkla yapmaları muhtemel olan hataların gözlemlenmesiyle uzun yıllar boyunca geliştirilmiştir. Kullanıcılar sistemi kullanmaya başlamak için o kadar heyecanlılar ki, çoğu zaman oturup bu dokümantasyondaki bilgileri tam olarak anlamak için gereken zamanı ayırmayı unutuyorlar. Hepimiz bu aşamalardan geçtik!

"Her şeyi oku" yaklaşımı değerlidir ve kesinlikle doğrudur. Bununla birlikte, yeni gelenlerin, bir kerede anlamaları beklenen yeni bilgi hacmi ve çeşitliliği karşısında hızla bunalmaları olasıdır! Dolayısıyla bu sonraki birkaç alt başlık, kendi seçtiğiniz kurulumu mümkün olduğunca az aksaklıkla başarılı bir şekilde yürütmek için gerekli olan bilginin en önemli temellerini ortaya koymayı amaçlamaktadır. Yeni kullanıcılar, sistemin henüz aşina olmadıkları yönleriyle karşılaştıklarında bu kılavuza başvurabilirler; ve gerektiğinde daha derinlemesine bilgi bulmak için dokümantasyonda nereye gideceklerini kendilerine hatırlatılacak. Bazen belgeleri okurken bazı gerekli araçların şu anda kullanım için uygun olmadığını keşfetmek hayal kırıklığı yaratabileceğinden, AndroidAPS'nin yeteneklerini önceden ortaya koymak da önemlidir. (bazı ülkelerde hangi tip insülin pompalarının veya CGM'lerin mevcut olduğuna ilişkin kısıtlamalar nedeniyle) veya yalnızca varsayılandan daha az/farklı işlevsellik sunabilir. Son olarak, bu dokümantasyondaki deneyimle ilgili birçok yönün yalnızca AAPS'i gerçek zamanlı olarak kullanmaya başladığınızda uygun hale geldiğini kabul etmek önemlidir. Sadece kuralları okuyarak bir sporu mükemmel bir şekilde oynamayı öğrenmek neredeyse imkansız olduğu gibi, önce AAPS'i güvenli bir şekilde çalıştırma kurallarının temellerini öğrenmenin ve ardından AndroidAPS ile döngü adımlarında gezinirken bu kuralların en iyi nasıl uygulanacağını öğrenmeye zaman ayırmanın bir kombinasyonunu gerektirir.

`Başlarken <Getting-Started/Safety-first.html>`_ alt başlığı, yapay bir pankreas sisteminin ne yapmak üzere tasarlandığına ilişkin genel konsepti anlamak için mutlaka okunmalıdır; ve özellikle AndroidAPS kullanıcıları için uygundur.

`Neye ihtiyacım var? <Module/module.html>`_ alt başlığı, AndroidAPS ile kullanılabilen CGM'leri (Sürekli Glikoz İzlenimi) ve insülin pompalarını belirtir. Bu alt bölümün anlaşılması önemlidir, böylece AndroidAPS sisteminiz ilk seferde doğru şekilde kurulabilir ve oluşturulabilir ve gerçek anlamda iyi çalışır.

`Yardım için nereye gitmeli? <Where-To-Go-For-Help/Connect-with-other-users.html>`_ alt başlığı, AAPS deneyim seviyelerinize bağlı olarak, yardım bulabileceğiniz en iyi yerlere sizi yönlendirmeye yardımcı olacaktır. Bu, özellikle başlangıçta kendinizi dışlanmış hissetmemeniz ve başkalarıyla olabildiğince çabuk iletişim kurabilmeniz, soruları netleştirebilmeniz ve olağan tuzakları olabildiğince çabuk çözebilmeniz için çok önemlidir. Deneyimler, birçok insanın halihazırda AndroidAPS'i başarıyla kullandığını gösteriyor, ancak herkesin bir noktada kendi başlarına çözemeyecekleri bir sorunu var. Ancak güzel olan şu ki, çok sayıda kullanıcı nedeniyle, sorulara yanıt verme süreleri genellikle çok hızlıdır, genellikle yalnızca birkaç saattir. Aptalca soru diye bir şey olmadığı için yardım istemekten çekinmeyin! Herhangi bir deneyim düzeyindeki tüm kullanıcıları, güvenli bir şekilde çalışmaya başlamalarına yardımcı olmak için gerekli olduğunu düşündükleri kadar çok soru sormaya teşvik ediyoruz. Sadece deneyin lütfen.

`Sözlük <Getting-Started/Glossary.html>`_ alt başlığında, AAPS'de kullanılan kısaltmaların (veya kısa adların) bir listesini derledik. Örneğin, İDF veya GH terimlerinin daha yaygın (daha uzun) terimlerinin ne anlama geldiğini öğrenmek için bu sayfaya gidilir.

Çocukları için AndroidAPS oluşturmak isteyen ebeveynler için, `Çocuklar için AndroidAPS <Children/Children.html>`_ alt başlığını öneriyoruz, çünkü burada çocuğunuzun AndroidAPS uygulamasının yetişkinlere kıyasla daha kapsamlı bir güvenlik profilinin yanısıra uzaktan kontrol etmek için gerekli ekstra adımları öğrenmek için özel olarak hazırlanmış daha gelişmiş bilgiler bulacaksınız. Çocuklarınızı destekleyebilmeli ve başarılı olmanıza yardımcı olmak için AndroidAPS'in sunduğu tüm gelişmiş kavramları anlayabilmelisiniz.

Artık AndroidAPS'in kullandığı kavramları sağlam bir şekilde anladığınıza, APS'nizi oluşturmada gerekli araçlar için nereye gideceğinizi bildiğinize ve acil bir durumda nereden yardım alacağınıza aşina olduğunuza göre, artık uygulamayı oluşturmaya başlamanın tam zamanı! `AndroidAPS nasıl kurulur? <Installing-AndroidAPS/Building-APK.html>`_ alt başlığı size bunu ayrıntılı olarak gösterir. Gereksinimler geçmişte kurmuş olabileceğiniz herhangi bir şeyden çok farklı olduğundan, uygulamayı ilk birkaç kez oluştururken talimatları adım adım uygulamanızı öneririz, böylece tüm yönergeler tam olarak izlendiğinde uygulama oluşturma sürecinin nasıl davranması gerektiğine dair daha güçlü bir fikir sahibi olursunuz. Lütfen zaman ayırmayı unutmayın. Daha sonra, uygulamayı yeni bir sürüm için yeniden oluşturduğunuzda bu süreç daha hızlı olacaktır. Bu şekilde, diğer yüklemelerinizde çok fazla adımın dışına çıkmadan bir şeylerin planlandığı gibi gitmediğini fark etme şansınız daha yüksek olacaktır. Anahtar deposu dosyanızı (uygulamanızı imzalamak için kullanılan .jks dosyası) güvenli bir yere kaydetmeniz önemlidir, böylece her yeni güncellenmiş sürüm oluşturmanız istendiğinde her zaman aynı anahtar deposu dosyasını ve parolayı kullanabilirsiniz. Bu dosya, uygulamanın her yeni sürümünün, uygulamanın önceki sürümlerinde kendisine sağladığınız tüm bilgileri "hatırlamasını" ve böylece güncellemelerin olabildiğince sorunsuz gitmesini sağlayan anahtardır. Ortalama olarak, yılda bir yeni sürüm ve 2-3 gerekli güncelleme olacağını varsayabilirsiniz. Bu sayı deneyime dayanmaktadır ve değişebilir. Ama en azından size ne olabileceği konusunda genel bir bilgi vermek istiyoruz. Güncellenmiş AndroidAPS uygulama sürümlerini oluşturma konusunda daha deneyimli olduğunuzda, güncellenmiş bir uygulama oluşturmak için gereken tüm adımlar ortalama olarak yalnızca 15-30 dakika sürer. Ancak, bu adımlar her zaman yeni kullanıcılar tarafından sezgisel olarak bilinmediğinden, başlangıçta oldukça dik bir öğrenme eğrisi olabilir! Bu nedenle, güncelleme sürecini tamamlamadan önce topluluktan biraz yardım alarak yarım gün veya tam bir gün sürdüğünü fark ederseniz sinirlenmeyin. Çok sinirli veya sabırsız olduğunuzu fark ederseniz, kısa bir ara verin ve çoğu zaman bir veya iki blok etrafında bir gezintiden sonra soruna yeniden denemenin daha iyi olduğunu göreceksiniz. Ayrıca, SSS bölümünde yer alan ilk birkaç güncellemede ortaya çıkması muhtemel tipik hataların çoğuna ilişkin bir soru ve yanıt listesi hazırladık; yanı sıra "Sorun Giderme" alt başlığında "AndroidAPS nasıl kurulur?" kısmı da ek bilgi sağlar.

`Bileşen Kurulumu <Configuration/BG-Source.html>`_ alt başlığı, çeşitli farklı ayrı bileşen parçalarının her birinin AndroidAPS'e nasıl düzgün bir şekilde entegre edileceğini ve bunların birlikte olabildiğince sorunsuz çalışacak şekilde nasıl ayarlanacağını açıklar. Tüm bileşenler ayrı bölümler altında listelenmiştir: CGM/FGM, xDrip Ayarları, Pompalar, Telefonlar, Nightscout kurulumu ve Akıllı saatler. İnsülin pompasının sensör (KŞ) değerleri ve kontrolü, özellikle anlaşılması gereken önemli bilgilerdir. `Konfigürasyon <Configuration/BG-Source.html>`_ alt başlığı, AndroidAPS'de kullanılacak en iyi pompa konfigürasyonlarını açıklar.

Bunu, özellikle önemli bir alt başlık olan `AndroidAPS Kullanımı <Getting-Started/Screenshots.html>`_ izler ve sizin/çocuğunuzun tüm farklı düzeylerde ve menülerde tamamen aşina ve rahat bir şekilde gezinmesini sağlamak için tasarlanmış, güvenli ve dikkatli bir şekilde kalibre edilmiş adım adım aşamalı bir süreçle AndroidAPS'in sunduğu tüm özelliklerin tam kullanımıyla yavaş yavaş tanışırsınız. Uygulama içindeki daha gelişmiş seçenekleri kullanmaya başlamak için yeterli deneyime sahip olana kadar, her biri genellikle bir sonraki Görev olarak adlandırılan bir sonraki aşamada mezun olmadan önce tüm farklı düzeylerde ve menü yapılandırmalarında rahatça gezinirsiniz. Bu Görevler, yavaş yavaş AndroidAPS'in daha fazla yeteneğini ortaya çıkaracak ve Açık Döngüden Kapalı Döngüye geçiş yapacak şekilde özel olarak tasarlanmıştır.

Bundan sonra `Genel İpuçları <Usage/Timezone-traveling.html>`_ alt başlığı bulunur. AndroidAPS kullanırken yılda iki kez gerçekleşecek olan yaz saati-güz saati değişiklikleri sırasında ne yapılması gerektiğinin yanı sıra, saat dilimlerinin geçişiyle nasıl başa çıkılacağı hakkında bilgilendirir.

AndroidAPS gibi açık kaynaklı yapay pankreas teknolojisine ilgi duyan `klinisyenler <Resources/clinician-guide-to-AndroidAPS.html>`_ veya bu tür bilgileri klinisyenleriyle paylaşmak isteyen hastalar için bir alt başlık vardır.

Son olarak, `Nasıl yardım edilir? <make-a-PR.html>`_ alt başlığında dokümantasyonda küçük veya büyük değişiklikler önerebilmeniz ve dokümantasyon üzerinde bizimle birlikte çalışabilmeniz için size bilgi vermek istiyoruz. `Dokümantasyonların çevirisi <translations.html>`_ için de desteğe ihtiyacımız var. Ayrıca, diğer kullanıcılardan gelen soruları yanıtlarken ilgili dokümana (veya bağlantıların nasıl gönderileceğine aşina değilseniz dokümantasyon içinde bağlantıların bulunduğu yerin ekran görüntülerine) bağlantılar sağlamanız herkes için çok yararlıdır. Bu şekilde, diğer kullanıcılar da gelecekte aynı tür sorulara yanıt bulmaya çalışırsa, doğru bilgiler kolayca yeniden bulunabilir.


.. not::
   Lütfen utanmayın, belgeleri oluştururken desteğe ihtiyacımız var. Bir çekme isteği oluşturmak nispeten basittir. Hiçbir şeyi bozamazsınz. Serbest bırakma prosedürleri var. Nasıl yardımcı olabileceğinizi görmek için başlangıçta konuşmak istiyorsanız, Discord veya Facebook'ta bize ulaşın. Günümüzde ve çağımızda, hızlı bir şekilde iletişim kurarak en iyi nasıl dahil olabileceğinizi ve size ilk adımları nasıl gösterebileceğimizi tartışabiliriz.

Daha fazla ayrıntı için lütfen burayı okuyun.

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Dili değiştir

   Dili değiştir <./changelanguage.rst>

.. _getting-started:

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Başlarken

   Önce Güvenlik <./Getting-Started/Safety-first.rst>
   Kapalı döngü sistemi nedir? <./Getting-Started/ClosedLoop.rst>
   AndroidAPS ile kapalı döngü sistemi nedir? <./Getting-Started/WhatisAndroidAPS.rst>  
   Pompa seçimi <./Getting-Started/Pump-Choices.md>
   Dokm. güncelleme & değişiklikler <./Getting-Started/WikiUpdate.rst>

.. _what-do-i-need:

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Neye ihtiyacım var? 

   Modül <./Module/module.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: AndroidAPS nasıl yüklerim

   APK Oluşturma <./Installing-AndroidAPS/Building-APK.md>
   Yeni bir sürüme veya dala güncelleyin <./Installing-AndroidAPS/Update-to-new-version.md>
   AAPS 3.0 güncellemesinden sonra İpuçları ve Kontroller<./Installing-AndroidAPS/update3_0.md>
   AAPS 2.7 güncellemesinden sonra kontroller <./Installing-AndroidAPS/update2_7.rst>
   Git'i yükleyin <./Installing-AndroidAPS/git-install.rst>
   Android Studio Sorunlarını Giderme <./Installing-AndroidAPS/troubleshooting_androidstudio.md>
   Sürüm notları <./Installing-AndroidAPS/Releasenotes.rst>
   Geliştirici dalı <./Installing-AndroidAPS/Dev_branch.md>

.. _bileşen-kurulumu:

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Bileşen Kurulumu

   CGM/FGM <./Configuration/BG-Source.rst>
   xDrip Ayarları <./Configuration/xdrip.md>
   Pompalar <./Hardware/pumps.rst>
   Telefonlar <./Hardware/Phoneconfig.rst>
   Nightscout kurulumu <./Installing-AndroidAPS/Nightscout.md>
   Akıllı saat  <./Hardware/Smartwatch.rst>

.. _konfigürasyon:

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Konfigürasyon

   Konfigürasyon Ayarları <./Configuration/Config-Builder.md>
   Tercihler <./Configuration/Preferences.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: AndroidAPS Kullanımı

   AndroidAPS ekranları <./Getting-Started/Screenshots.md>
   Hedefler <./Usage/Objectives.rst>
   OpenAPS özellikleri <./Usage/Open-APS-features.md>   
   AKRB hesaplaması <./Usage/COB-calculation.rst>
   Duyarlılık algılama <./Configuration/Sensitivity-detection-and-COB.md>
   Profil değiştirme <./Usage/Profiles.md>
   Geçici hedefler <./Usage/temptarget.md>   
   Yayma karbonhidratlar <./Usage/Extended-Carbs.rst>
   Otomasyon <./Usage/Automation.rst>
   Bakım portalı (devam etmiyor) <./Usage/CPbefore26.rst>
   Open Humans Yükleyici <./Configuration/OpenHumans.rst>
   3. taraf uygulamalarla otomasyon <./Usage/automationwithapp.md>
   Android auto <./Usage/Android-auto.md>  

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Genel İpuçları 

   Pompalarla saat dilimleri arasında seyahat <./Usage/Timezone-traveling.md>
   Günlük dosyalarına erişim <./Usage/Accessing-log files.md>
   Temel kullanım için Accu-Chek Combo ipuçları <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md> 
   Ayarları Dışa Aktarma/İçe Aktarma <./Usage/ExportImportSettings.rst>
   xDrip mühendislik modu <./Usage/Enabling-Engineering-Mode-in-xDrip.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Çocuklar için AndroidAPS

   Uzaktan izleme <./Children/Children.rst>
   SMS komutları <./Children/SMS-Commands.rst>
   Profil yardımcısı <./Configuration/profilehelper.rst>
   
.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Sorun Giderme

   Sorun Giderme <./Usage/troubleshooting.rst>
   Nightscout client <./Usage/Troubleshooting-NSClient.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: SSS

   SSS <./Getting-Started/FAQ.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Sözlük

   Sözlük <./Getting-Started/Glossary.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Yardım için nereye gitmeli 

   Başlamadan önce okumanız gereken faydalı kaynaklar <./Where-To-Go-For-Help/Background-reading.md>
   Yardım için nereye gitmeli <./Where-To-Go-For-Help/Connect-with-other-users.md>
   Dokm. güncelleme & değişiklikler <./Getting-Started/WikiUpdate.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Klinisyenler için

   Klinisyenler için <./Resources/clinician-guide-to-AndroidAPS>


.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Nasıl yardım ederim

   Nasıl yardım ederim <./Getting-Started/How-can-I-help.md>
   Uygulama ve dokümanlar nasıl çevrilir <./translations.md>
   Dokümanlar nasıl düzenlenir </.make-a-PR>


.. not:: 
	**Sorumluluk Reddi ve Uyarı**

	* Burada açıklanan tüm bilgi, düşünce ve kodlar yalnızca bilgilendirme ve eğitim amaçlıdır. Nightscout şu anda HIPAA gizlilik uyumluluğu için herhangi bir girişimde bulunmamaktadır. Nightscout ve AndroidAPS'i kendi sorumluluğunuzda kullanın. Tıbbi kararlar almak için bilgileri veya kodu kullanmayın.

	* Github.com'dan gelen kodun kullanımı herhangi bir garanti veya resmi destek içermez. Ayrıntılar için lütfen bu deponun LİSANSINI gözden geçirin.

	* Tüm ürün ve şirket adları, ticari markalar, hizmet markaları, tescilli ticari markalar ve tescilli hizmet markaları ilgili sahiplerinin mülkiyetindedir. Kullanımları bilgi amaçlıdır ve onlar tarafından herhangi bir bağlantı veya onay anlamına gelmez.

	Lütfen unutmayın - bu projenin aşağıdakilerle hiçbir ilişkisi yoktur ve bunlar tarafından desteklenmemektedir: `SOOIL <https://www.sooil.com/eng/>`_, `Dexcom <https://www.dexcom.com/>`_, `Accu-Chek, Roche Diyabet Bakımı <https://www.accu-chek.com/>`_ veya `Medtronic <https://www.medtronic.com/>`_
