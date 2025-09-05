# Smartwatches und AAPS

Mit verschiedenen Smartwatches können einige der in **AAPS** verfügbaren Informationen angezeigt oder Remote-Aktionen ausgeführt werden.

Eine direkte und vollständige **AAPS**-Steuerung (Pumpe und Sensor) über die Smartwatch ist mit „Full-Android-Smartwatches“ möglich. Sie sind in diesem Konstrukt wie ein kleines [Smartphone](./Phones.md).

Über einige Smartwatches können Behandlungen (oder mehr) eingegeben werden, das Smartphone bleibt dabei weiterhin für **AAPS** führend.

Smartwatches werden mehr und mehr mit **AAPS**,_sowohl_ für Erwachsene mit Diabetes, als Betreuende/Eltern von Kindern mit Diabetes, eingesetzt.

## Generelle Vorteile Smartwatches mit **AAPS** zu nutzen


Smartwatches können - je nach Modell - auf unterschiedliche Weise mit **AAPS** genutzt werden. Sie können **AAPS**ganz oder teilweise steuern oder einfach verwendet werden, um Glukosewerte, aktives Insulin und andere Parameter remote zu überprüfen.

Die Integration einer Smartwatch mit **AAPS** kann in vielen Situationen nützlich sein. Z.B. beim Auto- oder Motorradfahren oder bei sportlichen Aktivitäten. Für manche Menschen ist ein kurzer Blick (z. B. in Besprechungen, auf einer Party oder beim Abendessen) auf die Smartwatch deutlich diskreter als der Blick auf das Smartphone. Von einem Sicherheitsaspekt ist eine Smartwatch, wenn man unterwegs ist, besonders hilfreich. Das **AAPS**-Smartphone kann (z. b. in der Tasche) verstaut bleiben und AAPS kann über die Smartwatch gesteuert werden.

## Besondere Vorteile für **AAPS**-nutzende Eltern/Betreuende

Ist das **AAPS**-Smartphone in der Nähe des Kindes, kann der Betreuende die Smartwatch zur Kontrolle nutzen und Anpassungen über die Smartwatch vornehmen, ohne dass das **AAPS**-Smartphone berührt werden muss. Das kann besonders komfortabel sein, wenn das **AAPS**-Smartphone in einem Pumpengürtel versteckt getragen wird.

Eine Smartwatch kann entweder _zusätzlich_ oder als _Alternative_ zu den Smartphone-basierten Optionen verwendet werden, um remote zu steuern oder auch [nur zu folgen](../RemoteFeatures/FollowingOnly.md).

Ein weiterer Vorteil liegt darin, dass die Verbindung mit der Smartwatch per Bluetooth erfolgt (anders als ein Follower-Smartphone der Eltern/Betreuenden, das eine Internetverbindung über Mobilfunk oder WLAN benötigt) und so auch in Situationen ohne Internetverbindung (an abgelegenen Orten, auf einem Boot oder auf halber Höhe eines Berges) auf AAPS zugreifen kann. Wenn sich sowohl das **AAPS**-Smartphone, als auch die Smartwatch im gleichen WLAN befinden, kann auch die WLAN-Verbindung genutzt werden.

## Verschiedene Arten die Smartwatch mit AAPS zu nutzen

Derzeit gibt es fünf Möglichkeiten, Smartwatches mit **AAPS** zu verwenden. Diese werden in der folgenden Tabelle beschrieben: 

