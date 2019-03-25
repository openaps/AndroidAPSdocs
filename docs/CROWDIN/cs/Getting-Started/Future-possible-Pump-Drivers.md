# Budoucí (možné) ovladače pump

Toto je seznam vybraných pump, které jsou v oběhu mezi diabetiky, a stav jejich podpory vůči jakémukoliv systému uzavřené smyčky a stav podpory vůči AAPS. Na konci stránky jsou informace, co je po pumpě vyžadováno, aby byla použitelná pro uzavřenou smyčku.

## Pumps whose support is in development

### Medtronic

**Loop status:** Some of older versions of pumps are loopable, but not the newer models (see below)

**Other implementations:** OpenAPS, Loop

**Java implementations:** Partial implementation available [Rountrip2](https://github.com/TC2013/Roundtrip2), and [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS)

**AAPS implementation status:** Work in progress. See [Andy's AndroidAPS fork](https://github.com/andyrozman/AndroidAPS), branch medtronic_andy. Most of work was done on [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS) to get framework and commands working. There is project (Medtronic) and tickets opened for future development on that repository, development is being done on branch dev_medtronic (which is default branch there). There is also gitter room: RileyLinkAAPS/Lobby. AAPS. 0.7 test "release" is out, with about 80% of all functionality, missing is only History analysis to determine state of the pump and to confirm that Treatments were or to import new treatments. For details and timing see [Project board](https://github.com/andyrozman/RileyLinkAAPS/projects/1).

**Hardware requirement for AAPS:** RileyLink (any)

**Loopable versions:** 512-522, 523 (Fw 2.4A or lower), 554 (EU firmware 2.6A or lower, CA firmware 2.7A or lower). Same for 7xx versions. All other devices are not supported, and probably won't be.

* * *

### Insulet Omnipod ([Homepage](https://www.myomnipod.com/en-gb/about/how-to-use))

**Loop status:** Not supported at the moment, but decoding of the Omnipod protocol is mostly finished- [OpenOmni](http://www.openomni.org/) and [OmniAPS Slack](https://omniaps.slack.com/)

**Other implementations:** Loop (implementation is in the beginning stages; as far as I know, they managed to Init the pod and send the first TBR). See [Openomni on github](https://github.com/openaps/openomni)

**Java implementations:** None till now.

**AAPS implementation status:** Work has started on [RileyLinkAAPS](https://github.com/ktomy/RileyLinkAAPS) for Omnipod (dev_omnipod branch), but it is far from working prototype (developer has finished changes for RL firmware 2.0, and started with sending packets to pump). You can follow progress on https://omniaps.slack.com/ channel android-driver. Developer is posting progress there.

**Hardware requirement for AAPS:** RileyLink with Omnipod firmware (2.x)

## Pumps that are Loopable

### Omnipod DASH ([Homepage](https://www.myomnipod.com/DASH_FAQs))

**Loop status:** Currently not supported by any of loop system. Pump is a Loop candidate, but protocol unknown at the moment. Selling of pump will start in January 2019 (they are doing pre-sales now in USA).

**Hardwarové požadavky pro AAPS:** Zřejmě žádné. It's BT enabled.

**Comments:** Omnipod DASH is currently not in the plan. Once we have a java implementation for standard Omnipod, we will work from that implementation. If (omnipod) protocol hasn't changed, we might have an implementation a few months later, but if the protocol has changed then it might take some time.

* * *

### Ypsomed Pump ([Homepage](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Loop status:** Version 1 - 1.5 (2Q/2018) are not Loop candidates. While they do have BT communication, it seems that communication is very limited (uni directional: Pump->App). Maybe this will change in the next versions.

**Hardwarové požadavky pro AAPS:** Zřejmě žádné. It's BT enabled.

* * *

### Cellnovo Pump ([Homepage](https://www.cellnovo.com/en/homepage))

**Loop status:** Currently not supported by any of loop system. Pump is a Loop candidate, but since protocol is unknown at the time, I am not seeing this pump supported very soon.

**Hardwarové požadavky pro AAPS:** Zřejmě žádné. It's BT enabled.

* * *

### Medtrum A6/P6/C6 ([Homepage](http://www.medtrum.com/P6.html))

**Loop status:** Is a Loop candidate. Company has its own limited half-Loop system running (A6). Controlable via iPhone App. No Android app available at the moment.

**Hardwarové požadavky pro AAPS:** Zřejmě žádné. It seems to be BT enabled.

* * *

### EOFLOW ([Homepage](http://www.eoflow.com/eng/main/main.html))

**Loop status:** Is a Loop candidate. The remote control they use is actually modified Android device. (Pump is currently available only in Korea).

**Hardwarové požadavky pro AAPS:** Zřejmě žádné. It seems to be BT enabled.

* * *

### Accu-Chek Solo ([Homepage](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Loop status:** Is a Loop candidate. Pump will start selling at end of 2018 in selected countries in EU. Its rummored to have Android app for control.

**Hardwarové požadavky pro AAPS:** Zřejmě žádné. It seems to be BT enabled.

* * *

### Tandem t:AP

**Loop status:** Is a Loop candidate.

**Hardwarové požadavky pro AAPS:** Zřejmě žádné. It seems to be BT enabled.

**NOTE:** This pump was mentioned in following [article](https://www.liebertpub.com/doi/full/10.1089/dia.2018.0278?url_ver=Z39.88-2003&rfr_id=ori%3Arid%3Acrossref.org&rfr_dat=cr_pub%3Dpubmed&), but I am not sure, if this is just t:slim with modified Firmware, or is this a new pump. So far I go no confirmation either way from writer of article, or from Tandem itself.

## Pumps that aren't Loopable

### Tandem:X2 ([Homepage](https://www.tandemdiabetes.com/))

**Loop status:** Not loopable (I am not 100% sure about this info), but they are planning to release different pump that will have remote control (at least bolus).

* * *

### Animas Vibe

**Loop status:** Not loopable. No remote control possibility. **Note:** Pump is not being sold anymore. Company stopped working in Pump bussiness (J&J).

* * *

### Animas Ping

**Loop status:** Not loopable. It has bolus possibility, but no TBR one. **Note** Stopped beeing sold when Vibe came out.

## Requirements for pumps being loopable

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
- Get Basal Profile (almost requirement)
- Set Basal Profile (nice to have)
- Číst historii 

**Other (not required but good to have)**

- Nastavit rozšířený bolus
- Zrušit rozšířený bolus
- Číst historii
- Read TDD

* * *

### Other pumps support

If you have any other pumps you would like to see status on, please contact me (@andyrozman on gitter). In future release a lot of Pump configurations will be added to be Open loopable (you will be able to select Virtual Pump Type in configuration and your settings will be loaded - [Feature request #863](https://github.com/MilosKozak/AndroidAPS/issues/863)).