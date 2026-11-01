(Accessing-logfiles-accessing-logfiles)=

# Aceder aos ficheiros de registo

* Ligue o telemóvel a um computador no modo de transferência de ficheiros
* Encontre os ficheiros de registo na pasta de dados do AAPS, em `Android\data\info.nightscout.androidaps\files`.  
    O nome da pasta raiz do armazenamento pode variar um pouco de telefone para telefone.
* A localização é `Android\data\info.nightscout.aapsclient\files` para o [AAPSClient](#RemoteControl_aapsclient).
* Nota: a localização dos registos mudou no **AAPS 3.3**. Se necessário, consulte a documentação das versões anteriores.

![registos](../images/aapslog.png)

* O registo atual é um ficheiro .log que pode ser visto de várias formas, por exemplo com o [LogCat](https://developer.android.com/studio/debug/am-logcat.html) no Android Studio, com qualquer aplicação Android para ver registos ou simplesmente como texto simples. 
* Os ficheiros de registo anteriores são comprimidos (zip) e guardados em pastas por ordem de data/hora. 
* Se partilhar o seu ficheiro de registo no [discord](https://discord.gg/4fQUWHZ4Mw) para falar de um possível erro, descomprima e envie o ficheiro com a data anterior ao momento do erro.