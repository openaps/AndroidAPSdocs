(github-cherry-pick)=

# Zostavenie v prehliadači: cherry-pick commitu

```{note}
Toto je voliteľný, pokročilý postup. Funguje iba vtedy, ak zostavujete s **forkom** ([Zostavenie v prehliadači, kroky 1–4](../SettingUpAaps/BrowserBuild.md)). Repozitáre **AAPS Builder** tento workflow neobsahujú.
```

Použite ho iba vtedy, keď vás vývojár požiada o otestovanie konkrétnej zmeny (dá vám jeden alebo viac hashov commitov) ešte predtým, ako je vo vydanej verzii.

## Skôr než začnete

- [Synchronizujte svoj fork](#Update-to-new-version-update-your-repo): tento workflow zostaví aktuálny stav vašej vetvy, nie verziu, ktorú vyberiete zo zoznamu.
- Disk Google musí byť autorizovaný ([Krok 3](../SettingUpAaps/BrowserBuildGoogleDrive.md)): zostavená aplikácia sa tam uloží ako pri bežnom zostavení.

## Spustenie workflowu

1. Vo svojom forku AndroidAPS na GitHube otvorte **Actions**.
2. Rozbaľte **All workflows** a vyberte **Cherry Pick CI (Pre-release Feature Backport)**.
3. Ťuknite na **Run workflow** a vyplňte:

   ![aaps_cherry-pick_ci](../images/Building-the-App/CI/aaps_cherry_pick_ci.png)

   - **Use workflow from**: vetva, do ktorej sa commity pridajú, zvyčajne `master`.
   - **Upstream repository**: odkiaľ commity pochádzajú. Ponechajte `nightscout/AndroidAPS`, ak vám vývojár nepovedal inak.
   - **Commit hash(es) to cherry-pick**: hash(e), ktoré ste dostali, oddelené medzerami.
   - **Select Build Variant**: pozrite [varianty](#browserbuild-variant) (zvyčajne `fullRelease`).
4. Ťuknite na **Run workflow**. Keď sa workflow dokončí, aplikácia je na vašom Disku Google, rovnako ako po [bežnom zostavení](../SettingUpAaps/BrowserBuildAPK.md).
