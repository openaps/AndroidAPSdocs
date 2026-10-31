# Comment utiliser le plugin Autotune

Le plugin Autotune est une implémentation de l'algorithme autotune OpenAPS dans AAPS. Il analyse votre historique AAPS récent pour proposer des ajustements de vos débits de basal, de votre SI et de votre G/I.

Le plugin Autotune est disponible dans les versions publiées d'AAPS depuis la [3.4](#version3400), mais il est masqué par défaut.

(autotune-how-autotune-calculates-adjustments)=
## Comment Autotune calcule les ajustements

Autotune regarde votre historique AAPS récent (valeurs MGC, bolus, glucides et débits de basal temporaires) et cherche où votre **Profil** (débits de basal, SI, G/I) ne correspond pas bien à ce qui est vraiment arrivé à votre glycémie.

Pour chaque point de données de 5 minutes, il compare la **variation réelle de votre glycémie** à la variation prévue par votre profil, et range l'écart obtenu dans l'une de ces trois catégories :

* les écarts arrivés sans glucides actifs et sans activité de l'insuline (utilisés pour ajuster les **débits de basal**, heure par heure),
* les écarts arrivés après un bolus ou une correction sans glucides (utilisés pour ajuster la **SI**), ou
* les écarts arrivés pendant l'absorption de glucides (utilisés pour ajuster le **G/I**).

