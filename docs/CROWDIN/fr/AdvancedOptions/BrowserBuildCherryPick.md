(github-cherry-pick)=

# Compilation dans le navigateur : cherry-pick d'un commit

```{note}
Cette opération est facultative et avancée. Elle fonctionne seulement si vous compilez avec un **fork** ([étapes 1 à 4 de la compilation dans le navigateur](../SettingUpAaps/BrowserBuild.md)). Les dépôts **AAPS Builder** n'ont pas ce workflow.
```

Utilisez-la seulement quand un développeur vous demande de tester une modification précise (il vous donne un ou plusieurs hashs de commit) avant qu'elle soit dans une version publiée.

## Avant de commencer

- [Synchronisez votre fork](#Update-to-new-version-update-your-repo) : ce workflow compile l'état actuel de votre branche, pas une version choisie dans une liste.
- Google Drive doit être autorisé ([étape 3](../SettingUpAaps/BrowserBuildGoogleDrive.md)) : l'application compilée y est enregistrée, comme pour une compilation normale.

## Lancer le workflow

1. Dans votre fork GitHub d'AndroidAPS, ouvrez **Actions**.
2. Dépliez **All workflows** (tous les workflows) et choisissez **Cherry Pick CI (Pre-release Feature Backport)**.
3. Appuyez sur **Run workflow** (lancer le workflow) et remplissez :

   ![aaps_cherry-pick_ci](../images/Building-the-App/CI/aaps_cherry_pick_ci.png)

   - **Use workflow from** : la branche à laquelle ajouter les commits, normalement `master`.
   - **Upstream repository** : le dépôt d'où viennent les commits. Gardez `nightscout/AndroidAPS`, sauf si le développeur vous a dit autre chose.
   - **Commit hash(es) to cherry-pick** : le ou les hashs que vous avez reçus, séparés par des espaces.
   - **Select Build Variant** : voir les [variantes](#browserbuild-variant) (normalement `fullRelease`).
4. Appuyez sur **Run workflow**. Quand il est terminé, l'application est dans votre Google Drive, comme après une [compilation normale](../SettingUpAaps/BrowserBuildAPK.md).
