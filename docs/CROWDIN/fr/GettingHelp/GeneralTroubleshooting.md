# Troubleshooting

Vous pouvez trouver des informations de dépannage sur de nombreuses pages dans le wiki. Cette page est une collection de liens pour vous aider à trouver les informations nécessaires pour résoudre votre problème.

D'autres informations utiles peuvent également être disponibles dans la [FAQ](../UsefulLinks/FAQ.md).

## Application AAPS

### Génération et mise à jour

* [Fichier de clés perdu](#troubleshooting_androidstudio-lost-keystore)
* [Dépannage AndroidStudio](TroubleshootingAndroidStudio)

### Installing

You may see a Google Play Protect warning that the app is unsafe, was built for older Android versions and doesn't include latest privacy protections.

Ignore it: More details, Install anyway.

![Google Play Protect warning](../images/troubleshooting/InstallGPP.png)

### Paramètres
* Profil

  ![Error: Débits de Basal non alignés sur les heures](../images/Screen_DifferentPump.png)

* [Pompe - données provenant de différentes pompes](#update30-failure-message-data-from-different-pump)

  ![Message d'échec : Données provenant de pompes différentes](../images/BasalNotAlignedToHours2.png)

* [Client Nightscout](../GettingHelp/TroubleshootingNsClient.md)

### Utilisation
* [Valeur de glucides incorrectes](#CobCalculation-detection-of-wrong-cob-values)

   ![Erreur: Absorption lente des glucides](../images/Calculator_SlowCarbAbsorption.png)

* [Commandes SMS](#SMSCommands-troubleshooting)

### Problèmes de connexion bluetooth fréquents

Cela peut se produire avec diverses pompes. En plus d'exclure AAPS de toute optimisation de batterie, vous pouvez également exclure l'application Bluetooth du système de l'optimisation de la batterie. Cela peut être utile dans certains cas. Selon le téléphone que vous utilisez, vous trouverez l'application bluetooth différemment.

Voici des exemples pour les trouver sur des téléphones Android spécifiques.


#### Téléphones Pixel (Android standard)

* Allez dans les paramètres d'Android, sélectionnez "Applications".

  ![Paramètres Android ¦Applications](../images/troubleshooting/pixel/01_androidsettings.png)

* Sélectionnez "Voir toutes les applications"

  ![Voir toutes les applis](../images/troubleshooting/pixel/02_apps.png)

* Dans le menu à droite, sélectionnez "Afficher les applications système".

  ![Afficher les applications système](../images/troubleshooting/pixel/03_allapps.png)

* Maintenant, recherchez et sélectionnez l'application "Bluetooth".

  ![Application Bluetooth](../images/troubleshooting/pixel/03_bluetooth.png)

* Cliquez sur "Optimisation de la batterie" et sélectionnez "Ne pas optimiser".

  ![Optimisation batterie BT](../images/troubleshooting/pixel/04_btunrestricted.png)


#### Téléphone Samsung

* Allez dans les paramètres d'Android, sélectionnez "Applications"

* Sur l'icône qui modifie soi-disant l'algorithme de tri (1), sélectionnez "Afficher les applications système" (2).

  ![Filtrer les Applis](../images/troubleshooting/samsung/Samsung01_Apps.png)

  ![Afficher les applications système](../images/troubleshooting/samsung/Samsung02_ShowSystemApps.png)

* Maintenant, recherchez l'application bluetooth et sélectionnez-la pour voir ses paramètres.

  ![Application Bluetooth](../images/troubleshooting/samsung/Samsung03_BtApp.png)

* Sélectionnez "batterie".

  ![Niveau batterie](../images/troubleshooting/samsung/Samsung04_Battery.png)

* Réglez le sur "Non optimisé"

  ![Non optimisée](../images/troubleshooting/samsung/Samsung05_NotOptimized.png)


## MGC

* [General](#general-cgm-troubleshooting)
* [Dexcom G6](#DexcomG6-troubleshooting-g6)
* [Libre 3](#libre3-experiences-and-troubleshooting)
* [Libre 2](#Libre2-experiences-and-troubleshooting)
* [xDrip - pas de données MGC](#xdrip-identify-receiver)
* [Dépannage xDrip - Dexcom](#xdrip-troubleshooting-dexcom-g5-g6-and-xdrip)

## Pompes

* [DanaRS](#DanaRS-Insulin-Pump-dana-rs-specific-errors)
* [Accu-Chek Combo généralités](../CompatiblePumps/Accu-Chek-Combo-Tips-for-Basic-usage.md)
* [Accu-Chek Insight](#Accu-Chek-Insight-Pump-insight-specific-errors)
* [Medtronic + RileyLink](#MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump)

## Téléphones

* [Jelly](../CompatiblePhones/Jelly.md)
* [Huawei optimisation bluetooth & batterie](../CompatiblePhones/Huawei.md)

## Montres connectées

* [Dépannage de l'application Wear](#Watchfaces-troubleshooting-the-wear-app)
