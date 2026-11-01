(Accessing-logfiles-accessing-logfiles)=

# Logbestanden uitlezen

* Verbind je telefoon met een computer in bestandsoverdrachtsmodus
* Zoek de logbestanden in de gegevensmap van AAPS, in `Android\data\info.nightscout.androidaps\files`.  
    De naam van de hoofdmap van de opslag kan per telefoon iets verschillen.
* Voor [AAPSClient](#RemoteControl_aapsclient) is de locatie `Android\data\info.nightscout.aapsclient\files`.
* Note: log location has changed in **AAPS 3.3**. Bekijk zo nodig de documentatie van eerdere versies.

![logbestanden](../images/aapslog.png)

* The current log is a .log file which can be viewed in a number of ways such as [LogCat](https://developer.android.com/studio/debug/am-logcat.html) within Android Studio, any log viewer Android app, or simply as plain text. 
* Oudere logbestanden worden gezipt en in mappen opgeslagen op volgorde van datum/tijd. 
* Als je je logbestand deelt op [discord](https://discord.gg/4fQUWHZ4Mw) om een mogelijke bug te bespreken, pak het bestand dan uit (unzip) en upload het bestand van vóór het moment dat de fout optrad.