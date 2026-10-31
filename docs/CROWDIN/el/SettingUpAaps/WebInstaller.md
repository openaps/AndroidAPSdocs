(web-installer)=

# Πρόγραμμα εγκατάστασης web του AAPS

Εγκαταστήστε το APK του **AAPS** που δημιουργήσατε στο τηλέφωνό σας Android, απευθείας από αυτό το πρόγραμμα περιήγησης, με ένα καλώδιο USB. Χωρίς γραμμή εντολών, χωρίς τίποτα για λήψη. Όταν εγκαθίστανται με αυτόν τον τρόπο (τον τρόπο του ADB), οι εφαρμογές **εξαιρούνται από την επαλήθευση προγραμματιστή Android της Google**.

```{admonition} This page runs entirely in your browser
:class: tip

Το αρχείο APK σας και τα δεδομένα του τηλεφώνου σας δεν φεύγουν ποτέ από αυτόν τον υπολογιστή: η σελίδα δεν μπορεί να στείλει δεδομένα πουθενά (το *Content-Security-Policy* της μπλοκάρει κάθε μεταφόρτωση· μπορείτε να το ελέγξετε στα εργαλεία για προγραμματιστές του προγράμματος περιήγησης, καρτέλα Network). Χρησιμοποιείτε αυτή τη σελίδα μόνο στην επίσημη διεύθυνσή της, με τον σύνδεσμο από τη σελίδα [Μεταφορά και εγκατάσταση του AAPS](#android-developer-verification-web) στην τεκμηρίωση του **AAPS**.
```

<noscript>

**Η JavaScript είναι απενεργοποιημένη.** Αυτή η σελίδα χρειάζεται JavaScript για να επικοινωνήσει με το τηλέφωνό σας.

</noscript>

<div id="aapsi-unsupported" class="aapsi-box aapsi-error" hidden>

**Αυτό το πρόγραμμα περιήγησης δεν μπορεί να επικοινωνήσει με συσκευές USB.** Ανοίξτε αυτή τη σελίδα στο **Google Chrome**, στο **Microsoft Edge** ή στο **Opera**, σε υπολογιστή ή σε συσκευή Android. Ο Firefox, ο Safari και όλα τα προγράμματα περιήγησης στο iPhone δεν υποστηρίζουν WebUSB.

</div>

(web-installer-prepare)=

## Βήμα 1 – Πριν ξεκινήσετε

- **Ενεργοποιήστε τον εντοπισμό σφαλμάτων USB** (USB debugging) στο τηλέφωνο (ρύθμιση μίας φοράς):
  - Πηγαίνετε στο **Ρυθμίσεις** > **Πληροφορίες τηλεφώνου** (About phone) και πατήστε επτά φορές το **Αριθμός έκδοσης** (Build number), μέχρι το τηλέφωνο να επιβεβαιώσει ότι είστε προγραμματιστής.
  - Πίσω στο κύριο μενού **Ρυθμίσεις**, ανοίξτε τις **Επιλογές προγραμματιστή** (Developer options) και ενεργοποιήστε το **Εντοπισμός σφαλμάτων USB** (USB debugging).
- Συνδέστε το τηλέφωνο με ένα **καλώδιο USB που μεταφέρει δεδομένα** (μερικά καλώδια φόρτισης δεν μπορούν να μεταφέρουν δεδομένα: αν το τηλέφωνο δεν εντοπίζεται ποτέ, δοκιμάστε άλλο καλώδιο).
- **Κλείστε το Android Studio** και κάθε άλλο πρόγραμμα που χρησιμοποιεί ADB: μόνο ένα πρόγραμμα κάθε φορά μπορεί να επικοινωνεί με το τηλέφωνο.
- Έχετε έτοιμο το **αρχείο APK του AAPS** σε αυτόν τον υπολογιστή (για τη δημιουργία μέσω browser, κατεβάστε το πρώτα από το Google Drive σας).

Δεν έχετε υπολογιστή; Αυτή η σελίδα λειτουργεί και από το Chrome σε *άλλο τηλέφωνο Android*, συνδεδεμένο με καλώδιο USB-C σε USB-C.

(web-installer-connect)=

## Βήμα 2 – Συνδέστε το τηλέφωνό σας

Κάντε κλικ στο κουμπί και μετά διαλέξτε το τηλέφωνό σας από τη λίστα που δείχνει το πρόγραμμα περιήγησης.

