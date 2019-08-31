# Αντλία Accu Chek Combo

**Αυτό το λογισμικό αποτελεί μέρος μιας λύσης DIY (Do It Yourself) και δεν είναι προϊόν, αλλά απαιτεί από ΕΣΑΣ να διαβάσετε, να μάθετε και να κατανοήσετε το σύστημα, συμπεριλαμβανομένου του τρόπου χρήσης του. Αυτό δεν είναι κάτι που κάνει όλη τη διαχείριση του διαβήτη για σας, αλλά σας επιτρέπει να βελτιώσετε τον διαβήτη σας και την ποιότητα ζωής σας εάν είστε πρόθυμοι να ξοδέψετε τον απαιτούμενο χρόνο. Μη βιάζεστε με αυτό, αλλά δώστε χρόνο στον εαυτό σας να μάθει. Εσείς μόνο είστε υπεύθυνοι για οτιδήποτε κάνετε με αυτό.**

## Hardware requirements

- Μία αντλία Roche Accu-Check Combo (οποιοδήποτε λογισμικό, όλα είναι συμβατά)
- Μία συσκευή Smartpix ή Realtyme μαζί με το λογισμικό 360 Configuration για την διαμόρφωση της αντλίας. Η Roche διανέμει τις συσκευές Smartpix και το λογισμικό διαμόρφωσης χωρίς χρέωση στους πελάτες της κατόπιν αιτήματος.
- Ένα συμβατό τηλέφωνο: Ένα τηλέφωνο Android με τηλέφωνο που χρησιμοποιεί το LineageOS 14.1 (πρώην CyanogenMod) ή το Android 8.1 (Oreo). Το LineageOS 14.1 πρέπει να είναι μια πρόσφατη έκδοση τουλάχιστον από τον Ιούνιο του 2017, δεδομένου ότι η αλλαγή που απαιτείται για το ζεύγος με την αντλία Combo έγινε τότε. Μια λίστα τηλεφώνων μπορεί να βρεθεί στα έγγραφα  AAPS Phones </ 0>. Παρακαλώ προσέξτε ότι η λίστα δεν είναι ολοκληρωμένη και έχει φτιαχτεί από εμπειρία άλλων χρηστών. Μπορείτε επίσης να εισαγάγετε την εμπειρία σας και, συνεπώς, να βοηθήσετε άλλους (αυτά τα προγράμματα προχωρούν με την συνδρομή όλων).</p></li> 
  
  - Έχετε υπόψη ότι ενώ το Android 8.1 επιτρέπει την επικοινωνία με την Combo, εξακολουθούν να υπάρχουν προβλήματα με το AAPS στις 8.1. Για τους προχωρημένους χρήστες, είναι δυνατή η εκτέλεση της ζεύξης σε ένα rooted τηλέφωνο και η μεταφορά του σε ένα άλλο rooted τηλέφωνο για χρήση με το ruffy/AAPS, το οποίο πρέπει επίσης να είναι rooted. Αυτό επιτρέπει να χρησιμοποιούνται τηλέφωνα με Android < 8.1 αλλά δεν έχει δοκιμαστεί ευρέως: https://github.com/gregorybel/combo-pairing/blob/master/README.md</ul> 
  
  ## Περιορισμοί
  
  - Εκτεταμένα bolus και συνδυαστικά bolus δεν υποστηρίζονται (βλέπε [Εκτεταμένοι Υδατ](../Usage/Extended-Carbs)αντί αυτού)
  - Υποστηρίζεται μόνο ένα βασικό προφίλ.
  - Θέτοντας ως βασικό προφίλ άλλο από το 1 στην αντλία, ή δίνοντας εκτεταμένο ή συνδυαστικό bolus από την αντλία παρεμβαίνετε στο TBRs και αναγκάζει το κύκλωμα σε αναστολή μόνο για 6 ώρες αφού το κύκλωμα δεν μπορεί να τρέξει με ασφάλεια κάτω από αυτές τις συνθήκες.
  - Αυτήν τη στιγμή δεν είναι δυνατή η ρύθμιση της ώρας και της ημερομηνίας στην αντλία, οπότε οι αλλαγές ώρες κατά την διάρκεια της ημέρας πρέπει να πραγματοποιούνται χειροκίνητα (μπορείτε να απενεργοποιήσετε την αυτόματη ενημέρωση ρολογιού του τηλεφώνου το βράδυ και να το αλλάξετε ξανά το πρωί μαζί με το ρολόι της αντλίας για να αποφύγετε συναγερμό κατά τη διάρκεια της νύχτας).
  - Επί του παρόντος μόνο βασική δόση με εύρος από 0,05 με 10 U/h υποστηρίζονται. Αυτό ακόμα εφαρμόζεται όταν φτιάχνεται ένα προφίλ, π.χ. όταν αυξάνεται στο 200%, η μεγαλύτερη τιμή βασικού δεν πρέπει να ξεπερνάει τις 5U/h αφού θα διπλασιαστεί. Παρόμοια, όταν μειώνεται στο 50%, η ελάχιστη τιμή βασικού πρέπει να είναι τουλάχιστον 0,10 U/h.
  - Αν το κύκλωμα απαιτήσει να ακυρώσει έναν τρέχων Προσωρινό ρυθμό (TBR) η Combo αντί αυτού θα θέσει έναν TBR στο 90% ή στο 110% για 15 λεπτά. Αυτό συμβαίνει γιατί ακυρώνοντας έναν TBR προκαλείται συναγερμός στην αντλία που προκαλεί πολλές δονήσεις.
  - Περιστασιακά (κάθε 2 μέρες περίπου) το AAPS μπορεί να αποτύχει να ακυρώσει αυτόματα έναν συναγερμό Ακύρωσης TBR, όπου ο χρήστης χρειάζεται να αντιμετωπίσει (πατώντας το πλήκτρο Ανανέωση στο AAPS για μεταφορά της προειδοποίησης στο AAPS ή επιβεβαιώνοντας τον συναγερμό στην αντλία).
  - Η σταθερότητα της σύνδεσης bluetooth διαφέρει ανάλογα με το τηλέφωνο, προκαλώντας συναγερμούς "μη εύρεση αντλία", όπου δεν υπάρχει σύνδεση με την αντλία. Αν προκληθεί αυτό το λάθος, σιγουρευτείτε ότι το bluetooth είναι ενεργό, πιέστε Ανανέωση στο μενού Combo για να δείτε αν αυτό προκαλείται από ενδιάμεσα θέματα και αν ακόμα δεν πετύχετε σύνδεση, επανεκκινήστε το τηλέφωνο κάτι που θα πρέπει να φτιάξει αυτό. Υπάρχει ένα άλλο θέμα που η επανεκκίνηση δεν βοηθάει αλλά πρέπει να πατηθεί ένα κουμπί στην αντλία (το οποίο επαναφέρει το Bluetooth της αντλίας), πριν η αντλία δεχτεί συνδέσεις από το τηλέφωνο ξανά. Υπάρχουν πολύ λίγα πράγματα που μπορούν να γίνουν για να διορθωθεί ένα από τα θέματα αυτά σε αυτό το σημείο. Έτσι, αν δείτε αυτά τα σφάλματα συχνά η μόνη επιλογή σας αυτή τη στιγμή είναι να αποκτήσετε ένα άλλο τηλέφωνο που είναι γνωστό ότι λειτουργεί καλά με το AndroidAPS και την Combo (δείτε παραπάνω).
  - Η χορήγηση bolus από την αντλία δεν θα εντοπίζεται πάντοτε εγκαίρως (ελέγχεται όποτε συνδέεται το AAPS με την αντλία) και ίσως να χρειαστούν έως και 20 λεπτά στη χειρότερη περίπτωση. Τα bolus στην αντλία ελέγχονται πάντα πριν από ένα υψηλό TBR ή ένα bolus που έχει δοθεί από το AAPS, αλλά λόγω των περιορισμών, το AAPS θα αρνηθεί να δώσει τον TBR/Bolus όπως υπολογίστηκε κάτω από ψευδείς υποθέσεις. (-< Μην δίνεται bolus από την Αντλία! Βλέπε κεφάλαιο * Χρήση *)
  - Η ρύθμιση ενός TBR στην αντλία πρέπει να αποφεύγεται, αφού το κύκλωμα αναλαμβάνει τον έλεγχο των TBRs. Η ανίχνευση ενός νέου TBR στην αντλία μπορεί να διαρκέσει έως και 20 λεπτά και η επίδραση του TBR θα ληφθεί υπόψη μόνο από τη στιγμή που ανιχνεύεται, οπότε στη χειρότερη περίπτωση μπορεί να υπάρχουν 20 λεπτά του TBR που δεν φαίνονται στην IOB. 
  
  ## Ρύθμιση
  
  - Ρυθμίστε την αντλία χρησιμοποιώντας το λογισμικό 360 config. Αν δεν έχετε το λογισμικό, παρακαλώ καλέστε την γραμμή υποστήριξης Accu-Check. Συνήθως στέλνουν στους εγγεγραμμένους χρήστες ένα CD με το "Λογισμικό Διαμόρφωσης Αντλίας 360" και μια συσκευή σύνδεσης SmartPix USB με υπέρυθρη σύνδεση (η συσκευή Realtyme λειτουργεί επίσης εάν το έχετε). 
    - Απαιτείται (με πράσινο χρώμα στα στιγμιότυπα οθόνης): 
      - Ορίστε/αφήστε τη διαμόρφωση του μενού ως "Standard", θα εμφανίζονται μόνο τα υποστηριζόμενα μενού/ενέργειες στην αντλία και θα αποκρύπτονται εκείνα τα οποία δεν υποστηρίζονται (εκτεταμένο/συνδυαστικό bolus, πολλαπλοί βασικοί ρυθμοί), που προκαλούν περιορισμό της λειτουργικότητας του κυκλώματος όταν χρησιμοποιούνται επειδή δεν είναι δυνατό να τρέξετε το κύκλωμα με ασφαλή τρόπο όταν χρησιμοποιείται.
      - Επαληθεύστε το *Γρήγορες πληροφορίες κειμένου* έχει οριστεί σε «Γρήγορες INFO» (χωρίς τα εισαγωγικά, βρέθηκαν στο *Επιλογές αντλίας ινσουλίνης*).
      - Ορίστε TBR *Μέγιστη ρύθμιση* σε 500%
      - Απενεργοποίηση *σήμα τέλους του προσωρινού βασικού ρυθμού*
      - Ορίστε TBR *Διάρκεια αύξησης* έως 15 λεπτά
      - Ενεργοποιήστε το Bluetooth
    - Προτεινόμενες (με μπλε χρώμα στα στιγμιότυπα οθόνης) 
      - Ορίστε συναγερμό χαμηλή αμπούλα σύμφωνα με τις προτιμήσεις σας
      - Ρυθμίστε μέγιστο bolus κατάλληλο για τη θεραπεία σας για την προστασία από σφάλματα του λογισμικού
      - Ομοίως, ρυθμίστε μέγιστη διάρκεια TBR για ασφάλεια. Allow at least 3 hours, since the option to disconnect the pump for 3 hours sets a 0% for 3 hours.
      - Enable key lock on the pump to prevent bolusing from the pump, esp. when the pump was used before and quick bolusing was a habit.
      - Set display timeout and menu timeout to the minimum of 5.5 and 5 respectively. This allows the AAPS to recover more quickly from error situations and reduces the amount of vibrations that can occur during such errors
  
  ![Screenshot of user menu settings](../images/combo/combo-menu-settings.png)
  
  ![Screenshot of TBR settings](../images/combo/combo-tbr-settings.png)
  
  ![Screenshot of bolus settings](../images/combo/combo-bolus-settings.png)
  
  ![Screenshot of insulin cartridge settings](../images/combo/combo-insulin-settings.png)
  
  - Install AndroidAPS as described in the [AndroidAPS wiki](http://wiki.AndroidAPS.org).
  - Make sure to read the wiki to understand how to setup AndroidAPS.
  - Select the MDI plugin in AndroidAPS, not the Combo plugin at this point to avoid the Combo plugin from interfering with ruffy during the pairing process.
  - Follow the link <http://ruffy.AndroidAPS.org> and clone ruffy via git.
  - Install ruffy and use it to pair the pump. If it doesn't work after multiple attempts, switch to the `pairing` branch, pair the pump and then switch back the original branch. Note that the pairing processing is somewhat fragile (but only has to be done once) and may need a few attempts; quickly acknowledge prompts and when starting over, remove the pump device from the Bluetooth settings beforehand. Another option to try is to go to the Bluetooth menu after initiating the pairing process (this keeps the phone's Bluetooth discoverable as long as the menu is displayed) and switch back to ruffy after confirming the pairing on the pump, when the pump displays the authorization code. If you're unsuccessful in pairing the pump (say after 10 attempts), try waiting up to 10s before confirming the pairing on the pump (when the name of the phone is displayed on the pump). If you have configured the menu timeout to be 5s above, you need to increase it again. Some users reported they needed to do this. Lastly, consider moving from one room to another in case of local radio interference. At least one user immediately overcame pairing problems by simply changing rooms.
  - When AAPS is using ruffy, the ruffy app can't be used. The easiest way is to just reboot the phone after the pairing process and let AAPS start ruffy in the background.
  - If the pump is completely new, you need to do one bolus on the pump, so the pump creates a first history entry.
  - Before enabling the Combo plugin in AAPS make sure your profile is set up correctly and activated(!) and your basal profile is up to date as AAPS will sync the basal profile to the pump. Then activate the Combo plugin. Press the *Refresh* button on the Combo tab to initialize the pump.
  - To verify your setup, with the pump **disconnected**, use AAPS to set a TBR of 500% for 15 min and issue a bolus. The pump should now have a TBR running and the bolus in the history. AAPS should also show the active TBR and delivered bolus.
  
  ## Why does pairing with the pump does not work with the app "ruffy"?
  
  There are serveral possible reasons. Try the following steps:
  
  1. Insert a **fresh or full battery** into the pump. Look at the battery section for details. Make sure that the pump is very close to the smartphone.
  
  ![Combo should be next to phone](../images/Combo_next_to_Phone.png)
  
  2. Turn off or remove any other bluetooth devices so they will not be able to establish a connection to the phone while pairing is in progress. Any parallel bluetooth communication or prompt to establish connections might disturb the pairing process.
  
  3.     Delete already connected devices in the Bluetooth menu of the pump: **BLUETOOTH SETTINGS / CONNECTION / REMOVE** until 
        **NO DEVICE** is shown.
        
  
  4. Delete a pump already connected to the phone via Bluetooth: Under Settings / Bluetooth, remove the paired device "**SpiritCombo**"
  5. Make sure, that AAPS not running in background the loop. Deaktivate Loop in AAPS.
  6. Now start ruffy on the phone. You may press Reset! and remove old Bonding. Then hit Connect!.
  7. In the Bluetooth menu of the pump, go to **ADD DEVICE / ADD CONNECTION**. Πατήστε *ΣΎΝΔΕΣΗ!** * Τα βήματα 5 και 6 πρέπει να γίνουν σε σύντομο χρονικό διάστημα.
  8.     Τώρα η αντλία θα πρέπει να εμφανίσει το όνομα BT του τηλεφώνου για να επιλέξετε για σύζευξη. Εδώ είναι σημαντικό να περιμένετε τουλάχιστον 5s
        πριν πατήσετε το κουμπί επιλογής στην αντλία. Διαφορετικά, η αντλία δεν θα στείλει το αίτημα σύζευξης στο τηλέφωνο.
        
        * Εάν η Αντλία Combo έχει ρυθμιστεί σε 5 δευτερόλεπτα διάρκεια φωτισμού οθόνης, μπορείτε να την δοκιμάσετε με 40 δευτερόλεπτα (αρχική ρύθμιση). Από εμπειρία, το διάστημα μεταξύ της αντλία να εμφανιστεί στο τηλέφωνο και να μπορείς να το επιλέξεις είναι 5 με 10 δευτερόλεπτα. Σε πολλές άλλες περιπτώσεις, το χρονικό περιθώριο περνάει, χωρίς επιτυχημένη σύζευξη. Αργότερα θα πρέπει να το επαναφέρετε στα 5 δευτερόλεπτα, για να ικανοποιήσετε τις ρυθμίσεις του AAPS Combo.
        * Εάν η αντλία δεν εμφανίζει το τηλέφωνο ως συσκευή σύζευξης καθόλου, το Bluetooth του τηλεφώνου σας πιθανώς δεν είναι συμβατό με την αντλία. Σιγουρευτείτε οτι τρέχετε ατο κινητό σας τις αναβαθμίσεις **LineageOS ≥14.1** ή **Android ≥ 8.1 (Oreo)**. Εάν είναι δυνατόν δοκιμάστε ένα άλλο τηλέφωνο. Μπορείτε να βρείτε μια λίστα με ήδη χρησιμοποιούμενα κινητά με επιτυχία παρακάτω:(https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435). 
        
  
  9.     Στη συνέχεια η αντλία πρέπει να δείχνει ένα δεκαψήφιο κωδικό. Και το ruffy να εμφανίζει στη οθόνη επιλογή να το εισάγετε. Εισάγετε το κωδικό στο ruffy και θα είστε έτοιμοι να ξεκινήσετε.
        
  
  10. Κάντε επανεκκίνησή το κινητό σας.
  11. Τώρα μπορείτε να ξανά ξεκινήσετε το AAPS κύκλωμα.
  
  ## Χρήσιμες συμβουλές
  
  - Λάβετε υπόψη ότι αυτό δεν είναι ένα προϊόν, esp. στην αρχή ο χρήστης πρέπει να παρακολουθεί και να κατανοεί το σύστημα, τους περιορισμούς του και τον τρόπο με τον οποίο μπορεί να αποτύχει. Συνιστάται έντονα να μην χρησιμοποιείται αυτό το σύστημα όταν ο χρήστης δεν είναι σε θέση να καταλάβει πλήρως το σύστημα.
  - Διαβάστε την τεκμηρίωση του OpenAPS εδώ: https://openaps.org για να κατανοήσετε τον αλγόριθμο του κυκλώματος AndroidAPS και που βασίζεται.
  - Διαβάστε το wiki για να μάθετε και να καταλάβετε το AndroidAPS εδώ: http://wiki.AndroidAPS.org
  - Αυτή η ενοποίηση χρησιμοποιεί την ίδια λειτουργικότητα που παρέχει ο μετρητής που συνοδεύει το Combo. Ο μετρητής επιτρέπει να αντικατοπτρίζει την οθόνη της αντλίας και να προωθεί τα πλήκτρα πίεσης στην αντλία. Η σύνδεση της αντλίας και αυτή η προώθηση είναι αυτό που κάνει η εφαρμογή ruffy. Ένα μέρος της εφαρμογής διαβάζει τα στοιχεία της οθόνης και αυτόματα εισάγει bolus, TBRs κτλ. και επιβεβαιώνει ότι αυτά τα στοιχεία είναι σωστά. Το AAPS στη συνέχεια αλληλεπιδρά με το κατάλληλο στοιχείο της εφαρμογής για να εφαρμόσει το κύκλωμα και να εισάγει bolus. Αυτή η λειτουργία έχει ορισμένους περιορισμούς: είναι σχετικά αργή (αλλά αρκετά γρήγορη για αυτό που χρησιμοποιείται), και ο καθορισμός ενός TBR ή η χορήγηση bolus προκαλεί την δόνηση της αντλίας.
  - Η ενσωμάτωση του Combo με το AndroidAPS έχει σχεδιαστεί με την παραδοχή ότι όλες οι εισαγωγές δεδομένων είναι μέσω του AndroidAPS. Τα bolus που εισέρχονται απευθείας στην αντλία θα ανιχνευθούν από το AAPS, αλλά μπορεί να χρειαστούν έως 20 λεπτά πριν γίνει αντιληπτό από το AndroidAPS ένα τέτοιο bolus. Τα bolus που έγιναν μέσω της αντλία είναι ένα χαρακτηριστικό ασφαλείας και δεν προορίζεται για τακτική χρήση (το κύκλωμα απαιτεί γνώση τις ποσότητας των υδατανθράκων που δεν μπορούν να εισαχθούν στην αντλία, που είναι ένας άλλος λόγος για τον οποίο πρέπει να γίνουν όλες οι εισαγωγές δεδομένων στο AndroidAPS). 
  - Μην ρυθμίσετε ή ακυρώσετε ένα TBR στην αντλία. Το κύκλωμα αναλαμβάνει τον έλεγχο του TBR και δεν μπορεί να λειτουργήσει αξιόπιστα αλλιώς, δεδομένου ότι δεν είναι δυνατόν να προσδιοριστεί ο χρόνος εκκίνησης ενός TBR που ορίστηκε από τον χρήστη στην αντλία λογω της παραπάνω χρονικής καθυστέρησης.
  - Ο πρώτος βασικός ρυθμός της αντλίας διαβάζεται κατά την εκκίνηση της εφαρμογής και ενημερώνεται από το AAPS. Ο βασικός ρυθμός δεν πρέπει να μεταβάλλεται μέσω της αντλίας, γιατί θα ανιχνεύεται και θα διορθώνεται ως μέτρο ασφάλειας (μην βασίζεστε εξ ολοκλήρου στα μέτρα ασφαλείας, αυτό το μέτρο ασφάλειας υπάρχει για να ανιχνεύεται μια ακούσια αλλαγή στην αντλία).
  - Συνιστάται να ενεργοποιήσετε το κλείδωμα πλήκτρων στην αντλία για να αποτρέψετε τη παροχή bolus από την αντλία. γιατί όταν η αντλία χρησιμοποιούνταν πριν και η χρήση του χαρακτηριστικού "γρήγορο bolus" ήταν συνήθεια. Επίσης, με ενεργοποιημένη τη λειτουργία κλειδώματος, πατώντας τυχαία ένα πλήκτρο, ΔΕΝ διακόπτεται η ενεργή επικοινωνία μεταξύ AAPS και αντλίας.
  - When a BOLUS/TBR CANCELLED alert starts on the pump during bolusing or setting a TBR, this is caused by a disconnect between pump and phone, which happens from time to time. AAPS will try to reconnect and confirm the alert and then retry the last action (boluses are NOT retried for safety reasons). Therefore, such an alarm can be ignored as AAPS will confirm it automatically, usually within 30s (cancelling it is not problem, but will lead to the currently active action to have to wait till the pump's display turns off before it can reconnect to the pump). If the pump's alarm continues, automatic corfirmation failed, in which case the user needs to confirm the alarm manually.
  - When a low cartridge or low battery alarm is raised during a bolus, they are confirmed and shown as a notification in AAPS. If they occur while no connection is open to the pump, going to the Combo tab and hitting the Refresh button will take over those alerts by confirming them and show a notification in AAPS.
  - When AAPS fails to confirm a TBR CANCELLED alert, or one is raised for a different reason, hitting Refresh in the Combo tab establishes a connection, confirms the alert and shows a notification for it in AAPS. This can safely be done, since those alerts are benign - an appropriate TBR will be set again during the next loop iteration.
  - For all other alerts raised by the pump: connecting to the pump will show the alert message in the Combo tab, e.g. "State: E4: Occlusion" as well as showing a notification on the main screen. An error will raise an urgent notification. AAPS never confirms serious errors on the pump, but let's the pump vibrate and ring to make sure the user is informed of a critical situation that needs action.
  - After pairing, ruffy should not be used directly (AAPS will start in the background as needed), since using ruffy at AAPS at the same time is not supported.
  - If AAPS crashes (or is stopped from the debugger) while AAPS and the pump were communicating (using ruffy), it might be necessary to force close ruffy. Restarting AAPS will start ruffy again. Restarting the phone is also an easy way to resolve this if you don't know how to force kill an app.
  - Don't press any buttons on the pump while AAPS communicates with the pump (Bluetooth logo is shown on the pump).