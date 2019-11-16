# Cibles temporaires

## Que sont les cibles temporaires et où puis-je les définir et les configurer ?

Avec « Cibles Temporaires » (ou CT), vous pouvez changer votre objectif glycémique pendant une certaine période de temps. Comme cela est surtout nécessaire pour de l'activité, des hypos (traitement de glucides) ou proche d'un repas, vous pouvez configurer des CT par défaut. Pour configurer ces CT, vous pouvez accéder au menu situé dans le coin en haut à droite et aller dans Préférences -> Autres -> Cibles Temporaires par défaut.

![Set default temp targets](../images/TempTarget_Default.png)

Pour utiliser une de ces « Cibles temporaires par défault », vous pouvez appuyer longuement sur votre cible dans le coin droit en haut de l'onglet Aperçu (ou Accueil) ou encore utiliser les raccourcis dans le bouton orange « Glucides ». Pour définir manuellement une [ "Cible Temporaire personnalisée" ](../Usage/temptarget#custom-temp-target) (valeur de Gly et/ou durée), utilisez "Personnalisé" après avoir fait un appui long sur votre cible dans le coin en haut à droite ou utilisez le bouton "Cible temp." dans l'onglet "Actions".

![Set temp target](../images/TempTarget_Set2.png)

## Cible temporaire Hypo

Cela peut être considéré comme la cible temporaire la plus importante. Il y a plusieurs raisons à cela :

1. Realizing you will go low: Usually, the Loop should handle it, but sometimes you can see better in advance than the loop, so the loop can react faster when it targets a higher blood glucose value.
2. When you eat hypo treatments carbs, your blood glucose will rise very fast. The loop will correct against the rising or even give SMBs if enabled. A "Hypo Temp-Target" can prevent that. 
3. (advanced, [objective 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)): You can enable “High Temp-Targets raises sensitivity” for Temp-Targets of 100mg/dl or 5.5mmol/l or higher in OpenAPS SMB, so AndroidAPS is more sensitive.
4. (advanced, [objective 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)): You can deactivate “SMB with high temp target”, so that even if you have COB > 0, "SMB with Temp-Target" or "SMB always" enabled and OpenAPS SMB active, AndroidAPS won’t give SMBs while high temp targets are active. 

Note: si vous entrez des glucides avec le bouton orange "Glucides" et que votre glycémie est inférieure à 72mg/dl ou 4mmol/l, une CT Hypo est automatiquement activée.

## Cible temporaire Activité

Before and during activity, you might want to have a higher target to prevent getting low. To simplify setting the Temp-Target, you can configure a default "Activity Temp-Target". Based on DIA, IOB and your experience you might want to set TT prior to activity.

Advanced, [objective 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb): The advantages about “Activity Temp-Target”, is that you can enable “High Temp-Targets raises sensitivity” for Temp-Targets higher or equal 100mg/dl or 5.5mmol/L in OpenAPS SMB. Then AndroidAPS is more sensitive. Some people do instead a profile switch before/while activity TT, but everybody is different. If “SMB with high Temp-Target” is deactivated, AndroidAPS won't use SMBs, even with COB > 0, "SMB with Temp-Target" or "SMB always" enabled and OpenAPS SMB active.

## Cible temporaire Repas imminent

If you know, that you want to eat soon, you can enable this Temp-Target, so there is already more IOB before eating. Especially for those who don’t do prebolusing, it might be a good alternative to already get the blood glucose to a lower target. You can read more about the "Eating soon mode" in the article ['How to do “eating soon” mode'](https://diyps.org/2015/03/26/how-to-do-eating-soon-mode-diyps-lessons-learned/) or [here](https://diyps.org/tag/eating-soon-mode/).

Advanced, [objective 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb): If you use OpenAPS SMB and have “Low temptarget lowers sensitivity”, AndroidAPS works a little bit more aggressive. Requirement is a Temp-Target less than 100mg/dl or 5.5mmol/l for this option.

## Cible temporaire Personnalisé

Parfois, vous voulez juste avoir une cible temporaire autre que celles par défaut. Vous pouvez en définir une en appuyant sur la cible en haut à droite dans la vue principale ou dans l'onglet "Actions".

![Set temp target through Action tab](../images/TempTarget_ActionTab.png)