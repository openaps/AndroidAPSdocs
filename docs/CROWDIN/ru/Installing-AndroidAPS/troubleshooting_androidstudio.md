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

   Если не можете найти их, скопируйте из внешнего накопителя на ваш телефон.

8. Проверьте параметры оптимизации батареи и отключите их снова.
9. Keep on looping.

## Ошибка синхронизации Gradle
Синхронизация Gradle может не работать по различным причинам. Когда выпадает сообщение о том, что синхронизация не удалась, откройте вкладку "Build" (1) в нижней части Android Studio и проверьте, какое отображается сообщение об ошибке (2).

  ![Отказ Gradle](../images/studioTroubleshooting/07_GradleSyncFailed2.png)

Ниже перечислены обычные сбои в синхронизации:
* [Непринятые изменения](troubleshooting_androidstudio-uncommitted-changes)
* [Нет кэшированной версии...](troubleshooting_androidstudio-could-not-resolve-no-cached-version)
* [Для Android Gradle требуется Java 11](troubleshooting_androidstudio-android-gradle-plugin-requires-java-11-to-run)

*Важно*: После того, как будет устранена конкретная проблема, следует запустить [синхронизацию gradle ](troubleshooting_androidstudio-gradle-resync) снова.

(troubleshooting_androidstudio-uncommitted-changes)=
### Непринятые изменения

Если получено такое сообщение об ошибке

![Незафиксированные изменения Gradle](../images/studioTroubleshooting/02_GradleUncommitedChanges.png)

