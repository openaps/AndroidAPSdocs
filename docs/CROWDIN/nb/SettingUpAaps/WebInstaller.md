(web-installer)=

# AAPS web-installer

Installer **AAPS**-APK-filen du har bygget, på Android-telefonen din, rett fra denne nettleseren, over en USB-kabel. Ingen kommandolinje, ingenting å laste ned. Apper som installeres på denne måten (ADB-måten), er **unntatt fra Googles utviklerverifisering for Android**.

```{admonition} This page runs entirely in your browser
:class: tip

APK-filen din og telefonens data forlater aldri denne datamaskinen: siden kan ikke sende data noe sted (dens *Content-Security-Policy* blokkerer alle opplastinger; du kan sjekke dette i nettleserens utviklerverktøy, fanen Network). Bruk alltid denne siden bare på den offisielle adressen, lenket fra [Overføre og installere AAPS](#android-developer-verification-web) i **AAPS**-dokumentasjonen.
```

<noscript>

**JavaScript er slått av.** Denne siden trenger JavaScript for å snakke med telefonen din.

</noscript>

<div id="aapsi-unsupported" class="aapsi-box aapsi-error" hidden>

**Denne nettleseren kan ikke snakke med USB-enheter.** Åpne denne siden i **Google Chrome**, **Microsoft Edge** eller **Opera**, på en datamaskin eller en Android-enhet. Firefox, Safari og alle nettlesere på iPhone støtter ikke WebUSB.

</div>

(web-installer-prepare)=

## Steg 1 – Før du starter

- **Slå på USB-feilsøking** på telefonen (gjøres bare én gang):
  - Gå til **Innstillinger** > **Om telefonen** og trykk sju ganger på **Delenummer**, til telefonen bekrefter at du er utvikler.
  - Tilbake i hovedmenyen **Innstillinger** åpner du **Utvikleralternativer** og slår på **USB-feilsøking**.
- Koble til telefonen med en **USB-kabel som kan overføre data** (noen ladekabler kan ikke overføre data: hvis telefonen aldri blir funnet, prøv en annen kabel).
- **Lukk Android Studio** og alle andre programmer som bruker ADB: bare ett program kan snakke med telefonen om gangen.
- Ha **AAPS-APK-filen** klar på denne datamaskinen (for nettleserbygget: last den ned fra din Google Drive først).

Ingen datamaskin? Denne siden fungerer også fra Chrome på *en annen Android-telefon*, koblet til med en USB-C-til-USB-C-kabel.

(web-installer-connect)=

## Steg 2 – Koble til telefonen din

Klikk på knappen, og velg deretter telefonen din i listen nettleseren viser.

<button class="aapsi-btn" type="button" id="aapsi-connect-btn">Koble til telefon</button> <button class="aapsi-btn aapsi-secondary" type="button" id="aapsi-disconnect-btn" hidden>Koble fra</button>

<span class="aapsi-status" id="aapsi-connect-status"></span>

<div class="aapsi-box aapsi-warn" id="aapsi-authorize-hint" hidden>

**Se på telefonen nå:** trykk **Tillat** på meldingen «Vil du tillate USB-feilsøking?», og huk av *«Tillat alltid fra denne datamaskinen»*. Ser du den ikke? Lås opp skjermen på telefonen, eller koble fra kabelen og koble den til igjen.

</div>

<div id="aapsi-connect-help" hidden>

```{admonition} Vises ikke telefonen, eller feiler tilkoblingen?
:class: note

- Sjekk at **USB-feilsøking** er på ([steg 1](#web-installer-prepare)) og at kabelen er en datakabel.
- Lukk **Android Studio**, eller kjør `adb kill-server` hvis du har ADB installert, og koble deretter telefonen fra og til igjen.
- På Windows kan også en USB-driver fra produsenten som er installert for telefonen din, holde på tilkoblingen: koble fra andre Android-verktøy og prøv igjen.
```

</div>

(web-installer-file)=

## Steg 3 – Velg AAPS-APK-filen din

<input type="file" id="aapsi-apk-input" accept=".apk" disabled />

<span class="aapsi-status" id="aapsi-file-status"></span>

(web-installer-install)=

## Steg 4 – Installer

Oppdaterer du en eksisterende **AAPS**? Alle innstillinger og all historikk beholdes, akkurat som med `adb install -r`.

<button class="aapsi-btn" type="button" id="aapsi-install-btn" disabled>Installer på telefonen</button>

<div id="aapsi-progress-wrap" hidden>

<span class="aapsi-status" id="aapsi-install-status"></span>
<progress id="aapsi-install-progress" max="100" value="0"></progress>

</div>

