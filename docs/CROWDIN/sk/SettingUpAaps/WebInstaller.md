(web-installer)=

# Webový inštalátor AAPS

Nainštalujte si APK **AAPS**, ktoré ste zostavili, do svojho telefónu s Androidom priamo z tohto prehliadača cez kábel USB. Žiadny príkazový riadok, nič netreba sťahovať. Aplikácie nainštalované týmto spôsobom (cez ADB) sú **vyňaté z overovania vývojárov pre Android od Googlu**.

```{admonition} This page runs entirely in your browser
:class: tip

Váš súbor APK ani údaje z telefónu nikdy neopustia tento počítač: stránka nemôže nikam posielať údaje (jej *Content-Security-Policy* blokuje všetky nahrávania; môžete si to overiť v nástrojoch pre vývojárov v prehliadači, karta Network). Túto stránku používajte vždy len na jej oficiálnej adrese, na ktorú odkazuje stránka [Prenos a inštalácia AAPS](#android-developer-verification-web) v dokumentácii **AAPS**.
```

<noscript>

**JavaScript je vypnutý.** Táto stránka potrebuje JavaScript na komunikáciu s vaším telefónom.

</noscript>

<div id="aapsi-unsupported" class="aapsi-box aapsi-error" hidden>

**Tento prehliadač nedokáže komunikovať so zariadeniami USB.** Otvorte túto stránku v prehliadači **Google Chrome**, **Microsoft Edge** alebo **Opera** na počítači alebo na zariadení s Androidom. Firefox, Safari a všetky prehliadače na iPhone nepodporujú WebUSB.

</div>

(web-installer-prepare)=

## Krok 1 – Skôr než začnete

- V telefóne **zapnite ladenie cez USB** (nastavuje sa len raz):
  - Prejdite do **Nastavenia** > **Informácie o telefóne** a sedemkrát ťuknite na **Číslo zostavy**, kým telefón nepotvrdí, že ste vývojár.
  - Vráťte sa do hlavných **Nastavení**, otvorte **Možnosti vývojára** a zapnite **Ladenie cez USB**.
- Pripojte telefón **káblom USB, ktorý prenáša dáta** (niektoré nabíjacie káble dáta prenášať nevedia: ak telefón nikdy nie je rozpoznaný, skúste iný kábel).
- **Zatvorte Android Studio** a všetky ostatné programy, ktoré používajú ADB: s telefónom môže naraz komunikovať len jeden program.
- Majte v tomto počítači pripravený **súbor APK AAPS** (pri zostavení v prehliadači si ho najprv stiahnite zo svojho Disku Google).

Nemáte počítač? Táto stránka funguje aj v Chrome na *inom telefóne s Androidom*, pripojenom káblom USB-C – USB-C.

(web-installer-connect)=

## Krok 2 – Pripojte telefón

Kliknite na tlačidlo a potom v zozname, ktorý zobrazí prehliadač, vyberte svoj telefón.

<button class="aapsi-btn" type="button" id="aapsi-connect-btn">Pripojiť telefón</button> <button class="aapsi-btn aapsi-secondary" type="button" id="aapsi-disconnect-btn" hidden>Odpojiť</button>

<span class="aapsi-status" id="aapsi-connect-status"></span>

<div class="aapsi-box aapsi-warn" id="aapsi-authorize-hint" hidden>

**Teraz sa pozrite na telefón:** v správe „Povoliť ladenie cez USB?“ ťuknite na **Povoliť** a zaškrtnite *„Vždy povoliť z tohto počítača“*. Nevidíte ju? Odomknite obrazovku telefónu alebo kábel odpojte a znova pripojte.

</div>

<div id="aapsi-connect-help" hidden>

```{admonition} Telefón sa nezobrazuje alebo sa nedá pripojiť?
:class: note

- Skontrolujte, či je zapnuté **ladenie cez USB** ([krok 1](#web-installer-prepare)) a či je kábel dátový.
- Zatvorte **Android Studio**, alebo ak máte nainštalované ADB, spustite `adb kill-server`, a potom telefón odpojte a znova pripojte.
- Vo Windows môže spojenie blokovať aj ovládač USB od výrobcu (OEM) nainštalovaný pre váš telefón: odpojte ostatné nástroje pre Android a skúste to znova.
```

</div>

(web-installer-file)=

## Krok 3 – Vyberte súbor APK AAPS

<input type="file" id="aapsi-apk-input" accept=".apk" disabled />

<span class="aapsi-status" id="aapsi-file-status"></span>

(web-installer-install)=

## Krok 4 – Inštalácia

Aktualizujete existujúci **AAPS**? Všetky jeho nastavenia a história zostanú zachované, presne ako pri `adb install -r`.

<button class="aapsi-btn" type="button" id="aapsi-install-btn" disabled>Inštalovať do telefónu</button>

<div id="aapsi-progress-wrap" hidden>

<span class="aapsi-status" id="aapsi-install-status"></span>
<progress id="aapsi-install-progress" max="100" value="0"></progress>

