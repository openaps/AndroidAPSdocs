# 更新至新版本或分支

## 特定版本的備註

* [更新至 AAPS 2.7](../Maintenance/Update2_7.md)
* [更新至 AAPS 3.0](../Maintenance/Update3_0.md)

## 自行建置，而不是下載

**AAPS** 無法下載，因為這涉及醫療設備的法規。 自行建置應用程式以供個人使用是合法的，但你不得將副本提供給他人！ 詳細資訊請參閱 [FAQ 頁面](../UsefulLinks/FAQ.md)。

## 重要提示

* 請在有新版本發布後儘快更新到最新版本的 **AAPS**。
* 當有新版本發布時，你將在 **AAPS** 應用中收到關於新版本的訊息橫幅。
* 新版本也會在發布時於 Facebook 上公佈。
* 發布後，請詳細閱讀[發布說明](ReleaseNotes.md)，如有任何疑問，請在Facebook或Discord社群中澄清後再進行更新。
* You need to use version **[Android Studio version called at least Hedgehog (2023.1.1) or one more recent like Iguana, Jellyfish, Koala or Ladybug](https://developer.android.com/studio/)** of Android Studio. 如果你的版本較舊，請先更新 Android Studio！ 

## 更新到新版本 AAPS 的概述

1. [匯出您的設定](ExportImportSettings.md)自您手機上的現有**AAPS**版本。 你可能不需要這樣做，但防患於未然更好。
2. [Update local copy](Update-to-new-version-update-your-local-copy) of the AAPS sourcecode (Git->Fetch and Git -> Pull)
3. [建置簽章 APK](Update-to-new-version-build-the-signed-apk)
4. [Transfer the built apk](Update-to-new-version-transfer-and-install) to your phone and install it
5. [Check the version](Update-to-new-version-check-aaps-version-on-phone) in AAPS
6. 根據您的[BG來源](../Getting-Started/CompatiblesCgms.md)確保在xDrip中[識別接收器](#xdrip-identify-receiver)或使用[「建立您的Dexcom應用」](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)。

如果您遇到問題，請參見單獨的[問題排除Android Studio](../GettingHelp/TroubleshootingAndroidStudio)頁面。

## 1. 匯出你的設定

如果您忘記如何做，請參見[匯出與匯入設定](ExportImportSettings.md)頁面。

(Update-to-new-version-update-your-local-copy)=

## 2. 更新本地副本

```{admonition} WARNING :class: warning If you update from versions prior to 2.8.x, please follow the instructions to do a [New clone](../Installing-AndroidAPS/building-AAPS), as this guide will not work for you!

    <br />* Open your existing AAPS project with Android Studio. You might need to select your project. (Double) click on the AAPS project.
    
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
    
    (Update-to-new-version-build-the-signed-apk)=
    ## 3. Build the Signed APK
    
    Your sourcecode is now the current released version. It's time to build the signed apk from it as described in the [build signed apk section](#Building-APK-generate-signed-apk).
    
    (Update-to-new-version-transfer-and-install)=
    
    ## 4. Transfer and install the apk
    You need to transfer the apk to your phone so you can install it.
    
    ```{note}
    If you completed the build with the same existing key store in Android Studio, then you do not need to remove the existing app on your phone. 當你安裝 apk 時，按照提示安裝更新。
    對於其他情況，例如在 Android Studio 中為你的簽章 apk 建立新密鑰庫，你將需要刪除舊應用程式後再安裝 apk。 **Make sure to export your settings!**
    

See the instructions for [transferring and installing AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md)

(Update-to-new-version-check-aaps-version-on-phone)=

## 5. 檢查手機上的 AAPS 版本

安裝新 apk 後，你可以點擊右上角的三點選單，然後選擇 "關於"，以檢查手機上的 AAPS 版本。 你應該能看到目前版本。

![已安裝的 AAPS 版本](../images/Update_VersionCheck320.png)

## 問題排除

如果發生任何錯誤，不要慌張。

先深呼吸！

然後查看專門頁面[問題排除 Android Studio](../GettingHelp/TroubleshootingAndroidStudio)，看看你的問題是否已經紀錄在案！

如果你需要進一步幫助，請聯繫其他**AAPS**使用者，透過[Facebook](https://www.facebook.com/groups/AndroidAPSUsers)或[Discord](https://discord.gg/4fQUWHZ4Mw)。