# Smartwatches und AAPS

Mit verschiedenen Smartwatches können einige der in **AAPS** verfügbaren Informationen angezeigt oder Remote-Aktionen ausgeführt werden.

Eine direkte und vollständige **AAPS**-Steuerung (Pumpe und Sensor) über die Smartwatch ist mit „Full-Android-Smartwatches“ möglich. Sie sind in diesem Konstrukt wie ein kleines [Smartphone](./Phones.md).

Über einige Smartwatches können Behandlungen (oder mehr) eingegeben werden, das Smartphone bleibt dabei weiterhin für **AAPS** führend.

Smartwatches werden mehr und mehr mit **AAPS**,_sowohl_ für Erwachsene mit Diabetes, als Betreuende/Eltern von Kindern mit Diabetes, eingesetzt.

## Generelle Vorteile Smartwatches mit **AAPS** zu nutzen


Smartwatches können - je nach Modell - auf unterschiedliche Weise mit **AAPS** genutzt werden. Sie können **AAPS**ganz oder teilweise steuern oder einfach verwendet werden, um Glukosewerte, aktives Insulin und andere Parameter remote zu überprüfen.

Die Integration einer Smartwatch mit **AAPS** kann in vielen Situationen nützlich sein. Z.B. beim Auto- oder Motorradfahren oder bei sportlichen Aktivitäten. Some people feel that looking at a watch (in a meeting, party, dinner table etc.) is more discreet than looking at a phone. From a security perspective, a smartwatch can also be beneficial while on the move, enabling the user to keep their **AAPS** phone stored out of sight (like inside a bag), while still using the smartwatch for remote control.

## Besondere Vorteile für **AAPS**-nutzende Eltern/Betreuende

Ist das **AAPS**-Smartphone in der Nähe des Kindes, kann der Betreuende die Smartwatch zur Kontrolle nutzen und Anpassungen über die Smartwatch vornehmen, ohne dass das **AAPS**-Smartphone berührt werden muss. Das kann besonders komfortabel sein, wenn das **AAPS**-Smartphone in einem Pumpengürtel versteckt getragen wird.

Eine Smartwatch kann entweder _zusätzlich_ oder als _Alternative_ zu den Smartphone-basierten Optionen verwendet werden, um remote zu steuern oder auch [nur zu folgen](../RemoteFeatures/FollowingOnly.md).

Ein weiterer Vorteil liegt darin, dass die Verbindung mit der Smartwatch per Bluetooth erfolgt (anders als ein Follower-Smartphone der Eltern/Betreuenden, das eine Internetverbindung über Mobilfunk oder WLAN benötigt) und so auch in Situationen ohne Internetverbindung (an abgelegenen Orten, auf einem Boot oder auf halber Höhe eines Berges) auf AAPS zugreifen kann. If both devices (**AAPS** phone and smartwatch) are on the same Wi-Fi network, they can also use Wi-Fi.

## Verschiedene Arten die Smartwatch mit AAPS zu nutzen

Derzeit gibt es fünf Möglichkeiten, Smartwatches mit **AAPS** zu verwenden. Diese werden in der folgenden Tabelle beschrieben: 

