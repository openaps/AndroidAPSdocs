# Co je systém uzavřené smyčky?

```{image} ../images/autopilot.png
:alt: AAPS je jako autopilot
```

Systém uzavřené smyčky APS využívá kombinaci různých komponent, aby vám usnadnil management diabetu. In her great book [Automated Insulin Delivery](https://www.artificialpancreasbook.com/) Dana M. Lewis, one of the founders of the open source closed loop movement, calls it an ["autopilot for your diabetes"](https://www.artificialpancreasbook.com/3.-getting-started-with-your-aps). Co to však znamená?

**Autopilot in an aircraft**

Autopilot nedělá úplně všechno a neumožňuje skutečnému pilotovi, abys celý let prospal. Pouze mu pomáhá při jeho práci. Ulevuje mu od zátěže způsobené nutností neustále monitorovat funkce letadla a sledovat letovou hladinu. Pilot se tak může soustředit na sledování letového prostoru a kontrolu funkcí autopilota.

Autopilot dostává signály od mnoha různých senzorů, počítač je následně vyhodnocuje společně se zadanými specifikacemi od pilota a nakonec provede potřebné korekce. Pilot se tak již nemusí zabývat neustálými drobnými úpravami.

**Closed Loop System**

Totéž platí pro systém uzavřené smyčky APS. Nedělá úplně všechno, stále se musíte o svůj diabetes starat vy sami. Systém uzavřené smyčky využívá data ze senzorů CGM/FGM v kombinaci s vašimi specifikacemi, jako jsou bazální dávky, citlivost na inzulin a inzulino-sacharidový poměr. Na základě toho pak vypočítává návrhy, jak upravit léčbu, a provádí tyto neustále drobné změny tak, aby udržel vaší glykémii v cílovém rozmezí a vy jste s nimi neměli tolik práce. Získáte tak více času na život „mimo diabetes“.

Stejně jako byste nenastoupili do letadla, které by řídil pouze autopilot bez dohledu živého pilota, tak i systém uzavřené smyčky vám sice usnadní management vašeho diabetu, ale stále vyžaduje vaši pozornost a podporu! **Even with a closed loop you can't just forget your diabetes!**

Stejně jako autopilot závisí na hodnotách ze senzorů i specifikacích pilota, tak i systém uzavřené smyčky potřebuje správné údaje jako bazály, ISF a sacharidový poměr, aby vám mohl dobře pomáhat.

## Open source systémy uzavřené smyčky APS

V současnosti jsou k dispozici tři hlavní oper source systémy uzavřené smyčky:

### AndroidAPS (AAPS)

AndroidAPS is described in detail in [this documentation](./WhatisAndroidAPS.html). Pro výpočty a ovládání inzulinové pumpy využívá smartphone se systémem Android. It is in strong collaboration with OpenAPS (i.e. they share algorithms).

Compatible [pumps](../Hardware/pumps.md) are:

- [DanaR](../Configuration/DanaR-Insulin-Pump.md) / [DanaRS & Dana-i](../Configuration/DanaRS-Insulin-Pump.html)
- [Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md)
- [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md)
- [Diaconn G8](../Configuration/DiaconnG8.md)
- [Omnipod DASH](../Configuration/OmnipodDASH.md)
- [Omnipod Eros](../Configuration/OmnipodEros.md)
- some old [Medtronic pumps](../Configuration/MedtronicPump.md)

### OpenAPS

[OpenAPS](https://openaps.readthedocs.io) was the first Open Source Closed Loop System. Používá malý počítač, jako je Raspberry Pi nebo Intel Edison.

Kompatibilní pumpy jsou:

- some old Medtronic pumps

### Loop pro iOS

[Loop for iOS](https://loopkit.github.io/loopdocs/) is the Open Source Closed Loop System to be used with Apple iPhones.

Kompatibilní pumpy jsou:

- Omnipod DASH
- Omnipod Eros
- some old Medtronic pumps
