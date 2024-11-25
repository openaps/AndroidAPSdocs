# Willkommen zur AAPS-Dokumentation

![grafik](./images/basic-outline-of-AAPS.png)

Android APS (**AAPS**) ist eine Open-Source-App für Menschen mit insulinabhängigem Diabetes. Es handelt sich dabei um ein künstliches Bauchspeicheldrüsen-System (APS), das auf Android-Smartphones läuft. **AAPS** uses an OpenAPS software algorithm and aims to do what a real pancreas does: keep blood sugar levels within healthy limits by using automated insulin dosing. To use **AAPS** you need **three** compatible devices: **(1)** an Android phone, **(2)** a continuous glucose monitor (CGM), and **(3)** a FDA/CE approved insulin pump. Optionally you will need cloud services **(4)** to remote control **AAPS**, share your data and store them in a reporting server, then also **(5)** a smartwatch.

Diese Dokumentation erklärt, wie Du **AAPS** einrichtest und nutzt. You can navigate through the **AAPS** documentation either through the menu on the left (and the handy "**Search docs**" function), or by using the [index](#index-aaps-documentation-index) at the bottom of this page.

## Überblick über die AAPS-Dokumentation ("The docs")

Section **2) Getting Started**, the [Introduction](Getting-Started/Introduction.md) explains the general concept of what an artificial pancreas system (APS) is designed to do. Es umreißt den Hintergrund des Loopens im Allgemeinen, warum **AAPS** entwickelt wurde, vergleicht **AAPS** mit anderen Systemen und behandelt Sicherheitsfragen. Es gibt Vorschläge, wie Du mit Deinem Diabetes-Team über **AAPS** sprechen kannst, erklärt, warum Du die **AAPS**-App selbst erstellen musst (anstatt sie nur herunterzuladen), und gibt einen Überblick über den typischen Aufbau eines **AAPS**-Systems. Es behandelt auch die Zugänglichkeit und wer wahrscheinlich von **AAPS** profitieren wird.

[Preparing for AAPS](./Getting-Started/PreparingForAaps.md) gives more detail about safety considerations, and the phones, CGMs (Continuous Glucose Monitors) and insulin pumps which are compatible with **AAPS**. Es gibt einen Überblick über den Prozess, den Du durchlaufen wirst, und gibt eine zeitliche Einschätzung wie lange es dauern wird bist Du alle **AAPS**-Funktionalitäten nutzen kannst. Dieser Abschnitt bereitet Dich technisch darauf vor, Deine **AAPS**-Einrichtung so schnell und effizient wie möglich abzuschließen. The subsection [CGM Configuration](./Getting-Started/CompatiblesCgms.md) explains how to optimse CGM setup and what smoothing options are best.

Jetzt, da Du ein solides Grundverständnis des Prozesses hast, kannst Du damit beginnen, Deinen **AAPS**-Loop zu erstellen.

Abschnitt **3) AAPS einrichten** enthält Schritt-für-Schritt Anleitungen, um dies zu tun. It covers choosing and [setting up your reporting server](./SettingUpAaps/SettingUpTheReportingServer.md) (Nightscout or Tidepool) so you can review and share your data, getting your computer ready for building the AAPS app, building the AAPS app and transferring the AAPS app to your phone. Es umfasst auch das Einrichten der **AAPS**-App mithilfe des Einrichtungsassistenten, das Verknüpfen mit Deiner CGM-App und entweder einer echten oder einer virtuellen Insulinpumpe sowie das Verknüpfen von **AAPS** mit Deinem Berichtsserver. Du wirst danach durch einen kleinschrittigen und sehr fein justierten Prozess sehr behutsam an die vollständige **AAPS**-Nutzung herangeführt. Damit soll sichergestellt werden, dass Du oder Dein Kind, sicher durch die verschiedenen Funktionen und Menü-Konfigurationen navigieren lernst, bevor Du zur folgenden Phase (auch "nächstes Ziel" bzw. "Objective" genannt) übergehst und schließlich genug Erfahrung gesammelt hast, um die weitreichensten Funktionalitäten der App nutzen zu können. Diese Objectives (Ziele) sind so aufgebaut, dass nach und nach weitere **AAPS**-Funktionen freigeschaltet werden und so am Ende vom 'Open Loop' auf 'Closed Loop' umgestellt werden kann.

