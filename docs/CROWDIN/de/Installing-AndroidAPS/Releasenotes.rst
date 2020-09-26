Release notes
**************************************************
Eine Schritt-für-Schritt-Anleitung des Updates findest Du `hier <../Installing-AndroidAPS/Update-to-new-version.html>`_. Auf dieser Seite gibt es auch einen Abschnitt mit möglichen Schwierigkeiten und Lösungsansätzen.

Folgende Information wird angezeigt, sobald ein neues Update zur Verfügung steht:

.. image:: ../images/AAPS_LoopDisable90days.png
  :alt: Update info

Dann hast Du 60 Tage Zeit, das Update durchzuführen. Wenn Du nicht innerhalb dieser 60 Tage updatest, wird AndroidAPS in den LGS-Modus (Reduzierung der Basalrate bei niedrigen Glukosewerten, keine Korrektur zu hoher BZ-Werte - siehe `Glossar <../Getting-Started/Glossary.html>`_) wie im  `Ziel (objective) 6 <../Usage/Objectives.html>`_ beschrieben.

Wenn Du auch weitere 30 Tage (90 Tage ab dem neuen Release-Datum) nicht aktualisierst, wird AAPS auf Open Loop wechseln.

Bitte verstehe, dass diese Änderung nicht dazu dient, die Anwender zu gängeln, sondern aus Sicherheitsgründen erfolgt. Neue Versionen von AndroidAPS bieten nicht nur neue Funktionen, sondern auch wichtige Sicherheitsfixes. Deshalb ist es notwendig, dass jeder Anwender so schnell wie möglich aktualisiert. Leider gibt es noch Fehlerberichte aus sehr alten Versionen, so dass dies ein Versuch ist, die Sicherheit für jeden einzelnen Benutzer und die gesamte DIY-Community zu verbessern. Danke für dein Verständnis.

Version 2.7.0
================
Erscheinungsdatum: 24.09.2020

Speicherort des Repositories wurde auf https://github.com/nightscout/AndroidAPS geändert. Wenn Du Dich mit git nicht auskennst, ist es am einfachsten, wenn Du das vorhandene AndroidAPS-Verzeichnis entfernst und die App-Erstellung `von vorne beginnst <../Installing-AndroidAPS/Building-APK.html>`_.

As already `announced some time ago <../Module/module.html#phone>`_, **Android 7 is minimum requirement** for AndroidAPS 2.7.

Nutze bitte `Android Studio 3.6.1 <https://developer.android.com/studio/>`_ oder neuer um die apk zu erstellen.

**Prüfe nach dem Update auf jeden Fall Deine Einstellungen und passe sie ggf. an wie `hier <../Installing-AndroidAPS/update2_7.html>`_ beschrieben.**

Du musst `Objective 11 <../Usage/Objectives.html#objective-11-automation>`_ zumindest starten, um die `Automatisierungsfunktion <../Usage/Automation.html>`_ weiter nutzen zu können. Alle vorangegangenen Objectives müssen abgeschlossen sein, sonst kann Objective 11 nicht gestartet werden.

