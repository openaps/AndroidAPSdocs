# AAPS folgen (keine Interaktion mit dem AAPS-System)

Zusätzlich zu den Möglichkeiten zum Folgen _und_ der Remote-Steuerung von **AAPS**, die unter [Remote-Steuerung](docs/EN/remote-control.md)beschrieben werden, gibt mehrere zusätzliche Apps und Geräte, die die Community entwickelt hat, um einfach den Werten zu folgen (Glukosewerte und anderen Informationen), ohne mit AAPS zu interagieren.

Ein guter Überblick über die umfangreichen Optionen zum Folgen von **AAPS** ist auf der [Nightscout-Follower](https://nightscout.github.io/nightscout/downloaders/#) Webseite zu finden; wenn Du das Menü auf der linken Seite ausklappst:

![grafik](./images/dfa981c1-5a15-4498-88d2-0fd1462d8242.png)

Die häufigsten Strategien im Zusammenhang mit **AAPS** werden weiter unten erläutert.

## 1) Smartphone Apps

Dies sind einige der wichtigsten „Follower“-Apps, die von **AAPS**-Nutzenden verwendet werden. Alle diese Apps sind „kostenlos“:

A)  Dexcom Follow (Android/iOS)

B)  Nightguard (iOS)

C)  Nightwatch (Android)

D)  xDrip+ (Android)

E)  xDrip4iOS (iOS)

F)  Sugarmate (iOS)

G)  Spike (iOS)




### A) Dexcom Follow (Android und iOS)

![grafik](./images/ded350b0-6012-4104-b21c-5d5bfd91aa65.png)

●   Dexcom Follow ist mit vielen Smartphones kompatibel (sowohl Android als auch iPhone). Dexcom Follow kann, auch wenn Du nicht die offiziellen Dexcom App nutzt, dazu genutzt werden, Sensordaten zu empfangen.

●   Viele Betreuende kennen Dexcom Follow und finden die klare Benutzeroberfläche besser als etwas Kompliziertes.

● Dexcom Follow eignet sich besonders gut für Menschen (z. B. Lehrer/Großeltern), die sehr wenig über Diabetes und Glukosewerte wissen. Es hat anpassbare Alarme (Glukosewert, welcher Alarmsound abgespielt werden soll usw.). Alarme können bei Bedarf komplett abgeschaltet werden. Das kann z.B. in Situationen, in denen der Sensor noch nicht zuverlässig läuft und falsche tiefe Werte anzeigt, hilfreich sein.

#### Dexcom Follow konfigurieren: Schritt-für-Schritt-Anleitung

Wenn Du die inoffizielle Dexcom App BYODA für das Auslesen der Sensorwerte nutzt, kannst Du weitere Follower aus der BYODA App heraus einladen. Es können Einladungen an Dexcom Follow auch aus xDrip+ heraus gesendet werden (Einstellungen - Cloud-Upload - Dexcom Share Server Upload). Siehe Anleitung:

https://xdrip.readthedocs.io/en/latest/use/cloud/?h=#dexcom-share-server-upload

Mittlerweile können aus Drittanbieter-Apps keine Einladungs-Emails mehr an Dexcom-Follower verschickt werden. In xDrip+ wird die Einladungsanfrage nur zu einer „Einladung nicht gesendet“-Nachricht führen.

Du musst die offizielle Dexcom-App installieren, die Einladung senden und dann die offizielle App wieder deinstallieren.

Die Schritte dazu sind folgende:

1)  Installiere die offizielle “Dexcom-App" auf einem _beliebigen_ Smartphone (Android/iPhone). Das kann auch ein Follower-Smartphone sein, wenn es für Dich besser passt. 2)  Logge Dich mit Deinen Dexcom Nutzernamen und  Passwort ein. Nutze dazu die normalen Login-Daten, die Du auch für Dexcom Clarity nutzt (wenn Du ein Dexcom/Clarity Kunde sein solltest). Hast Du noch keinen Dexcom Login, gibt es an dieser Stelle die Möglichkeit einen neuen Login zu erstellen.   
3)  Wische durch die einleitenden Menüs. 4)  Wähle “Kein Code” als Sensorcode aus. 5)  Unter Transmitter-SN wähle "Manuell eingeben" und gib einen gültigen Transmitter-Code ein (z. B. den eines bereits abgelaufenen Transmitters, damit dieser sich nicht mit einen laufenden Transmitter in die Quere kommt). Das Format ist ein Abfolge von Zahlen und Buchstaben: “ZBZZZB” einer bestimmten Kombination. Daher ist es am einfachsten einen Code eines alten Transmitters zu verwenden. 6) Sobald die App versucht, den Transmitter und den Sensor zu finden, kannst Du Follower einladen: Wähle die kleinen drei Punkte oben links in der App aus und füge einen neuen Follower hinzu. Wenn einer Deiner Follower ein neues Samrtphone hat, kannst Du diesen Weg auch nutzen,  um ihm/ihr - sofern nötig - eine neue Einladung zu schicken. An der Stelle löscht Du die Person zunächst aus der Follower-Liste und verschickst dann eine neue Einladungs-E-Mail, die dann auf dem neunen Smartphone ankommt. 7)  Lade die Dexcom Follow App auf das Follower-Smartphone herunter (iPhone: App Store oder Android: Play) und installiere sie. Richte die Dexcom Follow App ein. Während der Einrichtung wirst Du dazu aufgefordert, die E-Mail mit der Follower-Einladung zu öffnen.    
8)  Jetzt kannst Du die offizielle Dexcom G6 App deinstallieren.

