# Your **AAPS** profile

Your **AAPS** profile is a set of five key parameters which define how **AAPS** should deliver insulin in response to your sensor glucose levels. **AAPS** has several _additional_ modifiable parameters (like SMB settings), but using these well relies on your underlying **AAPS** profile being correct. The **AAPS** profile incorporates:
* [duration of insulin action](#duration-of-insulin-action-dia) (DIA),
* [glucose targets](#glucose-targets),
* [basal rates](#basal-rates) (BR),
* [insulin sensitivity factors](#insulin-sensitivity-factor-isf) (ISF) and
* [insulin-to-carb ratios](#insulin-to-carb-ratio-icr) (IC or ICR).

The four last parameters can be set to different values, changing hourly if required, over a 24-hour period. Please note, the sample profile below shows a large number of timepoints. When you start out with **AAPS**, your profile is likely to be much simpler.

```{admonition} Your diabetes may vary
:class: information
Profiles vary significantly from person-to-person.

For the final three parameters, basal rates (BR), insulin sensitivity factors (ISF) and insulin-to-carb ratios (IC or ICR), the absolute values and trends in your insulin requirements vary significantly from person to person, depending on your biology, gender, age, fitness level etc. as well as shorter term factors like illness and recent exercise. For more guidance on this, the book [“Brights Spots and Landmines”](https://brightspotsandlandmines.org/Bright_Spots_and_Landmines_by_Adam_Brown.pdf) by Adam Brown is an excellent book to read.

```

Screenshots from **AAPS** of an _example_ profile are shown in below.

## Duration of insulin action (DIA)

The duration of insulin action is set to a single value in **AAPS**, because your pump will continually infuse the same type of insulin.

In combination with the [insulin type](../SettingUpAaps/ConfigBuilder.md#insulin), this will result in the [insulin profile](../DailyLifeWithAaps/AapsScreens.md#insulin-profile). Read more there to help you define a proper DIA.

## Glucose targets

The **figure below** shows an example of how the DIA and glucose targets could be set in an **AAPS** profile.

![24-07-23, profile basics - DIA and target](../images/f3904cc3-3d9e-497e-a3b6-3a49650053e6.png)

Your **BG target** is a core value and all of **AAPS** calculations are based on it. It is different from the target range which you usually aim to keep your blood glucose values in:
* A glucose target, particularly if it is only short-term (less than 4 hours in duration), does not need to be the *actual value* you expect or want your glucose level to get to, rather, it is a good way to tell **AAPS** to be more or less aggressive, while still keeping your glucose levels in range.
* If your target is very wide (say, 3 or more mmol/l [50 mg/dl or more] wide), you will often find little **AAPS** action. This is because **BG** level is predicted to be somewhere in that wide range, and thus temporary basal rate changes are rarely suggested.
* When beginning with **AAPS**, especially when progressing through [the first objectives](../SettingUpAaps/CompletingTheObjectives.md), using a wide range target can be a good option while you are learning how **AAPS** behaves and ajusting your **Profile**.
* Later on, you will probably find more appropriate to reduce the range until you have a single target for each time of the day (_Low_ target = _High_ target), to make sure that **AAPS** reacts promptly to **BG** fluctuations.

The targets can be defined within those boundaries :

|         | _Low_ target           | _High_ target          |
| ------- | ---------------------- | ---------------------- |
| Minimum | 4 mmol/l or 72 mg/dL   | 5 mmol/l or 90 mg/dL   |
| Maximum | 10 mmol/l or 180 mg/dL | 15 mmol/l or 225 mg/dL |

Glukoseziele werden passend zu Deinen persönlichen Bedürfnissen gesetzt. Wenn Du beispielsweise Angst vor nächtlichen Hypos hast, kannst Du Dein Glukoseziel von 21.00 - 07.00 Uhr auf 117 mg/dl setzen (6,5 mmol/l) setzen. Wenn Du erreichen möchtest, dass Du vor dem Frühstücksbolus am Morgen bereits genügend aktives Insulin (IOB) im Körper hast, könntest Du für die Zeit von 07.00 - 08.00 Uhr ein niedrigeres Ziel von 81 mg/dl (4,5 mmol/dl) setzen.

## Basal rates

Deine Basalrate ist die Insulinmenge (Einheiten pro Stunde), die abgegeben wird, um Deinen Glukosewert ohne Nahrung und Sport stabil zu halten

Saubere Basalraten ermöglichen Dir Morgens mit Werten im Zielbereich wachzuwerden, Mahlzeiten auszulassen, früher oder später essen zu können ohne hohe oder niedrige Werte zu bekommen. Die Insulinpumpe liefert alle paar Minuten kleine Mengen schnell wirkendes Insulins, um die durch die Leber abgegebene Glukose entsprechend in die Körperzellen zu bringen. Basalinsulin macht typischerweise 40 - 50% Deines täglichen Gesamtinsulinbedarfs (TDD) aus und ist abhängig von Deinen Ernährungsgewohnheiten. Es folgt üblicherweise Deinem Biorhythmus (cirkadianes Muster) mit einer Spitze und einem Tal im täglichen Insulinbedarf. For more information, chapter 23 of [“Think like a Pancreas”](https://amzn.eu/d/iVU0RGe) by Gary Scheiner is very useful.

Most type 1 diabetes educators (and people with type 1 diabetes!) agree that you should work on getting your basal rates correct, before attempting to optimise your ISF and ICR.

## Insulin sensitivity factor (ISF)

Der Insulinempfindlichkeitsfaktor (manchmal auch Korrekturfaktor genannt) ist ein Maß dafür, wie viel der Glukosewert durch eine Insulineinheit gesenkt wird.

**In mg/dL units:** If you have an ISF of 40, each unit of insulin will reduce your blood glucose by approx. 40 mg/dL (for example, your blood glucose will fall from 140 mg/dL to 100 mg/dL).

**In mmol/L units:** If you have an ISF of 1.5, each unit of insulin will reduce your blood glucose by approx. 1.5 mmol/L (for example from 8 mmol/L to 6.5 mmol/L).

From these examples you can see that the _smaller_ the ISF value, the less sensitive you are to insulin. So if you reduce your ISF from 40 to 35 (mg/dl) or 1.5 to 1.3 (mmol/L), this is often called strengthening your ISF. Umgekehrt schwächt die Erhöhung des ISF-Wertes von 40 auf 45 (mg/dl) oder 1,5 auf 1,8 mmol/l) Deinen ISF.

Wenn deine ISF zu stark ist (kleiner Wert) führt dies zu Hypos und wenn er zu schwach ist (großer Wert) wird er zu Hyperglykämie führen.

Eine Möglichkeit einen ersten Wert für den ISF am Tage zu ermitteln, nutzt Deinen tägliches Gesamtinsulinbedarf (TDD) und die 1700- bzw. 94-Regel. More detail is given in Chapter 7 of [“Think like a Pancreas”](https://amzn.eu/d/iVU0RGe) by Gary Scheiner.

1700 (wenn Du in in mg/dl misst) oder 94 (mmol/l) / TDD = ca.

Beispiel: TDD = 40 IE Ungefährer ISF (mg/dl) = 1700/40 = 43 Ungefährer ISF (mmol/l) = 94/40 = 2,4

See the **figure below** for an example of how the basal rates and ISF values could be set in an **AAPS** profile.

![24-07-23, profile basics - basal and ISF](../images/55c8ed24-e24e-4caa-9c17-294fa93cb84a.png)

## Insulin to Carb ratio (ICR)

Der ICR ist ein Maß dafür, wie viele Gramm Kohlenhydrate von einer Insulineinheit abgedeckt werden. Ergänzung: Im Deutschen werden diese manchmal auch Mahlzeitenfaktoren genannt.

Teilweise wird auch I:C statt IC als Abkürzung verwendet oder vom Kohlenhydratverhältnis (carb ratio - CR) gesprochen.

Zum Beispiel bedeutet ein Insulin-Kohlenhydrat-Verhältnis von 1 zu 10 (1:10), dass Du eine Einheit Insulin pro 10g Kohlenhydrate benötigst. Ein Essen mit 25 g Kohlenhydraten würde 2,5 Einheiten Insulin benötigen.

Wenn Du einen schwächeren ICR-Wert hast, z. B. 1:20, würdest Du nur 0,5 IE Insulin zum Abdecken von 10 g Kohlenhydraten benötigen. Ein Essen mit 25g Kohlenhydraten würde 25/20 = 1,25 IE Insulin benötigen.

Aufgrund von Hormonen und sportlichen Aktivitäten ist es normal, über den Tag verteilt unterschiedliche ICR-Werte zu haben. Viele Leute haben rund um die Frühstückszeit den niedrigsten ICR. So könnte zum Beispiel Dein ICR 1:8 zum Frühstück, 1:10 zum Mittagessen und 1:10 zum Abendessen sein. Doch dieses Muster lässt sich nicht verallgemeinern. Einige Menschen sind zum Abendessen Insulinresistenter und benötigen dann ein stärkeres/kleineren ICR.

As shown in the **figure below**, when entering these values into an **AAPS** profile, we just enter the final part of the ratio, so an insulin-to-carb ratio of 1:3.5 is entered simply as “3.5”.

![24-07-23, profile basics - ICR](../images/7741eefb-cae5-45c5-a9e5-8eae5ead3f48.png)


## About the importance of getting your profile right

**Why should I try to get my profile settings right? Can’t the loop just take care of it?**

A hybrid closed loop _can_ attempt to make insulin delivery adjustments to minimise poor glycemic control that results from having incorrect profile values. It can do this, for example, by withholding insulin delivery if you are going to hypo. Du kannst eine deutlich bessere glykämische Kontrolle erreichen, wenn Deine Profilwerte so nah wie möglich am Bedarf Deines Körpers sind. This is one of the reasons that **AAPS** uses staged objectives to move from open loop pumping towards hybrid closed loop. In addition, there will be times when you need to open the loop (sensor warmups, sensor failure _etc._), sometimes in the middle of the night, and you will want to have your settings right for these situations.

If you are starting with **AAPS** after using a different open or closed-loop pumping system, you will already have a reasonable idea of what values to use for basal rates (BR), insulin sensitivity factors (ISF) and insulin-to-carb ratios (IC or ICR).

If you are moving from injections (MDI) to **AAPS**, then it is a good idea to read up on how to make the transfer from MDI to pump first, and plan and make the move carefully in consultation with your diabetes team. ["Pumping insulin"](https://amzn.eu/d/iaCsFa2) by John Walsh & Ruth Roberts and [“Think like a Pancreas”](https://amzn.eu/d/iVU0RGe) by Gary Scheiner are very useful.

## Profile Helper

The [Profile Helper](../SettingUpAaps/ProfileHelper.md) can help you:
* build a profile from scratch for a kid
* compare two profiles
* clone a profile