<button class="aapsi-btn" type="button" id="aapsi-connect-btn">Σύνδεση τηλεφώνου</button> <button class="aapsi-btn aapsi-secondary" type="button" id="aapsi-disconnect-btn" hidden>Αποσύνδεση</button>

<span class="aapsi-status" id="aapsi-connect-status"></span>

<div class="aapsi-box aapsi-warn" id="aapsi-authorize-hint" hidden>

**Κοιτάξτε τώρα το τηλέφωνό σας:** πατήστε **Να επιτρέπεται** (Allow) στο μήνυμα «Να επιτρέπεται ο εντοπισμός σφαλμάτων USB;» (Allow USB debugging?) και τσεκάρετε το *«Να επιτρέπεται πάντα από αυτόν τον υπολογιστή»* (Always allow from this computer). Δεν το βλέπετε; Ξεκλειδώστε την οθόνη του τηλεφώνου ή αποσυνδέστε και συνδέστε ξανά το καλώδιο.

</div>

<div id="aapsi-connect-help" hidden>

```{admonition} Το τηλέφωνο δεν εμφανίζεται ή η σύνδεση αποτυγχάνει;
:class: note

- Ελέγξτε ότι ο **Εντοπισμός σφαλμάτων USB** είναι ενεργός ([βήμα 1](#web-installer-prepare)) και ότι το καλώδιο είναι καλώδιο δεδομένων.
- Κλείστε το **Android Studio** ή εκτελέστε `adb kill-server` αν έχετε εγκατεστημένο το ADB, και μετά αποσυνδέστε και συνδέστε ξανά το τηλέφωνο.
- Στα Windows, ένα πρόγραμμα οδήγησης USB του κατασκευαστή (OEM) που έχει εγκατασταθεί για το τηλέφωνό σας μπορεί επίσης να κρατά τη σύνδεση: κλείστε άλλα εργαλεία Android και δοκιμάστε ξανά.
```

</div>

(web-installer-file)=

## Βήμα 3 – Επιλέξτε το αρχείο APK του AAPS

<input type="file" id="aapsi-apk-input" accept=".apk" disabled />

<span class="aapsi-status" id="aapsi-file-status"></span>

(web-installer-install)=

## Βήμα 4 – Εγκατάσταση

Ενημερώνετε ένα υπάρχον **AAPS**; Όλες οι ρυθμίσεις και το ιστορικό του διατηρούνται, ακριβώς όπως με το `adb install -r`.

<button class="aapsi-btn" type="button" id="aapsi-install-btn" disabled>Εγκατάσταση στο τηλέφωνο</button>

<div id="aapsi-progress-wrap" hidden>

<span class="aapsi-status" id="aapsi-install-status"></span>
<progress id="aapsi-install-progress" max="100" value="0"></progress>

</div>

<div class="aapsi-box aapsi-success" id="aapsi-result-success" hidden>

**Το AAPS εγκαταστάθηκε.** Μπορείτε να αποσυνδέσετε το τηλέφωνο. Αν ήταν η πρώτη σας εγκατάσταση, συνεχίστε με τον [Οδηγό εγκατάστασης](SetupWizard.md).

</div>

<div class="aapsi-box aapsi-error" id="aapsi-result-error" hidden>

<span id="aapsi-error-message"></span>

Τεχνικές λεπτομέρειες:

<pre id="aapsi-error-details"></pre>

</div>

----

