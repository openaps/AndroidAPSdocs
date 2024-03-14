# Обновление до новой версии или ветки

## Постройте сами вместо скачивания

**AAPS** недоступен для скачивания из-за законодательства, касающегося медицинских устройств. Построить приложение для собственного использования вполне законно, но передавать копию другим не разрешается! См. раздел [ FAQ ](../Getting-Started/FAQ.md).

## Важные Примечания

* Обновите **AAPS** как можно быстрее после выхода новой версии.
* Когда доступна новая версия, в самом приложении **AAPS** появляется информационный баннер об этом.
* О новой версии также выходит объявление на Facebook во время релиза.
* После выхода новой версии внимательно прочитайте [Примечания к выпуску](../Installing-AndroidAPS/Releasenotes.md) и, прежде чем приступать к обновлению, задайте интересующие вас вопросы сообществу на Facebook или Discord,.
* Следует использовать версию Android Studio.**[Hedgehog (2023.1.1) или Iguana (2023.2.1)](https://developer.android.com/studio/)**. Если у вас устаревшая версия, обновите Android Studio! 

## Обзор порядка обновления до новой версии AAPS

1. [Экспортируйте настройки](../Usage/ExportImportSettings-export-settings) из существующей версии **AAPS** на телефоне. Возможно, это не потребуется, но лучше обезопасить себя, чем потом жалеть.
2. [Обновите локальную копию](Update-to-new-version-update-your-local-copy) исходного кода AAPS (Git->Fetch и Git -> Pull)
3. [Постройте подписанный APK](Update-to-new-version-build-the-signed-apk)
4. [Перенесите собранное приложение](Building-APK-transfer-apk-to-smartphone) на телефон и установите его
5. [Проверьте версию](Update-to-new-version-check-aaps-version-on-phone) в AAPS
6. В зависимости от [источника ГК](../Configuration/BG-Source.md) убедитесь, что в xDrip отмечен [identify receiver](xdrip-identify-receiver)или воспользуйтесь ['самостоятельно собранным приложением Dexcom BYODA'](DexcomG6-if-using-g6-with-build-your-own-dexcom-app).

Если возникают сложности, см. отдельную страницу [ устранение неполадок Android Studio ](../Installing-AndroidAPS/troubleshooting_androidstudio).

## 1. Экспорт настроек

Смотрите [Настройки экспорта & импорта](ExportImportSettings-export-settings), если не помните, как это сделать.

(Update-to-new-version-update-your-local-copy)=

## 2. Обновление локальной копии

:::{admonition} ПРЕДУПРЕЖДЕНИЕ ::class: предупреждение Если вы обновляетесь с версий до 2.8.x, следуйте инструкциям по созданию [ Нового клона](../Installing-AndroidAPS/building-AAPS), так как данное руководство вам не подойдет! :::

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

Ваш исходный код теперь текущая версия. Пора собрать подписанное приложение apk, как описано в разделе [собираем подписанное приложениес apk](Building-APK-generate-signed-apk).

## 4. Перемещение apk

Следуето перенести apk на телефон, чтобы установить.

См. инструкции для [Передача APK на смартфон](Building-APK-transfer-apk-to-smartphone)

## 5. Установка apk

На телефоне необходимо разрешить установку из неизвестных источников. Инструкции, как это сделать, можно найти в интернете (например [здесь](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) или [здесь](https://www.androidcentral.com/unknown-sources)). Примечание: Если вы завершили сборку с тем же ключом в Android Studio, то вам не нужно удалять существующее приложение на телефоне. Когда вы устанавливаете apk, следуйте подсказкам для установки обновлений. Для других сценариев, таких как создание нового хранилища ключей в Android Studio, нужно удалить старое приложение перед установкой apk.

(Update-to-new-version-check-aaps-version-on-phone)=

## 6. Проверьте версию AAPS на телефоне

После установки нового приложения, проверьте версию AAPS, нажав на выпадающее меню вверху справа "о приложении". Вы увидете текущую версию.

![Установленная версия AAPS](../images/Update_VersionCheck282.png)

# Устранение неполадок

Если что-то пойдёт не так, не паникуйте.

Выдохните!

См. отдельную страницу [ устранение неполадок Android Studio ](../Installing-AndroidAPS/troubleshooting_androidstudio), возможно решение проблемы там уже есть!

:::{admonition} ПРЕДУПРЕЖДЕНИЕ :class: предупреждение Если вам нужна дальнейшая помощь, свяжитесь с другими пользователями **AAPS** на [Facebook](https://www.facebook.com/groups/AndroidAPSUsers), [Discord](https://discord.gg/4fQUWHZ4Mw) и т.п!