(Accessing-logfiles-accessing-logfiles)=

# Logbestanden uitlezen

* Verbind je telefoon met een computer in bestandsoverdrachtsmodus
* Zoek de logbestanden in de gegevensmap van AAPS, in `Android\data\info.nightscout.androidaps\files`.  
    De naam van de hoofdmap van de opslag kan per telefoon iets verschillen.
* Voor [AAPSClient](#RemoteControl_aapsclient) is de locatie `Android\data\info.nightscout.aapsclient\files`.
* Let op: de locatie van de logbestanden is veranderd in **AAPS 3.3**. Bekijk zo nodig de documentatie van eerdere versies.

![logbestanden](../images/aapslog.png)

* Het huidige logbestand is een .log-bestand. Je kunt het op verschillende manieren bekijken, zoals met [LogCat](https://developer.android.com/studio/debug/am-logcat.html) in Android Studio, met een Log Viewer-app voor Android, of gewoon als platte tekst. 
* Oudere logbestanden worden gezipt en in mappen opgeslagen op volgorde van datum/tijd. 
* Als je je logbestand deelt op [discord](https://discord.gg/4fQUWHZ4Mw) om een mogelijke bug te bespreken, pak het bestand dan uit (unzip) en upload het bestand van vóór het moment dat de fout optrad.