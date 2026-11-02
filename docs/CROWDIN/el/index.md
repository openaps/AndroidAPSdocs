# Καλώς ήρθατε στην τεκμηρίωση του AAPS

![image](./images/basic-outline-of-AAPS.png)

```{admonition} Latest Release
:class: note

31 October 2026: Version 4.0.0 is out. Δείτε τις [Σημειώσεις έκδοσης](#latestrelease) για να μάθετε τι νέο υπάρχει και ακολουθήστε τις οδηγίες του [οδηγού ενημέρωσης](./Maintenance/UpdateToNewVersion.md) για να κάνετε την ενημέρωση.

```

Το Android APS (**AAPS**) είναι μια εφαρμογή ανοιχτού κώδικα για άτομα με διαβήτη που χρειάζονται ινσουλίνη. Είναι ένα σύστημα τεχνητού παγκρέατος (APS) που λειτουργεί σε τηλέφωνα Android. Το **AAPS** χρησιμοποιεί έναν αλγόριθμο λογισμικού του OpenAPS και προσπαθεί να κάνει ό,τι κάνει ένα πραγματικό πάγκρεας: να κρατά τη γλυκόζη αίματος σε υγιή όρια με αυτόματη χορήγηση ινσουλίνης. Για να χρησιμοποιήσετε το **AAPS** χρειάζεστε **τρεις** συμβατές συσκευές: **(1)** ένα τηλέφωνο Android, **(2)** ένα σύστημα συνεχούς μέτρησης γλυκόζης (CGM) και **(3)** μια αντλία ινσουλίνης με έγκριση FDA/CE. Μπορείτε επίσης να προσθέσετε **(4)** υπηρεσίες cloud για να ελέγχετε το **AAPS** από απόσταση, να μοιράζεστε τα δεδομένα σας και να τα αποθηκεύετε σε διακομιστή αναφορών, και **(5)** ένα έξυπνο ρολόι.

Αυτή η τεκμηρίωση εξηγεί πώς να ρυθμίσετε και να χρησιμοποιήσετε το **AAPS**. Μπορείτε να κινηθείτε στην τεκμηρίωση του **AAPS** είτε από το μενού αριστερά (και τη χρήσιμη λειτουργία αναζήτησης **Search docs**), είτε από το [ευρετήριο](#index-aaps-documentation-index) στο κάτω μέρος αυτής της σελίδας.

## Επισκόπηση της τεκμηρίωσης του AAPS («η τεκμηρίωση»)

Στην ενότητα **1) Ξεκινώντας**, η [Εισαγωγή στα APS και AAPS](Getting-Started/Introduction.md) εξηγεί τη γενική ιδέα και τι κάνει ένα σύστημα τεχνητού παγκρέατος (APS). Εξηγεί γενικά τι είναι το κύκλωμα, γιατί δημιουργήθηκε το **AAPS**, συγκρίνει το **AAPS** με άλλα συστήματα και μιλά για την ασφάλεια. Δίνει συμβουλές για το πώς να μιλήσετε για το **AAPS** με την ιατρική σας ομάδα, εξηγεί γιατί πρέπει να δημιουργήσετε μόνοι σας την εφαρμογή **AAPS** αντί απλώς να την κατεβάσετε, και δείχνει πώς συνδέονται συνήθως τα μέρη ενός συστήματος **AAPS**. Μιλά επίσης για την προσβασιμότητα και για το ποιοι μπορεί να ωφεληθούν από το **AAPS**.

Η σελίδα [Προετοιμασία για την έναρξη με το AAPS](./Getting-Started/PreparingForAaps.md) δίνει περισσότερες λεπτομέρειες για την ασφάλεια και για τα τηλέφωνα, τα CGM (συστήματα συνεχούς μέτρησης γλυκόζης) και τις αντλίες ινσουλίνης που είναι συμβατά με το **AAPS**. Δίνει μια επισκόπηση της διαδικασίας που θα ακολουθήσετε και ένα κατά προσέγγιση χρονοδιάγραμμα μέχρι να χρησιμοποιείτε όλες τις λειτουργίες του **AAPS**. Αυτή η ενότητα σας προετοιμάζει τεχνικά, ώστε να στήσετε το σύστημα **AAPS** σας όσο πιο γρήγορα και αποτελεσματικά γίνεται. The subsection [Compatible CGMs](./Getting-Started/CompatiblesCgms.md) explains how to optimize your CGM setup and which smoothing options are best.

