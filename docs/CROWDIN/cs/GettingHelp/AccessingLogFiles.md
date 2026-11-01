(Accessing-logfiles-accessing-logfiles)=

# Zpřístupnění log souborů

* Připojte telefon k počítači v režimu přenosu souborů
* Najděte soubory záznamů v datové složce AAPS, v `Android\data\info.nightscout.androidaps\files`.  
    Název kořenové složky úložiště se může podle telefonu trochu lišit.
* Pro [AAPSClient](#RemoteControl_aapsclient) je umístění `Android\data\info.nightscout.aapsclient\files`.
* Note: log location has changed in **AAPS 3.3**. V případě potřeby se podívejte do dokumentace k předchozím verzím.

![logy](../images/aapslog.png)

* The current log is a .log file which can be viewed in a number of ways such as [LogCat](https://developer.android.com/studio/debug/am-logcat.html) within Android Studio, any log viewer Android app, or simply as plain text. 
* Předcházející log soubory jsou automaticky zazipované a uložené do složek v pořadí podle datumu/času. 
* Sdílíte-li kvůli potenciální chybě soubor s logy na [discordu](https://discord.gg/4fQUWHZ4Mw), prosíme rozbalte a nahrajte soubor s datem těsně před tím, než se chyba objevila.