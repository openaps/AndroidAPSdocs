# Objectifs

AndroidAPS a une série d'objectifs qui doivent être complétés pour vous guider à travers les fonctionnalités et les paramètres de la boucle sécurisée.  Ils s'assurent que vous avez correctement configuré tout ce qui est détaillé dans les sections ci-dessus, et que vous comprenez ce que votre système fait et pourquoi vous pouvez lui faire confiance.

Si vous **mettez à jour les téléphones** alors vous pouvez [exporter vos paramètres](../Usage/ExportImportSettings.md) pour garder votre progression à travers les objectifs. Non seulement vos progrès à travers les objectifs de l'être sauvés, mais également vos paramètres de sécurité, tels que max bolus etc. Si vous n'exportez pas et n'importez pas vos paramètres, vous devrez recommencer les objectifs depuis le début.  C'est une bonne idée de [sauvegarder vos paramètres](../Usage/ExportImportSettings.html) souvent juste au cas où.

Si vous voulez revenir en arrière sur les objectifs terminés voir les [explications ci-dessous](Objectives-go-back-in-objectives).

## Objectif 1 : Paramétrage de la visualisation et la surveillance des données, analyse des débits Basal et des ratios

- Sélectionnez la source de glycémie adaptée à votre configuration.  Voir [Source GLY](../Configuration/BG-Source.md) pour plus d'informations.
- Sélectionnez la bonne pompe dans la Configuration (sélectionnez la Pompe virtuelle si vous utilisez un modèle de pompe sans pilote AAPS pour le bouclage) afin de vous assurer que votre pompe peut communiquer avec AAPS.
- Si vous utilisez la pompe DanaR, assurez-vous d'avoir suivi les instructions [Pompe à insuline DanaR](../Configuration/DanaR-Insulin-Pump.md) pour assurer le lien entre la pompe et AAPS.
- Suivez les instructions de la page [Nightscout](../Installing-AndroidAPS/Nightscout.md) pour s'assurer que Nightscout peut recevoir et afficher ces données.
- Notez que l'URL dans NSClient doit être **SANS /api/v1/** à la fin - voir les [paramètres NSClient dans les Préférences](Preferences-nsclient).

*Vous devrez peut-être attendre la prochaine lecture de glycémie avant qu'AAPS ne la reconnaisse.*

## Objectif 2 : Apprendre comment contrôler AndroidAPS

- Exécutez différentes actions dans AAPS tel que décrit dans cet objectif.

- Cliquez sur le texte orange "Pas encore terminé" pour accéder à la liste des tâches.

- Des liens seront fournis pour vous guider si vous n'êtes pas encore familiarisé avec une action spécifique.

  ```{image} ../images/Objective2_V2_5.png
  :alt: Screenshot objective 2
  ```

(Objectives-objective-3-prove-your-knowledge)=
## Objectif 3 : Prouver ses connaissances

- Passez un examen à choix multiples pour tester vos connaissances d'AAPS.

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
- Adoptez manuellement au moins 20 suggestions de débits de base temporaires sur une période de 7 jours; saisissez-les sur votre pompe et confirmez dans AAPS que vous les avez acceptés.  Assurez-vous que ces données apparaissent bien dans AndroidAPS et dans Nightscout.
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

- Commencez à comprendre le raisonnement qu'il y a derrière chaque recommandation de basal temporaire en regardant [Comprendre la logique de détermination basale](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html) ainsi que les [lignes de prédiction dans l'écran d'accueil AAPS](Screenshots-prediction-lines)/Nightscout et le résumé des résultats des calculs dans votre onglet OpenAPS.

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

(Objectives-objective-6-starting-to-close-the-loop-with-low-glucose-suspend)=
## Objectif 6 : Démarrage de la boucle fermée avec le système AGB ( Arrêt pour Glycémie Basse )

```{image} ../images/sign_warning.png
:alt: Warning sign
```

### La boucle fermée ne corrigera pas les glycémies élevées dans l'objectif 6, car elle est limitée à la suspension glycémie basse. Les hyperglycémies doivent être corrigées manuellement par vous !

