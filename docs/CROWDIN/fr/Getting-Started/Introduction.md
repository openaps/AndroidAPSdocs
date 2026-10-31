# Introduction aux APS et à AAPS

```{contents} In this page
:backlinks: entry
:depth: 2
```

## Qu'est-ce qu'un « système de pancréas artificiel » ?

Un pancréas humain fait beaucoup de choses en plus de réguler la glycémie. Cependant, le terme **« Système de pancréas artificiel » (APS)** fait généralement référence à un système qui agit pour maintenir automatiquement les niveaux de glycémie dans les limites de la santé.

La façon basique de faire cela est de détecter les **niveaux de glycémies**, utiliser ces valeurs pour faire des **calculs**, puis d'injecter le montant correct (estimé) d'**insuline** dans le corps. Il répète le calcul régulièrement (quelques minutes), 24h/24, 7j/7. Il utilise des **alarmes** et des **alertes** pour informer l'utilisateur si une intervention ou une attention est nécessaire. Ce système se compose en général d'un **capteur de glucose**, d'une **pompe à insuline** et d'un **contrôleur** qui fait les calculs. Dans **AAPS** et les autres systèmes open source, le contrôleur est une application sur un téléphone. Dans la plupart des systèmes commerciaux, c'est un logiciel intégré dans la pompe elle-même, et une application sur le téléphone sert surtout à l'affichage et à la commande.

Pour comprendre comment les systèmes en boucle fermée se sont développés et comment ils fonctionnent, cet article de synthèse de 2022 est un bon point de départ. Attention : il est antérieur à la plupart des systèmes disponibles aujourd'hui, il ne décrit donc pas ce qui est actuellement sur le marché :

![Frontières](../images/FRONTIERS_Logo_Grey_RGB.png) [Closed-Loop Insulin Delivery Systems: Past, Present, and Future Directions](https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2022.919942/full) (Templer, _Frontiers in Endocrinology_, 2022).

Les systèmes dits « bi-hormonaux » injectent du glucagon en plus de l'insuline, dans le but d'éviter les hypos sévères et de permettre un contrôle encore plus serré de la glycémie. Un premier système de ce type a été approuvé en Europe, mais il n'est fourni que dans le cadre d'études et de projets, et d'autres sont encore en développement. Aucun n'est encore en vente libre.

