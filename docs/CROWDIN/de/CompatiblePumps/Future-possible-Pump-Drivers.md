* * *

orphan: true

* * *

# Zukünftig ggf. loopbare Pumpen

Diese Liste gibt eine Übersicht über alle möglichen Pumpen und inwiefern sie zum Loopen bzw. für AAPS geeignet sind. Am Schluss findest du Informationen, welche Eigenschaften eine Insulinpumpe haben müsste um damit loopen zu können.

## Pumpen, die für den Loop geeignet sind

### Ypsomed Pumpe ([Homepage](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Loop Status:** Version 1 - 1.5 (2Q/2018) sind nicht zum Loopen geeignet. Die bestehende BT-Kommunikation ist sehr begrenzt und nur ein eine Richtung: Pumpe->App. Im Juni 2022 veröffentlichte das Unternehmen (in Deutschland) die neue Version mit dem Namen DOSE (1.6), welche das Setzen von Bolus und TBR aus ihrer App erlaubt. Der Plan zur Umsetzung der eigenen Loop wurde abgebrochen und sie beschlossen, mit CamAPS (Unterstützung bereits implementiert) zusammenzuarbeiten und die CamAPS Loop-Lösung zu nutzen. Weitere Infos findest Du auf [dieser Seite.](https://www.mylife-diabetescare.com/en/loop-program.html)

**Hardware Voraussetzungen für AAPS:** Keine. Die Pumpe kommuniziert über Bluetooth.

**Kommentare:** Für die Dose Version der Pumpe wurde eine starke Verschlüsselung hinzugefügt, so dass die Wahrscheinlichkeit hoch ist, dass diese Pumpe in naher Zukunft (oder immer) nicht von AAPS unterstützt wird. Wir hatten Entwickler, die mit Ypsomed zusammengearbeitet und mit medizinischen Studien geholfen haben, so dass vielleicht seine Version des Treibers freigegeben wird, aber es besteht nur eine kleine Chance dafür. Du kannst mehr Informationen in unserem Discord Channel "ypsopump-talk" finden.

### Kaleido ([Homepage](https://www.hellokaleido.com/))

**Loop Status:** Zur Zeit nicht umgesetzt. Die Pumpe ist möglicherweise zum Loopen geeignet, aber da das Protokoll derzeit nicht bekannt ist, ist eine zeitnahe Umsetzung unwahrscheinlich.

**Hardware-Anforderungen für AAPS:** Vermutlich keine, da die Pumpe über Bluetooth kommuniziert. Die Pumpe kommuniziert über Bluetooth.

### Equil (Pumpe von Aidex/GlucoRx/MicroTechMD) ([Homepage](https://www.glucorx.ie/glucorx-equil/))

**Loop-status** Ist ein Loop-Kandidat.

**Hardware Voraussetzungen für AAPS:** Keine. Die Pumpe scheint über Bluetooth zu kommunizieren.

**Kommentar:** Einige Entwickler haben begonnen zu prüfen, ob die Pumpe in AAPS unterstützt werden kann, aber dies ist noch in der Anfangsphase. Du kannst mehr Informationen in unserem Discord Channel "equil" finden.

### Accu-Chek Solo ([Homepage](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Loop-status** Ist ein Loop-Kandidat.

**Hardware Voraussetzungen für AAPS:** Keine. Die Pumpe scheint über Bluetooth zu kommunizieren.

**Anmerkung:** Es gibt einige Entwickler, die die Dekodierung des Protokolls prüfen, aber bis jetzt befindet sich dieses Projekt noch in einer vorläufigen Phase.

### Tandem: t:slim X2 ([Homepage](https://www.tandemdiabetes.com/))

**Loop Status:** Noch nicht zum Loopen geeignet.

Während das Unternehmen in der Vergangenheit entschieden hat, seine Pumpen nicht durch externe Geräte steuern zu lassen, gab es hier in den letzten Jahren Veränderungen. Die t:slim X2 Pumpe wurde aktualisiert, um über die t:connect App ferngesteuert zu werden. Das bedeutet, dass die Türen geöffnet wurden, damit künftig eine Nutzung der Pumpe mit AAPS möglich sein könnte. Eine neue Pumpenfirmware soll in Kürze veröffentlicht werden - dieses oder nächstes Jahr, bevor die schlauchlose Pumpe t:sport auf den Markt kommt. Details, welche Funktionen über t:connect steuerbar sind, gibt es noch nicht - Boli auf jeden Fall, alles andere ist unbekannt.

**Hardware Voraussetzungen für AAPS:** Keine. Die Pumpe scheint über Bluetooth zu kommunizieren.

### Tandem: t:Mobi & t:slim X3 & t:Mobi Tubeless ([Homepage](https://www.tandemdiabetes.com/about-us/pipeline))

**Loop Status:** Alle drei Pumpen werden Loop Kandidaten sein.

Sie planen zuerst die t:Mobi (vorher t:sport genannt) Ende 2022 oder 2023 auf den Markt zu bringen. Danach sollen t:slim X3 (vielleicht 2023) und später t:Mobi Tubeless folgen. t:mobi's wird nur über die Telefon-App kontrollierbar sein, während X3 ähnlich aussehen wird wie X2, mit einigen neuen Funktionen (Remote-Update von Firmware, Fernbedienung über Telefon-App, etc.).

**Hardware Voraussetzungen für AAPS:** Keine. Die Pumpe scheint über Bluetooth zu kommunizieren.

### Willcare Insulin Pumpe ([Homepage](http://shinmyungmedi.com/en/))

**Loop-Status:** Momentan kein Loop-Kandidat. Aber wir wurden von Mitarbeitern des Herstellers kontaktiert, da sie daran interessiert sind, ihre Pumpe loopfähig zu machen. Momentan fehlen wohl nur Kommandos zum Lesen und Schreiben der Profile.

**Hardware Voraussetzungen für AAPS:** Keine. Die Pumpe scheint über Bluetooth zu kommunizieren.

**Kommentare:** Da das Unternehmen Interesse an der Integration mit AAPS hat, könnten sie evtl. selbst die Umsetzung vornehmen.

## Pumps no longer sold (companies no longer operating)

### Cellnovo Pump ([siehe Artikel bei businesswire.com](https://www.businesswire.com/news/home/20190328005829/en/Cellnovo-Stops-Manufacturing-and-Commercial-Operations))

**Loop Status:** Zur Zeit nicht umgesetzt. Die Pumpe ist möglicherweise zum Loopen geeignet, aber da das Protokoll derzeit nicht bekannt ist, ist eine zeitnahe Umsetzung unwahrscheinlich.

**Hardware-Anforderungen für AAPS:** Vermutlich keine, da die Pumpe über Bluetooth kommuniziert. Die Pumpe kommuniziert über Bluetooth.

**Note about product:** It seems that company decided to exit the Pump Business. You can see more in this [article](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU)

## Pumpen, die nicht für den Loop geeignet sind

### Animas Vibe

**Loop Status:** Nicht zum Loopen geeignet. Keine Fernsteuerung möglich. **Hinweis:** Pumpe wird nicht mehr verkauft. Das Unternehmen (Johnson&Johnson) hat sich aus dem Pumpengeschäft zurückgezogen.

### Animas Ping

**Loop Status:** Nicht zum Loopen geeignet. Bolus-Steuerung möglich, aber keine Steuerung von temporären Basalraten (TBR). **Note** Vertrieb nach Erscheinen der Vibe eingestellt.

### Medtronic Bluetooth

**Comments:** Medtronic [withdrew](https://www.tidepool.org/blog/tidepool-loop-partner-update-ace-pumps).

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