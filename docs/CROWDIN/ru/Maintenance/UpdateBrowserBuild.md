# Update with a browser (fork)

```{tip}
You built AAPS with **AAPS Builder**? You don't need this page: see [Updating AAPS with AAPS Builder](#aaps-builder-updates).
```

## Постройте сами вместо скачивания

**AAPS** is not available to download, due to regulations concerning medical devices. Построить приложение для собственного использования вполне законно, но передавать копию другим не разрешается! Подробности смотрите на странице [Часто задаваемые вопросы по работе ИПЖ](../UsefulLinks/FAQ.md).

```{note}
In case you want to upgrade **AAPS** with a browser for the first time: copy your back-up keystore file to your Google Drive. Затем следуйте инструкции [Сборка **AAPS** через браузер](../SettingUpAaps/BrowserBuild.md) вместо этого руководства. Вместо создания нового хранилища ключей выберите то, которое вы скопировали с компьютера.
Это нужно сделать только в первый раз; при следующих обновлениях вы сможете следовать этому руководству.
```

```{tip}
**Switching to AAPS Builder?** [AAPS Builder](../SettingUpAaps/BrowserBuildAapsBuilder.md) is the simpler browser build: no fork to sync, and you download the app directly from GitHub. You don't have to switch: this guide keeps working. If you switch, first get a copy of your keystore from your fork, as explained in [Coming from the previous browser build](#aaps-builder-from-fork). Otherwise the new build cannot update the AAPS on your phone.
```

## Обзор: обновление AAPS до новой версии через браузер

```{contents} Steps for updating to a new version of AAPS
:depth: 1
:local: true
```

In case you experience problems, see separate page for [browser build troubleshooting](../GettingHelp/BrowserBuildTroubleshooting.md).

### Export your settings

Экспортируйте настройки из текущей версии **AAPS** на телефоне. Возможно, это не потребуется, но лучше обезопасить себя, чем потом жалеть.

Если вы не помните, как это сделать, см. страницу [Создание и восстановление резервных копий](ExportImportSettings.md).

(Update-to-new-version-update-your-repo)=
### Обновите свой репозиторий GitHub

[Войдите в GitHub](https://github.com/login).

1. Выберите Repositories.
2. Прокрутите вниз и выберите свой репозиторий AndroidAPS.

![Выбор репозитория AndroidAPS](../images/update/CI/GitHubUpdate1.png)

3. Проверьте, что вы используете свою копию AndroidAPS (Forked from nightscout/AndroidAPS)
4. Нажмите Sync Fork, чтобы обновить ее (число отстающих коммитов может отличаться от картинки)



![Синхронизация репозитория AndroidAPS](../images/update/CI/GitHubUpdate2.png)

5. Нажмите Update Branch

![Обновление репозитория AndroidAPS](../images/update/CI/GitHubUpdate3.png)

Примечание: если вы по ошибке изменили свою копию AndroidAPS, вы увидите этот экран. Отмените все изменения (коммиты) (Discard), чтобы вернуться к выпущенной версии.

![Отмена случайных изменений](../images/update/CI/GitHubUpdate4.png)

You have now synchronized (updated) your own copy with the latest release of **AAPS**. Отлично.

![Репозиторий синхронизирован](../images/update/CI/GitHubUpdate5.png)

### Запустите workflow для сборки подписанного APK

1. В своей копии AndroidAPS на GitHub выберите Actions.
2. Разверните All Workflows.
3. Выберите AAPS-CI

![Actions AAPS-CI](../images/update/CI/GitHubActions1.png)

4. Прокрутите вниз и нажмите Run Workflow.

![Run Workflow](../images/update/CI/GitHubActions2.png)

5. Keep the branch set to master. In **Select AAPS Version**, check that **4.0.0**, the newest version at the top of the list, is selected. If your fork is not up to date, the preselected version is an older one: if you run the workflow with the form as it opens, you rebuild that older version and your app is not updated. Choose the [variant](#browserbuild-variant) (fullRelease), and then tap Run workflow.

   ```{note}
   The list of versions is part of the workflow in your fork. If **4.0.0** is missing, your fork is not synchronized yet: go back to [Update your GitHub repository](#Update-to-new-version-update-your-repo).
   ```



![Run Workflow](../images/update/CI/GitHubActions3.png)

6. Вы увидите сообщение Workflow run was successfully requested. Обновите страницу браузера, и вы сможете следить за ходом сборки. Когда действие завершится, у действия AAPS CI появится зеленая галочка. You have successfully built the updated version of **AAPS**. Это значит, что APK основного приложения и APK для Wear теперь сохраняются прямо на ваш Google Диск (как описано ниже). APK AAPSClient можно скачать с Github > nightscout > AndroidAPS [здесь](https://github.com/nightscout/AndroidAPS/releases)


![Отслеживание workflow](../images/update/CI/GitHubActions4.png)


### Установите APK AAPS

1. Откройте свой Google Диск
2. Откройте папку AAPS, выберите папку новой версии: в ней будут версии и для телефона, и для Android Wear.

![Расположение на Google Диске](../images/update/CI/GitHubActions5.png)

```{note}
С сентября 2026 года [проверка разработчиков Android](#android-developer-verification) от Google может, в зависимости от вашей страны, блокировать установку APK нажатием на файл. Бесплатные обходные пути описаны на той странице.
```

Продолжите [здесь](#Update-to-new-version-check-aaps-version-on-phone)

(update-browser-build-troubleshooting)=

## Устранение неполадок

Если что-то пойдёт не так, не паникуйте.

Выдохните!

Then check if your problem is already documented: see [AAPS Builder troubleshooting](#aaps-builder-troubleshooting) if you build with **AAPS Builder**, or [Browser build troubleshooting](#aaps-ci-troubleshooting) otherwise.

Если нужна дополнительная помощь, обратитесь к другим пользователям **AAPS** в [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) или [Discord](https://discord.gg/4fQUWHZ4Mw).
