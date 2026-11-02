# Актуализиране до нова версия или клон

## Компилирайте сами, вместо да изтегляте

**AAPS** не може да се изтегли готово заради правилата за медицинските изделия. Законно е да компилирате приложението за собствена употреба, но НЕ БИВА да давате копие на други хора! Вижте [страницата с често задавани въпроси](../UsefulLinks/FAQ.md) за подробности.

## Важни бележки

- Моля, актуализирайте до новата версия на **AAPS** възможно най-скоро след като излезе нова версия.
- Когато излезе нова версия, в самото приложение **AAPS** ще получите информационно съобщение (банер) за новата версия.
- Новата версия ще бъде обявена и във Facebook, когато излезе.
- След излизането на новата версия, моля, прочетете внимателно [бележките към версиите](ReleaseNotes.md) и изяснете всички въпроси с общността във Facebook или Discord, преди да започнете актуализирането.
- Updating from **AAPS** 3.x? Read [What changed in AAPS v4](V4Changes.md) first: it lists the features that moved, were renamed or were removed.
- Do not forget to [export your settings](ExportImportSettings.md). When you import them again after the update, you choose whether the pump settings are replaced too.

## Актуализиране на AAPS с компилиране в браузъра

Вече сте компилирали приложението AAPS в браузъра? Следвайте инструкциите за метода, който сте използвали:

- **AAPS Builder**: you build from the **Build AAPS** page of your private repository (usually named `my-aaps`) and download the app from GitHub. Follow [Updating AAPS with AAPS Builder](#aaps-builder-updates). Няма fork, който да синхронизирате.
- **Fork and preparation file**: you run the **AAPS-CI** workflow in your own copy (fork) of AndroidAPS, a repository named `AndroidAPS` in your GitHub account, and the app lands in your Google Drive. Follow [Update with a browser (fork)](./UpdateBrowserBuild.md).

## Актуализиране на AAPS с Android Studio

Follow [these instructions](./UpdateComputerBuild.md).

## Актуализиране на AAPS от командния ред

Използвайте [същите инструкции](../SettingUpAaps/CLIBuild.md) като при предишното компилиране на AAPS, но изтеглете новите промени с git.

(Update-to-new-version-check-aaps-version-on-phone)=

## After the update

These steps are the same for every build method. Проверете в [бележките към версиите](../Maintenance/ReleaseNotes.md) дали има специални инструкции след актуализирането.

След като инсталирате новия apk файл:

- you can check the **AAPS** version on your phone by opening the **menu** (☰) on the top left and then **About** (as per the screenshot below). The current **AAPS** version can be viewed;
- make sure you have imported your settings; and
- please check your **AAPS** settings under **Settings** and ensure these remain accurate.

![Прозорец „За приложението“ с инсталираната версия на AAPS](../images/about_dialog_version.png)