# Update with Android Studio

## Build yourself instead of download

**AAPS** is not available to download, due to regulations concerning medical devices. It is legal to build the app for your own use, but you must not give a copy to others! See [FAQ page](../UsefulLinks/FAQ.md) for details.

```{note}
Se vuoi fare la build di **AAPS** su un nuovo computer: copia il file di backup del tuo keystore sul nuovo computer. Then follow the [Initial build **AAPS** procedure](../SettingUpAaps/BuildingAaps.md) instead of this guide. L'unica differenza è che, invece di creare un nuovo keystore, puoi selezionare quello che hai copiato sul nuovo computer.
```

## Panoramica dell'aggiornamento a una nuova versione di AAPS con Android Studio

```{contents} Steps for updating to a new version of AAPS
:depth: 1
:local: true
```

In case you experience problems, see separate page for [troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md).

### Export your settings

Export your settings from the existing **AAPS** version on your phone. You might not need it, but better be safe than sorry.

See the [Export & import settings](ExportImportSettings.md) page if you don't remember how to do this.

### Check your Android Studio version

The minimal version required is described in the [Building Instructions](#Building-APK-recommended-specification-of-computer-for-building-apk-file). Se la tua versione è più vecchia, [aggiorna prima Android Studio](#Building-APK-install-android-studio)!

(Update-to-new-version-update-your-local-copy)=
### Aggiorna la tua copia locale

* Apri il tuo progetto AAPS esistente con Android Studio. You might need to select your project. (Double) click on the AAPS project.

  ![Android Studio - Select Project](../images/update/01_ProjectSelection.png)

* In the menu bar of Android Studio, select Git -> Fetch

   ![Menu di Android Studio - Git - Fetch](../images/update/02_GitFetch.png)

* In basso a destra vedrai un messaggio che dice che il Fetch è riuscito.

   ![Menu di Android Studio - Git - Fetch riuscito](../images/update/03_GitFetchSuccessful.png)

* In the menu bar, now select Git -> Pull

   ![Menu di Android Studio - Git - Pull](../images/update/04_GitPull.png)

* Lascia tutte le opzioni come sono (origin/master) e seleziona Pull

   ![Android Studio - Git - Pull dialog](../images/update/05_GitPullOptions.png)

* Wait while download is in progress, you will see this as info in the bottom bar. Quando ha finito, vedrai un messaggio di successo.

  ```{note}
  I file aggiornati possono essere diversi! Questo non indica un problema.
  ```

   ![Android Studio - Pull riuscito](../images/update/06_GitPullSuccess.png)

* Gradle Sync will be running to download some dependencies. Aspetta che finisca.

  ![Android Studio - Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

### Check JVM version

This check is particularly indicated if you have already built a previous version of **AAPS** on the same computer.

Check in the [Building Instructions](#Building-APK-recommended-specification-of-computer-for-building-apk-file) the required version for JVM, matching the **AAPS** version you are now building. Then follow the steps described at [Incompatible Gradle JVM](#incompatible-gradle-jvm) to make sure you currently use the correct version.

(Update-to-new-version-build-the-signed-apk)=
### Build the Signed APK

Your sourcecode is now the current released version, and all prerequisites have been checked. It's time to build the signed apk as described in the [build signed apk section](#Building-APK-generate-signed-apk).

(Update-to-new-version-transfer-and-install)=

### Transfer and install the apk
Devi trasferire l'apk sul telefono per poterlo installare.

```{note}
If you completed the build with the same existing key store in Android Studio, then you do not need to remove the existing app on your phone. When you install the apk, follow the prompts to install updates.
For other scenarios such as establishing a new key store in Android Studio for your signed apk, you will need to delete the old app before installing the apk. **Make sure to export your settings!**
```

See the instructions for [transferring and installing AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md). Where Google's [Android developer verification](#android-developer-verification) is enforced (from September 2026, depending on your country), install with [ADB](#android-developer-verification-adb) instead of tapping the APK file.

Continua [qui](#Update-to-new-version-check-aaps-version-on-phone).

(update-computer-build-troubleshooting)=

## Troubleshooting

Se qualcosa va storto, niente panico.

Take a breath!

Then check if your problem is already documented on the separate page [troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md).

If you need further help, please reach out to other **AAPS** users on [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) or [Discord](https://discord.gg/4fQUWHZ4Mw).