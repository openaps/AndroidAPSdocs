(web-installer)=

# Web instalacijski program za AAPS

Instalirajte **AAPS** APK koji ste izradili na svoj Android telefon, izravno iz ovog preglednika, putem USB kabela. Bez naredbenog retka, ništa ne treba preuzimati. Aplikacije instalirane na ovaj način (putem ADB-a) **izuzete su od Googleove provjere Android razvojnih programera**.

```{admonition} This page runs entirely in your browser
:class: tip

Vaša APK datoteka i podaci s vašeg telefona nikada ne napuštaju ovo računalo: stranica ne može nikamo slati podatke (njezina *Content-Security-Policy* blokira sve prijenose; to možete provjeriti u alatima za razvojne programere u pregledniku, kartica Network). Ovu stranicu uvijek koristite samo na njezinoj službenoj adresi, s poveznice na stranici [Prijenos i instalacija AAPS-a na vaš pametni telefon](#android-developer-verification-web) u dokumentaciji **AAPS-a**.
```

<noscript>

**JavaScript je isključen.** Ova stranica treba JavaScript za komunikaciju s vašim telefonom.

</noscript>

<div id="aapsi-unsupported" class="aapsi-box aapsi-error" hidden>

**Ovaj preglednik ne može komunicirati s USB uređajima.** Otvorite ovu stranicu u pregledniku **Google Chrome**, **Microsoft Edge** ili **Opera**, na računalu ili na Android uređaju. Firefox, Safari i svi preglednici na iPhoneu ne podržavaju WebUSB.

</div>

(web-installer-prepare)=

## Korak 1 – Prije početka

- **Uključite otklanjanje pogrešaka putem USB-a** na telefonu (postavlja se samo jednom):
  - Idite na **Postavke** > **O telefonu** i dodirnite **Broj međuverzije** sedam puta, dok telefon ne potvrdi da ste razvojni programer.
  - Vratite se u glavne **Postavke**, otvorite **Opcije za razvojne programere** i uključite **Otklanjanje pogrešaka putem USB-a**.
- Spojite telefon **USB kabelom koji prenosi podatke** (neki kabeli za punjenje ne mogu prenositi podatke: ako telefon nikada nije prepoznat, probajte drugi kabel).
- **Zatvorite Android Studio** i svaki drugi program koji koristi ADB: samo jedan program može komunicirati s telefonom u isto vrijeme.
- Pripremite svoju **AAPS APK datoteku** na ovom računalu (kod izrade u pregledniku najprije je preuzmite sa svog Google Drivea).

Nemate računalo? Ova stranica radi i iz Chromea na *drugom Android telefonu*, spojenom kabelom USB-C na USB-C.

(web-installer-connect)=

## Korak 2 – Spojite svoj telefon

Kliknite gumb, a zatim odaberite svoj telefon na popisu koji preglednik prikaže.

<button class="aapsi-btn" type="button" id="aapsi-connect-btn">Spoji telefon</button> <button class="aapsi-btn aapsi-secondary" type="button" id="aapsi-disconnect-btn" hidden>Odspoji</button>

<span class="aapsi-status" id="aapsi-connect-status"></span>

<div class="aapsi-box aapsi-warn" id="aapsi-authorize-hint" hidden>

**Sada pogledajte svoj telefon:** dodirnite **Dopusti** na poruci „Dopustiti otklanjanje pogrešaka putem USB-a?“ i označite *„Uvijek dopusti s ovog računala“*. Ne vidite poruku? Otključajte zaslon telefona ili izvucite i ponovno utaknite kabel.

</div>

<div id="aapsi-connect-help" hidden>

```{admonition} Telefon se ne pojavljuje ili spajanje ne uspijeva?
:class: note

- Provjerite je li **otklanjanje pogrešaka putem USB-a** uključeno ([korak 1](#web-installer-prepare)) i je li kabel podatkovni.
- Zatvorite **Android Studio** ili pokrenite `adb kill-server` ako imate instaliran ADB, zatim izvucite i ponovno utaknite telefon.
- Na Windowsu i OEM USB upravljački program instaliran za vaš telefon može zauzeti vezu: odspojite druge Android alate i pokušajte ponovno.
```

</div>

(web-installer-file)=

## Korak 3 – Odaberite svoju AAPS APK datoteku

<input type="file" id="aapsi-apk-input" accept=".apk" disabled />

<span class="aapsi-status" id="aapsi-file-status"></span>

(web-installer-install)=

## Korak 4 – Instalacija

Ažurirate postojeći **AAPS**? Sve njegove postavke i povijest ostaju sačuvane, točno kao kod `adb install -r`.

<button class="aapsi-btn" type="button" id="aapsi-install-btn" disabled>Instaliraj na telefon</button>

<div id="aapsi-progress-wrap" hidden>

<span class="aapsi-status" id="aapsi-install-status"></span>
<progress id="aapsi-install-progress" max="100" value="0"></progress>

