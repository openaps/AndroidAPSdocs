(github-cherry-pick)=

# Budowanie w przeglądarce: przeniesienie commita (cherry-pick)

```{note}
To jest opcjonalna, zaawansowana operacja. Działa tylko wtedy, gdy budujesz z **forka** ([Budowanie w przeglądarce, kroki 1–4](../SettingUpAaps/BrowserBuild.md)). Repozytoria **AAPS Builder** nie zawierają tego workflow.
```

Używaj tego tylko wtedy, gdy deweloper poprosi cię o przetestowanie konkretnej zmiany (poda ci jeden lub więcej hashy commitów), zanim trafi ona do wydanej wersji.

## Zanim zaczniesz

- [Zsynchronizuj swój fork](#Update-to-new-version-update-your-repo): ten workflow buduje aktualny stan twojej gałęzi, a nie wersję wybraną z listy.
- Dysk Google musi mieć nadane uprawnienia ([Krok 3](../SettingUpAaps/BrowserBuildGoogleDrive.md)): zbudowana aplikacja jest tam zapisywana, tak jak przy zwykłym budowaniu.

## Uruchom workflow

1. W swoim forku AndroidAPS na GitHubie otwórz **Actions**.
2. Rozwiń **All workflows** i wybierz **Cherry Pick CI (Pre-release Feature Backport)**.
3. Dotknij **Run workflow** i wypełnij:

   ![aaps_cherry-pick_ci](../images/Building-the-App/CI/aaps_cherry_pick_ci.png)

   - **Use workflow from**: gałąź, do której mają trafić commity, zwykle `master`.
   - **Upstream repository**: repozytorium, z którego pochodzą commity. Zostaw `nightscout/AndroidAPS`, chyba że deweloper powiedział ci inaczej.
   - **Commit hash(es) to cherry-pick**: otrzymane hashe commitów, oddzielone spacjami.
   - **Select Build Variant**: zobacz [warianty](#browserbuild-variant) (zwykle `fullRelease`).
4. Dotknij **Run workflow**. Po zakończeniu aplikacja jest na twoim Dysku Google, tak jak po [zwykłym budowaniu](../SettingUpAaps/BrowserBuildAPK.md).
