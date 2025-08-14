# Слежение за работой AAPS (без взаимодействия с системой)

In addition to the range of possibilities available for remotely controlling _and_ following **AAPS** which are described at [remote control](../RemoteFeatures/RemoteControl.md), there are several additional apps and devices which the community has developed, to simply follow numbers (glucose levels and other information), without interacting with **AAPS**.

A good overview of the extensive options available for following **AAPS** is at [Nightscout follower](https://nightscout.github.io/nightscout/downloaders/#) webpage.

```{contents} Table of contents
:depth: 1
:local: true
```

Наиболее распространенные сценарии сочетания работы **AAPS** с наблюдением приведены ниже.

## Smartphone apps

```{contents} These are some of the main “follower” apps used by **AAPS** users. All of these apps are “free”: 
:depth: 1
:local: true
```

### Dexcom Follow ([Android](https://play.google.com/store/apps/details?id=com.dexcom.follow.region2.mgdl) and [iOS](https://apps.apple.com/fr/app/dexcom-follow-mg-dl-dxcm2/id1032203080))

![изображение](../images/ded350b0-6012-4104-b21c-5d5bfd91aa65.png)

* Dexcom Follow is compatible with a wide range of handsets (both Android and iPhone). Dexcom Follow можно использовать, даже если вы не используете официальное приложение Dexcom для получения данных.

* Many caregivers are familiar with Dexcom Follow, preferring its clear interface over something more complicated.

* Dexcom Follow is very good for teachers/grandparents and people who know very little about diabetes and sugar levels. It has customisable alerts (BG level, what sound to play etc.). Оповещения могут быть полностью выключены, что очень полезно, если сенсор еще прирабатывается и передает много заниженных значений.

#### Setting up Dexcom Follow: how-to-guide

If you use the unofficial Dexcom app BYODA for receiving sensor data, you may be able to send invites to followers from within the BYODA app.

You cannot send invite emails to Dexcom followers anymore from third-party apps. In xDrip+ the invite request will just result in the message “invite not sent”.

You must install the official Dexcom app, send the invite, and then uninstall the official app.

Для этого выполните следующие шаги:

1)  Install the official “Dexcom” app on _any_ smartphone (Android/iPhone), this can be the Follower phone, if it is more convenient. 2) Войдите c именем пользователя и паролем Dexcom, это те же данные, что и для Dexcom Clarity, если вы уже клиент Dexcom/Clarity. Если у вас нет учетной записи Dexcom, можно создать новый логин.   
3) Пролистайте вводные меню. 4) В разделе код сенсора (sensor code) введите "no code". 5) В разделе № трансмиттера (transmitter SN) введите любой валидный код трансмиттера (можно ввести номер истекшего) чтобы не произошло вмешательства в работу текущего; он имеет определенный формат чисел и букв: «NLNNL» и только в определенные комбинации, так что проще всего использовать то, что известно наверняка). 6) Когда приложение попытается найти трансмиттер и сенсор, вы сможете пригласить фоллоуэров: выберите выпадающее меню в левом верхнем углу приложения и добавьте новых подписчиков. Эту процедуру также можно использовать, если один из фоллоуэров сменил телефон и нуждается в свежем приглашении, здесь вы можете удалить его из списка подписчиков и отправить новое приглашение на новый смартфон. 7) На телефоне фоллоуэра установите Dexcom Follow скачав его из App Store (iPhone) или Google Play (Android). Настройте приложение Dexcom Follow и вам будет предложено открыть электронную почту, найти приглашение и стать подписчиком.    
8) Теперь можно удалить официальное приложение Dexcom G6.

For Dexcom Follow, the sensor data is then exported from the **AAPS** phone either directly from BYODA, or from xDrip+, depending on which app you are using.


### [Nightguard](https://apps.apple.com/fr/app/nightguard/id1116430352) (iOS)

![изображение](../images/f2c7d330-9889-4526-9a5c-bbb012d804ab.png)

Достоинства (как указывают пользователи):

