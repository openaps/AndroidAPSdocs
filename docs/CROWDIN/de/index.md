# Willkommen zur AAPS-Dokumentation

![grafik](./images/basic-outline-of-AAPS.png)

Android APS (**AAPS**) ist eine Open-Source-App für Menschen mit insulinabhängigem Diabetes. Es handelt sich dabei um ein künstliches Bauchspeicheldrüsen-System (APS), das auf Android-Smartphones läuft. **AAPS** nutzt verschiedene OpenAPS-Softwarealgorithmen, um damit genau das zu tun, was eine echte Bauchspeicheldrüse auch tut: den Glukosespiegel durch automatisierte Insulindosierung (AID) in gesunden Grenzen halten. Um **AAPS** nutzen zu können, brauchst Du **drei** kompatible Geräte: ein Android-Smartphone, eine von der FDA/CE zugelassene Insulinpumpe und einen Glukosesensor (CGM).

Diese Dokumentation erklärt, wie Du **AAPS** einrichtest und nutzt. Du kannst entweder durch das Menü auf der linken Seite (und die praktische "**Suche in den Dokumenten**"-Funktion) oder durch den [Index](Index-of-the-AAPS-Documentation.md) am Ende dieser Seite durch die **AAPS**-Dokumentation navigieren.

## Überblick über die AAPS-Dokumentation ("The docs")

Abschnitt 2) "Erste Schritte", die [Einführung](introduction.md) erläutert das allgemeine Konzept und die grundlegende Funktionsweise eines künstlichen Bauspeicheldrüsen-Systems (APS). Es umreißt den Hintergrund des Loopens im Allgemeinen, warum **AAPS** entwickelt wurde, vergleicht **AAPS** mit anderen Systemen und behandelt Sicherheitsfragen. Es gibt Vorschläge, wie Du mit Deinem Diabetes-Team über **AAPS** sprechen kannst, erklärt, warum Du die **AAPS**-App selbst erstellen musst (anstatt sie nur herunterzuladen), und gibt einen Überblick über den typischen Aufbau eines **AAPS**-Systems. Es behandelt auch die Zugänglichkeit und wer wahrscheinlich von **AAPS** profitieren wird.

[Vorbereitungen, um mit AAPS zu starten](preparing.md) beschreibt weitere Überlegungen zur Sicherheit, den Smartphones, Sensoren (CGMs - Continuous Glucose Monitors) und Insulinpumpen, die mit **AAPS** kompatibel sind. Es gibt einen Überblick über den Prozess, den Du durchlaufen wirst, und gibt eine zeitliche Einschätzung wie lange es dauern wird bist Du alle **AAPS**-Funktionalitäten nutzen kannst. Dieser Abschnitt bereitet Dich technisch darauf vor, Deine **AAPS**-Einrichtung so schnell und effizient wie möglich abzuschließen. Der Unterabschnitt [CGM-Konfiguration](Configuration/BG-Source.md) erläutert, wie die CGM-Konfiguration optimiert wird und welche Glättungsoptionen am besten sind.

Jetzt, da Du ein solides Grundverständnis des Prozesses hast, kannst Du damit beginnen, Deinen **AAPS**-Loop zu erstellen. Abschnitt **3) AAPS einrichten** enthält Schritt-für-Schritt Anleitungen, um dies zu tun. Es beschreibt die Auswahl und [Einrichtung Deines Servers für Berichte](setting-up-the-reporting-server.md) (Nightscout oder Tidepool), damit Du Deine relevanten Daten auswerten und teilen kannst, die Vorbereitung Deines Computers für die Erstellung, das eigentliche Erstellen (sog. build) der AAPS-App und die Übertragung der AAPS-App auf Dein Smartphone. Es umfasst auch das Einrichten der **AAPS**-App mithilfe des Einrichtungsassistenten, das Verknüpfen mit Deiner CGM-App und entweder einer echten oder einer virtuellen Insulinpumpe sowie das Verknüpfen von **AAPS** mit Deinem Berichtsserver. Du wirst danach durch einen kleinschrittigen und sehr fein justierten Prozess sehr behutsam an die vollständige **AAPS**-Nutzung herangeführt. Damit soll sichergestellt werden, dass Du oder Dein Kind, sicher durch die verschiedenen Funktionen und Menü-Konfigurationen navigieren lernst, bevor Du zur folgenden Phase (auch "nächstes Ziel" bzw. "Objective" genannt) übergehst und schließlich genug Erfahrung gesammelt hast, um die weitreichensten Funktionalitäten der App nutzen zu können. Diese Objectives (Ziele) sind so aufgebaut, dass nach und nach weitere **AAPS**-Funktionen freigeschaltet werden und so am Ende vom 'Open Loop' auf 'Closed Loop' umgestellt werden kann.

