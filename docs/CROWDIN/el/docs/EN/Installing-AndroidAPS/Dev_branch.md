## Τομέας ανάπτυξης

<font color="#FF0000"><strong>Attention:</strong></font>
Dev branch is for the further development of AAPS only. Θα πρέπει να χρησιμοποιείται σε ξεχωριστό τηλέφωνο για δοκιμή <font color="#FF0000"><strong> όχι για καθημερινή χρήση του κυκλώματος! </strong></font>

The most stable version of AAPS to use is that in the [Master branch](https://github.com/nightscout/AndroidAPS/tree/master). Συνιστάτε να μείνετε στον κύριο κλάδο για τη χρήση του κυκλώματος.

The dev version of AAPS is only for developers and testers comfortable dealing with stacktraces, looking through log files and maybe firing up the debugger to produce bug reports that are helpful to the developers (in short: people that know what they are doing without being assisted!). Επομένως, πολλά ημιτελείς χαρακτηριστικά είναι απενεργοποιημένα. To enable these features enter **Engineering Mode** by creating a file named `engineering_mode` in directory /AAPS/extra . Η ενεργοποίηση της μηχανικής λειτουργίας μπορεί να σπάσει πλήρως το κύκλωμα.

Ωστόσο, ο κλάδος ανάπτυξης είναι ένα καλό μέρος για να δείτε ποια χαρακτηριστικά ελέγχονται και να βοηθήσετε να σβήσετε τα σφάλματα και να δώσετε ανατροφοδότηση σχετικά με τον τρόπο με τον οποίο λειτουργούν τα νέα χαρακτηριστικά στην πράξη. Συχνά οι άνθρωποι θα δοκιμάσουν τον κλάδο ανάπτυξης σε ένα παλιό τηλέφωνο και αντλία μέχρι να είναι σίγουροι ότι είναι σταθερός - οποιαδήποτε χρήση του είναι με δική σας ευθύνη. Κατά τη δοκιμή οποιωνδήποτε νέων λειτουργιών, θυμηθείτε ότι επιλέγετε να δοκιμάσετε μια λειτουργία που εξακολουθεί να βρίσκεται σε εξέλιξη. Κάντε αυτό με δική σας ευθύνη & με τη δέουσα επιμέλεια για να είστε ασφαλείς.

If you find a bug or think something wrong has happened when using the Dev branch, then view the [issues tab](https://github.com/nightscout/AndroidAPS/issues) to check whether anyone else has found it, or add it yourself if not. Όσες περισσότερες πληροφορίες μπορείτε να μοιραστείτε τόσο καλύτερα (μην ξεχνάτε ότι ίσως χρειαστεί να μοιραστείτε τα [αρχεία καταγραφής ](../Usage/Accessing-logfiles.md)). The new features can also be discussed on [discord](https://discord.gg/4fQUWHZ4Mw).

A dev version has an expiration date. This seems inconvenient when using it satisfactorily, but serves a purpose. When a single dev version doing the rounds, it is easier to keep track of bugs that people are reporting. The developers do not want to be in a position where there are three versions of dev in the wild where bugs are fixed in some and not others, and people continue to report the fixed ones.