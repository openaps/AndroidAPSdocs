# Zukünftig ggf. loopbare Pumpen

Diese Liste gibt eine Übersicht über alle möglichen Pumpen und inwiefern sie zum Loopen bzw. für AAPS geeignet sind. Am Schluss findest du Informationen, welche Eigenschaften eine Insulinpumpe haben müsste um damit loopen zu können.

## Pumpen, an deren Unterstützung die Entwickler arbeiten

### Medtronic

**Loop status:** Einige der älteren Pumpen sind zum Loopen geeignet, die neuen Modelle leider nicht.

**Andere Anwendungen** OpenAPS, Loop

**Java Implementierung:** Teil-Implementierung verfügbar [Rountrip2](https://github.com/TC2013/Roundtrip2) und [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS)

**AAPS Implementierungsstatus:** Arbeit im Gange. Siehe [Andy's AndroidAPS fork](https://github.com/andyrozman/AndroidAPS), branch medtronic_andy. Der Großteil der Arbeit am [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS) ist getan, um das Framework und die Befehle zum Laufen zu bekommen. Es gibt ein offenes Projekt (Medtronic) und Tickets für die zukünftige Entwicklung auf diesem Repository. Die Entwicklung geschieht auf dem Branch Dev_medtronic (was dort der Standard Branch ist). Es gibt auch schon den gitter room: RileyLinkAAPS/Lobby. AAPS. Die Version 0.10 "Test-Release" ist erschienen. Sie verfügt bereits über ca. 95% der notwendigen Funktionen. Momentan fehlt noch die Synchronisation von temporären Basalraten und des Ereignisses "Bolusabgabe gestoppt" der Pumpe. Die Übernahme in die AAPS-Anwendung erfolgt voraussichtlich Ende Juli 2019. Weitere Details und den Zeitplan findest Du im [Projektboard](https://github.com/andyrozman/RileyLinkAAPS/projects/1).

**Hardware Voraussetzungen für AAPS:** RileyLink (mit 916 MHz Antenne).

**Loopbare Modelle:**512-522, 523(Firmware 2.4A oder niedriger), 554 (EU firmware 2.6A oder niedriger, CA Firmware 2.7A oder weniger). Das Selbe gilt für 7xx Modelle. Alle anderen Modelle sind aktuell nicht loopbar und werden es wahrscheinlich auch nie.

* * *

### Insulet Omnipod (with "old" Eros Pods) ([Homepage](https://www.myomnipod.com/en-gb/about/how-to-use))

**Loop-Status:** Momentan nicht nativ von AAPS unterstützt. Die Dekodierung des Omnipod-Protokolls ist abgeschlossen- [OpenOmni](http://www.openomni.org/) und [OmniAPS Slack](https://omniaps.slack.com/).

**Weitere Projekte:**

- Omnipy for AndroidAPS (stabil in Tests, erfordert Raspberry Pi und RileyLink sowie ein speziell angepasstes AndroidAPS) [Omnipy](https://github.com/winemug/omnipy)
- OmniCore für AndroidAPS (bisher unveröffentlicht, C# Code läuft "nativ" auf Android, benötigt nur den RileyLink und ein speziell modifiziertes AndroidAPS - Nachfolger des Omnipy Projects). [OmniCore](https://github.com/winemug/OmniCore)
- Loop für iOS (stabil, veröffentlicht, benötigt RileyLink). [Loop](https://loopkit.github.io/loopdocs/)

**Java-Implementierungen:** Bisher keine.

**AAPS implementation status:** Work on a native Java driver for Omnipod on AAPS is progressing on [AAPS-Omnipod/AndroidAPS](https://github.com/AAPS-Omnipod/AndroidAPS) (omnipod_eros branch). It does not require a Raspberry Pi. You can follow progress on [the OmniAPS Slack](https://omniaps.slack.com/) on channel android-driver. A first public test version is expected to be released around January 2020.

**Hardware Anforderungen für AAPS:** RileyLink mit Omnipod Firmware (2.x) und 433 MHz Antenne.

## Pumpen, die für den Loop geeignet sind

### Omnipod DASH ([Homepage](https://www.myomnipod.com/DASH))

**Loop status:** Aktuell von keinem der Loop-Systeme unterstützt. Die Pumpe ist ein Kandidat für den Loop, das Protokoll aber bisher unbekannt. Pumpe wird seit Januar 2019 verkauft.

**Hardware-Anforderungen für AAPS:** Vermutlich keine, da die Pumpe über Bluetooth kommuniziert.

**Kommentare:** Wir beobachten die Entwicklung von Omnipod DASH. Das Problem ist aber, dass Dash bisher in Europa, wo die meisten AAPS Entwickler leben, noch nicht verfügbar ist und dass das Kommunikationsprotokoll unbekannt ist. Wir mittels "reverse engeneering" versuchen, aus der offiziellen Dash APK herauszulesen, wie die Kommunikation funktioniert und dann auf Basis dieser Erkenntnisse mit der Umsetzung beginnen. Die aktuellen Entwicklungen findest du unter [DashAAPS](https://github.com/andyrozman/DashAAPS/projects/1), es wird aber in näherer Zukunft leider nicht verfügbar sein. Aktuell gibt es nur von ein "Proof of concept" (bis Meilenstein 2 abgeschlossen ist).

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

### Medtronic Bluetooth

**Kommentare:** Diese Pumpe soll in den kommenden Jahren auf den Markt kommen und von der Tidepool Loop Software unterstützt werden ([siehe dieser Artikel [englisch]](https://www.tidepool.org/blog/tidepool-loop-medtronic-collaboration)).

* * *

## Pumps no longer sold (companies no longer operating)

### Cellnovo Pumpe ([Homepage](https://www.cellnovo.com/en/homepage))

**Loop status:** Aktuell von keinem der Loop-Systeme unterstützt. Die Pumpe ist möglicherweise zum Loopen geeignet, aber da das Protokoll derzeit nicht bekannt ist, ist eine zeitnahe Umsetzung unwahrscheinlich.

**Hardware-Anforderungen für AAPS:** Vermutlich keine, da die Pumpe über Bluetooth kommuniziert.

**Hinweis zur Pumpe:** Es ist der Eindruck entstanden, dass sich das Unternehmen aus dem Pumpenmarkt zurückzieht. Mehr dazu findest Du in [diesem Arikel (englisch)](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU).

## Pumps that aren't Loopable

### Tandem:(any) ([Homepage](https://www.tandemdiabetes.com/))

**Loop Status:** Nicht zum Loopen geeignet.

Bis vor einiger Zeit wurde eine Firmware namens T:AP genutzt (Hinweise dazu in [diesem Artikel](https://www.liebertpub.com/doi/full/10.1089/dia.2018.0278?url_ver=Z39.88-2003&rfr_id=ori%3Arid%3Acrossref.org&rfr_dat=cr_pub%3Dpubmed&) [englisch]), die in Loop verwendet werden konnte. Allerdings ist diese Firmware nicht mehr verfügbar, da ein Upgrade auf x2 durchgeführt wurde. Die ursprüngliche Firmware war nie für den kommerziellen Einsatz konzipiert und diente nur experimentellen Zwecken im Rahmen eines Forschungsprojekts. Laut einem der Geschäftsführer des Unternehmens wird es nie eine offene Schnittstelle zur Tandem-Pumpe geben. Sie haben aber ein eigenes Closed Loop System namens Control-IQ entwickelt. Dies ist in den USA bereits verfügbar und soll 2020 auch nach Europa kommen.

* * *

### Animas Vibe

**Loop Status:** Nicht zum Loopen geeignet. Keine Fernsteuerung möglich. **Hinweis:** Pumpe wird nicht mehr verkauft. Das Unternehmen (Johnson&Johnson) hat sich aus dem Pumpengeschäft zurückgezogen.

* * *

### Animas Ping

**Loop Status:** Nicht zum Loopen geeignet. Bolus-Steuerung möglich, aber keine Steuerung von temporären Basalraten (TBR). **Note** Vertrieb nach Erscheinen der Vibe eingestellt.

## Anforderungen an Pumpen, um loopbar zu sein

**Grundvoraussetzungen**

- Pumpe muss irgendeine Art von Fernbedienung unterstützen. (BT, Radiofrequenz, etc.)
- Protokoll ist entschlüsselt/dokumentiert/etc.

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
- Historie auslesen 

**Weitere Anforderungen (nicht notwendig, aber Verfügbarkeit wäre gut)**

- Verlängerten Bolus setzen
- Verlängerten Bolus abbrechen
- Historie auslesen
- TDD (Total daily dose = Bolus + Basal pro Tag) auslesen

* * *

### Unterstützung weiterer Pumpen

Falls du noch andere Pumpen hast und du über deren Status Bescheid wissen willst, kontaktiere mich (@andyrozman auf Gitter). In zukünftigen Releases werden einige Pumpen-Konfigurationen hinzugefügt, die dann im Open Loop laufen können (du wirst dann die Möglichkeit haben, einen bestimmten Typ als virtuelle Pumpe auszuwählen, so dass deine Einstellungen geladen werden - [Feature request #863](https://github.com/MilosKozak/AndroidAPS/issues/863)).