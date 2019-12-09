Git installeren
**************************************************
Windows
==================================================
1. Git downloaden
--------------------------------------------------
* ** Je moet de hele tijd online zijn omdat Android Studio verschillende updates downloadt **
* Elke versie van Git zou moeten werken. Bijvoorbeeld <https://git-scm.com/download/win>https://git-scm.com/download/win. Volg de instructies op die site om Git te installeren.
* Onthoud of noteer in welke map Git op jouw computer geïnstalleerd wordt. Dat heb je nodig in de volgende stap.

.. image:: ../images/Update_GitPath.png
  :alt: Git locatie

2. Stel git path in Android Studio in
--------------------------------------------------
Laat Studio weten waar git.exe zich bevindt: File - Settings (Bestand - Instellingen) 

  .. image:: ../images/Update_GitSettings1.png
    :alt: Android Studio - open instellingen

* In het volgende venster: Versie Control - Git

* Kies het juiste pad: ... **/Git/bin** (inclusief /bin)

* Zorg ervoor dat de update methode "Merge" ("Samenvoegen") is geselecteerd.

  .. image:: ../images/Update_GitSettings2a.png
    :alt: Android Studio - GIT locatie
   
3. Herstarten
--------------------------------------------------
* Start de PC opnieuw op om de systeemomgeving bij te werken.

4. Controleer de git-instellingen in Android Studio
--------------------------------------------------
* Open Terminal venster in Android Studio
* Voer "git --version" (zonder aanhalingstekens!) in en druk op Return

  .. image:: ../images/AndroidStudio_gitversion1.png
    :alt: git-versie

* Als git succesvol is geïnstalleerd en als het pad goed is ingevuld, dan zie je deze informatie over de geïnstalleerde versie:

  .. image:: ../images/AndroidStudio_gitversion2.png
    :alt: resultaat git-versie

Mac
==================================================
* Elke versie van Git zou moeten werken. Bijvoorbeeld <https://git-scm.com/download/mac>https://git-scm.com/download/mac. Volg de instructies op die site om Git te installeren.
* Gebruik homebrew om git: ```$brew install git``` te installeren.
* Voor meer informatie over het installeren van git zie de `officiële git documentatie <https://git-scm.com/book/en/v2/Getting-Started-Installing-Git>` _.
* Als je git installeert via homebrew, hoef je niets aan de instellingen te wijzigen. Voor het geval je ze toch zoekt: je vind ze hier: Android Studio - Preferences.
