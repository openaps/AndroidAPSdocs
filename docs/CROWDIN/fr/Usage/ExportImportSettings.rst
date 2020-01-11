
Export/Import des paramètres
**************************************************
Quand dois-je exporter les paramètres ?
==================================================
Préparez-vous aux imprévus. Vous pouvez modifier des paramètres importants par accident et avoir des problèmes pour annuler les modifications. Votre téléphone pourrait se casser ou être volé. Pour revenir facilement à l'état où vous étiez, les paramètres doivent être exportés régulièrement.

La meilleure pratique consiste à exporter les paramètres après un changement ou la réalisation d'un objectif. 

Paramètres exportés doivent être copiés sur un stockage cloud ou sur votre ordinateur. So you are prepared for loss or damage of your AAPS phone and do not have to start from zero.

Sur un ordinateur Windows 10, cela ressemble à ceci :
  
  .. image:: ../images/SmartphoneRootLevelWin10.png
    :alt: AndroidAPS Preferences phone connected to computer


How to export settings
==================================================
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
