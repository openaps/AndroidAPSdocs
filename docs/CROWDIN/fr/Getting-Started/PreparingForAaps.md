# Se préparer à démarrer avec AAPS

Bienvenue ! Cette documentation a pour but de guider les utilisateurs qui se préparent à installer et à commencer à utiliser le système de pancréas artificiel Android (**AAPS**).

## Trouver votre chemin dans la documentation

Un **index** et une explication de la structure de la documentation peuvent être trouvés [ici](../index.md), vous pouvez également y accéder en cliquant sur le logo **AAPS** en haut à gauche de la documentation. Vous y trouverez une vue d'ensemble des fonctionnalités décrites dans chaque chapitre de la documentation. Vous pouvez également utiliser le menu à gauche de cette page pour naviguer dans la documentation. Enfin, il y a une fonction de recherche bien pratique, directement en dessous du logo **AAPS**.

Notre objectif est de rendre facile à comprendre à la fois les capacités et les limitations de **AAPS**. Il peut être décevant de découvrir après avoir passé du temps à lire la documentation, que votre pompe à insuline ou votre MGC ne sont pas compatibles, ou que **AAPS** offre des fonctionnalités différentes de celles que vous attendiez.

De nombreux détails dans la documentation sur l'utilisation de **AAPS** prennent tout leur sens lorsque vous utilisez réellement **AAPS** en temps réel. Tout comme il est difficile d'apprendre un sport uniquement en lisant les règles, vous aurez besoin à la fois d'apprendre les règles fondamentales pour utiliser **AAPS** en toute sécurité, et de passer du temps à apprendre comment appliquer au mieux ces règles pendant que vous vous lancez dans l'utilisation d'**AAPS**.

(preparing-safety-first)=

## La sécurité avant tout
“Un grand pouvoir implique de grandes responsabilités... ”

### Sécurité technique
**AAPS** dispose d'un large éventail de fonctionnalités de sécurité. Elles imposent des limitations qui sont progressivement retirées au fur et à mesure que vous complétez une série d'[Objectifs](../SettingUpAaps/CompletingTheObjectives.md) qui vous demandent d'utiliser des paramètres spécifiques et de répondre à des questions à choix multiple. **AAPS** débloque des fonctionnalités lorsque vous terminez un objectif avec succès. Ce processus permet à l'utilisateur d'évoluer en toute sécurité par étapes successives, de la Boucle Ouverte à la Boucle Fermée, tout en apprenant les différentes fonctionnalités de **AAPS**.

Les [Objectifs](../SettingUpAaps/CompletingTheObjectives.md) ont été conçus pour offrir la meilleure introduction possible à **AAPS**. Ils tiennent compte des erreurs typiques et des tendances générales que les développeurs d'**AAPS** ont observées chez les nouveaux utilisateurs. Des erreurs peuvent arriver quand un débutant est inexpérimenté et trop impatient de commencer avec **AAPS** ou a négligé des éléments importants. Les [Objectifs](../SettingUpAaps/CompletingTheObjectives.md) ont pour but de réduire au minimum ces problèmes.

### Sécurité médicale
```{admonition} Avoid permanent and painful damage to your eyes and nerves
:class: danger
Attention à l'amélioration rapide du contrôle de la glycémie et à la réduction de l'HbA1c 
```

Il est très important de prendre en considération qu'une **baisse rapide de l'HbA1c et un meilleur contrôle de la glycémie chez ceux qui ont eu des taux de glucose élevés pendant un certain temps peuvent causer des dommages permanents**. Beaucoup de personnes diabétiques ne le savent pas, et tous les médecins n'informent pas leurs patients de ce problème.

Ces atteintes peuvent inclure **une perte de la vue et une neuropathie permanente (douleur)**. Il est possible d'éviter ces atteintes en baissant la glycémie moyenne plus lentement. Si vous avez actuellement une HbA1c élevée et que vous passez à **AAPS** (ou à n'importe quel autre système en boucle fermée), _veuillez_ discuter de ce risque potentiel avec votre équipe médicale avant de commencer, et convenez avec elle d'un calendrier avec des cibles de glycémie sûres, qui baissent progressivement. Au début, vous pouvez facilement régler des cibles de glycémie plus hautes dans **AAPS** (actuellement, la cible la plus haute que vous pouvez choisir est 11,1 mmol/l, mais vous pouvez aussi garder volontairement un profil faible si besoin), puis baisser la cible au fil des mois.

