# Willkommen zur AAPS-Dokumentation

![grafik](./images/basic-outline-of-AAPS.png)

```{admonition} Latest Release
:class: note

 xx xxxx 202x : Version {{ aaps_version }}.x.x is out. Schau in die [Release Notes](#latestrelease), um zu sehen, was es Neues gibt, und führe die Schritte aus, die in der [Aktualisierungsanleitung](./Maintenance/UpdateToNewVersion.md) beschrieben sind, um entsprechend auf die neueste Version zu aktualisieren.

```

Android APS (**AAPS**) ist eine Open-Source-App für Menschen mit insulinabhängigem Diabetes. Es handelt sich dabei um ein künstliches Bauchspeicheldrüsen-System (APS), das auf Android-Smartphones läuft. **AAPS** nutzt verschiedene OpenAPS-Softwarealgorithmen, um damit genau das zu tun, was eine echte Bauchspeicheldrüse auch tut: den Glukosespiegel durch automatisierte Insulindosierung (AID) in gesunden Grenzen halten. To use **AAPS** you need **three** compatible devices: **(1)** an Android phone, **(2)** a continuous glucose monitor (CGM), and **(3)** an FDA/CE approved insulin pump. You can also add **(4)** cloud services to remotely control **AAPS**, share your data, and store it on a reporting server, and **(5)** a smartwatch.

This documentation explains how to set up and use **AAPS**. You can navigate through the **AAPS** documentation either through the menu on the left (and the handy **Search docs** function), or by using the [index](#index-aaps-documentation-index) at the bottom of this page.

## Überblick über die AAPS-Dokumentation („die Doku“)

Section **1) Getting Started**, the [Introduction](Getting-Started/Introduction.md) explains the general concept of what an artificial pancreas system (APS) is designed to do. Sie umreißt den Hintergrund des Loopens im Allgemeinen, warum **AAPS** entwickelt wurde, vergleicht **AAPS** mit anderen Systemen und behandelt Sicherheitsfragen. Sie gibt Vorschläge, wie Du mit Deinem Diabetes-Team über **AAPS** sprechen kannst, erklärt, warum Du die **AAPS**-App selbst erstellen musst (anstatt sie nur herunterzuladen), und gibt einen Überblick über den typischen Aufbau eines **AAPS**-Systems. Sie behandelt auch die Zugänglichkeit und wer wahrscheinlich von **AAPS** profitieren wird.

[Vorbereitungen, um mit AAPS zu starten](./Getting-Started/PreparingForAaps.md) beschreibt weitere Überlegungen zur Sicherheit, den Smartphones, Sensoren (CGMs - Continuous Glucose Monitors) und Insulinpumpen, die mit **AAPS** kompatibel sind. Es gibt einen Überblick über den Prozess, den Du durchlaufen wirst, und gibt eine zeitliche Einschätzung wie lange es dauern wird bis Du alle **AAPS**-Funktionalitäten nutzen kannst. Dieser Abschnitt bereitet Dich technisch darauf vor, Deine **AAPS**-Einrichtung so schnell und effizient wie möglich abzuschließen. The subsection [CGM Configuration](./Getting-Started/CompatiblesCgms.md) explains how to optimize your CGM setup and which smoothing options are best.

Jetzt, da Du ein solides Grundverständnis des Prozesses hast, kannst Du damit beginnen, Deinen **AAPS**-Loop zu erstellen.

Section **2) Build the app** explains why you need to build the **AAPS** app yourself rather than just downloading it, and takes you step-by-step through [building it](./SettingUpAaps/BuildingAaps.md) (using a browser, Android Studio, or the command line) and then transferring and installing it on your phone. It starts with an optional step, setting up a [dedicated Google account](./UsefulLinks/DedicatedGoogleAccountForAaps.md) to hold your builds and backups. It also explains [Android developer verification](#android-developer-verification), a change Google is rolling out from September 2026 that affects how self-built apps are installed.

Section **3) Setting up the reporting server** covers choosing and [setting up your reporting server](./SettingUpAaps/SettingUpTheReportingServer.md) (Nightscout or Tidepool) so you can review and share your data.

