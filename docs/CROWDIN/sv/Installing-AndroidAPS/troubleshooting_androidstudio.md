# Troubleshooting Android Studio

## Lost keystore

If you use the same keystore when updating AndroidAPS you do not have to uninstall the previous version on your smartphone. That's why it is recommended to store the keystore in a save place.

In case you cannot find your old keystore anymore, proceed as follows:

1. [Export settings](../Usage/ExportImportSettings#how-to-export-settings) on your phone.
2. Copy settings from your phone to an external location (i.e. your computer, cloud storage service...).
3. Make sure settings file "AndroidAPS Preferences" is stored safely.
4. Generate signed apk of new version as described on the [update page](../Installing-AndroidAPS/Update-to-new-version.md).
5. Uninstall previous AAPS version on your phone.
6. Install new AAPS version on your phone.
7. [Import settings](../Usage/ExportImportSettings#how-to-export-settings) - if you can't find them on your phone copy them from the external storage.
8. Keep on looping.

## Kotlin compiler warning

If build completed successfully but you get Kotlin compiler warnings then just ignore these warnings.

App was build successfully and can be transferred to phone.

```{image} ../images/GIT_WarningIgnore.PNG
:alt: ignore Kotline compiler warning
```

## Key was created with errors

When creating a new keystore for building the signed APK, on Windows the following error message might appear

```{image} ../images/AndroidStudio35SigningKeys.png
:alt: Key was created with errors
```

This seems to be a bug with Android Studio 3.5.1 and its shipped Java environment in Windows. The key is created correctly but a recommendation is falsely displayed as an error. This can currently be ignored.

## Could not download… / Offline Work

If you get a failure message like this

```{image} ../images/GIT_Offline1.jpg
:alt: Warning could not download
```

make sure that ‘Offline work’ is disabled.

File -> Settings

```{image} ../images/GIT_Offline2.jpg
:alt: Settings offline work
```

## Error: buildOutput.apkData must not be null

Sometimes you might get an error message when building the apk saying

> `Errors while building APK.`
>
> `Cause: buildOutput.apkData must not be null`

This is a known bug in Android Studio 3.5 and will probably not be fixed before Android Studio 3.6. Three options:

1. Manually delete the three build folders (normal "build", build folder in "app" and build folder in "wear") and generate signed apk again.
2. Set destination folder to project folder instead of app folder as described in [this video](https://www.youtube.com/watch?v=BWUFWzG-kag).
3. Change apk destination folder (different location).

## Unable to start daemon process

If you see an error message like the one below you probably use a Windows 10 32-bit system. This is not supported by Android Studio 3.5.1 and above. I you are using Windows 10 you must use a 64-bit operating system.

There are a lot of manuals on the internet how to determine wether you have a 32-bit or 64-bit OS - i.e. [this one](https://www.howtogeek.com/howto/21726/how-do-i-know-if-im-running-32-bit-or-64-bit-windows-answers/).

```{image} ../images/AndroidStudioWin10_32bitError.png
:alt: Screenshot Unable to start daemon process
```

## No CGM data

- In case you are using xDrip+: Identify receiver as described on [xDrip+ settings page](../Configuration/xdrip#identify-receiver).
- In case you are using [patched Dexcom G6 app](../Hardware/DexcomG6.md#if-using-g6-with-patched-dexcom-app): Make sure you are using the correct version from the [2.4 folder](https://github.com/dexcomapp/dexcomapp/tree/master/2.4).

## Uncommitted changes

If you receive failure message like

```{image} ../images/GIT_TerminalCheckOut0.PNG
:alt: Failure uncommitted changes
```

### Option 1 - Check git installation

- git might be not installed correctly (must be globally available)
- when on Windows and git was just installed, you should restart your computer or at least log out and re-login once, to make git globally available after the installation
- [Check git installation](../Installing-AndroidAPS/git-install#check-git-settings-in-android-studio)
- If no git version is shown in check but git is installed on your computer, make sure Android Studio knows where [git is located](../Installing-AndroidAPS/git-install#set-git-path-in-android-studio) on your computer.

### Option 2 - Reload source code

- In Android Studio select VCS -> GIT -> Reset HEAD

```{image} ../images/GIT_TerminalCheckOut3.PNG
:alt: Reset HEAD
```

### Option 3 - Check for updates

- Copy ‘git checkout --’ to clipboard (without quote signs)

- Switch to Terminal in Android Studio (lower left side of Android Studio window)

  ```{image} ../images/GIT_TerminalCheckOut1.PNG
  :alt: Android Studio Terminal
  ```

- Paste copied text and press return

  ```{image} ../images/GIT_TerminalCheckOut2.jpg
  :alt: GIT checkout success
  ```

## App not installed

```{image} ../images/Update_AppNotInstalled.png
:alt: phone app note installed
```

- Make sure you have transferred the “app-full-release.apk” file to your phone.
- If "App not installed" is displayed on your phone follow these steps:

1. [Export settings](../Usage/ExportImportSettings.md) (in AAPS version already installed on your phone)
2. Uninstall AAPS on your phone.
3. Enable airplane mode & turn off bluetooth.
4. Install new version (“app-full-release.apk”)
5. [Import settings](../Usage/ExportImportSettings.md)
6. Turn bluetooth back on and disable airplane mode

## App installed but old version

If you build the app successfully, transferred it to your phone and installed it successfully but the version number stays the same then you might have missed to [update your local copy](../Update-to-new-version#update-your-local-copy).

## None of the above worked

If non of the above tips helped you might consider building the app from scratch:

1. [Export settings](../Usage/ExportImportSettings.md) (in AAPS version already installed on your phone)
2. Have your key password and key store password ready
   : In case you have forgotten passwords you can try to find them in project files as described [here](https://youtu.be/nS3wxnLgZOo). Or you just use a new keystore.
3. Build app from scratch as described [here](../Installing-AndroidAPS/Building-APK#download-code-and-additional-components).
4. When you have build the APK successfully delete the exiting app on your phone, transfer the new apk to your phone and install.
5. [Import settings](../Usage/ExportImportSettings.md)

## Worst case scenario

In case even building the app from scratch does not solve your problem you might want to try to uninstall Android Studio completely. Some Users reported that this solved their problem.

**Make sure to uninstall all files associated with Android Studio.** If you do not completely remove Android Studio with all hidden files, uninstalling may cause new problems instead of solving your existing one(s). Manuals for complete uninstall can be found online i.e. [https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10](https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10).

Install Android Studio from scratch as described [here](../Installing-AndroidAPS/Building-APK#install-android-studio) and **do not update gradle**.
