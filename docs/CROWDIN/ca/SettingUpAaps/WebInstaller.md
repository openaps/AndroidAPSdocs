(web-installer)=

# Instal·lador web d'AAPS

Instal·leu l'APK d'**AAPS** que heu compilat al vostre telèfon Android, directament des d'aquest navegador, amb un cable USB. Sense línia d'ordres, sense res per descarregar. Les aplicacions instal·lades d'aquesta manera (la via ADB) **no necessiten la verificació de desenvolupadors d'Android de Google**.

```{admonition} This page runs entirely in your browser
:class: tip

El vostre fitxer APK i les dades del vostre telèfon no surten mai d'aquest ordinador: la pàgina no pot enviar dades enlloc (la seva *Content-Security-Policy* bloqueja tots els enviaments; ho podeu comprovar a les eines per a desenvolupadors del navegador, pestanya «Network»). Utilitzeu aquesta pàgina només a la seva adreça oficial, enllaçada des de [Transferir i instal·lar AAPS al vostre telèfon](#android-developer-verification-web) a la documentació d'**AAPS**.
```

<noscript>

**JavaScript està desactivat.** Aquesta pàgina necessita JavaScript per comunicar-se amb el vostre telèfon.

</noscript>

<div id="aapsi-unsupported" class="aapsi-box aapsi-error" hidden>

**Aquest navegador no es pot comunicar amb dispositius USB.** Obriu aquesta pàgina amb **Google Chrome**, **Microsoft Edge** o **Opera**, en un ordinador o en un dispositiu Android. Firefox, Safari i tots els navegadors d'iPhone no admeten WebUSB.

</div>

(web-installer-prepare)=

## Pas 1 – Abans de començar

- **Activeu la depuració per USB** al telèfon (només cal fer-ho una vegada):
  - Aneu a **Configuració** > **Informació del telèfon** i toqueu **Número de compilació** set vegades, fins que el telèfon confirmi que sou desenvolupadors.
  - Torneu a la pantalla principal de **Configuració**, obriu **Opcions per a desenvolupadors** i activeu **Depuració per USB**.
- Connecteu el telèfon amb un **cable USB que transmeti dades** (alguns cables de càrrega no poden transmetre dades: si el telèfon no es detecta mai, proveu un altre cable).
- **Tanqueu Android Studio** i qualsevol altre programa que faci servir ADB: només un programa pot comunicar-se amb el telèfon alhora.
- Tingueu a punt el vostre **fitxer APK d'AAPS** en aquest ordinador (per a la compilació al navegador, primer descarregueu-lo del vostre Google Drive).

No teniu ordinador? Aquesta pàgina també funciona des de Chrome en *un altre telèfon Android*, connectat amb un cable USB-C a USB-C.

(web-installer-connect)=

## Pas 2 – Connecteu el vostre telèfon

Feu clic al botó i després trieu el vostre telèfon a la llista que mostra el navegador.

<button class="aapsi-btn" type="button" id="aapsi-connect-btn">Connectar telèfon</button> <button class="aapsi-btn aapsi-secondary" type="button" id="aapsi-disconnect-btn" hidden>Desconnectar</button>

<span class="aapsi-status" id="aapsi-connect-status"></span>

<div class="aapsi-box aapsi-warn" id="aapsi-authorize-hint" hidden>

**Mireu ara el vostre telèfon:** toqueu **Permet** al missatge «Vols permetre la depuració per USB?» i marqueu *«Permet sempre des d'aquest ordinador»*. No el veieu? Desbloquegeu la pantalla del telèfon, o desconnecteu i torneu a connectar el cable.

</div>

<div id="aapsi-connect-help" hidden>

```{admonition} El telèfon no apareix o la connexió falla?
:class: note

- Comproveu que la **Depuració per USB** estigui activada ([pas 1](#web-installer-prepare)) i que el cable sigui un cable de dades.
- Tanqueu **Android Studio**, o executeu `adb kill-server` si teniu ADB instal·lat, i després desconnecteu i torneu a connectar el telèfon.
- A Windows, un controlador USB del fabricant (OEM) instal·lat per al vostre telèfon també pot ocupar la connexió: desconnecteu altres eines d'Android i torneu-ho a provar.
```

</div>

(web-installer-file)=

## Pas 3 – Trieu el vostre fitxer APK d'AAPS

<input type="file" id="aapsi-apk-input" accept=".apk" disabled />

<span class="aapsi-status" id="aapsi-file-status"></span>

(web-installer-install)=

## Pas 4 – Instal·lar

Actualitzeu un **AAPS** que ja existeix? Es conserven tota la configuració i tot l'historial, exactament com amb `adb install -r`.

<button class="aapsi-btn" type="button" id="aapsi-install-btn" disabled>Instal·lar al telèfon</button>

<div id="aapsi-progress-wrap" hidden>

<span class="aapsi-status" id="aapsi-install-status"></span>
<progress id="aapsi-install-progress" max="100" value="0"></progress>

