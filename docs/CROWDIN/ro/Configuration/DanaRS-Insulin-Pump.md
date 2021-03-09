# Pompa DanaRS

*Aceste instrucțiuni sunt destinate configurării aplicației și pompei dumneavoastră pentru cazul în care aveți o pompă model DanaRS model 2017 sau mai nouă. Vizitați pagina [Pompa de insulină DanaR](./DanaR-Insulin-Pump) dacă aveți o pompă DanaR, modelul original.*

**New Dana RS firmware v3 can be used from AndroidAPS version 2.7 onwards.**

* În pompa DanaRS doar "BASAL A" este folosită de aplicație. Datele preexistente vor fi suprascrise.

## Pairing pump

* În AndroidAPS mergeți la Config Builder și selectați 'DanaRS'

* Selectați Menu prin apăsarea celor 3 puncte aflate în partea dreaptă sus. Alegeți Menu prin apăsarea celor 3 puncte aflate în dreapta sus. Alegeți Preferences.

* Selectați Împerecheați o pompă nouă DanaRS și apăsați pe numărul serial corespunzător pompei dumneavoastră DanaRS.
    
    ![AAPS pair Dana RS](../images/AAPS_DanaRSPairing.png)

* Selectați parola pompei și introduceți parola dumneavoastră.

### Parola implicită

* Pentru DanaRS cu firmware v1 şi v2 parola implicită este 1234.
* For DanaRS with firmware v3 the default password is a combination of production month and production date (i.e. month 01 and day 24). Open main menu on pump > review > information. Numărul 3 este data de producţie.

* **You have to confirm the pairing on the pump!** That's just the way you are used to from other bluetooth pairings (i.e. smartphone and car audio).
    
    ![Dana RS confirmation pairing](../images/DanaRS_Pairing.png)

* Selectați Viteza Bolus pentru a schimba valoarea implicită de livrare a unui bolus (12 secunde per unitate, 30 secunde per unitate sau 60 de secunde pentru livrarea unei unități de insulină).

* Reporniți telefonul.
* Stabiliți pasul bazalei în pompă la 0.01 U/o prin intermediul meniului Doctors menu (vedeți manualul de utilizare al pompei)
* Activați bolusurile extinse în pompă

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

## Dana RS specific errors

### Eroare în timpul administrării insulinei

In case the connection between AAPS and Dana RS is lost during bolus insulin delivery (i.e. you walk away from phone while Dana RS is pumping insulin) you will see the following message and hear an alarm sound.

![Alarm insulin delivery](../images/DanaRS_Error_bolus.png)

* In most cases this is just a communication issue and the correct amount of insulin is delivered.
* Check in pump history (either on the pump or through Dana tab > pump history > boluses) if correct bolus is given.
* Delete error entry in [treatments tab](../Getting-Started/Screenshots#carb-correction) if you wish.
* Real amount is read and recorded on next connect. To force this press BT icon on dana tab or just wait for next connect.

## Special note when switching phone

When switching to a new phone the following steps are neccessary:

* [Export settings](../Usage/ExportImportSettings#export-settings) on your old phone
* Transfer settings from old to new phone
* **Manually pair** Dana RS with the new phone
    
    * As pump connection settings are also imported AAPS on your new phone will already "know" the pump and therefore not start a bluetooth scan. Therefore new phone and pump must be paired manually.
* Install AndroidAPS on the new phone.
* [Import settings](../Usage/ExportImportSettings#import-settings) on your new phone

## Timezone traveling with Dana RS pump

Pentru informaţii desprte călătoriile prin diverse fusuri orare, vedeţi secţiunea [Timezone traveling with pumps](../Usage/Timezone-traveling#danarv2-danars).