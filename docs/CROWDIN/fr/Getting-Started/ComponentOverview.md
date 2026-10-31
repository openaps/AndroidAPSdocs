# Vue d'ensemble des composants

**AAPS** n'est pas seulement une application (que vous compilez vous-même) ; c'est l'un des composants de votre système de boucle fermée. Avant de choisir les composants, il est utile de lire leur documentation.

![Aperçu des composants](../images/modules.png)

```{admonition} IMPORTANT SAFETY NOTICE
:class: important

La base des fonctions de sécurité d'**AAPS** décrites dans cette documentation repose sur les fonctions de sécurité du matériel utilisé pour construire votre système. Pour fermer une boucle d'administration automatisée d'insuline, il est extrêmement important d'utiliser uniquement une pompe à insuline et un MGC testés, en parfait état de marche et approuvés par les autorités officielles de votre pays. Les modifications matérielles ou logicielles de ces composants peuvent entraîner un dosage incorrect de l'insuline, causant un risque significatif pour l'utilisateur. Si vous trouvez ou si l'on vous propose des pompes à insuline ou des récepteurs de MGC endommagés, modifiés ou faits maison, **ne les utilisez pas** pour créer un système **AAPS**.

De plus, il est également important d'utiliser uniquement des fournitures d'origine telles que serteurs, canules et réservoirs d'insuline approuvés par le fabricant pour une utilisation avec votre pompe ou votre MGC. L'utilisation de consommables non testés ou modifiés peut entraîner une imprécision du MGC et des erreurs de dosage de l'insuline. L'insuline est très dangereuse lorsqu'elle est mal dosée - veuillez ne pas jouer avec votre vie en piratant avec vos fournitures.

Enfin et surtout, vous ne devez pas prendre d'inhibiteurs du SGLT-2 (gliflozines), car ils abaissent la glycémie de façon imprévisible. La combinaison avec un système qui réduit les débits de base pour augmenter la glycémie est particulièrement dangereuse car en raison de la gliflozine, cette augmentation de glycémie pourrait ne pas se produire et un état dangereux d'absence d'insuline peut se produire. [Plus d'informations ici](#PreparingForAaps-no-sglt-2-inhibitors).
```

## Composants Nécessaires

### Un bon algorithme de dosage individuel pour votre diabète

Ce n'est pas quelque chose à créer ou à acheter, mais c'est sans doute le « composant » le plus sous-estimé, et il est essentiel. Quand vous laissez un algorithme vous aider à gérer votre diabète, il doit connaître les bons paramètres pour ne pas faire de graves erreurs. Même si d'autres composants vous manquent, vous pouvez déjà vérifier et adapter votre **Profil** en collaboration avec votre équipe médicale.

Le **Profil** comprend :

