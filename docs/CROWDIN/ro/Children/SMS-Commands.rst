Comenzi prin SMS
**************************************************
Siguranța pe primul loc
==================================================
* AndroidAPS allows you to control a child's phone remotely via text message. If you enable this SMS Communicator, always remember that the phone set up to give remote commands could be stolen. So always protect it at least by a PIN code. Se recomandă o parolă puternică sau bazata pe date biometrice.
* În plus, este recomandat să se permită un număr de telefon "al doilea număr <#telefoane-autorizate>" _ pentru comenzile SMS. Astfel, puteți utiliza al doilea număr pentru "a dezactiva temporar <#other>" _ comunicarea SMS în cazul în care telefonul principal de control la distanță este pierdut sau furat.
* AndroidAPS will also inform you by text message if your remote commands, such as a bolus or a profile change, have been carried out. It is advisable to set this up so that confirmation texts are sent to at least two different phone numbers in case one of the receiving phones is stolen.
* **Dacă bolusați prin comenzi SMS, trebuie să introduceți carbohidrați prin Nightscout (NSClient, Website...)!** Dacă nu reuşiţi să faceţi acest lucru, IOB va fi corectat cu un nivel prea scăzut de COB, ceea ce ar putea duce la neefectuarea corecţiei bolus, deoarece AAPS presupune că aveţi prea multă insulină activă.
* Începând cu AndroidAPS versiunea 2.7 o aplicație autentificator cu o parolă unică bazata pe timp trebuie obligatoriu folosită pentru a crește siguranța la folosirea comenzilor SMS.

Setare comenzi SMS
==================================================

.. image:: ../images/SMSCommandsSetup.png
  :alt: Setare comenzi SMS
      
* Cea mai mare parte a ajustărilor obiectivelor temporare, în conformitate cu AAPS etc. poate fi făcută in `NSClient app <../Children/Children.html>`_ pe un telefon Android cu conexiune la internet.
* Bolusurile nu pot fi comandate prin Nightscout, dar puteți folosi comenzi prin SMS.
* Dacă folosiți un iPhone ca urmăritor și, prin urmare, nu puteți utiliza aplicația NSClient, există comenzi SMS suplimentare.

* În setarea de telefon android mergeți la Aplicații > AndroidAPS > Permisiuni și activați SMS

Numere de telefon autorizate
--------------------------------------------------
* In AndroidAPS go to **Preferences > SMS Communicator** and enter the phone number(s) that you will allow SMS commands to come from (separated by semicolons - i.e. + 6412345678; + 6412345679) 
* Enable 'Allow remote commands via SMS'.
* Dacă doriţi să utilizaţi mai mult de un număr:

  * Introduceţi doar un număr.
  * Make that single number work by sending and confirming a SMS command.
  * Enter additional number(s) separated by semicolon, no space.
  
    .. image:: ../images/SMSCommandsSetupSpace2.png
      :alt: SMS Commands Setup multiple numbers

Minute între comenzile de bolus
--------------------------------------------------
* You can define the minimum delay between two boluses issued via SMS.
* For safety reasons you have to add at least two authorized phone numbers to edit this value.

Additionally mandatory PIN at token end
--------------------------------------------------
* For safety reasons the reply code must be followed by a PIN.
* Reguli PIN:

  * 3-6 cifre
  * nu aceleași cifre (ex: 1111)
  * nu consecutive (adică 1234)

Setare Authenticator
--------------------------------------------------
* Autentificarea cu doi factori este folosită pentru a îmbunătăți siguranța.
* Puteți folosi orice aplicație Authenticator care suportă tokens RFC 6238 TOTP. Aplicaţiile gratuite populare sunt:

  * ` Authy <https://authy.com/download/>` _
  * Google Authenticator-` Android <https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2>` _/` iOS <https://apps.apple.com/de/app/google-authenticator/id388497605>` _
  * `LastPass Autentificator <https://lastpass.com/auth/>`_
  * " FreeOTP Authenticator <https://freeotp.github.io/>` _

* Instalați aplicația de autentificare la alegere pe telefonul urmăritor şi scanați codul QR afișat în AAPS.
* Testați parola unică prin introducerea token-ului (numărului) afișat în aplicația de autentificare și a PIN-ul pe care îl setați în AAPS. Example:

  * PIN-ul obligatoriu este 2020
  * token TOTP de la aplicaţia autentificator este 457051
  * Introduceți 4570512020
   
* The red text "WRONG PIN" will change **automatically** to a green "OK" if the entry is correct. **There is no button you can press!**
* The time on both phones must be synchronized. Best practice is set automatically from network. Time differences might lead to authentication problems.
* Use button "RESET AUTHENTICATORS" if you want to remove provisioned authenticators.  (By resetting authenticator you make ALL already provisioned authenticators invalid. You will need to set them up again)

