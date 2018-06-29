# Tips and Tricks

The founding principle of closed looping is that your basal rate and carb ratio is accurate.  All recommendations assume that your basal needs are met and any peaks or troughs you're seeing are a result of other factors which therefore require some one off adjustments (exercise, stress etc).  The adjustments the closed loop can make for safety have been limited (see maximum allowed temporary basal rate in [OpenAPS Reference Design](https://openaps.org/reference-design/)), which means that you don't want to waste the allowed dosing on correcting a wrong underlying basal.   If for example you are frequently low temping on the approach of a meal then it is likely your basal needs adjusting.  You can use [autotune](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig) to consider a large pool of data to suggest whether and how basals and/or ISF need to be adjusted, and also whether carb ratio needs to be changed.  Or you can test and set your basal the [old fashioned way](http://integrateddiabetes.com/basal-testing/).

## Practicalities of looping
* If you don't want your preferences to be easily changed then you can password protect the preferences menu by selecting in the preferences menu "password for settings" and type the password you choose. The next time you go into preferences menu it will ask for that password before going any further. If you later want to remove the password option then go into "password for settings" and delete the text.

* If you plan to use the android wear app to bolus or change settings then you need to ensure notifications from AndroidAPS are not blocked. Confirmation of action comes via notification.

* If you take your pump off for showering/bathing/swimming/sport etc then press and hold on the "Open Loop"/"Closed Loop" text on the main homepage and select "disconnect for..." however many hours you plan to disconnect for.  This will set your basal to zero for that time period.  The minimum length of time for a disconnection is due to the minimum length of TBRs that can be set on the pump so if you wish to disconnect for a shorter period of time, or you connect your pump sooner than expected then press and hold "Suspended (X mins)" and select "Resume".  Your IOB will then be accurate for calculations on your return to the pump.

* For safety, recommendations made are based on not one CGM reading but the average delta.  Therefore if you miss some readings it may take a while after getting data back before AndroidAPS kicks in looping again.

* There are several blogs with good tips to help you understand the practicalities of looping:
  * [Fine-tuning Settings](http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM
  * [Why DIA matters](http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM
  * [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
  * [Hormones and autosens](http://seemycgm.com/2017/06/06/hormones-2/) See my CGM

## Batteries
Looping can reduce the pump battery faster than normal use because the system interacts through bluetooth far more than a manual user does.  It is best to change battery at 25% as communication becomes challenging then.  You can set warning alarms for pump battery by using the PUMP_WARN_BATT_P variable in your nightscout site.  Tricks to increase battery life include:
* reduce the length of time the LCD stays on (within pump settings menu)
* reduce the length of time the backlight stays on (within pump settings menu)
* select notification settings to a beep rather than vibrate (within pump settings menu)
* only press the buttons on the pump to reload, use AndroidAPS to view all history, battery level and reservoir volume.
* AndroidAPS app may often be closed to save energy or free RAM on some phones. When AndroidAPS is reinitialized at each startup it establishes a Bluetooth connection to the pump, and re-reads the current basal rate and bolus history. This consumes battery. To see if this is happening, go to Preferences > NSClient and enable 'Log app start to NS'. Nightscout will receive an event at every restart of AndroidAPS, which makes it easy to track the issue.  To reduce this happening, whitelist AndroidAPS app in the phone battery settings to stop the app power monitor closing it down.
* clean battery terminals with alcohol wipe to ensure no manufacturing wax/grease remains.
* for DanaR/RS pumps the startup procedure draws a high current across the battery to purposefully break the passivation film (prevents loss of energy whilst in storage) but it doesn't always work to break it 100%.  Either remove and reinsert battery 2-3 times until it does show 100% on screen, or use battery key to briefly short circuit battery before insertion by applying to both terminals for a split second.
* see also more tips for [particular types of battery](https://github.com/MilosKozak/AndroidAPS/wiki/Accu-Chek-Combo:-Tipps-for-Basic-usage#battery-type-and-causes-of-short-battery-life) to use for Combo pump

## Changing reservoirs and canulas
The change of cartridge can not be done via AndroidAPS, but must be carried out as before directly via the pump.
* Long press on "Open Loop"/"Closed Loop" on the Home tab of AndroidAAPS and select 'Suspend Loop for 1h'
* Now disconnect the pump, and change the reservoir as per pump instructions.
* Once reconnected to the pump continue the loop by long pressing on 'Suspended (X m)'.

The change of a canula however does not use the "prime infusion set" function of the pump, but fills the infusion set and/or canula using a bolus which does not appear in the bolus history. This means it does not interrupt a currently running temporary basal rate.  On the Actions (Act) tab, use the PRIME/FILL button to set the amount of insulin needed to fill the infusion set and start the priming. If the amount is not enough, repeat filling.  You can set default amount buttons in the Preferences > Other > Fill/Prime standard insulin amounts.  See the instruction booklet in your canula box for how many units should be primed depending on needle length and tubing length.

Other tips and tricks can be found in the [Facebook group](https://www.facebook.com/groups/1900195340201874/)
