Vérifications nécessaires après la mise à jour vers AndroidAPS 2.6
***********************************************************

* Le code du programme a été changé de façon significative lors du passage à AAPS 2.7. 
* Par conséquent, il est important de faire des changements ou de vérifier les paramètres après la mise à jour.
* Veuillez consulter les `notes de version <../Installing-AndroidAPS/Releasenotes.html#version-2-7-0>`_ pour plus de détails sur les nouvelles fonctions et les améliorations.

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
* You have to finish exam (`objective 3 and 4 <../Usage/Objectives.html#objective-3-prove-your-knowledge>`_) in order to complete `objective 11 <../Usage/Objectives.html#objective-11-automation>`_.
* If for example you did not finish the exam in `objective 3 <../Usage/Objectives.html#objective-3-prove-your-knowledge>`_ yet, you will have to complete the exam before you can start `objective 11 <../Usage/Objectives.html#objective-11-automation>`_. 
* Cela n'affectera pas les autres objectifs que vous avez déjà terminés. Vous conserverez tous les objectifs terminés !

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
* Les fichiers de paramètres des versions précédentes ne peuvent être que importés dans AAPS 2.7. L'exportation sera dans le nouveau format.
* Assurez-vous de stocker vos paramètres exportés non seulement sur votre téléphone, mais également dans au moins un autre endroit sûr (votre pc, stockage cloud...).
* Si vous construisez l'apk AAPS 2.7 avec le même fichier de clés que dans les versions précédentes, vous pouvez installer la nouvelle version sans supprimer la version précédente. 
* Tous les paramètres ainsi que les objectifs terminés resteront tels qu'ils étaient dans la version précédente.
* Si vous avez perdu votre fichier de clés, construisez la version 2.7 avec un nouveau fichier de clés et importez les paramètres de la version précédente, comme c'est décrit dans la section `dépannage <../Installing-AndroidAPS/troubleshooting_androidstudio.html#fichier-de-cles-perdu>`_.

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
* Entrez le mot de passe de la pompe (Le `mot de passe par défaut <../Configuration/DanaRS-Insulin-Pump.html#mot-de-passe-par-defaut>`_ est différent selon la version du firmware) et cliquez sur OK.

.. image:: ../images/DanaRSPW.png
  :alt: Définir le mot de passe Dana RS
  
Pour changer le mot de passe sur Dana RS, suivez les instructions sur la `page DanaRS <../Configuration/DanaRS-Insulin-Pump.html#changer-de-mot-de-passe-sur-la-pompe>`_.
