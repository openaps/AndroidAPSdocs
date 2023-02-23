# Installation manuelle du service Google Play pour Sony Smartwatch 3

La montre Sony Smartwatch 3 est l'une des plus populaires utilisée avec AAPS. Malheureusement, Google a abandonné la prise en charge des appareils sous Wear OS 1.5 à l'automne 2020. Cela entraîne des problèmes lors de l'utilisation de Sony SW3 avec AndroidAPS 2.7 et plus.

La solution de contournement suivante devrait prolonger la durée d'utilisation de la Smartwatch 3, mais gardez à l'esprit que le besoin de passer à une nouvelle montre connectée viendra tôt ou tard.

## 1. Téléchargez la dernière version de Google Services pour Wear OS

- Using [apkmirror website](https://www.apkmirror.com/apk/google-inc/google-play-services-android-wear/) you can find the latest apk for "Google Play Services (Wear OS)".

  Architecture : armeabi-v7a, version minimale : Android 6.0+, Écran DPI : nodpi

- You must ensure 2 things:

  - Is it the latest version?
  - Is it compatible with Android 6.0+ (as it's the wear android version, 7.0+ and above will not work)?

- Sooner or later, Google will definitely drop Android 6.0. Quand cela arrivera, la dernière version ne sera plus disponible pour Android 6.0+, donc ce sera la fin.

## 2. Téléchargez / Installez les outils de débogage adb sur votre ordinateur

- There are multiple ways to install the adb debugging tool.
- It is recommended to use [SDK Platform Tools](https://developer.android.com/studio/releases/platform-tools): Just download zip file and unzip to a directory of your choice.

## 3. Activez les options de débogage ADB sur votre montre

- Enable developer mode by going to Settings --> About --> Build number
- Click it 7 times.
- Now go to Settings --> Developer Options --> ADB Debugging (enable)

## 4. Connectez votre montre à votre ordinateur

- Then plug your smartwatch to PC.
- Rename latest downloaded google services APK using some short and simple name (let's say SW3fix.apk).
- Place this APK to the directory of your adb tool (in our case: the directory of unzipped SDK Platform Tools).
- Open Windows terminal using command „cmd“ in Windows start menu.
- In terminal, go to the directory that includes your adb tool and google services APK (type command „cd \[your path\]“, e.g. „cd C:UsersSWR50loopersdktools“).
- Then type “adb devices”.
- After a moment, you should get a prompt asking for debugging permission on your watch: accept.
- In the terminal, you should now see something like "14452D11F536B52 device" when typing "adb devices" again.
- If you see "unauthorized" or else, you're not ready for the next step, go back and try again.
- If you struggle at this step, you may need specific drivers or else for your watch. Google sera votre meilleur ami à ce stade.
- Then wait, the installation can take several minutes.

## 5. Envoyer l'application à votre montre

- In terminal enter this command „adb install -r -g aplicationname.apk“ (so in our case „adb install -r -g SW3fix.apk“).

  ```{image} ../images/SonySW3_Terminal1.png
  :alt: Commande Terminal
  ```

- Wait for about 4–5 minutes for installation to complete.

  ```{image} ../images/SonySW3_Terminal2.png
  :alt: Installation réussie du terminal
  ```

- Once it's done, restart your watch and you should see the apps beginning to synchronize themself promptly.
