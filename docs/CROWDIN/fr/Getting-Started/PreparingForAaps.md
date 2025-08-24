# Se préparer à démarrer avec AAPS

Bienvenue ! Cette documentation a pour objectif de guider les utilisateurs qui s'apprêtent à installer et à commencer à utiliser le Système de Pancréas Artificiel Android (**AAPS**).

## Trouver votre chemin dans la documentation

An **index** and explanation of the documentation structure can be found [here](../index.md), you can also reach it by clicking on the **AAPS** symbol at the top left of the documentation. Vous y trouverez une vue d'ensemble des fonctionnalités décrites dans chaque chapitre de la documentation. Vous pouvez également utiliser le menu à gauche de cette page pour naviguer dans la documentation. Enfin, il y a une fonction de recherche bien pratique, directement en dessous du logo **AAPS**.

Notre objectif est de rendre facile à comprendre à la fois les capacités et les limitations de **AAPS**. Il peut être décevant de découvrir après avoir passé du temps à lire la documentation, que votre pompe à insuline ou votre MGC ne sont pas compatibles, ou que **AAPS** offre des fonctionnalités différentes de celles que vous attendiez.

De nombreux détails dans la documentation sur l'utilisation de **AAPS** prennent tout leur sens lorsque vous utilisez réellement **AAPS** en temps réel. Tout comme il est difficile d'apprendre un sport uniquement en lisant les règles, vous aurez besoin à la fois d'apprendre les règles fondamentales pour utiliser **AAPS** en toute sécurité, et de passer du temps à apprendre comment appliquer au mieux ces règles pendant que vous vous lancez dans l'utilisation d'**AAPS**.

(preparing-safety-first)=

## La sécurité avant tout
“Un grand pouvoir implique de grandes responsabilités... ”

### Sûreté technique
**AAPS** dispose d'un large éventail de fonctionnalités liées à la sûreté. These impose constraints which are gradually removed through staged completion of a series of [Objectives](../SettingUpAaps/CompletingTheObjectives.md) which involve testing specific parameters and answering multiple choice questions. **AAPS** débloque des fonctionnalités lorsque vous terminez un objectif avec succès. Ce processus permet à l'utilisateur d'évoluer en toute sécurité par étapes successives, de la Boucle Ouverte à la Boucle Fermée, tout en apprenant les différentes fonctionnalités de **AAPS**.

The [Objectives](../SettingUpAaps/CompletingTheObjectives.md) have been designed to achieve the best possible introduction to **AAPS**, taking into consideration the typical errors and general trends **AAPS** developers have observed with new users. Des erreurs peuvent arriver quand un débutant est inexpérimenté et trop impatient de commencer avec **AAPS** ou a négligé des éléments importants. The [Objectives](../SettingUpAaps/CompletingTheObjectives.md) aim to minimise these issues.

### Sûreté médicale
```{admonition} Avoid permanent and painful damage to your eyes and nerves
:class: danger
Attention à l'amélioration rapide du contrôle de la glycémie et à la réduction de l'HbA1c 
```

Il est très important de prendre en considération qu'une **baisse rapide de l'HbA1c et un meilleur contrôle de la glycémie chez ceux qui ont eu des taux de glucose élevés pendant un certain temps peuvent causer des dommages permanents**. De nombreuses personnes atteintes de diabète n'ont pas connaissance de ça, et tous les professionnels de santé ne parlent pas de ce problème à leurs patients.

Parmi ces atteintes, on trouve la **perte de vue et neuropathie permanente (douleur)**. It is possible to avoid this damage occurring, by reducing average glucose levels more slowly. Si vous avez actuellement un taux élevé d'HbA1c et que vous passez à **AAPS**(ou n'importe quel autre système en boucle fermée), _veuillez discuter_ de ce risque potentiel avec votre équipe médicale avant de commencer, et convenez d'un plan de mise en place avec elle. Vous pouvez simplement commencer avec une cible de glycémie élevée dans **AAPS** (actuellement, la cible la plus élevée que vous pouvez sélectionner est de 200md/dL (ou 10,6 mmol/L), mais vous pouvez également utiliser un profil délibérément faible si nécessaire), puis réduire la cible au fur et à mesure des mois qui passent.

#### À quelle vitesse puis-je réduire mon HbA1c sans risquer des dommages permanents ?

