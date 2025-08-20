# 透過電腦進行更新

## 自行建置，而不是下載

**AAPS** 無法下載，因為這涉及醫療設備的法規。 自行建置應用程式以供個人使用是合法的，但你不得將副本提供給他人！ 詳細資訊請參閱 [FAQ 頁面](../UsefulLinks/FAQ.md)。

```{note}
如果你想在新電腦上建立 **AAPS**：請將你的備份金鑰存檔複製到新電腦上。 然後按照 [初始建置 **AAPS** 程序](../SettingUpAaps/BuildingAaps.md) 的步驟，而不是這個指導。 唯一的不同之處在於，你可以選擇你在新電腦上複製的金鑰存檔，而不必建立新的金鑰存檔。
```

## 使用電腦更新 AAPS 的總覽

```{contents} Steps for updating to a new version of AAPS
:depth: 1
:local: true
```

如果您遇到問題，請參見單獨的[問題排除Android Studio](../GettingHelp/TroubleshootingAndroidStudio)頁面。

### 匯出你的設定

從您手機上現有的 **AAPS** 版本匯出您的設定。 你可能不需要這樣做，但防患於未然更好。

如果您忘記如何做，請參見[匯出與匯入設定](ExportImportSettings.md)頁面。

### 檢查你的 Android Studio 版本

所需的最低版本已在 [建置指南](#Building-APK-recommended-specification-of-computer-for-building-apk-file)中描述。 如果你的版本過舊，請 [先更新 Android Studio](#Building-APK-install-android-studio)！

(Update-to-new-version-update-your-local-copy)=
### 更新本地副本

```{admonition} WARNING
:class: warning
如果你從 2.8.x 之前的版本更新，請遵循指示進行 [新複製](../SettingUpAaps/BuildingAaps.md)，因為這個指南對你無效！
```

* 使用 Android Studio 開啟你現有的 AAPS 項目。 你可能需要選擇你的項目。 (雙擊) 點擊 AAPS 項目。

  ![Android Studio - 選擇項目](../images/update/01_ProjectSelection.png)

* 在 Android Studio 的選單列中，選擇 Git -> 取回

   ![Android Studio 選單 - Git - Fetch](../images/update/02_GitFetch.png)

* 你將在右下角看到 Fetch 成功的訊息。

   ![Android Studio 選單 - Git - Fetch 成功](../images/update/03_GitFetchSuccessful.png)

* 在選單列中，現在選擇 Git -> 拉取

   ![Android Studio 選單 - Git - Pull](../images/update/04_GitPull.png)

* 保持所有選項不變（origin/master），然後選擇 Pull

   ![Android Studio - Git - Pull 對話框](../images/update/05_GitPullOptions.png)

* 等待下載過程進行，你會在底部欄看到進度資訊。 完成後，你將看到成功訊息。

  ```{note}
  更新的檔案可能會有所不同！ 這並不代表指示
  ```

   ![Android Studio - Pull 成功](../images/update/06_GitPullSuccess.png)

* Gradle 同步將運行以下載一些相依套件。 等待他完成。

  ![Android Studio - Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

### 檢查 JVM 版本

此檢查特別適合如果你已經在同一台電腦上建置過之前版本的 **AAPS**。

在 [建置指示](#Building-APK-recommended-specification-of-computer-for-building-apk-file)中查詢 JVM 的所需版本，該版本應與你目前建置的 **AAPS** 版本相匹配。 然後按照在 [不相容的 Gradle JVM](#incompatible-gradle-jvm) 中描述的步驟，以確保你當前使用的是正確的版本。

Update-to-new-version-build-the-signed-apk)=
### 建置簽章 APK

你的原始碼現在是當前已發佈的版本，並且所有前置條件已經檢查過。 現在是時候按照[建立簽署的 APK 部分](#Building-APK-generate-signed-apk)中的說明來建立簽署的 APK。

(Update-to-new-version-transfer-and-install)=

### 轉移並安裝 APK
你需要將 apk 傳送到手機以便你安裝他。

```{note}
如果你使用相同的現有金鑰庫在 Android Studio 中完成了構建，那麼你不需要刪除手機上的現有應用。 當你安裝 apk 時，按照提示安裝更新。
對於其他情況，例如在 Android Studio 中為你的簽章 apk 建立新密鑰庫，你將需要刪除舊應用程式後再安裝 apk。 **確保匯出你的設定！**
```

請參閱有關[傳送和安裝 AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md)的說明。

繼續 [這裡](#Update-to-new-version-check-aaps-version-on-phone)。

## 問題排除

如果發生任何錯誤，不要慌張。

先深呼吸！

然後查看專門頁面[問題排除 Android Studio](../GettingHelp/TroubleshootingAndroidStudio)，看看你的問題是否已經紀錄在案！

如果你需要進一步幫助，請聯繫其他**AAPS**使用者，透過[Facebook](https://www.facebook.com/groups/AndroidAPSUsers)或[Discord](https://discord.gg/4fQUWHZ4Mw)。