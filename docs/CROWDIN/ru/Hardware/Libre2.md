# Freestyle Libre 2

The Freestyle Libre 2 system can automatically report dangerous blood glucose levels. Сенсор Libre2 каждую минуту отправляет текущие значения гликемии на принимающее устройство (ридер или смартфон). При необходимости приемник инициирует оповещение. С помощью модифицированного приложения LibreLink и приложения xDrip+ можно непрерывно получать данные ГК на смартфон.

Сенсор может быть откалиброван в диапазоне от -40 мг/дл до +20 мг/дл (-2,2 ммоль/л до +1,1 ммоль/л) для корректировки различий между замерами глюкометра и показаниями с сенсора.

Показания ГК можно также получать с помощью трансмиттера BT, как, например для Libre1.

Важное примечание: Это не работает с американской версией сенсоров Freestyle 2! Версия США подключается только к ридеру, а не к телефону.

## Шаг 1: Создайте собственное модифицированное приложение Librelink

По юридическим причинам установка так называемого патча должна быть произведена самостоятельно. Используйте поисковые системы для поиска соответствующих ссылок. Есть в основном два варианта: рекомендуемое оригинальное исправленное приложение блокирует любой интернет-трафик, чтобы избежать отслеживания. The other variant supports LibreView which may be needed by your doctor.

Вместо оригинального приложения следует установить модифицированное. Следующий датчик, установленный с его помощью, будет передавать текущие значения гликемии приложению xDrip+, работающему на смартфоне через Bluetooth.

Важно: чтобы избежать возможных проблем, рекомендуем сначала установить и затем деинсталлировать оригинальное приложение на смартфон с поддержкой NFC. NFC has to be enabled. Он не требует дополнительной энергии. Затем установите модифицированное приложение.

Исправленное приложение можно определить с помощью уведомления об авторизации в главном режиме. Служба проверки прав доступа в основном режиме повышает стабильность соединения по сравнению с исходным приложением, которое не использует эту службу.

![LibreLink Foreground Service](../images/Libre2_ForegroundServiceNotification.png)

Other indications could be the Linux penguin logo three dot menu -> Info or the font of the patched app. Эти критерии необязательны и зависят от выбранного источника скачивания приложения.

![LibreLink Font Check](../images/LibreLinkPatchedCheck.png)

Убедитесь, что NFC активирована дайте разрешения на обращение к памяти и геолокации, включите автоматическое время и часовой пояс и задайте хотя бы одно оповещение в этом приложении.

Теперь запустите сенсор Libre2 при помощи модифицированного приложения, просто сканируя сенсор. Убедитесь, что заданы все параметры.

Обязательные параметры для успешного запуска сенсора:

-   NFC включен/BT включен
-   включено разрешение на память и геолокацию
-   Включена служба определения местоположения
-   автоматическое определение времени и часового пояса
-   задать хотя бы одно оповещение в модифицированном приложении

Обратите внимание, что служба определения расположения является центральным параметром. Это не разрешение на доступ к геолокации в приложении, которое также должно быть активировано!

![LibreLink permissions memory & location](../images/Libre2_AppPermissionsAndLocation.png)

![automatic time and time zone + alarm settings](../images/Libre2_DateTimeAlarms.png)

Сенсор запоминает устройство, с которого он был запущен. Только это устройство может получать оповещения в будущем.

Первая установка соединения с сенсором имеет решающее значение. Приложение LibreLink пытается установить беспроводное соединение с сенсором каждые 30 секунд. Если один или несколько обязательных параметров отсутствуют, их надо скорректировать. У вас нет ограничений по времени для этого. The sensor is constantly trying to setup the connection. Даже если это длится несколько часов. Будьте терпеливы и попробуйте разные настройки, прежде чем даже подумать о замене сенсора.

