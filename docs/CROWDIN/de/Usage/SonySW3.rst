Manuelle Installation der Google Play Service für Sony Smartwach 3
#####################################################################

Die Sony Smartwach 3 ist eine der beliebtesten Uhren zu Verwendung mit AAPS. Leider hat Google die Unterstützung für Wear OS 1.5 Geräte im Herbst 2020 eingestellt. Dies führt zu Problemen bei der Verwendung von Sony SW3 mit AndroidAPS 2.7 und höher. 

Der nachfolgend beschriebene Workaround ermöglicht die Weiternutzung der Sony Smartwatch 3. Behalte aber im Hinterkopf, dass Du über kurz oder lang zu einer Smartwatch mit neuerem Betriebssystem wirst wechseln müssen.

1. Lade die neueste Version der GService for Wear OS herunter.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
* Mit Hilfe der apkmirror Website kannst Du die aktuellste APK für "Google Play Services (Wear OS)" finden.
* `Dieser Link <https://www.apkmirror.com/apk/google-inc/google-play-services-android-wear/google-play-services-android-wear-20-21-17-release/google-play-services-wear-os-20-21-17-050300-316502805-android-apk-download/>`_ führt Dich zur Downloadseite von GService v20.21.17. Die ist Stand 25. Juni 2020 die aktuellste Version.
* Du musst 2 Dinge sicherstellen:

   * Ist es die neueste Version?
   * Ist es kompatibel mit Android 6.0+? Da es die Android Wear Version ist, werden Version 7.0 und neuer nicht funktionieren.

* Früher oder später wird Google Android 6.0 nicht mehr unterstützen. Ab diesem Zeitpunkt wird die letzte Version nicht mehr für Android 6.0 zur Verfügung stehen und damit die Nutzung der Sony Smartwatch 3 nicht mehr möglich sein.

2. Lade Dir das Adb-Debugging-Tool herunter und installiere sie auf Deinem PC.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
* Es gibt verschiedene Möglichkeiten, das Adb-Debugging-Tool zu installieren.
* Einer der einfachsten Wege: Lade einfach `'15 seconds adb installer v1.4.3' <https://forum.xda-developers.com/t/official-tool-windows-adb-fastboot-and-drivers-15-seconds-adb-installer-v1-4-3.2588979/>`_ herunter und installiere es.

3. Aktiviere die ADB Debugging Optionen auf Deiner Sony Smartwatch 3
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
* Aktiviere den Entwicklermodus: Settings (Einstellungen) -> About (Über) -> Build number
* Klicke 'build number' 7 mal an.
* Gehe nun zu Settings (Einstellungen) --> Developer Options (Entwickleroptionen) --> ADB Debugging (enable)

4. Verbinde Deine Smartwatch mit Deinem Computer
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
* Schließe dann Deine Smartwatch an den PC an.
* Benenne die heruntergeladenen Google Services APK um. Nimm am besten einen kurzen und einfachen Namen (z.B. SW3fix.apk).
* Speiche die APK unter C: und öffnen Windows PowerShell für diesen Speicherort (Shift + Rechtsklick).
* Gib dann im Terminalfenster "adb devices" ein.
* Nach einem kurzen Moment kommt eine Eingabeaufforderung, ob die Debugging-Berechtigung für die Uhr erteilt werden soll. Gewähre diese.
* Im Terminalfenster solltest Du nun etwas wie "14452D11F536B52 device" sehen, wenn Du erneut "adb devices" eingibst.
* Falls Dir "unauthorized" oder eine ähnliche Meldung angezeigt wird, musst Du die vorherigen Schritte wiederholen.
* Falls Du an dieser Stelle hängen bleibst, benötigst Du ggf. spezifische Treiber oder ähnliches für Deine Smartwatch. Die Google Suche hilft Dir hier weiter.
* Warte dann ab, die Installation dauert mehrere Minuten. 

5. Sende die App an Deine Smartwatch
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
* Gib im Terminalfenster das Kommando „adb install -r -g aplicationname.apk“ (Wenn Du die APK-Datei wie oben vorgeschlagen benannt hast, lautet das korrekte Kommando „adb install -r -g SW3fix.apk“).
* Warte 4 - 5 Minuten bis die Installation abgeschlossen ist. 
* Starte Deine Smartwatch neu nachdem die Installation abgeschlossen ist. Die Apps sollten sich dann direkt neu synchronisieren.

6. Mehr
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Mit dieser Anleitung kannst Du jede APK installieren. Es wird aber nicht empfohlen APKs zu installieren, die nicht für Wear OS erstellt wurden - auch wenn es funktioniert.
* Weitere Apps die Du auf diese Weise installieren kannst, wenn Du den Sync nicht abwarten willst:

   * `Google Messages (SMS), Stand 25. Juni 2020 ist die neueste Version v6.1.095 <https://www.apkmirror.com/apk/google-inc/android-messages-android-wear/android-messages-android-wear-6-1-095-release/messages-wear-os-6-1-095-yeti_rc09-wear_dynamic-android-apk-download/>`_
   * `Google Maps, Stand 25. Juni 2020 ist die neueste Version v10.35.2 (Android 6.0 oder neuer)  <https://www.apkmirror.com/apk/google-inc/maps-navigation-transit-android-wear/maps-navigation-transit-android-wear-10-35-2-release/google-maps-navigate-explore-wear-os-10-35-2-android-apk-download/>`_

* Die Google Maps  App ist ein gutes Beispiel für veraltete Versionen: 

   * Stand 25. Juni 2020 ist die neueste Version verfügbare Version v10.43.2
   * Diese ist aber nur für Android 7.0 und neuer.
   * Erwarte also nicht, dass Google Maps für immer mit Deiner Smartwatch funktioniert. Das Ende kommt früher oder später.