Abschnitt 4) [Remote AAPS-Funktionen](remote-control.md) hebt eine echte **AAPS** hervor. Es gibt eine Vielzahl von Möglichkeiten, Befehle remote an **AAPS** zu senden oder einfach dessen Daten zu folgen. Dies ist ebenso nützlich für Betreuende, die **AAPS** für Minderjährige verwenden möchten, als auch für Erwachsene mit Diabetes, die entweder ihre Glukosewerte (und andere Metriken) bequemer als nur auf ihrem Smartphone überwachen möchten (z. B. auf einer Smartwatch, im Auto _usw._), oder die möchten, dass auch nahestehende Personen die Daten überwachen. Dieser Abschnitt hat auch eine Anleitung zur Nutzung von Android Auto, sodass Du die Glukosewerte auch im Auto sehen kannst.

Abschnitt **5) AAPS im Alltag** behandelt wichtige **AAPS**-Funktionen, um Dir beim Umgang (und der Anpassung) von **AAPS** zu helfen. Dies beinhaltet insbesondere das Verständnis der Bildschirme, Kohlenhydrate an Bord (CoB), Sensitivität, Profilwechsel, temporäre Ziele, verzögerte Kohlenhydrate (oder eCarbs), Automatisierungen und dynamischer ISF (DynamicISF). Es behandelt auch häufige Themen wie den Umgang mit verschiedenen Mahlzeitenarten den Umgang mit Kanülen- und Sensorwechseln, Smartphone-Updates, Zeitumstellungen, [Reisen mit AAPS](Usage/Timezone-traveling.md) und Sport. Häufig gestellte Fragen und Antworten dazu findest Du im Abschnitt zur Fehlerbehebung.


Abschnitt **6) AAPS Wartung und Pflege** behandelt, wie Du Deine Einstellungen exportieren und sichern kannst (das ist besonders wichtig, für den Fall, dass Du Dein Smartphone verlierst oder es beschädigt wird), gibt die neuesten Versionshinweise und erläutert, wie Du **AAPS** aktualisierst. In der Regel gibt es 2-3 neue AAPS-Versionen im Jahr, die ein Update der App erforderlich machen. Diese Updates sind - wie für jede Software - wichtig, da damit kleinere Fehler ausgebügelt und Verbesserung in **AAPS** verfügbar werden. Es gibt einen eigenen Abschnitt, der sich mit Fehlerbehebungen rund um den Aktualisierungsvorgang und den dazu häufig gestellten Fragen beschäftigt.

Abschnitt **7) [Hilfestellung bekommen](Where-To-Go-For-Help/Connect-with-other-users.html)** soll Dir die Stellen zeigen, an denen Du Hilfe zu allgemeinen Themen rund um **AAPS** erhältst. Gerade am Anfang ist es wichtig, mit Anderen so schnell wie möglich in Kontakt zu treten, Fragen zu klären und die üblichen Fallstricke zu lösen. Viele Menschen nutzen **AAPS** bereits erfolgreich, aber jeder hatte irgendwann eine Frage, die er nicht alleine lösen konnte. Das Schöne an der großen Community ist, dass die Reaktionszeiten auf Fragen in der Regel kurz (meist nur wenige Stunden) sind. Mach' Dir keine Sorgen, um Hilfe zu bitten, es gibt keine dummen Fragen! Wir ermutigen Benutzer*innen aller Erfahrungsstufen, so viele Fragen, wie sie für notwendig halten, zu stellen, um sie sicher ans Laufen zu kommen. Dieser Abschnitt enthält allgemeine Fehlerbehebungen für **AAPS** und den **AAPSClient** (eine Begleit-App) sowie die Erklärung, wie Du, wenn Du der Meinung bist, dass ein technisches **AAPS** Problem vorliegt, Deine **AAPS**-Daten (Protokolldateien) zur Prüfung an die Entwickler senden kannst.

Abschnitt **8) Nützliche AAPS-Links** dient als praktische Referenz. Dazu gehört auch das  [Glossar](Getting-Started/Glossary.md), eine Liste der Akronyme (oder Kurzbezeichnungen), die in **AAPS** verwendet werden. Hier erfährst Du beispielsweise, wofür die Begriffe ISF oder TT stehen. Dieser Abschnitt enthält auch Links zu nützlichen Screenshots und anderen Daten.

