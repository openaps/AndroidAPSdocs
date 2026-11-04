(github-cherry-pick)=

# Kūrimas naršyklėje: vieno pakeitimo įtraukimas (cherry-pick)

```{note}
Tai pasirenkamas, sudėtingesnis veiksmas. Jis veikia tik tada, kai kuriate su **fork** (savo saugyklos kopija) ([kūrimo naršyklėje 1–4 žingsniai](../SettingUpAaps/BrowserBuild.md)). **AAPS Builder** saugyklose šios darbo eigos (workflow) nėra.
```

Naudokite tai tik tada, kai kūrėjas paprašo išbandyti konkretų pakeitimą (jis duoda vieną ar kelis commit maišos kodus, angl. hash), kol jo dar nėra išleistoje versijoje.

## Prieš pradedant

- [Sinchronizuokite savo fork](#Update-to-new-version-update-your-repo): ši darbo eiga sukuria dabartinę jūsų atšakos būseną, o ne versiją, kurią pasirenkate iš sąrašo.
- Google Drive turi būti autorizuotas ([3 žingsnis](../SettingUpAaps/BrowserBuildGoogleDrive.md)): sukurta programėlė išsaugoma ten, kaip ir įprasto kūrimo metu.

## Darbo eigos paleidimas

1. Savo AndroidAPS fork GitHub svetainėje atidarykite **Actions**.
2. Išskleiskite **All workflows** ir pasirinkite **Cherry Pick CI (Pre-release Feature Backport)**.
3. Spauskite **Run workflow** ir užpildykite:

   ![aaps_cherry-pick_ci](../images/Building-the-App/CI/aaps_cherry_pick_ci.png)

   - **Use workflow from**: atšaka, į kurią reikia įtraukti pakeitimus, paprastai `master`.
   - **Upstream repository**: saugykla, iš kurios imami pakeitimai. Palikite `nightscout/AndroidAPS`, nebent kūrėjas nurodė kitaip.
   - **Commit hash(es) to cherry-pick**: gautas (-i) maišos kodas (-ai), atskirti tarpais.
   - **Select Build Variant**: žr. [variantus](#browserbuild-variant) (paprastai `fullRelease`).
4. Spauskite **Run workflow**. Kai darbas baigiamas, programėlė yra jūsų Google Drive, kaip ir po [įprasto kūrimo](../SettingUpAaps/BrowserBuildAPK.md).
