Welcome to the AndroidAPS documentation
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

   
AndroidAPS installieren
------------
.. toctree::
   :maxdepth: 1
   :glob:

   App aus Quellcode erstellen <./Installing-AndroidAPS/Building-APK.md>
   Update auf neue Version oder Branch <./Installing-AndroidAPS/Update-to-new-version.md>
   Release Notes <./Installing-AndroidAPS/Releasenotes.md>
   Dev branch (nur für Entwickler) <./Installing-AndroidAPS/Dev_branch.md>
   
   
Component Setup
---------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   CGM/FGM <./Configuration/BG-Source.md>
   Pumps <./Hardware/pumps.rst>
   Phones <./Hardware/Phoneconfig.rst>
   Nightscout Installation <./Installing-AndroidAPS/Nightscout.md>
   xDrip+ Settings <./Configuration/xdrip.md>
   Smartwatch  <./Hardware/Smartwatch.rst>
   

AndroidAPS einrichten 
---------------
.. toctree::
   :maxdepth: 1
    
   
   Config builder <./Configuration/Config-Builder.md>
   Einstellungen im Drei-Punkte-Menü <./Configuration/Preferences.md>
   
   
AndroidAPS Usage
------------
.. toctree::
   :maxdepth: 1
       
    
   AndroidAPS screens <./Getting-Started/Screenshots.md>
   Objectives (Ziele) <./Usage/Objectives.md>
   OpenAPS-Funktionen <./Usage/Open-APS-features.md>   
   Sensitivity detection and COB <./Configuration/Sensitivity-detection-and-COB.md>
   Profil Wechsel <./Usage/Profiles.md>
   Temporäre Ziele <./Usage/temptarget.md>   
   Extended carbs <./Usage/Extended-Carbs.md>    
  
 
General Hints 
---------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Zeitzonenwechsel auf Reisen <./Usage/Timezone-traveling.md>
   Logfiles erhalten <./Usage/Accessing-logfiles.md>
   Accu Chek Combo - Tipps <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md> 
   Export/Import Settings <./Usage/ExportImportSettings.rst>
   

AndroidAPS for children
------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   SMS-Befehle <./Usage/SMS-Commands.md>
   

Advanced 
----------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Android Auto <./Usage/Android-auto.md>
   Automatisierung <./Usage/automation.md>
   

Problembehandlung
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

   
Glossar
------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
  
   Glossar <./Getting-Started/Glossary.md>
  

Hilfe durch die Community 
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Nützliche Informationsquellen vor dem Start <./Where-To-Go-For-Help/Background-reading.md>
   Hilfe <./Where-To-Go-For-Help/Connect-with-other-users.md>

Resources/Reference
------------
.. toctree::
   :maxdepth: 1
   :glob:
            
   Informationsquellen <./Resources/index>
   Für Klinikpersonal <./Resources/clinician-guide-to-AndroidAPS>


Mithelfen in der Community
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Wie kann ich helfen? <./Getting-Started/How-can-I-help.md>
   How to translate the app and documentation <./translations.md>
   Am Wiki mitschreiben <./make-a-PR>
   Übersetzungs-Richtlinien <https://androidaps.readthedocs.io/en/l10n_master/DE/mithelfen/uebersetzungs-richtlinien.html>


.. note:: 
	**Disclaimer und Warnung**

	* Sämtliche Informationen, Gedanken und der Quellcode sind nur für informatorische und wissenschaftliche Zwecke. Nightscout erfüllt keinerlei Anforderungen des Datenschutzes im Gesundheitswesen. Verwenden Sie Nightscout und AndroidAPS auf eigenes Risiko und setzen Sie es nicht ein, um Behandlungsentscheidungen zu treffen.

	* Bei Nutzung des Quellcodes von github.com bestehen keinerlei Gewährleistungs- und Garantieansprüche. Es gibt keinen Support. Im Übrigen wird auf die Lizenz verwiesen, die im Repository abgerufen werden kann.

	* Sämtliche Produkt- und Herstellernamen, Handelsmarken, Dienstleistungsmarken, Warenzeichen und eingetragene Dienstleistungsmarken sind Eigentum ihrer jeweiligen Inhaber und werden nur zu Informationszwecken genutzt und nicht für Werbung oder Marketing. Ihre Verwendung dient nur zur Information und bedeutet weder, dass AAPS zu ihnen gehört, noch dass sie unterstützt werden.

	Please note - this project has no association with and is not endorsed by: `SOOIL <http://www.sooil.com/eng/>`_, `Dexcom <http://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>`_ or `Medtronic <http://www.medtronic.com/>`_
