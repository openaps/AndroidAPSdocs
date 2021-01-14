Sveiki atvykę į AndroidAPS dokumentaciją
==================================================

AndroidAPS yra atvirojo kodo programa Google Android išmaniesiems telefonams, kuri veikia kaip dirbtinė kasa (vadinamoji dirbtinė kasos sistema - DKS) insuliną leidžiantiesiems pacientams. Pagrindiniai komponentai yra įvairūs OpenAPS programinės įrangos algoritmai, kurie, kaip manoma, daro tiksliai tai, ką daro tikroji kasa: palaiko sveiką cukraus kiekį kraujyje, naudodamiesi automatiniu insulino dozavimu (AID). Be to, naudojimui būtinos bent jau palaikomos insulino pompos, turinčios CE ženklą, ir nuolatiniai glukozės jutikliai. 

Programa neturi savarankiško mokymosi dirbtinio intelekto. Vietoje to, AndroidAPS skaičiavimai grindžiami individualiais terapijos veiksniais ir angliavandenių kiekiais, kuriuos vartotojas rankiniu būdu įveda į savo terapijos profilį. Šiuos įrašus sistema patikrina saugumo sumetimais. 

Programa nesiūloma Google Play sistemoje - jūs turite ją sukurti patys iš šaltinio kodo dėl teisinių priežasčių.

Pagrindinės sudedamosios dalys yra:

.. image:: images/modules-female.png
  :alt: Komponentai

Norėdami gauti daugiau informacijos, prašome perskaityti čia.

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Pradėkite

   Saugumas pirmiausia <./Getting-Started/Safety-first.rst>
   What is a closed loop system <./Getting-Started/ClosedLoop.rst>
   What is a closed loop system with AndroidAPS <./Getting-Started/WhatisAndroidAPS.rst>  
   Dokumentacijos atnaujinimai ir pakeitimai <./Getting-Started/WikiUpdate.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: What do I need?

   Moduliai <./Module/module.rst>
   Pavyzdinė Sąranka <./Getting-Started/Sample-Setup.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Kaip įdiegti AndroidAPS

   Android programos (APK) kūrimas <./Installing-AndroidAPS/Building-APK.md>
   Atnaujinimas į naują versiją ar atšaką <./Installing-AndroidAPS/Update-to-new-version.md>
   Patikrinimas po atnaujinimo į AAPS 2.7 <./Installing-AndroidAPS/update2_7.rst>
   Git įdiegimas <./Installing-AndroidAPS/git-install.rst>
   * Android Studio trikčių šalinimas <./Installing-AndroidAPS/troubleshooting_androidstudio.rst>
   Atnaujinimų pastabos <./Installing-AndroidAPS/Releasenotes.rst>
   Kūrėjo versija <./Installing-AndroidAPS/Dev_branch.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Komponentų Nustatymas

   Glikemijos duomenų šaltiniai <./Configuration/BG-Source.rst>
   xDrip Nustatymai <./Configuration/xdrip.md>
   Pompos <./Hardware/pumps.rst>
   Telefonai <./Hardware/Phoneconfig.rst>
   Nightscout nustatymas <./Installing-AndroidAPS/Nightscout.md>
   Išmanieji laikrodžiai <./Hardware/Smartwatch.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Konfigūracija

   Konfigūratorius <./Configuration/Config-Builder.md>
   Nustatymai <./Configuration/Preferences.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: AndroidAPS naudojimas

   AndroidAPS ekranai <./Getting-Started/Screenshots.md>
   Tikslai <./Usage/Objectives.rst>
   OpenAPS funkcijos <./Usage/Open-APS-features.md>   
   Aktyvių angliavandenių skaičiavimas <./Usage/COB-calculation.rst>
   Jautrumo aptikimas <./Configuration/Sensitivity-detection-and-COB.md>
   Profilių perjungimas <./Usage/Profiles.md>
   Laikini tikslai <./Usage/temptarget.md>   
   Ištęsti angliavandeniai <./Usage/Extended-Carbs.rst>
   Automatizavimas <./Usage/Automation.rst>
   Priežiūros portalas (nutraukta) <./Usage/CPbefore26.rst>
   Įkėlimas į Open Human <./Configuration/OpenHumans.rst>
   Automatizavimas su 3-ios šalies aplikacijomis <./Usage/automationwithapp.md>
   Android Auto <./Usage/Android-auto.md>  

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Bendrieji Patarimai

   Keliavimas per laiko zonas su pompomis <./Usage/Timezone-traveling.md>
   Žurnalų pasiekimas <./Usage/Accessing-logfiles.md>
   Accu-Chek Combo patarimai bendram naudojimui <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md> 
   Eksportuoti / Importuoti Parametrus <./Usage/ExportImportSettings.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: AndroidAPS vaikams

   Nuotolinis stebėjimas <./Children/Children.rst>
   SMS komandos <./Children/SMS-Commands.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Trikčių šalinimas

   Trikčių šalinimas <./Usage/troubleshooting.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: DUK

   DUK <./Getting-Started/FAQ.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Terminų žodynas

   Terminų žodynas <./Getting-Started/Glossary.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Kur ieškoti pagalbos

   Naudingi ištekliai prieš pradedant <./Where-To-Go-For-Help/Background-reading.md>
   Kur kreiptis pagalbos <./Where-To-Go-For-Help/Connect-with-other-users.md>
   Dokumentacijos atnaujinimai ir pakeitimai <./Getting-Started/WikiUpdate.rst>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Medikams

   Medikams <./Resources/clinician-guide-to-AndroidAPS>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Kaip padėti

   Kaip padėti <./Getting-Started/How-can-I-help.md>
   Kaip išversti programėlę ir dokumentaciją <./translations.md>
   Kaip redaguoti dokumentaciją <./make-a-PR>


.. pastaba:: 
	**Atsakomybės Ir Įspėjimas**

	* Visa informacija, mintys ir šaltinio kodas yra skirti tik informaciniams ir moksliniams tikslams. Nightscout neatitinka jokių privatumo reikalavimų sveikatos priežiūros srityje. Savo rizika naudokite Nightscout ir AndroidAPS ir nenaudokite jų priimdami medicininius sprendimus.

	* Naudojant github.com šaltinio kodą, garantijos ir jokio oficialaus palaikymo nėra. Norėdami gauti daugiau informacijos, perskaitykite šios saugyklos LICENCIJĄ.

	* Visi gaminių ir gamintojų pavadinimai, prekės ženklai, paslaugų ženklai, prekių ženklai ir registruoti paslaugų ženklai yra atitinkamų savininkų nuosavybė ir naudojami tik informaciniais tikslais, o ne reklamai ar rinkodarai. Jie naudojami tik informaciniais tikslais ir nereiškia, kad AAPS priklauso jiems ir kad jie yra palaikomi.

	Atkreipkite dėmesį: Šis projektas nėra susijęs su ir jam nėra pritarę: `SOOIL <http://www.sooil.com/eng/>`_, `Dexcom <http://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>`_ ar `Medtronic <http://www.medtronic.com/>`_
