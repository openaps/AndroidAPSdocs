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

Detailed description of the steps necessary to build the APK file.

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

* Click the small triangle next to Version Control (1.) to open the sub-menu.
* Click Git (2.).
* Make sure update method "Merge" (3.) is selected.
* Check if Android Studio can locate path to git.exe automatically by clicking the button "Test" (4.)

![Android Studio settings](../images/AndroidStudio361_09.png)

* If automatic setting is successful git version will be displayed.
* Click "OK" in the dialog box (1.) and "OK" in the settings window (2.).

![Automatic git installation succeeded](../images/AndroidStudio361_10.png)

* In case file git.exe cannot be found click "OK" in the dialog box (1.) and then the button with the three dots (2.).
* Use [search function](https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html) in windows explorer to find "git.exe" if you are unsure where it can be found. You are looking for git.exe located in \bin\ folder.
* Select path to git.exe and make sure you selected the one in ** \bin\ ** folder (3.) and click "OK" (4.).
* Close settings window by clicking "OK" button (5.).

![Automatic git installation failed](../images/AndroidStudio361_11.png)

* **Reboot your computer to update system environment.**

### Mac

* Any git version should work. For example <https://git-scm.com/download/mac>.
* Use homebrew to install git: ```$ brew install git```.
* For details on installing git see the [official git documentation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
* If you install git via homebrew there is no need to change any preferences. Just in case: They can be found here: Android Studio - Preferences.

## Скачайте код AndroidAPS

* **If you haven't already rebooted your computer after setting git path in preferences do it now. System environment must be updated.**
* On the Android Studio welcome screen click the small triangle right of "Check out project from version control" (1.).
* Select "Git" (2.).

![Check out project from version control from welcome screen](../images/AndroidStudio361_12.png)

* If you already opened Android Studio and do not see the welcome screen anymore select File (1.) > New (2.) > Project from Version Control... (3.) > Git (4.).

![Check out project from version control within Android Studio](../images/AndroidStudio361_13.png)

* Fill in the URL to the main AndroidAPS repository ("https://github.com/MilosKozak/AndroidAPS") (1.).
* Choose the directory where you want to save the cloned code.
* Click button "Test" (2.).
* If test cannot be completed successfully check URL, correct and click "Test" again.
* If URL is entered correctly "Connection successful" (3.) will be shown.
* Click button "Clone" (4.).

![Clone repository](../images/AndroidStudio361_14.png)

* Do not click "Background" while repository is cloned!

![Clone repository - no background action](../images/AndroidStudio361_15.png)

* After repository is cloned successfully open your local copy by clicking "Yes".

![Open repository](../images/AndroidStudio361_16.png)

* In the lower right corner you will see the information that Android Studio is running background tasks.

![Background tasks](../images/AndroidStudio361_17.png)

* Grant access if your firewall is asking for permission.

![Firewall permission java](../images/AndroidStudio361_18.png)

* Once the background tasks are finished you will probably see the following error message:

![SDK licence](../images/AndroidStudio361_19.png)

## Загрузите Android SDK

* Click File > Settings.

![Open settings](../images/AndroidStudio361_20.png)

* Click the small triangle next to Appearance & Behaviour (1.).
* Click the small triangle next to System Settings (2.) and select Android SDK (3.)
* Check the box left of "Android 9.0 (Pie)" (4.) (API Level 28).

![SDK settings](../images/AndroidStudio361_21.png)

* Confirm changes by clicking OK.

![Confirm SDK changes](../images/AndroidStudio361_22.png)

* Accept licence agreement (1.) and click "Next" (2.).

![Accept SDK licence](../images/AndroidStudio361_23.png)

* Wait until installation is finished.

![Wait during SDK installation](../images/AndroidStudio361_24.png)

* When SDK installation is completed the "Finish" button will turn blue. Click this button.

![Finish SDK installation](../images/AndroidStudio361_25.png)

* Android Studio might recommend to update the gradle system. **Never update gradle!** This might lead to difficulties!
* If you see an information on the lower right side of your Android Studio window that Android Gradle Plugin is ready to update click on the text "update" (1.) and in the dialog box on "Don't remind me again for this project" (2.).

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