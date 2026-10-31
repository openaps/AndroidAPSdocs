(github-cherry-pick)=

# Sestavení v prohlížeči: cherry-pick commitu

```{note}
Jde o volitelný, pokročilý postup. Funguje jen tehdy, když sestavujete s **forkem** ([kroky 1–4 sestavení v prohlížeči](../SettingUpAaps/BrowserBuild.md)). Repozitáře **AAPS Builder** toto workflow neobsahují.
```

Použijte ho jen tehdy, když vás vývojář požádá o otestování konkrétní změny (dá vám jeden nebo více hashů commitů) dříve, než bude ve vydané verzi.

## Než začnete

- [Synchronizujte svůj fork](#Update-to-new-version-update-your-repo): toto workflow sestaví aktuální stav vaší větve, ne verzi, kterou vyberete ze seznamu.
- Disk Google musí být autorizovaný ([Krok 3](../SettingUpAaps/BrowserBuildGoogleDrive.md)): sestavená aplikace se tam uloží stejně jako při běžném sestavení.

## Spuštění workflow

1. Ve svém forku AndroidAPS na GitHubu otevřete **Actions**.
2. Rozbalte **All workflows** (všechna workflow) a vyberte **Cherry Pick CI (Pre-release Feature Backport)**.
3. Klepněte na **Run workflow** (spustit workflow) a vyplňte:

   ![aaps_cherry-pick_ci](../images/Building-the-App/CI/aaps_cherry_pick_ci.png)

   - **Use workflow from**: větev, do které se commity přidají, obvykle `master`.
   - **Upstream repository**: odkud commity pocházejí. Ponechte `nightscout/AndroidAPS`, pokud vám vývojář neřekl jinak.
   - **Commit hash(es) to cherry-pick**: hash(e), které jste dostali, oddělené mezerami.
   - **Select Build Variant**: viz [varianty](#browserbuild-variant) (obvykle `fullRelease`).
4. Klepněte na **Run workflow**. Po dokončení je aplikace na vašem Disku Google, stejně jako po [běžném sestavení](../SettingUpAaps/BrowserBuildAPK.md).