* Available in the [app store](https://apps.apple.com/us/app/nightguard/id1116430352), simple, user-friendly interface.

* Swipe button or shake phone to snooze alarms at different intervals ranging from 5 min to 24 hours

* Customize alarms (high, low alerts, missed readings when no data for 15-45 minutes).

* Fast rise/drop over 2-5 consecutive readings (you choose). Можно также выбрать значения дельты между двумя данными

* Smart snooze so doesn't alert if levels are moving in right direction

* There is a Care tab which appears to enable you to set a new temp target for a certain duration, delete the temp target or enter carbs.

Недостатки (по сообщениям пользователей)

* Only available for iOS

* The TT shows as 5 mmol regardless of which TT level is set

* Never shows Temp Basal rate even though it shows TB

### [Nightwatch](https://play.google.com/store/apps/details?id=se.cornixit.nightwatch) (Android)

![изображение](../images/855c3a74-e612-4a6f-8b63-18d286ea0a3f.png)


* Nightwatch markets itself as a Nightscout client and monitors the user’s Nightscout glucose levels on either Android phone or tablet.

* The app can be downloaded from [Google play](https://play.google.com/store/apps/details?id=se.cornixit.nightwatch) and displays BG data in real time.

* The user can be alerted with customised noisy low and high alarms set.

* BG data can be viewed in either mmol/L or mg/dL.

* It requires Android 5.0 and up.

* It has a dark Ul, large readings and buttons, designed for usage at night.

### xDrip+ (Android)

You can use xDrip+ as a follower.

#### With Nightscout

Set xDrip+ as a Nightscout Follower. You will receive BG and treatments, not basal.

![изображение](../images/remote_control_and_following/xDrip+_Nightscout_Follower.png)

#### Without Nightscout - xDrip+ BG data source

If your **AAPS** data source is xDrip+ (or if xDrip+ can also receive BG from another app like BYODA, Juggluco, ...) you can use it from the master phone to share data with xDrip+ followers, displaying BG, treatments and basal rates.

![изображение](../images/remote_control_and_following/xDrip+_Master_Sync.png)

#### Without Nightscout - xDrip+ BG companion app

If your **AAPS** data source is not xDrip+ but you can display BG data from the Companion App data source, you can use it from the master phone to share data with xDrip+ followers, displaying BG, treatments and basal rates.

![изображение](../images/remote_control_and_following/xDrip+_Companion_Sync.png)

### xDrip4iOS (iOS)

![изображение](../images/remote_control_and_following/xdrip4ios.jpg)

xDripSwift was created from porting the original xDrip app to iOS and evolved to "xDrip for iOS" written **xDrip4iOS** .

```{admonition} Further detail about how to attempt to obtain the original **xDrip4iOS** app
:class: dropdown
The [xDrip4iOS Facebook group](https://www.facebook.com/groups/853994615056838/announcements) is the main community support for xDrip4iOS and Shuggah. **xDrip4iOS** can connect to many different CGM systems and transmitters and display blood glucose values, charts and statistics as well as provide alarms. It can also upload to Nightscout or act as a [follower app for Nightscout](https://xdrip4ios.readthedocs.io/en/latest/connect/follower/). 

"How can I get **xDrip4iOS** on my iPhone?"
There are two options:

1. If you have a Mac and an Apple Developer account (99 EUR/USD per year) you can build your own xDrip4iOS by [following the instructions](https://xdrip4ios.readthedocs.io/en/latest/install/build/).

If you want, you can then become a "releaser" and [share a Personal Testflight xDrip4iOS](https://xdrip4ios.readthedocs.io/en/latest/install/personal_testflight/) with up to 100 other people to help them.

2. You join the [xDrip4iOS Facebook group](https://www.facebook.com/groups/853994615056838/announcements) and read the pinned posts for current methods to get the app. **You should not ask for an invitation to the app** (read the group rules).
```



![изображение](../images/fae3ec63-2c2c-4152-ab42-97f9744a8f36.png)

"What is **Shuggah**?" A group of Ukrainian developers copied the project code for xDrip4iOS (which is shared publicly on GitHub) and released it on the App Store under a business account. The Shuggah release is in no way managed by the xDrip4iOS developers.

The [xDrip4iOS Facebook group](https://www.facebook.com/groups/853994615056838/announcements) supports xDrip4iOS, and the matching Apple Watch apps.

### [Sugarmate](https://apps.apple.com/fr/app/sugarmate/id1111093108) (iOS)

![изображение](../images/340cd555-a9e0-4a20-a131-36c078f5b8ea.png)

![изображение](../images/21b83c41-85c6-4619-a702-a65450768855.png)


[Sugarmate](https://sugarmate.io/) можно закачать из App Store. Sugarmate is compatible with:
* Apple iPhone (Requires software version 13.0 or later)
* Apple iPad (Requires software version 13.0 or later)
* Google Android (Save web app to your homescreen)

Пользователи Sugarmate сообщают что приложение совместимо с Apple CarPlay в США для отображения данных гликемии во время вождения. Пока еще не установлено, возможно ли это в странах за пределами США. Если вы знаете больше об этом, добавьте подробности в документацию, заполнив запрос на слияние который быстро и легко сделать.


### [Spike](https://spike-app.com/) (iOS)

![изображение](../images/1129ba00-8159-4940-936e-76fd4ae45a2d.png)

Spike can be used as a primary receiver or as a follower app, providing BG, alarms and IOB and more.

The website and app are no longer developed. Support can be found on [Facebook](https://www.facebook.com/groups/1973791946274873) and [Gitter](https://gitter.im/SpikeiOS/Lobby).

## Smartwatches for **Monitoring of AAPS** (full profile data, or glucose-only) where **AAPS** is running on a phone.

See [here](../Getting-Started/Watches.md).


## Devices for following AAPS

```{contents} Devices include:
:depth: 1
:local: true
```

### M5 stack

![изображение](../images/061edb52-56d2-45f4-b3da-82b2036d7bc6.png)

The M5Stack is a small box which can be programmed for many applications, Martin's project [M5Stack NightscoutMon](https://github.com/mlukasek/M5_NightscoutMon/wiki) is displaying sensor glucose values and trends, IOB and COB. Он находится в пластиковой коробке, оснащен цветным дисплеем, слотом для карт Micro SD, 3 кнопками, динамиком и внутренним аккумулятором. It is a great blood sugar monitor and is relatively easy to set up if you have a Nightscout account. Users typically run it on their home Wi-Fi, but some users report using it as a display when motorbiking, by running it off a phone Wi-Fi hotspot.

### Sugarpixel

SugarPixel — это устройство для системы вторичного оповещения об уровне глюкозы для приложений Dexcom или Nightscout на смартфоне пользователя. Устройство отображает показания уровня сахара в крови в режиме реального времени. Этот аппаратный монитор CGM оснащен звуковыми оповещениями, генерирующими случайные сигналы (которые невероятно громкие), вибрационными оповещениями для людей с нарушениями слуха, настраиваемыми параметрами отображения и встроенным многопользовательским сопровождением.

![изображение](../images/39137beb-17cc-4c87-98b7-cf1831d484cb.png)

![изображение](../images/87883ebb-9683-4aa8-8014-49c2ca902c93.png)

* SugarPixel has multiple display options in mg/dL and mmol/L to suit the user’s needs with colour-coded glucose values.
* The standard face displays BG, Trend Arrow, and Delta. Дельта - это изменение + или - от последнего показания.
* SugarPixel can be customised for use in low brightness with the BG and Time face to see the user’s BG reading and current time on the user’s nightstand.
* SugarPixel’s xolour face utilises the entire display to show a single colour representing the BG value. Это позволяет пользователю видеть значения ГК на расстоянии через окно, находясь в бассейне, во дворе или на веранде.
* The Big BG face is useful for nightstand users who wear glasses or contact lenses.

### Nightscout Clock on Ulanzi TC001

**Nightscout Clock** is an open source software running on the **Ulanzi TC001** device. It connects with Dexcom servers or Nightscout and displays real time blood sugar readings.

![Following Nightscout Clock](../images/FollowingNightscoutClock.png)

* The clock supports both mmol/L and mg/dL units, and includes audible alarms.
* Several display available, see [Github nightscout-clock](https://github.com/ktomy/nightscout-clock?tab=readme-ov-file#more-information-for-people-who-needs-it) for an overview.
* Setting up and configuring the device involves just a few simple steps. Once set up, it only requires power and Wi-Fi to function.
* The Ulanzi TC001 device is significantly cheaper than the SugarPixel to buy.
* The software along with installation instructions can be found on [Github nightscout-clock](https://github.com/ktomy/nightscout-clock?tab=readme-ov-file).
* It is developed and maintained by Artiom Kenibasov, offering support on the [Facebook AAPS Users group](https://www.facebook.com/groups/cgminthecloud/posts/8776932509094594/).

### PC (TeamViewer)
Некоторые пользователи считают, что полнофункциональный инструмент удаленного доступа, такой как [TeamViewer](https://www.teamviewer.com/), может оказаться полезным для удаленного устранения неполадок.
