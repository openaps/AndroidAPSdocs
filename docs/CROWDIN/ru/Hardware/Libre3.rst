Freestyle Libre 3
**************************************************

The Freestyle Libre 3 system can automatically report dangerous blood glucose levels. The Libre3 Sensor sends the current blood sugar level to a receiver (reader or smartphone) every minute. При необходимости приемник инициирует оповещение. With a modified Libre 3 app, Juggluco app and the xDrip+ app, you can continuously receive and display your blood sugar level on your smartphone. It's even possible to receives older data out of the sensor memory (two hours minutely glucose and two weeks once per 5 minute history data.) This is sendt to Juggluco.

Сенсор может быть откалиброван в диапазоне от -40 мг/дл до +20 мг/дл (-2,2 ммоль/л до +1,1 ммоль/л) для корректировки различий между замерами глюкометра и показаниями с сенсора.

Current limitations
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  It's currently not confirmed if this solution is working with US version of the Freestyle Libre 3 sensors!
-  The app will only work for arm64 systems (64 bit systems). Most modern phones are supported. If you are unsure, just try to install the patch and try to start the app.
-  If you have a rooted system, you need to cover the root. Here you got some instructions: `link <https://www.reddit.com/r/Freestylelibre/comments/s22vlr/comment/hw2p4th/?utm_source=share&utm_medium=web2x&context=3>`_.
-  Juggluco (required app to receive the libre3 readings) does only support English, Dutch and Italian languages. The patched Libre3 app does support: ar, de, es, fr, hi, in, it, ja, ko, my, nl, pt, ru, th, tr and vi.

Step 1: Download and setup the patched LibreLink-App
==================================================

Download the patched .apk file `here <https://github.com/maheini/FreeStyle-Libre-3-patch/raw/main/Patched%20Apk/Libre%203_v3.3.0_apkfab.com.apk>`_ or `here <https://apkfab.com/libre-3/com.freestylelibre3.app.de/apk?h=142cfbb2e0b1f10cd280408b10c5a5127e46e00e78d7775dae382529921487e9>`_ and install it on your phone.

After you successfully installed the app on your phone, open the app. If you see any warning like the one below, you can ignore it. (The app is working with any EU sensor)

.. image:: ../images/libre3/step_1.jpg
   :alt: LibreLink warning

If you are on the screen “Create an Account”, you got the option to create a LibreView account. This might be a good option, as you got the possibility to re-enable a sensor with a different app. It also allows you to share the BG data to LibreView. I you don’t like to, just press “Skip” at the top right.

.. image:: ../images/libre3/step_2.jpg
   :alt: LibreView account

Plese select your Unit of Messurement on this screen. You can change it later as well.

.. image:: ../images/libre3/step_3.jpg
   :alt: Measurement Unit selection

If you got a Popup, asking for “Ignore battery optimisation?”, click “ALLOW”. This will keep the Libre3 app running in the background.

.. image:: ../images/libre3/step_4.jpg
   :alt: Disable battery optimisations

Now you should have set up the Libre3 app. Let’s continue with the connection to Juggluco

Step 2: Connect Libre3 with Juggluco
==================================================

Open the Libre3 sidebar and select Juggluco.

.. image:: ../images/libre3/step_5.jpg
   :alt: Juggluco menu

Within the Juggluco menu, ensure "Port" is set to 7117 and click “Add Connection” on the bottom.

.. image:: ../images/libre3/step_6.jpg
   :alt: Juggluco overview

Now, fill in everything, according to the image below:

.. image:: ../images/libre3/step_7.jpg
   :alt: Libre Juggluco setup

It you are done, click on “Save” to confirm your setttings. Awesome, you can close the Libre3 app now!

Step 3: Setup Juggluco
==================================================

Download the Juggluco .apk file `here <https://github.com/maheini/FreeStyle-Libre-3-patch/raw/main/Juggluco-solution/versions/latest/Juggluco.apk>`_ or `here <https://apkfab.com/juggluco/tk.glucodata/apk?h=1fc401ff9fbe7f56e6a0a7068fed6da96592b13757c3b05cddff893d813e18fd>`_ and install it on your phone.

Now let’s open the app. You will be greeted with this screen below. Just click the “Without sensor” button.

.. image:: ../images/libre3/step_8.jpg
   :alt: Juggluco welcome screen

After that, you get a short introduction text. Click on “OK”.

.. image:: ../images/libre3/step_9.jpg
   :alt: Juggluco instroduction screen

Ok, let’s setup Juggluco! The app itself doesn’t have the best Interface, but it’s a very useful app. To open the settings, click anywhere on the top left screen. Now you should see this menu below. Select “Settings”.

.. image:: ../images/libre3/step_10.jpg
   :alt: Juggluco settings menu

Within the settings, you can configure the data-connection to xDrip. Click on “Send to xDrip” and press “OK”.

.. image:: ../images/libre3/step_11.jpg
   :alt: Juggluco settings

Press on the top left center within the Juggluco app. A new menu should pop up. Please select “Mirror”.

.. image:: ../images/libre3/step_12.jpg
   :alt: Juggluco connection menu

You should see this screen. Please check the port settings on the top right corner, which should be set to "8795" and after that, tap on "Add Connection". (Keep in mind, within the Juggluco app the ports are switched) 

