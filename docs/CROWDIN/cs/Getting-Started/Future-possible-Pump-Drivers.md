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

### Medtrum A6/P6/C6 ([Homepage](https://www.medtrum.com/P6.html))

**Loop status:** Is a Loop candidate. Company has its own limited half-Loop system running (A6). Controlable via iPhone App. No Android app available at the moment.

**Hardwarové požadavky pro AAPS:** Zřejmě žádné. It seems to be BT enabled.

* * *

### EOFLOW ([Domovská stránka](http://www.eoflow.com/eng/main/main.html))

**Loop status:** Is a Loop candidate. The remote control they use is actually modified Android device. (Pump is currently available only in Korea).

**Hardwarové požadavky pro AAPS:** Zřejmě žádné. It seems to be BT enabled.

* * *

### Accu-Chek Solo ([Domovská stránka](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Loop status:** Is a Loop candidate. Pump will start selling at end of 2018 in selected countries in EU. Its rummored to have Android app on special controler device for control.

**Hardwarové požadavky pro AAPS:** Zřejmě žádné. It seems to be BT enabled.

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

### Tandem:(všechny) ([Domovská stránka](https://www.tandemdiabetes.com/))

**Stav smyčky:** Nelze použít pro smyčku.

While ago they had firmware called T:AP (mentioned in this [article](https://www.liebertpub.com/doi/full/10.1089/dia.2018.0278?url_ver=Z39.88-2003&rfr_id=ori%3Arid%3Acrossref.org&rfr_dat=cr_pub%3Dpubmed&), which could be used in loop (its no longer available, since pump was upgraded to x2), but that was not intended for commercial use, just for experimental use only (research projects). I talked with one of directors of company and he assured my that Tandem pump will never be open, but they have created their own closed loop system, which they are calling Control-IQ (I think it is already available in USA, and should be available in 2020 in Eu).

* * *

### Animas Vibe

**Stav smyčky:** Nelze použít pro smyčku. No remote control possibility. **Note:** Pump is not being sold anymore. Company stopped working in Pump bussiness (J&J).

* * *

### Animas Ping

**Stav smyčky:** Nelze použít pro smyčku. It has bolus possibility, but no TBR one. **Note** Stopped being sold when Vibe came out.

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

### Podpora ostatních pump

If you have any other pumps you would like to see status on, please contact us on discord.