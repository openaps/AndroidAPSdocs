# Обновление до новой версии или ветки

<font color="#FF0000"><b>Важное замечание: Начиная с версии 2.3 следует использовать git для обновления. Обновление с zip-файла больше не работает.</font></b>.

***Примечание***: Обновляясь до AndroidAPS 2.3, рекомендуется использовать версию [Android Studio 3.4](https://developer.android.com/studio/archive?), т. к. с последней версией не работает.

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

и затем выход (или 'выход через новую ветку', если просто 'выход' недоступен.)

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

Введите путь к магазину ключей, введите пароль для магазина ключей, выберите название ключа и введите пароль на ключ.

Выберите «Запомнить пароли».

Затем нажмите "Далее".

![Key store path](../images/KeystorePathUpdate.PNG)

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

Выберите "Разрешить из этого источника". После установки вы можете отключить его снова.

![Установка приложений из неизвестных источников](../images/Installation_Screenshot_49-50.png)

Последний шаг - нажать на файл APK, который я получил через Gmail и установить приложение. Если APK не установливается и у вас более старая версия AndroidAPS на телефоне, подписанная другим ключом, то нужно сначала удалить более старое приложение; при этом не забудьте экспортировать ваши настройки!

Да, все получилось, теперь можно начать настройку AndroidAPS (CGMS, помпа) и т. д.

## Проверить версию AAPS на телефоне

You can check the AAPS version on your phone by clicking the three dots menu on the top right and then about.

![AAPS version installed](../images/Update_VersionCheck.png)

# Устранение неполадок

## Предупреждение компилятора Kotlin

If build completed successfully but you get Kotlin compiler warnings then just ignore these warnings.

App was build successfully and can be transferred to phone.

![ignore Kotline compiler warning](../images/GIT_WarningIgnore.PNG)

## Не удалось загрузить… / Работа оффлайн

If you get a failure message like this

![Warning could not download](../images/GIT_Offline1.jpg)

make sure that ‘Offline work’ is disabled.

File -> Settings

![Settings offline work](../images/GIT_Offline2.jpg)

## Неодобренные изменения

If you receive failure message like

![Failure uncommitted changes](../images/GIT_TerminalCheckOut0.PNG)

### Вариант 1

* В Android Studio выберите VCS -> GIT -> Сбросить HEAD ![Сбросить HEAD](../images/GIT_TerminalCheckOut3.PNG)

### Вариант 2

* Скопируйте «git checkout --» в буфер обмена (без кавычек)
* Переключитесь на терминал в Android Studio (слева с нижней стороны окна Android Studio) ![Терминал Android Studio](../images/GIT_TerminalCheckOut1.PNG)

* Вставьте скопированный текст и нажмите ввод ![Проверка GIT успешно завершена](../images/GIT_TerminalCheckOut2.jpg)

## Приложение не установлено

![phone app note installed](../images/Update_AppNotInstalled.png)

* Убедитесь, что вы передали файл «full-release.apk» на ваш телефон.
* Если на вашем телефоне появилось сообщение "приложение не установлено", то выполните следующее: 
  1. [Экспорт настроек](../Usage/Objectives#export-import-settings) (уже установленной на телефоне версии AAPS)
  2. Удалите AAPS с телефона.
  3. Включите режим самолета & выключить bluetooth.
  4. Установите новую версию («app-full-release.apk»)
  5. [Выполните импорт настроек](../Usage/Objectives#export-import-settings)
  6. Снова включите Bluetooth и отключите режим самолета

## Приложение установлено, но старая версия

If you build the app successfully, transferred it to your phone and installed it successfully but the version number stays the same then you might have missed the merging step in the [update manual](…/Installing-AndroidAPS/Update-to-new-version.html#updating-branch-from-github).

## Ничего из вышеперечисленного не сработало

If non of the above tips helped you might consider building the app from scratch:

1. [Экспорт настроек](../Usage/Objectives#export-import-settings) (уже установленной на телефоне версии AAPS)
2. Приготовьте пароль ключа и пароль для хранения ключа Если вы забыли пароли, вы можете найти их в файлах проекта, как описано [здесь](https://youtu.be/nS3wxnLgZOo).
3.     Запомните путь к месту хранения ключа
      в Android Studio Build -> Генерировать подписанный APK
      ![Путь к месту хранения ключа](..../images/KeystorePath.PNG)
      
  
  4. Постройте приложение с нуля, как описано [здесь](…/Installing-AndroidAPS/Building-APK.html#download-code-and-additional-components). Используйте существующий ключ и место хранения ключей.
4. Когда вы успешно собрали APK, удалите существующее приложение с телефона, перенесите новое приложение на ваш телефон и установите.
5. [Выполните импорт настроек](../Usage/Objectives#export-import-settings)

## Сценарий худшего варианта

In case even building the app from scratch does not solve your problem you might want to try to uninstall Android Studio completely. Some Users reported that this solved their problem.

Make sure to uninstall all files associated with Android Studio. Manuals can be found online i.e. <https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10>.

Install Android Studio from scratch as described [here](/Installing-AndroidAPS/Building-APK#install-android-studio) and **do not update gradle**.