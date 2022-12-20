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
* Note that URL in NSClient must be **WITHOUT /api/v1/** at the end - see `NSClient settings in Preferences <../Configuration/Preferences.html#nsclient>`__.

*Jums gali tekti palaukti, kol bus perskaityta kita glikemijos reikšmė, kol AndroidAPS ją atpažins.*

Tikslas 2: išmokite valdyti AndroidAPS
==================================================
* Atlikite keletą AndroidAPS veiksmų, aprašytus šio tikslo užduotyje.
* Norėdami pamatyti individualias užduotis, spustelėkite oranžinį tekstą „Dar nebaigta“.
* Nuorodos į dokumentaciją padės jums tuo atveju, jei nebūsite užtikrinti vienu ar kitu vykdomu veiksmu.

  .. image:: ../images/Objective2_V2_5.png
    :alt: 2 tikslo ekrano vaizdas

Objective 3: Prove your knowledge
==================================================
* Atsakykite į testo klausimus su atsakymų variantais įvairiomis AndroidAPS temomis.
* Spustelėkite oranžinį tekstą „Dar nebaigta“, kad eitumėte į klausimų ir atsakymų puslapį.

  .. image:: ../images/Objective3_V2_5.png
    :alt: 3 tikslo ekrano vaizdas

* Nuorodos į dokumentaciją padės jums tuo atveju, jei nebūsite tokie tikri vienu ar kitu atsakymu.
* The questions for objective 3 have been completely rewritten by native speakers as of AAPS 2.8. The new ones cover the same basic topics plus a few new ones.
* These new questions will lead to some not answered questions even though you have successfully completed objective 3 in previous versions.
* Unanswered questions will affect you only if you start a new objective. In other words: If you have already completed all objectives you can wait and answer the new questions later without loosing AAPS functions.

Tikslas 4: pradėkite naudoti Atvirą ciklą
==================================================
* Pasirinkite „Atviras ciklas“ arba Nustatymuose arba ilgai paspausdami mygtuką „Ciklas“ pagrindinio ekrano viršutiniame kairiajame kampe.
* Work through the `Preferences <../Configuration/Preferences.html>`__ to set up for you.
* Patvirtinkite bent 20 laikinų valandinių bazių pasiūlymus per 7 dienas; įveskite juos pompoje ir AndroidAPS patvirtinkite, kad sutikote su pasiūlymais.  Patikrinkite, ar šie duomenys rodomi AndroidAPS ir Nightscout.
* Jei reikia, suaktyvinkite `Laikinus tikslus <../Usage/temptarget.html>`_. Naudokite Hipo laikiną tikslą apsisaugoti, kad sistema pernelyg aktyviai nekoreguotų kylančios glikemijos po buvusios hipoglikemijos. 

Sumažinti pranešimų skaičių
--------------------------------------------------
* Norėdami sumažinti pasiūlymų, kuriuos reikia patvirtinti atvirajame cikle, skaičių, nustatykite platų tikslinį diapazoną, pvz., 90–150 mg/dl arba 5,0–8,5 mmol/l.
* Jei reikia naktį taip pat galite nustatyti aukštesnę viršutinę ribą arba visiškai pristabdyti atvirą ciklą. 
* Nustatymuose galite nustatyti mažiausią procentą, kurį reikia pasiekti prieš pasiūlant pakeisti laikiną valandinę bazę.

  .. image:: ../images/OpenLoop_MinimalRequestChange2.png
    :alt: Atvirojo ciklo minimalaus pokyčio užklausa
     
* Taip pat nereikia reaguoti į kiekvieną pasiūlymą kas penkias minutes...

Tikslas 5: perpraskite atvirojo ciklo veikimą bei laikinos bazės rekomendacijas
====================================================================================================
* Start to understand the thinking behind the temp basal recommendations by looking at the `determine basal logic <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html>`_ and both the `forecast line in AndroidAPS homescreen <../Getting-Started/Screenshots.html#prediction-lines>`_/Nightscout and the summary of outputs from the calculations in your OpenAPS tab.
 
Tikslinę glikemiją greičiausiai norėsite nustatyti aukštesnę nei įprastai, kol įsitikinsite skaičiavimais ir nustatymais.  Sistema leidžia

* žemas tikslas yra ne mažiau kaip 4 mmol (72 mg/dl) arba ne daugiau kaip 10 mmol (180 mg/dl) 
* aukštas tikslas yra ne mažiau kaip 5 mmol (90 mg/dl) ir ne daugiau kaip 15 mmol (225 mg/dl)
* laikinas tikslas, kaip viena reikšmė, gali būti bet kokio dydžio, nuo 4 iki 15 mmol (72 mg/dl iki 225 mg/dl)

Tikslas yra reikšmė, kuria grindžiami skaičiavimai, o ne reikšmė, kuria norite išlaikyti gliukozės kiekį kraujyje.  Jei turite labai platų tikslinį diapazoną (pvz., 3 mmol/50 mg/dl ar daugiau), vargu ar pastebėsite bet kokią AndroidAPS veiklą. Numatomas gliukozės lygis greičiausiai bus jūsų tiksliniame diapazone, todėl nebus siūloma daug laikinų bazinio greičio pokyčių. 

Galbūt norėsite išbandyti koreguodami siauresnio tikslinio diapazono reikšmes (pvz., 1 mmol/l arba 20 mg/dl ar mažiau) ir pažiūrėkite, kaip keičiasi sistemos elgsena.  

You can view a wider range (green lines) on the graph for the values you aim to keep your blood glucose within by entering different values in `Preferences <../Configuration/Preferences.html>`__ > Range for Visualisation.
 
.. image:: ../images/sign_stop.png
  :alt: Stop ženklas

Jei naudojate virtualią pomp ir atvirą ciklą - nespauskite Patvirtinti šio tikslo pabaigoje.
------------------------------------------------------------------------------------------------------------------------------------------------------

.. image:: ../images/blank.png
  :alt: tuščias

Tikslas 6: pradėkite Uždaro ciklo (Closed Loop) režimą su pompos stabdymu esant žemai gliukozei
====================================================================================================
.. image:: ../images/sign_warning.png
  :alt: Įspėjamasis ženklas
  
Closed loop will not correct high BG values in objective 6 as it is limited to low glucose suspend. High BG values have to be corrected manually by you!
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
* Prerequisite: You need a good profile (basal, ISF, IC) already working in AndroidAPS to start with Loop in Low Glucose Suspend mode. Otherwise you can run in a hypo which you have to manually correct. This will help you a lot to avoid having to treat a low glucose over a period of 5 days. **If you are still having frequent or severe low glucose episodes then consider refining your DIA, basal, ISF and carb ratios and do NOT start objective 6 at this time.**
* You don't have to change your settings now. During objective 6, the maxIOB setting is internally set to zero automatically. **This override will be reversed when moving to objective 7.**
* The system will override your maxIOB settings to zero, which means if blood glucose is dropping it can reduce basal for you. If blood glucose is rising then it will only increase basal if the basal IOB is negative from a previous Low Glucose Suspend. Otherwise basal rates will remain the same as your selected profile. **That means that you have to manually handle high values with insulin corrections.** 
* If your basal IOB is negative (see screenshot below) a TBR > 100% can be issued also in objective 6.

.. image:: ../images/Objective6_negIOB.png
    :alt: Neigiamo AIO pavyzdys

* Set your target range slightly higher than you usually aim for, just to be safe and have a bit more scurity buffer.
* Enable 'Low Glucose Suspend' mode either by by pressing and holding the Loop icon at the top right corner of the home screen and selecting the Loop - LGS mode icon.
* Watch how temporary basals are active by viewing the blue basal text on the homescreen or the blue basal render on the homescreen graph.
* Dėl to Jūs galite patirti laikinus staigius glikemijos šuolius, ypač po hipoglikemijos korekcijos, nes neturėsite galimybės padidinti valandinės bazės.


Objective 7: Tuning the closed loop, raising maxIOB above 0 and gradually lowering BG targets
====================================================================================================
* Select 'Closed Loop' either from `Preferences <../Configuration/Preferences.html>`__ or by pressing and holding the Loop icon at the top right corner of the home screen, over a period of 1 day.
* Raise your 'Maximum total IOB OpenAPS can’t go over' (in OpenAPS called 'max-iob') above 0. The default recommendation is "average mealbolus + 3x max daily basal" (for the SMB algorithm) or "3x max daily basal" (for the older AMA algorithm) but you should slowly work up to this until you know your settings work for you (max daily basal = the maximum hourly value in any time segment of the day).

  Ši rekomendacija turėtų būti laikoma atskaitos tašku. If you set to the 3x and you are seeing moves that push you too hard and fast then lower that number. If you are very resistant, raise it very little at a time.

  .. image:: ../images/MaxDailyBasal2.png
    :alt: max daily basal

* Once confident on how much IOB suits your looping patterns, then reduce your targets to your desired level.



Tikslas 8: jei reikia, koreguokite valandinės bazės reikšmes bei pagrindinius parametrus ir įgalinkite Autosens funkciją
====================================================================================================
* Galite naudoti `autotune įrankį <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html>`_, kad patikrintumėte, ar jūsų baziniai nustatymai yra tikslūs, arba atlikti tradicinį bazės patikrinimo testą.
* 7 dienoms įjunkite `Autosens <../Usage/Open-APS-features.html>`_ ir stebėkite baltą liniją, esančią pagrindinio ekrano grafike, nurodančią, kaip jūsų jautrumas insulinui didėja ar mažėja atsižvelgiant į aktyvumą, hormonų veiklą ir pan. taip pat galima analizuoti informaciją OpenAPS skirtuke, kad sužinotumėte, kaip AndroidAPS koreguoja nustatytą valandinę bazę ir/ar tikslinę glikemiją.

*Don’t forget to record your looping in* `this form <https://bit.ly/nowlooping>`_ *logging AndroidAPS as your type of DIY loop software, if you have not already done so.*


Objective 9: Enabling additional oref1 features for daytime use, such as super micro bolus (SMB)
====================================================================================================
* Turite perskaityti šios dokumentacijos `SMB skyrių <../Usage/Open-APS-features.html#super-micro-bolus-smb>`_ ir `oref1 skiltį openAPS dokumentacijoje <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html>`_, kad suprastumėte kaip veikia SMB, ypač kokia yra nulinės bazės nustatymo idėja.
* Tada turėtumėte `padidinti maxAIO <../Usage/Open-APS-features.html#maximum-total-iob-openaps-cant-go-over-openaps-max-iob>`_, kad SMB veiktų gerai. max AIO dabar apima visą AIO, ne tik pridėtą (pakeltą) valandinę bazę. Tai yra, jei valgymui suleidžiamas 8 vv boliusas, o maksAIO yra 7 vv, SMB nebus leidžiamas tol, kol AIO nenukris žemiau 7 vv. Galima pradėti nuo maxAIO = vidutinis maisto bolusas + 3x maksimali dienos valandinė bazė bet kuriuo paros metu (apie tai rašoma `7 tiksle <../Usage/Objectives.html#objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets>`_)
* pereinant nuo AMA iki SMB, "min_5m_carbimpact" numatytasis absorbcijos parametras pakeičiamas nuo 3 iki 8. Jeigu Jūs pereinate nuo AMA į SMB, turite jį parametrą pakeisti rankiniu būdu.


Objective 10: Automation
====================================================================================================
* You have to start objective 10 to be able to use `Automation <../Usage/Automation.html>`_.
* Make sure you have completed all objectives including exam `<../Usage/Objectives.html#objective-3-prove-your-knowledge>`_.
* Ankstesnių (iki šiol neužbaigtų) tikslų atlikimas neturės įtakos kitiems tikslams, kuriuos jau užbaigėte. Visi užbaigti tikslai bus išsaugoti!


Grįžti į tikslus
====================================================================================================
Jei dėl bet kokios priežasties norite grįžti į tikslų pradžią, galite tai padaryti paspaudę "išvalyti užbaigtus".

.. image:: ../images/Objective_ClearFinished.png
  :alt: Grįžti į tikslus

Objectives in Android APS before version 3.0
====================================================================================================
One objective was removed when Android APS 3.0 was released.  Users of Android APS version 2.8.2.1 who are on older Android software (i.e. earlier than version 9) will be using an older set of objectives which can be found `here <../Usage/Objectives_old.html>`_.
