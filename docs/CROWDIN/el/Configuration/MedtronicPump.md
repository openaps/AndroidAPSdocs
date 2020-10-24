# Αντλίες Medtronic

**>>>> Medtronic pump driver is from 2.5 version part of AndroidAPS (master). While this is the case, Medtronic driver should still be considered beta software. Please install only if you are expirenced user. At the moment we are still fighting with double Bolus issue (We get 2 boluses in treatments, which throws IOB calculation (if you experience this bug, please enable Double Bolus Logging in Medtronic configuration and provide your logs)), this should be fixed with upcomming release. <<<<**

* * *

Λειτουργεί μόνο με παλαιότερες αντλίες Medtronic (βλ. λεπτομέρειες παρακάτω). Δε λειτουργεί με την Medtronic 640G και 670G.

* * *

If you started using Medtronic driver please add yourself to this [list](https://docs.google.com/spreadsheets/d/16XIjviXe8b-12PrB6brGubNFuAEsFZr10pjLt_SpSFQ/edit#gid=0). This is just so that we can see which Phones are good and which are not so good (or bad) for this driver. There is one column called "BT restart". This is to check if yourPhone supports BT enable/disable, which can be used when pump is no longer able to connect, that happens from time to time. If you notice any other problem, please write that in Comments column.

* * *

## Απαιτήσεις υλικού και λογισμικού

- ** Τηλέφωνο: ** Ο οδηγός Medtronic θα πρέπει να λειτουργεί με οποιοδήποτε τηλέφωνο που υποστηρίζει BLE. ** ΣΗΜΑΝΤΙΚΟ: Ενώ το πρόγραμμα οδήγησης λειτουργεί σωστά σε όλα τα τηλέφωνα, δεν επιτρέπεται η ενεργοποίηση / απενεργοποίηση του Bluetooth (αυτό απαιτείται όταν χάσετε τη σύνδεση με το RileyLink και το σύστημα δεν μπορεί να ανακτήσει αυτόματα - συμβαίνει κατά διαστήματα). So you need to get device with Android 7.0 - 8.1, in worst case scenario you can install LinegaeOS 15.1 (required 15.1 or lower) on your phone. Εξετάζουμε το πρόβλημα με το Android 9, αλλά μέχρι στιγμής δεν έχουμε βρει λύση (φαίνεται ότι λειτουργεί σε μερικά μοντέλα και όχι σε άλλα).**
- ** RileyLink / Gnarl: ** Για επικοινωνία με την αντλία χρειάζεστε συσκευή που μετατρέπει τις εντολές BT από το τηλέφωνο σε RF εντολές που κατανοεί η αντλία. Η συσκευή που λέγεται RileyLink (μπορείτε να την πάρετε εδώ [ getrileylink.org ](https://getrileylink.org/)). Χρειάζεστε σταθερή έκδοση της συσκευής, η οποία είναι για τα παλαιότερα μοντέλα firmware 0.9 (παλαιότερες εκδόσεις μπορεί να μην λειτουργούν σωστά) ή για νεώτερα μοντέλα 2.2 (υπάρχουν επιλογές για αναβάθμιση διαθέσιμες στην τοποθεσία RL). Εάν νιώθετε περιπετειώδης, μπορείτε επίσης να δοκιμάσετε το Gnarl ([ εδώ ](https://github.com/ecc1/gnarl)), το οποίο είναι είδος του RileyLink-clone. 
- ** Αντλία: ** Το πρόγραμμα οδήγησης λειτουργεί μόνο με τα ακόλουθα μοντέλα και εκδόσεις υλικολογισμικού: 
    - 512/712
    - 515/715
    - 522/722
    - 523/723 (firmware 2.4A ή χαμηλότερη)
    - 554/754 Έκδοση ΕΕ (firmware 2.6A ή χαμηλότερη)
    - 554/754 Έκδοση Καναδά (firmware 2.7A ή χαμηλότερη)
- Check for firmware is described in [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/Gear%20Up/pump.html#how-to-check-pump-firmware-check-for-absence-of-pc-connect) and [LoopDocs](https://loopkit.github.io/loopdocs/build/step3/#medtronic-pump-firmware).

## Διαμόρφωση της αντλίας

- ** Ενεργοποιήστε την απομακρυσμένη λειτουργία στην αντλία ** (Βοηθητικά προγράμματα -> Απομακρυσμένες επιλογές, επιλέξτε Ναι, και στην επόμενη οθόνη κάντε Προσθήκη ταυτότητας και προσθέστε ψεύτικη ταυτότητα (111111 ή κάτι τέτοιο). Πρέπει να έχετε τουλάχιστον ένα αναγνωριστικό στη λίστα απομακρυσμένων αναγνωριστικών. Αυτές οι επιλογές ενδέχεται να φαίνονται διαφορετικά σε διαφορετικό μοντέλο αντλίας. Αυτό το βήμα είναι σημαντικό, γιατί όταν ρυθμιστεί, η αντλία θα ακούει πιο συχνά για απομακρυσμένη επικοινωνία.
- ** Ρυθμίστε το μέγιστο βασικό** στην αντλία σας στο "εισαγωγή μεγίστου βασικού στο προφίλ STD" * 4 (αν θέλετε να έχετε 400% TBR ως μέγιστο). Αυτός ο αριθμός πρέπει να είναι κάτω από 35 (όπως μπορείτε να δείτε στην αντλία).
- ** Ορισμός μέγιστης δόσης ** στην αντλία σας (το μέγιστο είναι 25)
- ** Ρυθμίστε το προφίλ σε STD **. Αυτό θα είναι το μοναδικό προφίλ που θα χρησιμοποιήσουμε. Μπορείτε επίσης να απενεργοποιήσετε.
- ** Ορίστε τον τύπο TBR ** στο Απόλυτο (όχι επί της εκατό)

## Διαμόρφωση του τηλεφώνου / AndroidAPS

- ** Μην αντιστοιχίζετε το RileyLink με το τηλέφωνό σας. ** Αν έχετε αντιστοιχίσει το RileyLink, τότε το AndroidAPS δεν θα το βρει στη διαμόρφωση.
- Απενεργοποιήστε την Αυτόματη περιστροφή στο τηλέφωνό σας (σε ορισμένες συσκευές Αυτόματη περιστροφή επανενεργοποιεί τις περιόδους λειτουργίας BT, κάτι που δεν είναι κάτι που θα θέλαμε).
- Μπορείτε να ρυθμίσετε την αντλία στο AndroidAPS με δύο τρόπους: 

1. Χρήση του Οδηγού (σε νέα εγκατάσταση)
2. Απευθείας στην καρτέλα Config (εικονίδιο Cog στο πρόγραμμα οδήγησης της Medtronic)

If you do new install you will be thrown directly into wizard. Sometimes if your BT connection is not working fully (unable to connect to pump), you might not be able to complete configuration. In such case select virtual pump and after wizard is finished, you can go with option 2, which will bypass pump detection.

![MDT Settings](../images/Medtronic01a.png)

You need to set following items: (see picture above)

- ** Σειριακός αριθμός αντλίας **: Μπορείτε να βρείτε αυτό στην πίσω πλευρά, είσοδος SN. Πρέπει να πάρετε μόνο τα νούμερα, η σειρά σας είναι 6 αριθμοί.
- **Τύπος αντλίας**: Ποιο τύπο αντλίας έχετε (π.χ. 522). 
- ** Συχνότητα αντλίας **: Σύμφωνα με τη συχνότητα της αντλίας, πραγματοποιήθηκαν δύο εκδόσεις της αντλίας Medtronic (αν δεν είστε σίγουροι για τη συχνότητα που χρησιμοποιεί η αντλία σας, κοιτάξτε [ Συχνές ερωτήσεις ](../Configuration/MedtronicPump#faq)): 
    - για ΗΠΑ & Καναδά, η συχνότητα που χρησιμοποιείται είναι 916 Mhz
    - για παγκόσμια κλίμακα, η συχνότητα που χρησιμοποιείται είναι 868 Mhz
- ** Μέγιστο Bolus στην αντλία(U) ** (σε μια ώρα): Αυτό πρέπει να ρυθμιστεί στο ίδιο επίπεδο όπως και στην αντλία. Περιορίζει πόση ινσουλίνη μπορείτε να κάνετε με το Bolus. Εάν υπερβείτε αυτό, το Bolus δεν θα δοθεί και σφάλμα θα ηχήσει. Το μέγιστο που μπορεί να χρησιμοποιηθεί είναι 25, ορίστε τη σωστή τιμή για τον εαυτό σας εδώ, ώστε να μην κάνετε υπερβολική δόση.
- ** Μέγιστος βασικός στην αντλία (U / h) **: Αυτό πρέπει να ρυθμιστεί στο ίδιο επίπεδο όπως και στην αντλία. Περιορίζει πόση βασική μπορείτε να πάρετε σε μια ώρα. Έτσι, για παράδειγμα, εάν θέλετε να ρυθμίσετε το μέγιστο TBR στο 500% και το υψηλότερο των βασικών μοτίβων σας είναι 1,5 U, τότε θα πρέπει να ρυθμίσετε το Max Basal σε τουλάχιστον 7,5. Αν αυτή η ρύθμιση είναι λάθος (για παράδειγμα, αν ένα από τα βασικά μοτίβα σας υπερβεί αυτή την τιμή, η αντλία θα επιστρέψει σφάλμα).
- ** Καθυστέρηση πριν από την εκκίνηση του Bolus **: Αυτό είναι καθυστέρηση πριν από την αποστολή bolus στην αντλία, έτσι ώστε αν αλλάξετε γνώμη, μπορείτε να την ακυρώσετε. Η ακύρωση του bolus κατά τη χορήγηση του bolus δεν υποστηρίζεται από την αντλία (εάν θέλετε να σταματήσετε το bolus κατά τη διάρκεια της λειτουργίας, πρέπει να σταματήσετε την αντλία και στη συνέχεια να συνεχίσετε).
- ** Κωδικοποίηση Medtronic **: Αυτή είναι η ρύθμιση που καθορίζει αν η κωδικοποίηση 4b6b που κάνουν οι συσκευές της Medtronic θα γίνει στο AndroidAPS ή στο RileyLink. Αν έχετε RileyLink με firmware 2.x, η προεπιλεγμένη τιμή θα είναι να χρησιμοποιήσετε την κωδικοποίηση υλικού (= έγινε από RileyLink), αν έχετε 0.x firmware, αυτή η ρύθμιση θα αγνοηθεί.
- ** Τύπος μπαταρίας (Power View) **: Αν θέλετε να δείτε την ισχύ της μπαταρίας στην αντλία σας, πρέπει να επιλέξετε τον τύπο μπαταρίας που χρησιμοποιείτε (υποστηρίζεται προς το παρόν Lithium ή Alkaline) υπολογισμένο ποσοστό και βολτ.
- ** Διαμόρφωση RileyLink **: Θα βρείτε τη συσκευή σας RileyLink / GNARL.
- **Set neutral temp basals** is an option which can help prevent Medtronic pumps from beeping on the hour. If enabled if will cancel a temp basal before the hour end to prevent this from happening.

## Καρτέλα MEDTRONIC (MDT)

![MDT Tab](../images/Medtronic02.png)

On pump tab you can see several lines that are showing pumps (and connections) current status.

- ** Κατάσταση RileyLink **: Εμφανίζει την κατάσταση της σύνδεσης RileyLink. Το τηλέφωνο θα πρέπει να είναι συνεχώς συνδεδεμένο στο RileyLink.
- ** Κατάσταση αντλίας **: Κατάσταση σύνδεσης αντλίας, αυτό μπορεί να έχει πολλές τιμές, αλλά κυρίως θα δούμε εικονίδιο ύπνου (όταν η σύνδεση αντλίας δεν είναι ενεργή), όταν η εντολή εκτελείται, μπορεί να δείτε ''ξύπνημα'', το οποίο είναι το AAPS που προσπαθεί να κάνει σύνδεση με την αντλία σας ή την περιγραφή οποιασδήποτε εντολής που μπορεί να τρέχει στην αντλία (π. χ.: ρύθμισε ώρα, όρισε TBR, κλπ.).
- ** Μπαταρία **: Εμφανίζει την κατάσταση μπαταρίας ανάλογα με τη διαμόρφωσή σας. Αυτό μπορεί να είναι ένα απλό εικονίδιο που δείχνει εάν η μπαταρία είναι άδεια ή γεμάτη (κόκκινο εάν η μπαταρία είναι κρίσιμη, κάτω από 20%), ή ποσοστό και τάση.
- ** Τελευταία σύνδεση **: Ο χρόνος κατά τον οποίο η τελευταία σύνδεση με την αντλία ήταν επιτυχής.
- ** Τελευταία bolus **: Πότε δόθηκε το τελευταίο bolus.
- ** Κύριος βασικός ρυθμός **: Αυτός είναι ο κύριος βασικός ρυθμός που τρέχει στην αντλία αυτή την ώρα.
- ** Προσωρινός βασικός **: Προσωρινός βασικός που εκτελείται ή είναι άδειος.
- ** Δεξαμενή **: Πόση ινσουλίνη υπάρχει στη δεξαμενή (ενημερώνεται τουλάχιστον κάθε ώρα).
- ** Σφάλματα **: Η σειρά σφάλματος αν υπάρχει πρόβλημα (συνήθως δείχνει αν υπάρχει σφάλμα στη διαμόρφωση).

On lower end we have 3 buttons:

- ** Ανανέωση ** προορίζεται για την ανανέωση της κατάστασης. Αυτό θα πρέπει να χρησιμοποιείται μόνο αφού η σύνδεση δεν υπήρχε εδώ και πολύ καιρό, καθώς αυτή η ενέργεια θα επαναφέρει δεδομένα σχετικά με την αντλία (ανάκτηση ιστορικού, λήψη / ρύθμιση ώρας, λήψη προφίλ, λήψη κατάστασης μπαταρίας κλπ.).
- ** Ιστορικό αντλίας **: Εμφανίζει το ιστορικό αντλίας (δείτε [ παρακάτω ](../Configuration/MedtronicPump#pump-history))
- ** Στατιστικά RL **: Εμφάνιση στατιστικών RL (δείτε [ παρακάτω ](../Configuration/MedtronicPump#rl-status-rileylink-status))

## Ιστορικό αντλίας

![Pump History Dialog](../images/Medtronic03.png)

Pump history is retrieved every 5 minutes and stored localy. We keep history only for last 24 hours, so older entries are removed when new are added. This is simple way to see the pump history (some entries from pump might not be displayed, because they are not relevant - for example configuration of functions that are not used by AndroidAPS).

## Κατάσταση RL (κατάσταση RileyLink)

![RileyLink Status - Settings](../images/Medtronic04.png) ![RileyLink Status - History](../images/Medtronic05.png)

Dialog has two tabs:

- ** Ρυθμίσεις **: Εμφανίζει τις ρυθμίσεις για το RileyLink: Διαμορφωμένη διεύθυνση, συνδεδεμένη συσκευή, κατάσταση σύνδεσης, σφάλμα σύνδεσης και εκδόσεις firmware RileyLink. Ο τύπος συσκευής είναι πάντα η αντλία Medtronic, το μοντέλο θα είναι το μοντέλο σας, ο σειριακός αριθμός έχει διαμορφωθεί στον σειριακό αριθμό, η συχνότητα αντλίας δείχνει τη συχνότητα που χρησιμοποιείτε, η τελευταία συχνότητα είναι η τελευταία χρησιμοποιούμενη συχνότητα.
- ** Ιστορικό **: Εμφανίζει το ιστορικό επικοινωνίας, τα στοιχεία με το RileyLink δείχνει αλλαγές κατάστασης για το RileyLink και το Medtronic δείχνει ποιες εντολές έχουν σταλεί στην αντλία.

## Ενέργειες

When Medtronic driver is selected, 3 possible actions can be added to Actions Tab:

- **Wake and Tune Up ** - Εάν δείτε ότι το AndroidAPS σας δεν έρχεται σε επαφή με την αντλία σας κάποια στιγμή (πρέπει να επικοινωνήσετε με αυτό κάθε 5 λεπτά), μπορείτε να εξαναγκάσετε τη ρύθμιση Tune Up. Αυτό θα προσπαθήσει να επικοινωνήσει με την αντλία σας, αναζητώντας όλες τις δευτερεύουσες συχνότητες στις οποίες μπορεί να επικοινωνήσει η αντλία. Αν βρίσκει κάποια, θα την ορίσει ως την προεπιλεγμένη συχνότητα. 
- ** Επαναφορά του RileyLink Config ** - Εάν επαναφέρετε το RileyLink / GNARL, πρέπει να χρησιμοποιήσετε αυτήν την ενέργεια, έτσι ώστε να είναι δυνατή η αναδιάρθρωση της συσκευής (ρύθμιση συχνότητας, ρύθμιση τύπου συχνότητας, ρύθμιση παραμέτρων κωδικοποίησης).
- ** Εκκαθάριση αποκλεισμού bolus ** - Όταν ξεκινάτε το bolus, ρυθμίζουμε το Bolus Block, το οποίο εμποδίζει την έκδοση οποιασδήποτε εντολής για την αντλία. Αν αναστείλετε την αντλία σας και συνεχίσετε (για να ακυρώσετε το bolus), μπορείτε να καταργήσετε αυτό το μπλοκ. Η επιλογή υπάρχει μόνο όταν εκτελείται bolus... 

## Σημαντικές σημειώσεις

### OpenAPS users

When you start using AndroidAPS, primary controller is AndroidAPS and all commands should go through it. Sending boluses should go through AAPS and not be done on pump. We have code in place that will detect any command done on pump, but if you can you should avoid it (I think we fixed all the problems with pump history and AAPS history synchronization, but small issues still may arrise, especially if you use the "setup" as it was not intended to be used). Since I started using AndroidAPS with my pump, I haven't touched the pump, except when I have to change the reservoir, and this is the way that AndroidAPS should be used.

### Logging

Since Medtronic driver is very new, you need to enable logging, so that we can debug and fix problems, if they should arise. Click on icon on upper left corner, select Maintainance and Log Settings. Options Pump, PumpComm, PumpBTComm need to be checked.

### RileyLink/GNARL

When you restart RileyLink or GNARL, you need to either do new TuneUp (action "Wake and Tune Up") or resend communication parameters (action "Reset RileyLink Config"), or else communication will fail.

### CGMS

Medtronic CGMS is currently NOT supported.

### Manual use of pump

You should avoid manually doing treatments things on your pump. All commands (bolus, TBR) should go through AndroidAPS, but if it happens that you will do manual commands, do NOT run commands with frequency less than 3 minutes (so if you do 2 boluses (for whatever reason), second should be started at least 3 minutes after first one).

## Αλλαγές ζώνης ώρας και DST (Daylight Saving Time) ή Ταξιδεύοντας με την αντλία Medtronic και το AndroidAPS

Important thing to remember is that you should never disable loop when you are traveling (unless your CGMS can't do offline mode). AAPS will automatically detect Timezone changes and will send command to Pump to change time, when time on Phone is changed.

Now if you travel to East and your TZ changes with adding hours (ex. from GMT+0 to GMT+2), pump history won't have problem and you don't have to worry... but if you travel to West and your TZ changes by removing hours (GMT+2 to GMT-0), then sychronization might be little iffy. In clear text, that means that for next x hours you will have to be careful, because your IOB, might be little weird.

We are aware of this problem, and we are already looking into possible solution (see https://github.com/andyrozman/RileyLinkAAPS/issues/145), but for now, have that info in mind when traveling.

## Συχνές ερωτήσεις

### Can I see the power of RileyLink/GNARL?

Όχι. At the moment none of this devices support this and it probably won't even in the future.

### Is GNARL full replacement for RileyLink?

Yes. Author of GNARL added all functions used by Medtronic driver. All Medtronic communication is supported (at time of the writing (June/2019). GNARL can't be used for Omnipod communication. Downside of GNARL is that you have to build it yourself, and you have to have compatible version of hardware.

**Note from author:** Please note that the GNARL software is still experimental and lightly tested, and should not be considered as safe to use as a RileyLink.

### Where can I get RileyLink or GNARL?

Like mentioned before you can get devices here:

- RileyLink - Μπορείτε να πάρετε τη συσκευή εδώ - [ getrileylink.org ](https://getrileylink.org/).
- GNARL - Μπορείτε να λάβετε πληροφορίες εδώ, αλλά η συσκευή πρέπει να παραγγελθεί αλλού ([ github.com/ecc1/gnarl ](https://github.com/ecc1/gnarl)).

### What to do if I loose connection to RileyLink and/or pump?

1. Εκτελέστε τη λειτουργία "Ξυπνήστε και συντονίστε", αυτή θα προσπαθήσει να βρει τη σωστή συχνότητα για να επικοινωνήσει με την αντλία.
2. Απενεργοποιήστε το Bluetooth, περιμένετε 10 δευτερόλεπτα και ενεργοποιήστε το ξανά. Αυτό θα αναγκάσει την επανασύνδεση με το RileyLink.
3. Επαναφέρετε το RileyLink, αφού το κάνετε αυτό, μην ξεχάσετε να εκτελέσετε τη διαδικασία "Επαναφορά διαμόρφωσης RileyLink ".
4. Δοκιμάστε 3 και 2 μαζί.
5. Επαναφέρετε το RileyLink και επαναφέρετε το τηλέφωνο.

### How to determine what Frequency my pump uses

![Pump Model](../images/Medtronic06.png)

If you turn your pump around in first line on right side you will see special 3 letter code. First two letters determine frequency type and last one determines color. Here are possible values for Frequency:

- ΒA - Βόρεια Αμερική (στην επιλογή συχνότητας πρέπει να επιλέξετε "ΗΠΑ & Καναδάς (916 MHz)")
- ΚA - Καναδάς (στην επιλογή συχνότητας πρέπει να επιλέξετε "ΗΠΑ & Καναδάς (916 MHz)")
- ΠΑ - Παγκοσμίως (στην επιλογή συχνότητας πρέπει να επιλέξετε "Σε όλο τον κόσμο (868 Mhz)")