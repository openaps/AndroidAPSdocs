Witamy w dokumentacji systemu AndroidAPS
==================================================

AndroidAPS jest to aplikacja open source przeznaczona dla osób chorujących na cukrzycę typu 1, która zainstalowana w smartfonach z systemem Android. działa jak system sztucznej trzustki (APS). The main components are different openAPS software algorithms which aim to do what a living pancreas does: keeping blood sugar levels within healthy limits by using automated insulin dosing (AID). Ponadto co najmniej potrzebujesz obsługiwanej i zatwierdzonej przez FDA/CE pompy insulinowej i systemu ciągłego monitoringu glikemii. 

Aplikacja NIE korzysta z samouczącej się sztucznej inteligencji. Instead, the calculations of AndroidAPS are based on the individual dosage algorithm and carbohydrate intake the user manually puts into their treatments profile, but they are verified by the system for safety reasons. 

Aplikacja nie jest dostępna w Google Play - ze względów prawnych musisz ją samodzielnie zbudować bezpośrednio z kodu źródłowego.

The main components are:

.. image:: images/modules-female.png
  :alt: Składniki

Aby uzyskać więcej informacji, czytaj dalej.

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Change language
   Change language <changelanguage.rst>
   
.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Getting started

   Bezpieczeństwo przede wszystkim <./Getting-Started/Safety-first.rst>
   What is a closed loop system <./Getting-Started/ClosedLoop.rst>
   What is a closed loop system with AndroidAPS <./Getting-Started/WhatisAndroidAPS.rst>  
   Docs updates & changes <./Getting-Started/WikiUpdate.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: What do I need? 

   Moduł <./Module/module.rst>
   Sample Setup <./Getting-Started/Sample-Setup.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: How to Install AndroidAPS

   Tworzenie pakietu APK <./Installing-AndroidAPS/Building-APK.md>
   Aktualizacja do nowej wersji lub innego branch <./Installing-AndroidAPS/Update-to-new-version.md>
   Checks after update to AAPS 2.7 <./Installing-AndroidAPS/update2_7.rst>
   Install git <./Installing-AndroidAPS/git-install.rst>
   Troubleshooting Android Studio <./Installing-AndroidAPS/troubleshooting_androidstudio.rst>
   Release notes <./Installing-AndroidAPS/Releasenotes.rst>
   Wersja developerska <./Installing-AndroidAPS/Dev_branch.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Component Setup

   CGM/FGM <./Configuration/BG-Source.rst>
   Ustawienia xDrip <./Configuration/xdrip.md>
   Pompy <./Hardware/pumps.rst>
   Telefony <./Hardware/Phoneconfig.rst>
   Konfiguracja Nightscout <./Installing-AndroidAPS/Nightscout.md>
   Zegarki/Smartwatche  <./Hardware/Smartwatch.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Configuration

   Narzędzie do konfiguracji <./Configuration/Config-Builder.md>
   Preferences <./Configuration/Preferences.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: AndroidAPS Usage

   Zrzuty ekranów AndroidAPS <./Getting-Started/Screenshots.md>
   Objectives <./Usage/Objectives.rst>
   Funkcje OpenAPS <./Usage/Open-APS-features.md>   
   COB calculation <./Usage/COB-calculation.rst>
   Sensitivity detection <./Configuration/Sensitivity-detection-and-COB.md>
   Zmiana profilu <./Usage/Profiles.md>
   Cele tymczasowe TT <./Usage/temptarget.md>   
   Extended carbs <./Usage/Extended-Carbs.rst>
   Automatyzacja <./Usage/Automation.rst>
   Careportal (discontinued) <./Usage/CPbefore26.rst>
   Open Humans Uploader <./Configuration/OpenHumans.rst>
   Automatyzacja z aplikacjami innych firm <./Usage/automationwithapp.md>
   Android auto <./Usage/Android-auto.md>  

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: General Hints 

   Przekraczania stref czasowych z pompami <./Usage/Timezone-traveling.md>
   Dostęp do pliku logu <./Usage/Accessing-logfiles.md>
   Wskazówki dotyczące podstawowego użytkowania Accu-Chek Combo <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md> 
   Eksport/Import wstawień <./Usage/ExportImportSettings.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: AndroidAPS for children

   Zdalne monitorowanie <./Children/Children.rst>
   SMS commands <./Children/SMS-Commands.rst>
   Profile helper <./Configuration/profilehelper.rst>
   
.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Troubleshooting

   Troubleshooting <./Usage/troubleshooting.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: FAQ

   FAQ <./Getting-Started/FAQ.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Glossary

   Słowniczek pojęć <./Getting-Started/Glossary.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Where to go for help 

   Przydatne zasoby do przeczytania zanim rozpoczniesz <./Where-To-Go-For-Help/Background-reading.md>
   Gdzie można znaleźć pomoc <./Where-To-Go-For-Help/Connect-with-other-users.md>
   Docs updates & changes <./Getting-Started/WikiUpdate.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: For Clinicians

   Dla lekarzy specjalistów <./Resources/clinician-guide-to-AndroidAPS>


.. toctree::
   :maxdepth: 1
   :glob:
   :caption: How to help

   Jak pomóc <./Getting-Started/How-can-I-help.md>
   How to translate the app and docs <./translations.md>
   How to edit the docs <./make-a-PR>


.. notatka:: 
	** Wyłączenie odpowiedzialności i ostrzeżenie **

	* Wszystkie informacje, przemyślenia i kod opisane tutaj są przeznaczone wyłącznie do celów informacyjnych i edukacyjnych. Nightscout obecnie nie podejmuje prób zachowania zgodności z zasadami ochrony prywatności HIPAA. Korzystasz z Nightscout i AndroidAPS na własne ryzyko i nie używaj informacji ani kodu do podejmowania decyzji medycznych.

	* Korzystanie z kodu pobranego ze strony github.com nie jest objęte żadną gwarancją ani formalnym wsparciem. Proszę zapoznać się LICENCJA w repozytorium aby poznać szczegóły.

	* Wszystkie nazwy produktów i firm, znaki handlowe, znaki serwisowe, zastrzeżone znaki handlowe i zastrzeżone znaki serwisowe są własnością ich odpowiednich właścicieli. Ich wykorzystanie służy celom informacyjnym i nie oznacza żadnego powiązania z nimi ani poparcia.

	Uwaga - ten projekt nie jest powiązany i nie jest popierany przez: `SOOIL <http://www.sooil.com/eng/>` _, `Dexcom <http://www.dexcom.com/>` _, `Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>` _ lub `Medtronic <http://www.medtronic.com/>` _
