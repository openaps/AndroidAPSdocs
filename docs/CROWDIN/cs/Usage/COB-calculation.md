# Kalkulace COB

## How does AAPS calculate the COB value?

When carbs are entered as part of a meal or correction, AAPS adds them to the current carbs on board (COB). AAPS then absorbs (removes) carbs based on observed deviations to BG values. The rate of absorption depends on the carb sensitivity factor. This is not a profile value but is calculated as ISF/IC and is how many mg/dl 1g of carbs will raise your BG.

The formula is: `absorbed_carbs = deviation * ic / isf` It means:
* increasing ic will increase carbs absorbed every 5 minutes thus shorten total time of absorption
* increasing isf will decrease carbs absorbed every 5 minutes thus prolong total time of absorption
* changing profile % increase/decrease both values thus has no impact on carbs absorption time

For example, if your profile ISF is 100 and your IC is 5, your CSF would be 20. For every 20 mg/dl your BG goes up, 1g of carbs are absorbed by AAPS. Positive IOB also effects this calculation. So, if AAPS expected your BG to go down by 20 mg/dl because of IOB and it instead stayed flat, it would also absorb 1g of carbs.

Carbs will also be absorbed via the methods described below based on what sensitivity algorithm is used.

### Oref1

Nestrávené sacharidy jsou odříznuty po určené době

![Oref1](../images/cob_oref0_orange_II.png)

### AAPS, Vážený průměr

absorption is calculated to have `COB == 0` after specified time

![AAPS, WheitedAverage](../images/cob_aaps2_orange_II.png)

Jestliže je použitá minimální absorpce sacharidů (min_5m_carbimpact) namísto hodnoty vypočtené z odchylek, tak se v COB grafu objeví oranžová tečka.

(COB-calculation-detection-of-wrong-cob-values)=

## Zjišťování nesprávných hodnot COB

AAPS warns you if you are about to bolus with COB from a previous meal and the algorithm thinks that current COB calculation could be wrong. V takovém případě Vám bude po použití bolusové kalkulačky zobrazen dodatečný pokyn na obrazovce s potvrzením.

### How does AAPS detect wrong COB values?

Obvykle AAPS detekuje absorpci sacharidů prostřednictvím odchylek glykémií. In case you entered carbs but AAPS cannot see their estimated absorption through BG deviations, it will use the [min_5m_carbimpact](../Configuration/Config-Builder.md?highlight=min_5m_carbimpact#absorption-settings) method to calculate the absorption instead (so called 'fallback'). Protože tato metoda počítá pouze minimální absorbci sacharidů, aniž by zvážila odchylky glykémií, může to vést k chybným hodnotám COB.

![Pokyn pro chybnou hodnotu COB](../images/Calculator_SlowCarbAbsorption.png)

In the screenshot above, 41% of time the carb absorption was mathematically calculated by the min_5m_carbimpact instead of the value  detected from deviations.  To znamená, že možná máte méně zbývajících sacharidů, než vypočteno.

### Jak se vypořádat s tímto varováním?

- Zvážit zrušení bolusu - stiskněte tlačítko Zrušit namísto OK.
- Vypočítejte znovu nachystané jídlo bez zatrhnutého COB.
- V případě, že jste si jisti, že potřebujete podat korekční bolus, zadejte jej ručně.
- Ale buďte opatrní, aby nedošlo k předávkování!

### Proč algoritmus nedetekuje COB správně?

- Možná jste přecenil sacharidy při jejich vkládání.
- Aktivita / cvičení po předchozím jídle
- Inzulínovosacharidový poměr vyžaduje úpravu
- Hodnota pro min_5m_carbimpact je chybná (doporučeno je 8 s SMB, 3 s AMA)

## Ruční korekce zadaných sacharidů

If you over- or underestimated carbs you can correct this though treatments tab and actions tab / menu as described [here](Screenshots-carb-correction).
