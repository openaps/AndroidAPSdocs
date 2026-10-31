(aaps-builder-setup)=

# Страница за настройка на AAPS Builder

Компилирайте собствено приложение **AAPS** в GitHub. Без програми за инсталиране, без терминал. Първия път отнема около 10 мин, след това сами стартирате всяка компилация.

Всяка стъпка е обяснена по-подробно, с екранни снимки, в [Компилиране в браузъра с AAPS Builder](#aaps-builder). Дръжте тази страница отворена в друг раздел.

Бутоните по-долу отварят GitHub в нов раздел на Chrome. За да се върнете към тази страница, докоснете бутона за раздели до адресната лента на Chrome (квадратът с число) и изберете тази страница.

(aaps-builder-setup-step1)=

## Стъпка 1 – Създайте своето частно хранилище за компилиране

Това създава празно частно хранилище във вашия профил в GitHub. Само вие можете да виждате него и приложенията, които то компилира. **Не** е нужно да правите fork на AndroidAPS: изходният код на AAPS се изтегля от официалното хранилище на AndroidAPS при всяка компилация.

<label class="aapsb-label" for="aapsb-user">Your GitHub username</label>
<input class="aapsb-input" type="text" id="aapsb-user" autocomplete="username" spellcheck="false" placeholder="my-github-name" />
<span class="aapsb-msg" id="aapsb-userMsg"></span>

Първо влезте в github.com в този браузър (нямате профил? създайте си безплатно). След това се върнете тук. Използвайте потребителското си име (показано във вашия профил в GitHub), а не имейла си: страницата пита GitHub дали това потребителско име съществува.

<label class="aapsb-label" for="aapsb-repo">Name of your repository</label>
<input class="aapsb-input" type="text" id="aapsb-repo" spellcheck="false" placeholder="my-aaps" />

Оставете предложението. Вече сте създали хранилището си с друго име? Въведете тук точно това име.

Your repository:<code class="aapsb-repoUrl"></code>

Вече сами сте създали празно частно хранилище? Не докосвайте бутона по-долу: въведете точното му име по-горе и преминете към [стъпка 2](#aaps-builder-setup-step2).

<a class="aapsb-btn" id="aapsb-createRepo" target="_blank" rel="noopener">Create my private repository</a>

На страницата на GitHub, която се отваря, името е попълнено и **Private** е избрано. Не променяйте нищо и не добавяйте README или други файлове.

1. Натиснете зеления бутон **Create repository**.
2. Върнете се на тази страница за стъпка 2.

(aaps-builder-setup-step2)=

## Стъпка 2 – Добавете работния процес за компилиране

Работният процес за компилиране (build workflow) е файлът, който казва на GitHub как да компилира AAPS. Той идва от документацията на AAPS: <a id="aapsb-viewWorkflow" href="../_static/aaps-builder/aaps-builder-build.yml" target="_blank" rel="noopener">вижте работния процес</a>.

1. <a class="aapsb-btn" id="aapsb-addWorkflow" target="_blank" rel="noopener">Add the workflow to my repository</a> <span class="aapsb-msg" id="aapsb-workflowMsg"></span>

   Отваря: <code class="aapsb-repoUrl"></code>, нов файл `.github/workflows/build.yml`, вече попълнен.
2. Проверете дали името на файла горе е `.github/workflows/build.yml`. Не променяйте текста.
3. Натиснете **Commit changes…**, след това отново **Commit changes** в прозореца, който се отваря.

```{admonition} Updating the workflow, or the text area is empty?
:class: dropdown

1. <button class="aapsb-btn aapsb-secondary" type="button" id="aapsb-copyWorkflow">Copy workflow</button> <span class="aapsb-msg" id="aapsb-copyWorkflowMsg"></span>
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openWorkflowFile" target="_blank" rel="noopener">Open my workflow file</a>

   Ако добавяте работния процес за първи път, използвайте бутона по-горе.
3. Заменете целия текст с копирания работен процес (с продължително натискане на телефон), след това натиснете **Commit changes…** два пъти.
```

(aaps-builder-setup-step3)=

## Стъпка 3 – Вашият ключ за подписване

Приложението трябва да бъде подписано с ваш собствен ключ. Винаги използвайте същия ключ, иначе за актуализиране ще трябва да деинсталирате AAPS (и да загубите настройките му). Изберете един от двата раздела.

`````{tab-set}

````{tab-item} I already have a keystore
Например от Android Studio (.jks).

<label class="aapsb-label" for="aapsb-ksFile">Keystore file</label>
<input type="file" id="aapsb-ksFile" accept=".jks,.keystore,.p12,.pfx,application/octet-stream">

<label class="aapsb-label" for="aapsb-ksPass">Keystore password</label>
<input class="aapsb-input" type="password" id="aapsb-ksPass" autocomplete="off">

<label class="aapsb-label" for="aapsb-ksAlias">Key alias</label>
<select class="aapsb-input" id="aapsb-ksAliasSel" hidden></select>
<input class="aapsb-input" type="text" id="aapsb-ksAlias" autocomplete="off" spellcheck="false" placeholder="key0">

<label class="aapsb-check"><input type="checkbox" id="aapsb-samePass" checked> Key password is the same as the keystore password</label>

<div id="aapsb-keyPassWrap" hidden>

<label class="aapsb-label" for="aapsb-keyPass">Key password</label>
<input class="aapsb-input" type="password" id="aapsb-keyPass" autocomplete="off">

</div>

<button class="aapsb-btn" type="button" id="aapsb-haveGo">Check and continue</button> <span class="aapsb-msg" id="aapsb-haveMsg"></span>
````

````{tab-item} Create a new key
Компилирате AAPS за първи път? Тук във вашия браузър се създава нов ключ. Нищо не се изпраща никъде.

<label class="aapsb-label" for="aapsb-newPass">Choose a password (at least 8 characters, no accented letters)</label>
<input class="aapsb-input" type="password" id="aapsb-newPass" autocomplete="new-password">

<label class="aapsb-label" for="aapsb-newPass2">Repeat the password</label>
<input class="aapsb-input" type="password" id="aapsb-newPass2" autocomplete="new-password">

<button class="aapsb-btn" type="button" id="aapsb-newGo">Create key</button> <span class="aapsb-msg" id="aapsb-newMsg"></span>

<div class="aapsb-box" id="aapsb-backupBox" hidden>

**Запазете резервно копие на ключа си!**

Изтеглете файла. Пазете тези три неща заедно, на сигурно място извън телефона (например във вашето собствено облачно пространство):

- файла `aaps-keystore.jks`
- вашата парола
- псевдонима (alias) на ключа: **`key0`**

И трите ще ви трябват, ако някога компилирате AAPS по друг начин, например с Android Studio.

<button class="aapsb-btn" type="button" id="aapsb-downloadKs">Download backup (aaps-keystore.jks)</button>

</div>
````

`````
(aaps-builder-setup-step4)=
## Стъпка 4 – Дайте ключа на вашето хранилище
<span id="aapsb-s4wait">Първо завършете стъпка 3.</span>

<div id="aapsb-s4ready" hidden>
  1. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets" target="_blank" rel="noopener">Open the secrets page</a> Отваря: <code class="aapsb-repoUrl"></code> Получавате „Page not found“ (404)? Първо проверете дали сте влезли в github.com в този браузър: GitHub показва 404 за частни хранилища, когато не сте влезли. В противен случай потребителското име или името на хранилището в стъпка 1 не съвпада с вашето хранилище: проверете ги в github.com и ги въведете в стъпка 1. 2. Докоснете „Copy name“, след това поставете името в малкото поле „Name“: `KEYSTORE_SET` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="name">Copy name</button> 3. Докоснете „Copy secret“, след това поставете дългия код в голямото поле „Secret“: <code id="aapsb-secretPreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="secret">Copy secret</button> <span class="aapsb-msg" id="aapsb-copyMsg"></span> Секретът е много дълъг код (хиляди знаци), а НЕ думата KEYSTORE_SET. Първо копирайте и поставете името, след това дългия код. 4. Докоснете „Add secret“. Готово – никога повече не е нужно да правите това.
</div>
(aaps-builder-setup-step5)=
## Стъпка 5 – Компилирайте приложението

1. <a class="aapsb-btn" id="aapsb-openActions" target="_blank" rel="noopener">Open the build page</a>

   Отваря: <code class="aapsb-repoUrl"></code>

   Получавате „Page not found“ (404)? Първо проверете дали сте влезли в github.com в този браузър: GitHub показва 404 за частни хранилища, когато не сте влезли. В противен случай потребителското име или името на хранилището в стъпка 1 не съвпада с вашето хранилище: проверете ги в github.com и ги въведете в стъпка 1. Вместо това се отвори приложението GitHub? Докоснете „RUN WORKFLOW“, проверете версията и варианта и докоснете отново „RUN WORKFLOW“. Ако приложението все още показва „Nothing to see here“, дръпнете списъка надолу, за да видите компилацията си.
2. Ако бъдете попитани, натиснете зеления бутон, за да разрешите работните процеси (workflows).
3. Натиснете „Run workflow“, след това зеления бутон „Run workflow“. „latest“ компилира най-новата версия на AAPS. ***съвет:*** *можете да компилирате друга версия, като въведете името на нейния [таг](https://github.com/nightscout/AndroidAPS/tags) вместо „latest“*
4. Изчакайте около 15–30 мин. Зелена отметка означава, че компилацията е готова.
Искате имейл, когато компилацията е готова? GitHub ви изпраща имейл само когато компилацията е неуспешна. За да получавате имейл и при успех: в github.com отворете профилната си снимка → Settings → Notifications → System → Actions и махнете отметката от „Only notify for failed workflows“.

```{admonition} No "Build AAPS" / "Run workflow" button?
:class: warning

1. Отворете хранилището си и проверете дали файлът `.github/workflows/build.yml` е там. Ако липсва или има друго име, направете [стъпка 2](#aaps-builder-setup-step2) отново.
2. Отворете раздела Actions. Ако пише, че работните процеси са изключени, натиснете зеления бутон, за да ги разрешите. След това натиснете „Build AAPS“ в списъка.
```

(aaps-builder-setup-step6)=

## Стъпка 6 – Инсталиране на телефона

```{admonition} Before every update: back up your settings!
:class: warning

1. В AAPS: Поддръжка → Експорт настройки. (Правете това редовно във всеки случай, например след промяна на профила или веднъж месечно.)
2. Копирайте експортирания файл ИЗВЪН телефона, например в Google Drive или Dropbox. Резервно копие, което е само на телефона, се губи заедно с телефона.
3. Пазете там и APK файловете, и няколко по-стари експорта. Тогава винаги можете да се върнете назад.

[Как се експортират настройките](#ExportImportSettings-Settings-Export) · [Често задавани въпроси за AAPS: как да организирате резервните копия](#FAQ-organize-backups)
```

1. Отворете тази страница на телефона си, в уеб браузъра (Chrome). Влезте в github.com, ако бъдете помолени.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openRuns" target="_blank" rel="noopener">Open my builds</a>

   Вместо това се отвори приложението GitHub? То не може да изтегля компилации. В приложението отворете най-новата компилация и докоснете „Artifacts ↗“ или докоснете иконата за споделяне и изберете Chrome (или „Copy link“, след това поставете връзката в адресната лента на Chrome). Продължете в Chrome.

   Получавате „Page not found“ (404)? Първо проверете дали сте влезли в github.com в този браузър: GitHub показва 404 за частни хранилища, когато не сте влезли. В противен случай потребителското име или името на хранилището в стъпка 1 не съвпада с вашето хранилище: проверете ги в github.com и ги въведете в стъпка 1.

   За да спрете отварянето на връзки към GitHub в приложението: Android Настройки (Settings) → Приложения (Apps) → GitHub → Отваряне по подразбиране (Open by default) → изключете „Отваряне на поддържаните връзки“ (Open supported links).
3. Докоснете най-новата компилация със зелена отметка ✅.
4. Превъртете надолу до обобщението на компилацията и докоснете голямата връзка „📱 Download AAPS …“ (или превъртете по-надолу до „Artifacts“ и докоснете aaps-….apk). Превъртайте с пръст върху текста, а не върху диаграмата със стъпките на компилацията.
5. Когато изтеглянето приключи, докоснете файла и изберете Инсталиране (Install). Ако бъдете попитани, разрешете инсталирането на приложения от този източник.
6. aaps-wear-….apk е за смарт часовник. Пропуснете го, ако не използвате смарт часовник.

APK файлът не се показва под „Code“ във вашето хранилище, а само на страницата на компилацията. Той се пази 14 дни.

Нова версия на AAPS? Направете резервно копие на настройките си, след това я компилирайте със [стъпка 5](#aaps-builder-setup-step5). Вашето хранилище никога не компилира нищо само.

(aaps-builder-setup-step7)=

## Стъпка 7 – По избор: получаване на приложението в Google Drive

Искате APK файлът да се появява във вашия Google Drive (където се пази завинаги)? Добавете още един секрет.

1. Вземете стойност за GDRIVE_OAUTH2, както е обяснено в документацията на AAPS (използва се официалната подготвителна страница на AAPS, на компютър): [Запазване на компилациите в Google Drive](#aaps-builder-google-drive).
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets2" target="_blank" rel="noopener">Open the secrets page</a>

   Отваря:<code class="aapsb-repoUrl"></code>

   Получавате „Page not found“ (404)? Първо проверете дали сте влезли в github.com в този браузър: GitHub показва 404 за частни хранилища, когато не сте влезли. В противен случай потребителското име или името на хранилището в стъпка 1 не съвпада с вашето хранилище: проверете ги в github.com и ги въведете в стъпка 1.
3. Докоснете „Copy name“, след това поставете името в малкото поле „Name“: `GDRIVE_OAUTH2` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="gdrive">Copy name</button>
4. Поставете стойността на GDRIVE_OAUTH2 в голямото поле „Secret“, след това докоснете „Add secret“.

От следващата компилация APK файловете се запазват и в Google Drive, в папката AAPS/&lt;version&gt;.

Ако не компилирате 6 месеца или смените паролата си за Google, Google спира достъпа. Тогава компилацията ще ви каже това: направете тази стъпка отново.

----

Всичко на тази страница работи във вашия браузър. Вашият ключ и паролите никога не се изпращат никъде, освен там, където сами ги поставите. Към GitHub се изпраща само вашето потребителско име в GitHub, за да се провери дали съществува. Страницата и работният процес са част от документацията на AAPS и се основават на AAPS Builder (AGPL-3.0).

<div id="aapsb-msgs" hidden>

- <span data-aapsb-msg="copied">Long code copied: paste it in the big "Secret" box, then tap "Add secret".</span>
- <span data-aapsb-msg="copiedName">Name copied: paste it in the small "Name" field.</span>
- <span data-aapsb-msg="userOk">✓ GitHub user found.</span>
- <span data-aapsb-msg="userBad">✗ No GitHub user with this name. Use your username (shown in your GitHub profile), not your e-mail.</span>
- <span data-aapsb-msg="copiedShort">Copied ✓</span>
- <span data-aapsb-msg="needUser">Enter your GitHub username in step 1 first.</span>
- <span data-aapsb-msg="workflowCopied">Workflow copied (version {v}). Paste it in GitHub.</span>
- <span data-aapsb-msg="workflowReady">Workflow version {v} is ready.</span>
- <span data-aapsb-msg="workflowErr">Could not read the workflow file. Reload this page and try again.</span>
- <span data-aapsb-msg="errPipe">Passwords and alias cannot contain the character |</span>
- <span data-aapsb-msg="errNoFile">Choose your keystore file.</span>
- <span data-aapsb-msg="errEmpty">Fill in password and alias.</span>
- <span data-aapsb-msg="errPass">Wrong keystore password.</span>
- <span data-aapsb-msg="errKeyPass">Wrong key password.</span>
- <span data-aapsb-msg="errAlias">Alias not found in the keystore. Available: {aliases}</span>
- <span data-aapsb-msg="errFormat">This does not look like a keystore file.</span>
- <span data-aapsb-msg="okHave">Keystore OK! Continue with step 4.</span>
- <span data-aapsb-msg="okHaveUnchecked">Keystore read. The password will be checked when you build. Continue with step 4.</span>
- <span data-aapsb-msg="errShort">The password must be at least 8 characters.</span>
- <span data-aapsb-msg="errAscii">Use only a–z, A–Z, 0–9 and symbols such as ! ? # – no spaces, no accented letters and not |</span>
- <span data-aapsb-msg="errMatch">The passwords do not match.</span>
- <span data-aapsb-msg="working">Creating key…</span>
- <span data-aapsb-msg="okNew">Key created. Download the backup below, then continue with step 4.</span>

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
