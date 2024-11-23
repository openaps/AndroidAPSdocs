# Full Closed Loop

## Full vs. Hybrid Closed Loop (FCL, HCL)

### Definitionen

Im **Hybrid Closed Loop** hast Du mindestens einen Bolus vor den Mahlzeiten abgegeben. Das hat Deinen Loop oft in eine temporäre Abschaltung (temporäres Null-Basal) und während der stärksten Wirkung des Bolus allgemein in eine Co-Management-Rolle gezwungen.

Zusätzlich hast Du vor den jeweiligen Mahlzeiten Angaben zu den zu essenden Kohlenhydrat-, Fett- und Eiweiß-Mengen gemacht. Darüberhinaus hast Du eine Indikation (meist über die Einstellungen und situationsbezogen auch zu den Mahlzeiten) über die zu angenommene Zeit für die Verstoffwechselung der geschätzen Kohlenhydrate (carb absorbtion time) gemacht.

AAPS ermöglicht auch ein **Full Closed Looping ohne manuelle Bolusgaben** und im sogenannten UAM-Modus (unangekündigte Mahlzeiten) auch ohne Kohlenhydrat-Eingaben.

- **UAM** kann auch im Hybrid-Closed-Looping eingeschaltet werden. In diesem Fall kann der Algorithmus besser mit falschen Kohlenhydrat-Eingaben umgehen.

- Es wird kontrovers diskutiert, ob z.B. für besonders kohlenhydratreiche Mahlzeiten oder für Personen mit bestimmten Essgewohnheiten oder Sensibilitätsschwankungen ein Modus mit kleinen Vor-Bolus-Dosen empfohlen oder sogar erforderlich sein könnte. Das wäre im Grunde genommen ein Hybrid-Closed-Loop ohne Kohlenhydrat-Informationen und daher eine Variante des HCL. Wir halten uns an das FCL wirklich **ohne manuellen Bolus** und, sobald Du Deinen FCL optimiert hast, kannst Du sogar alle „unnötigen“ Schaltflächen am unteren Rand der AAPS-Übersicht löschen.

### Was erwartet mich?

Im Jahr 2022/23 wurde eine erste medizinische Studie durchgeführt und veröffentlicht, die zeigte, dass Patienten mit AAPS im einfachen FCL-Modus vergleichsweise gute Ergebnisse erzielen können:

> 16 Jugendlichen mit Diabetes Typ 1 (HbA1c Spanne 43-75) die seit 9-15 Jahren Diabetes hatten, haben verschiedene Abschnitte eines 3-tägigen Campaufenthalts mit einer modifizierten und gesperrten AAPS Version 3.1.0.3 durchlaufen. **Ergebnisse:** Das System überwachte die Glykämie 95% der Studiedauer und die Zeitspanne unter 3.9 mmol/l hat während des gesamten Studienzeitraums 1 % nicht überschritten (0,72 %). Das HCL-Szenario erreichte einen signifikant höheren Prozentsatz an Zeiten unter 3 mmol/l (HCL 1,05 % vs. MA 0,0 % vs. FCL 0,0 %; P = 0,05) im Vergleich zu anderen Szenarien. **Es wurde kein Unterschied zwischen den Szenarien im Prozentsatz der Zeit zwischen 3,9 und 10 mmol/l beobachtet** (HCL 83,3 % vs. MA 79,85 % vs. **FCL 81,03 %**, P = 0,58) entsprechend dem mittleren Blutzucker (HCL 6,65 mmol/l vs. MA 7,34 mmol/l vs. FCL 7,05 mmol/L, P = 0,28). Es wurde kein Unterschied in der durchschnittlichen täglichen Insulindosis oder in der täglichen Kohlenhydrat-Aufnahme beobachtet. Während des Studienzeitraums trat kein schwerwiegendes unerwünschtes Ereignis auf. **Schlussfolgerungen:** Unsere Pilotstudie zeigte, dass **FCL ein realistischer Behandlungsmodus** für Menschen mit Diabetes Typ 1 sein könnte.

Quelle:

