- - -
tocdepth: 1
- - -

# Docs Updates & Änderungen

## Oktober 2026

- [Browser Build mit AAPS Builder](#aaps-builder): Version 8 des Build-Workflows, jetzt von den AAPS-Entwicklern im Repository [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder) gepflegt. Die Einrichtung ist einen Schritt kürzer: [Schritt 1](#aaps-builder-step1) der [Einrichtungsseite](#aaps-builder-setup) legt Dein privates Repository als Kopie jenes Repositorys an, in dem der Build-Workflow bereits enthalten ist, sodass kein Workflow mehr hinzugefügt werden muss. Ab jetzt werden die Build-Schritte für Dich aktualisiert: Dein Repository führt bei jedem Build die Version aus, die die AAPS-Entwickler veröffentlicht haben, ohne dass Du etwas ändern musst (und weiterhin ohne automatischen Build). Der Build selbst ändert sich nicht, und Dein bestehendes Repository funktioniert weiter. Um diese automatischen Aktualisierungen zu erhalten, ersetze Deine `.github/workflows/build.yml` einmalig wie unter [AAPS aktualisieren](#aaps-builder-updates) beschrieben. Dein Secret `KEYSTORE_SET` bleibt, wie es ist. Der optionale [Google-Drive-Schritt](#aaps-builder-google-drive) funktioniert jetzt direkt auf der Einrichtungsseite, auf einem Smartphone oder einem Computer: keine Vorbereitungsdatei nötig @psonnera
- [Smartwatches und AAPS](#watches-external-companion-apps): Der Abschnitt **Samsung Tizen** wird zu **Externe Begleit-Apps** und listet die Apps auf, die die Daten von **AAPS** empfangen (WatchDrip+, GlucoDataHandler, G-Watch). [WatchDrip+](#watches-xiaomi-amazfit) ab 0.5 verbindet sich direkt mit **AAPS**, ohne xDrip+: Schritte zur Einrichtung ergänzt, auch zusammengefasst unter [Konfiguration](#external-companion-apps), [Wear OS](../WearOS/WearOsSmartwatch.md) und [Fernüberwachung](../RemoteFeatures/RemoteMonitoring.md). Bluejay-Smartwatches: GTS eingestellt, aktuelles Modell aktualisiert @psonnera
- [Browser-Build mit dem AAPS Builder](#aaps-builder): Build-Workflow Version 6. Die Build-Schritte nutzen jetzt genau festgelegte und geprüfte Versionen der GitHub-Werkzeuge und der Build-Maschine. Wurde der falsche Text in das Secret `KEYSTORE_SET` eingefügt, wird das jetzt verständlich erklärt. Die [Einrichtungsseite](#aaps-builder-setup) ist jetzt Teil der Dokumentation und übersetzt, prüft Deinen GitHub-Benutzernamen und bietet klarere Hilfe zum Secret, zu „Page not found“ (404) und zur GitHub-App. Hat Deine `.github/workflows/build.yml` die Version 5 oder älter, ersetze die Datei wie unter [AAPS aktualisieren](#aaps-builder-updates) beschrieben. @psonnera
- [AAPS-Web-Installer](#web-installer): jetzt eine Seite der Dokumentation, übersetzt wie die anderen. Die alte Adresse funktioniert weiterhin @psonnera
- [Browser-Build mit AAPS Builder](#aaps-builder): Version 3 des Build-Workflows ergänzt die Variante `aapsclient3Release` (**AAPSClient3**, ab AAPS 4.0). Um sie zu erstellen, ersetze Deine `.github/workflows/build.yml` wie unter [AAPS aktualisieren](#aaps-builder-updates) beschrieben @psonnera
- [Dexcom G7](../CompatibleCgms/DexcomG7.md): gepatchte Dexcom-G7-App (DiaKEM) entfernt, die bei Neuinstallationen nicht mehr funktioniert @psonnera
- [Browser-Build mit dem AAPS Builder](#aaps-builder): Build-Workflow Version 2. Automatische wöchentliche Builds entfernt (kein Zeitplan, keine Variablen `AUTO_BUILD` / `AUTO_VARIANT`, keine Tags `built/…`): Jeden Build startest Du selbst, mit der Version und Variante, die Du wählst, und der Workflow hat nur Lesezugriff auf Dein Repository. Steht in Deiner `.github/workflows/build.yml` Version 1, ersetze sie wie unter [AAPS aktualisieren](#aaps-builder-updates) beschrieben. Screenshots für jeden Schritt ergänzt @psonnera
- [Browser Build mit AAPS Builder](#aaps-builder): Der Build-Workflow ist jetzt Teil dieser Dokumentation. Kein Vorlagen-Repository: Du legst ein leeres privates Repository an und fügst den Workflow über die Einrichtungsseite hinzu (neuer Schritt 2). Der Workflow prüft kein externes Repository mehr auf Aktualisierungen. Hast Du Dein Repository aus der früheren Vorlage angelegt, ersetze `.github/workflows/build.yml` durch den Workflow von der Einrichtungsseite, wie unter [AAPS aktualisieren](#aaps-builder-updates) beschrieben @psonnera
- Neue Seite [Browser Build mit AAPS Builder](#aaps-builder): AAPS auf einem Android-Smartphone erstellen, mit einer Einrichtungsseite auf dieser Website, automatischen wöchentlichen Builds und ohne Vorbereitungsdatei. Sie ersetzt die Android-Anleitung des Browser Builds (Seiten zu File Manager Plus entfernt). AAPS Builder erstellt von @dio99, Dokumentation @psonnera

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
**February 2022**

- [BG quality warning sign](#aaps-screens-bg-warning-sign) @tanja
- [Medtronic pump update](../CompatiblePumps/MedtronicPump.md) @dottedfingertips
- [Necessary checks after update to AAPS 3.0](Update3_0.md) @tanja
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) @Freloner @robertrub @vanelsberg
- Update docs for AAPS 3.0 (partly) @xJoe
- [Wear OS for AAPS 3.0](../WearOS/WearOsSmartwatch.md) @peterleimbach

**January 2022**

- [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md) - update @tanja

**December 2021**

- [Building the APK](../SettingUpAaps/BuildingAaps.md) - update Android Studio Arctic Fox | 2020.3.1 @tanja
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) information added @MilosKozak

**November 2021**

- Best practices for calibrating a Libre 2 sensor
- [ISF](../UsefulLinks/FAQ.md) reformulation of impact
- Update [troubleshooting Android studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- Removed patched [Dexcom](../CompatibleCgms/DexcomG6.md) app as it is obsolete

**October 2021**

- [Release notes](ReleaseNotes.md) AAPS 3.0 beta

**September 2021**

- Recommended computer specification to [build AAPS app](#Building-APK-recommended-specification-of-computer-for-building-apk-file)

**June 2021**

- [Watchface sideload](../WearOS/WearOsSmartwatch.md)

**April 2021**

- List of [communication devices](#CompatiblePumps-additional-communication-device) for Omnipod and Medtronic pumps
- AAPS predictions in [Nightscout](#Nightscout-manual-nightscout-setup)

**March 2021**

- Dev communication moved from gitter to [discord](https://discord.gg/4fQUWHZ4Mw)

**February 2021**

- New navigation bar and [language switch](../NavigateDoc/ChangeLanguageVersion.md)

**January 2021**

- [Action tab](#screens-action-tab) - more details on page 'AAPS screens'
- Dexcom G6 with [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)
- Libre smart reader [battery level](#screens-sensor-level-battery)
- [Objectives](#objectives-objective3) - new questions
- Other [new AAPS 2.8.0 functions](#Releasenotes-version-2-8-0)

**December 2020**

- [Libre 2](../CompatibleCgms/Libre2.md) - patched app does not work with US sensors
- [OpenAPS hard-coded limits](#Open-APS-features-overview-of-hard-coded-limits)
- Sony Smartwatch 3 Manual Installation of Google Play Service

**October 2020**

- Accu-Chek Combo - update [time adjustment daylight savings time](#time-adjustment-daylight-savings-time-dst)
- Accu-Chek Insight - Option to [upload absolute values](#Accu-Chek-Insight-Pump-settings-in-aaps)
- Logs - more details about [folder location](../GettingHelp/AccessingLogFiles.md)
- Omnipod Eros - status update
- [SMS commands - time sync](../RemoteFeatures/SMSCommands.md)

**September 2020**

- Major update for new AAPS version 2.7
- For details see the [release notes](#Releasenotes-version-2-7-0)

**June 2020**

- Libre 2 - more details patched Libre Link app & use of Bluetooth transmitters
- [Time zone traveling](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) with Libre 2

**May 2020**

- [Extended bolus only for Dana + Insight pumps](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Insight deactivate vibration](#Accu-Chek-Insight-Pump-vibration) (firmware 3.x only)
- [Minimal request rate](#Preferences-minimal-request-change) to reduce number of notifications in open loop mode
- Patched Libre Link app - check if correctly patched
- [Prediction lines](#aaps-screens-prediction-lines) - more details

**April 2020**

- Backdate insulin (i.e. given by syringe)
- Android 6 support will be discontinued in next master version

**March 2020**

- [Build apk with Android Studio 3.6.1](../SettingUpAaps/BuildingAaps.md)
- [DanaRS with firmware v3](../CompatiblePumps/DanaRS-Insulin-Pump.md) **cannot currently be used with AAPS!**
- [Extended bolus and switch to open loop](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Update apk with Android Studio 3.6.1](../Maintenance/UpdateToNewVersion.md)

**February 2020**

- Automation caveats
- [Autosens](#Open-APS-features-autosens) - short explanation
- Careportal alternatives
- [Extended bolus](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) feature - closed loop will be disabled
- New [Local Profile plugin](../SettingUpAaps/ConfigBuilder.md)
- Sample Setup - update Dexcom G6
- [Version 2.6.0](#Releasenotes-version-2-6-0) - major new features
- [Wear complications](../WearOS/WearOsSmartwatch.md)

**January 2020**

- [Manual carb correction](#screens-bolus-carbs) for faulty carb entries
- [Image size](../SupportingAaps/HowToEditTheDocs.md) when editing docs

**December 2019**

- [Android Auto](../RemoteFeatures/AndroidAuto.md) - setup with screenshots
- [Accu-Chek Insight & Autotune](#Accu-Chek-Insight-Pump-settings-in-aaps) - workaround for usage
- [Glimp](#Config-Builder-bg-source) - version 4.15.57 and newer supported
- [Watchfaces](../WearOS/WearOsSmartwatch.md) - major update, way more details
- [Watchface complications](#Watchfaces-complications) - use your favorite watchface with AAPS data

**November 2019**

- [Automation - deactivate when disabling loop](../DailyLifeWithAaps/Automations.md)
- [Dexcom G6 replace transmitter update](#xdrip-replace-transmitter)
- [Extended bolus - why they do not work in a loop context](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [FAQ - sports](#FAQ-sports)
- [Homescreen - lines on graph](#aaps-screens-main-graph)
- [Insight - Disable absolute values in NS Client](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Medtronic pump - possible double entries](../CompatiblePumps/MedtronicPump.md)
- [New Freestyle Libre 2 tutorial](../CompatibleCgms/Libre2.md)
- [Profile switch with percentage - example](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
- [SMS commands update](../RemoteFeatures/SMSCommands.md)
- [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- [Troubleshooting - link collection](../GettingHelp/GeneralTroubleshooting.md)
- Update - quick walk-through for experienced users
- Docs - update [edit](#edit-the-docs-code-syntax) and [translation](#translations-translation-of-the-documentation).

**October 2019**

- [AAPS version 2.5](#Releasenotes-version-2-5-0) updates (especially on [update page](../Maintenance/UpdateToNewVersion.md))
- [Accu-Chek Insight - log options](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [COB calculation on separate page](../DailyLifeWithAaps/CobCalculation.md)
- [COB - wrong COB value detection](#CobCalculation-detection-of-wrong-cob-values)
- [Dexcom G6 specific troubleshooting](#DexcomG6-troubleshooting-g6)
- [Objectives update version 2.5](../SettingUpAaps/CompletingTheObjectives.md)
- [Preferences update](../SettingUpAaps/Preferences.md)
- [SGLT-2 inhibitors - do not use when looping](#PreparingForAaps-no-sglt-2-inhibitors)
- [SMS Commands Troubleshooting](#SMSCommands-troubleshooting)
- [xDrip - update G6 transmitter replacement](#xdrip-replace-transmitter)

**September 2019**

- [Automate](../DailyLifeWithAaps/Automations.md)
- [Bolus calculator](#AapsScreens-wrong-cob-detection) - slow carb absorption
- [Nightscout security](#Nightscout-security-considerations)
- [Profile timeshift](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) (more details)
- [Remote monitoring](../RemoteFeatures/RemoteMonitoring.md)
- [What is a closed loop system?](#Introduction-what-does-hybrid-closed-loop-mean)

**August 2019**

- Dexcom G6 patched app region
- [Dexcom G6 new transmitter](#xdrip-connect-g6-transmitter-for-the-first-time) ("firefly" / 8G...)
- What do I need? - new structure & additional information
- New structure
```
