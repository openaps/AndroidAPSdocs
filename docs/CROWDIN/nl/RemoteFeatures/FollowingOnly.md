# AAPS volgen (geen interactie met het AAPS-systeem)

Naast de vele mogelijkheden om **AAPS** op afstand te bedienen _en_ te volgen, die beschreven staan bij [bediening op afstand](../RemoteFeatures/RemoteControl.md), heeft de community nog meer apps en apparaten ontwikkeld om alleen waarden te volgen (glucosewaarden en andere informatie), zonder interactie met **AAPS**.

Een goed overzicht van de vele mogelijkheden om **AAPS** te volgen staat op de webpagina [Nightscout follower](https://nightscout.github.io/nightscout/downloaders/#).

```{contents} Table of contents
:depth: 1
:local: true
```

De meest gebruikte manieren om te volgen in combinatie met **AAPS** worden hieronder in meer detail uitgelegd.

## Smartphone-apps

```{contents} These are some of the main “follower” apps used by **AAPS** users. All of these apps are “free”: 
:depth: 1
:local: true
```

### Dexcom Follow ([Android](https://play.google.com/store/apps/details?id=com.dexcom.follow.region2.mgdl) en [iOS](https://apps.apple.com/fr/app/dexcom-follow-mg-dl-dxcm2/id1032203080))

![Afbeelding](../images/ded350b0-6012-4104-b21c-5d5bfd91aa65.png)

* Dexcom Follow werkt op veel verschillende telefoons (zowel Android als iPhone). Je kunt Dexcom Follow ook gebruiken als je niet de officiële Dexcom-app gebruikt om sensorgegevens te ontvangen.

* Veel verzorgers kennen Dexcom Follow en geven de voorkeur aan de duidelijke interface boven iets ingewikkelders.

* Dexcom Follow is erg geschikt voor leraren, grootouders en mensen die weinig weten van diabetes en glucosewaarden. Het heeft instelbare alarmen (BG-niveau, welk geluid er klinkt, enz.). Alarmen kunnen indien nodig helemaal worden uitgezet. Dat is erg handig als je sensor nog aan het inlopen is en veel valse lage waarden geeft.

#### Dexcom Follow instellen: handleiding

Als je de onofficiële Dexcom-app BYODA gebruikt om sensorgegevens te ontvangen, kun je misschien vanuit de BYODA-app uitnodigingen naar volgers sturen.

Je kunt vanuit apps van derden geen uitnodigingsmails meer naar Dexcom-volgers sturen. In xDrip geeft het uitnodigingsverzoek alleen de melding “invite not sent”.

Je moet de officiële Dexcom-app installeren, de uitnodiging versturen en daarna de officiële app weer verwijderen.

De stappen zijn als volgt:

1)  Installeer de officiële “Dexcom”-app op _een willekeurige_ smartphone (Android/iPhone). Dit kan ook de telefoon van de volger zijn, als dat makkelijker is. 2)  Log in met je Dexcom-gebruikersnaam en -wachtwoord. Dit zijn dezelfde inloggegevens die je voor Dexcom Clarity gebruikt, als je al klant bent bij Dexcom/Clarity. Als je nog geen Dexcom-account hebt, kun je op dit moment een nieuw account aanmaken.   
3)  Swipe door de introductieschermen. 4)  Kies “no code” (geen code) als sensorcode. 5)  Kies bij Transmitter SN “enter manually” (handmatig invoeren) en voer een geldige transmittercode in. Gebruik bij voorkeur de code van een van je verlopen transmitters, als je die weet. Zo stoort het niet met je huidige transmitter. De codes hebben een vast formaat van cijfers en letters: “NLNNNL”, en alleen bepaalde combinaties zijn geldig. Het is dus het makkelijkst om een code te gebruiken waarvan je weet dat die geldig is. 6)  Zodra de app de transmitter en sensor probeert te vinden, kun je volgers uitnodigen: tik op de drie puntjes linksboven in de app en voeg een nieuwe volger toe. Dit kun je ook gebruiken als een van je volgers een nieuwe telefoon heeft en een nieuwe uitnodiging nodig heeft. Je kunt de volger hier uit de lijst verwijderen en een nieuwe uitnodigingsmail sturen voor de nieuwe telefoon. 7)  Installeer op de telefoon van de volger Dexcom Follow uit de App Store (iPhone) of Play Store (Android). Stel de Dexcom Follow-app in. Je wordt gevraagd je e-mail te openen en de uitnodiging om volger te worden te zoeken.    
8)  Nu kun je de officiële Dexcom G6-app verwijderen.

