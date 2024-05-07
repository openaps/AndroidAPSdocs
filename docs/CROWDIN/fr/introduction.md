# Introduction aux APS et à AAPS

## Qu'est ce qu'un "Système de Pancréas Artificiel” (APS)?

Un pancréas humain fait beaucoup de choses en plus de réguler la glycémie. Cependant, le terme **« Système de pancréas artificiel » (APS)** fait généralement référence à un système qui agit pour maintenir automatiquement les niveaux de glycémie dans les limites de la santé.

La façon basique de faire cela est de détecter les **niveaux de glycémies**, utiliser ces valeurs pour faire des **calculs**, puis d'injecter le montant correct (estimé) d'**insuline** dans le corps. Il répète le calcul régulièrement (quelques minutes), 24h/24, 7j/7. Il utilise des **alarmes** et des **alertes** pour informer l'utilisateur si une intervention ou une attention est nécessaire. Ce système est généralement composé d'un **capteur de glycémie **, d'une **pompe à insuline** et d'une **application** sur un smartphone.

Vous pouvez en savoir plus sur les différents systèmes de pancréas artificiels actuellement disponibles et en cours de développement dans cet article de synthèse de 2022 :

![Frontières](./images/FRONTIERS_Logo_Grey_RGB.png) [Future Directions in Closed-Loop Technology](https://www.frontiersin.org/articles/10.3389/fendo.2022.919942/full#:~:text=Fully%20closed%2Dloop%20systems%2C%20unlike,user%20input%20for%20mealtime%20boluses) / Futures directions dans les technologies de boucle fermée (article en anglais).

Dans un avenir proche, certains systèmes dits de "double hormone" auront également la possibilité d'injecter du glucagon en plus de l'insuline, dans le but de prévenir les hypoglycémies sévères et de permettre un contrôle encore plus rigoureux de la glycémie.

Un pancréas artificiel peut être considéré comme un ["pilote automatique pour votre diabète"](https://www.artificialpancreasbook.com/). En d'autres termes :

Dans un avion, un pilote automatique ne fait pas tout le travail du pilote humain, ainsi le pilote ne peut pas dormir pendant la totalité du vol. Le pilote automatique facilite le travail du pilote. Il soulage le pilote du fardeau de la surveillance permanente de l’avion, lui permettant de se concentrer de temps à autre sur une surveillance de plus haut niveau. Le pilote automatique reçoit des signaux de divers capteurs. Un ordinateur les évalue en même temps que les spécifications du pilote, puis il effectue les ajustements nécessaires, en informant le pilote de tout motif de préoccupation. Le pilote n'a plus à se soucier de prendre constamment des décisions.

![image](./images/autopilot.png)

## Que signifie "boucle fermée hybride" ?

La meilleure solution pour le diabète de type 1 serait un « traitement fonctionnel » (probablement un implant de cellules pancréatiques protégées du système immunitaire). En attendant son arrivée, un pancréas artificiel « boucle fermée complète » serait probablement le meilleur choix. Il s'agit d'un système technologique qui n'a besoin d'aucune entrée utilisateur (comme les bolus d'insuline pour les repas, ou l'annonce d'une activité physique), avec une bonne régulation des taux de glycémie. Pour le moment, il n'existe pas de systèmes largement disponibles qui soient en boucle fermée « complète », ces systèmes ont tous besoin de quelques informations entrées par l'utilisateur. Les systèmes actuellement disponibles sont appelés boucles fermées « hybrides », car ils utilisent une combinaison de technologie automatisée et d’informations entrées par l'utilisateur.

## Comment et pourquoi la boucle a-t-elle commencé ?

Le développement de technologies commerciales pour les personnes atteintes de diabète de type 1 (DT1) est très lent. En 2013, la communauté TD1 a fondé le mouvement #WeAreNotWaiting (#nous n'attendronspas). Ses membres ont mis au point eux-mêmes des systèmes utilisant des technologies déjà approuvées (pompes à insuline et capteurs de glycémie) pour améliorer le contrôle du taux de glycémie, la sécurité et la qualité de vie. Ces systèmes sont connus sous le nom de systèmes DIY (do-it-yourself) car ils ne sont pas officiellement approuvés par les organismes de santé (FDA, NHS, CE, FR, etc). A ce jour, Il y a 4 systèmes DIY principaux disponibles : [OpenAPS](https://openaps.org/what-is-openaps/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) et[ iAPS](https://github.com/Artificial-Pancreas/iAPS?fbclid=IwAR2fA9Y9YqYzpKSrtEsotfXl5b67UclDkKgyrv52tQLzYbOoBeNGRmjlJJI).

La lecture du livre de Dana Lewis « Automated Insuline Delivery » (Injection automatisée d'insuline) est un excellent moyen de comprendre les fondements de la boucle DIY. Vous pouvez y accéder [ici](https://www.artificialpancreasbook.com/) gratuitement (ou acheter une copie papier du livre). Si vous voulez en savoir plus sur [OpenAPS](https://openaps.org/what-is-openaps/), qui est le fondement d'**AAPS**, le site [OpenAPS](https://openaps.org/what-is-openaps/) est la référence.

Plusieurs systèmes de boucle fermée commerciale hybride sont sortis récemment, dont [CamAPS FX](https://camdiab.com/) (Royaume-Uni et UE) et [Omnipod 5](https://www.omnipod.com/en-gb/what-is-omnipod/omnipod-5) (USA et UE). Ceux-ci sont très différents des systèmes DIY principalement parce qu'ils incluent tous deux un « algorithme d'apprentissage » qui ajuste la quantité d'insuline délivrée en fonction de vos besoins d'insuline des jours précédents. De nombreuses membres de la communauté DIY ont déjà testé ces systèmes commerciaux et les ont comparés avec leur système de boucle DIY. Vous pouvez en savoir plus sur sur la comparaison des différents systèmes en posant des questions sur les groupes de discussion dédiés a ces systèmes, par exemple: sur le [groupe Facebook AAPS](https://www.facebook.com/groups/AndroidAPSUsers/) ou sur [Discord](https://discord.com/invite/4fQUWHZ4Mw).

## Qu'est-ce que Android APS (AAPS) ?

![image](./images/basic-outline-of-AAPS.png)

**Figure 1**. Description succinte du système APS d'Android (Artificial Pancréas System), AAPS.

Android APS (**AAPS**) est un système hybride en boucle fermée, ou système Artificiel de pancréas (APS). Il effectue ses calculs de dosage d'insuline à l'aide d'un algorithme de référence [OpenAPS](https://openaps.org/) (un ensemble de règles) développés par la communauté de diabète de type 1 #WeAreNotWaiting.

Étant donné qu'OpenAPS n'est compatible qu'avec un nombre limité d'anciennes pompes à insuline, Milos Kozak a développé en 2016 **AAPS** (qui peut être utilisé avec une gamme plus large de pompes à insuline) pour un membre de la famille souffrant de diabète de type 1. Depuis ses débuts, **AAPS** a été sans cesse développé et amélioré par une équipe de développeurs informatiques bénévoles et d'autres passionnés qui ont une connexion avec le monde du diabète de type 1. Aujourd'hui, **AAPS** est utilisé par environ 10 000 personnes dans le monde entier. C'est un système hautement personnalisable et polyvalent, et parce qu'il est open source, il est également facilement compatible avec de nombreux autres logiciels et plateformes open-source pour le diabète. Les composants fondamentaux du système **AAPS** actuel sont décrits dans **la figure 1** ci-dessus.



## Quels sont les composants de base d'AAPS ?

Le « cerveau » d'AAPS est une **application** que vous construisez vous-même. Des instructions détaillées sont fournies pour la construire. Vous installez ensuite **l'application AAPS** sur un **smartphone Android**  [compatible](https://docs.google.com/spreadsheets/d/1zO-Vf3wv0jji5Gflk6pe48oi348ApF5RvMcI6NG5TnY/edit?pli=1#gid=2097219952)  (**1**). Un certain nombre d'utilisateurs préfèrent conserver leur boucle sur un téléphone distinct de leur téléphone principal. Vous pouvez donc par exemple utiliser un téléphone Android juste pour faire fonctionner votre boucle AAPS et utiliser votre téléphone habituel pour toutes vos autres activités.

Vous aurez besoin d'une application supplémentaire sur votre **smartphone Android**, en plus d'**AAPS**. Il s'agit soit d'une application Dexcom modifiée appelée "Build Your Own Dexcom App" [**BYODA**](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0) ou [**Xdrip+**](https://xdrip.readthedocs.io/en/latest/install/usethedoc/). Cette application supplémentaire reçoit les données d'un capteur de glycémie (**2**) par bluetooth, et envoie ces données en interne sur le téléphone à l'application **AAPS**.

L'application **AAPS** utilise le processus de prise de décision (**algorithme**) d'OpenAPS. Les débutants commencent à utiliser l'algorithme de base **oref0** , mais il est possible de passer à l'utilisation de l'algorithme **oref1** plus récent au fur et à mesure que vous progressez avec AAPS. Le choix de l'algorithme (oref0 ou oref1) sera à effectuer en fonction de celui qui correspondra le mieux à votre situation.  Dans les deux cas, l'algorithme prend en compte plusieurs facteurs, et effectue des calculs rapides chaque fois qu'une nouvelle lecture provient du capteur de glycémie. L'algorithme envoie ensuite des instructions par bluetooth à la pompe à insuline (**3**) sur la quantité d'insuline à injecter. Toutes ces informations peuvent être transmises sur internet via les données mobiles ou le wifi (**4**). Ces données peuvent également être partagées avec des abonnés, si souhaité, et/ou collectées pour analyse.

## Quels sont les avantages du système AAPS ?

L'algorithme OpenAPS utilisé par **AAPS** contrôle les glycémies en l'absence de saisie de l'utilisateur, selon les paramètres qu'il a définis (les plus importants étant les débits de basale, les facteurs de sensibilité à l'insuline, les ratios Glucides/Insuline, la durée d'activité de l'insuline, etc.) , en réagissant toutes les 5 minutes aux nouvelles données transmises par le capteur. de glycémie. Certains des avantages les plus appréciés de l'utilisation d'AAPS sont les options de réglage fin et adaptable à chaque personne, la possibilité de mise en place d'automatisations et une plus grande transparence du système pour le patient et le soignant. Ceci peut permettre un meilleur contrôle de votre diabète (ou de celui de la personne que vous assistez), pouvant amener à une meilleure qualité de vie et une plus grande tranquillité d'esprit.

### **Parmi les avantages spécifiques :**

#### 1) La sûreté d'abord
Pour en savoir plus sur les caractéristiques de sécurité des algorithmes, appelés oref0 et oref1, [cliquez ici](https://openaps.org/reference-design/). L'utilisateur a la responsabilité de définir ses propres limites de sécurité.

#### 2) **Diversité matérielle**

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
Il existe divers outils de surveillance à distance (Sugarmate, Dexcom Follow, Xdrip+, Android Auto, _etc._) qui sont très utiles pour les parents/aidants et aussi pour les adultes DT1 qui ont besoin d'alertes personnalisables dans certaines situations (sommeil/conduite). Dans certaines applications (Xdrip+), vous pouvez également désactiver complètement les alarmes ce qui est génial si vous avez un nouveau capteur « en cours d'initialisation » ou en attente avec lequel vous ne voulez pas encore boucler.

#### 5) **Contrôle à distance**
Un avantage significatif d'**AAPS** par rapport aux systèmes commerciaux est de proposer aux suiveurs un large éventail de commandes qui peuvent être envoyées vers **AAPS**, via des SMS authentifiés ou via une application ([Nightscout](https://nightscout.github.io/)ou AAPSClient). Ce type de commande est largement utilisée par les parents d'enfants atteints de diabète de type 1 qui utilisent AAPS. C'est très utile par exemple quand votre enfant est occupé à jouer au parc et que vous voulez envoyer un pré-bolus pour une collation à partir de votre propre téléphone. A l'aide d'une montre connectée (**5**), il est possible de suivre le système (_par exemple_ Fitbit), d'envoyer des commandes basiques (_par exemple_ Samsung Galaxy watch 4), ou même de faire tourner l'ensemble du système AAPS (_par exemple_ LEMFO LEM14). Dans ce dernier scénario, vous n’avez même pas besoin d’utiliser un téléphone pour exécuter AAPS. À mesure que la durée de vie de la batterie des montres s'améliore, cette dernière option va devenir de plus en plus intéressante.

#### 6) **Pas de contraintes commerciales, grâce à un système de communication ouvert**
Au-delà de l'utilisation d'une approche open source, qui permet de voir à tout moment le code source de **AAPS**, le principe général est de fournir des interfaces de programmation ouvertes donnant aux autres développeurs l'opportunité de contribuer et d'apporter de nouvelles idées qui permettent aux utilisateurs de vivre plus facilement avec leur diabète. **AAPS** est étroitement lié à Nightscout. Cela accélère le développement et permet aux utilisateurs d'ajouter des fonctionnalités pour rendre la vie avec le diabète encore plus facile. De bons exemples de ces intégrations sont [NightScout](https://nightscout.github.io/), [Nightscout Reporter](https://nightscout-reporter.zreptil.de/), [Xdrip+](https://xdrip.readthedocs.io/en/latest/install/usethedoc/), [M5 stack](https://github.com/mlukasek/M5_NightscoutMon/wiki?fbclid=IwAR1pupoCy-2GuXLS7tIO8HRkOC_536YqSxTK7eF0UrKkM1PuucFYRyPFvd0), etc. La discussion est ouverte entre les développeurs de logiciels open-source et ceux qui développent des systèmes commerciaux. Bon nombre des innovations apportées par les utilisateurs sont progressivement adoptées par des systèmes commerciaux, où les développements sont de façon compréhensible plus lents, en partie parce que la communication entre les systèmes des différentes entreprises (pompes, applications, capteurs _etc_) doivent être soigneusement négociées et autorisées. Cela peut également ralentir les innovations qui sont utiles pour les patients (ou un sous-groupe de patients avec un besoin très spécifique) mais ne génèrent aucun profit important.

#### 7) **Richesse de l'interface utilisateur**
Avec **AAPS**, il est facile de suivre des choses telles que : la quantité d'insuline dans la pompe, l'âge de la canule, l'âge du capteur, l'âge de la batterie de la pompe, l'insuline active _etc_. De nombreuses actions peuvent être effectuées via l'application **AAPS** (amorçage de la pompe, déconnexion de la pompe _etc_), au lieu de le faire sur la pompe elle-même, ce qui signifie que la pompe peut rester dans votre poche ou à votre ceinture (ou celle de la personne que vous assistez).

#### 8) **Accessibilité et faible coût**
**AAPS** donne accès aux personnes qui ne peuvent pas se l'acheter de leur poche, ou qui n'ont pas de financement/assurance, à un système de boucle fermée hybride de classe mondiale qui est conceptuellement en avance de plusieurs années en termes de développement par rapport aux systèmes commerciaux. Actuellement, vous devez avoir un environnement Nightscout pour la configuration initiale d'**AAPS**, bien que l'environnement Nightscout ne soit pas nécessaire ensuite pour l'utilisation sur le long terme de la boucle **AAPS**. De nombreuses personnes continuent d'utiliser Nightscout pour collecter leurs données et pour le contrôle à distance. Bien que **AAPS** soit gratuit, mettre en place Nightscout sur une des nombreuses plateformes disponibles peut avoir un coût (0€ - 12€). Ce coût sera fonction du niveau de support dont vous avez besoin (voir table de comparaison) et de si vous voulez conserver Nightscout après l'installation ou non. **AAPS** fonctionne avec une large gamme de téléphones Android abordables (à partir d'approximativement 150€) . Différentes versions sont disponibles en fonction de votre pays et votre langue, et AAPS peut également être utilisé par des personnes [aveugles ou malvoyantes](Safety-first-aaps-can-also-be-used-by-blind-people).

#### 9) **Support**
Aucun système d'administration d'insuline automatique n'est parfait. Les systèmes commerciaux et les systèmes open-source partagent de nombreux problèmes communs en matière de communications et de défaillances matérielles temporaires. La communauté AAPS, constituée de personnes qui ont conçu, développé et qui utilisent actuellement **AAPS**, peut apporter du soutien et du support sur Facebook, Discord ou encore Github, partout dans le monde. Il y a aussi du support surt des groupes Facebook et de l'aide provenant d'établissement de santé et d'entreprises commerciales pour les systèmes de boucles fermées commerciaux. Cela vaut la peine de parler aux utilisateurs, ou aux anciens utilisateurs de ces systèmes afin d'obtenir des retours d'expérience sur les bugs courants, la qualité du programme éducatif et le niveau de support continu fourni.

#### 10) **Prévisibilité, transparence et sûreté**
**AAPS** est totalement transparent, logique et prévisible, ce qui peut faciliter la compréhension lorsque qu'un paramètre est incorrect et permet de l'ajuster en conséquence. Vous pouvez voir exactement ce que fait le système, pourquoi il le fait, et définissez ses limites opérationnelles, ce qui met le contrôle (et la responsabilité) entre vos mains. L'utilisateur peut gagner en assurance et bénéficier d'un sommeil plus tranquille.

#### 11) **Accès à des fonctionnalités avancées via les modes de développement (dev) incluant une boucle fermée complète**
Cette documentation **AAPS** se concentre sur la branche principale **“master”** de **AAPS**. Cependant, la recherche et le développement n'arrêtent jamais. Les utilisateurs plus expérimentés peuvent souhaiter explorer les fonctionnalités expérimentales dans la branche de **développement**. Cela inclut l'intégration du Dexcom G7 et l'ajustement automatique de l'injection d'insuline en fonction des changements de sensibilité à court terme (DYNISF). Les innovations en matière de développement se concentrent sur des stratégies de boucle fermée totale (sans avoir à saisir de bolus pour les repas _etc._), et essayent de manière générale de rendre la vie avec le diabète de type 1 aussi facile que possible.

#### 12) **Opportunité de contribuer vous-même à de nouvelles améliorations**
Le diabète de type 1 peut être très frustrant et isole les personnes. Avoir le contrôle de votre propre système technologique pour votr diabète, avec la possibilité de contribuer à votre tour dès que vous faites des progrès en aidant les autres dans leur cheminement peut être vraiment gratifiant. Vous pouvez vous former, mettre au jour des obstacles, faire des recherches et même contribuer à de nouveaux développements et à la documentation. Vous trouverez d'autres personnes dans la communauté avec qui partager la même envie de progresser, avec qui réfléchir et travailler. C'est l'essence même du mouvement #WeAreNotWaiting.

## Comment marche AAPS en comparaison aux Multiples Injections Quotidiennes (MDI) et à la boucle ouverte ?

Les injections quotidiennes multiples (MDI, (a) dans le **Schéma 2** ci-dessous) impliquent généralement de faire une injection d'insuline lente / à action longue (_par exemple_ Lantus, Tresiba) une fois par jour, avec des injections d'insuline à action rapide ou ultrarapide (_par exemple_ Novorapid ou Fiasp) à l'heure des repas, ou pour des corrections. L'utilisation classique d'une pompe à insuline (boucle ouverte) (b) implique l'utilisation d'une pompe pour délivrer le basal à des taux pré-programmés d'insuline à action rapide, puis à effectuer un bolus via la pompe lors des repas ou pour des corrections. Le principe de base d'un système de boucle est que l'application utilise les données de glycémie pour envoyer à la pompe l'instruction d'arrêter l'injection d'insuline lorsqu'elle prévoit que vous allez bientôt être en hypoglycémie, et pour vous donner plus d'insuline si votre glycémie augmente et que vous allez être en hyperglycémie (c). Bien que ce schéma soit simplifié par rapport à la réalité, il vise à démontrer les principales différences entre ces approches. Il est possible d'arriver à un contrôle extrêmement bon de la glycémie avec n'importe laquelle de trois approches.

![21-06-23 AAPS glucose MDI etc](./images/basic-overview-mdi-open-and-closed-loop.png)


**Figure 2**. Aperçu simplifié de (a) Injections multiples quotidiennes ou MDI, (b) boucle ouverte et (c) boucle fermée hybride.

## Comment marche AAPS en comparaison aux autres systèmes de boucle?

En date du 25 juin 2023, il y a actuellement quatre grands systèmes de boucle fermée open source disponibles : [OpenAPS](https://openaps.readthedocs.io/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) and [iAPS](https://github.com/Artificial-Pancreas/iAPS?fbclid=IwAR2fA9Y9YqYzpKSrtEsotfXl5b67UclDkKgyrv52tQLzYbOoBeNGRmjlJJI) (anciennement FreeAPS X). Les caractéristiques des différents systèmes sont affichées dans le tableau ci-dessous :

Les caractéristiques des différents systèmes sont affichées dans le tableau ci-dessous :



| Type d'appareil | Nom                                                                       | [AAPS](https://wiki.aaps.app)             | [Boucle](https://loopkit.github.io/loopdocs/) | [Open APS](https://openaps.readthedocs.io/en/latest/) | [iAPS](https://iaps.readthedocs.io/en/latest/) |
| --------------- | ------------------------------------------------------------------------- | ----------------------------------------- | --------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------- |
| Téléphone       | Android                                                                   | ![disponible](./images/available.png)     | ![indisponible](./images/unavailable.png)     | ![indisponible](./images/unavailable.png)             | ![indisponible](./images/unavailable.png)      |
| Téléphone       | iPhone                                                                    | ![indisponible](./images/unavailable.png) | ![disponible](./images/available.png)         | ![indisponible](./images/unavailable.png)             | ![disponible](./images/available.png)          |
| Nano-ordinateur | tout petit ordinateur (1)                                                 | ![indisponible](./images/unavailable.png) | ![indisponible](./images/unavailable.png)     | ![disponible](./images/available.png)                 | ![indisponible](./images/unavailable.png)      |
| POMPE           | [Dana I](../Configuration/DanaRS-Insulin-Pump.md)                         | ![disponible](./images/available.png)     | ![indisponible](./images/unavailable.png)     | ![indisponible](./images/unavailable.png)             | ![indisponible](./images/unavailable.png)      |
| POMPE           | [Dana RS](../Configuration/DanaRS-Insulin-Pump.md)                        | ![disponible](./images/available.png)     | ![indisponible](./images/unavailable.png)     | ![indisponible](./images/unavailable.png)             | ![indisponible](./images/unavailable.png)      |
| POMPE           | [DanaR](../Configuration/DanaR-Insulin-Pump.md)                           | ![disponible](./images/available.png)     | ![indisponible](./images/unavailable.png)     | ![indisponible](./images/unavailable.png)             | ![indisponible](./images/unavailable.png)      |
| POMPE           | [Omnipod (Dash)](../Configuration/OmnipodDASH.md) (2)                     | ![disponible](./images/available.png)     | ![disponible](./images/available.png)         | ![indisponible](./images/unavailable.png)             | ![disponible](./images/available.png)          |
| POMPE           | [Omnipod (Eros)](../Configuration/OmnipodEros.md)                         | ![disponible](./images/available.png)     | ![disponible](./images/available.png)         | ![indisponible](./images/unavailable.png)             | ![disponible](./images/available.png)          |
| POMPE           | [Diaconn G8](../Configuration/DiaconnG8.md)                               | ![disponible](./images/available.png)     | ![indisponible](./images/unavailable.png)     | ![indisponible](./images/unavailable.png)             | ![indisponible](./images/unavailable.png)      |
| POMPE           | [EOPatch 2](../Configuration/EOPatch2.md)                                 | ![disponible](./images/available.png)     | ![indisponible](./images/unavailable.png)     | ![indisponible](./images/unavailable.png)             | ![indisponible](./images/unavailable.png)      |
| POMPE           | [Medtrum TouchCare Nano](../Configuration/MedtrumNano.md)                 | ![disponible](./images/available.png)     | ![indisponible](./images/unavailable.png)     | ![indisponible](./images/unavailable.png)             | ![indisponible](./images/unavailable.png)      |
| POMPE           | [Medtrum TouchCare 300U](../Configuration/MedtrumNano.md)                 | ![disponible](./images/available.png)     | ![indisponible](./images/unavailable.png)     | ![indisponible](./images/unavailable.png)             | ![indisponible](./images/unavailable.png)      |
| POMPE           | [Roche Combo](../Configuration/Accu-Chek-Combo-Pump.md)                   | ![disponible](./images/available.png)     | ![indisponible](./images/unavailable.png)     | ![indisponible](./images/unavailable.png)             | ![indisponible](./images/unavailable.png)      |
| POMPE           | [Roche Insight](../Configuration/Accu-Chek-Insight-Pump.md)               | ![disponible](./images/available.png)     | ![indisponible](./images/unavailable.png)     | ![indisponible](./images/unavailable.png)             | ![indisponible](./images/unavailable.png)      |
| POMPE           | [Anciennes Medtronic](../Configuration/MedtronicPump.md)                  | ![disponible](./images/available.png)     | ![disponible](./images/available.png)         | ![disponible](./images/available.png)                 | ![disponible](./images/available.png)          |
| MGC             | [Dexcom G7](../Hardware/DexcomG7.md)                                      | ![disponible](./images/available.png)     | ![disponible](./images/available.png)         | ![indisponible](./images/unavailable.png)             | ![disponible](./images/available.png)          |
| MGC             | [Dexcom One](../Hardware/DexcomG6.md)                                     | ![disponible](./images/available.png)     | ![disponible](./images/available.png)         | ![indisponible](./images/unavailable.png)             | ![disponible](./images/available.png)          |
| MGC             | [Dexcom G6](../Hardware/DexcomG6.md)                                      | ![disponible](./images/available.png)     | ![disponible](./images/available.png)         | ![disponible](./images/available.png)                 | ![disponible](./images/available.png)          |
| MGC             | [Dexcom G5](../Hardware/DexcomG5.md)                                      | ![disponible](./images/available.png)     | ![disponible](./images/available.png)         | ![disponible](./images/available.png)                 | ![disponible](./images/available.png)          |
| MGC             | [Dexcom G4](../Hardware/DexcomG4.md)                                      | ![disponible](./images/available.png)     | ![disponible](./images/available.png)         | ![disponible](./images/available.png)                 | ![disponible](./images/available.png)          |
| MGC             | [Libre 3](../Hardware/Libre3.md)                                          | ![disponible](./images/available.png)     | ![indisponible](./images/unavailable.png)     | ![indisponible](./images/unavailable.png)             | ![indisponible](./images/unavailable.png)      |
| MGC             | [Libre 2](../Hardware/Libre2.md)                                          | ![disponible](./images/available.png)     | ![indisponible](./images/unavailable.png)     | ![indisponible](./images/unavailable.png)             | ![disponible](./images/available.png)          |
| MGC             | [Libre 1](../Hardware/Libre1.md)                                          | ![disponible](./images/available.png)     | ![indisponible](./images/unavailable.png)     | ![indisponible](./images/unavailable.png)             | ![disponible](./images/available.png)          |
| MGC             | [Eversense](../Hardware/Eversense.md)                                     | ![disponible](./images/available.png)     | ![indisponible](./images/unavailable.png)     | ![indisponible](./images/unavailable.png)             | ![disponible](./images/available.png)          |
| MGC             | [MM640g/MM630g](../Hardware/MM640g.md)                                    | ![disponible](./images/available.png)     | ![indisponible](./images/unavailable.png)     | ![indisponible](./images/unavailable.png)             | ![disponible](./images/available.png)          |
| MGC             | [PocTech](../Hardware/PocTech.md)                                         | ![disponible](./images/available.png)     | ![indisponible](./images/unavailable.png)     | ![indisponible](./images/unavailable.png)             | ![disponible](./images/available.png)          |
| MGC             | [Nightscout comme source de glycémie](../Hardware/CgmNightscoutUpload.md) | ![disponible](./images/available.png)     | ![disponible](./images/available.png)         | ![disponible](./images/available.png)                 | ![disponible](./images/available.png)          |

_Notes de tableau :_
1. Un **nano-ordinateur** est un petit ordinateur que vous transportez avec vous, sans moniteur. Un type d'appareil pris en charge est Intel Edison + Explorer Board et l'autre Raspberry Pi + Explorer HAT ou Adafruit RFM69HCW Bonnet. Les premiers APS étaient basés sur cette configuration, car les téléphones mobiles n'étaient pas capables d'exécuter les algorithmes nécessaires. L'utilisation de ces systèmes a régressé, car l'installation sur les téléphones mobiles est devenue plus facile et les téléphones ont un écran inclus. Intel a également arrêté de vendre l'Intel Edison. Les excellents algorithmes OpenAPS **oref0** et **oref1** sont maintenant inclus dans AAPS et iAPS.
2. Omnipod Dash est le successeur de Omnipod Eros. Il prend en charge la communication bluetooth et n'a pas besoin d'un accessoire intermédiaire pour communiquer avec le téléphone mobile. Si vous avez le choix, nous recommandons l'utilisation du Dash au lieu de l'Eros.


Une déclaration de consensus international, revue par les pairs, contenant des directives pratiques sur la boucle open-source a été rédigée par et pour les professionnels de la santé, et publiée dans une revue médicale respectée en 2022 : [_Lancet Diabetes Endocrinol_, 2022; 10: 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_). Ce document est fort utile (y compris pour votre équipe médicale) et résume les principales différences techniques entre les différents systèmes open-source de boucle fermée hybride.

Il est difficile d'avoir un "ressenti" quel que soit le système sans l'utiliser soi-même, ou sans en parler à d'autres qui l'utilisent, alors n'hésitez pas à contacter et à demander des retours d'expériences à des utilisateurs sur Facebook/Discord. La plupart des gens trouvent que **AAPS** est extrêmement sophistiqué par rapport aux autres systèmes de boucle fermée hybrides (particulièrement les systèmes commerciaux), avec un grand nombre de paramètres et de fonctionnalités potentiellement personnalisables, comme indiqué précédemment. Certaines personnes peuvent trouver cela un peu trop au début, mais il n'y a pas de précipitation à avoir pour étudier toutes les possibilités en même temps, vous pouvez progresser aussi lentement ou aussi vite que vous le souhaitez, et il y a de l'aide à chaque étape.


## AAPS utilise-t-il une intelligence artificielle ou un algorithme d’apprentissage ?

La version maître actuelle d'**AAPS** (3.1.0.3) n'utilise pas d'algorithmes d'apprentissage automatique, de modèles de réponse à l'insuline à plusieurs paramètres, ou d'intelligence artificielle. En tant que tel, le système est ouvert et transparent dans son fonctionnement, et a la capacité d'être compris non seulement par les experts, mais aussi par les médecins et les patients. En conséquence, si vous avez un changement notable dans votre emploi du temps (comme le passage d'une semaine de travail stressante à des vacances relaxantes) et que vous prévoyez avoir besoin d'une quantité d'insuline significativement différente, vous pouvez immédiatement demander à **AAPS** d'exécuter un profil plus faible/plus fort. Un « système d'apprentissage » fera cet ajustement pour vous automatiquement, mais il est probable qu'il lui faille plus de temps pour ajuster la distribution d'insuline.

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

Une baisse rapide de l'HbA1c et un meilleur contrôle de la glycémie paraissent attirants. Cependant, faire baisser les niveaux moyens de glucose sanguin _trop rapidement_ en démarrant un système de boucle fermée quel qu'il soit, peut causer des dommages permanents, y compris aux yeux, et une neuropathie douloureuse qui ne disparaîtra jamais. Ces atteintes peuvent être évitées simplement en baissant plus lentement les niveaux. Si vous avez actuellement un taux d'HbA1c élevé et que vous passez à AAPS (ou à tout autre système en boucle fermée), veuillez discuter de ce risque potentiel avec votre équipe médicale avant de commencer, et convenez d'un plan de mise en place avec elle. Davantage d'informations générales sur la façon de faire baisser en toute sécurité votre glycémie, y compris des liens vers la littérature médicale, sont données dans la page sur la sûreté [ici](preparing-safety-first).

#### Sûreté médicale autour des dispositifs, consommables et autres médicaments

Utilisez une pompe à insuline et un capteur de glycémie approuvés par la FDA ou la CE, testés et entièrement fonctionnels, pour une boucle de pancréas artificiel. Les modifications matérielles ou logicielles de ces composants peuvent entraîner un dosage incorrect de l'insuline, causant un risque significatif pour l'utilisateur. Si vous trouvez ou recevez des pompes à insuline ou des capteurs de glycémie cassés, modifiés ou fabriqués maison, ne les utilisez pas pour mettre en place un système AAPS.

Utilisez du matériel d'origine pour les applicateurs, cathéters et réservoirs d'insuline, approuvés par le fabricant de votre pompe et de votre MGC. L'utilisation de consommables non testés ou modifiés peut entraîner une imprécision du MGC et des erreurs de dosage de l'insuline. L'insuline peut s'avérer très dangereuse lorsqu'elle est mal dosée - ne jouez pas avec votre vie en bricolant votre matériel.

Ne prenez pas d'inhibiteurs de SGLT-2 (gliflozines) lorsque vous utilisez **AAPS** car il est impossible de calculer la manière dont ils font baisser la glycémie. Combiner cet effet avec un système qui abaisse les taux basaux afin d'augmenter la glycémie est dangereux, vous trouverez plus de détails à ce sujet dans la page principale à propos de la [sûreté](preparing-safety-first).

(introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team)=
## Comment puis-je aborder AAPS avec mon équipe médicale ?

Users are encouraged to speak with their clinicians about their intention to use **AAPS**. Please do not be afraid to have an honest conversation with your diabetes team if you intend to use **AAPS** (or any other DIY loop, for that matter). Transparency and trust between patient and doctor is paramount.

### Suggested approach:
Start a conversation with your clinician to determine their familiarity and attitude towards diabetic technology such as CGMs,  pumps, hybrid loops and commercial looping. Your clinician/endocrinologist should be aware of the basic technology and be willing to discuss with you recent advancements with commercial loop products available within their regions.

#### Local precedent

Obtain your clinicians/endocrinologists’ views on DIY loop _vs_ commercial looping, and gauge their knowledge in this area. Are they familiar with **AAPS** and can they share with you any helpful experience of working with patients with DIY looping?

Ask if your team has any patients under their care who already use DIY looping. Due to patient confidentiality, doctors cannot pass other patient’s details to you without obtaining the individual’s consent. However, if you want to, you **can** ask them to pass **your** contact details to an existing DIY looping patient if there is one the clinician feels you might "click” with, suggesting that you would be happy for the patient to contact you to discuss DIY looping. Clinicians are not obliged to do this, but some are happy to, since they realise the importance of peer-to-peer support in type 1 diabetes management. You may also find it useful to meet local friendly DIY loopers. This is of course up to you, and not entirely necessary.

#### National and International Precedent

If you feel unsupported by your team to loop with **AAPS**, the following discussion points may help:

a) The **AAPS** system has been designed BY patients and their caregivers. It has been designed ultimately for safety, but also drawing on in-depth patient experience. There are currently around **10,000** AAPS users worldwide. There is therefore likely to be other patients using DIY looping in your clinic's patient population (whether they know about it or not).

b) Recent peer-reviewed published guidance in the internationally leading medical journal [The Lancet](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/pdf/nihms-1765784.pdf)_(1)_ has confirmed that DIY loops are **safe** and **effective at improving diabetic control**, including time in range. There are regular articles in leading journals like [Nature](https://doi.org/10.1038/d41586-023-02648-9)_(3)_ which highlight the progress of the DIY looping commmunity.

c) Starting with **AAPS** involves a _gradual_ migration from “open” loop pumping, through low-glucose suspend, through to hybrid “closed” looping, by completing a number of objectives. There is therefore a structured programme, requiring the user to demonstrate a level of competence at each stage and fine-tuning their basic settings (basal, ISF and ICR) before they can close the loop.

d) Technical support is available to you from the DIY community through Github, Discord and Facebook closed groups.

e) You will be able to provide **both CGM and insulin looping/pumping information** as combined reports at clinic meetings (through Nightscout or Tidepool), either printed out or on-screen (if you bring a laptop/tablet). The streamlining of both CGM and insulin data will allow more effective use of your clinician’s time to review your reports and aid their discussions in assessing your progress.

f) If there is still strong objection from your team, hand your clinician printouts of the reference articles linked here in the text, and give them the link to the **AAPS** clinicians section: [For Clinicians – A General Introduction and Guide to **AAPS**](Resources/clinician-guide-to-AndroidAPS.md)

#### Support for DIY looping by other clinicians

The paper published in the [Lancet Diabetes Endocrinology](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_)[ (co led by Kings’ and Guy’s and St Thomas’ NHS Foundation Trust, and co lead by Dr Sufyan Hussain, a consultant diabetologist and honorary senior lecturer from King’s in London) provides:

a) **Assurance** for professionals that DIY artificial pancreas systems/ open source as a “safe and effective treatment” option for type 1 diabetes and provides guidance on recommendations, discussions, supports, documentation;

b) **Recognition** that open-source automated insulin delivery (“AID”) systems can increase time in range (TIR) while reducing variability in blood glucose concentrations and the amount of hypo and hyperglycaemic episodes in various age groups, genders and communities;

c) **Recommendation** that healthcare workers should **support** type 1 patients or their caregivers who choose to manage their diabetes with an open source AID system;

d) Recommendation that healthcare workers should attempt to learn about all treatment options that might benefit patients including available open-source AID systems.  If health care professionals do not have resources to educate themselves, or have legal or regulatory concerns, they should consider **cooperating, or teaming up with other healthcare professionals** who do;

e) Emphasis that all users of CGMs should have real-time and open-access to **their own health data** at all times

