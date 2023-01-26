# Freestyle Libre 2

Le système Freestyle Libre 2 peut automatiquement signaler des niveaux de glycémie dangereux. Le capteur Libre2 envoie le taux de glycémie actuel à un récepteur (lecteur ou smartphone) chaque minute. Le récepteur déclenche une alarme si nécessaire. Avec une application LibreLink modifiée par vous-même et l'application xDrip+, vous pouvez recevoir en permanence votre taux de sucre dans le sang sur votre smartphone.

Le capteur peut être étalonné de -40 mg/dl à +20 mg/dl (-2,2 mmol/l à +1,1 mmol/l) pour ajuster les différences entre les glycémies capillaires et les lectures des capteurs.

Les glycémies peuvent également être transmise avec un émetteur BT comme avec le Libre1.

Remarque importante : Ceci ne fonctionne pas avec la version US du capteur Freestyle 2 ! La version US ne se connectera qu'à un lecteur, pas à un téléphone.

## Étape 1 : Construire votre propre application Librelink patchée

Pour des raisons légales, le soi-disant correctifs doit être fait par vous-même. Utilisez les moteurs de recherche pour trouver les liens correspondants. Il y a deux principales variantes : L'application patchée d'origine recommandée bloque tout trafic Internet pour éviter le suivi. L'autre variante supporte LibreView qui peut être nécessaire pour votre médecin.

L'application patchée doit être installée au lieu de l'application originale. Le prochain capteur démarré avec celle-ci transmettra les valeurs actuelles de glycémie à l'application xDrip+ exécutée sur votre smartphone via Bluetooth.

Important : Pour éviter d'éventuels problèmes, il peut être utile dans un premier temps d'installer et de désinstaller l'application originale sur un smartphone compatible NFC. Le NFC doit être activé. Cela ne consomme pas plus d'énergie. Installez ensuite l'application patchée.

L'application patchée peut être identifiée par la notification d'autorisation au premier plan. Le service d'autorisation au premier plan améliore la stabilité de la connexion par rapport à l'application d'origine qui n'utilise pas ce service.

![LibreLink Foreground Service](../images/Libre2_ForegroundServiceNotification.png)

D'autres indications pourraient être le logo du pingouin Linux à trois points -> Info ou la police de l'application patchée. Ces critères sont facultatifs en fonction de la source de l'application que vous choisissez.

![LibreLink Font Check](../images/LibreLinkPatchedCheck.png)

Assurez-vous que NFC est activé, activez l'autorisation de mémoire et d'emplacement pour l'application corrigée, activez l'heure et le fuseau horaire automatiques et définissez au moins une alarme dans l'application patchée.

Maintenant, démarrez le détecteur Libre2 avec l'application patchée en scannant simplement le capteur. Assurez-vous d'avoir défini tous les paramètres.

Paramètres obligatoires pour réussir le démarrage du capteur :

-   NFC activé / BT activé
-   autorisation de mémoire et d'emplacement activée
-   service d'emplacement activé
-   réglage automatique de l'heure et du fuseau horaire
-   définir au moins une alarme dans l'application patchée

Veuillez noter que l'activation du service de localisation est primordial. Il ne s'agit pas de l'autorisation d'application qui doit être également définie !

![LibreLink permissions memory & location](../images/Libre2_AppPermissionsAndLocation.png)

![automatic time and time zone + alarm settings](../images/Libre2_DateTimeAlarms.png)

Le capteur se souvient de l'appareil avec lequel il a été démarré. Seul cet appareil peut recevoir les alarmes à l'avenir.

La première configuration de connexion au capteur est critique. L'application LibreLink tente d'établir une connexion sans fil au capteur toutes les 30 secondes. Si un ou plusieurs paramètres obligatoires sont manquants, ils doivent être renseignés. Vous n'avez pas de limite de temps pour le faire. Le capteur essaye constamment de configurer la connexion. Même si cela dure plusieurs heures. Soyez patient et essayez différents paramétres avant d'envisager de changer le capteur.

Tant que vous voyez un point d'exclamation rouge ("!") dans le coin supérieur gauche de l'écran de démarrage de LibreLinks, il n'y a pas de connexion ou d'autres blocs de configuration LibreLink pour signaler des alarmes. Vérifiez si le son est activé et que toutes les applications de blocage de notifications sont désactivées. Ce n'est que lorsque le point d'exclamation est parti, que la connexion est établie et que les valeurs de glycémies sont envoyées au smartphone. Cela devrait se produire après un maximum de 5 minutes.

![LibreLink no connection](../images/Libre2_ExclamationMark.png)