1) ![NationalLibraryOfMedicine](../images/Logo_of_U.S._National_Library_of_Medicine.png) ![PubMed](../images/US-NLM-PubMed-Logo.png) National Library of Medicine, PubMed [First Use of Open-Source Automated Insulin Delivery AndroidAPS in Full Closed-Loop Scenario: Pancreas4ALL Randomized Pilot Study](https://pubmed.ncbi.nlm.nih.gov/36826996/);

2) ![NationalLibraryOfMedicine](../images/Logo_of_U.S._National_Library_of_Medicine.png) ClinicalTrials.gov National Library of Medicine, Clinical Trial [Feasibility and Safety Study of the Automated Insulin Delivery Closed Loop System Pancreas4ALL (ASAP)](https://www.clinicaltrials.gov/study/NCT04835350?term=Feasibility%20and%20Safety%20Study%20of%20the%20Automated%20Insulin%20Delivery%20Closed%20Loop%20System%20Pancreas4ALL%20(ASAP)&rank=1)

Damit Du die versprochene reduzierte tägliche Belastung genießen kannst, musst Du folgendes tun:

- Überprüfe, ob Du alle Voraussetzungen für FCL erfüllst
- Richte ein paar Automatisierungen ein
- Durchlaufe eine Lern- und Abstimmungsphase, in der Du die Einstellungen anpasst, insbesondere die in Deinen Automatisierungen. Die folgenden Vorschläge, leiten Dich durch den Prozess.

### Generelle Überlegungen, warum (nicht) von Hybrid zu Full Closed Loop gewechselt werden sollte

Ein Full Closed Loop System ist **nicht** **für jeden** geeignet:

- Während einige Full Closed Looper mit Automatisierungen einen TIR (70-180) von etwa 90% und einen HbA1c unter 6% erreichen, willst Du vielleicht eine noch engere Kontrolle erreichen. Zugegebenermaßen erfordert **die Minimierung von Werten über 140 mg/dl bei Nahrungsmitteln mit schnellen Kohlenhydraten** vermutlich einen Vorab-Bolus.
- Bist Du bereit für einen achtsamen und gut durchdachten Ansatz hin zu einer hochgradig auf Dich zugeschnittenen Kalibrierung Deines Systems? Die **personalisierte Anpassung** kann **herausfordernd** sein. Wenn Du bereits mit der Feinabstimmung Deiner Basalrate und der Korrekturfaktoren überfordert warst, ist dies definitiv nichts für Dich. Aber wäge es gegen das ab, was Du täglich gewinnen kannst, wenn Du keine Kohlenhydrate mehr zählen musst. Vielleicht empfindest Du das vertiefende Wissen, dass Du bei der Analyse und der Feinabstimmung aus dem Verhalten des Loops nach Mahlzeiten gewinnst, als für Dich wertvoll.
- Während die Handhabung der Mahlzeiten sehr einfach wird, könnte der Umgang mit **Aktivität** etwas schwieriger werden. Das gilt insbesondere, wenn Du - wie die meisten von uns - Dein Körpergewicht unter Kontrolle halten willst und daher die Sport-Snacks begrenzen möchtest.
- Leider gibt es zusätzliche Schwierigkeiten einen Full Closed Loop für **Kinder** einzurichten (siehe hierzu den nächsten Abschnitt über die Voraussetzungen)

## Voraussetzungen für einen Full Closed Loop

Der Hauptanreiz eines Full Closed Loop, liegt darin dem Traum nach einer künstlichen Bauchspeicheldrüse näher kommen zu können. In der Tat verspricht es einen sehr einfachen Alltag. **“Iß einfach!”**

### Gut eingestellter Hybrid Closed Loop

Es ist ratsam, zuerst eine gut abgestimmte Steuerung des Hybrid Closed Loop zu haben, bevor Du den Schritt zum FCL überlegst. Es gibt zwei wichtige Gründe dafür:

- Ein UAM Full Closed Loop braucht eine sehr individuelle Abstimmung der Einstellungen, damit der Loop so Insulin abgibt, wie es DEIN gut laufender Hybrid-Closed-Loop-Modus tut (d. h. er ahmt ihn nach).
- Der UAM Full Closed Loop benötigt (in den Automatisierungen) zusätzliche Parameter, die hinterlegt und abgestimmt werden müssen. Es wäre **problematisch, wenn diese zusätzlichen Parameter hinterlegt und angepasst würden, bevor die Grundlagen "richtig" gelegt sind**. Fehler könnten leicht mit Gegenfehlern ausgeglichen werden. Dies kann in einzelnen Szenarien funktionieren, würde jedoch ein äußerst instabiles System schaffen, das später nur schwer besser zu kalibrieren ist. Die ersten Testenden und auch die oben zitierte Studie, haben davon berichtet, dass Du mit Deinem *FCL* vergleichbare TIR% wie mit Deinem heutigen *HCL* erwarten kannst. Beim Wechsel geht es nicht um Performanz, sondern - nach ein wenig Unannehmlichkeit - um Komfort und Bequemlichkeit: **Der Kerrn der FCL-Methode besteht darin, DIY Automatisierungen für Dich zu erstellen, *Deine Daten*, sowohl *Deines* erfolgreichen HCLs, als auch Deine ersten FCL-Erfahrungen bei der Anpassung der Einstellunge zu analysieren** Es ist kein fertig zu kaufendes Wunderprodukt! Sowohl die Software-Programmierer, als auch die Autoren dieser Dokumentation übernehmen keine Verantwortung. Du musst für Dich selber herausfinden, ob und wie Du die Werkzeuge und deren mögliche Einsatzmöglichkeit nutzt.

### Schnelles Insulin (Lyumjev, Fiasp)

Wenn der Benutzer keine Mahlzeiten-Boli abgibt, wird ein sehr schnelles Insulin benötigt, um dem Loop überhaupt eine Chance zu geben, bei einem beginnenden mahlzeitbedingten Glukosewert-Anstieg den Wert im Zielbereich zu halten (nach üblicher Definition unter 180 mg/dl (10 mmol/l)).

Eine Modellierungsstudie (Details siehe LINK FullLoop V2/March2023; dort Abschnitt 2.2) kann zeigen, dass *schnellere Insuline*

Quelle:

![IEEEControlSystemsMagazine](../images/IEEE_Control_Systems_Society_Logo_RGB.jpg) ![ResearchGate](../images/researchgate-logo-white.svg)



IEEE Control Systems Magazine, ResearchGate [The Artificial Pancreas and Meal Control: An Overview of Postprandial Glucose Regulation in Type 1 Diabetes](https://www.researchgate.net/publication/322866519_The_Artificial_Pancreas_and_Meal_Control_An_Overview_of_Postprandial_Glucose_Regulation_in_Type_1_Diabetes);

- zu signifikant **niedrigeren** Glukose-**Spitzen** führen, als langsamere Insuline
- **tolerieren** ein um ein paar Minuten **verzögerten** ersten Mahlzeiten-Bolus, ohne dabei zu inakzeptable Höhen der Spitzen zu führen
- **minimieren die Auswirkung** auf den Glukose-Spitzenwert **durch unterschiedliche** Kohlenhydratmengen (**Mahlzeitenportionen**).

In der Zusammenfassung: Du solltest einen FCL nur mit Lyumjev oder Fiasp als Insulin nutzen, außer Du ernährst Dich sehr moderat bis hin zu kohlenhydratarm.

Viele Fiasp- oder Lyumjev-Nutzende berichten häufig von **Verstopfungen**, selbst nachdem Nadellänge oder SMB-Abgabegeschwindigkeit verändert wurden. Es scheint sehr wichtig zu sein, ein Auge auf die Zeit zu haben, die eine **Kanüle (oder Pod)** genutzt wird (für viele sind **48 Stunden** ein **Limit**), und auch darauf zu achten, ob schwer zu erklärende Glukose-Anstiege bei immer weiter steigendem „falschen“ IOB auftreten.

Ein Inzidenzmeldung in (LINK, Abschnitt 2.2.) veranschaulicht dieses Problem und zeigt, dass je *einzelner* Verstopfung, Du an diesem Tag leicht 25% TIR verlierst, oder 5% TIR in der Woche, und immer noch 1% TIR im Monat.

### Exzellentes CGM

Du gibst keinen, auf die Mahlzeitengröße angepassten, Bolus mehr ab; damit überlässt Du ALLE "Insulinierungsarbeiten" dem Algorithmus! Da Glukosewerte die Grundlage dafür sind, **informiere Dich bitte gut** darüber, wie **Dein CGM** 1) grundsätzlich funktioniert, 2) ob und wie das von Datenfluss und zwischgescalteten Apps abhängen kann, oder sich zwischen den unterschiedlichen Sensorlaufzeiten unterscheidet, 3) insbesondere, wie und wo sämötliche Glättung erfolgt, und was das für Deine Anpassungen bedeuten könnte, insbesondere dafür, wie ein Delta definiert wird, das ein echter Indikator für einen Mahlzeit-Beginn ist.

