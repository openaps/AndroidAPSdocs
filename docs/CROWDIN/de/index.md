# Willkommen zur AAPS-Dokumentation

![grafik](./images/basic-outline-of-AAPS.png)

```{admonition} Latest Release
:class: note

14/08/2025 : Version 3.3.2.1 is out. Check the [Release Notes](#latestrelease) to see what's new and get update instructions.

```

Android APS (**AAPS**) ist eine Open-Source-App für Menschen mit insulinabhängigem Diabetes. Es handelt sich dabei um ein künstliches Bauchspeicheldrüsen-System (APS), das auf Android-Smartphones läuft. **AAPS** nutzt verschiedene OpenAPS-Softwarealgorithmen, um damit genau das zu tun, was eine echte Bauchspeicheldrüse auch tut: den Glukosespiegel durch automatisierte Insulindosierung (AID) in gesunden Grenzen halten. Um **AAPS** nutzen zu können, benötigst Du **drei** kompatible Geräte: **(1)** ein Android-Smartphone, **(2)** ein CGM-System (Sensor) und **(3)** eine von der FDA/CE zugelassene Insulinpumpe. Um **(4)** **AAPS remote steuern zu können**, Daten speichern, teilen und Berichte auf einem Berichtsserver erstellen zu können, benötigst Du optional einen Cloud-Dienst und eventuell auch **(5)** eine Smartwatch.

Diese Dokumentation erklärt, wie Du **AAPS** einrichtest und nutzt. Du kannst entweder durch das Menü auf der linken Seite (und die praktische "**Suche in den Dokumenten**"-Funktion) oder durch den [Index](#index-aaps-documentation-index) am Ende dieser Seite durch die **AAPS**-Dokumentation navigieren.

## Überblick über die AAPS-Dokumentation ("The docs")

Abschnitt **2) „Erste Schritte“** - Die [Einführung](Getting-Started/Introduction.md) erläutert das allgemeine Konzept und die grundlegende Funktionsweise eines künstlichen Bauspeicheldrüsen-Systems (APS). Es umreißt den Hintergrund des Loopens im Allgemeinen, warum **AAPS** entwickelt wurde, vergleicht **AAPS** mit anderen Systemen und behandelt Sicherheitsfragen. Es gibt Vorschläge, wie Du mit Deinem Diabetes-Team über **AAPS** sprechen kannst, erklärt, warum Du die **AAPS**-App selbst erstellen musst (anstatt sie nur herunterzuladen), und gibt einen Überblick über den typischen Aufbau eines **AAPS**-Systems. Es behandelt auch die Zugänglichkeit und wer wahrscheinlich von **AAPS** profitieren wird.

[Vorbereitungen, um mit AAPS zu starten](./Getting-Started/PreparingForAaps.md) beschreibt weitere Überlegungen zur Sicherheit, den Smartphones, Sensoren (CGMs - Continuous Glucose Monitors) und Insulinpumpen, die mit **AAPS** kompatibel sind. Es gibt einen Überblick über den Prozess, den Du durchlaufen wirst, und gibt eine zeitliche Einschätzung wie lange es dauern wird bist Du alle **AAPS**-Funktionalitäten nutzen kannst. Dieser Abschnitt bereitet Dich technisch darauf vor, Deine **AAPS**-Einrichtung so schnell und effizient wie möglich abzuschließen. Der Unterabschnitt [CGM-Konfiguration](./Getting-Started/CompatiblesCgms.md) erläutert, wie die CGM-Konfiguration optimiert wird und welche Glättungsoptionen am besten sind.

Jetzt, da Du ein solides Grundverständnis des Prozesses hast, kannst Du damit beginnen, Deinen **AAPS**-Loop zu erstellen.

Abschnitt **3) AAPS einrichten** enthält Schritt-für-Schritt Anleitungen, um dies zu tun. It covers choosing and [setting up your reporting server](./SettingUpAaps/SettingUpTheReportingServer.md) (Nightscout or Tidepool) so you can review and share your data, getting ready for building the AAPS app, building the AAPS app and transferring the AAPS app to your phone. Es umfasst auch das Einrichten der **AAPS**-App mithilfe des Einrichtungsassistenten, das Verknüpfen mit Deiner CGM-App und entweder einer echten oder einer virtuellen Insulinpumpe sowie das Verknüpfen von **AAPS** mit Deinem Berichtsserver. Du wirst danach durch einen kleinschrittigen und sehr fein justierten Prozess sehr behutsam an die vollständige **AAPS**-Nutzung herangeführt. Damit soll sichergestellt werden, dass Du oder Dein Kind, sicher durch die verschiedenen Funktionen und Menü-Konfigurationen navigieren lernst, bevor Du zur folgenden Phase (auch "nächstes Ziel" bzw. "Objective" genannt) übergehst und schließlich genug Erfahrung gesammelt hast, um die weitreichensten Funktionalitäten der App nutzen zu können. Diese Objectives (Ziele) sind so aufgebaut, dass nach und nach weitere **AAPS**-Funktionen freigeschaltet werden und so am Ende vom 'Open Loop' auf 'Closed Loop' umgestellt werden kann.

