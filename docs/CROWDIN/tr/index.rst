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

Kesinlikle, "her şeyi oku" yaklaşımı değerlidir ve kesinlikle doğrudur. Bununla birlikte, yeni gelenlerin, bir kerede anlamaları beklenen yeni bilgi hacmi ve çeşitliliği karşısında hızla bunalmaları olasıdır! Dolayısıyla bu sonraki birkaç alt bölüm, kendi seçtiğiniz kurulumu mümkün olduğunca az aksaklıkla başarılı bir şekilde yürütmek için gerekli olan bilginin en önemli temellerini ortaya koymayı amaçlamaktadır. Yeni kullanıcılar, sistemin henüz aşina olmadıkları yönleriyle karşılaştıklarında bu kılavuza başvurabilirler; ve gerektiğinde daha derinlemesine bilgi bulmak için dokümantasyonda nereye gideceklerini kendilerine hatırlatılacak. Bazen belgeleri okurken bazı gerekli araçların şu anda kullanım için uygun olmadığını keşfetmek hayal kırıklığı yaratabileceğinden, AndroidAPS'nin yeteneklerini önceden ortaya koymak da önemlidir. (bazı ülkelerde hangi tip insülin pompalarının veya CGM'lerin mevcut olduğuna ilişkin kısıtlamalar nedeniyle) veya yalnızca varsayılandan daha az/farklı işlevsellik sunabilir. Son olarak, bu dokümantasyondaki deneyimle ilgili birçok yönün yalnızca AAPS'i gerçek zamanlı olarak kullanmaya başladığınızda uygun hale geldiğini kabul etmek önemlidir. Sadece kuralları okuyarak bir sporu mükemmel bir şekilde oynamayı öğrenmek neredeyse imkansız olduğu gibi, önce AAPS'i güvenli bir şekilde çalıştırma kurallarının temellerini öğrenmenin ve ardından AndroidAPS ile döngü adımlarında gezinirken bu kuralların en iyi nasıl uygulanacağını öğrenmeye zaman ayırmanın bir kombinasyonunu gerektirir.

`Başlarken <Getting-Started/Safety-first.html>`_ alt başlığı, yapay bir pankreas sisteminin ne yapmak üzere tasarlandığına ilişkin genel konsepti anlamak için mutlaka okunmalıdır; ve özellikle AndroidAPS kullanıcıları için uygundur.

'Neye ihtiyacım var? <Module/module.html>`_ alt başlığı, AndroidAPS ile kullanılabilen CGM'leri (Sürekli Glikoz İzlenimi) ve insülin pompalarını belirtir. Bu alt bölümün anlaşılması önemlidir, böylece AndroidAPS sisteminiz ilk seferde doğru şekilde kurulabilir ve oluşturulabilir ve gerçek anlamda iyi çalışır.

'Yardım için nereye gitmeli? <Where-To-Go-For-Help/Connect-with-other-users.html>`_ alt başlığı, AAPS deneyim seviyelerinize bağlı olarak, yardım bulabileceğiniz en iyi yerlere sizi yönlendirmeye yardımcı olacaktır. Bu, özellikle başlangıçta kendinizi dışlanmış hissetmemeniz ve başkalarıyla olabildiğince çabuk iletişim kurabilmeniz, soruları netleştirebilmeniz ve olağan tuzakları olabildiğince çabuk çözebilmeniz için çok önemlidir. Deneyimler, birçok insanın halihazırda AndroidAPS'i başarıyla kullandığını gösteriyor, ancak herkesin bir noktada kendi başlarına çözemeyecekleri bir sorunu var. Ancak güzel olan şu ki, çok sayıda kullanıcı nedeniyle, sorulara yanıt verme süreleri genellikle çok hızlıdır, genellikle yalnızca birkaç saattir. Aptalca soru diye bir şey olmadığı için yardım istemekten çekinmeyin! Herhangi bir deneyim düzeyindeki tüm kullanıcıları, güvenli bir şekilde çalışmaya başlamalarına yardımcı olmak için gerekli olduğunu düşündükleri kadar çok soru sormaya teşvik ediyoruz. Sadece deneyin lütfen.

`Sözlük <Getting-Started/Glossary.html>`_ alt başlığında, AAPS'de kullanılan kısaltmaların (veya kısa adların) bir listesini derledik. Örneğin, İDF veya GH terimlerinin daha yaygın (daha uzun) terimlerinin ne anlama geldiğini öğrenmek için bu sayfaya gidilir.

Çocukları için AndroidAPS oluşturmak isteyen ebeveynler için, `Çocuklar için AndroidAPS <Children/Children.html>`_ alt başlığını öneriyoruz, çünkü burada çocuğunuzun AndroidAPS uygulamasının yetişkinlere kıyasla daha kapsamlı bir güvenlik profilinin yanısıra uzaktan kontrol etmek için gerekli ekstra adımları öğrenmek için özel olarak hazırlanmış daha gelişmiş bilgiler bulacaksınız. Çocuklarınızı destekleyebilmeli ve başarılı olmanıza yardımcı olmak için AndroidAPS'in sunduğu tüm gelişmiş kavramları anlayabilmelisiniz.