Τώρα που καταλαβαίνετε καλά τη διαδικασία, μπορείτε να αρχίσετε να στήνετε το κύκλωμα **AAPS** σας.

Η ενότητα **2) Δημιουργία της εφαρμογής** εξηγεί γιατί πρέπει να δημιουργήσετε μόνοι σας την εφαρμογή **AAPS** αντί απλώς να την κατεβάσετε. Σας οδηγεί βήμα προς βήμα στη [δημιουργία της](./SettingUpAaps/BuildingAaps.md) (μέσω browser, με το Android Studio ή από τη γραμμή εντολών) και μετά στη μεταφορά και εγκατάστασή της στο τηλέφωνό σας. Ξεκινά με ένα προαιρετικό βήμα: τη δημιουργία ενός [ξεχωριστού λογαριασμού Google](./UsefulLinks/DedicatedGoogleAccountForAaps.md) για τα builds και τα αντίγραφα ασφαλείας σας. Εξηγεί επίσης την [επαλήθευση προγραμματιστή Android](#android-developer-verification), μια αλλαγή που φέρνει η Google από τον Σεπτέμβριο 2026 και που επηρεάζει τον τρόπο εγκατάστασης των εφαρμογών που δημιουργείτε μόνοι σας.

Η ενότητα **3) Ρύθμιση του διακομιστή αναφορών** εξηγεί πώς να επιλέξετε και να [ρυθμίσετε τον διακομιστή αναφορών σας](./SettingUpAaps/SettingUpTheReportingServer.md) (Nightscout ή Tidepool), ώστε να ελέγχετε και να μοιράζεστε τα δεδομένα σας.

Η ενότητα **4) [Διαμόρφωση του AAPS](./SettingUpAaps/SetupWizard.md)** εξηγεί τη ρύθμιση της εφαρμογής **AAPS** με τον Οδηγό εγκατάστασης, τη σύνδεσή της με την εφαρμογή CGM σας και με μια πραγματική ή εικονική αντλία ινσουλίνης, καθώς και τη σύνδεση του **AAPS** με τον διακομιστή αναφορών σας. Μετά γνωρίζετε όλα όσα μπορεί να κάνει το **AAPS**, μέσα από μια ασφαλή διαδικασία, βήμα προς βήμα, με προσεκτικό ρυθμό. Έτσι εξασφαλίζεται ότι εσείς (ή το παιδί σας) γνωρίζετε καλά και νιώθετε άνετα με όλα τα επίπεδα και τις ρυθμίσεις των μενού, πριν περάσετε στην επόμενη φάση, που συνήθως λέγεται επόμενο «Βήμα». Συνεχίζετε έτσι μέχρι να έχετε αρκετή εμπειρία για να αρχίσετε να χρησιμοποιείτε τις πιο προχωρημένες επιλογές της εφαρμογής. Αυτά τα Βήματα είναι σχεδιασμένα έτσι ώστε να ξεκλειδώνουν σταδιακά περισσότερες δυνατότητες του **AAPS** και να περνάτε από το Ανοιχτό Κύκλωμα στο Κλειστό Κύκλωμα.

Η ενότητα **5) [Η καθημερινή ζωή με το AAPS](./DailyLifeWithAaps/AapsScreens.md)** εξηγεί τις βασικές λειτουργίες του **AAPS**, για να σας βοηθήσει να χρησιμοποιείτε (και να προσαρμόζετε) το **AAPS**. Αυτό περιλαμβάνει την κατανόηση των οθονών, των ενεργών υδατανθράκων (COB), της ευαισθησίας, της Δυναμικής ISF, της αλλαγής προφίλ, των προσωρινών στόχων, των εκτεταμένων υδατανθράκων (eCarbs), των αυτοματισμών και τον [έλεγχο των δεδομένων σας](./Maintenance/Reviewing.md) στο ιστορικό και στα στατιστικά. Καλύπτει επίσης συχνά θέματα, όπως πώς να χειρίζεστε διάφορα είδη γευμάτων, τις αλλαγές καθετήρα και αισθητήρα, τις ενημερώσεις του τηλεφώνου, την αλλαγή θερινής ώρας, τα [ταξίδια με το AAPS](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) και τον αθλητισμό. Συνηθισμένες ερωτήσεις και απαντήσεις θα βρείτε στην ενότητα αντιμετώπισης προβλημάτων.

