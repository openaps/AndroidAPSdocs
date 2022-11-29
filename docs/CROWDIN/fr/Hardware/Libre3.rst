Freestyle Libre 3
**************************************************

Le système Freestyle Libre 3 peut automatiquement signaler des niveaux de glycémie dangereux. The Libre3 Sensor sends the current blood sugar level to a receiver (reader or smartphone) every minute. Le récepteur déclenche une alarme si nécessaire. With a modified Libre 3 app, Juggluco app and the xDrip+ app, you can continuously receive and display your blood sugar level on your smartphone. It's even possible to receives older data out of the sensor memory (two hours minutely glucose and two weeks once per 5 minute history data.) This is sendt to Juggluco.

Le capteur peut être étalonné de -40 mg/dl à +20 mg/dl (-2,2 mmol/l à +1,1 mmol/l) pour ajuster les différences entre les glycémies capillaires et les lectures des capteurs.

Current limitations
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  It's currently not confirmed if this solution is working with US version of the Freestyle Libre 3 sensors!
-  The app will only work for arm64 systems (64 bit systems). Most modern phones are supported. If you are unsure, just try to install the patch and try to start the app.
-  If you have a rooted system, you need to cover the root. Here you got some instructions: `link <https://www.reddit.com/r/Freestylelibre/comments/s22vlr/comment/hw2p4th/?utm_source=share&utm_medium=web2x&context=3>`_.
-  Juggluco (required app to receive the libre3 readings) does only support English, Dutch and Italian languages. The patched Libre3 app does support: ar, de, es, fr, hi, in, it, ja, ko, my, nl, pt, ru, th, tr and vi.

Étape 1 : Téléchargez et configurez l'application LibreLink patchée
==================================================

Téléchargez le fichier .apk patché `ici <https://github.com/maheini/FreeStyle-Libre-3-patch/raw/main/Patched%20Apk/Libre%203_v3.3.0_apkfab.com.apk>`_ ou `ici <https://apkfab.com/libre-3/com.freestylelibre3.app.de/apk?h=142cfbb2e0b1f10cd280408b10c5a5127e46e00e78d7775dae382529921487e9>`_ et installez-le sur votre téléphone.

Une fois que vous avez installé l'application sur votre téléphone, ouvrez l'application. Si vous voyez un avertissement comme celui ci-dessous, vous pouvez l'ignorer. (L'application fonctionne avec n'importe quel capteur européen)

.. image:: ../images/libre3/step_1.jpg
   :alt: avertissement LibreLink

If you are on the screen “Create an Account”, you got the option to create a LibreView account. This might be a good option, as you got the possibility to re-enable a sensor with a different app. It also allows you to share the BG data to LibreView. I you don’t like to, just press “Skip” at the top right.

.. image:: ../images/libre3/step_2.jpg
   :alt: LibreView account

Plese select your Unit of Messurement on this screen. You can change it later as well.

.. image:: ../images/libre3/step_3.jpg
   :alt: Measurement Unit selection

If you got a Popup, asking for “Ignore battery optimisation?”, click “ALLOW”. This will keep the Libre3 app running in the background.

.. image:: ../images/libre3/step_4.jpg
   :alt: Disable battery optimisations

Now you should have set up the Libre3 app. Let’s continue with the connection to Juggluco

Étape 2 : Connectez Libre3 avec Juggluco
==================================================

Open the Libre3 sidebar and select Juggluco.

.. image:: ../images/libre3/step_5.jpg
   :alt: menu Juggluco

Within the Juggluco menu, ensure "Port" is set to 7117 and click “Add Connection” on the bottom.

.. image:: ../images/libre3/step_6.jpg
   :alt: Vue d'ensemble Juggluco

Now, fill in everything, according to the image below:

.. image:: ../images/libre3/step_7.jpg
   :alt: configuration Juggluco Libre

It you are done, click on “Save” to confirm your setttings. Awesome, you can close the Libre3 app now!

Étape 3 : Configurez Juggluco
==================================================

Download the Juggluco .apk file `here <https://github.com/maheini/FreeStyle-Libre-3-patch/raw/main/Juggluco-solution/versions/latest/Juggluco.apk>`_ or `here <https://apkfab.com/juggluco/tk.glucodata/apk?h=1fc401ff9fbe7f56e6a0a7068fed6da96592b13757c3b05cddff893d813e18fd>`_ and install it on your phone.

Now let’s open the app. You will be greeted with this screen below. Just click the “Without sensor” button.

.. image:: ../images/libre3/step_8.jpg
   :alt: Juggluco welcome screen

After that, you get a short introduction text. Click on “OK”.

.. image:: ../images/libre3/step_9.jpg
   :alt: Juggluco instroduction screen

Ok, let’s setup Juggluco! The app itself doesn’t have the best Interface, but it’s a very useful app. To open the settings, click anywhere on the top left screen. Now you should see this menu below. Select “Settings”.

.. image:: ../images/libre3/step_10.jpg
   :alt: Juggluco settings menu

Within the settings, you can configure the data-connection to xDrip. Click on “Send to xDrip” and press “OK”.

.. image:: ../images/libre3/step_11.jpg
   :alt: Juggluco settings

Press on the top left center within the Juggluco app. A new menu should pop up. Please select “Mirror”.

.. image:: ../images/libre3/step_12.jpg
   :alt: Juggluco connection menu

You should see this screen. Please check the port settings on the top right corner, which should be set to "8795" and after that, tap on "Add Connection". (Keep in mind, within the Juggluco app the ports are switched) 

.. image:: ../images/libre3/step_13.jpg
   :alt: Juggluco connection screen

Now let’s fill in all the settings as shown below and your password according to your Libre3 password. If you did that - press “Save” to confirm.

