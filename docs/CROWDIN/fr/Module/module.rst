Vue d'ensemble des composants 
**************************************************
AndroidAPS n'est pas seulement une application (faite vous même), c'est juste un des modules fonctionnels de votre système de boucle fermée. Avant de décider des composants, ce serait une bonne idée de jeter un oeil à la `configuration des composants <../index.html#configuration-des-composants>`_.
   
.. image:: ../images/modules.png
  :alt: Compontents overview

.. note:: 
   **AVIS DE SÉCURITÉ IMPORTANT**

   La base des fonctions de sécurité d'AndroidAPS présentée dans cette documentation s'appuie sur les fonctions de sécurité du matériel utilisé pour construire votre système. Il est extrêmement important que vous utilisiez uniquement une pompe à insuline et un capteur de MGC approuvés FDA/CE pour mettre en oeuvre une boucle fermée d'administration automatique d'insuline. Les modifications matérielles ou logicielles de ces composants peuvent entraîner un dosage incorrect de l'insuline, causant un risque significatif pour l'utilisateur. Si vous trouvez ou recevez des pompes à insuline ou des récepteurs CGM cassés, modifiés ou fabriqués par vos soins, *ne les utilisez pas* pour créer un système AndroidAPS.

   De plus, il est également important d'utiliser uniquement des fournitures d'origine telles que serteurs, canules et réservoirs d'insuline approuvés par le fabricant pour une utilisation avec votre pompe ou votre MGC. L'utilisation de consommables non testés ou modifiés peut entraîner une imprécision du MGC et des erreurs de dosage de l'insuline. L'insuline est très dangereuse lorsqu'elle est mal dosée - veuillez ne pas jouer avec votre vie en piratant avec vos fournitures.
   
   Enfin et surtout, vous ne devez pas prendre d'inhibiteurs du SGLT-2 (gliflozines), car ils abaissent de façon incalculable la glycémie.  La combinaison avec un système qui réduit les débits de base pour augmenter la glycémie est particulièrement dangereuse car en raison de la gliflozine, cette augmentation de glycémie pourrait ne pas se produire et un état dangereux d'absence d'insuline peut se produire.

Composants Nécessaires
==================================================
Un bon algorithme de dosage individuel pour votre diabète
--------------------------------------------------
Même si ce n'est pas quelque chose à créer ou à acheter, c'est le "composant" qui est probablement le plus sous-estimé, mais essentiel. Quand vous laissez un algorithme vous aider à gérer votre diabète, il doit en connaître les bons réglages pour ne pas faire de graves erreurs.
Même si d'autres composants vous manquent, vous pouvez déjà vérifier et adapter votre « profil » en collaboration avec votre équipe médicale. 
La plupart des "boucleurs" utilisent le rythme circadien pour les DB, la SI et le G/I, qui adaptent la sensibilité à l'insuline hormonale durant la journée.

Le profil inclut :

