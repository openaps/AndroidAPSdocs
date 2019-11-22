
Export & import settings
******
When should I export settings?
=====
Be prepared for the unforeseen. You might change important settings by accident and have problems to undo the changes. Your phone might break or get stolen. To easily return to status you've been at, settings should be exported on a regular basis.

Best practice is to export after change of settings or completing an objective. 

Exported settings should be copied to a cloud storage or your computer. So you are prepared for loss or damage of your AAPS phone and do not have to start from zero.

On a Windows 10 computer it looks like this:
  
  .. image:: ../images/SmartphoneRootLevelWin10.png
    :alt: AndroidAPS Preferences phone connected to computer


How to export settings
=====
* **Export settings** on your old phone

  * Menu Hamburger (coin supérieur gauche de l'écran)
  * Maintenance
  * Exporter les paramètres
  * File location will be shown
    
.. image:: ../images/AAPS_ExportSettings.png
  :alt: AndroidAPS export settings
       
* **Transfer** settings from old to new phone using the file location shown during export

  The exported file is called "AndroidAPSPreferences" and should be in your root folder in the main storage of the phone (just like C: on your computer).
  
* **Install AndroidAPS** on the new phone.
* **Import settings** on your new phone

  * Menu Hamburger (coin supérieur gauche de l'écran)
  * Maintenance
  * Importez les paramètres

* **Note for Dana RS users:**

  * Comme les paramètres de connexion de la pompe sont également importés dans AAPS sur votre nouveau téléphone, il va déjà "connaître" la pompe et donc ne démarrera pas une analyse bluetooth. Please pair new phone and pump manually.
