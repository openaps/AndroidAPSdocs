Manuelle Installation der Google Play Service für Sony Smartwach 3
#####################################################################

Die Sony Smartwach 3 ist eine der beliebtesten Uhren zu Verwendung mit AAPS. Leider hat Google die Unterstützung für Wear OS 1.5 Geräte im Herbst 2020 eingestellt. Dies führt zu Problemen bei der Verwendung von Sony SW3 mit AndroidAPS 2.7 und höher. 

Der nachfolgend beschriebene Workaround ermöglicht die Weiternutzung der Sony Smartwatch 3. Behalte aber im Hinterkopf, dass Du über kurz oder lang zu einer Smartwatch mit neuerem Betriebssystem wirst wechseln müssen.

1. Lade die neueste Version der GService for Wear OS herunter.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
* Auf der `apkmirror Website <https://www.apkmirror.com/apk/google-inc/google-play-services-android-wear/>`_ findest Du die letzte APK der "Google Play Services (Wear OS)".

   Architecture: armeabi-v7a, Minimum Version: Android 6.0+, Screen DPI: nodpi

* Du musst 2 Dinge sicherstellen:

   * Ist es die neueste Version?
   * Ist es kompatibel mit Android 6.0+? Da es die Android Wear Version ist, werden Version 7.0 und neuer nicht funktionieren.

* Früher oder später wird Google Android 6.0 nicht mehr unterstützen. Ab diesem Zeitpunkt wird die letzte Version nicht mehr für Android 6.0 zur Verfügung stehen und damit die Nutzung der Sony Smartwatch 3 nicht mehr möglich sein.

2. Lade Dir das Adb-Debugging-Tool herunter und installiere sie auf Deinem PC.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
* Es gibt verschiedene Möglichkeiten, das Adb-Debugging-Tool zu installieren.
* Wir empfehlen, die  `SDK Platform Tools <https://developer.android.com/studio/releases/platform-tools>`_ zu verwenden: Einfach runterladen und in einem Verzeichnis Deiner Wahl extrahierten (entzippen).

3. Aktiviere die ADB Debugging Optionen auf Deiner Sony Smartwatch 3
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
* Aktiviere den Entwicklermodus: Settings (Einstellungen) -> About (Über) -> Build number
* Klicke 'build number' 7 mal an.
* Gehe nun zu Settings (Einstellungen) --> Developer Options (Entwickleroptionen) --> ADB Debugging (enable)

4. Verbinde Deine Smartwatch mit Deinem Computer
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
* Schließe dann Deine Smartwatch an den PC an.
* Benenne die heruntergeladenen Google Services APK um. Nimm am besten einen kurzen und einfachen Namen (z.B. SW3fix.apk).
* Lege diese APK in das gleiche Verzeichnis wie das adb Tool (in Deinem Fall das Verzeichnis des entpackten SDK Platform Tools).
* Öffne das Windows-Terminal mit dem Befehl "cmd" im Windows-Startmenü.
*	Wechsle im Terminal in das Verzeichnis, das Dein adb Tool und die Google Services APK enthält (tippe „cd [Pfad zu Deinem Verzeichnis]“, z.B. „cd C:\Users\SWR50looper\sdktools“).
* Gib dann "adb devices" ein.
* Nach einem kurzen Moment kommt eine Eingabeaufforderung, ob die Debugging-Berechtigung für die Uhr erteilt werden soll. Gewähre diese.
* Im Terminalfenster solltest Du nun etwas wie "14452D11F536B52 device" sehen, wenn Du erneut "adb devices" eingibst.
* Falls Dir "unauthorized" oder eine ähnliche Meldung angezeigt wird, musst Du die vorherigen Schritte wiederholen.
* Falls Du an dieser Stelle hängen bleibst, benötigst Du ggf. spezifische Treiber oder ähnliches für Deine Smartwatch. Die Google Suche hilft Dir hier weiter.
* Warte dann ab, die Installation dauert mehrere Minuten. 

5. Sende die App an Deine Smartwatch
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
* Gib im Terminalfenster das Kommando „adb install -r -g aplicationname.apk“ (Wenn Du die APK-Datei wie oben vorgeschlagen benannt hast, lautet das korrekte Kommando „adb install -r -g SW3fix.apk“).

   .. image:: ../images/SonySW3_Terminal1.png
     :alt: Terminal Befehl

* Warte 4 - 5 Minuten bis die Installation abgeschlossen ist. 

.. image:: ../images/SonySW3_Terminal2.png
     :alt: Terminal erfolgreiche Installation

* Starte Deine Smartwatch neu nachdem die Installation abgeschlossen ist. Die Apps sollten sich dann direkt neu synchronisieren.
