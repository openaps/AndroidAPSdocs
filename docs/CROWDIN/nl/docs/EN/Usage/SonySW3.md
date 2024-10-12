# Manual Installation of Google Play Service for  Sony Smartwatch 3

The Sony Smartwatch 3 is one of the most popular watches to be used with AAPS. Helaas heeft Google de ondersteuning voor Wear OS 1,5 apparaten in 2020 beëindigd. This leads to problems when using Sony SW3 with AAPS 2.7 and above.

The following workaround should extend the time the Sony Smartwatch 3 can be used but keep in mind that the need to switch to a new smartwatch will come sooner or later.

## 1. Download the latest GService for Wear OS

- Using [apkmirror website](https://www.apkmirror.com/apk/google-inc/google-play-services-android-wear/) you can find the latest apk for "Google Play Services (Wear OS)".

  Architecture: armeabi-v7a, Minimum Version: Android 6.0+, Screen DPI: nodpi

- You must ensure 2 things:

  - Is it the latest version?
  - Is it compatible with Android 6.0+ (as it's the wear android version, 7.0+ and above will not work)?

- Sooner or later, Google will definitely drop Android 6.0. When this will happen, the latest version will not be available anymore for Android 6.0+, therefore it will be the end.

## 2. Download/Install adb debugging tools on your computer

- There are multiple ways to install the adb debugging tool.
- It is recommended to use [SDK Platform Tools](https://developer.android.com/studio/releases/platform-tools): Just download zip file and unzip to a directory of your choice.

## 3. Enable ADB Debugging options on your watch

- Enable developer mode by going to Settings --> About --> Build number
- Or it could be Settings --> System --> About -->  --> Versions --> Build number

- Click it 7 times.
- Now go to Settings --> Developer Options --> ADB Debugging (enable)

## 4. Connect your watch to your computer

- Then plug your smartwatch to PC.
- Rename latest downloaded google services APK using some short and simple name (let's say SW3fix.apk).
- Place this APK to the directory of your adb tool (in our case: the directory of unzipped SDK Platform Tools).
- Open Windows terminal using command „cmd“ in Windows start menu.
- In terminal, go to the directory that includes your adb tool and google services APK (type command „cd \[your path\]“, e.g. „cd C:UsersSWR50loopersdktools“).
- Then type “adb devices”.
- After a moment, you should get a prompt asking for debugging permission on your watch: accept.
- In the terminal, you should now see something like "14452D11F536B52 device" when typing "adb devices" again.
- If you see "unauthorized" or else, you're not ready for the next step, go back and try again.
- If you struggle at this step, you may need specific drivers or else for your watch. Google will be your best friend at this point.
- Then wait, the installation can take several minutes.

## 5. Send the app to your watch

- In terminal enter this command „adb install -r -g aplicationname.apk“ (so in our case „adb install -r -g SW3fix.apk“).

  ![Terminal command](../images/SonySW3_Terminal1.png)

- Wait for about 4–5 minutes for installation to complete.

  ![Terminal successful installation](../images/SonySW3_Terminal2.png)

- Once it's done, restart your watch and you should see the apps beginning to synchronize themself promptly.
