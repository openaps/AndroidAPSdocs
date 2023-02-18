# DanaRS and Dana-i Pump

*These instructions are for configuring the app and your pump if you have a DanaRS from 2017 onwards or the newer Dana-i. Vizitați pagina [Pompa de insulină DanaR](./DanaR-Insulin-Pump) dacă aveți o pompă DanaR, modelul original.*

**New Dana RS firmware v3 can be used from AndroidAPS version 2.7 onwards.**

**New Dana-i can be used from AndroidAPS version 3.0 onwards.**

* In DanaRS/i pump "BASAL A" is used by the app. Existing data gets overwritten.

(DanaRS-Insulin-Pump-pairing-pump)=

## Pairing pump

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
* Activați bolusurile extinse în pompă

(DanaRS-Insulin-Pump-default-password)=

### Parola implicită

* Pentru DanaRS cu firmware v1 şi v2 parola implicită este 1234.
* For DanaRS with firmware v3 or Dana-i the default password is a combination of production month and production date (i.e. month 01 and day 24).
    
    * Open main menu on pump > review > information. 
    * Number 3 is production date. 
    * For v3/i this password is used only for locking menu on pump. It's not used for communication and it's not necessary to enter it in AndroidAPS.

(DanaRS-Insulin-Pump-change-password-on-pump)=

## Schimbă parola pe pompă

* Apăsaţi butonul OK pe pompă
* In main menu select "OPTION" (move right by pressing arrow button several times)
    
    ![Meniu principal DanaRS](../images/DanaRSPW_01_MainMenu.png)

* In options menu select "USER OPTION"
    
    ![DanaRS Option Menu](../images/DanaRSPW_02_OptionMenu.png)

* Use arrow button to scroll down to "11. parolă"
    
    ![DanaRS 11. Parolă](../images/DanaRSPW_03_11PW.png)

* Apăsaţi OK pentru a introduce parola veche.

* Introduceţi **parola veche** (Parolă implicită vedeţi [mai sus](#default-password)) şi apăsaţi OK
    
    ![DanaRS Introduceţi parola veche](../images/DanaRSPW_04_11PWenter.png)

* Dacă este introdusă o parolă greşită aici nu va exista nici un mesaj care să indice greșeala!

* Setează **noua parolă** (Schimbă numerele cu + & - butoane / Mută la dreapta cu butonul săgeată).
    
    ![Parola nouă DanaRS](../images/DanaRSPW_05_PWnew.png)

* Confirmaţi cu butonul OK.

* Salvează apăsând din nou butonul OK.
    
    ![Salvați noua parolă DanaRS](../images/DanaRSPW_06_PWnewSave.png)

* Move down to "14. EXIT" and press OK button.
    
    ![DanaRS Exit](../images/DanaRSPW_07_Exit.png)

(DanaRS-Insulin-Pump-dana-rs-specific-errors)=

## Dana RS specific errors

### Eroare în timpul administrării insulinei

In case the connection between AAPS and Dana RS is lost during bolus insulin delivery (i.e. you walk away from phone while Dana RS is pumping insulin) you will see the following message and hear an alarm sound.

![Alarm insulin delivery](../images/DanaRS_Error_bolus.png)

* In most cases this is just a communication issue and the correct amount of insulin is delivered.
* Check in pump history (either on the pump or through Dana tab > pump history > boluses) if correct bolus is given.
* Delete error entry in [treatments tab](Screenshots-carb-correction) if you wish.
* Real amount is read and recorded on next connect. To force this press BT icon on dana tab or just wait for next connect.

## Special note when switching phone

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

## Timezone traveling with Dana RS pump

For information on traveling across time zones see section [Timezone traveling with pumps](Timezone-traveling-danarv2-danars).