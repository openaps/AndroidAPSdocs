(temptarget-temp-targets)=

# Cibles temporaires

## Que sont les cibles temporaires et où puis-je les définir et les configurer ?

Avec « Cibles Temporaires » (ou CT), vous pouvez changer votre objectif glycémique pendant une certaine période de temps. Comme cela est surtout nécessaire pour de l'activité, des hypos (traitement de glucides) ou proche d'un repas, vous pouvez configurer des CT par défaut. Pour configurer ces CT, vous pouvez accéder au menu situé dans le coin en haut à droite et aller dans Préférences -> Autres -> Cibles Temporaires par défaut.

![Définir les cibles temp. par défaut](../images/TempTarget_Default.png)

Pour utiliser une de ces « Cibles temporaires par défaut », vous pouvez faire un appui court sur votre cible dans le coin droit en haut de l'onglet Aperçu (ou Accueil) pour afficher la boite de dialogue Cible Temporaire ou encore utiliser les raccourcis dans le bouton orange « Glucides ». Pour définir manuellement une [ "Cible Temporaire personnalisée"](temptarget-custom-temp-target) (valeur de Gly et/ou durée), faites un appui court sur votre cible dans le coin en haut à droite ou utilisez le bouton "Cible temp." dans l'[onglet Actions / menu](Config-Builder-actions).

![Définir une cible temp.](../images/TempTarget_Set2.png)

- Si vous voulez ajuster légèrement les valeurs d'une cible temporaire par défaut, vous pouvez faire un appui long sur un des boutons Repas imminent, Activité ou Hypo puis modifier les valeurs dans les champs Cible ou Durée.
- Si une cible temporaire est en cours d'exécution, un bouton supplémentaire "Annuler" est affiché dans la boîte de dialogue pour l'annuler

## Cible temporaire Hypo

Cela peut être considéré comme la cible temporaire la plus importante. Il y a plusieurs raisons à cela :

1. Vous vous rendez compte que vous aller faire une hypo : généralement, la boucle doit le gérer, mais parfois vous pouvez mieux anticiper que la boucle, dans ce cas la boucle réagira plus vite quand une cible est définie avec une valeur de glycémie plus élevée.
2. Quand vous manger pour traiter une hypo, votre glycémie va monter très rapidement. La boucle va vouloir agir contre cette hausse ou même faire des SMB si c'est activé. Une "Cible temp. Hypo" peut empêcher cela. 
3. (Avancés, [Objectif 9](Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)) : Vous pouvez activer “Cible temp. haute élève la sensibilité” pour les cibles temp. supérieures ou égales à 100 mg/dl ou 5.5 mmol/l dans OpenAPS SMB, ainsi AAPS est plus sensible.
4. (Avancés, [Objectif 9](Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)) : Vous pouvez désactiver les “SMB avec cibles temp. hautes”, de sorte que même si vous avez des GA > 0, "SMB avec les cibles temp." ou "SMB en permanence" activés avec l'algorithme OpenAPS SMB activé, AndroidAPS ne délivrera pas de SMB tant qu'une cible temp. haute sera active.

Note: si vous entrez des glucides avec le bouton orange "Glucides" et que votre glycémie est inférieure à 72mg/dl ou 4mmol/l, une CT Hypo est automatiquement activée.

(temptarget-activity-temp-target)=

## Cible temporaire Activité

Avant et pendant une activité, vous souhaiterez peut-être avoir une cible plus élevée pour éviter d'avoir une hypo. Pour simplifier le réglage de la Cible temp., vous pouvez configurer une "Cible temp. Activité" par défaut. Sur la base de la DAI, l'IA et votre expérience, vous pouvez définir la CT avant l'activité. Voir aussi la [section sports dans la FAQ](FAQ-sports).

Avancés, [Objectif 9](Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) : Les avantages de la “Cible temps. Activité”, est que vous pouvez activer “Cible temp. haute élève la sensibilité” pour les Cibles temp. supérieures ou égales à 100 mg/dl ou 5.5 mmol/l dans OpenAPS SMB. Alors AAPS est plus sensible. Certaines personnes font un changement de profil avant plutôt qu'une CT pendant l'activité, mais tout le monde est différent. Si les “SMB avec cibles temp. hautes” est désactivé, AndroidAPS n'utilisera pas de SMB, même avec des GA > 0, "SMB avec les cibles temp." ou "SMB en permanence" activés avec l'algorithme OpenAPS SMB activé.

## Cible temporaire Repas imminent

Si vous savez que vous voulez manger bientôt, vous pouvez activer cette Cible temp., donc il y aura déjà plus d'IA avant de manger. En particulier pour ceux qui ne font pas de pré-bolus, cela peut être une bonne alternative pour avoir une glycémie basse. Vous pouvez en savoir plus sur le mode "Repas imminent" dans l'article ['How to do “eating soon” mode'](https://diyps.org/2015/03/26/how-to-do-eating-soon-mode-diyps-lessons-learned/) ou [ici](https://diyps.org/tag/eating-soon-mode/).

Avancés, [Objectif 9](Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) : Si vous utilisé OpenAPS SMB et que vous avez “Cible temp. basse abaisse la sensibilité”, AAPS sera un peu plus aggressif. Le pré-requis est d'avoir une Cible temp. inférieure à 100 mg/dl ou 5.5 mmol/l pour cette option.

## Cible temporaire Personnalisé

Parfois, vous voulez juste avoir une cible temporaire autre que celles par défaut. Vous pouvez en définir une en faisant un appui court sur la cible en haut à droite dans la vue principale ou dans l'onglet "Actions".

![Définir une cible temp. via l'onglet Action](../images/TempTarget_ActionTab.png)