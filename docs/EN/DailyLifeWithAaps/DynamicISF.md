(Open-APS-features-DynamicISF)=
# DynamicISF (DynISF)

Up until now, the **ISF** could only vary based on the hour of the day, in the **Profile**. But in reality, a person’s ISF also varies depending on their **BG** level: when at a high **BG** level, you need more insulin to bring you down 50mg/dL / 3mmol/L than you would if you were at a lower **BG**. **DynamicISF** is meant to address this issue.

**Dynamic ISF** (also called **DynISF**) was added in **AAPS** version 3.2 and requires **[Objective 11](#objectives-objective11)** to be started before it can be activated. Read the [Things to consider when activating DynamicISF](#dyn-isf-things-to-consider-when-activating-dynamicisf) below before trying it out.

```{admonition} CAUTION - Automations or Profile Percentage Increase
:class: warning

**Automations** should always be used with care. This is particularly so with **Dynamic ISF**.

When using **Dynamic ISF**, disable any temporary **Profile** increase as an **Automation** rule, because it would cause **Dynamic ISF** to be overly aggressive in correction bolusing and could cause hypoglycemia. This is exactly what **Dynamic ISF** algorithm does for you.

```

To use **Dynamic ISF**, **AAPS'** database requires a minimum of 7 days of the user's **AAPS** data.

## What does DynamicISF do ?

**Dynamic ISF** adapts the user's insulin sensitivity factor (**ISF**) dynamically based on the user's:

- Total Daily Dose of insulin (**TDD**); and 
- current and predicted blood glucose values.

When using **Dynamic ISF**, the **ISF** values entered in the **Profile** are not used at all anymore, except as a fallback if there is not enough TDD data in **AAPS** database (*i.e.* fresh reinstallation  of the app).

**SMB/AMA** - an example of a user's **Profile** with static **ISF** as set by the user and utilized by **SMB** and **AMA**.

![Static ISF](../images/DynamicISF/DynISF1.png)

**Dynamic ISF** - an example of a user's **ISF** subject to change as determined by **Dynamic ISF**.

![Dyn ISF](../images/DynamicISF/DynISF2.png)

The section circled in red shows: `profile ISF` -> `ISF as calculated by DynISF`. <br/>
Taping on this section shows a dialog with additional information, such as the **ISF** used for the calculator and carbs absorption (see [Other usages of ISF](#dynisf-other-usages-of-isf) below).

The **DynISF** value can also be shown in an additional graph, enabling “Variable sensitivity” data. It shows as a white line (see red arrow on the image above).

## How is Dynamic ISF calculated ?

**Dynamic ISF** uses Chris Wilson’s model to determine **ISF** instead of a user's static **Profile's** settings for **ISF**. A detailed explanation can be found here: [Chris Wilson on Insulin Sensitivity (Correction Factor) with Loop and Learn, 2/6/2022](https://www.youtube.com/watch?v=oL49FhOts3c).

The **Dynamic ISF** equation implemented is: `ISF = 1800 / ((TDD * DynISF Adjust Factor) * Ln (( current BG / insulin divisor) + 1 ))`

The variables used in this equation are detailed below.<br/>
Note : `Ln` stands for natural logarithm, a mathematical function.

The implementation uses the above equation to calculate current **ISF** and in the oref1 [predictions for **IOB**, **ZT** (zero-temping) and **UAM**](#aaps-screens-prediction-lines). It is also used for **COB** and in the bolus wizard (see [Other usages of ISF](#dynisf-other-usages-of-isf) below).

### TDD (Total Daily Dose)
TDD will use a combination of the following values:
1.  7 day average **TDD**;
2.  the previous day’s **TDD**; and 
3.  a weighted average of the last eight (8) hours of insulin use extrapolated out for 24 hours.

The **TDD** used in the above equation is weighted one third to each of the above values.

### Dynamic ISF Adjustment Factor

This comes from the user’s preferences and is used to make **Dynamic ISF** more or less aggressive. See the [Preferences](#dyn-isf-preferences) section below.

### Insulin Divisor
The insulin divisor depends on the peak of the insulin used and is inversely proportional to the peak time.
For Lyumjev this value is 75, for Fiasp, 65 and regular rapid insulin, 55.

### ISF based on predicted BG for dosing decisions

Dynamic sensitivity is computed with the **current BG** value, and displayed as your current ISF in **AAPS**. But when doing dosing calculations, the oref1 algorithm computes and uses **Future ISF** instead.

This is made to prevent dosing too much insulin when BG is low or predicted to go low.

**Future ISF** uses the same formula as described above, except that it may use minimum predicted BG instead of current BG. Minimum predicted BG, [as calculated in oref1](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html), is the minimum value your BG is predicted to go during all the course of the predictions.

* If the current BG is above target  <br/> 
  **and** if levels are flat, within +/- 3 mg/dL:<br/>BG used in formula: `average(minimum predicted BG, current BG)`.
* If eventual **BG** is above target and glucose levels are increasing,<br/>  
  **or** eventual **BG** is above current **BG**:<br/>BG used in formula: `current BG`.
* Otherwise:<br/>BG used in formula: `minimum predicted BG`.

For (simplified) illustration purposes, see on this screenshot, which situation applies. Orange dots use **predicted BG**, purple dots use **average(predicted BG, current BG)**, and blue dots use **current BG**.

![DynISF_BGValue.png](../images/DynamicISF/DynISF_BGValue.png)

(dynisf-other-usages-of-isf)=
## Other usages of ISF

### ISF and COB absorption

As described in the [COB Calculation](../DailyLifeWithAaps/CobCalculation.md) page, usually, the absorption of COB is calculated with this formula :   
`absorbed_carbs = deviation * ic / isf`  
When using **Dynamic ISF**, the **ISF** used here is the average of past 24h Dynamic ISF values.

### ISF in Bolus Wizard

When using the [Bolus wizard](#aaps-screens-bolus-wizard), **ISF** is used if **BG** is above target to add a correction.

When using **Dynamic ISF**, the **ISF** used here is the average of past 24h Dynamic ISF values.

(dyn-isf-preferences)=
## Preferences

Check **Enable dynamic sensitivity** in [Preferences > OpenAPS SMB](#Preferences-openaps-smb-settings) to activate. New settings become available once checked.

![Dynamic ISF settings](../images/Pref2020_DynISF.png)

(dyn-isf-adjustment-factor)=
### Dynamic ISF Adjustment Factor
**Dynamic ISF** works based on a single rule which is supposed to apply to everyone, implying that people having the same TDD would have the same sensitivity. As every person has in reality their own sensitivity, the adjustment factor allows you to define whether you are more or less sensitive to insulin than the "standard" person.

The adjustment factor is a value between 1% and 300%. This acts as a multiplier on the **TDD** value.

* Increasing this value above 100 % makes its more aggressive: the **ISF** values become *smaller* (_i.e._ more insulin required to move glucose levels a small amount)
* Lowering this value under 100% makes it less aggressive: the **ISF** values become larger (_i.e._ less insulin required to move glucose levels a small amount).

The adjustment factor is also altered when doing a [**Profile Switch** with percentage](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md). Lower **Profile** percent will lower the adjustment factor, and reciprocally.

For example, if your adjustment factor is 80%, and you switch to an 80% profile, the resulting adjustment factor will be `0.8*0.8=0.64`.

This means that, when using **DynISF**, you can use **Profile Percentage** to temporarily tune your sensitivity manually. This can be useful for physical activity (lower percentage), illness (higher percentage), etc.

### BG level below which low glucose suspend occurs

BG value below which insulin is suspended. Default value uses standard target model. User can set value between 60mg/dl (3.3mmol/l) and 100mg/dl(5.5mmol/l). Values below 65/3.6 result in use of default model.

### Enable TDD based sensitivity ratio for basal and glucose target modification

This setting replaces Autosens, and uses the last 24h **TDD**/7D **TDD** as the basis for increasing and decreasing basal rate, in the same way that standard Autosens does. This calculated value is also used to adjust target, if the options to adjust target with sensitivity are enabled. Unlike Autosens, this option does not adjust **ISF** values. 

(dyn-isf-things-to-consider-when-activating-dynamicisf)=
## Things to consider when activating DynamicISF

* **Dynamic ISF** is recommended only for advanced users that have a good handle on their **AAPS'** controls and monitoring.
* As mentioned above, turn off all [**Automations**](../DailyLifeWithAaps/Automations.md) which activate a **Profile %** in relation to **BG** because it will be too aggressive and may over deliver in insulin! This is already part of **Dynamic ISF** algorithm.
* [Profile Percentage](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) is taken into account for the DynamicISF calculation (see [Dynamic ISF Adjustment Factor](#dyn-isf-adjustment-factor) above). It is bad practice to use a **Profile Percentage** other than 100% for a long time. If you determine that your **Profile** has changed, create a new **Profile** with your revised values in order to replicate the **Profile** with a specific percentage.
* **DynamicISF** may not work for everyone. Specifically, you may see unexpected results if one of these situations apply to you:
  * Variable lifestyle (inconsistent eating or physical activity patterns)
  * Inconsistent TDD or sensitivity from day to day.
* There is no guide to set the initial value of the adjustment factor. If you see that **DynamicISF** is too aggressive, lower the value, and vice versa.
* Even though **DynISF** does not use **profile ISF** at all, if you notice that your sensitivity is very far from what you have stored in your **Profile**, you should consider keeping it up-to-date: in case you lose your **AAPS** data (_i.e._ new phone, new **AAPS** version…), **Profile ISF** will be used as fallback for 7 days.