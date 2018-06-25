Bienvenido a la documentación AndroidAPS
==============================================

**Qué es AndroidAPS?**

AndroidAPS es una app que puede comunicar las bombas de insulina con bluetooth y ejecuta una versión del algoritmo “oref0” de OpenAPS.

** Objetivos principales **

* App modular que sea usable para añadir más módulos sin tocar el resto de código 
* App que permita la localización
* App que permita la fácil selección de lo que queremos que la apk final
* App que permita lazo abierto y cerrado de APS
* App donde puedas ver cómo funciona APS: los parámetros de entrada, los resultados y las decisiones que toma. 
* Que permita añadir más algoritmos y permita usuario decidir cuál usar
* App independiente del driver de la bomba y que contenga una bomba virtual que permita al usuario testear con seguridad APS
* App con integración con Nightscout
* App en la que sea posible añadir o eliminar limitaciones para seguridad del usuario
* Todo en uno-app que necesitas para manejar la diabetes tipo 1 con APS y Nightscout


**Qué necesitas para empezar:**

* Teléfono Android 5.0 o superior. Revisar esta `_lista <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`
* Una app que reciba datos de tu MCG: `xDrip <http://stephenblackwasalreadytaken.github.io/xDrip/>`_/ `xDrip+ <https://github.com/jamorham/xDrip-plus>`_, `Glimp <http://www.nightscout.info/wiki/welcome/nightscout-for-libre>`_ or `600SeriesAndroidUploader <https://github.com/pazaan/600SeriesAndroidUploader>`_
* `AndroidAPS <https://github.com/MilosKozak/AndroidAPS>`_ itself
* `Nightscout <https://github.com/nightscout/cgm-remote-monitor>`_ 0.10.2 o posterior
* Bomba de insulina compatible: Dana-R, Dana-RS o Accu-Check Combo
* Un monitor continuo de glucosa (MCG): Dexcom G4/G5, Freestyle Libre, Eversense o Medtronic Guardian


.. note:: 
	**Disclaimer And Warning**

	* All information, thought, and code described here is intended for informational and educational purposes only. Nightscout currently makes no attempt at HIPAA privacy compliance. Use Nightscout and AndroidAPS at your own risk, and do not use the information or code to make medical decisions.

	* Use of code from github.com is without warranty or formal support of any kind. Please review this repository's LICENSE for details.

	* All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. Their use is for information purposes and does not imply any affiliation with or endorsement by them.

	Please note - this project has no association with and is not endorsed by: `SOOIL <http://www.sooil.com/eng/>`_, `Dexcom <http://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>`_.


.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Getting Started with AndroidAPS

   Safety First </Getting-Started/Safety-first>
   Screenshots </Getting-Started/Screenshots.md>
   Architcture, security implementation </Getting-Started/Architecture-security-implementation.md>
   Phone </Getting-Started/Phones.md>
   Pump choices </Getting-Started/Pump-Choices.md>
   Future possible pump drivers  </Getting-Started/Future-possible-Pump-Drivers.md>
   Glossary </Getting-Started/Glossary.md>
   How to help </Getting-Started/How-can-I-help.md>
   
.. toctree::
   :maxdepth: 1
   :glob:
   :caption: How to Install AndroidAPS

   Building the APK </Installing-AndroidAPS/Building-APK.md>
   How to update to a new version </Installing-AndroidAPS/Update-to-new-version.md>
   Nightscout </Installing-AndroidAPS/Nightscout.md>
 
   
.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Configuration 
   
   Config Builder </Configuration/Config-Builder.md>
   BG Source</Configuration/BG-Source.md>
   DanaR </Configuration/DanaR-Insulin-Pump.md>
   DanaRS </Configuration/DanaRS-Insulin-Pump.md>
   Accu Chek Combo </Configuration/Accu-Chek-Combo-Pump.md>
   Watchfaces </Configuration/Watchfaces.md>
   Preferences </Configuration/Preferences.md>
   Sensitivity Detection and COB </Configuration/Sensitivity-detection-and-COB.md>
   
.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Usage
    
   Objectives </Usage/Objectives.md>
   OpenAPS Features </Usage/Open-APS-features.md>
   Profiles </Usage/Profiles.md>
   SMS Commands </Usage/SMS-Commands.md>
   Extended Carbs </Usage/Extended-Carbs.md>
   Tips and Tricks </Usage/Tips-and-tricks.md>
   Accessing log files </Usage/Accessing-logfiles.md>
   Dev branch </Usage/Dev-branch.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Where to go for help 

   Background reading & interesting articles </Where-To-Go-For-Help/Background-reading.md>
   Where to go for help </Where-To-Go-For-Help/Connect-with-other-users.md>

.. toctree::
   :maxdepth: 2
   :glob:
   :caption: CZ
   
   Instrukce v češtině  </CZ/Instrukce-v-češtině.md>

.. toctree::
   :maxdepth: 2
   :glob:
   :caption: DE - Zum Starten 

   Home_de </DE/Zum-Starten/Home_de.md>
   Sicherheit Geht Vor </DE/Zum-Starten/Sicherheit_Geht_Vor_de.md>
   Screenshots </DE/Zum-Starten/Screenshots.md>
   Objectives_de </DE/Zum-Starten/Objectives_de.md>
   Glossar_de </DE/Zum-Starten/Glossar_de.md>

