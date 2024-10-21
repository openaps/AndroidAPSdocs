# Willkommen zur AAPS-Dokumentation

![grafik](./images/basic-outline-of-AAPS.png)

Android APS (**AAPS**) ist eine Open-Source-App für Menschen mit insulinabhängigem Diabetes. Es handelt sich dabei um ein künstliches Bauchspeicheldrüsen-System (APS), das auf Android-Smartphones läuft. **AAPS** nutzt verschiedene OpenAPS-Softwarealgorithmen, um damit genau das zu tun, was eine echte Bauchspeicheldrüse auch tut: den Glukosespiegel durch automatisierte Insulindosierung (AID) in gesunden Grenzen halten. Um **AAPS** nutzen zu können, brauchst Du **drei** kompatible Geräte: ein Android-Smartphone, eine von der FDA/CE zugelassene Insulinpumpe und einen Glukosesensor (CGM).

Diese Dokumentation erklärt, wie Du **AAPS** einrichtest und nutzt. You can navigate through the **AAPS** documentation either through the menu on the left (and the handy "**Search docs**" function), or by using the [index](#aaps-documentation-index) at the bottom of this page.

## Überblick über die AAPS-Dokumentation ("The docs")

Section 2) "Getting Started", the [Introduction](Getting-Started/Introduction.md) explains the general concept of what an artificial pancreas system (APS) is designed to do. Es umreißt den Hintergrund des Loopens im Allgemeinen, warum **AAPS** entwickelt wurde, vergleicht **AAPS** mit anderen Systemen und behandelt Sicherheitsfragen. Es gibt Vorschläge, wie Du mit Deinem Diabetes-Team über **AAPS** sprechen kannst, erklärt, warum Du die **AAPS**-App selbst erstellen musst (anstatt sie nur herunterzuladen), und gibt einen Überblick über den typischen Aufbau eines **AAPS**-Systems. Es behandelt auch die Zugänglichkeit und wer wahrscheinlich von **AAPS** profitieren wird.

[Preparing for AAPS](./Getting-Started/PreparingForAaps.md) gives more detail about safety considerations, and the phones, CGMs (Continuous Glucose Monitors) and insulin pumps which are compatible with **AAPS**. Es gibt einen Überblick über den Prozess, den Du durchlaufen wirst, und gibt eine zeitliche Einschätzung wie lange es dauern wird bist Du alle **AAPS**-Funktionalitäten nutzen kannst. Dieser Abschnitt bereitet Dich technisch darauf vor, Deine **AAPS**-Einrichtung so schnell und effizient wie möglich abzuschließen. The subsection [CGM Configuration](./Getting-Started/CompatiblesCgms.md) explains how to optimse CGM setup and what smoothing options are best.

Jetzt, da Du ein solides Grundverständnis des Prozesses hast, kannst Du damit beginnen, Deinen **AAPS**-Loop zu erstellen. Abschnitt **3) AAPS einrichten** enthält Schritt-für-Schritt Anleitungen, um dies zu tun. It covers choosing and [setting up your reporting server](./SettingUpAaps/SettingUpTheReportingServer.md) (Nightscout or Tidepool) so you can review and share your data, getting your computer ready for building the AAPS app, building the AAPS app and transferring the AAPS app to your phone. Es umfasst auch das Einrichten der **AAPS**-App mithilfe des Einrichtungsassistenten, das Verknüpfen mit Deiner CGM-App und entweder einer echten oder einer virtuellen Insulinpumpe sowie das Verknüpfen von **AAPS** mit Deinem Berichtsserver. Du wirst danach durch einen kleinschrittigen und sehr fein justierten Prozess sehr behutsam an die vollständige **AAPS**-Nutzung herangeführt. Damit soll sichergestellt werden, dass Du oder Dein Kind, sicher durch die verschiedenen Funktionen und Menü-Konfigurationen navigieren lernst, bevor Du zur folgenden Phase (auch "nächstes Ziel" bzw. "Objective" genannt) übergehst und schließlich genug Erfahrung gesammelt hast, um die weitreichensten Funktionalitäten der App nutzen zu können. Diese Objectives (Ziele) sind so aufgebaut, dass nach und nach weitere **AAPS**-Funktionen freigeschaltet werden und so am Ende vom 'Open Loop' auf 'Closed Loop' umgestellt werden kann.

