Dexcom G6
**************************************************
Les bases en premier
==================================================

* Follow general CGM hygiene and setting sensor recommendation `here <../Hardware/GeneralCGMRecommendation.html>`_.
* For G6 transmitters manufactured after fall/end of 2018 please make sure to use one of the `latest nightly built xDrip+ versions <https://github.com/NightscoutFoundation/xDrip/releases>`_. Those transmitters have a new firmware and latest stable version of xDrip+ (2019/01/10) cannot deal with it.

Conseils généraux pour boucler avec un G6
==================================================

Ce qui est clair, c’est que l’utilisation du G6 est peut-être un peu plus complexe qu’on pourrait le penser au premier abord. Pour l'utiliser en toute sécurité, il y a quelques points à prendre en compte : 

* If you are using the native data with the calibration code in xDrip or Spike, the safest thing to do is not allow preemptive restarts of the sensor.
* If you must use preemptive restarts, then make sure you insert at a time of day where you can observe the change and calibrate if necessary. 
* If you are restarting sensors, either do it without the factory calibration for safest results on days 11 and 12, or ensure you are ready to calibrate and keep an eye on variation.
* Pre-soaking of the G6 with factory calibration is likely to give variation in results. If you do pre-soak, then to get best results, you will probably need to calibrate the sensor.
* If you aren’t being observant about the changes that may be taking place, it may be better to revert to non-factory-calibrated mode and use the system like a G5.

To learn more about the details and reasons for these recommendations read the `complete article <http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/>`_ published by Tim Street at `www.diabettech.com <http://www.diabettech.com>`_.

Si vous utilisez le G6 avec xdrip+
==================================================
* L'émetteur Dexcom G6 peut être connecté simultanément au récepteur Dexcom (ou alternativement à la pompe t:slim) et à une application sur votre téléphone.
* Lorsque vous utilisez xDrip+ comme récepteur, désinstallez d'abord l'application Dexcom. **You cannot connect xDrip+ and Dexcom app with the transmitter at the same time!**
* If you need Clarity and want to profit from xDrip+ alarms use the `patched Dexcom app </Hardware/DexcomG6.html#if-using-g6-with-patched-dexcom-app>`_ with local broadcast to xDrip+.
* If not already set up then download `xdrip <https://github.com/NightscoutFoundation/xDrip>`_ and follow instructions on nightscout (`G5 <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>`_).
* Sélectionnez xDrip dans ConfigBuilder (Menu Paramètres dans AndroidAPS).
* Adjust settings in xDrip+ according to `xDrip+ settings page <../Configuration/xdrip.html>`_
* If AAPS does not receive BG values when phone is in airplane mode use `Identify receiver` as describe on `xDrip+ settings page <../Configuration/xdrip.html>`_.

Si vous utilisez le G6 avec l'application Dexcom patchée
==================================================
* Download the apk from `https://github.com/dexcomapp/dexcomapp <https://github.com/dexcomapp/dexcomapp>`_, and choose the version that fits your needs (mg/dl or mmol/l version, G6).

   * Le dossier 2.3 est destiné aux utilisateurs d'AndroidAPS 2.3, le dossier 2.4 pour les utilisateurs de AAPS 2.5.
   * Ouvrir https://play.google.com/store/search?q=dexcom%20g6 sur votre ordinateur. La région sera visible dans l'URL.
   
   .. image:: ../images/DexcomG6regionURL.PNG
     :alt: Region in Dexcom G6 URL

* Arrêter le capteur et désinstaller l'application Dexcom d'origine, si ce n'est pas déjà fait.
* Installer l'APK téléchargé
* Démarrer le capteur
* Sélectionner App Dexcom (patchée) dans le Générateur de configuration (paramètre dans AndroidAPS).
* Si vous voulez utiliser les alarmes xDrip via une diffusion locale, allez dans xDrip, Menu hamburger > Paramètres > Source de données matérielles > 640G /EverSense.

Dépannage G6
==================================================
Dépannages spécifiques à Dexcom G6
--------------------------------------------------
* Les transmetteurs avec les numéros de série commençant par 80 ou 81 ont besoin au minimum de la dernière version stable de xDrip datée de Mai 2019 (ou d'une mise à jour plus récente).
* Transmetteurs avec les numéros de série commençant par 8G ont besoin de la version du 25 juillet ou plus récente.
* xDrip+ et l'Application Dexcom ne peuvent pas être connectés à l'émetteur en même temps.
* Attendre au moins 15 min. entre l'arrêt et le démarrage d'un capteur.
* Do not rewind back time of insertion. Answer question "Did you insert it today?" always with "Yes, today".
* Do not enable "restart sensors" while setting a new sensor
* Do not start new sensor before the following information is shown in Classic Status Page -> G5/G6 status -> PhoneServiceState:

  * Transmitter serial starting with 80 or 81: "Got data hh:mm" (i.e. "Got data 19:04")
  * Transmitter serial starting with 8G or 8H: "Got glucose hh:mm" (i.e. "Got glucose 19:04") or "Got no raw hh:mm" (i.e. "Got now raw 19:04")

.. image:: ../images/xDrip_Dexcom_PhoneServiceState.png
  :alt: xDrip PhoneServiceState

Dépannage général
--------------------------------------------------
General Troubleshoothing for CGMs can be found `here <./GeneralCGMRecommendation.html#Troubleshooting>`_.

Nouvel émetteur avec capteur en cours
--------------------------------------------------
If you happen to change transmitter during a running sensor session you might try to remove the transmitter without damaging the sensor mount. A video can be found at `https://youtu.be/AAhBVsc6NZo <https://youtu.be/AAhBVsc6NZo>`_.