Η ενότητα **6) [Απομακρυσμένες λειτουργίες του AAPS](./RemoteFeatures/RemoteControl.md)** δείχνει ένα πραγματικά δυνατό σημείο του **AAPS**. Υπάρχουν πολλοί τρόποι για να στέλνετε εντολές από απόσταση στο **AAPS** ή απλώς να παρακολουθείτε τα δεδομένα του. Αυτό είναι εξίσου χρήσιμο για φροντιστές που θέλουν να χρησιμοποιήσουν το **AAPS** για ανήλικους, και για ενήλικες με διαβήτη που θέλουν να βλέπουν τη γλυκόζη τους (και άλλα δεδομένα) πιο εύκολα και όχι μόνο στο τηλέφωνο (σε ρολόι, στο αυτοκίνητο _κ.λπ._), ή θέλουν να βλέπουν τα δεδομένα και αγαπημένα τους πρόσωπα. Αυτή η ενότητα δίνει επίσης οδηγίες για το Android Auto, ώστε να βλέπετε τη γλυκόζη μέσα στο αυτοκίνητο.

Η ενότητα **7) [Έξυπνα ρολόγια Wear OS](./WearOS/BuildingAapsWearOS.md)** δίνει πληροφορίες και οδηγίες για να χρησιμοποιήσετε ένα έξυπνο ρολόι Android **Wear OS** με τα ειδικά watchface του **AAPS** ή με προσαρμοσμένα watchface, είτε ως τηλεχειριστήριο του τηλεφώνου σας είτε μόνο ως οθόνη ενδείξεων.


Η ενότητα **8) [Συντήρηση του AAPS](./Maintenance/ExportImportSettings.md)** εξηγεί πώς να εξάγετε και να κρατάτε αντίγραφα ασφαλείας των ρυθμίσεών σας (πολύ σημαντικό αν χάσετε ή σπάσετε το τηλέφωνό σας), δίνει τις σημειώσεις της τελευταίας έκδοσης, περιγράφει πώς να ενημερώσετε το **AAPS** και εξηγεί τι γίνεται όταν μια έκδοση φτάνει στο τέλος υποστήριξης. Μπορείτε να περιμένετε μία νέα έκδοση και 2–3 υποχρεωτικές ενημερώσεις τον χρόνο. Όπως με κάθε λογισμικό, πρέπει να κάνετε αυτές τις ενημερώσεις, γιατί διορθώνουν μικρά σφάλματα και βελτιώνουν το **AAPS**. Υπάρχει ειδική ενότητα αντιμετώπισης προβλημάτων για τις «ενημερώσεις» με τις συνηθισμένες ερωτήσεις.

Η ενότητα **9) [Βοήθεια και αντιμετώπιση προβλημάτων](GettingHelp/WhereCanIGetHelp.md)** σας δείχνει τα καλύτερα μέρη για να βρείτε γενική βοήθεια για το **AAPS**. Είναι το ένα μέρος όπου πηγαίνετε όταν κάτι δεν λειτουργεί: η σελίδα [Αντιμετώπιση προβλημάτων](GettingHelp/GeneralTroubleshooting.md) συγκεντρώνει, ανά θέμα, τις λύσεις στα πιο συνηθισμένα προβλήματα, και οι [Συχνές Ερωτήσεις](UsefulLinks/FAQ.md) απαντούν σε συχνές απορίες. Αυτό είναι πολύ σημαντικό, για να μπορείτε να έρθετε σε επαφή με άλλους όσο πιο γρήγορα γίνεται, να λύσετε απορίες και να αποφύγετε τα συνηθισμένα λάθη. Πολλοί άνθρωποι χρησιμοποιούν ήδη με επιτυχία το **AAPS**, αλλά όλοι κάποια στιγμή έχουν μια ερώτηση που δεν μπορούν να λύσουν μόνοι τους. Επειδή οι χρήστες είναι πολλοί, οι απαντήσεις στις ερωτήσεις έρχονται συνήθως πολύ γρήγορα, συχνά μέσα σε λίγες ώρες. Μη διστάζετε να ζητήσετε βοήθεια. Δεν υπάρχουν χαζές ερωτήσεις! Ενθαρρύνουμε τους χρήστες κάθε επιπέδου εμπειρίας να κάνουν όσες ερωτήσεις χρειάζονται, ώστε να ξεκινήσουν με ασφάλεια. Αυτή η ενότητα περιέχει γενική αντιμετώπιση προβλημάτων για το **AAPS** και το **AAPSClient** (μια συνοδευτική εφαρμογή παρακολούθησης). Εξηγεί επίσης πώς να στείλετε τα δεδομένα του **AAPS** σας (αρχεία καταγραφής) στους προγραμματιστές για έλεγχο, αν πιστεύετε ότι υπάρχει τεχνικό πρόβλημα στο **AAPS**.

