# Αυτοματοποίηση με τρίτο πρόσωπο του Android Αυτοματοποιημένο App

**Αυτό το άρθρο έχει γραφτεί πριν από την έκδοση 2.5 του AndroidAPS. Υπάρχει plugin [ αυτοματισμού AndroidAPS ](./Automation.rst) με την έκδοση 2.5 του AndroidAPS. Για μερικούς, αυτό εδώ μπορεί να είναι ακόμα χρήσιμο, αλλά θα πρέπει να χρησιμοποιείται μόνο από προχωρημένους χρήστες.**

Δεδομένου ότι το AndroidAPS είναι ένα σύστημα υβριδικού κλειστού κυκλώματος, είναι απαραίτητη κάποια αλληλεπίδραση με το χρήστη (π.χ. πείτε στο κύκλωμα ότι περπατάτε, τρώτε, ξαπλώνετε στον καναπέ...). Οι συχνές είσοδοι χειροκίνητων πληροφοριών μπορούν να αυτοματοποιηθούν μέσω εξωτερικών εργαλείων όπως το Automate ή το IFTTT για την επέκταση της πρόσφατης λειτουργικότητας του AndroidAPS.

## Android Automate App

Η δωρεάν εφαρμογή Android ™ Automate σάς επιτρέπει να αυτοματοποιήσετε διάφορες εργασίες στο smartphone σας. Create your automations with flowcharts, make your device automatically change settings like Bluetooth, Wi-Fi, NFC or perform actions like sending SMS, e-mail, based on your location, the time of day, or any other “event trigger”. Μπορείτε να αυτοματοποιήσετε σχεδόν τα πάντα στη συσκευή σας, Αυτοματοποιήστε ακόμη και τις προσθήκες υποστήριξης για Tasker και Locale.

Χρησιμοποιώντας αυτό το εργαλείο μπορείτε εύκολα να δημιουργήσετε ροές εργασίας για την αυτόματη θεραπεία του σακχαρώδη διαβήτη σας με βάση διάφορες προϋποθέσεις σύμφωνα με την αρχή του «αν αυτό... και αυτό... όχι αυτό..., τότε κάνε αυτό... και αυτό...'. Υπάρχουν χιλιάδες δυνατότητες που μπορείτε να διαμορφώσετε.

Μέχρι τώρα είναι απαραίτητο ** να γίνει κύκλωμα μέσω του προφίλ Nightscout **, καθώς το Automate εκτελεί τις εντολές μέσω HTTP αίτησης απευθείας στον ιστότοπό σας, ο οποίος στη συνέχεια συγχρονίζεται με την εφαρμογή AndroidAPS.

**Offline looping (direct communication between Automate and AndroidAPS app) is not supported yet**, but technologically possible. Ίσως θα υπάρξει λύση στο μέλλον. Εάν έχετε βρει έναν τρόπο να το κάνετε αυτό, παρακαλώ προσθέστε το σε αυτήν την τεκμηρίωση ή επικοινωνήστε με έναν προγραμματιστή.

### Βασικές απαιτήσεις

#### Αυτόματη εφαρμογή

