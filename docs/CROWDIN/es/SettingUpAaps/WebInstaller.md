(web-installer)=

# Instalador web de AAPS

Instala el APK de **AAPS** que has compilado en tu teléfono Android, directamente desde este navegador, con un cable USB. Sin línea de comandos, sin nada que descargar. Instaladas de esta forma (la forma ADB), las apps están **exentas de la verificación de desarrolladores de Android de Google**.

```{admonition} This page runs entirely in your browser
:class: tip

Tu archivo APK y los datos de tu teléfono nunca salen de este ordenador: la página no puede enviar datos a ningún sitio (su *Content-Security-Policy* bloquea todas las subidas; puedes comprobarlo en las herramientas para desarrolladores del navegador, pestaña Network/Red). Usa esta página solo en su dirección oficial, enlazada desde [Transferir e instalar AAPS](#android-developer-verification-web) en la documentación de **AAPS**.
```

<noscript>

**JavaScript está desactivado.** Esta página necesita JavaScript para comunicarse con tu teléfono.

</noscript>

<div id="aapsi-unsupported" class="aapsi-box aapsi-error" hidden>

**Este navegador no puede comunicarse con dispositivos USB.** Abre esta página en **Google Chrome**, **Microsoft Edge** u **Opera**, en un ordenador o en un dispositivo Android. Firefox, Safari y todos los navegadores de iPhone no son compatibles con WebUSB.

</div>

(web-installer-prepare)=

## Paso 1 – Antes de empezar

- **Activa la depuración por USB** en el teléfono (solo una vez):
  - Ve a **Ajustes** > **Información del teléfono** y toca siete veces **Número de compilación**, hasta que el teléfono confirme que eres desarrollador.
  - De vuelta en los **Ajustes** principales, abre **Opciones para desarrolladores** y activa **Depuración por USB**.
- Conecta el teléfono con un **cable USB que transmita datos** (algunos cables de carga no pueden transmitir datos: si el teléfono nunca se detecta, prueba otro cable).
- **Cierra Android Studio** y cualquier otro programa que use ADB: solo un programa puede comunicarse con el teléfono a la vez.
- Ten preparado tu **archivo APK de AAPS** en este ordenador (si usaste la compilación en el navegador, descárgalo antes de tu Google Drive).

¿No tienes ordenador? Esta página también funciona desde Chrome en *otro teléfono Android*, conectado con un cable USB-C a USB-C.

(web-installer-connect)=

## Paso 2 – Conecta tu teléfono

Haz clic en el botón y después elige tu teléfono en la lista que muestra el navegador.

<button class="aapsi-btn" type="button" id="aapsi-connect-btn">Conectar teléfono</button> <button class="aapsi-btn aapsi-secondary" type="button" id="aapsi-disconnect-btn" hidden>Desconectar</button>

<span class="aapsi-status" id="aapsi-connect-status"></span>

<div class="aapsi-box aapsi-warn" id="aapsi-authorize-hint" hidden>

**Mira ahora tu teléfono:** toca **Permitir** en el mensaje «¿Permitir depuración por USB?» y marca *«Permitir siempre desde este ordenador»*. ¿No lo ves? Desbloquea la pantalla del teléfono, o desconecta y vuelve a conectar el cable.

</div>

<div id="aapsi-connect-help" hidden>

```{admonition} ¿El teléfono no aparece o la conexión falla?
:class: note

- Comprueba que la **Depuración por USB** está activada ([paso 1](#web-installer-prepare)) y que el cable es un cable de datos.
- Cierra **Android Studio**, o ejecuta `adb kill-server` si tienes ADB instalado, y después desconecta y vuelve a conectar el teléfono.
- En Windows, un controlador USB del fabricante (OEM) instalado para tu teléfono también puede ocupar la conexión: desconecta otras herramientas de Android y vuelve a intentarlo.
```

</div>

(web-installer-file)=

## Paso 3 – Elige tu archivo APK de AAPS

<input type="file" id="aapsi-apk-input" accept=".apk" disabled />

<span class="aapsi-status" id="aapsi-file-status"></span>

(web-installer-install)=

## Paso 4 – Instalar

¿Vas a actualizar un **AAPS** que ya tienes? Se conservan todos sus ajustes y su historial, exactamente como con `adb install -r`.

