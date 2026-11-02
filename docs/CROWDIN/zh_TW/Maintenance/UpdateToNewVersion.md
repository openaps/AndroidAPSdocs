# 更新至新版本或分支

## 自行建置，而不是下載

**AAPS** 無法下載，因為這涉及醫療設備的法規。自行建置應用程式以供個人使用是合法的，但你不得將副本提供給他人！詳細資訊請參閱 [FAQ 頁面](../UsefulLinks/FAQ.md)。

## 重要提示

- 請在有新版本發布後儘快更新到最新版本的 **AAPS**。
- 當有新版本發布時，你將在 **AAPS** 應用中收到關於新版本的訊息橫幅。
- 新版本也會在發布時於 Facebook 上公佈。
- 發布後，請詳細閱讀[發布說明](ReleaseNotes.md)，如有任何疑問，請在Facebook或Discord社群中澄清後再進行更新。
- 要從 **AAPS** 3.x 更新嗎？請先閱讀[AAPS v4 的變更內容](V4Changes.md)：其中列出了功能移動、重新命名或移除的項目。
- 別忘了[匯出設定](ExportImportSettings.md)。更新後重新匯入設定時，您可以選擇是否一併取代幫浦設定。

## 使用瀏覽器版本更新 AAPS

你已經使用瀏覽器建置你的 AAPS 應用程式了嗎？請依你使用的方法，按照以下指示：

- **AAPS Builder**：在私人儲存庫（通常命名為 `my-aaps`）的 **Build AAPS** 頁面建置應用程式，並從 GitHub 下載。請依照[使用 AAPS Builder 更新 AAPS](#aaps-builder-updates)的說明操作。無需同步 fork。
- **Fork 和準備檔案**：在您自己的 AndroidAPS 副本（fork）中執行 **AAPS-CI** 工作流程。這個副本是您 GitHub 帳號中名為 `AndroidAPS` 的儲存庫，建置完成的應用程式會放在您的 Google Drive 中。請依照[使用瀏覽器更新（fork）](./UpdateBrowserBuild.md)的說明操作。

## 使用 Android Studio 更新 AAPS

請按照[這些指示](./UpdateComputerBuild.md)進行操作。

## 使用命令列更新 AAPS

請使用與先前建置 AAPS 時[相同的說明](../SettingUpAaps/CLIBuild.md)，但請使用 git 取得新的變更。

(Update-to-new-version-check-aaps-version-on-phone)=

## 更新後

以下步驟適用於所有建置方式。檢查[發佈說明](../Maintenance/ReleaseNotes.md)以了解更新後是否有任何特定的指示。

安裝新的 apk 之後：

- 在手機上開啟左上角的**選單**（☰），再選擇**關於**，即可查看目前的 **AAPS** 版本（如下方螢幕截圖所示）。您可以查看目前的 **AAPS** 版本；
- 確認已匯入設定；以及
- 請前往**設定**檢查 **AAPS** 設定，並確認內容正確。

![顯示已安裝 AAPS 版本的「關於」對話方塊](../images/about_dialog_version.png)