Μέρος της τεκμηρίωσης του **AAPS**. Βασίζεται στις βιβλιοθήκες ανοιχτού κώδικα [Tango (ya-webadb)](https://github.com/yume-chan/ya-webadb) (άδεια MIT). Πηγαίος κώδικας της σελίδας και οδηγίες build: [openaps/AndroidAPSdocs](https://github.com/openaps/AndroidAPSdocs).

Το **AAPS** είναι ένα σύστημα DIY (φτιάξ' το μόνος σου), όχι εμπορικό προϊόν: εσείς το δημιουργείτε, εσείς το εγκαθιστάτε, εσείς είστε υπεύθυνοι γι' αυτό. Αυτή η σελίδα παρέχεται από την κοινότητα χωρίς καμία εγγύηση.

<div id="aapsi-msgs" hidden>

- <span data-aapsi-msg="noDetails">(καμία άλλη λεπτομέρεια)</span>
- <span data-aapsi-msg="errSignature">Αυτό το APK δημιουργήθηκε με διαφορετικό κλειδί υπογραφής από το AAPS που είναι ήδη εγκατεστημένο στο τηλέφωνο. Χρησιμοποιήστε το ίδιο keystore με πριν, ή κάντε εξαγωγή των ρυθμίσεων του AAPS και απεγκαταστήστε πρώτα το παλιό AAPS (με την απεγκατάσταση χάνονται όλες οι ρυθμίσεις και το ιστορικό του: κάντε πρώτα εξαγωγή!).</span>
- <span data-aapsi-msg="errDowngrade">Το τηλέφωνο έχει ήδη νεότερη έκδοση αυτής της εφαρμογής. Για να επιστρέψετε σε παλαιότερη έκδοση, κάντε εξαγωγή των ρυθμίσεών σας και απεγκαταστήστε πρώτα την τρέχουσα εφαρμογή.</span>
- <span data-aapsi-msg="errStorage">Δεν υπάρχει αρκετός ελεύθερος χώρος αποθήκευσης στο τηλέφωνο. Ελευθερώστε λίγο χώρο και δοκιμάστε ξανά.</span>
- <span data-aapsi-msg="errInvalidApk">Το τηλέφωνο δεν αναγνωρίζει αυτό το αρχείο ως έγκυρο APK. Ελέγξτε ότι επιλέξατε το σωστό αρχείο και ότι η λήψη ολοκληρώθηκε.</span>
- <span data-aapsi-msg="errOldSdk">Η έκδοση Android σε αυτό το τηλέφωνο είναι πολύ παλιά για αυτό το APK.</span>
- <span data-aapsi-msg="errCanceled">Η εγκατάσταση απορρίφθηκε στο τηλέφωνο. Παρακολουθείτε την οθόνη του τηλεφώνου και επιτρέψτε την εγκατάσταση όταν σας ζητηθεί.</span>
- <span data-aapsi-msg="errBusy">Ένα άλλο πρόγραμμα χρησιμοποιεί τη σύνδεση ADB του τηλεφώνου. Κλείστε το Android Studio (ή εκτελέστε "adb kill-server"), αποσυνδέστε και συνδέστε ξανά το καλώδιο και μετά δοκιμάστε ξανά.</span>
- <span data-aapsi-msg="errLost">Η σύνδεση με το τηλέφωνο χάθηκε. Ελέγξτε το καλώδιο και μετά συνδεθείτε ξανά.</span>
- <span data-aapsi-msg="errGeneric">Η εγκατάσταση απέτυχε. Δείτε τις τεχνικές λεπτομέρειες παρακάτω και, αν χρειάζεται, ζητήστε βοήθεια στα κανάλια της κοινότητας του AAPS.</span>
- <span data-aapsi-msg="errDisconnectedDuringInstall">Το τηλέφωνο αποσυνδέθηκε κατά την εγκατάσταση. Συνδέστε το ξανά και δοκιμάστε ξανά: δεν χάλασε τίποτα.</span>
- <span data-aapsi-msg="waitingPick">Περιμένουμε να διαλέξετε συσκευή…</span>
- <span data-aapsi-msg="noDevice">Δεν επιλέχθηκε συσκευή. Είναι ενεργός ο εντοπισμός σφαλμάτων USB και είναι το καλώδιο καλώδιο δεδομένων;</span>
- <span data-aapsi-msg="connecting">Συνδέεται…</span>
- <span data-aapsi-msg="phoneDisconnected">Το τηλέφωνο αποσυνδέθηκε.</span>
- <span data-aapsi-msg="androidDevice">Συσκευή Android</span>
- <span data-aapsi-msg="connectedTo">Συνδέθηκε με {name}.</span>
- <span data-aapsi-msg="couldNotConnect">Η σύνδεση δεν ήταν δυνατή.</span>
- <span data-aapsi-msg="disconnected">Αποσυνδέθηκε.</span>
- <span data-aapsi-msg="notApk">Το «{file}» δεν είναι αρχείο .apk. Επιλέξτε το APK του AAPS που δημιουργήσατε.</span>
- <span data-aapsi-msg="emptyFile">Αυτό το αρχείο είναι κενό. Ελέγξτε τη λήψη και επιλέξτε το ξανά.</span>
- <span data-aapsi-msg="notRealApk">Το «{file}» δεν μοιάζει με πραγματικό αρχείο APK. Επιλέξατε το σωστό αρχείο;</span>
- <span data-aapsi-msg="selected">Επιλεγμένο: {file} ({size})</span>
- <span data-aapsi-msg="copying">Αντιγραφή στο τηλέφωνο… {done} από {total}</span>
- <span data-aapsi-msg="installingOnPhone">Εγκατάσταση στο τηλέφωνο… (μπορεί να πάρει ένα λεπτό)</span>
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
