# Calcul GA

## Comment AndroidAPS calcul-il la valeur de GA?

### Oref1

Les glucides non absorbés sont coupés après un certain temps

```{image} ../images/cob_oref0_orange_II.png
:alt: Oref1
```

### AAPS, Moyenne pondérée

absorption is calculated to have `COB == 0` after specified time

```{image} ../images/cob_aaps2_orange_II.png
:alt: AAPS, Moyenne pondérée
```

Si l'absorption minimale de glucides (min_5m_carbimpact) est utilisée à la place de la valeur calculée à partir des écarts de GLY, un point orange apparaît sur le graphique GA.

(detection-of-wrong-cob-values)=
## Détection de GA erronés

AAPS vous avertit si vous êtes sur le point de faire un bolus avec des GA d'un précédent repas et que l'algorithme pense que le calcul actuel des GA pourrait être erroné. Dans ce cas, il vous donnera une indication supplémentaire sur l'écran de confirmation après l'utilisation de l'assistant bolus.

### Comment AndroidAPS détecte-t-il les mauvaises valeurs de GA ?

Normalement, AAPS détecte l'absorption des glucides par des écarts de glycémie. In case you entered carbs but AAPS cannot see their estimated absorption through BG deviations, it will use the [min_5m_carbimpact](../Configuration/Config-Builder.md?highlight=min_5m_carbimpact#absorption-settings) method to calculate the absorption instead (so called 'fallback'). Comme cette méthode ne calcule que l'absorption minimale de glucides sans tenir compte des écarts de GLY, elle peut conduire à des valeurs de GA incorrectes.

```{image} ../images/Calculator_SlowCarbAbsorption.png
:alt: soupçon de GA erronés
```

Dans la capture d'écran ci-dessus, 41% du temps l'absorption de glucides a été mathématiquement calculée par le min_5m_carbimpact au lieu de la valeur détectée par les variations de GLY.  Cela signifie que vous avez peut-être moins de glucides actifs que calculé par l'algorithme.

### Comment gérer cet avertissement ?

- Consider to cancel the treatment - press Cancel instead of OK.
- Calculate your upcoming meal again with bolus wizard leaving COB unticked.
- In case you are sure you need a correction bolus, enter it manually.
- In any case be careful not to overdose!

### Pourquoi l'algorithme ne détecte-on pas correctement les GA ?

- Maybe you overestimated carbs when entering them.
- Activity / exercise after your previous meal
- I:C needs adjustment
- Value for min_5m_carbimpact is wrong (recommended is 8 with SMB, 3 with AMA)

## Correction manuelle des glucides

If you over- or underestimated carbs you can correct this though treatments tab and actions tab / menu as described [here](../Getting-Started/Screenshots.md#carb-correction).
