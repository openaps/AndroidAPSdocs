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
* Öffne File > Settings 

  .. image:: ../images/Update_GitSettings1.png
    :alt: Android Studio - Einstellungen öffnen

* Klicke auf das kleine Dreieck neben Version Control (1.), um das Untermenü zu öffnen.
* Git (2.) anklicken.
* Stelle sicher, dass die update method "Merge" (3.) ausgewählt ist.
* Prüfe durch klicken des Buttons "Test" (4.), ob Android Studio den Pfad zu git.exe automatisch ermitteln kann.

  .. image:: ../images/AndroidStudio361_09.png
    :alt: Android Studio settings

* Wenn die automatische Einstellung möglich ist, wird die Git-Version angezeigt.
* Klicke im Dialogfenster auf "OK" (1.) und dann im Einstellungsfenster nochmals auf "OK" (2.).

  .. image:: ../images/AndroidStudio361_10.png
    :alt: Automatische git Installation erfolgreich

* Falls git.exe nicht gefunden werden kann, schließe das Dialogfenster mit "OK" (1.) und klicke dann auf den Button mit den drei Punkten (2.).
* Du kannst auch die <a href="https://www.computerwoche.de/a/suchfunktion-optimal-nutzen,3331986,2">Suchfunktion  im Windows Explorer verwenden, um "git.exe" zu finden wenn Du Dir nicht sicher bist, wo diese gespeichert ist. Du brauchst die git.exe, die im Ordner \bin\ gespeichert ist.
* Select path to git.exe and make sure you selected the one in **\\bin\\** folder (3.) and click "OK" (4.).
* Schließe das Einstellungs-Fenster durch Klick auf "OK" (5.).

  .. image:: ../images/AndroidStudio361_11.png
    :alt: Automatische Git-Installation fehlgeschlagen
 
3. Starte den Rechner neu
--------------------------------------------------
* Starte Deinen PC neu, um die Systemumgebung zu aktualisieren.

4. Prüfe die Einstellungen in Android Studio
--------------------------------------------------
* Öffne das Terminal-Fenster in Android Studio
* Gib "`git - -version`" (ohne Anführungszeiten und ohne das Leerzeichen zwischen den zwei - [Minuszeichen]!) und drücke Return

  .. image:: ../images/AndroidStudio_gitversion1.png
    :alt: git - -version

* Wenn git installiert und richtig verbunden ist, erhältst Du eine Information über die installierte Version, die wie folgt aussieht:

  .. image:: ../images/AndroidStudio_gitversion2.png
    :alt: Ergebnis git-version

Mac
==================================================
* Jede git Version sollte funktionieren. Zum Beispiel `https://git-scm.com/download/mac <https://git-scm.com/download/mac>`_
* Verwende homebrew um git zu installieren: ```$ brew install git```.
* Details zur Installation von git findest Du in der `offiziellen git Dokumentation <https://git-scm.com/book/en/v2/Getting-Started-Installing-Git>`_.
* Wenn Du git über homebrew installierst, musst Du keine Einstellungen ändern. Im Fall der Fälle findest Du diese unter Android Studio - Preferences.
