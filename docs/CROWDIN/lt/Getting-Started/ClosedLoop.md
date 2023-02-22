# Kas yra uždaro ciklo sistema?

```{image} ../images/autopilot.png
:alt: AAPS yra tarsi autopilotas
```

Dirbtinės kasos uždaro ciklo sistema sujungia įvairius komponentus, kad būtų lengviau valdyti diabetą. In her great book [Automated Insulin Delivery](https://www.artificialpancreasbook.com/) Dana M. Lewis, one of the founders of the open source closed loop movement, calls it an ["autopilot for your diabetes"](https://www.artificialpancreasbook.com/3.-getting-started-with-your-aps). Bet ką tai reiškia?

**Autopilot in an aircraft**

Autopilotas neatlieka viso darbo, todėl nesuteikia pilotui galimybės miegoti viso skrydžio metu. Jis palengvina pilotų darbą. Jis atleidžia juos nuo nuolatinio orlaivio ir skrydžio stebėjimo naštos. Tai leidžia pilotui sutelkti dėmesį į oro erdvės stebėjimą ir autopiloto funkcijų valdymą.

Autopilotas priima signalus iš įvairių jutiklių, kompiuteris juos įvertina kartu su piloto specifikacijomis, tada atlieka reikiamus pakeitimus. Pilotui nebereikia jaudintis dėl nuolatinio reguliavimo.

**Closed Loop System**

Tas pats pasakytina ir apie dirbtinę kasos sistemą. Ji neatlieka visų darbų, vis tiek turite kontroliuoti savo diabetą. Uždaro ciklo sistema sujungia stebėjimo sensoriaus duomenis su diabeto valdymo parametrais, tokiais kaip valandinė bazė, jautrumo insulinui faktorius ir angliavandenių santykis. Remdamasi tuo, ji apskaičiuoja terapijos pasiūlymus ir atlieka nuolatinius mažus koregavimus, kad diabetas išliktų tiksliniame diapazone ir išgelbėtų jus nuo šios priežiūros. Tai palieka daugiau laiko GYVENTI sergant diabetu.

Lygiai taip pat, kaip niekas nenori patekti į lėktuvą, kurį valdo tik autopilotas be žmogaus kontrolės, uždaro ciklo sistema padeda mums valdyti diabetą, tačiau visada reikia mūsų palaikymo! **Even with a closed loop you can't just forget your diabetes!**

Panašiai, kaip autopilotas priklauso nuo jutiklių ir pilotų nustatytų parametrų, norint sėkmingai palaikyti jūsų kūną, uždaro ciklo sistemai reikalingi atitinkami įvesties duomenys, tokie kaip valandinė bazė, jautrumo insulinui faktorius ir angliavandenių santykis.

## Atvirojo kodo Dirbtinės kasos Uždaro ciklo sistemos

Šiuo metu yra trys pagrindinės atvirojo kodo uždaro ciklo sistemos:

### AndroidAPS (AAPS)

AndroidAPS is described in detail in [this documentation](./WhatisAndroidAPS.html). Insulino pompai valdyti bei skaičiavimams atlikti naudojamas Android išmanusis telefonas. It is in strong collaboration with OpenAPS (i.e. they share algorithms).

Compatible [pumps](../Hardware/pumps.md) are:

- [DanaR](../Configuration/DanaR-Insulin-Pump.md) / [DanaRS & Dana-i](../Configuration/DanaRS-Insulin-Pump.html)
- [Accu-Chek Combo](../Sąranka/Accu-Chek-Combo-Siurblys.md)
- [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md)
- [Diaconn G8](../Configuration/DiaconnG8.md)
- [Omnipod DASH](../Configuration/OmnipodDASH.md)
- [Omnipod Eros](../Configuration/OmnipodEros.md)
- some old [Medtronic pumps](../Configuration/MedtronicPump.md)

### OpenAPS

[OpenAPS](https://openaps.readthedocs.io) was the first Open Source Closed Loop System. Ji naudoja mažąjį kompiuterį, tokį kaip Raspberry Pi ar Intel Edison.

Suderinamos pompos yra:

- some old Medtronic pumps

### Loop - iOS sistemai

[Loop for iOS](https://loopkit.github.io/loopdocs/) is the Open Source Closed Loop System to be used with Apple iPhones.

Suderinamos pompos yra:

- Omnipod DASH
- Omnipod Eros
- some old Medtronic pumps
