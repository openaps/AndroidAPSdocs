# Vue d'ensemble des composants

AAPS n'est pas seulement une application (faite vous même), c'est juste un des modules fonctionnels de votre système de boucle fermée. Avant de décider des composants, ce serait une bonne idée de jeter aussi un oeil à la [configuration des composants](index-component-setup).

![Components overview](../images/modules.png)

```{note}
**AVIS DE SÉCURITÉ IMPORTANT**

La base des fonctions de sécurité d'AAPS présentée dans cette documentation s'appuie sur les fonctions de sécurité du matériel utilisé pour construire votre système. Il est extrêmement important que vous utilisiez uniquement une pompe à insuline et un capteur de MGC approuvés FDA/CE pour mettre en oeuvre une boucle fermée d'administration automatique d'insuline. Les modifications matérielles ou logicielles de ces composants peuvent entraîner un dosage incorrect de l'insuline, causant un risque significatif pour l'utilisateur. Si vous trouvez ou recevez des pompes à insuline ou des récepteurs MGC cassés, modifiés ou fabriqués par vos soins, *ne les utilisez pas* pour créer un système AAPS.

De plus, il est également important d'utiliser uniquement des fournitures d'origine telles que serteurs, canules et réservoirs d'insuline approuvés par le fabricant pour une utilisation avec votre pompe ou votre MGC. L'utilisation de consommables non testés ou modifiés peut entraîner une imprécision du MGC et des erreurs de dosage de l'insuline. L'insuline est très dangereuse lorsqu'elle est mal dosée - veuillez ne pas jouer avec votre vie en piratant avec vos fournitures.

Enfin et surtout, vous ne devez pas prendre d'inhibiteurs du SGLT-2 (gliflozines), car ils abaissent de façon incalculable la glycémie.  La combinaison avec un système qui réduit les débits de base pour augmenter la glycémie est particulièrement dangereuse car en raison de la gliflozine, cette augmentation de glycémie pourrait ne pas se produire et un état dangereux d'absence d'insuline peut se produire.
```

## Composants Nécessaires

### Un bon algorithme de dosage individuel pour votre diabète

Même si ce n'est pas quelque chose à créer ou à acheter, c'est le "composant" qui est probablement le plus sous-estimé, mais essentiel. Quand vous laissez un algorithme vous aider à gérer votre diabète, il doit en connaître les bons réglages pour ne pas faire de graves erreurs. Même si d'autres composants vous manquent, vous pouvez déjà vérifier et adapter votre « profil » en collaboration avec votre équipe médicale. La plupart des "boucleurs" utilisent le rythme circadien pour les DB, la SI et le G/I, qui adaptent la sensibilité à l'insuline hormonale durant la journée.

Le profil inclut :

