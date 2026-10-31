(github-cherry-pick)=

# Компилиране в браузъра: cherry-pick на къмит

```{note}
Това е допълнителна операция за напреднали. Тя работи само ако компилирате с **fork** ([Компилиране в браузъра – стъпки 1–4](../SettingUpAaps/BrowserBuild.md)). Хранилищата (repositories) на **AAPS Builder** нямат този работен процес (workflow).
```

Използвайте това само когато разработчик ви помоли да тествате конкретна промяна (той ви дава един или повече хешове на къмити) преди тя да е в издадена версия.

## Преди да започнете

- [Синхронизирайте своя fork](#Update-to-new-version-update-your-repo): този работен процес компилира текущото състояние на вашия клон, а не версия, която избирате от списък.
- Google Drive трябва да е оторизиран ([Стъпка 3](../SettingUpAaps/BrowserBuildGoogleDrive.md)): компилираното приложение се запазва там, както при обикновена компилация.

## Стартиране на работния процес

1. Във вашия fork на AndroidAPS в GitHub отворете **Actions**.
2. Разгънете **All workflows** и изберете **Cherry Pick CI (Pre-release Feature Backport)**.
3. Докоснете **Run workflow** и попълнете:

   ![aaps_cherry-pick_ci](../images/Building-the-App/CI/aaps_cherry_pick_ci.png)

   - **Use workflow from**: клонът, към който да се добавят къмитите, обикновено `master`.
   - **Upstream repository**: откъде идват къмитите. Оставете `nightscout/AndroidAPS`, освен ако разработчикът не ви е казал друго.
   - **Commit hash(es) to cherry-pick**: хешът/хешовете, които сте получили, разделени с интервали.
   - **Select Build Variant**: вижте [варианти (variants)](#browserbuild-variant) (обикновено `fullRelease`).
4. Докоснете **Run workflow**. Когато приключи, приложението е във вашия Google Drive, както след [обикновена компилация](../SettingUpAaps/BrowserBuildAPK.md).
