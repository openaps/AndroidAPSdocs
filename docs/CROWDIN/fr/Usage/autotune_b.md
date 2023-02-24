# How to use Autotune plugin

La documentation sur l'algorythme Autotune peut être trouvée dans [la documentation OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html).

Le plugin Autotune est une implémentation de l'algorythme autotune OpenAPS dans AAPS.

**Currently Autotune Plugin is only available in dev branch with Engineering mode.**

## Interface utilisateur Autotune

![Autotune default screen](../images/Autotune/Autotune_1b.png)

- Vous pouvez sélectionner le profil d'entrée que vous voulez régler dans le menu déroulant Profil (par défaut, votre profil actif actuel est sélectionné)
  - Remarque : chaque fois que vous sélectionnez un nouveau profil, les résultats précédents seront supprimés et le paramètre Nb jours sera défini à la valeur par défaut
- Ensuite, Nb jours permet de choisir le nombre de jours à utiliser dans le calcul pour calculer votre profil. La valeur minimale est de 1 jour et la valeur maximale de 30 jours. Ce nombre ne devrait pas être trop petit pour obtenir des résultats itératifs et lisses corrects (au-dessus de 7 jours pour chaque calcul)
  - Remarque : chaque fois que vous changez le paramètre Nb jours, les résultats précédents seront supprimés
- Dernier run affiche la date du dernier calcul et permet d'afficher votre dernier calcul valide. Si vous n'avez pas lancé Autotune le jour en cours, ou si les résultats précédents ont été supprimés avec une modification du paramètre de calcul ci-dessus, vous pouvez alors récupérer les paramètres et les résultats de la dernière exécution réussie.
- L'avertissement vous montre par exemple des informations sur le profil sélectionné (si vous avez plusieurs valeurs G/I ou plusieurs valeurs SI)
  - Remarque : Le calcul Autotune fonctionne avec une seule valeur de G/I et une seule valeur de SI. Il n'existe actuellement aucun algorythme Autotune pour ajuster un G/I circadien ou une SI circadienne. Si votre profil d'entrée a plusieurs valeurs, vous pouvez voir dans la section Avertissement la valeur moyenne prise en compte pour calculer votre profil.
- Le bouton Vérifiez Profil d'entrée permet d'ouvrir la Visionneuse de Profil pour vous permettre de faire une vérification rapide de votre profil (unités, DAI, G/I, SI, basal et cible)
  - Remarque : Autotune ne réglera que le G/I (valeur unique), la SI (valeur unique) et les débits de basal (avec variation circadienne). Les unités, la DAI et les cibles resteront inchangées dans le profil de sortie.

- "Lancer Autotune" exécutera le calcul Autotune avec le profil et le nombre de jours sélectionnés
  - Remarque : Le calcul Autotune peut prendre beaucoup de temps. Une fois lancé, vous pouvez passer à une autre vue (écran d'accueil ...) et revenir plus tard dans le plugin Autotune pour voir les résultats

![Autotune Run start](../images/Autotune/Autotune_2b.png)

- Ensuite, au cours de l'exécution vous verrez les résultats intermédiaires ci-dessous

  - Remarque : Pendant l'exécution, les paramètres sont verrouillés, vous ne pouvez donc plus modifier le profil d'entrée sélectionné ou le nombre de jour. Vous devrez attendre la fin du calcul actuel si vous voulez lancer un nouveau calcul avec d'autres paramètres.

  ![Autotune during run](../images/Autotune/Autotune_3b.png)

- Une fois le calcul automatique terminé, vous verrez le résultat (Tuned Profil) et les quatre boutons ci-dessous.

![Autotune Result](../images/Autotune/Autotune_4b.png)

- Il est important de toujours comparer le profil d'entrée (colonne "Profil"), le profil de sortie (colonne "Tuned") et le pourcentage de variation pour chaque valeur (colonne "%").

- Pour les débits de basal, vous avez aussi le nombre de "jours manquants". Il vous manque des jours quand Autotune n'a pas assez de données catégorisées comme « Basal » pour calculer le débit de basal pour cette période (par exemple après chaque repas lorsque vous avez une absorption de glucides). Ce nombre doit être aussi bas que possible, surtout lors de périodes où la basale est prépondérante (par exemple pendant la nuit ou à la fin de l'après-midi)

- Le bouton « Comparer les profils » ouvre la vue Comparateur de profil. Le profil d'entrée est en bleu, et le profil de sortie (nommé "Tuned") est en rouge.

  - Remarque : dans l'exemple ci-dessous, le profil d'entrée a une variation circadienne pour le G/I et la SI, mais le profil calculé en sortie a une seule valeur. Si pour vous il est important d'obtenir un profil de sortie circadien, voir [Profil G/I ou SI circadians](#circadian-ic-or-isf-profile) ci-dessous.

  ![Autotune Compare profiles](../images/Autotune/Autotune_5.png)

