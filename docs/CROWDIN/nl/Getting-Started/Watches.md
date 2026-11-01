# Smartwatches en AAPS

Verschillende smartwatches kunnen een deel van de informatie uit **AAPS** tonen of acties op afstand uitvoeren.

Een smartwatch die **AAPS** (pomp en sensor) direct bestuurt, kan alleen met een volledig Android-horloge (dat werkt als een kleine [smartphone](./Phones.md)).

Met sommige smartwatches kun je behandelingen invoeren, of meer, terwijl de telefoon zelf **AAPS** blijft beheren.

Smartwatches worden steeds vaker gebruikt met **AAPS**, _zowel_ door volwassenen met diabetes als door verzorgers/ouders van kinderen met diabetes.

## Algemene voordelen van smartwatches met **AAPS**


Smartwatches kunnen - afhankelijk van het model - op veel verschillende manieren met **AAPS** worden gebruikt. Je kunt er **AAPS** volledig of gedeeltelijk mee bedienen, of alleen op afstand de glucosewaarden, de actieve insuline (IOB) en andere waarden bekijken.

Een smartwatch koppelen aan **AAPS** kan in veel situaties handig zijn, bijvoorbeeld tijdens het autorijden, (motor)fietsen en sporten. Sommige mensen vinden kijken op een horloge (in een vergadering, op een feest, aan tafel enz.) minder opvallend dan kijken op een telefoon. Ook voor de veiligheid kan een smartwatch onderweg handig zijn: je kunt je **AAPS**-telefoon uit het zicht houden (bijvoorbeeld in een tas) en toch de smartwatch gebruiken voor bediening op afstand.

## Specifieke voordelen voor ouders/verzorgers die **AAPS** gebruiken

For a child - if their **AAPS** phone is nearby - a caregiver can use a smartwatch to monitor or make modifications without needing to use the **AAPS** phone. Dit is bijvoorbeeld handig als de **AAPS**-telefoon goed weggestopt zit in een pompband.

Een smartwatch kun je _naast_ of _in plaats van_ de TELEFOON-opties gebruiken voor bediening op afstand of [alleen volgen](../RemoteFeatures/FollowingOnly.md).

Bovendien zijn smartwatches met een Bluetooth-verbinding handig op afgelegen plekken, zoals in een grot, op een boot of halverwege een berg. Volgtelefoons van ouders/verzorgers hebben daar wel een mobiel netwerk of wifi nodig. Als beide apparaten (**AAPS**-telefoon en smartwatch) op hetzelfde wifi-netwerk zitten, kunnen ze ook wifi gebruiken.

## Verschillende manieren om een smartwatch met AAPS te gebruiken

Er zijn op dit moment vijf belangrijke manieren om smartwatches samen met **AAPS** te gebruiken. Deze staan in de tabel hieronder: 