Wichtige neue Funktionen
----------------------
* Zahlreiche Code- und Library-Änderungen, Code neu in Kotlin geschrieben @MilosKozak @AdrianLxM
* Module für Dana Pumpen @MilosKozak
* `Neues Layout und Layoutauswahl <../Getting-Started/Screenshots.html>`_ @MilosKozak
* Neues `Status Lights Layout <../Configuration/Preferences.html#status-lights>`_ @MilosKozak
* `Unterstützung mehrerer Diagramme <../Getting-Started/Screenshots.html#section-f---main-graph>`_ @MilosKozak
* `Profil Helfer <../Configuration/profilehelper.html>`_ @MilosKozak
* Visualisierung der `dynamischen Ziel-Anpassung <../Getting-Started/Screenshots.html#visualization-of-dynamic-target-adjustment>`_ @Tornado-Tim
* Neues `Layout für die Einstellungen <../Configuration/Preferences.html>`_ @MilosKozak
* Update des SMB Algorithmus @Tornado-Tim
* `Low glucose Suspend (Reduzierung der Baslarate bei niedrigen Glukosewerten) Modus <../Configuration/Preferences.html#aps-mode>`_ @Tornado-Tim
* `Benachrichtigung Kohlenhydrate benötigt <../Configuration/Preferences.html#carb-required-notification>`_ @twain47 @Tornado-Tim
* Careportal entfernt (jetzt im Aktionen-Tab/Menü) @MilosKozak
* `Neues, verschlüsseltes Exportformat <../Usage/ExportImportSettings.html>`_ @dlvoy
* `Neue SMS Authentifikation mit Einmalpasswort <../Children/SMS-Commands.html>`_ @dlvoy
* `Neue SMS Befehle zum Verbinden und Trennen der Pumpe <../Children/SMS-Commands.html#commands>`_ @Lexsus
* Bessere Unterstützung niedriger Basalraten bei Dana Pumpen @Mackwe
* Small Fehlerbehebungen für Insight Pumpen @TebbeUbben @MilosKozak
* `Option "Standardsprache" <../Configuration/Preferences.html#general>`_ @MilosKozak
* Vector Icons @Philoul
* `Neutrale Temps für Medtronic Pumpen <../Configuration/MedtronicPump.html#configuration-of-phoneandroidaps>`_ @Tornado-Tim
* Verbesserung Historie @MilosKozak
* OpenAPS MA Algorithmus entfernt @Tornado-Tim
* Oref0 Sensitivität entfernt @Tornado-Tim
* `Biometrischer oder Password-Schutz <..../Configuration/Preferences.html#protection>`_ ffür Einstellungen und Bolus @MilosKozak
* `Neuer Automation Trigger <../Usage/Automation.html>`_ @PoweRGbg
* `Open Humans Uploader <../Configuration/OpenHumans.html>`_
* New documentation @Achim

Version 2.6.1.4
================
Erscheinungsdatum: 04.05.2020

Nutze bitte `Android Studio 3.6.1 <https://developer.android.com/studio/>`_ oder neuer um die apk zu erstellen.

Wichtige neue Funktionen
----------------------
* Insight: Vibration bei Bolus deaktivieren (Nur Firmware Version 3.x) - zweiter Versuch
* Sonst identisch mit 2.6.1.3. Update ist optional. 

Version 2.6.1.3
================
Erscheinungsdatum: 03.05.2020

Nutze bitte `Android Studio 3.6.1 <https://developer.android.com/studio/>`_ oder neuer um die apk zu erstellen.

Wichtige neue Funktionen
-----
* Insight: Vibration bei Bolus deaktivieren (Nur Firmware Version 3.x)
* Sonst identisch mit 2.6.1.2. Update ist optional. 

Version 2.6.1.2
================
Erscheinungsdatum: 19.04.2020

Nutze bitte `Android Studio 3.6.1 <https://developer.android.com/studio/>`_ oder neuer um die apk zu erstellen.

Wichtige neue Funktionen
-----
* Fehlerbehebung Insight Service
* Sonst identisch mit 2.6.1.1. Wenn Dich der Fehler nicht betrifft, musst Du nicht updaten.

Version 2.6.1.1
================
Erscheinungsdatum: 06.04.2020

Nutze bitte `Android Studio 3.6.1 <https://developer.android.com/studio/>`_ oder neuer um die apk zu erstellen.

Wichtige neue Funktionen
-----
* Fehlerbehebung SMS CARBS Kommando in Zusammenhang mit der Combo Pumpe
* Sonst identisch mit 2.6.1. Wenn Dich der Fehler nicht betrifft, musst Du nicht updaten.

Version 2.6.1
==============
Erscheinungsdatum: 21.03.2020

Nutze bitte `Android Studio 3.6.1 <https://developer.android.com/studio/>`_ oder neuer um die apk zu erstellen.

