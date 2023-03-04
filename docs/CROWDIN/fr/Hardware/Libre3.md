# Freestyle Libre 3

Le système Freestyle Libre 3 peut automatiquement signaler des niveaux de glycémie dangereux. Le capteur Libre3 envoie la glycémie actuelle à un récepteur (lecteur ou smartphone) toutes les minutes. Le récepteur déclenche une alarme si nécessaire. Avec l'application Juggluco, le capteur peut être pris en charge après le démarrage et connecté à Xdrip+, AAPS ou Libreview. De cette façon, les valeurs de glycémie peuvent être transmises directement. Il est même possible de recevoir des données historiques de la mémoire du capteur (deux heures de glycémies détaillées et deux semaines pour les données d'historiques toutes les 5 minutes) à envoyer à Juggluco.

Le capteur peut être étalonné de -40 mg/dl à +20 mg/dl (-2,2 mmol/l à +1,1 mmol/l) pour ajuster les différences entre les glycémies capillaires et les lectures des capteurs.

## Limitations actuelle

- Si vous avez un système rooté, vous devez le cacher. Vous pouvez trouver les instructions [ici](https://www.reddit.com/r/Freestylelibre/comments/s22vlr/comment/hw2p4th/?utm_source=share&utm_medium=web2x&context=3).

  (Il y a plusieurs applications pour savoir si le smartphone est rooté, l'une d'elles est par exemple [Root Checker App](https://play.google.com/store/apps/details?id=com.joeykrim.rootcheck))

- L'application Juggluco ne prend en charge que les langues anglaise, néerlandaise et italienne.

### Étape 1 : Téléchargez et configurez l'application Libre 3

Installez l'application Libre 3 depuis le Playstore et ouvrez-la. Sur l'écran d'accueil, cliquez sur Se connecter. L'inscription à votre compte Libreview est obligatoire - si vous n'en avez pas encore un, vous pouvez en créer un.

```{image} ../images/libre3/1.jpg
:alt: Libre3 écran d'accueil
```

```{image} ../images/libre3/2.jpg
:alt: Compte LibreView
```

Vous devez ensuite accepter les conditions d'utilisation d'Abbott. Le dernier est facultatif et peut également être rejeté.

```{image} ../images/libre3/4.jpg
:alt: Condition Libre 3
```

```{image} ../images/libre3/5.jpg
:alt: Condition Libre 3
```

```{image} ../images/libre3/6.jpg
:alt: Condition Libre 3
```

Ajustez l'application étape par étape en fonction de vos besoins. Si vous voyez ce message sur la désactivation de l'optimisation de la batterie, appuyez sur "Autoriser".

```{image} ../images/libre3/10.jpg
:alt: Optimisation de la batterie Libre 3
```

Après avoir configuré l'application Libre 3, vous pouvez déjà activer votre premier capteur. Pour ce faire, scannez le capteur comme indiqué et attendez 60 minutes que le capteur démarre.

```{image} ../images/libre3/12.jpg
:alt: Activer le capteur Libre 3
```

### Étape 2 : Arrêter l'application Libre 3

Une fois le capteur démarré avec succès et la première lecture du capteur est visible, vous pouvez continuer. Maintenant, ouvrez les paramètres et sélectionnez l'option de menu "Applications".

```{image} ../images/libre3/13.jpg
:alt: Paramètres de l'application
```

Vous recherchez ensuite l'application Libre 3. Une fois que vous l'avez trouvé, appuyez dessus.

```{image} ../images/libre3/14.jpg
:alt: Paramètres de l'application Libre 3
```

Tapez maintenant sur "Arrêter" ou "Forcer l'arrêt". Le bouton exact peut varier en fonction de la version Android.

```{image} ../images/libre3/15.jpg
:alt: Quitter Libre 3
```

S'il y a une autre demande, vous pouvez la confirmer avec "OK".

```{image} ../images/libre3/16.jpg
:alt: Quitter Libre 3
```

### Étape 3: Installez & configurez Juggluco

Maintenant téléchargez & installez l'application Juggluco depuis [ici (lien)](https://github.com/maheini/FreeStyle-Libre-3-patch/raw/main/Juggluco-solution/versions/latest/Juggluco.apk) ou [ici (miroir)](http://jkaltes.byethost16.com/Juggluco/download.html) (version 4.0.1 ou supérieure). Avec l'aide de cette application, les glycémies peuvent être envoyées directement à Xdrip et AAPS. Pour cela, le capteur actif (qui est enregistré sur Libreview) est utilisé dans Juggluco. Ceci explique aussi pourquoi un compte Libreview est obligatoire.

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
2. "xDrip broadcast" -> Avec ce paramètre, la lecture de la glycémie est envoyée directement à AAPS. La source de glycémie doit être définie à "xDrip+" dans AAPS.

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

### Étape 4 : Configurez xDrip

Les glycémies sont reçues sur le smartphone par l'application xDrip+.

- Si ce n'est pas déjà configuré, alors téléchargez l'application xDrip+ et installez une des dernières pre-release à partir d'[ici](https://github.com/NightscoutFoundation/xDrip/releases).
- Dans xDrip+ sélectionnez "Libre2 (patched App)" comme source de données
- désactivez l'optimisation de la batterie et autorisez l'activité en arrière-plan pour l'application xDrip+
- Si nécessaire, entrez "BgReading:d,xdrip libre_receiver:v" dans Paramètres moins courants -> Paramètres de logs supplémentaires -> Balises supplémentaires pour le log. Cela permettra de consigner des messages d'erreur supplémentaires pour le dépannage.
- In xDrip+ go to Settings -> Interapp Compatibility -> Broadcast Data Locally and select ON.
- Dans xDrip allez dans Paramètres > Paramètres Inter-applications > Accepter les traitements et sélectionnez OFF.
- pour permettre à AAPS de recevoir les glycémies (version 2.5.x et supérieures) de la part de xDrip+ veuillez renseigner dans Paramètres -> Paramètres Inter-applications -> Identifier le récepteur "info.nightscout.androidaps"
- Si vous voulez pouvoir utiliser AAPS pour calibrer, alors dans xDrip, allez dans Paramètres -> Paramètres Inter-applications -> Accepter les Calibrations et sélectionnez ON. Vous pouvez également consulter les options dans Paramètres -> Paramètres moins courants -> Paramètres Avancés de Calibration.

```{image} ../images/Libre2_Tags.png
:alt: xDrip+ journaux LibreLink
```

### Étape 5 : Démarrez le capteur dans xDrip

Dans xDrip+ démarrez le capteur avec "Start Sensor" et "not today". It is not necessary to hold the mobile phone onto the sensor. In fact "Start Sensor" will not physically start any Libre 3 sensor or interact with them in any case. Il s'agit simplement d'indiquer à xDrip+ qu'un nouveau capteur envoie des glycémies. Si possible, entrez deux valeurs de glycémie capillaire pour l'étalonnage initial. Maintenant, les glycémies doivent être affichées dans xDrip+ toutes les 5 minutes. Skipped values, e.g. because you were too far away from your phone, will not be backfilled.

Wait at least 15-20 minutes if there is still no data.

Après un changement de capteur, xDrip+ détectera automatiquement le nouveau capteur et supprimera toutes les données d'étalonnage. Vous pouvez vérifier la glycémie capillaire après l'activation et effectuer un nouvel étalonnage initial.

### Step 6: Configure AndroidAPS

- In AndroidAPS go to Config Builder -> BG Source and check "xDrip+"
- If AndroidAPS does not receive BG values when phone is in airplane mode, use "Identify receiver"

Until now, using Libre 3 as BG source you cannot activate 'Enable SMB always' and 'Enable SMB after carbs' within SMB algorithm. The BG values of Libre 3 are not smooth enough to use it safely.

### Switch back to the Libre app from Juggluco

It is possible to switch back from Juggluco to the Libre 3 app as receiver. The following steps are necessary:

1. Reinstall Libre 3 app (Or clear data in settings)
2. Set up the Libre 3 app with the Libreview account with which the sensor was activated.
3. Stop the Juggluco app in the settings, similar to the Libre 3 app in the instructions.
4. In the Libre 3 menu, click "Start Sensor", select "Yes", "Next" and scan your sensor.
5. The 60-minute warm-up phase should then begin. This is necessary after every change and cannot be skipped.

(Libre3-experiences-and-troubleshooting)=
### Astuces et Dépannages

#### Necessary settings for a successful sensor start

- NFC activé / BT activé
- Storage and location permission enabled
- Location service enabled
- Automatic time and time zone setting

Veuillez noter que l'activation du service de localisation est primordial. It is not about the location permission of the app, which must be set as well!

#### Dépannage Libre3 sans lectures

- Android location service is not granted - please enable it in the system settings
- automatic time and time zone not set - please change the settings accordingly
- Bluetooth is switched off - please switch on¨
- Assurez-vous que le capteur Libre 3 n'est connecté à aucun autre appareil.

#### Troubleshooting Juggluco no readings

- Check if the Libre 3 app is stopped.
- Rescan the Libre 3 sensor within the Juggluco app
- Make sure the sensor has been activated with the current Libreview account
- Check if a sensor number is visible in Juggluco
- The sensor is usually connected to the smartphone within 3 minutes, but it can also take longer.
- If the Bluetooth connection cannot be established, try restarting the smartphone.
- Assurez-vous que le capteur Libre 3 n'est connecté à aucun autre appareil.

#### Troubleshooting Blood sugar readings not uploading to Libreview

- Vérifiez votre connexion Internet
- Assurez-vous que Juggluco reçoit des glycémies
- Assurez-vous que la case "Send to Libreview" est cochée dans Juggluco->Settings->Libreview

#### Aide supplémentaire

Instructions d'origine : [site web jkaltes](http://jkaltes.byethost16.com/Juggluco/libre3/)

Dépôt Github Supplémentaire : [Lien Github](https://github.com/maheini/FreeStyle-Libre-3-patch)
