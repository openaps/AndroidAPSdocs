# 更新到新版本或分支

## 自行构建而非下载

由于医疗设备相关的法规，**AAPS**无法下载。构建该应用供自己使用是合法的，但不得将副本提供给他人详情请参阅[常见问题页面](../UsefulLinks/FAQ.md)。

## 重要说明

- 当有新版本发布时，请尽快更新至最新版本的 **AAPS**。
- 当有新版本可用时，**AAPS** 应用内会显示新版本的信息横幅。
- 新版本发布时也会在 Facebook 上同步公告。
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

These steps are the same for every build method. 请查阅 [版本说明](../Maintenance/ReleaseNotes.md) 确认是否有更新后的特别注意事项。

After you installed the new apk:

- you can check the **AAPS** version on your phone by opening the **menu** (☰) on the top left and then **About** (as per the screenshot below). The current **AAPS** version can be viewed;
- make sure you have imported your settings; and
- please check your **AAPS** settings under **Settings** and ensure these remain accurate.

![About dialog with the AAPS version installed](../images/about_dialog_version.png)