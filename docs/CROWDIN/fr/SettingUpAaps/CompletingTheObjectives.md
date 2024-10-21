# Compléter les objectifs

Dans **AAPS**, il y a une série d'**objectifs** que vous devez compléter pour passer de la boucle ouverte simple à la boucle fermée hybride, et avoir ainsi accès à l'ensemble des fonctionnalités d'**AAPS**. En complétant les **objectifs**, vous vous assurez que :

- Vous avez configuré correctement **AAPS**
- Vous avez compris les fonctionnalités essentielles d'**AAPS**
- Vous avez un minimum de compréhension de ce que fait le système, et donc de pourquoi vous pouvez lui faire confiance.

```{admonition} Note
:class: note

Exportez régulièrement vos paramètres **AAPS** après avoir terminé chaque **objectif** !
```

We strongly recommend that you  [export your settings](../Maintenance/ExportImportSettings.md) after completing each **objective**. Ce processus d'exportation génère un fichier de **paramètres** (.json) que vous devriez sauvegarder dans un ou plusieurs endroits sûrs (_par exemple_ Google Drive, disque dur, pièce jointe d'email _etc._). Vous vous assurez ainsi de conserver vos progrès dans les **objectifs** : si jamais vous effacez accidentellement vos progrès, vous pouvez simplement les recharger en important un fichier de paramètres récent. Avoir un fichier de sauvegarde des **paramètres** est également nécessaire si vous souhaitez changer votre smartphone **AAPS** pour quelque raison que ce soit (changement/perte/téléphone cassé, _etc._)

Le fichier **paramètres** sauvegardera non seulement votre progression à travers les objectifs, mais aussi l'ensemble de vos paramètres **AAPS** personnels tels que le **bolus maximal**, _etc._

Si vous n'avez pas de sauvegarde de vos **paramètres**, s'il arrive quoi que ce soit arrive à votre smartphone **AAPS**, vous devrez reprendre les **objectifs** au début.

