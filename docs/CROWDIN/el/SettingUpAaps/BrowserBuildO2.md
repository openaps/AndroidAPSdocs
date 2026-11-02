(aaps-ci-option2)=

# Επιλογή 2 – Ανέβασμα του υπάρχοντος keystore σας

```{note}
Αυτό είναι μέρος του [Βήματος 2 – Δημιουργία του keystore υπογραφής σας](BrowserBuildKeystore.md) της [Δημιουργίας μέσω browser](BrowserBuild.md). Make sure you have read the [Option 1 vs Option 2 decision](#aaps-ci-preparation).
```

Η Επιλογή 2 χρησιμοποιεί ξανά το JKS που έχετε ήδη δημιουργήσει σε προηγούμενο build του AAPS από υπολογιστή με το Android Studio. Είναι κατάλληλη για χρήστες που έχουν ήδη ένα JKS και ξέρουν τον κωδικό και το alias του JKS.

Για τα `KEYSTORE_PASSWORD`, `KEY_ALIAS` και `KEY_PASSWORD`, εισαγάγετε στο GitHub τον πραγματικό σας κωδικό και alias – αυτά από το Android Studio· δείτε παρακάτω πού τα χρησιμοποιήσατε.

```{warning}
**Κωδικοί με ειδικούς χαρακτήρες.** Εισαγάγετε τους κωδικούς σας ακριβώς όπως είναι. Μην προσθέσετε ανάποδη κάθετο (backslash) ή άλλο χαρακτήρα διαφυγής: το workflow του build κρατά κάθε χαρακτήρα όπως είναι, και μια backslash που προσθέσατε γίνεται μέρος του κωδικού.

Αν το build αποτυγχάνει ακόμα στο βήμα της υπογραφής και ο κωδικός σας περιέχει `$`, backtick, `"` ή `\`, τότε το αρχείο του workflow στο fork σας είναι παλιό. [Συγχρονίστε το fork σας](#Update-to-new-version-update-your-repo) με το πιο πρόσφατο dev και τρέξτε ξανά το build. Δείτε [Δημιουργία μέσω browser: αντιμετώπιση προβλημάτων](#aaps-ci-password-special-characters).
```

```{admonition} KEY + PASSWORDS
:class: dropdown

![Απομνημόνευση κωδικών](../images/Building-the-App/044_RememberPwd.png)
```

## Επιλέξτε τη συσκευή σας

```{tip}
Κάνετε build από ένα **τηλέφωνο Android**; Χρησιμοποιήστε αντί για αυτό το [AAPS Builder](BrowserBuildAapsBuilder.md): δεν χρειάζεται αρχείο προετοιμασίας.
```

Ακολουθήστε τη σελίδα για τη συσκευή από την οποία κάνετε build:

- **[Υπολογιστής](BrowserBuildO2Computer.md)** – Windows, Mac ή Linux.

```{tip}
Μπορείτε να αλλάξετε συσκευή οποιαδήποτε στιγμή – απλώς ανοίξτε την αντίστοιχη σελίδα.
```

```{toctree}
:hidden:

Υπολογιστής <BrowserBuildO2Computer.md>
```
