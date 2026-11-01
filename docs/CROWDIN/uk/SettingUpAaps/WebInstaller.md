(web-installer)=

# Вебінсталятор AAPS

Встановіть зібраний вами APK **AAPS** на свій телефон Android прямо з цього браузера через кабель USB. Без командного рядка, нічого не потрібно завантажувати. Застосунки, встановлені таким способом (через ADB), **не потребують перевірки розробників Android від Google**.

```{admonition} This page runs entirely in your browser
:class: tip

Ваш файл APK і дані телефону ніколи не залишають цей комп'ютер: сторінка не може нікуди надсилати дані (її *Content-Security-Policy* блокує будь-яке вивантаження; це можна перевірити в інструментах розробника браузера, вкладка Network). Використовуйте цю сторінку лише за її офіційною адресою, на яку веде посилання з розділу [Перенесення та встановлення AAPS](#android-developer-verification-web) у документації **AAPS**.
```

<noscript>

**JavaScript вимкнено.** Цій сторінці потрібен JavaScript, щоб зв'язатися з вашим телефоном.

</noscript>

<div id="aapsi-unsupported" class="aapsi-box aapsi-error" hidden>

**Цей браузер не може працювати з пристроями USB.** Відкрийте цю сторінку в **Google Chrome**, **Microsoft Edge** або **Opera** на комп'ютері чи пристрої Android. Firefox, Safari і всі браузери на iPhone не підтримують WebUSB.

</div>

(web-installer-prepare)=

## Крок 1 – Перед початком

- **Увімкніть USB debugging** (налагодження через USB) на телефоні (налаштовується один раз):
  - Перейдіть до **Settings** (Налаштування) > **About phone** (Про телефон) і натисніть **Build number** (Номер збірки) сім разів, доки телефон не підтвердить, що ви розробник.
  - Поверніться до головного меню **Settings** (Налаштування), відкрийте **Developer options** (Параметри розробника) і увімкніть **USB debugging** (Налагодження через USB).
- Підключіть телефон **кабелем USB, який передає дані** (деякі кабелі для заряджання не передають дані: якщо телефон ніколи не знаходиться, спробуйте інший кабель).
- **Закрийте Android Studio** та інші програми, які використовують ADB: з телефоном одночасно може працювати лише одна програма.
- Підготуйте свій **файл APK AAPS** на цьому комп'ютері (для збірки в браузері спочатку завантажте його зі свого Google Drive).

Немає комп'ютера? Ця сторінка працює також у Chrome на *іншому телефоні Android*, підключеному кабелем USB-C – USB-C.

(web-installer-connect)=

## Крок 2 – Підключіть телефон

Натисніть кнопку, потім виберіть свій телефон у списку, який покаже браузер.

<button class="aapsi-btn" type="button" id="aapsi-connect-btn">Підключити телефон</button> <button class="aapsi-btn aapsi-secondary" type="button" id="aapsi-disconnect-btn" hidden>Відключити</button>

<span class="aapsi-status" id="aapsi-connect-status"></span>

<div class="aapsi-box aapsi-warn" id="aapsi-authorize-hint" hidden>