.. toctree::
   :maxdepth: 2
   :glob:
   :caption: DE - AndroidAPS installieren 

   APK erstellen_de </DE/AndroidAPS-installieren/APK-erstellen_de.md>
   Update auf neue Version_de </DE/AndroidAPS-installieren/Update-auf-neue-Version_de.md>

.. toctree::
   :maxdepth: 2
   :glob:
   :caption: DE - Einstellungen
   
   DanaR Insulinpumpe_de </DE/Einstellungen/DanaR-Insulinpumpe_de.md>
   Accu-Chek Combo Pumpe </DE/Einstellungen/Accu-Chek-Combo-Pumpe.md>
   Nightscout_de </DE/Einstellungen/Nightscout_de.md>
   Blutzucker Quelle_de </DE/Einstellungen/Blutzucker-Quelle_de.md>
   AndroidAPS_de </DE/Einstellungen/AndroidAPS_de.md>
   Smartwatch Visualisierung_de </DE/Einstellungen/Smartwatch-Visualisierung_de.md>

.. toctree::
   :maxdepth: 2
   :glob:
   :caption: DE - Combo 

   /DE/Combo/Accu-Check-Combo-Probleme-bei-der-Ersteinrichtung
   /DE/Combo/Accu-Check-Combo-Issues-during-initial-setup
   /DE/Combo/Accu-Chek-Combo-Issues-during-initial-setup
   /DE/Combo/Accu-Chek-Combo-Probleme-bei-der-Ersteinrichtung
   /DE/Combo/Accu-Chek-Combo-Tipps-and-Tricks
   /DE/Combo/Accu-Chek-Combo-Tipps-beim-taeglichen-Gebrauch
   /DE/Combo/Accu-Chek-Combo-Tipps-for-Basic-usage

.. toctree::
   :maxdepth: 2
   :glob:
   :caption: DE - Benutzung

   OpenAPS Funktionen_de </DE/Benutzung/OpenAPS-Funktionen_de.md>
   Circadian Percentage Profil_de </DE/Benutzung/Circadian-Percentage-Profil_de.md>
   Profilfunktion ab Version 1.5_de </DE/Benutzung/Profilfunktion-ab-Version-1.5_de.md>
   Profil "Free-Peak 0ref" </DE/Benutzung/Profil-Free-Peak-0ref..md>
   SMS Commands_de </DE/Benutzung/SMS-Commands_de.md>
   Tipps und Tricks_de </DE/Benutzung/Tipps-und-Tricks_de.md>
   Tipps und Tricks zur Combo </DE/Benutzung/Tipps-und-Tricks-zur-Accu-Chek-Combo.md>
   Logfiles erhalten_de </DE/Benutzung/Logfiles-erhalten_de.md>
   Dev branch_de </DE/Benutzung/Dev-Branch_de.md>

.. toctree::
   :maxdepth: 2
   :glob:
   :caption: DE - Beispiel-Setups-und-Erfahrungsberichte

   Beispiel-Konfiguration Galaxy S7, DanaR, Dexcom G5 und SWR50 </DE/ Beispiel-Setups-und-Erfahrungsberichte/Beispiel-Konfiguration-Galaxy-S7-DanaR-Dexcom-G5-und-SWR50.md>

.. toctree::
   :maxdepth: 2
   :glob:
   :caption: Въведение

   Начало </български/Въведение/Начало.md>
   Безопасност </български/Въведение/Безопасност.md>
   Скрийншоти </български/Въведение/Скрийншоти.md>
   Архитектура, security implementation </български/Въведение/Архитектура-security-implementation.md>
   Терминология </български/Въведение/Терминология.md>

.. toctree::
   :maxdepth: 2
   :glob:
   :caption: Инсталиране

   Създаване на APK </български/Инсталиране/Създаване-на-APK.md>
   Обновяване до последна версия </български/Инсталиране/Обновяване-до-последна-версия.md>

.. toctree::
   :maxdepth: 2
   :glob:
   :caption: Конфигуриране

   DanaR инсулинова помпа </български/Конфигуриране/DanaR-инсулинова-помпа.md>
   Найтскаут (Nightscout) </български/Конфигуриране/Найтскаут-(Nightscout).md>
   Източник на данни за КЗ </български/Конфигуриране/Източник-на-данни-за-КЗ.md>
   Опции </български/Конфигуриране/Опции.md>

.. toctree::
   :maxdepth: 2
   :glob:
   :caption: Използване

   Open APS функции </български/Използване/Open-APS-функции.md>
   Процентен профил </български/Използване/Процентен-профил.md>
   Работа с профили след v1.5 </български/Използване/Работа-с-профили-след-v1.5.md>
   SMS Команди </български/Използване/SMS-Команди.md>
   Съвети и похвати </български/Използване/Съвети-и-похвати.md>
   Достъп до лог файлове  </български/Използване/Достъп-до-лог-файлове.md>

.. toctree::
   :maxdepth: 2
   :glob:
   :caption: Източници

   Връзка с други потребители </български/Източници/Връзка-с-други-потребители.md>

.. toctree::
   :maxdepth: 2
   :glob:
   :caption: Примери

   Примерна конфигурация: Galaxy S7, DanaR, Dexcom G5 и SWR50 </български/Примери/Примерна-конфигурация-Galaxy-S7-DanaR-Dexcom-G5-и-SWR50.md>

.. toctree::
   :maxdepth: 2
   :glob:
   :caption: Подкрепа

   Как може да помогна? </български/Подкрепа/Как-може-да-помогна.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: How to edit these docs

   Instructions to make a PR </make-a-PR>
