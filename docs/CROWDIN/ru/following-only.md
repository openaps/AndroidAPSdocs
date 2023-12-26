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

:::{admonition} Информация о том, как получить оригинальное приложение **xDrip4iOS** 
:class: dropdown


 [**xDrip4iOS**](https://xdrip4ios.readthedocs.io/en/latest/?fbclid=IwAR3lmPR2O9lgZW7xLi1GHdH8SeeMRtekmBiZFlEBCrM13BoJph0uezao_gQ) — версия **xDrip+** для Apple, поддержка в группе [XdripiOS Facebook](https://www.facebook.com/groups/853994615056838/announcements). **xDrip4iOS** может подключаться к различным системам CGM и трансмиттерам и отображать значения ГК, графики и статистику, а также подавать звуковые оповещения. Оно также может загружать данные в Nightscout или выполнять роль [фоллоуэра для Nightscout](https://xdrip4ios.readthedocs.io/en/latest/connect/follower/). Однако, _получить_ приложение **xDrip4iOS** довольно трудно.

"Как получить **xDrip4iOS** на iPhone?" Есть два варианта:
1. Если у вас есть учетная запись разработчика Mac и Apple (99 EUR/USD в год), то можно создать свой собственный xDrip4iOS по инструкциям ниже:

https://xdrip4ios.readthedocs.io/ru/latest/install/build/

If you want, you can then become a "releaser" and share a Personal Testflight with up to 100 other people to help them: https://xdrip4ios.readthedocs.io/.../personal_testflight/

2. Присоединившись к группе [Xdrip4iOS Facebook](https://www.facebook.com/groups/853994615056838/announcements) наблюдайте за записями… в ожидании личного приглашения к выпускам в группе._**Вам не разрешается запрашивать приложение**_ (прочтите их групповые правила).

Таким образом, легче загрузить приложение **Shuggah**.

:::

#### [Shuggah](https://apps.apple.com/sa/app/shuggah/id1586789452)

App:

![изображение](./images/03fc0c6a-067a-40ea-8be3-c66d4ce8b5d9.png)

![изображение](./images/fae3ec63-2c2c-4152-ab42-97f9744a8f36.png)


"Что такое Shuggah?" Группа украинских разработчиков взяла код проекта xDrip4iOS (он опубликован на Github) и выпустила его в App Store под бизнес-учетной записью (приложение бесплатное, группа не имеет плохих намерений). Приложение было немного изменено, добавлено заявление о конфиденциальности и отказ от ответственности, но в остальном приложение такое же, как xDrip4iOS. Shuggah официально не контролируется разработчиками xDrip4iOS, поэтому нельзя гарантировать, что приложение будет работать так же, как и xDrip4iOS, или что Apple когда-нибудь не удалит его из App Store.

[Группа Facebook xDrip4iOS](https://www.facebook.com/groups/853994615056838/announcements) поддерживает xDrip4iOS, Shuggah, а также приложение Apple Watch.


#### f) Sugarmate (iOS)

![изображение](./images/340cd555-a9e0-4a20-a131-36c078f5b8ea.png)

![изображение](./images/21b83c41-85c6-4619-a702-a65450768855.png)


[Sugarmate](https://sugarmate.io/) можно закачать из App Store. Sugarmate совместим с: ● Apple iPhone (Требуется программное обеспечение версии 13. или позднее) ● Apple iPad (Требуется программное обеспечение версии 13. или позднее) ● Google Android (Сохраните веб-приложение на домашнем экране)

Пользователи Sugarmate сообщают что приложение совместимо с Apple CarPlay в США для отображения данных гликемии во время вождения. Пока еще не установлено, возможно ли это в странах за пределами США. Если вы знаете больше об этом, добавьте подробности в документацию, заполнив запрос на слияние который быстро и легко сделать.


#### G)  [Spike](https://spike-app.com/) на iOS

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


 