.. image:: ../images/libre3/step_13.jpg
   :alt: Juggluco connection screen

Now let’s fill in all the settings as shown below and your password according to your Libre3 password. If you did that - press “Save” to confirm.

.. image:: ../images/libre3/step_14.jpg
   :alt: Juggluco connection settings

Well done! You can now try to press the “Sync” button within the previous menu. After some time, Juggluco should receive the blood glucose values automatically from Libre3 app.

Now start the Libre3 sensor with the patched app by simply scanning the sensor. Убедитесь, что заданы все параметры. You can use a sensor that was already used with the original Libre3 app if you specify the same LibreView account name. You have to press "Start New Sensor" and  scan the sensor. If you want to go back to the unpatched Libre 3 app, you have to do the same.

Обязательные параметры для успешного запуска сенсора:

-  NFC enabled / BT enabled
-  memory and location permission enabled
-  location service enabled
-  automatic time and time zone setting
-  set at least one alarm in the patched app

Обратите внимание, что служба определения расположения является центральным параметром. Это не разрешение на доступ к геолокации в приложении, которое также должно быть активировано!

Step 4: Finally set up xDrip
==================================================

Значения гликемии передаются на смартфон приложением xDrip+. 

* Если это еще не сделано, загрузите xdrip и установите одну из последних ночных сборок отсюда `<https://github.com/NightscoutFoundation/xDrip/releases>`_.
* В xDrip+ выберите "Libre2 (пропатченное приложение)" в качестве источника данных
* При необходимости введите "BgReading:d, xdrip libr_receiver:v" в разделе Менее распространенные настройки -> Extra Logging Settings-> Extra tags for logging. Это позволит записывать сообщения об ошибках для устранения неисправностей.
В xdrip перейдите в настройки > совместимость программ >локальная трансляция данных и выберите Включить (ON).
В xdrip+ перейдите в настройки > совместимость программ > принимать назначения (Accept treatments) и выберите ВЫКЛ (OFF).
* для включения приема ГК с xdrip (версия AAPS 2.5.x и выше) установите `Settings > Interapp Settings > Identify Receiver "info.nightscout.androidaps" <../Configuration/xdrip.html#identify-receiver>`_
Если хотите, чтобы AndroidAPS мог калибровать показания гликемии, в xdrip + перейдите в настройки > совместимость приложений > принимать калибровки (Accept calibrations) и выберите ВКЛ (ON).  Возможно вы также захотите рассмотреть варианты калибровки в настройках > менее распространенные параметры > дополнительные параметры калибровки.

.. image:: ../images/Libre2_Tags.jpg
  :alt: xDrip+ LibreLink журналы

Step 5: Start sensor within xDrip
==================================================

В xDrip+ запустите датчик с помощью "Start Sensor" и "not today". 

На самом деле это физически не запустит сенсор Libre2 и не начнет взаимодействие с ним. Это просто для того, чтобы указать xDrip+, что новый сенсор начал передавать уровень ГК. Если доступно, введите два замера крови для начальной калибровки. Теперь значения глюкозы крови должны отображаться в xDrip+ каждые 5 минут. Пропущенные значения, например из-за того, что вы были слишком далеко от вашего телефона, не будут восстановлены.

После смены сенсора xDrip+ автоматически определит новый и удалит все данные калибровки. После активации измерьте ГК и сделайте первоначальную калибровку.

Step 6: Configure AndroidAPS (for looping only)
==================================================

* В AndroidAPS перейдите в Config Builder > BG Source и проверьте 'xDrip+' 
Если AAPS не получает значения ГК с телефона в режиме авиаперелета пользуйтесь функцией Идентифицировать приемник на странице настроек `xDrip+ <../Configuration/xdrip.html#identify-receiver>`_.

До настоящего времени, используя Libre 2 в качестве источника данных ГК, невозможно активировать «Включить SMB всегда» и «Включить SMB после углеводов» в алгоритме SMB. Значения BG Libre 2 недостаточно ровные, чтобы использовать их безопасно. Подробнее см. в `Выравнивание данных мониторинга <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md>`.

Опыт и устранение неполадок
==================================================

Troubleshooting Libre3 no readings
--------------------------------------------------

-  Android location service is not granted - please enable it in the system settings
-  automatic time and time zone not set - please change the settings accordingly
-  Bluetooth is switched off - please switch on

Troubleshooting Libre3 -> Juggluco connection
--------------------------------------------------

-  Ensure if Libre3 is receiving any readings
-  Check your settings & password again
-  Click “Sync” within Libre3->Juggluco and “Sync” and “Reinit” button within Juggluco->Mirror
-  It is possible that sometimes after configuring everything, you have to force close Libre3 and restart it.
-  Wait some time or try to force close Juggluco
-  Older versions of Juggluco (below 2.9.6) will not send back-filled data from the Libre3 sensor to connected devices (for example Juggluco on WearOS.) It is possible that you have to press "Resend Data" on within the patched Libre 3 app (Juggluco menu) for this.

Further help
--------------------------------------------------

Original instructions: `jkaltes website <http://jkaltes.byethost16.com/Juggluco/libre3/>`_

Additional Github repo: `Github link <https://github.com/maheini/FreeStyle-Libre-3-patch>`_