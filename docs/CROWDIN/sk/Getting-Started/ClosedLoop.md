# Čo je to Uzavretý Okruh?

```{image} ../images/autopilot.png
:alt: AAPS je ako autopilot
```

Uzavretý okruh využíva rôzne komponenty aby pre vás bol manažment diabetu jednoduchší. In her great book [Automated Insulin Delivery](https://www.artificialpancreasbook.com/) Dana M. Lewis, one of the founders of the open source closed loop movement, calls it an ["autopilot for your diabetes"](https://www.artificialpancreasbook.com/3.-getting-started-with-your-aps). Ale čo to vlastne znamená?

**Autopilot in an aircraft**

Autopilot nespraví všetku prácu namiesto pilota a neumožňuje mu prespať celý let. Výrazne ale jeho prácu uľahčuje. Zmierňuje jeho záťaž, spôsobenú neustálou potrebou monitorovať funkcie lietadla a letovú hladinu. To umožňuje pilotovi sústrediť sa na monitorovanie vzdušného priestoru a kontrolu funkcií autopilota.

Autopilot prijíma signály z rôznych senzorov, počítač ich vyhodnotí spolu so špecifikáciami pilota, a potom vykoná potrebné úpravy. Pilot sa už nemusí starať o neustále úpravy.

**Closed Loop System**

To isté platí aj pre uzavretý okruh. Nespraví za vás všetku prácu. Stále sa ešte budete musieť o svoj diabetes starať. Uzavretý okruh skombinuje údaje zo senzorov CGM/FGM s vašimi nastaveniami, ako bazálne dávky, citlivosť na inzulín a inzulínovo-sacharidový pomer. Na základe toho vypočítava návrhy ako upraviť dávky. Tieto drobné zmeny vykonáva neustále, aby udržal vaše glykémie v požadovanom rozmedzí. Vďaka tomuto si môžete užívať viac času "mimo diabetes".

Rovnako, ako sa nechcete nachádzať v lietadle, ktoré riadi iba autopilot bez ľudskej posádky, tak aj uzavretý okruh vám síce uľahčí manažment diabetu, ale stále potrebuje vašu pomoc a dohľad! **Even with a closed loop you can't just forget your diabetes!**

Rovnako ako sa autopilot spolieha na údaje zo senzorov a na špecifikácie od pilota, tak aj uzavretý okruh potrebuje určité informácie ako bazálne dávky, senzitivitu na inzulín a inzulínovo-sacharidový pomer aby mohol správne pracovať.

## Open Source Systémy Uzavretého Okruhu

V súčasnosti existujú tri hlavné open source systémy uzavretého okruhu:

### AndroidAPS (AAPS)

AndroidAPS is described in detail in [this documentation](./WhatisAndroidAPS.html). Pre výpočty a ovládanie inzulínovej pumpy používa telefón so systémom Android. It is in strong collaboration with OpenAPS (i.e. they share algorithms).

Compatible [pumps](../Hardware/pumps.md) are:

- [DanaR](../Configuration/DanaR-Insulin-Pump.md) / [DanaRS & Dana-i](../Configuration/DanaRS-Insulin-Pump.html)
- [Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md)
- [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md)
- [Diaconn G8](../Configuration/DiaconnG8.md)
- [Omnipod DASH](../Configuration/OmnipodDASH.md)
- [Omnipod Eros](../Configuration/OmnipodEros.md)
- some old [Medtronic pumps](../Configuration/MedtronicPump.md)

### OpenAPS

[OpenAPS](https://openaps.readthedocs.io) was the first Open Source Closed Loop System. Používa malý počítač ako Raspberry Pi alebo Intel Edison.

Kompatibilné pumpy sú:

- some old Medtronic pumps

### Loop pre iOS

[Loop for iOS](https://loopkit.github.io/loopdocs/) is the Open Source Closed Loop System to be used with Apple iPhones.

Kompatibilné pumpy sú:

- Omnipod DASH
- Omnipod Eros
- some old Medtronic pumps
