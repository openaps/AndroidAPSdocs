# Подсчет активных углеводов COB

## Как AAPS вычисляет значение COB?

When carbs are entered by the user as part of a meal entry or carb correction, **AAPS** will add this calculation to the current carbs on board (**COB**). **AAPS** then calculates the user’s carbs’ absorption based on observed deviations to the user’s **BG** values. The rate of absorption depends on the carb’s sensitivity factor (**’CSF**”). This is not a feature within the user’s **Profile**  but is calculated by **AAPS** according to **ISF/I:C** set up, and is determined by how many mg/dl 1g of carbs will raise the user’s **BG**.

## Carb Sensitivity Factor

The formula adopted by **AAPS** is:

- absorbed_carbs = deviation * ic / isf.

The effect on the user’s **Profile** will:

- _increase_ **IC**- by increasing the carbs absorbed every 5 minutes thus shorten total time of absorption;

- _increase_ **ISF** - by decreasing the carbs absorbed every 5 minutes thus prolong total time of absorption; and

- _change_ **Profile Percentage** -  increase/decrease both values thus has no impact on carbs absorption time.

For example, if the user’s  **Profile**  **ISF** is 100 and the **I:C** is 5, the user’s Carb Sensitivity Factor would be 20. For every 20 mg/dl the user’ **BG** goes up and 1g of carbs will be calculated as absorbed by **AAPS**. Positive **IOB** also affects the **COB** calculation. So, if **AAPS**  predicts the user’s **BG** to go down by 20 mg/dl because of **IOB** and it instead stayed flat, **AAPS**  would also calculate 1g of carbs as absorbed.

Carbs will also be absorbed via the methods described below based on which sensitivity algorithm has been selected within the user's **AAPS**.

## Carbs Sensitivity - Oref1

Unabsorbed carbs are cut off after specified time:

![Oref1](../images/cob_oref0_orange_II.png)

![Screenshot 2024-10-05 161009](../images/cob_oref0_orange_I.png)


## Carbs Sensitivity - WeightedAverage

Absorption is calculated to have COB = 0 after specified time:

![AAPS, WheitedAverage](../images/cob_aaps2_orange_II.png)

If minimal carbs absorption (min_5m_carbimpact) is used instead of value calculated from **BG** deviations, an orange dot appears on the **COB** graph.

(CobCalculation-detection-of-wrong-cob-values)=
## Обнаружение неправильного значения COB

**AAPS**  will warn the user if they are about to bolus with **COB** from a previous meal if the algorithm detects current **COB** calculation as incorrect. In this case it will give the user an additional hint on the confirmation screen after usage of bolus wizard.

### Как AndroidAPS обнаруживает неправильные значения активных углеводов COB?

Ordinarily __AAPS__ detects carb absorption through **BG** deviations. In case the user has entered carbs but **AAPS** cannot detect their estimated absorption through **BG** deviations, it will use the [min_5m_carbimpact](#Preferences-min_5m_carbimpact) method to calculate the absorption instead (so called ‘fallback’). As this method calculates only the minimal carb absorption without considering **BG** deviations, it might lead to incorrect COB values.

![Hint on wrong COB value](../images/Calculator_SlowCarbAbsorption.png)

In the screenshot above, 58% of time the carb absorption was calculated by the min_5m_carbimpact instead of the value detected from deviations. This indicates that the user may have had less **COB** than calculated by the algorithm.

### Как относиться к этому предупреждению?

- Consider cancelling the treatment - press ‘Cancel’ instead of OK.
- Calculate your upcoming meal again with bolus wizard leaving **COB** unticked.
- If you need a correction bolus, enter it manually.
- Be careful not to overdose or insulin stacking!


### Почему алгоритм неправильно распознает активные углеводы COB?

This could be because:
- Potentially the user overestimated carbs when entering them.
- Activity / exercise after your previous meal.
- I:C needs adjustment.
- Value for min_5m_carbimpact is wrong (recommended is 8 with SMB, 3 with AMA).


## Ручная коррекция введенных углеводов

If carbs are over or underestimated carbs this can be corrected through the Treatments tab and actions tab / menu as described [here](#screens-bolus-carbs).


## Carb correction - how to delete a Carb entry from Treatments


The ‘Treatments’ tab can be used to correct a faulty carb entry by deleting the entry in Treatments. This may be because the user over or underestimated the carb entry:

![COB_Screenshot 2024-10-05 170124](../images/e123d85d-907e-4545-bf1b-09fee4d42555.png)

1. Check and remember actual **COB** and **IOB** on the **AAPS'** homescreen.
2. Depending on the pump, the carbs in the Treatments tab might show together with insulin in one line or as a separate entry (i.e. with Dana RS).
3. Remove the entry by firstly 'ticking' the waste bin on the top right corner (see above photo, step 1). Then 'tick' the faulty carb amount (see above photo, step 2). Then 'tick' the ‘waste bin’ on the top right corner (step 1 again).
4. Make sure carbs are removed successfully by checking **COB** on **AAPS’** homescreen again.
5. Do the same for **IOB** if there is just one line in the Treatment tab including carbs and insulin.
6. If carbs are not removed as intended and additional carbs are added as explained in this section, the **COB** entry will be too high and this could lead to **AAPS** delivering too much insulin.
7. Enter correct carbs amount through carbs button on **AAPS’** homescreen and set the correct event time.
8. If there is just one line in Treatment tab including carbs and insulin the user should add also the amount of insulin. Make sure to set the correct event time and check **IOB** on homescreen after confirming the new entry.