Un pancréas artificiel peut être considéré comme un ["pilote automatique pour votre diabète"](https://www.artificialpancreasbook.com/). En d'autres termes :

Dans un avion, un pilote automatique ne fait pas tout le travail du pilote humain, ainsi le pilote ne peut pas dormir pendant la totalité du vol. Le pilote automatique facilite le travail du pilote. Il le libère de la charge de devoir piloter l'avion en permanence, ce qui permet au pilote de se concentrer sur la surveillance générale. Le pilote automatique reçoit les signaux de divers capteurs. Un ordinateur évalue les données avec les consignes du pilote, puis fait les ajustements nécessaires et alerte le pilote en cas de problème. Le pilote n'a plus à prendre des décisions en permanence, et cette comparaison s'applique aussi à **AAPS**.

![image](../images/autopilot.png)

(Introduction-what-does-hybrid-closed-loop-mean)=
## Que signifie "boucle fermée hybride" ?

La meilleure solution pour le diabète de type 1 serait un « traitement fonctionnel » (probablement un implant de cellules pancréatiques protégées du système immunitaire). En attendant cela, pour la communauté des diabétiques de type 1 (DT1), un pancréas artificiel en « boucle fermée totale » est sans doute la meilleure solution possible. Il s'agit d'un système technologique qui n'a besoin d'aucune entrée utilisateur (comme les bolus d'insuline pour les repas, ou l'annonce d'une activité physique), avec une bonne régulation des taux de glycémie. Presque tous les systèmes utilisés au quotidien sont des boucles fermées « hybrides », car ils combinent une technologie automatisée et des actions de l'utilisateur. Les premiers systèmes en boucle fermée totale ont été approuvés en Europe en 2026, mais aucun n'est encore largement disponible.

## Comment et pourquoi la boucle a-t-elle commencé ?

Le développement de technologies commerciales pour les personnes atteintes de diabète de type 1 (DT1) est très lent. En 2013, la communauté DT1 a fondé le mouvement #WeAreNotWaiting (#nous n'attendons pas). Ses membres ont mis au point eux-mêmes des systèmes utilisant des technologies déjà approuvées (pompes à insuline et capteurs de glycémie) pour améliorer le contrôle du taux de glycémie, la sécurité et la qualité de vie. On les appelle systèmes OS-AID (Open-Source Automated Insulin Delivery, administration automatisée d'insuline open source), anciennement systèmes DIY (« faits maison »), car ils ne sont pas formellement approuvés par les autorités de santé (FDA, NHS, etc.). Il existe quatre grands systèmes OS-AID : [OpenAPS](https://openaps.org/what-is-openaps/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) et [Trio](https://triodocs.org).

Pour bien comprendre les bases de la boucle OS-AID, une très bonne solution est de lire le livre de Dana Lewis « Automated Insulin Delivery ». Vous pouvez y accéder [ici](https://www.artificialpancreasbook.com/) gratuitement (ou acheter une copie papier du livre). Si vous voulez en savoir plus sur [OpenAPS](https://openaps.org/what-is-openaps/), qui est le fondement d'**AAPS**, le site [OpenAPS](https://openaps.org/what-is-openaps/) est la référence.

Plusieurs systèmes commerciaux en boucle fermée hybride sont aussi sortis. Ils sont très différents des systèmes OS-AID, surtout parce que beaucoup d'entre eux contiennent un « algorithme d'apprentissage » qui ajuste la quantité d'insuline injectée selon vos besoins en insuline des jours précédents. Beaucoup de personnes de la communauté OS-AID ont déjà essayé des systèmes commerciaux et les ont comparés à leur système OS-AID. Pour en savoir plus sur la comparaison entre les systèmes, vous pouvez poser vos questions dans les groupes Facebook dédiés à ces systèmes, dans le [groupe Facebook AAPS](https://www.facebook.com/groups/AndroidAPSUsers/) ou sur [Discord](https://discord.com/invite/4fQUWHZ4Mw).

## Qu'est-ce que Android APS (AAPS) ?

![image](../images/basic-outline-of-AAPS.png)

**Figure 1**. Schéma de base d'Android APS (système de pancréas artificiel), AAPS.

Android APS (**AAPS**) est un système en boucle fermée hybride, ou système de pancréas artificiel (APS). Il calcule les doses d'insuline avec des algorithmes [OpenAPS](https://openaps.org/) éprouvés (un ensemble de règles), développés par la communauté DT1 #WeAreNotWaiting.

Comme OpenAPS n'est compatible qu'avec certaines pompes à insuline anciennes, **AAPS** (qui peut être utilisé avec plus de pompes à insuline) a d'abord été développé en 2016 pour un membre d'une famille atteint de diabète de type 1. Depuis ses débuts, **AAPS** a été sans cesse développé et amélioré par une équipe de développeurs informatiques bénévoles et d'autres passionnés qui ont une connexion avec le monde du diabète de type 1. Aujourd'hui, **AAPS** est utilisé par plusieurs milliers de personnes dans le monde. C'est un système très personnalisable et polyvalent. Comme il est open source, il est aussi facilement compatible avec de nombreux autres logiciels et plateformes open source pour le diabète. Les composants fondamentaux du système **AAPS** actuel sont décrits dans **la figure 1** ci-dessus.



## Quels sont les composants de base d'AAPS ?

Le « cerveau » d'AAPS est une **application** que vous compilez vous-même. Des instructions détaillées, étape par étape, sont fournies pour cela. Vous installez ensuite l'**application AAPS** sur un **smartphone Android** [compatible](../Getting-Started/Phones.md) (**1**). Un certain nombre d'utilisateurs préfèrent conserver leur boucle sur un téléphone distinct de leur téléphone principal. Vous pouvez donc par exemple utiliser un téléphone Android juste pour faire fonctionner votre boucle AAPS et utiliser votre téléphone habituel pour toutes vos autres activités.

Vous aurez besoin d'une application supplémentaire sur votre **smartphone Android**, en plus d'**AAPS**. Cette [application supplémentaire](../Getting-Started/CompatiblesCgms.md) reçoit les données de glucose d'un capteur (**2**) par Bluetooth, puis envoie les données en interne, sur le téléphone, à l'**application AAPS**.

L'application **AAPS** utilise le processus de prise de décision (**algorithme**) d'OpenAPS. Les débutants commencent à utiliser l'algorithme de base **oref0** , mais il est possible de passer à l'utilisation de l'algorithme **oref1** plus récent au fur et à mesure que vous progressez avec AAPS. Le choix de l'algorithme (oref0 ou oref1) sera à effectuer en fonction de celui qui correspondra le mieux à votre situation.  Dans les deux cas, l'algorithme prend en compte plusieurs facteurs, et effectue des calculs rapides chaque fois qu'une nouvelle lecture provient du capteur de glycémie. L'algorithme envoie ensuite par Bluetooth à la pompe à insuline (**3**) les instructions sur la quantité d'insuline à injecter. Toutes les informations peuvent être envoyées sur Internet (**4**) par les données mobiles ou par Wi-Fi. Ces données peuvent également être partagées avec des abonnés, si souhaité, et/ou collectées pour analyse. Vous pouvez aussi, si vous le souhaitez, associer une [montre connectée](../Getting-Started/Watches.md) (**5**) au téléphone pour voir vos données d'un coup d'œil et, avec certaines montres, envoyer des commandes simples à **AAPS**.

## Quels sont les avantages du système AAPS ?

L'algorithme OpenAPS utilisé par **AAPS** contrôle la glycémie sans action de l'utilisateur, selon les paramètres que l'utilisateur a définis (les plus importants sont les débits de basal, les facteurs de sensibilité à l'insuline, les ratios insuline/glucides, la durée d'action de l'insuline, etc.). Il réagit toutes les 5 minutes aux nouvelles données du capteur.

Parmi les avantages d'**AAPS** cités par les utilisateurs, on trouve de nombreuses options de réglage fin, les **automatisations** et une plus grande transparence du système pour le patient ou l'aidant. Cela peut permettre de mieux contrôler votre diabète (ou celui d'une personne dont vous vous occupez), et donc d'améliorer la qualité de vie et d'avoir l'esprit plus tranquille.

Si vous y investissez du temps, **AAPS** peut potentiellement conduire à :

- soulager le stress et la charge mentale de la gestion du diabète de type 1 ;

- réduire la multitude de décisions banales de la gestion au quotidien du diabète de type 1 ;

- fournir un débit adapté et personnalisé d'insuline basé sur des données en temps réel qui peuvent réduire le besoin de traitements d'hypoglycémie et réduire les épisodes d'hyperglycémie ;

- avoir une meilleure connaissance de la gestion de l'insuline et de la confiance en soi pour mieux affiner vos paramètres ;

- la possibilité de créer des paramètres automatiques (**automatisations**) adaptés à votre style de vie ;

- une meilleure qualité de sommeil et une baisse globale du nombre d'interventions la nuit ;

- la surveillance et l'administration d'insuline à distance pour les aidants des diabétiques de type 1 ; et

- le regroupement de tous vos appareils portables pour le diabète (récepteur du capteur de glucose en continu et appareils de commande de l'insuline) en un seul téléphone Android contrôlé par **AAPS**.


Au final, **AAPS** peut permettre aux individus de reprendre le contrôle et mieux gérer leur diabète, ce qui entraîne des taux de glycémie stables et de meilleurs résultats à long terme en matière de santé.

### Parmi les avantages spécifiques :

#### 1) Sécurité intégrée
Pour en savoir plus sur les caractéristiques de sécurité des algorithmes, appelés oref0 et oref1, [cliquez ici](https://openaps.org/reference-design/). L'utilisateur a la responsabilité de définir ses propres limites de sécurité.

#### 2) Flexibilité du matériel

**AAPS** fonctionne avec un grand nombre de pompes à insuline et de capteurs, et s'adapte aux changements de votre vie. Ainsi, par exemple, si vous développez une allergie à la colle du capteur Dexcom, vous pourrez à la place, basculer vers un capteur Freestyle libre. Les utilisateurs n'ont pas besoin de recompiler ni de réinstaller l'application **AAPS** : pour changer de matériel, il suffit de choisir une autre pompe ou une autre source GLY dans **Configuration**. **AAPS** ne dépend pas d'un pilote de pompe particulier et contient aussi une « pompe virtuelle », pour que les utilisateurs puissent faire des essais en toute sécurité avant de l'utiliser sur eux-mêmes.

#### 3) Très personnalisable, avec de larges plages de réglage

Les utilisateurs peuvent facilement ajouter ou supprimer des modules ou des fonctionnalités, et **AAPS** peut être utilisé en mode boucle ouverte ou fermée. Voici quelques exemples des possibilités offertes par le système **AAPS** :

 a) La possibilité de définir une cible de **glycémie** plus basse 30 min avant de manger ; vous pouvez régler la cible jusqu'à 72 mg/dl (4,0 mmol/l).

 b) Si votre résistance à l'insuline a pour conséquence des glycémies élevées, **AAPS** vous permettra de mettre en place une règle d'**automatisation** qui se déclenchera quand la glycémie dépasse 144 mg/dL (8 mmol/L), changeant (par exemple) le profil à 120% (entrainant une augmentation de 20% des débits de basale et également un renforcement des autres variables, par rapport à votre **profil** habituel). L'automatisation durera selon la durée que vous aurez programmée. Une automatisation pourrait par exemple être configurée pour être active seulement certains jours de la semaine, ou certaines heures de la journée, ou même en certains lieux.

 c) Si votre enfant se retrouve sans prévenir sur un trampoline, **AAPS** permettra de suspendre l'injection d'insuline pour une période déterminée, directement via le téléphone.

 d) Après avoir rebranché une pompe à tubulure qui a été déconnectée pour nager, **AAPS** calculera l'insuline basale que vous avez manquée pendant la déconnexion et vous l'injectera prudemment, en fonction de votre glycémie actuelle. Toute insuline non requise peut être remplacée par une simple « annulation » de l'insuline basale correspondante.

 e) **AAPS** vous permet de définir des profils différents pour différentes situations et de passer facilement de l'un à l'autre. Par exemple, les fonctions qui permettent à l'algorithme de faire baisser plus vite une glycémie élevée (comme les super-micro-bolus (« **SMB** ») ou les repas non signalés (« **RNS** »)) peuvent être réglées pour agir uniquement pendant la journée, si vous avez peur des hypos la nuit.

