# DanaR

*Aceste instrucțiuni sunt destinate configurării aplicației și pompei pentru modelul de pompă DanaR. Vizitați [Pompa de insulină DanaRS](./DanaRS-Insulin-Pump.md) dacă aveți în schimb DanaRS lansat în 2017.*

## Capacități pompă cu AAPS

* Communicates with **AAPS** over your phone's native Bluetooth, without an additional communication device.
* Schimbările de fus orar și de oră de vară nu necesită nicio acțiune specială, deoarece pompa nu folosește propriul istoric.

## Instalare

* În pompă mergeți la Main Menu > Setting > User Option
* Porniți "8. Extended Bolus"

![Pompă DanaR](../images/danar1.png)

* Mergeți la Main Menu > Setting > Discovery
* În setările telefonului mergeți la Bluetooth, căutați dispozitivele din apropiere, selectați numărul de serie al pompei DanaR și introduceți parola (parola de asociere este 0000). Dacă DanaR nu apare în lista de dispozitive bluetooth găsite la scanare, restartați telefonul și scoateți bateria din pompa DanaR, înlocuiți-o și apoi porniți pașii de instalare de la început.

* În **AAPS**, deschideți **meniul** (☰) din colțul din stânga sus, mergeți la **Configurație** > **Pompă** și selectați tipul de DanaR pe care îl aveți (**DanaR**, **DanaR din Coreea** sau **DanaRv2**).
  
  ![Configurație > Pompă cu modulele DanaR](../images/v4/Configuration/configuration_pump_list_1.png)

* Deschideți ecranul pompei: apăsați **Deschideți modulul** pe cardul DanaR (sau mergeți la **Gestionați** > **Pompă**).

* Apăsați **Asociere**. Pe ecranul de asociere: 
  * Introduceți parola pompei la **Parola pompei** (parola implicită este 1234).
  * Under **Select paired device**, tap your DanaR serial number. Dacă lista este goală, apăsați **Deschideți setările Bluetooth** și asociați mai întâi pompa cu telefonul (vedeți pasul de mai sus). Când reveniți în **AAPS**, pompa apare în listă. Dacă nu apare, apăsați pictograma de actualizare.
  * Apăsați **Asociere**. **AAPS** se conectează la pompă și verifică parola.
* Pentru a schimba setările driverului, apăsați **Setări** pe cardul DanaR din **Configurație** > **Pompă**: 
  * **Viteză bolus** (DanaR și DanaRv2): schimbați viteza implicită a bolusului (12 s/U, 30 s/U sau 60 s/U).
  * **Use extended boluses for >200%** (DanaR and DanaR Korean): enable this if you want **AAPS** to allow a basal rate above 200%. Note this means you cannot loop with high TBRs while using extended boluses for food.
* Setați pasul ratei bazale din pompă la 0,01 U/h
* Set bolus step on pump to 0.1 U. **AAPS** citește pasul bolusului din pompă și îl folosește pentru fiecare bolus.
* Activați bolusurile extinse în pompă

## Traversarea fusurilor orare cu pompa Dana R

Pentru informații despre călătoriile de-a lungul fusurilor orare, consultați secțiunea [Călătorii de-a lungul fusurilor orare cu pompe](#timezone-traveling-danarv2-danars).

## Unde să obțineți ajutor

Development of the DanaR driver is done by the community on a **volunteer** basis. Înainte de a cere ajutor, vă rugăm:

1. **Read** the relevant section of this documentation to confirm how the feature is meant to work.
2. **Întrebați** pe canalul *#AAPS* de pe [Discord](https://discord.gg/4fQUWHZ4Mw) sau pe unul dintre celelalte [canale ale comunității](../GettingHelp/WhereCanIGetHelp.md).
3. **Report a bug** by searching the [existing issues](https://github.com/nightscout/AndroidAPS/issues); if yours is not listed, open a [new issue](https://github.com/nightscout/AndroidAPS/issues) and attach your [log files](../GettingHelp/AccessingLogFiles.md).

When asking for help, include your phone make and model, Android version, **AAPS** version, and a plain-English description of the problem (what changed, when it last worked).