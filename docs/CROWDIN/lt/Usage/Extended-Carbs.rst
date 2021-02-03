Ištęsti angliavandeniai / "iAV"
**************************************************
Vykdant įprastą pompos terapiją, ištęstos dozės yra tinkamas būdas susitvarkyti su riebiu ar kitokiu lėtai įsisavinamu maistu, kuris padidina gliukozės kiekį kraujyje ilgiau nei daro insulinas. Tačiau ištęsti bolusai neturi prasmės (ir sukelia techninių sunkumų), nes jie iš esmės reiškia fiksuotą aukštą laikiną valandinę bazę, o tai prieštarauja normaliam uždaro ciklo veikimui - jis dinamiškai sureguliuoja bazinius dažnius. Išsamesnę informaciją galite rasti šio puslapio apačioje, skyriuje `Ištęstas bolusas <../Usage/Extended-Carbs.html#extended-bolus>`_.

Tačiau vis tiek reikia susitvarkyti su tokiais patiekalais. Štai kodėl AndroidAPS“ nuo 2.0 versijos palaiko vadinamuosius ištęstinius angliavandenius arba "iAV".

iAV yra angliavandeniai, kurie pasiskirsto per kelias valandas. Įprastam maistui, kuriame yra daugiau angliavandenių nei riebalų / baltymų, paprastai pakanka iš anksto įvesti angliavandenis (ir, jei reikia, sumažinti pradinį boliusą), kad insulinas nebūtų suleistas per anksti.  Tačiau lėčiau įsisavinamiems patiekalams, kai visų angliavandenių įvedimas reikš per daug aktyvaus insulino, iAV gali būti naudojamas kaip šios situacijos išsprendimas. iAV tiksliau imituoja, kaip angliavandeniai (arba angliavandenių ekvivalentai iš riebalų ir baltymų) yra įsisavinami organizme ir kaip įtakoja glikemijos pokyčius. Turėdamas šią informaciją, uždaras ciklas gali geriau panaudoti SMB šiems angliavandeniams valdyti, o tai gali būti vertinama kaip savotiškas dinamiškas atidėtasis boliusas (tai turėtų veikti be SMB, bet nėra toks pat efektyvus).

iAV neapsiriboja maistu, kuriame yra daug riebalų / baltymų: ši funkcija taip pat gali būti naudojama padėti kitose situacijose, kuriose yra padidėjęs cukraus kiekis kraujyje, pvz. vartojant kitus vaistus, pavyzdžiui, kortikosteroidus.

To enter eCarbs, set a duration in the *Carbs* dialog on the overview tab, the total carbs and optionally a time shift:

.. image:: ../images/eCarbs_Dialog.png
  :alt: Įveskite angliavandenius

Pagrindiniame ekrane atkreipkite dėmesį į angliavandenius skliausteliuose AAO lauke - tai rodomi angliavandeniai, likę ateičiai:

.. image:: ../images/eCarbs_Graph.png
  :alt: iAV grafike

Ateities angliavandeniai Terapijos skirtuke žymimi tamsiai oranžine spalva:

.. image:: ../images/eCarbs_Treatment.png
  :alt: ateities iAV Terapijos skirtuke


-----

Čia aprašytas konkretus riebalų ir baltymų tvarkymo šios funkcijos kontekste pavyzdys: `https://adriansloop.blogspot.co.at/2018/04/page-margin-0.html <https://adriansloop.blogspot.co.at/2018/04/page-margin-0.html>`_

-----

The recommended setup is to use the OpenAPS SMB APS plugin, with SMBs enabled as well as the *Enable SMB with COB* preference being enabled.

Pavyzdžiui, scenarijus for a Pizza might be to give a (partial) bolus up front via the *calculator* and then use the *carbs* button to enter the remaining carbs for a duration of 4-6 hours, starting after 1 or 2 hours. Žinoma, jūs turite patys išbandyti, kurios konkrečios reikšmės jums labiausiai tinka. You might also carefully adjust the setting *max minutes of basal to limit SMB to* to make the algorithm more or less aggressive.
Laikantis mitybos, kuriojee mažai angliavandenių, ir daugiau riebalų bei baltymų, gali pakakti įvesti tik iAV be įprasto boluso maistui (plačiau apie tai aukščiau tinklaraščio įraše).

Įvedus iAV, Priežiūros portale automatiškai sukuriamas užrašas, kad būtų lengviau patikrinti ir pakoreguoti įrašus.

Ištęstas bolusas
==================================================
Kaip jau minėta aukščiau, ištęstas arba vadinamasis daugiabangis bolusas neveikia su uždaru ciklu. `See below <../Usage/Extended-Carbs.html#why-extended-boluses-won-t-work-in-a-closed-loop-environment>`_ for details

Ištęstinis bolusas ir perjungimas į atvirą ciklą - tik Dana ir Insight pompoms
-----------------------------------------------------------------------------
Kai kurie žmonės vis dar prašė parinkties AAPS naudoti ištęstinius bolusus, nes jie norėjo su specialiu maistu elgtis taip, kaip įpratę. 

Štai kodėl 2.6 versijoje yra galimybė nustatyti ištęstą bolusą Danos ir Insight pompose. 

* Uždaras ciklas bus automatiškai sustabdytas ir ištęsto boluso metu pereis į atviro ciklo režimą. 
* Pradiniame ekrane bus rodomas boluso insulino kiekis, likęs laikas ir visas laikas.
* Ištęstas bolusas *negalimas* su Insight pompa, jei naudojama laikinos valandinės bazės emuliacija <../Configuration/Accu-Chek-Insight-Pump.html#settings-in-aaps>`_. 

.. image:: ../images/ExtendedBolus2_6.png
  :alt: Ištęstas bolusas AAPS 2.6

Kodėl ištęstas bolusas neveiks uždaro ciklo aplinkoje
----------------------------------------------------------------------------------------------------
1. Ciklas nustato, kad turi būti suleista 1.55 vv/h. Algoritmui nesvarbu, ar suleidžiama kaip ištęstas boliusas, ar kaip TBR (laikina valandinė bazė). Tiesą sakant, kai kurios pompos naudoja ištęstus bolusus. Kas tada atsitinka? Tada dauguma pompų tvarkyklių sustabdo ištęstinį bolusą -> jums net nereikėjo jo pradėti.
2. Jeigu įvedėte ištęstą bolusą, kas turėtų atsitikti modelyje?

   1. Ar jis turėtų būti laikomas neutraliu dydžiu kartu su nustatyta valandine baze ir ciklas turėtų remtis juo kaip pagrindu? Tada ciklas taip pat turėtų galimybę sumažinti bolusą, pvz., jei glikemija nukrenta per žemai ir visas "neutralus" insulinas įsisavintas?
   2. Ar reikia tiesiog pridėti ištęstą bolusą? Taigi turėtų būti leidžiama toliau uždaram ciklui veikti? Net blogiausios hipoglikemijos atveju? Nemanau, kad tai geras dalykas: kai yra numatoma hipoglikemija, tačiau nėra imamasi jokių priemonių jos išvengti?
   
3. Į aktyvaus insulino kiekį, kurį kaupia ištęstas bolusas, yra atsižvelgiama po 5 minučių atliekant kitą skaičiavimą. Atitinkamai ciklas sumažintų valandinę bazę. Taigi nedaug pokyčių... išskyrus galimybę išvengti hipoglikemijos.