- Si vous faites confiance aux résultats (faible pourcentage de variation entre le profil d'entrée et le profil de sortie), vous pouvez cliquer sur le bouton "Activer le profil" puis cliquer sur OK pour valider.

  - Activer le profil Tuned va automatiquement créer un nouveau profil "Tuned" dans votre plugin de profil local.
  - Si vous avez déjà un profil nommé "Tuned" dans votre plugin de profil local, alors ce profil sera mis à jour avec le profil Autotune calculé avant l'activation

  ![Autotune Activate profile](../images/Autotune/Autotune_6.png)

- Si vous pensez que le profil Tuned doit être ajusté (par exemple si vous pensez que certaines variations sont trop importantes), puis vous pouvez cliquer sur le bouton "Copier vers profil local"

  - Un nouveau profil avec le préfixe "Tuned" et la date et l'heure de l'exécution seront créés dans le plugin de profil local

![Autotune Copy to local profile](../images/Autotune/Autotune_7.png)

- Vous pouvez ensuite sélectionner le profil local pour modifier le profil Tuned (il sera sélectionné par défaut lorsque vous ouvrirez le plugin de profil local)

  - les valeurs dans le profil local seront arrondies dans l'interface utilisateur aux capacités de votre pompe

  ![Autotune local profile update](../images/Autotune/Autotune_8.png)

- Si vous souhaitez remplacer votre profil d'entrée par le résultat Autotune, cliquez sur le bouton "Mettre à jour profil d'entrée" et validez la fenêtre pop-up avec OK

  - Remarque : si vous cliquez sur "Activer le profil" après avoir cliqué sur "Mettre à jour profil d'entrée", alors vous activerez votre profil mis à jour et non le profil par défaut "Tuned" ?

  ![Autotune Update input profile](../images/Autotune/Autotune_9.png)

- Si vous avez mis à jour votre profil d'entrée, alors le bouton "Mettre à jour profil d'entrée" est remplacé par le bouton "Réinitialiser profil d'entrée" (voir capture d'écran ci-dessous). Vous pouvez ainsi voir immédiatement si votre profil d'entrée actuel présent dans le plugin de profil local contient déjà le résultat de la dernière exécution Autotune ou non. Vous avez aussi la possibilité de récupérer votre profil d'entrée initial sans les résultats Autotune avec ce bouton

  ![Autotune Update input profile](../images/Autotune/Autotune_10.png)



## Paramètres Autotune

### Paramètres du plugin Autotune

![Autotune default screen](../images/Autotune/Autotune_11.png)