Voor Dexcom Follow worden de sensorgegevens dan vanaf de **AAPS**-telefoon geëxporteerd, direct vanuit BYODA of vanuit xDrip, afhankelijk van welke app je gebruikt.


### [Nightguard](https://apps.apple.com/fr/app/nightguard/id1116430352) (iOS)

![Afbeelding](../images/f2c7d330-9889-4526-9a5c-bbb012d804ab.png)

Voordelen (volgens gebruikers):

* Beschikbaar in de [App Store](https://apps.apple.com/us/app/nightguard/id1116430352), eenvoudige en gebruiksvriendelijke interface.

* Swipe de knop of schud de telefoon om alarmen te snoozen voor verschillende tijden, van 5 min tot 24 uur

* Alarmen zijn aan te passen (hoog, laag, gemiste metingen als er 15–45 minuten geen gegevens zijn).

* Snelle stijging/daling over 2–5 opeenvolgende metingen (je kiest zelf). Je kunt ook het verschil (delta) tussen twee losse metingen kiezen

* Slimme snooze: geen alarm als de waarden de goede kant op gaan

* Er is een tabblad Care waarmee je blijkbaar een nieuw tijdelijk streefdoel voor een bepaalde duur kunt instellen, het tijdelijk streefdoel kunt verwijderen of koolhydraten kunt invoeren.

Nadelen (volgens gebruikers)

* Alleen beschikbaar voor iOS

* Het tijdelijk streefdoel (TT) wordt altijd als 5 mmol getoond, welk TT-niveau ook is ingesteld

* Toont nooit de tijdelijke basaalstand, ook al toont het TB

### [Nightwatch](https://play.google.com/store/apps/details?id=se.cornixit.nightwatch) (Android)

![Afbeelding](../images/855c3a74-e612-4a6f-8b63-18d286ea0a3f.png)


* Nightwatch noemt zichzelf een Nightscout-client en bewaakt de Nightscout-glucosewaarden van de gebruiker op een Android-telefoon of -tablet.

* De app kun je downloaden uit [Google Play](https://play.google.com/store/apps/details?id=se.cornixit.nightwatch) en toont BG-gegevens in realtime.

* De gebruiker kan gewaarschuwd worden met aangepaste, luide alarmen voor laag en hoog.

* BG-gegevens kun je bekijken in mmol/l of mg/dl.

* Android 5.0 of hoger is nodig.

* Het heeft een donkere interface, grote waarden en knoppen, gemaakt voor gebruik 's nachts.

### xDrip (Android)

Je kunt xDrip als volger gebruiken.

#### Met Nightscout

Stel xDrip in als Nightscout-volger. Je ontvangt BG en behandelingen, geen basaal.

![Afbeelding](../images/remote_control_and_following/xDrip+_Nightscout_Follower.png)

#### Zonder Nightscout - xDrip als BG-bron

Als xDrip de gegevensbron van **AAPS** is (of als xDrip ook BG kan ontvangen van een andere app zoals BYODA, Juggluco, ...), kun je het op de master-telefoon gebruiken om gegevens te delen met xDrip-volgers. Die zien dan BG, behandelingen en basaalstanden.

![Afbeelding](../images/remote_control_and_following/xDrip+_Master_Sync.png)

#### Zonder Nightscout - xDrip als BG-companion-app

Als xDrip niet de gegevensbron van **AAPS** is, maar je BG-gegevens kunt tonen via de gegevensbron Companion App, kun je het op de master-telefoon gebruiken om gegevens te delen met xDrip-volgers. Die zien dan BG, behandelingen en basaalstanden.

![Afbeelding](../images/remote_control_and_following/xDrip+_Companion_Sync.png)

### xDrip4iOS (iOS)

![Afbeelding](../images/remote_control_and_following/xdrip4ios.jpg)

xDripSwift was created from porting the original xDrip app to iOS and evolved into "xDrip for iOS", written as **xDrip4iOS**.

```{admonition} Further detail about how to attempt to obtain the original **xDrip4iOS** app
:class: dropdown
De [xDrip4iOS Facebook-groep](https://www.facebook.com/groups/853994615056838/announcements) is de belangrijkste community voor hulp bij xDrip4iOS en Shuggah. **xDrip4iOS** kan verbinden met veel verschillende CGM-systemen en transmitters. Het toont bloedglucosewaarden, grafieken en statistieken en geeft ook alarmen. Het kan ook naar Nightscout uploaden of werken als [volg-app voor Nightscout](https://xdrip4ios.readthedocs.io/en/latest/connect/follower/). 

"Hoe krijg ik **xDrip4iOS** op mijn iPhone?"
Er zijn twee mogelijkheden:

1. Als je een Mac en een Apple Developer-account hebt (99 EUR/USD per jaar), kun je xDrip4iOS zelf bouwen door [de instructies te volgen](https://xdrip4ios.readthedocs.io/en/latest/install/build/).

Als je wilt, kun je daarna een "releaser" worden en [een persoonlijke Testflight van xDrip4iOS delen](https://xdrip4ios.readthedocs.io/en/latest/install/personal_testflight/) met maximaal 100 andere mensen om hen te helpen.

2. Word lid van de [xDrip4iOS Facebook-groep](https://www.facebook.com/groups/853994615056838/announcements) en lees de vastgezette berichten over hoe je de app nu kunt krijgen. **Vraag niet om een uitnodiging voor de app** (lees de regels van de groep).
```



![Afbeelding](../images/fae3ec63-2c2c-4152-ab42-97f9744a8f36.png)

"Wat is **Shuggah**?" Een groep Oekraïense ontwikkelaars heeft de projectcode van xDrip4iOS (die openbaar op GitHub staat) gekopieerd en via een bedrijfsaccount in de App Store uitgebracht. De Shuggah-versie wordt op geen enkele manier beheerd door de ontwikkelaars van xDrip4iOS.

De [xDrip4iOS Facebook-groep](https://www.facebook.com/groups/853994615056838/announcements) geeft hulp bij xDrip4iOS en de bijbehorende Apple Watch-apps.

### [Sugarmate](https://apps.apple.com/fr/app/sugarmate/id1111093108) (iOS)

![Afbeelding](../images/340cd555-a9e0-4a20-a131-36c078f5b8ea.png)

![Afbeelding](../images/21b83c41-85c6-4619-a702-a65450768855.png)


[Sugarmate](https://sugarmate.io/) kun je voor iPhone downloaden uit de App Store. Sugarmate werkt met:
* Apple iPhone (softwareversie 13.0 of hoger nodig)
* Apple iPad (softwareversie 13.0 of hoger nodig)
* Google Android (sla de web-app op je startscherm op)

Gebruikers van Sugarmate melden dat je het in de VS met Apple CarPlay kunt gebruiken om glucosewaarden te tonen tijdens het rijden. Het is nog niet bekend of dit ook in landen buiten de VS werkt. If you know more about this, please add details in here to the documentation by completing a [pull request](../SupportingAaps/HowToEditTheDocs.md), which is quick and easy to do.


### [Spike](https://spike-app.com/) (iOS)

![Afbeelding](../images/1129ba00-8159-4940-936e-76fd4ae45a2d.png)

Spike kan gebruikt worden als hoofdontvanger of als volg-app en toont BG, alarmen, IOB en meer.

De website en de app worden niet meer verder ontwikkeld. Hulp vind je op [Facebook](https://www.facebook.com/groups/1973791946274873) en [Gitter](https://gitter.im/SpikeiOS/Lobby).

## Smartwatches voor het **volgen van AAPS** (volledige profielgegevens, of alleen glucose) terwijl **AAPS** op een telefoon draait.

Zie [hier](../Getting-Started/Watches.md).


## Apparaten om AAPS te volgen

```{contents} Devices include:
:depth: 1
:local: true
```

### M5Stack

![Afbeelding](../images/061edb52-56d2-45f4-b3da-82b2036d7bc6.png)

De M5Stack is een klein doosje dat voor veel toepassingen geprogrammeerd kan worden. Het project van Martin, [M5Stack NightscoutMon](https://github.com/mlukasek/M5_NightscoutMon/wiki), toont sensorglucosewaarden en trends, IOB en COB. Het zit in een plastic doosje met een kleurenscherm, een micro-SD-kaartsleuf, 3 knoppen, een luidspreker en een interne batterij. Het is een goede bloedglucosemonitor en vrij makkelijk in te stellen als je een Nightscout-account hebt. Meestal gebruiken mensen het op hun wifi thuis, maar sommige gebruikers melden dat ze het als scherm op de motor gebruiken, via een wifi-hotspot van hun telefoon.

### SugarPixel

SugarPixel is een apparaat dat als tweede scherm met alarmen dient voor continue glucosemonitoring. Het werkt samen met de Dexcom-app of de Nightscout-app op de smartphone van de gebruiker. Het apparaat toont bloedglucosewaarden in realtime. Deze CGM-monitor heeft geluidsalarmen met willekeurige tonen (die erg luid zijn), trilalarmen voor slechthorenden, instelbare weergaveopties en volgen door meerdere gebruikers als standaardfunctie.

![Afbeelding](../images/39137beb-17cc-4c87-98b7-cf1831d484cb.png)

![Afbeelding](../images/87883ebb-9683-4aa8-8014-49c2ca902c93.png)

* SugarPixel heeft meerdere weergaveopties in mg/dl en mmol/l die je aan je wensen kunt aanpassen, met glucosewaarden in kleurcodes.
* De standaardweergave toont BG, trendpijl en delta. Delta is de verandering (+ of -) ten opzichte van de vorige meting.
* SugarPixel kan worden aangepast voor gebruik bij weinig licht met de weergave BG and Time. Zo ziet de gebruiker op het nachtkastje de BG-waarde en de huidige tijd.
* De kleurweergave van SugarPixel gebruikt het hele scherm om één kleur te tonen die bij de BG-waarde hoort. Zo kan de gebruiker de BG-waarden op afstand door het raam zien, bijvoorbeeld tijdens het buiten spelen in de tuin, op het terras of in het zwembad.
* De weergave Big BG is handig naast het bed voor gebruikers die een bril of contactlenzen dragen.

### Nightscout Clock op Ulanzi TC001

**Nightscout Clock** is opensourcesoftware die draait op het apparaat **Ulanzi TC001**. Het verbindt met de Dexcom-servers of Nightscout en toont bloedglucosewaarden in realtime.

![Volgen met Nightscout Clock](../images/FollowingNightscoutClock.png)

* De klok ondersteunt zowel mmol/l als mg/dl en heeft hoorbare alarmen.
* Er zijn verschillende weergaven beschikbaar, zie [Github nightscout-clock](https://github.com/ktomy/nightscout-clock?tab=readme-ov-file#more-information-for-people-who-needs-it) voor een overzicht.
* Het apparaat instellen en configureren gaat in een paar eenvoudige stappen. Na het instellen heeft het alleen stroom en wifi nodig om te werken.
* Het apparaat Ulanzi TC001 is veel goedkoper dan de SugarPixel.
* De software en de installatie-instructies vind je op [Github nightscout-clock](https://github.com/ktomy/nightscout-clock?tab=readme-ov-file).
* Het wordt ontwikkeld en onderhouden door Artiom Kenibasov, die hulp geeft in de [Facebook-groep AAPS Users](https://www.facebook.com/groups/cgminthecloud/posts/8776932509094594/).

### PC (TeamViewer)
Sommige gebruikers vinden een hulpmiddel voor volledige externe toegang, zoals [TeamViewer](https://www.teamviewer.com/), behulpzaam voor het geavanceerd oplossen van problemen op afstand.
