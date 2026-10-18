(web-installer)=

# AAPS web installer

Install the **AAPS** APK you built onto your Android phone, straight from this browser, over a USB cable. No command line, nothing to download. Installed this way (the ADB way), apps are **exempt from Google's Android developer verification**.

```{admonition} This page runs entirely in your browser
:class: tip

Your APK file and your phone's data never leave this computer: the page cannot send data anywhere (its *Content-Security-Policy* blocks all uploads; you can check this in the browser's developer tools, Network tab). Only ever use this page at its official address, linked from [Transferring and installing AAPS](#android-developer-verification-web) in the **AAPS** documentation.
```

<noscript>

**JavaScript is disabled.** This page needs JavaScript to talk to your phone.

</noscript>

<div id="aapsi-unsupported" class="aapsi-box aapsi-error" hidden>

**This browser cannot talk to USB devices.** Please open this page in **Google Chrome**, **Microsoft Edge** or **Opera**, on a computer or an Android device. Firefox, Safari and all iPhone browsers do not support WebUSB.

</div>

(web-installer-prepare)=

## Step 1 – Before you start

- **Enable USB debugging** on the phone (one-time setup):
  - Go to **Settings** > **About phone** and tap **Build number** seven times, until the phone confirms you are a developer.
  - Back in the main **Settings**, open **Developer options** and switch on **USB debugging**.
- Connect the phone with a **data-capable USB cable** (some charging cables cannot transfer data: if the phone is never detected, try another cable).
- **Close Android Studio** and any other program that uses ADB: only one program can talk to the phone at a time.
- Have your **AAPS APK file** ready on this computer (for the browser build, download it from your Google Drive first).

No computer? This page also works from Chrome on *another Android phone*, connected with a USB-C to USB-C cable.

(web-installer-connect)=

## Step 2 – Connect your phone

Click the button, then pick your phone in the list the browser shows.

<button class="aapsi-btn" type="button" id="aapsi-connect-btn">Connect phone</button> <button class="aapsi-btn aapsi-secondary" type="button" id="aapsi-disconnect-btn" hidden>Disconnect</button>

<span class="aapsi-status" id="aapsi-connect-status"></span>

<div class="aapsi-box aapsi-warn" id="aapsi-authorize-hint" hidden>

**Look at your phone now:** tap **Allow** on the "Allow USB debugging?" message, and tick *"Always allow from this computer"*. Don't see it? Unlock the phone's screen, or unplug and replug the cable.

</div>

<div id="aapsi-connect-help" hidden>

```{admonition} The phone doesn't show up, or connecting fails?
:class: note

- Check that **USB debugging** is on ([step 1](#web-installer-prepare)) and the cable is a data cable.
- Close **Android Studio**, or run `adb kill-server` if you have ADB installed, then unplug and replug the phone.
- On Windows, an OEM USB driver installed for your phone can also hold the connection: unplug other Android tools and try again.
```

</div>

(web-installer-file)=

## Step 3 – Choose your AAPS APK file

<input type="file" id="aapsi-apk-input" accept=".apk" disabled>

<span class="aapsi-status" id="aapsi-file-status"></span>

(web-installer-install)=

## Step 4 – Install

Updating an existing **AAPS**? All its settings and history are kept, exactly like `adb install -r`.

<button class="aapsi-btn" type="button" id="aapsi-install-btn" disabled>Install on phone</button>

<div id="aapsi-progress-wrap" hidden>

<span class="aapsi-status" id="aapsi-install-status"></span>
<progress id="aapsi-install-progress" max="100" value="0"></progress>

</div>

<div class="aapsi-box aapsi-success" id="aapsi-result-success" hidden>

**AAPS is installed.** You can unplug the phone. If this was your first installation, continue with the [Setup Wizard](SetupWizard.md).

</div>

<div class="aapsi-box aapsi-error" id="aapsi-result-error" hidden>

<span id="aapsi-error-message"></span>

Technical details:

<pre id="aapsi-error-details"></pre>

</div>

----

Part of the **AAPS** documentation. Built on the open-source [Tango (ya-webadb)](https://github.com/yume-chan/ya-webadb) libraries (MIT license). Page source and build instructions: [openaps/AndroidAPSdocs](https://github.com/openaps/AndroidAPSdocs).

**AAPS** is a DIY system, not a commercial product: you build it, you install it, you are responsible for it. This page is provided by the community without any warranty.

<div id="aapsi-msgs" hidden>

- <span data-aapsi-msg="noDetails">(no further details)</span>
- <span data-aapsi-msg="errSignature">This APK was built with a different signing key than the AAPS already installed on the phone. Use the same keystore as before, or export your AAPS settings and uninstall the old AAPS first (uninstalling loses all its settings and history: export first!).</span>
- <span data-aapsi-msg="errDowngrade">The phone already has a newer version of this app. To go back to an older version, export your settings and uninstall the current app first.</span>
- <span data-aapsi-msg="errStorage">There is not enough free storage on the phone. Free up some space and try again.</span>
- <span data-aapsi-msg="errInvalidApk">The phone does not recognize this file as a valid APK. Check that you selected the right file and that the download completed.</span>
- <span data-aapsi-msg="errOldSdk">The Android version on this phone is too old for this APK.</span>
- <span data-aapsi-msg="errCanceled">The installation was declined on the phone. Watch the phone's screen and allow the installation when asked.</span>
- <span data-aapsi-msg="errBusy">Another program is using the phone's ADB connection. Close Android Studio (or run "adb kill-server"), unplug and replug the cable, then try again.</span>
- <span data-aapsi-msg="errLost">The connection to the phone was lost. Check the cable, then connect again.</span>
- <span data-aapsi-msg="errGeneric">The installation failed. See the technical details below, and ask for help on the AAPS community channels if needed.</span>
- <span data-aapsi-msg="errDisconnectedDuringInstall">The phone was disconnected during the installation. Reconnect it and try again: nothing is broken.</span>
- <span data-aapsi-msg="waitingPick">Waiting for you to pick a device…</span>
- <span data-aapsi-msg="noDevice">No device selected. Is USB debugging enabled, and is the cable a data cable?</span>
- <span data-aapsi-msg="connecting">Connecting…</span>
- <span data-aapsi-msg="phoneDisconnected">The phone was disconnected.</span>
- <span data-aapsi-msg="androidDevice">Android device</span>
- <span data-aapsi-msg="connectedTo">Connected to {name}.</span>
- <span data-aapsi-msg="couldNotConnect">Could not connect.</span>
- <span data-aapsi-msg="disconnected">Disconnected.</span>
- <span data-aapsi-msg="notApk">"{file}" is not an .apk file. Please select the AAPS APK you built.</span>
- <span data-aapsi-msg="emptyFile">This file is empty. Please check the download and select it again.</span>
- <span data-aapsi-msg="notRealApk">"{file}" does not look like a real APK file. Did you select the right file?</span>
- <span data-aapsi-msg="selected">Selected: {file} ({size})</span>
- <span data-aapsi-msg="copying">Copying to phone… {done} of {total}</span>
- <span data-aapsi-msg="installingOnPhone">Installing on the phone… (this can take a minute)</span>
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
