Export/Import des paramètres
**************************************************

Quand dois-je exporter les paramètres ?
==================================================
Préparez-vous aux imprévus. Vous pouvez modifier des paramètres importants par accident et avoir des problèmes pour annuler les modifications. Votre téléphone pourrait se casser ou être volé. Pour revenir facilement à l'état où vous étiez, les paramètres doivent être exportés régulièrement.

La meilleure pratique consiste à exporter les paramètres après un changement ou la réalisation d'un objectif. 

Les paramètres exportés doivent être copiés sur un stockage cloud ou sur votre ordinateur. Ainsi vous serez prêt en cas de perte ou de dommages de votre téléphone AAPS et vous ne serez pas obligé de tout recommencer à partir de zéro.

Sur un ordinateur Windows 10, cela ressemble à ceci :
  
.. image:: ../images/AAPS_ExImportSettingsWin.png
  :alt: AndroidAPS Préférences téléphone connecté à l'ordinateur

Informations exportées
==================================================
Entre autres, les informations suivantes font partie des paramètres exportés :

* `Evènement d'automatisation <../Usage/Automation.html>`_
* Paramètres du `Générateur de configuration <../Configuration/Config-Builder.html>`_
* Paramètres des `Profils locaux <../Configuration/Config-Builder.html#profil-local-recommande>`_
* Résultats des `Objectifs <../Usage/Objectives.html>`_ y compris les résultats de l'objectif 3 `Prouver ses connaissances <../Usage/Objectives.html#objective-3-proof-your-knowledge>`_
* `Préférences <../Configuration/Preferences.html>`_ y compris les paramètres `NSClient <../Configuration/Preferences.html#ns-client>`_

Encrypted backup format
==================================================
Settings backup is encrypted by a master password that can be set in `Preferences <../Configuration/Preferences.html#master-password>`_ .


Exporter les paramètres
==================================================
* Menu Hamburger (coin supérieur gauche de l'écran)
* Maintenance
* Exporter les paramètres

.. image:: ../images/AAPS_ExportSettings1.png
  :alt: AndroidAPS export settings 1

* Date and time of export will be added to the file name automatically and displayed together with the path.
* Click 'OK'.
* Enter `master password <../Configuration/Preferences.html#master-password>`_ and click 'OK'.
* Successful export will be prompted at bottom of the screen.

.. image:: ../images/AAPS_ExportSettings2.png
  :alt: AndroidAPS export settings 2
  
Importez les paramètres
==================================================
* Menu Hamburger (coin supérieur gauche de l'écran)
* Maintenance
* Importez les paramètres

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

* **Remarque pour les utilisateurs de Dana RS :**

  * Comme les paramètres de connexion de la pompe sont également importés dans AAPS sur votre nouveau téléphone, il va déjà "connaître" la pompe et donc ne démarrera pas une analyse bluetooth. Veuillez associer manuellement le nouveau téléphone et la pompe.
  
Transfer settings file
==================================================
* Best way to transfer settings file to a new phone is via USB cable or cloud service (i.e. Google Drive).
* Manuals can be found on the web, i.e. `Android help pages <https://support.google.com/android/answer/9064445?hl=en>`_.
* If you experience problems with the transferred file try another way to transfer file.
