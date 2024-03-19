# Objectifs pour Android APS 2.8.2.1

Ce n'est pas la dernière version des objectifs d'Android APS.  Cette page détaille les Objectifs qui étaient en place avant la version 3.0.  Anyone using an older version of Android (i.e. prior to Android 9) and Android APS version 2.8.2.1 should refer to this page.

Please see [this page](../Usage/Objectives.md) for the current set of Objectives.

AndroidAPS a une série d'objectifs qui doivent être complétés pour vous guider à travers les fonctionnalités et les paramètres de la boucle sécurisée.  Ils s'assurent que vous avez correctement configuré tout ce qui est détaillé dans les sections ci-dessus, et que vous comprenez ce que votre système fait et pourquoi vous pouvez lui faire confiance.

If you are **upgrading phones** then you can [export your settings](../Usage/ExportImportSettings.md) to keep your progress through the objectives. Not only will your progress through the objectives be saved, but also your safety settings such as max bolus etc.  If you do not export and import your settings then you will need to start the objectives from the beginning again.  It is a good idea to [backup your settings](../Usage/ExportImportSettings.html) frequently just in case.

If you want to go back in objectives see [explanation below](../Usage/Objectives.md#go-back-in-objectives).

## Objectif 1 : Paramétrage de la visualisation et la surveillance des données, analyse des débits Basal et des ratios

- Select the right blood glucose source for your setup.  See [BG Source](../Configuration/BG-Source.md) for more information.
- Select the right Pump in ConfigBuilder (select Virtual Pump if you are using a pump model with no AndroidAPS driver for looping) to ensure your pump status can communicate with AndroidAPS.
- If using DanaR pump then ensure you have followed [DanaR Insulin Pump](../Configuration/DanaR-Insulin-Pump.md) instructions to ensure the link between pump and AndroidAPS.
- Follow instructions in [Nightscout](../Installing-AndroidAPS/Nightscout.md) page to ensure Nightscout can receive and display this data.
- Note that URL in NSClient must be **WITHOUT /api/v1/** at the end - see [NSClient settings in Preferences](../Configuration/Preferences.md#nsclient).

*You may need to wait for the next blood glucose reading to arrive before AndroidAPS will recognise it.*

## Objectif 2 : Apprendre comment contrôler AndroidAPS

- Perform several actions in AndroidAPS as described in this objective.

- Click on the orange text "Not completed yet" to access the to-dos.

- Links will be provided to guide you in case you are not familiar with a specific action yet.

  ```{image} ../images/Objective2_V2_5.png
  :alt: Screenshot objective 2
  ```

## Objectif 3 : Prouver ses connaissances

- Pass a multiple-choice exam testing your AndroidAPS knowledge.

- Click on the orange text "Not completed yet" to access the page with the question and answering options.

  ```{image} ../images/Objective3_V2_5.png
  :alt: Screenshot objective 3
  ```

- Links will be provided to guide you in case you are unsure about the correct answers yet.

- The questions for objective 3 have been completely rewritten by native speakers as of AAPS 2.8. Les nouvelles questions couvrent les mêmes sujets de base et quelques nouveaux sujets.

- These new questions will lead to some not answered questions even though you have successfully completed objective 3 in previous versions.

- Unanswered questions will affect you only if you start a new objective. En d'autres termes, si vous avez déjà terminé tous les objectifs, vous pouvez attendre et répondre aux nouvelles questions un peu plus tard sans perdre de fonctions AAPS.

## Objectif 4 : Démarrage de la boucle ouverte

- Select Open Loop either from Preferences, or by pressing and holding the Loop button in top left of the home screen.
- Work through the [Preferences](../Configuration/Preferences.md) to set up for you.
- Manually enact at least 20 of the temporary basal rate suggestions over a period of 7 days; input them to your pump and confirm in AndroidAPS that you have accepted them.  Assurez-vous que ces données apparaissent bien dans AndroidAPS et dans Nightscout.
- Enable [temp targets](../Usage/temptarget.md) if necessary. Utilisez des cibles temp. hypo temp pour éviter que le système ne corrige trop fortement une augmentation de la glycémie après une hypo.

### Réduire le nombre de notifications

- To reduce the Number of decisions to be made while in Open Loop set wide target range like 90 - 150 mg/dl or 5,0 - 8,5 mmol/l.

- You might even want to wider upper limit (or disable Open Loop) at night.

- In Preferences you can set a minimum percentage for suggestion of basal rate change.

  ```{image} ../images/OpenLoop_MinimalRequestChange2.png
  :alt: Boucle ouverte Changement minimum
  ```

- Also, you do not need to act every 5 minutes on all suggestions...

## Objectif 5 : Compréhension de la Boucle Ouverte, y compris les propositions de débits Basal temporaires

- Start to understand the thinking behind the temp basal recommendations by looking at the [determine basal logic](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html) and both the [forecast line in AndroidAPS homescreen](../Getting-Started/Screenshots.md#prediction-lines)/Nightscout and the summary of outputs from the calculations in your OpenAPS tab.

Vous voudrez définir votre objectif plus haut que d'habitude jusqu'à ce que vous ayez confiance dans les calculs et les paramètres.  Le système permet

- a low target to be a minimum of 4 mmol (72 mg/dl) or maximum of 10 mmol (180 mg/dl)
- a high target to be a minimum of 5 mmol (90 mg/dl) and maximum of 15 mmol (225 mg/dl)
- a temporary target as a single value can be anywhere in the range of 4 mmol to 15 mmol (72 mg/dl to 225 mg/dl)

La cible est la valeur sur laquelle les calculs sont basés, et n'est pas la même que la page dans laquelle vous souhaitez avoir vos glycémies.  If your target is very wide (say, 3 or more mmol \[50 mg/dl or more\] wide), you will often find little AAPS action. C'est dû au fait que la glycémie devrait finalement se situer quelque part dans cette large plage, et par conséquent, peu de débits de base temporaires sont suggérés.

You may want to experiment with adjusting your targets to be a closer together range (say, 1 or less mmol \[20 mg/dl or less\] wide) and observe how the behavior of your system changes as a result.

You can view a wider range (green lines) on the graph for the values you aim to keep your blood glucose within by entering different values in [Preferences](../Configuration/Preferences.md) > Range for Visualisation.

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

### La boucle fermée ne corrigera pas les valeurs de glycémies élevées dans l'objectif 6, car elle est limitée à la suspension glycémie basse. Les hyperglycémies doivent être corrigées manuellement par vous !

- Select Closed Loop either from [Preferences](../Configuration/Preferences.md) or by pressing and holding the Open Loop button in the top left of the home screen.

- Set your target range slightly higher than you usually aim for, just to be safe.

- Watch  how temporary basals are active by viewing the blue basal text on the homescreen or the blue basal render on the homescreen graph.

- Ensure your settings have supported AndroidAPS to avoid having to treat a low glucose over a period of 5 days.  Si vous avez encore des hypoglycémies sévères ou fréquentes, alors envisagez de réajuster votre DAI, basal, SI et ratio G/I.

- You don't have to change your settings. Au cours de l'objectif 6, le paramètre maxIA est automatiquement défini sur zéro. Le remplacement par zéro de ce paramètre sera annulé lorsque vous serez à l'objectif 7.

- The system will override your maxIOB settings to zero, which means if blood glucose is dropping it can reduce basal for you, but if blood glucose is rising then it will only increase basal if the basal IOB is negative (from a previous Low Glucose Suspend), otherwise basal rates will remain the same as your selected profile.

  ```{image} ../images/Objective6_negIOB.png
  :alt: Exemple IA négative
  ```

- If your basal IOB is negative (see screenshot above) a TBR > 100% can be issued also in objective 6.

- Vous pouvez subir temporairement des pics de glycémie à la suite d'hypos sans pouvoir augmenter le débit de base sur le rebond.

## Objectif 7 : Réglage de la Boucle Fermée, augmentation de l'IA (Insuline Active) maximale au dessus de 0 et abaissement progressif des cibles glycémiques

- Raise your 'Maximum total IOB OpenAPS can’t go over' (in OpenAPS called 'max-iob') above 0 over a period of 1 day, the default recommendation is "average mealbolus + 3x max daily basal"(for SMB algorithm) or "3x max daily basal" (for older AMA algorithm) but you should slowly work up to this until you know your settings work for you (max daily basal = the maximum hourly value in any time segment of the day).

  Cette recommandation doit être considérée comme un point de départ. Si vous paramétrez 3 x et que vous constatez des variations dures et rapides, alors diminuez cette valeur. Si vous êtes très résistant, augmentez la un peu à la fois.

  ```{image} ../images/MaxDailyBasal2.png
  :alt: max daily basal
  ```

- Once confident on how much IOB suits your looping patterns then reduce your targets to your desired level.

## Objectif 8 : Ajustement des débits Basal et des ratios si nécessaire, puis activation de la fonction auto-sens

- You can use [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) as a one off to check your basals remain accurate or do a traditional basal test.
- Enable [autosens](../Usage/Open-APS-features.md) over a period of 7 days and watch the white line on the homescreen graph show how your sensitivity to insulin may be rising or falling as a result of exercise or hormones etc. and keep an eye in the OpenAPS report tab how AndroidAPS is adjusting the basals and/or targets accordingly.

*Don’t forget to record your looping in* [this form](https://bit.ly/nowlooping) *logging AndroidAPS as your type of DIY loop software, if you have not already done so.*

## Objective 9 : Activation de fonctionnalités supplémentaires pour l'utilisation en journée, telles que la fonction SMB

- Before AAPS version 2.7 meal assist (MA) was the basic algorithm for AAPS and completing objective 8 was necessary to activate [advanced meal assist (AMA)](../Usage/Open-APS-features.md#advanced-meal-assist-ama).
- As [advanced meal assist (AMA)](../Usage/Open-APS-features.md#advanced-meal-assist-ama) is the standard algorithm from AAPS version 2.7 onwards use the following 28 days to try features you haven't used yet and get more confident with you closed loop system.

## Objectif 10 : Activation de fonctionnalités supplémentaires pour l'utilisation en journée, telles que la fonction SMB

- You must read the [SMB chapter in this wiki](../Usage/Open-APS-features.md#super-micro-bolus-smb) and [chapter oref1 in openAPSdocs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) to understand how SMB works, especially what's the idea behind zero-temping.
- Then you ought to [rise maxIOB](../Usage/Open-APS-features.md#maximum-total-iob-openaps-cant-go-over-openaps-max-iob) to get SMBs working fine. maxIA inclu maintenant toutes les IA, pas seulement la basale ajoutée. That is, if given a bolus of 8 U for a meal and maxIOB is 7 U, no SMBs will be delivered until IOB drops below 7 U. A good start is maxIOB = average mealbolus + 3x max daily basal (max daily basal = the maximum hourly value in any time segment of the day - see [objective 7](../Usage/Objectives#objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets) for an illustration)
- min_5m_carbimpact default in absorption settings has changed from 3 to 8 going from AMA to SMB. Si vous passez de AMA vers SMB, vous devez la modifier manuellement.

## Objectif 11: Automatisation

- You have to start objective 11 to be able to use [Automation](../Usage/Automation.md).
- Make sure you have completed all objectives including exam [../Usage/Objectives.md#objective-3-prove-your-knowledge](../Usage/Objectives#objective-3-prove-your-knowledge).
- Completing previous objectives will not effect other objectives you have already finished. Vous conserverez tous les objectifs terminés !

## Retour arrière dans les Objectifs

Si vous voulez revenir en arrière sur les objectifs terminés pour quelque raison que ce soit, vous pouvez le faire en cliquant sur "Refaire l'objectif".

```{image} ../images/Objective_ClearFinished.png
:alt: Retour arrières objectifs
```
