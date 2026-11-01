# 更新至新版本或分支

## 自行建置，而不是下載

**AAPS** 無法下載，因為這涉及醫療設備的法規。自行建置應用程式以供個人使用是合法的，但你不得將副本提供給他人！詳細資訊請參閱 [FAQ 頁面](../UsefulLinks/FAQ.md)。

## 重要提示

- 請在有新版本發布後儘快更新到最新版本的 **AAPS**。
- 當有新版本發布時，你將在 **AAPS** 應用中收到關於新版本的訊息橫幅。
- 新版本也會在發布時於 Facebook 上公佈。
- 發布後，請詳細閱讀[發布說明](ReleaseNotes.md)，如有任何疑問，請在Facebook或Discord社群中澄清後再進行更新。
- Updating from **AAPS** 3.x? Read [What changed in AAPS v4](V4Changes.md) first: it lists the features that moved, were renamed or were removed.
- Do not forget to [export your settings](ExportImportSettings.md). When you import them again after the update, you choose whether the pump settings are replaced too.

## 使用瀏覽器版本更新 AAPS

你已經使用瀏覽器建置你的 AAPS 應用程式了嗎？請依你使用的方法，按照以下指示：

- **AAPS Builder**: you build from the **Build AAPS** page of your private repository (usually named `my-aaps`) and download the app from GitHub. Follow [Updating AAPS with AAPS Builder](#aaps-builder-updates). 無需同步 fork。
- **Fork and preparation file**: you run the **AAPS-CI** workflow in your own copy (fork) of AndroidAPS, a repository named `AndroidAPS` in your GitHub account, and the app lands in your Google Drive. Follow [Update with a browser (fork)](./UpdateBrowserBuild.md).

## 使用 Android Studio 更新 AAPS

請按照[這些指示](./UpdateComputerBuild.md)進行操作。

## 使用命令列更新 AAPS

請使用與先前建置 AAPS 時[相同的說明](../SettingUpAaps/CLIBuild.md)，但請使用 git 取得新的變更。

(Update-to-new-version-check-aaps-version-on-phone)=

## After the update

These steps are the same for every build method. 檢查[發佈說明](../Maintenance/ReleaseNotes.md)以了解更新後是否有任何特定的指示。

安裝新的 apk 之後：

- you can check the **AAPS** version on your phone by opening the **menu** (☰) on the top left and then **About** (as per the screenshot below). The current **AAPS** version can be viewed;
- make sure you have imported your settings; and
- please check your **AAPS** settings under **Settings** and ensure these remain accurate.

![顯示已安裝 AAPS 版本的「關於」對話方塊](../images/about_dialog_version.png)