(Troubleshooting-NSClient-troubleshooting-nsclient)=

# Dépannage NSClient

NSClient repose sur une communication stable avec Nightscout. Une connexion instable entraîne des erreurs de synchronisation et une forte utilisation des données.

Si personne ne vous suit sur Nightscout, vous pouvez choisir de mettre en pause NSClient pour économiser l'autonomie de la batterie ou vous pouvez choisir de configurer NSClient pour qu'il se connecte seulement en Wi-Fi et/ou pendant la charge.

* Comment détecter une connexion instable ?

Allez dans l'onglet NSClient dans AAPS et regardez le journal. Le comportement attendu est de recevoir une commande PING toutes les ~ 30 secondes et presque aucun message de reconnexion. Si vous voyez beaucoup de reconnexions, alors il y a un problème.

Depuis la version 2.0 d'AAPS, quand un tel comportement est détecté, NSClient est mis en pause pendant 15 minutes et le message "Dysfonctionnement NSClient." s'affiche dans l'aperçu.

* Redémarrer

La première chose que vous devez essayer de faire est de redémarrer à la fois : Nightscout et ensuite le téléphone pour voir si le problème est permanent

Si votre site Nightscout est hébergé sur Heroku, vous pouvez redémarrer Nightscout en vous connectant à Heroku, puis en cliquant sur le nom de votre application Nightscout, et enfin en cliquant sur le menu « More », puis « Restart all dynos ».

Pour les autres hébergeurs, veuillez suivre la documentation de votre hébergeur.

* Problèmes de téléphone

Android peut mettre votre téléphone en mode veille. Vérifiez si vous avez une exception pour AAPS dans les options d'alimentation de votre téléphone pour l'autoriser à s'exécuter en arrière-plan tout le temps.

Check the NSClient again when in strong network signal location.

Try another phone.

* Nightscout

If your site is hosted on Azure, many people have found that connection issues have improved since moving to Heroku.

A workaround to connection issues in Azure is to set in Application settings HTTP protocol to 2.0 and Websockets to ON

* Si vous avez toujours une erreur...

Check the size of your database in MongoDB (or via the database size plugin in nightscout). If you are using the free tier in MongoDB, 496MB means it is full and needs to be cleaned up. [Follow these Nightscout instructions for checking the size of your database and clearing out data](https://nightscout.github.io/troubleshoot/troublehoot/#database-full).

Before clearing data from your database and if you haven't already set it up, you should consider donating your AndroidAPS data to the Open Humans project (for research). The instructions are on the [OpenHumans configuration page](../Configuration/OpenHumans).