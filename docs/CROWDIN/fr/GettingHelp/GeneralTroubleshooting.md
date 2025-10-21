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

### Cannot start Omnipod with Android 16

Upgrade to minimum version of AndroidAPS: 3.3.2.1.

### Frequent Bluetooth connection problems

#### Android 15

After upgrading Android or moving to a recent phone, **AAPS** frequently loses Bluetooth connection to the pump. The problem disappears temporarily when restarting the phone. If the phone runs Android 15, you can try to enable the following:

1) **Open preferences** by clicking the three-dot menu on the top right side of the home screen.


![Open preferences](../images/Pref2020_Open2.png)

2. Scroll down and open the **Confirmation beeps** / **Advanced** submenu. Enable **Bond BT device on Android 15+**.

   ![BondBT](../images/troubleshooting/BondBT.png)

3. If the pump asks for a pairing request, accept it.

4. Restart your phone.

#### Battery optimization

Cela peut se produire avec diverses pompes. Apart from excluding AAPS from any battery optimization, you can also exclude the system Bluetooth app from battery optimization. Cela peut être utile dans certains cas. Depending on the phone you use, you will find the Bluetooth app differently.

Voici des exemples pour les trouver sur des téléphones Android spécifiques.


##### Pixel phones (stock Android)

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


##### Téléphone Samsung

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