Abschnitt 9) behandelt **Erweiterte AAPS-Optionen** wie beispielsweise mit **AAPS** den Übergang vom Hybrid-Closed-Looping (Bolusgabe für Mahlzeiten _usw._) zum vollständigen Closed-Looping (keine Bolusgabe) hinbekommst und erläutert Entwickler- und Engineering-Modi. Die Meisten kommen sehr gut mit der Haupt- oder "Master"-Version von **AAPS** zurecht, ohne sich mit diesen (Entwickler-)Optionen zu befassen. Dieser Abschnitt richtet sich an Benutzende, die bereits eine gute Kontrolle haben und ihre Einstellungen weiter verbessern möchten.

Im Abschnitt 10) [Wie ich AAPS weiterbringen kann](make-a-PR.md) erklären wir wie Du das Projekt unterstützen und weiter voranbringen kannst. Du kannst Geld oder Geräte spenden oder Dein Fachwissen einbringen. Du kannst Änderungen an der Dokumentation vorschlagen oder selber machen, Du kannst bei der [Übersetzung der Dokumentation](translations.md) unterstützen und Du kannst Deine Daten über das Open Humans Projekt zur Verfügung stellen.

Im Abschnitt 11 finden sich archivierte und auch zusätzliche Dokumentation, sowie einen Unterabschnitt für [Klinikpersonal](Resources/clinician-guide-to-AAPS.md), das sich für die Open-Source-Technologie der künstlichen Bauchspeicheldrüse wie **AAPS** interessiert und für Patient*innen, die diese Informationen mit ihren Ärzt*innen und Diabetesberater*innen teilen möchten. Weitere Referenzen und Ressourcen rund um das Thema Diabetes und Looping findest Du im Abschnitt 12.


 ### Du willst mit **AAPS** loslegen? In [Einführung in APS und AAPS](introduction.md) erfährst Du mehr über **AAPS**.

```{admonition} SAFETY NOTICE
:class: danger
The safety of **AAPS** relies on the safety features of your hardware (phone, pump, CGM). Only use a fully functioning FDA/CE approved insulin pump and CGM. Do not use broken, modified or self-built insulin pumps or CGM receivers. Only use original consumable supplies (inserters, cannulas and insulin reservoirs) approved by the manufacturer for use with your pump and CGM. Using untested or modified supplies can cause inaccuracy and insulin dosing errors, resulting in significant risk to the user. 

Do not use **AAPS** if you take SGLT-2 inhibitors (gliflozins), as they lower blood sugar levels. You increase the risk diabetic ketoacidosis (DKA) due to reduced insulin delivery and hypoglycemia due to lowered blood sugar levels. 
```

```{admonition} Disclaimer
:class: note

- All information and code described here is for informational and educational purposes only. Use [Nightscout](https://nightscout.github.io/) and **AAPS** at your own risk, and do not use the information or code to make medical decisions. Nightscout erfüllt keinerlei Anforderungen des Datenschutzes im Gesundheitswesen. 
- Use of code from github.com is without warranty or formal support of any kind. Im Übrigen wird auf die Lizenz verwiesen, die im Repository abgerufen werden kann.
- All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. Ihre Verwendung dient nur zur Information und bedeutet weder, dass AAPS zu ihnen gehört, noch dass sie unterstützt werden.

**AAPS** has no association with, and is not endorsed by: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/) or [Medtronic](https://www.medtronic.com/).

```

(AAPS-Documentation-Index)=

## AAPS Dokumenten-Index

```{toctree}
:caption: 1) Sprache anpassen

Sprache anpassen <./changelanguage.md>
```
```{toctree}
:caption: 2) Erste Schritte

Einführung in AAPS <./introduction.md>
Vorbereitungen, um mit AAPS zu starten <preparing.md>
Kompatible Pumpen <./Getting-Started/Pump-Choices.md>
Kompatible Sensoren (CGMs) <./Configuration/BG-Source.md>
Kompatible Smartphones   <./Hardware/Phoneconfig.md>
```

```{toctree}
:caption: 3) Setting up AAPS

Setting up the reporting server <./Installing-AndroidAPS/setting-up-the-reporting-server.md>
Building AAPS <./Installing-AndroidAPS/building-AAPS.md>
Transferring and Installing AAPS <./Installing-AndroidAPS/Transferring-and-installing-AAPS.md>
Setup Wizard<./Installing-AndroidAPS/setup-wizard.md>
Change AAPS configuration <./Installing-AndroidAPS/change-configuration.md>
- Config Builder <./Configuration/Config-Builder.md>
- Preferences <./Configuration/Preferences.md>
Completing the objectives <./Usage/completing-the-objectives.md>
```

