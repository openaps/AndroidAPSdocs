(web-installer)=

# AAPS žiniatinklio diegimo programa

Įdiekite savo sukurtą **AAPS** APK į Android telefoną tiesiai iš šios naršyklės, USB kabeliu. Nereikia komandinės eilutės, nieko nereikia atsisiųsti. Taip (ADB būdu) įdiegtoms programėlėms **Google Android kūrėjų tapatybės patikrinimas netaikomas**.

```{admonition} This page runs entirely in your browser
:class: tip

Jūsų APK failas ir telefono duomenys niekada nepalieka šio kompiuterio: puslapis negali niekur siųsti duomenų (jo *Content-Security-Policy* blokuoja bet kokį įkėlimą; tai galite patikrinti naršyklės kūrėjo įrankiuose, skirtuke Network). Šį puslapį naudokite tik jo oficialiu adresu, į kurį veda nuoroda iš puslapio [AAPS perkėlimas ir įdiegimas](#android-developer-verification-web) **AAPS** dokumentacijoje.
```

<noscript>

**JavaScript išjungtas.** Šiam puslapiui reikia JavaScript, kad galėtų bendrauti su jūsų telefonu.

</noscript>

<div id="aapsi-unsupported" class="aapsi-box aapsi-error" hidden>

**Ši naršyklė negali bendrauti su USB įrenginiais.** Atidarykite šį puslapį naršyklėje **Google Chrome**, **Microsoft Edge** arba **Opera** kompiuteryje arba Android įrenginyje. Firefox, Safari ir visos iPhone naršyklės nepalaiko WebUSB.

</div>

(web-installer-prepare)=

## 1 žingsnis – Prieš pradedant

- Telefone **įjunkite USB derinimą** (vienkartinis nustatymas):
  - Eikite į **Settings** (Nustatymai) > **About phone** (Apie telefoną) ir septynis kartus paspauskite **Build number** (Versijos numeris), kol telefonas patvirtins, kad esate kūrėjas.
  - Grįžę į pagrindinį **Settings** meniu, atidarykite **Developer options** (Kūrėjo parinktys) ir įjunkite **USB debugging** (USB derinimas).
- Prijunkite telefoną **USB kabeliu, kuriuo galima perduoti duomenis** (kai kuriais įkrovimo kabeliais duomenų perduoti negalima: jei telefonas niekada neaptinkamas, pabandykite kitą kabelį).
- **Uždarykite Android Studio** ir bet kurią kitą ADB naudojančią programą: su telefonu vienu metu gali bendrauti tik viena programa.
- Turėkite **AAPS APK failą** šiame kompiuteryje (jei kūrėte naršyklėje, pirmiausia atsisiųskite jį iš savo Google Drive).

Neturite kompiuterio? Šis puslapis veikia ir iš Chrome *kitame Android telefone*, prijungtame USB-C–USB-C kabeliu.

(web-installer-connect)=

## 2 žingsnis – Prijunkite telefoną

Spauskite mygtuką, tada naršyklės rodomame sąraše pasirinkite savo telefoną.

<button class="aapsi-btn" type="button" id="aapsi-connect-btn">Prijungti telefoną</button> <button class="aapsi-btn aapsi-secondary" type="button" id="aapsi-disconnect-btn" hidden>Atjungti</button>

<span class="aapsi-status" id="aapsi-connect-status"></span>

<div class="aapsi-box aapsi-warn" id="aapsi-authorize-hint" hidden>

**Dabar pažiūrėkite į telefoną:** pranešime „Allow USB debugging?“ (Leisti USB derinimą?) spauskite **Allow** (Leisti) ir pažymėkite *„Always allow from this computer“* (Visada leisti iš šio kompiuterio). Nematote jo? Atrakinkite telefono ekraną arba ištraukite ir vėl įkiškite kabelį.

</div>

<div id="aapsi-connect-help" hidden>

```{admonition} Telefonas nerodomas arba nepavyksta prisijungti?
:class: note

- Patikrinkite, ar įjungtas **USB debugging** ([1 žingsnis](#web-installer-prepare)) ir ar kabelis skirtas duomenims perduoti.
- Uždarykite **Android Studio** arba, jei turite įdiegę ADB, paleiskite `adb kill-server`, tada ištraukite ir vėl prijunkite telefoną.
- Windows sistemoje ryšį taip pat gali užimti jūsų telefonui įdiegta gamintojo (OEM) USB tvarkyklė: atjunkite kitus Android įrankius ir bandykite dar kartą.
```

</div>

(web-installer-file)=

## 3 žingsnis – Pasirinkite AAPS APK failą

<input type="file" id="aapsi-apk-input" accept=".apk" disabled />

<span class="aapsi-status" id="aapsi-file-status"></span>

(web-installer-install)=

## 4 žingsnis – Įdiekite

Atnaujinate jau įdiegtą **AAPS**? Visi jos nustatymai ir istorija išsaugomi, lygiai kaip su `adb install -r`.

<button class="aapsi-btn" type="button" id="aapsi-install-btn" disabled>Įdiegti telefone</button>

<div id="aapsi-progress-wrap" hidden>

