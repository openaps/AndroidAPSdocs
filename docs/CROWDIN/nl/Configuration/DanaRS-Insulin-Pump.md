# DanaRS pomp

*Deze instructies zijn voor het instellen van de app en pomp, en gelden voor een DanaRS uit 2017 of jonger. Als je een oudere pomp hebt, ga dan naar de instructies voor de [DanaR insulinepomp](./DanaR-Insulin-Pump).*

**Met AndroidAPS versie 2.7 en nieuwer kun je de nieuwe Dana RS firmware v3 gebruiken.**

* De app gebruikt het profiel "BASAL A" op de pomp. Jouw huidige instellingen van jouw basaalstanden op de pomp zullen worden overschreven.

## Koppelen van de pomp

* In AndroidAPS ga naar Configurator en selecteer 'DanaRS'

* Tik op de 3 stipjes in de rechter bovenhoek van het AAPS Overzicht-scherm. Kies Instellingen.

* Selecteer 'Koppel nieuwe pomp' en klik op het serienummer van jouw DanaRS.
    
    ![DanaRS aan AAPS koppelen](../images/AAPS_DanaRSPairing.png)

* Selecteer 'Pomp wachtwoord' en voer jouw wachtwoord in.

### Standaard wachtwoord

* Voor DanaRS met firmware v1 en v2 is het standaard wachtwoord 1234.
* Voor DanaRS met firmware v3 is het standaardwachtwoord een combinatie van productiemaand en productiedatum (bijv. maand 01 en dag 24). Open het hoofdmenu op pomp > review > informatie. Nummer 3 is de productiedatum.

* **Je moet de koppeling bevestigen dmv de OK knop op de pomp** Net zoals bij andere bluetooth-apparaten (bijv. smartphone en autoradio).
    
    ![Koppeling bevestigen op DanaRS](../images/DanaRS_Pairing.png)

* Selecteer 'Bolus snelheid' om de standaardsnelheid te wijzigen die de pomp gebruikt bij een bolus (12sec per Eenheid, 30sec per Eenheid of 60sec per Eenheid).

* Herstart je telefoon.
* Stel de stapgrootte van de basaal in op 0.01 E/uur via het artsen menu (Zie de handleiding van de pomp)
* Activeer vertraagde bolussen op de pomp

## Wachtwoord wijzigen op de pomp

* Druk op OK knop van de pomp
* In het hoofdmenu selecteer "OPTION" (navigeer naar rechts dmv de pijlknop)
    
    ![DanaRS Hoofdmenu](../images/DanaRSPW_01_MainMenu.png)

* In opties menu kies "GEBRUIKER OPTIE"
    
    ![DanaRS Optie menu](../images/DanaRSPW_02_OptionMenu.png)

* Gebruik de pijlknop om omlaag te gaan naar "11. wachtwoord"
    
    ![DanaRS 11. Wachtwoord](../images/DanaRSPW_03_11PW.png)

* Druk OK om oude wachtwoord in te voeren.

* Typ **oud wachtwoord** (Standaard wachtwoord zie [hierboven](#standaard-wachtwoord)) en druk op OK
    
    ![DanaRS Voer oude wachtwoord in](../images/DanaRSPW_04_11PWenter.png)

* Als er een onjuist wachtwoord wordt ingevoerd, is er geen bericht dat aangeeft dat dit fout is!

* Stel **nieuw wachtwoord** in (Verander nummers met + en - knoppen / Verplaats naar rechts met de pijlknop).
    
    ![DanaRS Nieuw wachtwoord](../images/DanaRSPW_05_PWnew.png)

* Bevestig met OK knop.

* Opslaan door nogmaals op OK te drukken.
    
    ![DanaRS Opslaan nieuw wachtwoord](../images/DanaRSPW_06_PWnewSave.png)

* Gebruik de pijlknop om omlaag te gaan naar "14. EXIT" en druk op OK knop.
    
    ![DanaRS Afsluiten](../images/DanaRSPW_07_Exit.png)

## Foutmeldingen specifiek voor de DanaRS

### Foutmelding tijdens toedienen insuline

In het geval dat de verbinding tussen AAPS en DanaRS wordt verbroken tijdens het toedienen van een bolus (d.w.z. als je wegloopt van je telefoon terwijl DanaRS bezig is insuline te geven) dan zul je het volgende bericht zien en een alarmgeluid horen.

![Alarm insuline toediening](../images/DanaRS_Error_bolus.png)

* In de meeste gevallen krijg je deze foutmelding omdat de communicatie werd verbroken, en is gewoon de juiste hoeveelheid insuline gegeven. Controleer dit eerst voordat je een eventuele nieuwe bolus geeft.
* Controleer in de geschiedenis van je pomp (op de pomp zelf, of in de app op het Dana tabblad > Historiek > Bolussen > VERNIEUW) of de juiste bolus werd gegeven.
* Als je wilt verwijder je de foutmelding uit het [behandelingen tabblad](../Getting-Started/Screenshots#koolhydraten-correctie).
* De werkelijke hoeveelheid insuline wordt uitgelezen uit de pomp en opgeslagen in de app tijdens de eerstvolgende keer dat ze verbinding maken. Om handmatig te laten verbinden, kun je op het Bluetooth-icoon drukken op het Dana tabblad. Of gewoon afwachten tot de app vanzelf weer verbinding maakt met de pomp.

## Een andere telefoon gebruiken

Wanneer je een nieuwe telefoon gaat gebruiken, moet je dat doen via de volgende stappen:

* [Exporteer instellingen](../Usage/ExportImportSettings#export-settings) op je oude telefoon
* Instellingen overzetten van oude naar nieuwe telefoon
* **Handmatig koppelen** Dana RS met de nieuwe telefoon
    
    * Omdat ook de instellingen voor het verbinden met je pomp zijn mee-geïmporteerd, zal jouw nieuwe telefoon denken dat hij de pomp al "kent" en dus geen Bluetooth verbindingsverzoek doen. Daarom moet je de nieuwe telefoon en pomp handmatig koppelen, via het Bluetooth menu van de telefoon. Vergeet niet dat je de koppeling nog moet bevestigen dmv de OK knop op de pomp.
* Installeer AndroidAPS op je nieuwe telefoon.
* [Importeer instellingen](../Usage/ExportImportSettings#importeer-instellingen) op je nieuwe telefoon

## Wisselen van tijdzone met de DanaRS

Lees alles over reizen in verschillende tijdzones op de pagina [Wisselen van tijdzone](../Usage/Timezone-traveling#danarv2-danars).