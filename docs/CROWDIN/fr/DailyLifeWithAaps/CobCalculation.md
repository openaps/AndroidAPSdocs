# Calcul GA

## Comment AAPS calcule-t-il la valeur des GA ?

Quand l'utilisateur saisit des glucides pour un repas ou une correction de glucides, **AAPS** les ajoute aux glucides actifs actuels (**GA**). **AAPS** calcule ensuite l'absorption des glucides à partir des écarts observés dans les valeurs de **glycémie** de l'utilisateur. La vitesse d'absorption dépend du facteur de sensibilité aux glucides (**CSF**). Ce n'est pas un réglage du **Profil** de l'utilisateur : **AAPS** le calcule à partir des réglages **SI/G/I**. Il indique de combien de mg/dl 1 g de glucides fait monter la **glycémie** de l'utilisateur.

## Facteur de sensibilité aux glucides

La formule utilisée par **AAPS** est :

- absorbed_carbs = deviation * ic / isf.

L'effet sur le **Profil** de l'utilisateur :

- _augmenter_ le **G/I** augmente les glucides absorbés toutes les 5 minutes et raccourcit donc la durée totale d'absorption ;

- _augmenter_ la **SI** diminue les glucides absorbés toutes les 5 minutes et allonge donc la durée totale d'absorption ; et

- _changer_ le **Pourcentage du profil** augmente ou diminue les deux valeurs et n'a donc pas d'effet sur la durée d'absorption des glucides.

Par exemple, si dans le **Profil** de l'utilisateur la **SI** est de 100 et le **G/I** de 5, le facteur de sensibilité aux glucides est de 20. Pour chaque hausse de 20 mg/dl de la **glycémie** de l'utilisateur, **AAPS** compte 1 g de glucides comme absorbé. Une **IA** positive influence aussi le calcul des **GA**. Donc, si **AAPS** prévoit que la **glycémie** de l'utilisateur baisse de 20 mg/dl à cause de l'**IA** et qu'elle reste stable à la place, **AAPS** compte aussi 1 g de glucides comme absorbé.

Les glucides sont aussi absorbés selon les méthodes décrites ci-dessous, en fonction de l'algorithme de sensibilité choisi dans **AAPS**.

## Sensibilité aux glucides - Oref1

Les glucides non absorbés sont supprimés après le temps défini :

![Oref1](../images/cob_oref0_orange_II.png)

![Graphique des GA avec la coupure Oref1](../images/cob_oref0_orange_I.png)

```{admonition} Older screenshot
:class: note
La capture d'écran ci-dessus vient d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, les graphiques sont un peu différents, mais le graphique des **GA** montre les mêmes informations.
```


## Sensibilité aux glucides - WeightedAverage

L'absorption est calculée pour avoir GA = 0 après le temps défini :

![AAPS, WeightedAverage](../images/cob_aaps2_orange_II.png)

Si l'absorption minimale des glucides (min_5m_carbimpact) est utilisée à la place de la valeur calculée à partir des écarts de **glycémie**, un point orange apparaît sur le graphique des **GA**.

(CobCalculation-detection-of-wrong-cob-values)=
## Détection de GA erronés

**AAPS** avertit l'utilisateur s'il est sur le point de faire un bolus avec des **GA** d'un repas précédent et que l'algorithme juge le calcul actuel des **GA** incorrect. Dans ce cas, il affiche une indication supplémentaire sur l'écran de confirmation après l'utilisation de l'assistant bolus.

### Comment AAPS détecte-t-il des valeurs de GA erronées ?

Normalement, __AAPS__ détecte l'absorption des glucides à partir des écarts de **glycémie**. Si l'utilisateur a saisi des glucides mais qu'**AAPS** ne peut pas détecter leur absorption à partir des écarts de **glycémie**, il utilise la méthode [min_5m_carbimpact](#Preferences-min_5m_carbimpact) pour calculer l'absorption (méthode dite « de secours », en anglais « fallback »). Comme cette méthode calcule seulement l'absorption minimale des glucides sans tenir compte des écarts de **glycémie**, elle peut donner des valeurs de GA incorrectes.

![Indication d'une valeur de GA erronée](../images/Calculator_SlowCarbAbsorption.png)

Dans la capture d'écran ci-dessus, l'absorption des glucides a été calculée 66 % du temps par min_5m_carbimpact au lieu de la valeur détectée à partir des écarts. Cela indique que l'utilisateur avait peut-être moins de **GA** que ce que l'algorithme a calculé.

### Comment gérer cet avertissement ?

- Pensez à annuler le traitement : appuyez sur « Annuler » au lieu de OK.
- Calculez à nouveau votre prochain repas avec l'assistant bolus, en laissant **GA** décoché.
- Si vous avez besoin d'un bolus de correction, saisissez-le manuellement.
- Attention à ne pas faire de surdosage ni d'accumulation d'insuline !


### Pourquoi l'algorithme ne détecte-t-il pas correctement les GA ?

Les raisons possibles :
- L'utilisateur a peut-être surestimé les glucides lors de la saisie.
- Activité / exercice après votre repas précédent.
- Le G/I doit être ajusté.
- La valeur de min_5m_carbimpact est incorrecte (valeur recommandée : 8 avec SMB, 3 avec AMA).


## Correction manuelle des glucides

Si les glucides ont été surestimés ou sous-estimés, vous pouvez les corriger dans l'écran **Historique Traitements**, comme décrit [ici](#screens-bolus-carbs).


## Correction des glucides - comment supprimer une saisie de glucides des Traitements


L'écran **Historique Traitements** permet de corriger une saisie de glucides erronée en la supprimant. L'utilisateur a peut-être surestimé ou sous-estimé les glucides saisis :

![Supprimer une saisie de glucides dans l'Historique Traitements](../images/e123d85d-907e-4545-bf1b-09fee4d42555.png)

1. Vérifiez et notez les **GA** et l'**IA** actuels sur l'écran principal d'**AAPS**.
2. Ouvrez l'**Historique Traitements** (menu latéral → *Historique Traitements*), onglet **Glucides et bolus**. Selon la pompe, les glucides peuvent apparaître avec l'insuline sur une seule ligne ou comme une entrée séparée (par ex. avec la Dana RS).
3. Faites un **appui long** sur la saisie de glucides erronée : la liste passe en **mode sélection** avec une case à cocher sur chaque ligne, et la saisie est cochée (repère **1** ci-dessus). Cochez aussi les autres saisies que vous voulez supprimer.
4. Appuyez sur l'icône **🗑 Supprimer** dans la barre du haut (repère **2**) et confirmez : la boîte de dialogue de confirmation liste exactement ce qui sera supprimé.
5. Vérifiez que les glucides ont bien été supprimés en regardant de nouveau les **GA** sur l'écran principal d'**AAPS**.
6. Faites de même pour l'**IA** s'il n'y a qu'une seule ligne avec glucides et insuline.
7. Si les glucides ne sont pas supprimés comme prévu et que d'autres glucides sont ajoutés comme expliqué dans cette section, la valeur des **GA** sera trop haute et **AAPS** pourrait délivrer trop d'insuline.
8. Saisissez la bonne quantité de glucides avec la boîte de dialogue **Glucides** (**Traitements** → **Glucides**) et réglez la bonne heure de l'événement.
9. S'il n'y avait qu'une seule ligne avec glucides et insuline, l'utilisateur doit aussi saisir de nouveau la quantité d'insuline. Veillez à régler la bonne heure de l'événement et vérifiez l'**IA** sur l'écran principal après avoir confirmé la nouvelle saisie.

