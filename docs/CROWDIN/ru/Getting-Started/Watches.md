# Смарт-часы и AAPS

Разные смарт-часы можно использовать, чтобы показывать часть информации из **AAPS** или выполнять удаленные действия.

Чтобы смарт-часы напрямую управляли **AAPS** (помпой и сенсором), нужны полноценные часы на Android (их можно считать маленькими [смартфонами](./Phones.md)).

Некоторые смарт-часы позволяют вводить терапию и не только, но **AAPS** при этом по-прежнему управляет сам телефон.

Смарт-часы все чаще используются с **AAPS** _и_ для взрослых с диабетом и опекунов/родителей детей с диабетом.

## Преимущества смарт-часов в связке с **AAPS**


Смарт-часы - в зависимости от модели - могут найти различное применение с **AAPS**. С их помощью можно полностью или частично контролировать работу **AAPS**, а также проверять уровни гликемии, количество активного инсулина и другие параметры.

Интеграция смарт-часов с **AAPS** может быть полезна во многих ситуациях, включая вождение автомобиля, мотоцикла, велосипеда, во время занятий спортом и т. п. Some people feel that looking at a watch (in a meeting, party, dinner table etc.) is more discreet than looking at a phone. From a security perspective, a smartwatch can also be beneficial while on the move, enabling the user to keep their **AAPS** phone stored out of sight (like inside a bag), while still using the smartwatch for remote control.

## Конкретные преимущества **AAPS** для родителей/опекунов

For a child - if their **AAPS** phone is nearby - a caregiver can use a smartwatch to monitor or make modifications without needing to use the **AAPS** phone. Это может пригодиться, например, если телефон **AAPS** скрыт в поясе для помпы.

Смарт-часы можно использовать _вместе_ с вариантами на основе ТЕЛЕФОНА для удаленного управления или _вместо_ них, а также для слежения (см. [Слежение за работой AAPS (без взаимодействия с системой)](../RemoteFeatures/FollowingOnly.md)).

Кроме того, в отличие от телефонов фолловеров у родителей или опекунов (которым нужна мобильная сеть или Wi-Fi), смарт-часы, подключенные по Bluetooth, могут быть полезны в удаленных местах: в пещере, в лодке или на полпути к вершине горы. If both devices (**AAPS** phone and smartwatch) are on the same Wi-Fi network, they can also use Wi-Fi.

## Различные типы взаимодействия смарт-часов и AAPS

В настоящее время существует пять основных способов использования смарт-часов в связке с **AAPS**. Эти данные приводятся ниже в таблице: 

| Настройка часов             | Функции                                        | Что потребуется:                                                                                                                                                                                                                                                                                                    |
| --------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Автономно                   | AAPS без телефона                              | Полноценные смарт-часы на Android (проверьте минимальную версию Android)</br> с **app-fullRelease**                                                                                                                                                                                                                 |
| Полное удаленное управление | Большинство функций AAPS                       | Часы на Android **Wear OS** (проверьте версию Android/API)</br>с **wear-fullRelease**                                                                                                                                                                                                                               |
| Удаленное управление        | Функции AAPSClient                             | Часы на Android **Wear OS** (проверьте версию Android/API)</br>с **[wear-aapsclientRelease](https://github.com/nightscout/AndroidAPS/releases)**                                                                                                                                                                    |
| Удаленное управление        | Часть функций AAPSClient                       | Garmin watches</br>(older Samsung Tizen and Fitbit setups only, not recommended)</br>See below.                                                                                                                                                                                                                     |
| Только отображение          | Glucose, trend, IOB, COB, loop and pump status | Many smartwatches, through a companion app on the **AAPS** phone fed by the [External Companion Apps](#watches-external-companion-apps) broadcast: [WatchDrip+](https://bigdigital.home.blog/) (Xiaomi, Amazfit), [GlucoDataHandler](https://github.com/pachi81/GlucoDataHandler) (Wear OS), G-Watch</br>See below. |

## Перед тем как купить смарт-часы…

Модель, которую вы покупаете, зависит от желаемых функций. You may find useful information on the [Phones page](#Phones-list-of-tested-phones), including a list of tested phones that also contains some smartwatches.

Popular watch brands include Samsung Galaxy, Garmin, Fossil and Mi band. Разные варианты из таблицы выше подробнее описаны ниже, чтобы помочь вам решить, какие смарт-часы подходят для вашей ситуации.

Если вы интегрируете смарт-часы с телефоном **AAPS** чтобы удаленно взаимодействовать с **AAPS**, нужно учитывать, совместимы ли оба устройства друг с другом, особенно если у вас устаревший или необычный телефон.

В общем, если вы хотите только следить за гликемией и не взаимодействовать с **AAPS**, то имеется большой выбор доступных и простых смарт-часов.

Лучший способ выбрать смарт-часы – поискать посты о часах («watch») в группах **AAPS** в Discord или Facebook. Have a read of others' experiences, and post any specific questions if your query isn't answered by older posts.

## Полноценные часы на Android

Похоже на привлекательный вариант? However, at present, only a few enthusiasts are experimenting with **AAPS** on a stand-alone watch. There are a limited number of smartwatches with a reasonable interface which also work well with standalone use of **AAPS** and your CGM app. Popular models include the LEMFO LEM 15 Pro and 16. На них потребуется установить "полноценное" приложение **AAPS** (которое обычно устанавливается на телефон), а не приложение  **AAPS** "wear".

Пока нет четкой спецификации, которая поможет узнать, будут ли часы самостоятельно работать с **AAPS**, но ориентиром будут следующие параметры:

1)  Android 12 or newer. 2) Возможность выключать "квадратный" режим для увеличения и упрощения чтения текста. 3) Очень хороший срок службы батареи. 4) Хороший радиус действия Bluetooth.

