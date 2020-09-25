SMS Komandos
**************************************************
Saugumas - svarbiausia
==================================================
* AndroidAPS leidžia jums kontroliuoti vaiko telefoną nuotoliniu būdu per tekstinį pranešimą. Jei įgalinate šį SMS komunikatorių, visada prisiminkite, kad telefonas, duodantis nuotolinio valdymo komandas, gali būti pavogtas. Todėl visada jį apsaugokite bent PIN kodu.
* AndroidAPS teikia grįžtamąjį ryšį Sms žinute, jei jūsų nuotolinės komandos, tokios kaip buvo atliktas boluso suleidimas ar profilio keitimas, buvo patvirtintos. Patartina tai nustatyti taip, kad patvirtinimo tekstai būtų siunčiami bent dviem skirtingais telefono numeriais, jei pavogtas vienas iš priimančių telefonų.
* **Jei bolusuojate per SMS Komandas, jūs privalote įvesti angliavandenius per Nightscout (NSClient, Interneto svetainėje...)!** Jei to nepadarysite AIO bus teisingas su per mažai AAO, kas potencialiai lems, kad korekcinis bolusas nebus leidžiamas, nes AAPS preziumuos, kad yra per daug aktyvaus insulino.

Kaip tai veikia
==================================================
* Dauguma tokių nustatymų kaip laikinas tikslas, AAPS veiksmų sekimas ir t. t. gali būti atliekama per NSClient programėlę <../Children/Children.html>`_ Android telefone su interneto ryšiu.
* Bolusai negali būti suleisti per Nightscout, bet jūs galite naudoti SMS komandas.
* Jei jūs naudojate iPhone kaip sekėjas ir todėl negalite naudoti NSClient, tam yra papildomos SMS komandos.

* Savo Android telefono nustatymuose eikite į Programos > AndroidAPS > Leidimai ir įjunkite SMS
* AndroidAPS eikite į Nustatymus > SMS Komunikatorius ir įveskite telefono numerį(-ius), iš kurio jūs leidžiate SMS komandas (atskirtas kabliataškiu - pvz. +37012345678;+37012345679) ir taip pat įjunkite "Leisti nuotolines SMS komandas".
* Jei norite naudoti daugiau nei vieną numerį:

  * Įveskite tik vieną numerį.
  * Įsitikinkite to vieno numerio veikimu nusiunčiant ir patvirtinant SMS komandą.
  * Įveskite papildomą numerį(-ius) atskiriant juos kabliataškiu be tarpo.
  
    .. image:: ../images/SMSCommandsSetupSpace.png
      :alt: SMS Komandų Nustatymas


* Siųskite SMS žinutę iš vieno patvirtinto telefono numerio į mobilųjį telefoną, kuriame veikia AndroidAPS. Galite naudoti bet kurią iš komandų, išvardytų žemiau, tačiau tik **DIDŽIOSIOMIS RAIDĖMIS**. AndroidAPS mobilusis telefonas patvirtina sėkmingą komandos vykdymą arba grąžina prašomą būseną. Jei reikia, patvirtinkite komandą išsiųsdami atgal kodą, kurį AndroidAPS išmanusis telefonas siunčia SMS žinute.

**Patarimas**: jei reikia siųsti didelį kiekį SMS, naudinga abiejuose mobiliuosiuose telefonuose turėti mažo tarifo planą SMS.

Komandos
==================================================

Siunčiant komandas, didžiosios ir mažosios raidės nėra svarbios.

Komandos turi būti išsiųstos anglų kalba, atsakymą gausite savo vietine kalba, jei eilutė jau yra išversta <../translations.html#translate-strings-for-androidaps-app>`_.

.. nuotrauka:: ../images/SMSCommands.png
  :alt: SMS komandų pavyzdys

Ciklas
--------------------------------------------------
* LOOP STOP/DISABLE
   * Atsakymas: Ciklas išjungtas
* LOOP START/ENABLE
   * Atsakymas: Ciklas įjungtas
* LOOP-STATUS
   * Atsakymas priklauso nuo esamos būsenos
      * Ciklas išjungtas
      * Ciklas įjungtas
      * Sustabdyta (10 m)
* LOOP SUSPEND 20
   * Atsakymas: Ciklas sustabdytas 20 minučių
* LOOP RESUME
   * Atsakymas: Ciklas atnaujintas

NGJ duomenys
--------------------------------------------------
* BG
   * Atsakymas: Paskutinis KG: 5.6 prieš 4 min, Delta: -0,2 mmol, AIO: 0.20U (Boluso: 0.10U Bazės: 0.10U)
