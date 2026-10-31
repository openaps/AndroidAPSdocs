(Open-APS-features-DynamicISF)=
# SI dynamique (DynISF)

Jusqu'à présent, avec **AMA** et **SMB**, la **SI** était définie dans le **Profil** et restait fixe pour chaque période définie de la journée. Mais en réalité, la **SI** d'une personne n'est pas aussi fixe : elle varie selon son niveau de **glycémie**. Quand la glycémie est haute, l'utilisateur a besoin de plus d'insuline pour faire baisser sa **glycémie** de 50 mg/dl / 3 mmol/l que quand sa **glycémie** est plus basse. [Autosens](#Open-APS-features-autosens) a été le premier algorithme à essayer de résoudre ce problème, en ajustant la **SI** en dehors des repas.

La **SI dynamique** (aussi appelée **DynISF**) a le même but, mais elle est plus avancée, car elle peut être utilisée à tout moment. Elle est recommandée seulement aux utilisateurs avancés qui maîtrisent bien les réglages et la surveillance d'**AAPS**. Lisez la section [Points à prendre en compte avant d'activer la SI dynamique](#dyn-isf-things-to-consider-when-activating-dynamicisf) ci-dessous avant de l'essayer.

```{admonition} CAUTION - Automations or Profile Percentage change
:class: warning

Les **Automatisations** doivent toujours être utilisées avec prudence. C'est particulièrement vrai avec la **SI dynamique**.

Quand vous utilisez la **SI dynamique**, désactivez toute règle d'**Automatisation** qui change temporairement le **Profil**, car la **SI dynamique** deviendrait trop agressive dans ses bolus de correction et provoquerait une hypoglycémie. C'est exactement le rôle de la **SI dynamique** : il n'est donc pas nécessaire de demander à **AAPS**, par une Automatisation, de donner plus d'insuline en cas de **glycémie** élevée.

```

Pour utiliser la **SI dynamique**, la base de données d'**AAPS** doit contenir au moins 7 jours de données **AAPS** de l'utilisateur.

## Que fait la SI dynamique ?

La **SI dynamique** adapte le facteur de sensibilité à l'insuline (**SI**) de façon dynamique, en fonction de :

- la Dose Totale Quotidienne d'insuline (**DTQ**) ; et
- les valeurs de glycémie actuelles et prévues.

Avec la **SI dynamique**, les valeurs de **SI** saisies dans le **Profil** ne sont plus du tout utilisées, sauf comme valeur de secours s'il n'y a pas assez de données de DTQ dans la base de données d'**AAPS** (*par ex.* après une nouvelle installation de l'application).

**SMB/AMA** : un exemple de **Profil** avec une **SI** statique, définie par l'utilisateur et utilisée par **SMB** et **AMA**.

![SI statique](../images/DynamicISF/profile_viewer_isf.png)

**SI dynamique** : un exemple de **SI** qui change selon le calcul de la **SI dynamique**.

![SI dyn.](../images/DynamicISF/DynISF2.png)

