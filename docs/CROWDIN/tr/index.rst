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
   Örnek Kurulum <./Getting-Started/Sample-Setup.md>

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

   Konfigürasyon Oluştur <./Configuration/Config-Builder.md>
   Tercihler <./Configuration/Preferences.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: AndroidAPS Kullanımı

   AndroidAPS screens <./Getting-Started/Screenshots.md>
   Objectives <./Usage/Objectives.rst>
   OpenAPS features <./Usage/Open-APS-features.md>   
   COB calculation <./Usage/COB-calculation.rst>
   Sensitivity detection <./Configuration/Sensitivity-detection-and-COB.md>
   Profile switch <./Usage/Profiles.md>
   Temp-targets <./Usage/temptarget.md>   
   Extended carbs <./Usage/Extended-Carbs.rst>
   Automation <./Usage/Automation.rst>
   Careportal (discontinued) <./Usage/CPbefore26.rst>
   Open Humans Uploader <./Configuration/OpenHumans.rst>
   Automation with 3rd party apps <./Usage/automationwithapp.md>
   Android auto <./Usage/Android-auto.md>  

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: General Hints 

   Crossing timezones with pumps <./Usage/Timezone-traveling.md>
   Accessing logfiles <./Usage/Accessing-logfiles.md>
   Accu-Chek Combo tips for basic usage <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md> 
   Export/Import Settings <./Usage/ExportImportSettings.rst>
   xDrip engineering mode <./Usage/Enabling-Engineering-Mode-in-xDrip.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: AndroidAPS for children

   Remote monitoring <./Children/Children.rst>
   SMS commands <./Children/SMS-Commands.rst>
   Profile helper <./Configuration/profilehelper.rst>
   
.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Troubleshooting

   Troubleshooting <./Usage/troubleshooting.rst>
   Nightscout client <./Usage/Troubleshooting-NSClient.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: FAQ

   FAQ <./Getting-Started/FAQ.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Glossary

   Glossary <./Getting-Started/Glossary.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Where to go for help 

   Useful resources to read before you start <./Where-To-Go-For-Help/Background-reading.md>
   Where to go for help <./Where-To-Go-For-Help/Connect-with-other-users.md>
   Dokm. güncelleme & değişiklikler <./Getting-Started/WikiUpdate.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: For Clinicians

   For Clinicians <./Resources/clinician-guide-to-AndroidAPS>


.. toctree::
   :maxdepth: 1
   :glob:
   :caption: How to help

   How to help <./Getting-Started/How-can-I-help.md>
   How to translate the app and docs <./translations.md>
   How to edit the docs <./make-a-PR>


.. not:: 
	**Disclaimer And Warning**

	* All information, thought, and code described here is intended for informational and educational purposes only. Nightscout currently makes no attempt at HIPAA privacy compliance. Use Nightscout and AndroidAPS at your own risk, and do not use the information or code to make medical decisions.

	* Use of code from github.com is without warranty or formal support of any kind. Please review this repository's LICENSE for details.

	* All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. Their use is for information purposes and does not imply any affiliation with or endorsement by them.

	Please note - this project has no association with and is not endorsed by: `SOOIL <https://www.sooil.com/eng/>`_, `Dexcom <https://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <https://www.accu-chek.com/>`_ or `Medtronic <https://www.medtronic.com/>`_
