# Fonctions OpenAPS

(Open-APS-features-autosens)=

## Autosens

- Autosens is an algorithm which looks at blood glucose deviations (positive/negative/neutral).
- Il va essayer de déterminer à quel point vous êtes sensible/résistant en fonction de ces écarts.
- L'implémentation oref dans **OpenAPS** utilise une combinaison de 24 et 8 heures de données. Il utilise celui qui le est plus sensible.
- In versions prior to **AAPS 2.7**, the user had to choose between 8 or 24 hours manually.
- From **AAPS 2.7** on Autosens in **AAPS** will switch between a 24 and 8 hours window for calculating sensitivity. It will pick whichever one is more sensitive. 
- Les utilisateurs qui utilisaient oref1 remarqueront probablement que le système peut être moins dynamique en raison de la variation de sensibilité entre 24 heures et 8 heures.
- Changer une canule ou modifier un profil réinitialisera l'autosens à 100% (un changement de profil avec durée ne réinitialisera pas l'autosens).
- Autosens ajuste votre basal et votre SI (c.-à-d. qu'il imite ce que fait un changement de profil).
- If continuously eating carbs over an extended period, Autosens will be less effective during that period as carbs are excluded from **BG** delta calculations.

(Open-APS-features-super-micro-bolus-smb)=

## Super Micro Bolus (SMB)

**SMB**, the shortform of **Super micro bolus**, is an OpenAPS feature introduced from 2018 onwards, within the Oref1 algorithm. In contrast to **AMA**, **SMB** does not use temporary basal rates to control glucose levels, but mainly **small super micro boluses**. In situations where **AMA** would add 1.0 IU insulin using a temporary basal rate, **SMB** delivers several super micro boluses in small steps at **5 minute intervals**, e.g. 0.4 IU, 0.3 IU, 0.2 IU and 0.1 IU. Dans le même temps (pour des raisons de sécurité) le véritable taux basal est mis à 0 UI/h pour une certaine durée afin d'éviter un surdosage (**'zéro-temp'**). This allows the system to adjust the blood glucose faster than with the temporary basal rate increase in **AMA**.

Thanks to SMB, it may be sufficient for meals containing only "slow" carbs to inform the system of the planned amount of carbohydrate and leave the rest to **AAPS**. Cependant, cela peut parfois conduire à des pics postprandiaux (après le repas) plus élevés chez certaines personnes. Or you can give, if necessary with pre-bolusing, a **start bolus**, which **only partly** covers the carbohydrates (e.g. 2/3 of the estimated amount) and let **SMB** deliver the rest of the insulin.

![SMBs on main graph](../images/SMBs.png)

SMBs are shown on the main graph with blue triangles. Tap on the triangle to see how much insulin was delivered, or use the [Treatments tab](#aaps-screens-treatments).

**SMB's** features contain some safety mechanisms:

1. **Largest single SMB dose**  
    The largest single SMB dose can only be the smallest value of:
    
    - la valeur correspondant au débit de base actuel (ajusté par autosens) pour la durée définie dans "Max minutes de base pour limiter le SMB", par ex. la quantité de basale pour les 30 prochaines minutes, ou
    - la moitié de la quantité d'insuline actuellement requise, ou
    - la partie restante de votre maxIA renseignée dans les paramètres.

2. **Low temp basal rates**  
    Low temporary basal rates (called 'low temps') or temporary basal rates at 0 U/h (called 'zero-temps') are activated more in **SMB**. This is by design for safety reasons and has no negative effects if the **Profile** is set correctly. On the main graph, the IOB curve (yellow thin line) is more meaningful than the course of the temporary basal rates.

3. **Un-Announced Meals**  
    Additional calculations to predict the course of glucose, e.g. by **UAM** (un-announced meals). Even without manual carbohydrate input from the user, **UAM** can automatically detect a significant increase in glucose levels due to meals, adrenaline or other influences and try to adjust this with **SMB**. Pour être en sécurité, cela marche aussi dans l'autre sens et peut arrêter les SMB plus tôt si une chute rapide inattendue de la glycémie survient. C'est pourquoi RNS doit toujours être activé avec les SMB.

**You must have started [objective 9](#objectives-objective9) to use SMB.**

See also :

- [OpenAPS documentation for SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb).
- [OpenAPS documentation for oref1 SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html)
- [Tim's info on SMB](https://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/).

The settings for OpenAPS SMB are described below.

(Open-APS-features-max-u-h-a-temp-basal-can-be-set-to)=

### Max U/h a temp basal can be set to

Ce paramètre de sécurité détermine le débit de base temporaire maximal que la pompe à insuline peut délivrer. It is also known as **max-basal**.

La valeur est definie en Unités d'insuline par heure (U/h). Il est conseillé de definir cette valuer de facon raisonnable et sensée. A good recommendation for setting this parameter is:

    max-basal = highest basal rate x 4
    

Par exemple, si le dosage basal le plus élevé de votre profil est de 0,5 U/h, vous pourriez le multiplier par 4 pour obtenir la valeur de 2 U/h.

**AAPS** limits this value as a 'hard limit' according to [Preferences > Treatments safety > Patient Type](#preferences-patient-type). The hard limits are as follows:

- Enfant : 2
- Adolescent : 5
- Adulte : 10
- Adulte résistant à l'insuline : 12
- Grossesse : 25

*See also [overview of hard-coded limits](#overview-of-hard-coded-limits).*

(Open-APS-features-maximum-total-iob-openaps-cant-go-over)=

### Maximum total IOB OpenAPS can’t go over

This value determines the maximum **Insulin on Board** (basal and bolus IOB) that **AAPS** will remain under while running in closed loop mode. It is also known as **maxIOB**.

Si l'IA en cours (par exemple après un bolus de repas) est supérieure à la valeur définie, la boucle arrêtera d'administrer de l'insuline jusqu'à ce que la l'IA soit inférieure à la valeur limite renseignée.

A good start for setting this parameter is:

    maxIA = moyenne bolus repas + 3 x max basal quotidien
    

Be careful and patient when adjusting your **max-IOB**. Cette valeur est différente d'une personne à l'autre et peut aussi dépendre de la dose totale journalière (DTQ).

**AAPS** limits this value as a 'hard limit' according to [Preferences > Treatments safety > Patient Type](#preferences-patient-type). The hard limits are as follows:

- Enfant : 3
- Adolescent : 7
- Adulte : 12
- Adulte résistant à l'insuline : 25
- Grossesse : 40

*See also [overview of hard-coded limits](#overview-of-hard-coded-limits).*

Note : When using **SMB**, the **max-IOB** is calculated differently than in AMA. In **AMA**, maxIOB is a safety-parameter for basal **IOB**, while in SMB-mode, it also includes bolus IOB.

Voir aussi la [documentation OpenAPS pour SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb).

### Enable Autosens

[Autosens](#autosens) looks at blood glucose deviations (positive/negative/neutral). Il essaiera de comprendre à quel point vous êtes sensible/résistant en fonction de ces écarts et ajustera le débit basal et la SI en fonction de ces écarts.

### Activer SMB

Activer cette option pour utiliser la fonctionnalité SMB. If disabled, no **SMBs** will be given.

(Open-APS-features-enable-smb-with-high-temp-targets)=

### Activer les SMB avec cibles temp hautes

If this setting is enabled, **SMBs** will still be delivered even if the user has selected a high **Temp Target** (defined as anything above 100mg/dL or 5.6mmol/l, regardless of **Profile** target). Grâce à cette option, vous pouvez désactiver les SMB lorsque le paramètre est désactivé. For example, if this option is disabled, **SMBs** can be disabled by setting a **Temp Target** above 100mg/dL or 5.6mmol/l. This option will also disable **SMBs** regardless of what other condition is trying to enable SMB.

If this setting is enabled, **SMB** will only be enabled with a high temp target if **Enable SMB with temp targets** is also enabled.

(Open-APS-features-enable-smb-always)=

### Activer en permanence les SMB

If this setting is enabled, SMB is enabled always enabled(independent of COB, temp targets or boluses). Quand ce paramètre est activé, les autres paramètres d'activation ci-dessous sont ignorés. However, if **Enable SMB with high temp targets** is disabled and a high temp target is set, SMBs will be disabled.

Pour des raisons de sécurité, cette option n'est utilisable que pour les sources de glycémie ayant un bon filtrage des données bruitées ou erratiques.

- Currently, it is only available with a Dexcom G5 or G6, if using the [Build your own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) or “[native mode](#smoothing-xdrip-dexcom-g6)” in xDrip+. If a BG value has too large of a deviation, the G5/G6 doesn’t send it and waits for the next value 5 minutes later.
- For other CGM/FGM like Freestyle Libre, **SMB always** is deactivated until there is a better noise smoothing plugin. 
- You can find more [here](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Activer les SMB avec les GA

Quand ce paramètre est activé, les SMB sont activés lorsque la valeur de GA est supérieure à 0.

### Activer les SMB avec les cibles temporaires

Quand ce paramètre est activé, les SMB sont activés lorsqu'une cible temporaire est définie (repas imminent, activité, hypo, personnalisé). If this setting is enabled but **Enable SMB with high temp targets** is disabled, SMB will be enabled when a low temp target is set (below 100mg/dL or 5.6mmol/l) but disabled when a high temp target is set.

### Activer SMB après ingestion de glucides

Quand ce paramètre est activé, les SMB sont activés pendant 6h après l'annonce des glucides, même si les GA sont revenus à 0.

Pour des raisons de sécurité, cette option n'est utilisable que pour les sources de glycémie ayant un bon filtrage des données bruitées ou erratiques.

- Currently, it is only available with a Dexcom G5 or G6, if using the [Build your own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) or “[native mode](#smoothing-xdrip-dexcom-g6)” in xDrip+. If a BG value has too large of a deviation, the G5/G6 doesn’t send it and waits for the next value 5 minutes later.
- For other CGM/FGM like Freestyle Libre, **SMB always** is deactivated until there is a better noise smoothing plugin.
- You can find more [here](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Fréquence des SMB en min

Ce paramètre limite la fréquence des SMB. Cette valeur détermine le temps minimum entre chaque SMB. Notez que la boucle s'exécute à chaque fois qu'une valeur de glycémie arrive (généralement toutes les 5 minutes). Enlevez à cela 2 minutes pour donner à la boucle suffisamment de temps pour s'exécuter. E.g. if you want SMB to be given every loop run, set this to 3 minutes.

Valeur par défaut : 3 min.

(Open-APS-features-max-minutes-of-basal-to-limit-smb-to)=

### Max. minutes de basal pour limiter le SMB

C'est un paramètre de sécurité important. La quantité d'insuline qui peut être administrée par SMB est déterminée par la quantité d'insuline basale pour une durée donnée, lorsqu'elle est couverte par des GA.

En augmentant cette valeur, les SMB deviennent plus agressifs. Vous devriez commencer avec la valeur par défaut de 30 minutes. Après un certain temps, augmentez la valeur par incréments de 15 minutes et observez les effets sur plusieurs repas.

Il est recommandé de ne pas dépasser 90 minutes, car c'est la limite au-delà de laquelle l'algorithme peut ne plus pouvoir compenser une baisse de glycémie par un débit basal de 0 U/h ('zéro-temp'). Vous devriez également configurer des alertes, particulièrement si vous êtes en cours de test de nouveaux paramètres, pour bien vous alerter avant d'être en hypo.

Valeur par défaut : 30 min.

### Activer RNS

Avec cette option activée, l'algorithme SMB peut détecter des repas non signalés. This is helpful if you forget to tell **AAPS** about your carbs or estimate your carbs wrong and the amount of entered carbs is wrong or if a meal with lots of fat and protein has a longer duration than expected. Without any carb entry, UAM can recognize fast glucose increase caused by carbs, adrenaline, etc., and tries to adjust it with SMBs. Cela fonctionne aussi dans l'autre sens : s'il y a une forte baisse de la glycémie, cela va arrêter les SMB plus tôt.

**Par conséquent, les RNS devraient toujours être activés lorsque les SMB le sont aussi.**

### Sensibilité augmente la cible

Si cette option est activée, la détection de sensibilité (autosens) peut augmenter la cible lorsqu'une plus grande sensibilité est détectée (valeur inférieure à 100%). Dans ce cas, votre cible sera augmentée du pourcentage de la sensibilité détectée.

If the target is modified due to sensitivity detection, it will be displayed with a green background on your home screen.

![Target modified by autosens](../images/Home2020_DynamicTargetAdjustment.png)

### Résistance diminue la cible

Si cette option est activée, la détection de sensibilité (autosens) peut baisser la cible lorsqu'une résistance est détectée (valeur supérieure à 100%). Dans ce cas, la cible sera diminuée du pourcentage de la résistance détectée.

### Cible temp. haute élève la sensibilité

Si vous activez cette option, la sensibilité à l'insuline sera augmentée avec une cible temporaire supérieure à 100 mg/dl ou 5,6 mmol/l. Cela signifie que la SI et le G/I augmenteront et les débits de base diminueront. This will effectively make **AAPS** less aggressive when you set a high temp target.

### Cible temp. basse abaisse la sensibilité

Si vous activez cette option, la sensibilité à l'insuline sera diminuée avec une cible temp inférieure à 100 mg/dl ou 5,6 mmol/l. Cela signifie que la SI et le G/I diminueront alors que les débits de base augmenteront. This will effectively make **AAPS** more aggressive when you set a low temp target.

(key-aaps-features-minimal-carbs-required-for-suggestion)=

### Minimal carbs required for suggestion

Minimum grams of carbs to display a carbs suggestion alert. Il sera suggéré de manger des glucides supplémentaires quand l'algorithme détecte que des glucides sont requis. Dans ce cas, vous recevrez une notification qui peut être reportée pendant 5, 15 ou 30 minutes.

Les notifications Glucides requis peuvent être envoyées sur Nightscout si vous le souhaitez, dans ce cas une annonce sera affichée et diffusée.

In any case, the required carbs will be displayed in the COB section on your home screen.

![Display carbs required on home screen](../images/Pref2020_CarbsRequired.png)

### Paramètres Avancés

You can read more here : [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).

**Always use short average delta instead of simple data** If you enable this feature, **AAPS** uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps **AAPS** to be steadier with noisy data sources like xDrip+ and Libre.

**Multiplicateur max quotidien de sécurité** C'est une limite de sécurité importante. Le paramètre par défaut (qui n'a normalement pas besoin d'être ajusté) est 3. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump and/or profile. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then **AAPS** can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Valeur par défaut : 3 (ne doit pas être modifié sauf si vous en avez vraiment besoin et que vous savez ce que vous faites)

**Multiplicateur de sécurité basale courante** C'est une autre limite de sécurité importante. Le paramètre par défaut (qui n'a normalement pas besoin d'être ajusté) est 4. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump and/or profile.

Valeur par défaut : 4 (ne doit pas être modifié sauf si vous en avez vraiment besoin et que vous savez ce que vous faites)

* * *

(Open-APS-features-advanced-meal-assist-ama)=

## Assistance Améliorée Repas (AAR)

AAR, la version abrégée de "Assistance Améliorée Repas" est une fonctionnalité OpenAPS de 2017 (oref0). L'Assistance Améliorée Repas (AAR) de OpenAPS permet au système de réagir plus rapidement après un bolus repas si vous entrez les Glucides de façon fiable.

Vous pouvez trouver plus d'informations dans la [documentation OpenAPS](https://newer-docs.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

### Max. U/h pour le débit temp Basal (OpenAPS "max-basal")

This safety setting helps **AAPS** from ever being capable of giving a dangerously high basal rate and limits the temp basal rate to x U/h. Il est conseillé de definir cette valuer de facon raisonnable et sensée. Une bonne recommandation est de prendre le plus haut débit de votre profil de basal et de le multiplier par 4 et au mimimum par 3. Par exemple, si le débit le plus élevé de votre profil est de 1,0 U/h vous pouvez la multiplier par 4 ce qui vous fait 4 U/h que vous définissez comme paramètre de sécurité.

You cannot choose any value: For safety reason, there is a 'hard limit', which depends on the patient age. Cette 'limite en dur' pour maxIA est plus basse avec AMA (AAR) qu'avec SMB. La valeur la plus faible est pour les enfants et la valeur la plus élevée est pour les adultes résistants à l'insuline.

The hardcoded parameters in **AAPS** are:

- Enfant : 2
- Adolescent : 5
- Adulte : 10
- Adulte résistant à l'insuline : 12
- Grossesse : 25

*See also [overview of hard-coded limits](#overview-of-hard-coded-limits).*

### IA basale max que OpenAPS pourra délivrer \[U\] (OpenAPS "max-iob")

This parameter limits the maximum of basal IOB where **AAPS** still works. Si l'IA est plus élevée, AAPS arrête de délivrer de l'insuline basale additionnelle jusqu'à ce que l'IA de basale repasse sous la limite.

The default value is 2, but you should rise this parameter slowly to see how much it affects you and which value fits best. C'est différent pour tout le monde et dépend aussi de la Dose Totale Quotidienne (DTQ) moyenne. Pour des raisons de sécurité, il y a une limite, qui dépend de l'âge du patient. Cette 'limite en dur' pour maxIA est plus basse avec AMA (AAR) qu'avec SMB.

- Enfant : 3
- Adolescent : 5
- Adulte : 7
- Adulte résistant à l'insuline : 12
- Grossesse : 25

*See also [overview of hard-coded limits](#overview-of-hard-coded-limits).*

### Activer AMA Autosens

Here, you can choose, if you want to use the [sensitivity detection](../DailyLifeWithAaps/SensitivityDetectionAndCob.md) autosens or not.

### Autosens ajuste aussi les cibles temp

Si cette option est activée, autosens peut également ajuster les cibles (à côté du débit de base et la SI). This lets **AAPS** work more 'aggressive' or not. La cible réelle peut être atteinte plus rapidement avec ceci.

### Paramètres Avancés

- Normalement, vous n'avez pas à modifier les paramètres dans cette boîte de dialogue !
- Si vous voulez quand même les changer, lisez en détail la [documentation OpenAPS](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#) et assurez-vous de bien comprendre ce que vous faites.

**Always use short average delta instead of simple data** If you enable this feature, **AAPS** uses the short average delta/blood glucose from the last 15 minutes, which is usually the average of the last three values. This helps **AAPS** to work more steady with noisy data sources like xDrip+ and Libre.

**Multiplicateur max quotidien de sécurité** C'est une limite de sécurité importante. Le paramètre par défaut (qui n'a normalement pas besoin d'être ajusté) est 3. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then **AAPS** can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Valeur par défaut : 3 (ne doit pas être modifié sauf si vous en avez vraiment besoin et que vous savez ce que vous faites)

**Multiplicateur de sécurité basale courante** C'est une autre limite de sécurité importante. Le paramètre par défaut (qui n'a normalement pas besoin d'être ajusté) est 4. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump.

Valeur par défaut : 4 (ne doit pas être modifié sauf si vous en avez vraiment besoin et que vous savez ce que vous faites)

**Bolus snooze diviseur de DAI** La fonction “Bolus snooze” marche après un bolus repas. **AAPS** doesn’t set low temporary basal rates after a meal in the period of the DIA divided by the “bolus snooze”-parameter. La valeur par défaut est 2. Cela signifie qu'avec un DAI de 5h, le "bolus snooze" serait d'une durée de 5h/2 = 2,5h.

Valeur par défaut : 2

* * *

(Open-APS-features-overview-of-hard-coded-limits)=

## Aperçu des limites codées en dur

|            | Enfant | Adolescent | Adulte | Adulte résistant à l'insuline | Femme enceinte |
| ---------- | ------ | ---------- | ------ | ----------------------------- | -------------- |
| BOLUS MAX  | 5,0    | 10,0       | 17,0   | 25,0                          | 60,0           |
| DAI MIN    | 5,0    | 5,0        | 5,0    | 5,0                           | 5,0            |
| DAI MAX    | 9,0    | 9,0        | 9,0    | 9,0                           | 10,0           |
| G/I MIN    | 2,0    | 2,0        | 2,0    | 2,0                           | 0,3            |
| G/I MAX    | 100,0  | 100,0      | 100,0  | 100,0                         | 100,0          |
| IA MAX AMA | 3,0    | 5,0        | 7,0    | 12,0                          | 25,0           |
| IA MAX SMB | 7,0    | 13,0       | 22,0   | 30,0                          | 70,0           |
| BASAL MAX  | 2,0    | 5,0        | 10,0   | 12,0                          | 25,0           |