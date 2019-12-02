# Dépannage NSClient

NSClient repose sur une communication stable avec Nightscout. Une connexion instable entraîne des erreurs de synchronisation et une forte utilisation des données.

Si personne ne vous suit sur Nightscout vous pouvez faire une pause NSClient pour préserver (beaucoup) l'autonomie de la pile ou dans les paramètres de connexion, activez wifi uniquement pendant la charge.

* Comment détecter une connexion instable ?

Allez dans l'onglet NSClient dans AAPS et regardez le journal. Common behavior is to receive PING every ~30s and almost none reconnection messages. Si vous voyez beaucoup de reconnexions il y a un problème. Since AndroidAPS 2.0 when such behavior is detected NSClient is paused for 15 minutes and message "NSClient malfunction" on Overview is displayed.

* Redémarrer

La première chose que vous devez essayer est de redémarrer à la fois : Nightscout et ensuite le téléphone pour voir si le problème est permanent

* Problèmes de téléphone

Android peut mettre votre téléphone en veille. Vérifiez que vous avez une exception pour AndroidAPS dans les options d'alimentation pour lui permettre de s'exécuter en arrière-plan tout le temps. Vérifiez à nouveau avec un signal réseau fort. Essayez un autre téléphone.

* Nightscout

Si vous êtes sur Azure, de nombreuses personnes ont aidé à transférer sur Heroku. Une solution de contournement Azure à été définie récemment dans les paramètres de l'application, protocole HTTP sur 2.0 et Websockets sur ON

* Si vous avez toujours une erreur...

Vérifiez la taille de votre base de données dans mLab. 496Mo signifie qu'elle est pleine et doit être compactée. [Suivez ces instructions OpenAPS pour vérifier la taille de votre base de données](https://openaps.readthedocs.io/en/latest/docs/Troubleshooting/Rig-NS-communications-troubleshooting.html#mlab-maintenance). Si le compactage ne fonctionne pas, vous devriez envisager de faire don de vos données AndroidAPS dans des Données Communes (pour la recherche) avant de supprimer toutes les données des collections. Il y a des [instructions dans la documentation OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Give%20Back-Pay%20It%20Forward/data-commons-data-donation.html) pour faire ceci.