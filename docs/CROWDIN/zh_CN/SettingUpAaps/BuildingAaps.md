# 构建（Building）AAPS

## 自行构建而非下载

**由于医疗器械相关法规的限制，AAPS应用（一个apk文件）无法提供下载。构建该应用供自己使用是合法的，但不得将副本提供给他人**

详情请参阅[常见问题页面](../UsefulLinks/FAQ.md)。

---

Three methods are available to build the AAPS app:

### Build with a browser (recommended)

You can build the app with your smartphone using GitHub Actions. From an Android phone, the [AAPS Builder](#aaps-builder) setup page walks you through it, and you start each build yourself. From a computer or an iPhone, you can also build with a fork and save the app in your Google Drive.

**[Follow these instructions.](./BrowserBuild.md)**

----

### Build with Android Studio

You can build the app with your computer using Android Studio. This used to be the only build option, nowadays Android Studio is mostly used by developers who consider making code changes.

**[Follow these instructions.](./ComputerBuild.md)**

----

### Build using the command-line

This option is intended for those who prefer to build AAPS in local command-line, without installing Android Studio.

**[Follow these instructions.](./CLIBuild.md)**

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