Bei Mahlzeiten ist auch eine stabile Bluetooth-Verbindung absolut unerlässlich, damit CGM, Loop und Insulinpumpe ihre Arbeit ohne Zeitverzögerung erledigen können.

Dann, aber noch wichtiger zu allen anderen Tages- und Nachtzeiten, sollte das CGM keine Artefakte (springende Werte) produzieren, die der Loop als Zeichen für den Beginn einer Mahlzeit **fehlinterpretieren** könnte. Bitte beachte, dass auch Kalibrierungen Sprünge verursachen könnten.

Der derzeit beste Weg ist einen Dexcom G5 oder **G6** zu nutzen und sicherzustellen, dass durch das **Überlappen** von Sensoren am linken und rechten Arm und der Transmitternutzung vom Loop immer qualitativ gute Werte verwendet werden können. Andere Wege sind möglich, erfordern jedoch einen erheblichen Kontrollaufwand (über die Smartwatch) und gelegentliche Timouts für den Loop.

### Mahlzeitbezogene Einschränkungen

Das Einrichten eines Full Closed Loop ist für Menschen, deren Ernährung **überwiegend** auf Bestandteile verzichtet, die den **Glukosewert schnell beeinflussen** und deren Mahlzeiten-Gewohnheiten sich wenig zwischen einzelnen Tagen unterscheiden, relativ einfach. Sie müssen sich nicht kohlenhydratarm (Low Carb) ernähren.

Fette oder proteinreiche Ernährung oder langsame Verdauung/Gastroparese machen die Dinge eher einfacher als schwieriger für den Full Closed Loop, weil späte Kohlenhydrate schön die unvermeidlichen "späten Wirkenden" (tails), die durch die zur Spitzenabdeckung benötigten Boli abdecken.

#### Glykämischer Index und Wirkung auf den Blutzucker

Challenge for the UAM mode rises with rising EBG (effect on blood glucose)

- Start moderate/low, and tune your settings. Inly then, "test" meals with high EBG
- Consider a < 50% initial bolus if consuming very high EBG

1) **No EBG**: fresh meat, fish, eggs, bacon, oils, cheese. 2) **Low EBG**: fresh vegetables and berries, mushrooms, nuts, milk, yoghurt, cottage cheese. 3) **Moderate EBG**: whole grain bread/noodles, potatoes, wild rice, oats, dried fruits. 4) **High EBG**: wheat breads, baguette, toast, waffles, cookies, mash potatoes, noodles, rice. 5) **Very High EBG**: (sugar-) sweet drinks, fruit juices, cornflakes, candy, sweets, potato chips, salty pretzel sticks.

![Glykämischer Index und Wirkung auf den Blutzucker](../images/fullClosedLoop01.png)

Die schwierigsten Mahlzeiten sind diejenigen mit ausschließlich sehr hohen und hohen EBG-Komponenten ("Effect on blood glucose"; siehe rot im Bild): Es steigt nicht nur der Glukosespiegel schnell an, sondern es gibt auch nur wenig Fett-/Protein-/Ballaststoffkomponenten, die das unvermeidliche „späte Wirkende“ (tail) der Insulinaktivität, das durch den Versuch einen hohen Glukosespiegel frühzeitig abzufangen entsteht, ausgleichen.

**Unregelmäßiger Konsum von Snacks und süßen Getränken**, die aus schnell resorbierenden Kohlenhydraten bestehen, sind ein Problem.


### Lebensstilbedingte Einschränkungen

#### Technisch stabiles System

Full Closed Looping setzt ein technisch permanent (24x7) stabiles System voraus. Das gilt insbesondere für eine verlässliche **CGM**-Verbindung, aber auch für die **Bluetooth-Verbindung** zur **Insulinpumpe**, und auch das Vermeiden (oder zumindest das rechtzeitige Erkennen) einer Verstopfung. Das kann es erforderlich machen auf Details, wie alle Komponenten in gutem Ladezustand nahe beieinander zu haben, das rechtzeitige Wechseln von Kanülen (oder Pods), um das Risiko einer Verstopfung zu senken und potenziell benötigte Teile immer bei sich zu haben, zu achten. **Abhängig von Deinem System, Deiner Erfahrung damit, aber auch von Deiner Akzeptanz und Deinem allgemeinen Lebenswandel, können diese Aspekte Dich einschränken oder nicht.**

#### Vorbereitung auf Aktivität/Sport

Um sich auf Aktivität/Sport/Training vorzubereiten, ist das normale Vorgehen mit einer Pumpe oder einem **Hybrid** Closed Loop, dafür zu sorgen, das aktive Insulin vor dem Training zu reduzieren.

Mit Deinem **Full Closed Loop**ist der Algorithmus so angepasst, dass er Mahlzeiten erkennt und Dir Insulin gibt, um automatisch Glukoseanstiege abzufangen. Ein hohes temporäres  Ziel und eine sofortige prozentuale Absenkung des Profil (bereits zu Beginn der Mahlzeit wirksam) wäre ein Problem.

Ungewöhnliche Aktivitätsniveaus machen wahrscheinlich eine **disziplinierte Vorbereitung** (besonders **wenn Du den Snack-Bedarf während des Sports gering halten möchtest**) notwendig. In Nächten nach einem aktiven Tag kann es klug sein, ein schwächeres Profil zu behalten und für die Stunden nach dem Abendessen, wenn die Mahlzeit vollständig verdaut ist, ein erhöhtes (>100 mg/dl) Glukoseziel zu setzen, wobei in den AAPS-Einstellungen „Keine SMBs bei erhöhtem Ziel“ ausgewählt ist.

#### Hindernisse für Kinder

Das Einrichten und die Pflege eines FCL für Kinder bringt einige zusätzliche Herausforderungen mit sich, wenn:

- Lyumjev ist nicht verfügbar oder nicht gut verträglich
- Die stündliche Basalrate ist sehr niedrig und bietet damit eine schlechte Grundlage für große SMBs
- Es wird sich süß ernährt. Mit dem typischerweise geringen Blutvolumen eines kleinen Körpers besteht eine starke Tendenz zu sehr hohen Blutzuckerspitzen!
- Durch markante Veränderungen der Insulinsensitivität oder des zirkadianen Musters wird es schwierig, den FCL hinreichend eingestellt zu halten.

Es gibt auch ein paar Eltern und Kinder, die auf diesem Gebiet Pionierarbeit leisten. Dieses Papier hebt Bereiche hervor, die einer gewissen Mindestkonformität erfordern; letztendlich kommt es darauf an, dass die erzielten Ergebnisse zumindest vergleichbar mit dem Stand, den jeder im täglichen Hybrid Closed Loop hatte, vergleichbar sind.

