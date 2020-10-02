Instellingen exporteren & importeren
**************************************************

Wanneer zou ik mijn instellingen moeten exporteren?
==================================================
Wees voorbereid op onvoorziene omstandigheden. Je kunt belangrijke instellingen per ongeluk veranderen en problemen hebben om weer terug te gaan naar de juiste instellingen. Je telefoon kan stuk gaan of gestolen worden. Om makkelijk terug te keren naar instellingen die voor jou goed werkten (en ook: als je de Doelen die je eerder hebt afgerond, niet opnieuw wilt moeten doen) dan moet je jouw instellingen regelmatig exporteren.

Het is goed om jouw instellingen steeds te exporteren na het wijzigen van instellingen of na het voltooien van een Doel. 

Geëxporteerde instellingen moet je vervolgens kopiëren naar een cloudopslag, naar je computer of emailen naar jezelf. Zodat je jouw instellingen-bestand nog hebt wanneer je AAPS telefoon stuk gaat of gestolen wordt.

Op een Windows-10 computer ziet het er zo uit:
  
.. image:: ../images/AAPS_ExImportSettingsWin.png
  :alt: Telefoon-opslag bekijken via computer

Ge-exporteerde gegevens
==================================================
Onder andere de volgende gegevens uit jouw instellingen worden ge-exporteerd:

* `Automation <../Usage/Automation.html>`_ instellingen
* `Configurator <../Configuration/Config-Builder.html>`_ instellingen
* `Lokaal profiel <../Configuration/Config-Builder.html#lokaal-profiele-aanbevolen>`_ instellingen
* Jouw voortgang door de `Doelen <../Usage/Objectives.html>`_ incl. `examen resultaten <../Usage/Objectives.html#doel-3-bewijs-jouw-kennis>`_
* `Instellingen <../Configuration/Preferences.html>`_ incl. `NS Client-instellingen <../Configuration/Preferences.html#ns-client>`_

Encrypted backup format
==================================================
Settings backup is encrypted by a master password that can be set in `Preferences <../Configuration/Preferences.html#master-password>`_ .


Exporteer instellingen
==================================================
* Hamburgermenu (3 horizontale strepen in linkerbovenhoek)
* Onderhoud
* Exporteer instellingen

.. image:: ../images/AAPS_ExportSettings1.png
  :alt: AndroidAPS export settings 1

* Date and time of export will be added to the file name automatically and displayed together with the path.
* Click 'OK'.
* Enter `master password <../Configuration/Preferences.html#master-password>`_ and click 'OK'.
* Successful export will be prompted at bottom of the screen.

.. image:: ../images/AAPS_ExportSettings2.png
  :alt: AndroidAPS export settings 2
  
Importeer instellingen
==================================================
* Hamburgermenu (3 horizontale strepen in linkerbovenhoek)
* Onderhoud
* Importeer instellingen

.. image:: ../images/AAPS_ImportSettings1.png
  :alt: AndroidAPS import settings 1

* All files from folder AAPS/preferences/ on your phone will be shown in the list.
* Select file.
* Confirm import by clicking 'OK'.
* Enter `master password <../Configuration/Preferences.html#master-password>`_ and click 'OK'.

.. image:: ../images/AAPS_ImportSettings2.png
  :alt: AndroidAPS import settings 2

* Details on the preference file will be shown.
* Last option to cancel import.
* Click 'Import'.
* Confirm message by clicking 'OK'.
* AAPS will be restarted in order to activate imported preferences.

Note for Dana RS users
------------------------------------------------------------
* Omdat ook de instellingen voor het verbinden met je pomp zijn mee-geïmporteerd, zal jouw nieuwe telefoon denken dat hij de pomp al "kent" en dus geen Bluetooth verbindingsverzoek doen. 
* Please pair new phone and pump manually.

Import settings from previous versions (before AAPS 2.7)
------------------------------------------------------------
* The "old" settings file must be in root folder of your smartphone (/storage/emulated/0).
* Do not put the "old" file in the same folder as the new exported settings (AAPS/preferences).
* You will find the "old" file on the bottom of the list in the import dialogue.

Transfer settings file
==================================================
* Best way to transfer settings file to a new phone is via USB cable or cloud service (i.e. Google Drive).
* Manuals can be found on the web, i.e. `Android help pages <https://support.google.com/android/answer/9064445?hl=en>`_.
* If you experience problems with the transferred file try another way to transfer file.
