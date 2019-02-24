Vítejte v dokumentaci k AndroidAPS
==============================================

**Co je AndroidAPS?**

AndroidAPS je aplikace, která může komunikovat s bluetooth inzulinovými pumpami a spouští verzi "oref0" OpenAPS algoritmu.

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
* Aplikaci pro příjem glykémií: `xDrip <http://stephenblackwasalreadytaken.github.io/xDrip/>`_/ `xDrip+ <https://jamorham.github.io/#xdrip-plus>`_, `Glimp <https://play.google.com/store/apps/details?id=it.ct.glicemia>`_ , `G5 modifikovaná aplikace <https://github.com/dexcomapp/dexcomapp>`_, `PochTech<https://play.google.com/store/apps/details?id=jp.co.unitec.concretemanagement&hl=gsw>`_ nebo `600SeriesAndroidUploader <http://pazaan.github.io/600SeriesAndroidUploader/>`_
* ' AndroidAPS <https://github.com/MilosKozak/AndroidAPS>' _, samu o sobě
* `Nightscout cgm-remote-monitor <http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku>`_ 0.10.2 nebo novější
* Podporovanou pumpu: DanaR nebo DanaRS nebo Accu-Chek Combo (pokud si neuděláte vlastní ovladač pro jinou pumpu)
* Zdroj dat CGM: Dexcom G4/G5/G6, Freestyle Libre, Eversense, Medtronic Guardian, PocTech


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
   Sample Setup: Samsung S7, DanaR, Dexcom G5 and Sony Smartwatch <./Getting-Started/Sample-Setup.md>
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
   Zdroj glykémií <./Configuration/BG-Source.md>
   DanaR <./Configuration/DanaR-Insulin-Pump.md>
   DanaRS <./Configuration/DanaRS-Insulin-Pump.md>
   Accu Chek Combo <./Configuration/Accu-Chek-Combo-Pump.md>
   Hodinky <./Configuration/Watchfaces.md>
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
   Temp-Targets <./Usage/temptarget.md>
   SMS příkazy <./Usage/SMS-Commands.md>
   Prodloužené sacharidy (eCarbs) <./Usage/Extended-Carbs.md>
   Cestování časovými zónami <./Usage/Timezone-traveling.md>
   Přístup k log souborům <./Usage/Accessing-logfiles.md>
   Vyhlazování glykémií v xDripu <./Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md>
   AccuChek Combo tipy pro základní použití <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md>
   Odstraňování potíží s NSClientem <./Usage/Troubleshooting-NSClient.md>
   Android auto <./Usage/Android-auto.md>
   Huawei phones special configuration <./Usage/huawei.md>
   Automation <./Usage/Automation.md>

Kam pro pomoc 
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Užitečné zdroje informací než začnete <./Where-To-Go-For-Help/Background-reading.md>
   Kam jít pro pomoc <./Where-To-Go-For-Help/Connect-with-other-users.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Resources/Reference
            
   Resources <./Resources/index>
   For Clinicians <./Resources/clinician-guide-to-AndroidAPS>

Jak pomoci
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Jak mohu pomoci <./Getting-Started/How-can-I-help.md>
   Jak pomoci s překladem <./translations.md>
   Jak editovat wiki <./make-a-PR>
