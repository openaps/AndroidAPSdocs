
Export & import settings
**************************************************
When should I export settings?
== == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == ==
Be prepared for the unforeseen. You might change important settings by accident and have problems to undo the changes. Your phone might break or get stolen. To easily return to status you've been at, settings should be exported on a regular basis.

Best practice is to export after change of settings or completing an objective. 

Exported settings should be copied to a cloud storage or your computer. So you are prepared for loss or damage of your AAPS phone and do not have to start from zero.

On a Windows 10 computer it looks like this:
  
  .. image:: ../images/SmartphoneRootLevelWin10.png
    :alt: AndroidAPS Preferences phone connected to computer

Exported information
== == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == ==
Among others the following information is part of the settings export:

* `Automation <../Usage/Automation.html>`_ events
* `Config builder <../Configuration/Config-Builder.html>`_ settings
* `Local profile <../Configuration/Config-Builder.html#local-profile-recommended>`_ settings
* `Objectives <../Usage/Objectives.html>`_ status incl. `exam results <../Usage/Objectives.html#objective-3-proof-your-knowledge>`_
* `Preferences <../Configuration/Preferences.html>`_ incl. `NS Client settings <../Configuration/Preferences.html#ns-client>`_




How to export settings
== == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == ==
* **Export settings** on your old phone

  * Menu "hamburger" (trzy poziome kreski w lewym górnym narożniku ekranu)
  * Konserwacja
  * Eksport ustawień
  * Zostanie wyświetlona lokalizacja pliku
    
.. image:: ../images/AAPS_ExportSettings.png
  :alt: AndroidAPS export settings
       
* **Transfer** settings from old to new phone using the file location shown during export

  The exported file is called "AndroidAPSPreferences" and should be in your root folder in the main storage of the phone (just like C: on your computer).
  
* **Install AndroidAPS** on the new phone.
* **Import settings** on your new phone

  * Menu "hamburger" (trzy poziome kreski w lewym górnym narożniku ekranu)
  * Konserwacja
  * Zaimportuj ustawienia

* **Uwaga dla użytkowników Dana RS:**

  * Ponieważ importowane są także ustawienia połączenia pompy, AAPS na twoim nowym telefonie będzie już "znał" pompę i dlatego nie rozpocznie skanowania bluetooth. Proszę ręcznie sparować nowy telefon i pompę.
