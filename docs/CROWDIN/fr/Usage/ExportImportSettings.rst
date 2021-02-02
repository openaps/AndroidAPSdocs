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
* `Objectives <../Usage/Objectives.html>`_ status incl. les résultats de l'objectif 3 `Prouver ses connaissances <../Usage/Objectives.html#objectif-3-prouver-ses-connaissances>`_
* `Preferences <../Configuration/Preferences.html>`_ incl. les paramètres `NSClient <../Configuration/Preferences.html#nsclient>`_

Format de sauvegarde chiffré
==================================================
La sauvegarde des paramètres est chiffrée par un mot de passe principal qui peut être défini dans `Préférences <../Configuration/Preferences.html#mot-de-passe-principal>`_ .


Exporter les paramètres
==================================================
* Menu Hamburger (coin supérieur gauche de l'écran)
* Maintenance
* Exporter les paramètres

.. image:: ../images/AAPS_ExportSettings1.png
  :alt: AndroidAPS exporter les paramètres 1

* La date et l'heure d'exportation seront automatiquement ajoutées au nom du fichier et affichées avec le chemin.
* Cliquez sur 'OK'.
* Entrez le `mot de passe principal <../Configuration/Preferences.html#mot-de-passe-principal>`_ et cliquez 'OK'.
* L'exportation réussie sera affichée en bas de l'écran.

.. image:: ../images/AAPS_ExportSettings2.png
  :alt: AndroidAPS exporter les paramètres 2
  
Importer les paramètres
==================================================
**Ne pas importer les paramètres pendant une session Pod active** - voir la page `Omnipod pour plus de détails <../Configuration/OmnipodEros.html#importer-les-parametres-aaps-de-versions-precedentes>`_.

* Menu Hamburger (coin supérieur gauche de l'écran)
* Maintenance
* Importez les paramètres

.. image:: ../images/AAPS_ImportSettings1.png
  :alt: AndroidAPS importer les paramètres 1

* Tous les fichiers présents dans le dossier AAPS/préférences/ de votre téléphone seront affichés dans la liste.
* Sélectionnez un fichier.
* Confirmez l'importation en cliquant sur 'OK'.
* Entrez le `mot de passe principal <../Configuration/Preferences.html#mot-de-passe-principal>`_ et cliquez 'OK'.

.. image:: ../images/AAPS_ImportSettings2.png
  :alt: AndroidAPS importer les paramètres 2

* Les détails du fichier de préférences seront affichés.
* C'est la dernière possibilité pour annuler l'importation.
* Cliquez sur 'Importer'.
* Confirmez le message en cliquant sur 'OK'.
* AAPS sera redémarré afin d'activer les préférences importées.

Remarque pour les utilisateurs de Dana RS
------------------------------------------------------------
* Comme les paramètres de connexion de la pompe sont également importés dans AAPS sur votre nouveau téléphone, il va déjà "connaître" la pompe et donc ne démarrera pas une analyse bluetooth. 
* Veuillez associer manuellement le nouveau téléphone et la pompe.

Importer les paramètres des versions précédentes (avant AAPS 2.7)
------------------------------------------------------------
* L'ancien fichier de paramètres (appelé 'AndroidAPSPreferences' - sans extension de fichier) doit être dans le dossier racine de votre smartphone (/storage/emulated/0).
* Ne mettez pas l'ancien fichier dans le même dossier que celui des nouveaux paramètres exportés (AAPS/préférences).
* Vous trouverez l'ancien fichier en bas de la liste dans la boîte de dialogue d'importation.

Transférer les paramètres
==================================================
* Best way to transfer settings file to a new phone is via USB cable or cloud service (i.e. Google Drive).
* Des aides peuvent être trouvées sur le web, par ex. `Aide Android <https://support.google.com/android/answer/9064445?hl=fr>`_.
* Si vous rencontrez des problèmes avec le fichier transféré, essayez de transférer le fichier par d'une autre façon.
