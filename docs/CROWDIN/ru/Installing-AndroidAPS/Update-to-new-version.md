# Обновление до новой версии или ветки

## Постройте сами вместо того, чтобы загружать

**AndroidAPS недоступен для скачивания из-за законодательства, касающегося медицинских устройств. Построить приложение для собственного использования вполне законно, но вам не разрешается передавать копию другим! См. раздел [ FAQ ](../Getting-Started/FAQ.md).**

## Важные Примечания

* Пожалуйста, обновите приложение сразу же после выхода новой версии. Вы получите информацию о новой версии [ на главном экране AndroidAPS ](../Installing-AndroidAPS/Releasenotes#release-notes).
* Начиная с версии 2.3 для обновления требуется использовать git. Обновление с zip-файла больше не работает.
* Начиная с версии 2.7 местоположение репозитория изменено на <https://github.com/nightscout/AndroidAPS>. Если вы не знакомы с Git самый простой способ обновления- удалить каталог с AndroidAPS и [ клонировать заново](../Installing-AndroidAPS/Building-APK.md).
* Please use **[Android Studio Version 2020.3.1 (Arctic Fox)](https://developer.android.com/studio/)** or newer to build the apk.
* [Windows 10 32-bit systems](../Installing-AndroidAPS/troubleshooting_androidstudio#unable-to-start-daemon-process) are not supported by Android Studio 2020.3.1.
* Если вы используете xDrip, [identify the receiver](../Configuration/xdrip#identify-receiver).
* Dexcom G6 может также работать с ['самостоятельно построенным приложением Dexcom (BYODA)'](../Hardware/DexcomG6.html#if-using-g6-with-build-your-own-dexcom-app).

## Пошаговая инструкция для опытных пользователей

Пропустите этот раздел, если обновляете в первый раз. Пошаговая инструкция для опытных пользователей. Следующим шагом будет [ установить git ](../Installing-AndroidAPS/git-install.rst), если у вас его еще нет.

Если вы уже обновили AAPS в предыдущих версиях и используете Windows PC, то можете обновить приложение в четыре простых шага:

1. [ Экспортируйте параметры ](../Usage/ExportImportSettings#export-settings) из существующей версии AAPS на вашем телефоне, чтобы обезопасить себя
2. [ Обновите локальную копию ](../Installing-AndroidAPS/Update-to-new-version#update-your-local-copy) (VCS-> Git-> Pull)
3. [ Создайте подписанное APK ](../Installing-AndroidAPS/Update-to-new-version#generate-signed-apk) (Выберите 'app', а не 'wear' на своем пути!)
4. В зависимости от источника ГК [BG source](../Configuration/BG-Source.rst) убедитесь, что [identify receiver](../Configuration/xdrip#identify-receiver) отмечен в xDrip или используйте ['самостоятельно построенное приложение Dexcom BYODA '](../Hardware/DexcomG6.html#if-using-g6-with-build-your-own-dexcom-app).

## Установите git (если у вас его нет)

Следуйте инструкциям на странице установки [git](../Installing-AndroidAPS/git-install.rst).

## Обновите свою локальную копию

* Начиная с версии 2.7 местоположение репозитория изменено на <https://github.com/nightscout/AndroidAPS>. If you are not familiar with git the easiest way for update is remove directory with AndroidAPS on your disk and follow the instructions to do a [New clone](../Installing-AndroidAPS/Building-APK.md). If you have already changed the URL or update from version 2.8.x, follow these steps:

* Open your existing AndroidAPS project with Android Studio. You might need to select your project. (Double) click on the AndroidAPS project.
    
    ![Android Studio - Select Project](../images/update/01_ProjectSelection.png)

* In the menu bar of Android Studio, select Git -> Fetch
    
    ![Android Studio Menu - Git - Fetch](../images/update/02_GitFetch.png)

* You will see a message in the lower right corner that Fetch was successful.
    
    ![Android Studio Menu - Git - Fetch successful](../images/update/03_GitFetchSuccessful.png)

* In the menu bar, now select Git -> Pull
    
    ![Android Studio Menu - Git - Pull](../images/update/04_GitPull.png)

* Leave all options as they are (origin/master) and select Pull
    
    ![Android Studio - Git - Pull dialog](../images/update/05_GitPullOptions.png)

* Wait while download is in progress, you will see this as info in the bottom bar. When it's done, you will see a success message. Note: The files that were updated may vary! This is not an indication
    
    ![Android Studio - Pull successful](../images/update/06_GitPullSuccess.png)

* Gradle Sync will be running a couple of seconds to download some dependencies. Wait until it is finished.
    
    ![Android Studio - Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

* Your sourcecode is now the current released version. It's time to build the signed apk from it as described in the [build signed apk section](../Installing-AndroidAPS/Building-APK.html#generate-signed-apk).

## Check AAPS version on phone

After you installed the new apk, you can check the AAPS version on your phone by clicking the three dots menu on the top right and then About.

![AAPS version installed](../images/Update_VersionCheck282.png)

## Устранение неполадок

См. отдельную страницу [ устранение неполадок Android Studio ](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).