<span class="aapsi-status" id="aapsi-install-status"></span>
<progress id="aapsi-install-progress" max="100" value="0"></progress>

</div>

<div class="aapsi-box aapsi-success" id="aapsi-result-success" hidden>

**AAPS įdiegta.** Galite atjungti telefoną. Jei tai buvo pirmas diegimas, tęskite su [Sąrankos vedliu](SetupWizard.md).

</div>

<div class="aapsi-box aapsi-error" id="aapsi-result-error" hidden>

<span id="aapsi-error-message"></span>

Techninė informacija:

<pre id="aapsi-error-details"></pre>

</div>

----

**AAPS** dokumentacijos dalis. Sukurta naudojant atvirojo kodo [Tango (ya-webadb)](https://github.com/yume-chan/ya-webadb) bibliotekas (MIT licencija). Puslapio šaltinio kodas ir kūrimo instrukcijos: [openaps/AndroidAPSdocs](https://github.com/openaps/AndroidAPSdocs).

**AAPS** yra „pasidaryk pats“ (DIY) sistema, o ne komercinis produktas: jūs ją sukuriate, jūs ją įdiegiate, jūs už ją atsakote. Šį puslapį bendruomenė teikia be jokių garantijų.

<div id="aapsi-msgs" hidden>

- <span data-aapsi-msg="noDetails">(daugiau informacijos nėra)</span>
- <span data-aapsi-msg="errSignature">Šis APK sukurtas su kitu pasirašymo raktu nei telefone jau įdiegta AAPS. Naudokite tą pačią raktų saugyklą kaip anksčiau arba eksportuokite AAPS nustatymus ir pirmiausia pašalinkite senąją AAPS (pašalinus prarandami visi jos nustatymai ir istorija: pirmiausia eksportuokite!).</span>
- <span data-aapsi-msg="errDowngrade">Telefone jau yra naujesnė šios programėlės versija. Jei norite grįžti prie senesnės versijos, eksportuokite nustatymus ir pirmiausia pašalinkite dabartinę programėlę.</span>
- <span data-aapsi-msg="errStorage">Telefone nepakanka laisvos vietos. Atlaisvinkite vietos ir bandykite dar kartą.</span>
- <span data-aapsi-msg="errInvalidApk">Telefonas neatpažįsta šio failo kaip tinkamo APK. Patikrinkite, ar pasirinkote tinkamą failą ir ar atsisiuntimas baigėsi.</span>
- <span data-aapsi-msg="errOldSdk">Šio telefono Android versija per sena šiam APK.</span>
- <span data-aapsi-msg="errCanceled">Diegimas telefone atmestas. Stebėkite telefono ekraną ir, kai bus paklausta, leiskite diegimą.</span>
- <span data-aapsi-msg="errBusy">Telefono ADB ryšį naudoja kita programa. Uždarykite Android Studio (arba paleiskite „adb kill-server“), ištraukite ir vėl įkiškite kabelį, tada bandykite dar kartą.</span>
- <span data-aapsi-msg="errLost">Ryšys su telefonu nutrūko. Patikrinkite kabelį ir prisijunkite dar kartą.</span>
- <span data-aapsi-msg="errGeneric">Diegimas nepavyko. Žr. techninę informaciją žemiau ir, jei reikia, paprašykite pagalbos AAPS bendruomenės kanaluose.</span>
- <span data-aapsi-msg="errDisconnectedDuringInstall">Diegimo metu telefonas buvo atjungtas. Prijunkite jį vėl ir bandykite dar kartą: niekas nesugadinta.</span>
- <span data-aapsi-msg="waitingPick">Laukiama, kol pasirinksite įrenginį…</span>
- <span data-aapsi-msg="noDevice">Įrenginys nepasirinktas. Ar įjungtas USB derinimas ir ar kabelis skirtas duomenims perduoti?</span>
- <span data-aapsi-msg="connecting">Jungiamasi…</span>
- <span data-aapsi-msg="phoneDisconnected">Telefonas atjungtas.</span>
- <span data-aapsi-msg="androidDevice">Android įrenginys</span>
- <span data-aapsi-msg="connectedTo">Prisijungta prie {name}.</span>
- <span data-aapsi-msg="couldNotConnect">Nepavyko prisijungti.</span>
- <span data-aapsi-msg="disconnected">Atjungta.</span>
- <span data-aapsi-msg="notApk">„{file}“ nėra .apk failas. Pasirinkite savo sukurtą AAPS APK.</span>
- <span data-aapsi-msg="emptyFile">Šis failas tuščias. Patikrinkite atsisiuntimą ir pasirinkite failą dar kartą.</span>
- <span data-aapsi-msg="notRealApk">„{file}“ neatrodo kaip tikras APK failas. Ar pasirinkote tinkamą failą?</span>
- <span data-aapsi-msg="selected">Pasirinkta: {file} ({size})</span>
- <span data-aapsi-msg="copying">Kopijuojama į telefoną… {done} iš {total}</span>
- <span data-aapsi-msg="installingOnPhone">Diegiama telefone… (tai gali užtrukti minutę)</span>
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
