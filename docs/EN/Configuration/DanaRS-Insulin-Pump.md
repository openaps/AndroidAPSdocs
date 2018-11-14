# DanaRS Pump

_These instructions are for configuring the app and your pump if you have a DanaRS from 2017 onwards. Visit [DanaR Insulin Pump](./DanaR-Insulin-Pump) if you have the original DanaR instead._
*  In DanaRS pump "BASAL A" is used by the app. Existing data gets overwritten.

*  In AndroidAPS go to Config Builder and select 'DanaRS'

*  Select Menu by tapping the 3 dots in the top right. Select Preferences.

*  Select DanaRS Pair New Pump, and click your DanaRS serial number.

*  Select Pump password, and input your password. (Default password is 1234)

*  Select Bolus Speed to change the default bolus speed used (12sec per 1u, 30sec per 1u or 60sec per 1u).

*  Restart your phone.

*  Set basal step on pump to 0.01 U/h using Doctors menu (see pump user guide)

* Enable extended boluses on pump


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
* **Transfer** settings from old to new phone
* **Manually pair** Dana RS with the new phone
  * As pump connection settings are also imported AAPS on your new phone will already "know" the pump and therefore not start a bluetooth scan. Therefore new phone and pump must be paired manually.
* **Install AndroidAPS** on the new phone.
* **Import settings** on your new phone
  * Hamburger menu (top left corner of screen)
  * Maintenance
  * Import settings