* CAL 5.6
   * Atsakymas: Norėdami išsiųsti 5.6 kalibravimui, atsakykite kodu Rrt
   * Atsakymas po to, kai AAPS gauna teisingą kodą: kalibravimas išsiųstas (**jei įdiegta xDrip+. xDrip+ turi būti aktyvi funkcija „Priimti kalibravimą"**)

Valandinė bazė
--------------------------------------------------
* BASAL STOP/CANCEL
   * Atsakymas: Norėdami sustabdyti laikiną bazę atsakyti kodu EmF [Pastaba: Kodas EmF yra tik pavyzdys]
* BASAL 0.3
   * Atsakymas: Norėdami aktyvuoti 0.3 vv/val bazę, kurios trukmė 30 min, atsakykite kodu Swe
* BASAL 0.3 20
   * Atsakymas: Norėdami aktyvuoti 0.3 vv/val bazę, kurios trukmė 20 min, atsakykite kodu Swe
* BASAL 30%
   * Atsakymas: Norėdami aktyvuoti 30% laikiną bazę, kurios trukmė 30 min, atsakykite kodu Swe
* BASAL 30% 50
   * Atsakymas: Norėdami aktyvuoti 30% laikiną bazę, kurios trukmė 50 min, atsakykite kodu Swe

Bolusas
--------------------------------------------------
Per 15 minučių po paskutinio AAPS boluso arba po paskutinės SMS komandos, boluso SMS žinute siųsti neįmanoma. Reikšmę galite pakoreguoti tik įvedę bent du telefonų numerius! Taigi atsakymas priklauso nuo to, kada buvo suleistas paskutinis bolusas.

* BOLUS 1.2
   * Atsakymas A: Norėdami suleisti 1.2 vv bolusą, atsakykite kodu Rrt
   * Atsakymas B: Nuotolinis bolusas negalimas. Bandykite dar kartą vėliau.
* BOLUS 0.60 MEAL
   * Valgymo laikinas tikslas nustatomas pasirenkamu parametru MEAL (standartinės vertės yra 90 mg/dL, 5,0 mmol/L 45 minutės).
   * Atsakymas A: Norėdami suleisti 0.60vv bolusą maistui, atsakykite kodu Rrt
   * Atsakymas B: Nuotolinis bolusas negalimas. 
* CARBS 5
   * Atsakymas: Norėdami įvesti 5 g 12:45 atsakyti kodas EmF
* CARBS 5 17:35/5:35PM
   * Atsakymas: Norėdami įvesti 5 g 17:35 atsakyti kodas EmF
* EXTENDED STOP/CANCEL
   * Atsakymas: Norėdami sustabdyti ištęstinį bolusą, atsakykite kodu EmF
* EXTENDED 2 120
   * Atsakymas: Norint pradėti ištęstinį bolusą 2 vv 120 min., atsakykite kodu EmF

Profilis
--------------------------------------------------
* PROFILE STATUS
   * Atsakymas: Profilis1
* PROFILE LIST
   * Atsakymas: 1.`Profilis1` 2.`Profilis2`
* PROFILE 1
   * Atsakymas: Norėdami perjungti Profilį 1 100% atsakyti kodu Any
* PROFILE 2 30
   * Atsakymas: Norėdami perjungti Profilį 2 30% atsakyti kodu Any

Kiti
--------------------------------------------------
* TREATMENTS REFRESH
   * Atsakymas: Atnaujinti terapiją iš NS
* NSCLIENT RESTART
   * Atsakymas: NSCLIENT RESTART 1 gavėjas
* PUMP
   * Atsakymas: Paskutinis ryšys: prieš 1 min LT: 0.00U/h @11:38 5/30min AIO: 0.5 U Reservuaras: 34U Baterija: 100
* SMS DISABLE/STOP
   * Atsakymas: Norėdami išjungti SMS Nuotolinį valdymą atsakykite kodu Any. Atminkite, kad nuotolinį valdymą galite suaktyvinti tik AAPS pagrindiniame išmaniajame telefone.
* TARGET MEAL/ACTIVITY/HYPO   
   * Atsakymas: Norėdami nustatyti laikiną tikslą MEAL/ACTIVITY/HYPO atsakykite kodu Any
* TARGET STOP/CANCEL   
   * Atsakymas: Norėdami atšaukti laikiną tikslą, atsakykite su kodu Any
* HELP
   * Atsakymas: BG, LOOP, TREATMENTS, .....
* HELP BOLUS
   * Atsakymas: BOLUS 1.2 BOLUS 1.2 MEAL

Trikčių šalinimas
==================================================
Kelios SMS
--------------------------------------------------
Jei gaunate tą pačią žinutę, vėl ir vėl iš naujo (t. y. profilio pakeitimas) tikriausiai nustatėte nesibaigiantį ciklą su kita programa. Pavyzdžiui, tai galėtų būti xDrip+. Tokiu atveju įsitikinkite, kad xDrip+ (arba kita programa, prijungta prie Nightscout) neįkelia jokių terapijos duomenų. 

Jei kita programa įdiegta keliuose telefonuose, turite išjungti visų jų terapijų įkėlimą.

SMS komandos neveikia Samsung telefonuose
--------------------------------------------------
Buvo pranešimų, kad po atnaujinimo Galaxy S10 SMS komandos nustojo veikti. Tai galima išspręsti išjungiant parinktį "Siųsti kaip pokalbio pranešimą“.

.. image:: ../images/SMSdisableChat.png
  :alt: Išjungti SMS kaip pokalbio pranešimą
