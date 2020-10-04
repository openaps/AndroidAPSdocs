Komponentų Apžvalga 
**************************************************
AndroidAPS nėra tik (pačių sukurta) programa, tai yra vienas iš skirtingų jūsų uždarosios sistemos modulių. Prieš priimdami sprendimus dėl atskirų komponentų, turėtumėte peržiūrėti skiltį `Komponentų sąranka <https://androidaps.readthedocs.io/en/dev/EN/index.html#component-setup>`_.
   
.. image:: ../images/modules.png
  :alt: Komponentų apžvalga

.. pastaba:: 
   **SVARBUS SAUGOS ĮSPĖJIMAS**

   Šioje dokumentacijoje aprašytos pagrindinės AndroidAPS saugos funkcijos, grindžiamos aparatinės įrangos, su kuria nustatėte savo sistemą, saugos savybėmis. Labai svarbu, kad insulino pompa ir CGM sistema, naudojama uždaro ciklo sistemai su automatiniu insulino tiekimu, būtų tinkamai išbandytos ir visiškai veikiančios, pažymėtos CE ženklu (Europoje) kaip medicinos prietaisai. Šių komponentų aparatinės ar programinės įrangos pakeitimai gali sukelti netikėtą insulino tiekimą ir taip sukelti didelę riziką vartotojui. Nenaudokite sugedusių, modifikuotų ar pačių pagamintų insulino pompų ar CGM duomenų skaitytuvų, kad sukurtumėte ar valdytumėte AndroidAPS sistemą.

   Be to, ne mažiau svarbu naudoti tik originalius priedus, tokius kaip įšovikliai, kateteriai ir insulino rezervuarai, patvirtinti jūsų pompos ar CGM gamintojo. Nepatikrintų ar modifikuotų priedų naudojimas gali sukelti CGM sistemos netikslumus ir insulino tiekimo klaidas. Insulinas yra labai pavojingas, jei jis neteisingai dozuotas. Nežaisk su savo gyvenimu naudodamas neišbandytus ar modifikuotus priedus.
   
   Galiausiai, jūs neturėtumėte vartoti SGLT-2 inhibitorių (glifozinų), nes jie nenuspėjamai sumažina cukraus kiekį kraujyje.  Ypač pavojingas derinys su sistema, kuri sumažina bazę siekdama pakelti glikemiją, nes dėl gliflozinų šis glikemijos padidėjimas gali neįvykti ir gali grėsmingai pritrūkti insulino.

Būtinieji Moduliai
==================================================
Geri individualūs insulino dozavimo algoritmai
--------------------------------------------------
Nors jūs negalite nei nusipirkti, nei lengvai sukurti, greičiausiai tai yra modulis, kuris labiausiai nuvertinamas, nors jis yra būtinas uždaram ciklui. Jei algoritmas padės palaikyti diabeto valdymą, jam reikia teisingų nustatymų, kad nepriimtumėte rimtų klaidingų sprendimų.
Net jei dar trūksta kitų modulių, kartu su diabeto komanda galite patikrinti ir pakoreguoti esamą „profilį“. 
Dauguma uždaro ciklo naudotojų naudoja vadinamąją cirkadinę valandinę bazę, insulino jautrimo faktorių bei insulino ir angliavandenių santykio faktorius, kurie yra pagrįsti hormoniniu jautrumu insulinui dienos metu.

Profilį sudaro

* Bazė
* JIF (jautrumo insulinui faktorius) yra jūsų kraujo gliukozės kiekis, kurį sumažina vienas vienetas insulino
* IA (insulino ir angliavandenių santykis) - kiek vienas vienetas insulino padengia gramų angliavandenių
* IVT (insulino veikimo trukmė).

Negalima naudoti SGLT-2 inhibitorių
--------------------------------------------------
SGLT-2 inhibitoriai, dar vadinami gliflozinais, slopina gliukozės absorbciją (pasisavinimą) inkstuose. Kadangi jie nenuspėjamai sumažina gliukozės kiekį kraujyje, jų NEGALIMA naudoti su uždaro ciklo sistema, pavyzdžiui, AndroidAPS! Yra didžiulė ketoacidozės ar hipoglikemijos rizika! Ypač pavojingas šių medikamentų derinys su sistema, kuri sumažina bazę siekdama pakelti glikemiją, nes dėl gliflozinų šis glikemijos padidėjimas gali neįvykti ir gali grėsmingai pritrūkti insulino.