La partie entourée en rouge montre : `profile ISF` -> `ISF as calculated by DynISF` (SI du profil, puis SI calculée par DynISF). <br/> Un appui sur cette section ouvre une boîte de dialogue avec des informations supplémentaires, comme la **SI** utilisée pour l'assistant et pour l'absorption des glucides (voir [Autres utilisations de la SI](#dynisf-other-usages-of-isf) ci-dessous).

La valeur de la **DynISF** peut aussi être affichée dans un graphique : appuyez sur **Ajouter graphique** sous les graphiques de l'écran principal et choisissez **V_SI** (sensibilité variable). Elle apparaît comme une ligne blanche (en bas de l'image ci-dessus).

## Comment la SI dynamique est-elle calculée ?

La **SI dynamique** utilise le modèle de Chris Wilson pour déterminer la **SI**, au lieu de la valeur de **SI** statique définie par l'utilisateur dans le **Profil**. Une explication détaillée est disponible ici (en anglais) : [Chris Wilson on Insulin Sensitivity (Correction Factor) with Loop and Learn, 2/6/2022](https://www.youtube.com/watch?v=oL49FhOts3c).

L'équation de la **SI dynamique** utilisée est : `ISF = 1800 / ((TDD * DynISF Adjust Factor) * Ln (( current BG / insulin divisor) + 1 ))`

Les variables de cette équation sont détaillées ci-dessous.<br/> Remarque : `Ln` désigne le logarithme népérien (naturel), une fonction mathématique.

L'implémentation utilise l'équation ci-dessus pour calculer la **SI** actuelle, et aussi dans les [prédictions oref1 pour l'**IA**, **ZT** (basal temporaire à zéro) et les **RNS**](#aaps-screens-prediction-lines). Elle est aussi utilisée pour les **GA** et dans l'assistant bolus (voir [Autres utilisations de la SI](#dynisf-other-usages-of-isf) ci-dessous).

### DTQ (Dose Totale Quotidienne)
La DTQ utilise une combinaison des valeurs suivantes :
1.  la moyenne de la **DTQ** sur 7 jours ;
2.  la **DTQ** de la veille ; et
3.  une moyenne pondérée des huit (8) dernières heures d'insuline, extrapolée sur 24 heures.

Dans l'équation ci-dessus, la **DTQ** utilisée est composée pour un tiers de chacune des valeurs ci-dessus.

### Facteur d'ajustement de la SI dynamique

Il se règle dans les **Paramètres** de l'utilisateur et sert à rendre la **SI dynamique** plus ou moins agressive. Voir la section [Préférences](#dyn-isf-preferences) ci-dessous.

### Diviseur d'insuline
Le diviseur d'insuline dépend du pic de l'insuline utilisée et il est inversement proportionnel au temps de pic. Pour la Lyumjev, cette valeur est de 75, pour la Fiasp de 65 et pour une insuline rapide standard de 55.

### SI basée sur la glycémie prévue pour les décisions de dosage

La sensibilité dynamique est calculée avec la valeur de **glycémie actuelle**, et elle est affichée comme votre SI actuelle dans **AAPS**. Mais pour les calculs de dosage, l'algorithme oref1 calcule et utilise à la place la **SI future**.

Le but est d'éviter de donner trop d'insuline quand la **glycémie** est basse ou qu'elle devrait baisser.

La **SI future** utilise la même formule que ci-dessus, mais elle peut utiliser la **glycémie minimale prévue** au lieu de la **glycémie actuelle**. La **glycémie minimale prévue**, [telle que calculée par oref1](#aaps-screens-how-predictions-become-a-dosing-decision), est la valeur la plus basse que votre glycémie devrait atteindre sur toute la durée des prédictions.

* Si la **glycémie** actuelle est au-dessus de la cible  <br/> **et** si la **glycémie** est stable, à +/- 3 mg/dl près :<br/>la glycémie utilisée dans la formule est : `average(minimum predicted BG, current BG)` (moyenne de la glycémie minimale prévue et de la glycémie actuelle).
* Si la **glycémie** finale prévue est au-dessus de la cible et que la glycémie monte,<br/>  
  **ou** si la **glycémie** finale prévue est au-dessus de la **glycémie** actuelle :<br/>la glycémie utilisée dans la formule est : `current BG` (glycémie actuelle).
* Sinon :<br/>la glycémie utilisée dans la formule est : `minimum predicted BG` (glycémie minimale prévue).

Pour une explication simplifiée, regardez la capture d'écran ci-dessous, qui illustre la situation décrite ci-dessus. Les points orange utilisent la **glycémie prévue**, les points violets la **moyenne(glycémie prévue, glycémie actuelle)** et les points bleus la **glycémie actuelle**.

![DynISF_BGValue.png](../images/DynamicISF/DynISF_BGValue.png)

(dynisf-other-usages-of-isf)=
## Autres utilisations de la SI

### SI et absorption des GA

Comme décrit dans la page [Calcul GA](../DailyLifeWithAaps/CobCalculation.md), l'absorption des GA est normalement calculée avec cette formule :   
`absorbed_carbs = deviation * ic / isf`  
Avec la **SI dynamique**, la **SI** utilisée ici est la moyenne des valeurs de SI dynamique des dernières 24 h.

### SI dans l'Assistant Bolus

Avec l'[Assistant Bolus](#aaps-screens-bolus-wizard), la **SI** est utilisée pour ajouter une correction si la **glycémie** est au-dessus de la cible.

Avec la **SI dynamique**, la **SI** utilisée ici est la moyenne des valeurs de SI dynamique des dernières 24 h.

(dyn-isf-preferences)=
## Paramètres

Pour l'activer, cochez **Activer la sensibilité dynamique** dans [Paramètres > OpenAPS SMB](#Preferences-openaps-smb-settings). De nouveaux paramètres sont disponibles une fois l'option sélectionnée.

![Paramètres de la SI dynamique](../images/preferences/settings_dynamic_isf.png)

(dyn-isf-adjustment-factor)=
### Facteur d'ajustement DynamicISF
La **SI dynamique** repose sur une seule règle, censée s'appliquer à tout le monde : des personnes avec la même **DTQ** auraient donc la même sensibilité. Comme chaque utilisateur a sa propre sensibilité, le **Facteur d'ajustement** permet à l'utilisateur d'indiquer s'il est plus ou moins sensible à l'insuline que la personne « standard ».

Le **Facteur d'ajustement** est une valeur entre 1 % et 300 %. Il agit comme un multiplicateur de la valeur de **DTQ**.

* Augmenter cette valeur au-dessus de 100 % rend la **DynISF** plus agressive : les valeurs de **SI** deviennent *plus petites* (_c.-à-d._ il faut plus d'insuline pour faire baisser un peu la **glycémie**)
* Baisser cette valeur sous 100 % rend la **DynISF** moins agressive : les valeurs de **SI** deviennent plus grandes (_c.-à-d._ il faut moins d'insuline pour faire baisser un peu la **glycémie**).

Le **Facteur d'ajustement** change aussi quand vous activez un [**Changement de profil** avec un pourcentage](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md). Un **Pourcentage du profil** plus bas diminue le **Facteur d'ajustement**, et un **Pourcentage du profil** plus haut l'augmente.

Par exemple, si votre **Facteur d'ajustement** est de 80 % et que vous faites un **Changement de profil** à 80 %, le **Facteur d'ajustement** résultant sera `0,8 × 0,8 = 0,64`.

Cela signifie qu'avec la **DynISF**, vous pouvez utiliser le **Pourcentage du profil** pour ajuster temporairement et manuellement votre sensibilité. C'est utile par exemple pour une activité physique (pourcentage plus bas), une maladie (pourcentage plus haut), etc.

### Seuil AGB

Valeur de **glycémie** sous laquelle l'insuline est arrêtée (arrêt glycémie basse, AGB). La valeur par défaut utilise le modèle de cible standard. L'utilisateur peut régler cette valeur entre 60 mg/dl (3,3 mmol/l) et 100 mg/dl (5,5 mmol/l). Les valeurs sous 65/3,6 entraînent l'utilisation du modèle par défaut.

### DynamicISF ajuste la sensibilité

Ce paramètre (*« Ajuster les calculs de sensibilité avec DynamicISF »*) remplace Autosens et utilise le rapport **DTQ** des dernières 24 h / **DTQ** sur 7 jours comme base pour augmenter ou diminuer le débit basal, de la même manière qu'Autosens standard. Cette valeur calculée sert aussi à ajuster la cible, si les options d'ajustement de la cible selon la sensibilité sont activées. Contrairement à Autosens, cette option n'ajuste pas les valeurs de **SI**.

(dyn-isf-things-to-consider-when-activating-dynamicisf)=
## Points à prendre en compte avant d'activer la SI dynamique

* La **SI dynamique** est recommandée seulement aux utilisateurs avancés qui maîtrisent bien les réglages et la surveillance d'**AAPS**. Idéalement, les utilisateurs devraient avoir obtenu un bon contrôle avec **SMB** avant de passer à la **SI dynamique**.
* Comme indiqué ci-dessus, désactivez toutes les [**Automatisations**](../DailyLifeWithAaps/Automations.md) qui activent un **Pourcentage du profil** en fonction de la **glycémie**, car ce serait trop agressif et pourrait délivrer trop d'insuline ! Cela fait déjà partie de l'algorithme de la **SI dynamique**.
* Le [Pourcentage du profil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) est pris en compte dans le calcul de la SI dynamique (voir [Facteur d'ajustement de la SI dynamique](#dyn-isf-adjustment-factor) ci-dessus). Il est déconseillé d'utiliser longtemps un **Pourcentage du profil** différent de 100 %. Si vous constatez que votre **Profil** a changé, créez un nouveau **Profil** avec vos valeurs corrigées, au lieu de garder le **Profil** avec un pourcentage spécifique.
* La **SI dynamique** ne convient pas forcément à tout le monde. En particulier, vous pouvez avoir des résultats inattendus si l'une de ces situations vous concerne :
  * Mode de vie variable (repas ou activité physique irréguliers)
  * DTQ ou sensibilité irrégulières d'un jour à l'autre.
* Il n'existe pas de guide précis pour régler la valeur de départ du **Facteur d'ajustement**. Mais comme point de départ : si les valeurs de votre **Profil** sont correctes, quand vous êtes dans la cible et que la **glycémie** est stable, la valeur de la **DynISF** devrait être à peu près la même que celle de votre **Profil** avant.<br/>Si vous voyez que la **SI dynamique** est trop agressive, baissez le **Facteur d'ajustement**, et inversement.
* Même si la **DynISF** n'utilise pas du tout la **SI du profil**, si vous remarquez que votre sensibilité est très différente de celle enregistrée dans votre **Profil**, pensez à mettre le profil à jour. Cela peut être utile si vous perdez vos données **AAPS** (_par ex._ nouveau téléphone, nouvelle version d'**AAPS**…), car la **SI du profil** sera utilisée comme valeur de secours pendant les 7 jours suivants.