Section 4) [Remote AAPS features](./RemoteFeatures/RemoteControl.md) highlights a real strength of **AAPS**. Es gibt eine Vielzahl von Möglichkeiten, Befehle remote an **AAPS** zu senden oder einfach dessen Daten zu folgen. Dies ist ebenso nützlich für Betreuende, die **AAPS** für Minderjährige verwenden möchten, als auch für Erwachsene mit Diabetes, die entweder ihre Glukosewerte (und andere Metriken) bequemer als nur auf ihrem Smartphone überwachen möchten (z. B. auf einer Smartwatch, im Auto _usw._), oder die möchten, dass auch nahestehende Personen die Daten überwachen. Dieser Abschnitt hat auch eine Anleitung zur Nutzung von Android Auto, sodass Du die Glukosewerte auch im Auto sehen kannst.

Abschnitt **5) AAPS im Alltag** behandelt wichtige **AAPS**-Funktionen, um Dir beim Umgang (und der Anpassung) von **AAPS** zu helfen. Dies beinhaltet insbesondere das Verständnis der Bildschirme, Kohlenhydrate an Bord (CoB), Sensitivität, Profilwechsel, temporäre Ziele, verzögerte Kohlenhydrate (oder eCarbs), Automatisierungen und dynamischer ISF (DynamicISF). It also covers frequent topics like how to manage different types of meals, how to deal with cannula and sensor changes, smartphone updates, daylight saving changes, and [travelling with AAPS](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) and sports. Häufig gestellte Fragen und Antworten dazu findest Du im Abschnitt zur Fehlerbehebung.


Abschnitt **6) AAPS Wartung und Pflege** behandelt, wie Du Deine Einstellungen exportieren und sichern kannst (das ist besonders wichtig, für den Fall, dass Du Dein Smartphone verlierst oder es beschädigt wird), gibt die neuesten Versionshinweise und erläutert, wie Du **AAPS** aktualisierst. In der Regel gibt es 2-3 neue AAPS-Versionen im Jahr, die ein Update der App erforderlich machen. Diese Updates sind - wie für jede Software - wichtig, da damit kleinere Fehler ausgebügelt und Verbesserung in **AAPS** verfügbar werden. Es gibt einen eigenen Abschnitt, der sich mit Fehlerbehebungen rund um den Aktualisierungsvorgang und den dazu häufig gestellten Fragen beschäftigt.

Section **7) [Getting Help](GettingHelp/WhereCanIGetHelp.md)** should help direct you to the best places to go to find general help with **AAPS**. Gerade am Anfang ist es wichtig, mit anderen so schnell wie möglich in Kontakt zu treten, Fragen zu klären und die üblichen Fallstricke zu lösen. Viele Menschen nutzen **AAPS** bereits erfolgreich, aber jeder hatte irgendwann eine Frage, die er nicht alleine lösen konnte. Das Schöne an der großen Community ist, dass die Reaktionszeiten auf Fragen in der Regel kurz (meist nur wenige Stunden) sind. Mach' Dir keine Sorgen, um Hilfe zu bitten, es gibt keine dummen Fragen! Wir ermutigen Benutzer*innen aller Erfahrungsstufen, so viele Fragen, wie sie für notwendig halten, zu stellen, um sie sicher ans Laufen zu kommen. Dieser Abschnitt enthält allgemeine Fehlerbehebungen für **AAPS** und den **AAPSClient** (eine Begleit-App) sowie die Erklärung, wie Du, wenn Du der Meinung bist, dass ein technisches **AAPS** Problem vorliegt, Deine **AAPS**-Daten (Protokolldateien) zur Prüfung an die Entwickler senden kannst.

Abschnitt **8) Nützliche AAPS-Links** dient als praktische Referenz. This includes the  [Glossary](./UsefulLinks/Glossary.md), a list of the acronyms (or short-term names) used throughout **AAPS**. Hier erfährst Du beispielsweise, wofür die Begriffe ISF oder TT stehen. Dieser Abschnitt enthält auch Links zu nützlichen Screenshots und anderen Daten.

Abschnitt 9) behandelt **Erweiterte AAPS-Optionen** wie beispielsweise mit **AAPS** den Übergang vom Hybrid-Closed-Looping (Bolusgabe für Mahlzeiten _usw._) zum vollständigen Closed-Looping (keine Bolusgabe) hinbekommst und erläutert Entwickler- und Engineering-Modi. Die meisten kommen sehr gut mit der Haupt- oder "Master"-Version von **AAPS** zurecht, ohne sich mit diesen (Entwickler-)Optionen zu befassen. Dieser Abschnitt richtet sich an Benutzende, die bereits eine gute Kontrolle haben und ihre Einstellungen weiter verbessern möchten.

In section 10) [How to support AAPS](SupportingAaps/HowToEditTheDocs.md) we provide  information so that you can support this project. Du kannst Geld oder Geräte spenden oder Dein Fachwissen einbringen. You can suggest/make changes to the documentation yourself, help with [translation of the documentation](SupportingAaps/Translations) and provide your data through the Open Humans project.

