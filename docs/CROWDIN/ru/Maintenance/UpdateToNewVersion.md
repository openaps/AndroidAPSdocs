# Обновление до новой версии или ветки

## Постройте сами вместо скачивания

**AAPS** недоступен для скачивания из-за законодательства, касающегося медицинских устройств. Построить приложение для собственного использования вполне законно, но передавать копию другим не разрешается! See [FAQ page](../UsefulLinks/FAQ.md) for details.

## Важные Примечания

* Обновите **AAPS** как можно быстрее после выхода новой версии.
* Когда доступна новая версия, в самом приложении **AAPS** появляется информационный баннер об этом.
* О новой версии также выходит объявление на Facebook во время релиза.
* Following the release, please read the [Release Notes](ReleaseNotes.md) in detail, and clarify any queries with the community on Facebook or Discord, before proceeding with the update.
* Следует использовать версию Android Studio.**[Hedgehog (2023.1.1) или Iguana (2023.2.1)](https://developer.android.com/studio/)**. Если у вас устаревшая версия, обновите Android Studio! 

## Обзор порядка обновления до новой версии AAPS

1. [Export your settings](ExportImportSettings.md) from the existing **AAPS** version on your phone. Возможно, это не потребуется, но лучше обезопасить себя, чем потом жалеть.
2. [Update local copy](#2-update-your-local-copy) of the AAPS sourcecode (Git->Fetch and Git -> Pull)
3. [Постройте подписанный APK](#3-build-the-signed-apk)
4. [Transfer the built apk](#4-transfer-the-apk) to your phone and install it
5. [Check the version](#6-check-aaps-version-on-phone) in AAPS
6. Depending on your [BG source](../Getting-Started/CompatiblesCgms.md) make sure to [identify receiver](#xdrip-identify-receiver) in xDrip or use the ['Build your own Dexcom App'](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app).

In case you experience problems, see separate page for [troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio).

## 1. Экспорт настроек

See the [Export & import settings](ExportImportSettings.md) page if you don't remember how to do this.

(Update-to-new-version-update-your-local-copy)=

## 2. Обновление локальной копии

    {admonition} WARNING
    :class: warning
    If you update from versions prior to 2.8.x, please follow the instructions to do a [New clone](../Installing-AndroidAPS/building-AAPS), as this guide will not work for you!

* Откройте существующий проект AAPS при помощи Android Studio. Может потребоваться выбрать проект. (дважды) нажмите на проект AAPS.
    
    ![Android Studio - Выберите проект](../images/update/01_ProjectSelection.png)

* В строке меню Android Studio, выберите Git -> Выбрать
    
    ![Android Studio - получение Git](../images/update/02_GitFetch.png)

* Вы увидите сообщение в правом нижнем углу, что выборка прошла успешно.
    
    ![Меню Android Studio - Git - Успешное получение](../images/update/03_GitFetchSuccessful.png)

* В меню теперь выберите Git -> Получить
    
    ![Android Studio - получение Git](../images/update/04_GitPull.png)

* Оставьте все параметры как есть (источник/master) и выберите Получить
    
    ![Android Studio - Git - Диалог Pull](../images/update/05_GitPullOptions.png)

* Подождите, пока идет загрузка, вы увидите информацию о процессе в нижней панели. По окончании появится сообщение об успехе. Примечание: Обновленные файлы могут отличаться! Это не индикатор
    
    ![Android Studio - Pull успешно](../images/update/06_GitPullSuccess.png)

* Синхронизация Gradle будет запущена на пару секунд, чтобы загрузить некоторые зависимости. Дождитесь завершения процесса.
    
    ![Android Studio - Синхронизация Gradle](../images/studioSetup/40_BackgroundTasks.png)

(Update-to-new-version-build-the-signed-apk)=

## 3. Построение подписанного приложения APK

Ваш исходный код теперь текущая версия. It's time to build the signed apk from it as described in the [build signed apk section](#Building-APK-generate-signed-apk).

## 4. Перемещение apk

Следуето перенести apk на телефон, чтобы установить.

See the instructions for [Transfer APK to smartphone](../SettingUpAaps/TransferringAndInstallingAaps.md)

## 5. Установка apk

На телефоне необходимо разрешить установку из неизвестных источников. Инструкции, как это сделать, можно найти в интернете (например [здесь](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) или [здесь](https://www.androidcentral.com/unknown-sources)). Примечание: Если вы завершили сборку с тем же ключом в Android Studio, то вам не нужно удалять существующее приложение на телефоне. Когда вы устанавливаете apk, следуйте подсказкам для установки обновлений. Для других сценариев, таких как создание нового хранилища ключей в Android Studio, нужно удалить старое приложение перед установкой apk.

(Update-to-new-version-check-aaps-version-on-phone)=

## 6. Проверьте версию AAPS на телефоне

После установки нового приложения, проверьте версию AAPS, нажав на выпадающее меню вверху справа "о приложении". Вы увидете текущую версию.

![Установленная версия AAPS](../images/Update_VersionCheck282.png)

## Troubleshooting

Если что-то пойдёт не так, не паникуйте.

Выдохните!

Then see the separate page [troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio) if your problem is already documented!

:::{admonition} ПРЕДУПРЕЖДЕНИЕ :class: предупреждение Если вам нужна дальнейшая помощь, свяжитесь с другими пользователями **AAPS** на [Facebook](https://www.facebook.com/groups/AndroidAPSUsers), [Discord](https://discord.gg/4fQUWHZ4Mw) и т.п!