Abschnitt **4) AAPS im Alltag** behandelt wichtige **AAPS**-Funktionen, um Dir beim Umgang (und der Anpassung) von **AAPS** zu helfen. Dies beinhaltet insbesondere das Verständnis der Bildschirme, Kohlenhydrate an Bord (CoB), Sensitivität, Profilwechsel, temporäre Ziele, verzögerte Kohlenhydrate (oder eCarbs), Automatisierungen und dynamischer ISF (DynamicISF). Es behandelt auch häufige Themen wie den Umgang mit verschiedenen Mahlzeitenarten den Umgang mit Kanülen- und Sensorwechseln, Smartphone-Updates, Zeitumstellungen, [Reisen mit AAPS](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) und Sport. Häufig gestellte Fragen und Antworten dazu findest Du im Abschnitt zur Fehlerbehebung.

Abschnitt **5) [Remote AAPS-Funktionen](./RemoteFeatures/RemoteControl.md)** stellen eine echte Stärke von **AAPS** dar. Es gibt eine Vielzahl von Möglichkeiten, Befehle remote an **AAPS** zu senden oder einfach dessen Daten zu folgen. Dies ist ebenso nützlich für Betreuende, die **AAPS** für Minderjährige verwenden möchten, als auch für Erwachsene mit Diabetes, die entweder ihre Glukosewerte (und andere Metriken) bequemer als nur auf ihrem Smartphone überwachen möchten (z. B. auf einer Smartwatch, im Auto _usw._), oder die möchten, dass auch nahestehende Personen die Daten überwachen. Dieser Abschnitt hat auch eine Anleitung zur Nutzung von Android Auto, sodass Du die Glukosewerte auch im Auto sehen kannst.

Abschnitt **6) Wear OS Smartwatches** gibt Informationen und beschreibt Vorgehensweise zum Umgang mit einer Android **Wear OS** Smartwatch und speziellen **AAPS**-Zifferblättern oder selbsterstellten Zifferblätter zur Remotesteuerung Deines Smartphones oder nur zur reinen Anzeige.


Abschnitt **7) AAPS Wartung und Pflege** behandelt, wie Du Deine Einstellungen exportieren und sichern kannst (das ist besonders wichtig, für den Fall, dass Du Dein Smartphone verlierst oder es beschädigt wird), gibt die neuesten Versionshinweise und erläutert, wie Du **AAPS** aktualisierst. In der Regel gibt es 2-3 neue AAPS-Versionen im Jahr, die ein Update der App erforderlich machen. Diese Updates sind - wie für jede Software - wichtig, da damit kleinere Fehler ausgebügelt und Verbesserung in **AAPS** verfügbar werden. Es gibt einen eigenen Abschnitt, der sich mit Fehlerbehebungen rund um den Aktualisierungsvorgang und den dazu häufig gestellten Fragen beschäftigt.

Abschnitt **8) [Hilfestellung bekommen](GettingHelp/WhereCanIGetHelp.md)** soll Dir die Stellen zeigen, an denen Du Hilfe zu allgemeinen Themen rund um **AAPS** erhältst. Gerade am Anfang ist es wichtig, mit anderen so schnell wie möglich in Kontakt zu treten, Fragen zu klären und die üblichen Fallstricke zu lösen. Viele Menschen nutzen **AAPS** bereits erfolgreich, aber jeder hatte irgendwann eine Frage, die er nicht alleine lösen konnte. Das Schöne an der großen Community ist, dass die Reaktionszeiten auf Fragen in der Regel kurz (meist nur wenige Stunden) sind. Mach' Dir keine Sorgen, um Hilfe zu bitten, es gibt keine dummen Fragen! Wir ermutigen Benutzer*innen aller Erfahrungsstufen, so viele Fragen, wie sie für notwendig halten, zu stellen, um sie sicher ans Laufen zu kommen. Dieser Abschnitt enthält allgemeine Fehlerbehebungen für **AAPS** und den **AAPSClient** (eine Begleit-App) sowie die Erklärung, wie Du, wenn Du der Meinung bist, dass ein technisches **AAPS** Problem vorliegt, Deine **AAPS**-Daten (Protokolldateien) zur Prüfung an die Entwickler senden kannst.

