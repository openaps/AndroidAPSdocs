# Willkommen zur AAPS-Dokumentation

![grafik](./images/basic-outline-of-AAPS.png)

```{admonition} Latest Release
:class: note

31 October 2026: Version 4.0.0 is out. Schau in die [Release Notes](#latestrelease), um zu sehen, was es Neues gibt, und führe die Schritte aus, die in der [Aktualisierungsanleitung](./Maintenance/UpdateToNewVersion.md) beschrieben sind, um entsprechend auf die neueste Version zu aktualisieren.

```

Android APS (**AAPS**) ist eine Open-Source-App für Menschen mit insulinabhängigem Diabetes. Es handelt sich dabei um ein künstliches Bauchspeicheldrüsen-System (APS), das auf Android-Smartphones läuft. **AAPS** nutzt verschiedene OpenAPS-Softwarealgorithmen, um damit genau das zu tun, was eine echte Bauchspeicheldrüse auch tut: den Glukosespiegel durch automatisierte Insulindosierung (AID) in gesunden Grenzen halten. Um **AAPS** nutzen zu können, benötigst Du **drei** kompatible Geräte: **(1)** ein Android-Smartphone, **(2)** ein CGM-System (Sensor) und **(3)** eine von der FDA/CE zugelassene Insulinpumpe. Du kannst auch einen **(4)** Cloud-Dienste hinzufügen, um **AAPS** fernsteuern zu können, Deine Daten zu teilen und sie auf einem Berichts-Server zu speichern und **(5)** eine Smartwatch.

Diese Dokumentation erklärt, wie Du **AAPS** einrichtest und nutzt. Du kannst entweder durch das Menü auf der linken Seite (und die praktische „**Suche in den Dokumenten**"-Funktion) oder durch den [Index](#index-aaps-documentation-index) am Ende dieser Seite durch die **AAPS**-Dokumentation navigieren.

## Überblick über die AAPS-Dokumentation („die Doku“)

Abschnitt **1) „Erste Schritte“** - Die [Einführung](Getting-Started/Introduction.md) erläutert das allgemeine Konzept und die grundlegende Funktionsweise eines künstlichen Bauspeicheldrüsen-Systems (APS). Sie umreißt den Hintergrund des Loopens im Allgemeinen, warum **AAPS** entwickelt wurde, vergleicht **AAPS** mit anderen Systemen und behandelt Sicherheitsfragen. Sie gibt Vorschläge, wie Du mit Deinem Diabetes-Team über **AAPS** sprechen kannst, erklärt, warum Du die **AAPS**-App selbst erstellen musst (anstatt sie nur herunterzuladen), und gibt einen Überblick über den typischen Aufbau eines **AAPS**-Systems. Sie behandelt auch die Zugänglichkeit und wer wahrscheinlich von **AAPS** profitieren wird.

[Vorbereitungen, um mit AAPS zu starten](./Getting-Started/PreparingForAaps.md) beschreibt weitere Überlegungen zur Sicherheit, den Smartphones, Sensoren (CGMs - Continuous Glucose Monitors) und Insulinpumpen, die mit **AAPS** kompatibel sind. Es gibt einen Überblick über den Prozess, den Du durchlaufen wirst, und gibt eine zeitliche Einschätzung wie lange es dauern wird bis Du alle **AAPS**-Funktionalitäten nutzen kannst. Dieser Abschnitt bereitet Dich technisch darauf vor, Deine **AAPS**-Einrichtung so schnell und effizient wie möglich abzuschließen. The subsection [Compatible CGMs](./Getting-Started/CompatiblesCgms.md) explains how to optimize your CGM setup and which smoothing options are best.

Jetzt, da Du ein solides Grundverständnis des Prozesses hast, kannst Du damit beginnen, Deinen **AAPS**-Loop zu erstellen.

