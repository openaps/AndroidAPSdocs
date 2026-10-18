(browser-build)=

# 瀏覽器建置

使用 GitHub Actions 建置 AAPS。

**最低支援 AAPS 版本為 3.3.2.1。**

## 自行建置，而不是下載

**AAPS 應用程式（apk檔案）因醫療設備相關法規而無法下載。自行建置應用程式以供個人使用是合法的，但你不得將副本提供給他人！**

詳細資訊請參閱 [FAQ 頁面](../UsefulLinks/FAQ.md)。

(Building-APK-without-a-computer)=

## 選擇建置方式

選擇與你用來建置的裝置相符的方法：

### 在 Android 手機上：AAPS Builder（建議）

設定頁面會引導你在 GitHub 建立自己的私有建置儲存庫。無需安裝任何東西、也不需準備檔案，每次建置都由你自行啟動。你會直接從 GitHub 下載應用程式。 Google 雲端硬碟為可選用項目。

也可透過電腦的瀏覽器進行。

**→ [使用 AAPS Builder 建置](BrowserBuildAapsBuilder.md)**

### 於任何裝置：fork 與準備檔案

你會在 GitHub 將 AAPS 原始碼建立一個副本（fork），使用準備檔案建立你的 keystore，建置完成的應用程式會儲存到你的 Google 雲端硬碟。可在 Android 裝置、電腦或 iPhone / iPad 上進行。請依下列四個步驟進行。

## 使用 fork 方法的裝置與軟體規格

您需要在瀏覽器中使用多個選項卡，並在它們之間切換。範例 Chrome：

![fork_aaps](../images/Building-the-App/CI/BrowserBuildTabs.png)

你還需要一個 Google 帳號，以便將應用程式保存在你的 Google 雲端硬碟中。

```{note}
這個維基假設您所有操作都是使用您的行動電話和 Chrome 網頁瀏覽器進行的。  
你會需要在不同的頁籤之間切換，所以在開始之前，你可以先關閉其它頁籤，避免在切換時找不到頁面。
```

## 你需要準備

- Google 帳號，以便將建置完成的應用程式儲存到你的 Google 雲端硬碟（每個裝置都需要）。
- GitHub 帳號（免費）— 你會在步驟 1 建立。
- 可同時開啟多個分頁的網頁瀏覽器（以下以 Chrome 為例）。
- 用於執行準備檔案的小型輔助工具。所需工具取決於你用來建置的裝置—現在無需安裝任何東西，步驟 2 會針對你的裝置逐步引導：
  - **Android：**File Manager Plus（來自 Play 商店）。
  - **電腦（Windows / Mac / Linux）：**Simple HTTP Server。
  - **iPhone / iPad：**不需額外 App—使用內建的「檔案」App 與瀏覽器。

```{note}
在 Android 上，也請確認 **Google 雲端硬碟 App 為最新版本**（透過 Play 商店），以便之後下載完成的應用程式。
```

## 步驟

瀏覽器建置是一連串選擇。請依序完成以下步驟：

1. **[建立你的 GitHub fork](BrowserBuildFork.md)** — 建立 AAPS 原始碼的個人副本。
2. **[建立你的簽署 keystore](BrowserBuildKeystore.md)** — 關鍵選擇：產生新的 keystore（選項 1），或上傳你現有的 keystore（選項 2），接著依照你的裝置所對應的頁面操作。
3. **[授權 Google 雲端硬碟](BrowserBuildGoogleDrive.md)** — 讓 GitHub 將建置完成的應用程式儲存到你的 Google 雲端硬碟。
4. **[建置 APK](BrowserBuildAPK.md)** — 執行 GitHub Actions 工作流程，並選擇你的版本與變體。

若遇到問題，請參閱 **[瀏覽器建置疑難排解](../GettingHelp/BrowserBuildTroubleshooting.md)**。如需可選的操作，請參閱 [匯出你的 keystore](#ci-keystore-export) 或 [擇取指定提交（cherry-pick）](#github-cherry-pick)。

----

**從 [步驟 1 — 建立你的 GitHub fork](BrowserBuildFork.md) 開始 →**

```{toctree}
:hidden:

AAPS Builder <BrowserBuildAapsBuilder.md>
Step 1: 建立你的派生儲存庫 <BrowserBuildFork.md>
Step 2: 建立你的金鑰庫 <BrowserBuildKeystore.md>
Step 3: 授權 Google Drive <BrowserBuildGoogleDrive.md>
Step 4: 建置 APK <BrowserBuildAPK.md>
```
