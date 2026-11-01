(Extended-Carbs-extended-carbs-ecarbs)=
# Glucides étendus / "eGlucides"

## Que sont les eGlucides et quand sont-ils utiles ?

Avec une thérapie par pompe classique, les bolus étendus sont un bon moyen de traiter les repas gras ou absorbés lentement, qui font monter la glycémie plus longtemps que la durée d'action de l'insuline. Cependant dans un contexte de boucle, les bolus étendus n'ont pas autant d'intérêt (et posent des difficultés techniques) car il s'agit d'un débit de basal fixe élevé, qui va à l'encontre du fonctionnement de la boucle, qui ajuste dynamiquement le débit de basal. Pour plus de détails, voir [bolus étendu](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment) ci-dessous.

Mais le besoin de prendre en charge de tels repas existe toujours. C'est pourquoi AAPS prend en charge les glucides étendus, appelés eGlucides.

Les eGlucides sont des glucides répartis sur plusieurs heures. Pour les repas standard avec plus de glucides que de graisse/protéines, entrer les glucides à l'avance (et réduire le bolus initial si nécessaire) est généralement suffisant pour éviter d'injecter trop tôt de l'insuline.  Mais pour les repas à absorption plus lente où l'entrée de la totalité des glucides au début entraîne trop d'IA injectée par les SMB, les eGlucides peuvent être utilisés pour simuler plus précisément comment les glucides (et tous les équivalents de glucides que vous entrez pour les autres macronutriments) sont absorbés et influencent la glycémie. Grâce à cette information, la boucle peut gérer les glucides en administrant les SMB de façon plus progressive, ce qui peut être vu comme un bolus étendu dynamique (cela devrait aussi fonctionner sans les SMB, mais probablement moins efficacement).

**Remarque :** les eGlucides ne sont pas limités aux repas riches en graisses/protéines : ils peuvent aussi aider dans toutes les situations où quelque chose fait monter la glycémie, par ex. d'autres médicaments comme les corticoïdes.

## Mécanique d'utilisation d'eGlucides

Pour saisir des eGlucides, ouvrez la boîte de dialogue **Glucides** (**Traitements** → **Glucides**), saisissez le total des glucides, réglez une **Durée** et, si besoin, décalez le début avec **Heure des glucides** (*les nombres ci-dessous sont seulement des exemples, vous devrez essayer vos propres valeurs pour obtenir une réponse glycémique satisfaisante dans vos situations*) :

![Saisir les glucides](../images/eCarbs_Dialog.png)

Les eGlucides sur l'écran principal : le nombre entre parenthèses dans le champ **GA** montre les glucides encore à venir, et le graphique **GA** montre chaque entrée future d'eGlucides par un repère orange. Si vous ne voyez pas de graphique **GA**, ajoutez-en un avec **Ajouter graphique** sous les graphiques (voir [Écrans AAPS](../DailyLifeWithAaps/AapsScreens.md)).

![eGlucides dans le champ GA et sur le graphique GA](../images/eCarbs_Graph.png)

(AapsScreens-carbs-type)=
## Type de glucides dans l'Assistant Bolus : pain, gâteau ou pizza

