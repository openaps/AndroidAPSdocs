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

A setup page walks you through it. 第一次大約需要 10 分鐘：

1. Create your own **private copy** of AAPS Builder in your GitHub account: the setup page opens GitHub with everything filled in, you only confirm. The build workflow, the file that tells GitHub how to build AAPS, is already in it.
2. Create or upload your **signing key** (the keystore).
3. Give the key to your repository as a GitHub **secret**.
4. **Build** the app. One build takes 15 to 30 minutes.
5. **Download and install** the app on your phone.

你**不**需要對 AndroidAPS 進行派生：每次建置都會從官方的 AndroidAPS 儲存庫下載 AAPS 原始碼。你也**不**需要 Google Drive：你會直接從 GitHub 下載應用程式。

```{admonition} Where the code comes from
:class: note

The build workflow is maintained by the AAPS developers in the [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder) repository, and your repository is a copy of it. The [workflow](https://github.com/nightscout/aaps-builder/blob/main/.github/workflows/build.yml) in your copy is short: it runs the [build steps](https://github.com/nightscout/aaps-builder/blob/main/.github/workflows/aaps-builder.yml) kept in that repository, so improvements reach you without any change to your repository. You can read both files. 在建置時，該工作流程只會下載官方的 AAPS 原始碼與 GitHub 自家的建置工具。你的金鑰庫不會離開你的瀏覽器與你的私有儲存庫。
```

(aaps-builder-before-you-start)=

## 開始之前

你需要準備：

