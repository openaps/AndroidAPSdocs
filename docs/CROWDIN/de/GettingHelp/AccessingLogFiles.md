(Accessing-logfiles-accessing-logfiles)=

# Auf die Protokolldateien zugreifen

* Verbinde das Smartphone mit dem Computer im Dateiübertragungsmodus
* Suche im AAPS-Datenverzeichnis `Android\data\info.nightscout.androidaps\files` nach den Protokolldateien.  
    Die Benennung des Root-Speicher-Ordners kann je nach Smartphone etwas variieren.
* Für den [AAPSClient](#RemoteControl_aapsclient) ist es `Android\data\info.nightscout.aapsclient\files`.
* Note: log location has changed in **AAPS 3.3**. Wenn notwendig, schaue in der Dokumentation der Vorgängerversion nach.

![Logdateien](../images/aapslog.png)

* The current log is a .log file which can be viewed in a number of ways such as [LogCat](https://developer.android.com/studio/debug/am-logcat.html) within Android Studio, any log viewer Android app, or simply as plain text. 
* Ältere Logdateien werden als Zipdatei komprimiert und in Verzeichnissen gespeichert, die nach Datum/Uhrzeit sortiert sind. 
* Wenn du deine Logdatei in [discord](https://discord.gg/4fQUWHZ4Mw) teilen willst, um über ein mögliches Problem zu berichten, dann entpacke sie und lade das Verzeichnis hoch, dessen Datum dem Auftreten des Fehlers entspricht.