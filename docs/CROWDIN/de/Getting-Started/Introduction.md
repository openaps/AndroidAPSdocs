# Einführung in APS und AAPS

## Was ist eine "künstliche Bauchspeicheldrüse” (artifical pancreas system)?

Eine menschliche Bauchspeicheldrüse übernimmt neben der Regulierung des Blutzuckers noch viele andere Dinge im Körper. Der Begriff **„künstliche Bausspeicheldrüse“ (APS)** beschreibt üblicherweise ein System, dass den Blutzuckerspiegel automatisiert im gesunden Bereich hält.

Die einfachste Art dies zu tun ist, den **Glukosewert** zu nutzen, um damit **Berechnungen** vorzunehmen und dann eine vorberechnete **Insulin**menge in den Körper abzugeben. Diese Berechnung wird alle paar Minuten wiederholt, Tag und Nacht (24/7). Es nutzt **Alarme** und **Benachrichtigungen**, um die Benutzenden auf notwendige Eingriffe oder Besonderheiten hinzuweisen. Dieses System besteht normalerweise aus einem **Glukose-Sensor**, einer **Insulinpumpe** und einer **App** auf einem Smartphone.

Dieser in 2022 veröffentlichte Artikel, gibt einen Überblick über die derzeit verfügbaren Artificial Pancreas Systeme (künstlichen Bauchspeicheldrüsen):

