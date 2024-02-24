# Objectifs

AAPS has a series of Objectives that need to be completed to walk you through the features and settings of safe looping.  Ils s'assurent que vous avez correctement configuré tout ce qui est détaillé dans les sections ci-dessus, et que vous comprenez ce que votre système fait et pourquoi vous pouvez lui faire confiance.

Si vous **mettez à jour les téléphones** alors vous pouvez [exporter vos paramètres](../Usage/ExportImportSettings.md) pour garder votre progression à travers les objectifs. Non seulement vos progrès à travers les objectifs de l'être sauvés, mais également vos paramètres de sécurité, tels que max bolus etc. Si vous n'exportez pas et n'importez pas vos paramètres, vous devrez recommencer les objectifs depuis le début.  C'est une bonne idée de [sauvegarder vos paramètres](../Usage/ExportImportSettings.html) souvent juste au cas où.

Si vous voulez revenir en arrière sur les objectifs terminés voir les [explications ci-dessous](Objectives-go-back-in-objectives).

## Objectif 1 : Paramétrage de la visualisation et la surveillance des données, analyse des débits Basal et des ratios

- Sélectionnez la source de glycémie adaptée à votre configuration.  Voir [Source GLY](../Configuration/BG-Source.md) pour plus d'informations.
- Select the right Pump in ConfigBuilder (select Virtual Pump if you are using a pump model with no AAPS driver for looping) to ensure your pump status can communicate with AAPS.
- If using DanaR pump then ensure you have followed [DanaR Insulin Pump](../Configuration/DanaR-Insulin-Pump.md) instructions to ensure the link between pump and AAPS.
- You need to establish a data repository/reporting platform to complete this objective. That can be accomplished with either Nightscout or Tidepool (or both). Follow instructions at the [Nightscout](../Installing-AndroidAPS/Nightscout.md) or [Tidepool](../Installing-AndroidAPS/Tidepool.md) page for instructions.
- Notez que l'URL dans NSClient doit être **SANS /api/v1/** à la fin - voir les [paramètres NSClient dans les Préférences](Preferences-nsclient).

*You may need to wait for the next blood glucose reading to arrive before AAPS will recognise it.*

## Objective 2: Learn how to control AAPS

- Perform several actions in AAPS as described in this objective.

- Cliquez sur le texte orange "Pas encore terminé" pour accéder à la liste des tâches.

- Des liens seront fournis pour vous guider si vous n'êtes pas encore familiarisé avec une action spécifique.

  ```{image} ../images/Objective2_V2_5.png
  :alt: Screenshot objective 2
  ```

(Objectives-objective-3-prove-your-knowledge)=

## Objectif 3 : Prouver ses connaissances

Objective 3 is a multiple choice test based on questions designed to test your theoretical knowledge of **AAPS**.

Some users find Objective 3 to be the most difficult objective to complete. Please do read the AAPS documents in conjunction with the questions. If you are genuinely stuck after researching the **AAPS** documents, please search or ask for help on the Facebook or Discord group. These groups can provide friendly hints or redirect you to the relevant part of the **AAPS** documents.

To proceed with Objective 3, click on the orange text “Not completed yet” to access the relevant question. Please read each question and select your answer(s).



Within each question, a hyperlink to the **AAPS** documents will guide you to the relevant section of the document which you should read in order to locate the correct answer.