Abschnitt **2) AAPS erstellen** erklärt warum Du die **AAPS**-App nicht herunterladen kannst und selbst erstellen must und führt Dich Schritt-für-Schritt durch den [Erstellprozess](./SettingUpAaps/BuildingAaps.md) (mit einem Browser, Android Studio oder über die Befehlszeile) und dann die Übertragung und Installation auf Deinem Smartphone. Es staret mit dem optionalen Schritt ein [dediziertes Google-Konto](./UsefulLinks/DedicatedGoogleAccountForAaps.md) einzurichten, in dem dann die fertige App („Builds“) und Backups gespeichert werden. Dazu gehört auch die [Android-Entwicklerverifizierung](#android-developer-verification): eine Änderung, die Google ab September 2026 einführte und die beeinflusst, wie selbst erstellte Apps installiert werden.

Abschnitt **3) Einrichten des Berichtsservers** beschreibt die Auswahl und [die Einrichtung Deines Berichtsservers](./SettingUpAaps/SettingUpTheReportingServer.md) (Nightscout oder Tidepool), damit Du Deine Daten einsehen und teilen kannst.

Abschnitt **4) [AAPS einrichten](./SettingUpAaps/SetupWizard.md)** beschreibt das Einrichten der **AAPS**-App mithilfe des Einrichtungsassistenten, das Verknüpfen mit Deiner CGM-App und entweder einer echten oder einer virtuellen Insulinpumpe, sowie das Verknüpfen von **AAPS** mit Deinem Berichtsserver. Du wirst danach durch einen kleinschrittigen Prozess sehr behutsam an die vollständige **AAPS**-Nutzung herangeführt. Damit wird sichergestellt, dass Du oder Dein Kind, sicher durch die verschiedenen Funktionen und Menü-Konfigurationen navigieren lernst, bevor Du zur folgenden Phase (auch „nächstes Ziel“ bzw. „Objective“ genannt) übergehst. Auf diese Weise sammelst Du schließlich genug Erfahrung, um dann die weitreichendsten Funktionalitäten der App nutzen zu können. Diese Objectives (Ziele) sind so aufgebaut, dass nach und nach weitere **AAPS**-Funktionen freigeschaltet werden und so am Ende vom „Open Loop“ auf „Closed Loop“ umgestellt werden kann.

Abschnitt **5) [AAPS im Alltag](./DailyLifeWithAaps/AapsScreens.md)** behandelt wichtige **AAPS**-Funktionen, um Dir beim Umgang (und der Anpassung) von **AAPS** zu helfen. Dies beinhaltet insbesondere das Verständnis der Bildschirme, Kohlenhydrate an Bord (Cob), Sensitivität/Empfindlichkeit, dynamischen Isf (DynamicISF), Profilwechsel, temporäre Ziele, verzögerte Kohlenhydrate (oder eCarbs), Automatisierungen und [das Reviewen Deiner Daten](./Maintenance/Reviewing.md) in der Browser-Historie und den Statistiken. Es behandelt auch häufige Themen wie den Umgang mit verschiedenen Mahlzeitenarten, den Umgang mit Kanülen- und Sensorwechseln, Smartphone-Updates, Zeitumstellungen, [Reisen mit AAPS](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) und Sport. Häufig gestellte Fragen und Antworten dazu findest Du im Abschnitt zur Fehlerbehebung.

Abschnitt **6) [Remote AAPS-Funktionen](./RemoteFeatures/RemoteControl.md)** stellt eine echte Stärke von **AAPS** dar. Es gibt eine Vielzahl von Möglichkeiten, Befehle remote an **AAPS** zu senden oder einfach dessen Daten zu folgen. Dies ist ebenso nützlich für Betreuende, die **AAPS** für Minderjährige verwenden möchten, als auch für Erwachsene mit Diabetes, die entweder ihre Glukosewerte (und andere Metriken) bequemer als nur auf ihrem Smartphone überwachen möchten (z. B. auf einer Smartwatch, im Auto _usw._), oder die möchten, dass auch nahestehende Personen die Daten überwachen. Dieser Abschnitt hat auch eine Anleitung zur Nutzung von Android Auto, sodass Du die Glukosewerte auch im Auto sehen kannst.

