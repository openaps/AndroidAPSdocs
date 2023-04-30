# Willkommen zur AAPS-Dokumentation

![Grafik](images/modules-female.png)

AAPS ist eine Open-Source-App für Menschen, die mit Insulinabhängigen Diabetes leben, die als künstliches Pankreassystem (APS) auf Google Android Smartphones fungiert. Hauptkomponenten sind verschiedene OpenAPS-Softwarealgorithmen, die genau das tun sollen, was eine gesunde Bauchspeicheldrüse auch tut: den Blutzuckerspiegel durch automatisierte Insulindosierung (AID) in gesunden Grenzen halten.  Zusätzlich werden mindestens eine unterstützte Insulinpumpe mit einer CE-Kennzeichnung und ein CGM/FGM benötigt.

Die App nutzt *keine* selbstlernende künstliche Intelligenz. Stattdessen basieren die Berechnungen von AndroidAPS auf den individuellen Therapiefaktoren und Kohlenhydratmengen, die der Benutzer manuell in sein Behandlungsprofil eingibt. Diese Eingaben werden aber aus Sicherheitsgründen vom System verifiziert.

Die App wird nicht in Google Play angeboten - du musst sie aus rechtlichen Gründen selbst aus dem Quellcode erstellen.

```{admonition} Ask for help - Writing Docs
:class: note

Bitte scheuen Sie sich nicht, wir brauchen dringend Unterstützung bei der Erstellung der Dokumentation.

Ein Pull-Request zum Bearbeiten der Dokumentation ist relativ einfach zu erstellen. Du kannst nichts zerstören. Es gibt Freigabe-Verfahren.

Ein 3-minütiges Video, welches erklärt, wie man die Dokumentation per PR bearbeitet, ist verfügbar [here](https://www.youtube.com/watch?v=Vo4L6YxWak).

```

## Wie kann ich die Dokumentation lesen?

Wir haben diesen Abschnitt der Dokumentation speziell für diejenigen zur Verfügung gestellt, die neu im Konzept der Do-It-Yourself-APS (Artificial-Pankreas-Systems) sind, um am besten zu zeigen, wie man sich mit den Informationen, die wir für die wichtigsten halten, vertraut machen kann. Insbesondere was das Verständnis der Gründe für die "Grenzen" betrifft, die beim ersten Start deiner AAPS-Reise festgelegt wurden. Diese Sicherheitsbeschränkungen wurden über viele Jahre hinweg durch Beobachtungen der unbeabsichtigten Fehler entwickelt, die neue Benutzer am ehesten beim Bauen und Einrichten machen, und dann erfolgreich Loopen mit AAPS - da diese Fehler meist auftreten, einfach weil der Benutzer so begeistert war, mit dem System loszulegen, dass er vergessen hat, sich die Zeit zu nehmen, die notwendig ist, um die Informationen innerhalb dieser Dokumentation gründlich zu verstehen. Das haben wir alle selbst erlebt!

Sicherlich ist der Ansatz, "lies einfach alles in der Dokumentation" naheliegend und ist sicherlich nicht falsch. Allerdings ist es nicht ungewöhnlich, dass Neuankömmlinge schnell überwältigt werden von der Fülle und Vielfalt neuer Informationen, von denen man erwartet, dass sie alles auf einmal verstehen! Die nächsten Unterabschnitte sollen also die wichtigsten Grundlagen des Wissens schaffen, die notwendig sind, um das eigene Setup mit so wenigen Fehlern wie möglich durchzuführen. Neue Benutzer können auf diese Anleitung zurückverwiesen werden, wenn sie in Aspekte des Systems laufen, mit denen sie noch nicht vertraut sind; und sich daran zu erinnern, wohin man innerhalb der Dokumentation gehen sollte, um genauere Informationen zu finden, wenn nötig. Es ist auch wichtig, die Fähigkeiten und Anforderungen von AAPS vorab zu verstehen, da es manchmal enttäuschend sein kann, in der Mitte der Lektüre der Dokumentation zu entdecken, dass bestimmte notwendige Werkzeuge derzeit nicht für den Einsatz verfügbar sind (Z.B. Verfügbarkeiten von Insulinpumpen oder CGMs in einigen Ländern vs. andere Länder usw.) oder bietet einfach weniger oder andere Funktionalitäten als ursprünglich angenommen. Schließlich ist es wichtig zu verstehen, dass viele Aspekte in dieser Dokumentation erst dann relevant werden, wenn Du AAPS tatsächlich nutzt. Genauso wie es fast unmöglich, einen Sport nur durch das Lesen der Regeln zu lernen, ist der beste Weg es in mehreren Schritten zu erlernen. Am Anfang steht das Lernen der Grundlagen (die Regeln für den sicheren Betrieb von AAPS), und danach ist es wichtig während Du durch die Schritte des Loopens in AAPS navigierst, sich die Zeit zu nehmen zu lernen, wie diese Regeln am besten anzuwenden sind.

