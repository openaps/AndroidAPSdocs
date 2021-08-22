# Zukünftig ggf. loopbare Pumpen

Diese Liste gibt eine Übersicht über alle möglichen Pumpen und inwiefern sie zum Loopen bzw. für AAPS geeignet sind. Am Schluss findest du Informationen, welche Eigenschaften eine Insulinpumpe haben müsste um damit loopen zu können.

## Pumpen, die für den Loop geeignet sind

### Omnipod DASH ([Homepage](https://www.myomnipod.com/DASH))

**Loop-Status:** Aktuell von keinem der Loop-Systeme unterstützt. Die Pumpe ist ein Kandidat für den Loop, das Protokoll aber bisher unbekannt. Pumpe wird seit Januar 2019 verkauft.

**Hardware-Anforderungen für AAPS:** Vermutlich keine, da die Pumpe über Bluetooth kommuniziert.

**Anmerkungen:** Die Entwickler prüfen das Protokoll (durch Reverse Engineering der Original-App) und eine Lösung für AAPS, nachdem die Pumpe jetzt auf der ganzen Welt verfügbar ist. Es gibt noch keine Einschätzungen, wann diese verfügbar sein wird oder wann der erste Test beginnt. Wenn Du Dich für die Fortschritte interessierst oder unterstützen willst, erreichst Du die Gruppe im WeAreNotWaiting Discord Channel. Gib Dein Interesse an der androidaps Gruppe bekannt und jemand wird Dir mehr Infos geben.

* * *

### Ypsomed Pumpe ([Homepage](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Loop status:** Version 1 - 1.5 (2. Quartal 2018) sind keine Kandiadaten für den Loop. Beide haben zwar Bluetooth, die Kommunikation ist aber sehr eingeschränkt und funktioniert nur von der Pumpe zur App. Der Hersteller will bis Ende 2021 eine neue Version - Nickname DOSE (1.6) - herausbringen, die Bolus- und TBR-Kommandos von der App erlauben soll. Sie planen eine eigene Loop-App in 2021. Weitere Infos findest Du auf [dieser Seite.](https://www.mylife-diabetescare.com/en/loop-program.html)

**Hardware Voraussetzungen für AAPS:** Keine, da die Pumpe über Bluetooth kommuniziert.

**Anmerkungen:** Aktuell arbeiten zwei Gruppen an einem Treiber. Daher erwarten wir Support in AAPS bald nachdem die neue Version veröffentlicht wurde. Eine Gruppe wird von Ypsomed unterstützt und hilft bei medizinischen Studien, die in Australien stattfinden. Die andere Gruppe arbeitet unabhängig via Reverse Engineering der Original-App.

* * *

### Kaleido ([Homepage](https://www.hellokaleido.com/))

**Loop-Status:** Aktuell von keinem der Loop-Systeme unterstützt. Die Pumpe ist möglicherweise zum Loopen geeignet, aber da das Protokoll derzeit nicht bekannt ist, ist eine zeitnahe Umsetzung unwahrscheinlich.

**Hardware-Anforderungen für AAPS:** Vermutlich keine, da die Pumpe über Bluetooth kommuniziert.

* * *

### Medtrum A6/P6/C6 ([Homepage](https://www.medtrum.com/P6.html))

**Loop-status** Ist ein Loop-Kandidat. Das Unternehmen bietet sein eigenes, limitiertes "Halb-Loop-System" (A6) an. Steuerbar per iPhone App. Aktuell keine Android App verfügbar.

**Hardware-Anforderungen für AAPS:** Vermutlich keine, Die Pumpe scheint über Bluetooth zu kommunizieren.

* * *

### EOFLOW ([Homepage](http://www.eoflow.com/eng/main/main.html))

**Loop-status** Ist ein Loop-Kandidat. Die verwendete Fernbedienung ist ein modifiziertes Android Gerät. (Pumpe ist aktuell nur in Korea verfügbar.)

**Hardware-Anforderungen für AAPS:** Vermutlich keine, Die Pumpe scheint über Bluetooth zu kommunizieren.

* * *

### Accu-Chek Solo ([Homepage](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Loop-status** Ist ein Loop-Kandidat.

**Hardware Voraussetzungen für AAPS:** Keine, Die Pumpe scheint über Bluetooth zu kommunizieren.

**Comments:** There are some developers looking into decoding the protocol, but so far this is only in preliminary phases.

* * *

### Tandem: t:slim X2 ([Homepage](https://www.tandemdiabetes.com/))

**Loop status:** Not yet loopable.

While in the past company has decided not to allow their pumps to be controlled by external devices, it seems that last few years have been a game changer. Company decided to upgrade their t:slim X2 pump to be able to be controlled remotely (via t:connect app), which means that avenues are opened that we might be able to look forward to have control of pump via AAPS in the future. New pump firmware is planned to be released soon (this or next year, before their tubeless pump t:sport comes out). There are no details yet, what operations will be possible from t:connect (Bolus definetly, everything else unknown).

**Hardware Voraussetzungen für AAPS:** Keine, Die Pumpe scheint über Bluetooth zu kommunizieren.

* * *

### Tandem: t:sport ([Homepage](https://www.tandemdiabetes.com/about-us/pipeline))

**Loop-status** Ist ein Loop-Kandidat. Pump hasn't been released yet, but FDA process is already running, so it should be out sooner, rather than later (in US).

**Hardware Voraussetzungen für AAPS:** Keine, Die Pumpe scheint über Bluetooth zu kommunizieren.

* * *

### Medtronic Bluetooth

**Comments:** This is pump that will come out in next few years and is planned to be supported in Tidepool Loop software ([see this article](https://www.tidepool.org/blog/tidepool-loop-medtronic-collaboration).

### Willcare Insulin pump ([Homepage](http://en.shinmyungmedi.com))

**Loop status:** At the moment its not Loop candidate, but we were contacted by their staff and they interested in extending their pump to be loopable (at the moment I think its missing only get/set profile commands).

**Hardware Voraussetzungen für AAPS:** Keine, Die Pumpe scheint über Bluetooth zu kommunizieren.

**Comments:** Since company is interested in integration with AAPS, they might do implementation themselves.

* * *

## Pumps no longer sold (companies no longer operating)

### Cellnovo Pump ([see businesswire.com](https://www.businesswire.com/news/home/20190328005829/en/Cellnovo-Stops-Manufacturing-and-Commercial-Operations))

**Loop-Status:** Aktuell von keinem der Loop-Systeme unterstützt. Die Pumpe ist möglicherweise zum Loopen geeignet, aber da das Protokoll derzeit nicht bekannt ist, ist eine zeitnahe Umsetzung unwahrscheinlich.

**Hardware-Anforderungen für AAPS:** Vermutlich keine, da die Pumpe über Bluetooth kommuniziert.

**Note about product:** It seems that company decided to exit the Pump Business. You can see more in this [article](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU)

## Pumpen, die nicht für den Loop geeignet sind

### Animas Vibe

**Loop status:** Not loopable. No remote control possibility. **Note:** Pump is not being sold anymore. Company stopped working in Pump bussiness (J&J).

* * *

### Animas Ping

**Loop status:** Not loopable. It has bolus possibility, but no TBR one. **Note** Stopped being sold when Vibe came out.

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
- History auslesen
- TDD (Total daily dose = Bolus + Basal pro Tag) auslesen

* * *

### Other pumps support

If you have any other pumps you would like to see status on, please contact us on discord.