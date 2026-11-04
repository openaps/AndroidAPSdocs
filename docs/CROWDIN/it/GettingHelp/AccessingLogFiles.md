(Accessing-logfiles-accessing-logfiles)=

# Accedere ai file di log

* Collega il telefono a un computer in modalità trasferimento file
* Locate the log files in the AAPS data directory, in `Android\data\info.nightscout.androidaps\files`.  
    The naming of the root storage folder may vary a little depending on the phone.
* Per [AAPSClient](#RemoteControl_aapsclient) la posizione è `Android\data\info.nightscout.aapsclient\files`.
* Nota: la posizione dei log è cambiata in **AAPS 3.3**. See the previous versions' documentation if needed.

![log](../images/aapslog.png)

* Il log attuale è un file .log che puoi vedere in vari modi, ad esempio con [LogCat](https://developer.android.com/studio/debug/am-logcat.html) in Android Studio, con una qualsiasi app Android per vedere i log, o semplicemente come testo normale. 
* Previous log files are zipped and stored in folders in date/time order. 
* If you are sharing your log file in [discord](https://discord.gg/4fQUWHZ4Mw) to talk about a potential bug, please unzip and upload the file dated before the error occurred.