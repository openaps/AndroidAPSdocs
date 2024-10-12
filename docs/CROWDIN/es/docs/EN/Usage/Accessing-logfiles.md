(Accessing-logfiles-accessing-logfiles)=

# Acceder a los logs

* Conecte el teléfono a una computadora en modo de transferencia de archivos
* Locate the log files in the AAPS data directory
    
    * (2.8.2) The folder will be at a location similar to ***Internal storage(1) / Android / data / info.nightscout.androidaps / files***
    * (3.0.0) The folder will be at a location similar to ***Internal storage(1) / AAPS / logs***
    * The naming of the root storage folder (1) may vary a little depending on the phone.

![logs](../images/aapslog.png)

* The current log is a .log file which can be viewed in a number of ways such as [LogCat](https://developer.android.com/studio/debug/am-logcat.html) within Android Studio, any Log Viewer android app, or simply as plain text. 
* Los archivos de registro anteriores se comprimen y almacenan en carpetas en orden de fecha / hora. 
* If you are sharing your log file in [discord](https://discord.gg/4fQUWHZ4Mw) to talk about a potential bug, please unzip and upload the file dated before the error occurred.