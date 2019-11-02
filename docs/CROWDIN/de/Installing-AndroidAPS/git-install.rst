Installiere git
*****
Windows
=====
1. Git herunterladen
-----
* **Du musst immer online sein, da Android Studio verschiedene Updates herunterlädt!**
* Jede git Version sollte funktionieren. Zum Beispiel `https://git-scm.com/download/win <https://git-scm.com/download/win>`_.
* Notiere Dir den Installationspfad. Du brauchst diesen im nächsten Schritt.

.. image:: ../images/Update_GitPath.png
  :alt: Git Installationspfad

2. Pfad zu git in Android Studio festlegen
-----
* In Android Studio musst Du den Pfad zu git.exe hinterlegen: File - Settings 

  .. image:: ../images/Update_GitSettings1.png
    :alt: Android Studio - Einstellungen öffnen

* Im nächsten Fenster: Version Control - Git

* Gib den kompletten Pfad an: ... **/Git/bin** (inklusive /bin)

* Stelle sicher, dass die update method "Merge" ausgewählt ist.

  .. image:: ../images/Update_GitSettings2a.png
    :alt: Android Studio - Pfad zu git
   
3. Starte den Rechner neu
-----
* Starte Deinen PC neu, um die Systemumgebung zu aktualisieren.

4. Prüfe die Einstellungen in Android Studio
-----
* Öffne das Terminal-Fenster in Android Studio
* Gib "git --version" (ohne Anführungszeiten!) ein und drücke Return

  .. image:: ../images/AndroidStudio_gitversion1.png
    :alt: git --version

* Wenn git installiert und richtig verbunden ist, erhältst Du eine Information über die installierte Version, die wie folgt aussieht:

  .. image:: ../images/AndroidStudio_gitversion2.png
    :alt: Ergebnis git-version

Mac
=====
* Jede git Version sollte funktionieren. Zum Beispiel `https://git-scm.com/download/mac <https://git-scm.com/download/mac>`_
* Verwende homebrew um git zu installieren: ```$ brew install git```.
* Details zur Installation von git findest Du in der `offiziellen git Dokumentation <https://git-scm.com/book/en/v2/Getting-Started-Installing-Git>`_.
* Wenn Du git über homebrew installierst, musst Du keine Einstellungen ändern. Im Fall der Fälle findest Du diese unter Android Studio - Preferences.
