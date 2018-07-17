Welcome to the Android APS documentation
==============================================

**What is AndroidAPS?**

AndroidAPS is an app that can communicate with bluetooth-enabled insulin pumps, and runs a version of OpenAPS "oref0" algorithm.

**Primary goals behind AndroidAPS:**

* modular app where is possible to easy add new modules without touching the rest of code
* app that allow localization
* app where we can easy select what will be included in final apk just by easy change and compilation
* app which support open and closed APS mode
* app where you can see how APS works: input params, result and final decision
* allow to add more APS algorithms and let user decide what to use
* app independent to pump driver and containing "Virtual pump" to allow users safely play with APS
* app with tight Nightscout integration
* app where is possible easy to add/remove constraints for user safety
* all-in-one app you need for managing T1D with APS and Nightscout

**What you need to get started:**

* An Android Smartphone with Android 5.0 or later. See `this spreadsheet <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_ for reports on how well a phone works with AndroidAPS.
* An app to receive CGM data: `xDrip <http://stephenblackwasalreadytaken.github.io/xDrip/>`_/ `xDrip+ <https://github.com/jamorham/xDrip-plus>`_, `Glimp <http://www.nightscout.info/wiki/welcome/nightscout-for-libre>`_ or `600SeriesAndroidUploader <https://github.com/pazaan/600SeriesAndroidUploader>`_
* `AndroidAPS <https://github.com/MilosKozak/AndroidAPS>`_ itself
* `Nightscout <https://github.com/nightscout/cgm-remote-monitor>`_ 0.10.2 or later
* A supported pump: Dana-R or Dana-RS Insulin Pump (unless you build your own driver for other insulin pump) or Accu-Chek Combo (currently in wider testing)
* A Continuous Glucose Monitor (CGM) data source: Dexcom G4/G5, Freestyle Libre, Eversense or Medtronic Guardian


.. note:: 
	**Disclaimer And Warning**

	* All information, thought, and code described here is intended for informational and educational purposes only. Nightscout currently makes no attempt at HIPAA privacy compliance. Use Nightscout and AndroidAPS at your own risk, and do not use the information or code to make medical decisions.

	* Use of code from github.com is without warranty or formal support of any kind. Please review this repository's LICENSE for details.

	* All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. Their use is for information purposes and does not imply any affiliation with or endorsement by them.

	Please note - this project has no association with and is not endorsed by: `SOOIL <http://www.sooil.com/eng/>`_, `Dexcom <http://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>`_.

Getting Started with AndroidAPS
----------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Safety First </EN/Getting-Started/Safety-first>
   Screenshots </EN/Getting-Started/Screenshots.md>
   Architcture, security implementation </EN/Getting-Started/Architecture-security-implementation.md>
   Phone </EN/Getting-Started/Phones.md>
   Pump choices </EN/Getting-Started/Pump-Choices.md>
   Future possible pump drivers  </EN/Getting-Started/Future-possible-Pump-Drivers.md>
   Glossary </EN/Getting-Started/Glossary.md>
   How to help </EN/Getting-Started/How-can-I-help.md>
   
  
How to Install AndroidAPS
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Building the APK </EN/Installing-AndroidAPS/Building-APK.md>
   How to update to a new version </EN/Installing-AndroidAPS/Update-to-new-version.md>
   Nightscout </EN/Installing-AndroidAPS/Nightscout.md>
 
   
Configuration 
---------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Config Builder </EN/Configuration/Config-Builder.md>
   BG Source</EN/Configuration/BG-Source.md>
   DanaR </EN/Configuration/DanaR-Insulin-Pump.md>
   DanaRS </EN/Configuration/DanaRS-Insulin-Pump.md>
   Accu Chek Combo </EN/Configuration/Accu-Chek-Combo-Pump.md>
   Watchfaces </EN/Configuration/Watchfaces.md>
   Preferences </EN/Configuration/Preferences.md>
   Sensitivity Detection and COB </EN/Configuration/Sensitivity-detection-and-COB.md>
   
Usage
------------
.. toctree::
   :maxdepth: 1
   :glob:
    
   Objectives </EN/Usage/Objectives.md>
   OpenAPS Features </EN/Usage/Open-APS-features.md>
   Profiles </EN/Usage/Profiles.md>
   SMS Commands </EN/Usage/SMS-Commands.md>
   Extended Carbs </EN/Usage/Extended-Carbs.md>
   Tips and Tricks </EN/Usage/Tips-and-tricks.md>
   Accessing log files </EN/Usage/Accessing-logfiles.md>
   Dev branch </EN/Usage/Dev-branch.md>

Where to go for help 
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Background reading & interesting articles </EN/Where-To-Go-For-Help/Background-reading.md>
   Where to go for help </EN/Where-To-Go-For-Help/Connect-with-other-users.md>