Telefonas
--------------------------------------------------
Jums reikia išmaniojo telefono su Android 6.0 ar naujesne versija. Kita AndroidAPS 2.7 pagrindinė versija palaikys tik Android 7 ir vėlesnes versijas. Taigi, jei jūs galvojate apie naują telefoną, rekomenduojama bent jau Android 8.1, bet optimaliam veikimui reikalinga Android 9 arba 10.

Vartotojai sukūrė `patikrintų išmaniųjų telefonų ir išmaniųjų laikrodžių, sąrašą:<https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_

Norėdami įvesti mobilųjį telefoną ar išmanųjį laikrodį, kurio dar nėra sąraše, užpildykite formą <https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewfor>'_.

Praneškite apie bet kokias lentelės problemas el. paštu `hardware@androidaps.org <mailto:hardware@androidaps.org>`_. Jei norite pateikti mobiliuosius telefonus ar išmaniuosius laikrodžius testavimui, atsiųskite el. laišką adresu `donations@androidaps.org <mailto:hardware@androidaps.org>`_.

Insulino pompa
--------------------------------------------------
AndroidAPS **šiuo metu** veikia su 

- `Accu-Chek Combo <../Configuration/Accu-Chek-Combo-Pump.html>`_ (papildomai reikia: Ruffy programėlės, LineageOS ar Android 8.1 savo telefone)
- `Accu-Chek Insight pompa <../Configuration/Accu-Chek-Insight-Pump.md>`_ 
- `Dana R pompa <../Configuration/DanaR-Insulin-Pump.md>`_ 
- `DanaRS <../Configuration/DanaRS-Insulin-Pump.html>`_ (išskyrus pompos su nauja programine įranga v3) 
- `kai kurios senos Medtronic pompos <../Configuration/MedtronicPump.html>`_ iš artėjančių, turinčių programinę įrangą 2.4 (papildomai reikia: RileyLink/Gnarl aparatūros, Android telefono su Bluetooth low energy/BLE mikroschema)

** Kitos pompos**, kurios ateityje gali veikti su AndroidAPS, yra išvardytos puslapyje „Ateityje galimos naudoti pompos" <../Getting-Started/Future-possible-Pump-Drivers.html>`_.

