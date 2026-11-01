(Accessing-logfiles-accessing-logfiles)=

# Prístup k log súborom

* Pripojte telefón k počítaču v režime prenosu súborov
* Log súbory nájdete v dátovom priečinku AAPS, v `Android\data\info.nightscout.androidaps\files`.  
    Názov koreňového priečinka úložiska sa môže podľa telefónu trochu líšiť.
* Pre [AAPSClient](#RemoteControl_aapsclient) je umiestnenie `Android\data\info.nightscout.aapsclient\files`.
* Note: log location has changed in **AAPS 3.3**. V prípade potreby si pozrite dokumentáciu predchádzajúcich verzií.

![logs](../images/aapslog.png)

* The current log is a .log file which can be viewed in a number of ways such as [LogCat](https://developer.android.com/studio/debug/am-logcat.html) within Android Studio, any log viewer Android app, or simply as plain text. 
* Staršie log súbory sú zbalené (zip) a uložené v priečinkoch podľa dátumu a času. 
* Ak zdieľate log súbor na [Discorde](https://discord.gg/4fQUWHZ4Mw), aby ste prebrali možnú chybu, rozbaľte a nahrajte súbor s dátumom pred vznikom chyby.