Section **4) [Configure AAPS](./SettingUpAaps/SetupWizard.md)** covers setting up the **AAPS** app using the setup Wizard, linking it with your CGM app and either a real or virtual insulin pump, as well as linking **AAPS** to your reporting server. You are then introduced to everything **AAPS** can do, through a safe, carefully paced, step-by-step process. This makes sure that you (or your child) are thoroughly familiar and comfortable navigating all the different levels and menu configurations before moving on to the next phase, commonly called the next "Objective". You keep progressing this way until you have enough experience to begin using the more advanced options in the app. Diese Objectives (Ziele) sind so aufgebaut, dass nach und nach weitere **AAPS**-Funktionen freigeschaltet werden und so am Ende vom 'Open Loop' auf 'Closed Loop' umgestellt werden kann.

Section **5) [Daily life with AAPS](./DailyLifeWithAaps/AapsScreens.md)** covers key **AAPS** features, to help you use (and customize) **AAPS**. This includes understanding the screens, carbs-on-board, sensitivity, DynamicISF, profile switching, temp targets, extended carbs (or eCarbs), automations, and [reviewing your data](./Maintenance/Reviewing.md) in the history browser and statistics. It also covers frequent topics like how to manage different types of meals, how to deal with cannula and sensor changes, smartphone updates, daylight saving changes, [traveling with AAPS](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md), and sports. Häufig gestellte Fragen und Antworten dazu findest Du im Abschnitt zur Fehlerbehebung.

Section **6) [Remote AAPS features](./RemoteFeatures/RemoteControl.md)** highlights a real strength of **AAPS**. Es gibt eine Vielzahl von Möglichkeiten, Befehle remote an **AAPS** zu senden oder einfach dessen Daten zu folgen. Dies ist ebenso nützlich für Betreuende, die **AAPS** für Minderjährige verwenden möchten, als auch für Erwachsene mit Diabetes, die entweder ihre Glukosewerte (und andere Metriken) bequemer als nur auf ihrem Smartphone überwachen möchten (z. B. auf einer Smartwatch, im Auto _usw._), oder die möchten, dass auch nahestehende Personen die Daten überwachen. Dieser Abschnitt hat auch eine Anleitung zur Nutzung von Android Auto, sodass Du die Glukosewerte auch im Auto sehen kannst.

Section **7) [Wear OS smartwatches](./WearOS/BuildingAapsWearOS.md)** gives information and procedures to use an Android **Wear OS** smartwatch with the dedicated **AAPS** watchfaces or custom watchfaces, either as a remote control of your phone or just a display indicator.


Section **8) [Maintenance of AAPS](./Maintenance/ExportImportSettings.md)** covers how to export and back up your settings (which is very important in case you lose/break your phone), gives the latest version notes, details how to update **AAPS** and explains what happens when a version reaches its end of life. In der Regel gibt es 2-3 neue AAPS-Versionen im Jahr, die ein Update der App erforderlich machen. Diese Updates sind - wie für jede Software - wichtig, da damit kleinere Fehler ausgebügelt und Verbesserungen in **AAPS** verfügbar werden. Es gibt einen eigenen Abschnitt, der sich mit Fehlerbehebungen rund um den Aktualisierungsvorgang und den dazu häufig gestellten Fragen beschäftigt.

Section **9) [Help & Troubleshooting](GettingHelp/WhereCanIGetHelp.md)** should help direct you to the best places to go to find general help with **AAPS**. It is the single place to go when something is not working: the [Troubleshooting](GettingHelp/GeneralTroubleshooting.md) hub collects, by topic, the solutions to the most common problems, and the [FAQ](UsefulLinks/FAQ.md) answers frequent questions. Gerade am Anfang ist es wichtig, mit anderen so schnell wie möglich in Kontakt zu treten, Fragen zu klären und die üblichen Fallstricke zu lösen. Viele Menschen nutzen **AAPS** bereits erfolgreich, aber jeder hatte irgendwann eine Frage, die er nicht alleine lösen konnte. Das Schöne an der großen Community ist, dass die Reaktionszeiten auf Fragen in der Regel kurz (meist nur wenige Stunden) sind. Mach' Dir keine Sorgen, um Hilfe zu bitten, es gibt keine dummen Fragen! Wir ermutigen Benutzer*innen aller Erfahrungsstufen, so viele Fragen, wie sie für notwendig halten, zu stellen, um sie sicher ans Laufen zu kommen. Dieser Abschnitt enthält allgemeine Fehlerbehebungen für **AAPS** und den **AAPSClient** (eine Begleit-App) sowie die Erklärung, wie Du, wenn Du der Meinung bist, dass ein technisches **AAPS**-Problem vorliegt, Deine **AAPS**-Daten (Protokolldateien) zur Prüfung an die Entwickler senden kannst.