- Pré-requis : Vous avez besoin d'un bon profil (basal, SI, G/I) déjà en cours dans AAPS pour commencer avec Loop en mode Arrêt Glycémie Basse. Sinon, vous pouvez faire une hypo que vous devrez corriger manuellement. Cela vous aidera beaucoup à éviter d'avoir à traiter des glycémies faible sur une période de 5 jours. **Si vous avez toujours des hypoglycémies fréquentes ou sévères alors envisagez de réajuster votre DAI, ratios basal, SI et G/I et ne démarrez PAS l'objectif 6 pour le moment.**
- Vous n'avez pas à changer vos paramètres pour le moment. Au cours de l'objectif 6, le paramètre maxIA est automatiquement défini sur zéro. **Cette limitations sera supprimée lors du passage à l'objectif 7.**
- Le système remplacera vos paramètres maxIA à zéro, ce qui signifie que si la glycémie diminue, il peut réduire le débit de basal pour vous. Si la glycémie augmente, elle n'augmentera le débit de basal que si l'IA basale est négative du fait d'un Arrêt Glycémie Basse antérieur. Sinon, vos débits de basal resteront les mêmes que votre profil sélectionné. **Cela signifie que vous devez gérer manuellement vos glycémies élevées avec des corrections d'insuline.**
- Si votre IA basale est négative (voir copie d'écran ci-dessous) un DBT > 100% peut également être diffusé à l'objectif 6.

```{image} ../images/Objective6_negIOB.png
:alt: Exemple IA négative
```

- Définissez votre cible légèrement plus haut que vous ne le faites habituellement, simplement pour être sûr et avoir un peu plus de marge de scurité.
- Activez le mode 'Arrêt Glycémie Basse' en appuyant sur l'icône Boucle en haut à droite de l'écran d'accueil et en sélectionnant l'icône Boucle AGB.
- Surveillez comment les basales temporaires sont actives en regardant le texte bleu de la basale sur l'écran d'accueil, ou le rendu de la basale en bleu sur le graphique de l'écran d'accueil.
- Vous pouvez subir temporairement des pics de glycémie à la suite d'hypos sans pouvoir augmenter le débit de base sur le rebond.

(Objectives-objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets)=
## Objectif 7 : Réglage de la Boucle Fermée, augmentation de l'IA (Insuline Active) maximale au dessus de 0 et abaissement progressif des cibles glycémiques

- Sélectionnez 'Boucle fermée' soit dans les [Préférences](../Configuration/Preferences.md) soit en faisant un appui long sur l'icône Boucle en haut à droite de l'écran d'accueil. sur une période de 1 jour.

- Augmentez votre 'IA max total qu'OpenAPS ne peut pas dépasser' (dans OpenAPS appelé 'max-IA') au-dessus de 0. La recommandation par défaut est "moyenne bolus repas + 3 x max basal quotidienne"(pour l'algorithme SMB) ou "3 x max basal quotidienne" (pour les algorithme AMA plus anciens) mais devez augmenter très lentement jusqu'à ce que vous trouviez vos propres paramètres qui marchent pour vous (max basal quotidienne = le débit de base maximum sur l'ensemble des plages horaires de la journée).

  Cette recommandation doit être considérée comme un point de départ. Si vous paramétrez 3 x et que vous constatez des variations trop importantes et rapides, alors diminuez cette valeur. Si vous êtes très résistant, augmentez la un peu à la fois.

  ```{image} ../images/MaxDailyBasal2.png
  :alt: max daily basal
  ```

- Une fois confiant sur la quantité d'IA qui convient à votre profil de boucle, réduisez ensuite vos cibles jusqu'au niveau souhaité.

(Objectives-objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens)=
## Objectif 8 : Ajustement des débits Basal et des ratios si nécessaire, puis activation de la fonction auto-sens

- Vous pouvez utiliser [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) pour vérifier que votre basale reste précise ou faire un test de basal traditionnel.
- Activez [autosens](../Usage/Open-APS-features.md) sur une période de 7 jours et regardez la ligne blanche dans le graphique de l'écran d'accueil qui montre comment la sensibilité à l'insuline augmente ou diminue selon l'exercice physique, le cycle hormonal etc, et gardez un oeil sur l'onglet OpenAPS qui indique comment AndroidAPS ajuste les basales et/ou les cibles en conséquence.

*Don’t forget to record your looping in* [this form](https://bit.ly/nowlooping) *logging AndroidAPS as your type of DIY loop software, if you have not already done so.*

(Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)=
## Objectif 9 : Activation de fonctionnalités supplémentaires pour l'utilisation en journée, telles que la fonction SMB

- You must read the [SMB chapter in this wiki](Open-APS-features-super-micro-bolus-smb) and [chapter oref1 in openAPSdocs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) to understand how SMB works, especially what's the idea behind zero-temping.
- Then you ought to [rise maxIOB](Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob) to get SMBs working fine. maxIA inclu maintenant toutes les IA, pas seulement la basale ajoutée. That is, if given a bolus of 8 U for a meal and maxIOB is 7 U, no SMBs will be delivered until IOB drops below 7 U. A good start is maxIOB = average mealbolus + 3x max daily basal (max daily basal = the maximum hourly value in any time segment of the day - see [objective 7](Objectives-objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets) for an illustration)
- min_5m_carbimpact default in absorption settings has changed from 3 to 8 going from AMA to SMB. Si vous passez de AMA vers SMB, vous devez la modifier manuellement.

(Objectives-objective-10-automation)=
## Objectif 10: Automatisation

- You have to start objective 10 to be able to use [Automation](../Usage/Automation.md).
- Make sure you have completed all objectives including exam [Objectives-objective-3-prove-your-knowledge](Objectives#objective-3-prove-your-knowledge).
- Completing previous objectives will not effect other objectives you have already finished. Vous conserverez tous les objectifs terminés !

(Objectives-go-back-in-objectives)=
## Retour arrière dans les Objectifs

Si vous voulez revenir en arrière sur les objectifs terminés pour quelque raison que ce soit, vous pouvez le faire en cliquant sur "Refaire l'objectif".

```{image} ../images/Objective_ClearFinished.png
:alt: Retour arrières objectifs
```

## Objectifs dans Android APS avant la version 3.0

Un objectif a été supprimé lors de la sortie d'Android APS 3.0.  Users of Android APS version 2.8.2.1 who are on older Android software (i.e. earlier than version 9) will be using an older set of objectives which can be found [here](../Usage/Objectives_old.md).
