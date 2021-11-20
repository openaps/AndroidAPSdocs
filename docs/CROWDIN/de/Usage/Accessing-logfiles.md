# Logdateien erhalten

* Verbinde das Smartphone mit dem Computer im Dateiübertragungsmodus
* Suche die Logdateien im Verzeichnis der AndroidAPS Daten
    
    * (2.8.2) The folder will be at a location similar to ***Internal storage(1) / Android / data / info.nightscout.androidaps / files***
    * (3.0.0) The folder will be at a location similar to ***Internal storage(1) / AAPS / logs***
    * The naming of the root storage folder (1) may vary a little depending on the phone.

![Logdateien](../images/aapslog.png)

* Die aktuelle Logdatei ist eine Datei mit der Erweiterung .log, die auf verschiedene Arten angezeigt werden kann wie [LogCat](https://developer.android.com/studio/debug/am-logcat.html) in AndroidStudio, der Android App Log Viewer oder einfach als normaler Text. 
* Ältere Logdateien werden als Zipdatei komprimiert und in Verzeichnissen gespeichert, die nach Datum/Uhrzeit sortiert sind. 
* Wenn du deine Logdatei in [discord](https://discord.gg/4fQUWHZ4Mw) teilen willst, um über ein mögliches Problem zu berichten, dann entpacke sie und lade das Verzeichnis hoch, dessen Datum dem Auftreten des Fehlers entspricht.