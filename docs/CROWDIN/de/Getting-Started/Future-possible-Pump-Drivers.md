# Zukünftig ggf. loopbare Pumpen

Diese Liste gibt eine Übersicht über alle möglichen Pumpen und inwiefern sie zum Loopen bzw. für AAPS geeignet sind. Am Schluss findest du Informationen, welche Eigenschaften eine Insulinpumpe haben müsste um damit loopen zu können.

## Pumpen, an deren Unterstützung die Entwickler arbeiten

### Accu-Chek Insight ([Homepage](https://www.accu-chek.co.uk/insulin-pumps/insight))

**Loop status:** wahrscheinlich loop-fähig, aber noch im Prozess des Reverse-Engineering ("Protokoll-Entschlüsselung")

**Andere Anwendungen** Keine

**Java Implementierung:** in Entwicklung

**AAPS Umsetzung** in Entwicklung

**Hardware Voraussetzungen für AAPS:** Bluetooth-fähiges Android Gerät

**Loopbare Modelle:** alle

* * *

### Medtronic

**Loop status:** Einige der älteren Pumpen sind zum Loopen geeignet, die neuen Modelle leider nicht.

**Andere Anwendungen** OpenAPS, Loop

**Java Implementierung:** Teil-Implementierung verfügbar [Rountrip2](https://github.com/TC2013/Roundtrip2) und [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS)

**AAPS implementation status:** Work in progress. Siehe [Andy's AndroidAPS fork](https://github.com/andyrozman/AndroidAPS), branch medtronic_andy. Der Großteil der Arbeit am [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS) ist getan, um das Framework und die Befehle zum Laufen zu bekommen. In diesem Repository wurden ein Projekt (Medtronic) und Tickets für die weitere Entwicklung angelegt. Die Entwicklung erfolgt im Branch dev_medtronic (dem dortigen default branch). Es gibt auch einen Gitter chat: RileyLinkAAPS/Lobby. AAPS. 0.7 test "release" is out, with about 80% of all functionality, missing is only History analysis to determine state of the pump and to confirm that Treatments were or to import new treatments. For details and timing see [Project board](https://github.com/andyrozman/RileyLinkAAPS/projects/1).

**Hardware Voraussetzungen für AAPS:** RileyLink (alle Typen)

**Loopbare Modelle:**512-522, 523(Firmware 2.4A oder niedriger), 554 (EU firmware 2.6A oder niedriger, CA Firmware 2.7A oder weniger). Das Selbe gilt für 7xx Modelle. Alle anderen Modelle sind aktuell nicht loopbar und werden es wahrscheinlich auch nie.

* * *

### Insulet Omnipod ([Homepage](https://www.myomnipod.com/en-gb/about/how-to-use))

**Loop status:** Aktuell nicht unterstützt, aber die Entschlüsselung des Omnipod Protokolls ist nahezu abgeschlossen. [OpenOmni](http://www.openomni.org/) und [OmniAPS Slack](https://omniaps.slack.com/)

**Andere Umsetzungen** Loop (Umsetzung ist erst am Anfang, so weit bekannt war es möglich den Pod zu starten und die erste temporäre Basalrate zu senden). Siehe [Openomni bei github](https://github.com/openaps/openomni)

**Java-Implementierungen:** Bisher keine.

**AAPS Umsetzungsstatus:** Die Arbeiten an [RileyLinkAAPS](https://github.com/ktomy/RileyLinkAAPS) for Omnipod (dev_omnipod branch) haben begonnen, sind aber noch weit von einem ersten Prototypen entfernt (der Entwickler hat mit der Änderungen, die für RL Firmware 2.0 erforderlich sind, begonnen und sendet erste Datenpakete an die Pumpe). Auf https://omniaps.slack.com/ um Kanal android-driver kann man die Entwicklung verfolgen. Dort postet der Entwickler seinen Fortschritt.

**Hardware Anforderungen für AAPS:** RileyLink mit Omnipod Firmware (2.x)

## Pumpen, die für den Loop geeignet sind

### Omnipod DASH ([Homepage](https://www.myomnipod.com/DASH_FAQs))

**Loop status:** Aktuell von keinem der Loop-Systeme unterstützt. Die Pumpe ist ein Kandidat für den Loop, das Protokoll aber bisher unbekannt. Vertrieb der Pumpe startet im Januar 2019 (aktuell nur Vorverkauf in den USA).

**Hardware-Anforderungen für AAPS:** Vermutlich keine, da die Pumpe über Bluetooth kommuniziert.

**Kommentar:** Omnipod DASH steht aktuell nicht auf der Agenda. Sobald wir eine Java Implementierung für den Omnipod haben, werden wir davon ausgehend weiterentwickeln. Falls das Protokoll beim Omnipod Dash unverändert bleibt, könnten wir ein paar Monate später eine Implementierung haben. Falls es jedoch verändert wurde, wird es länger dauern.

* * *

### Ypsomed Pumpe ([Homepage](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Loop status:** Version 1 - 1.5 (2. Quartal 2018) sind keine Kandiadaten für den Loop. Obwohl sie über Bluetooth kommuniziert, scheint die Datenübertrag sehr limitiert zu sein (nur in eine Richtung: Pumpe zu App). Dies könnte sich in späteren Versionen ändern.

**Hardware-Anforderungen für AAPS:** Vermutlich keine, da die Pumpe über Bluetooth kommuniziert. da die Pumpe über Bluetooth kommuniziert.

* * *

### Cellnovo Pumpe ([Homepage](https://www.cellnovo.com/en/homepage))

**Loop status:** Aktuell von keinem der Loop-Systeme unterstützt. Die Pumpe ist möglicherweise zum Loopen geeignet, aber da das Protokoll derzeit nicht bekannt ist, ist eine zeitnahe Umsetzung unwahrscheinlich.

**Hardware-Anforderungen für AAPS:** Vermutlich keine, da die Pumpe über Bluetooth kommuniziert.

* * *

### Medtrum A6/P6/C6 ([Homepage](http://www.medtrum.com/P6.html))

**Loop-status** Ist ein Loop-Kandidat. Das Unternehmen bietet sein eigenes, limitiertes "Halb-Loop-System" (A6) an. Steuerbar per iPhone App. Aktuell keine Android App verfügbar.

**Hardware-Anforderungen für AAPS:** Vermutlich keine. Die Pumpe scheint über Bluetooth zu kommunizieren.

* * *

### EOFLOW ([Homepage](http://www.eoflow.com/eng/main/main.html))

**Loop-status** Ist ein Loop-Kandidat. Die verwendete Fernbedienung ist ein modifiziertes Android Gerät. (Pumpe ist aktuell nur in Korea verfügbar.)

**Hardware-Anforderungen für AAPS:** Vermutlich keine. Die Pumpe scheint über Bluetooth zu kommunizieren.

* * *

### Accu-Chek Solo ([Homepage](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Loop Status:** Ist ein Loop-Kandidat. Die Pumpe kommt Ende 2018 in ausgewählten europäischen Ländern auf den Markt. Gerüchteweise erfolgt die Steuerung über eine Android App.

**Hardware-Anforderungen für AAPS:** Vermutlich keine. Die Pumpe scheint über Bluetooth zu kommunizieren.

* * *

### Tandem t:AP

**Loop-status** Ist ein Loop-Kandidat.

**Hardware-Anforderungen für AAPS:** Vermutlich keine, da die Pumpe über Bluetooth kommuniziert. Die Pumpe scheint über Bluetooth zu kommunizieren.

**NOTE:** This pump was mentioned in following [article](https://www.liebertpub.com/doi/full/10.1089/dia.2018.0278?url_ver=Z39.88-2003&rfr_id=ori%3Arid%3Acrossref.org&rfr_dat=cr_pub%3Dpubmed&), but I am not sure, if this is just t:slim with modified Firmware, or is this a new pump. So far I go no confirmation either way from writer of article, or from Tandem itself.

## Pumpen, die nicht für den Loop geeignet sind

### Tandem:X2 ([Homepage](https://www.tandemdiabetes.com/))

**Loop status:** Not loopable (I am not 100% sure about this info), but they are planning to release different pump that will have remote control (at least bolus).

* * *

### Animas Vibe

**Loop status:** Not loopable. No remote control possibility. **Note:** Pump is not being sold anymore. Company stopped working in Pump bussiness (J&J).

* * *

### Animas Ping

**Loop status:** Not loopable. It has bolus possibility, but no TBR one. **Note** Stopped beeing sold when Vibe came out.

## Anforderungen an Pumpen, um loopbar zu sein

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
- Basalprofil abrufen (fast eine Anforderung)
- Basal Profil einstellen (nice to have)
- History auslesen 

**Other (not required but good to have)**

- Verlängerten Bolus setzen
- Verlängerten Bolus abbrechen
- Historie auslesen
- TDD (Total daily dose = Bolus + Basal pro Tag) auslesen

* * *

### Other pumps support

If you have any other pumps you would like to see status on, please contact me (@andyrozman on gitter). In future release a lot of Pump configurations will be added to be Open loopable (you will be able to select Virtual Pump Type in configuration and your settings will be loaded - [Feature request #863](https://github.com/MilosKozak/AndroidAPS/issues/863)).