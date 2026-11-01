(Accessing-logfiles-accessing-logfiles)=

# Достъп до лог файловете

* Свържете телефона с компютър в режим за прехвърляне на файлове
* Намерете лог файловете в директорията с данни на AAPS, в `Android\data\info.nightscout.androidaps\files`.  
    Името на основната папка в паметта може да е малко по-различно в зависимост от телефона.
* За [AAPSClient](#RemoteControl_aapsclient) мястото е `Android\data\info.nightscout.aapsclient\files`.
* Note: log location has changed in **AAPS 3.3**. Ако е нужно, вижте документацията за предишните версии.

![logs](../images/aapslog.png)

* The current log is a .log file which can be viewed in a number of ways such as [LogCat](https://developer.android.com/studio/debug/am-logcat.html) within Android Studio, any log viewer Android app, or simply as plain text. 
* Предишните лог файлове са компресирани (zip) и се пазят в папки, подредени по дата и час. 
* Ако споделяте лог файла си в [Discord](https://discord.gg/4fQUWHZ4Mw), за да обсъдите възможна грешка в програмата, моля, разархивирайте и качете файла с дата преди момента, в който е възникнала грешката.