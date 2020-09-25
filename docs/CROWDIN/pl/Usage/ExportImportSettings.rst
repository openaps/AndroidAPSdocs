Export & import settings
**************************************************

When should I export settings?
== == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == ==
Be prepared for the unforeseen. You might change important settings by accident and have problems to undo the changes. Your phone might break or get stolen. To easily return to status you've been at, settings should be exported on a regular basis.

Best practice is to export after change of settings or completing an objective. 

Exported settings should be copied to a cloud storage or your computer. So you are prepared for loss or damage of your AAPS phone and do not have to start from zero.

On a Windows 10 computer it looks like this:
  
.. image:: ../images/AAPS_ExImportSettingsWin.png
  :alt: AndroidAPS Preferences phone connected to computer

Exported information
== == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == ==
Among others the following information is part of the settings export:

* `Automation <../Usage/Automation.html>`_ events
* `Config builder <../Configuration/Config-Builder.html>`_ settings
* `Local profile <../Configuration/Config-Builder.html#local-profile-recommended>`_ settings
* `Objectives <../Usage/Objectives.html>`_ status incl. `exam results <../Usage/Objectives.html#objective-3-proof-your-knowledge>`_
* `Preferences <../Configuration/Preferences.html>`_ incl. `NS Client settings <../Configuration/Preferences.html#ns-client>`_

Encrypted backup format
== == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == ==
Settings backup is encrypted by a master password that can be set in `Preferences <../Configuration/Preferences.html#master-password>`_ .


Eksport ustawień
== == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == ==
* Menu "hamburger" (trzy poziome kreski w lewym górnym narożniku ekranu)
* Konserwacja
* Eksport ustawień

.. image:: ../images/AAPS_ExportSettings1.png
  :alt: AndroidAPS export settings 1

* Date and time of export will be added to the file name automatically and displayed together with the path.
* Click 'OK'.
* Enter `master password <../Configuration/Preferences.html#master-password>`_ and click 'OK'.
* Successful export will be prompted at bottom of the screen.

.. image:: ../images/AAPS_ExportSettings2.png
  :alt: AndroidAPS export settings 2
  
Zaimportuj ustawienia
== == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == ==
* Menu "hamburger" (trzy poziome kreski w lewym górnym narożniku ekranu)
* Konserwacja
* Zaimportuj ustawienia

.. image:: ../images/AAPS_ImportSettings1.png
  :alt: AndroidAPS import settings 1

* All files from folder AAPS/preferences/ on your phone will be shown in the list.
* Select file.
* Confirm import by clicking 'OK'.
* Enter `master password <../Configuration/Preferences.html#master-password>`_ and click 'OK'.

.. image:: ../images/AAPS_ImportSettings2.png
  :alt: AndroidAPS import settings 2

* Details on the preference file will be shown.
* Last option to cancel import.
* Click 'Import'.
* Confirm message by clicking 'OK'.
* AAPS will be restarted in order to activate imported preferences.

* **Uwaga dla użytkowników Dana RS:**

  * Ponieważ importowane są także ustawienia połączenia pompy, AAPS na twoim nowym telefonie będzie już "znał" pompę i dlatego nie rozpocznie skanowania bluetooth. Proszę ręcznie sparować nowy telefon i pompę.
  
Transfer settings file
== == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == ==
* Best way to transfer settings file to a new phone is via USB cable or cloud service (i.e. Google Drive).
* Manuals can be found on the web, i.e. `Android help pages <https://support.google.com/android/answer/9064445?hl=en>`_.
* If you experience problems with the transferred file try another way to transfer file.