Η ενότητα **10)** εξηγεί τις **[Προχωρημένες επιλογές του AAPS](./AdvancedOptions/FullClosedLoop.md)**, όπως πώς να περάσετε από τη χρήση του **AAPS** ως υβριδικού κλειστού κυκλώματος (με bolus για τα γεύματα _κ.λπ._) σε πλήρως κλειστό κύκλωμα (χωρίς bolus), πώς να [βελτιώσετε το προφίλ σας](./GettingHelp/ProfileTuning.md) και να χρησιμοποιήσετε το Autotune, και περιγράφει τις λειτουργίες ανάπτυξης (development) και μηχανικού (engineering). Οι περισσότεροι χρήστες τα πάνε μια χαρά με την κύρια έκδοση («Master») του **AAPS** χωρίς να ασχοληθούν με αυτές τις επιλογές. Αυτή η ενότητα είναι για χρήστες που έχουν ήδη καλό έλεγχο και θέλουν να βελτιώσουν κι άλλο το σύστημά τους.

In section **11) [How to support AAPS](SupportingAaps/HowCanIHelp.md)** we provide information so that you can support this project. Μπορείτε να δωρίσετε χρήματα, εξοπλισμό ή τις γνώσεις σας. You can suggest/make changes to the documentation yourself, help with [translation of the documentation](SupportingAaps/Translations.md) and provide your data through the Open Humans project.

Η ενότητα **12) Πηγές** περιέχει αρχειοθετημένη ή επιπλέον τεκμηρίωση. Περιλαμβάνει μια υποενότητα για [γιατρούς](UsefulLinks/ClinicianGuideToAaps.md) που ενδιαφέρονται για τεχνολογία τεχνητού παγκρέατος ανοιχτού κώδικα, όπως το **AAPS**, ή για ασθενείς που θέλουν να μοιραστούν τέτοιες πληροφορίες με τους γιατρούς τους. Αυτό το θέμα καλύπτεται και στην εισαγωγή. Σε αυτή την ενότητα θα βρείτε επίσης περισσότερες πηγές και υλικό για τον διαβήτη και το κύκλωμα. Περιλαμβάνει το [Γλωσσάριο](./UsefulLinks/Glossary.md), μια λίστα με τα ακρωνύμια (ή σύντομες ονομασίες) που χρησιμοποιούνται σε όλο το **AAPS**. Εδώ θα βρείτε, για παράδειγμα, τι σημαίνουν οι όροι ISF ή TT.


 ### Θέλετε να ξεκινήσετε με το **AAPS**; Διαβάστε περισσότερα για το **AAPS** στην [Εισαγωγή στα APS και AAPS](Getting-Started/Introduction.md).

