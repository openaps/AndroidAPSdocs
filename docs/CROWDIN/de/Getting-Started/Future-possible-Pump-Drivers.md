# Zukünftig ggf. loopbare Pumpen

Diese Liste gibt eine Übersicht über alle möglichen Pumpen und inwiefern sie zum Loopen bzw. für AAPS geeignet sind. Am Schluss findest du Informationen, welche Eigenschaften eine Insulinpumpe haben müsste um damit loopen zu können.

## Pumpen, die für den Loop geeignet sind

### Omnipod DASH ([Homepage](https://www.myomnipod.com/DASH))

**Loop-Status:** Aktuell von keinem der Loop-Systeme unterstützt. Die Pumpe ist ein Kandidat für den Loop, das Protokoll aber bisher unbekannt. Pumpe wird seit Januar 2019 verkauft.

**Hardware-Anforderungen für AAPS:** Vermutlich keine, da die Pumpe über Bluetooth kommuniziert.

**Kommentare:** Wir beobachten die Entwicklung von Omnipod DASH. Das Problem ist aber, dass Dash bisher in Europa, wo die meisten AAPS Entwickler leben, noch nicht verfügbar ist und dass das Kommunikationsprotokoll unbekannt ist. Wir mittels "reverse engeneering" versuchen, aus der offiziellen Dash APK herauszulesen, wie die Kommunikation funktioniert und dann auf Basis dieser Erkenntnisse mit der Umsetzung beginnen. Die aktuellen Entwicklungen findest du unter [DashAAPS](https://github.com/andyrozman/DashAAPS/projects/1), es wird aber in näherer Zukunft leider nicht verfügbar sein. Aktuell gibt es nur von ein "Proof of concept" (bis Meilenstein 2 abgeschlossen ist).

* * *

### Ypsomed Pumpe ([Homepage](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Loop status:** Version 1 - 1.5 (2. Quartal 2018) sind keine Kandiadaten für den Loop. Obwohl sie über Bluetooth kommuniziert, scheint die Datenübertrag sehr limitiert zu sein (nur in eine Richtung: Pumpe zu App). Das Unternehmen plant, die Pumpe zur Unterstützung der Bolus-Fernabgabe zu erweitern (Update geplant für Ende 2021). Später planen sie, weitere Funktionen hinzuzufügen, die fürs Loopen erforderlich sind. Die offizielle App wird das in Zukunft unterstützen (geplant für 2022, kein genaues Datum bekannt). Da sie ihr eigenes Loop-System planen (siehe Informationen auf [dieser Seite](https://www.mylife-diabetescare.com/en/loop-program.html), werden sie keine Unterstützung für Entwickler von DIY-Loop-Systemen anbieten, zumindest aktuell nicht.

**Hardware-Anforderungen für AAPS:** Vermutlich keine, da die Pumpe über Bluetooth kommuniziert.

* * *

### Kaleido ([Homepage](https://www.hellokaleido.com/))

**Loop-Status:** Aktuell von keinem der Loop-Systeme unterstützt. Die Pumpe ist möglicherweise zum Loopen geeignet, aber da das Protokoll derzeit nicht bekannt ist, ist eine zeitnahe Umsetzung unwahrscheinlich.

**Hardware-Anforderungen für AAPS:** Vermutlich keine, da die Pumpe über Bluetooth kommuniziert.

* * *

### Medtrum A6/P6/C6 ([Homepage](http://www.medtrum.com/P6.html))

**Loop-status** Ist ein Loop-Kandidat. Das Unternehmen bietet sein eigenes, limitiertes "Halb-Loop-System" (A6) an. Steuerbar per iPhone App. Aktuell keine Android App verfügbar.

**Hardware-Anforderungen für AAPS:** Vermutlich keine, die Pumpe scheint über Bluetooth zu kommunizieren.

* * *

### EOFLOW ([Homepage](http://www.eoflow.com/eng/main/main.html))

**Loop-status** Ist ein Loop-Kandidat. Die verwendete Fernbedienung ist ein modifiziertes Android Gerät. (Pumpe ist aktuell nur in Korea verfügbar.)

**Hardware-Anforderungen für AAPS:** Vermutlich keine, die Pumpe scheint über Bluetooth zu kommunizieren.

* * *

### Accu-Chek Solo ([Homepage](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Loop-status** Ist ein Loop-Kandidat. Die Pumpe kommt Ende 2018 in ausgewählten europäischen Ländern auf den Markt. Es gibt Gerüchte, nachdem diese über eine Android App auf einem speziellen Gerät gesteuert wird.

**Hardware-Anforderungen für AAPS:** Vermutlich keine, die Pumpe scheint über Bluetooth zu kommunizieren.

### Medtronic Bluetooth

**Kommentare:** Diese Pumpe soll in den kommenden Jahren auf den Markt kommen und von der Tidepool Loop Software unterstützt werden ([siehe dieser Artikel [englisch]](https://www.tidepool.org/blog/tidepool-loop-medtronic-collaboration)).

### Willcare Insulin Pumpe ([Homepage](http://en.shinmyungmedi.com/))

**Loop-Status:** Momentan kein Loop-Kandidat. Aber wir wurden von Mitarbeitern des Herstellers kontaktiert, da sie daran interessiert sind, ihre Pumpe loopfähig zu machen. Momentan fehlen wohl nur Kommandos zum Lesen und Schreiben der Profile.

**Hardware Voraussetzungen für AAPS:** Keine, die Pumpe scheint über Bluetooth zu kommunizieren.

**Kommentare:** Da das Unternehmen Interesse an der Integration mit AAPS hat, könnten sie evtl. selbst die Umsetzung vornehmen.

* * *

## Pumps no longer sold (companies no longer operating)

### Cellnovo Pump ([siehe Artikel bei businesswire.com](https://www.businesswire.com/news/home/20190328005829/en/Cellnovo-Stops-Manufacturing-and-Commercial-Operations))

**Loop-Status:** Aktuell von keinem der Loop-Systeme unterstützt. Die Pumpe ist möglicherweise zum Loopen geeignet, aber da das Protokoll derzeit nicht bekannt ist, ist eine zeitnahe Umsetzung unwahrscheinlich.

**Hardware-Anforderungen für AAPS:** Vermutlich keine, da die Pumpe über Bluetooth kommuniziert.

**Note about product:** It seems that company decided to exit the Pump Business. You can see more in this [article](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU)

## Pumpen, die nicht für den Loop geeignet sind

### Tandem (alle) ([Homepage](https://www.tandemdiabetes.com/))

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
- History auslesen
- TDD (Total daily dose = Bolus + Basal pro Tag) auslesen

* * *

### Unterstützung weiterer Pumpen

Falls du noch andere Pumpen hast und du über deren Status Bescheid wissen willst, kontaktiere mich (@andyrozman auf Gitter). In zukünftigen Releases werden einige Pumpen-Konfigurationen hinzugefügt, die dann im Open Loop laufen können (du wirst dann die Möglichkeit haben, einen bestimmten Typ als virtuelle Pumpe auszuwählen, so dass deine Einstellungen geladen werden - [Feature request #157](https://github.com/nightscout/AndroidAPS/issues/157)).