Section **4) Daily life with AAPS** covers key **AAPS** features, to help you use (and customise)  **AAPS**. Dies beinhaltet insbesondere das Verständnis der Bildschirme, Kohlenhydrate an Bord (CoB), Sensitivität, Profilwechsel, temporäre Ziele, verzögerte Kohlenhydrate (oder eCarbs), Automatisierungen und dynamischer ISF (DynamicISF). It also covers frequent topics like how to manage different types of meals, how to deal with cannula and sensor changes, smartphone updates, daylight saving changes, and [travelling with AAPS](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) and sports. Häufig gestellte Fragen und Antworten dazu findest Du im Abschnitt zur Fehlerbehebung.

Section **5) [Remote AAPS features](./RemoteFeatures/RemoteControl.md)** highlights a real strength of **AAPS**. Es gibt eine Vielzahl von Möglichkeiten, Befehle remote an **AAPS** zu senden oder einfach dessen Daten zu folgen. Dies ist ebenso nützlich für Betreuende, die **AAPS** für Minderjährige verwenden möchten, als auch für Erwachsene mit Diabetes, die entweder ihre Glukosewerte (und andere Metriken) bequemer als nur auf ihrem Smartphone überwachen möchten (z. B. auf einer Smartwatch, im Auto _usw._), oder die möchten, dass auch nahestehende Personen die Daten überwachen. Dieser Abschnitt hat auch eine Anleitung zur Nutzung von Android Auto, sodass Du die Glukosewerte auch im Auto sehen kannst.

Section **6) Wear OS smartwatches** gives information and procedures to use an Android **Wear OS** smartwatch with the dedicated **AAPS** watchfaces or custom watchfaces, either as a remote control of your phone or just a display indicator.


Section **7) Maintenance of AAPS** covers how to export and backup your settings (which is very important in case you lose/break your phone), gives the latest version notes and details how to update **AAPS**. In der Regel gibt es 2-3 neue AAPS-Versionen im Jahr, die ein Update der App erforderlich machen. Diese Updates sind - wie für jede Software - wichtig, da damit kleinere Fehler ausgebügelt und Verbesserung in **AAPS** verfügbar werden. Es gibt einen eigenen Abschnitt, der sich mit Fehlerbehebungen rund um den Aktualisierungsvorgang und den dazu häufig gestellten Fragen beschäftigt.

Section **8) [Getting Help](GettingHelp/WhereCanIGetHelp.md)** should help direct you to the best places to go to find general help with **AAPS**. Gerade am Anfang ist es wichtig, mit anderen so schnell wie möglich in Kontakt zu treten, Fragen zu klären und die üblichen Fallstricke zu lösen. Viele Menschen nutzen **AAPS** bereits erfolgreich, aber jeder hatte irgendwann eine Frage, die er nicht alleine lösen konnte. Das Schöne an der großen Community ist, dass die Reaktionszeiten auf Fragen in der Regel kurz (meist nur wenige Stunden) sind. Mach' Dir keine Sorgen, um Hilfe zu bitten, es gibt keine dummen Fragen! Wir ermutigen Benutzer*innen aller Erfahrungsstufen, so viele Fragen, wie sie für notwendig halten, zu stellen, um sie sicher ans Laufen zu kommen. Dieser Abschnitt enthält allgemeine Fehlerbehebungen für **AAPS** und den **AAPSClient** (eine Begleit-App) sowie die Erklärung, wie Du, wenn Du der Meinung bist, dass ein technisches **AAPS** Problem vorliegt, Deine **AAPS**-Daten (Protokolldateien) zur Prüfung an die Entwickler senden kannst.

Section **9)** covers **Advanced AAPS options** such as how to progress from using **AAPS** for hybrid-closed looping (bolusing for meals _etc._) to full closed looping (no bolusing), and details development and engineering modes. Die meisten kommen sehr gut mit der Haupt- oder "Master"-Version von **AAPS** zurecht, ohne sich mit diesen (Entwickler-)Optionen zu befassen. Dieser Abschnitt richtet sich an Benutzende, die bereits eine gute Kontrolle haben und ihre Einstellungen weiter verbessern möchten.

In section **10) [How to support AAPS](SupportingAaps/HowToEditTheDocs.md)** we provide  information so that you can support this project. Du kannst Geld oder Geräte spenden oder Dein Fachwissen einbringen. You can suggest/make changes to the documentation yourself, help with [translation of the documentation](SupportingAaps/Translations) and provide your data through the Open Humans project.

