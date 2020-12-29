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

Versleuteld instellingen-bestand
==================================================
Het bestand met jouw instellingen wordt versleuteld opgeslagen. Het masterwachtwoord kun je instellen via `Instellingen <../Configuration/Voorkeuren.html#masterwachtwoord>`_ .


Exporteer instellingen
==================================================
* Hamburgermenu (3 horizontale strepen in linkerbovenhoek)
* Onderhoud
* Exporteer instellingen

.. image:: ../images/AAPS_ExportSettings1.png
  :alt: AndroidAPS instellingen exporteren 1

* Datum en tijd van de export zal automatisch worden toegevoegd aan de bestandsnaam en wordt weergegeven samen met de bestandslocatie.
* Klik op "OK'.
* Voer `masterwachtwoord <../Configuration/Preferences.html#masterwachtwoord>`_ in en klik op 'OK'.
* Succesvolle export zal worden getoond onderaan het scherm.

.. image:: ../images/AAPS_ExportSettings2.png
  :alt: AndroidAPS instellingen exporteren 2
  
Importeer instellingen
==================================================
* Hamburgermenu (3 horizontale strepen in linkerbovenhoek)
* Onderhoud
* Importeer instellingen

.. image:: ../images/AAPS_ImportSettings1.png
  :alt: AndroidAPS import settings 1

* Alle bestanden in de map AAPS/preferences/ op jouw telefoon worden getoond in de lijst.
* Selecteer bestand.
* Bevestig door op 'OK' te klikken.
* Voer `masterwachtwoord <../Configuration/Preferences.html#masterwachtwoord>`_ in en klik op 'OK'.

.. image:: ../images/AAPS_ImportSettings2.png
  :alt: AndroidAPS instellingen importeren 2

* Je ziet info over het instellingen bestand.
* Laatste optie om het importeren te annuleren.
* Klik op 'Importeren'.
* Bevestig door op 'OK' te klikken.
* AAPS wordt opnieuw gestart om geïmporteerde instellingen te activeren.

Tip voor Dana RS gebruikers
------------------------------------------------------------
* Omdat ook de instellingen voor het verbinden met je pomp zijn mee-geïmporteerd, zal jouw nieuwe telefoon denken dat hij de pomp al "kent" en dus geen Bluetooth verbindingsverzoek doen. 
* Daarom moet je handmatig een Bluetooth verbinding maken tussen jouw nieuwe telefoon en je pomp. Dit kun je doen via het Bluetooth menu van jouw telefoon.

Instellingen importeren uit vorige versies (vóór AAPS 2.7)
------------------------------------------------------------
* Het "oude" instellingenbestand (genaamd 'AndroidAPSPreferences' - zonder extensie) moet in de hoofdmap van je smartphone (/storage/emulated/0) staan.
* Zet het "oude" bestand niet in dezelfde map als de nieuwe geëxporteerde instellingen (AAPS/preferences).
* Je vindt het "oude" bestand onderaan de lijst in het importeer-dialoogvenster.

Instellingen bestand overzetten
==================================================
* De beste manier om het instellingenbestand naar een nieuwe telefoon over te brengen is via een USB-kabel of cloudservice (bijv. Google Drive).
* Handleidingen kun je vinden op het web, bijv. `Android help pagina's <https://support.google.com/android/answer/9064445?hl=en>`_.
* Als het niet wil lukken om het bestand over te zetten, probeer het dan op een andere manier (er zijn meerdere opties).
