(Accessing-logfiles-accessing-logfiles)=

# Acessando os arquivos de log

* Conecte o telefone a um computador no modo de transferência de arquivos
* Localize os arquivos de log na pasta de dados do AAPS, em `Android\data\info.nightscout.androidaps\files`.  
    O nome da pasta raiz do armazenamento pode variar um pouco dependendo do telefone.
* Para o [AAPSClient](#RemoteControl_aapsclient), o local é `Android\data\info.nightscout.aapsclient\files`.
* Observação: o local dos logs mudou no **AAPS 3.3**. Se necessário, veja a documentação das versões anteriores.

![logs](../images/aapslog.png)

* O log atual é um arquivo .log que pode ser visto de várias formas, por exemplo com o [LogCat](https://developer.android.com/studio/debug/am-logcat.html) no Android Studio, com qualquer app Android para ver logs ou simplesmente como texto simples. 
* Os arquivos de log anteriores são compactados (zip) e guardados em pastas por ordem de data/hora. 
* Se você for compartilhar o seu arquivo de log no [Discord](https://discord.gg/4fQUWHZ4Mw) para falar sobre um possível erro, descompacte e envie o arquivo com data anterior ao momento em que o erro aconteceu.