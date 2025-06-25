# Introduction aux APS et à AAPS

## Qu'est ce qu'un "Système de Pancréas Artificiel” (APS)?

Un pancréas humain fait beaucoup de choses en plus de réguler la glycémie. Cependant, le terme **« Système de pancréas artificiel » (APS)** fait généralement référence à un système qui agit pour maintenir automatiquement les niveaux de glycémie dans les limites de la santé.

La façon basique de faire cela est de détecter les **niveaux de glycémies**, utiliser ces valeurs pour faire des **calculs**, puis d'injecter le montant correct (estimé) d'**insuline** dans le corps. Il répète le calcul régulièrement (quelques minutes), 24h/24, 7j/7. Il utilise des **alarmes** et des **alertes** pour informer l'utilisateur si une intervention ou une attention est nécessaire. Ce système est généralement composé d'un **capteur de glycémie **, d'une **pompe à insuline** et d'une **application** sur un smartphone.

Vous pouvez en savoir plus sur les différents systèmes de pancréas artificiels actuellement disponibles et en cours de développement dans cet article de synthèse de 2022 :

![Frontières](../images/FRONTIERS_Logo_Grey_RGB.png) [Future Directions in Closed-Loop Technology](https://www.frontiersin.org/articles/10.3389/fendo.2022.919942/full#:~:text=Fully%20closed%2Dloop%20systems%2C%20unlike,user%20input%20for%20mealtime%20boluses) / Futures directions dans les technologies de boucle fermée (article en anglais).

Dans un avenir proche, certains systèmes dits de "double hormone" auront également la possibilité d'injecter du glucagon en plus de l'insuline, dans le but de prévenir les hypoglycémies sévères et de permettre un contrôle encore plus rigoureux de la glycémie.

Un pancréas artificiel peut être considéré comme un ["pilote automatique pour votre diabète"](https://www.artificialpancreasbook.com/). En d'autres termes :

Dans un avion, un pilote automatique ne fait pas tout le travail du pilote humain, ainsi le pilote ne peut pas dormir pendant la totalité du vol. Le pilote automatique facilite le travail du pilote. Il soulage le pilote du fardeau de la surveillance permanente de l’avion, lui permettant de se concentrer de temps à autre sur une surveillance de plus haut niveau. Le pilote automatique reçoit des signaux de divers capteurs. Un ordinateur les évalue en même temps que les spécifications du pilote, puis il effectue les ajustements nécessaires, en informant le pilote de tout motif de préoccupation. Le pilote n'a plus à se soucier de prendre constamment des décisions.

![image](../images/autopilot.png)

(Introduction-what-does-hybrid-closed-loop-mean)=
## Que signifie "boucle fermée hybride" ?

La meilleure solution pour le diabète de type 1 serait un « traitement fonctionnel » (probablement un implant de cellules pancréatiques protégées du système immunitaire). En attendant son arrivée, un pancréas artificiel « boucle fermée complète » serait probablement le meilleur choix. Il s'agit d'un système technologique qui n'a besoin d'aucune entrée utilisateur (comme les bolus d'insuline pour les repas, ou l'annonce d'une activité physique), avec une bonne régulation des taux de glycémie. Pour le moment, il n'existe pas de systèmes largement disponibles qui soient en boucle fermée « complète », ces systèmes ont tous besoin de quelques informations entrées par l'utilisateur. Les systèmes actuellement disponibles sont appelés boucles fermées « hybrides », car ils utilisent une combinaison de technologie automatisée et d’informations entrées par l'utilisateur.

## Comment et pourquoi la boucle a-t-elle commencé ?

Le développement de technologies commerciales pour les personnes atteintes de diabète de type 1 (DT1) est très lent. En 2013, la communauté TD1 a fondé le mouvement #WeAreNotWaiting (#nous n'attendronspas). Ses membres ont mis au point eux-mêmes des systèmes utilisant des technologies déjà approuvées (pompes à insuline et capteurs de glycémie) pour améliorer le contrôle du taux de glycémie, la sécurité et la qualité de vie. Ces systèmes sont connus sous le nom de systèmes DIY (do-it-yourself) car ils ne sont pas officiellement approuvés par les organismes de santé (FDA, NHS, CE, FR, etc). A ce jour, Il y a 4 systèmes DIY principaux disponibles : [OpenAPS](https://openaps.org/what-is-openaps/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) et[ iAPS](https://github.com/Artificial-Pancreas/iAPS?fbclid=IwAR2fA9Y9YqYzpKSrtEsotfXl5b67UclDkKgyrv52tQLzYbOoBeNGRmjlJJI).

La lecture du livre de Dana Lewis « Automated Insuline Delivery » (Injection automatisée d'insuline) est un excellent moyen de comprendre les fondements de la boucle DIY. Vous pouvez y accéder [ici](https://www.artificialpancreasbook.com/) gratuitement (ou acheter une copie papier du livre). Si vous voulez en savoir plus sur [OpenAPS](https://openaps.org/what-is-openaps/), qui est le fondement d'**AAPS**, le site [OpenAPS](https://openaps.org/what-is-openaps/) est la référence.

Plusieurs systèmes de boucle fermée commerciale hybride sont sortis récemment, dont [CamAPS FX](https://camdiab.com/) (Royaume-Uni et UE) et [Omnipod 5](https://www.omnipod.com/en-gb/what-is-omnipod/omnipod-5) (USA et UE). Ceux-ci sont très différents des systèmes DIY principalement parce qu'ils incluent tous deux un « algorithme d'apprentissage » qui ajuste la quantité d'insuline délivrée en fonction de vos besoins d'insuline des jours précédents. De nombreuses membres de la communauté DIY ont déjà testé ces systèmes commerciaux et les ont comparés avec leur système de boucle DIY. Vous pouvez en savoir plus sur sur la comparaison des différents systèmes en posant des questions sur les groupes de discussion dédiés a ces systèmes, par exemple: sur le [groupe Facebook AAPS](https://www.facebook.com/groups/AndroidAPSUsers/) ou sur [Discord](https://discord.com/invite/4fQUWHZ4Mw).

## Qu'est-ce que Android APS (AAPS) ?

![image](../images/basic-outline-of-AAPS.png)

**Figure 1**. Description succinte du système APS d'Android (Artificial Pancréas System), AAPS.

Android APS (**AAPS**) est un système hybride en boucle fermée, ou système Artificiel de pancréas (APS). Il effectue ses calculs de dosage d'insuline à l'aide d'un algorithme de référence [OpenAPS](https://openaps.org/) (un ensemble de règles) développés par la communauté de diabète de type 1 #WeAreNotWaiting.

Étant donné qu'OpenAPS n'est compatible qu'avec un nombre limité d'anciennes pompes à insuline, Milos Kozak a développé en 2016 **AAPS** (qui peut être utilisé avec une gamme plus large de pompes à insuline) pour un membre de la famille souffrant de diabète de type 1. Depuis ses débuts, **AAPS** a été sans cesse développé et amélioré par une équipe de développeurs informatiques bénévoles et d'autres passionnés qui ont une connexion avec le monde du diabète de type 1. Aujourd'hui, **AAPS** est utilisé par environ 10 000 personnes dans le monde entier. It is a highly customisable and versatile system, and because it is open-source, it is also readily compatible with many other open-source diabetes software and platforms. Les composants fondamentaux du système **AAPS** actuel sont décrits dans **la figure 1** ci-dessus.



## Quels sont les composants de base d'AAPS ?

Le « cerveau » d'AAPS est une **application** que vous construisez vous-même. Des instructions détaillées sont fournies pour la construire. You then install the **AAPS  app** on a [compatible](../Getting-Started/Phones.md) **Android smartphone** (**1**). Un certain nombre d'utilisateurs préfèrent conserver leur boucle sur un téléphone distinct de leur téléphone principal. Vous pouvez donc par exemple utiliser un téléphone Android juste pour faire fonctionner votre boucle AAPS et utiliser votre téléphone habituel pour toutes vos autres activités.

Vous aurez besoin d'une application supplémentaire sur votre **smartphone Android**, en plus d'**AAPS**. This [additional app](../Getting-Started/CompatiblesCgms.md) receives glucose data from a sensor (**2**) by bluetooth, and then sends the data internally on the phone to the **AAPS app**.

L'application **AAPS** utilise le processus de prise de décision (**algorithme**) d'OpenAPS. Les débutants commencent à utiliser l'algorithme de base **oref0** , mais il est possible de passer à l'utilisation de l'algorithme **oref1** plus récent au fur et à mesure que vous progressez avec AAPS. Le choix de l'algorithme (oref0 ou oref1) sera à effectuer en fonction de celui qui correspondra le mieux à votre situation.  Dans les deux cas, l'algorithme prend en compte plusieurs facteurs, et effectue des calculs rapides chaque fois qu'une nouvelle lecture provient du capteur de glycémie. L'algorithme envoie ensuite des instructions par bluetooth à la pompe à insuline (**3**) sur la quantité d'insuline à injecter. Toutes ces informations peuvent être transmises sur internet via les données mobiles ou le wifi (**4**). Ces données peuvent également être partagées avec des abonnés, si souhaité, et/ou collectées pour analyse.

## Quels sont les avantages du système AAPS ?

L'algorithme OpenAPS utilisé par **AAPS** contrôle les glycémies en l'absence de saisie de l'utilisateur, selon les paramètres qu'il a définis (les plus importants étant les débits de basale, les facteurs de sensibilité à l'insuline, les ratios Glucides/Insuline, la durée d'activité de l'insuline, etc.) , en réagissant toutes les 5 minutes aux nouvelles données transmises par le capteur. de glycémie. Certains des avantages les plus appréciés de l'utilisation d'AAPS sont les options de réglage fin et adaptable à chaque personne, la possibilité de mise en place d'automatisations et une plus grande transparence du système pour le patient et le soignant. Ceci peut permettre un meilleur contrôle de votre diabète (ou de celui de la personne que vous assistez), pouvant amener à une meilleure qualité de vie et une plus grande tranquillité d'esprit.

### **Parmi les avantages spécifiques :**

#### 1) La sûreté d'abord
Pour en savoir plus sur les caractéristiques de sécurité des algorithmes, appelés oref0 et oref1, [cliquez ici](https://openaps.org/reference-design/). L'utilisateur a la responsabilité de définir ses propres limites de sécurité.

#### 2) **Flexibilité matérielle**

**AAPS** fonctionne avec une large gamme de pompes à insuline et de capteurs de glycémie. Ainsi, par exemple, si vous développez une allergie à la colle du capteur Dexcom, vous pourrez à la place, basculer vers un capteur Freestyle libre. Cela offre de la flexibilité au fur et à mesure que votre vie évolue. Vous n'aurez pas à recompiler ou réinstaller l'application **AAPS**, il vous suffira de cocher une autre case dans l'application pour changer votre matériel. AAPS ne dépend pas d'un pilote de pompe particulier et contient également une "pompe virtuelle" afin que les utilisateurs puissent expérimenter en toute sécurité avant de l'utiliser sur eux-mêmes.

#### 3) **Très personnalisable et très configurable**

Les utilisateurs peuvent facilement ajouter ou supprimer des modules ou des fonctionnalités, et **AAPS** peut être utilisé en mode boucle ouverte ou fermée. Voici quelques exemples des possibilités offertes par le système **AAPS** :

 a) La possibilité de définir une cible glycémique plus basse 30 minutes avant un repas; la cible minimum que vous pouvez fixer est de 72 mg/dL (4.0 mmol/L).

 b) Si votre résistance à l'insuline a pour conséquence des glycémies élevées, **AAPS** vous permettra de mettre en place une règle d'**automatisation** qui se déclenchera quand la glycémie dépasse 144 mg/dL (8 mmol/L), changeant (par exemple) le profil à 120% (entrainant une augmentation de 20% des débits de basale et également un renforcement des autres variables, par rapport à votre **profil** habituel). L'automatisation prendra fin après la durée que vous aurez vous-même programmé. Une automatisation pourrait par exemple être configurée pour être active seulement certains jours de la semaine, ou certaines heures de la journée, ou même en certains lieux.

 c) Si votre enfant se retrouve sans prévenir sur un trampoline, **AAPS** permettra de suspendre l'injection d'insuline pour une période déterminée, directement via le téléphone.

 d) Après avoir déconnecté puis rebranché une pompe tubulaire pour aller nager, **AAPS** calculera l'insuline basale que vous avez manquée pendant votre période de déconnexion et vous l'injectera prudemment, en fonction votre glycémie. Toute insuline non requise peut être remplacée par une simple « annulation » de l'insuline basale correspondante.

 f) **AAPS** offre la possibilité de définir des profils spécifiques pour différentes situations et de basculer facilement entre eux. Par exemple, les fonctionnalités qui rendent l'algorithme plus rapide pour faire descendre une glycémie élevée, telles que les super-micro-bolus (« **SMB** ») ou les Repas Non Signalés, (“**RNS**”), peuvent être configurées pour agir uniquement pendant la journée, si vous vous inquiétez des hypos nocturnes.

Il s'agit là de quelques exemples, l'éventail complet des fonctionnalités offrant une grande flexibilité dans la vie quotidienne, y compris l'activité sportive, les maladies, les cycles hormonaux, _etc_. En résumé, c'est à l'utilisateur de décider comment utiliser cette flexibilité, et il n'y a pas une automatisation unique pour tout le monde.

#### 4) **Surveillance à distance**
There are multiple possible monitoring channels (Sugarmate, Dexcom Follow, xDrip+, Android Auto _etc._) which are useful for parents/carers and adults in certain scenarios (sleeping/driving) who need customisable alerts. In some apps (xDrip+) you can also turn alarms off totally, which is great if you have a new sensor “soaking” or settling down that you don’t want to loop with yet.

#### 5) **Contrôle à distance**
Un avantage significatif d'**AAPS** par rapport aux systèmes commerciaux est de proposer aux suiveurs un large éventail de commandes qui peuvent être envoyées vers **AAPS**, via des SMS authentifiés ou via une application ([Nightscout](https://nightscout.github.io/)ou AAPSClient). Ce type de commande est largement utilisée par les parents d'enfants atteints de diabète de type 1 qui utilisent AAPS. C'est très utile par exemple quand votre enfant est occupé à jouer au parc et que vous voulez envoyer un pré-bolus pour une collation à partir de votre propre téléphone. It is possible to monitor the system (_e.g._ Fitbit), send basic commands (_e.g._ Samsung Galaxy watch 4), or even run the entire AAPS system from a high-spec smartwatch (**5**) (_e.g._ LEMFO). Dans ce dernier scénario, vous n’avez même pas besoin d’utiliser un téléphone pour exécuter AAPS. À mesure que la durée de vie de la batterie des montres s'améliore, cette dernière option va devenir de plus en plus intéressante.

#### 6) **Pas de contraintes commerciales, grâce à un système de communication ouvert**
Au-delà de l'utilisation d'une approche open source, qui permet de voir à tout moment le code source de **AAPS**, le principe général est de fournir des interfaces de programmation ouvertes donnant aux autres développeurs l'opportunité de contribuer et d'apporter de nouvelles idées qui permettent aux utilisateurs de vivre plus facilement avec leur diabète. **AAPS** est étroitement lié à Nightscout. Cela accélère le développement et permet aux utilisateurs d'ajouter des fonctionnalités pour rendre la vie avec le diabète encore plus facile. Good examples for such integrations are [Nightscout](https://nightscout.github.io/), [Nightscout Reporter](https://nightscout-reporter.zreptil.de/), [xDrip+](https://xdrip.readthedocs.io/en/latest/install/usethedoc/), [M5 stack](https://github.com/mlukasek/M5_NightscoutMon/wiki) etc. La discussion est ouverte entre les développeurs de logiciels open-source et ceux qui développent des systèmes commerciaux. Bon nombre des innovations apportées par les utilisateurs sont progressivement adoptées par des systèmes commerciaux, où les développements sont de façon compréhensible plus lents, en partie parce que la communication entre les systèmes des différentes entreprises (pompes, applications, capteurs _etc_) doivent être soigneusement négociées et autorisées. Cela peut également ralentir les innovations qui sont utiles pour les patients (ou un sous-groupe de patients avec un besoin très spécifique) mais ne génèrent aucun profit important.

#### 7) **Richesse de l'interface utilisateur**
Avec **AAPS**, il est facile de suivre des choses telles que : la quantité d'insuline dans la pompe, l'âge de la canule, l'âge du capteur, l'âge de la batterie de la pompe, l'insuline active _etc_. De nombreuses actions peuvent être effectuées via l'application **AAPS** (amorçage de la pompe, déconnexion de la pompe _etc_), au lieu de le faire sur la pompe elle-même, ce qui signifie que la pompe peut rester dans votre poche ou à votre ceinture (ou celle de la personne que vous assistez).

#### 8) **Accessibilité et faible coût**
**AAPS** donne accès aux personnes qui ne peuvent pas se l'acheter de leur poche, ou qui n'ont pas de financement/assurance, à un système de boucle fermée hybride de classe mondiale qui est conceptuellement en avance de plusieurs années en termes de développement par rapport aux systèmes commerciaux. Actuellement, vous devez avoir un environnement Nightscout pour la configuration initiale d'**AAPS**, bien que l'environnement Nightscout ne soit pas nécessaire ensuite pour l'utilisation sur le long terme de la boucle **AAPS**. De nombreuses personnes continuent d'utiliser Nightscout pour collecter leurs données et pour le contrôle à distance. Bien que **AAPS** soit gratuit, mettre en place Nightscout sur une des nombreuses plateformes disponibles peut avoir un coût (0€ - 12€). Ce coût sera fonction du niveau de support dont vous avez besoin (voir table de comparaison) et de si vous voulez conserver Nightscout après l'installation ou non. **AAPS** works with a wide range of affordable (starting from approx €150) [Android phones](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true). Différentes versions sont disponibles en fonction de votre pays et votre langue, et AAPS peut également être utilisé par des personnes [aveugles ou malvoyantes](#accessibility-for-users-aaps-who-are-partially-or-completely-blind).

#### 9) **Support**
Aucun système d'administration d'insuline automatique n'est parfait. Les systèmes commerciaux et les systèmes open-source partagent de nombreux problèmes communs en matière de communications et de défaillances matérielles temporaires. La communauté AAPS, constituée de personnes qui ont conçu, développé et qui utilisent actuellement **AAPS**, peut apporter du soutien et du support sur Facebook, Discord ou encore GitHub, partout dans le monde. Il y a aussi du support surt des groupes Facebook et de l'aide provenant d'établissement de santé et d'entreprises commerciales pour les systèmes de boucles fermées commerciaux. Cela vaut la peine de parler aux utilisateurs, ou aux anciens utilisateurs de ces systèmes afin d'obtenir des retours d'expérience sur les bugs courants, la qualité du programme éducatif et le niveau de support continu fourni.

#### 10) **Prévisibilité, transparence et sûreté**
**AAPS** est totalement transparent, logique et prévisible, ce qui peut faciliter la compréhension lorsque qu'un paramètre est incorrect et permet de l'ajuster en conséquence. Vous pouvez voir exactement ce que fait le système, pourquoi il le fait, et définissez ses limites opérationnelles, ce qui met le contrôle (et la responsabilité) entre vos mains. L'utilisateur peut gagner en assurance et bénéficier d'un sommeil plus tranquille.

#### 11) **Accès à des fonctionnalités avancées via les modes de développement (dev), y compris la boucle fermée complète**
Cette documentation **AAPS** se concentre sur la branche principale **“master”** de **AAPS**. Cependant, la recherche et le développement n'arrêtent jamais. Les utilisateurs plus expérimentés peuvent souhaiter explorer les fonctionnalités expérimentales dans la branche de **développement**. Les innovations en matière de développement se concentrent sur des stratégies de boucle fermée totale (sans avoir à saisir de bolus pour les repas _etc._), et essayent de manière générale de rendre la vie avec le diabète de type 1 aussi facile que possible.

#### 12) **Possibilité de contribuer vous-même à l'ajout de nouvelles fonctionnalités**
Le diabète de type 1 peut être très frustrant et isole les personnes. Avoir le contrôle de votre propre système technologique pour votr diabète, avec la possibilité de contribuer à votre tour dès que vous faites des progrès en aidant les autres dans leur cheminement peut être vraiment gratifiant. Vous pouvez vous former, mettre au jour des obstacles, faire des recherches et même contribuer à de nouveaux développements et à la documentation. Vous trouverez d'autres personnes dans la communauté avec qui partager la même envie de progresser, avec qui réfléchir et travailler. C'est l'essence même du mouvement #WeAreNotWaiting.

## Comment marche AAPS en comparaison aux Multiples Injections Quotidiennes (MDI) et à la boucle ouverte ?

Les injections quotidiennes multiples (MDI, (a) dans le **Schéma 2** ci-dessous) impliquent généralement de faire une injection d'insuline lente / à action longue (_par exemple_ Lantus, Tresiba) une fois par jour, avec des injections d'insuline à action rapide ou ultrarapide (_par exemple_ Novorapid ou Fiasp) à l'heure des repas, ou pour des corrections. L'utilisation classique d'une pompe à insuline (boucle ouverte) (b) implique l'utilisation d'une pompe pour délivrer le basal à des taux pré-programmés d'insuline à action rapide, puis à effectuer un bolus via la pompe lors des repas ou pour des corrections. Le principe de base d'un système de boucle est que l'application utilise les données de glycémie pour envoyer à la pompe l'instruction d'arrêter l'injection d'insuline lorsqu'elle prévoit que vous allez bientôt être en hypoglycémie, et pour vous donner plus d'insuline si votre glycémie augmente et que vous allez être en hyperglycémie (c). Bien que ce schéma soit simplifié par rapport à la réalité, il vise à démontrer les principales différences entre ces approches. Il est possible d'arriver à un contrôle extrêmement bon de la glycémie avec n'importe laquelle de trois approches.

![21-06-23 AAPS glucose MDI etc](../images/basic-overview-mdi-open-and-closed-loop.png)


**Figure 2**. Aperçu simplifié de (a) Injections multiples quotidiennes ou MDI, (b) boucle ouverte et (c) boucle fermée hybride.

## Comment marche AAPS en comparaison aux autres systèmes de boucle?

En date du 25 juin 2023, il y a actuellement quatre grands systèmes de boucle fermée open source disponibles : [OpenAPS](https://openaps.readthedocs.io/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) and [iAPS](https://github.com/Artificial-Pancreas/iAPS?fbclid=IwAR2fA9Y9YqYzpKSrtEsotfXl5b67UclDkKgyrv52tQLzYbOoBeNGRmjlJJI) (anciennement FreeAPS X). Les caractéristiques des différents systèmes sont affichées dans le tableau ci-dessous :


| Type d'appareil | Nom                                                                             | [AAPS](https://wiki.aaps.app)              | [Boucle](https://loopkit.github.io/loopdocs/) | [Open APS](https://openaps.readthedocs.io/en/latest/) | [iAPS](https://iaps.readthedocs.io/en/latest/) |
| --------------- | ------------------------------------------------------------------------------- | ------------------------------------------ | --------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------- |
| Téléphone       | Android                                                                         | ![disponible](../images/available.png)     | ![indisponible](../images/unavailable.png)    | ![indisponible](../images/unavailable.png)            | ![indisponible](../images/unavailable.png)     |
| Téléphone       | iPhone                                                                          | ![indisponible](../images/unavailable.png) | ![disponible](../images/available.png)        | ![indisponible](../images/unavailable.png)            | ![disponible](../images/available.png)         |
| Nano-ordinateur | tout petit ordinateur (1)                                                       | ![indisponible](../images/unavailable.png) | ![indisponible](../images/unavailable.png)    | ![disponible](../images/available.png)                | ![indisponible](../images/unavailable.png)     |
| POMPE           | [Dana I](../CompatiblePumps/DanaRS-Insulin-Pump.md)                             | ![disponible](../images/available.png)     | ![indisponible](../images/unavailable.png)    | ![indisponible](../images/unavailable.png)            | ![indisponible](../images/unavailable.png)     |
| POMPE           | [Dana RS](../CompatiblePumps/DanaRS-Insulin-Pump.md)                            | ![disponible](../images/available.png)     | ![indisponible](../images/unavailable.png)    | ![indisponible](../images/unavailable.png)            | ![indisponible](../images/unavailable.png)     |
| POMPE           | [Dana R](../CompatiblePumps/DanaR-Insulin-Pump.md)                              | ![disponible](../images/available.png)     | ![indisponible](../images/unavailable.png)    | ![indisponible](../images/unavailable.png)            | ![indisponible](../images/unavailable.png)     |
| POMPE           | [Omnipod (Dash)](../CompatiblePumps/OmnipodDASH.md) (2)                         | ![disponible](../images/available.png)     | ![disponible](../images/available.png)        | ![indisponible](../images/unavailable.png)            | ![disponible](../images/available.png)         |
| POMPE           | [Omnipod (Eros)](../CompatiblePumps/OmnipodEros.md)                             | ![disponible](../images/available.png)     | ![disponible](../images/available.png)        | ![indisponible](../images/unavailable.png)            | ![disponible](../images/available.png)         |
| POMPE           | [Diaconn G8](../CompatiblePumps/DiaconnG8.md)                                   | ![disponible](../images/available.png)     | ![indisponible](../images/unavailable.png)    | ![indisponible](../images/unavailable.png)            | ![indisponible](../images/unavailable.png)     |
| POMPE           | [EOPatch 2](../CompatiblePumps/EOPatch2.md)                                     | ![disponible](../images/available.png)     | ![indisponible](../images/unavailable.png)    | ![indisponible](../images/unavailable.png)            | ![indisponible](../images/unavailable.png)     |
| POMPE           | [Medtrum TouchCare Nano](../CompatiblePumps/MedtrumNano.md)                     | ![disponible](../images/available.png)     | ![indisponible](../images/unavailable.png)    | ![indisponible](../images/unavailable.png)            | ![indisponible](../images/unavailable.png)     |
| POMPE           | [Medtrum TouchCare 300U](../CompatiblePumps/MedtrumNano.md)                     | ![disponible](../images/available.png)     | ![indisponible](../images/unavailable.png)    | ![indisponible](../images/unavailable.png)            | ![indisponible](../images/unavailable.png)     |
| POMPE           | [Roche Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)                    | ![disponible](../images/available.png)     | ![indisponible](../images/unavailable.png)    | ![indisponible](../images/unavailable.png)            | ![indisponible](../images/unavailable.png)     |
| POMPE           | [Roche Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)                   | ![disponible](../images/available.png)     | ![indisponible](../images/unavailable.png)    | ![indisponible](../images/unavailable.png)            | ![indisponible](../images/unavailable.png)     |
| POMPE           | [Anciennes Medtronic](../CompatiblePumps/MedtronicPump.md)                      | ![disponible](../images/available.png)     | ![disponible](../images/available.png)        | ![disponible](../images/available.png)                | ![disponible](../images/available.png)         |
| POMPE           | [Equil 5.3](../CompatiblePumps/Equil5.3.md)                                     | ![disponible](../images/available.png)     | ![indisponible](../images/unavailable.png)    | ![indisponible](../images/unavailable.png)            | ![indisponible](../images/unavailable.png)     |
| MGC             | [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                      | ![disponible](../images/available.png)     | ![disponible](../images/available.png)        | ![indisponible](../images/unavailable.png)            | ![disponible](../images/available.png)         |
| MGC             | [Dexcom One](../CompatibleCgms/DexcomG6.md)                                     | ![disponible](../images/available.png)     | ![disponible](../images/available.png)        | ![indisponible](../images/unavailable.png)            | ![disponible](../images/available.png)         |
| MGC             | [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                      | ![disponible](../images/available.png)     | ![disponible](../images/available.png)        | ![disponible](../images/available.png)                | ![disponible](../images/available.png)         |
| MGC             | [Dexcom G5](../CompatibleCgms/DexcomG5.md)                                      | ![disponible](../images/available.png)     | ![disponible](../images/available.png)        | ![disponible](../images/available.png)                | ![disponible](../images/available.png)         |
| MGC             | [Libre 3](../CompatibleCgms/Libre3.md)                                          | ![disponible](../images/available.png)     | ![indisponible](../images/unavailable.png)    | ![indisponible](../images/unavailable.png)            | ![indisponible](../images/unavailable.png)     |
| MGC             | [Libre 2](../CompatibleCgms/Libre2.md)                                          | ![disponible](../images/available.png)     | ![indisponible](../images/unavailable.png)    | ![indisponible](../images/unavailable.png)            | ![disponible](../images/available.png)         |
| MGC             | [Libre 1](../CompatibleCgms/Libre1.md)                                          | ![disponible](../images/available.png)     | ![indisponible](../images/unavailable.png)    | ![indisponible](../images/unavailable.png)            | ![disponible](../images/available.png)         |
| MGC             | [Eversense](../CompatibleCgms/Eversense.md)                                     | ![disponible](../images/available.png)     | ![indisponible](../images/unavailable.png)    | ![indisponible](../images/unavailable.png)            | ![disponible](../images/available.png)         |
| MGC             | [MM640g/MM630g](../CompatibleCgms/MM640g.md)                                    | ![disponible](../images/available.png)     | ![indisponible](../images/unavailable.png)    | ![indisponible](../images/unavailable.png)            | ![disponible](../images/available.png)         |
| MGC             | [PocTech](../CompatibleCgms/PocTech.md)                                         | ![disponible](../images/available.png)     | ![indisponible](../images/unavailable.png)    | ![indisponible](../images/unavailable.png)            | ![disponible](../images/available.png)         |
| MGC             | [Ottai](../CompatibleCgms/OttaiM8.md)                                           | ![disponible](../images/available.png)     | ![indisponible](../images/unavailable.png)    | ![indisponible](../images/unavailable.png)            | ![indisponible](../images/unavailable.png)     |
| MGC             | [Syai Tag](../CompatibleCgms/SyaiTagX1.md)                                      | ![disponible](../images/available.png)     | ![indisponible](../images/unavailable.png)    | ![indisponible](../images/unavailable.png)            | ![indisponible](../images/unavailable.png)     |
| MGC             | [Nightscout comme source de glycémie](../CompatibleCgms/CgmNightscoutUpload.md) | ![disponible](../images/available.png)     | ![disponible](../images/available.png)        | ![disponible](../images/available.png)                | ![disponible](../images/available.png)         |

_Notes de tableau :_
1. Un **nano-ordinateur** est un petit ordinateur que vous transportez avec vous, sans moniteur. Un type d'appareil pris en charge est Intel Edison + Explorer Board et l'autre Raspberry Pi + Explorer HAT ou Adafruit RFM69HCW Bonnet. Les premiers APS étaient basés sur cette configuration, car les téléphones mobiles n'étaient pas capables d'exécuter les algorithmes nécessaires. L'utilisation de ces systèmes a régressé, car l'installation sur les téléphones mobiles est devenue plus facile et les téléphones ont un écran inclus. Intel a également arrêté de vendre l'Intel Edison. Les excellents algorithmes OpenAPS **oref0** et **oref1** sont maintenant inclus dans AAPS et iAPS.
2. Omnipod Dash est le successeur de Omnipod Eros. Il prend en charge la communication bluetooth et n'a pas besoin d'un accessoire intermédiaire pour communiquer avec le téléphone mobile. Si vous avez le choix, nous recommandons l'utilisation du Dash au lieu de l'Eros.


Une déclaration de consensus international, revue par les pairs, contenant des directives pratiques sur la boucle open-source a été rédigée par et pour les professionnels de la santé, et publiée dans une revue médicale respectée en 2022 : [_Lancet Diabetes Endocrinol_, 2022; 10: 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_). Ce document est fort utile (y compris pour votre équipe médicale) et résume les principales différences techniques entre les différents systèmes open-source de boucle fermée hybride.

Il est difficile d'avoir un "ressenti" quel que soit le système sans l'utiliser soi-même, ou sans en parler à d'autres qui l'utilisent, alors n'hésitez pas à contacter et à demander des retours d'expériences à des utilisateurs sur Facebook/Discord. La plupart des gens trouvent que **AAPS** est extrêmement sophistiqué par rapport aux autres systèmes de boucle fermée hybrides (particulièrement les systèmes commerciaux), avec un grand nombre de paramètres et de fonctionnalités potentiellement personnalisables, comme indiqué précédemment. Certaines personnes peuvent trouver cela un peu trop au début, mais il n'y a pas de précipitation à avoir pour étudier toutes les possibilités en même temps, vous pouvez progresser aussi lentement ou aussi vite que vous le souhaitez, et il y a de l'aide à chaque étape.


## AAPS utilise-t-il une intelligence artificielle ou un algorithme d’apprentissage ?

The current master version of **AAPS** (3.3.1.3) does not have any machine learning algorithms, multiple-parameter insulin response models, or artificial intelligence. En tant que tel, le système est ouvert et transparent dans son fonctionnement, et a la capacité d'être compris non seulement par les experts, mais aussi par les médecins et les patients. En conséquence, si vous avez un changement notable dans votre emploi du temps (comme le passage d'une semaine de travail stressante à des vacances relaxantes) et que vous prévoyez avoir besoin d'une quantité d'insuline significativement différente, vous pouvez immédiatement demander à **AAPS** d'exécuter un profil plus faible/plus fort. Un « système d'apprentissage » fera cet ajustement pour vous automatiquement, mais il est probable qu'il lui faille plus de temps pour ajuster la distribution d'insuline.

## Quel système est le plus approprié pour moi ou la personne que j'assiste ?

En pratique, votre choix de système est souvent restreint par la pompe que vous possédez déjà ou que vous pouvez obtenir auprès de votre médecin diabétologue et de votre choix de téléphone (Apple ou Android). Si vous n’avez pas encore de pompe, vous avez le plus grand choix de systèmes. La technologie est en constante évolution, la production ou vente de certaines pompes s'arréte et de nouvelles pompes et capteurs apparaissent. La plupart des systèmes open-source fonctionnent avec les capteurs principaux (Freestyle Libre et Dexcom) ou sont rapidement mis à jour pour utiliser de nouveaux capteurs environ un an après leur sortie (avec un peu de retard pour les tests de sécurité et de stabilité).

La plupart des utilisateurs d'**AAPS** rapportent une amélioration du temps passé dans la cible, une réduction de l'HbA1c ainsi qu'une amélioration de la qualité de vie. Ces effets découlent du fait que le système qui peut ajuster automatiquement le débit d'insuline basale la nuit pendant le sommeil. Ceci est vrai pour la plupart des systèmes d'administration automatiques (APS) en boucle fermée hybride. Certaines personnes ont une préférence pour un système très simple qui n'est pas très personnalisable (ce qui signifie que vous pouvez préférer un système commercial), et d'autres personnes trouvent ce manque de contrôle très frustrant (vous pouvez préférer un système open-source). Lorsqu'on a été diagnostiqué récemment, on essaie généralement de s'habituer d'abord à un traitement par multiples injections quotidiennes d'insuline (MDI) associé à un capteur de glycémie. Ensuite on peut évoluer vers une pompe ayant la possbilité de "boucler", puis vers **AAPS**. Cependant, certaines personnes (en particulier les jeunes enfants) peuvent bénéficier de la mise en place d'une pompe à insuline dès les premiers temps.

Il est important de noter que les utilisateurs **AAPS** doivent être proactifs en cas de problème et les résoudre par eux-même avec l'aide de la communauté d'utilisateurs. C'est un état d'esprit très différent de celui correspondant à l'utilisation d'un système commercial. Avec **AAPS** un utilisateur a plus de contrôle, mais aussi plus de responsabilité, et doit être à l'aise avec cela.

## Peut-on utiliser des systèmes open-source comme AAPS en toute sécurité ?

### Sûreté du système AAPS
La question devrait plutôt être, plus précisément : « Est-ce sans danger **par rapport** à mon système actuel d'administration d'insuline ? » puisqu'aucune méthode d'administration d'insuline n'est sans risque. Il y a beaucoup de contrôles et régulations en place avec **AAPS**. Un [article](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375) récent a étudié l'utilisation d'**AAPS** via une simulation informatique, un moyen efficace de mesurer objectivement à quel point le système est sûr et efficace. De manière plus générale, on estime que plus de 10 000 personnes dans le monde utilisent des systèmes de distribution d'insuline automatisée open-source, et que ce nombre continue d'augmenter à l'échelle mondiale.

N'importe quel périphérique qui utilise des communications radio peut être piraté, et c'est vrai aussi pour une pompe à insuline (sans boucle). À l'heure actuelle, nous ne connaissons personne qui tente de nuire aux personnes en piratant leur équipement médical lié au diabète. Cependant, il existe de multiples moyens de se protéger contre de tels risques :

1.  Dans les paramètres de la pompe, limitez à la fois le bolus max autorisé et le réglage de base temporaire max à des quantités qui, selon vous, sont les plus sûres. Ce sont des limites fortes que nous pensons non contournables par un pirate malveillant.

2.  Laissez actives vos alarmes de capteurs de glycémies MGC pour les hypos et les hypers.

3.  Surveillez votre injection d'insuline en ligne. Les utilisateurs Nightscout peuvent définir des alarmes supplémentaires pour les alerter pour une grande variété de conditions, y compris les celles qui sont beaucoup plus susceptibles de se produire qu'une attaque malveillante. En plus des hypos et hypers, Nightscout peut afficher des données de diagnostic utiles pour vérifier que la pompe fonctionne comme vous le souhaitez, incluant l'Insuline Active (IA) courante, l'historique des basales temporaires de la pompe, l'historique des bolus de la pompe. Il peut également être configuré pour avertir proactivement les utilisateurs de conditions indésirables, telles que : prévisions d'hypos et d'hypers, réservoir d'insuline faible et batterie faible de la pompe.

Si une attaque malveillante était effectuée contre votre pompe à insuline, ces stratégies atténueraient considérablement le risque. Chaque utilisateur potentiel d'**AAPS** doit évaluer les risques associés à l'utilisation d'**AAPS**, par rapport aux risques d'utilisation d'un système différent.

#### Considérations de sécurité en lien avec l'amélioration trop rapide du contrôle de la glycémie

Une baisse rapide de l'HbA1c et un meilleur contrôle de la glycémie paraissent attirants. Cependant, faire baisser les niveaux moyens de glucose sanguin _trop rapidement_ en démarrant un système de boucle fermée quel qu'il soit, peut causer des dommages permanents, y compris aux yeux, et une neuropathie douloureuse qui ne disparaîtra jamais. Ces atteintes peuvent être évitées simplement en baissant plus lentement les niveaux. Si vous avez actuellement un taux d'HbA1c élevé et que vous passez à AAPS (ou à tout autre système en boucle fermée), veuillez discuter de ce risque potentiel avec votre équipe médicale avant de commencer, et convenez d'un plan de mise en place avec elle. More general information on how to reduce your glucose levels safely, including links to medical literature is given in the [safety section [here](#preparing-safety-first).

#### Sûreté médicale autour des dispositifs, consommables et autres médicaments

Utilisez une pompe à insuline et un capteur de glycémie approuvés par la FDA ou la CE, testés et entièrement fonctionnels, pour une boucle de pancréas artificiel. Les modifications matérielles ou logicielles de ces composants peuvent entraîner un dosage incorrect de l'insuline, causant un risque significatif pour l'utilisateur. Si vous trouvez ou recevez des pompes à insuline ou des capteurs de glycémie cassés, modifiés ou fabriqués maison, ne les utilisez pas pour mettre en place un système AAPS.

Utilisez du matériel d'origine pour les applicateurs, cathéters et réservoirs d'insuline, approuvés par le fabricant de votre pompe et de votre MGC. L'utilisation de consommables non testés ou modifiés peut entraîner une imprécision du MGC et des erreurs de dosage de l'insuline. L'insuline peut s'avérer très dangereuse lorsqu'elle est mal dosée - ne jouez pas avec votre vie en bricolant votre matériel.

Ne prenez pas d'inhibiteurs de SGLT-2 (gliflozines) lorsque vous utilisez **AAPS** car il est impossible de calculer la manière dont ils font baisser la glycémie. Combining this effect with a system that lowers basal rates in order to increase BG is dangerous, there is more detail about this in the main [safety section](#preparing-safety-first).

(introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team)=
## Comment puis-je aborder AAPS avec mon équipe médicale ?

Les utilisateurs sont encouragés à parler avec leur équipe médicale de leur intention d'utiliser **AAPS**. N'hésitez pas à avoir une conversation franche avec votre équipe médicale si vous avez l'intention d'utiliser **AAPS** (ou tout autre boucle DIY, d'ailleurs). La transparence et la confiance entre le patient et le médecin sont primordiales.

### Approche suggérée :
Commencez par discuter avec votre docteur afin d'en savoir plus sur ses connaissances et son attitude vis-à-vis de la technologie utile aux diabétiques telle que les MGC, les pompes, les boucles hybrides et les boucles commerciales. Votre docteur/endocrinologue devrait être au fait des moyens techniques de base et être prêt à discuter avec vous des récentes avancées apportées par les produits de boucle commerciaux disponibles dans votre pays.

#### Antécédents locaux

Cherchez à connaître l'opinion de votre docteur/endocrinologue sur les boucles DIY _vs_ une boucle commerciale, et évaluez ses connaissances dans ce domaine. Connaît-il déjà **AAPS** et peut-il vous donner des conseils du fait d'avoir suivi des patients utilisant une boucle DIY ?

Demandez si l'équipe médicale suit des patients qui utilisent déjà une boucle DIY. En raison du secret médical, les médecins ne peuvent pas transmettre les informations d'autres patients sans obtenir le consentement de la personne. Cependant, si vous le souhaitez, vous **pouvez** leur demander de transmettre **vos** coordonnées à un patient utilisant déjà la boucle DIY si le docteur estime que vous pourriez "accrocher" avec lui, en lui indiquant que vous seriez heureux que le patient vous contacte pour discuter de la boucle DIY. Les docteurs n'ont aucune obligation de le faire, mais certains le feront avec plaisir, car ils ont conscience de l'importance du soutien entre pairs dans la gestion du diabète de type 1. Vous pourriez également trouver utile de rencontrer des boucleurs DIY à proximité de chez vous. Cela dépend bien sûr de vous, et n'est pas indispensable.

#### Antécédents nationaux et internationaux

Si vous vous sentez peu soutenu par votre équipe pour boucler avec **AAPS**, les points de discussion suivants peuvent vous aider :

a) Le système **AAPS** a été conçu PAR des patients et leurs aidants. Il a été conçu avant tout pour la sûreté, mais aussi en s'inspirant de l'expérience "dans la vie réelle" des patients. Il y a actuellement environ **10 000** utilisateurs d'AAPS dans le monde entier. Il est donc probable qu'il y ait d'autres personnes utilisant une boucle DIY parmi les patients que suit votre docteur (qu'il soit au courant ou non).

b) Les recommandations récentes publiées et revues par des pairs dans le journal médical de renommée internationale [The Lancet](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/pdf/nihms-1765784.pdf)_(1)_ ont confirmé que les boucles DIY sont **sûres** et **efficaces pour améliorer le contrôle du diabète**, y compris le temps passé dans la cible. There are regular articles in leading journals like [Nature](https://doi.org/10.1038/d41586-023-02648-9)_(3)_ which highlight the progress of the DIY looping community.

c) La mise en place d'**AAPS** se fait par étapes _progressives_ : partant d'une pompe en boucle "ouverte", en passant par l'arrêt avant hypo, jusqu'à la boucle "fermée" hybride. Cette évolution se fait en atteignant successivement un certain nombre d'objectifs. Il existe donc un programme structuré, exigeant de l'utilisateur qu'il démontre un niveau de compétence à chaque étape et qu'il ajuste ses paramètres de base (basal, SI et G/I) avant de pouvoir fermer la boucle.

d) Vous trouverez toujours le support technique dont vous avez besoin auprès de la communauté DIY via les groupes privés GitHub, Discord et Facebook.

e) Vous serez en mesure de fournir **aussi bien des informations sur votre glycémie que sur votre boucle/administration d'insuline par la pompe** sous forme de rapports synthétiques lors de vos RDV médicaux (grâce à Nightscout ou Tidepool), soit imprimés soit sous format numérique (si vous apportez un ordinateur portable/tablette). La mise en parallèle des données de glycémie et d'insuline permettra une utilisation plus efficace du temps de votre docteur lors de l'examen vos rapports et des discussions pour évaluer vos progrès.

f) If there is still strong objection from your team, hand your clinician printouts of the reference articles linked here in the text, and give them the link to the **AAPS** clinicians section: [For Clinicians – A General Introduction and Guide to **AAPS**](../UsefulLinks/ClinicianGuideToAaps.md)

#### Support pour la boucle DIY par d'autres docteurs

L'article publié dans le [Lancet Diabetes Endocrinology](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_)[ (co-dirigé par Kings’ et Guy’s et St Thomas’ NHS Foundation Trust, et co-dirigé par le Dr Sufyan Hussain, un diabétologue consultant et maître de conférences honoraire de King’s à Londres) fournit :

a) La **certitude** pour les professionnels de santé que les systèmes de pancréas artificiel DIY / open source sont une possibilité de traitement "sûre et efficace" pour le diabète de type 1. Il fournit aussi des orientations sur les recommandations, les discussions, les supports, la documentation;

b) La **reconnaissance** que les systèmes de distribution d'insuline automatisés en open source (AID) peuvent augmenter le temps passé dans la cible (TIR) tout en diminuant la variation des glycémies et le nombre d'épisodes hypoglycémiques et hyperglycémiques, pour divers groupes d'âge, sexe et origine;