Une [étude](https://pubmed.ncbi.nlm.nih.gov/1464975/) rétrospective sur 76 patients a rapporté que le risque de progression de la rétinopathie était plus élevé de respectivement 1,6 fois, 2,4 fois et 3,8 fois lorsque le taux d'Hba1C diminuait de 1%, 2% ou 3% sur une période de 6 mois. Ils ont suggéré que la **"diminution de la valeur de l'HbA1c au cours de toute période de 6 mois devrait être limitée à moins de 2% afin de prévenir la progression de la rétinopathie... Une diminution trop rapide au début du contrôle glycémique pourrait provoquer une exacerbation sévère ou transitoire de la progression de la rétinopathie."**

N.B. Si vous utilisez une unité différente pour l'HbA1c (mmol/mol au lieu de %), cliquez [ici](https://www.diabetes.co.uk/hba1c-units-converter.html) pour un outil de calculateur d'HbA1c.

Dans une autre [évaluation](https://academic.oup.com/brain/article/138/1/43/337923) rétrospective de 954 patients, les chercheurs ont noté que :

**"Avec une diminution de l'HbA1c de 2 à 3 points sur 3 mois, il y avait un risque absolu de 20% de développer une neuropathie induite par le traitement du diabète ; avec une diminution de l'HbA1c > à 4 points sur 3 mois, le risque absolu de développer une neuropathie induite par le traitement du diabète dépassait 80%."**

Un [commentaire](https://academic.oup.com/brain/article/138/1/2/340563) sur ce travail est à arrivé à la conclusion qu'afin d'éviter des complications, **l'objectif devrait être de réduire l'Hba1C de <2% sur 3 mois.** Vous pouvez lire d'autres articles sur le sujet [ici](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6587545/pdf/DOM-21-454.pdf) et [ici](https://www.mdpi.com/1999-4923/15/7/1791).

Il est généralement reconnu que les diabétiques de type 1 _nouvellement_ diagnostiqués (qui ont souvent un taux très élevé d'HbA1c au moment du diagnostic, avant de commencer la thérapie par insuline) semblent être en mesure de réduire rapidement leur taux d'HbA1c immédiatement après le diagnostic sans faire autant face à ces risques, car leur taux de glycémie n'a pas été élevé pendant une longue période. Cependant, cela reste important d'en discuter avec votre équipe médicale.

(PreparingForAaps-no-sglt-2-inhibitors)=
### Aucun inhibiteur SGLT-2

```{admonition} NO SGLT-2 inhibitors
:class: danger
Les inhibiteurs SGLT-2, aussi appelés gliflozines, empêchent la réabsorption du glucose dans le rein. Comme il est impossible de calculer la façon dont ils font baisser la glycémie, vous NE DEVEZ PAS les prendre en utilisant un système de boucle fermée comme AAPS ! Vous vous mettriez en grave danger d'acidocétose et/ou d'hypoglycémie ! L'utilisation combinée de ce médicament et d'un système qui diminue les taux de basale pour augmenter la glycémie est particulièrement dangereuse. 

En un mot :
- **Exemple 1: risque d'Hypo**
>Pendant le déjeuner, vous utilisez **AAPS** pour faire un bolus basé sur la consommation de 45g de glucides. Le problème est que, sans qu'AAPS n'en sache rien, les inhibiteurs provoquent l'élimination d'une partie de ces glucides, ce qui fait que votre corps a trop d'insuline par rapport aux glucides absorbés, ce qui se traduira par une hypoglycémie.

- **Exemple 2 : risque d'acidocétose**
>Les inhibiteurs éliminent discrètement certains glucides et font baisser votre glycémie. **AAPS** va automatiquement indiquer à la pompe de réduire l'apport en insuline, y compris la basale. Le temps passant, cela peut avoir pour conséquence que votre glycémie reste inférieure à la cible au point que le corps n'a plus suffisamment d'insuline disponible pour absorber les glucides, ce qui provoquera une acidocétose. En règle générale, l'acidocétose se développe chez les patients DT1 à cause d'un problème de pompe, qui aurait déclenché des alertes sur le téléphone et aurait été remarquée en raison d'une glycémie élevée. Cependant, le danger avec les Gliflozines est qu'il n'y aurait pas d'alerte AAPS car la pompe est bien opérationnelle et la glycémie reste potentiellement dans la cible.  

Parmi les noms de médicaments inhibiteurs de SGLT-2 courants, on trouve : Invokana, Farxiga, Jardiance, Glyxambi, Synjardy, Steglatro et Xigduo XR, entre autres.
```


### Principes clés de la boucle avec AAPS

Vous devez bien comprendre les principes et concepts clés de la boucle avant d'utiliser **AAPS**. Vous y parviendrez en investissant votre temps personnel dans la lecture de la documentation **AAPS** et en complétant les Objectifs, qui ont pour but de vous assurer un système solide pour une utilisation sûre et efficace de **AAPS**. Le volume de la documentation **AAPS** peut sembler impressionnant dans un premier temps, mais soyez patient et faite confiance au processus - avec la bonne approche, vous y arriverez !

La vitesse de progression dépendra de chacun, mais sachez qu'il faut généralement 6 à 9 semaines pour compléter tous les objectifs. De nombreuses personnes commencent à compiler, installer et configurer **AAPS** bien avant de commencer à l'utiliser. Pour rendre cela possible, le système propose une "pompe virtuelle" qui peut être utilisée pendant que vous travaillez sur les premiers objectifs, afin que vous puissiez vous familiariser avec **AAPS** sans réellement l'utiliser pour administrer de l'insuline. Une idée plus précise de la chronologie est donnée ci-dessous. Soyez conscient qu'à partir de l'objectif 8 d'**AAPS**, vous êtes en boucle fermée. Les objectifs suivants ajoutent des fonctionnalités supplémentaires comme les commandes **SMS** et les **automatisations**, qui sont utiles pour certains utilisateurs, mais pas essentielles à la fonction de base de **AAPS**.

Pour réussir avec **AAPS**, il faut une approche proactive, la volonté d'analyser données de glycémie et de la flexibilité pour procéder aux ajustements nécessaires à **AAPS** afin d’améliorer vos résultats. Il est presque impossible d’apprendre à pratiquer un sport uniquement en lisant les règles, on peut en dire autant d'**AAPS**.

#### Attendez-vous à ce que ça prenne plus de temps que prévu et à faire face à des problèmes mineurs le temps de tout mettre en place et tout faire fonctionner

Dans les premiers temps du démarrage avec **AAPS**, vous pouvez rencontrer des difficultés à faire communiquer avec succès tous les composants de la boucle les uns avec les autres (et les suiveurs éventuels), ou lorsque vous ajustez vos paramètres. Certains soucis ne peuvent pas être résolus tant qu'**AAPS** n'est pas utilisé dans la vie quotidienne, mais toute l'aide dont vous aurez besoin est disponible sur le groupe Facebook et sur Discord. Veillez à vous organiser et à choisir un moment approprié, comme une matinée calme en week-end (par ex. pas tard la nuit ou quand vous êtes fatigué, ou avant une réunion importante ou un voyage) pour travailler à la résolution des problèmes que vous pouvez rencontrer.

#### Compatibilité des technologies

**AAPS** n'est compatible qu'avec certains types de pompes à insuline, lecteurs de glycémie et téléphones, et certaines technologies peuvent ne pas être disponibles en fonction des pays. In order to avoid any disappointment or frustrations, please read the [CGM](../Getting-Started/CompatiblesCgms.md), [pump](../Getting-Started/CompatiblePumps.md) and [phone](../Getting-Started/Phones.md) sections.

#### Temps pour compiler l'application et progression la boucle fermée

Le temps nécessaire à la compilation d'**AAPS** dépend de votre niveau de connaissance et de vos compétences techniques. Généralement pour les utilisateurs inexpérimentés, le temps nécessaire pour compiler **AAPS** peut aller jusqu'à une demi-journée ou une journée complète (avec l'aide de la communauté). Le processus sera considérablement plus rapide pour les prochaines versions **AAPS**, à mesure que vous acquérez de l'expérience.

Pour vous aider dans le processus de compilation, il y a des pages dédiées dans la documentation :

- List of questions and answers for frequent errors that are likely to occur in [FAQs (Section](../UsefulLinks/FAQ.md) K);

- “[How to install AAPS](../SettingUpAaps/BuildingAaps.md)? (Section D) which includes [Troubleshooting](../GettingHelp/GeneralTroubleshooting.md) Subsection.

How long it takes to get to closed looping depends on the individual, but an approximate timescale for getting to full looping with AAPS can be found ([here](#preparing-how-long-will-it-take))


#### Fichier de clés & exportation des paramètres de configuration

Le fichier « keystore » ou « magasin de clés » (fichier .jks) est un fichier chiffré par mot de passe unique utilisé pour la création de votre version personnelle de **AAPS**. Votre téléphone Android l'utilise pour s'assurer que personne d'autre ne peut mettre à jour votre version personnelle sans le magasin de clés. En bref, dans le cadre de la compilation d'**AAPS** vous devriez :

1.  Enregistrer le fichier de votre magasin de clés (fichier .jks utilisé pour signer votre application) dans un endroit sûr;

2.  Vous assurer de conserver le mot de passe de votre fichier de clés.


De cette façon, vous pourrez utiliser ce même fichier de clés à chaque fois qu'une nouvelle version de **AAPS** sera créée. En moyenne, vous aurez à faire 2 mises à jour d'**AAPS** chaque année.

In addition, **AAPS** provides the ability to [export all your configuration settings](../Maintenance/ExportImportSettings.md). Cela vous permet de récupérer votre système en toute sécurité tout en changeant de téléphone, de mettre à jour/réinstaller l'application avec un minimum d'interruption. 

#### Troubleshooting

N''hésitez pas à contacter la communauté AAPS s'il y a des points sur lesquels vous avez des hésitations - il n'y a pas de question bête ! Tous les utilisateurs, quel que soit leur niveau d'expérience, sont encouragés à poser leurs questions. Les temps de réponse aux questions sont généralement courts, grâce au grand nombre d'utilisateurs d'**AAPS**.

##### [demandez de l'aide sur le groupe AAPS Facebook](https://www.facebook.com/groups/AndroidAPSUsers/)

##### [demandez de l'aide sur le serveur Discord pour AAPS](https://discord.gg/4fQUWHZ4Mw)





#### [Where to go for help](../UsefulLinks/BackgroundReading.md)?

Cette section a pour but de fournir aux nouveaux utilisateurs des liens vers des ressources afin d'obtenir de l'aide, y compris l'accès au soutien de la communauté composé à la fois d'utilisateurs nouveaux et expérimentés qui peuvent clarifier les questions, et résoudre les pièges habituels qui peuvent subvenir avec AAPS.

#### [Pour les professionnels de santé](../UsefulLinks/ClinicianGuideToAaps.md)

This is a [section specifically for clinicians](../UsefulLinks/ClinicianGuideToAaps.md) who want to know more about AAPS and open source artificial pancreas technology. There is also guidance on [how to talk to your clinical team](#introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team) in the Introduction.

## Que va-t-on compiler et installer?

Ce schéma offre un aperçu des composants clés (matériel et logiciel) du système **AAPS** :

![préparation_vue_d_ensemble](../images/preparing_images/AAPS_preparing_overview_01.png)


En plus des trois composants matériels de base (téléphone, pompe, capteur de glycémie), nous avons également besoin de : 1) L'application **AAPS** 2) Un serveur de reporting et 3) Une application pour suivre la mesure en continu du glucose (MCG)

### 1) L'application Android pour téléphone : **AAPS**

**AAPS** est une application qui s'exécute sur les smartphones et appareils Android. Vous allez compiler l'application **AAPS** (un fichier apk) vous-même, en suivant un guide détaillé. Vous aurez besoin de télécharger le code source de **AAPS** depuis GitHub, d'installer les programmes nécessaires (Android Studio, GitHub desktop) sur votre ordinateur et de compiler votre propre version de l'application **AAPS**. Vous transférerez ensuite l'application **AAPS** sur votre smartphone (par e-mail, câble USB _etc._) et vous l'installerez.

### 2) Un serveur de reporting : NightScout (Tidepool*)

Afin de profiter de tous les avantages de **AAPS**, vous aurez besoin de configurer un serveur Nightscout. You can [do this yourself](https://nightscout.github.io/nightscout/new_user/#free-diy) or alternatively, pay a small fee for a [managed Nightscout service](https://nightscout.github.io/#nightscout-as-a-service) to be set up for you. Nightscout est utilisé pour collecter les données de **AAPS** au fil du temps et peut générer des rapports détaillés mettant en relation les données de glycémie et d'insuline. Les aidants peuvent également utiliser Nightscout pour communiquer à distance avec l'application **AAPS**, pour superviser la gestion du diabète de leur enfant. Dans les fonctionnalités de communication à distance, on trouve la surveillance en temps réel de la glycémie et de l'insuline active, l'administration à distance d'insuline (par SMS) et les annonces de repas. Tenter d'analyser vos performances dans le suivi du diabète en examinant les données de glycémie séparément des données de la pompe, c'est comme conduire une voiture où le conducteur est aveugle et le passager décrit la scène.  Tidepool est disponible comme alternative à Nightscout, pour les versions AAPS 3.2 et ultérieures.

### 3) Application pour le capteur MGC

En fonction de votre capteur de glycémie/MGC, vous aurez besoin d'une application compatible pour recevoir les mesures de glycémie et les envoyer à **AAPS**. The different options are shown below and more information is given in the [compatible CGMs section](../Getting-Started/CompatiblesCgms.md):

![options_dexcom](../images/preparing_images/AAPS_connectivity_Dex_02.png) ![options_libres](../images/preparing_images/AAPSconnectivity_libre.png) ![options_eversense](../images/preparing_images/AAPS_connectivity_eversense.png)

### Maintenance du système **AAPS**

Aussi bien **Nightscout** qu'**AAPS** doivent être mis à jour environ une fois par an, car de nouvelles versions sont publiées. Dans certains cas, la mise à jour peut être repoussée, dans d'autres cas, elle est fortement recommandée ou considérée comme essentielle pour la sécurité. Ces mises à jour seront notifiées sur les groupes Facebook et les serveurs Discord. Les notes de version indiqueront clairement la marche à suivre. Il est probable que de nombreuses personnes se poseront des questions similaires aux vôtres au moment de la mise à jour, et vous trouverez le soutien nécessaire pour effectuer les mises à jour.

(preparing-how-long-will-it-take)=
## Combien de temps pour tout mettre en place ?

Comme mentionné précédemment, l'utilisation de **AAPS** s'envisage au long terme et nécessite un investissement de votre temps personnel. Il ne s'agit pas d'une installation à faire une seule fois. Les estimations actuelles pour la compilation d'**AAPS**, l'installation et la configuration d'**AAPS** et de l'application de **MGC**, le passage d'une boucle ouverte à une boucle fermée hybride avec **AAPS** sont d'environ 4 à 6 mois en tout. Vous avez donc tout intérêt à commencer rapidement la compilation de l'application **AAPS** et vous mettre à travailler sur les premiers objectifs dès que possible, même si vous utilisez toujours un autre système d'administration d'insuline (vous pouvez utiliser une pompe virtuelle jusqu'à l'objectif 5).

Certains des objectifs demandent d'attendre un certain nombre de jours avant de les valider, pour vous assurer que vous comprenez la nouvelle fonctionnalité. Il n'est pas possible de contourner ce temps d'attente, ces délais minimaux ont été mis en place pour votre propre sécurité.

Voici une estimation approximative du temps nécessaire :

| Tâches                                                                    |           Temps estimé            |
| ------------------------------------------------------------------------- |:---------------------------------:|
| Lecture initiale de la documentation                                      |             1-2 jours             |
| Installation/configuration du PC pour permettre la compilation            |            2-8 heures             |
| Mise en place du serveur de reporting                                     |              1 heure              |
| Installation d'une application MGC (xDrip+, BYODA, …)                     |              1 heure              |
| Configuration initiale MGC → xDrip+ → AAPS                                |              1 heure              |
| Configuration initiale AAPS → pompe                                       |              1 heure              |
| Configuration AAPS → Nightscout/Tidepool (reporting seulement)            |              1 heure              |
| Optionnel : Configuration NightScout ↔ **AAPS** & NSFollowers             |              1 heure              |
| Objectif 1 : Mise en place de la visualisation et du suivi                |              1 heure              |
| Objectif 2 : Apprendre à contrôler AAPS                                   |              2 heure              |
| Objectif 3 : Prouver ses connaissances                                    |         Jusqu'à 14 jours          |
| Objectif 4 : Démarrage de la boucle ouverte                               |          7 jours minimum          |
| Objectif 5 : Comprendre votre boucle ouverte                              |              7 jours              |
| Objectif 6 : Démarrage de la boucle fermée (Arrêt pour Glycémie Basse)    | 5 jours minimum, jusqu'à 14 jours |
| Objectif 7 : Réglage de la boucle fermée                                  | 1 jours minimum, jusqu'à 7 jours  |
| Objectif 8 : Ajustement de la basale et des ratios, activation d'Autosens | 7 jours minimum, jusqu'à 14 jours |
| Objectif 9 : Activation des Super Micro Bolus (SMB)                       |         28 jours minimum          |
| Objectif 10: Automatisation                                               |         28 jours minimum          |
| Objectif 11 : SI dynamique                                                |         28 jours minimum          |

Même lorsque vous serez complètement opérationnel sur **AAPS**, vous aurez toujours besoin d'ajuster régulièrement vos paramètres afin d'améliorer la gestion globale de votre diabète.

## Requirements

### Considérations médicales

In addition to the medical warnings in the [safety section](#preparing-safety-first) there are also different parameters, depending on which insulin you are using in the pump.

#### Choix de l'insuline

Les calculs d'**AAPS** sont basés sur des concentrations d'insuline de 100U/ml (identiques à celles utilisées de manière standard dans les pompes). Les types suivants de préréglages de profil d'insuline sont pris en charge :

- Insuline à Action Rapide Oref: Humalog/NovoRapid/NovoLog
- Insuline Ultra Rapide Oref:  Fiasp
- Lyumjev

Pour les utilisateurs Expérimentés/Avancés uniquement :
- Profil d'insuline ajustable Oref: Vous permet de définir vous-même le pic d'activité de l'insuline


### Pré-requis techniques

Cette documentation a pour but de réduire autant que faire se peut l'expertise technique requise. Vous aurez besoin de votre ordinateur pour compiler l'application **AAPS** dans Android Studio (instructions étape par étape). Vous devrez également configurer un serveur sur Internet dans un environnement accessible, configurer plusieurs applications pour le téléphone Android et acquérir des connaissances sur la gestion du diabète. Vous pouvez faire tout cela en prenant une étape après l'autre, en étant patient, et en faisant appel à l'aide de la communauté **AAPS**. Si vous savez déjà naviguer sur Internet, gérer vos e-mails Gmail personnels et maintenir votre ordinateur à jour, alors vous arriverez à compiler **AAPS**. Il faut juste y aller tranquillement.

### Smartphones

#### AAPS et versions Android

The current version of **AAPS** (3.3) requires an Android smartphone with Google **Android 11.0 or above**. If you are considering buying a new phone, (as of December 2024), Android 14 is preferred.<br/> Users are strongly encouraged to keep their build of **AAPS** up to date for safety reasons. However, for users unable to use a device with Android 11.0 or newer, earlier versions of **AAPS** compatible for older Android versions, remain available, see: [Release notes](#maintenance-android-version-aaps-version).

#### Choix du modèle de smartphone
Vous choisirez un modèle précis en fonction de la/des fonction(s) que vous recherchez. You can find on the [Phones page](../Getting-Started/Phones.md) recommendations and user feedback about working setups.

Les utilisateurs sont encouragés à faire les mises à jour de version Android sur leur téléphone, y compris avec les mises à jour de sécurité. Cependant, si démarrez avec **AAPS** ou si vous n'êtes pas à l'aise techniquement, vous voudrez peut-être attendre pour faire la mise à jour de votre téléphone que d'autres l'aient fait et aient confirmé le bon fonctionnement des applications, sur nos différents forums.

```{admonition} delaying Samsung phones updates
:class: warning
Samsung est malheureusement connu pour forcer les mises à jour sur leurs téléphones, ce qui cause des problèmes de connectivité bluetooth. To disable these forced updates you need to switch the phone to "developer mode" by:
 go to settings and about then software information, then tap build number u til it confirms you have unlocked developer mode. Retournez au menu principal des paramètres, ici ou dans "Système", vous trouverez un nouvel élément de menu "Options pour les développeurs". Ouvrez ce menu et faites défiler jusqu'à trouver l'option de mise à jour automatique du système et désactivez-la
```

```{admonition} Google Play Protect potential Issue
:class: warning
On nous rapporte régulièrement que Google Play Protect ferme arbitrairement **AAPS** chaque matin. Si ça vous arrive, allez dans les options de Google Play et désactivez “Google Play Protect”. Tous les modèles de téléphone et toutes les versions d'Android ne sont pas concernés.
```

