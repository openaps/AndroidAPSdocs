(Accessing-logfiles-accessing-logfiles)=

# Logbestanden uitlezen

* Verbind je telefoon met een computer in bestandsoverdrachtsmodus
* Locate the log files in the AAPS data directory, in `Android\data\info.nightscout.androidaps\files`.  
    The naming of the root storage folder may vary a little depending on the phone.
* The location is `Android\data\info.nightscout.aapsclient\files` for [AAPSClient](#RemoteControl_aapsclient).
* Note : log location has changed in **AAPS 3.3**. See the previous versions' documentation if needed.

![logs](../images/aapslog.png)

* Het logbestand dat op dit moment in gebruik is (dwz de nieuwste, die van vandaag) is een .log bestand. Je kunt deze openen op jouw computer, bijvoorbeeld in Android Studio dmv [LogCat](https://developer.android.com/studio/debug/am-logcat.html), of op jouw telefoon dmv de android app Log Viewer. Een hele simpele manier is openen als platte tekst: klik op jouw computer met de rechtermuisknop op het .log bestand en kies Openen (of Openen Met...) en kies Kladblok. 
* Oudere logbestanden worden gezipt en in mappen opgeslagen op volgorde van datum/tijd. 
* Als je je logbestand deelt in [discord](https://discord.gg/4fQUWHZ4Mw) omdat je een potentiële bug denkt te hebben gevonden, pak het bestand dan uit (unzippen). Uploadt het logbestand van de datum en tijdstip vlak voordat de fout is opgetreden.