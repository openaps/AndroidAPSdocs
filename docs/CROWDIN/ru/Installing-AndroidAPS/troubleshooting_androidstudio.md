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

*Важно*: После того, как будет устранена конкретная проблема, следует запустить [синхронизацию gradle ](troubleshooting_androidstudio-gradle-resync) снова.

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
    то Git установлен неправильно.

  * [Проверьте установку git](git-install-check-git-settings-in-android-studio)

  * после установки Git в Windows и, нужно перезапустить компьютер или хотя бы раз выйти и снова войти в систему, чтобы сделать git глобально доступным

  * Если Git установлен, вы перезапустили его (если в Windows), и git все еще не найден:

  * Выполните поиск в компьютере файла "git.exe".

    Отметьте для себя, в каком он каталоге.

  * Перейдите к переменным окружения в окнах, выберите переменную «PATH» и нажмите «Редактировать». Добавьте каталог, где вы нашли вашу установку git.

  * Сохраните и закройте.

  * Перезапустите Android Studio.

#### Шаг 2: Проверьте незафиксированные изменения.

  * В Android Studio откройте вкладку Commit (1) слева. ![Commit Tab: Uncommitted changes](../images/studioTroubleshooting/04_CommitTabWithChanges.png)
  * Вы увидите либо "Изменения по умолчанию" (2) или "Неверсионные файлы" (3):

    * Для "Default changeset" вы вероятно обновили gradle или по ошибке изменили содержимое файла.

    * Щелкните правой кнопкой мыши на "Изменения по умолчанию" и выберите "Отмена"

      ![Commit Tab: Rollback changes](../images/studioTroubleshooting/05_CommitTabRollback.png)

    * Файлы снова загрузятся с Git сервера. Если других изменений во вкладке Commit нет, перейдите к [Шагу 3](troubleshooting_androidstudio-step-3-gradle-resync).

  * Если вы видите "Неверсионные файлы", возможно вы храните вы файлы в каталоге источника кода, которым место где-то еще, например ваш файл ключа.

    * При помощи обычного файлового проводника на компьютере вырежьте и вставьте этот файл в другое место хранения.

    * Вернитесь к Android Studio и нажмите кнопку Обновить (4) на вкладке Commit, чтобы убедиться, что файл больше не хранится в каталоге AAPS.

      Если других изменений во вкладке Commit нет, перейдите к [Шагу 3](troubleshooting_androidstudio-step-3-gradle-resync).


(troubleshooting_androidstudio-step-3-gradle-resync)=

#### Шаг 3: Пересинхронизация Gradle (повторно)

Следуйте инструкциям на [Gradle Resync](troubleshooting_androidstudio-step-3-gradle-resync).

(troubleshooting_androidstudio-android-gradle-plugin-requires-java-11-to-run)=

### Для Android Gradle требуется Java 17

  Вы можете столкнуться с этой ошибкой:

  ![Для Android Gradle требуется Java 17](../images/studioTroubleshooting/11_GradleJDK.png)

  Click on "Gradle Settings" (1) to go to open the gradle settings.

  Если у вас нет ссылки на "Настройки Gradle", откройте настройки Gradle вручную выбрав вкладку "Gradle" на правой границе (1), выберите значок инструментов (2) и там пункт 'Gradle Settings' (3).

  ![Gradle Settings](../images/studioTroubleshooting/09_GradleSettings.png)

  Когда вы откроете диалог настроек Gradle, откройте параметры (1) в меню "Gradle JDK" и выберите "jbr-17" (2),, который должен быть расположен в папке установки Android Studio.

  ![Gradle Settings](../images/studioTroubleshooting/12_GradleSettingsJDK.png)

  Нажмите "OK" для сохранения и закрытия диалогового окна настроек.

  *Важное*: Если вы не видите настройки "Gradle JDK", возможно, вы не обновили Android Studio. Убедитесь, что вы используете Android Studio 2022.3 Giraffe) или новее.

  Теперь вам нужно запустить [Gradle Resync](troubleshooting_androidstudio-step-3-gradle-resync)

(troubleshooting_androidstudio-could-not-resolve-no-cached-version)=

### Не удалось разрешить/Нет кэшированной версии

  Вы можете столкнуться с этой ошибкой:

    ![Не удалось разрешить... Нет кэшированной версии](../images/studioTroubleshooting/08_NoCachedVersion.png)

  * С правой стороны откройте вкладку Gradle (1).

    Убедитесь, что кнопка, показанная на (2), *НЕ* выбрана.

    ![Gradle Offline Mode](../images/studioTroubleshooting/10_GradleOfflineMode.png)

  * Теперь вам нужно запустить [Gradle Resync](troubleshooting_androidstudio-step-3-gradle-resync)

(troubleshooting_androidstudio-unable-to-start-daemon-process)=
### Не удается запустить демон процесс

  Если вы видите подобное сообщение об ошибке, вы, вероятно, используете ОС Windows 10, 32-bit. Это не поддерживается Android Studio 3.5.1 и выше, и, к сожалению, разработчик AAPS. ничего не может сделать.

  В Windows 10 следует использовать 64-битную операционную систему.

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
