# Обновление до новой версии или ветки

<font color="#FF0000"><b>Важное замечание: Начиная с версии 2.3 следует использовать git для обновления. Обновление с zip-файла больше не работает.</font></b>

## Установите git (если у вас его нет)

### Windows

* Любая версия git должна работать. Например <https://git-scm.com/download/win>
* Убедитесь, что знаете путь установки. Он понадобится на следующем шаге.
  
  ![Путь установки Git](../images/Update_GitPath.png)

* Укажите Studio, где находится git.exe: Файл - Настройки
  
  ![Android Studio - открыть настройки](../images/Update_GitSettings1.png)

* В следующем окне: Управление версиями - Git

* Выберите правильный путь: .../Git<font color="#FF0000"><b>/bin</b></font>

* Убедитесь, что выбран метод обновления "Объединение".
  
  ![Android Studio - путь GIT](../images/Update_GitSettings2a.png)

### Mac

* Любая версия git должна работать. Например <https://git-scm.com/download/mac>
* Используйте homebrew для установки git: ```$ brew install git```.
* Подробности об установке git см. в [официальной git документации](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
* Если вы устанавливаете git через homebrew, то нет необходимости изменять какие-либо настройки. На всякий случай: Их можно найти здесь: Android Studio - Настройки.

## Обновите свою локальную копию

* Нажмите: VCS->Git->Fetch
  
  ![Android Studio - получение GIT](../images/Update_Fetch.png)

## Выберите ветку

* Если вы хотите изменить ветку, выберите другую ветку из выпадающего меню: master (latest release) или другую версию (см. ниже)
  
  ![](../images/UpdateAAPS1.png)

и затем выход (Вы можете использовать 'выход новой ветки', если 'выход' недоступен.)

     ![](../images/UpdateAAPS2.png)
    

## Обновление ветки из Github

* Нажмите Ctrl+T, выберите способ слияния и нажмите OK
  
  ![](../images/merge.png)

В трее вы увидите зеленое сообщение о обновленном проекте

## Создание подписанного APK

<!--- Text is maintained in page building-apk.md ---> В меню выберите "Build"(выполнить сборку) и затем "Generate Signed Bundle / APK..."(создать подписанный пакет программ). (Меню в Android Studio изменилось с сентября 2018 года. В более старых версиях выберите в меню «выполнить сборку» и «Генерировать подписанный APK...».)

  
Подписание означает, что вы подписываете ваше сгенерированное приложение цифровой подписью. Это необходимо потому, что Android имеет правило, согласно которому принимается только подписанный код для запуска по соображениям безопасности. Для получения дополнительной информации по этой теме перейдите по ссылке [здесь](https://developer.android.com/studio/publish/app-signing.html#generate-key). Безопасность - это глубокая и сложная тема, нам она сейчас не нужна.

![Снимок экрана 39a](../images/Installation_Screenshot_39a.PNG)

В следующем диалоговом окне выберите "APK" вместо "Android App Bundle" и нажмите кнопку "Далее".

![Снимок экрана 39b](../images/Installation_Screenshot_39b.PNG)

Выберите "app" (приложение) и нажмите "Next" (далее).

![Снимок экрана 40](../images/Installation_Screenshot_40.png)

Введите путь к магазину ключей, введите пароль для магазина ключей, выберите имя ключа и введите пароль на ключ.

Выберите «Запомнить пароли».

Затем нажмите "Далее".

![Путь к магазину ключей](../images/KeystorePathUpdate.PNG)

Выберите "full" (полный) в качестве атрибута для сгенерированного приложения. Выберите V1 "Jar Signature" (V2 необязательно) и нажмите "Finish" (закончить). В дальнейшем может пригодиться следующая информация.

* 'Release' должен быть вашим выбором по умолчанию для "Build Type"(типа сборки), 'Debug' только для программистов.
* Выберите тип сборки, который хотите создать. 
  * полный (с автоматически принимаемыми рекомендациями в закрытом цикле)
  * открытый цикл (рекомендации, адресованные пользователю, выполняются вручную)
  * управление помпой (дистанционное управление помпой, без функционирования цикла)
  * nsclient (например, отображаются данные другого пользователя, могут добавляться записи портала лечения/назначений)

![Снимок экрана 44](../images/Installation_Screenshot_44.png)

В журнале событий вы увидите, что подписанное приложение (APK) было создано успешно.

![Снимок экрана 45](../images/Installation_Screenshot_45.png)

Нажмите на ссылку "Найти" в журнале событий.

![Снимок экрана 46](../images/Installation_Screenshot_46.png)

## Перенос приложения на смартфон

<!--- Text is maintained in page building-apk.md ---> Открывается окно файлового менеджера. Может выглядеть немного иначе в вашей системе, поскольку я использую Linux. В Windows это будет File Explorer (проводник), а на Mac OS X Finder (поисковик). Там вы увидите каталог с созданным APK файлом. К сожалению, это неверное место, так как "wear-release.apk" не является подписанным приложением, которое мы ищем.

![Снимок экрана 47](../images/Installation_Screenshot_47.png)

Перейдите к папке AndroidAPS/app/full/release, чтобы найти файл "app-full-release.apk". Перенесите этот файл на смартфон Android. Вы можете сделать это по-своему, напр. загрузкой в облако, переносом с компьютера по кабелю или используя электронную почту. В этом примере я использую Gmail, так как для меня такой перенос привычнее. Для установки на нашем смартфоне следует дать системе Android разрешение сделать установку из Gmail, которая обычно запрещена. Если переносите установщик другим способом, поступите соответственно.

![Снимок экрана 48](../images/Installation_Screenshot_48.png)

В настройках смартфона есть область "установка неизвестных приложений" где я даю Gmail право устанавливать APK файлы, которые я получаю через Gmail.

Выберите "Разрешить из этого источника". After the installation, you can disable it again.

![Установка приложений из неизвестных источников](../images/Installation_Screenshot_49-50.png)

The last step is to press on the APK file I got via Gmail and install the app. If the APK does not install and you have an older version of AndroidAPS on your phone that was signed with a different key then you will need to uninstall this first, remember to export your settings if so!

Yeah, you got it and can now start with configuring AndroidAPS for your use (CGMS, insulin pump) etc.

## Проверить версию AAPS на телефоне

Вы можете проверить версию AAPS на вашем телефоне, нажав на меню трех точек сверху справа "о приложении".

![Версия AAPS установлена](../images/Update_VersionCheck.png)

# Устранение неполадок

## Kotlin compiler warning

Если сборка завершена успешно, но вы получаете предупреждения компилятора Kotlin, просто проигнорируйте эти предупреждения.

Приложение успешно построено и может быть передано на телефон.

![игнорировать предупреждение компилятора Kotline](../images/GIT_WarningIgnore.PNG)

## Не удалось загрузить… / Работа оффлайн

Если вы получите сообщение об ошибке, как это

![Не удалось загрузить предупреждение](../images/GIT_Offline1.jpg)

убедитесь, что «Оффлайн работа» отключена.

Файл -> параметры

![Настройки автономной работы](../images/GIT_Offline2.jpg)

## Неодобренные изменения

Если вы получите сообщение об ошибке, как это

![Failure uncommitted changes](../images/GIT_TerminalCheckOut0.PNG)

### Option 1

* In Android Studio select VCS -> GIT -> Reset HEAD ![Reset HEAD](../images/GIT_TerminalCheckOut3.PNG)

### Option 2

* Copy ‘git checkout --’ to clipboard (without quote signs)
* Switch to Terminal in Android Studio (lower left side of Android Studio window) ![Android Studio Terminal](../images/GIT_TerminalCheckOut1.PNG)

* Paste copied text and press return ![GIT checkout success](../images/GIT_TerminalCheckOut2.jpg)

## App not installed

![phone app note installed](../images/Update_AppNotInstalled.png)

* Make sure you have transferred the “app-full-release.apk” file to your phone.
* If "App not installed" is displayed on your phone follow these steps: 
  1. [Export settings](../Usage/Objectives#export-import-settings) (in AAPS version already installed on your phone)
  2. Uninstall AAPS on your phone.
  3. Enable airplane mode & turn off bluetooth.
  4. Install new version (“app-full-release.apk”)
  5. [Выполните импорт настроек](../Usage/Objectives#export-import-settings)
  6. Turn bluetooth back on and disable airplane mode

## App installed but old version

If you build the app successfully, transferred it to your phone and installed it successfully but the version number stays the same then you might have missed the merging step in the [update manual](…/Installing-AndroidAPS/Update-to-new-version.html#updating-branch-from-github).

## None of the above worked

If non of the above tips helped you might consider building the app from scratch:

1. [Export settings](../Usage/Objectives#export-import-settings) (in AAPS version already installed on your phone)
2. Have your key password and key store password ready In case you have forgotten passwords you can try to find them in project files as described [here](https://youtu.be/nS3wxnLgZOo).
3.     Note down the path to your key store
      In Android Studio Build -> Generate Signed APK
      ![Key store path](../images/KeystorePath.PNG)
      
  
  4. Build app from scratch as described [here](…/Installing-AndroidAPS/Building-APK.html#download-code-and-additional-components). Use existing key and key store.
4. When you have build the APK successfully delete the exiting app on your phone, transfer the new apk to your phone and install.
5. [Выполните импорт настроек](../Usage/Objectives#export-import-settings)

## Worst case scenario

In case even building the app from scratch does not solve your problem you might want to try to uninstall Android Studio completely. Some Users reported that this solved their problem.

Make sure to uninstall all files associated with Android Studio. Manuals can be found online i.e. <https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10>.

Install Android Studio from scratch as described [here](/Installing-AndroidAPS/Building-APK#install-android-studio) and **do not update gradle**.