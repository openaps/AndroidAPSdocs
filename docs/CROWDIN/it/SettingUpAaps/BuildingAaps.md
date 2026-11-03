# Building AAPS

## Build yourself instead of download

**The AAPS app (an apk file) is not available for download, due to regulations around medical devices. It is legal to build the app for your own use, but you must not give a copy to others!**

See [FAQ page](../UsefulLinks/FAQ.md) for details.

---

Three methods are available to build the AAPS app:

### Build with a browser (recommended)

Puoi fare la build dell'app in un browser web con GitHub Actions. From an Android phone, the [AAPS Builder](#aaps-builder) setup page walks you through it, and you start each build yourself. Da un computer o da un iPhone puoi anche fare la build con un fork e salvare l'app nel tuo Google Drive.

**[Segui queste istruzioni.](./BrowserBuild.md)**

----

### Build con Android Studio

You can build the app with your computer using Android Studio. This used to be the only build option, nowadays Android Studio is mostly used by developers who consider making code changes.

**[Segui queste istruzioni.](./ComputerBuild.md)**

----

### Build da riga di comando

This option is intended for those who prefer to build AAPS in local command-line, without installing Android Studio.

**[Segui queste istruzioni.](./CLIBuild.md)**

----

(building-aaps-troubleshooting)=
## If the build fails

Each build method has its own troubleshooting section:

* **AAPS Builder**: [AAPS Builder troubleshooting](#aaps-builder-troubleshooting)
* **Browser build** from a computer or an iPhone: [Browser build troubleshooting](#aaps-ci-troubleshooting)
* **Android Studio**: [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)

Hai perso il keystore o la sua password? Vedi [Reinstallare AAPS con un nuovo keystore](#reinstall-aaps).

If the app is built but does not install on your phone, see [Transferring and installing AAPS](TransferringAndInstallingAaps.md).

If your problem is not listed, see [Where can I get help](../GettingHelp/WhereCanIGetHelp.md).
