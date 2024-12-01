# Building the Wear AAPS app

The Wear OS App of **AAPS**  (“Wear OS apk”) required for the smartwatch has been separated from the "full" **AAPS** build for the Android phone. Therefore you have to generate a second installation file, or apk, to install **AAPS** wear onto the watch (which is done by side-loading it from the phone). It is strongly recommended that the **AAPS** Wear apk file is built immediately after first building the full **AAPS** apk for the phone. Not only is this very quick to do if you are [building **AAPS** for the first time](../SettingUpAaps/BuildingAaps.md), but it will avoid any potential compatibility issues when you try to set up the watch-phone communication. The **AAPS** Wear apk on the watch is unlikely to be compatible with the **AAPS** phone apk if they have been built in different versions of Android Studio, or if months have past since the initial **AAPS** build.

If you are already using **AAPS** on a phone and you did not build both the phone and watch (wear) **AAPS** apks at the same time, to ensure success it is therefore best to do a fresh build of both apk files at the same time. Build the AAPS phone and watch apks at the same time, using the same **keystore file**.

## Supported Wear OS versions

AAPS requires at least Wear OS API level 28 (Android 9).

```{warning}
AAPS Watchfaces are available for Wear OS smartwatches with API level 28 to 33.<br>
Wear OS 5 has [limitations](BuildingAapsWearOs-WearOS5).
```

## Building the **AAPS** Wear apk

The build process for the Wear apk is similar to that for the "full" phone apk.

- Follow the instructions for [Building AAPS](../SettingUpAaps/BuildingAaps.md).
- When you reach [module selection](#Building-APK-wearapk) in "Build the AAPS signed apk", make sure to select **`AndroidAPS.wear`**.

![Wear module](../images/Building-the-App/wear_build1.png)

Select "**fullRelease**" to generate the **AAPS** Wear apk file.

![Wear module](../images/Building-the-App/wear_build2.png)

If you prefer, you can build **“pumpcontrolRelease”** instead, from the drop-down menu, which will allow you to just remotely control the pump but without looping.

## Troubleshooting

In the process of building the 3.2 full **AAPS** app (and in fact any signed app), Android Studio generates a .json file in the same folder. This then causes errors with [uncommitted changes](#troubleshooting_androidstudio-uncommitted-changes) when you try to build the next signed app, like the **AAPS** wear app. The quickest way to resolve this is to navigate to the folder where the full AAPS app has been built, your folder is probably something like:

`C:\Users\Your Name\AndroidStudioProjects\AndroidAPS\app\aapsclient\release.`

Either delete, or move the unneeded .json file out of the folder. Then try to build the **AAPS** wear app again. If that doesn't work, the more detailed [troubleshooting guide](../GettingHelp/TroubleshootingAndroidStudio.md) will help you to identify the specific file causing the issue, which could also be your keystore file. 