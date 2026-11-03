# Actualizarea cu Android Studio

## Construiți aplicația, nu o descărcați

**AAPS** is not available to download, due to regulations concerning medical devices. It is legal to build the app for your own use, but you must not give a copy to others! See [FAQ page](../UsefulLinks/FAQ.md) for details.

```{note}
In case you want to build **AAPS** on a new computer: copy your back-up keystore file to the new computer. Then follow the [Initial build **AAPS** procedure](../SettingUpAaps/BuildingAaps.md) instead of this guide. With the only difference that instead of creating a new keystore, you can select the one you have copied on the new computer.
```

## Overview for updating to a new version of AAPS with Android Studio

```{contents} Steps for updating to a new version of AAPS
:depth: 1
:local: true
```

In case you experience problems, see separate page for [troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md).

### Export your settings

Export your settings from the existing **AAPS** version on your phone. You might not need it, but better be safe than sorry.

See the [Export & import settings](ExportImportSettings.md) page if you don't remember how to do this.

### Verificați versiunea Android Studio

The minimal version required is described in the [Building Instructions](#Building-APK-recommended-specification-of-computer-for-building-apk-file). If your version is older, please [update Android Studio first](#Building-APK-install-android-studio)!

(Update-to-new-version-update-your-local-copy)=
### Actualizați-vă copia locală

* Open your existing AAPS project with Android Studio. You might need to select your project. (Double) click on the AAPS project.

  ![Android Studio - Select Project](../images/update/01_ProjectSelection.png)

* În bara de meniu din Android Studio, selectați Git -> Fetch

   ![Android Studio Menu - Git - Fetch](../images/update/02_GitFetch.png)

* You will see a message in the lower right corner that Fetch was successful.

   ![Android Studio Menu - Git - Fetch successful](../images/update/03_GitFetchSuccessful.png)

* In the menu bar, now select Git -> Pull

   ![Android Studio Menu - Git - Pull](../images/update/04_GitPull.png)

* Leave all options as they are (origin/master) and select Pull

   ![Android Studio - Git - Pull dialog](../images/update/05_GitPullOptions.png)

* Wait while download is in progress, you will see this as info in the bottom bar. When it's done, you will see a success message.

  ```{note}
  The files that were updated may vary! This is not an indication of a problem.
  ```

   ![Android Studio - Pull successful](../images/update/06_GitPullSuccess.png)

* Gradle Sync will be running to download some dependencies. Așteptați până se termină.

  ![Android Studio - Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

### Verificați versiunea JVM

This check is particularly indicated if you have already built a previous version of **AAPS** on the same computer.

Check in the [Building Instructions](#Building-APK-recommended-specification-of-computer-for-building-apk-file) the required version for JVM, matching the **AAPS** version you are now building. Apoi urmați pașii descriși la [Incompatible Gradle JVM](#incompatible-gradle-jvm) pentru a vă asigura că folosiți versiunea corectă.

(Update-to-new-version-build-the-signed-apk)=
### Construiți APK-ul semnat

Your sourcecode is now the current released version, and all prerequisites have been checked. It's time to build the signed apk as described in the [build signed apk section](#Building-APK-generate-signed-apk).

(Update-to-new-version-transfer-and-install)=

### Transfer and install the apk
Trebuie să transferați fișierul apk pe telefon pentru a-l putea instala.

```{note}
If you completed the build with the same existing key store in Android Studio, then you do not need to remove the existing app on your phone. When you install the apk, follow the prompts to install updates.
For other scenarios such as establishing a new key store in Android Studio for your signed apk, you will need to delete the old app before installing the apk. **Nu uitați să exportați setările!**
```

See the instructions for [transferring and installing AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md). Where Google's [Android developer verification](#android-developer-verification) is enforced (from September 2026, depending on your country), install with [ADB](#android-developer-verification-adb) instead of tapping the APK file.

Continuați [aici](#Update-to-new-version-check-aaps-version-on-phone).

(update-computer-build-troubleshooting)=

## Depanare

Dacă ceva nu merge bine, nu intrați în panică.

Respirați adânc!

Apoi verificați dacă problema dumneavoastră este deja descrisă pe pagina separată [Depanare Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md).

If you need further help, please reach out to other **AAPS** users on [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) or [Discord](https://discord.gg/4fQUWHZ4Mw).