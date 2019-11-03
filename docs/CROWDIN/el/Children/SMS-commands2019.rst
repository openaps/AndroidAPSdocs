Εντολές SMS
*****
Πρώτα η ασφάλεια
======
* Το AndroidAPS σας επιτρέπει να ελέγχετε τηλεφωνικά ένα παιδικό τηλέφωνο μέσω μηνύματος κειμένου. Αν ενεργοποιήσετε αυτό την επικοινωνία με SMS, θυμηθείτε πάντα ότι το τηλέφωνο που έχει ρυθμιστεί για να δώσει απομακρυσμένες εντολές μπορεί να κλαπεί. Συνεπώς, πάντα να το προστατεύετε τουλάχιστον από ένα κωδικό PIN.
* Το AndroidAPS θα σας ενημερώσει επίσης με μήνυμα κειμένου εάν έχουν πραγματοποιηθεί οι απομακρυσμένες εντολές σας, όπως μια αλλαγή bolus ή προφίλ. Συνιστάται να το ρυθμίσετε έτσι ώστε τα κείμενα επιβεβαίωσης να αποστέλλονται σε τουλάχιστον δύο διαφορετικούς αριθμούς τηλεφώνου σε περίπτωση κλοπής ενός από τα τηλέφωνα λήψης.
* **If you bolus through SMS Commands you must enter carbs through Nightscout (NSClient, Website...)!** If you fail to do so IOB would be correct with too low COB potentially leading to not performed correction bolus as AAPS assumes that you have too much active insulin.

Πώς λειτουργεί
=====
* Most of the adjustments of temp targets, following AAPS etc. can be done on `NSclient app <../Children/Children.html>`_ on an Android phone with an internet connection.
* Boluses can't be given through Nightscout, but you can use SMS commands.
* If you use an iPhone as a follower and therefore cannot use NSclient, there are additional SMS commands available.

* In your android phone setting go to Applications > AndroidAPS > Permissions and enable SMS
* In AndroidAPS go to Preferences > SMS Communicator and enter the phone number(s) that you will allow SMS commands to come from (separated by semicolons, no spaces or other characters anywhere - i.e. +4412345678;+4412345679) and also enable 'Allow remote commands via SMS'.

  .. image:: ../images/SMSCommandsSetup.png
    :alt: SMS Commands Setup

* Send a SMS to the phone with AndroidAPS running from your approved phone number(s) using any of the commands below in **CAPITAL LETTERS**, the phone will respond to confirm success of command or status requested. Confirm command by sending the code provided in SMS from AndroidAPS phone where neccessary.

**Hint**: It can be useful to have SMS flat for both phones if a lot of SMS will be sent.

Εντολές
=====

Commands must be send in English, response will be in your local language if the response string is already `translated <../translations.html#translate-strings-for-androidaps-app>`_.

.. image:: ../images/SMSCommands.png
  :alt: SMS Commands Example

Κύκλωμα
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

Προφίλ
-----
* PROFILE STATUS
   * Response: Profile1
* PROFILE LIST
   * Response: 1.`Profile1` 2.`Profile2`
* PROFILE 1
   * Response: To switch profile to Profile1 100% reply with code Any
* PROFILE 2 30
   * Response: To switch profile to Profile2 30% reply with code Any

Άλλα
-----
* TREATMENTS REFRESH
   * Response: Refresh treatments from NS
* NSCLIENT RESTART
   * Response: NSCLIENT RESTART 1 receivers
* PUMP
   * Response: Last conn: 1 minago Temp: 0.00U/h @11:38 5/30min IOB: 0.5U Reserv: 34U Batt: 100

Αντιμετώπιση προβλημάτων
=====
Υπήρξε μια αναφορά σχετικά με τις εντολές SMS που σταματούν μετά από μια ενημέρωση στο τηλέφωνο Galaxy S10. Θα μπορούσε να λυθεί με απενεργοποίηση "αποστολή ως μήνυμα chat'.

.. image:: ../images/SMSdisableChat.png
  :alt: Disable SMS as chat message