As long as you see a red exclamation mark ("!") в левом верхнем углу стартового экрана LibreLink означает, что нет соединения или какая-то другая настройка не позволяет LibreLink издавать оповещения. Please check if the sound is enabled and all sorts of blocking app notifications are disabled. Когда восклицательный знак исчезнет, соединение будет установлено и значения гликемии отправятся на смартфон. Это должно произойти не более чем через 5 минут.

![LibreLink no connection](../images/Libre2_ExclamationMark.png)

Если восклицательный знак остается или сприходят ообщения об ошибке, это может иметь несколько причин:

-   Не предоставлено разрешение службе определения местоположения Android  - включите ее в системных настройках
-   автоматическое время и часовой пояс не заданы - измените настройки
-   активируйте оповещения - по крайней мере один из трех сигналов в LibreLink
-   Bluetooth выключен - включите
-   звук заблокирован
-   уведомления приложений заблокированы
-   неактивные уведомления на экране заблокированы
-   you have a faulty Libre 2 sensor from a production LOT number with a 'K' followed by 8 digits. Вы найдете этот номер на желтой упаковке. Эти сенсоры должны быть заменены, поскольку они не работают с bluetooth.

Перезапуск телефона помогает, возможно, придется перезапустить несколько раз. As soon as the connection is established, the red exclamation mark disappears and the most important step is taken. It may happen that depending on system settings the exclamation mark remains but you still get readings. В обоих случаях нет причин беспокоиться. Sensor and phone are now connected, every minute a blood sugar value is transmitted.

![LibreLink connection established](../images/Libre2_Connected.png)

In rare case it could help to empty the bluetooth cache and/or reset all network connections via the system menu. This removes all connected bluetooth devices which may help to setup a proper bluetooth connection. That procedure is save as the started sensor is remembered by the patched LibreLink app. Nothing additional has to be done here. Simply wait for the patched app to connect to the sensor.

After a successful connection the smartphone settings can be changed if necessary. Это не рекомендуется, но вы можете захотеть экономить энергию. Location service can be switched off, volume can be set to zero or alarms can be switched off again. The blood sugar levels are transferred anyway.

Однако, при запуске следующего сенсора, все параметры должны быть установлены снова!

Remark: The patched app needs the mandatory settings set in that hour after warmup to enable a connection. For the 14 days operation time they are not needed. In most cases when you have problems with starting a sensor the location service was switched off. For Android it is needed for proper bluetooth operation(!) to connect. Please refer to Google's Android documentation.

During the 14 days you can use in parallel one or more NFC capable smartphones (not the reader device!) running the original LibreLink app for scanning via NFC. Для этого действия нет ограничений по времени. You could use a parallel phone for example on day 5 or so. The parallel phones(s) could upload the blood sugar values into the Abbott Cloud (LibreView). LibreView может генерировать отчеты для специалистов. Есть много родителей, которым это необходимо.

Please note that the original patched app **does not have any connection to the internet** to avoid tracking.

However there is a variant of the patched app supporting LibreView with enabled internet access. Please be aware that your data is transferred to the cloud then. But your diadoc tool- and reporting chain is fully supported then. With that variant it is also possible to move the alarms of a running sensor to a different device which not has started the sensor. Please google in diabetes related German forums how this could be done.

## Шаг 2: Установите и настройте приложение xDrip+

Значения гликемии передаются на смартфон приложением xDrip+.