Use SMS commands
==================================================
* Send a SMS to the phone with AndroidAPS running from your approved phone number(s) using any of the `commands <../Children/SMS-Commands.html#commands>`__ below. 
* The AAPS phone will respond to confirm success of command or status requested. 
* Confirm command by sending the code where necessary. Example:

  * PIN-ul obligatoriu este 2020
  * token TOTP de la aplicaţia autentificator este 457051
  * Introduceți 4570512020

**Hint**: It can be useful to have unlimited SMS on your phone plan (for each phone used) if a lot of SMS will be sent.

Commands
==================================================
Commands must be sent in English, the response will be in your local language if the response string is already `translated <../translations.html#translate-strings-for-androidaps-app>`_.

.. image:: ../images/SMSCommands.png
  :alt: SMS Commands Example

Buclă
--------------------------------------------------
* LOOP STOP/DISABLE
  * Response: Loop has been disabled
* LOOP START/ENABLE
  * Response: Loop has been enabled
* LOOP STATUS

  * Response depends on actual status

    * Bucla este dezactivată
    * Bucla este activată
    * Suspended (10 min)
* LOOP SUSPEND 20
  * Response: Loop suspended for 20 minutes
* LOOP RESUME
  * Response: Loop resumed

CGM data
--------------------------------------------------
* Glicemie
  * Response: Last BG: 5.6 4min ago, Delta: -0,2 mmol, IOB: 0.20U (Bolus: 0.10U Basal: 0.10U)
* CAL 5.6
  * Response: To send calibration 5.6 reply with code from Authenticator app for User followed by PIN
  * Response after correct code was received: Calibration sent (**If xDrip is installed. Accepting calibrations must be enabled in xDrip+**)

Bazală
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

Bolus
--------------------------------------------------
Remote bolus is not allowed within 15 min (this value is editable only if 2 phone numbers added) after last bolus command or remote commands! Therefore the response depends on the time that the last bolus was given.

* BOLUS 1.2
  * Response A: To deliver bolus 1.2U reply with code from Authenticator app for User followed by PIN
  * Response B: Remote bolus not available. Try again later.
* BOLUS 0.60 MEAL
  * If you specify the optional parameter MEAL, this sets the Temp Target MEAL (default values are: 90 mg/dL, 5.0 mmol/l for 45 mins).
  * Response A: To deliver meal bolus 0.60U reply with code from Authenticator app for User followed by PIN
  * Response B: Remote bolus not available. 
* CARBS 5
  * Response: To enter 5g at 12:45 reply with code from Authenticator app for User followed by PIN
* CARBS 5 17:35/5:35PM
  * Response: To enter 5g at 17:35 reply with code from Authenticator app for User followed by PIN
* EXTENDED STOP/CANCEL
  * Response: To stop extended bolus reply with code from Authenticator app for User followed by PIN
* EXTENDED 2 120
  * Response: To start extended bolus 2U for 120 min reply with code from Authenticator app for User followed by PIN

Profil
--------------------------------------------------
* PROFILE STATUS
  * Response: Profile1
* PROFILE LIST
  * Response: 1.`Profile1` 2.`Profile2`
* PROFILE 1
  * Response: To switch profile to Profile1 100% reply with code from Authenticator app for User followed by PIN
* PROFILE 2 30
  * Response: To switch profile to Profile2 30% reply with code from Authenticator app for User followed by PIN

Altul
--------------------------------------------------
* TREATMENTS REFRESH
  * Response: Refresh treatments from NS
* NSCLIENT RESTART
  * Response: NSCLIENT RESTART 1 receivers
* POMPĂ
  * Response: Last conn: 1 min ago Temp: 0.00U/h @11:38 5/30min IOB: 0.5U Reserv: 34U Batt: 100
* PUMP CONNECT
  * Response: Pump reconnected
* PUMP DISCONNECT *30*
  * Response: To disconnect pump for *30* minutes reply with code from Authenticator app for User followed by PIN
* SMS DISABLE/STOP
  * Response: To disable the SMS Remote Service reply with code Any. Keep in mind that you'll able to reactivate it directly from the AAPS master smartphone only.
* TARGET MEAL/ACTIVITY/HYPO   
  * Response: To set the Temp Target MEAL/ACTIVITY/HYPO reply with code from Authenticator app for User followed by PIN
* TARGET STOP/CANCEL   
  * Response: To cancel Temp Target reply with code from Authenticator app for User followed by PIN
* HELP
  * Response: BG, LOOP, TREATMENTS, .....
* HELP BOLUS
  * Response: BOLUS 1.2 BOLUS 1.2 MEAL

Depanare
==================================================
Multiple SMS
--------------------------------------------------
If you receive the same message over and over again (i.e. profile switch) you will probably have set up a circle with other apps. This could be xDrip+, for example. If so, please make sure that xDrip+ (or any other app) does not upload treatments to NS. 

If the other app is installed on multiple phones make sure to deactivate upload on all of them.

SMS commands not working on Samsung phones
--------------------------------------------------
There was a report on SMS commands stopping after an update on Galaxy S10 phone. Could be solved by disabling 'send as chat message'.

.. image:: ../images/SMSdisableChat.png
  :alt: Disable SMS as chat message
