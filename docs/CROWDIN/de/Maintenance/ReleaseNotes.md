
# Release Notes

```{toctree}
:hidden:

Update2_7.md
Update3_0.md
UpdateAaps3204.md
```

Please follow the instructions in the [update manual](UpdateToNewVersion.md) to update to a new version. Der Abschnitt Fehlerbehebung bespricht auch die häufigsten Schwierigkeiten, die beim Aktualisieren von **AAPS** mit der Update-Anleitung aufgetreten sind.

```{admonition} Upgrading from AAPS v3?
:class: tip
Schaue im Abschnitt [Was sich mit AAPS Version geändert hat](V4Changes.md) nach. Dort findest Du die wesentlichen Änderungen - Funktionen, die nun an anderer Stelle zu finden sind, umbenannte Funktionen und auch gelöschte Funktionen.
```

Wenn eine neue Version verfügbar wird, wirst Du mit einer Meldung, wie dieser, benachrichtigt:

![Update-Info](../images/AAPS_LoopDisable90days.png)

Solltest Du bis zum Fälligkeitsdatum das Update nicht durchgeführt haben, wird **AAPS** in den „Open Loop“ wechseln.

Die Enddaten der AAPS-Versionen findest Du unter [Supportende](EndOfLife.md).

**Ignoriere die Benachrichtigung nicht.** Neue **AAPS**-Versionen beheben wichtige Sicherheitsthemen. Deswegen muss jeder **AAPS**-Nutzende so schnell wie möglich auf die neueste Version aktualisieren. This is an effort to try to improve the safety for each **AAPS** user and the DIY community. Vielen Dank für Dein Verständnis.

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

