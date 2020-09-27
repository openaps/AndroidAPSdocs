Necessary checks after update to AndroidAPS 2.7
***********************************************************

* The program code was changed significantly when switching to AAPS 2.7. 
* Therefore it is important that you make some changes or check settings after the update.
* Please see `release notes <../Installing-AndroidAPS/Releasenotes.html#version-270>`_ for details on new and extended features.

Check BG source
-----------------------------------------------------------
* Check if BG source is correct after update.
* Especially when using `xDrip+ <../Configuration/xdrip.html>`_ it might happen, that BG source is changed to Dexcom app (patched).
* Open `Config builder <../Configuration/Config-Builder.html#bg-source>`_ (hamburger menu on top left side of home screen)
* Scroll down to "BG source".
* Select correct BG source if changes are necessary.

.. image:: ../images/ConfBuild_BG.png
  :alt: BG source

Finish exam
-----------------------------------------------------------
* AAPS 2.7 contains new objective 11 for `automation <../Usage/Automation.html>`_.
* You have to finish exam (`objective 3 and 4 <../Usage/Objectives.html#objective-3-proof-your-knowledge>`_) in order to complete `objective 11 <../Usage/Objectives.html#objective-11-automation>`_.
* If for example you did not finish the exam in `objective 3 <../Usage/Objectives.html#objective-3-proof-your-knowledge>`_ yet, you will have to complete the exam before you can start `objective 11 <../Usage/Automation.html>`_. 
* This will not effect other objectives you have already finished. You will keep all finished objectives!

Set master password
-----------------------------------------------------------
* Necessary to be able to `export settings <../Usage/ExportImportSettings.html>`_ as they are encrypted as of version 2.7.
* Open Preferences (three-dot-menu on top right of home screen)
* Click triangle below "General"
* Click "Master-Password"
* Enter password, confirm password and click ok.

.. image:: ../images/MasterPW.png
  :alt: Set master password
  
Экспорт настроек
-----------------------------------------------------------
* AAPS 2.7 uses a new encrypted backup format. 
* You must `export your settings <../Usage/ExportImportSettings.html>`_ after updating to version 2.7.
* Settings files from previous versions **cannot** be used in AAPS 2.7 and onwards anymore.
* Make sure to store your exported settings not only on your phone but also in at least one safe place (your pc, cloud storage...).
* If you build AAPS 2.7 apk with the same keystore than in previous versions you can install new version without deleting the previous version. 
* All settings as well as finished objectives will remain as they were in the previous version.
* In case you have lost your keystore build version 2.7 with new keystore and import settings from previous version as described in the `troubleshooting section <../Installing-AndroidAPS/troubleshooting_androidstudio.html#lost-keystore>`_.

Autosens (Hint - no action necessary)
-----------------------------------------------------------
* Autosens is changed to a dynamic switching model which replicates the reference design.
* Autosens will now switch between a 24 and 8 hours window for calculating sensitivity. It will pick which ever one is more sensitive. 
* If users have come from oref1 they will probably notice the system may be less dynamic to changes, due to the varying of either 24 or 8 hours of sensitivity.

Set Pump Password for Dana RS (if using Dana RS)
-----------------------------------------------------------
* Pump password for `Dana RS <../Configuration/DanaRS-Insulin-Pump.html>`_ was not checked in previous versions.
* Open Preferences (three-dot-menu on top right of screen)
* Scroll down and click triangle next to "Dana RS".
* Click "Pump password (v1 only)"
* Enter pump password (Default password is 1234) and click OK.

.. image:: ../images/DanaRSPW.png
  :alt: Set Dana RS password
  
To change password on Dana RS:

* Press OK button on pump
* In main menu select "OPTION" (move right by pressing arrow button several times)
* In options menu select "USER OPTION"
* Use arrow button to scroll down to "11. password"
* Enter old password (Default password is 1234)
* Set new password (Change numbers with + & - buttons / Move right with arrow button).
* Confirm with OK button.
* Save by pressing OK button again.
* Move down to "14. EXIT" and press OK button.
