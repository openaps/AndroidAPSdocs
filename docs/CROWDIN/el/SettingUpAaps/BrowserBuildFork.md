(github-fork)=

# Δημιουργία μέσω browser – Βήμα 1: Δημιουργία του fork σας στο GitHub

```{note}
Αυτό είναι το **Βήμα 1** της [Δημιουργίας μέσω browser](BrowserBuild.md).
```

You will need to store your personal Android Java Key and Google Drive information as secrets in GitHub (later in the process, we will explain how).

Αυτό δεν γίνεται μέσα στο δημόσιο αποθετήριο του AndroidAPS, γι' αυτό πρέπει να φτιάξετε το δικό σας αντίγραφο του πηγαίου κώδικα (που λέγεται fork).

## Λογαριασμός GitHub

Πρέπει να [δημιουργήσετε έναν λογαριασμό GitHub](https://github.com/signup), αν δεν έχετε ακόμα.  
Μπορείτε να εγγραφείτε με το email σας ή με το Google. Ακολουθήστε τη διαδικασία εγγραφής και επαλήθευσης.

Όταν έχετε λογαριασμό, [συνδεθείτε στο GitHub](https://github.com/login).

## Fork του AndroidAPS

Ανοίξτε το επίσημο αποθετήριο του AndroidAPS από [αυτόν τον σύνδεσμο](https://github.com/nightscout/AndroidAPS).

Πατήστε το εικονίδιο fork. Αυτό δημιουργεί ένα αντίγραφο στον δικό σας λογαριασμό.

![fork_aaps](../images/Building-the-App/CI/ForkAAPS.png)

Κάντε κύλιση προς τα κάτω στην επόμενη οθόνη και πατήστε **Create Fork** (δημιουργία fork).

![fork_aaps_confirm](../images/Building-the-App/CI/ForkAAPS2.png)

*Note: you can **unselect** "Copy the master branch only" if you will want to build developer versions or customizations.*

![fork_aaps_main](../images/Building-the-App/CI/ForkAAPS3.png)

```{note}
You cannot fork and you see this?<br/><br/>
**`No available destinations to fork this repository.`**<br/><br/>
![Already forked](../images/Building-the-App/CI/ForkAAPS3b.png)<br/><br/>
This means you already have an existing fork of AndroidAPS.<br/>
Make sure it's up to date and continue to Preparation Steps.
```

```{warning}
**Μη διαγράψετε ποτέ το fork σας χωρίς να έχετε κάνει αντίγραφο ασφαλείας των secrets σας!**
```

Το GitHub δείχνει τώρα το προσωπικό σας αντίγραφο του AndroidAPS. Αφήστε ανοιχτή αυτή την καρτέλα του browser.

![forked_aaps](../images/Building-the-App/CI/ForkAAPS4.png)

----

**Επόμενο: [Βήμα 2 – Δημιουργία του keystore υπογραφής σας](BrowserBuildKeystore.md) →**