-.. toctree::
-   :maxdepth: 2
-   :glob:
-   :caption: CZ
-   
-   Instrukce v češtině  </CZ/Instrukce-v-češtině.md>
-
-.. toctree::
-   :maxdepth: 2
-   :glob:
-   :caption: DE - Zum Starten 
-
-   Home </DE/Zum-Starten/Home_de.md>
-   Sicherheit Geht Vor </DE/Zum-Starten/Sicherheit_Geht_Vor_de.md>
-   Screenshots </DE/Zum-Starten/Screenshots.md>
-   Objectives </DE/Zum-Starten/Objectives_de.md>
-   Glossar_de </DE/Zum-Starten/Glossar_de.md>
-
-.. toctree::
-   :maxdepth: 2
-   :glob:
-   :caption: DE - AndroidAPS installieren 
-
-   APK erstellen </DE/AndroidAPS-installieren/APK-erstellen_de.md>
-   Update auf neue Version </DE/AndroidAPS-installieren/Update-auf-neue-Version_de.md>
-
-.. toctree::
-   :maxdepth: 2
-   :glob:
-   :caption: DE - Einstellungen
-   
-   DanaR Insulinpumpe </DE/Einstellungen/DanaR-Insulinpumpe_de.md>
-   Accu-Chek Combo Pumpe </DE/Einstellungen/Accu-Chek-Combo-Pumpe.md>
-   Nightscout </DE/Einstellungen/Nightscout_de.md>
-   Blutzucker Quelle </DE/Einstellungen/Blutzucker-Quelle_de.md>
-   AndroidAPS </DE/Einstellungen/AndroidAPS_de.md>
-   Smartwatch Visualisierung </DE/Einstellungen/Smartwatch-Visualisierung_de.md>
-
-.. toctree::
-   :maxdepth: 2
-   :glob:
-   :caption: DE - Combo 
-
-   /DE/Combo/Accu-Check-Combo-Probleme-bei-der-Ersteinrichtung
-   /DE/Combo/Accu-Check-Combo-Issues-during-initial-setup
-   /DE/Combo/Accu-Chek-Combo-Issues-during-initial-setup
-   /DE/Combo/Accu-Chek-Combo-Probleme-bei-der-Ersteinrichtung
-   /DE/Combo/Accu-Chek-Combo-Tipps-and-Tricks
-   /DE/Combo/Accu-Chek-Combo-Tipps-beim-taeglichen-Gebrauch
-   /DE/Combo/Accu-Chek-Combo-Tipps-for-Basic-usage
-
-.. toctree::
-   :maxdepth: 2
-   :glob:
-   :caption: DE - Benutzung
-
-   OpenAPS Funktionen </DE/Benutzung/OpenAPS-Funktionen_de.md>
-   Circadian Percentage Profil </DE/Benutzung/Circadian-Percentage-Profil_de.md>
-   Profilfunktion ab Version 1.5_de </DE/Benutzung/Profilfunktion-ab-Version-1.5_de.md>
-   Profil "Free-Peak 0ref" </DE/Benutzung/Profil-Free-Peak-0ref..md>
-   SMS Commands </DE/Benutzung/SMS-Commands_de.md>
-   Tipps und Tricks </DE/Benutzung/Tipps-und-Tricks_de.md>
-   Tipps und Tricks zur Combo </DE/Benutzung/Tipps-und-Tricks-zur-Accu-Chek-Combo.md>
-   Logfiles erhalten </DE/Benutzung/Logfiles-erhalten_de.md>
-   Dev branch </DE/Benutzung/Dev-Branch_de.md>
-
-.. toctree::
-   :maxdepth: 2
-   :glob:
-   :caption: DE - Beispiel-Setups-und-Erfahrungsberichte
-
-   Beispiel-Konfiguration Galaxy S7, DanaR, Dexcom G5 und SWR50 </DE/Beispiel-Setups-und-Erfahrungsberichte/Beispiel-Konfiguration-Galaxy-S7-DanaR-Dexcom-G5-und-SWR50.md>
-
-.. toctree::
-   :maxdepth: 2
-   :glob:
-   :caption: Въведение
-
-   Начало </български/Въведение/Начало.md>
-   Безопасност </български/Въведение/Безопасност.md>
-   Скрийншоти </български/Въведение/Скрийншоти.md>
-   Архитектура, security implementation </български/Въведение/Архитектура-security-implementation.md>
-   Терминология </български/Въведение/Терминология.md>
-
-.. toctree::
-   :maxdepth: 2
-   :glob:
-   :caption: Инсталиране
-
-   Създаване на APK </български/Инсталиране/Създаване-на-APK.md>
-   Обновяване до последна версия </български/Инсталиране/Обновяване-до-последна-версия.md>
-
-.. toctree::
-   :maxdepth: 2
-   :glob:
-   :caption: Конфигуриране
-
-   DanaR инсулинова помпа </български/Конфигуриране/DanaR-инсулинова-помпа.md>
-   Найтскаут (Nightscout) </български/Конфигуриране/Найтскаут-(Nightscout).md>
-   Източник на данни за КЗ </български/Конфигуриране/Източник-на-данни-за-КЗ.md>
-   Опции </български/Конфигуриране/Опции.md>
-
-.. toctree::
-   :maxdepth: 2
-   :glob:
-   :caption: Използване
-
-   Open APS функции </български/Използване/Open-APS-функции.md>
-   Процентен профил </български/Използване/Процентен-профил.md>
-   Работа с профили след v1.5 </български/Използване/Работа-с-профили-след-v1.5.md>
-   SMS Команди </български/Използване/SMS-Команди.md>
-   Съвети и похвати </български/Използване/Съвети-и-похвати.md>
-   Достъп до лог файлове  </български/Използване/Достъп-до-лог-файлове.md>
-
-.. toctree::
-   :maxdepth: 2
-   :glob:
-   :caption: Източници
-
-   Връзка с други потребители </български/Източници/Връзка-с-други-потребители.md>
-
-.. toctree::
-   :maxdepth: 2
-   :glob:
-   :caption: Примери
-
-   Примерна конфигурация: Galaxy S7, DanaR, Dexcom G5 и SWR50 </български/Примери/Примерна-конфигурация-Galaxy-S7-DanaR-Dexcom-G5-и-SWR50.md>
-
-.. toctree::
-   :maxdepth: 2
-   :glob:
-   :caption: Подкрепа
-
-   Как може да помогна? </български/Подкрепа/Как-може-да-помогна.md>
-
