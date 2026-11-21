(browser-build)=

# Сборка через браузер

Сборка AAPS с использованием инструментов GitHub.

**Минимальная поддерживаемая версия AAPS - 3.3.2.1.**

## Постройте сами вместо скачивания

**Приложение AAPS (файл apk) недоступно для скачивания из-за правил, связанных с медицинскими устройствами. Построить приложение для собственного использования вполне законно, но передавать копию другим не разрешается!**

Подробности смотрите на странице [Часто задаваемые вопросы по работе ИПЖ](../UsefulLinks/FAQ.md).

(Building-APK-without-a-computer)=

## Выберите способ сборки

Выберите способ, который подходит устройству, с которого вы собираете:

### На телефоне Android: AAPS Builder (рекомендуется)

Страница настройки проведет вас по шагам создания вашего собственного приватного репозитория сборки на GitHub. Ничего не нужно устанавливать, не нужен файл подготовки, и каждую сборку вы запускаете сами. Приложение вы скачиваете прямо с GitHub. Google Диск не обязателен.

Это работает и в браузере на компьютере.

**→ [Сборка через браузер с AAPS Builder](BrowserBuildAapsBuilder.md)**

### On a computer or an iPhone / iPad: fork and preparation file

Вы делаете копию (fork) исходного кода AAPS на GitHub, создаете хранилище ключей с помощью файла подготовки, а собранное приложение сохраняется на ваш Google Диск. Выполните четыре шага ниже.

```{note}
**Already building with a fork?** Keep updating it as described in [Update with a browser](../Maintenance/UpdateBrowserBuild.md), or switch to AAPS Builder. To switch, first get a copy of your keystore from your fork: see [Coming from the previous browser build](#aaps-builder-from-fork).
```

Вам будет необходимо использовать несколько вкладок браузера и переключаться между ними. Например, в Chrome:

![fork_aaps](../images/Building-the-App/CI/BrowserBuildTabs.png)

```{note}
Вам придется переходить между вкладками: перед началом сборки закройте все открытые вкладки, чтобы не потеряться в процессе.
```

#### Что вам понадобится

- A **Google account**, so the built app can be saved to your Google Drive.
- **Учетная запись GitHub** (бесплатно) – вы создадите ее на шаге 1.
- **Веб-браузер**, в котором можно держать открытыми несколько вкладок сразу (ниже предполагается Chrome).
- A small **helper to run the preparation file**. Which one you need depends on the device you build from – there is nothing to install now, Step 2 walks you through it for your device:
  - **Computer (Windows / Mac / Linux):** Simple Web Server.
  - **iPhone / iPad:** дополнительное приложение не нужно – вы используете встроенное приложение «Файлы» и браузер.

#### The steps

The browser build is a series of choices. Выполните эти шаги по порядку:

1. **[Создайте свой fork на GitHub](BrowserBuildFork.md)** – сделайте личную копию исходного кода AAPS.
2. **[Create your signing keystore](BrowserBuildKeystore.md)** – the key decision: generate a new keystore (Option 1) or upload your existing one (Option 2), then follow the page for your device.
3. **[Authorize Google Drive](BrowserBuildGoogleDrive.md)** – let GitHub save the built app to your Google Drive.
4. **[Build the APK](BrowserBuildAPK.md)** – run the GitHub Actions workflow and pick your version and variant.

If you run into trouble, see **[Browser build troubleshooting](../GettingHelp/BrowserBuildTroubleshooting.md)**. For optional operations with a fork, see [exporting your keystore](#ci-keystore-export) or [cherry-picking a commit](#github-cherry-pick).

----

**Start with [Step 1 – Create your GitHub fork](BrowserBuildFork.md) →**

```{toctree}
:hidden:

AAPS Builder <BrowserBuildAapsBuilder.md>
Step 1: Create your fork <BrowserBuildFork.md>
Step 2: Create your keystore <BrowserBuildKeystore.md>
Step 3: Authorize Google Drive <BrowserBuildGoogleDrive.md>
Step 4: Build the APK <BrowserBuildAPK.md>
```
