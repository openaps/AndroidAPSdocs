# Обновление до новой версии или ветки

## Постройте сами вместо того, чтобы загружать

**AndroidAPS недоступен для скачивания из-за законодательства, касающегося медицинских устройств. Построить приложение для собственного использования вполне законно, но вам не разрешается передавать копию другим! См. раздел [ FAQ ](../Getting-Started/FAQ.md).**

## Важные Примечания

* Пожалуйста, обновите приложение сразу же после выхода новой версии. You will receive an [information on the AndroidAPS home screen](../Installing-AndroidAPS/Releasenotes#release-notes) about the new version.
* Начиная с версии 2.3 для обновления требуется использовать git. Обновление с zip-файла больше не работает.
* As of version 2.7 repository location changed to <https://github.com/nightscout/AndroidAPS>. If you are not familiar with git the easiest way for update is remove directory with AndroidAPS and do a [new clone](../Installing-AndroidAPS/Building-APK.md).
* Please use [Android Studio Version 4.0.1](https://developer.android.com/studio/) or newer to build the apk.
* [Windows 10 32-bit systems](../Installing-AndroidAPS/troubleshooting_androidstudio#unable-to-start-daemon-process) are not supported by Android Studio 4.0.1.
* If you are using xDrip make sure to [identify the receiver](../Configuration/xdrip#identify-receiver).
* If you are using Dexcom G6 with the [patched Dexcom app](../Hardware/DexcomG6#if-using-g6-with-patched-dexcom-app) you will need the version from the [2.4 folder](https://github.com/dexcomapp/dexcomapp/tree/master/2.4).

## Пошаговая инструкция для опытных пользователей

Пропустите этот пункт, если вы обновляете в первый раз. Пошаговая инструкция для опытных пользователей. Следующим шагом будет [ установить git ](../Installing-AndroidAPS/git-install.rst), если у вас его еще нет.

Если вы уже обновили AAPS в предыдущих версиях и используете Windows PC, вы можете обновить его в четырех простых шагах:

1. [ Экспортируйте параметры ](../Usage/ExportImportSettings#how-to-export-settings) из существующей версии AAPS на вашем телефоне, чтобы обезопасить себя
2. [ Обновите локальную копию ](../Installing-AndroidAPS/Update-to-new-version#update-your-local-copy) (VCS-> Git-> Pull)
3. [ Создайте подписанное APK ](../Installing-AndroidAPS/Update-to-new-version#generate-signed-apk) (Выберите 'app', а не 'wear' на своем пути!)
4. В зависимости от источника ГК [BG source](../Configuration/BG-Source.rst) убедитесь, что [identify receiver](../Configuration/xdrip#identify-receiver) отмечен в xDrip или используйте модифицированное приложение Dexcom из [папки 2.4 ](https://github.com/dexcomapp/dexcomapp/tree/master/2.4).

## Установите git (если у вас его нет)

Следуйте инструкциям на странице установки [git](../Installing-AndroidAPS/git-install.rst).

## Обновите свою локальную копию

* As of version 2.7 repository location changed to <https://github.com/nightscout/AndroidAPS>. If you are not familiar with git the easiest way for update is remove directory with AndroidAPS and do a [new clone](../Installing-AndroidAPS/Building-APK.md).
* Click: VCS -> Git -> Pull
    
    ![Android Studio - GIT - Pull](../images/AndroidStudio361_Update01.png)

* Click Pull (no changes in dialog field)
    
    ![Android Studio - GIT - Pull 2](../images/AndroidStudio361_Update02a.png)

* Wait while download is in progress.
    
    ![Android Studio - Pull in progress](../images/AndroidStudio361_Update03.png)

* When done Android Studio will inform you that "all files are up-to-date".
    
    ![All files up to date](../images/AndroidStudio361_Update04.png)

## Создание подписанного APK

<!--- Text is maintained in page building-apk.md --->

* Нажмите "Build" в строке меню и выберите "Generate Signed Bundle / APK...".

![Построение apk](изображение::../images/AndroidStudio361_27.png)

* Выберите "APK" (1.) вместо "Android App Bundle" и нажмите кнопку "Далее" (2.).

![Apk вместо пакета](изображение::../images/AndroidStudio361_28.png)

* Убедитесь, что модуль имеет значение "app".
* Выберите путь к хранилищу ключей, нажав кнопку "Выбрать существующую...".
* Введите пароли для хранилища ключей и ключа.
* Если установлен флажок запомнить пароли, вам не придется их вводить. В том случае, если этот переключатель не был включен во время последней компоновки, и вы не можете запомнить эти пароли, обратитесь к разделу [ Устранение неполадок ](../Installing-AndroidAPS/troubleshooting_androidstudio#lost-keystore).
* Нажмите "Далее".

![Хранилище ключей](../images/AndroidStudio361_Update05.png)

* Выберите вариант компоновки "fullRelease" (1.). 
* Отметьте флажки V1 и V2 для подписи версий (2.).
* Нажмите ``Finish``. (3.)

![Завершение сборки](изображение::../images/AndroidStudio361_32.png)

* После завершения сборки Android Studio покажет информацию "APK (s) сгенерировано успешно ...".
* В случае, если сборка не удалась, обратитесь к разделу [поиск и устранение неисправностей ](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).
* Самый простой способ найти apk это нажать на кнопку "журнал событий".

![Построено успешно - журнал событий](изображение::../images/AndroidStudio361_33.png)

* В секции журнала событий нажмите «locate».

![Журнал событий - обнаружить apk](изображение::../images/AndroidStudio361_34.png)

* app-full-release.apk это файл, который вы ищете.

![Расположение файла apk](изображение::../images/AndroidStudio361_35.png)

## Перенос приложения на смартфон

Самый простой способ перенести приложение на ваш телефон - [через кабель USB или Google Drive](https://support.google.com/android/answer/9064445?hl=en). Обратите внимание, что передача по почте может вызвать трудности и не является предпочтительным способом.

На вашем телефоне необходимо разрешить установку из неизвестных источников. Инструкции, как это сделать, можно найти в интернете (например [здесь](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) или [здесь](https://www.androidcentral.com/unknown-sources)).

## Проверить версию AAPS на телефоне

Вы можете проверить версию AAPS на вашем телефоне, нажав на меню трех точек сверху справа "о приложении".

![Версия AAPS установлена](../images/Update_VersionCheck.p)

## Устранение неполадок

См. отдельную страницу [ устранение неполадок Android Studio ](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).