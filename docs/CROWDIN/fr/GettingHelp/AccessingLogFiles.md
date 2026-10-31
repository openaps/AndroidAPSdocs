(Accessing-logfiles-accessing-logfiles)=

# Accès aux fichiers log

* Connecter le téléphone à un ordinateur en mode de transfert de fichiers
* Trouvez les fichiers log dans le dossier de données d'AAPS, dans `Android\data\info.nightscout.androidaps\files`.  
    Le nom du dossier racine de stockage peut varier un peu selon le téléphone.
* L'emplacement est `Android\data\info.nightscout.aapsclient\files` pour [AAPSClient](#RemoteControl_aapsclient).
* Remarque : l'emplacement des logs a changé dans **AAPS 3.3**. Consultez la documentation des versions précédentes si nécessaire.

![logs](../images/aapslog.png)

* Le journal en cours est un fichier .log qui peut être visualisé de plusieurs manières, par exemple [LogCat](https://developer.android.com/studio/debug/am-logcat.html) dans Android Studio, l'application android Log Viewer ou simplement en texte clair. 
* Les fichiers journaux précédents sont compressés et stockés dans des dossiers dans l'ordre de date / heure. 
* Si vous partagez votre fichier log sur [discord](https://discord.gg/4fQUWHZ4Mw) pour parler d'un bug possible, décompressez et envoyez le fichier daté d'avant l'apparition de l'erreur.