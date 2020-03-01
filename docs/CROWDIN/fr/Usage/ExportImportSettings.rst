
Export/Import des paramètres
**************************************************
Quand dois-je exporter les paramètres ?
==================================================
Préparez-vous aux imprévus. Vous pouvez modifier des paramètres importants par accident et avoir des problèmes pour annuler les modifications. Votre téléphone pourrait se casser ou être volé. Pour revenir facilement à l'état où vous étiez, les paramètres doivent être exportés régulièrement.

La meilleure pratique consiste à exporter les paramètres après un changement ou la réalisation d'un objectif. 

Les paramètres exportés doivent être copiés sur un stockage cloud ou sur votre ordinateur. Ainsi vous serez prêt en cas de perte ou de dommages de votre téléphone AAPS et vous ne serez pas obligé de tout recommencer à partir de zéro.

Sur un ordinateur Windows 10, cela ressemble à ceci :
  
  .. image:: ../images/SmartphoneRootLevelWin10.png
    :alt: AndroidAPS Préférences téléphone connecté à l'ordinateur

Informations exportées
==================================================
Entre autres, les informations suivantes font partie des paramètres exportés :

* `Evènement d'automatisation <../Usage/Automation.html>`_
* Paramètres du `Générateur de configuration <../Configuration/Config-Builder.html>`_
* Paramètres des `Profils locaux <../Configuration/Config-Builder.html#profil-local-recommande>`_
* Résultats des `Objectifs <../Usage/Objectives.html>`_ y compris les résultats de l'objectif 3 `Prouver ses connaissances <../Usage/Objectives.html#objective-3-proof-your-knowledge>`_
* `Préférences <../Configuration/Preferences.html>`_ y compris les paramètres `NSClient <../Configuration/Preferences.html#ns-client>`_




Comment exporter les paramètres
==================================================
* **Exporter les paramètres** sur votre vieux téléphone

  * Menu Hamburger (coin supérieur gauche de l'écran)
  * Maintenance
  * Exporter les paramètres
  * L'emplacement du fichier sera affiché
    
.. image:: ../images/AAPS_ExportSettings.png
  :alt: AndroidAPS exporter les paramètres
       
* **Transferer** les paramètres de l'ancien au nouveau téléphone en utilisant l'emplacement du fichier indiqué lors de l'exportation

  Le fichier exporté est appelé "AndroidAPSPreferences" et devrait se trouver dans votre dossier racine du stockage principal du téléphone (comme C: sur votre ordinateur).
  
* **Installez AndroidAPS** sur le nouveau téléphone.
* **Importer les paramètres** sur votre nouveau téléphone

  * Menu Hamburger (coin supérieur gauche de l'écran)
  * Maintenance
  * Importez les paramètres

* **Remarque pour les utilisateurs de Dana RS :**

  * Comme les paramètres de connexion de la pompe sont également importés dans AAPS sur votre nouveau téléphone, il va déjà "connaître" la pompe et donc ne démarrera pas une analyse bluetooth. Veuillez associer manuellement le nouveau téléphone et la pompe.
