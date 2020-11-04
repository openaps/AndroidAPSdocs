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
* Pasirinkite Uždaras ciklas `Nustatymai <../Configuration/Preferences.html>`_ arba ilgai spausdami Atviro ciklo mygtuką viršutiniame kairiajame pagrindinio ekrano kampe.
* Nustatykite tikslinę glikemiją šiek tiek didesnę, nei įprastai, kad užtikrintumėte saugumą.
* Galite analizuoti laikinų valandinių bazių aktyvumą stebėdami mėlyną tekstą pagrindiniame ekrane arba mėlyną sritį grafike.
* Įsitikinkite, kad jūsų AndroidAPS nustatymai yra teisingi. Stebėkite jo veikimą per 5 dienas. Jei jums nereikia įsikišti rankiniu būdu ir koreguoti žemą glikemiją, nustatymai yra teisingi.  Jei vis tiek pasikartoja dažna ar sunki hipoglikemija, turėtumėte koreguoti IVT, valandinę bazę, JIF ar insulino ir angliavandenių santykio rodiklius.
* Jums nereikia keisti nustatymų. Kol esate 6 tiksle, maksimalus aktyvaus insulino kiekis organizame automatiškai nustatomas ties nuliu. Šio parametro pakeitimas nuliu bus atšauktas, kai pasieksite 7 tikslą.
* Sistema pakeis jūsų maxAIO nustatymus iki nulio, o tai reiškia, kad jei cukraus kiekis kraujyje krinta, tai gali sumažinti jūsų valandinę bazę, tačiau jei cukraus kiekis kraujyje didėja, valandinė bazė bus padidinta tik tuo atveju, jei bazės AIO yra neigiama (iš ankstesnio sustabdymo esant žemai glikemijai), kitu atveju, valandinė bazė išliks tokia pati kaip ir jūsų pasirinktas profilis.  

   .. image:: ../images/Objective6_negIOB.png
     :alt: Neigiamo AIO pavyzdys

* Jei jūsų bazės AIO yra neigiama (žr. viršuje pateiktą ekrano nuotrauką), 6 tiksle taip pat galima nustatyti laikiną bazė didesnę nei 100%.
* Dėl to Jūs galite patirti laikinus staigius glikemijos šuolius, ypač po hipoglikemijos korekcijos, nes neturėsite galimybės padidinti valandinės bazės.

Tikslas 7: koreguokite savo uždarąjį ciklą po truputį didindami maks AIO ir mažindami tikslinę glikemijos reikšmę
====================================================================================================
* Vienai dienai nustatykite „maksimalų bendrą AIO, kurio negalima viršyti“ (OpenAPS vadinamą „max-iob“) reikšmę, didesnę nei 0. Rekomenduojama numatytoji reikšmė yra „vidutinis valgio boliusas + 3 x didžiausia dienos valandinė bazė" (SMB algoritmui) arba 3x didžiausia dienos valandinė bazė (senesniam AMA algoritmui), tačiau turėtumėte palaipsniui artėkite prie šios reikšmės, kol sužinosite, kad nustatymas jums tinka (didžiausia dienos valandinė bazė = didžiausia valandinė bazė per visą paros laikotarpį).

  Ši rekomendacija turėtų būti laikoma atskaitos tašku. Jei naudosite koeficientą 3x ir pastebėsite, kad AAPS veikia per daug agresyviai, sumažinkite šį koeficientą (pvz., 2x, ...). Jei esate rezistentiškas, galite po truputį jį pakelti.

   .. image:: ../images/MaxDailyBasal2.png
     :alt: max daily basal

* Nustačius jums tinkamo aktyvaus insulino kiekį, sumažinkite savo tikslinę glikemiją iki norimo lygio.


