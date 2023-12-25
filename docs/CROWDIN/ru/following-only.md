# Слежение за работой AAPS (без взаимодействия с системой)

Помимо возможностей удаленного управления _и_слежения за работой**AAPS**, которые описаны в разделе [дистанционное управление](docs/EN/remote-control.md), существует еще несколько приложений и устройств, разработанных сообществом пользователей с целью просто следить за цифрами (ГК и другой информацией), не взаимодействуя с AAPS.

Обзор возможностей, доступных для наблюдения работы **AAPS**, можно найти на веб-странице [фоллоуэры Nightscout](https://nightscout.github.io/nightscout/downloaders/#); развернув меню слева:

![изображение](./images/dfa981c1-5a15-4498-88d2-0fd1462d8242.png)

Наиболее распространенные сценарии сочетания работы **AAPS** с наблюдением приведены ниже.

### 1) Приложения на смартфоне

Наиболее популярные приложения для отслеживания работы **AAPS**. Все эти приложения бесплатны:

A) Dexcom Follow (Android/iOs) B) Nightguard (iOs) C) Nightwatch (Android) D) xDrip+ (Android) E) Shuggah (iOs) F) Sugarmate (iOs) G) Spike (iOs)


#### A) Dexcom Follow (совместимо с устройствами на Android и iOs)

![изображение](./images/ded350b0-6012-4104-b21c-5d5bfd91aa65.png)

● Dexcom Follow совместимо со многими телефонами (Android и iPhone). Dexcom Follow можно использовать, даже если вы не используете официальное приложение Dexcom для получения данных.

● Многие родители/опекуны знакомы с Dexcom Follow, предпочитая его четкий интерфейс чему-то более сложному.

● Dexcom Follow очень хорош для учителей/бабушек и дедушек и людей, которые мало знают о диабете и гликемии. Он имеет настраиваемые оповещения (уровень ГК, какой звук воспроизводить и т. д.). Оповещения могут быть полностью выключены, что очень полезно, если сенсор еще прирабатывается и передает много заниженных значений.

##### настройка Dexcom Follow: инструкция

У вас есть возможность отправлять приглашения подписчикам из самостоятельно собранного приложения Dexcom BYODA. Вы также можете отправлять приглашения на Dexcom Follow из Xdrip+ (настройки - загрузка в облако-Dexcom share server upload, смотрите инструкции здесь:

https://xdrip.readthedocs.io/en/latest/use/cloud/?h=#dexcom-share-server-upload

Тем не менее, некоторые пользователи сообщили, что не могут отправлять приглашения подписчикам Dexcom из сторонних приложений. В Xdrip+ запрос на приглашение может только привести к отправке сообщения «Приглашение не отправлено».

Если вам трудно пригласить новых подписчиков Dexcom из этих сторонних приложений, тогда одним из решений является установка официального приложения Dexcom G6, отправка приглашение, а затем удаление официального приложения.

Для этого выполните следующие шаги:

1) Установите официальное приложение «Dexcom G6» на _любой смартфон_ (Android/iPhone), это может быть телефон фоллоуэра, если вам так удобнее. 2) Войдите c именем пользователя и паролем Dexcom, это те же данные, что и для Dexcom Clarity, если вы уже клиент Dexcom/Clarity. Если у вас нет учетной записи Dexcom, можно создать новый логин.   
3) Пролистайте вводные меню. 4) В разделе код сенсора (sensor code) введите "no code". 5) В разделе № трансмиттера (transmitter SN) введите любой валидный код трансмиттера (можно ввести номер истекшего) чтобы не произошло вмешательства в работу текущего; он имеет определенный формат чисел и букв: «NLNNL» и только в определенные комбинации, так что проще всего использовать то, что известно наверняка). 6) Когда приложение попытается найти трансмиттер и сенсор, вы сможете пригласить фоллоуэров: выберите выпадающее меню в левом верхнем углу приложения и добавьте новых подписчиков. Эту процедуру также можно использовать, если один из фоллоуэров сменил телефон и нуждается в свежем приглашении, здесь вы можете удалить его из списка подписчиков и отправить новое приглашение на новый смартфон. 7) На телефоне фоллоуэра установите Dexcom Follow скачав его из App Store (iPhone) или Google Play (Android). Настройте приложение Dexcom Follow и вам будет предложено открыть электронную почту, найти приглашение и стать подписчиком.    
8) Теперь можно удалить официальное приложение Dexcom G6.

