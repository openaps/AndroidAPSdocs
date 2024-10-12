(Accessing-logfiles-accessing-logfiles)=

# Accès aux fichiers log

* Connecter le téléphone à un ordinateur en mode de transfert de fichiers
* Locate the log files in the AAPS data directory
    
    * (2.8.2) Le dossier sera à un emplacement similaire à ***Stockage interne(1) / Android / data / info.nightscout.androidaps / files***
    * (3.0.0) Le dossier sera à un emplacement similaire à ***Stockage interne(1) / AAPS / logs***
    * Le nom du dossier de stockage racine (1) peut varier légèrement selon le téléphone.

![logs](../images/aapslog.png)

* Le journal en cours est un fichier .log qui peut être visualisé de plusieurs manières, par exemple [LogCat](https://developer.android.com/studio/debug/am-logcat.html) dans Android Studio, l'application android Log Viewer ou simplement en texte clair. 
* Les fichiers journaux précédents sont compressés et stockés dans des dossiers dans l'ordre de date / heure. 
* Si vous partagez votre fichier log dans [discord](https://discord.gg/4fQUWHZ4Mw) pour parler d'un bug potentiel, décompressez et téléchargez le fichier dont la date précède l'apparition de l'erreur.