Abschnitt **7) [Wear OS Smartwatches](./WearOS/BuildingAapsWearOS.md)** gibt Informationen und beschreibt Vorgehensweisen zum Umgang mit einer Android **Wear OS** Smartwatch und speziellen **AAPS**-Zifferblättern oder selbsterstellten Zifferblättern zur Remotesteuerung Deines Smartphones oder nur zur reinen Anzeige.


Abschnitt **8) [AAPS-Wartung](./Maintenance/ExportImportSettings.md)** behandelt den Export und die Sicherung der Einstellungen (was besonders dann wichtig ist, wenn Du Dein Smartphone verlierst oder defekt wird), gibt die neuesten Versionshinweise, beschreibt, wie Du **AAPS** aktualisierst und erklärt, was passiert, wenn eine Version das Supportende erreicht. In der Regel gibt es 2-3 neue AAPS-Versionen im Jahr, die ein Update der App erforderlich machen. Diese Updates sind - wie für jede Software - wichtig, da damit kleinere Fehler ausgebügelt und Verbesserungen in **AAPS** verfügbar werden. Es gibt einen eigenen Abschnitt, der sich mit Fehlerbehebungen rund um den Aktualisierungsvorgang und den dazu häufig gestellten Fragen beschäftigt.

Abschnitt **9) [Hilfe & Fehlerbehebung](GettingHelp/WhereCanIGetHelp.md)** soll Dir die Stellen zeigen, an denen Du Hilfe zu allgemeinen Themen rund um **AAPS** findest. Das ist die zentrale Stelle an die Du gehst, wenn etwas nicht funktioniert: die [Fehlerbehebung](GettingHelp/GeneralTroubleshooting.md) sammelt, nach Thema, die Lösungen für die häufigsten Probleme und die [FAQ](UsefulLinks/FAQ.md) beantwortet häufig gestellte Fragen. Gerade am Anfang ist es wichtig, mit anderen so schnell wie möglich in Kontakt zu treten, Fragen zu klären und die üblichen Fallstricke zu lösen. Viele Menschen nutzen **AAPS** bereits erfolgreich, aber jeder hatte irgendwann eine Frage, die er nicht alleine lösen konnte. Das Schöne an der großen Community ist, dass die Reaktionszeiten auf Fragen in der Regel kurz (meist nur wenige Stunden) sind. Mach' Dir keine Sorgen, um Hilfe zu bitten, es gibt keine dummen Fragen! Wir ermutigen Benutzer*innen aller Erfahrungsstufen, so viele Fragen, wie sie für notwendig halten, zu stellen, um sie sicher ans Laufen zu kommen. Dieser Abschnitt enthält allgemeine Fehlerbehebungen für **AAPS** und den **AAPSClient** (eine Begleit-App) sowie die Erklärung, wie Du, wenn Du der Meinung bist, dass ein technisches **AAPS**-Problem vorliegt, Deine **AAPS**-Daten (Protokolldateien) zur Prüfung an die Entwickler senden kannst.

Abschnitt **10)** behandelt **[Erweiterte AAPS-Optionen](./AdvancedOptions/FullClosedLoop.md)** wie Du beispielsweise mit **AAPS** den Übergang vom Hybrid-Closed-Looping (Bolusgabe für Mahlzeiten _usw._) zum vollständigen Closed-Looping (keine Bolusgabe) hinbekommst, wie Du Dein [Profil feinjustierst](./GettingHelp/ProfileTuning.md), Du Autotune nutzt und detailliert Entwickler- und Engineering-Modi. Die meisten kommen sehr gut mit der Haupt- oder "Master"-Version von **AAPS** zurecht, ohne sich mit diesen (Entwickler-)Optionen zu befassen. Dieser Abschnitt richtet sich an Benutzende, die bereits eine gute Kontrolle haben und ihre Einstellungen weiter verbessern möchten.

In section **11) [How to support AAPS](SupportingAaps/HowCanIHelp.md)** we provide information so that you can support this project. Du kannst Geld oder Geräte spenden oder Dein Fachwissen einbringen. You can suggest/make changes to the documentation yourself, help with [translation of the documentation](SupportingAaps/Translations.md) and provide your data through the Open Humans project.