</div>

<div class="aapsi-box aapsi-success" id="aapsi-result-success" hidden>

**AAPS je instaliran.** Možete odspojiti telefon. Ako je ovo bila vaša prva instalacija, nastavite s [Čarobnjakom za postavljanje AAPS-a](SetupWizard.md).

</div>

<div class="aapsi-box aapsi-error" id="aapsi-result-error" hidden>

<span id="aapsi-error-message"></span>

Tehnički detalji:

<pre id="aapsi-error-details"></pre>

</div>

----

Dio dokumentacije **AAPS-a**. Izrađeno na bibliotekama otvorenog koda [Tango (ya-webadb)](https://github.com/yume-chan/ya-webadb) (licenca MIT). Izvorni kod stranice i upute za izradu: [openaps/AndroidAPSdocs](https://github.com/openaps/AndroidAPSdocs).

**AAPS** je sustav „uradi sam“ (DIY), a ne komercijalni proizvod: vi ga izrađujete, vi ga instalirate, vi ste za njega odgovorni. Ovu stranicu pruža zajednica bez ikakvog jamstva.

<div id="aapsi-msgs" hidden>

- <span data-aapsi-msg="noDetails">(nema daljnjih detalja)</span>
- <span data-aapsi-msg="errSignature">Ovaj APK izrađen je s drugim ključem za potpisivanje od AAPS-a koji je već instaliran na telefonu. Koristite isto spremište ključeva kao prije ili najprije izvezite postavke AAPS-a i deinstalirajte stari AAPS (deinstalacijom gubite sve njegove postavke i povijest: najprije izvezite!).</span>
- <span data-aapsi-msg="errDowngrade">Na telefonu je već novija verzija ove aplikacije. Za povratak na stariju verziju najprije izvezite postavke i deinstalirajte trenutačnu aplikaciju.</span>
- <span data-aapsi-msg="errStorage">Na telefonu nema dovoljno slobodnog prostora za pohranu. Oslobodite malo prostora i pokušajte ponovno.</span>
- <span data-aapsi-msg="errInvalidApk">Telefon ne prepoznaje ovu datoteku kao valjani APK. Provjerite jeste li odabrali pravu datoteku i je li preuzimanje dovršeno.</span>
- <span data-aapsi-msg="errOldSdk">Verzija Androida na ovom telefonu prestara je za ovaj APK.</span>
- <span data-aapsi-msg="errCanceled">Instalacija je odbijena na telefonu. Gledajte zaslon telefona i dopustite instalaciju kada se to zatraži.</span>
- <span data-aapsi-msg="errBusy">Drugi program koristi ADB vezu telefona. Zatvorite Android Studio (ili pokrenite „adb kill-server“), izvucite i ponovno utaknite kabel, zatim pokušajte ponovno.</span>
- <span data-aapsi-msg="errLost">Veza s telefonom je prekinuta. Provjerite kabel, zatim se ponovno spojite.</span>
- <span data-aapsi-msg="errGeneric">Instalacija nije uspjela. Pogledajte tehničke detalje ispod i po potrebi zatražite pomoć na kanalima zajednice AAPS-a.</span>
- <span data-aapsi-msg="errDisconnectedDuringInstall">Telefon je odspojen tijekom instalacije. Ponovno ga spojite i pokušajte ponovno: ništa nije pokvareno.</span>
- <span data-aapsi-msg="waitingPick">Čeka se da odaberete uređaj…</span>
- <span data-aapsi-msg="noDevice">Nije odabran nijedan uređaj. Je li otklanjanje pogrešaka putem USB-a uključeno i je li kabel podatkovni?</span>
- <span data-aapsi-msg="connecting">Spajanje…</span>
- <span data-aapsi-msg="phoneDisconnected">Telefon je odspojen.</span>
- <span data-aapsi-msg="androidDevice">Android uređaj</span>
- <span data-aapsi-msg="connectedTo">Spojeno na {name}.</span>
- <span data-aapsi-msg="couldNotConnect">Spajanje nije uspjelo.</span>
- <span data-aapsi-msg="disconnected">Odspojeno.</span>
- <span data-aapsi-msg="notApk">„{file}“ nije .apk datoteka. Odaberite AAPS APK koji ste izradili.</span>
- <span data-aapsi-msg="emptyFile">Ova datoteka je prazna. Provjerite preuzimanje i ponovno je odaberite.</span>
- <span data-aapsi-msg="notRealApk">„{file}“ ne izgleda kao prava APK datoteka. Jeste li odabrali pravu datoteku?</span>
- <span data-aapsi-msg="selected">Odabrano: {file} ({size})</span>
- <span data-aapsi-msg="copying">Kopiranje na telefon… {done} od {total}</span>
- <span data-aapsi-msg="installingOnPhone">Instalacija na telefon… (ovo može potrajati minutu)</span>
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
