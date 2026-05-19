(Accessing-logfiles-accessing-logfiles)=

# Чтение лог-файлов

* Подключите телефон к компьютеру в режиме передачи файлов
* Найдите файлы журнала в папке AAPS по пути `Android\data\info.nightscout.androidaps\files`.  
    Имя корневой папки может немного отличаться в зависимости от телефона.
* Используйте путь `Android\data\info.nightscout.aapsclient\files` для [AAPSClient](#RemoteControl_aapsclient).
* Примечание : путь к журналу в **AAPS 3.3** изменен. При необходимости ознакомьтесь с документацией предыдущих версий.

![журнал событий](../images/aapslog.png)

* Текущий журнал-это файл .log, который можно просмотреть разными способами, например как [ LogCat ](https://developer.android.com/studio/debug/am-logcat.html) в Android Studio, через Android-приложение Log Viewer или просто как обычный текст. 
* Предыдущие файлы журналов архивируются и хранятся в папках по датам/времени. 
* Если вы делитесь своим лог-файлом в [discord](https://discord.gg/4fQUWHZ4Mw), чтобы рассказать о потенциальной ошибке, распакуйте и загрузите файл до возникновения ошибки.