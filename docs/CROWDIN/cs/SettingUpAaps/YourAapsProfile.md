# Your **AAPS** profile

Your **AAPS** profile is a set of five key parameters which define how **AAPS** should deliver insulin in response to your sensor glucose levels. **AAPS** has several _additional_ modifiable parameters (like SMB settings), but using these well relies on your underlying **AAPS** profile being correct. The **AAPS** profile incorporates:

- [duration of insulin action](#duration-of-insulin-action-dia) (DIA),
- [glucose targets](#glucose-targets),
- [basal rates](#basal-rates) (BR),
- [insulin sensitivity factors](#insulin-sensitivity-factor-isf) (ISF) and
- [insulin-to-carb ratios](#insulin-to-carb-ratio-icr) (IC or ICR).

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

- A glucose target, particularly if it is only short-term (less than 4 hours in duration), does not need to be the _actual value_ you expect or want your glucose level to get to, rather, it is a good way to tell **AAPS** to be more or less aggressive, while still keeping your glucose levels in range.
- If your target is very wide (say, 3 or more mmol/l [50 mg/dl or more] wide), you will often find little **AAPS** action. This is because **BG** level is predicted to be somewhere in that wide range, and thus temporary basal rate changes are rarely suggested.
- When beginning with **AAPS**, especially when progressing through [the first objectives](../SettingUpAaps/CompletingTheObjectives.md), using a wide range target can be a good option while you are learning how **AAPS** behaves and ajusting your **Profile**.
- Later on, you will probably find more appropriate to reduce the range until you have a single target for each time of the day (_Low_ target = _High_ target), to make sure that **AAPS** reacts promptly to **BG** fluctuations.

The targets can be defined within those boundaries :

|         | _Low_ target           | _High_ target          |
| ------- | ---------------------- | ---------------------- |
| Minimum | 4 mmol/l or 72 mg/dL   | 5 mmol/l or 90 mg/dL   |
| Maximum | 10 mmol/l or 180 mg/dL | 15 mmol/l or 225 mg/dL |

Cíle glykémie jsou nastaveny podle vašich osobních preferencí. Pokud máte například obavy z nočních hypoglykémií, můžete nastavit vyšší cílovou hodnotu 6.5 mmol/L od 21:00 - 7:00. Pokud se chcete ujistit, že máte máte ráno v těle dostatek inzulínu (Insulin On Board; IOB) než budete podávat bolus k snídani, můžete nastavit nižší hodnotu cílové glykémie 4,5 mmol/L v době od 7:00 - 8:00.

## Basal rates

Vaše bazální dávky inzulínu (jednotky za hodinu) poskytují na pozadí inzulín, který udržuje vaši glykémii při absenci jídla nebo cvičení stabilní.

Vyladěné bazály vám umožní probudit se v rozsahu, přeskakovat jídla nebo jíst dříve či později, aniž by šla glykémie nahoru nebo dolů. Inzulínová pumpa posílá malé dávky rychle působícího inzulínu každých pár minut, aby bránil játrům v uvolňování nadbytečného množství glukózy a aby se glukóza dostala do tělesných buněk. Bazální inzulín obvykle tvoří 40 - 50% celkové denní dávky (TDD), v závislosti na vaší stravě, a obvykle se řídí cirkadiánním rytmem, denně s jedním vrcholem a jedním propadem v požadavcích na inzulín. For more information, chapter 23 of [“Think like a Pancreas”](https://amzn.eu/d/iVU0RGe) by Gary Scheiner is very useful.

Most type 1 diabetes educators (and people with type 1 diabetes!) agree that you should work on getting your basal rates correct, before attempting to optimise your ISF and ICR.

## Insulin sensitivity factor (ISF)

Faktor citlivosti na inzulín (někdy nazývaný korekční faktor) říká o kolik se sníží hladina krevního cukru po podání 1 jednotky inzulínu.

**In mg/dL units:**
If you have an ISF of 40, each unit of insulin will reduce your blood glucose by approx. 40 mg/dL (for example, your blood glucose will fall from 140 mg/dL to 100 mg/dL).

**In mmol/L units:**
If you have an ISF of 1.5, each unit of insulin will reduce your blood glucose by approx. 1.5 mmol/L (for example from 8 mmol/L to 6.5 mmol/L).

From these examples you can see that the _smaller_ the ISF value, the less sensitive you are to insulin. So if you reduce your ISF from 40 to 35 (mg/dl) or 1.5 to 1.3 (mmol/L), this is often called strengthening your ISF. Naopak, zvýšení hodnoty citlivosti ze 40 na 45 (mg/dL) nebo z 1,5 na 1,8 mmol/L) citlivost oslabuje.

Pokud je vaše citlivost nastavená příliš silná (názká hodnota), povede to k hypoglykémiím, a pokud je nastavená příliš slabá (vysoká hodnota), vyústí v hyperglykémii.

Výchozím bodem pro stanovení vaší citlivosti v průběhu dne je výpočet založený na celkové denní dávce (TDD) pomocí pravidla 1700 (94). More detail is given in Chapter 7 of [“Think like a Pancreas”](https://amzn.eu/d/iVU0RGe) by Gary Scheiner.

1700 (měřeno v mg/dl) nebo 94 (mmol/L)/TDD = přibližná ISF.

Například: TDD = 40
Cca. ISF (mg/dL) = 1700/40 = 43
Cca. ISF (mmol/L) = 94/40 = 2,4

See the **figure below** for an example of how the basal rates and ISF values could be set in an **AAPS** profile.

![24-07-23, profile basics - basal and ISF](../images/55c8ed24-e24e-4caa-9c17-294fa93cb84a.png)

## Insulin to Carb ratio (ICR)

ICR je měřítkem toho, kolik gramůsacharidů je pokryto jednou jednotkou inzulínu.

Někteří lidé také používají I:C jako zkratku místo ICR nebo mluví o sacharidovém poměru (CR).

Například inzulíno sacharidový poměr 1:10 znamená, že na každých 10 gramů zkonzumovaných sacharidů si vezmete 1 U inzulinu. Jídlo s obsahem 25g sacharidů potřebuje 2,5 jednotky inzulínu.

Pokud je vaše ICR slabší, například 1:20, potřebujete pouze 0,5U inzulinu, abyste pokryli 10 g sacharidů. Jídlo s obsahem 25g sacharidů potřebuje 25/20 = 1,25 jednotky inzulínu.

Je obvyklé, že se z důvodu úrovní hormonů a fyzické aktivitě v průběhu dne hodnoty ICR liší. Mnoho lidí má nejnižší hodnoty ICR okolo snídaně. Takže například vaše ICR může být 1:8 na snídani, 1:10 na oběd a 1:10 v době večeře. Tyto modely ale nejsou univerzální a někteří lidé jsou v době večeře vůči inzulínu odolnější a vyžadují silnější / menší ICR.

As shown in the **figure below**, when entering these values into an **AAPS** profile, we just enter the final part of the ratio, so an insulin-to-carb ratio of 1:3.5 is entered simply as “3.5”.

![24-07-23, profile basics - ICR](../images/7741eefb-cae5-45c5-a9e5-8eae5ead3f48.png)

## About the importance of getting your profile right

**Why should I try to get my profile settings right? Can’t the loop just take care of it?**

A hybrid closed loop _can_ attempt to make insulin delivery adjustments to minimise poor glycemic control that results from having incorrect profile values. It can do this, for example, by withholding insulin delivery if you are going to hypo. Nicméně dosáhnete mnohem lepší kontroly glykémie, pokud nastavení vašeho profilu se co nejvíce blíží potřebám vašeho těla. This is one of the reasons that **AAPS** uses staged objectives to move from open loop pumping towards hybrid closed loop. In addition, there will be times when you need to open the loop (sensor warmups, sensor failure _etc._), sometimes in the middle of the night, and you will want to have your settings right for these situations.

If you are starting with **AAPS** after using a different open or closed-loop pumping system, you will already have a reasonable idea of what values to use for basal rates (BR), insulin sensitivity factors (ISF) and insulin-to-carb ratios (IC or ICR).

If you are moving from injections (MDI) to **AAPS**, then it is a good idea to read up on how to make the transfer from MDI to pump first, and plan and make the move carefully in consultation with your diabetes team. ["Pumping insulin"](https://amzn.eu/d/iaCsFa2) by John Walsh & Ruth Roberts and [“Think like a Pancreas”](https://amzn.eu/d/iVU0RGe) by Gary Scheiner are very useful.

## Profile Helper

The [Profile Helper](../SettingUpAaps/ProfileHelper.md) can help you:

- build a profile from scratch for a kid
- compare two profiles
- clone a profile
