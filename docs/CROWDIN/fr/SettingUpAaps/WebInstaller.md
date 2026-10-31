(web-installer)=

# Installateur web AAPS

Installez l'APK d'**AAPS** que vous avez compilé sur votre téléphone Android, directement depuis ce navigateur, avec un câble USB. Pas de ligne de commande, rien à télécharger. Installées de cette façon (la méthode ADB), les applications sont **exemptées de la vérification des développeurs Android de Google**.

```{admonition} This page runs entirely in your browser
:class: tip

Votre fichier APK et les données de votre téléphone ne quittent jamais cet ordinateur : la page ne peut envoyer de données nulle part (sa *Content-Security-Policy* bloque tous les envois ; vous pouvez le vérifier dans les outils de développement du navigateur, onglet Réseau). Utilisez cette page uniquement à son adresse officielle, avec le lien de [Transfert et installation de AAPS sur votre smartphone](#android-developer-verification-web) dans la documentation **AAPS**.
```

<noscript>

**JavaScript est désactivé.** Cette page a besoin de JavaScript pour communiquer avec votre téléphone.

</noscript>

<div id="aapsi-unsupported" class="aapsi-box aapsi-error" hidden>

**Ce navigateur ne peut pas communiquer avec les appareils USB.** Ouvrez cette page dans **Google Chrome**, **Microsoft Edge** ou **Opera**, sur un ordinateur ou un appareil Android. Firefox, Safari et tous les navigateurs de l'iPhone ne prennent pas en charge WebUSB.

</div>

(web-installer-prepare)=

## Étape 1 – Avant de commencer

- **Activez le débogage USB** sur le téléphone (réglage unique) :
  - Allez dans **Paramètres** > **À propos du téléphone** et appuyez sept fois sur **Numéro de build**, jusqu'à ce que le téléphone confirme que vous êtes développeur.
  - De retour dans les **Paramètres** principaux, ouvrez **Options pour les développeurs** et activez le **Débogage USB**.
- Connectez le téléphone avec un **câble USB capable de transférer des données** (certains câbles de charge ne peuvent pas transférer de données : si le téléphone n'est jamais détecté, essayez un autre câble).
- **Fermez Android Studio** et tout autre programme qui utilise ADB : un seul programme à la fois peut communiquer avec le téléphone.
- Préparez votre **fichier APK d'AAPS** sur cet ordinateur (pour la compilation dans le navigateur, téléchargez-le d'abord depuis votre Google Drive).

Pas d'ordinateur ? Cette page fonctionne aussi depuis Chrome sur *un autre téléphone Android*, connecté avec un câble USB-C vers USB-C.

(web-installer-connect)=

## Étape 2 – Connecter votre téléphone

Cliquez sur le bouton, puis choisissez votre téléphone dans la liste affichée par le navigateur.

<button class="aapsi-btn" type="button" id="aapsi-connect-btn">Connecter le téléphone</button> <button class="aapsi-btn aapsi-secondary" type="button" id="aapsi-disconnect-btn" hidden>Déconnecter</button>

<span class="aapsi-status" id="aapsi-connect-status"></span>

<div class="aapsi-box aapsi-warn" id="aapsi-authorize-hint" hidden>

**Regardez maintenant votre téléphone :** appuyez sur **Autoriser** dans le message « Autoriser le débogage USB ? », et cochez *« Toujours autoriser cet ordinateur »*. Vous ne le voyez pas ? Déverrouillez l'écran du téléphone, ou débranchez puis rebranchez le câble.

</div>

<div id="aapsi-connect-help" hidden>

```{admonition} Le téléphone n'apparaît pas, ou la connexion échoue ?
:class: note

- Vérifiez que le **Débogage USB** est activé ([étape 1](#web-installer-prepare)) et que le câble est un câble de données.
- Fermez **Android Studio**, ou lancez `adb kill-server` si ADB est installé, puis débranchez et rebranchez le téléphone.
- Sous Windows, un pilote USB du fabricant (OEM) installé pour votre téléphone peut aussi bloquer la connexion : fermez les autres outils Android et réessayez.
```

</div>

(web-installer-file)=

## Étape 3 – Choisir votre fichier APK d'AAPS

<input type="file" id="aapsi-apk-input" accept=".apk" disabled />

<span class="aapsi-status" id="aapsi-file-status"></span>

(web-installer-install)=

## Étape 4 – Installer

Vous mettez à jour un **AAPS** déjà installé ? Tous ses paramètres et tout son historique sont conservés, exactement comme avec `adb install -r`.

<button class="aapsi-btn" type="button" id="aapsi-install-btn" disabled>Installer sur le téléphone</button>

<div id="aapsi-progress-wrap" hidden>

<span class="aapsi-status" id="aapsi-install-status"></span>
<progress id="aapsi-install-progress" max="100" value="0"></progress>

