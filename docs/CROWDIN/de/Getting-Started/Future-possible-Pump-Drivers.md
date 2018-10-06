# Zukünftig ggf. loopbare Pumpen

Diese Liste gibt eine Übersicht über alle möglichen Pumpen und inwiefern sie zum Loopen bzw. für AAPS geeignet sind. Am Schluss findest du Informationen, welche Eigenschaften eine Insulinpumpe haben müsste um damit loopen zu können.

## Medtronic

**Loop status:** Einige der älteren Pumpen sind zum Loopen geeignet, die neuen Modelle leider nicht.

**Andere Anwendungen** OpenAPS, Loop

**Java implementations:** Partial implementation available [Rountrip2](https://github.com/TC2013/Roundtrip2), and [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS)

**AAPS Umsetzung** Am Beginn. Siehe [Andy's AndroidAPS fork](https://github.com/andyrozman/AndroidAPS), branch riley_link_medtronic (default branch). Zur Zeit wird hauptsächlich am [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS) gearbeitet, um das Framework und die Befehle zum Laufen zu bekommen. In diesem Repository wurden ein Projekt (Medtronic) und Tickets für die weitere Entwicklung angelegt. Die Entwicklung erfolgt im Branch dev_medtronic (dem dortigen default branch). There is also gitter room: RileyLinkAAPS/Lobby. AAPS. Die zweite Test-Release mit etwa 60% aller Funktionalitäten wurde veröffentlicht. Work is progressing according to plan, end of development estimated to end of November.

**Hardware Voraussetzungen für AAPS:** RileyLink

**Loopbare Modelle:**512-522, 523(Firmware 2.4A oder niedriger), 554 (EU firmware 2.6A oder niedriger, CA Firmware 2.7A oder weniger). Das Selbe gilt für 7xx Modelle. Alle anderen Modelle sind aktuell nicht loopbar und werden es wahrscheinlich auch nie.

* * *

## Insulet Omnipod ([Homepage](https://www.myomnipod.com/en-gb/about/how-to-use))

**Loop status:** Aktuell nicht unterstützt, aber die Entschlüsselung des Omnipod Protokolls ist nahezu abgeschlossen. [OpenOmni](http://www.openomni.org/) und [OmniAPS Slack](https://omniaps.slack.com/)

**Andere Umsetzungen** Loop (Umsetzung ist erst am Anfang, so weit bekannt war es möglich den Pod zu starten und die erste temporäre Basalrate zu senden). Siehe [Openomni bei github](https://github.com/openaps/openomni)

**Java Umsetzung** Nicht verfügbar.

**AAPS Umsetzungsstatus:** Die Arbeiten an [RileyLinkAAPS](https://github.com/ktomy/RileyLinkAAPS) for Omnipod (dev_omnipod branch) haben begonnen, sind aber noch weit von einem ersten Prototypen entfernt (der Entwickler hat mit der Änderungen, die für RL Firmware 2.0 erforderlich sind, begonnen). Auf https://omniaps.slack.com/ um Kanal android-driver kann man die Entwicklung verfolgen. Dort postet der Entwickler seinen Fortschritt.

**Hardware requirement for AAPS:** RileyLink with Omnipod firmware (2.x)

* * *

## Omnipod DASH ([Homepage](https://www.myomnipod.com/DASH_FAQs))

**Loop status:** Currently not supported by any of loop system. Pump is a Loop candidate, but protocol unknown at the moment. Vertrieb der Pumpe startet im Januar 2019 (aktuell nur Vorverkauf in den USA).

**Hardware requirement for AAPS:** Probably none. It's BT enabled.

**Comments:** Omnipod DASH is currently not in the plan. Sobald wir eine Java Implementierung für den Omnipod haben, werden wir davon ausgehend weiterentwickeln. Falls das Protokoll beim Omnipod Dash unverändert bleibt, könnten wir ein paar Monate später eine Implementierung haben. Falls es jedoch verändert wurde, wird es länger dauern.

* * *

## Ypsomed Pump ([Homepage](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Loop status:** Version 1 - 1.5 (2Q/2018) are not Loop candidates. Obwohl sie über Bluetooth kommuniziert, scheint die Datenübertrag sehr limitiert zu sein (nur in eine Richtung: Pumpe zu App). Maybe this will change in the next versions.

**Hardware-Anforderungen für AAPS:** Vermutlich keine, da die Pumpe über Bluetooth kommuniziert. Die Pumpe kommuniziert über Bluetooth.

* * *

## Cellnovo Pump ([Homepage](https://www.cellnovo.com/en/homepage))

**Loop status:** Currently not supported by any of loop system. Pump is a Loop candidate, but since protocol is unknown at the time, I am not seeing this pump supported very soon.

**Hardware-Anforderungen für AAPS:** Vermutlich keine, da die Pumpe über Bluetooth kommuniziert. Die Pumpe kommuniziert über Bluetooth.

* * *

## Medtrum A6/P6/C6 ([Homepage](http://www.medtrum.com/P6.html))

**Loop status** Is a Loop candidate. Company has its own limited half-Loop system running (A6). Controlable via iPhone App. No Android app available at the moment.

**Hardware-Anforderungen für AAPS:** Vermutlich keine. It seems to be BT enabled.

* * *

## Animas Vibe

**Loop status:** Not loopable. No remote control possibility. **Note:** Pump is not being sold anymore. Company stopped working in Pump bussiness (J&J).

* * *

## Animas Ping

**Loop status:** Currently not supported by any of Loop systems, but it might be a candidate, since it does have some kind of remote possibility. Since its much older pump, it might never get supported anywhere.

* * *

## Requirements for pump being loopable

**Prerequisite**

- Pumpe muss irgendeine Art von Fernbedienung unterstützen. (BT, Radiofrequenz, etc.)
- Protokoll ist gehackt/dokumentiert/etc.

**Minimal requirement**

- Temporäre Basalraten setzen
- Status abrufen
- Temporäre Basalraten abbrechen

**For oref1(SMB) or Bolusing:**

- Mahlzeiten Bolus abgeben

**Good to have**

- Bolus abbrechen
- Get Basal Profile (almost requirement)
- Basalprofil setzen
- History auslesen 

**Andere**

- Verlängerten Bolus setzen
- Verlängerten Bolus abbrechen

* * *

## Other pumps support

If you have any other pumps you would like to see status on, please contact me (@andyrozman on gitter). In future release a lot of Pump configurations will be added to be Open loopable (you will be able to select Virtual Pump Type in configuration and your settings will be loaded - [Feature request #863](https://github.com/MilosKozak/AndroidAPS/issues/863)).