Si le point d'exclamation reste ou si vous obtenez un message d'erreur, cela peut avoir plusieurs raisons :

-   le service de localisation Android n'est pas autorisé - veuillez l'activer dans les paramètres système
-   le réglage automatique de l'heure et du fuseau horaire n'est pas activé - veuillez modifier les paramètres en conséquence
-   activez les alarmes - au moins une des trois alarmes doit être activée dans LibreLink
-   le Bluetooth est éteint - veuillez l'activer
-   le son est bloqué
-   les notifications de l'application sont bloquées
-   les notifications de l'écran de veille sont bloqués
-   vous avez un capteur Libre 2 défectueux provenant d'un LOT avec un 'K' suivi de 8 chiffres. Vous trouvez ce numéro imprimé sur le paquet jaune. Ces capteurs doivent être remplacés car ils ne fonctionnent pas en bluetooth.

Le redémarrage du téléphone peut vous aider, vous devrez peut-être le faire plusieurs fois. Dès que la connexion est établie, le point d'exclamation rouge disparaît et l'étape la plus importante est franchie. Il peut arriver, selon les paramètres du système, que le point d'exclamation reste mais que vous obtenez des lectures. Dans les deux cas, c'est bon. Le capteur et le téléphone sont maintenant connectés, chaque minute une valeur de glycémie est transmise.

![LibreLink connection established](../images/Libre2_Connected.png)

Dans de rares cas, cela peut aider de vider le cache bluetooth et/ou réinitialiser toutes les connexions réseau via le menu système. Cela supprime tous les périphériques bluetooth connectés ce qui peut aider à configurer une nouvelle connexion bluetooth spécifique. Cette procédure est enregistrée car le capteur démarré est mémorisé par l'application LibreLink patchée . Il ne faut rien faire de plus ici. Il suffit d'attendre que l'application patchée se connecte au capteur.

Après une connexion réussie, les paramètres du smartphone peuvent être modifiés si nécessaire. Cela n'est pas recommandé, mais vous pouvez vouloir économiser de l'énergie. Le service de localisation peut être éteint, le volume peut être réglé à zéro ou les alarmes peuvent être à nouveau désactivées. Les glycémies sont de toute façon transmises.

Toutefois, lors du démarrage du capteur suivant, tous les paramètres devront à nouveau être définis !

Remarque: L'application patchée en a besoin dans l'heure qui suit le préchauffage pour activer une connexion. Pour les 14 jours de fonctionnement, ils ne sont pas nécessaires. Dans la plupart des cas, lorsque vous rencontrez des problèmes avec le démarrage d'un capteur, le service de localisation a été désactivé. Sur Android c'est nécessaire pour la bonne connection bluetooth (!). Reportez-vous à la documentation Android de Google.

Pendant les 14 jours, vous pouvez utiliser un ou plusieurs smartphones NFC (pas le lecteur !) avec l'application LibreLink pour le scanner via NFC. Il n'y a pas de limite de temps pour les démarrer. Vous pouvez par exemple utiliser un téléphone en parallèle à partir du 5ème jour. Le second téléphone peut télécharger les glycémies dans le Cloud d'Abbott (LibreView). LibreView peut générer des rapports pour votre équipe soignante. Il y a beaucoup de parents qui en ont absolument besoin.

Veuillez noter que l'application patchée d'origine **n'a aucune connection Internet** pour éviter le tracking.

Cependant, il existe une variante de l'application patchée supportant LibreView avec un accès Internet activé. Veuillez noter que vos données sont ensuite transférées dans le cloud. Mais votre outil diadoc et les rapports sont entièrement pris en charge ensuite. Avec cette variante il est également possible de déplacer les alarmes vers un autre appareil qui n'a pas démarré le capteur. Cherchez avec google dans les forums allemands sur le diabète pour voir comment cela peut être fait.

## Étape 2 : Installer et configurer l'application xDrip+

Les glycémies sont reçues sur le smartphone par l'application xDrip+.