Κάντε λήψη του Android Automate στο Google Play Store ή στη διεύθυνση [ https://llamalab.com/automate/ ](https://llamalab.com/automate/) και εγκαταστήστε το στο smartphone όπου εκτελείται το AndroidAPS.

In Automate, tap on hamburger menu on the upper left of the screen > Settings > Check 'Run on system startup'. Αυτό θα εκτελέσει αυτόματα τις ροές εργασίας σας κατά την εκκίνηση του συστήματος.

![Αυτόματη ζήτηση HTTP](../images/automate-app2.png)

#### AndroidAPS

In AndroidAPS, tap on 3 dots menu on the upper right screen and go to Preferences > NSClient > Connection settings > Uncheck 'Use WiFi connection only' and 'Only if charging' as the automated treating does only work when AndroidAPS has an actual nightscout connection.

![Προτιμήσεις σύνδεσης Nightscout](../images/automate-aaps1.jpg)

In AndroidAPS, tap on 3 dots menu on the upper right screen and go to Preferences > NSClient > Advanced Settings > Uncheck 'NS upload only (disabled sync)' and 'No upload to NS'

![Προτιμήσεις λήψεων Nightscout](../images/automate-aaps2.jpg)

### Παραδείγματα ροής εργασίας

#### Παράδειγμα 1: Αν εντοπιστεί δραστηριότητα (π.χ. περπάτημα ή τρέξιμο), τότε ορίστε ένα υψηλό TT. Και αν τελειώσει η δραστηριότητα, περιμένετε 20 λεπτά και στη συνέχεια ακυρώστε το TT

Αυτή η ροή εργασίας θα ακούει τους αισθητήρες smartphone (βηματόμετρο, αισθητήρα βαρύτητας...) που ανιχνεύει τη συμπεριφορά της δραστηριότητας. If there is recent activity like walking, running or riding a bicycle present, then Automate will set a user specified high temporary target for the user specified time. Εάν λήξει η δραστηριότητα, το smartphone σας θα εντοπίσει αυτό, περιμένετε 20 λεπτά και στη συνέχεια ορίστε τον στόχο πίσω στην κανονική τιμή του προφίλ.

Κάντε λήψη του αυτοματοποιημένου σεναρίου [ https://llamalab.com/automate/community/flows/27808 ](https://llamalab.com/automate/community/flows/27808).

Επεξεργαστείτε το sling πιέζοντας το τροποποιημένο μολύβι> Διάγραμμα ροής

![Αυτόματο sling](../images/automate-app3.png)

Προσαρμόστε τη ροή εργασίας σύμφωνα με τις επιθυμίες σας ως εξής:

![Αυτόματο sling](../images/automate-app6.png)

1. = Ρυθμίστε το υψηλό TT
2. = Go back to normal target 20 minutes after the end of activity

1 ![Αυτόματο sling](../images/automate-app1.png)

2 ![Αυτόματο sling](../images/automate-app5.png)

Διεύθυνση URL αιτήματος: Η διεύθυνση URL NS σας με λήξη /api/v1/treatments.json (π.χ. https://my-cgm.herokuapp.com/api/v1/treatments.json)

Αίτημα περιεχομένου:

* υψηλός στοχος / χαμηλός στόχος: Η υψηλή τιμή TT (πάνω και κάτω πρέπει να είναι η ίδια τιμή)
* διάρκεια: Η διάρκεια του υψηλού TT (μετά την πάροδο του χρόνου θα αντιστραφεί ο κανονικός στόχος προφίλ εκτός αν η δραστηριότητα συνεχιστεί). 
* μυστικό: Το hash σας API SHA1. Δεν είναι το κλειδί API σας! Μπορείτε να μετατρέψετε το κλειδί API σας σε μορφή SHA1 στο [ http://www.sha1-online.com/ ](http://www.sha1-online.com/)

Αποθήκευση: Πατήστε "Τέλος" στο γάντζο

Ξεκινήστε το sling: Πατήστε στο κουμπί Αναπαραγωγή

#### Παράδειγμα 2: Εάν το xDrip + ειδοποιεί για υψηλό συναγερμό BG, τότε ορίστε ένα χαμηλό TT για ... λεπτά.

Αυτή η ροή εργασίας θα ακούσει το κανάλι ειδοποίησης xDrip +. If there is triggered a user specified xDrip+ high BG alert, then Automate will set a user specified low temporary target for the user specified time. Μετά από λίγο, μια άλλη πιθανή προειδοποίηση θα επεκτείνει τη διάρκεια του χαμηλού TT.

##### xDrip+

Αρχικά, πρέπει να προσθέσετε μια ειδοποίηση υψηλού BG στο xDrip + ως εξής:

![xDrip + ρυθμίσεις ειδοποίησης](../images/automate-xdrip1.png)

Alert name: (Pay attention on it!) This name is essential for firing the trigger. It should be unmistakable and not similar to other alert names. Παράδειγμα: 'συναγερμός 180' δεν πρέπει να υπάρχει δίπλα στο 'συναγερμός 80'.

Κατώτατο όριο: τιμή BG που πρέπει να πυροδοτήσει την υψηλή ειδοποίηση.

Προεπιλεγμένη αναβολή: Εισαγάγετε τη διάρκεια που σχεδιάζετε να ορίσετε για το χαμηλό σας TT εδώ, καθώς η ειδοποίηση θα επανέλθει και ίσως να παραταθεί η διάρκεια του χαμηλού TT.

![xDrip + ρυθμίσεις ειδοποίησης](../images/automate-xdrip2.png)

##### Αυτοματοποιήστε

Δεύτερον, κατεβάστε το σενάριο Automate [ https://llamalab.com/automate/community/flows/27809 ](https://llamalab.com/automate/community/flows/27809).

Επεξεργαστείτε το sling πιέζοντας το τροποποιημένο μολύβι> Διάγραμμα ροής

![Αυτόματο sling](../images/automate-app3.png)

Προσαρμόστε τη ροή εργασίας σύμφωνα με τις επιθυμίες σας ως εξής:

Εντός της "τοποθεσίας ειδοποίησης";, πρέπει να ρυθμίσετε το "Τίτλο" στο όνομα της ειδοποίησης xDrip + που θα έπρεπε να ενεργοποιήσει την ειδοποιήσει και να προσθέσει μια * μεταβλητή πριν και μετά από αυτό το όνομα.

![Αυτόματο sling](../images/automate-app7.png)

![Αυτόματο sling](../images/automate-app4.png)

Διεύθυνση URL αιτήματος: Η διεύθυνση URL NS σας με λήξη /api/v1/treatments.json (π.χ. https://my-cgm.herokuapp.com/api/v1/treatments.json)

Αίτημα περιεχομένου:

* υψηλός στόχος / Χαμηλός στόχος: Η χαμηλή τιμή TT (πάνω και κάτω πρέπει να είναι η ίδια τιμή)
* διάρκεια: Η διάρκεια του χαμηλού TT (μετά από το χρόνο θα επιστρέψει ο κανονικός στόχος προφίλ). Συνιστάται να χρησιμοποιείτε την ίδια διάρκεια όπως στην xDrip + ειδοποίηση Standard snooze'
* μυστικό: Το hash σας API SHA1. Δεν είναι το κλειδί API σας! Μπορείτε να μετατρέψετε το κλειδί API σας σε μορφή SHA1 στο [ http://www.sha1-online.com/ ](http://www.sha1-online.com/)

Αποθήκευση: Πατήστε "Τέλος" στο γάντζο

Ξεκινήστε το sling: Πατήστε στο κουμπί Αναπαραγωγή

#### Παράδειγμα 3: Ας προστεθεί από εσάς!!!

Προσθέστε επιπλέον ροές εργασίας μεταφορτώντας το αρχείο .flo στην αυτοματοποίηση κοινότητας (με τη λέξη-κλειδί 'Nightscout') και περιγράψτε την εδώ κάνοντας [ pull request σε εναποθετήριο AndroidAPSdocs ](../make-a-PR.md).

## Αν αυτό, τότε (IFTTT)

Μη διστάσετε να προσθέσετε ένα ''πως να το κάνεις'' μέσω προσωπικού μηνύματος...