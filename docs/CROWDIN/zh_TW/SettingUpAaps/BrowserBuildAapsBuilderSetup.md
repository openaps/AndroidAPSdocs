(aaps-builder-setup)=

# AAPS Builder 設定頁面

在 GitHub 建置你自己的 **AAPS** App。不需安裝任何程式，不用終端機。第一次約需 10 分鐘，之後每次建置都由你自行啟動。

更詳細的步驟與螢幕截圖，請參閱 [使用 AAPS Builder 透過瀏覽器建置](#aaps-builder)。請在另一個分頁保持該頁面開啟。

下方按鈕會在新的 Chrome 分頁中開啟 GitHub。要回到此頁，點選 Chrome 位於網址列旁的分頁按鈕（帶有數字的方形），然後選擇此頁面。

(aaps-builder-setup-step1)=

## 步驟 1 – 建立你的私人建置儲存庫

This creates your own private copy of AAPS Builder in your GitHub account: a repository with the build workflow already in it. 只有你能看到它，以及由它建置的應用程式。你**不**需要對 AndroidAPS 進行派生：每次建置都會從官方的 AndroidAPS 儲存庫下載 AAPS 原始碼。

<label class="aapsb-label" for="aapsb-user">你的 GitHub 使用者名稱</label>
<input class="aapsb-input" type="text" id="aapsb-user" autocomplete="username" spellcheck="false" placeholder="my-github-name" />
<span class="aapsb-msg" id="aapsb-userMsg"></span>

請先在此瀏覽器登入 github.com（沒有帳號？免費建立一個）。然後回到這裡。請使用你的使用者名稱（顯示於 GitHub 個人檔案），不要用電子郵件；此頁會向 GitHub 查詢該使用者名稱是否存在。

<label class="aapsb-label" for="aapsb-repo">你的儲存庫名稱</label>
<input class="aapsb-input" type="text" id="aapsb-repo" spellcheck="false" placeholder="my-aaps" />

請沿用建議名稱。已用其他名稱建立過儲存庫？請在此輸入完全相同的名稱。

```{note}
**Already have an AAPS Builder repository** (made with an earlier version of this page)? Do not create a new one: type its exact name here, skip the button below, and update its workflow once: see **Updating your copy** at the end of this step. Your secrets stay as they are.

If you want a new repository anyway, choose a name you don't have yet, for example `my-aaps-2`, and use the same keystore in step 2.

Do not type the name of your fork of AndroidAPS: a fork is public, and it already builds with its own **AAPS CI** workflow.
```

你的儲存庫：<code class="aapsb-repoUrl"></code>

Check this name before you use the buttons below: the page remembers the name from your last visit.

<a class="aapsb-btn" id="aapsb-createRepo" target="_blank" rel="noopener">建立我的私人儲存庫</a>

On the GitHub page that opens, everything is already filled in: the template `nightscout/aaps-builder`, your account as owner, the name of your repository, and **Private**. Do not change anything, and leave **Include all branches** unticked.

1. 點選綠色的 Create repository 按鈕。
2. GitHub shows your new repository with a folder `.github` and a file `README.md`: the build workflow is in it. 回到此頁進行步驟 2。

```{admonition} Your new repository is empty (no files)?
:class: warning

It was not created from the template. Delete it (**Settings** → bottom of the page → **Delete this repository**), then tap **Create my private repository** again.
```

```{admonition} Updating your copy (existing AAPS Builder repository)
:class: dropdown

The build steps are updated for you: at every build, your repository runs the version released by the AAPS developers in nightscout/aaps-builder, and nothing in your repository changes. You only replace your workflow file when [Docs updates & changes](../Maintenance/DocumentationUpdate.md) announces it (for example for a new build variant), or once if your repository was made with an earlier version of this page or from the old template. Your `KEYSTORE_SET` secret stays as it is.

1. <a class="aapsb-btn aapsb-secondary" href="https://github.com/nightscout/aaps-builder/blob/main/.github/workflows/build.yml" target="_blank" rel="noopener">Open the newest workflow</a>

   On a computer, click the **copy icon** ("Copy raw file") at the top right of the file. On a phone, open the <a href="https://raw.githubusercontent.com/nightscout/aaps-builder/main/.github/workflows/build.yml" target="_blank" rel="noopener">plain-text version</a> instead, press and hold the text → **Select all** → **Copy**.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openWorkflowFile" target="_blank" rel="noopener">Open my workflow file</a>

   Opens `.github/workflows/build.yml` in <code class="aapsb-repoUrl"></code> for editing.
3. Replace the whole text with the copied workflow (on a phone: press and hold → **Select all** → **Paste**), then click **Commit changes…** twice. The first line of the file shows its version.
```

(aaps-builder-setup-step2)=

## Step 2 – Your signing key

應用程式必須使用你自己的金鑰簽章。請一律使用相同的金鑰，否則更新時必須先解除安裝 AAPS（並且會遺失其設定）。請在兩個分頁籤中擇一。

`````{tab-set}

````{tab-item} 我已經有 keystore
例如來自 Android Studio（.jks）。

<label class="aapsb-label" for="aapsb-ksFile">金鑰庫檔案</label>
<input type="file" id="aapsb-ksFile" accept=".jks,.keystore,.p12,.pfx,application/octet-stream">

<label class="aapsb-label" for="aapsb-ksPass">金鑰庫密碼</label>
<input class="aapsb-input" type="password" id="aapsb-ksPass" autocomplete="off">

<label class="aapsb-label" for="aapsb-ksAlias">金鑰別名</label>
<select class="aapsb-input" id="aapsb-ksAliasSel" hidden></select>
<input class="aapsb-input" type="text" id="aapsb-ksAlias" autocomplete="off" spellcheck="false" placeholder="key0">

<label class="aapsb-check"><input type="checkbox" id="aapsb-samePass" checked> 金鑰密碼與金鑰庫密碼相同</label>

<div id="aapsb-keyPassWrap" hidden>

<label class="aapsb-label" for="aapsb-keyPass">金鑰密碼</label>
<input class="aapsb-input" type="password" id="aapsb-keyPass" autocomplete="off">

</div>

<button class="aapsb-btn" type="button" id="aapsb-haveGo">檢查並繼續</button> <span class="aapsb-msg" id="aapsb-haveMsg"></span>
````

````{tab-item} 建立新的金鑰
第一次建置 AAPS 嗎？會在你的瀏覽器中建立新的金鑰。不會將任何內容傳送到任何地方。

<label class="aapsb-label" for="aapsb-newPass">選擇一組密碼（至少 8 個字元，不含重音字母）</label>
<input class="aapsb-input" type="password" id="aapsb-newPass" autocomplete="new-password">

<label class="aapsb-label" for="aapsb-newPass2">再次輸入密碼</label>
<input class="aapsb-input" type="password" id="aapsb-newPass2" autocomplete="new-password">

<button class="aapsb-btn" type="button" id="aapsb-newGo">建立金鑰</button> <span class="aapsb-msg" id="aapsb-newMsg"></span>

<div class="aapsb-box" id="aapsb-backupBox" hidden>

**請儲存你的金鑰備份！**

下載檔案。請將以下三項放在一起，並保存在手機以外的安全位置（例如你自己的雲端儲存空間）：

- 檔案 `aaps-keystore.jks`
- 你的密碼
- 金鑰的別名：**`key0`**

日後若以其他方式建置 AAPS（例如使用 Android Studio），將需要以上三項。

<button class="aapsb-btn" type="button" id="aapsb-downloadKs">下載備份（aaps-keystore.jks）</button>

</div>
````

`````
(aaps-builder-setup-step3)=
## Step 3 – Give the key to your repository
<span id="aapsb-s3wait">Finish step 2 first.</span>

<div id="aapsb-s3ready" hidden>
  1. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets" target="_blank" rel="noopener">開啟 Secrets 頁面</a> 開啟：<code class="aapsb-repoUrl"></code> 出現「找不到頁面」（404）？請先確認你已在此瀏覽器登入 github.com：未登入時，GitHub 對私人儲存庫會顯示 404。否則就是你在步驟 1 輸入的使用者名稱或儲存庫名稱與實際的儲存庫不相符：請到 github.com 檢查，並在步驟 1 重新輸入正確資訊。 2. 點選「複製名稱」，然後將它貼到較小的「Name」欄位中：`KEYSTORE_SET` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="name">複製名稱</button> 3. 點選「複製機密」，然後把長長的代碼貼到較大的「Secret」欄位中：<code id="aapsb-secretPreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="secret">複製機密</button> <span class="aapsb-msg" id="aapsb-copyMsg"></span> 這個機密是一段非常長的代碼（數千個字元），不是單字 KEYSTORE_SET。先複製並貼上名稱，再貼上那段長代碼。 4. 點選「Add secret」。完成。這一步之後就不需要再做了。
</div>
(aaps-builder-setup-step4)=
## Step 4 – Build the app

1. <a class="aapsb-btn" id="aapsb-openActions" target="_blank" rel="noopener">開啟建置頁面</a>

   開啟：<code class="aapsb-repoUrl"></code>

   出現「找不到頁面」（404）？請先確認你已在此瀏覽器登入 github.com：未登入時，GitHub 對私人儲存庫會顯示 404。否則就是你在步驟 1 輸入的使用者名稱或儲存庫名稱與實際的儲存庫不相符：請到 github.com 檢查，並在步驟 1 重新輸入正確資訊。 是否改由 GitHub App 開啟？點選「RUN WORKFLOW」，確認版本與變體，然後再點選一次「RUN WORKFLOW」。如果 App 仍顯示「Nothing to see here」，請下拉清單以查看你的建置。
2. 若系統提示，請點選綠色按鈕以啟用工作流程。
3. 點選「Run workflow」，再點選綠色的「Run workflow」按鈕。 「latest」會建置最新的 AAPS 版本。***提示：*** *輸入其他版本的[標籤](https://github.com/nightscout/AndroidAPS/tags)名稱，即可建置該版本，而不必輸入「latest」*
4. 請等待約 15–30 分鐘。綠色勾勾代表已完成。
想在建置完成時收到電子郵件通知嗎？ GitHub 只會在建置失敗時寄送郵件給你。若也想在成功時收到通知：前往 github.com，開啟你的個人頭像 → Settings → Notifications → System → Actions，並取消勾選「Only notify for failed workflows」。

```{admonition} No "Build AAPS" / "Run workflow" button?
:class: warning

1. Open your repository and check that it has a folder `.github` with the file `workflows/build.yml`. If the repository is empty, it was not created from the template: delete it (**Settings** → bottom of the page → **Delete this repository**) and do [step 1](#aaps-builder-setup-step1) again with the button.
2. 開啟 Actions 分頁。若顯示工作流程已停用，請點選綠色按鈕以啟用。接著在清單中點選「Build AAPS」。
```

(aaps-builder-setup-step5)=

## Step 5 – Install on your phone

```{admonition} Before every update: back up your settings!
:class: warning

1. 在 AAPS：維護 → 匯出設定。（無論如何都請定期進行，例如變更設定檔之後，或每個月一次。）
2. 將匯出的檔案從手機移出，例如存到 Google Drive 或 Dropbox。只保存在手機上的備份會跟著手機一起遺失。
3. 也請在那裡保留 APK 檔與數個較舊的匯出檔。之後你就能隨時回復。

[如何匯出設定](#ExportImportSettings-Settings-Export) · [AAPS 常見問答：如何整理備份](#FAQ-organize-backups)
```

1. 請在你的手機上用網頁瀏覽器（Chrome）開啟此頁面。若出現提示，請登入 github.com。
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openRuns" target="_blank" rel="noopener">開啟我的建置</a>

   是否改由 GitHub App 開啟？無法下載建置。在 App 中開啟最新的建置並點選「Artifacts ↗」，或點選分享圖示並選擇 Chrome（或「Copy link」，再把連結貼到 Chrome 的網址列）。請在 Chrome 繼續。

   出現「找不到頁面」（404）嗎？請先確認你已在此瀏覽器登入 github.com：未登入時，GitHub 對私人儲存庫會顯示 404。否則就是你在步驟 1 輸入的使用者名稱或儲存庫名稱與實際的儲存庫不相符：請到 github.com 檢查，並在步驟 1 重新輸入正確資訊。

   若要避免 GitHub 連結在 App 中開啟：Android 設定 → 應用程式 → GitHub → 預設開啟方式 → 關閉「Open supported links」。
3. 點選有綠色勾勾 ✅ 的最新建置。
4. 向下捲動到建置摘要，點選大型連結「📱 Download AAPS …」（或再往下捲到「Artifacts」，點選 aaps-….apk）。請在文字區域用手指捲動，不要在建置步驟的圖表上捲動。
5. 下載完成後，點選該檔案並選擇安裝。如有提示，請允許自此來源安裝應用程式。
6. aaps-wear-….apk 是給智慧型手錶用的。若沒有使用，請略過。

APK 不會出現在你的儲存庫「Code」頁籤裡，只會在建置頁面上顯示。它會保留 14 天。

有新的 AAPS 版本？ Back up your settings, then build it with [step 4](#aaps-builder-setup-step4). 你的儲存庫不會自行進行任何建置。

(aaps-builder-setup-step6)=

## Step 6 – Optional: get the app in Google Drive

想讓 APK 出現在你的 Google Drive（永久保存）嗎？ Add one more secret, GDRIVE_OAUTH2. This page gets it from Google for you. AAPS can then only see and change the files it creates in your Google Drive, nothing else.

1. <a class="aapsb-btn" id="aapsb-googleAuth" target="_blank" rel="noopener">Connect Google Drive</a>

   Google opens in a new tab. Choose your Google account and allow AAPS to see and change its own files. If Google says the app is not verified, tap "Advanced", then "Go to …".
2. Then the new tab shows an error like **"This site can't be reached"** or **"127.0.0.1 refused to connect"**. **This is expected.** Google's answer is in the address of that tab.

   Tap the address bar of that tab, select all of the address and copy it. It starts with `http://127.0.0.1:47913/`. Come back to this page within a few minutes: the answer is only valid for a short time.
3. <label class="aapsb-label" for="aapsb-googleUrl">Paste the copied address here</label> <input class="aapsb-input" type="url" id="aapsb-googleUrl" autocomplete="off" spellcheck="false" placeholder="http://127.0.0.1:47913/aaps-builder?…" /> <button class="aapsb-btn" type="button" id="aapsb-googleGo">Get GDRIVE_OAUTH2</button> <span class="aapsb-msg" id="aapsb-googleMsg"></span>

<div id="aapsb-gdriveReady" hidden>

4. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets2" target="_blank" rel="noopener">Open the secrets page</a>

   Opens: <code class="aapsb-repoUrl"></code>

   Getting "Page not found" (404)? 請先確認你已在此瀏覽器登入 github.com：未登入時，GitHub 對私人儲存庫會顯示 404。否則就是你在步驟 1 輸入的使用者名稱或儲存庫名稱與實際的儲存庫不相符：請到 github.com 檢查，並在步驟 1 重新輸入正確資訊。
5. Tap "Copy name", then paste it into the small "Name" field: `GDRIVE_OAUTH2` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="gdrive">Copy name</button>
6. Tap "Copy secret", then paste the code into the big "Secret" box: <code id="aapsb-gdrivePreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="gdriveValue">Copy secret</button> <span class="aapsb-msg" id="aapsb-gdriveCopyMsg"></span>
7. 點選「Add secret」。

</div>

```{admonition} Already have a GDRIVE_OAUTH2 value?
:class: dropdown

A value from the AAPS preparation page of the other browser build works too: open the secrets page, add the name `GDRIVE_OAUTH2` and paste your value. See [Save the builds in Google Drive](#aaps-builder-google-drive).
```

下次建置時，APK 也會儲存在 Google Drive 的資料夾 AAPS/&lt;version&gt; 中。

如果 6 個月未進行建置，或變更了你的 Google 密碼，Google 會停止存取權。之後建置會提示此狀況：請重做此步驟。

----

本頁所有操作都在你的瀏覽器中執行。你的金鑰與密碼絕不會被送往任何地方，除非是你自行貼上的目的地。僅會將你的 GitHub 使用者名稱送到 GitHub，以檢查該帳號是否存在。 In step 6, the Google answer is sent only to Google, to get GDRIVE_OAUTH2. The build workflow is maintained by the AAPS developers in [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder), based on AAPS Builder (AGPL-3.0).

<div id="aapsb-msgs" hidden>

- <span data-aapsb-msg="copied">已複製長碼：請貼到較大的「Secret」欄位，然後點選「Add secret」。</span>
- <span data-aapsb-msg="copiedName">已複製名稱：請貼到較小的「Name」欄位。</span>
- <span data-aapsb-msg="userOk">✓ 找到 GitHub 使用者。</span>
- <span data-aapsb-msg="userBad">✗ 沒有此名稱的 GitHub 使用者。 Use your username (shown in your GitHub profile), not your e-mail.</span>
- <span data-aapsb-msg="copiedShort">Copied ✓</span>
- <span data-aapsb-msg="needUser">Enter your GitHub username in step 1 first.</span>
- <span data-aapsb-msg="errPipe">Passwords and alias cannot contain the character |</span>
- <span data-aapsb-msg="errNoFile">Choose your keystore file.</span>
- <span data-aapsb-msg="errEmpty">Fill in password and alias.</span>
- <span data-aapsb-msg="errPass">Wrong keystore password.</span>
- <span data-aapsb-msg="errKeyPass">Wrong key password.</span>
- <span data-aapsb-msg="errAlias">Alias not found in the keystore. 可用：{aliases}</span>
- <span data-aapsb-msg="errFormat">這看起來不像是金鑰庫檔案。</span>
- <span data-aapsb-msg="okHave">金鑰庫正常！ Continue with step 3.</span>
- <span data-aapsb-msg="okHaveUnchecked">Keystore read. 在建置時會檢查該密碼。 Continue with step 3.</span>
- <span data-aapsb-msg="errShort">The password must be at least 8 characters.</span>
- <span data-aapsb-msg="errAscii">Use only a–z, A–Z, 0–9 and symbols such as ! ? # － 不可有空白、重音字母，亦不可包含 |</span>
- <span data-aapsb-msg="errMatch">兩次輸入的密碼不相符。</span>
- <span data-aapsb-msg="working">正在建立金鑰…</span>
- <span data-aapsb-msg="okNew">已建立金鑰。 Download the backup below, then continue with step 3.</span>
- <span data-aapsb-msg="gNoUrl">Paste the whole address of the Google tab first.</span>
- <span data-aapsb-msg="gNoCode">This address has no answer from Google. Copy the whole address of the tab that shows the error, starting with http://127.0.0.1:47913/</span>
- <span data-aapsb-msg="gDenied">Google access was not allowed. Tap "Connect Google Drive" again and allow access.</span>
- <span data-aapsb-msg="gOldUrl">This address belongs to an older attempt. Tap "Connect Google Drive" again and use the new address.</span>
- <span data-aapsb-msg="gWorking">Asking Google…</span>
- <span data-aapsb-msg="gFailed">Google did not accept it ({error}). The answer is valid only for a few minutes and only once: tap "Connect Google Drive" again.</span>
- <span data-aapsb-msg="gNoRefresh">Google sent no long-term access. Tap "Connect Google Drive" again.</span>
- <span data-aapsb-msg="gOk">GDRIVE_OAUTH2 is ready. Add it as a secret below.</span>
- <span data-aapsb-msg="gCopied">Code copied: paste it in the big "Secret" box, then tap "Add secret".</span>

</div>

<style>
  .rst-content .aapsb-label { display: block; font-weight: 700; margin: 14px 0 4px; }
  .rst-content .aapsb-input { display: block; width: 100%; max-width: 480px; padding: 8px 10px; font: inherit; border: 1px solid #ccc; border-radius: 4px; }
  .rst-content .aapsb-check { display: flex; gap: 8px; align-items: center; margin-top: 10px; }
  .rst-content .aapsb-btn, .rst-content a.aapsb-btn:visited {
    display: inline-block; margin: 4px 0; padding: 8px 16px; border-radius: 4px; border: 1px solid #2980b9; cursor: pointer;
    background: #2980b9; color: #fff; font: inherit; font-weight: 700; text-decoration: none;
  }
  .rst-content .aapsb-btn:hover { background: #1f6391; color: #fff; }
  .rst-content .aapsb-btn.aapsb-secondary, .rst-content a.aapsb-btn.aapsb-secondary:visited { background: transparent; color: #2980b9; }
  .rst-content .aapsb-btn.aapsb-secondary:hover { background: #e7f2fa; }
  .rst-content .aapsb-btn:disabled { opacity: .45; cursor: not-allowed; }
  .rst-content .aapsb-msg { display: inline-block; margin-left: 6px; }
  .rst-content .aapsb-msg.ok { color: #1a7f37; } .rst-content .aapsb-msg.err { color: #cf222e; } .rst-content .aapsb-msg.warn { color: #9a6700; }
  .rst-content .aapsb-box { background: #e7f2fa; border-radius: 4px; padding: 12px 14px; margin: 12px 0; }
  .rst-content section.aapsb-done > h2::after { content: " ✓"; color: #1a7f37; }
  .rst-content [hidden] { display: none !important; }
</style>

<script src="../_static/aaps-builder/aaps-builder.forge.min.js"></script>
<script>
// AAPS Builder setup page logic. Walks the user through creating a private copy of the
// github.com/nightscout/aaps-builder template (the build workflow is in it) and creating the
// KEYSTORE_SET secret. The repository then builds AAPS from the official source,
// github.com/nightscout/AndroidAPS, with GitHub Actions.
//
// The keystore and passwords never leave this browser. The only requests are asking GitHub's
// public API whether the typed username exists (only the name is sent) and, in the optional
// Google Drive step, sending Google's one-time answer to Google's token endpoint. The page's
// Content-Security-Policy (set in docs/shared.conf.py) allows only the AAPS documentation site
// itself, https://api.github.com and https://oauth2.googleapis.com/token.
//
// Based on AAPS Builder by the AAPS Builder authors (github.com/dio99/aaps-builder), GNU Affero
// General Public License v3.0 (AGPL-3.0). Modified for the AAPS documentation: texts in the page
// so they can be translated, workflow maintained in github.com/nightscout/aaps-builder.
// Vendor library: _static/aaps-builder/aaps-builder.forge.min.js = node-forge 1.3.1
// (BSD-3-Clause or GPL-2.0), https://github.com/digitalbazaar/forge, the unmodified
// dist/forge.min.js of the npm package node-forge@1.3.1.
(() => {
  const TEMPLATE = { owner: 'nightscout', name: 'aaps-builder' };
  const REPO_NAME = 'my-aaps';
  const WORKFLOW_PATH = '.github/workflows/build.yml';       // where the template puts it

  const $ = id => document.getElementById('aapsb-' + id);
  // The texts are in the page (hidden list above), so they are translated with it.
  const M = {};
  document.querySelectorAll('[data-aapsb-msg]').forEach(el => { M[el.dataset.aapsbMsg] = el.textContent.trim(); });
  const t = (key, vars = {}) => M[key].replace(/\{(\w+)\}/g, (all, k) => k in vars ? vars[k] : all);
  const store = {
    get: k => { try { return localStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch {} }
  };
  const done = step => { const el = document.getElementById('aaps-builder-setup-step' + step); if (el) el.closest('section').classList.add('aapsb-done'); };

  // ---------- step 1: links ----------
  const userInput = $('user');
  userInput.value = store.get('ghUser') || '';
  const user = () => userInput.value.trim().replace(/^@/, '');
  const repoInput = $('repo');
  repoInput.value = store.get('ghRepo') || REPO_NAME;
  const repo = () => repoInput.value.trim() || REPO_NAME;

  const LINKS = [
    ['openWorkflowFile', '/edit/main/' + WORKFLOW_PATH],
    ['openSecrets', '/settings/secrets/actions/new'],
    ['openSecrets2', '/settings/secrets/actions/new'],
    ['openActions', '/actions/workflows/build.yml'],
    ['openRuns', '/actions/workflows/build.yml']
  ];

  function updateLinks() {
    const u = user();
    store.set('ghUser', u);
    store.set('ghRepo', repo());
    // GitHub's own "Use this template" page, with its documented prefill parameters: the copy is
    // private and contains the build workflow. owner=@me is the signed-in user.
    const p = new URLSearchParams({ template_owner: TEMPLATE.owner, template_name: TEMPLATE.name,
                                    owner: '@me', name: repo(), visibility: 'private' });
    $('createRepo').href = 'https://github.com/new?' + p;
    document.querySelectorAll('.aapsb-repoUrl').forEach(el => { el.textContent = `github.com/${u || '…'}/${repo()}`; });
    const base = `https://github.com/${encodeURIComponent(u)}/${encodeURIComponent(repo())}`;
    for (const [id, path] of LINKS) $(id).href = u ? base + path : '#aaps-builder-setup-step1';
  }
  userInput.addEventListener('input', updateLinks);
  // Check that the username exists (GitHub's public API, sends only the name)
  let userTimer;
  async function checkUser() {
    const u = user();
    if (!u) { $('userMsg').textContent = ''; return; }
    try {
      const r = await fetch(`https://api.github.com/users/${encodeURIComponent(u)}`);
      if (u !== user()) return;
      if (r.status === 200) msg('userMsg', t('userOk'), 'ok');
      else if (r.status === 404) msg('userMsg', t('userBad'), 'err');
      else $('userMsg').textContent = '';
    } catch { $('userMsg').textContent = ''; }
  }
  userInput.addEventListener('input', () => { clearTimeout(userTimer); userTimer = setTimeout(checkUser, 600); });
  repoInput.addEventListener('input', updateLinks);
  for (const [id] of LINKS) {
    $(id).addEventListener('click', e => { if (!user()) { e.preventDefault(); userInput.focus(); alert(t('needUser')); } });
  }
  $('createRepo').addEventListener('click', () => done(1));

  // ---------- helpers ----------
  const utf8 = s => new TextEncoder().encode(s);
  function bytesToB64(bytes) {
    let s = '';
    for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
    return btoa(s);
  }
  const binStrToBytes = s => Uint8Array.from(s, c => c.charCodeAt(0));
  const sha1 = async (...parts) => {
    const all = new Uint8Array(parts.reduce((n, p) => n + p.length, 0));
    let o = 0; for (const p of parts) { all.set(p, o); o += p.length; }
    return new Uint8Array(await crypto.subtle.digest('SHA-1', all));
  };
  const eq = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);
  // JKS uses the password as UTF-16BE bytes
  const utf16be = s => { const b = new Uint8Array(s.length * 2); for (let i = 0; i < s.length; i++) { b[2*i] = s.charCodeAt(i) >> 8; b[2*i+1] = s.charCodeAt(i) & 255; } return b; };

  async function copyText(text) {
    try { await navigator.clipboard.writeText(text); }
    catch {
      const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta);
      ta.select(); document.execCommand('copy'); ta.remove();
    }
  }
  function msg(id, text, cls) { const el = $(id); el.className = 'aapsb-msg ' + cls; el.textContent = text; }

  let secretValue = null;
  function setSecret(ksBytes, storePass, alias, keyPass) {
    const raw = [bytesToB64(ksBytes), storePass, alias, keyPass].join('|');
    secretValue = bytesToB64(utf8(raw));
    $('secretPreview').textContent = secretValue.slice(0, 16) + '…';
    done(2);
    $('s3wait').hidden = true;
    $('s3ready').hidden = false;
  }

  // ---------- step 2a: existing keystore ----------
  function parseJks(bytes) {
    const v = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    if (v.getUint32(0) !== 0xFEEDFEED) return null;
    let o = 12; const n = v.getUint32(8); const entries = [];
    const readUtf = () => { const len = v.getUint16(o); o += 2; const s = new TextDecoder().decode(bytes.subarray(o, o + len)); o += len; return s; };
    const skipCert = () => { if (v.getUint32(4) === 2) readUtf(); const len = v.getUint32(o); o += 4 + len; };
    for (let i = 0; i < n; i++) {
      const tag = v.getUint32(o); o += 4;
      const alias = readUtf(); o += 8;
      if (tag === 1) {
        const len = v.getUint32(o); o += 4;
        const key = bytes.subarray(o, o + len); o += len;
        const chain = v.getUint32(o); o += 4;
        for (let c = 0; c < chain; c++) skipCert();
        entries.push({ alias, key });
      } else { skipCert(); }
    }
    return { entries, body: bytes.subarray(0, o), digest: bytes.subarray(o, o + 20) };
  }

  // Sun JKS KeyProtector: verify key password without fully decrypting
  async function jksKeyPassOk(encKeyInfo, pass) {
    // EncryptedPrivateKeyInfo: SEQ { AlgId, OCTET STRING data }
    const asn = forge.asn1.fromDer(forge.util.createBuffer(String.fromCharCode.apply(null, encKeyInfo)));
    const data = binStrToBytes(asn.value[1].value);
    const salt = data.subarray(0, 20), enc = data.subarray(20, data.length - 20), check = data.subarray(data.length - 20);
    const pw = utf16be(pass);
    const plain = new Uint8Array(enc.length);
    let d = salt;
    for (let off = 0; off < enc.length; off += 20) {
      d = await sha1(pw, d);
      for (let j = 0; j < 20 && off + j < enc.length; j++) plain[off + j] = enc[off + j] ^ d[j];
    }
    return eq(await sha1(pw, plain), check);
  }

  let haveBytes = null, haveKind = null, haveJks = null;
  $('ksFile').addEventListener('change', async () => {
    const f = $('ksFile').files[0]; $('haveMsg').textContent = '';
    if (!f) return;
    haveBytes = new Uint8Array(await f.arrayBuffer());
    haveJks = null; haveKind = null;
    try { haveJks = parseJks(haveBytes); } catch { haveJks = null; }
    if (haveJks) {
      haveKind = 'jks';
      const sel = $('ksAliasSel');
      sel.innerHTML = '';
      haveJks.entries.forEach(e => sel.add(new Option(e.alias, e.alias)));
      if (haveJks.entries.length > 0) {
        sel.hidden = false; $('ksAlias').hidden = true; $('ksAlias').value = haveJks.entries[0].alias;
        sel.onchange = () => { $('ksAlias').value = sel.value; };
      }
    } else if (haveBytes[0] === 0x30) {
      haveKind = 'p12';
      $('ksAliasSel').hidden = true; $('ksAlias').hidden = false;
    } else {
      msg('haveMsg', t('errFormat'), 'err');
    }
  });
  $('samePass').addEventListener('change', () => { $('keyPassWrap').hidden = $('samePass').checked; });

  $('haveGo').addEventListener('click', async () => {
    const pass = $('ksPass').value, alias = $('ksAlias').value.trim();
    const keyPass = $('samePass').checked ? pass : $('keyPass').value;
    if (!haveBytes) return msg('haveMsg', t('errNoFile'), 'err');
    if (!haveKind) return msg('haveMsg', t('errFormat'), 'err');
    if (!pass || !alias || !keyPass) return msg('haveMsg', t('errEmpty'), 'err');
    if ([pass, alias, keyPass].some(s => s.includes('|'))) return msg('haveMsg', t('errPipe'), 'err');

    try {
      if (haveKind === 'jks') {
        const d = await sha1(utf16be(pass), utf8('Mighty Aphrodite'), haveJks.body);
        if (!eq(d, haveJks.digest)) return msg('haveMsg', t('errPass'), 'err');
        const entry = haveJks.entries.find(e => e.alias.toLowerCase() === alias.toLowerCase());
        if (!entry) return msg('haveMsg', t('errAlias', { aliases: haveJks.entries.map(e => e.alias).join(', ') }), 'err');
        if (!(await jksKeyPassOk(entry.key, keyPass))) return msg('haveMsg', t('errKeyPass'), 'err');
        setSecret(haveBytes, pass, entry.alias, keyPass);
        return msg('haveMsg', t('okHave'), 'ok');
      }
      // PKCS12
      let p12;
      try {
        const asn = forge.asn1.fromDer(forge.util.createBuffer(String.fromCharCode.apply(null, haveBytes)));
        p12 = forge.pkcs12.pkcs12FromAsn1(asn, pass);
      } catch (e) {
        if (/password|MAC/i.test(String(e && e.message))) return msg('haveMsg', t('errPass'), 'err');
        // Could not parse locally; let the build validate it
        setSecret(haveBytes, pass, alias, keyPass);
        return msg('haveMsg', t('okHaveUnchecked'), 'warn');
      }
      const names = [...new Set(p12.safeContents.flatMap(sc => sc.safeBags.flatMap(b => (b.attributes.friendlyName || []))))];
      if (names.length && !names.some(n => n.toLowerCase() === alias.toLowerCase())) {
        return msg('haveMsg', t('errAlias', { aliases: names.join(', ') }), 'err');
      }
      setSecret(haveBytes, pass, alias, keyPass);
      msg('haveMsg', t('okHave'), 'ok');
    } catch (e) {
      console.error(e);
      setSecret(haveBytes, pass, alias, keyPass);
      msg('haveMsg', t('okHaveUnchecked'), 'warn');
    }
  });

  // ---------- step 2b: new keystore ----------
  // Use the browser's cryptographic RNG for everything forge needs (salts, IVs, serial)
  forge.random.getBytesSync = n => String.fromCharCode.apply(null, crypto.getRandomValues(new Uint8Array(n)));
  forge.random.getBytes = (n, cb) => cb ? cb(null, forge.random.getBytesSync(n)) : forge.random.getBytesSync(n);
  let newKsBytes = null;
  $('newGo').addEventListener('click', async () => {
    const p1 = $('newPass').value, p2 = $('newPass2').value;
    if (p1.length < 8) return msg('newMsg', t('errShort'), 'err');
    if (p1 !== p2) return msg('newMsg', t('errMatch'), 'err');
    if (!/^[\x21-\x7e]+$/.test(p1) || p1.includes('|')) return msg('newMsg', t('errAscii'), 'err');
    $('newGo').disabled = true;
    msg('newMsg', t('working'), '');
    try {
      const kp = await crypto.subtle.generateKey(
        { name: 'RSASSA-PKCS1-v1_5', modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' },
        true, ['sign', 'verify']);
      const pkcs8 = new Uint8Array(await crypto.subtle.exportKey('pkcs8', kp.privateKey));
      const key = forge.pki.privateKeyFromAsn1(forge.asn1.fromDer(forge.util.createBuffer(String.fromCharCode.apply(null, pkcs8))));
      const cert = forge.pki.createCertificate();
      cert.publicKey = forge.pki.setRsaPublicKey(key.n, key.e);
      cert.serialNumber = '01' + forge.util.bytesToHex(forge.random.getBytesSync(8));
      cert.validity.notBefore = new Date();
      cert.validity.notAfter = new Date(); cert.validity.notAfter.setFullYear(cert.validity.notBefore.getFullYear() + 50);
      const subject = [{ name: 'commonName', value: 'AAPS' }];
      cert.setSubject(subject); cert.setIssuer(subject);
      cert.sign(key, forge.md.sha256.create());
      const asn = forge.pkcs12.toPkcs12Asn1(key, [cert], p1, { algorithm: '3des', friendlyName: 'key0', generateLocalKeyId: true });
      newKsBytes = binStrToBytes(forge.asn1.toDer(asn).getBytes());
      setSecret(newKsBytes, p1, 'key0', p1);
      $('backupBox').hidden = false;
      msg('newMsg', t('okNew'), 'ok');
    } catch (e) {
      console.error(e);
      msg('newMsg', String(e), 'err');
      $('newGo').disabled = false;
    }
  });
  $('downloadKs').addEventListener('click', () => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([newKsBytes], { type: 'application/octet-stream' }));
    a.download = 'aaps-keystore.jks';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  });

  // ---------- step 6: Google Drive access (GDRIVE_OAUTH2) ----------
  // The same Google OAuth client, scope and PKCE flow as the AAPS preparation page
  // (github.com/nightscout/aaps-ci-preparation), so the build workflow reads the value the same
  // way: base64(client_id|refresh_token). Google sends the browser to a loopback address where
  // nothing listens: the tab shows an error, but its address holds the answer. The user copies that
  // address here, and this page sends the code to Google's token endpoint, and nowhere else.
  // The PKCE verifier stays in this tab, so the code is useless to anything else that sees it.
  const GOOGLE_CLIENT_ID = '705061051276-5ssikkg2ag39l7hj9t63saq549n3s2n5.apps.googleusercontent.com';
  const GOOGLE_REDIRECT = 'http://127.0.0.1:47913/aaps-builder';
  const session = {
    get: k => { try { return sessionStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { sessionStorage.setItem(k, v); } catch {} }
  };
  const randomHex = n => [...crypto.getRandomValues(new Uint8Array(n))].map(b => b.toString(16).padStart(2, '0')).join('');
  const b64url = bytes => bytesToB64(bytes).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

  // The link is ready before the tap, so the browser opens it as a normal link and does not
  // block it as a pop-up.
  async function setGoogleLink(verifier, state) {
    const challenge = b64url(new Uint8Array(await crypto.subtle.digest('SHA-256', utf8(verifier))));
    const p = new URLSearchParams({
      client_id: GOOGLE_CLIENT_ID, redirect_uri: GOOGLE_REDIRECT, response_type: 'code',
      scope: 'https://www.googleapis.com/auth/drive.file', access_type: 'offline',
      // consent: Google sends a refresh token only when the user is asked, also after an earlier grant
      prompt: 'consent', code_challenge_method: 'S256', code_challenge: challenge, state
    });
    $('googleAuth').href = 'https://accounts.google.com/o/oauth2/v2/auth?' + p;
  }
  // A new attempt: new verifier and state
  function newGoogleAttempt() {
    const verifier = randomHex(32), state = randomHex(16);
    session.set('gVerifier', verifier);
    session.set('gState', state);
    return setGoogleLink(verifier, state);
  }
  // Keep the attempt of this tab if the page is reloaded while the user is in the Google tab
  if (session.get('gVerifier') && session.get('gState')) setGoogleLink(session.get('gVerifier'), session.get('gState'));
  else newGoogleAttempt();

  let gdriveValue = null;
  $('googleGo').addEventListener('click', async () => {
    const text = $('googleUrl').value.trim();
    if (!text) return msg('googleMsg', t('gNoUrl'), 'err');
    let params;
    try { params = new URL(text).searchParams; } catch { return msg('googleMsg', t('gNoCode'), 'err'); }
    if (params.get('error')) return msg('googleMsg', t('gDenied'), 'err');
    const code = params.get('code');
    if (!code) return msg('googleMsg', t('gNoCode'), 'err');
    if (params.get('state') !== session.get('gState')) return msg('googleMsg', t('gOldUrl'), 'err');
    $('googleGo').disabled = true;
    msg('googleMsg', t('gWorking'), '');
    try {
      const r = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          client_id: GOOGLE_CLIENT_ID, code, code_verifier: session.get('gVerifier'),
          grant_type: 'authorization_code', redirect_uri: GOOGLE_REDIRECT
        })
      });
      const data = await r.json().catch(() => ({}));
      if (!r.ok) {
        msg('googleMsg', t('gFailed', { error: data.error || r.status }), 'err');
        await newGoogleAttempt();
        return;
      }
      if (!data.refresh_token) { msg('googleMsg', t('gNoRefresh'), 'err'); await newGoogleAttempt(); return; }
      gdriveValue = bytesToB64(utf8(GOOGLE_CLIENT_ID + '|' + data.refresh_token));
      $('gdrivePreview').textContent = gdriveValue.slice(0, 16) + '…';
      $('gdriveReady').hidden = false;
      $('googleUrl').value = '';
      msg('googleMsg', t('gOk'), 'ok');
      done(6);
      await newGoogleAttempt();      // the code is used up; a new tap starts a new attempt
    } catch (e) {
      console.error(e);
      msg('googleMsg', t('gFailed', { error: String(e) }), 'err');
    } finally {
      $('googleGo').disabled = false;
    }
  });

  // ---------- step 3 / 6: copy secret names and values ----------
  document.querySelectorAll('[data-aapsb-copy]').forEach(b => b.addEventListener('click', async () => {
    const kind = b.dataset.aapsbCopy;
    const values = { name: 'KEYSTORE_SET', gdrive: 'GDRIVE_OAUTH2', secret: secretValue, gdriveValue };
    await copyText(values[kind]);
    if (kind === 'secret') msg('copyMsg', t('copied'), 'ok');
    if (kind === 'name') msg('copyMsg', t('copiedName'), 'ok');
    if (kind === 'gdriveValue') msg('gdriveCopyMsg', t('gCopied'), 'ok');
    const label = b.textContent;
    b.textContent = t('copiedShort');
    setTimeout(() => { b.textContent = label; }, 2000);
  }));

  updateLinks();
  checkUser();
})();
</script>