-   Si ce n'est pas déjà configuré, alors téléchargez l'application xDrip+ et installez une des dernières pre-release à partir  [d'ici](https://github.com/NightscoutFoundation/xDrip/releases).
-   In xDrip+ select "Libre2 patched" or "Libre 2 (patched App)" as data source
-   Si nécessaire, entrez "BgReading:d,xdrip libre_receiver:v" dans Paramètres moins courants -> Extra Logging Settings -> Balises supplémentaires pour le log. Cela permettra de consigner des messages d'erreur supplémentaires pour le dépannage.
-   Dans xDrip allez dans Paramètres > Inter-app settings > Diffusion Locale et sélectionnez ON.
-   Dans xDrip allez dans Paramètres > Inter-app settings > Accept Treatments et sélectionnez OFF.
-   to enable AAPS to receive blood sugar levels (version 2.5.x and later) from xDrip+ please set [Settings > Interapp Settings > Identify Receiver "info.nightscout.androidaps"](../Configuration/xdrip.md#identify-receiver)
-   Si vous voulez pouvoir utiliser AndroidAPS pour calibrer, alors dans xDrip, allez dans Paramètres > Inter-app settings > Accept Calibrations et sélectionnez ON. Vous pouvez également consulter les options dans Paramètres > Paramètres moins courants > Paramètres Avancés de Calibration.

![xDrip+ LibreLink logging](../images/Libre2_Tags.png)

## Étape 3 : Démarrer le capteur

Dans xDrip+ démarrez le capteur avec "Start Sensor" et "not today".

En fait, cela ne démarre aucun capteur Libre2 ou n'interagit en aucun cas avec eux. Il s'agit simplement d'indiquer à xDrip+ qu'un nouveau capteur envoie des glycémies. Si possible, entrez deux valeurs de glycémie capillaire pour l'étalonnage initial. Maintenant, les glycémies doivent être affichées dans xDrip+ toutes les 5 minutes. Les valeur manquées, par ex. si vous étiez trop loin de votre téléphone, ne seront pas actualisées à postériori.

Après un changement de capteur, xDrip+ détectera automatiquement le nouveau capteur et supprimera toutes les données d'étalonnage. Vous pouvez vérifier la glycémie capillaire après l'activation et effectuer un nouvel étalonnage initial.

## Étape 4 : Configurer AndroidAPS (pour la boucle uniquement)

-   Dans AndroidAPS allez dans le Générateur de configuration > Source des glycémies et cochez 'xDrip+'
-   If AndroidAPS does not receive BG values when phone is in airplane mode, use 'Identify receiver' as describe on [xDrip+ settings page](../Configuration/xdrip.md#identify-receiver).

Jusqu'à présent, en utilisant le Freestyle Libre 2 comme source Gly, vous ne pouvez pas activer les fonctions 'Activer SMB toujours' et 'Activer SMB après les glucides' dans l'algorithme SMB. Les valeurs de GLY du Freestyle Libre 2 ne sont pas assez lisses pour l'utiliser en toute sécurité. Voir [Lissage des données de glycémie](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) pour plus de détails.

## Astuces et Dépannages

### Connectivité

La connectivité est extrêmement bonne. A l'exception des téléphones portables Huawei, tous les smartphones actuels semblent bien fonctionner. Le taux de reconnexion en cas de perte de connexion est phénoménal. La connexion peut s'interrompre si le téléphone portable se trouve dans la poche opposée au capteur ou si vous êtes à l'extérieur. Lorsque je jardinage, je porte mon téléphone du même côté que le capteur. Dans les pièces, où le Bluetooth se propage avec des réflexions, aucun problème ne devrait survenir. Si vous avez des problèmes de connectivité, testez avec un autre téléphone. Cela peut aussi aider positionner le capteur avec l'antenne BT interne pointant vers le bas. La fente sur l'applicateur doit pointer vers le bas lors de la pose du capteur.

### Lissage de valeur & valeurs brutes

Techniquement, la glycémie est transmise chaque minute à xDrip+. Une moyenne pondérée calcule une valeur lissée sur les 25 dernières minutes. Ceci est obligatoire pour la boucle. Les courbes sont lisses et les résultats avec la boucle sont excellents. Les valeurs brutes sur lesquelles les alarmes sont basées sont un peu plus instables, mais correspondent également aux valeurs que le lecteur affiche. De plus, les valeurs brutes peuvent être affichées dans le graphique xDrip+ afin de pouvoir réagir à temps en cas de changements rapides. Veuillez activer Paramètres moins courants > Advanced settings for Libre2 > "show Raw values in Graph" et "show Sensors Infos in Status". Ainsi les valeurs brutes sont affichées sous forme de petits points blancs et des informations supplémentaires sur les capteurs sont disponibles dans le menu Système.

Les valeurs brutes sont très utiles lorsque les glycémies changent rapidement. Même si les points sont moins stables, vous détecterez beaucoup mieux la tendance qu'avec l'utilisation de la ligne lissée pour prendre les bonnes décisions de traitement.

![xDrip+ advanced settings Libre 2 & raw values](../images/Libre2_RawValues.png)

### Durée du capteur

La durée d'exécution du capteur est fixée à 14 jours. Les 12 heures supplémentaires du capteur Libre1 n'existent plus. Après avoir activé Paramètres moins courants > Advanced settings for Libre2 > "show Sensors Infos in Status", xDrip+ affiche des informations supplémentaires sur le capteur dans le menu système comme le temps de démarrage. Le temps de capteur restant peut également être vu dans l'application LibreLink patchée, soit dans l'écran principal avec affiché le jours restants, soit dans le menu à trois points->Aide->Journal d'événement sous "Nouveau capteur trouvé" avec le temps de démarrage du capteur.

![Libre 2 start time](../images/Libre2_Starttime.png)

### Nouveau capteur

A sensor exchange takes place on-the-fly: Set new sensor shortly before activation. As soon as xDrip+ receives no more data from the old sensor, start the new sensor with the patched app. After one hour new values should appear automatically in xDrip+.

If not, please check the phone settings and proceed as with the first start. Vous n'avez pas de limite de temps. Essayez de trouver les bons paramètres. No need to immediately replace the sensor before you tried different combinations. The sensors are robust and try permanently to establish a connection. Veuillez prendre votre temps. In most cases you accidentally changed one setting which causes now problems.

Once successful please select "Sensor Stop" and "Delete calibration only" in xDrip. This indicates for xDrip+ that a new sensor is releasing blood sugar levels and the old calibrations are no longer valid and therefore have to be deleted. No real interaction is done with the Libre2 sensor here! Vous n'avez pas besoin de démarrer le capteur dans xDrip+.

![xDrip+ missing data when changing Libre 2 sensor](../images/Libre2_GapNewSensor.png)

### Étalonnage

You can calibrate the Libre2 with an offset of -40 mg/dl to +20 mg/dL \[-2,2 mmol/l to +1,1 mmol/l\] (intercept). The slope isn't changeable as the Libre2 is much more accurate compared to the Libe1. Please check by fingerpricking early after setting a new sensor. It is known that there can arise big differences to the blood measurements. To be on the safe side, calibrate every 24 - 48 hours. The values are accurate up to the end of the sensor and do not jitter as with the Libre1. However, if the sensor is completely off, this will not change. The sensor should then be replaced immediately.

### Contrôles de cohérence

The Libre2 sensors contain plausibility checks to detect bad sensor values. As soon as the sensor moves on the arm or is lifted slightly, the values may start to fluctuate. The Libre2 sensor will then shut down for safety reasons. Unfortunately, when scanning with the App, additional checks are made. The app can deactivate the sensor even though the sensor is OK. Actuellement le test interne est trop strict. I have completely stopped scanning and haven't had a failure since then.

### Changement de fuseau horaire

In other [time zones](../Usage/Timezone-traveling.md) there are two strategies for looping:

Soit

1.  leave the smartphone time unchanged and shift the basal profile (smartphone in flight mode) or
2.  delete the pump history and change the smartphone time to local time.

La méthode 1 is great as long as you don't have to set a new Libre2 sensor on-site. If in doubt, choose method 2., especially if the trip takes longer. If you set a new sensor, the automatic time zone must be set, so method 1. sera perturbée. Please check before, if you are somewhere else, you can run otherwise fast into problems.

### Expériences

C'est l'un des plus petits systèmes MGC sur le marché. Small, no transmitter necessary and mostly very accurate values without fluctuations. After approx. 12 hours running-in phase with deviations of up to 30 mg/dl (1,7 mmol/l)the deviations are typical smaller than 10 mg/dl (0,6 mmol/l). Best results at the rear orbital arm, other setting points with caution! No need to set a new sensor one day ahead for soaking. Cela perturberait le mécanisme de lissage interne.

There seem to be bad sensors from time to time, which are far away from the blood values. Cela restera ainsi. These should be immediately replaced.

If the sensor moved a little bit on the skin or is lifted somehow this can cause bad results. The filament which sits in the tissue is a little bit pulled out of the tissue and will measure different results then. Vous verrez probablement des sauts dans xDrip+. Or the difference to the bloody values change. Veuillez remplacer le capteur immédiatement ! The results are inaccurate now.

## Étape : Utiliser le transmetteur bluetooth et OOP

Bluetooth transmitter can be used with the Libre2 with the latest xDrip+ nightlys and the Libre2 OOP app. You can receive blood sugar readings every 5 minutes as well as with the Libre1. Please refer to the miaomiao website to find a description. This will also work with the Bubble device and in the future with other transmitter devices. The blucon should work but has not been tested yet.

Les anciens transmetteurs Libre1 ne peuvent pas être utilisés avec l'application OOP Libre2. They need to be replaced with a newer version or have a firmware upgrade for proper operation. MM1 with newest firmware is unfortunately not working yet - searching for root cause is currently ongoing.

The Libre2 OOP is creating the same BG readings as with the original reader or the LibreLink app via NFC scan. AAPS with Libre2 do a 25 minutes smoothing to avoid certain jumps. OOP generates readings every 5 minutes with the average of the last 5 minutes. Therefore the BG readings are not that smooth but match the original reader device and faster follow the "real" BG readings. If you try to loop with OOP please enable all smoothing settings in xDrip+.

The Droplet transmitter is working with Libre2 also but uses an internet service instead. Please refer to FB or a search engine to get further information. The MM2 with the tomato app also seems to use an internet service. For both devices you have to take care to have a proper internet connection to get your BG readings.

Even if the patched LibreLink app approach is smart there may be some reasons to use a bluetooth transmitter:

-   les GLY sont identiques aux résultats du lecteur
-   le capteur Libre2 peut être utilisé 14,5 jours comme avec le Libre1
-   8 heures d'historique sont entièrement pris en charge.
-   obtenir des glycémies pendant l'heure de démarrage d'un nouveau capteur

Remarque : L'émetteur peut être utilisé en parallèle avec l'application LibreLink. It doesn't disturb the patched LibreLink app operation.

Remarque 2: L'algorithme OOP ne peut pas encore être calibré. This will be changed in the future.

# Meilleures pratiques pour calibrer un capteur libre 2

To get the best results when calibrating a libre 2 sensor there are some “rules” you should follow. They apply independently of the software combination (e.g. patched libre-app, oop2, …) that is used to handle the libre 2 values.

1.  The most important rule is to only calibrate the sensor when you have a flat bg level for at least 15 minutes. The delta between the last three readings should not exceed 10 mg/dl (over 15min not between each reading). As the libre 2 does not measure your blood glucose level but your flesh glucose level there is some time lag especially when bg level is rising or falling. This time lag can lead to way too large calibration offsets in unfavourable situations even if the bg level rise / fall is not that much. So whenever possible avoid to calibrate on rising or falling edges. -> If you have to add a calibration when you do not have a flat bg level (e.g. when starting a new sensor) it is recommended to remove that calibration(s) as soon as possible and add a new one when in flat bg levels.
2.  Actually this one is automatically taken into account when following rule 1 but to be sure: When doing comparison measurements your bg level should also be flat for about 15min. Do not compare when rising or falling. Important: You still shall do blood glucose measurements whenever you desire, just don’t use the results for calibration when rising or falling!
3.  As calibrating the sensor in flat levels is a very good starting point it is also strongly recommended to calibrate the sensor only within your desired target range like 70 mg/dl to 160 mg/dl. The libre 2 is not optimized to work over a huge range like 50 mg/dl to 350 mg/dl (at least not in a linear manner), so try to only calibrate when within your desired range. -> Simply accept that values outside your calibration range will not perfectly match blood glucose levels.
4.  Ne calibrez pas trop souvent. Calibrating the sensor very often mostly leads to worse results. When the sensor delivers good results in flat conditions just don’t add any new calibration as it does not have any -useful- effect. It should be sufficient to recheck the status every 3-5 days (of course also in flat conditions).
5.  Évitez l'étalonnage lorsque ce n'est pas nécessaire. This might sound silly but it is not recommended to add a new calibration if the blood glucose to flesh glucose level difference is only ±10 mg/dl (e.g. blood glucose level: 95, Libre sensor 100 -> do NOT add the 9l, blood glucose level: 95, Libre sensor 115 -> add the 95 to be taken into account for the calibration)

Some general notes: After activating a new sensor and at the sensor’s end of life it does make sense to do comparison measurements more often than 3-5 days as stated in rule nr. 4. For new and old sensors it is more likely that the raw values change and a re-calibration is required. From time to time it happens that a sensor does not provide valid values. Most likely the sensor value is way to low compared to the actual blood glucose level (e.g. sensor: 50 mg/dl, bg: 130 mg/dl) even after calibrating. If this is the case the sensor cannot be calibrated to report useful results. Par ex. when using the patched libre app one can add an offset of maximal +20 mg/dl. When it happens to you that the sensor does provides way too low values, don’t hesitate to replace it as it will not get better. Even if it might be a defective sensor, when seeing sensors that do provide way too low values very often, try to use different areas to place your sensor. Even in the official area (upper arm) there might be some locations where the sensors just do not provide valid values. This is some kind of trial end error to find areas that work for you.
