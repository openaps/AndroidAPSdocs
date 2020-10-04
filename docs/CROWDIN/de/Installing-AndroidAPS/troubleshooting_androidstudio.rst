Fehlerbehebung für Android Studio
**************************************************
Verlorener Keystore
==================================================
Wenn Du beim Update von AndroidAPS den selben keystore verwendest, musst Du die Vorgängerversion von AAPS auf Deinem Smartphone nicht deinstallieren. Daher wird empfohlen, den keystore an einem sicheren Platz zu speichern.

Falls Du Deinen bisherigen keystore nicht mehr findest, kannst Du wie folgt vorgehen:

1. `Exportiere Deine Einstellungen <../Usage/ExportImportSettings.html#exportiere-die-einstellungen>`_ auf Deinem Smartphone.
2. Kopiere die Datei mit den Einstellungen von Deinem Smartphone auf einen externen Speicherort (z.B. Dein Computer, einen Cloud-Speicher-Dienst...).
3. Stelle sicher, dass die Datei "AndroidAPS Preferences" sicher gespeichert ist.
4. Erstelle die signierte apk-Datei der neuen Version wie auf der `Update Seite <../Installing-AndroidAPS/Update-to-new-version.html>`_ beschrieben.
5. Deinstallieren die Vorgängerversion von AAPS auf Deinem Smartphone.
6. Installiere die neue AAPS-Version auf Deinem Smartphone.
7. `Importiere Deine Einstellungen <../Usage/ExportImportSettings.html#exportieren-der-einstellungen>`_ - falls Du sie auf Deinem Smartphone nicht findest, kopiere sie einfach vom externen Speicherort auf das Smartphone.
8. Loope weiter!

Kotlin Compiler Warnung
==================================================
Wenn der Build erfolgreich abgeschlossen wurde, Du aber eine Warnung des 'Kotlin Compilers' erhältst, so kannst Du diese ignorieren. 

Die App wurde erfolgreich erstellt und kann auf das Smartphone übertragen werden.

.. image:: ../images/GIT_WarningIgnore.PNG
  :alt: Kotlin compiler warning ignorieren

Key was created with errors
==================================================
Beim Erstellen eines neuen Keystores zum Erstellen der signierten APK wird unter Windows möglicherweise die folgende Fehlermeldung angezeigt:

.. image:: ../images/AndroidStudio35SigningKeys.png
  :alt: Key was created with errors

Dies scheint ein Fehler in Android Studio 3.5.1 und seiner Java-Umgebung in Windows zu sein. Der Schlüssel wird korrekt erstellt, aber eine Empfehlung wird fälschlicherweise als Fehler angezeigt. Dies kann momentan ignoriert werden.

Could not download… / Offline Work
==================================================
Falls Du eine Fehlermeldung bekommst, die wie folgt oder ähnlich aussieht

.. image:: ../images/GIT_Offline1.jpg
  :alt: Warnung Download nicht möglich

stelle sicher, dass 'offline work' deaktiviert ist.

File -> Settings

.. image:: ../images/GIT_Offline2.jpg
  :alt: Settings offline work

Fehler: buildOutput.apkData must not be null
==================================================
Manchmal kann es sein, dass Du beim Erstellen der APK-Datei folgende Fehlermeldung bekommst:

  `Errors while building APK.`
   
  `Cause: buildOutput.apkData must not be null`

Dies ist ein bekannter Fehler in Android Studio 3.5 und wird wahrscheinlich erst in Android Studio 3.6 behoben. Drei mögliche Vorgehensweisen:

1. Lösche manuell die drei Build-Ordner (normalen "Build"-Ordner, Build-Ordner in "app" und Build-Ordner in "wear") und generiere die signierte APK-Datei erneut.
2. Definiere als Zielordner (destination folder) den Projekt-Ordner anstelle des App-Ordner - siehe `dieses Video <https://www.youtube.com/watch?v=BWUFWzG-kag>`_.
3. Ändere den Pfad des Zielordners (destination folder) auf ein neues Verzeichnis.

Unable to start daemon process
==================================================
Wenn Du eine Fehlermeldung wie die unten siehst, verwendest Du wahrscheinlich ein Windows 10 32-Bit-Betriebssystem. Dieses wird von Android Studio 3.5.1 und höher nicht unterstützt. Wenn Du Windows 10 zum Erstellen der App verwendest, musst Du ein 64-bit Betriebssystem einsetzen.

Im Internet findest Du viele Anleitungen, wie Du herausfinden kannst, ob Du ein 32-bit- oder ein 64-bit-System einsetzt - z.B. `hier <https://www.howtogeek.com/howto/21726/how-do-i-know-if-im-running-32-bit-or-64-bit-windows-answers/>`_.

.. image:: ../images/AndroidStudioWin10_32bitError.png
  :alt: Screenshot Unable to start daemon process
  

Fehlende CGM-Daten
==================================================
* Falls Du xDrip+ verwendest: Identifiziere den Empfänger wie in den `xDrip+ Einstellungen <../Configuration/xdrip.html#identifiziere-empfanger>`_ beschrieben.
* Falls Du die `gepatchte Dexcom G6 App <../Hardware/DexcomG6.html#g6-mit-der-gepatchten-dexcom-app>`_ verwendest: Stelle sicher, dass Du die korrekte Version aus dem `2.4 Ordner <https://github.com/dexcomapp/dexcomapp/tree/master/2.4>`_ verwendest.

