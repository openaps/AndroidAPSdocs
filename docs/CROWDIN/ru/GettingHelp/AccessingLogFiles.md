(Accessing-logfiles-accessing-logfiles)=

# Чтение лог-файлов

* Подключите телефон к компьютеру в режиме передачи файлов
* Locate the log files in the AAPS data directory, in `Android\data\info.nightscout.androidaps\files`.  
    The naming of the root storage folder may vary a little depending on the phone.
* The location is `Android\data\info.nightscout.aapsclient\files` for [AAPSClient](#RemoteControl_aapsclient).
* Note : log location has changed in **AAPS 3.3**. See the previous versions' documentation if needed.

![журнал событий](../images/aapslog.png)

* Текущий журнал-это файл .log, который можно просмотреть разными способами, например как [ LogCat ](https://developer.android.com/studio/debug/am-logcat.html) в Android Studio, через Android-приложение Log Viewer или просто как обычный текст. 
* Предыдущие файлы журналов архивируются и хранятся в папках по датам/времени. 
* Если вы делитесь своим лог-файлом в [discord](https://discord.gg/4fQUWHZ4Mw), чтобы рассказать о потенциальной ошибке, распакуйте и загрузите файл до возникновения ошибки.