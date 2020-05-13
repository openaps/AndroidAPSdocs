Git installeren
**************************************************
Windows
==================================================
1. Git downloaden
--------------------------------------------------
* ** Je moet de hele tijd online zijn omdat Android Studio verschillende updates downloadt **
* Elke versie van Git zou moeten werken. Bijvoorbeeld `https://git-scm.com/download/win <https://git-scm.com/download/win>`_. Volg de instructies op die site om Git te installeren.
* Onthoud of noteer in welke map Git op jouw computer geïnstalleerd wordt. Dat heb je nodig in de volgende stap.

.. image:: ../images/Update_GitPath.png
  :alt: Git locatie

2. Stel git path in Android Studio in
--------------------------------------------------
* Open File > Settings (Bestand > Instellingen) 

  .. image:: ../images/Update_GitSettings1.png
    :alt: Android Studio - open instellingen

* Klik op het driehoekje naast Version Control (1.) (Versiebeheer) om het submenu te openen.
* Klik op Git (2.).
* Zorg ervoor dat de update methode Merge (3.) (Samenvoegen) is geselecteerd.
* Controleer of Android Studio het pad naar git.exe automatisch heeft gevonden door te klikken op de knop "Test" (4.)

  .. image:: ../images/AndroidStudio361_09.png
    :alt: Android Studio instellingen

* Als hij hem heeft gevonden, zal het git versienummer worden getoond.
* Klik op "OK" in het dialoogvenster (1.) en "OK" in het instellingenvenster (2.).

  .. image:: ../images/AndroidStudio361_10.png
    :alt: Automatische installatie van git geslaagd

* Als hij het bestand git.exe niet heeft kunnen vinden klik "OK" in het dialoogvenster (1.) en dan de knop met de drie stipjes (2.).
* Gebruik `zoekfunctie in windows verkenner <https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html>`_ om "git.exe" te vinden als je niet zeker weet waar op jouw computer het git bestand staat. Je moet zoeken naar git.exe in een map die \bin\ heet.
* Selecteer het pad naar git.exe en zorg ervoor dat je de map hebt geselecteerd in de ** \bin\ ** map (3.) en klik op "OK" (4.).
* Sluit het instellingen venster door te klikken op de "OK" knop (5.).

  .. image:: ../images/AndroidStudio361_11.png
    :alt: Automatische installatie van git mislukt
 
3. Herstarten
--------------------------------------------------
* Start de PC opnieuw op om de systeemomgeving bij te werken.

4. Controleer de git-instellingen in Android Studio
--------------------------------------------------
* Open Terminal venster in Android Studio
* Voer "` git--version `" (zonder aanhalingstekens en geen spaties tussen de twee-[ minus teken]!) in en druk op Return

  .. image:: ../images/AndroidStudio_gitversion1.png
    :alt: git - -versie

* Als git succesvol is geïnstalleerd en als het pad goed is ingevuld, dan zie je deze informatie over de geïnstalleerde versie:

  .. image:: ../images/AndroidStudio_gitversion2.png
    :alt: resultaat git-versie

Mac
==================================================
* Elke versie van Git zou moeten werken. Bijvoorbeeld `https://git-scm.com/download/mac <https://git-scm.com/download/mac>`_. Volg de instructies op die site om Git te installeren.
* Gebruik homebrew om git: ```$brew install git``` te installeren.
* Voor meer informatie over het installeren van git zie de `officiële git documentatie <https://git-scm.com/book/en/v2/Getting-Started-Installing-Git>` _.
* Als je git installeert via homebrew, hoef je niets aan de instellingen te wijzigen. Voor het geval je ze toch zoekt: je vind ze hier: Android Studio - Preferences.
