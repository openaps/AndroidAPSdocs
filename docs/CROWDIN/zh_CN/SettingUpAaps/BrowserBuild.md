(browser-build)=

# AAPS 浏览器构建指南

GitHub Actions 构建流程

**为什么 3.3.2.1 是“强制底线”？**

## 自行构建而非下载

**由于医疗器械相关法规的限制，AAPS应用（一个apk文件）无法提供下载。构建该应用供自己使用是合法的，但不得将副本提供给他人**

详情请参阅[常见问题页面](../UsefulLinks/FAQ.md)。

(Building-APK-without-a-computer)=

## Choose how to build

Pick the method that matches the device you build from:

### On an Android phone: AAPS Builder (recommended)

A setup page walks you through creating your own private build repository in GitHub. Nothing to install, no preparation file, and you start each build yourself. You download the app directly from GitHub. Google Drive is optional.

This also works from a computer browser.

**→ [Build with AAPS Builder](BrowserBuildAapsBuilder.md)**

### On any device: fork and preparation file

You make a copy (fork) of the AAPS source code in GitHub, create your keystore with a preparation file, and the built app is saved to your Google Drive. This works from an Android device, a computer or an iPhone / iPad. Follow the four steps below.

## Device and software specifications for the fork method

你需要在浏览器中打开多个标签页，并频繁地在它们之间切换。例如使用 Chrome 浏览器：

![fork_aaps](../images/Building-the-App/CI/BrowserBuildTabs.png)

你还需要一个 Google 账号，以便将生成的应用程序保存到你的 Google 云端硬盘（Google Drive）中。

```{note}
本维基指南假设你正通过手机和 Chrome 浏览器执行所有操作。  
你需要在不同的标签页之间来回切换：建议在开始前关闭所有已打开的标签页，以防在切换过程中迷失操作步骤。
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
