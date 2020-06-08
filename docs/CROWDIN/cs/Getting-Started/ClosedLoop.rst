Co je systém uzavřené smyčky?
**************************************************

.. image:: ../images/autopilot.png
  :alt: AAPS je jako autopilot

Systém uzavřené smyčky APS využívá kombinaci různých komponent, aby vám usnadnil management diabetu. 
Dana M. Lewis, jedna za zakladatelek hnutí pro open source uzavřenou smyčku, jej ve své skvělé knize `Automated Insulin Delivery <https://www.artificialpancreasbook.com/>`_ přirovnává k „autopilotu pro váš diabetes“<https://www.artificialpancreasbook.com/3.-getting-started-with-your-aps>`_. Co to však znamená?

**Autopilot v letadle**

Autopilot nedělá úplně všechno a neumožňuje skutečnému pilotovi, abys celý let prospal. Pouze mu pomáhá při jeho práci. Ulevuje mu od zátěže způsobené nutností neustále monitorovat funkce letadla a sledovat letovou hladinu. Pilot se tak může soustředit na sledování letového prostoru a kontrolu funkcí autopilota.

Autopilot dostává signály od mnoha různých senzorů, počítač je následně vyhodnocuje společně se zadanými specifikacemi od pilota a nakonec provede potřebné korekce. Pilot se tak již nemusí zabývat neustálými drobnými úpravami.

**Systém uzavřené smyčky**

Totéž platí pro systém uzavřené smyčky APS. Nedělá úplně všechno, stále se musíte o svůj diabetes starat vy sami. Systém uzavřené smyčky využívá data ze senzorů CGM/FGM v kombinaci s vašimi specifikacemi, jako jsou bazální dávky, citlivost na inzulin a inzulino-sacharidový poměr. Na základě toho pak vypočítává návrhy, jak upravit léčbu, a provádí tyto neustále drobné změny tak, aby udržel vaší glykémii v cílovém rozmezí a vy jste s nimi neměli tolik práce. Získáte tak více času na život „mimo diabetes“.

Stejně jako byste nenastoupili do letadla, které by řídil pouze autopilot bez dohledu živého pilota, tak i systém uzavřené smyčky vám sice usnadní management vašeho diabetu, ale stále vyžaduje vaši pozornost a podporu! **Ani s uzavřenou smyčkou nemůžete na svůj diabetes zcela zapomenout!**

Stejně jako autopilot závisí na hodnotách ze senzorů i specifikacích pilota, tak i systém uzavřené smyčky potřebuje správné údaje jako bazály, ISF a sacharidový poměr, aby vám mohl dobře pomáhat.


Open source systémy uzavřené smyčky APS
==================================================
V současnosti jsou k dispozici tři hlavní oper source systémy uzavřené smyčky:

AndroidAPS (AAPS)
--------------------------------------------------
Systém AndroidAPS je podrobně popsán v `této dokumentaci <./WhatisAndroidAPS.html>`_. Pro výpočty a ovládání inzulinové pumpy využívá smartphone se systémem Android. Vývojáři úzce spolupracují s OpenAPS (tzn. používají stejné algoritmy).

Kompatibilní pumpy jsou:

* DanaR / DanaRS
* Accu-Chek Combo
* Accu-Chek Insight
* některé staré pumpy Medtronic (verze 2.4)

OpenAPS
--------------------------------------------------
`OpenAPS <https://openaps.readthedocs.io>`_ byl první open source systém uzavřené smyčky. Používá malý počítač, jako je Raspberry Pi nebo Intel Edison.

Kompatibilní pumpy jsou:

* některé staré pumpy Medtronic

Loop pro iOS
--------------------------------------------------
`Loop for iOS <https://loopkit.github.io/loopdocs/>`_ je open source systém uzavřené smyčky pro zařízení Apple iPhone.

Kompatibilní pumpy jsou:

* Omnipod Eros
* některé staré pumpy Medtronic