```{admonition} SAFETY NOTICE
:class: danger
Η ασφάλεια του **AAPS** βασίζεται στις λειτουργίες ασφαλείας του υλικού σας (τηλέφωνο, αντλία, CGM). Χρησιμοποιείτε μόνο αντλία ινσουλίνης και CGM που λειτουργούν πλήρως και έχουν έγκριση FDA/CE. Μη χρησιμοποιείτε χαλασμένες, τροποποιημένες ή αυτοσχέδιες αντλίες ινσουλίνης ή δέκτες CGM. Χρησιμοποιείτε μόνο γνήσια αναλώσιμα (εισαγωγείς, καθετήρες και δεξαμενές ινσουλίνης) που έχει εγκρίνει ο κατασκευαστής για χρήση με την αντλία και το CGM σας. Αν χρησιμοποιείτε αναλώσιμα που δεν έχουν ελεγχθεί ή έχουν τροποποιηθεί, μπορεί να προκύψουν ανακρίβειες και λάθη στη δόση ινσουλίνης, με σοβαρό κίνδυνο για τον χρήστη. 

Μη χρησιμοποιείτε το **AAPS** αν παίρνετε αναστολείς SGLT-2 (γλιφλοζίνες), γιατί αυτοί μειώνουν τη γλυκόζη αίματος. Αυξάνετε τον κίνδυνο διαβητικής κετοξέωσης (DKA) λόγω μειωμένης χορήγησης ινσουλίνης και τον κίνδυνο υπογλυκαιμίας λόγω χαμηλότερης γλυκόζης αίματος. 
```

```{admonition} Disclaimer
:class: note

- Όλες οι πληροφορίες και ο κώδικας που περιγράφονται εδώ είναι μόνο για ενημέρωση και εκπαίδευση. Χρησιμοποιείτε το [Nightscout](https://nightscout.github.io/) και το **AAPS** με δική σας ευθύνη και μην χρησιμοποιείτε τις πληροφορίες ή τον κώδικα για να παίρνετε ιατρικές αποφάσεις. Το Nightscout δεν πραγματοποιεί επί του παρόντος προσπάθεια συμμόρφωσης με το HIPAA. 
- Η χρήση του κώδικα από το github.com είναι χωρίς εγγύηση ή επίσημη υποστήριξη οποιασδήποτε μορφής. Για λεπτομέρειες, διαβάστε την άδεια χρήσης (LICENSE) αυτού του αποθετηρίου.
- Όλα τα ονόματα των προϊόντων και των εταιρειών, τα εμπορικά σήματα, τα κατατεθέντα εμπορικά σήματα και τα καταχωρημένα λογότυπα υπηρεσίας αποτελούν ιδιοκτησία των αντίστοιχων κατόχων τους. Τα χρησιμοποιούμε μόνο για ενημέρωση. Αυτό δεν σημαίνει ότι έχουμε κάποια σχέση με αυτούς ή ότι μας υποστηρίζουν.

Το **AAPS** δεν έχει καμία σχέση με τις παρακάτω εταιρείες και δεν υποστηρίζεται από αυτές: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/), [Medtronic](https://www.medtronic.com/), [Diaconn](https://www.diaconn.com/en/index.html), [EOFlow](http://www.eoflow.com/), [MicroTech Medical (Equil)](https://www.microtechmd.com/), [Medtrum](https://www.medtrum.com/), [Senseonics (Eversense)](https://www.senseonics.com/), [i-SENS (CareSens)](https://i-sens.com/), [POCTech](https://poctechcorp.com/en/), [Ottai](https://ottai.com/) ή [Syai](https://www.syai.com/).

```

(index-aaps-documentation-index)=

## Ευρετήριο της τεκμηρίωσης του AAPS

```{toctree}
:caption: Χρήση αυτής της τεκμηρίωσης

Αλλαγή γλώσσας και έκδοσης <./NavigateDoc/ChangeLanguageVersion.md>
Αναζήτηση στην τεκμηρίωση <./NavigateDoc/SearchDoc.md>
Ενημερώσεις και αλλαγές της τεκμηρίωσης <./Maintenance/DocumentationUpdate.md>
```
```{toctree}
:caption: 1) Ξεκινώντας

Εισαγωγή στα APS και AAPS <./Getting-Started/Introduction.md>
Προετοιμασία για την έναρξη με το AAPS <./Getting-Started/PreparingForAaps.md>
Επισκόπηση των εξαρτημάτων <./Getting-Started/ComponentOverview.md>
- Συμβατές αντλίες <./Getting-Started/CompatiblePumps.md>
- Συμβατά CGM <./Getting-Started/CompatiblesCgms.md>
- Τηλέφωνα <./Getting-Started/Phones.md>
- Έξυπνα ρολόγια και AAPS <./Getting-Started/Watches.md>
```