Section **10)** covers **[Advanced AAPS options](./AdvancedOptions/FullClosedLoop.md)** such as how to progress from using **AAPS** for hybrid-closed looping (bolusing for meals _etc._) to full closed looping (no bolusing), how to [tune your profile](./GettingHelp/ProfileTuning.md) and use Autotune, and details development and engineering modes. Die meisten kommen sehr gut mit der Haupt- oder "Master"-Version von **AAPS** zurecht, ohne sich mit diesen (Entwickler-)Optionen zu befassen. Dieser Abschnitt richtet sich an Benutzende, die bereits eine gute Kontrolle haben und ihre Einstellungen weiter verbessern möchten.

In section **11) [How to support AAPS](SupportingAaps/HowToEditTheDocs.md)** we provide information so that you can support this project. Du kannst Geld oder Geräte spenden oder Dein Fachwissen einbringen. Du kannst Änderungen an der Dokumentation vorschlagen oder selber machen, Du kannst bei der [Übersetzung der Dokumentation](SupportingAaps/Translations) unterstützen und Du kannst Deine Daten über das Open-Humans-Projekt zur Verfügung stellen.

Section **12) Resources**, contains archived or additional documentation, including a subsection for [clinicians](UsefulLinks/ClinicianGuideToAaps.md) who have expressed interest in open source artificial pancreas technology such as **AAPS**, or for patients who want to share such information with their clinicians, this topic is also addressed in the introduction. Der Abschnitt enthält auch zusätzliche Referenzen und Ressourcen rund um das Thema Diabetes und Looping. It includes the [Glossary](./UsefulLinks/Glossary.md), a list of the acronyms (or short-term names) used throughout **AAPS**. Hier erfährst Du beispielsweise, wofür die Begriffe ISF oder TT stehen.


 ### Du willst mit **AAPS** loslegen? In [Einführung in APS und AAPS](Getting-Started/Introduction.md) erfährst Du mehr über **AAPS**.

```{admonition} SAFETY NOTICE
:class: danger
Die Sicherheit von **AAPS** ist unmittelbar von den Sicherheits-Features Deiner Hardware (Smartphone, Insulinpumpe, CGM) abhängig. Nutze ausschließlich eine voll funktionsfähige FDA/CE-zugelassene Insulinpumpe und CGM (Sensor). Verwende keine defekte, veränderte oder selbstgebaute Insulinpumpe oder CGM-Empfänger. Verwende nur Originalzubehör (Setzhilfen, Kanülen und Insulinreservoire), das vom Hersteller für Deine Pumpe und Dein CGM zugelassen sind. Die Verwendung von nicht getesteten oder modifizierten Verbrauchmaterials kann zu Ungenauigkeiten und Insulindosierungsfehlern führen und stellt damit ein erhebliches Risiko für den Anwendenden dar. 

Solltest Du SGLT-2-Hemmer (Gliflozine) nehmen, kannst Du **AAPS** aufgrund der Glukosespiegel senkenden Wirkung der Gliflozine nicht nutzen. Durch den abgesenkten Glukosespiegel, riskierst Du eine diabetische Ketoazidose (DKA), da weniger Insulin abgegeben wird und Hypoglykämien auftreten können. 
```

