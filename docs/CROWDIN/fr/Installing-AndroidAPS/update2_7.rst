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
* If for example you did not finish the exam in `objective 3 <../Usage/Objectives.html#objective-3-proof-your-knowledge>`_ yet, you will have to complete the exam before you can start `objective 11 <../Usage/Automation.html>`_. 
* This will not effect other objectives you have already finished. You will keep all finished objectives!

Définir le mot de passe principal
-----------------------------------------------------------
* Nécessaire pour pouvoir `exporter les paramètres <../Usage/ExportImportSettings.html>`_ car ils sont chiffrés depuis la version 2.7.
* Ouvrez les préférences (menu trois points en haut à droite de l'écran d'accueil)
* Cliquez sur le triangle sous " Général "
* Cliquez sur " Mot de passe principal "
* Entrez le mot de passe, confirmez le et cliquez sur OK.

.. image:: ../images/MasterPW.png
  :alt: Définir le mot de passe principal
  
Exporter les paramètres
-----------------------------------------------------------
* AAPS 2.7 utilise un nouveau format de sauvegarde chiffré. 
* Vous devez `exporter vos paramètres <../Usage/ExportImportSettings.html>`_ après la mise à jour vers la version 2.7.
* Les fichiers de paramètres des versions précédentes **ne peuvent plus** être utilisés dans AAPS 2.7 et les versions suivantes.
* Assurez-vous de stocker vos paramètres exportés non seulement sur votre téléphone, mais également dans au moins un autre endroit sûr (votre pc, stockage cloud...).
* If you build AAPS 2.7 apk with the same keystore than in previous versions you can install new version without deleting the previous version. 
* All settings as well as finished objectives will remain as they were in the previous version.
* In case you have lost your keystore build do the following to keep your settings & objectives:

   * Build version 2.6.4(not 2.7!!) with new keystore as described in the `troubleshooting section <../Installing-AndroidAPS/troubleshooting_androidstudio.html#lost-keystore>`_.
   * After you finished all these steps build version 2.7 with this new keystore and your settings and objectives will be as you had them in previous version.

Autosens (un indice - aucune action nécessaire)
-----------------------------------------------------------
* Autosens est changé pour un modèle qui reproduit la conception de référence avec une commutation dynamique.
* Autosens bascule maintenant entre une fenêtre de 24 heures et une de 8 heures pour calculer la sensibilité. Il choisira celle qui est le plus sensible. 
* Les utilisateurs qui utilisaient oref1 remarqueront probablement que le système peut être moins dynamique en raison de la variation de sensibilité entre 24 heures et 8 heures.

Définir le mot de passe de la pompe Dana RS (si vous utilisez une Dana RS)
-----------------------------------------------------------
* Le mot de passe Pump pour `Dana RS <../Configuration/DanaRS-Insulin-Pump.html>`_ n'était pas été vérifié dans les versions précédentes.
* Ouvrez les préférences (menu trois points en haut à droite de l'écran d'accueil)
* Faites défiler vers le bas et cliquez sur triangle à côté de " Dana RS ".
* Cliquez sur " Mot de passe pompe (v1 uniquement) "
* Entrez le mot de passe de la pompe (mot de passe par défaut 1234) et cliquez sur OK.

.. image:: ../images/DanaRSPW.png
  :alt: Définir le mot de passe Dana RS
  
Pour changer le mot de passe sur Dana RS :

* Appuyez sur le bouton OK de la pompe
* Dans le menu principal, sélectionnez "OPTION" (déplacer à droite en appuyant sur le bouton flèche plusieurs fois)
* Dans le menu Options, sélectionnez "OPTION UTILISATEUR"
* Utilisez le bouton flèche pour faire défiler vers le bas jusqu'à " 11. Mot de passe "
* Entrez l'ancien mot de passe (mot de passe par défaut 1234)
* Définissez un nouveau mot de passe (Modifiez les numéros avec les boutons + & - / Déplacez vers la droite avec le bouton flèche).
* Confirmez avec le bouton OK.
* Sauvegardez en appuyant à nouveau sur le bouton OK.
* Déplacer vers le bas jusqu'à " 14. QUITTEZ " et appuyez sur le bouton OK.