Il s'agit là de quelques exemples, l'éventail complet des fonctionnalités offrant une grande flexibilité dans la vie quotidienne, y compris l'activité sportive, les maladies, les cycles hormonaux, _etc_. En résumé, c'est à l'utilisateur de décider comment utiliser cette flexibilité, et il n'y a pas une automatisation unique pour tout le monde.

#### 4) Surveillance à distance
Il existe plusieurs moyens de surveillance (Sugarmate, Dexcom Follow, xDrip, Android Auto _etc._), utiles pour les parents ou les aidants, et pour les adultes dans certaines situations (sommeil, conduite) qui ont besoin d'alertes personnalisables. Dans certaines applications (xDrip), vous pouvez aussi désactiver complètement les alarmes, ce qui est très pratique si vous avez un nouveau capteur en phase de stabilisation (« soaking ») avec lequel vous ne voulez pas encore boucler.

#### 5) Contrôle à distance
Un grand avantage d'**AAPS** par rapport aux systèmes commerciaux : les suiveurs peuvent envoyer de nombreuses commandes au système **AAPS**, avec des commandes SMS authentifiées ou avec une application **AAPSClient** associée. Cette fonction est très utilisée par les parents d'enfants diabétiques de type 1 qui utilisent **AAPS**.

Les fonctions de contrôle à distance peuvent être très utiles : par exemple, au parc, si vous voulez faire un pré-bolus pour un goûter depuis votre propre téléphone pendant que votre enfant est occupé à jouer. Il est aussi possible de surveiller le système depuis une montre connectée (_par exemple_ Garmin) ou d'envoyer des commandes simples depuis la montre (_par exemple_ une montre Wear OS comme la Samsung Galaxy Watch).