Artık AndroidAPS'in kullandığı kavramları sağlam bir şekilde anladığınıza, APS'nizi oluşturmada gerekli araçlar için nereye gideceğinizi bildiğinize ve acil bir durumda nereden yardım alacağınıza aşina olduğunuza göre, artık uygulamayı oluşturmaya başlamanın tam zamanı! `AndroidAPS nasıl kurulur? <Installing-AndroidAPS/Building-APK.html>`_ alt başlığı size bunu ayrıntılı olarak gösterir. Since the requirements are very different from anything you might have set up in the past, we recommend that you really follow the instructions, step-by-step the first few times you build the app, so that you have a stronger sense of how the app building process is supposed to behave when all directions are followed exactly. Please remember to take your time. Later this will go very quickly when you build the app again for a new version. That way you will have a greater chance of noticing when something doesn't going as planned before too many steps are out of line. It is important to save the your keystore file (.jks file used to sign your app) in a safe place, so that you can always use that exact same keystore file and password each and every time you are asked to create a new updated version of AndroidAPS, as this file is what makes sure that each new version of the app "remembers" all the information that you have provided to it in previous versions of the app and thus ensure that the updates will go as smoothly as possible. On average, you can assume that there will be one new version and 2-3 required updates per year. This number is based on experience and may change in the future. But we do want to at least give you a general guideline on what to expect. When you are more experienced at building updated AndroidAPS app versions all the steps that are required in building an updated app will only take 15-30 minutes, on average. However, in the beginning there can be a rather steep learning curve as these steps are not always considered intuitive by new users! So do not get frustrated if you find that it takes half a day or a whole day with some help from the community before you are finally finished with the update process. If you find that you are getting very frustrated just take a short break, and oftentimes; after a stroll around the block or two...you'll find that you are better able to approach the problem again. We have also compiled a list of questions and answers to most of the typical errors that are likely to occur the first few updates located within the FAQs section; as well as within "How to install AndroidAPS?" that provides additional information in the subsection "Troubleshooting".

The subsection `Component Setup <Configuration/BG-Source.html>`_ explains how to properly integrate each of the various different separate component parts into AndroidAPS, as well as how to set them up to work as seamlessly as possible together. All components are listed under the separate sections: CGM/FGM, xDrip Settings, Pumps, Phones, Nightscout setup, and Smartwatches. The sensor (BG) values and control of the insulin pump are particularly important information to understand. The subsection `Configuration <Configuration/BG-Source.html>`_ describes the best pump configurations to use in AndroidAPS.

This is followed by a particularly important subsection `AndroidAPS Usage <Getting-Started/Screenshots.html>`_, in which you are slowly introduced to the full usage of what AndroidAPS has to offer via a safe and carefully calibrated step-by-step gradual process designed to make sure that you/your child are thoroughly familiar and comfortable navigating all the different levels and menu configurations before graduating on the next phase, each commonly referred to as the next Objective, until you are have enough experience to begin using the more advanced options available within the app. These Objectives are specially designed in such a way that will gradually unlock more possibilities of AndroidAPS and switch from Open Loop to Closed Loop.

After that there is a subsection `General Hints <Usage/Timezone-traveling.html>`_ with e.g. information on how to deal with the crossing of time zones as well as knowing what to do during the Spring Forward - Fall Back daylight saving time changes which will occur twice a year while using AndroidAPS.

There is a subsection for the `clinicians <Resources/clinician-guide-to-AndroidAPS.html>`_ who have expressed interest in open source artificial pancreas technology such as AndroidAPS, or for patients who want to share such information with their clinicians.

Finally, in the subsection `How to help? <make-a-PR.html>`_ we would like to provide you with information so that you are able to suggest small or larger changes to the documentation yourself and work together with us on the documentation. We further need support for `translation of the documentation <translations.html>`_ By the way, it also very helpful for everyone if you could provide links to the corresponding documentation (or screenshots of where the links are located within the Documentation if you are not familiar with how to send a link) when answering questions from other users. That way the correct information can easily be located again should other users also be trying to find answers to the same types of questions in the future.


.. not::
   Please don't be shy, we need support in creating the documentation. A pull request is relatively simple to create. You can't break anything. There are release procedures. If you just want to talk in the beginning to see how you can help, give us a shout on Discord or Facebook. In this day and age, a telco is quickly arranged and we can discuss how you can best get involved and how we can show you the first steps.

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

   APK Oluşturma <./Installation-Android APS/Building-APK.mod>
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
   Aktif karb. hesaplaması <./Usage/COB-calculation.rst>
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
