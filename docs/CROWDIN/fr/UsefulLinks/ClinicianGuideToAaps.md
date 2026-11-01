# Pour les médecins – Introduction générale et guide d'AAPS

```{note}
Cette page est une introduction générale pour les médecins. Elle a été relue pour la dernière fois en juin 2026. AAPS évolue en permanence. Pour des informations exactes et à jour, consultez toujours la [documentation principale d'AAPS](../index.md).
```

Cette page est destinée aux médecins qui s'intéressent à la technologie open source de pancréas artificiel comme AAPS, ou aux patients qui veulent partager ces informations avec leurs médecins.

Ce guide contient des informations de haut niveau sur la boucle fermée DIY et plus précisément sur la façon dont AAPS fonctionne. Pour plus de détails sur tous ces sujets, veuillez consulter la [documentation complète AAPS en ligne](../index.md). Si vous avez des questions, demandez à votre patient pour plus de détails, ou n'hésitez pas à rejoindre la communauté. (Si vous n'êtes pas sur les réseaux sociaux (par ex. [Twitter](https://twitter.com/kozakmilos) ou Facebook), vous pouvez écrire à developers@aaps.app). [Vous pouvez aussi trouver ici des études récentes et des données sur les résultats](https://openaps.org/outcomes/).

## Les étapes pour construire une boucle fermée DIY :

Pour commencer à utiliser AAPS, les étapes suivantes doivent être faites :

* Trouver une [pompe compatible](../Getting-Started/CompatiblePumps.md), un [appareil Android compatible](../Getting-Started/Phones.md) et une [source MGC compatible](../Getting-Started/CompatiblesCgms.md).
* [Télécharger le code source d'AAPS et compiler le logiciel](../SettingUpAaps/BuildingAaps.md).
* [Configurer le logiciel pour qu'il communique avec ses dispositifs pour le diabète, et définir les paramètres et les préférences de sécurité](../SettingUpAaps/SetupWizard.md).

## Comment fonctionne une boucle fermée DIY

En l'absence d'un système à boucle fermée, une personne diabétique recueille les données de sa pompe et de sa MGC, décide de ce qu'il faut faire et agit.

Avec l'administration automatisée d'insuline, le système fait la même chose : il recueille les données de la pompe, de la MGC et de tout autre endroit où des informations sont enregistrées (comme Nightscout). Il utilise ces informations pour faire les calculs et décider de combien d'insuline en plus ou en moins il faut (au-dessus ou en dessous du débit basal de base). Il utilise des débits de basal temporaires pour faire les ajustements nécessaires, afin de garder la glycémie dans la plage cible ou de l'y ramener.

If the device running AAPS breaks or goes out of range of the pump, once the latest temporary basal rate ends, the pump falls back to being a standard pump with the preprogrammed basal rates running.

## Comment les données sont collectées :

Avec AAPS, un appareil Android exécute une application spéciale pour faire le calcul, l'appareil communique en Bluetooth avec une pompe prise en charge. AAPS peut communiquer avec d'autres appareils et avec le cloud par Wi-Fi ou données mobiles. Il peut ainsi recueillir d'autres informations, et informer le patient, les aidants et les proches de ce qu'il fait et pourquoi.

Le périphérique Android doit :

* communiquer avec la pompe et lire l'historique - combien d'insuline a été délivrée
* communiquer avec la MGC (soit directement, soit via le cloud) - pour voir ce que fait et ce qu'a fait la glycémie

Lorsque l'appareil a collecté ces données, l'algorithme s'exécute et prend les décisions en fonction des paramètres (SI, ratio G/I, DAI, cible, etc.). Si nécessaire, il émet alors des commandes à la pompe pour modifier le débit d'insuline.

Il recueille aussi toutes les informations sur les bolus, les glucides consommés et les cibles temporaires, depuis la pompe ou depuis Nightscout, et les utilise pour calculer les débits d'administration d'insuline.

## Comment le système sait-il quoi faire ?

Le logiciel open source est conçu pour que l'appareil fasse facilement le travail que les personnes faisaient avant (en mode manuel) pour calculer comment ajuster l'administration d'insuline. It first collects data from all the supporting devices and from the cloud, prepares the data and runs the calculations, makes predictions of what BG levels are expected to do during the next hours in different scenarios, and calculates the needed adjustments to keep or bring BG back into target range. Ensuite, il envoie des ajustements nécessaires à la pompe. Puis il lit les données en retour, et refait les calculs encore et encore.

Comme le paramètre d'entrée le plus important est la glycémie provenant du capteur MGC, il est important d'avoir des données MGC de très bonne qualité.

AAPS est conçu pour suivre de façon transparente toutes les données d'entrée qu'il recueille, la recommandation qui en résulte et toute mesure prise. Il est donc facile de répondre à la question à tout moment, "pourquoi est-ce que cela fait X ?" en examinant les journaux.

## Exemples de prise de décision de l'algorithme AAPS :

AAPS utilise les mêmes algorithmes et les mêmes jeux de fonctions que OpenAPS. L'algorithme fait des prédictions multiples (basées sur les paramètres et la situation) représentant différents scénarios de ce qui pourrait arriver à l'avenir. Dans Nightscout, ces lignes sont affichées sous la forme de "lignes violettes". AAPS utilise différentes couleurs pour distinguer ces [lignes de prédiction](#aaps-screens-prediction-lines). Dans les logs, il décrira laquelle de ces prédictions et quelle période est à l'origine des actions nécessaires.

### Voici des exemples de lignes de prédiction violettes et de leurs différences possibles :

![Exemples de ligne de prédiction violette](../images/Prediction_lines.jpg)

(clinicianguide-dosing-scenarios)=

### Voici des exemples de différentes périodes qui influencent les ajustements nécessaires de l'administration d'insuline :

### Scénario 1 - Basal temporaire à zéro pour la sécurité

Dans cet exemple, la glycémie monte à court terme ; cependant, elle devrait être basse sur une période plus longue. En effet, elle devrait passer sous la cible *et* sous le seuil de sécurité. Pour la sécurité, et pour éviter l'hypoglycémie, AAPS envoie un basal temporaire à zéro (débit de basal temporaire à 0 %), jusqu'à ce que la glycémie finale (eventualBG, sur toute période) soit au-dessus du seuil.

![Scénario de dose 1](../images/Dosing_scenario_1.jpg)

### Scénario 2 - Basal temporaire à zéro pour la sécurité

Dans cet exemple, on prévoit que la glycémie sera faible à court terme, mais on prévoit qu'elle sera plus tard au-dessus de la cible. Cependant, comme le point bas à court terme est en dessous du seuil de sécurité, AAPS envoie un basal temporaire à zéro, jusqu'à ce qu'aucun point de la ligne de prédiction ne soit plus sous le seuil.

![Scénario de dose 2](../images/Dosing_scenario_2.jpg)

### Scénario 3 - Plus d'insuline nécessaire

Dans cet exemple, une prévision à court terme montre une baisse en dessous de la cible. Toutefois, il n'est pas prévu qu'elle soit inférieure au seuil de sécurité. La glycémie finale est au-dessus de la cible. Therefore, AAPS will refrain from adding any insulin that would contribute to a near-term low (by adding insulin that would make the prediction go below threshold). Il évaluera ensuite l'ajout d'insuline pour ramener jusqu'à la cible le point le plus bas de la glycémie finale prévue, dès que cela sera sans danger. *(Depending on settings and the amount and timing of insulin required, this insulin may be delivered via temp basals or SMBs (super micro boluses)).*

![Scénario de dose 3](../images/Dosing_scenario_3.jpg)

### Scénario 4 - Basal temporaire réduit pour la sécurité

Dans cet exemple, AAPS voit que la glycémie est bien au-dessus de la cible. Cependant, en raison de la durée d'action de l'insuline, il y a déjà assez d'insuline dans le corps pour amener la glycémie vers la cible. En fait, on prévoit même que la glycémie sera en dessous de la cible. Par conséquent, AAPS ne donnera pas d'insuline supplémentaire, pour ne pas contribuer à une hypoglycémie sur une période plus longue. Bien que la glycémie soit élevée/en hausse, un faible débit de basal temporaire sera probable dans ce cas.

![Scénario de dose 4](../images/Dosing_scenario_4.jpg)

## Optimiser les paramètres et faire des modifications

En tant que professionnel de santé qui n'a pas d'expérience avec AAPS ou les boucles fermées DIY, vous pouvez trouver qu'il est difficile d'aider votre patient à optimiser ses paramètres ou de faire des changements pour améliorer ses résultats. Il existe dans la communauté plusieurs outils et [guides](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/optimize-your-settings.html) qui aident les patients à faire de petits ajustements testés pour améliorer leurs paramètres.

La chose la plus importante pour les patients est de faire un seul changement à la fois, et d'observer l'impact pendant 2-3 jours avant de choisir de changer ou de modifier un autre paramètre (sauf s'il s'agit évidemment d'un mauvais changement qui aggrave les choses, auquel cas ils doivent revenir immédiatement au réglage précédent). La tendance humaine est de tourner tous les boutons et de tout changer en même temps ; mais si on le fait, on peut se retrouver avec d'autres paramètres moins optimaux pour l'avenir et il peut être difficile de revenir à un bon état stable connu.

L'un des outils les plus puissants pour faire des changements de paramètres est un outil de calcul automatisé pour les débits de basale, SI et ratio G/I. Cet outil s'appelle « [Autotune](#autotune-how-autotune-calculates-adjustments) ». It is designed to allow the data to guide you or your patient in making incremental changes to settings. Il est recommandé dans la communauté d'exécuter (ou de revoir) les rapports Autotune avant de tenter de faire des ajustements manuels des paramètres. Autotune est intégré à AAPS sous forme de plugin (**Configuration** → **Général** → **Autotune**) ; voir [Autotune](../AdvancedOptions/Autotune.md). Il peut être lancé à la demande ou automatiquement. Ces paramètres sont nécessaires à la fois pour l'administration d'insuline par pompe standard et en boucle fermée. La discussion des résultats d'Autotune et l'ajustement de ces paramètres sont donc le lien naturel avec le médecin.

En outre, le comportement humain (tiré des enseignements d'une gestion manuelle du diabète) influence souvent les résultats, même avec une boucle fermée DIY. Par exemple, si la glycémie doit baisser et qu'AAPS réduit l'insuline pendant la descente, une petite quantité de glucides (par ex. 3-4 g) peut suffire pour remonter la glycémie à partir de 70 mg/dl (3,9 mmol/l). Toutefois, dans de nombreux cas, une personne peut choisir de se resucrer avec beaucoup plus de glucides (par ex. en suivant la règle des 15 g). Cela provoque un pic plus rapide, à cause du glucose en trop et parce que l'insuline avait été réduite pendant la période qui a précédé l'hypoglycémie.

## OpenAPS

**This guide was adapted from [The clinician's guide to OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Resources/clinician-guide-to-OpenAPS.html).** OpenAPS is a system developed to be run on a small portable computer (generally referred to as the "rig"). AAPS utilise beaucoup des techniques mises en œuvre dans OpenAPS, et partage une grande partie de la logique et des algorithmes, c'est pourquoi ce guide est très similaire au guide original. Une grande partie des informations concernant OpenAPS peuvent être transposées à AAPS, la principale différence étant la plate-forme matérielle sur laquelle est exécuté le logiciel.

## Résumé

Il s'agit d'un aperçu macroscopique de la façon dont AAPS fonctionne. Pour plus de détails, demandez à votre patient, à la communauté, ou lisez la documentation complète de AAPS disponible en ligne.

Autres lectures recommandées :

* La [documentation complète d'AAPS](../index.md)
* Le document [OpenAPS Reference Design](https://OpenAPS.org/reference-design/), qui explique comment OpenAPS est conçu pour la sécurité : https://openaps.org/reference-design/
* La [documentation complète OpenAPS](https://openaps.readthedocs.io/en/latest/index.html) 
  * Voir [comment AAPS transforme les prédictions en décision de dose](#aaps-screens-how-predictions-become-a-dosing-decision) dans cette documentation, ou la [documentation determine-basal d'OpenAPS](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html#understanding-the-determine-basal-logic) pour tous les détails techniques de l'algorithme