**Release notes of the latest version of each major release**. For all other versions, see the [releases on GitHub](https://github.com/nightscout/AndroidAPS/releases).

(latestrelease)=

(version400)=

**Version 4.0.0**

Erscheinungsdatum: 31.10.2026

**Neue Funktionen**

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
- New [automation actions](#automations-automation-action): **Change smoothing** @olorinmaia, and **Run**, **Enable** or **Disable scene** @MilosKozak
- [Site-Rotation](#Aapsscreens-site-rotation): Tracken und wechseln der Setzstellen @Philoul @MilosKozak
- [Autotune](../AdvancedOptions/Autotune.md) überarbeitet @Philoul
- Neue [Widgets](../DailyLifeWithAaps/Widgets.md) @MilosKozak @t1dude
- Barrierefreiheit: Die Smartphone-App ist Screen-Reader kompatibel - Steuerelemente werden genannt, Status wird gesprochen, Beschreibungen und Überschriften zum Überfliegen („skim“) @MilosKozak
- [Einstellungen importieren](../Maintenance/ExportImportSettings.md): Pumpeinstellungen behalten @MilosKozak
- Dauerhafte Benachrichtigung nutzt die Live-Updates von Android, unterstützt die Samsung „Now“-Leiste und zeigt die Veränderung an @premnirmal
- BZ-Diagramm: [Tippen und halten](#aaps-screens-graph-press-and-hold), um den Messwert anzuzeigen; auf jedem Diagramm der Übersicht @t1dude @olorinmaia
- Leistungsverbesserungen @MilosKozak
- Automatische E-Carbs im Bolus-Assistenten @MilosKozak

**Neue Geräte**

- **CareLevo**: neue [Pumpenunterstützung](../CompatiblePumps/CareLevo.md) @Kisu-Choi @MilosKozak
- **Dana-i2**: Unterstützung @MilosKozak
- **Instara**: neue CGM-Quelle @leohunt

**Verbesserungen in der Pumpenunterstützung**

- Pumpenübersicht für Insight, Medtronic, Medtrum, Omnipod, Dana, Diaconn und Equil neu erstellt @MilosKozak
- **Omnipod Dash**: PDM Referenz-Codes und lesbare Fehlerbeschreibungen, Driftkompensation immer an, besseres Bolustyp-Reporting @nl-ruud
- **Omnipod**: Hartes Enddatum für Dash & Eros @mcnelson
- **DanaR, RS**: Pumpenemulator zum Testen @MilosKozak
- **Equil**: Pumpenemulator zum Testen @MilosKozak
- Viele Pumpen- und Loop-Fehler behoben @MilosKozak und andere

**Wear OS**

- [Smartwatch-App](../WearOS/WearOsSmartwatch.md) in Compose neu erstellt, neue Kacheln und Komplikationen, automatische Zifferblatt-Installation („Watch Face Push“) auf Wear OS 6+ @olorinmaia @Philoul
- „CustomWatchface“ verfügbar für WearOS 6.0 (GW7, GW8, GW9...) mit einem WFF-eigenem Watchface @Philoul @olorinmaia
- „CustomWatchface“ kann jetzt 5 Komplikationsslots, die Du anpassen kannst, haben (neue Funktion nur für ältere Smartwatches verfügbar) @Philoul
- Neues, [auf AAPS-Komplikationen bassierendes, WFF-Watchface](#wearos-complications-watchface-setup) @olorinmaia
- Korrekturen im Bolus-Rechne und dem Ergebnis des Schnell-Assistenten Ergebnis @olorinmaia
- Neues BZ-Diagramm und Betriebsmodus-Aktivität im Hauptmenü @olorinmaia
- Bolus-Rechner: [Mahlzeittyp](#WearOsSmartwatch-wizard-meal-type)-Seite auf der Smartwatch, die die Kohlenhydrate wie der Bolus-Rechner des Smartphones aufteilt und [KH-Zeit](#WearOsSmartwatch-wizard-carb-time) mit der *Essens*-Erinnerung auf die Smartwatch bringt @olorinmaia
- [Smartphone-Alarme auf der Smartwatch](#WearOsSmartwatch-phone-alarms): Die Smartwatch zeigt den Smartphone-Alarm an und er kann „schlummern“ oder für 5 Min. stumm geschaltet werden @olorinmaia

**Erstellen („Build“)**

- CI-Workflows für Tag/Branch-Builds, JDK-Version Zuordnung @Angus-repo

**Beitragende**

@MilosKozak @Philoul @olorinmaia @Kisu-Choi @leohunt @piecycle @Angus-repo @mcnelson @t1dude @premnirmal @nl-ruud

Vollständiges Änderungsprotokoll: <https://github.com/nightscout/AndroidAPS/compare/3.4.2.6...4.0.0>

---

(version3426)=

**Version 3.4.2.6**

- Equil: Verbesserung der Stabilität @MilosKozak

---

(version3321)=

**Version 3.3.2.1**

Erscheinungsdatum: 13.08.2025

- Omnipod Bluetooth-Verbindung auf Android 16 behoben
- CI-Prozess - „Kontinuierliche Integration“ (Browser-Build)
- Umrechnung mmol-mg/dl korrigiert
- Falsche Zeitauswahl in Dialogen in einigen Zeitzonen korrigiert
- Lesen der Schlüssel im einfachen Modus korrigiert
- Fehlende Vorhersagen auf der Wear-Smartwatch korrigiert
- Konfigurator verbessert
- NSCv3 Vollsynchronisation verbessert

---

(version3300)=

**Version 3.3.2.0**

Erscheinungsdatum: 27.03.2025

**So wird aktualisiert**

* Um diese Version zu erstellen, benötigst Du die [Android Studio Version „Meerkat“](#Building-APK-recommended-specification-of-computer-for-building-apk-file) oder höher. Auch wenn Du bereits eine 3.3.x-Version erstellt hast, musst Du das Android Studio erneut aktualisieren.

(version-enforcement)=

**Starting this version, notification and version enforcement has been simplified and softened and works following way:**

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

Other changes: [release notes on GitHub](https://github.com/nightscout/AndroidAPS/releases/tag/3.3.2.0).

---

(version3204)=

**[Version 3.2.0.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.2.0.4)**

Erscheinungsdatum: 27.02.2024

Diese Version ist die letzte, die Android 10 unterstützt. Wenn Du nicht auf Android 11 aktualisieren kannst, [aktualisiere AAPS auf Version 3.2.0.4](#update-aaps-3204).

**Änderungen**

- xDrip+ G7-Unterstützung
- Medtrum-Korrekturen
- Automatisierungssymbol korrigiert
- Erreichen des Ziel 1 behoben

---

**Version 2.8.2**

Erscheinungsdatum: 23.01.2021

[Release Notes](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2)

---

**Version 1.0**

```{admonition} First version of **AAPS**
:class: note

Die erste Testversion war in 2015 und das erste Release in 2016 verfügbar.

Da die Releasefolge und deren Veröffentlichungszeitpunkte immer wieder erfragt werden, haben wir diese hier - sofern verfügbar - zusammengetragen.

```
![AAPS 1.0](../images/update/AAPS1.0.png)
