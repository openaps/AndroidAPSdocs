(Open-APS-features-DynamicISF)=
# Dynamic ISF (DynISF)

Up until now, with **AMA** and **SMB**, **ISF** was defined in the **Profile** and was static for each defined period in the day. But in reality, a person’s **ISF** is not that static and varies depending on their **BG** level: when at a high BG level, the user will need more insulin to bring their **BG** down 50mg/dL / 3mmol/L than compared to a lower  **BG**. [Autosens](#Open-APS-features-autosens) was the first algorithm to try and address this issue, by adjusting **ISF** outside of mealtimes.

**Dynamic ISF** (also called **DynISF**) serves the same purpose but is more advanced as it can be used at all times. It is recommended only for advanced users that have a good handle on their **AAPS**’ controls and monitoring. Read the [Things to consider when activating Dynamic ISF](#dyn-isf-things-to-consider-when-activating-dynamicisf) below before trying it out.

```{admonition} CAUTION - Automations or Profile Percentage change
:class: warning

**Automations** should always be used with care. This is particularly so with **Dynamic ISF**.

When using **Dynamic ISF**, disable any temporary **Profile** change as an **Automation** rule, because it would cause **Dynamic ISF** to be overly aggressive in correction bolusing and result in hypoglycemia. This is the exact purpose of **Dynamic ISF** and so there is no need for **AAPS** to be told to provide additional insulin by way of Automation in the event of high **BGs**.

```

To use **Dynamic ISF**, **AAPS'** database requires a minimum of 7 days of the user's **AAPS** data.

## What does Dynamic ISF do ?

**Dynamic ISF** adapts the insulin sensitivity factor (**ISF**) dynamically based on the user's:

- 每日胰島素總量（**TDD**）；以及
- 目前和預測的血糖值。

When using **Dynamic ISF**, the **ISF** values entered in the **Profile** are not used at all anymore, except as a fallback if there is not enough TDD data in **AAPS** database (*i.e.* fresh reinstallation  of the app).

**SMB/AMA** - an example of a user's **Profile** with static **ISF** as set by the user and utilised by **SMB** and **AMA**.

![靜態 ISF](../images/DynamicISF/DynISF1.png)

**Dynamic ISF** - an example of a user's **ISF** subject to change as determined by **Dynamic ISF**.

![實作使用上述方程計算當前<strong x-id="1">ISF</strong>，並在 oref1 預測中用於<strong x-id="1">體內胰島素</strong>、<strong x-id="1">ZT</strong> 和 <strong x-id="1">UAM</strong>。](../images/DynamicISF/DynISF2.png)

The section circled in red shows: `profile ISF` -> `ISF as calculated by DynISF`. <br/> Taping on this section shows a dialog with additional information, such as the **ISF** used for the calculator and carbs absorption (see [Other usages of ISF](#dynisf-other-usages-of-isf) below).

The **DynISF** value can also be shown in an additional graph, enabling “Variable sensitivity” data. It shows as a white line (see red arrow on the image above).

## How is Dynamic ISF calculated ?

**Dynamic ISF** uses Chris Wilson’s model to determine **ISF** instead of the user's static **ISF** value as set within the **Profile**. A detailed explanation can be found here: [Chris Wilson on Insulin Sensitivity (Correction Factor) with Loop and Learn, 2/6/2022](https://www.youtube.com/watch?v=oL49FhOts3c).

The **Dynamic ISF** equation implemented is: `ISF = 1800 / ((TDD * DynISF Adjust Factor) * Ln (( current BG / insulin divisor) + 1 ))`

The variables used in this equation are detailed below.<br/> Note : `Ln` stands for natural logarithm, a mathematical function.

The implementation uses the above equation to calculate current **ISF** and in the oref1 [predictions for **IOB**, **ZT** (zero-temping) and **UAM**](#aaps-screens-prediction-lines). It is also used for **COB** and in the bolus wizard (see [Other usages of ISF](#dynisf-other-usages-of-isf) below).

### TDD（每日總胰島素劑量）
TDD 將使用以下數值的組合：
1.  7 day's average **TDD**;
2.  前一天的**TDD**; 和
3.  最近八（8）小時的胰島素使用的加權平均值，推算為 24 小時。

The **TDD** used in the above equation is weighted one third of each of the above values.

### 動態胰島素敏感因子調整係數

This is set within the user’s **Preferences** and is used to make **Dynamic ISF** more or less aggressive. See the [Preferences](#dyn-isf-preferences) section below.

### 胰島素除數
胰島素除數取決於所使用胰島素的峰值，且與峰值時間成反比。 對於 Lyumjev，該值為 75；對於 Fiasp 為 65；對於普通速效胰島素則為 55。

### ISF based on predicted BG for dosing decisions

Dynamic sensitivity is computed with the **current BG** value, and displayed as your current ISF in **AAPS**. But when doing dosing calculations, the oref1 algorithm computes and uses **Future ISF** instead.

This is done to prevent dosing too much insulin when **BG** is low or predicted to go low.

**Future ISF** uses the same formula as described above, except that it may use **minimum predicted BG** instead of **current BG**. **Minimum predicted BG**, [as calculated in oref1](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html), is the minimum value your BG is predicted to go during all the course of the predictions.

* If the current **BG** is above target  <br/> **and** if **BG** levels are flat, within +/- 3 mg/dL:<br/>BG is used in the formula as follows: `average(minimum predicted BG, current BG)`.
* If eventual **BG** is above target and glucose levels are increasing,<br/>  
  **or** eventual **BG** is above current **BG**:<br/>BG is used in the formula as follows: `current BG`.
* Otherwise:<br/>BG is used in the formula as follows: `minimum predicted BG`.

For a simplified explanation, refer to the screenshot below, which illustrates the above situation. Orange dots use **predicted BG**, purple dots use **average(predicted BG, current BG)**, and blue dots use **current BG**.

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
## 偏好設定

在 [偏好設定 > OpenAPS SMB](#Preferences-openaps-smb-settings) 中勾選 **啟用動態敏感度** 以啟用。 New settings become available once selected.

![動態 ISF 設定](../images/Pref2020_DynISF.png)

(dyn-isf-adjustment-factor)=
### 動態胰島素敏感因子調整係數
**Dynamic ISF** works based on a single rule which is supposed to apply to everyone, implying that people having the same **TDD** would have the same sensitivity. As each user has their own personal sensitivity, the **Adjustment Factor** allows the user to define whether they are more or less sensitive to insulin than the "standard" person.

The **Adjustment Factor** is a value between 1% and 300%. This acts as a multiplier on the **TDD** value.

* Increasing this value above 100 % makes **DynISF** more aggressive: the **ISF** values become *smaller* (_i.e._ more insulin required to decrease **BG** levels a small amount)
* Lowering this value under 100% makes **DynISF** less aggressive: the **ISF** values become larger (_i.e._ less insulin required to decrease **BG** levels a small amount).

The **Adjustment Factor** is also altered when activating a [**Profile Switch** with percentage](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md). A lower **Profile Percentage** will lower the **Adjustment Factor**, and vice versa in respect of higher **Profile Percentage**.

For example, if your **Adjustment Factor** is 80%, and **Profile Switch** to 80% is actioned , the resulting **Adjustment Factor** will be `0.8*0.8=0.64`.

This means that, when using **DynISF**, you can use **Profile Percentage** to temporarily fine tune your sensitivity manually. This can be useful for physical activity (lower percentage), illness (higher percentage), etc.

### 低於此血糖數值時，會啟動低血糖暫停功能

**BG** value below which insulin is suspended. Default value uses the standard target model. A user can set this value between 60mg/dl (3.3mmol/l) and 100mg/dl(5.5mmol/l). Values below 65/3.6 result in use of the default model.

### 啟用基於 TDD 的敏感性比率來調整基礎胰島素和血糖目標

此設定取代 Autosens，並使用過去 24 小時**TDD** / 7D **TDD** 作為增加和減少基礎率的依據，與標準 Autosens 的做法相同。 若選項中啟用根據敏感性調整目標，則此計算值也會用來調整目標值。 與 Autosens 不同，此選項不調整**ISF**值。

(dyn-isf-things-to-consider-when-activating-dynamicisf)=
## Things to consider when activating Dynamic ISF

* **動態 ISF** 只建議給**AAPS** 控制及監控有良好掌握的進階使用者。 Users should ideally have attained good control with **SMB** before moving onto **Dynamic ISF**.
* As mentioned above, turn off all [**Automations**](../DailyLifeWithAaps/Automations.md) which activate a **Profile Percentage** in relation to **BG** because it will be too aggressive and may over deliver in insulin! This is already part of the **Dynamic ISF** algorithm.
* [Profile Percentage](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) is taken into account for the Dynamic ISF calculation (see [Dynamic ISF Adjustment Factor](#dyn-isf-adjustment-factor) above). It is bad practice to use a **Profile Percentage** other than 100% for a long time. If you determine that your **Profile** has changed, create a new **Profile** with your revised values in order to replicate the **Profile** with a specific percentage.
* **Dynamic ISF** may not work for everyone. Specifically, you may see unexpected results if one of these situations apply to you:
  * Variable lifestyle (inconsistent eating or physical activity patterns)
  * Inconsistent TDD or sensitivity from day to day.
* There is no precise guide to set the initial value of the **Adjustment Factor**. However, as a starting point: assuming your **Profile** values are correct, when you are in range and **BG** levels are flat, the **DynISF** value should be about the same as the one you had in your **Profile** before.<br/>If you see that **Dynamic ISF** is too aggressive, lower the **Adjustment Factor**, and vice-versa.
* Even though **DynISF** does not use **Profile ISF** at all, if you notice that your sensitivity is very different from what was previously stored in your **Profile**, you should consider keeping it up-to-date. This may be useful in case you loose your **AAPS** data (_i.e._ new phone, new **AAPS** version…), as your **Profile ISF** will be used as fallback for the next 7 days.