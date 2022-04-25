# Update to a new version or branch

## Build yourself instead of download

**AndroidAPS is not available as download due to regulation for medial devices. It is legal to build the app for your own use but you must not give a copy to others! See [FAQ page](../Getting-Started/FAQ.md) for details.**

## Important notes

* Please update as soon as possible after a new release is available. You will receive an [information on the AndroidAPS home screen](../Installing-AndroidAPS/Releasenotes.md#release-notes) about the new version.
* As of version 2.7 repository location changed to [https://github.com/nightscout/AndroidAPS](https://github.com/nightscout/AndroidAPS). If you are not familiar with git the easiest way for update is remove directory with AndroidAPS and do a [new clone](../Installing-AndroidAPS/Building-APK.md).
* Please use **[Android Studio Version 2020.3.1 (Arctic Fox)](https://developer.android.com/studio/)** or newer to build the apk.
* [Windows 10 32-bit systems](../Installing-AndroidAPS/troubleshooting_androidstudio.md#unable-to-start-daemon-process) are not supported by Android Studio 2020.3.1.
* Make sure you read the [Release Notes](../Installing-AndroidAPS/Releasenotes) for the current version

## Overview for updating your AndroidAPS version

1. [Export your settings](../Usage/ExportImportSettings.md#export-settings) from the existing AAPS version on your phone.
You might not need it, but better be save than sorry.
2. [Update local copy](../Installing-AndroidAPS/Update-to-new-version.md#update-your-local-copy) of the AndroidAPS sourcecode (Git->Fetch and Git -> Pull)
3. [Build signed APK](../Installing-AndroidAPS/Update-to-new-version.md#build-the-signed-apk)
4. [Transfer the built apk](../Installing-AndroidAPS/Building-APK.md#transfer-apk-to-smartphone) to your phone and install it
5. [Check the version](#check-aaps-version-on-phone) in AndroidAPS
6. Depending on your [BG source](../Configuration/BG-Source.md) make sure to [identify receiver](../Configuration/xdrip.md#identify-receiver) in xDrip or use the ['Build your own Dexcom App'](../Hardware/DexcomG6.md#if-using-g6-with-build-your-own-dexcom-app).

In case you experience problems, see separate page for [troubleshooting Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio).

## 1. Export your settings
See the [Export & import settings](../Usage/ExportImportSettings.md#export-settings) page if you don't remember how to do this.

## 2. Update your local copy

As of version 2.7 repository location changed to [https://github.com/nightscout/AndroidAPS](https://github.com/nightscout/AndroidAPS). If you are not familiar with git the easiest way for update is remove directory with AndroidAPS on your disk and follow the instructions to do a [New clone](../Installing-AndroidAPS/Building-APK.md).

If you have already changed the URL or update from version 2.8.x, follow these steps:

* Open your existing AndroidAPS project with Android Studio. You might need to select your project. (Double) click on the AndroidAPS project.

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

## 3. Build the Signed APK

Your sourcecode is now the current released version. It's time to build the signed apk from it as described in the [build signed apk section](../Installing-AndroidAPS/Building-APK.md#generate-signed-apk).

## 4. Transfer the apk
You need to transfer the apk to your phone so you can install it.

See the instructions for [Transfer APK to smartphone](../Installing-AndroidAPS/Building-APK.md#transfer-apk-to-smartphone)


## 5. Install apk
On your phone you have to allow installation from unknown sources. Manuals how to do this can be found on the internet (i.e. [here](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) or [here](https://www.androidcentral.com/unknown-sources)).


## 6. Check AAPS version on phone

After you installed the new apk, you can check the AAPS version on your phone by clicking the three dots menu on the top right and then About. You should see the current version.

![AAPS version installed](../images/Update_VersionCheck282.png)


# Troubleshooting

If anything goes wrong, don't panic.

Take a breath!

Then see the separate page [troubleshooting Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio) if your problem is already documented!