#### 6) Pas de contraintes commerciales, grâce à des interfaces de programmation ouvertes
Au-delà de l'approche open source, qui permet de voir à tout moment le code source d'**AAPS**, le principe général des interfaces de programmation ouvertes donne aussi aux autres développeurs la possibilité d'apporter de nouvelles idées. **AAPS** est étroitement lié à Nightscout. Cela accélère le développement et permet aux utilisateurs d'ajouter des fonctionnalités pour rendre la vie avec le diabète encore plus facile. De bons exemples de ces intégrations sont [Nightscout](https://nightscout.github.io/), [Nightscout Reporter](https://nightscout-reporter.zreptil.de/), xDrip, [M5 stack](https://github.com/mlukasek/M5_NightscoutMon/wiki), etc. La discussion est ouverte entre les développeurs de logiciels open-source et ceux qui développent des systèmes commerciaux. Beaucoup d'innovations OS-AID sont peu à peu reprises par les systèmes commerciaux, où les développements sont naturellement plus lents, en partie parce que les interfaces entre les systèmes de différentes entreprises (pompes, applications, capteurs _etc_) doivent être négociées et sous licence avec soin. Cela peut également ralentir les innovations qui sont utiles pour les patients (ou un sous-groupe de patients avec un besoin très spécifique) mais ne génèrent aucun profit important.

#### 7) Richesse de l'interface utilisateur
Avec **AAPS**, il est facile de suivre des choses telles que : la quantité d'insuline dans la pompe, l'âge de la canule, l'âge du capteur, l'âge de la batterie de la pompe, l'insuline active _etc_. Beaucoup d'actions peuvent se faire dans l'application **AAPS** (amorcer la pompe, déconnecter la pompe _etc_.) au lieu de la pompe elle-même. La pompe peut donc rester dans votre poche ou à votre ceinture (ou dans celle de la personne dont vous vous occupez).

#### 8) Accessibilité et faible coût
**AAPS** donne aux personnes qui ne peuvent pas payer elles-mêmes, ou qui n'ont pas de financement ou d'assurance, l'accès à un système en boucle fermée hybride qui a, sur le plan des idées, des années d'avance sur les systèmes commerciaux. Pour le moment, vous avez besoin d'un serveur de rapports (Nightscout ou Tidepool) pour installer **AAPS**, mais il n'est pas nécessaire pour faire fonctionner la boucle **AAPS** au quotidien. Beaucoup de gens continuent à utiliser Nightscout pour collecter leurs données et pour la surveillance à distance. Bien que **AAPS** soit gratuit, mettre en place Nightscout sur une des nombreuses plateformes disponibles peut avoir un coût (0€ - 12€). Ce coût sera fonction du niveau de support dont vous avez besoin (voir table de comparaison) et de si vous voulez conserver Nightscout après l'installation ou non. **AAPS** fonctionne avec un grand nombre de [téléphones Android](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true) abordables (à partir d'environ 150 €). Différentes versions sont disponibles en fonction de votre pays et votre langue, et AAPS peut également être utilisé par des personnes [aveugles ou malvoyantes](#accessibility-for-users-aaps-who-are-partially-or-completely-blind).

#### 9) Soutien
Aucun système d'administration d'insuline automatique n'est parfait. Les systèmes commerciaux et les systèmes open-source partagent de nombreux problèmes communs en matière de communications et de défaillances matérielles temporaires. La communauté AAPS, constituée de personnes qui ont conçu, développé et qui utilisent actuellement **AAPS**, peut apporter du soutien et du support sur Facebook, Discord ou encore GitHub, partout dans le monde. Il existe aussi des groupes de soutien sur Facebook et de l'aide de la part des cliniques et des entreprises pour les systèmes APS commerciaux. Cela vaut la peine de parler aux utilisateurs, ou aux anciens utilisateurs, de ces systèmes pour avoir leur avis sur les problèmes courants, la qualité du programme de formation et le niveau de soutien fourni dans la durée.

#### 10) Prévisibilité, transparence et sécurité
**AAPS** est transparent, logique et prévisible, ce qui peut aider à savoir quand un réglage est faux, et à le corriger. Vous pouvez voir exactement ce que fait le système, pourquoi il le fait, et définir ses limites de fonctionnement, ce qui met le contrôle (et la responsabilité) entre vos mains. L'utilisateur peut gagner en assurance et bénéficier d'un sommeil plus tranquille.

#### 11) Accès à des fonctions avancées grâce aux versions de développement (dev), y compris la boucle fermée totale
Cette documentation **AAPS** se concentre sur la branche principale **“master”** de **AAPS**. Cependant, la recherche et le développement n'arrêtent jamais. Les utilisateurs plus expérimentés peuvent souhaiter explorer les fonctionnalités expérimentales dans la branche de **développement**. Les innovations en matière de développement se concentrent sur des stratégies de boucle fermée totale (sans avoir à saisir de bolus pour les repas _etc._), et essayent de manière générale de rendre la vie avec le diabète de type 1 aussi facile que possible.

#### 12) Possibilité de contribuer vous-même aux futures améliorations
Le diabète de type 1 peut être très frustrant et isolant. Avoir le contrôle de votre propre technologie pour le diabète, avec la possibilité de « rendre la pareille » en aidant les autres dans leur parcours dès que vous progressez, peut être vraiment gratifiant. Vous pouvez vous former, mettre au jour des obstacles, faire des recherches et même contribuer à de nouveaux développements et à la documentation. Vous trouverez d'autres personnes dans la communauté avec qui partager la même envie de progresser, avec qui réfléchir et travailler. C'est l'essence même du mouvement #WeAreNotWaiting.

## Comment marche AAPS en comparaison aux Multiples Injections Quotidiennes (MDI) et à la boucle ouverte ?

Les injections quotidiennes multiples (MDI, (a) dans la **figure 2** ci-dessous) consistent en général à injecter une insuline lente (_par exemple_ Tresiba) une fois par jour, avec des injections d'insuline rapide (_par exemple_ Novorapid, Fiasp) au moment des repas ou pour des corrections. L'utilisation classique d'une pompe à insuline (boucle ouverte) (b) implique l'utilisation d'une pompe pour délivrer le basal à des taux pré-programmés d'insuline à action rapide, puis à effectuer un bolus via la pompe lors des repas ou pour des corrections. Le principe de base d'un système de boucle est que l'application utilise les données de glycémie pour envoyer à la pompe l'instruction d'arrêter l'injection d'insuline lorsqu'elle prévoit que vous allez bientôt être en hypoglycémie, et pour vous donner plus d'insuline si votre glycémie augmente et que vous allez être en hyperglycémie (c). Bien que ce schéma soit simplifié par rapport à la réalité, il vise à démontrer les principales différences entre ces approches. Il est possible d'obtenir un très bon contrôle de la glycémie avec chacune de ces trois approches.

![21-06-23 AAPS glucose MDI etc](../images/basic-overview-mdi-open-and-closed-loop.png)


**Figure 2**. Aperçu simplifié de (a) Injections multiples quotidiennes ou MDI, (b) boucle ouverte et (c) boucle fermée hybride.

## Comment marche AAPS en comparaison aux autres systèmes de boucle ?

Au 25 juin 2023, il existe quatre grands systèmes de boucle fermée open source : [OpenAPS](https://openaps.readthedocs.io/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) et [Trio](https://triodocs.org) (anciennement FreeAPS X). Les caractéristiques des différents systèmes sont affichées dans le tableau ci-dessous :


| Type d'appareil | Nom                                                                             | [AAPS](https://wiki.aaps.app)              | [Boucle](https://loopkit.github.io/loopdocs/) | [Open APS](https://openaps.readthedocs.io/en/latest/) | [Trio](https://triodocs.org)               |
| --------------- | ------------------------------------------------------------------------------- | ------------------------------------------ | --------------------------------------------- | ----------------------------------------------------- | ------------------------------------------ |
| Téléphone       | Android                                                                         | ![disponible](../images/available.png)     | ![indisponible](../images/unavailable.png)    | ![indisponible](../images/unavailable.png)            | ![indisponible](../images/unavailable.png) |
| Téléphone       | iPhone                                                                          | ![indisponible](../images/unavailable.png) | ![disponible](../images/available.png)        | ![indisponible](../images/unavailable.png)            | ![disponible](../images/available.png)     |
| Nano-ordinateur | tout petit ordinateur (1)                                                       | ![indisponible](../images/unavailable.png) | ![indisponible](../images/unavailable.png)    | ![disponible](../images/available.png)                | ![indisponible](../images/unavailable.png) |
| POMPE           | [Dana I](../CompatiblePumps/DanaRS-Insulin-Pump.md)                             | ![disponible](../images/available.png)     | ![disponible](../images/available.png)        | ![indisponible](../images/unavailable.png)            | ![disponible](../images/available.png)     |
| POMPE           | [Dana RS](../CompatiblePumps/DanaRS-Insulin-Pump.md)                            | ![disponible](../images/available.png)     | ![disponible](../images/available.png)        | ![indisponible](../images/unavailable.png)            | ![disponible](../images/available.png)     |
| POMPE           | [Dana R](../CompatiblePumps/DanaR-Insulin-Pump.md)                              | ![disponible](../images/available.png)     | ![indisponible](../images/unavailable.png)    | ![indisponible](../images/unavailable.png)            | ![indisponible](../images/unavailable.png) |
| POMPE           | [Omnipod (Dash)](../CompatiblePumps/OmnipodDASH.md)                             | ![disponible](../images/available.png)     | ![disponible](../images/available.png)        | ![indisponible](../images/unavailable.png)            | ![disponible](../images/available.png)     |
| POMPE           | [Omnipod (Eros)](../CompatiblePumps/OmnipodEros.md)                             | ![disponible](../images/available.png)     | ![disponible](../images/available.png)        | ![indisponible](../images/unavailable.png)            | ![disponible](../images/available.png)     |
| POMPE           | [Diaconn G8](../CompatiblePumps/DiaconnG8.md)                                   | ![disponible](../images/available.png)     | ![indisponible](../images/unavailable.png)    | ![indisponible](../images/unavailable.png)            | ![indisponible](../images/unavailable.png) |
| POMPE           | [EOPatch 2](../CompatiblePumps/EOPatch2.md)                                     | ![disponible](../images/available.png)     | ![indisponible](../images/unavailable.png)    | ![indisponible](../images/unavailable.png)            | ![indisponible](../images/unavailable.png) |
| POMPE           | [Medtrum TouchCare Nano 200U](../CompatiblePumps/MedtrumNano.md)                | ![disponible](../images/available.png)     | ![disponible](../images/available.png)        | ![indisponible](../images/unavailable.png)            | ![disponible](../images/available.png)     |
| POMPE           | [Medtrum TouchCare 300U](../CompatiblePumps/MedtrumNano.md)                     | ![disponible](../images/available.png)     | ![disponible](../images/available.png)        | ![indisponible](../images/unavailable.png)            | ![disponible](../images/available.png)     |
| POMPE           | [Roche Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)                    | ![disponible](../images/available.png)     | ![indisponible](../images/unavailable.png)    | ![indisponible](../images/unavailable.png)            | ![indisponible](../images/unavailable.png) |
| POMPE           | [Roche Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)                   | ![disponible](../images/available.png)     | ![indisponible](../images/unavailable.png)    | ![indisponible](../images/unavailable.png)            | ![indisponible](../images/unavailable.png) |
| POMPE           | [Anciennes Medtronic](../CompatiblePumps/MedtronicPump.md)                      | ![disponible](../images/available.png)     | ![disponible](../images/available.png)        | ![disponible](../images/available.png)                | ![disponible](../images/available.png)     |
| POMPE           | [Equil 5.3](../CompatiblePumps/Equil5.3.md)                                     | ![disponible](../images/available.png)     | ![indisponible](../images/unavailable.png)    | ![indisponible](../images/unavailable.png)            | ![indisponible](../images/unavailable.png) |
| POMPE           | [CareLevo](../CompatiblePumps/CareLevo.md)                                      | ![disponible](../images/available.png)     | ![indisponible](../images/unavailable.png)    | ![indisponible](../images/unavailable.png)            | ![indisponible](../images/unavailable.png) |
| MGC             | [Dexcom G7/One+/Stelo](../CompatibleCgms/DexcomG7.md)                           | ![disponible](../images/available.png)     | ![disponible](../images/available.png)        | ![indisponible](../images/unavailable.png)            | ![disponible](../images/available.png)     |
| MGC             | [Dexcom One](../CompatibleCgms/DexcomG6.md)                                     | ![disponible](../images/available.png)     | ![disponible](../images/available.png)        | ![indisponible](../images/unavailable.png)            | ![disponible](../images/available.png)     |
| MGC             | [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                      | ![disponible](../images/available.png)     | ![disponible](../images/available.png)        | ![disponible](../images/available.png)                | ![disponible](../images/available.png)     |
| MGC             | [Libre 3/3+](../CompatibleCgms/Libre3.md)                                       | ![disponible](../images/available.png)     | ![disponible](../images/available.png)        | ![indisponible](../images/unavailable.png)            | ![disponible](../images/available.png)     |
| MGC             | [Libre 2/2+](../CompatibleCgms/Libre2.md)                                       | ![disponible](../images/available.png)     | ![disponible](../images/available.png)        | ![indisponible](../images/unavailable.png)            | ![disponible](../images/available.png)     |
| MGC             | [Libre 1](../CompatibleCgms/Libre1.md)                                          | ![disponible](../images/available.png)     | ![disponible](../images/available.png)        | ![indisponible](../images/unavailable.png)            | ![disponible](../images/available.png)     |
| MGC             | [Eversense](../CompatibleCgms/Eversense.md)                                     | ![disponible](../images/available.png)     | ![disponible](../images/available.png)        | ![indisponible](../images/unavailable.png)            | ![disponible](../images/available.png)     |
| MGC             | [MM640g/MM630g](../CompatibleCgms/MM640g.md)                                    | ![disponible](../images/available.png)     | ![indisponible](../images/unavailable.png)    | ![indisponible](../images/unavailable.png)            | ![indisponible](../images/unavailable.png) |
| MGC             | [PocTech](../CompatibleCgms/PocTech.md)                                         | ![disponible](../images/available.png)     | ![indisponible](../images/unavailable.png)    | ![indisponible](../images/unavailable.png)            | ![indisponible](../images/unavailable.png) |
| MGC             | [Ottai](../CompatibleCgms/OttaiM8.md)                                           | ![disponible](../images/available.png)     | ![indisponible](../images/unavailable.png)    | ![indisponible](../images/unavailable.png)            | ![indisponible](../images/unavailable.png) |
| MGC             | [Syai Tag](../CompatibleCgms/SyaiTagX1.md)                                      | ![disponible](../images/available.png)     | ![indisponible](../images/unavailable.png)    | ![indisponible](../images/unavailable.png)            | ![indisponible](../images/unavailable.png) |
| MGC             | [Nightscout comme source de glycémie](../CompatibleCgms/CgmNightscoutUpload.md) | ![disponible](../images/available.png)     | ![disponible](../images/available.png)        | ![disponible](../images/available.png)                | ![disponible](../images/available.png)     |

_Notes de tableau :_
1. Un **nano-ordinateur** est un petit ordinateur que vous transportez avec vous, sans moniteur. Un type d'appareil pris en charge est Intel Edison + Explorer Board et l'autre Raspberry Pi + Explorer HAT ou Adafruit RFM69HCW Bonnet. Les premiers systèmes APS utilisaient ce montage, car les téléphones mobiles ne pouvaient pas faire tourner les algorithmes nécessaires. L'utilisation de ces systèmes a régressé, car l'installation sur les téléphones mobiles est devenue plus facile et les téléphones ont un écran inclus. Intel a également arrêté de vendre l'Intel Edison. Les excellents algorithmes OpenAPS **oref0** et **oref1** sont maintenant intégrés dans AAPS et Trio.


Une déclaration de consensus international, revue par les pairs, contenant des directives pratiques sur la boucle open-source a été rédigée par et pour les professionnels de la santé, et publiée dans une revue médicale respectée en 2022 : [_Lancet Diabetes Endocrinol_, 2022; 10: 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_). Il vaut vraiment la peine d'être lu (aussi par votre service de diabétologie) et résume les principales différences techniques entre les différents systèmes open source en boucle fermée hybride.

Il est difficile d'avoir un "ressenti" quel que soit le système sans l'utiliser soi-même, ou sans en parler à d'autres qui l'utilisent, alors n'hésitez pas à contacter et à demander des retours d'expériences à des utilisateurs sur Facebook/Discord. La plupart des gens trouvent qu'**AAPS** est très avancé par rapport aux autres systèmes en boucle fermée hybride (surtout les systèmes commerciaux), avec un très grand nombre de réglages et de fonctions personnalisables, décrits plus haut. Certaines personnes trouvent cela un peu écrasant au début, mais rien ne presse pour découvrir toutes les possibilités d'un coup. Vous pouvez avancer aussi lentement ou aussi vite que vous le souhaitez, et vous trouverez de l'aide à chaque étape.


## AAPS utilise-t-il une intelligence artificielle ou un algorithme d’apprentissage ?

La version actuelle d'**AAPS** (4.0) ne contient aucun algorithme d'apprentissage automatique, aucun modèle de réponse à l'insuline à plusieurs paramètres, ni aucune intelligence artificielle. En tant que tel, le système est ouvert et transparent dans son fonctionnement, et a la capacité d'être compris non seulement par les experts, mais aussi par les médecins et les patients. Cela signifie aussi que si votre emploi du temps change beaucoup (par exemple, d'une semaine stressante au travail à des vacances reposantes) et que vous aurez sans doute besoin d'une quantité d'insuline très différente, vous pouvez tout de suite faire passer **AAPS** à un profil personnalisé plus faible ou plus fort. Un « système d'apprentissage » fera cet ajustement pour vous automatiquement, mais il est probable qu'il lui faille plus de temps pour ajuster la distribution d'insuline.

(which-system-is-right-for-me-or-my-dependent)=
## Quel système est fait pour moi ou pour la personne dont je m'occupe ?

En pratique, votre choix de système est souvent restreint par la pompe que vous possédez déjà ou que vous pouvez obtenir auprès de votre médecin diabétologue et de votre choix de téléphone (Apple ou Android). Si vous n’avez pas encore de pompe, vous avez le plus grand choix de systèmes. La technologie évolue sans cesse : certaines pompes ne sont plus fabriquées et de nouvelles pompes et de nouveaux capteurs sortent. La plupart des systèmes open-source fonctionnent avec les capteurs principaux (Freestyle Libre et Dexcom) ou sont rapidement mis à jour pour utiliser de nouveaux capteurs environ un an après leur sortie (avec un peu de retard pour les tests de sécurité et de stabilité).

La plupart des utilisateurs d'**AAPS** constatent plus de temps dans la cible, une baisse de l'HbA1c et une meilleure qualité de vie, grâce à un système qui peut ajuster automatiquement les débits de basal la nuit pendant le sommeil. Cela est vrai pour la plupart des systèmes en boucle fermée hybride. Certaines personnes préfèrent un système très simple et peu personnalisable (dans ce cas, vous préférerez peut-être un système commercial), et d'autres trouvent ce manque de contrôle très frustrant (vous préférerez peut-être un système open source). Si vous (ou la personne dont vous vous occupez) venez d'être diagnostiqué, un parcours courant est de s'habituer d'abord aux MDI avec un capteur de glucose, puis de passer à une pompe qui permet de boucler, puis à **AAPS**. Mais certaines personnes (surtout les jeunes enfants) passent directement à une pompe.

Il est important de noter que l'utilisateur d'**AAPS** doit être proactif pour trouver et résoudre lui-même les problèmes, avec l'aide de la communauté. C'est un état d'esprit très différent de celui correspondant à l'utilisation d'un système commercial. Avec **AAPS** un utilisateur a plus de contrôle, mais aussi plus de responsabilité, et doit être à l'aise avec cela.

## Peut-on utiliser des systèmes open-source comme AAPS en toute sécurité ?

### Sûreté du système AAPS
La question devrait plutôt être, plus précisément : « Est-ce sans danger **par rapport** à mon système actuel d'administration d'insuline ? » puisqu'aucune méthode d'administration d'insuline n'est sans risque. Il y a beaucoup de contrôles et régulations en place avec **AAPS**. Un [article](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375) récent a étudié l'utilisation d'**AAPS** dans une simulation par ordinateur, un moyen efficace de tester objectivement la sécurité et l'efficacité du système. Plus généralement, plusieurs milliers de personnes dans le monde utilisent des systèmes open source d'administration automatisée d'insuline, et leur nombre continue d'augmenter partout.

N'importe quel périphérique qui utilise des communications radio peut être piraté, et c'est vrai aussi pour une pompe à insuline (sans boucle). À l'heure actuelle, nous ne connaissons personne qui tente de nuire aux personnes en piratant leur équipement médical lié au diabète. Cependant, il existe de multiples moyens de se protéger contre de tels risques :

1.  Dans les paramètres de la pompe, limitez à la fois le bolus max autorisé et le débit basal temporaire max aux quantités qui vous semblent les plus sûres. Ce sont des limites fortes que nous pensons non contournables par un pirate malveillant.

2.  Laissez actives vos alarmes de capteurs de glycémies MGC pour les hypos et les hypers.

3.  Surveillez votre injection d'insuline en ligne. Les utilisateurs de Nightscout peuvent définir des alarmes supplémentaires pour être alertés dans de nombreuses situations, y compris celles qui sont beaucoup plus probables qu'une attaque malveillante. En plus des hypos et hypers, Nightscout peut afficher des données de diagnostic utiles pour vérifier que la pompe fonctionne comme vous le souhaitez, incluant l'Insuline Active (IA) courante, l'historique des basales temporaires de la pompe, l'historique des bolus de la pompe. Il peut également être configuré pour avertir proactivement les utilisateurs de conditions indésirables, telles que : prévisions d'hypos et d'hypers, réservoir d'insuline faible et batterie faible de la pompe.

Si une attaque malveillante était effectuée contre votre pompe à insuline, ces stratégies atténueraient considérablement le risque. Chaque utilisateur potentiel d'**AAPS** doit évaluer les risques associés à l'utilisation d'**AAPS**, par rapport aux risques d'utilisation d'un système différent.

#### Considérations de sécurité en lien avec l'amélioration trop rapide du contrôle de la glycémie

Une baisse rapide de l'HbA1c et un meilleur contrôle de la glycémie paraissent attirants. Cependant, faire baisser la glycémie moyenne _trop rapidement_ en démarrant un système de boucle fermée quel qu'il soit, peut causer des dommages permanents, y compris aux yeux, et une neuropathie douloureuse qui ne disparaîtra jamais. Ces atteintes peuvent être évitées simplement en baissant plus lentement les niveaux. Si votre HbA1c est élevée et que vous passez à AAPS (ou à un autre système en boucle fermée), parlez de ce risque avec votre équipe médicale avant de commencer, et fixez ensemble un calendrier. Vous trouverez [ici](#preparing-safety-first), dans la section sur la sécurité, des informations plus générales sur la façon de baisser votre glycémie en toute sécurité, avec des liens vers la littérature médicale.

#### Sûreté médicale autour des dispositifs, consommables et autres médicaments

Utilisez une pompe à insuline et un capteur de glycémie approuvés par la FDA ou la CE, testés et entièrement fonctionnels, pour une boucle de pancréas artificiel. Les modifications matérielles ou logicielles de ces composants peuvent entraîner un dosage incorrect de l'insuline, causant un risque significatif pour l'utilisateur. Si vous trouvez ou recevez des pompes à insuline ou des capteurs de glycémie cassés, modifiés ou fabriqués maison, ne les utilisez pas pour mettre en place un système AAPS.

Utilisez du matériel d'origine pour les applicateurs, canules et réservoirs d'insuline, approuvés par le fabricant de votre pompe et de votre MGC. L'utilisation de consommables non testés ou modifiés peut entraîner une imprécision du MGC et des erreurs de dosage de l'insuline. L'insuline peut s'avérer très dangereuse lorsqu'elle est mal dosée - ne jouez pas avec votre vie en bricolant votre matériel.

Ne prenez pas d'inhibiteurs de SGLT-2 (gliflozines) lorsque vous utilisez **AAPS** car il est impossible de calculer la manière dont ils font baisser la glycémie. Combiner cet effet avec un système qui baisse les débits de basal pour faire monter la glycémie est dangereux. Vous trouverez plus de détails dans la [section principale sur la sécurité](#preparing-safety-first).

(introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team)=
## Comment puis-je aborder AAPS avec mon équipe médicale ?

Les utilisateurs sont encouragés à parler avec leur équipe médicale de leur intention d'utiliser **AAPS**. N'ayez pas peur d'avoir une discussion honnête avec votre équipe de diabétologie si vous avez l'intention d'utiliser **AAPS** (ou toute autre boucle OS-AID). La transparence et la confiance entre le patient et le médecin sont primordiales.

### Approche suggérée :
Commencez par discuter avec votre docteur afin d'en savoir plus sur ses connaissances et son attitude vis-à-vis de la technologie utile aux diabétiques telle que les MGC, les pompes, les boucles hybrides et les boucles commerciales. Votre docteur/endocrinologue devrait être au fait des moyens techniques de base et être prêt à discuter avec vous des récentes avancées apportées par les produits de boucle commerciaux disponibles dans votre pays.

#### Précédents locaux

Demandez l'avis de vos médecins / endocrinologues sur la boucle OS-AID _par rapport_ aux boucles commerciales, et évaluez leurs connaissances dans ce domaine. Connaissent-ils **AAPS** et peuvent-ils partager avec vous une expérience utile avec des patients qui utilisent une boucle OS-AID ?

Demandez si votre équipe suit déjà des patients qui utilisent une boucle OS-AID. En raison du secret médical, les médecins ne peuvent pas transmettre les informations d'autres patients sans obtenir le consentement de la personne. Cependant, si vous le souhaitez, vous **pouvez** leur demander de transmettre **vos** coordonnées à un patient qui utilise déjà une boucle OS-AID, si le médecin pense que le courant pourrait bien passer entre vous, en indiquant que vous seriez heureux que ce patient vous contacte pour parler de la boucle OS-AID. Les docteurs n'ont aucune obligation de le faire, mais certains le feront avec plaisir, car ils ont conscience de l'importance du soutien entre pairs dans la gestion du diabète de type 1. Il peut aussi être utile de rencontrer des utilisateurs de boucle OS-AID sympathiques près de chez vous. Cela dépend bien sûr de vous, et n'est pas indispensable.

#### Précédents nationaux et internationaux

Si vous vous sentez peu soutenu par votre équipe pour boucler avec **AAPS**, les points de discussion suivants peuvent vous aider :

a) Le système **AAPS** a été conçu PAR des patients et leurs aidants. Il a été conçu avant tout pour la sûreté, mais aussi en s'inspirant de l'expérience "dans la vie réelle" des patients. Il y a plusieurs milliers d'utilisateurs d'**AAPS** dans le monde. Il est donc probable que d'autres patients de votre clinique utilisent une boucle OS-AID (que l'équipe le sache ou non).

b) Des recommandations récentes, revues par les pairs et publiées dans la grande revue médicale internationale [The Lancet](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/pdf/nihms-1765784.pdf)(_1_), ont confirmé que les boucles OS-AID sont **sûres** et **efficaces pour améliorer le contrôle du diabète**, y compris le temps dans la cible. Des revues de premier plan comme [Nature](https://doi.org/10.1038/d41586-023-02648-9)(_3_) publient régulièrement des articles qui montrent les progrès de la communauté OS-AID.

c) La mise en place d'**AAPS** se fait par étapes _progressives_ : partant d'une pompe en boucle "ouverte", en passant par l'arrêt avant hypo, jusqu'à la boucle "fermée" hybride. Cette évolution se fait en atteignant successivement un certain nombre d'objectifs. Il existe donc un programme structuré, exigeant de l'utilisateur qu'il démontre un niveau de compétence à chaque étape et qu'il ajuste ses paramètres de base (basal, SI et G/I) avant de pouvoir fermer la boucle.

d) La communauté OS-AID vous apporte un soutien technique sur GitHub, Discord et dans des groupes Facebook fermés.

e) Vous serez en mesure de fournir **aussi bien des informations sur votre glycémie que sur votre boucle/administration d'insuline par la pompe** sous forme de rapports synthétiques lors de vos RDV médicaux (grâce à Nightscout ou Tidepool), soit imprimés soit sous format numérique (si vous apportez un ordinateur portable/tablette). Le regroupement des données de glycémie et d'insuline permettra à votre médecin d'utiliser son temps plus efficacement pour examiner vos rapports, et l'aidera à évaluer vos progrès avec vous.

