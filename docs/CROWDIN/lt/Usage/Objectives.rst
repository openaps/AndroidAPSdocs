Tikslai
**************************************************

AndroidAPS turi keletą mokymo programos tikslų, kuriuos įvykdę įvaldysite saugaus ciklo naudojimo funkcijas bei nustatymus.  Jie užtikrina, kad aukščiau aprašytus parametrus sukonfigūravote teisingai, ir kad suprantate, ką Jūsų sistema daro ir kodėl galite ja pasitikėti.

Jei **keičiate telefoną**, galite `eksportuoti nustatymus <../Usage/ExportImportSettings.html>`_ - tokiu būdu jau pasiekti tikslai nebus prarasti. Kartu bus išsaugoti ir Jūsų saugumo parametrai, kaip maks bolusas ir pan.  Jei nustatymų eksportavimo ir importavimo neatliksite, Tikslų programą turėsite pradėti iš pradžių.  Geriausia `pasidaryti savo nustatymų atsarginę kopiją <../Usage/ExportImportSettings.html>`_ kuo dažniau.

Jei norite sugrįžti į ankstesnį tikslą, skaitykite `paaiškinimą čia <../Usage/Objectives.html#go-back-in-objectives>`_.
 
Tikslas 1: vizualizacijos ir monitoringo nustatymai, bazės ir koeficientų analizė
====================================================================================================
* Pasirinkite tinkamą glikemijos duomenų šaltinį.  Žr. `Glikemijos duomenų šaltinis <../Configuration/BG-Source.html>`_.
* Pasirinkite tinkamą pompą Konfigūracijoje (pasirinkite Virtualią pompą, jei naudojate pompos modelį, kurio AndroidAPS sistema nepalaiko), kad būtų užtikrinta jos komunikacija su AndroidAPS.  
* Jei naudojate DanaR pompą, įsitikinkite, kad laikėtės `DanaR insulino pompos <../Configuration/DanaR-Insulin-Pump.html>`_ instrukcijų, kad užtikrintumėte gerą ryšį tarp pompos ir AndroidAPS.
* Vykdykite instrukcijas `Nightscout <../Installing-AndroidAPS/Nightscout.html>`_ puslapyje, kad įsitikintumėte, kad Nightscout gali priimti ir rodyti šiuos duomenis.
NSClient URL turi būti įvestas **BE /api/v1/** pabaigoje - žr. `NSClient nustatymai <../Configuration/Preferences.html#ns-client>`_.

*Jums gali tekti palaukti, kol bus perskaityta kita glikemijos reikšmė, kol AndroidAPS ją atpažins.*

Tikslas 2: išmokite valdyti AndroidAPS
==================================================
* Atlikite keletą AndroidAPS veiksmų, aprašytus šio tikslo užduotyje.
* Norėdami pamatyti individualias užduotis, spustelėkite oranžinį tekstą „Dar nebaigta“.
* Nuorodos į dokumentaciją padės jums tuo atveju, jei nebūsite užtikrinti vienu ar kitu vykdomu veiksmu.

   .. image:: ../images/Objective2_V2_5.png
     :alt: 2 tikslo ekrano vaizdas

Tikslas 3: Patvirtinkite, kad jūs suprantate
==================================================
* Atsakykite į testo klausimus su atsakymų variantais įvairiomis AndroidAPS temomis.
* Spustelėkite oranžinį tekstą „Dar nebaigta“, kad eitumėte į klausimų ir atsakymų puslapį.

   .. image:: ../images/Objective3_V2_5.png
     :alt: 3 tikslo ekrano vaizdas

* Nuorodos į dokumentaciją padės jums tuo atveju, jei nebūsite tokie tikri vienu ar kitu atsakymu.

Tikslas 4: pradėkite naudoti Atvirą ciklą
==================================================
* Pasirinkite „Atviras ciklas“ arba Nustatymuose arba ilgai paspausdami mygtuką „Ciklas“ pagrindinio ekrano viršutiniame kairiajame kampe.
* Norėdami pritaikyti AndroidAPS jūsų poreikiams, eikite į `Nustatymus <../Configuration/Preferences.html>`_.
* Patvirtinkite bent 20 laikinų valandinių bazių pasiūlymus per 7 dienas; įveskite juos pompoje ir AndroidAPS patvirtinkite, kad sutikote su pasiūlymais.  Patikrinkite, ar šie duomenys rodomi AndroidAPS ir Nightscout.
* Jei reikia, suaktyvinkite `Laikinus tikslus <../Usage/temptarget.html>`_. Naudokite Hipo laikiną tikslą apsisaugoti, kad sistema pernelyg aktyviai nekoreguotų kylančios glikemijos po buvusios hipoglikemijos. 

Sumažinti pranešimų skaičių
--------------------------------------------------
* Norėdami sumažinti pasiūlymų, kuriuos reikia patvirtinti atvirajame cikle, skaičių, nustatykite platų tikslinį diapazoną, pvz., 90–150 mg/dl arba 5,0–8,5 mmol/l. * Jei reikia naktį taip pat galite nustatyti aukštesnę viršutinę ribą arba visiškai pristabdyti atvirą ciklą. 
* Nustatymuose galite nustatyti mažiausią procentą, kurį reikia pasiekti prieš pasiūlant pakeisti laikiną valandinę bazę.

   .. image:: ../images/OpenLoop_MinimalRequestChange2.png
     :alt: Atvirojo ciklo minimalaus pokyčio užklausa
     
* Taip pat nereikia reaguoti į kiekvieną pasiūlymą kas penkias minutes...

Tikslas 5: perpraskite atvirojo ciklo veikimą bei laikinos bazės rekomendacijas
====================================================================================================
* Pradėkite suprasti kiekvienos laikinos valandinės bazės rekomendacijos argumentus, peržiūrėdami `Pagrindinės logikos supratimo straipsnį <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html>`_, taip pat `Prognozavimo kreives pagrindiniame AndroidAPS ekrane <../Getting-Started/Screenshots.html#section-e>`_/Nightscout ir skaičiavimo rezultatų santrauką jūsų OpenAPS skirtuke.
 
Tikslinę glikemiją greičiausiai norėsite nustatyti aukštesnę nei įprastai, kol įsitikinsite skaičiavimais ir nustatymais.  Sistema leidžia

* žemas tikslas yra ne mažiau kaip 4 mmol (72 mg/dl) arba ne daugiau kaip 10 mmol (180 mg/dl) 
* aukštas tikslas yra ne mažiau kaip 5 mmol (90 mg/dl) ir ne daugiau kaip 15 mmol (225 mg/dl)
* laikinas tikslas, kaip viena reikšmė, gali būti bet kokio dydžio, nuo 4 iki 15 mmol (72 mg/dl iki 225 mg/dl)

Tikslas yra reikšmė, kuria grindžiami skaičiavimai, o ne reikšmė, kuria norite išlaikyti gliukozės kiekį kraujyje.  Jei turite labai platų tikslinį diapazoną (pvz., 3 mmol/50 mg/dl ar daugiau), vargu ar pastebėsite bet kokią AndroidAPS veiklą. Numatomas gliukozės lygis greičiausiai bus jūsų tiksliniame diapazone, todėl nebus siūloma daug laikinų bazinio greičio pokyčių. 

Galbūt norėsite išbandyti koreguodami siauresnio tikslinio diapazono reikšmes (pvz., 1 mmol/l arba 20 mg/dl ar mažiau) ir pažiūrėkite, kaip keičiasi sistemos elgsena.  

Pagrindinio ekrano grafike (žalios linijos), kuriame norite palaikyti gliukozės kiekį kraujyje, galite pakeisti tikslinę reikšmių diapazoną, pakeisdami reikšmes, esančias skyriuje `Nustatymai <../Configuration/Preferences.html>`_ > Rodymo diapazonas“.
 
.. image:: ../images/sign_stop.png
  :alt: Stop ženklas

Jei naudojate virtualią pomp ir atvirą ciklą - nespauskite Patvirtinti šio tikslo pabaigoje.
------------------------------------------------------------------------------------------------------------------------------------------------------

.. image:: ./images/blank.png
  :alt: tuščias

Tikslas 6: pradėkite Uždaro ciklo (Closed Loop) režimą su pompos stabdymu esant žemai gliukozei
====================================================================================================
.. image:: ../images/sign_warning.png
  :alt: Įspėjamasis ženklas
  
Uždaras ciklas nekoreguos aukštos glikemijos 6 tiksle, nes jį apriboja sustabdymas dėl žemos gliukozės. Todėl jūs turite patys koreguoti aukštą glikemiją!
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
* Select Closed Loop either from `Preferences <../Configuration/Preferences.html>`_ or by pressing and holding the Open Loop button in the top left of the home screen.
* Set your target range slightly higher than you usually aim for, just to be safe.
* Watch  how temporary basals are active by viewing the blue basal text on the homescreen or the blue basal render on the homescreen graph.
* Ensure your settings have supported AndroidAPS to avoid having to treat a low glucose over a period of 5 days.  If you are still having frequent or severe low glucose episodes then consider refining your DIA, basal, ISF and carb ratios.
* You don't have to change your settings. During objective 6 maxIOB setting is internally set to zero automatically. This override will be reversed when moving to objective 7.
* The system will override your maxIOB settings to zero, which means if blood glucose is dropping it can reduce basal for you, but if blood glucose is rising then it will only increase basal if the basal IOB is negative (from a previous Low Glucose Suspend), otherwise basal rates will remain the same as your selected profile.  

   .. image:: ../images/Objective6_negIOB.png
     :alt: Example negative IOB

* If your basal IOB is negative (see screenshot above) a TBR > 100% can be issued also in objective 6.
* Dėl to Jūs galite patirti laikinus staigius glikemijos šuolius, ypač po hipoglikemijos korekcijos, nes neturėsite galimybės padidinti valandinės bazės.

Tikslas 7: koreguokite savo uždarąjį ciklą po truputį didindami maks AIO ir mažindami tikslinę glikemijos reikšmę
====================================================================================================
* Raise your 'Maximum total IOB OpenAPS can’t go over' (in OpenAPS called 'max-iob') above 0 over a period of 1 day, the default recommendation is "average mealbolus + 3x max daily basal"(for SMB algorithm) or "3x max daily basal" (for older AMA algorithm) but you should slowly work up to this until you know your settings work for you (max daily basal = the maximum hourly value in any time segment of the day).

  This recommendation should be seen as a starting point. If you set to the 3x and you are seeing moves that push you to hard and fast then lower that number. If you are very resistant raise it a very little at a time.

   .. image:: ../images/MaxDailyBasal2.png
     :alt: max daily basal

* Once confident on how much IOB suits your looping patterns then reduce your targets to your desired level.


Tikslas 8: jei reikia, derinkite valandines bazės reikšmes bei pagrindinius parametrus ir įgalinkite Autosens funkciją
====================================================================================================
* You can use `autotune <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html>`_ as a one off to check your basals remain accurate or do a traditional basal test.
* Enable `autosens <../Usage/Open-APS-features.html>`_ over a period of 7 days and watch the white line on the homescreen graph show how your sensitivity to insulin may be rising or falling as a result of exercise or hormones etc. and keep an eye in the OpenAPS report tab how AndroidAPS is adjusting the basals and/or targets accordingly.

*Don’t forget to record your looping in `this form <http://bit.ly/nowlooping>`_ logging AndroidAPS as your type of DIY loop software, if you have not already done so.*


Objective 9: Try additional features for daytime use and gain confidence in your closed loop system
====================================================================================================
* Before AAPS version 2.7 meal assist (MA) was the basic algorithm for AAPS and completing objective 8 was necessary to activate `advanced meal assist (AMA) <../Usage/Open-APS-features.html#advanced-meal-assist-ama>`_.
* As `advanced meal assist (AMA) <../Usage/Open-APS-features.html#advanced-meal-assist-ama>`_ is the standard algorithm from AAPS version 2.7 onwards use the following 28 days to try features you haven't used yet and get more confident with you closed loop system.


Tikslas 10: dienos metu aktyvuokite papildomas oref1 funkcijas, tokias kaip super mikro bolusas (SMB)
====================================================================================================
* You must read the `SMB chapter in this wiki <../Usage/Open-APS-features.html#super-micro-bolus-smb>`_ and `chapter oref1 in openAPSdocs <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html>`_ to understand how SMB works, especially what's the idea behind zero-temping.
* Then you ought to `rise maxIOB <../Usage/Open-APS-features.html#maximum-total-iob-openaps-cant-go-over-openaps-max-iob>`_ to get SMBs working fine. maxIOB now includes all IOB, not just added basal. That is, if given a bolus of 8 U for a meal and maxIOB is 7 U, no SMBs will be delivered until IOB drops below 7 U. A good start is maxIOB = average mealbolus + 3x max daily basal (max daily basal = the maximum hourly value in any time segment of the day - see `objective 7 <../Usage/Objectives.html#objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets>`_ for an illustration)
* min_5m_carbimpact default in absorption settings has changed from 3 to 8 going from AMA to SMB. If you are upgrading from AMA to SMB, you have to change it manually.


Objective 11: Automation
====================================================================================================
* You have to start objective 11 to be able to use `Automation <../Usage/Automation.html>`_.
* Make sure you have completed all objectives including exam `<../Usage/Objectives.html#objective-3-proof-your-knowledge>`_.


Go back in objectives
====================================================================================================
If you want to go back in objectives for whatever reason you can do so by clicking at "clear finished".

   .. image:: ../images/Objective_ClearFinished.png
     :alt: Go back in objectives
