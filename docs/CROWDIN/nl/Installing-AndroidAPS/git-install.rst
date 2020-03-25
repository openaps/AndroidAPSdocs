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
* Open File > Settings 

  .. image:: ../images/Update_GitSettings1.png
    :alt: Android Studio - open instellingen

* Click the small triangle next to Version Control (1.) to open the sub-menu.
* Click Git (2.).
* Make sure update method "Merge" (3.) is selected.
* Check if Android Studio can locate path to git.exe automatically by clicking the button "Test" (4.)

  .. image:: ../images/AndroidStudio361_09.png
    :alt: Android Studio settings

* If automatic setting is successful git version will be displayed.
* Click "OK" in the dialog box (1.) and "OK" in the settings window (2.).

  .. image:: ../images/AndroidStudio361_10.png
    :alt: Automatic git installation succeeded

* In case file git.exe cannot be found click "OK" in the dialog box (1.) and then the button with the three dots (2.).
* Use `search function <https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html>`_ in windows explorer to find "git.exe" if you are unsure where it can be found. You are looking for git.exe located in \bin\ folder.
* Select path to git.exe and make sure you selected the one in ** \bin\ ** folder (3.) and click "OK" (4.).
* Close settings window by clicking "OK" button (5.).

  .. image:: ../images/AndroidStudio361_11.png
    :alt: Automatic git installation failed
 
3. Herstarten
--------------------------------------------------
* Start de PC opnieuw op om de systeemomgeving bij te werken.

4. Controleer de git-instellingen in Android Studio
--------------------------------------------------
* Open Terminal venster in Android Studio
* Enter "`git - -version`" (without quotation marks and no spaces between the two - [minus sign]!) and press Return

  .. image:: ../images/AndroidStudio_gitversion1.png
    :alt: git - -version

* Als git succesvol is geïnstalleerd en als het pad goed is ingevuld, dan zie je deze informatie over de geïnstalleerde versie:

  .. image:: ../images/AndroidStudio_gitversion2.png
    :alt: resultaat git-versie

Mac
==================================================
* Elke versie van Git zou moeten werken. Bijvoorbeeld `https://git-scm.com/download/mac <https://git-scm.com/download/mac>`_. Volg de instructies op die site om Git te installeren.
* Gebruik homebrew om git: ```$brew install git``` te installeren.
* Voor meer informatie over het installeren van git zie de `officiële git documentatie <https://git-scm.com/book/en/v2/Getting-Started-Installing-Git>` _.
* Als je git installeert via homebrew, hoef je niets aan de instellingen te wijzigen. Voor het geval je ze toch zoekt: je vind ze hier: Android Studio - Preferences.