Jei norite įsigyti pompą ** savo lėšomis **, tiekėjų adresus skirtingose šalyse galite rasti `šioje lentelėje <https://drive.google.com/open?id=1CRfmmjA-0h_9nkRViP3J9FyflT9eu-a8HeMrhrKzKz0>“. Prašome užpildyti savo pardavėjo informaciją, jei ji dar nėra joje nurodyta.

**Kuri pompa labiausiai tinka uždaro ciklo sistemai su AndroidAPS?**

Combo, Insight ir senesnės Medtronic pompos yra patikimos ir tinkamos uždaram ciklui. Dėl infuzinės sistemos standartinės Luer užrakto jungties, Combo turi didelį pranašumą. Ir tam naudojama įprasta baterija, kurią galite nusipirkti bet kurioje degalinėje ar jums patogioje parduotuvėje. Ir jei jums to tikrai reikia, galite pavogti / pasiskolinti iš nuotolinio valdymo pultelio iš viešbučio kambario ;-).

Dana R/RS pranašumai prieš Combo yra:

Dana* R/RS gali prisijungti prie beveik bet kurio išmaniojo telefono, kuriame įdiegta Android> = 5.1. Nebūtina pakeisti gamyklinės programinės įrangos (pvz., Operacine sistema Lineage). Jei jūsų išmanusis telefonas sugenda arba yra pavogtas, galite greitai rasti kitą, kuris veiks su Dana*R/RS pompa... su Combo tai nėra taip lengva. bent jau tol, kol Android 8.1 diegiama tik keliuose telefonų modeliuose
- Pirmą kartą nustatyti DanaR/RS ir išmaniojo telefono ryšį yra lengviau. Tačiau paprastai šio žingsnio reikia tik pradinio sąrankos metu.
- Kol kas Combo dirba su ekrano analizavimu. Iš esmės tai veikia gerai, bet, deja, lėtai. Tai nėra taip blogai, ko reikia ciklui, nes visa tai veikia fone. Tačiau tai leis lengviau atšaukti esamą Bluetooth ryšį. Tai gali būti nepatogu, jei inicijuojate bolusą ir vėliau būdami per daug toli nuo išmaniojo telefono, pvz., gamindami maistą. 
- Combo vibruoja laikinos bazės TBR pabaigoje, Dana* R vibruoja (arba supypsi) dėl SMB. Naktį greičiausiai naudositės TBR, o ne SMB.  Dana* RS gali būti sukonfigūruota nei vibruoti, nei pypsėti.
- Istoriją su aktyviais angliavandeniais galima perskaityti DanaRS per kelias sekundes. Todėl išmaniuosius telefonus galima lengvai pakeisti neprisijungus. Kai tik bus gaunami nauji NGJ duomenys, ciklas gali būti iš karto tęsiamas.
Visos pompos, palaikančio AndroidAPS, yra atsparios vandeniui (bent jau naujos). Tik Dana pompos taip pat turi „garantiją dėl vandens atsparumo“ dėl uždaro akumuliatoriaus ir rezervuaro užpildymo skyriaus. 

Glikemijos šaltinis
--------------------------------------------------
Tai tik trumpa su AndroidAPS suderinamų NGJ monitoringo sistemų apžvalga. Norėdami gauti daugiau informacijos, žr. `čia <../Configuration/BG-Source.html>`_. Tiesiog trumpa pastaba: jei galite pateikti gliukozės duomenis xDrip+ programoje ar Nightscout svetainėje, galite pasirinkti xDrip+ (arba Nightscout su interneto ryšiu) kaip AAPS KG šaltinį.

* `Dexcom G6 <../Hardware/DexcomG6.html>`_: Veikia su xDrip+ arba modifikuota Dexcom programa
* `Dexcom G5 <../Hardware/DexcomG5.html>`_: Veikia su xDrip+ arba modifikuota Dexcom programa
* `Dexcom G4 <../Hardware/DexcomG4.html>`_: Šie sensoriai yra gana seni, bet jūs galite rasti instrukcijas apie tai, kaip naudoti juos su xDrip+ programa
* `Libre 2 <../Hardware/Libre2.html>`_: Veikia su xDrip+ (nereikia siųstuvo), tačiau taip pat turite sukurti savo modifikuotą programą Libre 2.
* `Libre 1 <../Hardware/Libre1.html>`_: Jums reikalingas siųstuvas, pavyzdžiui, Blucon ar MiaoMiao, kurį galite susikurti patys arba tiesiog nusipirkti, ir xDrip+ programa
* `Eversense <../Hardware/Eversense.html>`_: Kol kas veikia tik kartu su ESEL programa ir modifikuota Eversense programa (neveikia su Dana RS ir LineageOS deriniu, tačiau gerai veikia su DanaRS ir Android arba Combo ir Lineage OS)
* `Enlite <../Hardware/MM640g.html>`_: gana sudėtingas, reikalinga daug papildomų pastangų


Nightscout
--------------------------------------------------
Nightscout yra atvirojo kodo žiniatinklio programa, galinti registruoti ir rodyti jūsų NGJ ir AndroidAPS duomenis bei generuoti ataskaitas. Daugiau informacijos galite rasti projekto Nightscout tinklalapyje <http://www.nightscout.info/>`_. You can create your own `Nightscout website <https://nightscout.github.io/nightscout/new_user/>`_, use the semi-automated Nightscout setup on `zehn.be <https://ns.10be.de/en/index.html>`_ or host it on your own server (this is for IT experts).

Nightscout yra nepriklausomas nuo kitų modulių. Jums jo reikės, kad galėtumėte įvykdyti 1-ą Tikslą.

Norėdami gauti daugiau informacijos apie Nightscout konfigūravimą, kad galėtumėte naudoti su AndroidAPS, skaitykite `čia <../Installing-AndroidAPS/Nightscout.html>`_.

AAPS-.apk failas
--------------------------------------------------
Pagrindiniai sistemos komponentai. Prieš diegdami programą, pirmiausia turite sukurti apk failą (kuris yra Android programos failo pavadinimo plėtinys). Instrukcijas rasite `čia  <../Installing-AndroidAPS/Building-APK.html>`_.  