Section 11) contains archived or additional documentation, including a subsection for [clinicians](Resources/clinician-guide-to-AndroidAPS.md) who have expressed interest in open source artificial pancreas technology such as **AAPS**, or for patients who want to share such information with their clinicians, this topic is also addressed in the introduction. Weitere Referenzen und Ressourcen rund um das Thema Diabetes und Looping findest Du im Abschnitt 12).


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

(AAPS-Documentation-Index)=

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
```

```{toctree}
:caption: 3) Setting up AAPS

Setting up the reporting server <./SettingUpAaps/SettingUpTheReportingServer.md>
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
:caption: 4) Remote AAPS features

Remote monitoring <./RemoteFeatures/RemoteMonitoring.md>
Remote control <./RemoteFeatures/RemoteControl.md>
Following Only <./RemoteFeatures/FollowingOnly.md>
Android Auto <./RemoteFeatures/AndroidAuto.md>

```

```{toctree}
:caption: 5) Daily Life with APPS

AAPS Screens <./DailyLifeWithAaps/AapsScreens.md>
Key AAPS Features <./DailyLifeWithAaps/KeyAapsFeatures.md>
COB calculation <./DailyLifeWithAaps/CobCalculation.md>
Sensitivity detection <./DailyLifeWithAaps/SensitivityDetectionAndCob.md>
Profile switch <./DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md>
Temp-targets <./DailyLifeWithAaps/TempTargets.md>
Extended carbs <./DailyLifeWithAaps/ExtendedCarbs.md>
Automations <./DailyLifeWithAaps/Automations.md>
Dynamic ISF <./DailyLifeWithAaps/DynamicISF.md>
Pumps and cannulas <./DailyLifeWithAaps/PumpsAndCannulas.md>
Timezone traveling & Daylight Saving Time <./DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md>

```

```{toctree}
:caption: 6) Maintenance of AAPS

Export/Import Settings <./Maintenance/ExportImportSettings.md>
Reviewing your data
AAPS Release Notes <./Maintenance/ReleaseNotes.md>
Documentation updates <./Maintenance/DocumentationUpdate.md>
Updating to a new version of AAPS <./Maintenance/UpdateToNewVersion.md>
- Update to AAPS 2.7 <./Maintenance/Update2_7.md>
- Update to AAPS 3.0<./Maintenance/Update3_0.md>

```

```{toctree}
:caption: 7) Getting Help

Where can I get help with AAPS <./GettingHelp/WhereCanIGetHelp.md>
Troubleshooting <./GettingHelp/GeneralTroubleshooting.md>
How to report bugs/request features
Accessing logfiles <./GettingHelp/AccessingLogFiles.md>
Help! Mein AAPS-Smartphone ist defekt/gestolen oder wurde verloren
```

```{toctree}
:caption: 8) Useful AAPS Links

Glossary <./UsefulLinks/Glossary.md>
FAQ <./UsefulLinks/FAQ.md>
WearOS Smartwatch <./UsefulLinks/WearOsSmartwatch.md>

```

```{toctree}
:caption: 9) Advanced AAPS options

Full Closed Loop <./AdvancedOptions/FullClosedLoop.md>
Dev branch <./AdvancedOptions/DevBranch.md>
xDrip engineering mode <./AdvancedOptions/EnablingEngineeringModeInXdrip.md>
Autotune <./AdvancedOptions/Autotune.md>

```
```{toctree}
:caption: 10) How to support AAPS

How to help <./SupportingAaps/HowCanIHelp.md>
Editting the docs <./SupportingAaps/HowToEditTheDocs.md>
Translating the app and docs <./SupportingAaps/Translations.md>
State of translations <./SupportingAaps/StateOfTranslations.md>
Open Humans Uploader <./SupportingAaps/OpenHumans.md>

```

```{toctree}
:caption: 11) Additional/archive documentation

Dedicated Google account for AAPS (optional)<./SettingUpAaps/DedicatedGoogleAccountForAaps.md>

Careportal (discontinued) <./Usage/CPbefore26.md>

For Clinicians (outdated) <./Resources/clinician-guide-to-AndroidAPS.md>

Automation with 3rd party apps <./Usage/automationwithapp.md>

```

```{toctree}
:caption: 12) Referenzen

Diabetes und Looping <./Where-To-Go-For-Help/Background-reading.md>
Wissenschaftliche Artikel zu AAPS
```

```{toctree}
:caption: 13) Sandbox

Sandbox <./Sandbox/sandbox1.md>
Crowdin Test <./Sandbox/crowdintest.md>
Image Scaling <./Sandbox/imagescaling.md>

```
