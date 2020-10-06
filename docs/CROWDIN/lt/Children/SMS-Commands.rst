SMS Komandos
**************************************************
Saugumas - svarbiausia
==================================================
* AndroidAPS leidžia jums kontroliuoti vaiko telefoną nuotoliniu būdu per tekstinį pranešimą. Jei įgalinate šį SMS komunikatorių, visada prisiminkite, kad telefonas, duodantis nuotolinio valdymo komandas, gali būti pavogtas. Todėl visada jį apsaugokite bent PIN kodu. A strong password or biometrics are recommended.
* Be to, rekomenduojama leisti `dar vienam telefono numeriui <#authorized-phone-numbers>`_ siųsti SMS komandas. Taigi, jei bus pamestas ar pavogtas pagrindinį nuotolinis telefonas, antruoju numeriu galite `laikinai išjungti <#other>`_ SMS komunikatorių.
* AndroidAPS teikia grįžtamąjį ryšį Sms žinute, jei jūsų nuotolinės komandos, tokios kaip buvo atliktas boluso suleidimas ar profilio keitimas, buvo patvirtintos. Patartina tai nustatyti taip, kad patvirtinimo tekstai būtų siunčiami bent dviem skirtingais telefono numeriais, jei pavogtas vienas iš priimančių telefonų.
* **Jei bolusuojate per SMS Komandas, jūs privalote įvesti angliavandenius per Nightscout (NSClient, Interneto svetainėje...)!** Jei to nepadarysite AIO bus teisingas su per mažai AAO, kas potencialiai lems, kad korekcinis bolusas nebus leidžiamas, nes AAPS preziumuos, kad yra per daug aktyvaus insulino.
* Su AndroidAPS versija 2.7, siekiant padidinti saugumą naudojant SMS komandas, turi būti naudojama autentifikavimo programa su laike apribotu vienkartiniu slaptažodžiu.

SMS komandų nustatymas
==================================================

.. image:: ../images/SMSCommandsSetup.png
  :alt: SMS Komandų Nustatymas
      
* Dauguma tokių nustatymų kaip laikinas tikslas, AAPS veiksmų sekimas ir t. t. gali būti atliekama per `NSClient programėlę <../Children/Children.html>`_ Android telefone su interneto ryšiu.
* Bolusai negali būti suleisti per Nightscout, bet jūs galite naudoti SMS komandas.
* Jei jūs naudojate iPhone kaip sekėjas ir todėl negalite naudoti NSClient programėlės, tam yra papildomos SMS komandos.

* Savo Android telefono nustatymuose eikite į Programos > AndroidAPS > Leidimai ir įjunkite SMS

Autorizuoti telefono numeriai
--------------------------------------------------
* AndroidAPS eikite į **Nustatymus > SMS Komunikatorius** ir įveskite telefono numerį(-ius), iš kurio(-ių) jūs leidžiate SMS komandas (atskirtas kabliataškiu - pvz. +6412345678;+6412345679) 
* Įgalinkite "Leisti nuotolines komandas SMS žinutėmis".
* Jei norite naudoti daugiau nei vieną numerį:

  * Įveskite tik vieną numerį.
  * Įsitikinkite to vieno numerio veikimu nusiunčiant ir patvirtinant SMS komandą.
  * Įveskite papildomą numerį(-ius) atskiriant juos kabliataškiu be tarpo.
  
    .. image:: ../images/SMSCommandsSetupSpace2.png
      :alt: SMS komandos konfigūravimas. Keli numeriai

Minutės tarp boluso komandų
--------------------------------------------------
* Jūs galite nustatyti minimalų laiko tarpą tarp bolusų, suleistų SMS komandomis.
* Dėl saugumo priežasčių turite pridėti bent du autorizuotus telefono numerius šiai reikšmei redaguoti.

Papildomas privalomas PIN kodas žymeklio gale
--------------------------------------------------
* Saugumo sumetimais po atsakymo kodo turi būti nurodytas PIN kodas.
* PIN taisyklės:

   * nuo 3 iki 6 skaitmenų
   * ne tokie pat skaitmenys (t. y. 1111)
   * ne iš eilės (t. y. 1234)

Autentifikavimo sąrankos nustatymas
--------------------------------------------------
* Dviejų veiksnių autentifikavimas naudojamas saugumui pagerinti.
* Galite naudoti bet kurią Authenticator programą, palaikančią RFC 6238 TOTP žymeklius. Populiarios nemokamos programos yra:

   * `Authy <https://authy.com/download/>`_
   * Google Authenticator - `Android <https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2>`_ / `iOS <https://apps.apple.com/de/app/google-authenticator/id388497605>`_
   * `LastPass Authenticator <https://lastpass.com/auth/>`_
   * `FreeOTP Authenticator <https://freeotp.github.io/>`_

