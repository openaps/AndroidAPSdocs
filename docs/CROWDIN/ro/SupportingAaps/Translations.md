# Cum să traduceți textele pentru aplicația AAPS sau pentru documentație

* For the strings used in the app go to <https://crowdin.com/project/androidaps> and login using your GitHub account
* Pentru documentație, vizitați <https://crowdin.com/project/androidapsdocs> și autentificați-vă cu contul dumneavoastră GitHub

* Trimiteți o cerere de alăturare către echipa documentației. Pentru aceasta, apăsați pe steagul limbii dorite și apoi pe butonul „Join” (alăturați-vă) din colțul din dreapta sus al paginii următoare. Vă rugăm să menționați limba, oferiți câteva informații despre dumneavoastră și experiența AAPS și dacă dorești să fii traducător sau corector (numai persoane competente în traducere + utilizatori avansați AAPS).

```{admonition} Time for Approval :class: note

Aprobarea este un pas manual. Ca organizație non-profit, nu oferim SLA dar, în general, aprobarea va fi făcută în < 1 zi. Dacă nu, vă rugăm să contactați echipa Doc prin Facebook sau Discord.

    <br />* Când vă aprobăm, apăsați pe steagul
       ! Când vă aprobăm, apăsați pe steagul](../images/translation_flags.png)
    
    ## Traducerea aplicației
    
    (translations-translate-strings-for-AAPS-app)=
    ### Traducere fraze pentru aplicația AAPS
    
    * Dacă nu aveți preferințe pentru frazele pe care le traduceți doar selectați butonul "Traducere Toate" pentru a începe. Vă va arăta frazele care necesită traducere.
    
       ![Apăsați pe toate](../images/translations-click-translate-all.png)
    
    * Dacă doriți să traduceți un fișier individual, vă rugăm să căutați fișierul prin bara de căutare sau prin structura arborescentă și apăsați pe numele fișierului pentru a începe activitatea de traducere pentru frazele din acel fișier.
    
       ![Apăsați pe fraze. ml](../images/translations-click-strings.png)
    
    * Traduceți propoziții în stânga prin adăugarea de text tradus sau folosiți & editare sugestie 
    
       ! Traducere aplicație](../images/translations-translate.png)
    
    
    ### Corectați frazele pentru aplicația AAPS
    
    * Corectorii încep prin selectarea "Proofread" la începerea din ecranul de pornire al limbii.
    
       ![Proofreading mode app](../images/translations-proofreading-mode.png) 
    
    
      and approve translated texts 
    
       ![approve text](../images/translations-proofreading.png)
    
    When a proofreader approves a translation it will be added to the next version of AAPS.
    
    (translations-translation-of-the-documentation)=
    ## Translation of the documentation
    
    * Click the name of the docs page you want to translate
    
    ![Click docs page](../images/translation_WikiPage.png)
    
    
    * Translate sentences by sentence
    
        1. Textul galben este textul la care lucrați în acest moment.
    
        1. Textul verde este deja tradus. You don't need to do this again.
    
        1. The red text is the remaining text which have to be translated.
    
        1. Acesta este textul sursă la care lucrați în acest moment
    
        1. Aceasta este traducerea pe care o pregătiți. Puteți copia textul de mai sus sau puteți selecta una dintre sugestiile de mai jos.
    
        1. These are the suggestions for a translation. Especially you can see how much Crowdin rates this as a fit, or whether it was already translated in the past and only came back because the text was moved, not changed.
        1. Press the "save" button to save a proposal for the translation. It will then be passed to a proofreader for final check.
    
    ![Translation docs](../images/translation_WikiTranslate.png)
    
    * A translated page will not be published in docs before 
    
        1. traducerea este corectată
    
        1. the sync run between Crowdin and Github finished (once an hour) which creates a PR for GitHub.
    
        1. the PR in Github was approved.
    
    In general this needs 1 - 3 days but might during holiday take a little bit longer.
    
    ### Translating links
    
    ```{admonition} Links are not translated anymore
    :class: note
    
    Links are not translated anymore. În trecut exista aici o secțiune despre acest subiect, dar ea nu mai este necesară: prin trecerea la Markdown și la myst_parser, creăm explicit etichete în textul englezesc, iar acestea sunt transmise automat în celelalte limbi.
    
    

Traduceți textul care reprezintă linkul. Aveți grijă să **nu** ștergeți linkul, care este reprezentat de o pereche de etichete `<0></0>` (sau de alte numere, dacă într-un paragraf sunt mai multe linkuri).

It's the proofreaders job to have a special look on this!

### Corectare

* Corectorii trebuie să treacă pe modul de corectare
    
    ![Documentația despre modul de corectare](../images/translation_WikiProofreadingmode.png)
    
    și aprobă texte traduse
    
    ![aprobați textul](../images/translations-proofreading.png)

* When a proofreader approves a translation it will be added to the next docs build which happens in no fixed schedule on demand but around once a week except during holidays. To speed up the process you can inform docs team about new translations.