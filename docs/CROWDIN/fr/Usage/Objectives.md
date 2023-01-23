# Objectifs

AndroidAPS a une série d'objectifs qui doivent être complétés pour vous guider à travers les fonctionnalités et les paramètres de la boucle sécurisée.  Ils s'assurent que vous avez correctement configuré tout ce qui est détaillé dans les sections ci-dessus, et que vous comprenez ce que votre système fait et pourquoi vous pouvez lui faire confiance.

Si vous **mettez à jour les téléphones** alors vous pouvez [exporter vos paramètres](../Usage/ExportImportSettings.md) pour garder votre progression à travers les objectifs. Non seulement vos progrès à travers les objectifs de l'être sauvés, mais également vos paramètres de sécurité, tels que max bolus etc.  Si vous n'exportez pas et n'importez pas vos paramètres, vous devrez recommencer les objectifs depuis le début.  C'est une bonne idée de [sauvegarder vos paramètres](../Usage/ExportImportSettings.html) souvent juste au cas où.

Si vous voulez revenir en arrière sur les objectifs terminés voir les [explications ci-dessous](../Usage/Objectives#retour-arriere-dans-les-objectifs).

## Objectif 1 : Paramétrage de la visualisation et la surveillance des données, analyse des débits Basal et des ratios

- Sélectionnez la source de glycémie adaptée à votre configuration.  Voir [Source GLY](../Configuration/BG-Source.md) pour plus d'informations.
- Sélectionnez la bonne pompe dans le générateur de configuration (sélectionnez la Pompe virtuelle si vous utilisez un modèle de pompe sans pilote AndroidAPS pour le bouclage) afin de vous assurer que votre pompe peut communiquer avec AndroidAPS.
- Si vous utilisez la pompe DanaR, assurez-vous d'avoir suivi les instructions [Pompe à insuline DanaR](../Configuration/DanaR-Insulin-Pump.md) pour assurer le lien entre la pompe et AndroidAPS.
- Suivez les instructions de la page [Nightscout](../Installing-AndroidAPS/Nightscout.md) pour s'assurer que Nightscout peut recevoir et afficher ces données.
- Notez que l'URL dans NSClient doit être **SANS /api/v1/** à la fin - voir les [paramètres NSClient dans les Préférences](../Configuration/Preferences#nsclient).

*Vous devrez peut-être attendre la prochaine lecture de glycémie avant qu'AndroidAPS ne la reconnaisse.*

## Objectif 2 : Apprendre comment contrôler AndroidAPS

- Exécutez différentes actions dans AndroidAPS tel que décrit dans cet objectif.

- Cliquez sur le texte orange "Pas encore terminé" pour accéder à la liste des tâches.

- Des liens seront fournis pour vous guider si vous n'êtes pas encore familiarisé avec une action spécifique.

  ```{image} ../images/Objective2_V2_5.png
  :alt: Screenshot objective 2
  ```

## Objectif 3 : Prouver ses connaissances

- Passez un examen à choix multiples pour tester vos connaissances d'AndroidAPS.

- Cliquez sur le texte orange "Pas encore terminé" pour accéder à la page avec la question et répondre aux options.

  ```{image} ../images/Objective3_V2_5.png
  :alt: Screenshot objective 3
  ```

- Des liens sont fournis pour vous guider si vous n'êtes pas certain d'avoir les bonnes réponses.

- Les questions pour l'objectif 3 ont été entièrement réécrites par des locuteurs natifs depuis AAPS 2.8. Les nouvelles questions couvrent les mêmes sujets de base et quelques nouveaux sujets.

- Même si vous avez réussi l'objectif 3 dans les versions précédentes, cet objectif contiendra de nouvelles questions non répondues.

- Les questions non répondues ne vous affecteront que si vous commencez un nouvel objectif. En d'autres termes, si vous avez déjà terminé tous les objectifs, vous pouvez attendre et répondre aux nouvelles questions un peu plus tard sans perdre de fonctions AAPS.

## Objectif 4 : Démarrage de la boucle ouverte

- Sélectionnez la Boucle Ouverte soit à partir des Préférences, soit en faisant un appui long sur le bouton de boucle en haut à gauche de l'écran d'accueil.
- Travaillez dans les [Préférences](../Configuration/Preferences.md) pour la configurer pour vous.
- Adoptez manuellement au moins 20 suggestions de débits de base temporaires sur une période de 7 jours; saisissez-les sur votre pompe et confirmez dans AndroidAPS que vous les avez acceptés.  Assurez-vous que ces données apparaissent bien dans AndroidAPS et dans Nightscout.
- Activez des [Cibles temporaires](../Usage/temptarget.md), si nécessaire. Utilisez des cibles temp. hypo temp pour éviter que le système ne corrige trop fortement une augmentation de la glycémie après une hypo.

### Réduire le nombre de notifications

- Pour réduire le nombre de décisions à prendre en mode Boucle Ouverte, définissez une large plage cible comme 90 - 150 mg/dl ou 5,0 - 8,5 mmol/l.

- Vous pouvez même augmenter encore la limite supérieure (ou désactiver la Boucle ouverte) pendant la nuit.

- Dans les Préférences, vous pouvez définir un pourcentage minimum pour suggérer un changement de débit de basal.

  ```{image} ../images/OpenLoop_MinimalRequestChange2.png
  :alt: Boucle ouverte Changement minimum
  ```

- De plus, vous n'avez pas besoin d'agir toutes les 5 minutes sur toutes les suggestions...

## Objectif 5 : Compréhension de la Boucle Ouverte, y compris les propositions de débits Basal temporaires

- Commencez à comprendre le raisonnement qu'il y a derrière chaque recommandation de basal temporaire en regardant [Comprendre la logique de détermination basale](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html) ainsi que les [lignes de prédiction dans l'écran d'accueil AndroidAPS](../Getting-Started/Screenshots#lignes-de-prediction)/Nightscout et le résumé des résultats des calculs dans votre onglet OpenAPS.

Vous voudrez définir votre objectif plus haut que d'habitude jusqu'à ce que vous ayez confiance dans les calculs et les paramètres.  Le système permet

- une cible basse au minimum de 72 mg/dl (4 mmol/l) ou un maximum de 180 mg/dl (10 mmol/l)
- une cible haute au minimum de 90 mg/dl (5 mmol/l) et au maximum de 225 mg/dl (15 mmol/l)
- une cible temporaire en tant que simple valeur peut être n'importe où entre 72 mg/dl et 225 mg/dl (4 mmol/l et 15 mmol/l)

La cible est la valeur sur laquelle les calculs sont basés, et n'est pas la même que la page dans laquelle vous souhaitez avoir vos glycémies.  Si votre cible est très large (disons 50 mg/dl \[3 mmol/l\] ou plus de large), vous aurez souvent peu d'action de AAPS. C'est dû au fait que la glycémie devrait finalement se situer quelque part dans cette large plage, et par conséquent, peu de débits de base temporaires sont suggérés.

Vous pouvez essayer d'ajuster vos cibles pour qu'elles soient plus proches les unes des autres (disons 20 mg/dl \[1 mmol/l\] ou moins de large) et observer comment le comportement de votre système change en conséquence.

Vous pouvez afficher une plage plus large (lignes vertes) sur le graphique pour la zone dans laquelle vous souhaitez maintenir votre glycémie en entrant différentes valeurs dans [Préférences](../Configuration/Preferences.md) > Fourchette de visualisation.

```{image} ../images/sign_stop.png
:alt: Stop sign
```

### Arrêtez-vous ici si vous est en boucle ouverte avec une pompe virtuelle - ne cliquez pas sur Vérifier à la fin de cet objectif.

```{image} ../images/blank.png
:alt: blank
```

## Objectif 6 : Démarrage de la boucle fermée avec le système AGB ( Arrêt pour Glycémie Basse )

```{image} ../images/sign_warning.png
:alt: Warning sign
```

### Closed loop will not correct high BG values in objective 6 as it is limited to low glucose suspend. High BG values have to be corrected manually by you!

- Prerequisite: You need a good profile (basal, ISF, IC) already working in AndroidAPS to start with Loop in Low Glucose Suspend mode. Otherwise you can run in a hypo which you have to manually correct. This will help you a lot to avoid having to treat a low glucose over a period of 5 days. **If you are still having frequent or severe low glucose episodes then consider refining your DIA, basal, ISF and carb ratios and do NOT start objective 6 at this time.**
- You don't have to change your settings now. During objective 6, the maxIOB setting is internally set to zero automatically. **This override will be reversed when moving to objective 7.**
- The system will override your maxIOB settings to zero, which means if blood glucose is dropping it can reduce basal for you. If blood glucose is rising then it will only increase basal if the basal IOB is negative from a previous Low Glucose Suspend. Otherwise basal rates will remain the same as your selected profile. **That means that you have to manually handle high values with insulin corrections.**
- If your basal IOB is negative (see screenshot below) a TBR > 100% can be issued also in objective 6.

```{image} ../images/Objective6_negIOB.png
:alt: "Exemple IA n\xE9gative"
```

- Set your target range slightly higher than you usually aim for, just to be safe and have a bit more scurity buffer.
- Enable 'Low Glucose Suspend' mode either by by pressing and holding the Loop icon at the top right corner of the home screen and selecting the Loop - LGS mode icon.
- Watch how temporary basals are active by viewing the blue basal text on the homescreen or the blue basal render on the homescreen graph.
- Vous pouvez subir temporairement des pics de glycémie à la suite d'hypos sans pouvoir augmenter le débit de base sur le rebond.

## Objective 7: Tuning the closed loop, raising maxIOB above 0 and gradually lowering BG targets

- Select 'Closed Loop' either from [Preferences](../Configuration/Preferences.md) or by pressing and holding the Loop icon at the top right corner of the home screen, over a period of 1 day.

- Raise your 'Maximum total IOB OpenAPS can’t go over' (in OpenAPS called 'max-iob') above 0. The default recommendation is "average mealbolus + 3x max daily basal" (for the SMB algorithm) or "3x max daily basal" (for the older AMA algorithm) but you should slowly work up to this until you know your settings work for you (max daily basal = the maximum hourly value in any time segment of the day).

  Cette recommandation doit être considérée comme un point de départ. If you set to the 3x and you are seeing moves that push you too hard and fast then lower that number. If you are very resistant, raise it very little at a time.

  ```{image} ../images/MaxDailyBasal2.png
  :alt: max daily basal
  ```

- Once confident on how much IOB suits your looping patterns, then reduce your targets to your desired level.

## Objectif 8 : Ajustement des débits Basal et des ratios si nécessaire, puis activation de la fonction auto-sens

- Vous pouvez utiliser [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) pour vérifier que votre basale reste précise ou faire un test de basal traditionnel.
- Activez [autosens](../Usage/Open-APS-features.md) sur une période de 7 jours et regardez la ligne blanche dans le graphique de l'écran d'accueil qui montre comment la sensibilité à l'insuline augmente ou diminue selon l'exercice physique, le cycle hormonal etc, et gardez un oeil sur l'onglet OpenAPS qui indique comment AndroidAPS ajuste les basales et/ou les cibles en conséquence.

*N'oubliez pas d'enregistrer votre Bouclage dans \`ce formulaire \<https://bit.ly/nowlooping>\`\_ \*en indiquant AndroidAPS comme votre type de logiciel de boucle DIY, si vous ne l'avez pas déjà fait.*

## Objectif 9 : Activation de fonctionnalités supplémentaires pour l'utilisation en journée, telles que la fonction SMB

- Vous devez lire le [chapitre SMB dans ce wiki](../Usage/Open-APS-features#super-micro-bolus-smb) et le [chapitre oref1 dans la documentation openAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) pour comprendre comment les SMB fonctionnent, en particulier ce qu'il y a derrière le zéro-temp.
- Puis vous devez [augmenter le maxIA](../Usage/Open-APS-features#ia-totale-maximale-pour-openaps-u-openaps-max-ia) pour que les SMB marchent correctement. maxIA inclu maintenant toutes les IA, pas seulement la basale ajoutée. Autrement dit, si vous faites un bolus de 8 U pour un repas et que maxIA est à 7 U, aucun SMB ne sera délivré jusqu'à ce que l'IA redescende en dessous de 7 U. Un bon début est maxIA = bolus moyen des repas + 3 x basale max quotidienne (basale max quotidienne = débit horaire max de basale sur n'importe quelle période de la journée - voir [Objectif 7](../Usage/Objectives.md#objectif-7-reglage-de-la-boucle-fermee-augmentation-de-l-ia-insuline-active-maximale-au-dessus-de-0-et-abaissement-progressif-des-cibles-glycemiques) pour une illustration)
- la valeur par défaut de min_5m_carbimpact est passée de 3 à 8 entre AMA et SMB. Si vous passez de AMA vers SMB, vous devez la modifier manuellement.

## Objectif 10: Automatisation

- Vous devez commencer l'objectif 10 pour pouvoir utiliser l'[Automatisation](../Usage/Automation.md).
- Assurez-vous d'avoir complété tous les objectifs, y compris l'examen [../Usage/Objectives#objectif-3-prouver-ses-connaissances](../Usage/Objectives.md#objectif-3-prouver-ses-connaissances).
- Compléter les objectifs précédents n’affectera pas les autres objectifs que vous avez déjà terminés. Vous conserverez tous les objectifs terminés !

## Retour arrière dans les Objectifs

Si vous voulez revenir en arrière sur les objectifs terminés pour quelque raison que ce soit, vous pouvez le faire en cliquant sur "Refaire l'objectif".

```{image} ../images/Objective_ClearFinished.png
:alt: "Retour arri\xE8res objectifs"
```

## Objectifs dans Android APS avant la version 3.0

Un objectif a été supprimé lors de la sortie d'Android APS 3.0.  Les utilisateurs d'Android APS version 2.8.2.1 qui sont sur des version d'Android plus anciens (par ex. antérieur à la version 9) utiliseront un jeu d'objectifs plus ancien qui peut être trouvé [ici](../Usage/Objectives_old.md).
