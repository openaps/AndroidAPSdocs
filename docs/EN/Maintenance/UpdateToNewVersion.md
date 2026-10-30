# Update to a new version or branch

## Build yourself instead of download

**AAPS** is not available to download, due to regulations concerning medical devices. It is legal to build the app for your own use, but you must not give a copy to others! See [FAQ page](../UsefulLinks/FAQ.md) for details.

## Important notes
* Please update to the new version of **AAPS** as soon as possible after a new release is available.
* When a new release is available, in the **AAPS** app itself, you will receive an information banner about the new version.
* The new version will also be announced on Facebook at the time of release.
* Following the release, please read the [Release Notes](ReleaseNotes.md) in detail, and clarify any queries with the community on Facebook or Discord, before proceeding with the update.
* Do not forget to export your __AAPS'__ settings.

## Update AAPS with browser build

You already built your AAPS app with a browser? Follow the instructions for the method you used:

- **AAPS Builder** (your private repository, usually named `my-aaps`): [Updating AAPS with AAPS Builder](#aaps-builder-updates). There is no fork to sync.
- **Fork and preparation file** (your own copy of AndroidAPS): [Update with a browser (fork)](./UpdateBrowserBuild.md).

## Update AAPS with Android Studio

Follow [these instructions.](./UpdateComputerBuild.md).

## Update AAPS with the command-line

Use the [same instructions](../SettingUpAaps/CLIBuild.md) as when building AAPS previously, but pull new changes with git.

(Update-to-new-version-check-aaps-version-on-phone)=
### Check AAPS version on phone

Check in the [Release Notes](../Maintenance/ReleaseNotes.md) if there are any specific instructions after update.

After you installed the new apk:

- you can check the __AAPS'__ version on your phone by opening the __menu__ (☰) on the top left and then __About__ (as per the screenshot below). The __AAPS'__ current version can be viewed;
- ensure import settings have been actioned; and
- please check your __AAPS'__ settings under __Settings__ and ensure these remain accurate.

![About dialog with the AAPS version installed](../images/about_dialog_version.png)


