# Vorbereitungen, um mit AAPS zu starten

Willkommen. Diese Dokumentation möchte Benutzer*innen, die sich darauf vorbereiten, Android Artificial Pancreas System (**AAPS**) einzurichten und zu verwenden durch die notwendigen Schritte zu führen.

## Deinen Weg durch die Dokumentation finden

Ein **Index** und eine Erklärung der Dokumentenstruktur findest Du [hier](../index.md). Alternativ klickst Du auf das Symbol **AAPS** oben links in der Dokumentation. Dort findest Du eine Zusammenfassung der jeweiligen Zielsetzung der einzelnen Abschnitte in der Dokumentation. Du kannst auch mit Hilfe der Überschriften auf der linken Seite durch die Navigation navigieren. Zusätzlich gibt es eine praktische Suchfunktion direkt unterhalb des **AAPS**-Symbols.

Unser Ziel ist es, sowohl die **AAPS**-Möglichkeiten als auch dessen Beschränkungen leicht verständlich zu beschreiben. Es kann enttäuschend sein, wenn Du, nachdem Du bereits einiges an Zeit in das Lesen der Dokumentation investiert hast, feststellst, dass Deine Insulinpumpe oder Dein Sensor nicht mit **AAPS** kompatibel ist oder <0>AAPS</0> andere Funktionalitäten bietet, als Du Dir erhofft hast.

Viele Details in der **AAPS**-Dokumentation sind aus Erfahrungen entstanden und sind erst dann besonders nachvollziehbar, wenn **AAPS** tatsächlich genutzt wird. Genauso wie es fast unmöglich ist, eine Sportart nur durch das Lesen der Regeln zu lernen, ist es für den sicheren Umgang mit **AAPS** wichtig, die Grundlagen des Systems zu verstehen und das Wissen konkret auf Dein (neu) laufendes **AAPS** anzuwenden.

(preparing-safety-first)=

## Sicherheitshinweise
„Mit großen Möglichkeiten kommt auch eine große Verantwortung…”

### Technische Sicherheit
**AAPS** hat umfangreiche Sicherheitsfunktionen. Diese beschränken das System und werden schrittweise durch das stufenweise Abschließen einer Reihe von [Zielen](../SettingUpAaps/CompletingTheObjectives.md) entfernt. Diese beinhalten das Testen bestimmter Parameter und die Beantwortung mehrerer Multiple-Choice-Fragen. **AAPS**-Funktionen werden mit dem erfolgreichen Abschluss des jeweiligen Ziels freigeschaltet. Dieses Vorgehen ermöglicht durch das schrittweise Kennenlernen der verschiedenen **AAPS**-Funktionen einen sicheren Übergang aus dem 'Open Loop' in den 'Closed Loop'.

Die [Ziele (Objectives)](../SettingUpAaps/CompletingTheObjectives.md) sollen den bestmöglichen Einstieg in **AAPS** ermöglichen, und dabei die typischen Fehler und Nutzungsmuster, die **AAPS**-Entwickler bei Neulingen beobachtet haben, adressieren. Weil Einsteiger unerfahren sind und zu schnell mit **AAPS** loslegen wollen oder wichtige Punkte übersehen haben, können Fehler passieren. Die [Ziele](../SettingUpAaps/CompletingTheObjectives.md) wollen genau diese Probleme minimieren.

### Medizinische Sicherheit
```{admonition} Avoid permanent and painful damage to your eyes and nerves
:class: danger
Vorsicht ist bei einer (zu) schnellen Verbesserung der Blutzuckerkontrolle und des HbA1c notwendig 
```

Ein wichtiger Sicherheitsaspekt ist, dass eine **schnelle Reduzierung des HbA1c und eine verbesserte Blutzuckerkontrolle bei Personen mit einem über einen längeren Zeitraum erhöhten Glukosespiegel dauerhaften Schaden** verursachen können. Viele Menschen mit Diabetes sind sich dessen nicht bewusst, und nicht alle Klinikärzte machen ihre Patienten auf dieses Problem aufmerksam.

