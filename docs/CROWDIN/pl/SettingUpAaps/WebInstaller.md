(web-installer)=

# Instalator webowy AAPS

Zainstaluj zbudowany przez siebie plik APK **AAPS** na telefonie z Androidem, prosto z tej przeglądarki, przez kabel USB. Bez wiersza poleceń, bez pobierania czegokolwiek. Aplikacje zainstalowane w ten sposób (tak jak przez ADB) są **zwolnione z weryfikacji deweloperów Androida przez Google**.

```{admonition} This page runs entirely in your browser
:class: tip

Twój plik APK i dane z telefonu nigdy nie opuszczają tego komputera: strona nie może nigdzie wysyłać danych (jej *Content-Security-Policy* blokuje każde wysyłanie; możesz to sprawdzić w narzędziach deweloperskich przeglądarki, karta Network/Sieć). Używaj tej strony tylko pod jej oficjalnym adresem, do którego prowadzi link ze strony [Przenoszenie i instalacja AAPS na smartfonie](#android-developer-verification-web) w dokumentacji **AAPS**.
```

<noscript>

**JavaScript jest wyłączony.** Ta strona potrzebuje JavaScriptu, aby łączyć się z telefonem.

</noscript>

<div id="aapsi-unsupported" class="aapsi-box aapsi-error" hidden>

**Ta przeglądarka nie może łączyć się z urządzeniami USB.** Otwórz tę stronę w **Google Chrome**, **Microsoft Edge** lub **Opera**, na komputerze albo na urządzeniu z Androidem. Firefox, Safari i wszystkie przeglądarki na iPhonie nie obsługują WebUSB.

</div>

(web-installer-prepare)=

## Krok 1 – Zanim zaczniesz

- **Włącz Debugowanie USB** na telefonie (jednorazowa konfiguracja):
  - Wejdź w **Ustawienia** > **Informacje o telefonie** i dotknij **Numer kompilacji** siedem razy, aż telefon potwierdzi, że jesteś deweloperem.
  - Wróć do głównych **Ustawień**, otwórz **Opcje programisty** i włącz **Debugowanie USB**.
- Podłącz telefon **kablem USB, który przesyła dane** (niektóre kable tylko do ładowania nie przesyłają danych: jeśli telefon nigdy nie jest wykrywany, spróbuj innego kabla).
- **Zamknij Android Studio** i każdy inny program, który używa ADB: z telefonem może łączyć się tylko jeden program naraz.
- Przygotuj **plik APK AAPS** na tym komputerze (przy budowaniu w przeglądarce najpierw pobierz go ze swojego Dysku Google).

Nie masz komputera? Ta strona działa też w Chrome na *innym telefonie z Androidem*, połączonym kablem USB-C – USB-C.

(web-installer-connect)=

## Krok 2 – Połącz telefon

Kliknij przycisk, a potem wybierz swój telefon z listy, którą pokaże przeglądarka.

<button class="aapsi-btn" type="button" id="aapsi-connect-btn">Połącz telefon</button> <button class="aapsi-btn aapsi-secondary" type="button" id="aapsi-disconnect-btn" hidden>Rozłącz</button>

<span class="aapsi-status" id="aapsi-connect-status"></span>

<div class="aapsi-box aapsi-warn" id="aapsi-authorize-hint" hidden>

**Spójrz teraz na telefon:** dotknij **Zezwól** w komunikacie „Zezwolić na debugowanie USB?” i zaznacz *„Zawsze zezwalaj z tego komputera”*. Nie widzisz go? Odblokuj ekran telefonu albo odłącz i ponownie podłącz kabel.

</div>

<div id="aapsi-connect-help" hidden>

```{admonition} Telefon się nie pokazuje albo połączenie się nie udaje?
:class: note

- Sprawdź, czy **Debugowanie USB** jest włączone ([krok 1](#web-installer-prepare)) i czy kabel przesyła dane.
- Zamknij **Android Studio** albo uruchom `adb kill-server`, jeśli masz zainstalowane ADB, a potem odłącz i ponownie podłącz telefon.
- W systemie Windows połączenie może też blokować sterownik USB producenta (OEM) zainstalowany dla Twojego telefonu: odłącz inne narzędzia Androida i spróbuj ponownie.
```

</div>

(web-installer-file)=

## Krok 3 – Wybierz plik APK AAPS

<input type="file" id="aapsi-apk-input" accept=".apk" disabled />

<span class="aapsi-status" id="aapsi-file-status"></span>

(web-installer-install)=

## Krok 4 – Instalacja

Aktualizujesz istniejący **AAPS**? Wszystkie jego ustawienia i historia zostaną zachowane, dokładnie tak jak przy `adb install -r`.

<button class="aapsi-btn" type="button" id="aapsi-install-btn" disabled>Zainstaluj na telefonie</button>

<div id="aapsi-progress-wrap" hidden>

<span class="aapsi-status" id="aapsi-install-status"></span>
<progress id="aapsi-install-progress" max="100" value="0"></progress>

