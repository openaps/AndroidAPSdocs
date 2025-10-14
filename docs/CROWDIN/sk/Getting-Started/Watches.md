# Inteligentné hodinky a AAPS

Na zobrazenie niektorých informácií dostupných v **AAPS** alebo na vzdialené ovládanie je možné použiť rôzne inteligentné hodinky.

Priame ovládanie **AAPS** (pumpa a senzor) inteligentnými hodinkami sa dá dosiahnuť pomocou hodiniek s Androidom (ktoré sa považujú za malé [smartfóny](./Phones.md)).

Niektoré inteligentné hodinky vám umožňujú zadávať ošetrenia alebo iné veci ale samotný telefón stále spravuje **AAPS**.

Inteligentné hodinky sa čoraz viac používajú s **AAPS** ako aj u dospelých s cukrovkou, tak aj u opatrovateľov/rodičov detí s cukrovkou.

## Všeobecné výhody používania inteligentných hodiniek s **AAPS**


Inteligentné hodinky – v závislosti od modelu – sa dajú s technológiou **AAPS** používať mnohými rôznymi spôsobmi. Môžu sa použiť na úplné alebo čiastočné ovládanie **AAPS** alebo jednoducho na diaľkovú kontrolu hladiny glukózy, inzulínu v krvi a ďalších parametrov.

Integrácia inteligentných hodiniek s **AAPS** môže byť užitočná v mnohých situáciách vrátane šoférovania auta alebo (motorky) a počas cvičenia. Niektorí ľudia majú pocit, že pozeranie sa na hodinky (na stretnutí, večierku, pri obede atď.) je diskrétnejšie ako pozeranie sa na telefón. Z bezpečnostného hľadiska môžu byť inteligentné hodinky užitočné aj na cestách, pretože umožňujú používateľovi mať svoj telefón **AAPS** uložený mimo dohľadu (napríklad v taške) a hodinky môžu byť použité ako diaľkový ovládač.

## Konkrétne výhody pre rodičov/opatrovateľov používajúcich **AAPS**

Pre dieťa – ak má telefón s funkciou **AAPS** nablízku – môže opatrovateľ použiť inteligentné hodinky na monitorovanie alebo vykonávanie úprav bez nutnosti používať telefón s **AAPS**. Toto môže byť užitočné napríklad, ak je telefón **AAPS** skrytý v opasku s pumpou.

Hodinky môžete použiť spolu s mobilom alebo aj namiesto neho či už chcete cez ne ovládať _AAPS_ na diaľku alebo len [sledovať dáta](../RemoteFeatures/FollowingOnly.md).

Navyše, na rozdiel od telefónov pre rodičov/opatrovateľov (ktoré sa spoliehajú na mobilnú sieť alebo Wi-Fi pripojenie), inteligentné hodinky s pripojením Bluetooth môžu byť užitočné na odľahlých miestach, ako je jaskyňa, na lodi alebo turistike. Ak sú obe zariadenia (telefón **AAPS** a inteligentné hodinky) pripojené k rovnakej sieti Wi-Fi, môžu tiež používať Wi-Fi.

## Rôzne typy interakcií inteligentných hodiniek a AAPS

V súčasnosti existuje päť hlavných spôsobov, akými sa inteligentné hodinky používajú v spojení s **AAPS**. Tieto sú uvedené v tabuľke nižšie: 

