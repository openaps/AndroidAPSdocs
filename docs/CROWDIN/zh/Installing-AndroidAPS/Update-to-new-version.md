# 更新至新版本或分支

## 自行建置，而不是下載

**AAPS** 無法下載，因為這涉及醫療設備的法規。 自行建置應用程式以供個人使用是合法的，但您不得將副本提供給他人！ 詳細資訊請參閱 [FAQ 頁面](../Getting-Started/FAQ.md)。

## 重要提示

* 請在有新版本發布後儘快更新到最新版本的 **AAPS**。
* 當有新版本發布時，您將在 **AAPS** 應用中收到關於新版本的訊息橫幅。
* 新版本也會在發布時於 Facebook 上公佈。
* 發布後，請詳細閱讀[發行說明](../Installing-AndroidAPS/Releasenotes.md)，並在進行更新前，透過 Facebook 或 Discord 社群澄清任何疑問。
* 您需要使用**[Hedgehog (2023.1.1) 或 Iguana (2023.2.1)](https://developer.android.com/studio/)** 版本的 Android Studio。 如果您的版本較舊，請先更新 Android Studio！ 

## 更新到新版本 AAPS 的概述

1. [匯出您的設定](../Usage/ExportImportSettings-export-settings) 從手機上現有的**AAPS**版本。 您可能不需要這樣做，但防患於未然更好。
2. [更新本地副本](Update-to-new-version-update-your-local-copy) 的 AAPS 原始碼 (Git->Fetch 和 Git -> Pull)
3. [構建簽章 APK](Update-to-new-version-build-the-signed-apk)
4. [將構建的 APK](Building-APK-transfer-apk-to-smartphone) 傳送到您的手機並安裝它
5. [檢查 AAPS 上的版本](Update-to-new-version-check-aaps-version-on-phone)
6. 根據您的[血糖來源](../Configuration/BG-Source.md) 確保在 xDrip 中[識別接收器](xdrip-identify-receiver)，或使用[“構建您自己的 Dexcom 應用程式”](DexcomG6-if-using-g6-with-build-your-own-dexcom-app)。

如果您遇到問題，請參閱專頁 [Android Studio 疑難排解](../Installing-AndroidAPS/troubleshooting_androidstudio)。

## 1. 匯出您的設定

如果您忘記如何執行此操作，請參閱 [匯出與匯入設定](ExportImportSettings-export-settings) 頁面。

(Update-to-new-version-update-your-local-copy)=

## 2. 更新本地副本

    {admonition} 警告
    :class: warning
    如果您是從早於 2.8.x 的版本更新，請遵循指示進行 [新複製](../Installing-AndroidAPS/building-AAPS)，因為此指南不適用於您！

* 使用 Android Studio 開啟您現有的 AAPS 項目。 您可能需要選擇您的項目。 (雙擊) 點擊 AAPS 項目。
    
    ![Android Studio - 選擇項目](../images/update/01_ProjectSelection.png)

* 在 Android Studio 的選單欄中，選擇 Git -> Fetch
    
    ![Android Studio 選單 - Git - Fetch](../images/update/02_GitFetch.png)

* 您將在右下角看到 Fetch 成功的訊息。
    
    ![Android Studio 選單 - Git - Fetch 成功](../images/update/03_GitFetchSuccessful.png)

* 在選單欄中，現在選擇 Git -> Pull
    
    ![Android Studio 選單 - Git - Pull](../images/update/04_GitPull.png)

* 保持所有選項不變（origin/master），然後選擇 Pull
    
    ![Android Studio - Git - Pull 對話框](../images/update/05_GitPullOptions.png)

* 等待下載過程進行，您會在底部欄看到進度資訊。 完成後，您將看到成功訊息。 注意：更新的文件可能有所不同！ 這並不代表指示
    
    ![Android Studio - Pull 成功](../images/update/06_GitPullSuccess.png)

* Gradle Sync 將運作幾秒鐘以下載一些依賴項。 等待它完成。
    
    ![Android Studio - Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

(Update-to-new-version-build-the-signed-apk)=

## 3. 構建簽章 APK

您的原始碼現在是當前發布的版本。 是時候按照[構建簽章 APK 章節](Building-APK-generate-signed-apk)中的說明從中構建簽章 apk 了。

## 4. 傳送 APK

您需要將 apk 傳送到手機以便您安裝它。

請參閱 [傳送 APK 至智慧型手機](Building-APK-transfer-apk-to-smartphone) 的說明

## 5. 安裝 APK

在您的手機上，您需要允許安裝來自未知來源的應用程式。 可以在網路上找到如何執行此操作的說明（例如，[此處](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/)或[此處](https://www.androidcentral.com/unknown-sources)）。 注意：如果您使用相同的現有密鑰庫完成了 Android Studio 的構建，則無需刪除手機上的現有應用程式。 當您安裝 apk 時，按照提示安裝更新。 對於其他情況，例如在 Android Studio 中為您的簽章 apk 建立新密鑰庫，您將需要刪除舊應用程式後再安裝 apk。

(Update-to-new-version-check-aaps-version-on-phone)=

## 6. 檢查手機上的 AAPS 版本

安裝新 apk 後，您可以點擊右上角的三點選單，然後選擇 "關於"，以檢查手機上的 AAPS 版本。 您應該能看到當前版本。

![已安裝的 AAPS 版本](../images/Update_VersionCheck282.png)

# 疑難排解

如果發生任何錯誤，不要慌張。

先深呼吸！

然後查看專門頁面[疑難排解 Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio)，看看您的問題是否已經記錄在案！

如果您需要進一步幫助，請聯繫其他**AAPS**使用者，透過[Facebook](https://www.facebook.com/groups/AndroidAPSUsers)或[Discord](https://discord.gg/4fQUWHZ4Mw)。