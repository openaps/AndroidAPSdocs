# Zukünftig ggf. loopbare Pumpen

Dies ist eine Liste einiger Pumpen auf dem Markt, mit dem Stand ihrer Unterstützung in anderen Loop-Systemen und ihrem Status in AAPS. Am Ende findest Du einige Informationen dazu, was eine Pumpe braucht, um „Loop-fähig“ zu sein.

    {contents} Inhaltsverzeichnis
    :depth: 1
    :local: true

## Pumpen in der AAPS-Integrationsphase

**Demnächst:** Treiber für diese Pumpen sind in Entwicklung und laufen bereits in Test-Builds.

Omnipod 5 ([Homepage](https://www.omnipod.com/))

![Omnipod 5 driver in development](../images/future-pumps/omnipod5-driver.png)

Tandem: t:Mobi ([Homepage](https://www.tandemdiabetes.com/))

![Tandem t:Mobi driver in development](../images/future-pumps/tandem-mobi-driver.png)

## Pumpen, die für den Loop geeignet sind

### Kaleido ([Homepage](https://www.hellokaleido.com/))

**Loop Status:** Pumpe ist ein Loop-Kandidat, aber aktuell ist das Protokoll noch unbekannt. Kein Interesse des Herstellers an Open Source.

**Hardware Voraussetzungen für AAPS:** Keine. Die Pumpe scheint über Bluetooth zu kommunizieren.

### Tandem: t:slim X3 ([Homepage](https://www.tandemdiabetes.com/about-us/pipeline))

**Loop Status:** Möglicher künftiger Loop-Kandidat. Die Hoffnung ist, dass die t:slim X3 die volle Steuerung über ein Smartphone erlaubt, was eine Unterstützung durch AAPS ermöglichen würde; Zeitplan und Funktionen sind aber noch unbekannt.

**Hardware Voraussetzungen für AAPS:** Keine. Sie wird voraussichtlich Bluetooth haben.

**Kommentare:** Noch nicht erschienen. Die t:slim X3 scheint in Tandems Planung immer wieder zugunsten der t:Mobi (einschließlich einer schlauchlosen Version) und der Sigi (ihrer Patch-Pumpe) zurückgestellt zu werden.

### Twiist ([Homepage](https://www.twiist.com/))

**Loop Status:** Loop-Kandidat.

**Hardware Voraussetzungen für AAPS:** Keine. Sie hat Bluetooth.

### Willcare Insulin Pumpe ([Homepage](http://shinmyungmedi.com/en/))

**Loop Status:** Derzeit kein Loop-Kandidat, aber Mitarbeiter des Herstellers haben uns kontaktiert und sind daran interessiert, die Pumpe loopfähig zu machen (es scheinen nur die Befehle zum Lesen und Setzen des Profils zu fehlen).

**Hardware Voraussetzungen für AAPS:** Keine. Die Pumpe scheint über Bluetooth zu kommunizieren.

**Kommentare:** Da das Unternehmen Interesse an der Integration mit AAPS hat, könnten sie evtl. selbst die Umsetzung vornehmen.

### Ypsopump ([Homepage](https://www.ypsomed.com/))

**Loop Status:** Loop-Kandidat. Das Bluetooth-Protokoll der Pumpe wurde von der Community entschlüsselt (Reverse Engineering), sodass eine Kommunikation grundsätzlich möglich ist.

**Hardware Voraussetzungen für AAPS:** Keine. Sie hat Bluetooth.

**Kommentare:** Die Ypsopump schützt ihre Bluetooth-Kommunikation mit einer aufwendigen Verschlüsselung eines Drittanbieters. Die Arbeit damit ist technisch anspruchsvoll, was den Bau und die Pflege eines zuverlässigen Treibers schwierig macht. Einen produktionsreifen AAPS-Treiber gibt es noch nicht.

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

**Kommentare:** Das Bluetooth-Protokoll von Tandem wurde entschlüsselt, auf der t:slim X2 können aber nur Boli abgegeben werden – die Basalabgabe lässt sich nicht steuern –, daher kann sie nicht sicher zum Loopen verwendet werden. Das wird sich wohl nur ändern, wenn Tandem die volle Steuerung der X2 über ein Smartphone erlaubt, was eher mit der t:slim X3 kommen dürfte.

### Accu-Chek Solo

**Kommentare:** Die Community konnte keine Kommunikation mit der Solo Pumpe aufbauen.

## Anforderungen an Pumpen, um loopbar zu sein

**Voraussetzungen**

- Pumpe muss irgendeine Art von Remote-Steuerung unterstützen. (BT, Radiofrequenz, etc.)
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