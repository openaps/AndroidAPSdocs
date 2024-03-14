## Введение в профиль AAPS

### **What is an AAPS profile?**

Профиль AAPS представляет собой набор из пяти ключевых параметров, которые определяют, как AAPS подает инсулин на основе данных с сенсора. AAPS has several _additional_ modifiable parameters (like SMB settings), but using these well relies on your underlying AAPS profile being correct. Профиль ААПС включает в себя: продолжительность действия инсулина (DIA), целевые показатели ГК, скорость базального инсулина, (BR), коэффициент чувствительности к инсулину (ISF) и углеводный коэффициент (IC или ICR). Screenshots from AAPS of an _example_ profile are shown in below. Пожалуйста, обратите внимание, этот профиль имеет большое количество точек времени. Когда вы начинаете AAPS, профиль будет намного проще. Profiles vary significantly from person-to-person, for examples of AAPS profiles for small children, teenagers and adults please see the later section, optimising your [profile](link).

#### **Duration of insulin action (DIA)**

Длительность действия инсулина устанавливается на единичное значение в AAPS, так как помпа вводит один тип инсулина. Остальные четыре параметра могут иметь разные значения, при необходимости изменяться в течение 24 часов.

#### **Glucose targets**

Цели ГК устанавливаются в соответствии с личными предпочтениями. Например, если вас беспокоят ночные гипо, с 19: 00 до 7: 00 можно установить цель чуть выше - на 6,5 ммоль/л. Если вы хотите убедиться, что у вас достаточно активного инсулина (IOB) утром перед болюсом на завтрак, можно установить нижнюю цель в 4. ммоль/л с 7 до 8 утра. A glucose target, particularly if it is only short-term (less than 4 hours in duration), does not need to be the _actual value_ you expect or want your glucose level to get to, rather, it is a good way to tell AAPS to be more or less aggressive, while still keeping your glucose levels in range. The **figure below** shows an example of how the DIA and glucose targets could be set in an AAPS profile.

![24-07-23, profile basics - DIA and target](./images/f3904cc3-3d9e-497e-a3b6-3a49650053e6.png)

