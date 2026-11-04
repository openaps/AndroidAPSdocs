- - -
tocdepth: 1
- - -

# Docs Updates & Änderungen

## Oktober 2026

- [Browser-Build mit AAPS Builder](#aaps-builder): Version 8 des Build-Workflows, jetzt von den AAPS-Entwicklern im Repository [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder) gepflegt. Die Einrichtung ist einen Schritt kürzer: [Schritt 1](#aaps-builder-step1) der [Einrichtungsseite](#aaps-builder-setup) legt Dein privates Repository als Kopie jenes Repositorys an, in dem der Build-Workflow bereits enthalten ist, sodass kein Workflow mehr hinzugefügt werden muss. Ab jetzt werden die Build-Schritte für Dich aktualisiert: Dein Repository führt bei jedem Build die Version aus, die die AAPS-Entwickler veröffentlicht haben, ohne dass Du etwas ändern musst (und weiterhin ohne automatischen Build). Der Build selbst ändert sich nicht, und Dein bestehendes Repository funktioniert weiter. Um diese automatischen Aktualisierungen zu erhalten, ersetze Deine `.github/workflows/build.yml` einmalig wie unter [AAPS aktualisieren](#aaps-builder-updates) beschrieben. Dein Secret `KEYSTORE_SET` bleibt, wie es ist. Der optionale [Google-Drive-Schritt](#aaps-builder-google-drive) funktioniert jetzt direkt auf der Einrichtungsseite, auf einem Smartphone oder einem Computer: keine Vorbereitungsdatei nötig @psonnera
- [Smartwatches und AAPS](#watches-external-companion-apps): Der Abschnitt **Samsung Tizen** wird zu **Externe Begleit-Apps** und listet die Apps auf, die die Daten von **AAPS** empfangen (WatchDrip+, GlucoDataHandler, G-Watch). [WatchDrip+](#watches-xiaomi-amazfit) ab 0.5 verbindet sich direkt mit **AAPS**, ohne xDrip+: Schritte zur Einrichtung ergänzt, auch zusammengefasst unter [Konfiguration](#external-companion-apps), [Wear OS](../WearOS/WearOsSmartwatch.md) und [Fernüberwachung](../RemoteFeatures/RemoteMonitoring.md). Bluejay-Smartwatches: GTS eingestellt, aktuelles Modell aktualisiert @psonnera
- [Browser-Build mit dem AAPS Builder](#aaps-builder): Build-Workflow Version 6. Die Build-Schritte nutzen jetzt genau festgelegte und geprüfte Versionen der GitHub-Werkzeuge und der Build-Maschine. Wurde der falsche Text in das Secret `KEYSTORE_SET` eingefügt, wird das jetzt verständlich erklärt. Die [Einrichtungsseite](#aaps-builder-setup) ist jetzt Teil der Dokumentation und übersetzt, prüft Deinen GitHub-Benutzernamen und bietet klarere Hilfe zum Secret, zu „Page not found“ (404) und zur GitHub-App. Hat Deine `.github/workflows/build.yml` die Version 5 oder älter, ersetze die Datei wie unter [AAPS aktualisieren](#aaps-builder-updates) beschrieben. @psonnera
- [AAPS-Web-Installer](#web-installer): jetzt eine Seite der Dokumentation, übersetzt wie die anderen. Die alte Adresse funktioniert weiterhin @psonnera
- [Browser-Build mit AAPS Builder](#aaps-builder): Version 3 des Build-Workflows ergänzt die Variante `aapsclient3Release` (**AAPSClient3**, ab AAPS 4.0). Um sie zu erstellen, ersetze Deine `.github/workflows/build.yml` wie unter [AAPS aktualisieren](#aaps-builder-updates) beschrieben @psonnera
- [Dexcom G7](../CompatibleCgms/DexcomG7.md): gepatchte Dexcom-G7-App (DiaKEM) entfernt, die bei Neuinstallationen nicht mehr funktioniert @psonnera
- [Browser-Build mit dem AAPS Builder](#aaps-builder): Build-Workflow Version 2. Automatische wöchentliche Builds entfernt (kein Zeitplan, keine Variablen `AUTO_BUILD` / `AUTO_VARIANT`, keine Tags `built/…`): Jeden Build startest Du selbst, mit der Version und Variante, die Du wählst, und der Workflow hat nur Lesezugriff auf Dein Repository. Steht in Deiner `.github/workflows/build.yml` Version 1, ersetze sie wie unter [AAPS aktualisieren](#aaps-builder-updates) beschrieben. Screenshots für jeden Schritt ergänzt @psonnera
- [Browser-Build mit AAPS Builder](#aaps-builder): Der Build-Workflow ist jetzt Teil dieser Dokumentation. Kein Vorlagen-Repository: Du legst ein leeres privates Repository an und fügst den Workflow über die Einrichtungsseite hinzu (neuer Schritt 2). Der Workflow prüft kein externes Repository mehr auf Aktualisierungen. Hast Du Dein Repository aus der früheren Vorlage angelegt, ersetze `.github/workflows/build.yml` durch den Workflow von der Einrichtungsseite, wie unter [AAPS aktualisieren](#aaps-builder-updates) beschrieben @psonnera
- Neue Seite [Browser-Build mit AAPS Builder](#aaps-builder): AAPS auf einem Android-Smartphone erstellen, mit einer Einrichtungsseite auf dieser Website, automatischen wöchentlichen Builds und ohne Vorbereitungsdatei. Sie ersetzt die Android-Anleitung des Browser-Builds (Seiten zu File Manager Plus entfernt). AAPS Builder erstellt von @dio99, Dokumentation @psonnera

## August 2026

- [AAPS auf Dein Smartphone übertragen und installieren](../SettingUpAaps/TransferringAndInstallingAaps.md): Seite *Android-Entwicklerverifizierung* in die Installationsanleitung integriert, [Web-Installer](#android-developer-verification-web) (APK direkt aus dem Browser installieren, von der Verifizierung ausgenommen) und ADB über WLAN ergänzt @psonnera

## Juli 2026

- [Einführung](../Getting-Started/Introduction.md): Genauigkeitsprüfung des APS-Abschnitts. Titel und Link des Frontiers-Zitats korrigiert, als Hintergrund statt als aktueller Marktüberblick eingeordnet, Aussagen zu Dual-Hormon und Full Closed Loop aktualisiert, klargestellt, dass die Steuerung nicht immer eine Smartphone-App ist, Markennamen und nicht belegte Anwenderzahlen entfernt und OS-AID zu *Open-Source Automated Insulin Delivery* korrigiert @psonnera
- [Glossar](../UsefulLinks/Glossary.md): Einträge **AID**, **FCL**, **HCL** und **OS-AID** ergänzt, verlinkt von **APS** und **Closed Loop** @psonnera
- Neue Seite [Android-Entwicklerverifizierung](#android-developer-verification): Auswirkungen von Googles kommender Verifizierungspflicht auf die Installation selbst erstellter Apps, mit kostenlosen Installationswegen (ADB, erweiterter Ablauf, Konto für eingeschränkten Vertrieb) @psonnera

## Juni 2026

- [Browser-Build](#browser-build): in einen mehrseitigen Ablauf umgebaut, der mit der Entscheidung beginnt (Fork → Keystore Option 1/Option 2 mit einer eigenen Seite pro Gerät → Google Drive → Build → Fehlerbehebung). Verschachtelte Tabs entfernt. Die Installation des Dateimanager + ist jetzt ein gut sichtbarer eigener Schritt. @psonnera
- [Einführung](../Getting-Started/Introduction.md): Begriff von *DIY* zu *OS-AID* (Open-Source Automated Insulin Delivery) geändert, Trio und Stelo ergänzt, Kompatibilitätstabelle für Pumpen/CGM aktualisiert @tmhastings

## März 2026

- [CLI Build Option](../SettingUpAaps/CLIBuild.md) (Command Line Interface) @je-l hinzugefügt
- *Computer Build* zu *Android Studio Build* umbenannt. Dateinamen für URLs unverändert.

## Januar 2025

- [3.4](#version3400) Veröffentlichung und Dokumentation aktualisiert Roll-up (Einrichtungsasssistent, Computer Build-Versionen, Konfiguration)
- Update der CGM-Liste. Dexcom G5, Tomato, Glimp entfernt.
- [Oberfläche für Setzstellen-Wechsel](#Aapsscreens-site-rotation)
- [AAPS-Modus](#AapsScreens-running-mode)
- [Autotune](../AdvancedOptions/Autotune.md)

## Dezember 2025

- [Profil-Feinjustierung](../GettingHelp/ProfileTuning.md) von @robrub

## Oktober 2025

- DiaKEM: Neuinstallationen funktionieren nach einem Server-Upgrade nicht mehr @psonnera
- Libre 2 gepatchte App entfernt (veraltet): Funktioniert nicht mit neuen Sensoren @psonnera
- Omnipod-DASH-Seite überarbeitet @XiTatiON

## August 2025

- Versionen und Android Studio Voraussetzungen aktualisiert
- [3.3.2.1](#version3321)-Release hinzugefügt und Android 16 Referenzen entfernt (fixed)
- [Browser-Build](#browser-build) @Angus hinzugefügt

## Mai 2025

- [3.2.0.4 Upgrade-Seite](#update-aaps-3204) hinzugefügt @psonnera

## Januar 2025

- Quick Wizard [langes Drücken als Funktion](#Preferences-quick-wizard) @emilise
- Inhalte zum [Dynamischen ISF](../DailyLifeWithAaps/DynamicISF.md) vollständig überarbeitet @emilise

## Dezember 2024

- Dokumentation der [Version 3.3](#version3300) @emilise

## November 2024

- Aktualisierung [Dein AAPS-Profil](../SettingUpAaps/YourAapsProfile.md) @emilise
- Neustrukturierung der Inhalte zu [Wear OS-Smartwatches](../WearOS/BuildingAapsWearOS.md) @psonnera

## Oktober 2024

- Aktualisierung mehrerer Seiten:
  - [Wie lange wird es dauern, alles einzurichten?](#preparing-how-long-will-it-take), [Übersicht der Komponenten](../Getting-Started/ComponentOverview.md), [Abschließen der Ziele (Objectives)](../SettingUpAaps/CompletingTheObjectives.md), [Dein AAPS-Profil](../SettingUpAaps/YourAapsProfile.md), [Konfiguration](../SettingUpAaps/ConfigBuilder.md) & [Einstellungen](../SettingUpAaps/Preferences.md), [AAPS-Bildschirme](../DailyLifeWithAaps/AapsScreens.md) @emilise
  - [COB-Berechnung](../DailyLifeWithAaps/CobCalculation.md), [Dynamischer ISF](../DailyLifeWithAaps/DynamicISF.md) @UnderCliffe10
- [Bauanleitung für Android Studio Ladybug](../SettingUpAaps/BuildingAaps.md) @tanja
- Technische Arbeiten (Veröffentlichungsprozess der Dokumentation, Dateiorganisation …) @psonnera & @emilise

***

Fehlende Historie vom März 2022 bis September 2024

Mit der Version 3.2 wurden einige veraltete Informationen entfernt. Du findest es in der vorangegangenen Dokumentations-Version:

AAPS 3.1 Dokumentation ist [hier](https://androidaps.readthedocs.io/en/3.1/index.html) verfügbar.

***

```{dropdown} Older updates (2019 to 2022)
**Februar 2022**

- [BZ-Qualitäts-Warnzeichen](#aaps-screens-bg-warning-sign) @tanja
- [Medtronic-Pumpe aktualisiert](../CompatiblePumps/MedtronicPump.md) @dottedfingertips
- [Notwendige Prüfungen nach dem Update auf AAPS 3.0](Update3_0.md) @tanja
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) @Freloner @robertrub @vanelsberg
- Doku für AAPS 3.0 aktualisiert (teilweise) @xJoe
- [Wear OS für AAPS 3.0](../WearOS/WearOsSmartwatch.md) @peterleimbach

**Januar 2022**

- [Fehlerbehebung für Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md) - aktualisiert @tanja

**Dezember 2021**

- [APK erstellen](../SettingUpAaps/BuildingAaps.md) - aktualisiert für Android Studio Arctic Fox | 2020.3.1 @tanja
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) Informationen ergänzt @MilosKozak

**November 2021**

- Empfehlungen zum Kalibrieren eines Libre 2-Sensors
- [ISF](../UsefulLinks/FAQ.md) Auswirkung neu formuliert
- [Fehlerbehebung für Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md) aktualisiert
- Gepatchte [Dexcom](../CompatibleCgms/DexcomG6.md)-App entfernt, da veraltet

**Oktober 2021**

- [Release Notes](ReleaseNotes.md) AAPS 3.0 Beta

**September 2021**

- Empfohlene Computer-Ausstattung zum [Erstellen der AAPS-App](#Building-APK-recommended-specification-of-computer-for-building-apk-file)

**Juni 2021**

- [Watchface per Sideload installieren](../WearOS/WearOsSmartwatch.md)

**April 2021**

- Liste der [Kommunikationsgeräte](#CompatiblePumps-additional-communication-device) für Omnipod- und Medtronic-Pumpen
- AAPS-Prognosen in [Nightscout](#Nightscout-manual-nightscout-setup)

**März 2021**

- Entwickler-Kommunikation von gitter zu [Discord](https://discord.gg/4fQUWHZ4Mw) umgezogen

**Februar 2021**

- Neue Navigationsleiste und [Sprachumschaltung](../NavigateDoc/ChangeLanguageVersion.md)

**Januar 2021**

- [Reiter Aktionen](#screens-action-tab) - mehr Details auf der Seite „AAPS-Bildschirme“
- Dexcom G6 mit [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)
- Libre-Smart-Reader [Akkustand](#screens-sensor-level-battery)
- [Ziele](#objectives-objective3) - neue Fragen
- Weitere [neue Funktionen von AAPS 2.8.0](#Releasenotes-version-2-8-0)

**Dezember 2020**

- [Libre 2](../CompatibleCgms/Libre2.md) - gepatchte App funktioniert nicht mit US-Sensoren
- [Fest programmierte Grenzen von OpenAPS](#Open-APS-features-overview-of-hard-coded-limits)
- Sony Smartwatch 3: manuelle Installation der Google Play-Dienste

**Oktober 2020**

- Accu-Chek Combo - [Zeitumstellung Sommer-/Winterzeit](#time-adjustment-daylight-savings-time-dst)
- Accu-Chek Insight - Option zum [Hochladen absoluter Werte](#Accu-Chek-Insight-Pump-settings-in-aaps)
- Logs - mehr Details zum [Speicherort](../GettingHelp/AccessingLogFiles.md)
- Omnipod Eros - Statusupdate
- [SMS-Befehle - Zeitsynchronisierung](../RemoteFeatures/SMSCommands.md)

**September 2020**

- Großes Update für die neue AAPS-Version 2.7
- Details siehe [Release Notes](#Releasenotes-version-2-7-0)

**Juni 2020**

- Libre 2 - mehr Details zur gepatchten Libre Link-App & zur Nutzung von Bluetooth-Transmittern
- [Reisen mit Zeitzonenwechsel](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) mit Libre 2

**Mai 2020**

- [Verzögerter Bolus nur für Dana- und Insight-Pumpen](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Insight: Vibration deaktivieren](#Accu-Chek-Insight-Pump-vibration) (nur Firmware 3.x)
- [Minimale Änderungsrate](#Preferences-minimal-request-change), um die Zahl der Benachrichtigungen im Open Loop zu verringern
- Gepatchte Libre Link-App - prüfen, ob richtig gepatcht
- [Prognoselinien](#aaps-screens-prediction-lines) - mehr Details

**April 2020**

- Insulin rückdatieren (z. B. per Spritze gegeben)
- Android 6 wird in der nächsten Master-Version nicht mehr unterstützt

**März 2020**

- [APK mit Android Studio 3.6.1 erstellen](../SettingUpAaps/BuildingAaps.md)
- [DanaRS mit Firmware v3](../CompatiblePumps/DanaRS-Insulin-Pump.md) **kann derzeit nicht mit AAPS genutzt werden!**
- [Verzögerter Bolus und Wechsel in den Open Loop](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [APK mit Android Studio 3.6.1 aktualisieren](../Maintenance/UpdateToNewVersion.md)

**Februar 2020**

- Einschränkungen bei Automatisierungen
- [Autosens](#Open-APS-features-autosens) - kurze Erklärung
- Alternativen zum Careportal
- [Verzögerter Bolus](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) - Closed Loop wird deaktiviert
- Neues [Modul Lokales Profil](../SettingUpAaps/ConfigBuilder.md)
- Beispiel-Setup - Dexcom G6 aktualisiert
- [Version 2.6.0](#Releasenotes-version-2-6-0) - wichtige neue Funktionen
- [Wear-Komplikationen](../WearOS/WearOsSmartwatch.md)

**Januar 2020**

- [Manuelle Korrektur der Kohlenhydrate](#screens-bolus-carbs) bei falschen KH-Einträgen
- [Bildgröße](../SupportingAaps/HowToEditTheDocs.md) beim Bearbeiten der Doku

**Dezember 2019**

- [Android Auto](../RemoteFeatures/AndroidAuto.md) - Einrichtung mit Screenshots
- [Accu-Chek Insight & Autotune](#Accu-Chek-Insight-Pump-settings-in-aaps) - Workaround zur Nutzung
- [Glimp](#Config-Builder-bg-source) - Version 4.15.57 und neuer unterstützt
- [Watchfaces](../WearOS/WearOsSmartwatch.md) - großes Update, viel mehr Details
- [Watchface-Komplikationen](#Watchfaces-complications) - nutze Dein Lieblings-Watchface mit AAPS-Daten

**November 2019**

- [Automatisierung - beim Deaktivieren des Loops abschalten](../DailyLifeWithAaps/Automations.md)
- [Dexcom G6: Transmitter ersetzen aktualisiert](#xdrip-replace-transmitter)
- [Verzögerter Bolus - warum er im Loop nicht funktioniert](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [FAQ - Sport](#FAQ-sports)
- [Startbildschirm - Linien im Diagramm](#aaps-screens-main-graph)
- [Insight - absolute Werte im NS Client deaktivieren](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Medtronic-Pumpe - mögliche doppelte Einträge](../CompatiblePumps/MedtronicPump.md)
- [Neue Anleitung für Freestyle Libre 2](../CompatibleCgms/Libre2.md)
- [Profilwechsel mit Prozentsatz - Beispiel](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
- [SMS-Befehle aktualisiert](../RemoteFeatures/SMSCommands.md)
- [Fehlerbehebung für Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- [Fehlerbehebung - Linksammlung](../GettingHelp/GeneralTroubleshooting.md)
- Update - kurze Anleitung für erfahrene Nutzer
- Doku - [Bearbeiten](#edit-the-docs-code-syntax) und [Übersetzen](#translations-translation-of-the-documentation) aktualisiert.

**Oktober 2019**

- [AAPS-Version 2.5](#Releasenotes-version-2-5-0) - Aktualisierungen (vor allem auf der [Update-Seite](../Maintenance/UpdateToNewVersion.md))
- [Accu-Chek Insight - Log-Optionen](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [COB-Berechnung auf eigener Seite](../DailyLifeWithAaps/CobCalculation.md)
- [COB - Erkennung falscher COB-Werte](#CobCalculation-detection-of-wrong-cob-values)
- [Dexcom G6-spezifische Fehlerbehebung](#DexcomG6-troubleshooting-g6)
- [Ziele für Version 2.5 aktualisiert](../SettingUpAaps/CompletingTheObjectives.md)
- [Einstellungen aktualisiert](../SettingUpAaps/Preferences.md)
- [SGLT-2-Hemmer - beim Loopen nicht verwenden](#PreparingForAaps-no-sglt-2-inhibitors)
- [Fehlerbehebung bei SMS-Befehlen](#SMSCommands-troubleshooting)
- [xDrip - Austausch des G6-Transmitters aktualisiert](#xdrip-replace-transmitter)

**September 2019**

- [Automatisierung](../DailyLifeWithAaps/Automations.md)
- [Bolus-Rechner](#AapsScreens-wrong-cob-detection) - langsame Kohlenhydrat-Aufnahme
- [Sicherheit von Nightscout](#Nightscout-security-considerations)
- [Zeitverschiebung des Profils](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) (mehr Details)
- [Fernüberwachung](../RemoteFeatures/RemoteMonitoring.md)
- [Was ist ein Closed-Loop-System?](#Introduction-what-does-hybrid-closed-loop-mean)

**August 2019**

- Region der gepatchten Dexcom G6-App
- [Neuer Dexcom G6-Transmitter](#xdrip-connect-g6-transmitter-for-the-first-time) ("firefly" / 8G...)
- Was brauche ich? - neue Struktur & zusätzliche Informationen
- Neue Struktur
```
