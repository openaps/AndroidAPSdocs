(github-cherry-pick)=

# Збірка в браузері: перенесення коміту (cherry-pick)

```{note}
Це необов'язкова операція для досвідчених користувачів. Вона працює лише тоді, коли ви збираєте з **fork** ([Збірка в браузері, кроки 1–4](../SettingUpAaps/BrowserBuild.md)). Репозиторії **AAPS Builder** не містять цього workflow.
```

Використовуйте це лише тоді, коли розробник просить вас перевірити певну зміну (він дає вам один або кілька хешів комітів) до того, як вона увійде у випущену версію.

## Перш ніж почати

- [Синхронізуйте свій fork](#Update-to-new-version-update-your-repo): цей workflow збирає поточний стан вашої гілки, а не версію, яку ви вибираєте зі списку.
- Google Drive має бути авторизований ([Крок 3](../SettingUpAaps/BrowserBuildGoogleDrive.md)): зібраний застосунок зберігається там, як і при звичайній збірці.

## Запуск workflow

1. У своєму fork AndroidAPS на GitHub відкрийте **Actions**.
2. Розгорніть **All workflows** і виберіть **Cherry Pick CI (Pre-release Feature Backport)**.
3. Натисніть **Run workflow** і заповніть:

   ![aaps_cherry-pick_ci](../images/Building-the-App/CI/aaps_cherry_pick_ci.png)

   - **Use workflow from** (гілка workflow): гілка, до якої треба додати коміти, зазвичай `master`.
   - **Upstream repository** (вихідний репозиторій): звідки беруться коміти. Залиште `nightscout/AndroidAPS`, якщо розробник не сказав інакше.
   - **Commit hash(es) to cherry-pick** (хеші комітів): хеш(і), які вам дали, через пробіл.
   - **Select Build Variant** (варіант збірки): див. [варіанти](#browserbuild-variant) (зазвичай `fullRelease`).
4. Натисніть **Run workflow**. Коли workflow завершиться, застосунок буде у вашому Google Drive, як після [звичайної збірки](../SettingUpAaps/BrowserBuildAPK.md).