</div>

<div class="aapsi-box aapsi-success" id="aapsi-result-success" hidden>

**AAPS jest zainstalowany.** Możesz odłączyć telefon. Jeśli to była Twoja pierwsza instalacja, przejdź do strony [Kreator konfiguracji AAPS](SetupWizard.md).

</div>

<div class="aapsi-box aapsi-error" id="aapsi-result-error" hidden>

<span id="aapsi-error-message"></span>

Szczegóły techniczne:

<pre id="aapsi-error-details"></pre>

</div>

----

Część dokumentacji **AAPS**. Zbudowane na bibliotekach open source [Tango (ya-webadb)](https://github.com/yume-chan/ya-webadb) (licencja MIT). Kod źródłowy strony i instrukcje budowania: [openaps/AndroidAPSdocs](https://github.com/openaps/AndroidAPSdocs).

**AAPS** to system typu DIY (zrób to sam), a nie produkt komercyjny: Ty go budujesz, Ty go instalujesz, Ty za niego odpowiadasz. Społeczność udostępnia tę stronę bez żadnej gwarancji.

<div id="aapsi-msgs" hidden>

- <span data-aapsi-msg="noDetails">(brak dalszych szczegółów)</span>
- <span data-aapsi-msg="errSignature">Ten plik APK został zbudowany z innym kluczem podpisu niż AAPS, który jest już zainstalowany na telefonie. Użyj tego samego magazynu kluczy (keystore) co wcześniej albo najpierw wyeksportuj ustawienia AAPS i odinstaluj stary AAPS (odinstalowanie usuwa wszystkie ustawienia i historię: najpierw wyeksportuj!).</span>
- <span data-aapsi-msg="errDowngrade">Na telefonie jest już nowsza wersja tej aplikacji. Aby wrócić do starszej wersji, najpierw wyeksportuj ustawienia i odinstaluj obecną aplikację.</span>
- <span data-aapsi-msg="errStorage">Na telefonie jest za mało wolnego miejsca. Zwolnij trochę miejsca i spróbuj ponownie.</span>
- <span data-aapsi-msg="errInvalidApk">Telefon nie rozpoznaje tego pliku jako prawidłowego pliku APK. Sprawdź, czy wybrałeś właściwy plik i czy pobieranie się zakończyło.</span>
- <span data-aapsi-msg="errOldSdk">Wersja Androida na tym telefonie jest za stara dla tego pliku APK.</span>
- <span data-aapsi-msg="errCanceled">Instalacja została odrzucona na telefonie. Patrz na ekran telefonu i zezwól na instalację, gdy pojawi się pytanie.</span>
- <span data-aapsi-msg="errBusy">Inny program używa połączenia ADB telefonu. Zamknij Android Studio (albo uruchom „adb kill-server”), odłącz i ponownie podłącz kabel, a potem spróbuj ponownie.</span>
- <span data-aapsi-msg="errLost">Połączenie z telefonem zostało przerwane. Sprawdź kabel, a potem połącz ponownie.</span>
- <span data-aapsi-msg="errGeneric">Instalacja się nie udała. Zobacz szczegóły techniczne poniżej i w razie potrzeby poproś o pomoc na kanałach społeczności AAPS.</span>
- <span data-aapsi-msg="errDisconnectedDuringInstall">Telefon został odłączony w trakcie instalacji. Podłącz go ponownie i spróbuj jeszcze raz: nic się nie zepsuło.</span>
- <span data-aapsi-msg="waitingPick">Czekam, aż wybierzesz urządzenie…</span>
- <span data-aapsi-msg="noDevice">Nie wybrano urządzenia. Czy Debugowanie USB jest włączone i czy kabel przesyła dane?</span>
- <span data-aapsi-msg="connecting">Łączę…</span>
- <span data-aapsi-msg="phoneDisconnected">Telefon został odłączony.</span>
- <span data-aapsi-msg="androidDevice">Urządzenie z Androidem</span>
- <span data-aapsi-msg="connectedTo">Połączono z {name}.</span>
- <span data-aapsi-msg="couldNotConnect">Nie udało się połączyć.</span>
- <span data-aapsi-msg="disconnected">Rozłączono.</span>
- <span data-aapsi-msg="notApk">„{file}” nie jest plikiem .apk. Wybierz plik APK AAPS, który zbudowałeś.</span>
- <span data-aapsi-msg="emptyFile">Ten plik jest pusty. Sprawdź pobieranie i wybierz plik ponownie.</span>
- <span data-aapsi-msg="notRealApk">„{file}” nie wygląda na prawdziwy plik APK. Czy wybrałeś właściwy plik?</span>
- <span data-aapsi-msg="selected">Wybrany: {file} ({size})</span>
- <span data-aapsi-msg="copying">Kopiowanie na telefon… {done} z {total}</span>
- <span data-aapsi-msg="installingOnPhone">Instalacja na telefonie… (to może potrwać minutę)</span>
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
