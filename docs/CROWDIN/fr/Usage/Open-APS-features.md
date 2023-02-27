# Fonctions OpenAPS

(Open-APS-features-autosens)=

## Autosens

* Autosens est un algorithme qui examine les écarts de glycémie (positives/négatives/neutres).
* Il va essayer de déterminer à quel point vous êtes sensible/résistant en fonction de ces écarts.
* L'implémentation oref dans **OpenAPS** utilise une combinaison de 24 et 8 heures de données. Il utilise celui qui le est plus sensible.
* Dans les versions antérieures à AAPS 2.7, l'utilisateur devait choisir manuellement entre 8 heures ou 24 heures.
* A partir de la version 2.7 d'AAPS, l'Autosens basculera entre une fenêtre de 24 heures et 8 heures pour calculer la sensibilité. Il choisira celle qui est le plus sensible. 
* Les utilisateurs qui utilisaient oref1 remarqueront probablement que le système peut être moins dynamique en raison de la variation de sensibilité entre 24 heures et 8 heures.
* Changer une canule ou modifier un profil réinitialisera l'autosens à 100% (un changement de profil avec durée ne réinitialisera pas l'autosens).
* Autosens ajuste votre basal et votre SI (c.-à-d. qu'il imite ce que fait un changement de profil).
* Si vous mangez continuellement des glucides sur une période prolongée, l'Autosens sera moins efficace pendant cette période car les glucides sont exclus les calculs des écarts de glycémie.

(Open-APS-features-super-micro-bolus-smb)=

## Super Micro Bolus (SMB)

SMB, la version courte de 'Super Micro Bolus', est la dernière fonctionnalité de OpenAPS (depuis 2018) inclue dans l'algorithme Oref1. Contrairement à OpenAPS AMA, le SMB n'utilise pas les débits de base temporaires pour contrôler la glycémie, mais surtout les **microbolus de toute petite taille**. dans les cas où AMA ajouterait 1.0 UI d'insuline à l'aide d'un débit de base temporaire, SMB délivre plusieurs Super Micro Bolus en petites étapes à **5 minutes d'intervalle**, par ex. 0.4 UI, 0.3 UI, 0.2 UI and 0.1 UI. Dans le même temps (pour des raisons de sécurité) le véritable taux basal est mis à 0 UI/h pour une certaine durée afin d'éviter un surdosage (**'zéro-temp'**). Cela permet au système d'ajuster la glycémie plus rapidement qu'avec l'augmentation du débit de base temporaire de l'AMA.

Grâce aux SMB, il peut être suffisant pour un repas faible en glucides d'informer le système de la quantité de glucides prévue et de laisser faire le reste par AAPS. Cependant, cela peut conduire à des pics postprandiaux plus élevés car le pré-bolus n’est pas possible. Ou vous pouvez donner, si vous avez besoin d'un pré-bolus, un **bolus de départ**, qui couvre **seulement une partie** des glucides (par ex. 2/3 de la quantité estimée) et vous laissez les SMB couvrir le reste.

La fonctionnalité SMB contient des mécanismes de sécurité:

1. La plus grande dose de SMB ne peut être que la plus petite valeur entre :
    
    * la valeur correspondant au débit de base actuel (ajusté par autosens) pour la durée définie dans "Max minutes de base pour limiter le SMB", par ex. la quantité de basale pour les 30 prochaines minutes, ou
    * la moitié de la quantité d'insuline actuellement requise, ou
    * la partie restante de votre maxIA renseignée dans les paramètres.

2. Vous remarquerez probablement souvent de faibles débits de base temporaires (appelées 'faibles temp') ou des DBT à 0 U/h (appélés 'zéro-temp'). C'est par conception pour des raisons de sécurité et cela n'a aucun effets négatif si le profil est défini correctement. La courbe d'IA est plus significative que les débits de base temporaires.

3. Des calculs supplémentaires sont effectués pour prédire l'évolution de la glycémie, par ex. RNS (ou Repas Non Signalés). Même si aucun glucide n'est renseigné par l'utilisateur, RNS peut détecter automatiquement une augmentation significative des niveaux de glycémie liés à des repas, l'adrénaline ou d'autres facteurs et essaiera de les ajuster avec des SMB. Pour être en sécurité, cela marche aussi dans l'autre sens et peut arrêter les SMB plus tôt si une chute rapide inattendue de la glycémie survient. C'est pourquoi RNS doit toujours être activé avec les SMB.

**Vous devez avoir commencé l'[Objectif 9](Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) pour utiliser les SMB.**

Voir aussi : [Documentation OpenAPS pour oref1 SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) et [les infos de Tim sur les SMB](https://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/).

(Open-APS-features-max-u-h-a-temp-basal-can-be-set-to-openaps-max-basal)=

### Max. U/h pour le débit temp Basal (OpenAPS "max-basal")

Ce paramètre de sécurité détermine le débit de base temporaire maximal que la pompe à insuline peut délivrer. La valeur doit être la même dans la pompe et dans les AAPS et doit être au moins égale à 3 fois le débit de base le plus élevé.

Par exemple :

Le débit de base le plus élevé de votre profil au cours de la journée est de 1,00 U/h. Alors la valeur de max-basal recommandée est d'au moins 3 U/h.

Mais vous ne pouvez pas choisir n'importe quelle valeur. AAPS limite la valeur en 'dur' en fonction de l'âge du patient que vous avez sélectionné dans les paramètres. La valeur permise est la plus faible pour les enfants et la plus élevée pour les adultes résistants à l’insuline.

AAPS limite la valeur ainsi :

* Enfant : 2
* Adolescent : 5
* Adulte : 10
* Adulte résistant à l'insuline : 12
* Grossesse : 25

*Voir aussi [l'aperçu des limites codées en dur](Open-APS-features-overview-of-hard-coded-limits).*

(Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob)=

### IA totale maximale pour OpenAPS \[U\] (OpenAPS "max-IA")

Cette valeur détermine quelle valeur de maxIA doit être prise en compte par AAPS en mode boucle fermée. Si l'IA en cours (par exemple après un bolus de repas) est supérieure à la valeur définie, la boucle arrêtera d'administrer de l'insuline jusqu'à ce que la l'IA soit inférieure à la valeur limite renseignée.

En utilisant OpenAPS SMB, maxIA est calculé différemment de OpenAPS AMA. Dans AMA, maxIA était juste un paramètre de sécurité pour l'IA de la basal, alors qu'en mode SMB, il inclut également l'IA des bolus. Un bon départ est

    maxIA = moyenne bolus repas + 3 x max basal quotidien
    

Soyez prudent et patient et modifiez les paramètres petit à petit. C'est différent pour tout le monde et dépend aussi de la Dose Totale Quotidienne (DTQ) moyenne. Pour des raisons de sécurité, il y a une limite, qui dépend de l'âge du patient. La 'limite en dur' pour maxIA est supérieure à la limite [AMA](Open-APS-features-max-u-hr-a-temp-basal-can-be-set-to-openaps-max-basal).

* Enfant : 3
* Adolescent : 7
* Adulte : 12
* Adulte résistant à l'insuline : 25
* Grossesse : 40

*Voir aussi [l'aperçu des limites codées en dur](Open-APS-features-overview-of-hard-coded-limits).*

Voir aussi la [documentation OpenAPS pour SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb).

### Activer AMA Autosens

Ici, vous pouvez choisir si vous voulez utiliser la [détection de sensibilité](../Configuration/Sensitivity-detection-and-COB.md) 'autosens' ou non.

(Open-APS-features-enable-smb)=

### Activer SMB

Ici, vous pouvez activer ou désactiver complètement la fonction SMB.

### Activer SMB avec les glucides

SMB ne fonctionne que lorsqu'il y a des glucides actifs (GA).

### Activer SMB avec les cibles temporaires

SMB fonctionne quand il y a une cible temporaire faible ou élevée (Repas imminent, Activité, Hypo, Personnalisé)

### Activer SMB avec cibles temp. hautes

SMB fonctionne lorsqu'il existe une cible temporaire élevée active (activité, hypo). Cette option peut limiter d'autres paramètres SMB, par ex. si ‘SMB avec les cibles temporaires‘ est activé et que ‘SMB avec des cibles temp. hautes‘ est désactivé, SMB fonctionnera seulement avec des cibles temp basses et pas avec des cibles temp hautes. C'est la même chose pour Activer SMB avec les glucides : si 'SMB avec cible temp. hautes' est désactivé, il n'y aura pas de SMB avec une cible temp haute même s'il y a des glucides actifs.

(Open-APS-features-enable-smb-always)=

### Activer en permanence les SMB

SMB fonctionne en permanence (indépendamment des GA, des cibles temp ou des bolus). Pour des raisons de sécurité, cette option n'est possible que pour les sources GLY ayant un bon filtrage des données bruyantes. Pour le moment, il ne fonctionne qu'avec un Dexcom G5 ou G6, si vous utilisez ['BYODA'](DexcomG6-if-using-g6-with-build-your-own-dexcom-app) ou le "mode natif" dans xDrip+. Si une valeur de GLY a une variation trop importante, le G5/G6 ne l'envoie pas et attend la valeur suivante 5 minutes après.

Pour les autres MGC/MGF comme le Freestyle Libre, ‘SMB en permanence’ sera désactivé jusqu'à ce que xDrip+ ait un meilleur plugin de filtrage. Vous pouvez trouver [plus d'informations ici](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

### Activer SMB après ingestion de glucides

Le SMB marche pendant 6 h après avoir manger des glucides, même si les GA sont à 0. Pour des raisons de sécurité, cette option n'est possible que pour les sources GLY ayant un bon filtrage des données bruyantes. Pour le moment, il ne fonctionne qu'avec un Dexcom G5 ou G6, si vous utilisez ['BYODA'](DexcomG6-if-using-g6-with-build-your-own-dexcom-app) ou le "mode natif" dans xDrip+. Si une valeur de GLY a une variation trop importante, le G5 ne l'envoie pas et attend la valeur suivante 5 minutes après.

Pour les autres MGC/MGF comme le Freestyle Libre, les ‘SMB sans glucides actifs’ seront désactivés jusqu'à ce que xDrip+ ait un meilleur plugin de filtrage. Vous pouvez trouver [plus d'informations ici](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

(Open-APS-features-max-minutes-of-basal-to-limit-smb-to)=

### Max. minutes de basal pour limiter le SMB

C'est un paramètre de sécurité important. Cette valeur détermine la quantité de SMB qui peut être administrée en fonction de la quantité d'insuline basale diffusée sur une durée donnée, lorsqu'elle n'est pas couverte par des GA.

Cela rend les SMB plus agressifs. Pour commencer, vous devez commencer par la valeur par défaut de 30 minutes. Avec de l''expérience, vous pouvez augmenter la valeur par pas de 15 minutes et voir l'impact de ces changements.

Il est recommandé de ne pas définir de valeur supérieure à 90 minutes, car c'est la limite au delà de laquelle l'algorithme peut ne plus pouvoir ajuster une baisse de GLY avec un DBT de 0 UI/h ('zéro-temp'). Vous devez également définir des alarmes, en particulier si vous testez encore de nouveaux paramétrages, pour vous alerter avant de tomber en hypo.

Valeur par défaut : 30 min.

### Activer RNS

Avec cette option activée, l'algorithme SMB peut détecter des repas non signalés. C'est utile si vous oubliez de dire à AAPS que vous avez mangé, si vous avez mal estimé ou mal renseignés la quantité de glucides, ou encore si vous avez fait un repas avec beaucoup de graisses ou de protéines ayant une durée d'absoption plus longue que prévue. Sans aucun glucides renseignés, RNS peut reconnaitre une forte augmentation de la glycémie causée par des glucides, de l'adrénaline ou tout autre raison, et tente de l'ajuster avec les SMB. Cela fonctionne aussi dans l'autre sens : s'il y a une forte baisse de la glycémie, il peut arrêter les SMB plus tôt.

**Par conséquent, les RNS doivent toujours être activés lors de l'utilisation de SMB.**

### Cible temp. haute élève la sensibilité

Si vous activez cette option, la sensibilité à l'insuline sera augmentée avec une cible temp supérieure à 100 mg/dl ou 5,6 mmol/l. Cela signifie que la SI augmentera alors que le G/I et le débit de base diminueront.

### Cible temp. basse abaisse la sensibilité

Si vous activez cette option, la sensibilité à l'insuline sera diminuée avec une cible temp inférieure à 100 mg/dl ou 5,6 mmol/l. Cela signifie que la SI diminuera alors que le G/I et le débit de base augmenteront.

### Paramètres Avancés

**Utiliser delta basé sur moyenne courte** Si vous activez cette fonction, AAPS utilise une moyenne courte des variations de glycémie sur les 15 dernières minutes, ce qui correspond généralement à la moyenne des trois dernières valeurs. Cela aide AAPS à travailler plus régulièrement avec des sources de données bruyantes comme xDrip+ et Libre.

**Multiplicateur max quotidien de sécurité** C'est une limite de sécurité importante. Le paramètre par défaut (qui n'a normalement pas besoin d'être ajusté) est 3. Cela signifie qu'AAPS ne sera jamais autorisé à fixer un débit de basal temporaire supérieur à 3 x le débit de base horaire le plus élevé programmé dans la pompe de l'utilisateur. Exemple : si le débit de base le plus élevé est de 1,0 U/h et que le multiplicateur max de sécurité est de 3, AAPS peut fixer un débit de base temporaire maximal de 3,0 U/h (= 3 x 1,0 U/h).

Valeur par défaut : 3 (ne doit pas être modifié sauf si vous en avez vraiment besoin et que vous savez ce que vous faites)

**Multiplicateur de sécurité basale courante** C'est une autre limite de sécurité importante. Le paramètre par défaut (qui n'a normalement pas besoin d'être ajusté) est 4. Cela signifie qu'AAPS ne sera jamais autorisé à fixer un débit de basal temporaire supérieur à 4 x le débit de base courant programmé dans la pompe de l'utilisateur.

Valeur par défaut : 4 (ne doit pas être modifié sauf si vous en avez vraiment besoin et que vous savez ce que vous faites)

* * *

(Open-APS-features-advanced-meal-assist-ama)=

## Assistance Améliorée Repas (AAR)

AAR, la version abrégée de "Assistance Améliorée Repas" est une fonctionnalité OpenAPS de 2017 (oref0). L'Assistance Améliorée Repas (AAR) de OpenAPS permet au système de réagir plus rapidement après un bolus repas si vous entrez les Glucides de façon fiable.

Vous pouvez trouver plus d'informations dans la [documentation OpenAPS](https://newer-docs.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

(Open-APS-features-max-u-hr-a-temp-basal-can-be-set-to-openaps-max-basal)=

### Max. U/h pour le débit temp Basal (OpenAPS "max-basal")

Ce paramètre de sécurité aide AAPS à ne jamais diffuser des débits de base dangereusement élevé et limite les débits des basals temp à x U/h. Il est conseillé de definir cette valuer de facon raisonnable et sensée. Une bonne recommandation est de prendre le plus haut débit de votre profil de basal et de le multiplier par 4 et d'au moins 3. Par exemple, si le débit le plus élevé de votre profil est de 1,0 U/h vous pouvez la multiplier par 4 ce qui vous fait 4 U/h que vous définissez comme paramètre de sécurité.

Vous ne pouvez pas choisir n'importe quelle valeur : Pour des raison de sécurité, il y a une 'limite en dur' qui dépend de l'age du patient. Cette 'limite en dur' pour maxIA est plus basse avec AMA (AAR) qu'avec SMB. La valeur la plus faible est pour les enfants et la valeur la plus élevée est pour les adultes résistants à l'insuline.

Les paramètres codés en dur dans AAPS sont les suivants :

* Enfant : 2
* Adolescent : 5
* Adulte : 10
* Adulte résistant à l'insuline : 12
* Grossesse : 25

*Voir aussi [l'aperçu des limites codées en dur](Open-APS-features-overview-of-hard-coded-limits).*

### IA basale max que OpenAPS pourra délivrer \[U\] (OpenAPS "max-iob")

Ce paramètre limite la quantité maximale d'IA basale pour AAPS. Si l'IA est plus élevée, AAPS arrête de délivrer de l'insuline basale additionnelle jusqu'à ce que l'IA de basale repasse sous la limite.

La valeur par défaut est 2, mais vous pouvez augmenter ce paramètre lentement pour voir comment cela vous affecte et trouver quelle valeur vous convient le mieux. C'est différent pour tout le monde et dépend aussi de la Dose Totale Quotidienne (DTQ) moyenne. Pour des raisons de sécurité, il y a une limite, qui dépend de l'âge du patient. Cette 'limite en dur' pour maxIA est plus basse avec AMA (AAR) qu'avec SMB.

* Enfant : 3
* Adolescent : 5
* Adulte : 7
* Adulte résistant à l'insuline : 12
* Grossesse : 25

*Voir aussi [l'aperçu des limites codées en dur](Open-APS-features-overview-of-hard-coded-limits).*

### Activer AMA Autosens

Ici, vous pouvez choisir si vous voulez utiliser la [détection de sensibilité](../Configuration/Sensitivity-detection-and-COB.md) autosens ou non.

### Autosens ajuste aussi les cibles temp

Si cette option est activée, autosens peut également ajuster les cibles (à côté du débit de base et la SI). Cela permet à AAPS d'être plus ou moins "agressif". La cible réelle peut être atteinte plus rapidement avec ceci.

### Paramètres Avancés

**Utiliser delta basé sur moyenne courte** Si vous activez cette fonction, AAPS utilise une moyenne courte des variations de glycémie sur les 15 dernières minutes, ce qui correspond généralement à la moyenne des trois dernières valeurs. Cela aide AAPS à travailler plus régulièrement avec des sources de données bruyantes comme xDrip+ et Libre.

**Multiplicateur max quotidien de sécurité** C'est une limite de sécurité importante. Le paramètre par défaut (qui n'a normalement pas besoin d'être ajusté) est 3. Cela signifie qu'AAPS ne sera jamais autorisé à fixer un débit de basal temporaire supérieur à 3 x le débit de base horaire le plus élevé programmé dans la pompe de l'utilisateur. Exemple : si le débit de base le plus élevé est de 1,0 U/h et que le multiplicateur max de sécurité est de 3, AAPS peut fixer un débit de base temporaire maximal de 3,0 U/h (= 3 x 1,0 U/h).

Valeur par défaut : 3 (ne doit pas être modifié sauf si vous en avez vraiment besoin et que vous savez ce que vous faites)

**Multiplicateur de sécurité basale courante** C'est une autre limite de sécurité importante. Le paramètre par défaut (qui n'a normalement pas besoin d'être ajusté) est 4. Cela signifie qu'AAPS ne sera jamais autorisé à fixer un débit de basal temporaire supérieur à 4 x le débit de base courant programmé dans la pompe de l'utilisateur.

Valeur par défaut : 4 (ne doit pas être modifié sauf si vous en avez vraiment besoin et que vous savez ce que vous faites)

**Snooze bolus Diviseur de DAI** La fonction “Snooze bolus” marche après un bolus repas. AAPS ne définit pas de débits de base temporaires bas après un repas pendant une durée égale à la DAI divisée par le paramètre « bolus snooze ». La valeur par défaut est 2. Cela signifie qu'avec un DAI de 5h, le "bolus snooze" serait d'une durée de 5h/2 = 2,5h.

Valeur par défaut : 2

(Open-APS-features-overview-of-hard-coded-limits)=

## Aperçu des limites codées en dur

<table border="1">
  
<thead>
  <tr>
    <th width="200"></th>
    <th width="75"> Enfant</th>
    <th width="75">Adolescent</th>
    <th width="75">Adulte</th>
    <th width="75">Adulte résistant à l'insuline</th>
    <th width="75">Femme enceinte</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>BOLUS MAX</td>
    <td>5,0</td>
    <td>10,0</td>
    <td>17,0</td>
    <td>25,0</td>
    <td>60,0</td>
  </tr>
  <tr>
    <td>DAI MIN</td>
    <td>5,0</td>
    <td>5,0</td>
    <td>5,0</td>
    <td>5,0</td>
    <td>5,0</td>
  </tr>
  <tr>
    <td>DAI MAX</td>
    <td>7,0</td>
    <td>7,0</td>
    <td>7,0</td>
    <td>7,0</td>
    <td>10,0</td>
  </tr>
  <tr>
    <td>G/I MIN</td>
    <td>2,0</td>
    <td>2,0</td>
    <td>2,0</td>
    <td>2,0</td>
    <td>0,3</td>
  </tr>
  <tr>
    <td>G/I MAX</td>
    <td>100,0</td>
    <td>100,0</td>
    <td>100,0</td>
    <td>100,0</td>
    <td>100,0</td>
  </tr>
  <tr>
    <td>IA MAX AMA</td>
    <td>3,0</td>
    <td>5,0</td>
    <td>7,0</td>
    <td>12,0</td>
    <td>25,0</td>
  </tr>
  <tr>
    <td>IA MAX SMB</td>
    <td>7,0</td>
    <td>13,0</td>
    <td>22,0</td>
    <td>30,0</td>
    <td>70,0</td>
  </tr>
  <tr>
    <td>BASAL MAX</td>
    <td>2,0</td>
    <td>5,0</td>
    <td>10,0</td>
    <td>12,0</td>
    <td>25,0</td>
  </tr>
</tbody>
</table>