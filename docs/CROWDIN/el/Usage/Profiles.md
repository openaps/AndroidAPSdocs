# Αλλαγή Προφίλ

Κατά την εκκίνηση του AndroidAPS και την επιλογή του προφίλ σας, θα χρειαστεί να πραγματοποιήσετε ένα συμβάν "Προφίλ αλλαγής" με μηδενική διάρκεια (εξηγείται αργότερα). Με τον τρόπο αυτό, το AAPS ξεκινά την παρακολούθηση του ιστορικού των προφίλ και κάθε νέα αλλαγή προφίλ απαιτεί ένα άλλο "προφίλ" ακόμα και όταν αλλάζετε το περιεχόμενο του προφίλ στο NS. Το ενημερωμένο προφίλ μεταφέρεται αμέσως στο AAPS, αλλά πρέπει να αλλάξετε ξανά το ίδιο προφίλ (σε NS ή AAPS) για να αρχίσετε να χρησιμοποιείτε αυτές τις αλλαγές.

Το εσωτερικό του AAPS δημιουργεί στιγμιότυπο προφίλ με ημερομηνία έναρξης και διάρκεια και το χρησιμοποιεί σε επιλεγμένη περίοδο. Η διάρκεια του μηδενός σημαίνει άπειρη. Το συγκεκριμένο προφίλ ισχύει έως τη νέα αλλαγή "Προφίλ".

Για να κάνετε μια αλλαγή προφίλ πατήστε παρατεταμένα στο όνομα του προφίλ ("Aktuell (Rad)"στη παρακάτω εικόνα) και επιλέξτε αλλαγή προφίλ.

![Κάντε αλλαγή προφίλ](../images/ProfileSwitch_HowTo.png)

Εάν χρησιμοποιείτε το "Προφίλ αλλαγής" με προφίλ διάρκειας επιστρέφει σε προηγούμενη έγκυρη "Αλλαγή προφίλ"

Εάν χρησιμοποιείτε τοπικά προφίλ AAPS (Simple, Local, CPP), πρέπει να πατήσετε το κουμπί εκεί για να εφαρμόσετε αυτές τις αλλαγές (δημιουργεί το σωστό συμβάν "Προφίλ αλλαγής").

Μέσα στο "διακόπτη προφίλ" μπορείτε να επιλέξετε δύο αλλαγές που ήταν μέρος του Προφίλ ποσοστών του Κιρκαδικού ρυθμου:

## Ποσοστό

* Αυτό εφαρμόζει το ίδιο ποσοστό σε όλες τις παραμέτρους. 
* If you set it to 130% (meaning you are 30% more insulin resistant), it will raise the basal rate by 30%. It will also lower the ISF and IC accordingly (divide by 1.3 in this example).
  
  ![Example profile switch percentage](../images/ProfileSwitchPercentage.png)

* It will be sent to the pump and then be the default basal rate.

* Ο αλγόριθμος κυκλώματος (ανοιχτός ή κλειστός) θα συνεχίσει να λειτουργεί πάνω από το επιλεγμένο ποσοστό προφίλ. Έτσι, για παράδειγμα, μπορούν να δημιουργηθούν ξεχωριστά προφίλ ποσοστών για διαφορετικά στάδια του κύκλου ορμονών.

## Αλλαγή της ώρας

![Αλλαγή προφίλ ποσοστιαία και χρονικά](../images/ProfileSwitchTimeShift2.png)

* Αυτό μετακινεί όλο το 24ωρο σύμφωνα με τον αριθμό των ωρών που εισάγονται. 
* Έτσι, για παράδειγμα, όταν εργάζεστε νυχτερινές βάρδιες, αλλάξτε τον αριθμό των ωρών ανάλογα με το σε αργότερα / νωρίτερα πηγαίνετε στο κρεβάτι ή ξυπνάτε.
* Είναι πάντοτε θέμα των ρυθμίσεων του προφίλ ώρας που πρέπει να αντικαταστήσουν τις ρυθμίσεις της τρέχουσας ώρας. Αυτή η ώρα πρέπει να μετατοπιστεί κατά x ώρες. Γι 'αυτό πρέπει να γνωρίζετε τις οδηγίες που περιγράφονται στο παρακάτω παράδειγμα: 
  * Τρέχουσα ώρα: 12:00
  * **Θετική** αλλαγή της ώρας 
    * 2:00 **+10 h** -> 12:00
    * Θα χρησιμοποιηθούν ρυθμίσεις από τις 2:00 αντί για τις ρυθμίσεις που χρησιμοποιούνται κανονικά στις 12:00 λόγω της θετικής χρονικής μετατόπισης.
  * **Αρνητική** αλλαγή της ώρας 
    * 22:00 **-10 h** -> 12:00
    * Θα χρησιμοποιηθούν οι ρυθμίσεις από τις 22:00 (10 μ.μ.) αντί των ρυθμίσεων που χρησιμοποιούνται κανονικά στις 12:00 λόγω της αρνητικής χρονικής μετατόπισης.

![Προσανατολισμοί των χρονικών μετατοπίσεων προφίλ](../images/ProfileSwitch_PlusMinus2.png)

Αυτός ο μηχανισμός λήψης στιγμιότυπων του προφίλ επιτρέπει πολύ πιο ακριβείς υπολογισμούς του παρελθόντος και τη δυνατότητα παρακολούθησης αλλαγών προφίλ.

## Αντιμετώπιση σφαλμάτων προφίλ

### 'Invalid profile' / 'Basal Profile not aligned to hours'

![Basal not aligned to the hour](../images/BasalNotAlignedToHours2.png)

* These error message will appear if you have any basal rates or I:C rates not on the hour. (DanaR and DanaRS pumps do not support changes on the half hour for example.)
  
  ![Example profile not aligned to hours](../images/ProfileNotAlignedToHours.png)

* Remember / note down date and time shown in the error message (26/07/2019 5:45 pm in screenshot above).

* Go to Treatments tab
* Select ProfileSwitch
* Scroll until you find date and time from error message.
* Use remove function.
* Sometimes there is not only one faulty profile switch. In this case remove also the others.
  
  ![Remove profile switch](../images/PSRemove.png)

Alternatively you can delete the profile switch directly in mLab as described below.

### 'Received profile switch from NS but profile does not exist locally'

* The requested profile was not synced correctly from Nightscout.
* Follow instructions from above to delte the profile switch

Alternatively you can delete the profile switch directly in mLab:

* Go to your mlab collection
* Search in the treatments for profile switch
* Delete the profile switch with date and time that was mentioned in the error message. ![mlab](../images/mLabDeletePS.png)

### 'DIA 3hr too short'

* Error message will appear if your duration of insulin action in your profile is listed at a value that AndroidAPS doesn't believe will be accurate. 
* Read about [selecting the right DIA](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/), and edit it in your profile then do a [Profile Switch](../Usage/Profiles#profile-switch) to continue.