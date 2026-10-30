
# Release Notes

```{toctree}
:hidden:

Update2_7.md
Update3_0.md
UpdateAaps3204.md
```

Zur Aktualisierung auf eine neue Version befolge bitte die Schritte in der [Update Anleitung](UpdateToNewVersion). Der Abschnitt Fehlerbehebung bespricht auch die häufigsten Schwierigkeiten, die beim Aktualisieren von **AAPS** mit der Update-Anleitung aufgetreten sind.

```{admonition} Upgrading from AAPS v3?
:class: tip
Schaue im Abschnitt [Was sich mit AAPS Version geändert hat](V4Changes.md) nach. Dort findest Du die wesentlichen Änderungen - Funktionen, die nun an anderer Stelle zu finden sind, umbenannte Funktionen und auch gelöschte Funktionen.
```

Wenn eine neue Version verfügbar wird, wirst Du mit einer Meldung, wie dieser, benachrichtigt:

![Update-Info](../images/AAPS_LoopDisable90days.png)

Solltest Du bis zum Fälligkeitsdatum das Update nicht durchgeführt haben, wird **AAPS** in den „Open Loop“ wechseln.

Die Enddaten der AAPS-Versionen findest Du unter [Supportende](EndOfLife.md).

**Ignoriere die Benachrichtigung nicht.** Neue **AAPS**-Versionen beheben wichtige Sicherheitsthemen. Deswegen muss jeder **AAPS**-Nutzende so schnell wie möglich auf die neueste Version aktualisieren. Dies ist eine Chance die Sicherheit für jeden **AAPS**-Nutzenden und die DIY-Community zu verbessern. Vielen Dank für Dein Verständnis.

(maintenance-android-version-aaps-version)=

## Android Version und AAPS Version

Wenn die Android-Version Deines Smartphones älter als Android 12 ist, kannst Du nicht auf AAPS v3.4 updaten. Es ist mindestens Android 12 erforderlich.

Damit Benutzer älterer Android-Versionen nicht ausgeschlossen werden, wurden zwei ältere Versionen zur Verfügung gestellt, bei denen die Versionsprüfung angepasst wurde. Es sind keine anderen Verbesserungen enthalten.

Die zu Deiner Android-Version passende **AAPS-Version**, findest in der folgenden Tabelle. Der Code wird von <https://github.com/nightscout/AndroidAPS> vom angezeigten Branch heruntergeladen.

