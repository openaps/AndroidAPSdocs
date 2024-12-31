# 更新至新版本或分支

## 自行建置，而不是下載

**AAPS** 無法下載，因為這涉及醫療設備的法規。 自行建置應用程式以供個人使用是合法的，但你不得將副本提供給他人！ 詳細資訊請參閱 [FAQ 頁面](../UsefulLinks/FAQ.md)。

## 重要提示

* 請在有新版本發布後儘快更新到最新版本的 **AAPS**。
* 當有新版本發布時，你將在 **AAPS** 應用中收到關於新版本的訊息橫幅。
* 新版本也會在發布時於 Facebook 上公佈。
* 發布後，請詳細閱讀[發布說明](ReleaseNotes.md)，如有任何疑問，請在Facebook或Discord社群中澄清後再進行更新。

## 更新到新版本 AAPS 的概述

```{contents} Steps for updating to a new version of AAPS :depth: 1 :local: true

    <br />In case you experience problems, see separate page for [troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio).
    
    ### Export your settings
    
    Export your settings from the existing **AAPS** version on your phone. 你可能不需要這樣做，但防患於未然更好。
    
    See the [Export & import settings](ExportImportSettings.md) page if you don't remember how to do this.
    
    ### Check your Android Studio version
    
    The minimal version required is described in the [Building Instructions](#Building-APK-recommended-specification-of-computer-for-building-apk-file). If your version is older, please [update Android Studio first](#Building-APK-install-android-studio)!
    
    (Update-to-new-version-update-your-local-copy)=
    ### Update your local copy
    
    ```{admonition} WARNING
    :class: warning
    If you update from versions prior to 2.8.x, please follow the instructions to do a [New clone](../Installing-AndroidAPS/building-AAPS), as this guide will not work for you!
    

* Open your existing AAPS project with Android Studio. 你可能需要選擇你的項目。 (雙擊) 點擊 AAPS 項目。
    
    ![Android Studio - Select Project](../images/update/01_ProjectSelection.png)

* In the menu bar of Android Studio, select Git -> Fetch
    
    ![Android Studio Menu - Git - Fetch](../images/update/02_GitFetch.png)

* You will see a message in the lower right corner that Fetch was successful.
    
    ![Android Studio Menu - Git - Fetch successful](../images/update/03_GitFetchSuccessful.png)

* In the menu bar, now select Git -> Pull
    
    ![Android Studio Menu - Git - Pull](../images/update/04_GitPull.png)

* Leave all options as they are (origin/master) and select Pull
    
    ![Android Studio - Git - Pull dialog](../images/update/05_GitPullOptions.png)

* Wait while download is in progress, you will see this as info in the bottom bar. 完成後，你將看到成功訊息。
    
    ```{note}
    The files that were updated may vary! This is not an indication
    ```
    
    ![Android Studio - Pull successful](../images/update/06_GitPullSuccess.png)

* Gradle Sync will be running to download some dependencies. 等待他完成。
    
    ![Android Studio - Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

### Check JVM and Gradle versions

These checks are particularly indicated if you have already built a previous version of **AAPS** on the same computer.

Check in the [Building Instructions](#Building-APK-recommended-specification-of-computer-for-building-apk-file) the required versions for JVM and Gradle, matching the **AAPS** version you are now building.

For Gradle, go to **File > Project Structure** (1). In the **Project** tab (2), check that **Gradle version** (3) is the appropriate one. If you don't find the required version, you are using an outdated Android Studio version (check previous step about minimal Android Studio version).

![Check Gradle version](../images/studioTroubleshooting/gradle_version.png)

For the JVM version, follow the steps described at [Incompatible Gradle JVM](#incompatible-gradle-jvm) to make sure you currently use the correct version.

(Update-to-new-version-build-the-signed-apk)=

### Build the Signed APK

Your sourcecode is now the current released version, and all prerequisites have been checked. It's time to build the signed apk as described in the [build signed apk section](#Building-APK-generate-signed-apk).

(Update-to-new-version-transfer-and-install)=

### Transfer and install the apk

You need to transfer the apk to your phone so you can install it.

```{note}
If you completed the build with the same existing key store in Android Studio, then you do not need to remove the existing app on your phone. 當你安裝 apk 時，按照提示安裝更新。
對於其他情況，例如在 Android Studio 中為你的簽章 apk 建立新密鑰庫，你將需要刪除舊應用程式後再安裝 apk。 **確保匯出你的設定！**
```

請參閱有關[傳送和安裝 AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md)的說明。

(Update-to-new-version-check-aaps-version-on-phone)=

### 檢查手機上的 AAPS 版本

安裝新 apk 後，你可以點擊右上角的三點選單，然後選擇 "關於"，以檢查手機上的 AAPS 版本。 你應該能看到目前版本。

![已安裝的 AAPS 版本](../images/Update_VersionCheck320.png)

Check in the [Release Notes](../Maintenance/ReleaseNotes.md) if there are any specific instructions after update.

## 問題排除

如果發生任何錯誤，不要慌張。

先深呼吸！

然後查看專門頁面[問題排除 Android Studio](../GettingHelp/TroubleshootingAndroidStudio)，看看你的問題是否已經紀錄在案！

如果你需要進一步幫助，請聯繫其他**AAPS**使用者，透過[Facebook](https://www.facebook.com/groups/AndroidAPSUsers)或[Discord](https://discord.gg/4fQUWHZ4Mw)。