(Accessing-logfiles-accessing-logfiles)=

# Accès aux fichiers log

* Connecter le téléphone à un ordinateur en mode de transfert de fichiers
* Locate the log files in the AAPS data directory, in `Android\data\info.nightscout.androidaps\files`.  
    The naming of the root storage folder may vary a little depending on the phone.
* The location is `Android\data\info.nightscout.aapsclient\files` for [AAPSClient](#RemoteControl_aapsclient).
* Note : log location has changed in **AAPS 3.3**. See the previous versions' documentation if needed.

![logs](../images/aapslog.png)

* Le journal en cours est un fichier .log qui peut être visualisé de plusieurs manières, par exemple [LogCat](https://developer.android.com/studio/debug/am-logcat.html) dans Android Studio, l'application android Log Viewer ou simplement en texte clair. 
* Les fichiers journaux précédents sont compressés et stockés dans des dossiers dans l'ordre de date / heure. 
* Si vous partagez votre fichier log dans [discord](https://discord.gg/4fQUWHZ4Mw) pour parler d'un bug potentiel, décompressez et téléchargez le fichier dont la date précède l'apparition de l'erreur.