# Calcul GA

## How does AAPS calculate the COB value?

When carbs are entered as part of a meal or correction, AAPS adds them to the current carbs on board (COB). AAPS then absorbs (removes) carbs based on observed deviations to BG values. The rate of absorption depends on the carb sensitivity factor. This is not a profile value but is calculated as ISF/IC and is how many mg/dl 1g of carbs will raise your BG.

For example, if your profile ISF is 100 and your IC is 5, your CSF would be 20. For every 20 mg/dl your BG goes up, 1g of carbs are absorbed by AAPS. Positive IOB also effects this calculation. So, if AAPS expected your BG to go down by 20 mg/dl because of IOB and it instead stayed flat, it would also absorb 1g of carbs.

Carbs will also be absorbed via the methods described below based on what sensitivity algorithm is used.

### Oref1

Les glucides non absorbés sont coupés après un certain temps

```{image} ../images/cob_oref0_orange_II.png
:alt: Oref1
```

### AAPS, Moyenne pondérée

l'absorption est calculée pour avoir `GA == 0` après la durée spécifiée

```{image} ../images/cob_aaps2_orange_II.png
:alt: AAPS, Moyenne pondérée
```

Si l'absorption minimale de glucides (min_5m_carbimpact) est utilisée à la place de la valeur calculée à partir des écarts de GLY, un point orange apparaît sur le graphique GA.

(COB-calculation-detection-of-wrong-cob-values)=
## Détection de GA erronés

AAPS vous avertit si vous êtes sur le point de faire un bolus avec des GA d'un précédent repas et que l'algorithme pense que le calcul actuel des GA pourrait être erroné. Dans ce cas, il vous donnera une indication supplémentaire sur l'écran de confirmation après l'utilisation de l'assistant bolus.

### How does AAPS detect wrong COB values?

Normalement, AAPS détecte l'absorption des glucides par des écarts de glycémie. Si vous avez entré des glucides, mais que AAPS ne peut pas voir leur absorption estimée via les variations de GLY, il utilisera la méthode [min_5m_carbimpact](../Configuration/Config-Builder.md?highlight=min_5m_carbimpact#absorption-settings) pour calculer l'absorption à la place (appelée 'fallback'). Comme cette méthode ne calcule que l'absorption minimale de glucides sans tenir compte des écarts de GLY, elle peut conduire à des valeurs de GA incorrectes.

```{image} ../images/Calculator_SlowCarbAbsorption.png
:alt: soupçon de GA erronés
```

Dans la capture d'écran ci-dessus, 41% du temps l'absorption de glucides a été mathématiquement calculée par le min_5m_carbimpact au lieu de la valeur détectée par les variations de GLY.  Cela signifie que vous avez peut-être moins de glucides actifs que calculé par l'algorithme.

### Comment gérer cet avertissement ?

- Envisagez d'annuler le traitement, appuyez sur Annuler au lieu de OK.
- Calculez à nouveau votre prochain repas avec l'assistant de bolus laissant GA non coché.
- Si vous êtes sûr que vous avez besoin d'un bolus de correction, renseignez le manuellement.
- Dans tous les cas, faites attention à ne pas surdoser !

### Pourquoi l'algorithme ne détecte-on pas correctement les GA ?

- Peut-être que vous avez surestimé glucides lorsque vous les avez saisis.
- Vous avez fait de l'exercice après votre repas précédent
- le ratio G/I doit être ajusté
- La valeur de min_5m_carbimpact est incorrecte (8 est recommandée avec SMB, 3 avec AMA)

## Correction manuelle des glucides

Si vous avez sur-estimé ou sous-estimé les glucides, vous pouvez corriger cela via les onglets / menus Traitements et Actions comme c'est décrit [ici](Screenshots-carb-correction).
