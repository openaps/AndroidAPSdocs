# Config Builder

Config Builder (Conf) is the tab where you turn the modular features on and off.  The boxes on the left hand side allow you to select which one to use, the boxes on the right hand side allow you to view these as a tab in AndroidAPS.  Where there are additional settings available within the module, you can click on the cog graphic which will take you to the specific settings within Preferences.

## Profile
Select the basal profile you wish to use:
*  <b>NS Profile</b> uses the profiles you have saved on your nightscout site (https://[yournightscoutsiteaddress]/profile).  You can use the Profile Switch to change which of those profiles is active, this writes the profile to the pump in case of AndroidAPS failure.
*  <b>Simple Profile</b> _needs detail_
*  <b>Local Profile</b> uses the basal profile manually entered on the pump.  For both DanaR/RS and Combo pumps this only works with the pump Profile 1.
*  <b>Circadian Percentage Profile</b> this feature is now included within Profile Switch and has been superceeded, you do not need to select this one.
See [[Profiles]] page for more setup information.

## Insulin
Select the type of insulin curve you are using.  Basic AndroidAPS options are bilinear 'Fast Acting Insulin' for an insulin with DIA of less than 5 hours, or 'Fast Acting Insulin Prolonged' for an insulin with DIA of greater than 5 hours.  These curves will only vary based on the duration of the DIA.  The Oref options 'Rapid-Acting Oref', Ultra-Rapid Oref' and 'Free-Peak Oref' are exponential and more information is listed in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves), the curves will vary based on the DIA and the time to peak.  You will need to enter additional settings for these.  You can view the insulin curve graph on the Insulin (Ins) tab to help you understand which curve fits you.

## BG Source
Select the blood glucose source you are using - see [[BG Source]] page for more setup information.

## Pump
Select the pump you are using.  For people wanting to open loop this needs to be 'Virtual Pump'.  See [[DanaR Insulin Pump]], [[DanaRS Insulin Pump]] or [[Accu Chek Combo Pump]] pages for more setup information.

## Sensitivity Detection
Select the type of sensitivity detection.  This will analyse historical data on the go and make adjustments if it recognizes that you are reacting more sensitively (or conversely, more resistant) to insulin than usual.  Details about the Sensitivity Oref0 algorithm can be read in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#auto-sensitivity-mode).  You can view your sensistivity on the homescreen by selecting SEN and watching the white line.  Note, you need to be in [Objective 6](https://github.com/MilosKozak/AndroidAPS/wiki/Objectives) in order to use Sensitivity Detection/autosens.

## APS
Select either OpenAPS MA (meal assist) or OpenAPS AMA (advanced meal assist).  More detail about OpenAPS AMA can be found in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama); in simple terms the benefits are after you give yourself a meal bolus the system can high-temp more quickly IF you enter carbs reliably.  You can view the active detail of the chosen algorithm in the OpenAPS(OAPS) tab.
Note you need to be in [Objective 7](https://github.com/MilosKozak/AndroidAPS/wiki/Objectives) in order to use OpenAPS AMA.

## Loop
If you wish to use open or closed looping you will need to enable this here.  You can see the active request and success of enactment in the Loop tab.

## Constraints
If you view the Objectives (Obj) tab, you can see more information about how far you have progressed and what actions you still need to complete.  See [[Objectives]] page for more information.

## Treatments
If you view the Treatments (Treat) tab, you can see the treatments that have been uploaded to nightscout.  Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the Careportal (CP) tab.

## General
*  <b>Actions</b> allows you to make Profiles Switches (see [[Profiles]] for more setup information), Temporary Targets, and for those using DanaR/RS or Combo pump to set a manual TBR or prime the canula.
*  <b>Careportal</b> allows you to record any specific care entries and view the current sensor, insulin, canula and pump batter ages in the Careportal (CP) tab.
*  <b>SMS Communicator</b> allows remote caregivers to control some AndroidAPS features via SMS, see [[SMS Commands]] for more setup information.
*  <b>Food</b> allows you to view and use the Nightscout food database, see [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) for more setup information or http://[yournightscoutsiteaddress]/food to access your database.
*  <b>Wear</b> allows you to view and control AndroidAPS from the Android Wear watch, see [[watchfaces]] for more setup information.
*  <b>xDrip Statusline (watch)</b>
*  <b>Ongoing Notification</b> displays a summary of current BG, delta, active TBR%, active basal u/hr and profile, IOB and split into bolus IOB and basal IOB on the phones dropdown screen and phonelock screen.
*  <b>NS Client</b>