```{toctree}
:caption: 2) Δημιουργία της εφαρμογής

Ξεχωριστός λογαριασμός Google για το AAPS (προαιρετικό) <./UsefulLinks/DedicatedGoogleAccountForAaps.md>
Δημιουργία του AAPS <./SettingUpAaps/BuildingAaps.md>
- Δημιουργία μέσω browser <./SettingUpAaps/BrowserBuild.md>
- Δημιουργία με το Android Studio <./SettingUpAaps/ComputerBuild.md>
- Οδηγίες δημιουργίας από τη γραμμή εντολών <./SettingUpAaps/CLIBuild.md>
Μεταφορά και εγκατάσταση του AAPS στο τηλέφωνό σας <./SettingUpAaps/TransferringAndInstallingAaps.md>
```
```{toctree}
:caption: 3) Ρύθμιση του διακομιστή αναφορών

Ρύθμιση του διακομιστή αναφορών <./SettingUpAaps/SettingUpTheReportingServer.md>
- Nightscout <./SettingUpAaps/Nightscout.md>
- Tidepool <./SettingUpAaps/Tidepool.md>
```
```{toctree}
:caption: 4) Configure AAPS

Setup Wizard <./SettingUpAaps/SetupWizard.md>
Your AAPS Profile <./SettingUpAaps/YourAapsProfile.md>
Change AAPS configuration <./SettingUpAaps/ChangeAapsConfiguration.md>
- Configuration (Config Builder) <./SettingUpAaps/ConfigBuilder.md>
- Settings <./SettingUpAaps/Preferences.md>
Completing the objectives <./SettingUpAaps/CompletingTheObjectives.md>
```

```{toctree}
:caption: 5) Η καθημερινή ζωή με το AAPS

Οθόνες του AAPS <./DailyLifeWithAaps/AapsScreens.md>
Βασικές λειτουργίες του AAPS <./DailyLifeWithAaps/KeyAapsFeatures.md>
Υπολογισμός COB (ενεργοί υδατάνθρακες) <./DailyLifeWithAaps/CobCalculation.md>
Ανίχνευση ευαισθησίας <./DailyLifeWithAaps/SensitivityDetectionAndCob.md>
Δυναμική ISF (DynISF) <./DailyLifeWithAaps/DynamicISF.md>
Αλλαγή προφίλ και ποσοστό προφίλ <./DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md>
Προσωρινοί στόχοι <./DailyLifeWithAaps/TempTargets.md>
Εκτεταμένοι υδατάνθρακες / "eCarbs" <./DailyLifeWithAaps/ExtendedCarbs.md>
Γρήγορος Οδηγός (bolus με ένα πάτημα) <./DailyLifeWithAaps/QuickWizards.md>
Σενάρια (έτοιμες ρυθμίσεις για καταστάσεις) <./DailyLifeWithAaps/Scenes.md>
Αυτοματισμός <./DailyLifeWithAaps/Automations.md>
QuickLaunch (γραμμή γρήγορων ενεργειών στην επισκόπηση) <./DailyLifeWithAaps/QuickLaunch.md>
Widgets αρχικής οθόνης <./DailyLifeWithAaps/Widgets.md>
Τρόφιμα (η βάση τροφίμων σας) <./DailyLifeWithAaps/Food.md>
Καθολική αναζήτηση <./DailyLifeWithAaps/GlobalSearch.md>
Έλεγχος των δεδομένων σας <./Maintenance/Reviewing.md>
Το AAPS για παιδιά <./DailyLifeWithAaps/AapsForChildren.md>
Αντλίες και καθετήρες <./DailyLifeWithAaps/PumpsAndCannulas.md>
Αλλαγή ζώνης ώρας και θερινή ώρα <./DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md>

```

