# DanaRS Pump

*These instructions are for configuring the app and your pump if you have a DanaRS from 2017 onwards. Visit [DanaR Insulin Pump](./DanaR-Insulin-Pump) if you have the original DanaR instead.*

* In DanaRS pump "BASAL A" is used by the app. Existing data gets overwritten.

* In AndroidAPS go to Config Builder and select 'DanaRS'

* 오른쪽 상단에 있는 점 3개를 눌러 메뉴를 선택하세요. 설정을 선택하세요.

* Select DanaRS Pair New Pump, and click your DanaRS serial number.
  
      ![AAPS pairing Dana RS](../images/AAPS_DanaRSPairing.png)
      

* Select Pump password and input your password. (Default password is 1234)   
  **You have to confirm the pairing on the pump!** That's just the way you are used to from other bluetooth pairings (i.e. smartphone and car audio).
  
      ![Dana RS confirm pairing](../images/DanaRS_Pairing.png)
      

* Select Bolus Speed to change the default bolus speed used (12sec per 1u, 30sec per 1u or 60sec per 1u).

* Restart your phone.

* Set basal step on pump to 0.01 U/h using Doctors menu (see pump user guide)

* 펌프에서 확장Bolus를 활성화하세요.

## Dana RS specific errors

### Error during insulin delivery

In case the connection between AAPS and Dana RS is lost during bolus insulin delivery (i.e. you walk away from phone while Dana RS is pumping insulin) you will see the following message and hear an alarm sound.

![Alarm insulin delivery](../images/DanaRS_Error_bolus.png)

* In most cases this is just a communication issue and the correct amount of insulin is delivered.
* Check in pump history (either on the pump or through Dana tab > pump history > boluses) if correct bolus is given.
* Delete error entry in CP tab if you wish.
* Real amount is read and recorded on next connect. To force this press BT icon on dana tab or just wait for next connect.

## Special note when switching phone

When switching to a new phone the following steps are neccessary:

* **Export settings** on your old phone
  
  * Hamburger menu (top left corner of screen)
  * Maintenance
  * Export settings
    
    ![AAPS export settings](../images/AAPS_ExportSettings.png)

* **Transfer** settings from old to new phone

* **Manually pair** Dana RS with the new phone 
  * As pump connection settings are also imported AAPS on your new phone will already "know" the pump and therefore not start a bluetooth scan. Therefore new phone and pump must be paired manually.
* **Install AndroidAPS** on the new phone.
* **Import settings** on your new phone 
  * Hamburger menu (top left corner of screen)
  * Maintenance
  * Import settings

## Timezone traveling with Dana RS pump

For information on traveling accross time zones see section [Timezone traveling with pumps](../Usage/Timezone-traveling.md#insight).