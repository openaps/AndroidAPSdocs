# Dexcom G6

## Les bases en premier

-   Follow general CGM hygiene and setting sensor recommendation [here](../Hardware/GeneralCGMRecommendation.md).

## Conseils généraux pour boucler avec un G6

Pour l'utiliser en toute sécurité, il y a quelques points à prendre en compte :

-   If you are using a rebatteried or modded transmitter with xDrip+, the safest thing to do is **disable** preemptive restarts of the sensor that are anyway not needed for xDrip+.
-   La pré-installation du G6 avec un étalonnage d'usine peut entraîner des variations dans les résultats. Si vous faites une pré-installation, alors pour obtenir les meilleurs résultats, vous devrez probablement calibrer le capteur.

To learn more about the details and reasons for these recommendations read the [complete article](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) published by Tim Street at [www.diabettech.com](https://www.diabettech.com).

## Si vous utilisez le G6 avec xdrip+

-   L'émetteur Dexcom G6 peut être connecté simultanément au récepteur Dexcom (ou alternativement à la pompe t:slim) et à une application sur votre téléphone.
-   Lorsque vous utilisez xDrip+ comme récepteur, désinstallez d'abord l'application Dexcom. **You cannot connect xDrip+ and Dexcom app with the transmitter at the same time!**
-   If you need Clarity and want to profit from xDrip+ alarms use the [BYODA](DexcomG6-if-using-g6-with-build-your-own-dexcom-app) with local broadcast to xDrip+.
-   If not already set up, download [xDrip+](https://github.com/NightscoutFoundation/xDrip) and follow the instructions on [xDrip+ settings page](../Configuration/xdrip.md).
-   Select xDrip+ in ConfigBuilder (setting in AAPS).
-   Adjust settings in xDrip+ according to [xDrip+ settings page](../Configuration/xdrip.md)
-   If AAPS does not receive BG values when phone is in airplane mode use 'Identify receiver' as describe on [xDrip+ settings page](../Configuration/xdrip.md).

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## Si vous utilisez G6 avec votre propre application Dexcom

-   As of December 2020 [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0) (BYODA) also supports local broadcast to AAPS and/or xDrip+ (not for G5/ONE/G7 sensors!)
-   Cette application vous permet d'utiliser votre Dexcom G6 avec n'importe quel smartphone Android.
-   Uninstall the original Dexcom app or patched Dexcom app if you used one of those previously (**do not stop** the currently running sensor)
-   Installer l'APK téléchargé
-   Entrez le code du capteur et le numéro de série du transmetteur dans l'application patchée.
-   In phone settings go to apps > Dexcom G6 > permissions > additional permissions and press 'Access Dexcom app'.
-   Après une courte période BYODA devrait recevoir le signal du transmetteur.

### Settings for AAPS

-   Sélectionnez 'App Dexcom (patchée)' dans la Configuration.
-   If you don't receive any values select any other data source, then re-select 'Dexcom App (patched)' to trigger the demand for permissions to establish the connection between AAPS and BYODA-broadcast.

### Paramètres pour xDrip+

-   Sélectionnez '640G / Eversense' comme source de données.
-   Command 'start sensor' must be performed in xDrip+ in order to receive values. This will not affect your current sensor controlled by Build Your Own Dexcom App.


(DexcomG6-troubleshooting-g6)=
## Dépannage G6

### Dépannages spécifiques à Dexcom G6

-   Scroll down to **Troubleshooting** [here](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Dépannage général

General Troubleshooting for CGMs can be found [here](./GeneralCGMRecommendation.md#troubleshooting).

### Nouvel émetteur avec capteur en cours

If you happen to change transmitter during a running sensor session you might try to remove the transmitter without damaging the sensor mount. A video can be found at <https://youtu.be/tx-kTsrkNUM> and [here](https://navid200.github.io/xDrip/docs/Remove-transmitter.html).
