# COB calculation

## Come calcola AAPS il valore COB?

When carbs are entered by the user as part of a meal entry or carb correction, **AAPS** will add this calculation to the current carbs on board (**COB**). **AAPS** then calculates the user’s carbs’ absorption based on observed deviations to the user’s **BG** values. La velocità di assorbimento dipende dal fattore di sensibilità ai carboidrati (**CSF**). This is not a feature within the user’s **Profile** but is calculated by **AAPS** according to **ISF/I:C** setup, and is determined by how many mg/dL 1 g of carbs will raise the user’s **BG**.

## Fattore di sensibilità ai carboidrati

La formula usata da **AAPS** è:

- absorbed_carbs = deviation * ic / isf.

The effect on the user’s **Profile** will:

- _aumentare_ l'**IC** - aumenta i carboidrati assorbiti ogni 5 minuti e quindi accorcia il tempo totale di assorbimento;

- _increase_ **ISF** - by decreasing the carbs absorbed every 5 minutes thus prolong total time of absorption; and

- _cambiare_ la **Percentuale profilo** - aumenta/diminuisce entrambi i valori e quindi non ha effetto sul tempo di assorbimento dei carboidrati.

Per esempio, se nel tuo **Profilo** l'**ISF** è 100 e l'**I:C** è 5, il tuo fattore di sensibilità ai carboidrati sarà 20. For every 20 mg/dL the user’s **BG** goes up, 1 g of carbs will be calculated as absorbed by **AAPS**. Positive **IOB** also affects the **COB** calculation. So, if **AAPS** predicts the user’s **BG** to go down by 20 mg/dL because of **IOB** and it instead stayed flat, **AAPS** would also calculate 1 g of carbs as absorbed.

Carbs will also be absorbed via the methods described below based on which sensitivity algorithm has been selected within the user's **AAPS**.

## Sensibilità ai carboidrati - Oref1

Unabsorbed carbs are cut off after specified time:

![Oref1](../images/cob_oref0_orange_II.png)

![COB graph with Oref1 cut-off](../images/cob_oref0_orange_I.png)

```{admonition} Older screenshot
:class: note
The screenshot above is from an earlier **AAPS** version — in **AAPS** 4 the graphs look slightly different, but the **COB** graph carries the same information.
```


## Sensibilità ai carboidrati - WeightedAverage

Absorption is calculated to have COB = 0 after specified time:

![AAPS, WeightedAverage](../images/cob_aaps2_orange_II.png)

If minimal carbs absorption (min_5m_carbimpact) is used instead of value calculated from **BG** deviations, an orange dot appears on the **COB** graph.

(CobCalculation-detection-of-wrong-cob-values)=
## Rilevamento di valori COB errati

**AAPS** ti avvisa se stai per fare un bolo con **COB** di un pasto precedente e l'algoritmo ritiene errato il calcolo attuale dei **COB**. In this case it will give the user an additional hint on the confirmation screen after usage of bolus wizard.

### Come rileva AAPS i valori COB errati?

Ordinarily __AAPS__ detects carb absorption through **BG** deviations. In case the user has entered carbs but **AAPS** cannot detect their estimated absorption through **BG** deviations, it will use the [min_5m_carbimpact](#Preferences-min_5m_carbimpact) method to calculate the absorption instead (so called ‘fallback’). As this method calculates only the minimal carb absorption without considering **BG** deviations, it might lead to incorrect COB values.

![Hint on wrong COB value](../images/Calculator_SlowCarbAbsorption.png)

In the screenshot above, 66% of time the carb absorption was calculated by the min_5m_carbimpact instead of the value detected from deviations. This indicates that the user may have had less **COB** than calculated by the algorithm.

### How to deal with this warning?

- Consider cancelling the treatment - press ‘Cancel’ instead of OK.
- Calculate your upcoming meal again with bolus wizard leaving **COB** unticked.
- Se ti serve un bolo di correzione, inseriscilo a mano.
- Attenzione a non fare un sovradosaggio e a non accumulare insulina!


### Perché l'algoritmo non rileva correttamente i COB?

This could be because:
- Forse hai sovrastimato i carboidrati quando li hai inseriti.
- Activity / exercise after your previous meal.
- I:C needs adjustment.
- Value for min_5m_carbimpact is wrong (recommended is 8 with SMB, 3 with AMA).


## Correzione manuale dei carboidrati inseriti

If carbs are over or underestimated this can be corrected through the **Treatments history** screen as described [here](#screens-bolus-carbs).


## Carb correction - how to delete a Carb entry from Treatments


The **Treatments history** screen can be used to correct a faulty carb entry by deleting it. This may be because the user over or underestimated the carb entry:

![Cancellare un inserimento di carboidrati dalla Cronologia trattamenti](../images/e123d85d-907e-4545-bf1b-09fee4d42555.png)

1. Check and remember actual **COB** and **IOB** on the **AAPS** main screen.
2. Open **Treatments history** (drawer menu → *Treatments history*), tab **Carbs and bolus**. Depending on the pump, the carbs might show together with insulin in one line or as a separate entry (e.g. with Dana RS).
3. **Long-press** the faulty carb entry — the list switches to **selection mode** with a checkbox on every line, and the entry is ticked (marked **1** above). Seleziona anche gli altri inserimenti che vuoi rimuovere.
4. Tap the **🗑 Delete** icon in the top bar (marked **2**) and confirm — the confirmation dialog lists exactly what will be removed.
5. Controlla di nuovo i **COB** nella schermata principale di **AAPS** per essere sicuro che i carboidrati siano stati rimossi.
6. Do the same for **IOB** if there is just one line including carbs and insulin.
7. If carbs are not removed as intended and additional carbs are added as explained in this section, the **COB** entry will be too high and this could lead to **AAPS** delivering too much insulin.
8. Enter the correct carbs amount through the **Carbs** dialog (**Treatments** → **Carbs**) and set the correct event time.
9. If there was just one line including carbs and insulin the user should also re-add the amount of insulin. Imposta l'ora corretta dell'evento e, dopo aver confermato il nuovo inserimento, controlla l'**IOB** nella schermata principale.