-   If not already set up then download xDrip+ app and install one of the latest nightly builds from [here](https://github.com/NightscoutFoundation/xDrip/releases).
-   In xDrip+ select "Libre2 patched" or "Libre 2 (patched App)" as data source
-   If necessary, enter "BgReading:d,xdrip libre_receiver:v" under Less Common Settings->Extra Logging Settings->Extra tags for logging. Это позволит записывать сообщения об ошибках для устранения неисправностей.
-   В xdrip, перейдите в настройки > настройки интеграции с приложениями > трансляция данных локально и выберите Включить (ON).
-   В xdrip+ перейдите в настройки > интеграция с приложениями > принимать терапию и выберите ВЫКЛ (OFF).
-   to enable AAPS to receive blood sugar levels (version 2.5.x and later) from xDrip+ please set [Settings > Interapp Settings > Identify Receiver "info.nightscout.androidaps"](xdrip-identify-receiver)
-   Если вы хотите, чтобы AAPS мог калибровать показания гликемии, в xdrip + перейдите в настройки > > интеграция с приложениями >> принимать калибровки и выберите ВКЛ (ON). Возможно вы также захотите рассмотреть варианты в настройках >> менее распространенные параметры >> дополнительные параметры калибровки.

![xDrip+ LibreLink logging](../images/Libre2_Tags.png)

## Шаг 3: Запустить сенсор

В xDrip+ запустите датчик с помощью "Start Sensor" и "not today".

In fact this will not physically start any Libre2 sensor or interact with them in any case. This is simply to indicate xDrip+ that a new sensor is delivering blood sugar levels. If available, enter two bloody measured values for the initial calibration. Now the blood glucose values should be displayed in xDrip+ every 5 minutes. Skipped values, e.g. because you were too far away from your phone, will not be backfilled.

After a sensor change xDrip+ will automatically detect the new sensor and will delete all calibration data. You may check you bloody BG after activation and make a new initial calibration.

## Step 4: Configure AAPS (for looping only)

-   In AAPS go to Config Builder > BG Source and check 'xDrip+'
-   If AAPS does not receive BG values when phone is in airplane mode, use 'Identify receiver' as describe on [xDrip+ settings page](xdrip-identify-receiver).

Until now, using Libre 2 as BG source you cannot activate ‘Enable SMB always’ and ‘Enable SMB after carbs’ within SMB algorithm. The BG values of Libre 2 are not smooth enough to use it safely. See [Smoothing blood glucose data](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) for more details.

(Libre2-experiences-and-troubleshooting)=
## Опыт и устранение неполадок

### Связь

The connectivity is extraordinarily good. With the exception of Huawei mobile phones, all current smartphones seem to work well. The reconnect rate in case of connection loss is phenomenal. The connection can break off if the mobile phone is in the pocket opposite the sensor or if you are outdoors. When I am gardening, I use to wear my phone on the sensor side of my body. In rooms, where Bluetooth spreads over reflections, no problems should occur. If you have connectivity problems please test another phone. It may also help to set the sensor with the internal BT antenna pointing down. The slit on the applicator must be pointing down when setting the sensor.

### Value smoothing & raw values

Technically, the current blood sugar value is transmitted to xDrip+ every minute. A weighted average filter calculates a smoothed value over the last 25 minutes. This is mandatory for looping. The curves look smooth and the loop results are great. The raw values on which the alarms are based jitter a little more, but correspond to the values that the reader also displays. In addition, the raw values can be displayed in the xDrip+ graph in order to be able to react in time to rapid changes. Please switch on Less Common Settings \> Advanced Settings for Libre2 \> "show Raw values" and "show Sensors Infos". Then the raw values are additionally displayed as small white dots and additional sensor info is available in the system menu.

The raw values are very helpful when the blood sugar is moving fast. Even if the dots are jumpier you would detect the tendency much better as using the smoothed line to make proper therapy decisions.

![xDrip+ advanced settings Libre 2 & raw values](../images/Libre2_RawValues.png)

### Время работы сенсора

The sensor runtime is fixed to 14 days. The 12 extra hours of Libre1 no longer exist. xDrip+ shows additional sensor information after enabling Advanced Settings for Libre2 \> "show Sensors Infos" in the system menu like the starting time. The remaining sensor time can also be seen in the patched LibreLink app. Either in the main screen as remaining days display or as the sensor start time in the three-point menu->Help->Event log under "New sensor found".

![Libre 2 start time](../images/Libre2_Starttime.png)

### Новый сенсор

A sensor exchange takes place on-the-fly: Set new sensor shortly before activation. As soon as xDrip+ receives no more data from the old sensor, start the new sensor with the patched app. After one hour new values should appear automatically in xDrip+.

If not, please check the phone settings and proceed as with the first start. You have no time limit. Try to find the correct settings. No need to immediately replace the sensor before you tried different combinations. The sensors are robust and try permanently to establish a connection. Please take your time. In most cases you accidentally changed one setting which causes now problems.

Once successful please select "Sensor Stop" and "Delete calibration only" in xDrip. This indicates for xDrip+ that a new sensor is releasing blood sugar levels and the old calibrations are no longer valid and therefore have to be deleted. No real interaction is done with the Libre2 sensor here! You do not need to start the sensor in xDrip+.

![xDrip+ missing data when changing Libre 2 sensor](../images/Libre2_GapNewSensor.png)

### Калибровка

You can calibrate the Libre2 with an offset of -40 mg/dl to +20 mg/dL \[-2,2 mmol/l to +1,1 mmol/l\] (intercept). The slope isn't changeable as the Libre2 is much more accurate compared to the Libe1. Please check by fingerpricking early after setting a new sensor. It is known that there can arise big differences to the blood measurements. To be on the safe side, calibrate every 24 - 48 hours. The values are accurate up to the end of the sensor and do not jitter as with the Libre1. However, if the sensor is completely off, this will not change. The sensor should then be replaced immediately.

### Верификация

The Libre2 sensors contain plausibility checks to detect bad sensor values. As soon as the sensor moves on the arm or is lifted slightly, the values may start to fluctuate. The Libre2 sensor will then shut down for safety reasons. Unfortunately, when scanning with the App, additional checks are made. The app can deactivate the sensor even though the sensor is OK. Currently the internal test is too strict. I have completely stopped scanning and haven't had a failure since then.

### Пересечение часового пояса

In other [time zones](../Usage/Timezone-traveling.md) there are two strategies for looping:

Either

1.  leave the smartphone time unchanged and shift the basal profile (smartphone in flight mode) or
2.  delete the pump history and change the smartphone time to local time.

Method 1. is great as long as you don't have to set a new Libre2 sensor on-site. If in doubt, choose method 2., especially if the trip takes longer. If you set a new sensor, the automatic time zone must be set, so method 1. would be disturbed. Please check before, if you are somewhere else, you can run otherwise fast into problems.

### Опыт

Altogether it is one of the smallest CGM systems on the market. Small, no transmitter necessary and mostly very accurate values without fluctuations. After approx. 12 hours running-in phase with deviations of up to 30 mg/dl (1,7 mmol/l)the deviations are typical smaller than 10 mg/dl (0,6 mmol/l). Best results at the rear orbital arm, other setting points with caution! No need to set a new sensor one day ahead for soaking. That would disturb the internal levelling mechanism.

There seem to be bad sensors from time to time, which are far away from the blood values. It stays that way. These should be immediately replaced.

If the sensor moved a little bit on the skin or is lifted somehow this can cause bad results. The filament which sits in the tissue is a little bit pulled out of the tissue and will measure different results then. Mostly probably you will see jumping values in xDrip+. Or the difference to the bloody values change. Please replace the sensor immediately! The results are inaccurate now.

## Использование трансмиттера блутус and OOP

Bluetooth transmitter can be used with the Libre2 with the latest xDrip+ nightlys and the Libre2 OOP app. You can receive blood sugar readings every 5 minutes as well as with the Libre1. Please refer to the miaomiao website to find a description. This will also work with the Bubble device and in the future with other transmitter devices. The blucon should work but has not been tested yet.

Old Libre1 transmitter devices cannot be used with the Libre2 OOP. They need to be replaced with a newer version or have a firmware upgrade for proper operation. MM1 with newest firmware is unfortunately not working yet - searching for root cause is currently ongoing.

The Libre2 OOP is creating the same BG readings as with the original reader or the LibreLink app via NFC scan. AAPS with Libre2 do a 25 minutes smoothing to avoid certain jumps. OOP generates readings every 5 minutes with the average of the last 5 minutes. Therefore the BG readings are not that smooth but match the original reader device and faster follow the "real" BG readings. If you try to loop with OOP please enable all smoothing settings in xDrip+.

The Droplet transmitter is working with Libre2 also but uses an internet service instead. Please refer to FB or a search engine to get further information. The MM2 with the tomato app also seems to use an internet service. For both devices you have to take care to have a proper internet connection to get your BG readings.

Even if the patched LibreLink app approach is smart there may be some reasons to use a bluetooth transmitter:

-   the BG readings are identical to the reader results
-   the Libre2 sensor can be used 14.5 days as with the Libre1 before
-   8 hours Backfilling is fully supported.
-   get BG readings during the one hour startup time of a new sensor

Remark: The transmitter can be used in parallel to the LibreLink app. It doesn't disturb the patched LibreLink app operation.

Remark #2: The OOP algorithm cannot be calibrated yet. This will be changed in the future.

# Наилучшие методы калибровки Libre 2

To get the best results when calibrating a libre 2 sensor there are some “rules” you should follow. They apply independently of the software combination (e.g. patched libre-app, oop2, …) that is used to handle the libre 2 values.

1.  The most important rule is to only calibrate the sensor when you have a flat bg level for at least 15 minutes. The delta between the last three readings should not exceed 10 mg/dl (over 15min not between each reading). As the libre 2 does not measure your blood glucose level but your flesh glucose level there is some time lag especially when bg level is rising or falling. This time lag can lead to way too large calibration offsets in unfavourable situations even if the bg level rise / fall is not that much. So whenever possible avoid to calibrate on rising or falling edges. -> If you have to add a calibration when you do not have a flat bg level (e.g. when starting a new sensor) it is recommended to remove that calibration(s) as soon as possible and add a new one when in flat bg levels.
2.  Actually this one is automatically taken into account when following rule 1 but to be sure: When doing comparison measurements your bg level should also be flat for about 15min. Do not compare when rising or falling. Important: You still shall do blood glucose measurements whenever you desire, just don’t use the results for calibration when rising or falling!
3.  As calibrating the sensor in flat levels is a very good starting point it is also strongly recommended to calibrate the sensor only within your desired target range like 70 mg/dl to 160 mg/dl. The libre 2 is not optimized to work over a huge range like 50 mg/dl to 350 mg/dl (at least not in a linear manner), so try to only calibrate when within your desired range. -> Simply accept that values outside your calibration range will not perfectly match blood glucose levels.
4.  Do not calibrate too often. Calibrating the sensor very often mostly leads to worse results. When the sensor delivers good results in flat conditions just don’t add any new calibration as it does not have any -useful- effect. It should be sufficient to recheck the status every 3-5 days (of course also in flat conditions).
5.  Avoid calibration when not required. This might sound silly but it is not recommended to add a new calibration if the blood glucose to flesh glucose level difference is only ±10 mg/dl (e.g. blood glucose level: 95, Libre sensor 100 -> do NOT add the 9l, blood glucose level: 95, Libre sensor 115 -> add the 95 to be taken into account for the calibration)

Some general notes: After activating a new sensor and at the sensor’s end of life it does make sense to do comparison measurements more often than 3-5 days as stated in rule nr. 4. For new and old sensors it is more likely that the raw values change and a re-calibration is required. From time to time it happens that a sensor does not provide valid values. Most likely the sensor value is way to low compared to the actual blood glucose level (e.g. sensor: 50 mg/dl, bg: 130 mg/dl) even after calibrating. If this is the case the sensor cannot be calibrated to report useful results. E.g. when using the patched libre app one can add an offset of maximal +20 mg/dl. When it happens to you that the sensor does provides way too low values, don’t hesitate to replace it as it will not get better. Even if it might be a defective sensor, when seeing sensors that do provide way too low values very often, try to use different areas to place your sensor. Even in the official area (upper arm) there might be some locations where the sensors just do not provide valid values. This is some kind of trial end error to find areas that work for you.
