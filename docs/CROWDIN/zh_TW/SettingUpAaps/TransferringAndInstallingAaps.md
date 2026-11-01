# 將 **AAPS** 傳輸並安裝到你的智慧型手機上

在上一部分[建立**AAPS**](../SettingUpAaps/BuildingAaps.md)中，你在電腦上建立了**AAPS**應用程式（這是一個.apk檔案）。

接下來，請將 **AAPS** APK 檔案（以及你可能需要的其他 App，例如 BYODA、xDrip 或其他 CGM 接收器 App）**傳輸**至 Android 智慧型手機，然後**安裝**這些 App。在智慧型手機上安裝**AAPS**後，你將能夠進行[**AAPS 循環的配置**](../SettingUpAaps/SetupWizard.md)。

本頁也會說明[Android 開發人員驗證](#android-developer-verification)。Google 將從 2026 年 9 月起逐步推出這項變更，影響自行建置 App 的安裝方式；此外，也會介紹變更後仍可使用的[免費安裝方式](#android-developer-verification-free-methods)。

```{contents} Table of contents
:depth: 1
:local: true
```

## 點選 APK 檔案安裝 AAPS

目前，你可以將 APK 檔案傳輸到手機，再開啟（「點選」）檔案來安裝 **AAPS**。有幾種方法可以將**AAPS** APK 檔案從電腦轉移到智慧型手機。在這裡，我們介紹兩種不同的傳輸方式：

* 選項 1 - 使用 Google 雲端硬碟 (Gdrive)
* 選項 2 - 使用 USB 傳輸線

請注意，透過電子郵件進行傳輸可能會導致問題，因此不建議使用此方式。

```{admonition} Android developer verification
:class: warning
Google 將從 2026 年 9 月起逐步推出 [Android 開發人員驗證](#android-developer-verification)（首先在巴西、印尼、新加坡和泰國實施；2027 年推廣至全球）。在實施這項驗證的地區，透過點選 APK 檔案安裝 App（如下方兩種方式所述）將會遭到封鎖。遇到這種情況時，請改用本頁下方介紹的其中一種[免費安裝方式](#android-developer-verification-free-methods)。
```

### 選項 1。使用 Google 雲端硬碟來傳輸檔案

在你的網頁瀏覽器中打開[Google.com](https://www.google.com/)並登錄你的 Google 帳戶。

在右上方的 Google 選單中選擇雲端硬碟應用程式。

![啟動雲端硬碟應用](../images/GoogleDriveInWebbrowser.png)

點選左上角的**新增**（或在檔案和資料夾下方的空白處按右鍵），然後選取**檔案上傳**。

![使用 Google 雲端硬碟應用上傳 apk 檔案](../images/GoogleDriveUploadFile.png)

APK 檔案應該已經上傳到 Google 雲端硬碟。

#### 使用 Google Drive 應用程式執行 apk 檔案以進行安裝。

切換到你的手機並啟動 Google 雲端硬碟應用程式。他是預裝的應用程式，你可以在其他 Google 應用程式所在的位置找到他，或透過搜尋應用程式名稱來找到他。

![啟動 Google 雲端硬碟應用](../images/GoogleDriveMobileAPPLaunch.png)

在手機上的 Google 雲端硬碟 App 中點選檔案名稱，開始安裝 APK。

![啟動 apk 安裝](../images/GoogleDriveMobileUploadedAPK.png)

如果出現安全性通知，指出目前不允許從 Google 雲端硬碟安裝 App，請點選「設定」並暫時允許安裝。完成後，請關閉這項允許，因為一直開啟會有安全風險。

![安全通知 Google 雲端硬碟](../images/GoogleDriveMobileMissingSecuritySetting.png)

![安全通知 Google 雲端硬碟](../images/GoogleDriveMobileSettingSecuritySetting.png)

安裝完成後，此步驟就完成了。

你應該能看到**AAPS**圖示並能夠打開應用程式。

```{warning}
**重要安全通知**
你是否記得禁止從 Google Drive 安裝？
```

請繼續[設定 AAPS 循環](../SettingUpAaps/SetupWizard.md)。

### 選項 2。使用 USB 傳輸線來傳輸檔案

傳輸 AAPS APK 檔案的第二種方式是使用[USB 傳輸線](https://support.google.com/android/answer/9064445?hl=en)。

將檔案從電腦上的位置傳輸到手機的“下載”資料夾。

在手機上，你需要允許安裝來自未知來源的應用程式。如何操作的解釋可以在網路上找到（_例如_ [這裡](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/)或[這裡](https://www.androidcentral.com/unknown-sources)）。

拖曳檔案完成傳輸後，開啟手機上的「下載」資料夾，然後點選 AAPS APK 檔案：

![下載資料夾中的 APK 檔案](../images/install/install_01_downloads_apk.png)

第一次安裝時，Android 會提示你目前不允許手機從此來源安裝未知的 App。點選「**設定**」：

![未知 App 的安全性通知](../images/install/install_02_unknown_apps_notice.png)

啟用「**允許來自此來源**」，然後返回：

![已啟用「允許來自此來源」](../images/install/install_04_unknown_apps_allowed.png)

再次按下 APK 檔案，然後選取「**安裝**」：

![安裝提示](../images/install/install_05_install_prompt.png)

安裝完成後，按下「**開啟**」以啟動 **AAPS**，或按下「**完成**」稍後再開啟：

![應用程式已安裝](../images/install/install_07_app_installed.png)

```{warning}
**重要安全提醒**
安裝完成後，請記得再次停用「允許來自此來源」，因為一直保持啟用會有安全風險。
```

請繼續[設定 AAPS 循環](../SettingUpAaps/SetupWizard.md)。

(transferring-installing-play-protect-warning)=
## Google Play Protect 警告

安裝 **AAPS** 時，Google Play Protect 可能會警告您，指出這個應用程式不安全、是為舊版 Android 建置，且未包含最新的隱私保護措施。

![Google Play Protect 警告](../images/troubleshooting/InstallGPP.png)

自行建置的應用程式出現這種情況是正常的。依序點選「**更多詳細資料**」和「**仍要安裝**」。

如果安裝遭到**封鎖**，並顯示有關未驗證開發人員的訊息（而非單純警告），請參閱下方的[Android 開發人員驗證](#android-developer-verification)。

(android-developer-verification)=

## Android 開發人員驗證

Google 正在推出**Android 開發人員驗證**：在大多數 Android 手機上，只有經過驗證的開發人員向 Google 註冊的應用程式才能安裝。這項規定也適用於從 APK 檔案安裝的應用程式（「側載」）——您自行建置的 **AAPS** 應用程式就是透過這種方式安裝。

### 有哪些變更

在搭載 Google 服務的手機上安裝 **AAPS** 時（也就是「通過認證」的 Android 裝置——幾乎所有搭載 Play 商店銷售的手機），Android 會確認該應用程式是否來自已向 Google 註冊的開發人員。如果不是，透過點選 APK 檔案進行一般安裝的方式就會遭到封鎖。

**系統會在安裝或更新應用程式時進行驗證。**已安裝並正在執行的應用程式不會因此遭到移除。

Google 正在逐步推出這項措施：

| 時間              | 措施內容                                                      |
| --------------- | --------------------------------------------------------- |
| 2026年8月         | 免費的「有限發佈」開發人員帳戶開放全球申請，「進階流程」也開始逐步推送至手機                    |
| 2026 年 9 月 30 日 | 在**巴西、印尼、新加坡和泰國**，從 Google Play 和其他少數應用程式商店安裝的應用程式將強制進行驗證 |
| 2027 年          | 強制驗證範圍擴大至**世界其他地區**，並涵蓋**所有安裝方式**，包括 APK 檔案               |

Google 已在[Android 開發人員驗證](https://developer.android.com/developer-verification)頁面公布詳細資訊，其中也包含[常見問題](https://developer.android.com/developer-verification/guides/faq)。 Google 仍可能調整日期和詳細規定；本頁會隨推出進度更新。

### 這會影響我嗎？

- **建置 AAPS 完全不受影響。**[瀏覽器建置](#browser-build)、[Android Studio 建置](ComputerBuild.md)和 [CLI 建置](CLIBuild.md)都會照常運作，您的金鑰庫也不會變更。
- **目前安裝的 AAPS 會繼續執行。**只有在安裝或更新應用程式時，系統才會進行驗證。
- **如果您住在巴西、印尼、新加坡或泰國：**從 2026 年 9 月 30 日起，從 Google Play 和其他少數應用程式商店安裝的應用程式將強制進行驗證。 Google 表示，第一階段不涵蓋直接安裝 APK 檔案，因此 **AAPS** 應該仍可照常安裝。不過，建議您現在先準備好下方其中一種[免費安裝方式](#android-developer-verification-free-methods)，以免規定變更時措手不及。
- **如果您住在其他地區：**2027 年之前都不會有變化，因此目前暫時不採取任何行動也是合理的選擇。但請趁目前一切正常時，先設定好下方其中一種[免費安裝方式](#android-developer-verification-free-methods)：等到更新遭拒、發現安裝遭到封鎖時，才開始處理並面對「進階流程」的 24 小時等待，並不是理想的時機。
- **舊款手機：**Android 7 以上版本的手機都適用這項驗證規定，也就是所有能執行 **AAPS** 的手機都適用。

(android-developer-verification-free-methods)=

## 免費安裝 AAPS 的方式

您**不需要**付費給 Google，就能繼續使用 **AAPS**。有幾種免費方式可供選擇，請依照您的情況挑選。

```{admonition} Which method should I use?
:class: tip
- 您有一台**電腦**（不論您使用哪種方式建置 **AAPS**）：可以使用 [ADB](#android-developer-verification-adb)，或是不想使用命令列時，改用[網頁安裝工具](#android-developer-verification-web)。這兩種方式都不需驗證、沒有使用限制，也不需要 Google 帳戶。
- 您**完全沒有電腦**：請在手機上使用[進階流程](#android-developer-verification-advanced-flow)。
- 您希望向 Google 註冊，讓透過「點選 APK」的一般安裝方式繼續運作：[免費的有限發佈帳戶](#android-developer-verification-limited-account)可以使用，但尚未經過 **AAPS** 測試。
```

(android-developer-verification-adb)=

### 選項 1：使用 ADB 安裝（需要電腦）

ADB（Android Debug Bridge，Android 偵錯橋接程式）是 Google 官方提供的工具，可透過 USB 傳輸線，從電腦將應用程式安裝到手機。 Google 已確認，**使用 ADB 安裝的應用程式不需要驗證**——沒有等待時間、裝置數量限制，也不需要註冊。

一次性準備：

1. 在手機上啟用隱藏的開發人員選項：前往 **設定** > **關於手機**（部分手機上是 **軟體資訊**），然後連續點選 **版本號碼** 七次，直到手機確認您已成為開發人員。
1. 返回主畫面的 **設定**，開啟新增的 **開發人員選項**，並啟用 **USB 偵錯**。
1. 在電腦上確認 ADB 已可使用：
   - 如果您使用 **Android Studio**，ADB 已隨附安裝。
   - 否則，請下載 Google 免費提供的 [SDK Platform Tools](https://developer.android.com/tools/releases/platform-tools)，並解壓縮資料夾。不需要安裝；ADB 是資料夾中的 `adb` 程式。

安裝（以及之後更新）**AAPS**：

1. 使用 USB 傳輸線將手機連接到電腦。不需要先將 APK 檔案傳到手機上：ADB 會直接從電腦傳送檔案。
1. 在手機上，接受 **允許 USB 偵錯嗎？**提示（僅第一次需要）。
1. 在電腦上，於包含 ADB 和 **AAPS** APK 檔案的資料夾中開啟終端機（命令提示字元），然後執行：

   ```
   adb install -r app-full-release.apk
   ```

   將 `app-full-release.apk` 替換為您的 APK 檔案實際名稱。 `-r` 選項會更新已安裝的 **AAPS**，並保留所有資料和設定。

1. 等待畫面顯示 `Success`。 **AAPS** 現在已安裝在您的手機上。

之後每次更新都使用相同的指令。 [Wear OS 說明頁面](../WearOS/WearOsSmartwatch.md)也使用相同方式透過 ADB 安裝手錶應用程式。

如果您不想使用傳輸線：在 Android 11 及更新版本中，可以使用 **無線偵錯**（同樣位於 **開發人員選項**中）透過 Wi-Fi 執行相同操作，但需要先使用手機上顯示的代碼進行一次性配對。

(android-developer-verification-web)=

### 選項 2：從網頁安裝（使用電腦，不需命令列）

如果您不習慣使用命令列，可以直接在瀏覽器中透過網頁完成 ADB 能執行的相同操作。由於網頁會透過與 ADB 相同的機制連接手機，因此同樣**不受驗證限制**——不需要下載任何檔案、解壓縮資料夾，也不需要輸入任何指令。

如果您使用[瀏覽器建置版](#browser-build)，而且從未開啟過命令列，這是最簡單的方式。

1. 在手機上啟用 **USB 偵錯**（請參閱上方 [ADB 方法](#android-developer-verification-adb)的步驟 1 和 2；只需設定一次）。
1. 在瀏覽器中開啟 **[AAPS 網頁安裝程式](#web-installer)**。
1. 使用 USB 傳輸線連接手機，並依照網頁上的指示操作：連線、選擇 APK 檔案，然後安裝。

請注意以下三點：

- 這項功能僅適用於 **Chrome、Edge 或 Opera**。 Firefox 和 Safari 無法連接 USB 裝置。
- 同一時間只能有一個程式使用手機的 ADB 連線，因此連接前請**關閉 Android Studio**（或任何其他使用 ADB 的程式）。
- 透過這種方式連線的網頁可以完全控制您的手機。請**只使用上述網址**，也就是 **AAPS** 說明文件中的網址——切勿使用透過搜尋引擎找到的安裝程式網頁。 **AAPS** 網頁安裝程式完全在您的瀏覽器中執行：您的 APK 檔案不會上傳到任何地方。

```{admonition} No computer? A second phone works too
:class: tip
您也可以在**另一支 Android 手機的 Chrome** 中使用網頁安裝程式，只要使用 USB-C 對 USB-C 傳輸線即可——因此家長即使家中沒有電腦，也能在孩子的手機上安裝 **AAPS**。
```

(android-developer-verification-advanced-flow)=

### 選項 3：在手機上使用「進階流程」（不需要電腦）

Google 為了解安裝未經驗證應用程式風險的進階使用者，提供了一種替代方式，稱為**進階流程**。 Google 已於 2026 年 8 月開始在手機上推出這項功能，早於正式實施驗證限制之前，因此您現在就可以進行設定。這項設定只需在手機上完成一次，但**需要 24 小時**才能完成：

1. 啟用隱藏的開發人員選項（請參閱上方 ADB 方法的步驟 1），然後前往 **設定** > **開發人員選項** > **來自未經驗證開發人員的應用程式**。
1. 開啟 **允許來自未經驗證開發人員的應用程式**。手機會要求您輸入螢幕鎖定資訊，以確認是您本人操作。
1. 手機會詢問是否有人要求您開啟這項設定，並說明銀行、政府機關或警方絕不會要求您這麼做。請閱讀警告，並確認沒有人在施壓或指示您這麼做（這是為了防範詐騙）。
1. **重新啟動手機。**這會開始一次性的**24 小時等待期**。
1. 24 小時後，返回 **設定** > **開發人員選項** > **來自未經驗證開發人員的應用程式**，完成設定。
1. 選擇允許未經驗證的應用程式使用 **7 天**或**不限時間**。對於 **AAPS**，請選擇**不限時間**，否則 7 天期限過後，您將無法進行下一次更新。

完成這項設定後，安裝或更新 **AAPS** APK 的方式與目前相同，只會多出一則警告，指出這個應用程式來自未經驗證的開發人員；請點選 **仍要安裝**。

請注意：

- 之後可以再次關閉 **開發人員選項**：進階流程仍會保持啟用。 Google 也不會提供任何方式，讓應用程式（例如銀行 App）偵測進階流程是否已啟用。
- 如果關閉進階流程，就會再次禁止安裝**或更新** **AAPS**（已安裝的 **AAPS** 仍會繼續執行）。您有 10 分鐘的時間可以重新啟用；逾時後，必須重新等待 24 小時。
- 調整手機的時鐘不會縮短等待時間，ADB 也無法略過等待時間。
- Google 表示，您的選擇會隨著 Google 帳號同步到其他裝置，因此換新手機應該不需要再等 24 小時。
- 如果在開發人員選項中找不到 **來自未經驗證開發人員的應用程式**，表示您的手機尚未取得這項功能。這項功能是透過名為 **Android Developer Verifier** 的系統元件提供，Google 正透過 Play 商店逐步推出。您可以在 Play 商店中開啟 **Android Developer Verifier**，協助加快取得這項功能。

```{note}
Google 表示這是第一個版本，畫面和操作步驟仍可能有所變更；最終版本推出後，本節將補上螢幕截圖。
```

(android-developer-verification-limited-account)=

### 選項 4：向 Google 註冊（免費的有限散布帳號）

Google 提供一種**免費**的開發人員帳號，供業餘開發者和個人使用，稱為**有限散布帳號**，自 2026 年 8 月起開放給所有人申請：

- **不需要政府核發的身分證件**，也**不需付費**（不同於付費開發人員帳號；個人使用 **AAPS** 不需要付費帳號）。您需要一個已啟用兩步驟驗證的 Google 帳號、一份列有法定姓名和地址的 Google 付款資料，以及一個聯絡電子郵件地址。
- 您需要在 Google 的 Android Developer Console 註冊應用程式的套件名稱，並授權最多 **20 台裝置**安裝應用程式。授權時，手機和主控台會透過 QR Code 或連結進行交握。
- 完成註冊後，在已授權的手機上就能恢復一般安裝方式（點選 APK 檔案），不需要使用 ADB，也不需要啟用進階流程。
- 有限散布帳號之後可以升級為完整帳號，但無法反向降級。

```{warning}
Google 尚未說明多人建置同一個開放原始碼應用程式時，註冊程序會如何進行：每個自行建置的 **AAPS** 都使用相同的套件名稱（`info.nightscout.androidaps`），但簽章金鑰不同。Google 的常見問題解答指出，若套件名稱已被其他人使用，就不能直接申請使用，還需要額外審查。目前還不清楚審查結果會如何；付費開發人員帳號（25 美元，並需提供政府核發的身分證件）也無法解決這個問題：付費只能取消 20 台裝置的上限，不能免除套件名稱審查。

因此，目前還無法撰寫逐步操作說明。使用 **AAPS** 測試註冊流程後，本節將補上相關內容。在此期間，ADB、網頁安裝程式和上述進階流程都是可靠的替代方式。
```

## 不會變更的項目

- 使用三種[建置方式](BuildingAaps.md)中的任一種自行建置 **AAPS**。
- 您的 GitHub 帳號、建置儲存庫（AAPS Builder）或分支，以及您的金鑰庫。
- 已安裝的 **AAPS** App、您的設定，以及您的[目標](CompletingTheObjectives.md)。
- 沒有 Google 服務的手機，以及一般的 [ADB 安裝](#android-developer-verification-adb)。

## 如何尋求協助

1. **請參閱** Google 的[開發人員驗證常見問題解答](https://developer.android.com/developer-verification/guides/faq)，了解驗證相關問題。
2. 如果安裝遭到阻擋，請在 [Discord](https://discord.gg/4fQUWHZ4Mw) 的 *#AAPS* 頻道，或其他[社群頻道](../GettingHelp/WhereCanIGetHelp.md)中**詢問**。
3. 尋求協助時，請提供手機品牌與型號、Android 版本、所在國家，以及安裝失敗時顯示的完整訊息。

```{toctree}
:hidden:

AAPS 網頁安裝程式 <WebInstaller.md>
```
