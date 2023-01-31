(accessing-logfiles)=

# Aceder aos arquivos de registo

* Ligue o telemóvel a um computador no modo de transferência de arquivos
* Localize os arquivos de registo na pasta de dados da AndroidAPS
    
    * (2.8.2) The folder will be at a location similar to ***Internal storage(1) / Android / data / info.nightscout.androidaps / files***
    * (3.0.0) The folder will be at a location similar to ***Internal storage(1) / AAPS / logs***
    * The naming of the root storage folder (1) may vary a little depending on the phone.

![logs](../images/aapslog.png)

* O registo atual é um arquivo .log que pode ser visualizado de várias maneiras como [LogCat](https://developer.android.com/studio/debug/am-logcat.html) dentro do Android Studio, qualquer app android visualizadora de registos ou simplesmente como texto simples. 
* Os arquivos de registo anteriores são zipados e armazenados em pastas por ordem de data/hora. 
* If you are sharing your log file in [discord](https://discord.gg/4fQUWHZ4Mw) to talk about a potential bug, please unzip and upload the file dated before the error occurred.