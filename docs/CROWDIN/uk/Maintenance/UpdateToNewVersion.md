# Оновлення до нової версії або гілки

## Зберіть самі, а не завантажуйте

**AAPS** не можна завантажити через правила для медичних виробів. Збирати застосунок для власного використання законно, але ви не повинні давати його копію іншим! Докладніше див. на [сторінці FAQ](../UsefulLinks/FAQ.md).

## Важливі примітки

- Будь ласка, оновіть **AAPS** до нової версії якомога швидше після виходу нового випуску.
- Коли вийде новий випуск, ви побачите в самому застосунку **AAPS** інформаційний банер про нову версію.
- Про нову версію також оголошують у Facebook у день випуску.
- Після виходу випуску уважно прочитайте [Примітки до випуску](ReleaseNotes.md) і з’ясуйте всі питання зі спільнотою у Facebook або Discord, перш ніж почати оновлення.
- Updating from **AAPS** 3.x? Read [What changed in AAPS v4](V4Changes.md) first: it lists the features that moved, were renamed or were removed.
- Do not forget to [export your settings](ExportImportSettings.md). When you import them again after the update, you choose whether the pump settings are replaced too.

## Оновлення AAPS зі збіркою в браузері

Ви вже зібрали застосунок AAPS у браузері? Виконайте інструкції для способу, який ви використали:

- **AAPS Builder**: you build from the **Build AAPS** page of your private repository (usually named `my-aaps`) and download the app from GitHub. Follow [Updating AAPS with AAPS Builder](#aaps-builder-updates). Тут немає fork, який треба синхронізувати.
- **Fork and preparation file**: you run the **AAPS-CI** workflow in your own copy (fork) of AndroidAPS, a repository named `AndroidAPS` in your GitHub account, and the app lands in your Google Drive. Follow [Update with a browser (fork)](./UpdateBrowserBuild.md).

## Оновлення AAPS з Android Studio

Виконайте [ці інструкції](./UpdateComputerBuild.md).

## Оновлення AAPS з командного рядка

Скористайтеся [тими самими інструкціями](../SettingUpAaps/CLIBuild.md), що й під час попередньої збірки AAPS, але отримайте нові зміни через git.

(Update-to-new-version-check-aaps-version-on-phone)=

## After the update

These steps are the same for every build method. Перевірте в [Примітках до випуску](../Maintenance/ReleaseNotes.md), чи є особливі інструкції після оновлення.

Після встановлення нового apk:

- you can check the **AAPS** version on your phone by opening the **menu** (☰) on the top left and then **About** (as per the screenshot below). The current **AAPS** version can be viewed;
- make sure you have imported your settings; and
- please check your **AAPS** settings under **Settings** and ensure these remain accurate.

![Вікно «Про застосунок» з версією встановленого AAPS](../images/about_dialog_version.png)