(aaps-builder)=

# 使用 AAPS Builder 的瀏覽器建置

```{note}
這是從 Android 手機建置 AAPS 的建議方式。也可在任何電腦的瀏覽器上運作。若要了解在電腦或 iPhone 上建置的其他方式，請參閱 [瀏覽器建置](BrowserBuild.md) 總覽。
```

```{contents} In this page
:backlinks: entry
:depth: 2
```

**AAPS Builder** 會在 GitHub（免費的原始碼託管網站）為你建置 AAPS 應用程式。你的手機上不需要安裝任何東西，也不需要開啟任何前置檔案。

設定頁面會逐步引導您完成設定。第一次大約需要 10 分鐘：

1. 在你的 GitHub 帳號中**建立自己的私人複本** AAPS Builder：設定頁面會開啟 GitHub，並預先填好所有資料，你只要確認即可。建置工作流程（用來告訴 GitHub 如何建置 AAPS 的檔案）已經包含在其中。
2. **建立或上傳**你的**簽署金鑰**（金鑰庫）。
3. 將金鑰設為 GitHub **機密**，提供給你的儲存庫使用。
4. **建置**應用程式。每次建置需要 15 到 30 分鐘。
5. **下載並安裝**應用程式到手機。

你**不**需要對 AndroidAPS 進行派生：每次建置都會從官方的 AndroidAPS 儲存庫下載 AAPS 原始碼。你也**不**需要 Google Drive：你會直接從 GitHub 下載應用程式。

```{admonition} Where the code comes from
:class: note

AAPS 開發人員會在 [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder) 儲存庫中維護建置工作流程，而你的儲存庫是它的複本。你複本中的 [工作流程](https://github.com/nightscout/aaps-builder/blob/main/.github/workflows/build.yml) 很簡短：它會執行存放在該儲存庫中的[建置步驟](https://github.com/nightscout/aaps-builder/blob/main/.github/workflows/aaps-builder.yml)，因此即使你的儲存庫沒有任何變更，也能取得改進內容。你可以閱讀這兩個檔案。在建置時，該工作流程只會下載官方的 AAPS 原始碼與 GitHub 自家的建置工具。你的金鑰庫不會離開你的瀏覽器與你的私有儲存庫。
```

(aaps-builder-before-you-start)=

## 開始之前

你需要準備：

