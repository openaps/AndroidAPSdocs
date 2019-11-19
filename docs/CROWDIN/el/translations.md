# Πώς να μεταφράσετε AndroidAPS και την τεκμηρίωση

* Μεταβείτε στο [ https://translations.androidaps.org ](https://translations.androidaps.org) ή [ https://wikitranslations.androidaps.org ](https://wikitranslations.androidaps.org) και συνδεθείτε χρησιμοποιώντας τον λογαριασμό σας Github

* Στείλτε ένα αίτημα συμμετοχής στην ομάδα του Wiki. Για να το κάνετε, κάντε κλικ στη σημαία της τη γλώσσα που επιθυμείτε και, στη συνέχεια, το κουμπί "Εγγραφή" στην πάνω δεξιά γωνία της επόμενης σελίδας. Παρακαλείστε να προσδιορίσετε τη γλώσσα, να δώσετε κάποιες πληροφορίες σχετικά με εσάς και την AAPS εμπειρία σας και αν θέλετε να είστε μεταφραστής ή διορθωτής (μόνο άνθρωποι ειδικευμένοι σε μετάφραση + advanced AndroidAPS χρήστες).

* Όταν σας εγκρίνουμε, κάντε κλικ στη σημαία ![Όταν σας εγκρίνουμε, κάντε κλικ στη σημαία](./images/translation_flags2019.png)

## Μετάφραση strings για την εφαρμογή AndroidAPS

* Κάνε κλικ στο strings.xml
    
    ![Κάνε κλικ στο strings.xml](./images/translations-click-strings.png)

* Μεταφράστε προτάσεις στην αριστερή πλευρά προσθέτοντας νέο μεταφρασμένο κείμενο ή χρησιμοποιήστε & επεξεργασία πρότασης
    
    ![Μετάφραση app](./images/translations-translate.png)

* Οι προεπεξεργαστές πρέπει να στραφούν στη λειτουργία Προετοιμασίας
    
    ![Λειτουργία διόρθωσης εφαρμογής](./images/translations-proofreading-mode.png)
    
    και να εγκρίνουν μεταφρασμένα κείμενα
    
    ![εγκεκριμένο κείμενο](./images/translations-proofreading.png)

Όταν ένας διορθωτής εγκρίνει μια μετάφραση, θα προστεθεί στην επόμενη έκδοση του AndroidAPS. Αρχικά θα ήταν καλό να μεταβείτε στις υπάρχουσες μεταφράσεις που δεν έχουν ακόμη εγκριθεί και να ελέγξετε για λάθη ή να τις εγκρίνετε αν είναι σωστές.

## Μετάφραση σελίδων wiki

* Κάντε κλικ στο όνομα της σελίδας wiki που θέλετε να μεταφράσετε
    
    ![Κάντε κλικ στη σελίδα του wiki](./images/translation_WikiPage.png)

* Μετάφραση πρόταση με πρόταση
    
    1 Αμετάφραστο κείμενο εμφανίζεται με κόκκινο φόντο στην αριστερή πλευρά.
    
    2 Μπορείτε να αντιγράψετε μια πρόταση για να την επεξεργαστείτε το πεδίο, κάνοντας κλικ σχετικά με την πρόταση.
    
    3 Επεξεργαστείτε την πρόταση ή να γράψετε τον εαυτό σας μετάφραση.
    
    4 Click save
    
    ![Μετάφραση wiki](./images/translation_WikiTranslate.png)

* A translated page will not be published in wiki before the translation is proofread.

### Translate headline links

* When an internal link leads only to a certain page (i.e. ../Usage/Profiles.html) no translation is necessary.
* Internal links to a certain headline (i.e. ..//Usage/Profiles.html#percentage) must be translated as the headline in the other language is different from the English original.
* If you translate a headline you can transform this into the anchor link (part after # - i.e. #percentage) by turning all letters to lower case, transforming special characters to standard characters, replacing spaces by - (minus sign) and skipping punctuation marks.
    
    Here are some examples:
    
    * Was ist ein Closed Loop System mit AndroidAPS? \---> #was-ist-ein-closed-loop-system-mit-androidaps
    * Wiki Updates & Änderungen \---> #wiki-updates-anderungen
    * AAPS-.apk Datei \---> #aaps-apk-datei

#### Link translation in Markdown files (.md)

At the moment two [markup languages](./make-a-PR#code-syntax) are used in wiki. Whereas files written in reStructuredText syntax (.rst) always show link address in Crowdin, for files in Markdown syntax (.md) you might have to activate HTML tag displaying in order to translate the link address.

If links are displayed like this in Crowdin

![Crowdin - no HTML tag display](./images/CrowdinShowURL1.png)

click on the cogwheel to open settings, select "Show" and click "Save".

![Crowdin - show HTML tag display](./images/CrowdinShowURL2.png)

Links will then be shown in standard HTML format and can be translated considering the rules mentioned [above](./translations#translate-headline-links).

![Crowdin - HTML tag display](./images/CrowdinShowURL3.png)

## Proofreading

* Οι προεπεξεργαστές πρέπει να στραφούν στη λειτουργία Προετοιμασίας
    
    ![Proofreading mode wiki](./images/translation_WikiProofreading.png)
    
    και να εγκρίνουν μεταφρασμένα κείμενα
    
    ![εγκεκριμένο κείμενο](./images/translations-proofreading.png)

* When a proofreader approves a translation it will be added to the next wiki build. To speed process you can inform wiki team about new translations.