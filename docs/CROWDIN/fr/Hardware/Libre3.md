# Freestyle Libre 3

Le système Freestyle Libre 3 peut automatiquement signaler des niveaux de glycémie dangereux. Le capteur Libre3 envoie la glycémie actuelle à un récepteur (lecteur ou smartphone) toutes les minutes. Le récepteur déclenche une alarme si nécessaire. With the help of the Juggluco app ([Link](https://www.juggluco.nl/Juggluco/mgdL/index.html)), you can start the sensor directly and connect it to Xdrip+, AAPS or Libreview. In this way, the blood sugar minute values can be transmitted directly. Il est même possible de recevoir des données historiques de la mémoire du capteur (deux heures de glycémies détaillées et deux semaines pour les données d'historiques toutes les 5 minutes) à envoyer à Juggluco.

You don't need the Libre3 app anymore. you can use it side by side with Juggluco, be sure to force shut the Libre 3 app before you use Juggluco.

If you use Xdrip+, the sensor can also be calibrated in the range of -40 mg/dl to +20 mg/dl (-2.2 mmol/l to +1.1 mmol/l) to compensate for differences between the bloody reading and the sensor readings.


### Step 1: Install & set up Juggluco

Now download & install the Juggluco App from here ([link](https://www.juggluco.nl/Juggluco/download.html)). With the help of this app, the blood sugar readings can be sent directly to Xdrip and AAPS. Pour cela, le capteur actif (qui est enregistré sur Libreview) est utilisé dans Juggluco. Ceci explique aussi pourquoi un compte Libreview est obligatoire.

Après avoir installé Juggluco, plusieurs messages peuvent apparaître. Permettre à Juggluco de trouver, localiser et connecter les appareils à proximité.

```{image} ../images/libre3/17.jpg
:alt: Autoriser les connexions Juggluco
```

Une demande de désactivation de l'optimisation de la batterie peut également apparaître. Appuyez sur "Autoriser". Ceci est important pour garder l'application en tâche de fond.

```{image} ../images/libre3/18.jpg
:alt: Désactiver l'optimisation de la batterie Juggluco
```

Appuyez sur OK lorsque Juggluco est installée.

```{image} ../images/libre3/19.jpg
:alt: Désactiver l'optimisation de la batterie Juggluco
```

Maintenant vous verrez l'écran d'accueil de Juggluco. Cliquez sur l'espace vide dans la moitié supérieure gauche. Vous pouvez voir la position approximative ici.

```{image} ../images/libre3/20.jpg
:alt: Ouvrir le menu Juggluco
```

Ce menu va s'ouvrir. Ici vous pouvez sélectionner "Settings".

```{image} ../images/libre3/21.jpg
:alt: menu Juggluco
```

Cette page sera alors affichée. Dans la sélection "1.", vous avez deux options :

1. "Send to xDrip" -> Avec ce paramètre, les lectures de glycémie sont envoyées à xDrip. Sélectionnez "Libre2 patched" ou "Libre 2 (patched app)" comme destinataire dans xDrip.
2. "xDrip broadcast" -> With this setting, the minutely blood sugar reading are sent directly to AAPS. The blood glucose source must be set to "xDrip+" within AAPS.

Pour démarrer le capteur, choisissez "2." la case à cocher "Libreview".

```{image} ../images/libre3/22.jpg
:alt: Paramètres Juggluco
```

Dans l'écran suivant, vous devez entrer vos données de connexion pour Libreview. Ce doit être le compte avec lequel le capteur a été activé. Cliquez ensuite sur "Get Account ID".

```{image} ../images/libre3/23.jpg
:alt: Connexion Libreview
```

Si tout s'est bien passé, un numéro à plusieurs chiffres devrait maintenant être visible sous le bouton "Resend data". Ce processus peut prendre un certain temps - si le numéro n'apparaît toujours pas, vérifiez votre connexion internet et recommencez les étapes précédentes.

**Remarque :** Si vous voulez télécharger des glycémies dans Libreview, vous pouvez cocher la case "Send to Libreview".

```{image} ../images/libre3/24.jpg
:alt: Vérifier Libreview
```

Maintenant il est temps de redémarrer le capteur! Retournez à l'écran d'accueil de Juggluco et scannez votre capteur précédemment activé. Le capteur démarrera et pourra entrer à nouveau dans une période de préchauffage de 60 minutes. Après les 60 minutes, les lectures devraient être visibles sur l'écran d'accueil de Juggluco.

```{image} ../images/libre3/25.jpg
:alt: Vérifier Libreview
```

C'est fait, et c'est tout! Si les lectures ne sont pas visibles, vous pouvez trouver plus d'informations dans la section "Expériences et dépannage".

### Step 2: Set up xDrip

Les glycémies sont reçues sur le smartphone par l'application xDrip+.

- Si ce n'est pas déjà configuré, alors téléchargez l'application xDrip+ et installez une des dernières pre-release à partir d'[ici](https://github.com/NightscoutFoundation/xDrip/releases).
- Dans xDrip+ sélectionnez "Libre2 (patched App)" comme source de données
- désactivez l'optimisation de la batterie et autorisez l'activité en arrière-plan pour l'application xDrip+
- Si nécessaire, entrez "BgReading:d,xdrip libre_receiver:v" dans Paramètres moins courants -> Paramètres de logs supplémentaires -> Balises supplémentaires pour le log. Cela permettra de consigner des messages d'erreur supplémentaires pour le dépannage.
- Dans xDrip allez dans Paramètres -> Paramètres Inter-applications -> Diffusion Locale et sélectionnez ON.
- Dans xDrip allez dans Paramètres > Paramètres Inter-applications > Accepter les traitements et sélectionnez OFF.
- pour permettre à AAPS de recevoir les glycémies (version 2.5.x et supérieures) de la part de xDrip+ veuillez renseigner dans Paramètres -> Paramètres Inter-applications -> Identifier le récepteur "info.nightscout.androidaps"
- If you want to be able to use AAPS to calibrate then in xDrip+ go to Settings -> Interapp Compatibility -> Accept Calibrations and select ON. Vous pouvez également consulter les options dans Paramètres -> Paramètres moins courants -> Paramètres Avancés de Calibration.

```{image} ../images/Libre2_Tags.png
:alt: xDrip+ journaux LibreLink
```

### Step 3: Start sensor within xDrip

Dans xDrip+ démarrez le capteur avec "Start Sensor" et "not today". Il n'est pas nécessaire de tenir le téléphone mobile sur le capteur. En fait, "Start Sensor" ne démarrera aucun capteur Libre 3 ou n'interagit en aucun cas avec eux. Il s'agit simplement d'indiquer à xDrip+ qu'un nouveau capteur envoie des glycémies. Si possible, entrez deux valeurs de glycémie capillaire pour l'étalonnage initial. Maintenant, les glycémies doivent être affichées dans xDrip+ toutes les 5 minutes. Les valeur manquées, par ex. si vous étiez trop loin de votre téléphone, ne seront pas actualisées à postériori.

Attendez au moins 15-20 minutes s'il n'y a toujours pas de données.

Après un changement de capteur, xDrip+ détectera automatiquement le nouveau capteur et supprimera toutes les données d'étalonnage. Vous pouvez vérifier la glycémie capillaire après l'activation et effectuer un nouvel étalonnage initial.

### Step 4: Configure AAPS

- In AAPS go to Config Builder -> BG Source and check "xDrip+"
- If AAPS does not receive BG values when phone is in airplane mode, use "Identify receiver"

Jusqu'à présent, en utilisant Libre 3 comme source Gly, vous ne pouvez pas activer les fonctions 'Activer SMB toujours' et 'Activer SMB après les glucides' dans l'algorithme SMB. Les valeurs de GLY du Libre 3 ne sont pas assez lisses pour l'utiliser en toute sécurité.

### Revenir à l'application Libre à partir de Juggluco

Il est possible de revenir de Juggluco à l'application Libre 3 en tant que récepteur. Les étapes suivantes sont nécessaires:

1. Réinstallez l'application Libre 3 (Ou effacez les données dans les paramètres)
2. Configurez l'application Libre 3 avec le compte Libreview avec lequel le capteur a été activé.
3. Arrêtez l'application Juggluco dans les paramètres, comme l'application Libre 3 dans les instructions.
4. Dans le menu Libre 3, cliquez sur "Démarrer le capteur", sélectionnez "Oui", "Suivant" et scannez votre capteur.
5. La phase de préchauffage de 60 minutes devrait alors commencer. Ceci est nécessaire après chaque changement et ne peut pas être ignoré.


### Missing FL3 values in Androidaps

Some Freestyle Libre 3 sensors send their minute glucose values not every minute (60s), but send them at slightly different times. (58s, 59s, or 61s, 62s). Juggluco gets the new glucose value directly from the sensor at whatever time they occure and broadcasts them. If you need Xdrip+ to calibrate or smooth the values and want them to be broadcasted to AAPS afterwards, there is a problem.

There is a sanity check in Xdrip+ that prevents broadcasting values that are below a certain threshold - in this case 60s.

This can lead to AndroidAPS not getting minute values from Xdrip!
```{image} https://camo.githubusercontent.com/72863950f3062716319362ba087877134d23fa9566c81e7ea6af266056dc5e1c/68747470733a2f2f696e73756c696e636c75622e64652f636f72652f696e6465782e7068703f6174746163686d656e742f32303136302d30356466383031392d343435642d343338652d383233362d3665396231633762333438622d6a7065672f
:alt: xDrip+ not broadcasting FL3 readings to AAPS.
```
To always get the values to AAPS, you have to use this Xdrip+ version: ([link](https://github.com/blaqone/xDrip))

(Libre3-experiences-and-troubleshooting)=
### Astuces et Dépannages

#### Paramètres obligatoires pour réussir le démarrage du capteur :

- NFC activé / BT activé
- Autorisation d'accès au stockage et à la localisation activées
- Service de localisation activé
- Réglage automatique de l'heure et du fuseau horaire

Veuillez noter que l'activation du service de localisation est primordial. Il ne s'agit pas de l'autorisation d'application qui doit être également définie !


#### Dépannage Libre3 sans lectures

- le service de localisation Android n'est pas autorisé - veuillez l'activer dans les paramètres système
- le réglage automatique de l'heure et du fuseau horaire n'est pas activé - veuillez modifier les paramètres en conséquence
- le Bluetooth est éteint - veuillez l'activer
- Assurez-vous que le capteur Libre 3 n'est connecté à aucun autre appareil.

#### Dépannage Juggluco sans glycémies

- Vérifiez si l'application Libre 3 est arrêtée.
- Rescanner le capteur Libre 3 dans l'application Juggluco
- Assurez-vous que le capteur a été activé avec le compte Libreview actuel
- Vérifiez si un numéro de capteur est visible dans Juggluco
- Le capteur est généralement connecté au smartphone en 3 minutes, mais cela peut prendre plus de temps.
- Si la connexion Bluetooth ne peut pas être établie, essayez de redémarrer le smartphone.
- Assurez-vous que le capteur Libre 3 n'est connecté à aucun autre appareil.

#### Dépannage des glycémies qui ne sont pas envoyées à Libreview

- Vérifiez votre connexion Internet
- Assurez-vous que Juggluco reçoit des glycémies
- Assurez-vous que la case "Send to Libreview" est cochée dans Juggluco->Settings->Libreview

#### Aide supplémentaire

Instructions d'origine : [site web jkaltes](http://jkaltes.byethost16.com/Juggluco/libre3/)

Dépôt Github Supplémentaire : [Lien Github](https://github.com/maheini/FreeStyle-Libre-3-patch)
