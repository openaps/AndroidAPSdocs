(Accessing-logfiles-accessing-logfiles)=

# Logbestanden uitlezen

* Verbind je telefoon met een computer in bestandsoverdrachtsmodus
* Zoek de logbestanden in de map AndroidAPS
    
    * (2.8.2) The folder will be at a location similar to ***Internal storage(1) / Android / data / info.nightscout.androidaps / files***
    * (3.0.0) The folder will be at a location similar to ***Internal storage(1) / AAPS / logs***
    * The naming of the root storage folder (1) may vary a little depending on the phone.

![logs](../images/aapslog.png)

* Het logbestand dat op dit moment in gebruik is (dwz de nieuwste, die van vandaag) is een .log bestand. Je kunt deze openen op jouw computer, bijvoorbeeld in Android Studio dmv [LogCat](https://developer.android.com/studio/debug/am-logcat.html), of op jouw telefoon dmv de android app Log Viewer. Een hele simpele manier is openen als platte tekst: klik op jouw computer met de rechtermuisknop op het .log bestand en kies Openen (of Openen Met...) en kies Kladblok. 
* Oudere logbestanden worden gezipt en in mappen opgeslagen op volgorde van datum/tijd. 
* Als je je logbestand deelt in [discord](https://discord.gg/4fQUWHZ4Mw) omdat je een potentiële bug denkt te hebben gevonden, pak het bestand dan uit (unzippen). Uploadt het logbestand van de datum en tijdstip vlak voordat de fout is opgetreden.