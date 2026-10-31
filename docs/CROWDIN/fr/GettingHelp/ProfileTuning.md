# Ajuster le profil AAPS

```{admonition} This is NOT a medical advice
:class: warning
Travaillez avec votre équipe soignante pour obtenir de l'aide et des conseils sur la gestion de votre diabète.</br>
Utilisez ce guide seulement après avoir [configuré correctement votre **Profil**](https://androidaps.readthedocs.io/en/latest/SettingUpAaps/YourAapsProfile.md), en suivant tous les objectifs d'**AAPS**.
```

Ce guide explique la logique des résultats de l'algorithme OpenAPS avec un __Profil__ donné. Il indique aussi quelles valeurs d'**AAPS** peuvent être ajustées quand vous observez certaines situations ou certains comportements. Les conseils ci-dessous sur le test de la basal peuvent être différents de ceux de votre équipe soignante.

Utiliser la **boucle fermée** peut rendre le test de la basal plus facile et peut beaucoup réduire le risque d'hypoglycémie si la basal de votre __Profil__ est trop forte.

## Modifier les paramètres du profil : comment procéder

1. Assurez-vous d'avoir lu et compris les paramètres recommandés et les conseils d'__AAPS__ ci-dessous. Si vous ne suivez pas ces conseils, l'ajustement peut devenir difficile et vous aurez moins de chances d'obtenir un __Profil__ bien réglé
2. Observez et comparez avec soin, **sur plusieurs jours**, ce qui se passe avec votre __glycémie__ et votre __IA__.
3. Recherchez les comportements d'**AAPS** qui se répètent à peu près à la même heure (presque) chaque jour.
4. Il est important de faire cela sur plusieurs jours. Les données d'une seule journée donnent souvent de mauvais résultats quand on les utilise pour décider d'ajuster le __Profil__.
5. Commencez à faire de petits changements dans votre __Profil__ seulement après avoir observé un comportement qui se répète, par ex. un pic de __glycémie__ ou une valeur d'__IA__ négative à 13 h.
6. Il est important de ne changer qu'une seule chose à la fois. Par ex. augmentez votre basal de 10 % autour de 13 h.
7. Après chaque changement, il est important de surveiller l'effet sur votre __glycémie__ et votre __IA__ pendant les jours suivants.
8. Répétez ce cycle : observer, décider, ajuster encore si nécessaire

Ne vous précipitez pas, allez doucement !

## Paramètres recommandés et conseils pendant l'ajustement de la basal

