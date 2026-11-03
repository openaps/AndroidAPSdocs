(Accessing-logfiles-accessing-logfiles)=

# Accessing logfiles

* Conectați telefonul la un computer în modul de transfer de fișiere
* Localizați fișierele de jurnal în directorul de date AAPS, în `Android\data\info.nightscout.androidaps\files`.  
    Denumirea dosarului rădăcină de stocare poate varia puțin în funcție de telefon.
* The location is `Android\data\info.nightscout.aapsclient\files` for [AAPSClient](#RemoteControl_aapsclient).
* Notă: locația jurnalelor s-a schimbat în **AAPS 3.3**. Dacă este nevoie, consultați documentația versiunilor anterioare.

![jurnale](../images/aapslog.png)

* Jurnalul curent este un fișier .log, pe care îl puteți vizualiza în mai multe moduri: cu [LogCat](https://developer.android.com/studio/debug/am-logcat.html) în Android Studio, cu orice aplicație Android de vizualizare a jurnalelor sau simplu, ca text. 
* Previous log files are zipped and stored in folders in date/time order. 
* If you are sharing your log file in [discord](https://discord.gg/4fQUWHZ4Mw) to talk about a potential bug, please unzip and upload the file dated before the error occurred.