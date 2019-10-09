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

### Επιλογή 2: Διαγραφή ιστορικού αντλίας

* Απενεργοποιήστε την "Αυτόματη ημερομηνία και ώρα" στις ρυθμίσεις του τηλεφώνου σας (αλλαγή σε χειροκίνητης ζώνη ώρας)

Όταν βγείτε από το αεροπλάνο:

* κλείστε την αντλία
* αλλάξτε ώρα στο τηλέφωνο
* κλείστε το τηλέφωνο, ενεργοποιείστε την αντλία
* clear history in pump
* change time in pump
* turn on phone
* let phone connect to the pump and fine-tune time

## Combo

## Insight

The driver automatically adjusts the time of the pump to the time of the phone.

The Insight also records the history entries in which moment time was changed and from which (old) time to which (new) time. So the correct time can be determined in AAPS despite the time change.

It may cause inaccuracies in the TDDs. But it shouldn't be a problem.

So the Insight user doesn't have to worry about timezone changes and time changes. There is one exception to this rule: The Insight pump has a small internal battery to power time etc. while you are changing the "real" battery. If changing battery takes to long this internal battery runs out of energy, the clock is reset and you are asked to enter time and date after inserting a new battery. In this case all entries prior to the battery change are skiped in calculation in AAPS as the correct time cannot be identified properly.

# Time adjustment daylight savings time (DST)

Depending on pump and CGM setup, jumps in time can lead to problems. With the Combo e.g. the pump history gets read again and it would lead to duplicate entries. So please do the adjustment while awake and not during the night.

If you bolus with the calculator please don't use COB and IOB unless you made sure they are absolutely correct - better don't use them for a couple of hours after DST switch.

## Accu-Chek Combo

AndroidAPS will issue an alarm if time between pump and phone differs to much. In case of DST time adjustment this would be in the middle of the night. To prevent this and enjoy your sleep instead follow these steps:

1) Switch off automatic time zone in your phone. 2) Find a time zone that has the target time but doesn't use DST. For Central European Time (CET) this could be "Brazzaville" (Kongo). Change your phone's timezone to Kongo. 3) In AndroidAPS refresh you pump. 4) Check the Treatments tab... If you see duplicate treatments:

* DON'T press "delete future treatments"
* Hit "remove" on all future treatments and duplicate ones. This should invalidate the treatments rather than removing them so they will not be considered for IOB anymore. 5) If the state is unclear - please disable the loop for at least one DIA and Max-Carb-Time - whatever is bigger.

A good time to make this switch would be with low IOB. E.g. an hour before a meal.

## Accu-Chek Insight

* Change to DST is done automatically. No action required.

## Other pumps - new as of AAPS version 2.2

**You have to update AAPS to use this feature!**

* To prevent difficulties the Loop will be deactivated for 3 hours AFTER the DST switch. This is done for safety reasons (IOB too high due to duplicated bolus prior to DST change).
* You will receive a notification on the main screen 24 hours prior to DST change that loop will be disabled temporarily. This message will appear without beep, vibration or anything.