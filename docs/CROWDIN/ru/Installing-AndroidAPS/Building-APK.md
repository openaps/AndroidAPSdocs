# Создание андроид-приложения (APK)

## Постройте сами вместо того, чтобы загружать

**AndroidAPS недоступен для скачивания из-за законодательства, касающегося медицинских устройств. Построить приложение для собственного использования вполне законно, но вам не разрешается передавать копию другим! См. раздел [ FAQ ](../Getting-Started/FAQ.md).**

## Важные Примечания

* Используйте **[ Android Studio версии 4.1.1 ](https://developer.android.com/studio/)** или новее для построения apk.
* [Windows 10 для 32-разрядных систем](../Installing-AndroidAPS/troubleshooting_androidstudio#unable-to-start-daemon-process) не поддерживается в Android Studio 4.1.1.

** Конфигурация по требованию ** не поддерживается текущей версией модуля Android Gradle!

Если сборка выполнена с ошибкой, относящейся к "выборочной конфигурации", можно сделать следующее:

* Откройте окно настроек, нажав Файл > Настройки (на Mac, Android Studio > Настройки).
* В левой панели нажмите Сборка, Выполнение, Развертывание > Компилятор.
* Снимите флажок с ячейки "выборочная конфигурация".
* Нажмите Применить или OK.

## Recommended specification of computer for building apk file

<table class="tg">
  
<thead>
  <tr>
    <th class="tg-baqh">OS(Only 64 bit)</th>
    <th class="tg-baqh">Windows 8 or higher</th>
    <th class="tg-baqh">Mac OS 10.14 or higher</th>
    <th class="tg-baqh">Any Linux supports Gnome, KDE, or Unity DE;&nbsp;&nbsp;GNU C Library 2.31 or later</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-baqh"><p align="center">CPU(Only 64 bit)</td>
    <td class="tg-baqh">x86_64 CPU architecture; 2nd generation Intel Core or newer, or AMD CPU with support for a <br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-windows" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Windows Hypervisor</span></a></td>
    <td class="tg-baqh">ARM-based chips, or 2nd generation Intel Core or newer with support for <br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-mac" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Hypervisor.Framework</span></a></td>
    <td class="tg-baqh">x86_64 CPU architecture; 2nd generation Intel Core or newer, or AMD processor with support for AMD Virtualization (AMD-V) and SSSE3</td>
  </tr>
  <tr>
    <td class="tg-baqh"><p align="center">RAM</td>
    <td class="tg-baqh" colspan="3"><p align="center">8GB or more</td>
  </tr>
  <tr>
    <td class="tg-baqh"><p align="center">Disk</td>
    <td class="tg-baqh" colspan="3"><p align="center">At least 30GB free space. SSD is recommended.</td>
  </tr>
  <tr>
    <td class="tg-baqh"><p align="center">Resolution</td>
    <td class="tg-baqh" colspan="3"><p align="center">1280 x 800 Minimum <br></td>
  </tr>
  <tr>
    <td class="tg-baqh"><p align="center">Internet</td>
    <td class="tg-baqh" colspan="3"><p align="center">Broadband</td>
  </tr>
</tbody>
</table>

Please be in mind that both **64 bit CPU and 64 bit OS are mandatory condition.** If your system DOES NOT meet this condition, you have to change affected hardware or software or the whole system. **It is strongly recommended to use SSD(Solid State Disk) instead of HDD(Hard Disk Drive) because it will take less time when you are building the APS installation apk file.** Recommended is just recommended and it is not a mandatory. However, you may still use a HDD when you are building apk file if you can spend a long time ALONE to complete the build.

* * *

### Эта статья разделена на две части.

* В обзорной части есть объяснение того, какие шаги необходимы для создания файла APK.
* В пошаговой инструкции вы найдете снимки экранов установки. Поскольку версии Android Studio - среды разработки программного обеспечения, в которой мы будем создавать APK - меняются очень быстро, точного соответствия вашей сборке вы не увидите, но общее представление о том, как это делается, получите. Android Studio работает на Windows, Mac OS X и Linux, и между каждой платформой возможны незначительные различия. Если вы обнаружите, что что-то важное выполняется неправильно или отсутствует, сообщите в группе facebook "AndroidAPS users" или в чате Discord [Android APS](https://discord.gg/4fQUWHZ4Mw) чтобы мы могли устранить проблему.

## Общие замечания

In general, the steps necessary to build the APK file:

1. [Установите Git](../Installing-AndroidAPS/git-install.rst)
2. [Установите Android Studio](../Installing-AndroidAPS/Building-APK#install-android-studio)
3. [Задайте путь к git в параметрах Android Studio](../Installing-AndroidAPS/Building-APK#set-git-path-in-preferences)
4. [Скачайте код AndroidAPS](../Installing-AndroidAPS/Building-APK#download-androidaps-code)
5. [Загрузите Android SDK](../Installing-AndroidAPS/Building-APK#download-android-sdk)
6. [Постройте приложение ](../Installing-AndroidAPS/Building-APK#generate-signed-apk) (сгенерируйте подписанный apk)
7. [Перенесите файл apk на телефон](../Installing-AndroidAPS/Building-APK#transfer-apk-to-smartphone)
8. [Идентифицируйте ресивер при использовании xDrip+](../Installing-AndroidAPS/Building-APK#identify-receiver-if-using-xdrip)

## Step by step walkthrough

Detailed description of the steps necessary to build the APK file.

## Установите git (если у вас его нет)

Следуйте инструкциям на странице установки [git](../Installing-AndroidAPS/git-install.rst).

## Установите Android Studio

The following screenshots have been taken from Android Studio Version 3.6.1. Your screen might look a bit different if you use a newer version of Android Studio. But you should be able to find your way through. [Help from the community](../Where-To-Go-For-Help/Connect-with-other-users.md) is provided.

One of the most important things when installing Android Studio: **Be patient!** During installation and setup Android Studio is downloading a lot of stuff which will take its time.

Install [Android Studio](https://developer.android.com/studio/install.html) and setup during first start.

Select "Do not import settings" as you have not used it before.

![Do not import settings](../images/AndroidStudio361_01.png)

Decide whether you want to share data with Google or not.

![Share data with Google](../images/AndroidStudio361_02.png)

On the following screen click "Next".

![Welcome screen](../images/AndroidStudio361_03.png)

Select "Standard" installation and click "Next".

![Standard installation](../images/AndroidStudio361_04.png)

Select the theme for the user interface you like. (In this manual we used "Light".) Then click "Next". This is just the color scheme. You can select any you like (i.e. "Darcula" for dark mode). This selection has no influence on building the APK.

![UI color scheme](../images/AndroidStudio361_05.png)

Click "Finish" on the "Verify Settings" dialog.

![Verify settings](../images/AndroidStudio361_06.png)

Wait while Android Studio downloads additional components and be patient. Once everything is downloaded button "Finish" turns blue. Click the button now.

![Downloading components](../images/AndroidStudio361_07.png)

## Set git path in preferences

Make sure [git is installed](../Installing-AndroidAPS/git-install.rst) on your computer.

On the Android Studio welcome screen click the small triangle (1. in next screenshot) and select "Settings" (2.).

![Android Studio settings from welcome screen](../images/AndroidStudio361_08.png)

### Windows

* Нажмите на маленький треугольник рядом с Контролем Версий (1.) чтобы открыть подменю.
* Нажмите Git (2.).
* Убедитесь, что выбран метод обновления "Слияние" (merge) (3.).
* Проверьте, может ли Android Studio найти путь к файлу git.exe автоматически, нажав кнопку "Тест" (4.)
    
    ![Параметры Android Studio](../images/AndroidStudio361_09.png)

* Если автоматическая настройка будет успешной, то будет показана версия git.

* Нажмите кнопку "OK" в диалоговом окне (1.) и "OK" в окне параметров (2.).
    
    ![Автоматическая установка git успешно выполнена](../images/AndroidStudio361_10.png)

* В случае, если файл git.exe не найден, нажмите кнопку "OK" в диалоговом окне (1), а затем кнопку с тремя точками (2.).

* Используйте функцию [ поиск ](https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html) в проводнике Windows для поиска "git.exe", если вы не уверены в том, где его можно найти. Вы ищете файл git.exe, находящийся в папке \bin\.
* Выберите путь к файлу git.exe и убедитесь, что вы выбрали папку ** \bin\ ** (3.) и нажмите кнопку "OK" (4).
* Закройте окно параметров, нажав кнопку "OK" (5.).
    
    ![Автоматическая установка git не выполнена](../images/AndroidStudio361_11.png)

* **Перезагрузите компьютер, чтобы обновить системную среду.**

### Mac

* Любая версия git должна работать. Например <https://git-scm.com/download/mac>.
* Используйте homebrew для установки git: ```$ brew install git```.
* Подробности об установке git см. в [официальной git документации](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
* Если вы устанавливаете git через homebrew, то нет необходимости изменять какие-либо настройки. На всякий случай: Их можно найти здесь: Android Studio - Настройки.

## Скачайте код AndroidAPS

* **Если вы еще не перезагрузили компьютер после настройки пути к git в параметрах, сделайте это сейчас. Необходимо обновить системную среду.**

* Существует два варианта запуска нового проекта:
    
    * На экране приветствия Android Studio нажмите "Получить из системы управления версиями"
        
        ![Извлечение проекта из системы управления версиями окна приветствия](../images/AndroidStudio_GetFromVersionControl.PNG)
    
    * Если вы уже открыли Android Studio и не видите экран приветствия, то выберите File (1.) > New (2.) > Project from Version Control... (3.)
        
        ![Извлечение проекта из системы управления версиями в Android Studio](../images/AndroidStudio_FileNew.PNG)

* Заполните URL-адрес главного репозитория AndroidAPS ("https://github.com/nightscout/AndroidAPS") и нажмите "clone" (клонировать).

* Выберите каталог для сохранения клонированного кода. (2.)
* Нажмите кнопку "Клонировать" (3.).
    
    ![Клонирование репозитория](../images/AndroidStudio_NewURL.PNG)

* Не нажимайте "Background", пока клонируется репозиторий!
    
    ![Нет фонового действия](../images/AndroidStudio361_15.png)

* После того, как репозиторий клонирован успешно, откройте локальную копию, нажав кнопку "Да".
    
    ![Открытие репозитория](../images/AndroidStudio361_16.png)

* В правом нижнем углу появится информация о том, что в Android Studio выполняются фоновые задачи.
    
    ![Фоновые задания](../images/AndroidStudio361_17.png)

* Предоставьте доступ, если ваш брандмауэр просит разрешения.
    
    ![Разрешение брандмауэра (Java)](../images/AndroidStudio361_18.png)

* После завершения фоновых задач вы, вероятно, увидите следующее сообщение об ошибке:
    
    ![Лицензия SDK](../images/AndroidStudio361_19.png)

## Загрузите Android SDK

* Нажмите Файл > Настройки.
    
    ![Открыть настройки](../images/AndroidStudio361_20.png)

* Нажмите на маленький треугольник рядом с Appearance & Behaviour (1.).

* Щелкните на небольшом треугольнике рядом с System Settings (2.) и выберите Android SDK (3.)
* Установите флажок слева от "Android 9.0 (Pie)" (4.) (API Level 28).
    
    ![Параметры SDK](../images/AndroidStudio361_21.png)

* Подтвердите изменения, нажав кнопку OK.
    
    ![Подтвердить изменения SDK](../images/AndroidStudio361_22.png)

* Примите лицензионное соглашение (1.) и нажмите "Далее" (2.).
    
    ![Принять лицензию SDK](../images/AndroidStudio361_23.png)

* Дождитесь завершения установки.
    
    ![Ожидание во время установки SDK](../images/AndroidStudio361_24.png)

* После завершения установки SDK кнопка "Finish" станет синей. Нажмите на кнопку.
    
    ![Завершения установки пакета SDK](../images/AndroidStudio361_25.png)

* Android Studio может рекомендовать обновить систему gradle. **Не обновляйте gradle!** Это может привести к трудностям!

* Если вы видите информацию в нижней правой части окна Android Studio, что модуль Android Gradile готов к обновлениям, щелкните по тексту "update" (1.) и в диалоговом окне выберите "Don't remind me again for this project" (2.).
    
    ![Не обновляем gradle](../images/AndroidStudio361_26.png)

## Создание подписанного APK

Signing means that you indicate your app to be your own creation but in a digital way as a kind of digital fingerprint within the app itself. That is necessary because Android has a rule that it only accepts signed code to run for security reasons. For more information on this topic, follow [this link](https://developer.android.com/studio/publish/app-signing.html#generate-key).

* Нажмите "Build" в строке меню и выберите "Generate Signed Bundle / APK...".
    
    ![Построение apk](изображение::../images/AndroidStudio361_27.png)

* Выберите "APK" (1.) вместо "Android App Bundle" и нажмите кнопку "Далее" (2.).
    
    ![Apk вместо пакета](изображение::../images/AndroidStudio361_28.png)

* Убедитесь, что модуль имеет значение "app" (1.).

* Нажмите "Create new" (cоздать новый...) для создания магазина ключей.
    
    В этом случае магазин ключей является всего лишь файлом, в котором хранится информация о цифровой подписи. Он зашифрован и информация защищена паролями.
    
    ![Создание хранилища ключей](../images/AndroidStudio361_29.png)

* Нажмите на символ папки (1.), чтобы выбрать путь к хранилищу ключей.

* Выберите путь к хранилищу ключей (2.). **Не сохраняйте в той же папке, что и проект. Необходимо использовать другой каталог! ** Одна из опций может быть ваша домашняя папка.
* Введите имя файла для хранилища ключей (3).
* Нажмите "OK" (4.).
* Пароли для хранилища ключей и ключа не должны быть очень сложными. Обязательно запомните их или запишите в безопасное место. В случае, если вы не запомните пароли смотрите [ устранение неполадок для потерянных ключей ](../Installing-AndroidAPS/troubleshooting_androidstudio#lost-keystore).
* Введите (5.) и подтвердите (6.) пароль для хранилища ключей.
* Сделайте то же самое для ключа (7. + 8.).
* Срок действия (9.) по умолчанию составляет 25 лет. Изменять значение по умолчанию не требуется.
* Необходимо ввести имя и фамилию (10). Вся остальная информация необязательна.
* Когда закончите, нажмите кнопку "OK" (11.).
    
    ![Путь к магазину ключей](../images/AndroidStudio361_30.png)

* Убедитесь, что поле для запоминания паролей отмечено (1.). Так что вам не нужно вводить их снова при следующей сборке apk (то есть при обновлении до новой версии AndroidAPS).

* Нажмите "Далее" (2.).
    
    ![Запомнить пароль](../images/AndroidStudio361_31.png)

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

## Идентифицируйте ресивер при использовании xDrip+

[See xDrip+ page](../Configuration/xdrip#identify-receiver)

## Устранение неполадок

См. отдельную страницу [ устранение неполадок Android Studio ](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).