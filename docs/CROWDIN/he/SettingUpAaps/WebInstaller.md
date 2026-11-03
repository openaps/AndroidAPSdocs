(web-installer)=

# מתקין האינטרנט של AAPS

התקנת קובץ ה-APK של **AAPS** שבניתם בטלפון ה-Android, ישירות מהדפדפן הזה, דרך כבל USB. בלי שורת פקודה, בלי להוריד שום דבר. אפליקציות שמותקנות בדרך הזו (בדרך של ADB) **פטורות מאימות המפתחים של Google ב-Android**.

```{admonition} This page runs entirely in your browser
:class: tip

קובץ ה-APK והנתונים של הטלפון לעולם לא יוצאים מהמחשב הזה: הדף לא יכול לשלוח נתונים לשום מקום (ה-*Content-Security-Policy* שלו חוסם כל העלאה; אפשר לבדוק זאת בכלי המפתחים של הדפדפן, בלשונית Network). יש להשתמש בדף הזה רק בכתובת הרשמית שלו, שמקושרת מ[העברה והתקנה של AAPS](#android-developer-verification-web) בתיעוד של **AAPS**.
```

<noscript>

**JavaScript מושבת.** הדף הזה צריך JavaScript כדי לתקשר עם הטלפון.

</noscript>

<div id="aapsi-unsupported" class="aapsi-box aapsi-error" hidden>

**הדפדפן הזה לא יכול לתקשר עם התקני USB.** יש לפתוח את הדף ב-**Google Chrome**, ב-**Microsoft Edge** או ב-**Opera**, במחשב או במכשיר Android. Firefox, Safari וכל הדפדפנים ב-iPhone לא תומכים ב-WebUSB.

</div>

(web-installer-prepare)=

## שלב 1 – לפני שמתחילים

- **הפעלת USB debugging** (ניפוי באגים ב-USB) בטלפון (הגדרה חד-פעמית):
  - עברו אל **Settings** (הגדרות) > **About phone** (מידע על הטלפון) והקישו שבע פעמים על **Build number** (מספר Build), עד שהטלפון מאשר שאתם מפתחים.
  - חזרו למסך **Settings** הראשי, פתחו את **Developer options** (אפשרויות מפתח) והפעילו את **USB debugging**.
- חברו את הטלפון עם **כבל USB שמעביר נתונים** (חלק מכבלי הטעינה לא מעבירים נתונים: אם הטלפון אף פעם לא מזוהה, נסו כבל אחר).
- **סגרו את Android Studio** וכל תוכנה אחרת שמשתמשת ב-ADB: רק תוכנה אחת יכולה לתקשר עם הטלפון בכל רגע.
- הכינו את **קובץ ה-APK של AAPS** במחשב הזה (בבנייה בדפדפן, הורידו אותו קודם מ-Google Drive).

אין מחשב? הדף הזה עובד גם מ-Chrome ב*טלפון Android אחר*, שמחובר עם כבל USB-C ל-USB-C.

(web-installer-connect)=

## שלב 2 – חיבור הטלפון

לחצו על הכפתור, ואז בחרו את הטלפון ברשימה שהדפדפן מציג.

<button class="aapsi-btn" type="button" id="aapsi-connect-btn">חיבור הטלפון</button> <button class="aapsi-btn aapsi-secondary" type="button" id="aapsi-disconnect-btn" hidden>ניתוק</button>

<span class="aapsi-status" id="aapsi-connect-status"></span>

<div class="aapsi-box aapsi-warn" id="aapsi-authorize-hint" hidden>

**הסתכלו עכשיו בטלפון:** הקישו על **Allow** (אישור) בהודעה "Allow USB debugging?" (לאפשר ניפוי באגים ב-USB?), וסמנו את *"Always allow from this computer"* (לאפשר תמיד מהמחשב הזה). לא רואים את ההודעה? בטלו את נעילת המסך של הטלפון, או נתקו את הכבל וחברו אותו שוב.

</div>

<div id="aapsi-connect-help" hidden>

```{admonition} הטלפון לא מופיע, או שהחיבור נכשל?
:class: note

- בדקו ש-**USB debugging** מופעל ([שלב 1](#web-installer-prepare)) ושהכבל הוא כבל נתונים.
- סגרו את **Android Studio**, או הריצו `adb kill-server` אם ADB מותקן אצלכם, ואז נתקו את הטלפון וחברו אותו שוב.
- ב-Windows, גם מנהל התקן USB של היצרן (OEM) שהותקן עבור הטלפון יכול לתפוס את החיבור: נתקו כלי Android אחרים ונסו שוב.
```

</div>

(web-installer-file)=

## שלב 3 – בחירת קובץ ה-APK של AAPS

<input type="file" id="aapsi-apk-input" accept=".apk" disabled />

<span class="aapsi-status" id="aapsi-file-status"></span>

(web-installer-install)=

## שלב 4 – התקנה

מעדכנים **AAPS** קיים? כל ההגדרות וההיסטוריה שלו נשמרים, בדיוק כמו עם `adb install -r`.

<button class="aapsi-btn" type="button" id="aapsi-install-btn" disabled>התקנה בטלפון</button>

