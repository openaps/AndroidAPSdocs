Android Studio trikčių diagnostika
**************************************************
Prarasta raktų saugykla
==================================================
Jei atnaujindami AndroidAPS naudojate tą pačią raktų saugyklą, savo išmaniajame telefone nereikia pašalinti ankstesnės AAPS versijos. Todėl raktų saugyklą rekomenduojama išsaugoti saugioje vietoje.

Jei vis dėlto nerandate ankstesnės raktų saugyklos, galite elgtis taip:

1. `Eksportuokite nustatymus <../Usage/ExportImportSettings.html#how-to-export-settings>`_ savo telefone.
2. Nukopijuokite failą su nustatymais iš savo išmaniojo telefono į išorinės saugyklos vietą (pvz. jūsų kompiuteryje, debesijos saugykloje...).
3. Įsitikinkite, kad failas „AndroidAPS Preferences“ išsaugotas saugiai.
4. Sukurkite naujos versijos pasirašomą apk failą, kaip aprašyta puslapyje `Atnaujinimas <../Installing-AndroidAPS/Update-to-new-version.html>`_.
5. Pašalinkite ankstesnę AAPS versiją iš savo išmaniojo telefono.
6. Įdiekite naują AAPS versiją į savo išmanųjį telefoną.
7. `Importuokite savo nustatymus <../Usage/ExportImportSettings.html#how-to-export-settings>`_ - jei jų nerandate savo išmaniajame telefone, tiesiog nukopijuokite juos iš išorinės saugyklos vietos į išmanųjį telefoną.
8. Toliau naudokitės uždaru ciklu.

Kotlin compiler perspėjimas
==================================================
Jei kūrimas buvo sėkmingai baigtas, bet jūs gaunate įspėjimą iš Kotlin Compiler, galite jo ignoruoti. 

Programa buvo sėkmingai sukurta ir ją galima perkelti į išmanųjį telefoną.

.. image:: ../images/GIT_WarningIgnore.PNG
  :alt: ignoruoti Kotline compiler perspėjimą

Raktas sukurtas su klaidomis
==================================================
Kuriant naują raktų saugyklą, kad sukurtumėte pasirašytą APK, Windows gali pasirodyti šis klaidos pranešimas

.. image:: ../images/AndroidStudio35SigningKeys.png
  :alt: Raktas sukurtas su klaidomis

Atrodo, kad tai yra Android Studio 3.5.1 ir jo Java aplinkos, pateiktos naudojant Windows, klaida. Raktas sukurtas teisingai, tačiau rekomendacija neteisingai rodoma kaip klaida. Šiuo metu to galima nepaisyti.

Nepavyko atsisiųsti… / Darbas neprisijungus
==================================================
Jei gausite klaidos pranešimą, kuri atrodo panašiai

.. image:: ../images/GIT_Offline1.jpg
  :alt: Įspėjimas nepavyko parsisiųsti

įsitikinkite, kad „darbas neprisijungus“ yra išjungtas.

Spustelėkite File > Settings

.. image:: ../images/GIT_Offline2.jpg
  :alt: Nustatymų neprisijungus nustatymai

Klaida: buildOutput.apkData neturi būti tuščia
==================================================
Kartais kurdami APK failą galite gauti šį klaidos pranešimą

  `Klaidos kuriant APK.`
   
  `Klaida: buildOutput.apkData neturi būti tuščia`

Tai yra žinoma Android Studio 3.5 klaida ir greičiausiai bus ištaisyta tik Android Studio 3.6. Trys variantai:

1. Manually delete the three build folders (normal "build", build folder in "app" and build folder in "wear") and generate signed apk again.
2. Set destination folder to project folder instead of app folder as described in `this video <https://www.youtube.com/watch?v=BWUFWzG-kag>`_.
3. Change apk destination folder (different location).

Unable to start daemon process
==================================================
If you see an error message like the one below you probably use a Windows 10 32-bit system. This is not supported by Android Studio 3.5.1 and above. I you are using Windows 10 you must use a 64-bit operating system.

There are a lot of manuals on the internet how to determine wether you have a 32-bit or 64-bit OS - i.e. `this one <https://www.howtogeek.com/howto/21726/how-do-i-know-if-im-running-32-bit-or-64-bit-windows-answers/>`_.

.. image:: ../images/AndroidStudioWin10_32bitError.png
  :alt: Screenshot Unable to start daemon process
  

No CGM data
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

* Make sure you have transferred the “app-full-release.apk” file to your phone.
* If "App not installed" is displayed on your phone follow these steps:
  
1. `Export settings <../Usage/ExportImportSettings.html>`_ (in AAPS version already installed on your phone)
2. Uninstall AAPS on your phone.
3. Enable airplane mode & turn off bluetooth.
4. Install new version (“app-full-release.apk”)
5. `Import settings <../Usage/ExportImportSettings.html>`_
6. Turn bluetooth back on and disable airplane mode

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
