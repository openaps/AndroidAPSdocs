# Установка службы Google Play вручную для Sony Smartwatch 3

Sony Smartwach 3-одни из самых популярных часов дляс AAPS. К сожалению, осенью 2020 года Google прекратил поддержку устройств с операционной системой OS 1.5. Это приводит к проблемам при использовании Sony SW3 с AndroidAPS 2.7 и более поздними версиями приложения.

Следующий обходной путь должен продлить время использования Sony Smartwatch 3, но имейте в виду, что необходимость перехода на новые часы рано или поздно наступит.

## 1. Скачайте свежую версию GService для Wear OS

- Using [apkmirror website](https://www.apkmirror.com/apk/google-inc/google-play-services-android-wear/) you can find the latest apk for "Google Play Services (Wear OS)".

  Архитектура: armeabi-v7a, Минимальная версия: Android 6.0+, Screen DPI: nodpi

- You must ensure 2 things:

  - Is it the latest version?
  - Is it compatible with Android 6.0+ (as it's the wear android version, 7.0+ and above will not work)?

- Sooner or later, Google will definitely drop Android 6.0. Когда это произойдет, последняя версия больше не будет доступна для Android 6.0+.

## 2. Скачайте/установить инструменты adb на вашем компьютере

- There are multiple ways to install the adb debugging tool.
- It is recommended to use [SDK Platform Tools](https://developer.android.com/studio/releases/platform-tools): Just download zip file and unzip to a directory of your choice.

## 3. Включите параметры отладки ADB на ваших часах

- Enable developer mode by going to Settings --> About --> Build number
- Click it 7 times.
- Now go to Settings --> Developer Options --> ADB Debugging (enable)

## 4. Подключите ваши часы к компьютеру

- Then plug your smartwatch to PC.
- Rename latest downloaded google services APK using some short and simple name (let's say SW3fix.apk).
- Place this APK to the directory of your adb tool (in our case: the directory of unzipped SDK Platform Tools).
- Open Windows terminal using command „cmd“ in Windows start menu.
- In terminal, go to the directory that includes your adb tool and google services APK (type command „cd \[your path\]“, e.g. „cd C:UsersSWR50loopersdktools“).
- Then type “adb devices”.
- After a moment, you should get a prompt asking for debugging permission on your watch: accept.
- In the terminal, you should now see something like "14452D11F536B52 device" when typing "adb devices" again.
- If you see "unauthorized" or else, you're not ready for the next step, go back and try again.
- If you struggle at this step, you may need specific drivers or else for your watch. Google вам поможет их отыскать.
- Then wait, the installation can take several minutes.

## 5. Отправьте приложение на часы

- In terminal enter this command „adb install -r -g aplicationname.apk“ (so in our case „adb install -r -g SW3fix.apk“).

  ```{image} ../images/SonySW3_Terminal1.png
  :alt: команда терминала
  ```

- Wait for about 4–5 minutes for installation to complete.

  ```{image} ../images/SonySW3_Terminal2.png
  :alt: успешная установка в терминале
  ```

- Once it's done, restart your watch and you should see the apps beginning to synchronize themself promptly.
