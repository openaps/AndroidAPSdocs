(aaps-ci-troubleshooting)=

# 瀏覽器建置：疑難排解

```{note}
本頁彙整 [瀏覽器建置](../SettingUpAaps/BrowserBuild.md) 的疑難排解提示。

正在使用 **AAPS Builder**？請先從其專屬的[疑難排解章節](#aaps-builder-troubleshooting)開始。下方有關 Google Drive 的章節同樣適用。
```

## AAPS-CI 問題排除

(aaps-ci-read-the-logs)=
### 首先：找出問題所在

建置失敗時，GitHub 會保留每個步驟的記錄。記錄會指出哪個步驟失敗，以及失敗的原因。在嘗試其他方法之前，請先查看記錄：你需要在本頁尋找錯誤訊息，協助你的人也會需要這些資訊。

1. 在 GitHub 上的 AndroidAPS 複本中，開啟**Actions**。建置失敗時會顯示紅色叉號。點選該項目的名稱。

   ![Actions 清單中的失敗執行項目](../images/Building-the-App/CI/aaps_ci_logs_1_runs.png)

2. 執行摘要會顯示**失敗**，下方則會列出失敗的工作（**Build AAPS**，旁邊有紅色叉號）。

   ![執行摘要](../images/Building-the-App/CI/aaps_ci_logs_2_summary.png)

3. 向下捲動至**註解**，然後點選紅色的 **Build AAPS** 項目。

   ![註解](../images/Building-the-App/CI/aaps_ci_logs_3_annotations.png)

4. 工作頁面會隨即開啟。顯示灰色勾號的步驟代表執行成功。顯示紅色叉號的步驟就是失敗的步驟：GitHub 會自動為你開啟該步驟。之後的步驟會遭到略過（顯示灰色圓圈）。

   ![工作步驟](../images/Building-the-App/CI/aaps_ci_logs_4_job.png)