Abschnitt **9)** behandelt **Erweiterte AAPS-Optionen** wie beispielsweise mit **AAPS** den Übergang vom Hybrid-Closed-Looping (Bolusgabe für Mahlzeiten _usw._) zum vollständigen Closed-Looping (keine Bolusgabe) hinbekommst und erläutert Entwickler- und Engineering-Modi. Die meisten kommen sehr gut mit der Haupt- oder "Master"-Version von **AAPS** zurecht, ohne sich mit diesen (Entwickler-)Optionen zu befassen. Dieser Abschnitt richtet sich an Benutzende, die bereits eine gute Kontrolle haben und ihre Einstellungen weiter verbessern möchten.

Im Abschnitt **10) [Wie ich AAPS weiterbringen kann](SupportingAaps/HowToEditTheDocs.md)** erklären wir wie Du das Projekt unterstützen und weiter voranbringen kannst. Du kannst Geld oder Geräte spenden oder Dein Fachwissen einbringen. Du kannst Änderungen an der Dokumentation vorschlagen oder selber machen, Du kannst bei der [Übersetzung der Dokumentation](SupportingAaps/Translations) unterstützen und Du kannst Deine Daten über das Open Humans Projekt zur Verfügung stellen.

Im Abschnitt **11) Ressourcen** finden sich archivierte und auch zusätzliche Dokumentation, sowie ein Unterabschnitt für [Mediziner und Fachpersonal](UsefulLinks/ClinicianGuideToAaps.md), das sich für die Open-Source-Technologie der künstlichen Bauchspeicheldrüse wie **AAPS** interessiert und für Patienten und Patientinnen, die diese Informationen mit ihren Ärzt*innen und Diabetesberater*innen teilen möchten. Der Abschnitt enthält auch zusätzliche Referenzen und Ressourcen rund um das Thema Diabetes und Looping. Dazu gehört auch das  [Glossar](./UsefulLinks/Glossary.md), eine Liste der Akronyme (oder Kurzbezeichnungen), die in **AAPS** verwendet werden. Hier erfährst Du beispielsweise, wofür die Begriffe ISF oder TT stehen.


 ### Du willst mit **AAPS** loslegen? In [Einführung in APS und AAPS](Getting-Started/Introduction.md) erfährst Du mehr über **AAPS**.

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
:caption: 1) Sprache

Sprache ändern <./NavigateDoc/ChangeLanguage.md>
Version ändern <./NavigateDoc/ChangeVersion.md>
```
```{toctree}
:caption: 2) Erste Schritte

Einführung in AAPS <./Getting-Started/Introduction.md>
Vorbereitung für AAPS <./Getting-Started/PreparingForAaps.md>
Komponentenübersicht <./Getting-Started/ComponentOverview.md>
- Kompatible Pumpen <./Getting-Started/CompatiblePumps.md>
- Kompatible CGMs <./Getting-Started/CompatiblesCgms.md>
- Kompatible Smartphones <./Getting-Started/Phones.md>
- Kompatible Smartwatches <./Getting-Started/Watches.md>
```

```{toctree}
:caption: 3) Setting up AAPS

Setting up the reporting server <./SettingUpAaps/SettingUpTheReportingServer.md>
- Nightscout <./SettingUpAaps/Nightscout.md>
- Tidepool <./SettingUpAaps/Tidepool.md>
Building AAPS <./SettingUpAaps/BuildingAaps.md>
- Browser Build <./SettingUpAaps/BrowserBuild.md>
- Computer Build <./SettingUpAaps/ComputerBuild.md>
Transferring and Installing AAPS <./SettingUpAaps/TransferringAndInstallingAaps.md>
Setup Wizard <./SettingUpAaps/SetupWizard.md>
Your AAPS Profile <./SettingUpAaps/YourAapsProfile.md>
Change AAPS configuration <./SettingUpAaps/ChangeAapsConfiguration.md>
- Config Builder <./SettingUpAaps/ConfigBuilder.md>
- Preferences <./SettingUpAaps/Preferences.md>
Completing the objectives <./SettingUpAaps/CompletingTheObjectives.md>
```

```{toctree}
:caption: 4) Der Alltag mit AAPS