- Changer le profil avec l'Automation (Désactivé par défaut) : voir [Exécuter Autotune avec une règle d'automatisation](#run-autotune-with-an-automation-rule) ci-dessous. Si vous activez ce paramètre, le profil d'entrée sera automatiquement mis à jour par le profil Tuned, et il sera activé.
  - **Soyez prudent, vous devez prendre confiance en vérifiant pendant plusieurs jours qu'après une mise à jour et l'activation du profil Tuned sans aucune modification, cela améliore effectivement votre boucle.**

- Catégoriser UAM comme basal (par défaut On) : Ce paramètre est pour les utilisateurs utilisant AndroidAPS sans aucun glucide entré (Full UAM). Il empêchera (quand désactivé) de catégoriser les RNS en tant que basal.
  - Remarque : si vous avez au moins une heure d'absorption de glucides détectée pendant une journée, alors toutes les données catégorisées comme "RNS" seront catégorisées en tant que basal, quel que soit ce paramètre (Activé ou Désactivé)
- Nombre de jours de données (par défaut 5) : Vous pouvez définir la valeur par défaut avec ce paramètre. À chaque fois que vous sélectionnez un nouveau profil dans le plugin Autotune, le nombre de jours sera remplacé par cette valeur par défaut
- Appliquer le résultat moyen dans l'IC/ISF circadienne (Désactivation par défaut) : voir [Profil avec G/I ou SI Circadiens](#circadian-ic-or-isf-profile) ci-dessous.

### Autres paramètres

- Autotune utilise également les ratio Max et Min autotsens pour limiter la variation. Vous pouvez voir et ajuster ces valeurs dans Configuration > Plugin Sensitivité > Paramètres > Paramètres Avancés

  ![Autotune default screen](../images/Autotune/Autotune_12.png)



## Fonctionnalités avancées

### Profil avec G/I ou SI Circadiens

- Si vous avez des variations importantes de G/I et/ou de votre SI dans votre profil, et si vous avez entièrement confiance en vos heures et variations circadiens, alors vous pouvez définir "Appliquer le résultat G/I et SI moyen sur le profil circadien"

  - Notez que le calcul Autotune sera toujours fait avec une seule valeur, et que la variation circadienne ne sera pas ajustée par Autotune. Ce paramètre n'applique que la variation moyenne calculée pour le G/I et/ou la SI sur vos valeurs circadiennes

- See on screenshot below Tuned profile with Apply average variation Off (on the left) and On (on the right)

  ![Autotune default screen](../images/Autotune/Autotune_13.png)



### Tune specific days of the week

- If you click on the checkbox with the eye on the right of "Rune days" parameter, you will see the day selection. You can specify which day of the week should be included in Autotune calculation (in screenshot below you can see an example for "working days" with Saturday and Sunday removed from autotune calculation)
  - If the number of day included in Autotune calculation is lower than the number of Tune days, then you will see how many days will be included on the right of Tune days selector (10 days in the example below)
  - This setting gives good results only if the number of remaining days is not to small (for example if you Tune a specific profile for week end days with only Sunday and Saturday selected, you should select a minimum of 21 or 28 Tune days to have 6 or 8 days included in Autotune calculation)

![Autotune default screen](../images/Autotune/Autotune_14b.png)

- During Autotune calculation, you can see the progress of the calculations ("Partial result day 3 / 10 tuned" on example below)

  ![Autotune default screen](../images/Autotune/Autotune_15b.png)

## Run Autotune with an automation rule

First step is to define correct trigger for an automation rule with Autotune:

Note: for more information on how to set an automation rule, see [here](./Automation.rst).

- You should select Recurring time trigger: only run Autotune once per day, and autotune is designed to be runned daily (each new run you shift one day later and quickly profile modification should be tiny)

  ![Autotune default screen](../images/Autotune/Autotune_16.png)

- It's better at the beginning to run Autotune during the day to be able to check results. If you want to run Autotune during the night, you have to select in the trigger 4AM or later to include current day in next Autotune Calculation.

  ![Autotune default screen](../images/Autotune/Autotune_17.png)

- Then you can select "Run Autotune" Action in the list

  ![Autotune default screen](../images/Autotune/Autotune_18.png)

- You can then select Autotune Action to adjust parameters for your run. Default parameters are "Active Profile", default Tune days value defined in Autotune Plugin preferences, and All days are selected.

  ![Autotune default screen](../images/Autotune/Autotune_19b.png)

- After a few days, if you fully trust Autotune results and percentage of modification is low, you can modify [Autotune settings](#autotune-plugin-settings) "Automation Switch Profile" to enabled to automatically update and activate profile tuned after calculation.

Note: if you want to automatically tune profiles for specific days of the week (for example a profile for "Weekend days" and another one for "Working days"), then create one rule for each profile, select the same days in Trigger and in Autotune Action, Tune days must be high enough to be sure tuning will be done with at least 6 or 8 days, and don't forget to select time after 4AM in trigger...

- See below an example of rule to tune "my profile" on all "Working days" with 14 Tune days selected (so only 10 days included in autotune calculation).

![Autotune default screen](../images/Autotune/Autotune_20b.png)



## Tips and trick's

Autotune works with information existing in your database, so if you just installed AAPS on a new phone, you will have to wait several days before being able to launch Autotune with enough days to get relevant results;

Autotune is just an help, it's important to regularly check if you agree with calculated profile. If you have any doubt, change Autotune settings (for example the number of days) or copy results in local profile and adjust profile before using it.

Always use Autotune several days manually to check results before applyling them. And it's only when you fully trust Autotune results, and when variation becomes tiny between previous profile and calculated profile than you start to use Automation (Never before)

- Autotune can work very well for some users and not for others, so **If you don't trust Autotune result, don't use it**

It's also important to analyse Autotune results to understand (or try to understand) why Autotune propose these modifications

- you can have a whole increase or decrease of the strength of your profile (for example increase of total basal associated to decrease of ISF and IC values). it could be associated to several following days with autosens correction above 100% (more agressivity required) or below 100% (you are more sensitive)
- Sometimes Autotune propose a different balance between basal rates and IC/ISF (for ex lower basal and more aggressive IC/ISF)

We advise to not use Autotune in the following cases:

- You don't enter all your carbs
  - If you don't enter carbs correction for an hypoglycemia, Autotune will see an unexcepted increase of your BG value and will increase your basal rates the ' hours earlier, it could be the opposite of what you need to avoid hypo, especially if it's in the middle of the night. That's why it's important to enter all carabs especially correction for hypo.
- You have a lot of period with UAM detected during the day.
  - Do you have entered all your carbs and correctly estimated your Carbs ?
  - All UAM periods (except if you enter no carbs during a day and categorized UAM as basal is disabled), all your UAM periods will be categorized as basal, this can increase a lot your basal (much more than necessary)

- Your carbs absorption is very slow: if most of your carbs absorption are calculated with min_5m_carbimpact parameter (you can see these periods with a little orange dot in the top of COB curve), the calculation of COB could be wrong and leads to wrong results.
  - We you practice sport, you are generally more sensitive and your BG doesn't rise a lot, so during or after an exercice, it's usual to see some periods with slow carbs. But if you have too often unexpected slow carb absorption, then you may need a profile adjustment (higher value of IC) or a min_5m_carbimpact a bit to high.
- You have a "very bad days", for example stuck several hours in hyperglycemia with a huge amount of insulin to be able to go down within the range, or after a sensor change you got long periods of wrong BG values.
- If the percentage of modification is too important
  - You can try to increase the number of days to get smoother results