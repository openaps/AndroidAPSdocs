# Setting up the Reporting Server

Αυτή τη στιγμή υπάρχουν δύο διακομιστές αναφορών που μπορείτε να χρησιμοποιήσετε με το **AAPS**:

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Διακομιστές αναφορών](../images/Building-the-App/ReportingServer.png)

We recommend using Nightscout.

(SettingUpTheReportingServer-nightscout)=
## Nightscout

Το Nightscout είναι μια διαδικτυακή εφαρμογή που καταγράφει και εμφανίζει τα δεδομένα του CGM σας και τα δεδομένα του **AAPS** και δημιουργεί αναφορές. Είναι μια ισχυρή πλατφόρμα που είναι ενσωματωμένη στο **AAPS** εδώ και πολλά χρόνια. It enables users and caregivers to track the patient's diabetes data in near real-time (only a few seconds may pass between data reception and data provision if there is a sufficient Internet connection between all components involved). Επίσης μεταφέρει τις εντολές απομακρυσμένου ελέγχου που στέλνουν οι φροντιστές στο **AAPS** από το **AAPSClient** (δείτε [Έλεγχος Master ↔ Client](#client-master-control)).

Nightscout is provided as open-source software. Anyone can create and operate a Nightscout server, using either free or paid-for services.

Περισσότερες πληροφορίες θα βρείτε στον [ιστότοπο του έργου Nightscout](http://nightscout.github.io/).

### Option 1 - Set up your Nightscout server yourself

Creating your Nightscout reporting server can require one or more web-based applications that will require maintenance. In order to have a completely free service, you may need to migrate your Nightscout site and data, if and when providers remove the free tier.

Μια περιγραφή του πώς μπορείτε να στήσετε το Nightscout, με τα πλεονεκτήματα και τα μειονεκτήματα των διαφόρων επιλογών λειτουργίας και μια εκτίμηση του κόστους, θα βρείτε [εδώ](https://nightscout.github.io/nightscout/new_user/#free-diy).

### Option 2 - Pay for a hosted Nightscout service

There are also options from different service providers who host Nightscout for you, with a monthly fee. The costs are manageable, and the advantage of a hosted option is that you do not need to be IT-literate, or have any operating infrastructure.


Existing Nightscout users can reconsider where and how their Nightscout server is hosted from time to time, and change to a different option if it becomes more suitable.

Μερικές υπηρεσίες φιλοξενίας για το Nightscout αναφέρονται [εδώ](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table).

### Further configuration of Nightscout

Όταν το Nightscout σας είναι έτοιμο και λειτουργεί, δείτε τη [σελίδα ρύθμισης του Nightscout](../SettingUpAaps/Nightscout.md) για περισσότερα θέματα που πρέπει να προσέξετε.

(SettingUpTheReportingServer-tidepool)=
## Tidepool

Το Tidepool είναι διαθέσιμο στο **AAPS** από την έκδοση 3.2, που κυκλοφόρησε στα τέλη του 2023.

```{admonition} Tidepool with **AAPS** is only for reporting
:class: danger  
Επειδή με το **AAPS** υπάρχει καθυστέρηση τριών ωρών από τη λήψη των δεδομένων μέχρι την εμφάνισή τους στις αναφορές, το Tidepool δεν είναι κατάλληλο για να μοιράζεστε πληροφορίες σε πραγματικό χρόνο με φροντιστές.  
Από την άλλη πλευρά, το Tidepool μπορεί να είναι μια πολύ καλή λύση για να μοιράζεστε αναφορές με τον ενδοκρινολόγο του ασθενούς, αν το Nightscout δεν είναι αποδεκτή λύση.  
```

Το Tidepool είναι ένα έργο [ανοιχτού κώδικα](https://github.com/tidepool-org). It offers to run an account free of charge on the Tidepool servers.

Περισσότερες πληροφορίες για τη ρύθμιση του Tidepool με το AAPS θα βρείτε [εδώ](../SettingUpAaps/Tidepool.md).

```{admonition} **AAPS** has the uploader for Tidepool integrated
:class: note
**Δεν** χρειάζεται να χρησιμοποιήσετε την εφαρμογή αποστολής (uploader) του Tidepool: το **AAPS** στέλνει για εσάς τη γλυκόζη αίματος, τις θεραπείες και τον βασικό ρυθμό. Χρειάζεστε μόνο έναν προσωπικό λογαριασμό στο Tidepool. Μην στέλνετε τα δεδομένα σας με το ξεχωριστό εργαλείο αποστολής (uploader) του Tidepool, γιατί αυτό θα δημιουργήσει διπλές τιμές.  
```

## Next step

Αφού ρυθμίσετε τον διακομιστή αναφορών σας, μπορείτε να διαμορφώσετε το **AAPS** στο τηλέφωνό σας με τον [Οδηγό εγκατάστασης](./SetupWizard.md), ο οποίος θα συνδέσει επίσης το **AAPS** με τον διακομιστή αναφορών σας.