Dans l'[Assistant Bolus](#aaps-screens-bolus-wizard), trois boutons sous le champ **Glucides** vous permettent de choisir la vitesse d'absorption de votre repas. Choisissez-en un avant de confirmer. Selon le type, **AAPS** prend une partie des glucides saisis comme glucides normaux, et ajoute plus tard des [glucides étendus (« eGlucides »)](#Extended-Carbs-extended-carbs-ecarbs) pour les repas lents et riches. Appuyez sur l'icône **(i)** à côté des boutons pour voir les aliments typiques du type choisi et son effet sur vos glucides.

| Type                  | Typical foods (examples from the app)                                                                                                | Glucides maintenant, utilisés pour le bolus | eGlucides ajoutés                                      |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- | ------------------------------------------------------ |
| **Pain** (par défaut) | Pain, viennoiseries salées, yaourts, fruits, pommes de terre, riz, flocons d'avoine, légumes                                         | 100 %                                       | Aucun                                                  |
| **Gâteau**            | Raviolis, pâtes, plats asiatiques riches en glucides et en graisses, pâtisseries sucrées et viennoiseries, céréales, miel, confiture | 90 %                                        | 20 %, début 60 minutes plus tard, réparti sur 2 heures |
| **Pizza**             | Lasagnes, pizza, hamburgers, frites, pommes de terre au four, chips                                                                  | 80 %                                        | 35 %, début 60 minutes plus tard, réparti sur 3 heures |

**Exemple** : vous saisissez 100 g et choisissez **Pizza**. Le bolus est calculé pour 80 g, enregistrés maintenant. 35 g d'eGlucides commencent 1 heure plus tard et sont répartis sur 3 heures.

Bon à savoir :
* Ce n'est pas un simple partage : avec **Gâteau** et **Pizza**, les glucides enregistrés font au total **plus que ce que vous avez saisi** (110 % et 115 %). Le surplus est seulement dans les eGlucides.
* Le bolus couvre seulement les glucides pris maintenant. **AAPS** ne fait pas de bolus à l'avance pour les eGlucides : la boucle les prend en compte quand ils commencent, comme tous les autres [eGlucides](#Extended-Carbs-extended-carbs-ecarbs).
* Si vous réglez une **Heure des glucides**, les eGlucides commencent 60 minutes après cette heure.
* La boîte de dialogue de confirmation montre les eGlucides sur une ligne à part, _par ex._ « eGlucides 35 g / 3 h (+60 min) ».
* Les grammes sont arrondis à l'entier inférieur.
* Les pourcentages, délais et durées sont fixes ; ils ne peuvent pas être modifiés dans les paramètres.
* Le choix n'est pas mémorisé : l'assistant s'ouvre à chaque fois sur **Pain**.

______________________________________________________________________

Une façon de gérer les graisses et les protéines avec cette fonctionnalité est décrite ici : [https://adriansloop.blogspot.com/2018/04/page-margin-0.html](https://adriansloop.blogspot.com/2018/04/page-margin-0.html)

______________________________________________________________________

## Configuration recommandée, exemple de scénario, et notes importantes

La configuration recommandée est d'utiliser le plugin OpenAPS SMB, avec les SMB activés ainsi que le paramètre *Activer SMB avec les GA* activé.

Par exemple, pour une pizza, on peut donner un bolus (partiel) au début avec l'*Assistant Bolus*, puis utiliser la boîte de dialogue *Glucides* pour saisir les glucides restants sur une durée de 4–6 heures, avec un début après 1 ou 2 heures.

Pour démarrer plus vite, l'*Assistant Bolus* peut ajouter des eGlucides pour vous : choisissez le [type de glucides](#AapsScreens-carbs-type) **Gâteau** ou **Pizza** sous le champ **Glucides** (voir ci-dessus). Les quantités et les délais sont fixes : utilisez plutôt la boîte de dialogue *Glucides* si vous voulez d'autres valeurs.

**Remarques importantes :** Vous devrez essayer et voir quelles sont les valeurs qui marchent pour vous bien sûr. Vous pouvez aussi ajuster avec prudence le paramètre *Max. minutes de basal pour limiter le SMB* pour rendre l'algorithme plus ou moins agressif. Avec des repas faibles en glucides et riches en graisses/protéines, il peut être suffisant d'utiliser uniquement des eGlucides sans bolus manuels (voir le blog ci-dessus). Lorsque des eGlucides sont générés, une note Careportal est également créée pour pouvoir documenter toutes les entrées, et faciliter les itérations et l'amélioration des entrées.

(extended-bolus-and-why-they-wont-work-in-closed-loop-environment)=
## Extended boluses and why they don't work in a closed-loop environment

Comme mentionné ci-dessus, les bolus étendus ou mixtes ne fonctionnent pas vraiment dans un environnement en boucle fermée. [Voir ci-dessous](#why-extended-boluses-won-t-work-in-a-closed-loop-environment) pour plus de détails

(Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)=
### Bolus étendu et passage en boucle ouverte - uniquement pour les pompes Dana et Insight

Certaines personnes ont demandé une option pour utiliser des bolus étendus dans AAPS, car ils voulaient traiter les aliments spéciaux comme ils avaient l'habitude de le faire.

C'est pourquoi **AAPS** propose un bolus étendu aux utilisateurs des pompes Dana et Insight : ouvrez **Gestion** et sélectionnez **Bolus Étendu**.

**AAPS** vous avertit d'abord que la boucle fermée sera arrêtée pendant le bolus étendu. Appuyez sur **OK** pour continuer :

![Avertissement : le bolus étendu arrête le mode boucle fermée](../images/extended_bolus_stops_loop.png)

Saisissez la quantité d'**Insuline** et la **Durée**, puis appuyez sur le bouton de confirmation en bas et sur **OK** :

![Boîte de dialogue Bolus étendu avec 2 U sur 60 minutes](../images/extended_bolus_dialog.png)

Sur la pompe Insight, le bolus étendu n'est *pas disponible* si l'[émulation DBT](#Accu-Chek-Insight-Pump-settings-in-aaps) est utilisée.

Pendant le bolus étendu, la boucle fonctionne en mode **Boucle Ouverte** (l'icône de la boucle sur l'écran principal change), et la boucle fermée est réactivée automatiquement à la fin du bolus étendu :

![Icône Boucle Ouverte sur l'écran principal pendant un bolus étendu](../images/extended_bolus_main_screen.png)

Le menu **Gestion** affiche un bouton **Annuler** avec le débit et le temps écoulé / total (par exemple **Annuler 2,00 U/h 1/60'**). Appuyez dessus pour arrêter le bolus étendu plus tôt :

![Bouton Annuler d'un bolus étendu en cours dans le menu Gestion](../images/extended_bolus_running_manage.png)

(why-extended-boluses-won-t-work-in-a-closed-loop-environment)=
### Pourquoi les bolus étendus ne marchent pas avec une boucle fermée

1. La boucle détermine que maintenant 1,55 U / h doit être délivré. Que ce soit administré sous forme de bolus étendu ou de DBT n'a pas d'importance pour l'algorithme. En fait, certaines des pompes utilisent le bolus étendu. Que devrait-il arriver alors ? La plupart des pilotes de pompe arrêtent alors le bolus étendu -> Vous n'avez même pas eu besoin de le démarrer.

2. Si vous aviez le bolus étendu en entrée, que devrait-il se passer dans le modèle ?

   1. Doit-il être considéré comme neutre avec le débit de Basal et faire la boucle dessus ? Ensuite, la boucle devrait également être en mesure de réduire le bolus si, par exemple, vous devenez trop bas et que toute l'insuline "neutre" est éliminée ?
   2. Faut-il simplement ajouter le bolus étendu ? Donc, la boucle devrait simplement être autorisée à continuer ? Même dans la pire des hypo ? Je ne pense pas que ce soit si bon : une hypo est prévue, mais il ne faut pas l'empêcher ?

3. L'IA que le bolus étendu accumule est prise en compte après 5 minutes lors du prochain calcul. En conséquence, la boucle donnerait moins de basal. Donc pas beaucoup de changements... sauf que la possibilité d'éviter une hypo est perdue.
