# What is a closed loop system with AAPS?

AAPS is an app that acts as an artificial pancreas system (APS) on an Android smartphone. Τι είναι ένα τεχνητό σύστημα παγκρέατος; Είναι ένα πρόγραμμα λογισμικού που στοχεύει να κάνει ό, τι κάνει ένα ζωντανό πάγκρεας: διατηρεί τα επίπεδα σακχάρου στο αίμα μέσα σε υγιή όρια.

Ένα APS δεν μπορεί να κάνει τη δουλειά όπως ένα βιολογικό πάγκρεας, αλλά μπορεί να κάνει τον διαβήτη τύπου 1 ευκολότερο να διαχειριστεί χρησιμοποιώντας συσκευές που είναι εμπορικά διαθέσιμες και λογισμικό που είναι απλό και ασφαλές. Those devices include a continuous glucose monitor (CGM) to tell AAPS about your blood sugar levels and an insulin pump which AAPS controls to deliver appropriate doses of insulin. Η εφαρμογή επικοινωνεί με αυτές τις συσκευές μέσω bluetooth. Κάνει τους υπολογισμούς δόσεων χρησιμοποιώντας έναν αλγόριθμο ή ένα σύνολο κανόνων που έχουν αναπτυχθεί για ένα άλλο τεχνητό σύστημα παγκρέατος, που ονομάζεται OpenAPS, το οποίο έχει χιλιάδες χρήστες και έχει συσσωρεύσει εκατομμύρια ώρες χρήσης.

A note of caution: AAPS is not regulated by any medical authority in any country. Using AAPS is essentially carrying out a medical experiment on yourself. Η εγκατάσταση του συστήματος απαιτεί αποφασιστικότητα και τεχνικές γνώσεις. Εάν δεν έχετε την τεχνική τεχνογνωσία στην αρχή, θα την έχετε στο τέλος. Όλες οι πληροφορίες που χρειάζεστε μπορούν να βρεθούν σε αυτά τα έγγραφα, αλλού online ή από άλλους που το έχουν ήδη κάνει - μπορείτε να τα ρωτήσετε σε ομάδες του Facebook ή σε άλλα φόρουμ. Many people have successfully built AAPS and are now using it entirely safely, but it is essential that every user:

- Να δημιουργεί το ίδιο το σύστημα έτσι ώστε να κατανοεί πλήρως το πώς λειτουργεί
- Ρυθμίζει τον ατομικό αλγόριθμο δοσολογίας με την ομάδα του διαβήτη για να δουλέψει σχεδόν τέλεια
- Να διατηρεί και παρακολουθεί το σύστημα για να διασφαλίσει ότι λειτουργεί σωστά

```{note}
**Disclaimer and Warning**

- All information, thought, and code described here is intended for informational and educational purposes only. Το Nightscout δεν πραγματοποιεί επί του παρόντος προσπάθεια συμμόρφωσης με το HIPAA. Use Nightscout and AAPS at your own risk, and do not use the information or code to make medical decisions.
- Η χρήση του κώδικα από το github.com είναι χωρίς εγγύηση ή επίσημη υποστήριξη οποιασδήποτε μορφής. Ανατρέξτε στην ΑΔΕΙΑ ΑΠΟΣΤΟΛΗΣ αυτού του αποθετηρίου για λεπτομέρειες.
- Όλα τα ονόματα των προϊόντων και των εταιρειών, τα εμπορικά σήματα, τα κατατεθέντα εμπορικά σήματα και τα καταχωρημένα λογότυπα υπηρεσίας αποτελούν ιδιοκτησία των αντίστοιχων κατόχων τους. Η χρήση τους είναι για ενημερωτικούς σκοπούς και δεν συνεπάγεται καμία προσχώρηση ή έγκριση από αυτούς.

Please note - this project has no association with and is not endorsed by: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/) or [Medtronic](https://www.medtronic.com/).
```

Εάν είστε έτοιμοι για την πρόκληση, παρακαλώ διαβάστε το.

## Primary goals behind AAPS

- Μια εφαρμογή με ενσωματωμένη ασφάλεια. To read about the safety features of the algorithms, known as oref0 and oref1, click here (<https://openaps.org/reference-design/>)
- Μια εφαρμογή all-in-one για τη διαχείριση του διαβήτη τύπου 1 με τεχνητό πάγκρεας και Nightscout
- An app to which users can easily add or remove modules as needed
- An app with different versions for specific locations and languages.
- An app which can be used in open- and closed-loop mode
- An app that is totally transparent: users can input parameters, see results, and make the final decision
- An app which is independent of particular pump drivers and contains a "virtual pump" so users can safely experiment before using it on themselves
- Μια εφαρμογή που είναι στενά συνδεδεμένη με το Nightscout
- Μια εφαρμογή στην οποία ο χρήστης ελέγχει τους περιορισμούς ασφαλείας

## Πώς να ξεκινήσω

Φυσικά, όλο αυτό το περιεχόμενο εδώ είναι πολύ σημαντικό, αλλά μπορεί να είναι στην αρχή αρκετά συγκεχυμένο. A good orientation is given by the [Module Overview](../Module/module.md) and the [Objectives](../Usage/Objectives.html).
