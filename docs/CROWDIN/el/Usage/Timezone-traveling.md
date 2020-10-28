# Ταξιδεύοντας σε διαφορετικές ζώνες ώρας με αντλίες

## DanaR, Korean DanaR

Δεν υπάρχει πρόβλημα με την αλλαγή ζώνης ώρας στο τηλέφωνο, επειδή η αντλία δεν χρησιμοποιεί ιστορικό

## DanaRv2, DanaRS

Αυτές οι αντλίες χρειάζονται ιδιαίτερη προσοχή επειδή το AndoridAPS χρησιμοποιεί ιστορία από την αντλία, αλλά τα αρχεία στην αντλία δεν έχουν σφραγίδα χρονικής ζώνης. **Αυτό σημαίνει ότι αν αλλάξετε απλά τη ζώνη ώρας στο τηλέφωνο, οι εγγραφές θα διαβαστούν με διαφορετική ζώνη ώρας και θα διπλασιαστούν.**

Για να αποφευχθεί αυτό, υπάρχουν δύο δυνατότητες:

### Επιλογή 1: Διατήρηση του προφίλ ώρας και χρονικής μετατόπισης

* Απενεργοποιήστε την "Αυτόματη ημερομηνία και ώρα" στις ρυθμίσεις του τηλεφώνου σας (αλλαγή σε χειροκίνητης ζώνη ώρας).
* Το τηλέφωνο πρέπει να διατηρεί τον κανονικό σας χρόνο όπως στο σπίτι για ολόκληρη την περίοδο ταξιδιού.
* Χρονική μετατόπιση του προφίλ σας σύμφωνα με τη χρονική διαφορά μεταξύ του χρόνου στο σπίτι και του χρόνου προορισμού.
   
   * Παρατεταμένο πάτημα στο όνομα προφίλ (στη μέση της κορυφαίας ενότητας στην αρχική οθόνη)
   * Επιλέξτε 'Μετατροπή προφίλ'
   * Ορίστε την επιλογή "Αλλαγή ώρας" ανάλογα με τον προορισμό σας.
   
   ![Αλλαγή προφίλ με χρονική μετατόπιση](../images/ProfileSwitchTimeShift2.png)
   
   * π.χ. Βιέννη -> Νέα Υόρκη: διακόπτης προφίλ +6 ώρες
   * π.χ. Βιέννη -> Σίδνεϊ: διακόπτης προφίλ -8 ώρες