```{toctree}
:caption: 4) Remote AAPS-Funktionen

Remote steuern <remote-control.md>
AAPS folgen <following-only.md>
Android Auto <./Usage/Android-auto.md>

```

```{toctree}
:caption: 5) AAPS im Alltag

AAPS Bildschirme <./Getting-Started/Screenshots.md>
AAPS Schlüsselfunktionen <./Usage/Open-APS-features.md>
Berechnung der aktiven Kohlenhydrate <./Usage/COB-calculation.md>
Empfindlichkeitserkennung <./Configuration/Sensitivity-detection-and-COB.md>
Profilwechsel <./Usage/Profiles.md>
Temporäre Ziele <./Usage/temptarget.md>
Verzögerte Kohlenhydrate <./Usage/Extended-Carbs.md>
Automatisierungen <./Usage/Automation.md>
Dynamischer ISF <./Usage/DynamicISF.md>
Mahlzeiten-Management
Insulinpumpen und Kanülen <./5-DailyLifewithAAPS/DailyLife-PUMPS.md>
Sensoren
Smartphones
Zeitumstellungen
Mit AAPS reisen
Zeitzonenwechsel mit Insulinpumpen <./Usage/Timezone-traveling.md>

```

```{toctree}
:caption: 6) AAPS Wartung und Pflege

Sichern der Einstellungen
Export/Import der Einstellungen <./Usage/ExportImportSettings.md>
Deine Daten prüfen
Versionshinweise <./Installing-AndroidAPS/Releasenotes.md>
AAPS auf eine neue Version aktualisieren <./Installing-AndroidAPS/Update-to-new-version.md>


```

```{toctree}
:caption: 7) Hilfestellung bekommen

Wo kann ich Hilfe mit AAPS bekommen <./Where-To-Go-For-Help/Connect-with-other-users.md>
Allgemeine Fehlerbehebung <./Usage/troubleshooting.md>
Fehlerbehebung AAPSClient <./Usage/Troubleshooting-NSClient.md>
Wie melde ich Fehler oder schlage Funktionen vor?
Auf Protokolldateien zugreifen <./Usage/Accessing-logfiles.md>
Hilfe! Mein AAPS-Smartphone ist defekt/gestolen oder wurde verloren
```

```{toctree}
:caption: 8) Nützliche AAPS-Links

Glossar <./Getting-Started/Glossary.md>
AAPS Bildschirme <./Getting-Started/Screenshots.md>
Dein AAPS-Profil 
Kompatible Insulinpumpen <./Getting-Started/Pump-Choices.md>
Accu-Chek Combo Tipps für den grundlegenden Umgang <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md>
Kompatible Sensoren (CGMs) <./Configuration/BG-Source.md>
Kompatible Smartphones <./Hardware/Phoneconfig.md>
Wear AAPS auf einer Smartwatch nutzen <./Configuration/Watchfaces.md>
AAPS Watchfaces anpassen <./Usage/Custom_Watchface_Reference.md>
xDrip+ Einstellungen <./Configuration/xdrip.md>
Autotune <./Usage/autotune.md&gt

```

```{toctree}
:caption: 9) Erweiterte AAPS-Optionen

Vollständiger Closed-Loop <./Usage/FullClosedLoop.md>
Entwicklerversionen <./Installing-AndroidAPS/Dev_branch.md>
xDrip-Engineering-Modus <./Usage/Enabling-Engineering-Mode-in-xDrip.md>

```
```{toctree}
:caption: 10) Wie ich AAPS weiterbringen kann

Wie ich helfen kann <./Getting-Started/How-can-I-help.md>

Verbessern der Dokumentation <./make-a-PR.md>

Übersetzen der App und der Dokumentation <./translations.md>

Übersetzungsstatus <./Administration/stateTranslations.md>

Dokumentenhistorie & changes <./Getting-Started/WikiUpdate.md>

Open Humans Uploader <./Configuration/OpenHumans.md>

```

```{toctree}
:caption: 11) Weitere und archivierte Dokumentation

Eigenes Google-Konto für AAPS nutzen (optional)<./Installing-AndroidAPS/Dedicated-Google-account-for-AAPS.md>

Careportal (eingestellt) <./Usage/CPbefore26.md>

Für Klinikpersonal (veraltet) <./Resources/clinician-guide-to-AndroidAPS.md>

Automatisierung mit Drittanbieter Apps <./Usage/automationwithapp.md>

Prüfungen nach dem Update auf AAPS 3.0<./Installing-AndroidAPS/update3_0.md>

Prüfungen nach dem Update auf AAPS 2.7 <./Installing-AndroidAPS/update2_7.md>

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