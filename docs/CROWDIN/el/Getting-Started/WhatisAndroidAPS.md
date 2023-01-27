# Τι είναι ένα κλειστό σύστημα κυκλώματος με AndroidAPS;

AndroidAPS is an app that acts as an artificial pancreas system (APS) on an Android smartphone. Τι είναι ένα τεχνητό σύστημα παγκρέατος; Είναι ένα πρόγραμμα λογισμικού που στοχεύει να κάνει ό, τι κάνει ένα ζωντανό πάγκρεας: διατηρεί τα επίπεδα σακχάρου στο αίμα μέσα σε υγιή όρια.

Ένα APS δεν μπορεί να κάνει τη δουλειά όπως ένα βιολογικό πάγκρεας, αλλά μπορεί να κάνει τον διαβήτη τύπου 1 ευκολότερο να διαχειριστεί χρησιμοποιώντας συσκευές που είναι εμπορικά διαθέσιμες και λογισμικό που είναι απλό και ασφαλές. Αυτές οι συσκευές περιλαμβάνουν ένα συνεχή καταγραφέα γλυκόζης (CGM) για να ενημερώσετε το AndroidAPS σχετικά με τα επίπεδα σακχάρου στο αίμα σας και μια αντλία ινσουλίνης, την οποία το AndroidAPS ελέγχει για να παρέχει τις κατάλληλες δόσεις ινσουλίνης. Η εφαρμογή επικοινωνεί με αυτές τις συσκευές μέσω bluetooth. Κάνει τους υπολογισμούς δόσεων χρησιμοποιώντας έναν αλγόριθμο ή ένα σύνολο κανόνων που έχουν αναπτυχθεί για ένα άλλο τεχνητό σύστημα παγκρέατος, που ονομάζεται OpenAPS, το οποίο έχει χιλιάδες χρήστες και έχει συσσωρεύσει εκατομμύρια ώρες χρήσης.

Σημείωση προσοχής: Το AndroidAPS δεν ρυθμίζεται από καμία ιατρική αρχή σε καμία χώρα. Η χρήση του AndroidAPS πραγματοποιεί ουσιαστικά ένα ιατρικό πείραμα στον εαυτό σας. Η εγκατάσταση του συστήματος απαιτεί αποφασιστικότητα και τεχνικές γνώσεις. Εάν δεν έχετε την τεχνική τεχνογνωσία στην αρχή, θα την έχετε στο τέλος. Όλες οι πληροφορίες που χρειάζεστε μπορούν να βρεθούν σε αυτά τα έγγραφα, αλλού online ή από άλλους που το έχουν ήδη κάνει - μπορείτε να τα ρωτήσετε σε ομάδες του Facebook ή σε άλλα φόρουμ. Πολλοί άνθρωποι έχουν χτίσει με επιτυχία το AndroidAPS και τώρα το χρησιμοποιούν με απόλυτη ασφάλεια, αλλά είναι σημαντικό κάθε χρήστης:

- Builds the system themselves so that they thoroughly understand how it works
- Adjusts its individual dosage algorithm with his or her diabetes team to work nearly perfect
- Maintains and monitors the system to ensure it is working properly

:::{note}
**Disclaimer and Warning**

- All information, thought, and code described here is intended for informational and educational purposes only. Το Nightscout δεν πραγματοποιεί επί του παρόντος προσπάθεια συμμόρφωσης με το HIPAA. Χρησιμοποιήστε το Nightscout και το AndroidAPS με δική σας ευθύνη και μην χρησιμοποιείτε τις πληροφορίες ή τον κωδικό για να παίρνετε ιατρικές αποφάσεις.
- Use of code from github.com is without warranty or formal support of any kind. Ανατρέξτε στην ΑΔΕΙΑ ΑΠΟΣΤΟΛΗΣ αυτού του αποθετηρίου για λεπτομέρειες.
- All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. Η χρήση τους είναι για ενημερωτικούς σκοπούς και δεν συνεπάγεται καμία προσχώρηση ή έγκριση από αυτούς.

Please note - this project has no association with and is not endorsed by: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/) or [Medtronic](https://www.medtronic.com/).
:::

Εάν είστε έτοιμοι για την πρόκληση, παρακαλώ διαβάστε το.

## Πρωταρχικοί στόχοι πίσω από το AndroidAPS

- An app with safety built in. To read about the safety features of the algorithms, known as oref0 and oref1, click here (<https://openaps.org/reference-design/>)
- An all-in-one app for managing type 1 diabetes with an artificial pancreas and Nightscout
- An app to which users can easily add or remove modules as needed
- An app with different versions for specific locations and languages.
- An app which can be used in open- and closed-loop mode
- An app that is totally transparent: users can input parameters, see results, and make the final decision
- An app which is independent of particular pump drivers and contains a "virtual pump" so users can safely experiment before using it on themselves
- An app closely integrated with Nightscout
- An app in which the user is in control of safety constraints

## Πώς να ξεκινήσω

Φυσικά, όλο αυτό το περιεχόμενο εδώ είναι πολύ σημαντικό, αλλά μπορεί να είναι στην αρχή αρκετά συγκεχυμένο. A good orientation is given by the [Module Overview](../Module/module.md) and the [Objectives](../Usage/Objectives.html).