* Probably not an option if using [patched LibreLink app](../Hardware/Libre2#time-zone-travelling) as automatic time zone must be set to start a new Libre 2 sensor.

### Επιλογή 2: Διαγραφή ιστορικού αντλίας

* Απενεργοποιήστε την "Αυτόματη ημερομηνία και ώρα" στις ρυθμίσεις του τηλεφώνου σας (αλλαγή σε χειροκίνητης ζώνη ώρας)

Όταν βγείτε από το αεροπλάνο:

* κλείστε την αντλία
* αλλάξτε ώρα στο τηλέφωνο
* κλείστε το τηλέφωνο, ενεργοποιείστε την αντλία
* σβήστε τον ιστορικό στην αντλία
* αλλάξτε ώρα στην αντλία
* ενεργοποιήστε το τηλέφωνο
* αφήστε το τηλέφωνό σας να συνδεθεί στην αντλία και ρυθμίσετε το χρόνο

## Insight

Ο οδηγός προσαρμόζει αυτόματα την ώρα της αντλίας στην ώρα του τηλεφώνου.

Το Insight καταγράφει επίσης τις καταχωρήσεις ιστορικού, στις οποίες η χρονική στιγμή άλλαξε και από ποιο (παλιό) χρόνο στον (καινούργιο) χρόνο. Επομένως, ο σωστός χρόνος μπορεί να καθοριστεί στο AAPS παρά την αλλαγή ώρας.

Μπορεί να προκαλέσει ανακρίβειες στα TDDs. Αλλά δεν πρέπει να είναι πρόβλημα.

Έτσι, ο χρήστης Insight δεν χρειάζεται να ανησυχεί για τις αλλαγές ζώνης ώρας και τις αλλαγές ώρας. Υπάρχει μία εξαίρεση στο κανόνα αυτό: Η αντλία Insight διαθέτει μια μικρή εσωτερική μπαταρία για να τροφοδοτεί χρόνο κτλ. ενώ αλλάζετε την "πραγματική" μπαταρία. Αν πάρει πολλή ώρα η αλλαγή της μπαταρίας, η εσωτερική μπαταρία εξαντλείται, το ρολόι επαναφέρεται και σας ζητείται να εισάγετε την ώρα και την ημερομηνία μετά την εισαγωγή μιας νέας μπαταρίας. Σε αυτήν την περίπτωση, όλες οι καταχωρίσεις πριν από την αλλαγή μπαταρίας παραλείπονται στον υπολογισμό του AAPS, καθώς ο σωστός χρόνος δεν μπορεί να προσδιοριστεί σωστά.

# Ρύθμιση χρόνου και εξοικονόμηση χρόνου κατά τη διάρκεια της ημέρας(DST)

Ανάλογα με την αντλία και τη ρύθμιση CGM, τα άλματα στο χρόνο μπορεί να οδηγήσουν σε προβλήματα. Με το Combo π.χ. το ιστορικό της αντλίας διαβάζεται ξανά και οδηγεί σε διπλές εγγραφές. Επομένως, κάντε την προσαρμογή ενώ είστε ξύπνιος και όχι κατά τη διάρκεια της νύχτας.

Εάν χρησιμοποιείτε bolus με την αριθμομηχανή, παρακαλούμε μην χρησιμοποιείτε COB και IOB, εκτός αν βεβαιωθείτε ότι είναι απολύτως σωστοί - καλύτερα να μην τις χρησιμοποιείτε για μερικές ώρες μετά τον διακόπτη DST.

## Accu-Chek Combo

AndroidAPS will issue an alarm if the time between pump and phone differs too much. In case of DST time adjustment, this would be in the middle of the night. To prevent this and enjoy your sleep instead, follow these steps so that you can force the time change at a time convenient to yourself:

### Actions to take before the clock change

1. Switch OFF any setting that automatically sets the timezone, so you can force the time change when you want to. How you can do this will depend on your smartphone and Android version.
   
   * Some have two settings, one for automatic setting of the time (which ideally should remain on) and one for automatic setting of the timezone (which you must turn OFF).
   * Unfortunately some Android versions have a single switch to enable automatic setting of both the time and the timezone. You’ll have to turn this off for now.

2. Find a time zone that has the same time as your current location but doesn't use DST.
   
   * A list of these countries is available [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * For Central European Time (CET) this could be "Brazzaville" (Kongo). Change your phone's timezone to Kongo.

3. In AndroidAPS refresh your pump.

4. Check the Treatments tab... If you see any duplicate treatments:
   
   * DON'T press "delete treatments in the future"
   * Hit "remove" on all future treatments and duplicate ones. This should invalidate the treatments rather than removing them so they will not be considered for IOB anymore.

5. If the situation on how much IOB/COB is unclear - for safety please disable the loop for at least one DIA and Max-Carb-Time - whatever is bigger.*

### Actions to take after the clock change

A good time to make this switch would be with low IOB. E.g. an hour before a meal such as breakfast, (any recent boluses in the pump history will have been small SMB corrections. Your COB and IOB should both be close to zero.)

1. Change the Android timezone back to your current location and re-enable automatic timezone.
2. AndroidAPS will soon start alerting you that the Combo’s clock doesn’t match. So update the pump’s clock manually via the pump’s screen and buttons.
3. On the AndroidAPS “Combo” screen, press Refresh.
4. Then go to the Treatments screen, and look for any events in the future. There shouldn’t be many.
   
   * DON'T press "delete treatments in the future"
   * Hit "remove" on all future treatments and duplicate ones. This should invalidate the treatments rather than removing them so they will not be considered for IOB anymore.

5. If the situation on how much IOB/COB is unclear - for safety please disable the loop for at least one DIA and Max-Carb-Time - whatever is bigger.*

6. Continue as normal.

## Accu-Check Insight

* Change to DST is done automatically. No action required.

## Other pumps

* This feature is available since AndroidAPS version 2.2.
* To prevent difficulties the Loop will be deactivated for 3 hours AFTER the DST switch. This is done for safety reasons (IOB too high due to duplicated bolus prior to DST change).
* You will receive a notification on the main screen prior to DST change that loop will be disabled temporarily. This message will appear without beep, vibration or anything.