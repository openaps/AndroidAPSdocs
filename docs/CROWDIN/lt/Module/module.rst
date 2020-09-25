Component Overview 
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

If you need to **privately buy** a pump then you can find various distributors is in `this spreadsheet <https://drive.google.com/open?id=1CRfmmjA-0h_9nkRViP3J9FyflT9eu-a8HeMrhrKzKz0>`_, please share the details of yours if not already listed.

**So what's the best pump for looping with AndroidAPS?**

The Combo, the Insight and the older Medtronics are solid pumps, and loopable. The Combo has the advantage of many more infusion set types to choose from as it has a standard luer lock. Ir tam naudojama įprasta baterija, kurią galite nusipirkti bet kurioje degalinėje ar jums patogioje parduotuvėje. Ir jei jums to tikrai reikia, galite pavogti / pasiskolinti iš nuotolinio valdymo pultelio iš viešbučio kambario ;-).

The advantages of the DanaR/RS vs. the Combo as the pump of choice however are:

- The Dana*R/RS connects to almost any phone with Android >= 5.1 without the need to flash lineage. If your phone breaks you usually can find easily any phone that works with the Dana*R/RS pumps as quick replacement... su Combo tai nėra taip lengva. bent jau tol, kol Android 8.1 diegiama tik keliuose telefonų modeliuose
- Initial pairing is simpler with the Dana* RS. Tačiau paprastai šio žingsnio reikia tik pradinio sąrankos metu.
- So far the Combo works with screen parsing. Iš esmės tai veikia gerai, bet, deja, lėtai. Tai nėra taip blogai, ko reikia ciklui, nes visa tai veikia fone. Still there is much more time you need to be connected so more time where the BT connection might break, which isn't so easy if you walk away from your phone whilst bolusing & cooking. 
- The Combo vibrates on the end of TBRs, the Dana* R vibrates (or beeps) on SMB. Naktį greičiausiai naudositės TBR, o ne SMB.  Dana* RS gali būti sukonfigūruota nei vibruoti, nei pypsėti.
- Reading the history on the RS in a few seconds with carbs makes it possible to switch phones easily while offline and continue looping as soon a soon as some CGM values are in.
- All pumps AndroidAPS can talk with are waterproof on delivery. Tik Dana pompos taip pat turi „garantiją dėl vandens atsparumo“ dėl uždaro akumuliatoriaus ir rezervuaro užpildymo skyriaus. 

Glikemijos šaltinis
--------------------------------------------------
This is just a short overview of all compatible CGMs/FGM with AndroidAPS. For further details, look `here <../Configuration/BG-Source.html>`_. Just a short hint: if you can display your glucose data in xDrip+ app or Nightscout website, you can choose xDrip+ (or Nightscout with web connection) as BG source in AAPS.

* `Dexcom G6 <../Hardware/DexcomG6.html>`_: It works with xDrip+ app or patched Dexcom app
* `Dexcom G5 <../Hardware/DexcomG5.html>`_: It works with xDrip+ app or patched Dexcom app
* `Dexcom G4 <../Hardware/DexcomG4.html>`_: These sensors are quite old, but you can find instructions on how to use them with xDrip+ app
* `Libre 2 <../Hardware/Libre2.html>`_: It works with xDrip+ (no transmitter needed), but you have to build your own patched app.
* `Libre 1 <../Hardware/Libre1.html>`_: You need a transmitter like Bluecon or MiaoMiao for it (build or buy) and xDrip+ app
* `Eversense <../Hardware/Eversense.html>`_: It works so far only in combination with ESEL app and a patched Eversense-App (works not with Dana RS and LineageOS, but DanaRS and Android or Combo and Lineage OS work fine)
* `Enlite <../Hardware/MM640g.html>`_: quite complicated with a lot of extra stuff


Nightscout
--------------------------------------------------
Nightscout is a open source web application that can log and display your CGM data and AndroidAPS data and creates reports. You can find more information on the `website of the Nightscout project <http://www.nightscout.info/>`_. You can create your own Nightscout website `using Heroko <http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku>`_, use the semi-automated Nightscout setup on `zehn.be <https://ns.10be.de/en/index.html>`_ or host it on your own server (this is for IT experts).

Nightscout is independent of the other modules. You will need it to fulfill Objective 1.

Additional information on how to configure Nightscout for use with AndroidAPS can be found `here <../Installing-AndroidAPS/Nightscout.html>`_.

AAPS-.apk file
--------------------------------------------------
The basic component of the system. Before installing the app, you have to build the apk-file (which is the filename extension for an Android App) first. Instructions are  `here <../Installing-AndroidAPS/Building-APK.html>`_.  

Optional Modules
==================================================
Smartwatch
--------------------------------------------------
You can choose any smartwatch with Android Wear 1.x and above. Most loopers wear a Sony Smartwatch 3 (SWR50) as it is the only watch that can get readings from Dexcom G5/G5 when phone is out of range. Some other watches can be patched to work as a standalone receiver as well (see `this documentation <https://github.com/NightscoutFoundation/xDrip/wiki/Patching-Android-Wear-devices-for-use-with-the-G5>`_ for more details).

Users are creating a `list of tested phones and watches <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_. There are different watchfaces for use with AndroidAPS, which you can find `here <../Configuration/Watchfaces.html>`_.

Norėdami įvesti mobilųjį telefoną ar išmanųjį laikrodį, kurio dar nėra sąraše, užpildykite formą <https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewfor>'_.

Praneškite apie bet kokias lentelės problemas el. paštu `hardware@androidaps.org <mailto:hardware@androidaps.org>`_. Jei norite pateikti mobiliuosius telefonus ar išmaniuosius laikrodžius testavimui, atsiųskite el. laišką adresu `donations@androidaps.org <mailto:hardware@androidaps.org>`_.

xDrip+
--------------------------------------------------
Even if you don't need to have the xDrip+ App as BG Source, you can still use it for i.e. alarms or a good blood glucose display. You can have as many as alarms as you want, specify the time when the alarm should be active, if it can override silent mode, etc. Some xDrip+ information can be found `here <../Configuration/xdrip.html>`_. Please be aware that the documentations to this app are not always up to date as its progress is quite fast.

Pavyzdinis nustatymas
==================================================
If you want to get a step by step example, you might want to look at a sample setup. The first sample setup is quite old, but should be still up-to-date.

.. toctree::
   :maxdepth: 1
   :glob:
   
   Sample Setup <../Getting-Started/Sample-Setup.rst>
 
  
What to do while waiting for modules
==================================================
It sometimes takes a while to get all modules for closing the loop. But no worries, there are a lot of things you can do while waiting. It is NECESSARY to check and (where approporiate) adapt basal rates (BR), insulin-carbration (IC), insulin-sensitivity-factors (ISF) etc. And maybe open loop can be a good way to test the system and get familiar with AndroidAPS. Using this mode, AndroidAPS gives treatment advices you can manually execute.

You can keep on reading through the docs here, get in touch with other loopers online or offline, `read <https://androidaps.readthedocs.io/en/dev/EN/Where-To-Go-For-Help/Background-reading.html>`_ documentations or what other loopers write (even if you have to be careful, not everything is correct or good for you to reproduce).

**Done?**
If you have your AAPS components all together (congrats!) or at least enough to start in open loop mode, you should first read through the `Objective description <../Usage/Objectives.html>`_ before each new Objective and setup up your `hardware <../index.html#component-setup>`_.