#### Zeitbedarf für die Einrichtung

Zuletzt, bevor Du einen funktionierenden Closed Loop genießen kannst, brauchst Du einige Wochen mit etwas Freizeit und einen "freien Kopf" für die Einrichtung –. Die Frage ist, ob Du in der Zeit, die Du bereit bist zu investieren, die Ergebnisse erreichen kannst, die Du als gut genug empfindest. Abhängig von Deinen „Gewohnheiten“, welche Kompromisse - wenn überhaupt - (wie z. B. Kanülen/Pods öfter zu wechseln, nicht zu essen, wenn der Glukosewert lange hoch ist … ) bist Du bereit zu machen (und das jeden Tag durchzuhalten), für die Erleichterung Mahlzeiten nicht schätzen und dafür bolen zu müssen?

## Aktivierung stärkerer SMBs; Sicherheit

In einem Hybrid Closed Loop sind strenge Sicherheitsbeschränkungen hinsichtlich der Bolusgrößen, die vom Loop automatisch abgegeben werden können, umgesetzt.

In einem Full Closed Loop geben sich Looper keine an die Mahlzeit angepasste Boli mehr.  Damit ist klar, dass die Einschränkung der SMB-Größen verringert (größere SMBs) werden müssen, um den Loop damit in die Lage zu versetzen, ausreichend große SMBs abzugeben.

Da Du das AAPS Master-Release nutzt, wird empfohlen, dass Du in den AAPS Einstellungen den Wert für "SMB Basal-Limit in Minuten für UAM" auf den größten möglichen Wert setzt (maxUAMSMBBasalMinutes=120, d.h. die Insulinmenge für 2 Stunden der aktuellen Basalrate).

> Wenn Du eine sehr niedrige Basalrate hast, könnten die daraus resultierenden SMB-Grenzwerte zu niedrig sein, um eine ausreichende Kontrolle Deiner postprandialen Glukoseanstiege zu ermöglichen. In diesem Fall könnte die Lösung darin bestehen, eine Ernährung mit starken Spitzen zu vermeiden und später auf eine AAPS-Entwicklerversion zu wechseln, die einen neuen Parameter in den SMB-Lieferungseinstellungen anbietet: smb_max_range_extension. Er erweitert das Standardmaximum von 2 Stunden Basal um einen Faktor >1. (Zusätzlich könnte das standardmäßige 50% SMB-Lieferverhältnis in den Entwicklervarianten erhöht werden).

Das Nutzen der maximalen SMB-Größen in der AAPS-Master-Version macht den FCL-Modus in der Folge nicht weniger sicher. Im Gegenteil, Du ersetzt Deinen großen Mahlzeitenbolus durch mehrere kleinere, die Dir Dein Loop geben darf, und das sogar mit einigen Minuten Verzögerung. Dies eliminiert praktisch das Hypo-Risiko in den ersten 1-2 Stunden jeder Mahlzeit. In der dritten und den darauf folgenden Stunden sollte es keinen großen Unterschied geben, denn in HCL und FCL nutzt der Loop denselben Algorithmus.

**Folge der Anleitung**, um AAPS **in die Lage zu versetzen, Deine Art zu bolen mit ein paar SMBs nachzuahmen**.

Schaue von Zeit zu Zeit auf den SMB-Tab, um zu sehen, ob Deine SMBs groß genug sein dürfen, um die notwendige Insulinmenge (insulinReq) so abzugeben, wie es für Deinen Full Closed Loop zu Beginn der Mahlzeit erforderlich ist.

Wenn nicht, werden Deine Tuning-Bemühungen mitunter vergebens sein!

```{admonition} Boosting ISF can become dangerous
:class: danger

Beobachte/analysiere die SMB-Größen, die sich kurz nach dem Mahlzeitenbeginn aus Deinen Einstellungen ergeben, sorgfältig. Verändere in kleinen Schritten und nicht mehr als 1 oder 2 Parameter auf einmal.

Die Einstellungen müssen gut genug für Deine (!) unterschiedlichen Mahlzeiten funktionieren.
```

## Mahlzeitserkennung / Deine Automationen zum Boosten

Für eine erfolgreiches Full Closed Looping ist ISF der wichtigste Tuning-Parameter. Wenn der AAPS Master mit Automationen benutzt wird, muss **bei der Erkennung einer Mahlzeit (über Glukose-Deltas) automatisch eine Profiländerung > 100% ausgelöst** werden damit ein aggressiverer ISF zur Verfügung steht.

AAPS Master erlaubt bis zu 130% temporäres Profil im Hybrid Closed Loop-Modus. Das Boosten des ISF erfolgt in 3 Schritten:

- Schritt 1 ist, den ISF für den Zeitpunkt der Mahlzeit im Profil nachzusehen und zu prüfen, ob z.B. Autosens, das die Insulinsensitivität der aktuellen und der letzten Stunden Deines Körpers betrachtet, eine Anpassung vorschlägt.
- Schritt 2 setzt einen Faktor (1/Profil%, wie in Deiner Automation festgelegt), um den ISF zu boosten.
- Schritt 3 ist eine Überprüfung, ob der vorgeschlagene ISF innerhalb der festgelegten Sicherheitsgrenzen liegt.

### FCL Automationsvorlagen

Oben ankreuzbare Kästchen: Du hast immer die Auswahlmöglichkeiten:

- In der Liste aller Ihrer Automationen kannst Du das Häkchen (links neben jedem Feld) HERAUSNEHMEN => Dies deaktiviert diese Automation.  Du könntest dies beispielsweise für alle frühstücksbezogenen FCL-Automationen tun, um so zum Frühstück auf Hybrid Closed Looping umzusteigen.
- In jeder Automations-Ereignis-Vorlage, kannst Du das Kästchen für **Benutzeraktion** => anhaken. Dann wird die definierte Aktion nicht automatisch, wenn die Bedingungen erfüllt sind, ausgeführt. Stattdessen wird die AAPS-Übersicht Dich immer dann informieren, wenn Dein FCL automatisch einen SMB abgeben würde. Du hast dann die Möglichkeit, dazu dann Ja oder Nein zu sagen. Dies ist in der **Einstellungsphase extrem hilfreich**.                                                                                                                        
  Dieses Feature kann auch im täglichen Gebrauch sehr wertvoll sein. Ein Beispiel wäre, wenn Du das „Aufsteh“-Phänomen (plötzlich steigender Glukosespiegel beim Aufstehen) erkennst, aber eine vollautomatische „Frühstück begonnen“-Reaktion verhindern möchtest.

