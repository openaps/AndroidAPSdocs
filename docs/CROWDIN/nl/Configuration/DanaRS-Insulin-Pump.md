# DanaRS pomp

*Deze instructies zijn voor het instellen van de app en pomp, en gelden voor een DanaRS uit 2017 of jonger. Als je een oudere pomp hebt, ga dan naar de instructies voor de [DanaR insulinepomp](./DanaR-Insulin-Pump).*

**New Dana RS firmware v3 can be used from AndroidAPS version 2.7 onwards.**

* De app gebruikt het profiel "BASAL A" op de pomp. Jouw huidige instellingen van jouw basaalstanden op de pomp zullen worden overschreven.

* In AndroidAPS ga naar Configurator en selecteer 'DanaRS'

* Klik op het wieltje achter DanaRS. Je komt nu in de instellingen.

* Selecteer 'Koppel nieuwe pomp' en klik op het serienummer van jouw DanaRS.
  
  ![DanaRS aan AAPS koppelen](../images/AAPS_DanaRSPairing.png)

* Select Pump password and input your password.
  
  * For DanaRS with firmware v1 and v2 the default password is 1234.
  * For DanaRS with firmware v3 the default password is a combination of production month and production date (i.e. month 01 and day 24). ==> On your pump open main menu -> review -> information. Nee. 3 is production date.

* **You have to confirm the pairing on the pump!** That's just the way you are used to from other bluetooth pairings (i.e. smartphone and car audio).
  
  ![Dana RS confirmation pairing](../images/DanaRS_Pairing.png)

* Select Bolus Speed to change the default bolus speed used (12sec per 1u, 30sec per 1u or 60sec per 1u).

* Restart your phone.

* Set basal step on pump to 0.01 U/h using Doctors menu (see pump user guide)

* Activeer vertraagde bolussen op de pomp

## Foutmeldingen specifiek voor de DanaRS

### Foutmelding tijdens toedienen insuline

In het geval dat de verbinding tussen AAPS en DanaRS wordt verbroken tijdens het toedienen van een bolus (d.w.z. als je wegloopt van je telefoon terwijl DanaRS bezig is insuline te geven) dan zul je het volgende bericht zien en een alarmgeluid horen.

![Alarm insuline toediening](../images/DanaRS_Error_bolus.png)

* In de meeste gevallen krijg je deze foutmelding omdat de communicatie werd verbroken, en is gewoon de juiste hoeveelheid insuline gegeven. Controleer dit eerst voordat je een eventuele nieuwe bolus geeft.
* Controleer in de geschiedenis van je pomp (op de pomp zelf, of in de app op het Dana tabblad > Historiek > Bolussen > VERNIEUW) of de juiste bolus werd gegeven.
* Delete error entry in [treatments tab](../Getting-Started/Screenshots#carb-correction) if you wish.
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