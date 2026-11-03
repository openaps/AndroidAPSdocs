(github-cherry-pick)=

# Bygge i webbläsaren: cherry-picka en commit

```{note}
Detta är ett valfritt och avancerat steg. Det fungerar bara om du bygger med en **fork** ([Bygge i webbläsaren, steg 1–4](../SettingUpAaps/BrowserBuild.md)). Repon från **AAPS Builder** innehåller inte detta arbetsflöde.
```

Använd detta bara när en utvecklare ber dig testa en viss ändring (du får en eller flera commit-hashar) innan den finns i en släppt version.

## Innan du börjar

- [Synkronisera din fork](#Update-to-new-version-update-your-repo): detta arbetsflöde bygger din gren som den ser ut just nu, inte en version som du väljer i en lista.
- Google Drive måste vara auktoriserat ([steg 3](../SettingUpAaps/BrowserBuildGoogleDrive.md)): den byggda appen sparas där, precis som vid ett vanligt bygge.

## Kör arbetsflödet

1. Öppna **Actions** i din GitHub-fork av AndroidAPS.
2. Fäll ut **All workflows** och välj **Cherry Pick CI (Pre-release Feature Backport)**.
3. Tryck på **Run workflow** och fyll i:

   ![aaps_cherry-pick_ci](../images/Building-the-App/CI/aaps_cherry_pick_ci.png)

   - **Use workflow from**: grenen som du vill lägga till commitarna i, oftast `master`.
   - **Upstream repository**: repot som commitarna kommer från. Behåll `nightscout/AndroidAPS` om inte utvecklaren har sagt något annat.
   - **Commit hash(es) to cherry-pick**: den eller de hashar som du har fått, åtskilda med mellanslag.
   - **Select Build Variant**: se [varianter](#browserbuild-variant) (oftast `fullRelease`).
4. Tryck på **Run workflow** (kör arbetsflöde). När det är klart finns appen i din Google Drive, precis som efter ett [vanligt bygge](../SettingUpAaps/BrowserBuildAPK.md).