f) Si votre équipe reste fortement opposée, donnez à votre médecin des copies imprimées des articles de référence cités dans ce texte, ainsi que le lien vers la section d'**AAPS** pour les médecins : [Pour les médecins – Introduction générale et guide d'**AAPS**](../UsefulLinks/ClinicianGuideToAaps.md)

#### Soutien à la boucle OS-AID par d'autres médecins

L'article publié dans le [Lancet Diabetes Endocrinology](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_) (codirigé par King’s et le Guy’s and St Thomas’ NHS Foundation Trust, et codirigé par le Dr Sufyan Hussain, diabétologue consultant et maître de conférences honoraire à King’s à Londres) apporte :

a) L'**assurance** pour les professionnels que les systèmes de pancréas artificiel OS-AID / open source sont une option de « traitement sûr et efficace » du diabète de type 1, ainsi que des conseils sur les recommandations, les discussions, le soutien et la documentation ;

b) La **reconnaissance** que les systèmes de distribution d'insuline automatisés en open source (AID) peuvent augmenter le temps passé dans la cible (TIR) tout en diminuant la variation des glycémies et le nombre d'épisodes hypoglycémiques et hyperglycémiques, pour divers groupes d'âge, sexe et origine ;

c) La **recommandation** selon laquelle les professionnels de la santé devraient **soutenir** les patients de type 1 ou leurs aidants qui choisissent de gérer leur diabète avec un système de boucle open source ;