```{admonition} Disclaimer
:class: note

- Alle hier beschriebenen Informationen und Quellcodes dienen ausschließlich Informations- und Bildungszwecken. Du nutzt [Nightscout](https://nightscout.github.io/) und **AAPS** auf eigenes Risiko. Triff keine medizinischen Entscheidungen auf Basis der Informationen oder des Codes. Nightscout erfüllt keinerlei Anforderungen des Datenschutzes im Gesundheitswesen. 
- Bei Nutzung des Quellcodes von github.com bestehen keinerlei Gewährleistungs- und Garantieansprüche. Es gibt keinen Support. Im Übrigen wird auf die Lizenz verwiesen, die im Repository abgerufen werden kann.
- Sämtliche Produkt- und Herstellernamen, Handelsmarken, Dienstleistungsmarken, Warenzeichen und eingetragene Dienstleistungsmarken sind Eigentum ihrer jeweiligen Inhaber und werden nur zu Informationszwecken genutzt und nicht für Werbung oder Marketing. Ihre Verwendung dient nur zur Information und bedeutet weder, dass AAPS zu ihnen gehört, noch dass sie unterstützt werden.

**AAPS** has no association with, and is not endorsed by: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/), [Medtronic](https://www.medtronic.com/), [Diaconn](https://www.diaconn.com/en/index.html), [EOFlow](http://www.eoflow.com/), [MicroTech Medical (Equil)](https://www.microtechmd.com/), [Medtrum](https://www.medtrum.com/), [Senseonics (Eversense)](https://www.senseonics.com/), [i-SENS (CareSens)](https://i-sens.com/), [POCTech](https://poctechcorp.com/en/), [Ottai](https://ottai.com/) or [Syai](https://www.syai.com/).

```

(index-aaps-documentation-index)=

## AAPS-Dokumentationsindex

```{toctree}
:caption: Using this documentation

Change language and version <./NavigateDoc/ChangeLanguageVersion.md>
Search the documentation <./NavigateDoc/SearchDoc.md>
Documentation updates <./Maintenance/DocumentationUpdate.md>
```
```{toctree}
:caption: 1) Getting started

Introduction to AAPS <./Getting-Started/Introduction.md>
Preparing for AAPS <./Getting-Started/PreparingForAaps.md>
Component Overview <./Getting-Started/ComponentOverview.md>
- Compatible pumps <./Getting-Started/CompatiblePumps.md>
- Compatible CGMs <./Getting-Started/CompatiblesCgms.md>
- Compatible phones  <./Getting-Started/Phones.md>
- Compatible watches  <./Getting-Started/Watches.md>
```

```{toctree}
:caption: 2) Build the app

Dedicated Google account for AAPS (optional) <./UsefulLinks/DedicatedGoogleAccountForAaps.md>
Building AAPS <./SettingUpAaps/BuildingAaps.md>
- Browser Build <./SettingUpAaps/BrowserBuild.md>
- Android Studio Build <./SettingUpAaps/ComputerBuild.md>
- CLI Build <./SettingUpAaps/CLIBuild.md>
Transferring and Installing AAPS <./SettingUpAaps/TransferringAndInstallingAaps.md>
```
```{toctree}
:caption: 3) Setting up the reporting server

Setting up the reporting server <./SettingUpAaps/SettingUpTheReportingServer.md>
- Nightscout <./SettingUpAaps/Nightscout.md>
- Tidepool <./SettingUpAaps/Tidepool.md>
```
```{toctree}
:caption: 4) Configure AAPS

Setup Wizard <./SettingUpAaps/SetupWizard.md>
Your AAPS Profile <./SettingUpAaps/YourAapsProfile.md>
Change AAPS configuration <./SettingUpAaps/ChangeAapsConfiguration.md>
- Configuration (Config Builder) <./SettingUpAaps/ConfigBuilder.md>
- Preferences <./SettingUpAaps/Preferences.md>
Completing the objectives <./SettingUpAaps/CompletingTheObjectives.md>
```

```{toctree}
:caption: 5) Daily Life with AAPS

AAPS Screens <./DailyLifeWithAaps/AapsScreens.md>
Key AAPS Features <./DailyLifeWithAaps/KeyAapsFeatures.md>
COB calculation <./DailyLifeWithAaps/CobCalculation.md>
Sensitivity detection <./DailyLifeWithAaps/SensitivityDetectionAndCob.md>
Dynamic ISF <./DailyLifeWithAaps/DynamicISF.md>
Profile Switch & Profile Percentage <./DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md>
Temp-Targets <./DailyLifeWithAaps/TempTargets.md>
Extended carbs <./DailyLifeWithAaps/ExtendedCarbs.md>
QuickWizards <./DailyLifeWithAaps/QuickWizards.md>
Scenes <./DailyLifeWithAaps/Scenes.md>
Automations <./DailyLifeWithAaps/Automations.md>
QuickLaunch toolbar <./DailyLifeWithAaps/QuickLaunch.md>
Home screen widgets <./DailyLifeWithAaps/Widgets.md>
Food database <./DailyLifeWithAaps/Food.md>
Global search <./DailyLifeWithAaps/GlobalSearch.md>
Reviewing your data <./Maintenance/Reviewing.md>
AAPS for children <./DailyLifeWithAaps/AapsForChildren.md>
Pumps and cannulas <./DailyLifeWithAaps/PumpsAndCannulas.md>
Timezone traveling & Daylight Saving Time <./DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md>

```

