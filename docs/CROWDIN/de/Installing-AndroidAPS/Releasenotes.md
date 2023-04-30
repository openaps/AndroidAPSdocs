(Releasenotes-release-notes)=
# Release notes

Eine Schritt-für-Schritt-Anleitung des Updates findest Du [hier](../Installing-AndroidAPS/Update-to-new-version.md). Auf dieser Seite gibt es auch einen Abschnitt mit möglichen Schwierigkeiten und Lösungsansätzen.

Folgende Information wird angezeigt, sobald ein neues Update zur Verfügung steht:

```{image} ../images/AAPS_LoopDisable90days.png
:alt: Update info
```

Dann hast Du 60 Tage Zeit, das Update durchzuführen. Wenn Du nicht innerhalb dieser 60 Tage updatest, wird AndroidAPS in den LGS-Modus (Reduzierung der Baslarate bei niedrigen Glukosewerten, keine Korrektur zu hoher BZ-Werte - siehe [Glossar](../Getting-Started/Glossary.md)) wie im [Objective 6](../Usage/Objectives.html) zurückgesetzt.

Wenn Du auch weitere 30 Tage (90 Tage ab dem neuen Release-Datum) nicht aktualisierst, wird AAPS auf Open Loop wechseln.

Bitte verstehe, dass diese Änderung nicht dazu dient, die Anwender zu gängeln, sondern aus Sicherheitsgründen erfolgt. Neue Versionen von AAPS bieten nicht nur neue Funktionen, sondern beheben auch wichtige Sicherheitsprobleme. Deshalb ist es notwendig, dass jeder Anwender so schnell wie möglich aktualisiert. Leider gibt es noch Fehlerberichte aus sehr alten Versionen, so dass dies ein Versuch ist, die Sicherheit für jeden einzelnen Benutzer und die gesamte DIY-Community zu verbessern. Danke für dein Verständnis.

```{admonition} First version of AAPS
:class: note

Die erste Testversion gab es bereits 2015. Im 2016 wurde dann das erste Release veröffentlicht.

Da die Releasefolge und deren Veröffenlichungszeitpunkte immer wieder erfragt werden, haben wir diese hier - sofern verfügbar - zusammengetragen.

```

## Android Version und AAPS Version

Wenn die Android Version Deines Smartphones älter als 9 ist, kannst Du nicht auf AAPS 3.0.0 updaten, da dieses mindestens Android 9 erfordert.

Damit Benutzer älterer Android-Versionen nicht ausgeschlossen werden, wurden zwei ältere Versionen zur Verfügung gestellt, bei denen die Versionsprüfung angepasst wurde. Es sind keine anderen Verbesserungen enthalten.

### Ab Android 9

- Verwende die aktuelle AAPS-Version.
- Download des AAPS Code unter <https://github.com/nightscout/AndroidAPS>

### Android 8

- Verwende AAPS Version **2.8.2.1**.
- Download des AAPS Code unter <https://github.com/nightscout/AndroidAPS> branch 2.8.2.1

### Android 7

- Verwende AAPS Version **2.6.2**.
- Download des AAPS Code unter <https://github.com/nightscout/AndroidAPS> branch 2.6.2

## Version 3.2.0

Erscheinungsdatum: XX.XX.2023

### Wichtige Hinweise

- Nightscout Version 15 ist vorausgesetzt. (Derzeit im 'dev'-Branch des Nightscout Main-Repositories verfügbar).
- Wenn Websockets in NS v3 genutzt werden, werden Behandlungen, die über die NS Oberfläche (Plus-Button) oder andere Anwendungen, die die V1 API nutzen, eingegeben werden, nicht an AAPS gesendet. Dies wird in einer der kommenden NS-Versionen behoben werden. Verwende immer den gleichen Client (v1 oder v3) in AAPS und AAPSClient, bis NS intern auf v3 umgestellt ist. Das Gleiche gilt für AAPS und den AAPSClient selbst.
- Websockets funktionieren im v3 Plugin ähnlich zum v1 Plugin. Mit deaktivierten Websockets plant AAPS regelmäßige NS-Downloads ein. Da NS damit dann nicht mehr permanent verbunden ist, wird so der Stromverbrauch reduziert. Das bedeutet allerdings auch, dass Daten seltener ausgetauscht werden (Datenaktualität).
- Wenn xDrip als BZ-Quelle genutzt wird, muss diese nach dem Update noch einmal neu eingestellt werden (bedingt durch interne Anpassungen).
- Um das erste Objective (Ziel) zu erreichen, kann anstelle von Nightscout nun auch Tidepool genutzt werden.
- Wenn Daten an xDrip+ gesendet werden sollen, muss xDrip- Synchronisierungs-Plugin konfiguriert werden. Um Glukosewerte aus AAPS in xDrip+ zu empfangen, muss als Datenquelle "xDrip+ Sync Follower" ausgewählt werden.
- Wenn auf den ComboV2-Treiber gewechselt werden soll, muss Ruffy deinstalliert und die Pumpe erneut mit AAPS gekoppelt werden.


