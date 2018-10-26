# Zukünftig ggf. loopbare Pumpen

Diese Liste gibt eine Übersicht über alle möglichen Pumpen und inwiefern sie zum Loopen bzw. für AAPS geeignet sind. Am Schluss findest du Informationen, welche Eigenschaften eine Insulinpumpe haben müsste um damit loopen zu können.

## Medtronic

**Loop status:** Einige der älteren Pumpen sind zum Loopen geeignet, die neuen Modelle leider nicht.

**Andere Anwendungen** OpenAPS, Loop

**Java Implementierung:** Teil-Implementierung verfügbar [Rountrip2](https://github.com/TC2013/Roundtrip2) und [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS)

**AAPS Umsetzung** Am Beginn. Siehe [Andy's AndroidAPS fork](https://github.com/andyrozman/AndroidAPS), branch riley_link_medtronic (default branch). Zur Zeit wird hauptsächlich am [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS) gearbeitet, um das Framework und die Befehle zum Laufen zu bekommen. In diesem Repository wurden ein Projekt (Medtronic) und Tickets für die weitere Entwicklung angelegt. Die Entwicklung erfolgt im Branch dev_medtronic (dem dortigen default branch). Es gibt auch einen Gitter chat: RileyLinkAAPS/Lobby. AAPS. Die zweite Test-Release mit etwa 60% aller Funktionalitäten wurde veröffentlicht. Die Entwicklung schreitet planmäßig voran, der Abschluss wird Ende November erwartet.

**Hardware Voraussetzungen für AAPS:** RileyLink

**Loopbare Modelle:**512-522, 523(Firmware 2.4A oder niedriger), 554 (EU firmware 2.6A oder niedriger, CA Firmware 2.7A oder weniger). Das Selbe gilt für 7xx Modelle. Alle anderen Modelle sind aktuell nicht loopbar und werden es wahrscheinlich auch nie.

* * *

## Insulet Omnipod ([Homepage](https://www.myomnipod.com/en-gb/about/how-to-use))

**Loop status:** Aktuell nicht unterstützt, aber die Entschlüsselung des Omnipod Protokolls ist nahezu abgeschlossen. [OpenOmni](http://www.openomni.org/) und [OmniAPS Slack](https://omniaps.slack.com/)

**Andere Umsetzungen** Loop (Umsetzung ist erst am Anfang, so weit bekannt war es möglich den Pod zu starten und die erste temporäre Basalrate zu senden). Siehe [Openomni bei github](https://github.com/openaps/openomni)

**Java Umsetzung** Nicht verfügbar.

**AAPS Umsetzungsstatus:** Die Arbeiten an [RileyLinkAAPS](https://github.com/ktomy/RileyLinkAAPS) for Omnipod (dev_omnipod branch) haben begonnen, sind aber noch weit von einem ersten Prototypen entfernt (der Entwickler hat mit der Änderungen, die für RL Firmware 2.0 erforderlich sind, begonnen). Auf https://omniaps.slack.com/ um Kanal android-driver kann man die Entwicklung verfolgen. Dort postet der Entwickler seinen Fortschritt.

**Hardware Anforderungen für AAPS:** RileyLink mit Omnipod Firmware (2.x)

* * *

## Omnipod DASH ([Homepage](https://www.myomnipod.com/DASH_FAQs))

**Loop status:** Aktuell von keinem der Loop-Systeme unterstützt. Die Pumpe ist ein Kandidat für den Loop, das Protokoll aber bisher unbekannt. Vertrieb der Pumpe startet im Januar 2019 (aktuell nur Vorverkauf in den USA).

**Hardware-Anforderungen für AAPS:** Vermutlich keine, da die Pumpe über Bluetooth kommuniziert.

**Kommentar:** Omnipod DASH steht aktuell nicht auf der Agenda. Sobald wir eine Java Implementierung für den Omnipod haben, werden wir davon ausgehend weiterentwickeln. Falls das Protokoll beim Omnipod Dash unverändert bleibt, könnten wir ein paar Monate später eine Implementierung haben. Falls es jedoch verändert wurde, wird es länger dauern.

* * *

## Ypsomed Pumpe ([Homepage](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Loop status:** Version 1 - 1.5 (2. Quartal 2018) sind keine Kandiadaten für den Loop. Obwohl sie über Bluetooth kommuniziert, scheint die Datenübertrag sehr limitiert zu sein (nur in eine Richtung: Pumpe zu App). Vielleicht wird sich dies in einem der Folgemodelle ändern.

**Hardware-Anforderungen für AAPS:** Vermutlich keine, da die Pumpe über Bluetooth kommuniziert. Die Pumpe kommuniziert über Bluetooth.

* * *

## Cellnovo Pumpe ([Homepage](https://www.cellnovo.com/en/homepage))

**Loop status:** Aktuell von keinem der Loop-Systeme unterstützt. Die Pumpe ist möglicherweise zum Loopen geeignet, aber da das Protokoll derzeit nicht bekannt ist, ist eine zeitnahe Umsetzung unwahrscheinlich.

**Hardware-Anforderungen für AAPS:** Vermutlich keine, da die Pumpe über Bluetooth kommuniziert. Die Pumpe kommuniziert über Bluetooth.

* * *

## Medtrum A6/P6/C6 ([Homepage](http://www.medtrum.com/P6.html))

**Loop-status** Ist ein Loop-Kandidat. Das Unternehmen bietet sein eigenes, limitiertes "Halb-Loop-System" (A6) an. Steuerbar per iPhone App. Aktuell keine Android App verfügbar.

**Hardware-Anforderungen für AAPS:** Vermutlich keine. Die Pumpe scheint über Bluetooth zu kommunizieren.

* * *

## EOFLOW ([Homepage](http://www.eoflow.com/eng/main/main.html))

**Loop-status** Ist ein Loop-Kandidat. Die verwendete Fernbedienung ist ein modifiziertes Android Gerät. (Pumpe ist aktuell nur in Korea verfügbar.)

**Hardware-Anforderungen für AAPS:** Vermutlich keine, da die Pumpe über Bluetooth kommuniziert. Die Pumpe scheint über Bluetooth zu kommunizieren.

* * *

## Tandem:X2 ([Homepage](https://www.tandemdiabetes.com/))

**Loop status:** Nicht loopfähig (Aussage nicht 100% sicher), sie planen aber eine andere Pumpe auf den Markt zu bringen, die Fernsteuerung (zumindest für den Bolus) ermöglicht.

* * *

## Animas Vibe

**Loop Status:** Nicht zum Loopen geeignet. Keine Fernsteuerung möglich. **Hinweis:** Pumpe wird nicht mehr verkauft. Das Unternehmen hat sich aus dem Pumpengeschäft zurückgezogen.

* * *

## Animas Ping

**Loop-Status:** Derzeit von keinem der Loop-Systeme unterstützt. Aber es könnte möglich sein, da sie eine Art von Fernsteuerung hat. Es handelt sich um eine ältere Pumpe, daher kann es gut sein, dass sie nicht mehr unterstützt werden wird.

* * *

## Voraussetzungen für Pumpen, um loopbar zu sein

**Grundvoraussetzung**

- Pumpe muss irgendeine Art von Fernbedienung unterstützen. (BT, Radiofrequenz, etc.)
- Protokoll ist gehackt/dokumentiert/etc.

**Mindestanforderungen**

- Temporäre Basalraten setzen
- Status abrufen
- Temporäre Basalraten abbrechen

**Für oref1(SMB) oder zur Bolusabgabe:**

- Mahlzeiten Bolus abgeben

**Von Vorteil**

- Bolus abbrechen
- Basalprofil abrufen (fast eine Anforderung)
- Basalprofil setzen
- History auslesen 

**Andere**

- Verlängerten Bolus setzen
- Verlängerten Bolus abbrechen

* * *

## Unterstützung weiterer Pumpen

Wenn du irgendwelche anderen Pumpen hast, zu denen dich der Status interessiert, kontaktiere mich einfach (@andyrozman on gitter). In zukünftigen Releases werden einige Pumpen-Konfigurationen hinzugefügt, die dann im Open Loop laufen können (du wirst dann die Möglichkeit haben, einen bestimmten Typ als virtuelle Pumpe auszuwählen, so dass deine Einstellungen geladen werden - [Feature request #863](https://github.com/MilosKozak/AndroidAPS/issues/863)).