* Įdiekite pasirinktą autentifikavimo programą savo sekėjo telefone ir nuskaitykite AAPS rodomą QR kodą.
* Išbandykite vienkartinį slaptažodį, įvesdami autentifikavimo programoje rodomą prieigos raktą ir PIN, kurį ką tik nustatėte AAPS. Pavyzdys:

   * Jūsų privalomas PIN yra 2020
   * TOTP žymeklis iš autentifikatoriaus programėlės yra 457051
   * Įveskite 4570512020
   
* Raudonas tekstas „NETEISINGAS PIN“ pasikeis **automatiškai** į žalią „Gerai“, jei įvestis teisinga. **Nėra mygtuko, kurį galėtumėte paspausti! **
* Laikas abiejuose telefonuose turi būti sinchronizuotas. Geriausia praktika - naudoti automatinį tinklo pateiktą laiką. Net ir nežymūs laiko skirtumai gali sukelti autentiškumo nustatymo problemų.
* Naudokite mygtuką "RESET AUTHENTICATORS" (Iš naujo nustatyti autentifikatorius), jei norite pašalinti nuostatas.

SMS komandų naudojimas
==================================================
Siųskite SMS žinutę iš jūsų patvirtinto(-ų) telefono numerio(-ių) į pagrindinį AndroidAPS telefoną, naudodami bet kurią iš toliau nurodytų `komandų <../Children/SMS-Commands.html#commands>`_. 
* AAPS telefonas reaguos patvirtindamas komandos ar būsenos prašymą. 
* Patvirtinkite komandą, jei reikia, nusiųsdami kodą. Pavyzdys:

   * Jūsų privalomas PIN yra 2020
   * TOTP žymeklis iš autentifikatoriaus programėlės yra 457051
   * Įveskite 4570512020

**Patarimas**: jei reikia siųsti didelį kiekį SMS, naudinga abiejuose mobiliuosiuose telefonuose turėti mažo tarifo planą SMS.