| Opstelling van het horloge     | Functies                                      | Vereisten                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------ | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Zelfstandig                    | AAPS zonder telefoon                          | Volledige Android-smartwatch (controleer minimale Android-versie)</br> Met **app-fullRelease**                                                                                                                                                                                                                                             |
| Volledige bediening op afstand | De meeste AAPS-functies                       | Android **Wear OS**-horloge (controleer Android/API)</br>Met **wear-fullRelease**                                                                                                                                                                                                                                                          |
| Afstandsbediening              | AAPSClient-functies                           | Android **Wear OS**-horloge (controleer Android/API)</br>Met **[wear-aapsclientRelease](https://github.com/nightscout/AndroidAPS/releases)**                                                                                                                                                                                               |
| Afstandsbediening              | Sommige AAPSClient-functies                   | Garmin-horloges</br>(alleen oudere Samsung Tizen- en Fitbit-opstellingen, niet aanbevolen)</br>Zie hieronder.                                                                                                                                                                                                                              |
| Weergave                       | Glucose, trend, IOB, COB, loop- en pompstatus | Veel smartwatches, via een companion-app op de **AAPS**-telefoon die gegevens krijgt via de broadcast van [Externe Companion Apps](#watches-external-companion-apps): [WatchDrip+](https://bigdigital.home.blog/) (Xiaomi, Amazfit), [GlucoDataHandler](https://github.com/pachi81/GlucoDataHandler) (Wear OS), G-Watch</br>Zie hieronder. |

## Voordat je een smartwatch koopt…

Welk model smartwatch je koopt, hangt af van de functie(s) die je wilt. Nuttige informatie vind je op de [pagina Telefoons](#Phones-list-of-tested-phones), met een lijst van geteste telefoons waarin ook enkele smartwatches staan.

Populaire horlogemerken zijn Samsung Galaxy, Garmin, Fossil en Mi Band. De verschillende opties uit de tabel hierboven worden hieronder verder uitgelegd. Zo kun je kiezen welke smartwatch het beste bij jouw situatie past.

Als je een smartwatch met **AAPS** op een telefoon wilt koppelen om **AAPS** op afstand te bedienen, moet je ook nagaan of de twee apparaten met elkaar samenwerken. Dit geldt vooral als je een oudere of minder gangbare telefoon hebt.

Als je alleen glucosewaarden wilt volgen en **AAPS** niet wilt bedienen, kun je meestal kiezen uit meer betaalbare en eenvoudigere horloges.

De beste manier om een smartwatch te kiezen is zoeken naar berichten over "watch" in de **AAPS**-groepen op Discord of Facebook. Lees de ervaringen van anderen en stel je eigen vragen als oudere berichten je vraag niet beantwoorden.

## Volledig Android

Dat klinkt aantrekkelijk, toch? However, at present, only a few enthusiasts are experimenting with **AAPS** on a stand-alone watch. Er zijn maar weinig smartwatches met een redelijke bediening die ook goed werken voor zelfstandig gebruik van **AAPS** en je CGM-app. Populaire modellen zijn de LEMFO LEM 15 Pro en 16. Je moet de **AAPS** "full" apk op het horloge zetten (de apk die je normaal op een smartphone installeert) en niet de **AAPS** "wear" apk.

Er is geen duidelijke specificatie die vertelt of een horloge goed werkt voor zelfstandig gebruik van **AAPS**, maar deze punten helpen:

1)  Android 12 of nieuwer. 2)  De watchface uit de "vierkante" modus kunnen halen, zodat tekst groter en beter leesbaar is. 3)  Een zeer goede batterijduur. 4)  Een goed Bluetooth-bereik.

De meeste frustraties met zelfstandige **AAPS**-horloges komen door het kleine scherm, en doordat de huidige AAPS full app niet voor een horloge is ontworpen. You may prefer to use a stylus to edit **AAPS** settings on the watch, due to the restricted screen size, and some AAPS buttons may not be visible on the watch screen.

Andere problemen: het is moeilijk om een goede batterijduur te krijgen, en horloges met een goede batterij zijn vaak groot en dik. Gebruikers melden problemen met het besturingssysteem en de energiebesparingsinstellingen, moeite met het starten van sensoren op het horloge, een slecht Bluetooth-bereik (voor de verbinding met zowel de sensor als de pomp) en twijfelachtige waterdichtheid. Voorbeelden staan op de foto's hieronder.

![Afbeelding](../images/6d787373-bc0c-404d-89aa-54d3127c4a6f.png)

If you are interested in setting up a standalone watch, read the posts and comments on the **AAPS** Facebook group (good search options are “standalone” and “Lemfo”) and Discord for more information.

## Wear OS

