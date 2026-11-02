# Montres connectées et AAPS

Diverses montres connectées peuvent afficher une partie des informations disponibles dans **AAPS** ou effectuer des actions à distance.

Pour qu'une montre connectée contrôle directement **AAPS** (pompe et capteur), il faut une montre Android complète (considérée comme un petit [smartphone](./Phones.md)).

Certaines montres connectées vous permettent de saisir des traitements, ou plus, mais c'est toujours le téléphone qui gère **AAPS**.

Les montres connectées sont de plus en plus utilisées avec **AAPS**, _à la fois_ par les adultes diabétiques et par les aidants/parents d'enfants diabétiques.

## Avantages généraux des montres connectées avec **AAPS**


Selon le modèle, les montres connectées peuvent être utilisées de nombreuses façons avec **AAPS**. Elles peuvent servir à contrôler **AAPS** en totalité ou en partie, ou simplement à vérifier à distance la glycémie, l'insuline active et d'autres paramètres.

Associer une montre connectée à **AAPS** peut être utile dans de nombreuses situations, par exemple en conduisant une voiture ou une moto (ou un vélo) et pendant le sport. Certaines personnes trouvent que regarder une montre (en réunion, en soirée, à table, etc.) est plus discret que regarder un téléphone. Du point de vue de la sécurité, une montre connectée peut aussi être utile en déplacement : l'utilisateur peut garder son téléphone **AAPS** hors de vue (par exemple dans un sac) tout en utilisant la montre pour le contrôle à distance.

## Avantages particuliers pour les parents/aidants qui utilisent **AAPS**

For a child - if their **AAPS** phone is nearby - a caregiver can use a smartwatch to monitor or make modifications without needing to use the **AAPS** phone. Cela peut être utile, par exemple, si le téléphone **AAPS** est rangé dans une ceinture de pompe.

Une montre connectée peut être utilisée _en plus_ ou _à la place_ des options basées sur le TÉLÉPHONE pour le contrôle à distance ou le [suivi uniquement](../RemoteFeatures/FollowingOnly.md).

De plus, contrairement aux téléphones suiveurs des parents/aidants (qui dépendent du réseau mobile ou du Wi-Fi), les montres connectées en Bluetooth peuvent être utiles dans des endroits isolés, comme une grotte, un bateau ou à mi-hauteur d'une montagne. Si les deux appareils (téléphone **AAPS** et montre connectée) sont sur le même réseau Wi-Fi, ils peuvent aussi utiliser le Wi-Fi.

## Différents types d'interactions entre montre connectée et AAPS

Il existe actuellement cinq façons principales d'utiliser une montre connectée avec **AAPS**. Elles sont présentées dans le tableau ci-dessous : 