Wichtige neue Funktionen
-----
* Nur https:// in Nightscout-Client Einstellungen erlaubt
* Fehlerbehebung `BGI <../Getting-Started/Glossary.html>`_ Anzeige auf der Smartwatch
* Kleiner Anzeigefehler behoben
* Fehlerbehebung Abstürze der Insight Pumpe
* Fehlerbehebung zukünftige Kohlenhydrate bei der Combo Pumpe
* Fehlerbehebung `Upload lokaler Profile <../Configuration/Config-Builder.html#lokale-profile-zu-nightscout-hochladen>`_ zu Nightscout
* Verbesserung Alarme bei der Insight Pumpe
* Verbesserte Erkennung der Boli aus der Pumpenhistorie
* Fehlerbehebung Nightscout-Client Verbindungs-Einstellungen (WLAN, Laden)
* Fehlerbeseitigung beim Senden der Kalibrierungen an xDrip+

Version 2.6.0
==============
Erscheinungsdatum: 29.02.2020

Nutze bitte `Android Studio 3.6.1 <https://developer.android.com/studio/>`_ oder neuer um die apk zu erstellen.

Wichtige neue Funktionen
-----
* Kleinere Designänderungen (Startseite...)
* Careportal Tab / Menü entfernt - weitere Details dazu `hier <../Usage/CPbefore26.html>`_
* Neues `Plugin Lokales Profil <../Configuration/Config-Builder.html#lokales-profil-empfohlen>`_

  * Im lokalen Profil können mehrere Profile gespeichert werden.
  * Profile können geklont und bearbeitet werden.
  * Lokale Profile können zu Nightscout hochgeladen werden.
  * Profilwechsel können in ein neues lokales Profil geklont werden (Zeitverschiebung und Prozentsatz werden berücksichtigt).
  * Neue Eingabemöglichkeit für Zielwerte
* Einfaches Profil wurde entfernt.
* `Verzögerter Bolus <../Usage/Extended-Carbs.html#id1>`_ - der Closed Loop wird unterbrochen
* Medtronic Pumpe: Fehler mit doppelten Einträgen behoben
* Maßeinheiten (mmol / mg/dl) werden nicht mehr im Profil angegeben, sondern als globale Einstellung.
* Neue Einstellungen zum Einrichtungsassistenten hinzugefügt.
* Verbesserungen an der Benutzerschnittstelle und programmintern.
* `Wear Komplikationen <../Configuration/Watchfaces.html>`_ für Smartwatches
* Neue `SMS-Befehle <../Children/SMS-Commands.html>`_ BOLUS-MEAL, SMS, CARBS, TARGET, HELP
* Korrektur Sprachauswahl
* Objectives (Ziele) `neu starten <../Usage/Objectives.html#objective-ziel-neu-starten>`_
* Automation: `Regeln sortieren <../Usage/Automation.html#automation-regeln-sortieren>`_
* Automatisierung: Fehlerbeseitigung - Regeln wurden bei pausiertem Loop ausgeführt
* Neue Statuszeile für Combo
* Verbesserung des Glukosestatus
* Fehlerbehebung: TempTarget NS-Synchronisation
* Neue Aktivitätsstatistik
* Verzögerter Bolus im Open Loop verfügbar
* Android 10 Alarmunterstützung
* Viele neue Übersetzungen

Version 2.5.1
==================================================
Erscheinungsdatum: 31.10.2019

Bitte beachte die `wichtigen Hinweise <../Installing-AndroidAPS/Releasenotes.html#wichtige-hinweise>`_ und `Beschränkungen <../Installing-AndroidAPS/Releasenotes.html#kann-ich-dieses-update-nutzen-aktuell-werden-noch-nicht-unterstutzt>`_, die bei `Version 2.5.0 <../Installing-AndroidAPS/Releasenotes.html#version-2-5-0>`_ aufgeführt sind. 
* Es wurde ein Fehler im Netzwerk-Status-Empfänger behoben, der zu einigen Abstürzen geführt hat (nicht kritisch, würde aber viel Energie verbrauchen auf Grund der ständigen Neuberechnungen).
* Eine neue Versionssteuerung, die es ermöglicht, kleinere Aktualisierungen durchzuführen, ohne die Aktualisierungsbenachrichtigung auszulösen.

