Preferences
***********************************************************
* Open preferences by clicking three-dot-menu on top right side of home screen.

  .. image:: ../images/Pref2020_Open.png
    :alt: Open preferences
  
* Sub-menus can be opened by clicking the triangle below the sub-menu title.

General
===========================================================

.. image:: ../images/Pref2020_General.png
  :alt: Preferences > General

**Units**

* Set units to mmol/l or mg/dl depending on your preferences.

**Language**

* New option to use phone's default language (recommended). 
* In case you want AAPS in different language than standard phone language you can choose from a broad variety.

**Patient name**

* Can be used if you have to differentiate between multiple setups (i.e. two T1D kids in your family).

Protection
-----------------------------------------------------------
Master password
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Necessary to be able to `export settings <../Usage/ExportImportSettings.html>`_ as they are encrypted as of version 2.7.
* Open Preferences (three-dot-menu on top right of home screen)
* Click triangle below "General"
* Click "Master-Password"
* Enter password, confirm password and click ok.

.. image:: ../images/MasterPW.png
  :alt: Set master password
  
Settings protection
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Protect your settings with a password or phone's biometric authentication (i.e. `child is using AAPS <../Children/Children.html>`_).
* Custom password should be used if you want to use master password just for securing `exported settings <../Usage/ExportImportSettings.html>`_.
* If you are using a custom password click on line "Settings password" to set password as described `above <../Configuration/Preferences2020.html#master-password>`_.

.. image:: ../images/Pref2020_Protection.png
  :alt: Protection

Application protection
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* If app is protected you must enter password or use phone's biometric authentication to open AAPS.
* App will shut down immediately if wrong password is entered - but still run in the background if it was previously opened successfully.

Bolus protection
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Bolus protection might be useful if AAPS is used by a small child and you `bolus via SMS <../Children/SMS-Commands.html>`_.
* In the example below you see the prompt for biometric protection. If biometric authentication does not work, click in the space above the white prompt and enter master password.

.. image:: ../images/Pref2020_PW.png
  :alt: Prompt biometric protection

Skin
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
You can choose from three types of skins:

* Original skin - AAPS as you know it
* Buttons always on bottom of screen - especially for stand alone Android watches
* Large display - bigger graph

.. image:: ../images/Pref2020_Skin.png
  :alt: Select skin

Overview
===========================================================

* Overview section in preferences is the same as plugin preferences which are accessible through the three-dot-menu.

.. image:: ../images/Pref2020_Overview.png
  :alt: Preferences > Overview

Keep screen on
-----------------------------------------------------------
* Useful while giving a presentation. 
* It will consume a lot of energy, so it is wise to have your phone plugged into a charger.

Buttons
-----------------------------------------------------------
* Define which buttons are visible on the bottom of your home screen.
* With the increment figure you can define amount for the three buttons in carb and insulin dialogue for easy entry.

.. image:: ../images/Pref2020_OV_Buttons.png
  :alt: Preferences > Buttons

Quick Wizard
-----------------------------------------------------------
* If you have a frequent snack or meal, you can use the quick wizard button to easily enter amount or carbs and set calculation basics.
* In setup you define during which time period the button will be visible on your home screen - just one button per period.
* If you click the quick wizard button AAPS will calculate and propose a bolus for those carbs based on your current ratios (considering blood glucose value or insulin on board if set up). 
* The proposal has to be confirmed before insulin is delivered.

.. image:: ../images/Pref2020_OV_QuickWizard.png
  :alt: Preferences > Quick Wizard Button
  
Default temp targets
-----------------------------------------------------------
* `Temp targets (TT) <../Usage/temptarget.html#temp-targets>`_ allow you to define change your blood glucose target for a certain time period.
* With setting of default TT you can easily change your target for activity, eating soon etc.
* Press long on your target in the top right corner on the home screen or use the shortcuts in the orange “Carbs” button at the bottom.

.. image:: ../images/Pref2020_OV_DefaultTT.png
  :alt: Preferences > Default temp targets
  