Pasirenkamieji Moduliai
==================================================
Išmanieji laikrodžiai
--------------------------------------------------
Bet koks išmanusis laikrodis su Android Wear 1.x ar naujesne versija veikia. Daugelis uždaro ciklo vartotojai naudoja Sony Smartwatch 3 (SWR50), nes taip pat galima priimti reikšmes iš Dexcom G5/G6, kai išmaniojo telefono nėra diapazone. Kai kuriuos kitus išmaniuosius laikrodžius galima pritaikyti, kad juos būtų galima naudoti kaip autonominį imtuvą (žr. `dokumentaciją <<https://github.com/NightscoutFoundation/xDrip/wiki/Patching-Android-Wear-devices-for-use-with-the-G5>`_, jei norite gauti daugiau informacijos).

Vartotojai sukūrė `patikrintų išmaniųjų telefonų ir išmaniųjų laikrodžių, sąrašą:<https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_. Yra įvairių laikrodžių ekranų, skirtų naudoti su AndroidAPS, daugiau informacijos galite rasti `čia <../Configuration/Watchfaces.html>`_.

Norėdami įvesti mobilųjį telefoną ar išmanųjį laikrodį, kurio dar nėra sąraše, užpildykite formą <https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewfor>'_.

Praneškite apie bet kokias lentelės problemas el. paštu `hardware@androidaps.org <mailto:hardware@androidaps.org>`_. Jei norite pateikti mobiliuosius telefonus ar išmaniuosius laikrodžius testavimui, atsiųskite el. laišką adresu `donations@androidaps.org <mailto:hardware@androidaps.org>`_.

xDrip+
--------------------------------------------------
Net jei jums nereikia xDrip+ programos kaip KG duomenų šaltinio, vis tiek galite ja naudotis aliarmams arba patogų glikemijos duomenų rodymą. xDrip+ galite nustatyti norimus įspėjimo signalų, apibrėžti laiką, kada jie turėtų būti aktyvūs, ar jie gali nepaisyti išmaniojo telefono nutildymo ir pan. Kai kurią xDrip+ informaciją galima rasti `čia <../Configuration/xdrip.html>`_. Atminkite, kad xDrip+ tobulinimas yra labai aktyvus ir dokumentacija kartais negali jo sekti, todėl ne visada gali būti atnaujinta.

Pavyzdinis nustatymas
==================================================
Žingsnis po žingsnio instrukcijas rasite Pavyzdiniame nustatyme. Pavyzdinio nustatymo rekomendacijos yra gana senos, tačiau vis dar aktualios.

.. toctree::
   :maxdepth: 1
   :glob:
   
   Pavyzdinis Nustatymas <../Getting-Started/Sample-Setup.rst>
 
  
Ką daryti laukiant modulių
==================================================
Kartais užtrunka šiek tiek laiko, kol bus gauti visi uždaro ciklo moduliai. Nesijaudinkite, laukdami galite padaryti daug. BŪTINA patikrinti ir (jei reikia) pritaikyti bazę, insulino ir angliavandenių santykį (IA), jautrumo insulinui faktorių (JIF) ir kt. Ir galbūt atviras ciklas gali būti geras būdas išbandyti sistemą ir susipažinti su AndroidAPS. Šiame režime AndroidAPS teikia rekomendacijas, kurių galite laikytis rankiniu būdu.

Galite tęsti darbą skaitydami <https://androidaps.readthedocs.io/en/dev/EN/Where-To-Go-For-Help/Background-reading.html> dokumentaciją, susisiekti su kitais uždaro ciklo naudotojais, skaityti kitų vartotojų praktikas. Tačiau būkite atsargūs, ne visos vartotojo praktikos yra teisingos ar tinkamos jūsų atveju.

**Atlikta?**
Jei turite visus AAPS komponentus kartu arba bent jau pakankamai, kad pradėtumėte nuo atviro ciklo, pirmiausia turėtumėte perskaityti `Tikslų skiltį <../Usage/Objectives.html>`_ prieš pradedant naują Tikslą bei nustatyti savo 
`įrangą <../index.html#component-setup>`_.