c) La **recommandation** selon laquelle les professionnels de la santé devraient **soutenir** les patients de type 1 ou leurs aidants qui choisissent de gérer leur diabète avec un système de boucle open source;

d) La recommandation selon laquelle les professionnels de santé devraient essayer de se documenter sur toutes les possibilités de traitement qui pourraient bénéficier aux patients, y compris les systèmes de boucle open source disponibles.  Si les professionnels de santé ne trouvent pas les ressources pour se documenter, ou ont des interrogations légales ou réglementaires, ils devraient envisager de **coopérer ou de s'associer avec d'autres professionnels de santé** qui peuvent les aider;

e) Insiste sur le fait que tous les utilisateurs de MGC devraient avoir un accès en temps réel à **leurs propres données de santé** à tout instant

f) Souligne que ces systèmes open source n'ont pas subi les mêmes évaluations réglementaires que les technologies médicales disponibles commercialement, et qu'il n'y a pas de support technique commercial. Cependant, **un soutien à tous niveaux est disponible** via la communauté d'utilisateurs; et

g) La recommandation selon laquelle les **cadres réglementaires et juridiques** devraient être mis à jour pour garantir la clarté sur l'autorisation du traitement éthique et efficace de ces systèmes open source.

Un autre article dans [Medical Law International, 2021](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)(_4_) insiste également sur le fait que le « guide sur le consentement » du Conseil Général de Médecine du Royaume-Uni accorde une grande importance au fait que le médecin et le patient prennent les décisions d'un commun accord. Les professionnels de santé devraient expliquer les avantages, risques, inconvénients et effets secondaires potentiels du système APS open-source et devraient pouvoir recommander une option particulière sans pour autant faire pression sur le patient pour qu'il l'adopte.