Il regarde ensuite la répartition des écarts dans chaque catégorie (avec des percentiles plutôt qu'une simple moyenne, pour que quelques données bruitées ne faussent pas le résultat) et propose une nouvelle valeur pour cette heure ou ce paramètre.

Pour éviter qu'une seule exécution corrige trop, chaque exécution d'Autotune ne déplace une valeur que d'une partie du chemin vers ce que suggèrent les données : au maximum 10 % pour la SI et le G/I, et au maximum 20 % pour chaque segment de basal. La dérive totale est aussi limitée par les paramètres **Autosens max** / **Autosens min** (voir [Autres paramètres](#autotune-other-settings) ci-dessous), les mêmes limites que pour Autosens. C'est pourquoi Autotune doit être exécuté plusieurs fois (jour après jour, ou chaque nuit) au lieu de faire confiance à une seule exécution : les résultats doivent converger petit à petit, et un grand saut lors d'une exécution est un signe qu'il faut vérifier vos données (glucides oubliés, mauvaise journée de capteur, _etc._), pas qu'il faut lui faire confiance aveuglément.

Autotune peut être exécuté de trois façons : manuellement, une seule fois, depuis le plugin (comme décrit ci-dessous), automatiquement chaque nuit avec une [règle d'automatisation](#autotune-run-autotune-with-an-automation-rule), ou, complètement en dehors d'AAPS, comme outil en ligne de commande sur des données exportées. Certains guides de la communauté décrivent cette dernière méthode pour l'utiliser sans téléphone qui fait tourner AAPS.

*Pour l'algorithme oref0 utilisé, avec tous les détails mathématiques, voir la [documentation Autotune d'OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html).*

## Afficher le plugin Autotune

Créez un fichier vide nommé `enable_autotune` dans le sous-dossier `extra` du [Répertoire AAPS](#preferences-maintenance-settings) de votre téléphone.

***REMARQUE : vérifiez dans les paramètres AAPS où se trouve votre Répertoire AAPS, et que vous avez mis le fichier dans le bon dossier. Plusieurs utilisateurs ont mis le fichier dans le mauvais dossier.***

![Activer Autotune](../images/Autotune/Autotune_0.png)

Redémarrez **AAPS**. Ouvrez ensuite le **menu** (☰), choisissez **Configuration**, puis la catégorie **Général**, et cochez **Autotune**. La carte affiche alors **Paramètres** et **Ouvrir le plugin** :

![Autotune coché dans Configuration > Général](../images/v4/Configuration/configuration_general_autotune.png)

## Interface utilisateur Autotune

Appuyez sur **Ouvrir le plugin** sur la carte **Autotune** pour ouvrir l'écran Autotune :

![Écran Autotune avec le profil, le nombre de jours de données et un avertissement sur le profil sélectionné](../images/Autotune/Autotune_1b.png)

- Vous pouvez sélectionner le profil d'entrée que vous voulez régler dans le menu déroulant Profil (par défaut, votre profil actif actuel est sélectionné)
  - Remarque : chaque fois que vous choisissez un nouveau profil, les résultats précédents sont supprimés et le **Nombre de jours de données** reprend sa valeur par défaut
- Ensuite, le **Nombre de jours de données** (appelé **Nb jours** dans les anciennes versions) sert à choisir le nombre de jours utilisés dans le calcul pour ajuster votre profil. La valeur minimale est de 1 jour et la valeur maximale de 30 jours. Ce nombre ne devrait pas être trop petit pour obtenir des résultats itératifs et lisses corrects (au-dessus de 7 jours pour chaque calcul)
  - Remarque : chaque fois que vous modifiez le **Nombre de jours de données**, les résultats précédents sont supprimés
- Dernière exécution est un lien qui récupère votre dernier calcul valide. Si vous n'avez pas lancé Autotune le jour en cours, ou si les résultats précédents ont été supprimés avec une modification du paramètre de calcul ci-dessus, vous pouvez alors récupérer les paramètres et les résultats de la dernière exécution réussie.
- L'avertissement vous montre par exemple des informations sur le profil sélectionné (si vous avez plusieurs valeurs G/I ou plusieurs valeurs SI)
  - Remarque : Le calcul Autotune fonctionne avec une seule valeur de G/I et une seule valeur de SI. Il n'existe actuellement aucun algorithme Autotune pour ajuster un G/I circadien ou une SI circadienne. Si votre profil d'entrée a plusieurs valeurs, vous pouvez voir dans la section Avertissement la valeur moyenne prise en compte pour calculer votre profil.
- Le bouton Vérifier profil d'entrée ouvre l'afficheur de profil pour vous permettre de vérifier rapidement votre profil (unités, G/I, SI, basal et cible)
  - Remarque : Autotune ne réglera que le G/I (valeur unique), la SI (valeur unique) et les débits de basal (avec variation circadienne). Les unités et la cible ne sont pas modifiées dans le profil de sortie.

- "Lancer Autotune" lance le calcul Autotune avec le profil sélectionné et le nombre de jours de données sélectionné
  - Remarque : Le calcul Autotune peut prendre beaucoup de temps. Une fois lancé, vous pouvez passer à une autre vue (écran d'accueil ...) et revenir plus tard dans le plugin Autotune pour voir les résultats

  ![Démarrage Run Autotune](../images/Autotune/Autotune_2b.png)

- Ensuite, au cours de l'exécution vous verrez les résultats intermédiaires ci-dessous

  - Remarque : pendant l'exécution, les paramètres sont verrouillés. Vous ne pouvez donc plus modifier le profil d'entrée sélectionné ni le nombre de jours. Vous devrez attendre la fin du calcul actuel si vous voulez lancer un nouveau calcul avec d'autres paramètres.

  ![Autotune lors de l'exécution](../images/Autotune/Autotune_3b.png)

- Quand le calcul Autotune est terminé, vous voyez le résultat (profil Tuned) et quatre boutons en dessous.

  ![Résultat Autotune](../images/Autotune/Autotune_4b.png)

- Il est important de toujours comparer le profil d'entrée (colonne "Profil"), le profil de sortie (colonne "Tuned") et le pourcentage de variation pour chaque valeur (colonne "%").

- Pour les débits de basal, vous avez aussi le nombre de "jours manquants". Il vous manque des jours quand Autotune n'a pas assez de données catégorisées comme « Basal » pour calculer le débit de basal pour cette période (par exemple après chaque repas lorsque vous avez une absorption de glucides). Ce nombre doit être aussi bas que possible, surtout lors de périodes où la basale est prépondérante (par exemple pendant la nuit ou à la fin de l'après-midi)

- Le bouton « Comparer les profils » ouvre la vue Comparateur de profil. Le profil d'entrée est en bleu, et le profil de sortie (nommé "Tuned") est en rouge.

  - Remarque : dans l'exemple ci-dessous, le profil d'entrée a une variation circadienne pour le G/I et la SI, mais le profil calculé en sortie a une seule valeur. Si pour vous il est important d'obtenir un profil de sortie circadien, voir [Profil avec G/I ou SI Circadiens](#autotune-circadian-ic-or-isf-profile) ci-dessous.

  ![Comparer les profils Autotune](../images/Autotune/Autotune_5.png)

- Si vous faites confiance aux résultats (faible pourcentage de variation entre le profil d'entrée et le profil de sortie), vous pouvez cliquer sur le bouton "Activer le profil" puis cliquer sur OK pour valider.

  - Activer le profil Tuned crée automatiquement un nouveau profil "Tuned" dans votre liste de profils (**Gestion → Profil**).
  - Si vous avez déjà un profil nommé "Tuned" dans **Gestion → Profil**, ce profil est mis à jour avec le profil calculé par Autotune avant l'activation

  ![Activer Profil Autotune](../images/Autotune/Autotune_6.png)

- Si vous pensez que le profil Tuned doit être ajusté (par exemple si vous pensez que certaines variations sont trop importantes), vous pouvez cliquer sur le bouton "Copier vers Profil Local"

  - Un nouveau profil avec le préfixe "Tuned", la date et l'heure de l'exécution est créé dans **Gestion → Profil**

  ![Copier vers Profil Local](../images/Autotune/Autotune_7.png)

- Vous pouvez ensuite modifier le profil Tuned : ouvrez **Gestion** > **Profil**, faites glisser jusqu'à la carte nommée "Tuned" avec la date et l'heure de l'exécution, et appuyez sur le bouton **Modifier** (crayon)

  - les valeurs du profil sont arrondies dans l'interface utilisateur selon les capacités de votre pompe

  ![Mise à jour du profil local](../images/Autotune/Autotune_8.png)

- Si vous souhaitez remplacer votre profil d'entrée par le résultat Autotune, cliquez sur le bouton "Mettre à jour profil d'entrée" et validez la fenêtre pop-up avec OK

  - Remarque : si vous cliquez sur "Activer le profil" après "Mettre à jour profil d'entrée", vous activez votre profil mis à jour et pas le profil "Tuned" par défaut.

  ![Mettre à jour le profil d'entrée](../images/Autotune/Autotune_9.png)

- Si vous avez mis à jour votre profil d'entrée, alors le bouton "Mettre à jour profil d'entrée" est remplacé par le bouton "Réinitialiser profil d'entrée" (voir capture d'écran ci-dessous). Vous pouvez ainsi voir tout de suite si votre profil d'entrée actuel dans **Gestion → Profil** contient déjà le résultat de la dernière exécution ou non. Avec ce bouton, vous pouvez aussi récupérer votre profil d'entrée sans le résultat Autotune

  ![Mettre à jour le profil d'entrée](../images/Autotune/Autotune_10.png)



## Paramètres Autotune

(autotune-plugin-settings)=

### Paramètres du plugin Autotune

  ![Paramètres Autotune dans AAPS 4](../images/preferences/settings_autotune.png)

```{admonition} Only DEV
:class: note
La fonction **Changement de profil automatique** est disponible seulement en mode Dev/Ingénierie.
```

- **Changement de profil automatique** (désactivé par défaut) : voir [Exécuter Autotune avec une règle d'automatisation](#autotune-run-autotune-with-an-automation-rule) ci-dessous. Si vous activez ce paramètre, le profil d'entrée sera automatiquement mis à jour par le profil Tuned, et il sera activé.
  - **Soyez prudent, vous devez prendre confiance en vérifiant pendant plusieurs jours qu'après une mise à jour et l'activation du profil Tuned sans aucune modification, cela améliore effectivement votre boucle**

- **Catégoriser UAM en tant que Basal** (désactivé par défaut) : ce paramètre est pour les utilisateurs qui utilisent AndroidAPS sans entrer de glucides (Full UAM). Il empêchera (quand désactivé) de catégoriser les RNS en tant que basal.
  - Remarque : si vous avez au moins une heure d'absorption de glucides détectée pendant une journée, alors toutes les données catégorisées comme "RNS" seront catégorisées en tant que basal, quel que soit ce paramètre (Activé ou Désactivé)
- **Nombre de jours par défaut** (5 par défaut) : vous pouvez définir la valeur par défaut avec ce paramètre. Chaque fois que vous choisissez un nouveau profil dans le plugin Autotune, le **Nombre de jours de données** est remplacé par cette valeur par défaut
- **Utiliser les G/I et SI circadiens** (désactivé par défaut) : voir [Profil avec G/I ou SI Circadiens](#autotune-circadian-ic-or-isf-profile) ci-dessous.

(autotune-other-settings)=
### Autres paramètres

- Autotune utilise également les ratio Max et Min Autosens pour limiter la variation. Vous pouvez voir et ajuster ces valeurs dans [**Paramètres** > **Paramètres d’absorption** > **Paramètres Avancés**](../SettingUpAaps/Preferences.md) (**Autosens max** et **Autosens min**).

  ![Autosens max et Autosens min dans les paramètres d'absorption avancés](../images/preferences/settings_absorption_advanced.png)



## Fonctionnalité avancée

(autotune-circadian-ic-or-isf-profile)=

### Profil avec G/I ou SI Circadiens

- Si votre G/I et/ou votre SI varient beaucoup dans votre profil, et que vous avez entièrement confiance dans vos horaires et variations circadiens, vous pouvez activer **Utiliser les G/I et SI circadiens** (appelé "Apply average result in circadian IC/ISF" dans les anciennes versions)

  - Notez que le calcul Autotune sera toujours fait avec une seule valeur, et que la variation circadienne ne sera pas ajustée par Autotune. Ce paramètre n'applique que la variation moyenne calculée pour le G/I et/ou la SI sur vos valeurs circadiennes

- Vous pouvez voir dans la copie d'écran ci-dessous le profil Tuned avec ce paramètre desactivé (à gauche) et activé (à droite)

  ![Autotune écran par défaut](../images/Autotune/Autotune_13.png)



### Ajuster des jours spécifiques de la semaine

- Si vous appuyez sur l'icône **œil** à droite du champ **Nombre de jours de données**, vous voyez la sélection des jours. Vous pouvez spécifier quels jours de la semaine doivent être inclus dans le calcul Autotune (en capture d'écran ci-dessous, vous pouvez voir un exemple pour les "jours de travail" avec le samedi et le dimanche enlevé du calcul Autotune)
  - Si le nombre de jours inclus dans le calcul Autotune est plus petit que le **Nombre de jours de données**, vous voyez combien de jours seront inclus à droite du sélecteur de jours (10 jours dans l'exemple ci-dessous)
  - Ce paramètre donne de bons résultats seulement si le nombre de jours restants n'est pas trop petit (par exemple si vous ajustez un profil précis pour le week-end avec seulement le dimanche et le samedi sélectionnés, vous devez régler le **Nombre de jours de données** sur au moins 21 ou 28 pour avoir 6 ou 8 jours inclus dans le calcul Autotune)

  ![Autotune écran par défaut](../images/Autotune/Autotune_14b.png)

- Pendant le calcul Autotune, vous pouvez voir la progression des calculs ("Résultat partiel jour 1 / 4 calculé" dans l'exemple ci-dessous, avec le samedi et le dimanche exclus)

  ![Autotune écran par défaut](../images/Autotune/Autotune_15b.png)



(autotune-run-autotune-with-an-automation-rule)=

## Exécuter Autotune avec une règle d'automatisation

```{admonition} Only DEV
:class: note
La fonction **Changement de profil automatique** est disponible seulement en mode Dev/Ingénierie.
```

La première étape est de définir le déclencheur correct pour une règle d'automatisation avec Autotune :

Remarque : pour plus d'informations sur la façon de définir une règle d'automatisation, voir [ici](../DailyLifeWithAaps/Automations.md).

- Vous devez choisir le déclencheur Période répétitive : il ne faut exécuter Autotune qu'une seule fois par jour au maximum, et Autotune est conçu pour être exécuté tous les jours (à chaque nouvelle exécution, la période de calcul est décalée d'un jour et les modifications du profil devraient vite devenir très faibles)

  ![Autotune écran par défaut](../images/Autotune/Autotune_16.png)

- Il est préférable au début d'exécuter Autotune pendant la journée pour pouvoir vérifier les résultats. Si vous voulez exécuter Autotune pendant la nuit, vous devez choisir dans le déclencheur 4 h du matin ou plus tard pour inclure le jour en cours dans le calcul Autotune suivant.

  ![Autotune écran par défaut](../images/Autotune/Autotune_17.png)

- Vous pouvez ensuite choisir l'action **Profil Autotune** (dans le groupe **Boucle & insuline**)

  ![Autotune écran par défaut](../images/Autotune/Autotune_18.png)

- Vous pouvez ensuite ajuster les paramètres de l'action pour votre exécution. Dans une nouvelle action, **Sélectionnez le profil à optimiser** affiche le premier profil de votre liste de profils locaux, le champ **Nb jours** est vide et tous les jours sont sélectionnés. Choisissez le profil à ajuster et entrez le nombre de jours dans **Nb jours** (1 à 30).

  ![Autotune écran par défaut](../images/Autotune/Autotune_19b.png)

- Après quelques jours, si vous avez entièrement confiance dans les résultats Autotune et que le pourcentage de modification est faible, vous pouvez activer le paramètre "**Changement de profil automatique**" dans les [Paramètres Autotune](#autotune-plugin-settings) pour mettre à jour et activer automatiquement le profil ajusté après le calcul.

Remarque : si vous voulez ajuster automatiquement des profils pour des jours précis de la semaine (par exemple un profil pour les "jours de week-end" et un autre pour les "jours de travail"), créez une règle pour chaque profil et choisissez les mêmes jours dans le déclencheur et dans l'action Autotune. Le nombre de jours doit être assez élevé pour être sûr que le calcul sera fait avec au moins 6 ou 8 jours, et n'oubliez pas de choisir une heure après 4 h du matin dans le déclencheur...

- Voici ci-dessous un exemple de règle qui s'exécute chaque jour de travail (du lundi au vendredi) à 04:00 et ajuste le profil "Normal" avec **Nb jours** à 14, jours de travail seulement (donc seulement 10 jours sont inclus dans le calcul Autotune).

  ![Autotune écran par défaut](../images/Autotune/Autotune_20b.png)



## Trucs et astuces

Autotune fonctionne avec les informations existantes dans votre base de données, donc si vous venez d'installer AAPS sur un nouveau téléphone, vous devrez attendre plusieurs jours avant de pouvoir lancer Autotune avec suffisamment de jours pour obtenir des résultats pertinents.

Autotune n'est qu'une aide, il est important de vérifier régulièrement si vous êtes d'accord avec le profil calculé. Si vous avez le moindre doute, modifiez les paramètres Autotune (par exemple le nombre de jours) ou copiez les résultats dans le profil local et ajustez le profil avant de l'utiliser.

Utilisez toujours Autotune plusieurs jours manuellement pour vérifier les résultats avant de les appliquer. Et ce n'est que lorsque vous faites entièrement confiance aux résultats Autotune et quand la variation devient très faible entre le profil précédent et le profil calculé que vous pouvez commencer à utiliser l'automatisation (jamais avant)

- Autotune peut très bien fonctionner pour certains utilisateurs et pas du tout pour d'autres, donc **Si vous ne faites pas confiance au résultat Autotune, ne l'utilisez pas**

Il est aussi important d'analyser les résultats Autotune pour comprendre (ou essayer de comprendre) pourquoi Autotune propose ces modifications

- vous pouvez avoir une augmentation ou une diminution de la globalité du profil (par exemple une augmentation du débit de basal total associé à la diminution des valeurs de la SI et du G/I). il pourrait être associé à plusieurs jours successifs avec correction autosens supérieure à 100% (plus d'agressivité requise) ou inférieure à 100% (vous êtes plus sensible)
- Parfois, Autotune propose un équilibre différent entre les taux de basal et la SI et G/I (ex basal inférieur et SI / G/I plus agressifs)

Nous recommandons de ne pas utiliser Autotune dans les cas suivants :

- Vous n'entrez pas tous vos glucides
  - Si vous n'entrez pas de correction de glucides pour une hypoglycémie, Autotune verra une augmentation imprévue de votre glycémie et augmentera vos taux de basal les 4 heures précédentes, cela pourrait être le contraire de ce que vous avez besoin pour éviter une hypoglycémie, en particulier si c'est au milieu de la nuit. C'est pourquoi il est important d'entrer tous les glucides, en particulier pour la correction des hypo.
- Vous avez beaucoup de périodes avec des RNS détectés pendant la journée.
  - Avez-vous entré tous vos glucides et les avez vous correctement estimés ?
  - Toutes les périodes RNS (sauf si vous n'entrez aucun glucide pendant une journée et que le paramètre Catégoriser UAM en tant que Basal est désactivé) seront catégorisées en basal. Cela peut beaucoup augmenter votre basal (beaucoup plus que nécessaire).

- L'absorption de vos glucides est très lente : si la plupart de vos absorptions de glucides sont calculées avec le paramètre min_5m_carbimpact (vous pouvez voir ces périodes avec un petit point orange en haut de la courbe des GA), le calcul des GA peut être faux et donner de mauvais résultats.
  - Quand vous faites du sport, vous êtes généralement plus sensible et votre glycémie ne monte pas beaucoup, donc pendant ou après un exercice, il est habituel de voir quelques périodes avec des glucides lents. Mais si vous avez trop souvent une absorption lente inattendue des glucides, vous avez peut-être besoin d'un ajustement de profil (valeur plus élevée de G/I), ou votre min_5m_carbimpact est un peu trop élevé.
- Vous avez de "très mauvais jours", par exemple bloqué plusieurs heures en hyperglycémie avec une énorme quantité d'insuline pour revenir dans la cible, ou de longues périodes de glycémies fausses après un changement de capteur. Si pendant les dernières semaines vous avez seulement un ou deux "mauvais jours", vous pouvez désactiver manuellement ces jours dans le calcul Autotune pour les exclure du calcul, et à nouveau **vérifiez soigneusement si vous pouvez faire confiance aux résultats**
- Si le pourcentage de modification est trop important
  - Vous pouvez essayer d'augmenter le nombre de jours pour obtenir des résultats plus lisses