Der [Erste Schritte](Getting-Started/Safety-first.md) Unterabschnitt ist eine Pflichtlektüre, damit das Grundkonzept, wie ein künstliches Bauchspeicheldrüsensystem funktioniert, verstanden werden kann; für AAPS-Nutzer ist dies besonders wichtig.

Der Abschnitt [Was brauche ich?](Module/module.md) spezifiziert die CGMs (Continuous Glucose Monitors) und Insulinpumpen, die für AAPS verfügbar sind. Um AAPS richtig erstellen zu können und damit AAPS gleich von Anfang an in Deinen Alltagssituationen helfen kann, ist es wichtig die Inhalte dieses Abschnitts zu verstehen.

Im Abschnitt [Ich stecke fest, was kann ich tun?](Where-To-Go-For-Help/Connect-with-other-users.html) findest Du Tipps wo Du, je nach Erfahrungsschatz, Unterstützung für AAPS finden kannst. Gerade am Anfang ist es wichtig, mit Anderen in Kontakt zu kommen, Fragen zu klären und die üblichen Fallstricke zu lösen, um sich nicht im Stich gelassen zu fühlen. Die Erfahrung hat gezeigt, dass, auch wenn viele Menschen heute AAPS routiniert nutzen, jeder irgendwann eine Frage hatte, die er nicht alleine lösen konnte. Das Schöne ist jedoch, dass aufgrund der inzwischen großen Community, die Antwortzeiten auf Fragen in der Regel kurz sind (meist nur wenige Stunden). Mach' Dir keine Sorgen, um Hilfe zu bitten. Es gibt keine dummen Fragen! Wir ermutigen Benutzer*innen aller Erfahrungsstufen, so viele Fragen wie sie für notwendig halten zu stellen, um sie sicher ans Laufen zu kommen. Probiere es einfach aus.

Im [Glossar](Getting-Started/Glossary.md) haben wir eine Liste der in AAPS verwendeten Abkürzungen (bzw. Kurzbezeichnungen) zusammengetragen. Dort findest Du z.B. eine Beschreibung der Abkürzungen ISF oder TT.

Eltern, die AAPS für ihre Kinder erstellen wollen, legen wir den Abschnitt [AAPS für Kinder](Children/Children.md) besonders ans Herz. Dort findest Du die Informationen, die Dir noch besser ermöglichen die Besonderheiten zur Steuerung der Kinder-AAPS App aus der Ferne und die stärkeren Sicherheitsmechanismen des Kinderprofils im Vergleich zum Erwachsenenprofil, kennenzulernen. Du musst in der Lage sein, Dein Kind zu unterstützen und alle aktuellen Konzepte verstehen, die AAPS anbietet, um damit erfolgreich loopen zu können.