| Smartwatch-Setup              | Funktionalitäten                        | Voraussetzungen                                                                                                                                                                                                                                          |
| ----------------------------- | --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Stand-Alone                   | AAPS ohne Smartphone                    | Full-Android-Smartwatch (prüfe Android-Mindestanforderung)</br> auf der **app-fullRelease** läuft                                                                                                                                                        |
| Vollständige Remote-Steuerung | Die meisten AAPS-Funktionen             | Android **Wear OS**-Smartwatch(Android/API prüfen)</br>mit **wear-fullRelease**                                                                                                                                                                          |
| Remote-Steuerung              | AAPSClient-Funktionen                   | Android **Wear OS**-Smartwatch (Android/API prüfen)</br>mit **[wear-aapsclientRelease](https://github.com/nightscout/AndroidAPS/releases)**                                                                                                              |
| Remote-Steuerung              | Einige AAPSClient-Funktionen            | Einige Samsung, Fitbit und Garmin-Smartwatches</br>siehe unten.                                                                                                                                                                                          |
| Anzeige                       | Anzeigen einiger AAPSClient-Indikatoren | Viele Smartwatches (siehe [hier](https://bigdigital.home.blog/))</br>[xDrip+](https://github.com/nightscoutfoundation/xdrip/releases) und [WatchDrip+](https://bigdigital.home.blog/2022/06/16/watchdrip-a-new-application-for-xdrip-watch-integration/) |

## Bevor Du Dir eine Smartwatch kaufst …

Welches genau Modell Du kaufen solltest, hängt von den gewünschten Funktionalitäten ab. Nützliche Informationen findest Du auf der Seite [Smartphones](#Phones-list-of-tested-phones), die sowohl eine Liste der getesteten Smartphones, als auch einige Smartwatches enthält.

Zu den beliebten Smartwatch-Marken gehören Samsung Galaxy, Garmin, Fossil, Mi Band und Fitbit. Die verschiedenen Einsatzmöglichkeiten, die in der obigen Tabelle zusammengefasst sind, werden im Folgenden näher erläutert. Das soll Dir helfen, die Smartwatch auszuwählen, die am besten zu Deinen Bedürfnissen passt.

Wenn Du eine Smartwatch mit dem Ziel das **AAPS**-Smartphone remote steuern zu wollen anschaffst, solltest Du insbesondere darauf achten, dass beide Geräte kompatibel zueinander sind (besonders dann, wenn Du ein älteres oder ungewöhnliches Smartphone hast).

Wenn Du nur die Glukosewerte sehen möchtest, und darüber hinaus nicht mit **AAPS** interagieren möchtest, steht Dir eine größere Auswahl an einfachen, erschwinglichen Smartwatches zur Verfügung.

Der beste Weg, eine Smartwatch auszusuchen, ist in den entsprechenden **AAPS** Discord- oder Facebook-Gruppen nach Beiträgen mit dem Stichwort "watch" zu suchen. Lies und profitiere von den Erfahrungen anderer. Wenn Deine Frage nicht durch bestehende Beiträge beantwortet wird, stelle spezifische Fragen.

## Full Android

Klingt attraktiv, oder? Wie dem auch sei, momentan experimentieren nur wenige Enthusiasten mit **AAPS**  auf einer Standalone Smartwatch. Es gibt nur wenige Smartwatches mit einer vernünftigen Bedienoberfläche, die auch gut mit **AAPS** und Deiner CGM App funktionieren. Beliebte Modelle sind unter anderem der LEMFO LEM. Du musst die vollständige **AAPS** APK (die Apk, die normalerweise auf einem Smartphone installiert wird) anstelle der **AAPS** "wear" apk auf die Smartwatch laden.

Auch wenn es derzeit keinen eindeutigen Spezifikationen gibt, die erkennen lassen, ob eine Smartwatch als Standalone **AAPS** nutzbar ist, gibt es einige Parameter, die gute Indikatoren sind:

1) Android 11 oder höher. 2)  Die Möglichkeit zu haben das Zifferblatt aus dem "Square-Modus" zu holen, um Text zum einfacheren Lesen zu vergrößern. 3) Sehr gute Akkulaufzeit. 4) Gute Bluetooth-Reichweite.

