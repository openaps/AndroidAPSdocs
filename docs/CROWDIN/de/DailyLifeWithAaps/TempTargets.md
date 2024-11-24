# Temporäre Ziele

## Was sind temporäre Ziele und wie nutzt und richtet man sie ein?

A **Temp-Target** (or short **TT**) is an **AAPS** feature that allows the user to alter their [**BG** target range](#profile-glucose-targets) for planned activities. **AAPS** verändert dadurch die Insulingaben.

A glucose target, particularly if it is only short-term (less than 4 hours in duration), does not need to be the *actual value* you expect or want your glucose level to get to, rather, it is a good way to tell **AAPS** to be more or less aggressive, while still keeping your glucose levels in range.

Temporary targets can be defined within those boundaries :

|         | Temporäres Ziel        |
| ------- | ---------------------- |
| Minimum | 4 mmol/l or 72 mg/dL   |
| Maximum | 15 mmol/l or 225 mg/dL |

In **AAPS** gibt es drei voreingestellte **Temporäre Ziele**: eines für Aktivität (**Temporäres Ziel für Aktivität**), eines für Mahlzeiten (**Temporäres Ziel für 'Bald essen'**) und eines für eine bevorstehende Hypoglykämie (**Temporäres Ziel für Hypo**). **Temporäres Ziel** findest Du im Reiter **AKTIONEN**.

Du musst verstehen, was Du mit der Funktion "**Temporäres Ziel**" in **AAPS** erreichen kannst. Das Erreichen eines gewünschten **Glukose**-Ziels hängt von verschiedenen Faktoren ab: der Zuverlässigkeit der **AAPS**-Einstellungen, der Qualität des gesamten **Glukose**-Managements, dem **IOB**, der Insulinempfindlichkeit, der Insulinresistenz, der Trainingsintensität und so weiter.

Es kann 30 Minuten oder länger dauern, um mit einem **Temporären Ziel** das angestrebte **Glukoseziel** zu erreichen. Dir muss bewusst sein, dass **AAPS** das **Glukoseziel** mit Hilfe eines **Temporären Ziels** nicht sofort erreichen kann.

The table below summarizes the features of **Temp-Target- Activity**, **Temp-Target- Eating soon**, and **Temp-Target-Hypo**.

### TT - Activity

![TT Activity](../images/TempTarget2.png)

**BG Target (depending on users' settings)**

AAPS will aim to reach 8mmol/l or 144mg/dl for 40 minutes

**Other considerations users may wish to factor in when selecting**:

Depending on **BG** level, **AAPS** will "decrease" insulin usage in order to reach **BG** target. If **BG** target is not within range (i.e. above the users **Profile's** selected **BG** target), then **AAPS** may keep the basal on.

In closed loop mode, **SMB**:

- *may be* deactivated (discussed further below); and/or
- basal may be activated if **AAPS** is in negative **IOB** or <0.

Users may also wish to consider:

- *selecting* this **TT** 1-2 hours before the planned exercise to ensure reduced IOB (the correct timing for this TT will vary peerson to person); and
- *selecting* a temporary Profile (decrease) for the duration of the planned activity to ensure reduced **IOB**;
- *ensuring* **TT** is timed to be *deactivated* shortly before the exercise as reduced **IOB** as some users experience a rapid rise in **BG **post exercise.

### TT - Eating soon

![TT Activity](../images/TempTarget1.png)

**BG Target (depending on users' settings)**

AAPS will aim to reach 5mmol/l or 90mg/dl for 30 minutes

**Other considerations users may wish to factor in when selecting**:

In closed loop mode, **SMB**:

- will remain activated; and/or
- basal may be also activated depending on the user's **Profile's** settings.

Depending on **BG** level, **AAPS** will "increase" insulin usage within the user's **AAPS** setting parameters in order to achieve the desired **BG** target.

### TT - Hypo

![TT Activity](../images/TempTarget3.png)

**BG Target (depending on users' settings)**

AAPS will aim to reach 7mmol/l or 126mg/dl for 30 minutes

**Other considerations users may wish to factor in when selecting**:

In closed loop mode, **SMB**:

- *may be* deactivated (discussed further below); and/or
- basal may be activated if **AAPS** is in negative **IOB** or <0.

(TempTargets-where-can-i-select-a-temp-target)=

## Wo kann ich ein Temporäres Ziel auswählen und setzen?

In the **Actions** tab in **AAPS**.

1. Tippe auf die Schaltfläche **Temporäres Ziel** und
2. Wähle das gewünschte **Temporäre Ziel** aus

![Carbs TT](../images/TempTarget4a.png)

Or clicking on the "**BG Target**" located in the top right corner of **AAPS**.

![Carbs TT](../images/TempTarget6.png)

- Drücke lange auf deinen Zielwert in der oberen rechten Ecke auf dem Home-Bildschirm oder verwende die Shortcuts im orange "Kohlenhydrate" (Carbs)-Button am unteren Rand.

![Einstellungen > Vordefinierte temporäre Ziele](../images/Pref2020_OV_DefaultTT2.png)

## Wo kann ich die vorgegebenen temporären Ziele ändern und mit meinen eigenen Einstellungen überschreiben?

Um das vordefinierte ‘Glukoseziel’ und die ‘Dauer’ auf Deine eigenen **Temporären Ziele** anzupassen, gehe im **AAPS**-Menü in die rechte obere Ecke und

1. klicke auf **Einstellungen** 
2. scrolle nach unten zu 'Übersicht' 
3. wähle 'Vordefinierte temporäre Ziele’ aus
4. Schritt 4 (unten) zeigt wo man die Dauer für **Temporäres Ziel - Bald essen** ändert
5. Schritt 5 (unten) zeigt wo man das **Glukoseziel** für **Temporäres Ziel - Bald essen** ändert. Für **Temporäres Ziel - Aktivität** und **Temporäres Ziel - Hypo** gehst Du genau so vor.

![Custom TT](../images/TempTarget7.png)

## Wie kann ich ein temporäres Ziel abbrechen?

To cancel a **Temp-Target** running:

Select the “Cancel” button in **Temporary Target** under the **Actions** tab as shown below.

![Custom TT](../images/TempTarget8.png)

Alternativ kannst Du auch kurz auf das "Glukoseziel" im gelb/grünen Kasten oben rechts in **AAPS** drücken und dann "Abbrechen" wie oben gezeigt auswählen.

![Actions TT](../images/TempTarget9.png)

## Wie wähle ich ein "vordefiniertes temporäres Ziel" aus

In the **Actions** tab in **AAPS**.

1. Tippe auf die Schaltfläche **Temporäres Ziel** und
2. Wähle das gewünschte **Temporäre Ziel** aus

![Actions TT](../images/TempTarget4.png)

Or clicking on the "**BG Target**" located in the top right corner of **AAPS**.

![BG TT](../images/TempTarget6.png)

Or in the **Carbs** button

1. selecting the desired **Temp-Target** in the shortcuts

![Carbs TT](../images/TempTarget5.png)

(TempTargets-hypo-temp-target)=

## Temporäres Ziel für Hypos

Das **temporäre Hypo-Ziel** soll **AAPS** helfen durch reduzieren der Indulinzufuhr niedrige Glukosewerte zu vermeiden. Wenn Du erwartest, dass Dein **Glukosewert** bald niedrig sein wird: Normalerweise sollte **AAPS** das lösen können. Die richtigen und getesteten (stabile) **AAPS**-Einstellungen sind dabei allerdings entscheidend. Ein **Temp-Target Hypo** kann frühzeitig einer erwarteten Hypo entgegenwirken und damit **AAPS** durch das geänderte erhöhte Ziel, Insulin reduzieren lassen.

Manchmal, wenn bei einer Hypo-Behandlung Kohlenhydrate gegessen werden, kann der **Blutzucker** des schnell ansteigen, und **AAPS** wird gegen den schnell steigenden **Blutzucker** korrigieren, indem es **SMBs** abgibt.

Manchmal will man die Abgabe von **SMBs** während eines gesetzten erhöhten temporären Ziels (**Temp-Target Hypo**) aussetzen, um so eine Hypo zu vermeiden. Deaktiviere dazu in den **Einstellungen** die Option *'Aktiviere SMB bei temporären Zielen oberhalb des regulären Ziels'* (wie unten dargestellt):

- Für Fortgeschrittene, Ziel (Objective) 9): Du kannst für **temporäre Ziele** über 100 mg/dl bzw. 5.5 mmol/l *“Hohe temporäre Ziele erhöhen die Sensitivität"* einstellen, um </strong>AAPS</1> empfindlicher zu machen.

- Für Fortgeschrittene, Ziel (Objective) 9): Du kannst *"SMB bei temporären Zielen oberhalb des regulären Ziels"* deaktivieren. In diesem Fall wird **AAPS** auch bei COB > 0, "SMB bei aktiven temporären Zielen", "SMB immer aktivieren" und aktivem OpenAPS SMB keine SMB abgeben.

Hinweis: Wenn Du Kohlenhydrate über den Kohenhydrate-Button eingibst und Dein Glukosewert unter 72 mg/dl bzw. 4 mmol/l liegt, wird in **AAPS** **"Hypo Temp-Target"** (temporäres Hypo-Ziel) automatisch aktiviert.

(TempTargets-activity-temp-target)=

## Aktivitäten Temp-Target

Vor und während des Trainings benötigst Du möglicherweise ein höheres Ziel, um eine Hypoglykämie während der Aktivität zu verhindern.

Um den Umgang mit dem **temporäres Ziel für Aktivitäten** zu vereinfachen, kannst Du ein für Dich passendes **temporäres Ziel für Aktivitäten** konfigurieren. Indem die Insulinmengen reduziert werden kannst Du Deinen **Glukosewert** anheben, und so das Fallen des **Glukosewertes** verlangsamen und damit eine Hypoglykämie vermeiden.

Menschen, die neu im Umgang mit **AAPS** sind, müssen, um diese Funktion für sich optimal nutzen zu können, möglicherweise experimentieren und ihre persönlichen Standardeinstellungen für ein **temporäre Ziel für Aktivität** finden. Wenn es darum geht, eine stabile Blutzuckerkontrolle während des Trainings zu erreichen, ist jeder ein wenig anders. See also the [sports section in FAQ](#FAQ-sports). 

Manche machen einen **Profilwechsel** (ein Profil unter 100% zur reduzierten Insulinabgabe durch **AAPS**) vor und während das **temporäre Ziel für Aktivität** läuft.

Für Fortgeschrittene, Ziel (Objective) 9): Du kannst für **temporäre Ziele** über 100 mg/dl bzw. 5.5 mmol/l *“Hohe temporäre Ziele erhöhen die Sensitivität"* in OpenAPS **SMB** einstellen. **AAPS** reagiert dann empfindlicher (sensibler).

Zusätzlich wird *'Aktiviere SMB bei temporären Zielen oberhalb des regulären Ziels'* deaktiviert, **AAPS** gibt keine **SMBs** ab, auch wenn COB > 0 ist, *'Aktiviere SMB bei aktiven temporären Zielen'-* oder *'SMB immer aktivieren'* aktiviert ist und OpenAPS **SMB** aktiv ist.

(TempTargets-eating-soon-temp-target)=

## Temporäres Ziel für „Bald essen“

**Temporäres Ziel für 'Bald essen'** kann ein langsames Abfallen des **Glukosewerts** und eine ausreichendes **IOB** bis zum Beginn der Mahlzeit erreichen.

Das ist eine gute Möglichkeit für diejenigen, die nicht 'vorbolen' (und damit einen SEA einhalten). Die Effektivität des **temporären Ziels für 'Bald essen'** hängt allerdings von verschiedenen Faktoren ab. Um auf einen Vorab-Bolus verzichten zu können spielen u.a. die persönlichen Einstellungen, die Art sich zu ernähren (Low Carb) und ob schnell wirkendes Insulin (wie Fiasp or Lyjumjev) genutzt wird, eine Rolle. Anfangs (bis Du erfahren im Umgang mit **AAPS** bist), solltest Du davon ausgehen auch mit einem **temporären Ziel für 'Bald essen'** weiterhin einen Vorab-Bolus abzugeben. Dies gilt insbesondere, wenn Du Dich kohlenhydratreich ernährst.

Im Artikel ['How to do "eating soon" mode'](https://diyps.org/2015/03/26/how-to-do-eating-soon-mode-diyps-lessons-learned/) oder [hier](https://diyps.org/tag/eating-soon-mode/) erfährst Du mehr zum „Bald essen“-Modus.

Advanced, [objective 9](#objectives-objective9): If you use OpenAPS SMB and have *'Low temp target lowers sensitivity'*, **AAPS** works a little bit more aggressively. Für diese Option muss das **Temporäre Ziel** kleiner als 100mg/dl oder 5,5mmol/l sein.

## Wie kann ich SMB während eines Temp-Targets deaktivieren?

Um das zu erreichen, gehe in die **Einstellungen** und deaktiviere *'Aktiviere SMB bei aktiven temporären Zielen'*.

![Carbs TT](../images/TempTargetSMB.png)

This will ensure **AAPS** will not give **SMBs**, even with COB > 0, *'SMB with Temp-Target'* or *'SMB always'* enabled and OpenAPS SMB active.