Overall the **objectives** take around 6 weeks to complete (see [how long will it take?](../Getting-Started/PreparingForAaps.md#how-long-will-it-take-to-set-everything-up) for a detailed breakdown) from configuring **AAPS** on your smartphone to "basic" hybrid closed looping (from objective 1 to objective 8), so, although you _can_ proceed up to **objective 5** using a **virtual pump** (and using some other method of insulin delivery in the meantime), having to re-complete all the **objectives** because for example, you lost your smartphone, is still something you really want to avoid.

As well as progressing through the **objectives**, if you want, you can also remove your progress and [go back to an earlier objective](#go-back-in-objectives).

## Objectif 1 : Paramétrage de la visualisation et la surveillance des données, analyse des débits Basal et des ratios

- **AAPS** vérifie que votre configuration technique de base fonctionne.

Si ce n'est pas le cas, vous devrez corriger votre configuration jusqu'à ce que ça fonctionne pour **AAPS**.

- Select the correct CGMS/FGMS in [Config Builder](../SettingUpAaps/ConfigBuilder.md).  See [BG Source](../Getting-Started/CompatiblesCgms.md) for more information.
- Select the correct Pump in [Config Builder](../SettingUpAaps/ConfigBuilder.md) to ensure your pump can communicate with AAPS. Choisissez la **pompe virtuelle** si vous utilisez un modèle de pompe sans pilote **AAPS** pour la boucle, ou si vous voulez travailler sur les premiers **objectifs** tout en utilisant un autre système pour l'administration d'insuline. See [insulin pump](../Getting-Started/CompatiblePumps.md) for more information.
- Follow instructions in [Nightscout](../SettingUpAaps/Nightscout.md) page to ensure **Nightscout** can receive and display this data.
- Note that URL in **NSClient** must be **_without_ "/api/v1/"** at the end - see [NSClient settings in Preferences](../SettingUpAaps/Preferences.md#NSClient).

Note : _Vous devrez peut-être attendre la prochaine lecture de glycémie avant qu'elle n'arrive dans **AAPS**._

## Objectif 2 : Apprendre à contrôler AAPS

- Cet **objectif** vous demandera de faire diverses manipulations dans AAPS.
- Cliquez sur le texte orange "Pas encore terminé" pour accéder à la liste des tâches.
- Des liens vous sont donnés pour vous guider si vous n'êtes pas encore familier avec une tâche particulière.

  ![Screenshot objective 2](../images/Objective2_V2_5.png)
- Les tâches à terminer dans l'**Objectif 2** sont :
  - Exécutez votre profil à 90% pendant 10 min (_Astuce_ : appuyez longuement sur le nom de votre profil sur l'écran d'accueil) (_Note_ : AAPS n'accepte pas les débits basaux inférieurs à 0.05U/h. Si vous utilisez dans votre profil, un débit basal de 0.06U/h ou moins, vous devrez créer un nouveau profil avec un débit basal plus élevé pour pouvoir compléter cette tâche. Revenez à votre profil normal après avoir terminé cette tâche.)
  - Faites comme si vous "preniez une douche" en déconnectant votre pompe dans **AAPS** pour une durée de 1h (_Astuce_ : appuyez sur l'icône Boucle sur l'écran d'accueil pour ouvrir la fenêtre Boucle)
  - Terminez la simulation de "douche" en reconnectant votre pompe (_Astuce_ : appuyez sur l'icône Déconnecté pour ouvrir la fenêtre de dialogue de la Boucle)
  - Définissez une cible temporaire personnalisée pour une durée de 10 min (_Astuce_ : appuyez sur le bouton Cible sur l'écran d'accueil pour faire apparaître la fenêtre Cibles temporaires)
  - Cochez le plugin **Actions** dans la **Configuration** pour le faire apparaître dans la barre de menu défilable en haut (_Astuce_ : Allez dans la **Configuration** et descendez jusqu'à la section 'Général')
  - Affichez la page du plug-in "Boucle"
  - Changez l'échelle du graphique de glycémie pour visualiser des périodes plus longues ou plus courtes : basculez entre 6h, 12h, 18h, 24h de données passées (_Astuce_: appuyez longuement sur le graphique)

(Objectives-objective-3-prove-your-knowledge)=

## Objectif 3 : Prouver ses connaissances

- Vous allez ici passer un test sous forme de questionnaire à choix multiples pour vérifier vos connaissances sur **AAPS**.

Certains utilisateurs trouvent que l'**Objectif 3** est le plus difficile à compléter. Veuillez lire la documentation **AAPS** en rapport avec les questions. Si vous êtes vraiment coincé après avoir cherché dans la documentation **AAPS**, faites une recherche dans le groupe [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) (en anglais) avec le terme "Objective 3" (car il est probable que votre question ait déjà été posée - et que quelqu'un y ait répondu). Si vous êtes toujours bloqué, demandez sur le groupe [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) ou [Discord](https://discord.gg/4fQUWHZ4Mw). Ces groupes peuvent fournir des indices en toute bienveillance, ou vous rediriger vers la partie appropriée de la documentation **AAPS**.

Pour avancer dans l'**Objectif 3**, cliquez sur le texte orange "**Pas encore complété**" pour accéder à la question en cours. Veuillez lire attentivement chaque question et sélectionner votre(s) réponse(s).

- Pour réduire le nombre de décisions proposées en mode Boucle Ouverte, définissez une plage cible étendue, _par ex_ 90 - 150 mg/dl ou 5.0 - 8.5 mmol/l.

- Vous pouvez même augmenter encore la limite supérieure, ou même désactiver la Boucle ouverte, pendant la nuit.

Pour chaque question, il peut y avoir une ou plusieurs réponses correctes ! Si vous sélectionnez une proposition incorrecte, la question sera bloquée pendant un certain temps (60 minutes) avant que vous ne puissiez faire une nouvelle tentative. Notez que l'ordre des propositions peut changer lorsque vous essayez de répondre à nouveau ; ceci pour faire en sorte que vous lisiez attentivement et réfléchissiez vraiment à la validité (ou non) de chaque proposition.

Lorsque **AAPS** est installé pour la première fois, vous devrez compléter l'intégralité de l'**Objectif 3** avant de pouvoir passer à l'**Objectif 4**. Chaque objectif doit être complété dans l'ordre séquentiel. De nouvelles fonctionnalités sont progressivement débloquées au fur et à mesure que vous progressez dans les objectifs.

```{admonition} __What happens if new question(s) are added to an Objective when I update to a newer version of AAPS?__
:class: Note
De temps en temps, de nouvelles fonctionnalités sont ajoutées à **AAPS** qui peuvent nécessiter l'ajout d'une nouvelle question aux objectifs, en particulier à l'objectif 3. En conséquence, toute nouvelle question ajoutée à l'**Objectif 3** sera marquée comme étant « incomplète » et **AAPS** vous demandera d'y répondre. Ne vous inquiétez pas, puisque chaque **Objectif** est indépendant, vous **ne perdrez pas les fonctionnalités existantes d'AAPS**, à condition que les autres objectifs soient complétés.
```

## Objectif 4 : Démarrage de la boucle ouverte

Durant cet objectif, vous comprendrez à quelle fréquence **AAPS** évalue l'impact du débit basal sur la glycémie, et recommande des ajustements temporaires de ce débit. Dans le cadre de cet objectif, vous allez activer pour la première fois la boucle ouverte et accepter manuellement sur votre pompe 20 changements de débit basal temporaire proposés. De plus, vous allez observer l'impact des cibles temporaires (personnalisées ou pré-configurées, _par ex_ pour l'activité ou les hypos). If you are not familiar with setting a temporay basal rate change in **AAPS** yet, please refer to the [ACTIONS tab](../DailyLifeWithAaps/AapsScreens.md#action-tab).

Temps estimé pour terminer cet objectif : **7 jours**. Vous serez obligé d'attendre que ce temps soit écoulé. Vous ne pouvez pas passer à l'objectif suivant avant, même si vous avez réalisé tous les changements de débit basal.

- Sélectionnez la Boucle Ouverte soit à partir du menu "Préférences", soit en faisant un appui long sur le bouton Boucle en haut à gauche de l'écran d'accueil.
- Walk through the [Preferences](../SettingUpAaps/Preferences.md) to set it up for you (scroll down to "Loop/APS Mode" and select "Open Loop".
- Acceptez manuellement au moins 20 suggestions de débits de base temporaires sur une période de 7 jours; entrez-les dans votre pompe (réelle) et confirmez dans AAPS que vous les avez acceptés. Assurez-vous que ces ajustements de débit basal apparaissent dans AAPS et Nightscout.
- Enable [temp targets](../DailyLifeWithAaps/TempTargets.md) if necessary. Après avoir traité une hypo, utilisez la cible temporaire d'hypo pour empêcher le système de trop corriger lors du rebond de glycémie.

### Réduire le nombre de notifications

- Pour réduire le nombre de suggestions de changement de débit basal en mode Boucle Ouverte, définissez une plage cible étendue comme 90 - 150 mg/dl ou 5.0 - 8.5 mmol/l.
- Vous pouvez même augmenter encore la limite supérieure (ou désactiver la Boucle ouverte) pendant la nuit.
- Vous pouvez définir un pourcentage minimum pour les changements de débit basal proposés afin de modifier le nombre de notifications déclenchées.

  ![Open Loop minimal request change](../images/OpenLoop_MinimalRequestChange2.png)

```{admonition} You don't need to action each and every system recommendation!
:class: Note
```

(Objectives-objective-5-Understanding-your-open-loop-including-its-temp-basal-recommendations)=

## Objectif 5 : Compréhension de la Boucle Ouverte, y compris les propositions de débits Basal temporaires

Dans le cadre de l'**Objectif 5**, vous allez commencer à comprendre comment les recommandations de basal temporaire sont calculées. This includes the [determination of basal logic](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html), analyzing the impact by observing [prediction lines in AAPS OVERVIEW](../DailyLifeWithAaps/AapsScreens.md#prediction-lines)/Nightscout and looking at detailed calculations shown on your OPENAPS tab.

Temps estimé pour terminer cet objectif : **7 jours**.

This Objective requires you to determine and set your “Max U/h a temp basal can be set to” (max-basal) value as described in [OpenAPS-features](../DailyLifeWithAaps/KeyAapsFeatures.md#max-uh-a-temp-basal-can-be-set-to-openaps-max-basal). Cette valeur est à définir dans Préférences > OpenAPS.
Assurez-vous que ce paramètre de sécurité est défini à la fois dans **AAPS** et dans votre pompe à insuline.

Vous voudrez peut-être fixer une cible de glycémie un peu plus haute que d'habitude jusqu'à ce que vous ayez confiance dans les calculs et les paramètres.

**AAPS** autorise :

- pour la cible basse, un minimum de 72 mg/dl (4 mmol/l) à un maximum de 180 mg/dl (10 mmol/l)
- pour la cible haute : un minimum de 90 mg/dl (5 mmol/l) à un maximum de 225 mg/dl (15 mmol/l)
- pour une cible temporaire (valeur unique) : n'importe quelle valeur entre 72 mg/dl et 225 mg/dl (4 mmol/l à 15 mmol/l)

Votre cible est un paramètre essentiel. Tous les calculs sont basés dessus. Ce n'est pas la même chose que la plage cible dans laquelle vous essayez généralement de maintenir votre glycémie. Si votre cible est très étendue (par ex un écart de 50 mg/dl [3 mmol/l] ou plus, entre le minimum et le maximum), vous aurez de manière générale peu de changements proposés par AAPS. C'est dû au fait que, dans les prédictions, la glycémie devrait à un moment se situer quelque part dans cette plage étendue, et donc AAPS suggère rarement des changements de débit de base temporaires.

Vous pouvez faire des tests avec une cible plus restreinte (par ex 20 mg/dl [1 mmol/l] d'écart ou moins) et observer le comportement qui en résulte.

You can adjust (widen or tighten) the graph’s green area, representing your target range, by entering different values in [Preferences](../SettingUpAaps/Preferences.md) > Overview > Range for Visualisation.

![Stop sign](../images/sign_stop.png)

```{admonition} If you have been using a virtual pump, change to a real insulin pump now!
:class: note

Si vous êtes en boucle ouverte avec une pompe virtuelle, arrêtez-vous ici. Cliquez sur vérifier à la fin de cet objectif seulement une fois que vous aurez changé pour utiliser une pompe physique réelle.
```

![blank](../images/blank.png)

(Objectives-objective-6-starting-to-close-the-loop-with-low-glucose-suspend)=

## Objectif 6 : Démarrage de la boucle fermée avec le système AGB ( Arrêt pour Glycémie Basse )

![Warning sign](../images/sign_warning.png)

```{admonition} Closed loop will not correct high BG values in objective 6 as it is limited to low glucose suspend only!
:class: Note
Vous devrez toujours corriger les glycémies élevées vous-même (manuellement avec des corrections par pompe ou stylo) !
```

As part of **Objective 6** you will close the loop and activate its Low Glucose Suspend (LGS) mode while [max IOB](../DailyLifeWithAaps/KeyAapsFeatures.md#maximum-total-iob-openaps-cant-go-over-openaps-max-iob) is set to zero. Vous devez rester en mode AGB pendant 5 jours pour terminer cet objectif. Vous devriez mettre à profit ce temps pour vérifier si vos paramètres de profil sont justes et ne déclenchent pas trop souvent d'événement AGB.

Temps estimé pour terminer cet objectif : **5 jours**.

Il est crucial que votre profil actuel (basal, SI, G/I) soit bien testé avant de passer la boucle en mode Arrêt Glycémie Basse. Des paramètres de profil incorrects pourraient vous amener dans des situations d'hypo qui doivent être traitées manuellement. Un profil bien ajusté vous évitera d'avoir besoin de traiter des hypos pendant cette période de 5 jours.

**Si vous observez encore des hypoglycémies sévères ou fréquentes, alors envisagez de réajuster votre DAI, basal, SI et ratio G/I.**

Au cours de l'objectif 6, **AAPS** se chargera de fixer max-IA à zéro, quelle que soit la valeur configurée dans les paramètres. **Cette surcharge à 0 du paramètre sera annulée lorsque vous serez à l'objectif 7.**

Cela signifie que lorsque vous êtes à l'Objectif 6, si la glycémie chute, **AAPS** réduira l'administration d'insuline basale pour vous. Si la glycémie augmente, **AAPS** ne pourra augmenter le débit basal au-delà de la valeur du profil que si l'IA basale est négative à la suite d'un Arrêt Glycémie Basse précédent. Sinon, **AAPS** n'augmentera pas le basal au-dessus de la valeur définie dans votre profil, même si la glycémie augmente. Cette précaution vise à éviter les hypos pendant que vous apprenez à utiliser **AAPS**.

**Par conséquent, vous devez gérer les glycémies élevées avec des bolus de correction manuels.**

- Si votre IA basale est négative (voir copie d'écran ci-dessous), un taux basal temporaire (TBR) > 100% peut être activé à l'objectif 6.

![Example negative IOB](../images/Objective6_negIOB.png)

- Définissez votre cible légèrement plus haute que d'habitude, par pure précaution et pour avoir un peu plus de marge de sécurité.
- Activez le mode 'Arrêt Glycémie Basse' en appuyant sur l'icône Boucle en haut à droite de l'écran d'accueil et en sélectionnant l'icône Boucle AGB.
- Vous pouvez voir le basal temporaire actif sur l'écran d'accueil grâce au texte de basal turquoise, et en voir l'historique avec la courbe de basal turquoise du graphique.
- Vous pouvez subir temporairement des pics de glycémie à la suite d'hypos sans pouvoir augmenter le débit de base sur le rebond.

(Objectives-objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets)=

## Objectif 7 : Réglage de la Boucle Fermée, augmentation de l'IA (Insuline Active) maximale au dessus de 0 et abaissement progressif des cibles glycémiques

To complete **Objective 7** you have to close your loop and raise your [maxIOB](../DailyLifeWithAaps/KeyAapsFeatures.md#maximum-total-iob-openaps-cant-go-over-openaps-max-iob). Pendant l'**objectif 6**, le paramètre max-IA était automatiquement considéré comme étant à 0. Ce n'est plus le cas. **AAPS** va commencer à utiliser la valeur max-IA telle que définie pour corriger les valeurs de glycémie élevées.

Temps estimé pour terminer cet objectif : 1 jour.

- Select 'Closed Loop' either from [Preferences](../SettingUpAaps/Preferences.md) or by pressing and holding the Loop icon at the top right corner of the OVERVIEW screen, over a period of 1 day.

- Augmentez votre 'IA max total qu'OpenAPS ne peut pas dépasser' (dans OpenAPS appelé 'max-IA') au-dessus de 0. La recommandation par défaut est "moyenne bolus repas + 3 x max basal quotidienne" (pour l'algorithme SMB) ou "3 x max basal quotidienne" (pour l'algorithme AMA) mais vous devriez augmenter la valeur très progressivement jusqu'à ce maximum, jusqu'à trouver vos propres paramètres qui marchent pour vous (max basal quotidienne = le débit de base maximum sur l'ensemble des plages horaires de la journée).

Cette recommandation doit être considérée comme un point de départ. Si vous le réglez sur 3x et que vous trouvez qu'AAPS donne trop d'insuline quand la glycémie monte, baissez la valeur "IA totale maximale pour OpenAPS". Au contraire, si vous êtes très résistant à l'insuline, augmentez-le très prudemment.

![max daily basal](../images/MaxDailyBasal2.png)

- Une fois confiant sur la quantité d'IA qui convient à votre profil de boucle, réduisez alors votre cible jusqu'à votre objectif réel.

(Objectives-objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens)=

## Objectif 8 : Ajustement des débits Basal et des ratios si nécessaire, puis activation de la fonction auto-sens

Dans le cadre de cet objectif, vous allez contrôler la justesse de votre profil et utiliser la fonctionnalité autosens pour détecter des paramètres incorrects.

Temps estimé pour terminer cet objectif : **7 jours**.

- Vous pouvez utiliser [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) une seule fois pour vérifier que vos taux de basale sont toujours correct ou faire un test de basale traditionnel.
- Enable [autosens](../DailyLifeWithAaps/KeyAapsFeatures.md) over a period of 7 days and watch OVERVIEW's graph white line showing your insulin sensitivity rising or falling due to exercise or hormones etc. and keep an eye on the OpenAPS report tab which shows **AAPS** adjusting the basals and/or targets accordingly.

(Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)=

## Objectif 9 : Activation de fonctionnalités supplémentaires pour l'utilisation en journée, telles que la fonction SMB

Dans cet objectif, vous découvrez l'utilisation des "Super Micro Bolus (SMB)", une fonctionnalité très importante. Après avoir lu la documentation appropriée, vous aurez une bonne compréhension de ce que sont les SMB, de leur fonctionnement, et de pourquoi la basale est mise à zéro temporairement après l'envoi d'un SMB ("zero-temp"). Temps estimé pour terminer cet objectif : 28 jours.

- The [SMB section in this documentation](../DailyLifeWithAaps/KeyAapsFeatures.md#super-micro-bolus-smb) and [oref1 coverage in the openAPSdocs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) are must-reads to understand SMB and the concept of zero-temping.
- Once done, you [raise maxIOB](../DailyLifeWithAaps/KeyAapsFeatures.md#maximum-total-iob-openaps-cant-go-over-openaps-max-iob) to get SMBs working well. max-IA inclut maintenant toutes les IA, pas seulement la basale excédentaire. Ce seuil désactive les SMB jusqu'à ce que l'IA descende sous cette valeur (_par ex._ si max-IA est fixé à 7U et un bolus de 8U est donné pour couvrir un repas : les SMB seront suspendus et ne seront pas donnés jusqu'à ce que l'IA descende en dessous de 7U). A good start is setting maxIOB = average mealbolus + 3x max daily basal (max daily basal = the maximum hourly value in any time segment of the day - see [objective 7](#objective-7-tuning-the-closed-loop-raising-maxiob-above-0-and-gradually-lowering-bg-targets) as reference)
- Changez le paramètre "min_5m_carbimpact" (Préférences > Paramètres d'absorption > min_5m_carbimpact) à 8 lorsque vous passez de l'algorithme OpenAPS AMA à OpenAPS SMB. Pour AMA, la valeur par défaut est 3. Read more about this setting [here](../SettingUpAaps/Preferences.md#min_5m_carbimpact)

(Objectives-objective-10-automation)=

## Objectif 10: Automatisation

Ce n'est qu'à partir de l'objectif 10 que vous pouvez utiliser les Automatisations.

1. Read the documentation page  [Automation](../DailyLifeWithAaps/Automations.md) first.
2. Mettez en place une règle d'automatisation toute simple ;
   par exemple déclencher une notification Android dans quelques minutes :

- Sélectionnez l'onglet des automatisations
- Dans le menu 3 points en haut à droite, sélectionnez Ajouter une règle
- Entez un nom de tâche comme "Ma première notification automatique"
- "Éditer" l'"État" (la condition de déclenchement)
  - cliquez sur le symbole "+" pour ajouter le premier déclencheur
  - sélectionnez "Heure" & "OK", cela créera une entrée par défaut à la date et heure actuelles
  - cliquez sur la partie MINUTE et modifiez l'heure de telle sorte qu'elle se déclenche dans quelques minutes. Puis cliquez sur OK pour fermer
  - cliquez sur OK pour fermer l'écran des déclencheurs
- Cliquez sur "Ajout" d'une "Action"
  - sélectionnez "Notification", "OK"
  - cliquez sur "Notification" pour modifier le message, entrez quelque chose comme "Ma première automatisation"
- attendez le temps que la notification se déclenche (notez qu'en fonction de votre téléphone, cela peut être quelques minutes plus tard)

4. Testez la mise en place d'une automatisation plus utile.

- La page de documentation donne quelques exemples, et vous pouvez rechercher des captures d'écran d'"automatisations" sur le groupe [Facebook](https://www.facebook.com/groups/AndroidAPSUsers). La plupart des gens mangent la même chose pour le petit déjeuner à la même heure les matins d'école/travail. Un cas d'utilisation assez courant est de définir une "cible-avant-petitdéj" pour baisser légèrement la cible 30 mn avant de déjeuner. Dans ce cas, votre déclencheur utilisera probablement "Période répétitive" qui permet de sélectionner des jours spécifiques de la semaine (Lundi, Mardi, Mercredi, Jeudi, Vendredi) et une heure précise (06h30). Pour l'action, il s'agit de "Démarrer la cible temporaire" avec une valeur cible et une durée de 30 minutes.

## Objectif 11 : Activation de fonctionnalités supplémentaires pour l'utilisation en journée, comme le plugin de Sensibilité Dynamique (DynISF).

- Assurez-vous que les SMB fonctionnent correctement
- Read the documentation concerning Dynamic ISF [here](../DailyLifeWithAaps/DynamicISF.md)
- Recherchez dans les groupes Facebook et [Discord](https://discord.gg/4fQUWHZ4Mw) les discussions à propos de la SI dynamique et lisez les expériences et recommandations d'autres utilisateurs.
- Activez le **plugin SI Dynamique** et travaillez à la recherche de paramètres adaptés à votre propre corps. Il est conseillé de commencer avec une valeur inférieure à 100% pour des raisons de sécurité.

(Objectives-go-back-in-objectives)=

## Retour arrière dans les Objectifs

Si vous voulez revenir en arrière sur les objectifs terminés pour quelque raison que ce soit, vous pouvez le faire en cliquant sur "Réinitialiser l'état terminé".

![Go back in objectives](../images/Objective_ClearFinished.png)

## Objectifs dans Android APS avant la version 3.0

Un objectif a été supprimé lors de la sortie d'**AAPS** 3.0.  Users of Android APS version 2.8.2.1 who are on older Android software (_i.e._ earlier than version 9) will be using an older set of Objectives which can be found [here].
