# Smartwatches and AAPS

Various smartwatches can be used to display some of the information available in **AAPS** or perform remote actions.

Having a smartwatch directly control **AAPS** (pump and sensor) is achieved using full Android watches (that are considered like small [smartphones](./Phones.md)).

Some smartwatches can allow you to enter treatments, or more, but with the phone itself still managing **AAPS**.

Смарт-часы все чаще используются с **AAPS** _и_ для взрослых с диабетом и опекунов/родителей детей с диабетом.

## Преимущества смарт-часов в связке с **AAPS**


Смарт-часы - в зависимости от модели - могут найти различное применение с **AAPS**. С их помощью можно полностью или частично контролировать работу **AAPS**, а также проверять уровни гликемии, количество активного инсулина и другие параметры.

Интеграция смартфонов с **AAPS** может быть полезна во многих ситуациях, включая вождение автомобиля, мотоцикла, велосипеда, во время занятий спортом и т. п. Some people feel that looking at a watch (in a meeting, party, dinner table etc.) is more discrete than looking on a phone. С точки зрения безопасности, смарт-часы также удобнее в пути, и позволяют пользователю не держать телефон с **AAPS** на виду (а, например, в сумке), и управлять системой дистанционно.

## Конкретные преимущества **AAPS** для родителей/опекунов

Для ребенка - если телефон **AAPS**  находится поблизости - опекун может использовать смарт-часы для мониторинга или внесения модификаций не прибегая к помощи телефона **AAPS**. Это может пригодиться, например, если телефон **AAPS** скрыт в поясе для помпы.

A smartwatch can be used either _in addition_ to, or as an _alternative_ to the PHONE-based options for remote control or [following only](../RemoteFeatures/FollowingOnly.md).

Additionally, unlike parent/caregiver follower phones (which rely on the mobile network or Wi-Fi connection), Bluetooth connected smartwatches can be useful in remote locations, like a cave, in a boat, or half-way up a mountain. Если оба устройства ( телефон**AAPS** и смарт-часы) находятся в одной и той же сети Wi-Fi, они также могут использовать wifi.

## Различные типы взаимодействия смарт-часов и AAPS

В настоящее время существует пять основных способов использования смарт-часов в связке с **AAPS**. Эти данные приводятся ниже в таблице: 

| Watch Setup         | Features                            | Что потребуется:                                                                                                                                                                                                                                      |
| ------------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Standalone          | AAPS without a phone                | Full Android smartwatch (check min Android)</br> Running **app-fullRelease**                                                                                                                                                                          |
| Full remote control | Most AAPS functions                 | Android **Wear OS** watch (check Android/API)</br>Running **wear-fullRelease**                                                                                                                                                                        |
| Remote control      | AAPSClient functions                | Android **Wear OS** watch (check Android/API)</br>Running **[wear-aapsclientRelease](https://github.com/nightscout/AndroidAPS/releases)**                                                                                                             |
| Remote control      | Some AAPSClient functions           | Some Samsung, Fitbit and Garmin watches</br>See below.                                                                                                                                                                                                |
| Display             | Display some AAPSClient indications | Many smartwatches (see [here](https://bigdigital.home.blog/))</br>[xDrip+](https://github.com/nightscoutfoundation/xdrip/releases) and [WatchDrip+](https://bigdigital.home.blog/2022/06/16/watchdrip-a-new-application-for-xdrip-watch-integration/) |

## Перед тем как купить смарт-часы…

Модель, которую вы покупаете, зависит от желаемых функций. You may find useful information on the [Phones page](#Phones-list-of-tested-phones), including a list a tested phones that also contains some smartwatches.

Популярные марки смарт-часов -- Samsung Galaxy, Garmin, Fossil, Mi band и Fitbit. The different options summarized in the Table above are explained in more detail below, to help you decide which smartwatch is right for your situation.

Если вы интегрируете смарт-часы с телефоном **AAPS** чтобы удаленно взаимодействовать с **AAPS**, нужно учитывать, совместимы ли оба устройства друг с другом, особенно если у вас устаревший или необычный телефон.

В общем, если вы хотите только следить за гликемией и не взаимодействовать с **AAPS**, то имеется большой выбор доступных и простых смарт-часов.

The best way to choose a smartwatch is to search for "watch" posts on either Discord or Facebook **AAPS** groups. Have a read of others experiences, and post any specific questions, if your query isn't answered by older posts.

## Full Android

Похоже на привлекательный вариант? Однако в настоящее время лишь несколько энтузиастов экспериментируют с **AAPS**  на отдельных часах. Есть не так много смарт-часов с удобным интерфейсом, которые также способны работать с **AAPS** и приложением мониторинга. Popular models include the LEMFO LEM. На них потребуется установить "полноценное" приложение **AAPS** (которое обычно устанавливается на телефон), а не приложение  **AAPS** "wear".

Пока нет четкой спецификации, которая поможет узнать, будут ли часы самостоятельно работать с **AAPS**, но ориентиром будут следующие параметры:

1)  Android 11 or newer. 2) Возможность выключать "квадратный" режим для увеличения и упрощения чтения текста. 3) Очень хороший срок службы батареи. 4)  Good Bluetooth range.

