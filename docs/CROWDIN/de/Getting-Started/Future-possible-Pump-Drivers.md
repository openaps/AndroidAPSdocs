# Zukünftig ggf. loopbare Pumpen

Diese Liste gibt eine Übersicht über alle möglichen Pumpen und inwiefern sie zum Loopen bzw. für AAPS geeignet sind. Am Schluss findest du Informationen, welche Eigenschaften eine Insulinpumpe haben müsste um damit loopen zu können.

## Pumpen, die für den Loop geeignet sind

* * *

### EOPatch2 ([Homepage](http://www.eoflow.com/eng/main/main.html))

**Loop-status** Ist ein heißer Loop-Kandidat. Die verwendete Fernbedienung ist bereits ein modifiziertes Android Gerät. (Pumpe ist aktuell nur in Korea verfügbar.) Without commitment look out for AAPS 3.2.

**Hardware-Anforderungen für AAPS:** Vermutlich keine, Die Pumpe scheint über Bluetooth zu kommunizieren.

* * *

### Ypsomed Pumpe ([Homepage](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Loop Status:** Version 1 - 1.5 (2Q/2018) sind nicht zum Loopen geeignet. While they do have BT communication, communication is very limited and uni directional: Pump->App. In June 2022 (in Germany) company released, new version nicknamed DOSE (1.6), which allows setting bolus and TBR from their App. Plan to implement their own Loop was cancelled and they decided to partner up with CamAPS (support already implemented) and use their loop solution. More info see this [page](https://www.mylife-diabetescare.com/en/loop-program.html)

**Hardware requirement for AAPS:** None. It's BT enabled.

**Comments:** Dose version of pump had very heavy encryption added, so there is big probababilty that this pump won't be supported by AAPS in near future (or ever). We had developer working with Ypsomed and helping with medical trials, so maybe his version of driver will be alowed to be released, but this is just small possibility of that. You can find more information on our discord in channel "ypsopump-talk".

* * *

### Kaleido ([Homepage](https://www.hellokaleido.com/))

**Loop status:** Currently not supported by any of loop system. Pump is a Loop candidate, but since protocol is unknown at the time, I am not seeing this pump supported very soon.

**Hardware-Anforderungen für AAPS:** Vermutlich keine, It's BT enabled.

* * *

### Medtrum A6/P6/C6 ([Homepage](https://www.medtrum.com/product/nanopump.html))

**Loop-status** Ist ein Loop-Kandidat. Das Unternehmen bietet sein eigenes, limitiertes "Halb-Loop-System" (A6) an. Steuerbar per iPhone App. Aktuell keine Android App verfügbar.

**Hardware-Anforderungen für AAPS:** Vermutlich keine, Die Pumpe scheint über Bluetooth zu kommunizieren.

**Comment:** Some investigation has started to see if this pump can be supported in AAPS very easily. You can find more information on our discord in channel "medtrum".

* * *

### Equil (pump from Aidex/GlucoRx/MicroTechMD) ([Homepage](https://www.glucorx.ie/glucorx-equil/))

**Loop-status** Ist ein Loop-Kandidat.

**Hardware requirement for AAPS:** None. Die Pumpe scheint über Bluetooth zu kommunizieren.

**Comment:** Some people started looking into supporting pump in AAPS, but this is still in beginning phases. You can find more information on our discord in channel "equil".

* * *

### Accu-Chek Solo ([Homepage](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Loop-status** Ist ein Loop-Kandidat.

**Hardware requirement for AAPS:** None. Die Pumpe scheint über Bluetooth zu kommunizieren.

**Comments:** There are some developers looking into decoding the protocol, but so far this is only in preliminary phases.

* * *

### Tandem: t:slim X2 ([Homepage](https://www.tandemdiabetes.com/))

**Loop status:** Not yet loopable.

While in the past company has decided not to allow their pumps to be controlled by external devices, it seems that last few years have been a game changer. Company decided to upgrade their t:slim X2 pump to be able to be controlled remotely (via t:connect app), which means that avenues are opened that we might be able to look forward to have control of pump via AAPS in the future. New pump firmware is planned to be released soon (this or next year, before their tubeless pump t:sport comes out). There are no details yet, what operations will be possible from t:connect (Bolus definitely, everything else unknown).

**Hardware requirement for AAPS:** None. Die Pumpe scheint über Bluetooth zu kommunizieren.

* * *

### Tandem: t:Mobi & t:slim X3 & t:Mobi Tubeless ([Homepage](https://www.tandemdiabetes.com/about-us/pipeline))

**Loop status:** All 3 pumps will be Loop candidates.

They plan to release t:Mobi first (previously called t:sport) at end of 2022 or in 2023. Afterwards they will release t:slim X3 (2023 maybe) and after that t:Mobi Tubeless. t:mobi's will be controlable only over phone app, while X3 will look similar as X2, with some new nifty features (remote update of firmware, remote control over phone app, etc).

**Hardware requirement for AAPS:** None. Die Pumpe scheint über Bluetooth zu kommunizieren.

* * *

### Medtronic Bluetooth

**Comments:** This is pump that will come out in next few years and is planned to be supported in Tidepool Loop software ([see this article](https://www.tidepool.org/blog/tidepool-loop-medtronic-collaboration).

### Willcare Insulin pump ([Homepage](http://shinmyungmedi.com/en/))

**Loop status:** At the moment its not Loop candidate, but we were contacted by their staff and they interested in extending their pump to be loopable (at the moment I think its missing only get/set profile commands).

**Hardware requirement for AAPS:** None. Die Pumpe scheint über Bluetooth zu kommunizieren.

**Comments:** Since company is interested in integration with AAPS, they might do implementation themselves.

* * *

## Pumps no longer sold (companies no longer operating)

### Cellnovo Pump ([see businesswire.com](https://www.businesswire.com/news/home/20190328005829/en/Cellnovo-Stops-Manufacturing-and-Commercial-Operations))

**Loop status:** Currently not supported by any of loop system. Pump is a Loop candidate, but since protocol is unknown at the time, I am not seeing this pump supported very soon.

**Hardware-Anforderungen für AAPS:** Vermutlich keine, It's BT enabled.

**Note about product:** It seems that company decided to exit the Pump Business. You can see more in this [article](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU)

## Pumpen, die nicht für den Loop geeignet sind

### Animas Vibe

**Loop status:** Not loopable. No remote control possibility. **Note:** Pump is not being sold anymore. Company stopped working in Pump business (J&J).

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