Der folgende Abschnitt zeigt ausführlich, wie Du eine ganze Reihe von Bedingungen bündeln kannst, um Situationen zu beschreiben, in denen der AAPS Loop die Insulinabgabe erhöhen (oder verringern) sollte.                                                                                                                                      Da der ISF nicht direkt verändert werden kann, wird ein Anheben des Profils auf über 100% das Gleiche bewirken.

### Automatisierte große SMBs bei Glukoseanstieg

Schlüssel zum Erfolg beim Full Closed Looping: **Zu Beginn der Glukoseanstiege nach Mahlzeiten müssen so schnell wie möglich sehr große automatische Boli (SMBs) durch den Loop abgegeben werden**, um das offensichtlich benötigte IOB aufzuholen. (Vergleiche das mit dem verabreichten Bolus für eine ähnliche Mahlzeit im Hybrid Closed Loop!)

Zunächst müssen die **personenbezogenen Daten** (aus Deiner Zeit im Hybrid Closed Loop) analysiert werden, um festzustellen, welche **Deltas** möglicherweise nicht mit Mahlzeiten zusammenhängen und welche sehr sicher darauf zurückzuführen sind.

- Da Du die Automation auch nur in einem vordefinierten Zeitfenster ausführen lassen kannst, musst Du auch nur in diesen analysieren.
- Wenn Deine Mahlzeiten in der Zusammensetzung sehr unterschiedlich sind (z.B. ein eher kohlenhydratreiches Frühstück, aber ein kohlenhydratarmes Mittagessen), kannst Du Dich dafür entscheiden für jedes der Zeitfenster zwei verschiedene Automationen (bzw. Automnationsgruppen) zu erstellen.
- Wenn Du gelegentliche nächtliche Sprünge durch "compression lows" siehst, spare die Nächte aus.
- Normalerweise reicht es aus, das Delta der letzten 5 Minuten zu verwenden.
- Du kannst aber auch eines der durchschnittlichen Deltas verwenden. Durch das Vergleichen der Deltas als Bedingung in Deiner Automation, kannst Du - abhängig davon, ob der Glukosewert schneller steigt oder nicht - sogar unterschiedliche aggressive Aktionen festlegen.

> ( BZ-Unterschied - Kurzes durchschnittl. Delta )>n ist ein Ausdruck, der zur Erkennung eines sich beschleunigenden Anstiegs genutzt werden könnte, um so den ersten SMB beim ersten Anzeichen steigender Glukose auszulösen. - Achtung: Kann nicht bei schlechten oder stark geglätteten CGM-Werten genutzt werden!

Ein CGM mit viel Streuung bringt Dich in eine schwierige Lage, weil Du zur Sicherheit die Definition welches Delta nun genau auf eine beginnende Mahlzeit hinweist "frisieren" musst. Das bedeutet:

- Dein FCL verliert weitere Zeit, was zu größeren Glukosespitzen und niedrigerer TIR-Prozentsätzen führt
- Du kannst im FCL kein früheres oder kleineres Delta, das auch ohne eine Mahlzeit, die SMBs auslösen kann, die benötigt werden, um den händischen Bolus zu ersetzten, benutzen.