</div>

<div class="aapsi-box aapsi-success" id="aapsi-result-success" hidden>

**AAPS està instal·lat.** Podeu desconnectar el telèfon. Si era la vostra primera instal·lació, continueu amb l'[Assistent de configuració d'AAPS](SetupWizard.md).

</div>

<div class="aapsi-box aapsi-error" id="aapsi-result-error" hidden>

<span id="aapsi-error-message"></span>

Detalls tècnics:

<pre id="aapsi-error-details"></pre>

</div>

----

Part de la documentació d'**AAPS**. Fet amb les biblioteques de codi obert [Tango (ya-webadb)](https://github.com/yume-chan/ya-webadb) (llicència MIT). Codi font de la pàgina i instruccions de compilació: [openaps/AndroidAPSdocs](https://github.com/openaps/AndroidAPSdocs).

**AAPS** és un sistema DIY (fet per un mateix), no un producte comercial: vosaltres el compileu, vosaltres l'instal·leu, vosaltres en sou responsables. La comunitat ofereix aquesta pàgina sense cap garantia.

<div id="aapsi-msgs" hidden>

- <span data-aapsi-msg="noDetails">(no hi ha més detalls)</span>
- <span data-aapsi-msg="errSignature">Aquest APK s'ha compilat amb una clau de signatura diferent de la de l'AAPS que ja està instal·lat al telèfon. Feu servir el mateix magatzem de claus que abans, o exporteu la configuració d'AAPS i desinstal·leu primer l'AAPS antic (en desinstal·lar-lo es perd tota la configuració i l'historial: exporteu primer!).</span>
- <span data-aapsi-msg="errDowngrade">El telèfon ja té una versió més nova d'aquesta aplicació. Per tornar a una versió més antiga, exporteu la configuració i desinstal·leu primer l'aplicació actual.</span>
- <span data-aapsi-msg="errStorage">No hi ha prou espai lliure al telèfon. Allibereu una mica d'espai i torneu-ho a provar.</span>
- <span data-aapsi-msg="errInvalidApk">El telèfon no reconeix aquest fitxer com un APK vàlid. Comproveu que heu seleccionat el fitxer correcte i que la descàrrega s'ha completat.</span>
- <span data-aapsi-msg="errOldSdk">La versió d'Android d'aquest telèfon és massa antiga per a aquest APK.</span>
- <span data-aapsi-msg="errCanceled">La instal·lació s'ha rebutjat al telèfon. Mireu la pantalla del telèfon i permeteu la instal·lació quan us ho demani.</span>
- <span data-aapsi-msg="errBusy">Un altre programa està fent servir la connexió ADB del telèfon. Tanqueu Android Studio (o executeu «adb kill-server»), desconnecteu i torneu a connectar el cable, i després torneu-ho a provar.</span>
- <span data-aapsi-msg="errLost">S'ha perdut la connexió amb el telèfon. Comproveu el cable i torneu a connectar.</span>
- <span data-aapsi-msg="errGeneric">La instal·lació ha fallat. Mireu els detalls tècnics de més avall i, si cal, demaneu ajuda als canals de la comunitat d'AAPS.</span>
- <span data-aapsi-msg="errDisconnectedDuringInstall">El telèfon s'ha desconnectat durant la instal·lació. Torneu-lo a connectar i torneu-ho a provar: no s'ha espatllat res.</span>
- <span data-aapsi-msg="waitingPick">Esperant que trieu un dispositiu…</span>
- <span data-aapsi-msg="noDevice">No s'ha seleccionat cap dispositiu. Està activada la depuració per USB, i el cable és un cable de dades?</span>
- <span data-aapsi-msg="connecting">Connectant…</span>
- <span data-aapsi-msg="phoneDisconnected">El telèfon s'ha desconnectat.</span>
- <span data-aapsi-msg="androidDevice">Dispositiu Android</span>
- <span data-aapsi-msg="connectedTo">Connectat a {name}.</span>
- <span data-aapsi-msg="couldNotConnect">No s'ha pogut connectar.</span>
- <span data-aapsi-msg="disconnected">Desconnectat.</span>
- <span data-aapsi-msg="notApk">«{file}» no és un fitxer .apk. Seleccioneu l'APK d'AAPS que heu compilat.</span>
- <span data-aapsi-msg="emptyFile">Aquest fitxer és buit. Comproveu la descàrrega i torneu-lo a seleccionar.</span>
- <span data-aapsi-msg="notRealApk">«{file}» no sembla un fitxer APK real. Heu seleccionat el fitxer correcte?</span>
- <span data-aapsi-msg="selected">Seleccionat: {file} ({size})</span>
- <span data-aapsi-msg="copying">Copiant al telèfon… {done} de {total}</span>
- <span data-aapsi-msg="installingOnPhone">Instal·lant al telèfon… (pot trigar un minut)</span>
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