Im Abschnitt **12) Ressourcen** finden sich archivierte und auch zusätzliche Dokumentation, sowie ein Unterabschnitt für [Mediziner und Fachpersonal](UsefulLinks/ClinicianGuideToAaps.md), das sich für die Open-Source-Technologie der künstlichen Bauchspeicheldrüse wie **AAPS** interessiert und für Patienten und Patientinnen, die diese Informationen mit ihren Ärzt*innen und Diabetesberater*innen teilen möchten. Der Abschnitt enthält auch zusätzliche Referenzen und Ressourcen rund um das Thema Diabetes und Looping. Dazu gehört auch das [Glossar](./UsefulLinks/Glossary.md), eine Liste der Akronyme (oder Kurzbezeichnungen), die in **AAPS** verwendet werden. Hier erfährst Du beispielsweise, wofür die Begriffe ISF oder TT stehen.


 ### Du willst mit **AAPS** loslegen? In [Einführung in APS und AAPS](Getting-Started/Introduction.md) erfährst Du mehr über **AAPS**.

```{admonition} SAFETY NOTICE
:class: danger
Die Sicherheit von **AAPS** ist unmittelbar von den Sicherheits-Features Deiner Hardware (Smartphone, Insulinpumpe, CGM) abhängig. Nutze ausschließlich eine voll funktionsfähige FDA/CE-zugelassene Insulinpumpe und CGM (Sensor). Verwende keine defekte, veränderte oder selbstgebaute Insulinpumpe oder CGM-Empfänger. Verwende nur Originalzubehör (Setzhilfen, Kanülen und Insulinreservoire), das vom Hersteller für Deine Pumpe und Dein CGM zugelassen sind. Die Verwendung von nicht getesteten oder modifizierten Verbrauchmaterials kann zu Ungenauigkeiten und Insulindosierungsfehlern führen und stellt damit ein erhebliches Risiko für den Anwendenden dar. 

Solltest Du SGLT-2-Hemmer (Gliflozine) nehmen, kannst Du **AAPS** aufgrund der Glukosespiegel senkenden Wirkung der Gliflozine nicht nutzen. Durch den abgesenkten Glukosespiegel, riskierst Du eine diabetische Ketoazidose (DKA), da weniger Insulin abgegeben wird oder Hypoglykämien. 
```

```{admonition} Disclaimer
:class: note

- Alle hier beschriebenen Informationen und Quellcodes dienen ausschließlich Informations- und Bildungszwecken. Du nutzt [Nightscout](https://nightscout.github.io/) und **AAPS** auf eigenes Risiko. Triff keine medizinischen Entscheidungen auf Basis der Informationen oder des Codes. Nightscout erfüllt keinerlei Anforderungen des Datenschutzes im Gesundheitswesen. 
- Bei Nutzung des Quellcodes von github.com bestehen keinerlei Gewährleistungs- und Garantieansprüche. Es gibt keinen Support. Im Übrigen wird auf die Lizenz verwiesen, die im Repository abgerufen werden kann.
- Sämtliche Produkt- und Herstellernamen, Handelsmarken, Dienstleistungsmarken, Warenzeichen und eingetragene Dienstleistungsmarken sind Eigentum ihrer jeweiligen Inhaber und werden nur zu Informationszwecken genutzt und nicht für Werbung oder Marketing. Ihre Verwendung dient nur zur Information und bedeutet weder, dass AAPS zu ihnen gehört, noch dass sie unterstützt werden.

**AAPS** hat keine Verbindung mit und wird nicht unterstützt von: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/), [Medtronic](https://www.medtronic.com/), [Diaconn](https://www.diaconn.com/en/index.html), [EOFlow](http://www.eoflow.com/), [MicroTech Medical (Equil)](https://www.microtechmd.com/), [Medtrum](https://www.medtrum.com/), [Senseonik (Eversense)](https://www.senseonics.com/), [i-SENS (CareSens)](https://i-sens.com/), [POCTech](https://poctechcorp.com/en/), [Ottai](https://ottai.com/) oder [Syai](https://www.syai.com/).

```

(index-aaps-documentation-index)=

