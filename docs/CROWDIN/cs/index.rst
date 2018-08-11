Vítejte v dokumentaci k AndroidAPS
==============================================

** Co je AndroidAPS? **

AndroidAPS je aplikace, která může komunikovat s bluetooth inzulinovými pumpami a spouští verzi "oref0" OpenAPS algoritmu.

** Primární cíle AndroidAPS: **

* modulární aplikace, do které je možné snadno přidávat nové moduly bez modifikace zbytku kódu
* aplikace, která umožňuje lokalizace
* aplikace kde můžeme snadno vybrat, co bude součástí konečného apk, jen jednoduchou změnou a kompilací
* aplikace, která podporuje režim APS v otevřené i uzavřené smyčce
* aplikace, kde si můžete prohlédnout, jak funguje APS: vstupní parametry, výsledek a konečné rozhodnutí
* umožní přidat další APS algoritmy a umožní uživateli rozhodnout, co používat
* aplikace nezávislá na ovladači pumpy a obsahující "virtuální pumpu", která umožní uživatelům bezpečně si hrát s APS
* aplikace s těsnou integraci s Nightscoutem
* aplikace, kde je možné snadno přidat nebo odebrat omezení pro bezpečnost uživatelů
* All-in-one aplikace, kterou potřebujete pro správu diabetu s APS a Nightscoutem

** Co potřebuji, abych mohl začít:**

* An Android Smartphone with Android 5.0 or later. See `this spreadsheet <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_ for reports on how well a phone works with AndroidAPS.
* An app to receive CGM data: `xDrip <http://stephenblackwasalreadytaken.github.io/xDrip/>`_/ `xDrip+ <https://github.com/jamorham/xDrip-plus>`_, `Glimp <http://www.nightscout.info/wiki/welcome/nightscout-for-libre>`_ , `G5 patched app <https://github.com/dexcomapp/dexcomapp>`_ or `600SeriesAndroidUploader <https://github.com/pazaan/600SeriesAndroidUploader>`_
* ' AndroidAPS <https://github.com/MilosKozak/AndroidAPS>' _, samu o sobě
* ' Nightscout <https://github.com/nightscout/cgm-remote-monitor>' _ 0.10.2 nebo novější
* A supported pump: Dana-R or Dana-RS Insulin Pump (unless you build your own driver for other insulin pump) or Accu-Chek Combo (currently in wider testing)
* A Continuous Glucose Monitor (CGM) data source: Dexcom G4/G5, Freestyle Libre, Eversense or Medtronic Guardian


.. poznámka:: 
	** Upozornění a varování **

	* Všechny informace, myšlenky a kód zde popsané slouží pouze pro informační a vzdělávací účely. Nightscout se nesnaží v současné době dodržovat zákon HIPAA. Používejte Nightscout a AndroidAPS na vaše vlastní riziko a nepoužívejte informace nebo kód k provádění lékařských rozhodnutí.

	* Použití kódu z github.com je bez záruky nebo formální podpory jakéhokoliv druhu. Přečtěte licenci z této repozitoře pro další podrobnosti.

	* Všechny názvy společností a produktů, ochranné známky, servisní známky, registrované ochranné známky a registrované servisní známky jsou vlastnictvím jejich příslušných držitelů. Jejich použití je pro informační účely a neznamená žádné spojení.

	Vezměte prosím na vědomí - tento projekt nemá žádnou spojitost s a není žádným způsobem schválený: `SOOIL <http://www.sooil.com/eng/>` _, `Dexcom <http://www.dexcom.com/>'`_, `Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>` _.

Začínáme s AndroidAPS
----------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Bezpečnost především <./Getting-Started/Safety-first>
   Snímky obrazovky <./Getting-Started/Screenshots.md>
   Architcture, security implementation </EN/Getting-Started/Architecture-security-implementation.md>
   Phone <./Getting-Started/Phones.md>
   Pump choices <./Getting-Started/Pump-Choices.md>
   Future possible pump drivers  <./Getting-Started/Future-possible-Pump-Drivers.md>
   FAQ for loopers <./Getting-Started/FAQ.md>
   Glossary <./Getting-Started/Glossary.md>
  
Jak nainstalovat AndroidAPS
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Vytvoření APK<./Installing-AndroidAPS/Building-APK.md>
   Jak aktualizovat na novou verzi <./Installing-AndroidAPS/Update-to-new-version.md>
   Poznámky k verzi <./Installing-AndroidAPS/Releasenotes.md>
   Dev branch <./Installing-AndroidAPS/Dev-branch.md>
   Nightscout <./Installing-AndroidAPS/Nightscout.md>
   
Konfigurace 
---------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Config Builder <./Configuration/Config-Builder.md>
   BG Source<./Configuration/BG-Source.md>
   DanaR <./Configuration/DanaR-Insulin-Pump.md>
   DanaRS <./Configuration/DanaRS-Insulin-Pump.md>
   Accu Chek Combo <./Configuration/Accu-Chek-Combo-Pump.md>
   Watchfaces <./Configuration/Watchfaces.md>
   Preferences <./Configuration/Preferences.md>
   Sensitivity Detection and COB <./Configuration/Sensitivity-detection-and-COB.md>
   
Usage
------------
.. toctree::
   :maxdepth: 1
   :glob:
    
   Objectives <./Usage/Objectives.md>
   OpenAPS Features <./Usage/Open-APS-features.md>
   Profiles <./Usage/Profiles.md>
   SMS Commands </EN/Usage/SMS-Commands.md>
   Extended Carbs <./Usage/Extended-Carbs.md>
   Accessing log files <./Usage/Accessing-logfiles.md>
   Smoothing Blood Glucose Data in xDrip <./Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md>
   AccuChek Combo Tips for Basic usage <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md>

Where to go for help 
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Background reading & interesting articles <./Where-To-Go-For-Help/Background-reading.md>
   Where to go for help <./Where-To-Go-For-Help/Connect-with-other-users.md>

How to help
------------
.. toctree::
   :maxdepth: 1
   :glob:

   How to help <./Getting-Started/How-can-I-help.md>
   How to translate the App <./translations.md>
   How to edit the wiki <./make-a-PR>
