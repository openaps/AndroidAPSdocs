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
7. `Importez les les paramètres <../Usage/ExportImportSettings.html#comment-exporter-les-parametres>`_ - si vous ne trouvez pas le fichier sur votre téléphone, copiez le depuis votre stockage externe.
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
* In case you are using xDrip+: Identify receiver as described on `xDrip+ settings page <../Configuration/xdrip.html#identify-receiver>`_.
* In case you are using `patched Dexcom G6 app <../Hardware/DexcomG6.html#if-using-g6-with-patched-dexcom-app>`_: Make sure you are using the correct version from the `2.4 folder <https://github.com/dexcomapp/dexcomapp/tree/master/2.4>`_.

Uncommitted changes
==================================================
If you receive failure message like

.. image:: ../images/GIT_TerminalCheckOut0.PNG
  :alt: Failure uncommitted changes

Option 1 - Check git installation
--------------------------------------------------
* git might be not installed correctly (must be globally available)
* when on Windows and git was just installed, you should restart your computer or at least log out and re-login once, to make git globally available after the installation
* `Check git installation <../Installing-AndroidAPS/git-install.html#check-git-settings-in-android-studio>`_
* If no git version is shown in check but git is installed on your computer, make sure Android Studio knows where `git is located <../Installing-AndroidAPS/git-install.html#set-git-path-in-android-studio>`_ on your computer.

Option 2 - Reload source code
--------------------------------------------------
* In Android Studio select VCS -> GIT -> Reset HEAD

.. image:: ../images/GIT_TerminalCheckOut3.PNG
  :alt: Reset HEAD
   
Option 3 - Check for updates
--------------------------------------------------
* Copy ‘git checkout --’ to clipboard (without quote signs)
* Switch to Terminal in Android Studio (lower left side of Android Studio window)

  .. image:: ../images/GIT_TerminalCheckOut1.PNG
  :alt: Android Studio Terminal
   
* Paste copied text and press return

  .. image:: ../images/GIT_TerminalCheckOut2.jpg
    :alt: GIT checkout success

App not installed
==================================================
.. image:: ../images/Update_AppNotInstalled.png
  :alt: phone app note installed

* Assurez-vous d'avoir transféré le fichier “app-full-release.apk” sur votre téléphone.
* If "App not installed" is displayed on your phone follow these steps:
  
1. `Export settings <../Usage/ExportImportSettings.html>`_ (in AAPS version already installed on your phone)
2. Désinstaller AAPS sur votre téléphone.
3. Enable airplane mode & turn off bluetooth.
4. Installer la nouvelle version (« app-full-release.apk »)
5. `Import settings <../Usage/ExportImportSettings.html>`_
6. Activer le bluetooth et désactiver le mode avion

App installed but old version
==================================================
If you build the app successfully, transferred it to your phone and installed it successfully but the version number stays the same then you might have missed to `update your local copy <../Update-to-new-version.html#update-your-local-copy>`.

None of the above worked
==================================================
If non of the above tips helped you might consider building the app from scratch:

1. `Export settings <../Usage/ExportImportSettings.html>`_ (in AAPS version already installed on your phone)
2. Have your key password and key store password ready
    In case you have forgotten passwords you can try to find them in project files as described `here <https://youtu.be/nS3wxnLgZOo>`_. Or you just use a new keystore. 
3. Build app from scratch as described `here <../Installing-AndroidAPS/Building-APK.html#download-code-and-additional-components>`_.
4.	When you have build the APK successfully delete the exiting app on your phone, transfer the new apk to your phone and install.
5. `Import settings <../Usage/ExportImportSettings.html>`_

Worst case scenario
==================================================
In case even building the app from scratch does not solve your problem you might want to try to uninstall Android Studio completely. Some Users reported that this solved their problem.

**Make sure to uninstall all files associated with Android Studio.** If you do not completely remove Android Studio with all hidden files, uninstalling may cause new problems instead of solving your existing one(s). Manuals for complete uninstall can be found online i.e. `https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10 <https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10>`_.

Install Android Studio from scratch as described `here <../Installing-AndroidAPS/Building-APK.html#install-android-studio>`_ and **do not update gradle**.