[Obj3_Screenshot 2023-12-05 223422](https://github.com/openaps/AndroidAPSdocs/assets/137224335/77347516-e24e-459d-98ab-acbb49a3d4e8)![image](https://github.com/openaps/AndroidAPSdocs/assets/137224335/ca756b8e-efbc-4427-b281-ac953ce16718)



For each question, there may be more than one answer that is correct! If an incorrect answer is selected, the question will be time locked for a certain amount of time (60 minutes) before you can go back and answer the question.


After updating to a new version of **AAPS**, new questions may be added to cover a prevalent issue picked up by **AAPS** or alternatively to test your knowledge of a new feature of **AAPS** as released.


When **AAPS** is installed for the first time, you will have to complete Objective 3 entirely in order to move onto Objective 4. Each objective is required to be completed in sequential order. New features will gradually be unlocked as progress is made through the objectives.

__What happens if new questions are added later to Objective 3?__ From time to time, new features are added to **AAPS** which may require a new question to be added to Objective 3. As a result, any new question added to Objective 3 will be marked as “incomplete” because **AAPS** will require you to action this. As each Objective is independent, you will not lose the existing functionality of **AAPS** providing the other objectives remain completed.


## Objectif 4 : Démarrage de la boucle ouverte

- Sélectionnez la Boucle Ouverte soit à partir des Préférences, soit en faisant un appui long sur le bouton de boucle en haut à gauche de l'écran d'accueil.
- Travaillez dans les [Préférences](../Configuration/Preferences.md) pour la configurer pour vous.
- Manually enact at least 20 of the temporary basal rate suggestions over a period of 7 days; input them to your pump and confirm in AAPS that you have accepted them.  Ensure this data shows in AAPS and Nightscout.
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

- Start to understand the thinking behind the temp basal recommendations by looking at the [determine basal logic](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html) and both the [forecast line in AAPS homescreen](Screenshots-prediction-lines)/Nightscout and the summary of outputs from the calculations in your OpenAPS tab.

Vous voudrez définir votre objectif plus haut que d'habitude jusqu'à ce que vous ayez confiance dans les calculs et les paramètres.  Le système permet

- une cible basse au minimum de 72 mg/dl (4 mmol/l) ou un maximum de 180 mg/dl (10 mmol/l)
- une cible haute au minimum de 90 mg/dl (5 mmol/l) et au maximum de 225 mg/dl (15 mmol/l)
- une cible temporaire en tant que simple valeur peut être n'importe où entre 72 mg/dl et 225 mg/dl (4 mmol/l et 15 mmol/l)

La cible est la valeur sur laquelle les calculs sont basés, et n'est pas la même que la page dans laquelle vous souhaitez avoir vos glycémies.  Si votre cible est très large (disons 50 mg/dl \[3 mmol/l\] ou plus de large), vous aurez souvent peu d'action de AAPS. C'est dû au fait que la glycémie devrait finalement se situer quelque part dans cette large plage, et par conséquent, peu de débits de base temporaires sont suggérés.

Vous pouvez essayer d'ajuster vos cibles pour qu'elles soient plus proches les unes des autres (disons 20 mg/dl \[1 mmol/l\] ou moins de large) et observer comment le comportement de votre système change en conséquence.

Vous pouvez afficher une plage plus large (lignes vertes) sur le graphique pour la zone dans laquelle vous souhaitez maintenir votre glycémie en entrant différentes valeurs dans [Préférences](../Configuration/Preferences.md) > Fourchette de visualisation.

![Stop sign](../images/sign_stop.png)

### Arrêtez-vous ici si vous est en boucle ouverte avec une pompe virtuelle - ne cliquez pas sur Vérifier à la fin de cet objectif.

![blank](../images/blank.png)

(Objectives-objective-6-starting-to-close-the-loop-with-low-glucose-suspend)=
## Objectif 6 : Démarrage de la boucle fermée avec le système AGB ( Arrêt pour Glycémie Basse )

![Warning sign](../images/sign_warning.png)

### La boucle fermée ne corrigera pas les glycémies élevées dans l'objectif 6, car elle est limitée à la suspension glycémie basse. Les hyperglycémies doivent être corrigées manuellement par vous !

- Prerequisite: You need a good profile (basal, ISF, IC) already working in AAPS to start with Loop in Low Glucose Suspend mode. Sinon, vous pouvez faire une hypo que vous devrez corriger manuellement. Cela vous aidera beaucoup à éviter d'avoir à traiter des glycémies faible sur une période de 5 jours. **Si vous avez toujours des hypoglycémies fréquentes ou sévères alors envisagez de réajuster votre DAI, ratios basal, SI et G/I et ne démarrez PAS l'objectif 6 pour le moment.**
- Vous n'avez pas à changer vos paramètres pour le moment. Au cours de l'objectif 6, le paramètre maxIA est automatiquement défini sur zéro. **Cette limitations sera supprimée lors du passage à l'objectif 7.**
- Le système remplacera vos paramètres maxIA à zéro, ce qui signifie que si la glycémie diminue, il peut réduire le débit de basal pour vous. Si la glycémie augmente, elle n'augmentera le débit de basal que si l'IA basale est négative du fait d'un Arrêt Glycémie Basse antérieur. Sinon, vos débits de basal resteront les mêmes que votre profil sélectionné. **Cela signifie que vous devez gérer manuellement vos glycémies élevées avec des corrections d'insuline.**
- Si votre IA basale est négative (voir copie d'écran ci-dessous) un DBT > 100% peut également être diffusé à l'objectif 6.

![Exemple IA négative](../images/Objective6_negIOB.png)

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
- Enable [autosens](../Usage/Open-APS-features.md) over a period of 7 days and watch the white line on the homescreen graph show how your sensitivity to insulin may be rising or falling as a result of exercise or hormones etc. and keep an eye in the OpenAPS report tab how AAPS is adjusting the basals and/or targets accordingly.

*Don’t forget to record your looping in* [this form](https://bit.ly/nowlooping) *logging AAPS as your type of DIY loop software, if you have not already done so.*

(Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)=
## Objectif 9 : Activation de fonctionnalités supplémentaires pour l'utilisation en journée, telles que la fonction SMB

- Vous devez lire le [chapitre SMB dans ce wiki](Open-APS-features-super-micro-bolus-smb) et le [chapitre oref1 dans la documentation openAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) pour comprendre comment les SMB fonctionnent, en particulier ce qu'il y a derrière le zéro-temp.
- Puis vous devez [augmenter le maxIA](Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob) pour que les SMB marchent correctement. maxIA inclu maintenant toutes les IA, pas seulement la basale ajoutée. Autrement dit, si vous faites un bolus de 8 U pour un repas et que maxIA est à 7 U, aucun SMB ne sera délivré jusqu'à ce que l'IA redescende en dessous de 7 U. Un bon début est maxIA = bolus moyen des repas + 3 x basale max quotidienne (basale max quotidienne = débit horaire max de basale sur n'importe quelle période de la journée - voir [Objectif 7](Objectives-objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets) pour une illustration)
- la valeur par défaut de min_5m_carbimpact est passée de 3 à 8 entre AMA et SMB. Si vous passez de AMA vers SMB, vous devez la modifier manuellement.

(Objectives-objective-10-automation)=
## Objectif 10: Automatisation

- Vous devez commencer l'objectif 10 pour pouvoir utiliser l'[Automatisation](../Usage/Automation.md).
- Assurez-vous d'avoir complété tous les objectifs, y compris l'examen [Objectif 3 prouver ses connaissances](Objectives#objective-3-prove-your-knowledge).
- Compléter les objectifs précédents n’affectera pas les autres objectifs que vous avez déjà terminés. Vous conserverez tous les objectifs terminés !

(Objectives-objective-11-DynamicISF)=
## Objective 11: Additional Features such as DynamicISF

- You have to start objective 11 to be able to use [DynamicISF](../Usage/Open-APS-features.md)

(Objectives-go-back-in-objectives)=
## Retour arrière dans les Objectifs

Si vous voulez revenir en arrière sur les objectifs terminés pour quelque raison que ce soit, vous pouvez le faire en cliquant sur "Refaire l'objectif".

![Retour arrières objectifs](../images/Objective_ClearFinished.png)

## Objectifs dans Android APS avant la version 3.0

Un objectif a été supprimé lors de la sortie d'Android APS 3.0.  Les utilisateurs d'AAPS version 2.8.2.1 qui sont sur des version d'Android plus anciens (par ex. antérieur à la version 9) utiliseront un jeu d'objectifs plus ancien qui peut être trouvé [ici](../Usage/Objectives_old.md).
