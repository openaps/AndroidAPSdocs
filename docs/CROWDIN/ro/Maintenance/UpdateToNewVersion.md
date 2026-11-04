# Update to a new version or branch

## Construiți aplicația, nu o descărcați

**AAPS** is not available to download, due to regulations concerning medical devices. It is legal to build the app for your own use, but you must not give a copy to others! See [FAQ page](../UsefulLinks/FAQ.md) for details.

## Note importante

- Please update to the new version of **AAPS** as soon as possible after a new release is available.
- When a new release is available, in the **AAPS** app itself, you will receive an information banner about the new version.
- Noua versiune va fi anunțată și pe Facebook în momentul lansării.
- Following the release, please read the [Release Notes](ReleaseNotes.md) in detail, and clarify any queries with the community on Facebook or Discord, before proceeding with the update.
- Updating from **AAPS** 3.x? Read [What changed in AAPS v4](V4Changes.md) first: it lists the features that moved, were renamed or were removed.
- Do not forget to [export your settings](ExportImportSettings.md). When you import them again after the update, you choose whether the pump settings are replaced too.

## Actualizarea AAPS cu construirea în browser

You already built your AAPS app with a browser? Urmați instrucțiunile pentru metoda pe care ați folosit-o:

- **AAPS Builder**: you build from the **Build AAPS** page of your private repository (usually named `my-aaps`) and download the app from GitHub. Follow [Updating AAPS with AAPS Builder](#aaps-builder-updates). Nu există niciun fork de sincronizat.
- **Fork and preparation file**: you run the **AAPS-CI** workflow in your own copy (fork) of AndroidAPS, a repository named `AndroidAPS` in your GitHub account, and the app lands in your Google Drive. Follow [Update with a browser (fork)](./UpdateBrowserBuild.md).

## Actualizarea AAPS cu Android Studio

Urmați [aceste instrucțiuni](./UpdateComputerBuild.md).

## Actualizarea AAPS din linia de comandă

Use the [same instructions](../SettingUpAaps/CLIBuild.md) as when building AAPS previously, but pull new changes with git.

(Update-to-new-version-check-aaps-version-on-phone)=

## After the update

These steps are the same for every build method. Check in the [Release Notes](../Maintenance/ReleaseNotes.md) if there are any specific instructions after update.

After you installed the new apk:

- puteți verifica versiunea **AAPS** pe telefon deschizând **meniul** (☰) din stânga sus și apoi **Despre** (ca în captura de ecran de mai jos). Versiunea actuală a **AAPS** poate fi văzută;
- asigurați-vă că ați importat setările; și
- verificați setările **AAPS** din **Setări** și asigurați-vă că sunt în continuare corecte.

![Dialogul Despre cu versiunea AAPS instalată](../images/about_dialog_version.png)