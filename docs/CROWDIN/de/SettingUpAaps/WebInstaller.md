(web-installer)=

# AAPS-Web-Installer

Installiere die **AAPS**-APK, die Du erstellt hast, direkt aus diesem Browser über ein USB-Kabel auf Deinem Android-Smartphone. Keine Kommandozeile, kein Download. Auf diesem Weg (dem ADB-Weg) installierte Apps sind **von Googles Android-Entwicklerverifizierung ausgenommen**.

```{admonition} This page runs entirely in your browser
:class: tip

Deine APK-Datei und die Daten Deines Smartphones verlassen diesen Computer nie: Die Seite kann keine Daten irgendwohin senden (ihre *Content-Security-Policy* blockiert alle Uploads; Du kannst das in den Entwicklertools des Browsers im Reiter „Netzwerk“ prüfen). Verwende diese Seite nur unter ihrer offiziellen Adresse, die in der **AAPS**-Dokumentation unter [AAPS auf Dein Smartphone übertragen und installieren](#android-developer-verification-web) verlinkt ist.
```

<noscript>

**JavaScript ist deaktiviert.** Diese Seite braucht JavaScript, um mit Deinem Smartphone zu kommunizieren.

</noscript>

<div id="aapsi-unsupported" class="aapsi-box aapsi-error" hidden>

**Dieser Browser kann nicht mit USB-Geräten kommunizieren.** Öffne diese Seite bitte in **Google Chrome**, **Microsoft Edge** oder **Opera**, auf einem Computer oder einem Android-Gerät. Firefox, Safari und alle Browser auf dem iPhone unterstützen WebUSB nicht.

</div>

(web-installer-prepare)=

## Schritt 1 – Bevor Du anfängst

- **Aktiviere USB-Debugging** auf dem Smartphone (einmalige Einrichtung):
  - Gehe zu **Einstellungen** > **Über das Telefon** und tippe siebenmal auf **Build-Nummer**, bis das Smartphone bestätigt, dass Du jetzt Entwickler bist.
  - Öffne zurück in den **Einstellungen** die **Entwickleroptionen** und schalte **USB-Debugging** ein.
- Verbinde das Smartphone mit einem **USB-Kabel, das Daten übertragen kann** (manche Ladekabel können keine Daten übertragen: Wird das Smartphone nie erkannt, probiere ein anderes Kabel).
- **Schließe Android Studio** und alle anderen Programme, die ADB verwenden: Es kann immer nur ein Programm mit dem Smartphone kommunizieren.
- Halte Deine **AAPS-APK-Datei** auf diesem Computer bereit (beim Browser Build lade sie vorher aus Deinem Google Drive herunter).

Kein Computer? Diese Seite funktioniert auch in Chrome auf *einem anderen Android-Smartphone*, das über ein Kabel USB-C auf USB-C verbunden ist.

(web-installer-connect)=

## Schritt 2 – Smartphone verbinden

Klicke auf den Knopf und wähle dann Dein Smartphone in der Liste aus, die der Browser anzeigt.

<button class="aapsi-btn" type="button" id="aapsi-connect-btn">Smartphone verbinden</button> <button class="aapsi-btn aapsi-secondary" type="button" id="aapsi-disconnect-btn" hidden>Trennen</button>

<span class="aapsi-status" id="aapsi-connect-status"></span>

<div class="aapsi-box aapsi-warn" id="aapsi-authorize-hint" hidden>

**Schau jetzt auf Dein Smartphone:** Tippe in der Meldung „USB-Debugging zulassen?“ auf **Zulassen** und setze den Haken bei *„Von diesem Computer immer zulassen“*. Nichts zu sehen? Entsperre den Bildschirm des Smartphones oder zieh das Kabel ab und steck es wieder ein.

</div>

<div id="aapsi-connect-help" hidden>

```{admonition} Das Smartphone wird nicht angezeigt oder die Verbindung schlägt fehl?
:class: note

- Prüfe, ob **USB-Debugging** eingeschaltet ist ([Schritt 1](#web-installer-prepare)) und ob das Kabel ein Datenkabel ist.
- Schließe **Android Studio** oder führe `adb kill-server` aus, falls Du ADB installiert hast, und zieh dann das Smartphone ab und steck es wieder an.
- Unter Windows kann auch ein USB-Treiber des Herstellers (OEM), der für Dein Smartphone installiert ist, die Verbindung belegen: Trenne andere Android-Tools und versuche es erneut.
```

</div>

(web-installer-file)=

## Schritt 3 – AAPS-APK-Datei auswählen

<input type="file" id="aapsi-apk-input" accept=".apk" disabled />

<span class="aapsi-status" id="aapsi-file-status"></span>

(web-installer-install)=

## Schritt 4 – Installieren

Du aktualisierst ein vorhandenes **AAPS**? Alle Einstellungen und der Verlauf bleiben erhalten, genau wie bei `adb install -r`.

<button class="aapsi-btn" type="button" id="aapsi-install-btn" disabled>Auf dem Smartphone installieren</button>

<div id="aapsi-progress-wrap" hidden>

<span class="aapsi-status" id="aapsi-install-status"></span>
<progress id="aapsi-install-progress" max="100" value="0"></progress>