Version 2.5.0
==================================================
Erscheinungsdatum: 26.10.2019

Wichtige Hinweise
--------------------------------------------------
* Verwende `Android Studio Version 3.5.1 <https://developer.android.com/studio/>`_ oder neuer `um die App zu erstellen <../Installing-AndroidAPS/Building-APK.html>`_ oder `ein Update durchzuführen <../Installing-AndroidAPS/Update-to-new-version.html>`_.
* Wenn Du xDrip verwendest, muss `identify receiver <../Configuration/xdrip.html#identify-receiver>`_ gesetzt sein.
* Falls Du den Dexcom G6 mit der `gepatchten Dexcom App <../Hardware/DexcomG6.html#g6-mit-der-gepatchten-dexcom-app>`_ verwendest, benötigst Du die Version aus dem `2.4 Ordner <https://github.com/dexcomapp/dexcomapp/tree/master/2.4>`_.
* Glimp wird ab Version 4.15.57 und neuer unterstützt.

Kann ich dieses Update nutzen? Aktuell werden NOCH NICHT unterstützt:
--------------------------------------------------
* Android 5 oder niedriger
* Poctech
* 600SeriesUploader
* Patched Dexcom App aus dem Verzeichnis 2.3

Wichtige neue Funktionen
--------------------------------------------------
* Interne Änderung des targetSDK auf 28 (Android 9), Jetpack-Unterstützung
* RxJava2, Okhttp3, Retrofit support
* Alte `Medtronic Pumpen <../Configuration/MedtronicPump.html>`_ werden unterstützt (RileyLink erforderlich)
* Neues Plugin `Automation <../Usage/Automation.html>`_
* Möglichkeit, `nur einen Teil des vom Bolus-Rechner ermittelten Bolus <../Configuration/Preferences.html#erweiterte-instellungen>`_ abzugeben.
* Darstellung der Insulinaktivität
* Anpassung der IOB-Vorhersagen auf Basis der Autosens Ergebnisse
* Neue gepatchte Dexcom App (`2.4 Ordner <https://github.com/dexcomapp/dexcomapp/tree/master/2.4>`_)
* Signaturprüfung
* Möglichkeit für OpenAPS Anwender, die Ziele (Objectives) zu überspringen
* Neue `Ziele (objectives) <../Usage/Objectives.html>`_ -  Wissens-Check & App-Bedienung
   
   (Wenn Du mindestens mit dem Ziel "Starte den Open Loop" in einer vorhergehenden Version begonnen hast, ist der Wissens-Check optional.)
* Fehlerbehebung Dana Treiber, bei dem eine falsche Zeitdifferenz angegeben wurde
* Fehlerbehebung `SMS-Befehle <../Children/SMS-Commands.html>`_

Version 2.3
==================================================
Erscheinungsdatum: 25.04.2019

Wichtige neue Funktionen
--------------------------------------------------
* Wichtiger Sicherheitsfix für Insight (wirklich wichtig, wenn Du die Insight nutzt!)
* Bugfix History-Browser
* Bugfix Delta-Berechnungen
* Sprach-Updates
* Überprüfung git und Warnung bei gradle Upgrade
* Zusätzliche automatische Tests
* Bugfix eines potentiellen Absturzes des Alarm Sound Dienstes (Danke @lee-b!)
* Bugfix BG-Broadcast (funktioniert nun unabhängig von den SMS-Berechtigungen!)
* Neuer Versionscheck


Version 2.2.2
==================================================
Erscheinungsdatum: 07.04.2019

