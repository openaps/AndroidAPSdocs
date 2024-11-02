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

Цели ГК устанавливаются в соответствии с личными предпочтениями. Например, если вас беспокоят ночные гипо, с 19: 00 до 7: 00 можно установить цель чуть выше - на 6,5 ммоль/л. Если вы хотите убедиться, что у вас достаточно активного инсулина (IOB) утром перед болюсом на завтрак, можно установить нижнюю цель в 4. ммоль/л с 7 до 8 утра.

## Basal rates

Базальная скорость инсулина (ед./час) обеспечивает фоновый инсулин, поддерживая нужную гликемию в отсутствие пищи или физических упражнений.

Точно определенная базальная скорость позволяют просыпаться в заданном диапазоне, пропускать еду - или есть - раньше или позже, без падений или взлетов ГК. Инсулиновая помпа подает небольшое количество быстродействующего инсулина каждые несколько минут, не позволяя печени выделять слишком много глюкозы, и давая возможность глюкозе перемещаться в клетки организма. Базальный инсулин обычно составляет от 40 до 50% суточной дозы (TDD), в зависимости от диеты, и обычно следует суточному ритму, с одним пиком и одной долиной потребности в инсулине в течение 24 часов. For more information, chapter 23 of [“Think like a Pancreas”](https://amzn.eu/d/iVU0RGe) by Gary Scheiner is very useful.

Most type 1 diabetes educators (and people with type 1 diabetes!) agree that you should work on getting your basal rates correct, before attempting to optimise your ISF and ICR.

## Insulin sensitivity factor (ISF)

Коэффициент чувствительности к инсулину (иногда называемый корректирующим фактором) - это то, насколько 1 единица инсулина понижает ваш уровень гликемии.

**In mg/dL units:** If you have an ISF of 40, each unit of insulin will reduce your blood glucose by approx. 40 mg/dL (for example, your blood glucose will fall from 140 mg/dL to 100 mg/dL).

**In mmol/L units:** If you have an ISF of 1.5, each unit of insulin will reduce your blood glucose by approx. 1.5 mmol/L (for example from 8 mmol/L to 6.5 mmol/L).

From these examples you can see that the _smaller_ the ISF value, the less sensitive you are to insulin. So if you reduce your ISF from 40 to 35 (mg/dl) or 1.5 to 1.3 (mmol/L), this is often called strengthening your ISF. И наоборот, увеличение ISF с 40 до 45 (мг/дл) или 1,5 до 1,8 ммоль/л) ослабляет ваш ISF.

Если ваш ISF слишком силен (малая величина), это приведет к гипогликемии, а если он слишком слаб (большая величина), то приведет к гипергликемии.

Основной отправной точкой для определения ISF в дневное время является суммарная суточная доза (TDD) и правило 1700 (94). More detail is given in Chapter 7 of [“Think like a Pancreas”](https://amzn.eu/d/iVU0RGe) by Gary Scheiner.

1700 (если измеряется в мг/дл) или 94 (ммоль/л)/ TDD= примерно ISF.

Пример: TDD = 40 ед. ISF приблиз. (мг/дл) = 1700/40 = 43 ISF приблиз. (ммоль/л) = 94/40 = 2,4

See the **figure below** for an example of how the basal rates and ISF values could be set in an **AAPS** profile.

![24-07-23, profile basics - basal and ISF](../images/55c8ed24-e24e-4caa-9c17-294fa93cb84a.png)

## Insulin to Carb ratio (ICR)

ICR представляет собой количество граммов углеводов покрываемых одной единицей инсулина.

Некоторые также используют I:C в качестве сокращения вместо IC или говорят об углеводном коэффициенте (carb ratio, CR).

Например, соотношение инсулина 1 к 10 (1:10) означает, что вам требуется 1 ед. инсулина на каждые 10 граммов съеденных углеводов. Еда из 25г углеводов потребует 2,5 ед. инсулина.

Если ваш ICR слабее, скажем 1:20, вам понадобится только 0,5 ед. на покрытие 10 г углеводов. Еда из 25г углеводов потребует 25/20 = 1,25 ед. инсулина.

Из-за уровня гормонов и физической активности ICR различен в разное время суток. Многие находят, что самые низкие ICR у них в районе времени завтрака. Так, например, ваш ICR может быть 1:8 на завтрак, 1:10 на обед и 1:10 на ужин, но эти шаблоны не универсальны, и некоторые люди более устойчивы к инсулину во время обеда и имеют потребность в большем/меньшем ICR.

As shown in the **figure below**, when entering these values into an **AAPS** profile, we just enter the final part of the ratio, so an insulin-to-carb ratio of 1:3.5 is entered simply as “3.5”.

![24-07-23, profile basics - ICR](../images/7741eefb-cae5-45c5-a9e5-8eae5ead3f48.png)


## About the importance of getting your profile right

**Why should I try to get my profile settings right? Can’t the loop just take care of it?**

A hybrid closed loop _can_ attempt to make insulin delivery adjustments to minimise poor glycemic control that results from having incorrect profile values. It can do this, for example, by withholding insulin delivery if you are going to hypo. Однако можно добиться гораздо лучшего контроля гликемии, если настройки профиля уже максимально приближены к потребностям вашего организма. This is one of the reasons that **AAPS** uses staged objectives to move from open loop pumping towards hybrid closed loop. In addition, there will be times when you need to open the loop (sensor warmups, sensor failure _etc._), sometimes in the middle of the night, and you will want to have your settings right for these situations.

If you are starting with **AAPS** after using a different open or closed-loop pumping system, you will already have a reasonable idea of what values to use for basal rates (BR), insulin sensitivity factors (ISF) and insulin-to-carb ratios (IC or ICR).

If you are moving from injections (MDI) to **AAPS**, then it is a good idea to read up on how to make the transfer from MDI to pump first, and plan and make the move carefully in consultation with your diabetes team. ["Pumping insulin"](https://amzn.eu/d/iaCsFa2) by John Walsh & Ruth Roberts and [“Think like a Pancreas”](https://amzn.eu/d/iVU0RGe) by Gary Scheiner are very useful.

## Profile Helper

The [Profile Helper](../SettingUpAaps/ProfileHelper.md) can help you:
* build a profile from scratch for a kid
* compare two profiles
* clone a profile