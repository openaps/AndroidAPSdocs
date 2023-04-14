(Troubleshooting-NSClient-troubleshooting-nsclient)=

# Dépannage NSClient

NSClient repose sur une communication stable avec Nightscout. Une connexion instable entraîne des erreurs de synchronisation et une forte utilisation des données.

Si personne ne vous suit sur Nightscout, vous pouvez choisir de mettre en pause NSClient pour économiser l'autonomie de la batterie ou vous pouvez choisir de configurer NSClient pour qu'il se connecte seulement en Wi-Fi et/ou pendant la charge.

* Comment détecter une connexion instable ?

Allez dans l'onglet NSClient dans AAPS et regardez le journal. Le comportement attendu est de recevoir une commande PING toutes les ~ 30 secondes et presque aucun message de reconnexion. Si vous voyez beaucoup de reconnexions, alors il y a un problème.

Since AAPS version 2.0, when such behavior is detected, NSClient is paused for 15 minutes and the message "NSClient malfunction" is displayed on the main Overview screen.

* Redémarrer

La première chose que vous devez essayer de faire est de redémarrer à la fois : Nightscout et ensuite le téléphone pour voir si le problème est permanent

Si votre site Nightscout est hébergé sur Heroku, vous pouvez redémarrer Nightscout en vous connectant à Heroku, puis en cliquant sur le nom de votre application Nightscout, et enfin en cliquant sur le menu « More », puis « Restart all dynos ».

Pour les autres hébergeurs, veuillez suivre la documentation de votre hébergeur.

* Problèmes de téléphone

Android peut mettre votre téléphone en mode veille. Check if you have an exception for AAPS in your phones power options to allow it to run in the background all the time.

Vérifiez à nouveau NSClient lorsque vous avez un signal de réseau fort.

Essayez un autre téléphone.

* Nightscout

Si votre site est hébergé sur Azure, de nombreuses personnes ont constaté que les problèmes de connexion se sont améliorés depuis le passage à Heroku.

Une solution aux problèmes de connexion dans Azure est de définir dans les paramètres de l'application le protocole HTTP à 2.0 et les Websockets à ON

* No BG reading from Nightscout

If AAPS connects to Nightscout correctly but does BG displays as N/A. Go to NSCLIENT tab, press the 3 dot menu top right, Click NSClient Preferences -> Synchronization turn on "Receive/backfill CGM data".

* If you still get an error...

Check the size of your database in MongoDB (or via the database size plugin in nightscout). If you are using the free tier in MongoDB, 496MB means it is full and needs to be cleaned up. [Follow these Nightscout instructions for checking the size of your database and clearing out data](https://nightscout.github.io/troubleshoot/troublehoot/#database-full).

Before clearing data from your database and if you haven't already set it up, you should consider donating your AAPS data to the Open Humans project (for research). The instructions are on the [OpenHumans configuration page](../Configuration/OpenHumans).