Uncommitted changes
==================================================
Falls Du eine Fehlermeldung bekommst, die wie folgt oder ähnlich aussieht

.. image:: ../images/GIT_TerminalCheckOut0.PNG
  :alt: Fehler uncommitted changes

Option 1 - Prüfe die git Installation
--------------------------------------------------
* Evtl. ist git nicht korrekt installiert. git muss global auf Deinem Rechner verfügbar sein.
* Falls Du einen Windows-PC nutzt und git gerade installiert hast, solltest Du Deinen PC einmal neu starten oder Dich zumindest einmal von Deinem Benutzerkonto an- und wieder abmelden, um git nach der Installation allgemein verfügbar zu machen.
* `Prüfe die git Installation <../Installing-AndroidAPS/git-install.html#prufe-die-einstellungen-in-android-studio>`_
* Wenn keine git Version angezeigt wird, Du aber sicher bist, dass git auf Deinem Computer installiert ist, stelle sicher, dass Android Studio `den Pfad zu git <../Installing-AndroidAPS/git-install.html#pfad-zu-git-in-android-studio-festlegen>`_ kennt.

Option 2 - Quellcode erneut laden
--------------------------------------------------
* Wähle in Android Studio den Menüeintrag VCS -> GIT -> Reset HEAD.

.. image:: ../images/GIT_TerminalCheckOut3.PNG
  :alt: Reset HEAD
   
Option 3 - Prüfe den Code auf Aktualisierungen
--------------------------------------------------
* Kopiere 'git checkout --' in die Zwischenablage (ohne die Anführungszeichen)
* Wechsle zum Terminal in Android Studio (linke untere Seite des Android Studio-Fensters)

  .. image:: ../images/GIT_TerminalCheckOut1.PNG
  :alt: Android Studio Terminal
   
* Paste copied text and press return

  .. image:: ../images/GIT_TerminalCheckOut2.jpg
    :alt: GIT checkout erfolgreich

App not installed / Installation fehlgeschlagen
==================================================
.. image:: ../images/Update_AppNotInstalled.png
  :alt: App wird auf dem Smartphone nicht installiert

* Stelle sicher, dass Du die “app-full-release.apk” auf Dein Smartphone übertragen hast.
* Falls "App not installed" auf dem Smartphone angezeigt wird, gehe wie folgt vor:
  
1. `Exportiere Deine Einstellungen <../Usage/ExportImportSettings.html>`_ (in der AAPS Version, die bereits auf Deinem Smartphone installiert ist)
2. Deinstalliere AAPS auf Deinem Smartphone.
3. Aktiviere den Flugmodus & schalte Bluetooth aus.
4. Installiere die neue Version ("app-full-release.apk").
5. `Export/Import von Einstellungen <../Usage/ExportImportSettings.html>`_
6. Aktiviere Bluetooth wieder und schalte den Flugmodus aus.

App installiert, aber weiter die alte Version auf dem Smartphone
==================================================
Wenn Du die App erfolgreich erstellt, sie auf Dein Smartphone übertragen und dort erfolgreich installiert hast jedoch weiter die alte Versionsnummer angezeigt wird, so hast Du wahrscheinlich versäumt, Deine `lokale Kopie zu aktualisieren <../Update-to-new-version.html#fuhre-ein-update-deiner-lokalen-version-durch>`.

Keiner der oben genannten Lösungsvorschläge funktioniert
==================================================
Falls die oben genannten Tipps Dich nicht weiter bringen, kannst Du überlegen, die App von Grund auf neu zu erstellen.

1. `Exportiere Deine Einstellungen <../Usage/ExportImportSettings.html>`_ (in der AAPS Version, die bereits auf Deinem Smartphone installiert ist)
2. Halte Dein key Passwort und Dein key store Passwort bereit.
    Falls Du die Passwörter vergessen hast, kannst Du versuchen, sie  wie `hier <https://youtu.be/nS3wxnLgZOo>` _ beschrieben in den Projektdateien zu finden. Oder verwende einfach einen neuen keystore. 
3. Erstelle die App von Grund auf neu wie `hier <../Installing-AndroidAPS/Building-APK.html#androidaps-code-herunterladen>`_ beschrieben.
4.	Nachdem Du die APK erfolgreich erstellt hast, kannst Du die App auf Deinem Smartphone deinstallieren. Übertrage dann die neue APK auf Dein Smartphone und installiere diese.
5. `Export/Import von Einstellungen <../Usage/ExportImportSettings.html>`_

Worst case scenario
==================================================
Falls auch die Neuerstellung der App von Grund auf Dein Problem nicht löst, könntest Du versuchen, Android Studio komplett neu zu installieren. Einige Benutzer berichteten, dass dies ihr Problem gelöst hat.

**Stelle sicher, dass Du beim Deinstallieren von Android Studio alle damit in Verbindung stehenden Dateien entfernst. ** Wenn Du Android Studio und seine versteckten Dateien nicht komplett entfernt werden, kann die Deinstallation neue Schwierigkeiten verursachen statt Deine bestehenden Probleme zu lösen. Anleitungen zur kompletten Deinstallation findest Du online z.B. `https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10 <https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10>`_.

Installiere Android Studio von Grund auf wie `hier <../Installing-AndroidAPS/Building-APK.html#android-studio-installieren>`_ beschrieben und **führe kein gradle Update durch**.
