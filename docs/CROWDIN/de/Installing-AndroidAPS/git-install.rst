Installiere git
**************************************************
Windows
==================================================
1. Git herunterladen
--------------------------------------------------
* **Du musst immer online sein, da Android Studio verschiedene Updates herunterlädt!**
* Jede git Version sollte funktionieren. Zum Beispiel `https://git-scm.com/download/win <https://git-scm.com/download/win>`_.
* Notiere Dir den Installationspfad. Du brauchst diesen im nächsten Schritt.

.. image:: ../images/Update_GitPath.png
  :alt: Git Installationspfad

2. Pfad zu git in Android Studio festlegen
--------------------------------------------------
* Open File > Settings 

  .. image:: ../images/Update_GitSettings1.png
    :alt: Android Studio - Einstellungen öffnen

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
* Use `search function <https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html>`_ in windows explorer to find "git.exe" if you are unsure where it can be found. Du brauchst die git.exe, die im Ordner \bin\ gespeichert ist.
* Select path to git.exe and make sure you selected the one in ** \bin\ ** folder (3.) and click "OK" (4.).
* Close settings window by clicking "OK" button (5.).

  .. image:: ../images/AndroidStudio361_11.png
    :alt: Automatic git installation failed
 
3. Starte den Rechner neu
--------------------------------------------------
* Starte Deinen PC neu, um die Systemumgebung zu aktualisieren.

4. Prüfe die Einstellungen in Android Studio
--------------------------------------------------
* Öffne das Terminal-Fenster in Android Studio
* Gib "git --version" (ohne Anführungszeichen und zwei Minus-Zeichen vor version! - siehe Screenshot) ein und drücke Return

  .. image:: ../images/AndroidStudio_gitversion1.png
    :alt: git --version

* Wenn git installiert und richtig verbunden ist, erhältst Du eine Information über die installierte Version, die wie folgt aussieht:

  .. image:: ../images/AndroidStudio_gitversion2.png
    :alt: Ergebnis git-version

Mac
==================================================
* Jede git Version sollte funktionieren. Zum Beispiel `https://git-scm.com/download/mac <https://git-scm.com/download/mac>`_
* Verwende homebrew um git zu installieren: ```$ brew install git```.
* Details zur Installation von git findest Du in der `offiziellen git Dokumentation <https://git-scm.com/book/en/v2/Getting-Started-Installing-Git>`_.
* Wenn Du git über homebrew installierst, musst Du keine Einstellungen ändern. Im Fall der Fälle findest Du diese unter Android Studio - Preferences.
