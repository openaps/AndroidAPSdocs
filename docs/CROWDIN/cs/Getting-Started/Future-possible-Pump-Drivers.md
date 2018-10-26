# Budoucí (možné) ovladače pump

Toto je seznam vybraných pump, které jsou v oběhu mezi diabetiky, a stav jejich podpory vůči jakémukoliv systému uzavřené smyčky a stav podpory vůči AAPS. Na konci stránky jsou informace, co je po pumpě vyžadováno, aby byla použitelná pro uzavřenou smyčku.

## Medtronic

**Stav smyčky:** Některé starší verze pump jsou použitelné k uzavřené smyčce, ale nikoliv jejich novější modely (viz níže).

**Jiné implementace:** OpenAPS, Loop

**Java implementations:** Partial implementation available [Rountrip2](https://github.com/TC2013/Roundtrip2), and [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS)

**Stav implementace AAPS:** Začíná. Více viz [Andyho AndroidAPS fork](https://github.com/andyrozman/AndroidAPS), branch riley_link_medtronic (výchozí branch). At the moment most of work is being done on [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS) to get framework and commands working. There is project (Medtronic) and tickets opened for future development on that repository, development is being done on branch dev_medtronic (which is default branch there). There is also gitter room: RileyLinkAAPS/Lobby. AAPS. 2nd test "release" is out, with about 60% of all functionality. Work is progressing according to plan, end of development estimated to end of November.

**Hardwarové požadavky pro AAPS:** RileyLink

** Verze s podporou uzavřené smyčky:** 512-522, 523 (firmware 2.4A nebo nižší), 554 (EU firmware 2.6A nebo nižší, CA firmware 2.7A nebo nižší). Totéž platí pro 7xx verze. Všechna ostatní zařízení nejsou podporovaná a pravděpodobně ani nebudou.

* * *

## Insulet Omnipod ([Homepage](https://www.myomnipod.com/en-gb/about/how-to-use))

**Loop status:** Not supported at the moment, but decoding of the Omnipod protocol is mostly finished- [OpenOmni](http://www.openomni.org/) and [OmniAPS Slack](https://omniaps.slack.com/)

**Jiné implementace:** Loop (implementace je na začátku, pokud vím, podařilo se jim inicializovat pod a poslat mu první dočasný bazál). Více viz [Openomni on github](https://github.com/openaps/openomni)

**Java implementace:** Žádné.

**AAPS implementation status:** Work has started on [RileyLinkAAPS](https://github.com/ktomy/RileyLinkAAPS) for Omnipod (dev_omnipod branch), but it is far from working prototype (developer started working on changes needed for RL firmware 2.0). Můžete sledovat postup na https://omniaps.slack.com/ kanál android-driver. Vývojář zde zveřejňuje postup práce.

**Hardware requirement for AAPS:** RileyLink with Omnipod firmware (2.x)

* * *

## Omnipod DASH ([Homepage](https://www.myomnipod.com/DASH_FAQs))

**Loop status:** Currently not supported by any of loop system. Pump is a Loop candidate, but protocol unknown at the moment. Selling of pump will start in January 2019 (they are doing pre-sales now in USA).

**Hardwarové požadavky pro AAPS:** Zřejmě žádné. Podporuje bluetooth.

**Comments:** Omnipod DASH is currently not in the plan. Once we have a java implementation for standard Omnipod, we will work from that implementation. If (omnipod) protocol hasn't changed, we might have an implementation a few months later, but if the protocol has changed then it might take some time.

* * *

## Ypsomed Pump ([Homepage](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Loop status:** Version 1 - 1.5 (2Q/2018) are not Loop candidates. While they do have BT communication, it seems that communication is very limited (uni directional: Pump->App). Maybe this will change in the next versions.

**Hardwarové požadavky pro AAPS:** Zřejmě žádné. Podporuje bluetooth.

* * *

## Cellnovo Pump ([Homepage](https://www.cellnovo.com/en/homepage))

**Loop status:** Currently not supported by any of loop system. Pump is a Loop candidate, but since protocol is unknown at the time, I am not seeing this pump supported very soon.

**Hardwarové požadavky pro AAPS:** Zřejmě žádné. Podporuje bluetooth.

* * *

## Medtrum A6/P6/C6 ([Homepage](http://www.medtrum.com/P6.html))

**Loop status:** Is a Loop candidate. Company has its own limited half-Loop system running (A6). Controlable via iPhone App. No Android app available at the moment.

**Hardwarové požadavky pro AAPS:** Zřejmě žádné. It seems to be BT enabled.

* * *

## EOFLOW ([Homepage](http://www.eoflow.com/eng/main/main.html))

**Loop status:** Is a Loop candidate. The remote control they use is actually modified Android device. (Pump is currently available only in Korea).

**Hardwarové požadavky pro AAPS:** Zřejmě žádné. It seems to be BT enabled.

* * *

## Tandem:X2 ([Homepage](https://www.tandemdiabetes.com/))

**Loop status:** Not loopable (I am not 100% sure about this info), but they are planning to release different pump that will have remote control (at least bolus).

* * *

## Animas Vibe

**Loop status:** Not loopable. No remote control possibility. **Note:** Pump is not being sold anymore. Company stopped working in Pump bussiness (J&J).

* * *

## Animas Ping

**Loop status:** Currently not supported by any of Loop systems, but it might be a candidate, since it does have some kind of remote possibility. Since its much older pump, it might never get supported anywhere.

* * *

## Requirements for pump being loopable

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
- Nastavit bazální profil
- Číst historii 

**Jiné**

- Nastavit rozšířený bolus
- Zrušit rozšířený bolus

* * *

## Other pumps support

If you have any other pumps you would like to see status on, please contact me (@andyrozman on gitter). In future release a lot of Pump configurations will be added to be Open loopable (you will be able to select Virtual Pump Type in configuration and your settings will be loaded - [Feature request #863](https://github.com/MilosKozak/AndroidAPS/issues/863)).