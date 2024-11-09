# Εντολές SMS

```{admonition} Documentation
:class: note

This section may contain outdated content. Please also see the page [SMS Commands](#RemoteControl-sms-commands)).

```

## Πρώτα η ασφάλεια
.
- Το AAPS σας επιτρέπει να ελέγχετε εξ αποστάσεως το τηλέφωνο ενός παιδιού μέσω ενός μηνύματος SMS. Αν ενεργοποιήσετε αυτό την επικοινωνία με SMS, θυμηθείτε πάντα ότι το τηλέφωνο που έχει ρυθμιστεί για να δώσει απομακρυσμένες εντολές μπορεί να κλαπεί. Συνεπώς, πάντα να το προστατεύετε τουλάχιστον από ένα κωδικό PIN. Συνιστάται ένας ισχυρός κωδικός πρόσβασης ή βιομετρικά στοιχεία για πρόσβαση.
- Additionally it is recommended to allow a [second phone number](#SMSCommands-authorized-phone-numbers) for SMS commands. So you can use second number to [temporary disable](#SMSCommands-other) SMS communicator in case your main remote phone gets lost or stolen.
- Το AndroidAPS θα σας ενημερώσει επίσης με μήνυμα κειμένου , εάν έχουν πραγματοποιηθεί οι απομακρυσμένες εντολές σας, όπως μια γευματική δόση ή μια αλλαγή προφίλ. Συνιστάται να το ρυθμίσετε έτσι ώστε τα κείμενα επιβεβαίωσης να αποστέλλονται σε τουλάχιστον δύο διαφορετικούς αριθμούς τηλεφώνου σε περίπτωση κλοπής ενός από τα τηλέφωνα λήψης.
- **If you bolus through SMS Commands you must enter carbs through Nightscout (AAPSClient, Website...)!** If you fail to do so IOB would be correct with too low COB potentially leading to not performed correction bolus as AAPS assumes that you have too much active insulin.
- Από την έκδοση AndroidAPS 2.7 και μετά, πρέπει να χρησιμοποιείται μια εφαρμογή ελέγχου ταυτότητας με ένα κωδικό μιας χρήσης με πρόσβαση περιορισμένου χρόνου προκειμένου να αυξηθεί η ασφάλεια κατά τη χρήση των εντολών με μηνύματα.

## Ρύθμιση εντολών μηνυμάτων (SMS commands)

![SMS Commands Setup](../images/SMSCommandsSetup.png)

- Most of the adjustments of temp targets, following AAPS etc. can be done on [AAPSClient app](../RemoteFeatures/RemoteMonitoring.md) on an Android phone with an internet connection.
- Δεν μπορείτε να χορηγήσετε δόση ινσουλίνης μέσω του Nightscout, αλλά μπορείτε μέσω μηνυμάτων SMS.
- If you use an iPhone as a follower and therefore cannot use AAPSClient app, there are additional SMS commands available.
- Στις ρυθμίσεις του android τηλεφώνου σας, επιλέξτε Εφαρμογές> AndroidAPS> Άδειες και ενεργοποιήστε τα μηνύματα SMS

(SMSCommands-authorized-phone-numbers)=
### Εξουσιοδοτημένα τηλεφωνικά νούμερα

- Στο AndroidAPS μεταβείτε στην επιλογή **Προτιμήσεις> Επικοινωνία με SMS ** και εισαγάγετε τον/τους αριθμό/αριθμούς τηλεφώνου από τους οποίους θα επιτρέπεται να δέχονται εντολές με μηνύματα SMS (διαχωρισμένους με ερωτηματικά - π.χ. +306952441211;+306925542211)

- Note that the "+" in front of the number may or may not be required based on your location. To determine this send a sample text which will show the received format in the SMS Communicator tab.

- Ενεργοποιήστε το "Να επιτρέπονται απομακρυσμένες εντολές μέσω μηνυμάτων SMS(Allow remote commands via SMS)".

- Αν θέλετε να χρησιμοποιήσετε πάνω από έναν αριθμό:

  - Εισάγετε μόνο έναν αριθμό.

  - Ενεργοποιήστε τη λειτουργία αυτού του αριθμού στέλνοντας και επιβεβαιώνοντας μια εντολή μέσω μηνύματος SMS.

  - Εισάγετε επιπλέον τηλεφωνικό/ούς αριθμό/ούς διαχωρισμένους με ελληνικό ερωτηματικό, χωρίς κενό.

    ![SMS Commands Setup multiple numbers](../images/SMSCommandsSetupSpace2.png)

### Λεπτά μεταξύ εντολών bolus

- Μπορείτε να προσδιορίσετε την ελάχιστη χρονική διαφορά ανάμεσα σε δύο δόσεις ινσουλίνης που χορηγούνται μέσω μηνυμάτων.
- Για λόγους ασφαλείας πρέπει να προσθέσετε τουλάχιστον δύο εξουσιοδοτημένους τηλεφωνικούς αριθμούς για να επεξεργαστείτε αυτή την μεταβλητή.

### Επιπλέον, είναι υποχρεωτικό το PIN στο τέλος του token

- Για λόγους ασφαλείας ο κωδικός απάντησης πρέπει να ακολουθείται από ένα PIN.

- Κανόνες για το PIN:

  - 3 με 6 ψηφία
  - όχι ίδια ψηφία (π.χ. 1111)
  - όχι ψηφία σε σειρά (π.χ. 1234)

### Ρύθμιση ελέγχου ταυτότητας

- Χρησιμοποιείται ο έλεγχος ταυτότητας δύο παραγόντων (2FA) προκειμένου να βελτιωθεί η ασφάλεια.

- Μπορείτε να χρησιμοποιήσετε οποιαδήποτε εφαρμογή ελέγχου ταυτότητας (Authenticator app) που υποστηρίζει RFC 6238 TOTP tokens. Δημοφιλείς δωρεάν εφαρμογές είναι οι:

  - [Authy](https://authy.com/download/)
  - Google Authenticator - [Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2) / [iOS](https://apps.apple.com/de/app/google-authenticator/id388497605)
  - [LastPass Authenticator](https://lastpass.com/auth/)
  - [FreeOTP Authenticator](https://freeotp.github.io/)

- Εγκαταστήστε την εφαρμογή ελέγχου ταυτότητας που επιλέξατε , στο τηλέφωνο σας που λειτουργεί ως ακόλουθος , και σκανάρετε τον κώδικα QR που εμφανίζεται στο AAPS.

- Δοκιμάστε τον κωδικό μιας χρήσης εισάγοντας το token που εμφανίζεται στην εφαρμογή ελέγχου ταυτότητας και το PIN που μόλις ρυθμίσατε στο AAPS. Παράδειγμα:

  - Το υποχρεωτικό σας PIN είναι 2020
  - Το TOTP token από την εφαρμογή ελέγχου ταυτότητας είναι το 457051
  - Εισάγετε το νούμερο 4570512020

- Το κόκκινο μήνυμα "ΛΑΘΟΣ ΚΩΔΙΚΟΣ" θα αλλάξει **αυτόματα** σε ένα πράσινο "ΟΚ" αν η καταχώριση είναι σωστή. **Δεν υπάρχει κανένα κουμπί που να μπορείτε να πατήσετε!**

- Η ώρα και στα δύο τηλέφωνα πρέπει να είναι συγχρονισμένη. Η καλύτερη λύση είναι να ορίζεται αυτόματα από το διαδίκτυο. Οι διαφορές ώρας μπορεί να οδηγήσουν σε προβλήματα επαλήθευσης ταυτότητας.

- Χρησιμοποιήστε το κουμπί "ΕΠΑΝΑΦΟΡΑ ΕΛΕΓΧΟΥ ΤΑΥΟΤΗΤΑΣ" ("RESET AUTHENTICATORS") αν θέλετε να αφαιρέσετε τους προβλεπόμενους ελέγχους ταυτότητας.  (Με την επαναφορά του ελέγχου ταυτότητας ακυρώνετε ΟΛΟΥΣ τους προβλεπόμενους ελέγχους ταυτότητας. Θα χρειαστεί να τους ξαναρυθμίσετε)

## Χρήση εντολών μηνυμάτων SMS

- Send a SMS to the phone with AAPS running from your approved phone number(s) using any of the [commands](#commands) below.

- Το τηλέφωνο με το AAPS θα ανταποκριθεί επιβεβαιώνοντας την επιτυχία της εντολής ή της κατάστασης που ζητήθηκε.

- Επιβεβαιώστε την εντολή στέλνοντας τον κωδικό όπου είναι απαραίτητο. Παράδειγμα:

  - Το υποχρεωτικό σας PIN είναι 2020
  - Το TOTP token από την εφαρμογή ελέγχου ταυτότητας είναι το 457051
  - Εισάγετε το νούμερο 4570512020

**Συμβουλή**: Μπορεί να είναι χρήσιμο να διαθέτετε απεριόριστα μηνύματα στο συμβόλαιο του τηλεφώνου σας (για κάθε τηλέφωνο που χρησιμοποιείτε) αν στέλνετε πολλά μηνύματα.

(SMSCommands-commands)=
## Εντολές

Commands must be sent in English, the response will be in your local language if the response string is already [translated](#translations-translate-strings-for-AAPS-app).

![SMS Commands Example](../images/SMSCommands.png)

### Κύκλωμα

- LOOP STOP/DISABLE \* Απάντηση: Το κύκλωμα έχει απενεργοποιηθεί

- LOOP START/ENABLE \* Response: Το κύκλωμα έχει ενεργοποιηθεί

- LOOP STATUS

  - Η απάντηση εξαρτάται από την κατάσταση τη δεδομένη στιγμή

    - Κύκλωμα απενεργοποιημένο
    - Κύκλωμα ενεργοποιημένο
    - Αναστολή (10 λεπτά)

- LOOP SUSPEND 20 \* Απάντηση: Κύκλωμα σε αναστολή για 20 λεπτά

- LOOP RESUME \* Απάντηση: Επανέναρξη κυκλώματος

- LOOP CLOSED \* Response: Current loop mode: Closed Loop

- LOOP LGS \* Response: Current loop mode: Low Glucose Suspend

### Δεδομένα CGM

- BG \* Απάντηση: Τελευταία τιμή γλυκόζης: BG: 105 πριν 4 λεπτά, Delta: -6 mg/dl, Ενεργή ινσουλίνη: 0.20U (Δόση ινσουλίνης: 0.10U Bασική ινσουλίνη: 0.10U)
- CAL 105 \* Απάντηση: Για να στείλετε την τιμή βαθμονόμησης 105 απαντήστε με κωδικό από την εφαρμογή για έλεγχο ταυτότητας του χρήστη, ακολουθούμενη από PIN \* Απάντηση μετά από λήψη σωστού κωδικού: Η βαθμονόμηση στάλθηκε (**Αν το xDrip είναι εγκατεστημένο. Η αποδοχή των βαθμονομήσεων πρέπει να έχει ενεργοποιηθεί στο xDrip + **)

### Βασικός Ρυθμός

- BASAL STOP/CANCEL \* Απάντηση: Για να σταματήσετε τον προσωρινό ρυθμό απαντήστε με κωδικό από την εφαρμογή ελέγχου ταυτότητας για τον Χρήστη, ακολουθούμενο από PIN
- BASAL 0.3 \* Απάντηση: Για έναρξη βασικού ρυθμού 0.3U/h για 30 λεπτά απαντήστε με κωδικό από την εφαρμογή ελέγχου ταυτότητας για Χρήστη, ακολουθούμενο από PIN
- BASAL 0.3 \* Απάντηση: Για έναρξη βασικού ρυθμού 0.3U/h για 30 λεπτά απαντήστε με κωδικό από την εφαρμογή ελέγχου ταυτότητας για το χρήστη, ακολουθούμενο από PIN
- BASAL 30% \* Απάντηση: Για έναρξη βασικού ρυθμού 30% για 30 λεπτά απαντήστε με κωδικό από την εφαρμογή ελέγχου ταυτότητας για το χρήστη, ακολουθούμενο από PIN
- BASAL 30% 50 \* Απάντηση: Για έναρξη βασικού ρυθμού 30% για 50 λεπτά απαντήστε με κωδικό από την εφαρμογή ελέγχου ταυτότητας για το χρήστη, ακολουθούμενο από PIN

### Δόση ινσουλίνης

Η απομακρυσμένη δόση ινσουλίνης δεν επιτρέπεται εντός 15 λεπτών (η τιμή αυτή είναι επεξεργάσιμη μόνο αν προστεθούν 2 τηλεφωνικοί αριθμοί) μετά την τελευταία εντολή για δόση ινσουλίνης ή τις απομακρυσμένες εντολές δόσης ινσουλίνης! Ως εκ τούτου, η απάντηση εξαρτάται από το χρόνο που δόθηκε η τελευταία δόση ινσουλίνης.

- BOLUS 1.2 \* Απάντηση A: Για να δοθεί δόση ινσουλίνης 1.2U απαντήστε με κωδικό από την εφαρμογή Ελέγχου Ταυτότητας για το Χρήστη, ακολουθούμενο από PIN \* Απάντηση B: Η απομακρυσμένη δόση ινσουλίνης δεν είναι διαθέσιμη. Προσπαθήστε ξανά αργότερα.
- BOLUS 0.60 MEAL \* Εάν καθορίσετε την προαιρετική παράμετρο ΓΕΥΜΑ (MEAL), αυτό ορίζει τον προσωρινό στόχο ΓΕΥΜΑ (MEAL) (οι προεπιλεγμένες τιμές είναι: 90 mg/dL ή 5.0 mmol/l για 45 λεπτά). \* Απάντηση A: Για να δοθεί δόση ινσουλίνης 060. U απαντήστε με κωδικό από την εφαρμογή Ελέγχου Ταυτότητας για το Χρήστη, ακολουθούμενο από PIN \* Απάντηση B: Η απομακρυσμένη δόση ινσουλίνης δεν είναι διαθέσιμη.
- CARBS 5 \* Απάντηση: Για να εισάγετε 5g στις 12:45 απαντήστε με κωδικό από την εφαρμογή ελέγχου ταυτότητας για το Χρήστη, ακολουθούμενο από PIN
- CARBS 5 17:35/5:35PM \* Απάντηση: Για να εισάγετε 5g στις 17:35 απαντήστε με κωδικό από την εφαρμογή ελέγχου ταυτότητας για το Χρήστη, ακολουθούμενο από PIN
- EXTENDED STOP/CANCEL \* Απάντηση: Για να σταματήσετε την εκτεταμένη δόση ινσουλίνης απαντήστε με κωδικό από την εφαρμογή ελέγχου ταυτότητας για το Χρήστη, ακολουθούμενο από PIN
- EXTENDED 2 120 \* Απάντηση: Για να ξεκινήσετε εκτεταμένη δόση ινσουλίνης 2U για 120 λεπτά απαντήστε με κωδικό από την εφαρμογή ελέγχου ταυτότητας για το Χρήστη, ακολουθούμενο από PIN

### Profile

- PROFILE STATUS \* Απάντηση: Προφίλ1
- PROFILE LIST \* Απάντηση: 1.\`Προφίλ1\` 2.\`Προφίλ2\`
- PROFILE 1 \* Απάντηση: Για αλλαγή προφίλ σε Προφίλ1 100% απαντήστε με κωδικό από την εφαρμογή ελέγχου ταυτότητας για το Χρήστη, ακολουθούμενο από PIN
- PROFILE 2 30 \* Απάντηση: Για αλλαγή προφίλ σε Profile2 30% απαντήστε με κωδικό από την εφαρμογή ελέγχου ταυτότητας για το Χρήστη, ακολουθούμενο από PIN

(SMSCommands-other)=
### Άλλο

- TREATMENTS REFRESH \* Απάντηση: Ανανέωση θεραπευτικών χειρισμών από το NS
- NSClient RESTART \* Response: NSCLIENT RESTART SENT
- PUMP \* Απάντηση: Τελευταία σύνδεση: πριν από 1 λεπτό Temp: 0.00U/h @11:38 5/30min Ενεργή Ινσουλίνη: 0.5U Υπόλοιπο Ρεζερβουάρ: 34U Μπαταρία: 100
- PUMP CONNECT \* Απάντηση: Η αντλία επανασυνδέθηκε
- PUMP DISCONNECT *30* \* Απάντηση: Για να αποσυνδέσετε την αντλία για *30* λεπτά απαντήστε με κωδικό από την εφαρμογή ελέγχου ταυτότητας για το Χρήστη, ακολουθούμενο από PIN
- SMS DISABLE/STOP \* Απάντηση: Για να απενεργοποιήσετε την Απομακρυσμένη Υπηρεσία SMS απαντήστε με κωδικό Any. Λάβετε υπόψη ότι θα μπορείτε να το επανενεργοποιήσετε μόνο απευθείας από το κυρίως (master) smartphone με AAPS.
- TARGET MEAL/ACTIVITY/HYPO \* Απάντηση: Για να ρυθμίσετε τον Προσωρινό Στόχο ΓΕΥΜΑ/ ΔΡΑΣΤΗΡΙΟΤΗΤΑ/ ΥΠΟΓΛΥΚΑΙΜΙΑ (MEAL/ACTIVITY/HYPO) απαντήστε με τον κωδικό από την εφαρμογή ελέγχου ταυτότητας του Χρήστη, ακολουθούμενο από το PIN
- TARGET STOP/CANCEL \* Απάντηση: Για να ακυρώσετε τον Προσωρινό Στόχο απαντήστε με κωδικό από την εφαρμογή ελέγχου ταυτότητας για το Χρήστη, ακολουθούμενο από το PΙΝ
- HELP \* Απάντηση: ΓΛΥΚΟΖΗ ΑΙΜΑΤΟΣ (BG), ΚΥΚΛΩΜΑ (LOOP,) ΘΕΡΑΠΕΥΤΙΚΟΙ ΧΕΙΡΙΣΜΟΙ (TREATMENTS), .....
- HELP BOLUS \* Απάντηση: Δόση ινσουλίνης 1.2 Δόση ινσουλίνης 1.2 Γεύμα

(SMSCommands-troubleshooting)=
## Troubleshooting

### Πολλαπλά SMS

If you receive the same message over and over again (i.e. profile switch) you will probably have set up a circle with other apps. This could be xDrip+, for example. If so, please make sure that xDrip+ (or any other app) does not upload treatments to NS.

If the other app is installed on multiple phones make sure to deactivate upload on all of them.

### SMS commands not working on Samsung phones

There was a report on SMS commands stopping after an update on Galaxy S10 phone. Could be solved by disabling 'send as chat message'.

![Disable SMS as chat message](../images/SMSdisableChat.png)
### Android Messages App

If you are having issues sending or receiving SMS commands with the Android Messages app disable end-to-end ecryption on both caregiver and child's phones.
 - open the specific SMS conversation in Messages
 - Select the options ellipisis in the top right corner
 - select "Details"
 - Activate "Only send SMS and MMS messages"