Большинство разочарований от автономных часов с **AAPS** происходит от взаимодействия с крошечным экраном, и то, что текущий полный интерфейс AAPS не был разработан для часов. You may prefer to use a stylus to edit **AAPS** settings on the watch, due to the restricted screen size, and some AAPS buttons may not be visible on the watch screen.

Дополнительные проблемы заключаются в том, что трудно получить хороший срок службы батареи, а часы с хорошей батареей часто громоздкие и толстые. Пользователи сообщают о борьбе с операционной системой и настройками энергосбережения, о трудностях с запуском сенсоров на часах, о малом радиусе действия Bluetooth (для поддержания связи и с сенсором, и с помпой) и о сомнительной водонепроницаемости. Примеры показаны на фото ниже.

![изображение](../images/watches/watch_standalone_aaps_and_xdrip.png)

If you are interested in setting up a standalone watch, read the posts and comments on the **AAPS** Facebook group (good search options are “standalone” and “Lemfo”) and Discord for more information.

## Wear OS

Код **AAPS** содержит дополнительное приложение, которое можно установить на [смарт-часы с **Wear OS**](https://wearos.google.com/#oem-carousel).

![Configuration > Communication with Wear enabled](../images/v4/Configuration/configuration_communication_wear.png)

Убедитесь, что ваши смарт-часы соответствуют [требованиям](#maintenance-android-version-aaps-version) **AAPS**.

### Что _такое_ Wear OS?

Первые три варианта требуют, чтобы на смарт-часах была установлена операционная система **Wear OS**.

**Wear OS** - это операционная система некоторых современных смарт-часов Android. Если в описании смарт-часов указывается только _совместимость_ с Android и iOS - это не означает, что они работают под управлением Wear OS. Это может быть какая-то другая специальная операционная система, не совместимая с **AAPS**. To support installation and use of any version of **AAPS** or **AAPSClient**, a smartwatch must be running **Wear OS 3.0, 3.2 or 3.5** (Android 11, API level 30) **or newer**. Each Wear OS release follows the Android version it is based on: **Wear OS 3** is Android 11 (API level 30), **Wear OS 4** is Android 13 (API level 33), **Wear OS 5** is Android 14 (API level 34) and **Wear OS 6** is Android 16 (API level 36). Watches on Wear OS 2 cannot run **AAPS**.

Если вы установите **AAPS** wear.apk на часы с **Wear OS**, можно выбрать один из разных циферблатов **AAPS**. Также можно использовать стандартный циферблат часов, на котором информация **AAPS** показана в маленьких плитках, которые называются «дополнения». Дополнение – это любой элемент, который показан на циферблате кроме времени.

```{note}
Recent **Wear OS** changes progressively break the custom **AAPS** watchfaces (the higher the Wear OS version, the more severe), although **complications** keep working. Before buying or updating a watch, read [Wear OS watch face changes](#wearos-watchface-changes).
```


### Как могут выглядеть мои смарт-часы?

После [установки **AAPS** на часы](../WearOS/WearOsSmartwatch.md) вы сразу сможете выбрать нужный циферблат из этих циферблатов **AAPS**. На большинстве часов нужно просто долго нажать на главный экран, пока он не уменьшится, и провести пальцем вправо, чтобы выбрать другой экран:

![изображение](../images/watches/watchfaces_aaps_selection.png)

Это основные экраны, встроенные в **AAPS**; есть и [другие циферблаты](#WearOS_changing-to-AAPS-watchface), а также можно использовать [дополнения](#Watchfaces-complications).

### Как пользоваться часами Wear OS каждый день?

Подробнее о циферблатах и ежедневном использовании, а также о том, как создать собственный циферблат (и поделиться им), читайте в разделе [Настройка AAPS на часах Wear OS](../WearOS/WearOsSmartwatch.md).

(Watchfaces-tizen)= (watches-external-companion-apps)=

## External Companion Apps

**AAPS** can broadcast its status to other apps installed on the same phone: glucose and trend, IOB, COB, basal and temp basal, profile name, loop status, phone and pump battery, reservoir level and bolus progress. Several watch companion apps read this broadcast and display the data on watches that **AAPS** does not support directly. To send the data, enable **External Companion Apps** in **Configuration** > **Communication** (see [External Companion Apps](#external-companion-apps) on the Configuration page). The broadcast is sent with each new reading and cannot be requested: a refresh button in the companion app has no effect on **AAPS**.

![Configuration > Communication: the External Companion Apps card](../images/v4/Configuration/configuration_external_companion_apps.png)

Companion apps known to use this broadcast:

- [WatchDrip+](https://bigdigital.home.blog/) for Xiaomi and Amazfit watches, see [Xiaomi and Amazfit watches](#watches-xiaomi-amazfit) below.
- [GlucoDataHandler](https://github.com/pachi81/GlucoDataHandler) for Wear OS watches, as a complication or a widget. It is a useful fallback on Wear OS versions where the **AAPS** watchfaces are unreliable, see [Set up AAPS on your Wear OS watch](../WearOS/WearOsSmartwatch.md). Its companion app GlucoDataAuto shows the same data in a car with Android Auto.
- [G-Watch app](https://play.google.com/store/apps/details?id=sk.trupici.g_watch) for Samsung Tizen watches, and its later Wear OS port. In earlier **AAPS** versions the plugin was named **Samsung Tizen** after this app.

```{warning}
The **G-Watch app** and its **Wear OS** port are no longer maintained, and Samsung has moved its smartwatches from Tizen to Wear OS. G-Watch is only relevant for existing, older setups and is not recommended for a new installation. Check the dedicated [Facebook group](https://www.facebook.com/groups/gwatchapp) for the latest news.
```

(Watchfaces-garmin)=

## Garmin

There are some watch faces for Garmin that integrate with [AAPS](https://apps.garmin.com/search?keywords=androidaps), on the Garmin ConnectIQ store.

![Configuration > Communication: the Garmin card](../images/v4/Configuration/configuration_garmin.png)

[AAPS Glucose Watch](https://apps.garmin.com/apps/3d163641-8b13-456e-84c3-470ecd781fb1) работает напрямую с **AAPS**. Он показывает данные о состоянии цикла (активный инсулин, временный базал) вместе с показаниями ГК и отправляет в **AAPS** данные о пульсе. It is available in the ConnectIQ store; enable the **Garmin** plugin in **Configuration → Communication**. ![AAPS Glucose Watch watchface with numbered fields](../images/watches/Garmin_WF-annotated.png)

1. Highest and lowest glucose values on the graph
2. Glucose change per minute
3. Insulin on board (IOB)
4. Time since the last glucose reading (minutes:seconds)
5. Temporary basal rate, as a percentage of the profile basal rate
6. Glucose graph of the last 2 hours
7. Текущее значение глюкозы



## Fitbit

```{warning}
Google is moving Fitbit into Google Health and is removing third-party apps and watch faces from Fitbit watches in the EU. Fitbit watchfaces are therefore **no longer a recommended option**, and buying a Fitbit for use with **AAPS** is not recommended.
```

For existing Fitbit watches, the [Nightscout webpages](https://nightscout.github.io/nightscout/wearable/#fitbit) list some monitoring-only options, such as [Glance](https://glancewatchface.com/). These are third-party watchfaces too, so the same EU restriction applies.

## Только слежение

Эти смарт-часы показывают часть информации **AAPS**, для некоторых нужны другие приложения.

Существует множество доступных смарт-часов, которые дают только отображение ГК. Если вы пользуетесь сайтом Nightscout, то хороший обзор вариантов дан [здесь](https://nightscout.github.io/nightscout/wearable/#)

Ниже некоторые варианты часов только для слежения, популярные у пользователей **AAPS**:

(watches-xiaomi-amazfit)=
### Часы Xiaomi и Amazfit

**WatchDrip+** is a community-developed companion app that displays glucose and loop data on various smartwatch models, mostly Xiaomi (_e.g._ Mi Band) and Amazfit brands:

![изображение](../images/watches/watch_watchdrip_plus.png)

Since version 0.5, **WatchDrip+** reads its data directly from **AAPS**, without xDrip+ as a relay. On the **AAPS** phone:

1. Enable **External Companion Apps** in **Configuration** > **Communication**, see [above](#watches-external-companion-apps). It provides the current glucose, delta, trend arrow, IOB and pump status.
2. Enable the **xDrip** plugin in **Configuration** > **Communication** and turn on **Send status to xDrip+** in its settings. It provides the IOB/COB status line, and the glucose graph on the watch fills in after a few readings.
3. If xDrip+ is installed on the phone, disable its **Broadcast Service API** (xDrip+ > Settings > Inter-app settings) so that the watch does not receive the data twice. If xDrip+ was only relaying data to the watch, you can uninstall it.

The refresh button of WatchDrip+ has no effect with **AAPS**: the data arrives with each new reading.


You can read more about them, including how to set them up, on the [WatchDrip+ website](https://bigdigital.home.blog/). Преимущество этих часов в том, что они маленькие и относительно недорогие. Они особенно популярны как часы для детей и людей с небольшими запястьями.

### Часы Pebble

![изображение](../images/watches/watch_pebble.png)

![изображение](../images/watches/watch_pebble_watchface.png)


Часы Pebble ([сейчас сняты с производства](https://en.wikipedia.org/wiki/Pebble_(watch))) продавались с 2013 по 2016 год, и их еще можно найти б/у. Активы Pebble перешли к Fitbit. Пользователи Pebble могут пользоваться циферблатом Urchin для просмотра данных Nightscout. Отображаемые данные включают активный инсулин IOB, действующий временный базал и прогнозирование. If open looping you can use IFTTT to create an applet that says if a Notification has been received from **AAPS** then send either an SMS or pushover notification.

### [Часы Bluejay](https://bluejay.website/)


![BlueJay U3 watch](../images/watches/bluejay_u3.png)


Это уникальные устройства, которые могут получать данные ГК **напрямую** от трансмиттера Dexcom. It is not widely known that Dexcom G6/G7 transmitters actually broadcast the current glucose data on _two_ separate channels, a phone channel and a medical channel. The Bluejay watches can be set to receive glucose data on either channel, so if **AAPS** is using the phone channel, then the Bluejay watches can use the medical channel.

The key advantage is that the watch is independent of both the phone and the looping system. Например, если вы отключили помпу и оставили телефон **AAPS** на пляже или в парке развлечений и находитесь вне зоны действия телефона **AAPS**, вы все равно можете получать показания Dexcom прямо на часы Bluejay.

The original **Bluejay GTS** is discontinued and cannot read the Dexcom G7. The later models (U1, then the current **U3**, sold as early access at the time of writing) are full Android watches running xDrip, which collect from the Dexcom G6 and G7 directly. The vendor describes the watch as a research tool, not for medical use. Reported disadvantages are that it does not always pick up a reading every 5 minutes and that the battery needs frequent charging. Check the [Bluejay website](https://bluejay.website/) for the current model and availability.

### Apple Watch

См. [Nightscout на ваших часах](https://nightscout.github.io/nightscout/wearable/#).

Apple Watch теперь поддерживает прямое подключение к G7 и может использоваться одновременно с **AAPS**.

