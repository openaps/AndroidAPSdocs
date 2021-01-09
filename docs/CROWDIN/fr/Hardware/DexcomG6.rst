Dexcom G6
**************************************************
Les bases en premier
==================================================

* Suivez les recommandations générales relatives à l'hygiène des MGG et du capteur `ici <../Hardware/GeneralCGMRecommendation.html>`_.
* Pour les transmetteurs G6 fabriqués après l'automne / fin 2018, veuillez vous assurez que vous utilisez bien l'une des dernières versions de xDrip+ <https://github.com/NightscoutFoundation/xDrip/releases>`_. Ces transmetteurs ont un nouveau firmware et la dernière version stable de xDrip+ (10/01/2019) ne fonctionne pas avec.

Conseils généraux pour boucler avec un G6
==================================================

Ce qui est clair, c’est que l’utilisation du G6 est peut-être un peu plus complexe qu’on pourrait le penser au premier abord. Pour l'utiliser en toute sécurité, il y a quelques points à prendre en compte : 

* Si vous utilisez les données natives avec le code d'étalonnage dans xDrip+ ou Spike, la chose la plus sûre à faire est de ne pas autoriser les redémarrages préventifs du capteur.
* Si vous devez faire des redémarrages préemptifs, veillez à le faire à une heure de la journée où vous pourrez observer les changements et étalonner si nécessaire. 
* Si vous redémarrez le capteur, faites-le sans l'étalonnage usine pour obtenir les résultats les plus sûrs les jours 11 et 12, ou assurez-vous que vous êtes prêt à le calibrer et à garder un oeil sur les variations.
* La pré-installation du G6 avec l'étalonnage usine peut entraîner des variations dans les résultats. Si vous faites une pré-installation, alors pour obtenir les meilleurs résultats, vous devrez probablement calibrer le capteur.
* Si vous n'êtes pas attentif aux changements qui peuvent avoir lieu, il peut être préférable de revenir à mode "non calibré en usine" et utiliser le système comme un G5.

Pour en savoir plus sur les détails et les raisons de ces recommandations, consultez `l'article complet <http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/>`_ publié par Tim Street sur `www.diabettech.com <http://www.diabettech.com>`_.

Si vous utilisez le G6 avec xdrip+
==================================================
* L'émetteur Dexcom G6 peut être connecté simultanément au récepteur Dexcom (ou alternativement à la pompe t:slim) et à une application sur votre téléphone.
* Lorsque vous utilisez xDrip+ comme récepteur, désinstallez d'abord l'application Dexcom. **Vous ne pouvez pas connecter en même temps xDrip+ et l'application Dexcom avec le transmetteur !**
* Si vous avez besoin de clarté et que vous voulez profiter des alertes xDrip+, utilisez `l'application Dexcom patchée <../Hardware/DexcomG6.html#si-vous-utilisez-le-g6-avec-l-application-dexcom-patchee>`_ avec la diffusion locale vers xDrip+.
* Si vous ne l'avez pas déjà configuré, téléchargez `xDrip+ <https://github.com/NightscoutFoundation/xDrip>`_ et suivez les instructions sur nightscout (`G5 <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>`_).
* Sélectionnez xDrip dans le Générateur de configuration (dans AndroidAPS).
* Réglez les paramètres dans xDrip+ comme c'est décrit dans la page `Paramètres xDrip+ <../Configuration/xdrip.html>`_
* Si AAPS ne reçoit pas de GLY quand le téléphone est en mode avion, utilisez `Identify receiver` comme c'est décrit dans la page `Paramètres xDrip+ <../Configuration/xdrip.html>`_.

Si vous utilisez le G6 avec l'application Dexcom patchée
==================================================
* Téléchargez l'apk ici `https://github.com/dexcomapp/dexcomapp <https://github.com/dexcomapp/dexcomapp>`_, et choisissez la version correspondant à vos besoins (version G6 en mg/dl ou mmol/l).

   * Le dossier 2.4 concerne les utilisateurs de la version actuelle, le dossier 2.3 n'est que pour la version obsolète 2.3 d'AndroidAPS.
   * Ouvrir https://play.google.com/store/search?q=dexcom%20g6 sur votre ordinateur. 
   * Cliquez sur le lien vers l'application Dexcom G6 sur la page de résultats de recherche qui s'affiche.
   * La région sera visible dans l'URL.
   
   .. image:: ../images/DexcomG6regionURL.PNG
     :alt: Region in Dexcom G6 URL

