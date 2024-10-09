# Vorbereitungen, um mit AAPS zu starten

Willkommen. Diese Dokumentation möchte Benutzer*innen, die sich darauf vorbereiten, Android Artificial Pancreas System (**AAPS**) einzurichten und zu verwenden durch die notwendigen Schritte zu führen.

## Deinen Weg durch die Dokumentation finden

Ein **Index** und eine Erklärung der Dokumentenstruktur findest Du [hier](index.md). Alternativ klickst Du auf das Symbol **AAPS** oben links in der Dokumentation. Dort findest Du eine Zusammenfassung der jeweiligen Zielsetzung der einzelnen Abschnitte in der Dokumentation. Du kannst auch mit Hilfe der Überschriften auf der linken Seite durch die Navigation navigieren. Zusätzlich gibt es eine praktische Suchfunktion direkt unterhalb des **AAPS**-Symbols.

Unser Ziel ist es, sowohl die **AAPS**-Möglichkeiten als auch dessen Beschränkungen leicht verständlich zu beschreiben. Es kann enttäuschend sein, wenn Du, nachdem Du bereits einiges an Zeit in das Lesen der Dokumentation investiert hast, feststellst, dass Deine Insulinpumpe oder Dein Sensor nicht mit **AAPS** kompatibel ist oder <0>AAPS</0> andere Funktionalitäten bietet, als Du Dir erhofft hast.

Viele Details in der **AAPS**-Dokumentation sind aus Erfahrungen entstanden und sind erst dann besonders nachvollziehbar, wenn **AAPS** tatsächlich genutzt wird. Genauso wie es fast unmöglich ist, eine Sportart nur durch das Lesen der Regeln zu lernen, ist es für den sicheren Umgang mit **AAPS** wichtig, die Grundlagen des Systems zu verstehen und das Wissen konkret auf Dein (neu) laufendes **AAPS** anzuwenden.

(preparing-safety-first)=

## Sicherheitshinweise
„Mit großen Möglichkeiten kommt auch eine große Verantwortung…”

### Technische Sicherheit
**AAPS** hat umfangreiche Sicherheitsfunktionen. Diese beschränken das System und werden schrittweise durch das stufenweise Abschließen einer Reihe von [Zielen](Usage/Objectives.md) entfernt. Diese beinhalten das Testen bestimmter Parameter und die Beantwortung mehrerer Multiple-Choice-Fragen. **AAPS**-Funktionen werden mit dem erfolgreichen Abschluss des jeweiligen Ziels freigeschaltet. Dieses Vorgehen ermöglicht durch das schrittweise Kennenlernen der verschiedenen **AAPS**-Funktionen einen sicheren Übergang aus dem 'Open Loop' in den 'Closed Loop'.

Die [Ziele (Objectives)](Usage/Objectives.md) sollen den bestmöglichen Einstieg in **AAPS** ermöglichen, und dabei die typischen Fehler und Nutzungsmuster, die **AAPS**-Entwickler bei Neulingen beobachtet haben, adressieren. Weil Einsteiger unerfahren sind und zu schnell mit **AAPS** loslegen wollen oder wichtige Punkte übersehen haben, können Fehler passieren. Die [Ziele](Usage/Objectives.md) wollen genau diese Probleme minimieren.

### Medizinische Sicherheit
```{admonition} Avoid permanent and painful damage to your eyes and nerves
:class: danger
Caution is advised concerning rapid improvements in blood glucose control and lowering of HbA1c 
```

An important safety consideration is that a **rapid reduction in HbA1c and improved blood glucose control in those who have had elevated glucose levels for some time can cause permanent damage**. Many people with diabetes are unaware of this, and not all clinicans make their patients aware of this issue.

This damage can include **sight loss, and permanent neuropathy (pain)**. It is possible to avoid this damage occuring, by reducing average glucose levels more slowly. If you currently have an elevated HbA1c and are moving to **AAPS** (or any other closed loop system), _please_ discuss this potential risk with your clinical team before starting, and agree a timescale with gradually decreasing safe glucose targets with them. You can easily set higher glucose targets in **AAPS** initially (currently, the highest target you can select is 10.6 mmol/L but you can also maintain a purposefully weak profile if needed), and then reduce the target as the months pass.