Большинство разочарований от автономных часов с **AAPS** происходит от взаимодействия с крошечным экраном, и то, что текущий полный интерфейс AAPS не был разработан для часов. Из-за величины экрана возможно понадобится стилус для редактирования настроек **AAPS**  на часах, а некоторые кнопки AAPS могут не отображаться на экране просмотра.

Дополнительные проблемы заключаются в том, что трудно получить хороший срок службы батареи, а часы с хорошей батареей часто громоздкие и толстые. Users report fighting with the OS and power-saving settings, difficulty in starting sensors on the watch, poor Bluetooth range (for maintaining connection with both the sensor and pump) and questionable water resistance. Examples are shown in the photos below.

![изображение](../images/6d787373-bc0c-404d-89aa-54d3127c4a6f.png)

Если вы хотите автономно пользоваться смарт-часами, прочтите сообщения и комментарии в группе **AAPS**  на Facebook (ищите по "standalone" (автономные) и "Lemfo") и на Discord для дополнительной информации.

## Wear OS

**AAPS** code contains an app extension that can be installed on [**Wear OS** smartwatches](https://wearos.google.com/#oem-carousel).

![Wear OS](../images/WearOS.png)

Verify your smartwatch satisfies **AAPS** [prerequisites](#maintenance-android-version-aaps-version).

### What _is_ Wear OS?

Первые три варианта требуют наличия операционной системы **Wear OS**. на смарт-часах.

**Wear OS** - это операционная система некоторых современных смарт-часов Android. Если в описании смарт-часов указывается только _совместимость_ с Android и iOS - это не означает, что они работают под управлением Wear OS. Это может быть какая-то другая специальная операционная система, не совместимая с **AAPS**. To support installation and use of any version of **AAPS** or **AAPSClient**, a smartwatch will need to be running **Wear OS**, and be Android 11 or newer. As a guide, as of October 2024, the latest release of **Wear OS** is version 5.0 (based on Android 13).

If you install **AAPS** wear.apk on a **Wear OS** watch, there are a range of different custom **AAPS** watchfaces which can be selected. Кроме того, вы можете использовать стандартный циферблат с информацией **AAPS** которая отображается на маленьких плитках, известных как "усложнения". A complication is any feature that is displayed on a watchface in addition to the time.


### What could my smartwatch look like?

After [installing **AAPS** onto your watch](../WearOS/WearOsSmartwatch.md), you will automatically be able to select your preferred watchface from these **AAPS**-dedicated watchfaces. On most watches, you simply long-press on the home screen until the screen shrinks and swipe right to select an alternative screen:

![изображение](../images/67fd75f3-721c-438d-be01-1a8e03532290.png)

These are the basic screens embedded in **AAPS**, there are [more watchfaces](#WearOS_changing-to-AAPS-watchface) and you can also use [complications](#Watchfaces-complications).

### How would I operate a Wear OS watch from day-to-day?

Further details about the watchfaces, and day-to-day use, including how to make (and share) your own customized watchface, can be found in the section [Operation of Wear AAPS on a Smartwatch](../WearOS/WearOsSmartwatch.md).

(Watchfaces-tizen)=

## Samsung Tizen

**AAPS** supports sending data to the [G-Watch app](https://play.google.com/store/apps/details?id=sk.trupici.g_watch).

Please check the dedicated [Facebook group](https://www.facebook.com/groups/gwatchapp) for latest news.

![G-Watch](../images/G-Watch.png)

(Watchfaces-garmin)=

## Garmin

There are a some watch faces for Garmin that integrate with [AAPS](https://apps.garmin.com/search?keywords=androidaps), on the Garmin ConnectIQ store.

![Garmin](../images/Garmin.png)

[AAPS Glucose Watch](https://apps.garmin.com/apps/3d163641-8b13-456e-84c3-470ecd781fb1) integrates directly with **AAPS**. It shows loop status data (insulin on board, temporary basal) in addition to glucose readings and sends heart rate readings to **AAPS**. It is available in the ConnectIQ store, the necessary **AAPS** plugin is only available from **AAPS** 3.2. ![Screenshot](../images/Garmin_WF-annotated.png)



## Fitbit

```{Warning}
Google is phasing out Fitbit products. Custom watchfaces are not available in Europe anymore (you need to use a VPN). Purchasing a Fitbit now is not recommended.
```

**AAPS** supports sending data to the [Sentinel](http://ryanwchen.com/sentinel.html) watchface.

![изображение](../images/98620770-2fb3-47af-a13e-28af7db69096.png)



**"Sentinel"**(дозор)-циферблат, разработанный [Ryan Chen](http://ryanwchen.com/sentinel.html) для членов семьи и бесплатно выложенный для смарт-часов Fitbit: Sense1/2, Versa 2/3/4. fitBit Luxe не совместим с FitBit Luxe, так как это только фитнес-трек. Sentinel можно загрузить с мобильных приложений для [FitBit](https://gallery.fitbit.com/details/5f75448f-413d-4ece-a53d-b969c6afea7c).

Он позволяет контролировать гликемию 1,2 или 3 человек, используя либо Dexcom Share, либо Nightscout или сочетание двух источников данных.

Также можно использовать xDrip+ или SpikeApp, в локальном режиме веб-сервера. Пользователи могут установить свои сигналы оповещений и отправлять события, используя функциональность портала терапии Nightscout непосредственно с часов для отслеживания инсулина на борту (IOB), активные углеводы(COB), вводить информацию о питании (количество углеводов и болюсов) и проверить ГК.

Все они появятся в графике Nightscout и в обновленных значениях полей активного инсулина IOB и углеводов COB. Поддержку пользователей можно найти в группе [Facebook, Sentinel.](https://www.facebook.com/groups/3185325128159614)

Есть дополнительные опции для часов FitBit, которые, как представляется, предназначены только для мониторинга. Сюда входит [Glance](https://glancewatchface.com/). Эти дополнительные опции описаны на веб-страницах [Nightscout](https://nightscout.github.io/nightscout/wearable/#fitbit)

## Following only

These smartwatches will reflect some **AAPS** information, some will require other apps.

Существует множество доступных смарт-часов, которые дают только отображение ГК. Если вы пользуетесь сайтом Nightscout, то хороший обзор вариантов дан [здесь](https://nightscout.github.io/nightscout/wearable/#)

Here below some of the follow-only watch options popular with **AAPS** users:

### **Xiaomi and Amazfit watches**

[Artem](https://github.com/bigdigital) has created an xDrip+ integration app WatchDrip+ for various smartwatch models, mostly for Xiaomi (_e.g._ Mi band) and Amazfit brands:

![изображение](../images/4dba454b-f808-4e9e-bfc6-aba698e006f8.png)


You can read more about them, including how to set up at his website [here](https://bigdigital.home.blog/). The advantage of these watches is that they are small and relatively affordable. Они особенно популярны как часы для детей и людей с небольшими запястьями.

### Pebble watch

![изображение](../images/52032f3b-c871-4342-b8e7-659c285a39c8.png)

![изображение](../images/935d28bb-a909-4ca8-850d-6a765bd4fcde.png)


Pebble watches ([now discontinued](https://en.wikipedia.org/wiki/Pebble_(watch))) were on general sale from 2013 to 2016, and may still be available second-hand. Активы Pebble перешли к Fitbit. Пользователи Pebble могут пользоваться циферблатом Urchin для просмотра данных Nightscout. Отображаемые данные включают активный инсулин IOB, действующий временный базал и прогнозирование. В случае открытого цикла вы можете использовать алгоритм IFTTT для создания апплета, который сообщает об уведомлениях от **AAPS**, вслед за чем можно отправить либо SMS, либо push-уведомление.

### [Bluejay watches](https://bluejay.website/)


![изображение](../images/4d034157-b3d0-4dcb-98c8-fde0c2e7ad74.png)


These are unique pieces of technology which can receive glucose data **directly** from the Dexcom transmitter. It is not widely known that Dexcom G6/G7 transmitters actually broadcasts the current glucose data on _two_ separate channels, a phone channel and a medical channel. The Bluejay watches can be set to receive glucose data on either channel, so if **AAPS ** is using the phone channel, then the Bluejay watches can use the medical channel.

Главное их преимущество заключается в том, что часы полностью независимы как от телефона, так и от системы ИПЖ. So, for example, if you disconnect the pump and the **AAPS** phone at the beach or theme park, and are out of range of the **AAPS** phone, you can still get readings from your Dexcom directly to the Bluejay watch.

Reported disadvantages are that it doesn’t always pick up a reading every 5 min, and the battery is not replaceable. The Bluejay GTS watch runs a modified version of xDrip+ software whilst the Bluejay U1 runs full xDrip+.

### Apple watch

Check [Nightscout on your watch](https://nightscout.github.io/nightscout/wearable/#).

The Apple watch now supports G7 direct connection and can be used simultaneously with **AAPS**.