Dieser Schaden kann **Sehverlust und dauerhafte Neuropathie (Schmerz)** beinhalten. Es ist möglich, diesen Schaden zu vermeiden, indem der durchschnittliche Glukosespiegel langsamer reduziert wird. Wenn Du derzeit einen erhöhten HbA1c hast und zu **AAPS** (oder einem anderen Closed-Loop-System) wechselst, besprich dieses potentielle Risiko _bitte_ mit Deinem Klinik-Team, bevor Du startest, und lege gemeinsam einen Zeitraum fest, in dem Du den Glukosespiegel sicher schrittweise senkst. Es ist einfach in **AAPS** zunächst am Anfang einen höheren Glukosezielwert zu setzen (der aktuell höchst mögliche Wert ist 10,6 mmol/l bzw. 191 mg/dl, alternativ kannst Du - sofern nötig - ein entsprechend schwaches Profile hinterlegen) und dann über die Monate hinweg den Zielwert reduzieren.

#### Wie schnell kann ich meinen HbA1c reduzieren, ohne dauerhaften Schaden zu riskieren?

Eine retrospektive [Studie](https://pubmed.ncbi.nlm.nih.gov/1464975/) von 76 Patienten berichtet davon, dass das Risiko einer fortschreitenden Retinopathie um das 1,6 bis 2,4-fache und 3,8-fache steigt, wenn der HbA1c innerhalb eines Zeitraums von 6 Monaten um 1%, 2% bzw. 3% gesunken ist. Sie schlugen vor, dass die **"Verringerung des HbA1c-Wertes während eines Zeitraums von 6 Monaten auf weniger als 2% beschränkt werden sollte, um das Fortschreiten der Retinopathie zu verhindern. ..Ein zu schneller Rückgang beim Beginn der glykämischen Kontrolle kann zu einer schwerwiegenden oder vorübergehenden Verschärfung des Fortschreitens der Retinopathie führen.“**

Nachbemerkung: Solltest Du anderen Maßeinheiten (mmol/l statt mg/dl) verwenden, findest Du [hier](https://www.diabetes.co.uk/hba1c-units-converter.html) einen HbA1c-Umrechner.

In einer weiteren retrospektiven [Bewertung](https://academic.oup.com/brain/article/138/1/43/337923) von 954 Patienten haben Forschende Folgendes festgestellt:

**"Mit einer Verringerung des HbA1c um 2–3 Prozentpunkte innerhalb von 3 Monaten gab es ein absolutes 20%-iges Risiko eine behandlungsbedürftigen Neuropathie bei Diabetes zu entwickeln. Mit einer Reduktion des HbA1c um >4% über 3 Monate überstieg das Risiko eine behandlungsbedürftigen Neuropathie bei Diabetes zu entwicklen 80 %."**

Ein [Kommentar](https://academic.oup.com/brain/article/138/1/2/340563) zu dieser Arbeit bestätigte, dass das Ziel zur Vermeidung von Komplikationen **sein sollte, den A1c über 3 Monate hinweg um <2 % zu reduzieren.** Weitere Rezensionen zum Thema [findest Du hier](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6587545/pdf/DOM-21-454.pdf) und [hier](https://www.mdpi.com/1999-4923/15/7/1791).

Es wird allgemein anerkannt, dass _neu_ diagnostizierte Typ-1 Diabetiker (die bei der Diagnose und vor der dem Beginn der Insulintherapie häufig sehr hohe HbA1c haben) in der Lage zu sein scheinen, ihren HbA1c, ohne das die Risiken im gleichen Maß steigen, schnell zu senken, da ihre Blutzuckerwerte vorher für einen so langen Zeitraum nicht erhöht waren. Dennoch ist es überlegenswert, dies mit Deinem Diabetes-Team zu besprechen.

(PreparingForAaps-no-sglt-2-inhibitors)=
### Keine SGLT-2-Hemmern

```{admonition} NO SGLT-2 inhibitors
:class: danger
SGLT-2 Hemmer, auch Gliflozins genannt, hemmen die Resorption (Aufnahme) von Glukose in der Niere. Gliflozine senken den Blutzuckerspiel unkalkulierbar, und DÜRFEN NICHT genommen werden, wenn ein Closed Loop System wie AAPS genutzt wird! Damit würde ein enormes Risiko für eine Ketoazidose und/oder eine Hypoglykämie bestehen! Besonders gefährlich ist die Kombination dieses Medikaments mit einem System, das die Basalrate senkt, um die Glukosewerte zu erhöhen. 

In der Zusammenfassung:
- **Beispiel 1: Hypo-Risiko**
>Zum Mittagessen bolst Du mit **AAPS** für 45g Kohlenhydrate. Das Problem ist, dass AAPS nicht weiß, dass die SGLT-2-Hemmer bewirken, dass der Körper einige der Kohlenhydrate nicht aufnimmt, was dazu führt, dass Dein Körper zu viel Insulin im Vergleich zu den tatsächlich aufgenommenen Kohlenhydraten hat. Das führt zu einer Hypoglykämie.

- **Beispiel 2: Risiko einer Ketoazidose**
>Die Inhibitoren verbrauchen einige der Kohlenhydrate im Hintergrund und verursachen eine Reduzierung Deines Glukosewertes. **AAPS wird darauf mit einer Verringerung (inklusive des Basals) der Insulinzufuhr der Pumpe reagieren. Im Laufe der Zeit kann dies dazu führen, dass dein BG unter dem Zielwert bleibt, bis zu dem Zeitpunkt, dass der Körper nicht genügend Insulin zur Aufnahme von Kohlenhydraten verfügbar hat. Die Folge ist eine Ketoazidose. Normalerweise entwickelt sich eine Ketoazidose bei einem Typ-1 Patienten wegen eines Pumpendefekts, was durch einen hohen Glukosewert Warnungen auf dem Smartphone auslösen würde. Die Gefahr bei Gliflozinen besteht jedoch darin, dass es keine AAPS-Warnungen geben würde, da die Pumpe voll funktionsfähig bleibt und die Glukosewerte möglicherweise im Zielbereich bleiben.  

Bekannte Handelsnamen von SGLT-2 Hemmern sind: Invokana, Forxiga, Jardiance, Steglatro und Zynquista und andere.
```


### Grundprinzipien des Loopens mit AAPS

Die Grundprinzipien und Konzepte des Loopens müssen vom Nutzenden verstanden werden, bevor **AAPS** verwendet wird. Dies wird erreicht, indem Du Zeit in das Lesen der **AAPS**-Dokumentation investierst und die Ziele (Objectives), die Dir eine gute Ausgangslage für den sicheren und effektiven Umgang mit **AAPS** ermöglichen sollen, abschließt. Der Umfang der **AAPS**-Dokumentation mag am Anfang erschlagend wirken, aber bleib' geduldig und vertraue dem Prozess - mit dem richtigen Vorgehen wirst Du es erreichen!

Wie schnell man vorankommt, hängt stark vom Einzelnen ab. Sei Dir aber bewusst, dass das Erreichen aller Ziele (Objectives) typischerweise ca. 6-9 Wochen benötigt. Viele Leute beginnen, **AAPS** zu erstellen/bauen, zu installieren und einzurichten, bevor sie es tatsächlich benutzen. Um das zu unterstützen, hat das System eine "virtuelle Pumpe", die beim Abschluss der ersten Ziele genutzt werden kann, um sich mit **AAPS** vertraut zu machen, ohne es tatsächlich zur Insulinabgabe zu nutzen. Eine detaillierte Aufschlüsselung der Zeitabläufe wird unten gezeigt. Ab dem Ziel 8 wird in **AAPS** der Loop geschlossen (Closed-Loop). Die nachfolgenden Ziele erweitern diesen um zusätzliche Funktionen wie **SMS-Befehle** und **Automatisierungen**, die für einige Nutzende hilfreich sind, aber nicht zwingend für die Kernfunktion von **AAPS** notwendig sind.

Dein Erfolg mit **AAPS** hängt von Deiner Proaktivität, Deinem Willen Glukosewerte zu hinterfragen und Deiner Flexibilität die notwendigen **AAPS**-Anpassungen für bessere Ergebnisse zu machen, ab. Genauso wie es nahezu unmöglich ist, eine Sportart allein über das Regelwerk zu erlernen, ist es auch mit **AAPS**.

#### Rechne mit Verzögerungen und kleineren Stolpersteinen auf dem Weg alles einzurichten und ans Laufen zu bekommen

In der Anfangsphase das **AAPS**-System aufzubauen und auch beim späteren Nachjustieren, kann es Schwierigkeiten in der Kommunikation alle Komponenten des Loops (und potentieller Follower) untereinander geben. Einige Fehler können erst gelöst werden, wenn **AAPS** im Alltag benutzt wird, aber jede Menge Hilfe ist in der Facebook-Gruppe und auf Discord verfügbar. Bitte berücksichtige das entsprechend und nutze "gute" Zeiten, wie z.B. einen ruhigen Vormittag oder ein Wochenende (d.h. nicht mitten in der Nacht oder wenn Du müde bist oder ein wichtiges Meeting ansteht oder Du reist), diese Probleme anzugehen und zu lösen.

#### Technologie-Kompatibilität

**AAPS** ist nur mit bestimmten Insulinpumpen, CGMs und Smartphones kompatibel. Einige Systeme/Technologien sind möglicherweise nicht in jedem Land verfügbar. Um Enttäuschungen oder Frustrationen vorzubeugen, lies bitte die Abschnitte [CGM](../Getting-Started/CompatiblesCgms.md), [Insulinpumpen](../Getting-Started/CompatiblePumps.md) und [Smartphones](../Getting-Started/Phones.md).

#### Zeit die App zu erstellen und zum vollständigen Loopen weiterzugehen

Der Zeitbedarf, um **AAPS** zu erstellen, hängt von Deiner Erfahrung und Deinem technischen Verständnis bzw. Fähigkeiten ab. In der Regel benötigt ein unerfahrener Nutzer (mit Hilfe der Community) einen halben bis ganzen Tag, um **AAPS** zu erstellen. Durch Deine zunehmende Erfahrung wird der Prozess bei **AAPS**-Folgeversionen deutlich schneller gehen.

Um Dir durch den Erstellungsprozess zu helfen, gibt es eigene spezifische Abschnitte:

- Eine Liste von Fragen und Antworten zu häufigen Fehlern, die wahrscheinlich auftreten (unter [FAQ - Abschnitt](../UsefulLinks/FAQ.md) K);

- „[AAPS erstellen](../SettingUpAaps/BuildingAaps.md)“ (Abschnitt D), der einen Unterabschnitt zur [Fehlerbehebung](../GettingHelp/GeneralTroubleshooting.md) hat.

Wie lange es dauert den Closed Loop zu erreichen ist individuell verschieden, ein grober Zeitablauf bis zum vollen Loopen mit AAPS findest Du ([hier](#how-long-will-it-take-to-set-everything-up)).


#### Exportdatei des Keystore & der Konfigurationseinstellungen

Ein "keystore" ist eine mit einem Passwort verschlüsselte Datei, die ausschließlich zu Deiner Kopie von **AAPS** passt. Durch die Nutzung des "keystore" stellt Dein Android-Smartphone sicher, dass nur Du Deine Kopie der App aktualisieren kannst. Kurzum, als Teil der **AAPS**-Erstellung, solltest Du:

1.  Speichere die Keystore-Datei (.jks Datei zum Signieren der App) an einem sicheren Ort;

2.  Notiere das Passwort für Deine Keystore-Datei.


Damit kannst Du die Keystore-Datei für jedes Update auf eine neue **AAPS**-Version nutzen. Im Durchschnitt werden zwei AAPS-Updates pro Jahr nötig.

Zusätzlich bietet **AAPS** die Möglichkeit, [alle Konfigurationseinstellungen zu exportieren](../Maintenance/ExportImportSettings.md). Damit kannst Du das System z.B. bei einem Smartphone-Wechsel oder bei einer Neuinstallation/Update der App sicher wieder herstellen und es mit einer nur kurzen Unterbrechung weiter nutzen. 

#### Problembehandlung

Wenn Du Dir bei irgendetwas unsicher bist, gehe bitte auf die AAPS-Community zu - es gibt keine dummen Fragen! Alle Nutzenden, egal mit welcher Erfahrung, sollen sich bestärkt fühlen, Fragen zu stellen. Da es viele **AAPS**-Nutzende gibt, werden Fragen in der Regel schnell beantwortet.

##### [Frage in der AAPS Facebook-Gruppe](https://www.facebook.com/groups/AndroidAPSUsers/)

##### [Frage im AAPS Discord Kanal](https://discord.gg/4fQUWHZ4Mw)





#### [Wo finde ich Hilfe](../UsefulLinks/BackgroundReading.md)?

Dieser Abschnitt zielt darauf ab, neuen Benutzern Links zu Ressourcen bereitzustellen, um Hilfe zu erhalten, einschließlich des Zugriffs auf den Community Support, welcher aus neuen und erfahrenen Benutzern besteht, die Fragen klären und die üblichen Fallstricke lösen können, die mit AAPS einhergehen.

#### [Abschnitt für Mediziner und Fachpersonal](../UsefulLinks/ClinicianGuideToAaps.md)

Dieser [Abschnitt ist für Mediziner und Fachpersonal](../UsefulLinks/ClinicianGuideToAaps.md), die mehr über AAPS und Open Source Artificial Pancreas Technolgie lernen möchten. In der Einleitung gibt es auch Hilfestellung dazu, [wie Du das mit Deinem Diabetes-Team besprechen kannst](#introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team).

## Was werden wir bauen und installieren?

Dieses Diagramm gibt einen Überblick über die Schlüsselkomponenten (sowohl Hardware als auch Software) des **AAPS** Systems:

![preparing_overview](../images/preparing_images/AAPS_preparing_overview_01.png)


Neben den drei grundlegenden Hardwarekomponenten (Smartphone, Insulinpumpe und Glukosesensor) benötigen wir auch: 1) Die **AAPS**-App 2) Einen Server für Berichte und 3) Eine App zum Auslesen Deines Sensors (CGM)

### Eine Android Smartphone-App: **AAPS**

**AAPS** ist eine App, die auf Android-Smartphones & -Geräten läuft. Du wirst die **AAPS**-App auf Dein Smartphone (per E-Mail, USB-Kabel _etc._) übertragen und installieren. Du wirst die **AAPS**-App auf Dein Smartphone (per E-Mail, USB-Kabel _etc._) übertragen und installieren.

### 2) Ein Server für Berichte: Nightscout (Tidepool*)

Um alle **AAPS**-Vorteile nutzen zu können, musst Du einen Nightscout-Server einrichten. Du kannst das [selbst machen](https://nightscout.github.io/nightscout/new_user/#free-diy) oder alternativ einen kommerziellen Anbieter gegen eine kleine Gebühr mit dem Aufsetzen und Betreiben des Nightscout-Services ([managed service](https://nightscout.github.io/#nightscout-as-a-service)) für Dich beauftragen. Nightscout wird genutzt, um über die Zeit hinweg Daten von **AAPS** zu sammeln und kann daraus detaillierte Berichte erstellen, die Zusammenhänge von CGM- und Insulinmustern zeigt. Eltern und Betreuende können Nightscout auch dazu nutzen, um remote mit der **AAPS**-Anwendung zu kommunizieren und das Diabetes-Management des Kindes im Auge zu behalten. Die Funktionen zur Remote-Kommunikation beinhaltet Echtzeit-Informationen der Glukosewerte und dem Insulinspiegel, Remote-Bolus (über SMS) und Ankündigung von Mahlzeiten. Eine getrennte Betrachtung von CGM-Daten und Pumpen-Daten ist beim Versuch die Diabetes-Performanz zu analysieren, so als ob dem blinden Autofahrer der Beifahrende die Umgebung beschreibt.  Alternativ zu Nightscout kann seit der AAPS version 3.2 (oder neuer) auch Tidepool genutzt werden.

### 3) Eine App zum Auslesen Deines Sensors (CGM)

Um Glukosewerte zu empfangen und an **AAPS** weiterzureichen, benötigst Du die zu Deinem Sensor passende und kompatible App. Die verschiedenen Optionen werden unten gezeigt und weitere Informationen findest Du im Abschnitt [kompatible Sensoren (CGMs)](../Getting-Started/CompatiblesCgms.md):

![dexcom_options](../images/preparing_images/AAPS_connectivity_Dex_02.png) ![libre_options](../images/preparing_images/AAPSconnectivity_libre.png) ![](../images/preparing_images/AAPS_connectivity_eversense.png)

### Pflege des **AAPS**-Systems

Mit dem Erscheinen von verbesserten Versionen müssen **Nightscout** und **AAPS** ungefähr einmal pro Jahr aktualisiert werden. In einigen Fällen kann das Update verschoben werden, in anderen Fällen wird es dringend empfohlen oder ist aus Sicherheitsgründen zwingend erforderlich. In Facebook-Gruppen und Discord-Kanälen wird über diese Updates informiert werden. Die Release Notes werden das entsprechende Szenario beschreiben. Dadurch das viele Leute gleichzeitig durch den Update-Prozess gehen, werden sich deren Fragen mit Deinen ähneln und Dir die Antworten darauf auch helfen.

(preparing-how-long-will-it-take)=
## Wie lange wird es dauern, alles einzurichten?

Wie schon erwähnt, ist die **AAPS**-Nutzung eher eine „Reise“, die es notwendig macht, dass Du Deine Zeit in sie investierst. Es ist kein einmaliger Aufwand. Aktuelle Schätzungen für das Erstellen, die Installation und Konfiguration von **AAPS** und **CGM**-Software, sowie den Übergang von Open Loop zu Hybrid Closed Loop mit **AAPS**, gehen von ca. 4 bis 6 Monaten aus. Daher wird empfohlen sich als Erstes auf das Erstellen (Build) der **AAPS**-App zu konzentrieren und so schnell wie möglich die ersten Aufgaben bzw. Ziele (Objectives) anzugehen. Das gilt auch, wenn Du aktuell noch ein anderes "Insulinabgabesystem" haben solltest, da Du bis zum Ziel 5 eine "virtuelle Pumpe" nutzen kannst.

Einige der Ziele verlangen, dass eine bestimmte Anzahl von Tagen in ihnen verbracht wird, um so die neue Funktionalität vollständig verstehen zu können. Es ist nicht möglich, diese Wartezeit zu umgehen. Diese Wartezeit wurde zu Deiner eigenen Sicherheit eingerichtet.

Ein ungefährer Zeitrahmen ist:

| Aufgaben                                                                       |     Ungefähre Dauer      |
| ------------------------------------------------------------------------------ |:------------------------:|
| Erstmaliges Lesen der Dokumentation                                            |         1-2 Tage         |
| Installation/Konfiguration des PCs zum Erstellen der App                       |       2-8 Stunden        |
| Einen Berichtsserver einrichten                                                |         1 Stunde         |
| Eine CGM-App installieren (xDrip+, BYODA, …)                                   |         1 Stunde         |
| CGM → xDrip+ → APPS initial installieren                                       |         1 Stunde         |
| AAPS → Pumpe initial konfigurieren                                             |         1 Stunde         |
| AAPS → Nightscout/Tidepool (nur für Berichte) initial konfigurieren            |         1 Stunde         |
| Optional: Nightscout ↔ **AAPS** & NS-Follower konfigurieren                    |         1 Stunde         |
| Ziel 1: Visualisierung und Überwachung einrichten                              |         1 Stunde         |
| Ziel 2: Lerne, wie AAPS bedient wird                                           |         2 Stunde         |
| Ziel 3: Belege Dein Wissen                                                     |     bis zu 14 Tagen      |
| Ziel 4: Starte den Open Loop                                                   |    Mindestens 7 Tage     |
| Ziel 5: Deinen Open Loop verstehen                                             |  wurden 7 Tage erreicht  |
| Ziel 6: Den Closed Loop (mit Abschaltung bei niedrigen Glukose-Werten) starten | Mindestens 5 bis 14 Tage |
| Ziel 7: Feinabstimmung des Closed Loop                                         | Mindestens 1 bis 7 Tage  |
| Ziel 8: Basal und Faktoren anpassen, Autosens aktivieren                       | Mindestens 7 bis 14 Tage |
| Ziel 9: Aktivieren des Super Micro Bolus (SMB)                                 |    Mindestens 28 Tage    |
| Ziel 10: Automatisierung                                                       |    Mindestens 28 Tage    |
| Ziel 11: Dynamischer ISF                                                       |    Mindestens 28 Tage    |

Sobald Du **AAPS** voll nutzt, musst Du immer noch regelmäßig Deine Einstellungen nachjustieren, um so Dein gesamtes Diabetes-Management verbessern zu können.

## Voraussetzungen

### Medizinische Überlegungen

Zusätzlich zu den medizinischen Warnungen in den [Sicherheitshinweisen](#safety-first) gibt es in Abhängigkeit vom in der Pumpe verwendeten Insulin weitere Parameter.

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

Die aktuelle **AAPS**-Version (3.3) setzt ein Android Smartphone mit Google **Android 11.0 oder höher** voraus. Wenn Du planst Dir (ab Dezember 2024) ein neues Smartphone zuzulegen, wäre Android 14 eine gute Wahl.<br/> Im November 2024 sind Probleme mit Android 15 und der Bluetooth-Konnektivität gemeldet worden. Eventuell macht es Sinn, das Update auf Android 15 zu verschieben, insbesondere dann, wenn Du den Omnipod Dash oder den Dexcom G7 nutzt. Die neuesten Informationen zu diesem Thema findest Du auf [Facebook oder Discord](../GettingHelp/WhereCanIGetHelp.md).<br/> Aus Sicherheitsgründen wird Dir dringend ans Herz gelegt, Dein **AAPS** auf dem neuesten Stand zu halten. Für Menschen, die kein Gerät mit Android 11 (oder neuer) nutzen können, stehen weiterhin ältere **AAPS**-Versionen für ältere Android-Versionen zur Verfügung, siehe dazu auch die [Release Notes](#maintenance-android-version-aaps-version).

#### Smartphone-Modell wählen
Welches genaue Modell Du kaufen solltest, hängt von den gewünschten Funktionen ab. Die [Smartphones](../Getting-Started/Phones.md)-Seite enthält von Nutzendenden getestete und empfohlene Setups.

Das Smartphone sollte regelmäßig Sicherheitsupdates erhalten und stets auf der aktuellen Android-Version gehalten werden. Wenn Du mit AAPS noch nicht sehr vertraut bist oder kein technischer Experte bist, solltest Du mit dem jeweiligen Update warten, bis andere das Update erfolgreich gemacht haben und in den verschiedenen Foren bestätigt haben, dass es problemlos durchgeführt werden kann.

```{admonition} delaying Samsung phones updates
:class: Warnung
Samsung hält unglücklicherweise einen Rekord an erzwungenen Updates nach denen Bluetooth-Verbindungsprobleme auftreten. Um diese Zwangsupdates zu deaktivieren, musst Du das Smartphone in den „Entwicklermodus“ schalten:
 Gehe zu Einstellungen - Telefoninfo - Softwareinformationen und tippe so lange auf „Buildnummer“, bis die Meldung über den aktivierten Entwicklermodus erscheint. Gehe zurück in die Einstellungen und Du solltest ganz unten einen neuen Eintrag "Entwickleroptionen" finden. Öffne die Entwickleroptionen und scrolle bis zum Punkt "System automat. aktualisieren" und deaktiviere diese Option
```

```{admonition} Google Play Protect potential Issue
:class: Warnung
Es gab einige Meldungen, dass Google Play Protect **AAPS** jeden Morgen willkürlich stoppt. Falls das passieren sollte, kannst Du in den Einstellungen > Sicherheit und Datenschutz > App-Sicherheit, "Google Play Protect" ausschalten. Nicht alle Smartphone-Modelle oder Android-Versionen sind davon betroffen.
```