Fill/Prime standard insulin amounts
-----------------------------------------------------------
* If you want to fill tube or prime canula through AAPS you can do this through `actions tab <../Usage/CPbefore26.html#pump>`_.
* Pre-set values can be defined in this dialogue.

Range for visualization
-----------------------------------------------------------
* Define which part of the graph on the home screen shall be you target range and be filled with green background.

.. image:: ../images/Pref2020_OV_Range2.png
  :alt: Preferences > Range for visualization

Shorten tab titles
-----------------------------------------------------------
* See more tab titles on screen. 
* For example the 'Open APS' tab becomes 'OAPS', 'Objectives' becomes 'Obj' etc.

.. image:: ../images/Pref2020_OV_Tabs.png
  :alt: Preferences > Tabs

Show notes field in treatments dialogs
-----------------------------------------------------------
* Gives you the option to add short text notes to your treatments (bolus wizard, carbs, insulin...) 

.. image:: ../images/Pref2020_OV_Notes.png
  :alt: Preferences > Notes in treatment dialogs
  
Status lights
-----------------------------------------------------------
* Status lights give a visual warning for 
      
   * Cannula age
   * Insulin age (days reservoir is used)
   * Reservoir level (units)
   * Sensor age
   * Battery age
   * Battery level (%)

* If threshold warning is exceeded, values will be shown in yellow.
* If threshold critical is exceeded, values will be shown in red.
* In versions prior to AAPS 2.7 settings for status lights had to be made in Nightscout settings.

.. image:: ../images/Pref2020_OV_StatusLights2.png
  :alt: Preferences > Status Lights

Advanced Settings
-----------------------------------------------------------
Deliver this part of bolus wizard result
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* General setting to deliver only part of bolus wizard result. 
* Only the set percentage (must be between 10 and 100) of the calculated bolus is delivered when using bolus wizard. 
* The percentage is shown in bolus wizard.

Superbolus
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Option to enable superbolus in bolus wizard.
* `Superbolus <https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/>`_ is a concept to "borrow" some insulin from basal rate in the next to hours to prevent spikes.

Treatment safety
===========================================================
Patient age
-----------------------------------------------------------
* Safety limits are set based on the age you select in this setting. 
* If you start hitting these hard limits (like max bolus) it's time move one step up. 
* It's a bad idea to select higher then real age because it can lead to overdosing by entering the wrong value in insulin dialog (by skipping the decimal dot, for example). 
* If you want to know the actual numbers for these hard-coded safety limits, scroll to the algorithm feature you are using on `this page <../Usage/Open-APS-features.html>`_.

Max allowed bolus [U]
-----------------------------------------------------------
* Defines maximum amount of bolus insulin that AAPS is allowed to deliver at once. 
* This setting exists as a safety limit to prevent the delivery of a massive bolus due to accidental input or user error. 
* It is recommended to set this to a sensible amount that corresponds roughly to the maximum amount of bolus insulin that you are ever likely to need for a meal or correction dose. 
* This restriction is also applied to the results of the bolus calculator.

Max allowed carbs [g]
-----------------------------------------------------------
* Defines the maximum amount of carbs that AAPS bolus calculator is allowed to dose for.
* This setting exists as a safety limit to prevent the delivery of a massive bolus due to accidental input or user error. 
* It is recommended to set this to a sensible amount that corresponds roughly to the maximum amount of carbs that you are ever likely to need for a meal.

Loop
===========================================================
APS mode
-----------------------------------------------------------
* Toggle between open and closed looping
* **Open looping** means TBR suggestions are made based on your data and appear as a notification, but you must manually choose to accept them and manually enter them into your pump.  
* **Closed looping** means TBR suggestions are automatically sent to your pump without confirmation or input from you.  
* The home screen will display in the top left corner whether you are in open or closed loop mode. 
* Long press this home screen button will also allow you to toggle between the two.

Minimal request change [%]
-----------------------------------------------------------
* When using open loop you will receive notifications every time AAPS recommends to adjust basal rate. 
* To reduce number of notifications you can either use a wider BG target range or increase percentage of the minimal request rate.
* This defines the relative change required to trigger a notification.