d) La recommandation selon laquelle les professionnels de santé devraient essayer de se documenter sur toutes les possibilités de traitement qui pourraient bénéficier aux patients, y compris les systèmes de boucle open source disponibles.  Si les professionnels de santé ne trouvent pas les ressources pour se documenter, ou ont des interrogations légales ou réglementaires, ils devraient envisager de **coopérer ou de s'associer avec d'autres professionnels de santé** qui peuvent les aider ;

e) Insiste sur le fait que tous les utilisateurs de MGC devraient avoir un accès en temps réel à **leurs propres données de santé** à tout instant

f) Souligne que ces systèmes open source n'ont pas subi les mêmes évaluations réglementaires que les technologies médicales disponibles commercialement, et qu'il n'y a pas de support technique commercial. Cependant, **un soutien à tous niveaux est disponible** via la communauté d'utilisateurs ; et

g) La recommandation selon laquelle les **cadres réglementaires et juridiques** devraient être mis à jour pour garantir la clarté sur l'autorisation du traitement éthique et efficace de ces systèmes open source.

Un autre article dans [Medical Law International, 2021](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)(_4_) insiste également sur le fait que le « guide sur le consentement » du Conseil Général de Médecine du Royaume-Uni accorde une grande importance au fait que le médecin et le patient prennent les décisions d'un commun accord. Le médecin doit expliquer les bénéfices, les risques, les contraintes et les effets secondaires possibles d'un APS OS-AID, et peut recommander une option sans faire pression sur le patient.

