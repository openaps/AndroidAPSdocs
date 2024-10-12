# Сборка AAPS

## Соберите сами вместо скачивания

**Приложение AAPS (файл apk) не доступно для скачивания из-за законодательных норм, связанных с медицинскими устройствами. Построить приложение для собственного пользования вполне законно, но передавать копию другим не разрешается!**

Подробнее см. [Страница FAQ](../Getting-Started/FAQ.md).

(Рекомендуемые спецификации компьютеров для сборки файла apk)=

## Технические характеристики компьютера и программного обеспечения для построения AAPS

- Please use the **[Android Studio version called at least Hedgehog (2023.1.1) or one more recent like Iguana, Jellyfish, Koala or Ladybug](https://developer.android.com/studio/)** to build the apk. Older versions of Android Studio need to be updated first!
- [32-разрядные системы Windows](troubleshooting_androidstudio-unable-to-start-daemon-process) не поддерживаются в Android Studio. Имейте в виду, что и 64-разрядная процессор, и 64-разрядная ОС являются обязательным условием. Если ваша система не соответствует этому условию, следует изменить аппаратное или программное обеспечение или всю систему.

<table class="tg">
<tbody>
  <tr>
    <th class="tg-baqh">OS (Only 64 bit)</th>
    <td class="tg-baqh">Windows 8 or higher</td>
    <td class="tg-baqh">Mac OS 10.14 or higher</td>
    <td class="tg-baqh">Any Linux supports Gnome, KDE, or Unity DE;&nbsp;&nbsp;GNU C Library 2.31 or later</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">CPU (Only 64 bit)</th>
    <td class="tg-baqh">x86_64 CPU architecture; 2nd generation Intel Core or newer, or AMD CPU with support for a <br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-windows" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Windows Hypervisor</span></a></td>
    <td class="tg-baqh">ARM-based chips, or 2nd generation Intel Core or newer with support for <br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-mac" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Hypervisor.Framework</span></a></td>
    <td class="tg-baqh">x86_64 CPU architecture; 2nd generation Intel Core or newer, or AMD processor with support for AMD Virtualization (AMD-V) and SSSE3</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">RAM</th>
    <td class="tg-baqh" colspan="3"><p align="center">8GB or more</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Disk</th>
    <td class="tg-baqh" colspan="3"><p align="center">At least 30GB free space. SSD is recommended.</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Resolution</th>
    <td class="tg-baqh" colspan="3"><p align="center">1280 x 800 Minimum <br></td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Internet</th>
    <td class="tg-baqh" colspan="3"><p align="center">Broadband</td>
  </tr>
</tbody>
</table>

\*\*Настоятельно рекомендуется (но не обязательно) использовать SSD (Solid State Disk) вместо жесткого диска (Hard Disk Drive), так как при сборке AAPS файла потребуется меньше времени. \* Использовать HDD при создании файла apk **AAPS** можно. Процесс сборки приложения при этом может занять много времени, но после начала можно оставить его без присмотра.

## Помощь и поддержка в процессе сборки

Если вы столкнулись с трудностями в процессе создания приложения **AAPS**, сначала обратитесь к разделу [**устранение проблем с Android Studio**](../Installing-AndroidAPS/troubleshooting_androidstudio).

If you think something in the building instructions is wrong, missing or confusing, or you are still struggling, please reach out to other **AAPS** users group on [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) or [Discord](https://discord.gg/4fQUWHZ4Mw). Если вы хотите что-то изменить самостоятельно (обновить снимки экрана _etc_), отправьте [запрос на слияние (PR)](docs/EN/make-a-PR.md).

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

2. If you don’t have Git installed, download and install the latest version for your system from the "Download" section on [**here**](https://git-scm.com/downloads). Любая новая версия Git должна работать, выбирайте версию в соответствии с вашей системой - Mac, Windows или Linux.

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

Самая важная заповедь при установке Android Studio: Будьте терпеливы! Во время установки и настройки Android Studio загружает много элементов, которые отнимают время.

Any version of Android Studio like version Hedgehog or any newer is suitable. With version Ladybug, you might need to do one extra step, but it's doable!

```{admonition} Different UI
:class: warning
Import note: Android Studio changed its UI during the last releases. This guide will show you the steps with the *new UI* in "Ladybug". If you still use the older UI, you might want to change Android Studio to the new UI first following [these instructions](NewUI).
```

Download the [current version of Android Studio](https://developer.android.com/studio) or an older version from the [**Archives**](https://developer.android.com/studio/archive) and accept the download agreements.

![DownloadAndroidStudio](../images/Building-the-App/010_DownloadLadybug.png)

Once the download is finished, start the downloaded application to install it on your computer.
You might need to accept/confirm some warnings about downloaded apps from Windows!

Install Android Studio by clicking "Next", as shown in the following screenshots. You do **not** need to change any settings!

![Welcome\_to\_Android\_Studio\_Setup](../images/Building-the-App/011_InstallLadybug.png)

![Choose\_components](../images/Building-the-App/012_InstallLadybug.png)

![Configuration\_Settings](../images/Building-the-App/013_InstallLadybug.png)

Now click on "Install":

![Choose\_start\_Menu\_Folder](../images/Building-the-App/014_InstallLadybug.png)

Once it's completed, press "Next"

![Installation\_Complete](../images/Building-the-App/015_InstallLadybug.png)

In the last step, click on "Finished" to start Android Studio for the first time.

![Completing\_Android\_Studio\_Setup](../images/Building-the-App/016_InstallLadybug.png)

You will be asked if you want to help improve Android Studio. Choose the option to your liking, it won't make any difference for the following steps.

![Help\_improve\_Android\_Studio](../images/Building-the-App/020_ImproveAS.png)

The welcome screen greets you to the installation of Android Studio. Press "Next".

![Welcome](../images/Building-the-App/022_WelcomeAndroidStudioInstallation.png)

Select "Standard" as installation type.

![Install\_Type](../images/Building-the-App/023_DefaultInstallation.png)

Verify the settings by clicking "Next" again.

![Verify\_Settigns](../images/Building-the-App/024_DefaultInstallation.png)

Now you need to accept the license agreements. You have two sections (1 + 3) on the left side which you have to select one after the other and each select "Accept" (2 + 4) on the right side.

Then the "Finish" (5) button can be clicked.

![License\_Agreement](../images/Building-the-App/025_LicenseAgreement.png)

Some Android packages will now be downloaded and installed. Be patient and wait.

When it's finished, you will find the following screen where you can select "Finish" again.

![Downloading\_Components](../images/Building-the-App/026_DownloadFinished.png)

You will now see the Welcome screen of Android Studio.

![Welcome\_to\_Android\_Studio](../images/Building-the-App/031_WelcomeAndroidStudio.png)

(Сборка-APK-загрузка-AAPS-кода)=

### Загрузите код AAPS

```{admonition} Why can it take a long time to download the AAPS code?
:class: dropdown

The first time **AAPS** is downloaded, Android Studio will connect over the internet to the Github website to download the source code for **AAPS**. This should take about 1 minute. 

Android Studio will then use **Gradle** (a development tool for Android apps) to identify other components needed to build these items on your computer. 
```

На экране приветствия Android Studio убедитесь, что "**Проекты**" (1) подсвечены слева.

Затем нажмите "**Получить из VCS**" (2) справа:

![Get\_from\_VCS](../images/Building-the-App/032_GetVCS.png)

Теперь мы скажем программе Android Studio, откуда получить код:

![Get from Version Control](../images/Building-the-App/033_CloneGit.png)

- Должен быть выбран "URL репозитория" (по умолчанию) слева (1).

- В качестве системы управления версиями должен быть выбран "Git" (по умолчанию) (2).

- Теперь скопируйте URL-адрес:
  ```
  https://github.com/nightscout/AndroidAPS.git
   
  Context | Edit Context
  ```
  и вставьте его в текстовое поле URL (3).

- Check the (default) directory for saving the cloned code exists on your computer and doesn't already exists (4). You can change it to some directoy, but please remember where you stored it!

- Теперь нажмите кнопку "Клонировать" (5).

```{admonition} INFORMATION
:class: information
Make a note of the directory. It is where your sourcecode is stored!
```

Теперь вы увидите экран, сообщающий, что репозиторий клонируется:

![cloning\_repository](../images/Building-the-App/034_CloningProgress.png)

At some point, Android Studio will close and start again. You may be asked whether you want to trust the project. Нажмите на "Доверять проекту":

![Trust project](../images/Building-the-App/035_TrustProject.png)

Только для пользователей Windows: Если ваш брандмауэр запрашивает разрешение, предоставьте доступ:

![Разрешение брандмауэру java](../images/AndroidStudio361_18.png)

После успешного клонирования репозитория, Android Studio откроет клонированный проект.

(NewUI)=

```{admonition} New UI
:class: information
Android Studio changed its UI recently. New installations of Android Studio use the new UI by default!

Only if your Android Studio looks different, you might need to switch to the new UI:
Click on the hamburger menu on the top left, then select **Settings** (or **Preferences** on Apple computers).
In **Appearance & Behaviour**, go to **New UI** and tick **Enable new UI**. Then restart Android Studio to start using it.

If you don't find the option **New UI** don't worry: you are already using it!
```

When Android Studio opened, wait patiently (this may take a few minutes), and particularly, **do not** update the project as suggested in the pop-up.

Android Studio will start a "Gradle project sync" automatically, which will take a couple of minutes to finish. You can see it (still) running:

![AS\_download\_dependencies](../images/Building-the-App/036_GradleSyncing.png)

```{admonition} NEVER UPDATE GRADLE!
:class: warning

Android Studio might recommend updating the gradle system. **Never update gradle!** This will lead to difficulties.
```

Only on windows computers: You might get a notification about windows defender running: Click on **Automatically** and confirm, it will make the build run faster!

![Windows Defender](../images/Building-the-App/037_WindowsDefender.png)

You can leave the gradle sync running and follow the next steps already.

(Сборка-APK-задать-путь-к-git-в-настройках) =

### Set Git path in Android Studio preferences

Теперь мы скажем Android Studio, где найти Git, который был установлен [ранее](Install-Git).

- Только для пользователей Windows: убедитесь, что вы перезагрузили компьютер после [установки Git](Install-Git). If not, restart now and re-open Android Studio

In the top left corner of **Android Studio**, open the hamburger menu and navigate to **File** > **Settings** (on Windows) or **Android Studio** > **Preferences** (on Mac).
This opens the following window, click to expand the dropdown called **Version Control** (1) and select **Git**

![Version\_control\_Git](../images/Building-the-App/038_SettingsGit.png)

Check if **Android Studio** can automatically locate the correct **Path to Git executable** automatically by clicking the button "Test" (1):

![Git Executable](../images/Building-the-App/039_GitTest.png)

Если автоматическая настройка прошла успешно, то рядом с путем к **Git** будет показана его версия.

![Git\_version\_displayed](../images/Building-the-App/039_GitTestSuccess.png)

If you find that **git.exe** is not found automatically, or that clicking "Test" results in an error (1), you can either

- manually enter the path which you saved [earlier](Make_a_note_of_Git_path), or
- click on the folder icon (1) and manually navigating to the directory where **git.exe** was installed [earlier](Make_a_note_of_Git_path)
- Verify your settings with the **Test** button!

  ![Git not found](../images/Building-the-App/039_GitTestError.png)

(Сборка-APK-генерировать-подписанный-apk)=

### Построение подписанного приложения AAPS apk

```{admonition} Why does the AAPS app need to be "signed"?
:class: dropdown

Android requires each app to be _signed_, to ensure that it can only be updated later from the same trusted source that released the original app. For more information on this topic, follow [this link](https://developer.android.com/studio/publish/app-signing.html#generate-key). 

For our purposes, this just means that we generate a signing or "keystore" file and use it when we build the **AAPS** app.
```

**Important: Make sure the gradle sync is finished successfully before proceeding!**

Click the hamburger menu on the top left to open the menu bar.
Select **Build** (1), then select **Generate Signed App Bundle / APK** (2)

![Build apk](../images/Building-the-App/040_GenerateSignedAPK.png)

Выберите "APK" вместо "Android App Bundle" и нажмите "Далее":

![APK instead of bundle](../images/Building-the-App/041_APK.png)

На следующем экране убедитесь, что "Module" установлен в "AAPS.app" (1).

(Building-APK-wearapk)=

```{admonition} INFORMATION!
:class: information
If you want to create the apk for your watch, you now need to select AAPS.wear!
```

![Create\_key\_store](../images/Building-the-App/042_CreateNewKey.png)

Нажмите "Создать новый..." (2) для создания хранилища ключей.

```{admonition} INFORMATION!
:class: information
You will only need to create the keystore once.
If you have build AAPS before, do NOT create a new keystore but select your existing one and enter its passwords!
```

**_Примечание:_** Хранилище ключей - это файл, в котором хранится информация о подписи приложения. Он зашифрован и информация защищена паролями.

![Create key store](../images/Building-the-App/043_Keystore.png)

- Click the "folder" symbol (1) to select a path on your computer for your key store.

  Do **not** use the directory where you stored your sourcecode but some directory that you would also transfer to a new computer.

```{admonition} WARNING!
:class: warning
Make sure to note down for yourself where your keystore is stored. You will need it when you build the next AndroidAPS update!
```

- Now choose a simple password (and make a note of it), enter it in the password box (2), and confirm it (2).

  Примечание: Пароли для хранилища ключей и ключей не должны быть сложными. Если вы потеряете пароль, смотрите [решение проблем при потере ключей](troubleshooting_androidstudio-lost-keystore).

- По умолчанию псевдоним (3) для вашего ключа это "key0", оставьте его без изменений.

- Теперь вам нужен пароль для ключа. Для простоты можете использовать тот же пароль, что и для хранилища ключей выше. Enter a password (4) and confirm it.

```{admonition} WARNING!
:class: warning
Note down these passwords! You will need them when you build the next AAPS update!
```

- The validity is 25 years by default, leave it as it is.

- Enter your first and last name (5). No other information needs to be added but you are free to do (6-7).

- Нажмите "OK" (8), чтобы продолжить:

On the **Generate signed App Bundle or APK** page, the path to your keystore will now be displayed. Now re-enter the Key Store password (1) and Key password (2), and tick the box (3) to remember passwords, so you don't have to enter them again next time you build the apk (i.e. when updating to a new AAPS version). Нажмите "Далее" (4):

![Remember passwords](../images/Building-the-App/044_RememberPwd.png)

On the next screen, select build variant "fullRelease" (2) and click "Create" (3). You should remember the directory displayed at (1), as later you will find your built apk file there!

![Select build variant](../images/Building-the-App/045_BuildPath.png)

Android Studio теперь создаст приложение **AAPS** apk. It will show "Gradle Build running" (2) at the bottom right. The process takes some time, depending on your computer and internet connection, so **be patient!** If you want to watch the progress of the build, click on the small hammer "build" (1) at the bottom of Android Studio:

![Gradle Running](../images/Building-the-App/046_BuildRunning.png)

Теперь вы можете наблюдать за ходом построения приложения:

![Android\_Studio\_building](../images/Building-the-App/047_BuildDetails.png)

После завершения сборки Android Studio выведет сообщение "СБОРКА ЗАВЕРШЕНА УСПЕШНО.". Вы увидите всплывающее уведомление, на которое можете нажать, чтобы найти файл ("locate"). If you miss this, click on the notification icon (1) and then on **locate** (2) at the very bottom of the screen to bring up the Notifications:

![Build finished](../images/Building-the-App/049_ReopenNotification.png)

_If the build was not successful, refer to the [Android Studio Troubleshooting section](../Installing-AndroidAPS/troubleshooting_androidstudio)._

В окне Уведомления нажмите на синюю ссылку "locate":

![Locate build](../images/Building-the-App/048_BuildFinished.png)
Your file manager will open and show you the build apk file that you have just built.

![File location apk](../images/Building-the-App/050_LocateAPK.png)

Поздравляем! Now you have built the **AAPS** apk file, you will be transferring this file to your smartphone in the next section of the docs.

Move to the next stage of [Transferring and Installing **AAPS**](Transferring-and-installing-AAPS.md).
