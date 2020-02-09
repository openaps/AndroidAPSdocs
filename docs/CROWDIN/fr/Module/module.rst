Vue d'ensemble des composants 
**************************************************
AndroidAPS n'est pas seulement une application (faite vous même), c'est juste un des modules fonctionnels de votre système de boucle fermée. Avant de décider des composants, ce serait une bonne idée de jeter un oeil à la `configuration des composants <https://androidaps.readthedocs.io/en/dev/EN/index.html#component-setup>`_.
   
.. image:: ../images/modules.png
  :alt: Compontents overview

.. note:: 
   ** AVIS DE SÉCURITÉ IMPORTANT * *

   La base des fonctions de sécurité d'AndroidAPS présentée dans cette documentation s'appuie sur les fonctions de sécurité du matériel utilisé pour construire votre système. Il est extrêmement important que vous utilisiez uniquement une pompe à insuline et un capteur de MGC approuvés FDA/CE pour mettre en oeuvre une boucle fermée d'administration automatique d'insuline. Les modifications matérielles ou logicielles de ces composants peuvent entraîner un dosage incorrect de l'insuline, causant un risque significatif pour l'utilisateur. Si vous trouvez ou recevez des pompes à insuline ou des récepteurs CGM cassés, modifiés ou fabriqués par vos soins, *ne les utilisez pas* pour créer un système AndroidAPS.

   De plus, il est également important d'utiliser uniquement des fournitures d'origine telles que serteurs, canules et réservoirs d'insuline approuvés par le fabricant pour une utilisation avec votre pompe ou votre MGC. L'utilisation de consommables non testés ou modifiés peut entraîner une imprécision du MGC et des erreurs de dosage de l'insuline. L'insuline est très dangereuse lorsqu'elle est mal dosée - veuillez ne pas jouer avec votre vie en piratant avec vos fournitures.
   
   Enfin et surtout, vous ne devez pas prendre d'inhibiteurs du SGLT-2 (gliflozines), car ils abaissent de façon incalculable la glycémie.  La combinaison avec un système qui réduit les débits de base pour augmenter la glycémie est particulièrement dangereuse car en raison de la gliflozine, cette augmentation de glycémie pourrait ne pas se produire et un état dangereux d'absence d'insuline peut se produire.

Modules Nécessaires
==================================================
Un bon algorithme de dosage individuel pour votre diabète
--------------------------------------------------
Même si ce n'est pas quelque chose à créer ou à acheter, c'est le "module" qui est probablement le plus sous-estimé, mais essentiel. Quand vous laissez un algorithme vous aider à gérer votre diabète, il doit en connaître les bons réglages pour ne pas faire de graves erreurs.
Même si d'autres modules vous manquent, vous pouvez déjà vérifier et adapter votre « profil » en collaboration avec votre équipe médicale. 
La plupart des "boucleurs" utilisent le rythme circadienpour les DB, la SI et le G/I, qui adaptent la sensibilité à l'insuline hormonale durant la journée.

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
Il vous faut un smartphone Android avec Google Android 6.0 ou supérieur. Les utilisateurs sont en train de créer une `liste des téléphones et des montres testées <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_

Pour enregistrer un téléphone ou une montre qui n'est pas déjà dans la feuille de calcul, veuillez remplir le `formulaire <https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform>`_.

En cas de problème avec la feuille de calcul, merci d'envoyer un mail à `hardware@androidaps.org <mailto:hardware@androidaps.org>`_, pour tous les dons de téléphone/montre qui ont encore besoin d'être testés, merci d'envoyer un mail à `donations@androidaps.org <mailto:hardware@androidaps.org>`_.

Pompe à insuline
--------------------------------------------------
AndroidAPS fonctionne **actuellement** avec 

- `Accu-Chek Combo <../Configuration/Accu-Chek-Combo-Pump.html>`_ (également nécessaire : application Ruffy, LineageOS ou Android 8.1 sur votre téléphone)
- `Accu-Chek Insight <../Configuration/Accu-Chek-Insight-Pump.html>`_ 
- `DanaR <../Configuration/DanaR-Insulin-Pump.html>`_ 
- `DanaRS <../Configuration/DanaRS-Insulin-Pump.html>`_  
- `quelques vieilles pompes Medtronic <../Configuration/MedtronicPump.html>`_ à partir de la version 2.4 (également nécessaires : RileyLink/Gnarl, téléphone Android avec bluetooth basse énergie / puce BLE)

**D'autres pompes ** qui peuvent potentiellement fonctionner avec AndroidAPS sont listées sur la page `Futures pompes (possible) <../Getting-Started/Future-possible-Pump-Drivers.html>`_.

Si vous avez besoin d'acheter ** à titre privé** une pompe alors vous pouvez trouver différents distributeurs dans ` cette feuille de calcul <https://drive.google.com/open?id=1CRfmmjA-0h_9nkRViP3J9FyflT9eu-a8HeMrhrKzKz0>` _, veuillez s'il vous plaît partager les détails de la vôtre si elle n'est pas déjà listée.

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
Nightscout est une application Web open source qui peut enregistrer et afficher vos données MGC / AndroidAPS et créer des rapports. Vous pouvez trouver plus d'informations sur le `site web du projet Nightscout <http://www.nightscout.info/>`_. Vous pouvez créer votre propre site web Nightscout `en utilisant Heroku <http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku>`_, utilisez la configuration semi-automatisée Nightscout sur `zehn.be <https://ns.10be.de/en/index.html>`_ ou l'héberger sur votre propre serveur (c'est pour les experts en informatique).

Nightscout est indépendant des autres modules. Vous en aurez besoin pour réaliser l'objectif 1.

Des informations supplémentaires sur la configuration de Nightscout pour l'utiliser avec AndroidAPS peuvent être trouvées `ici <../Installing-AndroidAPS/Nightscout.html>`_.

Fichier apk de AAPS
--------------------------------------------------
Le composant de base du système. Avant d'installer l'application, vous devez d'abord construire le fichier apk (qui est l'extension pour une application Android). Les instructions sont `ici <../Installing-AndroidAPS/Building-APK.html>`_.  

