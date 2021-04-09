# Logbestanden uitlezen

* Verbind je telefoon met een computer in bestandsoverdrachtsmodus
* Zoek de logbestanden in de map AndroidAPS
    
    * Deze map moet ergens op jouw telefoon te vinden zijn, bijvoorbeeld via ***Interne opslag (1) / Android / data / info.nightscout.androidaps / files*** of iets vergelijkbaars
    * De precieze naam van de hoofdmap (1) op jouw telefoon kan iets anders zijn, afhankelijk van jouw merk/model.

![log bestanden](../images/aapslog.png)

* Het logbestand dat op dit moment in gebruik is (dwz de nieuwste, die van vandaag) is een .log bestand. Je kunt deze openen op jouw computer, bijvoorbeeld in Android Studio dmv [LogCat](https://developer.android.com/studio/debug/am-logcat.html), of op jouw telefoon dmv de android app Log Viewer. Een hele simpele manier is openen als platte tekst: klik op jouw computer met de rechtermuisknop op het .log bestand en kies Openen (of Openen Met...) en kies Kladblok. 
* Oudere logbestanden worden gezipt en in mappen opgeslagen op volgorde van datum/tijd. 
* If you are sharing your log file in [discord](https://discord.gg/4fQUWHZ4Mw) to talk about a potential bug, please unzip and upload the file dated before the error occurred.