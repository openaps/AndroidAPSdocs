(aaps-builder-setup)=

# Página de configuración de AAPS Builder

Compila tu propia app **AAPS** en GitHub. Sin programas que instalar, sin terminal. La primera vez tarda unos 10 minutos; después, tú inicias cada compilación.

Cada paso se explica con más detalle, con capturas de pantalla, en [Compilación en el navegador con AAPS Builder](#aaps-builder). Deja esa página abierta en otra pestaña.

Los botones de abajo abren GitHub en una nueva pestaña de Chrome. Para volver a esta página, toca el botón de pestañas junto a la barra de direcciones de Chrome (el cuadrado con un número) y elige esta página.

(aaps-builder-setup-step1)=

## Paso 1 – Crea tu repositorio privado de compilación

Esto crea un repositorio privado vacío en tu cuenta de GitHub. Solo tú puedes verlo, y también las apps que compila. **No** necesitas hacer un fork de AndroidAPS: el código fuente de AAPS se descarga del repositorio oficial de AndroidAPS en cada compilación.

<label class="aapsb-label" for="aapsb-user">Your GitHub username</label>
<input class="aapsb-input" type="text" id="aapsb-user" autocomplete="username" spellcheck="false" placeholder="my-github-name" />
<span class="aapsb-msg" id="aapsb-userMsg"></span>

Primero inicia sesión en github.com en este navegador (¿no tienes cuenta? crea una gratis). Después vuelve aquí. Usa tu nombre de usuario (aparece en tu perfil de GitHub), no tu correo electrónico: la página pregunta a GitHub si existe este nombre de usuario.

<label class="aapsb-label" for="aapsb-repo">Name of your repository</label>
<input class="aapsb-input" type="text" id="aapsb-repo" spellcheck="false" placeholder="my-aaps" />

Deja el nombre propuesto. ¿Ya creaste tu repositorio con otro nombre? Escribe aquí ese nombre exacto.

Tu repositorio:<code class="aapsb-repoUrl"></code>

¿Ya creaste tú mismo un repositorio privado vacío? No toques el botón de abajo: escribe su nombre exacto arriba y ve al [paso 2](#aaps-builder-setup-step2).

<a class="aapsb-btn" id="aapsb-createRepo" target="_blank" rel="noopener">Create my private repository</a>

En la página de GitHub que se abre, el nombre ya está rellenado y **Private** está seleccionado. No cambies nada y no añadas un README ni otros archivos.

1. Haz clic en el botón verde **Create repository**.
2. Vuelve a esta página para el paso 2.

(aaps-builder-setup-step2)=

## Paso 2 – Añade el workflow de compilación

El workflow de compilación es el archivo que le dice a GitHub cómo compilar AAPS. Viene de la documentación de AAPS: <a id="aapsb-viewWorkflow" href="../_static/aaps-builder/aaps-builder-build.yml" target="_blank" rel="noopener">ver el workflow</a>.

1. <a class="aapsb-btn" id="aapsb-addWorkflow" target="_blank" rel="noopener">Add the workflow to my repository</a> <span class="aapsb-msg" id="aapsb-workflowMsg"></span>

   Abre: <code class="aapsb-repoUrl"></code>, archivo nuevo `.github/workflows/build.yml`, ya rellenado.
2. Comprueba que el nombre del archivo arriba es `.github/workflows/build.yml`. No cambies el texto.
3. Haz clic en **Commit changes…** y luego otra vez en **Commit changes** en la ventana que se abre.

```{admonition} Updating the workflow, or the text area is empty?
:class: dropdown

1. <button class="aapsb-btn aapsb-secondary" type="button" id="aapsb-copyWorkflow">Copy workflow</button> <span class="aapsb-msg" id="aapsb-copyWorkflowMsg"></span>
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openWorkflowFile" target="_blank" rel="noopener">Open my workflow file</a>

   Si en cambio quieres añadir el workflow por primera vez, usa el botón de arriba.
3. Sustituye todo el texto por el workflow copiado (mantén pulsado en un teléfono) y luego haz clic dos veces en **Commit changes…**.
```

(aaps-builder-setup-step3)=

## Paso 3 – Tu clave de firma

La app debe estar firmada con tu propia clave. Usa siempre la misma clave; si no, para actualizar tendrás que desinstalar AAPS (y perder sus ajustes). Elige una de las dos pestañas.

`````{tab-set}

````{tab-item} I already have a keystore
Por ejemplo, de Android Studio (.jks).

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
¿Compilas AAPS por primera vez? Aquí, en tu navegador, se crea una clave nueva. No se envía nada a ningún sitio.

<label class="aapsb-label" for="aapsb-newPass">Choose a password (at least 8 characters, no accented letters)</label>
<input class="aapsb-input" type="password" id="aapsb-newPass" autocomplete="new-password">

<label class="aapsb-label" for="aapsb-newPass2">Repeat the password</label>
<input class="aapsb-input" type="password" id="aapsb-newPass2" autocomplete="new-password">

<button class="aapsb-btn" type="button" id="aapsb-newGo">Create key</button> <span class="aapsb-msg" id="aapsb-newMsg"></span>

<div class="aapsb-box" id="aapsb-backupBox" hidden>

**¡Guarda una copia de seguridad de tu clave!**

Descarga el archivo. Guarda juntas estas tres cosas, en un lugar seguro fuera de tu teléfono (por ejemplo, tu propio almacenamiento en la nube):

- el archivo `aaps-keystore.jks`
- tu contraseña
- el alias de la clave: **`key0`**

Necesitarás las tres si alguna vez compilas AAPS de otra forma, por ejemplo con Android Studio.

<button class="aapsb-btn" type="button" id="aapsb-downloadKs">Download backup (aaps-keystore.jks)</button>

</div>
````

`````
(aaps-builder-setup-step4)=
## Paso 4 – Da la clave a tu repositorio
<span id="aapsb-s4wait">Primero termina el paso 3.</span>

<div id="aapsb-s4ready" hidden>
  1. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets" target="_blank" rel="noopener">Open the secrets page</a> Abre: <code class="aapsb-repoUrl"></code> ¿Ves «Page not found» (404)? Primero comprueba que has iniciado sesión en github.com en este navegador: GitHub muestra 404 para los repositorios privados cuando no has iniciado sesión. Si no, tu nombre de usuario o el nombre del repositorio del paso 1 no coinciden con tu repositorio: compruébalos en github.com y escríbelos en el paso 1. 2. Toca «Copy name» y pégalo en el campo pequeño «Name»: `KEYSTORE_SET` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="name">Copy name</button> 3. Toca «Copy secret» y pega el código largo en el cuadro grande «Secret»: <code id="aapsb-secretPreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="secret">Copy secret</button> <span class="aapsb-msg" id="aapsb-copyMsg"></span> El secreto es un código muy largo (miles de caracteres), NO la palabra KEYSTORE_SET. Copia y pega primero el nombre y después el código largo. 4. Toca «Add secret». Hecho: nunca más tendrás que hacer esto.
</div>
(aaps-builder-setup-step5)=
## Paso 5 – Compila la app

1. <a class="aapsb-btn" id="aapsb-openActions" target="_blank" rel="noopener">Open the build page</a>

   Abre: <code class="aapsb-repoUrl"></code>

   ¿Ves «Page not found» (404)? Primero comprueba que has iniciado sesión en github.com en este navegador: GitHub muestra 404 para los repositorios privados cuando no has iniciado sesión. Si no, tu nombre de usuario o el nombre del repositorio del paso 1 no coinciden con tu repositorio: compruébalos en github.com y escríbelos en el paso 1. ¿Se abrió la app de GitHub? Toca «RUN WORKFLOW», comprueba la versión y la variante y toca otra vez «RUN WORKFLOW». Si la app todavía muestra «Nothing to see here», desliza la lista hacia abajo para ver tu compilación.
2. Si te lo pide, haz clic en el botón verde para activar los workflows.
3. Haz clic en «Run workflow» y luego en el botón verde «Run workflow». «latest» compila la versión más nueva de AAPS. ***consejo:*** *puedes compilar otra versión escribiendo el nombre de su [tag](https://github.com/nightscout/AndroidAPS/tags) en lugar de «latest»*
4. Espera unos 15–30 minutos. Una marca verde significa que ha terminado.
¿Quieres recibir un correo cuando termine la compilación? GitHub solo te envía un correo cuando una compilación falla. Para recibir uno también cuando sale bien: en github.com, abre tu foto de perfil → Settings → Notifications → System → Actions, y desmarca «Only notify for failed workflows».

```{admonition} No "Build AAPS" / "Run workflow" button?
:class: warning

1. Abre tu repositorio y comprueba que el archivo `.github/workflows/build.yml` está allí. Si falta o tiene otro nombre, haz otra vez el [paso 2](#aaps-builder-setup-step2).
2. Abre la pestaña Actions. Si dice que los workflows están desactivados, haz clic en el botón verde para activarlos. Luego haz clic en «Build AAPS» en la lista.
```

(aaps-builder-setup-step6)=

## Paso 6 – Instalar en tu teléfono

```{admonition} Before every update: back up your settings!
:class: warning

1. En AAPS: Mantenimiento → Exportar ajustes. (Hazlo de todos modos con regularidad, por ejemplo después de un cambio de perfil o una vez al mes).
2. Copia el archivo exportado FUERA del teléfono, por ejemplo a Google Drive o Dropbox. Una copia de seguridad que solo está en el teléfono se pierde junto con el teléfono.
3. Guarda allí también los archivos APK y varias exportaciones antiguas. Así siempre podrás volver atrás.

[Cómo exportar los ajustes](#ExportImportSettings-Settings-Export) · [Preguntas frecuentes de AAPS: cómo organizar las copias de seguridad](#FAQ-organize-backups)
```

1. Abre esta página en tu teléfono, en el navegador web (Chrome). Inicia sesión en github.com si te lo pide.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openRuns" target="_blank" rel="noopener">Open my builds</a>

   ¿Se abrió la app de GitHub? No puede descargar compilaciones. En la app, abre la compilación más nueva y toca «Artifacts ↗», o toca el icono de compartir y elige Chrome (o «Copy link» y luego pega el enlace en la barra de direcciones de Chrome). Continúa en Chrome.

   ¿Ves «Page not found» (404)? Primero comprueba que has iniciado sesión en github.com en este navegador: GitHub muestra 404 para los repositorios privados cuando no has iniciado sesión. Si no, tu nombre de usuario o el nombre del repositorio del paso 1 no coinciden con tu repositorio: compruébalos en github.com y escríbelos en el paso 1.

   Para que los enlaces de GitHub no se abran en la app: Ajustes de Android → Aplicaciones → GitHub → Abrir de forma predeterminada → desactiva «Abrir enlaces compatibles».
3. Toca la compilación más nueva con una marca verde ✅.
4. Desplázate hacia abajo hasta el resumen de la compilación y toca el enlace grande «📱 Download AAPS …» (o desplázate más abajo hasta «Artifacts» y toca aaps-….apk). Desplázate con el dedo sobre el texto, no sobre el diagrama de los pasos de compilación.
5. Cuando termine la descarga, toca el archivo y elige Instalar. Si te lo pide, permite instalar apps de esta fuente.
6. aaps-wear-….apk es para un reloj inteligente. Omítelo si no usas uno.

El APK no aparece en «Code» en tu repositorio, solo en la página de la compilación. Se guarda durante 14 días.

¿Nueva versión de AAPS? Haz una copia de seguridad de tus ajustes y luego compílala con el [paso 5](#aaps-builder-setup-step5). Tu repositorio nunca compila nada por sí solo.

(aaps-builder-setup-step7)=

## Paso 7 – Opcional: tener la app en Google Drive

¿Quieres que el APK aparezca en tu Google Drive (guardado para siempre)? Añade un secreto más.

1. Obtén un valor GDRIVE_OAUTH2 como se explica en la documentación de AAPS (usa la página de preparación oficial de AAPS, en un ordenador): [Guardar las compilaciones en Google Drive](#aaps-builder-google-drive).
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets2" target="_blank" rel="noopener">Open the secrets page</a>

   Abre:<code class="aapsb-repoUrl"></code>

   ¿Ves «Page not found» (404)? Primero comprueba que has iniciado sesión en github.com en este navegador: GitHub muestra 404 para los repositorios privados cuando no has iniciado sesión. Si no, tu nombre de usuario o el nombre del repositorio del paso 1 no coinciden con tu repositorio: compruébalos en github.com y escríbelos en el paso 1.
3. Toca «Copy name» y pégalo en el campo pequeño «Name»: `GDRIVE_OAUTH2` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="gdrive">Copy name</button>
4. Pega tu valor GDRIVE_OAUTH2 en el cuadro grande «Secret» y luego toca «Add secret».

En la siguiente compilación, los APK también se guardan en Google Drive, en la carpeta AAPS/&lt;version&gt;.

Si no compilas durante 6 meses o cambias tu contraseña de Google, Google quita el acceso. La compilación te lo dirá: entonces repite este paso.

----

Todo en esta página funciona en tu navegador. Tu clave y tus contraseñas nunca se envían a ningún sitio, excepto donde tú mismo las pegas. Solo tu nombre de usuario de GitHub se envía a GitHub, para comprobar que existe. La página y el workflow forman parte de la documentación de AAPS y se basan en AAPS Builder (AGPL-3.0).

<div id="aapsb-msgs" hidden>

- <span data-aapsb-msg="copied">Código largo copiado: pégalo en el cuadro grande «Secret» y luego toca «Add secret».</span>
- <span data-aapsb-msg="copiedName">Nombre copiado: pégalo en el campo pequeño «Name».</span>
- <span data-aapsb-msg="userOk">✓ Usuario de GitHub encontrado.</span>
- <span data-aapsb-msg="userBad">✗ No hay ningún usuario de GitHub con este nombre. Usa tu nombre de usuario (aparece en tu perfil de GitHub), no tu correo electrónico.</span>
- <span data-aapsb-msg="copiedShort">Copiado ✓</span>
- <span data-aapsb-msg="needUser">Primero escribe tu nombre de usuario de GitHub en el paso 1.</span>
- <span data-aapsb-msg="workflowCopied">Workflow copiado (versión {v}). Pégalo en GitHub.</span>
- <span data-aapsb-msg="workflowReady">La versión {v} del workflow está lista.</span>
- <span data-aapsb-msg="workflowErr">No se pudo leer el archivo del workflow. Vuelve a cargar esta página e inténtalo de nuevo.</span>
- <span data-aapsb-msg="errPipe">Las contraseñas y el alias no pueden contener el carácter |</span>
- <span data-aapsb-msg="errNoFile">Elige tu archivo de almacén de claves (keystore).</span>
- <span data-aapsb-msg="errEmpty">Rellena la contraseña y el alias.</span>
- <span data-aapsb-msg="errPass">Contraseña del almacén de claves incorrecta.</span>
- <span data-aapsb-msg="errKeyPass">Contraseña de la clave incorrecta.</span>
- <span data-aapsb-msg="errAlias">No se encontró el alias en el almacén de claves. Disponibles: {aliases}</span>
- <span data-aapsb-msg="errFormat">Esto no parece un archivo de almacén de claves.</span>
- <span data-aapsb-msg="okHave">¡Almacén de claves correcto! Continúa con el paso 4.</span>
- <span data-aapsb-msg="okHaveUnchecked">Almacén de claves leído. La contraseña se comprobará cuando compiles. Continúa con el paso 4.</span>
- <span data-aapsb-msg="errShort">La contraseña debe tener al menos 8 caracteres.</span>
- <span data-aapsb-msg="errAscii">Usa solo a–z, A–Z, 0–9 y símbolos como ! ? # – sin espacios, sin letras con tilde y sin |</span>
- <span data-aapsb-msg="errMatch">Las contraseñas no coinciden.</span>
- <span data-aapsb-msg="working">Creando la clave…</span>
- <span data-aapsb-msg="okNew">Clave creada. Descarga abajo la copia de seguridad y luego continúa con el paso 4.</span>

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
