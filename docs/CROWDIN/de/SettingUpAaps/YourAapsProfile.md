# Dein AAPS-Profil

Your **AAPS Profile** is a set of four key parameters which define how **AAPS** should deliver insulin in response to your sensor glucose levels. Dies sind die Hauptparameter auf denen **AAPS** aufbaut. Während Du Dich durch die **Ziele** arbeitest, wirst Du weitere einstellbare Parameter (wie SMB-Einstellungen) freischalten. Die Wirksamkeit dieser Funktionen hängt aber hauptsächlich davon ab, dass Dein zugrundeliegendes **Profil** korrekt ist. Das **Profil** enthält:
* [Glukoseziele](#profile-glucose-targets),
* [Basalraten](#your-aaps-profile-basal-rates) (BR),
* [Insulinempfindlichkeits- / Korrekturfaktoren](#your-aaps-profile-insulin-sensitivity-factor) (ISF; engl. insulin sensitivity factors) und
* [Mahlzeitenfaktoren / KH-Faktoren](#your-aaps-profile-insulin-to-carbs-ratio) (IC oder ICR; engl. insulin-to-carb ratios).

```{admonition} Where did DIA go?
:class: note
The **duration of insulin action (DIA)** is no longer part of your **Profile**. It is set per insulin instead — see [Manage → Insulin settings](#Config-Builder-insulin-dia).
```

As part of **AAPS**’ management, users should continually assess and scrutinize the accuracy of their **Profile** settings. Es wird empfohlen, die Einstellungen in der Reihenfolge vorzunehmen, wie es hier dargestellt ist. Stelle sicher, dass die Einstellung wirklich richtig ist, bevor Du die jeweils nächste in Angriff nimmst. Taste dich in kleinen Schritten voran, statt zu viele Änderungen auf einmal vorzunehmen. Vergiss nicht nach jeder Änderung Dein Profil auch zu aktivieren. Regularly [back up your **Profile**](#YourAapsProfile_Profile-backup) settings by exporting your settings.

Deine **Profil**-Einstellungen hängen voneinander ab - Du kannst u. U. „schiefe“ Einstellungen haben, die in bestimmten Situationen gut zueinander passen, aber in anderen Situationen überhaupt nicht funktionieren. Wenn zum Beispiel ein zu hohes Basal auf einen zu hohen (schwachen) **CR** (Mahlzeit-Faktor) trifft. Das bedeutet, dass Du die Einstellungen individuell betrachten und überprüfen musst, ob sie unter den verschiedenen Bedingungen gut funktionieren.

Du kannst [Autotune](https://autotuneweb.azurewebsites.net/) zwar als Ausgangspunkt für Deine Überlegungen verwenden, solltest ihm aber nicht blind vertrauen: Es funktioniert unter Berücksichtigung aller individuellen Einflüsse möglicherweise bei Dir nicht gut genug.

```{admonition} Your diabetes may vary
:class: note
**Profiles** vary significantly from person-to-person.

Für die restlichen drei Parameter Basalrate (BR), Insulinempfindlichkeitsfaktoren (ISF) und Insulin-Kohlenhydrat-Verhätnisse bzw. Mahlzeitenfaktoren (IC oder ICR), variieren die absoluten Werte und Trends Deines Insulinbedarfs. Der Insulinbedarf ist dabei abhängig von Deiner Biologie, Geschlecht, Alter, Fitnessgrad usw., aber auch von vorübergehenden Einflüssen wie Krankheit und sportlicher Aktivitität und variiert mitunter erheblich. Für tiefere Einblicke in das Thema wird das englischsprachige Buch [“Brights Spots and Landmines”](https://diatribe.org/bright-spots-and-landmines/) von Adam Brown empfohlen.

```

Die vier letzten Parameter (Glukoseziele, Basalraten, Insulinempfindlichkeitsfaktoren und Mahlzeitfaktoren) können auf unterschiedliche Werte eingestellt werden, die bei Bedarf stündlich wechseln.

![Stündliche Änderung des Basals](../images/MaxDailyBasal2.png)

**AAPS**-Screenshots eines _Beispiel_-Profils sind unten zu sehen. Dieses Beispielprofil enthält sehr viele Zeitfenster. Wenn Du mit **AAPS** startest, hast Du wahrscheinlich ein deutlich einfacheres Profil.

![Example active profile](../images/Profile-Example-Active.png)

(profile-glucose-targets)=
## Glukoseziele

### Beschreibung

Dein **Glukoseziel** ist der zentrale Wert. Alle **AAPS**-Berechnungen basieren darauf. Er ist nicht der Zielbereich, in dem Du normalerweise versuchst Deine Glukosewerte zu halten. Das Glukoseziel wird in **AAPS**-Berechnungen verwendet: Wenn **AAPS** voraussagt, dass Dein **Glukosewert** außerhalb des Zielbereichs landen wird, wird es Maßnahmen ergreifen, um wieder in den Bereich zurückzukommen.

The targets can be defined within those boundaries :

|         | _Unteres_ Ziel         | _Oberes_ Ziel            |
| ------- | ---------------------- | ------------------------ |
| Minimum | 4.4 mmol/L or 80 mg/dL | 5 mmol/L or 90 mg/dL     |
| Maximum | 10 mmol/L or 180 mg/dL | 11.1 mmol/L or 200 mg/dL |

### Auswirkung

If the target in your **Profile** is very wide (say, 3 or more mmol/L [50 mg/dL or more] wide), you will often find little **AAPS** action. Das liegt daran, dass der vorhergesagte **Glukosewert** innerhalb des weiten Bereichs befindet und es daher unwahrscheinlich ist, dass **AAPS** mit Änderungen der temporären Basalrate reagieren wird.

### Wie es eingestellt wird

Die **Abbildung unten** zeigt ein Beispiel wie im **AAPS**-Profil das Glukoseziel hinterlegt werden kann.

![Ziel](../images/Profile_Target.png)

**Glukoseziele** werden so gesetzt, dass sie zu Deinen eigenen Wünschen und Anforderungen passen. Wenn Du beispielsweise Angst vor nächtlichen Hypos hast, kannst Du Dein Glukoseziel von 21.00 - 07.00 Uhr auf 117 mg/dl setzen (6,5 mmol/l) setzen. Wenn Du erreichen möchtest, dass Du vor dem Frühstücksbolus am Morgen bereits genügend aktives Insulin (IOB) im Körper hast, könntest Du für die Zeit von 07.00 - 08.00 Uhr ein niedrigeres Ziel von 81 mg/dl (4,5 mmol/dl) setzen.

Wenn Du im [Open Loop](#KeyAapsFeatures-OpenLoop) und insbesondere beim Durchlaufen der [ersten Ziele](../SettingUpAaps/CompletingTheObjectives.md) bist, gerade lernst wie sich **AAPS** verhält und/oder Du Dein **Profil** anpasst, kann es helfen den Zielbereich etwas weiter zu wählen.<br/> Sobald Du in den [Closed Loop](#KeyAapsFeatures-ClosedLoop) (beginnend mit dem **[Ziel 6](#objectives-objective6)**) wechselst, wird empfohlen den Zielbereich für jeden Tagsabschnitt bis auf einen einzelnen Zielwert (_unteres_ Ziel = _oberes_ Ziel) zu verkleinern. Damit kann **AAPS** schnell auf **Glukosewert**-Schwankungen reagieren.

(your-aaps-profile-basal-rates)=

## Basalraten

### Beschreibung

Deine Basalrate ist die Insulinmenge (Einheiten pro Stunde), die abgegeben wird, um Deinen Glukosewert ohne Nahrung und Sport stabil zu halten

Die Insulinpumpe liefert alle paar Minuten kleine Mengen schnell wirkendes Insulins, um die durch die Leber abgegebene Glukose entsprechend in die Körperzellen zu bringen. Basalinsulin macht typischerweise 40 - 50% Deines täglichen Gesamtinsulinbedarfs (TDD) aus und ist abhängig von Deinen Ernährungsgewohnheiten. Es folgt üblicherweise Deinem Biorhythmus (cirkadianes Muster) mit einer Spitze und einem Tal im täglichen Insulinbedarf. Für weitere Informationen ist das Kapitel 6 des englischsprachigen Buches [“Think like a Pancreas”](https://amzn.eu/d/iVU0RGe) von Gary Scheiner lesenswert.

Most type 1 diabetes educators (and people with type 1 diabetes!) agree that you should work on getting your basal rates correct, before attempting to optimize your ISF and ICR.

### Auswirkung

Saubere Basalraten ermöglichen Dir Morgens mit Werten im Zielbereich wachzuwerden, Mahlzeiten auszulassen, früher oder später essen zu können ohne hohe oder niedrige Werte zu bekommen.

Eine zu hohe Basalrate kann zu niedrigen Glukosewerten führen. Und umgekehrt.

Die Standard-Basalrate ist der Referenzwert für **AAPS**. Wenn die Basalrate zu hoch ist, führt ein 'zero temp' (temporäres Abschalten der Basalrate durch AAPS) zu einem höheren negativen IOB (insulin on board - im Körper aktives Insulin) als es sollte. Dies wird dazu führen, dass **AAPS** häufiger korrigiert als es tatsächlich notwendig wäre, um am Ende IOB auf Null zu bringen.

Eine zu hohe Basalrate führt also zu niedrigen **Glukosewerten** sowohl durch die Standard-Basalrate als auch später durch die Korrekturen von **AAPS** auf den Zielwert.

Umgekehrt kann eine zu niedrige Basalrate zu zu hohen Glukosewerten führen und AAPS daran hindern, diese wieder in den Zielbereich zu bringen.

### Wie es eingestellt wird

Die **Abbildung unten** zeigt ein Beispiel, wie im **AAPS**-Profil die Basalrate hinterlegt werden kann.

![Basalraten](../images/Profile_BasalRates.png)

Die richtige Basalrate zu finden ist ein „Trial and Error“-Prozess, und sollte in Abstimmung mit Deinem Diabetes-Team erfolgen.

Basalraten-Tests bringen es normalerweise mit sich, während einer <u>begrenzten</u> Fastenperiode in einem 24-Stunden Zeitraum die Basalrate und den Insulinbedarf zu beobachten. Auch wenn die Basalrate für einen ganzen Tag getestet werden muss, ist es nicht empfehlenswert 24 Stunden am Stück zu fasten. Das liegt daran, dass der Körper über spezielle Mechanismen versuchen wird das Fasten (z. B. durch Hormonausschüttung) auszugleichen. A recommended way is to fast over 3 different days for a period of 8 hours.

Das empfohlene Vorgehen ist, den Loop zu deaktivieren (als Vorsichtsmaßnahme kann AAPS - wie Du es schon zum Erreichen des [Ziel 6](#objectives-objective6) gemacht hast - in den Modus [**LGS**](#KeyAapsFeatures-LGS) gebracht werden). So kannst Du niedrige Werte vermeiden und es wird später automatisch auf die hinterlegte Standard-Basalrate zurückgekehrt. Beobachte wie sich Dein **Glukosewert** entwickelt: Sinkt er, ist die Basalrate zu hoch. Und umgekehrt.<br/> Eine andere (möglicherweise schwierigere) Methode ist, den Loop aktiv zu lassen und zu beobachten, wie sich das **IOB** verändert. Wenn das **IOB** negativ ist, ist Deine Basalrate zu hoch. Und umgekehrt. Beachte, dass diese Methode den **ISF** nutzt, um damit den **Glukosewert** zu korrigieren. Damit hängt der Erfolg von mehreren Variablen (und nicht nur von der Basalrate) ab.<br/> Eine weitere Möglichkeit die Basalrate anzuzupassen ist, die Loop-Aktionen während der Nacht, wenn keine Kohlenhydrate mehr aktiv sind, zu beobachten. Diese Methode ist besonders für Kinder, für die Fasten oft schwierig ist oder deren Insulinbedarf sich oft ändert, geeignet. [Dr. Saleh Adi von Tidepool](https://www.youtube.com/watch?v=-fpWnGRhLSo) bietet hilfreiche Wege, wie Du nächtliche Glukoseverläufe analysieren kannst und daraus Optimierungen der Basalrate ableiten kannst, an.

[Hier](../GettingHelp/ProfileTuning.md) erfährst Du durch das Analysieren von Mustern im Closed Loop, wie Du Dein Basalprofil feinjustieren kannst.

Wenn Du auf Basis der Ergebnisse des Basalratentests Veränderungen vornehmen möchtest, sollten diese im **Profil** 1 bis 2 Stunden (abhängig vom Insulintyp) vor dem Anfstieg/Abfall eingearbeitet werden. Wiederhole den Test so lange, bis Du mit Deiner **Basalraten**-Einstellungen zufrieden bist.

(your-aaps-profile-basal-not-compatible)=
#### Message: "Basal rate is not compatible with the current pump"

Each pump has limits: a lowest and a highest basal rate it can deliver and, for some pumps (for example Dana, Accu-Chek Combo, Medtronic and Diaconn G8), basal rates that can only change on the full hour. **AAPS** checks your profile against the pump you use, **after** applying the percentage you choose.

If a basal rate is outside these limits, the **Activate** screen shows this message and the **Activate** button stays grey:

![Activate screen with the message "Basal rate is not compatible with the current pump"](../images/v4/Profiles/profile_activate_pump_incompatible.png)

For example, with a basal rate of 0.10 U/h in the night and a profile percentage of 35 %, **AAPS** would have to deliver 0.035 U/h. This is less than a Dana pump can deliver (0.04 U/h).

To solve it, either:

* choose another percentage: a **higher** one if a basal rate becomes too low, a **lower** one if a basal rate becomes too high, or
* [edit the profile](#your-aaps-profile-create-and-edit-profiles) and change the basal rate.

The profile editor only lets you start basal rates on a full hour. A basal rate starting at e.g. 06:30 can only come from an older profile, for example after you change to a pump that does not support it.

(your-aaps-profile-insulin-sensitivity-factor)=

## Insulinempfindlichkeitsfaktor ("Korrekturfaktor")

### Beschreibung

Der Insulinempfindlichkeitsfaktor (manchmal auch Korrekturfaktor genannt) ist ein Maß dafür, wie viel der Glukosewert durch eine Insulineinheit gesenkt wird.

**In mg/dl-Einheiten:** Wenn Dein **ISF** 40 ist, senkt jede Insulineinheit Deinen Glukosewert um ca. 40 mg/dl (z. B. von 140 mg/dl auf 100 mg/dl).

**In mmol/l-Einheiten:** Wenn Dein **ISF** 1,5 ist, senkt jede Insulineinheit Deinen Glukosewert um 1,5 mmol/l (z. B. von 8 mmol/l auf 6,5 mmol/l).

An diesen Beispielen kannst Du erkennen, dass _kleinerer_ **ISF**-Werte geringere Insulinempfindlichkeit bedeutet. So if you reduce your ISF from 40 to 35 (mg/dL) or 1.5 to 1.3 (mmol/L), this is often called strengthening your **ISF**. Conversely, increasing the **ISF** value from 40 to 45 (mg/dL) or 1.5 to 1.8 mmol/L) is weakening your **ISF**.

### Auswirkung

Eine **niedrigerer / stärkerer ISF** (z. B. 40 statt 50) bedeutet, dass das Insulin Deinen **Glukosewert** mit einer Einheit weniger stark senkt. Dies führt dazu, dass der Loop mit **mehr Insulin** aggressiver / stärker korrigiert. Ist Dein **ISF** zu stark (kleiner Wert), kann das zu niedrigen **Glukosewerten** führen.

Ein **höherer / schwächerer ISF** (z. B. 45 statt 35) bedeutet, dass das Insulin Deinen **Glukosewert** mit einer Einheit stärker senkt. Dies führt zu einer weniger aggressiven / schwächeren Korrektur des Loops mit **weniger Insulin**. Ist Dein **ISF** zu schwach (großer Wert), kann dies zu hohen **Glukosewerten** führen.

**Beispiel:**
* Der **Glukosewert** ist 190 mg/dl (10,5 mmol/l) und das Ziel ist 100 mg/dl (5,6 mmol/l).
* Du möchtest also eine Korrektur um `190 - 110 = 90 mg/dl` oder `10,5 - 5,6 = 4,9 mmol/l`
* Wenn `ISF = 30` -> `90 / 30 = 3` oder `ISF = 1,3` -> `4,9 / 1,63 = 3`: 3 Einheiten Insulin
* Wenn `ISF = 45` -> `90 / 45 = 2` oder `ISF = 2,45` -> `4,9 / 2,45 = 2`: 2 Einheiten Insulin

Ein zu niedriger **ISF** (und daher zu aggressiver; nicht unüblich) kann zu „Überkorrekturen“ führen. **AAPS** errechnet, dass mehr Insulin benötigt wird, um einen hohen **Glukosewert** zu korrigieren. Dies kann (besonders während des Fastens) zu einem „Achterbahn“-Verlauf der Glukosewerte führen, so wie es auf dem Bild unten dargestellt ist. In diesen Situationen sollte der **ISF**-Wert erhöht werden, um **AAPS** so weniger aggressiv zu machen. Dadurch wird sichergestellt, dass **AAPS** kleinere Korrekturdosen abgibt, und vermeidet damit die Überkorrektur eines hohen **Glukosewertes**, die einen niedrigen **Glukosewert** zur Folge haben würde.

![ISF (Korrekturfaktor) zu niedrig](../images/isf.jpg)

Umgekehrt kann ein zu hoher **ISF** zu zu schwachen Korrekturen führen. Dies bedeutet, dass Deine Glukosewerte - besonders in der Nacht - oberhalb Deines Zielwertes bleiben.

### Wie es eingestellt wird

Die **Abbildung unten** zeigt an einem Beispiel, wie ISF-Werte in einem **AAPS**-Profil eingetragen werden können.

![Profile ISF](../images/Profile_ISF.png)

Eine Möglichkeit einen ersten Wert für den ISF am Tage zu ermitteln, nutzt Deinen tägliches Gesamtinsulinbedarf (TDD) und die 1700- bzw. 94-Regel. Für weitere Informationen ist das Kapitel 7 des englischsprachigen Buches [“Think like a Pancreas”](https://amzn.eu/d/iVU0RGe) von Gary Scheiner lesenswert.

| 1700 (if measuring in mg/dL) or 94 (mmol/L)/ TDD = approx ISF.<br/><br/>Example: TDD = 40 U<br/>Approx ISF (mg/dL) = 1700/40 = 43<br/>Approx ISF (mmol/L) = 94/40 = 2.4 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                                                                 |

Wenn Du der Meinung bist, dass Deine Basalrate passt, kannst Du sie testen, indem Du den Loop pausierst, sicherstellst, dass das **IOB** Null ist, und Du Deinen Glukosewert z. B. mit Traubenzucker auf ein hohes und stabiles Niveau bringst.

Gebe dann die Deinem Korrekturfaktor entsprechende Menge Insulin ab, um wieder zu Deinem Zielwert zu gelangen.

Sei vorsichtig, da die Korrektur oftmals zu aggressiv eingestellt ist. D.h. eine Einheit Insulin senkt den BZ stärker als Du denkst.

(your-aaps-profile-insulin-to-carbs-ratio)=

## Insulin-Kohlenhydrat-Verhältnis (insulin to carb ratio - ICR)

### Beschreibung

Der **ICR** ist ein Maß dafür, wie viele Gramm Kohlenhydrate von einer Insulineinheit abgedeckt werden. Ergänzung: Im Deutschen werden diese manchmal auch Mahlzeitenfaktoren genannt.

Teilweise wird auch **I:C** statt **ICR** als Abkürzung verwendet oder vom Kohlenhydratverhältnis (carb ratio - **CR**) gesprochen.

Zum Beispiel bedeutet ein Insulin-Kohlenhydrat-Verhältnis von 1 zu 10 (1:10), dass Du eine Einheit Insulin pro 10g Kohlenhydrate benötigst. Ein Essen mit 25 g Kohlenhydraten würde 2,5 Einheiten Insulin benötigen.

Wenn Du einen schwächeren **ICR**-Wert (hoher Wert) hast, z. B. 1:20, würdest Du nur 0,5 IE Insulin zum Abdecken von 10 g Kohlenhydraten benötigen. Ein Essen mit 25g Kohlenhydraten würde 25/20 = 1,25 IE Insulin benötigen.

Aufgrund von Hormonen und sportlichen Aktivitäten ist es normal, über den Tag verteilt unterschiedliche **ICR**-Werte zu haben. Viele Menschen haben rund um die Frühstückszeit ihren niedrigsten/stärksten **ICR**, da es dort potenziell stärkere Insulinresistenzen gibt. So könnte für einen Erwachsenen zum Beispiel der **ICR**-Wert 1:8 zum Frühstück, 1:10 zum Mittagessen und 1:10 zum Abendessen sein. Doch dieses Muster lässt sich nicht verallgemeinern. Einige Menschen sind zum Abendessen insulinresistenter und benötigen dann ein stärkeres/kleineres **ICR**.

> **HINWEIS:**
> 
> In manchen Europäischen Ländern wurden sog. Broteinheiten (BE) genutzt um festzulegen, wie viel Insulin für Lebensmittel benötigt wird. Zu Beginn entsprach eine BE 12g Kohlenhydraten, später haben manche dies auf 10g Kohlenhydrate geändert.
> 
> Bei diesem Modell war die Menge der Kohlenhydrate fix während die Insulinmenge variierte. ("Wie viel Insulin benötige ich für eine BE?")
> 
> Beim **ICR** hingegen ist die Insulinmenge fix und die Menge der Kohlenhydrate variiert. ("Wie viele Gramm Kohlenhydrate können mit einer Einheit Insulin abgedeckt werden?")
> 
> Beispiel:
> 
> BE-Faktor (BE = 12g KH): 2,4 IE/BE -> Du benötigst 2,4 Einheiten Insulin, wenn Du eine BE isst.
> 
> Dazu passender **ICR**: 12 g / 2,4 IE = 5,0 g/IE -> Du kannst 5,0 g Kohlenhydrate essen, wenn Du sie mit einer Einheit Insulin abdeckst.
> 
> BE-Faktor 2,4 IE / 12 g   ===>   IC = 12 g / 2,4 IE = 5,0 g/IE
> 
> Umrechnungstabellen finden sich online z.B. [hier](https://www.mylife-diabetescare.com/files/media/03_Documents/11_Software/FAS/SOF_FAS_App_KI-Verha%CC%88ltnis_MSTR-DE-AT-CH.pdf).

### Auswirkung

Eine **niedrigeres / stärkeres ICR** bedeutet weniger Nahrung pro Einheit, d.h. Du erhältst mehr Insulin für eine feste Kohlenhydratmenge. Man kann dies auch als "aggressiver" bezeichnen. Wenn der IC-Wert zu stark ist, bekommst Du zu viel, was niedrige **Glukosewerte** nach sich ziehen kann.

Ein **höheres / schwächeres ICR** = mehr Kohlenhydrate pro Insulineinheit, d.h. Du bekommst für eine gleichbleibende Kohlenhydratmenge weniger Insulin. Man kann dies auch als "schwächer" oder "weniger aggressiv" bezeichnen. Wenn Dein IC-Wert zu schwach ist, bekommst Du weniger Insulin als Du tatsächlich brauchst. Das kann hohe **Glokusewerte** zur Folge haben.

### Wie es eingestellt wird

Die **Abbildung unten** zeigt beispielhaft das **ICR** einer Person und wie es in einem **AAPS-Profil** eingetragen werden kann. When entering these values, we enter the final part of the ratio, so an insulin-to-carb ratio of 1:3.5 is entered simply as “3.5”.

![Profile ICR](../images/Profile_ICR.png)

Wenn ein Essen verdaut wurde und das **IOB** auf Null zurückgekehrt ist, Dein **Glukosewert** aber höher als vor dem Essen bleibt, ist es wahrscheinlich, dass Dein **ICR** zu schwach ist (_d. h. _ der Wert ist zu hoch und sollte schrittweise gesenkt werden). Im umgekehrten Fall, der **Glukosewert** ist niedriger als vor der Mahlzeit, ist das **ICR** ist zu stark (_d. h._ der Wert ist zu klein und sollte schrittweise erhöht werden).

Wenn Du annimmst, dass Deine Basalrate stimmt, Dein **IOB** Null ist und Du im Zielbereich bist, dann kannst Du - basierend auf Deinen aktuellen Einstellungen - den ICR-Wert testen. Iss eine genau bekannte Kohlenhydratmenge und gib die Insulinmenge ab, die sich aus Deinem aktuellen Mahlzeitfaktor (ICR) ergibt. Am besten isst Du Nahrungsmittel, die Du zu dieser Tageszeit üblicherweise isst und bestimmst deren Kohlenhydratmenge präzise.

## Häufige zum Profil auftretende Fragen

```{contents} Common questions related to the Profile
:depth: 1
:local: true
```

### About the importance of getting your profile right

**Warum sollte ich versuchen, meine Profileinstellungen richtig zu haben? Kann sich der Loop nicht darum kümmern?**

A hybrid closed loop _can_ attempt to make insulin delivery adjustments to minimize poor glycemic control that results from having incorrect **Profile** values. It can do this, for example, by withholding insulin delivery if you are going to hypo. Du kannst eine deutlich bessere glykämische Kontrolle erreichen, wenn Deine **Profil**werte so nah wie möglich am Bedarf Deines Körpers sind. Dies ist einer der Gründe, warum **AAPS** abgestufte Ziele für den Übergang vom Open Loop zum Hybrid Closed Loop setzt. Zusätzlich gibt es Situationen (Sensor-Aufwärmphase, Sensorfehler _etc._), in denen der Loop geöffnet bzw. unterbrochen werden muss. Manchmal passiert das mitten in der Nacht und Du wirst dann für die richtigen Einstellungen dankbar sein.

Wenn Du von einem anderen Open oder Closed Loop Pumpensystem auf **AAPS** umsteigst, hast Du vermutlich schon eine recht gute Vorstellung von Deiner Basalrate (**BR**), Deinen Insulinempfindlichkeitsfaktoren (**ISF**) und Deinen Insulin-Kohlenhydrat-Faktoren bzw. Mahlzeitenfaktoren (**ICR**).

Wenn Du von der Pen-Therapie (z. B. ICT) zu **AAPS** wechselst, solltest Du Dich zunächst mit dem Umstieg vom Pen auf die Insulinpumpe beschäftigen, bevor Du den wohlüberlegten Wechsel gemeinsam mit Deinem Diabetes-Team angehst. [„Pumping insulin“](https://amzn.eu/d/iaCsFa2) von John Walsh & Ruth Roberts und [„Think like a Pancreas“](https://amzn.eu/d/iVU0RGe) von Gary Scheiner sind sehr lesenswert.

### Was sind die Ursachen hoher postprandialer Peaks im Closed Loop?
Zuerst solltest du deine Basalrate prüfen und einen Basalratentest ohne Kohlenhydrate machen. Wenn Deine Basalrate korrekt ist und Dein **Glukosewert** nach voller KH-Absorption auch wieder bis zu Deinem Zielwert fällt, versuche einmal das temporäre Ziel „Bald Essen“ in **AAPS** einige Zeit vor der Mahlzeit zu setzen oder überlege zusammen mit Deinem Diabetologen oder Deiner Diabetologin, welcher Spritz-Ess-Abstand (SEA) geeignet wäre. <br/> Wenn Dein **Glukosewert** nach dem Essen zu hoch ist und nach der vollständigen Verstoffwechselung der Kohlenhydrate immer noch zu hoch ist, denke gemeinsam mit Deinem Diabetes-Team über einen kleineren / stärkeren **ICR**-Wert nach. Wenn bei aktiven Kohlenhydraten (**COB**) Deine **Glukosewerte** zu hoch und nach der vollständigen Verstoffwechselung zu niedrig sind, denke gemeinsam mit Deinem Diabetes-Team über einen größeren / schwächeren **ICR**-Wert und einen geeigneten SEA nach.

### Ich stecke in hohen Werten fest und der Loop bringt mich nicht herunter
Die möglichen Gründe dafür, dass **AAPS** nicht genug Insulin abgibt, sind:
* **ISF** ist nicht stark genug
* Basal rate might not be strong enough
* Eine Sicherheitseinstellung (z. B. **maxIOB**) kann ausgelöst haben. Oder **SMB** sind zu diesem Zeitpunkt ausgeschaltet. Das ist von Deinen Einstellungen abhängig.
* Eine Automatisierung ist aktiv und hat die **AAPS**-Entscheidung überschrieben.

See also [Tweaking the AAPS Profile](../GettingHelp/ProfileTuning.md).

### Ich habe negatives IOB, ist das ein Problem?
Negatives **IOB** bedeutet, dass die Gesamtmenge des in Deinem Körper aktiven Insulins (Basal + Bolus) kleiner ist als das Basal. Das wird dazu führen, dass **AAPS**, sobald die **Glukosewerte** steigen mehr Insulin abgeben wird, um das vorher zurückgehaltene Insulin „aufzuholen“. Das kann in der Folge dann zu niedrigen **Glukosewerten** führen.

Hier jetzt einige Gründe für das Entstehen negativen IOBs und mögliche Reaktionen darauf:
* Ein zu starkes Basal: Optimiere Dein **Profil**
* Ein zu großer Mahlzeiten-Bolus: Optimiere Dein **Profil** oder überprüfe, ob Du zum richtigen Zeitpunkt bolst.
* DIA set too short on your insulin type, resulting in insulin stacking: tweak it in [Manage → Insulin settings](#Config-Builder-insulin-dia)
* Bewegung: Beim nächsten Mal solltest Du während (eventuell bereits vor) der Aktivität ein reduziertes [prozentuales Profil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) nutzen, um so der höheren Insulin-Empfindlichkeit gerecht zu werden.

## Deine Profile verwalten

```{contents} Operations that you can perform on your **Profiles** in **AAPS**
:depth: 1
:local: true
```
(your-aaps-profile-create-and-edit-profiles)=
### Profile erstellen und bearbeiten

In **AAPS** v4 your profiles live on the **Manage** screen (bottom navigation) → **Profile**, shown as a swipeable card carousel with an action bar (**➕ Add**, **✏️ Edit**, **⧉ Clone**, **🗑️ Delete**, **▶ Activate**). For managing and activating a profile, see [Managing and activating profiles](#ProfileSwitch-manage-v4). Coming from **AAPS** v3, where profiles had their own tab? See [What changed in AAPS v4](#v4changes-manage).

Tapping **✏️ Edit** opens the editor. Set the profile **name** and **units**, then fill in the four schedules using the tabs:

- **IC** — insulin-to-carb ratio (g/U)
- **ISF** — insulin sensitivity factor
- **BAS** — basal rates
- **TARG** — target range

![The profile editor — IC / ISF / BAS / TARG tabs](../images/setup-wizard/Wizard-Profile-IC.png)

Each schedule is a list of **time blocks**: add a block, set its start time and value, then **Save**.

If you make any changes to your **Profile**, make sure you are editing the correct **Profile**: the card of the profile in use is marked **ACTIVE**, but the card selected on screen may be another one.

(your-aaps-profile-profile-from-scratch-for-a-kid)=
### Ein völlig neues Profil für ein Kind erstellen

The [Profile Helper](#aaps-screens-profile-helper) (menu ☰ → **Profile helper**) may help you to create a profile for a child (up to 18 years).

**Wichtiger Hinweis:**

**Profil-Helfer soll Dich dabei unterstützen, das anfängliche Profil für Dein Kind zu finden. Auch wenn es auf Datensätzen von zwei verschiedenen Krankenhäusern basiert, besprich es immer mit Deinem medizinischen Team, bevor Du ein neues Profil benutzt!**

Profil-Helfer bietet Datensätze von zwei verschiedenen Kinderkrankenhäusern an, um ein anfängliches Profil für Dein Kind (bis 18 Jahre) zu finden.

![Profile Helper Kids 1](../images/ProfileHelperKids1.png)

1. Make sure you are on the **Profile 1** tab.
2. Als **Profil-Typ**, wählst Du „Standard-Profil“ aus.
3. Passe das Standardprofil (basierend auf dem Krankenhausdatensatz) an, indem Du das Alter des Kindes eingibst sowie entweder das Gesamt-TDD **oder** das Gewicht eingibst.
4. Change to the **Profile 2** tab.
5. Tippe auf **Profil-Typ** und wähle das „DPV-Standard-Profil“ aus.
6. Adjust DPV Default profile (based on another hospital data set) by entering kids age, TDD Total and percentage of basal. Note that the DPV data set provides **basal rates** only, so IC and ISF are shown as zero for this profile.
7. Open the **Comparation** tab. Ein Vergleich der beiden angepassten Profile wird angezeigt (siehe Screenshot unten).
8. If you want to start tweaking your profile based on one of these suggestions, use the **Clone** button at the bottom of the comparison.

![Profile Helper Kids 2](../images/ProfileHelperKids2.png)

### Profil wechseln

Mehr Informationen findest Du im Abschnitt [Profilwechsel & Prozentuale Profilanpassung](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md).

(your-aaps-profile-clone-profile-switch)=
### Einen Profilwechsel in ein neues Profil klonen

![Profilwechsel](../images/TreatmentsView4.png)

The [Treatments history](#aaps-screens-treatments) shows all past **Profile Switches**. When going to the **Profile switch** tab, you can use a past **Profile Switch** as a base to create a new **Profile**. Zeitverschiebung und Prozentsatz des Profilwechsels werden in das lokale neue Profil übernommen. Use the **Clone** button shown on line **2**.

You can now go to the [Profile screen](#your-aaps-profile-create-and-edit-profiles) (**Manage → Profile**) to edit the newly created Profile.

(YourAapsProfile_Profile-backup)=
### Sicherung Deines Profils

Die Profile sind die wichtigste Einstellung Deines Loop-Systems. Die **Profile** sind höchst empfindlich und etwas, was Du auf keinen Fall verlieren möchtest.

* Deine **Profile** werden in der **AAPS**-Datenbank gespeichert.
* When **NSClientV3** is set up (see [Synchronization](#SetupWizard-synchronization-with-the-reporting-server-and-more)), your **Profiles** are also uploaded to Nightscout automatically.
* Sie sind auch in den [exportierten Einstellungen](../Maintenance/ExportImportSettings.md) enthalten. Stelle also sicher, dass Du immer ein Backup an einem sicheren Ort hast.

### Profile über Nightscout bearbeiten

If enabled, **Profile** changes made directly in Nightscout can be received in **AAPS**. The setting is called "**Receive profile store from NS**" and is part of the **Nightscout data acceptance** options (accepting data from Nightscout is turned off by default, see the [Client control step of the Setup Wizard](../SettingUpAaps/SetupWizard.md)); you can find it quickly with the **search bar** on the main screen. While client control is on, the setting is hidden and **AAPS** takes no profile changes from Nightscout ([hardened mode](#client-master-control-hardened-mode)); edit the profile on a paired client instead, or load it once with **Full sync**.

Wenn Du gravierende Änderungen an einem umfangreichen **Profil** vorgenommen hast, kann diese Funktion hilfreich sein. Es ist in der Regel deutlich einfacher diese Änderungen, _z.B._ Daten aus einem Arbeitsblatt zu kopieren, über das Web-Interface zu machen.

Es ist dabei wichtig, den gesamten **-Datenbank-Datensatz**, der aus mehreren Profilen im Nightscout-Editor besteht (blauer Pfeil auf dem Screenshot unten), zu klonen. Der neue Datensatz enthält dann das aktuelle Datum. Nach dem Speichern kann das geänderte/neue **Profil** in **AAPS** mit einem regulären [Profilwechsel](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) aktiviert werden.

![Datensätze klonen](../images/Nightscout_Profile_Editor.PNG)

(your-aaps-profile-compare-profiles)=
### Vergleiche zwei Profile

You can also use the [Profile Helper](#aaps-screens-profile-helper) (menu ☰ → **Profile helper**) to compare two different profiles or profile switches (percentage of one of your profiles used in a [profile switch](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) before).

![Profile Helper 1](../images/ProfileHelper1.png)

1. Make sure you are on the **Profile 1** tab.
2. Wähle im **Profil-Typ** „Verfügbares Profil" aus und wähle aus allen gespeicherten **Profilen** aus.
3. Wähle das **Profil** aus, gegen das Du vergleichen möchtest.
4. Change to the **Profile 2** tab.
5. In **Profile type**, select "Profile switch" to choose in the history of all your **Profile Switches**.
6. Wähle das **Profilwechsel** aus, gegen den Du vergleichen möchtest.
7. Open the **Comparation** tab. Comparison of the two profiles will be displayed (see screenshot below).

![Profile Helper 2](../images/ProfileHelper2.png)
