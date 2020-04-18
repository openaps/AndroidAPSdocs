# Jelly Pro

## Преимущества и недостатки

### Преимущества Jelly

* Он действительно маленький.
* Даже если сообщить о его наличии, его могут не посчитать обычным смартфоном, и легче примут как исключение, в тех ситуациях, когда телефоны обычно не разрешаются.

### Недостатки Jelly

* Рекомендуется только для опытных пользователей (некоторые настройки не распознаются, их расположение нужно помнить из опыта работы с большим телефоном с Android AAPS). Некоторые кнопки AAPS трудно нажимать из-за их маленького размера.)
* Может использоваться только как телефон для APS. Лучше иметь обычный смартфон в кармане. 
* Если над ним не трястись, не носить Всегда! с собой, он покажет свой несносный характер, разъединится с помпой пока не перезагрузишь. 

## Оптимизация батареи Jelly Pro

Следующие настройки и рекомендации (использование часов для ежедневных операций вместо смартфона Jelly) ведут к приблизительно 35 часам жизни батареи. Дополнительный режим экономии батарей не является необходимым, скорее контрпродуктивным, поэтому выключаем.

![Jelly smartphone](../images/jelly_01.jpg)

### Первая настройка

<b> <font color="#FF0000"> Важно: </b> </font> Если вам не нужен Android 8.1 (для цикла с Accu-Check Combo) оставайтесь на Android 7.0!

Следуйте этим правилам, чтобы остаться на Andorid 7.0:

* Не подключайтесь к wifi или мобильной сети при первом использовании для предотвращения автоматического обновления.
* Пропустить настройку сети wifi.
* Setting up Google account offline is the only thing that cannot be skipped.
* Go to settings and disable auto update (Settings >System >About the phone >System update >Three-point menu top right >Settings >Automatically check for updates >Once)
* Every time you activate the wifi or mobile network you will be notified that a system update is available. Do not update! It is best to delete the notification so that you do not accidentally update. This would not be so easy to undo. 
* Installed apps can and should be upgraded.

![Jelly settings](../images/jelly_02.jpg)

### Настройки

* Use Jelly only for looping.
* Set up wifi to install xDrip, AAPS and WearOS, otherwise wifi off. 
* Wifi can be enabled for a short time if you want to upload the data to Nightscout.
* Jelly does not need a SIM card, but if you use one make sure to turn off the mobile data. The easiest way is to activate flight mode.
* Also if you do not use a SIM card turn of mobile data.
* Bluetooth must be turned on of course. If the pump is not within range for a longer period of time, the "search" will consume a lot of battery power.
* DURASPEED ON (Settings > Device > Duraspeed on). Whitelist AAPS, WearOS and xDrip+ to run in background. All other apps should not run in background.
* End all other tasks in the background. Settings > Intelligent assistant > Exit tasks in background > Disable all other apps (despite AAPS, WearOS and xDrip+).
* Location services must be on but in power save mode (Settings > User > Location > Mode > Energy Saver Mode).
* Screen brightness set to 0%, sleep 15-30 sec. (Settings > Device > Display).
* The daily operations only via the watch. Other settings and display use only during charging. 
* Jelly, just like the pump, remains untouched under clothing all day long.

## Tips

* The Jelly is a not always intuitive to use and sometimes acts like a baby diva. A restart (button on the right) every now and then might be a good idea.
* In portrait view not all buttons might be displayed. So it is worth turning Jelly by 90 degrees.

![Jelly portrait + landscape view](../images/jelly_04.jpg)

* The headline on the startscreen of the phone can hold up to 6 icons on the right. The clock needs 2 of them. So if 5 are already occupied (i.e. bluetooth, do not disturb, no SIM card, flight mode and the battery indicator), no clock will be displayed. Briefly increase the volume with the button in the upper left corner, then the clock appears in the header. ;-)
* The "alarm clock", which is initially (with factory settings) displayed on the Home screen below the time, is probably a second time zone. Switch this off as AAPS might access wrong timezone (Settings > System > Date&Time > Automatic Time Zone > OFF). Use the time provided by the network instead.
* A screenshot can be taken by pressing the quiet button (bottom left) + the an button (right) simultaneously. 

![Jelly headline](../images/jelly_03.png)