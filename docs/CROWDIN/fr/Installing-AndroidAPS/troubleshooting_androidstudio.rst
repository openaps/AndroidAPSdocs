Troubleshooting Android Studio
*****
Kotlin compiler warning
=====
If build completed successfully but you get Kotlin compiler warnings then just ignore these warnings. 

App was build successfully and can be transferred to phone.

.. image:: ../images/GIT_WarningIgnore.PNG
  :alt: ignore Kotline compiler warning

Could not download… / Offline Work
=====
If you get a failure message like this

.. image:: ../images/GIT_Offline1.jpg
  :alt: Warning could not download

make sure that ‘Offline work’ is disabled.

File -> Settings

.. image:: ../images/GIT_Offline2.jpg
  :alt: Settings offline work

Error: buildOutput.apkData must not be null
=====
Sometimes you might get an error message when building the apk saying

  `Errors while building APK.`
   
  `Cause: buildOutput.apkData must not be null`

This is a known bug in Android Studio 3.5 and will probably not be fixed before Android Studio 3.6. Three options:

1. Manually delete the three build folders (normal "build", build folder in "app" and build folder in "wear") and generate signed apk again.
2. Set destination folder to project folder instead of app folder as described in `this video <https://www.youtube.com/watch?v=BWUFWzG-kag>`_.
3. Change apk destination folder (different location).

No CGM data
=====
* In case you are using xDrip+: Identify receiver as described on `xDrip+ settings page <../Configuration/xdrip.html#identify-receiver>`_.
* In case you are using `patched Dexcom G6 app </Hardware/DexcomG6.html#if-using-g6-with-patched-dexcom-app>`_: Make sure you are using the correct version from the `2.4 folder <https://github.com/dexcomapp/dexcomapp/tree/master/2.4>`_.

Uncommitted changes
=====
If you receive failure message like

.. image:: ../images/GIT_TerminalCheckOut0.PNG
  :alt: Failure uncommitted changes

Option 1 - Check git installation
-----
* git might be not installed correctly (must be globally available)
* `Check git installation <../Installing-AndroidAPS/git-install.html#check-git-settings-in-android-studio>`_
* If no git version is shown in check but git is installed on your computer, make sure Android Studio knows where `git is located <../Installing-AndroidAPS/git-install.html#set-git-path-in-android-studio>`_ on your computer.

Option 2 - Reload source code
-----
* In Android Studio select VCS -> GIT -> Reset HEAD

.. image:: ../images/GIT_TerminalCheckOut3.PNG
  :alt: Reset HEAD
   
Option 3 - Check for updates
-----
* Copy ‘git checkout --’ to clipboard (without quote signs)
* Switch to Terminal in Android Studio (lower left side of Android Studio window)

  .. image:: ../images/GIT_TerminalCheckOut1.PNG
  :alt: Android Studio Terminal
   
* Paste copied text and press return

  .. image:: ../images/GIT_TerminalCheckOut2.jpg
    :alt: GIT checkout success

App not installed
=====
.. image:: ../images/Update_AppNotInstalled.png
  :alt: phone app note installed

* Make sure you have transferred the “app-full-release.apk” file to your phone.
* If "App not installed" is displayed on your phone follow these steps:
  
1. `Export settings <../Usage/ExportImportSettings.html>`_ (in AAPS version already installed on your phone)
2. Désinstaller AAPS sur votre téléphone.
3. Enable airplane mode & turn off bluetooth.
4. Installer la nouvelle version (« app-full-release.apk »)
5. `Import settings <../Usage/ExportImportSettings.html>`_
6. Activer le bluetooth et désactiver le mode avion

App installed but old version
=====
If you build the app successfully, transferred it to your phone and installed it successfully but the version number stays the same then you might have missed to `update your local copy <../Update-to-new-version.html#update-your-local-copy>`.

None of the above worked
=====
If non of the above tips helped you might consider building the app from scratch:

1. `Export settings <../Usage/ExportImportSettings.html>`_ (in AAPS version already installed on your phone)
2. Have your key password and key store password ready
    In case you have forgotten passwords you can try to find them in project files as described `here <https://youtu.be/nS3wxnLgZOo>`_. Or you just use a new keystore. 
3. Build app from scratch as described `here <../Installing-AndroidAPS/Building-APK.html#download-code-and-additional-components>`_.
4.	When you have build the APK successfully delete the exiting app on your phone, transfer the new apk to your phone and install.
5. `Import settings <../Usage/ExportImportSettings.html>`_

Worst case scenario
=====
In case even building the app from scratch does not solve your problem you might want to try to uninstall Android Studio completely. Some Users reported that this solved their problem.

Make sure to uninstall all files associated with Android Studio. Manuals can be found online i.e. `https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10 <https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10>`_.

Install Android Studio from scratch as described `here <../Installing-AndroidAPS/Building-APK.html#install-android-studio>`_ and **do not update gradle**.
