(aaps-builder-setup)=

# Σελίδα ρύθμισης του AAPS Builder

Δημιουργήστε τη δική σας εφαρμογή **AAPS** στο GitHub. Χωρίς εγκατάσταση προγραμμάτων, χωρίς τερματικό. Την πρώτη φορά χρειάζεται περίπου 10 λεπτά. Μετά ξεκινάτε κάθε build μόνοι σας.

Κάθε βήμα εξηγείται πιο αναλυτικά, με στιγμιότυπα οθόνης, στη σελίδα [Δημιουργία μέσω browser με το AAPS Builder](#aaps-builder). Κρατήστε αυτή τη σελίδα ανοιχτή σε άλλη καρτέλα.

Τα παρακάτω κουμπιά ανοίγουν το GitHub σε νέα καρτέλα του Chrome. Για να επιστρέψετε σε αυτή τη σελίδα, πατήστε το κουμπί καρτελών δίπλα στη γραμμή διευθύνσεων του Chrome (το τετράγωνο με έναν αριθμό) και επιλέξτε αυτή τη σελίδα.

(aaps-builder-setup-step1)=

## Βήμα 1 – Δημιουργήστε το ιδιωτικό αποθετήριο build

Αυτό δημιουργεί ένα κενό ιδιωτικό αποθετήριο στον λογαριασμό σας στο GitHub. Μόνο εσείς μπορείτε να δείτε το αποθετήριο και τις εφαρμογές που δημιουργεί. **Δεν** χρειάζεται να κάνετε fork το AndroidAPS: ο πηγαίος κώδικας του AAPS κατεβαίνει από το επίσημο αποθετήριο AndroidAPS σε κάθε build.

<label class="aapsb-label" for="aapsb-user">Your GitHub username (το όνομα χρήστη σας στο GitHub)</label>
<input class="aapsb-input" type="text" id="aapsb-user" autocomplete="username" spellcheck="false" placeholder="my-github-name" />
<span class="aapsb-msg" id="aapsb-userMsg"></span>

Συνδεθείτε πρώτα στο github.com σε αυτόν τον browser (δεν έχετε λογαριασμό; δημιουργήστε έναν δωρεάν). Μετά επιστρέψτε εδώ. Γράψτε το όνομα χρήστη σας (φαίνεται στο προφίλ σας στο GitHub), όχι το email σας: η σελίδα ρωτά το GitHub αν υπάρχει αυτό το όνομα χρήστη.

<label class="aapsb-label" for="aapsb-repo">Name of your repository (το όνομα του αποθετηρίου σας)</label>
<input class="aapsb-input" type="text" id="aapsb-repo" spellcheck="false" placeholder="my-aaps" />

Κρατήστε το προτεινόμενο όνομα. Έχετε ήδη δημιουργήσει το αποθετήριό σας με άλλο όνομα; Γράψτε εδώ ακριβώς αυτό το όνομα.

Your repository:<code class="aapsb-repoUrl"></code>

Έχετε ήδη δημιουργήσει μόνοι σας ένα κενό ιδιωτικό αποθετήριο; Μην πατήσετε το παρακάτω κουμπί: γράψτε το ακριβές όνομά του παραπάνω και πηγαίνετε στο [βήμα 2](#aaps-builder-setup-step2).

<a class="aapsb-btn" id="aapsb-createRepo" target="_blank" rel="noopener">Create my private repository</a>

Στη σελίδα του GitHub που ανοίγει, το όνομα είναι ήδη συμπληρωμένο και το **Private** (ιδιωτικό) είναι επιλεγμένο. Μην αλλάξετε τίποτα και μην προσθέσετε README ή άλλα αρχεία.

1. Πατήστε το πράσινο κουμπί **Create repository**.
2. Επιστρέψτε σε αυτή τη σελίδα για το βήμα 2.

(aaps-builder-setup-step2)=

## Βήμα 2 – Προσθέστε το build workflow

Το build workflow είναι το αρχείο που λέει στο GitHub πώς να δημιουργήσει το AAPS. Προέρχεται από την τεκμηρίωση του AAPS: <a id="aapsb-viewWorkflow" href="../_static/aaps-builder/aaps-builder-build.yml" target="_blank" rel="noopener">δείτε το workflow</a>.

1. <a class="aapsb-btn" id="aapsb-addWorkflow" target="_blank" rel="noopener">Add the workflow to my repository</a> <span class="aapsb-msg" id="aapsb-workflowMsg"></span>

   Ανοίγει: <code class="aapsb-repoUrl"></code>, νέο αρχείο `.github/workflows/build.yml`, ήδη συμπληρωμένο.
2. Ελέγξτε ότι το όνομα του αρχείου στο πάνω μέρος είναι `.github/workflows/build.yml`. Μην αλλάξετε το κείμενο.
3. Πατήστε **Commit changes…** και μετά ξανά **Commit changes** στο παράθυρο που ανοίγει.

```{admonition} Updating the workflow, or the text area is empty?
:class: dropdown

1. <button class="aapsb-btn aapsb-secondary" type="button" id="aapsb-copyWorkflow">Copy workflow</button> <span class="aapsb-msg" id="aapsb-copyWorkflowMsg"></span>
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openWorkflowFile" target="_blank" rel="noopener">Open my workflow file</a>

   Αν προσθέτετε το workflow για πρώτη φορά, χρησιμοποιήστε αντί γι' αυτό το παραπάνω κουμπί.
3. Αντικαταστήστε όλο το κείμενο με το workflow που αντιγράψατε (σε τηλέφωνο, με παρατεταμένο πάτημα) και μετά πατήστε δύο φορές **Commit changes…**.
```

(aaps-builder-setup-step3)=

## Βήμα 3 – Το κλειδί υπογραφής σας

Η εφαρμογή πρέπει να υπογραφεί με το δικό σας κλειδί. Χρησιμοποιείτε πάντα το ίδιο κλειδί. Αλλιώς, για να ενημερώσετε, πρέπει να απεγκαταστήσετε το AAPS (και να χάσετε τις ρυθμίσεις του). Επιλέξτε μία από τις δύο καρτέλες.

`````{tab-set}

````{tab-item} I already have a keystore (έχω ήδη keystore)
Για παράδειγμα από το Android Studio (.jks).

<label class="aapsb-label" for="aapsb-ksFile">Keystore file</label>
<input type="file" id="aapsb-ksFile" accept=".jks,.keystore,.p12,.pfx,application/octet-stream">

<label class="aapsb-label" for="aapsb-ksPass">Keystore password</label>
<input class="aapsb-input" type="password" id="aapsb-ksPass" autocomplete="off">

<label class="aapsb-label" for="aapsb-ksAlias">Key alias</label>
<select class="aapsb-input" id="aapsb-ksAliasSel" hidden></select>
<input class="aapsb-input" type="text" id="aapsb-ksAlias" autocomplete="off" spellcheck="false" placeholder="key0">

<label class="aapsb-check"><input type="checkbox" id="aapsb-samePass" checked> Key password is the same as the keystore password</label>

<div id="aapsb-keyPassWrap" hidden>

<label class="aapsb-label" for="aapsb-keyPass">Key password</label>
<input class="aapsb-input" type="password" id="aapsb-keyPass" autocomplete="off">

</div>

<button class="aapsb-btn" type="button" id="aapsb-haveGo">Check and continue</button> <span class="aapsb-msg" id="aapsb-haveMsg"></span>
````

````{tab-item} Create a new key (δημιουργία νέου κλειδιού)
Δημιουργείτε το AAPS για πρώτη φορά; Ένα νέο κλειδί δημιουργείται εδώ, στον browser σας. Δεν στέλνεται τίποτα πουθενά.

<label class="aapsb-label" for="aapsb-newPass">Choose a password (at least 8 characters, no accented letters) – επιλέξτε κωδικό (τουλάχιστον 8 χαρακτήρες, χωρίς γράμματα με τόνους)</label>
<input class="aapsb-input" type="password" id="aapsb-newPass" autocomplete="new-password">

<label class="aapsb-label" for="aapsb-newPass2">Repeat the password (επαναλάβετε τον κωδικό)</label>
<input class="aapsb-input" type="password" id="aapsb-newPass2" autocomplete="new-password">

<button class="aapsb-btn" type="button" id="aapsb-newGo">Create key</button> <span class="aapsb-msg" id="aapsb-newMsg"></span>

<div class="aapsb-box" id="aapsb-backupBox" hidden>

**Αποθηκεύστε ένα αντίγραφο ασφαλείας του κλειδιού σας!**

Κατεβάστε το αρχείο. Κρατήστε αυτά τα τρία μαζί, σε ασφαλές μέρος εκτός του τηλεφώνου σας (π.χ. στον δικό σας χώρο αποθήκευσης στο cloud):

- το αρχείο `aaps-keystore.jks`
- τον κωδικό σας
- το alias του κλειδιού: **`key0`**

Θα χρειαστείτε και τα τρία, αν ποτέ δημιουργήσετε το AAPS με άλλον τρόπο, π.χ. με το Android Studio.

<button class="aapsb-btn" type="button" id="aapsb-downloadKs">Download backup (aaps-keystore.jks)</button>

</div>
````

`````
(aaps-builder-setup-step4)=
## Βήμα 4 – Δώστε το κλειδί στο αποθετήριό σας
<span id="aapsb-s4wait">Ολοκληρώστε πρώτα το βήμα 3.</span>

<div id="aapsb-s4ready" hidden>
  1. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets" target="_blank" rel="noopener">Open the secrets page</a> Ανοίγει: <code class="aapsb-repoUrl"></code> Βλέπετε "Page not found" (404); Ελέγξτε πρώτα ότι είστε συνδεδεμένοι στο github.com σε αυτόν τον browser: το GitHub δείχνει 404 για ιδιωτικά αποθετήρια όταν δεν είστε συνδεδεμένοι. Αλλιώς, το όνομα χρήστη ή το όνομα αποθετηρίου στο βήμα 1 δεν ταιριάζει με το αποθετήριό σας: ελέγξτε τα στο github.com και γράψτε τα στο βήμα 1. 2. Πατήστε "Copy name" και μετά επικολλήστε το στο μικρό πεδίο "Name": `KEYSTORE_SET` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="name">Copy name</button> 3. Πατήστε "Copy secret" και μετά επικολλήστε τον μακρύ κώδικα στο μεγάλο πλαίσιο "Secret": <code id="aapsb-secretPreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="secret">Copy secret</button> <span class="aapsb-msg" id="aapsb-copyMsg"></span> Το secret είναι ένας πολύ μακρύς κώδικας (χιλιάδες χαρακτήρες), ΟΧΙ η λέξη KEYSTORE_SET. Αντιγράψτε και επικολλήστε πρώτα το όνομα και μετά τον μακρύ κώδικα. 4. Πατήστε "Add secret". Έτοιμο. Δεν χρειάζεται να το κάνετε ποτέ ξανά.
</div>
(aaps-builder-setup-step5)=
## Βήμα 5 – Δημιουργήστε την εφαρμογή

1. <a class="aapsb-btn" id="aapsb-openActions" target="_blank" rel="noopener">Open the build page</a>

   Ανοίγει: <code class="aapsb-repoUrl"></code>

   Βλέπετε "Page not found" (404); Ελέγξτε πρώτα ότι είστε συνδεδεμένοι στο github.com σε αυτόν τον browser: το GitHub δείχνει 404 για ιδιωτικά αποθετήρια όταν δεν είστε συνδεδεμένοι. Αλλιώς, το όνομα χρήστη ή το όνομα αποθετηρίου στο βήμα 1 δεν ταιριάζει με το αποθετήριό σας: ελέγξτε τα στο github.com και γράψτε τα στο βήμα 1. Άνοιξε αντί γι' αυτό η εφαρμογή GitHub; Πατήστε "RUN WORKFLOW", ελέγξτε την έκδοση και την παραλλαγή (variant) και πατήστε ξανά "RUN WORKFLOW". Αν η εφαρμογή δείχνει ακόμα "Nothing to see here", τραβήξτε τη λίστα προς τα κάτω για να δείτε το build σας.
2. Αν σας ζητηθεί, πατήστε το πράσινο κουμπί για να ενεργοποιήσετε τα workflows.
3. Πατήστε "Run workflow" και μετά το πράσινο κουμπί "Run workflow". Το "latest" δημιουργεί την πιο νέα έκδοση του AAPS. ***συμβουλή:*** *μπορείτε να δημιουργήσετε άλλη έκδοση γράφοντας το όνομα του [tag](https://github.com/nightscout/AndroidAPS/tags) της αντί για "latest"*
4. Περιμένετε περίπου 15–30 λεπτά. Ένα πράσινο τικ σημαίνει ότι τελείωσε.
Θέλετε ένα email όταν τελειώσει το build; Το GitHub σας στέλνει email μόνο όταν ένα build αποτύχει. Για να παίρνετε email και όταν πετύχει: στο github.com, ανοίξτε την εικόνα του προφίλ σας → Settings → Notifications → System → Actions και αποεπιλέξτε το "Only notify for failed workflows".

```{admonition} No "Build AAPS" / "Run workflow" button?
:class: warning

1. Ανοίξτε το αποθετήριό σας και ελέγξτε ότι το αρχείο `.github/workflows/build.yml` υπάρχει. Αν λείπει ή έχει άλλο όνομα, κάντε ξανά το [βήμα 2](#aaps-builder-setup-step2).
2. Ανοίξτε την καρτέλα Actions. Αν λέει ότι τα workflows είναι απενεργοποιημένα, πατήστε το πράσινο κουμπί για να τα ενεργοποιήσετε. Μετά πατήστε "Build AAPS" στη λίστα.
```

(aaps-builder-setup-step6)=

## Βήμα 6 – Εγκατάσταση στο τηλέφωνό σας

```{admonition} Before every update: back up your settings!
:class: warning

1. Στο AAPS: Συντήρηση → Εξαγωγή ρυθμίσεων. (Κάντε το έτσι κι αλλιώς τακτικά, π.χ. μετά από μια αλλαγή προφίλ ή μία φορά τον μήνα.)
2. Αντιγράψτε το αρχείο της εξαγωγής ΕΞΩ από το τηλέφωνο, π.χ. στο Google Drive ή στο Dropbox. Ένα αντίγραφο ασφαλείας που υπάρχει μόνο στο τηλέφωνο χάνεται μαζί με το τηλέφωνο.
3. Κρατήστε εκεί και τα αρχεία APK και αρκετές παλαιότερες εξαγωγές. Έτσι μπορείτε πάντα να επιστρέψετε σε προηγούμενη κατάσταση.

[Πώς να κάνετε εξαγωγή ρυθμίσεων](#ExportImportSettings-Settings-Export) · [Συχνές Ερωτήσεις AAPS: πώς να οργανώσετε τα αντίγραφα ασφαλείας](#FAQ-organize-backups)
```

1. Ανοίξτε αυτή τη σελίδα στο τηλέφωνό σας, στον browser (Chrome). Συνδεθείτε στο github.com αν σας ζητηθεί.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openRuns" target="_blank" rel="noopener">Open my builds</a>

   Άνοιξε αντί γι' αυτό η εφαρμογή GitHub; Δεν μπορεί να κατεβάσει builds. Στην εφαρμογή, ανοίξτε το πιο νέο build και πατήστε "Artifacts ↗" ή πατήστε το εικονίδιο κοινοποίησης και επιλέξτε Chrome (ή "Copy link" και μετά επικολλήστε τον σύνδεσμο στη γραμμή διευθύνσεων του Chrome). Συνεχίστε στο Chrome.

   Βλέπετε "Page not found" (404); Ελέγξτε πρώτα ότι είστε συνδεδεμένοι στο github.com σε αυτόν τον browser: το GitHub δείχνει 404 για ιδιωτικά αποθετήρια όταν δεν είστε συνδεδεμένοι. Αλλιώς, το όνομα χρήστη ή το όνομα αποθετηρίου στο βήμα 1 δεν ταιριάζει με το αποθετήριό σας: ελέγξτε τα στο github.com και γράψτε τα στο βήμα 1.

   Για να μην ανοίγουν οι σύνδεσμοι του GitHub στην εφαρμογή: Ρυθμίσεις Android → Εφαρμογές → GitHub → Άνοιγμα από προεπιλογή → απενεργοποιήστε το "Άνοιγμα υποστηριζόμενων συνδέσμων" (Open supported links).
3. Πατήστε το πιο νέο build με πράσινο τικ ✅.
4. Κάντε κύλιση προς τα κάτω στη σύνοψη του build και πατήστε τον μεγάλο σύνδεσμο "📱 Download AAPS …" (ή κάντε κύλιση πιο κάτω στο "Artifacts" και πατήστε το aaps-….apk). Κάντε κύλιση με το δάχτυλο πάνω στο κείμενο, όχι πάνω στο διάγραμμα με τα βήματα του build.
5. Όταν τελειώσει η λήψη, πατήστε το αρχείο και επιλέξτε Εγκατάσταση (Install). Αν σας ζητηθεί, επιτρέψτε την εγκατάσταση εφαρμογών από αυτή την πηγή.
6. Το aaps-wear-….apk είναι για έξυπνο ρολόι. Παραλείψτε το αν δεν χρησιμοποιείτε ρολόι.

Το APK δεν φαίνεται στο "Code" του αποθετηρίου σας, μόνο στη σελίδα του build. Φυλάσσεται για 14 ημέρες.

Νέα έκδοση του AAPS; Κάντε αντίγραφο ασφαλείας των ρυθμίσεών σας και μετά δημιουργήστε τη με το [βήμα 5](#aaps-builder-setup-step5). Το αποθετήριό σας δεν δημιουργεί ποτέ τίποτα μόνο του.

(aaps-builder-setup-step7)=

## Βήμα 7 – Προαιρετικά: η εφαρμογή στο Google Drive

Θέλετε το APK να εμφανίζεται στο Google Drive σας (και να μένει εκεί για πάντα); Προσθέστε ένα ακόμα secret.

1. Πάρτε μια τιμή GDRIVE_OAUTH2 όπως εξηγείται στην τεκμηρίωση του AAPS (χρησιμοποιεί την επίσημη σελίδα προετοιμασίας του AAPS, σε υπολογιστή): [Αποθήκευση των builds στο Google Drive](#aaps-builder-google-drive).
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets2" target="_blank" rel="noopener">Open the secrets page</a>

   Ανοίγει:<code class="aapsb-repoUrl"></code>

   Βλέπετε "Page not found" (404); Ελέγξτε πρώτα ότι είστε συνδεδεμένοι στο github.com σε αυτόν τον browser: το GitHub δείχνει 404 για ιδιωτικά αποθετήρια όταν δεν είστε συνδεδεμένοι. Αλλιώς, το όνομα χρήστη ή το όνομα αποθετηρίου στο βήμα 1 δεν ταιριάζει με το αποθετήριό σας: ελέγξτε τα στο github.com και γράψτε τα στο βήμα 1.
3. Πατήστε "Copy name" και μετά επικολλήστε το στο μικρό πεδίο "Name": `GDRIVE_OAUTH2` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="gdrive">Copy name</button>
4. Επικολλήστε την τιμή GDRIVE_OAUTH2 στο μεγάλο πλαίσιο "Secret" και μετά πατήστε "Add secret".

Από το επόμενο build, τα APK αποθηκεύονται και στο Google Drive, στον φάκελο AAPS/&lt;version&gt;.

Αν δεν κάνετε build για 6 μήνες ή αν αλλάξετε τον κωδικό σας στο Google, η Google σταματά την πρόσβαση. Τότε το build σας το λέει: κάντε ξανά αυτό το βήμα.

----

Όλα σε αυτή τη σελίδα εκτελούνται στον browser σας. Το κλειδί και οι κωδικοί σας δεν στέλνονται ποτέ πουθενά, εκτός από εκεί όπου τα επικολλάτε εσείς. Μόνο το όνομα χρήστη σας στο GitHub στέλνεται στο GitHub, για να ελεγχθεί ότι υπάρχει. Η σελίδα και το workflow είναι μέρος της τεκμηρίωσης του AAPS και βασίζονται στο AAPS Builder (AGPL-3.0).

<div id="aapsb-msgs" hidden>

- <span data-aapsb-msg="copied">Ο μακρύς κώδικας αντιγράφηκε: επικολλήστε τον στο μεγάλο πλαίσιο "Secret" και μετά πατήστε "Add secret".</span>
- <span data-aapsb-msg="copiedName">Το όνομα αντιγράφηκε: επικολλήστε το στο μικρό πεδίο "Name".</span>
- <span data-aapsb-msg="userOk">✓ Ο χρήστης GitHub βρέθηκε.</span>
- <span data-aapsb-msg="userBad">✗ Δεν υπάρχει χρήστης GitHub με αυτό το όνομα. Γράψτε το όνομα χρήστη σας (φαίνεται στο προφίλ σας στο GitHub), όχι το email σας.</span>
- <span data-aapsb-msg="copiedShort">Αντιγράφηκε ✓</span>
- <span data-aapsb-msg="needUser">Γράψτε πρώτα το όνομα χρήστη σας στο GitHub στο βήμα 1.</span>
- <span data-aapsb-msg="workflowCopied">Το workflow αντιγράφηκε (έκδοση {v}). Επικολλήστε το στο GitHub.</span>
- <span data-aapsb-msg="workflowReady">Workflow version {v} is ready.</span>
- <span data-aapsb-msg="workflowErr">Δεν ήταν δυνατή η ανάγνωση του αρχείου workflow. Φορτώστε ξανά αυτή τη σελίδα και δοκιμάστε ξανά.</span>
- <span data-aapsb-msg="errPipe">Οι κωδικοί και το alias δεν μπορούν να περιέχουν τον χαρακτήρα |</span>
- <span data-aapsb-msg="errNoFile">Επιλέξτε το αρχείο keystore σας.</span>
- <span data-aapsb-msg="errEmpty">Συμπληρώστε τον κωδικό και το alias.</span>
- <span data-aapsb-msg="errPass">Λάθος κωδικός keystore.</span>
- <span data-aapsb-msg="errKeyPass">Λάθος κωδικός κλειδιού.</span>
- <span data-aapsb-msg="errAlias">Το alias δεν βρέθηκε στο keystore. Διαθέσιμα: {aliases}</span>
- <span data-aapsb-msg="errFormat">Αυτό δεν μοιάζει με αρχείο keystore.</span>
- <span data-aapsb-msg="okHave">Keystore OK! Continue with step 4.</span>
- <span data-aapsb-msg="okHaveUnchecked">Το keystore διαβάστηκε. Ο κωδικός θα ελεγχθεί κατά το build. Συνεχίστε με το βήμα 4.</span>
- <span data-aapsb-msg="errShort">Ο κωδικός πρέπει να έχει τουλάχιστον 8 χαρακτήρες.</span>
- <span data-aapsb-msg="errAscii">Χρησιμοποιήστε μόνο a–z, A–Z, 0–9 και σύμβολα όπως ! ? # – χωρίς κενά, χωρίς γράμματα με τόνους και όχι |</span>
- <span data-aapsb-msg="errMatch">Οι κωδικοί δεν είναι ίδιοι.</span>
- <span data-aapsb-msg="working">Δημιουργία κλειδιού…</span>
- <span data-aapsb-msg="okNew">Key created. Κατεβάστε το αντίγραφο ασφαλείας παρακάτω και μετά συνεχίστε με το βήμα 4.</span>

</div>

<style>
  .rst-content .aapsb-label { display: block; font-weight: 700; margin: 14px 0 4px; }
  .rst-content .aapsb-input { display: block; width: 100%; max-width: 480px; padding: 8px 10px; font: inherit; border: 1px solid #ccc; border-radius: 4px; }
  .rst-content .aapsb-check { display: flex; gap: 8px; align-items: center; margin-top: 10px; }
  .rst-content .aapsb-btn, .rst-content a.aapsb-btn:visited {
    display: inline-block; margin: 4px 0; padding: 8px 16px; border-radius: 4px; border: 1px solid #2980b9; cursor: pointer;
    background: #2980b9; color: #fff; font: inherit; font-weight: 700; text-decoration: none;
  }
  .rst-content .aapsb-btn:hover { background: #1f6391; color: #fff; }
  .rst-content .aapsb-btn.aapsb-secondary, .rst-content a.aapsb-btn.aapsb-secondary:visited { background: transparent; color: #2980b9; }
  .rst-content .aapsb-btn.aapsb-secondary:hover { background: #e7f2fa; }
  .rst-content .aapsb-btn:disabled { opacity: .45; cursor: not-allowed; }
  .rst-content .aapsb-msg { display: inline-block; margin-left: 6px; }
  .rst-content .aapsb-msg.ok { color: #1a7f37; } .rst-content .aapsb-msg.err { color: #cf222e; } .rst-content .aapsb-msg.warn { color: #9a6700; }
  .rst-content .aapsb-box { background: #e7f2fa; border-radius: 4px; padding: 12px 14px; margin: 12px 0; }
  .rst-content section.aapsb-done > h2::after { content: " ✓"; color: #1a7f37; }
  .rst-content [hidden] { display: none !important; }
</style>

<script src="../_static/aaps-builder/aaps-builder.forge.min.js"></script>
<script>
// AAPS Builder setup page logic. Walks the user through creating an empty private GitHub
// repository, adding the build workflow (_static/aaps-builder/aaps-builder-build.yml), and
// creating the KEYSTORE_SET secret. The repository then builds AAPS from the official source,
// github.com/nightscout/AndroidAPS, with GitHub Actions.
//
// The keystore and passwords never leave this browser. The only requests are reading the workflow
// file and asking GitHub's public API whether the typed username exists (only the name is sent).
// The page's Content-Security-Policy (set in docs/shared.conf.py) allows only the AAPS
// documentation site itself and https://api.github.com.
//
// Based on AAPS Builder by the AAPS Builder authors (github.com/dio99/aaps-builder), GNU Affero
// General Public License v3.0 (AGPL-3.0). Modified for the AAPS documentation: no template
// repository, workflow and page maintained in github.com/openaps/AndroidAPSdocs, texts in the
// page so they can be translated.
// Vendor library: _static/aaps-builder/aaps-builder.forge.min.js = node-forge 1.3.1
// (BSD-3-Clause or GPL-2.0), https://github.com/digitalbazaar/forge. Pinned: it is the
// unmodified dist/forge.min.js of the npm package node-forge@1.3.1, checked against the npm
// registry integrity hash. SHA-256 (verify after any change, update only after review):
// dc67fd132427ad96c9666c844b39565413c40ddb1f2d063c53512fbf6d387dfd
(() => {
  const REPO_NAME = 'my-aaps';
  const WORKFLOW_PATH = '.github/workflows/build.yml';       // where it goes in the user's repository

  const $ = id => document.getElementById('aapsb-' + id);
  // The texts are in the page (hidden list above), so they are translated with it.
  const M = {};
  document.querySelectorAll('[data-aapsb-msg]').forEach(el => { M[el.dataset.aapsbMsg] = el.textContent.trim(); });
  const t = (key, vars = {}) => M[key].replace(/\{(\w+)\}/g, (all, k) => k in vars ? vars[k] : all);
  const store = {
    get: k => { try { return localStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch {} }
  };
  const done = step => { const el = document.getElementById('aaps-builder-setup-step' + step); if (el) el.closest('section').classList.add('aapsb-done'); };

  // ---------- step 1: links ----------
  const userInput = $('user');
  userInput.value = store.get('ghUser') || '';
  const user = () => userInput.value.trim().replace(/^@/, '');
  const repoInput = $('repo');
  repoInput.value = store.get('ghRepo') || REPO_NAME;
  const repo = () => repoInput.value.trim() || REPO_NAME;

  // Step 2: GitHub's new-file page, prefilled with the file name and the workflow text (value=).
  // The workflow is short (it calls the reviewed build steps in the AAPS documentation repository).
  let workflowText = null;
  const newFilePath = () => '/new/main?filename=' + encodeURIComponent(WORKFLOW_PATH) +
    (workflowText ? '&value=' + encodeURIComponent(workflowText) : '');

  const LINKS = [
    ['addWorkflow', newFilePath],
    ['openWorkflowFile', '/edit/main/' + WORKFLOW_PATH],
    ['openSecrets', '/settings/secrets/actions/new'],
    ['openSecrets2', '/settings/secrets/actions/new'],
    ['openActions', '/actions/workflows/build.yml'],
    ['openRuns', '/actions/workflows/build.yml']
  ];

  function updateLinks() {
    const u = user();
    store.set('ghUser', u);
    store.set('ghRepo', repo());
    // github.com/new with documented prefill parameters: an EMPTY private repository, no template.
    const p = new URLSearchParams({ owner: '@me', name: repo(), visibility: 'private' });
    $('createRepo').href = 'https://github.com/new?' + p;
    document.querySelectorAll('.aapsb-repoUrl').forEach(el => { el.textContent = `github.com/${u || '…'}/${repo()}`; });
    const base = `https://github.com/${encodeURIComponent(u)}/${encodeURIComponent(repo())}`;
    for (const [id, path] of LINKS) $(id).href = u ? base + (typeof path === 'function' ? path() : path) : '#aaps-builder-setup-step1';
  }
  userInput.addEventListener('input', updateLinks);
  // Check that the username exists (GitHub's public API, sends only the name)
  let userTimer;
  async function checkUser() {
    const u = user();
    if (!u) { $('userMsg').textContent = ''; return; }
    try {
      const r = await fetch(`https://api.github.com/users/${encodeURIComponent(u)}`);
      if (u !== user()) return;
      if (r.status === 200) msg('userMsg', t('userOk'), 'ok');
      else if (r.status === 404) msg('userMsg', t('userBad'), 'err');
      else $('userMsg').textContent = '';
    } catch { $('userMsg').textContent = ''; }
  }
  userInput.addEventListener('input', () => { clearTimeout(userTimer); userTimer = setTimeout(checkUser, 600); });
  repoInput.addEventListener('input', updateLinks);
  for (const [id] of LINKS) {
    $(id).addEventListener('click', e => { if (!user()) { e.preventDefault(); userInput.focus(); alert(t('needUser')); } });
  }

  // ---------- helpers ----------
  const utf8 = s => new TextEncoder().encode(s);
  function bytesToB64(bytes) {
    let s = '';
    for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
    return btoa(s);
  }
  const binStrToBytes = s => Uint8Array.from(s, c => c.charCodeAt(0));
  const sha1 = async (...parts) => {
    const all = new Uint8Array(parts.reduce((n, p) => n + p.length, 0));
    let o = 0; for (const p of parts) { all.set(p, o); o += p.length; }
    return new Uint8Array(await crypto.subtle.digest('SHA-1', all));
  };
  const eq = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);
  // JKS uses the password as UTF-16BE bytes
  const utf16be = s => { const b = new Uint8Array(s.length * 2); for (let i = 0; i < s.length; i++) { b[2*i] = s.charCodeAt(i) >> 8; b[2*i+1] = s.charCodeAt(i) & 255; } return b; };

  async function copyText(text) {
    try { await navigator.clipboard.writeText(text); }
    catch {
      const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta);
      ta.select(); document.execCommand('copy'); ta.remove();
    }
  }
  function msg(id, text, cls) { const el = $(id); el.className = 'aapsb-msg ' + cls; el.textContent = text; }

  // ---------- step 2: build workflow (read from the AAPS documentation site only) ----------
  const WORKFLOW_URL = $('viewWorkflow').href;               // _static/aaps-builder/aaps-builder-build.yml
  async function loadWorkflow() {
    const r = await fetch(WORKFLOW_URL, { cache: 'no-store' });
    if (!r.ok) throw new Error(r.status);
    const text = (await r.text()).replace(/\r\n/g, '\n');
    const v = (text.match(/^# AAPS Builder build workflow, version (\S+)/m) || [])[1];
    if (!v) throw new Error('not the workflow');
    return { text, v };
  }
  loadWorkflow().then(({ text, v }) => {
    workflowText = text;
    msg('workflowMsg', t('workflowReady', { v }), 'ok');
    updateLinks();
  }).catch(e => { console.error(e); msg('workflowMsg', t('workflowErr'), 'err'); });
  $('addWorkflow').addEventListener('click', e => {
    if (!workflowText) { e.preventDefault(); msg('workflowMsg', t('workflowErr'), 'err'); return; }
    if (user()) done(2);
  });
  $('copyWorkflow').addEventListener('click', async () => {
    try {
      const { text, v } = await loadWorkflow();
      await copyText(text);
      msg('copyWorkflowMsg', t('workflowCopied', { v }), 'ok');
    } catch (e) {
      console.error(e);
      msg('copyWorkflowMsg', t('workflowErr'), 'err');
    }
  });

  let secretValue = null;
  function setSecret(ksBytes, storePass, alias, keyPass) {
    const raw = [bytesToB64(ksBytes), storePass, alias, keyPass].join('|');
    secretValue = bytesToB64(utf8(raw));
    $('secretPreview').textContent = secretValue.slice(0, 16) + '…';
    done(3);
    $('s4wait').hidden = true;
    $('s4ready').hidden = false;
  }

  // ---------- step 3a: existing keystore ----------
  function parseJks(bytes) {
    const v = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    if (v.getUint32(0) !== 0xFEEDFEED) return null;
    let o = 12; const n = v.getUint32(8); const entries = [];
    const readUtf = () => { const len = v.getUint16(o); o += 2; const s = new TextDecoder().decode(bytes.subarray(o, o + len)); o += len; return s; };
    const skipCert = () => { if (v.getUint32(4) === 2) readUtf(); const len = v.getUint32(o); o += 4 + len; };
    for (let i = 0; i < n; i++) {
      const tag = v.getUint32(o); o += 4;
      const alias = readUtf(); o += 8;
      if (tag === 1) {
        const len = v.getUint32(o); o += 4;
        const key = bytes.subarray(o, o + len); o += len;
        const chain = v.getUint32(o); o += 4;
        for (let c = 0; c < chain; c++) skipCert();
        entries.push({ alias, key });
      } else { skipCert(); }
    }
    return { entries, body: bytes.subarray(0, o), digest: bytes.subarray(o, o + 20) };
  }

  // Sun JKS KeyProtector: verify key password without fully decrypting
  async function jksKeyPassOk(encKeyInfo, pass) {
    // EncryptedPrivateKeyInfo: SEQ { AlgId, OCTET STRING data }
    const asn = forge.asn1.fromDer(forge.util.createBuffer(String.fromCharCode.apply(null, encKeyInfo)));
    const data = binStrToBytes(asn.value[1].value);
    const salt = data.subarray(0, 20), enc = data.subarray(20, data.length - 20), check = data.subarray(data.length - 20);
    const pw = utf16be(pass);
    const plain = new Uint8Array(enc.length);
    let d = salt;
    for (let off = 0; off < enc.length; off += 20) {
      d = await sha1(pw, d);
      for (let j = 0; j < 20 && off + j < enc.length; j++) plain[off + j] = enc[off + j] ^ d[j];
    }
    return eq(await sha1(pw, plain), check);
  }

  let haveBytes = null, haveKind = null, haveJks = null;
  $('ksFile').addEventListener('change', async () => {
    const f = $('ksFile').files[0]; $('haveMsg').textContent = '';
    if (!f) return;
    haveBytes = new Uint8Array(await f.arrayBuffer());
    haveJks = null; haveKind = null;
    try { haveJks = parseJks(haveBytes); } catch { haveJks = null; }
    if (haveJks) {
      haveKind = 'jks';
      const sel = $('ksAliasSel');
      sel.innerHTML = '';
      haveJks.entries.forEach(e => sel.add(new Option(e.alias, e.alias)));
      if (haveJks.entries.length > 0) {
        sel.hidden = false; $('ksAlias').hidden = true; $('ksAlias').value = haveJks.entries[0].alias;
        sel.onchange = () => { $('ksAlias').value = sel.value; };
      }
    } else if (haveBytes[0] === 0x30) {
      haveKind = 'p12';
      $('ksAliasSel').hidden = true; $('ksAlias').hidden = false;
    } else {
      msg('haveMsg', t('errFormat'), 'err');
    }
  });
  $('samePass').addEventListener('change', () => { $('keyPassWrap').hidden = $('samePass').checked; });

  $('haveGo').addEventListener('click', async () => {
    const pass = $('ksPass').value, alias = $('ksAlias').value.trim();
    const keyPass = $('samePass').checked ? pass : $('keyPass').value;
    if (!haveBytes) return msg('haveMsg', t('errNoFile'), 'err');
    if (!haveKind) return msg('haveMsg', t('errFormat'), 'err');
    if (!pass || !alias || !keyPass) return msg('haveMsg', t('errEmpty'), 'err');
    if ([pass, alias, keyPass].some(s => s.includes('|'))) return msg('haveMsg', t('errPipe'), 'err');

    try {
      if (haveKind === 'jks') {
        const d = await sha1(utf16be(pass), utf8('Mighty Aphrodite'), haveJks.body);
        if (!eq(d, haveJks.digest)) return msg('haveMsg', t('errPass'), 'err');
        const entry = haveJks.entries.find(e => e.alias.toLowerCase() === alias.toLowerCase());
        if (!entry) return msg('haveMsg', t('errAlias', { aliases: haveJks.entries.map(e => e.alias).join(', ') }), 'err');
        if (!(await jksKeyPassOk(entry.key, keyPass))) return msg('haveMsg', t('errKeyPass'), 'err');
        setSecret(haveBytes, pass, entry.alias, keyPass);
        return msg('haveMsg', t('okHave'), 'ok');
      }
      // PKCS12
      let p12;
      try {
        const asn = forge.asn1.fromDer(forge.util.createBuffer(String.fromCharCode.apply(null, haveBytes)));
        p12 = forge.pkcs12.pkcs12FromAsn1(asn, pass);
      } catch (e) {
        if (/password|MAC/i.test(String(e && e.message))) return msg('haveMsg', t('errPass'), 'err');
        // Could not parse locally; let the build validate it
        setSecret(haveBytes, pass, alias, keyPass);
        return msg('haveMsg', t('okHaveUnchecked'), 'warn');
      }
      const names = [...new Set(p12.safeContents.flatMap(sc => sc.safeBags.flatMap(b => (b.attributes.friendlyName || []))))];
      if (names.length && !names.some(n => n.toLowerCase() === alias.toLowerCase())) {
        return msg('haveMsg', t('errAlias', { aliases: names.join(', ') }), 'err');
      }
      setSecret(haveBytes, pass, alias, keyPass);
      msg('haveMsg', t('okHave'), 'ok');
    } catch (e) {
      console.error(e);
      setSecret(haveBytes, pass, alias, keyPass);
      msg('haveMsg', t('okHaveUnchecked'), 'warn');
    }
  });

  // ---------- step 3b: new keystore ----------
  // Use the browser's cryptographic RNG for everything forge needs (salts, IVs, serial)
  forge.random.getBytesSync = n => String.fromCharCode.apply(null, crypto.getRandomValues(new Uint8Array(n)));
  forge.random.getBytes = (n, cb) => cb ? cb(null, forge.random.getBytesSync(n)) : forge.random.getBytesSync(n);
  let newKsBytes = null;
  $('newGo').addEventListener('click', async () => {
    const p1 = $('newPass').value, p2 = $('newPass2').value;
    if (p1.length < 8) return msg('newMsg', t('errShort'), 'err');
    if (p1 !== p2) return msg('newMsg', t('errMatch'), 'err');
    if (!/^[\x21-\x7e]+$/.test(p1) || p1.includes('|')) return msg('newMsg', t('errAscii'), 'err');
    $('newGo').disabled = true;
    msg('newMsg', t('working'), '');
    try {
      const kp = await crypto.subtle.generateKey(
        { name: 'RSASSA-PKCS1-v1_5', modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' },
        true, ['sign', 'verify']);
      const pkcs8 = new Uint8Array(await crypto.subtle.exportKey('pkcs8', kp.privateKey));
      const key = forge.pki.privateKeyFromAsn1(forge.asn1.fromDer(forge.util.createBuffer(String.fromCharCode.apply(null, pkcs8))));
      const cert = forge.pki.createCertificate();
      cert.publicKey = forge.pki.setRsaPublicKey(key.n, key.e);
      cert.serialNumber = '01' + forge.util.bytesToHex(forge.random.getBytesSync(8));
      cert.validity.notBefore = new Date();
      cert.validity.notAfter = new Date(); cert.validity.notAfter.setFullYear(cert.validity.notBefore.getFullYear() + 50);
      const subject = [{ name: 'commonName', value: 'AAPS' }];
      cert.setSubject(subject); cert.setIssuer(subject);
      cert.sign(key, forge.md.sha256.create());
      const asn = forge.pkcs12.toPkcs12Asn1(key, [cert], p1, { algorithm: '3des', friendlyName: 'key0', generateLocalKeyId: true });
      newKsBytes = binStrToBytes(forge.asn1.toDer(asn).getBytes());
      setSecret(newKsBytes, p1, 'key0', p1);
      $('backupBox').hidden = false;
      msg('newMsg', t('okNew'), 'ok');
    } catch (e) {
      console.error(e);
      msg('newMsg', String(e), 'err');
      $('newGo').disabled = false;
    }
  });
  $('downloadKs').addEventListener('click', () => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([newKsBytes], { type: 'application/octet-stream' }));
    a.download = 'aaps-keystore.jks';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  });

  // ---------- step 4 / 7: copy secret names and value ----------
  document.querySelectorAll('[data-aapsb-copy]').forEach(b => b.addEventListener('click', async () => {
    const fixed = { name: 'KEYSTORE_SET', gdrive: 'GDRIVE_OAUTH2' };
    await copyText(fixed[b.dataset.aapsbCopy] ?? secretValue);
    if (b.dataset.aapsbCopy === 'secret') msg('copyMsg', t('copied'), 'ok');
    if (b.dataset.aapsbCopy === 'name') msg('copyMsg', t('copiedName'), 'ok');
    const label = b.textContent;
    b.textContent = t('copiedShort');
    setTimeout(() => { b.textContent = label; }, 2000);
  }));

  updateLinks();
  checkUser();
})();
</script>