**Подивіться зараз на телефон:** натисніть **Allow** (Дозволити) у повідомленні «Allow USB debugging?» (Дозволити налагодження через USB?) і поставте позначку *«Always allow from this computer»* (Завжди дозволяти з цього комп'ютера). Не бачите його? Розблокуйте екран телефону або від'єднайте та знову під'єднайте кабель.

</div>

<div id="aapsi-connect-help" hidden>

```{admonition} Телефон не з'являється або підключення не вдається?
:class: note

- Перевірте, що **USB debugging** (налагодження через USB) увімкнено ([крок 1](#web-installer-prepare)), а кабель передає дані.
- Закрийте **Android Studio** або виконайте `adb kill-server`, якщо у вас встановлено ADB, потім від'єднайте та знову під'єднайте телефон.
- У Windows з'єднання може також утримувати драйвер USB від виробника (OEM), встановлений для вашого телефону: закрийте інші інструменти для Android і спробуйте знову.
```

</div>

(web-installer-file)=

## Крок 3 – Виберіть свій файл APK AAPS

<input type="file" id="aapsi-apk-input" accept=".apk" disabled />

<span class="aapsi-status" id="aapsi-file-status"></span>

(web-installer-install)=

## Крок 4 – Встановлення

Оновлюєте наявний **AAPS**? Усі його налаштування та історія зберігаються, так само як з `adb install -r`.

<button class="aapsi-btn" type="button" id="aapsi-install-btn" disabled>Встановити на телефон</button>

<div id="aapsi-progress-wrap" hidden>

<span class="aapsi-status" id="aapsi-install-status"></span>
<progress id="aapsi-install-progress" max="100" value="0"></progress>

</div>

<div class="aapsi-box aapsi-success" id="aapsi-result-success" hidden>

**AAPS встановлено.** Можна від'єднати телефон. Якщо це було ваше перше встановлення, продовжіть з [Майстром налаштування](SetupWizard.md).

</div>

<div class="aapsi-box aapsi-error" id="aapsi-result-error" hidden>

<span id="aapsi-error-message"></span>

Технічні подробиці:

<pre id="aapsi-error-details"></pre>

</div>

----

Частина документації **AAPS**. Створено на основі бібліотек з відкритим кодом [Tango (ya-webadb)](https://github.com/yume-chan/ya-webadb) (ліцензія MIT). Код сторінки та інструкції зі збірки: [openaps/AndroidAPSdocs](https://github.com/openaps/AndroidAPSdocs).

**AAPS** — це система DIY («зроби сам»), а не комерційний продукт: ви її збираєте, ви її встановлюєте, ви за неї відповідаєте. Цю сторінку надає спільнота без жодних гарантій.

<div id="aapsi-msgs" hidden>

- <span data-aapsi-msg="noDetails">(більше подробиць немає)</span>
- <span data-aapsi-msg="errSignature">Цей APK зібрано з іншим ключем підпису, ніж AAPS, який уже встановлено на телефоні. Використовуйте той самий keystore, що й раніше, або спочатку експортуйте налаштування AAPS і видаліть старий AAPS (після видалення всі його налаштування та історія будуть втрачені: спочатку експортуйте!).</span>
- <span data-aapsi-msg="errDowngrade">На телефоні вже встановлено новішу версію цього застосунку. Щоб повернутися до старішої версії, спочатку експортуйте налаштування і видаліть поточний застосунок.</span>
- <span data-aapsi-msg="errStorage">На телефоні недостатньо вільного місця. Звільніть трохи місця і спробуйте знову.</span>
- <span data-aapsi-msg="errInvalidApk">Телефон не розпізнає цей файл як правильний APK. Перевірте, що ви вибрали правильний файл і що завантаження завершилося.</span>
- <span data-aapsi-msg="errOldSdk">Версія Android на цьому телефоні застара для цього APK.</span>
- <span data-aapsi-msg="errCanceled">Встановлення відхилено на телефоні. Стежте за екраном телефону і дозвольте встановлення, коли з'явиться запит.</span>
- <span data-aapsi-msg="errBusy">Інша програма використовує з'єднання ADB з телефоном. Закрийте Android Studio (або виконайте "adb kill-server"), від'єднайте та знову під'єднайте кабель, потім спробуйте знову.</span>
- <span data-aapsi-msg="errLost">З'єднання з телефоном втрачено. Перевірте кабель, потім підключіться знову.</span>
- <span data-aapsi-msg="errGeneric">Встановлення не вдалося. Подивіться технічні подробиці нижче і, якщо потрібно, попросіть допомоги в каналах спільноти AAPS.</span>
- <span data-aapsi-msg="errDisconnectedDuringInstall">Телефон від'єднався під час встановлення. Підключіть його знову і спробуйте ще раз: нічого не зламано.</span>
- <span data-aapsi-msg="waitingPick">Очікуємо, поки ви виберете пристрій…</span>
- <span data-aapsi-msg="noDevice">Пристрій не вибрано. Чи увімкнено налагодження через USB і чи передає кабель дані?</span>
- <span data-aapsi-msg="connecting">Підключення…</span>
- <span data-aapsi-msg="phoneDisconnected">Телефон від'єднано.</span>
- <span data-aapsi-msg="androidDevice">Пристрій Android</span>
- <span data-aapsi-msg="connectedTo">Підключено до {name}.</span>
- <span data-aapsi-msg="couldNotConnect">Не вдалося підключитися.</span>
- <span data-aapsi-msg="disconnected">Відключено.</span>
- <span data-aapsi-msg="notApk">«{file}» — це не файл .apk. Виберіть APK AAPS, який ви зібрали.</span>
- <span data-aapsi-msg="emptyFile">Цей файл порожній. Перевірте завантаження і виберіть файл знову.</span>
- <span data-aapsi-msg="notRealApk">«{file}» не схожий на справжній файл APK. Ви вибрали правильний файл?</span>
- <span data-aapsi-msg="selected">Вибрано: {file} ({size})</span>
- <span data-aapsi-msg="copying">Копіювання на телефон… {done} з {total}</span>
- <span data-aapsi-msg="installingOnPhone">Встановлення на телефоні… (це може тривати хвилину)</span>
- <span data-aapsi-msg="megabytes">{n} МБ</span>

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