Wichtige neue Funktionen
--------------------------------------------------
* Korrektur Autosens: deaktiviert TT Anstiege / senkt Zielwert
* Neue Übersetzungen
* Korrekturen Insight Treiber
* Korrektur SMS-Plugin


Version 2.2
==================================================
Erscheinungsdatum: 29.03.2019

Wichtige neue Funktionen
--------------------------------------------------
* Anpassung Assistent für die `Zeitumstellung <../Usage/Timezone-traveling.html#zeitumstellung-sommer-winterzeit>`_
* Wear Update für die Smartwatch
* Update `SMS plugin <../Children/SMS-Commands.html>`_
* Möglichkeit, bei den Objectives (Zielen) zurück zu gehen
* Unterbrechung des Loop wenn Speicherplatz des Smartphones aufgebraucht ist.


Version 2.1
==================================================
Erscheinungsdatum: 03.03.2019

Wichtige neue Funktionen
--------------------------------------------------
* Unterstützung für `Accu-Chek Insight <../Configuration/Accu-Chek-Insight-Pump.html>`_ (von Tebbe Ubben und JamOrHam)
* Statusanzeige auf dem Hauptbildschirm (Nico Schmitz)
* Assistent für die Zeitumstellung (Sommer-/Winterzeit - Roumen Georgiev)
* Korrektur der Verarbeitung von Profilnamen, die von Nightscout übertragen werden (Johannes Mockenhaupt)
* Sperre des User Interface behoben (Johannes Mockenhaupt)
* Unterstützung für die aktualisierte G5-App (Tebbe Ubben und Milos Kozak)
* G6, Poctech, Tomato, Eversense als BZ-Quelle (Tebbe Ubben und Milos Kozak)
* Korrektur deaktivieren SMB Präferenzen (Johannes Mockenhaupt)

Verschiedenes
--------------------------------------------------
* Falls Du ein vom Standard abweichenden smbmaxminutes Wert nutzt, musst Du diesen erneut eingeben.


Version 2.0
==================================================
Erscheinungsdatum: 03.11.2018

Wichtige neue Funktionen
--------------------------------------------------
* Oref1/SMB wird unterstützt (`oref1 documentation <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html>`_). Bitte lies zuerst die Dokumentation, damit du weißt was du davon erwarten kannst, wie es funktioniert, was der SMB erreichen kann und wie er zu benutzen ist, damit er gut arbeitet.
* Unterstützung für `_Accu-Chek Combo <../Configuration/Accu-Chek-Combo-Pump.html>`_
* Setup Wizard: Der neue Assistent führt dich durch die Einrichtung von AndroidAPS.

Einstellungen, die bei Umstellung von AMA zu SMB erforderlich sind
--------------------------------------------------
* Objective 10 muss gestartet sein, damit die SMB-Funktion zur Verfügung steht (der SMB-Reiter zeigt dir, welche Beschränkungen bestehen).
* maxIOB enthält nun das gesamte IOB, nicht nur das hinzugefügte Basalinsulin. Das bedeutet: Wenn du einen Bolus von 8 IE gegeben hast und maxIOB ist 7, dann wird kein SMB ausgelöst, solange das Gesamt-IOB nicht wieder auf unter 7 IE abgefallen ist.
* Der Standardwert von min_5m_carbimpact erhöht sich von 3 bei AMA auf 8 beim SMB. Wenn du also von AMA auf SMB umstellst, dann musst du den Wert manuell auf 8 erhöhen.
* Bitte beachte beim Erstellen einer AndroidAPS 2.0 apk: Configuration on demand wird in der aktuellen Version des Android Gradle Plugins nicht unterstützt! Wenn der Build-Prozess mit einem Fehler zu "on demand configuration" fehlschlägt, dann kannst du folgendes tun:

   * Das Einstellungen-Fenster öffnen, indem du auf Datei > Einstellungen (auf dem Mac: Android Studio > Preferences) klickst.
   * Klicke im linken Fensterbereich auf Build, Execution, Deployment > Compiler.
   * Deaktiviere die "Configure on demand" Checkbox.
   * Klicke Apply oder OK.

