# Tijdelijk streefdoel

## Wat is een Tijdelijk streefdoel en hoe kan ik dat instellen?

A **Temp-Target** (or short **TT**) is an **AAPS** feature that allows the user to alter their [**BG** target range](#profile-glucose-targets) for planned activities. This is achieved by **AAPS** manipulating the user’s insulin usage.

Temporary targets can be defined within those boundaries :

|         | Temporary target       |
| ------- | ---------------------- |
| Minimum | 4 mmol/l or 72 mg/dL   |
| Maximum | 15 mmol/l or 225 mg/dL |

**AAPS** provides for three **Temp-Target** options suitable for exercise (**Temp-Target- Activity**), meals (**Temp-Target- Eating soon**) and predicted hypoglycemia (**Temp-Target-Hypo**). **Temp-Targets** are located under the **Actions tab**.

Users should have realistic expectations on the results that can be achieved when selecting a **Temp-Target** in **AAPS**. The success of attaining a desired **BG** target will vary depending on a multiple factors ranging from: the reliability of the user’s **AAPS** settings, overall **BG** control, **IOB**, insulin sensitivity, insulin resistance, level of exertion undertaken during the exercise and so forth.

A **Temp-Target** can take approximately 30 minutes or longer in order to attain a desired **BG** target. It is impossible for **AAPS** to achieve a **BG** target with immediate effect and users should be mindful of this when selecting a **Temp-Target**.

The table below summarises the features of **Temp-Target- Activity**, **Temp-Target- Eating soon**, and **Temp-Target-Hypo**.

![TT1_Screenshot 2024-01-26 231223](https://github.com/openaps/AndroidAPSdocs/assets/137224335/73eeadf1-c17e-4955-afd8-f49c281331e3)

## Where can I select a Temp-Target?

1. go to **Actions** tab in **AAPS**;
2. select **Temporary Target** button; and then
3. select desired **Temp-Target**

![TT2_Screenshot 2024-01-26 194028](https://github.com/openaps/AndroidAPSdocs/assets/137224335/9b53d358-dc97-4dc5-9ffc-3d24bceea203)

Alternatively, **Temp-Target** can be activated in the “Carbs” button (step 1) by selecting the desired **Temp-Target** in the shortcuts (step 2) as shown below:

![TT3_Screenshot 2024-01-26 194318](https://github.com/openaps/AndroidAPSdocs/assets/137224335/a0627667-fb73-4791-8a1a-328eaaf1af2a)

## Where can I change the default Temp-Target and override with my own preferences?

To reconfigure the ‘BG target range’ and ‘duration’ allocated to the user’s default **Temp-Target** settings, go to the menu in **AAPS** on the top right hand corner and

1. select **Preferences** 
2. scroll down to 'Overview’ 
3. select ‘Default Temp-Targets’
4. step 4 indicates (below) where to change **TT- Eating soon** time period
5. step 5 indicates (below) where to change **TT - Eating soon** **BG** target range (and the same steps can be repeated for **TT -Activity** and **TT - Hypo**.

![TT7_Screenshot 2024-01-26 213136](https://github.com/openaps/AndroidAPSdocs/assets/137224335/82cc08af-82bf-49e2-9a66-178fc9f6aa56)

## How do I cancel a Temp-Target?

To cancel a **Temp-Target** running, select the “Cancel” button in **Temporary Target** under the **Actions** tab as shown below.

![TT5_Screenshot 2024-01-26 195309](https://github.com/openaps/AndroidAPSdocs/assets/137224335/a9299ec6-34ef-43da-a36c-4c06340878dc)

Or short-click on the ‘BG Target’ in the yellow/green box located in the top right corner of **AAPS**, and select ‘cancel’ as shown below:

![Set temp target](../images/TempTarget_Set2.png)

## How do I select a “Default-Temp-Targets”

To select a **Default-Temp-Target**, the user can short click on the target in the right corner on the top in the overview-tab to show **Temp Target** dialog and click on 'Eating Soon', 'Activity' or 'Hypo' button, or use the shortcuts in the orange 'Carbs' button.

- To slightly adjust the values of a **Default-Temp-Target**t, *long press* the 'Eating Soon', 'Activity' or 'Hypo' button and then edit the values in the Target or Duration fields.
- If a **Temp target** is running, an additional "Cancel" button is shown in dialog to cancel it.

(TempTargets-hypo-temp-target)=

## Hypo Tijdelijk streefdoel

**Temp-Target Hypo** enables **AAPS** to prevent the user from experiencing low blood sugar by reducing insulin intake. If the user predicts their **BG** will go low: usually, **AAPS** should handle it, but much will depend on the stability of the user’s **AAPS'** settings. A **Temp-Target Hypo** enables the user to get ahead of the predicted low and update **AAPS** to reduce insulin.

Sometimes when hypo-treated carbs are eaten, the user's **BG** can rapidly rise, and **AAPS** will correct against the fast rising **BG** by enabling **SMBs**.

Some users wish to avoid **SMBs** being given during **Temp-Target Hypo**. This is achieved by deactivating *'Enable SMB with high Temp-Target'* in **Preferences** (see further below):

- In (Advanced, objective 9): the user can enable *“High Temp-Targets raises sensitivity”* for **Temp-Targets** of 100mg/dl or 5.5mmol/l or higher in OpenAPS SMB, **AAPS** will be more sensitive.

- In (Advanced, objective 9): the user can deactivate *“SMB with high temp target”*, so that even if **AAPS** has COB > 0, “SMB with Temp-Target” or “SMB always” enabled and OpenAPS SMB active, **AAPS** will not give SMBs while high temp targets are active.

Note: if the user enters carbs with the carb button and your blood glucose is less than 72mg/dl or 4mmol/l, **Temp-Target Hypo** is automatically enabled by **AAPS**.

(TempTargets-activity-temp-target)=

## Activiteit Tijdelijk streefdoel

Before and during exercise, the user may require a higher target to prevent hypoglycemia during the activity.

To simplify **Temp-Target Activity**, the user can configure a default **Temp-Target - Activity** to raise **BG** levels by reducing insulin usage in order to slow down **BG** fall and avoid hypoglycemia.

New users to **AAPS** may need to experiment and personalise their **Temp-Target Activity** default settings in order to optimise this feature to work best for them. Everyone is different when it comes to attaining stable BG control during exercise. See also the [sports section in FAQ](#FAQ-sports). in FAQ.

Some users also prefer to activate a **Profile switch** (being a Profile decrease < 100% to reduced insulin delivery by **AAPS**) before and while **Temp-Target Activity** is on.

Advanced, objective 9: users can enable *'High Temp-Targets raises sensitivity'* for **Temp-Targets** higher or equal 100mg/dl or 5.5mmol/L in OpenAPS **SMB**. Then **AAPS** is more sensitive.

Additionally, if *'SMB with high Temp-Target'* is deactivated, **AAPS** will not deliver **SMBs**, even with COB > 0, *'SMB with Temp-Target-* or *'SMB always'* enabled and OpenAPS **SMB** active.

(TempTargets-eating-soon-temp-target)=

## Eet binnenkort Tijdelijk streefdoel

**Temp-Target -Eating soon** can help accomplish a gentle drive down of **BG** and ensure there is ample **IOB** before eating.

This can be an important tool for those users who do not pre bolus, however the efficacy of **Temp-Target -Eating soon** will depend on a number of factors including: the user’s settings, if they eat a low carb diet and whether they are using a fast acting insulin (like Fiasp or Lyjumjev) in order to eliminate the need to pre bolus. Ordinarily, until users are experienced in **AAPS** they should expect to pre bolus when using **Temp-Target -Eating soon** and this is particularly so, if eating a high carb diet.

You can read more about the “Eating soon mode” in the article ['How to do “eating soon” mode'](https://diyps.org/2015/03/26/how-to-do-eating-soon-mode-diyps-lessons-learned/) or [here](https://diyps.org/tag/eating-soon-mode/).

Advanced, [objective 9](#objectives-objective9): If you use OpenAPS SMB and have *'Low temp target lowers sensitivity'*, **AAPS** works a little bit more aggressively. For this option there is a requirement for **Temp-Target** to be less than 100mg/dl or 5.5mmol/l.

## How do I turn off SMB during Temp-Targets?

To action this select in **Preferences** > and deactivate *'Enable SMB with high Temp-Target'*.

![TT8_Screenshot 2024-01-26 230757](https://github.com/openaps/AndroidAPSdocs/assets/137224335/4471540e-fe2a-4ade-8f99-18ca0372da52)

This will ensure **AAPS** will not give **SMBs**, even with COB > 0, *'SMB with Temp-Target'* or *'SMB alway'* enabled and OpenAPS SMB active.

## Aangepast Tijdelijk streefdoel

If the user requires an manual adjustment to the **Temp-Target** *long press* the ‘Eating Soon’, ‘Activity’ or ‘Hypo’ button and then edit the values to the desired **BG** ‘target’ or ‘duration’ field.

![Set temp target through Action tab](../images/TempTarget_ActionTab.png)