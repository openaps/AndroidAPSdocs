(browser-build)=

# Im Browser erstellen (Browser Build)

AAPS mit GitHub-Aktionen erstellen.

**Ab AAPS-Version 3.3.2.1. möglich.**

## Kein Download möglich - APK muss selbst erstellt werden

**Die AAPS-App (eine apk-Datei) ist aufgrund der Vorschriften rund um medizinische Geräte nicht zum Download verfügbar. Es ist zulässig, die App für den eigenen Gebrauch zu erstellen, aber du darfst keine Kopie an andere weitergeben!**

Zu den Details schaue bitte auf die [FAQ-Seite](../UsefulLinks/FAQ.md).

(Building-APK-without-a-computer)=

## Choose how to build

Pick the method that matches the device you build from:

### On an Android phone: AAPS Builder (recommended)

A setup page walks you through creating your own private build repository in GitHub. Nothing to install, no preparation file, and you start each build yourself. You download the app directly from GitHub. Google Drive is optional.

This also works from a computer browser.

**→ [Build with AAPS Builder](BrowserBuildAapsBuilder.md)**

### On any device: fork and preparation file

You make a copy (fork) of the AAPS source code in GitHub, create your keystore with a preparation file, and the built app is saved to your Google Drive. This works from an Android device, a computer or an iPhone / iPad. Follow the four steps below.

```{note}
**Already building with a fork?** Keep updating it as described in [Update with a browser](../Maintenance/UpdateBrowserBuild.md), or switch to AAPS Builder. To switch, first get a copy of your keystore from your fork: see [Coming from the previous browser build](#aaps-builder-from-fork).
```

## Device and software specifications for the fork method

Du wirst in Deinem Browser mehrere Tabs verwenden und dabei zwischen diesen Tabs hin und her wechseln. Beispiel Chrome:

![fork_aaps](../images/Building-the-App/CI/BrowserBuildTabs.png)

Zusätzlich benötigst Du ein Google-Konto, damit die App in Deinem Google-Drive gespeichert werden kann.

```{note}
Dieses Wiki geht davon aus, dass Du alle Operationen mit Deinem Smartphone und dem Chrome-Browser durchführst.  
Du wirst zwischen den Tabs springen: Starte mit geschlossenen Tabs. Das verhindert, dass Du Dich beim Umschalten von einem zum anderen „vertust“.
```

## What you'll need

- A **Google account**, so the built app can be saved to your Google Drive (needed on every device).
- A **GitHub account** (free) – you create this in Step 1.
- A **web browser** that can keep several tabs open at once (Chrome is assumed below).
- A small **helper to run the preparation file**. Which one you need depends on the device you build from – there is nothing to install now, Step 2 walks you through it for your device:
  - **Android:** File Manager Plus (from the Play Store).
  - **Computer (Windows / Mac / Linux):** Simple HTTP Server.
  - **iPhone / iPad:** no extra app – you use the built-in Files app and browser.

```{note}
On Android, also make sure the **Google Drive app is up to date** (via the Play Store) so you can download the finished app afterwards.
```

## The steps

The browser build is a series of choices. Follow these steps in order:

1. **[Create your GitHub fork](BrowserBuildFork.md)** – make your personal copy of the AAPS source code.
2. **[Create your signing keystore](BrowserBuildKeystore.md)** – the key decision: generate a new keystore (Option 1) or upload your existing one (Option 2), then follow the page for your device.
3. **[Authorize Google Drive](BrowserBuildGoogleDrive.md)** – let GitHub save the built app to your Google Drive.
4. **[Build the APK](BrowserBuildAPK.md)** – run the GitHub Actions workflow and pick your version and variant.

If you run into trouble, see **[Browser build troubleshooting](../GettingHelp/BrowserBuildTroubleshooting.md)**. For optional operations, see [exporting your keystore](#ci-keystore-export) or [cherry-picking a commit](#github-cherry-pick).

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
