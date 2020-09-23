Vérifications nécessaires après la mise à jour vers AndroidAPS 2.7
***********************************************************

* Le code du programme a été changé de façon significative lors du passage à AAPS 2.7. 
* Par conséquent, il est important de faire des changements ou de vérifier les paramètres après la mise à jour.
* Veuillez consulter les `notes de version <../Installing-AndroidAPS/Releasenotes.html#version-270>`_ pour plus de détails sur les nouvelles fonctions et les améliorations.

Vérifier la source de glycémie
-----------------------------------------------------------
* Vérifiez si la source de glycémie est correcte après la mise à jour.
* En particulier quand vous utilisez `xDrip+ <../Configuration/xdrip.html>`_ il peut arriver que la source soit remplacée par l'application Dexcom patchée.
* Ouvrez le `Générateur de configuration <../Configuration/Config-Builder.html#source-gly>`_ (menu hamburger en haut à gauche de l'écran d'accueil)
* Faites défiler vers le bas jusqu'à "Source des glycémies".
* Sélectionnez la bonne source de glycémie si des changements sont nécessaires.

.. image:: ../images/ConfBuild_BG.png
  :alt: source Gly

Terminer les objectifs
-----------------------------------------------------------
* AAPS 2.7 contient un nouvel objectif 11 pour `l'automatisation <../Usage/Automation.html>`_.
* Vous devez avoir fini les autres objectfs (`objectifs 3 et 4 <../Usage/Objectives.html#objectif-3-prouver-ses-connaissances>`_) pour pouvoir faire l'`objectif 11 <../Usage/Objectives.html#objectif-11-automatisation>`_.

Définir le mot de passe principal
-----------------------------------------------------------
* Necessary to be able to `export settings <../Usage/ExportImportSettings.html>`_ as they are encrypted as of version 2.7.
* Open Preferences (three-dot-menu on top right of home screen)
* Click triangle below "General"
* Click "Master-Password"
* Enter password, confirm password and click ok.

.. image:: ../images/MasterPW.png
  :alt: Set master password
  
Exporter les paramètres
-----------------------------------------------------------
* AAPS 2.7 uses a new encrypted backup format. 
* You must `export your settings <../Usage/ExportImportSettings.html>`_ after updating to version 2.7.
* Settings files from previous versions **cannot** be used in AAPS 2.7 and onwards anymore.
* Make sure to store your exported settings not only on your phone but also in at least one safe place (your pc, cloud storage...).

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