### Änderungen

- EOPatch2 / GlucomenDay pump driver @jungsomyeonggithub @MilosKozak
- ComboV2 Pumpentreiber (Ruffy nicht mehr benötigt) @dv1
- Unterstützung für Dana-i @MilosKozak
- Glunovo CGM support @christinadamianou
- G7-Unterstützung @MilosKozak @rICTx-T1D @khskekec
- NSClient v3 plugin @MilosKozak
- Tidepool support @MilosKozak
- Glättungs-Plugin @MilosKozak, @justmara, Exponential smoothing @nichi (Tsunami), Average smoothing @jbr7rr
- Tonnenweise Version 3.1-Probleme gelöst
- Notizen an mehr Stellen zugelassen @Sergey Zorchenko
- UI fixes @MilosKozak @osodebailar @Andries-Smit @yodax @philhoul @dv1 @paravoid
- Neue SMS-Befehle LOOP LGS/CLOSED @pzadroga
- Übersetzungen für Wear @Andries-Smit
- xDrip-Kommunikation in eigenes Modul ausgelagert @MilosKozak
- Interne Änderungen: aktualisierte Bibliotheken-Versionen, rx3-Migration, neue Modulstrukturen @MilosKozak
- Diaconn-Treiber korrigiert @miyeongkim
- AAPSClient liefert Info, ob das Loop-Smartphone geladen wird @MilosKozak
- Änderung im Bolus-Rechner: Wenn CGM-Daten fehlen, wird der Prozentsatz ignoriert (d.h. 100% wird genutzt)
- Mehr als 125.000 Codezeilen geschrieben, 150.000 Codezeilen geändert

## Version 3.1.0

Erscheinungsdatum: 19.07.2022

(Releasenotes-important-hints-3-1-0)=
### Wichtige Hinweise

- Nach dem Update Wear-App deinstallieren und neue Version installieren
- Omnipod Benutzer: Update auf dem Pod ändern !!!

### Änderungen

- Behobene Probleme von 3.0 Version
- Fix gegen das Einfrieren der Anwendung @MilosKozak
- Fix für den DASH Treiber @avereha
- Fix für die Dana Treiber @MilosKozak
- riesige UI Verbesserung, Bereinigung und Vereinheitlichung, Migration zu Material Design, Stile, weißes Theme, neue Symbole. @Andries-Smit @MilosKozak @osodebailar @Philoul
- Widget @MilosKozak
- Aidex CGM support @andyrozman @markvader (Pumpcontrol only)
- Smartwatch `Wear OS Kacheln <../Configuration/Configuration/Watchfaces.mdl#wear-os-tiles>`, Übersetzungen @Andries-Smit
- Wear code refactored. Nicht mehr abwärtskompatibel @MilosKozak
- a11y verbessert @Andries-Smit
- neue Schutzoption PIN @Andries-Smit
- Diagrammskala vom Menü erlauben @MilosKozak
- Mehr Statistiken verfügbar @MilosKozak
- MDI-Plugin entfernt zu Gunsten von VirtualPump
- neue Automatisierungsaktion: Stop-Verarbeitung (nachfolgende Regeln)

## Version 3.0.0

Erscheinungsdatum: 31.01.2022

(Releasenotes-important-hints-3-0-0)=
### Wichtige Hinweise

- **Minimale Android-Version ist 9.0 jetzt.**
- **Es findet keine Migration der Daten in die neue Datenbank statt.** Beklagt Euch bitte nicht, es sind einfach zu tiefgreifende Änderungen und damit ist eine Übernahme nicht möglich. Daher werden nach dem Update IOB, COB, Behandlungen etc. leer sein. Du musst einen [Profilwechsel](../Usage/Profiles.md) vornehmen und mit Null IOB und COB starten. Plane das Update sorgfältig!!! Die beste Situation wäre eine ohne aktives Insulin und ohne Kohlenhydrate an Bord.
- Verwende immer die gleiche Version von AAPS und NSClient.

**Prüfe nach dem Update auf 3.0 auf jeden Fall Deine Einstellungen und passe sie ggf. an wie** [hier beschrieben](../Installing-AndroidAPS/update3_0.md).

### Vorbereitende Schritte

**Spätestens zwei Tage vor dem Update:**

