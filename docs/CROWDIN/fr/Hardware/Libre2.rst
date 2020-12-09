Freestyle Libre 2
**************************************************

Le système Freestyle Libre 2 peut automatiquement signaler des niveaux de glycémie dangereux. Le capteur Libre2 envoie le taux de glycémie actuel à un récepteur (lecteur ou smartphone) chaque minute. Le récepteur déclenche une alarme si nécessaire. Avec une application LibreLink modifiée par vous-même et l'application xDrip+, vous pouvez recevoir en permanence votre taux de sucre dans le sang sur votre smartphone. 

Le capteur peut être étalonné de -40 mg/dl à +20 mg/dl (-2,2 mmol/l à +1,1 mmol/l) pour ajuster les différences entre les glycémies capillaires et les lectures des capteurs.

Les glycémies peuvent également être transmise avec un émetteur BT comme avec le Libre1.

Important note : This does not work with the US version of the Freestyle 2 sensor ! The US version will only connect to a reader, not a phone.

Étape 1 : Construire votre propre application Librelink patchée
==================================================

Pour des raisons légales, le soi-disant correctifs doit être fait par vous-même. Utilisez les moteurs de recherche pour trouver les liens correspondants. Il y a deux principales variantes : L'application patchée d'origine recommandée bloque tout trafic Internet pour éviter le suivi. L'autre variante supporte LibreView qui peut être nécessaire pour votre médecin.

L'application patchée doit être installée à la place de l'application d'origine. Le prochain capteur demarré avec elle transmettra les valeurs GLY actuelles via bluetooth à l'application xDrip+ qui s'exécute sur votre smartphone.

Important : Pour éviter d'éventuels problèmes, il peut être utile dans un premier temps d'installer et de désinstaller l'application originale sur un smartphone compatible NFC. Le NFC doit être activé. Cela ne consomme pas plus d'énergie. Installez ensuite l'application patchée. 

L'application patchée peut être identifiée par la notification d'autorisation au premier plan. Le service d'autorisation au premier plan améliore la stabilité de la connexion par rapport à l'application d'origine qui n'utilise pas ce service.

.. image:: ../images/Libre2_ForegroundServiceNotification.png
  :alt: LibreLink Foreground Service

D'autres indications pourraient être le logo Linux pingouin à trois points -> Info ou la police de l'application patchée. Ces critères sont facultatifs selon la source d'application que vous choisissez.

.. image:: ../images/LibreLinkPatchedCheck.png
  :alt: Vérification de la police LibreLink

Assurez-vous que NFC est activé, activez l'autorisation de mémoire et d'emplacement pour l'application corrigée, activez l'heure et le fuseau horaire automatiques et définissez au moins une alarme dans l'application patchée. 

Maintenant, démarrez le détecteur Libre2 avec l'application patchée en scannant simplement le capteur. Assurez-vous d'avoir défini tous les paramètres.

Paramètres obligatoires pour réussir le démarrage du capteur : 

* NFC activé / BT activé
* autorisation de mémoire et d'emplacement activée 
* service d'emplacement activé
* réglage automatique de l'heure et du fuseau horaire
* définir au moins une alarme dans l'application patchée

Veuillez noter que l'activation du service de localisation est primordial. Il ne s'agit pas de l'autorisation d'application qui doit être également définie !

.. image:: ../images/Libre2_AppPermissionsAndLocation.png
  :alt: LibreLink autorisation mémoire & localisation
  
  
.. image:: ../images/Libre2_DateTimeAlarms.png
  :alt: paramétrage de l'heure automatique fuseaux horaires et alarmes  

Le capteur se souvient de l'appareil avec lequel il a été démarré. Seul cet appareil peut recevoir les alarmes à l'avenir.

La première configuration de connexion au capteur est critique. L'application LibreLink tente d'établir une connexion sans fil au capteur toutes les 30 secondes. Si un ou plusieurs paramètres obligatoires sont manquants, ils doivent être renseignés. Vous n'avez pas de limite de temps pour le faire. Le capteur essaye constamment de configurer la connexion. Même si cela dure plusieurs heures. Soyez patient et essayez différents paramétres avant d'envisager de changer le capteur.

Tant que vous voyez un point d'exclamation rouge ("!") Dans le coin supérieur gauche de l'écran de démarrage de LibreLinks, il n'y a pas de connexion ou d'autres blocs de configuration LibreLink pour signaler des alarmes. Vérifiez si le son est activé et que toutes les applications de blocage de notifications sont désactivées. Ce n'est que lorsque le point d'exclamation est parti, que la connexion est établie et que les valeurs de glycémies sont envoyées au smartphone. Cela devrait se produire après un maximum de 5 minutes.

