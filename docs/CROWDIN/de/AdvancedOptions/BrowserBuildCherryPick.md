(github-cherry-pick)=

# Browser-Build: Einen Commit gezielt übernehmen („cherry-pick“)

```{note}
Dies ist eine optionale, erweiterte Operation. Es funktioniert nur dann, wenn Du mit einem **Fork** baust ([Browser-Build Schritte 1–4](../SettingUpAaps/BrowserBuild.md)). **AAPS Builder**-Repositories sind in diesem Workflow nicht enthalten.
```

Benutzen das Vorgehen nur, wenn ein Entwickler Dich dazu auffordert, eine bestimmte Änderung zu testen (sie werden Dir einen oder mehrere Commit-Hashes nennen), bevor diese in ein Release übernommen wird.

## Bevor Du anfängst

- [Synchronisiere Deinen Fork](#Update-to-new-version-update-your-repo): Dieser Workflow erzeugt den aktuellen Stand Deines Branches und keine Version, die Du aus einer Liste auswählst.
- Google Drive muss autorisiert werden ([Schritt 3](../SettingUpAaps/BrowserBuildGoogleDrive.md)): Die Build-App wird dort wie bei einem normalen Build gespeichert.

## Workflow starten

1. Öffne in Deinem AndroidAPS GitHub-Fork **Actions**.
2. Klappe **All Workflows** auf und wähle **Cherry Pick CI (Pre-Release Feature Backport)**.
3. Tippe auf **Run Workflow** und fülle aus:

   ![aaps_cherry-pick_ci](../images/Building-the-App/CI/aaps_cherry_pick_ci.png)

   - **Use workflow from**: Den Branch zu dem Du die Commits hinzufügen möchtest. Normalerweise ist das `master`.
   - **Upstream repository**: Woher die Commits kommen. Ändere `nightscout/AndroidAPS` nicht, es sei denn ein Entwickler hat Dir das gesagt.
   - **Commit Hash(es) to cherry-pick**: Hash-Code(s), die Dir gegeben wurden (durch Leerzeichen getrennt).
   - **Select Build Variant**: siehe [variants](#browserbuild-variant) (normalerweise `fullRelease`).
4. Tippe auf **Run workflow**. Wenn er fertig ist, befindet sich die App, wie nach einem [normalen Build](../SettingUpAaps/BrowserBuildAPK.md), in Deinem Google Drive.
