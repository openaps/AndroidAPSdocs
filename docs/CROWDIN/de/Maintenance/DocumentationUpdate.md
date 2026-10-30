# Docs Updates & Änderungen

## Oktober 2026

- [Smartwatches and AAPS](#watches-external-companion-apps): the **Samsung Tizen** section becomes **External Companion Apps** and lists the apps that read the **AAPS** broadcast (WatchDrip+, GlucoDataHandler, G-Watch). [WatchDrip+](#watches-xiaomi-amazfit) 0.5 and later connect directly to **AAPS** without xDrip+: setup steps added, also summarized in [Configuration](#external-companion-apps), [Wear OS](../WearOS/WearOsSmartwatch.md) and [Remote monitoring](../RemoteFeatures/RemoteMonitoring.md). Bluejay watches: GTS discontinued, current model updated @psonnera
- [Browser-Build mit dem AAPS Builder](#aaps-builder): Build-Workflow Version 6. Die Build-Schritte nutzen jetzt genau festgelegte und geprüfte Versionen der GitHub-Werkzeuge und der Build-Maschine. Wurde der falsche Text in das Secret `KEYSTORE_SET` eingefügt, wird das jetzt verständlich erklärt. The [setup page](#aaps-builder-setup) is now part of the documentation and translated, checks your GitHub username, and has clearer help for the secret, "Page not found" (404) and the GitHub app. Hat Deine `.github/workflows/build.yml` die Version 5 oder älter, ersetze die Datei wie unter [AAPS aktualisieren](#aaps-builder-updates) beschrieben. @psonnera
- [AAPS web installer](#web-installer): now a documentation page, translated like the others. The old address still works @psonnera
- [Browser build with AAPS Builder](#aaps-builder): build workflow version 3 adds the `aapsclient3Release` variant (**AAPSClient3**, AAPS 4.0 and later). To build it, replace your `.github/workflows/build.yml` as explained in [Updating AAPS](#aaps-builder-updates) @psonnera
- [Dexcom G7](../CompatibleCgms/DexcomG7.md): removed the patched Dexcom G7 app (DiaKEM), which no longer works for new installs @psonnera
- [Browser build with AAPS Builder](#aaps-builder): build workflow version 2. Automatic weekly builds are removed (no schedule, no `AUTO_BUILD` / `AUTO_VARIANT` variables, no `built/…` tags): every build is started by you, with the version and variant you choose, and the workflow only has read access to your repository. If your `.github/workflows/build.yml` says version 1, replace it as explained in [Updating AAPS](#aaps-builder-updates). Added screenshots for every step @psonnera
- [Browser build with AAPS Builder](#aaps-builder): the build workflow is now part of this documentation. No template repository: you create an empty private repository and add the workflow from the setup page (new step 2). The workflow no longer checks an outside repository for updates. If you created your repository from the earlier template, replace `.github/workflows/build.yml` with the workflow from the setup page as explained in [Updating AAPS](#aaps-builder-updates) @psonnera
- New page [Browser build with AAPS Builder](#aaps-builder): build AAPS from an Android phone with a setup page hosted on this site, with automatic weekly builds and no preparation file. It replaces the Android instructions of the browser build (File Manager Plus pages removed). AAPS Builder created by @dio99, docs @psonnera

## August 2026

- [Transferring and Installing AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md): merged the *Android developer verification* page into the installation guide, added the [web installer](#android-developer-verification-web) (install the APK straight from the browser, exempt from verification) and wireless ADB @psonnera

## July 2026

- [Introduction](../Getting-Started/Introduction.md): accuracy review of the APS section. Corrected the Frontiers citation title and link, reframed it as background rather than a current market guide, updated the dual-hormone and full closed loop statements, clarified that the controller is not always a phone app, removed commercial brand names and unsourced user counts, and fixed OS-AID to *Open-Source Automated Insulin Delivery* @psonnera
- [Glossary](../UsefulLinks/Glossary.md): added **AID**, **FCL**, **HCL** and **OS-AID** entries, cross-linked from **APS** and **Closed Loop** @psonnera
- New page [Android developer verification](#android-developer-verification): impact of Google's upcoming verification requirement on installing self-built apps, with free installation methods (ADB, advanced flow, limited distribution account) @psonnera

## Juni 2026

- [Browser-Build](#browser-build): in einen mehrseitigen Ablauf umgebaut, der mit der Entscheidung beginnt (Fork → Keystore Option 1/Option 2 mit einer eigenen Seite pro Gerät → Google Drive → Build → Fehlerbehebung). Verschachtelte Tabs entfernt. Die Installation des Dateimanager + ist jetzt ein gut sichtbarer eigener Schritt. @psonnera
- [Introduction](../Getting-Started/Introduction.md): terminology switched from *DIY* to *OS-AID* (Open-Source Automated Insulin Delivery), added Trio and Stelo, updated pump/CGM compatibility table @tmhastings

## März 2026

- [CLI Build Option](../SettingUpAaps/CLIBuild.md) (Command Line Interface) @je-l hinzugefügt
- *Computer Build* zu *Android Studio Build* umbenannt. Dateinamen für URLs unverändert.

## Januar 2025

- [3.4](#version3400) Veröffentlichung und Dokumentation aktualisiert Roll-up (Einrichtungsasssistent, Computer Build-Versionen, Konfiguration)
- Update der CGM-Liste. Dexcom G5, Tomato, Glimp entfernt.
- [Oberfläche für Setzstellen-Wechsel](#Aapsscreens-site-rotation)
- [Betriebsmodus](#AapsScreens-running-mode)
- [Autotune](../AdvancedOptions/Autotune.md)

## Dezember 2025

- [Profil-Feinjustierung](../GettingHelp/ProfileTuning.md) von @robrub

## Oktober 2025

- DiaKEM: Neuinstallationen funktionieren nach einem Server-Upgrade nicht mehr @psonnera
- Libre 2 gepatchte App entfernt (veraltet): Funktioniert nicht mit neuen Sensoren @psonnera
- Omnipod-Dash-Seite überarbeitet @XiTatiON

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
- Neustrukturierung der [Wear OS Smartwatches](../WearOS/BuildingAapsWearOS.md)-Inhalte @psonnerat

## Oktober 2024

- Aktualisierung mehrerer Seiten:
  - [Wie lange wird es dauern, alles einzurichten?](#preparing-how-long-will-it-take), [Übersicht der Komponenten](../DailyLifeWithAaps/CobCalculation.md), [Abschließen der Ziele (Objectives)](../SettingUpAaps/CompletingTheObjectives.md), [Dein AAPS-Profil](../SettingUpAaps/YourAapsProfile.md), [Konfiguration](../SettingUpAaps/ConfigBuilder.md) & [Einstellungen](../SettingUpAaps/Preferences.md), [AAPS-Bildschirme](../DailyLifeWithAaps/AapsScreens.md) @emilise
  - [COB-Berechnung](../DailyLifeWithAaps/CobCalculation.md), [Dynamischer ISF](../DailyLifeWithAaps/DynamicISF.md) @UnderCliffe10
- [Bauanleitung für Android Studio Ladybug](../SettingUpAaps/BuildingAaps.md) @tanja
- Technical work (deployment process for the documentation, files organization...) @psonnerat & @emilise

***

Fehlende Historie vom März 2022 bis September 2024

Mit der Version 3.2 wurden einige veraltete Informationen entfernt. Du findest es in der vorangegangenen Dokumentations-Version:

AAPS 3.1 Dokumentation ist [hier](https://androidaps.readthedocs.io/en/3.1/index.html) verfügbar.

***

## Februar 2022

- [Glukose (CGM) Qualitätswarnung](#aaps-screens-bg-warning-sign) @tanja
- [Medtronic-Pumpe](../CompatiblePumps/MedtronicPump.md) - update @dottedfingertips
- [Notwendige Prüfungen nach dem Update auf AAPS 3.0](Update3_0.md) @tanja
- [Omnipod Dash](../CompatiblePumps/OmnipodDASH.md) @Freloner @robertrub @vanelsberg
- Doku für AAPS 3.0 (teilweise) aktualisiert @xJoe
- [Wear OS für AAPS 3.0](../WearOS/WearOsSmartwatch.md) @peterleimbach

## Januar 2022

- [Fehlerbehebung für Android Studio](../GettingHelp/TroubleshootingAndroidStudio) - update @tanja

## Dezember 2021

- [AAPS erstellen](../SettingUpAaps/BuildingAaps.md) - update Android Studio Arctic Fox | 2020.3.1 @tanja
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) Informationen hinzugefügt @MilosKozak

## November 2021

- Best Practices für die Kalibrierung eines Libre 2 Sensors
- [ISF](../UsefulLinks/FAQ.md) Neuformulierung der Wirkweise
- Aktualisierung [Fehlerbehebung für Android Studio](../GettingHelp/TroubleshootingAndroidStudio)
- Gepatchte [Dexcom](../CompatibleCgms/DexcomG6.md)-App entfernt, da nicht mehr erforderlich

## Oktober 2021

- [Release Notes](ReleaseNotes.md) AAPS 3.0 Beta

## September 2021

- Empfohlene Computer-Spezifikation zum Erstellen der [AAPS-App](#Building-APK-recommended-specification-of-computer-for-building-apk-file)

## Juni 2021

- [Watchface 'sideload'](../WearOS/WearOsSmartwatch.md)

## April 2021

- Liste der [Kommunikationsgeräte](#CompatiblePumps-additional-communication-device) für Omnipod und Medtronic-Pumpen
- AAPS-Vorhersagen in [Nightscout](#Nightscout-manual-nightscout-setup)

## März 2021

- Kommunikation der Entwickler von gitter zu [Discord](https://discord.gg/4fQUWHZ4Mw) umgezogen

## Februar 2021

- New navigation bar and [language switch](../NavigateDoc/ChangeLanguageVersion.md)

## Januar 2021

- [Aktion-Tab](#screens-action-tab) - weitere Details auf Seite „AAPS-Bildschirme“
- Dexcom G6 mit [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)
- Libre Smart Reader [Akkustand](#screens-sensor-level-battery)
- [Ziele](#objectives-objective3) - Neue Fragen
- Weitere [neue AAPS 2.8.0 Funktionen](#Releasenotes-version-2-8-0)

## Dezember 2020

- [Libre 2](../CompatibleCgms/Libre2.md) - Die gepatchte App funktioniert nicht mit US-Sensoren
- [OpenAPS Übersicht der fest programmierten Limits](#Open-APS-features-overview-of-hard-coded-limits)
- Sony Smartwatch 3 manuelle Installation des Google Play Service

## Oktober 2020

- Accu-Chek Combo - Update [Sommerzeit-Anpassung](#time-adjustment-daylight-savings-time-dst)
- Accu-Chek Insight - Option [Verwende absolute statt prozentuale Basalwerte beim Upload zu Nightscout](#Accu-Chek-Insight-Pump-settings-in-aaps)
- Protokolle - mehr Details zum [Speicherort](../GettingHelp/AccessingLogFiles.md)
- Omnipod Eros - Statusupdate
- [SMS Kommandos - Zeitsynchronisation](../RemoteFeatures/SMSCommands.md)

## September 2020

- Großes Update für die neue AAPS Version 2.7
- Details findest Du in den `Release Notes <Releasenotes-version-2-7-0>`

## Juni 2020

- Libre 2 - more details patched Libre Link app & use of Bluetooth transmitters
- [Time zone traveling](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) with Libre 2

## Mai 2020

- [Verzögerter Bolus nur für Dana + Insight Pumpen](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Insight Vibration deaktivieren](#Accu-Chek-Insight-Pump-vibration) (nur Firmware 3.x)
- [Kleinste Anforderungsrate](#Preferences-minimal-request-change), um die Anzahl der Benachrichtigungen im Open Loop zu verringern
- Patched Libre Link-App - prüfen, ob korrekt gepatcht wurde
- [Vorhersagelinien](#aaps-screens-prediction-lines) - mehr Details

## April 2020

- Insulin zurückdatierten (z. B. durch Spritze)
- Android 6 Unterstützung wird mit der nächsten Master Version eingestellt

## März 2020

- [AndroidAPS mit Android Studio 3.6.1 erstellen](../SettingUpAaps/BuildingAaps.md)
- [DanaRS mit Firmware v3](../CompatiblePumps/DanaRS-Insulin-Pump.md) **kann derzeit nicht mit AAPS verwendet werden!**
- [Verzögerter Bolus und Wechsel zum Open Loop](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Update mit Android Studio 3.6.1](../Maintenance/UpdateToNewVersion)

## Februar 2020

- Automation Vorbehalte
- [Autosens](#Open-APS-features-autosens) - eine kurze Erklärung
- Careportal Alternativen
- Funktionalität [Verzögerter Bolus](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) - Closed Loop wird deaktiviert
- Neues Modul [Lokales Profil](../SettingUpAaps/ConfigBuilder.md)
- Beispiel-Setup - Update Dexcom G6
- [Version 2.6.0](#Releasenotes-version-2-6-0) - Wesentliche neue Funktionen
- [Wear OS-Komplikationen](../WearOS/WearOsSmartwatch.md)

## Januar 2020

- [Manuelle KH-Korrektur](#screens-bolus-carbs) bei fehlerhaften KH-Einträgen
- [Bildgröße](../SupportingAaps/HowToEditTheDocs.md) beim Bearbeiten der Dokumentation

## Dezember 2019

- [Android Auto](../RemoteFeatures/AndroidAuto.md) - Setup mit Screenshots
- [Accu-Chek Insight & Autotune](#Accu-Chek-Insight-Pump-settings-in-aaps) - Workaround für die Nutzung
- [Glimp](#Config-Builder-bg-source) - Version 4.15.57 und neuer unterstützt
- [Zifferblätter](../WearOS/WearOsSmartwatch.md) - Wesentliche Überarbeitung, mehr Details
- [Zifferblatt Komplikationen](#Watchfaces-complications) - Dein Lieblings-Watchface mit AAPS-Daten

## November 2019

- [Automation - bei deaktiviertem Loop ausschalten](../DailyLifeWithAaps/Automations.md)
- [Dexcom G6 Update zum Transmitter-Wechsel](#xdrip-replace-transmitter)
- [Verzögerter Bolus - Warum er im Loop-Kontext nicht funktioniert](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [FAQ - Sport](#FAQ-sports)
- [Startbildschirm - Linien im Diagramm](#aaps-screens-main-graph)
- [Insight - Absolute Werte im NS Client deaktivieren](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Medtronic Pumpe - mögliche Doppeleinträge](../CompatiblePumps/MedtronicPump.md)
- [Neue Anleitung zum Freestyle Libre 2](../CompatibleCgms/Libre2.md)
- [Profilwechsel mit Prozentsatz - Beispiel](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
- [Update SMS-Befehle](../RemoteFeatures/SMSCommands.md)
- [Fehlerbehebung für Android Studio](../GettingHelp/TroubleshootingAndroidStudio)
- [Fehlerbehebungen - Linksammlung](../GettingHelp/GeneralTroubleshooting.md)
- Aktualisiert - Kurzanleitung für erfahrene Anwender
- Docs - Update [bearbeiten](#edit-the-docs-code-syntax) und [Übersetzung](#translations-translation-of-the-documentation).

## Oktober 2019

- [AAPS Version 2.5](#Releasenotes-version-2-5-0) Updates (besonders auf [Update-Seite](../Maintenance/UpdateToNewVersion.md))
- [AccuChek Insight-Log-Optionen](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [COB-Berechnung auf separate Seite ausgelagert](../DailyLifeWithAaps/CobCalculation.md)
- [Aktiven Kohlenhydrate (COB) - Fehlerhafte Ermittlung](#CobCalculation-detection-of-wrong-cob-values)
- [Dexcom G6-spezifische Problembehandlung](#DexcomG6-troubleshooting-g6)
- [Ziele (objectives) Update AAPS Version 2.5](../SettingUpAaps/CompletingTheObjectives.md)
- [Update Einstellungen](../SettingUpAaps/Preferences.md)
- [SGLT-2 Inhibitoren - beim Loopen nicht verwenden](#PreparingForAaps-no-sglt-2-inhibitors)
- [SMS-Befehle Problembehandlung](#SMSCommands-troubleshooting)
- [xDrip - Update G6 Transmitter ersetzen](#xdrip-replace-transmitter)

## September 2019

- [Automate](../DailyLifeWithAaps/Automations.md)
- [Bolus Rechner](#AapsScreens-wrong-cob-detection) - langsame Kohlenhydrat-Absorption
- [Nightscout Sicherheit](#Nightscout-security-considerations)
- [Profil Zeitverschiebung](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) (mehr Details)
- [Kontrolle aus der Ferne](../RemoteFeatures/RemoteMonitoring.md)
- [Was ist ein Closed Loop System?](#Introduction-what-does-hybrid-closed-loop-mean)

## August 2019

- Dexcom G6 gepatchte App-Region
- [Dexcom G6 neuer Transmitter](#xdrip-connect-g6-transmitter-for-the-first-time) ("firefly" / 8G...)
- Was brauche ich? - neue Struktur & zusätzliche Informationen
- Neue Struktur
