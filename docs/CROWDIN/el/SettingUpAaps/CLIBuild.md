# Οδηγίες δημιουργίας από τη γραμμή εντολών

```{admonition} For users familiar with the command-line and git
:class: note

Ο πιο απλός τρόπος για build του AAPS είναι η εναλλακτική [Δημιουργία μέσω browser](./BrowserBuild.md).
```

Δοκιμάστηκε σε Fedora και Debian Linux· άλλα συστήματα θα λειτουργούν με λίγες αλλαγές.

## Απαιτήσεις

Δείτε την ελάχιστη απαιτούμενη έκδοση Java σε [αυτόν τον πίνακα](#Building-APK-recommended-specification-of-computer-for-building-apk-file). Εγκαταστήστε το κατάλληλο πακέτο OpenJDK με τον διαχειριστή πακέτων του συστήματος. Για παράδειγμα, στο Debian τα πακέτα έχουν ονόματα όπως `openjdk-21-jdk`. Πρέπει να περιέχει τα εκτελέσιμα `javac` και `keytool`.

Κατεβάστε το πακέτο *Android Command line tools* από τη [σελίδα του Android Studio](https://developer.android.com/studio#command-line-tools-only). Το ίδιο το Android Studio δεν χρειάζεται. Περισσότερες πληροφορίες για την εγκατάσταση αυτού του πακέτου θα βρείτε στην [τεκμηρίωση του sdkmanager](https://developer.android.com/tools/sdkmanager). Αφού εγκατασταθεί το πακέτο, πρέπει να ορίσετε χειροκίνητα δύο [μεταβλητές περιβάλλοντος](https://developer.android.com/tools/variables): `ANDROID_HOME` και `PATH`. Τέλος, τρέξτε `sdkmanager --licenses` για να ολοκληρώσετε την εγκατάσταση.

## Δημιουργία του AAPS με το Gradle wrapper

### 1. Δημιουργήστε ένα αρχείο Java keystore για την υπογραφή του AAPS

Αν έχετε ήδη αρχείο keystore για την υπογραφή του AAPS, χρησιμοποιήστε το ξανά.

```sh
keytool -genkeypair -v \
  -keystore aaps-keystore.jks \
  -alias aaps-key \
  -keyalg RSA \
  -keysize 4096 \
  -validity 20000
```

Θα χρειάζεστε το αρχείο keystore και τον κωδικό του κάθε φορά που ενημερώνετε το AAPS.

### 2. Κάντε compile το αρχείο APK του AAPS

Κάντε clone το [αποθετήριο git](https://github.com/nightscout/AndroidAPS), αν δεν το έχετε ήδη κάνει. Το AAPS χρησιμοποιεί τον κλάδο master για την πιο πρόσφατη σταθερή έκδοση· βεβαιωθείτε ότι είστε στον κλάδο/tag που θέλετε να κάνετε build.

Τρέξτε `./gradlew :app:assembleFullRelease` μέσα στο αποθετήριο. Κατεβάζει αυτόματα το Gradle και τις εξαρτήσεις και μετά κάνει compile τον κώδικα. Όταν το build πετύχει, θα πρέπει να έχετε ένα μη υπογεγραμμένο APK στο `app/build/outputs/apk/full/release/app-full-release-unsigned.apk`. Θα πρέπει επίσης να έχει εγκαταστήσει ένα εκτελέσιμο `apksigner` στο `$ANDROID_HOME`. Ενημερώστε ξανά τη μεταβλητή `PATH`.

### 3. Δημιουργήστε ένα υπογεγραμμένο αρχείο APK από το μη υπογεγραμμένο

<!-- Suggest building outside the git repo, to minimize risk of accidental APK commits -->

Πηγαίνετε στον αρχικό σας φάκελο (home) και δημιουργήστε ένα υπογεγραμμένο αρχείο APK:

```sh
apksigner sign \
  --ks path/to/aaps-keystore.jks \
  --ks-key-alias aaps-key \
  --out app-full-release-signed.apk \
  ./AndroidAPS/app/build/outputs/apk/full/release/app-full-release-unsigned.apk
```

Τώρα έχετε το `app-full-release-signed.apk` έτοιμο για εγκατάσταση ή αναβάθμιση.
