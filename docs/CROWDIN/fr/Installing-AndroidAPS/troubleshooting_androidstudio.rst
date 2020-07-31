Dépannage d'Android Studio
**************************************************
Certificats perdus
==================================================
Si vous utilisez le même fichier de clés lors de la mise à jour d'AndroidAPS, vous n'avez pas besoin de désinstaller la version précédente sur votre smartphone. C'est pourquoi il est recommandé de stocker le fichier de clés dans un dossier de sauvegarde sûr.

Si vous ne trouvez plus votre ancien fichier de clés, procédez comme suit :

1. `Exporter les paramètres <../Usage/ExportImportSettings.html#comment-exporter-les-parametres>`_ sur votre téléphone.
2. Copiez les paramètres de votre téléphone vers un emplacement externe (par ex. dans votre ordinateur, un service de stockage cloud...).
3. Assurez-vous que le fichier de paramètres "AndroidAPS Preferences" est stocké en toute sécurité.
4. Générez un apk signé de la nouvelle version comme c'est décrit dans la page `Mise à jour vers une nouvelle version <../Installing-AndroidAPS/Update-to-new-version.html>`_.
5. Désinstaller la précédente version de AAPS sur votre téléphone.
6. Installez la nouvelle version de AAPS sur votre téléphone.
7. `Importez les paramètres <../Usage/ExportImportSettings.html#comment-exporter-les-parametres>`_ - si vous ne trouvez pas le fichier sur votre téléphone, copiez le depuis votre stockage externe.
8. Pousuivez la boucle.

Avertissement du compilateur Kotlin
==================================================
Si la compilation a abouti mais que vous obtenez les avertissements de la part du compilateur Kotlin, ignorez ces avertissements. 

L'application a été correctement compilée et peut être transférée au téléphone.

.. image:: ../images/GIT_WarningIgnore.PNG
  :alt: ignorer les avertissement du compilateur Kotline

La clé a été créée avec des erreurs
==================================================
Lors de la création d'un fichier de clés pour pouvoir générer un APK signé, sous Windows, le message d'erreur suivant peut apparaître

.. image:: ../images/AndroidStudio35SigningKeys.png
  :alt: Clé créée avec des erreurs

Cela semble être un bug avec Android Studio 3.5.1 et son environnement Java livré sous Windows. La clé est créée correctement mais une recommandation est affichée à tort comme une erreur. Cela peut actuellement être ignoré.

Impossible de télécharger… / Travail hors-ligne
==================================================
Si vous recevez un message d'erreur comme ceci

.. image:: ../images/GIT_Offline1.jpg
  :alt: Avertissement impossible de télécharger

assuez vous que ‘Offline work’ est désactivé.

File -> Settings

.. image:: ../images/GIT_Offline2.jpg
  :alt: Settings offline work

Erreur : buildOutput.apkData must not be null
==================================================
Parfois, vous pouvez obtenir un message d'erreur lors de la compilation de l'apk disant

  `Errors while building APK.`
   
  `Cause: buildOutput.apkData must not be null`

Il s'agit d'un bug connu dans Android Studio 3.5 et qui ne sera probablement pas corrigé avant Android Studio 3.6. Trois options :

1. Supprimez manuellement les trois dossiers de compilation ("build" normal, sous-dossier build dans "app" et sous-dossier build dans "wear") et générez à nouveau un fichier apk signé.
2. Définissez le dossier de destination dans le dossier du projet à la pace du dossier app comme c'est décrit dans `cette vidéo <https://www.youtube.com/watch?v=BWUFWzG-kag>`_.
3. Modifiez le dossier de destination apk (dans un emplacement différent).

Impossible de démarrer le processus daemon
==================================================
Si vous voyez un message d'erreur ci-dessous, vous utilisez probablement un système Windows 10 32 bits. Ce n'est pas pris en charge par Android Studio 3.5.1 et supérieur. Si vous utilisez Windows 10, vous devez utiliser un système d'exploitation 64 bits.

Il y a beaucoup de liens sur Internet pour déterminer si vous avez un système d'exploitation 32 bits ou 64 bits, par ex. `celui-ci <https://www.howtogeek.com/howto/21726/how-do-i-know-if-im-running-32-bit-or-64-bit-windows-answers/>`_.

.. image:: ../images/AndroidStudioWin10_32bitError.png
  :alt: Screenshot Unable to start daemon process
  

Aucune donnée MGC
==================================================
* Si vous utilisez xDrip+ : identifiez le récepteur comme c'est indiqué dans la page `Paramètres xDrip+ <../Configuration/xdrip.html#identifier-le-recepteur>`_.
* Si vous utilisez `l'application Dexcom G6 patchée <../Hardware/DexcomG6.html#si-vous-utilisez-le-G6-avec-l-application-dexcom-patchee>`_ : Assurez vous que vous utilisez bien la version provenant du `dossier 2.4 <https://github.com/dexcomapp/dexcomapp/tree/master/2.4>`_.