#### Wie schnell kann ich meinen HbA1c reduzieren, ohne dauerhaften Schaden zu riskieren?

One retrospective [study](https://pubmed.ncbi.nlm.nih.gov/1464975/) of 76 patients reported that the risk of progression of retinopathy increased by 1.6 times, 2.4 times and 3.8 times if the Hba1C dropped 1%, 2% or 3% respectively over a 6 month period. They suggested that the **"decrease in HbA1c value during any 6-month period should be limited to less than 2% in order to prevent the progression of retinopathy....Too rapid a decrease at the initiation of glycemic control could cause severe or transient exacerbation of the progression of retinopathy."**

N.B. If you use different HbA1c units (mmol/mol rather than %), click [here](https://www.diabetes.co.uk/hba1c-units-converter.html) for a HbA1c calculator tool.

In another retrospective [evaluation](https://academic.oup.com/brain/article/138/1/43/337923) of 954 patients, researchers noted that:

**"With a decrease in HbA1c of 2–3% points over 3 months there was a 20% absolute risk of developing treatment-induced neuropathy in diabetes, with a decrease in HbA1c of >4% points over 3 months the absolute risk of developing treatment-induced neuropathy in diabetes exceeded 80%."**

A [commentary](https://academic.oup.com/brain/article/138/1/2/340563) on this work agreed that to avoid complications **the goal should be to reduce A1c by <2% over 3 months.** You can read other reviews on the topic [here](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6587545/pdf/DOM-21-454.pdf) and [here](https://www.mdpi.com/1999-4923/15/7/1791).

It is generally recognised that _newly_ diagnosed type 1 diabetics (who often have very high HbA1c at diagnosis, before starting insulin therapy) appear to be able to rapidly reduce their HbA1c immediately after diagnosis without encountering these risks to the same extent, because they have not had elevated blood glucose levels for such a sustained period. However, it is still a consideration which you should discuss with your clinician.

### Keine SGLT-2-Hemmern

```{admonition} NO SGLT-2 inhibitors
:class: danger
SGLT-2 inhibitors, also called gliflozins, inhibit reabsorption of glucose in the kidney. Gliflozins incalculably lower blood sugar levels, and so you MUST NOT take them while using a closed loop system like AAPS! There would be a significant risk of ketoacidosis and/or hypoglycemia! The combination of this medication with a system that lowers basal rates in order to increase BG is especially dangerous. 

In a nutshell:
- **Example 1: risk of Hypo**
>During lunch, you use **AAPS** to bolus based on consuming 45g of glucose. Das Problem ist, dass AAPS nicht weiß, dass die SGLT-2-Hemmer bewirken, dass der Körper einige der Kohlenhydrate nicht aufnimmt, was dazu führt, dass Dein Körper zu viel Insulin im Vergleich zu den tatsächlich aufgenommenen Kohlenhydraten hat. Das führt zu einer Hypoglykämie.

- **Example 2: risk of Ketoacidosis**
>The inhibitors eliminate some of the carbs in the background causing a reduction in your BG. **AAPS** will automatically instruct the pump to decrease insulin intake  including basal. Im Laufe der Zeit kann dies dazu führen, dass dein BG unter dem Zielwert bleibt, bis zu dem Zeitpunkt, dass der Körper nicht genügend Insulin zur Aufnahme von Kohlenhydraten verfügbar hat. Die Folge ist eine Ketoazidose. Normalerweise entwickelt sich eine Ketoazidose bei einem Typ-1 Patienten wegen eines Pumpendefekts, was durch einen hohen Glukosewert Warnungen auf dem Smartphone auslösen würde. Die Gefahr bei Gliflozinen besteht jedoch darin, dass es keine AAPS-Warnungen geben würde, da die Pumpe voll funktionsfähig bleibt und die Glukosewerte möglicherweise im Zielbereich bleiben.  

Bekannte Handelsnamen von SGLT-2 Hemmern sind: Invokana, Forxiga, Jardiance, Steglatro und Zynquista und andere.
```


### Grundprinzipien des Loopens mit AAPS

Die Grundprinzipien und Konzepte des Loopens müssen vom Nutzenden verstanden werden, bevor **AAPS** verwendet wird. Dies wird erreicht, indem Du Zeit in das Lesen der **AAPS**-Dokumentation investierst und die Ziele (Objectives), die Dir eine gute Ausgangslage für den sicheren und effektiven Umgang mit **AAPS** ermöglichen sollen, abschließt. Der Umfang der **AAPS**-Dokumentation mag am Anfang erschlagend wirken, aber bleib' geduldig und vertraue dem Prozess - mit dem richtigen Vorgehen wirst Du es erreichen!

Wie schnell man vorankommt, hängt stark vom Einzelnen ab. Sei Dir aber bewusst, dass das Erreichen aller Ziele (Objectives) typischerweise ca. 6-9 Wochen benötigt. Viele Leute beginnen, **AAPS** zu erstellen/bauen, zu installieren und einzurichten, bevor sie es tatsächlich benutzen. Um das zu unterstützen, hat das System eine "virtuelle Pumpe", die beim Abschluss der ersten Ziele genutzt werden kann, um sich mit **AAPS** vertraut zu machen, ohne es tatsächlich zur Insulinabgabe zu nutzen. Eine detaillierte Aufschlüsselung der Zeitabläufe wird unten gezeigt. Ab dem Ziel 8 wird in **AAPS** der Loop geschlossen (Closed-Loop). Die nachfolgenden Ziele erweitern diesen um zusätzliche Funktionen wie **SMS-Befehle** und **Automatisierungen**, die für einige Nutzende hilfreich sind, aber nicht zwingend für die Kernfunktion von **AAPS** notwendig sind.

Dein Erfolg mit **AAPS** hängt von Deiner Proaktivität, Deinem Willen Glukosewerte zu hinterfragen und Deiner Flexibilität die notwendigen **AAPS**-Anpassungen für bessere Ergebnisse zu machen, ab. Genauso wie es nahezu unmöglich ist, eine Sportart allein über das Regelwerk zu erlernen, ist es auch mit **AAPS**.

#### Rechne mit Verzögerungen und kleineren Stolpersteinen auf dem Weg alles einzurichten und ans Laufen zu bekommen

In der Anfangsphase das **AAPS**-System aufzubauen und auch beim späteren Nachjustieren, kann es Schwierigkeiten in der Kommunikation alle Komponenten des Loops (und potentieller Follower) untereinander geben. Einige Fehler können erst gelöst werden, wenn **AAPS** im Alltag benutzt wird, aber jede Menge Hilfe ist in der Facebook-Gruppe und auf Discord verfügbar. Bitte berücksichtige das entsprechend und nutze "gute" Zeiten, wie z.B. einen ruhigen Vormittag oder ein Wochenende (d.h. nicht mitten in der Nacht oder wenn Du müde bist oder ein wichtiges Meeting ansteht oder Du reist), diese Probleme anzugehen und zu lösen.

#### Technologie-Kompatibilität

**AAPS** ist nur mit bestimmten Insulinpumpen, CGMs und Smartphones kompatibel. Einige Systeme/Technologien sind möglicherweise nicht in jedem Land verfügbar. Um Enttäuschungen oder Frustrationen vorzubeugen, lies bitte die Abschnitte [CGM](Configuration/BG-Source.md), [Insulinpumpen](Getting-Started/Pump-Choices.md) und [Smartphones](Hardware/Phoneconfig.md).

#### Zeit die App zu erstellen und zum vollständigen Loopen weiterzugehen

Der Zeitbedarf, um **AAPS** zu erstellen, hängt von Deiner Erfahrung und Deinem technischen Verständnis bzw. Fähigkeiten ab. In der Regel benötigt ein unerfahrener Nutzer (mit Hilfe der Community) einen halben bis ganzen Tag, um **AAPS** zu erstellen. Durch Deine zunehmende Erfahrung wird der Prozess bei **AAPS**-Folgeversionen deutlich schneller gehen.

Um Dir durch den Erstellungsprozess zu helfen, gibt es eigene spezifische Abschnitte:

- Eine Liste von Fragen und Antworten zu häufigen Fehlern, die wahrscheinlich auftreten (unter [FAQ - Abschnitt](Getting-Started/FAQ.md) K);

- “[Wie installiere ich AAPS](Installing-AndroidAPS/Building-APK.md)? (Abschnitt D) mit einem Unterabschnitt zur [Fehlerbehandlung](Usage/troubleshooting.md).

How long it takes to get to closed looping depends on the individual, but an approximate timescale for getting to full looping with AAPS can be found ([here](#how-long-will-it-take-to-set-everything-up))


#### Exportdatei des Keystore & der Konfigurationseinstellungen

Ein "keystore" ist eine mit einem Passwort verschlüsselte Datei, die ausschließlich zu Deiner Kopie von **AAPS** passt. Durch die Nutzung des "keystore" stellt Dein Android-Smartphone sicher, dass nur Du Deine Kopie der App aktualisieren kannst. Kurzum, als Teil der **AAPS**-Erstellung, solltest Du:

1.  Speichere die Keystore-Datei (.jks Datei zum Signieren der App) an einem sicheren Ort;

2.  Notiere das Passwort für Deine Keystore-Datei.


Damit kannst Du die Keystore-Datei für jedes Update auf eine neue **AAPS**-Version nutzen. Im Durchschnitt werden zwei AAPS-Updates pro Jahr nötig.

Zusätzlich bietet **AAPS** die Möglichkeit, [alle Konfigurationseinstellungen zu exportieren](Usage/ExportImportSettings.md). Damit kannst Du das System z.B. bei einem Smartphone-Wechsel oder bei einer Neuinstallation/Update der App sicher wieder herstellen und es mit einer nur kurzen Unterbrechung weiter nutzen. 

#### Problembehandlung

Wenn Du Dir bei irgendetwas unsicher bist, gehe bitte auf die AAPS-Community zu - es gibt keine dummen Fragen! Alle Nutzenden, egal mit welcher Erfahrung, sollen sich bestärkt fühlen, Fragen zu stellen. Da es viele **AAPS**-Nutzende gibt, werden Fragen in der Regel schnell beantwortet.

##### [Frage in der AAPS Facebook-Gruppe](https://www.facebook.com/groups/AndroidAPSUsers/)

##### [Frage im AAPS Discord Kanal](https://discord.gg/4fQUWHZ4Mw)





#### [Wo finde ich Hilfe](Where-To-Go-For-Help/Background-reading.md)?

Dieser Abschnitt zielt darauf ab, neuen Benutzern Links zu Ressourcen bereitzustellen, um Hilfe zu erhalten, einschließlich des Zugriffs auf den Community Support, welcher aus neuen und erfahrenen Benutzern besteht, die Fragen klären und die üblichen Fallstricke lösen können, die mit AAPS einhergehen.

#### [Abschnitt für Mediziner und Fachpersonal](Resources/clinician-guide-to-AndroidAPS.md)

Dieser [Abschnitt ist für Mediziner und Fachpersonal](Resources/clinician-guide-to-AndroidAPS.md), die mehr über AAPS und Open Source Artificial Pancreas Technolgie lernen möchten. In der Einleitung gibt es auch Hilfestellung dazu, [wie Du das mit Deinem Diabetes-Team besprechen kannst](introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team).

## Was werden wir bauen und installieren?

Dieses Diagramm gibt einen Überblick über die Schlüsselkomponenten (sowohl Hardware als auch Software) des **AAPS** Systems:

![preparing_overview](./images/preparing_images/AAPS_preparing_overview_01.png)


Neben den drei grundlegenden Hardwarekomponenten (Smartphone, Insulinpumpe und Glukosesensor) benötigen wir auch: 1) Die **AAPS**-App 2) Einen Server für Berichte und 3) Eine App zum Auslesen Deines Sensors (CGM)

### Eine Android Smartphone-App: **AAPS**

**AAPS** ist eine App, die auf Android-Smartphones & -Geräten läuft. You are going to build the **AAPS** app (an apk file) yourself, using a step-by-step guide, by downloading the **AAPS** source code from GitHub, installing the necessary programs (Android Studio, GitHub desktop) on your computer and building your own copy of **AAPS** app. Du wirst die **AAPS**-App auf Dein Smartphone (per E-Mail, USB-Kabel _etc._) übertragen und installieren.

### 2) Ein Server für Berichte: Nightscout (Tidepool*)

Um alle **AAPS**-Vorteile nutzen zu können, musst Du einen Nightscout-Server einrichten. Du kannst das selbst machen (LINK auf die Anleitung) oder alternativ einen kommerziellen Anbieter (LINK auf T1 pal, 10be.de etc.) gegen eine kleine Gebühr mit dem Aufsetzen und Betreiben des Nightscout-Services (managed service) für Dich beauftragen. Nightscout wird genutzt, um über die Zeit hinweg Daten von **AAPS** zu sammeln und kann daraus detaillierte Berichte erstellen, die Zusammenhänge von CGM- und Insulinmustern zeigt. Eltern und Betreuende können Nightscout auch dazu nutzen, um remote mit der **AAPS**-Anwendung zu kommunizieren und das Diabetes-Management des Kindes im Auge zu behalten. Die Funktionen zur Remote-Kommunikation beinhaltet Echtzeit-Informationen der Glukosewerte und dem Insulinspiegel, Remote-Bolus (über SMS) und Ankündigung von Mahlzeiten. Eine getrennte Betrachtung von CGM-Daten und Pumpen-Daten ist beim Versuch die Diabetes-Performanz zu analysieren, so als ob dem blinden Autofahrer der Beifahrende die Umgebung beschreibt.  Alternativ zu Nightscout kann seit der AAPS version 3.2 (oder neuer) auch Tidepool genutzt werden.

### 3) Eine App zum Auslesen Deines Sensors (CGM)

Um Glukosewerte zu empfangen und an **AAPS** weiterzureichen, benötigst Du die zu Deinem Sensor passende und kompatible App. Die verschiedenen Optionen werden unten gezeigt und weitere Informationen findest Du im Abschnitt [kompatible Sensoren (CGMs)](./Configuration/BG-Source.md):

![dexcom_options](./images/preparing_images/AAPS_connectivity_Dex_02.png) ![libre_options](./images/preparing_images/AAPSconnectivity_libre.png) ![](./images/preparing_images/AAPS_connectivity_eversense.png)

### Pflege des **AAPS**-Systems

Mit dem Erscheinen von verbesserten Versionen müssen **Nightscout** und **AAPS** ungefähr einmal pro Jahr aktualisiert werden. In einigen Fällen kann das Update verschoben werden, in anderen Fällen wird es dringend empfohlen oder ist aus Sicherheitsgründen zwingend erforderlich. In Facebook-Gruppen und Discord-Kanälen wird über diese Updates informiert werden. Die Release Notes werden das entsprechende Szenario beschreiben. Dadurch das viele Leute gleichzeitig durch den Update-Prozess gehen, werden sich deren Fragen mit Deinen ähneln und Dir die Antworten darauf auch helfen.

(preparing-how-long-will-it-take?)=
## Wie lange wird es dauern, alles einzurichten?

Wie schon erwähnt, ist die **AAPS**-Nutzung eher eine „Reise“, die es notwendig macht, dass Du Deine Zeit in sie investierst. Es ist kein einmaliger Aufwand. Aktuelle Schätzungen für das Erstellen, die Installation und Konfiguration von **AAPS** und **CGM**-Software, sowie den Übergang von Open Loop zu Hybrid Closed Loop mit **AAPS**, gehen von ca. 2 bis 3 Monaten aus. Daher wird empfohlen sich als Erstes auf das Erstellen (Build) der **AAPS**-App zu konzentrieren und so schnell wie möglich die ersten Aufgaben bzw. Ziele (Objectives) anzugehen. Das gilt auch, wenn Du aktuell noch ein anderes "Insulinabgabesystem" haben solltest, da Du bis zum Ziel 5 eine "virtuelle Pumpe" nutzen kannst. Ein ungefährer Zeitrahmen ist:

| Aufgaben                                                                                            |    Ungefähre Dauer     |
| --------------------------------------------------------------------------------------------------- |:----------------------:|
| Erstmaliges Lesen der Dokumentation:                                                                |        1-2 Tage        |
| Installation/Konfiguration des PCs zum Erstellen der App:                                           |      2-8 Stunden       |
| Einen Nightscout-Server erstellen:                                                                  |        1 Stunde        |
| Installieren einer CGM-App (xDrip+ oder BYODA oder …)                                               |        1 Stunde        |
| Erstmalige Konfiguration CGM → xDrip+ → AAPS:                                                       |        1 Stunde        |
| Erstmalige Konfiguration AAPS → Insulinpumpe:                                                       |        1 Stunde        |
| Konfiguration von AAPS → Nightscout (nur Berichte):                                                 |        1 Stunde        |
| Optional (für Eltern) - Nightscout konfigurieren <-> **AAPS** & NSFollower:                         |        1 Stunde        |
| Ziel 1: Einrichten der Darstellung und Überwachung sowie analysieren der Basalraten und Faktoren    |        1 Stunde        |
| Ziel 2: Lerne, wie AAPS bedient wird                                                                |        2 Stunde        |
| Ziel 3: Belege Dein Wissen                                                                          |    bis zu 14 Tagen     |
| Ziel 4: Starte den Open Loop                                                                        | wurden 7 Tage erreicht |
| Ziel 5: Open Loop inklusive der temporären Basalratenvorschläge verstehen                           | wurden 7 Tage erreicht |
| Ziel 6: Closed Loop mit Abschaltung bei niedrigen Glukose-Werten                                    |   bis zu 5-14 Tagen    |
| Ziel 7: Justiere den Closed Loop, erhöhe maxIOB über und setze den Zielbereich langsam herunter     |     bis zu 7 Tagen     |
| Ziel 8: Passe, falls notwendig, Basalraten und Faktoren an und aktiviere dann die Autosens-Funktion |   bis zu 7-14 Tagen    |
| Ziel 9: Aktiviere zusätzliche oref1 Funktionen für die Nutzung tagsüber wie z. B. den SMB           |    bis zu 14 Tagen     |
| Ziel 10: Automatisierung                                                                            |         1 Tag          |


Sobald Du **AAPS** vollständig nutzen kannst, ist es an der Zeit die Parameter Deiner Einstellung feiner abzustimmen und so Dein Diabetes-Management zu verbessern.

## Voraussetzungen

### Medizinische Überlegungen

Zusätzlich zu den medizinischen Warnungen in den [Sicherheitshinweisen](preparing-safety-frist) gibt es in Abhängigkeit vom in der Pumpe verwendeten Insulin weitere Parameter.

#### Insulinwahl

**AAPS**-Berechnungen gehen von einer Insulinkonzentration von 100U/ml aus. Für folgende Insuline sind Wirkprofile bereits hinterlegt:

- Rapid-Acting Oref: Humalog/NovoRapid/NovoLog
- Ultra-Rapid Oref:  Fiasp
- Lyumjev:

Nur für experimentierende/fortgeschrittene Nutzende:
- Free-Peak Oref: Ermöglicht das Wirkmaximum frei festzulegen


### Technisches

Diese Dokumentation möchte die notwendige technische Expertise auf ein absolutes Minimum beschränken. Du wirst Deinen Computer dazu nutzen, um die **AAPS**-Anwendung in Android Studio (Schritt-für-Schritt-Anleitung) zu erstellen. Du wirst auch einen über das Internet erreichbaren Server in einer öffentlichen Cloud erstellen, verschiedene Android Smartphone-Apps konfigurieren und Deine Expertise im Diabetes-Management ausbauen. Das kannst Du erreichen, indem Du in kleinen Schritten vorwärts gehst, geduldig bleibst und die Hilfe der **AAPS**-Community nutzt. Wenn Du bereits im Internet surfen kannst, Deine eigenen E-Mails managst und Deinen Computer auf dem aktuellen Stand halten kannst, sollte die Aufgabe **AAPS** zu erstellen machbar sein. Nimm Dir einfach Zeit.

### Smartphones

#### AAPS und Android-Versionen
The current version of **AAPS** (3.2) requires an Android smartphone with Google **Android 9.0 or above**. If you are considering buying a new phone, (as of July 2024), Android 13 is preferred. Users are strongly encouraged to keep their build of **AAPS** up to date for safety reasons, however for users unable to use a device with Android 9.0 or newer, earlier versions of  **AAPS** compatible for older Android versions like [Android 8](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2.1) and [Android 7](https://github.com/nightscout/AndroidAPS/releases/tag/2.6.2), remain available from previous releases (check the release notes for legacy versions).

#### Smartphone-Modell wählen
Welches genaue Modell Du kaufen solltest, hängt von den gewünschten Funktionen ab. Es gibt zwei (mittlerweile archivierte) Arbeitsblätter mit kompatiblen [Smartphones](https://docs.google.com/spreadsheets/d/1zO-Vf3wv0jji5Gflk6pe48oi348ApF5RvMcI6NG5TnY/edit#gid=2097219952) und [Smartphones und Smartwatches](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435). Diese Übersichten werden nicht mehr aktualisiert, da es mittlerweile zu viele Modelle auf dem Markt gibt. Wir empfehlen Dir daher, die entsprechenden Supportgruppen (Facebook oder Discord) mit dem Schlagwort "phone" oder dem jeweiligen Modell, das Du kaufen möchtest, zu durchsuchen. Wenn Du dann darüber hinaus Informationen benötigen solltest, erstelle einen neuen Beitrag mit Deinen Fragen.

Falls Du Smartphones oder Smartwatch-Modelle für Tests spenden möchtest, sende eine E-Mail an [donations@androidaps.org](mailto:donations@androidaps.org).

- [Liste von getesteten Smartphones](../Getting-Started/Phones.md)
- [Jelly Settings](../Usage/jelly.md)
- [Huawei Einstellungen](../Usage/huawei.md)

Das Smartphone sollte regelmäßig Sicherheitsupdates erhalten und stets auf der aktuellen Android-Version gehalten werden. Wenn Du mit AAPS noch nicht sehr vertraut bist oder kein technischer Experte bist, solltest Du mit dem jeweiligen Update warten, bis andere das Update erfolgreich gemacht haben und in den verschiedenen Foren bestätigt haben, dass es problemlos durchgeführt werden kann.

```{admonition} delaying Samsung phones updates
:class: warning
Samsung has an unfortunate track record of forcing updates of their phones which cause bluetooth connectivity issues. Um diese Zwangsupdates zu deaktivieren, musst Du das Smartphone in den "Entwicklermodus" schalten:
 Gehe zu Einstellungen - Telefoninfo - Softwareinformationenen und tippe so lange auf "Buildnummer", bis die Meldung über den aktivierten Entwicklermodus erscheint. Gehe zurück in die Einstellungen und Du solltest ganz unten einen neuen Eintrag "Entwickleroptionen" finden. Open developer options and scroll to find auto system update and turn it off
```

```{admonition} Google Play Protect potential Issue
:class: warning
There have been several reports of **AAPS** being shut down arbitrarily by Google Play Protect every morning. Falls das passieren sollte, kannst Du in den Einstellungen > Sicherheit und Datenschutz > App-Sicherheit, "Google Play Protect" ausschalten. Nicht alle Smartphone-Modelle oder Android-Versionen sind davon betroffen.
```

