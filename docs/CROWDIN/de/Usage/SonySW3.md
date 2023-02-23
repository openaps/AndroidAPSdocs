# Manuelle Installation der Google Play Service für Sony Smartwach 3

Die Sony Smartwach 3 ist eine der beliebtesten Uhren zu Verwendung mit AAPS. Leider hat Google die Unterstützung für Wear OS 1.5 Geräte im Herbst 2020 eingestellt. Dies führt zu Problemen bei der Verwendung von Sony SW3 mit AndroidAPS 2.7 und höher.

Der nachfolgend beschriebene Workaround ermöglicht die Weiternutzung der Sony Smartwatch 3. Behalte aber im Hinterkopf, dass Du über kurz oder lang zu einer Smartwatch mit neuerem Betriebssystem wirst wechseln müssen.

## 1. Lade die neueste Version der GService for Wear OS herunter.

- Using [apkmirror website](https://www.apkmirror.com/apk/google-inc/google-play-services-android-wear/) you can find the latest apk for "Google Play Services (Wear OS)".

  Architecture: armeabi-v7a, Minimum Version: Android 6.0+, Screen DPI: nodpi

- You must ensure 2 things:

  - Is it the latest version?
  - Is it compatible with Android 6.0+ (as it's the wear android version, 7.0+ and above will not work)?

- Sooner or later, Google will definitely drop Android 6.0. Ab diesem Zeitpunkt wird die letzte Version nicht mehr für Android 6.0 zur Verfügung stehen und damit die Nutzung der Sony Smartwatch 3 nicht mehr möglich sein.

## 2. Lade Dir das Adb-Debugging-Tool herunter und installiere sie auf Deinem PC.

- There are multiple ways to install the adb debugging tool.
- It is recommended to use [SDK Platform Tools](https://developer.android.com/studio/releases/platform-tools): Just download zip file and unzip to a directory of your choice.

## 3. Aktiviere die ADB Debugging Optionen auf Deiner Sony Smartwatch 3

- Enable developer mode by going to Settings --> About --> Build number
- Click it 7 times.
- Now go to Settings --> Developer Options --> ADB Debugging (enable)

## 4. Verbinde Deine Smartwatch mit Deinem Computer

- Then plug your smartwatch to PC.
- Rename latest downloaded google services APK using some short and simple name (let's say SW3fix.apk).
- Place this APK to the directory of your adb tool (in our case: the directory of unzipped SDK Platform Tools).
- Open Windows terminal using command „cmd“ in Windows start menu.
- In terminal, go to the directory that includes your adb tool and google services APK (type command „cd \[your path\]“, e.g. „cd C:UsersSWR50loopersdktools“).
- Then type “adb devices”.
- After a moment, you should get a prompt asking for debugging permission on your watch: accept.
- In the terminal, you should now see something like "14452D11F536B52 device" when typing "adb devices" again.
- If you see "unauthorized" or else, you're not ready for the next step, go back and try again.
- If you struggle at this step, you may need specific drivers or else for your watch. Die Google Suche hilft Dir hier weiter.
- Then wait, the installation can take several minutes.

## 5. Sende die App an Deine Smartwatch

- In terminal enter this command „adb install -r -g aplicationname.apk“ (so in our case „adb install -r -g SW3fix.apk“).

  ```{image} ../images/SonySW3_Terminal1.png
  :alt: Terminal Befehl
  ```

- Wait for about 4–5 minutes for installation to complete.

  ```{image} ../images/SonySW3_Terminal2.png
  :alt: Terminal erfolgreiche Installation
  ```

- Once it's done, restart your watch and you should see the apps beginning to synchronize themself promptly.