<button class="aapsi-btn" type="button" id="aapsi-install-btn" disabled>Instalar en el teléfono</button>

<div id="aapsi-progress-wrap" hidden>

<span class="aapsi-status" id="aapsi-install-status"></span>
<progress id="aapsi-install-progress" max="100" value="0"></progress>

</div>

<div class="aapsi-box aapsi-success" id="aapsi-result-success" hidden>

**AAPS está instalado.** Puedes desconectar el teléfono. Si era tu primera instalación, continúa con el [Asistente de configuración](SetupWizard.md).

</div>

<div class="aapsi-box aapsi-error" id="aapsi-result-error" hidden>

<span id="aapsi-error-message"></span>

Detalles técnicos:

<pre id="aapsi-error-details"></pre>

</div>

----

Forma parte de la documentación de **AAPS**. Creado con las bibliotecas de código abierto [Tango (ya-webadb)](https://github.com/yume-chan/ya-webadb) (licencia MIT). Código fuente de la página e instrucciones de compilación: [openaps/AndroidAPSdocs](https://github.com/openaps/AndroidAPSdocs).

**AAPS** es un sistema DIY (hazlo tú mismo), no un producto comercial: tú lo compilas, tú lo instalas y tú eres responsable de él. La comunidad ofrece esta página sin ninguna garantía.

<div id="aapsi-msgs" hidden>

- <span data-aapsi-msg="noDetails">(sin más detalles)</span>
- <span data-aapsi-msg="errSignature">Este APK se compiló con una clave de firma diferente a la del AAPS que ya está instalado en el teléfono. Usa el mismo almacén de claves que antes, o exporta tus ajustes de AAPS y desinstala primero el AAPS antiguo (al desinstalar se pierden todos sus ajustes y su historial: ¡exporta primero!).</span>
- <span data-aapsi-msg="errDowngrade">El teléfono ya tiene una versión más nueva de esta app. Para volver a una versión anterior, exporta tus ajustes y desinstala primero la app actual.</span>
- <span data-aapsi-msg="errStorage">No hay suficiente espacio libre en el teléfono. Libera algo de espacio y vuelve a intentarlo.</span>
- <span data-aapsi-msg="errInvalidApk">El teléfono no reconoce este archivo como un APK válido. Comprueba que has elegido el archivo correcto y que la descarga terminó.</span>
- <span data-aapsi-msg="errOldSdk">La versión de Android de este teléfono es demasiado antigua para este APK.</span>
- <span data-aapsi-msg="errCanceled">La instalación se rechazó en el teléfono. Mira la pantalla del teléfono y permite la instalación cuando te lo pida.</span>
- <span data-aapsi-msg="errBusy">Otro programa está usando la conexión ADB del teléfono. Cierra Android Studio (o ejecuta "adb kill-server"), desconecta y vuelve a conectar el cable, y vuelve a intentarlo.</span>
- <span data-aapsi-msg="errLost">Se perdió la conexión con el teléfono. Comprueba el cable y vuelve a conectar.</span>
- <span data-aapsi-msg="errGeneric">La instalación ha fallado. Consulta los detalles técnicos de abajo y, si lo necesitas, pide ayuda en los canales de la comunidad de AAPS.</span>
- <span data-aapsi-msg="errDisconnectedDuringInstall">El teléfono se desconectó durante la instalación. Vuelve a conectarlo e inténtalo otra vez: no se ha roto nada.</span>
- <span data-aapsi-msg="waitingPick">Esperando a que elijas un dispositivo…</span>
- <span data-aapsi-msg="noDevice">No se ha elegido ningún dispositivo. ¿Está activada la depuración por USB y el cable es un cable de datos?</span>
- <span data-aapsi-msg="connecting">Conectando…</span>
- <span data-aapsi-msg="phoneDisconnected">El teléfono se desconectó.</span>
- <span data-aapsi-msg="androidDevice">Dispositivo Android</span>
- <span data-aapsi-msg="connectedTo">Conectado a {name}.</span>
- <span data-aapsi-msg="couldNotConnect">No se pudo conectar.</span>
- <span data-aapsi-msg="disconnected">Desconectado.</span>
- <span data-aapsi-msg="notApk">«{file}» no es un archivo .apk. Elige el APK de AAPS que has compilado.</span>
- <span data-aapsi-msg="emptyFile">Este archivo está vacío. Comprueba la descarga y vuelve a elegirlo.</span>
- <span data-aapsi-msg="notRealApk">«{file}» no parece un archivo APK real. ¿Has elegido el archivo correcto?</span>
- <span data-aapsi-msg="selected">Seleccionado: {file} ({size})</span>
- <span data-aapsi-msg="copying">Copiando al teléfono… {done} de {total}</span>
- <span data-aapsi-msg="installingOnPhone">Instalando en el teléfono… (puede tardar un minuto)</span>
- <span data-aapsi-msg="megabytes">{n} MB</span>

</div>

<style>
  .rst-content .aapsi-btn {
    display: inline-block; margin: 4px 0; padding: 8px 18px; border-radius: 4px; border: 1px solid #2980b9; cursor: pointer;
    background: #2980b9; color: #fff; font: inherit; font-weight: 700;
  }
  .rst-content .aapsi-btn:hover { background: #1f6391; }
  .rst-content .aapsi-btn.aapsi-secondary { background: transparent; color: #2980b9; }
  .rst-content .aapsi-btn.aapsi-secondary:hover { background: #e7f2fa; }
  .rst-content .aapsi-btn:disabled { opacity: .5; cursor: default; }
  .rst-content input[type="file"] { font: inherit; max-width: 100%; }
  .rst-content progress { width: 100%; height: 1.1rem; }
  .rst-content .aapsi-status { display: block; margin: 0.6rem 0; font-weight: 700; }
  .rst-content .aapsi-box { border-radius: 4px; padding: 0.7rem 1rem; margin: 0.8rem 0; border: 1px solid; }
  .rst-content .aapsi-box.aapsi-warn { background: #fff8e1; border-color: #b8860b; }
  .rst-content .aapsi-box.aapsi-error { background: #fdecea; border-color: #c62828; }
  .rst-content .aapsi-box.aapsi-success { background: #e6f4e6; border-color: #2e7d32; }
  .rst-content .aapsi-box > p:last-child { margin-bottom: 0; }
  .rst-content #aapsi-error-details { white-space: pre-wrap; font-size: 0.85rem; }
  .rst-content section.aapsi-disabled { opacity: 0.55; }
  .rst-content [hidden] { display: none !important; }
</style>

<script type="module">
// AAPS Web Installer: installs an APK onto an Android phone over USB, from the browser, using
// the ADB protocol (WebUSB). ADB installations are exempt from Google's Android developer
// verification. Deliberately kept readable and unminified so anyone can audit it.
//
// All vendor code (Tango / ya-webadb, MIT) is in _static/install-aaps/install-aaps.bundle.js;
// see /installer/README.md in the AndroidAPSdocs repository for the pinned versions and the
// reproducible build procedure.
//
// This script makes no network requests. The page's Content-Security-Policy (set in
// docs/shared.conf.py, connect-src 'none') would block any attempt to do so.
// The texts are in the page (hidden list above), so they are translated with it.

import {
  Adb,
  AdbDaemonTransport,
  AdbDaemonWebUsbDeviceManager,
  AdbWebCredentialStore,
  PackageManager,
} from "../_static/install-aaps/install-aaps.bundle.js";

const $ = (id) => document.getElementById("aapsi-" + id);

const M = {};
document.querySelectorAll("[data-aapsi-msg]").forEach((el) => { M[el.dataset.aapsiMsg] = el.textContent.trim(); });
const t = (key, vars = {}) => M[key].replace(/\{(\w+)\}/g, (all, k) => (k in vars ? vars[k] : all));

// The section of a step, from the label in front of its heading.
const stepSection = (label) => document.getElementById(label).closest("section");

const ui = {
  unsupported: $("unsupported"),
  stepFile: stepSection("web-installer-file"),
  stepInstall: stepSection("web-installer-install"),
  connectBtn: $("connect-btn"),
  disconnectBtn: $("disconnect-btn"),
  connectStatus: $("connect-status"),
  authorizeHint: $("authorize-hint"),
  connectHelp: $("connect-help"),
  apkInput: $("apk-input"),
  fileStatus: $("file-status"),
  installBtn: $("install-btn"),
  progressWrap: $("progress-wrap"),
  installStatus: $("install-status"),
  installProgress: $("install-progress"),
  resultSuccess: $("result-success"),
  resultError: $("result-error"),
  errorMessage: $("error-message"),
  errorDetails: $("error-details"),
};

const state = {
  manager: AdbDaemonWebUsbDeviceManager.BROWSER,
  credentialStore: new AdbWebCredentialStore(),
  device: undefined,
  adb: undefined,
  file: undefined,
  installing: false,
};

// ---------------------------------------------------------------- helpers

function formatMB(bytes) {
  return t("megabytes", { n: (bytes / (1024 * 1024)).toFixed(1) });
}

function setDisabled(section, disabled) {
  section.classList.toggle("aapsi-disabled", disabled);
}

function setConnected(connected) {
  setDisabled(ui.stepFile, !connected);
  ui.apkInput.disabled = !connected;
  ui.disconnectBtn.hidden = !connected;
  ui.connectBtn.hidden = connected;
  if (!connected) {
    setDisabled(ui.stepInstall, true);
    ui.installBtn.disabled = true;
  }
}

function showError(message, details) {
  ui.errorMessage.textContent = message;
  ui.errorDetails.textContent = details || t("noDetails");
  ui.resultError.hidden = false;
}

function clearResults() {
  ui.resultSuccess.hidden = true;
  ui.resultError.hidden = true;
}

// Translate raw ADB / package manager errors into plain language.
function explainError(raw) {
  const text = String(raw);
  if (/INSTALL_FAILED_UPDATE_INCOMPATIBLE|signatures do not match|INSTALL_FAILED_SHARED_USER_INCOMPATIBLE/i.test(text)) {
    return t("errSignature");
  }
  if (/INSTALL_FAILED_VERSION_DOWNGRADE/i.test(text)) {
    return t("errDowngrade");
  }
  if (/INSTALL_FAILED_INSUFFICIENT_STORAGE/i.test(text)) {
    return t("errStorage");
  }
  if (/INSTALL_PARSE_FAILED|INSTALL_FAILED_INVALID_APK/i.test(text)) {
    return t("errInvalidApk");
  }
  if (/INSTALL_FAILED_OLDER_SDK/i.test(text)) {
    return t("errOldSdk");
  }
  if (/INSTALL_CANCELED_BY_USER|USER_RESTRICTED/i.test(text)) {
    return t("errCanceled");
  }
  if (/unable to claim|claim interface|access denied|busy|NetworkError/i.test(text)) {
    return t("errBusy");
  }
  if (/device was disconnected|disconnected|transfer error|The device was opened/i.test(text)) {
    return t("errLost");
  }
  return t("errGeneric");
}

function resetConnection(message) {
  state.adb = undefined;
  state.device = undefined;
  setConnected(false);
  ui.authorizeHint.hidden = true;
  ui.connectStatus.textContent = message || "";
  if (state.installing) {
    state.installing = false;
    ui.progressWrap.hidden = true;
    showError(t("errDisconnectedDuringInstall"), message);
  }
}

// ---------------------------------------------------------------- connect

async function connect() {
  clearResults();
  ui.connectHelp.hidden = true;
  ui.connectBtn.disabled = true;
  ui.connectStatus.textContent = t("waitingPick");
  let hintTimer;
  try {
    const device = await state.manager.requestDevice();
    if (!device) {
      ui.connectStatus.textContent = t("noDevice");
      ui.connectHelp.hidden = false;
      return;
    }
    state.device = device;
    ui.connectStatus.textContent = t("connecting");
    const connection = await device.connect();

    // Show the "look at your phone" hint: the first connection pends until
    // the "Allow USB debugging?" dialog is accepted on the phone.
    hintTimer = setTimeout(() => { ui.authorizeHint.hidden = false; }, 1500);
    const transport = await AdbDaemonTransport.authenticate({
      serial: device.serial,
      connection,
      credentialStore: state.credentialStore,
    });
    clearTimeout(hintTimer);
    ui.authorizeHint.hidden = true;

    state.adb = new Adb(transport);
    transport.disconnected.then(
      () => resetConnection(t("phoneDisconnected")),
      () => resetConnection(t("phoneDisconnected")),
    );

    const banner = state.adb.banner;
    const name = (banner && (banner.model || banner.product)) || device.serial || t("androidDevice");
    ui.connectStatus.textContent = t("connectedTo", { name });
    setConnected(true);
    updateFileState();
  } catch (error) {
    clearTimeout(hintTimer);
    ui.authorizeHint.hidden = true;
    state.adb = undefined;
    ui.connectStatus.textContent = t("couldNotConnect");
    ui.connectHelp.hidden = false;
    showError(explainError(error), String(error && error.stack ? error.stack : error));
  } finally {
    ui.connectBtn.disabled = false;
  }
}

async function disconnect() {
  try {
    if (state.adb) {
      await state.adb.close();
    }
  } catch {
    // ignore — we are disconnecting anyway
  }
  resetConnection(t("disconnected"));
}

// ---------------------------------------------------------------- file

async function updateFileState() {
  const file = ui.apkInput.files && ui.apkInput.files[0];
  state.file = undefined;
  clearResults();
  if (!file) {
    ui.fileStatus.textContent = "";
    setDisabled(ui.stepInstall, true);
    ui.installBtn.disabled = true;
    return;
  }
  if (!/\.apk$/i.test(file.name)) {
    ui.fileStatus.textContent = t("notApk", { file: file.name });
    ui.installBtn.disabled = true;
    return;
  }
  if (file.size === 0) {
    ui.fileStatus.textContent = t("emptyFile");
    ui.installBtn.disabled = true;
    return;
  }
  // APK files are ZIP archives: they start with the bytes "PK\x03\x04".
  try {
    const head = new Uint8Array(await file.slice(0, 4).arrayBuffer());
    if (!(head[0] === 0x50 && head[1] === 0x4b && head[2] === 0x03 && head[3] === 0x04)) {
      ui.fileStatus.textContent = t("notRealApk", { file: file.name });
      ui.installBtn.disabled = true;
      return;
    }
  } catch {
    // If reading the head fails, let the installation attempt surface the error.
  }
  state.file = file;
  ui.fileStatus.textContent = t("selected", { file: file.name, size: formatMB(file.size) });
  if (state.adb) {
    setDisabled(ui.stepInstall, false);
    ui.installBtn.disabled = false;
  }
}

// ---------------------------------------------------------------- install

async function install() {
  if (!state.adb || !state.file || state.installing) {
    return;
  }
  const file = state.file;
  state.installing = true;
  clearResults();
  ui.installBtn.disabled = true;
  ui.apkInput.disabled = true;
  ui.progressWrap.hidden = false;
  ui.installProgress.value = 0;
  ui.installStatus.textContent = t("copying", { done: formatMB(0), total: formatMB(file.size) });

  let transferred = 0;
  const progress = new TransformStream({
    transform(chunk, controller) {
      transferred += chunk.byteLength;
      const percent = Math.min(99, Math.round((transferred / file.size) * 100));
      ui.installProgress.value = percent;
      if (transferred >= file.size) {
        ui.installStatus.textContent = t("installingOnPhone");
        ui.installProgress.removeAttribute("value"); // indeterminate
      } else {
        ui.installStatus.textContent = t("copying", { done: formatMB(transferred), total: formatMB(file.size) });
      }
      controller.enqueue(chunk);
    },
  });

  try {
    const pm = new PackageManager(state.adb);
    // installStream = "adb install -r": streams the APK straight to the phone's
    // package manager. "-r" (keep app data when updating) is Tango's default.
    await pm.installStream(file.size, file.stream().pipeThrough(progress));
    ui.progressWrap.hidden = true;
    ui.resultSuccess.hidden = false;
  } catch (error) {
    ui.progressWrap.hidden = true;
    showError(explainError(error), String(error && error.stack ? error.stack : error));
  } finally {
    state.installing = false;
    ui.apkInput.disabled = !state.adb;
    ui.installBtn.disabled = !(state.adb && state.file);
  }
}

// ---------------------------------------------------------------- startup

function main() {
  setConnected(false);
  if (!window.isSecureContext || !state.manager) {
    ui.unsupported.hidden = false;
    ui.connectBtn.disabled = true;
    return;
  }
  ui.connectBtn.addEventListener("click", connect);
  ui.disconnectBtn.addEventListener("click", disconnect);
  ui.apkInput.addEventListener("change", updateFileState);
  ui.installBtn.addEventListener("click", install);
}

main();
</script>
