# **Freestyle Libre 3** et 3+

Le Freestyle Libre 3 (FSL3) demande une configuration spéciale pour envoyer les glycémies à AAPS. Il y a deux façons d'envoyer les valeurs du Freestyle Libre 3 (FSL3) à AAPS.

![FL3](../images/d912c1d3-06d2-4b58-ad7c-025ca1980fae.jpeg)

Les méthodes ci-dessous utilisent l'application séparée Juggluco. Elle utilise Juggluco pour recevoir les données brutes du capteur, à intervalle d'1 minute, qui sont ensuite transmises à xDrip ou à AAPS. Les nouveaux capteurs peuvent être démarrés soit avec l'application Libre 3, soit directement dans Juggluco. Le guide ci-dessous décrit comment démarrer un capteur avec l'application Juggluco. Si le capteur a été démarré avec un compte Libreview connecté, il est aussi possible de passer de Juggluco à l'application Libre 3 comme récepteur, et inversement.

Juggluco peut aussi transmettre les données à LibreView pour les partager avec les professionnels de santé, si le capteur a été démarré avec l'application Libre 3.

Dans xDrip, le capteur peut être calibré dans une plage de -40 mg/dl à +20 mg/dl (-2,2 mmol/l à +1,1 mmol/l) pour compenser les différences entre une mesure manuelle au lecteur de glycémie et les valeurs du capteur.

## Méthode 1 : utiliser directement les valeurs à 1 minute
**AAPS** est conçu pour des valeurs toutes les 5 minutes. C'est pourquoi le traitement des valeurs à 1 minute a parfois des limites.

