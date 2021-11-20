# Accès aux fichiers log

* Connecter le téléphone à un ordinateur en mode de transfert de fichiers
* Localiser les fichiers journaux dans le répertoire de données AndroidAPS
    
    * (2.8.2) The folder will be at a location similar to ***Internal storage(1) / Android / data / info.nightscout.androidaps / files***
    * (3.0.0) The folder will be at a location similar to ***Internal storage(1) / AAPS / logs***
    * The naming of the root storage folder (1) may vary a little depending on the phone.

![logs](../images/aapslog.png)

* Le journal en cours est un fichier .log qui peut être visualisé de plusieurs manières, par exemple [LogCat](https://developer.android.com/studio/debug/am-logcat.html) dans Android Studio, l'application android Log Viewer ou simplement en texte clair. 
* Les fichiers journaux précédents sont compressés et stockés dans des dossiers dans l'ordre de date / heure. 
* Si vous partagez votre fichier log dans [discord](https://discord.gg/4fQUWHZ4Mw) pour parler d'un bug potentiel, décompressez et téléchargez le fichier dont la date précède l'apparition de l'erreur.