# Manuální instalace služeb Google Play pro Sony Smartwatch 3

Sony Smartwach 3 patří k nejoblíbenějším hodinkám používaným s AAPS. Společnost Google od podzimu 2020 již bohužel nepodporuje zařízení s OS 1.5. To vede k problémům při používání hodinek Sony SW3 s AndroidAPS 2.7 a vyšší.

Následující postup by měl prodloužit dobu, po kterou lze hodinky Sony Smartwatch 3 používat, ale mějte na paměti, že dříve nebo později bude potřeba přejít na nové chytré hodinky.

## 1. Stáhněte si nejnovější Google Service pro Wear OS

- Using [apkmirror website](https://www.apkmirror.com/apk/google-inc/google-play-services-android-wear/) you can find the latest apk for "Google Play Services (Wear OS)".

  Architektura: armeabi-v7a, minimální verze: Android 6.0+, DPI obrazovky: nodpi

- You must ensure 2 things:

  - Is it the latest version?
  - Is it compatible with Android 6.0+ (as it's the wear android version, 7.0+ and above will not work)?

- Sooner or later, Google will definitely drop Android 6.0. Až se tak stane, nejnovější verze pro Android 6.0+ již nebude k dispozici, proto to bude konec.

## 2. Stáhněte a nainstalujte si nástroje adb pro ladění do svého počítače

- There are multiple ways to install the adb debugging tool.
- It is recommended to use [SDK Platform Tools](https://developer.android.com/studio/releases/platform-tools): Just download zip file and unzip to a directory of your choice.

## 3. Povolte možnosti ladění ADB na hodinkách

- Enable developer mode by going to Settings --> About --> Build number
- Click it 7 times.
- Now go to Settings --> Developer Options --> ADB Debugging (enable)

## 4. Připojte hodinky k počítači

- Then plug your smartwatch to PC.
- Rename latest downloaded google services APK using some short and simple name (let's say SW3fix.apk).
- Place this APK to the directory of your adb tool (in our case: the directory of unzipped SDK Platform Tools).
- Open Windows terminal using command „cmd“ in Windows start menu.
- In terminal, go to the directory that includes your adb tool and google services APK (type command „cd \[your path\]“, e.g. „cd C:UsersSWR50loopersdktools“).
- Then type “adb devices”.
- After a moment, you should get a prompt asking for debugging permission on your watch: accept.
- In the terminal, you should now see something like "14452D11F536B52 device" when typing "adb devices" again.
- If you see "unauthorized" or else, you're not ready for the next step, go back and try again.
- If you struggle at this step, you may need specific drivers or else for your watch. Google bude v tomto okamžiku vaším nejlepším přítelem.
- Then wait, the installation can take several minutes.

## 5. Odešlete aplikaci do hodinek

- In terminal enter this command „adb install -r -g aplicationname.apk“ (so in our case „adb install -r -g SW3fix.apk“).

  ```{image} ../images/SonySW3_Terminal1.png
  :alt: Příkaz terminálu
  ```

- Wait for about 4–5 minutes for installation to complete.

  ```{image} ../images/SonySW3_Terminal2.png
  :alt: Terminál – úspěšná instalace
  ```

- Once it's done, restart your watch and you should see the apps beginning to synchronize themself promptly.
