# Bomba de insulina Accu Chek Combo

**This software is part of a DIY solution and is not a product, but requires YOU to read, learn and understand the system including how to use it. It is not something that does all your diabetes management for you, but allows you to improve your diabetes and your quality of life if you're willing to put in the time required. Don't rush into it, but allow yourself time to learn. You alone are responsible for what you do with it.**

## Hardware necesario

* Una bomba de insulina Roche Accu-Chek Combo (cualquier firmware, todos funcionan)
* A Smartpix or Realtyme device together with the 360 Configuration Software to configure the pump. (Roche sends out Smartpix devices and the configuration software free of charge to their customers upon request.)
* A compatible phone: An Android phone with a phone running LineageOS 14.1 (formerly CyanogenMod) or Android 8.1 (Oreo). 
* The LineageOS 14.1 has to be a recent version from at least June 2017 since the change needed to pair the Combo pump was only introduced at that time. 
* A list of phones can be found in the [AAPS Phones](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435) document.
* Please be aware that this is not complete list and reflects personal user experience. You are encouraged to also enter your experience and thereby help others (these projects are all about paying it forward).
* Be aware that while Android 8.1 allows communicating with the Combo, there are still issues with AAPS on 8.1.
* For advanced users, it is possible to perform the pairing on a rooted phone and transfer it to another rooted phone to use with ruffy/AAPS, which must also be rooted. This allows using phones with Android < 8.1 but has not been widely tested: https://github.com/gregorybel/combo-pairing/blob/master/README.md

## Limitaciones

