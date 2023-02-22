# Dexcom G6

## Les bases en premier

-   Suivez les recommandations générales relatives à l'hygiène des MGG et du capteur [ici](../Hardware/GeneralCGMRecommendation.md).
-   Pour les émetteurs G6 fabriqués après l'automne/fin 2018, assurez-vous d'utiliser l'une des [dernières versions nightly build xDrip+](https://github.com/NightscoutFoundation/xDrip/releases). Ces transmetteurs ont un nouveau firmware et la dernière version stable de xDrip+ (10/01/2019) ne fonctionne pas avec.

## Conseils généraux pour boucler avec un G6

Ce qui est clair, c’est que l’utilisation du G6 est peut-être un peu plus complexe qu’on pourrait le penser au premier abord. Pour l'utiliser en toute sécurité, il y a quelques points à prendre en compte :

-   Si vous utilisez les données natives avec le code d'étalonnage dans xDrip+ ou Spike, la chose la plus sûre à faire est de ne pas autoriser les redémarrages préventifs du capteur.
-   Si vous devez faire un redémarrage préventif, assurez-vous de le faire à un moment de la journée où vous pouvez observer le changement et faire la calibration si nécessaire.
-   Si vous redémarrez des capteurs, fais-le sans l'étalonnage de l'usine pour obtenir les résultats les plus sûrs les jours 11 et 12, ou assurez-vous que vous êtes prêt à le calibrer et à garder un oeil sur la variation.
-   La pré-installation du G6 avec un étalonnage d'usine peut entraîner des variations dans les résultats. Si vous faites une pré-installation, alors pour obtenir les meilleurs résultats, vous devrez probablement calibrer le capteur.
-   Si vous n'êtes pas attentif aux changements qui peuvent avoir lieu, il peut être préférable de revenir dans un mode "non calibré en usine" et d'utiliser le système comme un G5.

Pour en savoir plus sur les détails et les raisons de ces recommandations, consultez [l'article complet](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) publié par Tim Street sur [www.diabettech.com](https://www.diabettech.com).

## Si vous utilisez le G6 avec xdrip+

-   L'émetteur Dexcom G6 peut être connecté simultanément au récepteur Dexcom (ou alternativement à la pompe t:slim) et à une application sur votre téléphone.
-   Lorsque vous utilisez xDrip+ comme récepteur, désinstallez d'abord l'application Dexcom. **Vous ne pouvez pas connecter xDrip + et l'application Dexcom avec l'émetteur en même temps !**
-   If you need Clarity and want to profit from xDrip+ alarms use the [BYODA](DexcomG6-if-using-g6-with-build-your-own-dexcom-app) with local broadcast to xDrip+.
-   Si ce n'est pas encore configuré, téléchargez [xDrip](https://github.com/NightscoutFoundation/xDrip) et suivez les instructions sur [la page de configuration xDrip+](../Configuration/xdrip.md).
-   Sélectionnez xDrip dans la Configuration (dans AndroidAPS).
-   Ajuster les paramètres dans xDrip+ en fonction de [la page de configuration xDrip+](../Configuration/xdrip.md).
-   Si AAPS ne reçoit pas de valeurs de glycémie lorsque le téléphone est en mode avion utilisez 'Identifier le récepteur' comme décrit dans [la page de configuration xDrip+](../Configuration/xdrip.md).

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## Si vous utilisez G6 avec votre propre application Dexcom

-   * Depuis Décembre 2020 [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0) (BYODA) prend également en charge la diffusion locale vers AAPS et/ou xDrip+ (sauf pour les capteurs G5 !)
-   Cette application vous permet d'utiliser votre Dexcom G6 avec n'importe quel smartphone Android.
-   Désinstallez l'application Dexcom d'origine ou l'application Dexcom patchée si vous en avez utilisé une auparavant.
-   Installer l'APK téléchargé
-   Entrez le code du capteur et le numéro de série du transmetteur dans l'application patchée.
-   Dans les paramètres du téléphone, allez dans Applications > Dexcom G6 > Autorisations > Autorisations supplémentaires et appuyez sur 'Access Dexcom app'.
-   Après une courte période BYODA devrait recevoir le signal du transmetteur. (Si ce n'est pas le cas, vous devrez arrêter le capteur et en démarrer un nouveau.)

### Paramètres pour AndroidAPS

-   Sélectionnez 'App Dexcom (patchée)' dans la Configuration.
-   Si vous ne recevez aucune valeur, sélectionnez une autre source de données, puis re-sélectionnez 'App Dexcom (patchée)' pour déclencher la demande d'autorisations pour établir la connexion entre AAPS et BYODA.

### Paramètres pour xDrip+

-   Sélectionnez '640G / Eversense' comme source de données.
-   La commande 'démarrer le capteur' doit être effectuée dans xDrip+ pour recevoir les valeurs. Cela n'affectera pas votre capteur actuel contrôlé par Build Your Own Dexcom App.


(DexcomG6-troubleshooting-g6)=
## Dépannage G6

### Dépannages spécifiques à Dexcom G6

-   Les transmetteurs avec un numéro commençant par 80 ou 81 ont besoin au minimum de la dernière version stable de xDrip datée de Mai 2019 ou d'une mise à jour plus récente.
-   Les transmetteurs avec un numéro commençant par 8G ont besoin de la version du 25 juillet ou plus récente.
-   xDrip+ et l'Application Dexcom ne peuvent pas être connectés à l'émetteur en même temps.
-   Attendez au moins 15 min entre l'arrêt et le démarrage d'un capteur.
-   N'antidatez jamais l'heure de l'insertion. Répondez toujours à la question "Est-ce que vous l'avez inséré aujourd'hui?" par "Oui, aujourd'hui".
-   Ne pas activer "redémarrer capteurs" lorsque vous configurez un nouveau capteur
-   Ne démarrez pas le nouveau capteur avant que l'information suivante soit présente dans la page Etat du système -> G5/G6 status -> PhoneServiceState :
    -   Numéro de série du transmetteur commençant par 80 ou 81 : "Got data hh:mm" (par ex. "Got data 19:04")
    -   Numéro de série du transmetteur commençant par 8G ou 8H : "Got glucose hh:mm" (par ex. "Got glucose 19:04") ou "Got now raw hh:mm" (par ex. "Got now raw 19:04")

![xDrip+ PhoneServiceState](../images/xDrip_Dexcom_PhoneServiceState.png)

### Dépannage général

General Troubleshoothing for CGMs can be found [here](./GeneralCGMRecommendation.html#troubleshooting).

### Nouvel émetteur avec capteur en cours

If you happen to change transmitter during a running sensor session you might try to remove the transmitter without damaging the sensor mount. A video can be found at <https://youtu.be/tx-kTsrkNUM>.