</div>

<div class="aapsi-box aapsi-success" id="aapsi-result-success" hidden>

**AAPS ist installiert.** Du kannst das Smartphone abstecken. Wenn das Deine erste Installation war, mach mit dem [Einrichtungsassistenten](SetupWizard.md) weiter.

</div>

<div class="aapsi-box aapsi-error" id="aapsi-result-error" hidden>

<span id="aapsi-error-message"></span>

Technische Details:

<pre id="aapsi-error-details"></pre>

</div>

----

Teil der **AAPS**-Dokumentation. Basiert auf den Open-Source-Bibliotheken [Tango (ya-webadb)](https://github.com/yume-chan/ya-webadb) (MIT-Lizenz). Quelltext der Seite und Anleitung zum Erstellen: [openaps/AndroidAPSdocs](https://github.com/openaps/AndroidAPSdocs).

**AAPS** ist ein DIY-System, kein kommerzielles Produkt: Du erstellst es, Du installierst es, Du bist dafür verantwortlich. Diese Seite wird von der Community ohne jede Gewährleistung bereitgestellt.

<div id="aapsi-msgs" hidden>

- <span data-aapsi-msg="noDetails">(keine weiteren Details)</span>
- <span data-aapsi-msg="errSignature">Diese APK wurde mit einem anderen Signaturschlüssel erstellt als das AAPS, das bereits auf dem Smartphone installiert ist. Verwende denselben Keystore wie bisher oder exportiere Deine AAPS-Einstellungen und deinstalliere zuerst das alte AAPS (beim Deinstallieren gehen alle Einstellungen und der Verlauf verloren: vorher exportieren!).</span>
- <span data-aapsi-msg="errDowngrade">Auf dem Smartphone ist bereits eine neuere Version dieser App installiert. Um zu einer älteren Version zurückzukehren, exportiere Deine Einstellungen und deinstalliere zuerst die aktuelle App.</span>
- <span data-aapsi-msg="errStorage">Auf dem Smartphone ist nicht genug Speicherplatz frei. Gib etwas Speicherplatz frei und versuche es erneut.</span>
- <span data-aapsi-msg="errInvalidApk">Das Smartphone erkennt diese Datei nicht als gültige APK. Prüfe, ob Du die richtige Datei ausgewählt hast und ob der Download vollständig ist.</span>
- <span data-aapsi-msg="errOldSdk">Die Android-Version auf diesem Smartphone ist zu alt für diese APK.</span>
- <span data-aapsi-msg="errCanceled">Die Installation wurde auf dem Smartphone abgelehnt. Achte auf den Bildschirm des Smartphones und erlaube die Installation, wenn Du gefragt wirst.</span>
- <span data-aapsi-msg="errBusy">Ein anderes Programm verwendet die ADB-Verbindung des Smartphones. Schließe Android Studio (oder führe „adb kill-server“ aus), zieh das Kabel ab und steck es wieder ein und versuche es dann erneut.</span>
- <span data-aapsi-msg="errLost">Die Verbindung zum Smartphone wurde unterbrochen. Prüfe das Kabel und verbinde dann erneut.</span>
- <span data-aapsi-msg="errGeneric">Die Installation ist fehlgeschlagen. Sieh Dir die technischen Details unten an und bitte bei Bedarf in den Community-Kanälen von AAPS um Hilfe.</span>
- <span data-aapsi-msg="errDisconnectedDuringInstall">Die Verbindung zum Smartphone wurde während der Installation getrennt. Verbinde es erneut und versuche es noch einmal: Es ist nichts kaputtgegangen.</span>
- <span data-aapsi-msg="waitingPick">Warten auf die Auswahl eines Geräts …</span>
- <span data-aapsi-msg="noDevice">Kein Gerät ausgewählt. Ist USB-Debugging aktiviert und ist das Kabel ein Datenkabel?</span>
- <span data-aapsi-msg="connecting">Verbindung wird hergestellt …</span>
- <span data-aapsi-msg="phoneDisconnected">Die Verbindung zum Smartphone wurde getrennt.</span>
- <span data-aapsi-msg="androidDevice">Android-Gerät</span>
- <span data-aapsi-msg="connectedTo">Verbunden mit {name}.</span>
- <span data-aapsi-msg="couldNotConnect">Verbindung nicht möglich.</span>
- <span data-aapsi-msg="disconnected">Getrennt.</span>
- <span data-aapsi-msg="notApk">„{file}“ ist keine .apk-Datei. Bitte wähle die AAPS-APK aus, die Du erstellt hast.</span>
- <span data-aapsi-msg="emptyFile">Diese Datei ist leer. Bitte prüfe den Download und wähle die Datei erneut aus.</span>
- <span data-aapsi-msg="notRealApk">„{file}“ sieht nicht wie eine echte APK-Datei aus. Hast Du die richtige Datei ausgewählt?</span>
- <span data-aapsi-msg="selected">Ausgewählt: {file} ({size})</span>
- <span data-aapsi-msg="copying">Wird auf das Smartphone kopiert … {done} von {total}</span>
- <span data-aapsi-msg="installingOnPhone">Wird auf dem Smartphone installiert … (das kann eine Minute dauern)</span>
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
