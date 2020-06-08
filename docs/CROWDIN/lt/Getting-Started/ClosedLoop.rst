Kas yra uždaro ciklo sistema?
**************************************************

.. nuotrauka:: ../images/autopilot.png
  :alt: AAPS yra tarsi autopilotas

Dirbtinės kasos uždaro ciklo sistema sujungia įvairius komponentus, kad būtų lengviau valdyti diabetą. 
Dana M. Lewis, viena iš atvirojo kodo uždaro ciklo judėjimo įkūrėjų, savo puikioje knygoje „Automatizuotas insulino suleidimas“, <https://www.artificialpancreasbook.com/>`, vadina ją „jūsų diabeto autopilotu" <https://www.artificialpancreasbook.com/3.-getting-started-with-your-aps>. Bet ką tai reiškia?

**Autopilotas lėktuve**

Autopilotas neatlieka viso darbo, todėl nesuteikia pilotui galimybės miegoti viso skrydžio metu. Jis palengvina pilotų darbą. Jis atleidžia juos nuo nuolatinio orlaivio ir skrydžio stebėjimo naštos. Tai leidžia pilotui sutelkti dėmesį į oro erdvės stebėjimą ir autopiloto funkcijų valdymą.

Autopilotas priima signalus iš įvairių jutiklių, kompiuteris juos įvertina kartu su piloto specifikacijomis, tada atlieka reikiamus pakeitimus. Pilotui nebereikia jaudintis dėl nuolatinio reguliavimo.

**Uždaro Ciklo Sistema**

Tas pats pasakytina ir apie dirbtinę kasos sistemą. Ji neatlieka visų darbų, vis tiek turite kontroliuoti savo diabetą. Uždaro ciklo sistema sujungia stebėjimo sensoriaus duomenis su diabeto valdymo parametrais, tokiais kaip valandinė bazė, jautrumo insulinui faktorius ir angliavandenių santykis. Remdamasi tuo, ji apskaičiuoja terapijos pasiūlymus ir atlieka nuolatinius mažus koregavimus, kad diabetas išliktų tiksliniame diapazone ir išgelbėtų jus nuo šios priežiūros. Tai palieka daugiau laiko GYVENTI sergant diabetu.

Lygiai taip pat, kaip niekas nenori patekti į lėktuvą, kurį valdo tik autopilotas be žmogaus kontrolės, uždaro ciklo sistema padeda mums valdyti diabetą, tačiau visada reikia mūsų palaikymo! ** Net ir uždaro ciklo režime jūs negalite tiesiog pamiršti savo diabeto! **

Panašiai, kaip autopilotas priklauso nuo jutiklių ir pilotų nustatytų parametrų, norint sėkmingai palaikyti jūsų kūną, uždaro ciklo sistemai reikalingi atitinkami įvesties duomenys, tokie kaip valandinė bazė, jautrumo insulinui faktorius ir angliavandenių santykis.


Atvirojo kodo Dirbtinės kasos Uždaro ciklo sistemos
==================================================
Šiuo metu yra trys pagrindinės atvirojo kodo uždaro ciklo sistemos:

AndroidAPS (AAPS)
--------------------------------------------------
AndroidAPS yra išsamiai aprašyta šioje dokumentacijoje <./WhatisAndroidAPS.html>`_. Insulino pompai valdyti bei skaičiavimams atlikti naudojamas Android išmanusis telefonas. Jis sukurtas glaudžiai bendradarbiaujant su OpenAPS (t. y. jie dalijasi algoritmais).

Suderinamos pompos <../Hardware/pumps.html>`_ yra:

* DanaR / DanaRS
* Accu-Chek Combo
* Accu-Chek Insight
* kai kurios senos Medtronic pompos (versija 2.4)

OpenAPS
--------------------------------------------------
OpenAPS <https://openaps.readthedocs.io>`_ buvo pirmoji Atvirojo kodo Uždaro Ciklo Sistema. Ji naudoja mažąjį kompiuterį, tokį kaip Raspberry Pi ar Intel Edison.

Suderinamos pompos yra:

* kai kurios senosios Medtronic pompos

Loop - iOS sistemai
--------------------------------------------------
Loop iOS sistemai <https://loopkit.github.io/loopdocs/>`_ yra Atvirojo kodo Uždaro Ciklo Sistema, naudojama su Apple iPhone telefonais.

Suderinamos pompos yra:

* Omnipod Eros
* kai kurios senosios Medtronic pompos