5. 請查看 `Error: Process completed with exit code 1.` 上方的幾行內容，它們會說明問題所在。在這個範例中，**正在取得 Google Drive 存取權杖**步驟因 `invalid_grant` 和 `Token has been expired or revoked.` 錯誤而失敗，請參閱[Google 重新整理權杖已逾期](#aaps-ci-google-token-expired)。

   ![記錄中的錯誤](../images/Building-the-App/CI/aaps_ci_logs_5_error.png)

```{tip}
需要協助嗎？請提供失敗步驟的名稱和錯誤內容（提供如上方範例的螢幕截圖也可以）。請勿分享機密資料的內容。
```

(aaps-ci-update-secret)=
#### 更新機密資料

許多問題都可以透過替換機密資料的值來修正。在 GitHub 上的 AndroidAPS 複本中，前往**Settings** → **Secrets and variables** → **Actions**，然後點選機密資料旁的鉛筆圖示。

![機密資料清單](../images/Building-the-App/CI/aaps_ci_secret_update_1.png)

輸入或貼上新的值，然後點選 **更新密鑰**。 GitHub 不會顯示舊值：欄位一律為空白。

![更新密鑰](../images/Building-the-App/CI/aaps_ci_secret_update_2.png)

(aaps-ci-rerun)=
#### 修正問題後，再次執行建置

修正問題原因後，不必從頭開始：開啟失敗的執行項目，點選 **...**（右上角），接著點選 **重新執行失敗的工作**。

![重新執行選單](../images/Building-the-App/CI/aaps_ci_rerun_1.png)

點選 **重新執行工作**。您也可以像平常一樣，透過 **執行工作流程**開始新的建置。

![重新執行對話方塊](../images/Building-the-App/CI/aaps_ci_rerun_2.png)

(aaps-ci-preparation-web)=
### aaps-ci-preparation 網頁
  - 準備頁面由臨時的本機伺服器提供（例如電腦上的 Simple Web Server），該伺服器也會接收 Google 重新整理權杖。
  - 如果您看到以下畫面，表示本機伺服器已停止執行或無法連線。
  - 關閉準備頁面，確認本機伺服器正在執行，然後依照步驟 2 的相同步驟重新開啟 aaps-ci-preparation.html，並完成其餘步驟。這在設定期間建立初始的 Google 連線時特別需要。

  ![aaps_ci_html_not_found](../images/Building-the-App/CI/aaps_ci_html_not_found.png)

(aaps-ci-google-token-expired)=
### Google 重新整理權杖已過期
  - 如果 Google OAuth2 重新整理權杖連續 6 個月未使用就會過期，並且在其他情況下也可能失效（例如：您變更了 Google 帳號密碼，或手動撤銷了存取權）。如需更多詳細資訊，請參閱 [Google OAuth2 說明文件](https://developers.google.com/identity/protocols/oauth2)。
  - 在[建置記錄](#aaps-ci-read-the-logs)中，**正在擷取 Google Drive 存取權杖**步驟因 `invalid_grant` 和 `Token has been expired or revoked.` 而失敗：

  ![aaps_ci_token_expired](../images/Building-the-App/CI/aaps_ci_token_expired.png)

  - 如果建置因 Google 重新整理權杖已逾期或遭撤銷而失敗，您需要重新完成 [Google Drive 驗證](#aaps-ci-google-drive-auth)步驟，以取得新的 `GDRIVE_OAUTH2` 權杖，接著在 GitHub 儲存庫中[更新密鑰](#aaps-ci-update-secret)，然後[重新執行建置](#aaps-ci-rerun)。
  - 若授權再次失敗，或 Google 不再要求你同意，請先從你的 Google 帳戶移除既有的 AAPS 存取權，請參閱[下方](#aaps-ci-google-remove-access)。

(aaps-ci-google-remove-access)=
### 從你的 Google 帳戶移除 AAPS 存取權，並重新開始授權
  - 如果 Google Drive 授權持續失敗，或你想從乾淨狀態重新開始，請先移除你先前授予 AAPS 的存取權，然後重新執行授權。
  - 在你的手機上開啟 [https://myaccount.google.com](https://myaccount.google.com)，點選 **Security**，向下捲動至 **Your connections to third-party apps & services** 並開啟已連結應用程式的清單。你也可以直接前往 [https://myaccount.google.com/connections](https://myaccount.google.com/connections)。
  - 在清單中點選 **AAPS**。

  ![aaps_ci_google_access_1](../images/Building-the-App/CI/aaps_ci_google_access_1.png)

  - 此頁會顯示你授予 AAPS 的存取權（應用程式使用的 Google Drive 檔案）。點選 **Delete all** 以移除連線，或先點選 **See details** 檢視詳情。

  ![aaps_ci_google_access_2](../images/Building-the-App/CI/aaps_ci_google_access_2.png)

  - 在詳細資料頁面中，點選 **移除所有存取權**。

  ![aaps_ci_google_access_3](../images/Building-the-App/CI/aaps_ci_google_access_3.png)

  - 點選 **確認**。

  ![aaps_ci_google_access_4](../images/Building-the-App/CI/aaps_ci_google_access_4_confirm.png)

  - Google 確認 AAPS 已無法存取。 AAPS 不會再出現在已連結的應用程式清單中。

  ![aaps_ci_google_access_5](../images/Building-the-App/CI/aaps_ci_google_access_5_removed.png)

  - 現在乾淨地重新開始授權：請關閉 **兩者**（準備頁面與檔案管理器應用程式），從檔案管理器重新開啟 aaps-ci-preparation.html，並重新執行 [Google Drive Auth](#aaps-ci-google-drive-auth) 步驟。 Google 會再次要求你授權，且該頁會提供新的 `GDRIVE_OAUTH2` 權杖。
  - 使用新的權杖，在 GitHub 儲存庫中[更新 `GDRIVE_OAUTH2` 密鑰](#aaps-ci-update-secret)，然後[重新執行建置](#aaps-ci-rerun)。

(aaps-ci-disable-software)=
### Disable Software That May Interfere With OAuth Verification
  - Disable any VPN or security app (firewall, antimalware,...) on the phone before trying to get the OAuth key.

(aaps-ci-actions-permission)=
### 檢查 GitHub Actions 權限設定
  - 請確保 GitHub Actions 政策設置為「Allow all actions and reusable workflows」（Settings → Actions → General）。如果您有變更，請按一下選項下方的 **儲存**。

  ![aaps_ci_actions_permission](../images/Building-the-App/CI/aaps-ci-actions-permission.png)

`actions/checkout@v4` 和 `actions/setup-java@v4` 不允許在 `xxxxx/AndroidAPS` 中使用。此工作流程中的操作必須位於 `xxxxx` 擁有的儲存庫內

(aaps-ci-workflow-permissions)=
### 檢查 GitHub 工作流程權限設定
  - 若建置立即失敗並出現如下所示的「Invalid workflow file」錯誤，表示你的儲存庫預設的工作流程權限過於嚴格：

```
Invalid workflow file
The workflow is not valid. .github/workflows/aaps-ci.yml (Line: 361, Col: 3):
Error calling workflow 'xxxxx/AndroidAPS/.github/workflows/cleanup-workflow-runs.yml@...'.
The nested job 'cleanup' is requesting 'actions: write', but is only allowed 'actions: none'.
```

  - 請確認工作流程權限已設為「Read and write permissions」（Settings → Actions → General → Workflow permissions），然後儲存並重新執行建置工作流程。

  ![aaps_ci_workflow_permissions](../images/Building-the-App/CI/aaps-ci-workflow-permissions.jpg)

(aaps-ci-password-special-characters)=
### 檢查金鑰庫密碼時建置失敗
  - 在[建置記錄](#aaps-ci-read-the-logs)中，**驗證金鑰庫、別名和密碼**步驟因 `Either KEYSTORE_BASE64, KEYSTORE_PASSWORD, KEY_PASSWORD, or KEY_ALIAS is incorrect` 而失敗，接著出現 `Keystore was tampered with, or password was incorrect`。建置會在此處停止：AAPS 開始建置前，會先檢查金鑰庫和密碼。

  ![建置記錄中的金鑰庫密碼錯誤](../images/Building-the-App/CI/aaps_ci_password_wrong.png)

  - 建置工作流程會保留密碼中的所有字元，不會變更。請原樣輸入 `KEYSTORE_PASSWORD` 和 `KEY_PASSWORD`，不要加入反斜線或其他跳脫字元。如果您加入了反斜線，請使用原始密碼[更新密鑰](#aaps-ci-update-secret)。以下範例有誤：密碼是 `Example2026`，但多加了反斜線。

  ![輸入的密碼多加了反斜線](../images/Building-the-App/CI/aaps_ci_password_escaped.png)

  - 如果密碼正確，但 APK 簽章時建置仍然失敗，而且密碼包含 `$`、反引號、`"` 或 `\`，表示您分支中的工作流程檔案早於 2026 年 9 月，仍會剖析這些字元。將您的分支[同步至最新的 dev 版本](#Update-to-new-version-update-your-repo)，然後重新執行建置工作流程。
  - 豎線 `|` 是特殊情況。 「[Option 1](#aaps-ci-option1)」的準備頁會將金鑰庫、密碼與別名合併為一個以 `|` 分隔的 `KEYSTORE_SET` Secret，工作流程會依該字元進行分割。準備頁所產生的密碼僅包含英文字母與數字，因此使用 Option 1 不會發生此情況。只有在你自行以含有 `|` 的密碼組合出 `KEYSTORE_SET` Secret 時，才可能發生。此時請刪除 `KEYSTORE_SET`，改為依照「[Option 2](#aaps-ci-option2)」輸入個別的 Secrets。
