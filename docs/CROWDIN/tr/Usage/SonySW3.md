# Sony Smartwatch 3 için Google Play Hizmetinin Manuel Kurulumu

Sony Smartwatch 3, APPS ile kullanılacak en popüler saatlerden biridir. Maalesef Google, 2020 sonbaharında wear OS 1.5 cihazları için desteği bıraktı. Bu Sony SW3'ü AndroidAPS 2.7 ve üstü ile kullanırken sorunlara yol açar.

Aşağıdaki geçici çözüm, Sony Smartwatch 3'ün kullanım süresini uzatacaktır, ancak yeni bir akıllı saate geçme ihtiyacının er ya da geç geleceğini unutmayın.

## 1. Wear OS için en son GService'i indirin

- Using [apkmirror website](https://www.apkmirror.com/apk/google-inc/google-play-services-android-wear/) you can find the latest apk for "Google Play Services (Wear OS)".

  Mimari: armeabi-v7a, Minimum Sürüm: Android 6.0+, Ekran DPI: nodpi

- You must ensure 2 things:

  - Is it the latest version?
  - Is it compatible with Android 6.0+ (as it's the wear android version, 7.0+ and above will not work)?

- Sooner or later, Google will definitely drop Android 6.0. Bu olduğunda, en son sürüm artık Android 6.0+ için mevcut olmayacak, bu nedenle son olacak.

## 2. Adb hata ayıklama araçlarını bilgisayarınıza indirin/yükleyin

- There are multiple ways to install the adb debugging tool.
- It is recommended to use [SDK Platform Tools](https://developer.android.com/studio/releases/platform-tools): Just download zip file and unzip to a directory of your choice.

## 3. Saatinizde ADB Hata Ayıklama seçeneklerini etkinleştirin

- Enable developer mode by going to Settings --> About --> Build number
- Click it 7 times.
- Now go to Settings --> Developer Options --> ADB Debugging (enable)

## 4. Saatinizi bilgisayarınıza bağlayın

- Then plug your smartwatch to PC.
- Rename latest downloaded google services APK using some short and simple name (let's say SW3fix.apk).
- Place this APK to the directory of your adb tool (in our case: the directory of unzipped SDK Platform Tools).
- Open Windows terminal using command „cmd“ in Windows start menu.
- In terminal, go to the directory that includes your adb tool and google services APK (type command „cd \[your path\]“, e.g. „cd C:UsersSWR50loopersdktools“).
- Then type “adb devices”.
- After a moment, you should get a prompt asking for debugging permission on your watch: accept.
- In the terminal, you should now see something like "14452D11F536B52 device" when typing "adb devices" again.
- If you see "unauthorized" or else, you're not ready for the next step, go back and try again.
- If you struggle at this step, you may need specific drivers or else for your watch. Google bu noktada en iyi arkadaşınız olacak.
- Then wait, the installation can take several minutes.

## 5. Uygulamayı saatinize gönderin

- In terminal enter this command „adb install -r -g aplicationname.apk“ (so in our case „adb install -r -g SW3fix.apk“).

  ```{image} ../images/SonySW3_Terminal1.png
  :alt: Terminal komutu
  ```

- Wait for about 4–5 minutes for installation to complete.

  ```{image} ../images/SonySW3_Terminal2.png
  :alt: Terminal başarılı kurulum
  ```

- Once it's done, restart your watch and you should see the apps beginning to synchronize themself promptly.
