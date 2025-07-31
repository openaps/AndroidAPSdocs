# Full Closed Loop


Der Hauptvorteil des Full Closed Looping **FCL** besteht darin, dass es eine künstliche Bauchspeicheldrüse imitieren und die tägliche Nahrungsaufnahme erleichtern kann, ohne dass ein Bolus für die Mahlzeiten erforderlich ist.

Der **Hybrid Closed Loop** („HCL“) basiert zwar auf einem Algorithmus, erfordert aber immer noch, dass der Anwender vor den Mahlzeiten manuell bolt. Als Ergebnis kann der Loop vorübergehend abgeschaltet werden (temporäre Null-Basalrate), um eine übermäßige Insulinabgabe zu verhindern.

Im **FCL** sind mahlzeitenbezogene Boli nicht mehr notwendig: Überlasse das dem Algorithmus!  Der Modus, der es **AAPS** ermöglicht ohne KH-Eingaben und manuelle Boli auszukommen, nennt sich „unangekündigte Mahlzeiten“ (engl.: un-announced meals **„UAM“**). **UAM** ermöglicht **AAPS** aggressiver auf falsche Kohlenhydrateingaben zu reagieren, sodass sich AAPS damit toleranter auf diese Fehleingaben zeigt.

### Was erwartet mich?

Es gibt viele veröffentlichte Studien über die guten Ergebnisse, die **FCL** erreichen kann. Weitere Informationen findest Du in den folgenden Quellen:

1) ![NationalLibraryOfMedicine](../images/Logo_of_U.S._National_Library_of_Medicine.png) ![PubMed](../images/US-NLM-PubMed-Logo.png) National Library of Medicine, PubMed [First Use of Open-Source Automated Insulin Delivery AndroidAPS in Full Closed-Loop Scenario: Pancreas4ALL Randomized Pilot Study](https://pubmed.ncbi.nlm.nih.gov/36826996/);

2) ![NationalLibraryOfMedicine](../images/Logo_of_U.S._National_Library_of_Medicine.png) ClinicalTrials.gov National Library of Medicine, Clinical Trial [Feasibility and Safety Study of the Automated Insulin Delivery Closed Loop System Pancreas4ALL (ASAP)](https://www.clinicaltrials.gov/study/NCT04835350?term=Feasibility%20and%20Safety%20Study%20of%20the%20Automated%20Insulin%20Delivery%20Closed%20Loop%20System%20Pancreas4ALL%20(ASAP)&rank=1)

Um erfolgreich mit **FCL** zu sein, muss der Nutzende:

- überprüfen, ob er die Anforderungen des **FCL** erfüllt;
- **Automatisierungen** einrichten, die zu  den eigenen Bedürfnisse des täglichen Managements passen, und
- die **AAPS**-Einstellungen (insbesondere die **Automatisierungen**) fein nachjustieren und anpassen.


### Generelle Überlegungen, warum (nicht) von Hybrid zu Full Closed Loop gewechselt werden sollte

Ein **FCL** (Full Closed Loop System) ist nicht für jeden geeignet:

- Während einige **Full Closed Looper** einen TIR (70-180) von etwa 90% und einen HbA1c unter 6% erreichen, wollen andere vielleicht eine noch engere Kontrolle erreichen. Zugegebenermaßen erfordert die Minimierung von Werten über 140 mg/dl bei Nahrungsmitteln mit schnellen Kohlenhydraten vermutlich einen Vorab-Bolus.
- Die **AAPS**-Feinabstimmung kann herausfordernd sein. Für diejenigen, die sich mit AAPS überfordert fühlen, ist es sicher nicht geeignet.  Du wirst einige Wochen investieren müssen, um Deinen **FCL** anzupassen und feinzujustieren. Diese Zeit zu investieren, kann verbesserte Ergebnisse und **Glukose**-Kontrolle bringen.
- Während die Handhabung der Mahlzeiten einfacher wird, kann im **FCL** der Umgang mit Aktivität weiterhin herausfordernd sein. Die meisten von uns wollen beim Sport so wenig Snacks wie möglich zu sich nehmen und haben dabei die Körpergewichtskontrolle im Hinterkopf.
- Es bleiben noch Schwierigkeiten beim **FCL** mit Kindern (weiter unten diskutiert).


### Gut eingestellter Hybrid Closed Loop

Es ist ratsam, zuerst eine gut abgestimmte Steuerung des Hybrid Closed Loop (**HCL**) zu haben, bevor Du den Schritt zum **FCL** überlegst.  Ein erfolgreicher **FCL** braucht eine sehr individuelle Abstimmung der Einstellungen, damit **AAPS** so Insulin abgibt, wie es DEIN gut laufender Hybrid-Closed-Loop-Modus tut (d. h. er ahmt ihn nach).

**FCL** erfordert, das **Automationen** eingerichtet und optimiert werden. Bevor Du Dich auf **FCL** einlässt, musst Du ein sicheres Verständnis darüber haben, was ein Insulinmanagement braucht. Fehler können mit Gegenfehlern überdeckt werden. Dies kann ein labiles **FCL**-System zur Folge haben, dass danach nur schwer zu korrigieren ist. Du kannst erwarten, dass Du mit Deinem FCL einen %TIR erreichst, so wie Du ihn heute auch mit Deinem **HCL** hast.

**FCL ist ein DIY-Setup von Automatisierungen, das vom Benutzer durch die Analyse seiner Daten sowohl aus seinen erfolgreichen HCL- als auch aus seinen ersten FCL-Erfahrungen bei der Anpassung seiner Einstellungen erstellt wird.**

### Schnelles Insulin (Lyumjev, Fiasp)

**FCL** benötigt schnelles Insulin.  Es ist so, dass zu Beginn eines mahlzeitenbedingten **Glukosewert**-Anstiegs, **FCL** in der Lage ist, den **Glukosewert** im Zielbereich zu halten (üblicherweise unter 180 mg/dl (10 mmol/l)).

Eine Modellierungsstudie (Details siehe LINK FullLoop V2/March2023; dort Abschnitt 2.2) kann zeigen, dass *schnellere Insuline*

Quelle:

![IEEEControlSystemsMagazine](../images/IEEE_Control_Systems_Society_Logo_RGB.jpg) ![ResearchGate](../images/researchgate-logo-white.svg)



IEEE Control Systems Magazine, ResearchGate [The Artificial Pancreas and Meal Control: An Overview of Postprandial Glucose Regulation in Type 1 Diabetes](https://www.researchgate.net/publication/322866519_The_Artificial_Pancreas_and_Meal_Control_An_Overview_of_Postprandial_Glucose_Regulation_in_Type_1_Diabetes);

- zu signifikant niedrigeren Glukose-Spitzen führen, als langsamere Insuline;
- tolerieren ein um ein paar Minuten verzögerten ersten Mahlzeiten-Bolus, ohne dabei zu inakzeptablen Höhen der Spitzen zu führen; und
- minimieren die Auswirkung auf den **Glukose**-Spitzenwert durch unterschiedliche Kohlenhydratmengen (Mahlzeitengrößen).

**FCL** ist mit anderen Insulinen als Lyumjev oder Fiasp wahrscheinlich nicht effektiv, es sei denn, der Nutzende ernährt sich sehr moderat bis hin zu kohlenhydratarm.

Allerdings können Fiasp oder Lyumjev häufig zu Verstopfungen führen, auch wenn Dinge wie beispielsweise die Nadellänge angepasst wurden. It is important to have an eye on the cannula or pod time. Many users find 48 hours to be the efficacy insulin limit before resulting in cannula/pod failure.

### Prerequisites

**BG** values and stable bluetooth connectivity are required to ensure **AAPS** can optimally perform without losing valuable time. **FCL** requires a 24/7 technically stable system:

- your **CGM’s performance. Your CGM should not produce jumpy **BG** values that could be misinterpreted by **FCL** as a sign of a starting meal. Similarly, **CGM** calibrations can produce jumpy results.
- how and where any **CGM** smoothing is done, and what this might imply for your tuning. Notably how delta is defined, and AAPS recognising this as being sign of a starting meal.
- bluetooth stability for the pump and CGM  pump;
- avoiding (or at least early recognition of) pump occlusion;
- data flow and your phone's apps used and difference between days of sensor usage;
- keeping all **AAPS** components well charged and in spare parts close proximity; and
- actioning cannula (or pod) changes always early enough to lower the risk of occlusion;

The above will vary depending on your **AAPS** component system and your lifestyle.

### Mahlzeitbezogene Einschränkungen

- Setting up a **FCL** may be easier for people whose diets do not consist of food components with a rapid high effect on **BG**, and meal patterns that do not wildly vary day-to-day. This does not necessarily mean low carb.

- Fat or protein rich diets, or slow digestion/gastroparesis, make things easier rather than harder for **FCL**  because late carbs nicely cover for inevitable “tails” of late action from bolus needed around peak time.

#### Glycemic index and effect on blood glucose

The challenge for the **UAM** mode rises with rising 'Effect on Blood Glucose ('EBG')

- Start moderate/low, and tune your **Profile's** settings. Only then, "test" meals with high **EBG**.
- Consider a < 50% initial bolus if consuming very high **EBG**.

1) **No EBG**: e.g. fresh meat, fish, eggs, bacon, oils, cheese. 2) **Low EBG**: e.g. fresh vegetables and berries, mushrooms, nuts, milk, yoghurt, cottage cheese. 3) **Moderate EBG**: e.g. whole grain bread/noodles, potatoes, wild rice, oats, dried fruits. 4) **High EBG**:e.g. wheat breads, baguette, toast, waffles, cookies, mash potatoes, noodles, rice. 5) **Very High EBG**: e.g. sugar, sweet drinks, fruit juices, cornflakes, candy, sweets, potato chips, salty pretzel sticks.