| Nastavenie hodiniek          | Vlastnosti                              | Požiadavky                                                                                                                                                                                                                                                       |
| ---------------------------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Samostatne                   | AAPS bez telefónu                       | Full Android smartwatch (check min Android)</br> Running **app-fullRelease**                                                                                                                                                                                     |
| Kompletné diaľkové ovládanie | Väčšina funkcií AAPS                    | Android **Wear OS** watch (check Android/API)</br>Running **wear-fullRelease**                                                                                                                                                                                   |
| Vzdialené ovládanie          | AAPSClient functions                    | Android **Wear OS** watch (check Android/API)</br>Running **[wear-aapsclientRelease](https://github.com/nightscout/AndroidAPS/releases)**                                                                                                                        |
| Vzdialené ovládanie          | Niektoré funkcie AAPSClienta            | Niektoré hodinky Samsung, Fitbit a Garmin</br>Pozrite nižšie.                                                                                                                                                                                                    |
| Displej                      | Zobrazí niektoré hlásenia z AAPSclienta | Veľa inteligentných hodiniek (pozrite [tu](https://bigdigital.home.blog/))</br>[xDrip+](https://github.com/nightscoutfoundation/xdrip/releases) a [WatchDrip+](https://bigdigital.home.blog/2022/06/16/watchdrip-a-new-application-for-xdrip-watch-integration/) |

## Pred kúpou inteligentných hodiniek…

Presný model inteligentných hodiniek, ktorý si môžete kúpiť, závisí od požadovaných funkcií. Veľa užitočných informácií nájdete na stránke [Telefóny](#Phones-list-of-tested-phones) vrátane zoznamu testovaných telefónov, ktorý obsahuje aj niektoré inteligentné hodinky.

Medzi obľúbené značky hodiniek patria Samsung Galaxy, Garmin, Fossil, Mi Band a Fitbit. Možnosti zhrnuté v tabuľke vyššie sú podrobnejšie vysvetlené nižšie, aby ste sa mohli rozhodnúť, ktoré inteligentné hodinky sú pre vašu situáciu tie pravé.

Ak integrujete hodinky s **AAPS** do telefónu s úmyslom vzdialene ovládať **AAPS**, musíte zvážiť aj to, či sú tieto dve zariadenia navzájom kompatibilné, najmä ak máte starší alebo neobvyklý telefón.

Vo všeobecnosti, ak chcete sledovať iba hodnoty glukózy a nechcete interagovať s **AAPS**, existuje širšia škála cenovo dostupných a jednoduchších hodiniek, ktoré môžete použiť.

Najlepší spôsob, ako si vybrať inteligentné hodinky, je vyhľadať príspevky s názvom „hodinky“ v skupinách Discord alebo Facebook **AAPS**. Prečítajte si skúsenosti iných a pýtajte sa konkrétne otázky, ak ste na vašu otázku nenašli odpoveď v starších príspevkoch.

## Čistý android

Znie to ako atraktívna možnosť, však? V súčasnosti však len niekoľko nadšencov experimentuje s **AAPS** na samostatných hodinkách. There are a limited number of smartwatches with a reasonable interface which also which work well with standalone use of **AAPS** and your CGM app. Popular models include the LEMFO LEM. You will need to load the watch with the **AAPS** "full" apk (the apk which is usually installed on a smartphone) rather than the **AAPS** "wear" apk.

While there is no clear specification which helps you to know if a watch will work well for standalone **AAPS** use, the following parameters will help:

1)  Android 11 or newer. 2)  Being able to take the watchface off “square” mode to make text larger and easier to read. 3)  Very good battery life. 4)  Good Bluetooth range.

Most of the frustrations of standalone **AAPS** watches come from interacting with a tiny screen, and the fact that the current AAPS full app interface has not been designed for a watch. You may prefer to use a stylus to edit **AAPS**  settings on the watch, due to the restricted screen size, and some AAPS buttons may not be visible on the watch screen.

Additional challenges are that it is hard to get sufficient battery life, and watches with sufficient battery are often bulky and thick. Users report fighting with the OS and power-saving settings, difficulty in starting sensors on the watch, poor Bluetooth range (for maintaining connection with both the sensor and pump) and questionable water resistance. Examples are shown in the photos below.

![image](../images/6d787373-bc0c-404d-89aa-54d3127c4a6f.png)

If you are interested in setting up a standalone watch, read the posts and comments on the **AAPS**  Facebook group (good search options are “standalone” and “Lemfo”) and Discord for more information.

## Wear OS

