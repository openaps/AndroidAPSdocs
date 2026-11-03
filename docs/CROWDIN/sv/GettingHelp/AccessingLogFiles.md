(Accessing-logfiles-accessing-logfiles)=

# Komma åt loggfiler

* Anslut telefonen till en dator i läget för filöverföring
* Du hittar loggfilerna i AAPS datakatalog, i `Android\data\info.nightscout.androidaps\files`.  
    Namnet på lagringens rotmapp kan skilja sig lite beroende på telefon.
* För [AAPSClient](#RemoteControl_aapsclient) är platsen `Android\data\info.nightscout.aapsclient\files`.
* Obs: platsen för loggarna ändrades i **AAPS 3.3**. Se dokumentationen för tidigare versioner om det behövs.

![loggar](../images/aapslog.png)

* Den aktuella loggen är en .log-fil. Du kan visa den på flera sätt, till exempel med [LogCat](https://developer.android.com/studio/debug/am-logcat.html) i Android Studio, med en app för att visa loggar på Android, eller helt enkelt som vanlig text. 
* Äldre loggfiler är zippade och sparas i mappar i datum- och tidsordning. 
* Om du delar din loggfil på [Discord](https://discord.gg/4fQUWHZ4Mw) för att prata om en möjlig bugg: packa upp och ladda upp filen med datum före felet.