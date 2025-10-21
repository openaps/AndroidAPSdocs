(Accessing-logfiles-accessing-logfiles)=

# Zpřístupnění log souborů

* Připojte telefon k počítači v režimu přenosu souborů
* Locate the log files in the AAPS data directory, in `Android\data\info.nightscout.androidaps\files`.  
    The naming of the root storage folder may vary a little depending on the phone.
* The location is `Android\data\info.nightscout.aapsclient\files` for [AAPSClient](#RemoteControl_aapsclient).
* Note : log location has changed in **AAPS 3.3**. See the previous versions' documentation if needed.

![logy](../images/aapslog.png)

* Aktuální log je .log soubor, který může být zobrazený několika způsoby. Např. v [LogCat](https://developer.android.com/studio/debug/am-logcat.html) z Android Studia, v jakékoliv aplikaci pro prohlížení logů na Androidu, nebo jednoduše jako textový soubor v libovolném editoru. 
* Předcházející log soubory jsou automaticky zazipované a uložené do složek v pořadí podle datumu/času. 
* Sdílíte-li kvůli potenciální chybě soubor s logy na [discordu](https://discord.gg/4fQUWHZ4Mw), prosíme rozbalte a nahrajte soubor s datem těsně před tím, než se chyba objevila.