- Faites tous les tests avec la [boucle fermée activée](#AapsScreens-loop-status).
- **<u>DÉSACTIVEZ</u> toutes les [automatisations](../DailyLifeWithAaps/Automations.md)**
- **<u>DÉSACTIVEZ</u> [DynISF](#Open-APS-features-DynamicISF), [AutoISF](#Open-APS-features-auto-isf), [AutoSens](#Open-APS-features-autosens)** pour qu'ils n'essaient pas d'adapter votre profil.
- Ne faites aucune action manuelle (bolus manuel, cibles temporaires, etc.) pendant les tests : laissez le système utiliser seulement les paramètres du **Profil**.
- Pour les [graphiques supplémentaires](#AapsScreens-section-g-additional-graphs) : sur le graphique 1, affichez Insuline Active (IA), Glucides Actifs (GA) (et Changement de sensibilité). Sur le graphique 2, affichez Déviations et Impact sur la glycémie (BGI). Quand vous demandez des conseils, ajoutez toujours ces graphiques à vos captures d'écran.
- GA=0[*](#profiletuning-cob-zero)

Autres éléments à éviter si possible, car ils influencent les données et peuvent mener à de mauvaises conclusions :
- Pas d'activité physique.
- Pas de stress.
- Pas de maladie.
- Pas de météo extrême, comme des températures très hautes ou très basses.
- Pas de session de pompe ou de MGC en échec.
- Pas de glucides non signalés.

Notez aussi :
- Si votre [profil de débit de basal](#your-aaps-profile-basal-rates) est correct, quand vous êtes sur la cible avec GA=0[*](#profiletuning-cob-zero) et IA=0, vous restez toujours sur la cible, quel que soit votre **SI** (le **SI** est utilisé seulement quand vous êtes au-dessus de votre cible de **glycémie**).
- Vous devez vérifier l'**IA** actuelle, mais aussi le graphique de l'**IA**, pour voir comment l'**IA** a évolué pendant les dernières heures.

(profiletuning-cob-zero)=

***GA = 0**

Cela veut dire que le repas est digéré et qu'il n'y a plus de glucides dans votre corps.

**AAPS** peut indiquer [GA=0 alors que vous avez encore des glucides actifs](../DailyLifeWithAaps/CobCalculation.md).

## Définitions du [Profil](../SettingUpAaps/YourAapsProfile.md)

Un **Profil trop fort** indique une combinaison des éléments suivants :

- Le nombre du [SI](#your-aaps-profile-insulin-sensitivity-factor) est trop petit.
- Le nombre de la [basal](#your-aaps-profile-basal-rates) est trop grand.
- Le nombre du [G/I](#your-aaps-profile-insulin-to-carbs-ratio) est trop petit.

## Observations de l'IA

*Remarque : vous pouvez aussi utiliser le graphique IOB de Loopalyzer dans les rapports Nightscout pour voir l'IA sur plusieurs jours.*

Si vous observez les comportements suivants après quelques jours, envisagez ces changements :

### IA positive

- La basal du **Profil** n'est peut-être pas assez forte (cela peut aussi venir de repas non signalés, d'une maladie, d'une mauvaise absorption au site, etc.)

![IA positive](../images/troubleshooting/profiletuning/PositiveInsulin.png)

### IA négative

- Basal par défaut trop forte.
- Peut être l'effet d'un exercice ou d'une activité physique passée.

![IA négative](../images/troubleshooting/profiletuning/NegativeInsulin.png)

- Repas précédent : trop de bolus (ce qui a donné un très long débit basal temporaire à zéro)

![IA négative](../images/troubleshooting/profiletuning/NegativeInsulin2.png)

## Observations de la cible glycémique

### Bloquée en haut

- Le nombre du __SI__ est élevé et pas assez fort (l'insuline calculée est trop faible)

![Bloquée en haut](../images/troubleshooting/profiletuning/StuckHigh.png)

- La basal du __Profil__ n'est peut-être pas assez forte (les **SMB** n'ont pas assez de « réserve de basal » à utiliser)
- Une sécurité ([MaxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over) ?) s'est peut-être déclenchée et limite l'injection d'insuline. Vérifiez dans l'écran du plugin **APS** (**Configuration → APS → Ouvrir le plugin**) ; voir [SMB](#Open-APS-features-super-micro-bolus-smb).
- Problème technique : absorption au site, cathéter, ...

### Bloquée en bas

- __SI__ trop fort : le nombre doit être augmenté
- Basal du __Profil__ trop forte (si l'IA est aussi négative)

### Montagnes russes (hauts et bas)

- **SI** trop fort ? Voir votre [Profil AAPS](#your-aaps-profile-insulin-sensitivity-factor)

![Montagnes russes](../images/troubleshooting/profiletuning/StrongISF.png)

## Observations de la glycémie après les repas

### Montée rapide et glycémie qui reste haute

- Le repas contient des glucides rapides (comme du jus de fruits).
- Envisagez de faire un pré-bolus, ou un pré-bolus un peu plus tôt.
- Bolus (G/I ou % injecté) pas assez fort.

![Montée haute](../images/troubleshooting/profiletuning/FastRise.png)

### Montée rapide puis glycémie qui devient basse

- Envisagez de faire un pré-bolus ; votre **Profil** est peut-être trop agressif (sur-correction de la montée)
- Bolus trop fort.



## [Comment calculer votre G/I](#your-aaps-profile-insulin-to-carbs-ratio)

1. D'abord, il vous faut des réglages de basal par défaut corrects dans votre **Profil**.
2. Commencez sur la cible, de préférence sans IA négative.
3. Notez l'insuline totale délivrée dans **Gestion → Pompe** (ou dans l'historique de la pompe) et appelez-la insuline de départ. Mesurez très précisément une portion de glucides connue, et notez l'heure de départ et l'IA de départ. Ensuite, entrez les glucides et le bolus dans **AAPS** avec l'assistant bolus (avec le G/I configuré actuellement). N'oubliez pas de manger les glucides ;)
4. Après quelques heures, quand GA=0[*](#profiletuning-cob-zero) et que vous êtes revenu sur la cible, notez l'heure de fin et l'IA de fin. Vérifiez l'insuline totale délivrée comme avant et appelez-la insuline de fin. *REMARQUE : la durée n'est PAS importante, tant qu'elle est plus longue que votre digestion*
5. À la différence entre l'insuline de départ et l'insuline de fin, soustrayez/ajoutez la différence IA de fin - IA de départ. Ensuite, soustrayez l'insuline basale calculée à partir des paramètres de votre **Profil**.
6. Si la __glycémie__ est sur la cible, vous avez l'insuline totale utilisée pour « digérer » vos glucides. Calculez votre **G/I**.

### Explications du calcul du G/I

- Avec un **Profil** qui a le bon débit de basal par défaut, vous devez rester sur la cible et avoir une IA proche de 0, quelle que soit la période. Vous recevez seulement la basal de votre **Profil**.
- Vous ajoutez des glucides et un bolus à ce mélange. Attendez que votre corps digère tous les glucides et que vous soyez revenu sur la cible de **glycémie**. Votre insuline utilisée sera la somme de votre basal + l'insuline nécessaire pour les glucides. Vous calculez l'insuline utilisée pour votre basal (avec votre **Profil**), et le reste sera l'insuline utilisée pour digérer les glucides.
- Si la période est trop courte, il restera des glucides non digérés, donc votre « insuline nécessaire pour les glucides » sera fausse.
- Si la période est trop longue, rien de grave ne se passera. Vous utiliserez tous vos glucides et vous recevrez plus de basal. À la fin, vous soustrayez la basal de l'insuline totale utilisée : la période plus longue (avec plus de basal) ne change pas le résultat.

Rédigé à l'origine par @Robby (Discord) avec des astuces pour aider à ajuster votre **Profil AAPS**, relu et modifié par la communauté (merci !).