En fin de compte, il revient au patient de considérer ces facteurs, ainsi que tout problème non clinique pertinent pour lui, et de décider quelle option de traitement, le cas échéant, accepter.

Si un médecin découvre en consultation que son patient boucle avec un système OS-AID, il n'est pas dispensé de son obligation de suivre le patient simplement parce qu'il n'a pas prescrit la technologie utilisée par le patient : les médecins doivent continuer à suivre leurs patients.

Les médecins (du moins au Royaume-Uni) n'ont pas l'interdiction de prescrire des médicaments non reconnus et peuvent utiliser leur discernement médical. Ils doivent donc utiliser leur jugement clinique pour décider si un APS OS-AID convient à un patient donné, et discuter avec le patient de ce qu'ils considèrent comme les avantages et les inconvénients.

#### Les articles référencés ci-dessus, ainsi que d'autres liens utiles et déclarations de position sont listés ci-dessous :

1. Administration automatisée d'insuline open-source : déclaration de consensus international et directives pratiques pour les professionnels de la santé [_Lancet Diabetes Endocrinol_, (2022) _10_, 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)
2. [In Silico Trials of an Open-Source Android-Based Artificial Pancreas: A New Paradigm to Test Safety and Efficacy of Do-It-Yourself Systems, 2020](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375)
3. Un ‘pancréas bionique’ révolutionne les soins du diabète — quelle est la prochaine étape ? [_Nature_ (2023), _620_, 940-941](https://doi.org/10.1038/d41586-023-02648-9)
4. Prescrire des dispositifs médicaux non approuvés ? Le cas des systèmes de pancréas artificiels DIY [_Medical law international_, (2021), _21_, 42-68](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)
5. [Déclaration de position de l'Institut de santé de Berlin, 2022](https://www.bihealth.org/en/notices/do-it-yourself-solutions-for-people-with-diabetes-are-safe-and-recommended)
6. Administration d'insuline automatisée open-source : Guide d'utilisation pour le professionnel de santé (position et guide de Diabetes Canada) [_Canadian Journal of Diabetes_, (2023)_47_, E8, 389-397](https://www.canadianjournalofdiabetes.com/article/S1499-2671(23)00138-7/fulltext)
7.  Pays-Bas (EN/NL) - pour les professionnels de santé- [comment aider les personnes avec les systèmes automatisés d'administration d'insuline en open source](https://www.diabetotech.com/blog/how-to-help-people-on-open-source-automated-insulin-delivery-systems)
8. Première utilisation du système d'admnistration automatisé de l'insuline open-source AndroidAPS dans un scénario de boucle fermée totale : étude pilote randomisée Pancreas4ALL [_Diabetes Technol. Ther._, 25, _5_, 2023](https://www.liebertpub.com/doi/pdf/10.1089/dia.2022.0562?casa_token=D13eFx5vCwwAAAAA:MYvO8hChbViXVJFgov1T11RXBPx2N_wOMThLHwl3TVUxbCuANegPrIFRC5R5VXx_S71FoQYW-qg)
9. Les enfants d'âge préscolaire et scolaire bénéficient du passage d'une pompe associée à un capteur de glycémie à une boucle fermée hybride AndroidAPS : Une analyse rétrospective [_Pediatr. Diabetes_ 2021, _22_, 594-604. 2021](https://onlinelibrary.wiley.com/doi/epdf/10.1111/pedi.13190)
10. Publications du projet OPEN, un projet financé par l'UE étudiant la "preuve par le patient" avec une technologie de pancréas artificiel novatrice et open-source (https://www.open-diabetes.eu/publications)



## Pourquoi je ne peux pas simplement télécharger AAPS et l’utiliser immédiatement ?

L'application **AAPS** n'est pas disponible sur Google Play : pour des raisons juridiques, vous devez la compiler vous-même à partir du code source. **AAPS** n'est pas homologué : il n'a été approuvé par aucune autorité réglementaire, quel que soit le pays. Utiliser **AAPS** revient à mener une expérience médicale sur vous-même, et se fait à vos risques et périls.

La mise en place du système nécessite de la patience, de la détermination et l'apprentissage progressif des connaissances techniques. Toutes les informations et le support peuvent être trouvés dans ces documents, ailleurs en ligne, ou auprès d'autres personnes qui l'ont déjà mis en place. Plusieurs milliers de personnes dans le monde ont réussi à compiler **AAPS** et l'utilisent aujourd'hui.

Les développeurs de **AAPS** prennent très au sérieux la sûreté, et font tout pour que la communauté des utilisateurs ait la meilleure expérience possible de **AAPS**. C'est pourquoi il est essentiel que chaque utilisateur (ou chaque parent si l'utilisateur est un enfant) :

- compile le système AAPS lui-même et passe successivement les **objectifs** afin que les paramètres à personnaliser soient raisonnablement bons, et comprenne les bases de la façon dont **AAPS** fonctionne avant de « fermer la boucle » ;

- sauvegarde son système en exportant et en gardant en lieu sûr les fichiers importants (comme le keystore et le fichier .json des paramètres), afin de pouvoir tout réinstaller rapidement si besoin ;

- fasse la mise à jour vers les nouvelles versions master dès qu'elles sont disponibles ; et

- gère et surveille le système pour s’assurer qu’il fonctionne correctement.

## Comment le système AAPS est-il interconnecté ?

La **figure 3 (ci-dessous)** montre un exemple de système **AAPS** pour un utilisateur qui n'a pas besoin de suiveurs qui interagissent avec le système. D'autres logiciels et plateformes open source, non montrés ici, peuvent aussi être intégrés.

![21-06-23 Connectivité AAPS sans suiveurs](../images/AAPS-connectivity-no-followers.png)


La **figure 4 (ci-dessous)** montre toutes les possibilités du système **AAPS** pour un utilisateur qui a des suiveurs et qui a besoin de surveiller et de régler le système à distance (comme un enfant diabétique de type 1). D'autres logiciels et plateformes open source, non montrés ici, peuvent aussi être intégrés.

![21-06-23 Vue d'ensemble d'AAPS avec suiveurs](../images/AAPS-overview-with-followers.png)

## Comment AAPS est-il développé et continuellement amélioré ?

La plupart des utilisateurs d'**AAPS** utilisent la version d'AAPS entièrement testée **master**, testée pour les bugs et autres problèmes, avant d'être livrée à la communauté. En coulisse, les développeurs essaient de nouvelles améliorations et les testent dans des versions « développeur » (**dev**) d'**AAPS**, avec une communauté d'utilisateurs prêts à installer rapidement les mises à jour de correction. Si les améliorations fonctionnent bien, elles sont ensuite publiées dans une nouvelle version « master » d'**AAPS**. Chaque nouvelle version master est annoncée sur le groupe Facebook, afin que les utilisateurs d'**AAPS** puissent la découvrir et passer à la nouvelle version master.

Certains utilisateurs d'**AAPS** expérimentés et sûrs d'eux font des essais avec les nouvelles technologies et avec les versions de développement de l'application **AAPS**. Les utilisateurs moins aventureux peuvent trouver intéressant de lire leurs retours, sans avoir à le faire eux-mêmes ! Les gens ont tendance à partager ces expériences sur le groupe Facebook.

Vous pouvez en savoir plus sur certaines de ces expériences et discussions sur les technologies émergentes ici :

Tim Street [https://www.diabettech.com/](https://www.diabettech.com/)

David Burren [https://bionicwookie.com/](https://bionicwookie.com/)

## A qui AAPS peut-il être utile ?

| Type d'utilisateur                             |
| ---------------------------------------------- |
| ✔️ diabétique de type 1                        |
| ✔️ aidant ou parent d'un diabétique de type 1  |
| ✔️ utilisateurs aveugles diabétiques de type 1 |
| ✔️ *médecins et professionnels de santé        |

Le tableau ci-dessus suppose que l'utilisateur dispose à la fois d'un capteur de glucose en continu et d'une pompe à insuline.

* Toutes les données d'**AAPS** peuvent être mises à la disposition des professionnels de santé par le biais de plates-formes de partage de données. Par exemple NightScout, qui permet la surveillance en temps réel et le stockage dans le durée des données du capteur de glycémie, de l'administration d'insuline, des entrées de glucides, des prévisions et des paramètres. Les rapports Nightscout comprennent des rapports quotidiens et hebdomadaires. Grâce à des données plus précises sur le contrôle de la glycémie et sur les comportements, ils peuvent aider les professionnels de santé dans leurs échanges avec les patients de type 1.

(accessibility-for-users-aaps-who-are-partially-or-completely-blind)=

### Accessibilité pour les utilisateurs d'AAPS malvoyants ou aveugles

#### Utilisation quotidienne de AAPS :
AAPS peut également être utilisé par les personnes aveugles ou malvoyantes. Sur les appareils Android, le système d'exploitation propose une application appelée TalkBack. Cela permet de contrôler l'écran par la voix, directement via le système d'exploitation. En utilisant TalkBack, vous pouvez utiliser à la fois votre smartphone et AAPS sans avoir besoin de voir.

#### Compilation de l'application AAPS :
En tant qu'utilisateur, vous compilerez l'application AAPS dans Android Studio. Beaucoup de gens utilisent Microsoft Windows pour cela. Windows a un lecteur d'écran semblable à TalkBack. Comme Android Studio est une application Java, le composant "Java Access Bridge" doit être activé dans le Panneau de configuration. Dans le cas contraire, le lecteur d'écran du PC ne pourra pas fonctionner dans Android Studio.

Comment faire ? Cela dépend de votre système d'exploitation, deux méthodes sont décrites ci-dessous :

1) Dans le menu Démarrer de Windows, tapez "Panneau de configuration" dans le champ de recherche, validez avec Entrée. Cela ouvre : "Tous les éléments du panneau de configuration”.

Ouvrez les « Options d'ergonomie ».

Puis ouvrez "Utiliser l'ordinateur sans écran" en appuyant sur "Entrée".

Sous **Hear text read aloud** (Entendre le texte lu à voix haute), sélectionnez **turn on narrator** (activer le Narrateur) et **turn on audio display** (activer la description audio), puis cliquez sur **apply** (appliquer).

ou :

2) Appuyez sur la touche Windows et tapez « Panneau de configuration » dans le champ de recherche, validez avec Entrée. Cela ouvre : "Tous les éléments du panneau de configuration”.

Appuyez sur la lettre C pour aller au « Centre d'ergonomie », validez avec Entrée.

Puis ouvrez « Utiliser l'ordinateur sans écran » avec Entrée.

En bas de cette page, vous trouverez la case à cocher "Activer Java Access Bridge", cochez-la.

Et voilà, vous pouvez fermer la fenêtre ! Le lecteur d'écran devrait fonctionner maintenant.



Vous voulez en savoir plus sur comment démarrer l'installation d'AAPS ? Consultez la section [Se préparer à démarrer avec AAPS](../Getting-Started/PreparingForAaps.md).
