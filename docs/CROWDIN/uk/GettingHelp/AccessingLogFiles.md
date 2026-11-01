(Accessing-logfiles-accessing-logfiles)=

# Доступ до файлів журналу (логів)

* Підключіть телефон до комп'ютера в режимі передавання файлів
* Файли журналу знаходяться в папці даних AAPS: `Android\data\info.nightscout.androidaps\files`.  
    Назва кореневої папки сховища може трохи відрізнятися залежно від телефону.
* Для [AAPSClient](#RemoteControl_aapsclient) це місце: `Android\data\info.nightscout.aapsclient\files`.
* Note: log location has changed in **AAPS 3.3**. За потреби дивіться документацію попередніх версій.

![журнали](../images/aapslog.png)

* The current log is a .log file which can be viewed in a number of ways such as [LogCat](https://developer.android.com/studio/debug/am-logcat.html) within Android Studio, any log viewer Android app, or simply as plain text. 
* Попередні файли журналу стиснуті в zip і зберігаються в папках за датою та часом. 
* Якщо ви ділитеся файлом журналу в [discord](https://discord.gg/4fQUWHZ4Mw), щоб обговорити можливу помилку, розпакуйте та вивантажте файл з датою до того, як сталася помилка.