- DB (débit basal) : fournit l'insuline de fond ;
- SI (sensibilité à l'insuline) : de combien votre glycémie va diminuer pour une unité d'insuline ;
- G/I (ratio glucides/insuline) : combien de grammes de glucides sont couverts par une unité d'insuline.

La plupart des boucleurs utilisent le rythme circadien pour les DB, la SI et le G/I, qui adaptent la sensibilité à l'insuline hormonale durant la journée.

En plus de votre **Profil**, vous devez aussi configurer votre **insuline** dans **Gestion → Paramètres Insuline**, y compris sa DAI (durée d'action de l'insuline). Voir [Paramètres Insuline](#Config-Builder-insulin-dia).

Plus d'informations sur votre **Profil** [sur la page dédiée](../SettingUpAaps/YourAapsProfile.md).

### Téléphone

Voir la page dédiée [Téléphones](../Getting-Started/Phones.md).

### Pompe à insuline

Voir la page dédiée [Pompes compatibles](../Getting-Started/CompatiblePumps.md).

**Avantages et inconvénients de certains modèles de pompe**

La Combo, l'Insight et les anciennes Medtronic sont des pompes solides, et utilisables en boucle. La Combo a l'avantage d'offrir beaucoup plus de types de sets de perfusion, car elle a un raccord Luer-Lock standard. Et sa pile est une pile standard que vous pouvez acheter dans n'importe quelle station-service ou épicerie ouverte 24 h/24. Si vous en avez vraiment besoin, vous pouvez la voler/emprunter à la télécommande de votre chambre d'hôtel ;-).

Cependant, les avantages de la DanaR/RS et de la Dana-i par rapport à la Combo sont :

- L'appairage initial est plus simple avec la Dana-i/RS. Mais en général, vous ne le faites qu'une seule fois, cela n'a d'impact que si vous voulez tester une nouvelle fonctionnalité avec des pompes différentes.
- Jusqu'à présent, la Combo fonctionne par lecture de l'écran. En général, cela fonctionne bien, mais c'est lent. Pour le bouclage, cela n'a pas d'importance car tout fonctionne en arrière-plan. Cependant, la pompe doit rester connectée beaucoup plus longtemps, donc la connexion BT a plus de risques de se couper. Ce n'est pas pratique si vous vous éloignez de votre téléphone pendant un bolus, par exemple en cuisinant.
- La Combo vibre à la fin des DBT, la DanaR vibre (ou émet un bip) lors des SMB. La nuit, vous utiliserez probablement plus les DBT que les SMB.  La Dana-i/RS peut être configurée pour n'émettre ni bip ni vibration.
- Avec la Dana-i/RS, l'historique, y compris les glucides, est lu en quelques secondes. Il est donc facile de changer de téléphone hors ligne et de continuer la boucle dès que quelques valeurs du MGC arrivent.
- Toutes les pompes avec lesquelles **AAPS** peut communiquer sont étanches à la livraison. Seules les pompes Dana sont également "étanches par garantie" en raison du compartiment de batteries scellées et du système de remplissage du réservoir.

### Source GLY

Voir la page dédiée [MGC compatibles](../Getting-Started/CompatiblesCgms.md).

### Fichier **AAPS**-.apk

Le principal composant du système. Pour installer l'application, vous devez d'abord compiler le fichier apk vous-même. Les instructions sont [ici](../SettingUpAaps/BuildingAaps.md).

### Serveur de rapports

Un serveur de rapports affiche vos données de glycémie et de traitements, et crée des rapports pour une analyse détaillée. Il existe actuellement deux serveurs de rapports utilisables avec AAPS : [Nightscout](#SettingUpTheReportingServer-nightscout) et [Tidepool](#SettingUpTheReportingServer-tidepool). Ils offrent tous les deux la possibilité de visualiser vos données sur le diabète dans le temps, fournissent des statistiques sur le **temps dans la cible** (Time In Range - TIR) et d'autres mesures.

Le serveur de rapports est indépendant des autres composants. Si vous ne voulez pas utiliser de serveur de rapports, sachez qu'il n'est pas obligatoire pour faire fonctionner **AAPS** sur le long terme. Mais vous devez quand même en configurer un, car il est nécessaire pour valider l'[**Objectif 1**](#objectives-objective1).

Vous trouverez [ici](../SettingUpAaps/SettingUpTheReportingServer.md) plus d'informations sur la configuration de votre serveur de rapports.

## Composants optionnels

### Montres connectées

Vous pouvez choisir n'importe quelle montre connectée avec **Wear OS 3** ou plus récent. Voir [Montres connectées et AAPS](../Getting-Started/Watches.md) pour plus de détails.

Les utilisateurs créent une [liste des téléphones et montres testés](#Phones-list-of-tested-phones). Il y a plusieurs cadrans disponibles pour **AAPS** que vous pouvez trouver [ici](../WearOS/WearOsSmartwatch.md).

### xDrip

Même si vous n'avez pas besoin de l'application xDrip comme **Source GLY**, vous pouvez quand même l'utiliser, par exemple pour les alarmes ou pour un autre affichage de la glycémie. Vous pouvez créer autant d'alarmes que vous voulez, choisir à quelle heure une alarme est active, choisir si elle peut ignorer le mode silencieux, etc. Vous trouverez [ici](../CompatibleCgms/xDrip.md) quelques informations sur xDrip. Attention : la documentation de cette application n'est pas toujours à jour, car elle change vite.

## Que faire en attendant les composants

Cela peut prendre du temps de réunir tous les composants nécessaires pour une boucle fermée. Mais pas de soucis, il y a beaucoup de choses que vous pouvez faire en attendant. Il est **nécessaire** de vérifier et (si besoin) d'adapter les débits de basal (DB), le ratio glucides/insuline (G/I), la sensibilité à l'insuline (SI), etc. Et la boucle ouverte peut être un bon moyen de tester le système, et se familiariser avec **AAPS**. En utilisant ce mode, **AAPS** donne des recommandations de traitement, que vous pouvez appliquer manuellement.

Vous pouvez continuer à lire la documentation ici, entrer en contact avec d'autres boucleurs en ligne ou hors ligne, [lire](../UsefulLinks/BackgroundReading.md) de la documentation ou ce que d'autres boucleurs écrivent (mais restez prudent : tout n'est pas correct ni bon à reproduire pour vous).

**Terminé ?** Si vous avez tous vos composants **AAPS** (félicitations !) ou au moins assez pour démarrer en mode boucle ouverte, lisez d'abord la [description des objectifs](../SettingUpAaps/CompletingTheObjectives.md) avant chaque nouvel objectif, et configurez votre matériel.
