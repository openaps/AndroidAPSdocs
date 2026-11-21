# Обновление до новой версии или ветки

## Постройте сами вместо скачивания

**AAPS** недоступен для скачивания из-за законодательства, касающегося медицинских устройств. Построить приложение для собственного использования вполне законно, но передавать копию другим не разрешается! Подробности смотрите на странице [Часто задаваемые вопросы по работе ИПЖ](../UsefulLinks/FAQ.md).

## Важные Примечания

- Обновите **AAPS** как можно быстрее после выхода новой версии.
- Когда доступна новая версия, в самом приложении **AAPS** появляется информационный баннер об этом.
- О новой версии также выходит объявление на Facebook во время релиза.
- После выхода новой версии внимательно прочитайте [Примечания к изменениям в версиях](ReleaseNotes.md) и выясните все вопросы с сообществом в Facebook или Discord, прежде чем начинать обновление.
- Updating from **AAPS** 3.x? Read [What changed in AAPS v4](V4Changes.md) first: it lists the features that moved, were renamed or were removed.
- Do not forget to [export your settings](ExportImportSettings.md). When you import them again after the update, you choose whether the pump settings are replaced too.

## Обновление AAPS при сборке через браузер

You already built your AAPS app with a browser? Follow the instructions for the method you used:

- **AAPS Builder**: you build from the **Build AAPS** page of your private repository (usually named `my-aaps`) and download the app from GitHub. Follow [Updating AAPS with AAPS Builder](#aaps-builder-updates). There is no fork to sync.
- **Fork and preparation file**: you run the **AAPS-CI** workflow in your own copy (fork) of AndroidAPS, a repository named `AndroidAPS` in your GitHub account, and the app lands in your Google Drive. Follow [Update with a browser (fork)](./UpdateBrowserBuild.md).

## Обновление AAPS через Android Studio

Follow [these instructions](./UpdateComputerBuild.md).

## Обновление AAPS из командной строки

Используйте [те же инструкции](../SettingUpAaps/CLIBuild.md), что и при первой сборке AAPS, но получите новые изменения с помощью git.

(Update-to-new-version-check-aaps-version-on-phone)=

## After the update

These steps are the same for every build method. Проверьте в [Примечаниях к изменениям в версиях](../Maintenance/ReleaseNotes.md), нет ли особых инструкций после обновления.

После установки нового apk:

- you can check the **AAPS** version on your phone by opening the **menu** (☰) on the top left and then **About** (as per the screenshot below). The current **AAPS** version can be viewed;
- make sure you have imported your settings; and
- please check your **AAPS** settings under **Settings** and ensure these remain accurate.

![About dialog with the AAPS version installed](../images/update/about_dialog_version.png)