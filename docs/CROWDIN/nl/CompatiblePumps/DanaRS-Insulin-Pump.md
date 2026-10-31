# DanaRS, Dana-i en Dana-i2

*Deze instructies zijn voor het instellen van de app en je pomp als je een DanaRS (vanaf 2017), een Dana-i of een Dana-i2 hebt. Ga naar [DanaR insulinepomp](./DanaR-Insulin-Pump.md) als je in plaats daarvan de originele DanaR hebt.*

**De Dana-i2 kan worden gebruikt vanaf AAPS versie 4.0.** Hij gebruikt dezelfde **Dana-i/RS** driver als de Dana-i.

* In de DanaRS/i/i2 pomp wordt "BASAL A" door de app gebruikt. Bestaande gegevens worden overschreven.

    {contents} Inhoudsopgave
    :depth: 1
    :local: true

## Mogelijkheden van de pomp met AAPS

* Communiceert met **AAPS** via de eigen Bluetooth van je telefoon, zonder extra communicatieapparaat.
* Wisselingen van zomer-/wintertijd en tijdzone moet je met de hand regelen (zie [Wisselen van tijdzone](#timezone-traveling-danarv2-danars)).

(DanaRS-Insulin-Pump-pairing-pump)=

## Koppelen van de pomp

* Open het **menu** (☰) linksboven in het hoofdscherm van **AAPS** en selecteer **Configuratie**.
* Tik op **Pomp** en selecteer **Dana-i/RS**.
    
    ![Configuratie > Pomp met de Dana-i/RS plugin](../images/v4/Configuration/configuration_pump_list_2.png)
    
    Als hij geselecteerd is, toont de **Dana-i/RS** kaart twee knoppen, **Instellingen** en **Plug-in openen**:
    
    ![De Dana-i/RS plugin geselecteerd in Configuratie > Pomp](../images/v4/Pumps/dana_i_rs_enabled.png)
    
    **Instellingen** opent de instellingen van de Dana-i/RS driver:
    
    ![Instellingen van de Dana-i/RS driver](../images/v4/Pumps/dana_i_rs_settings.png)
    
    **Plug-in openen** (of **Beheren** > **Pomp**) opent het pompscherm van de Dana-i/RS. Voordat er een pomp gekoppeld is, ziet het er zo uit:
    
    ![Pompscherm van de Dana-i/RS voor het koppelen](../images/v4/Pumps/dana_i_rs_pump_screen.png)

* Tik op het pompscherm op **Koppelen**. **AAPS** zoekt naar pompen in de buurt.

* Tik in de lijst op je pomp.
    
    ![Het scherm Koppelen met een Dana pomp die bij het zoeken is gevonden](../images/DanaRS_i_Pairing.png)

* **Je moet het koppelen op de pomp bevestigen!** Dit werkt op dezelfde manier als andere Bluetooth koppelingen die je misschien kent (bijvoorbeeld smartphone en autoradio).
    
    ![Koppeling bevestigen op DanaRS](../images/DanaRS_Pairing.png)

* Volg het koppelingsproces dat past bij het type en de firmware van je pomp:
    
    * Bij een DanaRS v1 vraagt **AAPS** om het **Pomp wachtwoord (alleen v1)**. Voer je pompwachtwoord in (zie [Standaard wachtwoord](#DanaRS-Insulin-Pump-default-password)).
    * Bij een DanaRS v3 vraagt **AAPS** je om op de pomp op OK te drukken en de 2 reeksen cijfers en letters in te typen die de pomp toont. Houd het scherm van de pomp aan door op de minknop te drukken tot je klaar bent. Tik daarna op **Gereed**.
    * Bij een Dana-i en Dana-i2 verschijnt het gewone Android koppelvenster. Voer het 6-cijferige nummer in dat de pomp toont.

* Als **Succesvol gekoppeld!** verschijnt, tik je op **Gereed**.
    
    ![Succesvol gekoppeld!](../images/v4/Pumps/dana_i_rs_pairing_success.png)
    
    Je bent terug op het pompscherm, dat nu de status van je pomp toont.
    
    ![Pompscherm van de Dana-i/RS na het koppelen](../images/v4/Pumps/dana_i_rs_pump_screen_paired.png)

* Selecteer in **Instellingen** de optie **Bolussnelheid** om de standaard bolussnelheid te wijzigen (12 s/E, 30 s/E of 60 s/E).

* Zet de basaalstap op de pomp op 0,01 E/u via het artsenmenu (zie de handleiding van de pomp).
* Zet de bolusstap op de pomp op 0,05 E via het artsenmenu (zie de handleiding van de pomp). **AAPS** leest de basaal- en bolusstap uit de pomp en gebruikt die voor elke bolus, zodat een bolus altijd past bij de stap die op de pomp is ingesteld. Het pompscherm toont ze in de regel **Basaal/bolus stap**.
* Activeer vertraagde bolussen op de pomp

### Opties die alleen bij sommige modellen zichtbaar zijn

* **Automatische vergrendeling**: bij een Dana-i2 heeft het scherm **Gebruikersopties** (op het pompscherm, **Beheren** > **Pomp**) een schakelaar **Automatische vergrendeling** voor de automatische vergrendeling van de pomp. Druk na het wijzigen op **Opties op de pomp opslaan**.
* **Eenvoudige modus**: bij pompmodellen met een eenvoudig menu toont het pompscherm een regel **Eenvoudige modus** met **Aan** of **Uit**.
* Als een Dana-i2 een bolus weigert, toont **AAPS** de reden, bijvoorbeeld *De pomp is niet voorgevuld*, *Onvoldoende insuline in het reservoir* of *De 'Easy Sleep'-modus van de pomp is ingeschakeld.*

(DanaRS-Insulin-Pump-default-password)=

### Standaard wachtwoord

* Voor DanaRS met firmware v1 en v2 is het standaard wachtwoord 1234.
* Bij een DanaRS met firmware v3 of een Dana-i wordt het standaardwachtwoord afgeleid van de productiedatum van de pomp. Het wordt berekend als MMDD, waarbij MM de maand is en DD de dag waarop de pomp is gemaakt (bijvoorbeeld '0124' staat voor maand 01 en dag 24).
    
    * Kies in het MAIN MENU de optie REVIEW en open daarna SHIPPING INFORMATION in het submenu
    * Nummer 3 is de productiedatum. 
    * Bij v3/i wordt dit wachtwoord alleen gebruikt om het menu op de pomp te vergrendelen. Het wordt niet gebruikt voor communicatie en je hoeft het niet in AAPS in te voeren.

(DanaRS-Insulin-Pump-change-password-on-pump)=

## Wachtwoord wijzigen op de pomp

* Druk op OK knop van de pomp
* In het hoofdmenu selecteer "OPTION" (navigeer naar rechts dmv de pijlknop)
    
    ![DanaRS Hoofdmenu](../images/DanaRSPW_01_MainMenu.png)

* Kies in het optiemenu "USER OPTION"
    
    ![DanaRS Optie menu](../images/DanaRSPW_02_OptionMenu.png)

* Gebruik de pijlknop om omlaag te gaan naar "11. wachtwoord"
    
    ![DanaRS 11. Wachtwoord](../images/DanaRSPW_03_11PW.png)

* Druk OK om oude wachtwoord in te voeren.

* Voer het **oude wachtwoord** in (standaardwachtwoord: zie [hierboven](#DanaRS-Insulin-Pump-default-password)) en druk op OK
    
    ![DanaRS Voer oude wachtwoord in](../images/DanaRSPW_04_11PWenter.png)

* Als er een onjuist wachtwoord wordt ingevoerd, is er geen bericht dat aangeeft dat dit fout is!

* Stel **nieuw wachtwoord** in (Verander nummers met + en - knoppen / Verplaats naar rechts met de pijlknop).
    
    ![DanaRS Nieuw wachtwoord](../images/DanaRSPW_05_PWnew.png)

* Bevestig met OK knop.

* Druk op OK om de instelling op te slaan.
    
    ![DanaRS Opslaan nieuw wachtwoord](../images/DanaRSPW_06_PWnewSave.png)

* Gebruik de pijlknop om omlaag te gaan naar "14. EXIT" en druk op OK om af te sluiten.
    
    ![DanaRS Afsluiten](../images/DanaRSPW_07_Exit.png)

(DanaRS-Insulin-Pump-dana-rs-specific-errors)=

## Foutmeldingen specifiek voor de DanaRS

### Foutmelding tijdens toedienen insuline

In het geval dat de verbinding tussen AAPS en DanaRS wordt verbroken tijdens het toedienen van een bolus (d.w.z. als je wegloopt van je telefoon terwijl DanaRS bezig is insuline te geven) dan zul je het volgende bericht zien en een alarmgeluid horen.

![Alarm insulinetoediening](../images/DanaRS_Error_bolus.png)

* In de meeste gevallen is dit alleen een communicatieprobleem en is de juiste hoeveelheid insuline toegediend.
* Controleer in de pompgeschiedenis of de juiste bolus is gegeven. Dat kan op de pomp zelf, of in **AAPS** op het pompscherm (**Beheren** > **Pomp**) > **Historiek** > **Bolussen**.
* Verwijder de foutregel in [behandelingen](#screens-bolus-carbs) als je wilt.
* De echte hoeveelheid wordt bij de volgende verbinding uitgelezen en opgeslagen. Om dit af te dwingen, tik je op **Vernieuwen** op het pompscherm, of je wacht gewoon op de volgende verbinding.

## Een andere telefoon gebruiken

Wanneer je een nieuwe telefoon gaat gebruiken, moet je dat doen via de volgende stappen:

* [Exporteer instellingen](../Maintenance/ExportImportSettings.md) op je oude telefoon
* Instellingen overzetten van oude naar nieuwe telefoon

### DanaRS v1

* **Koppel de Dana RS handmatig** met de nieuwe telefoon
* Als je bij het importeren **Vervang ook de pompinstellingen** aanvinkt, worden ook de instellingen voor de pompverbinding geïmporteerd. AAPS op je nieuwe telefoon "kent" de pomp dan al en start daarom geen Bluetooth scan. Daarom moeten de nieuwe telefoon en de pomp handmatig gekoppeld worden.
* Installeer AAPS op de nieuwe telefoon.
* [Importeer instellingen](../Maintenance/ExportImportSettings.md) op je nieuwe telefoon

### DanaRS v3, Dana-i, Dana-i2

* Start de koppeling zoals [hierboven](#DanaRS-Insulin-Pump-pairing-pump) beschreven.
* Soms moet je eerst de koppelingsgegevens in **AAPS** wissen. Tik op het pompscherm (**Beheren** > **Pomp**) op **Ontkoppelen** en bevestig **Reset pomp koppeling?**. Tik daarna opnieuw op **Koppelen**.

## Wisselen van tijdzone met DanaRS, Dana-i en Dana-i2 pompen

Informatie over reizen door tijdzones vind je in de sectie [Wisselen van tijdzone met pompen](#timezone-traveling-danarv2-danars).

## Waar je hulp kunt krijgen

De ontwikkeling van de DanaRS/Dana-i/Dana-i2 driver wordt door de community gedaan, op **vrijwillige** basis. Doe het volgende voordat je om hulp vraagt:

1. **Lees** het betreffende deel van deze documentatie om te controleren hoe de functie hoort te werken.
2. **Vraag** het op het kanaal *#AAPS* op [Discord](https://discord.gg/4fQUWHZ4Mw), of in een van de andere [community kanalen](../GettingHelp/WhereCanIGetHelp.md).
3. **Meld een bug**: zoek eerst in de [bestaande issues](https://github.com/nightscout/AndroidAPS/issues). Staat jouw probleem er niet bij, open dan een [nieuwe issue](https://github.com/nightscout/AndroidAPS/issues) en voeg je [logbestanden](../GettingHelp/AccessingLogFiles.md) toe.

Beschrijf als je om hulp vraagt: merk en model van je telefoon, Android versie, **AAPS** versie, en een duidelijke beschrijving van het probleem in gewone taal (wat er is veranderd, wanneer het voor het laatst werkte).