**AAPS** code contains an app extension that can be installed on [**Wear OS** smartwatches](https://wearos.google.com/#oem-carousel).

![Wear OS](../images/WearOS.png)

Verify your smartwatch satisfies **AAPS** [prerequisites](#maintenance-android-version-aaps-version).

### What _is_ Wear OS?

The first three smartwatch options require the smartwatch to have **Wear OS** installed.

**Wear OS** is the operating system which runs on some modern Android smartwatches. If the description of the smartwatch indicates only _compatibility_ with Android and iOS - it does not mean it is running Wear OS. It may be some other sort of Vendor specific operating system which is not compatible with **AAPS**. To support installation and use of any version of **AAPS** or **AAPSClient**, a smartwatch will need to be running **Wear OS**, and be Android 11 or newer. As a guide, as of October 2024, the latest release of **Wear OS** is version 5.0 (based on Android 13).

If you install **AAPS** wear.apk on a **Wear OS** watch, there are a range of different custom **AAPS** watchfaces which can be selected. Alternatively, you can use a standard smartphone watchface, with your **AAPS** information included in small tiles known as “complications” on the face. A complication is any feature that is displayed on a watchface in addition to the time.


### What could my smartwatch look like?

After [installing **AAPS** onto your watch](../WearOS/WearOsSmartwatch.md), you will automatically be able to select your preferred watchface from these **AAPS**-dedicated watchfaces. On most watches, you simply long-press on the home screen until the screen shrinks and swipe right to select an alternative screen:

![image](../images/67fd75f3-721c-438d-be01-1a8e03532290.png)

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

![image](../images/98620770-2fb3-47af-a13e-28af7db69096.png)



**"Sentinel"** is a clockface developed by [Ryan Chen](http://ryanwchen.com/sentinel.html) for his family and shared for free for the Fitbit smart watches: Sense1/2, Versa 2/3/4. it is not compatible with the FitBit Luxe since this is only a fitness tracker. Sentinel can be downloaded from the [FitBit mobile app](https://gallery.fitbit.com/details/5f75448f-413d-4ece-a53d-b969c6afea7c).

It allows the monitoring of 1, 2, or 3 individual's blood glucose numbers using either Dexcom Share, Nightscout, or a combination of the two as data sources.

You can also use xDrip+ or SpikeApp if used with local web server mode. Users can set custom alarms and submit events using Nightscout's careportal functionality directly from the watch to help track insulin-on-board (IOB), carbs-on-board (COB), enter meal information (carb count and bolus amount), and BG check values.

All will appear on the Nightscout timeline-graph, and as updated values in the IOB and COB fields. Community support can be found at the dedicated [Facebook group, Sentinel.](https://www.facebook.com/groups/3185325128159614)

There are additional options for FitBit watches which appear to be for monitoring only. This includes [Glance](https://glancewatchface.com/). These additional options are described in the [Nightscout webpages.](https://nightscout.github.io/nightscout/wearable/#fitbit)

## Following only

These smartwatches will reflect some **AAPS** information, some will require other apps.

There are a wide range of affordable smartwatches which can provide display only. If you are using Nightscout, then a good overview of all the options is [here](https://nightscout.github.io/nightscout/wearable/#)

Here below some of the follow-only watch options popular with **AAPS** users:

### **Xiaomi and Amazfit watches**

[Artem](https://github.com/bigdigital) has created an xDrip+ integration app WatchDrip+ for various smartwatch models, mostly for Xiaomi (_e.g._ Mi band) and Amazfit brands:

![image](../images/4dba454b-f808-4e9e-bfc6-aba698e006f8.png)


You can read more about them, including how to set up at his website [here](https://bigdigital.home.blog/). The advantage of these watches is that they are small and relatively affordable. They are a popular option especially for kids and those with smaller wrists to wear.

### Pebble watch

![image](../images/52032f3b-c871-4342-b8e7-659c285a39c8.png)

![image](../images/935d28bb-a909-4ca8-850d-6a765bd4fcde.png)


Pebble watches ([now discontinued](https://en.wikipedia.org/wiki/Pebble_(watch))) were on general sale from 2013 to 2016, and may still be available second-hand. Fitbit took over Pebble’s assets. Pebble users can use the Urchin watchface to view Nightscout data. Displayed data options include IOB, currently active temp basal rate and predictions. If open looping you can use IFTTT to create an applet that says if a Notification has been received from **AAPS**  then send either an SMS or pushover notification.

### [Bluejay watches](https://bluejay.website/)


![image](../images/4d034157-b3d0-4dcb-98c8-fde0c2e7ad74.png)


These are unique pieces of technology which can receive glucose data **directly** from the Dexcom transmitter. It is not widely known that Dexcom G6/G7 transmitters actually broadcasts the current glucose data on _two_ separate channels, a phone channel and a medical channel. The Bluejay watches can be set to receive glucose data on either channel, so if **AAPS ** is using the phone channel, then the Bluejay watches can use the medical channel.

The key advantage is that it is currently the only watch which is completely independent of both the phone and the looping system. So, for example, if you disconnect the pump and the **AAPS** phone at the beach or theme park, and are out of range of the **AAPS** phone, you can still get readings from your Dexcom directly to the Bluejay watch.

Reported disadvantages are that it doesn’t always pick up a reading every 5 min, and the battery is not replaceable. The Bluejay GTS watch runs a modified version of xDrip+ software whilst the Bluejay U1 runs full xDrip+.

### Apple watch

Check [Nightscout on your watch](https://nightscout.github.io/nightscout/wearable/#).

The Apple watch now supports G7 direct connection and can be used simultaneously with **AAPS**.