![Frontiers](../images/FRONTIERS_Logo_Grey_RGB.png) [Ausblick auf die Closed-Loop Technologie](https://www.frontiersin.org/articles/10.3389/fendo.2022.919942/full#:~:text=Fully%20closed%2Dloop%20systems%2C%20unlike,user%20input%20for%20mealtime%20boluses).

In naher Zukunft werden einige sogenannte Dual-Hormon-Systeme neben Insulin auch Glucagon zuführen können. Das Ziel dabei ist es, schwere Hypos zu verhindern und eine noch engere Blutzuckerkontrolle zu ermöglichen.

Eine künstliche Bauchspeicheldrüse kann man sich als [„Autopiloten für Deinen Diabetes“](https://www.artificialpancreasbook.com/) vorstellen. Was soll das heißen?

In einem Flugzeug erledigt ein Autopilot einen Teil der Arbeit des menschlichen Piloten, der Pilot kann nicht durch den gesamten Flug schlafen. Der Autopilot unterstützt die Arbeit des Piloten. Er entlastet ihn von der permanenten Überwachung des Flugzeugs, sodass sich der Pilot von Zeit zu Zeit auf eine umfassendere Überwachung konzentrieren kann. Der Autopilot bekommt Informationen von verschiedenen Sensoren, ein Computer wertet diese aus und vergleicht sie mit den vom Piloten vorgegeben Grenzen und nimmt dann die notwendigen Anpassungen vor. Der Pilot muss damit nicht ständig Entscheidungen treffen und wird auf diese Weise entlastet.

![grafik](../images/autopilot.png)

(Introduction-what-does-hybrid-closed-loop-mean)=
## Was bedeutet „Hybrid-Closed-Loop“?

Die beste Lösung für Typ-1-Diabetes wäre eine „funktionale Heilung“ (wahrscheinlich die Implantierung von Bauchspeicheldrüsenzellen, die vor der Immunabwehr geschützt sind). Während wir darauf warten, ist eine „full closed Loop" künstliche Bauchspeicheldrüse wahrscheinlich das nächstbeste. Dies ist ein Technologiesystem, das keine Benutzereingabe benötigt (wie z. B. Mahlzeitenbolus abgeben oder körperliche Aktivität "ankündigen"), um eine gute Blutzucker-Kontrolle zu erreichen. Derzeit gibt es noch keine für die Allgemeinheit verfügbaren Systeme, die „full closed loop" sind. Alle benötigen noch Benutzereingaben. Die aktuell verfügbaren Systeme werden als "hybrid closed loop" bezeichnet, da sie eine Kombination aus automatisierter Technik und Benutzereingaben nutzen.

## Wie und warum ist das Loopen begonnen worden?

Die Entwicklung kommerzieller Technologien für Menschen mit Typ-1-Diabetes (T1D) ist sehr langsam. 2013 gründete die T1D Community die #WeAreNotWaiting Bewegung. Diese Bewegung entwickelte Systeme, die bestehende und bewährte Technologie (Insulinpumpen und Sensoren) nutzt, um die Blutzucker-Kontrolle und auch die Lebensqualität zu verbessern. Da sie nicht formell von Gesundheitsbehörden (FDA, NHS usw.) zugelassen sind, werden sie auch als DIY (do-it-yourself) Systeme bezeichnet. Prinzipiell gibt es 4 Do-it-yourself-Systeme: [OpenAPS](https://openaps.org/what-is-openaps/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) und [iAPS](https://github.com/Artificial-Pancreas/iAPS?fbclid=IwAR2fA9Y9YqYzpKSrtEsotfXl5b67UclDkKgyrv52tQLzYbOoBeNGRmjlJJI).

Um die Grundlagen des DIY-Loopen zu verstehen, ist Dana Lewis’ Buch „Automated Insulin Delivery“ ein hervorragender Einstieg. Es ist [hier](https://www.artificialpancreasbook.com/) frei erhältlich (oder man kauft sich ein echtes Buch davon). Wenn Du mehr über [OpenAPS](https://openaps.org/what-is-openaps/), aus dem sich **AAPS** entwickelt hat, dann ist die [OpenAPS Website](https://openaps.org/what-is-openaps/) eine hervorragende Quelle.

Diverse kommerzielle Hybrid-Closed-Loop-Systeme wurden auf den Markt gebracht, zuletzt [CamAPS FX](https://camdiab.com/) (UK und EU) und [Omnipod 5](https://www.omnipod.com/en-gb/what-is-omnipod/omnipod-5) (USA und EU). Diese unterscheiden sich von den DIY-Systemen zum Teil erheblich, da sie "lernende Algorithmen" nutzen. Diese Algorithmen berücksichtigen auch den Insulinbedarf der vorangegangenen Tage für die Berechnung aktueller Insulingaben. Viele Menschen der DIY-Community haben Erfahrungen mit den kommerziellen Systemen gemacht, und können diese mit den DIY-Systemen vergleichen. Du kannst mehr über den Vergleich der verschiedenen Systeme erfahren, indem Du in den speziellen Facebook-Gruppen für diese Systeme nachfragst, in der [AAPS Facebook Gruppe](https://www.facebook.com/groups/AndroidAPSUsers/) oder auf [Discord](https://discord.com/invite/4fQUWHZ4Mw).

## Was ist Android APS (AAPS)?

![grafik](../images/basic-outline-of-AAPS.png)

**Abbildung 1**. Grundstruktur des Android APS (Artificial Pancreas System), AAPS.

Android APS (**AAPS**) ist ein Hybrid-Closed-Loop-System oder eine "künstliche Bauchspeicheldrüse" (Artificial Pancreas System = APS). Es berechnet benötigte Insulinmengen, indem es bewährte [OpenAPS](https://openaps.org/)-Algorithmen (Berechnungsvorschriften) verwendet, die von der #WeAreNotWaiting Typ 1 Diabetes Community entwickelt wurden.

Da OpenAPS nur mit bestimmten älteren Insulinpumpen kompatibel ist, wurde **AAPS** (das mit einer breiteren Palette von Insulinpumpen verwendet werden kann) 2016 von Milos Kozak für ein Familienmitglied mit Typ-1-Diabetes entwickelt. Seit diesen frühen Tagen wurde **AAPS** durch ein Team von freiwilligen Computerentwicklern und anderen Enthusiasten kontinuierlich weiterentwickelt und verfeinert. Viele dieser Personen haben einen Bezug zur Welt des Typ-1-Diabetes. Heute wird **AAPS** von rund 10.000 Personen genutzt. Das System ist sehr flexibel und anpassbar. Dadurch, dass es System Open-Source ist, ist es auch problemlos mit viel anderer Open-Source-Diabetes Software und vielen Plattformen kompatibel. Die grundlegenden Komponenten des gegenwärtigen **AAPS**-Systems werden oben in **Bild 1** dargestellt.



## Was sind die Grundbestandteile von AAPS?

Das „Gehirn“ von AAPS ist eine **App**, die Du selber erstellen ("bauen") musst. Es gibt für dieses Erstellen sehr detaillierte Schritt-für-Schritt-Anleitungen. Du installierst die **AAPS-App** auf einem [kompatiblen](../Getting-Started/Phones.md) **Android-Smartphone** (**1**). Eine Reihe von Nutzenden bevorzugt es, den "Loop" auf einem separaten Smartphone zu haben und es nicht auf ihrem eigentlichen Haupttelefon. Damit ist es dann auch möglich, Dein bestehendes Systemumfeld (z.B. iOS) weiterzunutzen, und nur für AAPS ein Android-Smartphone zu nutzen.

Das **Android Smartphone** benötigt außer **AAPS** noch eine weitere App. Diese [zusätzliche App](../Getting-Started/CompatiblesCgms.md) empfängt über Bluetooth die Glukosewerte von einem Sensor (**2**) und sendet sie dann im Smartphone an die **AAPS-App**.

Die **AAPS-App** verwendet einen Entscheidungsprozess (**Algorithmus**) von OpenAPS. Neulinge starten mit dem Basis-Algorithmus **oref0** und können mit zunehmender Erfahrung auf den neueren **oref1**-Algorithmus wechseln. Welcher Algorithmus (oref0 und oref1) gewählt werden sollte, hängt stark von Deiner persönlichen Situation ab.  Beim Eintreffen eines neuen Sensorwerts, berücksichtigen beide Algorithmen mehrere Faktoren bei der dann ausgeführten Neuberechnung. Per Bluetooth sendet dann der Algorithmus die Befehle, wieviel Insulin benötigt wird, an die Insulinpumpe (**3**). Sämtliche Informationen können als mobile Daten oder per WLAN ins Internet gesendet werden (**4**). Diese Informationen und Daten können mit Followern (wenn nötig) geteilt werden und/oder für Datenanalysen ausgewertet werden.

## Welche Vorteile hat das AAPS-System?

Der von **AAPS** verwendete OpenAPS-Algorithmus steuert den Blutzzuckerspiegel automatisch auf Basis der vom Nutzenden hinterlegten Parameter (u.a. Basalrate, Korrekturfaktoren, Mahlzeitenfaktoren, Insulinwirkdauer). Für einige Patienten und Betreuende liegen die Stärken von AAPS insbesondere in der möglichen Feinabstimmung, den Automatisierungen und der erhöhten Systemtransparenz (Nachvollziehbarkeit). Das kann zu einer besseren Kontrolle Deines Diabetes (oder des Deines Angehörigen), was wiederum zu einer besseren Lebensqualität und einem ruhigeren Alltag führt.

### **Besondere Vorteile sind:**

#### 1) Eingebaute Sicherheit
Um Dich über die Sicherheitsfunktionen der Algorithmen, bekannt als oref0 und oref1, zu informieren, [klicke hier](https://openaps.org/reference-design/). Der Benutzer hat die Kontrolle über seine eigenen Sicherheitsanforderungen.

#### 2) **Flexibilität bei der Hardware**

**AAPS** funktioniert mit einer Vielzahl an Insulinpumpen und Sensoren. Solltest Du z.B. eine Allergie auf ein Dexcom-Pflasterkleber entwickeln, kannst Du ohne größere Probleme auf einen Libre-Sensor umsteigen. Das System kann so Deinem Leben und geänderten Bedingungen angepasst werden. Mit anderer Hardware musst Du die **AAPS**-App weder neu bauen noch erneut installieren. Setze einfach ein neues Häkchen in der App. AAPS ist unabhängig von bestimmten Pumpentreibern und enthält auch eine "virtuelle Pumpe", so dass die Benutzer gefahrlos experimentieren können, bevor sie es an sich selbst anwenden.

#### 3) **Hochgradig anpassbar, mit umfangreichen Parametern**

Benutzer können einfach Module oder Funktionen hinzufügen oder entfernen und **AAPS** kann sowohl im Modus Open Loop, als auch im Modus Closed Loop verwendet werden. Hier einige Beispiele für die Möglichkeiten mit dem **AAPS** System:

 a) Die Möglichkeit, vor dem Essen ein niedrigeres BZ-Ziel für 30 min zu setzen; Du kannst das Ziel auf 72 mg/dl (4,0 mmol/l) festlegen.

 b) Wenn Du z.B. aufgrund von Insulinresistenz hohe Glukosewerte hast, kannst Du in **AAPS** eine **Automatisierung** erstellen und aktivieren, die bei einem Glukosewert über 144 mg/dl (8 mmol/dl) einen Profilwechsel auf 120 % vornimmt (das führt zu einer Erhöhung der Basalrate um 20 % und einer 20 prozentigen Verstärkung der der anderen Faktoren verglichen mit dem Ausgangs**profil**). Die Automatisierung bleibt für den von Dir angegebenen Zeitraum aktiv. Eine solche Automatisierung kann auch nur in Abhängigkeit von bestimmten Wochentagen, Tageszeiten und sogar vom aktuellen Standort aktiviert werden.

 c) Wenn Dein Kind ohne Vorankündigung beispielsweise auf's Trampolin geht, kann in **AAPS** die Insulingabe (Basalrate) direkt über das Smartphone für einen bestimmten Zeitraum ausgesetzt werden.

 d) Wurde eine Schlauch-Pumpe beispielsweise zum Schwimmen abgekoppelt und wird nun wieder verbunden, berechnet **AAPS** das fehlende Basalinsulin und holt die Basalgabe je nach BZ-Wert vorsichtig nach. Jedes nicht benötigte Insulin kann manuell überschrieben werden, indem man das verpasste Basal einfach „annulliert“.

 e) **AAPS** kann mit mehreren Profilen für unterschiedliche Situationen umgehen und zwischen diesen einfach wechseln. Zum Beispiel kann man Funktionen, die den Algorithmus beschleunigen, um erhöhte BZ-Werte zu senken (wie Supermikro-Bolus („**SMB**“), unangekündigte Mahlzeiten („**UAM**“), nur tagsüber funktionieren lassen, wenn man sich Sorgen um nächtliche Hypos macht.

Dies alles sind Beispiele, das volle Leistungsspektrum bietet große Flexibilität für den Alltag einschließlich Sport, Krankheit, Hormonzyklen _etc_. Es gibt keine Standardlösung für eine solche Automation, sodass es am Ende immer eine individuelle Nutzer*innen-Entscheidung bleibt, wie diese Flexibilität genutzt wird.

#### 4) **Fernüberwachung**
Es gibt mehrere mögliche Überwachungskanäle (Sugarmate, Dexcom Follow, xDrip+, Android Auto _etc._), die in bestimmten Szenarien (Schlafen/Fahren) für Eltern und Erwachsene, die individuell einstellbare Warnungen benötigen, hilfreich sind. In einigen Apps (xDrip+) können Alarme auch vollständig ausschaltet werden. Das ist besonders dann nützlich, wenn ein Sensor frisch gesetzt wurde („soacking“) und/oder die Sensorwerte noch nicht vollständig stabil sind und Du mit diesem Sensor erst später loopen möchtest.

#### 5) **Fernbedienung**
Ein bedeutender Vorteil von **AAPS** gegenüber kommerziellen Systemen ist, dass es für Follower möglich ist, über authentifizierte Texte (SMS) Befehle oder über eine App ([Nachtscout](https://nightscout.github.io/) oder AAPSClient), um eine große Anzahl von Befehlen an das **AAPS** System zurückzuschicken. Das ist eine der durch Eltern von Typ-1 Kindern am häufigsten genutzte Funktionalität in AAPS. Es ist sehr nützlich: zum Beispiel auf dem Spielplatz. Wenn Du einen Snack von Deinem eigenen Telefon aus für einen Vorab-Bolus machen willst, und Dein Kind ins Spielen vertieft ist. Das System kann überwacht werden (_z. B._ Fitbit), grundlegende Befehle senden (_z. B._ Samsung Galaxy Watch 4), oder das gesamte AAPS System kann über eine leistungsstarke Smartwatch (**5**) (_z. B._ LEMFO) vollständig gesteuert werden. In diesem letzten Szenario ersetzt die Full-Android-Smartwatch das Smartphone. Mit zunehmender Batteriekapazität und zuverlässigerer Technik der Smartwatches wird diese Option auch immer attraktiver.

#### 6) **Keine kommerziellen Einschränkungen aufgrund der offenen Anwendungsschnittstellen**
Über die Verwendung eines Open-Source-Ansatzes hinaus kann der Quellcode von **AAPS** jederzeit eingesehen werden, was das allgemeine Prinzip der Bereitstellung offener Programmierschnittstellen ist. Dies gibt anderen Entwicklern die Möglichkeit, ebenfalls neue Ideen einzubringen. **AAPS** ist eng in Nightscout integriert. Dies beschleunigt die Entwicklung und ermöglicht es den Anwendern, Funktionen hinzuzufügen, um das Leben mit Diabetes noch einfacher zu machen. Good examples for such integrations are [Nightscout](https://nightscout.github.io/), [Nightscout Reporter](https://nightscout-reporter.zreptil.de/), xDrip+, [M5 stack](https://github.com/mlukasek/M5_NightscoutMon/wiki) etc. Es besteht ein ständiger Dialog zwischen Open-Source-Entwicklern und den Entwicklern kommerzieller Systeme. Viele der DIY-Innovationen werden schrittweise von kommerziellen Systemen übernommen, wo die Entwicklungen verständlicherweise langsamer sind. Auch weil Schnittstellen zwischen Systemen verschiedener Unternehmen (Pumpen, Apps, Sensoren _usw._) sorgfältig ausgehandelt und lizenziert werden müssen. Dies kann auch Innovationen verlangsamen die für den einzelnen Patienten bequem sind (oder für eine kleine Untergruppe von Patienten mit sehr spezifischen Anforderungen), die aber keinen großen finanziellen Gewinn bringen.

#### 7) **Detaillierte App-Oberfläche**
Mit **AAPS** ist es einfach Dinge wie Insulinstände in der Pumpe, Alter des Katheters, Sensoralter, Pumpenbatterie, Insulin-On-Bord _usw._. Viele Aktionen können durch die **AAPS** App durchgeführt werden (Füllen der Pumpe, Abschalten der Pumpe _etc._), anstatt an der Pumpe selbst, was bedeutet, dass die Pumpe in der Tasche oder am Gürtel bleiben kann.

#### 8) **Zugänglichkeit und Bezahlbarkeit**
**AAPS** bietet Menschen, die es sich derzeit nicht leisten können, sich selbst zu finanzieren, oder die keine Finanzierung/Versicherung haben, Zugang zu einem Hybrid-Closed-Loop-System von Weltklasse, das den kommerziellen Systemen konzeptionell um Jahre voraus ist, was die Entwicklung angeht. Sie benötigen derzeit ein Nightscout-Konto, um **AAPS** einzurichten, obwohl das Nightscout-Konto für den täglichen Betrieb des **AAPS**-Ablaufs nicht erforderlich ist. Viele Menschen verwenden weiterhin Nightscout zur Erfassung ihrer Daten und zur Fernbedienung. Obwohl **AAPS** selbst kostenlos ist, kann das Einrichten von Nightscout über eine der verschiedenen Plattformen eine Gebühr (€ 0 - €12) nach sich ziehen, je nachdem, welche Unterstützung Sie benötigen (siehe Vergleichstabelle) und ob Sie Nightscout nach dem Setup weiter verwenden wollen oder nicht. **AAPS** arbeitet mit einer großen Auswahl an erschwinglichen [Android-Smartphones](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true) (ab ca. €150) zusammen. Verschiedene Versionen sind für bestimmte Standorte und Sprachen verfügbar und AAPS kann auch von [blinden](#accessibility-for-users-aaps-who-are-partially-or-completely-blind) Personen verwendet werden.

#### 9) **Support**
Kein automatisiertes Insulinsystem ist perfekt. Kommerzielle und Open-Source-Systeme sind sich in möglichen Fehler (Übertragungsprobleme und temporäre Hardware-Fehler) ähnlich. Es gibt Unterstützung seitens der Community der AAPS-Nutzer auf Facebook, Discord und GitHub. Hier sind Leute von überall auf der Welt, die an Design und Entwicklung beteiligt waren und solche, die **AAPS** derzeit verwenden. Es gibt auch Facebook-Supportgruppen und Hilfe von Kliniken/Handelsunternehmen für die kommerziellen APS-Systeme - es lohnt sich, mit den Anendern zu sprechen. oder frühere Anwender dieser Systeme, um Feedback zu häufigen Fehlern, zur Qualität des Schulungsangebots und zum Niveau der kontinuierlichen Unterstützung zu erhalten.

#### 10) **Vorhersagbarkeit, Transparenz und Sicherheit**
**AAPS** ist völlig transparent, logisch und berechenbar was es einfacher machen kann zu wissen, wann eine Einstellung falsch ist, und sie entsprechend anzupassen. Du kannst zu jeder Zeit genau sehen, was das System tut, warum es das tut und die Kontrolle wieder in Deine Hand nehmen, indem Du entsprechende Grenzen setzt. Dies schafft Vertrauen und Dir einen erholsameren Schlaf.

#### 11) **Zugriff auf erweiterte Funktionen durch Entwicklungsmodi (dev) einschließlich vollständigem Closed Loop**
Diese **AAPS** Dokumentation konzentriert sich auf die Hauptentwicklung im **“master”**-Branch [in Git] von **AAPS**. Forschung und Entwicklung laufen jedoch ständig. Erfahrene Benutzer können die experimentellen Funktionen im **"development"**-Branch erkunden. Die Neuentwicklungen konzentrieren sich auf Strategien zum vollständigen Closed Loop (ohne Bolus für Mahlzeiten _usw._) und versuchen ganz allgemein, das Leben mit Typ-1-Diabetes so angenehm wie möglich zu machen.

#### 12) **Möglichkeit, sich an weiteren Verbesserungen zu beteiligen**
Diabetes Typ 1 kann sehr frustrierend sein und dazu führen, dass Du Dich alleingelassen fühlst. Seine Diabetes-Technolgie selber unter Kontrolle zu haben und etwas an die Community zurückzugeben ("pay it forward") indem Du andere bei deren Reise unterstützst, kann ein gutes und befriedigendes Gefühl geben. Du kannst Dich selbst weiterbilden, Hindernisse erkennen und auch Deine Beiträge zur Weiterentwicklung und/oder zur Dokumentation leisten. In der Community gibt es andere, die das gleiche Ziel haben und mit denen Du Ideen austauschen und zusammenarbeiten kannst. Dies ist die Grundidee und der Geist von #WeAreNotWaiting.

## Wie unterscheidet sich AAPS von ICT (MDI) und Open Loop?

Die intensivierte konventionelle Insulintherapie (ICT, (a) in **Bild 2** unten - engl. MDI (Multiple Daily Injections)) erfordert die Injektion von Basalinsulin (_z.B._ Tresiba) 1-2 mal am Tag und ein kurz wirksames Insulin (_z.B._ Novorapid, Fiasp) vor den Mahlzeiten bzw. als Korrektur. Open Pumping (b) nutzt eine Pumpe zur Abgabe des schnell wirkenden Insulins in der einprogrammierten Menge als Basalrate, sowie die Abgabe eines Mahlzeiten- und/oder Korrekturbolus. Die Grundlagen eines Looping-Systems sind, dass die Looping-App die BZ-Werte des Sensors verwendet, um die Pumpe anzuweisen, die Insulinlieferung zu stoppen, wenn sie voraussagt, dass Du auf niedrige Werte geraten wirst und Dir zusätzliches Insulin zu geben, wenn die BZ-Werte sich der Voraussage nach einem zu hohen Niveau nähern (c). Obwohl diese Abbildung, im Vergleich zum realen Leben, übermäßig vereinfacht ist, soll sie die wichtigsten Unterschiede der Ansätze zeigen. Mit jedem dieser drei Ansätze ist eine außergewöhnlich gute BZ-Kontrolle möglich.

![21-06-23 AAPS Glukose MDI etc](../images/basic-overview-mdi-open-and-closed-loop.png)


**Abbildung 2**. Prinzipielle Übersicht: (a) ICT (engl. MDI), (b) Open-Loop-Pumping und (c) Hybrid-Closed-Loop-Pumping.

## Wie unterscheidet sich AAPS von anderen Loop-Systemen?

Seit dem 25. Juni 2023 sind vier große Open Source Closed Loop-Systeme verfügbar: [OpenAPS](https://openaps.readthedocs.io/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) und [iAPS](https://github.com/Artificial-Pancreas/iAPS?fbclid=IwAR2fA9Y9YqYzpKSrtEsotfXl5b67UclDkKgyrv52tQLzYbOoBeNGRmjlJJI), (ehemals FreeAPS X). Die Funktionen der verschiedenen Systeme werden in der folgenden Tabelle angezeigt:


| Gerätetyp  | Name                                                                 | [AAPS](https://wiki.aaps.app)                 | [Loop](https://loopkit.github.io/loopdocs/)   | [OpenAPS](https://openaps.readthedocs.io/en/latest/) | [iAPS](https://iaps.readthedocs.io/en/latest/) |
| ---------- | -------------------------------------------------------------------- | --------------------------------------------- | --------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------- |
| Smartphone | Android                                                              | ![available](../images/available.png)         | ![nicht verfügbar](../images/unavailable.png) | ![nicht verfügbar](../images/unavailable.png)        | ![nicht verfügbar](../images/unavailable.png)  |
| Smartphone | iPhone                                                               | ![nicht verfügbar](../images/unavailable.png) | ![available](../images/available.png)         | ![nicht verfügbar](../images/unavailable.png)        | ![available](../images/available.png)          |
| Rig        | Einplatinencomp. (1)                                                 | ![nicht verfügbar](../images/unavailable.png) | ![nicht verfügbar](../images/unavailable.png) | ![available](../images/available.png)                | ![nicht verfügbar](../images/unavailable.png)  |
| PUMPE      | [Dana I](../CompatiblePumps/DanaRS-Insulin-Pump.md)                  | ![available](../images/available.png)         | ![nicht verfügbar](../images/unavailable.png) | ![nicht verfügbar](../images/unavailable.png)        | ![nicht verfügbar](../images/unavailable.png)  |
| PUMPE      | [Dana RS](../CompatiblePumps/DanaRS-Insulin-Pump.md)                 | ![available](../images/available.png)         | ![nicht verfügbar](../images/unavailable.png) | ![nicht verfügbar](../images/unavailable.png)        | ![nicht verfügbar](../images/unavailable.png)  |
| PUMPE      | [Dana R](../CompatiblePumps/DanaR-Insulin-Pump.md)                   | ![available](../images/available.png)         | ![nicht verfügbar](../images/unavailable.png) | ![nicht verfügbar](../images/unavailable.png)        | ![nicht verfügbar](../images/unavailable.png)  |
| PUMPE      | [Omnipod (Dash)](../CompatiblePumps/OmnipodDASH.md) (2)              | ![available](../images/available.png)         | ![available](../images/available.png)         | ![nicht verfügbar](../images/unavailable.png)        | ![available](../images/available.png)          |
| PUMPE      | [Omnipod (Eros)](../CompatiblePumps/OmnipodEros.md)                  | ![available](../images/available.png)         | ![available](../images/available.png)         | ![nicht verfügbar](../images/unavailable.png)        | ![available](../images/available.png)          |
| PUMPE      | [Diaconn G8](../CompatiblePumps/DiaconnG8.md)                        | ![available](../images/available.png)         | ![nicht verfügbar](../images/unavailable.png) | ![nicht verfügbar](../images/unavailable.png)        | ![nicht verfügbar](../images/unavailable.png)  |
| PUMPE      | [EOPatch 2](../CompatiblePumps/EOPatch2.md)                          | ![available](../images/available.png)         | ![nicht verfügbar](../images/unavailable.png) | ![nicht verfügbar](../images/unavailable.png)        | ![nicht verfügbar](../images/unavailable.png)  |
| PUMPE      | [](../CompatiblePumps/MedtrumNano.md)                                | ![available](../images/available.png)         | ![nicht verfügbar](../images/unavailable.png) | ![nicht verfügbar](../images/unavailable.png)        | ![nicht verfügbar](../images/unavailable.png)  |
| PUMPE      | [Medtrum TouchCare 300U](../CompatiblePumps/MedtrumNano.md)          | ![available](../images/available.png)         | ![nicht verfügbar](../images/unavailable.png) | ![nicht verfügbar](../images/unavailable.png)        | ![nicht verfügbar](../images/unavailable.png)  |
| PUMPE      | [Roche Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)         | ![available](../images/available.png)         | ![nicht verfügbar](../images/unavailable.png) | ![nicht verfügbar](../images/unavailable.png)        | ![nicht verfügbar](../images/unavailable.png)  |
| PUMPE      | [Roche Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)        | ![available](../images/available.png)         | ![nicht verfügbar](../images/unavailable.png) | ![nicht verfügbar](../images/unavailable.png)        | ![nicht verfügbar](../images/unavailable.png)  |
| PUMPE      | [Ältere Medtronik](../CompatiblePumps/MedtronicPump.md)              | ![available](../images/available.png)         | ![available](../images/available.png)         | ![available](../images/available.png)                | ![available](../images/available.png)          |
| PUMPE      | [Equil 5.3](../CompatiblePumps/Equil5.3.md)                          | ![available](../images/available.png)         | ![nicht verfügbar](../images/unavailable.png) | ![nicht verfügbar](../images/unavailable.png)        | ![nicht verfügbar](../images/unavailable.png)  |
| CGM        | [Dexcom G7](../CompatibleCgms/DexcomG7.md)                           | ![available](../images/available.png)         | ![available](../images/available.png)         | ![nicht verfügbar](../images/unavailable.png)        | ![available](../images/available.png)          |
| CGM        | [Dexcom One](../CompatibleCgms/DexcomG6.md)                          | ![available](../images/available.png)         | ![available](../images/available.png)         | ![nicht verfügbar](../images/unavailable.png)        | ![available](../images/available.png)          |
| CGM        | [Dexcom G6](../CompatibleCgms/DexcomG6.md)                           | ![available](../images/available.png)         | ![available](../images/available.png)         | ![available](../images/available.png)                | ![available](../images/available.png)          |
| CGM        | [Dexcom G5](../CompatibleCgms/DexcomG5.md)                           | ![available](../images/available.png)         | ![available](../images/available.png)         | ![available](../images/available.png)                | ![available](../images/available.png)          |
| CGM        | [Libre 3](../CompatibleCgms/Libre3.md)                               | ![available](../images/available.png)         | ![nicht verfügbar](../images/unavailable.png) | ![nicht verfügbar](../images/unavailable.png)        | ![nicht verfügbar](../images/unavailable.png)  |
| CGM        | [Libre 2](../CompatibleCgms/Libre2.md)                               | ![available](../images/available.png)         | ![nicht verfügbar](../images/unavailable.png) | ![nicht verfügbar](../images/unavailable.png)        | ![available](../images/available.png)          |
| CGM        | [Libre 1](../CompatibleCgms/Libre1.md)                               | ![available](../images/available.png)         | ![nicht verfügbar](../images/unavailable.png) | ![nicht verfügbar](../images/unavailable.png)        | ![available](../images/available.png)          |
| CGM        | [Eversense](../CompatibleCgms/Eversense.md)                          | ![available](../images/available.png)         | ![nicht verfügbar](../images/unavailable.png) | ![nicht verfügbar](../images/unavailable.png)        | ![available](../images/available.png)          |
| CGM        | [MM640g/MM630g](../CompatibleCgms/MM640g.md)                         | ![available](../images/available.png)         | ![nicht verfügbar](../images/unavailable.png) | ![nicht verfügbar](../images/unavailable.png)        | ![available](../images/available.png)          |
| CGM        | [PocTech](../CompatibleCgms/PocTech.md)                              | ![available](../images/available.png)         | ![nicht verfügbar](../images/unavailable.png) | ![nicht verfügbar](../images/unavailable.png)        | ![available](../images/available.png)          |
| CGM        | [Ottai](../CompatibleCgms/OttaiM8.md)                                | ![available](../images/available.png)         | ![nicht verfügbar](../images/unavailable.png) | ![nicht verfügbar](../images/unavailable.png)        | ![nicht verfügbar](../images/unavailable.png)  |
| CGM        | [Syai Tag](../CompatibleCgms/SyaiTagX1.md)                           | ![available](../images/available.png)         | ![nicht verfügbar](../images/unavailable.png) | ![nicht verfügbar](../images/unavailable.png)        | ![nicht verfügbar](../images/unavailable.png)  |
| CGM        | [Nightscout als BZ-Quelle](../CompatibleCgms/CgmNightscoutUpload.md) | ![available](../images/available.png)         | ![available](../images/available.png)         | ![available](../images/available.png)                | ![available](../images/available.png)          |

_Hinweise zur Tabelle:_
1. Ein **Rig** ist ein kleiner Computer, den man mit sich herumtragen kann, ohne einen Monitor. Unterstützte Gerätetypen: Intel Edison + Explorer Board; Raspberry Pi + Explorer HAT; Adafruit RFM69HCW Bonnet. Die ersten APS basieren auf diesem Setup, da Mobiltelefone nicht in der Lage waren, die benötigten Algorithmen auszuführen. Die Nutzung dieser Systeme ist rückläufig, da die Einrichtung auf Mobiltelefonen einfacher geworden ist und Telefone ein Display enthalten. Auch hat Intel den Verkauf von Intel Edison eingestellt. Die hervorragenden OpenAPS-Algorithmen **oref0** und **oref1** sind nun in AAPS und iAPS integriert.
2. Omnipod Dash ist das Nachfolgemodell von Omnipod Eros. Es unterstützt Bluetooth-Kommunikation und benötigt kein Rig Gateway, um zwischen Omnipod und Mobiltelefon zu kommunizieren. Wenn Sie die Wahl haben, empfehlen wir Ihnen, den Dash anstelle von Eros zu verwenden.


Eine internationale, von Fachleuten überprüfte Konsenserklärung mit praktischen Anleitungen zum Open-Source-Looping wurde von und für Angehörige der Gesundheitsberufe verfasst und 2022 in einer führenden medizinischen Zeitschrift veröffentlicht: [_Lancet Diabetes Endocrinol_, 2022; 10: 58-74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_). Sie fasst die wesentlichen technischen Unterschiede der einzelnen Open-Source-Hybrid-Loop-Systeme zusammen und ist auch für Deine Diabetes-Klinik eine Lektüre wert.

Es ist schwierig, ein „Gefühl“ für ein System zu bekommen, wenn man es nicht benutzt oder sich nicht mit Personen austauscht, die es aktiv nutzen. Stelle Deine Fragen daher auf Facebook/Discord, wo sich viele aktive Nutzende finden. Die meisten Leute finden, dass **AAPS** im Vergleich zu anderen hybriden Systemen mit geschlossenem Regelkreis (insbesondere den kommerziellen Systemen) unglaublich ausgeklügelt ist, mit, wie oben beschrieben, einer riesigen Anzahl von potenziell anpassbaren Einstellungen und Funktionen. Einige Leute finden es am Anfang ein wenig erschlagend, doch Du kannst das Tempo selbst bestimmen und Dich mit den einzelnen Möglichkeiten langsam vertraut machen. Es gibt dabei keinen Grund zur Eile und es gibt Hilfe auf jedem Schritt des Weges.


## Verwendet AAPS künstliche Intelligenz oder einen Lernalgorithmus?

Die aktuelle Master-Version von **AAPS** (3.3.1.3) enthält keine Maschinenlernalgorithmen, Multiparameter-Insulinreaktionsmodelle oder künstliche Intelligenz. Das System an sich ist, im Hinblick darauf wie es funktioniert, offen und transparent. Es kann sowohl von Patienten und Klinikpersonal verstanden werden und es wird dazu kein Expertenwissen benötigt. Das bedeutet auch, dass Du, wenn Du einen stark schwankenden Tagesablauf hast (z. B. von einer stressigen Arbeitswoche zu einem erholsamen Urlaub) und wahrscheinlich eine deutlich andere Insulinmenge benötigst, sofort in **AAPS** auf ein schwächeres/stärkeres, maßgeschneidertes Profil umschalten kannst. Ein "lernendes System" wird dies für Dich zwar automatisch anpassen, aber es ist sehr wahrscheinlich, dass die Insulinanpassungen so länger dauern werden.

## Welches System ist für mich oder meinen Angehörigen das Richtige?

Üblicherweise ist Deine Systemwahl davon abhängig, welche Insulinpumpe Du bereits nutzt oder von Deinem medizinischen Versorger bekommen kannst, und Deinem genutzten Smartphone (Apple oder Android). Die größte Systemauswahl hast Du, wenn Du noch gar keine Insulinpumpe hast. Die Technologie entwickelt sich ständig weiter, Insulinpumpen werden vom Markt genommen und neue Pumpen und Sensoren werden verfügbar. Die meisten Open-Source-Systeme arbeiten mit den Hauptsensoren (Libre und Dexcom) oder integrieren neue Sensoren sehr schnell nach deren Verfügbarkeit. Die Erfahrung zeigt, dass neue Sensoren (auch wegen Sicherheits- und Stabilitätstests) innerhalb eines Jahres integriert werden.

Die meisten **AAPS** Anwender berichten von mehr Zeit im Zielbereich (TiR), von einem niedrigeren HbA1c und von einer verbesserten Lebensqualität, weil sie ein System verwenden, das automatisch Basalraten in der Nacht, während sie schlafen, anpassen kann. Dies gilt für die meisten Hybrid-Closed-Loop Systeme. Einige Menschen bevorzugen einfache, wenig anpassbare Systeme (d.h. Du bevorzugst kommerzielle Systeme) und andere wiederum empfinden die mangelnde Kontroll- bzw. Anpassbarkeit als sehr frustrierend (d.h. Du wirst vermutlich ein Open-Source-System bevorzugen). Wenn Du (oder Dein Angehöriger) eine neue Diagnose erhalten haben, ist es üblich, sich zunächst an die Anwendung von ICT (intensivierte kontinierliche Inslintherapie, engl. MDI = multiple dayly injections) und eines Glukosesensors zu gewöhnen und dann auf eine Pumpe umzusteigen, die die Möglichkeit eines Loopings bietet, um damit schließlich auf **AAPS** umzusteigen. Möglicherweise wird bei manchen (insbesondere bei kleinen Kindern) auch gleich eine Pumpe angwendet.

Es ist wichtig zu wissen, dass **AAPS**-Nutzende selbständig und proaktiv Probleme mit der Hilfe der Community lösen müssen. Das erfordert eine andere persönliche Haltung als es bei kommerziellen Systemen notwendig ist. **AAPS** gibt Dir mehr Kontrolle und Flexibilität, aber auch Verantwortung, zu der Du bereit sein musst.

## Ist der Einsatz von Open-Source-Systemen wie AAPS sicher?

### Sicherheit des AAPS-Systems
Da kein System ohne Risiko ist, ist die wahrscheinlich bessere Frage: "Ist **AAPS, im Vergleich** zu meinem aktuell genutzten System zur Behandlung von Diabetes Typ-1, sicher?". **AAPS** hat viele Prüfungen und Abgleiche. In einem kürzlich erschienenen [Artikel](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375) wird die Verwendung von **AAPS** in einer Computersimulation beschrieben, die als effektives Mittel prüfte, wie sicher und wirksam das System ist. Generell wird angenommen, dass weltweit mehr als 10.000 Menschen mit Open-Source automatisierten Insulinlieferungs-Systemen (Insulinpumpen) arbeiten und dass dies weltweit weiter zunimmt.

Jedes Gerät, das Funk-Kommunikation nutzt, kann gehackt werden, und das gilt auch für eine nicht loopende Insulinpumpe. Aktuell ist uns kein Fall bekannt, in dem versucht worden ist, das Diabetes-Equipment einer Einzelperson durch einen Hack zu schädigen. Es gibt jedoch mehrere Wege, sich gegen derartige Risiken zu schützen:

1.  Begrenze den maximal abgebbaren Bolus und das maximal mögliche Basal in den Pumpeneinstellungen auf Mengen, die Du als am sichersten empfindest. Das sind feste Grenzen, von denen wir glauben, dass sie durch böswillige Hacker nicht umgangen werden können.

2.  Aktiviere die Alarme Deines CGMs, sowohl für "niedrig" als auch für "hoch".

3.  Halte Deine Insulinabgaben online im Auge. Nightscout-Nutzende können zusätzliche Alarme mit einer großen Vielzahl an Bedingungen (auch für viel wahrscheinlichere Bedingungen als eine böswillige Attacke) einstellen. Zusätzlich zu Alarmen (hoch bzw. niedrig) kann Nightscout auch Diagnosedaten anzeigen, die zeigen, ob die Insulinpumpe wie gewünscht funktioniert, einschließlich des aktuell aktiven Insulins (IOB), der Basalraten-Historie und der Bolus-Historie der Pumpe. Es kann auch so eingestellt werden, dass es frühzeitig auf unerwünschte Zustände wie z.B. vorhergesagte hohe oder niedrige Werte, niedriger Reservoirstand und schwache Pumpenbatterie, hinweist.

Diese Strategie reduziert das Risiko erheblich, wenn ein bösartiger Angriff auf Deine Insulinpumpe erfolgen sollte. Jeder potentielle **AAPS**-Nutzende muss die mit **AAPS** verbundenen Risiken gegen das Risiko anderer Systeme abwägen.

#### Sicherheitsaspekte bezüglich einer allzu schnellen Absenkung der Blutzuckerwerte

Eine schnelle Reduktion des HbA1c und eine verbesserte Blutzuckerkontrolle klingt verlockend. Allerdings kann das _zu schnelle_Senken des durchschnittlichen Blutzuckerspiegels, durch Start eines Closed-Loop-Systems zu permanenten Schäden führen, auch an den Augen, und schmerzhafter Neuropathie, die nie mehr verschwindet. Solche Schäden lassen sich einfach vermeiden, indem man die Werte langsamer reduziert. Wenn Du derzeit einen erhöhten HbA1c hast und zu **AAPS** (oder einem anderen Closed-Loop-System) wechselst, besprich dieses potentielle Risiko _bitte_ mit Deinem Klinik-Team, bevor Du startest, und lege gemeinsam einen Zeitraum fest, in dem Du den Glukosespiegel sicher schrittweise senkst. Allgemeine Informationen darüber, wie Du Deine BZ-Werte sicher reduzieren kannst, mit Links zur medizinischen Literatur, findest Du im Abschnitt über Sicherheit [hier](#preparing-safety-first).

#### Medizinische Sicherheit bezüglich Geräte, Verbrauchsmaterialien und anderer Medikamente

Verwende eine getestete, voll funktionierende, FDA oder CE zugelassene Insulinpumpe für Deine künstliche Bauchspeicheldrüse. Gleiches gilt für das CGM-System. Veränderungen an Hard- oder Software dieser Komponenten können zu unerwarteter Insulinabgabe und damit zu erheblichen Risiken für den Anwender führen. Verwende keine defekten, modifizierten oder selbstgebastelten Insulinpumpen oder CGM-Empfänger, um ein AAPS-System zu erstellen oder zu betreiben.

Verwende Originalzubehör wie Inserter, Katheter und Insulinbehälter, die vom Hersteller für Deine Pumpe und Dein CGM zugelassen sind. Die Verwendung von nicht geprüftem oder modifiziertem Zubehör kann zu Ungenauigkeiten des CGM-Systems und Insulinabgabefehlern führen. Insulin ist höchst gefährlich, wenn es falsch dosiert wird. Spiele nicht mit Deinem Leben, indem Du Deine Diabetesausrüstung hackst.

SGLT-2 Inhibitoren (Gliflozine) sollten bei der Verwendung von **AAPS** nicht eingenommen werden, da sie den Blutzuckerspiegel unberechenbar senken. Es ist gefährlich, diesen Effekt mit einem System zu kombinieren, das die Basalsätze senkt, um die BZ-Werte zu erhöhen. Mehr Details dazu findest Du im [Hauptabschnitt Sicherheit](#preparing-safety-first).

(introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team)=
## Wie kann ich mit meinem Klinikteam über AAPS ins Gespräch kommen?

Die Benutzer sind aufgefordert, mit ihren Ärzten über ihre Absicht zu sprechen, **AAPS** zu verwenden. Bitte scheuen Sie sich nicht, ein ehrliches Gespräch mit Ihrem Diabetesteam zu führen, wenn Sie **AAPS** (oder irgendeinen anderen DIY-Loop) verwenden wollen. Transparenz und Vertrauen zwischen Patient und Arzt sind von größter Bedeutung.

### Vorgeschlagene Vorgehensweise:
Sprechen Sie mit Ihrem Arzt, um herauszufinden, wie vertraut er mit Diabetestechnologie wie CGMs, Pumpen, Hybrid-Loops und kommerziellen Loops ist und welche Einstellung er dazu hat. Dein Arzt/Endokrinologe sollte mit der grundlegenden Technologie vertraut sein und bereit sein, mit Dir die letzten Fortschritte bei kommerziellen Loop-Produkten zu besprechen, die in Eurem Gebiet erhältlich sind.

#### Beispielfälle vor Ort

Erkundigen Sie sich bei Ihren Ärzten und Endokrinologen nach deren Meinung zu DIY-Loops _gegenüber_ kommerziellen Loops und schätzen Sie deren Wissen in diesem Bereich ein. Sind sie mit **AAPS** vertraut und können sie Dir mit Erfahrungen helfen, die auf ihrer Arbeit mit Patienten mit DIY-Looping beruhen?

Frage Dein Team, ob es bereits Patienten in Behandlung hat, die DIY-Looping verwenden. Aufgrund der ärztlichen Schweigepflicht können die Ärzte die Daten anderer Patienten nicht an Dich weitergeben, ohne die Zustimmung der Betroffenen einzuholen. Wenn Du möchtest, **kannst** Du sie jedoch bitten, **Deine** Kontaktdaten an einen bestehenden DIY-Looping-Patienten weiterzugeben, wenn der Arzt das Gefühl hat, dass es bei Euch "klick" machen könnte, und mitteilen, dass Du Dich freuen würdest, wenn der Patient Dich kontaktieren würde, um DIY-Looping zu besprechen. Ärzte sind dazu nicht verpflichtet, aber einige sind froh darüber, da sie die Bedeutung der Peer-to-Peer-Unterstützung im Diabetes Management von Typ 1 erkennen. Es kann auch nützlich sein, Dich mit in Deiner Gegend lebenden DIY-Loopern zu treffen. Dies ist natürlich Dir selbst überlassen und ist nicht unbedingt notwendig.

#### Beispielfälle auf nationaler und internationaler Ebene

Wenn Du das Gefühl hast, dass Du von Deinem Team beim Loopen mit **AAPS** nicht genügend unterstützt wirst, können folgende Diskussionspunkte hilfreich sein:

a) Das **AAPS** System wurde von Patienten und deren Betreuern entworfen. Es wurde letztendlich für die Sicherheit konzipiert, aber auch auf Grundlage einer fundierten Patientenerfahrung. Derzeit gibt es weltweit rund **10.000** AAPS-Nutzer. Es ist daher wahrscheinlich, dass es in Deiner Klinik weitere Patienten gibt, die DIY-Looping verwenden (ob sie gegenseitig davon wissen oder nicht).

b) Eine kürzlich in der international führenden medizinischen Fachzeitschrift [The Lancet](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/pdf/nihms-1765784.pdf)_(1)_ veröffentlichte und von Experten begutachtete Anleitung hat bestätigt, dass DIY-Loops **sicher** und **wirksam bei der Verbesserung der Diabeteskontrolle** sind, einschließlich der Zeit im Zielbereich (engl. time in range = TIR). Es gibt regelmäßige Artikel in führenden Zeitschriften wie [Nature](https://doi.org/10.1038/d41586-023-02648-9)_(3)_ die den Fortschritt in der DIY-Looping-Commmunity hervorheben.

Durch den Einstieg mit **AAPS** erreicht man eine _schrittweise_ Umstellung von der "Open"-Loop-Pumpenbehandlung, über die Einstellung niedriger BZ-Werte, bis hin zum hybriden "Closed" Loop, wodurch eine Reihe von Zielen erreicht werden. Daher gibt es ein strukturiertes Programm, bei dem der Benutzer in jeder Phase ein gewisses Maß an Kompetenz nachweisen und seine Grundeinstellungen (Basalrate, Insulinempfindlichkeit (ISF) und Kohlehydratfaktor (ICR, I:C, IC)) feinabstimmen muss, bevor er in den Closed Loop kann.

Technische Unterstützung erhältst Du von der DIY-Community über GitHub, Discord und geschlossene (private) Facebook-Gruppen.

e) Du kannst **sowohl CGM-Berichte als auch Insulin-Looping/Pumpen-Protokolle** als kombinierte Berichte bei Kliniksitzungen mitbringen (über Nightscout oder Tidepool), entweder ausgedruckt oder auf dem Bildschirm (wenn Du Laptop/Tablet dabeihast). Die Straffung sowohl der CGM- als auch der Insulindaten, erlaubt es Deinem Diabetes-Team, die Zeit für die Analyse Deiner Berichte effektiver zu nutzen und die Diskusion Deiner Fortschritte zu unterstützen.

f) Wenn es immer noch starke Einwände Deines Diabetes-Teams gibt, gib dem Team Ausdrucke des hier im Text verlinkten Referenzartikels und auch den Link zum Abschnitt **AAPS** für Kliniken: [Für Mediziner und Fachpersonal - Eine allgemeine Einführung in und eine Anleitung für**AAPS**](../UsefulLinks/ClinicianGuideToAaps.md)

#### Unterstützung für DIY Looping durch andere Diabetes-Therapeuten

Die in der Fachzeitschrift [Lancet Diabetes Endocrinology](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_)[ veröffentlichte Arbeit (unter Mitwirkung von Kings' und Guy's and St Thomas' NHS Foundation Trust und unter Mitwirkung von Dr. Sufyan Hussain, einem beratenden Diabetologen und ehrenamtlichen Dozenten von King's in London) bietet:

a) **Gewissheit** für Fachleute, dass DIY-Systeme für künstliche Bauchspeicheldrüsen/ Open Source eine "sichere und wirksame Behandlungsoption" für Typ-1-Diabetes darstellen, und bietet Leitlinien für Empfehlungen, Diskussionen, Unterstützung und Dokumentation;

b) **Erkenntnis**, dass Open-Source-Systeme zur automatischen Insulinverabreichung ("AID" = Automated Insulin Delivery) die "Time in Range" (TIR) erhöhen und gleichzeitig die Variabilität der Blutzuckerkonzentration sowie die Anzahl der Hypo- und Hyperglykämie-Episoden in verschiedenen Altersgruppen, Geschlechtern und Gemeinschaften verringern können;

c) **Empfehlung**, dass Mitarbeiter des Gesundheitswesens **Typ-1-Patienten oder ihre Betreuer unterstützen** sollten, die sich dafür entscheiden, ihren Diabetes mit einem Open-Source-AID-System zu verwalten;

d) Empfehlung, dass die Mitarbeiter des Gesundheitswesens versuchen sollten, sich über alle Behandlungsmöglichkeiten zu informieren, die den Patienten zugutekommen könnten, einschließlich verfügbarer Open-Source-AID-Systeme.  Wenn Angehörige der Gesundheitsberufe nicht über die Mittel verfügen, sich selbst weiterzubilden, oder wenn sie rechtliche oder behördliche Bedenken haben, sollten sie eine **Kooperation oder eine Zusammenarbeit mit anderen Angehörigen der Gesundheitsberufe** in Erwägung ziehen, die dies tun;

e) Betonung, dass alle Nutzer von CGMs jederzeit in Echtzeit und offen Zugang zu **ihren eigenen Gesundheitsdaten** haben sollten

f) Betonung, dass diese quelloffenen Systeme nicht denselben regulatorischen Bewertungen unterzogen wurden wie kommerziell verfügbare medizinische Technologien und dass es keine kommerzielle technische Unterstützung gibt. Allerdings ist **eine umfangreiche Unterstützung durch die Gemeinschaft verfügbar**; und

g) Eine Empfehlung, dass **Regulierung und Rechtsrahmen** aktualisiert werden sollten, um Klarheit über die ethische und effektive Behandlung solcher Open-Source-Systeme zu schaffen.

In einem anderen Artikel in [Medical Law International, 2021](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)(_4_) wird auch darauf hingewiesen, dass das UK General Medical Council in seinen "Einwilligungsrichtlinien" großen Wert darauf legt, dass Arzt und Patient gemeinsam Entscheidungen treffen. Der Arzt sollte die potenziellen Vorteile, Risiken, Belastungen und Nebenwirkungen der DIY-APS erklären und kann eine bestimmte Option empfehlen, ohne den Patienten unter Druck zu setzen.

Letztlich muss der Patient diese Faktoren sowie alle für ihn relevanten nicht-klinischen Aspekte abwägen und entscheiden, welche Behandlungsoption er gegebenenfalls akzeptiert.

Wenn ein Arzt in einer Klinik feststellt, dass sein Patient mit einem DIY-System loopt, ist er nicht von seiner Überwachungspflicht entbunden, nur weil er das betreffende Gerät nicht verschrieben hat; die Ärzte müssen ihre Patienten weiterhin überwachen.

Ärzten ist es (zumindest im Vereinigten Königreich) nicht verboten, nicht zugelassene Arzneimittel zu verschreiben, und sie können nach ihrem klinischen Ermessen handeln. Sie sollten daher nach ihrem klinischen Urteilsvermögen entscheiden, ob ein DIY-APS für einen bestimmten Patienten geeignet ist, und die Vor- und Nachteile mit dem Patienten besprechen, die sie für möglich erachten.

#### Die oben genannten Artikel sowie weitere nützliche Links und Stellungnahmen sind unten aufgeführt:

1. Open-source automated insulin delivery: international consensus statement and practical guidance for health-care professionals [dt.: Automatisierte Insulinabgabe mit offenen Quellen: internationale Konsenserklärung und praktische Anleitung für Angehörige der Gesundheitsberufe] [_Lancet Diabetes Endocrinol_, (2022) _10_, 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)
2. [In Silico Trials of an Open-Source Android-Based Artificial Pancreas: A New Paradigm to Test Safety and Efficacy of Do-It-Yourself Systems, 2020 [dt.: In-Silico-Studien einer Android-basierten künstlichen Bauchspeicheldrüse mit offenem Quellcode: Ein neues Paradigma zur Prüfung der Sicherheit und Wirksamkeit von Do-It-Yourself-Systemen]](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375)
3. A DIY ‘bionic pancreas’ is changing diabetes care — what's next? [dt.: Eine selbst gebaute "bionische Bauchspeicheldrüse" verändert die Diabetesbehandlung - wie geht es weiter?] [_Nature_ (2023), _620_, 940-941](https://doi.org/10.1038/d41586-023-02648-9)
4. Prescribing unapproved medical devices? The case of DIY artificial pancreas systems [ [dt.: Verschreibung von nicht zugelassenen Medizinprodukten? Der Fall der Do-it-yourself-Systeme bei künstlichen Bauchspeicheldrüsen] _Medical law international_, (2021), _21_, 42-68](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)
5. [Berlin Institute of Health position statement [dt.: Stellungnahme des Berliner Instituts für Gesundheit], 2022](https://www.bihealth.org/en/notices/do-it-yourself-solutions-for-people-with-diabetes-are-safe-and-recommended)
6. Do-It-Yourself Automated Insulin Delivery: A Health-care Practitioner User’s Guide (Diabetes Canada position and guide) [dt.: Automatisierte Insulinabgabe zum Selbermachen: Ein Leitfaden für medizinische Fachkräfte (Position und Leitfaden von Diabetes Canada)] [_Canadian Journal of Diabetes_, (2023)_47_, E8, 389-397](https://www.canadianjournalofdiabetes.com/article/S1499-2671(23)00138-7/fulltext)
7.  Netherlands (EN/NL) - for clinicians - [how to help people on open source automated insulin delivery systems](https://www.diabetotech.com/blog/how-to-help-people-on-open-source-automated-insulin-delivery-systems) [dt.: Niederlande (EN/NL) - für Kliniken - Wie man Menschen mit Open-Source-Systemen für die automatische Insulinabgabe helfen kann]
8. First Use of Open-Source Automated Insulin Delivery AndroidAPS in Full Closed-Loop Scenario: Pancreas4ALLRandomized Pilot Study [dt.: Erster Einsatz des Open-Source-Systems zur automatischen Insulinabgabe, AndroidAPS, in einem vollständigen Closed-Loop-Szenario: Randomisierte Pilotstudie Pancreas4ALL] [_Diabetes Technol. Ther._, 25, _5_, 2023](https://www.liebertpub.com/doi/pdf/10.1089/dia.2022.0562?casa_token=D13eFx5vCwwAAAAA:MYvO8hChbViXVJFgov1T11RXBPx2N_wOMThLHwl3TVUxbCuANegPrIFRC5R5VXx_S71FoQYW-qg)
9. Pre-school and school-aged children benefit from the switch from a sensor-augmented pump to an AndroidAPS hybrid closed loop: A retrospective analysis [dt.: Kinder im Vorschul- und Schulalter profitieren von der Umstellung von einer sensorgestützten Pumpe auf einen AndroidAPS-Hybrid-Closed-Loop: Eine retrospektive Analyse] [_Pediatr. Diabetes_ 2021, _22_, 594-604. 2021](https://onlinelibrary.wiley.com/doi/epdf/10.1111/pedi.13190)
10. Outcomes of the OPEN project, an EU-funded project into the Outcomes of Patient’s Evidence with Novel, Do-it-Yourself Artificial Pancreas Technology \[dt.: Ergebnisse des OPEN-Projekts, eines von der EU finanzierten Projekts zur Untersuchung der Ergebnisse von Patienten mit neuartiger Do-it-yourself-Technologie für die künstliche Bauchspeicheldrüse\] (https://www.open-diabetes.eu/publications)



## F: Warum kann ich AAPS nicht einfach herunterladen und sofort nutzen?

Die **AAPS**-App ist nicht in Google Play herunterladbar - Du musst die App aus rechtlichen Gründen selbst aus dem verfügbaren Quellcode erstellen. **AAPS** ist in keinem Land lizenziert, d.h. es gibt keine Genehmigung einer Aufsichtsbehörde. **AAPS** gilt als persönliches, medizinisches Experiment und wird auf eigenes Risiko durchgeführt.

Die Einrichtung des Systems muss mit Ruhe, Entschlossenheit und schrittweiser Erweiterung des eigenen technischen Wissens erfolgen. Alle Informationen und Unterstützung findest Du in diesem Dokument, online oder bekommst sie von anderen, die durch diesen Prozess bereits durchgegangen sind. Mehr als 10.000 Menschen weltweit haben **AAPS** erfolgreich gebaut und nutzen es aktuell.

Für die **AAPS**-Entwickler ist Sicherheit und eine gute **AAPS**-Benutzererfahrung von vorrangiger Bedeutung. Das ist auch der Grund warum es unerlässlich für jeden Nutzenden (oder Betreuenden, wenn das System für ein Kind genutzt wird) ist, dass der Nutzende:

- das AAPS-System selbst aufbaut und die **Ziele** durcharbeitet, so dass er zu dem Zeitpunkt, an dem er den "Closed Loop" macht, einigermaßen gute personalisierte Einstellungen hat und die Grundlagen der Funktionsweise von **AAPS** versteht;

- sein System sichert, indem er wichtige Dateien (wie zum Beispiel den Keystore und die Einstellungsdatei (.json)) exportiert und an einem sicheren Ort speichert, so dass diese bei Bedarf wieder schnell eingespielt werden kann.

- auf eine neue Master-Version aktualisiert, sobald diese verfügbar wird, und

- das System aktuell und im Auge behält, um sicher zu sein, dass es richtig funktioniert.

## Was macht die Connectivity des AAPS-Systems aus?

**Abbildung 3 (unten)** zeigt ein Beispiel des **AAPS** Systems für einen Benutzer ohne Follower. Zusätzliche, nicht gezeigte Open-Source-Software und Plattformen können ebenfalls integriert werden.

![21-06-23 AAPS connectivity no followers](../images/AAPS-connectivity-no-followers.png)


**Abbildung 4 (unten)** zeigt das volle Potenzial des **AAPS**-Systems für einen Benutzer, der Follower hat und Überwachung und Fernzugriffe auf das System benötigt (wie z.B. ein Kind mit Diabetes Typ 1): Zusätzliche, nicht gezeigte Open-Source-Software und Plattformen können ebenfalls integriert werden.

![21-06-23 AAPS overview with followers](../images/AAPS-overview-with-followers.png)

## Wie läuft die stetige Weiterentwicklung und Verbesserung von AAPS?

Die meisten **AAPS**-Benutzer verwenden die vollständig getestete **Master**-Version von AAPS, die - bevor sie für die Community freigeben wurde - auf Fehler und Probleme ausgiebig getestet wurde. Neuerungen und Verbesserungen werden hinter den Kulissen durch die Entwickler ausprobiert und in „Entwickler“ (**dev**)-Versionen von **AAPS** mit einer kleineren Nutzergruppe, die gerne hilft Fehler zu finden, zu reporten und daraus neue Entwickler-Versionen zu generieren, getestet. Gut funktionierende Neuerungen und Verbesserungen werden dann in eine neue **AAPS**-„Master“-Version überführt und für die Allgemeinheit freigegeben. Jede neue Master-Version wird in der Facebook-Gruppe bekannt gegeben, so dass die regulären **AAPS**-Benutzer über die neue Version informiert sind und auf diese Master-Version aktualisieren können.

Einige erfahrene und mit dem System vertraute **AAPS**-Benutzer verwenden Entwicklerversionen der **AAPS**-App und experimentieren mit neuen Technologien. Es kann für weniger abenteuerlustigen Nutzer interessant sein von diesen Experimenten zu erfahren, ohne es selbst machen zu müssen! Im Allgemeinen wird auch in der Facebook-Gruppe von diesen Experimenten berichtet.

Eine gute Lektüre rund um die Details zu diesen Experimenten und Diskussionen über neueste Technologieentwicklungen ist:

Tim Street [https://www.diabettech.com/](https://www.diabettech.com/)

David Burren [https://bionicwookie.com/](https://bionicwookie.com/)

## Wer kann von AAPS profitieren?

| Nutzergruppe                                        |
| --------------------------------------------------- |
| ✔️ Typ-1-Diabetiker                                 |
| ✔️ Betreuer oder Elternteil eines Typ-1-Diabetikers |
| ✔️ Blinde Typ-1-Diabetiker                          |
| ✔️ *Kliniken und Fachleute im Gesundheitswesen      |

Die obige Tabelle setzt voraus, dass die Nutzenden sowohl Zugang zu einem CGM-System und auch zu einer Insulinpumpe haben.

*Alle Daten von **AAPS** können medizinischen Fachkräften über Datenaustauschplattformen zur Verfügung gestellt werden, einschließlich Nightscout, das die Aufzeichnung und Echtzeitüberwachung von CGM-Daten, Insulinabgabe, Kohlenhydratangaben, Prognosen und Einstellungen ermöglicht. Aus Nightscout können Tages- und Wochenberichte erzeugt werden, die in Diskussionen eines Diabetes-Teams mit einem Typ 1-Patienten hilfreich sein können, da sie genauere Daten zur glykämischen Kontrolle und Verhaltensüberlegungen beisteuern.

### Zugänglichkeit für AAPS-Nutzer, die teilweise oder vollständig blind sind

#### Tägliche Verwendung von AAPS:
AAPS kann von Blinden verwendet werden. Auf Android-Geräten stellt das Betriebssystem ein Programm namens TalkBack zur Verfügung. Dies ermöglicht die Bildschirmorientierung über die Sprachausgabe als Teil des Betriebssystems. Mit TalkBack kannst Du sowohl Dein Smartphone als auch AAPS bedienen, ohne dass Du es sehen musst.

#### Das Erstellen der AAPS-App:
Als Benutzer wirst Du die AAPS-App in Android Studio erstellen. Zu diesem Zweck verwenden viele Microsoft Windows, wo es den Screenreader analog zu TalkBack gibt. Da Android Studio eine Java-Anwendung ist, muss die Komponente "Java Access Bridge" in der Systemsteuerung aktiviert werden. Andernfalls wird der Screenreader des PCs nicht in Android Studio sprechen.

Wie Du das machst, hängt von Deinem Betriebssystem ab. Zwei Methoden sind nachfolgend aufgeführt:

1) Gib im Windows-Start-Menü "Systemsteuerung" im Suchfeld ein und öffne diese mit Enter. Es öffnet sich "Einstellungen des Computers anpassen".

Öffne "Erleichterte Bedienung", dann "Center für erleichterte Bedienung".

Dann öffne "Computer ohne Bildschirm verwenden" mit Enter.

Unter "Text laut vorlesen" wähle "Sprachausgabe aktivieren" und "Akustische Beschreibung aktivieren". Bestätige Deine Auswahl mit "Übernehmen".

oder:

2) Drücke die Windowstaste und gib "Systemsteuerung" in das Suchfeld ein. Öffne diese mit Enter. Es öffnet sich "Einstellungen des Computers anpassen".

Drücke "C" um zum "Center für erleichterte Bedienung" zu gelangen. Öffne dieses mit Enter.

Dann öffne "Computer ohne Bildschirm verwenden" mit Enter.

Dort, ziemlich am Ende der Liste, findest Du die Checkbox "Java Access Bridge aktivieren". Wähle diese.

Fertig, einfach das Fenster schließen! Der Screenreader sollte jetzt funktionieren.



## Welche Vorteile habe ich von AAPS?

Dadurch, dass Du Deine Zeit investierst, kann **AAPS** zu folgenden Dingen führen:

- Linderung des Stresses und der Belastung durch das Management von Diabetes Typ 1;

- Weniger alltägliche Entscheidungen, die Diabetes Typ 1 mit sich bringt;

- Verringerung der Hypos und deren Behandlungen durch das Berücksichtigen der Echtzeitdaten und der daraus auf die Person abgestimmte dynamische Insulindosierung;

- Ein besseres Verständnis des Insulinmanagements und ein größeres Vertrauen, die eigenen Einstellungen noch besser abzustimmen;

- Die Möglichkeit automatische Anpassungen zu erstellen (**Automatisierungen**), die genau zu Deinen Lebensumständen passen;

- Verbesserung der Schlafqualität und insgesamt eine Verringerung von nächtlichen Eingriffen;

- Remote Monitoring und Steuerung der Insulinabgabe durch Betreuende von Typ 1 Diabetikern; und

- Verringerung all Deiner tragbaren Diabetikergeräte (Empfänger für CGM und Fernsteuerung für die Pumpe) durch Verwendung eines Android-Telefons, von wo **AAPS** die Steuerung übernimmt.


Zu guter Letzt kann **AAPS** den Menschen helfen, ihren Diabetes besser in den Griff zu bekommen, was zu stabilen Blutzuckerwerten und langfristig besseren Gesundheitsergebnissen führt.

Interessiert, wie Du mit der Einrichtung von AAPS beginnst? Sieh im Abschnitt [Vorbereitung](../Getting-Started/PreparingForAaps.md) nach.
