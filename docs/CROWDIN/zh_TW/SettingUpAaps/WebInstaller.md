(web-installer)=

# AAPS 網頁安裝工具

透過 USB 傳輸線，直接在這個瀏覽器中，將您建置的 **AAPS** APK 安裝到 Android 手機。不需要使用命令列，也不需要下載任何檔案。以這種方式（ADB 方式）安裝的應用程式，**不受 Google 的 Android 開發人員驗證限制**。

```{admonition} This page runs entirely in your browser
:class: tip

您的 APK 檔案和手機資料絕不會離開這台電腦：此網頁無法將資料傳送到任何地方（其 *Content-Security-Policy* 會封鎖所有上傳；您可以在瀏覽器開發人員工具的「網路」分頁中確認）。請務必只在官方網址使用此網頁。官方網址連結位於 **AAPS** 文件的[傳輸並安裝 AAPS](#android-developer-verification-web) 頁面。
```

<noscript>

**JavaScript 已停用。** 此網頁需要使用 JavaScript 才能與手機通訊。

</noscript>

<div id="aapsi-unsupported" class="aapsi-box aapsi-error" hidden>

**此瀏覽器無法與 USB 裝置通訊。** 請在電腦或 Android 裝置上使用 **Google Chrome**、**Microsoft Edge** 或 **Opera** 開啟此網頁。 Firefox、Safari 和所有 iPhone 瀏覽器都不支援 WebUSB。

</div>

(web-installer-prepare)=

## 步驟 1 – 開始之前

- **在手機上啟用 USB 偵錯**（只需設定一次）：
  - 前往 **設定** > **關於手機**，然後連續點選 **版本號碼** 七次，直到手機確認您已成為開發人員。
  - 回到主要的**設定**頁面，開啟**開發人員選項**，然後啟用**USB 偵錯**。
- 使用**可傳輸資料的 USB 傳輸線**連接手機（有些充電線無法傳輸資料；如果手機一直未被偵測到，請改用其他傳輸線）。
- **關閉 Android Studio** 和其他任何會使用 ADB 的程式：同一時間只能有一個程式與手機通訊。
- 請先在這台電腦上備妥**AAPS APK 檔案**（如果是透過瀏覽器建置，請先從 Google 雲端硬碟下載）。

沒有電腦嗎？您也可以在*另一支 Android 手機*上使用 Chrome 開啟此頁面，並以 USB-C 對 USB-C 傳輸線連接兩支手機。

(web-installer-connect)=

## 步驟 2 – 連接手機

按一下按鈕，然後從瀏覽器顯示的清單中選擇您的手機。

<button class="aapsi-btn" type="button" id="aapsi-connect-btn">連接手機</button> <button class="aapsi-btn aapsi-secondary" type="button" id="aapsi-disconnect-btn" hidden>中斷連線</button>

<span class="aapsi-status" id="aapsi-connect-status"></span>

<div class="aapsi-box aapsi-warn" id="aapsi-authorize-hint" hidden>

**現在請查看手機：**在「允許 USB 偵錯嗎？」訊息中點選 **允許**，並勾選 *「一律允許這台電腦」*。沒有看到訊息嗎？解鎖手機螢幕，或拔下傳輸線再重新插上。

</div>

<div id="aapsi-connect-help" hidden>

```{admonition} 手機沒有出現在清單中，或是連線失敗？
:class: note

- 確認已啟用 **USB 偵錯**（[步驟 1](#web-installer-prepare)），且使用的是可傳輸資料的傳輸線。
- 關閉 **Android Studio**；如果已安裝 ADB，也可以執行 `adb kill-server`，然後拔下手機的傳輸線再重新插上。
- 在 Windows 上，為手機安裝的 OEM USB 驅動程式也可能占用連線：拔除其他 Android 工具後再試一次。
```

</div>

(web-installer-file)=

## 步驟 3 – 選擇 AAPS APK 檔案

<input type="file" id="aapsi-apk-input" accept=".apk" disabled />

<span class="aapsi-status" id="aapsi-file-status"></span>

(web-installer-install)=

## 步驟 4 – 安裝

要更新現有的 **AAPS** 嗎？所有設定和紀錄都會保留，效果與執行 `adb install -r` 完全相同。

<button class="aapsi-btn" type="button" id="aapsi-install-btn" disabled>在手機上安裝</button>

