# 建置AAPS

## 自行建置，而不是下載

**AAPS 應用程式（apk檔案）因醫療設備相關法規而無法下載。自行建置應用程式以供個人使用是合法的，但你不得將副本提供給他人！**

詳細資訊請參閱 [FAQ 頁面](../UsefulLinks/FAQ.md)。

---

可用來建置 AAPS 應用程式的方式有三種：

### 使用瀏覽器建置（建議）

您可以使用智慧型手機透過 GitHub Actions 建置 App。使用 Android 手機時，[AAPS Builder](#aaps-builder) 設定頁面會逐步引導您完成設定，且每次建置都由您自行啟動。使用電腦或 iPhone 時，也可以透過 fork 建置 App，並將 App 儲存至 Google 雲端硬碟。

**[請按照這些指示進行操作。](./BrowserBuild.md)**

----

### 使用 Android Studio 建置

您可以使用 Android Studio 在電腦上建立應用程式。這曾是唯一的建置選項，現今 Android Studio 多半由打算修改程式碼的開發者才會使用。

**[請按照這些指示進行操作。](./ComputerBuild.md)**

----

### 使用命令列建置

此選項是為偏好在本機命令列建置 AAPS、且不安裝 Android Studio 的使用者所設計。

**[請按照這些指示進行操作。](./CLIBuild.md)**

----

(building-aaps-troubleshooting)=
## 建置失敗時

每種建置方式都有各自的疑難排解章節：

* **AAPS Builder**：[AAPS Builder 疑難排解](#aaps-builder-troubleshooting)
* **瀏覽器建置**（使用電腦或 iPhone）：[瀏覽器建置疑難排解](#aaps-ci-troubleshooting)
* **Android Studio**：[Android Studio 疑難排解](../GettingHelp/TroubleshootingAndroidStudio.md)

遺失金鑰庫或其密碼了嗎？請參閱[使用新金鑰庫重新安裝 AAPS](#reinstall-aaps)。

如果 App 已建置完成，但無法安裝到手機上，請參閱[傳輸及安裝 AAPS](TransferringAndInstallingAaps.md)。

如果清單中沒有列出您的問題，請參閱[如何取得協助](../GettingHelp/WhereCanIGetHelp.md)。