Nun, da Du ein gutes Verständnis der Konzepte, die AAPS verwendet, hast, Du weißt wo Du die Werkzeuge zum Aufbau Deines APS findest und wo Du im Notfall Hilfe bekommen kannst, ist der richtige Zeitpunkt, um mit dem Bau der App zu beginnen! Der Abschnitt [Wie installiere ich AAPS?](Installing-AAPS/Building-APK.md) beschreibt das im Detail. Da die Anforderungen zur Installation sehr anders von den Anforderungen anderer Installationen, die Du vielleicht in der Vergangenheit gemacht hast, sind, empfehlen wir Dir, beim ersten Erstellen der App den Schritt-für-Schritt Anweisungen strikt zu folgen. Das wird Dir helfen ein Gefühl dafür zu bekommen, wie ein reibungsloser Bau der App aussehen soll. Bitte gehe langsam und genau durch die Schritte. Wenn Du später eine neue Version zusammenstellst, wird es in der Regel sehr schnell und einfach von der Hand gehen. Auf diese Weise verbesserst Du Deine Chance mögliche Fehler im Erstellungsprozess sehr früh zu bemerken. Es ist wichtig, dass Du die keystore-Datei (.jks Datei zum Signieren der App) an einem sicheren Ort speicherst und Dir das zugehörige Passwort gut merkst. Du wirst beim Zusammenstellen einer neuer Version der App danch gefragt werden. Diese Datei stellt sicher, dass alle wichtigen Informationen aus der bestehenden App in die neue Version übertragen werden und der 'Neubau' der App reibungsloser klappen wird. In der Regel gibt es 2-3 neue AAPS-Versionen im Jahr, die ein Update der App erforderlich machen. Die Anzahl der Updates basiert auf den Erfahrungen der letzten Jahre,  kann sich in der Zukunft aber anpassen. Uns ist wichtig, dass Du trotzdem eine ungefähre Vorstellung vom zu erwartenden Update-Zyklus bekommst. Wenn Du später routinierter im Erstellen neuer AAPS-Version sein wirst, wird der Erstellprozess ca. 15-30 Minuten benötigen. Da die Erstellschritte von Vielen als nicht intuitiv wahrgenommen werden, solltest Du am Anfang davon ausgehen, dass Du durch eine steile Lernkurve gehen wirst. Es kann also ganz normal sein, wenn Du, trotz Hilfe der Community, einen halben oder ganzen Tag zum Erstellen einer neuen Version benötigst. Wenn Du merkst, dass Du zunehmend frustrierter wirst, mache eine Pause, drehe die eine oder andere Runde um den Block und häufig hilft das schon, das Problem noch einmal mit freiem Kopf anzugehen. Wir haben auch eine Liste von Fragen und Antworten im FAQ-Bereich zu den meisten typischen Fehlern zusammengestellt, die wahrscheinlich bei den ersten Updates auftreten werden. Diese FAQs sind auch im Abschnitt "Wie installiere ich AAPS?" mit Zusatzinformationen im Unterabschnitt "Fehlerbehebung" enthalten.

Der Abschnitt [Komponenten-Setup](Configuration/BG-Source.md) erklärt, wie Du die verschiedenen Komponenten richtig in AAPS integrierst. Er beschreibt auch, wie Du diese für ein reibungsloses Zusammenspiel am Besten konfigurierst. Alle Komponenten sind in den einzelnen Abschnitten aufgeführt: CGM/FGM, xDrip Einstellungen, Pumpenwahl, Telefonwahl, Nightscout Setup und Smartwatches. Es ist besonders wichtig die Sensorwerte (Glukosewerte) und die Steuerung der Insulinpumpe zu verstehen. [Konfiguration](Configuration/BG-Source.md) zeigt die für AAPS besten Insulinpumpen-Konfigurationen.

Der Abschnitt zur [AAPS Nutzung](Getting-Started/Screenshots.md), führt Dich sehr behutsam an die vollständige AAPS-Nutzung heran. Dies geschieht über einen vorsichtigen, kleinschrittigen und sehr fein justierten Prozess. Damit soll sichergestellt werden, dass Du (oder Dein Kind), die entsprechende Funktionalität vollständig verstehen kannst und sich mit ihr vertraut gemacht hast, bevor die nächste noch weitreichendere Funktionalität (auch als 'Obective' oder ' nächstes Ziel' genannt) freigeschaltet wird. Diese Objectives (Ziele) sind so aufgebaut, dass nach und nach weitere AAPS-Funktionen freigeschaltet werden und so am Ende vom 'Open Loop' auf 'Closed Loop' umgestellt werden kann.

Danach gibt es einen Abschnitt [Allgemeine Hinweise](Usage/Timezone-traveling.md), der sich u.a. mit dem Zeitzonenwechsel auf Reisen und auch dem Umgang mit der Umstellung zwischen Sommer- und Winterzeit bei Nutzung von APPS beschäftigt.

