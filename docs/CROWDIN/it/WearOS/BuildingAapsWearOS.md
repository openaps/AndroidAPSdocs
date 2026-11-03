# Building the Wear AAPS app

L'app **AAPS** per uno smartwatch Wear OS (l'**apk Wear**, `aaps-wear-….apk`) è un file di installazione separato dall'app **AAPS** per il telefono. You need both: the phone app runs the loop, the watch app shows its data and can send commands to it. The watch app is installed from the phone, see [Set up AAPS on your Wear OS watch](WearOsSmartwatch.md).

Le due app funzionano insieme solo se corrispondono:

- **Same AAPS version** on the phone and on the watch.
- **Same keystore** used to sign both apps.

The simplest way to guarantee this is to build both apps **at the same time**, in the same build. The browser build does this for you: every build produces the phone apk and the Wear apk together. With Android Studio or the command line, you build the Wear apk as a second step right after the phone apk.

```{note}
Already using **AAPS** on your phone but no Wear apk from the same build? Build both apps again, with the same keystore, and reinstall the phone app too. A Wear apk built months later, or with a different Android Studio version, is unlikely to be compatible with the phone app.
```

## Versioni di Wear OS supportate

**AAPS** runs on watches with **Wear OS 3.0, 3.2 or 3.5** (Android 11, API level 30) **or newer** (Wear OS 4, 5 and 6). Gli orologi con Wear OS 2 non sono supportati.

```{warning}
AAPS Watchfaces are available for Wear OS smartwatches with API level 30 to 33 (Wear OS 3.0, 3.2, 3.5 and 4).<br>
Newer Wear OS versions progressively break the AAPS watchfaces — see [Wear OS watch face changes](#wearos-watchface-changes) and the [Wear OS 5 limitations](#BuildingAapsWearOs-WearOS5).
```

(building-aaps-wear-os-method)=

## Ottenere l'apk Wear con il tuo metodo di build

Follow the section for the method you use to [build AAPS](../SettingUpAaps/BuildingAaps.md).

(building-aaps-wear-os-browser)=

### Browser build (recommended)

**Nothing extra to do.** Every browser build produces two files from the same source and the same keystore:

- `aaps-….apk`: the phone app.
- `aaps-wear-….apk`: the watch app.

L'apk Wear segue la [variante](#browserbuild-variant) che hai scelto per la build: `fullRelease` dà l'app **AAPS Wear**, `aapsclientRelease` l'app **AAPSClient Wear**, `pumpcontrolRelease` l'app **PumpControl Wear**. Each Wear app only talks to its matching phone app.

Dove trovare l'apk Wear:

- **AAPS Builder**: nella pagina della build, scorri in basso fino ad **Artifacts** (file prodotti) e scarica `aaps-wear-….apk` accanto all'app del telefono, come mostrato in [Passo 5 – Installa l'app sul telefono](#aaps-builder-step5). Download it on the phone that runs **AAPS** if you install the watch app from the phone (Wear Installer 2 or Easy Fire Tools), or on your computer if you use ADB.

  ![Artifacts con le app per il telefono e per l'orologio](../images/Building-the-App/CI/AapsBuilder52_Artifacts.png)

- **Fork with Google Drive**: open your Google Drive, folder `AAPS`, then the folder of the version you built. It contains the phone apk and the Wear apk, see [Step 4 – Build the APK](#github-build-apk).

  ![Posizione su Google Drive](../images/update/CI/GitHubActions5.png)

Conserva l'apk Wear insieme all'apk del telefono nei tuoi backup. With **AAPS Builder**, the files stay on the build page for 14 days only.

Next: install the Wear apk on the watch, see [Set up AAPS on your Wear OS watch](WearOsSmartwatch.md).

(building-aaps-wear-os-android-studio)=

### Android Studio

L'apk Wear si crea come l'apk del telefono, con una seconda build firmata. Do it right after the phone apk, with the same Android Studio version and the same keystore.

- Follow the instructions for [Android Studio Build](../SettingUpAaps/ComputerBuild.md).
- When you reach [module selection](#Building-APK-wearapk) in "Build the AAPS signed apk", make sure to select **`AndroidAPS.wear`**.

![Modulo Wear](../images/Building-the-App/wear_build1.png)

Seleziona "**fullRelease**" per generare il file apk Wear di **AAPS**.

![Modulo Wear](../images/Building-the-App/wear_build2.png)

If you prefer, you can build **“pumpcontrolRelease”** instead, from the drop-down menu, which will allow you to just remotely control the pump but without looping.

Next: install the Wear apk on the watch, see [Set up AAPS on your Wear OS watch](WearOsSmartwatch.md).

(building-aaps-wear-os-troubleshooting)=

#### Troubleshooting the Android Studio build

In the process of building the full **AAPS** app (and in fact any signed app), Android Studio generates a .json file in the same folder. This then causes errors with [uncommitted changes](#troubleshooting_androidstudio-uncommitted-changes) when you try to build the next signed app, like the **AAPS** wear app. The quickest way to resolve this is to navigate to the folder where the full AAPS app has been built, your folder is probably something like:

`C:\Users\Your Name\AndroidStudioProjects\AndroidAPS\app\full\release.`

Elimina il file .json che non serve, oppure spostalo fuori dalla cartella. Then try to build the **AAPS** wear app again. If that doesn't work, the more detailed [troubleshooting guide](../GettingHelp/TroubleshootingAndroidStudio.md) will help you to identify the specific file causing the issue, which could also be your keystore file.

(building-aaps-wear-os-cli)=

### Riga di comando

Follow [Build instructions for the command-line](../SettingUpAaps/CLIBuild.md) and repeat the compile and sign steps for the `wear` module, with the same keystore:

```sh
./gradlew :wear:assembleFullRelease
```

L'apk Wear non firmato viene scritto in `wear/build/outputs/apk/full/release/`. Sign it with `apksigner` exactly like the phone apk, then install it on the watch, see [Set up AAPS on your Wear OS watch](WearOsSmartwatch.md).