- Deaktiviere Dexcom Bridge in Nightscout
- Wenn Du den Dexcom G5 oder G6 mit xDrip+ nutzt, musst Du xDrip+ auf eine nightly Version nach dem 14.01.2022 updaten.
- Wenn Du den Dexcom G5 oder G6 verwendest, wird der Wechsel zur BYODA als Empfänger empfohlen, um von der rückwirkenden Glättung der BZ-Werte zu profitieren. Du kannst xDrip+ weiter für andere Zwecke verwenden, denn xDrip+ kann Werte von der BYODA empfangen.

### Änderungen

- 100-tausend Zeilen geändert, 105-tausend neue Codezeilen

- [Omnipod DASH Unterstützung](../Configuration/OmnipodDASH.md) @AdrianLxM @avereha @bartsopers @vanelsberg

- Unterstützung für [Dana-i](../Configuration/DanaRS-Insulin-Pump.md) @MilosKozak

- [DiaconnG8 Unterstützung](../Configuration/DiaconnG8.md)

- Glunovo Unterstützung

- Interne Datenbank aktualisiert auf Room @MilosKozak @Tebbe @AdrianLxm @Philoul @andyrozman

- Viel Code umgeschrieben zu Kotlin @MilosKozak

- Neue interne Schnittstelle für Pumpentreiber

- NSClient komplett neu programmiert, um eine bessere Synchronisierung und detailliertere Anpassungen zu ermöglichen @MilosKozak

  - Einträge können nicht via NS gelöscht werden. (Sie können aber durch den NSClient als ungültig gekennzeichnet werden.)
  - Einträge können via NS nicht verändert werden
  - Nightscout-Synchronisation ist (für Eltern) ohne engineering mode möglich.
  - Möglichkeit, Daten neu zu synchronisieren

- Änderung am Verhalten von Profilwechseln. Jetzt wird zwischen Profilwechsel \[Profile switch\] *(was der Benutzer will)* und Profiländerung \[Profile change\] *(wenn Änderungen von Pump)* unterschieden.

- Beim Erstellen eines Profilwechsels kann ein temporäres Ziel für Aktivität gestartet werden.

- NSProfil ist weg, nur lokales Profil kann verwendet werden. Lokales Profil kann [mit NS synchronisiert](update3_0-nightscout-profile-cannot-be-pushed) werden. @MilosKozak.

- Möglichkeit, das [Master Password zurückzusetzen](update3_0-reset-master-password) @MilosKozak

- Rückverfolgung der Benutzereingaben @Philoul

- Neue Automation TempTargetValue Trigger @Philoul

- Neue Automatisierung Careportal Aktion @Philoul

- Bolus Erinnerung im KH-Dialog @Philoul

- Verbesserung Bolus Assistent

- Verbesserung der Anzeige (user interface) @MilosKozak

- Neue Anwender-Buttons für Automatisierungen @MilosKozak

- Neues Automatisierungs-Layout @MilosKozak

- History Browser aktualisiert und Fehler behoben @MilosKozak

- Objective 9 wurde entfernt @MilosKozak

- Fehler bei instabilen CGM-Werten behoben @MilosKozak

- Verbesserung der Kommunikation mit DanaR und DanaRS @MilosKozak

- CircleCI-Integration @MilosKozak

- Änderung des Speicherorts:

  - /AAPS/extra (engineering mode)
  - /AAPS/logs /AAPS/exports
  - /AAPS/preferences

## Version 2.8.2

Erscheinungsdatum: 23.01.2021

- Beachte bitte auch die [wichtigen Hinweise zur Version 2.8.1.1](Releasenotes-important-hints-2-8-1-1) weiter unten.

### Änderungen

- Stabilitätsverbesserungen
- Weitere Anpassungen für Android 8+
- verbesserte Symbole
- Verbesserung für Smartwatches
- NSClient-Korrekturen
- Bolus-Berater funktioniert jetzt auch mit Pumpcontrol und NSClient

## Version 2.8.1.1

Erscheinungsdatum: 12.01.2021

(important-hints-2-8-1-1)
### Wichtige Hinweise

- Option **Zu Nightscout nur hochladen** ist verpflichtend für alle 2.8.1.1 Nutzer aktiviert.
- Falls du den NSClient zur Eingabe von temporären Zielen, Kohlenhydraten oder Profilwechseln verwendest, musst du diese Option in AAPS deaktivieren - **aber nur dann, wenn deine Synchronisierung gut funktioniert** (z.B. keine unerwünschten Änderungen wie selbstständige Änderungen der temporären Ziele, temporären Basalraten etc.).
- ACHTUNG: KEINESFALLS deaktivieren, wenn irgendeine andere App Behandlungen zu Nightscout hochlädt (z.B. xDrip+ broadcast/upload/sync).
- Die Option kann nur deaktiviert werden, wenn der engineering mode aktiviert ist.

### Wesentliche Änderungen