* Extended bolus and multiwave bolus are not supported (see [Extended Carbs](../Usage/Extended-Carbs.rst) instead).
* Solo se admite un perfil basal.
* Setting a basal profile other than 1 on the pump or delivering extended boluses or multiwave boluses from the pump interferes with TBRs and forces the loop into low-suspend only mode for 6 hours as the the loop can't run safely under these conditions.
* It's currently not possible to set the time and date on the pump, so [daylight saving time changes](../Usage/Timezone-traveling#accu-chek-combo) have to be performed manually (you may disable the phone's automatic clock update in the evening and change it back in the morning together with the pump clock to avoid an alarm during the night).
* Actualmente solo se admiten tasas basales en el rango de 0.05 a 10 U / h. This also applies when modifying a profile, e.g. when increasing to 200%, the highest basal rate must not exceed 5 U/h since it will be doubled. De manera similar, cuando se reduce al 50%, la tasa basal más baja debe ser de al menos 0,10 U / h.
* If the loop requests a running TBR to be cancelled the Combo will set a TBR of 90% or 110% for 15 minutes instead. This is because cancelling a TBR causes an alert on the pump which causes a lot of vibrations.
* Occasionally (every couple of days or so) AAPS might fail to automatically cancel a TBR CANCELLED alert, which the user then needs to deal with (by pressing the refresh button in AAPS to transfer the warning to AAPS or confirming the alert on the pump).
* Bluetooth connection stability varies with different phones, causing "pump unreachable" alerts, where no connection to the pump is established anymore. 
* If that error occurs, make sure Bluetooth is enabled, press the Refresh button in the Combo tab to see if this was caused by an intermitted issue and if still no connection is established, reboot the phone which should usually fix this. 
* There is another issue were a restart doesn't help but a button on the pump must be pressed (which resets the pump's Bluetooth), before the pump accepts connections from the phone again. 
* There is very little that can be done to remedy either of those issues at this point. So if you see those errors frequently your only option at this time is to get another phone that's known to work well with AndroidAPS and the Combo (see above).
* Issuing a bolus from the pump will not always be detected in time (checked for whenever AAPS connects to the pump), and might take up to 20 minutes in the worst case. 
* Boluses on the pump are always checked before a high TBR or a bolus issued by AAPS but due to the limitations AAPS will then refuse to issue the TBR/Bolus as it was calculated under false premises. (-> Don't bolus from the Pump! See chapter [Usage](#usage) below)
* Setting a TBR on the pump is to be avoided since the loop assumes control of TBRs. Detecting a new TBR on the pump might take up to 20 minutes and the TBR's effect will only be accounted from the moment it is detected, so in the worst case there might be 20 minutes of a TBR that is not reflected in IOB. 

## Configuración

* Configure the pump using 360 config software. 
* If you do not have the software, please contact your Accu-Chek hotline. They usually send registered users a CD with the "360° Pump Configuration Software" and a SmartPix USB-infrared connection device (the Realtyme device also works if you have that).
* **Required settings** (marked green in screenshots):
    
    * Set/leave the menu configuration as "Standard", this will show only the supported menus/actions on the pump and hide those which are unsupported (extended/multiwave bolus, multiple basal rates), which cause the loop functionality to be restricted when used because it's not possible to run the loop in a safe manner when used.
    * Verify the *Quick Info Text* is set to "QUICK INFO" (without the quotes, found under *Insulin Pump Options*).
    * Set TBR *Maximum Adjustment* to 500%
    * Disable *Signal End of Temporary Basal Rate*
    * Set TBR *Duration increment* to 15 min
    * Habilitar Bluetooth

* **Recommended settings** (marked blue in screenshots)
    
    * Set low cartridge alarm to your liking
    * Configure a max bolus suited for your therapy to protect against bugs in the software
    * Similarly, configure maximum TBR duration as a safeguard. Allow at least 3 hours, since the option to disconnect the pump for 3 hours sets a 0% for 3 hours.
    * Enable key lock on the pump to prevent bolusing from the pump, esp. when the pump was used before and quick bolusing was a habit.
    * Set display timeout and menu timeout to the minimum of 5.5 and 5 respectively. This allows the AAPS to recover more quickly from error situations and reduces the amount of vibrations that can occur during such errors

![Pantalla del menú de usuarios](../images/combo/combo-menu-settings.png)

![Pantalla de los ajustes de basal temporal](../images/combo/combo-tbr-settings.png)

![Pantalla de los ajustes de bolus](../images/combo/combo-bolus-settings.png)

![Pantalla de los ajustes del cartucho de insulina](../images/combo/combo-insulin-settings.png)

* Install AndroidAPS as described in the [AndroidAPS docs](../Installing-AndroidAPS/Building-APK.md).
* Make sure to read the docs to understand how to setup AndroidAPS.
* Select the **MDI plugin** in AndroidAPS, not the Combo plugin at this point to avoid the Combo plugin from interfering with ruffy during the pairing process.
* Clone [ruffy](https://github.com/MilosKozak/ruffy) from github via git.
* Install ruffy and use it to pair the pump.
    
    * If it doesn't work after multiple attempts, switch to the `pairing` branch, pair the pump and then switch back the original branch.
    * Note that the pairing processing is somewhat fragile (but only has to be done once) and may need a few attempts; quickly acknowledge prompts and when starting over, remove the pump device from the Bluetooth settings beforehand. 
    * Another option to try is to go to the Bluetooth menu after initiating the pairing process (this keeps the phone's Bluetooth discoverable as long as the menu is displayed) and switch back to ruffy after confirming the pairing on the pump, when the pump displays the authorization code.
    * If you're unsuccessful in pairing the pump (say after 10 attempts), try waiting up to 10s before confirming the pairing on the pump (when the name of the phone is displayed on the pump). 
    * If you have configured the menu timeout to be 5s above, you need to increase it again. Some users reported they needed to do this. 
    * Lastly, consider moving from one room to another in case of local radio interference. At least one user immediately overcame pairing problems by simply changing rooms.

* When AAPS is using ruffy, the ruffy app can't be used. The easiest way is to just reboot the phone after the pairing process and let AAPS start ruffy in the background.

* If the pump is completely new, you need to **do one bolus on the pump**, so the pump creates a first history entry.
* Before enabling the Combo plugin in AAPS make sure your profile is set up correctly and activated(!) and your basal profile is up to date as AAPS will sync the basal profile to the pump.
* Then activate the [Combo plugin](../Configuration/Config-Builder#pump). 
* Press the *Refresh* button on the Combo tab to initialize the pump.
* To verify your setup, with the pump **disconnected**, use AAPS to set a TBR of 500% for 15 min and issue a bolus.
* The pump should now have a TBR running and the bolus in the history. AAPS should also show the active TBR and delivered bolus.

## Why does pairing with the pump not work with the app "ruffy"?

Hay varias razones posibles. Realice los siguientes pasos:

1. Ponga una **batería nueva o totalmente cargada ** en la bomba. Mire la sección de batería para más detalles. Asegúrese de que la bomba esta muy cerca del teléfono.

![La bomba debe estar al lado del teléfono](../images/Combo_next_to_Phone.png)

2. Turn off or remove any other bluetooth devices so they will not be able to establish a connection to the phone while pairing is in progress. Any parallel bluetooth communication or prompt to establish connections might disturb the pairing process.
3. Delete already connected devices in the Bluetooth menu of the pump: **BLUETOOTH SETTINGS / CONNECTION / REMOVE** until **NO DEVICE** is shown.
4. Delete a pump already connected to the phone via Bluetooth: Under Settings / Bluetooth, remove the paired device "**SpiritCombo**"
5. Asegúrese que el lazo de AAPS no está en ejecución. Desactive el lazo en AAPS.
6. Ahora inicie ruffy en el teléfono. Debe pulsar Reset! eliminar el antiguo emparejamiento. Y por último pulsar en Connectar!.
7. In the Bluetooth menu of the pump, go to **ADD DEVICE / ADD CONNECTION**. Press *CONNECT!**
    
    * Step 6 and 7 have to be done in a short timing.

8. Now the Pump should show up the BT Name of phone to select for pairing. Here it is important to wait at least 5s before you hit the select button on Pump. Otherwise the Pump will not send the Pairing request to the Phone properly.

* If Combo Pump is set to 5s Screen timeout, you may test it with 40s (original setting). From experience the time between pump is showing up in phone until select phone is around 5-10s. In many other cases pairing just times out without successfully Pair. 
* Later you should set it back to 5s, to meet AAPS Combo settings.
* If the pump does not show the phone as a pairing device at all, your phone's Bluetooth stack is probably not compatible with the pump. Make sure you are running a new **LineageOS ≥ 14.1** or **Android ≥ 8.1 (Oreo)**. If possible, try another smartphone. You can find a list of already successfully used smartphones under \[AAPS Phones\] (https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435). 

9. Luego la bomba, debe mostrar un código de seguridad de 10 dígitos. Ruffy muestra una pantalla para ingresar el código. So enter it in Ruffy and you should be ready to go.
10. Reinicie el teléfono.
11. Ahora puede reiniciar el lazo AAPS.

## Uso

* Keep in mind that this is not a product, esp. in the beginning the user needs to monitor and understand the system, its limitations and how it can fail. 
* It is strongly advised NOT to use this system when the person using it is not able to fully understand the system.
* Read the OpenAPS documentation https://openaps.org to understand the loop algorithm AndroidAPS is based upon.
* Read the [AAPS docs](https://androidaps.readthedocs.io/en/latest/) to learn about and understand AndroidAPS.
* This integration uses the same functionality which the meter provides that comes with the Combo.
* The meter allows to mirror the pump screen and forwards button presses to the pump. 
* The connection to the pump and this forwarding is what the ruffy app does. 
* A 'scripter' components reads the screen and automates entering boluses, TBRs etc and making sure inputs are processed correctly.
* AAPS then interacts with the scripter to apply loop commands and to administer boluses.
* This mode has some restrictions: it's comparatively slow (but well fast enough for what it is used for) and setting a TBR or giving a bolus causes the pump to vibrate.
* The integration of the Combo with AndroidAPS is designed with the assumption that all inputs are made via AndroidAPS. Boluses entered on the pump directly will be detected by AAPS, but it can take up to 20 min before AndroidAPS becomes aware of such a bolus. 
* Reading boluses delivered directly on the pump is a safety feature and not meant to be regularly used (the loop requires knowledge of carbs consumed, which can't be entered on the pump, which is another reason why **all inputs should be done in AndroidAPS**). 
* Don't set or cancel a TBR on the pump. The loop assumes control of TBR and cannot work reliably otherwise, since it's not possible to determine the start time of a TBR that was set by the user on the pump.
* The pump's first basal rate profile is read on application start and is updated by AAPS.
* The basal rate should not be manually changed on the pump, but will be detected and corrected as a safety measure (don't rely on safety measures by default, this is meant to detect an unintended change on the pump).
* It's recommended to enable key lock on the pump to prevent bolusing from the pump, esp. when the pump was used before and using the "quick bolus" feature was a habit.
* Also, with keylock enabled, accidentally pressing a key will NOT interrupt active communication between AAPS and pump.
* When a BOLUS/TBR CANCELLED alert starts on the pump during bolusing or setting a TBR, this is caused by a disconnect between pump and phone, which happens from time to time. AAPS will try to reconnect and confirm the alert and then retry the last action (**boluses are NOT retried** for safety reasons). 
* Therefore, such an alarm can be ignored as AAPS will confirm it automatically, usually within 30s (cancelling it is not problem, but will lead to the currently active action to have to wait till the pump's display turns off before it can reconnect to the pump). 
* If the pump's alarm continues, automatic confirmation failed, in which case the user needs to confirm the alarm manually.
* When a low cartridge or low battery alarm is raised during a bolus, they are confirmed and shown as a notification in AAPS. 
* If they occur while no connection is open to the pump, going to the Combo tab and hitting the Refresh button will take over those alerts by confirming them and show a notification in AAPS.
* When AAPS fails to confirm a TBR CANCELLED alert, or one is raised for a different reason, hitting Refresh in the Combo tab establishes a connection, confirms the alert and shows a notification for it in AAPS. This can safely be done, since those alerts are benign - an appropriate TBR will be set again during the next loop iteration.
* For all other alerts raised by the pump: connecting to the pump will show the alert message in the Combo tab, e.g. "State: E4: Occlusion" as well as showing a notification on the main screen.
* An error will raise an urgent notification. 
* AAPS never confirms serious errors on the pump, but let's the pump vibrate and ring to make sure the user is informed of a critical situation that needs action.
* After pairing, ruffy should not be used directly (AAPS will start in the background as needed), since using ruffy at AAPS at the same time is not supported.
* If AAPS crashes (or is stopped from the debugger) while AAPS and the pump were communicating (using ruffy), it might be necessary to force close ruffy. Restarting AAPS will start ruffy again.
* Restarting the phone is also an easy way to resolve this if you don't know how to force kill an app.
* Don't press any buttons on the pump while AAPS communicates with the pump (Bluetooth logo is shown on the pump).