Что касается последних трех параметров, то базальная скорость (BR), коэффициент чувствительности к инсулину (ISF) и углеводный коэффициент (IC или ICR), их абсолютные значения и тенденции при работе в AAPS, весьма различны в зависимости от биологии, пола, возраста, уровня физического развития и т. д. а также от более краткосрочных факторов, таких как болезнь и нагрузки. For more guidance on this, the book [“Brights Spots and Landmines”](https://brightspotsandlandmines.org/Bright_Spots_and_Landmines_by_Adam_Brown.pdf) by Adam Brown is an excellent book to read.

#### **Basal rates**

Ваша базальная скорость инсулина (ед./час) обеспечивает фоновый инсулин, поддерживая нужную гликемию в отсутствие пищи или физических упражнений.

Точно определенная базальная скорость позволяют просыпаться в заданном диапазоне, пропускать еду - или есть - раньше или позже, без падений или взлетов ГК. Инсулиновая помпа подает небольшое количество быстродействующего инсулина каждые несколько минут, не позволяя печени выделять слишком много глюкозы, и давая возможность глюкозе перемещаться в клетки организма. Базальный инсулин обычно составляет от 40 до 50% суточной дозы (TDD), в зависимости от диеты, и обычно следует суточному ритму, с одним пиком и одной долиной потребности в инсулине в течение 24 часов. For more information, chapter 23 of [“Think like a Pancreas”](https://amzn.eu/d/iVU0RGe) by Gary Scheiner is very useful.

Most type 1 diabetes educators (and people with type 1 diabetes!) agree that you should work on getting your basal rates correct, before attempting to optimise your ISF and ICR.

#### **Insulin sensitivity factor (ISF)**

Коэффициент чувствительности к инсулину (иногда называемый корректирующим фактором) - это то, насколько 1 единица инсулина понижает ваш уровень гликемии.

**In mg/dL units:**
If you have an ISF of 40, each unit of insulin will reduce your blood glucose by approx. 40 mg/dL (for example, your blood glucose will fall from 140 mg/dL to 100 mg/dL).

**In mmol/L units:**
If you have an ISF of 1.5, each unit of insulin will reduce your blood glucose by approx. 1.5 mmol/L (for example from 8 mmol/L to 6.5 mmol/L).

From these examples you can see that the _smaller_ the ISF value, the less sensitive you are to insulin. Таким образом, если вы уменьшите ISF с 40 до 35 (мг/дл) или 1.5 до 1.3 (ммоль/л), то это часто называется усилением вашего ISF. И наоборот, увеличение ISF с 40 до 45 (мг/дл) или 1,5 до 1,8 ммоль/л) ослабляет ваш ISF.

Если ваш ISF слишком силен (малая величина), это приведет к гипогликемии, а если он слишком слаб (большая величина), то приведет к гиперглициемии.

Основной отправной точкой для определения ISF в дневное время является суммарная суточная доза (TDD) и правило 1700 (94). More detail is given in Chapter 7 of [“Think like a Pancreas”](https://amzn.eu/d/iVU0RGe) by Gary Scheiner.

1700 (если измеряется в мг/дл) или 94 (ммоль/л)/ TDD= примерно ISF.

Пример: TDD = 40 ед.
ISF приблиз. (мг/дл) = 1700/40 = 43
ISF приблиз. (ммоль/л) = 94/40 = 2,4

See the **figure below** for an example of how the basal rates and ISF values could be set in an AAPS profile.

![24-07-23, profile basics - basal and ISF](./images/55c8ed24-e24e-4caa-9c17-294fa93cb84a.png)

#### **Insulin to Carb ratio (ICR)**

ICR представляет собой количество граммов углеводов покрываемых одной единицей инсулина.

Некоторые также используют I:C в качестве сокращения вместо IC или говорят об углеводном коэффициенте (carb ratio, CR).

Из-за уровня гормонов и физической активности ICR различен в разное время суток. Многие находят, что самые низкие ICR у них в районе времени завтрака. Так, например, ваш ICR может быть 1:8 на завтрак, 1:10 на обед и 1:10 на ужин, но эти шаблоны не универсальны, и некоторые люди более устойчивы к инсулину во время обеда и имеют потребность в большем/меньшем ICR.

Например, соотношение инсулина 1 к 10 (1:10) означает, что вам требуется 1 ед. инсулина на каждые 10 граммов съеденных углеводов. Еда из 25г углеводов потребует 2,5 ед. инсулина.

Если ваш ICR слабее, скажем 1:20, вам понадобится только 0,5 ед. на покрытие 10 г углеводов. Еда из 25г углеводов потребует 25/20 = 1,25 ед. инсулина.

As shown in the **figure below**, when entering these values into an AAPS profile, we just enter the final part of the ratio, so an insulin-to-carb ratio of 1:3.5 is entered simply as “3.5”.

![24-07-23, profile basics - ICR](./images/7741eefb-cae5-45c5-a9e5-8eae5ead3f48.png)

#### **Why should I try to get my profile settings right? Can’t the loop just take care of it?**

A hybrid closed loop _can_ attempt to make insulin delivery adjustments to minimise poor glycemic control that results from having incorrect profile values. Это можно сделать, например, путем прекращения введения инсулина, если у вас гипогликемия. Однако можно добиться гораздо лучшего контроля гликемии, если настройки профиля уже максимально приближены к потребностям вашего организма. Это одна из причин, по которым AAPS использует поэтапные цели для перехода от открытого цикла к гибридному замкнутому циклу. In addition, there will be times when you need to open the loop (sensor warmups, sensor failure _etc._), sometimes in the middle of the night, and you will want to have your settings right for these situations.

Если вы начинаете работу с AAPS после другой помповой системы с открытым или закрытым циклом, у вас уже будет четкое представление о том, какие значения использовать для базальных доз (BR), фактора чувствительности к инсулину (ISF) и соотношения инсулина и углеводов (IC или ICR).

Если вы двигаетесь от инъекций шприц-ручками (MDI) к AAPS, тогда стоит прочитать сначала о том, как сделать переход с MDI на помпу и тщательно спланировать этот шаг с эндокринологом. ["Pumping insulin"](https://amzn.eu/d/iaCsFa2) by John Walsh & Ruth Roberts and [“Think like a Pancreas”](https://amzn.eu/d/iVU0RGe) by Gary Scheiner are very useful.

In the [optimising your profile](operating - optimising - your profile link) we present example profiles, discuss how to set and optimise the parameters which form your AAPS profile(s), and provide guidance on additional resources such as **Autotune** which aim to automate optimisation of your profile.