| Smartwatch-Setup              | Funktionalitäten                               | Voraussetzungen                                                                                                                                                                                                                                                                                                     |
| ----------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Stand-Alone                   | AAPS ohne Smartphone                           | Full-Android-Smartwatch (prüfe Android-Mindestanforderung)</br> auf der **app-fullRelease** läuft                                                                                                                                                                                                                   |
| Vollständige Remote-Steuerung | Die meisten AAPS-Funktionen                    | Android **Wear OS**-Smartwatch(Android/API prüfen)</br>mit **wear-fullRelease**                                                                                                                                                                                                                                     |
| Remote-Steuerung              | AAPSClient-Funktionen                          | Android **Wear OS**-Smartwatch (Android/API prüfen)</br>mit **[wear-aapsclientRelease](https://github.com/nightscout/AndroidAPS/releases)**                                                                                                                                                                         |
| Remote-Steuerung              | Einige AAPSClient-Funktionen                   | Garmin watches</br>(older Samsung Tizen and Fitbit setups only, not recommended)</br>See below.                                                                                                                                                                                                                     |
| Anzeige                       | Glucose, trend, IOB, COB, loop and pump status | Many smartwatches, through a companion app on the **AAPS** phone fed by the [External Companion Apps](#watches-external-companion-apps) broadcast: [WatchDrip+](https://bigdigital.home.blog/) (Xiaomi, Amazfit), [GlucoDataHandler](https://github.com/pachi81/GlucoDataHandler) (Wear OS), G-Watch</br>See below. |

## Bevor Du Dir eine Smartwatch kaufst …

Welches genau Modell Du kaufen solltest, hängt von den gewünschten Funktionalitäten ab. You may find useful information on the [Phones page](#Phones-list-of-tested-phones), including a list of tested phones that also contains some smartwatches.

Popular watch brands include Samsung Galaxy, Garmin, Fossil and Mi band. Die verschiedenen Einsatzmöglichkeiten, die in der obigen Tabelle zusammengefasst sind, werden im Folgenden näher erläutert. Das soll Dir helfen, die Smartwatch auszuwählen, die am besten zu Deinen Bedürfnissen passt.

Wenn Du eine Smartwatch mit dem Ziel das **AAPS**-Smartphone remote steuern zu wollen anschaffst, solltest Du insbesondere darauf achten, dass beide Geräte kompatibel zueinander sind (besonders dann, wenn Du ein älteres oder ungewöhnliches Smartphone hast).

Wenn Du nur die Glukosewerte sehen möchtest, und darüber hinaus nicht mit **AAPS** interagieren möchtest, steht Dir eine größere Auswahl an einfachen, erschwinglichen Smartwatches zur Verfügung.

Der beste Weg, eine Smartwatch auszusuchen, ist in den entsprechenden **AAPS** Discord- oder Facebook-Gruppen nach Beiträgen mit dem Stichwort "watch" zu suchen. Have a read of others' experiences, and post any specific questions if your query isn't answered by older posts.

## Full Android

Klingt attraktiv, oder? Wie dem auch sei, momentan experimentieren nur wenige Enthusiasten mit **AAPS**  auf einer Standalone Smartwatch. There are a limited number of smartwatches with a reasonable interface which also work well with standalone use of **AAPS** and your CGM app. Popular models include the LEMFO LEM 15 Pro and 16. Du musst die vollständige **AAPS** APK (die Apk, die normalerweise auf einem Smartphone installiert wird) anstelle der **AAPS** "wear" apk auf die Smartwatch laden.

Auch wenn es derzeit keinen eindeutigen Spezifikationen gibt, die erkennen lassen, ob eine Smartwatch als Standalone **AAPS** nutzbar ist, gibt es einige Parameter, die gute Indikatoren sind:

1) Android 12 oder höher. 2)  Die Möglichkeit zu haben das Zifferblatt aus dem "Square-Modus" zu holen, um Text zum einfacheren Lesen zu vergrößern. 3) Sehr gute Akkulaufzeit. 4) Gute Bluetooth-Reichweite.

Die meisten Frustrationen mit Standalone **AAPS**-Smartwatches entstehen aus der Interaktion mit einem winzigen Bildschirm, und der Tatsache, dass die aktuelle AAPS-Voll-App-Benutzeroberfläche nicht für eine Smartwatch konzipiert wurde. Durch das sehr eingeschränkte Display und kann ein Stift beim Editieren der **AAPS**-Einstellungen helfen. Einige der AAPS-Tasten sind möglicherweise auf dem Zifferblatt nicht sichtbar.

Ein weiteres Problem ist es eine Smartwatch mit langer Akkulaufzeit, die in der Regel klobig und dick sind, zu finden. Typische Probleme mit denen gekämpft werden sind Betriebssystem- und Energiespar-Einstellungen, das Starten von Sensoren über die Smartwatch, geringe Bluetooth-Reichweite (um die Verbindung mit Pumpe und Sensor zu halten) und fraglicher Wasserfestigkeit. Beispiele finden sich in den Fotos unten.

![grafik](../images/6d787373-bc0c-404d-89aa-54d3127c4a6f.png)

Wenn Du eine Standalone Smartwatch aufsetzen möchtest und Zusatzinformationen benötigst, lies' die Beiträge und Kommentare in der **AAPS** -Facebookgruppe (Suchwörter: “standalone” und “Lemfo”) oder auf Discord.

## Wear OS

