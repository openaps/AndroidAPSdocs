SMS-commando's
*****
Safety First
======
* AndroidAPS allows you to control a child's phone remotely via text message. Bedenk wel, dat de telefoon die is ingesteld om externe commando's te geven, kan worden gestolen. Beveilig die telefoon dus goed, met op z'n minst een pincode.
* AndroidAPS will also inform you by text message if your remote commands, such as a bolus or a profile change, have been carried out. Het wordt aangeraden om ten minste 2 telefoonnummers te koppelen in de SMS communicator instellingen. Mocht één van de gekoppelde telefoons worden gestolen, dan zul je deze bevestigings-SMS'jes evengoed nog op het tweede telefoonnummer binnenkrijgen.

How it works
=====
In your android phone setting go to Applications > AndroidAPS > Permissions and enable SMS

In AndroidAPS go to Preferences > SMS Communicator and enter the phone number(s) that you will allow SMS commands to come from (separated by semicolons, no spaces or other characters anywhere - i.e. +4412345678;+4412345679) and also enable 'Allow remote commands via SMS'.

Send a SMS to the phone with AndroidAPS running from your approved phone number(s) using any of the commands below in **CAPITAL LETTERS**, the phone will respond to confirm success of command or status requested. Confirm command by sending the code provided in SMS from AndroidAPS phone where neccessary.

**Hint**: It can be useful to have SMS flat for both phones if a lot of SMS will be sent.

Commands
=====

Loop
-----
* LOOP STOP/DISABLE
   * Response: Loop has been disabled
* LOOP START/ENABLE
   * Response: Loop has been enabled
* LOOP STATUS
   * Response depends on actual status
      * Loop is disabled
      * Loop is enabled
      * Suspended (10 min)
* LOOP SUSPEND 20
   * Response: Loop suspended for 20 minutes
* LOOP RESUME
   * Response: Loop resumed

CGM data
-----
* BG
   * Response: Last BG: 5.6 4min ago, Delta: -0,2 mmol, IOB: 0.20U (Bolus: 0.10U Basal: 0.10U)
* CAL 5.6
   * Response: To send calibration 5.6 reply with code Rrt
   * Response after correct code was received: Calibration sent (**If xDrip is installed. Accepting calibrations must be enabled in xDrip+**)

Basal
-----
* BASAL STOP/CANCEL
   * Response: To stop temp basal reply with code EmF [Note: Code EmF is just an example]
* BASAL 0.3
   * Response: To start basal 0.3U/h for 30 min reply with code Swe
* BASAL 0.3 20
   * Response: To start basal 0.3U/h for 20 min reply with code Swe
* BASAL 30%
   * Response: To start basal 30% for 30 min reply with code Swe
* BASAL 30% 50
   * Response: To start basal 30% for 50 min reply with code Swe

Bolus
-----
* BOLUS 1.2
   * Response depends time last bolus was given
      * To deliver bolus 1.2U reply with code Rrt
      * Remote bolus not available. Try again later. (**Remote bolus not allowed within 15 min after last bolus command or remote commands!**)
* EXTENDED STOP/CANCEL
   * Response: To stop extended bolus reply with code EmF
* EXTENDED 2 120
   * Response: To start extended bolus 2U for 120 min reply with code EmF

Profiel
-----
* PROFILE STATUS
   * Response: Profile1
* PROFILE LIST
   * Response: 1.`Profile1` 2.`Profile2`
* PROFILE 1
   * Response: To switch profile to Profile1 100% reply with code Any
* PROFILE 2 30
   * Response: To switch profile to Profile2 30% reply with code Any

Andere
-----
* TREATMENTS REFRESH
   * Response: Refresh treatments from NS
* NSCLIENT RESTART
   * Response: NSCLIENT RESTART 1 receivers
* PUMP
   * Response: Last conn: 1 minago Temp: 0.00U/h @11:38 5/30min IOB: 0.5U Reserv: 34U Batt: 100

Problemen oplossen
=====
There was a report on SMS commands stopping after an update on Galaxy S10 phone. Could be solved by disabeling 'send as chat message'.

.. image:: ../images/SMSdisableChat.png
  :alt: Disable SMS as chat message
