(browser-build)=

# Construirea în browser

Construirea AAPS cu GitHub Actions.

**Minimum AAPS version supported is 3.3.2.1.**

## Construiți aplicația, nu o descărcați

**Aplicația AAPS (un fișier apk) nu este disponibilă pentru descărcare, din cauza reglementărilor privind dispozitivele medicale. It is legal to build the app for your own use, but you must not give a copy to others!**

See [FAQ page](../UsefulLinks/FAQ.md) for details.

(Building-APK-without-a-computer)=

## Choose how to build

Alegeți metoda potrivită pentru dispozitivul de pe care construiți:

### Pe un telefon Android: AAPS Builder (recomandat)

A setup page walks you through creating your own private build repository in GitHub. Nothing to install, no preparation file, and you start each build yourself. You download the app directly from GitHub. Google Drive este opțional.

This also works from a computer browser.

**→ [Build with AAPS Builder](BrowserBuildAapsBuilder.md)**

### On a computer or an iPhone / iPad: fork and preparation file

Faceți o copie (fork) a codului sursă AAPS în GitHub, creați keystore-ul cu un fișier de pregătire, iar aplicația construită este salvată în Google Drive. Urmați cei patru pași de mai jos.

```{note}
**Already building with a fork?** Keep updating it as described in [Update with a browser](../Maintenance/UpdateBrowserBuild.md), or switch to AAPS Builder. To switch, first get a copy of your keystore from your fork: see [Coming from the previous browser build](#aaps-builder-from-fork).
```

You will need to use multiple tabs in your browser, and switch from one to the other. Exemplu în Chrome:

![fork_aaps](../images/Building-the-App/CI/BrowserBuildTabs.png)

```{note}
You will need to jump from tab to tab: start with all tabs closed to avoid losing yourself when switching from one to another.
```

#### De ce aveți nevoie

- Un **cont Google**, pentru ca aplicația construită să poată fi salvată în Google Drive.
- Un **cont GitHub** (gratuit) – îl creați la Pasul 1.
- A **web browser** that can keep several tabs open at once (Chrome is assumed below).
- A small **helper to run the preparation file**. Which one you need depends on the device you build from – there is nothing to install now, Step 2 walks you through it for your device:
  - **Computer (Windows / Mac / Linux):** Simple Web Server.
  - **iPhone / iPad:** no extra app – you use the built-in Files app and browser.

#### Pașii

Construirea în browser este o serie de alegeri. Urmați acești pași în ordine:

1. **[Create your GitHub fork](BrowserBuildFork.md)** – make your personal copy of the AAPS source code.
2. **[Create your signing keystore](BrowserBuildKeystore.md)** – the key decision: generate a new keystore (Option 1) or upload your existing one (Option 2), then follow the page for your device.
3. **[Autorizați Google Drive](BrowserBuildGoogleDrive.md)** – permiteți GitHub să salveze aplicația construită în Google Drive.
4. **[Construiți APK-ul](BrowserBuildAPK.md)** – rulați fluxul de lucru GitHub Actions și alegeți versiunea și varianta.

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