- Verbesserungen und Fehlerbehebungen für RileyLink, Omnipod und Medtronic Pumpen
- 'Zu Nightscout nur hochladen' nun verpflichtend
- Fehlerbehebung für SMB & Dexcom App
- Watchface Korrekturen
- Verbesserte Crash-Reports
- Gradle zurückgesetzt, um direkte Installation des Watchfaces zu ermöglichen
- Fehlerbehebung bei Automatisierungen
- Verbesserung Dana RS Treiber
- Verschiedene Absturzursachen behoben
- Fehlerkorrekturen und Verbesserungen der Benutzeroberfläche
- neue Übersetzungen

(Releasenotes-version-2-8-0)=
## Version 2.8.0

Erscheinungsdatum: 01.01.2021

### Wichtige Hinweise

- **Mindestvoraussetzung ist nun Android 8.0.** Falls Du ein Smartphone mit einer älteren AndroidVersion verwendest, kannst Du immer noch die Version 2.6.1.4 aus dem alten Repository verwenden.
- [Objectives (Ziele) wurden geändert.](Objectives-objective-3-prove-your-knowledge) **Wenn du dein aktuelles Ziel noch nicht abgeschlossen hast, so beende dieses vor dem Update.**
- Repository weiterhin auf <https://github.com/nightscout/AndroidAPS> . Wenn Du Dich mit git nicht auskennst, ist es am einfachsten, wenn Du das vorhandene AAPS-Verzeichnis entfernst und die [App-Erstellung von vorne](../Installing-AndroidAPS/Building-APK.md) (new clone) beginnst.
- Nutze bitte [Android Studio 4.1.1](https://developer.android.com/studio/) oder neuer, um die apk zu erstellen.

### Wichtige neue Funktionen

- [Omnipod Eros Unterstützung](../Configuration/OmnipodEros.md) @bartsopers @andyrozman @ktomy @samspycher @TeleRiddler @vanelsberg @eurenda und besonderer Dank an @ps2 @itsmojo, alle anderen am Loop-Treiber für Omnipod Beteiligten, sowie @jlucasvt von GetRileyLink.org
- [Bolus-Berater](Preferences-bolus-advisor) & [Essens-Erinnerung](Screenshots-eating-reminder) @MilosKozak
- [Neues Watchface](Watchfaces-new-watchface-as-of-AAPS-2-8) @rICTx-T1D
- Verbesserung der Verbindung zur Dana RS @MilosKozak
- Verhalten "Unveränderte CGM Werte" für SMB für Dexcom-nativer App entfernt
- Neues [Erscheinungsbild für niedrige Bildschirmauflösungen](Preferences-skin)
- Neuer Patiententyp ["Schwanger"](Open-APS-features-overview-of-hard-coded-limits) @Brian Quinion
- Neues NSClient-Layout für Tablets @MilosKozak
- NSClient überträgt Insulin, Senstivität und Anzeige-Einstellungen direkt von AAPS @MilosKozak
- [Filter für Einstellungen im 3-Punkte-Menü](../Configuration/Preferences.md) @Brian Quinion
- Neue Pumpensymbole @Rig22 @@teleriddler @osodebailar
- Neues [Insulin Lyumjev](Config-Builder-lyumjev)
- Verbesserungen im Einrichtungsassitenten @MilosKozak
- Verbesserung der Sicherheit @dlvoy
- Verschiedene Verbesserungen und Fehlerbehebungen @AdrianLxM @Philoul @swissalpine @MilosKozak @Brian Quinion

(Releasenotes-version-2-7-0)=
## Version 2.7.0

Erscheinungsdatum: 24.09.2020

**Prüfe nach dem Update auf 2.7 auf jeden Fall deine Einstellungen und passe sie ggf. an wie** [hier beschrieben](../Installing-AndroidAPS/update2_7.md).

Du musst [Objective 11](Objectives-objective-10-automation) zumindest gestartet haben, um die [Automation](../Usage/Automation.md) weiter nutzen zu können. Alle vorangegangenen Objectives müssen abgeschlossen sein, sonst kann Objective 11 nicht gestartet werden. Wenn Du z.B. bisher den Test in [Objective 3](Objectives-objective-3-prove-your-knowledge) noch nicht beendet hast, musst Du diesen erst abschließen, bevor Du [objective 11](Objectives-objective-10-automation) starten kannst. Andere, von Dir bereits abgeschlossene Objectives werden dadurch nicht verändert. Du behälst alle Objectives, die Du bereits abgeschlossen hast!

### Wichtige neue Funktionen

- Zahlreiche Code- und Library-Änderungen, Code neu in Kotlin geschrieben @MilosKozak @AdrianLxM
- Module für Dana Pumpen @MilosKozak
- [Neues Layout und Layoutauswahl](../Getting-Started/Screenshots.md) @MilosKozak
- Neues [Status Lights Layout](Preferences-status-lights) @MilosKozak
- [Unterstützung mehrerer Diagramme](Screenshots-section-f-main-graph) @MilosKozak
- [Profil Helfer](../Configuration/profilehelper.md) @MilosKozak
- Visualisierung der [dynamischen Ziel-Anpassung](Screenshots-visualization-of-dynamic-target-adjustment) @Tornado-Tim
- Neues [Layout für die Einstellungen](../Configuration/Preferences.md) @MilosKozak
- Update des SMB Algorithmus @Tornado-Tim
- [Low glucose Suspend (Reduzierung der Baslarate bei niedrigen Glukosewerten) Modus](Preferences-aps-mode) @Tornado-Tim
- [Benachrichtigung Kohlenhydrate benötigt](Preferences-carb-required-notification) @twain47 @Tornado-Tim
- Careportal entfernt (jetzt im Aktionen-Tab/Menü) @MilosKozak
- [Neues, verschlüsseltes Exportformat](../Usage/ExportImportSettings.md) @dlvoy
- [Neue SMS Authentifikation mit Einmalpasswort](../Children/SMS-Commands.md) @dlvoy
- [Neue SMS-Befehle zum Verbinden und Trennen der Pumpe](SMS-Commands-commands) @Lexsus
- Bessere Unterstützung niedriger Basalraten bei Dana Pumpen @Mackwe
- Small Fehlerbehebungen für Insight Pumpen @TebbeUbben @MilosKozak
- [Option "Standardsprache"](Preferences-general) @MilosKozak
- Vector Icons @Philoul
- [Neutrales temp. Basal für Medtronic-Pumpen](MedtronicPump-configuration-of-the-pump) @Tornado-Tim
- Verbesserung Historie @MilosKozak
- OpenAPS MA Algorithmus entfernt @Tornado-Tim
- Oref0 Sensitivität entfernt @Tornado-Tim
- [Biometrischer oder Password-Schutz](Preferences-protection) für die Einstellungen und Bolus @MilosKozak
- [Neuer Automation Trigger](../Usage/Automation.md) @PoweRGbg
- [Open Humans Uploader](../Configuration/OpenHumans.md) @TebbeUbben @AdrianLxM
- Neue Dokumentation @Achim

(Releasenotes-version-2-6-1-4)=
## Version 2.6.1.4

Erscheinungsdatum: 04.05.2020

Nutze bitte [Android Studio 3.6.1](https://developer.android.com/studio/) oder neuer, um die apk zu erstellen.

### Wichtige neue Funktionen

- Insight: Vibration bei Bolus deaktivieren (Nur Firmware Version 3.x) - zweiter Versuch
- Sonst identisch mit 2.6.1.3. Update ist optional.

## Version 2.6.1.3

Erscheinungsdatum: 03.05.2020

Nutze bitte [Android Studio 3.6.1](https://developer.android.com/studio/) oder neuer, um die apk zu erstellen.

### Wichtige neue Funktionen

- Insight: Vibration bei Bolus deaktivieren (Nur Firmware Version 3.x)
- Sonst identisch mit 2.6.1.2. Update ist optional.

## Version 2.6.1.2

Erscheinungsdatum: 19.04.2020

Nutze bitte [Android Studio 3.6.1](https://developer.android.com/studio/) oder neuer, um die apk zu erstellen.

### Wichtige neue Funktionen

- Fehlerbehebung Insight Service
- Sonst identisch mit 2.6.1.1. Wenn Dich der Fehler nicht betrifft, musst Du nicht updaten.

## Version 2.6.1.1

Erscheinungsdatum: 06.04.2020

Nutze bitte [Android Studio 3.6.1](https://developer.android.com/studio/) oder neuer, um die apk zu erstellen.

### Wichtige neue Funktionen

- Fehlerbehebung SMS CARBS Kommando in Zusammenhang mit der Combo Pumpe
- Sonst identisch mit 2.6.1. Wenn Dich der Fehler nicht betrifft, musst Du nicht updaten.

## Version 2.6.1

Erscheinungsdatum: 21.03.2020

Nutze bitte [Android Studio 3.6.1](https://developer.android.com/studio/) oder neuer um die apk zu erstellen.

### Wichtige neue Funktionen

- Nur `https://` in Nightscout-Client Einstellungen erlaubt
- Fehlerbehebung [BGI](../Getting-Started/Glossary.md) Anzeige auf der Smartwatch
- Kleiner Anzeigefehler behoben
- Fehlerbehebung Abstürze der Insight Pumpe
- Fehlerbehebung zukünftige Kohlenhydrate bei der Combo Pumpe
- Fehlerbehebung [Upload lokaler Profile zu Nightscout](Config-Builder-upload-local-profiles-to-nightscout)
- Verbesserung Alarme bei der Insight Pumpe
- Verbesserte Erkennung der Boli aus der Pumpenhistorie
- Fehlerbehebung Nightscout-Client Verbindungs-Einstellungen (WLAN, Laden)
- Fehlerbeseitigung beim Senden der Kalibrierungen an xDrip+

(Releasenotes-version-2-6-0)=
## Version 2.6.0

Erscheinungsdatum: 29.02.2020

Nutze bitte [Android Studio 3.6.1](https://developer.android.com/studio/) oder neuer, um die apk zu erstellen.

### Wichtige neue Funktionen

- Kleinere Designänderungen (Startseite...)

- Careportal Tab / Menü entfernt - weitere Details dazu [hier](../Usage/CPbefore26.md)

- New [Local Profile plugin](Config-Builder-local-profile)

  - Im lokalen Profil können mehrere Profile gespeichert werden.
  - Profile können geklont und bearbeitet werden.
  - Lokale Profile können zu Nightscout hochgeladen werden.
  - Profilwechsel können in ein neues lokales Profil geklont werden (Zeitverschiebung und Prozentsatz werden berücksichtigt).
  - Neue Eingabemöglichkeit für Zielwerte

- Einfaches Profil wurde entfernt.

- [Extended bolus](Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) Funktionalität - Closed Loop wird deaktiviert

- Medtronic Pumpe: Fehler mit doppelten Einträgen behoben

- Maßeinheiten (mmol / mg/dl) werden nicht mehr im Profil angegeben, sondern als globale Einstellung.

- Neue Einstellungen zum Einrichtungsassistenten hinzugefügt.

- User Interface verbessert und interne Verbesserungen

- [Wear OS-Komplikationen](../Configuration/Watchfaces.md)

- Neue [SMS-Befehle](../Children/SMS-Commands.md) BOLUS-MEAL, SMS, CARBS, TARGET, HELP

- Korrektur Sprachauswahl

- Ziele: [Zurückgehen zugelassen](Objectives-go-back-in-objectives), Dialog zum Zeitabruf

- Automation: [Regeln sortieren](Automation-sort-automation-rules)

- Automatisierung: Fehlerbeseitigung - Regeln wurden bei pausiertem Loop ausgeführt

- Neue Statuszeile für Combo

- Verbesserung des Glukosestatus

- Fehlerbehebung: TempTarget NS-Synchronisation

- Neue Aktivitätsstatistik

- Verzögerter Bolus im Open Loop verfügbar

- Android 10 Alarmunterstützung

- Viele neue Übersetzungen

## Version 2.5.1

Erscheinungsdatum: 31.10.2019

Bitte beachte die [wichtigen Hinweise](Releasenotes-important-notes-2-5-0) und [Beschränkungen](Releasenotes-is-this-update-for-me-currently-is-not-supported), die bei [Version 2.5.0](Releasenotes-version-2-5-0) aufgeführt sind. \* Es wurde ein Fehler im Netzwerk-Status-Empfänger behoben, der zu einigen Abstürzen geführt hat (nicht kritisch, würde aber viel Energie verbrauchen auf Grund der ständigen Neuberechnungen). \* Eine neue Versionssteuerung, die es ermöglicht, kleinere Aktualisierungen durchzuführen, ohne die Aktualisierungsbenachrichtigung auszulösen.

(Releasenotes-version-2-5-0)=
## Version 2.5.0

Erscheinungsdatum: 26.10.2019

(Releasenotes-important-notes-2-5-0)=

### Wichtige Hinweise

- Verwende [Android Studio Version 3.5.1](https://developer.android.com/studio/) oder neuer [um die App zu erstellen](../Installing-AndroidAPS/Building-APK.md) oder [ein Update durchzuführen](../Installing-AndroidAPS/Update-to-new-version.html).
- Wenn Du xDrip verwendest, muss [identify receiver](xdrip-identify-receiver) gesetzt sein.
- Wenn Du Dexcom G6 mit der gepatchten Dexcom App verwendest, benötigst du die Version vom [2.4 Ordner](https://github.com/dexcomapp/dexcomapp/tree/master/2.4).
- Glimp wird ab Version 4.15.57 und neuer unterstützt.

(Releasenotes-is-this-update-for-me-currently-is-not-supported)=
### Kann ich dieses Update nutzen? Aktuell werden NOCH NICHT unterstützt:

- Android 5 oder niedriger
- Poctech
- 600SeriesUploader
- Patched Dexcom App aus dem Verzeichnis 2.3

### Wichtige neue Funktionen

- Interne Änderung des targetSDK auf 28 (Android 9), Jetpack-Unterstützung
- RxJava2, Okhttp3, Retrofit Support
- Alte [Medtronic Pumpen](../Configuration/MedtronicPump.md) werden unterstützt (RileyLink erforderlich)
- Neues Plugin [Automation](../Usage/Automation.md)
- Möglichkeit, [nur einen Teil des vom Bolus-Rechner ermittelten Bolus](Preferences-advanced-settings-overview) abzugeben.
- Darstellung der Insulinaktivität
- Anpassung der IOB-Vorhersagen auf Basis der Autosens Ergebnisse
- Neue gepatchte Dexcom App ([2.4 Ordner](https://github.com/dexcomapp/dexcomapp/tree/master/2.4))
- Signaturprüfung
- Möglichkeit für OpenAPS Anwender, die Ziele (Objectives) zu überspringen
- Neue [Ziele (objectives)](../Usage/Objectives.md) -  Wissens-Check & App-Bedienung (Wenn Du mindestens mit dem Ziel "Starte den Open Loop" in einer vorhergehenden Version begonnen hast, ist der Wissens-Check optional.)
- Fehlerbehebung Dana Treiber, bei dem eine falsche Zeitdifferenz angegeben wurde
- Fehlerbehebung [SMS-Befehle](../Children/SMS-Commands.md)

## Version 2.3

Erscheinungsdatum: 25.04.2019

### Wichtige neue Funktionen

- Wichtiger Sicherheitsfix für Insight (wirklich wichtig, wenn Du die Insight nutzt!)
- Bugfix History-Browser
- Bugfix Delta-Berechnungen
- Sprach-Updates
- Überprüfung git und Warnung bei gradle Upgrade
- Zusätzliche automatische Tests
- Bugfix eines potentiellen Absturzes des Alarm Sound Dienstes (Danke @lee-b!)
- Bugfix BG-Broadcast (funktioniert nun unabhängig von den SMS-Berechtigungen!)
- Neuer Versionscheck

## Version 2.2.2

Erscheinungsdatum: 07.04.2019

### Wichtige neue Funktionen

- Korrektur Autosens: deaktiviert TT Anstiege / senkt Zielwert
- Neue Übersetzungen
- Korrekturen Insight Treiber
- Korrektur SMS-Plugin

## Version 2.2

Erscheinungsdatum: 29.03.2019

### Wichtige neue Funktionen

- [Korrektur Umstellung Sommer-/Winterzeit](Timezone-traveling-time-adjustment-daylight-savings-time-dst)
- Wear Update für die Smartwatch
- Update [SMS plugin](../Children/SMS-Commands.md)
- Möglichkeit, bei den Objectives (Zielen) zurück zu gehen
- Unterbrechung des Loop wenn Speicherplatz des Smartphones aufgebraucht ist.

## Version 2.1

Erscheinungsdatum: 03.03.2019

### Wichtige neue Funktionen

- Unterstützung für [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md) (von Tebbe Ubben und JamOrHam)
- Statusanzeige auf dem Hauptbildschirm (Nico Schmitz)
- Assistent für die Zeitumstellung (Sommer-/Winterzeit - Roumen Georgiev)
- Korrektur der Verarbeitung von Profilnamen, die von Nightscout übertragen werden (Johannes Mockenhaupt)
- Sperre des User Interface behoben (Johannes Mockenhaupt)
- Unterstützung für die aktualisierte G5-App (Tebbe Ubben und Milos Kozak)
- G6, Poctech, Tomato, Eversense als BZ-Quelle (Tebbe Ubben und Milos Kozak)
- Korrektur deaktivieren SMB Präferenzen (Johannes Mockenhaupt)

### Verschiedenes

- Falls Du ein vom Standard abweichenden `smbmaxminutes` Wert nutzt, musst Du diesen erneut eingeben.

## Version 2.0

Erscheinungsdatum: 03.11.2018

### Wichtige neue Funktionen

- Oref1/SMB wird unterstützt ([oref1 documentation](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html)). Bitte lies zuerst die Dokumentation, damit Du weißt was du davon erwarten kannst, wie es funktioniert, was der SMB erreichen kann und wie er zu benutzen ist, damit er gut arbeitet.
- Unterstützung für [\_Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md)
- Einrichtungs-Assistent: Der neue Assistent führt Dich durch die Einrichtung von AAPS.

(Releasenotes-settings-to-adjust-when-switching-from-ama-to-smb)=
### Einstellungen, die bei Umstellung von AMA zu SMB erforderlich sind

- Objective 10 muss gestartet sein, damit die SMB-Funktion zur Verfügung steht (der SMB-Reiter zeigt dir, welche Beschränkungen bestehen).

- maxIOB enthält nun das gesamte IOB, nicht nur das hinzugefügte Basalinsulin. Das bedeutet: Wenn du einen Bolus von 8 IE gegeben hast und maxIOB ist 7, dann wird kein SMB ausgelöst, solange das Gesamt-IOB nicht wieder auf unter 7 IE abgefallen ist.

- Der Standardwert von min_5m_carbimpact erhöht sich von 3 bei AMA auf 8 beim SMB. Wenn du also von AMA auf SMB umstellst, dann musst du den Wert manuell auf 8 erhöhen

- Bitte beachte beim Erstellen einer AAPS 2.0 apk: 'Configuration on demand' wird in der aktuellen Version des Android Gradle Plugins nicht unterstützt! Wenn der Build-Prozess mit einem Fehler zu "on demand configuration" fehlschlägt, dann kannst du folgendes tun:

  - Das Einstellungen-Fenster öffnen, indem du auf Datei > Einstellungen (auf dem Mac: Android Studio > Preferences) klickst.
  - Klicke im linken Fensterbereich auf Build, Execution, Deployment > Compiler.
  - Deaktiviere die "Configure on demand" Checkbox.
  - Klicke Apply oder OK.

(Releasenotes-overview-tab)=
### Startseite

- Im oberen Menüband (Abschnitt A) kannst Du durch langen Fingerdruck den Loop pausieren oder deaktivieren, die Pumpe trennen, das aktuelle Profil anzeigen und einen Profilwechsel machen, sowie temporäre Ziele (temp targets - TT) einstellen. Die temporären Ziele verwenden Standardwerte, die du in den Einstellungen festlegen kannst. Das neue Standard-Ziel “HypoTT” löst ein temporäres Ziel im höheren BZ-Bereich aus, damit der Loop nicht überreagiert nachdem du Korrektur-Kohlenhydrate gegessen hast.
- Neue Behandlungs-Schaltfläche: die alte Behandlungs-Schaltfläche ist weiterhin verfügbar, aber standardmäßig deaktiviert. Du kannst jetzt selbst einstellen, welche Schaltflächen du auf dem Home-Screen haben willst. Neue Buttons für Insulin und Kohlenhydrate (inkl. [eCarbs/extended carbs](../Usage/Extended-Carbs.md))
- [Farbige Vorhersagelinien](../Getting-Started/Screenshots-prediction-lines)
- Option in den Dialogen für Insulin, Kohlenhydrate, Rechner und Füllen/Vorfüllen ein Feld für Bemerkungen, die zu Nightscout hochgeladen werden, anzuzeigen.
- Überarbeiteter Füllen/Vorfüllen-Dialog. Möglichkeit, gleichzeitig Careportal-Einträge für Katheter- und Reservoirwechsel zu erstellen.

### Smartwatch

- Auf die separate Build Variante “wearcontrol” wird verzichtet, die Smartwatch-Steuerung ist jetzt in der full build Variante enthalten. Um die Bolus-Steuerung auf der Smartwatch zu verwenden, musst du dies in AAPS auf dem Smartphone aktivieren.
- Der Rechner wird nur noch nach Kohlenhydraten (und - falls aktiviert - nach einem Prozentsatz) fragen. Du kannst in den Einstellungen auf dem Smartphone festlegen, welche Parameter bei einem Bolus, der von der Smartwatch aus gegeben wird, in die Berechnung einbezogen werden sollen.
- Bestätigungen und Info-Dialoge funktionieren jetzt auch unter Android Wear 2.0 gut.
- eCarbs Menüeintrag hinzugefügt

### Neue Plugins

- PocTech App als BZ-Quelle
- Dexcom App (patched) als BZ-Quelle
- Oref1 Empfindlichkeitserkennung

### Verschiedenes

- Die App verwendet jetzt “drawer”, um alle Plugins zu zeigen. Alle Plugins, die im Konfigurations-Generator als sichtbar markiert sind, werden als Reiter im oberen Bereich (Abschnitt A) angezeigt (Favoriten).
- Überarbeitung des Konfigurations-Generators und des Objectives-Reiters. Beschreibungen hinzugefügt.
- Neues App-Icon
- Viele weitere Verbesserungen und Fehlerbehebungen.
- Von Nightscout unabhängige Alarme wenn die Pumpe über längere Zeit nicht erreichbar ist (z.B.  schwache Pumpenbatterie) und bei verpassten CGM-Werte (siehe *lokale Alarme* in den Einstellungen).
- Option, das Display immer an zu lassen.
- Option, die Hinweise als Systemmeldungen anzuzeigen.
- Advanced filtering (das erlaubt die Nutzung von “SMB immer an” und “6 Stunden nach dem Essen”) wird unterstützt mit der gepatchten Dexcom App (nicht mit der originalen Dexcom App!) oder xDrip mit dem G5 native mode als BZ-Quelle.
