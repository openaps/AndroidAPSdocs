(github-build-apk)=

# Збірка в браузері – Крок 4: Зберіть APK

```{note}
Це **крок 4** [збірки в браузері](BrowserBuild.md). Спочатку виконайте [Крок 3 – Авторизуйте Google Drive](BrowserBuildGoogleDrive.md).
```

## AAPS-CI у GitHub Actions для збірки APK AAPS
 - Підходить для звичайних користувачів.

```{tab-set}

:::{tab-item} Вікі
### Запустіть workflow, щоб зібрати підписаний APK

1. У вашій копії AndroidAPS на GitHub виберіть Actions.
2. Розгорніть All workflows.
3. Виберіть AAPS-CI

![Actions AAPS-CI](../images/update/CI/GitHubActions1.png)

4. Прокрутіть униз і натисніть Run workflow.

![Run Workflow](../images/update/CI/GitHubActions2.png)

5. Залиште в полі **Use workflow from** гілку master. У полі **Select AAPS Version** виберіть версію **AAPS**, яку хочете зібрати (зазвичай найновішу). Виберіть [варіант](#browserbuild-variant) (fullRelease) і натисніть Run workflow.



![Run Workflow](../images/update/CI/GitHubActions3.png)

6. Ви побачите повідомлення Workflow run was successfully requested. Оновіть сторінку в браузері, і ви зможете стежити за ходом збірки. Коли дія завершиться, біля дії AAPS CI з’явиться зелена галочка. Ви успішно зібрали оновлену версію AndroidAPS.

![Стеження за workflow](../images/update/CI/GitHubActions4.png)

### Встановіть APK AAPS

1. Відкрийте ваш Google Drive
2. Відкрийте папку AAPS, виберіть папку нової версії, і ви знайдете там версії для телефона і для Android Wear.

![Розташування в Google Drive](../images/update/CI/GitHubActions5.png)
:::

:::{tab-item} Відео
<div align="center" style="max-width: 360px; margin: auto; margin-bottom: 2em;">
  <div style="position: relative; width: 100%; aspect-ratio: 9/16;">
    <iframe
      src="https://geo.dailymotion.com/player/x9rdwms.html?video=x9rdwms&loop=true&mute=true"
      loading="lazy"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>
</div>
:::  

```

## Вибір версії для збірки

**Методом збірки в браузері можна зібрати лише версії AAPS від 3.3.2.1 і новіші.**

Натисніть **Select AAPS Version** і виберіть версію для збірки. Найновіша версія – вгорі списку.

![Список Select AAPS Version](../images/Building-the-App/CI/BrowserBuildVariant2.png)

(browserbuild-variant)=

## Вибір варіанта збірки

*Примітка: застосунки для Android і для Android Wear збираються автоматично.*

  - Виберіть потрібний варіант:
    - fullRelease: для звичайного використання з помпою, з усіма функціями.
    - [aapsclientRelease, aapsclient2Release, aapsclient3Release](#RemoteControl_aapsclient): для доглядачів (потрібен [Nightscout](../SettingUpAaps/Nightscout.md)). `aapsclient3Release` збирає **AAPSClient3**, доступний з версії **AAPS** 4.0 (див. [Про AAPSClient, AAPSClient2 і AAPSClient3](#remotecontrol-aapsclient-versions)).
    - pumpcontrolRelease: щоб замінити застосунок/пульт вашої помпи

![](../images/Building-the-App/CI/BrowserBuildVariant3.png)

Варіанти, що закінчуються на «Debug», означають, що APK буде зібрано в режимі налагодження. Це корисно розробникам для пошуку проблем.

<!-- If you want to test the items in a pull request has been moved to dev page /AdvancedOptions/DevBranch.md -->

----

Коли збірка успішно завершиться, apk зберігається на ваш Google Drive. Продовжуйте з розділу [Перенесення та встановлення AAPS](TransferringAndInstallingAaps.md).

```{note}
З вересня 2026 року [перевірка розробників Android](#android-developer-verification) від Google може, залежно від вашої країни, блокувати встановлення APK натисканням на файл. Безкоштовні обхідні способи описано на тій сторінці.
```

Якщо збірка не вдалася, спочатку [з’ясуйте в журналі збірки, що пішло не так](#aaps-ci-read-the-logs), а потім див. [Збірка в браузері: усунення проблем](../GettingHelp/BrowserBuildTroubleshooting.md). Щоб додати до збірки конкретний коміт, див. [перенесення коміту (cherry-pick)](#github-cherry-pick).
