Witamy w dokumentacji systemu AndroidAPS
==============================================

AndroidAPS jest to aplikacja open source przeznaczona dla osób chorujących na cukrzycę typu 1, która zainstalowana w smartfonach z systemem Android. działa jak system sztucznej trzustki (APS). Głównymi składnikami są różne algorytmy oprogramowania openAPS, których celem jest robienie tego, co robi żywa trzustka: utrzymywanie w odpowiednim zakresie poziomu cukru we krwi dzięki zastosowaniu automatycznego dozowania insuliny (AID). Ponadto co najmniej potrzebujesz obsługiwanej i zatwierdzonej przez FDA/CE pompy insulinowej i systemu ciągłego monitoringu glikemii. Aplikacja NIE korzysta z samouczącej się sztucznej inteligencji. Zamiast tego obliczenia AndroidAPS opierają się na indywidualnym algorytmie dawkowania i spożyciu węglowodanów, które użytkownik ręcznie wprowadza do swojego profilu terapii, ale dodatkowo są one weryfikowane przez system ze względów bezpieczeństwa. Aplikacja nie jest dostępna w Google Play - ze względów prawnych musisz ją samodzielnie zbudować bezpośrednio z kodu źródłowego.

Głównymi składnikami są:

.. image:: images/modules-female.png
  :alt: Składniki

Aby uzyskać więcej informacji, czytaj dalej.

Pierwsze kroki
----------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Bezpieczeństwo przede wszystkim <./Getting-Started/Safety-first.rst>
   Co to jest system zamkniętej pętli <./Getting-Started/ClosedLoop.rst>
   Co to jest system zamkniętej pętli AndroidAPS <./Getting-Started/WhatisAndroidAPS.rst>  
   Aktualizacje Wiki i zmiany <./Getting-Started/WikiUpdate.rst>
   
   
Czego potrzebuję 
-----------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Moduł <./Module/module.rst>

   
Jak zainstalować AndroidAPS
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Tworzenie pakietu APK <./Installing-AndroidAPS/Building-APK.md>
   Aktualizacja do nowej wersji lub innego branch <./Installing-AndroidAPS/Update-to-new-version.md>
   Informacje o wersjach <./Installing-AndroidAPS/Releasenotes.md>
   Wersja developerska <./Installing-AndroidAPS/Dev_branch.md>
   
   
Ustawienia składników systemu
-----------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   CGM/FGM <./Configuration/BG-Source.rst>
   Ustawienia xDrip <./Configuration/xdrip.md>
   Pompy <./Hardware/pumps.rst>
   Telefony <./Hardware/Phoneconfig.rst>
   Konfiguracja Nightscout <./Installing-AndroidAPS/Nightscout.md>
   Zegarki/Smartwatche  <./Hardware/Smartwatch.rst>
   

Konfiguracja 
-----------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Narzędzie do konfiguracji <./Configuration/Config-Builder.md>
   Ustawienia <./Configuration/Preferences.md>
   
   
Użytkowanie AndroidAPS
------------
.. toctree::
   :maxdepth: 1
   :glob:
    
   Zrzuty ekranów AndroidAPS <./Getting-Started/Screenshots.md>
   Cele (samouczek) <./Usage/Objectives.md>
   OpenAPS features <./Usage/Open-APS-features.md>   
   Sensitivity detection and COB <./Configuration/Sensitivity-detection-and-COB.md>
   Profile switch <./Usage/Profiles.md>
   Temp-targets <./Usage/temptarget.md>   
   Extended carbs <./Usage/Extended-Carbs.md>
   Automation <./Usage/Automation.rst>
  
 
General Hints 
---------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Crossing timezones with pumps <./Usage/Timezone-traveling.md>
   Accessing logfiles <./Usage/Accessing-logfiles.md>
   Accu-Chek Combo tips for basic usage <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md> 
   Export/Import Settings <./Usage/ExportImportSettings.rst>
   

AndroidAPS for children
------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Remote monitoring <./Children/Children.rst>
   SMS commands <./Usage/SMS-Commands.md>
   

Advanced 
----------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Android auto <./Usage/Android-auto.md>
   Automation with 3rd party apps <./Usage/automationwithapp.md>
   

Troubleshooting
------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
  
   NS-Client <./Usage/Troubleshooting-NSClient.md>
   Update <./Installing-AndroidAPS/Update-to-new-version.html#troubleshooting>
   Pumps <./FGT/Troubleshootingpumps.rst>


FAQ 
------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
  
   FAQ <./Getting-Started/FAQ.md>

   
Słowniczek pojęć
------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
  
   Glossary <./Getting-Started/Glossary.md>
  

Where to go for help 
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Useful resources to read before you start <./Where-To-Go-For-Help/Background-reading.md>
   Where to go for help <./Where-To-Go-For-Help/Connect-with-other-users.md>
   Aktualizacje Wiki i zmiany <./Getting-Started/WikiUpdate.rst>

For Clinicians
------------
.. toctree::
   :maxdepth: 1
   :glob:
            
   For Clinicians <./Resources/clinician-guide-to-AndroidAPS>


How to help
------------
.. toctree::
   :maxdepth: 1
   :glob:

   How to help <./Getting-Started/How-can-I-help.md>
   How to translate the app and wiki <./translations.md>
   How to edit the wiki <./make-a-PR>


.. note:: 
	**Disclaimer And Warning**

	* All information, thought, and code described here is intended for informational and educational purposes only. Nightscout currently makes no attempt at HIPAA privacy compliance. Use Nightscout and AndroidAPS at your own risk, and do not use the information or code to make medical decisions.

	* Use of code from github.com is without warranty or formal support of any kind. Please review this repository's LICENSE for details.

	* All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. Their use is for information purposes and does not imply any affiliation with or endorsement by them.

	Please note - this project has no association with and is not endorsed by: `SOOIL <http://www.sooil.com/eng/>`_, `Dexcom <http://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>`_ or `Medtronic <http://www.medtronic.com/>`_