Voir [ici](#juggluco-to-aaps).


## Méthode 2 : convertir les valeurs à 1 minute en valeurs à 5 minutes avec xDrip
Cette méthode utilise Juggluco pour recevoir les données brutes du capteur, à intervalle d'1 minute. Elles sont ensuite transmises à xDrip, qui les lisse en données à intervalle de 5 minutes et les transmet à AAPS.

### Étape 1 : Configurez Juggluco
Téléchargez et installez l'application Juggluco depuis [ce lien](https://www.juggluco.nl/Juggluco/download.html). Suivez les instructions [ici](https://www.juggluco.nl/Juggluco/libre3/)

Vérifiez que vous envoyez les glycémies à xDrip : dans les paramètres de Juggluco, vous pouvez configurer Juggluco pour envoyer ses glycémies à d'autres applications. Juggluco can send three types of such broadcasts: The **Patched Libre broadcast** was originally used by the patched Librelink app and can be used to send glucose values to xDrip.

### Étape 2 : Configurez xDrip

Les glycémies sont reçues par l'application xDrip sur le smartphone.

- Si ce n'est pas déjà fait, téléchargez [xDrip](https://github.com/NightscoutFoundation/xDrip) et suivez les instructions de la [page des paramètres xDrip](../CompatibleCgms/xDrip.md).
- Dans xDrip, choisissez « Libre2 (patched app) » comme source de données.
- Si nécessaire, saisissez « BgReading:d,xdrip libre_receiver:v » dans Less Common Settings → Extra Logging Settings → Extra tags for logging. Cela enregistre des messages d'erreur supplémentaires pour la résolution de problèmes.

![Journalisation LibreLink dans xDrip](../images/Libre2_Tags.png)

- Techniquement, la glycémie actuelle est envoyée à xDrip chaque minute. Un filtre de moyenne pondérée calcule par défaut une valeur lissée sur les 25 dernières minutes. Vous pouvez changer la période dans le menu NFC Scan features.

  → Menu hamburger → Settings → NFC Scan features → Smooth libre 3 data when using xxx method

  ![Paramètres avancés xDrip pour Libre 2 & valeurs brutes](../images/xDrip_Libre3_Smooth.png)



### Étape 3 : Démarrez le capteur dans xDrip

Dans xDrip, démarrez le capteur avec « Start Sensor » et « not today ». Il n'est pas nécessaire de tenir le téléphone mobile sur le capteur. En fait, « Start Sensor » ne démarre physiquement aucun capteur Libre 3 et n'interagit jamais avec eux. Cela sert seulement à indiquer à xDrip qu'un nouveau capteur envoie des glycémies. Si possible, saisissez deux mesures de glycémie capillaire pour la calibration initiale. Les glycémies devraient maintenant s'afficher dans xDrip toutes les 5 minutes. Les valeurs manquées, par ex. parce que vous étiez trop loin de votre téléphone, ne seront pas complétées après coup.

Attendez au moins 15–20 minutes s'il n'y a toujours pas de données.

Après un changement de capteur, xDrip détecte automatiquement le nouveau capteur et efface toutes les données de calibration. Vous pouvez vérifier votre glycémie après l'activation et faire une nouvelle calibration initiale.

### Étape 4 : Configurez AAPS

- Voir [ici](#juggluco-to-xdrip), puis revenez.

- Si **AAPS** ne reçoit pas les glycémies quand le téléphone est en mode avion, utilisez « Identify receiver »
- Désactivez le Lissage (déjà fait dans xDrip)

## Changements de capteur suivants

1. Ouvrez Juggluco et notez le numéro de série du capteur actuel

![Numéro de série Libre](../images/libre3/step_13.jpg)

2. Maintenant, scannez simplement votre nouveau capteur avec le lecteur NFC de votre téléphone. Juggluco affiche un message si le processus a bien démarré.
3. Quand vous êtes prêt à désactiver l'ancien capteur, ouvrez le menu de Juggluco en appuyant n'importe où dans l'espace vide en haut à gauche de l'écran.
4. Choisissez le capteur expiré et appuyez sur « Terminate »

![Terminer le capteur](../images/libre3/step_14.jpg)

Remarque : quand deux capteurs sont actifs, Juggluco envoie à xDrip la valeur la plus récente de l'un ou l'autre capteur. If the sensors are not calibrated to read BG similarly, this may result in jumpy BG values being reported to xDrip. Si vous terminez le mauvais capteur, vous pouvez le réactiver simplement en scannant ce capteur.

## Passer le capteur de l'application Libre 3 à Juggluco et inversement

Si le capteur a été démarré avec un compte Libreview connecté, il est aussi possible de passer de Juggluco à l'application Libre 3 comme récepteur, et inversement. Cela demande les étapes suivantes :

1. Installez l'application Libre 3 depuis le Google Play Store
2. Configurez l'application Libre 3 avec le compte Libreview avec lequel le capteur a été activé.
3. Forcez l'arrêt de l'application Juggluco dans les paramètres Android.
4. Dans le menu Libre 3, cliquez sur "Démarrer le capteur", sélectionnez "Oui", "Suivant" et scannez votre capteur.
5. Après quelques minutes, les glycémies devraient être visibles dans l'application Libre 3.

Pour passer de l'application Libre 3 à Juggluco, vous devez forcer l'arrêt de l'application Libre 3 dans les paramètres Android, puis suivre les étapes 1 et 2.

(libre3-experiences-and-troubleshooting)=
## Astuces et Dépannages

### Dépannage de la connexion Libre3 -> Juggluco

- Vérifiez que vous utilisez une version récente de l'application Juggluco
- Vérifiez vos paramètres selon ce guide
- Parfois, vous devrez forcer l'arrêt de l'application Libre 3 et de Juggluco, puis les redémarrer.
- Désactivez le Bluetooth, puis réactivez-le
- Attendez un peu ou essayez de fermer Juggluco
- Les anciennes versions de Juggluco (avant 2.9.6) n'envoient pas les données suivantes du capteur Libre3 aux appareils connectés (par ex. Juggluco sur WearOS). Vous devrez peut-être appuyer sur « Resend data » dans l'application Libre3 patchée (menu Juggluco).

### Aide supplémentaire

Instructions d'origine : [site web jkaltes](https://www.juggluco.nl/Juggluco/libre3/)

Additional GitHub repo: [GitHub link](https://github.com/maheini/FreeStyle-Libre-3-patch)