* DB (débits de basal)
* SI (sensibilité à l'insuline) est la baisse de glycémie que provoque une unité d'insuline
* G/I (ratio Glucides / Insuline) est la quantité de glucides en grammes par unité d'insuline
* DAI (durée d'action de l'insuline).

Ne pas utiliser d'inhibiteurs SGLT-2
--------------------------------------------------
Les inhibiteurs SGLT-2, aussi appelés gliflozines, empêchent la réabsorption du glucose dans le rein. Comme ils abaissent de façon incalculable la glycémie, vous NE DEVEZ PAS les prendre en utilisant un système à boucle fermée comme AndroidAPS! Il y aurait un risque énorme d'une acidocétose ou d'une hypoglycémie ! La combinaison de ce médicament avec un système qui abaisse les débits de basal pour augmenter la glycémie est particulièrement dangereuse car en raison de la gliflozine, cette augmentation de Gly pourrait ne pas se produire et un état dangereux d'absence d'insuline peut se produire.

Téléphone
--------------------------------------------------
Il vous faut un smartphone Android avec Google Android 7.0 ou supérieur. Donc si vous pensez à un nouveau téléphone, un Android 8.1 minimum est recommandé mais choisissez de préférence une version Android 9 ou 10.

Les utilisateurs sont en train de créer une `liste des téléphones et des montres testées <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_

Pour enregistrer un téléphone ou une montre qui n'est pas déjà dans la feuille de calcul, veuillez remplir le `formulaire <https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform>`_.

En cas de problème avec la feuille de calcul, merci d'envoyer un mail à `hardware@androidaps.org <mailto:hardware@androidaps.org>`_, pour tous les dons de téléphone/montre qui ont encore besoin d'être testés, merci d'envoyer un mail à `donations@androidaps.org <mailto:hardware@androidaps.org>`_.

Pompe à insuline
--------------------------------------------------
AndroidAPS fonctionne **actuellement** avec 

- `Accu-Chek Combo <../Configuration/Accu-Chek-Combo-Pump.html>`_ (également nécessaire : application Ruffy, LineageOS ou Android 8.1 sur votre téléphone)
- `Accu-Chek Insight <../Configuration/Accu-Chek-Insight-Pump.html>`_ 
- `DanaR <../Configuration/DanaR-Insulin-Pump.html>`_ 
- `DanaRS <../Configuration/DanaRS-Insulin-Pump.html>`_ (sauf les pompes avec le nouveau firmware v3) 
- `quelques vieilles pompes Medtronic <../Configuration/MedtronicPump.html>`_ à partir de la version 2.4 (également nécessaires : RileyLink/Gnarl, téléphone Android avec bluetooth basse énergie / puce BLE)

**D'autres pompes**, qui peuvent potentiellement fonctionner avec AndroidAPS, sont listées sur la page `Futures pompes (possible) <../Getting-Started/Future-possible-Pump-Drivers.html>`_.

Si vous avez besoin d'acheter **à titre privé** une pompe alors vous pouvez trouver différents distributeurs dans `cette feuille de calcul <https://drive.google.com/open?id=1CRfmmjA-0h_9nkRViP3J9FyflT9eu-a8HeMrhrKzKz0>`_, veuillez s'il vous plaît partager les détails de la vôtre si elle n'est pas déjà listée.

**Alors quelle est la meilleure pompe pour boucler avec AndroidAPS ?**

La Combo, l'Insight et les anciennes Medtronics sont des pompes solides et bouclables. La Combo offre l’avantage d'avoir un choix parmi beaucoup plus de sets d’infusion, car elle est dotée d’un verrouillage Luer standard. Et elle est alimentée par une pile standard que vous pouvez acheter dans n'importe quelle station service, un magasin de proximité 24 heures / 24 et si vous en avez vraiment besoin, vous pouvez l'emprunter à la télécommande de votre chambre d'hôtel ;-).

Les avantages de la DanaR/RS vs. la Combo comme choix de pompe de choix sont :

- La pompe Dana *R/RS se connecte à presque tous les téléphones avec Android >= 5.1 sans avoir besoin de flasher le Lineage OS. Si votre téléphone se casse, vous pouvez trouver facilement en remplacement n'importe quel téléphone qui fonctionne avec les pompes DanaR/RS... ce n'est pas aussi facile avec la Combo. (Cela pourrait changer à l'avenir quand Android 8.1 sera plus populaire)
- L'appairement initial est plus simple avec la Dana* RS. Mais en général, vous ne le faites qu'une seule fois, cela n'a d'impact que si vous voulez tester une nouvelle fonctionnalité avec des pompes différentes.
- Jusqu'à présent, le Combo fonctionne avec l'écran en veille. En général, cela fonctionne bien, mais c'est lent. Pour le bouclage, cela n'a pas d'importance car tout fonctionne en arrière-plan. Il y a beaucoup plus de connections BT, donc plus de risques où la connexion BT pourrait se rompre, ce qui n'est pas si facile si vous vous éloignez de votre téléphone par ex. en faisant votre bolus tout en cuisinant. 
- La Combo vibre à la fin des DBTs (Basal Temporaire), la Dana* R vibre (ou bips) sur les SMB. La nuit, vous êtes susceptibles de plus utiliser les DBT que les SMB.  Le Dana * RS est configurable pour ne pas émettre de bip ni vibrer.
- La lecture de l'historique sur le RS en quelques secondes avec des glucides permet de changer facilement de téléphone en mode hors connexion et de poursuivre la boucle dès que des valeurs de MGC sont lues.
- Toutes les pompes avec lesquelles AndroidAPS peut parler sont étanches à la livraison. Seules les pompes Dana sont également "étanches par garantie" en raison du compartiment de batteries scellées et du système de remplissage du réservoir. 

Source GLY
--------------------------------------------------
Voici un bref aperçu de tous les MGC/MGF compatibles avec AndroidAPS. Pour plus de détails, consultez `ceci <../Configuration/BG-Source.html>`_. Juste une petite astuce : si vous voulez afficher vos glycémies dans l'application xDrip+ ou dans le site web Nightscout, vous pouvez choisir xDrip+ (ou Nightscout avec connexion web) comme source de glycémie dans AAPS.

* `Dexcom G6 <../Hardware/DexcomG6.html>`_ : Il fonctionne avec l'application xDrip+ ou l'application Dexcom patchée
* `Dexcom G5 <../Hardware/DexcomG5.html>`_ : Il fonctionne avec l'application xDrip+ ou l'application Dexcom patchée
* `Dexcom G4 <../Hardware/DexcomG4.html>`_ : Ces capteurs sont assez anciens, mais vous pouvez trouver les instructions sur la façon de les utiliser avec l'application xDrip+
* `Libre 2 <../Hardware/Libre2.html>`_ : Il fonctioinne avec xDrip+ (pas besoin de transmetteur), mais vous devez compiler votre propre application patchée
* `Libre 1 <../Hardware/Libre1.html>`_ : Vous avez besoin d'un transmetteur comme le Bluecon ou le MiaoMiao pour lui (acheté ou fabriqué) et l'application xDrip+
* `Eversense <../Hardware/Eversense.html>`_ : Il ne marche pour l'instant qu'avec l'application ESEL et une application Eversense patchée (il ne marche pas avec DanaRS et un LineageOS, mais DanaRS et Android ou Combo et Lineage OS marchent bien)
* `Enlite <../Hardware/MM640g.html>`_ : assez compliqué avec pas mal de choses supplémentaires à faire


Nightscout
--------------------------------------------------
Nightscout est une application Web open source qui peut enregistrer et afficher vos données MGC / AndroidAPS et créer des rapports. Vous pouvez trouver plus d'informations sur le `site web du projet Nightscout <http://www.nightscout.info/>`_. Vous pouvez créer votre propre `site web Nightscout <https://nightscout.github.io/nightscout/new_user/>`_, utilisez la configuration semi-automatisée Nightscout sur `zehn.be <https://ns.10be.de/en/index.html>`_ ou l'héberger sur votre propre serveur (c'est pour les experts en informatique).

Nightscout est indépendant des autres modules. Vous en aurez besoin pour réaliser l'objectif 1.

Des informations supplémentaires sur la configuration de Nightscout pour l'utiliser avec AndroidAPS peuvent être trouvées `ici <../Installing-AndroidAPS/Nightscout.html>`_.

Fichier apk de AAPS
--------------------------------------------------
Le composant de base du système. Avant d'installer l'application, vous devez d'abord construire le fichier apk (qui est l'extension pour une application Android). Les instructions sont `ici <../Installing-AndroidAPS/Building-APK.html>`_.  

Composants optionnels
==================================================
Montres connectées
--------------------------------------------------
Vous pouvez choisir n'importe quelle montre connectée avec Android Wear 1.x et plus. La plupart des boucleurs portent une montre Sony Smartwatch 3 (SWR50) car c'est la seule montre qui peut obtenir des lectures de Dexcom G5/G6 quand le téléphone est hors de portée. D'autres montres peuvent également être patchées pour fonctionner comme récepteur indépendant (voir `cette documentation <https://github.com/NightscoutFoundation/xDrip/wiki/Patching-Android-Wear-devices-for-use-with-the-G5>`_ pour plus de détails).

Les utilisateurs sont en train de créer une `liste des téléphones et des montres testées <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_. Ils y a plusieurs cadrans disponibles pour AndroidAPS que vous pouvez trouver `ici <../Configuration/Watchfaces.html>`_.

Pour enregistrer un téléphone ou une montre qui n'est pas déjà dans la feuille de calcul, veuillez remplir le `formulaire <https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform>`_.

En cas de problème avec la feuille de calcul, merci d'envoyer un mail à `hardware@androidaps.org <mailto:hardware@androidaps.org>`_, pour tous les dons de téléphone/montre qui ont encore besoin d'être testés, merci d'envoyer un mail à `donations@androidaps.org <mailto:hardware@androidaps.org>`_.

xDrip+
--------------------------------------------------
Même si vous n'avez pas besoin d'avoir l'application xDrip+ en tant que Source GLY, vous pouvez toujours l'utiliser par ex. pour les alertes ou pour un bon affichage des glycémies. Vous pouvez avoir autant d'alarmes que vous le souhaitez, spécifier l'heure à laquelle l'alarme doit être active, si elle peut remplacer le mode silencieux, etc. Certaines informations xDrip+ peuvent être trouvées `ici <../Configuration/xdrip.html>`_. Veuillez noter que les documentations de cette application ne sont pas toujours à jour car leur progression est assez rapide.

Exemple de configuration
==================================================
Si vous souhaitez obtenir un exemple d'étape par étape, vous pouvez consulter un exemple de configuration. Le premier exemple de configuration est assez ancien, mais il doit être encore à jour.

.. toctree::
   :maxdepth: 1
   :glob:
   
   Exemple de configuration <../Getting-Started/Sample-Setup.rst>
 
  
Que faire en attendant les composants
==================================================
Il faut parfois un certain temps pour pouvoir activer tous les composants pour fermer la boucle. Mais pas de soucis, il y a beaucoup de choses que vous pouvez faire en attendant. Il est NECESSAIRE de vérifier et (le cas échéant) adapter les débits de basal (DB), ratio Glucide/Insulin (G/I), la sensibilité à l'insulin (SI) etc. Et la boucle ouverte peut être un bon moyen pour tester le système, et se familiariser avec AndroidAPS. En utilisant ce mode, AndroidAPS donne des conseils de traitement que vous pouvez exécuter manuellement.

Vous pouvez continuer à lire la documentation ici présente, entrer en contact avec d'autres boucleurs en ligne ou hors ligne, `lire les documentations <https://androidaps.readthedocs.io/en/latest/CROWDIN/fr/Where-To-Go-For-Help/Background-reading.html>`_ ou ce que d'autres boucleurs ont écrits (vous devez toutefois rester prudent, tout n'est pas correct ou adapté à votre situation).

**Fini ?**
Si vous avez tous vos composants AAPS ensemble (bravo !) ou au moins suffisamment pour pouvoir démarrer en mode Boucle Ouverte, vous devez d'abord lire la page `Objectifs <../Usage/Objectives.html>`_ avant chaque nouvel objectif et configurer vos `composants <../index.html#configuration-des-composants>`_.
