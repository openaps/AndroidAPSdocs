Vítejte v dokumentaci k AndroidAPS
==============================================

AndroidAPS je open source aplikace určená pro osoby s diabetem, které jsou závislé na inuzlinu. Funguje jako umělá slinivka (APS) na telefonech se systémem Google Android. Hlavními součástmi jsou různé softwarové algoritmy openAPS, jejichž cílem je dělat totéž, co zdravá slinivka: udržovat glykémii ve zdravém rozmezí pomocí automatizovaného dávkování inzulinu (AID). Komě toho potřebujete schválenou inzulinovou pumpu a senzor pro kontinuální monitoraci glykémie. 

Tato aplikace NEPOUŽÍVÁ umělou inteligenci, která se sama učí. Místo toho se výpočty AndroidAPS zakládají na algoritmu individuálního dávkování a příjmu sacharidů, které uživatel ručně zadává do svého profilu ošetření, ale z bezpečnostních důvodů jsou systémem ověřovány. 

Aplikace není k dispozici v Google Play - z právních důvodů si ji musíte sami sestavit ze zdrojového kódu.

Hlavní součásti jsou:

.. image:: images/modules-female.png
  :alt: Součásti

Další informace naleznete zde.

Začínáme
----------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Bezpečnost především <./Getting-Started/Safety-first.rst>
   Co je systém uzavřené smyčky <./Getting-Started/ClosedLoop.rst>
   Co je systém uzavřené smyčky s AndroidAPS <./Getting-Started/WhatisAndroidAPS.rst>  
   Aktualizace wiki a změny <./Getting-Started/WikiUpdate.rst>
   
   
Co potřebuji 
-----------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Modul <./Module/module.rst>

   
Jak nainstalovat AndroidAPS
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Vytvoření APK<./Installing-AndroidAPS/Building-APK.md>
   Jak aktualizovat na novou verzi <./Installing-AndroidAPS/Update-to-new-version.md>
   Install git <./Installing-AndroidAPS/git-install.rst>
   Troubleshooting Android Studio </Installing-AndroidAPS/troubleshooting_androidstudio.rst>
   Release notes <./Installing-AndroidAPS/Releasenotes.rst>
   Dev branch <./Installing-AndroidAPS/Dev_branch.md>
   
   
Nastavení komponent
---------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   CGM/FGM <./Configuration/BG-Source.rst>
   Nastavení xDrip <./Configuration/xdrip.md>
   Pumpy <./Hardware/pumps.rst>
   Telefony <./Hardware/Phoneconfig.rst>
   Nastavení Nightscoutu <./Installing-AndroidAPS/Nightscout.md>
   Chytré hodinky <./Hardware/Smartwatch.rst>
   

Konfigurace 
---------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Konfigurace <./Configuration/Config-Builder.md>
   Nastavení <./Configuration/Preferences.md>
   
   
Použití AndroidAPS
------------
.. toctree::
   :maxdepth: 1
   :glob:
    
   Obrazovky AndroidAPS <./Getting-Started/Screenshots.md>
   Cíle <./Usage/Objectives2019.rst>
   Možnosti OpenAPS <./Usage/Open-APS-features.md>   
   Výpočet COB <./Usage/COB-calculation.rst>
   Detekce citlivosti <./Configuration/Sensitivity-detection-and-COB.md>
   Profily <./Usage/Profiles.md>
   Dočasné cíle <./Usage/temptarget.md>   
   Rozložené sacharidy <./Usage/Extended-Carbs.md>
   Automatizace <./Usage/Automation.rst>
  
 
Obecné tipy 
---------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Cestování s pumpou mezi časovými pásmy <./Usage/Timezone-traveling.md>
   Přístup k log souborům <./Usage/Accessing-logfiles.md>
   Tipy pro základní používání pumpy Accu-Chek Combo <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md> 
   Export/Import nastavení <./Usage/ExportImportSettings.rst>
   

AndroidAPS pro děti
------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Vzdálené monitorování <./Children/Children.rst>
   SMS commands <./Children/SMS-commands2019.rst>
   

Pokročilé 
----------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Android auto <./Usage/Android-auto.md>
   Automatizace s aplikacemi třetích stran <./Usage/automationwithapp.md>
   

Poradce při potížích
------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
  
   NS-Client <./Usage/Troubleshooting-NSClient.md>
   Aktualizace <./Installing-AndroidAPS/Update-to-new-version.html#troubleshooting>
   Pumpy <./FGT/Troubleshootingpumps.rst>


Nejčastější dotazy 
------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
  
   Nejčastější dotazy <./Getting-Started/FAQ.md>

   
Slovníček
------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
  
   Glosář <./Getting-Started/Glossary.md>
  

Kam pro pomoc 
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Užitečné zdroje informací než začnete <./Where-To-Go-For-Help/Background-reading.md>
   Kam jít pro pomoc <./Where-To-Go-For-Help/Connect-with-other-users.md>
   Aktualizace wiki a změny <./Getting-Started/WikiUpdate.rst>

Pro lékaře
------------
.. toctree::
   :maxdepth: 1
   :glob:
            
   Pro lékaře <./Resources/clinician-guide-to-AndroidAPS>


Jak pomoci
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Jak mohu pomoci <./Getting-Started/How-can-I-help.md>
   Jak pomoci s překladem aplikace a wiki <./translations.md>
   Jak editovat wiki <./make-a-PR>


.. poznámka:: 
	** Upozornění a varování **

	* Všechny informace, myšlenky a kód zde popsané slouží pouze pro informační a vzdělávací účely. Nightscout se nesnaží v současné době dodržovat zákon HIPAA. Používejte Nightscout a AndroidAPS na vaše vlastní riziko a nepoužívejte informace nebo kód k provádění lékařských rozhodnutí.

	* Použití kódu z github.com je bez záruky nebo formální podpory jakéhokoliv druhu. Přečtěte licenci z této repozitoře pro další podrobnosti.

	* Všechny názvy společností a produktů, ochranné známky, servisní známky, registrované ochranné známky a registrované servisní známky jsou vlastnictvím jejich příslušných držitelů. Jejich použití je pro informační účely a neznamená žádné spojení.

	Vezměte prosím na vědomí – tento projekt nemá žádnou spojitost s a není žádným způsobem schválený společnostmi: `SOOIL <http://www.sooil.com/eng/>`_, `Dexcom <http://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>`_ nebo `Medtronic <http://www.medtronic.com/>`_
