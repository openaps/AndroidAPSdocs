(aaps-builder-setup)=

# AAPS Builder 設定頁面

在 GitHub 建置你自己的 **AAPS** App。不需安裝任何程式，不用終端機。第一次約需 10 分鐘，之後每次建置都由你自行啟動。

更詳細的步驟與螢幕截圖，請參閱 [使用 AAPS Builder 透過瀏覽器建置](#aaps-builder)。請在另一個分頁保持該頁面開啟。

下方按鈕會在新的 Chrome 分頁中開啟 GitHub。要回到此頁，點選 Chrome 位於網址列旁的分頁按鈕（帶有數字的方形），然後選擇此頁面。

(aaps-builder-setup-step1)=

## 步驟 1 – 建立你的私人建置儲存庫

這會在你的 GitHub 帳號下建立一個空的私人儲存庫。只有你能看到它，以及由它建置的應用程式。你**不**需要對 AndroidAPS 進行派生：每次建置都會從官方的 AndroidAPS 儲存庫下載 AAPS 原始碼。

<label class="aapsb-label" for="aapsb-user">你的 GitHub 使用者名稱</label>
<input class="aapsb-input" type="text" id="aapsb-user" autocomplete="username" spellcheck="false" placeholder="my-github-name" />
<span class="aapsb-msg" id="aapsb-userMsg"></span>

請先在此瀏覽器登入 github.com（沒有帳號？免費建立一個）。然後回到這裡。請使用你的使用者名稱（顯示於 GitHub 個人檔案），不要用電子郵件；此頁會向 GitHub 查詢該使用者名稱是否存在。

<label class="aapsb-label" for="aapsb-repo">你的儲存庫名稱</label>
<input class="aapsb-input" type="text" id="aapsb-repo" spellcheck="false" placeholder="my-aaps" />

請沿用建議名稱。已用其他名稱建立過儲存庫？請在此輸入完全相同的名稱。

你的儲存庫：<code class="aapsb-repoUrl"></code>

已自行建立空的私人儲存庫？請不要點擊下方按鈕；在上方輸入其完整名稱，然後前往步驟 2。

<a class="aapsb-btn" id="aapsb-createRepo" target="_blank" rel="noopener">建立我的私人儲存庫</a>

在開啟的 GitHub 頁面中，名稱已填入且已選取 Private。請勿變更任何設定，也不要新增 README 或其他檔案。

1. 點選綠色的 Create repository 按鈕。
2. 回到此頁進行步驟 2。

(aaps-builder-setup-step2)=

## 步驟 2 – 新增建置工作流程

建置工作流程是告訴 GitHub 如何建置 AAPS 的檔案。該檔案來自 AAPS 文件：<a id="aapsb-viewWorkflow" href="../_static/aaps-builder/aaps-builder-build.yml" target="_blank" rel="noopener">檢視工作流程</a>。

1. <a class="aapsb-btn" id="aapsb-addWorkflow" target="_blank" rel="noopener">將工作流程加入我的儲存庫</a> <span class="aapsb-msg" id="aapsb-workflowMsg"></span>

   開啟：<code class="aapsb-repoUrl"></code>，新檔案 `.github/workflows/build.yml`，已經填好。
2. 確認頂端的檔名是 `.github/workflows/build.yml`。請勿更動文字。
3. 點選 **Commit changes…**，然後在開啟的視窗中再次點選 **Commit changes**。

```{admonition} Updating the workflow, or the text area is empty?
:class: dropdown

1. <button class="aapsb-btn aapsb-secondary" type="button" id="aapsb-copyWorkflow">複製工作流程</button> <span class="aapsb-msg" id="aapsb-copyWorkflowMsg"></span>
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openWorkflowFile" target="_blank" rel="noopener">開啟我的工作流程檔案</a>

   若是第一次新增工作流程，請改用上方的按鈕。
3. 以複製的工作流程取代全部文字（在手機上長按），然後連續按兩次 **Commit changes…**。
```

(aaps-builder-setup-step3)=

## 步驟 3 – 你的簽章金鑰

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
(aaps-builder-setup-step4)=
## 步驟 4 – 將金鑰提供給你的儲存庫
<span id="aapsb-s4wait">請先完成步驟 3。</span>

<div id="aapsb-s4ready" hidden>
  1. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets" target="_blank" rel="noopener">開啟 Secrets 頁面</a> 開啟：<code class="aapsb-repoUrl"></code> 出現「找不到頁面」（404）？請先確認你已在此瀏覽器登入 github.com：未登入時，GitHub 對私人儲存庫會顯示 404。否則就是你在步驟 1 輸入的使用者名稱或儲存庫名稱與實際的儲存庫不相符：請到 github.com 檢查，並在步驟 1 重新輸入正確資訊。 2. 點選「複製名稱」，然後將它貼到較小的「Name」欄位中：`KEYSTORE_SET` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="name">複製名稱</button> 3. 點選「複製機密」，然後把長長的代碼貼到較大的「Secret」欄位中：<code id="aapsb-secretPreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="secret">複製機密</button> <span class="aapsb-msg" id="aapsb-copyMsg"></span> 這個機密是一段非常長的代碼（數千個字元），不是單字 KEYSTORE_SET。先複製並貼上名稱，再貼上那段長代碼。 4. 點選「Add secret」。完成。這一步之後就不需要再做了。
</div>
(aaps-builder-setup-step5)=
## 步驟 5 – 建置應用程式

1. <a class="aapsb-btn" id="aapsb-openActions" target="_blank" rel="noopener">開啟建置頁面</a>

   開啟：<code class="aapsb-repoUrl"></code>

   出現「找不到頁面」（404）？請先確認你已在此瀏覽器登入 github.com：未登入時，GitHub 對私人儲存庫會顯示 404。否則就是你在步驟 1 輸入的使用者名稱或儲存庫名稱與實際的儲存庫不相符：請到 github.com 檢查，並在步驟 1 重新輸入正確資訊。 是否改由 GitHub App 開啟？點選「RUN WORKFLOW」，確認版本與變體，然後再點選一次「RUN WORKFLOW」。如果 App 仍顯示「Nothing to see here」，請下拉清單以查看你的建置。
2. 若系統提示，請點選綠色按鈕以啟用工作流程。
3. 點選「Run workflow」，再點選綠色的「Run workflow」按鈕。 「latest」會建置最新的 AAPS 版本。
4. 請等待約 15–30 分鐘。綠色勾勾代表已完成。
想在建置完成時收到電子郵件通知嗎？ GitHub 只會在建置失敗時寄送郵件給你。若也想在成功時收到通知：前往 github.com，開啟你的個人頭像 → Settings → Notifications → System → Actions，並取消勾選「Only notify for failed workflows」。

```{admonition} No "Build AAPS" / "Run workflow" button?
:class: warning

1. 開啟你的儲存庫，確認檔案 `.github/workflows/build.yml` 是否存在。若缺少該檔或檔名不同，請再做一次[步驟 2](#aaps-builder-setup-step2)。
2. 開啟 Actions 分頁。若顯示工作流程已停用，請點選綠色按鈕以啟用。接著在清單中點選「Build AAPS」。
```

(aaps-builder-setup-step6)=

## 步驟 6－在你的手機上安裝

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

有新的 AAPS 版本？先備份你的設定，然後依照第 5 步進行建置。你的儲存庫不會自行進行任何建置。

(aaps-builder-setup-step7)=

## 步驟 7－選用：把 App 存到 Google Drive

想讓 APK 出現在你的 Google Drive（永久保存）嗎？再新增一個 Secret。

1. 依 AAPS 文件的說明取得 GDRIVE_OAUTH2 值（會在電腦上使用官方的 AAPS 準備頁面）：[將建置儲存到 Google Drive](#aaps-builder-google-drive)。
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets2" target="_blank" rel="noopener">開啟 Secrets 頁面</a>

   將開啟：<code class="aapsb-repoUrl"></code>

   出現「找不到頁面」（404）嗎？請先確認你已在此瀏覽器登入 github.com：未登入時，GitHub 對私人儲存庫會顯示 404。否則就是你在步驟 1 輸入的使用者名稱或儲存庫名稱與實際的儲存庫不相符：請到 github.com 檢查，並在步驟 1 重新輸入正確資訊。
3. 點選「Copy name」，然後把它貼到較小的「Name」欄位：`GDRIVE_OAUTH2` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="gdrive">Copy name</button>
4. 將你的 GDRIVE_OAUTH2 值貼到較大的「Secret」欄位，然後點選「Add secret」。

下次建置時，APK 也會儲存在 Google Drive 的資料夾 AAPS/&lt;version&gt; 中。

如果 6 個月未進行建置，或變更了你的 Google 密碼，Google 會停止存取權。之後建置會提示此狀況：請重做此步驟。

----

本頁所有操作都在你的瀏覽器中執行。你的金鑰與密碼絕不會被送往任何地方，除非是你自行貼上的目的地。僅會將你的 GitHub 使用者名稱送到 GitHub，以檢查該帳號是否存在。此頁面與工作流程為 AAPS 文件的一部分，基於 AAPS Builder（AGPL-3.0）。

<div id="aapsb-msgs" hidden>

- <span data-aapsb-msg="copied">已複製長碼：請貼到較大的「Secret」欄位，然後點選「Add secret」。</span>
- <span data-aapsb-msg="copiedName">已複製名稱：請貼到較小的「Name」欄位。</span>
- <span data-aapsb-msg="userOk">✓ 找到 GitHub 使用者。</span>
- <span data-aapsb-msg="userBad">✗ 沒有此名稱的 GitHub 使用者。請使用你的使用者名稱（顯示於 GitHub 個人檔案），不要使用電子郵件。</span>
- <span data-aapsb-msg="copiedShort">已複製 ✓</span>
- <span data-aapsb-msg="needUser">請先在步驟 1 輸入你的 GitHub 使用者名稱。</span>
- <span data-aapsb-msg="workflowCopied">已複製工作流程（版本 {v}）。請貼到 GitHub。</span>
- <span data-aapsb-msg="workflowReady">工作流程版本 {v} 已就緒。</span>
- <span data-aapsb-msg="workflowErr">無法讀取工作流程檔案。重新載入此頁面後再試一次。</span>
- <span data-aapsb-msg="errPipe">密碼與別名不可包含字元 |</span>
- <span data-aapsb-msg="errNoFile">請選擇你的金鑰庫檔案。</span>
- <span data-aapsb-msg="errEmpty">請輸入密碼與別名。</span>
- <span data-aapsb-msg="errPass">金鑰庫密碼錯誤。</span>
- <span data-aapsb-msg="errKeyPass">金鑰密碼錯誤。</span>
- <span data-aapsb-msg="errAlias">在金鑰庫中找不到該別名。可用：{aliases}</span>
- <span data-aapsb-msg="errFormat">這看起來不像是金鑰庫檔案。</span>
- <span data-aapsb-msg="okHave">金鑰庫正常！請繼續進行步驟 4。</span>
- <span data-aapsb-msg="okHaveUnchecked">已讀取金鑰庫。在建置時會檢查該密碼。請繼續進行步驟 4。</span>
- <span data-aapsb-msg="errShort">密碼長度至少需 8 個字元。</span>
- <span data-aapsb-msg="errAscii">僅可使用 a–z、A–Z、0–9 與 ! 等符號 ? # － 不可有空白、重音字母，亦不可包含 |</span>
- <span data-aapsb-msg="errMatch">兩次輸入的密碼不相符。</span>
- <span data-aapsb-msg="working">正在建立金鑰…</span>
- <span data-aapsb-msg="okNew">已建立金鑰。下載下方的備份後，請繼續進行步驟 4。</span>

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
// AAPS Builder setup page logic. Walks the user through creating an empty private GitHub
// repository, adding the build workflow (_static/aaps-builder/aaps-builder-build.yml), and
// creating the KEYSTORE_SET secret. The repository then builds AAPS from the official source,
// github.com/nightscout/AndroidAPS, with GitHub Actions.
//
// The keystore and passwords never leave this browser. The only requests are reading the workflow
// file and asking GitHub's public API whether the typed username exists (only the name is sent).
// The page's Content-Security-Policy (set in docs/shared.conf.py) allows only the AAPS
// documentation site itself and https://api.github.com.
//
// Based on AAPS Builder by the AAPS Builder authors (github.com/dio99/aaps-builder), GNU Affero
// General Public License v3.0 (AGPL-3.0). Modified for the AAPS documentation: no template
// repository, workflow and page maintained in github.com/openaps/AndroidAPSdocs, texts in the
// page so they can be translated.
// Vendor library: _static/aaps-builder/aaps-builder.forge.min.js = node-forge 1.3.1
// (BSD-3-Clause or GPL-2.0), https://github.com/digitalbazaar/forge. Pinned: it is the
// unmodified dist/forge.min.js of the npm package node-forge@1.3.1, checked against the npm
// registry integrity hash. SHA-256 (verify after any change, update only after review):
// dc67fd132427ad96c9666c844b39565413c40ddb1f2d063c53512fbf6d387dfd
(() => {
  const REPO_NAME = 'my-aaps';
  const WORKFLOW_PATH = '.github/workflows/build.yml';       // where it goes in the user's repository

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

  // Step 2: GitHub's new-file page, prefilled with the file name and the workflow text (value=).
  // The workflow is short (it calls the reviewed build steps in the AAPS documentation repository).
  let workflowText = null;
  const newFilePath = () => '/new/main?filename=' + encodeURIComponent(WORKFLOW_PATH) +
    (workflowText ? '&value=' + encodeURIComponent(workflowText) : '');

  const LINKS = [
    ['addWorkflow', newFilePath],
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
    // github.com/new with documented prefill parameters: an EMPTY private repository, no template.
    const p = new URLSearchParams({ owner: '@me', name: repo(), visibility: 'private' });
    $('createRepo').href = 'https://github.com/new?' + p;
    document.querySelectorAll('.aapsb-repoUrl').forEach(el => { el.textContent = `github.com/${u || '…'}/${repo()}`; });
    const base = `https://github.com/${encodeURIComponent(u)}/${encodeURIComponent(repo())}`;
    for (const [id, path] of LINKS) $(id).href = u ? base + (typeof path === 'function' ? path() : path) : '#aaps-builder-setup-step1';
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

  // ---------- step 2: build workflow (read from the AAPS documentation site only) ----------
  const WORKFLOW_URL = $('viewWorkflow').href;               // _static/aaps-builder/aaps-builder-build.yml
  async function loadWorkflow() {
    const r = await fetch(WORKFLOW_URL, { cache: 'no-store' });
    if (!r.ok) throw new Error(r.status);
    const text = (await r.text()).replace(/\r\n/g, '\n');
    const v = (text.match(/^# AAPS Builder build workflow, version (\S+)/m) || [])[1];
    if (!v) throw new Error('not the workflow');
    return { text, v };
  }
  loadWorkflow().then(({ text, v }) => {
    workflowText = text;
    msg('workflowMsg', t('workflowReady', { v }), 'ok');
    updateLinks();
  }).catch(e => { console.error(e); msg('workflowMsg', t('workflowErr'), 'err'); });
  $('addWorkflow').addEventListener('click', e => {
    if (!workflowText) { e.preventDefault(); msg('workflowMsg', t('workflowErr'), 'err'); return; }
    if (user()) done(2);
  });
  $('copyWorkflow').addEventListener('click', async () => {
    try {
      const { text, v } = await loadWorkflow();
      await copyText(text);
      msg('copyWorkflowMsg', t('workflowCopied', { v }), 'ok');
    } catch (e) {
      console.error(e);
      msg('copyWorkflowMsg', t('workflowErr'), 'err');
    }
  });

  let secretValue = null;
  function setSecret(ksBytes, storePass, alias, keyPass) {
    const raw = [bytesToB64(ksBytes), storePass, alias, keyPass].join('|');
    secretValue = bytesToB64(utf8(raw));
    $('secretPreview').textContent = secretValue.slice(0, 16) + '…';
    done(3);
    $('s4wait').hidden = true;
    $('s4ready').hidden = false;
  }

  // ---------- step 3a: existing keystore ----------
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

  // ---------- step 3b: new keystore ----------
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

  // ---------- step 4 / 7: copy secret names and value ----------
  document.querySelectorAll('[data-aapsb-copy]').forEach(b => b.addEventListener('click', async () => {
    const fixed = { name: 'KEYSTORE_SET', gdrive: 'GDRIVE_OAUTH2' };
    await copyText(fixed[b.dataset.aapsbCopy] ?? secretValue);
    if (b.dataset.aapsbCopy === 'secret') msg('copyMsg', t('copied'), 'ok');
    if (b.dataset.aapsbCopy === 'name') msg('copyMsg', t('copiedName'), 'ok');
    const label = b.textContent;
    b.textContent = t('copiedShort');
    setTimeout(() => { b.textContent = label; }, 2000);
  }));

  updateLinks();
  checkUser();
})();
</script>
