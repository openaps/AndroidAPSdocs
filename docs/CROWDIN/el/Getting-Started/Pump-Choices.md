# Επιλογές αντλίας

Το AndroidAPS προς το παρόν λειτουργεί με

* [Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md)
* [Accu-Check Insight](../Configuration/Accu-Chek-Insight-Pump.md)
* [DanaR](../Configuration/DanaR-Insulin-Pump.md)
* [DanaRS](../Configuration/DanaRS-Insulin-Pump.md)
* [Dana-i](../Configuration/DanaRS-Insulin-Pump.md)
* [Diaconn G8 ](../Configuration/DiaconnG8.rst)
* [Omnipod Eros](../Configuration/OmnipodEros.rst)
* [Omnipod DASH](../Configuration/OmnipodDASH.md)
* some old [Medtronic](../Configuration/MedtronicPump.md)

Details of the status of other pumps that may have the potential to work with AndroidAPS are listed on the [Future (possible) Pumps](Future-possible-Pump-Drivers.md) page.

Εάν χρειάζεται να επιλέξετε μία αντλία για αναβάθμιση ή για αγορά, τότε συχνά, πολλοί ρωτούν ποια να επιλέξουν. Λεπτομέρειες για τους διάφορους προμηθευτές βρίσκονται σε [αυτή τη φόρμα ](https://drive.google.com/open?id=1CRfmmjA-0h_9nkRViP3J9FyflT9eu-a8HeMrhrKzKz0), παρακαλούμε να μοιραστείτε τα στοιχεία της δικής σας, εάν δεν είναι ήδη στη λίστα.

Οι αντλίες Combo και Insight είναι αντλίες durable και δυνατότητα κλειστού κυκλώματος. The advantages of the DanaR/RS/-i as the pump of choice however are:

* The Dana*R/RS/-i connects to almost any phone with Android >= 5.1 without the need to flash lineage. If your phone breaks you usually can find easily any phone that works with the Dana*R/RS/-i pumps as quick replacement... όχι τόσο εύκολο με την Combo. (Αυτό μπορεί να αλλάξει στο μέλλον όταν το Android 8.1 γίνει πιο διαδεδομένο)

* Initial pairing is simpler with the DanaRS/-i. Επειδή όμως συνήθως αυτό γίνεται μόνο μία φορά, σας επηρεάζει μόνο όταν θέλετε να δοκιμάσετε ένα νέο χαρακτηριστικό με διαφορετικές αντλίες.

* Μέχρι στιγμής η αντλία Combo λειτουργεί με τεχνολογία οθόνης. Σε γενικές γραμμές αυτό λειτουργεί καλά αλλά είναι αργό. Για το κύκλωμα αυτό δεν έχει σημασία όσο όλα λειτουργούν στο παρασκήνιο. Εξακολουθεί να υπάρχει πολύς χρόνος που πρέπει να συνδεθείτε, ώστε να υπάρχει μεγαλύτερη διάρκεια σύνδεσης με τη σύνδεση BT, κάτι που δεν είναι τόσο εύκολο εάν απομακρυνθείτε από το τηλέφωνό σας ενώ ταυτόχρονα πιέζετε bolus & μαγείρεμα.

* Το Combo δονείται στο τέλος των TBR, η Dana * R δονείται (ή μπιπ) στο SMB. Τη νύχτα είναι πιθανό να χρησιμοποιείτε TBRs περισσότερο από SMB. Η Dana * RS είναι διαμορφωμένη ώστε να μην εκπέμπει ή να δονείται.

* Η ανάγνωση του ιστορικού στην RS σε λίγα δευτερόλεπτα με υδατάνθρακες καθιστά δυνατή την εύκολη εναλλαγή των τηλεφώνων ενώ είναι εκτός σύνδεσης και συνεχίζει το κύκλωμα από τη στιγμή που αναγνωρίσει τιμές από το cgm.

* Insulet Omnipod Eros requires a pod communication device such as RileyLink/Orangelink etc. The newer omnipod DASH does not since it communicates with your phone directly via Bluetooth.

* All pumps AndroidAPS can talk with are waterproof on delivery. Μόνο οι αντλίες Dana είναι επίσης "αδιάβροχες με εγγύηση" λόγω της σφραγισμένης θήκης των μπαταριών και του συστήματος πλήρωσης δεξαμενών.

Το Combo, φυσικά, είναι μια πολύ καλή αντλία, και έχει και τη δυνατότητα κυκλώματος. Έχει επίσης το πλεονέκτημα πολλών περισσότερων τύπων συσκευών έγχυσης για να διαλέξετε, καθώς έχει μια τυποποιημένη κλειδαριά Luer. Και η μπαταρία είναι μια προεπιλεγμένη που μπορείτε να αγοράσετε σε οποιοδήποτε βενζινάδικο, κατάστημα 24 ωρών και αν χρειάζεστε πραγματικά, μπορείτε να το κλέψετε / δανειστείτε από το τηλεχειριστήριο στο δωμάτιο του ξενοδοχείου ;-)