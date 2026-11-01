(Accessing-logfiles-accessing-logfiles)=

# Чтение лог-файлов

* Подключите телефон к компьютеру в режиме передачи файлов
* Найдите файлы журнала в папке AAPS по пути `Android\data\info.nightscout.androidaps\files`.  
    Имя корневой папки может немного отличаться в зависимости от телефона.
* Используйте путь `Android\data\info.nightscout.aapsclient\files` для [AAPSClient](#RemoteControl_aapsclient).
* Note: log location has changed in **AAPS 3.3**. При необходимости ознакомьтесь с документацией предыдущих версий.

![журнал событий](../images/aapslog.png)

* The current log is a .log file which can be viewed in a number of ways such as [LogCat](https://developer.android.com/studio/debug/am-logcat.html) within Android Studio, any log viewer Android app, or simply as plain text. 
* Предыдущие файлы журналов архивируются и хранятся в папках по датам/времени. 
* Если вы делитесь своим лог-файлом в [discord](https://discord.gg/4fQUWHZ4Mw), чтобы рассказать о потенциальной ошибке, распакуйте и загрузите файл до возникновения ошибки.