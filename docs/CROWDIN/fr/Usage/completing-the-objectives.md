# Compléter les objectifs

Dans **AAPS**, il y a une série d'**objectifs** que vous devez compléter pour passer de la boucle ouverte simple à la boucle fermée hybride, et avoir ainsi accès à l'ensemble des fonctionnalités d'**AAPS**. En complétant les **objectifs**, vous vous assurez que :

- Vous avez configuré correctement **AAPS**
- Vous avez compris les fonctionnalités essentielles d'**AAPS**
- Vous avez un minimum de compréhension de ce que fait le système, et donc de pourquoi vous pouvez lui faire confiance.

```{admonition} Note
:class: note

Exportez régulièrement vos paramètres **AAPS** après avoir terminé chaque **objectif** !
```

Nous recommandons vivement d'[exporter vos paramètres](../Usage/ExportImportSettings.md) à la fin de chaque **objectif**. Ce processus d'exportation génère un fichier de **paramètres** (.json) que vous devriez sauvegarder dans un ou plusieurs endroits sûrs (_par exemple_ Google Drive, disque dur, pièce jointe d'email _etc._). Vous vous assurez ainsi de conserver vos progrès dans les **objectifs** : si jamais vous effacez accidentellement vos progrès, vous pouvez simplement les recharger en important un fichier de paramètres récent. Avoir un fichier de sauvegarde des **paramètres** est également nécessaire si vous souhaitez changer votre smartphone **AAPS** pour quelque raison que ce soit (changement/perte/téléphone cassé, _etc._)

Le fichier **paramètres** sauvegardera non seulement votre progression à travers les objectifs, mais aussi l'ensemble de vos paramètres **AAPS** personnels tels que le **bolus maximal**, _etc._

Si vous n'avez pas de sauvegarde de vos **paramètres**, s'il arrive quoi que ce soit arrive à votre smartphone **AAPS**, vous devrez reprendre les **objectifs** au début.

Dans l'ensemble, les **objectifs** prendront environ 6 semaines à compléter (voir [combien de temps cela prendra-t-il?](preparing-how-long-will-it-take?) pour le détail), de la configuration d'**AAPS** sur votre smartphone jusqu'à la boucle fermée hybride "de base" (de l'objectif 1 à l'objectif 8), donc, bien que vous _puissiez_ aller jusqu'à l'**objectif 5** en utilisant une **pompe virtuelle** (et en utilisant une autre méthode d'administration d'insuline entre-temps), devoir recommencer tous les **objectifs** parce que vous avez par exemple perdu votre smartphone, est quelque chose que vous voulez vraiment éviter.

Lors de votre progression dans les **objectifs**, si vous le souhaitez, vous pouvez également supprimer votre progression et [retourner à un objectif précédent](Objectives-go-back-in-objectives).

## Objectif 1 : Paramétrage de la visualisation et la surveillance des données, analyse des débits Basal et des ratios

- **AAPS** vérifie que votre configuration technique de base fonctionne.

Si ce n'est pas le cas, vous devrez corriger votre configuration jusqu'à ce que ça fonctionne pour **AAPS**.

- Sélectionnez le MGC/MGF approprié dans le [Générateur de configuration](../Configuration/Config-Builder.md).  Voir [MGCs compatibles](../Configuration/BG-Source.html) pour plus d'informations.
- Sélectionnez la pompe appropriée dans le [Générateur de configuration](../Configuration/Config-Builder.md) pour vous assurer que votre pompe peut communiquer avec AAPS. Choisissez la **pompe virtuelle** si vous utilisez un modèle de pompe sans pilote **AAPS** pour la boucle, ou si vous voulez travailler sur les premiers **objectifs** tout en utilisant un autre système pour l'administration d'insuline. Voir [Pompes compatibles](../Getting-Started/Pump-Choices.md) pour plus d'informations.
- Suivez les instructions de la page [Nightscout](../Installing-AndroidAPS/Nightscout.html) pour faire en sorte que Nightscout puisse recevoir et afficher ces données.
- Notez que l'URL dans NSClient ne pas doit **PAS** contenir **/api/v1/** à la fin - voir les [paramètres NSClient dans les Préférences](Preferences-nsclient).

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

Durant cet objectif, vous comprendrez à quelle fréquence **AAPS** évalue l'impact du débit basal sur la glycémie, et recommande des ajustements temporaires de ce débit. Dans le cadre de cet objectif, vous allez activer pour la première fois la boucle ouverte et accepter manuellement sur votre pompe 20 changements de débit basal temporaire proposés. De plus, vous allez observer l'impact des cibles temporaires (personnalisées ou pré-configurées, _par ex_ pour l'activité ou les hypos). Si vous n'êtes pas encore à l'aise avec l'acceptation d'un débit basal temporaire dans **AAPS**, veuillez vous référer à l'onglet [ACTIONS](Screenshots#Screenshots-action-tab).

Temps estimé pour terminer cet objectif : **7 jours**. Vous serez obligé d'attendre que ce temps soit écoulé. Vous ne pouvez pas passer à l'objectif suivant avant, même si vous avez réalisé tous les changements de débit basal.

- Sélectionnez la Boucle Ouverte soit à partir du menu "Préférences", soit en faisant un appui long sur le bouton Boucle en haut à gauche de l'écran d'accueil.
- Descendez dans les [Préférences](../Configuration/Preferences.md) pour le configurer (faites défiler jusqu'à "Boucle/Mode APS" et sélectionnez "Boucle Ouverte").
- Acceptez manuellement au moins 20 suggestions de débits de base temporaires sur une période de 7 jours; entrez-les dans votre pompe (réelle) et confirmez dans AAPS que vous les avez acceptés. Assurez-vous que ces ajustements de débit basal apparaissent dans AAPS et Nightscout.
- Activez des [Cibles temporaires](../Usage/temptarget.md), si nécessaire. Après avoir traité une hypo, utilisez la cible temporaire d'hypo pour empêcher le système de trop corriger lors du rebond de glycémie.

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

Dans le cadre de l'**Objectif 5**, vous allez commencer à comprendre comment les recommandations de basal temporaire sont calculées. Cela inclut la [logique de détermination de la basale](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html), l'analyse de l'impact en observant les [lignes de prédiction dans l'écran d'accueil](Screenshots-prediction-lines)/Nightscout et l'examen des calculs détaillés, disponibles dans l'onglet OPENAPS.

Temps estimé pour terminer cet objectif : **7 jours**.

Cette Objectif vous demande de calculer et de configurer la valeur de votre "Débit max en U/h pour une Temp Basal" (max-basal), comme décrit dans [les fonctionnalités OpenAPS](Open-APS-features#Open-APS-features-max-u-h-a-temp-basal-can-be-set-to-openaps-max-basal). Cette valeur est à définir dans Préférences > OpenAPS.
Assurez-vous que ce paramètre de sécurité est défini à la fois dans **AAPS** et dans votre pompe à insuline.

Vous voudrez peut-être fixer une cible de glycémie un peu plus haute que d'habitude jusqu'à ce que vous ayez confiance dans les calculs et les paramètres.

**AAPS** autorise :

- pour la cible basse, un minimum de 72 mg/dl (4 mmol/l) à un maximum de 180 mg/dl (10 mmol/l)
- pour la cible haute : un minimum de 90 mg/dl (5 mmol/l) à un maximum de 225 mg/dl (15 mmol/l)
- pour une cible temporaire (valeur unique) : n'importe quelle valeur entre 72 mg/dl et 225 mg/dl (4 mmol/l à 15 mmol/l)

Votre cible est un paramètre essentiel. Tous les calculs sont basés dessus. Ce n'est pas la même chose que la plage cible dans laquelle vous essayez généralement de maintenir votre glycémie. Si votre cible est très étendue (par ex un écart de 50 mg/dl [3 mmol/l] ou plus, entre le minimum et le maximum), vous aurez de manière générale peu de changements proposés par AAPS. C'est dû au fait que, dans les prédictions, la glycémie devrait à un moment se situer quelque part dans cette plage étendue, et donc AAPS suggère rarement des changements de débit de base temporaires.

Vous pouvez faire des tests avec une cible plus restreinte (par ex 20 mg/dl [1 mmol/l] d'écart ou moins) et observer le comportement qui en résulte.

Vous pouvez ajuster (élargir ou resserrer) la zone verte du graphique, représentant votre plage cible, en modifiant les valeurs dans [Préférences](../Configuration/Preferences.md) > Aperçu > Fourchette de visualisation.

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

Dans le cadre de l'**Objectif 6**, vous allez fermer la boucle et activer le mode arrêt glycémie basse (AGB). Pendant cet objectif, [max-IA](Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob) est réglé à zéro. Vous devez rester en mode AGB pendant 5 jours pour terminer cet objectif. Vous devriez mettre à profit ce temps pour vérifier si vos paramètres de profil sont justes et ne déclenchent pas trop souvent d'événement AGB.

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

Pour compléter l'**Objectif 7**, vous devez passer en boucle fermée et augmenter votre [max-IA](Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob). Pendant l'**objectif 6**, le paramètre max-IA était automatiquement considéré comme étant à 0. Ce n'est plus le cas. **AAPS** va commencer à utiliser la valeur maxIA telle que définie pour corriger les valeurs de glycémie élevées.

Temps estimé pour terminer cet objectif : 1 jour.

- Sélectionnez 'Boucle fermée' soit à partir des [Préférences](../Configuration/Préférences.md) ou en appuyant et en maintenant l'icône Boucle en haut à droite de l'écran ACCUEIL. Utilisez ce mode pendant 1 jour.

- Augmentez votre 'IA max total qu'OpenAPS ne peut pas dépasser' (dans OpenAPS appelé 'max-IA') au-dessus de 0. The default recommendation is "average mealbolus + 3x max daily basal" (for the SMB algorithm) or "3x max daily basal" (for the AMA algorithm) but you should slowly work up to this maximum until you know your settings work for you (max daily basal = the maximum hourly value in any time segment of the day).

Cette recommandation doit être considérée comme un point de départ. If you set it to the 3x and you are seeing AAPS giving too much insulin as glucose levels rise, then lower the "Maximum total IOB OpenAPS can’t go over" value. Alternatively, if you are very resistant, raise it very cautiously.

![max daily basal](../images/MaxDailyBasal2.png)

- Once confident on how much IOB suits your looping patterns, reduce your targets to your desired level.

(Objectives-objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens)=

## Objectif 8 : Ajustement des débits Basal et des ratios si nécessaire, puis activation de la fonction auto-sens

As part of this objective you will revist your profile's performance and will use autosens functionality as an indicator for wrong settings.

Temps estimé pour terminer cet objectif : **7 jours**.

- You can use [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) as a one off to check your basals remain accurate or do a traditional basal test.
- Enable [autosens](../Usage/Open-APS-features.md) over a period of 7 days and watch OVERVIEW's graph white line showing your insulin sensitivity rising or falling due to exercise or hormones etc. and keep an eye on the OpenAPS report tab which shows **AAPS** adjusting the basals and/or targets accordingly.

(Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)=

## Objectif 9 : Activation de fonctionnalités supplémentaires pour l'utilisation en journée, telles que la fonction SMB

In this objective you will tackle and use "Super Micro Bolus (SMB)" as one core functionality. After working through the mandatory readings you will have a good understanding of what SMBs are, how these work, reasonable starting point with SMBs and why basal is set to zero temporarily after SMBs are given (zero-temping). Estimated time to complete this objective: 28 days.

- The [SMB section in this documentation](Open-APS-features-super-micro-bolus-smb) and [oref1 coverage in the openAPSdocs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) are must-reads to understand SMB and the concept of zero-temping.
- Once done, you [raise maxIOB](Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob) to get SMBs working well. maxIOB now includes all IOB, not just accumulated basal. This threshold pauses SMBs until IOB drops below this value (_e.g._ maxIOB is set to 7 U and a bolus of 8 U is given to cover a meal: SMBs will be paused and not given unless IOB drops below 7 U). A good start is setting maxIOB = average mealbolus + 3x max daily basal (max daily basal = the maximum hourly value in any time segment of the day - see [objective 7](Objectives-objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets) as reference)
- Change "min_5m_carbimpact"-parameter (Preferences > Absorbtion settings > min_5m_carbimpact) to 8 as you move from an OpenAPS AMA algorithm to OpenAPS SMB. For AMAs the default value is 3. Read more about this setting [here](../Configuration/Preferences.html#min-5m-carbimpact)

(Objectives-objective-10-automation)=

## Objectif 10: Automatisation

You have to start **Objective 10** to be able to use Automations.

1. Read the documentation page  [Automation](../Usage/Automation.md) first.
2. Set-up the most basic automation rule;
   for example trigger an Android notification in few minutes:

- Select the notification tab
- From the top right 3 dots menu, select add rule
- Give a task name "My first automation notification"
- "edit"  "condition"
  - click the "+" symbol to add the first trigger
  - select "Time"  & "OK", it will create a default entry AT TODAY HOUR:MINUTE
  - click the MINUTE portion to edit the time such that it triggers in a few minutes. Then click ok to close
  - click "ok"  to close the Triggers screen
- "ADD" an "Action"
  - select "Notification", "OK"
  - click "Notification" to edit the message(Msg), enter something like "Ny first automation"
- wait until the time triggers the notification (note that depanding on your phone, it can be a few minutes late)

4. Experiment with setting up a more useful automation.

- The documentation page gives a few examples, and you can search for "automation" screenshots on the [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) group. Since most people eat the same thing for breakfast at the same time every morning before school/work, a fairly common use-case can be to set a "before-breakfast-target" to set a slightly lower temporary target 30 minutes before having breakfast. In such case, your condition is likely to include "recurring time" which consists of selecting specific days of the week (Monday, Tuesday, Wednesday, Thursday, Friday) and a specific time (06:30 am). The action will consists of  "Start temp target" with a target value and a 30 minutes duration.

## Objective 11: Enabling additional features for daytime use, such as Dynamic Senstivity plugin (DynISF).

- Ensure that SMB is functioning properly
- Read the documentation concerning Dynamic ISF [here](../Usage/DynamicISF.md)
- Search the Facbook and [Discord](https://discord.gg/4fQUWHZ4Mw) groups for discussions around Dynamic ISF and read about other users experiences and recommendations.
- Enable the **DynamicISF plugin** and identify the appropriate calibration for your body's uniqueness. It is advisable to begin with a value lower than 100% for safety reasons.

(Objectives-go-back-in-objectives)=

## Retour arrière dans les Objectifs

If you want to go back in **objectives** progress for whatever reason you can do so by clicking at "clear finished".

![Go back in objectives](../images/Objective_ClearFinished.png)

## Objectifs dans Android APS avant la version 3.0

One objective was removed when **AAPS** version 3.0 was released.  Users of Android APS version 2.8.2.1 who are on older Android software (_i.e._ earlier than version 9) will be using an older set of Objectives which can be found [here](../Usage/Objectives_old.md).