.. image:: ../images/Libre2_ExclamationMark.png
  :alt: LibreLink no connection
  
Si le point d'exclamation reste ou si vous obtenez un message d'erreur, cela peut avoir plusieurs raisons :

- le service de localisation Android n'est pas autorisé - veuillez l'activer dans les paramètres système
- le réglage automatique de l'heure et du fuseau horaire n'est pas activé - veuillez modifier les paramètres en conséquence
- activez les alarmes - au moins une des trois alarmes doit être activée dans LibreLink
- le Bluetooth est éteint - veuillez l'activer
- le son est bloqué
- les notifications de l'application sont bloquées
- les notifications de l'écran de veille sont bloqués 
- vous avez un capteur Libre 2 défectueux (LOT avec un 'K' suivi de 8 chiffres). Vous trouvez ce numéro imprimé sur le paquet jaune. Ces capteurs doivent être remplacés car ils ne fonctionnent pas en bluetooth.

Le redémarrage du téléphone peut vous aider, vous devrez peut-être le faire plusieurs fois. Dès que la connexion est établie, le point d'exclamation rouge disparaît et l'étape la plus importante est franchie. Il peut arriver, selon les paramètres du système, que le point d'exclamation reste mais que vous obtenez des lectures. Dans les deux cas, c'est bon. Le capteur et le téléphone sont maintenant connectés, chaque minute une valeur de glycémie est transmise.

.. image:: ../images/Libre2_Connected.png
  :alt: LibreLink connexion établie
  
Dans de rares cas, cela peut aider de vider le cache bluetooth et/ou réinitialiser toutes les connexions réseau via le menu système. Cela supprime tous les périphériques bluetooth connectés ce qui peut aider à configurer une nouvelle connexion bluetooth spécifique. Cette procédure est enregistrée car le capteur démarré est mémorisé par l'application LibreLink patchée. Rien de plus n'a à être fait ici. Il suffit d'attendre que l'application patchée se connecte au capteur.

Après une connexion réussie, les paramètres du smartphone peuvent être modifiés si nécessaire. Cela n'est pas recommandé, mais vous pouvez vouloir économiser de l'énergie. Le service de localisation peut être éteint, le volume peut être réglé à zéro ou les alarmes peuvent être à nouveau désactivées. Les glycémies sont de toute façon transmises.

Toutefois, lors du démarrage du capteur suivant, tous les paramètres devront à nouveau être définis !

Remarque: L'application patchée en a besoin dans l'heure qui suit le préchauffage pour activer une connexion. Pour les 14 jours de fonctionnement, ils ne sont pas nécessaires. Dans la plupart des cas, lorsque vous rencontrez des problèmes avec le démarrage d'un capteur, le service de localisation a été désactivé. Sur Android c'est nécessaire pour la bonne connection bluetooth (!). Reportez-vous à la documentation Android de Google.

Pendant les 14 jours, vous pouvez utiliser un ou plusieurs smartphones NFC (pas le lecteur !) avec l'application LibreLink pour le scanner via NFC. Il n'y a pas de limite de temps pour les démarrer. Vous pouvez par exemple utiliser un téléphone en parallèle à partir du 5ème jour. Le second téléphone peut télécharger les glycémies dans le Cloud d'Abbott (LibreView). LibreView peut générer des rapports pour votre équipe soignante. Il y a beaucoup de parents qui en ont absolument besoin. 

Veuillez noter que l'application patchée d'origine **n'a aucune connection Internet** pour éviter le tracking.

Cependant, il existe une variante de l'application patchée supportant LibreView avec un accès Internet activé. Veuillez noter que vos données sont ensuite transférées dans le cloud. Mais votre outil diadoc et les rapports sont entièrement pris en charge ensuite. Avec cette variante il est également possible de déplacer les alarmes vers un autre appareil qui n'a pas démarré le capteur. Cherchez avec google dans les forums allemands sur le diabète pour voir comment cela peut être fait.


Étape 2 : Installer et configurer l'application xDrip+
==================================================

Les glycémies sont reçues sur le smartphone par l'application xDrip+. 

