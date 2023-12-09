(troubleshooting_androidstudio-troubleshooting-android-studio)=
# Устранение неполадок Android Studio

(troubleshooting_androidstudio-lost-keystore)=
## Потеряно хранилище ключей
Если вы используете одно и то же хранилище ключей при обновлении AndroidAPS, вам не нужно деинсталлировать предыдущую версию на смартфоне. Поэтому рекомендуется хранилище ключей размещать в надежном месте.

Если вы пытаетесь установить apk, подписанный ключем, отличным от предыдущего, то получите сообщение об ошибке установки!

На случай, если вы не можете найти свое старое хранилище ключей, выполните следующие действия:

1. Выполните [Экспорт настроек](ExportImportSettings-export-settings) на старом телефоне.
2. Скопируйте или загрузите файл настроек из телефона во внешнее местоположение (напр. компьютер, облачный сервис хранения данных...).
4. Сгенерируйте подписанное приложение новой версии, как описано в инструкции [Update](../Installing-AndroidAPS/Update-to-new-version.md) и перенесите его на телефон.
5. Деинсталлируйте предыдущую версию AAPS.
6. Установите новую версию AAPS на телефон.
7. [Import settings](ExportImportSettings-import-settings) to restore your objectives and configuration.
8. Проверьте параметры оптимизации батареи и отключите их снова.

   If you can't find them on your phone copy them from the external storage to your phone.
8. Keep on looping.

## Ошибка синхронизации Gradle
Синхронизация Gradle может не работать по различным причинам. Когда выпадает сообщение о том, что синхронизация не удалась, откройте вкладку "Build" (1) в нижней части Android Studio и проверьте, какое отображается сообщение об ошибке (2).

  ![Gradle Failed](../images/studioTroubleshooting/07_GradleSyncFailed2.png)

Ниже перечислены обычные сбои в синхронизации:
* [Непринятые изменения](troubleshooting_androidstudio-uncommitted-changes)
* [Нет кэшированной версии...](troubleshooting_androidstudio-could-not-resolve-no-cached-version)
* [Для Android Gradle требуется Java 11](troubleshooting_androidstudio-android-gradle-plugin-requires-java-11-to-run)

*Важно*: После того, как будет устранена конкретная проблемf, следует запустить [синхронизацию gradle ](troubleshooting_androidstudio-gradle-resync) снова.

(troubleshooting_androidstudio-uncommitted-changes)=
### Непринятые изменения

Если получено такое сообщение об ошибке

![Gradle Uncommited Changes](../images/studioTroubleshooting/02_GradleUncommitedChanges.png)

#### Шаг 1 - Проверьте установку git
  * Откройте вкладку терминала (1) в нижней части Android Studio и скопируйте следующий текст и вставьте или введите в терминал.
    ```
    git --version
    ```

    ![Gradle Git Version](../images/studioTroubleshooting/03_GitVersion.png)

    Примечание: Между git и version есть пробел и два дефиса!

  * Вы получите сообщение о том, какая версия git установлена, как на снимке экрана выше. В этом случае перейдите к [Шагу 2](troubleshooting_androidstudio-step-2-check-for-uncommitted-changes).

  * Если вы получите сообщение
    ```
    Git: command not found
    ```
    your Git installation is not right.

  * [Check git installation](git-install-check-git-settings-in-android-studio)

  * if on Windows and git was just installed, you should restart your computer to make git globally available after the installation

  * If Git is installed, you have restarted (if on windows), and git still couldn't found:

  * Search your computer for a file "git.exe".

    Note for yourself, what directory it is in.

  * Go to the Environment variables in windows, select the variable "PATH" and click edit. Add the directory where you have found your git installation.

  * Save and close.

  * Restart Android Studio.

#### Step 2: Check for uncommitted changes.

  * In Android Studio, oben the "Commit" Tab (1) on the left-hand side. ![Commit Tab: Uncommitted changes](../images/studioTroubleshooting/04_CommitTabWithChanges.png)
  * You can see either a "Default changeset" (2) or "Unversioned files" (3):

    * For "Default changeset", you probably updated gradle or changed some of the file contents by mistake.

    * Right click on "Default Changeset" and select "Rollback"

      ![Commit Tab: Rollback changes](../images/studioTroubleshooting/05_CommitTabRollback.png)

    * The files are fetched again from the Git server. If there are no other changes in the commit tab, go to [Step 3](troubleshooting_androidstudio-step-3-gradle-resync).

  * If you can see "Unversioned Files", you might have stored files in your sourecode directory which should be better places somewhere else, e.g. your keystore file.

    * Use your regular file explorer on your computer to move or cut and paste that file to a save place.

    * Go back to Android Studio and click the Refresh button (4) within the Commit tab to make sure the file is not stored in the AAPS directory anymore.

      If there are no other changes in the commit tab, go to [Step 3](troubleshooting_androidstudio-step-3-gradle-resync).


(troubleshooting_androidstudio-step-3-gradle-resync)=

#### Step 3: Resync Gradle (again)

Follow the instructions at [Gradle Resync](troubleshooting_androidstudio-step-3-gradle-resync).

(troubleshooting_androidstudio-android-gradle-plugin-requires-java-11-to-run)=