.. image:: ../images/libre3/step_14.jpg
   :alt: Juggluco connection settings

Well done! You can now try to press the “Sync” button within the previous menu. After some time, Juggluco should receive the blood glucose values automatically from Libre3 app.

Now start the Libre3 sensor with the patched app by simply scanning the sensor. Assurez-vous d'avoir défini tous les paramètres. You can use a sensor that was already used with the original Libre3 app if you specify the same LibreView account name. You have to press "Start New Sensor" and  scan the sensor. If you want to go back to the unpatched Libre 3 app, you have to do the same.

Paramètres obligatoires pour réussir le démarrage du capteur :

-  NFC activé / BT activé
-  autorisation de mémoire et d'emplacement activée
-  service d'emplacement activé
-  réglage automatique de l'heure et du fuseau horaire
-  définir au moins une alarme dans l'application patchée

Veuillez noter que l'activation du service de localisation est primordial. Il ne s'agit pas de l'autorisation d'application qui doit être également définie !

Étape 4 : enfin configurez xDrip
==================================================

Les glycémies sont reçues sur le smartphone par l'application xDrip+. 

* Si ce n'est pas déjà configuré, alors téléchargez l'application xDrip+ et installez une des dernières pre-release à partir d'`ici <https://github.com/NightscoutFoundation/xDrip/releases>`_.
* Dans xDrip+ sélectionnez "Libre2 (patched App)" comme source de données matérielle
* Si nécessaire, entrez "BgReading:d,xdrip libre_receiver:v" dans Paramètres moins courants -> Extra Logging Settings -> Balises supplémentaires pour le log. Cela permettra de consigner des messages d'erreur supplémentaires pour le dépannage.
* Dans xDrip allez dans Paramètres > Inter-app settings > Diffusion Locale et sélectionnez ON.
* Dans xDrip allez dans Paramètres > Inter-app settings > Accept Treatments et sélectionnez OFF.
* pour permettre à AAPS de recevoir les glycémies (version 2.5.x et supérieures) de la part de xDrip+ veuillez renseigner dans `Paramètres > Inter-app settings > Identify receiver "info.nightscout.androidaps" <../Configuration/xdrip.html#identifier-le-recepteur>`__
* Si vous voulez pouvoir utiliser AndroidAPS pour calibrer, alors dans xDrip, allez dans Paramètres > Inter-app settings > Accept Calibrations et sélectionnez ON.  Vous pouvez également consulter les options dans Paramètres > Paramètres moins courants > Paramètres Avancés de Calibration.

.. image:: ../images/Libre2_Tags.jpg
  :alt: xDrip+ journaux LibreLink

Étape 5 : Démarrez le capteur dans xDrip
==================================================

Dans xDrip+ démarrez le capteur avec "Start Sensor" et "not today". 

En fait, cela ne démarre aucun capteur Libre2 ou n'interagit en aucun cas avec eux. Il s'agit simplement d'indiquer à xDrip+ qu'un nouveau capteur envoie des glycémies. Si possible, entrez deux valeurs de glycémie capillaire pour l'étalonnage initial. Maintenant, les glycémies doivent être affichées dans xDrip+ toutes les 5 minutes. Les valeurs manquantes, par ex. parce que vous étiez trop loin de votre téléphone, ne seront pas remises.

Après un changement de capteur, xDrip+ détectera automatiquement le nouveau capteur et supprimera toutes les données d'étalonnage. Vous pouvez vérifier la glycémie capillaire après l'activation et effectuer un nouvel étalonnage initial.

Étape 6 : Configurez AndroidAPS (pour la boucle uniquement)
==================================================

* Dans AndroidAPS allez dans le Générateur de configuration > Source des glycémies et cochez 'xDrip+' 
* Si AndroidAPS ne reçoit pas de GLY quand le téléphone est en mode avion, utilisez "Identify receiver" comme c'est décrit dans la page `Paramètres xDrip+ <../Configuration/xdrip.html#identify-receiver>`_.

Jusqu'à présent, en utilisant le Freestyle Libre 2 comme source Gly, vous ne pouvez pas activer les fonctions 'Activer SMB toujours' et 'Activer SMB après les glucides' dans l'algorithme SMB. Les valeurs de GLY du Freestyle Libre 2 ne sont pas assez lisses pour l'utiliser en toute sécurité. Voir `Lissage des données de glycémie <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html>`_ pour plus de détails.

Astuces et Dépannages
==================================================

Dépannage Libre3 sans lectures
--------------------------------------------------

-  le service de localisation Android n'est pas autorisé - veuillez l'activer dans les paramètres système
-  le réglage automatique de l'heure et du fuseau horaire n'est pas activé - veuillez modifier les paramètres en conséquence
-  le Bluetooth est éteint - veuillez l'activer

Dépannage Libre3 -> Connexion Juggluco
--------------------------------------------------

-  Ensure if Libre3 is receiving any readings
-  Check your settings & password again
-  Click “Sync” within Libre3->Juggluco and “Sync” and “Reinit” button within Juggluco->Mirror
-  It is possible that sometimes after configuring everything, you have to force close Libre3 and restart it.
-  Wait some time or try to force close Juggluco
-  Older versions of Juggluco (below 2.9.6) will not send back-filled data from the Libre3 sensor to connected devices (for example Juggluco on WearOS.) It is possible that you have to press "Resend Data" on within the patched Libre 3 app (Juggluco menu) for this.

Aide supplémentaire
--------------------------------------------------

Instructions d'origine : `site web jkaltes <http://jkaltes.byethost16.com/Juggluco/libre3/>`_

Dépôt Github Supplémentaire : `Lien Github <https://github.com/maheini/FreeStyle-Libre-3-patch>`_