De code van **AAPS** bevat een app-uitbreiding die je kunt installeren op [**Wear OS**-smartwatches](https://wearos.google.com/#oem-carousel).

![Configuratie > Communicatie met Wear ingeschakeld](../images/v4/Configuration/configuration_communication_wear.png)

Controleer of je smartwatch voldoet aan de [voorwaarden](#maintenance-android-version-aaps-version) van **AAPS**.

### Wat _is_ Wear OS?

Voor de eerste drie smartwatch-opties moet **Wear OS** op de smartwatch geïnstalleerd zijn.

**Wear OS** is het besturingssysteem dat op sommige moderne Android-smartwatches draait. Staat in de beschrijving van de smartwatch alleen dat hij _compatibel_ is met Android en iOS? Dan betekent dat niet dat hij Wear OS gebruikt. Het kan een ander, merkgebonden besturingssysteem zijn dat niet werkt met **AAPS**. Om een versie van **AAPS** of **AAPSClient** te kunnen installeren en gebruiken, moet een smartwatch **Wear OS 3.0, 3.2 of 3.5** (Android 11, API-level 30) **of nieuwer** hebben. Elke versie van Wear OS volgt de Android-versie waarop hij is gebaseerd: **Wear OS 3** is Android 11 (API-level 30), **Wear OS 4** is Android 13 (API-level 33), **Wear OS 5** is Android 14 (API-level 34) en **Wear OS 6** is Android 16 (API-level 36). Horloges met Wear OS 2 kunnen **AAPS** niet draaien.

Als je de **AAPS** wear.apk op een **Wear OS**-horloge installeert, kun je kiezen uit verschillende eigen **AAPS**-watchfaces. Je kunt ook een standaard watchface gebruiken, met je **AAPS**-informatie in kleine vakjes op de wijzerplaat, de zogenaamde "complicaties". Een complicatie is elke functie die naast de tijd op een watchface wordt getoond.

```{note}
Recente wijzigingen in **Wear OS** maken de eigen **AAPS**-watchfaces steeds slechter (hoe hoger de Wear OS-versie, hoe erger), maar **complicaties** blijven werken. Lees [Wijzigingen in watchfaces in Wear OS](#wearos-watchface-changes) voordat je een horloge koopt of bijwerkt.
```


### Hoe kan mijn smartwatch eruitzien?

Na het [installeren van **AAPS** op je horloge](../WearOS/WearOsSmartwatch.md) kun je meteen je favoriete watchface kiezen uit deze **AAPS**-watchfaces. Op de meeste horloges druk je lang op het startscherm tot het scherm kleiner wordt, en veeg je naar rechts om een ander scherm te kiezen:

![Afbeelding](../images/67fd75f3-721c-438d-be01-1a8e03532290.png)

Dit zijn de basisschermen die in **AAPS** zitten. Er zijn [meer watchfaces](#WearOS_changing-to-AAPS-watchface) en je kunt ook [complicaties](#Watchfaces-complications) gebruiken.

### Hoe gebruik ik een Wear OS-horloge in het dagelijks leven?

Meer informatie over de watchfaces en het dagelijks gebruik, ook hoe je je eigen watchface maakt (en deelt), staat in het hoofdstuk [AAPS instellen op je Wear OS-horloge](../WearOS/WearOsSmartwatch.md).

(Watchfaces-tizen)= (watches-external-companion-apps)=

## Externe Companion Apps

**AAPS** kan zijn status naar andere apps op dezelfde telefoon sturen: glucose en trend, IOB, COB, basaal en tijdelijk basaal, profielnaam, loopstatus, batterij van telefoon en pomp, reservoirniveau en voortgang van de bolus. Verschillende companion-apps voor horloges lezen deze broadcast en tonen de gegevens op horloges die **AAPS** niet direct ondersteunt. Om de gegevens te versturen zet je **Externe Companion Apps** aan in **Configuratie** > **Communicatie** (zie [Externe Companion Apps](#external-companion-apps) op de pagina Configuratie). De broadcast wordt bij elke nieuwe meting verstuurd en kan niet worden opgevraagd: een vernieuwknop in de companion-app heeft geen effect op **AAPS**.

![Configuratie > Communicatie: de kaart Externe Companion Apps](../images/v4/Configuration/configuration_external_companion_apps.png)

Companion-apps waarvan bekend is dat ze deze broadcast gebruiken:

- [WatchDrip+](https://bigdigital.home.blog/) voor Xiaomi- en Amazfit-horloges, zie [Xiaomi- en Amazfit-horloges](#watches-xiaomi-amazfit) hieronder.
- [GlucoDataHandler](https://github.com/pachi81/GlucoDataHandler) voor Wear OS-horloges, als complicatie of widget. Het is een handige reserve-oplossing op Wear OS-versies waar de **AAPS**-watchfaces niet betrouwbaar zijn, zie [AAPS instellen op je Wear OS-horloge](../WearOS/WearOsSmartwatch.md). De bijbehorende app GlucoDataAuto toont dezelfde gegevens in een auto met Android Auto.
- [G-Watch-app](https://play.google.com/store/apps/details?id=sk.trupici.g_watch) voor Samsung Tizen-horloges, en de latere versie voor Wear OS. In eerdere versies van **AAPS** heette de plugin **Samsung Tizen**, naar deze app.

```{warning}
De **G-Watch-app** en de versie voor **Wear OS** worden niet meer onderhouden, en Samsung is met zijn smartwatches overgestapt van Tizen naar Wear OS. G-Watch is alleen nog van belang voor bestaande, oudere opstellingen en wordt niet aanbevolen voor een nieuwe installatie. Kijk in de speciale [Facebook-groep](https://www.facebook.com/groups/gwatchapp) voor het laatste nieuws.
```

(Watchfaces-garmin)=

## Garmin

In de Garmin ConnectIQ-store zijn er enkele watchfaces voor Garmin die samenwerken met [AAPS](https://apps.garmin.com/search?keywords=androidaps).

![Configuratie > Communicatie: de kaart Garmin](../images/v4/Configuration/configuration_garmin.png)

[AAPS Glucose Watch](https://apps.garmin.com/apps/3d163641-8b13-456e-84c3-470ecd781fb1) werkt direct samen met **AAPS**. Het toont loopgegevens (actieve insuline, tijdelijk basaal) naast de glucosewaarden, en stuurt hartslagmetingen naar **AAPS**. Het is te vinden in de ConnectIQ-store; zet de plugin **Garmin** aan in **Configuratie → Communicatie**. ![AAPS Glucose Watch-watchface met genummerde velden](../images/Garmin_WF-annotated.png)

1. Hoogste en laagste glucosewaarde in de grafiek
2. Verandering van glucose per minuut
3. Actieve insuline (IOB)
4. Tijd sinds de laatste glucosemeting (minuten:seconden)
5. Tijdelijk basaal, als percentage van de basaal uit het profiel
6. Glucosegrafiek van de laatste 2 uur
7. Huidige glucosewaarde



## Fitbit

```{warning}
Google verplaatst Fitbit naar Google Health en verwijdert apps en watchfaces van derden van Fitbit-horloges in de EU. Fitbit-watchfaces zijn daarom **geen aanbevolen optie meer**, en een Fitbit kopen om met **AAPS** te gebruiken wordt afgeraden.
```

Voor bestaande Fitbit-horloges noemen de [Nightscout-webpagina's](https://nightscout.github.io/nightscout/wearable/#fitbit) enkele opties om alleen te volgen, zoals [Glance](https://glancewatchface.com/). Dit zijn ook watchfaces van derden, dus dezelfde EU-beperking geldt.

## Alleen volgen

Deze smartwatches tonen een deel van de **AAPS**-informatie. Voor sommige zijn andere apps nodig.

Er zijn veel betaalbare smartwatches die alleen gegevens kunnen tonen. Als je Nightscout gebruikt, vind je [hier](https://nightscout.github.io/nightscout/wearable/#) een goed overzicht van alle opties

Hieronder een aantal populaire horloges om alleen te volgen bij **AAPS**-gebruikers:

(watches-xiaomi-amazfit)=
### Xiaomi- en Amazfit-horloges

**WatchDrip+** is een companion-app van de community die glucose- en loopgegevens toont op verschillende smartwatches, vooral van de merken Xiaomi (_bijv._ Mi Band) en Amazfit:

![Afbeelding](../images/4dba454b-f808-4e9e-bfc6-aba698e006f8.png)

Sinds versie 0.5 leest **WatchDrip+** zijn gegevens direct uit **AAPS**, zonder xDrip+ als tussenstation. Op de **AAPS**-telefoon:

1. Zet **Externe Companion Apps** aan in **Configuratie** > **Communicatie**, zie [hierboven](#watches-external-companion-apps). Dit levert de huidige glucose, delta, trendpijl, IOB en pompstatus.
2. Zet de plugin **xDrip** aan in **Configuratie** > **Communicatie** en zet in de instellingen ervan **Status naar xDrip+ verzenden** aan. Dit levert de statusregel met IOB/COB, en na een paar metingen vult de glucosegrafiek op het horloge zich.
3. Als xDrip+ op de telefoon staat, zet dan de **Broadcast Service API** ervan uit (xDrip+ > Settings > Inter-app settings), zodat het horloge de gegevens niet twee keer krijgt. Als xDrip+ alleen gegevens naar het horloge doorstuurde, kun je het verwijderen.

De vernieuwknop van WatchDrip+ heeft geen effect met **AAPS**: de gegevens komen bij elke nieuwe meting binnen.


Meer informatie, ook over het instellen, vind je op de [website van WatchDrip+](https://bigdigital.home.blog/). Het voordeel van deze horloges is dat ze klein en vrij betaalbaar zijn. Ze zijn vooral populair bij kinderen en mensen met smallere polsen.

### Pebble-horloge

![Afbeelding](../images/52032f3b-c871-4342-b8e7-659c285a39c8.png)

![Afbeelding](../images/935d28bb-a909-4ca8-850d-6a765bd4fcde.png)


Pebble-horloges ([nu niet meer gemaakt](https://en.wikipedia.org/wiki/Pebble_(watch))) waren van 2013 tot 2016 te koop, en zijn misschien nog tweedehands te vinden. Fitbit heeft de bezittingen van Pebble overgenomen. Pebble-gebruikers kunnen de Urchin-watchface gebruiken om Nightscout-gegevens te bekijken. Je kunt onder andere IOB, het actieve tijdelijk basaal en voorspellingen tonen. If open looping you can use IFTTT to create an applet that says if a Notification has been received from **AAPS** then send either an SMS or pushover notification.

### [Bluejay-horloges](https://bluejay.website/)


![BlueJay U3-horloge](../images/watches/bluejay_u3.png)


Dit zijn bijzondere apparaten die glucosegegevens **direct** van de Dexcom-zender kunnen ontvangen. Weinig mensen weten dat Dexcom G6/G7-zenders de huidige glucosegegevens op _twee_ aparte kanalen uitzenden: een telefoonkanaal en een medisch kanaal. De Bluejay-horloges kunnen glucosegegevens op elk van beide kanalen ontvangen. Als **AAPS** het telefoonkanaal gebruikt, kunnen de Bluejay-horloges dus het medische kanaal gebruiken.

Het grote voordeel is dat het horloge los staat van zowel de telefoon als het loopsysteem. Als je bijvoorbeeld op het strand of in een pretpark de pomp en de **AAPS**-telefoon loskoppelt en buiten bereik van de **AAPS**-telefoon bent, krijg je de waarden van je Dexcom nog steeds direct op het Bluejay-horloge.

De oorspronkelijke **Bluejay GTS** wordt niet meer gemaakt en kan de Dexcom G7 niet lezen. De latere modellen (U1, en nu de **U3**, op het moment van schrijven verkocht als early access) zijn volledige Android-horloges met xDrip, die de gegevens direct van de Dexcom G6 en G7 ophalen. De verkoper noemt het horloge een onderzoeksinstrument, niet voor medisch gebruik. Gemelde nadelen zijn dat het niet altijd elke 5 minuten een meting ontvangt en dat de batterij vaak moet worden opgeladen. Kijk op de [website van Bluejay](https://bluejay.website/) voor het huidige model en de beschikbaarheid.

### Apple Watch

Bekijk [Nightscout op je horloge](https://nightscout.github.io/nightscout/wearable/#).

De Apple Watch ondersteunt nu een directe verbinding met de G7 en kan tegelijk met **AAPS** worden gebruikt.

