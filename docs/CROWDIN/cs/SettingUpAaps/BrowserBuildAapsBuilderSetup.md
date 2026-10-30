(aaps-builder-setup)=

# Stránka nastavení AAPS Builder

Sestavte si vlastní aplikaci **AAPS** na GitHubu. Nic neinstalujete, žádný terminál. Poprvé to trvá asi 10 minut, potom každé sestavení spouštíte sami.

Každý krok je podrobněji vysvětlen, včetně snímků obrazovky, na stránce [Sestavení v prohlížeči s AAPS Builder](#aaps-builder). Nechte tu stránku otevřenou na jiné kartě.

Tlačítka níže otevírají GitHub na nové kartě Chromu. Pro návrat na tuto stránku klepněte na tlačítko karet vedle adresního řádku Chromu (čtverec s číslem) a zvolte tuto stránku.

(aaps-builder-setup-step1)=

## Krok 1 – Vytvořte si soukromý repozitář pro sestavení

V tomto kroku se ve vašem účtu na GitHubu vytvoří prázdný soukromý repozitář. Jen vy vidíte jeho obsah a aplikace, které v něm vzniknou. **Nemusíte** vytvářet fork AndroidAPS: zdrojový kód AAPS se při každém sestavení stáhne z oficiálního repozitáře AndroidAPS.

<label class="aapsb-label" for="aapsb-user">Your GitHub username</label>
<input class="aapsb-input" type="text" id="aapsb-user" autocomplete="username" spellcheck="false" placeholder="my-github-name" />
<span class="aapsb-msg" id="aapsb-userMsg"></span>

Nejprve se v tomto prohlížeči přihlaste na github.com (nemáte účet? vytvořte si ho zdarma). Potom se sem vraťte. Použijte své uživatelské jméno (je uvedené ve vašem profilu GitHub), ne e-mail: stránka se GitHubu zeptá, zda toto uživatelské jméno existuje.

<label class="aapsb-label" for="aapsb-repo">Name of your repository</label>
<input class="aapsb-input" type="text" id="aapsb-repo" spellcheck="false" placeholder="my-aaps" />

Ponechte navržený název. Už jste repozitář vytvořili s jiným názvem? Zadejte sem přesně tento název.

Your repository:<code class="aapsb-repoUrl"></code>

Už jste si sami vytvořili prázdný soukromý repozitář? Neklepejte na tlačítko níže: zadejte jeho přesný název výše a přejděte na [krok 2](#aaps-builder-setup-step2).

<a class="aapsb-btn" id="aapsb-createRepo" target="_blank" rel="noopener">Create my private repository</a>

Na stránce GitHubu, která se otevře, je název vyplněný a je vybraná možnost **Private**. Nic neměňte a nepřidávejte README ani jiné soubory.

1. Klepněte na zelené tlačítko **Create repository**.
2. Kvůli kroku 2 se vraťte na tuto stránku.

(aaps-builder-setup-step2)=

## Krok 2 – Přidejte sestavovací workflow

Sestavovací workflow je soubor, který GitHubu říká, jak AAPS sestavit. Pochází z dokumentace AAPS: <a id="aapsb-viewWorkflow" href="../_static/aaps-builder/aaps-builder-build.yml" target="_blank" rel="noopener">zobrazit workflow</a>.

1. <a class="aapsb-btn" id="aapsb-addWorkflow" target="_blank" rel="noopener">Add the workflow to my repository</a> <span class="aapsb-msg" id="aapsb-workflowMsg"></span>

   Otevře: <code class="aapsb-repoUrl"></code>, nový soubor `.github/workflows/build.yml`, už vyplněný.
2. Zkontrolujte, že název souboru nahoře je `.github/workflows/build.yml`. Text neměňte.
3. Klepněte na **Commit changes…** a potom znovu na **Commit changes** v okně, které se otevře.

```{admonition} Updating the workflow, or the text area is empty?
:class: dropdown

1. <button class="aapsb-btn aapsb-secondary" type="button" id="aapsb-copyWorkflow">Copy workflow</button> <span class="aapsb-msg" id="aapsb-copyWorkflowMsg"></span>
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openWorkflowFile" target="_blank" rel="noopener">Open my workflow file</a>

   Pokud workflow přidáváte poprvé, použijte místo toho tlačítko výše.
3. Nahraďte celý text zkopírovaným workflow (v telefonu dlouhým stiskem) a potom dvakrát klepněte na **Commit changes…**.
```

(aaps-builder-setup-step3)=

## Krok 3 – Váš podpisový klíč

Aplikace musí být podepsaná vaším vlastním klíčem. Vždy používejte stejný klíč, jinak budete muset pro aktualizaci AAPS odinstalovat (a přijít o jeho nastavení). Zvolte jednu ze dvou karet.

`````{tab-set}

````{tab-item} I already have a keystore
Například z Android Studia (.jks).

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
Sestavujete AAPS poprvé? Nový klíč se vytvoří zde ve vašem prohlížeči. Nic se nikam neposílá.

<label class="aapsb-label" for="aapsb-newPass">Zvolte heslo (alespoň 8 znaků, bez písmen s diakritikou)</label>
<input class="aapsb-input" type="password" id="aapsb-newPass" autocomplete="new-password">

<label class="aapsb-label" for="aapsb-newPass2">Zopakujte heslo</label>
<input class="aapsb-input" type="password" id="aapsb-newPass2" autocomplete="new-password">

<button class="aapsb-btn" type="button" id="aapsb-newGo">Create key</button> <span class="aapsb-msg" id="aapsb-newMsg"></span>

<div class="aapsb-box" id="aapsb-backupBox" hidden>

**Uložte si zálohu klíče!**

Stáhněte soubor. Tyto tři věci uchovávejte pohromadě na bezpečném místě mimo telefon (například ve vlastním cloudovém úložišti):

- soubor `aaps-keystore.jks`
- vaše heslo
- alias klíče: **`key0`**

Všechny tři budete potřebovat, pokud budete někdy sestavovat AAPS jiným způsobem, například v Android Studiu.

<button class="aapsb-btn" type="button" id="aapsb-downloadKs">Download backup (aaps-keystore.jks)</button>

</div>
````

`````
(aaps-builder-setup-step4)=
## Krok 4 – Předejte klíč svému repozitáři
<span id="aapsb-s4wait">Nejprve dokončete krok 3.</span>

<div id="aapsb-s4ready" hidden>
  1. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets" target="_blank" rel="noopener">Open the secrets page</a> Otevře: <code class="aapsb-repoUrl"></code> GitHub ukazuje „Page not found“ (404)? Nejprve zkontrolujte, že jste v tomto prohlížeči přihlášeni na github.com: GitHub ukazuje 404 u soukromých repozitářů, když nejste přihlášeni. Jinak vaše uživatelské jméno nebo název repozitáře v kroku 1 neodpovídá vašemu repozitáři: zkontrolujte je na github.com a zadejte je v kroku 1. 2. Klepněte na „Copy name“ a vložte ho do malého pole „Name“: `KEYSTORE_SET` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="name">Copy name</button> 3. Klepněte na „Copy secret“ a vložte dlouhý kód do velkého pole „Secret“: <code id="aapsb-secretPreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="secret">Copy secret</button> <span class="aapsb-msg" id="aapsb-copyMsg"></span> Secret je velmi dlouhý kód (tisíce znaků), NE slovo KEYSTORE_SET. Nejprve zkopírujte a vložte název, potom dlouhý kód. 4. Klepněte na „Add secret“. Hotovo, tento krok už nikdy nemusíte opakovat.
</div>
(aaps-builder-setup-step5)=
## Krok 5 – Sestavte aplikaci

1. <a class="aapsb-btn" id="aapsb-openActions" target="_blank" rel="noopener">Open the build page</a>

   Otevře: <code class="aapsb-repoUrl"></code>

   GitHub ukazuje „Page not found“ (404)? Nejprve zkontrolujte, že jste v tomto prohlížeči přihlášeni na github.com: GitHub ukazuje 404 u soukromých repozitářů, když nejste přihlášeni. Jinak vaše uživatelské jméno nebo název repozitáře v kroku 1 neodpovídá vašemu repozitáři: zkontrolujte je na github.com a zadejte je v kroku 1. Místo toho se otevřela aplikace GitHub? Klepněte na „RUN WORKFLOW“, zkontrolujte verzi a variantu a znovu klepněte na „RUN WORKFLOW“. Pokud aplikace stále ukazuje „Nothing to see here“, stáhněte seznam dolů a uvidíte své sestavení.
2. Pokud se GitHub zeptá, klepněte na zelené tlačítko pro povolení workflow.
3. Klepněte na „Run workflow“ a potom na zelené tlačítko „Run workflow“. „latest“ sestaví nejnovější verzi AAPS. ***tip:*** *jinou verzi sestavíte tak, že místo „latest“ zadáte název jejího [tagu](https://github.com/nightscout/AndroidAPS/tags)*
4. Počkejte asi 15–30 minut. Zelená fajfka znamená, že je sestavení hotové.
Chcete e-mail, když je sestavení hotové? GitHub vám pošle e-mail jen tehdy, když sestavení selže. Pokud chcete e-mail dostat i po úspěšném sestavení: na github.com otevřete svůj profilový obrázek → Settings → Notifications → System → Actions a zrušte zaškrtnutí „Only notify for failed workflows“.

```{admonition} No "Build AAPS" / "Run workflow" button?
:class: warning

1. Otevřete svůj repozitář a zkontrolujte, že v něm je soubor `.github/workflows/build.yml`. Pokud chybí nebo má jiný název, udělejte znovu [krok 2](#aaps-builder-setup-step2).
2. Otevřete kartu Actions. Pokud je tam napsáno, že workflow jsou vypnutá, klepněte na zelené tlačítko pro jejich povolení. Potom v seznamu klepněte na „Build AAPS“.
```

(aaps-builder-setup-step6)=

## Krok 6 – Nainstalujte aplikaci do telefonu

```{admonition} Before every update: back up your settings!
:class: warning

1. V AAPS: Údržba → Exportovat nastavení. (Dělejte to stejně pravidelně, například po změně profilu nebo jednou měsíčně.)
2. Exportovaný soubor zkopírujte MIMO telefon, například na Disk Google nebo do Dropboxu. Záloha, která je jen v telefonu, se ztratí spolu s telefonem.
3. Uchovávejte tam i soubory APK a několik starších exportů. Pak se můžete vždy vrátit zpět.

[Jak exportovat nastavení](#ExportImportSettings-Settings-Export) · [Časté dotazy AAPS: jak uspořádat zálohy](#FAQ-organize-backups)
```

1. Otevřete tuto stránku v telefonu ve webovém prohlížeči (Chrome). Pokud budete vyzváni, přihlaste se na github.com.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openRuns" target="_blank" rel="noopener">Open my builds</a>

   Místo toho se otevřela aplikace GitHub? Neumí stahovat sestavení. V aplikaci otevřete nejnovější sestavení a klepněte na „Artifacts ↗“, nebo klepněte na ikonu sdílení a zvolte Chrome (nebo „Kopírovat odkaz“ a odkaz vložte do adresního řádku Chromu). Pokračujte v Chromu.

   GitHub ukazuje „Page not found“ (404)? Nejprve zkontrolujte, že jste v tomto prohlížeči přihlášeni na github.com: GitHub ukazuje 404 u soukromých repozitářů, když nejste přihlášeni. Jinak vaše uživatelské jméno nebo název repozitáře v kroku 1 neodpovídá vašemu repozitáři: zkontrolujte je na github.com a zadejte je v kroku 1.

   Aby se odkazy GitHubu neotevíraly v aplikaci: v Androidu Nastavení → Aplikace → GitHub → Otevírat ve výchozím nastavení → vypněte „Otevírat podporované odkazy“.
3. Klepněte na nejnovější sestavení se zelenou fajfkou ✅.
4. Posuňte se dolů k souhrnu sestavení a klepněte na velký odkaz „📱 Download AAPS …“ (nebo se posuňte níže k části „Artifacts“ a klepněte na aaps-….apk). Posouvejte prstem po textu, ne po diagramu kroků sestavení.
5. Když je stahování hotové, klepněte na soubor a zvolte Instalovat. Pokud budete vyzváni, povolte instalaci aplikací z tohoto zdroje.
6. aaps-wear-….apk je aplikace pro chytré hodinky. Pokud hodinky nepoužíváte, tento soubor vynechte.

APK se v repozitáři nezobrazuje v části „Code“, jen na stránce sestavení. Zůstává tam 14 dní.

Nová verze AAPS? Zálohujte nastavení a potom ji sestavte podle [kroku 5](#aaps-builder-setup-step5). Váš repozitář nikdy nic nesestaví sám.

(aaps-builder-setup-step7)=

## Krok 7 – Volitelné: aplikace také na Disku Google

Chcete, aby se APK objevilo na vašem Disku Google (a zůstalo tam natrvalo)? Přidejte ještě jeden secret.

1. Hodnotu GDRIVE_OAUTH2 získejte podle popisu v dokumentaci AAPS (používá oficiální přípravnou stránku AAPS na počítači): [Ukládání sestavení na Disk Google](#aaps-builder-google-drive).
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets2" target="_blank" rel="noopener">Open the secrets page</a>

   Otevře:<code class="aapsb-repoUrl"></code>

   GitHub ukazuje „Page not found“ (404)? Nejprve zkontrolujte, že jste v tomto prohlížeči přihlášeni na github.com: GitHub ukazuje 404 u soukromých repozitářů, když nejste přihlášeni. Jinak vaše uživatelské jméno nebo název repozitáře v kroku 1 neodpovídá vašemu repozitáři: zkontrolujte je na github.com a zadejte je v kroku 1.
3. Klepněte na „Copy name“ a vložte ho do malého pole „Name“: `GDRIVE_OAUTH2` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="gdrive">Copy name</button>
4. Vložte svou hodnotu GDRIVE_OAUTH2 do velkého pole „Secret“ a potom klepněte na „Add secret“.

Od příštího sestavení se soubory APK ukládají také na Disk Google do složky AAPS/&lt;version&gt;.

Pokud 6 měsíců nic nesestavíte nebo změníte heslo ke Googlu, Google přístup zruší. Sestavení vám to pak oznámí: zopakujte tento krok.

----

Vše na této stránce běží ve vašem prohlížeči. Váš klíč a hesla se nikdy nikam neposílají, kromě míst, kam je sami vložíte. GitHubu se posílá jen vaše uživatelské jméno, aby se ověřilo, že existuje. Stránka i workflow jsou součástí dokumentace AAPS a vycházejí z AAPS Builder (AGPL-3.0).

<div id="aapsb-msgs" hidden>

- <span data-aapsb-msg="copied">Dlouhý kód zkopírován: vložte ho do velkého pole „Secret“ a potom klepněte na „Add secret“.</span>
- <span data-aapsb-msg="copiedName">Název zkopírován: vložte ho do malého pole „Name“.</span>
- <span data-aapsb-msg="userOk">✓ GitHub user found.</span>
- <span data-aapsb-msg="userBad">✗ No GitHub user with this name. Use your username (shown in your GitHub profile), not your e-mail.</span>
- <span data-aapsb-msg="copiedShort">Zkopírováno ✓</span>
- <span data-aapsb-msg="needUser">Nejprve v kroku 1 zadejte své uživatelské jméno na GitHubu.</span>
- <span data-aapsb-msg="workflowCopied">Workflow zkopírováno (verze {v}). Vložte ho do GitHubu.</span>
- <span data-aapsb-msg="workflowReady">Workflow version {v} is ready.</span>
- <span data-aapsb-msg="workflowErr">Could not read the workflow file. Reload this page and try again.</span>
- <span data-aapsb-msg="errPipe">Hesla a alias nesmí obsahovat znak |</span>
- <span data-aapsb-msg="errNoFile">Vyberte soubor úložiště klíčů.</span>
- <span data-aapsb-msg="errEmpty">Vyplňte heslo a alias.</span>
- <span data-aapsb-msg="errPass">Špatné heslo úložiště klíčů.</span>
- <span data-aapsb-msg="errKeyPass">Špatné heslo klíče.</span>
- <span data-aapsb-msg="errAlias">Alias v úložišti klíčů nebyl nalezen. Dostupné: {aliases}</span>
- <span data-aapsb-msg="errFormat">Toto nevypadá jako soubor úložiště klíčů.</span>
- <span data-aapsb-msg="okHave">Keystore OK! Continue with step 4.</span>
- <span data-aapsb-msg="okHaveUnchecked">Úložiště klíčů načteno. Heslo bude zkontrolováno při sestavení. Pokračujte krokem 4.</span>
- <span data-aapsb-msg="errShort">Heslo musí mít alespoň 8 znaků.</span>
- <span data-aapsb-msg="errAscii">Používejte jen a–z, A–Z, 0–9 a symboly jako ! ? # – bez mezer, bez písmen s diakritikou a bez |</span>
- <span data-aapsb-msg="errMatch">Hesla se neshodují.</span>
- <span data-aapsb-msg="working">Vytváří se klíč…</span>
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