Tikslas 8: jei reikia, koreguokite valandinės bazės reikšmes bei pagrindinius parametrus ir įgalinkite Autosens funkciją
====================================================================================================
* Galite naudoti `autotune įrankį <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html>`_, kad patikrintumėte, ar jūsų baziniai nustatymai yra tikslūs, arba atlikti tradicinį bazės patikrinimo testą.
* 7 dienoms įjunkite `Autosens <../Usage/Open-APS-features.html>`_ ir stebėkite baltą liniją, esančią pagrindinio ekrano grafike, nurodančią, kaip jūsų jautrumas insulinui didėja ar mažėja atsižvelgiant į aktyvumą, hormonų veiklą ir pan. taip pat galima analizuoti informaciją OpenAPS skirtuke, kad sužinotumėte, kaip AndroidAPS koreguoja nustatytą valandinę bazę ir/ar tikslinę glikemiją.

* Kaip uždaro ciklo naudojotas, nepamirškite užsiregistruoti naudodamiesi `šia forma <http://bit.ly/nowlooping>`_, ir pažymėti, kad naudojatės AndroidAPS - „pasidaryk pats“ uždaro ciklo programine įranga.*


9 tikslas: Išbandykite papildomas kasdienio naudojimo funkcijas ir įgykite pasitikėjimą uždara ciklo sistema
====================================================================================================
* Iki AAPS 2.7 versijos maisto asistentas (MA) buvo pagrindinis AAPS algoritmas, o norint užbaigti 8 tikslą, reikėjo aktyvuoti `išmanųjį maisto asistentą AMA <../Usage/Open-APS-features.html#advanced-meal-assist-ama>`_.
* Kadangi `išmanusis maisto asistentas AMA Advanced Advanced Assist Assist (AMA) <../Usage/Open-APS-features.html#advanced-meal-assist-ama>`_ yra jau standartinis algoritmas nuo AAPS 2.7 versijos, ateinančias 28-ias dienas išbandykite funkcijas, kurių dar nenaudojote, ir įgykite daugiau pasitikėjimo uždara ciklo sistema.


Tikslas 10: dienos metu aktyvuokite papildomas oref1 funkcijas, tokias kaip super mikro bolusas (SMB)
====================================================================================================
* Turite perskaityti šios dokumentacijos `SMB skyrių <../Usage/Open-APS-features.html#super-micro-bolus-smb>`_ ir `oref1 skiltį openAPS dokumentacijoje <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html>`_, kad suprastumėte kaip veikia SMB, ypač kokia yra nulinės bazės nustatymo idėja.
* Tada turėtumėte `padidinti maxAIO <../Usage/Open-APS-features.html#maximum-total-iob-openaps-cant-go-over-openaps-max-iob>`_, kad SMB veiktų gerai. max AIO dabar apima visą AIO, ne tik pridėtą (pakeltą) valandinę bazę. Tai yra, jei valgymui suleidžiamas 8 vv boliusas, o maksAIO yra 7 vv, SMB nebus leidžiamas tol, kol AIO nenukris žemiau 7 vv. Galima pradėti nuo maxAIO = vidutinis maisto bolusas + 3x maksimali dienos valandinė bazė bet kuriuo paros metu (apie tai rašoma `7 tiksle <../Usage/Objectives.html#objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets>`_)
* pereinant nuo AMA iki SMB, "min_5m_carbimpact" numatytasis absorbcijos parametras pakeičiamas nuo 3 iki 8. Jeigu Jūs pereinate nuo AMA į SMB, turite jį parametrą pakeisti rankiniu būdu.


Tikslas 11: Automatizavimas
====================================================================================================
* Jūs turite pradėti tikslą 11, kad galėtumėte naudoti "Automatizavimu <../Usage/Automation.html>`_.
* Įsitikinkite, kad jūs užbaigėte visus tikslus, įskaitant egzaminą `<../Usage/Objectives.html#objective-3-proof-your-knowledge>`_.
* Ankstesnių (iki šiol neužbaigtų) tikslų atlikimas neturės įtakos kitiems tikslams, kuriuos jau užbaigėte. Visi užbaigti tikslai bus išsaugoti!


Grįžti į tikslus
====================================================================================================
Jei dėl bet kokios priežasties norite grįžti į tikslų pradžią, galite tai padaryti paspaudę "išvalyti užbaigtus".

.. image:: ../images/Objective_ClearFinished.png
  :alt: Grįžti į tikslus