- 一個 **GitHub 帳號**（免費）。若尚未擁有，請先到 [github.com](https://github.com/signup) 建立。
- 一個 **網頁瀏覽器**：手機上的 Chrome，或電腦上的任一瀏覽器。開始前，請先在該瀏覽器登入 github.com。
- **你手機上已安裝 GitHub 應用程式嗎？** 可以保留。之後設定頁面上的部分按鈕會開啟該應用程式，而非 Chrome。 Building works in the app, but the app **cannot download** the finished AAPS: [step 5](#aaps-builder-step5) shows how to switch to Chrome for the download.
- 你先前已有的 **金鑰庫**（`.jks` 檔案）、其密碼與其別名；若你先前已建置過 AAPS，並想在不重新安裝的情況下進行更新，就需要這些。

```{warning}
**你的建置儲存庫必須維持為私有。** 任何能查看此儲存庫的人，都能看到建置所產生的一切內容。設定頁面會為你建立一個私有儲存庫。 Never change it to public, and don't **fork** AAPS Builder instead: a fork is always public.

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

你的金鑰庫以機密的形式儲存在你的 fork 中。 GitHub 不會再次顯示機密，因此你無法將它複製到新的儲存庫。 Get a copy of your keystore first, then use it in [step 2](#aaps-builder-step2) with **I already have a keystore**.

```{warning}
請勿選擇 **Create a new key**。使用新金鑰建置的 AAPS 無法更新你手機上的 AAPS。
```

你的情況是哪一種？

- **You used Option 2**（你從 Android Studio 上傳了自己的金鑰庫），而且你仍然保留著 `.jks` 檔、其密碼與其別名：這裡無需再做任何事。 Use that file in step 2.
- **You used Option 1**（準備檔建立了你的金鑰），或你已經沒有金鑰庫檔：請依下方說明，從你的 fork 匯出。

要從你的 fork 匯出金鑰庫：

1. 在你的 fork 中，開啟 **Settings** → **Secrets and variables** → **Actions**，新增名稱為 `ZIP_PASSWORD` 的機密。請選擇僅包含英文字母與數字的密碼。它會保護你即將建立的檔案。
2. 開啟你 fork 的 **Actions** 分頁，點選 **CI Keystore Export**，然後點選 **Run workflow**。更多詳細資訊：[匯出你的金鑰庫](#ci-keystore-export)。
3. 當執行顯示綠色核取標記時，開啟你的 Google Drive：檔案 `keystore.zip` 會在資料夾 **AAPS** → **KeyStore** 中。若執行在 Google Drive 步驟失敗，代表你的 fork 的 Google Drive 存取權已到期：請參閱 [Google 重新整理權杖已過期](#aaps-ci-google-token-expired)。
4. 下載 `keystore.zip`，使用你的 `ZIP_PASSWORD` 開啟：可在電腦上，或在手機上使用能開啟受密碼保護 ZIP 檔的檔案管理器應用程式。其中包含：
   - `keystore.jks`：你的金鑰庫，
   - `keyStoreInfo.txt`：你的 `KEYSTORE_PASSWORD`、`KEY_PASSWORD` 與 `ALIAS`（通常是 `key0`）。
5. 將 `keystore.jks` 複製到你的手機（或複製到 Google Drive，之後可從那裡選取）。

In [step 2](#aaps-builder-step2) of the setup page:

1. 點選 **I already have a keystore**。
2. 在 **Keystore file** 中，選擇 `keystore.jks`。
3. 在 **Keystore password** 中，輸入 `keyStoreInfo.txt` 內的 `KEYSTORE_PASSWORD`。
4. 在 **Key alias** 中，選擇或輸入 `keyStoreInfo.txt` 內的 `ALIAS`。
5. 若 `KEY_PASSWORD` 與 `KEYSTORE_PASSWORD` 不同，請取消勾選 **Key password is the same as the keystore password**，並輸入 `KEY_PASSWORD`。

請將 `keystore.zip` 與其 `ZIP_PASSWORD` 儲存在手機以外的安全位置：它是你金鑰的備份。

To also save the builds of AAPS Builder in Google Drive, do [step 6](#aaps-builder-google-drive): the setup page gets a new `GDRIVE_OAUTH2` for you. 你可以保留你的 fork，直到以 AAPS Builder 建置的 AAPS 安裝到你的手機上。

## 開啟設定頁面

**→ [開啟 AAPS Builder 設定頁面](#aaps-builder-setup)**

The setup page is part of this documentation, in your language. Keep this page open in another tab as well: the sections below explain each step of the setup page in more detail, with screenshots.

設定頁會在新的 Chrome 分頁中開啟各個 GitHub 頁面。要返回設定頁，點選 Chrome 位址列旁的分頁按鈕（帶數字的方框）並選擇 AAPS Builder 的設定頁。

設定頁面完全在你的瀏覽器中執行：你的金鑰與密碼不會被傳送到任何地方，唯獨在你自行貼上至 GitHub 機密（secret）時除外。僅會將你的 GitHub 使用者名稱送到 GitHub，以檢查該帳號是否存在。它會記住你的 GitHub 使用者名稱與儲存庫名稱，因此你可以隨時回來重新開啟你的 Secrets 頁面或建置。

![AAPS Builder 設定頁面](../images/Building-the-App/CI/AapsBuilder30_Step1.png)

(aaps-builder-step1)=

## 步驟 1 – 建立你的私人建置儲存庫

This step creates your own private copy of AAPS Builder in your GitHub account, with the build workflow already in it. 只有你能看到它，以及由它建置的應用程式。

1. 請確保你已在此瀏覽器登入 github.com。

2. 在 **Your GitHub username** 中，輸入你的 GitHub 使用者名稱，而不是你的電子郵件。頁面會向 GitHub 驗證：出現 **✓ GitHub user found** 代表輸入正確。

3. 在 **Name of your repository** 中，保留建議的 `my-aaps`。如果你先前以其他名稱建立過儲存庫，請輸入該名稱的完整拼寫。

   ```{note}
   **Already have an AAPS Builder repository** (made with an earlier version of the setup page)? Don't create a new one: type its exact name, skip **Create my private repository**, and update its workflow once as explained in [Updating AAPS](#aaps-builder-updates). Your secrets stay as they are. If you want a new repository anyway, choose a name you don't have yet, for example `my-aaps-2`, and use the same keystore in step 2.

   Don't type the name of your fork of AndroidAPS: a fork is public, and it already builds with its own **AAPS CI** workflow.
   ```

   ![設定頁面步驟 1 已填寫](../images/Building-the-App/CI/AapsBuilder31_Step1Filled.png)

4. 檢查 **Your repository:** 這一行：它應顯示 `github.com/<your username>/my-aaps`。 The setup page remembers the name from your last visit: check it every time before you use its buttons.

5. 點選 **Create my private repository**。

   ![The repository line and the Create my private repository button](../images/Building-the-App/CI/AapsBuilder33_Step1Button.png)

6. GitHub opens **Create a new repository** in a new tab. Everything is already filled in: under **Start with a template**, the template `nightscout/aaps-builder` with **Include all branches** off, and under **General**, your account as **Owner** and the name you chose.

   ![GitHub 建立新儲存庫頁面](../images/Building-the-App/CI/AapsBuilder32_GitHubNewRepo.png)

   Don't change anything.

7. Scroll down: under **Configuration**, **Choose visibility** is already **Private**. Tap the green **Create repository** button.

   ![Visibility Private and the Create repository button](../images/Building-the-App/CI/AapsBuilder34_GitHubCreate.png)

   GitHub shows your new repository: it contains a folder `.github` (with the build workflow) and a file `README.md`. **返回設定頁的分頁**以進行步驟 2：點選 Chrome 位址列旁的分頁按鈕並選擇設定頁。

```{warning}
**Your new repository is empty**, with no files? It was not created from the template, and it cannot build. Delete it (**Settings** → bottom of the page → **Delete this repository**), then tap **Create my private repository** on the setup page again.
```

(aaps-builder-step2)=

## Step 2 – Your signing key

應用程式必須使用你自己的金鑰簽章。請在兩個分頁籤中擇一。請先閱讀 [新金鑰或既有金鑰的警示](#aaps-builder-before-you-start)。

![Setup page step 2: the two key options](../images/Building-the-App/CI/AapsBuilder40_Step3.png)

### 我已經有金鑰庫

1. 點選 **I already have a keystore**。
2. 在 **Keystore file** 中，選擇你的 `.jks` 檔案（或 `.keystore`、`.p12`、`.pfx`）。在手機上，先將檔案複製到你的手機或 Google 雲端硬碟。
3. 在 **金鑰庫密碼** 欄位中，輸入金鑰庫密碼。
4. 在 **Key alias** 中，從清單選擇你的別名；若無清單，請自行輸入。若是使用 Android Studio 建立的金鑰庫，通常為 `key0`。
5. 若你的金鑰密碼與金鑰庫密碼不同，請取消勾選 **金鑰密碼與金鑰庫密碼相同**，並輸入金鑰密碼。
6. 點選 **檢查並繼續**。

此頁面會在你的裝置上檢查密碼與別名。**金鑰庫 OK！ Continue with step 3.** means everything is right. 若顯示將在建置時檢查密碼，仍可繼續：建置時會告知是否有問題。

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

## Step 3 – Give the key to your repository

Step 3 unlocks when step 2 is done. 你的金鑰、其密碼與別名會被封裝成一個值，即 `KEYSTORE_SET` 機密。

1. 點選 **開啟機密頁面**。

![Setup page step 3](../images/Building-the-App/CI/AapsBuilder43_Step4.png)

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

## Step 4 – Build the app

1. 在設定頁面點選 **開啟建置頁面**。 GitHub 會開啟你儲存庫中的 **Build AAPS** 頁面。

   ![GitHub 的 Build AAPS 頁面，含有 Run workflow 按鈕](../images/Building-the-App/CI/AapsBuilder15_BuildPage.png)

   如果改為開啟 **GitHub app**：點選 **RUN WORKFLOW**，確認版本與變體，然後再次點選 **RUN WORKFLOW**。應用程式可能仍顯示 **Nothing to see here**：將清單向下拉以重新整理，然後就能看到你的建置。然後繼續進行下方的步驟 4。

2. 若 GitHub 要求，請點選綠色按鈕以啟用工作流程。
3. 點選 **Run workflow**。會開啟一個小型表單：
   - **Version**: keep `latest` to build the newest AAPS release, or type a release number such as `4.0.0`.
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

- Open your repository and check that it has a folder `.github` with the file `workflows/build.yml`. If the repository is empty, it was not created from the template: delete it (**Settings** → bottom of the page → **Delete this repository**) and do [step 1](#aaps-builder-step1) again with the button.
- 開啟 **Actions** 分頁。若顯示工作流程已停用，請點選綠色按鈕啟用，然後在清單中點選 **Build AAPS**。

(aaps-builder-step5)=

## Step 5 – Install the app on your phone

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

## Step 6 (optional) – Also save the app in Google Drive

你也可以將每次建置儲存到你的 Google Drive，位於資料夾 `AAPS/<version>`。這是可選的：應用程式一律會在建置頁面提供。

這需要再新增一個機密：`GDRIVE_OAUTH2`。 Step 6 of the setup page gets it from Google for you, on a phone or a computer. **AAPS** can then only see and change the files it creates in your Google Drive, nothing else.

1. On the setup page, tap **Connect Google Drive**. Google opens in a new tab.
2. Choose your Google account and allow access. If Google says the app is not verified, tap **Advanced**, then **Go to …**.
3. The new tab then shows an error such as **This site can't be reached** or **127.0.0.1 refused to connect**. **This is expected:** Google's answer is in the address of that tab. Tap the address bar, select the whole address (it starts with `http://127.0.0.1:47913/`) and copy it.
4. Go back to the setup page tab within a few minutes: Google's answer is only valid for a short time, and only once. Paste the address into **Paste the copied address here** and tap **Get GDRIVE_OAUTH2**. The page shows **GDRIVE_OAUTH2 is ready**.
5. 點選 **開啟機密頁面**。點選 **Copy name**，然後將它貼到較小的 **Name** 欄位（名稱是 `GDRIVE_OAUTH2`）。 Tap **Copy secret**, paste it into the big **Secret** box and tap **Add secret**.

從下一次建置開始，APK 也會儲存在 Google Drive。

Already have a `GDRIVE_OAUTH2` value from the preparation file of the other browser build methods? It works too: add it as the `GDRIVE_OAUTH2` secret.

若你超過 6 個月沒有建置，或變更了 Google 密碼，Google 會停止存取權。之後建置會提示你：請重新執行這些步驟。請參閱 [Google 重新整理權杖已過期](#aaps-ci-google-token-expired)。

(aaps-builder-updates)=

## 更新AAPS

你的儲存庫不會自行建置任何內容：由你決定何時建置、要建置哪個版本與哪個變體。當有新的 AAPS 版本發佈時：

1. [Back up your settings](#aaps-builder-step5) as explained in step 5.
2. Build the new version as in [step 4](#aaps-builder-step4). 保持 `latest`，或輸入發佈版本號。
3. Download and install it as in [step 5](#aaps-builder-step5).

**Updates of the build steps** reach you by themselves: at every build, your repository runs the build steps released by the AAPS developers in nightscout/aaps-builder. Nothing changes in your repository, and there is no automatic build.

**Updates of your workflow file** are rare: only when the **Run workflow** form changes, for example for a new build variant, or once if your repository was made with an earlier version of the setup page (an empty repository with a short workflow file) or from the old template. The [Docs updates & changes](../Maintenance/DocumentationUpdate.md) page says so. Your `KEYSTORE_SET` secret stays as it is. On the setup page, open **Updating your copy** at the end of step 1:

1. Tap **Open the newest workflow**. On a computer, click the **copy icon** ("Copy raw file") at the top right of the file. On a phone, open the **plain-text version** instead, press and hold the text, then **Select all** and **Copy**.
2. Tap **Open my workflow file**.
3. Replace the whole text with the copied workflow (long press on a phone: **Select all**, then **Paste**).
4. Tap **Commit changes…**, then **Commit changes**.

The first line of the file shows its version.

(aaps-builder-troubleshooting)=

## 問題排除

To see why a build failed, [read the build log](#aaps-ci-read-the-logs): the step names are different, but you find the error the same way. You can also [update a secret](#aaps-ci-update-secret) and [run the build again](#aaps-ci-rerun) the same way.

- **No "Build AAPS" or "Run workflow" button, or the repository is empty**: the repository was not created from the template. Delete it (**Settings** → bottom of the page → **Delete this repository**) and do [step 1](#aaps-builder-step1) again with the **Create my private repository** button.
- **建置停止並顯示 "This repository is PUBLIC"**：在你的儲存庫中，開啟 **Settings** → **General** → **Danger Zone** → **Change visibility** → **Private**，然後再建置一次。
- **"Secret KEYSTORE_SET is missing"**: do step 3 of the setup page.
- **"The secret is too short"**、**"The secret is not a valid code"** 或 **"The secret does not contain a keystore"**：貼到 Secret 的文字不正確，常見是貼成 `KEYSTORE_SET` 這個字本身，或只貼了部分代碼。 In your repository, open **Settings** → **Secrets and variables** → **Actions**, edit `KEYSTORE_SET` and paste the long code from **Copy secret** again (redo step 2 of the setup page first if you closed it).
- **"Keystore, password or alias is wrong"**: check your keystore's password and alias, then redo steps 2 and 3 of the setup page.
- **"Version … does not exist"**：你輸入的版本不是 AAPS 的發佈版本。請使用 `latest`，或檢查發佈版本號。
- **"Variant … is not supported"**: your workflow file is an older version. Replace it as explained in [Updating AAPS](#aaps-builder-updates).
- **當設定頁面開啟 GitHub 時顯示「Page not found」（404）**：請在同一個瀏覽器登入 github.com（未登入時，GitHub 會對私人儲存庫顯示 404）。如果你已登入，則是設定頁面第 1 步的使用者名稱或儲存庫名稱與你的儲存庫不相符。請輸入完全相同的名稱。
- 第 1 步出現 **"No GitHub user with this name"**：請輸入你的 GitHub 使用者名稱（與你的 GitHub 個人檔案所示相同），而不是你的電子郵件。
- **沒有 Download 連結，或開啟的是 GitHub 應用程式**：GitHub 應用程式無法下載建置產物。 Open the build in Chrome as explained in [step 5](#aaps-builder-step5). 若要停止 GitHub 連結在應用程式中開啟：Android **Settings** → **Apps** → **GitHub** → **Open by default** → 關閉 **Open supported links**。
- **"Google Drive access has expired or was revoked"**: redo [step 6](#aaps-builder-google-drive) and update the `GDRIVE_OAUTH2` secret.

For other GitHub and Google Drive issues, see [Browser build troubleshooting](../GettingHelp/BrowserBuildTroubleshooting.md).

```{toctree}
:hidden:

AAPS Builder setup page <BrowserBuildAapsBuilderSetup.md>
```