## AAPS-Dokumentationsindex

```{toctree}
:caption: Verwendung dieser Dokumentation

Sprache und Version ändern <./NavigateDoc/ChangeLanguageVersion.md>
Durchsuchen der Dokumentation <./NavigateDoc/SearchDoc.md>
Dokumentationsaktualisierungen <./Maintenance/DocumentationUpdate.md>
```
```{toctree}
:caption: 1) Erste Schritte

Einführung in AAPS <./Getting-Started/Introduction.md>
Vorbereitung für AAPS <./Getting-Started/PreparingForAaps.md>
Komponentenübersicht <./Getting-Started/ComponentOverview.md>
- Kompatible Pumpen <./Getting-Started/CompatiblePumps.md>
- Kompatible CGMs <./Getting-Started/CompatiblesCgms.md>
- Kompatible Smartphones <./Getting-Started/Phones.md>
- Kompatible Smartwatches <./Getting-Started/Watches.md>
```

```{toctree}
:caption: 2) AAPS einrichten

Dediziertes Google-Konto für AAPS (optional) <./UsefulLinks/DedicatedGoogleAccountForAaps.md>
AAPS erstellen <./SettingUpAaps/BuildingAaps.md>
- Browser-Build <./SettingUpAaps/BrowserBuild.md>
- Android Studio Build <./SettingUpAaps/ComputerBuild.md>
- CLI-Build <./SettingUpAaps/CLIBuild.md>
AAPS übertragen und installieren <./SettingUpAaps/TransferringAndInstallingAaps.md>
```
```{toctree}
:caption: 3) Einrichten des Berichtsservers

Einrichten des Berichtsservers <./SettingUpAaps/SettingUpTheReportingServer.md>
- Nightscout <./SettingUpAaps/Nightscout.md>
- Tidepool <./SettingUpAaps/Tidepool.md>
```
```{toctree}
:caption: 4) AAPS konfigurieren

Einrichtungsassistent <./SettingUpAaps/SetupWizard.md>
Dein AAPS Profil <konfigurieren. SettingUpAaps/YourAapsProfile.md>
Ändern der AAPS-Konfiguration <./SettingUpAaps/ChangeAapsConfiguration. d>
- Konfiguration (Config Builder) <./SettingUpAaps/ConfigBuilder.md>
- Einstellungen <. SettingUpAaps/Preferences.md>
Abschließen der Ziele (Obejctives) <./SettingUpAaps/CompletingTheObjectives.md>
```

```{toctree}
:caption: 5) Der Alltag mit AAPS

AAPS-Bildschirme <./DailyLifeWithAaps/AapsScreens.md>
AAPS-Funktionen <./DailyLifeWithAaps/KeyAapsFeatures.md>
COB-Berechnung <./DailyLifeWithAaps/CobCalculation.md>
Empfindlichkeitserkennung <./DailyLifeWithAaps/SensitivityDetectionAndCob.md>
Dynamischer ISF (DynISF) <./DailyLifeWithAaps/DynamicISF.md>
Profilwechsel & & prozentuale Profilanpassung <./DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md>
Temporäre Ziele <./DailyLifeWithAaps/TempTargets.md>
Verzögerte Kohlenhydrate <./DailyLifeWithAaps/ExtendedCarbs.md>
QuickWizards <./DailyLifeWithAaps/QuickWizards.md>
Szenene <./DailyLifeWithAaps/Scenes.md>
Automatisierungen <./DailyLifeWithAaps/Automations.md>
Schnellstartleiste <./DailyLifeWithAaps/QuickLaunch.md>
Startbildbildschirm-Widgets <./DailyLifeWithAaps/Widgets.md>
Lebensmittel-Datenbank <./DailyLifeWithAaps/Food.md>
Übergreifende Suche <./DailyLifeWithAaps/GlobalSearch.md>
Überprüfen Deiner Daten <./Maintenance/Reviewing.md>
AAPS für Kinden <./DailyLifeWithAaps/AapsForChildren.md>
Pumpen und Kanülen <./DailyLifeWithAaps/PumpsAndCannulas.md>
Über Zeitzonen hinweg reisen & Sommerzeit-Umstellung <./DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md>

```

