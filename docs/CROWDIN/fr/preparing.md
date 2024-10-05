# Se préparer à démarrer avec AAPS

Bienvenue ! Cette documentation a pour objectif de guider les utilisateurs qui s'apprêtent à installer et à commencer à utiliser le Système de Pancréas Artificiel Android (**AAPS**).

## Trouver votre chemin dans la documentation

Un **index** et une explication de la structure de la documentation peuvent être trouvés [ici](index.md), vous pouvez également y accéder en cliquant sur le logo **AAPS** en haut à gauche de la documentation. Vous y trouverez une vue d'ensemble des fonctionnalités décrites dans chaque chapitre de la documentation. Vous pouvez également utiliser le menu à gauche de cette page pour naviguer dans la documentation. Enfin, il y a une fonction de recherche bien pratique, directement en dessous du logo **AAPS**.

Notre objectif est de rendre facile à comprendre à la fois les capacités et les limitations de **AAPS**. Il peut être décevant de découvrir après avoir passé du temps à lire la documentation, que votre pompe à insuline ou votre MGC ne sont pas compatibles, ou que **AAPS** offre des fonctionnalités différentes de celles que vous attendiez.

De nombreux détails dans la documentation sur l'utilisation de **AAPS** prennent tout leur sens lorsque vous utilisez réellement **AAPS** en temps réel. Tout comme il est difficile d'apprendre un sport uniquement en lisant les règles, vous aurez besoin à la fois d'apprendre les règles fondamentales pour utiliser **AAPS** en toute sécurité, et de passer du temps à apprendre comment appliquer au mieux ces règles pendant que vous vous lancez dans l'utilisation d'**AAPS**.

(preparing-safety-first)=

## La sécurité avant tout
“Un grand pouvoir implique de grandes responsabilités... ”

### Sûreté technique
**AAPS** dispose d'un large éventail de fonctionnalités liées à la sûreté. Elles imposent des limitations qui sont progressivement retirées au fur et à mesure que vous complétez une série d'[Objectifs](Usage/Objectives.md) qui vous demandent d'utiliser des paramètres spécifiques et de répondre à des questions à choix multiple. **AAPS** débloque des fonctionnalités lorsque vous terminez un objectif avec succès. Ce processus permet à l'utilisateur d'évoluer en toute sécurité par étapes successives, de la Boucle Ouverte à la Boucle Fermée, tout en apprenant les différentes fonctionnalités de **AAPS**.

Les [Objectifs](Usage/Objectives.md) ont été conçus pour vous amener à une découverte la plus complète possible d'**AAPS**, et tiennent compte des erreurs communes et des tendances générales que les développeurs d'**AAPS** ont observées chez les nouveaux utilisateurs. Des erreurs peuvent arriver quand un débutant est inexpérimenté et trop impatient de commencer avec **AAPS** ou a négligé des éléments importants. Les [Objectifs](Usage/Objectives.md) ont été pensé pour minimiser ces problèmes.

### Sûreté médicale
```{admonition} Avoid permanent and painful damage to your eyes and nerves
:class: danger
Caution is advised concerning rapid improvements in blood glucose control and lowering of HbA1c 
```

An important safety consideration is that a **rapid reduction in HbA1c and improved blood glucose control in those who have had elevated glucose levels for some time can cause permanent damage**. Many people with diabetes are unaware of this, and not all clinicans make their patients aware of this issue.

This damage can include **sight loss, and permanent neuropathy (pain)**. It is possible to avoid this damage occuring, by reducing average glucose levels more slowly. If you currently have an elevated HbA1c and are moving to **AAPS** (or any other closed loop system), _please_ discuss this potential risk with your clinical team before starting, and agree a timescale with gradually decreasing safe glucose targets with them. You can easily set higher glucose targets in **AAPS** initially (currently, the highest target you can select is 10.6 mmol/L but you can also maintain a purposefully weak profile if needed), and then reduce the target as the months pass.

#### À quelle vitesse puis-je réduire mon HbA1c sans risquer des dommages permanents ?

