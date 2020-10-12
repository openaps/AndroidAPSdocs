# Αντλία DanaRS

*Αυτές οι οδηγίες αφορούν τη διαμόρφωση της εφαρμογής και της αντλίας σας εάν έχετε μια DanaRS από το 2017 και μετά. Επισκεφθείτε την  DanaR Αντλία Ινσουλίνης </ 0> αν έχετε την DanaR αντλία.</em></p> 

**New Dana RS firmware v3 can be used from AndroidAPS version 2.7 onwards.**

* In DanaRS pump "BASAL A" is used by the app. Existing data gets overwritten.

## Pairing pump

* In AndroidAPS go to Config Builder and select 'DanaRS'

* Επιλέξτε Μενού αγγίζοντας τις 3 τελείες στην επάνω δεξιά γωνία. Επιλέξτε Προτιμήσεις.

* Select DanaRS Pair New Pump, and click your DanaRS serial number.
  
  ![AAPS pair Dana RS](../images/AAPS_DanaRSPairing.png)

* Select Pump password and input your password.

### Default password

     * For DanaRS with firmware v1 and v2 the default password is 1234.
     * For DanaRS with firmware v3 the default password is a combination of production month and production date (i.e. month 01 and day 24). 
    
        a. On your pump open main menu 
    
        b. review 
    
        c. information. Όχι. 3 is production date.
    

* **You have to confirm the pairing on the pump!** That's just the way you are used to from other bluetooth pairings (i.e. smartphone and car audio).
  
  ![Dana RS confirmation pairing](../images/DanaRS_Pairing.png)

* Select Bolus Speed to change the default bolus speed used (12sec per 1u, 30sec per 1u or 60sec per 1u).

* Restart your phone.

* Set basal step on pump to 0.01 U/h using Doctors menu (see pump user guide)

* Ενεργοποιήστε το εκτεταμένο bolus στην αντλία

## Change password on pump

* Press OK button on pump
* In main menu select "OPTION" (move right by pressing arrow button several times)
  
  ![DanaRS Main Menu](../images/DanaRSPW_01_MainMenu.png)

* In options menu select "USER OPTION"
  
  ![DanaRS Main Menu](../images/DanaRSPW_02_OptionMenu.png)

* Use arrow button to scroll down to "11. password"
  
  ![DanaRS Main Menu](../images/DanaRSPW_03_11PW.png)

* Press OK to enter old password.

* Enter **old password** (Default password see [above](#default-password)) and press OK
  
  ![DanaRS Main Menu](../images/DanaRSPW_04_11PWenter.png)

* If wrong password is entered here there will be no message indicating failure!

* Set **new password** (Change numbers with + & - buttons / Move right with arrow button).
  
  ![DanaRS Main Menu](../images/DanaRSPW_05_PWnew.png)

* Confirm with OK button.

* Save by pressing OK button again.
  
  ![DanaRS Main Menu](../images/DanaRSPW_06_PWnewSave.png)

* Move down to "14. EXIT" and press OK button.
  
  ![DanaRS Main Menu](../images/DanaRSPW_07_Exit.png)

## Dana RS specific errors

### Error during insulin delivery

In case the connection between AAPS and Dana RS is lost during bolus insulin delivery (i.e. you walk away from phone while Dana RS is pumping insulin) you will see the following message and hear an alarm sound.

![Alarm insulin delivery](../images/DanaRS_Error_bolus.png)

* In most cases this is just a communication issue and the correct amount of insulin is delivered.
* Check in pump history (either on the pump or through Dana tab > pump history > boluses) if correct bolus is given.
* Delete error entry in [treatments tab](../Getting-Started/Screenshots#carb-correction) if you wish.
* Real amount is read and recorded on next connect. To force this press BT icon on dana tab or just wait for next connect.

## Special note when switching phone

When switching to a new phone the following steps are neccessary:

* **Export settings** on your old phone
  
  * Hamburger menu (top left corner of screen)
  * Συντήρηση
  * Ρυθμίσεις εξαγωγής
    
    ![AAPS export settings](../images/AAPS_ExportSettings.png)

* **Transfer** settings from old to new phone

* **Manually pair** Dana RS with the new phone 
  * As pump connection settings are also imported AAPS on your new phone will already "know" the pump and therefore not start a bluetooth scan. Therefore new phone and pump must be paired manually.
* **Install AndroidAPS** on the new phone.
* **Ρυθμίσεις εισαγωγής** on your new phone 
  * Hamburger menu (top left corner of screen)
  * Συντήρηση
  * Ρυθμίσεις εισαγωγής

## Timezone traveling with Dana RS pump

Για πληροφορίες σχετικά με τη μετακίνηση σε ζώνες ώρας, ανατρέξτε στην ενότητα [Ζώνη ώρας που ταξιδεύει με αντλίες](../Usage/Timezone-traveling#danarv2-danars).