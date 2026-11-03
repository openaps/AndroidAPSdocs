(web-installer)=

# AAPS 웹 설치 프로그램

직접 빌드한 **AAPS** APK를 USB 케이블로 이 브라우저에서 바로 Android 휴대폰에 설치합니다. 명령줄도, 다운로드할 것도 없습니다. 이 방법(ADB 방식)으로 설치한 앱은 **Google의 Android 개발자 인증이 면제**됩니다.

```{admonition} This page runs entirely in your browser
:class: tip

APK 파일과 휴대폰 데이터는 절대 이 컴퓨터를 떠나지 않습니다. 이 페이지는 데이터를 어디로도 보낼 수 없습니다(페이지의 *Content-Security-Policy*가 모든 업로드를 막습니다. 브라우저 개발자 도구의 Network 탭에서 확인할 수 있습니다). 이 페이지는 반드시 **AAPS** 문서의 [AAPS를 스마트폰으로 옮기고 설치하기](#android-developer-verification-web)에 링크된 공식 주소에서만 사용하십시오.
```

<noscript>

**JavaScript가 꺼져 있습니다.** 이 페이지가 휴대폰과 통신하려면 JavaScript가 필요합니다.

</noscript>

<div id="aapsi-unsupported" class="aapsi-box aapsi-error" hidden>

**이 브라우저는 USB 기기와 통신할 수 없습니다.** 컴퓨터나 Android 기기에서 **Google Chrome**, **Microsoft Edge** 또는 **Opera**로 이 페이지를 여십시오. Firefox, Safari, 그리고 모든 iPhone 브라우저는 WebUSB를 지원하지 않습니다.

</div>

(web-installer-prepare)=

## 1단계 – 시작하기 전에

- 휴대폰에서 **USB debugging(USB 디버깅)을 켜십시오**(처음 한 번만 설정):
  - **Settings**(설정) > **About phone**(휴대전화 정보)으로 가서, 휴대폰이 개발자가 되었다고 알려 줄 때까지 **Build number**(빌드 번호)를 일곱 번 누르십시오.
  - 기본 **Settings**로 돌아가서 **Developer options**(개발자 옵션)를 열고 **USB debugging**을 켜십시오.
- **데이터 전송이 되는 USB 케이블**로 휴대폰을 연결하십시오(일부 충전용 케이블은 데이터를 전송할 수 없습니다. 휴대폰이 전혀 감지되지 않으면 다른 케이블을 사용해 보십시오).
- **Android Studio를 닫고**, ADB를 사용하는 다른 프로그램도 모두 닫으십시오. 한 번에 하나의 프로그램만 휴대폰과 통신할 수 있습니다.
- 이 컴퓨터에 **AAPS APK 파일**을 준비해 두십시오(브라우저 빌드의 경우 먼저 Google Drive에서 다운로드하십시오).

컴퓨터가 없습니까? 이 페이지는 USB-C to USB-C 케이블로 연결한 *다른 Android 휴대폰*의 Chrome에서도 작동합니다.

(web-installer-connect)=

## 2단계 – 휴대폰 연결하기

버튼을 클릭한 다음, 브라우저가 보여 주는 목록에서 휴대폰을 고르십시오.

<button class="aapsi-btn" type="button" id="aapsi-connect-btn">휴대폰 연결</button> <button class="aapsi-btn aapsi-secondary" type="button" id="aapsi-disconnect-btn" hidden>연결 해제</button>

<span class="aapsi-status" id="aapsi-connect-status"></span>

<div class="aapsi-box aapsi-warn" id="aapsi-authorize-hint" hidden>

**지금 휴대폰을 보십시오:** "Allow USB debugging?"(USB 디버깅을 허용하시겠습니까?) 메시지에서 **Allow**(허용)를 누르고, *"Always allow from this computer"*(이 컴퓨터에서 항상 허용)에 체크하십시오. 보이지 않습니까? 휴대폰 화면 잠금을 풀거나, 케이블을 뽑았다가 다시 꽂으십시오.

</div>

<div id="aapsi-connect-help" hidden>

```{admonition} 휴대폰이 나타나지 않거나 연결에 실패합니까?
:class: note

- **USB debugging**이 켜져 있는지([1단계](#web-installer-prepare)), 케이블이 데이터 케이블인지 확인하십시오.
- **Android Studio**를 닫거나, ADB가 설치되어 있다면 `adb kill-server`를 실행한 다음 휴대폰을 뽑았다가 다시 꽂으십시오.
- Windows에서는 휴대폰용으로 설치된 OEM USB 드라이버도 연결을 잡고 있을 수 있습니다. 다른 Android 도구의 연결을 끊고 다시 시도하십시오.
```

</div>

(web-installer-file)=

## 3단계 – AAPS APK 파일 선택하기

<input type="file" id="aapsi-apk-input" accept=".apk" disabled />

<span class="aapsi-status" id="aapsi-file-status"></span>

(web-installer-install)=

## 4단계 – 설치하기

기존 **AAPS**를 업데이트합니까? `adb install -r`과 똑같이 모든 설정과 이력이 유지됩니다.

<button class="aapsi-btn" type="button" id="aapsi-install-btn" disabled>휴대폰에 설치</button>

<div id="aapsi-progress-wrap" hidden>