Je nachdem welche App Du verwendest, werden die Sensordaten für Dexcom Follow vom AAPS-Smartphone entweder direkt aus BYODA oder aus xDrip+ exportiert.


### B) Nightguard (iOS)

![grafik](./images/f2c7d330-9889-4526-9a5c-bbb012d804ab.png)

Vorteile (von Nutzenden gemeldet):

Im [App Store](https://apps.apple.com/us/app/nightguard/id1116430352) verfügbar, einfach, nutzerfreundliches Interface.

●   Knopf wischen oder schütteln des iPones zum Schlummern der Alarme für verschiedene Dauern (5 Minuten bis zu 24 Stunden)

●   Anpassbare Alarme (Hoch-/Niedrig-Alarm, keine Sensordaten seit 15-45 Minuten).

●   Schneller Anstieg/Fall für 2-5 aufeinanderfolgende Sensordaten (Du entscheidest). Du bestimmst auch das Delta zwischen zwei Sensorwerten

●   Intelligentes Schlummern, sodass es keinen Alarm gibt, wenn der Glukosewert sich in die richtige Richtung bewegt

●   Es gibt einen Reiter "Care" (Behandlungen) auf dem neue temporäre Ziele für einen bestimmten Zeitraum gesetzt, temporäre Ziele gestoppt und Kohlenhydrate eingegeben werden können.

Nachteile (von Nutzenden gemeldet)

● Nur für iOS verfügbar

●   Das temporäre Ziel wird immer als 5 mmol angezeigt, unabhängig davon welche Höhe eingestellt wurde

●   Die konkrete temporäre Basalrate wird nicht angezeigt, auch wenn ein laufendes temporäres Basal angezeigt wird

### C) Nightwatch (Android)

![grafik](./images/855c3a74-e612-4a6f-8b63-18d286ea0a3f.png)


●   Nightwatch bezeichnet sich selbst als ein Nightscout-Client und es überwacht die Nightscout-Glukosewerte des Nutzenden auf einem Android Smartphone oder Tablet.

●   Die App kann aus [Google Play](https://play.google.com/store/apps/details?id=se.cornixit.nightwatch) heruntergeladen werden und zeigt die Glukosewerte in Echtzeit an.

●   Die Nutzenden können über anpassbare akustische Hoch- bzw- Tief Alarme alarmiert werden.

●   Glukosewerte können sowohl in mmol/L als auch in mg/dl angezeigt werden.

●   Android 5.0 oder höher sind vorausgesetzt.

●   Es hat eine dunkle Benutzeroberfläche, große Anzeigen und Schaltflächen für die Benutzung in der Nacht.

### D) xDrip+ (Android)

Du kannst xDrip+ als Follower-App nutzen.

#### Wenn Du Nightscout nutzt ...

Konfiguriere in xDrip+ Nightscout Follower als Datenquelle. Du kannst damit Glukosewerte und Behandlungsdaten empfangen, nicht jedoch das Basal.

![grafik](./images/remote_control_and_following/xDrip+_Nightscout_Follower.png)

#### Wenn Du Nightscout nicht nutzt (Datenquelle: xDrip+ Sync Follower) ...

Wenn AAPS die Informationen und Daten über xDrip+ erhält - xDrip+ kann diese Daten wiederum auch über andere Apps (BYODA, Juggluco, ...) erhalten - kann das Master-Smartphone Glukosewerte, Behandlungen und Basalraten mit xDrip+ Followern teilen.

![grafik](./images/remote_control_and_following/xDrip+_Master_Sync.png)

#### Wenn Du Nightscout nicht nutzt (Datenquelle: Companion App) ...

Wenn Deine AAPS-Datenquelle nicht xDrip+ sein sollte, kannst Du die Glukosewerte auch aus der Companion-App als Datenquelle anzeigen lassen. Glukosewerte, Behandlungen und Basalraten können über das Master-Smartphone mit xDrip+-Followern geteilt werden.

![grafik](./images/remote_control_and_following/xDrip+_Companion_Sync.png)

### E) xDrip4iOS/Shuggah (iOS)

![grafik](./images/remote_control_and_following/xdrip4ios.jpg)

xDripSwift stammt von der ursprünglichen xDrip-App ab, wurde auf iOS portiert und entwickelte sich dann weiter zu "xDrip for iOS" (**xDrip4iOS** ).

Eine Version von **xDrip4iOS** ist im Apple Store unter dem Namen **Shuggah** verfügbar.

```{admonition} Further detail about how to attempt to obtain the original **xDrip4iOS** app
:class: dropdown
Die [xDrip4iOS Facebook-Gruppe](https://www.facebook.com/groups/853994615056838/announcements) ist die wichtigste Community-Unterstützung für xDrip4iOS und Shuggah. **xDrip4iOS** kann sich mit vielen verschiedenen CGM-Systemen und -Transmittern verbinden und Glukosewerte, Diagramme und Statistiken anzeigen und Alarme auslösen. Es kann auch zu Nightscout hochladen oder als [Follower-App für Nightscout](https://xdrip4ios.readthedocs.io/de/latest/connect/follower/) fungieren. Die Schwierigkeit besteht allerdings darin, die **xDrip4iOS**-App für Dein Smartphone zu bekommen. 

"Wie bekomme ich **xDrip4iOS** für mein iPhone?"
Es gibt zwei Möglichkeiten:

1. Wenn Du einen Mac und einen Apple Developer Account (99 EUR/USD pro Jahr) hast, kannst Du Dein eigenes xDrip4iOS erstellen, indem Du den folgenden Anweisungen folgst:

https://xdrip4ios. eadthedocs. o/de/latest/install/build/

Wenn Du möchtest, kannst Du dann zu einem Herausgeber ("releaser") werden, einen persönlichen Testflight xDrip4iOS mit bis zu 100 anderen Personen teilen, um ihnen damit zu helfen:
https://xdrip4ios. eadthedocs.io/.../personal_testflight/

2. Du bist der [xDrip4iOS Facebook-Gruppe](https://www.facebook. om/groups/853994615056838/announcements) beigetreten und verfolgst die Beiträge… warte darauf, dass jemand eine Einladung zu seinem eigenen Testflight-Release in der Gruppe anbietet. **Du solltest nicht um eine Einladung zur App** bitten (lies die Gruppenregeln). 

Einfacher ist es deswegen, die **Shuggah**-App herunterzuladen. 
```

#### [Shuggah](https://apps.apple.com/sa/app/shuggah/id1586789452)

App:

![grafik](./images/03fc0c6a-067a-40ea-8be3-c66d4ce8b5d9.png)

![grafik](./images/fae3ec63-2c2c-4152-ab42-97f9744a8f36.png)

"Was ist Shuggah?" Eine Gruppe ukrainischer Entwickler nahm den xDrip4iOS Projektcode (der öffentlich auf Github verfügbar ist) und veröffentlichte ihn unter einem Firmenkonto im App Store (die App ist kostenlos, und die Absichten sind gut). Die App musste leicht angepasst werden, um eine Datenschutzerklärung und einen Haftungsausschluss hinzuzufügen, und so durch die Überprüfung zu kommen. Der Rest der App sollte identisch zu xDrip4iOS sein. Das Shuggah-Release wird nicht von den xDrip4iOS Entwicklern verwaltet, daher kann nicht garantiert werden, dass es wie xDrip4iOS funktionieren wird, dass es zum gleichen Zeitpunkt aktualisiert wird oder dass Apple es nicht irgendwann aus dem App Store entfernen wird.

Die [xDrip4iOS Facebook-Gruppe](https://www.facebook.com/groups/853994615056838/announcements) unterstützt xDrip4iOS, Shuggah und die zugehörige Apple Watch App.

### F) Sugarmate (iOS)

![grafik](./images/340cd555-a9e0-4a20-a131-36c078f5b8ea.png)

![grafik](./images/21b83c41-85c6-4619-a702-a65450768855.png)


[Sugarmate](https://sugarmate.io/) kann auf iPhones aus dem App Store heruntergeladen werden. Sugarmate ist kompatibel mit: ● Apple iPhone (Version 13.0 oder neuer) ● Apple iPad (Version 13.0 oder neuer) ● Google Android (Speichere die Web-App auf Deinem Startbildschirm)

Es wurde von Sugarmate-Nutzenden berichtet, dass es in den USA mit Apple CarPlay genutzt werden kann, um Glukosewerte während des Fahrens anzuzeigen. Ob das in Ländern außerhalb der USA auch möglich ist, ist noch nicht geklärt. Wenn Du mehr dazu wissen solltest, ergänze Deine Informationen hier in der Dokumentation, indem Du einen Pull-Request (link), der schnell gemacht ist, machst.


### G)  [Spike](https://spike-app.com/) (iOS)

![grafik](./images/1129ba00-8159-4940-936e-76fd4ae45a2d.png)

Spike kann sowohl aus Hauptempfänger (Receiver) als auch als Follower-App verwendet werden. Es hat eine Glukosewert-Anzeige, Alarme und aktives Insulin im Funktionsumfang. Die Website und die App werden nicht mehr weiterentwickelt. Hintergründe dazu, findest Du [hier](https://spike-app.com/#features2). Support bekommst Du auf [Facebook](https://www.facebook.com/groups/1973791946274873) oder [Gitter](https://gitter.im/SpikeiOS/Lobby).

Um Spike zu installieren, schlage [hier](https://spike-app.com/#installation) nach

## 2) Smartwatches zur **AAPS Überwachung** (vollständige Profilinformationen oder nur Glukosewerte), wobei **AAPS** auf einem Smartphone läuft.

Smartwatch-Optionen, die auch die Interaktion mit **AAPS** ermöglichen, sind im Abschnitt ["AAPS remote steuern"](remote-control.md) der Dokumentation beschrieben.

Es gibt eine große Auswahl an erschwinglichen Smartwatches, die Glukosewerte anzeigen können. Nutzt Du Nightscout, findest Du einen guten Überblick über die verschiedenen Möglichkeiten auf den [Nightscout-Seiten](https://nightscout.github.io/nightscout/wearable/#).

Hier fassen wir einige der bei **AAPS**-Nutzenden populären Follower-Optionen zusammen:

### a) **Xiaomi und Amazfit Smartwatches**

[Artem](https://github.com/bigdigital) hat die xDrip-Integration für verschiedene Smartwatch Modelle entwickelt, hauptsächlich für Xiaomi (_z. B._ MiBand) und Amazfit-Modelle:

![grafik](./images/4dba454b-f808-4e9e-bfc6-aba698e006f8.png)


Mehr dazu kannst Du auf seiner Website [nachlesen](https://bigdigital.home.blog/). Der große Vorteil dieser Smartwatches sind neben der Größe auch deren günstiger Preis (das Xiaomi Mi Band 5 hat einen Verkaufspreis von €44,99 EUR). Sie sind insbesondere für Kinder und Menschen mit dünnen Handgelenken interessant.

### b) Pebble Watch

![grafik](./images/52032f3b-c871-4342-b8e7-659c285a39c8.png)

![grafik](./images/935d28bb-a909-4ca8-850d-6a765bd4fcde.png)


Pebble Smartwatches ([Produktion mittlerweile eingestellt](https://en.wikipedia.org/wiki/Pebble_(watch))) wurden von 2013 bis 2016 verkauft, und sind zum Teil gebraucht noch erhältlich. Fitbit übernahm das Pebble-Vermögen. Pebble-Nutzende können die Urchin Uhr verwenden, um Nightscout-Daten anzuzeigen. Informationen, die angezeigt werden: Aktives Insulin, die aktive temporäre Basalrate und Glukosewert-Vorhersagen. Wenn Du im "Open Loop" unterwegs bist, kannst Du mit IFTTT ein Applet erstellen, das Dir eine SMS oder eine Echtzeit-Benachrichtigung (pushover notification) schickt, wenn eine **AAPS**-Benachrichtigung eingegangen ist.

### c) [BlueJay GTS Smartwatch](https://bluejay.website/shop/product/bluejay-gts-26)


![grafik](./images/4d034157-b3d0-4dcb-98c8-fde0c2e7ad74.png)


Dies ist ein besondere Technologie, die Glukosedaten **direkt** vom Dexcom G6-Transmitter empfangen kann. Es ist nicht so bekannt, dass ein Dexcom G6-Transmitter tatsächlich die aktuellen Glukosedaten auf _zwei_ getrennte Kanäle überträgt, einem Smartphone-Kanal und einem Pumpen-Kanal. Die BlueJay GTS Uhr nutzt eine angepasste xDrip+-Software und kann so eingerichtet werden, dass die Glukosewerte auf jedem Kanal empfangen werden können, falls **AAPS ** den Smartphone-Kanal belegt, kann die BlueJay GTS den Pumpen-Kanal nutzen.

Die Bluejay GTS Smartwatch ist klein, wasserdicht und preiswert (derzeit €126 EUR) und kann in Großbritannien bestellt werden. Sie ist derzeitig die einzige Smartwatch, die ohne Smartphone und Loop-System in der Nähe genutzt werden kann. Beispiel: Wenn Du die Insulinpumpe und das **AAPS** -Smartphone am Strand oder im Wasserpark trennst, und Du entfernst Dich vom AAPS-Smartphone, kannst Du trotzdem die G6-Glukosewerte auf der BlueJay Smartwatch direkt empfangen.

Bekannte Nachteile sind, dass sie nicht zuverlässig alle 5 Minuten neue Werte verarbeitet und dass der Akku nicht auszutauschen ist. Die BlueJay GTS Smartwatch nutzt eine angepasste xDrip+-Software und funktioniert derzeit nicht mit anderen Dexcom-Versionen (G7) oder den Libre Sensoren.

### d) Apple Watch

[Nightscout mit Deiner Smartwatch](https://nightscout.github.io/nightscout/wearable/#) folgen:

Zu den Optionen gehören Nightguard, Sugarmate, Gluco-Tracker, und Loop Follow.


## 3) Geräte, um AAPS zu folgen

Mögliche Geräte sind: A) M5 Stack/M5 StickC

B)  SugarPixel

C)  PC (TeamViewer)



### A) M5Stack


![grafik](./images/061edb52-56d2-45f4-b3da-82b2036d7bc6.png)




Der [M5Stack](https://github.com/mlukasek/M5_NightscoutMon/wiki) ist eine kleine Box, die für verschiedene Anwendungen programmiert werden kann. Eine dieser Anwendungen ist die Anzeige von Glukosewerten, den entsprechenden Verläufen, den wirkenden Kohlenhydraten und des aktiven Insulins. Es ist in einem Plastikgehäuse untergebracht und hat neben einem Farb-Display auch einen Micro-SD-Karten-Steckplatz, 3 Tasten, einen Lautsprecher und einen internen Akku. Es ist ein großartiger Glukose-Monitor und ist, wenn Du eine Nightscout-Seite hast, recht einfach einzurichten. Normalerweise wird er im WLAN zu Hause genutzt, aber es gibt auch einige Menschen, die ihn unterwegs auf dem Motorrad mit dem Smartphone-Hotspot verwenden.

### B) SugarPixel

SugarPixel ist ein Gerät, dass als Zweitanzeige für Glukosewerte und Alarme genutzt wird. Es wird mit der Dexcom App oder der Nightscout App auf dem Smartphone verbunden und man kann dann damit die Glukosewerte permanent verfolgen. Das Gerät zeigt die Glukosewerte in Echtzeit an. Dieser CGM-Hardware-Monitor kann unglaublich laute Zufallstöne für Alarme, und auch Vibrationsalarme für Hörgeschädigte erzeugen, hat verschiedene Einstellmöglichkeiten für die Anzeige und ein natives "Multi-User-Following".

![grafik](./images/39137beb-17cc-4c87-98b7-cf1831d484cb.png)

![grafik](./images/87883ebb-9683-4aa8-8014-49c2ca902c93.png)

●   SugarPixel hat verschiedene Anzeigemöglichkeiten in mg/dl und mmol/l und kann Glukosewerte - wenn benötigt - in verschiedenen Farben anzeigen. ●   In der Standardanzeige wird der Glukosewert, ein Trendpfeil und die Veränderung (Delta) angezeigt. Delta ist die Veränderung + oder - seit dem letzten Messwert. ● SugarPixel kann für dunkle Umgebungen gedimmt werden. Es eignet sich damit auch für die Anzeige der Glukosewert und die Uhrzeit auf dem Nachttisch. ●   Die SugarPixel "xolour"-Anzeige nutzt die gesamte Fläche, um mit einer einzigen Farbe den Glukosewert darzustellen. Damit kann man die Glukosewerte auch auf große Entfernungen durch das Fenster erkennen, während im Hof, qauf der Terrasse oder im Planschbecken oder Pool gespielt wird. ●   Die "Big BG"-Anzeige ist Brillen- und Kontaktlinsen-Tragenden zu empfehlen.


### C) PC (TeamViewer)
Zur Remote-Fehlerbehebung hat sich für einige Konstellationen ein Fernüberwachungs-Tool wie z. B. [TeamViewer](https://www.teamviewer.com/) bewährt.


 