</div>

<div class="aapsi-box aapsi-success" id="aapsi-result-success" hidden>

**AAPS est installé.** Vous pouvez débrancher le téléphone. Si c'était votre première installation, continuez avec l'[Assistant de configuration](SetupWizard.md).

</div>

<div class="aapsi-box aapsi-error" id="aapsi-result-error" hidden>

<span id="aapsi-error-message"></span>

Détails techniques :

<pre id="aapsi-error-details"></pre>

</div>

----

Fait partie de la documentation **AAPS**. Basé sur les bibliothèques open source [Tango (ya-webadb)](https://github.com/yume-chan/ya-webadb) (licence MIT). Source de la page et instructions de compilation : [openaps/AndroidAPSdocs](https://github.com/openaps/AndroidAPSdocs).

**AAPS** est un système DIY (fait soi-même), pas un produit commercial : vous le compilez, vous l'installez, vous en êtes responsable. Cette page est fournie par la communauté sans aucune garantie.

<div id="aapsi-msgs" hidden>

- <span data-aapsi-msg="noDetails">(pas d'autres détails)</span>
- <span data-aapsi-msg="errSignature">Cet APK a été compilé avec une autre clé de signature que l'AAPS déjà installé sur le téléphone. Utilisez le même keystore qu'avant, ou exportez vos paramètres AAPS et désinstallez d'abord l'ancien AAPS (la désinstallation efface tous ses paramètres et tout son historique : exportez d'abord !).</span>
- <span data-aapsi-msg="errDowngrade">Le téléphone a déjà une version plus récente de cette application. Pour revenir à une version plus ancienne, exportez vos paramètres et désinstallez d'abord l'application actuelle.</span>
- <span data-aapsi-msg="errStorage">Il n'y a pas assez d'espace de stockage libre sur le téléphone. Libérez de l'espace et réessayez.</span>
- <span data-aapsi-msg="errInvalidApk">Le téléphone ne reconnaît pas ce fichier comme un APK valide. Vérifiez que vous avez choisi le bon fichier et que le téléchargement est complet.</span>
- <span data-aapsi-msg="errOldSdk">La version d'Android de ce téléphone est trop ancienne pour cet APK.</span>
- <span data-aapsi-msg="errCanceled">L'installation a été refusée sur le téléphone. Regardez l'écran du téléphone et autorisez l'installation quand c'est demandé.</span>
- <span data-aapsi-msg="errBusy">Un autre programme utilise la connexion ADB du téléphone. Fermez Android Studio (ou lancez « adb kill-server »), débranchez puis rebranchez le câble, puis réessayez.</span>
- <span data-aapsi-msg="errLost">La connexion avec le téléphone a été perdue. Vérifiez le câble, puis reconnectez-vous.</span>
- <span data-aapsi-msg="errGeneric">L'installation a échoué. Voir les détails techniques ci-dessous, et demandez de l'aide sur les canaux de la communauté AAPS si nécessaire.</span>
- <span data-aapsi-msg="errDisconnectedDuringInstall">Le téléphone a été déconnecté pendant l'installation. Reconnectez-le et réessayez : rien n'est cassé.</span>
- <span data-aapsi-msg="waitingPick">En attente du choix d'un appareil…</span>
- <span data-aapsi-msg="noDevice">Aucun appareil choisi. Le débogage USB est-il activé, et le câble est-il un câble de données ?</span>
- <span data-aapsi-msg="connecting">Connexion en cours…</span>
- <span data-aapsi-msg="phoneDisconnected">Le téléphone a été déconnecté.</span>
- <span data-aapsi-msg="androidDevice">Appareil Android</span>
- <span data-aapsi-msg="connectedTo">Connecté à {name}.</span>
- <span data-aapsi-msg="couldNotConnect">Connexion impossible.</span>
- <span data-aapsi-msg="disconnected">Déconnecté.</span>
- <span data-aapsi-msg="notApk">« {file} » n'est pas un fichier .apk. Choisissez l'APK d'AAPS que vous avez compilé.</span>
- <span data-aapsi-msg="emptyFile">Ce fichier est vide. Vérifiez le téléchargement et choisissez-le de nouveau.</span>
- <span data-aapsi-msg="notRealApk">« {file} » ne ressemble pas à un vrai fichier APK. Avez-vous choisi le bon fichier ?</span>
- <span data-aapsi-msg="selected">Sélectionné : {file} ({size})</span>
- <span data-aapsi-msg="copying">Copie vers le téléphone… {done} sur {total}</span>
- <span data-aapsi-msg="installingOnPhone">Installation sur le téléphone… (cela peut prendre une minute)</span>
- <span data-aapsi-msg="megabytes">{n} Mo</span>

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