One retrospective [study](https://pubmed.ncbi.nlm.nih.gov/1464975/) of 76 patients reported that the risk of progression of retinopathy increased by 1.6 times, 2.4 times and 3.8 times if the Hba1C dropped 1%, 2% or 3% respectively over a 6 month period. They suggested that the **"decrease in HbA1c value during any 6-month period should be limited to less than 2% in order to prevent the progression of retinopathy....Too rapid a decrease at the initiation of glycemic control could cause severe or transient exacerbation of the progression of retinopathy."**

N.B. If you use different HbA1c units (mmol/mol rather than %), click [here](https://www.diabetes.co.uk/hba1c-units-converter.html) for a HbA1c calculator tool.

In another retrospective [evaluation](https://academic.oup.com/brain/article/138/1/43/337923) of 954 patients, researchers noted that:

**"With a decrease in HbA1c of 2–3% points over 3 months there was a 20% absolute risk of developing treatment-induced neuropathy in diabetes, with a decrease in HbA1c of >4% points over 3 months the absolute risk of developing treatment-induced neuropathy in diabetes exceeded 80%."**

A [commentary](https://academic.oup.com/brain/article/138/1/2/340563) on this work agreed that to avoid complications **the goal should be to reduce A1c by <2% over 3 months.** You can read other reviews on the topic [here](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6587545/pdf/DOM-21-454.pdf) and [here](https://www.mdpi.com/1999-4923/15/7/1791).

It is generally recognised that _newly_ diagnosed type 1 diabetics (who often have very high HbA1c at diagnosis, before starting insulin therapy) appear to be able to rapidly reduce their HbA1c immediately after diagnosis without encountering these risks to the same extent, because they have not had elevated blood glucose levels for such a sustained period. However, it is still a consideration which you should discuss with your clinician.

### Aucun inhibiteur SGLT-2

```{admonition} NO SGLT-2 inhibitors
:class: danger
SGLT-2 inhibitors, also called gliflozins, inhibit reabsorption of glucose in the kidney. Gliflozins incalculably lower blood sugar levels, and so you MUST NOT take them while using a closed loop system like AAPS! There would be a significant risk of ketoacidosis and/or hypoglycemia! The combination of this medication with a system that lowers basal rates in order to increase BG is especially dangerous. 

In a nutshell:
- **Example 1: risk of Hypo**
>During lunch, you use **AAPS** to bolus based on consuming 45g of glucose. Le problème est que, sans qu'AAPS n'en sache rien, les inhibiteurs provoquent l'élimination d'une partie de ces glucides, ce qui fait que votre corps a trop d'insuline par rapport aux glucides absorbés, ce qui se traduira par une hypoglycémie.

- **Example 2: risk of Ketoacidosis**
>The inhibitors eliminate some of the carbs in the background causing a reduction in your BG. **AAPS** will automatically instruct the pump to decrease insulin intake  including basal. Le temps passant, cela peut avoir pour conséquence que votre glycémie reste inférieure à la cible au point que le corps n'a plus suffisamment d'insuline disponible pour absorber les glucides, ce qui provoquera une acidocétose. En règle générale, l'acidocétose se développe chez les patients DT1 à cause d'un problème de pompe, qui aurait déclenché des alertes sur le téléphone et aurait été remarquée en raison d'une glycémie élevée. Cependant, le danger avec les Gliflozines est qu'il n'y aurait pas d'alerte AAPS car la pompe est bien opérationnelle et la glycémie reste potentiellement dans la cible.  

Parmi les noms de médicaments inhibiteurs de SGLT-2 courants, on trouve : Invokana, Farxiga, Jardiance, Glyxambi, Synjardy, Steglatro et Xigduo XR, entre autres.
```


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

How long it takes to get to closed looping depends on the individual, but an approximate timescale for getting to full looping with AAPS can be found ([here](#how-long-will-it-take-to-set-everything-up))


#### Fichier de clés & exportation des paramètres de configuration

Le fichier « keystore » ou « magasin de clés » (fichier .jks) est un fichier chiffré par mot de passe unique utilisé pour la création de votre version personnelle de **AAPS**. Votre téléphone Android l'utilise pour s'assurer que personne d'autre ne peut mettre à jour votre version personnelle sans le magasin de clés. En bref, dans le cadre de la compilation d'**AAPS** vous devriez :

1.  Enregistrer le fichier de votre magasin de clés (fichier .jks utilisé pour signer votre application) dans un endroit sûr;

2.  Vous assurer de conserver le mot de passe de votre fichier de clés.


De cette façon, vous pourrez utiliser ce même fichier de clés à chaque fois qu'une nouvelle version de **AAPS** sera créée. En moyenne, vous aurez à faire 2 mises à jour d'**AAPS** chaque année.

Par ailleurs, **AAPS** vous donne la possibilité d'[exporter tous vos paramètres de configuration](Usage/ExportImportSettings.md). Cela vous permet de récupérer votre système en toute sécurité tout en changeant de téléphone, de mettre à jour/réinstaller l'application avec un minimum d'interruption. 

#### Résolution de problèmes

N''hésitez pas à contacter la communauté AAPS s'il y a des points sur lesquels vous avez des hésitations - il n'y a pas de question bête ! Tous les utilisateurs, quel que soit leur niveau d'expérience, sont encouragés à poser leurs questions. Les temps de réponse aux questions sont généralement courts, grâce au grand nombre d'utilisateurs d'**AAPS**.

##### [demandez de l'aide sur le groupe AAPS Facebook](https://www.facebook.com/groups/AndroidAPSUsers/)

##### [demandez de l'aide sur le serveur Discord pour AAPS](https://discord.gg/4fQUWHZ4Mw)





#### [Où aller pour obtenir de l'aide](Where-To-Go-For-Help/Background-reading.md)?

Cette section a pour but de fournir aux nouveaux utilisateurs des liens vers des ressources afin d'obtenir de l'aide, y compris l'accès au soutien de la communauté composé à la fois d'utilisateurs nouveaux et expérimentés qui peuvent clarifier les questions, et résoudre les pièges habituels qui peuvent subvenir avec AAPS.

#### [Pour les professionnels de santé](Resources/clinician-guide-to-AndroidAPS.md)

Il s'agit d'une [page adressée aux professionnels de santé](Resources/clinician-guide-to-AndroidAPS.md) qui veulent en savoir plus sur AAPS et la technologie de pancréas artificiel open source. Vous trouverez aussi des conseils sur [comment parler à votre équipe médicale](introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team) dans l'Introduction.

## Que va-t-on compiler et installer?

Ce schéma offre un aperçu des composants clés (matériel et logiciel) du système **AAPS** :

![préparation_vue_d_ensemble](./images/preparing_images/AAPS_preparing_overview_01.png)


En plus des trois composants matériels de base (téléphone, pompe, capteur de glycémie), nous avons également besoin de : 1) L'application **AAPS** 2) Un serveur de reporting et 3) Une application pour suivre la mesure en continu du glucose (MCG)

### 1) L'application Android pour téléphone : **AAPS**

**AAPS** est une application qui s'exécute sur les smartphones et appareils Android. You are going to build the **AAPS** app (an apk file) yourself, using a step-by-step guide, by downloading the **AAPS** source code from GitHub, installing the necessary programs (Android Studio, GitHub desktop) on your computer and building your own copy of **AAPS** app. Vous transférerez ensuite l'application **AAPS** sur votre smartphone (par e-mail, câble USB _etc._) et vous l'installerez.

### 2) Un serveur de reporting : NightScout (Tidepool*)

Afin de profiter de tous les avantages de **AAPS**, vous aurez besoin de configurer un serveur Nightscout. Vous pouvez le faire vous-même (lien vers les instructions) ou, à défaut, payer un petit abonnement pour un service Nightscout tout prêt installé (lien vers T1 pal 10.be etc). Nightscout est utilisé pour collecter les données de **AAPS** au fil du temps et peut générer des rapports détaillés mettant en relation les données de glycémie et d'insuline. Les aidants peuvent également utiliser Nightscout pour communiquer à distance avec l'application **AAPS**, pour superviser la gestion du diabète de leur enfant. Dans les fonctionnalités de communication à distance, on trouve la surveillance en temps réel de la glycémie et de l'insuline active, l'administration à distance d'insuline (par SMS) et les annonces de repas. Tenter d'analyser vos performances dans le suivi du diabète en examinant les données de glycémie séparément des données de la pompe, c'est comme conduire une voiture où le conducteur est aveugle et le passager décrit la scène.  Tidepool est disponible comme alternative à Nightscout, pour les versions AAPS 3.2 et ultérieures.

### 3) Application pour le capteur MGC

En fonction de votre capteur de glycémie/MGC, vous aurez besoin d'une application compatible pour recevoir les mesures de glycémie et les envoyer à **AAPS**. Les différentes options sont représentées ci-dessous et vous trouverez plus d'informations dans la [page des MGCs compatibles](./Configuration/BG-Source.md) :

![options_dexcom](./images/preparing_images/AAPS_connectivity_Dex_02.png) ![options_libres](./images/preparing_images/AAPSconnectivity_libre.png) ![options_eversense](./images/preparing_images/AAPS_connectivity_eversense.png)

### Maintenance du système **AAPS**

Aussi bien **Nightscout** qu'**AAPS** doivent être mis à jour environ une fois par an, car de nouvelles versions sont publiées. Dans certains cas, la mise à jour peut être repoussée, dans d'autres cas, elle est fortement recommandée ou considérée comme essentielle pour la sécurité. Ces mises à jour seront notifiées sur les groupes Facebook et les serveurs Discord. Les notes de version indiqueront clairement la marche à suivre. Il est probable que de nombreuses personnes se poseront des questions similaires aux vôtres au moment de la mise à jour, et vous trouverez le soutien nécessaire pour effectuer les mises à jour.

(preparing-how-long-will-it-take?)=
## Combien de temps pour tout mettre en place ?

Comme mentionné précédemment, l'utilisation de **AAPS** s'envisage au long terme et nécessite un investissement de votre temps personnel. Il ne s'agit pas d'une installation à faire une seule fois. Les estimations actuelles pour la compilation d'**AAPS**, l'installation et la configuration d'**AAPS** et de l'application de **MCG**, le passage d'une boucle ouverte à une boucle fermée hybride avec **AAPS** sont d'environ 2 à 3 mois en tout. Vous avez donc tout intérêt à commencer rapidement la compilation de l'application **AAPS** et à commencer à travailler sur les premiers objectifs dès que possible, même si vous utilisez toujours un système d'administration d'insuline différent (vous pouvez utiliser une pompe virtuelle jusqu'à l'objectif 5). Voici une estimation approximative du temps nécessaire :

| Tâches                                                                                                              |    Temps estimé    |
| ------------------------------------------------------------------------------------------------------------------- |:------------------:|
| lecture initiale de la documentation                                                                                |     1-2 jours      |
| installation/configuration du PC pour permettre la compilation                                                      |     2-8 heures     |
| mettre en place un serveur Nightscout                                                                               |       1 hour       |
| installer une application MGC (xdrip, BYODA, …)                                                                     |       1 hour       |
| configuration initiale MGC -> xdrip -> AAPS                                                                         |       1 hour       |
| configuration initiale AAPS -> pompe                                                                                |       1 hour       |
| configuration AAPS -> NightScout (rapports uniquement)                                                              |       1 hour       |
| optionnel (pour les aidants) - configuration de NightScout <-> **AAPS** & suiveurs NS                               |       1 hour       |
| Objectif 1 : Paramétrage de la visualisation et la surveillance des données, analyse des débits Basal et des ratios |       1 hour       |
| Objectif 2 : Apprendre à contrôler AAPS                                                                             |      2 heure       |
| Objectif 3 : Prouver ses connaissances                                                                              |  Jusqu'à 14 jours  |
| Objectif 4 : Démarrage de la boucle ouverte                                                                         |      7 jours       |
| Objectif 5 : Compréhension de la Boucle Ouverte, y compris les propositions de débits Basal temporaires             |      7 jours       |
| Objectif 6 : Démarrage de la boucle fermée avec le système AGB ( Arrêt pour Glycémie Basse )                        | Jusqu'à 5-14 jours |
| Objectif 7 : Réglage de la Boucle Fermée, augmentation de maxIA et abaissement progressif des cibles glycémiques    |  Jusqu'à 7 jours   |
| Objectif 8 : Ajustement des débits Basal et des ratios si nécessaire, puis activation de la fonction auto-sens      | Jusqu'à 7-14 jours |
| Objectif 9 : Activation de fonctionnalités oref1 supplémentaires, telles que la fonction SMB                        |  Jusqu'à 14 jours  |
| Objectif 10: Automatisation                                                                                         |       1 jour       |


Une fois que vous serez complètement opérationnel sur **AAPS**, vous aurez toujours besoin d'ajuster finement vos paramètres afin d'améliorer la gestion globale de votre diabète.

## Requirements

### Considérations médicales

En plus des avertissements médicaux dans la page sur la [sécurité](preparing-safety-frist), il y a des paramètres qui diffèrent selon l'insuline que vous utilisez dans la pompe.

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
The current version of **AAPS** (3.2) requires an Android smartphone with Google **Android 9.0 or above**. If you are considering buying a new phone, (as of July 2024), Android 13 is preferred. Users are strongly encouraged to keep their build of **AAPS** up to date for safety reasons, however for users unable to use a device with Android 9.0 or newer, earlier versions of  **AAPS** compatible for older Android versions like [Android 8](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2.1) and [Android 7](https://github.com/nightscout/AndroidAPS/releases/tag/2.6.2), remain available from previous releases (check the release notes for legacy versions).

#### Choix du modèle de smartphone
Vous choisirez un modèle précis en fonction de la/des fonction(s) que vous recherchez. Nous avons deux tableaux archivés listant les [smartphones](https://docs.google.com/spreadsheets/d/1zO-Vf3wv0jji5Gflk6pe48oi348ApF5RvMcI6NG5TnY/edit#gid=2097219952) compatibles et les [smartphones et montres](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435) compatibles. Ces tableaux ne sont plus mis à jour au vu du grand nombre de modèles possibles. Nous suggérons donc maintenant de faire une recherche dans les groupes de support (Facebook ou Discord) avec "phone", ou le modèle précis que vous envisagez d'acheter. Créez un nouveau post avec vos questions à ce sujet si vous avez encore besoin de davantage d'informations.

Pour faire un don d'un modèle de smartphone ou de smartwatch qui n'a pas encore été testé, veuillez envoyer un e-mail à [donations@androidaps.org](mailto:donations@androidaps.org).

- [Liste des téléphones testés](../Getting-Started/Phones.md)
- [Jelly Settings](../Usage/jelly.md)
- [Paramètres Huawei](../Usage/huawei.md)

Les utilisateurs sont encouragés à faire les mises à jour de version Android sur leur téléphone, y compris avec les mises à jour de sécurité. Cependant, si démarrez avec **AAPS** ou si vous n'êtes pas à l'aise techniquement, vous voudrez peut-être attendre pour faire la mise à jour de votre téléphone que d'autres l'aient fait et aient confirmé le bon fonctionnement des applications, sur nos différents forums.

```{admonition} delaying Samsung phones updates
:class: warning
Samsung has an unfortunate track record of forcing updates of their phones which cause bluetooth connectivity issues. Pour désactiver ces mises à jour forcées, vous devez passer le téléphone en "mode développeur" en :
 accédant aux paramètres, puis "à propos", puis en tapant sur "Numéro de version" jusqu'à ce qu'il confirme que vous avez déverrouillé le mode développeur. Retournez au menu principal des paramètres, ici ou dans "Système", vous trouverez un nouvel élément de menu "Options pour les développeurs". Open developer options and scroll to find auto system update and turn it off
```

```{admonition} Google Play Protect potential Issue
:class: warning
There have been several reports of **AAPS** being shut down arbitrarily by Google Play Protect every morning. Si ça vous arrive, allez dans les options de Google Play et désactivez “Google Play Protect”. Tous les modèles de téléphone et toutes les versions d'Android ne sont pas concernés.
```

