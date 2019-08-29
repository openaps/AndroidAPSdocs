Vítejte v dokumentaci k AndroidAPS
==============================================

AndroidAPS is an open source app for people living with insulin-dependent diabetes that acts as an artificial pancreas system (APS) on Google Android smartphones. Main components are different openAPS software algorithms which aim to do what a living pancreas does: keeping blood sugar levels within healthy limits by using automated insulin dosing (AID). The app does NOT use self-learning artificial intelligence. Instead, the calculations of AndroidAPS are based on the individual dosage algorithm and carbohydrate intake the user manually puts into his treatments profile, but they are verified by the system for safety reasons. The app is not provided in Google Play - you have to build it from source code by yourself for legal reasons.

Main components are:

.. image:: images/modules-female.png
  :alt: Components

For more details, please read on here.

Getting started
----------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Safety first <./Getting-Started/Safety-first.rst>
   What is a closed loop system <./Getting-Started/ClosedLoop.rst>
   What is a closed loop system with AndroidAPS <./Getting-Started/WhatisAndroidAPS.rst>  
   
   
What do I need 
-----------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Module <./Module/module.rst>

   
Jak nainstalovat AndroidAPS
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Vytvoření APK<./Installing-AndroidAPS/Building-APK.md>
   Jak aktualizovat na novou verzi <./Installing-AndroidAPS/Update-to-new-version.md>
   Poznámky k verzi <./Installing-AndroidAPS/Releasenotes.md>
   Dev branch <./Installing-AndroidAPS/Dev_branch.md>
   
   
Component Setup
---------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   CGM/FGM <./Configuration/BG-Source.md>
   Pumps <./Hardware/pumps.rst>
   Phones <./Hardware/Phoneconfig.rst>
   Nightscout <./Installing-AndroidAPS/Nightscout.md>
   xDrip+ Settings <./Configuration/xdrip.md>
   Smartwatch  <./Hardware/Smartwatch.rst>
   

Konfigurace 
---------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Config builder <./Configuration/Config-Builder.md>
   Nastavení <./Configuration/Preferences.md>
   
   
AndroidAPS Usage
------------
.. toctree::
   :maxdepth: 1
   :glob:
    
   AndroidAPS screens <./Getting-Started/Screenshots.md>
   Cíle <./Usage/Objectives.md>
   Možnosti OpenAPS <./Usage/Open-APS-features.md>   
   Sensitivity detection and COB <./Configuration/Sensitivity-detection-and-COB.md>
   Profily <./Usage/Profiles.md>
   Dočasné cíle <./Usage/temptarget.md>   
   Extended carbs <./Usage/Extended-Carbs.md>    
  
 
General Hints 
---------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Cestování s pumpou mezi časovými pásmy <./Usage/Timezone-traveling.md>
   Přístup k log souborům <./Usage/Accessing-logfiles.md>
   Tipy pro základní používání pumpy Accu-Chek Combo <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md> 
   Export/Import Settings <./Usage/ExportImportSettings.rst>
   

AndroidAPS for children
------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   SMS příkazy <./Usage/SMS-Commands.md>
   

Advanced 
----------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Android auto <./Usage/Android-auto.md>
   Automatizace <./Usage/automation.md>
   

Troubleshooting
------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
  
   NS-Client <./Usage/Troubleshooting-NSClient.md>
   Update <./Installing-AndroidAPS/Update-to-new-version.html#troubleshooting>
   Pumps <./FGT/Troubleshootingpumps.rst>


FAQ 
------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
  
   FAQ <./Getting-Started/FAQ.md>

   
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

Resources/Reference
------------
.. toctree::
   :maxdepth: 1
   :glob:
            
   Zdroje <./Resources/index>
   Pro lékaře <./Resources/clinician-guide-to-AndroidAPS>


Jak pomoci
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Jak mohu pomoci <./Getting-Started/How-can-I-help.md>
   How to translate the app and documentation <./translations.md>
   Jak editovat wiki <./make-a-PR>


.. poznámka:: 
	** Upozornění a varování **

	* Všechny informace, myšlenky a kód zde popsané slouží pouze pro informační a vzdělávací účely. Nightscout se nesnaží v současné době dodržovat zákon HIPAA. Používejte Nightscout a AndroidAPS na vaše vlastní riziko a nepoužívejte informace nebo kód k provádění lékařských rozhodnutí.

	* Použití kódu z github.com je bez záruky nebo formální podpory jakéhokoliv druhu. Přečtěte licenci z této repozitoře pro další podrobnosti.

	* Všechny názvy společností a produktů, ochranné známky, servisní známky, registrované ochranné známky a registrované servisní známky jsou vlastnictvím jejich příslušných držitelů. Jejich použití je pro informační účely a neznamená žádné spojení.

	Please note - this project has no association with and is not endorsed by: `SOOIL <http://www.sooil.com/eng/>`_, `Dexcom <http://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>`_ or `Medtronic <http://www.medtronic.com/>`_
