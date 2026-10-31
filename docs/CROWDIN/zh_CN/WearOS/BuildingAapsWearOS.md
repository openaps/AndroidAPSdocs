# 构建AAPS Wear OS应用

The **AAPS** app for a Wear OS smartwatch (the **Wear apk**, `aaps-wear-….apk`) is a separate installation file from the **AAPS** phone app. You need both: the phone app runs the loop, the watch app shows its data and can send commands to it. The watch app is installed from the phone, see [Set up AAPS on your Wear OS watch](WearOsSmartwatch.md).

The two apps only work together when they match:

- **Same AAPS version** on the phone and on the watch.
- **Same keystore** used to sign both apps.

The simplest way to guarantee this is to build both apps **at the same time**, in the same build. The browser build does this for you: every build produces the phone apk and the Wear apk together. With Android Studio or the command line, you build the Wear apk as a second step right after the phone apk.

```{note}
Already using **AAPS** on your phone but no Wear apk from the same build? Build both apps again, with the same keystore, and reinstall the phone app too. A Wear apk built months later, or with a different Android Studio version, is unlikely to be compatible with the phone app.
```

## 支持的Wear OS版本

**AAPS** runs on watches with **Wear OS 3.0, 3.2 or 3.5** (Android 11, API level 30) **or newer** (Wear OS 4, 5 and 6). Watches with Wear OS 2 are not supported.

```{warning}
AAPS Watchfaces are available for Wear OS smartwatches with API level 30 to 33 (Wear OS 3.0, 3.2, 3.5 and 4).<br>
Newer Wear OS versions progressively break the AAPS watchfaces — see [Wear OS watch face changes](#wearos-watchface-changes) and the [Wear OS 5 limitations](#BuildingAapsWearOs-WearOS5).
```

(building-aaps-wear-os-method)=

## Get the Wear apk with your build method

Follow the section for the method you use to [build AAPS](../SettingUpAaps/BuildingAaps.md).

(building-aaps-wear-os-browser)=

### Browser build (recommended)

**Nothing extra to do.** Every browser build produces two files from the same source and the same keystore:

- `aaps-….apk`: the phone app.
- `aaps-wear-….apk`: the watch app.

The Wear apk follows the [variant](#browserbuild-variant) you selected for the build: `fullRelease` gives the **AAPS Wear** app, `aapsclientRelease` the **AAPSClient Wear** app, `pumpcontrolRelease` the **PumpControl Wear** app. Each Wear app only talks to its matching phone app.

Where to find the Wear apk:

- **AAPS Builder**: on the build page, scroll down to **Artifacts** and download `aaps-wear-….apk` next to the phone app, as shown in [Step 6 – Install the app on your phone](#aaps-builder-step6). Download it on the phone that runs **AAPS** if you install the watch app from the phone (Wear Installer 2 or Easy Fire Tools), or on your computer if you use ADB.

  ![Artifacts with the phone and watch apps](../images/Building-the-App/CI/AapsBuilder52_Artifacts.png)

- **Fork with Google Drive**: open your Google Drive, folder `AAPS`, then the folder of the version you built. It contains the phone apk and the Wear apk, see [Step 4 – Build the APK](#github-build-apk).

  ![Google Drive Location](../images/update/CI/GitHubActions5.png)

Keep the Wear apk together with the phone apk in your backups. With **AAPS Builder**, the files stay on the build page for 14 days only.

Next: install the Wear apk on the watch, see [Set up AAPS on your Wear OS watch](WearOsSmartwatch.md).

(building-aaps-wear-os-android-studio)=

### Android Studio

The Wear apk is built like the phone apk, as a second signed build. Do it right after the phone apk, with the same Android Studio version and the same keystore.

- Follow the instructions for [Android Studio Build](../SettingUpAaps/ComputerBuild.md).
- 当您到达“构建AAPS签名apk”中的[模块选择](#Building-APK-wearapk)时，请确保选择**`AndroidAPS.wear`**。

![Wear module](../images/Building-the-App/wear_build1.png)

选择“**fullRelease**”以生成**AAPS** Wear apk文件。

![Wear module](../images/Building-the-App/wear_build2.png)

如果你愿意，你可以从下拉菜单中选择构建**“pumpcontrolRelease”**，这样你就可以远程控制胰岛素泵，但没法闭环。

Next: install the Wear apk on the watch, see [Set up AAPS on your Wear OS watch](WearOsSmartwatch.md).

(building-aaps-wear-os-troubleshooting)=

#### Troubleshooting the Android Studio build

In the process of building the full **AAPS** app (and in fact any signed app), Android Studio generates a .json file in the same folder. 然后，当您尝试构建下一个签名应用（如**AAPS** Wear应用）时，这会导致[未提交的更改](#troubleshooting_androidstudio-uncommitted-changes)错误。解决这个问题的最快方法是导航到已构建完整AAPS应用程序的文件夹，您的文件夹可能类似于：

`C:\Users\Your Name\AndroidStudioProjects\AndroidAPS\app\aapsclient\release.`

将不需要的.json文件从文件夹中删除或移出。然后再次尝试构建**AAPS** Wear应用。如果这不起作用，更详细的[故障排除指南](../GettingHelp/TroubleshootingAndroidStudio.md)将帮助您确定导致问题的具体文件，这也可能是您的keystore文件。

(building-aaps-wear-os-cli)=

### Command line

Follow [Build instructions for the command-line](../SettingUpAaps/CLIBuild.md) and repeat the compile and sign steps for the `wear` module, with the same keystore:

```sh
./gradlew :wear:assembleFullRelease
```

The unsigned Wear apk is written under `wear/build/outputs/apk/full/release/`. Sign it with `apksigner` exactly like the phone apk, then install it on the watch, see [Set up AAPS on your Wear OS watch](WearOsSmartwatch.md).