</div>

<div class="aapsi-box aapsi-success" id="aapsi-result-success" hidden>

**AAPS je nainštalovaný.** Telefón môžete odpojiť. Ak to bola vaša prvá inštalácia, pokračujte [Sprievodcom nastavením](SetupWizard.md).

</div>

<div class="aapsi-box aapsi-error" id="aapsi-result-error" hidden>

<span id="aapsi-error-message"></span>

Technické podrobnosti:

<pre id="aapsi-error-details"></pre>

</div>

----

Súčasť dokumentácie **AAPS**. Postavené na knižniciach [Tango (ya-webadb)](https://github.com/yume-chan/ya-webadb) s otvoreným zdrojovým kódom (licencia MIT). Zdrojový kód stránky a návod na zostavenie: [openaps/AndroidAPSdocs](https://github.com/openaps/AndroidAPSdocs).

**AAPS** je systém typu „urob si sám“ (DIY), nie komerčný produkt: zostavíte si ho, nainštalujete si ho a zodpovedáte zaň. Túto stránku poskytuje komunita bez akejkoľvek záruky.

<div id="aapsi-msgs" hidden>

- <span data-aapsi-msg="noDetails">(žiadne ďalšie podrobnosti)</span>
- <span data-aapsi-msg="errSignature">Toto APK bolo zostavené s iným podpisovým kľúčom než AAPS, ktorý je už v telefóne nainštalovaný. Použite rovnaké úložisko kľúčov ako predtým, alebo najprv exportujte nastavenia AAPS a starý AAPS odinštalujte (odinštalovaním sa stratia všetky jeho nastavenia a história: najprv exportujte!).</span>
- <span data-aapsi-msg="errDowngrade">V telefóne už je novšia verzia tejto aplikácie. Ak sa chcete vrátiť k staršej verzii, najprv exportujte nastavenia a aktuálnu aplikáciu odinštalujte.</span>
- <span data-aapsi-msg="errStorage">V telefóne nie je dosť voľného miesta. Uvoľnite trochu miesta a skúste to znova.</span>
- <span data-aapsi-msg="errInvalidApk">Telefón tento súbor nerozpoznal ako platné APK. Skontrolujte, či ste vybrali správny súbor a či sa stiahol celý.</span>
- <span data-aapsi-msg="errOldSdk">Verzia Androidu v tomto telefóne je pre toto APK príliš stará.</span>
- <span data-aapsi-msg="errCanceled">Inštalácia bola v telefóne odmietnutá. Sledujte obrazovku telefónu a keď sa zobrazí výzva, inštaláciu povoľte.</span>
- <span data-aapsi-msg="errBusy">Pripojenie ADB k telefónu používa iný program. Zatvorte Android Studio (alebo spustite „adb kill-server“), odpojte a znova pripojte kábel a skúste to znova.</span>
- <span data-aapsi-msg="errLost">Spojenie s telefónom sa prerušilo. Skontrolujte kábel a pripojte sa znova.</span>
- <span data-aapsi-msg="errGeneric">Inštalácia zlyhala. Pozrite si technické podrobnosti nižšie a v prípade potreby požiadajte o pomoc v komunitných kanáloch AAPS.</span>
- <span data-aapsi-msg="errDisconnectedDuringInstall">Telefón sa počas inštalácie odpojil. Znova ho pripojte a skúste to znova: nič sa nepokazilo.</span>
- <span data-aapsi-msg="waitingPick">Čaká sa, kým vyberiete zariadenie…</span>
- <span data-aapsi-msg="noDevice">Nebolo vybrané žiadne zariadenie. Je zapnuté ladenie cez USB a je kábel dátový?</span>
- <span data-aapsi-msg="connecting">Pripájanie…</span>
- <span data-aapsi-msg="phoneDisconnected">Telefón sa odpojil.</span>
- <span data-aapsi-msg="androidDevice">Zariadenie s Androidom</span>
- <span data-aapsi-msg="connectedTo">Pripojené k {name}.</span>
- <span data-aapsi-msg="couldNotConnect">Nepodarilo sa pripojiť.</span>
- <span data-aapsi-msg="disconnected">Odpojené.</span>
- <span data-aapsi-msg="notApk">„{file}“ nie je súbor .apk. Vyberte APK AAPS, ktoré ste zostavili.</span>
- <span data-aapsi-msg="emptyFile">Tento súbor je prázdny. Skontrolujte sťahovanie a vyberte ho znova.</span>
- <span data-aapsi-msg="notRealApk">„{file}“ nevyzerá ako skutočný súbor APK. Vybrali ste správny súbor?</span>
- <span data-aapsi-msg="selected">Vybrané: {file} ({size})</span>
- <span data-aapsi-msg="copying">Kopírovanie do telefónu… {done} z {total}</span>
- <span data-aapsi-msg="installingOnPhone">Inštalácia v telefóne… (môže to trvať asi minútu)</span>
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
