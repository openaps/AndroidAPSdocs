# 建置AAPS

## 自行建置，而不是下載

**AAPS 應用程式（apk檔案）因醫療設備相關法規而無法下載。自行建置應用程式以供個人使用是合法的，但你不得將副本提供給他人！**

詳細資訊請參閱 [FAQ 頁面](../UsefulLinks/FAQ.md)。

---

可用來建置 AAPS 應用程式的方式有三種：

### 使用瀏覽器建置（建議）

You can build the app with your smartphone using GitHub Actions. From an Android phone, the [AAPS Builder](#aaps-builder) setup page walks you through it, and you start each build yourself. From a computer or an iPhone, you can also build with a fork and save the app in your Google Drive.

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
## If the build fails

Each build method has its own troubleshooting section:

* **AAPS Builder**: [AAPS Builder troubleshooting](#aaps-builder-troubleshooting)
* **Browser build** from a computer or an iPhone: [Browser build troubleshooting](#aaps-ci-troubleshooting)
* **Android Studio**: [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)

Lost your keystore or its password? See [Reinstalling AAPS with a new keystore](#reinstall-aaps).

If the app is built but does not install on your phone, see [Transferring and installing AAPS](TransferringAndInstallingAaps.md).

If your problem is not listed, see [Where can I get help](../GettingHelp/WhereCanIGetHelp.md).
