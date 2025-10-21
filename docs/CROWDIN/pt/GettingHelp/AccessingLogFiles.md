(Accessing-logfiles-accessing-logfiles)=

# Aceder aos arquivos de registo

* Ligue o telemóvel a um computador no modo de transferência de arquivos
* Locate the log files in the AAPS data directory, in `Android\data\info.nightscout.androidaps\files`.  
    The naming of the root storage folder may vary a little depending on the phone.
* The location is `Android\data\info.nightscout.aapsclient\files` for [AAPSClient](#RemoteControl_aapsclient).
* Note : log location has changed in **AAPS 3.3**. See the previous versions' documentation if needed.

![logs](../images/aapslog.png)

* O registo atual é um arquivo .log que pode ser visualizado de várias maneiras como [LogCat](https://developer.android.com/studio/debug/am-logcat.html) dentro do Android Studio, qualquer app android visualizadora de registos ou simplesmente como texto simples. 
* Os arquivos de registo anteriores são zipados e armazenados em pastas por ordem de data/hora. 
* If you are sharing your log file in [discord](https://discord.gg/4fQUWHZ4Mw) to talk about a potential bug, please unzip and upload the file dated before the error occurred.