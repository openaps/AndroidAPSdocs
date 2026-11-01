(Accessing-logfiles-accessing-logfiles)=

# Aceder aos ficheiros de registo

* Ligue o telemóvel a um computador no modo de transferência de ficheiros
* Encontre os ficheiros de registo na pasta de dados do AAPS, em `Android\data\info.nightscout.androidaps\files`.  
    O nome da pasta raiz do armazenamento pode variar um pouco de telefone para telefone.
* A localização é `Android\data\info.nightscout.aapsclient\files` para o [AAPSClient](#RemoteControl_aapsclient).
* Note: log location has changed in **AAPS 3.3**. Se necessário, consulte a documentação das versões anteriores.

![registos](../images/aapslog.png)

* The current log is a .log file which can be viewed in a number of ways such as [LogCat](https://developer.android.com/studio/debug/am-logcat.html) within Android Studio, any log viewer Android app, or simply as plain text. 
* Os ficheiros de registo anteriores são comprimidos (zip) e guardados em pastas por ordem de data/hora. 
* Se partilhar o seu ficheiro de registo no [discord](https://discord.gg/4fQUWHZ4Mw) para falar de um possível erro, descomprima e envie o ficheiro com a data anterior ao momento do erro.