AndroidAPS dokümantasyonuna hoş geldiniz
==================================================

AndroidAPS, android akıllı telefonlarında yapay pankreas sistemi (APS) görevi gören, insüline bağımlı diyabetle yaşayan kişiler için açık kaynak kodlu bir uygulamadır. Ana kompanentler ile amacı, farklı openAPS yazılım algoritmaları kullanarak canlı bir pankreasın yaptığı gibi otomatik insülin dozlama (AID) yaparak kan şekeri seviyelerini sağlıklı sınırlar içinde tutmaktır. Ek olarak, yazılımın desteklediği ve FDA/CE onaylı bir insülin pompasına ve sürekli şeker ölçüm cihazına ihtiyacınız olacaktır. 

Uygulama kendi kendine öğrenen yapay zeka KULLANMAZ. Bunun yerine, AndroidAPS'in hesaplamaları, kullanıcının tedavi profiline manuel olarak koyduğu bireysel dozaj algoritmasına ve karbonhidrat alımına dayanır, ancak bunlar güvenlik nedenleriyle sistem tarafından doğrulanır. 

Uygulama Google Play'de bulunmaz - yasal nedenlerle onu kaynak koddan kendiniz oluşturmanız gerekir.

Ana bileşenler şunlardır:

.. image:: images/modules-female.png
  :alt: Components

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
   AAPS 2.7 güncellemesinden sonra kontroller <./Installing-AndroidAPS/update2_7.rst>
   Git'i yükleyin <./Installing-AndroidAPS/git-install.rst>
   Android Studio Sorunlarını Giderme <./Installing-AndroidAPS/troubleshooting_androidstudio.rst>
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

   AndroidAPS screens <./Getting-Started/Screenshots.md>
   Objectives <./Usage/Objectives.rst>
   OpenAPS features <./Usage/Open-APS-features.md>   
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