* Si ce n'est pas déjà configuré, alors téléchargez l'application xDrip+ et installez une des dernières pre-release à partir d'`ici <https://github.com/NightscoutFoundation/xDrip/releases>`_.
* Dans xDrip+ sélectionnez "Libre2 (patched App)" comme source de données matérielle
* Si nécessaire, entrez "BgReading:d,xdrip libre_receiver:v" dans Paramètres moins courants -> Extra Logging Settings -> Balises supplémentaires pour le log. Cela permettra de consigner des messages d'erreur supplémentaires pour le dépannage.
* Dans xDrip allez dans Paramètres > Inter-app settings > Diffusion Locale et sélectionnez ON.
* Dans xDrip allez dans Paramètres > Inter-app settings > Accept Treatments et sélectionnez OFF.
* pour permettre à AAPS de recevoir les glycémies (version 2.5.x et supérieures) de la part de xDrip+ veuillez renseigner dans `Paramètres > Inter-app settings > Identify receiver "info.nightscout.androidaps" <https://androidaps.readthedocs.io/en/latest/EN/Configuration/xdrip.html#identifier-le-recepteur>`_
* Si vous voulez pouvoir utiliser AndroidAPS pour calibrer, alors dans xDrip, allez dans Paramètres > Inter-app settings > Accept Calibrations et sélectionnez ON.  Vous pouvez également consulter les options dans Paramètres > Paramètres moins courants > Paramètres Avancés de Calibration.

.. image:: ../images/Libre2_Tags.png
  :alt: xDrip+ journaux LibreLink

Étape 3 : Démarrer le capteur
==================================================

Dans xDrip+ démarrez le capteur avec "Start Sensor" et "not today". 

En fait, cela ne démarre aucun capteur Libre2 ou n'interagit en aucun cas avec eux. Il s'agit simplement d'indiquer à xDrip+ qu'un nouveau capteur envoie des glycémies. Si possible, entrez deux valeurs de glycémie capillaire pour l'étalonnage initial. Maintenant, les glycémies doivent être affichées dans xDrip+ toutes les 5 minutes. Les valeurs manquantes, par ex. parce que vous étiez trop loin de votre téléphone, ne seront pas remises.

Après un changement de capteur, xDrip+ détectera automatiquement le nouveau capteur et supprimera toutes les données d'étalonnage. Vous pouvez vérifier la glycémie capillaire après l'activation et effectuer un nouvel étalonnage initial.

Étape 4 : Configurer AndroidAPS (pour la boucle uniquement)
==================================================
* Dans AndroidAPS allez dans le Générateur de configuration > Source des glycémies et cochez 'xDrip+' 
* Si AAPS ne reçoit pas de Glycémie lorsque le téléphone est en mode avion, utilisez `Identify receiver` comme c'est décrit dans la page `Paramètres xDrip+ <../Configuration/xdrip.html#identify-receiver>`_.

Jusqu'à présent, en utilisant le Freestyle Libre 2 comme source Gly, vous ne pouvez pas activer les fonctions 'Activer SMB toujours' et 'Activer SMB après les glucides' dans l'algorithme SMB. Les valeurs de GLY du Freestyle Libre 2 ne sont pas assez lisses pour l'utiliser en toute sécurité. Voir `Lissage des données de glycémie <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html>`_ pour plus de détails.

Astuces et Dépannages
==================================================

Connectivité
--------------------------------------------------
La connectivité est extrêmement bonne. A l'exception des téléphones portables Huawei, tous les smartphones actuels semblent bien fonctionner. Le taux de reconnexion en cas de perte de connexion est phénoménal. La connexion peut s'interrompre si le téléphone portable se trouve dans la poche opposée au capteur ou si vous êtes à l'extérieur. Lorsque je jardinage, je porte mon téléphone du même côté que le capteur. Dans les pièces, où le Bluetooth se propage avec des réflexions, aucun problème ne devrait survenir. Si vous avez des problèmes de connectivité, testez avec un autre téléphone. Cela peut aussi aider positionner le capteur avec l'antenne BT interne pointant vers le bas. La fente sur l'applicateur doit pointer vers le bas lors de la pose du capteur.

Lissage de valeur & valeurs brutes
--------------------------------------------------
Techniquement, la glycémie est transmise chaque minute à xDrip+. Une moyenne pondérée calcule une valeur lissée sur les 25 dernières minutes. Ceci est obligatoire pour la boucle. Les courbes sont lisses et les résultats avec la boucle sont excellents. Les valeurs brutes sur lesquelles les alarmes sont basées sont un peu plus instables, mais correspondent également aux valeurs que le lecteur affiche. De plus, les valeurs brutes peuvent être affichées dans le graphique xDrip+ afin de pouvoir réagir à temps en cas de changements rapides. Veuillez activer Paramètres moins courants > Advanced settings for Libre2 > "show Raw values in Graph" et "show Sensors Infos in Status". Ainsi les valeurs brutes sont affichées sous forme de petits points blancs et des informations supplémentaires sur les capteurs sont disponibles dans le menu Système.

