# Zukünftig ggf. loopbare Pumpen

Diese Liste gibt eine Übersicht über alle möglichen Pumpen und inwiefern sie zum Loopen bzw. für AAPS geeignet sind. Am Schluss findest du Informationen, welche Eigenschaften eine Insulinpumpe haben müsste um damit loopen zu können.

## Pumpen, an deren Unterstützung die Entwickler arbeiten

### Medtronic

**Loop status:** Einige der älteren Pumpen sind zum Loopen geeignet, die neuen Modelle leider nicht.

**Andere Anwendungen** OpenAPS, Loop

**Java Implementierung:** Teil-Implementierung verfügbar [Rountrip2](https://github.com/TC2013/Roundtrip2) und [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS)

**AAPS Implementierungsstatus:** Arbeit im Gange. Siehe [Andy's AndroidAPS fork](https://github.com/andyrozman/AndroidAPS), branch medtronic_andy. Der Großteil der Arbeit am [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS) ist getan, um das Framework und die Befehle zum Laufen zu bekommen. Es gibt ein offenes Projekt (Medtronic) und Tickets für die zukünftige Entwicklung auf diesem Repository. Die Entwicklung geschieht auf dem Branch Dev_medtronic (was dort der Standard Branch ist). Es gibt auch schon den gitter room: RileyLinkAAPS/Lobby. AAPS. 0.7 Test "Release" ist veröffentlicht. Diese enthält etwa 80% aller Funktionalitäten. Es fehlen nur die Analyse der Pumpenhistorie, um den Zustand der Pumpe festzustellen, sicherzustellen, dass Behandlungen erfolgreich abgeschlossen wurden oder neue Behandlungen aus der Pumpe zu importieren. Weitere Details und den Zeitplan findest Du im [Projektboard](https://github.com/andyrozman/RileyLinkAAPS/projects/1).

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

### Ypsomed Pump ([Homepage](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Loop status:** Version 1 - 1.5 (2. Quartal 2018) sind keine Kandiadaten für den Loop. Obwohl sie über Bluetooth kommuniziert, scheint die Datenübertrag sehr limitiert zu sein (nur in eine Richtung: Pumpe zu App). Vielleicht wird sich dies in einem der Folgemodelle ändern.

**Hardware-Anforderungen für AAPS:** Vermutlich keine, da die Pumpe über Bluetooth kommuniziert.

* * *

### Kaleido ([Homepage](https://www.hellokaleido.com/))

**Loop status:** Aktuell von keinem der Loop-Systeme unterstützt. Die Pumpe ist möglicherweise zum Loopen geeignet, aber da das Protokoll derzeit nicht bekannt ist, ist eine zeitnahe Umsetzung unwahrscheinlich.

**Hardware-Anforderungen für AAPS:** Vermutlich keine, da die Pumpe über Bluetooth kommuniziert.

* * *

### Medtrum A6/P6/C6 ([Homepage](http://www.medtrum.com/P6.html))

**Loop-status** Ist ein Loop-Kandidat. Das Unternehmen bietet sein eigenes, limitiertes "Halb-Loop-System" (A6) an. Steuerbar per iPhone App. Aktuell keine Android App verfügbar.

**Hardware-Anforderungen für AAPS:** Vermutlich keine, Die Pumpe scheint über Bluetooth zu kommunizieren.

* * *

### EOFLOW ([Homepage](http://www.eoflow.com/eng/main/main.html))

**Loop-status** Ist ein Loop-Kandidat. Die verwendete Fernbedienung ist ein modifiziertes Android Gerät. (Pumpe ist aktuell nur in Korea verfügbar.)

**Hardware-Anforderungen für AAPS:** Vermutlich keine, die Pumpe scheint über Bluetooth zu kommunizieren.

* * *

### Accu-Chek Solo ([Homepage](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Loop-status** Ist ein Loop-Kandidat. Die Pumpe kommt Ende 2018 in ausgewählten europäischen Ländern auf den Markt. Gerüchteweise erfolgt die Steuerung über eine Android App.

**Hardware-Anforderungen für AAPS:** Vermutlich keine, die Pumpe scheint über Bluetooth zu kommunizieren.

* * *

## Pumps no longer sold (companies no longer operating)

### Cellnovo Pumpe ([Homepage](https://www.cellnovo.com/en/homepage))

**Loop status:** Aktuell von keinem der Loop-Systeme unterstützt. Die Pumpe ist möglicherweise zum Loopen geeignet, aber da das Protokoll derzeit nicht bekannt ist, ist eine zeitnahe Umsetzung unwahrscheinlich.

**Hardware-Anforderungen für AAPS:** Vermutlich keine. da die Pumpe über Bluetooth kommuniziert.

**Hinweis zur Pumpe:** Es ist der Eindruck entstanden, dass sich das Unternehmen aus dem Pumpenmarkt zurückzieht. Weitere Informationen dazu findest Du in diesem [Artikel](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU).

## Pumps that aren't Loopable

### Tandem (alle) ([Homepage](https://www.tandemdiabetes.com/))

**Loop Status:** Nicht zum Loopen geeignet.

Vor einiger Zeit war eine Firmware namens T:AP (siehe dieser [Artikel](https://www.liebertpub.com/doi/full/10.1089/dia.2018.0278?url_ver=Z39.88-2003&rfr_id=ori%3Arid%3Acrossref.org&rfr_dat=cr_pub%3Dpubmed&)) im Einsatz, die zum Loopen verwenden werden könnte. Diese ist nicht mehr verfügbar, da die Firmware der Pumpe auf x2 umgestellt wurde. Die Firmware T:AP war auch nicht für den kommerziellen Einsatz, sondern nur für den Einsatz in Studien gedacht. Laut einem der Geschäftsführer des Unternehmens wird es nie eine offene Schnittstelle zur Tandem-Pumpe geben. Sie haben aber ein eigenes Closed Loop System namens Control-IQ entwickelt. Dies ist in den USA bereits verfügbar und soll 2020 auch nach Europa kommen.

* * *

### Animas Vibe

**Loop Status:** Nicht zum Loopen geeignet. Keine Fernsteuerung möglich. **Hinweis:** Pumpe wird nicht mehr verkauft. Das Unternehmen (Johnson&Johnson) hat sich aus dem Pumpengeschäft zurückgezogen.

* * *

### Animas Ping

**Loop Status:** Nicht zum Loopen geeignet. Bolus-Steuerung möglich, aber keine Steuerung von temporären Basalraten (TBR). **Note** Vertrieb nach Erscheinen der Vibe eingestellt.

## Anforderungen an Pumpen, um loopbar zu sein

**Grundvoraussetzungen**

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
- Basal Profil einstellen (nice to have)
- History auslesen 

**Weitere Anforderungen (nicht notwendig, aber Verfügbarkeit wäre gut)**

- Verlängerten Bolus setzen
- Verlängerten Bolus abbrechen
- Historie auslesen
- TDD (Total daily dose = Bolus + Basal pro Tag) auslesen

* * *

### Unterstützung weiterer Pumpen

Falls du noch andere Pumpen hast und du über deren Status Bescheid wissen willst, kontaktiere mich (@andyrozman auf Gitter). In zukünftigen Releases werden einige Pumpen-Konfigurationen hinzugefügt, die dann im Open Loop laufen können (du wirst dann die Möglichkeit haben, einen bestimmten Typ als virtuelle Pumpe auszuwählen, so dass deine Einstellungen geladen werden - [Feature request #863](https://github.com/MilosKozak/AndroidAPS/issues/863)).