Es gibt einen Abschnitt für [Klinikpersonal](Resources/clinician-guide-to-AAPS.md), das sich für die Open-Source-Technologie der künstlichen Bauchspeicheldrüse wie AAPS interessiert und an Patient*innen, die diese Informationen mit ihren Ärzt*innen und Diabetesberater*innen teilen möchten.

Im letzten Abschnitt [AAPS Projekt unterstützen](make-a-PR.md), wird beschrieben wie Du selbst kleinere und größere Änderungen an der Dokumentation vorschlagen kannst und wie Du mit uns gemeinsam an der Dokumentation arbeiten kannst. Außerdem benötigen wir bei der [Übersetzung der Dokumentation](translations.md) Unterstützung. Wenn Du Fragen von Benutzer*innen beantwortest, hilft es im Übrigen Allen, wenn Du auf die entsprechenden Stellen in dieser Dokumentation mit einem Link verweist (oder einen Screenshot machst, wenn Du nicht weißt wie ein Link gesendet werden kann). Auf diese Weise können richtige Antworten auf gleiche Fragen von unterschiedlichen Benutzer*innen leichter wiedergefunden werden.

(index-translation-help-needed)=

```{admonition} Ask for help - Translators Neeeded!!!
:class: note

Die Dokumentation wird aus dem Englischen in verschiedene Sprachen übersetzt. Wir suchen Hilfe bei der Übersetzung a) der App und b) der Dokumentation.

Der Übersetzungsprozess wird [here]erklärt (translations.md).

Wie weit die Übersetzungen in den jeweiligen Sprachen für die App und die Dokumentation fertiggestellt sind, findest Du [here](./Administration/stateTranslations.md).

```

```{toctree}
:caption: Sprache ändern

Sprache ändern <./changelanguage.md>

```

```{toctree}
:caption: Erste Schritte

Sicherheit zuerst <./Getting-Started/Safety-first.md>

Was ist ein closed Loop <./Getting-Started/ClosedLoop. d>

Was ist ein closed Loop mit AAPS <./Getting-Started/WhatisAndroidAPS. d>

Dokumenten-Updates & Änderungen <./Getting-Started/WikiUpdate.md>

```

(index-what-do-i-need)=

```{toctree}
:caption: Was brauche ich?

CGM/FGM-Auswahl <./Configuration/BG-Source.md>

Pumpenauswahl <./Getting-Started/Pump-Choices.md>

Module <./Module/module.md>

```

```{toctree}
:caption: Wie installiere ich AAPS?

Erstelle die APK <. Installing-AndroidAPS/Building-APK.md>

Update auf eine neue Version oder Branch <. Installing-AndroidAPS/Update-to-new-version.md>

Hinweise und Prüfungen nach dem Update auf AAPS 3.<./Installing-AndroidAPS/update3_0.md>

Prüfungen nach dem Update auf AAPS 2.7 <. Installing-AndroidAPS/update2_7.md>

Installiere git <./Installing-AndroidAPS/git-install.md>

Troubleshooting Android Studio <. Installing-AndroidAPS/troubleshooting_androidstudio.md>

Release Notes <./Installing-AndroidAPS/Releasenotes.md>

Dev Branch <./Installing-AndroidAPS/Dev_branch.md>

```

(index-component-setup)=

```{toctree}
:caption: Komponenten Setup

CGM/FGM <./Configuration/BG-Source.md>

xDrip Einstellungen <./Configuration/xdrip.md>

Pumpenwahl <./Getting-Started/Pump-Choices.md>

Telefonwahl <./Hardware/Phoneconfig.md>

Nightscout Setup <./Installing-AndroidAPS/Nightscout.md>

Smartwatch  <./Hardware/Smartwatch.md>

```

(index-configuration)=

```{toctree}
:caption: Konfiguration

Konfigurator <./Configuration/Config-Builder.md>

Einstellungen <./Configuration/Preferences.md>

```