Для Dexcom Follow, данные сенсора затем экспортируются с телефона AAPS либо непосредственно из BYODA, или из Xdrip+, в зависимости от того, какое приложение используется.


#### B) Nightguard (только для iOS)

![изображение](./images/f2c7d330-9889-4526-9a5c-bbb012d804ab.png)

Достоинства (как указывают пользователи):

● простой и удобный интерфейс.

● Сдвиньте кнопку или встряхните телефон для прекращения оповещений на период  от 5 минут до 24 часов

● Настройка оповещений (высокая, низкая ГК, пропущенные данные за 15-45 минут.

● Быстрый рост/падение за 2-5 последовательных (вы выбираете) показания. Можно также выбрать значения дельты между двумя данными

● Умный сброс оповещений, если уровни движутся в правильном направлении

● Есть вкладка терапии, которая, позволяет установить новую временную цель на определенный срок, удалить временную цель или ввести углеводы.

Недостатки (по сообщениям пользователей)

● Доступно только для iOS

● Временная цель ТТ показывается как 5 ммол, независимо от того, какой уровень установлен на самом  деле

● Никогда не показывает временную скорость базала, несмотря на то, что есть графа TB

#### C) Nightwatch (только для Android)

![изображение](./images/855c3a74-e612-4a6f-8b63-18d286ea0a3f.png)


● Nightwatch позиционируется как клиент Nightscout и отслеживает уровни глюкозы пользователя на телефоне или планшете.

● Приложение загружается из Google Play и отображает ГК в режиме реального времени.

● Пользователь может быть оповещен настраиваемым сигналами на зашумленные низкие и высокие значения ГК.

● Данные ГК отображаются в ммоль/л или мг/дл.

● Требуется Android 5.0 и выше.

● Имеет темный интерфейс, большие цифры и кнопки для ночного времени.

#### D) xDrip+ (только для Android)

Фоллоуэры могут оповещаться с помощью xDrip+ в режиме подписчика.  [xDrip+](../Configuration/xdrip.md). (в основном значения ГК и **оповещения**)


#### E) Shuggah (iOs only)

Исторически было трудно найти приложение xDrip+ для iOS ( **xDrip4iOS**) для слежения за **AAPS**.

Появилась бесплатная модифицированная версия xDrip+4iOs** известная как **Shuggah**. Она загружается непосредственно из Apple App store на iPhone или планшет.

:::{admonition} Further detail about how to attempt to obtain the original **xDrip4iOS** app
:class: dropdown


 [**xDrip4iOS**](https://xdrip4ios.readthedocs.io/en/latest/?fbclid=IwAR3lmPR2O9lgZW7xLi1GHdH8SeeMRtekmBiZFlEBCrM13BoJph0uezao_gQ) is an Apple version of **xDrip+**, and the [XdripiOs Facebook group](https://www.facebook.com/groups/853994615056838/announcements) is the main community support. **xDrip4iOS** can connect to many different CGM systems and transmitters and display blood glucose values, charts and statistics as well as provide alarms. It can also upload to Nightscout or act as a [follower app for Nightscout](https://xdrip4ios.readthedocs.io/en/latest/connect/follower/). However, it is difficult to actually _get_ the **xDrip4iOS** app for your phone.

"How can I get **xDrip4iOS** on my iPhone?" There are two options:
1. If you have a Mac and an Apple Developer account (99 EUR/USD per year) then you can build your own xDrip4iOS by following the instructions below:

https://xdrip4ios.readthedocs.io/en/latest/install/build/

If you want, you can then become a "releaser" and share a Personal Testflight with up to 100 other people to help them: https://xdrip4ios.readthedocs.io/.../personal_testflight/

2. You join the [XdripiOs Facebook group](https://www.facebook.com/groups/853994615056838/announcements) and monitor the posts… wait for somebody to offer an invitation to their Personal Testflight releases in the group._**You are not permitted to ask for the app**_ (read their group rules).

An easier solution is therefore to download the **Shuggah** app.

:::

#### [Shuggah](https://apps.apple.com/sa/app/shuggah/id1586789452)

App:

![изображение](./images/03fc0c6a-067a-40ea-8be3-c66d4ce8b5d9.png)

![изображение](./images/fae3ec63-2c2c-4152-ab42-97f9744a8f36.png)


"What is Shuggah?" A group of Ukrainian developers took the project code for xDrip4iOS (which is shared publicly on Github) and released it on the App Store under a business account (the app is free, and their intentions are good). The app had to be slightly modified to add a privacy statement and disclaimer to get past the review, but the rest of the app should be the same as xDrip4iOS. The Shuggah release is not officially managed by the xDrip4iOS developers so it cannot be guaranteed that it will function in the same way as xDrip4iOS, or that Apple won't remove it from the App Store at some point.

The [XdripiOs Facebook group](https://www.facebook.com/groups/853994615056838/announcements) supports xDrip4iOS, Shuggah, as well as the Apple Watch app.


#### F) Sugarmate (iOs)

![изображение](./images/340cd555-a9e0-4a20-a131-36c078f5b8ea.png)

![изображение](./images/21b83c41-85c6-4619-a702-a65450768855.png)


[Sugarmate](https://sugarmate.io/) is available to download onto iPhones from the App store. Sugarmate is compatible with: ●   Apple iPhone (Requires software version 13.0 or later) ●   Apple iPad (Requires software version 13.0 or later) ●   Google Android (Save web app to your homescreen)

It has been reported by users of Sugarmate that it can be used with Apple CarPlay in the USA to display glucose readings when driving. It is not yet established if this is possible in countries outside the USA. If you know more about this, please add details in here to the documentation by completing a pull-request (link) which is quick and easy to do.


#### G)  [Spike](https://spike-app.com/) on iOS

![изображение](./images/1129ba00-8159-4940-936e-76fd4ae45a2d.png)

Spike can be used as a primary receiver or as a follower app, providing BG, alarms and IOB and more. Whilst the website is no longer biDetails are [here](https://spike-app.com/#features2). Details and support can be found on [Facebook](https://www.facebook.com/groups/1973791946274873) and Gitter](https://gitter.im/SpikeiOS/Lobby).

To install Spike, see [here](https://spike-app.com/#installation)

### 2) Smartwatches for **Monitoring of AAPS** (full profile data, or glucose-only) where **AAPS** is running on a phone.

Smartwatch options which also allow interaction with **AAPS** are described in the ["remote control"](remote-control.md) section of the documentation.

There are a wide range of affordable smartwatches which can provide display only. If you are using Nightscout, then a good overview of all the options is [here](https://nightscout.github.io/nightscout/wearable/#)

Here we summarise some of the follow-only watch options popular with **AAPS** users:

#### a) **Xiaomi and Amazfit watches**

A developer called Artem has created xDrip integration for various smartwatch models, mostly for Xiaomi (_e.g._ Mi band) and Amazfit brands:

![изображение](./images/4dba454b-f808-4e9e-bfc6-aba698e006f8.png)


You can read more about them, including how to set-up at his website [here](https://bigdigital.home.blog/). The advantage of these watches is that they are small and relatively affordable (the Xiaomi Mi Band 5 has a RRP of £39.99 GBP). They are a popular option especially for kids and those with smaller wrists to wear.

#### b) Pebble watch

![изображение](./images/52032f3b-c871-4342-b8e7-659c285a39c8.png)

![изображение](./images/935d28bb-a909-4ca8-850d-6a765bd4fcde.png)


Pebble watches [now discontinued](https://en.wikipedia.org/wiki/Pebble_(watch))) were on general sale from 2013 - 2016, and may still be available second-hand. Fitbit took over Pebble’s assets. Pebble users can use the Urchin watchface to view Nightscout data. Displayed data options include IOB, currently active temp basal rate and predictions. If open looping you can use IFTTT to create an applet that says if a Notification has been received from **AAPS**  then send either an SMS or pushover notification.

#### c) [Bluejay GTS watch](https://bluejay.website/shop/product/bluejay-gts-26)


![изображение](./images/4d034157-b3d0-4dcb-98c8-fde0c2e7ad74.png)


This is a unique piece of technology which can receive glucose data **directly** from the Dexcom G6 transmitter. It is not widely known that a Dexcom G6 transmitter actually broadcasts the current glucose data on _two_ separate channels, a phone channel and a pump channel. The Bluejay GTS watch runs a modified version of Xdrip+ software, and can be set to receive glucose data on either channel, so if **AAPS **  is using the phone channel, then the Bluejay GTS watch can use the pump channel.

The Bluejay GTS watch is small, waterproof and reasonably affordable (currently £115 GBP) and can be shipped internationally from the UK. The key advantage is that it is currently the only watch which is completely independent of both the phone and the looping system. So, for example, if you disconnect the pump and the **AAPS**  phone at the beach or flume park, and are out of range of the AAPS phone, you can still get readings from the Dexcom G6 directly to the Bluejay watch.

Reported disadvantages are that it doesn’t always pickup a reading every 5 min, and the battery is not replaceable. The Bluejay GTS watch runs a modified version of Xdrip+ software, and it currently doesn’t work with other Dexcom versions (G7) or Libre sensors.

#### d) Apple watch

Check [Nightscout on your watch](https://nightscout.github.io/nightscout/wearable/#):

Options include Nightguard, sugarmate, Gluco-Tracker, nsapple and Loop Follow.


### 3) Devices for following AAPS

Devices include: A)  M5 stack/M5 stickC B)  Sugarpixel C) PC (Teamviewer)

#### A) M5 stack


![изображение](./images/061edb52-56d2-45f4-b3da-82b2036d7bc6.png)




The [M5Stack](https://github.com/mlukasek/M5_NightscoutMon) is a small box which can be programmed for many applications, one of which is displaying sensor glucose values and trends, IOB and COB. It is in a plastic box, equipped with a colour display, micro SD card slot, 3 buttons, speaker and internal battery. It is a great blood sugar monitor and is relatively easy to set-up if you have a Nightscout account. Users typically run it on their home wifi, but some users report using it as a display when motorbiking, by running it off a phone wifi hotspot.

#### B) Sugarpixel

SugarPixel is a device for secondary glucose display alert system for continuous glucose monitoring that connects with Dexcom app or Nightscout app on the user’s smartphone. The device displays real time blood sugar readings. This CGM hardware monitor benefits from random tone generation audio alerts (which are incredibly loud), vibration alerts for hearing impaired, customisable display options and native multi-user following.

![изображение](./images/94044064/39137beb-17cc-4c87-98b7-cf1831d484cb.png)

![изображение](./images/87883ebb-9683-4aa8-8014-49c2ca902c93.png)

●   SugarPixel has multiple display options in mg/dL and mmol/L to suit the user’s needs with colour-coded glucose values. ●   The standard face displays BG, Trend Arrow, and Delta. Delta is the change + or - from the last reading. ●   SugarPixel can be customised for use in low brightness with the BG and Time face to see the user’s BG reading and current time on the user’s nightstand. ●   SugarPixel’s xolour face utilises the entire display to show a single colour representing the BG value. This enables the user to see BG readings at a distance through the window while outside playing in the backyard, patio, or pool. ●   The Big BG face is useful for nightstand users who wear glasses or contact lenses.


#### C) PC(Teamviwer)
Some users find a full remote access tool like [TeamViewer](https://www.teamviewer.com/) to be helpful for advanced remote troubleshooting.


 





