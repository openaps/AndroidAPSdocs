Witamy w dokumentacji systemu AndroidAPS
==============================================

AndroidAPS jest to aplikacja open source przeznaczona dla osób chorujących na cukrzycę typu 1, która zainstalowana w smartfonach z systemem Android. działa jak system sztucznej trzustki (APS). Głównymi składnikami są różne algorytmy oprogramowania openAPS, których celem jest robienie tego, co robi żywa trzustka: utrzymywanie w odpowiednim zakresie poziomu cukru we krwi dzięki zastosowaniu automatycznego dozowania insuliny (AID). Ponadto co najmniej potrzebujesz obsługiwanej i zatwierdzonej przez FDA/CE pompy insulinowej i systemu ciągłego monitoringu glikemii. 

Aplikacja NIE korzysta z samouczącej się sztucznej inteligencji. Zamiast tego obliczenia AndroidAPS opierają się na indywidualnym algorytmie dawkowania i spożyciu węglowodanów, które użytkownik ręcznie wprowadza do swojego profilu terapii, ale dodatkowo są one weryfikowane przez system ze względów bezpieczeństwa. 

Aplikacja nie jest dostępna w Google Play - ze względów prawnych musisz ją samodzielnie zbudować bezpośrednio z kodu źródłowego.

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
   Install git <./Installing-AndroidAPS/git-install.rst>
   Troubleshooting Android Studio <./Installing-AndroidAPS/troubleshooting_androidstudio.rst>
   Release notes <./Installing-AndroidAPS/Releasenotes.rst>
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
   Objectives <./Usage/Objectives2019.rst>
   Funkcje OpenAPS <./Usage/Open-APS-features.md>   
   COB calculation <./Usage/COB-calculation.rst>
   Sensitivity detection <./Configuration/Sensitivity-detection-and-COB.md>
   Zmiana profilu <./Usage/Profiles.md>
   Cele tymczasowe TT <./Usage/temptarget.md>   
   Przedłużone węglowodany <./Usage/Extended-Carbs.md>
   Automatyzacja <./Usage/Automation.rst>
  
 
Porady ogólne 
---------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Przekraczania stref czasowych z pompami <./Usage/Timezone-traveling.md>
   Dostęp do pliku logu <./Usage/Accessing-logfiles.md>
   Wskazówki dotyczące podstawowego użytkowania Accu-Chek Combo <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md> 
   Eksport/Import wstawień <./Usage/ExportImportSettings.rst>
   

AndroidAPS dla dzieci
------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Zdalne monitorowanie <./Children/Children.rst>
   SMS commands <./Children/SMS-commands2019.rst>
   

Zaawansowane 
----------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Android auto <./Usage/Android-auto.md>
   Automatyzacja z aplikacjami innych firm <./Usage/automationwithapp.md>
   

Rozwiązywanie problemów
------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
  
   NS-Client <./Usage/Troubleshooting-NSClient.md>
   Aktualizacja <./Installing-AndroidAPS/Update-to-new-version.html#troubleshooting>
   Pompy <./FGT/Troubleshootingpumps.rst>


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
  
   Słowniczek pojęć <./Getting-Started/Glossary.md>
  

Gdzie szukać pomocy 
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Przydatne zasoby do przeczytania zanim rozpoczniesz <./Where-To-Go-For-Help/Background-reading.md>
   Gdzie można znaleźć pomoc <./Where-To-Go-For-Help/Connect-with-other-users.md>
   Aktualizacje Wiki i zmiany <./Getting-Started/WikiUpdate.rst>

Dla lekarzy specjalistów
------------
.. toctree::
   :maxdepth: 1
   :glob:
            
   Dla lekarzy specjalistów <./Resources/clinician-guide-to-AndroidAPS>


Jak pomóc
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Jak pomóc <./Getting-Started/How-can-I-help.md>
   W jaki sposób przetłumaczyć aplikację i dokumentację wiki <./translations.md>
   Jak edytować dokumentację Wiki <./make-a-PR>


.. notatka:: 
	** Wyłączenie odpowiedzialności i ostrzeżenie **

	* Wszystkie informacje, przemyślenia i kod opisane tutaj są przeznaczone wyłącznie do celów informacyjnych i edukacyjnych. Nightscout obecnie nie podejmuje prób zachowania zgodności z zasadami ochrony prywatności HIPAA. Korzystasz z Nightscout i AndroidAPS na własne ryzyko i nie używaj informacji ani kodu do podejmowania decyzji medycznych.

	* Korzystanie z kodu pobranego ze strony github.com nie jest objęte żadną gwarancją ani formalnym wsparciem. Proszę zapoznać się LICENCJA w repozytorium aby poznać szczegóły.

	* Wszystkie nazwy produktów i firm, znaki handlowe, znaki serwisowe, zastrzeżone znaki handlowe i zastrzeżone znaki serwisowe są własnością ich odpowiednich właścicieli. Ich wykorzystanie służy celom informacyjnym i nie oznacza żadnego powiązania z nimi ani poparcia.

	Uwaga - ten projekt nie jest powiązany i nie jest popierany przez: `SOOIL <http://www.sooil.com/eng/>` _, `Dexcom <http://www.dexcom.com/>` _, `Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>` _ lub `Medtronic <http://www.medtronic.com/>` _