Section **11) Resources**, contains archived or additional documentation, including a subsection for [clinicians](UsefulLinks/ClinicianGuideToAaps.md) who have expressed interest in open source artificial pancreas technology such as **AAPS**, or for patients who want to share such information with their clinicians, this topic is also addressed in the introduction. More diabetes and looping references and resources are also contained in this section. It includes the  [Glossary](./UsefulLinks/Glossary.md), a list of the acronyms (or short-term names) used throughout **AAPS**. Hier erfährst Du beispielsweise, wofür die Begriffe ISF oder TT stehen.


 ### Du willst mit **AAPS** loslegen? Read more about **AAPS** in the [Introduction](Getting-Started/Introduction.md).

```{admonition} SAFETY NOTICE
:class: danger
Die Sicherheit von **AAPS** ist unmittelbar von den Sicherheits-Features Deiner Hardware (Smartphone, Insulinpumpe, CGM) abhängig. Nutze ausschließlich eine voll funktionsfähige FDA/CE-zugelassene Insulinpumpe und CGM (Sensor). Verwende keine defekte, veränderte oder selbstgebaute Insulinpumpe oder CGM-Empfänger. Verwende nur Originalzubehör (Setzhilfen, Katheter und Insulinreservoire), die vom Hersteller für Deine Pumpe und Dein CGM zugelassen sind. Die Verwendung von nicht getesteten oder modifizierten Verbrauchsmaterial kann zu Ungenauigkeiten und Insulindosierungsfehlern führen und stellt damit ein erhebliches Risiko für den Anwendenden dar. 

Solltest Du SGLT-2-Hemmer (Gliflozine) nehmen, kannst Du **AAPS** aufgrund der Glukosespiegel senkenden Wirkung der Glifozine AAPS nicht nutzen. Durch den abgesenkten Glukosespiegel, riskierst Du eine diabetische Ketoazidose (DKA), da weniger Insulin abgegeben wird und Hypoglykämien auftreten können. 
```

```{admonition} Disclaimer
:class: note

- Alle hier beschriebenen Informationen und Quellcodes dienen ausschließlich Informations- und Bildungszwecken. Du nutzt [Nightscout](https://nightscout.github.io/) und **AAPS** auf eigenes Risiko. Treffe keine medizinischen Entscheidungen auf Basis der Informationen oder des Codes. Nightscout erfüllt keinerlei Anforderungen des Datenschutzes im Gesundheitswesen. 
- Bei Nutzung des Quellcodes von github.com bestehen keinerlei Gewährleistungs- und Garantieansprüche. Es gibt keinen Support. Im Übrigen wird auf die Lizenz verwiesen, die im Repository abgerufen werden kann.
- Sämtliche Produkt- und Herstellernamen, Handelsmarken, Dienstleistungsmarken, Warenzeichen und eingetragene Dienstleistungsmarken sind Eigentum ihrer jeweiligen Inhaber und werden nur zu Informationszwecken genutzt und nicht für Werbung oder Marketing. Ihre Verwendung dient nur zur Information und bedeutet weder, dass AAPS zu ihnen gehört, noch dass sie unterstützt werden.

**AAPS** steht in keinerlei Verbindung zu und wird auch nicht unterstützt von: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/) oder [Medtronic](https://www.medtronic.com/).

```

(index-aaps-documentation-index)=

## AAPS Dokumenten-Index

```{toctree}
:caption: 1) Change language

Change language <./ChangeLanguage/ChangeLanguage.md>
```
```{toctree}
:caption: 2) Getting started

Introduction to AAPS <./Getting-Started/Introduction.md>
Preparing for AAPS <./Getting-Started/PreparingForAaps.md>
Component Overview <./Getting-Started/ComponentOverview.md>
- Compatible pumps <./Getting-Started/CompatiblePumps.md>
- Compatible CGMs <./Getting-Started/CompatiblesCgms.md>
- Compatible phones  <./Getting-Started/Phones.md>
- Compatible watches  <./Getting-Started/Watches.md>
```

