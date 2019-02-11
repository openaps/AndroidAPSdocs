Welcome to the Android APS documentation
==============================================

**What is AndroidAPS?**

AndroidAPS is an app that can communicate with bluetooth-enabled insulin pumps, and runs a version of the OpenAPS "oref0" and "oref1" algorithms.

**Primary goals behind AndroidAPS:**

* modular app where it is possible and easy to add new modules without touching the rest of the code
* app that allows localization
* app where it is easy to select what will be included in final apk with an easy change and compilation
* app which supports open and closed APS mode
* app where you can see how APS works: input params, result and final decision
* ability to add more APS algorithms and let the user decide what to use
* app which is independent from a pump driver and contains a "Virtual pump" to allow users to safely play with APS
* app with tight Nightscout integration
* app where is easy to add/remove constraints for user safety
* all-in-one app for managing T1D with APS and Nightscout

**What you need to get started:**

* An Android Smartphone with Android 5.0 or later. See `this spreadsheet <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_ for reports on how well a phone works with AndroidAPS.
* An app to receive CGM data: `xDrip <http://stephenblackwasalreadytaken.github.io/xDrip/>`_/ `xDrip+ <https://jamorham.github.io/#xdrip-plus>`_, `Glimp <https://play.google.com/store/apps/details?id=it.ct.glicemia>`_ , `G5 patched app <https://github.com/dexcomapp/dexcomapp>`_, `PochTech app <https://play.google.com/store/apps/details?id=jp.co.unitec.concretemanagement&hl=gsw>`_ or `600SeriesAndroidUploader <http://pazaan.github.io/600SeriesAndroidUploader/>`_
* `AndroidAPS <https://github.com/MilosKozak/AndroidAPS>`_ itself
* `Nightscout cgm-remote-monitor <http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku>`_ 0.10.2 or later
* A supported pump: Dana-R or Dana-RS Insulin Pump or Accu-Chek Combo (unless you build your own driver for another insulin pump)
* A Continuous Glucose Monitor (CGM) data source: Dexcom G4/G5/G6, Freestyle Libre, Eversense, Medtronic Guardian, PocTech


.. note:: 
	**Disclaimer And Warning**

	* All information, thought, and code described here is intended for informational and educational purposes only. Nightscout currently makes no attempt at HIPAA privacy compliance. Use Nightscout and AndroidAPS at your own risk, and do not use the information or code to make medical decisions.

	* Use of code from github.com is without warranty or formal support of any kind. Please review this repository's LICENSE for details.

	* All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. Their use is for information purposes and does not imply any affiliation with or endorsement by them.

	Please note - this project has no association with and is not endorsed by: `SOOIL <http://www.sooil.com/eng/>`_, `Dexcom <http://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>`_.

Getting Started with AndroidAPS
----------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Safety First <./Getting-Started/Safety-first.md>
   Screenshots <./Getting-Started/Screenshots.md>
   Phones <./Getting-Started/Phones.md>
   Pump choices <./Getting-Started/Pump-Choices.md>
   Future possible pump drivers  <./Getting-Started/Future-possible-Pump-Drivers.md>
   Sample Setup: Samsung S7, DanaR, Dexcom G5 and Sony Smartwatch <./Getting-Started/Sample-Setup.md>
   FAQ for loopers <./Getting-Started/FAQ.md>
   Glossary <./Getting-Started/Glossary.md>
  
How to Install AndroidAPS
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Building the APK <./Installing-AndroidAPS/Building-APK.md>
   Update to a new version or branch <./Installing-AndroidAPS/Update-to-new-version.md>
   Release notes <./Installing-AndroidAPS/Releasenotes.md>
   Dev branch <./Installing-AndroidAPS/Dev-branch.md>
   Nightscout setup <./Installing-AndroidAPS/Nightscout.md>
   
Configuration 
---------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Config Builder <./Configuration/Config-Builder.md>
   BG Source <./Configuration/BG-Source.md>
   DanaR pump <./Configuration/DanaR-Insulin-Pump.md>
   DanaRS pump <./Configuration/DanaRS-Insulin-Pump.md>
   Accu Chek Combo pump <./Configuration/Accu-Chek-Combo-Pump.md>
   Watchfaces <./Configuration/Watchfaces.md>
   Preferences <./Configuration/Preferences.md>
   Sensitivity Detection and COB <./Configuration/Sensitivity-detection-and-COB.md>
   
Usage
------------
.. toctree::
   :maxdepth: 1
   :glob:
    
   Objectives <./Usage/Objectives.md>
   OpenAPS features <./Usage/Open-APS-features.md>
   Profile switch <./Usage/Profiles.md>
   Temp-Targets <./Usage/temptarget.md>
   SMS Commands <./Usage/SMS-Commands.md>
   Extended Carbs <./Usage/Extended-Carbs.md>
   Timezone traveling with pumps <./Usage/Timezone-traveling.md>
   Accessing logfiles <./Usage/Accessing-logfiles.md>
   Smoothing Blood Glucose Data <./Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md>
   AccuChek Combo Tips for Basic usage <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md>
   Troubleshooting NSClient <./Usage/Troubleshooting-NSClient.md>
   Android auto <./Usage/Android-auto.md>
   Huawei phones special configuration <./Usage/huawei.md>

Where to go for help 
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Useful resources to read before you start <./Where-To-Go-For-Help/Background-reading.md>
   Where to go for help <./Where-To-Go-For-Help/Connect-with-other-users.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Resources/Reference
            
   Resources <./Resources/index>
   For Clinicians <./Resources/clinician-guide-to-AndroidAPS>

How to help
------------
.. toctree::
   :maxdepth: 1
   :glob:

   How to help <./Getting-Started/How-can-I-help.md>
   How to translate the App <./translations.md>
   How to edit the wiki <./make-a-PR>
