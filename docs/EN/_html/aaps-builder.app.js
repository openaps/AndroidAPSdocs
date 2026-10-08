// AAPS Builder setup page logic. Copyright (C) the AAPS Builder authors,
// https://github.com/dio99/aaps-builder, licensed under AGPL-3.0.
// Moved unchanged out of index.html (upstream commit 1115eea6c10a28b91486ccdee85a37e26ef75f41) so the page can
// run under a script-src 'self' Content-Security-Policy.
(() => {
  // Where the template repository lives. When served from GitHub Pages
  // (owner.github.io/repo) it is detected automatically.
  const TEMPLATE = (() => {
    const m = location.hostname.match(/^([^.]+)\.github\.io$/);
    const repo = location.pathname.split('/').filter(Boolean)[0];
    return m && repo ? { owner: m[1], name: repo } : { owner: 'dio99', name: 'aaps-builder' };
  })();
  const REPO_NAME = 'my-aaps';

  const T = {
    en: {
      lead: 'Build your own AAPS app in GitHub. No programs to install, no terminal. Takes about 10 minutes the first time, then one click per update.',
      's1.title': 'Create your private build repository',
      's1.text': 'This creates your own private copy of the builder in your GitHub account. Only you can see it and the apps it builds. You do NOT need to fork AndroidAPS: the AAPS source code is downloaded automatically from nightscout at every build.',
      's1.user': 'Your GitHub username',
      's1.noaccount': 'First log in to github.com in this browser (no account? create one for free). Then come back here.',
      's1.button': 'Create my private repository',
      's1.repo': 'Name of your repository',
      's1.repoHint': 'Keep the suggestion. Already created your repository with another name? Type that exact name here.',
      's1.onGithub': 'On the GitHub page that opens, everything is already filled in:',
      's1.gh1': 'It should say name',
      's1.gh2': 'and "Private" should be selected. Do not change anything.',
      's1.gh3': 'Just click the green "Create repository" button. Done!',
      yourRepo: 'Your repository:',
      opens: 'Opens:',
      notFound: 'Getting "Page not found" (404)? Then the name in step 1 does not match your repository. Check the name on github.com and type it in step 1. You can also use the buttons on your repository\'s front page.',
      's2.title': 'Your signing key',
      's2.text': 'The app must be signed with your own key. Always use the same key, otherwise you have to uninstall AAPS (and lose its settings) to update.',
      's2.have': 'I already have a keystore',
      's2.haveSub': 'e.g. from Android Studio (.jks)',
      's2.new': 'Create a new key',
      's2.newSub': 'first time building AAPS',
      'have.file': 'Keystore file',
      'have.pass': 'Keystore password',
      'have.alias': 'Key alias',
      'have.same': 'Key password is the same as the keystore password',
      'have.keypass': 'Key password',
      'have.button': 'Check and continue',
      'new.text': 'A new key is created here in your browser. Nothing is sent anywhere.',
      'new.pass': 'Choose a password (at least 8 characters, no å/ä/ö)',
      'new.pass2': 'Repeat the password',
      'new.button': 'Create key',
      'new.backupTitle': 'Save a backup of your key!',
      'new.backupText': 'Download the file and keep it somewhere safe (e.g. your own cloud storage) together with the password. You will need it if you ever build AAPS another way.',
      'new.download': 'Download backup (aaps-keystore.jks)',
      's3.title': 'Give the key to your repository',
      's3.wait': 'Finish step 2 first.',
      's3.open': 'Open the secrets page',
      's3.name': 'In "Name", enter:',
      's3.value': 'In "Secret", paste:',
      's3.copyValue': 'Copy secret',
      's3.save': 'Click "Add secret". Done, you never need to do this again.',
      's4.title': 'Build the app',
      's4.open': 'Open the build page',
      's4.enable': 'If asked, click the green button to enable workflows.',
      's4.trouble': 'No "Build AAPS" / "Run workflow" button?',
      's4.t1': 'Open your repository and look at the files. You must see a folder .github and the file README.md. If the repository is empty, it was not created from the template: delete it (Settings → bottom of the page → Delete this repository) and do step 1 again with the button.',
      's4.t2': 'Did you click "Fork" instead of the button in step 1? A fork does not work. Delete it and use the button in step 1.',
      's4.t3': 'Open the Actions tab. If it says workflows are disabled, click the green button to enable them. Then click "Build AAPS" in the list on the left.',
      's4.run': 'Click "Run workflow", then the green "Run workflow" button. "latest" builds the newest AAPS version.',
      's4.wait': 'Wait about 15–30 minutes. A green check means it is done.',
      's5.title': 'Install on your phone',
      'bk.title': '⚠️ Before every update: back up your settings!',
      'bk.1': 'In AAPS: Maintenance → Export settings. (Do this regularly anyway, e.g. after a profile change or once a month.)',
      'bk.2': 'Copy the exported file OFF the phone, e.g. to Google Drive or Dropbox. A backup that only lives on the phone is lost together with the phone.',
      'bk.3': 'Keep the APK files and several older exports there too. Then you can always go back.',
      'bk.howto': 'How to export settings',
      'bk.faq': 'AAPS FAQ: how to organize backups',
      's5.1': 'Open this page on your phone, in the web browser (Chrome). Not in the GitHub app: it cannot download builds. Log in to github.com if asked.',
      's5.open': 'Open my builds',
      's5.2': 'Tap the newest build with a green check ✅.',
      's5.3': 'Tap the big link "📱 Download AAPS …" at the top (or scroll down to "Artifacts" and tap aaps-….apk).',
      's5.4': 'When the download is done, tap the file and choose Install. If asked, allow installing apps from this source.',
      's5.5': 'aaps-wear-….apk is for a smartwatch. Skip it if you do not use one.',
      's5.note': 'The APK is not shown under "Code" in your repository, only on the build page. It is kept for 14 days.',
      's5.update': 'New AAPS version? Nothing to do: once a week (Monday night) your repository checks for a new version and builds it automatically. You can always build by hand with step 4.',
      's6.title': 'Optional: get the app in Google Drive',
      's6.text': 'Want the APK to show up in your Google Drive (easy to install from the phone, and kept forever)? Add one more secret.',
      's6.get': 'On your phone, follow the section "Google Drive Auth" in the official AAPS guide. It uses the official AAPS preparation page and gives you a GDRIVE_OAUTH2 value to copy. (You can skip its keystore part, you already have your key.)',
      's6.guide': 'Open the AAPS guide',
      's6.paste': 'In "Secret", paste the GDRIVE_OAUTH2 value and click "Add secret".',
      's6.result': 'Next build, the APKs are also saved in Google Drive in the folder AAPS/<version>.',
      's6.expire': 'If you do not build for 6 months, or change your Google password, Google stops the access. The build then says so: redo this step.',
      footer: 'Everything on this page runs in your browser. Your key and passwords are never sent anywhere except where you paste them yourself.',
      copy: 'Copy',
      copied: 'Copied! Now paste it in GitHub.',
      copiedShort: 'Copied ✓',
      needUser: 'Enter your GitHub username in step 1 first.',
      errPipe: 'Passwords and alias cannot contain the character |',
      errNoFile: 'Choose your keystore file.',
      errEmpty: 'Fill in password and alias.',
      errPass: 'Wrong keystore password.',
      errKeyPass: 'Wrong key password.',
      errAlias: 'Alias not found in the keystore. Available: ',
      errFormat: 'This does not look like a keystore file.',
      okHave: 'Keystore OK! Continue with step 3.',
      okHaveUnchecked: 'Keystore read. The password will be checked when you build. Continue with step 3.',
      errShort: 'The password must be at least 8 characters.',
      errAscii: 'Use only a–z, A–Z, 0–9 and symbols such as ! ? # – no spaces, no å/ä/ö and not |',
      errMatch: 'The passwords do not match.',
      working: 'Creating key…',
      okNew: 'Key created. Download the backup below, then continue with step 3.',
      chooseAlias: 'Choose alias'
    },
    sv: {
      lead: 'Bygg din egen AAPS-app i GitHub. Inga program att installera, ingen terminal. Tar ungefär 10 minuter första gången, sedan ett klick per uppdatering.',
      's1.title': 'Skapa ditt privata bygg-repo',
      's1.text': 'Här skapas din egen privata kopia av byggverktyget på ditt GitHub-konto. Bara du kan se den och apparna den bygger. Du behöver INTE forka AndroidAPS: AAPS-koden hämtas automatiskt från nightscout vid varje bygge.',
      's1.user': 'Ditt GitHub-användarnamn',
      's1.noaccount': 'Logga först in på github.com i den här webbläsaren (inget konto? skapa ett gratis). Kom sedan tillbaka hit.',
      's1.button': 'Skapa mitt privata repo',
      's1.repo': 'Namnet på ditt repo',
      's1.repoHint': 'Behåll förslaget. Har du redan skapat ditt repo med ett annat namn? Skriv exakt det namnet här.',
      's1.onGithub': 'På GitHub-sidan som öppnas är allt redan ifyllt:',
      's1.gh1': 'Där ska stå namnet',
      's1.gh2': 'och "Private" ska vara valt. Ändra ingenting.',
      's1.gh3': 'Klicka bara på den gröna knappen "Create repository". Klart!',
      yourRepo: 'Ditt repo:',
      opens: 'Öppnar:',
      notFound: 'Får du "Page not found" (404)? Då stämmer inte namnet i steg 1 med ditt repo. Kolla namnet på github.com och skriv in det i steg 1. Du kan också använda knapparna på ditt repos förstasida.',
      's2.title': 'Din signeringsnyckel',
      's2.text': 'Appen måste signeras med din egen nyckel. Använd alltid samma nyckel, annars måste du avinstallera AAPS (och tappa inställningarna) för att uppdatera.',
      's2.have': 'Jag har redan en keystore',
      's2.haveSub': 't.ex. från Android Studio (.jks)',
      's2.new': 'Skapa en ny nyckel',
      's2.newSub': 'första gången du bygger AAPS',
      'have.file': 'Keystore-fil',
      'have.pass': 'Keystore-lösenord',
      'have.alias': 'Nyckelns alias',
      'have.same': 'Nyckellösenordet är samma som keystore-lösenordet',
      'have.keypass': 'Nyckellösenord',
      'have.button': 'Kontrollera och fortsätt',
      'new.text': 'En ny nyckel skapas här i din webbläsare. Ingenting skickas någonstans.',
      'new.pass': 'Välj ett lösenord (minst 8 tecken, inga å/ä/ö)',
      'new.pass2': 'Upprepa lösenordet',
      'new.button': 'Skapa nyckel',
      'new.backupTitle': 'Spara en backup av din nyckel!',
      'new.backupText': 'Ladda ner filen och spara den säkert (t.ex. i din egen molnlagring) tillsammans med lösenordet. Du behöver den om du någon gång bygger AAPS på annat sätt.',
      'new.download': 'Ladda ner backup (aaps-keystore.jks)',
      's3.title': 'Ge nyckeln till ditt repo',
      's3.wait': 'Gör klart steg 2 först.',
      's3.open': 'Öppna sidan för secrets',
      's3.name': 'I "Name", skriv:',
      's3.value': 'I "Secret", klistra in:',
      's3.copyValue': 'Kopiera secret',
      's3.save': 'Klicka "Add secret". Klart, detta behöver du aldrig göra igen.',
      's4.title': 'Bygg appen',
      's4.open': 'Öppna byggsidan',
      's4.enable': 'Om du får frågan: klicka på den gröna knappen för att aktivera workflows.',
      's4.trouble': 'Ingen knapp "Build AAPS" / "Run workflow"?',
      's4.t1': 'Öppna ditt repo och titta på filerna. Du ska se en mapp .github och filen README.md. Är repot tomt skapades det inte från mallen: ta bort det (Settings → längst ner → Delete this repository) och gör om steg 1 med knappen.',
      's4.t2': 'Klickade du på "Fork" i stället för knappen i steg 1? En fork fungerar inte. Ta bort den och använd knappen i steg 1.',
      's4.t3': 'Öppna fliken Actions. Står det att workflows är avstängda, klicka på den gröna knappen för att slå på dem. Klicka sedan på "Build AAPS" i listan till vänster.',
      's4.run': 'Klicka "Run workflow" och sedan på den gröna knappen "Run workflow". "latest" bygger den senaste AAPS-versionen.',
      's4.wait': 'Vänta cirka 15–30 minuter. En grön bock betyder att det är klart.',
      's5.title': 'Installera på telefonen',
      'bk.title': '⚠️ Före varje uppdatering: säkerhetskopiera dina inställningar!',
      'bk.1': 'I AAPS: Underhåll (Maintenance) → Exportera inställningar. (Gör det regelbundet ändå, t.ex. efter profilbyte eller en gång i månaden.)',
      'bk.2': 'Kopiera den exporterade filen UTANFÖR telefonen, t.ex. till Google Drive eller Dropbox. En backup som bara finns i telefonen försvinner tillsammans med telefonen.',
      'bk.3': 'Spara även APK-filerna och flera äldre exporter där. Då kan du alltid gå tillbaka.',
      'bk.howto': 'Så exporterar du inställningar',
      'bk.faq': 'AAPS FAQ: så organiserar du backuper',
      's5.1': 'Öppna den här sidan i telefonens webbläsare (Chrome). Inte i GitHub-appen, den kan inte ladda ner byggen. Logga in på github.com om du blir tillfrågad.',
      's5.open': 'Öppna mina byggen',
      's5.2': 'Tryck på det senaste bygget med grön bock ✅.',
      's5.3': 'Tryck på den stora länken "📱 Ladda ner AAPS …" högst upp (eller scrolla ner till "Artifacts" och tryck på aaps-….apk).',
      's5.4': 'När nedladdningen är klar: tryck på filen och välj Installera. Om du får frågan: tillåt installation av appar från den här källan.',
      's5.5': 'aaps-wear-….apk är för en smartklocka. Hoppa över den om du inte har någon.',
      's5.note': 'APK-filen syns inte under "Code" i ditt repo, bara på byggets sida. Den sparas i 14 dagar.',
      's5.update': 'Ny AAPS-version? Inget att göra: en gång i veckan (natten mot måndag) kollar ditt repo om det finns en ny version och bygger den automatiskt. Du kan alltid bygga för hand med steg 4.',
      's6.title': 'Valfritt: få appen i Google Drive',
      's6.text': 'Vill du att APK:n hamnar i din Google Drive (lätt att installera från telefonen och sparas för alltid)? Lägg till en secret till.',
      's6.get': 'Följ avsnittet "Google Drive Auth" i den officiella AAPS-guiden på telefonen. Den använder AAPS officiella förberedelsesida och ger dig ett GDRIVE_OAUTH2-värde att kopiera. (Hoppa över keystore-delen, du har redan din nyckel.)',
      's6.guide': 'Öppna AAPS-guiden',
      's6.paste': 'I "Secret", klistra in GDRIVE_OAUTH2-värdet och klicka "Add secret".',
      's6.result': 'Vid nästa bygge sparas APK-filerna även i Google Drive i mappen AAPS/<version>.',
      's6.expire': 'Om du inte bygger på 6 månader, eller byter Google-lösenord, stänger Google åtkomsten. Bygget säger då till: gör om det här steget.',
      footer: 'Allt på den här sidan körs i din webbläsare. Din nyckel och dina lösenord skickas ingenstans, förutom dit du själv klistrar in dem.',
      copy: 'Kopiera',
      copied: 'Kopierat! Klistra nu in i GitHub.',
      copiedShort: 'Kopierat ✓',
      needUser: 'Skriv in ditt GitHub-användarnamn i steg 1 först.',
      errPipe: 'Lösenord och alias får inte innehålla tecknet |',
      errNoFile: 'Välj din keystore-fil.',
      errEmpty: 'Fyll i lösenord och alias.',
      errPass: 'Fel keystore-lösenord.',
      errKeyPass: 'Fel nyckellösenord.',
      errAlias: 'Aliaset finns inte i keystore-filen. Tillgängliga: ',
      errFormat: 'Det här ser inte ut som en keystore-fil.',
      okHave: 'Keystore OK! Fortsätt med steg 3.',
      okHaveUnchecked: 'Keystore inläst. Lösenordet kontrolleras när du bygger. Fortsätt med steg 3.',
      errShort: 'Lösenordet måste vara minst 8 tecken.',
      errAscii: 'Använd bara a–z, A–Z, 0–9 och tecken som ! ? # – inga mellanslag, inga å/ä/ö och inte |',
      errMatch: 'Lösenorden matchar inte.',
      working: 'Skapar nyckel…',
      okNew: 'Nyckeln är skapad. Ladda ner backupen nedan och fortsätt sedan med steg 3.',
      chooseAlias: 'Välj alias'
    }
  };

  const $ = id => document.getElementById(id);
  const store = {
    get: k => { try { return localStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch {} }
  };

  let lang = store.get('lang') || ((navigator.language || '').toLowerCase().startsWith('sv') ? 'sv' : 'en');
  const t = k => T[lang][k] ?? T.en[k] ?? k;

  function applyLang() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('.lang button').forEach(b => b.classList.toggle('on', b.dataset.lang === lang));
  }
  document.querySelectorAll('.lang button').forEach(b => b.onclick = () => { lang = b.dataset.lang; store.set('lang', lang); applyLang(); });

  // ---------- step 1: links ----------
  const userInput = $('user');
  userInput.value = store.get('ghUser') || '';
  const user = () => userInput.value.trim().replace(/^@/, '');
  const repoInput = $('repo');
  repoInput.value = store.get('ghRepo') || REPO_NAME;
  const repo = () => repoInput.value.trim() || REPO_NAME;

  function updateLinks() {
    const u = user();
    store.set('ghUser', u);
    store.set('ghRepo', repo());
    // GitHub's own "Use this template" page: guarantees the copy contains the build workflow
    // Documented prefill parameters of github.com/new; owner=@me is the signed-in user
    const p = new URLSearchParams({ template_owner: TEMPLATE.owner, template_name: TEMPLATE.name,
                                    owner: '@me', name: repo(), visibility: 'private' });
    $('createRepo').href = 'https://github.com/new?' + p;
    document.querySelectorAll('.repoName').forEach(el => { el.textContent = repo(); });
    document.querySelectorAll('.repoUrl').forEach(el => { el.textContent = `github.com/${u || '…'}/${repo()}`; });
    const base = `https://github.com/${encodeURIComponent(u)}/${encodeURIComponent(repo())}`;
    for (const [id, path] of [['openSecrets', '/settings/secrets/actions/new'], ['openSecrets2', '/settings/secrets/actions/new'], ['openActions', '/actions/workflows/build.yml'], ['openRuns', '/actions/workflows/build.yml']]) {
      $(id).href = u ? base + path : '#s1';
    }
  }
  userInput.addEventListener('input', updateLinks);
  repoInput.addEventListener('input', updateLinks);
  for (const id of ['openSecrets', 'openSecrets2', 'openActions', 'openRuns']) {
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

  let secretValue = null;
  function setSecret(ksBytes, storePass, alias, keyPass) {
    const raw = [bytesToB64(ksBytes), storePass, alias, keyPass].join('|');
    secretValue = bytesToB64(utf8(raw));
    $('s2').classList.add('done');
    $('s3wait').hidden = true;
    $('s3ready').hidden = false;
  }
  function msg(id, key, cls, extra = '') { const el = $(id); el.className = 'msg ' + cls; el.textContent = t(key) + extra; }

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
      msg('haveMsg', 'errFormat', 'err');
    }
  });
  $('samePass').addEventListener('change', () => { $('keyPassWrap').hidden = $('samePass').checked; });

  $('haveGo').addEventListener('click', async () => {
    const pass = $('ksPass').value, alias = $('ksAlias').value.trim();
    const keyPass = $('samePass').checked ? pass : $('keyPass').value;
    if (!haveBytes) return msg('haveMsg', 'errNoFile', 'err');
    if (!haveKind) return msg('haveMsg', 'errFormat', 'err');
    if (!pass || !alias || !keyPass) return msg('haveMsg', 'errEmpty', 'err');
    if ([pass, alias, keyPass].some(s => s.includes('|'))) return msg('haveMsg', 'errPipe', 'err');

    try {
      if (haveKind === 'jks') {
        const d = await sha1(utf16be(pass), utf8('Mighty Aphrodite'), haveJks.body);
        if (!eq(d, haveJks.digest)) return msg('haveMsg', 'errPass', 'err');
        const entry = haveJks.entries.find(e => e.alias.toLowerCase() === alias.toLowerCase());
        if (!entry) return msg('haveMsg', 'errAlias', 'err', haveJks.entries.map(e => e.alias).join(', '));
        if (!(await jksKeyPassOk(entry.key, keyPass))) return msg('haveMsg', 'errKeyPass', 'err');
        setSecret(haveBytes, pass, entry.alias, keyPass);
        return msg('haveMsg', 'okHave', 'ok');
      }
      // PKCS12
      let p12;
      try {
        const asn = forge.asn1.fromDer(forge.util.createBuffer(String.fromCharCode.apply(null, haveBytes)));
        p12 = forge.pkcs12.pkcs12FromAsn1(asn, pass);
      } catch (e) {
        if (/password|MAC/i.test(String(e && e.message))) return msg('haveMsg', 'errPass', 'err');
        // Could not parse locally; let the build validate it
        setSecret(haveBytes, pass, alias, keyPass);
        return msg('haveMsg', 'okHaveUnchecked', 'warn');
      }
      const names = [...new Set(p12.safeContents.flatMap(sc => sc.safeBags.flatMap(b => (b.attributes.friendlyName || []))))];
      if (names.length && !names.some(n => n.toLowerCase() === alias.toLowerCase())) {
        return msg('haveMsg', 'errAlias', 'err', names.join(', '));
      }
      setSecret(haveBytes, pass, alias, keyPass);
      msg('haveMsg', 'okHave', 'ok');
    } catch (e) {
      console.error(e);
      setSecret(haveBytes, pass, alias, keyPass);
      msg('haveMsg', 'okHaveUnchecked', 'warn');
    }
  });

  // ---------- step 2b: new keystore ----------
  // Use the browser's cryptographic RNG for everything forge needs (salts, IVs, serial)
  forge.random.getBytesSync = n => String.fromCharCode.apply(null, crypto.getRandomValues(new Uint8Array(n)));
  forge.random.getBytes = (n, cb) => cb ? cb(null, forge.random.getBytesSync(n)) : forge.random.getBytesSync(n);
  let newKsBytes = null;
  $('newGo').addEventListener('click', async () => {
    const p1 = $('newPass').value, p2 = $('newPass2').value;
    if (p1.length < 8) return msg('newMsg', 'errShort', 'err');
    if (p1 !== p2) return msg('newMsg', 'errMatch', 'err');
    if (!/^[\x21-\x7e]+$/.test(p1) || p1.includes('|')) return msg('newMsg', 'errAscii', 'err');
    $('newGo').disabled = true;
    msg('newMsg', 'working', '');
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
      const asn = forge.pkcs12.toPkcs12Asn1(key, [cert], p1, { algorithm: '3des', friendlyName: 'aaps', generateLocalKeyId: true });
      newKsBytes = binStrToBytes(forge.asn1.toDer(asn).getBytes());
      setSecret(newKsBytes, p1, 'aaps', p1);
      $('backupBox').hidden = false;
      msg('newMsg', 'okNew', 'ok');
    } catch (e) {
      console.error(e);
      $('newMsg').className = 'msg err'; $('newMsg').textContent = String(e);
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

  // ---------- tabs ----------
  function tab(which) {
    $('tabHave').classList.toggle('on', which === 'have');
    $('tabNew').classList.toggle('on', which === 'new');
    $('paneHave').hidden = which !== 'have';
    $('paneNew').hidden = which !== 'new';
  }
  $('tabHave').onclick = () => tab('have');
  $('tabNew').onclick = () => tab('new');

  // ---------- step 3: copy ----------
  document.querySelectorAll('[data-copy]').forEach(b => b.addEventListener('click', async () => {
    const fixed = { name: 'KEYSTORE_SET', gdrive: 'GDRIVE_OAUTH2', repo: repo() };
    const text = fixed[b.dataset.copy] ?? secretValue;
    try { await navigator.clipboard.writeText(text); }
    catch {
      const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta);
      ta.select(); document.execCommand('copy'); ta.remove();
    }
    if (b.dataset.copy === 'secret') msg('copyMsg', 'copied', 'ok');
    b.textContent = t('copiedShort');
    setTimeout(() => { b.textContent = t(b.dataset.i18n); }, 2000);
  }));

  applyLang();
  updateLinks();
})();
