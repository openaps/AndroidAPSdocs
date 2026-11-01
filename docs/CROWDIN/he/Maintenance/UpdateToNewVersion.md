# עדכון לגרסה חדשה או לענף חדש

## בנייה עצמית במקום הורדה

**AAPS** is not available to download, due to regulations concerning medical devices. בנייה עצמית של היישום לשימוש אישי הינה חוקית אך אסור לתת את היישום לאחרים! See [FAQ page](../UsefulLinks/FAQ.md) for details.

## Important notes

- Please update to the new version of **AAPS** as soon as possible after a new release is available.
- When a new release is available, in the **AAPS** app itself, you will receive an information banner about the new version.
- The new version will also be announced on Facebook at the time of release.
- Following the release, please read the [Release Notes](ReleaseNotes.md) in detail, and clarify any queries with the community on Facebook or Discord, before proceeding with the update.
- Updating from **AAPS** 3.x? Read [What changed in AAPS v4](V4Changes.md) first: it lists the features that moved, were renamed or were removed.
- Do not forget to [export your settings](ExportImportSettings.md). When you import them again after the update, you choose whether the pump settings are replaced too.

## Update AAPS with browser build

You already built your AAPS app with a browser? Follow the instructions for the method you used:

- **AAPS Builder**: you build from the **Build AAPS** page of your private repository (usually named `my-aaps`) and download the app from GitHub. Follow [Updating AAPS with AAPS Builder](#aaps-builder-updates). There is no fork to sync.
- **Fork and preparation file**: you run the **AAPS-CI** workflow in your own copy (fork) of AndroidAPS, a repository named `AndroidAPS` in your GitHub account, and the app lands in your Google Drive. Follow [Update with a browser (fork)](./UpdateBrowserBuild.md).

## Update AAPS with Android Studio

Follow [these instructions](./UpdateComputerBuild.md).

## Update AAPS with the command-line

Use the [same instructions](../SettingUpAaps/CLIBuild.md) as when building AAPS previously, but pull new changes with git.

(Update-to-new-version-check-aaps-version-on-phone)=

## After the update

These steps are the same for every build method. Check in the [Release Notes](../Maintenance/ReleaseNotes.md) if there are any specific instructions after update.

After you installed the new apk:

- you can check the **AAPS** version on your phone by opening the **menu** (☰) on the top left and then **About** (as per the screenshot below). The current **AAPS** version can be viewed;
- make sure you have imported your settings; and
- please check your **AAPS** settings under **Settings** and ensure these remain accurate.

![About dialog with the AAPS version installed](../images/about_dialog_version.png)