<span class="aapsi-status" id="aapsi-install-status"></span>
<progress id="aapsi-install-progress" max="100" value="0"></progress>

</div>

<div class="aapsi-box aapsi-success" id="aapsi-result-success" hidden>

**AAPS가 설치되었습니다.** 이제 휴대폰을 뽑아도 됩니다. 처음 설치했다면 [AAPS 설정 마법사](SetupWizard.md)로 계속하십시오.

</div>

<div class="aapsi-box aapsi-error" id="aapsi-result-error" hidden>

<span id="aapsi-error-message"></span>

기술 세부 정보:

<pre id="aapsi-error-details"></pre>

</div>

----

**AAPS** 문서의 일부입니다. 오픈 소스 [Tango (ya-webadb)](https://github.com/yume-chan/ya-webadb) 라이브러리(MIT 라이선스)로 만들었습니다. 페이지 소스와 빌드 안내: [openaps/AndroidAPSdocs](https://github.com/openaps/AndroidAPSdocs).

**AAPS**는 상용 제품이 아닌 DIY 시스템입니다. 직접 빌드하고, 직접 설치하며, 그에 대한 책임도 본인에게 있습니다. 이 페이지는 커뮤니티가 아무런 보증 없이 제공합니다.

<div id="aapsi-msgs" hidden>

- <span data-aapsi-msg="noDetails">(추가 세부 정보 없음)</span>
- <span data-aapsi-msg="errSignature">이 APK는 휴대폰에 이미 설치된 AAPS와 다른 서명 키로 빌드되었습니다. 이전과 같은 키 저장소를 사용하거나, 먼저 AAPS 설정을 내보낸 후 기존 AAPS를 제거하십시오(제거하면 모든 설정과 이력이 사라집니다. 먼저 내보내십시오!).</span>
- <span data-aapsi-msg="errDowngrade">휴대폰에 이 앱의 더 새로운 버전이 이미 있습니다. 이전 버전으로 돌아가려면 먼저 설정을 내보내고 현재 앱을 제거하십시오.</span>
- <span data-aapsi-msg="errStorage">휴대폰에 여유 저장 공간이 부족합니다. 공간을 확보한 후 다시 시도하십시오.</span>
- <span data-aapsi-msg="errInvalidApk">휴대폰이 이 파일을 올바른 APK로 인식하지 못합니다. 올바른 파일을 선택했는지, 다운로드가 완료되었는지 확인하십시오.</span>
- <span data-aapsi-msg="errOldSdk">이 휴대폰의 Android 버전이 이 APK에 비해 너무 오래되었습니다.</span>
- <span data-aapsi-msg="errCanceled">휴대폰에서 설치가 거부되었습니다. 휴대폰 화면을 보고, 요청이 나오면 설치를 허용하십시오.</span>
- <span data-aapsi-msg="errBusy">다른 프로그램이 휴대폰의 ADB 연결을 사용하고 있습니다. Android Studio를 닫고(또는 "adb kill-server"를 실행하고), 케이블을 뽑았다가 다시 꽂은 다음 다시 시도하십시오.</span>
- <span data-aapsi-msg="errLost">휴대폰과의 연결이 끊겼습니다. 케이블을 확인한 다음 다시 연결하십시오.</span>
- <span data-aapsi-msg="errGeneric">설치에 실패했습니다. 아래 기술 세부 정보를 보고, 필요하면 AAPS 커뮤니티 채널에서 도움을 요청하십시오.</span>
- <span data-aapsi-msg="errDisconnectedDuringInstall">설치 중에 휴대폰 연결이 끊겼습니다. 다시 연결하고 다시 시도하십시오. 망가진 것은 없습니다.</span>
- <span data-aapsi-msg="waitingPick">기기 선택을 기다리는 중…</span>
- <span data-aapsi-msg="noDevice">선택된 기기가 없습니다. USB 디버깅이 켜져 있고, 케이블이 데이터 케이블입니까?</span>
- <span data-aapsi-msg="connecting">연결 중…</span>
- <span data-aapsi-msg="phoneDisconnected">휴대폰 연결이 끊겼습니다.</span>
- <span data-aapsi-msg="androidDevice">Android 기기</span>
- <span data-aapsi-msg="connectedTo">{name}에 연결되었습니다.</span>
- <span data-aapsi-msg="couldNotConnect">연결할 수 없습니다.</span>
- <span data-aapsi-msg="disconnected">연결이 해제되었습니다.</span>
- <span data-aapsi-msg="notApk">"{file}"은(는) .apk 파일이 아닙니다. 직접 빌드한 AAPS APK를 선택하십시오.</span>
- <span data-aapsi-msg="emptyFile">이 파일은 비어 있습니다. 다운로드를 확인하고 다시 선택하십시오.</span>
- <span data-aapsi-msg="notRealApk">"{file}"은(는) 실제 APK 파일로 보이지 않습니다. 올바른 파일을 선택했습니까?</span>
- <span data-aapsi-msg="selected">선택됨: {file} ({size})</span>
- <span data-aapsi-msg="copying">휴대폰으로 복사 중… {done} / {total}</span>
- <span data-aapsi-msg="installingOnPhone">휴대폰에 설치 중… (1분 정도 걸릴 수 있습니다)</span>
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
