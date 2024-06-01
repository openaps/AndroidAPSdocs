# Se préparer à démarrer avec AAPS

Bienvenue ! Cette documentation a pour objectif de guider les utilisateurs qui s'apprêtent à installer et à commencer à utiliser le Système de Pancréas Artificiel Android (**AAPS**).

## Trouver votre chemin dans la documentation

Un **index** et une explication de la structure de la documentation peuvent être trouvés [ici](index.md), vous pouvez également y accéder en cliquant sur le logo **AAPS** en haut à gauche de la documentation. Vous y trouverez une vue d'ensemble des fonctionnalités décrites dans chaque chapitre de la documentation. Vous pouvez également utiliser le menu à gauche de cette page pour naviguer dans la documentation. Enfin, il y a une fonction de recherche bien pratique, directement en dessous du logo **AAPS**.

Notre objectif est de rendre facile à comprendre à la fois les capacités et les limitations de **AAPS**. Il peut être décevant de découvrir après avoir passé du temps à lire la documentation, que votre pompe à insuline ou votre MCG ne sont pas compatibles, ou que **AAPS** offre des fonctionnalités différentes de celles que vous attendiez.

De nombreux détails dans la documentation sur l'utilisation de **AAPS** prennent tout leur sens lorsque vous utilisez réellement **AAPS** en temps réel. Tout comme il est difficile d'apprendre un sport uniquement en lisant les règles, vous aurez besoin à la fois d'apprendre les règles fondamentales pour utiliser **AAPS** en toute sécurité, et de passer du temps à apprendre comment appliquer au mieux ces règles pendant que vous vous lancez dans l'utilisation d'**AAPS**.

(preparing-safety-first)=

## La sécurité avant tout
“Un grand pouvoir implique de grandes responsabilités... ”

### Sûreté technique
**AAPS** dispose d'un large éventail de fonctionnalités liées à la sûreté. Elles imposent des limitations qui sont progressivement retirées au fur et à mesure que vous complétez une série d'[Objectifs](Usage/Objectives.md) qui vous demandent d'utiliser des paramètres spécifiques et de répondre à des questions à choix multiple. **AAPS** débloque des fonctionnalités lorsque vous terminez un objectif avec succès. Ce processus permet à l'utilisateur d'évoluer en toute sécurité par étapes successives, de la Boucle Ouverte à la Boucle Fermée, tout en apprenant les différentes fonctionnalités de **AAPS**.

Les [Objectifs](Usage/Objectives.md) ont été conçus pour vous amener à une découverte la plus complète possible d'**AAPS**, et tiennent compte des erreurs communes et des tendances générales que les développeurs d'**AAPS** ont observées chez les nouveaux utilisateurs. Des erreurs peuvent arriver quand un débutant est inexpérimenté et trop impatient de commencer avec **AAPS** ou a négligé des éléments importants. Les [Objectifs](Usage/Objectives.md) ont été pensé pour minimiser ces problèmes.

### Sûreté médicale
:::{admonition} Évitez les dommages définitifs et douloureux à vos yeux et nerfs
:class: danger Soyez très prudent concernant une amélioration du contrôle de la glycémie et une baisse de l'HbA1c rapides
:::

Il est très important de prendre en considération qu'une **baisse rapide de l'HbA1c et un meilleur contrôle de la glycémie chez ceux qui ont eu des taux de glucose élevés pendant un certain temps peuvent causer des dommages permanents**. De nombreuses personnes atteintes de diabète n'ont pas connaissance de ça, et tous les professionnels de santé ne parlent pas de ce problème à leurs patients.

