Vítejte v dokumentaci k AndroidAPS
==================================================

AndroidAPS je open source aplikace určená pro osoby s diabetem, které jsou závislé na inuzlinu. Funguje jako umělá slinivka (APS) na telefonech se systémem Google Android. Hlavními součástmi jsou různé softwarové algoritmy openAPS, jejichž cílem je dělat totéž, co zdravá slinivka: udržovat glykémii ve zdravém rozmezí pomocí automatizovaného dávkování inzulinu (AID). Komě toho potřebujete schválenou inzulinovou pumpu a senzor pro kontinuální monitoraci glykémie. 

Tato aplikace NEPOUŽÍVÁ umělou inteligenci, která se sama učí. Místo toho se výpočty AndroidAPS zakládají na algoritmu individuálního dávkování a příjmu sacharidů, které uživatel ručně zadává do svého profilu ošetření, ale z bezpečnostních důvodů jsou systémem ověřovány. 

Aplikace není k dispozici v Google Play - z právních důvodů si ji musíte sami sestavit ze zdrojového kódu.

Hlavní součásti jsou:

.. image:: images/modules-female.png
  :alt: Součásti

Další informace naleznete zde.

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Změnit jazyk

   Změnit jazyk <./changelanguage.rst>

.. _Začínáme:

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Začínáme

   Bezpečnost především <./Getting-Started/Safety-first.rst>
   Co je systém uzavřené smyčky <./Getting-Started/ClosedLoop.rst>
   Co je systém uzavřené smyčky s AndroidAPS <./Getting-Started/WhatisAndroidAPS.rst>  
   Možné pumpy <./Getting-Started/Pump-Choices.md>
   Aktualizace dokumentace a změny <./Getting-Started/WikiUpdate.rst>

.. _Co budu potřebovat:

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Co budu potřebovat? 

   Modul <./Module/module.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Jak nainstalovat AndroidAPS

   Vytvoření APK<./Installing-AndroidAPS/Building-APK.md>
   Jak aktualizovat na novou verzi <./Installing-AndroidAPS/Update-to-new-version.md>
   Hints and Checks after update to AAPS 3.0<./Installing-AndroidAPS/uodate3_0.md>
   Co je třeba zkontrolovat po aktualizaci na AAPS 2.7 <./Installing-AndroidAPS/update2_7.rst>
   Install git <./Installing-AndroidAPS/git-install.rst>
   Řešení potíží s Android Studiem <./Installing-AndroidAPS/troubleshooting_androidstudio.rst>
   Poznámky k vydání <./Installing-AndroidAPS/Releasenotes.rst>
   Dev branch <./Installing-AndroidAPS/Dev_branch.md>

.. _Nastavení komponent:

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Nastavení komponent

   CGM/FGM <./Configuration/BG-Source.rst>
   Nastavení xDrip <./Configuration/xdrip.md>
   Pumpy <./Hardware/pumps.rst>
   Telefony <./Hardware/Phoneconfig.rst>
   Nastavení Nightscoutu <./Installing-AndroidAPS/Nightscout.md>
   Chytré hodinky <./Hardware/Smartwatch.rst>

.. _konfigurace:

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Konfigurace

   Konfigurace <./Configuration/Config-Builder.md>
   Nastavení <./Configuration/Preferences.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Používání AndroidAPS

   Obrazovky AndroidAPS <./Getting-Started/Screenshots.md>
   Cíle <./Usage/Objectives.rst>
   Možnosti OpenAPS <./Usage/Open-APS-features.md>   
   Výpočet COB <./Usage/COB-calculation.rst>
   Detekce citlivosti <./Configuration/Sensitivity-detection-and-COB.md>
   Profily <./Usage/Profiles.md>
   Dočasné cíle <./Usage/temptarget.md>   
   Rozložené sacharidy <./Usage/Extended-Carbs.rst>
   Automatizace <./Usage/Automation.rst>
   Péče (zrušeno) <./Usage/CPbefore26.rst>
   Open Humans Uploader <./Configuration/OpenHumans.rst>
   Automatizace s aplikacemi třetích stran <./Usage/automationwithapp.md>
   Android auto <./Usage/Android-auto.md>  

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Obecné tipy 

   Cestování s pumpou mezi časovými pásmy <./Usage/Timezone-traveling.md>
   Přístup k log souborům <./Usage/Accessing-logfiles.md>
   Tipy pro základní používání pumpy Accu-Chek Combo <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md> 
   Export/Import nastavení <./Usage/ExportImportSettings.rst>
   Inženýrský režim xDrip <./Usage/Enabling-Engineering-Mode-in-xDrip.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: AndroidAPS pro děti

   Vzdálené monitorování <./Children/Children.rst>
   SMS příkazy <./Children/SMS-Commands.rst>
   Pomocník s profilem <./Configuration/profilehelper.rst>
   
.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Odstraňování problémů

   Odstraňování problémů <./Usage/troubleshooting.rst>
   Nightscout klient <./Usage/Troubleshooting-NSClient.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Nejčastější dotazy

   Nejčastější dotazy <./Getting-Started/FAQ.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Slovníček

   Glosář <./Getting-Started/Glossary.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Kam jít pro pomoc 

   Užitečné zdroje informací než začnete <./Where-To-Go-For-Help/Background-reading.md>
   Kam jít pro pomoc <./Where-To-Go-For-Help/Connect-with-other-users.md>
   Aktualizace dokumentace a změny <./Getting-Started/WikiUpdate.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Pro lékaře

   Pro lékaře <./Resources/clinician-guide-to-AndroidAPS>


.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Jak mohu pomoci

   Jak mohu pomoci <./Getting-Started/How-can-I-help.md>
   Jak pomoci s překladem aplikace a dokumentace <./translations.md>
   Jak upravovat dokumentaci <./make-a-PR>


.. poznámka:: 
	** Upozornění a varování **

	* Všechny informace, myšlenky a kód zde popsané slouží pouze pro informační a vzdělávací účely. Nightscout se nesnaží v současné době dodržovat zákon HIPAA. Používejte Nightscout a AndroidAPS na vaše vlastní riziko a nepoužívejte informace nebo kód k provádění lékařských rozhodnutí.

	* Použití kódu z github.com je bez záruky nebo formální podpory jakéhokoliv druhu. Přečtěte licenci z této repozitoře pro další podrobnosti.

	* Všechny názvy společností a produktů, ochranné známky, servisní známky, registrované ochranné známky a registrované servisní známky jsou vlastnictvím jejich příslušných držitelů. Jejich použití je pro informační účely a neznamená žádné spojení.

	Vezměte prosím na vědomí – tento projekt nemá žádnou spojitost s a není žádným způsobem schválený společnostmi: `SOOIL <https://www.sooil.com/eng/>`_, `Dexcom <https://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <https://www.accu-chek.com/>`_ nebo `Medtronic <https://www.medtronic.com/>`_
