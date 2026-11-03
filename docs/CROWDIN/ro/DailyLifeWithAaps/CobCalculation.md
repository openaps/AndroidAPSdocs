# Calcul COB

## Cum calculează AAPS valoarea COB?

When carbs are entered by the user as part of a meal entry or carb correction, **AAPS** will add this calculation to the current carbs on board (**COB**). **AAPS** then calculates the user’s carbs’ absorption based on observed deviations to the user’s **BG** values. Viteza de absorbție depinde de factorul de sensibilitate la carbohidrați (**CSF**). This is not a feature within the user’s **Profile** but is calculated by **AAPS** according to **ISF/I:C** setup, and is determined by how many mg/dL 1 g of carbs will raise the user’s **BG**.

## Factorul de sensibilitate la carbohidrați

Formula folosită de **AAPS** este:

- absorbed_carbs = deviation * ic / isf.

The effect on the user’s **Profile** will:

- _creșterea_ **IC** - crește cantitatea de carbohidrați absorbiți la fiecare 5 minute și astfel scurtează timpul total de absorbție;

- _creșterea_ **ISF** - scade cantitatea de carbohidrați absorbiți la fiecare 5 minute și astfel prelungește timpul total de absorbție; și

- _schimbarea_ **Procentajului profilului** - crește/scade ambele valori și astfel nu are niciun efect asupra timpului de absorbție a carbohidraților.

De exemplu, dacă în **Profilul** utilizatorului **ISF** este 100 și **I:C** este 5, factorul de sensibilitate la carbohidrați al utilizatorului este 20. For every 20 mg/dL the user’s **BG** goes up, 1 g of carbs will be calculated as absorbed by **AAPS**. Positive **IOB** also affects the **COB** calculation. So, if **AAPS** predicts the user’s **BG** to go down by 20 mg/dL because of **IOB** and it instead stayed flat, **AAPS** would also calculate 1 g of carbs as absorbed.

Carbs will also be absorbed via the methods described below based on which sensitivity algorithm has been selected within the user's **AAPS**.

## Sensibilitate la carbohidrați - Oref1

Carbohidrații neabsorbiți sunt ignorați după timpul specificat:

![Oref1](../images/cob_oref0_orange_II.png)

![COB graph with Oref1 cut-off](../images/cob_oref0_orange_I.png)

```{admonition} Older screenshot
:class: note
The screenshot above is from an earlier **AAPS** version — in **AAPS** 4 the graphs look slightly different, but the **COB** graph carries the same information.
```


## Sensibilitate la carbohidrați - WeightedAverage

Absorbția este calculată astfel încât COB = 0 după timpul specificat:

![AAPS, WeightedAverage](../images/cob_aaps2_orange_II.png)

If minimal carbs absorption (min_5m_carbimpact) is used instead of value calculated from **BG** deviations, an orange dot appears on the **COB** graph.

(CobCalculation-detection-of-wrong-cob-values)=
## Detectarea unor valori COB greșite

**AAPS** va avertiza utilizatorul dacă acesta este pe cale să facă un bolus cu **COB** de la o masă anterioară, dacă algoritmul consideră că valoarea **COB** calculată acum este incorectă. In this case it will give the user an additional hint on the confirmation screen after usage of bolus wizard.

### How does AAPS detect wrong COB values?

Ordinarily __AAPS__ detects carb absorption through **BG** deviations. In case the user has entered carbs but **AAPS** cannot detect their estimated absorption through **BG** deviations, it will use the [min_5m_carbimpact](#Preferences-min_5m_carbimpact) method to calculate the absorption instead (so called ‘fallback’). As this method calculates only the minimal carb absorption without considering **BG** deviations, it might lead to incorrect COB values.

![Sugestie despre o valoare COB greșită](../images/Calculator_SlowCarbAbsorption.png)

In the screenshot above, 66% of time the carb absorption was calculated by the min_5m_carbimpact instead of the value detected from deviations. This indicates that the user may have had less **COB** than calculated by the algorithm.

### Cum să vă descurcați cu acest avertisment?

- Consider cancelling the treatment - press ‘Cancel’ instead of OK.
- Calculate your upcoming meal again with bolus wizard leaving **COB** unticked.
- Dacă aveți nevoie de un bolus de corecție, introduceți-l manual.
- Aveți grijă să nu supradozați și să nu acumulați insulină (insulin stacking)!


### De ce algoritmul nu detectează corect COB?

This could be because:
- Potentially the user overestimated carbs when entering them.
- Activitate / exerciții fizice după masa anterioară.
- Raportul carbohidrați insulină necesită ajustare.
- Valoarea pentru min_5m_carbimpact este greșită (recomandată este de 8 cu SMB, 3 cu AMA).


## Corecție manuală a carbohidraților introduși

If carbs are over or underestimated this can be corrected through the **Treatments history** screen as described [here](#screens-bolus-carbs).


## Carb correction - how to delete a Carb entry from Treatments


The **Treatments history** screen can be used to correct a faulty carb entry by deleting it. This may be because the user over or underestimated the carb entry:

![Deleting a carb entry from Treatments history](../images/e123d85d-907e-4545-bf1b-09fee4d42555.png)

1. Check and remember actual **COB** and **IOB** on the **AAPS** main screen.
2. Deschideți **Istoricul tratamentelor** (meniul lateral → *Istoricul tratamentelor*), fila **Carbohidrați și bolusuri**. Depending on the pump, the carbs might show together with insulin in one line or as a separate entry (e.g. with Dana RS).
3. **Long-press** the faulty carb entry — the list switches to **selection mode** with a checkbox on every line, and the entry is ticked (marked **1** above). Tick any further entries you want to remove as well.
4. Tap the **🗑 Delete** icon in the top bar (marked **2**) and confirm — the confirmation dialog lists exactly what will be removed.
5. Make sure carbs are removed successfully by checking **COB** on the **AAPS** main screen again.
6. Do the same for **IOB** if there is just one line including carbs and insulin.
7. If carbs are not removed as intended and additional carbs are added as explained in this section, the **COB** entry will be too high and this could lead to **AAPS** delivering too much insulin.
8. Enter the correct carbs amount through the **Carbs** dialog (**Treatments** → **Carbs**) and set the correct event time.
9. If there was just one line including carbs and insulin the user should also re-add the amount of insulin. Make sure to set the correct event time and check **IOB** on the main screen after confirming the new entry.

