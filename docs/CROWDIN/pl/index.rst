Witamy w dokumentacji systemu AndroidAPS
==================================================

AndroidAPS jest to aplikacja open source przeznaczona dla osób chorujących na cukrzycę typu 1, która zainstalowana w smartfonach z systemem Android. działa jak system sztucznej trzustki (APS). The main components are different openAPS software algorithms which aim to do what a living pancreas does: keeping blood sugar levels within healthy limits by using automated insulin dosing (AID). Ponadto co najmniej potrzebujesz obsługiwanej i zatwierdzonej przez FDA/CE pompy insulinowej i systemu ciągłego monitoringu glikemii. 

Aplikacja NIE korzysta z samouczącej się sztucznej inteligencji. Instead, the calculations of AndroidAPS are based on the individual dosage algorithm and carbohydrate intake the user manually puts into their treatments profile, but they are verified by the system for safety reasons. 

Aplikacja nie jest dostępna w Google Play - ze względów prawnych musisz ją samodzielnie zbudować bezpośrednio z kodu źródłowego.

The main components are:

.. image:: images/modules-female.png
  :alt: Składniki

Aby uzyskać więcej informacji, czytaj dalej.

Pierwsze kroki
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Bezpieczeństwo przede wszystkim <./Getting-Started/Safety-first.rst>
   What is a closed loop system <./Getting-Started/ClosedLoop.rst>
   What is a closed loop system with AndroidAPS <./Getting-Started/WhatisAndroidAPS.rst>  
   Docs updates & changes <./Getting-Started/WikiUpdate.rst>
   
   
What do I need? 
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Moduł <./Module/module.rst>
   Sample Setup <./Getting-Started/Sample-Setup.md>

   
Jak zainstalować AndroidAPS
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:

   Tworzenie pakietu APK <./Installing-AndroidAPS/Building-APK.md>
   Aktualizacja do nowej wersji lub innego branch <./Installing-AndroidAPS/Update-to-new-version.md>
   Checks after update to AAPS 2.7 <./Installing-AndroidAPS/update2_7.rst>
   Install git <./Installing-AndroidAPS/git-install.rst>
   Troubleshooting Android Studio <./Installing-AndroidAPS/troubleshooting_androidstudio.rst>
   Release notes <./Installing-AndroidAPS/Releasenotes.rst>
   Wersja developerska <./Installing-AndroidAPS/Dev_branch.md>
   
   
Ustawienia składników systemu
--------------------------------------------------
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
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Narzędzie do konfiguracji <./Configuration/Config-Builder.md>
   Preferences <./Configuration/Preferences.rst>
   
   
Użytkowanie AndroidAPS
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
    
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
 
Porady ogólne 
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Przekraczania stref czasowych z pompami <./Usage/Timezone-traveling.md>
   Dostęp do pliku logu <./Usage/Accessing-logfiles.md>
   Wskazówki dotyczące podstawowego użytkowania Accu-Chek Combo <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md> 
   Eksport/Import wstawień <./Usage/ExportImportSettings.rst>
   

AndroidAPS dla dzieci
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Zdalne monitorowanie <./Children/Children.rst>
   SMS commands <./Children/SMS-Commands.rst>
   

Rozwiązywanie problemów
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
  
   Troubleshooting <./Usage/troubleshooting.rst>
   

FAQ 
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
  
   FAQ <./Getting-Started/FAQ.md>

   
Słowniczek pojęć
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
  
   Słowniczek pojęć <./Getting-Started/Glossary.md>
  

Gdzie szukać pomocy 
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:

   Przydatne zasoby do przeczytania zanim rozpoczniesz <./Where-To-Go-For-Help/Background-reading.md>
   Gdzie można znaleźć pomoc <./Where-To-Go-For-Help/Connect-with-other-users.md>
   Docs updates & changes <./Getting-Started/WikiUpdate.rst>

Dla lekarzy specjalistów
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
            
   Dla lekarzy specjalistów <./Resources/clinician-guide-to-AndroidAPS>


Jak pomóc
--------------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:

   Jak pomóc <./Getting-Started/How-can-I-help.md>
   How to translate the app and docs <./translations.md>
   How to edit the docs <./make-a-PR>


.. notatka:: 
	** Wyłączenie odpowiedzialności i ostrzeżenie **

	* Wszystkie informacje, przemyślenia i kod opisane tutaj są przeznaczone wyłącznie do celów informacyjnych i edukacyjnych. Nightscout obecnie nie podejmuje prób zachowania zgodności z zasadami ochrony prywatności HIPAA. Korzystasz z Nightscout i AndroidAPS na własne ryzyko i nie używaj informacji ani kodu do podejmowania decyzji medycznych.

	* Korzystanie z kodu pobranego ze strony github.com nie jest objęte żadną gwarancją ani formalnym wsparciem. Proszę zapoznać się LICENCJA w repozytorium aby poznać szczegóły.

	* Wszystkie nazwy produktów i firm, znaki handlowe, znaki serwisowe, zastrzeżone znaki handlowe i zastrzeżone znaki serwisowe są własnością ich odpowiednich właścicieli. Ich wykorzystanie służy celom informacyjnym i nie oznacza żadnego powiązania z nimi ani poparcia.

	Uwaga - ten projekt nie jest powiązany i nie jest popierany przez: `SOOIL <http://www.sooil.com/eng/>` _, `Dexcom <http://www.dexcom.com/>` _, `Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>` _ lub `Medtronic <http://www.medtronic.com/>` _
