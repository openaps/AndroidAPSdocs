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
Comme mentionné ci-dessus, les bolus étendus ou mixtes ne fonctionnent pas vraiment dans un environnement en boucle fermée. `Voir ci-dessous <../Usage/Extended-Carbs.html#pourquoi-les-bolus-etendus-ne-marchent-pas-avec-une-boucle-fermee>`_ pour plus de détails

Bolus étendus et passage en boucle ouverte - uniquement pour les pompesDana et Insight
-----------------------------------------------------------------------------
Certaines personnes ont demandé une option pour utiliser des bolus étendus dans AAPS, car ils voulaient traiter les aliments spéciaux comme ils avaient l'habitude de le faire. 

C'est pourquoi à partir de la version 2.6, il y a une option pour un bolus étendu pour les utilisateurs de pompes Dana et Insight. 

* La boucle fermée sera automatiquement arrêtée et basculera en mode boucle ouverte pour la durée du bolus étendu. 
* La quantité d'insuline, le temps restant et le temps total seront affichés sur la page d'accueil.
* Sur les pompes Insight, les bolus étendus *ne sont pas disponibles* si `Activer l'émulation de DBT <../Configuration/Accu-Chek-Insight-Pump.html#parametres-dans-aaps>`_ est activé. 

.. image:: ../images/ExtendedBolus2_6.png
  :alt: Bolus étendus dans AAPS 2.6

Pourquoi les bolus étendus ne marchent pas avec une boucle fermée
----------------------------------------------------------------------------------------------------
1. La boucle détermine que maintenant 1,55 U / h doit être délivré. Que ce soit administré sous forme de bolus étendu ou de DBT n'a pas d'importance pour l'algorithme. En fait, certaines des pompes utilisent le bolus étendu. Que devrait-il arriver alors ? La plupart des pilotes de pompe arrêtent alors le bolus prolongé -> Vous n’avez même pas eu besoin de le démarrer.
2. Si vous aviez le bolus étendu en entrée, que devrait-il se passer dans le modèle?

   1. Doit-il être considéré comme neutre avec le débit de Basal et faire la boucle dessus ? Ensuite, la boucle devrait également être en mesure de réduire le bolus si, par exemple, vous devenez trop bas et que toute l'insuline "neutre" est éliminée ?
   2. Faut-il simplement ajouter le bolus étendus ? Donc, la boucle devrait simplement être autorisée à continuer ? Même dans la pire des hypo ? Je ne pense pas que ce soit si bon : une hypo est prévue, mais il ne faut pas l'empêcher ?
   
3. L'IA que le bolus étendu accumule est prise en compte après 5 minutes lors du prochain calcul. En conséquence, la boucle donnerait moins de basal. Donc pas beaucoup de changements... exepté la possibilité d'éviter une hypo.
