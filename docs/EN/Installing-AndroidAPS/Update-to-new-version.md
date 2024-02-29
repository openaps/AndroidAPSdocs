# Update to a new version or branch

## Build yourself instead of download

**AAPS** is not available to download, due to regulations concerning medical devices. It is legal to build the app for your own use, but you must not give a copy to others! See [FAQ page](../Getting-Started/FAQ.md) for details.

## Important notes
* Please update to the new version of **AAPS** as soon as possible after a new release is available.
* When a new release is available, in the **AAPS** app itself, you will receive an information banner about the new version.
* The new version will also be announced on Facebook at the time of release.
* Following the release, please read the [Release Notes](../Installing-AndroidAPS/Releasenotes.md) in detail, and clarify any queries with the community on Facebook or Discord, before proceeding with the update.
* For **AAPS** versions 2.7 and newer, the location for the new files is at [https://github.com/nightscout/AndroidAPS](https://github.com/nightscout/AndroidAPS).
* You need to use the latest version of Android Studio, **[Hedgehog, 2023.1.1](https://developer.android.com/studio/)**. 
* If building the **AAPS** app using a Windows platform, you will need to use a Windows 64-bit system since 32-bit systems are not supported.

## Overview for updating to a new version of AAPS

1. [Export your settings](../Usage/ExportImportSettings-export-settings) from the existing **AAPS** version on your phone.
You might not need it, but better be safe than sorry.
2. [Update local copy](Update-to-new-version-update-your-local-copy) of the AAPS sourcecode (Git->Fetch and Git -> Pull)
3. [Build signed APK](Update-to-new-version-build-the-signed-apk)
4. [Transfer the built apk](Building-APK-transfer-apk-to-smartphone) to your phone and install it
5. [Check the version](Update-to-new-version-check-aaps-version-on-phone) in AAPS
6. Depending on your [BG source](../Configuration/BG-Source.md) make sure to [identify receiver](xdrip-identify-receiver) in xDrip or use the ['Build your own Dexcom App'](DexcomG6-if-using-g6-with-build-your-own-dexcom-app).

In case you experience problems, see separate page for [troubleshooting Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio).

## 1. Export your settings
See the [Export & import settings](ExportImportSettings-export-settings) page if you don't remember how to do this.

(Update-to-new-version-update-your-local-copy)=
## 2. Update your local copy

As of version 2.7 repository location changed to [https://github.com/nightscout/AndroidAPS](https://github.com/nightscout/AndroidAPS). If you are not familiar with git the easiest way for update is remove directory with AAPS on your disk and follow the instructions to do a [New clone](../Installing-AndroidAPS/Building-APK.md).

If you have already changed the URL or update from version 2.8.x, follow these steps:

* Open your existing AAPS project with Android Studio. You might need to select your project. (Double) click on the AAPS project.

  ![Android Studio - Select Project](../images/update/01_ProjectSelection.png)

* In the menu bar of Android Studio, select Git -> Fetch

   ![Android Studio Menu - Git - Fetch](../images/update/02_GitFetch.png)

* You will see a message in the lower right corner that Fetch was successful.

   ![Android Studio Menu - Git - Fetch successful](../images/update/03_GitFetchSuccessful.png)

* In the menu bar, now select Git -> Pull

   ![Android Studio Menu - Git - Pull](../images/update/04_GitPull.png)  

* Leave all options as they are (origin/master) and select Pull

   ![Android Studio - Git - Pull dialog](../images/update/05_GitPullOptions.png)

* Wait while download is in progress, you will see this as info in the bottom bar. When it's done, you will see a success message.
Note: The files that were updated may vary! This is not an indication

   ![Android Studio - Pull successful](../images/update/06_GitPullSuccess.png)

* Gradle Sync will be running a couple of seconds to download some dependencies. Wait until it is finished.

  ![Android Studio - Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

(Update-to-new-version-build-the-signed-apk)=
## 3. Build the Signed APK

Your sourcecode is now the current released version. It's time to build the signed apk from it as described in the [build signed apk section](Building-APK-generate-signed-apk).

## 4. Transfer the apk
You need to transfer the apk to your phone so you can install it.

See the instructions for [Transfer APK to smartphone](Building-APK-transfer-apk-to-smartphone)


## 5. Install apk
On your phone you have to allow installation from unknown sources. Manuals how to do this can be found on the internet (i.e. [here](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) or [here](https://www.androidcentral.com/unknown-sources)). 
Note: If you completed the build with the same existing key store in Android Studio, then you do not need to remove the existing app on your phone. When you install the apk, follow the prompts to install updates. For other scenarios such as establishing a new key store in Android Studio for your signed apk, you will need to delete the old app before installing the apk.

(Update-to-new-version-check-aaps-version-on-phone)=
## 6. Check AAPS version on phone

After you installed the new apk, you can check the AAPS version on your phone by clicking the three dots menu on the top right and then About. You should see the current version.

![AAPS version installed](../images/Update_VersionCheck282.png)


# Troubleshooting

If anything goes wrong, don't panic.

Take a breath!

Then see the separate page [troubleshooting Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio) if your problem is already documented!

If you need further help, please reach out to other **AAPS** users on [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) or [Discord](https://discord.gg/4fQUWHZ4Mw).