![Glycemic index and effect on blood glucose](../images/fullClosedLoop01.png)

The most difficult meals for **FCL** are those foods exclusively very high and high **EBG** components (see red in the picture): Not only does **BG** shoot up rapidly, but also there is little fat/protein/fibre component to balance the inevitable “tail” of insulin activity that would come with attempts to control the high glucose earlier on.

Erratic consumption of snacks and sweet drinks that are loaded with fast absorbing carbs is problematic for **FCL**.


#### Vorbereitung auf Aktivität/Sport

When exercising or being active, with a pump or hybrid closed loop it is recommended that the user reduces **IOB** prior to exercise.

With **FCL**, the algorithm is tuned to detect **UAM** and automatically deliver insulin to counter **BG** rises.  A high **Temp Target** and lower **Profile Percentage** (effective already around meal start) should be set well in advance of any activity.

Unusual or erratic exercise activity levels present difficulties for **FCL**. Planning ahead is required for exercise (especially if you want to reduce the need for rescue carbs/snacks during sports low). After an active day it is recommended that a lower  **Percentage Profile** is set for overnight after the evening meal is fully digested: set in **Automations** an elevated (>100 mg/dl) **BG**  target, with “no **SMBs** at elevated target” selected in **AAPS*** preferences.

#### Hindernisse für Kinder

**FCL** can present extra challenges for children and these include:

- Lyumjev or Fiasp may not available or well tolerated.
- Hourly basal rate may very low, providing a poor basis for big **SMBs**.
- Diet may be rich in sweet components. With the typical low blood volume of a small body, strong tendency towards very high **BG** spikes.
- Growth hormones and going through marked changes of insulin sensitivity makes it difficult to keep the **FCL** accurately tuned.


## Enabling boosted SMBs: safety

In **HCL** safety restrictions are implemented regarding bolus sizes that can be automatically given by the loop.

**FCL** loopers no longer need to give a sizable bolus around meal start. The impact of this means that restrictions in size limits for **SMBs** must be widened to make the loop capable of delivering large enough **SMBs**.

If you are operating with **AAPS** in the Master release, it is suggested **AAPS**' Preferences are set up with the maximum allowed **SMB** size so that **FCL** can give (maxUAMSMBBasalMinutes=120, i.e. 2 hours worth of basal at that daytime).

If your basal rate is very low, the resulting **SMB** limits might be too low to allow sufficient control to tackle postprandial **BG** rises. One possible solution is to avoid diets that cause strong **BG** spikes and later switches to a **AAPS** dev variant that offers a new parameter in **SMB** delivery settings: smb_max_range_extension. Dies wird das Standardlimit von 2 Stunden Basalwert um einen Faktor von >1 erhöhen. (Zusätzlich kann das Standardabgabe-Verhältnis von 50 % **SMB** in der Entwicklerversion erhöht werden ).

**Folge der Anleitung, um AAPS so aufzusetzen, dass mit einigen SMBs Deine normale Art zu bolen nachgeahmt werden kann**.

Kontrolliere den **SMB**-Reiter regelmäßig, um zu erkennen, ob Deine **SMBs** groß genug sein dürfen, um die Insulinmenge, die der Loop zu Beginn der Mahlzeit abgeben soll, zur Verfügung gestellt werden kann.

Wenn nicht, werden Deine Tuning-Bemühungen mitunter vergebens sein!


```{admonition} Boosting **ISF** can become dangerous
:class: danger

Beobachte/analysiere die **SMB**-Größen kurz nach Beginn der Mahlzeit sehr genau. Verändere in kleinen Schritten und nicht mehr als 1 oder 2 Parameter auf einmal.

Deine **AAPS**-Einstellungen müssen gut genug eingestellt sein, um Deine (!) Essensgewohnheiten und Mahlzeitenauswahl bewältigen zu können.
```

## Mahlzeiterkennung / Deine Automationen zum Boosten

Der Schlüssel für einen erfolgreichen **FCL** ist der richtig abgestimmte **ISF**-Parameter. Wenn der **AAPS**-Master mit **Automationen** genutzt wird, muss **bei der Erkennung einer Mahlzeit (über Glukose-Deltas) automatisch eine Profiländerung > 100% ausgelöst** werden, damit ein aggressiverer **ISF** zur Verfügung steht.

Die **AAPS**-Master-Version erlaubt im **HCL**-Modus ein maximales temporäres **Profil** von bis zu 130 %. Das Boosting des **ISF** erfolgt in drei Schritten:

- Schritt 1 -  Überprüfe im **Profil** den für dieses Zeitfenster gültigen **ISF** und schaue, ob z. B. Autosens, das die aktuelle Insulinempfindlichkeit Deines Körpers der letzten Stunden berücksichtigt, eine Änderung vorschlägt.
- Schritt 2 - Wende einen Faktor (1/Profil%, wie in **Automation** hinterlegt) an, um den **ISF** zu verstärken.
- Schritt 3 - Stelle sicher, dass der vorgeschlagene **ISF** innerhalb der festgelegten Sicherheitsgrenzen liegt.

### FCL Automationsvorlagen

Kästchen, die oben markiert werden sollen. Du hast die Option:

- In Deiner **Automatisierung**s-Liste kannst Du das Häkchen (links von jedem Feld) entfernen => Damit deaktivierst Du die **Automatisierung**. Das kann beispielsweise für alle **FCL**-**Automatisierungen**, die im Zusammenhang mit einem Frühstück stehen, auf dem Weg zum **HCL** für Frühstück erfolgen.

- Für jede **Automatisierungs**-Regel kannst Du das das Kästchen für Benutzeraktion markieren => wenn die Bedingungen erfüllt sind, werden die definierten Aktionen nicht automatisch ausgeführt. Du wirst dann auf der **AAPS**-Übersichtseite jedes Mal alarmiert, wenn Dein **FCL** sonst automatisch einen **SMB** abgeben würde. Du hast dann die Möglichkeit, dazu dann „Ja“ oder „Nein“ zu sagen. Dies hilft insbesondere in der Tuning-Phase.

Diese Funktion kann für bestimmte Situationen wie z. B. das Aufsteh-Phänomen (engl. „foot to floor“) nützlich sein, bei dem es zu einem plötzlichen Anstieg des **Glukosewerts** kommt, sobald Du morgens aufstehst, Du aber eine vollautomatische „Frühstück begonnen"-Reaktion verhindern möchtest.

Der untenstehende Abschnitt enthält Anleitungen, wie man die **Automatisierungs**-Bedingungen zusammenfasst und wie man Situationen begegnen kann, in denen **AAPS** die Insulinabgabe erhöhen (oder verringern) sollte. Da der **ISF** nicht direkt angepasst werden kann, wird das prozentuale Anheben des **Profils** über 100 % für unsern Zweck den gleichen Effekt haben.

### Automatisierte große SMBs bei Glukoseanstieg

Der Schlüssel zu einem erfolgreichen **FCL** ist, **zu Beginn des mahlzeitbedingten Glukoseanstiegs so schnell wie möglich große automatische SMBs durch den Loop abzugeben**, um das benötigte **IOB** „aufzuholen” (verglichen mit dem normalerweise für vergleichbare Mahlzeiten abzugebenden Bolus im **HCL**!)

Um das zu erreichen, sollten die Daten aus Deinem **HCL** analysiert werden, um herauszufinden, welche **Deltas** nicht durch Mahlzeiten verursacht sind und welche Deltas schon.

- Da Du die **Automatisierung** auch nur in einem vordefinierten Zeitfenster ausführen lassen kannst, musst Du auch nur in diesem analysieren.
- Wenn Deine Mahlzeiten in der Zusammensetzung sehr unterschiedlich sind (z.B. ein eher kohlenhydratreiches Frühstück, aber ein kohlenhydratarmes Mittagessen), kannst Du Dich dafür entscheiden für jedes der Zeitfenster zwei verschiedene **Automatisierungen** (bzw. Automatisierungsgruppen) zu erstellen.
- Wenn Du gelegentliche nächtliche Sprünge durch "compression lows" siehst, spare die Nächte aus.
- Normalerweise reicht es aus, das Delta der letzten 5 Minuten zu verwenden.
- Du kannst aber auch eines der durchschnittlichen Deltas verwenden. Durch das Vergleichen der Deltas als Bedingung in Deiner **Automatisierung**, kannst Du - abhängig davon, ob der **Glukosewert** schneller steigt oder nicht - sogar unterschiedliche aggressive Aktionen festlegen.

> ( BZ-Unterschied - kurzes durchschnittl. Delta )>n ist ein Ausdruck, der zur Erkennung eines sich beschleunigenden Anstiegs genutzt werden könnte, um so den ersten **SMB** beim ersten Anzeichen steigender **Glukose** auszulösen. -                                                                             
> Achtung: nicht mit schlechten oder stark geglätteten **CGM-Werten verwendbar!

Ein **CGM** mit lückenhaften Daten bringt den Benutzer in eine schwierige Situation, denn es ist aus Sicherheitsgründen,  extrem wichtig, dass das gewählte (bzw. beobachtete) Delta ein sicheres Zeichen für einen Mahlzeitbeginn ist. Das bedeutet:

- Der **FCL** verliert zusätzliche Zeit, was zu höheren **Glukosewert**-Spitzen und einem niedrigeren **TIR**-Prozentsatz führt;
- Du kannst im **FCL** kein früheres oder kleineres Delta benutzen, da dieses auch **SMBs** ohne eine Mahlzeit zum Ausgleich eines manuellen Bolus auslösen können.

Zudem werden schon kleine Anstiege nach einer Mahlzeit durch **wenig IOB** erkannt. Das berücksichtigend, kann eine Automation(#1) für ein Abendessen wie folgt aussehen:

![8mg jump 130% ioby4](../images/fullClosedLoop02.png)

Automatisierung #1

Wenn die Bedingungen eintreten, würde **AAPS** in den nächsten 12 Minuten 1 oder 2 - gemäß dem festgelegten höheren **Profil-Prozentsatz** geboosteten **ISF** - **SMBs** abgeben (im Beispiel, eine Erhöhung von insulinReq um 30 %). Solange diese Bedingungen zutreffen, wird die **Automatisierung**sregel um weitere 12 Minuten verlängert. Eine kohlenhydratarme Mahlzeit könnte langsamere Anstiege der **Glukosewerte** zeigen. Dieser würde von einer weiteren Automation (#2) profitieren, die bei einem niedrigeren Delta einsetzt und einen schwächeren Insulin-Boost gibt.

![>=5mg jump 115%, iob<5.5](../images/fullClosedLoop03.png)

Die gleiche **Automatisierung** wird wahrscheinlich auch bei Mahlzeiten mit höherem Kohlenhydratgehalt greifen, sobald der steile Anstieg, wie in Automation#1 definiert, vorbei ist.

Diese beiden (und eventuell eine dritte) **Automatisierungen** musst Du so arrangieren, dass sie zu dem passen, was Du bei Deinen verschiedenen Mahlzeiten siehst => die richtigen Sprunghöhen, **IOB**-Kriterien und Verstärkungen zu setzen, wird ein iterativer Abstimmungsprozess.  Wenn Du einen geeigneten Zeitraum in den Bedingungen angibst, kannst Du ganz einfach unterschiedliche Automationen für Deine verschiedenen täglichen Mahlzeitenzeiten (Frühstück, Mittagessen, Abendessen) ausführen.

Berücksichtige bitte, dass noch in der Steigphase (!), ein **IOB**-„Überschuß“ verhindert werden muss, damit das nach 3-5 Stunden noch wirkende **Insulin** (das „**Wirkende**“ (sog. tail)) nicht die durch das Zero-Temping mögliche Abbremswirkung überschreitet („Basal entziehen“, um das Hypo-Risiko zu reduzieren).

Bei großen Mahlzeiten gibt es **manchmal einen zweiten Anstieg**. Bis zu diesem Zeitpunkt hat sich das aktive Insulin (IOB) in der Regel schon verringert und die aggressiveren Automationen greifen wieder. (Damit das nicht passiert, überprüfe, dass die IOB-Bedingung in der Automation #2 nicht zu niedrig eingestellt ist).

Kurz nachdem einige erste **SMBs** abgegeben wurden, kommt eine **balancierte Phase**, in der eine moderate zusätzliche Insulinabgabe die zusätzliche aufgenommenen Kohlenhydrate abdecken sollte. (Außer bei kohlenhydratarmen Mahlzeiten, bei denen der Loop möglicherweise einen zu schwachen **Glukose**anstieg sieht und sofort in das Zero-Temping geht).

Die **AAPS**-Übersicht (wo Du COB=0 bei **UAM** im Full Loop siehst) könnte in dieser Phase nach zusätzlichen Kohlenhydraten fragen. Im **UAM**-Modus bedeutet das einfach, dass Du eine sehr grobe Plausibilitätsprüfung machen kannst: Ist es wahrscheinlich, dass diese Kohlenhydrate der Mahlzeit von vor einer Stunde unverdaut in Deinem Körper sind (von denen Du dem Loop nichts mitgeteilt hast)?


### IOB-Schwellenwert

Oft bewirken die **Automatisierung** #1 und/oder #2, dass das IOB soweit aufgebaut wird, dass es typischerweise **Deine** Mahlzeiten abdeckt. Für eine individuelles Tuning, schau in den Daten Deines **HCL** nach den maximalen IOB-Werten (max IOB), die bei gut kalkulierbaren Mahlzeiten auftreten (meist: Dein Mahlzeiten-Bolus), und in welchem Ausmaß danach eine Hypo (oder der Bedarf an zusätzlichen Kohlenhydraten) auftrat.

Sensible **IOB-Schwellwerte**, bei denen Du die Aggressivität Deines Loops reduzieren solltest, sind möglicherweise nicht für jede Mahlzeit identisch. Aber vor allem in der ersten Stunde nach Beginn einer Mahlzeit, die im **UAM**-Modus entscheidend ist. It will defer to for each user. For some users just about 30g/hour get absorbed, and to define a meaningful **iob** independent of the exact meal can be possible.

For exceptional meals, or to lower it if sports follow, the **iob** threshold can rapidly be set differently in your **Automation**.

Automation(#3),”iobTH reached => **SMBs** off”, is defined to end (or pause, until another wave of carb-related rise hits) the aggressive **SMB** boosting.

![iob >5.5...111 TT = SMBs off 16m](../images/fullClosedLoop04.png)

Automatisierung #3

It tells the loop that above your set **iob threshold** it's better not to use any more **SMBs**

- The given example does that by setting TT=111 (which is kind of arbitrary; pick a number>100 that you easy recognise as your automated **SMB** shut-off)
- In **AAPS' Preferences/ SMB** Settings generally do not allow **SMB** at elevated target).                                                                                                                   
  The insulin required will then have to be delivered with much more caution through the bottleneck of **TBRs**

**Achtung: Automatisierung #3 funktioniert nur, wenn kein aktives TT gesetzt ist.** Falls Du also mit einem temporären Ziel „Bald Essen“ gearbeitet hast, muss dieses bis zum Start der Automatisierung beendet sein (d. h. normalerweise 30-40 Minuten nach Beginn der Mahlzeit).

One way to do this is to set up an **Automation** Condition that ends an eventually running EatingSoonTT under the Condition **iob**>65% * iobTH.
> Ways to work with EatingSoonTT Some loopers set (by pressing the TT button, or automated via a lowered **Profile** **BG** target if eating time slots are fairly fixed) an EatingSoonTT roughly an hour or more before meal start, just to guarantee a low starting **BG** and slightly increased  **iob**. But, assuming the **FCL** is always en route towards target, this might not yield much and you may prefere to define an **Automation** that sets an EatingSoonTT at recognition of meal start (glucose delta, or acceleration = delta > avg delta). A low **TT** is important in this stage because any **SMB** is calculated by your loop using (predicted glucose minus TT)/sens, so a small TT makes the resulting insulinReq bigger.

After the first boosted **SMB**s were given, your set iobTH and *Automation** #3 should strike a good balance of limiting the glucose peak, but also not leading to a hypo after the meal.

If your breakfast substantially deviates in carb content from your average dinner, you may benefit from defining **Automations** that apply in the respective times of day, and have different **iobTH** (possibly also different deltas, and different **Percentage Profile** set). Both, you with defining your meal spectrum and settings (notably, **iobTH**), and the loop managing the unfolding **BG** curve, must accept certain peak heights for reducing hypo danger towards the end of the **DIAs** from **SMBs**.

### Stagnierende hohe Glukosewerte

In case, after a “rich” meal, a long-lasting stagnation with **high BG** value is seen, **Automation** #6 (below, left),"post-meal High”, helps deal with fatty acid resistance: After multi-course meals, large greasy pizza, raclette evening, the glucose curve can form two humps or, very often, an elongated high plateau.

![iob >5.5...111 TT = SMBs off 16m](../images/fullClosedLoop05.png)

Automation #4

![iob >5.5...111 TT = SMBs off 16m](../images/fullClosedLoop06.png)

Automation #5

Automation #4, “Hoch nach dem Essen”, ist auch für einen Hybrid Closed Loop anwendbar

Außerdem muss die Automation#5 abgebrochen werden können ("Stopp Hoch nach dem Essen"), damit die Insulinabgabe bei einem sinkenden Glukosewert weniger aggressiv erfolgt. (Allerdings wird der Loop, bei einem niedrigen erwarteten Glukosewert oft ohnehin schon die Insulinabgabe reduzieren bzw. begrenzen).

### Einer Hypo vorbeugen

The core problem is that the **UAM** **FCL** (without carb inputs) can have **no idea how many g of carbs are still available** for absorption, and might use up that “tail” insulin, without you going into a hypo from it.

Using boosted **SMBs**, the **FCL** “caught up” with what we formerly did with a meal bolus. Aber **zum Ende der Insulinwirkung ("tail end") kann das Vermeiden einer Hypo zu einem ernsten Thema werden**.

In preparation for **FCL**, the user must take a closer look at the **time course of iob** for typical meals, and judge **when it becomes too much, and how you can catch that by tuning your Automations**. That is possible because we have several adjusting screws. It can be a challenge to get this right

Im Allgemeinen macht es keinen Sinn, Einstellungen nur für eine Mahlzeitenart weiter zu optimieren. Sobald Du eine ausreichend gute Einstellung z.B. für eine Art Deines Mittagessens hast, teste, wie diese mit anderen Arten funktioniert, und wie Du einen „Kompromiss“ findest.

Um Hypos 3-5 Stunden nach einer Mahlzeit zu vermeiden, reduziere die Aggressivität, bevor zu viel aktives Insulin (IOB) aufgebaut wird. Besondere Ansätze:

- Become milder and milder with the **ISF** already during the glucose rise, as in Automation examples #1 and #2 given.
- Define the iob threshold, from which **AAPS** is made significantly more cautious (Automation #3, above). Note this **iob** can be exceeded, by the last **SMB** before it went into effect; and then further by TBRs if the loop sees insulinReq Carbs getting absorbed will provide a counter-movement towards lower iob.
- The iob threshold could be differentiated according to meals: By cloning the automations, you could easily differentiate for breakfast, lunch, and dinner time slots (or even for geo-locations, like company cafeteria, or at mother-in-law etc)
> You could differentiate within these time slots even further by setting different TTs for low carb vs. fast carb, etc., and thus be able to “code for” different meal classes that may occur at this time of day, and call them up with **Automations** specially tuned for them. This is probably not necessary, unless your diet habits do vary a lot.

Before a special meal challenge, you can raise your **iob** threshold, or make another change in any of your Automations within under 5 seconds, right from your AAPS main screen (burger top left; or **Automations** tab, depending how you configured your **AAPS**).

Die Gefahr einer Hypo einge Stunden nach dem Essen ist im Wesentlichen eine Frage, ob Deine Mahlzeit-Zusammensetzung so war, dass die **Insulinrestwirkungen ("tails"), die gegen den Großteil der Kohlenhydrate ankämpfen**, von **"verlängerten Kohlenhydraten" verbraucht ** werden (übermäßige/verzögerte Kohlenhydrataufnahme/Protein/Fett/Ballaststoffe).

Im Laufe der Zeit wirst Du Muster erkennen, Deine Automatisierungen adjustieren - vielleicht sogar Deine Essgewohnheiten ein wenig anpassen, z.B. einfach einen gelegentlichen kleinen(!) Snack genießen, der helfen kann, eine gute **Balance zwischen Insulinaktivität und Kohlenhydratabsorption** für die **gesamte** Dauer der Mahlzeit (mit Verdauung, Absorption) zu halten und so das Leben Deines Loops (und für Dich selbst) einfacher zu machen.

### Reihenfolge der programmierten Automationen

Problems can arise with overlapping definitions in **Automations**. Example: The problem is that delta >8 is also delta >5, i.e. there may be two competing **Automations** What does the loop do then? It always decides according to the sequence in which your **Automations** appear when looking into the burger menu / AdAPS main screen.  Beispiel: Die Delta > +8-Regel muss als erstes ausgeführt werden (und startet, wenn alle Bedingungen zutreffen den stärksten Boost); danach folgt die Überprüfung auf Delta >5 (und eine sanftere Reaktion). Würden sie anders herum sortiert und ausgeführt werden, würde die Delta >8-Regel nie in Kraft treten, weil bereits Delta >5 angewendet wird, Fall abgeschlossen.
> Tip for Automations: Order changes are very easy to make. Press on a list entry in **AAPS/Automations** and the user rearrange the **Automations** in question to another position.

Genauso schnell und einfach kannst Du Auslöser oder Aktionen binnen weniger Sekunden auf Deinem AAPS-Smartphone anpassen; wenn Du beispielsweise an einem besonderen Essens-Event teilnimmst. (Aber vergiss nicht, sie für den nächsten Tag wieder auf "normal" zu setzen).

## Problembehandlung

### Wie man wieder in den Hybrid Closed Loop zurückkehrt

You can un-click the top boxes in the **Automations** related to your **FCL**, and go back to bolusing for meals and make carb inputs again. You may have to go to **AAPS** Preferences/Overview/Buttons and get your Buttons “Insulin, Calculator…” back for your **AAPS** main screen. Be aware that now it is again up to you to bolus for meals.

It may be wise to do **FCL** only for meals (time slots) where **Automations** are fully defined and clicked on, and un-click only those for the other meal times when you like to do **HCL** (or have none defined yet, in your transition period).

For instance, it is perfectly possible, without any extra steps after **Automations** for dinner time slots are defined, to do **FCL** only for dinners, while breakfast and lunch are done in a **HCL** as you are used to.



### Sind die Voraussetzungen für einen FCL immer noch gegeben?

- Is the basic **Profile** still correct?
- Has the **CGM** quality deteriorated
- Refer to pre-requisites (above).

### Glukosewerte steigen zu weit an

- Mahlzeiten werden nicht sofort erkannt
    - Prüfe die Bluetooth-(In)Stabilität
    - Check whether you could set smaller deltas to trigger first **SMB**
    - Experimentiere mit einem Aperitif, einer Suppe einige Minuten vor der eigentlichen Mahlzeit
- SMBs sind zu schwach
    - Check order of **Automations** (e.g.: big delta before small delta)
    - Check (real-time) in **SMB** tab whether hourly profile basal and set minutes (max 120) limit allowed SMB size
    - Check (real-time) in**SMB** tab whether %profile must  be set bigger
- Wenn alle Deine Einstellungen das Limit erreicht haben, wirst Du möglicherweise mit den vorübergehend hohen Werten leben oder Deine Ernährung anpassen müssen.
> Wenn Du dazu bereit bist AAPS-Entwicklungsversionen zu nutzen, kannst Du auch eine Version verwenden, die größere SMBs zulässt. Einige Nutzende greifen auch auf einen kleinen Pre-Bolus in ihrem „FCL“ zurück. However, this interferes with how glucose curve and hence detection of rises and triggered **SMBs** behave, and is therefore not easy to implement with convincing overall benefit.
- Eine wichtige Erkenntnis von Nutzenden im Piloten war, dass es sehr wichtig ist, wie sich Deine Glukose- und IOB-Kurven dem Beginn der Mahlzeit nähern, um zu bestimmen, wie stark sie durch Kohlenhydrate ansteigen: Das Abfallen (zum Beispiel in Richtung eines temporären Ziels "Bald Essen"), der Aufbau von etwas IOB und eine bereits begonnene positive Beschleunigung, scheinen zu helfen, die Spitzen niedrig zu halten.

### Glukosewerte fallen zu weit ab

- Mahlzeiten werden fälschlicherweise erkannt
    - Check whether you could set bigger deltas to trigger first **SMB**
    - Klicke auf „Benutzeraktion“ in der entsprechenden Automation, damit Du zukünftig spontan entscheiden kannst, die Automation auszuführen oder zu blockieren, wenn sie nicht auf eine Mahlzeit zurückzuführen sind
    - To prevent snacks from triggering **SMBs** as for a meal, set a TT>100 when snacking (as you would do in sports and for anti-hypo snacks, anyways)
- SMBs liefern insgesamt zu viel Insulin
    - Check (real-time) in **SMB** tab whether **SMB** range extension must be set smaller
    - Check (real-time) in **SMB**tab whether **Percentage Profile** must  be set smaller
    - SMB Lieferquote kann vermutlich verkleinert werden. Note in this case, it works across the board for all **SMBs** (all time slots),
- Probleme mit der Insulin-Restwirkung ('tail') nach den Mahlzeiten
    - Du brauchst möglicherweise einen Snack (bei einer Hypo-Vorhersage) oder Glukosetabletten (wenn Du bereits in der Hypo-Zone bist). Aber beachte, dass die benötigten Kohlenhydrate, die der Loop zu einem bestimmten Zeitpunkt angeben wird, zu hoch sein werden. Der Loop hat keinerlei Informationen über Deine Kohlenhydrataufnahme (obwohl Du möglicherweise erraten kannst, wie viel mehr, einschließlich der Kohlenhydrate aus Fetten und Proteinen immer noch darauf wartet, verstoffwechselt zu werden).
    - Eine wertvolle Information wäre, ob das Problem hauptsächlich bereits in der Glukose-Anstiegsphase entsteht. Dann könnte eine einfach Lösung sein, iobTH zu verringern.
    - Wenn der Bedarf an zusätzlichen Kohlenhydraten häufig auftritt, notiere Dir, wie viele Gramm benötigt wurden (ohne das, was Du möglicherweise zu viel genommen hast und dann wieder etwas Insulin erforderte).  Nimm dann den in Deinem Profil hinterlegten Korrekturfaktor (IC) und schätze ab, wie viel Insulin weniger die **SMBs** hätten liefern sollen, und gehe mit diesen Informationen in die Nachjustierung (des **prozentualen Profils** in den **Automatisierungen** oder eventuell auch des eingestellten iobTH). Dies kann sich auf die**SMBs** beziehen, die bei hoher Glukose abgegeben wurden, oder auf die **SMBs**, die während des **Glukoseanstiegs** abgegeben werden.
    - Es könnte gut sein, dass Du höhere **Glukose**spitzen zum Vermeiden einer Hypo akzeptieren musst. Oder stelle Deine Ernährung auf kleinere Kohlenhydrat- und höhere Fett- und Proteinmengen um.


### Weitere Informationen

Stelle sicher Dich mit anderen **FCL**-Benutzenden zu vernetzen und auszutauschen.

Diskussion Full Closed Loop mit Automatisierungen:

- English:   [Discord Channel](https://discord.gg/ChXj8BaKwA)

- Deutsch:  [German Looper Community](https://de.loopercommunity.org/t/ueber-die-kategorie-full-loop/10107)
