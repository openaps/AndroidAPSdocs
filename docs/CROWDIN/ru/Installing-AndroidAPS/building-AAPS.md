# Сборка AAPS

## Соберите сами вместо скачивания

**Приложение AAPS (файл apk) не доступно для скачивания из-за законодательных норм, связанных с медицинскими устройствами. Построить приложение для собственного пользования вполне законно, но передавать копию другим не разрешается!**

Подробнее см. [Страница FAQ](../Getting-Started/FAQ.md).

(Рекомендуемые спецификации компьютеров для сборки файла apk)=

## Технические характеристики компьютера и программного обеспечения для построения AAPS

- Please use the **[Android Studio version called at least Hedgehog or one more recent like Iguana, Jellyfish, and Koala](https://developer.android.com/studio/)** to build the apk. <u>**Do not use the Ladybug version.**</u> Older versions of Android Studio need to be updated first!
- [32-разрядные системы Windows](troubleshooting_androidstudio-unable-to-start-daemon-process) не поддерживаются в Android Studio. Имейте в виду, что и 64-разрядная процессор, и 64-разрядная ОС являются обязательным условием. Если ваша система не соответствует этому условию, следует изменить аппаратное или программное обеспечение или всю систему.

<table class="tg">
<thead>
  <tr>
    <th class="tg-baqh">Операционная система (только 64 бит)</th>
    <th class="tg-baqh">Windows 8 или выше</th>
    <th class="tg-baqh">Mac OS 10.14 или выше</th>
    <th class="tg-baqh">Любой Linux поддерживающий Gnome, KDE, или Unity DE;&nbsp;&nbsp;GNU C Library 2.31 или более поздние версии</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-baqh"><p align="center">Процессор CPU (Только 64 бит)</td>
    <td class="tg-baqh">x86_64 архитектура CPU; ядро Intel или новее, или процессор AMD с поддержкой <br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-windows" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Windows Hypervisor</span></a></td>
    <td class="tg-baqh">Чипы на базе ARM или Intel Core 2 поколения или новее с поддержкой <br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-mac" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">среды Hypervisor </span></a></td>
    <td class="tg-baqh">архитектура процессора x86_64, процессор Intel Core 2 поколения или новее, или процессор AMD с поддержкой AMD-виртуализации (AMD-V) и SSSE3</td>
  </tr>
  <tr>
    <td class="tg-baqh"><p align="center">Оперативная память</td>
    <td class="tg-baqh" colspan="3"><p align="center">8ГБ или более</td>
  </tr>
  <tr>
    <td class="tg-baqh"><p align="center">Диск</td>
    <td class="tg-baqh" colspan="3"><p align="center">Не менее 30ГБ свободного места. Рекомендуется использовать SSD.</td>
  </tr>
  <tr>
    <td class="tg-baqh"><p align="center">Разрешение</td>
    <td class="tg-baqh" colspan="3"><p align="center">минимум 1280 x 800 <br></td>
  </tr>
  <tr>
    <td class="tg-baqh"><p align="center">Интернет</td>
    <td class="tg-baqh" colspan="3"><p align="center">Широкополосный</td>
  </tr>
</tbody>
</table>

\*\*Настоятельно рекомендуется (но не обязательно) использовать SSD (Solid State Disk) вместо жесткого диска (Hard Disk Drive), так как при сборке AAPS файла потребуется меньше времени. \* Использовать HDD при создании файла apk **AAPS** можно. Процесс сборки приложения при этом может занять много времени, но после начала можно оставить его без присмотра.

## Помощь и поддержка в процессе сборки

Если вы столкнулись с трудностями в процессе создания приложения **AAPS**, сначала обратитесь к разделу [**устранение проблем с Android Studio**](../Installing-AndroidAPS/troubleshooting_androidstudio).

Если вы считаете, что что-то в инструкциях по сборке неправильно, отсутствует или сбивает с толку, свяжитесь с другими пользователями \*\* AAPS \*\* на [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) или [Discord](https://discord.gg/4fQUWHZ4Mw). Если вы хотите что-то изменить самостоятельно (обновить снимки экрана _etc_), отправьте [запрос на слияние (PR)](docs/EN/make-a-PR.md).

## Пошаговое руководство по созданию приложения AAPS

```{admonition} WARNING
:class: warning
If you have built AAPS before, you don't need to take all the following steps again.
Please jump directly to the [update guide](../Installing-AndroidAPS/Update-to-new-version)!
```

В общем виде шаги по созданию файла **AAPS** apk следующие:

4.1 [Установить Git](Install-Git)

4.2 [Установить Android Studio](Building-APK-install-android-studio)

4.3 [Скачать код AAPS](Building-APK-download-AAPS-code)

4.4. [Установить путь к Git в настройках Android Studio](Building-APK-set-git-path-in-preferences)

4.5. [Создать "подписанное" apk-приложение AAPS](Building-APK-generate-signed-apk)

В этом руководстве вы найдете _примерные_ снимки экрана при построении приложения **AAPS**. Поскольку \*\* Android Studio\*\* - программное обеспечение, которое мы используем для создания \*\* AAPS\*\*  - регулярно обновляется, эти снимки могут не совпадать с ходом вашей установки, но они дают представление о процессе.

Поскольку \*\* Android Studio \*\* работает на платформах Windows, Mac OS X и Linux, также могут быть незначительные расхождения в шагах для разных платформ.

(Установить git)=

### Установите git (если у вас его нет)

```{admonition} Why Git? 
:class: dropdown

Git is known as a “_Versioning Control System_” (VCS).\
Git is a program that allows you to track changes in code and to collaborate with others. You will use Git to make a copy of the **AAPS** source code from the GitHub website to your local computer. Then, you will use Git on your computer to build the **AAPS** application (apk). 
```

#### Шаги по установке Git

1. Проверьте, установлен ли у вас **Git**. Это можно сделать, набрав “git” в строке поиска Windows – если вы увидите \*\* “Git bash”\*\* или какую-либо другую форму Git, то он уже установлен, и можно сразу перейти к [установке Android Studio] (Сборка-APK-установка-android-studio):

![Git\_установлен](../images/Building-the-App/001_check_git_installed.png)

2. Если у вас нет Git, загрузите и установите псвежую версию системы [**отсюда**](https://git-scm.com/downloads). Любая новая версия Git должна работать, выбирайте версию в соответствии с вашей системой - Mac, Windows или Linux.

**Примечание для пользователей Mac:** веб-страница Git также предложит установить дополнительную программу под названием "homebrew", которая поможет в установке. Если вы устанавливаете Git через homebrew, то нет необходимости изменять настройки.

(Запомните_путь_к_Git)=

- Во время установки, когда программа попросит "выбрать место установки", заметьте, куда устанавливается Git ("**путь установки**"), это понадобится на следующем шаге. Это будет что-то вроде "C:\Program Files\Git\cmd\git.exe"

- По мере прохождения нескольких шагов установки Git, принимайте все параметры по умолчанию.

- После установки, если вы забыли место установкин Git, вы можете найти его следующим образом: введите "git" в строке поиска ПК, щелкните правой кнопкой мыши на "Git bash", выберите "открыть местоположение файла", наведите курсор мыши на значок "Git bash"., который затем покажет, где он установлен.

- Перезагрузите компьютер перед следующим шагом.

(Сборка-APK-установка-android-studio)=

### Установите Android Studio

- \*\* Следует постоянно находиться в Сети во время выполнения следующих шагов, так как Android Studio загружает несколько обновлений\*\*

```{admonition} What is Android Studio?
:class: dropdown
Android Studio is a program which runs on your computer. It allows you to download source code from the internet (using Git) and build smartphone (and smartwatch) apps. You cannot "break" a current, looping version of **AAPS** which you might have running on a smartphone by building a new or updated app on your PC with Android Studio, these are totally separate processes. 
```

The following screenshots have been taken from Android Studio Version **Hedgehog**, they should be identical with more recent versions.

Самая важная заповедь при установке Android Studio: Будьте терпеливы! Во время установки и настройки Android Studio загружает много элементов, которые отнимают время.

**Download a supported version of Android Studio (Hedgehog, Iguana, Jellyfish or Koala - not Ladybug)** from [**here**](https://developer.android.com/studio/archive), locate it in your browser downloads folder, and install it on your computer:

![Загрузка Android Studio](../images/Building-the-App/01_InstallAS_Hedgehog.png)

При первом запуске Android Studio, прогамма приветствует вас:

![Добро пожаловать](../images/Building-the-App/02_Welcome_AS_Hedgehog.png)

Выберите "Далее":

![Выбор компонентов AS](../images/СборкаApp/03_choose_AS_components.png)

Оставьте флажки отмеченными и выберите «Далее»:

![Выберите расположение AS](../images/Building-the-App/04_AS_Install_location.png)

Разрешите установку в директорию по умолчанию и выберите "Далее":

![расположение смарт-меню AS](../images/Building-the-App/04_AS_Install_location.png)

Когда появится запрос на выбор папки смарт-меню просто выберите "Install". Теперь нужно подождать несколько минут во время установки Android Studio. Затем вы увидите, что установка завершена, выберите "Далее":

![установка завершена](../images/Building-the-App/06_Installation_Complete.png)

Выберите "Готово":

![завершите установку AS](../images/Building-the-App/07_CloseAS_Setup.png)

Теперь запустите Android Studio.

Если будет спрошено, хотите ли вы импортировать настройки, выберите «Не импортировать настройки». Мы не хотим импортировать настройки из предыдущих установок:

![Не импортировать настройки](../images/studioSetup/01_ImportSettings.png)

Решите, хотите ли вы обмениваться данными с Google (если не уверены, просто выберите "Не отсылать").

![Делиться данными с Google](../images/Building-the-App/08_Googlesharedata.png)

Теперь вы получите сообщение о недостающем пакете разработки ПО (SDK) (не волнуйтесь, скоро вопрос будет решен), выберите "Далее":

![недостающий пакет SDK](../images/Building-the-App/09_MissingSDK.png)

Программное обеспечение должно автоматически выбрать недостающие данные (SDK) и директорию установки.

```{admonition} What is an Android SDK?
:class: dropdown

In order to run **AAPS** on the phone the application needs to integrate with Android itself. Android provides “_software development kits_” (SDK) which allow apps like **AAPS** to interface with an Android operating system.
```

Пакет SDK относится **не** к версии Android на телефоне, а к самой сборке **AAPS**. **AAPS** версии 3.2 (и новее) строится поверх API 34, которая автоматически выбирается в версии **Hedgehog** **Android Studio**. Поэтому просто нажмите "Далее":

![установка компонентов SDK](../images/Building-the-App/10_SDKComponents_setup.png)

На запрос о проверке настроек, просто выберите "Далее":

![подтверждение настроек](../images/Building-the-App/11_Verify_settings.png)

На запрос о Лицензионном Соглашении, выберите "Принять" и нажмите "Готово":

![лицензионное соглашение](../images/Building-the-App/12_Licence_agreement.png)

> **_Примечание:_** В зависимости от вашей установки, принимаемые лицензии могут отличаться от того, что показано на снимке экрана.

Подождите, пока Android Studio загружает дополнительные компоненты, это может занять несколько минут:

![загрузка компонентов](../images/Building-the-App/13_downloading_components.png)

По завершении загрузки, кнопка "Готово" становится синей, и на нее можно нажать:

![загрузка компонентов завершена](../images/Building-the-App/14_finished_downloading_components.png)

Вас приветствует экран «Добро пожаловать в Android Studio».

![Добро пожаловать\_AS](../images/Building-the-App/15_Welcome_AS.png)

(Сборка-APK-загрузка-AAPS-кода)=

### Загрузите код AAPS

```{admonition} Why can it take a long time to download the AAPS code?
:class: dropdown

The first time **AAPS** is downloaded, Android Studio will connect over the internet to the Github website to download the source code for **AAPS**. This should take about 1 minute. 

Android Studio will then use **Gradle** (a development tool in  Android studio) to identify other components needed to install these items on your computer. 

```

На экране приветствия Android Studio убедитесь, что "**Проекты**" (1) подсвечены слева. Затем нажмите "**Получить из VCS**" (2) справа:

![Получить из системы контроля версий\_VCS](../images/Building-the-App/16_Get_from_VCS.png)

- Теперь мы скажем программе Android Studio, откуда получить код:

- Должен быть выбран "URL репозитория" (по умолчанию) слева (1).

- В качестве системы управления версиями должен быть выбран "Git" (по умолчанию) (2).

Теперь скопируйте URL-адрес:

```
https://github.com/nightscout/AndroidAPS.git
 
Context | Edit Context
```

и вставьте его в текстовое поле URL (3).

- Есть смысл проверить место сохранения клонированного кода (директорию по умолчанию) (4).

```{admonition} INFORMATION
:class: information
Make a note of the directory. It is where your sourcecode is stored!
```

- Теперь нажмите кнопку "Клонировать" (5).

![Выберите\_URL](../images/Building-the-App/17_select_URL.png)

Теперь вы увидите экран, сообщающий, что репозиторий клонируется:

![репозиторий\_клонируется](../images/Building-the-App/18_cloning_repository.png)

В какой-то момент вам будет задан вопрос, хотите ли вы доверять проекту. Нажмите на "Доверять проекту":

![Доверять проекту](../images/Building-the-App/18a_trust_project.png)

Только для пользователей Windows: Если ваш брандмауэр запрашивает разрешение, предоставьте доступ:

![Разрешение брандмауэру java](../images/AndroidStudio361_18.png)

После успешного клонирования репозитория, Android Studio откроет клонированный проект.

Нажмите на шестерёнку вверху справа и выберите "**Переключиться на Классический интерфейс...**", чтобы вернуться к представлению, используемому в этой документации.

Если вы не видите этой шестеренки, не волнуйтесь. Вы уже используете классический интерфейс!

![Переключиться на классический интерфейс](../images/Building-the-App/OldUI.png)

Перезапустите Android Studio, чтобы изменения вступили в силу.

![Подтверждение перезапуска Android Studio](../images/Building-the-App/18b_ConfirmRestartUI.png)

Вы можете получить одно или оба из следующих предупреждений о запущенных процессах. Их можно прекратить без опасений!

![Подтверждение прервания фоновых процессов](../images/Building-the-App/18c_AbortBackgroundTasks.png) ![Подтверждение процесс импорта AndroidAPS](../images/Building-the-App/18d_AbortProcessImport.png)

Когда Android Studio откроется снова, ждите (это может занять несколько минут) и **не** обновляйте проект в соответствии с предложением во всплывающем окне.

![загрузка взаимозависимостей компонентов\_AS](../images/Building-the-App/19_downloading_dependencies.png)

```{admonition} NEVER UPDATE GRADLE!
:class: warning

Android Studio might recommend updating the gradle system. **Never update gradle!** This will lead to difficulties.
```

_На ваше усмотрение_ - Если хотите очистить всплывающее окно **"рекомендуется обновить проект"**, нажмите на синий текст "Больше" (1). В диалоговом окне выберите "Don't rask for this project" (2).

![AS\_закрытие\_окна\_gradle](../images/Building-the-App/20_close_popup.png)

Только для пользователей Windows:
Если вы не перезапустили компьютер после установки или обновления Git, закройте Android Studio сейчас. Затем перезагрузите компьютер и перезапустите Android Studio.

(Сборка-APK-задать-путь-к-git-в-настройках) =

### Задайте путь к git в параметрах Android Studio

Теперь мы скажем Android Studio, где найти Git, который был установлен [ранее](Install-Git).

- Только для пользователей Windows: убедитесь, что вы перезагрузили компьютер после [установки Git](Install-Git).
- Откройте **Android Studio** (ее можно найти через меню Пуск).
- В левом верхнем углу **Android Studio** перейдите в _настройки_ (Windows) или _Android Studio > установки_ (Mac). Это откроет следующее окно, из выпадающего списка выберите "управление версиями" (1):

![управление версиями (VC)](../images/Строительство-App/21_AS_version_control.png)

- Теперь выберите "**Git**" (2).
- В нижней части середины страницы выберите метод обновления "Merge" (слияние) (3).
- Проверьте, может ли Android Studio автоматически найти путь к файлу **git.exe**, нажав кнопку "Тест" (4):

![путь\_к\_Git](../images/Building-the-App/22_Git_path.png)

- Если автоматическая настройка прошла успешно, то рядом с путем к **Git** будет показана его версия.

  ![Показана\_версия\_Git](../images/Building-the-App/23_Git__path_success.png)

- Если вы обнаружите, что \*\*git.exe \*\* не найден автоматически, или что нажатие кнопки "Проверить" приводит к ошибке (1), вы можете либо вручную ввести путь, который вы сохранили [ранее] (Make_a_note_of_Git_path), либо щелкнуть по значку папки (2) и вручную перейти к каталогу где хранится \*\*git.exe \*\*:

  ![Git не найден](../images/studioSetup/13_GitVersionError.png)

- Используйте [функцию поиска](https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html) в проводнике Windows, чтобы найти "git.exe", если не уверены, где был установлен git. Как это сделать, более подробно объясняется [выше](Make_a_note_of_Git_path).

- Если вы выбрали его вручную, проверьте выбранный путь к Git кнопкой «Тест», как описано выше.

Когда версия Git отображается рядом с его директорией (см. скриншот выше), вы успешно завершили этот этап и теперь можете закрыть окно "Настройки" Android Studio нажатием кнопки "**OK**" (5):

![Путь\_к\_Git\_OK](../images/Building-the-App/23a_Git_path_OK.png)

(Сборка-APK-генерировать-подписанный-apk)=

### Построение подписанного приложения AAPS apk

```{admonition} Why does the AAPS app need to be "signed"?
:class: dropdown

Android requires each app to be _signed_, to ensure that it can only be updated later from the same trusted source that released the original app. For more information on this topic, follow [this link](https://developer.android.com/studio/publish/app-signing.html#generate-key). For our purposes, this just means that we generate a signing or "keystore" file and use it when we build the **AAPS** app.
```

- В строке меню нажмите кнопку "Создать" (1) и выберите "Генерировать подписанный пакет/APK (2)

![Создание apk](../images/Building-the-App/25_build_apk.png)

- Выберите "APK" вместо "Android App Bundle" и нажмите "Далее":

![APK вместо пакета](../images/Building-the-App/26_generate_APK.png)

- На следующем экране убедитесь, что "Module" установлен в "AAPS.app" (1).

(Building-APK-wearapk)=

```{admonition} INFORMATION!
:class: информация
Если вы хотите создать apk для часов, следует выбрать AAPS.wear!
```

- Нажмите "Создать новый..." (2) для создания хранилища ключей.

```{admonition} INFORMATION!
:class: information
You will only need to create the keystore once.
If you have build AAPS before, do NOT create a new keystore but select your existing one!
```

**_Примечание:_** Хранилище ключей - это файл, в котором хранится информация о подписи приложения. Он зашифрован и информация защищена паролями.

![Создание\_хранилища\_ключей](../images/Строительство-App/27_new_keystore.png)

- Нажмите на символ папки и выберите путь к хранилищу ключей:

![Создание\_хранилища\_ключей](../images/Building-the-App/28_new_keystore.png)

- Нажмите на раскрывающееся меню (1), чтобы выбрать место файла хранилища ключей. В этом примере он сохраняется в "Моих документах" (2). Не размещайте хранилище ключей в ту же папку, что и файлы Android Studio (StudioProject). Введите имя файла хранилища ключей (3) и подтвердите, нажав "OK" (4):

![Создание\_хранилища\_ключей](../images/Building-the-App/29_choose_keystore_file.png)

Вернёмся на предыдущий экран. Здесь показано выбранное вами расположение для сохранения файла хранилища ключей.

```{admonition} WARNING!
:class: warning
Make sure to note down for yourself where your keystore is stored. You will need it when you build the next AndroidAPS update!
```

Теперь выберите простой пароль (запишите его), введите в поле пароля (1), и подтвердите (2).  Примечание: Пароли для хранилища ключей и ключей не должны быть сложными. Если вы потеряете пароль, смотрите [решение проблем при потере ключей](troubleshooting_androidstudio-lost-keystore).

По умолчанию псевдоним (3) для вашего ключа это "key0", оставьте его без изменений.

Теперь вам нужен пароль для ключа. Для простоты можете использовать тот же пароль, что и для хранилища ключей выше. Введите пароль (4) и подтвердите (5).

```{admonition} WARNING!
:class: warning
Note down these passwords! You will need them when you build the next AAPS update!
```

Срок действия (6) 25 лет по умолчанию, оставьте его как есть.

Введите имя и фамилию (7). Другой информации не нужно.

Нажмите "OK" (8), чтобы продолжить:

![Выберите путь к хранилищу ключей](../images/Building-the-App/30_new_keystore.png)

На странице "Генерировать подписанный пакет или APK" теперь будет показан путь к вашему хранилищу. Теперь повторно введите пароль хранилища ключей (1) и пароль ключа (2) и установите флажок запоминать пароли (3), чтобы не пришлось вводить их снова при следующей сборке apk (или при обновлении до новой версии AAPS). Нажмите "Далее" (4):

![Запомните пароли](../images/Building-the-App/31_generate_APK.png)

На следующем экране выберите вариант сборки "fullRelease" (1) и нажмите "Create " (создать) (2).

![Выберите вариант сборки](../images/Building-the-App/32_full_release.png)

Android Studio теперь создаст приложение **AAPS** apk. В правом нижнем углу появится сообщение "Gradle Build running". Процесс занимает некоторое время, в зависимости от вашего компьютера и подключения к Интернету, \*\* наберитесь терпения!\*\* Если хотите следить за ходом сборки, нажмите на маленький молоточек "build" внизу Android Studio:

![Выполняется Gradle](../images/Building-the-App/33_Studio_building1.png)

Теперь вы можете наблюдать за ходом построения приложения:

![Android Studio выполняет сборку приложения](../images/Building-the-App/34_Studio_building2.png)

После завершения сборки Android Studio выведет сообщение "СБОРКА ЗАВЕРШЕНА УСПЕШНО.". Вы увидите всплывающее уведомление, на которое можете нажать, чтобы найти файл ("locate"). Если вы пропустили этот момент, нажмите на уведомление "найти или анализировать APK" (выделено желтым цветом) в самом низу экрана, чтобы открыть уведомления:

![Сборка завершена](../images/Building-the-App/35_Studio__built_success.png)

_Если сборка не удалась, обратитесь к разделу [Проблемы и их решения](../Installing-AndroidAPS/troubleshooting_androidstudio)._

В окне Уведомления нажмите на синюю ссылку "locate":

![Найти сборку](../images/Building-the-App/35_Studio__built_locate.png)
Откроется файловый менеджер. Перейдите в директорию "full" (1) > "release" (2).

![Определение местонахождения файла apk](../images/Building-the-App/36_locate_apk.png)

Откройте папку "release". Файл "app-full-release.apk" (1) - это только что созданный apk-файл **APPS**, в следующем разделе документации описано как перенести этот файл на телефон:

![файл приложения_apk(../images/Building-the-App/37_full_release_apk.png)

Поздравляем! Теперь вы создали **AAPS** apk и можете перейти к следующему этапу [Перенос и Установка **AAPS**](Transferring-and-installing-AAPS.md).
