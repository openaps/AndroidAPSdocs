(Accessing-logfiles-accessing-logfiles)=

# Zpřístupnění log souborů

* Připojte telefon k počítači v režimu přenosu souborů
* Najděte soubory záznamů v datové složce AAPS, v `Android\data\info.nightscout.androidaps\files`.  
    Název kořenové složky úložiště se může podle telefonu trochu lišit.
* Pro [AAPSClient](#RemoteControl_aapsclient) je umístění `Android\data\info.nightscout.aapsclient\files`.
* Poznámka: v **AAPS 3.3** se umístění logů změnilo. V případě potřeby se podívejte do dokumentace k předchozím verzím.

![logy](../images/aapslog.png)

* Aktuální log je soubor .log, který lze zobrazit několika způsoby, například pomocí [LogCat](https://developer.android.com/studio/debug/am-logcat.html) v Android Studiu, v libovolné aplikaci pro Android na prohlížení logů, nebo jednoduše jako prostý text. 
* Předcházející log soubory jsou automaticky zazipované a uložené do složek v pořadí podle datumu/času. 
* Sdílíte-li kvůli potenciální chybě soubor s logy na [discordu](https://discord.gg/4fQUWHZ4Mw), prosíme rozbalte a nahrajte soubor s datem těsně před tím, než se chyba objevila.