# Accès aux fichiers log

* Connecter le téléphone à un ordinateur en mode de transfert de fichiers
* Localiser les fichiers journaux dans le répertoire de données AndroidAPS
    
    * Le dossier sera à un emplacement similaire à ***Stockage interne(1) / Android / data / info.nightscout.androidaps / files***
    * Le nom du dossier de stockage racine (1) peut varier légèrement selon le téléphone.

![logs](../images/aapslog.png)

* Le journal en cours est un fichier .log qui peut être visualisé de plusieurs manières, par exemple [LogCat](https://developer.android.com/studio/debug/am-logcat.html) dans Android Studio, l'application android Log Viewer ou simplement en texte clair. 
* Les fichiers journaux précédents sont compressés et stockés dans des dossiers dans l'ordre de date / heure. 
* Si vous partagez votre fichier log dans [gitter](https://gitter.im/MilosKozak/AndroidAPS) pour parler d'un bug potentiel, décompressez et téléchargez le fichier dont la date précède l'apparition de l'erreur.