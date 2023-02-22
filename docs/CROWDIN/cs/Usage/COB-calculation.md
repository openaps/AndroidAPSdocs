# Kalkulace COB

## Jak AndroidAPS počítá COB hodnotu?

### Oref1

Nestrávené sacharidy jsou odříznuty po určené době

```{image} ../images/cob_oref0_orange_II.png
:alt: Oref1
```

### AAPS, Vážený průměr

absorption is calculated to have `COB == 0` after specified time

```{image} ../images/cob_aaps2_orange_II.png
:alt: AAPS, Vážený průměr
```

Jestliže je použitá minimální absorpce sacharidů (min_5m_carbimpact) namísto hodnoty vypočtené z odchylek, tak se v COB grafu objeví oranžová tečka.

(detection-of-wrong-cob-values)=
## Zjišťování nesprávných hodnot COB

AAPS warns you if you are about to bolus with COB from a previous meal and the algorithm thinks that current COB calculation could be wrong. V takovém případě Vám bude po použití bolusové kalkulačky zobrazen dodatečný pokyn na obrazovce s potvrzením.

### Jak AndroidAPS zjistí nesprávné hodnoty COB?

Obvykle AAPS detekuje absorpci sacharidů prostřednictvím odchylek glykémií. In case you entered carbs but AAPS cannot see their estimated absorption through BG deviations, it will use the [min_5m_carbimpact](../Configuration/Config-Builder.md?highlight=min_5m_carbimpact#absorption-settings) method to calculate the absorption instead (so called 'fallback'). Protože tato metoda počítá pouze minimální absorbci sacharidů, aniž by zvážila odchylky glykémií, může to vést k chybným hodnotám COB.

```{image} ../images/Calculator_SlowCarbAbsorption.png
:alt: Pokyn pro chybnou hodnotu COB
```

In the screenshot above, 41% of time the carb absorption was mathematically calculated by the min_5m_carbimpact instead of the value  detected from deviations.  To znamená, že možná máte méně zbývajících sacharidů, než vypočteno.

### Jak se vypořádat s tímto varováním?

- Consider to cancel the treatment - press Cancel instead of OK.
- Calculate your upcoming meal again with bolus wizard leaving COB unticked.
- In case you are sure you need a correction bolus, enter it manually.
- In any case be careful not to overdose!

### Proč algoritmus nedetekuje COB správně?

- Maybe you overestimated carbs when entering them.
- Activity / exercise after your previous meal
- I:C needs adjustment
- Value for min_5m_carbimpact is wrong (recommended is 8 with SMB, 3 with AMA)

## Ruční korekce zadaných sacharidů

If you over- or underestimated carbs you can correct this though treatments tab and actions tab / menu as described [here](../Getting-Started/Screenshots.md#carb-correction).