En fin de compte, il revient au patient de considérer ces facteurs, ainsi que tout problème non clinique pertinent pour lui, et de décider quelle option de traitement, le cas échéant, accepter.

Lorsqu'un médecin se rend compte que son patient boucle avec un système DIY, ça ne l'exonère pas de son obligation de suivre le patient, simplement parce qu'il n'a pas prescrit cet élément technologie particulière que le patient utilise; les professionels de santé doivent continuer de suivre leurs patients.

Les médecins (du moins au Royaume-Uni) n'ont pas l'interdiction de prescrire des médicaments non reconnus et peuvent utiliser leur discernement médical. Ils devraient donc faire usage de leur jugement médical pour décider si un système APS DIY convient à un patient spécifique, et discuter avec le patient de ce qu'ils y voient comme avantages et inconvénients.

#### Les articles référencés ci-dessus, ainsi que d'autres liens utiles et déclarations de position sont listés ci-dessous :

1. Administration automatisée d'insuline open-source : déclaration de consensus international et directives pratiques pour les professionnels de la santé [_Lancet Diabetes Endocrinol_, (2022) _10_, 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)
2. [In Silico Trials of an Open-Source Android-Based Artificial Pancreas: A New Paradigm to Test Safety and Efficacy of Do-It-Yourself Systems, 2020](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375)
3. Un ‘pancréas bionique’ révolutionne les soins du diabète — quelle est la prochaine étape ? [_Nature_ (2023), _620_, 940-941](https://doi.org/10.1038/d41586-023-02648-9)
4. Prescrire des dispositifs médicaux non approuvés ? Le cas des systèmes de pancréas artificiels DIY [_Medical law international_, (2021), _21_, 42-68](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)
5. [Déclaration de position de l'Institut de santé de Berlin, 2022](https://www.bihealth.org/en/notices/do-it-yourself-solutions-for-people-with-diabetes-are-safe-and-recommended)
6. Administration d'insuline automatisée open-source : Guide d'utilisation pour le professionnel de santé (position et guide de Diabetes Canada) [_Canadian Journal of Diabetes_, (2023)_47_, E8, 389-397](https://www.canadianjournalofdiabetes.com/article/S1499-2671(23)00138-7/fulltext)
7.  Pays-Bas (EN/NL) - pour les professionnels de santé- [comment aider les personnes avec les systèmes automatisés d'administration d'insuline en open source](https://www.diabetotech.com/blog/how-to-help-people-on-open-source-automated-insulin-delivery-systems)
8. Première utilisation du système d'admnistration automatisé de l'insuline open-source AndroidAPS dans un scénario de boucle fermée totale : étude pilote randomisée Pancreas4ALL [_Diabetes Technol. Ther._, 25, _5_, 2023](https://www.liebertpub.com/doi/pdf/10.1089/dia.2022.0562?casa_token=D13eFx5vCwwAAAAA:MYvO8hChbViXVJFgov1T11RXBPx2N_wOMThLHwl3TVUxbCuANegPrIFRC5R5VXx_S71FoQYW-qg)
9. Les enfants d'âge préscolaire et scolaire bénéficient du passage d'une pompe associée à un capteur de glycémie à une boucle fermée hybride AndroidAPS : Une analyse rétrospective [_Pediatr. Diabetes_ 2021, _22_, 594-604. 2021](https://onlinelibrary.wiley.com/doi/epdf/10.1111/pedi.13190)
10. Publications du projet OPEN, un projet financé par l'UE étudiant la "preuve par le patient" avec une technologie de pancréas artificiel novatrice et open-source (https://www.open-diabetes.eu/publications)



## Pourquoi je ne peux pas simplement télécharger AAPS et l’utiliser immédiatement ?

L'application n'est pas fournie dans Google Play - vous devez la compiler vous même à partir du code source pour des raisons juridiques. **AAPS** n'est pas autorisé, ce qui signifie qu'il n'a pas reçu d'approbation par une autorité réglementaire quelque soit le pays. Utiliser **AAPS** revient à mener une expérience médicale sur vous-même, et se fait à vos risques et périls.

La mise en place du système nécessite de la patience, de la détermination et l'apprentissage progressif des connaissances techniques. Toutes les informations et le support peuvent être trouvés dans ces documents, ailleurs en ligne, ou auprès d'autres personnes qui l'ont déjà mis en place. On estime que plus de 10 000 personnes à travers le monde entier ont réussi à compiler et utilisent actuellement **AAPS**.

Les développeurs de **AAPS** prennent très au sérieux la sûreté, et font tout pour que la communauté des utilisateurs ait la meilleure expérience possible de **AAPS**. C'est pourquoi il est essentiel que chaque utilisateur (ou chaque parent si l'utilisateur est un enfant) :

- compile le système AAPS lui-même et passe successivement les **objectifs** afin que les paramètres à personnaliser soient raisonnablement bons, et comprenne les bases de la façon dont **AAPS** fonctionne avant de « fermer la boucle »;

- sauvegarde leur système en exportant et en enregistrant des fichiers importants (comme les fichiers keystore et paramètres json) dans un lieu sécurisé, afin de pouvoir configurer rapidement le système si nécessaire;

- mette à jour les nouvelles versions master d'AAPS dès qu'elles sont disponibles; et

- gère et surveille le système pour s’assurer qu’il fonctionne correctement.

## Comment le système AAPS est-il interconnecté ?

**La figure 3 (ci-dessous)** montre un exemple du système **AAPS** pour un utilisateur qui n'a pas besoin que des suiveurs puissent interagir avec le système. D'autres applications et plates-formes open-source, non illustrés ici, peuvent également être intégrés.

![21-06-23 Connectivité AAPS sans suiveurs](../images/AAPS-connectivity-no-followers.png)


**La figure 4 (ci-dessous)** montre tout le potentiel du système **AAPS** pour un utilisateur qui a besoin d'un suivi et un contrôle à distance par un tiers pour ajuster le système (ex. un enfant avec un DT1). D'autres applications et plates-formes open-source, non illustrés ici, peuvent également être intégrés.

![21-06-23 AAPS aperçu avec des followers](../images/AAPS-overview-with-followers.png)

## Comment AAPS est-il développé et continuellement amélioré ?

La plupart des utilisateurs d'**AAPS** utilisent la version d'AAPS entièrement testée **master**, testée pour les bugs et autres problèmes, avant d'être livrée à la communauté. En coulisse, les développeurs essaient de nouvelles améliorations, et les testent dans des versions d'**AAPS** appelées « développeur » (**dev**) avec une communauté d'utilisateurs qui sont heureux de faire des mises à jour des corrections à court terme. Si les améliorations fonctionnent bien, elles sont ensuite publiées en tant que nouvelle version « maître » d'**AAPS**. Toute nouvelle version master est annoncée sur le groupe Facebook "AAPS users", afin que les utilisateurs d'**AAPS** puissent en savoir plus et mettre à jour leur système avec la nouvelle version master.

Certains utilisateurs d'**AAPS** expérimentés et sûr d'eux font des tests avec les technologies émergentes et avec les versions de développement de l'application **AAPS**. Il peut être intéressant pour les utilisateurs moins aventureux de lire sur ces sujets, sans avoir à le faire eux-mêmes ! Les gens ont tendance à partager ces expériences sur le groupe Facebook.

Vous pouvez en savoir plus sur certaines de ces expériences et discussions sur les technologies émergentes ici :

Tim Street [https://www.diabettech.com/](https://www.diabettech.com/)

David Burren [https://bionicwookie.com/](https://bionicwookie.com/)

## A qui AAPS peut-il être utile ?

| Type d'utilisateur                              |
| ----------------------------------------------- |
| ✔️ diabétique de type 1                         |
| ✔️ soignant ou parent d'un diabétique de type 1 |
| ✔️ utilisateurs aveugles diabétiques de type 1  |
| ✔️ *médecins et professionnels de la santé      |

La table ci-dessus suppose que l'utilisateur a accès à la fois à un capteur de glycémie et à une pompe à insuline.

* Toutes les données d'**AAPS** peuvent être mises à la disposition des professionnels de santé par le biais de plates-formes de partage de données. Par exemple NightScout, qui permet la surveillance en temps réel et le stockage dans le durée des données du capteur de glycémie, de l'administration d'insuline, des entrées de glucides, des prévisions et des paramètres. Les dossiers Nightscout comprennent des rapports quotidiens et hebdomadaires qui peuvent aider les professionnels de la santé à discuter avec les patients diabétiques de type 1 pour améliorer le contrôle glycémiques et les comportements à adopter.

### Accessibilité pour les utilisateurs AAPS aveugles ou malvoyants

#### Utilisation quotidienne de AAPS :
AAPS peut également être utilisé par les personnes aveugles ou malvoyantes. Sur les appareils Android, le système d'exploitation propose une application appelée TalkBack. Cela permet de contrôler l'écran par la voix, directement via le système d'exploitation. En utilisant TalkBack, vous pouvez utiliser à la fois votre smartphone et AAPS sans avoir besoin de voir.

#### Compilation de l'application AAPS :
En tant qu'utilisateur, vous compilerez l'application AAPS dans Android Studio. Beaucoup utilisent Microsoft Windows pour cela, qui propose un lecteur d'écran, "Narrateur ", semblable à TalkBack. Comme Android Studio est une application Java, le composant "Java Access Bridge" doit être activé dans le Panneau de configuration. Dans le cas contraire, le lecteur d'écran du PC ne pourra pas fonctionner dans Android Studio.

Comment faire ? Cela dépend de votre système d'exploitation, deux méthodes sont décrites ci-dessous :

1) Dans le menu Démarrer de Windows, tapez "Panneau de configuration" dans le champ de recherche, validez avec Entrée. Cela ouvre : "Tous les éléments du panneau de configuration”.

Ouvrez les « Options d'ergonomie ».

Puis ouvrez "Utiliser l'ordinateur sans écran" en appuyant sur "Entrée".

Sous "Entendre le texte lu à haut voix", sélectionnez "Activer le narrateur" et "Activer la description audio", et cliquez sur "Appliquer"

ou :

2) Dans le menu Démarrer de Windows, tapez "Panneau de configuration" dans le champ de recherche, validez avec Entrée. Cela ouvre : "Tous les éléments du panneau de configuration”.

Commencez à taper "non-voyants" dans la barre de recherche, cliquez sur "Optimiser pour les non-voyants".

Vous arrivez dans la section "Utiliser l'ordinateur sans écran".

En bas de cette page, vous trouverez la case à cocher "Activer Java Access Bridge", cochez-la.

Et voilà, vous pouvez fermer la fenêtre ! Le lecteur d'écran devrait fonctionner maintenant.



## En quoi AAPS peut-il m'être utile ?

Si vous y investissez du temps, **AAPS** peut potentiellement conduire à :

- soulager le stress et la charge mentale de la gestion du diabète de type 1;

- réduire la multitude de décisions banales de la gestion au quotidien du diabète de type 1;

- fournir un débit adapté et personnalisé d'insuline basé sur des données en temps réel qui peuvent réduire le besoin de traitements d'hypoglycémie et réduire les épisodes d'hyperglycémie;

- avoir une meilleure connaissance de la gestion de l'insuline et de la confiance en soi pour mieux affiner vos paramètres;

- la possibilité de créer des paramètres automatiques (**automatisations**) adaptés à votre style de vie;

- améliorer la qualité de votre sommeil et de la réduction globale de la fréquence des interventions nocturnes;

- surveiller et administrer à distance la distribution d'insuline pour les accompagnants des diabétiques de type 1; et

- le remplacement de tous vos équipements mobiles pour la gestion du diabète (récepteur du lecteur de glucose en continu du récepteur et PDM de pompe) par un seul téléphone Android contrôlé par **AAPS**.


Au final, **AAPS** peut permettre aux individus de reprendre le contrôle et mieux gérer leur diabète, ce qui entraîne des taux de glycémie stables et de meilleurs résultats à long terme en matière de santé.

Vous voulez en savoir plus sur comment démarrer l'installation d'AAPS ? Take a look at the [preparing](../Getting-Started/PreparingForAaps.md) section.
