# Создание андроид-приложения (APK)

## Постройте сами вместо того, чтобы загружать

**AndroidAPS недоступен для скачивания из-за законодательства, касающегося медицинских устройств. Построить приложение для собственного использования вполне законно, но вам не разрешается передавать копию другим! См. раздел [ FAQ ](../Getting-Started/FAQ.md).**

## ## Важные Примечания

* Используйте **[ Android Studio версии 3.6.1 ](https://developer.android.com/studio/)** или новее для построения apk.
* [Windows 10 для 32-разрядных систем](../Installing-AndroidAPS/troubleshooting_androidstudio#unable-to-start-daemon-process) не поддерживается в Android Studio 3.6.1.

** Конфигурация по требованию ** не поддерживается текущей версией модуля Android Gradle!

Если сборка выполнена с ошибкой, относящейся к "выборочной конфигурации", можно сделать следующее:

* Откройте окно настроек, нажав Файл > Настройки (на Mac, Android Studio > Настройки).
* В левой панели нажмите Сборка, Выполнение, Развертывание > Компилятор.
* Снимите флажок с ячейки "выборочная конфигурация".
* Нажмите Применить или OK.

* * *

### Эта статья разделена на две части.

* В обзорной части есть объяснение того, какие шаги необходимы для создания файла APK.
* В пошаговой инструкции вы найдете снимки экранов установки. Поскольку версии Android Studio - среды разработки программного обеспечения, в которой мы будем создавать APK - меняются очень быстро, точного соответствия вашей сборке вы не увидите, но общее представление о том, как это делается, получите. Android Studio работает на Windows, Mac OS X и Linux, и между каждой платформой возможны незначительные различия. Если вы обнаружите, что что-то важное выполняется неправильно или отсутствует, пожалуйста, сообщите в группе facebook "AndroidAPS users" или в чате Gitter [Android APS](https://gitter.im/MilosKozak/AndroidAPS) или [AndroidAPSwiki](https://gitter.im/AndroidAPSwiki/Lobby) чтобы мы могли устранить проблему.

## Общие замечания

В целом, шаги, необходимые для создания файла APK таковы:

1. [Установите Git](../Installing-AndroidAPS/git-install.rst)
2. [Установите Android Studio](../Installing-AndroidAPS/Building-APK#install-android-studio)
3. [Задайте путь к git в параметрах Android Studio](../Installing-AndroidAPS/Building-APK#set-git-path-in-preferences)
4. [Скачайте код AndroidAPS](../Installing-AndroidAPS/Building-APK#download-androidaps-code)
5. [Загрузите Android SDK](../Installing-AndroidAPS/Building-APK#download-android-sdk)
6. [Постройте приложение ](../Installing-AndroidAPS/Building-APK#generate-signed-apk) (сгенерируйте подписанный apk)
7. [Перенесите файл apk на телефон](../Installing-AndroidAPS/Building-APK#transfer-apk-to-smartphone)
8. [Идентифицируйте ресивер при использовании xDrip+](../Installing-AndroidAPS/Building-APK#identify-receiver-if-using-xdrip)

## Пошаговое руководство

Подробное описание шагов, необходимых для создания файла APK.

## Установите git (если у вас его нет)

Следуйте инструкциям на странице установки [git](../Installing-AndroidAPS/git-install.rst).

## Установите Android Studio

Cледующие снимки экрана были сделаны c Android Studio версии 3.6.1. Экран может выглядеть несколько иначе в зависимости от используемой версии Android Studio. Но следует постараться найти свое решение установки. [Помощь от сообщества здесь](../Where-To-Go-For-Help/Connect-with-other-users.md).

Одна из наиболее важных заповедей при установке Android Studio: ** Будьте терпеливы! ** Во время установки и настройки Android Studio загружает многие элементы, которые отнимают время.

Установите [ Android Studio ](https://developer.android.com/studio/install.html) и настройте при первом запуске.

Выберите "Не импортировать настройки", так как вы не использовали их раньше.

![Do not import settings](../images/AndroidStudio361_01.png)

Решите, хотите ли вы совместно использовать данные с Google или нет.

![Share data with Google](../images/AndroidStudio361_02.png)

На следующем экране нажмите кнопку "Далее".

![Welcome screen](../images/AndroidStudio361_03.png)

Выберите "Стандартная" установка и нажмите "Далее".

![Standard installation](../images/AndroidStudio361_04.png)

Для интерфейса выберите тему, которая вам нравится. (В этом руководстве мы использовали "Светлую".) Затем нажмите кнопку "Далее". Это всего лишь цветовая схема. Можете выбрать любую (напр. Darcula для темного режима). Этот выбор не влияет на построение APK.

![UI color scheme](../images/AndroidStudio361_05.png)

Нажмите "Далее" в диалоге "Проверить настройки".

![Verify settings](../images/AndroidStudio361_06.png)

Подождите, пока Android Studio скачивает дополнительные компоненты и будет терпеливы. После того, как все загрузится кнопка "Готово", станет синей. Теперь нажмите на кнопку.

![Downloading components](../images/AndroidStudio361_07.png)

## Задайте путь к git в параметрах

Убедитесь, что [ git установлен ](../Installing-AndroidAPS/git-install.rst) на вашем компьютере.

На экране приветствия Android Studio нажмите на маленький треугольник (1. на следующем снимке экрана) и выберите "Настройки" (2.).

![Android Studio settings from welcome screen](../images/AndroidStudio361_08.png)

### Windows

* Нажмите на маленький треугольник рядом с Контролем Версий (1.) чтобы открыть подменю.
* Нажмите Git (2.).
* Убедитесь, что выбран метод обновления "Слияние" (merge) (3.).
* Проверьте, может ли Android Studio найти путь к файлу git.exe автоматически, нажав кнопку "Тест" (4.)

![Android Studio settings](../images/AndroidStudio361_09.png)

* Если автоматическая настройка будет успешной, то будет показана версия git.
* Нажмите кнопку "OK" в диалоговом окне (1.) и "OK" в окне параметров (2.).

![Automatic git installation succeeded](../images/AndroidStudio361_10.png)

* В случае, если файл git.exe не найден, нажмите кнопку "OK" в диалоговом окне (1), а затем кнопку с тремя точками (2.).
* Используйте функцию [ поиск ](https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html) в проводнике Windows для поиска "git.exe", если вы не уверены в том, где его можно найти. Вы ищете файл git.exe, находящийся в папке \bin\.
* Выберите путь к файлу git.exe и убедитесь, что вы выбрали папку ** \bin\ ** (3.) и нажмите кнопку "OK" (4).
* Закройте окно параметров, нажав кнопку "OK" (5.).

![Automatic git installation failed](../images/AndroidStudio361_11.png)

* **Перезагрузите компьютер, чтобы обновить системную среду.**

### Mac

* Любая версия git должна работать. Например <https://git-scm.com/download/mac>.
* Используйте homebrew для установки git: ```$ brew install git```.
* Подробности об установке git см. в [официальной документации git ](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
* Если вы устанавливаете git через homebrew, то нет необходимости изменять какие-либо настройки. На всякий случай: Их можно найти здесь: Android Studio - Настройки.

## Скачайте код AndroidAPS

* **Если вы еще не перезагрузили компьютер после настройки пути к git в параметрах, сделайте это сейчас. Необходимо обновить системную среду.**
* На экране приветствия Android Studio щелкните на маленьком треугольнике справа от "Изъять проект из системы управления версиями" (1.).
* Выберите "Git" (2).

![Check out project from version control from welcome screen](../images/AndroidStudio361_12.png)

* Если вы уже открыли Android Studio и не видите экран приветствия, то выберите File (1.) > New (2.) > Project from Version Control... (3.) > Git (4.).

![Check out project from version control within Android Studio](../images/AndroidStudio361_13.png)

* Заполните URL-адрес главного репозитория AndroidAPS ("https://github.com/MilosKozak/AndroidAPS") и нажмите "clone" (клонировать).
* Выберите каталог для сохранения клонированного кода.
* Нажмите кнопку "Test" (2.).
* Если тест не может быть завершен успешно, проверьте еще раз адрес, и нажмите "Проверить".
* Если URL-адрес введен правильно появится сообщение "подключение успешно" (3.).
* Нажмите кнопку "Клонировать" (4.).

![Clone repository](../images/AndroidStudio361_14.png)

* Не нажимайте "Background", пока клонируется репозиторий!

![Clone repository - no background action](../images/AndroidStudio361_15.png)

* После того, как репозиторий клонирован успешно, откройте локальную копию, нажав кнопку "Да".

![Open repository](../images/AndroidStudio361_16.png)

* В правом нижнем углу появится информация о том, что в Android Studio выполняются фоновые задачи.

![Background tasks](../images/AndroidStudio361_17.png)

* Предоставьте доступ, если ваш брандмауэр просит разрешения.

![Firewall permission java](../images/AndroidStudio361_18.png)

* После завершения фоновых задач вы, вероятно, увидите следующее сообщение об ошибке:

![SDK licence](../images/AndroidStudio361_19.png)

## Загрузите Android SDK

* Нажмите Файл > Настройки.

![Open settings](../images/AndroidStudio361_20.png)

* Нажмите на маленький треугольник рядом с Appearance & Behaviour (1.).
* Щелкните на небольшом треугольнике рядом с System Settings (2.) и выберите Android SDK (3.)
* Установите флажок слева от "Android 9.0 (Pie)" (4.) (API Level 28).

![SDK settings](../images/AndroidStudio361_21.png)

* Подтвердите изменения, нажав кнопку OK.

![Confirm SDK changes](../images/AndroidStudio361_22.png)

* Примите лицензионное соглашение (1.) и нажмите "Далее" (2.).

![Accept SDK licence](../images/AndroidStudio361_23.png)

* Дождитесь завершения установки.

![Wait during SDK installation](../images/AndroidStudio361_24.png)

* После завершения установки SDK кнопка "Finish" станет синей. Нажмите на кнопку.

![Finish SDK installation](../images/AndroidStudio361_25.png)

* Android Studio может рекомендовать обновить систему gradle. **Не обновляйте gradle!** Это может привести к трудностям!
* Если вы видите информацию в нижней правой части окна Android Studio, что модуль Android Gradile готов к обновлениям, щелкните по тексту "update" (1.) и в диалоговом окне выберите "Don't remind me again for this project" (2.).

![No cradle update](../images/AndroidStudio361_26.png)

## Создание подписанного APK

Signing means that you indicate your app to be your own creation but in a digital way as a kind of digital fingerprint within the app itself. Это необходимо потому, что Android имеет правило, согласно которому принимается только подписанный код для запуска по соображениям безопасности. For more information on this topic, follow [this link](https://developer.android.com/studio/publish/app-signing.html#generate-key).

* Click "Build" in the menu bar and select "Generate Signed Bundle / APK...".

![Build apk](../images/AndroidStudio361_27.png)

* Select "APK" (1.) instead of "Android App Bundle" and click "Next" (2.).

![APK instead of bundle](../images/AndroidStudio361_28.png)

* Make sure that module is set to "app" (1.).
* Click "Create new..." (2.) to start creating your key store.
    
    A key store in this case is nothing more than a file in which the information for signing is stored. It is encrypted and the information is secured with passwords.

![Create key store](../images/AndroidStudio361_29.png)

* Click the folder symbol (1.) to select your key store path. 
* Select the path where your key store shall be saved (2.). **Do not save in same folder as project. You must use a different directory!** One option might be your home folder.
* Type a file name for your key store (3.).
* Click "OK" (4.).
* Passwords for key store and key do not have to be very sophisticated. Make sure to remember those or make a note in a safe place. In case you will not remember your passwords in the future you see [troubleshooting for lost key store](../Installing-AndroidAPS/troubleshooting_androidstudio#lost-keystore).
* Enter (5.) and confirm (6.) the password for your key store.
* Do the same for your key (7. + 8.).
* Validity (9.) is 25 years by default. You do not have to change the default value.
* First and last name must be entered (10.). All other information is optional.
* Click "OK" (11.) when you are done.

![Key store path](../images/AndroidStudio361_30.png)

* Make sure the box to remember passwords is checked (1.). So you don't have to enter them again next time you build the apk (i.e. when updating to a new AndroidAPS version).
* Click "Next" (2.).

![Remember passwords](../images/AndroidStudio361_31.png)

* Select build variant "fullRelease" (1.). 
* Check boxes V1 and V2 for signature versions (2.).
* Click "Finish". (3.)

![Finish build](../images/AndroidStudio361_32.png)

* Android Studio will display the information "APK(s) generated successfully..." after build is finished.
* In case build was not successful refer to the [troubleshooting section](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).
* Easiest way to find the apk is to click on "Event log".

![Build successfully - event log](../images/AndroidStudio361_33.png)

* In the event log section click "locate".

![Event log - locate apk](../images/AndroidStudio361_34.png)

* app-full-release.apk is the file you are looking for.

![File location apk](../images/AndroidStudio361_35.png)

## Перенос приложения на смартфон

Easiest way to transfer app-full-release.apk to your phone is via [USB cable or Google Drive](https://support.google.com/android/answer/9064445?hl=en). Please note that transfer by mail might cause difficulties and is not the preferred way.

On your phone you have to allow installation from unknown sources. Manuals how to do this can be found on the internet (i.e. [here](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) or [here](https://www.androidcentral.com/unknown-sources)).

## Идентифицируйте ресивер при использовании xDrip+

[See xDrip+ page](../Configuration/xdrip#identify-receiver)

## Устранение неполадок

See separate page [troubleshooting Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).