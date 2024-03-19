# For Clinicians – A General Introduction and Guide to AAPS

This page is intended for clinicians who have expressed interest in open source artificial pancreas technology such as AAPS, or for patients who want to share such information with their clinicians.

This guide has some high-level information about DIY closed looping and specifically how AAPS works. For more details on all of these topics, please view the [comprehensive AAPS documentation online](../index.md). Si vous avez des questions, demandez à votre patient pour plus de détails, ou n'hésitez pas à rejoindre la communauté. (Si vous n'êtes pas sur les réseaux sociaux (par ex. [Twitter](https://twitter.com/kozakmilos) ou Facebook), n'hésitez pas à envoyer un email à developers@AndroidAPS.org). [Vous pouvez également trouver quelques-unes des dernières études & et les données relatives aux résultats ici](https://openaps.org/outcomes/).

## Les étapes pour construire une boucle fermée DIY :

To start using AAPS, the following steps should be taken:

* Trouver une [pompe compatible](../Hardware/pumps.md), un [équipement Android compatible](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing), et une [source MGC compatible](../Configuration/BG-Source.md).
* [Download the AAPS source code and build the software](../Installing-AndroidAPS/Building-APK.md).
* [Configurer le logiciel pour qu'il dialogue avec ses périphériques et définir les préférences et les paramètres de sécurité](index-configuration).

## Comment fonctionne une boucle fermée DIY

En l'absence d'un système à boucle fermée, une personne diabétique recueille les données de sa pompe et de sa MGC, décide de ce qu'il faut faire et agit.

Avec l'administration automatisée de l'insuline, le système fait la même chose: il recueille des données de la pompe, de la CGM, et partout ailleurs où des informations sont renseignées (comme Nightscout), utilise ces informations pour calculer et décider de la quantité d'insuline plus ou moins nécessaire (au-dessus ou en dessous du débit de basal sous-jacent), et utilise des débits de basal temporaires pour effectuer les ajustements nécessaires pour garder ou éventuellement amener les Glycémies dans la plage cible.

If the device running AAPS breaks or goes out of range of the pump, once the latest temporary basal rate ends, the pump falls back to being a standard pump with the preprogrammed basals rates runnning.

## Comment les données sont collectées :

With AAPS, an Android device runs a special app to do the math, the device communicates using Bluetooth with a supported pump. AAPS can communicate with other devices and to the cloud via wifi or mobile data to gather additional information, and to report to the patient, caregivers, and loved ones about what it’s doing and why.

Le périphérique Android doit :

* communiquer avec la pompe et lire l'historique - combien d'insuline a été délivrée
* communiquer avec le capteur MGC (soit directement, soit via le cloud) - pour voir ce que les Glycémies font / ont fait

Lorsque l'appareil a collecté ces données, l'algorithme s'exécute et prend la décision en fonction des paramètres (SI, ratio glucides/insuline , DAI, cible, etc.). Si nécessaire, il émet alors des commandes à la pompe pour modifier le débit d'insuline.

Il recueillera également toutes les informations sur les bolus, la consommation de glucides et les ajustements cibles temporaires de la pompe ou de Nightscout pour les utiliser pour le calcul des taux d'administration d'insuline.

## Comment sait-elle quoi faire?

Le logiciel open source est conçu pour permettre à l'appareil de faire facilement le travail que les gens faisaient (en mode manuel) pour calculer comment la livraison d'insuline doit être ajustée. Il recueille d'abord les données de tous les appareils pris en charge ainsi que sur le cloud, prépare les données et exécute les calculs, fait des prévisions sur les niveaux de glycémie attendus au cours des prochaines heures dans différents scénarios et calcule les ajustements nécessaires pour conserver ou ramener la Glycémie dans la plage cible. Ensuite, il envoie des ajustements nécessaires à la pompe. Puis il lit les données en retour, et refait les calculs encore et encore.

Comme le paramètre d'entrée le plus important est la glycémie provenant du capteur MGC, il est important d'avoir des données MGC de très bonne qualité.

AAPS is designed to transparently track all input data it gathers, the resulting recommendation, and any action taken. Il est donc facile de répondre à la question à tout moment, "pourquoi est-ce que cela fait X ?" en examinant les journaux.

## Examples of AAPS algorithm decision making:

AAPS uses the same core algorithm and feature set as OpenAPS. L'algorithme fait des prédictions multiples (basées sur les paramètres et la situation) représentant différents scénarios de ce qui pourrait arriver à l'avenir. Dans Nightscout, ces lignes sont affichées sous la forme de "lignes violettes". AAPS uses different colors to separate these [prediction lines](Releasenotes-overview-tab). Dans les logs, il décrira laquelle de ces prédictions et quelle période est à l'origine des actions nécessaires.

### Voici des exemples de lignes de prédiction pourpres et de la façon dont elles peuvent varier :

![Exemples de ligne de prédiction violette](../images/Prediction_lines.jpg)

### Voici des exemples de différents délais qui influencent les ajustements nécessaires à l'administration d'insuline :

### Scénario 1 - Zéro Temp pour la sécurité

Dans cet exemple, la Glycémie est en hausse à court terme ; cependant, il est prévu qu'elle sera faible sur une période plus longue. En effet, il est prévu de passer en dessous de la cible *et* sous le seuil de sécurité. For safety to prevent the low, AAPS will issue a zero temp (temporary basal rate at 0%), until the eventualBG (in any time frame) is above threshold.

![Dosage scénario 1](../images/Dosing_scenario_1.jpg)

### Scénario 2 - Zéro temp pour la sécurité

Dans cet exemple, on prévoit que la glycémie sera faible à court terme, mais on prévoit qu'elle sera plus tard au-dessus de la cible. However, because the near-term low is actually below the safety threshold, AAPS will issue a zero temp, until there is no longer any point of the prediction line that is below threshold.

![Dosage scénario 2](../images/Dosing_scenario_2.jpg)

### Scénario 3 - Plus d'insuline nécessaire

Dans cet exemple, une prévision à court terme montre une baisse en dessous de la cible. Toutefois, il n'est pas prévu qu'elle soit inférieure au seuil de sécurité. La glycémie finale est au-dessus de la cible. Therefore, AAPS will restrain from adding any insulin that would contribute to a near-term low (by adding insulin that would make the prediction go below threshold). Il évaluera plus tard s'il a besoin d'ajouter de l'insuline pour ramener le niveau de la glycémie prévisionnelle plus proche de la cible, une fois qu'il est sûr de pouvoir le faire sans risque. *(En fonction des paramètres, de la quantité et du moment où l'insuline est requise, cette insuline peut être administrée via des basales temporaires ou des SMB (super micro bolus)).*

![Dosage scénario 3](../images/Dosing_scenario_3.jpg)

### Scénario 4 - Temporaire basse pour la sécurité

In this example, AAPS sees that BG is spiking well above target. Cependant, en raison de la durée d'action de l'insuline, il y a déjà assez d'insuline dans le corps pour amener la glycémie vers la cible. En fait, on prévoit même que la glycémie sera en dessous de la cible. Therefore, AAPS will not provide extra insulin so it will not contribute to a longer-timeframe low. Bien que la glycémie soit élevée/en hausse, un faible débit de basal temporaire sera probable dans ce cas.

![Dosage scénario 4](../images/Dosing_scenario_4.jpg)

## Optimiser les paramètres et faire des modifications

As a clinician who may not have experience with AAPS or DIY closed loops, you may find it challenging to help your patient optimize their settings or make changes to improve their outcomes. Nous avons plusieurs outils et [des guides](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/optimize-your-settings.html) dans la communauté pour aider les patients à faire de petits ajustements pour améliorer leurs paramètres.

La chose la plus importante pour les patients est de faire un seul changement à la fois, et d'observer l'impact pendant 2-3 jours avant de choisir de changer ou de modifier un autre paramètre (sauf s'il s'agit évidemment d'un mauvais changement qui aggrave les choses, auquel cas ils doivent revenir immédiatement au réglage précédent). La tendance humaine est de tourner tous les boutons et de tout changer en même temps; mais si on le fait, on peut se retrouver avec d'autres paramètres moins optimaux pour l'avenir et il peut être difficile de revenir à un bon état stable connu.

L'un des outils les plus puissants pour faire des changements de paramètres est un outil de calcul automatisé pour les débits de basale, SI et ratio G/I. Cela s'appelle « [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) ». Il est conçu pour être exécuté indépendamment / manuellement et permet de vous guider, vous ou votre patient, dans la modification progressive des paramètres. Il est recommandé dans la communauté d'exécuter (ou de revoir) les rapports Autotune avant de tenter de faire des ajustements manuels des paramètres. With AAPS, Autotune will be run as a "one-off", although there are ongoing efforts to incorporate it directly into AAPS as well. Comme ces paramètres sont un pré-requis à la fois pour l'administration d'insuline par pompe standard et pour l'administration d'insuline en boucle fermée, la discussion des résultats de l'autotune et de l'ajustement de ces paramètres serait le lien naturel avec le professionnel de santé.

En outre, le comportement humain (tiré des enseignements d'une gestion manuelle du diabète) influence souvent les résultats, même avec une boucle fermée DIY. For example, if BG is predicted to go low and AAPS reduces insulin on the way down, only a small amount of carbs (e.g. 3-4g carbs) may be needed to bring BG up from 70 mg/dl (3.9 mmol). Toutefois, dans de nombreux cas, quelqu'un peut choisir de traiter avec beaucoup plus de glucides (par ex. en appliquant la règle des 15g), qui provoqueront un pic de la glycémie lié à la fois aux glucides pris en excédent et parce que l'insuline a été réduite dans la période ou la glycémie était en train de descendre.

## OpenAPS

**Ce guide a été adapté de [The clinician's guide to OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Resources/clinician-guide-to-OpenAPS.html).** OpenAPS est un système développé pour fonctionner sur un tout petit ordinateur portable (généralement appelé le « Rig »). AAPS uses many of the techniques implemented in OpenAPS, and shares much of the logic and algorithms, which is why this guide is very similar to the original guide. Much of the information about OpenAPS can be easily adapted to AAPS, with the main difference being the hardware platform where each piece of software is run.

## Résumé

This is meant to be a high-level overview of how AAPS works. For more details, ask your patient, reach out to the community, or read the full AAPS documentation available online.

Autres lectures recommandées :

* The [full AAPS documentation](../index)
* Le document [OpenAPS Reference Design](https://OpenAPS.org/reference-design/), qui explique comment OpenAPS est conçu pour la sécurité : https://openaps.org/reference-design/
* La [documentation complète OpenAPS](https://openaps.readthedocs.io/en/latest/index.html) 
  * Plus de [détails sur les calculs d'OpenAPS](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html#understanding-the-determine-basal-logic)