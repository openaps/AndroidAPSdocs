# Zukünftig ggf. loopbare Pumpen

Diese Liste gibt eine Übersicht über alle möglichen Pumpen und inwiefern sie zum Loopen bzw. für AAPS geeignet sind. Am Schluss findest du Informationen, welche Eigenschaften eine Insulinpumpe haben müsste um damit loopen zu können.

    {contents} Table of contents
    :depth: 1
    :local: true

## Pumps in AAPS integration phase

**Coming soon:** drivers for these pumps are in development and already running in test builds.

Omnipod 5 ([Homepage](https://www.omnipod.com/))

![Omnipod 5 driver in development](../images/future-pumps/omnipod5-driver.png)

Tandem: t:Mobi ([Homepage](https://www.tandemdiabetes.com/))

![Tandem t:Mobi driver in development](../images/future-pumps/tandem-mobi-driver.png)

## Pumpen, die für den Loop geeignet sind

### Kaleido ([Homepage](https://www.hellokaleido.com/))

**Loop Status:** Pumpe ist ein Loop-Kandidat, aber aktuell ist das Protokoll noch unbekannt. Kein Interesse des Herstellers an Open Source.

**Hardware Voraussetzungen für AAPS:** Keine. Die Pumpe scheint über Bluetooth zu kommunizieren.

### Tandem: t:slim X3 ([Homepage](https://www.tandemdiabetes.com/about-us/pipeline))

**Loop status:** Possible future Loop candidate. The hope is that t:slim X3 will allow full control from a phone, which would enable AAPS support, but the timeline and features are still unknown.

**Hardware Voraussetzungen für AAPS:** Keine. It is expected to be Bluetooth enabled.

**Comments:** Not yet released. t:slim X3 appears to be repeatedly deprioritized on Tandem's roadmap in favour of t:Mobi (including a tubeless version) and Sigi (their patch pump).

### Twiist ([Homepage](https://www.twiist.com/))

**Loop status:** Loop candidate.

**Hardware Voraussetzungen für AAPS:** Keine. It is Bluetooth enabled.

### Willcare Insulin Pumpe ([Homepage](http://shinmyungmedi.com/en/))

**Loop Status:** Momentan kein Loop-Kandidat. Aber wir wurden von Mitarbeitern des Herstellers kontaktiert, da sie daran interessiert sind, ihre Pumpe loopfähig zu machen. Momentan fehlen wohl nur Kommandos zum Lesen und Schreiben der Profile.

**Hardware Voraussetzungen für AAPS:** Keine. Die Pumpe scheint über Bluetooth zu kommunizieren.

**Kommentare:** Da das Unternehmen Interesse an der Integration mit AAPS hat, könnten sie evtl. selbst die Umsetzung vornehmen.

### Ypsopump ([Homepage](https://www.ypsomed.com/))

**Loop status:** Loop candidate. The pump's Bluetooth protocol has been reverse-engineered by the community, so communicating with it is possible in principle.

**Hardware Voraussetzungen für AAPS:** Keine. It is Bluetooth enabled.

**Comments:** The Ypsopump protects its Bluetooth communication with heavy third-party encryption. Working with it is technically demanding, which makes building and maintaining a reliable driver hard. There is no production-ready AAPS driver yet.

## Nicht mehr verkaufte Pumpen (Firmen nicht mehr aktiv)

### Animas Vibe

### Animas Ping

### Cellnovo

### Accu-Chek Insight

**Kommentare:** Supportende März 2025.

## Pumpen, die nicht für den Loop geeignet sind

### Medtronic Bluetooth

**Anmerkungen:** Von Medtronic [zurückgezogen](https://www.tidepool.org/blog/tidepool-loop-partner-update-ace-pumps).

### Tandem: t:slim X2 ([Homepage](https://www.tandemdiabetes.com/))

**Comments:** The Tandem Bluetooth protocol has been reverse-engineered, but on the t:slim X2 only boluses can be delivered — basal delivery cannot be controlled — so it cannot be used safely for looping. This is unlikely to change unless Tandem allows full control of the X2 from a phone, which would more probably arrive with the t:slim X3 instead.

### Accu-Chek Solo

**Kommentare:** Die Community konnte keine Kommunikation mit der Solo Pumpe aufbauen.

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
- Basalprofil abrufen (fast eine Anforderung)
- Basal Profil einstellen (nice to have)
- History auslesen 

**Weitere Anforderungen (nicht notwendig, aber Verfügbarkeit wäre gut)**

- Verlängerten Bolus setzen
- Verlängerten Bolus abbrechen
- History auslesen
- TDD (Total daily dose = Bolus + Basal pro Tag) auslesen

### Unterstützung weiterer Pumpen

Falls du noch andere Pumpen hast und du über deren Status Bescheid wissen willst, kontaktiere uns auf discord.