```{toctree}
:caption: AAPS Usage

AAPS-Bildschirme <./Getting-Started/Screenshots.md>

Objectives (Ziele) <./Usage/Objectives.md>

OpenAPS-Funktionen <./Usage/Open-APS-features.md>

Berechnung der aktiven Kohlenhydrate (COB) <./Usage/COB-calculation.md>

Empfindlichkeitserkennung <./Configuration/Sensitivity-detection-and-COB.md>

Profilwechsel <./Usage/Profiles.md>

Temporäre Ziele <./Usage/temptarget.md>

Verzögerte Kohlenhydrate (eCarbs) <./Usage/Extended-Carbs.md>

Automatisierungen <./Usage/Automation.md>

Autotune (nur Dev) <./Usage/autotune.md>

Careportal (eingestellt) <./Usage/CPbefore26.md>

Open Humans Uploader <./Configuration/OpenHumans.md>

Automation mit Drittanbieter-Apps <./Usage/automationwithapp.md>

Android Auto <./Usage/Android-auto.md>

```

```{toctree}
:caption: Allgemeine Hinweise

Zeitzonenwechsel auf Reisen <./Usage/Timezone-traveling.md>

Logfiles erhalten <./Usage/Accessing-logfiles.md>

Accu Chek Combo - Tipps <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md>

Export/Import von Einstellungen <./Usage/ExportImportSettings.md>

xDrip+ engineering mode <./Usage/Enabling-Engineering-Mode-in-xDrip.md>

```

```{toctree}
:caption: AAPS für Kinder

Fernüberwachung <./Kinder/Kinder.md>

SMS-Befehle <./Children/SMS-Commands.md>

Profilhelfer <./Configuration/profilehelper.md>

```

```{toctree}
:caption: Troubleshooting

Fehlerbehebung <./Usage/troubleshooting.md>

Nightscout-Client <./Usage/Troubleshooting-NSClient.md>

```

```{toctree}
:caption: FAQ

FAQ <./Getting-Started/FAQ.md>
```

```{toctree}
:caption: Glossar

Glossar <./Getting-Started/Glossary.md>
```

```{toctree}
:caption: Hilfe durch die Community

Nützliche Informationsquellen vor dem Start <./Where-To-Go-For-Help/Background-reading.md>

Hilfe <./Where-To-Go-For-Help/Connect-with-other-users.md>

Dokumenten-Updates & Änderungen <./Getting-Started/WikiUpdate.md>

```

```{toctree}
:caption: Für Klinikpersonal

Für Klinikpersonal <./Resources/clinician-guide-to-AndroidAPS.md>
```

```{toctree}
:caption: Wie kann ich helfen?

AAPS Projekt unterstützen <./Getting-Started/How-can-I-help.md>

Textabschnitte übersetzen App/Doku <./translations.md>

Übersetzungsstatus für die App/Doku <./Administration/stateTranslations.md>

Wie man die Doku bearbeitet <./make-a-PR.md>

```

```{toctree}
:caption: Sandbox

Sandbox <./Sandbox/sandbox1.md>
```

```{note}
**Haftungsausschluss und Warnung**

- Alle Informationen, Gedanken und Code, die hier beschrieben werden, sind nur für Informations- und Bildungszwecke bestimmt. Nightscout erfüllt keinerlei Anforderungen des Datenschutzes im Gesundheitswesen. Du verwendest Nightscout und AAPS auf eigenes Risiko. Setze es nicht ein, um Behandlungsentscheidungen zu treffen.
- Bei Nutzung des Quellcodes von github.com bestehen keinerlei Gewährleistungs- und Garantieansprüche. Es gibt keinen Support. Im Übrigen wird auf die Lizenz verwiesen, die im Repository abgerufen werden kann.
- Sämtliche Produkt- und Herstellernamen, Handelsmarken, Dienstleistungsmarken, Warenzeichen und eingetragene Dienstleistungsmarken sind Eigentum ihrer jeweiligen Inhaber und werden nur zu Informationszwecken genutzt und nicht für Werbung oder Marketing. Ihre Verwendung dient nur zur Information und bedeutet weder, dass AAPS zu ihnen gehört, noch dass sie unterstützt werden.

Bitte beachten: Dieses Projekt steht in keinerlei Verbindung mit: [SOOIL](<https://www.sooil.com/eng/>), [Dexcom](<https://www.dexcom.com/>), [Accu-Chek, Roche Diabetes Care](<https://www.accu-chek.com/>) oder [Medtronic](<https://www.medtronic.com/>)

```
