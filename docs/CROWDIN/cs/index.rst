Vítejte v dokumentaci k AndroidAPS
==============================================

**Co je AndroidAPS?**

AndroidAPS je aplikace pro telefony se systémem Android a funguje jako systém umělé slinivky (APS; artificial pancreas system). Co je systém umělé slinivky? Jedná se o softwarový program, jehož účelem je simulovat chování zdravé slinivky: automaticky udržovat hladinu krevního cukru v optimálním rozmezí. APS to sice nedokáže dělat tak dobře, jako skutečná slinivka, avšak dokáže lidem s diabetem 1 typu usnadnit zvládání nemoci, a to za použití zařízení, která jsou běžně dostupná a softwaru, který je jednoduchý a bezpečný. Mezi tato zařízení patří systém pro kontinuální monitoring glykémie (CGM), který systému AndroidAPS předává informace o aktuální glykémii, a inzulinová pumpa, která je řízena pomocí AndroidAPS tak, aby vydávala správné množství inzulínu. Aplikace komunikuje s těmito zařízeními prostřednictvím technologie bluetooth. K výpočtu správného množství inzulínu využívá speciální algoritmus, neboli sadu pravidel, vyvinutý pro jiný systém umělé slinivky zvaný OpenAPS, který na celém světě používají tisíce lidí a eviduje miliony hodin používání. 

Upozornění: Systém AndroidAPS není v žádné zemi regulován žádným zdravotnickým orgánem. Používání AndroidAPS na vlastní osobě je čistě experimentální. Vytvoření tohoto systému vyžaduje odhodlání a technické znalosti. Pokud na začátku nemáte technické znalosti, na konci je mít budete. Veškeré potřebné informace naleznete v této dokumentaci, jinde na internetu nebo je získáte od ostatních uživatelů -- můžete se jich zeptat prostřednictvím skupin na Facebooku nebo v jiných diskuzních fórech. Spousta lidí si úspěšně sestavila aplikaci AndroidAPS a nyní ji zcela bezpečně používá, nicméně je zcela nezbytné, aby každý uživatel:
* Sestavil aplikaci sám, aby skutečně pochopil, jak funguje
* Upravil potřebná nastavení dle svých konkrétních potřeb
* Správně obsluhoval systém a dohlížel na to, zda správně funguje
Jste-li připraveni přijmout tuto výzvu, čtěte dál. 

**Primární cíle AndroidAPS:**