Modules optionnels
==================================================
Montres connectées
--------------------------------------------------
You can choose any smartwatch with Android Wear 1.x and above. Most loopers wear a Sony Smartwatch 3 (SWR50) as it is the only watch that can get readings from Dexcom G5/G5 when phone is out of range. Some other watches can be patched to work as a standalone receiver as well (see `this documentation <https://github.com/NightscoutFoundation/xDrip/wiki/Patching-Android-Wear-devices-for-use-with-the-G5>`_ for more details).

Les utilisateurs sont en train de créer une `liste des téléphones et des montres testées <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_. There are different watchfaces for use with AndroidAPS, which you can find `here <../Configuration/Watchfaces.html>`_.

Pour enregistrer un téléphone ou une montre qui n'est pas déjà dans la feuille de calcul, veuillez remplir le `formulaire <https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform>`_.

En cas de problème avec la feuille de calcul, merci d'envoyer un mail à `hardware@androidaps.org <mailto:hardware@androidaps.org>`_, pour tous les dons de téléphone/montre qui ont encore besoin d'être testés, merci d'envoyer un mail à `donations@androidaps.org <mailto:hardware@androidaps.org>`_.

xDrip+
--------------------------------------------------
Even if you don't need to have the xDrip+ App as BG Source, you can still use it for i.e. alarms or a good blood glucose display. You can have as many as alarms as you want, specify the time when the alarm should be active, if it can override silent mode, etc. Some xDrip+ information can be found `here <../Configuration/xdrip.html>`_. Please be aware that the documentations to this app are not always up to date as its progress is quite fast.

Exemple de configuration
==================================================
If you want to get a step by step example, you might want to look at a sample setup. The first sample setup is quite old, but should be still up-to-date.

.. toctree::
   :maxdepth: 1
   :glob:
   
   Sample Setup <../Getting-Started/Sample-Setup.rst>
 
  
What to do while waiting for modules
==================================================
It sometimes takes a while to get all modules for closing the loop. But no worries, there are a lot of things you can do while waiting. It is NECESSARY to check and (where approporiate) adapt basal rates (BR), insulin-carbration (IC), insulin-sensitivity-factors (ISF) etc. And maybe open loop can be a good way to test the system and get familiar with AndroidAPS. Using this mode, AndroidAPS gives treatment advices you can manually execute.

You can keep on reading through the docs here, get in touch with other loopers online or offline, `read <https://androidaps.readthedocs.io/en/dev/EN/Where-To-Go-For-Help/Background-reading.html>`_ documentations or what other loopers write (even if you have to be careful, not everything is correct or good for you to reproduce).

**Done?**
If you have your AAPS components all together (congrats!) or at least enough to start in open loop mode, you should first read through the `Objective description <../Usage/Objectives.html>`_ before each new Objective and setup up your `hardware <../index.html#component-setup>`_.
