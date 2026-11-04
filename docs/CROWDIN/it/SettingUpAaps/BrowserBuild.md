(browser-build)=

# Browser build

Building AAPS with GitHub Actions.

**La versione minima di AAPS supportata è la 3.3.2.1.**

## Build yourself instead of download

**The AAPS app (an apk file) is not available for download, due to regulations around medical devices. It is legal to build the app for your own use, but you must not give a copy to others!**

See [FAQ page](../UsefulLinks/FAQ.md) for details.

(Building-APK-without-a-computer)=

## Scegli come fare la build

Scegli il metodo adatto al dispositivo da cui fai la build:

### Su un telefono Android: AAPS Builder (consigliato)

A setup page walks you through creating your own private build repository in GitHub. Nothing to install, no preparation file, and you start each build yourself. Scarichi l'app direttamente da GitHub. Google Drive è facoltativo.

Funziona anche dal browser di un computer.

**→ [Build with AAPS Builder](BrowserBuildAapsBuilder.md)**

### On a computer or an iPhone / iPad: fork and preparation file

Fai una copia (fork) del codice sorgente di AAPS su GitHub, crei il tuo keystore con un file di preparazione e l'app creata viene salvata nel tuo Google Drive. Segui i quattro passi qui sotto.

```{note}
**Already building with a fork?** Keep updating it as described in [Update with a browser](../Maintenance/UpdateBrowserBuild.md), or switch to AAPS Builder. To switch, first get a copy of your keystore from your fork: see [Coming from the previous browser build](#aaps-builder-from-fork).
```

You will need to use multiple tabs in your browser, and switch from one to the other. Esempio con Chrome:

![fork_aaps](../images/Building-the-App/CI/BrowserBuildTabs.png)

```{note}
You will need to jump from tab to tab: start with all tabs closed to avoid losing yourself when switching from one to another.
```

#### Cosa ti serve

- Un **account Google**, così l'app creata può essere salvata nel tuo Google Drive.
- Un **account GitHub** (gratuito): lo crei nel Passo 1.
- A **web browser** that can keep several tabs open at once (Chrome is assumed below).
- A small **helper to run the preparation file**. Which one you need depends on the device you build from – there is nothing to install now, Step 2 walks you through it for your device:
  - **Computer (Windows / Mac / Linux):** Simple Web Server.
  - **iPhone / iPad:** no extra app – you use the built-in Files app and browser.

#### I passi

The browser build is a series of choices. Segui questi passi in ordine:

1. **[Crea il tuo fork GitHub](BrowserBuildFork.md)**: fai la tua copia personale del codice sorgente di AAPS.
2. **[Create your signing keystore](BrowserBuildKeystore.md)** – the key decision: generate a new keystore (Option 1) or upload your existing one (Option 2), then follow the page for your device.
3. **[Autorizza Google Drive](BrowserBuildGoogleDrive.md)**: permetti a GitHub di salvare l'app creata nel tuo Google Drive.
4. **[Build the APK](BrowserBuildAPK.md)** – run the GitHub Actions workflow and pick your version and variant.

If you run into trouble, see **[Browser build troubleshooting](../GettingHelp/BrowserBuildTroubleshooting.md)**. For optional operations with a fork, see [exporting your keystore](#ci-keystore-export) or [cherry-picking a commit](#github-cherry-pick).

----

**Start with [Step 1 – Create your GitHub fork](BrowserBuildFork.md) →**

```{toctree}
:hidden:

AAPS Builder <BrowserBuildAapsBuilder.md>
Step 1: Create your fork <BrowserBuildFork.md>
Step 2: Create your keystore <BrowserBuildKeystore.md>
Step 3: Authorize Google Drive <BrowserBuildGoogleDrive.md>
Step 4: Build the APK <BrowserBuildAPK.md>
```
