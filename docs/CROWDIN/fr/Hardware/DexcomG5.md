# Dexcom G5

## Si vous utilisez le G5 avec xdrip +

-   Si ce n'est pas encore configuré, téléchargez [xDrip](https://github.com/NightscoutFoundation/xDrip) et suivez les instructions sur Nightscout ([G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
-   Dans xDrip allez dans Paramètres > Inter-app settings > Diffusion Locale et sélectionnez ON.
-   Dans xDrip allez dans Paramètres > Paramètres Inter applications > Accepter les traitements et sélectionnez OFF.
-   If you want to be able to use AAPS to calibrate then in xdrip go to Settings > Interapp Compatibility > Accept Calibrations and select ON. Vous pouvez également consulter les options dans Paramètres > Paramètres moins courants > Paramètres Avancés de Calibration.
-   Select xdrip in ConfigBuilder (setting in AAPS).
-   Si AAPS ne reçoit pas de valeurs de glycémie lorsque le téléphone est en mode avion utilisez 'Identifier le récepteur' comme décrit dans les [paramètres xDrip+](../Configuration/xdrip.md).

## Si vous utilisez le G5 avec l'application Dexcom patché

-   Téléchargez l'apk de <https://github.com/dexcomapp/dexcomapp>, et choisissez la version qui correspond à vos besoins (version mg/dl ou mmol/l, G5).

    -   Folder 2.3 is for users of AAPS 2.3, folder 2.4 for users of AAPS 2.5.
    -   Ouvrez <https://play.google.com/store/search?q=dexcom%20g5> sur votre ordinateur. La région sera visible dans l'URL.

    ![Region in Dexcom G5 URL](../images/DexcomG5regionURL.PNG)

-   Arrêter le capteur et désinstaller l'application Dexcom d'origine, si ce n'est pas déjà fait.

-   Installer l'APK téléchargé

-   Démarrer le capteur

-   Select Dexcom App (patched) in ConfigBuilder (setting in AAPS).

-   Si vous voulez utiliser les alarmes xDrip via une diffusion locale, allez dans xDrip, Menu hamburger > Paramètres > Source de données matérielles > 640G /EverSense.
