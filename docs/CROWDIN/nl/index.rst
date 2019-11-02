Welcome to the AndroidAPS documentation
==============================================

AndroidAPS is an open source app for people living with insulin-dependent diabetes that acts as an artificial pancreas system (APS) on Google Android smartphones. Main components are different openAPS software algorithms which aim to do what a living pancreas does: keeping blood sugar levels within healthy limits by using automated insulin dosing (AID). Additionally, you need at least a supported and FDA/CE approved insulin pump and continuous glucose meter. 

The app does NOT use self-learning artificial intelligence. Instead, the calculations of AndroidAPS are based on the individual dosage algorithm and carbohydrate intake the user manually puts into his treatments profile, but they are verified by the system for safety reasons. 

The app is not provided in Google Play - you have to build it from source code by yourself for legal reasons.

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
   Wiki updates & changes <./Getting-Started/WikiUpdate.rst>
   
   
What do I need 
-----------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Module <./Module/module.rst>

   
AndroidAPS installeren
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Bouwen van de app <./Installing-AndroidAPS/Building-APK.md>
   Bijwerken naar een nieuwe versie <./Installing-AndroidAPS/Update-to-new-version.md>
   Install git <./Installing-AndroidAPS/git-install.rst>
   Troubleshooting Android Studio <./Installing-AndroidAPS/troubleshooting_androidstudio.rst>
   Release notes <./Installing-AndroidAPS/Releasenotes.rst>
   Dev branch (voor ontwikkelaars) <./Installing-AndroidAPS/Dev-branch.md>
   
   
Component Setup
---------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   CGM/FGM <./Configuration/BG-Source.rst>
   xDrip Settings <./Configuration/xdrip.md>
   Pumps <./Hardware/pumps.rst>
   Phones <./Hardware/Phoneconfig.rst>
   Nightscout instellen <./Installing-AndroidAPS/Nightscout.md>
   Smartwatch  <./Hardware/Smartwatch.rst>
   

AndroidAPS instellingen 
---------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Config builder <./Configuration/Config-Builder.md>
   Instellingen <./Configuration/Preferences.md>
   
   
AndroidAPS Usage
------------
.. toctree::
   :maxdepth: 1
   :glob:
    
   AndroidAPS screens <./Getting-Started/Screenshots.md>
   Objectives <./Usage/Objectives2019.rst>
   OpenAPS functies <./Usage/Open-APS-features.md>   
   COB calculation <./Usage/COB-calculation.rst>
   Sensitivity detection <./Configuration/Sensitivity-detection-and-COB.md>
   Profiel wissel <./Usage/Profiles.md>
   Tijdelijk streefdoel <./Usage/temptarget.md>   
   Extended carbs <./Usage/Extended-Carbs.md>
   Automation <./Usage/Automation.rst>
  
 
General Hints 
---------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Wisselen van tijdzone <./Usage/Timezone-traveling.md>
   Toegang tot logbestanden <./Usage/Accessing-logfiles.md>
   AccuChek Combo - tips <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md> 
   Export/Import Settings <./Usage/ExportImportSettings.rst>
   

AndroidAPS for children
------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Remote monitoring <./Children/Children.rst>
   SMS commands <./Children/SMS-commands2019.rst>
   

Advanced 
----------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Android auto <./Usage/Android-auto.md>
   Automation with 3rd party apps <./Usage/automationwithapp.md>
   

Problemen oplossen
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

   
Veelgebruikte woordenlijst
------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
  
   Veelgebruikte woordenlijst <./Getting-Started/Glossary.md>
  

Waar je hulp kunt vinden 
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Leestips voordat je begint <./Where-To-Go-For-Help/Background-reading.md>
   Contact met anderen <./Where-To-Go-For-Help/Connect-with-other-users.md>
   Wiki updates & changes <./Getting-Started/WikiUpdate.rst>

For Clinicians
------------
.. toctree::
   :maxdepth: 1
   :glob:
            
   Voor zorgprofessionals <./Resources/clinician-guide-to-AndroidAPS>


Hoe je zelf kunt helpen
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Hoe kan je helpen <./Getting-Started/How-can-I-help.md>
   How to translate the app and wiki <./translations.md>
   De wiki verbeteren <./make-a-PR>


.. note:: 
	**Disclaimer en waarschuwing**

	* Alle informatie, gedachten, en de code die hier beschreven staan zijn alleen voor informatieve en educatieve doeleinden. Nightscout probeert zich op geen enkele wijze te houden aan gegevensbewaking van medische gegevens. Gebruik van Nightscout en AndroidAPS is op eigen risico, en gebruik de informatie of code niet om behandelbeslissingen te nemen.

	* Het gebruik van code van github.com is zonder enige garantie of formele ondersteuning. Verdere details zijn te vinden in de licentie, die te vinden is in de Repository op github.

	* Alle product-en bedrijfsnamen, handelsmerken, servicemerken, geregistreerde handelsmerken en geregistreerde dienstmerken zijn eigendom van hun respectievelijke houders. Hun gebruik is voor informatieve doeleinden en impliceert op geen enkele wijze een samenwerking met of goedkeuring van hen.

	Please note - this project has no association with and is not endorsed by: `SOOIL <http://www.sooil.com/eng/>`_, `Dexcom <http://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>`_ or `Medtronic <http://www.medtronic.com/>`_
