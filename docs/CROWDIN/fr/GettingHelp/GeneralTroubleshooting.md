(generaltroubleshooting)=

# **Troubleshooting**

Vous pouvez trouver des informations de dépannage sur de nombreuses pages dans le wiki. This page is a collection of links to help you find the information to solve your problem for various known issues.

D'autres informations utiles peuvent également être disponibles dans la [FAQ](../UsefulLinks/FAQ.md).

---

(generaltroubleshooting-aaps-app)=

## **Application AAPS**

### **Génération et mise à jour**

* [Fichier de clés perdu](#troubleshooting_androidstudio-lost-keystore)
* [Dépannage AndroidStudio](TroubleshootingAndroidStudio)

### **Installing**

You may see a Google Play Protect warning that the app is unsafe, was built for older Android versions and doesn't include latest privacy protections.

Ignore it: More details, Install anyway.

![Google Play Protect warning](../images/troubleshooting/InstallGPP.png)

### **Paramètres**
* Profil

  ![Error: Débits de Basal non alignés sur les heures](../images/Screen_DifferentPump.png)

* [Pompe - données provenant de différentes pompes](#update30-failure-message-data-from-different-pump)

  ![Message d'échec : Données provenant de pompes différentes](../images/BasalNotAlignedToHours2.png)

* [Client Nightscout](../GettingHelp/TroubleshootingNsClient.md)

### **Utilisation**
* [Valeur de glucides incorrectes](#CobCalculation-detection-of-wrong-cob-values)

   ![Erreur: Absorption lente des glucides](../images/Calculator_SlowCarbAbsorption.png)

* [Commandes SMS](#SMSCommands-troubleshooting)

---

(generaltroubleshooting-bluetooth-related-issues)=


## **Bluetooth related issues**

For known issues with Bluetooth connections, dropouts of pump/pods, or activation and connection issues [Bluetooth Troubleshooting](../GettingHelp/BluetoothTroubleshooting.md)

---

(generaltroubleshooting-android-related-issues)=

## **Android Related Issues**

### **Battery optimization**

Android has implemented battery saving setting that are enabled by default. These settings automatically suspend/pause applications that are not required for the system to function to help conserve the amount of battery energy used by apps that don't always need to be running.

When this is enabled, it will very likely cause issue for **AAPS** and other supporting apps like **xDrip+**.

It's important to ensure that you have disabled Battery Optimization to ensure **AAPS** and other supporting apps remain active all the time.

Depending on your phone model and make there may be more than one location and setting which needs to have this disabled.

***NOTE:** Follow the steps below to Disable Battery Optimization for the Bluetooth service if your phone has this option, the same steps can be used to disable for **AAPS** and other apps, however the screenshots will only show how to do this for the Bluetooth service.*

#### **Pixel phones (stock Android)**

* Go to the Android settings, select "Apps".

  ![Paramètres Android ¦Applications](../images/troubleshooting/pixel/01_androidsettings.png)

* Sélectionnez "Voir toutes les applications"

  ![Voir toutes les applis](../images/troubleshooting/pixel/02_apps.png)

* Dans le menu à droite, sélectionnez "Afficher les applications système".

  ![Afficher les applications système](../images/troubleshooting/pixel/03_allapps.png)

* Maintenant, recherchez et sélectionnez l'application "Bluetooth".

  ![Application Bluetooth](../images/troubleshooting/pixel/03_bluetooth.png)

* Cliquez sur "Optimisation de la batterie" et sélectionnez "Ne pas optimiser".

  ![Optimisation batterie BT](../images/troubleshooting/pixel/04_btunrestricted.png)


#### **Téléphone Samsung**

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

#### **Huawei phones**

See this guide for [Huawei bluetooth & battery optimization](../CompatiblePhones/Huawei.md)

---

(generaltroubleshooting-cgm)=

## **Continious Glucose Monitor (CGM)**

Useful links to known issues and steps to resolve for CGMs.

* [General](#general-cgm-troubleshooting)
* [Dexcom G6](#DexcomG6-troubleshooting-g6)
* [Libre 3](#libre3-experiences-and-troubleshooting)
* [xDrip - pas de données MGC](#xdrip-identify-receiver)
* [Dépannage xDrip - Dexcom](#xdrip-troubleshooting-dexcom-g5-g6-and-xdrip)

---

(generaltroubleshooting-pumps)=

## **Pompes**

Useful links to known issues and steps to resolve for Pumps

* [DanaRS](#DanaRS-Insulin-Pump-dana-rs-specific-errors)
* [Accu-Chek Combo généralités](../CompatiblePumps/Accu-Chek-Combo-Tips-for-Basic-usage.md)
* [Accu-Chek Insight](#Accu-Chek-Insight-Pump-insight-specific-errors)
* [Medtronic + RileyLink](#MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump)

---

(generaltroubleshooting-phones)=

## **Téléphones**

Useful links to known issues and steps to resolve for Phones

* [List of tested phone and device setups](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true)
* [Jelly](../CompatiblePhones/Jelly.md)
* [Huawei optimisation bluetooth & batterie](../CompatiblePhones/Huawei.md)

(generaltroubleshooting-smartwatches)=

## Montres connectées

Useful links to known issues and steps to resolve for Smartwatches

* [Dépannage de l'application Wear](#Watchfaces-troubleshooting-the-wear-app)
