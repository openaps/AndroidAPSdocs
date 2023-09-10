# COB berekening

## How does AAPS calculate the COB value?

When carbs are entered as part of a meal or correction, AAPS adds them to the current carbs on board (COB). AAPS then absorbs (removes) carbs based on observed deviations to BG values. The rate of absorption depends on the carb sensitivity factor. This is not a profile value but is calculated as ISF/IC and is how many mg/dl 1g of carbs will raise your BG.

For example, if your profile ISF is 100 and your IC is 5, your CSF would be 20. For every 20 mg/dl your BG goes up, 1g of carbs are absorbed by AAPS. Positive IOB also effects this calculation. So, if AAPS expected your BG to go down by 20 mg/dl because of IOB and it instead stayed flat, it would also absorb 1g of carbs.

Carbs will also be absorbed via the methods described below based on what sensitivity algorithm is used.

### Oref1

Niet-opgenomen koolhydraten worden afgekapt (naar nul) na bepaalde tijd.

```{image} ../images/cob_oref0_orange_II.png
:alt: Oref1
```

### AAPS, Gewogen gemiddelde

absorption is calculated to have `COB == 0` after specified time

```{image} ../images/cob_aaps2_orange_II.png
:alt: AAPS, Gewogen gemiddelde
```

Als de door jou ingestelde minimale koolhydraten absorptie (min_5min_carbimpact) wordt gebruikt in plaats van de waarde berekend op basis van afwijkingen, verschijnt een oranje stip op jouw COB grafiek.

(COB-calculation-detection-of-wrong-cob-values)=
## Detectie van verkeerde COB-waarden

AAPS waarschuwt je als je op het punt staat om een bolus te gaan geven wanneer je nog COB van een vorige maaltijd hebt, en als het algoritme denkt dat de huidige COB berekening verkeerd kan zijn. In dat geval zie je een extra hint op het bevestigingsscherm nadat je op OK hebt gedrukt in de bolus wizard.

### How does AAPS detect wrong COB values?

Normaalgesproken detecteert AAPS carb absorptie dmv BG afwijkingen. In case you entered carbs but AAPS cannot see their estimated absorption through BG deviations, it will use the [min_5m_carbimpact](../Configuration/Config-Builder.md?highlight=min_5m_carbimpact#absorption-settings) method to calculate the absorption instead (so called 'fallback'). Aangezien deze methode slechts de minimale koolhydraten absorptie berekent zonder rekening te houden met BG afwijkingen, kan dit leiden tot onjuiste COB waarden.

```{image} ../images/Calculator_SlowCarbAbsorption.png
:alt: Detectie van verkeerde COB waarden
```

In de bovenstaand screenshot werd bij het berekenen van de koolhydraat absorptie 41% van de tijd de min_5m_carbimpact gebruikt, in plaats van de waarde die is gedetecteerd dmv afwijkingen.  Dit betekent dat je misschien minder koolhydraten aan boord hebt dan berekend door het algoritme.

### Hoe om te gaan met deze waarschuwing?

- Consider to cancel the treatment - press Cancel instead of OK.
- Calculate your upcoming meal again with bolus wizard leaving COB unticked.
- In case you are sure you need a correction bolus, enter it manually.
- In any case be careful not to overdose!

### Waarom detect het algoritme COB niet goed?

- Maybe you overestimated carbs when entering them.
- Activity / exercise after your previous meal
- I:C needs adjustment
- Value for min_5m_carbimpact is wrong (recommended is 8 with SMB, 3 with AMA)

## Handmatige correctie van ingevoerde koolhydraten

If you over- or underestimated carbs you can correct this though treatments tab and actions tab / menu as described [here](Screenshots-carb-correction).
