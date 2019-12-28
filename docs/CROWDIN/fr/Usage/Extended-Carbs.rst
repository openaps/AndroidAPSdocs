Glucides étendus / "eGlucides"
**************************************************
Avec une thérapie par pompe régulière, Les bolus étendus sont un bon moyen de traiter les repas gras ou absorbés lentement et dont l'impact sur l'augmentation de la glycémie est plus long que la durée d'action de l'insuline. Cependant dans un contexte de boucle, les bolus étendus n'ont pas autant d'intérêt (et posent des difficultés techniques) car il s'agit d'un débit de basal fixe élevé, qui va à l'encontre du fonctionnement de la boucle, qui ajuste dynamiquement le débit de basal. Pour plus de détails voir `bolus étendus <../Usage/Extended-Carbs.html#bolus-etendu>`_ ci-dessous.

Mais le besoin de prendre en charge de tels repas existe toujours. C'est pourquoi AndroidAPS depuis la version 2.0 prend en charge ce que l'on appelle les glucides étendus ou eGlucides.

Les eGlucides sont des glucides qui sont actifs pendant plusieurs heures. Pour les repas standard avec plus de glucides que de graisse/protéines, entrer les glucides à l'avance (et réduire le bolus initial si nécessaire) est généralement suffisant pour éviter d'injecter trop tôt de l'insuline.  Mais pour les repas à absorption plus lente où l'entrée de la totalité des glucides au début entraîne trop d'IA injectée par les SMB, les eGlucides peuvent être utilisés pour simuler plus précisément comment les glucides (et tous les équivalents de glucides que vous entrez pour les autres macronutriments) sont absorbés et influencent la glycémie. Grâce à cette information, la boucle peut gérer les glucides en administrant les SMB de façon plus progressive, ce qui peut être assimilé à un bolus prolongé dynamique (cela devrait également fonctionner sans les SMB, mais probablement moins efficacement).

Les eGlucides ne sont pas limités aux repas lourds en graisses/protéines : ils peuvent également être utilisés pour aider dans toutes les situations où il y a des influences qui augmentent les glycémies, par ex. lors de la prise d'autres médicaments comme les corticostéroïdes.

Pour entrer les eGlucidess, définissez une durée dans la boîte de dialogue _Glucides_ de l'onglet Accueil, le nombre total de glucides et si nécessaire un décalage horaire :

.. image:: ../images/eCarbs_Dialog.png
  :alt: Entrer les glucides

Les eGlucides dans l’onglet Accueil, notez les glucides entre parenthèses dans le champ GA, qui montre les glucides à venir :

.. image:: ../images/eCarbs_Graph.png
  :alt: eGlucides dans le graphique

Les glucides qui se seront pris en compte plus tard sont en orange foncé dans l'onglet Traitement :

.. image:: ../images/eCarbs_Treatment.png
  :alt: eGlucides à venir dans l'onglet Traitement


-----

Une façon de gérer les graisses et les protéines avec cette fonctionnalité est décrite ici: `https://adriansloop.blogspot.co.at/2018/04/page-margin-0.html <https://adriansloop.blogspot.co.at/2018/04/page-margin-0.html>`_

-----

La configuration recommandée est d'utiliser le plug-in OpenAPS SMB, avec les SMB activés ainsi que le paramètre _Activer SMB avec les glucides_ activé.

Un scénario par ex. pour une pizza pourrait être de donner un bolus (partiel) à l'avance via la _Calculatrice_ puis d'utiliser le bouton _Glucides_ pour entrer les glucides restants pendant une durée de 4-6 heures, en commençant après 1 ou 2 heures. Vous devrez essayer et voir quelles sont les valeurs qui marchent pour vous bien sûr. Vous pouvez également ajuster soigneusement le paramètre _Max minutes de basal pour limiter SMB_ pour rendre l'algorithme plus ou moins agressif.
Avec des repas faibles en glucides et riches en graisses/protéines, il peut être suffisant d'utiliser uniquement des eGlucides sans bolus manuels (voir le blog ci-dessus).

Lorsque des eGlucides sont générés, une note Careportal est également créée pour pouvoir documenter toutes les entrées, et faciliter les itérations et l'amélioration des entrées.

Bolus étendu
==================================================
As mentioned above extended or multiwave boluses do not really work in a closed loop environment. Therefore there is no option to issue an extended bolus in AndroidAPS. Here's why:

1. The loop determines that now 1.55U/h is to be delivered. Whether this is delivered as an extended bolus or TBR does not matter to the algorithm. In fact, some of the pumps use the extended bolus. What should happen then? Most pump drivers then stop the extended bolus -> You didn't even need to start it.
2. If you had the extended bolus as input, what should happen in the model?

   1. Should it be considered neutral together with the BR and looped on it? Then the loop should also be able to reduce the bolus if, for example, you get too low and all the "neutral" insulin is taken away?
   2. Should the extended bolus simply be added? So the loop should simply be allowed to continue? Even in the worst hypo? I don't think this is so good: A hypo is foreseen but it must not be prevented?
   
3. The IOB that the extended bolus builds up materializes after 5 minutes at the next run. Accordingly, the loop would give less basal. So not much changes... except that the possibility of hypo avoidance is taken.
