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

Vérifiez à nouveau NSClient lorsque vous avez un signal de réseau fort.

Essayez un autre téléphone.

* Nightscout

Si votre site est hébergé sur Azure, de nombreuses personnes ont constaté que les problèmes de connexion se sont améliorés depuis le passage à Heroku.

Une solution aux problèmes de connexion dans Azure est de définir dans les paramètres de l'application le protocole HTTP à 2.0 et les Websockets à ON

* Pas de lecture de glycémie depuis Nightscout

Si AAPS se connecte correctement à Nightscout mais que la glycémie s'affiche comme N/A. Allez dans l'onglet NSCLIENT, appuyez sur le menu à 3 points en haut à droite, cliquez sur Préférences NSClient -> Synchronisation activez "Recevoir/remplir les anciennes données MGC".

* Si vous avez toujours une erreur...

Vérifiez la taille de votre base de données dans MongoDB (ou via le plugin donnant la taille de la base de données dans Nightscout). Si vous utilisez la version gratuite de MongoDB, 496 Mo signifie qu'il est complet et doit être nettoyé. [Suivez ces instructions Nightscout pour vérifier la taille de votre base de données et effacer les données](https://nightscout.github.io/troubleshoot/troublehoot/#database-full).

Avant de supprimer les données de votre base de données et si vous ne l'avez pas déjà configuré, vous devriez envisager de donner vos données AAPS au projet Open Humans (pour la recherche). Les instructions se trouvent dans la [page de configuration OpenHumans](../SupportingAaps/OpenHumans.md).