<div class="aapsi-box aapsi-success" id="aapsi-result-success" hidden>

**AAPS er installert.** Du kan koble fra telefonen. Hvis dette var din første installasjon, fortsett med [Oppsettveiviseren i AAPS](SetupWizard.md).

</div>

<div class="aapsi-box aapsi-error" id="aapsi-result-error" hidden>

<span id="aapsi-error-message"></span>

Tekniske detaljer:

<pre id="aapsi-error-details"></pre>

</div>

----

En del av **AAPS**-dokumentasjonen. Bygget på de åpne [Tango (ya-webadb)](https://github.com/yume-chan/ya-webadb)-bibliotekene (MIT-lisens). Kildekode for siden og bygginstruksjoner: [openaps/AndroidAPSdocs](https://github.com/openaps/AndroidAPSdocs).

**AAPS** er et gjør-det-selv-system, ikke et kommersielt produkt: du bygger det, du installerer det, du er ansvarlig for det. Denne siden leveres av fellesskapet uten noen garanti.

<div id="aapsi-msgs" hidden>

- <span data-aapsi-msg="noDetails">(ingen flere detaljer)</span>
- <span data-aapsi-msg="errSignature">Denne APK-filen ble bygget med en annen signeringsnøkkel enn den AAPS som allerede er installert på telefonen. Bruk den samme keystore-filen som før, eller eksporter AAPS-innstillingene dine og avinstaller den gamle AAPS først (avinstallering sletter alle innstillinger og all historikk: eksporter først!).</span>
- <span data-aapsi-msg="errDowngrade">Telefonen har allerede en nyere versjon av denne appen. For å gå tilbake til en eldre versjon må du eksportere innstillingene dine og avinstallere den nåværende appen først.</span>
- <span data-aapsi-msg="errStorage">Det er ikke nok ledig lagringsplass på telefonen. Frigjør litt plass og prøv igjen.</span>
- <span data-aapsi-msg="errInvalidApk">Telefonen kjenner ikke igjen denne filen som en gyldig APK. Sjekk at du valgte riktig fil, og at nedlastingen ble fullført.</span>
- <span data-aapsi-msg="errOldSdk">Android-versjonen på denne telefonen er for gammel for denne APK-filen.</span>
- <span data-aapsi-msg="errCanceled">Installasjonen ble avvist på telefonen. Se på telefonens skjerm og tillat installasjonen når du blir spurt.</span>
- <span data-aapsi-msg="errBusy">Et annet program bruker telefonens ADB-tilkobling. Lukk Android Studio (eller kjør «adb kill-server»), koble kabelen fra og til igjen, og prøv så på nytt.</span>
- <span data-aapsi-msg="errLost">Tilkoblingen til telefonen ble brutt. Sjekk kabelen, og koble til igjen.</span>
- <span data-aapsi-msg="errGeneric">Installasjonen mislyktes. Se de tekniske detaljene nedenfor, og spør om hjelp i AAPS-fellesskapets kanaler om nødvendig.</span>
- <span data-aapsi-msg="errDisconnectedDuringInstall">Telefonen ble koblet fra under installasjonen. Koble den til igjen og prøv på nytt: ingenting er ødelagt.</span>
- <span data-aapsi-msg="waitingPick">Venter på at du velger en enhet…</span>
- <span data-aapsi-msg="noDevice">Ingen enhet valgt. Er USB-feilsøking slått på, og er kabelen en datakabel?</span>
- <span data-aapsi-msg="connecting">Kobler til…</span>
- <span data-aapsi-msg="phoneDisconnected">Telefonen ble koblet fra.</span>
- <span data-aapsi-msg="androidDevice">Android-enhet</span>
- <span data-aapsi-msg="connectedTo">Koblet til {name}.</span>
- <span data-aapsi-msg="couldNotConnect">Kunne ikke koble til.</span>
- <span data-aapsi-msg="disconnected">Frakoblet.</span>
- <span data-aapsi-msg="notApk">«{file}» er ikke en .apk-fil. Velg AAPS-APK-filen du har bygget.</span>
- <span data-aapsi-msg="emptyFile">Denne filen er tom. Sjekk nedlastingen og velg den på nytt.</span>
- <span data-aapsi-msg="notRealApk">«{file}» ser ikke ut som en ekte APK-fil. Valgte du riktig fil?</span>
- <span data-aapsi-msg="selected">Valgt: {file} ({size})</span>
- <span data-aapsi-msg="copying">Kopierer til telefonen… {done} av {total}</span>
- <span data-aapsi-msg="installingOnPhone">Installerer på telefonen… (dette kan ta et minutt)</span>
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
