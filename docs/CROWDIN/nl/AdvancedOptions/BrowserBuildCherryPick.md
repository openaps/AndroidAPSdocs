(github-cherry-pick)=

# Bouwen in de browser: een commit cherry-picken

```{note}
Dit is een optionele, geavanceerde handeling. Het werkt alleen als je bouwt met een **fork** ([Bouwen in de browser, stap 1–4](../SettingUpAaps/BrowserBuild.md)). **AAPS Builder** repositories hebben deze workflow niet.
```

Gebruik dit alleen als een ontwikkelaar je vraagt om een bepaalde wijziging te testen (je krijgt dan een of meer commit hashes) voordat die in een uitgebrachte versie zit.

## Voordat je begint

- [Synchroniseer je fork](#Update-to-new-version-update-your-repo): deze workflow bouwt de huidige stand van je branch, niet een versie die je uit een lijst kiest.
- Google Drive moet toegang hebben gekregen ([Stap 3](../SettingUpAaps/BrowserBuildGoogleDrive.md)): de gebouwde app wordt daar opgeslagen, net als bij een normale build.

## De workflow starten

1. Open **Actions** in je GitHub fork van AndroidAPS.
2. Klap **All workflows** uit en kies **Cherry Pick CI (Pre-release Feature Backport)**.
3. Tik op **Run workflow** en vul in:

   ![aaps_cherry-pick_ci](../images/Building-the-App/CI/aaps_cherry_pick_ci.png)

   - **Use workflow from**: de branch waaraan de commits worden toegevoegd, meestal `master`.
   - **Upstream repository**: waar de commits vandaan komen. Laat `nightscout/AndroidAPS` staan, tenzij de ontwikkelaar iets anders zegt.
   - **Commit hash(es) to cherry-pick**: de hash(es) die je hebt gekregen, gescheiden door spaties.
   - **Select Build Variant**: zie [varianten](#browserbuild-variant) (meestal `fullRelease`).
4. Tik op **Run workflow**. Als de workflow klaar is, staat de app in je Google Drive, net als na een [normale build](../SettingUpAaps/BrowserBuildAPK.md).
