(troubleshooting_androidstudio-troubleshooting-android-studio)=

# Устранение неполадок Android Studio

```{contents} List of common issues
:depth: 2
:local: true
```

(troubleshooting_androidstudio-lost-keystore)=
## Потеряно хранилище ключей
If you lost your keystore or its password, an apk signed with a new keystore cannot update your current **AAPS**: you have to uninstall and reinstall it. See [Reinstalling AAPS with a new keystore](#reinstall-aaps).

## Ошибка синхронизации Gradle
Синхронизация Gradle может завершиться ошибкой по разным причинам. Если вы получили сообщение «gradle sync failed», откройте вкладку «Build» (1) внизу Android Studio и посмотрите, какое сообщение об ошибке (2) там показано.

![Отказ Gradle](../images/studioTroubleshooting/07_GradleSyncFailed2.png)

```{contents} Likely reasons for gradle sync failures are:
:depth: 1
:local: true
```

*Важно*: После того как вы выполнили инструкции для вашей проблемы, нужно снова запустить [синхронизацию Gradle](#gradle-resync).

(troubleshooting_androidstudio-uncommitted-changes)=
### Непринятые изменения

Если вы получили такое сообщение об ошибке:

![Gradle: незафиксированные изменения](../images/studioTroubleshooting/02_GradleUncommitedChanges.png)

```
Build file 'C:\Data\50-Android\AndroidAPS\app\build.gradle.kts' line: 243

There are uncommitted changes.
Скачайте исходный код заново, как описано в документации, и не разрешайте обновление gradle
```

#### Шаг 1 - Проверьте установку git
  * Open the terminal tab (1) at the bottom of Android Studio and copy the following text and paste or type into the terminal (2).
    ```
    версия git
    ```

    ![Версия Gradle Git](../images/studioTroubleshooting/03_GitVersion.png)

    Примечание: между git и version стоит пробел и два дефиса!

  * Вы должны получить сообщение о том, какая версия Git установлена, как на снимке экрана выше. В этом случае перейдите к [шагу 2](#troubleshooting-android-studio-check-for-uncommitted-changes).

  * In case you get a message saying
    ```
    Git: команда не найдена
    ```
    то Git установлен неправильно.

  * [Проверьте установку git](#BuildingAaps-steps-for-installing-git)

  * If you are on Windows and Git was just installed, you should restart your computer to make Git globally available after the installation

  * If Git is installed, you have restarted (if on Windows), and Git still cannot be found:

  * Выполните поиск в компьютере файла "git.exe".

    Запишите себе, в какой папке он сохранен.

  * Go to the Environment variables in Windows, select the variable "PATH" and click edit. Добавьте папку, в которой вы нашли установленный Git.

  * Сохраните и закройте.

  * Перезапустите Android Studio.

(troubleshooting-android-studio-check-for-uncommitted-changes)=
#### Шаг 2: Проверьте незафиксированные изменения.

  * В Android Studio откройте вкладку «Commit» (1) слева. ![Вкладка Commit: Незафиксированные изменения](../images/studioTroubleshooting/04_CommitTabWithChanges.png)
  * You can see either "Changes" (called "Default changeset" in older Android Studio versions) (2) or "Unversioned Files" (3):

    * For "Changes", you probably updated 'Gradle' or changed some of the file contents by mistake.

    * Right click on "Changes" and select "Rollback…" (1)

      ![Вкладка Commit: Откат изменений](../images/studioTroubleshooting/05_CommitTabRollback.png)

    * Файлы снова загрузятся с Git сервера. Если других изменений на вкладке Commit нет, перейдите к [шагу 3](#gradle-resync).

  * Если вы видите «Unversioned Files», возможно, вы по ошибке сохранили файлы в папке с исходным кодом. Возможно, это важные файлы, например файл хранилища ключей, который нужно перенести в другое место. Если вы не знаете, что это за файлы, и не создавали их сами, их можно удалить.

    * С помощью обычного проводника на компьютере переместите этот файл (или вырежьте и вставьте его) в надежное место.

    * Вернитесь в Android Studio и нажмите кнопку обновления (Refresh) (4) на вкладке Commit, чтобы убедиться, что файла больше нет в папке **AAPS**.

      Если других изменений на вкладке Commit нет, перейдите к [шагу 3](#gradle-resync).


#### Шаг 3: Пересинхронизация Gradle (повторно)

Выполните инструкции из раздела [Повторная синхронизация Gradle](#gradle-resync).

### Git Pull Failed - Please tell me who you are

Если вы видите это сообщение, Git просит вас представиться.

![Идентификация в Git](../images/studioTroubleshooting/164_Git_Identify.png)

Откройте терминал и введите следующие две команды, одну за другой.

```
git config --global user.name "Your name here"
git config --global user.email your.email@here.com
```

Ваше имя нужно написать в кавычках.

![Исправление идентификации в Git](../images/studioTroubleshooting/164_Git_Identify2.png)

(troubleshooting_androidstudio-android-gradle-plugin-requires-java-11-to-run)=

(incompatible-gradle-jvm)=
### Несовместимая Gradle JVM

![Несовместимая Gradle JVM](../images/studioTroubleshooting/160_InkompatibelAndroidGradleJVM.png)

```
Your build is currently configured to use incompatible Java 21.0.3 and Gradle 8.2.
Cannot sync the project.

We recommend upgrading to Gradle version 8.9.

The minimum compatible Gradle version is 8.5.

The maximum compatible Gradle JVM version is 19.
```

Or:

```
Cause: error: invalid source release: 21
```

If you experience the above error message, you need to download a correct JVM version before you can try to rebuild:

1.  Посмотрите в [таблице требований](#Building-APK-recommended-specification-of-computer-for-building-apk-file), какая версия JVM нужна для версии **AAPS**, которую вы собираете, и запишите ее.

2. Откройте панель Gradle, нажав на слона (1) справа в Android Studio, откройте настройки (2) и выберите **Gradle Settings** (3):

![Откройте настройки Gradle](../images/studioTroubleshooting/161_GradleSettings.png)

3.  В поле **Gradle JDK** проверьте, выбрана ли подходящая версия (1). Если нет, нажмите на поле и посмотрите, есть ли она уже в списке. В примере ниже JVM 21 обозначена как «jbr-21». Если вы ее нашли, просто выберите ее, и все готово. If not available, then select **Download JDK** (2).


![Выберите Download JDK](../images/studioTroubleshooting/162_DownloadJDK.png)

4. В поле Version (1) выберите JDK, который нужен для вашей версии **AAPS** (тот, который вы записали, когда смотрели таблицу требований). В поле Vendor (2) выберите любого поставщика. Location (3): не меняйте. Click **Download** (4).

![Выберите JDK 17](../images/studioTroubleshooting/163_JDKSelection.png)

5.  Закройте окно **Settings** кнопкой **OK**.
6. Теперь нужно снова запустить синхронизацию Gradle (Gradle Sync). Выполните инструкции из раздела [Повторная синхронизация Gradle](#gradle-resync).

(incompatible-version-of-android-gradle-plugin)=
### Incompatible version of Android Gradle plugin

  Если вы сталкиваетесь со следующими ошибками

`The project is using an incompatible version (AGP x.x.x) of the Android Gradle plugin. Latest supported version is AGP x.x.x`

  ![Incompatible version of Android Gradle plugin](../images/studioTroubleshooting/15_InkompatibelAndroidGradlePlugin.png)

  Вы используете устаревшую версию Android Studio. В меню выберите Help > Check for updates и установите все найденные обновления Android Studio и ее плагинов.

(troubleshooting_androidstudio-could-not-resolve-no-cached-version)=
### Не удалось разрешить/Нет кэшированной версии

  Вы можете столкнуться с этой ошибкой:

![Could not resolve... Нет кэшированной версии](../images/studioTroubleshooting/08_NoCachedVersion.png)

  * С правой стороны откройте вкладку Gradle (1).

    Убедитесь, что кнопка, показанная на (2), *НЕ* выбрана.

    ![Автономный режим Gradle](../images/studioTroubleshooting/10_GradleOfflineMode.png)

  * Теперь нужно запустить [повторную синхронизацию Gradle](#gradle-resync)

(troubleshooting_androidstudio-unable-to-start-daemon-process)=
### Не удается запустить демон процесс

  Если вы видите подобное сообщение об ошибке, вы, вероятно, используете ОС Windows 10, 32-bit. Android Studio 3.5.1 и новее это не поддерживает, и, к сожалению, разработчики **AAPS** ничего не могут с этим сделать!

  В интернете есть информация о том, как узнать, 32-битная у вас ОС или 64-битная, например [эта статья](https://support.microsoft.com/en-us/windows/32-bit-and-64-bit-windows-frequently-asked-questions-c6ca9541-8dce-4d48-0415-94a3faa2e13d).

  ![снимок экрана не удалось запустить процесс демона](../images/studioTroubleshooting/AndroidStudioWin10_32bitError.png)

(gradle-resync)=
### Повторная синхронизация Gradle

  If you can still see the message that the gradle sync failed, now select the link **Try again** (1). ![Сбой режима проверки синхронизации Gradle](../images/studioTroubleshooting/01_GradleSyncFailed.png)


  Если вы больше не видите это сообщение, синхронизацию все равно можно запустить вручную:

  * Откройте вкладку Gradle (1) на правой границе Android Studio.

    ![Перезагрузка Gradle](../images/studioTroubleshooting/06_GradleResyncManually.png)

  * Щелкните правой кнопкой мыши по AAPS (2)

  * Нажмите «Reload Gradle Project» (3).

## Generate Signed APK успешно сгенерировано с 0 вариантами сборки

When you generate the signed apk, you might get the notification that generation was successful but that '0 build variants' were generated:

![APK создан с 0 вариантами сборки](../images/studioTroubleshooting/14_BuildWith0Variants.png)

Это неверное предупреждение. Откройте папку, которую вы выбрали как «Destination folder» при создании APK (шаг [Generate Signed APK](#Building-APK-generate-signed-apk)), и вы найдете там созданный apk!


## Приложение было создано с предупреждениями компилятора/kotlin

Если ваша сборка успешно завершена, но получено предупреждения компилятора или kotlin (обозначенные желтым или синим восклицательным знаком), то эти предупреждения можно просто проигнорировать.

 ![Gradle завершен с предупреждениями](../images/studioTroubleshooting/13_BuildWithWarnings.png)

Ваш apk успешно собран, его можно перенести на телефон!


## AAPS не получает данные мониторинга CGM

* Если вы используете пропатченное приложение Dexcom G6: это приложение устарело. Вместо него используйте приложение [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app).

* If you are using xDrip: identify receiver as described on [xDrip settings page](#xdrip-identify-receiver).


## Apk не устанавливается

![phone app not installed](../images/studioTroubleshooting/Update_AppNotInstalled.png)

* Убедитесь, что вы передали файл «app-full-release.apk» на телефон.
* This error usually means the new apk is signed with a different keystore than your installed **AAPS**. If you still have your previous keystore, select it and build again. Otherwise, see [Reinstalling AAPS with a new keystore](#reinstall-aaps).
* Если на телефоне появилось сообщение "приложение не установлено", то выполните следующее:

1. [Экспорт настроек](../Maintenance/ExportImportSettings.md) (в версии AAPS, которая уже установлена на телефоне)
2. Удалите **AAPS** с телефона.
3. Enable airplane mode & turn off Bluetooth.
4. Установите новую версию («app-full-release.apk»)
5. [Выполните импорт настроек](../Maintenance/ExportImportSettings.md)
6. Turn Bluetooth back on and disable airplane mode

## Apk установлен, но версия старая

If you built the app successfully, transferred it to your phone and installed it successfully but the version number stays the same then you might have forgotten to [update your local copy](#Update-to-new-version-update-your-local-copy)

## Ничего из вышеперечисленного не сработало

Если ни один из советов выше не помог, попробуйте собрать apk заново:

1. [Экспорт настроек](../Maintenance/ExportImportSettings.md) (в версии AAPS, которая уже установлена на телефоне)

2. Have your key password and key store password ready.

    Или просто создайте новый файл хранения ключей.

3. Соберите apk заново, как описано [здесь](#Building-APK-download-AAPS-code).

4. Когда apk будет успешно собран, удалите старый apk на телефоне, перенесите новый apk на телефон и установите его.
5. Снова выполните [импорт настроек](../Maintenance/ExportImportSettings.md), чтобы восстановить ваши цели и настройки.
6. Проверьте параметры оптимизации батареи и отключите их снова.

## Сценарий худшего варианта

Если это не решило проблему со сборкой, можно попробовать полностью удалить Android Studio и собрать все заново.  Некоторым пользователям это помогает решить проблему со сборкой.  При удалении Android Studio не удаляйте пользовательские настройки Android и **обязательно удалите все файлы, связанные с Android Studio.** Если не удалить Android Studio полностью, со всеми скрытыми файлами, удаление может вызвать новые проблемы вместо того, чтобы решить старые. Руководства по полной деинсталляции можно найти в Интернете, напр.

[https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10](https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10).

Установите Android Studio заново, как описано [здесь](#Building-APK-install-android-studio).