```{toctree}
:caption: 6) Απομακρυσμένες λειτουργίες του AAPS

Απομακρυσμένη παρακολούθηση <./RemoteFeatures/RemoteMonitoring.md>
Παρακολούθηση του AAPS (χωρίς αλληλεπίδραση με το σύστημα AAPS) <./RemoteFeatures/FollowingOnly.md>
Android Auto <./RemoteFeatures/AndroidAuto.md>
Απομακρυσμένος έλεγχος του AAPS <./RemoteFeatures/RemoteControl.md>
Η εφαρμογή AAPSClient <./RemoteFeatures/AapsClient.md>
Έλεγχος κύριας συσκευής ↔ πελάτη (υπογεγραμμένος απομακρυσμένος έλεγχος) <./RemoteFeatures/ClientMasterControl.md>
Εντολές SMS <./RemoteFeatures/SMSCommands.md>

```
```{toctree}
:caption: 7) Έξυπνα ρολόγια Wear OS

Δημιουργία της εφαρμογής AAPS για Wear <./WearOS/BuildingAapsWearOS.md>
Ρύθμιση του AAPS στο ρολόι Wear OS σας <./WearOS/WearOsSmartwatch.md>
Χειρισμός του AAPS από το έξυπνο ρολόι Wear OS <./RemoteFeatures/RemoteControlWearOS.md>
Έγγραφο αναφοράς για το Custom Watchface <./ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md>
Ιστότοπος ανταλλαγής προσαρμοσμένων watchface <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: 8) Maintenance of AAPS

Export/Import Settings <./Maintenance/ExportImportSettings.md>
AAPS Release Notes <./Maintenance/ReleaseNotes.md>
What changed in AAPS v4 <./Maintenance/V4Changes.md>
Updating to a new version of AAPS <./Maintenance/UpdateToNewVersion.md>
- Browser Update (fork, AAPS-CI) <./Maintenance/UpdateBrowserBuild.md>
- Android Studio Update <./Maintenance/UpdateComputerBuild.md>
End of life <./Maintenance/EndOfLife.md>

```

```{toctree}
:caption: 9) Βοήθεια και αντιμετώπιση προβλημάτων

Πού μπορώ να βρω βοήθεια; <./GettingHelp/WhereCanIGetHelp.md>
Αντιμετώπιση προβλημάτων <./GettingHelp/GeneralTroubleshooting.md>
- Προβλήματα σχετικά με το Bluetooth <./GettingHelp/BluetoothTroubleshooting.md>
- Αντιμετώπιση προβλημάτων του NSClient <./GettingHelp/TroubleshootingNsClient.md>
- Αντιμετώπιση προβλημάτων του Android Studio <./GettingHelp/TroubleshootingAndroidStudio.md>
- Δημιουργία μέσω browser: αντιμετώπιση προβλημάτων <./GettingHelp/BrowserBuildTroubleshooting.md>
- Επανεγκατάσταση του AAPS με νέο keystore <./GettingHelp/ReinstallAaps.md>
- Πρόσβαση σε αρχεία καταγραφής <./GettingHelp/AccessingLogFiles.md>
Συχνές Ερωτήσεις <./UsefulLinks/FAQ.md>
```

```{toctree}
:caption: 10) Προχωρημένες επιλογές του AAPS

Πλήρως κλειστό κύκλωμα <./AdvancedOptions/FullClosedLoop.md>
Βελτίωση του προφίλ του AAPS <./GettingHelp/ProfileTuning.md>
Autotune <./AdvancedOptions/Autotune.md>
Συγκέντρωση ινσουλίνης <./AdvancedOptions/InsulinConcentration.md>
Κλάδος ανάπτυξης (dev) <./AdvancedOptions/DevBranch.md>
Δημιουργία μέσω browser: cherry-pick ενός commit <./AdvancedOptions/BrowserBuildCherryPick.md>

```
```{toctree}
:caption: 11) Πώς να υποστηρίξετε το AAPS

Πώς να βοηθήσετε το AAPS <./SupportingAaps/HowCanIHelp.md>
Πώς να επεξεργαστείτε την τεκμηρίωση <./SupportingAaps/HowToEditTheDocs.md>
Πώς να μεταφράσετε κείμενα της εφαρμογής AAPS ή της τεκμηρίωσης <./SupportingAaps/Translations.md>
Κατάσταση μετάφρασης της εφαρμογής και της τεκμηρίωσης <./SupportingAaps/StateOfTranslations.md>
Ανέβασμα δεδομένων στο Open Humans <./SupportingAaps/OpenHumans.md>

```
```{toctree}
:caption: 12) Πηγές

Γλωσσάριο <./UsefulLinks/Glossary.md>
Χρήσιμοι πόροι για ανάγνωση πριν ξεκινήσετε <./UsefulLinks/BackgroundReading.md>
Για γιατρούς – Γενική εισαγωγή και οδηγός για το AAPS <./UsefulLinks/ClinicianGuideToAaps.md>
```
