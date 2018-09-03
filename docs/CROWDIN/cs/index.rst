Vítejte v dokumentaci k AndroidAPS
==============================================

**Co je AndroidAPS?**

AndroidAPS is an app that can communicate with bluetooth-enabled insulin pumps, and runs a version of the OpenAPS "oref0" and "oref1" algorithms.

**Primární cíle AndroidAPS:**

* modulární aplikace, do které je možné snadno přidávat nové moduly bez modifikace zbytku kódu
* aplikace, která umožňuje lokalizace
* aplikace, kde můžeme snadno vybrat, co bude součástí konečného apk, jen jednoduchou změnou a kompilací
* aplikace, která podporuje režim APS v otevřené i uzavřené smyčce
* aplikace, kde si můžete prohlédnout, jak funguje APS: vstupní parametry, výsledek a konečné rozhodnutí
* umožní přidat další APS algoritmy a umožní uživateli rozhodnout, co používat
* aplikace nezávislá na ovladači pumpy a obsahující "virtuální pumpu", která umožní uživatelům bezpečně si hrát s APS
* aplikace s těsnou integraci s Nightscoutem
* aplikace, kde je možné snadno přidat nebo odebrat omezení pro bezpečnost uživatelů
* All-in-one aplikace, kterou potřebujete pro správu diabetu s APS a Nightscoutem

**Co potřebuji, abych mohl začít:**

* Android Smartphone s Android 5.0 nebo novější. Viz ' Tato tabulka <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>' _ pro zprávy o tom, jak dobře telefon pracuje s AndroidAPS.
* An app to receive CGM data: `xDrip <http://stephenblackwasalreadytaken.github.io/xDrip/>`_/ `xDrip+ <https://github.com/jamorham/xDrip-plus>`_, `Glimp <http://www.nightscout.info/wiki/welcome/nightscout-for-libre>`_ , `G5 patched app <https://github.com/dexcomapp/dexcomapp>`_, `PochTech app <https://play.google.com/store/apps/details?id=jp.co.unitec.concretemanagement&hl=gsw>`_ or `600SeriesAndroidUploader <https://github.com/pazaan/600SeriesAndroidUploader>`_
* ' AndroidAPS <https://github.com/MilosKozak/AndroidAPS>' _, samu o sobě
* ' Nightscout <https://github.com/nightscout/cgm-remote-monitor>' _ 0.10.2 nebo novější
* A supported pump: Dana-R or Dana-RS Insulin Pump or Accu-Chek Combo (unless you build your own driver for another insulin pump)
* A Continuous Glucose Monitor (CGM) data source: Dexcom G4/G5/G6, Freestyle Libre, Eversense, Medtronic Guardian, PocTech


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
   Telefony <./Getting-Started/Phones.md>
   Možné pumpy <./Getting-Started/Pump-Choices.md>
   Pumpy potenciálně použitelné v budoucnu  <./Getting-Started/Future-possible-Pump-Drivers.md>
   Otázky a odpovědi <./Getting-Started/FAQ.md>
   Glosář <./Getting-Started/Glossary.md>
  
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
   
   Konfigurace <./Configuration/Config-Builder.md>
   Zdroj glykémií<./Configuration/BG-Source.md>
   DanaR <./Configuration/DanaR-Insulin-Pump.md>
   DanaRS <./Configuration/DanaRS-Insulin-Pump.md>
   Accu Chek Combo <./Configuration/Accu-Chek-Combo-Pump.md>
   Hodinky<./Configuration/Watchfaces.md>
   Nastavení <./Configuration/Preferences.md>
   Detekce senzitivity a COB <./Configuration/Sensitivity-detection-and-COB.md>
   
Použití
------------
.. toctree::
   :maxdepth: 1
   :glob:
    
   Cíle <./Usage/Objectives.md>
   Možnosti OpenAPS <./Usage/Open-APS-features.md>
   Profily <./Usage/Profiles.md>
   SMS příkazy <./Usage/SMS-Commands.md>
   Prodloužené sacharidy (eCarbs) <./Usage/Extended-Carbs.md>
   Cestování časovými zónami
   Přístup k log souborům <./Usage/Accessing-logfiles.md>
   Vyhlazování glykémií v xDripu <./Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md>
   AccuChek Combo tipy pro základní použití <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md>
   Odstraňování potíží s NSClientem <./Usage/Troubleshooting-NSClient.md>

Kam pro pomoc 
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Další čtení & zajímavé články <./Where-To-Go-For-Help/Background-reading.md>
   Kam jít pro pomoc <./Where-To-Go-For-Help/Connect-with-other-users.md>

Jak pomoci
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Jak mohu pomoci <./Getting-Started/How-can-I-help.md>
   Jak pomoci s překladem <./translations.md>
   Jak editovat wiki <./make-a-PR>