Zudem werden schon kleine Anstiege nach einer Mahlzeit durch **wenig IOB** erkannt. Das berücksichtigend, kann eine Automation(#1) für ein Abendessen wie folgt aussehen:

![8mg jump 130% ioby4](../images/fullClosedLoop02.png)

Automation #1

Wenn die Bedingungen zutreffen, wird der Loop in den nächsten 12 Minuten ein bis zwei SMB mit einem geboosterten ISF, wie er sich aus dem erhöhten Profil ergibt, abgeben (im Beispiel ein um 30% erhöhtes "insulinReq"). Solange diese Bedingungen zutreffen, wird die Automatisierungsregel um weitere 12 Minuten verlängert. Eine kohlenhydratarme Mahlzeit könnte langsamere Anstiege der Glukosewerte zeigen. Dieser würde von einer weiteren Automation (#2) profitieren, die bei einem niedrigeren Delta einsetzt und einen schwächeren Insulin-Boost gibt.

![>=5mg jump 115%, iob<5.5](../images/fullClosedLoop03.png)

Die gleiche Automation wird wahrscheinlich auch bei Mahlzeiten mit höherem Kohlenhydratgehalt greifen, sobald der steile Anstieg, wie in Automation#1 definiert, vorbei ist.

Diese beiden (und eventuell eine dritte) Automation musst Du passend machen, damit sie zu dem passen, was Du bei Deinen verschiedenen Mahlzeiten siehst => die richtigen Sprunghöhen, IOB-Kriterien und Verstärkungen zu setzen, wird ein iterativer Abstimmungsprozess.  Wenn Du einen geeigneten Zeitraum in den Bedingungen angibst, kannst Du ganz einfach unterschiedliche Automationen für Deine verschiedenen täglichen Mahlzeitenzeiten (Frühstück, Mittagessen, Abendessen) ausführen.

Berücksichtige bitte, dass noch in der Steigphase (!), ein IOB-"Überschuß" verhindert werden muss, damit das nach 3-5 Stunden noch wirkende **Insulin** (das "**Wirkende**" (sog. tail)) nicht die durch das Zero-Temping mögliche Abbremswirkung  überschreitet ("Basal entziehen", um das Hypo-Risiko zu reduzieren).

Bei großen Mahlzeiten gibt es **manchmal einen zweiten Anstieg**. Bis zu diesem Zeitpunkt hat sich das aktive Insulin (IOB) in der Regel schon verringert und die aggressiveren Automationen greifen wieder. (Damit das nicht passiert, überprüfe, dass die IOB-Bedingung in der Automation #2 nicht zu niedrig eingestellt ist).

Kurz nachdem einige erste SMBs abgegeben wurden, kommt eine **balancierte Phase**, in der eine moderate zusätzliche Insulinabgabe die zusätzliche aufgenommenen Kohlenhydrate abdecken sollte. (Außer bei kohlenhydratarmen Mahlzeiten, bei denen der Loop möglicherweise einen zu schwachen Glukoseanstieg sieht und sofort in das Zero-Temping geht).

Die AAPS Übersicht (dort wo Du im UAM Full Loop immer COB = 0 siehst) kann in dieser Phase zur Aufnahme zusätzlicher Kohlenhydrate auffordern. Im UAM-Modus bedeutet das einfach, dass Du eine sehr grobe Plausibilitätsprüfung durchführen kannst: Ist es wahrscheinlich, dass diese Kohlenhydrate der Mahlzeit von vor einer Stunde unverdaut in Deinem Körper sind (von denen Du dem Loop nichts mitgeteilt hast)?


### IOB-Schwellenwert

Oft bewirken die Automationen #1 und/oder #2, dass das IOB soweit aufgebaut wird, dass es typischerweise **Deine** Mahlzeiten abdeckt. Für eine individuelles Tuning, schau in den Daten Deines Hybrid-Closed-Loop nach den maximalen IOB-Werten (max IOB), die bei gut kalkulierbaren Mahlzeiten auftreten (meist: Dein Mahlzeiten-Bolus), und in welchem Ausmaß danach eine Hypo (oder der Bedarf an zusätzlichen Kohlenhydraten) auftrat.

Sensible **IOB-Schwellwerte**, bei denen Du die Aggressivität Deines Loops reduzieren solltest, sind möglicherweise nicht für jede Mahlzeit identisch. Aber besonders in der ersten Stunde nach dem Essen, die im UAM-Modus sehr entscheidend ist, unterscheiden sich diese Daten für mich nur wenig: Es werden nur etwa 30g pro Stunde aufgenommen, und es kann möglich sein ein IOB, das unabhängig von der genauen Mahlzeit ist, zu bestimmen.

Der IOB-Schwellwert kann in Deiner Automatisierung schnell angepasst werden, um auch außergewöhnliche Mahlzeiten abzudecken oder um ihn für eine folgende Sporteinheit zu senken.

Automation(#3),”IOB-Schwellwert erreicht => SMBs aus”, wird definiert, um das aggressive SMB-Boosting zu beenden (oder zu unterbrechen, bis eine weitere Welle des kohlenhydratbezogenen Anstiegs kommt).

![iob >5.5...111 TT = SMBs off 16m](../images/fullClosedLoop04.png)

Automation #3

Sie sagt dem Loop, dass es besser ist über dem von Dir festgelegten **IOB-Schwellwert** keine weiteren SMBs abzugeben

- Das gegebene Beispiel tut dies, indem TT=111 gesetzt wird (was irgendwie willkürlich ist; wähle einen Wert >100, den Du leicht als Deine automatische SMB-Abschaltung erkennst)
- Deaktiviere in den AAPS Einstellungen die Option "Aktiviere SMB bei temporären Zielen oberhalb des regulären Ziels".                                                                                                                   
  Das benötigte Insulin (insulinReq) muss dann - da dann die TBR zum Flaschenhals wird - viel vorsichtiger zur Verfügung gestellt werden

**Achtung: Automation #3 funktioniert nur, wenn kein aktives TT gesetzt ist.** Falls Du also mit einem temporären Ziel "Bald Essen" gearbeitet hast, muss dieses bis zum Start der Automation beendet sein (d. h. normalerweise 30-40 Minuten nach Beginn der Mahlzeit).

Eine Idee, dies zu automatisieren wäre, eine Automatisierung zu erstellen, die ein möglicherweise laufendes "Bald Essen"-TT beendet, wenn Iob >>65% * iobTH ist.
> Möglichkeiten ein "Bald Essen"-TT zu nutzen Um zu Mahlzeitbeginn einen niedrigen Ausgangs-Glukosewert und ein wenig aktives Insulin (IOB) zu haben, stellen einige Looper durch drücken der "Bald Essen"-Schaltfläche (oder bei verlässlichen Essenszeiten: automatisch über ein reduziertes Profil-Glukoseziel) mindestens eine Stunde vor Beginn der Mahlzeit ein "Bald Essen"-TT ein. Aber, unter der Annahme, dass der FCL sowieso immer auf dem Weg zum Ziel ist, könnte dies nicht viel bringen und Du kannst stattdessen einfach eine Automatition definieren, die beim Erkennen des Mahlzeitenbeginns (Glukose-Delta oder Beschleunigung = Delta > Durchschnitts-Delta) ein "Bald Essen"-TT setzt. Ein niedriges temporäres Ziel ist in dieser Phase wichtig, da jeder SMB des Loops durch (vorhergesagter Glukose minus temporäres Ziel)/Sensititvität berechnet wird. Damit erhöht ein niedriges temporäres Ziel den daraus resultierenden Insulinbedarf (insulinReq).

Nachdem die ersten geboosterten SMBs abgegeben wurden, sollte Dein eingestellter iobTH und die Automation #3 ein gutes Gleichgewicht zwischen der Begrenzung des Glukosespitzenwertes und dem Verhindern einer Hypo nach der Mahlzeit finden.

Falls sich beispielsweise Dein Frühstück kohlenhydratmäßig vollständig von Deinen durchschnittlichen Abendessen unterscheidet, kanst Du von Automationen, die zu den jeweiligen Tageszeiten gelten und unterschiedliche iobTH-Werte haben (möglicherweise auch unterschiedliche Deltas und unterschiedliche prozentuale Profileinstellungen), profitieren. Sowohl Du mit der Definition Deines Essensspektrums und Einstellungen (insbesondere iobTH), als auch der Loop, der sich um den sich entwickelnden Glukoseverlauf kümmert, müssen bestimmte hohe Spitzen akzeptieren, um die Hypo-Gefahr gegen Ende der Insulinwirkdauer der SMBs zu reduzieren.

### Stagnierende hohe Glukosewerte

Falls nach einer „reichhaltigen“ Mahlzeit ein lang anhaltender **hoher Glukosespiegel** auftritt, hilft die Automatisierung #6 (unten links), „Hoch nach dem Essen“ mit der Fettsäureresistenz umzugehen: Nach mehrgängigen Mahlzeiten, einer großen fettigen Pizza oder einem Raclette-Abend könen sich in der Glukosekurve zwei Höcker oder sehr oft auch ein längeres hohes Plateau zeigen.

![iob >5.5...111 TT = SMBs off 16m](../images/fullClosedLoop05.png)

Automation #4

![iob >5.5...111 TT = SMBs off 16m](../images/fullClosedLoop06.png)

Automation #5

Automation #4, “Hoch nach dem Essen”, ist auch für einen Hybrid Closed Loop anwendbar

Außerdem muss die Automation#5 abgebrochen werden können ("Stopp Hoch nach dem Essen"), damit die Insulinabgabe bei einem sinkenden Glukosewert weniger aggressiv erfolgt. (Allerdings wird der Loop, bei einem niedrigen erwarteten Glukosewert oft ohnehin schon die Insulinabgabe reduzieren bzw. begrenzen).

### Einer Hypo vorbeugen

Das Kernproblem hier ist natürlich, dass der UAM-Full-Closed-Loop (ohne die Eingabe der Kohlenhydrate) **nicht wissen kann, wie viele Gramm an Kohlenhydraten für die Aufnahme noch verfügbar sind**, und möglicherweise das "Rest"-Insulin aufbraucht, ohne dass Du in eine Hypo kommst.

Über die geboosterten SMBs holt der Loop das nach, was wir früher mit einem Mahlzeitenbolus gemacht haben. Aber **zum Ende der Insulinwirkung ("tail end") kann das Vermeiden einer Hypo zu einem ernsten Thema werden**.

In Vorbereitung auf Deine Full Closed Loop Automationen, musst Du daher auf den **zeitlichen Iob-Verlauf** einer typischen Mahlzeit schauen und beurteilen **wann es zu viel wird und wie Du dem mit einer Feinabstimmung Deiner Automation begegnen kannst**. Da wir einige Stellschrauben haben, gibt es hier auf jeden Fall Möglichkeiten. Der Weg zu den "richtigen" Einstellungen, die für die Vielzahl Deiner Mahlzeiten funktionieren, kann ein wenig "knifflig" sein.

Im Allgemeinen macht es keinen Sinn, Einstellungen nur für eine Mahlzeitenart weiter zu optimieren. Sobald Du eine ausreichend gute Einstellung z.B. für eine Art Deines Mittagessens hast, teste, wie diese mit anderen Arten funktioniert, und wie Du einen „Kompromiss“ findest.

Um Hypos 3-5 Stunden nach einer Mahlzeit zu vermeiden, reduziere die Aggressivität, bevor zu viel aktives Insulin (IOB) aufgebaut wird. Besondere Ansätze:

- Schwäche den ISF schon, so wie es in den Automationsbeispielen #1 und #2 gemacht wird, während des Glukoseanstiegs immer weiter ab.
- Lege den IOB-Schwellwert, ab dem der Loop deutlich vorsichtiger gemacht wird (s. Automatisierung #3 oben), fest. Berücksichtige, dass dieses IOB durch den letzten SMB überschritten werden kann, bevor dessen Wirkung eingetreten ist; und dann weiter: durch temporäre Basalraten (TBR), wenn der Loop insulinReq analysiert. Kohlenhydrate, die verstoffwechselt werden für einen Gegeneffekt sorgen (Verringerung des IOB).
- Der IOB-Schwellwert könnte je nach Mahlzeiten unterschieldich sein: Durch das Klonen der Automationen kannst Du ganz einfach für Frühstück, Mittag- und Abendessen (oder sogar für spezielle Geo-Standorte wie die Firmenkantine oder bei der Schwiegermutter usw.) differenzieren   
  > Innerhalb dieser Zeitfenster kannst Du noch weiter differenzieren, indem Du unterschiedliche temporäre Ziele für kohlenhydratarm vs. schnelle Kohlenhydrate, usw. festlegst und damit in der Lage bist, unterschiedliche auftretende Essenkategorien zu "kodieren" und diese mit speziell darauf abgestimmten Automationen abzurufen. (Wenn Deine Essengewohnheiten weniger variabel sind, ist das vermutlich gar nicht notwendig).

Vor einer besonders herausfordernden Mahlzeit, kannst Du innerhalb weniger Sekunden Deinen IOB-Schwellwert heraufsetzen oder andere Anpassungen in Deinen Automationen direkt über die AAPS-Übersicht machen (je nachdem wie Du es konfiguriert hast: das Hamburger Menü oben rechts oder den AUTOMATION-Reiter).

Die Gefahr einer Hypo einge Stunden nach dem Essen ist im Wesentlichen eine Frage, ob Deine Mahlzeit-Zusammensetzung so war, dass die **Insulinrestwirkungen ("tails"), die gegen den Großteil der Kohlenhydrate ankämpfen**, von **"verlängerten Kohlenhydraten" verbraucht ** werden (übermäßige/verzögerte Kohlenhydrataufnahme/Protein/Fett/Ballaststoffe).

Im Laufe der Zeit wirst Du Muster erkennen, Deine Automatisierungen adjustieren - vielleicht sogar Deine Essgewohnheiten ein wenig anpassen, z.B. einfach einen gelegentlichen kleinen(!) Snack genießen, der helfen kann, eine gute **Balance zwischen Insulinaktivität und Kohlenhydratabsorption** für die **gesamte** Dauer der Mahlzeit (mit Verdauung, Absorption) zu halten und so das Leben Deines Loops (und für Dich selbst) einfacher zu machen.

### Reihenfolge der programmierten Automationen

Es können Probleme mit sich überschneidenden Definitionen bei Automationen auftreten. Beispiel: Das Problem ist, dass Delta >8 auch Delta >5 ist, d. h. es können zwei konkurrierende Automationen existieren. Was macht der Loop in diesem Fall? Er entscheidet immer nach der Sortierung Deiner Automatisierungen in der entsprechenden Ansicht (Hamburger-Menü/AAPS-Übersicht).  Beispiel: Die Delta > +8-Regel muss als erstes ausgeführt werden (und startet, wenn alle Bedingungen zutreffen den stärksten Boost); danach folgt die Überprüfung auf Delta >5 (und eine sanftere Reaktion). Würden sie anders herum sortiert und ausgeführt werden, würde die Delta >8-Regel nie in Kraft treten, weil bereits Delta >5 angewendet wird, Fall abgeschlossen.
> Tipp für den "Hausputz" bei Deinen Automationen: Die Reihenfolge kann sehr einfach geändert werden. Wenn Du auf einen Listeneintrag in den AAPS/Automationen drückst, kannst Du die betreffende Automation an eine andere Stelle verschieben. So kannst Du sie schnell (neu-)anordnen.

Genauso schnell und einfach kannst Du Auslöser oder Aktionen binnen weniger Sekunden auf Deinem AAPS-Smartphone anpassen; wenn Du beispielsweise an einem besonderen Essens-Event teilnimmst. (Aber vergiss nicht, sie für den nächsten Tag wieder auf "normal" zu setzen).

## Troubleshooting

### Wie man wieder in den Hybrid Closed Loop zurückkehrt

Du kannst die oberen Kästchen in den FCL-bezogenen Automationen abwählen und wieder mit Mahlzeiten-Boli und der Eingabe von Kohlenhydraten beginnen.  Möglicherweise musst Du in die AAPS Einstellungen/Übersicht-Einstellungen/Schaltflächen gehen und Deine Schaltflächen für 'Insulin, Rechner...'  zurück auf Deine AAPS-HCL-Übersicht bringen. Ab jetzt bist Du wieder selber für das Bolen der Mahlzeiten verantwortlich.

Es kann auch sinnvoll sein, den FCL nur für Mahlzeiten (Zeiträume) zu aktivieren, in denen Automationen auch vollständig definiert sind. Wähle die Automationen für die anderen Essenszeiten (oder für die Du in der Übergangsphase noch keine definiert hast) und in denen Du den Hybrid Closed Loop haben möchtest, ab.

Nachdem Automationen für Abendessenzeiten erstellt sind, ist es beispielsweise ohne Zusatzaufwand möglich, einen FCL nur für das Abendessen zu haben, während zu Frühstücks- und Mittagessenzeiten wie gewohnt ein Hybrid Closed Loop läuft.


### Sind die Voraussetzungen für einen FCL immer noch gegeben?

- Ist das Grundprofil noch korrekt?
- Ist die CGM-Qualität schlechter geworden
- usw. (vgl. Abschnitt Voraussetzungen)

### Glukosewerte steigen zu weit an

- Mahlzeiten werden nicht sofort erkannt
    - Prüfe die Bluetooth-(In)Stabilität
    - Prüfe, ob Du kleinere Deltas zum Auslösen des ersten SMB festlegen kannst
    - Experimentiere mit einem Aperitif, einer Suppe einige Minuten vor der eigentlichen Mahlzeit
- SMBs sind zu schwach
    - Prüfe die Reihenfolge der Automationen (z. B.: großes Delta vor kleinem Delta)
    - Prüfe in Echtzeit den SMB-Tab, ob die Profilbasalrate und die Basallimit-Minuten (max. 120) eine SMB-Größe zulassen
    - Überprüfe in Echtzeit den SMB-Tab, ob der Prozentsatz der Profilanpassung erhöht werden muss
- Wenn alle Deine Einstellungen das Limit erreicht haben, wirst Du möglicherweise mit den vorübergehend hohen Werten leben oder Deine Ernährung anpassen müssen.
> Wenn Du dazu bereit bist AAPS-Entwicklungsversionen zu nutzen, kannst Du auch eine Version verwenden, die größere SMBs zulässt. Einige Nutzende greifen auch auf einen kleinen Pre-Bolus in ihrem „FCL“ zurück. Das beeinflusst allerdings den Glukoseverlauf und verändern damit die Erkennung der Anstiege und wie sich abgegebene SMBs verhalten und kann damit nicht ohne weiteres aus einer Nutzensicht überzeugen.
- Eine wichtige Erkenntnis von Nutzenden im Piloten war, dass es sehr wichtig ist, wie sich Deine Glukose- und IOB-Kurven dem Beginn der Mahlzeit nähern, um zu bestimmen, wie stark sie durch Kohlenhydrate ansteigen: Das Abfallen (zum Beispiel in Richtung eines temporären Ziels "Bald Essen"), der Aufbau von etwas IOB und eine bereits begonnene positive Beschleunigung, scheinen zu helfen, die Spitzen niedrig zu halten.

### Glukosewerte fallen zu weit ab

- Mahlzeiten werden fälschlicherweise erkannt
    - Prüfe, ob Du größere Deltas zum Auslösen des ersten SMB festlegen kannst
    - Klicke auf „Benutzeraktion“ in der entsprechenden Automation, damit Du zukünftig spontan entscheiden kannst, die Automation auszuführen oder zu blockieren, wenn sie nicht auf eine Mahlzeit zurückzuführen sind
    - Damit Snacks keine SMBs, wie für eine volle Mahlzeit, auslösen, setze ein temporäres Ziel > 100, wenn Du snackst (so wie Du es auch für Sport und Hypo-Snacks tust)
- SMBs liefern insgesamt zu viel Insulin
    - Prüfe in Echtzeit im SMB-Tab, ob die SMB-Reichweiten-Erweiterung (range extension) verringert werden muss
    - Prüfe in Echtzeit im SMB-Tab, ob der Prozentsatz der Profilanpassung verringert werden muss
    - SMB Lieferquote kann vermutlich verkleinert werden. Als Hinweis: In diesem Fall wirkt sich das auf alle SMBs (und alle Zeitfennster) aus,
- Probleme mit der Insulin-Restwirkung ('tail') nach den Mahlzeiten
    - Du brauchst möglicherweise einen Snack (bei einer Hypo-Vorhersage) oder Glukosetabletten (wenn Du bereits in der Hypo-Zone bist). Aber beachte, dass die benötigten Kohlenhydrate, die der Loop zu einem bestimmten Zeitpunkt angeben wird, zu hoch sein werden. Der Loop hat keinerlei Informationen über Deine Kohlenhydrataufnahme (obwohl Du möglicherweise erraten kannst, wie viel mehr, einschließlich der Kohlenhydrate aus Fetten und Proteinen immer noch darauf wartet, verstoffwechselt zu werden).
    - Eine wertvolle Information wäre, ob das Problem hauptsächlich bereits in der Glukose-Anstiegsphase entsteht. Dann könnte eine einfach Lösung sein, iobTH zu verringern.
    - Wenn der Bedarf an zusätzlichen Kohlenhydraten häufig auftritt, notiere Dir, wie viele Gramm benötigt wurden (ohne das, was Du möglicherweise zu viel genommen hast und dann wieder etwas Insulin erforderte).  Nimm dann den in Deinem Profil hinterlegten Korrekturfaktor (IC) und schätze ab wie viel Insulin weniger die SMBs hätten liefern sollen, und gehe mit diesen Informationen in die Nachjustierung (des Profils in den Automatitionen oder vielleicht auch des eingestellten iobTH). Dies kann auf die SMBs zurückzuführen sein, die abgegeben wurden, als der Glukosespiegel bereits hoch war, oder auch auf die SMB-Phase während des Glukoseanstiegs.
    - Es könnte gut sein, dass Du höhere Glukosespitzen zum Vermeiden einer Hypo akzeptieren musst. Oder stelle Deine Ernährung auf kleinere Kohlenhydrat- und höhere Fett- und Proteinmengen um.


### Weitere Informationen

Stelle sicher, Dich mit anderen FCL-Benutzenden ständig auszutauschen.

Diskussion Full Closed Loop mit Automatisierungen:

- English:   [Discord Channel](https://discord.gg/ChXj8BaKwA)

- Deutsch:  [German Looper Community](https://de.loopercommunity.org/t/ueber-die-kategorie-full-loop/10107)