<div id="aapsi-progress-wrap" hidden>

<span class="aapsi-status" id="aapsi-install-status"></span>
<progress id="aapsi-install-progress" max="100" value="0"></progress>

</div>

<div class="aapsi-box aapsi-success" id="aapsi-result-success" hidden>

**AAPS 已安裝。**您可以拔除手機。如果這是您第一次安裝，請繼續執行[設定嚮導](SetupWizard.md)。

</div>

<div class="aapsi-box aapsi-error" id="aapsi-result-error" hidden>

<span id="aapsi-error-message"></span>

技術細節：

<pre id="aapsi-error-details"></pre>

</div>

----

屬於 **AAPS** 說明文件的一部分。使用開放原始碼的 [Tango (ya-webadb)](https://github.com/yume-chan/ya-webadb) 程式庫建置（MIT 授權條款）。頁面原始碼與建置說明：[openaps/AndroidAPSdocs](https://github.com/openaps/AndroidAPSdocs)。

**AAPS** 是 DIY 系統，並非商業產品：由您自行建置、安裝並負責。此頁面由社群提供，不附帶任何保證。

<div id="aapsi-msgs" hidden>

- <span data-aapsi-msg="noDetails">（沒有其他詳細資訊）</span>
- <span data-aapsi-msg="errSignature">此 APK 使用的簽署金鑰與手機上已安裝的 AAPS 不同。請使用先前相同的金鑰庫，或先匯出 AAPS 設定，再解除安裝舊版 AAPS（解除安裝會清除所有設定和紀錄，請務必先匯出！）。</span>
- <span data-aapsi-msg="errDowngrade">手機上已安裝較新版本的這個應用程式。若要回復至較舊版本，請先匯出設定並解除安裝目前的應用程式。</span>
- <span data-aapsi-msg="errStorage">手機的可用儲存空間不足。請釋出一些空間後再試一次。</span>
- <span data-aapsi-msg="errInvalidApk">手機無法辨識此檔案是有效的 APK。請確認選取的檔案正確，且已完成下載。</span>
- <span data-aapsi-msg="errOldSdk">這支手機的 Android 版本太舊，無法使用此 APK。</span>
- <span data-aapsi-msg="errCanceled">您已在手機上拒絕安裝。請查看手機螢幕，並在出現提示時允許安裝。</span>
- <span data-aapsi-msg="errBusy">另一個程式正在使用手機的 ADB 連線。請關閉 Android Studio（或執行「adb kill-server」），拔下傳輸線再重新插上，然後再試一次。</span>
- <span data-aapsi-msg="errLost">與手機的連線已中斷。請檢查傳輸線，然後重新連線。</span>
- <span data-aapsi-msg="errGeneric">安裝失敗。請查看下方的技術細節，如有需要，請透過 AAPS 社群管道尋求協助。</span>
- <span data-aapsi-msg="errDisconnectedDuringInstall">安裝期間手機已中斷連線。重新連線後再試一次即可，無須擔心。</span>
- <span data-aapsi-msg="waitingPick">正在等待您選擇裝置…</span>
- <span data-aapsi-msg="noDevice">尚未選擇裝置。是否已啟用 USB 偵錯？使用的傳輸線是否可傳輸資料？</span>
- <span data-aapsi-msg="connecting">正在連線…</span>
- <span data-aapsi-msg="phoneDisconnected">手機已中斷連線。</span>
- <span data-aapsi-msg="androidDevice">Android 裝置</span>
- <span data-aapsi-msg="connectedTo">已連線至 {name}。</span>
- <span data-aapsi-msg="couldNotConnect">無法連線。</span>
- <span data-aapsi-msg="disconnected">已中斷連線。</span>
- <span data-aapsi-msg="notApk">「{file}」不是 .apk 檔案。請選擇您建置的 AAPS APK。</span>
- <span data-aapsi-msg="emptyFile">此檔案是空的。請確認下載是否完整，然後重新選取檔案。</span>
- <span data-aapsi-msg="notRealApk">「{file}」看起來不是有效的 APK 檔案。您選對檔案了嗎？</span>
- <span data-aapsi-msg="selected">已選取：{file}（{size}）</span>
- <span data-aapsi-msg="copying">正在複製到手機… {done} / {total}</span>
- <span data-aapsi-msg="installingOnPhone">正在手機上安裝…（可能需要一分鐘）</span>
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