```{toctree}
:caption: 6) Remote AAPS features

Remote monitoring <./RemoteFeatures/RemoteMonitoring.md>
Following Only <./RemoteFeatures/FollowingOnly.md>
Android Auto <./RemoteFeatures/AndroidAuto.md>
Remote control <./RemoteFeatures/RemoteControl.md>
The AAPSClient app <./RemoteFeatures/AapsClient.md>
Master ↔ Client control <./RemoteFeatures/ClientMasterControl.md>
SMS Commands <./RemoteFeatures/SMSCommands.md>

```
```{toctree}
:caption: 7) Wear OS Smartwatches

AAPS for Wear OS <./WearOS/BuildingAapsWearOS.md>
Use the smartwatch <./WearOS/WearOsSmartwatch.md>
Remote control <./RemoteFeatures/RemoteControlWearOS.md>
Custom watchfaces reference <./ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md>
Exchange site custom watchfaces <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: 8) Maintenance of AAPS

Export/Import Settings <./Maintenance/ExportImportSettings.md>
AAPS Release Notes <./Maintenance/ReleaseNotes.md>
What changed in AAPS v4 <./Maintenance/V4Changes.md>
Updating to a new version of AAPS <./Maintenance/UpdateToNewVersion.md>
- Browser Update (fork) <./Maintenance/UpdateBrowserBuild.md>
- Android Studio Update <./Maintenance/UpdateComputerBuild.md>
End of life <./Maintenance/EndOfLife.md>

```

```{toctree}
:caption: 9) Help & Troubleshooting

Where can I get help with AAPS <./GettingHelp/WhereCanIGetHelp.md>
Troubleshooting (start here) <./GettingHelp/GeneralTroubleshooting.md>
- Bluetooth troubleshooting <./GettingHelp/BluetoothTroubleshooting.md>
- Troubleshooting NSClient <./GettingHelp/TroubleshootingNsClient.md>
- Troubleshooting Android Studio <./GettingHelp/TroubleshootingAndroidStudio.md>
- Browser build troubleshooting <./GettingHelp/BrowserBuildTroubleshooting.md>
- Reinstalling AAPS (new keystore) <./GettingHelp/ReinstallAaps.md>
- Accessing logfiles <./GettingHelp/AccessingLogFiles.md>
FAQ <./UsefulLinks/FAQ.md>
```

```{toctree}
:caption: 10) Advanced AAPS options

Full Closed Loop <./AdvancedOptions/FullClosedLoop.md>
Profile Tuning Guide <./GettingHelp/ProfileTuning.md>
Autotune <./AdvancedOptions/Autotune.md>
Insulin concentration <./AdvancedOptions/InsulinConcentration.md>
Dev branch <./AdvancedOptions/DevBranch.md>
Browser build: cherry-pick a commit <./AdvancedOptions/BrowserBuildCherryPick.md>

```
```{toctree}
:caption: 11) How to support AAPS

How to help <./SupportingAaps/HowCanIHelp.md>
Editing the docs <./SupportingAaps/HowToEditTheDocs.md>
Translating the app and docs <./SupportingAaps/Translations.md>
State of translations <./SupportingAaps/StateOfTranslations.md>
Open Humans Uploader <./SupportingAaps/OpenHumans.md>

```
```{toctree}
:caption: 12) Resources

Glossary <./UsefulLinks/Glossary.md>
General diabetes and looping resources <./UsefulLinks/BackgroundReading.md>
For Clinicians <./UsefulLinks/ClinicianGuideToAaps.md>
```
