(Extended-Carbs-extended-carbs-ecarbs)=
# Glucides étendus / "eGlucides"

## Que sont les eGlucides et quand sont-ils utiles?

Avec une thérapie par pompe régulière, Les bolus étendus sont un bon moyen de traiter les repas gras ou absorbés lentement et dont l'impact sur l'augmentation de la glycémie est plus long que la durée d'action de l'insuline. Cependant dans un contexte de boucle, les bolus étendus n'ont pas autant d'intérêt (et posent des difficultés techniques) car il s'agit d'un débit de basal fixe élevé, qui va à l'encontre du fonctionnement de la boucle, qui ajuste dynamiquement le débit de basal. For details see [extended bolus](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment) below.

Mais le besoin de prendre en charge de tels repas existe toujours. Which is why AAPS as of version 2.0 supports so called extended carbs or eCarbs.

Les eGlucides sont des glucides qui sont actifs pendant plusieurs heures. Pour les repas standard avec plus de glucides que de graisse/protéines, entrer les glucides à l'avance (et réduire le bolus initial si nécessaire) est généralement suffisant pour éviter d'injecter trop tôt de l'insuline.  Mais pour les repas à absorption plus lente où l'entrée de la totalité des glucides au début entraîne trop d'IA injectée par les SMB, les eGlucides peuvent être utilisés pour simuler plus précisément comment les glucides (et tous les équivalents de glucides que vous entrez pour les autres macronutriments) sont absorbés et influencent la glycémie. Grâce à cette information, la boucle peut gérer les glucides en administrant les SMB de façon plus progressive, ce qui peut être assimilé à un bolus prolongé dynamique (cela devrait également fonctionner sans les SMB, mais probablement moins efficacement).

**Remarque :** Les eGlucides ne sont pas limités aux repas lourds en graisses/protéines : ils peuvent également être utilisés pour aider dans toutes les situations où il y a des influences qui augmentent les glycémies, par ex.

## Mécanique d'utilisation d'eGlucides

Pour entrer des eGlucides, définissez une durée dans la boîte de dialogue *Glucides* dans l'onglet Aperçu, le total des glucides et optionnellement un décalage horaire (les *nombres ci-dessous ne sont que des exemples, vous devrez essayer vos propres valeurs pour arriver à une glycémie satisfaisante pour vos cas d'utilisation*) :

![Enter carbs](../images/eCarbs_Dialog.png)

Les eGlucides dans l’onglet Accueil, notez les glucides entre parenthèses dans le champ GA, qui montre les glucides à venir :

![eCarbs in graph](../images/eCarbs_Graph.png)

______________________________________________________________________

Une façon de gérer les graisses et les protéines avec cette fonctionnalité est décrite ici: [https://adriansloop.blogspot.com/2018/04/page-margin-0.html](https://adriansloop.blogspot.com/2018/04/page-margin-0.html)

______________________________________________________________________

## Configuration recommandée, exemple de scénario, et notes importantes

La configuration recommandée est d'utiliser le plug-in OpenAPS SMB, avec les SMB activés ainsi que le paramètre *Activer SMB avec les glucides* activé.

Par exemple pour une pizza, cela pourrait être de donner un bolus (partiel) à l'avance via l'*Assistant* puis d'utiliser le bouton *Glucides* pour entrer les glucides restants pendant une durée de 4-6 heures, en commençant après 1 ou 2 heures.

**Remarques importantes :** Vous devrez essayer et voir quelles sont les valeurs qui marchent pour vous bien sûr. Vous pouvez également ajuster soigneusement le paramètre *Max minutes de basal pour limiter SMB* pour rendre l'algorithme plus ou moins agressif. Avec des repas faibles en glucides et riches en graisses/protéines, il peut être suffisant d'utiliser uniquement des eGlucides sans bolus manuels (voir le blog ci-dessus). Lorsque des eGlucides sont générés, une note Careportal est également créée pour pouvoir documenter toutes les entrées, et faciliter les itérations et l'amélioration des entrées.

(extended-bolus-and-why-they-wont-work-in-closed-loop-environment)=
## Bolus étendu et pourquoi ils ne fonctionneront pas dans une boucle fermée ?

Comme mentionné ci-dessus, les bolus étendus ou mixtes ne fonctionnent pas vraiment dans un environnement en boucle fermée. [See below](#why-extended-boluses-wont-work-in-a-closed-loop-environment) for details

(Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)=
### Bolus étendus et passage en boucle ouverte - uniquement pour les pompesDana et Insight

Certaines personnes ont demandé une option pour utiliser des bolus étendus dans AAPS, car ils voulaient traiter les aliments spéciaux comme ils avaient l'habitude de le faire.

C'est pourquoi à partir de la version 2.6, il y a une option pour un bolus étendu pour les utilisateurs de pompes Dana et Insight.

- La boucle fermée sera automatiquement arrêtée et basculera en mode boucle ouverte pour la durée du bolus étendu.
- La quantité d'insuline, le temps restant et le temps total seront affichés sur la page d'accueil.
- On Insight pump extended bolus is *not available* if [TBR emulation](#Accu-Chek-Insight-Pump-settings-in-aaps) is used.

![Extended bolus in AAPS 2.6](../images/ExtendedBolus2_6.png)

(why-extended-boluses-won-t-work-in-a-closed-loop-environment)=
### Pourquoi les bolus étendus ne marchent pas avec une boucle fermée

1. La boucle détermine que maintenant 1,55 U / h doit être délivré. Que ce soit administré sous forme de bolus étendu ou de DBT n'a pas d'importance pour l'algorithme. En fait, certaines des pompes utilisent le bolus étendu. Que devrait-il arriver alors ? La plupart des pilotes de pompe arrêtent alors le bolus prolongé -> Vous n’avez même pas eu besoin de le démarrer.

2. Si vous aviez le bolus étendu en entrée, que devrait-il se passer dans le modèle?

   1. Doit-il être considéré comme neutre avec le débit de Basal et faire la boucle dessus ? Ensuite, la boucle devrait également être en mesure de réduire le bolus si, par exemple, vous devenez trop bas et que toute l'insuline "neutre" est éliminée ?
   2. Faut-il simplement ajouter le bolus étendus ? Donc, la boucle devrait simplement être autorisée à continuer ? Même dans la pire des hypo ? Je ne pense pas que ce soit si bon : une hypo est prévue, mais il ne faut pas l'empêcher ?

3. L'IA que le bolus étendu accumule est prise en compte après 5 minutes lors du prochain calcul. En conséquence, la boucle donnerait moins de basal. Donc pas beaucoup de changements... exepté la possibilité d'éviter une hypo.
