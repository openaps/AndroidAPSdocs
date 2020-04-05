Устранение неполадок Android Studio
**************************************************
Потеряно хранилище ключей
==================================================
Если вы используете одно и то же хранилище ключей при обновлении AndroidAPS, вам не нужно деинсталлировать предыдущую версию на смартфоне. Поэтому рекомендуется хранилище ключей размещать в надежном месте.

На случай, если вы не можете найти свое старое хранилище ключей, выполните следующие действия:

1. `Экспорт настроек <../Usage/ExportImportSettings.html#how-to-export-settings>`_ на вашем телефоне.
2. Скопируйте настройки вашего телефона во внешнее местоположение (напр. ваш компьютер, служба облачного хранения...).
3. Убедитесь, что файл параметров "Параметры AndroidAPS" сохранен.
4. Сгенерируйте подписанный apk новой версии, как описано на странице обновления <../Instaling-AndroidAPS/Update-to-new-version.html> ` _.
5. Деинсталлируйте предыдущую версию AAPS на вашем телефоне.
6. Установите новую версию AAPS на свой телефон.
7. `Импортируйте настройки <../Usage/ExportImportSettings.html#how-to-export-settings>`_ - если не можете найти их на вашем телефоне, скопируйте их из внешнего хранилища.
8. Продолжайте пользоваться циклом.

Предупреждение компилятора Kotlin
==================================================
Если сборка завершена успешно, но вы получаете предупреждения компилятора Kotlin, просто проигнорируйте эти предупреждения. 

Приложение успешно построено и может быть перенесено на телефон.

.. изображение:: ../images/GIT_WarningIgnore.PNG
  :alt: игнорировать предупреждение компилятора Koline

Ключ создан с ошибками
==================================================
При создании нового хранилища ключей для построения подписанного APK в Windows может появиться следующее сообщение об ошибке

.. изображение:: ../images/AndroidStudio35SigningKeys.png
  :alt: Ключ создан с ошибками

Это, кажется, ошибка в Android Studio 3.5.1 и в среде Java в Windows. Ключ создается правильно, но рекомендация выводится как ошибка. В настоящее время это можно игнорировать.

Не удалось загрузить… / Работа оффлайн
==================================================
Если вы получите подобное сообщение об ошибке

.. изображение:: ../images/GIT_Offline1.jpg
  :alt: Не удалось загрузить предупреждение

убедитесь, что 'Автономная работа' выключена.

Файл -> параметры

.. изображение:: ../images/GIT_Offline2.jpg
  :alt: Параметры автономной работы

Ошибка: buildOutput.apkData не может быть пустым
==================================================
Иногда появляется сообщение об ошибке при компоновке apk

  `Ошибки при сборке APK.`
   
  `Ошибка: buildOutput.apkData не может быть пустым`

This is a known bug in Android Studio 3.5 and will probably not be fixed before Android Studio 3.6. Three options:

1. Вручную удалите три папки компоновки (обычная "сборка", папка компоновки в "app" и папка компоновки в "wear") и снова сгенерируйте подписанный apk.
2. Set destination folder to project folder instead of app folder as described in `this video <https://www.youtube.com/watch?v=BWUFWzG-kag>`_.
3. Измените папку назначения apk (другое расположение).

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

Неодобренные изменения
==================================================
Если вы получите сообщение об ошибке, как это

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

Приложение не установлено
==================================================
.. image:: ../images/Update_AppNotInstalled.png
  :alt: phone app note installed

* Make sure you have transferred the “app-full-release.apk” file to your phone.
* If "App not installed" is displayed on your phone follow these steps:
  
1. `Export settings <../Usage/ExportImportSettings.html>`_ (in AAPS version already installed on your phone)
2. Удалите AAPS с телефона.
3. Enable airplane mode & turn off bluetooth.
4. Установите новую версию («app-full-release.apk»)
5. `Import settings <../Usage/ExportImportSettings.html>`_
6. Снова включите Bluetooth и отключите режим самолета

Приложение установлено, но старая версия
==================================================
If you build the app successfully, transferred it to your phone and installed it successfully but the version number stays the same then you might have missed to `update your local copy <../Update-to-new-version.html#update-your-local-copy>`.

Ничего из вышеперечисленного не сработало
==================================================
Если вышеперечисленные советы не помогли попробуйте начать сборку приложения с нуля:

1. `Export settings <../Usage/ExportImportSettings.html>`_ (in AAPS version already installed on your phone)
2. Have your key password and key store password ready
    In case you have forgotten passwords you can try to find them in project files as described `here <https://youtu.be/nS3wxnLgZOo>`_. Or you just use a new keystore. 
3. Build app from scratch as described `here <../Installing-AndroidAPS/Building-APK.html#download-code-and-additional-components>`_.
4.	Когда вы успешно собрали APK, удалите существующее приложение с телефона, перенесите новое приложение на ваш телефон и установите.
5. `Import settings <../Usage/ExportImportSettings.html>`_

Сценарий худшего варианта
==================================================
Если даже создание приложения с нуля не решает проблему, попробуйте полностью удалить Android Studio. Некоторые пользователи сообщили, что это решило проблему.

**Make sure to uninstall all files associated with Android Studio.** If you do not completely remove Android Studio with all hidden files, uninstalling may cause new problems instead of solving your existing one(s). Manuals for complete uninstall can be found online i.e. `https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10 <https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10>`_.

Install Android Studio from scratch as described `here <../Installing-AndroidAPS/Building-APK.html#install-android-studio>`_ and **do not update gradle**.
