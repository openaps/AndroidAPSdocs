Čo je to Uzavretý Okruh?
**************************************************

.. image:: ../images/autopilot.png
  :alt: AAPS je ako autopilot

Uzavretý okruh využíva rôzne komponenty aby pre vás bol manažment diabetu jednoduchší. 
Dana M. Lewis, jedna zo zakladateliek open source hnutia pre uzavretý okruh, ho vo svojej knižke "Automatizované Podávanie Inzulínu <https://www.artificialpancreasbook.com/>"_ nazýva ""autopilotom pre váš diabetes" <https://www.artificialpancreasbook.com/3.-getting-started-with-your-aps>"_. Ale čo to vlastne znamená?

**Autopilot v lietadle**

Autopilot nespraví všetku prácu namiesto pilota a neumožňuje mu prespať celý let. Výrazne ale jeho prácu uľahčuje. Zmierňuje jeho záťaž, spôsobenú neustálou potrebou monitorovať funkcie lietadla a letovú hladinu. To umožňuje pilotovi sústrediť sa na monitorovanie vzdušného priestoru a kontrolu funkcií autopilota.

Autopilot prijíma signály z rôznych senzorov, počítač ich vyhodnotí spolu so špecifikáciami pilota, a potom vykoná potrebné úpravy. Pilot sa už nemusí starať o neustále úpravy.

**Systém Uzavretého Okruhu**

To isté platí aj pre uzavretý okruh. Nespraví za vás všetku prácu. Stále sa ešte budete musieť o svoj diabetes starať. Uzavretý okruh skombinuje údaje zo senzorov CGM/FGM s vašimi nastaveniami, ako bazálne dávky, citlivosť na inzulín a inzulínovo-sacharidový pomer. Na základe toho vypočítava návrhy ako upraviť dávky. Tieto drobné zmeny vykonáva neustále, aby udržal vaše glykémie v požadovanom rozmedzí. Vďaka tomuto si môžete užívať viac času "mimo diabetes".

Rovnako, ako sa nechcete nachádzať v lietadle, ktoré riadi iba autopilot bez ľudskej posádky, tak aj uzavretý okruh vám síce uľahčí manažment diabetu, ale stále potrebuje vašu pomoc a dohľad! **Ani s uzavretým okruhom nemôžete na svoj diabetes úplne zabudnúť!**

Rovnako ako sa autopilot spolieha na údaje zo senzorov a na špecifikácie od pilota, tak aj uzavretý okruh potrebuje určité informácie ako bazálne dávky, senzitivitu na inzulín a inzulínovo-sacharidový pomer aby mohol správne pracovať.


Open Source Systémy Uzavretého Okruhu
===================================================
V súčasnosti existujú tri hlavné open source systémy uzavretého okruhu:

AndroidAPS (AAPS)
--------------------------------------------------
AndroidAPS je podrobne popísaný v "tejto dokumentácii <./WhatisAndroidAPS.html>"_. Pre výpočty a ovládanie inzulínovej pumpy používa telefón so systémom Android. Vývojári úzko spolupracujú s OpenAPS (napr. používajú rovnaké algoritmy).

Kompatibilné "pumpy <../Hardware/pumps.html>"_ sú:

* `DanaR <../Configuration/DanaR-Insulin-Pump.html>`_ / `DanaRS & Dana-i <../Configuration/DanaRS-Insulin-Pump.html>`_
* `Accu-Chek Combo <../Configuration/Accu-Chek-Combo-Pump.html>`_
* `Accu-Chek Insight <../Configuration/Accu-Chek-Insight-Pump.html>`_
* `Diaconn G8 <../Configuration/DiaconnG8.html>`_
* `Omnipod Eros <../Configuration/OmnipodEros.html>`_ / Omnipod Dash
* some old `Medtronic pumps <../Configuration/MedtronicPump.html>`_

OpenAPS
--------------------------------------------------
"OpenAPS <https://openaps.readthedocs.io>"_ bol prvý Open Source Systém Uzavretého Okruhu. Používa malý počítač ako Raspberry Pi alebo Intel Edison.

Kompatibilné pumpy sú:

* niektoré staré pumpy Medtronic

Loop pre iOS
--------------------------------------------------
"Loop pre iOS <https://loopkit.github.io/loopdocs/>"_, je open source systém uzavretého okruhu pre používateľov Apple iPhone.

Kompatibilné pumpy sú:

* Omnipod Eros
* niektoré staré pumpy Medtronic
