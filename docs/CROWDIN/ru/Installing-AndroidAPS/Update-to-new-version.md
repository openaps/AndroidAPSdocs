# Обновление до новой версии или ветки

## Постройте сами вместо скачивания

**AAPS** недоступен для скачивания из-за законодательства, касающегося медицинских устройств. Построить приложение для собственного использования вполне законно, но передавать копию другим не разрешается! См. раздел [ FAQ ](../Getting-Started/FAQ.md).

## Важные Примечания

* Обновите **AAPS** как можно быстрее после выхода новой версии.
* Когда доступна новая версия, в самом приложении **AAPS** появляется информационный баннер об этом.
* О новой версии также выходит объявление на Facebook во время релиза.
* После выхода новой версии внимательно прочитайте [Примечания к выпуску](../Installing-AndroidAPS/Releasenotes.md) и, прежде чем приступать к обновлению, задайте интересующие вас вопросы сообществу на Facebook или Discord,.
* Для **AAPS** версий 2.7 и выше, местоположение новых файлов на <https://github.com/nightscout/AndroidAPS>.
* The easiest way to update **AAPS** is to remove the directory with **AAPS** and do a [new clone](../Installing-AndroidAPS/Building-APK.md).
* Если у вас нет уверенности в том, как это сделать, можно удалить и переустановить Android Studio, чтобы убедиться, что сборка успешна. 
* В идеале, используйте последнюю версию Android Studio,, **[Giraffe, 2022.3.1](https://developer.android.com/studio/)**, но по крайней мере **Arctic Fox (2020.3.1)** или новее для сборки обновленной **AAPS** apk.
* При создании приложения **AAPS** с использованием платформы Windows, требуется 64-разрядная система Windows, поскольку 32-разрядные системы не поддерживаются.

## Обзор порядка обновления до новой версии AAPS

1. [Экспортируйте настройки](../Usage/ExportImportSettings-export-settings) из существующей версии **AAPS** на телефоне. Возможно, это не потребуется, но лучше обезопасить себя, чем потом жалеть.
2. [Обновите локальную копию](Update-to-new-version-update-your-local-copy) исходного кода AAPS (Git->Fetch и Git -> Pull)
3. [Постройте подписанный APK](Update-to-new-version-build-the-signed-apk)
4. [Transfer the built apk](Building-APK-transfer-apk-to-smartphone) to your phone and install it
5. [Проверьте версию](Update-to-new-version-check-aaps-version-on-phone) в AAPS
6. В зависимости от [источника ГК](../Configuration/BG-Source.md) убедитесь, что в xDrip отмечен [identify receiver](xdrip-identify-receiver)или воспользуйтесь ['самостоятельно собранным приложением Dexcom BYODA'](DexcomG6-if-using-g6-with-build-your-own-dexcom-app).

Если возникают сложности, см. отдельную страницу [ устранение неполадок Android Studio ](../Installing-AndroidAPS/troubleshooting_androidstudio).

## 1. Экспорт настроек

Смотрите [Настройки экспорта & импорта](ExportImportSettings-export-settings), если не помните, как это сделать.

(Update-to-new-version-update-your-local-copy)=

## 2. Обновление локальной копии

Начиная с версии 2.7 местоположение репозитория изменено на <https://github.com/nightscout/AndroidAPS>. Если вы не знакомы с Git самый простой способ обновления- удалить каталог с AAPS и [ клонировать заново](../Installing-AndroidAPS/Building-APK.md).

Если вы уже изменили URL или обновляетесь с версии 2.8.x, выполните следующее:

* Откройте существующий проект AAPS при помощи Android Studio. Может потребоваться выбрать проект. (дважды) нажмите на проект AAPS.
    
    ![Android Studio - Select Project](../images/update/01_ProjectSelection.png)

* В строке меню Android Studio, выберите Git -> Выбрать
    
    ![Android Studio Menu - Git - Fetch](../images/update/02_GitFetch.png)

* Вы увидите сообщение в правом нижнем углу, что выборка прошла успешно.
    
    ![Android Studio Menu - Git - Fetch successful](../images/update/03_GitFetchSuccessful.png)

* В меню теперь выберите Git -> Получить
    
    ![Android Studio Menu - Git - Pull](../images/update/04_GitPull.png)

* Оставьте все параметры как есть (источник/master) и выберите Получить
    
    ![Android Studio - Git - Pull dialog](../images/update/05_GitPullOptions.png)

* Подождите, пока идет загрузка, вы увидите информацию о процессе в нижней панели. По окончании появится сообщение об успехе. Примечание: Обновленные файлы могут отличаться! Это не индикатор
    
    ![Android Studio - Pull successful](../images/update/06_GitPullSuccess.png)

* Синхронизация Gradle будет запущена на пару секунд, чтобы загрузить некоторые зависимости. Дождитесь завершения процесса.
    
    ![Android Studio - Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

(Update-to-new-version-build-the-signed-apk)=

## 3. Build the Signed APK

Your sourcecode is now the current released version. It's time to build the signed apk from it as described in the [build signed apk section](Building-APK-generate-signed-apk).

## 4. Transfer the apk

You need to transfer the apk to your phone so you can install it.

See the instructions for [Transfer APK to smartphone](Building-APK-transfer-apk-to-smartphone)

## 5. Install apk

На телефоне необходимо разрешить установку из неизвестных источников. Инструкции, как это сделать, можно найти в интернете (например [здесь](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) или [здесь](https://www.androidcentral.com/unknown-sources)). Note: If you completed the build with the same existing key store in Android Studio, then you do not need to remove the existing app on your phone. When you install the apk, follow the prompts to install updates. For other scenarios such as establishing a new key store in Android Studio for your signed apk, you will need to delete the old app before installing the apk.

(Update-to-new-version-check-aaps-version-on-phone)=

## 6. Check AAPS version on phone

After you installed the new apk, you can check the AAPS version on your phone by clicking the three dots menu on the top right and then About. You should see the current version.

![AAPS version installed](../images/Update_VersionCheck282.png)

# Устранение неполадок

If anything goes wrong, don't panic.

Take a breath!

Then see the separate page [troubleshooting Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio) if your problem is already documented!