| Deine Android-Version | Zu nutzende AAPS-Version | Branch für den Download                                          |
| --------------------- | ------------------------ | ---------------------------------------------------------------- |
| Ab Android 12         | Neueste Version          | [master](https://github.com/nightscout/AndroidAPS) (Standard)    |
| Android 11            | **3.3.2.1**              | [3.3.2.1](https://github.com/nightscout/AndroidAPS/tree/3.3.2.1) |
| Android 9,10          | **3.2.0.4**              | [3.2.0.4](https://github.com/nightscout/AndroidAPS/tree/3.2.0.4) |
| Android 8             | **2.8.2.1**              | [2.8.2.1](https://github.com/nightscout/AndroidAPS/tree/2.8.2.1) |
| Android 7             | **2.6.2**                | [2.6.2](https://github.com/nightscout/AndroidAPS/tree/2.6.2)     |

## Wear OS-Version

- AAPS benötigt WearOS 3.0, 3.2 oder 3.5 (Android 11, API Level 30) oder neuer. WearOS 2 Smartwatches werden nicht unterstützt.

```{tip}
WearOS 5, API Level 34 (Android 14) hat [einige Einschränkungen](#BuildingAapsWearOs-WearOS5).
```

(latestrelease)=

(version400)=

## Version 4.0.0

Erscheinungsdatum: 31.10.2026

### Neue Funktionen
- Neue Benutzeroberfläche: Smartphone-App neu in Jetpack Compose erstellt @MilosKozak
- [Übergreifende Suche](../DailyLifeWithAaps/GlobalSearch.md) @MilosKozak
- Kotlin Multiplattform-Migration, Client für Windows, Mac, Linux-Desktop und iOS @MilosKozak
- [Szenen](../DailyLifeWithAaps/Scenes.md): Speichere eine Aktionen-Abfolge und führe diese gemeinsam aus @MilosKozak
- [Master ↔ Client Steuerung](../RemoteFeatures/ClientMasterControl.md): Sende Befehle vom Client-Smartphone an den Master @MilosKozak
  - [Client-Rollen](#client-master-control-roles): Nur Lesen, Mahlzeiten, Betreuer oder Admin für jeden Client @MilosKozak
  - [Gehärteter Modus](#client-master-control-hardened-mode): Mit aktivierter Client-Steuerung übernimmt der Master nur Änderungen von gekoppelten Clients @MilosKozak
  - Koppeln mit einem QR-Code, der auch Nightscout auf dem Client einrichtet, oder mit einer PIN; das Koppelungs-Secret wird direkt nach dem Pairing ersetzt @MilosKozak
  - [Eigenes Nightscout-Token](#client-master-control-own-token) für jeden Client, nur mit den vom Client benötigten Rechten @MilosKozak
- [Insulinkonzentration](../AdvancedOptions/InsulinConcentration.md)-Unterstützung (U200, U500) über Pumpen, Rechner/Assistenten und Profile @Philoul @MilosKozak
- Insulinmanagement: Insulinkatalog, Spitznamen, Auswahl im Profil und Assistent @Philoul
- Kalibrierungsmodul @MilosKozak
- [Glättung](../CompatibleCgms/SmoothingBloodGlucoseData.md): „Unscented Kalman Filter“ (UKF) @piecycle
- [Site-Rotation](#Aapsscreens-site-rotation): Tracken und wechseln der Setzstellen @Philoul @MilosKozak
- [Autotune](../AdvancedOptions/Autotune.md) überarbeitet @Philoul
- Neue [Widgets](../DailyLifeWithAaps/Widgets.md) @MilosKozak @t1dude
- Barrierefreiheit: Die Smartphone-App ist Screen-Reader kompatibel - Steuerelemente werden genannt, Status wird gesprochen, Beschreibungen und Überschriften zum Überfliegen („skim“) @MilosKozak
- [Einstellungen importieren](../Maintenance/ExportImportSettings.md): Pumpeinstellungen behalten @MilosKozak
- Dauerhafte Benachrichtigung nutzt die Live-Updates von Android, unterstützt die Samsung „Now“-Leiste und zeigt die Veränderung an @premnirmal
- BZ-Diagramm: [Tippen und halten](#aaps-screens-graph-press-and-hold), um den Messwert anzuzeigen; auf jedem Diagramm der Übersicht @t1dude @olorinmaia
- Leistungsverbesserungen @MilosKozak
- Automatische E-Carbs im Bolus-Assistenten @MilosKozak

### Neue Geräte
- **CareLevo**: neue [Pumpenunterstützung](../CompatiblePumps/CareLevo.md) @Kisu-Choi @MilosKozak
- **Dana-i2**: Unterstützung @MilosKozak
- **Instara**: neue CGM-Quelle @leohunt

### Verbesserungen in der Pumpenunterstützung
- Pumpenübersicht für Insight, Medtronic, Medtrum, Omnipod, Dana, Diaconn und Equil neu erstellt @MilosKozak
- **Omnipod Dash**: PDM Referenz-Codes und lesbare Fehlerbeschreibungen, Driftkompensation immer an, besseres Bolustyp-Reporting @nl-ruud
- **Omnipod**: Hartes Enddatum für Dash & Eros @mcnelson
- **DanaR, RS**: Pumpenemulator zum Testen @MilosKozak
- **Equil**: Pumpenemulator zum Testen @MilosKozak
- Viele Pumpen- und Loop-Fehler behoben @MilosKozak und andere

### Wear OS
- [Smartwatch-App](../WearOS/WearOsSmartwatch.md) in Compose neu erstellt, neue Kacheln und Komplikationen, automatische Zifferblatt-Installation („Watch Face Push“) auf Wear OS 6+ @olorinmaia @Philoul
- „CustomWatchface“ verfügbar für WearOS 6.0 (GW7, GW8, GW9...) mit einem WFF-eigenem Watchface @Philoul @olorinmaia
- „CustomWatchface“ kann jetzt 5 Komplikationsslots, die Du anpassen kannst, haben (neue Funktion nur für ältere Smartwatches verfügbar) @Philoul
- Neues, [auf AAPS-Komplikationen bassierendes, WFF-Watchface](#wearos-complications-watchface-setup) @olorinmaia
- Korrekturen im Bolus-Rechne und dem Ergebnis des Schnell-Assistenten Ergebnis @olorinmaia
- Neues BZ-Diagramm und Betriebsmodus-Aktivität im Hauptmenü @olorinmaia
- Bolus-Rechner: [Mahlzeittyp](#WearOsSmartwatch-wizard-meal-type)-Seite auf der Smartwatch, die die Kohlenhydrate wie der Bolus-Rechner des Smartphones aufteilt und [KH-Zeit](#WearOsSmartwatch-wizard-carb-time) mit der *Essens*-Erinnerung auf die Smartwatch bringt @olorinmaia
- [Smartphone-Alarme auf der Smartwatch](#WearOsSmartwatch-phone-alarms): Die Smartwatch zeigt den Smartphone-Alarm an und er kann „schlummern“ oder für 5 Min. stumm geschaltet werden @olorinmaia

### Erstellen („Build“)
- CI-Workflows für Tag/Branch-Builds, JDK-Version Zuordnung @Angus-repo

### Beitragende
@MilosKozak @Philoul @olorinmaia @Kisu-Choi @leohunt @piecycle @Angus-repo @mcnelson @t1dude @premnirmal @nl-ruud

Vollständiges Änderungsprotokoll: <https://github.com/nightscout/AndroidAPS/compare/3.4.2.6...4.0.0>

(version3426)=

## Version 3.4.2.6

- Equil: Verbesserung der Stabilität @MilosKozak

(version3425)=

## Version 3.4.2.5

- Equil: Race Condition behoben @MilosKozak

(version3424)=

## Version 3.4.2.4

- Equil: Fehlerbehebungen @MilosKozak
- NS: Profilsynchronisation korrigiert @MilosKozak

(version3423)=

## Version 3.4.2.3
- Dash: Drift-Problem behoben @nl-ruud
- NSClientV3: Lücke nach Re-Connect behoben @MilosKozak
- Automatisierung: Deserialisierungsproblem behoben @MilosKozak
- Equil: Batterie-Report korrigiert @MilosKozak
- Workflow bereinigt @vanelsberg
- Equil: Verhalten nach Fehler verbessert @MilosKozak
- DanaRS: Interne Pumpenkommunikation korrigiert @MilosKozak
- Insight: TBR-Synchronisation korrigiert @MilosKozak
- Dash: Aktivierungsproblem behoben @nl-ruud

(version3422)=

## Version 3.4.2.2

- Probleme mit Equil und Medtronic behoben
- Medtrum-Sicherheit verbessert

(version3421)=

## Version 3.4.2.1

- Equil: Fehler im Koppelungs- und Fortschrittsdialog behoben @MilosKozak

(version3420)=

## Version 3.4.2.0

Erscheinungsdatum: 04.02.2026

- Equil: Resistenzhandling für diverse Modelle korrigiert @hhfcvmars
- Tidepool: Session-Handling korrigiert @MilosKozak
- Medtrum: Aktivierungspfad korrigiert, indem doppelte Befüllung vermieden wird @MilosKozak
- COB: COB-Berechnung korrigiert (deckt gefährlichen Sonderfall ab) @MilosKozak

(version3410)=

## Version 3.4.1.0

Erscheinungsdatum: 03.08.2026

### Core
- Zeitumstellungsproblem behoben @MilosKozak
- Vereinheitlichung und Verbesserung der normalen Ziel-Bestimmung (mgdl > 99, mmol > 5,5) @MilosKozak
- SMS: Für RESTART jetzt PIN notwendig @MilosKozak
- Wartung: Warnen, wenn falsches Verzeichnis ausgewählt ist @MilosKozak

### Verbesserungen in der Pumpenunterstützung
- **Omnipod Dash**: Bereinigung (Refactor) des BLE-Treibercodes für Omnipod/Common Module @jwoglom
- **Omnipod Dash**: Versuch den Verbindungs-Status zu korrigieren @MilosKozak
- **Omnipod**: Überprüfe das Profil vor der Pod-Aktivierung, um zu verhindern, dass Pods verschwendet werden (#4534) @brianV
- **Medtronic**: Korrektur des gleichen Kodierungstyps, der im Einstellungsdialog angezeigt wird @mifi100
- **Medtronic**: Tandem Vorbereitung - „pump common classes“ vorbereitet @andy-rozman
- **RileyLink**: Encoding-Fehler behoben (#4519) @mifi100
- **Equil**: Erweiterung der Insulinpumpenkompatibilität durch einen Seriennummer-Präfix (#4510) @hhfcvmars
- **Equil**: Logging hinzugefügt @MilosKozak
- **Diaconn G8**: Log-Sync-Fehler behoben und Unterstützung für Firmware 3.58+ ergänzt @miyeongkim
- **Diaconn**: Einheitenumwandlung der TBR-Dauer korrigiert @miyeongkim
- **Diaconn**: commandQueue.loadEvents() wird für den Sync des historischen Verlaufs genutzt @miyeongkim
- Insulinabgabe bei ausgesetztem Loop aber verfügbarer Pumpe nun möglich @cschuijt

### Cloud / Backup
- Backup zu Google Drive hinzugefügt @Angus-repo
- Benachrichtigen des UI bei Veränderungen des Cloud-Speicherfehlers @Angus-repo
- Gleichzeitiges Speichern lokal und in der Cloud nun möglich @Angus-repo

### Tidepool
- Tidepool OAuth2-Migration verbessert @MilosKozak
- Unbestimmten Tidepool BLOCKED Zustand und leere SSIDs korrigiert @michaeln-synapse

### Nightscout-Client
- NSCv3: Wiederverbindung verbessert @MilosKozak

### Wear OS
- Neues IOB wird im Bolus-Rechner angezeigt, wenn IOB in der Berechnung genutzt wird @olorinmaia
- Wear „BolusProgress“ mit Gesamtmenge korrigiert @Philoul

### UI (Benutzeroberfläche)
- „ic_none“-Icon für „Site-Rotation“ verbessert @Philoul
- Korrigiert: Site Rotation nicht zum Managen der Pumpeneinstellungen berücksichtigt @samfundev

### Beitragende
@MilosKozak @Philoul @olorinmaia @jwoglom @mifi100 @andy-rozman @Angus-repo @brianV @cschuijt @hhfcvmars @miyeongkim @samfundev @michaeln-synapse

(version3400)=

## Version 3.4.0.0

Erscheinungsdatum: 31.12.2025

### Vor dem Aktualisieren:
* Diese Version benötigt Google Android 12.0 oder höher. Prüfe vor der Aktualisierung die Smartphone-Version.
* Aktualisiere Android Studio auf die neueste Version oder noch besser, nutze den „Browser-Build“.

### Neue Funktionen
* Betriebsmodus @MilosKozak
  * Zeige die [Lopp-Status-Historie](#AapsScreens-running-mode) bei den „Behandlungen“
  * Anzeigen und ändern des [Loop-Status mit dem AAPSClient](#RemoteControl_aapsclient).<br>Beachte: Muss mit der Einstellung [NSClient > Synchronisation > Empfangen von Betriebsmodus-Ereignissen](#Preferences-nsclient-synchronization)
* [Neue CGMs](../Getting-Started/CompatiblesCgms.md) : Glunovo, Intelligo, Sinocare
* Unterstützung von [Setzstellen-Wechseln](#Aapsscreens-site-rotation) @Philoul
* Neue [Automatisierungsaktion](#automations-automation-action) : SMBs aktivieren oder deaktivieren @MilosKozak
* Syai CGM ist eine [vertrauenswürdige Quelle](#GettingStarted-TrustedBGSource) und unterstützt erweitertes Filtern @MilosKozak

### Wear OS Verbesserungen
* Akkuverbrauch drastisch reduziert @MilosKozak
* UI-Verbesserungen und -Korrekturen @olorinmaia
* Code fast vollständig neu geschrieben, um dem aktuellen Stand der Bibliotheken (zuvor WearOS 2) zu entsprechen @MilosKozak
* 2 neue Komplikationen für erweiterte Daten @Philoul
* Umstellung auf modernen Komplikationsanbieter mit DataStore @MilosKozak

### Behebung von Speicherlecks
* Speicherlecks im Code behoben @MilosKozak
* LeakCanary-Speicherleckberichte zu Firebase Crashlytics hinzugefügt @MilosKozak

### Verbesserungen in der Pumpenunterstützung
* **DanaI**: Verbindungsabbrüche behoben @MilosKozak
* **RileyLink**: Schnellere Kommunikation durch Minimierung der Verzögerungen @mifi100
* **Medtrum**: Patch-Aktivierungszeit und Alter hinzugefügt @vanelsberg, Passwort-Großbuchstaben behoben @MilosKozak
* **Combo**: Test Race Bedingungen korrigiert @MilosKozak @dv1
* **Equil**: Optimierte Konnektivität, reduzierter Akkuverbrauch @MilosKozak

### Nightscout Sync
* Verbesserte Deduplizierung bei NS-Ausfall @MilosKozak

### UI/UX Verbesserungen
* Diverse Verbesserungen @MilosKozak @Philoul @olorinmaia

### Automatisierung
* Neue SMB-Steuerungsaktion – SMB über Automatisierung aktivieren/deaktivieren @MilosKozak

### Testen
* Umfassende Komponententests für Equil-, Eopatch-, Dana- und Medtronic-Pumpen hinzugefügt @MilosKozak
* Verbesserte Teststabilität und Abdeckung über mehrere Module hinweg @MilosKozak

### Tidepool
* Tidepool OAUTH2 (Support für neue Tidepool-Authentifizierung) @MilosKozak

(version3321)=

## Version 3.3.2.1

Erscheinungsdatum: 13.08.2025

- Omnipod Bluetooth-Verbindung auf Android 16 behoben
- CI-Prozess - „Kontinuierliche Integration“ (Browser-Build)
- Umrechnung mmol-mg/dl korrigiert
- Falsche Zeitauswahl in Dialogen in einigen Zeitzonen korrigiert
- Lesen der Schlüssel im einfachen Modus korrigiert
- Fehlende Vorhersagen auf der Wear-Smartwatch korrigiert
- Konfigurator verbessert
- NSCv3 Vollsynchronisation verbessert

(version3300)=

## Version 3.3.2.0

Erscheinungsdatum: 27.03.2025

### So wird aktualisiert

* Um diese Version zu erstellen, benötigst Du die [Android Studio Version „Meerkat“](#Building-APK-recommended-specification-of-computer-for-building-apk-file) oder höher. Auch wenn Du bereits eine 3.3.x-Version erstellt hast, musst Du das Android Studio erneut aktualisieren.

(version-enforcement)=

### Beginnend mit dieser Version, wurde die Benachrichtigung und die Pflicht auf die neueste Version aktualisieren zu müssen vereinfacht und aufgeweicht. Das Vorgehen ist wie folgt:
*  Frist läuft nicht ab, wenn das Gerät offline ist (wenn keine Verbindung zum Internet besteht). D. h. es gibt keine 60- und 90-Tage „Übergangsfristen“ mehr.
*  Nach Ablauf wird der LGS-Modus erzwungen
*  Du erhältst seltener Warnungen/Benachrichtigungen:
   - 28+ Tage verbleibend: alle 7 Tage
   - 27-14 Tage verbleibend: alle 3 Tage
   - dann einmal am Tag
   - Benachrichtigung wird nach Mittag generiert, um Dich während der Nacht nicht zu stören
* Es gibt nur 2 Benachrichtigungsarten
   - Neue Version verfügbar (hat keine Auswirkung auf AAPS)
   - Anwendung läuft bald ab (noch keine Auswirkung auf AAPS) / ist abgelaufen (AAPS wird in den LGS-Modus umgestellt)

### Neues

* SMS RESTART Befehl @MilosKozak
* Smartwatch Profilwechsel-Parameter @olorinmaia
* Dark Mode AAPS V2 Zifferblatt @olorinmaia
* Verbesserung des G7-Datenaustauschs @olorinmaia
* Widget-Konfiguration @MilosKozak
* Radiobuttons UI verbessert @olorinmaia
* Automatisierung: Position aus der Karte auswählen @MilosKozak
* Version auf der Übersicht sichtbar @MilosKozak
* Kompilierung mit vorhandenem Git-System wird erzwungen (keine Zip-Downloads)
* Version auf der Übersicht anzeigen @MilosKozak
* Tidepool-Upload verbessert @ConstantinMatheis

### Behobene Fehler

* Dash: Problem mit Entkoppelung behoben @Andreas
* Garmin: Probleme behoben @robertbuessow @suside
* IOB-Anzeige in Dialogen korrigiert @olorinmaia
* Verbesserung der Rechtschreibung und der Validierungsprozesse in den Zielen (Objectives) @MilosKozak
* Rendern der emulierten TBRs verbessert @MilosKozak
* Umgehen der Sicherheitsmechanismen korrigiert @tdrkDev

## Version 3.3.1.3

Erscheinungsdatum: 21.01.2025

### Behobene Fehler

* Dash: Bonding ist optional (standardmäßig ausgeschaltet) @MilosKozak
* Equil: Bolus 10+U Fehler behoben, Alarmverbesserungen @EquilHack
* Garmin: Smartwatch-Verbesserungen @swissalpine
* Smartwatch-Verbesserungen @olorinmaia
* Loop-Status von der Smartwatch steuern @tdrkDev
* Stabilitätsverbesserungen

*  **[Authenticator muss möglicherweise neu eingerichtet werden](#sms-commands-authenticator-setup).**

## Version 3.3.1.2

Erscheinungsdatum: 15.01.2025

### So wird aktualisiert

* Um diese Version zu erstellen, benötigst Du die [Android Studio Version „Ladybug Feature Drop“](#Building-APK-recommended-specification-of-computer-for-building-apk-file) oder höher. **Dies ist eine andere Version als die Standardversion „Ladybug“.** Wenn Du schon eine AAPS 3.3.x-Version erstellt hast, musst Du Android Studio erneut aktualisieren.

### Behobene Fehler

* Dash: „Bonding“ in Android 15+ verwenden
* Dexcom-Button in der Übersicht wieder verfügbar gemacht
* Equil: Löschen einer defekten Pumpe ermöglicht
* Warnung, wenn der DynISF-Anpassungsfaktor Null ist, hinzugfefügt
* NSCv3: Websocket-Kommunikation auf Smartphones mit leicht unterschiedlichen Zeiten behoben
* SMS-Befehle: OneTimePassword behoben. **[Neueinrichtung des Authentifikators](#sms-commands-authenticator-setup) kann erforderlich sein.**
* Fehler, bei dem einige Einstellungen nicht mehr bearbeitet werden konnten, behoben.
* Zurücksetzen des Master-Passworts bei virtueller Pumpe behoben.
* Import von großen Sicherungsdateien der Einstellungen.

## Version 3.3.1.0

Erscheinungsdatum: 06.01.2025

### UI-Änderungen (Benutzeroberfläche)

* [Farben zur Unterscheidung von AAPSClient und AAPSClient2](#RemoteControl_aapsclient) hinzugefügt @MilosKozak
* Layout für Benutzerinteraktionen und Icons verbessert

### Sonstige Funktionen

* Neuer Automatisierungsauslöser: [Schrittanzahl](#screen-heart-rate-steps) @Roman Rihter
* NSCv3 Vollsynchronisation (einschließlich bisher nicht synchronisierter Daten wie TBR) ermöglicht @MilosKozak
* NSClient v3 : Fehler bei „Ankündigungen“ behoben (_d. h._ vom AAPSClient zu AAPS) @MilosKozak

### Technische Änderungen & Fehlerkorrekturen

* Insight-Abstürze behoben @philoul
* Erstellen überzähliger deviceStatus-Einträge in Nightscout behoben @MilosKozak
* Kohlenhydrat-Absorbtion korrigiert @MilosKozak
* Farbe von Radio-Buttons & Check-Boxen korrigiert @MilosKozak
* Fehler in der Migration des DynISF-Prozentsatzes behoben @MilosKozak
* Position der DynISF-Benachrichtigung korrigiert @MilosKozak
* Fehler in den Zifferblättern behoben @philoul

## Version 3.3.0.0

Erscheinungsdatum: 29.12.2024

### Wesentliche Funktionalitäten

* Die Funktion **[Dynamischer ISF](../DailyLifeWithAaps/DynamicISF.md)** ist nun kein eigenes Modul mehr, sondern gehört jetzt als Option zum Modul [OpenAPS SMB](#Config-Builder-aps). Gleichzeitig wurde das Verhalten in einigen Punkten angepasst:
  * **Profilwechsel** und **Profil-Prozentsatz** wird nun für die Stärke der dynamischen Empfindlichkeit des **dynamischen ISF** berücksichtigt
  * Der durchschnittliche **ISF** der letzten 24h wird berechnet. Dieser Wert wird für die Berechnungen im Bolus-Rechner und auch bei der **COB**-Ermittlung genutzt. Der **ISF-Profilwert** wird nicht verwendet (außer im Fallback-Fall, wenn die historischen Daten nicht verfügbar sind)
  * Die Dokumentationsseite zum dynamischen ISF wurde vollständig überarbeitet. Bitte lies den wichtigen Abschnitt [Dinge, die bei der Aktivierung des dynamischen ISF zu beachten sind](#dyn-isf-things-to-consider-when-activating-dynamicisf).
* [„SMB immer aktivieren“ und „Aktiviere SMB während aktiver Kohlenhydrate“](#Open-APS-features-enable-smb-always) werden für Nutzende des FreeStyle Libre 2 und Libre 3 aktiviert
  * Hinweis: Dafür wird die neueste Version von xDrip+ oder Juggluco benötigt.
* Neue **Automatisierungs**-Auslöser
* Export der Einstellungen im Hintergrund (unattended export)

### So wird aktualisiert

* Vor dem Aktualisieren:
  * **<span style="color:red">Diese Version benötigt Google Android 11.0 oder höher</span>**. Prüfe vor der Aktualisierung die Smartphone-Version.
  * Wenn Du die "alte" Combo-Unterstützung mit einem Ruffy als Zusatzgerät nutzt, stelle bitte vor Aktualisierung auf die [native Combo-Unterstützung](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) um
  * Während des Upgrades verlierst Du auf der Übersicht Deine [zusätzlichen Diagramme](#AapsScreens-section-g-additional-graphs): Wenn erforderlich, notiere Dir Deine aktuelle Konfiguration, so dass Du sie nach dem Upgrade wiederherstellen kannst.
  * Die [Bluetooth-Verbindungsprobleme, auf die einige Leute bei Android 15](../Getting-Started/Phones.md) stoßen, sind **NICHT** durch diese Version gelöst (dies ist ein Android-Problem und kein **AAPS**-Problem). Der Fehler ist in 3.3.1.2 behoben.
  * Die BYODA-Schaltfläche auf dem Startbildschirm ist aufgrund von Android-Einschränkungen nicht mehr verfügbar. Der Fehler ist in Version 3.3.1.2 behoben.
* Update-Anweisungen: Folge den Schritten der Anleitung [Update auf eine neue Version](../Maintenance/UpdateToNewVersion.md).
  * Um diese Version zu erstellen, benötigst Du die [Android Studio Version "Ladybug"](#Building-APK-recommended-specification-of-computer-for-building-apk-file) oder höher. Solltest Du bereits eine ältere Version des Android Studios installiert haben, musst Du <span style="color:red">die JVM-Version auf Version 21 bringen</span>. Siehe [Fehlerbehebung für Android Studio > Inkompatibles Gradle JVM](#incompatible-gradle-jvm).
  * Tipp - wenn Du Deinen **AAPS**-Verlauf (engl. history) nicht verlieren möchtest, mache ein UPDATE und KEINE DEINSTALLATION/NEUINSTALLATION. Als Vorsichtmaßnahme sichere Deine aktuellen **AAPS**-Einstellungen und die alte APK, um - falls etwas schiefgehen sollte - zu einer alten Version zurückkehren zu können.
* Nach dem Aktualisieren:
  * Definiere die neue Einstellung für das [“AAPS Verzeichnis”](#preferences-maintenance-logdirectory). Du findest sie auf dem Wartungs-Reiter.

### Die Änderungen im Detail

#### CGMs und Pumpen

* ["SMB immer aktivieren" und "Aktiviere SMB während aktiver Kohlenhydrate"](#Open-APS-features-enable-smb-always) für FreeStyle Libre 2 und Libre 3 Nutzende @MilosKozak
* Verbesserte [Medtrum-Unterstützung](../CompatiblePumps/MedtrumNano.md) @jbr77rr
  * Verbesserungen der Kommunikation, einschließlich neuer Einstellungen zur Problemumgehung auf einigen Smartphones
  * Reservoir-Level beim Start der Aktivierung anzeigen
  * Fehler behoben, bei dem die Aktivierung erneut startet und der Nutzende die Aktivierung nicht abschließen kann
  * Rückmeldung zum Sync-Status und andere Klarstellungen
* Neu unterstützte Pumpe: [Equil 5.3](../CompatiblePumps/Equil5.3.md) @EquilHack
* Neu unterstütztes CGM: [Ottai](../CompatibleCgms/OttaiM8.md) @ottai-developer und [Syai Tag](../CompatibleCgms/SyaiTagX1.md) @syai-dev
* Insight-Unterstützung auf Kotlin umgeschrieben @Philoul
* Alte, von ruffy abhängige, Combo-Unterstützung entfernt

#### UI-Änderungen (Benutzeroberfläche)

* [Einfacher Modus](#preferences-simple-mode) standardmäßig bei Neuinstallation aktiviert @MilosKozak
* Neue [Quick Wizard](#Preferences-quick-wizard)-Optionen @radicalb
  * Der Quick Wizard verwendet nun die gleiche Logik zur Bolus-Berechnung und -Anzeige wie der Bolus-Rechner. Für einen Vorab-Bolus kannst Du jetzt das Feld “KH-Zeit” im  Quick Wizard nutzen.
* Neues [Diagramm-Skalen-Menü](#aaps-screens-main-graph); [zusätzliches Diagramm-Menü](#AapsScreens-activate-optional-information) UI-Verbesserungen @Philoul
* [Layoutverbesserungen in der Konfiguration](../SettingUpAaps/ConfigBuilder.md) @MilosKozak
  * Abschnitte sind nun standardmäßig eingeklappt. Pfeil zum Aufklappen verwenden.
* Variable Sensitivität im AAPS-Client sichtbar
* UI-Verbesserungen im Bolus-Rechner @kenzo44
* Fehlerbehebung der Textdarstellung in Pumpen-Tabs bei Verwendung des hellen Designs @jbr77rr

#### Sonstige Funktionen

* [Automatischer Export der Einstellungen](#ExportImportSettings-Automating-Settings-Export) @vanelsberg
* Neuer [Automatisierungs](#automations-automation-triggers)-Auslöser @vanelsberg
  * Pod-Aktivierung (nur Patchpumpen)
* Neue [Automatisierungs](#automations-automation-triggers)-Auslöser @jbr77rr
  * Kanülenalter, Insulinalter, Batteriealter, Sensoralter, Reservoir-Level, Pumpen-Batteriestand
* Eingabe negativer Kohlenhydrate zulassen @MilosKozak
* Neuer Parameter [“AAPS Verzeichnis”](#preferences-maintenance-settings), um ein anderes Speicherverzeichnis als das Standardverzeichnis auszuwählen.
* [Protokollierung von Insulingaben bei getrennter Pumpe](#aaps-screens-buttons-insulin) zulassen @jbr77rr
* [Ziel 2](#objectives-objective2) aktualisiert @MilosKozak
  * Überprüfe, ob AAPS Master-Passwort gesetzt und bekannt ist
* Zufalls-Kohlenhydrate im Test-Modus @MilosKozak
* Fehler in der TDD-Berechnung behoben @MilosKozak
* SMS-Befehle: Erlaubt es, [**keine** SMS bei Profilwechseln durch NS zu senden](#sms-commands-too-many-messages) @MilosKozak

#### Smartwatches

* Verbesserungen für Wear und Watchfaces @Philoul @MilosKozak @olorinmaia
* Smartwatch-Kacheln für Automations-Aktionen @Philoul
* Kombiniertes Zifferblatt aus AAPS, AAPSClient und AAPSClient2 zur Überwachung weiterer Patienten @Philoul @MilosKozak
* EXTRA: show\_user\_actions\_on\_watch\_only @MilosKozak

#### Technische Änderungen

* [Speicherort der Protokolldateien geändert](#Accessing-logfiles-accessing-logfiles)
* Neue interne Modulstruktur @MilosKozak
* Persistenz-Ebene vom Hauptcode getrennt @MilosKozak
* Build-Dateien auf kts umgescrieben @MilosKozak
* Algorithmen zur Performanceverbesserung auf Kotlin umgeschrieben @MilosKozak
* Tonnen neuer Unit Tests @MilosKozak and others
* Mehr Code auf Kotlin gebracht @MilosKozak
* Neues Management der Einstellungen, XML \-\> Kotlin @MilosKozak
* Neue CI-Konfiguration, CI auf eigenen Servern laufen lassen @MilosKozak
* Bibliotheken auf die neueste Version aktualisiert, toml @MilosKozak
* Migration auf Kotlin 2.0, Java 21 @MilosKozak

(version3204)=

## [Version 3.2.0.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.2.0.4)

Erscheinungsdatum: 27.02.2024

Diese Version ist die letzte, die Android 10 unterstützt. Wenn Du nicht auf Android 11 aktualisieren kannst, [aktualisiere AAPS auf Version 3.2.0.4](#update-aaps-3204).

### Änderungen

- xDrip+ G7-Unterstützung
- Medtrum-Korrekturen
- Automatisierungssymbol korrigiert
- Erreichen des Ziel 1 behoben

(version3200)=

## Version 3.2.0.0 ist @Philoul gewidmet

Erscheinungsdatum: 23.10.2023

### Wichtige Hinweise

- Nightscout Version 15 ist zwingend erforderlich
- Wenn Websockets in NS v3 genutzt werden, werden Behandlungen, die über die NS Oberfläche (Plus-Button) oder andere Anwendungen, die die V1 API nutzen, eingegeben werden, nicht an AAPS gesendet. Dies wird in einer der kommenden NS-Versionen behoben werden. Verwende immer den gleichen Client (v1 oder v3) in AAPS und AAPSClient, bis NS intern auf v3 umgestellt ist. Das Gleiche gilt für AAPS und den AAPSClient selbst.
- Websockets im v3-Plugin funktionieren ähnlich wie im v1-Plugin. Mit deaktivierten Websockets plant AAPS regelmäßige NS-Downloads ein. Da NS damit dann nicht mehr permanent verbunden ist, wird so der Stromverbrauch reduziert. Das bedeutet allerdings auch, dass Daten seltener ausgetauscht werden (Datenaktualität). Bitte lies [diese](#Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS) wichtigen Kommentare des Entwicklerteams, bevor Du es nutzt!
- Wenn xDrip als BZ-Quelle genutzt wird, muss diese nach dem Update noch einmal neu eingestellt werden (bedingt durch interne Anpassungen).
- Um das erste Objective (Ziel) zu erreichen, kann anstelle von Nightscout nun auch Tidepool genutzt werden.
- Wenn Daten an xDrip+ gesendet werden sollen, muss xDrip- Synchronisierungs-Plugin konfiguriert werden. Um Glukosewerte von AAPS in xDrip zu erhalten, muss "xDrip+ Sync Follower" als Quelle ausgewählt sein
- Wenn auf den ComboV2-Treiber gewechselt werden soll, muss Ruffy deinstalliert und die Pumpe erneut mit AAPS gekoppelt werden.
- Um die Funktion "dynamischer ISF" nutzen zu können, muss das Ziel 11 gestartet worden sein. Zum Starten des Ziels 11 müssen die Ziele 1-10 abgeschlossen bzw. erreicht sein.


### Änderungen

- EOPatch2 / GlucomenDay pump driver @jungsomyeonggithub @MilosKozak
- ComboV2 Pumpentreiber (Ruffy nicht mehr benötigt) @dv1
- Medtrum Nano Unterstützung @jbr7rr
- Unterstützung für Dana-i @MilosKozak
- Glunovo CGM support @christinadamianou
- G7-Unterstützung @MilosKozak @rICTx-T1D @khskekec
- NSClient v3 plugin @MilosKozak
- Tidepool support @MilosKozak
- Glättungs-Plugin @MilosKozak, @justmara, Exponential smoothing @nichi (Tsunami), Average smoothing @jbr7rr
- Funktion "Dynamischer ISF" hinzugefügt @Chris Wilson, @tim2000s
- Garmin Zifferblatt & Herzfrequenz-Unterstützung @buessow
- Neues Logo @thiagomsoares
- Neues Zifferblatt (Watchface) @Philoul
- Tonnenweise Version 3.1-Probleme gelöst
- Notizen an mehr Stellen zugelassen @Sergey Zorchenko
- Fehler in der Benutzeroberfläche behoben @MilosKozak @osodebailar @Andries-Smit @yodax @Philoul @dv1 @paravoid
- Neue SMS-Befehle LOOP LGS/CLOSED @pzadroga
- Übersetzungen für Wear @Andries-Smit
- xDrip-Kommunikation in eigenes Modul ausgelagert @MilosKozak
- Interne Änderungen: aktualisierte Bibliotheken-Versionen, rx3-Migration, neue Modulstrukturen @MilosKozak
- Diaconn-Treiber korrigiert @miyeongkim
- Weitere Optionen zur Datenbank-Pflege @MilosKozak
- AAPSClient liefert Info, ob das Loop-Smartphone geladen wird @MilosKozak
- Änderung im Bolus-Rechner: Wenn CGM-Daten fehlen, wird der Prozentsatz ignoriert (d.h. 100% wird genutzt)
- Umstellung auf das KTS Build System @MilosKozak
- Verbesserung der CI-Integration @MilosKozak @buessow
- Bereinigung der Tests @ryanhaining @MilosKozak
- Mehr als 110.000 neue Codezeilen, 240.000 Zeilen geändert, 6.884 Dateien angepasst

(Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS)=
### Wichtige Hinweise zur Nutzung der Nightscout v3 vs. v1 API mit AAPS

v1 ist das alte, für den Datenaustausch zwischen NS-Website und NS-Server verwendete, Protokoll. Es hat viele Beschränkungen
- v1 sendet nur Daten für 2 Tage
- v1 sendet bei jedem Reconnect alle Daten der zwei Tage erneut
- Websockets müssen zwingend genutzt werden = permanente Verbindung, höherer Akkuverbrauch
- Bei wiederholten Reconnects mit Nightscout wird die Verbindung für 15 Minuten pausiert, um eine erhöhte Datennutzung zu verhindern

v3 ist das neue Protokoll. Es ist sicherer und effizienter
- Mit Token lassen sich Zugriffsrechte besser definieren
- Das Protokoll ist auf AAPS & NS-Seite Seite effizienter
- Es kann Daten der letzten 3 Monate von NS auslesen
- Du kannst entscheiden, ob Du Websockets auf allen Geräten nutzen möchtest oder nicht. Wenn Du sie nutzt, bekommst Du schnellere Updates. Nutzt Du sie nicht, hast Du einen niedrigeren Akkuverbrauch, aber langsamere Updates.
- Der NSClient wird bei Verbindungsabbrüchen nicht angehalten (pausiert)

EINSCHRÄNKUNGEN
- NS 15 muss mit AAPS 3.2 verwendet werden
- V3 erkennt keine Updates, die durch das V1 Protokoll vorgenommen wurden. Das wird vermutlich in einer der kommenden Nightscout-Versionen behoben sein
- Im umgekehrten Fall erkennt V1, durch die wenig effiziente Art Änderungen nachzuverfolgen, Änderungen, die durch V3 vorgenommen wurden
- Bitte habe im Kopf, dass Nighscout intern immer noch V1 nutzt, und es deswegen nicht möglich ist, Daten über die Nightscout-Weboberfläche einzugeben, sofern Du V3 verwendest. Um die Daten remote einzugeben, musst Du SMS über den AAPSClient nutzen

EMPFOHLENE EINSTELLUNGEN
- Aus den oben beschriebenen Gründen solltest Du auf allen Deinen Geräten die gleiche Methode verwenden (Hinweis: zum Redaktionsschluss nutzen alle Uploader derzeit noch V1). Wenn Du Dich für V3 entscheidest, wähle in AAPS und allen AAPSClients V3
- Aus Effizienzgründen wird V3 bevorzugt
- Der Einsatz von Websockets mit V3 oder nicht ist Geschmackssache
- Es wird DRINGEND empfohlen AAPS die Daten sammeln zu lassen und dann zentral als einziger Uploader an Nightscout übertragen lassen. Alle anderen Geräte und Anwendungen sollten Daten von Nightscout lediglich auslesen. Dadurch vermeidest Du Synchronisierungsfehler und -konflikte. Dies gilt auch für die Übermittlung der Glukosewerte an Nightscout mit dem Dexcom Share Connector o. ä. Tools

(version3100)=

## Version 3.1.0

Erscheinungsdatum: 19.07.2022

[Release Notes](https://github.com/nightscout/AndroidAPS/releases/tag/3.1.0)

## Version 3.0.0

Erscheinungsdatum: 31.01.2022

[Release Notes](https://github.com/nightscout/AndroidAPS/releases/tag/3.0.0)

## Version 2.8.2

Erscheinungsdatum: 23.01.2021

[Release Notes](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2)

(version-2811)= (important-hints-2-8-1-1)=

## Version 2.8.1.1

Erscheinungsdatum: 12.01.2021

[Release Notes](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.1.1)

(Releasenotes-version-2-8-0)=

## Version 2.8.0

Erscheinungsdatum: 01.01.2021

[Release Notes](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.0)

(Releasenotes-version-2-7-0)=

## Version 2.7.0

Erscheinungsdatum: 24.09.2020

[Release Notes](https://github.com/nightscout/AndroidAPS/releases/tag/2.7.0)

(Releasenotes-version-2-6-1-4)=

## Version 2.6.1.4

Erscheinungsdatum: 04.05.2020

[Release Notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2614)

## Version 2.6.1.3

Erscheinungsdatum: 03.05.2020

[Release Notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2613)

## Version 2.6.1.2

Erscheinungsdatum: 19.04.2020

[Release Notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2612)

## Version 2.6.1.1

Erscheinungsdatum: 06.04.2020

[Release Notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2611)

## Version 2.6.1

Erscheinungsdatum: 21.03.2020

[Release Notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-261)

(Releasenotes-version-2-6-0)=

## Version 2.6.0

Erscheinungsdatum: 29.02.2020

[Release Notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-260)

## Version 2.5.1

Erscheinungsdatum: 31.10.2019

[Release Notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-251)

(Releasenotes-version-2-5-0)=

## Version 2.5.0

Erscheinungsdatum: 26.10.2019

[Release Notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-250)

## Version 2.3

Erscheinungsdatum: 25.04.2019

[Release Notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-23)

## Version 2.2.2

Erscheinungsdatum: 07.04.2019

[Release Notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-222)

## Version 2.2

Erscheinungsdatum: 29.03.2019

[Release Notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-22)

## Version 2.1

Erscheinungsdatum: 03.03.2019

[Release Notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-21)

## Version 2.0

Erscheinungsdatum: 03.11.2018

[Release Notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-20)

## Version 1.0

```{admonition} First version of **AAPS**
:class: note

Die erste Testversion war in 2015 und das erste Release in 2016 verfügbar.

Da die Releasefolge und deren Veröffentlichungszeitpunkte immer wieder erfragt werden, haben wir diese hier - sofern verfügbar - zusammengetragen.

```
![AAPS 1.0](../images/update/AAPS1.0.png)
