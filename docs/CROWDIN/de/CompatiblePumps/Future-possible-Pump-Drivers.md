* * *

orphan: true

* * *

# Zukünftig ggf. loopbare Pumpen

Diese Liste gibt eine Übersicht über alle möglichen Pumpen und inwiefern sie zum Loopen bzw. für AAPS geeignet sind. Am Schluss findest du Informationen, welche Eigenschaften eine Insulinpumpe haben müsste um damit loopen zu können.

## Pumpen, die für den Loop geeignet sind

### Kaleido ([Homepage](https://www.hellokaleido.com/))

**Loop Status:** Pumpe ist ein Loop-Kandidat, aber aktuell ist das Protokoll noch unbekannt. Kein Interesse des Herstellers an Open Source.

**Hardware Voraussetzungen für AAPS:** Keine. Die Pumpe scheint über Bluetooth zu kommunizieren.

### Tandem: t:slim X2 ([Homepage](https://www.tandemdiabetes.com/))

**Loop Status:** Noch nicht zum Loopen geeignet.

Während das Unternehmen in der Vergangenheit entschieden hat, seine Pumpen nicht durch externe Geräte steuern zu lassen, gab es hier in den letzten Jahren Veränderungen. Die t:slim X2 Pumpe wurde aktualisiert, um über die t:connect App ferngesteuert zu werden. Das bedeutet, dass die Türen geöffnet wurden, damit künftig eine Nutzung der Pumpe mit AAPS möglich sein könnte. Eine neue Pumpenfirmware soll in Kürze veröffentlicht werden - dieses oder nächstes Jahr, bevor die schlauchlose Pumpe t:sport auf den Markt kommt. Details, welche Funktionen über t:connect steuerbar sind, gibt es noch nicht - Boli auf jeden Fall, alles andere ist unbekannt.

**Hardware Voraussetzungen für AAPS:** Keine. Die Pumpe scheint über Bluetooth zu kommunizieren.

### Tandem: t:Mobi & t:slim X3 & t:Mobi Tubeless ([Homepage](https://www.tandemdiabetes.com/about-us/pipeline))

**Loop Status:** Alle drei Pumpen werden Loop Kandidaten sein.

Es wird auf den Markteintritt der t:mobi in Europa gewartet (die anderen beiden Pumpen sind noch nirgendwo freigegeben). Die Entwicklung der AAPS t:mobi Unterstützung hat bereits begonnen und sollte bis Ende 2025 verfügbar sein (weitere Informationen hierzu gibt es auf Discord).

**Hardware Voraussetzungen für AAPS:** Keine. Die Pumpe scheint über Bluetooth zu kommunizieren.

### Willcare Insulin Pumpe ([Homepage](http://shinmyungmedi.com/en/))

**Loop Status:** Momentan kein Loop-Kandidat. Aber wir wurden von Mitarbeitern des Herstellers kontaktiert, da sie daran interessiert sind, ihre Pumpe loopfähig zu machen. Momentan fehlen wohl nur Kommandos zum Lesen und Schreiben der Profile.

**Hardware Voraussetzungen für AAPS:** Keine. Die Pumpe scheint über Bluetooth zu kommunizieren.

**Kommentare:** Da das Unternehmen Interesse an der Integration mit AAPS hat, könnten sie evtl. selbst die Umsetzung vornehmen.

## Nicht mehr verkaufte Pumpen (Firmen nicht mehr aktiv)

### Animas Vibe

### Animas Ping

### Cellnovo

### Accu-Chek Insight

**Kommentare:** Supportende März 2025.

## Pumpen, die nicht für den Loop geeignet sind

### Medtronic Bluetooth

**Anmerkungen:** Von Medtronic [zurückgezogen](https://www.tidepool.org/blog/tidepool-loop-partner-update-ace-pumps).

### Accu-Chek Solo

**Kommentare:** Die Community konnte keine Kommunikation mit der Solo Pumpe aufbauen.

### Ypsomed Pumpe

**Kommentare:** Ypso hat sehr starke Drittanbieter-Verschlüsselung eingeführt.

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