| Configuration de la montre  | Fonctions                                                    | Prérequis                                                                                                                                                                                                                                                                                                                                                             |
| --------------------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Autonome                    | AAPS sans téléphone                                          | Montre connectée Android complète (vérifier la version Android minimale)</br> Exécutant **app-fullRelease**                                                                                                                                                                                                                                                           |
| Contrôle à distance complet | La plupart des fonctions d'AAPS                              | Montre Android **Wear OS** (vérifier Android/API)</br>Exécutant **wear-fullRelease**                                                                                                                                                                                                                                                                                  |
| Contrôle à distance         | Fonctions d'AAPSClient                                       | Montre Android **Wear OS** (vérifier Android/API)</br>Exécutant **[wear-aapsclientRelease](https://github.com/nightscout/AndroidAPS/releases)**                                                                                                                                                                                                                       |
| Contrôle à distance         | Certaines fonctions d'AAPSClient                             | Montres Garmin</br>(anciennes configurations Samsung Tizen et Fitbit seulement, non recommandées)</br>Voir ci-dessous.                                                                                                                                                                                                                                                |
| Affichage                   | Glycémie, tendance, IA, GA, état de la boucle et de la pompe | De nombreuses montres connectées, grâce à une application compagnon sur le téléphone **AAPS** alimentée par la diffusion [Applications compagnon externes](#watches-external-companion-apps) : [WatchDrip+](https://bigdigital.home.blog/) (Xiaomi, Amazfit), [GlucoDataHandler](https://github.com/pachi81/GlucoDataHandler) (Wear OS), G-Watch</br>Voir ci-dessous. |

## Avant d'acheter une montre connectée…

Le modèle exact de montre à acheter dépend de la ou des fonctions souhaitées. Vous trouverez des informations utiles sur la [page Téléphones](#Phones-list-of-tested-phones), dont une liste de téléphones testés qui contient aussi quelques montres connectées.

Les marques de montres populaires sont Samsung Galaxy, Garmin, Fossil et Mi Band. Les différentes options résumées dans le tableau ci-dessus sont expliquées plus en détail ci-dessous, pour vous aider à choisir la montre connectée adaptée à votre situation.

Si vous associez une montre connectée à **AAPS** sur un téléphone pour interagir à distance avec **AAPS**, vous devez aussi vérifier que les deux appareils sont compatibles entre eux, surtout si votre téléphone est ancien ou peu courant.

En général, si vous voulez seulement suivre la glycémie sans interagir avec **AAPS**, vous avez un choix plus large de montres simples et abordables.

La meilleure façon de choisir une montre connectée est de chercher les messages sur les « montres » dans les groupes **AAPS** sur Discord ou Facebook. Lisez les expériences des autres, et posez vos questions précises si les anciens messages n'y répondent pas.

## Android complet

Cela semble une option intéressante, n'est-ce pas ? However, at present, only a few enthusiasts are experimenting with **AAPS** on a stand-alone watch. Peu de montres connectées ont une interface correcte et fonctionnent aussi bien en autonome avec **AAPS** et votre application MGC. Les modèles populaires sont les LEMFO LEM 15 Pro et 16. Vous devez installer sur la montre l'apk « full » d'**AAPS** (l'apk qui est normalement installé sur un smartphone) et non l'apk « wear » d'**AAPS**.

Il n'existe pas de critère clair pour savoir si une montre fonctionnera bien avec **AAPS** en autonome, mais les paramètres suivants vous aideront :

1)  Android 12 ou plus récent. 2)  Pouvoir sortir le cadran du mode « carré » pour avoir un texte plus grand et plus facile à lire. 3)  Une très bonne autonomie de batterie. 4)  Une bonne portée Bluetooth.

La plupart des difficultés avec les montres **AAPS** autonomes viennent de l'utilisation d'un très petit écran, et du fait que l'interface actuelle de l'application AAPS complète n'a pas été conçue pour une montre. You may prefer to use a stylus to edit **AAPS** settings on the watch, due to the restricted screen size, and some AAPS buttons may not be visible on the watch screen.

Autres difficultés : il est difficile d'avoir une autonomie de batterie suffisante, et les montres avec une batterie suffisante sont souvent grosses et épaisses. Les utilisateurs signalent des problèmes avec le système et les paramètres d'économie d'énergie, des difficultés pour démarrer les capteurs sur la montre, une faible portée Bluetooth (pour garder la connexion avec le capteur et la pompe) et une étanchéité douteuse. Des exemples sont visibles sur les photos ci-dessous.

![image](../images/6d787373-bc0c-404d-89aa-54d3127c4a6f.png)

If you are interested in setting up a standalone watch, read the posts and comments on the **AAPS** Facebook group (good search options are “standalone” and “Lemfo”) and Discord for more information.

## Wear OS

