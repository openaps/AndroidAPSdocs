# DanaRS and Dana-i Pump

*These instructions are for configuring the app and your pump if you have a DanaRS from 2017 onwards or the newer Dana-i. Als je een oudere pomp hebt, ga dan naar de instructies voor de [DanaR insulinepomp](./DanaR-Insulin-Pump).*

**Met AndroidAPS versie 2.7 en nieuwer kun je de nieuwe Dana RS firmware v3 gebruiken.**

**New Dana-i can be used from AndroidAPS version 3.0 onwards.**

* In DanaRS/i pump "BASAL A" is used by the app. Existing data gets overwritten.

(DanaRS-Insulin-Pump-pairing-pump)=

## Koppelen van de pomp

* On AndroidAPS homescreen click hamburger menu on the top left corner and go to Config Builder.
* In pump section select 'Dana-i/RS'.
* Click on gear wheel to get directly to the pump settings or return to homescreen.
    
    ![AAPS config builder Dana-i/RS](../images/DanaRS_i_ConfigB.png)

* Go to 'DANA-i/RS' tab.

* Select preferences menu by tapping the 3 dots in the top right. 
* Select 'Dana-i/RS Preferences'.
* Click on "Selected pump".
* In the pairing window click on the entry for your pump.
    
    ![AAPS pair Dana-i/RS](../images/DanaRS_i_Pairing.png)

* **You have to confirm the pairing on the pump!** That's just the way you are used to from other bluetooth pairings (i.e. smartphone and car audio).
    
    ![Dana RS confirmation pairing](../images/DanaRS_Pairing.png)

* Follow the pairing process based on the type and firmware of your pump:
    
    * For DanaRS v1 select pump password in preferences and set your password.
    * For DanaRS v3 you have to type 2 sequences of numbers and letters displayed on pump to AndroidAPS pairing dialog.
    * For Dana-i standard Android pairing dialog appear and you have to enter 6-digit number displayed on pump.

* Select Bolus Speed to change the default bolus speed used (12sec per 1u, 30sec per 1u or 60sec per 1u).

* Set basal step on pump to 0.01 U/h using Doctors menu (see pump user guide).
* Set bolus step on pump to 0.05 U/h using Doctors menu (see pump user guide).
* Activeer vertraagde bolussen op de pomp

(DanaRS-Insulin-Pump-default-password)=

### Standaard wachtwoord

* Voor DanaRS met firmware v1 en v2 is het standaard wachtwoord 1234.
* For DanaRS with firmware v3 or Dana-i the default password is a combination of production month and production date (i.e. month 01 and day 24).
    
    * Open main menu on pump > review > information. 
    * Number 3 is production date. 
    * For v3/i this password is used only for locking menu on pump. It's not used for communication and it's not necessary to enter it in AndroidAPS.

(DanaRS-Insulin-Pump-change-password-on-pump)=

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

(DanaRS-Insulin-Pump-dana-rs-specific-errors)=

## Foutmeldingen specifiek voor de DanaRS

### Foutmelding tijdens toedienen insuline

In case the connection between AAPS and Dana RS is lost during bolus insulin delivery (i.e. you walk away from phone while Dana RS is pumping insulin) you will see the following message and hear an alarm sound.

![Alarm insulin delivery](../images/DanaRS_Error_bolus.png)

* In de meeste gevallen krijg je deze foutmelding omdat de communicatie werd verbroken, en is gewoon de juiste hoeveelheid insuline gegeven. Controleer dit eerst voordat je een eventuele nieuwe bolus geeft.
* Controleer in de geschiedenis van je pomp (op de pomp zelf, of in de app op het Dana tabblad > Historiek > Bolussen > VERNIEUW) of de juiste bolus werd gegeven.
* Delete error entry in [treatments tab](Screenshots-carb-correction) if you wish.
* De werkelijke hoeveelheid insuline wordt uitgelezen uit de pomp en opgeslagen in de app tijdens de eerstvolgende keer dat ze verbinding maken. Om handmatig te laten verbinden, kun je op het Bluetooth-icoon drukken op het Dana tabblad. Of gewoon afwachten tot de app vanzelf weer verbinding maakt met de pomp.

## Een andere telefoon gebruiken

When switching to a new phone the following steps are necessary:

* [Export settings](ExportImportSettings-export-settings) on your old phone
* Transfer settings from old to new phone

### DanaRS v1

* **Manually pair** Dana RS with the new phone
* As pump connection settings are also imported AAPS on your new phone will already "know" the pump and therefore not start a bluetooth scan. Therefore new phone and pump must be paired manually.
* Install AndroidAPS on the new phone.
* [Import settings](ExportImportSettings-import-settings) on your new phone

### DanaRS v3, Dana-i

* Start pairing procedure like decribed [above](DanaRS-Insulin-Pump-pairing-pump).
* Sometimes it may be necessary to clear pairing information in AndroidAPS by long-click BT icon on Dana-i/RS tab.

## Wisselen van tijdzone met de DanaRS

For information on traveling across time zones see section [Timezone traveling with pumps](Timezone-traveling-danarv2-danars).