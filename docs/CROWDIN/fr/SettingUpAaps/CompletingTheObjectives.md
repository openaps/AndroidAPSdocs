# Compléter les objectifs

**AAPS** a une série d'**Objectifs** à compléter. Ils aident l'utilisateur à passer de la simple boucle ouverte à la boucle fermée hybride et à toutes les fonctions d'**AAPS**. Compléter les **Objectifs** doit vous garantir que vous avez :

* Tout configuré correctement dans votre installation d'**AAPS** ;
* Appris les fonctions essentielles d'**AAPS** ; et
* Une compréhension de base de ce que votre système peut faire, pour vous aider à avoir confiance quand vous utilisez **AAPS**.

Quand **AAPS** est installé pour la première fois, chaque objectif doit être complété avant de passer au suivant. De nouvelles fonctions sont débloquées petit à petit, à mesure que vous avancez dans chaque **Objectif**.

Les **Objectifs 1 à 8** vous guident de la configuration d'**AAPS** sur votre smartphone jusqu'à la boucle fermée hybride « de base ». Cela prend environ 6 semaines. Vous pouvez aller jusqu'à l'**Objectif 5** avec une pompe virtuelle (et en utilisant pendant ce temps une autre méthode pour l'administration de l'insuline). Les **Objectifs 9 et 10** servent à tester des fonctions plus avancées d'**AAPS**, pour mieux contrôler votre diabète. Ils prennent jusqu'à 3 mois, peut-être plus. Plus de détails sur une estimation du temps nécessaire sont disponibles ici : [Combien de temps cela prendra-t-il ?](#preparing-how-long-will-it-take)

En plus d'avancer dans les **Objectifs**, vous pouvez aussi, si nécessaire, supprimer votre progression et [revenir à un objectif précédent](#go-back-in-objectives).

## Sauvegardez vos paramètres

```{admonition} Note
:class: note

Il est conseillé d'exporter vos paramètres **AAPS** après chaque **Objectif** validé !
```

Il est fortement recommandé d'[exporter vos paramètres](../Maintenance/ExportImportSettings.md) après chaque objectif complété, pour ne perdre aucune progression faite dans **AAPS**. Cet export crée un **fichier de paramètres** (.json) qu'il faut sauvegarder dans un ou plusieurs endroits sûrs (par ex. Google Drive, disque dur, pièce jointe d'un e-mail _etc._). Ainsi, toute progression faite dans **AAPS** est enregistrée. Si votre téléphone est perdu ou si vous supprimez votre progression par erreur, le fichier json peut être rechargé dans **AAPS** en important un fichier de paramètres récent. Une sauvegarde du **fichier de paramètres** est aussi nécessaire si vous avez besoin d'un nouveau smartphone pour **AAPS**, quelle qu'en soit la raison (mise à niveau, téléphone perdu ou cassé _etc._)

Le fichier de **paramètres** enregistre non seulement votre progression dans les **Objectifs**, mais aussi tous vos paramètres **AAPS**, comme le **bolus max** _etc._

Si vous n'avez pas de sauvegarde de vos paramètres et qu'il arrive quelque chose à votre smartphone **AAPS**, il faudra recommencer les **Objectifs** depuis le début. Avancer dans les **Objectifs** prend du temps. Il vaut mieux éviter de devoir les refaire, par exemple parce que vous avez perdu votre smartphone.

(objectives-objective1)=
## Objectif 1 : Mise en place de la visualisation et du suivi, analyse des débits basaux et des ratios

L'**Objectif 1** demande à l'utilisateur de faire sa configuration technique de base dans **AAPS**. Vous ne pouvez pas avancer tant que cette étape n'est pas terminée.

- Choisissez la bonne MGC/FGM dans [Configuration → Source GLY](#Config-Builder-bg-source). Voir [Source GLY](../Getting-Started/CompatiblesCgms.md) pour plus d'informations.
- Choisissez la bonne pompe dans [Configuration → Pompe](#Config-Builder-pump) pour que votre pompe puisse communiquer avec **AAPS**. Choisissez la **pompe virtuelle** si vous utilisez un modèle de pompe sans pilote **AAPS** pour la boucle, ou si vous voulez faire les premiers **Objectifs** en utilisant un autre système pour l'administration de l'insuline. Voir [pompe à insuline](../Getting-Started/CompatiblePumps.md) pour plus d'informations.
- Si vous utilisez Nightscout :
  - Suivez les instructions de la page [Nightscout](../SettingUpAaps/Nightscout.md) pour que **Nightscout** puisse recevoir et afficher les données d'**AAPS**.
  - Notez que l'URL dans **NSClientV3** doit être **_sans_ « /api/v1/ »** à la fin - voir [Paramètres → NSClientV3](#Preferences-nsclient).
- Si vous utilisez Tidepool :
  - Suivez les instructions de la page [Tidepool](../SettingUpAaps/Tidepool.md) pour que **Tidepool** puisse recevoir et afficher les données d'**AAPS**.

Remarque - *Vous devrez peut-être attendre la prochaine mesure de glycémie du capteur avant qu'**AAPS** la reconnaisse.*

(objectives-objective2)=
## Objectif 2 : Apprendre à contrôler AAPS

L'**Objectif 2** demande de faire plusieurs « tâches », comme le montre la capture d'écran ci-dessous. Chaque tâche montre son état (**1**) : le texte orange « **Pas encore terminé** » devient « **Terminé, félicitations !** » dès qu'**AAPS** a enregistré l'action. Touchez **Astuce** (**2**) sous une tâche pour ouvrir la documentation correspondante, si vous ne connaissez pas encore une action.

![Capture d'écran objectif 2](../images/Objective2_V2_5.png)

Les tâches pour compléter l'**Objectif 2** sont :
- Réglez votre **Profil** à 90 % pour une durée de 10 min.
  - _Astuce_ : touchez le nom de votre profil sur l'écran principal pour ouvrir l'écran **Profil**, puis utilisez le bouton **Activer** (▶) et réglez le pourcentage et la durée. Plus d'informations dans [Changement de profil et pourcentage de profil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md).
  - _Remarque_ : **AAPS** n'accepte pas de débits basaux inférieurs à 0,05 U/h. Si votre **Profil** contient des débits de 0,06 U/h ou moins, vous devez créer un **Profil** temporaire avec des débits basaux plus élevés avant de faire cette tâche. Revenez à votre **Profil** normal après avoir fait cette tâche.
- Simulez « prendre une douche » en [déconnectant votre pompe](#AapsScreens-loop-status) dans **AAPS** pour une durée de 1 h.
  - _Astuce_ : appuyez sur l'icône de la boucle sur l'écran principal pour ouvrir la fenêtre Boucle, puis choisissez une durée sous **Déconnecter la pompe**.
- Terminez la « douche » en reconnectant votre pompe.
  - _Astuce_ : appuyez sur l'icône « déconnectée » pour ouvrir à nouveau la fenêtre de la boucle et choisissez **Reconnecter la pompe**.
- Réglez une [**Cible temporaire**](../DailyLifeWithAaps/TempTargets.md) personnalisée avec une durée de 10 min.
  - _Astuce_ : appuyez sur la plage cible sur l'écran principal pour afficher l'écran de la cible temporaire.
- Affichez le contenu du plugin **Boucle**.
  - _Astuce_ : ouvrez **Configuration → Boucle** et touchez « **Ouvrir le plugin** ».
- Faites défiler ou zoomez sur le graphique de glycémie pour voir des périodes plus longues ou plus courtes.


(objectives-objective3)=
## Objectif 3 : Prouver ses connaissances

L'**Objectif 3** demande à l'utilisateur de réussir un examen à choix multiples. Il sert à tester vos connaissances sur **AAPS**.

Certains utilisateurs trouvent que l'**Objectif 3** est le plus difficile à compléter. Lisez la documentation d'**AAPS** en même temps que les questions. Si vous êtes vraiment bloqué après avoir cherché dans la documentation d'**AAPS**, cherchez « Objective 3 » dans le groupe [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) ou [Discord](https://discord.gg/4fQUWHZ4Mw) (car il est probable que votre question a déjà été posée - et que le groupe y a répondu). Ces groupes peuvent donner des indices de façon amicale, ou vous renvoyer vers la bonne partie de la documentation d'**AAPS**.

En attendant :
- Pour réduire le nombre de notifications / décisions qu'on vous demande (débits basaux temporaires) en Boucle Ouverte, réglez une plage cible large dans votre **Profil**, _par ex._ 90–150 mg/dl ou 5,0–8,5 mmol/l.
- Vous pouvez même augmenter encore la limite supérieure, ou même désactiver la Boucle ouverte, pendant la nuit.

Pour continuer l'**Objectif 3**, touchez une ligne de question pour l'ouvrir. Veuillez lire attentivement chaque question et sélectionner votre(s) réponse(s).

Pour chaque question, il peut y avoir une ou plusieurs réponses correctes ! Si vous choisissez une mauvaise réponse, la question est bloquée pendant 1 heure. Ensuite, vous pouvez y répondre à nouveau. Notez que l'ordre des propositions peut changer lorsque vous essayez de répondre à nouveau ; ceci pour faire en sorte que vous lisiez attentivement et réfléchissiez vraiment à la validité (ou non) de chaque proposition.

```{admonition} __What happens if new question(s) are added to an Objective when I update to a newer version of AAPS?__
:class: note
De temps en temps, de nouvelles fonctions sont ajoutées à **AAPS**. Elles peuvent demander d'ajouter une nouvelle question aux **Objectifs**, en particulier à l'**Objectif 3**. En conséquence, toute nouvelle question ajoutée à l'**Objectif 3** sera à l'état « pas encore terminé » car **AAPS** vous demandera d'y répondre. Ne vous inquiétez pas : chaque **Objectif** est indépendant, donc vous **ne perdrez pas les fonctions existantes d'AAPS**, tant que les autres **Objectifs** restent terminés.
```

## Objectif 4 : Démarrage de la boucle ouverte

Le but de l'**Objectif 4** est de voir à quelle fréquence **AAPS** évalue le débit basal de l'utilisateur par rapport à la glycémie et recommande des ajustements du débit basal temporaire. Dans cet **Objectif**, vous allez activer la boucle ouverte pour la première fois. Vous allez accepter 20 changements de débit basal temporaire proposés et, si nécessaire, les appliquer à la main sur votre pompe. Vous allez aussi observer l'effet des [**Cibles temporaires**](../DailyLifeWithAaps/TempTargets.md). Si vous ne savez pas encore comment régler un changement de débit basal temporaire dans **AAPS**, voir les actions de la pompe dans le panneau **Gestion** ([Où est passé l'onglet Actions ?](#screens-action-tab)).

Temps minimum pour compléter cet objectif : **7 jours**. Vous serez obligé d'attendre que ce temps soit écoulé. Il n'est pas possible de passer à l'**Objectif** suivant, même si tous les changements de débit basal ont déjà été appliqués.

- Choisissez la Boucle Ouverte en appuyant sur l'[icône de la boucle](#AapsScreens-loop-status) sur l'écran principal et en choisissant **Boucle Ouverte** comme mode.
- Acceptez manuellement au moins 20 suggestions de débits de base temporaires sur une période de 7 jours ; entrez-les dans votre pompe (réelle) et confirmez dans AAPS que vous les avez acceptés. Vérifiez que ces ajustements du débit basal apparaissent dans **AAPS** et dans **Nightscout**.
- Utilisez des [**Cibles temporaires**](../DailyLifeWithAaps/TempTargets.md) si nécessaire. Après avoir traité une hypo, utilisez la « cible temporaire Hypo » prédéfinie pour éviter que le système corrige trop fort quand la glycémie remonte.
- Si vous êtes encore en [Mode simple](#preferences-simple-mode) à ce stade, c'est sans doute le bon moment pour le désactiver.

Pour réduire le nombre de changements de débit basal proposés en Boucle Ouverte, vous pouvez toujours utiliser les conseils de l'[**Objectif 3**](#objective-3-prove-your-knowledge). Vous pouvez aussi modifier le pourcentage minimum des changements de débit basal recommandés avec le paramètre « **Mode boucle ouverte, changement minimum** » dans **Paramètres → Boucle**. Plus la valeur est élevée, moins vous recevrez de notifications de changement.

![Boucle ouverte, changement minimum demandé](../images/OpenLoop_MinimalRequestChange2.png)

```{admonition} Note
:class: note

Vous n'avez pas besoin d'appliquer chaque recommandation du système !
```
(objectives-objective5)=
## Objectif 5 : Comprendre votre boucle ouverte, y compris ses propositions de débit basal temporaire

Dans l'**Objectif 5**, vous allez commencer à comprendre comment les recommandations de débit basal temporaire sont calculées. Cela comprend la [logique de calcul du basal](#aaps-screens-how-predictions-become-a-dosing-decision), l'analyse de l'effet en observant les [courbes de prédiction dans la **Vue d'ensemble d'AAPS**](#aaps-screens-prediction-lines) (ou dans Nightscout) et l'étude des calculs détaillés affichés sur l'écran du plugin **OpenAPS SMB** (**Configuration → APS → Ouvrir le plugin**).

Temps estimé pour compléter cet objectif : **7 jours**.

Cet **Objectif** vous demande de déterminer et de régler votre valeur de « Débit de base maximum » (max-basal), comme décrit dans [Fonctionnalités OpenAPS](#Open-APS-features-max-u-h-a-temp-basal-can-be-set-to). Cette valeur peut être réglée dans [Paramètres → OpenAPS SMB](#Preferences-openaps-smb-settings). En [mode simple](#preferences-simple-mode), **AAPS** règle cette valeur automatiquement et vous n'avez pas besoin de la modifier. Si vous utilisez encore une pompe virtuelle, vérifiez que ce paramètre de sécurité est réglé à la fois dans **AAPS** et dans votre pompe à insuline.

Vous pouvez régler la [cible de glycémie de votre **Profil**](#profile-glucose-targets) plus haut que d'habitude, jusqu'à ce que vous soyez à l'aise avec les calculs et les paramètres d'**AAPS**. Vous pouvez essayer de régler la **cible de glycémie** de votre **Profil** dans une plage plus étroite (par exemple 1 mmol/l [20 mg/dl] de large ou moins) et observer le résultat.

![Panneau stop](../images/sign_stop.png)

```{admonition} If you have been using a virtual pump, change to a real insulin pump now!
:class: note

Si vous êtes en boucle ouverte avec une pompe virtuelle, **arrêtez-vous ici**. Ne cliquez sur Vérifier à la fin de cet **Objectif** qu'une fois que vous êtes passé à une « vraie » pompe qui administre de l'insuline.

```

![vide](../images/blank.png)

(objectives-objective6)=
## Objectif 6 : Démarrage de la boucle fermée avec l'Arrêt Glycémie Basse (AGB)

![Panneau d'avertissement](../images/sign_warning.png)
```{admonition} Closed loop will not correct high **BG** values in **Objective 6** as it is limited to **Low Glucose Suspend** only!
:class: note
Vous devrez toujours corriger vous-même les glycémies élevées (à la main, avec des corrections par la pompe ou le stylo) !
```

Dans l'**Objectif 6**, vous allez fermer la boucle et activer son mode **Arrêt Glycémie Basse** (AGB) pendant que le [maxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over) est réglé à zéro. Vous devez rester en mode AGB (Arrêt Glycémie Basse) pendant 5 jours pour compléter cet **objectif**. Utilisez ce temps pour vérifier que les paramètres de votre **Profil** sont justes et que les événements AGB ne se déclenchent pas trop souvent.

Temps minimum pour compléter cet objectif : **5 jours**. Vous serez obligé d'attendre que ce temps soit écoulé. Vous ne pouvez pas passer à l'**Objectif** suivant avant la fin de ce délai.

Il est essentiel que votre **Profil** actuel (basal, SI, G/I) ait été bien testé avant de fermer votre boucle en mode **AGB**. Des paramètres de **Profil** incorrects peuvent vous mettre en hypoglycémie, qu'il faudra traiter à la main. Un **Profil** juste aide à réduire le besoin de traiter des glycémies basses pendant cette période de 5 jours.

**Si vous observez encore des hypoglycémies fréquentes ou sévères, pensez à affiner la [DAI de votre type d'insuline](#Config-Builder-insulin-dia), le basal, la SI et les ratios de glucides.** Consultez le groupe [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) ou [Discord](https://discord.gg/4fQUWHZ4Mw), où ce sujet est beaucoup discuté.


Pendant l'**Objectif 6**, **AAPS** remplace la valeur du paramètre maxIOB par zéro. **Ce remplacement se termine quand vous passez à l'Objectif 7.**

Cela veut dire que pendant l'**Objectif 6**, si la glycémie du capteur baisse, **AAPS** réduit pour vous l'administration de l'insuline basale. Mais si la glycémie du capteur monte, **AAPS** augmente le débit basal au-dessus de la valeur de votre **Profil** seulement si l'**IA basale** est négative à cause d'un **AGB** précédent. Sinon, **AAPS** n'augmente pas le débit basal au-dessus de la valeur actuelle de votre profil, même si la glycémie monte. Cette prudence sert à éviter les hypoglycémies pendant que vous apprenez à utiliser **AAPS**.

**Par conséquent, vous devez gérer les glycémies élevées avec des bolus de correction manuels.**

- Si votre IA est négative (voir la capture d'écran ci-dessous), un débit basal temporaire (DBT) > 100 % peut être déclenché pendant l'**Objectif 6**.

![Exemple d'IA négative](../images/Objective6_negIOB.png)

- Définissez votre cible légèrement plus haute que d'habitude, par pure précaution et pour avoir un peu plus de marge de sécurité.
- Activez le mode « Arrêt Glycémie Basse » en appuyant sur l'icône de la boucle sur l'écran principal et en choisissant **Arrêt Glycémie Basse** comme mode.
- Vous pouvez voir le basal temporaire actif sur l'écran d'accueil grâce au texte de basal turquoise, et en voir l'historique avec la courbe de basal turquoise du graphique.
- Vous pouvez subir temporairement des pics de glycémie à la suite d'hypos sans pouvoir augmenter le débit de base sur le rebond.

(objectives-objective7)=
## Objectif 7 : Réglage de la boucle fermée, augmentation de maxIOB au-dessus de 0 et baisse progressive des cibles de glycémie

Pour compléter l'**Objectif 7**, vous devez fermer votre boucle et augmenter votre [maxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over). **maxIOB** était automatiquement mis à zéro pendant l'**Objectif 6**, à cause du mode Arrêt Glycémie Basse. Ce n'est plus le cas. **AAPS** commence à utiliser la valeur maxIOB que vous avez définie pour corriger les glycémies élevées. En [mode simple](#preferences-simple-mode), **AAPS** règle maxIOB automatiquement et vous n'avez pas besoin de le modifier.

Temps minimum pour compléter cet objectif : **1 jour**. Vous serez obligé d'attendre que ce temps soit écoulé. Il n'est pas possible de passer à l'**Objectif** suivant avant la fin de cette période.

- Choisissez **Boucle Fermée** en appuyant sur l'[icône de la boucle](#AapsScreens-loop-status) sur l'écran principal et en choisissant **Boucle Fermée** comme mode. Restez en **Boucle Fermée** pendant 1 jour.

- Augmentez lentement l'« IA totale maximale qu'OpenAPS ne peut pas dépasser » (appelée « max-iob » dans OpenAPS) au-dessus de 0, jusqu'à trouver les réglages qui vous conviennent le mieux.

La recommandation par défaut pour ce paramètre est « **bolus repas moyen + 3x le basal quotidien max** », où « basal quotidien max » est la valeur horaire maximum sur toutes les tranches horaires de la journée.

![basal quotidien max](../images/MaxDailyBasal2.png)

Cette recommandation doit être considérée comme un point de départ. Si vous utilisez cette règle mais qu'AAPS délivre trop d'insuline quand la glycémie monte, vous devrez peut-être :
* baisser la valeur « IA totale maximale qu'OpenAPS ne peut pas dépasser » ;
* revoyez les paramètres de votre **Profil**, en ne faisant qu'un seul ajustement à la fois.

Ou bien, si vous êtes très résistant à l'insuline, augmentez la valeur **maxIOB** avec beaucoup de prudence.

Une fois que vous savez avec confiance quelle valeur de **maxIOB** convient à votre façon de boucler, baissez vos **cibles de glycémie** au niveau souhaité.

(objectives-objective8)=
## Objectif 8 : Ajustement de la basale et des ratios si nécessaire, puis activation d'Autosens

Dans cet **objectif**, vous allez réexaminer les résultats de votre **Profil** et utiliser la fonction [Autosens](#Open-APS-features-autosens) comme indicateur de mauvais paramètres.

Temps minimum pour compléter cet objectif : **7 jours**. Vous serez obligé d'attendre que ce temps soit écoulé. Il n'est pas possible de passer à l'**Objectif** suivant avant la fin de cette période.

Activez [Autosens](../DailyLifeWithAaps/KeyAapsFeatures.md) pendant 7 jours (en [mode simple](#preferences-simple-mode), il est activé par défaut) et observez [la ligne blanche du graphique de la **Vue d'ensemble**](#AapsScreens-section-g-additional-graphs), qui montre votre sensibilité à l'insuline qui monte ou baisse à cause du sport, des hormones, etc. Surveillez l'écran du plugin **OpenAPS SMB** (**Configuration → APS → Ouvrir le plugin**), qui montre comment **AAPS** ajuste la sensibilité, les basaux et les cibles en conséquence.

C'est le bon moment pour revoir vos paramètres de [Calcul de Sensibilité](#Config-Builder-sensitivity-detection). Vous pouvez voir votre sensibilité sur l'écran principal dans un [graphique supplémentaire](#AapsScreens-section-g-additional-graphs).

Vous pouvez aussi utiliser [Autotune](#autotune-how-autotune-calculates-adjustments) une seule fois pour vérifier que vos basaux restent justes, ou faire un test de basal classique.

(objectives-objective9)=
## Objectif 9 : Activation de fonctionnalités oref1 supplémentaires pour l'utilisation en journée, comme les super micro bolus (SMB)

Dans l'**Objectif 9**, vous allez découvrir et utiliser le **« Super Micro Bolus (SMB) »**, une fonction essentielle. Après les lectures obligatoires, vous comprendrez bien ce que sont les SMB, comment ils fonctionnent et pourquoi le débit basal est mis temporairement à zéro après un SMB (basal temporaire à zéro).

Temps minimum pour compléter cet objectif : **28 jours**. Vous serez obligé d'attendre que ce temps soit écoulé. Vous ne pouvez pas passer à l'Objectif suivant avant la fin de ce délai.

- La [section SMB de cette documentation](#Open-APS-features-super-micro-bolus-smb) et la [partie sur oref1 dans la documentation openAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) sont à lire absolument pour comprendre les **SMB** et le concept de **basal temporaire à zéro**.
- Ensuite, vous pouvez [augmenter maxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over) pour que les **SMB** fonctionnent plus efficacement. maxIOB comprend maintenant toute l'**IA**, pas seulement le basal accumulé. Ce seuil met les **SMB** en pause jusqu'à ce que l'IA descende sous cette valeur (_par ex._ **maxIOB** est réglé à 7 U et un bolus de 8 U est fait pour couvrir un repas : les SMB sont mis en pause et ne sont pas donnés tant que l'**IA** ne descend pas sous 7 U). Un bon début est de régler **maxIOB** = **bolus repas moyen + 3x le basal quotidien max**, où « basal quotidien max » est la valeur horaire maximum sur toutes les tranches horaires de la journée. Voir l'[objectif 7](#objective-7-tuning-the-closed-loop-raising-maxiob-above-0-and-gradually-lowering-bg-targets) comme référence.
- Évaluez votre vitesse d'absorption des glucides et pensez à modifier le paramètre « min_5m_carbimpact » dans [Paramètres → Paramètres d’absorption → min_5m_carbimpact](#Preferences-min_5m_carbimpact) si vous la trouvez trop lente ou trop rapide.

(objectives-objective10)=
## Objectif 10 : Automatisation

Les **Automatisations** deviennent disponibles quand l'**Objectif 10** est démarré.

Temps minimum pour compléter cet objectif : **28 jours**. Vous serez obligé d'attendre que ce temps soit écoulé. Vous ne pouvez pas passer à l'Objectif suivant avant la fin de ce délai.

Lisez d'abord la page de documentation [Automatisation](../DailyLifeWithAaps/Automations.md).

Créez la règle d'automatisation la plus simple ; par exemple, déclencher une notification Android dans quelques minutes :
- Ouvrez **Gestion → Automatisation** et touchez le bouton **+** (**Ajouter une règle**).
- Saisissez un **Nom de tâche**, par exemple « Ma première notification d'automatisation ».
- Sous **Condition**, touchez « **ÉDITER** ».
  - Touchez « **Ajouter un déclencheur** » et choisissez « **Heure** ». **AAPS** crée une entrée pour aujourd'hui à l'heure actuelle.
  - Modifiez l'heure pour que la règle se déclenche dans quelques minutes.
  - Touchez l'icône **Enregistrer** (en haut à droite) pour revenir à la règle.
- Sous **Action**, touchez « **AJOUT** » et choisissez « **Notification** ».
  - Saisissez un message dans la carte de l'action, par exemple « Ma première automatisation ».
- Touchez l'icône **Enregistrer** (en haut à droite) et vérifiez que la règle est activée (**Activé**).
- Attendez que l'heure déclenche la notification (selon votre téléphone, elle peut arriver avec quelques minutes de retard)

Vous pouvez ensuite essayer de créer une **Automatisation** plus utile. La page de documentation donne quelques exemples, et vous pouvez chercher des captures d'écran « Automation » dans le groupe [Facebook](https://www.facebook.com/groups/AndroidAPSUsers). Il y a aussi un canal dédié dans la communauté [Discord](https://discord.gg/4fQUWHZ4Mw).

Par exemple, si vous mangez la même chose au petit-déjeuner à la même heure chaque matin avant l'école ou le travail, vous pouvez créer une **Automatisation** comme « cible-avant-petit-déjeuner » qui règle une **Cible temporaire** un peu plus basse 30 minutes avant le petit-déjeuner. Dans ce cas, votre déclencheur utilisera probablement "Période répétitive" qui permet de sélectionner des jours spécifiques de la semaine (Lundi, Mardi, Mercredi, Jeudi, Vendredi) et une heure précise (06h30). L'action sera « Démarrer la cible temp » avec une valeur cible plus basse que d'habitude et une durée de 30 minutes.

## Quand tous les objectifs sont terminés

Une fois que vous avez accompli tous les **Objectifs**, la liste les montre chacun avec une coche et la date où il a été accompli. L'élément **Objectifs** disparaît de la barre de navigation du bas ; vous pouvez toujours ouvrir la liste avec **Configuration → Restrictions → Objectifs → Ouvrir le plugin**.

![Tous les objectifs accomplis](../images/objectives/objectives_completed.png)

Appuyez sur « **Plus** » sous un objectif pour revoir ses tâches :

![Détails d'un objectif accompli](../images/objectives/objective_1_details.png)

(CompletingTheObjectives-go-back-in-objectives)=
## Retour arrière dans les Objectifs

Si vous voulez revenir en arrière dans les **Objectifs**, pour quelque raison que ce soit, ouvrez l'**Objectif** terminé avec « **Plus** » et touchez « **Réinitialiser l'état terminé** » :

![Retour arrière dans les Objectifs](../images/Objective_ClearFinished.png)

De la même façon, l'**Objectif** sur lequel vous travaillez actuellement peut être recommencé avec « **Réinitialiser l'état de départ** ».
