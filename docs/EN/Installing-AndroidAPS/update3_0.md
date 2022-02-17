# Necessary checks after update to AndroidAPS 3.0

* **Minimum Android version is 9.0 now.**
* **Data is not migrated to new database.**

  Do not complain, it's so huge change so it's simply not possible. Thus after update IOB, COB, treatments etc. will be cleared. You have to create new [profile switch](../Usage/Profiles) and start with zero IOB and COB.

  Plan the update carefully!!! Best in situation without active insulin and carbs

* Please see the [Release Notes](../Installing-AndroidAPS/Releasenotes) for details on new and changed features.


## Check automations

* New restrictions were introduced. Check your automations, especially if your conditions are still valid.
* If one of the conditions is missing, you need to add it again.
* Red automations contain invalid actions, go and edit them and reset to valid values

  Example: A profile change to 140% was allowed earlier but is now restriced to 130%.

## Check your nsclient settings and set the synchronization complications

* The implementation of the nsclient plugin has changed completly.
* Go to the nsclient tab and open the settings in the right-hand menu. A new preference "Synchronization" is available now.
* You can now make a detailed selection about which items shall be synchronized with your Nightscout site.

## Nightscout profile cannot be pushed
* The nightscout profile is gone, rest in peace!
* To copy your current nightscout profile into a local profile, go to the treatments page (now to be opened in the right-hand menu).
* Search for a profile switch with 100% and press clone.
* A new local profile is added, valid from the current date.
* To update profile from NS side use "Clone" (record!!, not profile) and save changes. You should see "Profile valid from:" set to currrent date.

## Reset master password
* You can now reset your master password in case you have forgotten it.
* You need to add a file named ```PasswordReset``` to the ```/AAPS/extra``` directory on your phones fileystem.
* Restart AndroidAPS.
* The new password will be the serial number of your active pump.
* For Dash: The serial number is printed on the Pod.
* For EROS it is also listed on the POD tab as "Sequence Number"

## Warning signal beneath BG
Beginning with Android 3.0, you might get a warning signal beneath your BG number on the main screen.

*Note*:
The last 24h hours are taken into accord. So even after you solved the origin problem, the duplicate BGs stay there for a while and will cause the warning signal to not disappear.

You need to manually delete a couple of entries from the dexcom/xdrip tab.

However, when there are a lot of duplicates, it might be easier to
* backup your settings,
* reset your database in the maintenance menu and
* import your settings again

### Red warning sign: Duplicate BG data
The red warning sign is signaling you to get active immediately: You are receiving duplicate BG data, which does avoid the loop to do its work right. Therefore your loop will be disabled until it is resolved.
You need to find out why you get duplicate BGs:
* Dexcom bridge still enabled on your NS site? Disable the bridge by going to heroku (or any other hosting provider), edit the "enable" variable and remove the "bridge" part there.
* Do multiple sources upload your BG to NS? If you use the BYODA app, enable the upload in AAPS but do not enable it in xDrip, if you use that.
* Do you have and followers that might receive your BG but do also upload it again to your NS site?
* Last resort: In AAPS, go to your NS Client settings, select the sync settings  and disable the "Accept CGM data from NS" option.

### Yellow warning sign
The yellow warning signal is indicating that your BG arrived in irregular time intervals or some BGs are missing.
Usually you do not have to take any action.
Receiving a yellow warning, e.g. after a sensor change is quite usual and nothing to worry.