```{toctree}
:caption: 3) Setting up AAPS

Setting up the reporting server <./SettingUpAaps/SettingUpTheReportingServer.md>
- Nightscout <./SettingUpAaps/Nightscout.md>
- Tidepool <./SettingUpAaps/Tidepool.md>
Building AAPS <./SettingUpAaps/BuildingAaps.md>
Transferring and Installing AAPS <./SettingUpAaps/TransferringAndInstallingAaps.md>
Setup Wizard <./SettingUpAaps/SetupWizard.md>
Your AAPS Profile <./SettingUpAaps/YourAapsProfile.md>
Change AAPS configuration <./SettingUpAaps/ChangeAapsConfiguration.md>
- Config Builder <./SettingUpAaps/ConfigBuilder.md>
- Preferences <./SettingUpAaps/Preferences.md>
Completing the objectives <./SettingUpAaps/CompletingTheObjectives.md>
```

```{toctree}
:caption: 4) Daily Life with AAPS

AAPS Screens <./DailyLifeWithAaps/AapsScreens.md>
Key AAPS Features <./DailyLifeWithAaps/KeyAapsFeatures.md>
COB calculation <./DailyLifeWithAaps/CobCalculation.md>
Sensitivity detection <./DailyLifeWithAaps/SensitivityDetectionAndCob.md>
Profile Switch & Profile Percentage <./DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md>
Temp-Targets <./DailyLifeWithAaps/TempTargets.md>
Extended carbs <./DailyLifeWithAaps/ExtendedCarbs.md>
Automations <./DailyLifeWithAaps/Automations.md>
Dynamic ISF <./DailyLifeWithAaps/DynamicISF.md>
AAPS for children <./DailyLifeWithAaps/AapsForChildren.md>
Pumps and cannulas <./DailyLifeWithAaps/PumpsAndCannulas.md>
Timezone traveling & Daylight Saving Time <./DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md>

```

```{toctree}
:caption: 5) Remote AAPS features

Remote monitoring <./RemoteFeatures/RemoteMonitoring.md>
Remote control <./RemoteFeatures/RemoteControl.md>
SMS Commands <./RemoteFeatures/SMSCommands.md>
Following Only <./RemoteFeatures/FollowingOnly.md>
Android Auto <./RemoteFeatures/AndroidAuto.md>

```
```{toctree}
:caption: 6) Wear OS Smartwatches

AAPS for Wear OS <./WearOS/BuildingAapsWearOS.md>
Use the smartwatch <./WearOS/WearOsSmartwatch.md>
Remote control <./RemoteFeatures/RemoteControlWearOS.md>
Custom watchfaces reference <./ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md>
Exchange site custom watchfaces <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: 7) Maintenance of AAPS

Export/Import Settings <./Maintenance/ExportImportSettings.md>
Reviewing your data <./Maintenance/Reviewing.md>
AAPS Release Notes <./Maintenance/ReleaseNotes.md>
Documentation updates <./Maintenance/DocumentationUpdate.md>
Updating to a new version of AAPS <./Maintenance/UpdateToNewVersion.md>

```

```{toctree}
:caption: 8) Getting Help

Where can I get help with AAPS <./GettingHelp/WhereCanIGetHelp.md>
General troubleshooting <./GettingHelp/GeneralTroubleshooting.md>
Troubleshooting Android Studio <./GettingHelp/TroubleshootingAndroidStudio.md>
Accessing logfiles <./GettingHelp/AccessingLogFiles.md>
```

```{toctree}
:caption: 9) Advanced AAPS options

Full Closed Loop <./AdvancedOptions/FullClosedLoop.md>
Dev branch <./AdvancedOptions/DevBranch.md>
Autotune <./AdvancedOptions/Autotune.md>

```
```{toctree}
:caption: 10) How to support AAPS

How to help <./SupportingAaps/HowCanIHelp.md>
Editing the docs <./SupportingAaps/HowToEditTheDocs.md>
Translating the app and docs <./SupportingAaps/Translations.md>
State of translations <./SupportingAaps/StateOfTranslations.md>
Open Humans Uploader <./SupportingAaps/OpenHumans.md>

```
```{toctree}
:caption: 11) Resources

Glossary <./UsefulLinks/Glossary.md>
FAQ <./UsefulLinks/FAQ.md>
General diabetes and looping resources <./UsefulLinks/BackgroundReading.md>
Dedicated Google account for AAPS (optional)<./UsefulLinks/DedicatedGoogleAccountForAaps.md>
For Clinicians (outdated) <./UsefulLinks/ClinicianGuideToAaps.md>
```