Die meisten Frustrationen mit Standalone **AAPS**-Smartwatches entstehen aus der Interaktion mit einem winzigen Bildschirm, und der Tatsache, dass die aktuelle AAPS-Voll-App-Benutzeroberfläche nicht für eine Smartwatch konzipiert wurde. Durch das sehr eingeschränkte Display und kann ein Stift beim Editieren der **AAPS**-Einstellungen helfen. Einige der AAPS-Tasten sind möglicherweise auf dem Zifferblatt nicht sichtbar.

Ein weiteres Problem ist es eine Smartwatch mit langer Akkulaufzeit, die in der Regel klobig und dick sind, zu finden. Typische Probleme mit denen gekämpft werden sind Betriebssystem- und Energiespar-Einstellungen, das Starten von Sensoren über die Smartwatch, geringe Bluetooth-Reichweite (um die Verbindung mit Pumpe und Sensor zu halten) und fraglicher Wasserfestigkeit. Beispiele finden sich in den Fotos unten.

![grafik](../images/6d787373-bc0c-404d-89aa-54d3127c4a6f.png)

Wenn Du eine Standalone Smartwatch aufsetzen möchtest und Zusatzinformationen benötigst, lies' die Beiträge und Kommentare in der **AAPS** -Facebookgruppe (Suchwörter: “standalone” und “Lemfo”) oder auf Discord.

## Wear OS