Modifications non validées
==================================================
Si vous recevez un message d'erreur comme ceci

.. image:: ../images/GIT_TerminalCheckOut0.PNG
  :alt: Failure uncommitted changes

Option 1 - Vérifier l'installation de git
--------------------------------------------------
* git peut ne pas être installé correctement (doit être globalement disponible)
* quand vous êtes sur Windows et que git vient juste d'être installés, vous devez redémarrer votre ordinateur ou au moins vous déconnecter et vous reconnecter une fois, pour rendre git disponible après l'installation
* `Vérifiez l'installation de git <../Installing-AndroidAPS/git-install.html#verifier-les-parametres-de-git-dans-android-studio>`_
* S'il n'y a aucune version de git indiquée mais que git est installé sur l'ordinateur, assurez vous que Android Studio sais où `git est installé <../Installing-AndroidAPS/git-install.html#definir-le-chemin-d-acces-git-dans-android-studio>`_ sur votre ordinateur.

Option 2 - Recharger le code source
--------------------------------------------------
* Dans Android Studio selectionnez VCS -> GIT -> Reset HEAD

.. image:: ../images/GIT_TerminalCheckOut3.PNG
  :alt: Reset HEAD
   
Option 3 - Vérifier les mises à jour
--------------------------------------------------
* Copiez ‘git checkout --’ dans le presse-papiers (sans les guillemets)
* Basculez dans le Terminal dans Android Studio (en bas à gauche dans la fenêtre Android Studio)

  .. image:: ../images/GIT_TerminalCheckOut1.PNG
  :alt: Android Studio Terminal
   
* Collez le texte copié et appuyer sur entrer

  .. image:: ../images/GIT_TerminalCheckOut2.jpg
    :alt: GIT checkout success

Application non installée.
==================================================
.. image:: ../images/Update_AppNotInstalled.png
  :alt: phone app note installed

* Assurez-vous d'avoir transféré le fichier “app-full-release.apk” sur votre téléphone.
* Si vous avez le message "Application non installée" affiché sur votre téléphone, suivez les étapes suivantes :
  
1. `Exporter les paramètres <../Usage/ExportImportSettings.html>`_ (dans la version AAPS déjà installée sur votre téléphone)
2. Désinstaller AAPS sur votre téléphone.
3. Activez le mode Avion & éteignez le bluetooth.
4. Installer la nouvelle version (« app-full-release.apk »)
5. `Importer les paramètres <../Usage/ExportImportSettings.html>`_
6. Activer le bluetooth et désactiver le mode avion

Application installée mais ancienne version
==================================================
Si vous avez compilé l'application, que vous l'avez transferrée dans votre téléphone et installée avec succès mais que le numéro de version est resté le même, vous avez peut-être opis de `meetre à jour votre copie locale <../Update-to-new-version.html#mettez-a-jour-votre-copie-locale>`.

Rien ci-dessus n'a marché
==================================================
Si aucun des conseils ci-dessus ne vous a aidé, vous pourriez envisager de repartir de zéro pour reconstruire l'application :

1. `Exporter les paramètres <../Usage/ExportImportSettings.html>`_ (dans la version AAPS déjà installée sur votre téléphone)
2. Ayez vos mots de passe pour la clé et le fichier de clés sous la main
    Si vous avez oublié ces mots de passe vous pouvez essayer de les retrouver dans les fichiers du projet comme c'est décrit `ici <https://youtu.be/nS3wxnLgZOo>`_. Ou vous pouvez recréer un nouveau fichier de clés. 
3. Construisez l'application à partir de zéro comme c'est décrit `ici <../Installing-AndroidAPS/Building-APK.html#telecharger-le-code-et-les-composants-supplementaires>`_.
4.	Quand vous avez construit l'APK avec succès, supprimez l'application existante sur votre téléphone, transférez le nouvel apk sur votre téléphone et installez le.
5. `Importer les paramètres <../Usage/ExportImportSettings.html>`_

Pire scénario
==================================================
Dans le cas où même construire l'application à partir de rien ne résout pas votre problème, vous pouvez essayer de désinstaller complètement Android Studio. Certains utilisateurs ont signalé que cela a résolu leur problème.

**Assurez-vous de désinstaller tous les fichiers associés à Android Studio.** Si vous ne supprimez pas complètement tous les fichiers cachés, la désinstallation peut provoquer de nouveaux problèmes au lieu de résoudre ceux existants. Les manuels pour une désinstallation complète peuvent être trouvés en ligne, par ex. `https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10 <https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10>`_.

Installez Android Studio à partir de zéro comme indiqué `ici <../Installing-AndroidAPS/Building-APK.html#installez-android-studio>`_ et **ne mettez pas à jour gradle**.
