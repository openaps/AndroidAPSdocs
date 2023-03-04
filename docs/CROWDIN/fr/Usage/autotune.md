# Comment utiliser le plugin Autotune (dev uniquement)

La documentation sur l'algorythme Autotune peut être trouvée dans [la documentation OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html).

Le plugin Autotune est une implémentation de l'algorythme autotune OpenAPS dans AAPS.

**Actuellement, le plugin Autotune n'est disponible que dans la branche dev et avec le mode Ingénierie.**

## Interface utilisateur Autotune

![Autotune écran par défaut](../images/Autotune/Autotune_1.png)

- Vous pouvez sélectionner le profil d'entrée que vous voulez régler dans le menu déroulant Profil (par défaut, votre profil actif actuel est sélectionné)
  - Remarque : chaque fois que vous sélectionnez un nouveau profil, les résultats précédents seront supprimés et le paramètre Nb jours sera défini à la valeur par défaut
- Ensuite, Nb jours permet de choisir le nombre de jours à utiliser dans le calcul pour calculer votre profil. La valeur minimale est de 1 jour et la valeur maximale de 30 jours. Ce nombre ne devrait pas être trop petit pour obtenir des résultats itératifs et lisses corrects (au-dessus de 7 jours pour chaque calcul)
  - Remarque : chaque fois que vous changez le paramètre Nb jours, les résultats précédents seront supprimés
- Last Run is a link that recover your latest valid calculation. Si vous n'avez pas lancé Autotune le jour en cours, ou si les résultats précédents ont été supprimés avec une modification du paramètre de calcul ci-dessus, vous pouvez alors récupérer les paramètres et les résultats de la dernière exécution réussie.
- L'avertissement vous montre par exemple des informations sur le profil sélectionné (si vous avez plusieurs valeurs G/I ou plusieurs valeurs SI)
  - Remarque : Le calcul Autotune fonctionne avec une seule valeur de G/I et une seule valeur de SI. Il n'existe actuellement aucun algorythme Autotune pour ajuster un G/I circadien ou une SI circadienne. Si votre profil d'entrée a plusieurs valeurs, vous pouvez voir dans la section Avertissement la valeur moyenne prise en compte pour calculer votre profil.
- Le bouton Vérifiez Profil d'entrée permet d'ouvrir la Visionneuse de Profil pour vous permettre de faire une vérification rapide de votre profil (unités, DAI, G/I, SI, basal et cible)
  - Remarque : Autotune ne réglera que le G/I (valeur unique), la SI (valeur unique) et les débits de basal (avec variation circadienne). Les unités, la DAI et les cibles resteront inchangées dans le profil de sortie.

