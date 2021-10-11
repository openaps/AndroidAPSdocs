# Budoucí (možné) ovladače pump

Toto je seznam vybraných pump, které jsou v oběhu mezi diabetiky, a stav jejich podpory vůči jakémukoliv systému uzavřené smyčky a stav podpory vůči AAPS. Na konci stránky jsou informace, co je po pumpě vyžadováno, aby byla použitelná pro uzavřenou smyčku.

## Pumpy, které lze provozovat se smyčkou

### Omnipod DASH ([Domovská stránka](https://www.myomnipod.com/DASH))

**Stav smyčky:** Aktuálně nepodporovaná žádným systémem smyčky. Pumpa je kandidátem pro smyčku, ale protokol je v současnosti neznámý. Prodej pumpy byl oficiálně zahájen v lednu 2019.

**Hardwarové požadavky pro AAPS:** Zřejmě žádné. Podporuje bluetooth.

**Comments:** Group of developers is looking into protocol (by reverse engineering original app) and into solution for AAPS, now that pump has become available all over world. There are no estimations yet, when this will be available, or even when first testing will begin. If you are interested in progress, or are willing to help, group can be reachable on WeAreNotWaiting discord. Mention your interest in androidaps group and someone will give you more info.

* * *

### Pumpa Ypsomed ([Domovská stránka](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Stav smyčky:** Verze 1 - 1.5 (2. kvartál/2018) nejsou kandidáti pro smyčku. While they do have BT communication, communication is very limited and uni directional: Pump->App. By end of 2021, it is planned that company will release, new version nicknamed DOSE (1.6), which will allow setting bolus and TBR from their App. They plan to implement their own Loop in 2022, with their own application. More info see this [page](https://www.mylife-diabetescare.com/en/loop-program.html)

**Hardware requirement for AAPS:** None. Podporuje bluetooth.

**Comments:** There are currently 2 groups working on driver, so after new version is released, we can expect to have AAPS support soon thereafter. One group is being supported by YpsoMed and helping with Medical trials that are happening in Australia, 2nd is working independently by reverse engineering original app.

* * *

### Kaleido ([Domovská stránka](https://www.hellokaleido.com/))

**Stav smyčky:** Aktuálně nepodporovaná žádným systémem smyčky. Pump is a Loop candidate, but since protocol is unknown at the time, I am not seeing this pump supported very soon.

**Hardwarové požadavky pro AAPS:** Zřejmě žádné. Podporuje bluetooth.

* * *

### Medtrum A6/P6/C6 ([Homepage](https://www.medtrum.com/product/nanopump.html))

**Loop status:** Is a Loop candidate. Company has its own limited half-Loop system running (A6). Controllable via iPhone App. No Android app available at the moment.

**Hardwarové požadavky pro AAPS:** Zřejmě žádné. It seems to be BT enabled.

* * *

### EOFLOW ([Domovská stránka](http://www.eoflow.com/eng/main/main.html))

**Loop status:** Is a Loop candidate. The remote control they use is actually modified Android device. (Pump is currently available only in Korea).

**Hardwarové požadavky pro AAPS:** Zřejmě žádné. It seems to be BT enabled.

* * *

### Accu-Chek Solo ([Domovská stránka](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Loop status:** Is a Loop candidate.

**Hardware requirement for AAPS:** None. It seems to be BT enabled.

**Comments:** There are some developers looking into decoding the protocol, but so far this is only in preliminary phases.

* * *

### Tandem: t:slim X2 ([Homepage](https://www.tandemdiabetes.com/))

**Loop status:** Not yet loopable.

While in the past company has decided not to allow their pumps to be controlled by external devices, it seems that last few years have been a game changer. Company decided to upgrade their t:slim X2 pump to be able to be controlled remotely (via t:connect app), which means that avenues are opened that we might be able to look forward to have control of pump via AAPS in the future. New pump firmware is planned to be released soon (this or next year, before their tubeless pump t:sport comes out). There are no details yet, what operations will be possible from t:connect (Bolus definitely, everything else unknown).

**Hardware requirement for AAPS:** None. It seems to be BT enabled.

* * *

### Tandem: t:sport ([Homepage](https://www.tandemdiabetes.com/about-us/pipeline))

**Loop status:** Is a Loop candidate. Pump hasn't been released yet, but FDA process is already running, so it should be out sooner, rather than later (in US).

**Hardware requirement for AAPS:** None. It seems to be BT enabled.

* * *

### Medtronic Bluetooth

**Comments:** This is pump that will come out in next few years and is planned to be supported in Tidepool Loop software ([see this article](https://www.tidepool.org/blog/tidepool-loop-medtronic-collaboration).

### Willcare Insulin pump ([Homepage](http://en.shinmyungmedi.com))

**Loop status:** At the moment its not Loop candidate, but we were contacted by their staff and they interested in extending their pump to be loopable (at the moment I think its missing only get/set profile commands).

**Hardware requirement for AAPS:** None. It seems to be BT enabled.

**Comments:** Since company is interested in integration with AAPS, they might do implementation themselves.

* * *

## Pumpy, které již nejsou v prodeji (společnosti již nefungují)

### Cellnovo Pump ([see businesswire.com](https://www.businesswire.com/news/home/20190328005829/en/Cellnovo-Stops-Manufacturing-and-Commercial-Operations))

**Stav smyčky:** Aktuálně nepodporovaná žádným systémem smyčky. Pump is a Loop candidate, but since protocol is unknown at the time, I am not seeing this pump supported very soon.

**Hardwarové požadavky pro AAPS:** Zřejmě žádné. Podporuje bluetooth.

**Note about product:** It seems that company decided to exit the Pump Business. You can see more in this [article](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU)

## Pumpy, které nelze provozovat se smyčkou

### Animas Vibe

**Loop status:** Not loopable. No remote control possibility. **Note:** Pump is not being sold anymore. Company stopped working in Pump business (J&J).

* * *

### Animas Ping

**Loop status:** Not loopable. It has bolus possibility, but no TBR one. **Note** Stopped being sold when Vibe came out.

## Požadavky na pumpu, aby podporovala smyčku

**Prerequisite**

- Pumpa musí podporovat vzdálené ovládání (nějakou formou) (BT, Rádiovou frekvencí, atd.)
- Protokol komunikace je hacknutý/dokumentovaný/atd.

**Minimal requirement**

- Nastavení dočasné bazální dávky
- Zjištění stavu
- Zrušení dočasné bazální dávky

**For oref1(SMB) or Bolusing:**

- Poslat bolus

**Good to have**

- Zrušit bolus
- Načíst bazální profil (prakticky nutnost)
- Nastavit bazální profil (příjemný bonus)
- Číst historii 

**Other (not required but good to have)**

- Nastavit rozšířený bolus
- Zrušit rozšířený bolus
- Číst historii
- Číst TDD

* * *

### Other pumps support

If you have any other pumps you would like to see status on, please contact us on discord.