<div id="aapsi-progress-wrap" hidden>

<span class="aapsi-status" id="aapsi-install-status"></span>
<progress id="aapsi-install-progress" max="100" value="0"></progress>

</div>

<div class="aapsi-box aapsi-success" id="aapsi-result-success" hidden>

**AAPS מותקן.** אפשר לנתק את הטלפון. אם זו ההתקנה הראשונה, המשיכו אל [אשף ההתקנה](SetupWizard.md).

</div>

<div class="aapsi-box aapsi-error" id="aapsi-result-error" hidden>

<span id="aapsi-error-message"></span>

פרטים טכניים:

<pre id="aapsi-error-details"></pre>

</div>

----

חלק מהתיעוד של **AAPS**. מבוסס על ספריות הקוד הפתוח [Tango (ya-webadb)](https://github.com/yume-chan/ya-webadb) (רישיון MIT). קוד המקור של הדף והוראות הבנייה: [openaps/AndroidAPSdocs](https://github.com/openaps/AndroidAPSdocs).

**AAPS** היא מערכת DIY (עשו זאת בעצמכם), לא מוצר מסחרי: אתם בונים אותה, אתם מתקינים אותה, ואתם אחראים לה. הקהילה מספקת את הדף הזה בלי שום אחריות.

<div id="aapsi-msgs" hidden>

- <span data-aapsi-msg="noDetails">(אין פרטים נוספים)</span>
- <span data-aapsi-msg="errSignature">קובץ ה-APK הזה נבנה עם מפתח חתימה שונה מזה של ה-AAPS שכבר מותקן בטלפון. השתמשו באותו keystore כמו קודם, או ייצאו את הגדרות AAPS והסירו קודם את ה-AAPS הישן (הסרת ההתקנה מוחקת את כל ההגדרות וההיסטוריה שלו: ייצאו קודם!).</span>
- <span data-aapsi-msg="errDowngrade">בטלפון כבר יש גרסה חדשה יותר של האפליקציה הזו. כדי לחזור לגרסה ישנה יותר, ייצאו את ההגדרות והסירו קודם את האפליקציה הנוכחית.</span>
- <span data-aapsi-msg="errStorage">אין מספיק מקום פנוי בטלפון. פנו מקום ונסו שוב.</span>
- <span data-aapsi-msg="errInvalidApk">הטלפון לא מזהה את הקובץ הזה כ-APK תקין. בדקו שבחרתם את הקובץ הנכון ושההורדה הושלמה.</span>
- <span data-aapsi-msg="errOldSdk">גרסת Android בטלפון הזה ישנה מדי בשביל ה-APK הזה.</span>
- <span data-aapsi-msg="errCanceled">ההתקנה נדחתה בטלפון. הסתכלו במסך הטלפון ואשרו את ההתקנה כשהיא מתבקשת.</span>
- <span data-aapsi-msg="errBusy">תוכנה אחרת משתמשת בחיבור ה-ADB של הטלפון. סגרו את Android Studio (או הריצו "adb kill-server"), נתקו את הכבל וחברו אותו שוב, ואז נסו שוב.</span>
- <span data-aapsi-msg="errLost">החיבור לטלפון אבד. בדקו את הכבל, ואז התחברו שוב.</span>
- <span data-aapsi-msg="errGeneric">ההתקנה נכשלה. ראו את הפרטים הטכניים למטה, ואם צריך, בקשו עזרה בערוצי הקהילה של AAPS.</span>
- <span data-aapsi-msg="errDisconnectedDuringInstall">הטלפון נותק במהלך ההתקנה. חברו אותו שוב ונסו שוב: שום דבר לא נשבר.</span>
- <span data-aapsi-msg="waitingPick">ממתין לבחירת מכשיר…</span>
- <span data-aapsi-msg="noDevice">לא נבחר מכשיר. האם USB debugging מופעל, והאם הכבל הוא כבל נתונים?</span>
- <span data-aapsi-msg="connecting">מתחבר…</span>
- <span data-aapsi-msg="phoneDisconnected">הטלפון נותק.</span>
- <span data-aapsi-msg="androidDevice">מכשיר Android</span>
- <span data-aapsi-msg="connectedTo">מחובר אל {name}.</span>
- <span data-aapsi-msg="couldNotConnect">לא ניתן להתחבר.</span>
- <span data-aapsi-msg="disconnected">מנותק.</span>
- <span data-aapsi-msg="notApk">"{file}" אינו קובץ apk. יש לבחור את קובץ ה-APK של AAPS שבניתם.</span>
- <span data-aapsi-msg="emptyFile">הקובץ הזה ריק. בדקו את ההורדה ובחרו את הקובץ שוב.</span>
- <span data-aapsi-msg="notRealApk">"{file}" לא נראה כמו קובץ APK אמיתי. האם בחרתם את הקובץ הנכון?</span>
- <span data-aapsi-msg="selected">נבחר: {file} ({size})</span>
- <span data-aapsi-msg="copying">מעתיק לטלפון… {done} מתוך {total}</span>
- <span data-aapsi-msg="installingOnPhone">מתקין בטלפון… (זה יכול לקחת דקה)</span>
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