* Désinstallez l'application Dexcom d'origine.
* Installez l'apk téléchargé
* Entrez le code du capteur et le numéro de série du transmetteur dans l'application patchée.
* Après une courte période l'application patchée devrait recevoir le signal du transmetteur. (Si ce n'est pas le cas, vous devrez arrêter le capteur et en démarrer un nouveau.)
* Sélectionnez App Dexcom (patchée) dans le Générateur de configuration (paramètre dans AndroidAPS).
* Si vous voulez utiliser les alarmes xDrip via une diffusion locale, allez dans xDrip, Menu hamburger > Paramètres > Source de données matérielles > 640G / EverSense.
* Il n'y a pas de diffusion locale de l'application Dexcom patchée directement vers xDrip+. La diffusion doit passer par AAPS, comme décrit ci-dessus.

Si vous utilisez G6 avec votre propre application Dexcom
==================================================
* Depuis Décembre 2020 `Build Your Own Dexcom App <https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0>`_ (BYODA) prend également en charge la diffusion locale vers AAPS et/ou xDrip+ (sauf pour les capteurs G5 !)
* Cette application vous permet d'utiliser votre Dexcom G6 avec n'importe quel smartphone Android.
* Désinstallez l'application Dexcom d'origine ou l'application Dexcom patchée si vous en avez utilisé une auparavant.
* Installez l'apk téléchargé
* Entrez le code du capteur et le numéro de série du transmetteur dans l'application patchée.
* Dans les paramètres du téléphone, allez dans Applications > Dexcom G6 > Autorisations > Autorisations supplémentaires et appuyez sur 'Access Dexcom app'.
* Après une courte période l'application patchée devrait recevoir le signal du transmetteur. (Si ce n'est pas le cas, vous devrez arrêter le capteur et en démarrer un nouveau.)

Paramètres pour AndroidAPS
--------------------------------------------------
* Sélectionnez 'App Dexcom (patchée)' dans le générateur de configuration.
* Si vous ne recevez aucune valeur, sélectionnez une autre source de données, puis re-sélectionnez 'App Dexcom (patchée)' pour déclencher la demande d'autorisations pour établir la connexion entre AAPS et BYODA.

Paramètres pour xDrip+
--------------------------------------------------
* Sélectionnez '640G / Eversense' comme source de données.
* La commande 'démarrer le capteur' doit être effectuée dans xDrip+ pour recevoir les valeurs. Cela n'affectera pas votre capteur actuel contrôlé par Build Your Own Dexcom App.
   
Dépannage G6
==================================================
Dépannages spécifiques à Dexcom G6
--------------------------------------------------
* Les transmetteurs avec les numéros de série commençant par 80 ou 81 ont besoin au minimum de la dernière version stable de xDrip datée de Mai 2019 (ou d'une mise à jour plus récente).
* Transmetteurs avec les numéros de série commençant par 8G ont besoin de la version du 25 juillet ou plus récente.
* xDrip+ et l'Application Dexcom ne peuvent pas être connectés à l'émetteur en même temps.
* Attendre au moins 15 min. entre l'arrêt et le démarrage d'un capteur.
* N'antidatez jamais l'heure de l'insertion. Répondez toujours à la question "Est-ce que vous l'avez inséré aujourd'hui?" par "Oui, aujourd'hui".
* Ne pas activer "redémarrer capteurs" lorsque vous configurez un nouveau capteur
* Ne démarrez pas un nouveau capteur avant que l'information suivante ne soit affichée dans la page Classic Status Page -> G5/G6 status -> PhoneServiceState :

  * Numéro de série du transmetteur commençant par 80 ou 81 : "Got data hh:mm" (par ex. "Got data 19:04")
  * Numéro de série du transmetteur commençant par 8G, 8H ou 8J : "Got glucose hh:mm" (par ex. "Got glucose 19:04") ou "Got now raw hh:mm" (par ex. "Got now raw 19:04")

.. image:: ../images/xDrip_Dexcom_PhoneServiceState.png
  :alt: xDrip+ Etat du téléphone

Dépannage général
--------------------------------------------------
Les dépannages généraux concernant les MGC peuvent être trouvés `ici <../GeneralCGMRecommendation.html#depannage>`_.

Nouvel émetteur avec capteur en cours
--------------------------------------------------
Si vous changez de transmetteur avec un capteur en cours d'exécution, vous pouvez essayer de retirer le transmetteur sans endommager le montage du capteur. Une vidéo peut être trouvée ici `https://youtu.be/AAhBVsc6NZo <https://youtu.be/AAhBVsc6NZo>`_.
