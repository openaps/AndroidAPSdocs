(aaps-builder)=

# Δημιουργία μέσω browser με το AAPS Builder

```{note}
Αυτός είναι ο προτεινόμενος τρόπος για να δημιουργήσετε το AAPS από ένα **τηλέφωνο Android**. Λειτουργεί επίσης από οποιονδήποτε browser σε υπολογιστή. Για τους άλλους τρόπους δημιουργίας από υπολογιστή ή iPhone, δείτε την επισκόπηση [Δημιουργία μέσω browser](BrowserBuild.md).
```

```{contents} In this page
:backlinks: entry
:depth: 2
```

Το **AAPS Builder** δημιουργεί την εφαρμογή AAPS για εσάς στο GitHub, τον δωρεάν ιστότοπο φιλοξενίας κώδικα. Δεν χρειάζεται να εγκαταστήσετε τίποτα στο τηλέφωνό σας και δεν υπάρχει αρχείο προετοιμασίας για να ανοίξετε.

A setup page walks you through it. Την πρώτη φορά χρειάζεται περίπου 10 λεπτά:

1. Create your own **private copy** of AAPS Builder in your GitHub account: the setup page opens GitHub with everything filled in, you only confirm. The build workflow, the file that tells GitHub how to build AAPS, is already in it.
2. Create or upload your **signing key** (the keystore).
3. Give the key to your repository as a GitHub **secret**.
4. **Build** the app. One build takes 15 to 30 minutes.
5. **Download and install** the app on your phone.

**Δεν** χρειάζεται να κάνετε fork το AndroidAPS: ο πηγαίος κώδικας του AAPS κατεβαίνει από το επίσημο αποθετήριο AndroidAPS σε κάθε build. Επίσης **δεν** χρειάζεστε το Google Drive: κατεβάζετε την εφαρμογή απευθείας από το GitHub.

```{admonition} Where the code comes from
:class: note

The build workflow is maintained by the AAPS developers in the [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder) repository, and your repository is a copy of it. The [workflow](https://github.com/nightscout/aaps-builder/blob/main/.github/workflows/build.yml) in your copy is short: it runs the [build steps](https://github.com/nightscout/aaps-builder/blob/main/.github/workflows/aaps-builder.yml) kept in that repository, so improvements reach you without any change to your repository. You can read both files. Κατά το build, το workflow κατεβάζει μόνο τον επίσημο πηγαίο κώδικα του AAPS και τα εργαλεία build του ίδιου του GitHub. Το keystore σας δεν φεύγει ποτέ από τον browser σας και το ιδιωτικό αποθετήριό σας.
```

(aaps-builder-before-you-start)=

## Πριν ξεκινήσετε

Θα χρειαστείτε:

- Έναν **λογαριασμό GitHub** (δωρεάν). Αν δεν έχετε, δημιουργήστε πρώτα έναν στο [github.com](https://github.com/signup).
- Έναν **browser**: το Chrome στο τηλέφωνό σας ή οποιονδήποτε browser σε υπολογιστή. Συνδεθείτε στο github.com σε αυτόν τον browser πριν ξεκινήσετε.
- **Έχετε την εφαρμογή GitHub στο τηλέφωνό σας;** Μπορείτε να την κρατήσετε. Τότε κάποια κουμπιά της σελίδας ρύθμισης ανοίγουν την εφαρμογή αντί για το Chrome. Building works in the app, but the app **cannot download** the finished AAPS: [step 5](#aaps-builder-step5) shows how to switch to Chrome for the download.
- Το **υπάρχον keystore** σας (αρχείο `.jks`), τον κωδικό του και το alias του, αν έχετε δημιουργήσει το AAPS στο παρελθόν και θέλετε να το ενημερώσετε χωρίς επανεγκατάσταση.

```{warning}
**Το αποθετήριο build σας πρέπει να μείνει ιδιωτικό.** Ό,τι παράγει ένα build το βλέπει όποιος μπορεί να δει το αποθετήριο. Η σελίδα ρύθμισης δημιουργεί για εσάς ένα ιδιωτικό αποθετήριο. Never change it to public, and don't **fork** AAPS Builder instead: a fork is always public.

Ένα ιδιωτικό αποθετήριο έχει 2000 δωρεάν λεπτά GitHub Actions τον μήνα, που αρκούν για αρκετά builds.
```

```{warning}
**Νέο κλειδί ή υπάρχον κλειδί: αυτό αποφασίζει αν μπορείτε να ενημερώσετε το AAPS.**

- **Έχετε ήδη το AAPS στο τηλέφωνό σας, δημιουργημένο με ένα keystore που ακόμα έχετε**: επιλέξτε **I already have a keystore** (έχω ήδη keystore) στη σελίδα ρύθμισης και ανεβάστε το. Το επόμενο build σας θα ενημερώσει το υπάρχον AAPS. Δημιουργήσατε το AAPS με την προηγούμενη μέθοδο μέσω browser (το δικό σας fork); Το keystore σας βρίσκεται στο fork σας: [πάρτε πρώτα ένα αντίγραφό του](#aaps-builder-from-fork).
- **Δημιουργείτε το AAPS για πρώτη φορά ή χάσατε το keystore ή τον κωδικό του**: επιλέξτε **Create a new key** (δημιουργία νέου κλειδιού). Μια εφαρμογή υπογεγραμμένη με νέο κλειδί **δεν μπορεί να ενημερώσει** ένα AAPS υπογεγραμμένο με άλλο κλειδί. Πρέπει να εξαγάγετε τις ρυθμίσεις σας, να αντιγράψετε το αρχείο έξω από το τηλέφωνό σας, να απεγκαταστήσετε το παλιό AAPS, να εγκαταστήσετε το νέο και μετά να εισαγάγετε τις ρυθμίσεις σας: δείτε [Επανεγκατάσταση του AAPS με νέο keystore](#reinstall-aaps).

Μετά, χρησιμοποιείτε πάντα το ίδιο κλειδί. Όταν δημιουργείτε νέο κλειδί, κατεβάστε το αντίγραφο ασφαλείας που προσφέρει η σελίδα και φυλάξτε το μαζί με τον κωδικό του και το alias του (`key0`) σε ασφαλές μέρος, έξω από το τηλέφωνό σας.
```

(aaps-builder-from-fork)=

## Αν έρχεστε από την προηγούμενη μέθοδο μέσω browser (fork)

Παραλείψτε αυτή την ενότητα αν δεν έχετε δημιουργήσει ποτέ το AAPS με την προηγούμενη μέθοδο μέσω browser (το δικό σας αντίγραφο, ή fork, του AndroidAPS στο GitHub, με το αρχείο προετοιμασίας και το Google Drive).

Το keystore σας είναι αποθηκευμένο ως secrets στο fork σας. Το GitHub δεν δείχνει ποτέ ξανά ένα secret, οπότε δεν μπορείτε να το αντιγράψετε στο νέο σας αποθετήριο. Get a copy of your keystore first, then use it in [step 2](#aaps-builder-step2) with **I already have a keystore**.

```{warning}
Μην επιλέξετε **Create a new key**. Ένα AAPS δημιουργημένο με νέο κλειδί δεν μπορεί να ενημερώσει το AAPS στο τηλέφωνό σας.
```

Ποια είναι η δική σας περίπτωση;

- **Χρησιμοποιήσατε την Επιλογή 2** (ανεβάσατε το δικό σας keystore από το Android Studio) και έχετε ακόμα το αρχείο `.jks`, τους κωδικούς του και το alias του: δεν χρειάζεται να κάνετε τίποτα εδώ. Use that file in step 2.
- **Χρησιμοποιήσατε την Επιλογή 1** (το αρχείο προετοιμασίας δημιούργησε το κλειδί σας) ή δεν έχετε πια το αρχείο του keystore: εξαγάγετέ το από το fork σας όπως παρακάτω.

Για να εξαγάγετε το keystore σας από το fork σας:

1. Στο fork σας, ανοίξτε **Settings** → **Secrets and variables** → **Actions** και προσθέστε ένα secret με όνομα `ZIP_PASSWORD`. Επιλέξτε έναν κωδικό μόνο με αγγλικά γράμματα και αριθμούς. Προστατεύει το αρχείο που θα δημιουργήσετε.
2. Ανοίξτε την καρτέλα **Actions** του fork σας, πατήστε **CI Keystore Export** και μετά **Run workflow**. Περισσότερες λεπτομέρειες: [Εξαγωγή του keystore σας](#ci-keystore-export).
3. Όταν η εκτέλεση έχει πράσινο τικ, ανοίξτε το Google Drive σας: το αρχείο `keystore.zip` βρίσκεται στον φάκελο **AAPS** → **KeyStore**. Αν η εκτέλεση αποτύχει στο βήμα του Google Drive, η πρόσβαση του fork σας στο Google Drive έχει λήξει: δείτε [Το Google Refresh Token έληξε](#aaps-ci-google-token-expired).
4. Κατεβάστε το `keystore.zip` και ανοίξτε το με το `ZIP_PASSWORD` σας: σε υπολογιστή ή στο τηλέφωνό σας με μια εφαρμογή διαχείρισης αρχείων που ανοίγει αρχεία ZIP με κωδικό. Περιέχει:
   - `keystore.jks`: το keystore σας,
   - `keyStoreInfo.txt`: τα `KEYSTORE_PASSWORD`, `KEY_PASSWORD` και `ALIAS` σας (συνήθως `key0`).
5. Αντιγράψτε το `keystore.jks` στο τηλέφωνό σας (ή στο Google Drive, για να το επιλέξετε από εκεί).

In [step 2](#aaps-builder-step2) of the setup page:

1. Πατήστε **I already have a keystore**.
2. Στο **Keystore file**, επιλέξτε `keystore.jks`.
3. Στο **Keystore password**, πληκτρολογήστε το `KEYSTORE_PASSWORD` από το `keyStoreInfo.txt`.
4. Στο **Key alias**, επιλέξτε ή πληκτρολογήστε το `ALIAS` από το `keyStoreInfo.txt`.
5. Αν το `KEY_PASSWORD` είναι διαφορετικό από το `KEYSTORE_PASSWORD`, αποεπιλέξτε το **Key password is the same as the keystore password** και πληκτρολογήστε το `KEY_PASSWORD`.

Φυλάξτε το `keystore.zip` και το `ZIP_PASSWORD` του σε ασφαλές μέρος, έξω από το τηλέφωνό σας: είναι το αντίγραφο ασφαλείας του κλειδιού σας.

To also save the builds of AAPS Builder in Google Drive, do [step 6](#aaps-builder-google-drive): the setup page gets a new `GDRIVE_OAUTH2` for you. Μπορείτε να κρατήσετε το fork σας μέχρι να εγκατασταθεί στο τηλέφωνό σας το AAPS που δημιουργήθηκε με το AAPS Builder.

## Ανοίξτε τη σελίδα ρύθμισης

**→ [Ανοίξτε τη σελίδα ρύθμισης του AAPS Builder](#aaps-builder-setup)**

The setup page is part of this documentation, in your language. Keep this page open in another tab as well: the sections below explain each step of the setup page in more detail, with screenshots.

Η σελίδα ρύθμισης ανοίγει κάθε σελίδα του GitHub σε νέα καρτέλα του Chrome. Για να επιστρέψετε στη σελίδα ρύθμισης, πατήστε το κουμπί καρτελών δίπλα στη γραμμή διευθύνσεων του Chrome (το τετράγωνο με έναν αριθμό) και επιλέξτε τη σελίδα ρύθμισης του AAPS Builder.

Η σελίδα ρύθμισης λειτουργεί εξ ολοκλήρου στον browser σας: το κλειδί και οι κωδικοί σας δεν στέλνονται πουθενά, εκτός από το secret του GitHub στο οποίο τα επικολλάτε εσείς. Μόνο το όνομα χρήστη σας στο GitHub στέλνεται στο GitHub, για να ελεγχθεί ότι υπάρχει. Θυμάται το όνομα χρήστη σας στο GitHub και το όνομα του αποθετηρίου, ώστε να μπορείτε να επιστρέψετε οποιαδήποτε στιγμή για να ανοίξετε ξανά τη σελίδα των secrets ή τα builds σας.

![Η σελίδα ρύθμισης του AAPS Builder](../images/Building-the-App/CI/AapsBuilder30_Step1.png)

(aaps-builder-step1)=

## Βήμα 1 – Δημιουργήστε το ιδιωτικό αποθετήριο build

This step creates your own private copy of AAPS Builder in your GitHub account, with the build workflow already in it. Μόνο εσείς μπορείτε να δείτε το αποθετήριο και τις εφαρμογές που δημιουργεί.

1. Βεβαιωθείτε ότι είστε συνδεδεμένοι στο github.com σε αυτόν τον browser.

2. Στο **Your GitHub username** (το όνομα χρήστη σας στο GitHub), πληκτρολογήστε το όνομα χρήστη σας στο GitHub, όχι το e-mail σας. Η σελίδα το ελέγχει με το GitHub: το **✓ GitHub user found** (βρέθηκε ο χρήστης GitHub) σημαίνει ότι είναι σωστό.

3. Στο **Name of your repository** (όνομα του αποθετηρίου σας), αφήστε την πρόταση `my-aaps`. Αν έχετε ήδη δημιουργήσει το αποθετήριό σας με άλλο όνομα, πληκτρολογήστε ακριβώς αυτό το όνομα.

   ```{note}
   **Already have an AAPS Builder repository** (made with an earlier version of the setup page)? Don't create a new one: type its exact name, skip **Create my private repository**, and update its workflow once as explained in [Updating AAPS](#aaps-builder-updates). Your secrets stay as they are. If you want a new repository anyway, choose a name you don't have yet, for example `my-aaps-2`, and use the same keystore in step 2.

   Don't type the name of your fork of AndroidAPS: a fork is public, and it already builds with its own **AAPS CI** workflow.
   ```

   ![Το βήμα 1 της σελίδας ρύθμισης συμπληρωμένο](../images/Building-the-App/CI/AapsBuilder31_Step1Filled.png)

4. Ελέγξτε τη γραμμή **Your repository:** (το αποθετήριό σας): δείχνει `github.com/<your username>/my-aaps`. The setup page remembers the name from your last visit: check it every time before you use its buttons.

5. Πατήστε **Create my private repository** (δημιουργία του ιδιωτικού μου αποθετηρίου).

   ![The repository line and the Create my private repository button](../images/Building-the-App/CI/AapsBuilder33_Step1Button.png)

6. GitHub opens **Create a new repository** in a new tab. Everything is already filled in: under **Start with a template**, the template `nightscout/aaps-builder` with **Include all branches** off, and under **General**, your account as **Owner** and the name you chose.

   ![Η σελίδα Create a new repository του GitHub](../images/Building-the-App/CI/AapsBuilder32_GitHubNewRepo.png)

   Don't change anything.

7. Scroll down: under **Configuration**, **Choose visibility** is already **Private**. Tap the green **Create repository** button.

   ![Visibility Private and the Create repository button](../images/Building-the-App/CI/AapsBuilder34_GitHubCreate.png)

   GitHub shows your new repository: it contains a folder `.github` (with the build workflow) and a file `README.md`. **Επιστρέψτε στην καρτέλα της σελίδας ρύθμισης** για το βήμα 2: πατήστε το κουμπί καρτελών δίπλα στη γραμμή διευθύνσεων του Chrome και επιλέξτε τη σελίδα ρύθμισης.

```{warning}
**Your new repository is empty**, with no files? It was not created from the template, and it cannot build. Delete it (**Settings** → bottom of the page → **Delete this repository**), then tap **Create my private repository** on the setup page again.
```

(aaps-builder-step2)=

## Step 2 – Your signing key

Η εφαρμογή πρέπει να υπογραφεί με το δικό σας κλειδί. Επιλέξτε μία από τις δύο καρτέλες. Διαβάστε πρώτα την [προειδοποίηση για νέο ή υπάρχον κλειδί](#aaps-builder-before-you-start).

![Setup page step 2: the two key options](../images/Building-the-App/CI/AapsBuilder40_Step3.png)

### I already have a keystore (έχω ήδη keystore)

1. Πατήστε **I already have a keystore**.
2. Στο **Keystore file** (αρχείο keystore), επιλέξτε το αρχείο `.jks` σας (ή `.keystore`, `.p12`, `.pfx`). Σε τηλέφωνο, αντιγράψτε πρώτα το αρχείο στο τηλέφωνό σας ή στο Google Drive.
3. Στο **Keystore password** (κωδικός keystore), πληκτρολογήστε τον κωδικό του keystore.
4. Στο **Key alias** (alias κλειδιού), επιλέξτε το alias σας από τη λίστα ή πληκτρολογήστε το αν δεν υπάρχει λίστα. Για keystore που δημιουργήθηκαν με το Android Studio είναι συνήθως `key0`.
5. Αν ο κωδικός του κλειδιού σας είναι διαφορετικός από τον κωδικό του keystore, αποεπιλέξτε το **Key password is the same as the keystore password** (ο κωδικός κλειδιού είναι ίδιος με τον κωδικό keystore) και πληκτρολογήστε τον κωδικό του κλειδιού.
6. Πατήστε **Check and continue** (έλεγχος και συνέχεια).

Η σελίδα ελέγχει τον κωδικό και το alias στη συσκευή σας. **Keystore OK! Continue with step 3.** means everything is right. Αν λέει ότι ο κωδικός θα ελεγχθεί κατά το build, συνεχίστε κανονικά: το build θα σας πει αν κάτι είναι λάθος.

### Create a new key (δημιουργία νέου κλειδιού)

1. Πατήστε **Create a new key**.

2. Επιλέξτε έναν κωδικό και πληκτρολογήστε τον δύο φορές. Κανόνες: τουλάχιστον 8 χαρακτήρες, μόνο τα γράμματα a–z και A–Z, τα ψηφία 0–9 και σύμβολα όπως `! ? #`. Χωρίς κενά, χωρίς γράμματα με τόνους και χωρίς τον χαρακτήρα `|`.

3. Πατήστε **Create key** (δημιουργία κλειδιού). Χρειάζονται λίγα δευτερόλεπτα μέχρι να εμφανιστεί το **Key created** (το κλειδί δημιουργήθηκε).

   ![Η φόρμα νέου κλειδιού με τον κωδικό πληκτρολογημένο δύο φορές](../images/Building-the-App/CI/AapsBuilder41_NewKey.png)

4. Πατήστε **Download backup (aaps-keystore.jks)** (λήψη αντιγράφου ασφαλείας). Αν το Chrome ρωτήσει **Download file again?** (Λήψη του αρχείου ξανά;), ένα παλαιότερο αντίγραφο ασφαλείας με το ίδιο όνομα υπάρχει ήδη στο τηλέφωνό σας: πατήστε **Download again** (Λήψη ξανά). Τότε το Chrome αποθηκεύει το νέο κλειδί ως `aaps-keystore (1).jks`: αυτό είναι το αρχείο που ανήκει σε αυτό το κλειδί· κρατήστε το και μην το μπερδέψετε με το παλαιότερο.

   Κρατήστε αυτά τα τρία μαζί, σε ασφαλές μέρος έξω από το τηλέφωνό σας (για παράδειγμα στον δικό σας χώρο αποθήκευσης στο cloud):

   - το αρχείο `aaps-keystore.jks`,
   - τον κωδικό σας,
   - το alias του κλειδιού: **`key0`**.

   Τα χρειάζεστε και τα τρία αν κάποτε δημιουργήσετε το AAPS με άλλον τρόπο, για παράδειγμα με το Android Studio. Τα κλειδιά που δημιουργήθηκαν με παλαιότερη έκδοση της σελίδας ρύθμισης έχουν το alias `aaps`.

   ![Το κλειδί δημιουργήθηκε και το πλαίσιο αντιγράφου ασφαλείας](../images/Building-the-App/CI/AapsBuilder42_KeyCreated.png)

(aaps-builder-step3)=

## Step 3 – Give the key to your repository

Step 3 unlocks when step 2 is done. Το κλειδί σας, οι κωδικοί του και το alias του συσκευάζονται σε μία τιμή, το secret `KEYSTORE_SET`.

1. Πατήστε **Open the secrets page** (άνοιγμα της σελίδας secrets).

![Setup page step 3](../images/Building-the-App/CI/AapsBuilder43_Step4.png)

2. Το GitHub ανοίγει τη σελίδα **New secret** του αποθετηρίου σας. Σε τηλέφωνο, βρίσκεται κάτω από το μενού ρυθμίσεων: κάντε κύλιση προς τα κάτω.

![Η φόρμα New secret του GitHub](../images/Building-the-App/CI/AapsBuilder11_NewSecret.png)

3. Πηγαίνετε στην καρτέλα της σελίδας ρύθμισης και πατήστε **Copy name** (αντιγραφή ονόματος). Γυρίστε στην καρτέλα του GitHub και επικολλήστε το στο μικρό πεδίο **Name**. Το όνομα είναι `KEYSTORE_SET`.

4. Πηγαίνετε στην καρτέλα της σελίδας ρύθμισης και πατήστε **Copy secret** (αντιγραφή secret). Γυρίστε στην καρτέλα του GitHub και επικολλήστε το στο μεγάλο πλαίσιο **Secret** (σε τηλέφωνο, με παρατεταμένο πάτημα). Το secret είναι ένας πολύ μεγάλος κωδικός, χιλιάδες χαρακτήρες: η σελίδα ρύθμισης δείχνει τους πρώτους χαρακτήρες του δίπλα στο κουμπί. Μην επικολλήσετε εκεί τη λέξη `KEYSTORE_SET`.

5. Πατήστε **Add secret**. Το `KEYSTORE_SET` εμφανίζεται τώρα στο **Repository secrets**.

![Η λίστα Repository secrets με το KEYSTORE_SET](../images/Building-the-App/CI/AapsBuilder13_SecretList.png)

Αυτό το κάνετε μόνο μία φορά.

```{tip}
Το GitHub δείχνει **Page not found** (404); Ελέγξτε πρώτα ότι είστε συνδεδεμένοι στο github.com σε αυτόν τον browser: το GitHub δείχνει 404 για ιδιωτικά αποθετήρια όταν δεν είστε συνδεδεμένοι. Αλλιώς, το όνομα χρήστη ή το όνομα του αποθετηρίου στο βήμα 1 δεν ταιριάζει με το αποθετήριό σας. Ελέγξτε το όνομα στο github.com, διορθώστε το στο βήμα 1 και πατήστε ξανά το κουμπί.
```

(aaps-builder-step4)=

## Step 4 – Build the app

1. Στη σελίδα ρύθμισης, πατήστε **Open the build page** (άνοιγμα της σελίδας build). Το GitHub ανοίγει τη σελίδα **Build AAPS** του αποθετηρίου σας.

   ![Η σελίδα Build AAPS του GitHub με το κουμπί Run workflow](../images/Building-the-App/CI/AapsBuilder15_BuildPage.png)

   Αν ανοίξει η **εφαρμογή GitHub**: πατήστε **RUN WORKFLOW**, ελέγξτε την έκδοση και την παραλλαγή και πατήστε ξανά **RUN WORKFLOW**. Η εφαρμογή μπορεί να δείχνει ακόμα **Nothing to see here**: τραβήξτε τη λίστα προς τα κάτω για να ανανεωθεί και να δείτε το build σας. Μετά συνεχίστε με το βήμα 4 παρακάτω.

2. If GitHub asks, tap the green button to enable workflows.

   The list of workflows shows two entries: use **Build AAPS**. Ignore **AAPS Builder**: it holds the build steps and has no **Run workflow** button.

3. Πατήστε **Run workflow**. Ανοίγει μια μικρή φόρμα:
   - **Version**: keep `latest` to build the newest AAPS release, or type a release number such as `4.0.0`.
   - **Variant** (παραλλαγή): αφήστε το `fullRelease` για κανονική χρήση με αντλία. Οι άλλες παραλλαγές εξηγούνται στις [παραλλαγές του build](#browserbuild-variant). Το `aapsclient3Release` δημιουργεί το **AAPSClient3**, που υπάρχει από την έκδοση 4.0 του **AAPS** (δείτε [Σχετικά με τα AAPSClient, AAPSClient2 και AAPSClient3](#remotecontrol-aapsclient-versions)).
   - Πατήστε το πράσινο κουμπί **Run workflow**.

   ![Η φόρμα Run workflow με latest και fullRelease](../images/Building-the-App/CI/AapsBuilder16_RunWorkflow.png)

4. Το build ξεκινά και δείχνει **In progress** (σε εξέλιξη), με δύο μέρη: πρώτα **AAPS / Check** και μετά **AAPS / Build AAPS**.

   ![Build σε εξέλιξη](../images/Building-the-App/CI/AapsBuilder45_BuildRunning.png)

5. Περιμένετε 15 έως 30 λεπτά. Ένα πράσινο τικ σημαίνει ότι το build ολοκληρώθηκε. Ένας κόκκινος σταυρός σημαίνει ότι απέτυχε: ανοίξτε το build για να διαβάσετε το μήνυμα και μετά δείτε την [αντιμετώπιση προβλημάτων](#aaps-builder-troubleshooting).

   ![Ολοκληρωμένο build με πράσινο τικ](../images/Building-the-App/CI/AapsBuilder22_BuildDone.png)

   ```{tip}
   **E-mail όταν τελειώνει ένα build:** το GitHub σας στέλνει e-mail μόνο όταν ένα build αποτύχει. Για να παίρνετε e-mail και όταν πετυχαίνει: στο github.com, ανοίξτε την εικόνα του προφίλ σας → **Settings** → **Notifications** → **System** → **Actions** και αποεπιλέξτε το **Only notify for failed workflows**.
   ```

Αν δεν υπάρχει κουμπί **Build AAPS** ή **Run workflow**:

- Open your repository and check that it has a folder `.github` with the file `workflows/build.yml`. If the repository is empty, it was not created from the template: delete it (**Settings** → bottom of the page → **Delete this repository**) and do [step 1](#aaps-builder-step1) again with the button.
- Ανοίξτε την καρτέλα **Actions**. Αν λέει ότι τα workflows είναι απενεργοποιημένα, πατήστε το πράσινο κουμπί για να τα ενεργοποιήσετε και μετά πατήστε **Build AAPS** στη λίστα.

(aaps-builder-step5)=

## Step 5 – Install the app on your phone

```{warning}
**Πριν από κάθε ενημέρωση**, [εξαγάγετε τις ρυθμίσεις σας](#ExportImportSettings-Automating-Settings-Export) στο AAPS και αντιγράψτε το αρχείο **έξω από το τηλέφωνο** (Google Drive, Dropbox…). Κρατήστε εκεί και αρκετές παλαιότερες εξαγωγές και τα αρχεία APK, ώστε να μπορείτε πάντα να επιστρέψετε σε προηγούμενη έκδοση.
```

1. Στο τηλέφωνό σας, ανοίξτε τη σελίδα ρύθμισης στο **Chrome**. Συνδεθείτε στο github.com αν σας ζητηθεί.
2. Πατήστε **Open my builds** (άνοιγμα των builds μου) και μετά το πιο νέο build με πράσινο τικ.

   ```{admonition} The GitHub app opened instead of Chrome?
   :class: note

   Η εφαρμογή GitHub δεν μπορεί να κατεβάσει builds. Στην εφαρμογή, ανοίξτε το πιο νέο build και μετά πατήστε **Artifacts ↗** ή πατήστε το εικονίδιο κοινοποίησης στο πάνω μέρος και επιλέξτε **Chrome** (ή **Copy link** και μετά επικολλήστε τον σύνδεσμο στη γραμμή διευθύνσεων του Chrome). Το build ανοίγει στο Chrome: συνεχίστε εκεί με το επόμενο βήμα.

   Για να μην ανοίγουν οι σύνδεσμοι του GitHub στην εφαρμογή: στο Android **Ρυθμίσεις** → **Εφαρμογές** → **GitHub** → **Άνοιγμα από προεπιλογή** → απενεργοποιήστε το **Άνοιγμα υποστηριζόμενων συνδέσμων**.
   ```

   ![Ολοκληρωμένο build: κατάσταση Success και 2 artifacts](../images/Building-the-App/CI/AapsBuilder50_RunSummary.png)

3. Κάντε κύλιση προς τα κάτω στη σύνοψη του build και πατήστε τον σύνδεσμο **Download AAPS**.

   ![Η σύνοψη του build με τον σύνδεσμο Download AAPS](../images/Building-the-App/CI/AapsBuilder51_DownloadLink.png)

   ```{tip}
   Κάντε κύλιση με το δάχτυλο πάνω στο κείμενο, όχι πάνω στο διάγραμμα με τα βήματα του build: αλλιώς μετακινείται το διάγραμμα αντί για τη σελίδα.
   ```

   Μπορείτε επίσης να κάνετε κύλιση πιο κάτω στο **Artifacts** και να πατήσετε το εικονίδιο λήψης δίπλα στο `aaps-….apk`.

   ![Artifacts με τις εφαρμογές για τηλέφωνο και ρολόι](../images/Building-the-App/CI/AapsBuilder52_Artifacts.png)

4. Όταν τελειώσει η λήψη, ανοίξτε το μενού του Chrome **⋮** → **Downloads** (Λήψεις), πατήστε `aaps-….apk` και επιλέξτε **Install** (Εγκατάσταση). Αν σας ζητηθεί, επιτρέψτε την εγκατάσταση εφαρμογών από αυτή την πηγή.

   ![Οι λήψεις του Chrome με το APK του AAPS](../images/Building-the-App/CI/AapsBuilder29_Downloads.png)

Το `aaps-wear-….apk` είναι η εφαρμογή για το έξυπνο ρολόι. Παραλείψτε το αν δεν χρησιμοποιείτε ρολόι.

Η εφαρμογή μένει στη σελίδα του build για **14 ημέρες**. Δεν εμφανίζεται στο **Code** του αποθετηρίου σας. Αντιγράψτε την σε ασφαλές μέρος, έξω από το τηλέφωνό σας, μαζί με τις εξαγωγές των ρυθμίσεών σας.

Για περισσότερους τρόπους εγκατάστασης της εφαρμογής, δείτε [Μεταφορά και εγκατάσταση του AAPS στο τηλέφωνό σας](TransferringAndInstallingAaps.md).

```{note}
Από τον Σεπτέμβριο του 2026, η [επαλήθευση προγραμματιστών Android](#android-developer-verification) της Google μπορεί να εμποδίζει την εγκατάσταση του APK με πάτημα στο αρχείο, ανάλογα με τη χώρα σας. Δωρεάν λύσεις εξηγούνται σε εκείνη τη σελίδα.
```

(aaps-builder-google-drive)=

## Step 6 (optional) – Also save the app in Google Drive

Μπορείτε επίσης να αποθηκεύεται κάθε build στο Google Drive σας, στον φάκελο `AAPS/<version>`. Αυτό είναι προαιρετικό: η εφαρμογή είναι πάντα διαθέσιμη στη σελίδα του build.

Χρειάζεται ένα ακόμα secret, το `GDRIVE_OAUTH2`. Step 6 of the setup page gets it from Google for you, on a phone or a computer. **AAPS** can then only see and change the files it creates in your Google Drive, nothing else.

1. On the setup page, tap **Connect Google Drive**. Google opens in a new tab.
2. Choose your Google account and allow access. If Google says the app is not verified, tap **Advanced**, then **Go to …**.
3. The new tab then shows an error such as **This site can't be reached** or **127.0.0.1 refused to connect**. **This is expected:** Google's answer is in the address of that tab. Tap the address bar, select the whole address (it starts with `http://127.0.0.1:47913/`) and copy it.
4. Go back to the setup page tab within a few minutes: Google's answer is only valid for a short time, and only once. Paste the address into **Paste the copied address here** and tap **Get GDRIVE_OAUTH2**. The page shows **GDRIVE_OAUTH2 is ready**.
5. Πατήστε **Open the secrets page** (άνοιγμα της σελίδας secrets). Πατήστε **Copy name** και μετά επικολλήστε το στο μικρό πεδίο **Name** (το όνομα είναι `GDRIVE_OAUTH2`). Tap **Copy secret**, paste it into the big **Secret** box and tap **Add secret**.

Από το επόμενο build, τα APK αποθηκεύονται και στο Google Drive.

Already have a `GDRIVE_OAUTH2` value from the preparation file of the other browser build methods? It works too: add it as the `GDRIVE_OAUTH2` secret.

Η Google σταματά την πρόσβαση αν δεν κάνετε build για 6 μήνες ή αν αλλάξετε τον κωδικό σας στη Google. Τότε το build θα σας το πει: κάντε ξανά αυτά τα βήματα. Δείτε [Το Google Refresh Token έληξε](#aaps-ci-google-token-expired).

(aaps-builder-updates)=

## Ενημέρωση AAPS

Το αποθετήριό σας δεν κάνει ποτέ build μόνο του: εσείς αποφασίζετε πότε θα γίνει build, ποια έκδοση και ποια παραλλαγή. Όταν βγει μια νέα έκδοση του AAPS:

1. [Back up your settings](#aaps-builder-step5) as explained in step 5.
2. Build the new version as in [step 4](#aaps-builder-step4). Αφήστε το `latest` ή πληκτρολογήστε τον αριθμό της έκδοσης.
3. Download and install it as in [step 5](#aaps-builder-step5).

**Updates of the build steps** reach you by themselves: at every build, your repository runs the build steps released by the AAPS developers in nightscout/aaps-builder. Nothing changes in your repository, and there is no automatic build.

**Updates of your workflow file** are rare: only when the **Run workflow** form changes, for example for a new build variant, or once if your repository was made with an earlier version of the setup page (an empty repository with a short workflow file) or from the old template. The [Docs updates & changes](../Maintenance/DocumentationUpdate.md) page says so. Your `KEYSTORE_SET` secret stays as it is. On the setup page, open **Updating your copy** at the end of step 1:

1. Tap **Open the newest workflow**. On a computer, click the **copy icon** ("Copy raw file") at the top right of the file. On a phone, open the **plain-text version** instead, press and hold the text, then **Select all** and **Copy**.
2. Tap **Open my workflow file**.
3. Replace the whole text with the copied workflow (long press on a phone: **Select all**, then **Paste**).
4. Tap **Commit changes…**, then **Commit changes**.

The first line of the file shows its version.

(aaps-builder-troubleshooting)=

## Αντιμετώπιση προβλημάτων

To see why a build failed, [read the build log](#aaps-ci-read-the-logs): the step names are different, but you find the error the same way. You can also [update a secret](#aaps-ci-update-secret) and [run the build again](#aaps-ci-rerun) the same way.

- **No "Build AAPS" or "Run workflow" button, or the repository is empty**: the repository was not created from the template. Delete it (**Settings** → bottom of the page → **Delete this repository**) and do [step 1](#aaps-builder-step1) again with the **Create my private repository** button.
- **Το build σταματά με το μήνυμα "This repository is PUBLIC"**: στο αποθετήριό σας, ανοίξτε **Settings** → **General** → **Danger Zone** → **Change visibility** → **Private** και μετά κάντε ξανά build.
- **"Secret KEYSTORE_SET is missing"**: do step 3 of the setup page.
- **"The secret is too short"**, **"The secret is not a valid code"** ή **"The secret does not contain a keystore"**: επικολλήθηκε λάθος κείμενο στο secret, συχνά η ίδια η λέξη `KEYSTORE_SET` ή μόνο ένα μέρος του κωδικού. In your repository, open **Settings** → **Secrets and variables** → **Actions**, edit `KEYSTORE_SET` and paste the long code from **Copy secret** again (redo step 2 of the setup page first if you closed it).
- **"Keystore, password or alias is wrong"**: check your keystore's password and alias, then redo steps 2 and 3 of the setup page.
- **"Version … does not exist"**: η έκδοση που πληκτρολογήσατε δεν είναι έκδοση του AAPS. Χρησιμοποιήστε `latest` ή ελέγξτε τον αριθμό της έκδοσης.
- **"Variant … is not supported"**: your workflow file is an older version. Replace it as explained in [Updating AAPS](#aaps-builder-updates).
- **"Page not found" (404) όταν η σελίδα ρύθμισης ανοίγει το GitHub**: συνδεθείτε στο github.com στον ίδιο browser (το GitHub δείχνει 404 για ιδιωτικά αποθετήρια όταν δεν είστε συνδεδεμένοι). Αν είστε συνδεδεμένοι, το όνομα χρήστη ή το όνομα του αποθετηρίου στο βήμα 1 της σελίδας ρύθμισης δεν ταιριάζει με το αποθετήριό σας. Πληκτρολογήστε ακριβώς τα ονόματα.
- **"No GitHub user with this name"** στο βήμα 1: πληκτρολογήστε το όνομα χρήστη σας στο GitHub, όπως φαίνεται στο προφίλ σας στο GitHub, όχι το e-mail σας.
- **Δεν υπάρχει σύνδεσμος Download ή άνοιξε η εφαρμογή GitHub**: η εφαρμογή GitHub δεν μπορεί να κατεβάσει builds. Open the build in Chrome as explained in [step 5](#aaps-builder-step5). Για να μην ανοίγουν οι σύνδεσμοι του GitHub στην εφαρμογή: στο Android **Ρυθμίσεις** → **Εφαρμογές** → **GitHub** → **Άνοιγμα από προεπιλογή** → απενεργοποιήστε το **Άνοιγμα υποστηριζόμενων συνδέσμων**.
- **"Google Drive access has expired or was revoked"**: redo [step 6](#aaps-builder-google-drive) and update the `GDRIVE_OAUTH2` secret.

For other GitHub and Google Drive issues, see [Browser build troubleshooting](../GettingHelp/BrowserBuildTroubleshooting.md).

```{toctree}
:hidden:

AAPS Builder setup page <BrowserBuildAapsBuilderSetup.md>
```
