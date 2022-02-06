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

## Reset master password
* You can now reset your master password in case you have forgotten it.
* You need to add a file named ```PasswordReset``` to the ```/AAPS/extra``` directory on your phones fileystem.
* Restart AndroidAPS.
* The new password will be the serial number of your active pump.
* For Dash: The serial number is printed on the Pod.
* For EROS it is also listed on the POD tab as "Sequence Number"