Startseite
--------------------------------------------------
* Im oberen Menüband (Abschnitt A) kannst du durch langen Fingerdruck den Loop pausieren oder deaktivieren, die Pumpe trennen, das aktuelle Profil anzeigen und einen Profilwechsel machen, sowie temporäre Ziele (temp targets - TT) einstellen. Die temporären Ziele verwenden Standardwerte, die du in den Einstellungen festlegen kannst. Das neue Standard-Ziel “HypoTT” löst ein temporäres Ziel im höheren BZ-Bereich aus, damit der Loop nicht überreagiert nachdem du Korrektur-Kohlenhydrate gegessen hast.
* Neue Behandlungs-Schaltfläche: die alte Behandlungs-Schaltfläche ist weiterhin verfügbar, aber standardmäßig deaktiviert. Du kannst jetzt selbst einstellen, welche Schaltflächen du auf dem Home-Screen haben willst. Neue Buttons für Insulin und Kohlenhydrate (inkl. `eCarbs/extended carbs <../Usage/Extended-Carbs.html>`_)
* `Farbige Vorhersagelinien <../Getting-Started/Screenshots.html#abschnitt-e>`_
* Option in den Dialogen für Insulin, Kohlenhydrate, Rechner und Füllen/Vorfüllen ein Feld für Bemerkungen, die zu Nightscout hochgeladen werden, anzuzeigen.
* Überarbeiteter Füllen/Vorfüllen-Dialog. Möglichkeit, gleichzeitig Careportal-Einträge für Katheter- und Reservoirwechsel zu erstellen.

Smartwatch
--------------------------------------------------
* Auf die separate Build Variante “wearcontrol” wird verzichtet, die Smartwatch-Steuerung ist jetzt in der full build Variante enthalten. Um die Bolus-Steuerung auf der Smartwatch zu verwenden, musst du dies in AAPS auf dem Smartphone aktivieren.
* Der Rechner wird nur noch nach Kohlenhydraten (und - falls aktiviert - nach einem Prozentsatz) fragen. Du kannst in den Einstellungen auf dem Smartphone festlegen, welche Parameter bei einem Bolus, der von der Smartwatch aus gegeben wird, in die Berechnung einbezogen werden sollen.
* Bestätigungen und Info-Dialoge funktionieren jetzt auch unter Android Wear 2.0 gut.
* eCarbs Menüeintrag hinzugefügt

Neue Plugins
--------------------------------------------------
* PocTech App als BZ-Quelle
* Dexcom App (patched) als BZ-Quelle
* Oref1 Empfindlichkeitserkennung

Verschiedenes
--------------------------------------------------
* Die App verwendet jetzt “drawer”, um alle Plugins zu zeigen. Alle Plugins, die im Konfigurations-Generator als sichtbar markiert sind, werden als Reiter im oberen Bereich (Abschnitt A) angezeigt (Favoriten).
* Überarbeitung des Konfigurations-Generators und des Objectives-Reiters. Beschreibungen hinzugefügt.
* Neues App-Icon
* Viele weitere Verbesserungen und Fehlerbehebungen.
* Von Nightscout unabhängige Alarme wenn die Pumpe über längere Zeit nicht erreichbar ist (z.B.  schwache Pumpenbatterie) und bei verpassten CGM-Werte (siehe lokale Alarme in den Einstellungen).
* Option, das Display immer an zu lassen.
* Option, die Hinweise als Systemmeldungen anzuzeigen.
* Advanced filtering (das erlaubt die Nutzung von “SMB immer an” und “6 Stunden nach dem Essen”) wird unterstützt mit der gepatchten Dexcom App (nicht mit der originalen Dexcom App!) oder xDrip mit dem G5 native mode als BZ-Quelle.
