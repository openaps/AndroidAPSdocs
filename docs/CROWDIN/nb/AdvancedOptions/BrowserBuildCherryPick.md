(github-cherry-pick)=

# Nettleserbygg: velge ut en enkelt commit (cherry-pick)

```{note}
Dette er en valgfri, avansert operasjon. Det virker bare hvis du bygger med en **fork** ([Nettleserbygg, steg 1–4](../SettingUpAaps/BrowserBuild.md)). **AAPS Builder**-repositoryer har ikke denne arbeidsflyten.
```

Bruk dette bare når en utvikler ber deg teste en bestemt endring (de gir deg én eller flere commit-hasher) før den er med i en utgitt versjon.

## Før du starter

- [Synkroniser forken din](#Update-to-new-version-update-your-repo): denne arbeidsflyten bygger den nåværende tilstanden til grenen din, ikke en versjon du velger fra en liste.
- Google Drive må være autorisert ([steg 3](../SettingUpAaps/BrowserBuildGoogleDrive.md)): den bygde appen lagres der, som ved et vanlig bygg.

## Kjør arbeidsflyten

1. Åpne **Actions** i GitHub-forken din av AndroidAPS.
2. Utvid **All workflows** og velg **Cherry Pick CI (Pre-release Feature Backport)**.
3. Trykk på **Run workflow** og fyll ut:

   ![aaps_cherry-pick_ci](../images/Building-the-App/CI/aaps_cherry_pick_ci.png)

   - **Use workflow from**: grenen commitene skal legges til i, vanligvis `master`.
   - **Upstream repository**: der commitene kommer fra. Behold `nightscout/AndroidAPS` med mindre utvikleren har sagt noe annet.
   - **Commit hash(es) to cherry-pick**: hashen(e) du fikk, adskilt med mellomrom.
   - **Select Build Variant**: se [varianter](#browserbuild-variant) (vanligvis `fullRelease`).
4. Trykk på **Run workflow**. Når den er ferdig, ligger appen i Google Drive, som etter et [vanlig bygg](../SettingUpAaps/BrowserBuildAPK.md).
