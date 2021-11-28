Установка службы Google Play вручную для Sony Smartwatch 3
#####################################################################

Sony Smartwach 3-одни из самых популярных часов дляс AAPS. К сожалению, осенью 2020 года Google прекратил поддержку устройств с операционной системой OS 1.5. Это приводит к проблемам при использовании Sony SW3 с AndroidAPS 2.7 и более поздними версиями приложения. 

Следующий обходной путь должен продлить время использования Sony Smartwatch 3, но имейте в виду, что необходимость перехода на новые часы рано или поздно наступит.

1. Скачайте свежую версию GService для Wear OS
--------------------------------------------------------
* Используя сайт `apkmirror <https://www.apkmirror.com/apk/google-inc/google-play-services-android-wear/>`_ можно найти новую версию приложения "Google Play Services (Wear OS)".

  Архитектура: armeabi-v7a, Минимальная версия: Android 6.0+, Screen DPI: nodpi

* Убедитесь в следующем:

  * Это новейшая версия?
  * Совместима ли она с Android 6.0+ (так как это версия Android wear, 7.0+ и выше не будет работать)?

* Рано или поздно, Google определённо прекратит поддержку Android 6.0. Когда это произойдет, последняя версия больше не будет доступна для Android 6.0+.

2. Скачайте/установить инструменты adb на вашем компьютере
--------------------------------------------------------
* Есть несколько способов установки утилиты отладки adb.
* Рекомендуется использовать `SDK Platform Tools <https://developer.android.com/studio/releases/platform-tools>`_: Просто скачайте zip-файл и распакуйте архив в выбранную директорию.

3. Включите параметры отладки ADB на ваших часах
--------------------------------------------------------
* Включите режим разработчика, перейдя в Настройки --> About --> Номер сборки
* Щелкните по нему 7 раз.
* Теперь перейдите в Настройки --> Параметры разработчика --> Отладка ADB (включено)

4. Подключите ваши часы к компьютеру
--------------------------------------------------------
* Затем подключите часы к ПК.
* Переименуйте последние загруженные Google Play Service APK используя какое-нибудь короткое и простое имя (скажем SW3fix.apk).
* Поместите этот APK в директорию adb (в нашем случае: каталог разархивированных SDK Platform Tools).
*Откройте терминал Windows с помощью команды «cmd» в меню запуска Windows.
*В терминале, перейдите в каталог, который включает инструмент adb и Google Services APK сервисы (введите команду „cd [ваш путь]“, напр. „cd C:\Users\SWR50looper\sdktools“).
* Затем введите "adb devices".
* After a moment, you should get a prompt asking for debugging permission on your watch: accept.
* In the terminal, you should now see something like "14452D11F536B52 device" when typing "adb devices" again.
* If you see "unauthorized" or else, you're not ready for the next step, go back and try again.
* If you struggle at this step, you may need specific drivers or else for your watch. Google will be your best friend at this point.
* Then wait, the installation can take several minutes. 

5. Send the app to your watch
--------------------------------------------------------
* In terminal enter this command „adb install -r -g aplicationname.apk“ (so in our case „adb install -r -g SW3fix.apk“).

  .. image:: ../images/SonySW3_Terminal1.png
    :alt: Terminal command

* Wait for about 4–5 minutes for installation to complete. 

  .. image:: ../images/SonySW3_Terminal2.png
    :alt: Terminal successful installation

* Once it's done, restart your watch and you should see the apps beginning to synchronize themself promptly.