#### Шаг 1 - Проверьте установку git
  * Откройте вкладку терминала (1) в нижней части Android Studio и скопируйте следующий текст и вставьте или введите в терминал.
    ```
    версия git
    ```

    ![Версия Gradle Git](../images/studioTroubleshooting/03_GitVersion.png)

    Примечание: Между git и version есть пробел и два дефиса!

  * Вы получите сообщение о том, какая версия git установлена, как на снимке экрана выше. В этом случае перейдите к [Шагу 2](troubleshooting_androidstudio-step-2-check-for-uncommitted-changes).

  * Если вы получите сообщение
    ```
    Git: команда не найдена
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

  * В Android Studio откройте вкладку Commit (1) слева. ![Вкладка Commit: Незафиксированные изменения](../images/studioTroubleshooting/04_CommitTabWithChanges.png)
  * Вы увидите либо "Изменения по умолчанию" (2) или "Неверсионные файлы" (3):

    * Для "Default changeset" вы вероятно обновили gradle или по ошибке изменили содержимое файла.

    * Щелкните правой кнопкой мыши на "Изменения по умолчанию" и выберите "Отмена"

      ![Вкладка Commit: Откат изменений](../images/studioTroubleshooting/05_CommitTabRollback.png)

    * Файлы снова загрузятся с Git сервера. Если других изменений во вкладке Commit нет, перейдите к [Шагу 3](troubleshooting_androidstudio-step-3-gradle-resync).

  * Если вы видите "Неверсионные файлы", возможно вы храните вы файлы в каталоге источника кода, которым место где-то еще, например ваш файл ключа.

    * При помощи обычного файлового проводника на компьютере вырежьте и вставьте этот файл в другое место хранения.

    * Вернитесь к Android Studio и нажмите кнопку Обновить (4) на вкладке Commit, чтобы убедиться, что файл больше не хранится в каталоге AAPS.

      Если других изменений во вкладке Commit нет, перейдите к [Шагу 3](troubleshooting_androidstudio-step-3-gradle-resync).


(troubleshooting_androidstudio-step-3-gradle-resync)=

#### Шаг 3: Пересинхронизация Gradle (повторно)

Следуйте инструкциям на [Gradle Resync](troubleshooting_androidstudio-step-3-gradle-resync).

(troubleshooting_androidstudio-android-gradle-plugin-requires-java-11-to-run)=

### Incompatible version of Android Gradle plugin

  If you experience the following error message

  ![Incompatible version of Android Gradle plugin](../images/studioTroubleshooting/15_InkompatibelAndroidGradlePlugin.png)

  You are using an outdated version of Android Studio. In the menu, go to Help > Check for updates and install any updates of Android Studio and its plugins that are found.

### Для Android Gradle требуется Java 17

  Вы можете столкнуться с этой ошибкой:

  ![Для Android Gradle требуется Java 17](../images/studioTroubleshooting/11_GradleJDK.png)

  Нажмите на "Настройки Gradle" (1), чтобы перейти к настройкам.

  Если у вас нет ссылки на "Настройки Gradle", откройте настройки Gradle вручную выбрав вкладку "Gradle" на правой границе (1), выберите значок инструментов (2) и там пункт 'Gradle Settings' (3).

  ![Настройки Gradle](../images/studioTroubleshooting/09_GradleSettings.png)

  Когда вы откроете диалог настроек Gradle, откройте параметры (1) в меню "Gradle JDK" и выберите "jbr-17" (2),, который должен быть расположен в папке установки Android Studio.

  ![Настройки Gradle](../images/studioTroubleshooting/12_GradleSettingsJDK.png)

  Нажмите "OK" для сохранения и закрытия диалогового окна настроек.

  *Важное*: Если вы не видите настройки "Gradle JDK", возможно, вы не обновили Android Studio. Убедитесь, что вы используете Android Studio 2022.3 Giraffe) или новее.

  Теперь вам нужно запустить [Gradle Resync](troubleshooting_androidstudio-step-3-gradle-resync)

(troubleshooting_androidstudio-could-not-resolve-no-cached-version)=

### Не удалось разрешить/Нет кэшированной версии

  Вы можете столкнуться с этой ошибкой:

    ![Не удалось разрешить... Нет кэшированной версии](../images/studioTroubleshooting/08_NoCachedVersion.png)

  * С правой стороны откройте вкладку Gradle (1).

    Убедитесь, что кнопка, показанная на (2), *НЕ* выбрана.

    ![Автономный режим Gradle](../images/studioTroubleshooting/10_GradleOfflineMode.png)

  * Теперь вам нужно запустить [Gradle Resync](troubleshooting_androidstudio-step-3-gradle-resync)

(troubleshooting_androidstudio-unable-to-start-daemon-process)=
### Не удается запустить демон процесс

  Если вы видите подобное сообщение об ошибке, вы, вероятно, используете ОС Windows 10, 32-bit. Это не поддерживается Android Studio 3.5.1 и выше, и, к сожалению, разработчик AAPS. ничего не может сделать.

  В Windows 10 следует использовать 64-битную операционную систему.

  There are a lot of manuals on the internet how to determine wether you have a 32-bit or 64-bit OS - i.e. [this one](https://support.microsoft.com/en-us/windows/32-bit-and-64-bit-windows-frequently-asked-questions-c6ca9541-8dce-4d48-0415-94a3faa2e13d).

  ![снимок экрана не удалось запустить процесс демона](../images/AndroidStudioWin10_32bitError.png)

### Повторная синхронизация Gradle

  Если вы все еще видите сообщение о том, что синхронизация gradle не удалась, выберите "Повторить попытку". ![Сбой режима проверки синхронизации Gradle](../images/studioTroubleshooting/01_GradleSyncFailed.png)


  Если это сообщение исчезло, можете запустить его вручную:

  * Откройте вкладку Gradle (1) на правой границе Android Studio.

    ![Перезагрузка Gradle](../images/studioTroubleshooting/06_GradleResyncManually.png)

  * Щелкните правой кнопкой мыши по AAPS (2)

  * Нажмите на "Перезагрузить Gradle Project" (3)

## Generate Signed APK успешно сгенерировано с 0 вариантами сборки

Когда генерируете подписанное приложение, то можете получить уведомление об успешном завершении, но вариантов сборки - 0:

![APK создан с 0 вариантами сборки](../images/studioTroubleshooting/14_BuildWith0Variants.png)

Это неверное предупреждение. Проверьте каталог, выбранный вами как "Целевая папка" для сборки (шаг [Сгенерировать Подписанные APK](Building-APK-generate-signed-apk)) и вы найдете здесь сгенерированный apk!


## Приложение было создано с предупреждениями компилятора/kotlin

Если ваша сборка успешно завершена, но получено предупреждения компилятора или kotlin (обозначенные желтым или синим восклицательным знаком), то эти предупреждения можно просто проигнорировать.

 ![Gradle завершен с предупреждениями](../images/studioTroubleshooting/13_BuildWithWarnings.png)

Приложение собрано успешно и может быть перенесено на телефон!


## Ключ создан с ошибками

При создании нового хранилища ключей для сборки подписанного APK в Windows может появиться следующее сообщение об ошибке

![Ключ создан с ошибками](../images/AndroidStudio35SigningKeys.png)

Это, кажется, ошибка в Android Studio 3.5.1 и в среде Java в Windows. Ключ создается правильно, но рекомендация выводится как ошибка. В настоящее время это можно игнорировать.


## AAPS не получает данные мониторинга CGM

* Если вы используете пропатченное приложение Dexcom G6: это приложение устарело. Вместо этого используйте самостоятельно собранное приложение [BYODA](DexcomG6-if-using-g6-with-build-your-own-dexcom-app).

* Если вы используете xDrip+: Определите приемник, как описано [на странице настроек xDrip+ ](xdrip-identify-receiver).


## Приложение не установлено

![приложение не установлено](../images/Update_AppNotInstalled.png)

* Убедитесь, что вы передали файл «full-release.apk» на телефон.
* Если на телефоне появилось сообщение "приложение не установлено", то выполните следующее:

1. [Экспорт настроек](../Usage/ExportImportSettings) (уже установленной на телефоне версии AAPS)
2. Удалите AAPS с телефона.
3. Включите режим самолета & выключите bluetooth.
4. Установите новую версию («app-full-release.apk»)
5. [Выполните импорт настроек](../Usage/ExportImportSettings)
6. Снова включите Bluetooth и отключите режим самолета

## Приложение установлено, но старая версия

Если вы успешно построили приложение, передали его на ваш телефон и установили его, но номер версии остается прежним, то вы могли пропустить шаг слияния в [инструкции по обновлению](Update-to-new-version-update-your-local-copy)

## Ничего из вышеперечисленного не сработало

Если вышеперечисленные советы не помогли попробуйте заново начать сборку приложения:

1. [Экспорт настроек](../Usage/ExportImportSettings) (уже установленной на телефоне версии AAPS)

2. Подготовьте пароль ключа и пароль хранилища. В случае, если вы забыли пароли, вы можете попытаться найти их в файлах проекта, как описано [здесь](https://youtu.be/nS3wxnLgZOo).

    Или просто создайте новый файл хранения ключей.

3. Соберите приложение с нуля, как описано [здесь](Building-APK-download-AAPS-code).

4. Когда вы успешно собрали APK, удалите существующее приложение с телефона, перенесите новое приложение на телефон и установите.
5. [Импортируйте настройки ](../Usage/ExportImportSettings) для восстановления целей и конфигурации.
6. Проверьте параметры оптимизации батареи и отключите их снова.

## Сценарий худшего варианта

Если даже создание приложения с нуля не решает проблему, попробуйте полностью удалить Android Studio. Некоторые пользователи сообщили, что это решило проблему.

**Деинсталлируйте все файлы, связанные с Android Studio.**Если не полностью удалить Android Studio со всеми скрытыми файлами, деинсталляция может привести к новым проблемам, а не к решению существующих. Руководства по полной деинсталляции можно найти в Интернете, напр.

[https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10](https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10).

Заново с нуля установите Android Studio как описано [здесь](Building-APK-install-android-studio).
