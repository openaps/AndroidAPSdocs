# Pour les professionels de santé – Une introduction générale et un guide pour AndroidAPS

Cette page est destinée aux professionels de santé qui ont exprimé leur intérêt pour la technologie du pancréas artificiel en open source comme AndroidAPS, ou pour les patients qui veulent partager ces informations avec leur équipe médicale.

Ce guide contient des informations de haut niveau sur la boucle fermée DIY et plus précisément sur la façon dont AndroidAPS fonctionne. Pour plus de détails sur tous ces sujets, veuillez consulter la [documentation complète AndroidAPS en ligne](http://androidaps.readthedocs.io/en/latest/index.html). Si vous avez des questions, demandez à votre patient pour plus de détails, ou n'hésitez pas à rejoindre la communauté. (Si vous n'êtes pas sur les réseaux sociaux (par ex. [Twitter](https://twitter.com/kozakmilos) ou Facebook), n'hésitez pas à envoyer un email à developers@AndroidAPS.org). [Vous pouvez également trouver quelques-unes des dernières études & et les données relatives aux résultats ici](https://openaps.org/outcomes/).

### Les étapes pour construire une boucle fermée DIY :

Pour commencer à utiliser AndroidAPS, les étapes suivantes doivent être faites :

* Trouver une [pompe compatible](https://androidaps.readthedocs.io/en/latest/EN/Getting-Started/Pump-Choices.html), un [équipement Android compatible](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing), et une [source MGC compatible](https://androidaps.readthedocs.io/en/latest/EN/index.html#getting-started-with-androidaps).
* [Télécharger le code source AndroidAPS et compiler le logiciel](https://androidaps.readthedocs.io/en/latest/EN/Installing-AndroidAPS/Building-APK.html).
* [Configurer le logiciel pour qu'il dialogue avec ses périphériques et définir les préférences et les paramètres de sécurité](https://androidaps.readthedocs.io/en/latest/EN/index.html#configuration).

### Comment fonctionne une boucle fermée DIY

En l'absence d'un système à boucle fermée, une personne diabétique recueille les données de sa pompe et de sa MGC, décide de ce qu'il faut faire et agit.

Avec l'administration automatisée de l'insuline, le système fait la même chose: il recueille des données de la pompe, de la CGM, et partout ailleurs où des informations sont renseignées (comme Nightscout), utilise ces informations pour calculer et décider de la quantité d'insuline plus ou moins nécessaire (au-dessus ou en dessous du débit de basal sous-jacent), et utilise des débits de basal temporaires pour effectuer les ajustements nécessaires pour garder ou éventuellement amener les Glycémies dans la plage cible.

Si le périphérique exécutant AndroidAPS se brise ou devient hors de portée de la pompe, lorsque le dernier débit de base temporaire se termine, la pompe redevient une pompe normale avec le débit de basal préprogrammés.

### Comment les données sont collectées :

Avec AndroidAPS, un appareil Android exécute une application spéciale pour faire le calcul, l'appareil communique en Bluetooth avec une pompe prise en charge. AndroidAPS peut communiquer avec d'autres appareils ainsi que vers le cloud en utilisant le wifi ou les données mobiles pour recueillir des informations supplémentaires, et de faire des rapports au patient, aux soignants et à ses proches sur ce qu'il fait et pourquoi.

Le périphérique Android doit :

* communiquer avec la pompe et lire l'historique - combien d'insuline a été délivrée
* communiquer avec le capteur MGC (soit directement, soit via le cloud) - pour voir ce que les Glycémies font / ont fait

Lorsque l'appareil a collecté ces données, l'algorithme s'exécute et prend la décision en fonction des paramètres (SI, ratio glucides/insuline , DAI, cible, etc.). Si nécessaire, il émet alors des commandes à la pompe pour modifier le débit d'insuline.

Il recueillera également toutes les informations sur les bolus, la consommation de glucides et les ajustements cibles temporaires de la pompe ou de Nightscout pour les utiliser pour le calcul des taux d'administration d'insuline.

### Comment sait-elle quoi faire?

Le logiciel open source est conçu pour permettre à l'appareil de faire facilement le travail que les gens faisaient (en mode manuel) pour calculer comment la livraison d'insuline doit être ajustée. Il recueille d'abord les données de tous les appareils pris en charge ainsi que sur le cloud, prépare les données et exécute les calculs, fait des prévisions sur les niveaux de glycémie attendus au cours des prochaines heures dans différents scénarios et calcule les ajustements nécessaires pour conserver ou ramener la Glycémie dans la plage cible. Ensuite, il envoie des ajustements nécessaires à la pompe. Puis il lit les données en retour, et refait les calculs encore et encore.

Comme le paramètre d'entrée le plus important est la glycémie provenant du capteur MGC, il est important d'avoir des données MGC de très bonne qualité.

AndroidAPS est conçu pour suivre de façon transparente toutes les données d'entrée qu'il recueille, la recommandation qui en résulte et toute mesure prise. Il est donc facile de répondre à la question à tout moment, "pourquoi est-ce que cela fait X ?" en examinant les journaux.

### Exemples de prise de décision de l'algorithme AndroidAPS :

AndroidAPS utilise les mêmes algorithmes et les mêmes jeux de fonctions que OpenAPS. L'algorithme fait des prédictions multiples (basées sur les paramètres et la situation) représentant différents scénarios de ce qui pourrait arriver à l'avenir. Dans Nightscout, ces lignes sont affichées sous la forme de "lignes violettes". AndroidAPS utilise différentes couleurs pour séparer ces [lignes de prédiction](../Installing-AndroidAPS/Releasenotes#overview-tab). Dans les logs, il décrira laquelle de ces prédictions et quelle période est à l'origine des actions nécessaires.

#### Voici des exemples de lignes de prédiction pourpres et de la façon dont elles peuvent varier :

![Purple prediction line examples](../images/Prediction_lines.jpg)

#### Voici des exemples de différents délais qui influencent les ajustements nécessaires à l'administration d'insuline :

#### Scénario 1 - Zéro Temp pour la sécurité

Dans cet exemple, la Glycémie est en hausse à court terme ; cependant, il est prévu qu'elle sera faible sur une période plus longue. En effet, il est prévu de passer en dessous de la cible *et* sous le seuil de sécurité. Pour la sécurité et prévenir l'hypoglycémie, AndroidAPS émettra une "Zéro-temp" (débit de base temporaire à 0%), jusqu'à ce que la glycémie estimée (dans toute la période projetée) soit au dessus du seuil de sécurité.

![Dosing scenario 1](../images/Dosing_scenario_1.jpg)

#### Scénario 2 - Zéro temp pour la sécurité

Dans cet exemple, on prévoit que la glycémie sera faible à court terme, mais on prévoit qu'elle sera plus tard au-dessus de la cible. Cependant, comme le point bas à court terme est en dessous du seuil de sécurité, AndroidAPS émettra une zéro-temp, jusqu'à ce qu'il n'y ait plus aucun point de la ligne de prédiction qui soit inférieur au seuil.

![Dosing scenario 2](../images/Dosing_scenario_2.jpg)

#### Scénario 3 - Plus d'insuline nécessaire

Dans cet exemple, une prévision à court terme montre une baisse en dessous de la cible. Toutefois, il n'est pas prévu qu'elle soit inférieure au seuil de sécurité. La glycémie finale est au-dessus de la cible. Par conséquent, AndroidAPS va s'abstenir de tout ajout à l'insuline qui contribuerait à court terme à une hypoglycémie (l'ajout d'insuline ferait passer la prédiction en-dessous du seuil de sécurité). Il évaluera plus tard s'il a besoin d'ajouter de l'insuline pour ramener le niveau de la glycémie prévisionnelle plus proche de la cible, une fois qu'il est sûr de pouvoir le faire sans risque. *(En fonction des paramètres, de la quantité et du moment où l'insuline est requise, cette insuline peut être administrée via des basales temporaires ou des SMB (super micro bolus)).*

![Dosing scenario 3](../images/Dosing_scenario_3.jpg)

#### Scénario 4 - Temporaire basse pour la sécurité

Dans cet exemple, AndroidAPS voit que la glycémie est bien au-dessus de la cible. Cependant, en raison de la durée d'action de l'insuline, il y a déjà assez d'insuline dans le corps pour amener la glycémie vers la cible. En fait, on prévoit même que la glycémie sera en dessous de la cible. Par conséquent, AndroidAPS ne fournira pas d'insuline supplémentaire, de sorte qu'elle ne contribuera pas à rallonger une période de glycémie basse. Bien que la glycémie soit élevée/en hausse, un faible débit de basal temporaire sera probable dans ce cas.

![Dosing scenario 4](../images/Dosing_scenario_4.jpg)

### Optimiser les paramètres et faire des modifications

As a clinician who may not have experience with AndroidAPS or DIY closed loops, you may find it challenging to help your patient optimize their settings or make changes to improve their outcomes. We have multiple tools and [guides](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/optimize-your-settings.html) in the community that help patients make small, tested adjustments to improve their settings.

The most important thing for patients to do is make one change at a time, and observe the impact for 2-3 days before choosing to change or modify another setting (unless it’s obviously a bad change that makes things worse, in which case they should revert immediately to the previous setting). The human tendency is to turn all the knobs and change everything at once; but if someone does so, then they may end up with further sub-optimal settings for the future, and find it hard to get back to a known good state.

One of the most powerful tools for making settings changes is an automated calculation tool for basal rates, ISF, and carb ratio. This is called “[Autotune](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html)”. It is designed to be run independently/manually, and allow the data to guide you or your patient in making incremental changes to settings. It is best practice in the community to run (or review) Autotune reports first, prior to attempting to make manual adjustments to settings. With AndroidAPS, Autotune will be run as a "one-off", although there are ongoing efforts to incorporate it directly into AndroidAPS as well. As these parameters are a prerequesite both for standard pump insulin delivery and for closed loop insulin delivery, discussion of the autotune results and adustment of these parameters would be the natural link to the clinician.

Additionally, human behavior (learned from manual diabetes mode) often influences outcomes, even with a DIY closed loop. For example, if BG is predicted to go low and AndroidAPS reduces insulin on the way down, only a small amount of carbs (e.g. 3-4g carbs) may be needed to bring BG up from 70 mg/dl (3.9 mmol). However, in many cases, someone may choose to treat with many more carbs (e.g. sticking to the 15 rule), which will cause a resulting faster spike both from the extra glucose and because insulin had been reduced in the timeframe leading up to the low.

### OpenAPS

**This guide was adopted from [The clinician's guide to OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Resources/clinician-guide-to-OpenAPS.html).** OpenAPS is a system developed to be run on a small portable computer (generally referred to as the "rig"). AndroidAPS uses many of the techniques implemented in OpenAPS, and shares much of the logic and algorithms, which is why this guide is very similar to the original guide. Much of the information about OpenAPS can be easily adapted to AndroidAPS, with the main difference being the hardware platform where each peace of software is run.

### Résumé

This is meant to be a high-level overview of how AndroidAPS works. For more details, ask your patient, reach out to the community, or read the full AndroidAPS documentation available online.

Additional recommended reading:

* The [full AndroidAPS documentation](http://androidaps.readthedocs.io/en/latest/EN/index.html)
* The [OpenAPS Reference Design](https://OpenAPS.org/reference-design/), which explains how OpenAPS is designed for safety: https://openaps.org/reference-design/
* The [full OpenAPS documentation](http://openaps.readthedocs.io/en/latest/index.html) 
  * More [details on OpenAPS calculations](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html#understanding-the-determine-basal-logic)