f) Emphasis that these open source systems have not undergone the same regulatory evaluations as commercially available medical technologies, and there is no commercial technical support. However, **extensive community support is available**; and

g) A recommendation that **regulation and legal frameworks** should be updated to ensure clarity on permitting ethical and effective treatment of such open source systems.

Another paper in [Medical Law International, 2021](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)(_4_) also highlights the UK General Medical Council’s ‘consent guidance’ places a strong emphasis on doctor and patients making decisions together. The doctor should explain the potential benefits, risks, burdens and side-effects on DIY APS and may recommend a particular option without pressuring the patient.

Ultimately it is up to the patient to weigh up these factors, along with any non-clinical issues relevant to them and decide which treatment option, if any, to accept.

If a doctor discovers in a clinic that their patient is looping with a DIY system, they are not exempted from their obligations to monitor the patient, simply because they did not prescribe the particular piece of technology the patient is using; clinicians must continue to monitor patients.

Doctors (at least in the UK) are not prohibited from prescribing unlicensed medicines and can use their clinical discretion. They should therefore use their clinical judgement to decide if a DIY APS is suitable for a specific patient, and discuss what they consider to be the pros and cons with the patient.

#### The articles referenced above, and other useful links and position statements are listed below:

1. Open-source automated insulin delivery: international consensus statement and practical guidance for health-care professionals [_Lancet Diabetes Endocrinol_, (2022) _10_, 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)
2. [In Silico Trials of an Open-Source Android-Based Artificial Pancreas: A New Paradigm to Test Safety and Efficacy of Do-It-Yourself Systems, 2020](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375)
3. A DIY ‘bionic pancreas’ is changing diabetes care — what's next? [_Nature_ (2023), _620_, 940-941](https://doi.org/10.1038/d41586-023-02648-9)
4. Prescribing unapproved medical devices? The case of DIY artificial pancreas systems [_Medical law international_, (2021), _21_, 42-68](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)
5. [Berlin Institute of Health position statement, 2022](https://www.bihealth.org/en/notices/do-it-yourself-solutions-for-people-with-diabetes-are-safe-and-recommended)
6. Do-It-Yourself Automated Insulin Delivery: A Health-care Practitioner User’s Guide (Diabetes Canada position and guide) [_Canadian Journal of Diabetes_, (2023)_47_, E8, 389-397](https://www.canadianjournalofdiabetes.com/article/S1499-2671(23)00138-7/fulltext)
7.  Netherlands (EN/NL) - for clinicians - [how to help people on open source automated insulin delivery systems](https://www.diabetotech.com/blog/how-to-help-people-on-open-source-automated-insulin-delivery-systems)
8. First Use of Open-Source Automated Insulin Delivery AndroidAPS in Full Closed-Loop Scenario: Pancreas4ALLRandomized Pilot Study [_Diabetes Technol. Ther._, 25, _5_, 2023](https://www.liebertpub.com/doi/pdf/10.1089/dia.2022.0562?casa_token=D13eFx5vCwwAAAAA:MYvO8hChbViXVJFgov1T11RXBPx2N_wOMThLHwl3TVUxbCuANegPrIFRC5R5VXx_S71FoQYW-qg)
9. Pre-school and school-aged children benefit from the switch from a sensor-augmented pump to an AndroidAPS hybrid closed loop: A retrospective analysis [_Pediatr. Diabetes_ 2021, _22_, 594-604. 2021](https://onlinelibrary.wiley.com/doi/epdf/10.1111/pedi.13190)
10. Outcomes of the OPEN project, an EU-funded project into the Outcomes of Patient’s Evidence with Novel, Do-it-Yourself Artificial Pancreas Technology (https://www.open-diabetes.eu/publications)



## Why can’t I just download AAPS and use it straight away?

The **AAPS** app is not provided in Google Play - you have to build it from source code by yourself for legal reasons. **AAPS** is unlicensed, meaning that it does not have approval by any regulatory body authority in any country. **AAPS** is deemed to be carrying out a medical experiment on yourself, and is carried out at the user’s own risk.

Setting up the system requires patience, determination and the gradual development of technical knowledge. All the information and support can be found in these documents, elsewhere online, or from others who have already done it. Over 10,000 people have successfully built and are currently using **AAPS** worldwide.

The developers of **AAPS** take safety incredibly seriously, and want others to have a good experience of using **AAPS**. That is why it is essential that every user (or carer, if the user is a child):

- builds the AAPS system themself and works through the **objectives** so that they have reasonably good personalised settings and understand the basics of how **AAPS** works by the time they “close the loop”;

- backs up their system by exporting and saving important files (like keystore and settings .json file) somewhere safe, so you can setup again quickly if needed;

- updates to newer master versions as and when they become available; and

- gèrent et surveillent le système pour s’assurer qu’il fonctionne correctement.

## Comment le système AAPS est-il interconnecté ?

**La figure 3 (ci-dessous)** montre un exemple du système **AAPS** pour un utilisateur qui n'a pas besoin que des suiveurs puissent interagir avec le système. D'autres applications et plates-formes open-source, non illustrés ici, peuvent également être intégrés.

![21-06-23 AAPS connectivity no followers](./images/AAPS-connectivity-no-followers.png)


**La figure 4 (ci-dessous)** montre tout le potentiel du système **AAPS** pour un utilisateur qui a besoin d'un suivi et un contrôle à distance par un tiers pour ajuster le système (ex. un enfant avec un DT1). D'autres applications et plates-formes open-source, non illustrés ici, peuvent également être intégrés.

![21-06-23 AAPS overview with followers](./images/AAPS-overview-with-followers.png)

## Comment AAPS est-il développé et continuellement amélioré ?

Most **AAPS** users use the fully tested **master** version of AAPS, which has been tested for bugs and problems, before being released to the community. Behind the scenes, the developers try out new improvements, and test these out in “developer” (**dev**) versions of **AAPS** with a user community who are happy to do bug updates at short notice. If the improvements work well, they are then released as a new “master” version of **AAPS**. Any new master release is announced on the Facebook group, so that the mainstream **AAPS** users can read about and update to the new master version.

Some experienced and confident **AAPS** users conduct experiments with emerging technologies and with dev versions of the **AAPS** app, which can be interesting for the less adventurous users to read about, without having to do it themselves! People tend to share these experiments on the Facebook group too.

You can read more about some of these experiments and discussion on emerging tech here:

Tim Street [https://www.diabettech.com/](https://www.diabettech.com/)

David Burren [https://bionicwookie.com/](https://bionicwookie.com/)

## A qui AAPS peut-il être utile ?

| Type d'utilisateur                          |
| ------------------------------------------- |
| ✔️ type 1 diabetic                          |
| ✔️ caregiver or parent of a type 1 diabetic |
| ✔️ blind users type 1 diabetic              |
| ✔️ *clincians and healthcare professionals  |

The above table assumes that the user has access to both continuous gluocse monitor and insulin pump.

*All data from **AAPS** can be made available to healthcare professionals via data sharing platforms, including Nightscout that provides logging and real time monitoring of CGM data, insulin delivery, carbohydrate entries, predictions and settings. Nightscout records include daily and weekly reports which can aid healthcare professionals' discussions with type 1 patients with more accurate data on glycemic control and any behavioural considerations.

### Accessibility for users AAPS who are partially or completely blind

#### Day to day AAPS use:
AAPS can be used by blind people. On Android devices, the operating system has a program called TalkBack. This allows screen orientation via voice output as part of the operating system. By using TalkBack you can operate both your smartphone and AAPS without needing to be able to see.

#### Building the AAPS app:
As a user you will build the AAPS app in Android Studio. Many people use Microsoft Windows for this purpose, where there is the Screenreader analogous to TalkBack. Since Android Studio is a Java application, the “Java Access Bridge” component must be enabled in the Control Panel. Otherwise, the screen reader of the PC will not speak in Android Studio.

How you do this depends on your operating system, two methods are outlined below:

1) In the Windows Start menu, enter “Control Panel” in the search field, open with Enter. It opens: “All Control Panel Items”.

Open the "Ease of Access Centre".

Then open “Use computer without a display” with Enter.

Under hear text read aloud select "turn on narrator" and "turn on audio display", and click "apply"

or:

2) Press Windows key and enter “Control Panel” in the search field, open with Enter. It opens: “All Control Panel Items”.

Press the letter C to get to “Center for Ease of Use”, open with Enter.

Then open “Use computer without a screen” with Enter.

There, at the bottom, you will find the checkbox “Enable Java Access Bridge”, select it.

Done, just close the window! The screen reader should work now.



## What benefits can I get from AAPS?

With investment of your time, **AAPS** can potentially lead to:

- alleviating the stress and burden of managing type 1 diabetes;

- reducing the multitude of mundane decisions that arise from type 1 diabetes;

- the provision of personalised and dynamic insulin dosing based on real-time data which can cut down the need for hypo treatments and reduce hyperglycemia episodes;

- an increased knowledge of insulin management and confidence to better fine tune your settings;

- the ability to create automatic settings (**automations**) that are tailored to fit in with your lifestyle;

- improved sleep quality and overall reduction in the frequency of nighttime interventions;

- remote monitoring and administration of insulin delivery for caregivers of type 1 diabetics; and

- streamlining of all your portable diabetic equipment (continuous glucose monitor receiver and insulin controlling devices) by using an Android phone controlled by **AAPS**.

Ultimately, **AAPS** can empower individuals to better manage their diabetes, resulting in stable blood sugars and improved long term health outcomes.

Interested in how to get started with setting up AAPS? Take a look at the [preparing](preparing.md) section.