#### À quelle vitesse puis-je réduire mon HbA1c sans risquer des dommages permanents ?

Une [étude](https://pubmed.ncbi.nlm.nih.gov/1464975/) rétrospective de 76 patients a montré que le risque de progression de la rétinopathie était multiplié par 1,6, 2,4 et 3,8 si l'HbA1c baissait respectivement de 1 %, 2 % ou 3 % sur une période de 6 mois. Ils ont suggéré que la **"diminution de la valeur de l'HbA1c au cours de toute période de 6 mois devrait être limitée à moins de 2% afin de prévenir la progression de la rétinopathie... Une diminution trop rapide au début du contrôle glycémique pourrait provoquer une exacerbation sévère ou transitoire de la progression de la rétinopathie."**

N.B. Si vous utilisez d'autres unités d'HbA1c (mmol/mol au lieu de %), cliquez [ici](https://www.diabetes.co.uk/hba1c-units-converter.html) pour un outil de calcul de l'HbA1c.

Dans une autre [évaluation](https://academic.oup.com/brain/article/138/1/43/337923) rétrospective de 954 patients, les chercheurs ont noté que :

**« Avec une diminution de l'HbA1c de 2 à 3 points sur 3 mois, il y avait un risque absolu de 20 % de développer une neuropathie induite par le traitement du diabète ; avec une diminution de l'HbA1c de >4 points sur 3 mois, le risque absolu de développer une neuropathie induite par le traitement du diabète dépassait 80 %. »**

Un [commentaire](https://academic.oup.com/brain/article/138/1/2/340563) sur ce travail est arrivé à la conclusion que pour éviter des complications, **l'objectif devrait être de réduire l'HbA1c de <2 % sur 3 mois.** Vous pouvez lire d'autres articles sur le sujet [ici](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6587545/pdf/DOM-21-454.pdf) et [ici](https://www.mdpi.com/1999-4923/15/7/1791).

Il est généralement admis que les diabétiques de type 1 _nouvellement_ diagnostiqués (qui ont souvent une HbA1c très élevée au diagnostic, avant de commencer l'insulinothérapie) semblent pouvoir baisser rapidement leur HbA1c juste après le diagnostic sans subir ces risques dans la même mesure, car leur glycémie n'a pas été élevée pendant une période aussi longue. Cependant, cela reste important d'en discuter avec votre équipe médicale.

(PreparingForAaps-no-sglt-2-inhibitors)=
### Aucun inhibiteur SGLT-2

```{admonition} NO SGLT-2 inhibitors
:class: danger
Les inhibiteurs SGLT-2, aussi appelés gliflozines, empêchent la réabsorption du glucose dans le rein. Comme il est impossible de calculer la façon dont ils font baisser la glycémie, vous NE DEVEZ PAS les prendre en utilisant un système de boucle fermée comme AAPS ! Vous vous mettriez en grave danger d'acidocétose et/ou d'hypoglycémie ! L'utilisation combinée de ce médicament et d'un système qui diminue les taux de basale pour augmenter la glycémie est particulièrement dangereuse. 

En résumé :
- **Exemple 1 : risque d'hypoglycémie**
>Au déjeuner, vous utilisez **AAPS** pour faire un bolus pour 45 g de glucose consommés. Le problème est que, sans qu'AAPS le sache, les inhibiteurs font éliminer par le corps une partie des glucides. Votre corps a alors trop d'insuline par rapport aux glucides absorbés, ce qui provoque une hypoglycémie.

- **Exemple 2 : risque d'acidocétose**
>Les inhibiteurs éliminent en arrière-plan une partie des glucides, ce qui fait baisser votre glycémie. **AAPS** va automatiquement demander à la pompe de diminuer l'apport d'insuline, y compris la basale. Avec le temps, votre glycémie peut rester sous la valeur cible, au point que le corps n'a plus assez d'insuline de fond pour absorber des glucides, ce qui provoque une acidocétose. Normalement, chez les patients DT1, l'acidocétose apparaît parce que leur pompe tombe en panne, ce qui déclenche des alertes sur leur téléphone et se voit par une glycémie élevée. Cependant, le danger avec les gliflozines est qu'il n'y aurait aucune alerte d'AAPS, car la pompe continue de fonctionner et la glycémie peut rester dans la cible.

Parmi les noms de médicaments inhibiteurs de SGLT-2 courants, on trouve : Invokana, Farxiga, Jardiance, Glyxambi, Synjardy, Steglatro et Xigduo XR, entre autres.
```


### Principes clés de la boucle avec AAPS

Vous devez bien comprendre les principes et concepts clés de la boucle avant d'utiliser **AAPS**. Vous y parviendrez en investissant votre temps personnel dans la lecture de la documentation **AAPS** et en complétant les Objectifs, qui ont pour but de vous assurer un système solide pour une utilisation sûre et efficace de **AAPS**. Le volume de la documentation **AAPS** peut sembler impressionnant au début, mais soyez patient et faites confiance au processus – avec la bonne approche, vous y arriverez !

La vitesse de progression dépendra de chacun, mais sachez qu'il faut généralement 6 à 9 semaines pour compléter tous les objectifs. Beaucoup de personnes compilent, installent et configurent **AAPS** bien avant de commencer à l'utiliser. Pour rendre cela possible, le système propose une "pompe virtuelle" qui peut être utilisée pendant que vous travaillez sur les premiers objectifs, afin que vous puissiez vous familiariser avec **AAPS** sans réellement l'utiliser pour administrer de l'insuline. Le calendrier détaillé est donné ci-dessous. Sachez qu'à l'objectif 7 d'**AAPS**, vous êtes en boucle fermée ; les objectifs suivants ajoutent des fonctions comme les **SMB** et les **automatisations**, utiles pour certains utilisateurs, mais pas indispensables à la fonction de base d'**AAPS**.

Pour réussir avec **AAPS**, il faut une approche proactive, la volonté d'analyser les données de glycémie et de la flexibilité pour faire les ajustements nécessaires dans **AAPS** afin d'améliorer vos résultats. Il est presque impossible d’apprendre à pratiquer un sport uniquement en lisant les règles, on peut en dire autant d'**AAPS**.

#### Attendez-vous à ce que ça prenne plus de temps que prévu et à faire face à des problèmes mineurs le temps de tout mettre en place et tout faire fonctionner

Dans les premiers temps du démarrage avec **AAPS**, vous pouvez rencontrer des difficultés à faire communiquer avec succès tous les composants de la boucle les uns avec les autres (et les suiveurs éventuels), ou lorsque vous ajustez vos paramètres. Certains soucis ne peuvent pas être résolus tant qu'**AAPS** n'est pas utilisé dans la vie quotidienne, mais toute l'aide dont vous aurez besoin est disponible sur le groupe Facebook et sur Discord. Veillez à vous organiser et à choisir un moment approprié, comme une matinée calme en week-end (par ex. pas tard la nuit ou quand vous êtes fatigué, ou avant une réunion importante ou un voyage) pour travailler à la résolution des problèmes que vous pouvez rencontrer.

#### Compatibilité des technologies

**AAPS** n'est compatible qu'avec certains types de pompes à insuline, de MGC et de téléphones, et certaines technologies peuvent ne pas être disponibles dans tous les pays. Pour éviter toute déception ou frustration, veuillez lire les pages [MGC](../Getting-Started/CompatiblesCgms.md), [pompe](../Getting-Started/CompatiblePumps.md) et [téléphone](../Getting-Started/Phones.md).

#### Temps pour compiler l'application et progression vers la boucle complète

Le temps nécessaire à la compilation d'**AAPS** dépend de votre niveau de connaissance et de vos compétences techniques. Généralement pour les utilisateurs inexpérimentés, le temps nécessaire pour compiler **AAPS** peut aller jusqu'à une demi-journée ou une journée complète (avec l'aide de la communauté). Le processus sera considérablement plus rapide pour les prochaines versions **AAPS**, à mesure que vous acquérez de l'expérience.

Plusieurs parties de cette documentation vous aident pendant la compilation :

- [Compilation d'AAPS](../SettingUpAaps/BuildingAaps.md) vous guide pas à pas pour compiler l'application et l'installer sur votre téléphone ;

- la [FAQ](../UsefulLinks/FAQ.md) répond aux questions courantes et explique les erreurs les plus fréquentes ; et

- la page [Dépannage](../GettingHelp/GeneralTroubleshooting.md) réunit les solutions aux problèmes les plus fréquents, classées par sujet.

Le temps pour arriver à la boucle fermée dépend de chacun ; un calendrier approximatif pour arriver à la boucle complète avec **AAPS** est donné [ci-dessous](#preparing-how-long-will-it-take).


#### Keystore & fichier d'export des paramètres de configuration

Un « keystore » (fichier .jks) est un fichier chiffré par mot de passe, propre à votre copie d'**AAPS**. Votre téléphone Android l'utilise pour s'assurer que personne d'autre ne peut mettre à jour votre version personnelle sans le magasin de clés. En bref, dans le cadre de la compilation d'**AAPS** vous devriez :

1.  Enregistrez votre fichier keystore (fichier .jks utilisé pour signer votre application) dans un endroit sûr ;

2.  Notez bien le mot de passe de votre fichier keystore.

La façon de sauvegarder le keystore dépend de votre méthode de compilation :

- **Compilation avec Android Studio (ordinateur)** : le keystore est créé pendant la compilation – voir [Generate signed APK](#Building-APK-generate-signed-apk) pour savoir où l'enregistrer.
- **AAPS Builder** : gardez le fichier de sauvegarde `aaps-keystore.jks` que la page de configuration vous a proposé quand vous avez créé votre clé, avec son mot de passe et son alias. Si vous avez envoyé votre propre keystore, gardez ce fichier.
- **Compilation dans le navigateur avec un fork** : utilisez le workflow dédié [Export keystore](#ci-keystore-export) pour télécharger une copie dans votre Google Drive.

De cette façon, vous pourrez utiliser exactement le même fichier keystore à chaque nouvelle version d'**AAPS**. En moyenne, vous aurez à faire 2 mises à jour d'**AAPS** chaque année.

Par ailleurs, **AAPS** vous donne la possibilité d'[exporter tous vos paramètres de configuration](../Maintenance/ExportImportSettings.md). Cela vous permet de récupérer votre système en toute sécurité tout en changeant de téléphone, de mettre à jour/réinstaller l'application avec un minimum d'interruption. 

#### Dépannage

N'hésitez pas à contacter la communauté AAPS si vous avez un doute sur quoi que ce soit – il n'y a pas de question bête ! Tous les utilisateurs, quel que soit leur niveau d'expérience, sont encouragés à poser leurs questions. Les temps de réponse aux questions sont généralement courts, grâce au grand nombre d'utilisateurs d'**AAPS**.

##### [demandez de l'aide sur le groupe AAPS Facebook](https://www.facebook.com/groups/AndroidAPSUsers/)

##### [demandez de l'aide sur le serveur Discord pour AAPS](https://discord.gg/4fQUWHZ4Mw)





#### [Où trouver de l'aide](../GettingHelp/WhereCanIGetHelp.md) ?

Cette section a pour but de fournir aux nouveaux utilisateurs des liens vers des ressources pour obtenir de l'aide, y compris l'accès au soutien de la communauté, composée d'utilisateurs nouveaux et expérimentés, qui peuvent répondre aux questions et aider à éviter les pièges habituels d'AAPS.

#### [Pour les professionnels de santé](../UsefulLinks/ClinicianGuideToAaps.md)

Il s'agit d'une [section spécialement pour les médecins](../UsefulLinks/ClinicianGuideToAaps.md) qui veulent en savoir plus sur AAPS et sur la technologie open source de pancréas artificiel. Vous trouverez aussi des conseils sur [comment parler à votre équipe médicale](#introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team) dans l'Introduction.

## Que va-t-on compiler et installer ?

Ce schéma offre un aperçu des composants clés (matériel et logiciel) du système **AAPS** :

![préparation_vue_d_ensemble](../images/preparing_images/AAPS_preparing_overview_01.png)


En plus des trois composants matériels de base (téléphone, pompe, capteur de glycémie), nous avons également besoin de : 1) L'application **AAPS** 2) Un serveur de rapports et 3) Une application de mesure du glucose en continu (MGC)

### 1) L'application Android pour téléphone : **AAPS**

**AAPS** est une application qui fonctionne sur les smartphones et appareils Android. Vous allez compiler l'application **AAPS** (un fichier apk) vous-même, en suivant un guide détaillé. Vous aurez besoin de télécharger le code source de **AAPS** depuis GitHub, d'installer les programmes nécessaires (Android Studio, GitHub desktop) sur votre ordinateur et de compiler votre propre version de l'application **AAPS**. Vous transférerez ensuite l'application **AAPS** sur votre smartphone (par e-mail, câble USB _etc._) et vous l'installerez.

### 2) Un serveur de rapports : Nightscout (Tidepool*)

Pour profiter pleinement d'**AAPS**, vous devez mettre en place un serveur Nightscout. Vous pouvez [le faire vous-même](https://nightscout.github.io/nightscout/new_user/#free-diy) ou bien payer une petite somme pour qu'un [service Nightscout géré](https://nightscout.github.io/#nightscout-as-a-service) soit mis en place pour vous. Nightscout est utilisé pour collecter les données de **AAPS** au fil du temps et peut générer des rapports détaillés mettant en relation les données de glycémie et d'insuline. Les aidants peuvent également utiliser Nightscout pour communiquer à distance avec l'application **AAPS**, pour superviser la gestion du diabète de leur enfant. Dans les fonctionnalités de communication à distance, on trouve la surveillance en temps réel de la glycémie et de l'insuline active, l'administration à distance d'insuline (par SMS) et les annonces de repas. Essayer d'analyser votre diabète en regardant les données MGC séparément des données de la pompe, c'est comme conduire une voiture avec un conducteur aveugle et un passager qui décrit la route. Tidepool est aussi disponible comme alternative à Nightscout.

### 3) Application pour le capteur MGC

En fonction de votre capteur de glycémie/MGC, vous aurez besoin d'une application compatible pour recevoir les mesures de glycémie et les envoyer à **AAPS**. Les différentes options sont présentées ci-dessous et vous trouverez plus d'informations dans la [section MGC compatibles](../Getting-Started/CompatiblesCgms.md) :

![options_dexcom](../images/preparing_images/AAPS_connectivity_Dex_02.png) ![options_libre](../images/preparing_images/AAPSconnectivity_libre.png) ![options_eversense](../images/preparing_images/AAPS_connectivity_eversense.png)

### Maintenance du système **AAPS**

Aussi bien **Nightscout** qu'**AAPS** doivent être mis à jour environ une fois par an, car de nouvelles versions sont publiées. Dans certains cas, la mise à jour peut être repoussée, dans d'autres cas, elle est fortement recommandée ou considérée comme essentielle pour la sécurité. Ces mises à jour seront notifiées sur les groupes Facebook et les serveurs Discord. Les notes de version indiqueront clairement la marche à suivre. Il est probable que de nombreuses personnes se poseront des questions similaires aux vôtres au moment de la mise à jour, et vous trouverez le soutien nécessaire pour effectuer les mises à jour.

(preparing-how-long-will-it-take)=
## Combien de temps pour tout mettre en place ?

Comme mentionné précédemment, l'utilisation de **AAPS** s'envisage au long terme et nécessite un investissement de votre temps personnel. Il ne s'agit pas d'une installation à faire une seule fois. Les estimations actuelles pour la compilation d'**AAPS**, l'installation et la configuration d'**AAPS** et de l'application de **MGC**, le passage d'une boucle ouverte à une boucle fermée hybride avec **AAPS** sont d'environ 4 à 6 mois en tout. Vous avez donc tout intérêt à commencer rapidement la compilation de l'application **AAPS** et vous mettre à travailler sur les premiers objectifs dès que possible, même si vous utilisez toujours un autre système d'administration d'insuline (vous pouvez utiliser une pompe virtuelle jusqu'à l'objectif 5).

Certains des objectifs demandent d'attendre un certain nombre de jours avant de les valider, pour vous assurer que vous comprenez la nouvelle fonctionnalité. Il n'est pas possible d'éviter ce temps d'attente ; ces temps d'attente minimum ont été fixés pour votre propre sécurité.

Voici une estimation approximative du temps nécessaire :

| Tâches                                                                    |           Temps estimé            |
| ------------------------------------------------------------------------- |:---------------------------------:|
| Lecture initiale de la documentation                                      |             1-2 jours             |
| Configurer GitHub pour la compilation dans le navigateur                  |            1-4 heures             |
| Mise en place d'un serveur de rapports                                    |              1 heure              |
| Installer une application MGC (xDrip, BYODA, …)                           |              1 heure              |
| Configuration initiale MGC → xDrip → AAPS                                 |              1 heure              |
| Configuration initiale AAPS → pompe                                       |              1 heure              |
| Configuration AAPS → Nightscout/Tidepool (rapports seulement)             |              1 heure              |
| Facultatif : configuration de Nightscout ↔ **AAPS** & NSFollowers         |              1 heure              |
| Objectif 1 : Mise en place de la visualisation et du suivi                |              1 heure              |
| Objectif 2 : Apprendre à contrôler AAPS                                   |             2 heures              |
| Objectif 3 : Prouver ses connaissances                                    |         Jusqu'à 14 jours          |
| Objectif 4 : Démarrage de la boucle ouverte                               |          7 jours minimum          |
| Objectif 5 : Comprendre votre boucle ouverte                              |              7 jours              |
| Objectif 6 : Démarrage de la boucle fermée (Arrêt Glycémie Basse)         | 5 jours minimum, jusqu'à 14 jours |
| Objectif 7 : Réglage de la boucle fermée                                  |  1 jour minimum, jusqu'à 7 jours  |
| Objectif 8 : Ajustement de la basale et des ratios, activation d'Autosens | 7 jours minimum, jusqu'à 14 jours |
| Objectif 9 : Activation des Super Micro Bolus (SMB)                       |         28 jours minimum          |
| Objectif 10 : Automatisation                                              |         28 jours minimum          |

Même lorsque vous serez complètement opérationnel sur **AAPS**, vous aurez toujours besoin d'ajuster régulièrement vos paramètres afin d'améliorer la gestion globale de votre diabète.

## Prérequis

### Considérations médicales

En plus des avertissements médicaux de la [section sécurité](#preparing-safety-first), il y a aussi des paramètres différents selon l'insuline que vous utilisez dans la pompe.

#### Choix de l'insuline

Les calculs d'**AAPS** sont basés sur des concentrations d'insuline de 100U/ml (identiques à celles utilisées de manière standard dans les pompes). Vous configurez votre insuline dans **Gestion → Paramètres Insuline** : réglez son **Pic** et sa **DAI**, ou utilisez **Charger le pic depuis** pour remplir le temps de pic standard d'un des préréglages :

- **Novorapid** (aussi pour Humalog et NovoLog)
- **Fiasp**
- **Lyumjev**

Les utilisateurs avancés peuvent saisir directement n'importe quel temps de pic (35 à 120 minutes), par exemple pour un mélange d'insulines. Voir [Paramètres Insuline](#Config-Builder-insulin).


### Pré-requis techniques

Cette documentation a pour but de réduire autant que faire se peut l'expertise technique requise. Pour compiler l'application **AAPS**, vous avez plusieurs options – voir [Compilation d'AAPS](../SettingUpAaps/BuildingAaps.md) pour une vue d'ensemble :

- **Compilation dans le navigateur** (recommandée) : compilez l'application directement depuis votre smartphone avec GitHub Actions, sans ordinateur ni Android Studio. Avec [AAPS Builder](../SettingUpAaps/BrowserBuildAapsBuilder.md), vous avez seulement besoin d'un compte GitHub : vous téléchargez l'application directement depuis GitHub. La méthode avec un fork a aussi besoin d'un compte Google pour stocker l'application dans votre Google Drive.
- **Compilation avec Android Studio** : compilez l'application sur votre ordinateur avec Android Studio. Elle est surtout utilisée par les développeurs qui veulent modifier le code.
- **Compilation en ligne de commande** : pour les utilisateurs qui préfèrent compiler sur leur ordinateur sans installer Android Studio.

En plus de compiler l'application, vous devez aussi mettre en place un serveur de rapports, configurer plusieurs applications sur votre téléphone Android et acquérir des compétences dans la gestion du diabète. Vous y arriverez en avançant pas à pas, avec patience et avec l'aide de la communauté **AAPS**. Si vous savez déjà naviguer sur Internet et gérer vos propres e-mails Gmail, compiler **AAPS** est une tâche faisable. Il faut juste y aller tranquillement.

### Smartphones

#### AAPS et versions Android

La version actuelle d'**AAPS** (4.0) nécessite un smartphone Android avec **Android 12.0 ou plus récent** de Google. Si vous pensez acheter un nouveau téléphone (en janvier 2026), Android 16 est préférable.<br/> Pour des raisons de sécurité, nous conseillons fortement aux utilisateurs de garder leur version d'**AAPS** à jour. Cependant, pour les utilisateurs qui ne peuvent pas utiliser un appareil avec Android 12.0 ou plus récent, des versions plus anciennes d'**AAPS**, compatibles avec les anciennes versions d'Android, restent disponibles, voir : [notes de version](#maintenance-android-version-aaps-version).

#### Choix du modèle de smartphone
Vous choisirez un modèle précis en fonction de la/des fonction(s) que vous recherchez. Sur la page [Téléphones](../Getting-Started/Phones.md), vous trouverez des recommandations et des retours d'utilisateurs sur les configurations qui fonctionnent.

Les utilisateurs sont encouragés à faire les mises à jour de version Android sur leur téléphone, y compris avec les mises à jour de sécurité. Cependant, si vous débutez avec **AAPS** ou si vous n'êtes pas à l'aise avec la technique, vous voudrez peut-être attendre pour mettre à jour votre téléphone que d'autres l'aient fait et aient confirmé sur nos différents forums que tout fonctionne bien.

```{admonition} Delaying Samsung phone updates
:class: warning
Samsung a malheureusement l'habitude d'imposer des mises à jour sur ses téléphones, ce qui peut causer des problèmes de connexion Bluetooth. Pour désactiver ces mises à jour imposées, vous devez passer le téléphone en « mode développeur » :

1. Allez dans **Paramètres** > **À propos du téléphone** > **Informations sur le logiciel**, puis appuyez plusieurs fois sur **Numéro de version** jusqu'à ce que le téléphone confirme que le mode développeur est activé.
2. Revenez au menu principal **Paramètres**, où vous devriez voir un nouveau menu **Options de développement** (Developer options).
3. Ouvrez **Options de développement**, cherchez **Mise à jour système automatique** (Auto system update) et désactivez-la.
```

```{admonition} Google Play Protect potential issue
:class: warning
On nous rapporte régulièrement que Google Play Protect ferme arbitrairement **AAPS** chaque matin. Si cela arrive, vous devrez aller dans les options de Google Play et désactiver **Google Play Protect**. Tous les modèles de téléphone et toutes les versions d'Android ne sont pas concernés.
```

```{admonition} Android developer verification
:class: note
À partir de septembre 2026, Google introduit progressivement la [vérification des développeurs Android](#android-developer-verification), qui change la façon dont une application compilée par vous-même est installée sur le téléphone. La compilation d'**AAPS** n'est pas concernée, et des méthodes d'installation gratuites restent disponibles – voir la page liée pour plus de détails.
```

