(github-cherry-pick)=

# Browser build: cherry-pick a commit

```{note}
This is an optional, advanced operation. It only works if you build with a **fork** ([Browser build steps 1–4](../SettingUpAaps/BrowserBuild.md)). **AAPS Builder** repositories do not include this workflow.
```

Use this only when a developer asks you to test a specific change (they give you one or more commit hashes) before it is in a released version.

## Prima di iniziare

- [Sync your fork](#Update-to-new-version-update-your-repo): this workflow builds the current state of your branch, not a version you pick from a list.
- Google Drive must be authorized ([Step 3](../SettingUpAaps/BrowserBuildGoogleDrive.md)): the built app is saved there, like a normal build.

## Run the workflow

1. In your GitHub fork of AndroidAPS, open **Actions**.
2. Espandi **All workflows** e seleziona **Cherry Pick CI (Pre-release Feature Backport)**.
3. Tocca **Run workflow** e compila:

   ![aaps_cherry-pick_ci](../images/Building-the-App/CI/aaps_cherry_pick_ci.png)

   - **Use workflow from**: il branch a cui aggiungere i commit, di solito `master`.
   - **Upstream repository**: where the commits come from. Lascia `nightscout/AndroidAPS`, a meno che lo sviluppatore non ti abbia detto altro.
   - **Commit hash(es) to cherry-pick**: the hash(es) you were given, separated by spaces.
   - **Select Build Variant**: see [variants](#browserbuild-variant) (normally `fullRelease`).
4. Tap **Run workflow**. Quando ha finito, l'app è nel tuo Google Drive, come dopo una [build normale](../SettingUpAaps/BrowserBuildAPK.md).
