# DanaRS pomp

*Deze instructies zijn voor het instellen van de app en pomp, en gelden voor een DanaRS uit 2017 of jonger. Als je een oudere pomp hebt, ga dan naar de instructies voor de [DanaR insulinepomp](./DanaR-Insulin-Pump).*

**DanaRS met nieuwe firmware v3 kan momenteel niet worden gebruikt met AndroidAPS!**

* De app gebruikt het profiel "BASAL A" op de pomp. Jouw huidige instellingen van jouw basaalstanden op de pomp zullen worden overschreven.

* In AndroidAPS ga naar Configurator en selecteer 'DanaRS'

* Klik op het wieltje achter DanaRS. Je komt nu in de instellingen.

* Selecteer 'Koppel nieuwe pomp' en klik op het serienummer van jouw DanaRS.
  
  ![DanaRS aan AAPS koppelen](../images/AAPS_DanaRSPairing.png)

* Selecteer 'Pomp wachtwoord' en voer jouw wachtwoord in. (Standaardwachtwoord is 1234)   
  **Je moet de koppeling bevestigen dmv de OK knop op de pomp** Net zoals bij andere bluetooth-apparaten (bijv. smartphone en autoradio).
  
  ![Koppeling bevestigen op DanaRS](../images/DanaRS_Pairing.png)

* Selecteer 'Bolus snelheid' om de standaardsnelheid te wijzigen die de pomp gebruikt bij een bolus (12sec per Eenheid, 30sec per Eenheid of 60sec per Eenheid).

* Herstart je telefoon.

* Stel de stapgrootte van de basaal in op 0.01 E/uur via het artsen menu (Zie de handleiding van de pomp)

* Activeer de vertraagde bolus-functie (Extended bolus) op de pomp

## Foutmeldingen specifiek voor de DanaRS

### Foutmelding tijdens toedienen insuline

In het geval dat de verbinding tussen AAPS en DanaRS wordt verbroken tijdens het toedienen van een bolus (d.w.z. als je wegloopt van je telefoon terwijl DanaRS bezig is insuline te geven) dan zul je het volgende bericht zien en een alarmgeluid horen.

![Alarm insuline toediening](../images/DanaRS_Error_bolus.png)

* In de meeste gevallen krijg je deze foutmelding omdat de communicatie werd verbroken, en is gewoon de juiste hoeveelheid insuline gegeven. Controleer dit eerst voordat je een eventuele nieuwe bolus geeft.
* Controleer in de geschiedenis van je pomp (op de pomp zelf, of in de app op het Dana tabblad > Historiek > Bolussen > VERNIEUW) of de juiste bolus werd gegeven.
* Wanneer je wilt kun je de foutmelding weghalen via Behandelingen tabblad > Careportal.
* De werkelijke hoeveelheid insuline wordt uitgelezen uit de pomp en opgeslagen in de app tijdens de eerstvolgende keer dat ze verbinding maken. Om handmatig te laten verbinden, kun je op het Bluetooth-icoon drukken op het Dana tabblad. Of gewoon afwachten tot de app vanzelf weer verbinding maakt met de pomp.

## Een andere telefoon gebruiken

Wanneer je een nieuwe telefoon gaat gebruiken, moet je dat doen via de volgende stappen:

* **Exporteer instellingen** op je oude telefoon
  
  * Hamburgermenu (3 horizontale strepen in linkerbovenhoek)
  * Onderhoud
  * Exporteer instellingen
    
    ![Exporteer AAPS instellingen](../images/AAPS_ExportSettings.png)

* Instellingen **overzetten** van oude naar nieuwe telefoon

* **Handmatig koppelen** van de DanaRS met je nieuwe telefoon 
  * Omdat ook de instellingen voor het verbinden met je pomp zijn mee-geïmporteerd, zal jouw nieuwe telefoon denken dat hij de pomp al "kent" en dus geen Bluetooth verbindingsverzoek doen. Daarom moet je de nieuwe telefoon en pomp handmatig koppelen, via het Bluetooth menu van de telefoon. Vergeet niet dat je de koppeling nog moet bevestigen dmv de OK knop op de pomp.
* **Installeer AndroidAPS** op je nieuwe telefoon.
* **Importeer instellingen** op je nieuwe telefoon 
  * Hamburgermenu (3 horizontale strepen in linkerbovenhoek)
  * Onderhoud
  * Importeer instellingen

## Wisselen van tijdzone met de DanaRS

Lees alles over reizen in verschillende tijdzones op de pagina [Wisselen van tijdzone](../Usage/Timezone-traveling#danarv2-danars).