- DB (débits de basal)
- SI (sensibilité à l'insuline) est la baisse de glycémie que provoque une unité d'insuline
- G/I (ratio Glucides / Insuline) est la quantité de glucides en grammes par unité d'insuline
- DAI (durée d'action de l'insuline).

(module-no-use-of-sglt-2-inhibitors)=
### Ne pas utiliser d'inhibiteurs SGLT-2

Les inhibiteurs SGLT-2, aussi appelés gliflozines, empêchent la réabsorption du glucose dans le rein. Comme ils abaissent de façon incalculable la glycémie, vous NE DEVEZ PAS les prendre en utilisant un système à boucle fermée comme AAPS! Il y aurait un risque énorme d'une acidocétose ou d'une hypoglycémie ! La combinaison de ce médicament avec un système qui abaisse les débits de basal pour augmenter la glycémie est particulièrement dangereuse car en raison de la gliflozine, cette augmentation de Gly pourrait ne pas se produire et un état dangereux d'absence d'insuline peut se produire.

(module-phone)=
### Téléphone

The current version of AAPS requires an Android smartphone with Google Android 9.0 or above. So if you are thinking about a new phone, Android 9 is recommended at a minimum but optimally choose Android 10 or 12. For older Android versions, older AAPS versions are available see: [Release notes](../Maintenance/ReleaseNotes.md#android-version-and-aaps-version)

Les utilisateurs ont créé une [liste de téléphones et montres testés](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing)

Pour enregistrer un téléphone ou une montre qui n'est pas déjà dans la feuille de calcul, veuillez remplir le [formulaire](https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform).

En cas de problème avec la feuille de calcul, merci d'envoyer un mail à [hardware@androidaps.org](mailto:hardware@androidaps.org), pour tous les dons de téléphone/montre qui ont encore besoin d'être testés, merci d'envoyer un mail à [donations@androidaps.org](mailto:hardware@androidaps.org).

### Pompe à insuline

AAPS fonctionne **actuellement** avec

- [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump.md)  (Old driver that uses the additional Ruffy app)
- [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) (New driver, available starting with AndroidAPS v.3.2)
- [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)
- [DanaR](../CompatiblePumps/DanaR-Insulin-Pump.md)
- [DanaRS](../CompatiblePumps/DanaRS-Insulin-Pump.md)
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md)
- [Diaconn G8 ](../CompatiblePumps/DiaconnG8.md)
- [EOPatch2](../CompatiblePumps/EOPatch2.md)
- [Omnipod Eros](../CompatiblePumps/OmnipodEros.md)  ([additional communication device](#additional-communication-device) needed)
- [Omnipod Dash](../CompatiblePumps/OmnipodDASH.md)
- [Medtrum Nano](../CompatiblePumps/MedtrumNano.md)
- [Medtrum 300U](../CompatiblePumps/MedtrumNano.md)
- Certain older [Medtronic](../CompatiblePumps/MedtronicPump.md) ([additional communication device](#additional-communication-device) needed)

Si aucun périphérique de communication supplémentaire n'est indiqué, la communication entre la pompe à insuline et AAPS est basée sur la puce bluetooth intégrée dans Android sans avoir besoin d'un boitier supplémentaire.

**Other pumps** that may have the potential to work with AAPS are listed on the [Future (possible) Pumps](../CompatiblePumps/Future-possible-Pump-Drivers.md) page.

(module-additional-communication-device)=
#### Périphérique de communication additionnel

Pour les anciennes pompes medtronic, un périphérique de communication supplémentaire (en plus de votre téléphone) est nécessaire pour "traduire" le signal radio de la pompe vers le Bluetooth. Assurez-vous de choisir la bonne version en fonction de votre pompe.

- ![OrangeLink](../images/omnipod/OrangeLink.png)  [Site internet OrangeLink](https://getrileylink.org/product/orangelink)
- ![RileyLink](../images/omnipod/RileyLink.png) [RileyLink 433MHz](https://getrileylink.org/product/rileylink433)
- ![EmaLink](../images/omnipod/EmaLink.png)  [Site internet Emalink](https://github.com/sks01/EmaLink) - [Contact](mailto:getemalink@gmail.com)
- ![DiaLink](../images/omnipod/DiaLink.png)  DiaLink - [Contact](mailto:Boshetyn@ukr.net)
- ![LoopLink](../images/omnipod/LoopLink.png)  [Site internet LoopLink](https://www.getlooplink.org/) - [Contact](https://jameswedding.substack.com/) - Non testé

**Alors quelle est la meilleure pompe pour boucler avec AAPS ?**

La Combo, l'Insight et les anciennes Medtronics sont des pompes solides et bouclables. La Combo offre l’avantage d'avoir un choix parmi beaucoup plus de sets d’infusion, car elle est dotée d’un verrouillage Luer standard. Et elle est alimentée par une pile standard que vous pouvez acheter dans n'importe quelle station service, un magasin de proximité 24 heures / 24 et si vous en avez vraiment besoin, vous pouvez l'emprunter à la télécommande de votre chambre d'hôtel ;-).

Les avantages de la DanaR/RS et Dana-i vs. la Combo comme choix de pompe de choix sont :

- Les pompes Dana se connectent à presque tous les téléphones avec Android >= 5.1 sans avoir besoin de flasher le Lineage OS. Si votre téléphone se casse, vous pouvez trouver facilement n'importe quel téléphone qui fonctionne avec les pompes Dana en remplacement rapide... ce n'est pas aussi facile avec la Combo. (Cela pourrait changer à l'avenir quand Android 8.1 sera plus populaire)
- L'appairage initial est plus simple avec la Dana-i/RS. Mais en général, vous ne le faites qu'une seule fois, cela n'a d'impact que si vous voulez tester une nouvelle fonctionnalité avec des pompes différentes.
- Jusqu'à présent, le Combo fonctionne avec l'écran en veille. En général, cela fonctionne bien, mais c'est lent. Pour le bouclage, cela n'a pas d'importance car tout fonctionne en arrière-plan. Il y a beaucoup plus de connections BT, donc plus de risques où la connexion BT pourrait se rompre, ce qui n'est pas si facile si vous vous éloignez de votre téléphone par ex. en faisant votre bolus tout en cuisinant.
- La Combo vibre à la fin des DBTs (Basal Temporaire), la DanaR vibre (ou bips) sur les SMB. La nuit, vous êtes susceptibles de plus utiliser les DBT que les SMB.  Le Dana-i/RS est configurable pour ne pas émettre de bip ni vibrer.
- La lecture de l'historique sur le Dana-i/RS en quelques secondes avec des glucides permet de changer facilement de téléphone en mode hors connexion et de poursuivre la boucle dès que des valeurs de MGC sont lues.
- Toutes les pompes avec lesquelles AAPS peut parler sont étanches à la livraison. Seules les pompes Dana sont également "étanches par garantie" en raison du compartiment de batteries scellées et du système de remplissage du réservoir.

### Source GLY

Voici un bref aperçu de tous les MGC/MGF compatibles avec AAPS. For further details, look [here](CompatiblesCgms.md). Juste une petite astuce : si vous voulez afficher vos glycémies dans l'application xDrip+ ou dans le site web Nightscout, vous pouvez choisir xDrip+ (ou Nightscout avec connexion web) comme source de glycémie dans AAPS.

- [Dexcom G7](../CompatibleCgms/DexcomG7.md): Works with xDrip+ or patched app
- [Dexcom G6](../CompatibleCgms/DexcomG6.md): BOYDA is recommended as of version 3.0 (see [release notes](../Maintenance/ReleaseNotes.md#version-300) for details). xDrip+ doit être au moins la version 2022.01.14 ou plus récente
- [Dexcom G5](../CompatibleCgms/DexcomG5.md): It works with xDrip+ app or patched Dexcom app
- [Libre 3](../CompatibleCgms/Libre3.md): It works with xDrip+ (no transmitter needed)
- [Libre 2](../CompatibleCgms/Libre2.md): It works with xDrip+ (no transmitter needed)
- [Libre 1](../CompatibleCgms/Libre1.md): You need a transmitter like Bluecon or MiaoMiao for it (build or buy) and xDrip+ app
- [Eversense](../CompatibleCgms/Eversense.md): It works so far only in combination with ESEL app and a patched Eversense-App (works not with Dana RS and LineageOS, but DanaRS and Android or Combo and Lineage OS work fine)
- [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md): quite complicated with a lot of extra stuff
- [PocTech](../CompatibleCgms/PocTech.md)

### Nightscout

Nightscout est une application Web open source qui peut enregistrer et afficher vos données MGC / AAPS et créer des rapports. Vous pouvez trouver plus d'informations sur le [site web du projet Nightscout](http://nightscout.github.io/). Vous pouvez créer votre propre [site web Nightscout](https://nightscout.github.io/nightscout/new_user/), utilisez la configuration semi-automatisée Nightscout sur [zehn.be](https://ns.10be.de/en/index.html) ou l'héberger sur votre propre serveur (c'est pour les experts en informatique).

Nightscout est indépendant des autres modules. Vous en aurez besoin pour réaliser l'objectif 1.

Additional information on how to configure Nightscout for use with AAPS can be found [here](../SettingUpAaps/Nightscout.md).

### Fichier apk de AAPS

Le composant de base du système. Avant d'installer l'application, vous devez d'abord construire le fichier apk (qui est l'extension pour une application Android). Instructions are  [here](../SettingUpAaps/BuildingAaps.md).

## Composants optionnels

### Montres connectées

Vous pouvez choisir n'importe quelle montre connectée avec Android Wear 1.x et plus. Most loopers wear a Sony Smartwatch 3 (SWR50) as it is the only watch that can get readings from Dexcom G6/G5 when phone is out of range. D'autres montres peuvent également être patchées pour fonctionner comme récepteur indépendant (voir [cette documentation](https://github.com/NightscoutFoundation/xDrip/wiki/Patching-Android-Wear-devices-for-use-with-the-G5) pour plus de détails).

Les utilisateurs sont en train de créer une [liste des téléphones et des montres testées](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing). There are different watchfaces for use with AAPS, which you can find [here](../UsefulLinks/WearOsSmartwatch.md).

Pour enregistrer un téléphone ou une montre qui n'est pas déjà dans la feuille de calcul, veuillez remplir le [formulaire](https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform).

En cas de problème avec la feuille de calcul, merci d'envoyer un mail à [hardware@androidaps.org](mailto:hardware@androidaps.org), pour tous les dons de téléphone/montre qui ont encore besoin d'être testés, merci d'envoyer un mail à [donations@androidaps.org](mailto:hardware@androidaps.org).

### xDrip+

Même si vous n'avez pas besoin d'avoir l'application xDrip+ en tant que Source GLY, vous pouvez toujours l'utiliser par ex. pour les alertes ou pour un bon affichage des glycémies. Vous pouvez avoir autant d'alarmes que vous le souhaitez, spécifier l'heure à laquelle l'alarme doit être active, si elle peut remplacer le mode silencieux, etc. Some xDrip+ information can be found [here](../CompatibleCgms/xDrip.md). Veuillez noter que les documentations de cette application ne sont pas toujours à jour car leur progression est assez rapide.

## Que faire en attendant les composants

Il faut parfois un certain temps pour pouvoir activer tous les composants pour fermer la boucle. Mais pas de soucis, il y a beaucoup de choses que vous pouvez faire en attendant. Il est NECESSAIRE de vérifier et (le cas échéant) adapter les débits de basal (DB), ratio Glucide/Insulin (G/I), la sensibilité à l'insulin (SI) etc. Et la boucle ouverte peut être un bon moyen pour tester le système, et se familiariser avec AAPS. En utilisant ce mode, AAPS donne des conseils de traitement que vous pouvez exécuter manuellement.

Vous pouvez continuer à lire la documentation ici présente, entrer en contact avec d'autres boucleurs en ligne ou hors ligne, [lire les documentations](../Where-To-Go-For-Help/Background-reading.md) ou ce que d'autres boucleurs ont écrits (vous devez toutefois rester prudent, tout n'est pas correct ou adapté à votre situation).

**Done?** If you have your AAPS components all together (congrats!) or at least enough to start in open loop mode, you should first read through the [Objective description](../SettingUpAaps/CompletingTheObjectives.md) before each new Objective and setup up your [hardware](index-component-setup).