### Android Gradle plugin requires Java 17 to run

  You might experience this error message:

  ![Android Gradle plugin requires Java 17 to run](../images/studioTroubleshooting/11_GradleJDK.png)

  Click on "Gradle Settings" (1) to go to open the gradle settings.

  If you don't have the link to the "Gradle Settings", open the Gradle settings manually by selecting the Gradle Tab on the right border (1), select the tools icon (2) and there the item 'Gradle Settings' (3).

  ![Gradle Settings](../images/studioTroubleshooting/09_GradleSettings.png)

  When you have opened the Gradle settings dialog, open the options (1) at "Gradle JDK" and selected the "jbr-17" (2), which should be located within your Android Studion installation directory.

  ![Gradle Settings](../images/studioTroubleshooting/12_GradleSettingsJDK.png)

  Press "OK" to save and close the settings dialog.

  *Important*: If you don't see the setting "Gradle JDK", you might have not updated Android Studio. Make sure you are using Android Studio 2022.3 Giraffe) or newer.

  Now you need to trigger a [Gradle Resync](troubleshooting_androidstudio-step-3-gradle-resync)

(troubleshooting_androidstudio-could-not-resolve-no-cached-version)=

### Could not resolve/No cached version

  You might get this error message:

    ![Could not resolve... No cached version](../images/studioTroubleshooting/08_NoCachedVersion.png)

  * On the right side, open the Gradle tab (1).

    Make sure the button shown at (2) is *NOT* selected.

    ![Gradle Offline Mode](../images/studioTroubleshooting/10_GradleOfflineMode.png)

  * Now you need to trigger a [Gradle Resync](troubleshooting_androidstudio-step-3-gradle-resync)

(troubleshooting_androidstudio-unable-to-start-daemon-process)=
### Не удается запустить демон процесс

  If you see an error message like the one below you probably use a Windows 10 32-bit system. This is not supported by Android Studio 3.5.1 and above and unfortunately nothing the AAPS developer can do about.

  If you are using Windows 10 you must use a 64-bit operating system.

  There are a lot of manuals on the internet how to determine wether you have a 32-bit or 64-bit OS - i.e. [this one](https://www.howtogeek.com/howto/21726/how-do-i-know-if-im-running-32-bit-or-64-bit-windows-answers/).

  ![Screenshot Unable to start daemon process](../images/AndroidStudioWin10_32bitError.png)

### Gradle Resync

  If you can still see the message that the gradle sync failed, now select the Link "Try again". ![Gradle Sync Failed Mode](../images/studioTroubleshooting/01_GradleSyncFailed.png)


  If you don't see the a message anymore, you can still trigger this manually:

  * Open the Gradle tab (1) on the right border of Android Studio.

    ![Gradle Reload](../images/studioTroubleshooting/06_GradleResyncManually.png)

  * Right-click on AAPS (2)

  * Click on "Reload Gradle Project" (3)

## Generate Signed APK generated successfully with 0 build variants

When you generate the signed apk, you might get the notification that generation was successfully but are told that 0 build variants where generated:

![APK generated with 0 build variants](../images/studioTroubleshooting/14_BuildWith0Variants.png)

This is a false warning. Check the directory your selected as "Destination folder" for generation (step [Generate Signed APK](Building-APK-generate-signed-apk)) and you will find the generated apk there!


## App was created with compiler/kotlin warnings

If your build completed successfully but you get compiler or kotlin warnings (indicated by a yellow or blue exclamation mark) then you can just ignore these warnings.

 ![Gradle finished with warnings](../images/studioTroubleshooting/13_BuildWithWarnings.png)

Your app was build successfully and can be transferred to phone!


## Key was created with errors

When creating a new keystore for building the signed APK, on Windows the following error message might appear

![Key was created with errors](../images/AndroidStudio35SigningKeys.png)

This seems to be a bug with Android Studio 3.5.1 and its shipped Java environment in Windows. The key is created correctly but a recommendation is falsely displayed as an error. This can currently be ignored.


## No CGM data is received by AAPS

* In case you are using patched Dexcom G6 app: This app is outdated. Use the [BYODA](DexcomG6-if-using-g6-with-build-your-own-dexcom-app) app instead.

* In case you are using xDrip+: Identify receiver as described on [xDrip+ settings page](xdrip-identify-receiver).


## App not installed

![phone app note installed](../images/Update_AppNotInstalled.png)

* Make sure you have transferred the “app-full-release.apk” file to your phone.
* If "App not installed" is displayed on your phone follow these steps:

1. [Export settings](../Usage/ExportImportSettings) (in AAPS version already installed on your phone)
2. Удалите AAPS с телефона.
3. Enable airplane mode & turn off bluetooth.
4. Установите новую версию («app-full-release.apk»)
5. [Выполните импорт настроек](../Usage/ExportImportSettings)
6. Снова включите Bluetooth и отключите режим самолета

## App installed but old version

If you built the app successfully, transferred it to your phone and installed it successfully but the version number stays the same then you might have missed to [update your local copy](Update-to-new-version-update-your-local-copy)

## None of the above worked

If non of the above tips helped you might consider building the app from scratch:

1. [Export settings](../Usage/ExportImportSettings) (in AAPS version already installed on your phone)

2. Подготовьте пароль ключа и пароль хранилища. In case you have forgotten passwords you can try to find them in project files as described [here](https://youtu.be/nS3wxnLgZOo).

    Или просто создайте новый файл хранения ключей.

3. Build app from scratch as described [here](Building-APK-download-AAPS-code).

4. Когда вы успешно собрали APK, удалите существующее приложение с телефона, перенесите новое приложение на ваш телефон и установите.
5. [Import settings](../Usage/ExportImportSettings) again to restore your objectives and settings.
6. You should check your battery optimization options and disable them again.

## Worst case scenario

In case even building the app from scratch does not solve your problem you might want to try to uninstall Android Studio completely. Some Users reported that this solved their problem.

**Make sure to uninstall all files associated with Android Studio.** If you do not completely remove Android Studio with all hidden files, uninstalling may cause new problems instead of solving your existing one(s). Manuals for complete uninstall can be found online i.e.

[https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10](https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10).

Install Android Studio from scratch as described [here](Building-APK-install-android-studio).