**AAPS**-Code enthält eine App-Erweiterung, die auf [**Wear OS**-Smartwatches](https://wearos.google.com/#oem-carousel) installiert werden kann.

![Wear OS](../images/WearOS.png)

Überprüfe, dass Deine Smartwatch die **AAPS**-[Anforderungen](#maintenance-android-version-aaps-version) erfüllt.

### Was _ist_ Wear OS?

Die ersten drei Smartwatch-Optionen setzen **Wear OS** als Betriebssystem voraus.

**Wear OS** ist das Betriebssystem, das auf einigen modernen Android Smartwatches läuft. Wenn die Smartwatch nur als _kompatibel_ mit Android und iOS beschrieben wird, bedeutet das nicht, dass sie Wear OS verwendet. Möglicherweise handelt es sich dann dabei um ein anderes Betriebssystem, das nicht mit **AAPS** kompatibel ist. Eine Smartwatch sollte **Wear OS** und idealerweise Android 11 (oder neuer) nutzen, um die verschiedenen Versionen von **AAPS** oder dem **AAPSClient** voll nutzen zu können. Im Oktober 2024 war die aktuelle **Wear OS**-Version WearOS 5.0 (mit Android 13 als Basis).

Wenn Du die **AAPS** wear.apk auf Deiner **Wear OS**-Smartwatch installierst, kannst Du aus einer Vielzahl verschiedener **AAPS**-Ziffernblätter auswählen. Alternativ kannst Du auch das Standard-Ziffernblatt Deiner Smartwatch mit **AAPS** Informationen erweitern (sog. "complications"). Eine Komplikation ist jede Funktionalität, die zusätzlich zur Uhrzeit hinaus auf dem Zifferblatt angezeigt wird.


### Wie könnte meine Smartwatch aussehen?

Nach der [Installation von **AAPS** auf Deiner Smartwatch](../WearOS/WearOsSmartwatch.md), kannst Du automatisch, eines der speziellen **AAPS**-Zifferblätter auswählen. Bei den meisten Smartwatches drückst Du dazu so lange auf den Startbildschirm, bis dieser schrumpft, wischt dann nach rechts und kannst dann eine andere Anzeige auswählen:

![grafik](../images/67fd75f3-721c-438d-be01-1a8e03532290.png)

Dies sind die Standardanzeigen, die Bestandteil von **AAPS** sind. Es gibt [weitere Zifferblätter](#WearOS_changing-to-AAPS-watchface) und Du kannst auch [Komplikationen](#Watchfaces-complications) verwenden.

### Wie würde ich eine Wear OS Smartwatch im Alltag nutzen?

Weitere Details über die Smartwatches, deren Nutzung im Alltag und wie Du Deine eigenen Zifferblätter erstellst (und teilen kannst), findest Du im Abschnitt [Wear-AAPS auf einer Smartwatch](../WearOS/WearOsSmartwatch.md).

(Watchfaces-tizen)=

## Samsung Tizen

**AAPS** kann Daten an die [G-Watch App](https://play.google.com/store/apps/details?id=sk.trupici.g_watch) senden.

Bitte schaue in der spezialisierten [Facebook-Gruppe](https://www.facebook.com/groups/gwatchapp) nach den neuesten Informationen.

![G-Watch](../images/G-Watch.png)

(Watchfaces-garmin)=

## Garmin

Es gibt im Garmin ConnectIQ Store für die Garmin einige Zifferblätter mit [AAPS](https://apps.garmin.com/search?keywords=androidaps)-Integration.

![Garmin](../images/Garmin.png)

[AAPS Glucose Watch](https://apps.garmin.com/apps/3d163641-8b13-456e-84c3-470ecd781fb1) hat eine direkte **AAPS**-Integration. Es zeigt neben den Glukosewerten auch Daten über den Loop-Status (aktives Insulin, temporäres Basal) und sendet den Puls an **AAPS**. Das Zifferblatt ist im ConnectIQ Store verfügbar. Das notwendige **AAPS**-Plugin ist ab **AAPS** 3.2 verfügbar. ![Screenshot](../images/Garmin_WF-annotated.png)



## Fitbit

```{Warning}
Google ist dabei, Fitbit Produkte auslaufen zu lassen. Eigene Zifferblätter sind in Europa nicht mehr verfügbar (Du musst ein VPN nutzen). Jetzt eine Fitbit zu kaufen ist nicht zu empfehlen.
```

**AAPS** kann Daten an das [Sentinel](http://ryanwchen.com/sentinel.html)-Zifferblatt senden.

![grafik](../images/98620770-2fb3-47af-a13e-28af7db69096.png)



**"Sentinel"** ist ein Zifferblatt für die Fitbit-Smartwatch, das von [Ryan Chen](http://ryanwchen.com/sentinel.html) für seine Familie entwickelt wurde und kostenlos geteilt wird: Sense1/2, Versa 2/3/4. Das Zifferblatt ist nicht mit der Fitbit Luxe (als ein reiner Fitness-Tracker) kompatibel. Sentinel kann aus der [Fitbit-Mobile App](https://gallery.fitbit.com/details/5f75448f-413d-4ece-a53d-b969c6afea7c) heruntergeladen werden.

Damit wird es möglich Glukosewerten von bis zu drei Personen über Dexcom Share, Nightscout oder einer Kombination aus den beiden Datenquellen, zu folgen.

Wenn xDrip+ oder die SpikeApp im lokalen Webserver Modus laufen, können auch diese genutzt werden. Man kann individuelle Alarme einrichten und Ereignisse über die Nightscout-Careportal-Funktionalität direkt von der Smartwatch eintragen und so leichter die Glukosewerte, das aktive Insulin (IOB) und die wirksamen Kohlenhydrate (COB) im Auge behalten und auch Mahlzeit-Informationen (Kohlenhydrate und Bolus) eingeben.

Diese Informationen und Ereignisse erscheinen (inkl. der aktualisierten Werte für IOB und COB) in der Nightscout-Übersicht. Unterstützung aus der Community findest Du in der [Facebook-Gruppe, Sentinel](https://www.facebook.com/groups/3185325128159614).

Für Fitbit-Uhren gibt es noch andere Möglichkeiten, die sich allerdings auf die reine Anzeige beschränken. Dazu gehört auch [Glance](https://glancewatchface.com/). Diese zusätzlichen Optionen sind in den [Nightscout Webseiten](https://nightscout.github.io/nightscout/wearable/#fitbit) beschrieben.

## Follower-Funktion

Diese Smartwatches können einige **AAPS**-Informationen anzeigen, andere benötigen dazu andere Zusatz-Apps.

Es gibt eine große Auswahl an erschwinglichen Smartwatches, die Glukosewerte anzeigen können. Nutzt Du Nightscout, findest Du einen guten Überblick über die verschiedenen Möglichkeiten auf den [Nightscout-Seiten](https://nightscout.github.io/nightscout/wearable/#).

Hier fassen wir einige der bei **AAPS**-Nutzenden populären Follower-Optionen zusammen:

### **Xiaomi und Amazfit Uhren**

[Artem](https://github.com/bigdigital) hat die xDrip-Integration für verschiedene Smartwatch Modelle entwickelt, hauptsächlich für Xiaomi (_z. B._ MiBand) und Amazfit-Modelle:

![grafik](../images/4dba454b-f808-4e9e-bfc6-aba698e006f8.png)


Mehr dazu und auch über die Einrichtung kannst Du auf der Website [nachlesen](https://bigdigital.home.blog/). Der Vorteil dieser Smartwatches ist die geringe Größe und der günstige Preis. Sie sind insbesondere für Kinder und Menschen mit dünnen Handgelenken interessant.

### Pebble Smartwatch

![grafik](../images/52032f3b-c871-4342-b8e7-659c285a39c8.png)

![grafik](../images/935d28bb-a909-4ca8-850d-6a765bd4fcde.png)


Pebble Smartwatches ([Produktion mittlerweile eingestellt](https://en.wikipedia.org/wiki/Pebble_(watch))) wurden von 2013 bis 2016 verkauft, und sind zum Teil gebraucht noch erhältlich. Fitbit übernahm das Pebble-Vermögen. Pebble-Nutzende können die Urchin Uhr verwenden, um Nightscout-Daten anzuzeigen. Informationen, die angezeigt werden: Aktives Insulin, die aktive temporäre Basalrate und Glukosewert-Vorhersagen. Wenn Du im "Open Loop" unterwegs bist, kannst Du mit IFTTT ein Applet erstellen, das Dir eine SMS oder eine Echtzeit-Benachrichtigung (pushover notification) schickt, wenn eine **AAPS**-Benachrichtigung eingegangen ist.

### [Bluejay Smartwatches](https://bluejay.website/)


![grafik](../images/4d034157-b3d0-4dcb-98c8-fde0c2e7ad74.png)


Dies ist eine besondere Technologie, die Glukosedaten **direkt** vom Dexcom Transmitter empfangen kann. Es ist nicht so bekannt, dass ein Dexcom G6/G7-Transmitter tatsächlich die aktuellen Glukosedaten auf _zwei_ getrennten Kanälen überträgt, einem Smartphone-Kanal und einem medizinischen Kanal. Die Bluejay Uhren können so eingerichtet werden, dass sie Glukosedaten auf allen Kanälen erhalten. Wenn **AAPS ** den Smartphone-Kanal nutzt, dann können die Bluejay Uhren den medizinischen Kanal benutzen.

Sie ist derzeitig die einzige Smartwatch, die ohne Smartphone und Loop-System in der Nähe genutzt werden kann. So, for example, if you disconnect the pump and the **AAPS** phone at the beach or theme park, and are out of range of the **AAPS** phone, you can still get readings from your Dexcom directly to the Bluejay watch.

Bekannte Nachteile sind, dass sie nicht zuverlässig alle 5 Minuten neue Werte verarbeitet und dass der Akku nicht auszutauschen ist. Die Bluejay GTS Smartwatch läuft mit einer modifizierten Version der xDrip+ Software, während die Bluejay U1 mit der xDrip+-Vollversion läuft.

### Apple Watch

[Nightscout mit Deiner Smartwatch](https://nightscout.github.io/nightscout/wearable/#) folgen.

Die Apple Watch unterstützt jetzt eine direkte Verbindung zum G7 und kann gleichzeitig auch mit **AAPS** verwendet werden.