Komandos
==================================================
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
   * Atsakymas: Norėdami išsiųsti kalibraciją 5.6, atsakykite su kodu iš Authenticator programos, po atsakymo kodo turi būti nurodytas PIN kodas
   * Atsakymas po to, kai AAPS gauna teisingą kodą: kalibravimas išsiųstas (**jei įdiegta xDrip+. xDrip+ turi būti aktyvi funkcija „Priimti kalibravimą"**)

Valandinė bazė
--------------------------------------------------
* BASAL STOP/CANCEL
   * Atsakymas: Norėdami sustabdyti laikiną bazę, atsakykite su kodu iš Authenticator programos, po atsakymo kodo turi būti nurodytas PIN kodas
* BASAL 0.3
   * Atsakymas: Norėdami nustatyti 0,3vv/h bazę 30 min, atsakykite su kodu iš Authenticator programos, po atsakymo kodo turi būti nurodytas PIN kodas
* BASAL 0.3 20
   * Atsakymas: Norėdami nustatyti 0,3vv/h bazę 20 min, atsakykite su kodu iš Authenticator programos, po atsakymo kodo turi būti nurodytas PIN kodas
* BASAL 30%
   * Atsakymas: Norėdami nustatyti 30% bazę 30 min, atsakykite su kodu iš Authenticator programos, po atsakymo kodo turi būti nurodytas PIN kodas
* BASAL 30% 50
   * Atsakymas: Norėdami nustatyti 30% bazę 50 min, atsakykite su kodu iš Authenticator programos, po atsakymo kodo turi būti nurodytas PIN kodas

Bolusas
--------------------------------------------------
Per 15 minučių po paskutinio AAPS boluso arba po paskutinės SMS komandos, boluso SMS žinute siųsti neįmanoma. Reikšmę galite pakoreguoti tik įvedę bent du telefonų numerius! Taigi atsakymas priklauso nuo to, kada buvo suleistas paskutinis bolusas.

* BOLUS 1.2
   * Atsakymas: Norėdami suleisti 1,2vv bolusą, atsakykite su kodu iš Authenticator programos, po atsakymo kodo turi būti nurodytas PIN kodas
   * Atsakymas B: Nuotolinis bolusas negalimas. Bandykite dar kartą vėliau.
* BOLUS 0.60 MEAL
   * Valgymo laikinas tikslas nustatomas pasirenkamu parametru MEAL (standartinės vertės yra 90 mg/dL, 5,0 mmol/L 45 minutės).
   * Atsakymas: Norėdami suleisti 0,6vv maisto bolusą, atsakykite su kodu iš Authenticator programos, po atsakymo kodo turi būti nurodytas PIN kodas
   * Atsakymas B: Nuotolinis bolusas negalimas. 
* CARBS 5
   * Atsakymas: Norėdami įvesti 5 g 12:45, atsakykite su kodu iš Authenticator programos, po atsakymo kodo turi būti nurodytas PIN kodas
* CARBS 5 17:35/5:35PM
   * Atsakymas: Norėdami įvesti 5 g 17:35, atsakykite su kodu iš Authenticator programos, po atsakymo kodo turi būti nurodytas PIN kodas
* EXTENDED STOP/CANCEL
   * Atsakymas: Norėdami sustabdyti ištęstą bolusą, atsakykite su kodu iš Authenticator programos, po atsakymo kodo turi būti nurodytas PIN kodas
* EXTENDED 2 120
   * Atsakymas: Norėdami nustatyti 2vv ištęstą bolusą 120 min, atsakykite su kodu iš Authenticator programos, po atsakymo kodo turi būti nurodytas PIN kodas

Profilis
--------------------------------------------------
* PROFILE STATUS
   * Atsakymas: Profilis1
* PROFILE LIST
   * Atsakymas: 1.`Profilis1` 2.`Profilis2`
* PROFILE 1
   * Atsakymas: Norėdami nustatyti profilį į Profilis1 100%, atsakykite su kodu iš Authenticator programos, po atsakymo kodo turi būti nurodytas PIN kodas
* PROFILE 2 30
   * Atsakymas: Norėdami nustatyti profilį į Profilis2 30%, atsakykite su kodu iš Authenticator programos, po atsakymo kodo turi būti nurodytas PIN kodas

Kiti
--------------------------------------------------
* TREATMENTS REFRESH
   * Atsakymas: Atnaujinti terapiją iš NS
* NSCLIENT RESTART
   * Atsakymas: NSCLIENT RESTART 1 gavėjas
* PUMP
   * Atsakymas: Paskutinis ryšys: prieš 1 min LB: 0.00U/h @11:38 5/30min AIO: 0.5 U Rezervuaras: 34U Baterija: 100
* PUMP CONNECT
   * Atsakas: Pompa prijungta
* PUMP DISCONNECT *30*
   * Atsakymas: Norėdami atjungti pompą *30* min, atsakykite su kodu iš Authenticator programos, po atsakymo kodo turi būti nurodytas PIN kodas
* SMS DISABLE/STOP
   * Atsakas: Norėdami išjungti SMS nuotolinį valdymą, atsakykite su kodu Any. Atminkite, kad nuotolinį valdymą galite suaktyvinti tik AAPS pagrindiniame išmaniajame telefone.
* TARGET MEAL/ACTIVITY/HYPO   
   * Atsakymas: Norėdami nustatyti laikiną tikslą MEAL/ACTIVITY/HYPO, atsakykite su kodu iš Authenticator programos, po atsakymo kodo turi būti nurodytas PIN kodas
*  TARGET STOP/CANCEL   
   * Atsakymas: Norėdami atšaukti Laikiną Tikslą, atsakykite su kodu iš Authenticator programos, po atsakymo kodo turi būti nurodytas PIN kodas
* HELP
   * Atsakymas: BG, LOOP, TREATMENTS, .....
* HELP BOLUS
   * Atsakymas: BOLUS 1.2 BOLUS 1.2 MEAL

Trikčių šalinimas
==================================================
Kelios SMS
--------------------------------------------------
Jei gaunate tą pačią žinutę, vėl ir vėl iš naujo (t. y. profilio pakeitimas) tikriausiai nustatėte nesibaigiantį ciklą su kita programa. Pavyzdžiui, tai galėtų būti xDrip+. Tokiu atveju įsitikinkite, kad xDrip+ (arba kita programa, prijungta prie Nightscout) neįkelia jokių terapijos duomenų. 

Jei kita programa yra įdiegta keliuose telefonuose, būtinai išjunkite įkėlimą į juos visus.

SMS komandos neveikia Samsung telefonuose
--------------------------------------------------
Buvo pranešimų, kad po atnaujinimo Galaxy S10 SMS komandos nustojo veikti. Tai galima išspręsti išjungiant parinktį "Siųsti kaip pokalbio pranešimą“.

.. image:: ../images/SMSdisableChat.png
  :alt: Išjungti SMS kaip pokalbio pranešimą
