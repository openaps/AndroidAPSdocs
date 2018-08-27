# Zukünftig ggf. loopbare Pumpen

Diese Liste gibt eine Übersicht über alle möglichen Pumpen und inwiefern sie zum Loopen bzw. für AAPS geeignet sind. Am Schluss findest du Informationen, welche Eigenschaften eine Insulinpumpe haben müsste um damit loopen zu können.

## Medtronic

**Loop status:** Einige der älteren Pumpen sind zum Loopen geeignet, die neuen Modelle leider nicht.

**Andere Anwendungen** OpenAPS, Loop

**Java Umsetzungen:** Teilweise Umsetzung verfügbar [Rountrip2](https://github.com/TC2013/Roundtrip2), und [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS) - Erweiterungen von RT2 sind fast vollständig.

**AAPS Umsetzung** Am Beginn. Siehe [Andy's AndroidAPS fork](https://github.com/andyrozman/AndroidAPS), branch riley_link_medtronic (default branch). Status: Grundlegende Umsetzung ist erledigt (Medtronic Tab), es gibt jetzt die Virtuelle Medtronic Pumpe. Zur Zeit wird hauptsächlich am [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS) gearbeitet um das Grundgerüst und die Befehle zum Laufen zu kriegen. Es gibt ein offenes Projekt (Medtronic) und Tickets für die zukünftige Entwicklung auf diesem Repository. Die Entwicklung geschieht auf dem Branch Dev_medtronic (was dort der Standard Branch ist). Es gibt auch schon den gitter room: RileyLinkAAPS/Lobby. Die testweise Integration in AAPS passiert gerade, ist aber noch nicht für öffentliche Tests verfügbar.

**Hardware Voraussetzungen für AAPS:** RileyLink

**Loopbare Modelle:**512-522, 523(Firmware 2.4A oder niedriger), 554 (EU firmware 2.6A oder niedriger, CA Firmware 2.7A oder weniger). Das Selbe gilt für 7xx Modelle. Alle anderen Modelle sind aktuell nicht loopbar und werden es wahrscheinlich auch nie.

* * *

## Insulet Omnipod

**Loop status:** wird zurzeit nicht unterstütze, aber bei [OpenOmi ](http://www.openomni.org/) wird intensiv daran gearbeitet, das Omnipod Protokoll zu entschlüsseln.

**Andere Umsetzungen** Loop (Umsetzung ist erst am Anfang, so weit bekannt war es möglich den Pod zu starten und die erste temporäre Basalrate zu senden). Siehe [Openomni bei github](https://github.com/openaps/openomni)

**Java Umsetzung** Nicht verfügbar.

**AAPS Umsetzung Status:** Es wurde damit begonnen [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS) für Omnipod umzusetzen (dev_omnipod branch), aber von einem funktionierenden Prototyp ist man noch weit entfernt (der Entwickler hat begonnen notwendige Änderungen in RL Firmware 2.0 zu implementieren). Auf https://omniaps.slack.com/ um Kanal android-driver kann man die Entwicklung verfolgen. Dort postet der Entwickler seinen Fortschritt.

**Hardware-Anforderungen fürAAPS:** RileyLink mit Omnipod Software (2.0)

**Anmerkungen:** Unterstützung für Omnipod DASH ist derzeit nicht vorgesehen. Sobald wir eine Java Umsetzung für den aktuellen Omnipod haben, werden wir davon ausgehend weiterentwickeln. Wenn das Omnipod Protokoll sich nicht verändert hat, dürften die Anpassungen nicht lange dauern, wenn sich das Protokoll ändert könnte sich die Arbeit länger hinausziehen.

* * *

## Ypsomed Pumpe

**Loop Status:** Version 1 - 1.5 (2Q/2018) sind nicht zum Loopen geeignet. Obwohl sie über Bluetooth kommuniziert, scheint die Datenübertragen sehr limitiert zu sein (nur in eine Richtung: Pumpe zu App). Dies könnte sich in späteren Versionen ändern.

**Hardware-Anforderungen für AAPS:** Vermutlich keine. Die Pumpe kommuniziert über Bluetooth.

* * *

## Cellnovo Pumpe

**Loop Status:** Zur Zeit nicht umgesetzt. Die Pumpe ist möglicherweise zum Loopen geeignet, aber da das Protokoll derzeit nicht bekannt ist, ist eine zeitnahe Umsetzung unwahrscheinlich.

**Hardware-Anforderungen für AAPS:** Vermutlich keine, da die Pumpe über Bluetooth kommuniziert. Die Pumpe kommuniziert über Bluetooth.

* * *

## Animas Vibe

**Loop Status:** Nicht zum Loopen geeignet. Keine Fernsteuerung möglich.

* * *

## Animas Ping

**Loop-Status:** Derzeit von keinem der Loop-Systeme unterstützt. Aber es könnte möglich sein, da sie eine Art von Fernsteuerung hat. Da sie eine ältere Pumpe ist, könnte es sein, dass sie niemals irgendwo unterstützt wird.

* * *

## Anforderungen an Pumpen, um loopbar zu sein

**Voraussetzungen**

- Pumpe muss irgendeine Art von Fernbedienung unterstützen. (BT, Radiofrequenz, etc.)
- Protokoll ist gehackt/dokumentiert/etc.

**Mindestanforderungen**

- Temporäre Basalraten setzen
- Status abrufen
- Temporäre Basalraten abbrechen

**Für oref1(SMB) oder Bolusing:**

- Mahlzeiten Bolus abgeben

**Sinnvoll außerdem**

- Bolus abbrechen
- Basalprofil abrufen
- Basalprofil setzen
- History auslesen 

**Sonstiges**

- Verlängerten Bolus setzen
- Verlängerten Bolus abbrechen

* * *

## Unterstützung weiterer Pumpen

Wenn du irgendwelche anderen Pumpen hast, zu denen dich der Status interessiert, kontaktiere mich einfach (@andyrozman on gitter). In zukünftigen Releases werden einige Pumpen-Konfigurationen hinzugefügt, die dann im Open Loop laufen können (du wirst dann die Möglichkeit haben, einen bestimmten Typ als virtuelle Pumpe auszuwählen, so dass deine Einstellungen geladen werden - [Feature request #863](https://github.com/MilosKozak/AndroidAPS/issues/863)).