Les valeurs brutes sont très utiles lorsque les glycémies changent rapidement. Même si les points sont moins stables, vous détecterez beaucoup mieux la tendance qu'avec l'utilisation de la ligne lissée pour prendre les bonnes décisions de traitement.

.. image:: ../images/Libre2_RawValues.png
  :alt: xDrip+ paramètres avancés Libre2 & valeurs brutes

Durée du capteur
--------------------------------------------------
La durée d'exécution du capteur est fixée à 14 jours. Les 12 heures supplémentaires du capteur Libre1 n'existent plus. Après avoir activé Paramètres moins courants > Advanced settings for Libre2 > "show Sensors Infos in Status", xDrip+ affiche des informations supplémentaires sur le capteur dans le menu système comme le temps de démarrage. Le temps restant du capteur peut également être vu dans l'application Librelink patchée. Soit sur l'écran principal avec le nombre de jours restants affiché, soit avec la date de démarrage du capteur dans le menu 3 points -> Aide -> Journal des évènements sous "Nouveau capteur trouvé".

.. image:: ../images/Libre2_Starttime.png
  :alt: Libre 2 start time

Nouveau capteur
--------------------------------------------------
Un échange de capteurs a lieu à la volée : configurez le nouveau capteur peu avant l'activation. Dès que xDrip+ ne reçoit plus de données de l'ancien capteur, démarrez le nouveau capteur avec l'application patchée. Après une heure, les nouvelles valeurs doivent apparaître automatiquement dans xDrip+. 

Si ce n'est pas le cas, vérifiez les paramètres du téléphone et procédez comme avec le premier démarrage. Vous n'avez pas de limite de temps. Essayez de trouver les bons paramètres. Vous n'avez pas besoin de remplacer immédiatement le capteur avant d'avoir vous essayé différentes combinaisons. Les capteurs sont robustes et essaient en permanence d'établir une connexion. Veuillez prendre votre temps. Dans la plupart des cas, vous avez accidentellement changé un paramètre qui cause maintenant des problèmes. 

Une fois réussi, sélectionnez "Sensor Stop" et "Supprimer l'étalonnage seulement" dans xDrip+. Cela indique à xDrip+ qu'un nouveau capteur est mis en place et que les anciennes calibrations ne sont plus valables et doivent donc être supprimées. Aucune interaction n'est faite avec le capteur Libre2 ici ! Vous n'avez pas besoin de démarrer le capteur dans xDrip+.

.. image:: ../images/Libre2_GapNewSensor.png
  :alt: xDrip+ missing data when changing Libre 2 sensor

Étalonnage
--------------------------------------------------
Vous pouvez calibrer le Libre2 avec un décalage de -40 mg/dl à +20 mg/dL [-2,2 mmol/l à +1,1 mmol/l] (intercept). La pente n'est pas modifiable car le Libre2 est beaucoup plus précis que le Libre1. Veuillez vérifier la glycémie capillaire dès le début de la pose d'un nouveau capteur. On sait qu'il peut y avoir de grandes différences avec les mesures de glycémies. Pour être en sécurité, étalonner toutes les 24 - 48 heures. Les valeurs sont précises jusqu'à la fin du capteur et ne sautent pas comme avec le Libre1. Cependant, si le capteur est complètement éteint, cela ne changera pas. Le capteur doit alors être remplacé immédiatement.

Contrôles de cohérence
--------------------------------------------------
Les capteurs Libre2 vérifient que les glycémies lues sont plausibles pour détecter les mauvaises valeurs. Dès que le capteur bouge sur le bras ou est légèrement relevé, les valeurs peuvent commencer à fluctuer. Dans ce cas le capteur Libre2 s'éteindra pour des raisons de sécurité. Malheureusement, lors du scan avec l'application, des vérifications complémentaires sont faites. L'application peut désactiver le capteur même si celui-ci est OK. Actuellement le test interne est trop strict. J'ai complètement arrêté de scanner le capteur et je n'ai pas eu d'échec depuis.

Changement de fuseau horaire
--------------------------------------------------
En cas de changement de `fuseau horaire <../Usage/Timezone-traveling.html>`_ Il y a deux stratégies pour la boucle : 