```{toctree}
:caption: 6) AAPS Remote-Funktionen

Remote überwachen <./RemoteFeatures/RemoteMonitoring.md>
AAPS nur folgen <./RemoteFeatures/FollowingOnly.md>
Android Auto <./RemoteFeatures/AndroidAuto.md>
Remote steuern <./RemoteFeatures/RemoteControl.md>
Die AAPSClient-App <./RemoteFeatures/AapsClient.md>
Master ↔ Client Steuerung <./RemoteFeatures/ClientMasterControl.md>
SMS-Befehle <./RemoteFeatures/SMSCommands.md>

```
```{toctree}
:caption: 7) Wear OS Smartwatches

AAPS für Wear OS <./WearOS/BuildingAapsWearOS.md>
Smartwatch nutzen <./WearOS/WearOsSmartwatch.md>
Remote steuern <./RemoteFeatures/RemoteControlWearOS.md>
Eigene Zifferblätter - Referenzdokument <./ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md>
Austausch-Plattform für eigene Zifferblätter <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: 8) AAPS pflegen

Export/Import der Einstellungen <./Maintenance/ExportImportSettings.md>
AAPS Release Notes <./Maintenance/ReleaseNotes.md>
Änderungen mit AAPS v4 <./Maintenance/V4Changes.md>
Update auf eine neue AAPS-Version <./Maintenance/UpdateToNewVersion.md>
- Browser-Update (Fork, AAPS-CI) <./Maintenance/UpdateBrowserBuild.md>
- Android Studio-Update <./Maintenance/UpdateComputerBuild.md>
Supportende <./Maintenance/EndOfLife.md>

```

```{toctree}
:caption: 9) Hilfe & Fehlerbehebung

Wo bekomme ich Hilfe zu AAPS <./GettingHelp/WhereCanIGetHelp bekommen. d>
Fehlerbehebung (beginne hier) <./GettingHelp/GeneralFehlerbehebung. d>
- Bluetooth-Fehlerbehebung <./GettingHelp/BluetoothTroubleshooting.md>
- NSClient-Fehlerbehebung <./GettingHelp/TroubleshootingNsClient. d>
- Android Studio-Fehlerbehebung <./GettingHelp/TroubleshootingAndroidStudio.md>
- Browser Build-Fehlerbehebung <./GettingHelp/BrowserBuildTroubleshooting. d>
- AAPS neu installieren (neuer Keystore) <./GettingHelp/ReinstallAaps.md>
- Zugriff auf Logdateien <. GettingHelp/AccessingLogFiles.md>
FAQ <./UsefulLinks/FAQ.md>
```

```{toctree}
:caption: 10) Erweiterte AAPS-Optionen

Full Closed Loop <./AdvancedOptions/FullClosedLoop.md>
Profil-Feinjustierung (Anleitung) <./GettingHelp/ProfileTuning.md>
Autotune <./AdvancedOptions/Autotune.md>
Insulinkonzentration <./AdvancedOptions/InsulinConcentration.md>
Dev-Branch <./AdvancedOptions/DevBranch.md>
Browser-Build: Einen Commit gezielt übernehmen <./AdvancedOptions/BrowserBuildCherryPick.md>

```
```{toctree}
:caption: 11) Das AAPS-Projekt unterstützen

Wie ich helfen kann <./SupportingAaps/HowCanIHelp.md>
Dokumentation verbessern <./SupportingAaps/HowToEditTheDocs.md>
Übersetzung der App und der Dokumentation <./SupportingAaps/Translations.md>
Stand der Übersetzung <./SupportingAaps/StateOfTranslations.md>
Open Humans Uploader <./SupportingAaps/OpenHumans.md>

```
```{toctree}
:caption: 12) Resources

Glossar <./UsefulLinks/Glossary.md>
Allgemeine Diabetes- und Looping-Informationen <./UsefulLinks/BackgroundReading.md>
Für Mediziner und Fachpersonal <./UsefulLinks/ClinicianGuideToAaps.md>
```