Le code d'**AAPS** contient une extension d'application qui peut être installée sur les [montres connectées **Wear OS**](https://wearos.google.com/#oem-carousel).

![Configuration > Communication avec Montre activé](../images/v4/Configuration/configuration_communication_wear.png)

Vérifiez que votre montre connectée remplit les [conditions requises](#maintenance-android-version-aaps-version) par **AAPS**.

### Qu'_est-ce_ que Wear OS ?

Les trois premières options de montre connectée nécessitent que **Wear OS** soit installé sur la montre.

**Wear OS** est le système d'exploitation de certaines montres connectées Android modernes. Si la description de la montre connectée indique seulement une _compatibilité_ avec Android et iOS, cela ne veut pas dire qu'elle fonctionne sous Wear OS. Il peut s'agir d'un autre système d'exploitation propre au fabricant, qui n'est pas compatible avec **AAPS**. Pour installer et utiliser n'importe quelle version d'**AAPS** ou d'**AAPSClient**, une montre connectée doit fonctionner sous **Wear OS 3.0, 3.2 ou 3.5** (Android 11, niveau d'API 30) **ou plus récent**. Chaque version de Wear OS suit la version d'Android sur laquelle elle est basée : **Wear OS 3** correspond à Android 11 (niveau d'API 30), **Wear OS 4** à Android 13 (niveau d'API 33), **Wear OS 5** à Android 14 (niveau d'API 34) et **Wear OS 6** à Android 16 (niveau d'API 36). Les montres sous Wear OS 2 ne peuvent pas exécuter **AAPS**.

Si vous installez le wear.apk d'**AAPS** sur une montre **Wear OS**, vous pouvez choisir parmi plusieurs cadrans **AAPS** personnalisés. Vous pouvez aussi utiliser un cadran standard de la montre, avec vos informations **AAPS** dans de petites zones appelées « complications » sur le cadran. Une complication est tout élément affiché sur un cadran en plus de l'heure.

```{note}
Les changements récents de **Wear OS** cassent peu à peu les cadrans **AAPS** personnalisés (plus la version de Wear OS est récente, plus c'est grave), mais les **complications** continuent de fonctionner. Avant d'acheter ou de mettre à jour une montre, lisez [Changements des cadrans Wear OS](#wearos-watchface-changes).
```


### À quoi pourrait ressembler ma montre connectée ?

Après avoir [installé **AAPS** sur votre montre](../WearOS/WearOsSmartwatch.md), vous pourrez directement choisir votre cadran préféré parmi ces cadrans dédiés à **AAPS**. Sur la plupart des montres, il suffit d'appuyer longuement sur l'écran d'accueil jusqu'à ce que l'écran se réduise, puis de glisser vers la droite pour choisir un autre écran :

![image](../images/67fd75f3-721c-438d-be01-1a8e03532290.png)

Ce sont les écrans de base intégrés à **AAPS**. Il existe [d'autres cadrans](#WearOS_changing-to-AAPS-watchface) et vous pouvez aussi utiliser des [complications](#Watchfaces-complications).

### Comment utiliser une montre Wear OS au quotidien ?

Vous trouverez plus de détails sur les cadrans et l'utilisation au quotidien, y compris comment créer (et partager) votre propre cadran personnalisé, dans la section [Montre connectée Wear OS](../WearOS/WearOsSmartwatch.md).

(Watchfaces-tizen)= (watches-external-companion-apps)=

## Applications compagnon externes

**AAPS** peut diffuser son état aux autres applications installées sur le même téléphone : glycémie et tendance, IA, GA, basal et débit basal temporaire, nom du profil, état de la boucle, batterie du téléphone et de la pompe, niveau du réservoir et progression du bolus. Plusieurs applications compagnon pour montres lisent cette diffusion et affichent les données sur des montres qu'**AAPS** ne prend pas en charge directement. Pour envoyer les données, activez **Applications compagnon externes** dans **Configuration** > **Communication** (voir [Applications compagnon externes](#external-companion-apps) sur la page Configuration). La diffusion est envoyée à chaque nouvelle valeur et ne peut pas être demandée : un bouton d'actualisation dans l'application compagnon n'a aucun effet sur **AAPS**.

![Configuration > Communication : la carte Applications compagnon externes](../images/v4/Configuration/configuration_external_companion_apps.png)

Applications compagnon connues pour utiliser cette diffusion :

- [WatchDrip+](https://bigdigital.home.blog/) pour les montres Xiaomi et Amazfit, voir [Montres Xiaomi et Amazfit](#watches-xiaomi-amazfit) ci-dessous.
- [GlucoDataHandler](https://github.com/pachi81/GlucoDataHandler) pour les montres Wear OS, comme complication ou widget. C'est une solution de secours utile sur les versions de Wear OS où les cadrans **AAPS** ne sont pas fiables, voir [Montre connectée Wear OS](../WearOS/WearOsSmartwatch.md). Son application compagnon GlucoDataAuto affiche les mêmes données dans une voiture avec Android Auto.
- [Application G-Watch](https://play.google.com/store/apps/details?id=sk.trupici.g_watch) pour les montres Samsung Tizen, et sa version ultérieure pour Wear OS. Dans les anciennes versions d'**AAPS**, le plugin s'appelait **Samsung Tizen**, d'après cette application.

```{warning}
L'**application G-Watch** et sa version **Wear OS** ne sont plus maintenues, et Samsung est passé de Tizen à Wear OS sur ses montres connectées. G-Watch ne concerne que les anciennes configurations existantes et n'est pas recommandé pour une nouvelle installation. Consultez le [groupe Facebook](https://www.facebook.com/groups/gwatchapp) dédié pour les dernières nouvelles.
```

(Watchfaces-garmin)=

## Garmin

Il existe des cadrans Garmin qui s'intègrent à [AAPS](https://apps.garmin.com/search?keywords=androidaps), sur la boutique Garmin ConnectIQ.

![Configuration > Communication : la carte Garmin](../images/v4/Configuration/configuration_garmin.png)

[AAPS Glucose Watch](https://apps.garmin.com/apps/3d163641-8b13-456e-84c3-470ecd781fb1) s'intègre directement à **AAPS**. Il affiche les données d'état de la boucle (insuline active, débit basal temporaire) en plus des valeurs de glycémie, et envoie la fréquence cardiaque à **AAPS**. Il est disponible sur la boutique ConnectIQ ; activez le plugin **Garmin** dans **Configuration → Communication**. ![Cadran AAPS Glucose Watch avec champs numérotés](../images/Garmin_WF-annotated.png)

1. Valeurs de glycémie la plus haute et la plus basse sur le graphique
2. Variation de la glycémie par minute
3. Insuline Active (IA)
4. Temps depuis la dernière valeur de glycémie (minutes:secondes)
5. Débit basal temporaire, en pourcentage du débit basal du profil
6. Graphique de glycémie des 2 dernières heures
7. Glycémie actuelle



## Fitbit

```{warning}
Google intègre Fitbit dans Google Health et retire les applications et cadrans tiers des montres Fitbit dans l'UE. Les cadrans Fitbit ne sont donc **plus une option recommandée**, et acheter une Fitbit pour l'utiliser avec **AAPS** n'est pas recommandé.
```

Pour les montres Fitbit existantes, les [pages web de Nightscout](https://nightscout.github.io/nightscout/wearable/#fitbit) listent quelques options de surveillance seule, comme [Glance](https://glancewatchface.com/). Ce sont aussi des cadrans tiers, donc la même restriction de l'UE s'applique.

## Suivi uniquement

Ces montres connectées affichent certaines informations d'**AAPS** ; certaines nécessitent d'autres applications.

Il existe un large choix de montres connectées abordables qui permettent seulement l'affichage. Si vous utilisez Nightscout, vous trouverez un bon aperçu de toutes les options [ici](https://nightscout.github.io/nightscout/wearable/#)

Voici quelques options de montres de suivi uniquement, populaires chez les utilisateurs d'**AAPS** :

(watches-xiaomi-amazfit)=
### Montres Xiaomi et Amazfit

**WatchDrip+** est une application compagnon développée par la communauté, qui affiche les données de glycémie et de boucle sur divers modèles de montres connectées, surtout des marques Xiaomi (_par ex._ Mi Band) et Amazfit :

![image](../images/4dba454b-f808-4e9e-bfc6-aba698e006f8.png)

Depuis la version 0.5, **WatchDrip+** lit ses données directement depuis **AAPS**, sans passer par xDrip+. Sur le téléphone **AAPS** :

1. Activez **Applications compagnon externes** dans **Configuration** > **Communication**, voir [ci-dessus](#watches-external-companion-apps). Cela fournit la glycémie actuelle, le delta, la flèche de tendance, l'IA et l'état de la pompe.
2. Activez le plugin **xDrip** dans **Configuration** > **Communication** et activez **Envoyer l'état à xDrip+** dans ses paramètres. Cela fournit la ligne d'état IA/GA, et le graphique de glycémie sur la montre se remplit après quelques valeurs.
3. Si xDrip+ est installé sur le téléphone, désactivez son **Broadcast Service API** (xDrip+ > Settings > Inter-app settings) pour que la montre ne reçoive pas les données deux fois. Si xDrip+ servait seulement à transmettre les données à la montre, vous pouvez le désinstaller.

Le bouton d'actualisation de WatchDrip+ n'a aucun effet avec **AAPS** : les données arrivent à chaque nouvelle valeur.


Vous pouvez en savoir plus sur ces montres, y compris comment les configurer, sur le [site de WatchDrip+](https://bigdigital.home.blog/). L'avantage de ces montres est qu'elles sont petites et assez abordables. Elles sont une option populaire, surtout pour les enfants et les personnes aux poignets plus fins.

### Montre Pebble

![image](../images/52032f3b-c871-4342-b8e7-659c285a39c8.png)

![image](../images/935d28bb-a909-4ca8-850d-6a765bd4fcde.png)


Les montres Pebble ([plus fabriquées](https://en.wikipedia.org/wiki/Pebble_(watch))) ont été vendues de 2013 à 2016, et on peut encore en trouver d'occasion. Fitbit a repris les actifs de Pebble. Les utilisateurs de Pebble peuvent utiliser le cadran Urchin pour voir les données de Nightscout. Les données affichées peuvent inclure l'IA, le débit basal temporaire actif et les prédictions. If open looping you can use IFTTT to create an applet that says if a Notification has been received from **AAPS** then send either an SMS or pushover notification.

### [Montres Bluejay](https://bluejay.website/)


![Montre BlueJay U3](../images/watches/bluejay_u3.png)


Ce sont des appareils uniques qui peuvent recevoir les données de glycémie **directement** du transmetteur Dexcom. On sait peu que les transmetteurs Dexcom G6/G7 diffusent en fait la glycémie actuelle sur _deux_ canaux séparés : un canal téléphone et un canal médical. Les montres Bluejay peuvent être réglées pour recevoir la glycémie sur l'un ou l'autre canal : si **AAPS** utilise le canal téléphone, les montres Bluejay peuvent utiliser le canal médical.

Le principal avantage est que la montre est indépendante du téléphone et du système de boucle. Par exemple, si vous déconnectez la pompe et laissez le téléphone **AAPS** à la plage ou dans un parc d'attractions, et que vous êtes hors de portée du téléphone **AAPS**, vous pouvez quand même recevoir les valeurs de votre Dexcom directement sur la montre Bluejay.

La **Bluejay GTS** d'origine n'est plus fabriquée et ne peut pas lire le Dexcom G7. Les modèles suivants (U1, puis l'actuelle **U3**, vendue en accès anticipé au moment de la rédaction) sont des montres Android complètes avec xDrip, qui reçoivent directement les données du Dexcom G6 et G7. Le fabricant présente la montre comme un outil de recherche, pas pour un usage médical. Les inconvénients signalés sont qu'elle ne reçoit pas toujours une valeur toutes les 5 minutes et que la batterie doit être rechargée souvent. Consultez le [site Bluejay](https://bluejay.website/) pour le modèle actuel et sa disponibilité.

### Apple Watch

Consultez [Nightscout sur votre montre](https://nightscout.github.io/nightscout/wearable/#).

L'Apple Watch prend maintenant en charge la connexion directe au G7 et peut être utilisée en même temps qu'**AAPS**.

