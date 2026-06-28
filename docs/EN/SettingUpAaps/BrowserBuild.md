(browser-build)=

# Browser build

Building AAPS with GitHub Actions.

**Minimum AAPS version supported is 3.3.2.1.**

## Build yourself instead of download

**The AAPS app (an apk file) is not available for download, due to regulations around medical devices. It is legal to build the app for your own use, but you must not give a copy to others!**

See [FAQ page](../UsefulLinks/FAQ.md) for details.

(Building-APK-without-a-computer)=

## Device and software specifications for building AAPS

We recommend using an Android device. You can also use a computer or an iOS device.

You will need to use multiple tabs in your browser, and switch from one to the other. Example Chrome:

![fork_aaps](../images/Building-the-App/CI/BrowserBuildTabs.png)

You also need a Google account so that the app can be saved in your Google Drive.

```{note}
This wiki assumes you're performing all operations with your cellular phone and the Chrome web browser.  
You will need to jump from tab to tab: start with all tabs closed to avoid losing yourself when switching from one to another.
```

## The steps

The browser build is a series of choices. Follow these steps in order:

1. **[Create your GitHub fork](BrowserBuildFork.md)** – make your personal copy of the AAPS source code.
2. **[Create your signing keystore](BrowserBuildKeystore.md)** – the key decision: generate a new keystore (Option 1) or upload your existing one (Option 2), then follow the page for your device.
3. **[Authorize Google Drive](BrowserBuildGoogleDrive.md)** – let GitHub save the built app to your Google Drive.
4. **[Build the APK](BrowserBuildAPK.md)** – run the GitHub Actions workflow and pick your version and variant.

If you run into trouble, or want optional operations such as cherry-picking a commit or exporting your keystore, see **[Troubleshooting & advanced](BrowserBuildTroubleshooting.md)**.

----

**Start with [Step 1 – Create your GitHub fork](BrowserBuildFork.md) →**