* Aplikace obsahující řadu bezpečnostních opatření. Informace o bezpečnostních opatřeních algoritmů, známých jako oref0 a oref1, najdete zde (https://openaps.org/reference-design/)
* Jediná aplikace potřebná pro management diabetu 1. typu podporující umělou slinivku a Nightscout
* Aplikace, kterou lze v snadno rozšiřovat podle potřeb každého uživatele
* Aplikace dostupná v různých verzích pro konkrétní země a jazyky
* Aplikace, kterou lze používat v režimu otevřené i uzavřené smyčky
* Aplikace, jejíž fungování je zcela transparentní: uživatelé mohou zadat parametry, uvidí výsledek a mohou provést konečné rozhodnutí
* Aplikace, která není závislá na ovladači pro konkrétní pumpu a obsahuje možnost použít „virtuální pumpu“, takže s ní uživatelé mohou bezpečně experimentovat, než ji skutečně začnou používat 
* Aplikace podporující těsnou integraci s Nightscoutem
* Aplikace, u které řídí bezpečnostní omezení sám uživatel 

**Co potřebuji, abych mohl začít:**

* Smartphone se systémem Android 5.0 nebo novějším. Viz seznam <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>, kde najdete informace o tom, které telefony fungují s AndroidAPS nejlépe.
* Senzor pro kontinuální monitoring glykémie (CGM): Dexcom G4/G5/G6, Freestyle Libre, Eversense, Medtronic Guardian nebo PocTech
* Aplikaci pro příjem glykémií z CGM: `xDrip <http://stephenblackwasalreadytaken.github.io/xDrip/>`_/ `xDrip+ <https://jamorham.github.io/#xdrip-plus>`_, `Glimp <https://play.google.com/store/apps/details?id=it.ct.glicemia>`_ , `upravená aplikace G5 <https://github.com/dexcomapp/dexcomapp>`_, `aplikace PochTech <https://play.google.com/store/apps/details?id=jp.co.unitec.concretemanagement&hl=gsw>`_ nebo `600SeriesAndroidUploader <http://pazaan.github.io/600SeriesAndroidUploader/>`_
* Samotnou aplikaci `AndroidAPS <https://github.com/MilosKozak/AndroidAPS>`_ nainstalovanou v telefonu
* `Nightscout cgm-remote-monitor <http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku>`_ 0.10.2 nebo novější
* Podporovanou pumpu: Dana-R nebo Dana-RS od společnosti Sooil, Accu-Chek Combo nebo Insight od společnosti Roche (pokud si neuděláte vlastní ovladače pro jinou inzulinovou pumpu)


.. poznámka:: 
	** Upozornění a varování **

	* Všechny informace, myšlenky a kód zde popsané slouží pouze pro informační a vzdělávací účely. Nightscout se nesnaží v současné době dodržovat zákon HIPAA. Používejte Nightscout a AndroidAPS na vaše vlastní riziko a nepoužívejte informace nebo kód k provádění lékařských rozhodnutí.

	* Použití kódu z github.com je bez záruky nebo formální podpory jakéhokoliv druhu. Přečtěte licenci z této repozitoře pro další podrobnosti.

	* Všechny názvy společností a produktů, ochranné známky, servisní známky, registrované ochranné známky a registrované servisní známky jsou vlastnictvím jejich příslušných držitelů. Jejich použití je pro informační účely a neznamená žádné spojení.

	Vezměte prosím na vědomí - tento projekt nemá žádnou spojitost s a není žádným způsobem schválený: `SOOIL <http://www.sooil.com/eng/>` _, `Dexcom <http://www.dexcom.com/>'`_, `Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>` _.

. DANGER:: 
   **IMPORTANT SAFETY NOTICE**

   The foundation of AndroidAPS safety features discussed in this documentation is built on the safety features of the hardware used to build your system. It is critically important that you only use a tested, fully functioning FDA or CE approved insulin pump and CGM for closing an automated insulin dosing loop. Hardware or software modifications to these components can cause unexpected insulin dosing, causing significant risk to the user. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, *do not use* these for creating an AndroidAPS system.

   Additionally, it is equally important to only use original supplies such as inserters, cannulas and insulin containers approved by the manufacturer for use with your pump or CGM. Using untested or modified supplies can cause CGM inaccuracy and insulin dosing errors. Insulin is highly dangerous when misdosed - please do not play with your life by hacking with your supplies.

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
   Ukázkový systém: telefon Samsung S7, pumpa Dana-R, senzor Dexcom G5 a hodinky Sony Smartwatch <./Getting-Started/Sample-Setup.md>
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
   Dev branch <./Installing-AndroidAPS/Dev_branch.md>
   Nightscout <./Installing-AndroidAPS/Nightscout.md>
   
Konfigurace 
---------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Konfigurace <./Configuration/Config-Builder.md>
   Zdroj glykémií <./Configuration/BG-Source.md>
   Dexcom G6 hints <./Configuration/Dexcom.md>
   Pumpa Dana-R <./Configuration/DanaR-Insulin-Pump.md>
   Pumpa Dana-RS <./Configuration/DanaRS-Insulin-Pump.md>
   Pumpa Accu-Chek Combo <./Configuration/Accu-Chek-Combo-Pump.md>
   Pumpa Accu-Chek Insight <./Configuration/Accu-Chek-Insight-Pump.md>
   Hodinky <./Configuration/Watchfaces.md>
   Nastavení <./Configuration/Preferences.md>
   Detekce senzitivity a COB <./Configuration/Sensitivity-detection-and-COB.md>
   xDrip+ settings <./Configuration/xdrip.md>
   
Použití
------------
.. toctree::
   :maxdepth: 1
   :glob:
    
   Cíle <./Usage/Objectives.md>
   Možnosti OpenAPS <./Usage/Open-APS-features.md>
   Profily <./Usage/Profiles.md>
   Dočasné cíle <./Usage/temptarget.md>
   SMS příkazy <./Usage/SMS-Commands.md>
   Prodloužené sacharidy (eCarbs) <./Usage/Extended-Carbs.md>
   Cestování s pumpou mezi časovými pásmy <./Usage/Timezone-traveling.md>
   Přístup k log souborům <./Usage/Accessing-logfiles.md>
   Vyhlazování glykémií v xDripu <./Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md>
   Tipy pro základní používání pumpy Accu-Chek Combo <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md>
   Odstraňování potíží s NSClientem <./Usage/Troubleshooting-NSClient.md>
   Android auto <./Usage/Android-auto.md>
   Speciální nastavení pro telefony Huawei <./Usage/huawei.md>
   Jelly Pro - optimalizace výdrže baterie <./Usage/jelly.md>
   Automatizace <./Usage/automation.md>

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
            
   Zdroje <./Resources/index>
   Pro lékaře <./Resources/clinician-guide-to-AndroidAPS>

Jak pomoci
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Jak mohu pomoci <./Getting-Started/How-can-I-help.md>
   Jak pomoci s překladem <./translations.md>
   Jak editovat wiki <./make-a-PR>
