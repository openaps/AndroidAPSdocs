SMS Komandos
**************************************************
Saugumas - svarbiausia
==================================================
* AndroidAPS leidžia jums kontroliuoti vaiko telefoną nuotoliniu būdu per tekstinį pranešimą. Jei įgalinate šį SMS komunikatorių, visada prisiminkite, kad telefonas, duodantis nuotolinio valdymo komandas, gali būti pavogtas. Todėl visada jį apsaugokite bent PIN kodu.
* AndroidAPS teikia grįžtamąjį ryšį Sms žinute, jei jūsų nuotolinės komandos, tokios kaip buvo atliktas boluso suleidimas ar profilio keitimas, buvo patvirtintos. Patartina tai nustatyti taip, kad patvirtinimo tekstai būtų siunčiami bent dviem skirtingais telefono numeriais, jei pavogtas vienas iš priimančių telefonų.
* **Jei bolusuojate per SMS Komandas, jūs privalote įvesti angliavandenius per Nightscout (NSClient, Interneto svetainėje...)!** Jei to nepadarysite AIO bus teisingas su per mažai AAO, kas potencialiai lems, kad korekcinis bolusas nebus leidžiamas, nes AAPS preziumuos, kad yra per daug aktyvaus insulino.
* As of AndroidAPS version 2.7 an authenticator app with a time-based one-time password must be used to increase safety when using SMS commands.

Setup SMS commands
==================================================

.. image:: ../images/SMSCommandsSetup.png
  :alt: SMS Komandų Nustatymas
      
* Dauguma tokių nustatymų kaip laikinas tikslas, AAPS veiksmų sekimas ir t. t. can be done on `NSClient app <../Children/Children.html>`_ on an Android phone with an internet connection.
* Bolusai negali būti suleisti per Nightscout, bet jūs galite naudoti SMS komandas.
* If you use an iPhone as a follower and therefore cannot use NSClient app, there are additional SMS commands available.

* Savo Android telefono nustatymuose eikite į Programos > AndroidAPS > Leidimai ir įjunkite SMS

Authorized phone numbers
-------------------------------------------------
* In AndroidAPS go to **Preferences > SMS Communicator** and enter the phone number(s) that you will allow SMS commands to come from (separated by semicolons - i.e. +4412345678;+4412345679) 
* Enable 'Allow remote commands via SMS'.
* Jei norite naudoti daugiau nei vieną numerį:

  * Įveskite tik vieną numerį.
  * Įsitikinkite to vieno numerio veikimu nusiunčiant ir patvirtinant SMS komandą.
  * Įveskite papildomą numerį(-ius) atskiriant juos kabliataškiu be tarpo.
  
    .. image:: ../images/SMSCommandsSetupSpace.png
      :alt: SMS Commands Setup multiple numbers

Minutes between bolus commands
-------------------------------------------------
* You can define the minimum delay between to boluses issued via SMS.
* For safety reasons you have to add at least two authorized phone numbers to edit this value.

Additionally mandatory PIN at token end
-------------------------------------------------
* For safety reasons the reply code must be followed by a PIN.
* PIN rules:

   * 3 to 6 digits
   * not same digits (i.e. 1111)
   * not in a row (i.e. 1234)

Authenticator setup
-------------------------------------------------
* Two-factor authentication is used to improve safety.
* You can use any Authenticator app that supports RFC 6238 TOTP tokens. Popular free apps are:

   * `Authy <https://authy.com/download/>`_
   * Google Authenticator - `Android <https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2>`_ / `iOS <https://apps.apple.com/de/app/google-authenticator/id388497605>`_
   * `LastPass Authenticator <https://lastpass.com/auth/>`_
   * `FreeOTP Authenticator <https://freeotp.github.io/>`_

* Install the authenticator app of your choice on your follower phone and scan the QR code shown in AAPS.
* Test the one-time password by entering the token shown in your authenticator app and the PIN you just setup in AAPS. Pavyzdys:

   * Your mandatory PIN is 2020
   * TOTP token from the authenticator app is 457051
   * Enter 4570512020
   
* Red text "WRONG PIN" will change **automatically** to green "OK" if entry is correct. **There is no button you can press!**
* Use button "RESET AUTHENTICATORS" if you want to remove provisions.

Use SMS commands
==================================================
* Send a SMS to the phone with AndroidAPS running from your approved phone number(s) using any of the `commands </Children/SMS-Commands.html#commands>`_ below in **CAPITAL LETTERS**. 
* The AAPS phone will respond to confirm success of command or status requested. 
* Confirm command by sending the code where necessary. Pavyzdys:

   * Your mandatory PIN is 2020
   * TOTP token from the authenticator app is 457051
   * Enter 4570512020

**Patarimas**: jei reikia siųsti didelį kiekį SMS, naudinga abiejuose mobiliuosiuose telefonuose turėti mažo tarifo planą SMS.