**AAPS**-Code enthält eine App-Erweiterung, die auf [**Wear OS**-Smartwatches](https://wearos.google.com/#oem-carousel) installiert werden kann.

![Configuration > Communication with Wear enabled](../images/v4/Configuration/configuration_communication_wear.png)

Überprüfe, dass Deine Smartwatch die **AAPS**-[Anforderungen](#maintenance-android-version-aaps-version) erfüllt.

### Was _ist_ Wear OS?

Die ersten drei Smartwatch-Optionen setzen **Wear OS** als Betriebssystem voraus.

**Wear OS** ist das Betriebssystem, das auf einigen modernen Android Smartwatches läuft. Wenn die Smartwatch nur als _kompatibel_ mit Android und iOS beschrieben wird, bedeutet das nicht, dass sie Wear OS verwendet. Möglicherweise handelt es sich dann dabei um ein anderes Betriebssystem, das nicht mit **AAPS** kompatibel ist. To support installation and use of any version of **AAPS** or **AAPSClient**, a smartwatch must be running **Wear OS 3.0, 3.2 or 3.5** (Android 11, API level 30) **or newer**. Each Wear OS release follows the Android version it is based on: **Wear OS 3** is Android 11 (API level 30), **Wear OS 4** is Android 13 (API level 33), **Wear OS 5** is Android 14 (API level 34) and **Wear OS 6** is Android 16 (API level 36). Watches on Wear OS 2 cannot run **AAPS**.

Wenn Du die **AAPS** wear.apk auf Deiner **Wear OS**-Smartwatch installierst, kannst Du aus einer Vielzahl verschiedener **AAPS**-Ziffernblätter auswählen. Alternativ kannst Du auch das Standard-Ziffernblatt Deiner Smartwatch mit **AAPS** Informationen erweitern (sog. "complications"). Eine Komplikation ist jede Funktionalität, die zusätzlich zur Uhrzeit hinaus auf dem Zifferblatt angezeigt wird.

```{note}
Recent **Wear OS** changes progressively break the custom **AAPS** watchfaces (the higher the Wear OS version, the more severe), although **complications** keep working. Before buying or updating a watch, read [Wear OS watch face changes](#wearos-watchface-changes).
```


### Wie könnte meine Smartwatch aussehen?

Nach der [Installation von **AAPS** auf Deiner Smartwatch](../WearOS/WearOsSmartwatch.md), kannst Du automatisch, eines der speziellen **AAPS**-Zifferblätter auswählen. Bei den meisten Smartwatches drückst Du dazu so lange auf den Startbildschirm, bis dieser schrumpft, wischt dann nach rechts und kannst dann eine andere Anzeige auswählen:

![grafik](../images/67fd75f3-721c-438d-be01-1a8e03532290.png)

Dies sind die Standardanzeigen, die Bestandteil von **AAPS** sind. Es gibt [weitere Zifferblätter](#WearOS_changing-to-AAPS-watchface) und Du kannst auch [Komplikationen](#Watchfaces-complications) verwenden.

### Wie würde ich eine Wear OS Smartwatch im Alltag nutzen?

Weitere Details über die Smartwatches, deren Nutzung im Alltag und wie Du Deine eigenen Zifferblätter erstellst (und teilen kannst), findest Du im Abschnitt [Wear-AAPS auf einer Smartwatch](../WearOS/WearOsSmartwatch.md).

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

[AAPS Glucose Watch](https://apps.garmin.com/apps/3d163641-8b13-456e-84c3-470ecd781fb1) hat eine direkte **AAPS**-Integration. Es zeigt neben den Glukosewerten auch Daten über den Loop-Status (aktives Insulin, temporäres Basal) und sendet den Puls an **AAPS**. It is available in the ConnectIQ store; enable the **Garmin** plugin in **Configuration → Communication**. ![AAPS Glucose Watch watchface with numbered fields](../images/Garmin_WF-annotated.png)

1. Highest and lowest glucose values on the graph
2. Glucose change per minute
3. Insulin on board (IOB)
4. Time since the last glucose reading (minutes:seconds)
5. Temporary basal rate, as a percentage of the profile basal rate
6. Glucose graph of the last 2 hours
7. Aktueller Glukosewert



## Fitbit

```{warning}
Google is moving Fitbit into Google Health and is removing third-party apps and watch faces from Fitbit watches in the EU. Fitbit watchfaces are therefore **no longer a recommended option**, and buying a Fitbit for use with **AAPS** is not recommended.
```

For existing Fitbit watches, the [Nightscout webpages](https://nightscout.github.io/nightscout/wearable/#fitbit) list some monitoring-only options, such as [Glance](https://glancewatchface.com/). These are third-party watchfaces too, so the same EU restriction applies.

## Follower-Funktion

Diese Smartwatches können einige **AAPS**-Informationen anzeigen, andere benötigen dazu andere Zusatz-Apps.

Es gibt eine große Auswahl an erschwinglichen Smartwatches, die Glukosewerte anzeigen können. Nutzt Du Nightscout, findest Du einen guten Überblick über die verschiedenen Möglichkeiten auf den [Nightscout-Seiten](https://nightscout.github.io/nightscout/wearable/#).

Hier fassen wir einige der bei **AAPS**-Nutzenden populären Follower-Optionen zusammen:

(watches-xiaomi-amazfit)=
### Xiaomi und Amazfit Uhren

**WatchDrip+** is a community-developed companion app that displays glucose and loop data on various smartwatch models, mostly Xiaomi (_e.g._ Mi Band) and Amazfit brands:

![grafik](../images/4dba454b-f808-4e9e-bfc6-aba698e006f8.png)

Since version 0.5, **WatchDrip+** reads its data directly from **AAPS**, without xDrip+ as a relay. On the **AAPS** phone:

1. Enable **External Companion Apps** in **Configuration** > **Communication**, see [above](#watches-external-companion-apps). It provides the current glucose, delta, trend arrow, IOB and pump status.
2. Enable the **xDrip** plugin in **Configuration** > **Communication** and turn on **Send status to xDrip+** in its settings. It provides the IOB/COB status line, and the glucose graph on the watch fills in after a few readings.
3. If xDrip+ is installed on the phone, disable its **Broadcast Service API** (xDrip+ > Settings > Inter-app settings) so that the watch does not receive the data twice. If xDrip+ was only relaying data to the watch, you can uninstall it.

The refresh button of WatchDrip+ has no effect with **AAPS**: the data arrives with each new reading.


You can read more about them, including how to set them up, on the [WatchDrip+ website](https://bigdigital.home.blog/). Der Vorteil dieser Smartwatches ist die geringe Größe und der günstige Preis. Sie sind insbesondere für Kinder und Menschen mit dünnen Handgelenken interessant.

### Pebble Smartwatch

![grafik](../images/52032f3b-c871-4342-b8e7-659c285a39c8.png)

![grafik](../images/935d28bb-a909-4ca8-850d-6a765bd4fcde.png)


Pebble Smartwatches ([Produktion mittlerweile eingestellt](https://en.wikipedia.org/wiki/Pebble_(watch))) wurden von 2013 bis 2016 verkauft, und sind zum Teil gebraucht noch erhältlich. Fitbit übernahm das Pebble-Vermögen. Pebble-Nutzende können die Urchin Uhr verwenden, um Nightscout-Daten anzuzeigen. Informationen, die angezeigt werden: Aktives Insulin, die aktive temporäre Basalrate und Glukosewert-Vorhersagen. Wenn Du im "Open Loop" unterwegs bist, kannst Du mit IFTTT ein Applet erstellen, das Dir eine SMS oder eine Echtzeit-Benachrichtigung (pushover notification) schickt, wenn eine **AAPS**-Benachrichtigung eingegangen ist.

### [Bluejay Smartwatches](https://bluejay.website/)


![BlueJay U3 watch](../images/watches/bluejay_u3.png)


Dies ist eine besondere Technologie, die Glukosedaten **direkt** vom Dexcom Transmitter empfangen kann. It is not widely known that Dexcom G6/G7 transmitters actually broadcast the current glucose data on _two_ separate channels, a phone channel and a medical channel. The Bluejay watches can be set to receive glucose data on either channel, so if **AAPS** is using the phone channel, then the Bluejay watches can use the medical channel.

The key advantage is that the watch is independent of both the phone and the looping system. Beispiel: Wenn Du die Insulinpumpe und das **AAPS**-Smartphone am Strand oder im Freizeitpark trennst, und Du entfernst Dich vom **AAPS**-Smartphone, kannst Du trotzdem die Dexcom-Glukosewerte auf der BlueJay Smartwatch direkt empfangen.

The original **Bluejay GTS** is discontinued and cannot read the Dexcom G7. The later models (U1, then the current **U3**, sold as early access at the time of writing) are full Android watches running xDrip, which collect from the Dexcom G6 and G7 directly. The vendor describes the watch as a research tool, not for medical use. Reported disadvantages are that it does not always pick up a reading every 5 minutes and that the battery needs frequent charging. Check the [Bluejay website](https://bluejay.website/) for the current model and availability.

### Apple Watch

[Nightscout mit Deiner Smartwatch](https://nightscout.github.io/nightscout/wearable/#) folgen.

Die Apple Watch unterstützt jetzt eine direkte Verbindung zum G7 und kann gleichzeitig auch mit **AAPS** verwendet werden.

