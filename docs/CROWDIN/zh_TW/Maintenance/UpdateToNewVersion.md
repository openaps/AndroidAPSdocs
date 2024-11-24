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
* 你需要使用版本**[至少為 Hedgehog (2023.1.1) 或更新版本如 Iguana、Jellyfish、Koala 或 Ladybug](https://developer.android.com/studio/)**的 Android Studio。 如果你的版本較舊，請先更新 Android Studio！ 

## 更新到新版本 AAPS 的概述

1. [匯出您的設定](ExportImportSettings.md)自您手機上的現有**AAPS**版本。 你可能不需要這樣做，但防患於未然更好。
2. [更新本地副本](Update-to-new-version-update-your-local-copy)的AAPS源代碼（Git->Fetch和Git->Pull）
3. [建置簽章 APK](Update-to-new-version-build-the-signed-apk)
4. [將構建的apk轉移](Update-to-new-version-transfer-and-install)到您的手機並安裝
5. [檢查AAPS中的版本](Update-to-new-version-check-aaps-version-on-phone)
6. 根據您的[BG來源](../Getting-Started/CompatiblesCgms.md)確保在xDrip中[識別接收器](#xdrip-identify-receiver)或使用[「建立您的Dexcom應用」](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)。

如果您遇到問題，請參見單獨的[問題排除Android Studio](../GettingHelp/TroubleshootingAndroidStudio)頁面。

## 1. 匯出你的設定

如果您忘記如何做，請參見[匯出與匯入設定](ExportImportSettings.md)頁面。

(Update-to-new-version-update-your-local-copy)=

## 2. 更新本地副本

```{admonition} 警告 :class: warning 如果你從 2.8.x 之前的版本更新，請遵循指示進行[全新複製](../Installing-AndroidAPS/building-AAPS)，因為此指南將不適用於你！

    <br />* 使用 Android Studio 開啟你現有的 AAPS 專案。 你可能需要選擇你的項目。 (雙擊) 點擊 AAPS 項目。
    
      ![Android Studio - 選擇專案](../images/update/01_ProjectSelection.png)
    
    * 在 Android Studio 的選單列中，選擇 Git -> 取得
    
       ![Android Studio 選單 - Git - 取得](../images/update/02_GitFetch.png)
    
    * 你將在右下角看到一條訊息，表示取得成功。
    
       ![Android Studio 選單 - Git - 取得成功](../images/update/03_GitFetchSuccessful.png)
    
    * 在選單列中，現在選擇 Git -> 拉取
    
       ![Android Studio 選單 - Git - 拉取](../images/update/04_GitPull.png)  
    
    * 保持所有選項為預設 (origin/master)，然後選擇拉取
    
       ![Android Studio - Git - 拉取對話框](../images/update/05_GitPullOptions.png)
    
    * 等待下載進行中，你將在底部欄位看到這些資訊。 完成後，你將看到成功訊息。
    
      ```{note}
      更新的檔案可能有所不同！ 這不表示
      ```
    
       ![Android Studio - 拉取成功](../images/update/06_GitPullSuccess.png)
    
    * Gradle 同步正在運行以下載一些相依項目。 等待他完成。
    
      ![Android Studio - Gradle 同步](../images/studioSetup/40_BackgroundTasks.png)
    
    (Update-to-new-version-build-the-signed-apk)=
    ## 3. 建立簽名 APK
    
    你的原始碼現在是當前發布的版本。 是時候依照[建立簽名 APK 區段](#Building-APK-generate-signed-apk)從中建立簽名 APK。
    
    (Update-to-new-version-transfer-and-install)=
    
    ## 4. 傳送並安裝 APK
    你需要將 APK 傳送到你的手機，以便安裝它。
    
    ```{note}
    如果你使用 Android Studio 中相同的現有金鑰儲存檔完成了構建，則無需刪除手機上的現有應用程式。 當你安裝 apk 時，按照提示安裝更新。
    對於其他情況，例如在 Android Studio 中為你的簽章 apk 建立新密鑰庫，你將需要刪除舊應用程式後再安裝 apk。 **確保匯出你的設定！**
    

請參閱有關[傳送和安裝 AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md)的說明。

(Update-to-new-version-check-aaps-version-on-phone)=

## 5. 檢查手機上的 AAPS 版本

安裝新 apk 後，你可以點擊右上角的三點選單，然後選擇 "關於"，以檢查手機上的 AAPS 版本。 你應該能看到目前版本。

![已安裝的 AAPS 版本](../images/Update_VersionCheck320.png)

## 問題排除

如果發生任何錯誤，不要慌張。

先深呼吸！

然後查看專門頁面[問題排除 Android Studio](../GettingHelp/TroubleshootingAndroidStudio)，看看你的問題是否已經紀錄在案！

如果你需要進一步幫助，請聯繫其他**AAPS**使用者，透過[Facebook](https://www.facebook.com/groups/AndroidAPSUsers)或[Discord](https://discord.gg/4fQUWHZ4Mw)。