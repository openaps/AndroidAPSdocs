# Logdateien erhalten

* Verbinde das Smartphone mit dem Computer im Dateiübertragungsmodus
* Suche die Logdateien im Verzeichnis der AndroidAPS Daten
    
    * Den Ordner findest Du in einem Verzeichnis, das mit ***Internal storage(1) / Android / data / info.nightscout.androidaps / files*** oder ähnlich bezeichnet ist.
    * Die Benennung des Ordners auf Root-Ebene (1) kann abhängig von Deinem Smartphone leicht variieren.

![Logdateien](../images/aapslog.png)

* Die aktuelle Logdatei ist eine Datei mit der Erweiterung .log, die auf verschiedene Arten angezeigt werden kann wie [LogCat](https://developer.android.com/studio/debug/am-logcat.html) in AndroidStudio, der Android App Log Viewer oder einfach als normaler Text. 
* Ältere Logdateien werden als Zipdatei komprimiert und in Verzeichnissen gespeichert, die nach Datum/Uhrzeit sortiert sind. 
* If you are sharing your log file in [discord](https://discord.gg/4fQUWHZ4Mw) to talk about a potential bug, please unzip and upload the file dated before the error occurred.