# Fonctionnalités clés d'AAPS

## Mode de la boucle

L'état de la boucle est affiché sur l'écran principal avec l'une des icônes ci-dessous.

**AAPS** propose plusieurs modes de boucle, comme la Boucle Fermée (1), l'Arrêt Glycémie Basse (AGB - 2) et la Boucle Ouverte (3).

Voir [Écrans AAPS > L'écran principal > État de la boucle](#AapsScreens-loop-status) pour savoir comment choisir le mode de la boucle et pour les autres icônes de l'image (4 à 6).

![État de la boucle](../images/Home2020_LoopStatus.png)

(KeyAapsFeatures-OpenLoop)=

### Boucle Ouverte

**AAPS** évalue en continu toutes les données disponibles (IA, GA, glycémie...) et propose des traitements (débits basaux temporaires) pour ajuster votre traitement si nécessaire.

Les suggestions ne sont pas exécutées automatiquement (comme en boucle fermée). L'utilisateur doit appliquer les suggestions à la main dans la pompe (avec une pompe virtuelle) ou avec un bouton si **AAPS** est connecté à une vraie pompe.

Quand **AAPS** a une suggestion, une entrée **Boucle** avec un badge apparaît dans la barre de navigation en bas de l'écran principal. Appuyez dessus pour lire la suggestion (« Accepter nouveau Basal Temp ») avec son débit, sa durée et sa raison, puis appuyez sur **Effectuer** pour l'appliquer :

![Suggestion en boucle ouverte avec le bouton Effectuer](../images/screens/loop_tab.png)

Une suggestion n'est valable que quelques minutes. Si elle a plus de 9 minutes environ, ou si la boucle a été suspendue ou la pompe déconnectée entre-temps, **AAPS** la refuse et rien n'est envoyé à la pompe (*« Cette suggestion est trop ancienne. Rien n'a été envoyé à la pompe. Attendez la suivante. »*). Attendez la suggestion suivante.

Cette option sert à découvrir comment **AAPS** fonctionne, ou si vous utilisez une pompe non prise en charge. Vous serez en Boucle Ouverte jusqu'à la fin de l'**[Objectif 5](#objectives-objective5)**, quel que soit votre choix ici.

(KeyAapsFeatures-LGS)=

### Arrêt Glycémie Basse (AGB)

Dans ce mode, [maxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over) est réglé sur zéro.

Cela signifie que si la glycémie baisse, **AAPS** peut réduire le débit basal pour vous. Mais si la glycémie monte, aucune correction automatique ne sera faite. Vos débits basaux restent ceux définis dans votre **Profil** actuel. De l'insuline supplémentaire n'est donnée pour baisser la **glycémie** que si l'IA est négative (à cause d'un Arrêt Glycémie Basse précédent).

Ce mode est disponible à partir de l'**[Objectif 6](#objectives-objective6)**.

En plus de votre propre choix, **AAPS** peut aussi passer seul dans ce mode : pendant que vous travaillez sur l'**[Objectif 6](#objectives-objective6)**, et chaque fois qu'il détecte des valeurs de glycémie en double (voir [Signe d'avertissement de glycémie](#aaps-screens-bg-warning-sign)).

(KeyAapsFeatures-ClosedLoop)=

### Boucle Fermée

**AAPS** évalue en continu toutes les données disponibles (IA, GA, glycémie...) et ajuste automatiquement le traitement si nécessaire (*c.-à-d.* sans autre intervention de votre part) pour atteindre la [plage ou valeur cible](#profile-glucose-targets) définie (bolus, débit basal temporaire, arrêt de l'insuline pour éviter une hypoglycémie, etc.).

La Boucle Fermée fonctionne dans de nombreuses limites de sécurité, que vous pouvez régler vous-même.

La Boucle Fermée n'est possible que si vous êtes à l'**[Objectif 7](#objectives-objective7)** ou plus et que vous utilisez une pompe prise en charge.

(autosens)= (Open-APS-features-autosens)=

## Autosens

- Autosens est un algorithme qui analyse les écarts de glycémie (positifs/négatifs/neutres).
- Il va essayer de déterminer à quel point vous êtes sensible/résistant en fonction de ces écarts.
- L'implémentation oref dans **OpenAPS** utilise une combinaison de 24 et 8 heures de données. Il utilise celui des deux qui est le plus sensible.
- Les utilisateurs qui utilisaient oref1 remarqueront probablement que le système peut être moins dynamique en raison de la variation de sensibilité entre 24 heures et 8 heures.
- Changer une canule ou changer de profil réinitialise le ratio Autosens à 100 % (un changement de profil en pourcentage avec une durée ne réinitialise pas Autosens).
- Autosens ajuste votre basal et votre SI (c.-à-d. qu'il imite ce que fait un changement de profil).
- Si vous mangez des glucides en continu pendant une longue période, Autosens sera moins efficace pendant cette période, car les glucides sont exclus du calcul des deltas de **glycémie**.
- Les déviations sont converties en un **ratio de sensibilité** (un pourcentage) : un ratio sous 100 % signifie qu'AAPS pense que vous êtes plus sensible à l'insuline que ce que votre **Profil** suppose (il baisse donc le débit basal effectif et augmente la valeur de SI), tandis qu'un ratio au-dessus de 100 % signifie que vous êtes plus résistant (il augmente donc le débit basal et baisse la valeur de SI).
- Par défaut, ce ratio reste entre 0,7 (70 %, plus sensible) et 1,2 (120 %, plus résistant), pour qu'une série de données inhabituelles ne puisse pas trop éloigner vos doses de votre **Profil**. Ces limites peuvent être modifiées dans les paramètres avancés du Calcul de Sensibilité.
- Autosens et [Autotune](../AdvancedOptions/Autotune.md) traitent le même problème de fond sur des échelles de temps différentes : Autosens ajuste vos doses *en direct*, minute par minute, selon les 8 à 24 dernières heures, alors qu'Autotune réécrit lentement votre *Profil* lui-même, selon des semaines d'historique. Il est normal et prévu d'utiliser les deux : ils se complètent au lieu de faire double emploi.

*Pour une explication technique complète de l'algorithme Autosens, voir la [documentation Autosens d'OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).*

(Open-APS-features-super-micro-bolus-smb)=

## Super Micro Bolus (SMB)

Les **SMB** (abréviation de **Super Micro Bolus**) sont une fonctionnalité d'OpenAPS introduite à partir de 2018 dans l'algorithme Oref1. Contrairement à l'**AMA**, les **SMB** n'utilisent pas des débits basaux temporaires pour contrôler la glycémie, mais surtout de **petits super micro bolus**. Dans des situations où l'**AMA** ajouterait 1,0 UI d'insuline avec un débit basal temporaire, les **SMB** délivrent plusieurs super micro bolus par petites étapes à **5 minutes d'intervalle**, par ex. 0,4 UI, 0,3 UI, 0,2 UI et 0,1 UI. Dans le même temps (pour des raisons de sécurité), le débit basal réel est mis à 0 UI/h pendant un certain temps pour éviter un surdosage (**« basal temporaire à zéro »**). Cela permet au système d'ajuster la glycémie plus vite qu'avec l'augmentation du débit basal temporaire de l'**AMA**.

Grâce aux SMB, pour les repas qui ne contiennent que des glucides « lents », il peut suffire d'indiquer au système la quantité de glucides prévue et de laisser faire **AAPS** pour le reste. Cependant, cela peut conduire à des pics postprandiaux (après le repas) plus élevés, car un pré-bolus n'est pas possible. Ou vous pouvez donner, si nécessaire avec un pré-bolus, un **bolus de départ** qui ne couvre **qu'une partie** des glucides (par ex. 2/3 de la quantité estimée), et laisser les **SMB** délivrer le reste de l'insuline.

![SMBs on the IOB graph](../images/SMBs.png)

Les SMB sont affichés sur le [graphique IA](#aaps-screens-iob) avec des triangles bleus. Faites un [appui long](#aaps-screens-graph-press-and-hold) sur un triangle du graphique pour voir la quantité d'insuline délivrée, ou utilisez l'[Historique Traitements](#aaps-screens-treatments).

Les fonctionnalités des **SMB** contiennent plusieurs mécanismes de sécurité :

1. **Dose maximale d'un seul SMB**  
  La dose maximale d'un seul SMB est la plus petite des valeurs suivantes :
  
        * valeur qui correspond au débit basal actuel (ajusté par Autosens) pendant la durée réglée dans « Max. minutes de basal pour limiter le SMB », par ex. la quantité basale des 30 prochaines minutes, ou
        * la moitié de la quantité d'insuline requise actuellement, ou
        * la part restante de votre valeur maxIOB dans les paramètres.
      

2. **Débits basaux temporaires bas**  
  Les débits basaux temporaires bas (appelés « low temps ») ou les débits basaux temporaires à 0 U/h (appelés « zero-temps ») sont utilisés plus souvent avec les **SMB**. C'est voulu, pour des raisons de sécurité, et cela n'a pas d'effet négatif si le **Profil** est bien réglé. Sur le graphique principal, la courbe de l'IA (fine ligne jaune) est plus parlante que l'évolution des débits basaux temporaires.

3. **Repas non signalés**  
  Calculs supplémentaires pour prévoir l'évolution de la glycémie, par ex. avec les **RNS** (repas non signalés). Même si l'utilisateur ne saisit pas de glucides, les **RNS** peuvent détecter automatiquement une forte hausse de la glycémie due à un repas, à l'adrénaline ou à d'autres causes, et essayer de la corriger avec des **SMB**. Pour être en sécurité, cela marche aussi dans l'autre sens et peut arrêter les SMB plus tôt si une chute rapide inattendue de la glycémie survient. C'est pourquoi RNS doit toujours être activé avec les SMB.

Les SMB ne décident pas seuls qu'il faut de l'insuline : ils utilisent les mêmes prédictions de glycémie combinées (glycémie finale, basal temporaire à zéro, GA, RNS) décrites dans [comment AAPS transforme les prédictions en décision de dose](#aaps-screens-how-predictions-become-a-dosing-decision). Les SMB et le basal temporaire à zéro sont simplement les deux outils qu'AAPS utilise pour appliquer cette décision.

**Vous devez avoir commencé l'[Objectif 9](#objectives-objective9) pour utiliser les SMB.**

Voir aussi la [documentation oref1/SMB d'OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb) pour l'explication technique complète, ou les [informations de Tim sur les SMB](https://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/) pour un article de la communauté.

Les paramètres d'OpenAPS SMB sont décrits ci-dessous.

(Open-APS-features-max-u-h-a-temp-basal-can-be-set-to)=

### Débit de base maximum

Ce paramètre de sécurité détermine le débit basal temporaire maximal que la pompe à insuline peut délivrer. On l'appelle aussi **max-basal**.

La valeur est exprimée en unités d'insuline par heure (U/h). Il est conseillé de choisir une valeur raisonnable. Une bonne règle pour régler ce paramètre est :

**MAX-BASAL = DÉBIT BASAL LE PLUS ÉLEVÉ x 4**

Par exemple, si le débit basal le plus élevé de votre profil est de 0,5 U/h, vous pouvez le multiplier par 4 pour obtenir une valeur de 2 U/h.

**AAPS** limite cette valeur par une « limite fixe » selon [Paramètres > Sécurité > Âge du patient](#preferences-patient-type). Les limites fixes sont les suivantes :

- Enfant : 2
- Adolescent : 5
- Adulte : 10
- Adulte résistant à l'insuline : 12
- Femme enceinte : 25

*Voir aussi l'[aperçu des limites fixes](#Open-APS-features-overview-of-hard-coded-limits).*

(Open-APS-features-maximum-total-iob-openaps-cant-go-over)=

### IA totale maximale qu'OpenAPS ne peut pas dépasser

Cette valeur détermine l'**Insuline Active** maximale (IA basale et bolus) sous laquelle **AAPS** reste quand il fonctionne en boucle fermée. On l'appelle aussi **maxIOB**.

Si l'IA actuelle (par ex. après un bolus de repas) est supérieure à la valeur définie, la boucle arrête de délivrer de l'insuline jusqu'à ce que l'IA repasse sous la limite.

Pour commencer, une bonne valeur pour ce paramètre est :

      maxIOB = bolus de repas moyen + 3 x basal quotidien max
    

Soyez prudent et patient quand vous ajustez votre **max-IOB**. Cette valeur est différente d'une personne à l'autre et peut aussi dépendre de la dose totale quotidienne (DTQ).

**AAPS** limite cette valeur par une « limite fixe » selon [Paramètres > Sécurité > Âge du patient](#preferences-patient-type). Les limites fixes sont les suivantes :

- Enfant : 7
- Adolescent : 13
- Adulte : 22
- Adulte résistant à l'insuline : 30
- Femme enceinte : 70

*Voir aussi l'[aperçu des limites fixes](#Open-APS-features-overview-of-hard-coded-limits).*

Remarque : avec les **SMB**, le **max-IOB** est calculé autrement qu'avec l'AMA. Avec l'**AMA**, maxIOB est un paramètre de sécurité pour l'**IA** basale, alors qu'en mode SMB, il inclut aussi l'IA des bolus.

### Activer la sensibilité dynamique

C'est la fonctionnalité [SI dynamique](../DailyLifeWithAaps/DynamicISF.md). Quand elle est activée, de nouveaux paramètres apparaissent. Les paramètres sont expliqués sur la page [SI dynamique](#dyn-isf-preferences).

### Utiliser Autosens

C'est la fonctionnalité [Autosens](#Open-APS-features-autosens). Avec la SI dynamique, Autosens ne peut pas être utilisé, car ce sont deux algorithmes différents qui modifient la même variable (la sensibilité).

Autosens analyse les écarts de glycémie (positifs/négatifs/neutres). Il essaiera de comprendre à quel point vous êtes sensible/résistant en fonction de ces écarts et ajustera le débit basal et la SI en fonction de ces écarts.

Quand elle est activée, de nouveaux paramètres apparaissent.

#### Sensibilité augmente la Cible

Si cette option est activée, le calcul de sensibilité (Autosens) peut augmenter la cible quand une sensibilité est détectée (sous 100 %). Dans ce cas, votre cible sera augmentée du pourcentage de la sensibilité détectée.

Si la cible est modifiée à cause du calcul de sensibilité, elle est affichée sur fond vert sur votre écran principal.

![Cible modifiée par Autosens](../images/Home2020_DynamicTargetAdjustment.png)

Ce paramètre est disponible quand « Activer la sensibilité dynamique » ou « Utiliser Autosens » est activé.

#### Résistance diminue la cible

Si cette option est activée, le calcul de sensibilité (Autosens) peut baisser la cible quand une résistance est détectée (au-dessus de 100 %). Dans ce cas, la cible sera diminuée du pourcentage de la résistance détectée.

Ce paramètre est disponible quand « Activer la sensibilité dynamique » ou « Utiliser Autosens » est activé.

### Activer SMB

Activez cette option pour utiliser la fonctionnalité SMB. Si elle est désactivée, aucun **SMB** ne sera donné.

Quand elle est activée, de nouveaux paramètres apparaissent.

(Open-APS-features-enable-smb-with-high-temp-targets)=

#### Activer les SMB avec Cibles Temp hautes

Si ce paramètre est activé, les **SMB** sont toujours délivrés même si l'utilisateur a choisi une **Cible Temp** haute (c.-à-d. 100 mg/dl ou 5,6 mmol/l et plus, quelle que soit la cible du **Profil**). Soyez prudent en l'activant : les **SMB** peuvent devenir trop agressifs si vos paramètres ne sont pas bien réglés ou si votre **Profil** change souvent (par exemple chez les enfants).

Quand ce paramètre est désactivé, une **Cible Temp** haute désactive les **SMB**. Par exemple, si cette option est désactivée, vous pouvez désactiver les **SMB** en réglant une **Cible Temp** de 100 mg/dl ou 5,6 mmol/l et plus. Cette option désactive aussi les **SMB**, quelle que soit l'autre condition qui essaie de les activer, sauf avec une **Cible Temp** basse comme **Repas imminent** (ou toute **Cible Temp** de 98 mg/dl ou 5,4 mmol/l et moins), qui peut encore délivrer des **SMB** pour amener la **glycémie** vers la cible.

Ce paramètre n'active pas les **SMB** à lui seul. Avec une cible temporaire haute, un **SMB** n'est donné que si un des autres paramètres ci-dessous (par exemple **Activer en permanence les SMB** ou **Activer SMB avec les GA**) le permet aussi.

(Open-APS-features-enable-smb-always)=

#### Activer en permanence les SMB

Si ce paramètre est activé, les SMB sont toujours activés (quels que soient les GA, les cibles temporaires ou les bolus). Quand ce paramètre est activé, les autres paramètres d'activation ci-dessous sont ignorés. Cependant, si **Activer les SMB avec Cibles Temp hautes** est désactivé et qu'une cible temporaire haute est active, les SMB seront désactivés.

Ce paramètre n'est disponible que si **AAPS** détecte que vous utilisez une [source de glycémie fiable](#GettingStarted-TrustedBGSource), avec un filtrage avancé. Le FreeStyle Libre 1 n'est pas considéré comme une source fiable, car en cas de panne du capteur, il risque de répéter sans fin d'anciennes données de glycémie.

Des données bruitées pourraient faire croire à **AAPS** que la glycémie monte très vite, et entraîner des SMB inutiles. Pour plus d'informations sur le bruit et le lissage des données, voir [ici](../CompatibleCgms/SmoothingBloodGlucoseData.md).

#### Activer SMB avec les GA

Quand ce paramètre est activé, les SMB sont activés lorsque la valeur de GA est supérieure à 0.

Ce paramètre n'est pas visible si « Activer en permanence les SMB » est activé.

#### Activer les SMB avec Cibles Temp basses

Si ce paramètre est activé, les SMB sont activés quand une cible temporaire est active (repas imminent, activité, hypo, personnalisée). Si ce paramètre est activé mais que **Activer les SMB avec Cibles Temp hautes** est désactivé, les SMB sont activés avec une cible temporaire basse (98 mg/dl ou 5,4 mmol/l et moins), mais désactivés avec une cible temporaire haute.

Ce paramètre n'est pas visible si « Activer en permanence les SMB » est activé.

#### Activer les SMB après les glucides

Si ce paramètre est activé, les SMB sont activés pendant 6 h après l'annonce de glucides, même si les GA sont revenus à 0.

Pour des raisons de sécurité, ce paramètre n'est disponible que si **AAPS** détecte que vous utilisez une source de glycémie fiable. Il n'est pas visible si « Activer en permanence les SMB » est activé.

Ce paramètre n'est disponible que si **AAPS** détecte que vous utilisez une [source de glycémie fiable,](#GettingStarted-TrustedBGSource) avec un filtrage avancé. Le FreeStyle Libre 1 n'est pas considéré comme une source fiable, car en cas de panne du capteur, il risque de répéter sans fin d'anciennes données de glycémie.

Des données bruitées pourraient faire croire à **AAPS** que la glycémie monte très vite, et entraîner des SMB inutiles. Pour plus d'informations sur le bruit et le lissage des données, voir [ici](../CompatibleCgms/SmoothingBloodGlucoseData.md).  
Ce paramètre n'est pas visible si « Activer en permanence les SMB » est activé.

#### Intervalle SMB

Ce paramètre limite la fréquence des SMB. Cette valeur détermine le temps minimum entre chaque SMB. Notez que la boucle s'exécute à chaque fois qu'une valeur de glycémie arrive (généralement toutes les 5 minutes). Retirez 2 minutes pour laisser à la boucle le temps de terminer. Par ex., si vous voulez qu'un SMB puisse être donné à chaque exécution de la boucle, réglez cette valeur sur 3 minutes.

Valeur par défaut : 3 min.

(Open-APS-features-max-minutes-of-basal-to-limit-smb-to)=

#### Max. minutes de basal pour limiter le SMB

C'est un paramètre de sécurité important. Cette valeur détermine la quantité de SMB qui peut être donnée, en fonction de la quantité d'insuline basale sur une durée donnée, quand elle est couverte par des GA.

En augmentant cette valeur, les SMB deviennent plus agressifs. Vous devriez commencer avec la valeur par défaut de 30 minutes. Avec un peu d'expérience, augmentez la valeur par pas de 15 minutes et observez les effets sur plusieurs repas.

Il est recommandé de ne pas dépasser 90 minutes, car l'algorithme pourrait alors ne plus pouvoir compenser une baisse de glycémie avec un débit basal de 0 U/h (« basal temporaire à zéro »). Vous devriez aussi régler des alarmes qui vous préviennent bien avant une hypoglycémie, surtout si vous testez encore de nouveaux paramètres.

Valeur par défaut : 30 min.

#### Minutes maximum de basal RNS pour limiter SMB

Ce paramètre permet de régler la force des SMB pendant les RNS, quand il n'y a plus de glucides.

Valeur par défaut : la même que **Max. minutes de basal pour limiter le SMB**.

Ce paramètre n'est visible que si « Activer SMB » et « Activer RNS » sont activés.

(enable-uam)=

### Activer RNS

Avec cette option activée, l'algorithme SMB peut détecter des repas non signalés. C'est utile si vous oubliez d'indiquer vos glucides à **AAPS**, si vous les estimez mal et que la quantité saisie est fausse, ou si un repas riche en graisses et en protéines dure plus longtemps que prévu. Sans aucune saisie de glucides, les RNS peuvent détecter une hausse rapide de la glycémie due aux glucides, à l'adrénaline, etc., et essayent de la corriger avec des SMB. Cela fonctionne aussi dans l'autre sens : en cas de baisse rapide de la glycémie, les SMB peuvent être arrêtés plus tôt.

**Par conséquent, les RNS devraient toujours être activés lorsque les SMB le sont aussi.**

(key-aaps-features-minimal-carbs-required-for-suggestion)=

### Seuil de glucides requis

Nombre minimal de grammes de glucides pour afficher une alerte de suggestion de glucides. Des glucides supplémentaires vous seront suggérés quand l'algorithme de référence détecte qu'il faut des glucides. Dans ce cas, vous recevrez une notification qui peut être reportée pendant 5, 15 ou 30 minutes.

Les notifications Glucides requis peuvent être envoyées sur Nightscout si vous le souhaitez, dans ce cas une annonce sera affichée et diffusée.

Dans tous les cas, les glucides requis sont affichés dans la partie GA de votre écran principal.

![Affichage des glucides requis sur l'écran principal](../images/main/main_screen_carbs_required.png)

### Paramètres Avancés

Pour la liste complète des paramètres (y compris ceux qui ne sont pas décrits ici), voir la [documentation d'OpenAPS sur les préférences et les paramètres de sécurité](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).

**Toujours utiliser le delta moyen court au lieu des données simples** Si vous activez cette fonctionnalité, **AAPS** utilise le delta moyen court / la glycémie des 15 dernières minutes, qui est en général la moyenne des trois dernières valeurs. Cela aide **AAPS** à être plus stable avec des sources de données bruitées comme xDrip et Libre.

**Multiplicateur max quotidien de sécurité** C'est une limite de sécurité importante. Le paramètre par défaut (qui n'a normalement pas besoin d'être ajusté) est 3. Cela signifie qu'**AAPS** ne pourra jamais régler un débit basal temporaire supérieur à 3 fois le débit basal horaire le plus élevé programmé dans la pompe et/ou le profil de l'utilisateur. Exemple : si votre débit basal le plus élevé est de 1,0 U/h et que le multiplicateur max quotidien de sécurité est de 3, **AAPS** peut régler un débit basal temporaire maximal de 3,0 U/h (= 3 x 1,0 U/h).

Valeur par défaut : 3 (ne doit pas être modifié sauf si vous en avez vraiment besoin et que vous savez ce que vous faites)

**Multiplicateur de sécurité basale courante** C'est une autre limite de sécurité importante. Le paramètre par défaut (qui n'a normalement pas besoin d'être ajusté non plus) est 4. Cela signifie qu'**AAPS** ne pourra jamais régler un débit basal temporaire supérieur à 4 fois le débit basal horaire actuel programmé dans la pompe et/ou le profil de l'utilisateur.

Valeur par défaut : 4 (ne doit pas être modifié sauf si vous en avez vraiment besoin et que vous savez ce que vous faites)

* * *

(Open-APS-features-auto-isf)=

## Auto ISF

**Auto ISF** est un algorithme **expérimental** pour les utilisateurs avancés. Il est basé sur OpenAPS SMB et ajoute des règles qui rendent le facteur de sensibilité à l'insuline (SI) plus fort ou plus faible selon le comportement de votre glycémie.

C'est une fonctionnalité de développement : on ne peut l'activer que dans une [version de développement](../AdvancedOptions/DevBranch.md) avec le **Mode ingénierie** activé. Dans une version normale, elle reste désactivée de force et n'apparaît donc pas dans **Configuration → APS**. Terminer les [Objectifs](../SettingUpAaps/CompletingTheObjectives.md) ne la débloque pas.

Une fois sélectionné, ses **Paramètres** contiennent les paramètres d'OpenAPS SMB et un groupe **Paramètres AutoISF** :

- **Activer AutoISF** : active les ajustements de la SI. Sans cette option, l'algorithme se comporte comme OpenAPS SMB.
- **AutoISF min** et **AutoISF max** : jusqu'où la SI peut devenir faible et forte, de la même manière que les limites d'Autosens. Avec la valeur par défaut 1,0, l'effet est désactivé.
- **Poids** : chacun commande une règle, et la valeur par défaut 0,0 désactive la règle. 
  - quand la glycémie **accélère**, la SI est renforcée (plus d'insuline) ;
  - quand la glycémie **ralentit**, la SI est affaiblie (moins d'insuline) ;
  - quand la glycémie est **sous la cible**, la SI est affaiblie ;
  - quand la glycémie est **au-dessus de la cible**, la SI est renforcée ;
  - un poids **postprandial** et un poids de **durée** agissent après les repas et quand la glycémie reste haute longtemps.
- **Ratio d'injection SMB** (avec un minimum, un maximum et une plage de glycémie) : quelle part de l'insuline requise peut être délivrée en SMB.
- **Extension de plage SMB maxi** : de quel facteur la limite habituelle de taille des SMB ([max. minutes de basal](#Open-APS-features-max-minutes-of-basal-to-limit-smb-to), normalement 120 minutes) peut être dépassée. La valeur par défaut 1 ne change rien ; on peut aller jusqu'à 5. Augmentez cette valeur expérimentale lentement et avec prudence.
- **Seuil IA en pourcentage** : le pourcentage de maxIOB au-dessus duquel les SMB sont désactivés.

    {admonition} Réservé aux utilisateurs expérimentés
    :class: danger
    Avec ses valeurs par défaut, Auto ISF ne change rien. Chaque valeur que vous augmentez rend **AAPS** plus agressif. Changez une seule valeur à la fois, par petits pas, et observez le résultat pendant plusieurs jours. Soyez extrêmement prudent avec un **AutoISF max** au-dessus de 2,5.

(Open-APS-features-advanced-meal-assist-ama)=

## Advanced Meal Assist (AMA)

AMA, abréviation de « advanced meal assist » (assistance repas avancée), est une fonctionnalité d'OpenAPS de 2017 (oref0). L'Advanced Meal Assist (AMA) d'OpenAPS permet au système de mettre plus vite un débit basal temporaire haut après un bolus de repas, si vous saisissez vos glucides de façon fiable.

Vous pouvez trouver plus d'informations dans la [documentation OpenAPS](https://newer-docs.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

### Débit de base maximum (OpenAPS « max-basal »)

Ce paramètre de sécurité empêche **AAPS** de pouvoir donner un débit basal dangereusement élevé et limite le débit basal temporaire à x U/h. Il est conseillé de choisir une valeur raisonnable. Une bonne règle est de prendre le débit basal le plus élevé de votre profil et de le multiplier par 4, et au moins par 3. Par exemple, si le débit basal le plus élevé de votre profil est de 1,0 U/h, vous pouvez le multiplier par 4 pour obtenir 4 U/h, et régler 4 comme paramètre de sécurité.

Vous ne pouvez pas choisir n'importe quelle valeur : pour des raisons de sécurité, il existe une « limite fixe », qui dépend de l'âge du patient. La « limite fixe » de maxIOB est plus basse avec l'AMA qu'avec les SMB. La valeur la plus faible est pour les enfants et la valeur la plus élevée est pour les adultes résistants à l'insuline.

Les paramètres codés en dur dans **AAPS** sont :

- Enfant : 2
- Adolescent : 5
- Adulte : 10
- Adulte résistant à l'insuline : 12
- Femme enceinte : 25

*Voir aussi l'[aperçu des limites fixes](#Open-APS-features-overview-of-hard-coded-limits).*

### IA basale maximale qu'OpenAPS peut délivrer \[U\] (OpenAPS « max-iob »)

Ce paramètre limite l'IA basale maximale jusqu'à laquelle **AAPS** fonctionne encore. Si l'IA est plus élevée, AAPS arrête de délivrer de l'insuline basale additionnelle jusqu'à ce que l'IA de basale repasse sous la limite.

La valeur par défaut est 2, mais vous devriez augmenter ce paramètre lentement pour voir son effet sur vous et trouver la valeur qui vous convient le mieux. C'est différent pour tout le monde et dépend aussi de la Dose Totale Quotidienne (DTQ) moyenne. Pour des raisons de sécurité, il y a une limite, qui dépend de l'âge du patient. La « limite fixe » de maxIOB est plus basse avec l'AMA qu'avec les SMB.

- Enfant : 3
- Adolescent : 5
- Adulte : 7
- Adulte résistant à l'insuline : 12
- Femme enceinte : 25

*Voir aussi l'[aperçu des limites fixes](#Open-APS-features-overview-of-hard-coded-limits).*

### Utiliser Autosens (AMA)

Ici, vous pouvez choisir d'utiliser ou non le [calcul de sensibilité](../DailyLifeWithAaps/SensitivityDetectionAndCob.md) Autosens.

### Autosens ajuste aussi les Cibles

Si cette option est activée, Autosens peut aussi ajuster les cibles (en plus du débit basal et de la SI). Cela rend **AAPS** plus « agressif » ou non. La cible réelle peut être atteinte plus rapidement avec ceci.

### Paramètres Avancés

- Normalement, vous n'avez pas besoin de modifier les paramètres de cette boîte de dialogue !
- Si vous voulez quand même les modifier, assurez-vous de bien comprendre ce que vous faites : voir la liste complète des paramètres dans la [documentation d'OpenAPS sur les préférences et les paramètres de sécurité](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).

**Toujours utiliser le delta moyen court au lieu des données simples** Si vous activez cette fonctionnalité, **AAPS** utilise le delta moyen court / la glycémie des 15 dernières minutes, qui est en général la moyenne des trois dernières valeurs. Cela aide **AAPS** à fonctionner de façon plus stable avec des sources de données bruitées comme xDrip et Libre.

**Multiplicateur max quotidien de sécurité** C'est une limite de sécurité importante. Le paramètre par défaut (qui n'a normalement pas besoin d'être ajusté) est 3. Cela signifie qu'**AAPS** ne pourra jamais régler un débit basal temporaire supérieur à 3 fois le débit basal horaire le plus élevé programmé dans la pompe de l'utilisateur. Exemple : si votre débit basal le plus élevé est de 1,0 U/h et que le multiplicateur max quotidien de sécurité est de 3, **AAPS** peut régler un débit basal temporaire maximal de 3,0 U/h (= 3 x 1,0 U/h).

Valeur par défaut : 3 (ne doit pas être modifié sauf si vous en avez vraiment besoin et que vous savez ce que vous faites)

**Multiplicateur de sécurité basale courante** C'est une autre limite de sécurité importante. Le paramètre par défaut (qui n'a normalement pas besoin d'être ajusté non plus) est 4. Cela signifie qu'**AAPS** ne pourra jamais régler un débit basal temporaire supérieur à 4 fois le débit basal horaire actuel programmé dans la pompe de l'utilisateur.

Valeur par défaut : 4 (ne doit pas être modifié sauf si vous en avez vraiment besoin et que vous savez ce que vous faites)

**Report de bolus, diviseur de DAI** La fonctionnalité « report de bolus » (bolus snooze) agit après un bolus de repas. Après un repas, **AAPS** ne règle pas de débits basaux temporaires bas pendant une durée égale à la DAI divisée par le paramètre « report de bolus ». La valeur par défaut est 2. Cela signifie qu'avec une DAI de 5 h, le « report de bolus » durerait 5 h : 2 = 2,5 h.

Valeur par défaut : 2

* * *

(Open-APS-features-overview-of-hard-coded-limits)=

## Aperçu des limites fixes

|            | Enfant | Adolescent | Adulte | Adulte résistant à l'insuline | Femme enceinte |
| ---------- | ------ | ---------- | ------ | ----------------------------- | -------------- |
| BOLUS MAX  | 5      | 10         | 17     | 25                            | 60             |
| DAI MIN    | 5      | 5          | 5      | 5                             | 5              |
| DAI MAX    | 9      | 9          | 9      | 9                             | 10             |
| G/I MIN    | 2      | 2          | 2      | 2                             | 0,3            |
| G/I MAX    | 100    | 100        | 100    | 100                           | 100            |
| IA MAX AMA | 3      | 5          | 7      | 12                            | 25             |
| IA MAX SMB | 7      | 13         | 22     | 30                            | 70             |
| BASAL MAX  | 2      | 5          | 10     | 12                            | 25             |