AAPS-Bildschirme <./DailyLifeWithAaps/AapsScreens.md>
AAPS-Funktionen <./DailyLifeWithAaps/KeyAapsFeatures.md>
COB-Berechnung <./DailyLifeWithAaps/CobCalculation.md>
Empfindlichkeitserkennung <./DailyLifeWithAaps/SensitivityDetectionAndCob.md>
Profilwechsel & prozentuale Profilanpassung <./DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md>
Temporäre Ziele <./DailyLifeWithAaps/TempTargets.md>
Verzögerte Kohlenhydrate <./DailyLifeWithAaps/ExtendedCarbs.md>
Automatisierung <./DailyLifeWithAaps/Automations.md>
Dynamischer ISF (DynISF) <./DailyLifeWithAaps/DynamicISF.md>
AAPS für Kinder <./DailyLifeWithAaps/AapsForChildren.md>
Pumpen und Kanülen <./DailyLifeWithAaps/PumpsAndCannulas.md>
Über Zeitzonen hinweg reisen & Sommerzeit-Umstellung <./DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md>

```

```{toctree}
:caption: 5) AAPS Remote-Funktionen

Remote überwachen <./RemoteFeatures/RemoteMonitoring.md>
Remote steuern <./RemoteFeatures/RemoteControl.md>
SMS-Befehle <./RemoteFeatures/SMSCommands.md>
AAPS nur folgen <./RemoteFeatures/FollowingOnly.md>
Android Auto <./RemoteFeatures/AndroidAuto.md>

```
```{toctree}
:caption: 6) Wear OS Smartwatches

AAPS für Wear OS <./WearOS/BuildingAapsWearOS.md>
Smartwatch nutzen <./WearOS/WearOsSmartwatch.md>
Remote steuern <./RemoteFeatures/RemoteControlWearOS.md>
Eigene Zifferblätter - Referenzdokument <./ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md>
Austausch-Plattform für eigene Zifferblätter <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: 7) Maintenance of AAPS

Export/Import Settings <./Maintenance/ExportImportSettings.md>
Reviewing your data <./Maintenance/Reviewing.md>
AAPS Release Notes <./Maintenance/ReleaseNotes.md>
Documentation updates <./Maintenance/DocumentationUpdate.md>
Updating to a new version of AAPS <./Maintenance/UpdateToNewVersion.md>
- Browser Update <./Maintenance/UpdateBrowserBuild.md>
- Computer Update <./Maintenance/UpdateComputerBuild.md>

```

```{toctree}
:caption: 8) Hilfe bekommen

Wo wird mir mit AAPS geholfen? <./GettingHelp/WhereCanIGetHelp.md>
Allgemeine Problembehandlung <./GettingHelp/GeneralTroubleshooting.md>
Fehlerbehebung für Android Studio <./GettingHelp/TroubleshootingAndroidStudio.md>
Logdateien erhalten <./GettingHelp/AccessingLogFiles.md>
```

```{toctree}
:caption: 9) Erweiterte AAPS-Optionen

Full Closed Loop <./AdvancedOptions/FullClosedLoop.md>
Entwicklerversion (Dev-Branch) <./AdvancedOptions/DevBranch.md>
Autotune <./AdvancedOptions/Autotune.md>

```
```{toctree}
:caption: 10) Das AAPS-Projekt unterstützen

Wie ich helfen kann <./SupportingAaps/HowCanIHelp.md>
Dokumentation verbessern <.SupportingAaps/HowToEditTheDocs.md>
Übersetzung der APP und der Dokumentation <. SupportingAaps/Translations.md>
Stand der Übersetzung <./SupportingAaps/StateOfTranslations.md>
Open Humans Uploader <./SupportingAaps/OpenHumans.md>

```
```{toctree}
:caption: 11) Ressources

Glossar <./UsefulLinks/Glossary.md>
FAQ <./UsefulLinks/FAQ.md>
Allgemeine Diabetes und Looping-Informationen <./UsefulLinks/BackgroundReading.md>
Separates Google-Konto für AAPS (optional) <./UsefulLinks/DedicatedGoogleAccountForAaps.md>
Für Mediziner und Fachpersonal (veraltet) <./UsefulLinks/ClinicianGuideToAaps.md>
```