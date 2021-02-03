Dexcom G5
**************************************************
Si vous utilisez le G5 avec xdrip +
==================================================
* Si vous ne l'avez pas déjà configuré, téléchargez `xdrip <https://github.com/NightscoutFoundation/xDrip>`_ et suivez les instructions concernant Nightscout (`G5 <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>`_.
* Dans xDrip allez dans Paramètres > Paramètres Inter applications > Diffusion Locale et sélectionnez ON.
* Dans xDrip allez dans Paramètres > Paramètres Inter applications > Accepter les traitements et sélectionnez OFF.
* Si vous voulez pouvoir utiliser AndroidAPS pour calibrer, alors dans xDrip, allez dans Paramètres > Compatibilité Interapp > Accepter les Calibrations et sélectionnez ON.  Vous pouvez également consulter les options dans Paramètres > Paramètres moins courants > Paramètres Avancés de Calibration.
* Sélectionnez xDrip dans ConfigBuilder (Menu Paramètres dans AndroidAPS).
* If AAPS does not receive BG values when phone is in airplane mode use 'Identify receiver' as describe on `xDrip+ settings page <../Configuration/xdrip.md>`_ .

Si vous utilisez le G5 avec l'application Dexcom patché
==================================================
* Télécharger l'apk sur `https://github.com/dexcomapp/dexcomapp <https://github.com/dexcomapp/dexcomapp>`_, et choisissez la version correspondant à vos besoins (version G5, mg/dl ou mmol/l).

  * Le dossier 2.3 est destiné aux utilisateurs d'AndroidAPS 2.3, le dossier 2.4 pour les utilisateurs de AAPS 2.5.
  * Ouvrez https://play.google.com/store/search?q=dexcom%20g5 sur votre ordinateur. La région sera visible dans l'URL.

   .. image:: ../images/DexcomG5regionURL.PNG
     :alt: Region in Dexcom G5 URL

* Arrêter le capteur et désinstaller l'application Dexcom d'origine, si ce n'est pas déjà fait.
* Installer l'APK téléchargé
* Démarrer le capteur
* Sélectionnez "App Dexcom (patchée)" dans le Générateur de configurations (paramétrage dans AndroidAPS).
* Si vous voulez utiliser les alarmes xDrip via une diffusion locale, allez dans xDrip, Menu hamburger > Paramètres > Source de données matérielles > 640G /EverSense.
