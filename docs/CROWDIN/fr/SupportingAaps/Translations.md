# How to translate strings for the AAPS app or the documentation

* For the strings used in the app go to <https://crowdin.com/project/androidaps> and login using your GitHub account
* Pour la documentation, allez sur <https://crowdin.com/project/androidapsdocs> et connectez vous à l'aide de votre compte GitHub

* Envoyez une demande d'adhésion à l'équipe Wiki. Pour le faire, cliquez sur le drapeau de la langue souhaitée, puis sur le bouton "Join" dans le coin supérieur droit de la page suivante. Please specify language, give some information about you and your AAPS experience and if you want to be a translator or proofreader (only people skilled in translating + advanced AAPS users).

```{admonition} Etape d'Approbation :class: Remarque

L'approbation est une étape manuelle. En tant qu’organisation à but non lucratif, nous ne fournissons pas de SLA, mais en général l’approbation se fera dans la journée. Si ce n'est pas le cas, veuillez contacter l'équipe Doc via Facebook ou Discord.

    <br />* When we approve you, click the flag
       ![When we approve you, click the flag](../images/translation_flags.png)
    
    ## Translation of the app
    
    (translations-translate-strings-for-AAPS-app)=
    ### Translate strings for AAPS app
    
    * If you have no preference for strings you translate just select the "Translate All" button to start. Cela vous montrera toutes les chaînes de caractères qui ont besoin de traduction.
    
       ![Click translate all](../images/translations-click-translate-all.png)
    
    * If you want to translate an individual file please search for the file via search dialog or tree structure and click on the filename to start the translation work on strings in that file.
    
       ![Click strings.xml](../images/translations-click-strings.png)
    
    * Translate sentences on left side by adding new translated text or use & edit suggestion 
    
       ![Translation app](../images/translations-translate.png)
    
    
    ### Proofread strings for AAPS app
    
    * Proofreaders start by selecting "Proofread" when starting from the language home screen.
    
       ![Proofreading mode app](../images/translations-proofreading-mode.png) 
    
    
      and approve translated texts 
    
       ![approve text](../images/translations-proofreading.png)
    
    When a proofreader approves a translation it will be added to the next version of AAPS.
    
    (translations-translation-of-the-documentation)=
    ## Translation of the documentation
    
    * Click the name of the docs page you want to translate
    
    ![Click docs page](../images/translation_WikiPage.png)
    
    
    * Translate sentences by sentence
    
        1. Le texte jaune est le texte que vous travaillez actuellement.
    
        1. Le texte vert est déjà traduit. Vous n’avez rien à faire.
    
        1. Le texte rouge est le texte qui reste à traduire.
    
        1. Ceci est le texte source sur lequel vous travaillez pour le moment
    
        1. C'est la traduction que vous êtes en train de préparer. Vous pouvez copier le texte au dessus ou sélectionner une des suggestions au dessous.
    
        1. These are the suggestions for a translation. Especially you can see how much Crowdin rates this as a fit, or whether it was already translated in the past and only came back because the text was moved, not changed.
        1. Appuyez sur le bouton "Save" pour enregistrer une proposition pour la traduction. It will then be passed to a proofreader for final check.
    
    ![Translation docs](../images/translation_WikiTranslate.png)
    
    * A translated page will not be published in docs before 
    
        1. la traduction est approuvée
    
        1. la synchronisation entre Crowdin et Github s'est terminée (une fois par heure) et génèrera un PR pour Github.
    
        1. le PR de Github a été approuvé.
    
    En général, cela nécessite 1 à 3 jours mais peut prendre un peu plus de temps pendant les vacances.
    
    ### Traduction des liens
    
    ```{admonition} Les liens ne sont plus traduits
    :class: Remarque
    
    Les liens ne sont plus traduits. Dans le passé, nous avions un chapitre particulier ici mais c'est terminé depuis la migraton vers Markdown et le myst_parser nous créons explicitement des étiquettes dans le texte anglais ce qui permet de propager ces étiquettes et les liens vers les autres langues.
    
    

Vous traduisez le texte qui représente le lien. Please you have to be careful **not** to remove the link which is represented by a pair of `<0></0>` tags or if their are more in one paragraph other numbers.

C'est le travail des correcteurs pour avoir un regard spécial sur ça !

### Relecture (Proofreading)

* Les relecteurs doivent passer en mode Proofreading
    
    ![Mode Relecture (Proofreading)](../images/translation_WikiProofreadingmode.png)
    
    et approuver les textes traduits
    
    ![approuver le texte](../images/translations-proofreading.png)

* When a proofreader approves a translation it will be added to the next docs build which happens in no fixed schedule on demand but around once a week except during holidays. Pour accélérer le processus, vous pouvez informer l'équipe doc sur les nouvelles traductions.