Soit 

1. laisser l'heure du smartphone inchangée et décaler le profil de basal (smartphone en mode avion) ou 
2. supprimer l'historique de la pompe et changer l'heure du smartphone pour le mettre à l'heure locale. 

La méthode 1 est excellente tant que vous n'avez pas à mettre en place un nouveau capteur de Libre2. En cas de doute, choisissez la méthode 2, surtout si le voyage dure plus longtemps. Si vous posez un nouveau capteur, la mise à l'heure automatique de la zone doit être réglée, donc la méthode 1 sera perturbée. Il faut donc vérifier avant de partir ailleurs, sinon vous risquez d'avoir rapidement des problèmes.

Expériences
--------------------------------------------------
C'est l'un des plus petits systèmes MGC sur le marché. Il est petit, n'a pas besoin d'émetteur et surtout il envoie des valeurs très précises sans fluctuations. Après environ 12 heures de fonctionnement avec des variations allant jusqu'à 30 mg/dl (1,7 mmol/l), les écarts sont généralement inférieurs à 10 mg/dl (0,6 mmol/l). Les meilleurs résultats sont à l'arrière de l'avant bras, prudence avec les autres zones d'insertion ! Pas besoin d'installer un nouveau capteur un jour plus tôt pour le pré-chauffage. Cela perturberait le mécanisme de lissage interne.

Il semble y avoir de mauvais capteurs de temps en temps, qui sont loin des glycémies capillaires. Cela restera ainsi. Ceux-ci doivent être immédiatement remplacés.

Si le capteur bouge un peu sur la peau ou est soulevé d'une manière ou d'une autre, cela peut entraîner de mauvais résultats. Le filament qui se trouve dans la peau est un peu sorti et mesurera ensuite des valeurs différentes. Vous verrez probablement des sauts dans xDrip+. Ou les écarts avec les glycémies capillaires augmenteront. Veuillez remplacer le capteur immédiatement ! Les résultats sont inexacts maintenant.

Étape : Utiliser le transmetteur bluetooth et OOP
==================================================

Le transmetteur Bluetooth peut être utilisé avec le Libre2 et la dernière version courante de xDrip+ ainsi qu'avec l'application Libre2 OOP. Vous pouvez recevoir des lectures de glycémie toutes les 5 minutes comme avec le Libre1. Veuillez vous référer au site web miaomiao pour trouver une description. Cela marche aussi avec un Bubble et dans le futur avec d'autres transmetteurs. Le blucon devrait fonctionner mais n'a pas encore été testé.

Les anciens transmetteurs Libre1 ne peuvent pas être utilisés avec l'application OOP Libre2. Ils doivent être remplacés par une version plus récente ou avoir une mise à jour de firmware pour fonctionner. MM1 avec le firmware le plus récent ne marche malheureusement pas encore - l'analyse du problème est en cours.

Le OOP Libre2 obtient les mêmes lectures de glycémies qu'avec le lecteur d'origine ou l'application LibreLink via NFC. AAPS avec Libre2 fait un lissage sur 25 minutes pour éviter certains sauts. OOP génère des relevés toutes les 5 minutes avec la moyenne des 5 dernières minutes. Par conséquent, les lectures glycémique ne sont pas aussi lissées mais correspondent au lecteur d'origine et suivent plus vite les lectures "réelles". Si vous essayez de boucler avec OOP, activez tous les réglages de lissage dans xDrip +.

Le transmetteur Droplet marche également avec Libre2 mais utilise un service Internet. Veuillez vous référer à FB ou à un moteur de recherche pour obtenir de plus amples renseignements. Le MM2 avec l'application Tomato semble également utiliser un service Internet. Pour ces deux appareils, vous devez prendre soin d'avoir une connexion Internet appropriée pour obtenir vos relevés de glycémies.

Même si l'utilisation de LibreLink patchée est pratique, il peut y avoir des raisons d'utiliser un transmetteur bluetooth à la place :

* les GLY sont identiques aux résultats du lecteur
* le capteur Libre2 peut être utilisé 14,5 jours comme avec le Libre1 
* 8 heures d'historique est entièrement pris en charge.
* obtenir des glycémies pendant l'heure de démarrage d'un nouveau capteur

Remarque : Le transmetteur peut être utilisé en parallèle à l'application LibreLink. Il ne perturbe pas l'application LibreLink patchée.

Remarque 2: L'algorithme OOP ne peut pas encore être calibré. Cela sera modifié à l'avenir.
