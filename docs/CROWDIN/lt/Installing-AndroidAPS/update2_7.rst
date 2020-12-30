Būtini patikrinimai po to, kai buvo atnaujinta AndroidAPS 2.7
***********************************************************

* Atnaujinant į AAPS 2.7, programos kodas buvo žymiai pakeistas. 
* Todėl svarbu, kad atnaujinę atliktumėte keletą pakeitimų arba patikrintumėte nustatymus.
* Prašome peržiūrėti `Išleidimo pastabas <../Installing-AndroidAPS/Releasenotes.html#version-2-7-0>`_ dėl detalių apie naujas ir išplėstines funkcijas.

Tikrinti KG šaltinį
-----------------------------------------------------------
* Patikrinkite, ar po atnaujinimo KG šaltinis yra teisingas.
* Jei jūs naudojate `xDrip+ <../Configuration/xdrip.html>`_ gali atsitikti taip, kad KG šaltinis pakeistas į modifikuotą „Dexcom“ programą.
* Atidarykite `Konfigūratorių <../Configuration/Config-Builder.html#bg-source>`_ (trijų linijų meniu pagrindinio ekrano viršuje kairėje)
* Slinkite žemyn į "KG šaltinis".
* Pasirinkite teisingą KG šaltinį, jei pakeitimai yra būtini.

.. image:: ../images/ConfBuild_BG.png
  :alt: KG šaltinis

Baigti egzaminą
-----------------------------------------------------------
* AAPS 2.7 programoje yra naujas Tikslas 11 `Automatizavimas <../Usage/Automation.html>`_.
* Jūs turite išlaikyti egzaminą (`Tikslas 3 ir 4 <../Usage/Objectives.html#objective-3-proof-your-knowledge>`_), kad užbaigtumėte `Tikslą 11 <../Usage/Objectives.html#objective-11-automation>`_.
* Jei, pavyzdžiui, jūs dar neišlaikėte egzamino `Tiksle 3 <../Usage/Objectives.html#objective-3-proof-your-knowledge>`_, jums reikės išlaikyti egzaminą, prieš pradedant `Tikslą 11 <../Usage/Objectives.html#objective-11-automation>`_. 
* Tai nepaveiks kitų tikslų, kuriuos jau baigėte. Visi užbaigti tikslai bus išsaugoti!

Pagrindinio slaptažodžio nustatymas
-----------------------------------------------------------
* Jis yra būtinas, kad būtų galima `eksportuoti nustatymus <../Usage/ExportImportSettings.html>`_, nes versijoje 2.7 jie yra užkoduoti.
* Atidarykite Nustatymus (trijų taškų meniu dešinėje viršutinėje pagrindinio ekrano pusėje)
* Spustelėkite trikampį žemiau "Bendrieji"
* Spauskite "Pagrindinis Slaptažodis"
* Įveskite slaptažodį, patvirtinkite slaptažodį ir spustelėkite Ok.

.. image:: ../images/MasterPW.png
  :alt: Nustatyti pagrindinį slaptažodį
  
Eksportuoti nustatymus
-----------------------------------------------------------
* AAPS 2.7 naudoja naują šifruotą atsarginės kopijos formatą. 
* Jūs turite `eksportuoti savo nustatymus <../Usage/ExportImportSettings.html>`_ po atnaujinimo į versiją 2.7.
* Parametrų failus iš ankstesnių versijų galima tik importuoti į AAPS 2.7. Eksporti bus nauju formatu.
* Įsitikinkite, kad saugojate savo eksportuotus nustatymus ne tik telefone, bet ir bent vienoje saugioje vietoje (jūsų kompiuteris, debesijos saugykla...).
* Jei sukursite AAPS 2.7 apk naudodami tą pačią raktų saugyklą kaip ir ankstesnėse versijose, galite įdiegti naują versiją nepašalinę ankstesnės versijos. 
* Visi nustatymai ir įvykdyti tikslai liks tokie, kokie buvo ankstesnėje versijoje.
* Jei praradote raktų saugyklą, sukurkite 2.7 versiją naudodami nauja raktų saugykla ir importuokite nustatymus iš ankstesnės versijos, kaip aprašyta skyriuje `Trikčių šalinimas <../Installing-AndroidAPS/troubleshooting_androidstudio.html#lost-keystore>`_.

Autosens (Užuomina - nėra būtina imtis konkrečių veiksmų)
-----------------------------------------------------------
* Autosens buvo pakeistas iš statinio į dinaminį modelį.
* Autosens jautrumui apskaičiuoti dabar persijungia tarp dviejų modulių: 24 valandų ir 8 valandų laikotarpius. Jis išsirinks vieną, kuris yra jautresnis. 
* Vartotojai, kurie naudojo oref1, gali pastebėti, kad sistema gali būti mažiau dinamiška pokyčiams, dėl tuo metu pasirinkto 24 ar 8 valandas jautrumo.

Danos RS slaptažodžio nustatymas (jei naudojate Dana RS)
-----------------------------------------------------------
* Pompos slaptažodis `Dana RS pompai <../Configuration/DanaRS-Insulin-Pump.html>`_ buvo netikrinamas ankstesnėse versijose.
* Atidarykite Nustatymus (trijų taškų meniu dešinėje viršutinėje ekrano pusėje)
* Slinkite žemyn ir spustelėkite trikampį šalia "Dana RS".
* Paspauskite "Pompos slaptažodis (tik v1)"
* Įveskite pompos slaptažodį (`numatytasis slaptažodis <../Configuration/DanaRS-Insulin-Pump.html#default-password>`_ skiriasi pagal programinės įrangos versiją) ir spustelėkite OK.

.. image:: ../images/DanaRSPW.png
  :alt: Nustatyti Dana RS slaptažodį
  
Norėdami pakeisti Dana RS pompos slaptažodį, vykdykite nurodymus, aprašytus `DanaRS puslapyje <../Configuration/DanaRS-Insulin-Pump.html#change-password-on-pump>`_.