- 一個 **GitHub 帳號**（免費）。若尚未擁有，請先到 [github.com](https://github.com/signup) 建立。
- 一個 **網頁瀏覽器**：手機上的 Chrome，或電腦上的任一瀏覽器。開始前，請先在該瀏覽器登入 github.com。
- **你手機上已安裝 GitHub 應用程式嗎？** 可以保留。之後設定頁面上的部分按鈕會開啟該應用程式，而非 Chrome。應用程式可以正常建置，但**無法下載**已完成建置的 AAPS：[步驟 5](#aaps-builder-step5) 說明如何切換到 Chrome 下載。
- 你先前已有的 **金鑰庫**（`.jks` 檔案）、其密碼與其別名；若你先前已建置過 AAPS，並想在不重新安裝的情況下進行更新，就需要這些。

```{warning}
**你的建置儲存庫必須維持為私有。** 任何能查看此儲存庫的人，都能看到建置所產生的一切內容。設定頁面會為你建立一個私有儲存庫。絕對不要將它改成公開，也不要改用 **fork** AAPS Builder：fork 一律是公開的。

私有儲存庫每月可獲得 2000 分鐘的 GitHub Actions 免費額度，足以進行多次建置。
```

```{warning}
**新金鑰或既有金鑰：這將決定你是否能更新 AAPS。**

- **你的手機上已安裝 AAPS，且你仍保有當時使用的金鑰庫**：在設定頁面選擇 **I already have a keystore（我已經有金鑰庫）**，並上傳它。你下一次的建置會就地更新 AAPS。曾用先前的瀏覽器建置（你自己的 fork）建置 AAPS 嗎？你的金鑰庫在你的 fork 裡：<a href="#aaps-builder-from-fork">請先取得其副本</a>。
- **你是第一次建置 AAPS，或你已遺失金鑰庫或其密碼**：請選擇 **Create a new key（建立新金鑰）**。以新金鑰簽署的應用程式，**無法更新**以其他金鑰簽署的 AAPS。你必須先匯出設定，將檔案複製到手機外，解除安裝舊版 AAPS，再安裝新版並匯入設定。請參閱[使用新的金鑰庫重新安裝 AAPS](#reinstall-aaps)。

此後請務必持續使用同一把金鑰。當你建立新金鑰時，請下載頁面提供的備份，並將其與密碼及別名（<code>key0</code>）一併安全保存，且不要放在手機裡。
```
）一併安全保存，且不要放在手機裡。
</code>

(aaps-builder-from-fork)=

## 從先前的瀏覽器建置（fork）移轉

如果你從未使用先前的瀏覽器建置方式（在 GitHub 中擁有 AndroidAPS 的個人副本或 fork，包含準備檔與 Google Drive）建置 AAPS，請略過本節。

你的金鑰庫以機密的形式儲存在你的 fork 中。 GitHub 不會再次顯示機密，因此你無法將它複製到新的儲存庫。先取得金鑰庫的複本，然後在[步驟 2](#aaps-builder-step2)選擇**我已有金鑰庫**並使用它。

```{warning}
請勿選擇 **Create a new key**。使用新金鑰建置的 AAPS 無法更新你手機上的 AAPS。
```

你的情況是哪一種？

- **You used Option 2**（你從 Android Studio 上傳了自己的金鑰庫），而且你仍然保留著 `.jks` 檔、其密碼與其別名：這裡無需再做任何事。在步驟 2 使用該檔案。
- **You used Option 1**（準備檔建立了你的金鑰），或你已經沒有金鑰庫檔：請依下方說明，從你的 fork 匯出。

要從你的 fork 匯出金鑰庫：

1. 在你的 fork 中，開啟 **Settings** → **Secrets and variables** → **Actions**，新增名稱為 `ZIP_PASSWORD` 的機密。請選擇僅包含英文字母與數字的密碼。它會保護你即將建立的檔案。
2. 開啟你 fork 的 **Actions** 分頁，點選 **CI Keystore Export**，然後點選 **Run workflow**。更多詳細資訊：[匯出你的金鑰庫](#ci-keystore-export)。
3. 當執行顯示綠色核取標記時，開啟你的 Google Drive：檔案 `keystore.zip` 會在資料夾 **AAPS** → **KeyStore** 中。若執行在 Google Drive 步驟失敗，代表你的 fork 的 Google Drive 存取權已到期：請參閱 [Google 重新整理權杖已過期](#aaps-ci-google-token-expired)。
4. 下載 `keystore.zip`，使用你的 `ZIP_PASSWORD` 開啟：可在電腦上，或在手機上使用能開啟受密碼保護 ZIP 檔的檔案管理器應用程式。其中包含：
   - `keystore.jks`：你的金鑰庫，
   - `keyStoreInfo.txt`：你的 `KEYSTORE_PASSWORD`、`KEY_PASSWORD` 與 `ALIAS`（通常是 `key0`）。
5. 將 `keystore.jks` 複製到你的手機（或複製到 Google Drive，之後可從那裡選取）。

在設定頁面的[步驟 2](#aaps-builder-step2)：

1. 點選 **I already have a keystore**。
2. 在 **Keystore file** 中，選擇 `keystore.jks`。
3. 在 **Keystore password** 中，輸入 `keyStoreInfo.txt` 內的 `KEYSTORE_PASSWORD`。
4. 在 **Key alias** 中，選擇或輸入 `keyStoreInfo.txt` 內的 `ALIAS`。
5. 若 `KEY_PASSWORD` 與 `KEYSTORE_PASSWORD` 不同，請取消勾選 **Key password is the same as the keystore password**，並輸入 `KEY_PASSWORD`。

請將 `keystore.zip` 與其 `ZIP_PASSWORD` 儲存在手機以外的安全位置：它是你金鑰的備份。

若要將 AAPS Builder 的建置結果也儲存到 Google 雲端硬碟，請完成[步驟 6](#aaps-builder-google-drive)：設定頁面會為你新增一個 `GDRIVE_OAUTH2`。你可以保留你的 fork，直到以 AAPS Builder 建置的 AAPS 安裝到你的手機上。

## 開啟設定頁面

**→ [開啟 AAPS Builder 設定頁面](#aaps-builder-setup)**

設定頁面已包含在這份文件中，並提供你的語系版本。也請在另一個分頁中開啟此頁面：下方各節會搭配螢幕截圖，詳細說明設定頁面的每個步驟。

設定頁會在新的 Chrome 分頁中開啟各個 GitHub 頁面。要返回設定頁，點選 Chrome 位址列旁的分頁按鈕（帶數字的方框）並選擇 AAPS Builder 的設定頁。

設定頁面完全在你的瀏覽器中執行：你的金鑰與密碼不會被傳送到任何地方，唯獨在你自行貼上至 GitHub 機密（secret）時除外。僅會將你的 GitHub 使用者名稱送到 GitHub，以檢查該帳號是否存在。它會記住你的 GitHub 使用者名稱與儲存庫名稱，因此你可以隨時回來重新開啟你的 Secrets 頁面或建置。

![AAPS Builder 設定頁面](../images/Building-the-App/CI/AapsBuilder30_Step1.png)

(aaps-builder-step1)=

## 步驟 1 – 建立你的私人建置儲存庫

此步驟會在你的 GitHub 帳號中建立 AAPS Builder 的私人複本，並預先加入建置工作流程。只有你能看到它，以及由它建置的應用程式。

1. 請確保你已在此瀏覽器登入 github.com。

2. 在 **Your GitHub username** 中，輸入你的 GitHub 使用者名稱，而不是你的電子郵件。頁面會向 GitHub 驗證：出現 **✓ GitHub user found** 代表輸入正確。

3. 在 **Name of your repository** 中，保留建議的 `my-aaps`。如果你先前以其他名稱建立過儲存庫，請輸入該名稱的完整拼寫。

   ```{note}
   **已經有 AAPS Builder 儲存庫**（使用舊版設定頁面建立）？不要建立新的儲存庫：輸入完全相同的名稱，略過 **建立我的私人儲存庫**，並依照[更新 AAPS](#aaps-builder-updates)中的說明更新一次工作流程。你的機密資料會維持原樣。如果你還是想建立新的儲存庫，請選擇尚未使用過的名稱，例如 `my-aaps-2`，並在步驟 2 使用相同的金鑰庫。

   不要輸入 AndroidAPS fork 的名稱：fork 是公開的，而且已使用自己的 **AAPS CI** 工作流程進行建置。
   ```

   ![設定頁面步驟 1 已填寫](../images/Building-the-App/CI/AapsBuilder31_Step1Filled.png)

4. 檢查 **Your repository:** 這一行：它應顯示 `github.com/<your username>/my-aaps`。設定頁面會記住你上次造訪時輸入的名稱：每次使用按鈕前都要確認名稱是否正確。

5. 點選 **Create my private repository**。

   ![儲存庫欄位和「建立我的私人儲存庫」按鈕](../images/Building-the-App/CI/AapsBuilder33_Step1Button.png)

6. GitHub 會在新分頁中開啟**建立新的儲存庫**頁面。所有資料都已預先填好：在**從範本開始**下方，範本是 `nightscout/aaps-builder`，且**包含所有分支**已關閉；在**一般**下方，**擁有者**是你的帳號，儲存庫名稱則是你選擇的名稱。

   ![GitHub 建立新儲存庫頁面](../images/Building-the-App/CI/AapsBuilder32_GitHubNewRepo.png)

   請不要變更任何項目。

7. 向下捲動：在**設定**下方，**選擇可見度**已設為**私人**。點選綠色的**建立儲存庫**按鈕。

   ![可見度設為「私人」以及「建立儲存庫」按鈕](../images/Building-the-App/CI/AapsBuilder34_GitHubCreate.png)

   GitHub 會顯示你的新儲存庫，其中包含一個 `.github` 資料夾（內含建置工作流程）和一個 `README.md` 檔案。**返回設定頁的分頁**以進行步驟 2：點選 Chrome 位址列旁的分頁按鈕並選擇設定頁。

```{warning}
**你的新儲存庫是空的**，裡面沒有任何檔案？這個儲存庫不是從範本建立的，因此無法進行建置。請刪除它（**設定** → 頁面底部 → **刪除此儲存庫**），然後再次點選設定頁面上的**建立我的私人儲存庫**。
```

(aaps-builder-step2)=

## 步驟 2 – 簽署金鑰

應用程式必須使用你自己的金鑰簽章。請在兩個分頁籤中擇一。請先閱讀 [新金鑰或既有金鑰的警示](#aaps-builder-before-you-start)。

![設定頁面步驟 2：兩種金鑰選項](../images/Building-the-App/CI/AapsBuilder40_Step3.png)

### 我已經有金鑰庫

1. 點選 **I already have a keystore**。
2. 在 **Keystore file** 中，選擇你的 `.jks` 檔案（或 `.keystore`、`.p12`、`.pfx`）。在手機上，先將檔案複製到你的手機或 Google 雲端硬碟。
3. 在 **金鑰庫密碼** 欄位中，輸入金鑰庫密碼。
4. 在 **Key alias** 中，從清單選擇你的別名；若無清單，請自行輸入。若是使用 Android Studio 建立的金鑰庫，通常為 `key0`。
5. 若你的金鑰密碼與金鑰庫密碼不同，請取消勾選 **金鑰密碼與金鑰庫密碼相同**，並輸入金鑰密碼。
6. 點選 **檢查並繼續**。

此頁面會在你的裝置上檢查密碼與別名。**金鑰庫 OK！**繼續進行步驟 3。**表示一切正常。若顯示將在建置時檢查密碼，仍可繼續：建置時會告知是否有問題。</p>

### 建立新金鑰

1. 點選 **建立新金鑰**。

2. 選擇一組密碼並輸入兩次。規則：至少 8 個字元，只能使用 a–z、A–Z 的字母、0–9 的數字，以及像 `! ? #`。不可有空白、重音符號的字母，也不能包含 `|` 字元。

3. 點選 **建立金鑰**。幾秒後會出現 **已建立金鑰**。

   ![新金鑰表單（密碼輸入兩次）](../images/Building-the-App/CI/AapsBuilder41_NewKey.png)

4. 點選 **下載備份（aaps-keystore.jks）**。若 Chrome 詢問 **Download file again?**，代表你的手機上已存在同名的舊備份：請點選 **Download again**。之後 Chrome 會將新金鑰儲存為 `aaps-keystore (1).jks`：這是與此金鑰對應的檔案，請妥善保存，勿與舊檔混淆。

   請將以下三項一併妥善儲存於手機以外的安全位置（例如你自己的雲端儲存空間）：

   - 檔案 `aaps-keystore.jks`，
   - 你的密碼，
   - 此金鑰的別名：**`key0`**。

   未來若以其他方式建置 AAPS，例如使用 Android Studio，以上三項都需要用到。使用較早版本設定頁建立的金鑰，其別名為 `aaps`。

   ![已建立金鑰與備份區塊](../images/Building-the-App/CI/AapsBuilder42_KeyCreated.png)

(aaps-builder-step3)=

## 步驟 3 – 將金鑰提供給你的儲存庫

完成步驟 2 後，步驟 3 就會解鎖。你的金鑰、其密碼與別名會被封裝成一個值，即 `KEYSTORE_SET` 機密。

1. 點選 **開啟機密頁面**。

![設定頁面步驟 3](../images/Building-the-App/CI/AapsBuilder43_Step4.png)

2. GitHub 會開啟你儲存庫的 **New secret** 頁面。在手機上，該頁位於設定選單下方：請往下捲動。

![GitHub 新增機密表單](../images/Building-the-App/CI/AapsBuilder11_NewSecret.png)

3. 切換到設定頁的分頁並點選 **Copy name**。切回 GitHub 的分頁，將其貼到較小的 **Name** 欄位。名稱是 `KEYSTORE_SET`。

4. 切換到設定頁的分頁並點選 **Copy secret**。切回 GitHub 的分頁，將其貼到較大的 **Secret** 欄位（在手機上請長按貼上）。此機密是一段非常長的代碼，可能有數千個字元：設定頁會在按鈕旁顯示其開頭幾個字元。請不要在那裡貼上 `KEYSTORE_SET` 這個文字。

5. 點選 **Add secret**。 `KEYSTORE_SET` 會顯示在 **Repository secrets** 底下。

![包含 KEYSTORE_SET 的 Repository secrets 清單](../images/Building-the-App/CI/AapsBuilder13_SecretList.png)

這個步驟只需要做一次。

```{tip}
GitHub 顯示 **找不到頁面**（404）？請先確認你已在此瀏覽器登入 github.com：未登入時，GitHub 對私人儲存庫會顯示 404。否則，第 1 步中的使用者名稱或儲存庫名稱與你的儲存庫不相符。請在 github.com 檢查名稱，在第 1 步更正後，再次點選按鈕。
```

(aaps-builder-step4)=

## 步驟 4 – 建置應用程式

1. 在設定頁面點選 **開啟建置頁面**。 GitHub 會開啟你儲存庫中的 **Build AAPS** 頁面。

   ![GitHub 的 Build AAPS 頁面，含有 Run workflow 按鈕](../images/Building-the-App/CI/AapsBuilder15_BuildPage.png)

   如果改為開啟 **GitHub app**：點選 **RUN WORKFLOW**，確認版本與變體，然後再次點選 **RUN WORKFLOW**。應用程式可能仍顯示 **Nothing to see here**：將清單向下拉以重新整理，然後就能看到你的建置。然後繼續進行下方的步驟 4。

2. 如果 GitHub 詢問，請點選綠色按鈕以啟用工作流程。

   工作流程清單中會顯示兩個項目：請使用 **Build AAPS**。請忽略 **AAPS Builder**：它包含建置步驟，沒有**執行工作流程**按鈕。

3. 點選 **Run workflow**。會開啟一個小型表單：
   - **版本**：保留 `latest` 以建置最新的 AAPS 版本，或輸入版本號碼，例如 `4.0.0`。
   - **Variant**：一般與幫浦搭配使用時，維持 `fullRelease`。其他變體的說明請參閱 [建置變體](#browserbuild-variant)。 `aapsclient3Release` 會建置 **AAPSClient3**，適用於 **AAPS** 4.0 版（請參閱 [關於 AAPSClient、AAPSClient2 和 AAPSClient3](#remotecontrol-aapsclient-versions)）。
   - 點選綠色的 **Run workflow** 按鈕。

   ![Run workflow 表單，設定為 latest 與 fullRelease](../images/Building-the-App/CI/AapsBuilder16_RunWorkflow.png)

4. 建置開始後會顯示 **In progress**，包含兩個部分：**AAPS / Check**，接著是 **AAPS / Build AAPS**。

   ![建置進行中](../images/Building-the-App/CI/AapsBuilder45_BuildRunning.png)

5. 請等待 15 至 30 分鐘。綠色勾號表示建置已完成。紅色叉號表示失敗：開啟該建置以閱讀訊息，然後請參閱 [疑難排解](#aaps-builder-troubleshooting)。

   ![完成的建置，顯示綠色勾號](../images/Building-the-App/CI/AapsBuilder22_BuildDone.png)

   ```{tip}
   **建置完成時的電子郵件通知：** GitHub 只會在建置失敗時寄送電子郵件給你。若也想在成功時收到電子郵件：在 github.com，開啟你的個人頭像 → **Settings** → **Notifications** → **System** → **Actions**，取消勾選 **Only notify for failed workflows**。
   ```

如果沒有 **Build AAPS** 或 **Run workflow** 按鈕：

- 開啟你的儲存庫，確認其中有一個 `.github` 資料夾，且內含 `workflows/build.yml` 檔案。如果儲存庫是空的，表示它不是從範本建立的：請刪除它（**設定** → 頁面底部 → **刪除此儲存庫**），然後按一下按鈕重新執行[步驟 1](#aaps-builder-step1)。
- 開啟 **Actions** 分頁。若顯示工作流程已停用，請點選綠色按鈕啟用，然後在清單中點選 **Build AAPS**。

(aaps-builder-step5)=

## 步驟 5 – 在手機上安裝應用程式

```{warning}
**每次更新前**，請在 AAPS 中 [匯出你的設定](#ExportImportSettings-Automating-Settings-Export)，並將檔案複製到手機以外的地方（Google Drive、Dropbox…）。同時保留數個較舊的匯出檔與 APK 檔案，以便隨時還原。
```

1. 在你的手機上，用 **Chrome** 開啟設定頁面。若出現提示，請登入 github.com。
2. 點選 **Open my builds**，然後選擇最新且為綠色勾號的建置。

   ```{admonition} The GitHub app opened instead of Chrome?
   :class: note

   GitHub App 無法下載建置。在應用程式中，開啟最新的建置，然後點選 **Artifacts ↗**，或點選上方的分享圖示並選擇 **Chrome**（或 **Copy link**，然後將連結貼到 Chrome 的網址列）。該建置會在 Chrome 中開啟：請在那裡繼續下一步。

   若要停止 GitHub 連結在應用程式中開啟：Android **Settings** → **Apps** → **GitHub** → **Open by default** → 關閉 **Open supported links**。
   ```

   ![完成的建置：狀態為 Success，且有 2 個 artifacts](../images/Building-the-App/CI/AapsBuilder50_RunSummary.png)

3. 向下捲動至建置摘要，點選 **Download AAPS** 連結。

   ![建置摘要，含有 Download AAPS 連結](../images/Building-the-App/CI/AapsBuilder51_DownloadLink.png)

   ```{tip}
   請在文字區域滑動，而非在建置步驟的圖表上滑動：否則會只移動圖表而非整個頁面。
   ```

   你也可以繼續向下捲動到 **Artifacts**，點選 `aaps-….apk` 旁的下載圖示。

   ![Artifacts，包含手機與手錶的應用程式](../images/Building-the-App/CI/AapsBuilder52_Artifacts.png)

4. 下載完成後，開啟 Chrome 的選單 **⋮** → **Downloads**，點選 `aaps-….apk`，並選擇 **Install**。如有提示，請允許自此來源安裝應用程式。

   ![Chrome 的 Downloads，顯示 AAPS APK](../images/Building-the-App/CI/AapsBuilder29_Downloads.png)

`aaps-wear-….apk` 是智慧型手錶的應用程式。若未使用智慧型手錶，可略過此項。

此應用程式會在建置頁面保留 14 天。它不會顯示在你儲存庫的 **Code** 分頁中。請將它與你的設定匯出檔一起複製到安全且不在手機上的位置。

有關更多安裝應用程式的方法，請參閱 [Transferring and Installing AAPS](TransferringAndInstallingAaps.md)。

```{note}
自 2026 年 9 月起，Google 的 Android 開發者驗證可能會依你的國家／地區，阻擋透過點擊檔案安裝 APK。該頁面說明了免費的替代作法。
```

(aaps-builder-google-drive)=

## 步驟 6（選用）－也將應用程式儲存到 Google Drive

你也可以將每次建置儲存到你的 Google Drive，位於資料夾 `AAPS/<version>`。這是可選的：應用程式一律會在建置頁面提供。

這需要再新增一個機密：`GDRIVE_OAUTH2`。設定頁面的第 6 步會在手機或電腦上代您從 Google 取得相關資料。 **AAPS** 之後只能查看及變更它在 Google Drive 中建立的檔案，無法存取其他內容。

1. 在設定頁面上，點選 **連結 Google Drive**。 Google 會在新分頁中開啟。
2. 選擇您的 Google 帳號並允許存取。如果 Google 顯示應用程式尚未通過驗證，請點選 **進階**，再點選 **前往……**。
3. 接著，新分頁會顯示錯誤訊息，例如 **無法連上這個網站** 或 **127.0.0.1 拒絕連線**。**這是正常現象：**Google 的回應會顯示在該分頁的網址中。點選網址列，選取整個網址（開頭為 `http://127.0.0.1:47913/`），然後複製。
4. 請在幾分鐘內返回設定頁面所在的分頁：Google 的回應只會在短時間內有效，而且只能使用一次。將網址貼到 **在此貼上複製的網址**，然後點選 **取得 GDRIVE_OAUTH2**。頁面會顯示 **GDRIVE_OAUTH2 已就緒**。
5. 點選 **開啟機密頁面**。點選 **Copy name**，然後將它貼到較小的 **Name** 欄位（名稱是 `GDRIVE_OAUTH2`）。點選 **複製密鑰**，將密鑰貼到大型的 **密鑰**欄位中，再點選 **新增密鑰**。

從下一次建置開始，APK 也會儲存在 Google Drive。

您是否已從其他瀏覽器建置方式的準備檔案中取得 `GDRIVE_OAUTH2` 值？這個值也可以使用：將它新增為 `GDRIVE_OAUTH2` 密鑰即可。

若你超過 6 個月沒有建置，或變更了 Google 密碼，Google 會停止存取權。之後建置會提示你：請重新執行這些步驟。請參閱 [Google 重新整理權杖已過期](#aaps-ci-google-token-expired)。

(aaps-builder-updates)=

## 更新AAPS

你的儲存庫不會自行建置任何內容：由你決定何時建置、要建置哪個版本與哪個變體。當有新的 AAPS 版本發佈時：

1. 請依照步驟 5 的說明，[備份您的設定](#aaps-builder-step5)。
2. 請依照[步驟 4](#aaps-builder-step4)建置新版本。保持 `latest`，或輸入發佈版本號。
3. 請依照[步驟 5](#aaps-builder-step5)下載並安裝。

**建置步驟更新**會自動套用：每次建置時，您的儲存庫都會執行 AAPS 開發者在 nightscout/aaps-builder 中發布的建置步驟。您的儲存庫不會有任何變更，也不會自動進行建置。

**工作流程檔案更新**並不常見：只有在**執行工作流程**表單有變更時才需要更新，例如新增建置變體；如果您的儲存庫是使用較舊版本的設定頁面（建立的空儲存庫中只有簡短的工作流程檔案），或是使用舊版範本建立的，則只需更新一次。詳情請參閱[文件更新與變更](../Maintenance/DocumentationUpdate.md)頁面。您的 `KEYSTORE_SET` 密鑰不需要變更。在設定頁面中，於步驟 1 底部開啟**更新您的副本**：

1. 點選**開啟最新版工作流程**。使用電腦時，請點選檔案右上方的**複製圖示**（「複製原始檔案」）。使用手機時，請改為開啟**純文字版本**，按住文字，然後點選**全選**，再點選**複製**。
2. 點選**開啟我的工作流程檔案**。
3. 用剛才複製的工作流程取代所有文字（在手機上長按文字，再點選**全選**，然後點選**貼上**）。
4. 點選**提交變更…**，再點選**提交變更**。

檔案的第一行會顯示版本。

(aaps-builder-troubleshooting)=

## 問題排除

若要了解建置失敗的原因，請[查看建置記錄](#aaps-ci-read-the-logs)：雖然步驟名稱不同，但找出錯誤的方法相同。您也可以用相同方式[更新密鑰](#aaps-ci-update-secret)並[重新執行建置](#aaps-ci-rerun)。

- **沒有「Build AAPS」或「Run workflow」按鈕，或儲存庫是空的**：這個儲存庫並非從範本建立。請刪除該儲存庫（**設定** → 頁面底部 → **刪除此儲存庫**），然後使用**建立我的私人儲存庫**按鈕重新執行[步驟 1](#aaps-builder-step1)。
- **建置停止並顯示 "This repository is PUBLIC"**：在你的儲存庫中，開啟 **Settings** → **General** → **Danger Zone** → **Change visibility** → **Private**，然後再建置一次。
- **「缺少密鑰 KEYSTORE_SET」**：請執行設定頁面的步驟 3。
- **"The secret is too short"**、**"The secret is not a valid code"** 或 **"The secret does not contain a keystore"**：貼到 Secret 的文字不正確，常見是貼成 `KEYSTORE_SET` 這個字本身，或只貼了部分代碼。在您的儲存庫中，開啟**設定** → **密鑰與變數** → **Actions**，編輯 `KEYSTORE_SET`，然後再次貼上從**複製密鑰**取得的長碼（如果您已關閉設定頁面，請先重新執行設定頁面的步驟 2）。
- **「Keystore、密碼或別名錯誤」**：請確認金鑰儲存庫的密碼和別名，然後重新執行設定頁面的步驟 2 和 3。
- **"Version … does not exist"**：你輸入的版本不是 AAPS 的發佈版本。請使用 `latest`，或檢查發佈版本號。
- **「不支援變體……」**：您的工作流程檔案版本過舊。請依照[更新 AAPS](#aaps-builder-updates)中的說明取代該檔案。
- **當設定頁面開啟 GitHub 時顯示「Page not found」（404）**：請在同一個瀏覽器登入 github.com（未登入時，GitHub 會對私人儲存庫顯示 404）。如果你已登入，則是設定頁面第 1 步的使用者名稱或儲存庫名稱與你的儲存庫不相符。請輸入完全相同的名稱。
- 第 1 步出現 **"No GitHub user with this name"**：請輸入你的 GitHub 使用者名稱（與你的 GitHub 個人檔案所示相同），而不是你的電子郵件。
- **沒有 Download 連結，或開啟的是 GitHub 應用程式**：GitHub 應用程式無法下載建置產物。請依照[步驟 5](#aaps-builder-step5)的說明，在 Chrome 中開啟建置項目。若要停止 GitHub 連結在應用程式中開啟：Android **Settings** → **Apps** → **GitHub** → **Open by default** → 關閉 **Open supported links**。
- **「Google Drive 存取權已逾期或遭到撤銷」**：請重新執行[步驟 6](#aaps-builder-google-drive)，並更新 `GDRIVE_OAUTH2` 密鑰。

如有其他 GitHub 或 Google Drive 問題，請參閱[瀏覽器建置疑難排解](../GettingHelp/BrowserBuildTroubleshooting.md)。

```{toctree}
:hidden:

AAPS Builder 設定頁面 <BrowserBuildAapsBuilderSetup.md>
```
