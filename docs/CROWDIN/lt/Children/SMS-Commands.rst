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
   * Response: To start basal 30% for 50 min reply with code Swe

Bolusas
--------------------------------------------------
Remote bolus not allowed within 15 min -value editable only if 2 phone numbers added- after last bolus command or remote commands! Therefore response depends on time last bolus was given.

* BOLUS 1.2
   * Response A: To deliver bolus 1.2U reply with code Rrt
   * Response B: Remote bolus not available. Try again later.
* BOLUS 0.60 MEAL
   * If you specify the optional parameter MEAL, this sets the Temp Target MEAL (default values are: 90 mg/dL, 5.0 mmol/l for 45 mins).
   * Response A: To deliver meal bolus 0.60U reply with code Rrt
   * Response B: Remote bolus not available. 
* CARBS 5
   * Response: To enter 5g at 12:45 reply with code EmF
* CARBS 5 17:35/5:35PM
   * Response: To enter 5g at 17:35 reply with code EmF
* EXTENDED STOP/CANCEL
   * Response: To stop extended bolus reply with code EmF
* EXTENDED 2 120
   * Response: To start extended bolus 2U for 120 min reply with code EmF

Profilis
--------------------------------------------------
* PROFILE STATUS
   * Response: Profile1
* PROFILE LIST
   * Response: 1.`Profile1` 2.`Profile2`
* PROFILE 1
   * Response: To switch profile to Profile1 100% reply with code Any
* PROFILE 2 30
   * Response: To switch profile to Profile2 30% reply with code Any

Kiti
--------------------------------------------------
* TREATMENTS REFRESH
   * Response: Refresh treatments from NS
* NSCLIENT RESTART
   * Response: NSCLIENT RESTART 1 receivers
* PUMP
   * Response: Last conn: 1 minago Temp: 0.00U/h @11:38 5/30min IOB: 0.5U Reserv: 34U Batt: 100
* SMS DISABLE/STOP
   * Response: To disable the SMS Remote Service reply with code Any. Keep in mind that you'll able to reactivate it directly from the AAPS master smartphone only.
* TARGET MEAL/ACTIVITY/HYPO   
   * Response: To set the Temp Target MEAL/ACTIVITY/HYPO reply with code Any
* TARGET STOP/CANCEL   
   * Response: To cancel Temp Target reply with code Any
* HELP
   * Response: BG, LOOP, TREATMENTS, .....
* HELP BOLUS
   * Response: BOLUS 1.2 BOLUS 1.2 MEAL

Trikčių šalinimas
==================================================
Multiple SMS
--------------------------------------------------
If you receive the same message over and over again (i.e. profile switch) you will probably have set up a circle with other apps. This could be xDrip+, for example. If so, please make sure that xDrip+ (or any other app) does not uploads treatments to NS. 

If the other app is installed on multiple phones make sure to deactive upload on all of them.

SMS komandos neveikia Samsung telefonuose
--------------------------------------------------
There was a report on SMS commands stopping after an update on Galaxy S10 phone. Could be solved by disabeling 'send as chat message'.

.. image:: ../images/SMSdisableChat.png
  :alt: Disable SMS as chat message
