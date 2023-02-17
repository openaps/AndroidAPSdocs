# DanaRS and Dana-i Pump

*These instructions are for configuring the app and your pump if you have a DanaRS from 2017 onwards or the newer Dana-i. Jei turite DanaR pompą, skaitykite [DanaR insulino pompa](./DanaR-Insulin-Pump).*

**Nauja Dana RS v3 programinė įranga gali būti naudojama su AndroidAPS 2.7 ir naujesne versija.**

**New Dana-i can be used from AndroidAPS version 3.0 onwards.**

* In DanaRS/i pump "BASAL A" is used by the app. Existing data gets overwritten.

(DanaRS-Insulin-Pump-pairing-pump)=

## Pompos susiejimas

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
* Įgalinkite ištęstus bolusus pompoje

(DanaRS-Insulin-Pump-default-password)=

### Numatytasis slaptažodis

* Pompos DanaRS su programine įranga v1 ir v2 numatytasis slaptažodis yra 1234.
* For DanaRS with firmware v3 or Dana-i the default password is a combination of production month and production date (i.e. month 01 and day 24).
    
    * Open main menu on pump > review > information. 
    * Number 3 is production date. 
    * For v3/i this password is used only for locking menu on pump. It's not used for communication and it's not necessary to enter it in AndroidAPS.

(DanaRS-Insulin-Pump-change-password-on-pump)=

## Slaptažodžio keitimas pompoje

* paspauskite OK mygtuką pompoje
* Pagrindiniame meniu pasirinkite „OPTION“ (judėkite dešinėn kelis kartus paspausdami rodyklės mygtuką)
    
    ![DanaRS pagrindinis meniu](../images/DanaRSPW_01_MainMenu.png)

* Meniu Parinktys pasirinkite „USER OPTION“
    
    ![DanaRS parinkčių meniu](../images/DanaRSPW_02_OptionMenu.png)

* Rodyklės mygtuku slinkite žemyn iki "11. password"
    
    ![DanaRS 11. Slaptažodis](../images/DanaRSPW_03_11PW.png)

* Paspauskite OK senojo slaptažodžio įvedimui.

* Įveskite **seną slaptažodį** (Numatytasis slaptažodis žr. [aukščiau](#default-password)) ir paspauskite OK
    
    ![DanaRS Įveskite seną slaptažodį](../images/DanaRSPW_04_11PWenter.png)

* Jei įvedamas neteisingas slaptažodis, nebus jokio pranešimo apie klaidą!

* Įveskite **naują slaptažodį** (Keiskite numerius mygtukais + ir - / Perkelkite į dešinę rodyklės mygtuku).
    
    ![DanaRS Naujas slaptažodis](../images/DanaRSPW_05_PWnew.png)

* Patvirtinkite paspausdami OK mygtuką.

* Išsaugokite spausdami OK mygtuką dar kartą.
    
    ![DanaRS išsaugoti naują slaptažodį](../images/DanaRSPW_06_PWnewSave.png)

* Pereikite žemyn į „14. EXIT" ir paspauskite OK mygtuką.
    
    ![DanaRS Išėjimas](../images/DanaRSPW_07_Exit.png)

(DanaRS-Insulin-Pump-dana-rs-specific-errors)=

## Specifinės DanaRS klaidos 

### Klaida suleidžiant insuliną

In case the connection between AAPS and Dana RS is lost during bolus insulin delivery (i.e. you walk away from phone while Dana RS is pumping insulin) you will see the following message and hear an alarm sound.

![Alarm insulin delivery](../images/DanaRS_Error_bolus.png)

* Dažniausiai tai tik ryšio klaida ir visas insulino kiekis sėkmingai suleidžiamas.
* Patikrinkite, ar suleistas teisingas insulino kiekis pompos istorijoje (pačioje pompoje arba AAPS skirtuke Dana > Pompos istorija > Bolusai.
* Delete error entry in [treatments tab](Screenshots-carb-correction) if you wish.
* Kito programos ir pompos susijungimo metu suleisto insulino kiekis bus patikrintas ir įrašytas. Galite tiesiog palaukti kito susijungimo arba jį pagreitinti paspaudę BT piktogramą Dana skirtuke.

## Specialūs veiksmai keičiant telefoną

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

## Keliavimas per skirtingas laiko juostas su DanaRS pompa

For information on traveling across time zones see section [Timezone traveling with pumps](Timezone-traveling-danarv2-danars).