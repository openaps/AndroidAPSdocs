# Обновление до новой версии или ветки

## Notes for specific versions

* [Update to AAPS 2.7](../Maintenance/Update2_7.md)
* [Update to AAPS 3.0](../Maintenance/Update3_0.md)

## Постройте сами вместо скачивания

**AAPS** недоступен для скачивания из-за законодательства, касающегося медицинских устройств. Построить приложение для собственного использования вполне законно, но передавать копию другим не разрешается! See [FAQ page](../UsefulLinks/FAQ.md) for details.

## Важные Примечания

* Обновите **AAPS** как можно быстрее после выхода новой версии.
* Когда доступна новая версия, в самом приложении **AAPS** появляется информационный баннер об этом.
* О новой версии также выходит объявление на Facebook во время релиза.
* Following the release, please read the [Release Notes](ReleaseNotes.md) in detail, and clarify any queries with the community on Facebook or Discord, before proceeding with the update.
* You need to use version **[Android Studio version called at least Hedgehog (2023.1.1) or one more recent like Iguana, Jellyfish, Koala or Ladybug](https://developer.android.com/studio/)** of Android Studio. Если у вас устаревшая версия, обновите Android Studio! 

## Обзор порядка обновления до новой версии AAPS

1. [Export your settings](ExportImportSettings.md) from the existing **AAPS** version on your phone. Возможно, это не потребуется, но лучше обезопасить себя, чем потом жалеть.
2. [Update local copy](Update-to-new-version-update-your-local-copy) of the AAPS sourcecode (Git->Fetch and Git -> Pull)
3. [Постройте подписанный APK](Update-to-new-version-build-the-signed-apk)
4. [Transfer the built apk](Update-to-new-version-transfer-and-install) to your phone and install it
5. [Check the version](Update-to-new-version-check-aaps-version-on-phone) in AAPS
6. Depending on your [BG source](../Getting-Started/CompatiblesCgms.md) make sure to [identify receiver](#xdrip-identify-receiver) in xDrip or use the ['Build your own Dexcom App'](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app).

In case you experience problems, see separate page for [troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio).

## 1. Экспорт настроек

See the [Export & import settings](ExportImportSettings.md) page if you don't remember how to do this.

(Update-to-new-version-update-your-local-copy)=

## 2. Обновление локальной копии

```{admonition} WARNING :class: warning If you update from versions prior to 2.8.x, please follow the instructions to do a [New clone](../Installing-AndroidAPS/building-AAPS), as this guide will not work for you!

    <br />* Open your existing AAPS project with Android Studio. You might need to select your project. (Double) click on the AAPS project.
    
      ![Android Studio - Select Project](../images/update/01_ProjectSelection.png)
    
    * In the menu bar of Android Studio, select Git -> Fetch
    
       ![Android Studio Menu - Git - Fetch](../images/update/02_GitFetch.png)
    
    * You will see a message in the lower right corner that Fetch was successful.
    
       ![Android Studio Menu - Git - Fetch successful](../images/update/03_GitFetchSuccessful.png)
    
    * In the menu bar, now select Git -> Pull
    
       ![Android Studio Menu - Git - Pull](../images/update/04_GitPull.png)  
    
    * Leave all options as they are (origin/master) and select Pull
    
       ![Android Studio - Git - Pull dialog](../images/update/05_GitPullOptions.png)
    
    * Wait while download is in progress, you will see this as info in the bottom bar. По окончании появится сообщение об успехе.
    
      ```{note}
      The files that were updated may vary! This is not an indication
      ```
    
       ![Android Studio - Pull successful](../images/update/06_GitPullSuccess.png)
    
    * Gradle Sync will be running to download some dependencies. Дождитесь завершения процесса.
    
      ![Android Studio - Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)
    
    (Update-to-new-version-build-the-signed-apk)=
    ## 3. Build the Signed APK
    
    Your sourcecode is now the current released version. It's time to build the signed apk from it as described in the [build signed apk section](#Building-APK-generate-signed-apk).
    
    (Update-to-new-version-transfer-and-install)=
    
    ## 4. Transfer and install the apk
    You need to transfer the apk to your phone so you can install it.
    
    ```{note}
    If you completed the build with the same existing key store in Android Studio, then you do not need to remove the existing app on your phone. Когда вы устанавливаете apk, следуйте подсказкам для установки обновлений.
    Для других сценариев, таких как создание нового хранилища ключей в Android Studio, нужно удалить старое приложение перед установкой apk. **Make sure to export your settings!**
    

See the instructions for [transferring and installing AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md)

(Update-to-new-version-check-aaps-version-on-phone)=

## 5. Проверьте версию AAPS на телефоне

После установки нового приложения, проверьте версию AAPS, нажав на выпадающее меню вверху справа "о приложении". Вы увидете текущую версию.

![Установленная версия AAPS](../images/Update_VersionCheck320.png)

## Устранение неполадок

Если что-то пойдёт не так, не паникуйте.

Выдохните!

Then see the separate page [troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio) if your problem is already documented!

:::{admonition} ПРЕДУПРЕЖДЕНИЕ :class: предупреждение Если вам нужна дальнейшая помощь, свяжитесь с другими пользователями **AAPS** на [Facebook](https://www.facebook.com/groups/AndroidAPSUsers), [Discord](https://discord.gg/4fQUWHZ4Mw) и т.п!