- "Lancer Autotune" exécutera le calcul Autotune avec le profil et le nombre de jours sélectionnés
  - Remarque : Le calcul Autotune peut prendre beaucoup de temps. Une fois lancé, vous pouvez passer à une autre vue (écran d'accueil ...) et revenir plus tard dans le plugin Autotune pour voir les résultats

![Démarrage Run Autotune](../images/Autotune/Autotune_2.png)

- Ensuite, au cours de l'exécution vous verrez les résultats intermédiaires ci-dessous

  - Remarque : Pendant l'exécution, les paramètres sont verrouillés, vous ne pouvez donc plus modifier le profil d'entrée sélectionné ou le nombre de jour. Vous devrez attendre la fin du calcul actuel si vous voulez lancer un nouveau calcul avec d'autres paramètres.

  ![Autotune lors de l'exécution](../images/Autotune/Autotune_3.png)

- Une fois le calcul automatique terminé, vous verrez le résultat (Tuned Profil) et les quatre boutons ci-dessous.

![Résultat Autotune](../images/Autotune/Autotune_4.png)

- Il est important de toujours comparer le profil d'entrée (colonne "Profil"), le profil de sortie (colonne "Tuned") et le pourcentage de variation pour chaque valeur (colonne "%").

- Pour les débits de basal, vous avez aussi le nombre de "jours manquants". Il vous manque des jours quand Autotune n'a pas assez de données catégorisées comme « Basal » pour calculer le débit de basal pour cette période (par exemple après chaque repas lorsque vous avez une absorption de glucides). Ce nombre doit être aussi bas que possible, surtout lors de périodes où la basale est prépondérante (par exemple pendant la nuit ou à la fin de l'après-midi)

- Le bouton « Comparer les profils » ouvre la vue Comparateur de profil. Le profil d'entrée est en bleu, et le profil de sortie (nommé "Tuned") est en rouge.

  - Remarque : dans l'exemple ci-dessous, le profil d'entrée a une variation circadienne pour le G/I et la SI, mais le profil calculé en sortie a une seule valeur. Si pour vous il est important d'obtenir un profil de sortie circadien, voir [Profil G/I ou SI circadians](#circadian-ic-or-isf-profile) ci-dessous.

  ![Comparer les profils Autotune](../images/Autotune/Autotune_5.png)

- Si vous faites confiance aux résultats (faible pourcentage de variation entre le profil d'entrée et le profil de sortie), vous pouvez cliquer sur le bouton "Activer le profil" puis cliquer sur OK pour valider.

  - Activer le profil Tuned va automatiquement créer un nouveau profil "Tuned" dans votre plugin de profil local.
  - Si vous avez déjà un profil nommé "Tuned" dans votre plugin de profil local, alors ce profil sera mis à jour avec le profil Autotune calculé avant l'activation

  ![Activer Profil Autotune](../images/Autotune/Autotune_6.png)

- Si vous pensez que le profil Tuned doit être ajusté (par exemple si vous pensez que certaines variations sont trop importantes), puis vous pouvez cliquer sur le bouton "Copier vers profil local"

  - Un nouveau profil avec le préfixe "Tuned" et la date et l'heure de l'exécution seront créés dans le plugin de profil local

![Copier vers Profil Local](../images/Autotune/Autotune_7.png)

- Vous pouvez ensuite sélectionner le profil local pour modifier le profil Tuned (il sera sélectionné par défaut lorsque vous ouvrirez le plugin de profil local)

  - les valeurs dans le profil local seront arrondies dans l'interface utilisateur aux capacités de votre pompe

  ![Mise à jour du profil local](../images/Autotune/Autotune_8.png)

- Si vous souhaitez remplacer votre profil d'entrée par le résultat Autotune, cliquez sur le bouton "Mettre à jour profil d'entrée" et validez la fenêtre pop-up avec OK

  - Remarque : si vous cliquez sur "Activer le profil" après avoir cliqué sur "Mettre à jour profil d'entrée", alors vous activerez votre profil mis à jour et non le profil par défaut "Tuned" ?

  ![Mettre à jour le profil d'entrée](../images/Autotune/Autotune_9.png)

- Si vous avez mis à jour votre profil d'entrée, alors le bouton "Mettre à jour profil d'entrée" est remplacé par le bouton "Réinitialiser profil d'entrée" (voir capture d'écran ci-dessous). Vous pouvez ainsi voir immédiatement si votre profil d'entrée actuel présent dans le plugin de profil local contient déjà le résultat de la dernière exécution Autotune ou non. Vous avez aussi la possibilité de récupérer votre profil d'entrée initial sans les résultats Autotune avec ce bouton

  ![Mettre à jour le profil d'entrée](../images/Autotune/Autotune_10.png)



## Paramètres Autotune

(autotune-plugin-settings)=

### Paramètres du plugin Autotune

![Autotune écran par défaut](../images/Autotune/Autotune_11.png)

- Changer le profil avec l'Automation (Désactivé par défaut) : voir [Exécuter Autotune avec une règle d'automatisation](#run-autotune-with-an-automation-rule) ci-dessous. Si vous activez ce paramètre, le profil d'entrée sera automatiquement mis à jour par le profil Tuned, et il sera activé.
  - **Soyez prudent, vous devez prendre confiance en vérifiant pendant plusieurs jours qu'après une mise à jour et l'activation du profil Tuned sans aucune modification, cela améliore effectivement votre boucle.**

- Catégoriser UAM comme basal (par défaut On) : Ce paramètre est pour les utilisateurs utilisant AndroidAPS sans aucun glucide entré (Full UAM). Il empêchera (quand désactivé) de catégoriser les RNS en tant que basal.
  - Remarque : si vous avez au moins une heure d'absorption de glucides détectée pendant une journée, alors toutes les données catégorisées comme "RNS" seront catégorisées en tant que basal, quel que soit ce paramètre (Activé ou Désactivé)
- Nombre de jours de données (par défaut 5) : Vous pouvez définir la valeur par défaut avec ce paramètre. À chaque fois que vous sélectionnez un nouveau profil dans le plugin Autotune, le nombre de jours sera remplacé par cette valeur par défaut
- Appliquer le résultat moyen dans l'IC/ISF circadienne (Désactivation par défaut) : voir [Profil avec G/I ou SI Circadiens](#circadian-ic-or-isf-profile) ci-dessous.

### Autres paramètres

- Autotune utilise également les ratio Max et Min autotsens pour limiter la variation. Vous pouvez voir et ajuster ces valeurs dans Configuration > Plugin Sensitivité > Paramètres > Paramètres Avancés

  ![Autotune écran par défaut](../images/Autotune/Autotune_12.png)



## Fonctionnalités avancées

(circadian-ic-or-isf-profile)=

### Profil avec G/I ou SI Circadiens

- Si vous avez des variations importantes de G/I et/ou de votre SI dans votre profil, et si vous avez entièrement confiance en vos heures et variations circadiens, alors vous pouvez définir "Appliquer le résultat G/I et SI moyen sur le profil circadien"

  - Notez que le calcul Autotune sera toujours fait avec une seule valeur, et que la variation circadienne ne sera pas ajustée par Autotune. Ce paramètre n'applique que la variation moyenne calculée pour le G/I et/ou la SI sur vos valeurs circadiennes

- Vous pouvez voir dans la copie d'écran ci-dessous le profil Tuned avec ce paramètre desactivé (à gauche) et activé (à droite)

  ![Autotune écran par défaut](../images/Autotune/Autotune_13.png)



(run-autotune-with-an-automation-rule)=

## Exécuter Autotune avec une règle d'automatisation

La première étape est de définir le déclencheur correct pour une règle d'automatisation avec Autotune :

Remarque : pour plus d'informations sur la façon de définir une règle d'automatisation, voir [ici](./Automation.md).

- Vous devez sélectionner le déclencheur Période répétitive : il ne faut exécuter Autotune au maximum qu'une seule fois par jour, Autotune est conçu pour être exécuté tous les jours (à chaque nouvelle exécution, vous décalez la période de calcul d'un jour et rapidement les modifications du profil devrait être très faibles)

  ![Autotune écran par défaut](../images/Autotune/Autotune_16.png)

- Il est préférable au début d'exécuter Autotune pendant la journée pour pouvoir vérifier les résultats. Si vous voulez exécuter Autotune dans la nuit, vous devez sélectionner dans le déclencheur 4 heure du matin ou plus tàrd pour inclure le jour courant dans le calcul Autotune suivant.

  ![Autotune écran par défaut](../images/Autotune/Autotune_17.png)

- Ensuite, vous pouvez sélectionner l'action "Lancer Autotune" dans la liste

  ![Autotune écran par défaut](../images/Autotune/Autotune_18.png)

- Vous pouvez ensuite sélectionner l'action Profil Autotune pour régler les paramètres. Les paramètres par défaut sont "Profil actif", le nombre de jours défini dans les préférences Autotune, et tous les jours sont sélectionnés.

  ![Autotune écran par défaut](../images/Autotune/Autotune_19.png)

- Après quelques jours, si vous faites entièrement confiance aux résultats Autotune et si le pourcentage de modification est faible, vous pouvez modifier les [Paramètres Autotune](#autotune-plugin-settings) "Changer le Profil avec l'automatisation" pour l'activer, cela mettre à jour le profil et l'activera automatiquement après le calcul.

## Trucs et astuces

Autotune works with information existing in your database, so if you just installed AAPS on a new phone, you will have to wait several days before being able to launch Autotune with enough days to get relevant results.

Autotune n'est qu'une aide, il est important de vérifier régulièrement si vous êtes d'accord avec le profil calculé. Si vous avez le moindre doute, modifiez les paramètres Autotune (par exemple le nombre de jours) ou copiez les résultats dans le profil local et ajustez le profil avant de l'utiliser.

Utilisez toujours Autotune plusieurs jours manuellement pour vérifier les résultats avant de les appliquer. Et ce n'est que lorsque vous faites entièrement confiance aux résultats Autotune et quand la variation devient très faible entre le profil précédent et le profil calculé que vous pouvez commencer à utiliser l'automatisation (jamais avant)

- Autotune peut très bien fonctionner pour certains utilisateurs et pas du tout pour d'autres, donc **Si vous ne faites pas confiance au résultat Autotune, ne l'utilisez pas**

Il est également important d'analyser les résultats d'Autotune pour comprendre (ou essayer de comprendre) pourquoi Autotune propose ces modifications

- vous pouvez avoir une augmentation ou une diminution de la globalité du profil (par exemple une augmentation du débit de basal total associé à la diminution des valeurs de la SI et du G/I). il pourrait être associé à plusieurs jours successifs avec correction autosens supérieure à 100% (plus d'agressivité requise) ou inférieure à 100% (vous êtes plus sensible)
- Parfois, Autotune propose un équilibre différent entre les taux de basal et la SI et G/I (ex basal inférieur et SI / G/I plus agressifs)

Nous recommandons de ne pas utiliser Autotune dans les cas suivants :

- Vous n'entrez pas tous vos glucides
  - If you don't enter carbs correction for an hypoglycemia, Autotune will see an unexpected increase of your BG value and will increase your basal rates the 4 hours earlier, it could be the opposite of what you need to avoid hypo, especially if it's in the middle of the night. That's why it's important to enter all carbs especially correction for hypo.
- Vous avez beaucoup de périodes avec des RNS détectée lors de la journée
  - Avez-vous entré tous vos glucides et les avez vous correctement estimés ?
  - Toutes les périodes RNS (sauf si vous n'entrez jamais vos glucides dans AAPS et que le paramètre Categoriser UAM en tant que basal est désactivé) seront catégorisées en basal, cela peut augmenter beaucoup votre Basal (beaucoup plus que nécessaire).

- L'absorption des glucides est très lente : si la plupart de vos glucides sont calculés avec un paramètre min_5m_carbimpact (vous pouvez voir ces périodes avec un petit point orange en haut de la courbe), le calcul des GA pourrait être erroné et conduire à de mauvais résultats.
  - When you practice sport, you are generally more sensitive and your BG doesn't rise a lot, so during or after an exercice, it's usual to see some periods with slow carbs. But if you have too often unexpected slow carb absorption, then you may need a profile adjustment (higher value of IC) or a min_5m_carbimpact a bit too high.
- Vous avez un "très mauvais jours", par exemple coincé plusieurs heures en hyperglycémie avec une énorme quantité d'insuline pour pouvoir descendre à l'intérieur de la cible, ou après un changement de capteur, vous avez obtenu de longues périodes avec des glycémies erronées.
- Si le pourcentage de modification est trop important
  - Vous pouvez essayer d'augmenter le nombre de jours pour obtenir des résultats plus lisses