Komandos
==================================================
Commands must be send in English and in **CAPITAL LETTERS**, response will be in your local language if the response string is already `translated <../translations.html#translate-strings-for-androidaps-app>`_.

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
   * Response: To send calibration 5.6 reply with code from Authenticator app for User followed by PIN
   * Atsakymas po to, kai AAPS gauna teisingą kodą: kalibravimas išsiųstas (**jei įdiegta xDrip+. xDrip+ turi būti aktyvi funkcija „Priimti kalibravimą"**)

Valandinė bazė
--------------------------------------------------
* BASAL STOP/CANCEL
   * Response: To stop temp basal reply with code from Authenticator app for User followed by PIN
* BASAL 0.3
   * Response: To start basal 0.3U/h for 30 min reply with code from Authenticator app for User followed by PIN
* BASAL 0.3 20
   * Response: To start basal 0.3U/h for 20 min reply with code from Authenticator app for User followed by PIN
* BASAL 30%
   * Response: To start basal 30% for 30 min reply with code from Authenticator app for User followed by PIN
* BASAL 30% 50
   * Response: To start basal 30% for 50 min reply with code from Authenticator app for User followed by PIN

Bolusas
--------------------------------------------------
Per 15 minučių po paskutinio AAPS boluso arba po paskutinės SMS komandos, boluso SMS žinute siųsti neįmanoma. Reikšmę galite pakoreguoti tik įvedę bent du telefonų numerius! Taigi atsakymas priklauso nuo to, kada buvo suleistas paskutinis bolusas.

* BOLUS 1.2
   * Response A: To deliver bolus 1.2U reply with code from Authenticator app for User followed by PIN
   * Atsakymas B: Nuotolinis bolusas negalimas. Bandykite dar kartą vėliau.
* BOLUS 0.60 MEAL
   * Valgymo laikinas tikslas nustatomas pasirenkamu parametru MEAL (standartinės vertės yra 90 mg/dL, 5,0 mmol/L 45 minutės).
   * Response A: To deliver meal bolus 0.60U reply with code from Authenticator app for User followed by PIN
   * Atsakymas B: Nuotolinis bolusas negalimas. 
* CARBS 5
   * Response: To enter 5g at 12:45 reply with code from Authenticator app for User followed by PIN
* CARBS 5 17:35/5:35PM
   * Response: To enter 5g at 17:35 reply with code from Authenticator app for User followed by PIN
* EXTENDED STOP/CANCEL
   * Response: To stop extended bolus reply with code from Authenticator app for User followed by PIN
* EXTENDED 2 120
   * Response: To start extended bolus 2U for 120 min reply with code from Authenticator app for User followed by PIN

Profilis
--------------------------------------------------
* PROFILE STATUS
   * Atsakymas: Profilis1
* PROFILE LIST
   * Atsakymas: 1.`Profilis1` 2.`Profilis2`
* PROFILE 1
   * Response: To switch profile to Profile1 100% reply with code from Authenticator app for User followed by PIN
* PROFILE 2 30
   * Response: To switch profile to Profile2 30% reply with code from Authenticator app for User followed by PIN

Kiti
--------------------------------------------------
* TREATMENTS REFRESH
   * Atsakymas: Atnaujinti terapiją iš NS
* NSCLIENT RESTART
   * Atsakymas: NSCLIENT RESTART 1 gavėjas
* PUMP
   * Response: Last conn: 1 min ago Temp: 0.00U/h @11:38 5/30min IOB: 0.5U Reserv: 34U Batt: 100
* PUMP CONNECT
   * Response: Pump reconnected
* PUMP DISCONNECT *30*
   * Response: To disconnect pump for *30* minutes reply with code from Authenticator app for User followed by PIN
* SMS DISABLE/STOP
   * Atsakymas: Norėdami išjungti SMS Nuotolinį valdymą atsakykite kodu Any. Atminkite, kad nuotolinį valdymą galite suaktyvinti tik AAPS pagrindiniame išmaniajame telefone.
* TARGET MEAL/ACTIVITY/HYPO   
   * Response: To set the Temp Target MEAL/ACTIVITY/HYPO reply with code from Authenticator app for User followed by PIN
* TARGET STOP/CANCEL   
   * Response: To cancel Temp Target reply with code from Authenticator app for User followed by PIN
* HELP
   * Atsakymas: BG, LOOP, TREATMENTS, .....
* HELP BOLUS
   * Atsakymas: BOLUS 1.2 BOLUS 1.2 MEAL

Trikčių šalinimas
==================================================
Kelios SMS
--------------------------------------------------
Jei gaunate tą pačią žinutę, vėl ir vėl iš naujo (t. y. profilio pakeitimas) tikriausiai nustatėte nesibaigiantį ciklą su kita programa. Pavyzdžiui, tai galėtų būti xDrip+. Tokiu atveju įsitikinkite, kad xDrip+ (arba kita programa, prijungta prie Nightscout) neįkelia jokių terapijos duomenų. 

If the other app is installed on multiple phones make sure to deactivate upload on all of them.

SMS komandos neveikia Samsung telefonuose
--------------------------------------------------
Buvo pranešimų, kad po atnaujinimo Galaxy S10 SMS komandos nustojo veikti. Tai galima išspręsti išjungiant parinktį "Siųsti kaip pokalbio pranešimą“.

.. image:: ../images/SMSdisableChat.png
  :alt: Išjungti SMS kaip pokalbio pranešimą