Parmi ces atteintes, on trouve la **perte de vue et neuropathie permanente (douleur)**. Il est possible d'éviter que ces atteintes ne se produisent en faisant baisser plus lentement les niveaux de glycémie moyens. Si vous avez actuellement un taux élevé d'HbA1c et que vous passez à **AAPS**(ou n'importe quel autre système en boucle fermée), _veuillez discuter_ de ce risque potentiel avec votre équipe médicale avant de commencer, et convenez d'un plan de mise en place avec elle. Vous pouvez simplement commencer avec une cible de glycémie élevée dans **AAPS** (actuellement, la cible la plus élevée que vous pouvez sélectionner est de 200md/dL (ou 10,6 mmol/L), mais vous pouvez également utiliser un profil délibérément faible si nécessaire), puis réduire la cible au fur et à mesure des mois qui passent.

#### À quelle vitesse puis-je réduire mon HbA1c sans risquer des dommages permanents ?

Une [étude](https://pubmed.ncbi.nlm.nih.gov/1464975/) rétrospective sur 76 patients a rapporté que le risque de progression de la rétinopathie était plus élevé de respectivement 1,6 fois, 2,4 fois et 3,8 fois lorsque le taux d'Hba1C diminuait de 1 %, 2 % ou 3 % sur une période de 6 mois. Ils ont suggéré que la **"diminution de la valeur de l'HbA1c au cours de toute période de 6 mois devrait être limitée à moins de 2% afin de prévenir la progression de la rétinopathie... Une diminution trop rapide au début du contrôle glycémique pourrait provoquer une exacerbation sévère ou transitoire de la progression de la rétinopathie."**

N.B. Si vous utilisez une unité différente pour l'HbA1c (mmol/mol au lieu de %), cliquez [ici](https://www.diabetes.co.uk/hba1c-units-converter.html) pour un outil de calculateur d'HbA1c.

Dans une autre [évaluation](https://academic.oup.com/brain/article/138/1/43/337923) rétrospective de 954 patients, les chercheurs ont noté que :

**"Avec une diminution de l'HbA1c de 2 à 3 points sur 3 mois, il y avait un risque absolu de 20% de développer une neuropathie induite par le traitement du diabète ; avec une diminution de l'HbA1c > à 4 points sur 3 mois, le risque absolu de développer une neuropathie induite par le traitement du diabète dépassait 80%."**

Un [commentaire](https://academic.oup.com/brain/article/138/1/2/340563) sur ce travail est à arrivé à la conclusion qu'afin d'éviter des complications, **l'objectif devrait être de réduire l'Hba1C de <2% sur 3 mois.** Vous pouvez lire d'autres articles sur le sujet [ici](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6587545/pdf/DOM-21-454.pdf) et [ici](https://www.mdpi.com/1999-4923/15/7/1791).

Il est généralement reconnu que les diabétiques de type 1 _nouvellement_ diagnostiqués (qui ont souvent un taux très élevé d'HbA1c au moment du diagnostic, avant de commencer la thérapie par insuline) semblent être en mesure de réduire rapidement leur taux d'HbA1c immédiatement après le diagnostic sans faire autant face à ces risques, car leur taux de glycémie n'a pas été élevé pendant une longue période. Cependant, cela reste important d'en discuter avec votre équipe médicale.

### Aucun inhibiteur SGLT-2

:::{admonition} AUCUN inhibiteur SGLT-2
:class: danger Les inhibiteurs SGLT-2, aussi appelés gliflozines, empêchent la réabsorption du glucose par les reins. Comme il est impossible de calculer la façon dont ils font baisser la glycémie, vous NE DEVEZ PAS les prendre en utilisant un système de boucle fermée comme AAPS ! Vous vous mettriez en grave danger d'acidocétose et/ou d'hypoglycémie ! L'utilisation combinée de ce médicament et d'un système qui diminue les taux de basale pour augmenter la glycémie est particulièrement dangereuse.

En bref :
- **Exemple 1 : risque d'hypo**
> Pendant le déjeuner, vous utilisez **AAPS** pour administrer un bolus sur la base de 45g de glucides. Le problème est que, sans qu'AAPS n'en sache rien, les inhibiteurs provoquent l'élimination d'une partie de ces glucides, ce qui fait que votre corps a trop d'insuline par rapport aux glucides absorbés, ce qui se traduira par une hypoglycémie.

- **Exemple 2 : risque d'acidocétose**
> Les inhibiteurs éliminent discrètement certains glucides et font baisser votre glycémie. **AAPS** va automatiquement indiquer à la pompe de réduire l'apport en insuline, y compris la basale. Le temps passant, cela peut avoir pour conséquence que votre glycémie reste inférieure à la cible au point que le corps n'a plus suffisamment d'insuline disponible pour absorber les glucides, ce qui provoquera une acidocétose. En règle générale, l'acidocétose se développe chez les patients DT1 à cause d'un problème de pompe, qui aurait déclenché des alertes sur le téléphone et aurait été remarquée en raison d'une glycémie élevée. Cependant, le danger avec les Gliflozines est qu'il n'y aurait pas d'alerte AAPS car la pompe est bien opérationnelle et la glycémie reste potentiellement dans la cible.

Parmi les noms de médicaments inhibiteurs de SGLT-2 courants, on trouve : Invokana, Farxiga, Jardiance, Glyxambi, Synjardy, Steglatro et Xigduo XR, entre autres.
:::


### Principes clés de la boucle avec AAPS

Vous devez bien comprendre les principes et concepts clés de la boucle avant d'utiliser **AAPS**. Vous y parviendrez en investissant votre temps personnel dans la lecture de la documentation **AAPS** et en complétant les Objectifs, qui ont pour but de vous assurer un système solide pour une utilisation sûre et efficace de **AAPS**. Le volume de la documentation **AAPS** peut sembler impressionnant dans un premier temps, mais soyez patient et faite confiance au processus - avec la bonne approche, vous y arriverez !

La vitesse de progression dépendra de chacun, mais sachez qu'il faut généralement 6 à 9 semaines pour compléter tous les objectifs. De nombreuses personnes commencent à compiler, installer et configurer **AAPS** bien avant de commencer à l'utiliser. Pour rendre cela possible, le système propose une "pompe virtuelle" qui peut être utilisée pendant que vous travaillez sur les premiers objectifs, afin que vous puissiez vous familiariser avec **AAPS** sans réellement l'utiliser pour administrer de l'insuline. Une idée plus précise de la chronologie est donnée ci-dessous. Soyez conscient qu'à partir de l'objectif 8 d'**AAPS**, vous êtes en boucle fermée. Les objectifs suivants ajoutent des fonctionnalités supplémentaires comme les commandes **SMS** et les **automatisations**, qui sont utiles pour certains utilisateurs, mais pas essentielles à la fonction de base de **AAPS**.

Pour réussir avec **AAPS**, il faut une approche proactive, la volonté d'analyser données de glycémie et de la flexibilité pour procéder aux ajustements nécessaires à **AAPS** afin d’améliorer vos résultats. Il est presque impossible d’apprendre à pratiquer un sport uniquement en lisant les règles, on peut en dire autant d'**AAPS**.

#### Attendez-vous à ce que ça prenne plus de temps que prévu et à faire face à des problèmes mineurs le temps de tout mettre en place et tout faire fonctionner

Dans les premiers temps du démarrage avec **AAPS**, vous pouvez rencontrer des difficultés à faire communiquer avec succès tous les composants de la boucle les uns avec les autres (et les suiveurs éventuels), ou lorsque vous ajustez vos paramètres. Certains soucis ne peuvent pas être résolus tant qu'**AAPS** n'est pas utilisé dans la vie quotidienne, mais toute l'aide dont vous aurez besoin est disponible sur le groupe Facebook et sur Discord. Veillez à vous organiser et à choisir un moment approprié, comme une matinée calme en week-end (par ex. pas tard la nuit ou quand vous êtes fatigué, ou avant une réunion importante ou un voyage) pour travailler à la résolution des problèmes que vous pouvez rencontrer.

#### Compatibilité des technologies

**AAPS** n'est compatible qu'avec certains types de pompes à insuline, lecteurs de glycémie et téléphones, et certaines technologies peuvent ne pas être disponibles en fonction des pays. Pour éviter toute déception ou frustration, veuillez lire les pages [MGC](Configuration/BG-Source.md), [pompe](Getting-Started/Pump-Choices.md) et [téléphone](Hardware/Phoneconfig.md).

#### Temps pour compiler l'application et progression la boucle fermée

Le temps nécessaire à la compilation d'**AAPS** dépend de votre niveau de connaissance et de vos compétences techniques. Généralement pour les utilisateurs inexpérimentés, le temps nécessaire pour compiler **AAPS** peut aller jusqu'à une demi-journée ou une journée complète (avec l'aide de la communauté). Le processus sera considérablement plus rapide pour les prochaines versions **AAPS**, à mesure que vous acquérez de l'expérience.

Pour vous aider dans le processus de compilation, il y a des pages dédiées dans la documentation :

- Liste de questions-réponses pour les erreurs fréquentes : voir la [>FAQ (Section K)](Getting-Started/FAQ.md);

- [Comment installer AAPS](Installing-AndroidAPS/Building-APK.md)? (Chapitre D) ainsi que le sous-chapitre [Dépannage](Usage/troubleshooting.md).

Le temps nécessaire pour arriver à la boucle fermée dépendra de chacun, mais vous pouvez vous faire une idée [ici](how-long-will-it-take)


#### Fichier de clés & exportation des paramètres de configuration

Le fichier « keystore » ou « magasin de clés » (fichier .jks) est un fichier chiffré par mot de passe unique utilisé pour la création de votre version personnelle de **AAPS**. Votre téléphone Android l'utilise pour s'assurer que personne d'autre ne peut mettre à jour votre version personnelle sans le magasin de clés. En bref, dans le cadre de la compilation d'**AAPS** vous devriez :

1.  Enregistrer le fichier de votre magasin de clés (fichier .jks utilisé pour signer votre application) dans un endroit sûr;

2.  Vous assurer de conserver le mot de passe de votre fichier de clés.

De cette façon, vous pourrez utiliser ce même fichier de clés à chaque fois qu'une nouvelle version de **AAPS** sera créée. En moyenne, vous aurez à faire 2 mises à jour d'**AAPS** chaque année.

Par ailleurs, **AAPS** vous donne la possibilité d'[exporter tous vos paramètres de configuration](Usage/ExportImportSettings.md). Cela vous permet de récupérer votre système en toute sécurité tout en changeant de téléphone, de mettre à jour/réinstaller l'application avec un minimum d'interruption. 

#### Résolution de problèmes

N''hésitez pas à contacter la communauté AAPS s'il y a des points sur lesquels vous avez des hésitations - il n'y a pas de question bête ! Tous les utilisateurs, quel que soit leur niveau d'expérience, sont encouragés à poser leurs questions. Les temps de réponse aux questions sont généralement courts, grâce au grand nombre d'utilisateurs d'**AAPS**.

##### [demandez de l'aide sur le groupe AAPS Facebook](https://www.facebook.com/groups/AndroidAPSUsers/)

##### [demandez de l'aide sur le serveur Discord pour AAPS](https://discord.com/channels/629952586895851530/629954570394533889)





#### [Où aller pour obtenir de l'aide](Where-To-Go-For-Help/Background-reading.md)?

Cette section a pour but de fournir aux nouveaux utilisateurs des liens vers des ressources afin d'obtenir de l'aide, y compris l'accès au soutien de la communauté composé à la fois d'utilisateurs nouveaux et expérimentés qui peuvent clarifier les questions, et résoudre les pièges habituels qui peuvent subvenir avec AAPS.

#### [Pour les professionnels de santé](Resources/clinician-guide-to-AndroidAPS.md)

Il s'agit d'une [page adressée aux professionnels de santé](Resources/clinician-guide-to-AndroidAPS.md) qui veulent en savoir plus sur AAPS et la technologie de pancréas artificiel open source. Vous trouverez aussi des conseils sur [comment parler à votre équipe médicale](introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team) dans l'Introduction.

## Que va-t-on compiler et installer?

Ce schéma offre un aperçu des composants clés (matériel et logiciel) du système **AAPS** :

![préparation_vue_d_ensemble](./images/preparing_images/AAPS_preparing_overview_01.png)


En plus des trois composants matériels de base (téléphone, pompe, capteur de glycémie), nous avons également besoin de : 1) L'application **AAPS** 2) Un serveur de reporting et 3) Une application pour suivre la mesure en continu du glucose (MCG)

### 1) L'application Android pour téléphone : **AAPS**

**AAPS** is an app that runs on android smartphones & devices. You are going to build the **AAPS** app (an apk file) yourself, using a step-by-step guide, by downloading the **AAPS** source code from Github, installing the necessary programs (Android Studio, GitHub desktop) on your computer and building your own copy of **AAPS** app. You will then transfer the **AAPS** app across to your smartphone (by email, USB cable _etc._) and install it.

### 2) Un serveur de reporting : NightScout (Tidepool*)

In order to fully take advantage of **AAPS**, you need to setup a Nightscout server. You can do this yourself (link to instructions) or alternatively, pay a small fee for a managed Nightscout service to be set up for you (link to T1 pal 10.be etc). Nightscout is used to collect data from **AAPS** over time and can generate detailed reports correlating CGM and insulin patterns. It is also possible for caregivers to use Nightscout to remotely communicate with the **AAPS** application, to oversee their child’s diabetic management. Such remote communication features include real-time monitoring of glucose and insulin levels, remote bolusing of insulin (by texting) and meal announcements. Attempting to analyse your diabetes performance by looking at CGM data separately from the pump data is like driving a car where the driver is blind and the passenger describes the scene.  Tidepool is also available as an alternative to Nightscout, for AAPS versions 3.2 and later.

### 3) Application pour le capteur MCG

Depending on your glucose sensor/CGM, you will need a compatible app for receiving glucose readings and sending them to **AAPS**. The different options are shown below and more information is given in the [compatible CGMs section](./Configuration/BG-Source.md):

![options_dexcom](./images/preparing_images/AAPS_connectivity_Dex_02.png) ![options_libres](./images/preparing_images/AAPSconnectivity_libre.png) ![options_eversense](./images/preparing_images/AAPS_connectivity_eversense.png)

### Maintenance du système **AAPS**

Both **Nightscout** and **AAPS** must be updated approximately once a year, as improved versions are released. In some cases, the update can be delayed, in others it is strongly recommended or considered essential for safety. Notification of these updates will be given on the Facebook groups and Discord servers. The release notes will make it clear what the scenario is. There are likely to be many people asking similar questions to you at update time, and you will have support for performing the updates.

(preparing-how-long-will-it-take?)=
## Combien de temps pour tout mettre en place ?

As mentioned earlier, using **AAPS** is more of a “journey” that requires investment of your personal time. It is not a one-time setup. Current estimates for building **AAPS**, installing and configuring **AAPS** and **CGM** software and getting from open loop to hybrid closed looping with **AAPS** are about 2 to 3 months overall. It is therefore suggested that you prioritise building the **AAPS** app and working through the early objectives as soon as possible, even if you are still using a different insulin delivery system (you can use a virtual pump up to objective 5). Here is an approximate timeframe:

| Tâches                                                                                                              |  Temps estimé   |
| ------------------------------------------------------------------------------------------------------------------- |:---------------:|
| initial reading of the documentation:                                                                               |    1-2 days     |
| installing/configuring PC to allow the build:                                                                       |    2-8 hours    |
| building a Nightscout server:                                                                                       |     1 hour      |
| installing CGM app (xdrip or BYODA or …)                                                                            |     1 hour      |
| configuring CGM->xdrip->APPS initially:                                                                             |     1 hour      |
| configuring AAPS->pump initially:                                                                                   |     1 hour      |
| configuring AAPS->NightScout (reporting only):                                                                      |     1 hour      |
| optional (for Parents) - configuring NightScout <-> **AAPS** & NSFollowers:                                         |     1 hour      |
| Objectif 1 : Paramétrage de la visualisation et la surveillance des données, analyse des débits Basal et des ratios |     1 hour      |
| Objective 2: Learn how to control AAPS                                                                              |     2 hour      |
| Objectif 3 : Prouver ses connaissances                                                                              |  Up to 14 days  |
| Objectif 4 : Démarrage de la boucle ouverte                                                                         |     7 days      |
| Objectif 5 : Compréhension de la Boucle Ouverte, y compris les propositions de débits Basal temporaires             |     7 days      |
| Objectif 6 : Démarrage de la boucle fermée avec le système AGB ( Arrêt pour Glycémie Basse )                        | Up to 5-14 days |
| Objective 7: Tuning the closed loop, raising maxIOB and gradually lowering BG targets                               |  Up to 7 days   |
| Objectif 8 : Ajustement des débits Basal et des ratios si nécessaire, puis activation de la fonction auto-sens      | Up to 7-14 days |
| Objective 9: Enabling additional oref1 features, such as super micro bolus (SMB)                                    |  Up to 14 days  |
| Objectif 10: Automatisation                                                                                         |      1 day      |


Once you are fully operational on **AAPS**, you will need to fine tune your setting parameters in order to improve your overall diabetic management.

## Requirements

### Considérations médicales

In addition to the medical warnings in the [safety section](preparing-safety-frist) there are also different parameters, depending on which insulin you are using in the pump.

#### Choix de l'insuline

**AAPS** calculations are based on insulin concentrations of 100U/ml (same as pump’s standard). The following types of insulin profile presets are supported:

- Rapid-Acting Oref: Humalog/NovoRapid/NovoLog
- Ultra-Rapid ORef:  Fiasp
- Lyumjev:

For Experimental/Advanced users only:
- Free-Peak Oref: Allows you to define peak of the insulin activity


### Pré-requis techniques

This documentation aims to reduce the technical expertise required to an absolute minimum. You will need to use your computer to build the **AAPS** application in Android Studio (step-by-step instructions). You also need to set up a server over the internet in a public cloud, configure several android phone apps and develop expertise in diabetes management. This can be  achieved by moving step-by-step, being patient, and help from the **AAPS** community. If you are already able to navigate the internet, manage your own Gmail emails, and keep your computer up-to-date, then it is a feasible task to build the **AAPS**. Just take your time.

### Smartphones

#### AAPS et versions Android
The current version of **AAPS** (3.1.0.3) requires an Android smartphone with Google Android 9.0 or above. If you are considering buying a new phone, (as of July 2023), Android 13 is preferred. Users are strongly encouraged to keep their build of **AAPS** up to date for safety reasons, however for users unable to use a device with Android 9.0 or newer, earlier versions of  **AAPS** compatible for older Android versions remain available from our [old repository](https://github.com/miloskozak/AAPS) (check the release notes for legacy versions).

#### Choix du modèle de smartphone
The exact model you buy depends on the desired function(s). There are two archived spreadsheets of compatible [smartphones](https://docs.google.com/spreadsheets/d/1zO-Vf3wv0jji5Gflk6pe48oi348ApF5RvMcI6NG5TnY/edit#gid=2097219952) and [smartphones and watches](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435). The spreadsheets are no longer updated because there are so many possible models, therefore we now suggest searching the support groups (Facebook or Discord) for "phone", or the specific model you are thinking of getting. Create a new post to ask questions about it if you still need more information.

To make a donation of smartphone or smartwatch models that still need testing, please email [donations@androidaps.org](mailto:donations@androidaps.org).

- [Liste des téléphones testés](../Getting-Started/Phones.md)
- [Paramètres Jelly Pro](../Usage/jelly.md)
- [Paramètres Huawei](../Usage/huawei.md)

Users are encouraged to keep their phone Android version up-to-date, including with security parameters. However, if you are new with **AAPS** or are not a technical expert you might want to delay updating your phone until others have done so and confirmed it is safe to do so, on our various forums.

:::{admonition} delaying Samsung phones updates
:class: warning Samsung has an unfortunate track record of forcing updates of their phones which cause bluetooth connectivity issues. To disable these forced updates you need to switch the phone to "developper mode" by: go to settings and about then software information, then tap build number u til it confirms you have unlocked developer mode. Got back to main settings menu and you should see a new developer options menu item. Open developer options and scroll to find auto system update and turn it off
:::

:::{admonition} Google Play Protect potential Issue
:class: warning There have been several reports of **AAPS** being shut down arbitrarily by Google Play Protect every morning. If this happens you will have to go to the google play options and disable “Google Play Protect”. Not all  phone models or all Android versions are affected..
:::

